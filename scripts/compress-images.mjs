import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const BACKUP_DIR = path.resolve('_originals_backup', 'public');
const TARGET_MAX_BYTES = 51200; // 50 KB hard limit
const TARGET_GOAL_BYTES = 49152; // 48 KB target

// 1. Ensure backup directory exists and copy original files
function ensureBackup(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      ensureBackup(srcPath, destPath);
    } else {
      if (!fs.existsSync(destPath)) {
        fs.copyFileSync(srcPath, destPath
          
        );
      }
    }
  }
}

console.log('Ensuring backup in _originals_backup/public...');
ensureBackup(PUBLIC_DIR, BACKUP_DIR);
console.log('Backup verified.');

// 2. Images already OK (do not touch)
const DO_NOT_TOUCH = new Set([
  'about/a2.jpg',
  'services/s5.jpg',
  'tes/t1.jpg',
  'tes/t4.jpg'
]);

// Helper to determine starting maxWidth based on image type / path
function getInitialMaxWidth(relPath, origWidth) {
  const norm = relPath.replace(/\\/g, '/');
  if (norm === 'logo.png') return 500;
  if (norm === 'destination/uk.jpg' || norm === 'destination/nz.jpg') return 700;
  if (norm.includes('banner') || norm.includes('footer-bg')) return 1600;
  return 800; // cards, photos, services, testimonials, about
}

// Recursively find all files
function getAllFiles(dir, base = '') {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, relPath));
    } else {
      results.push({ fullPath, relPath: relPath.replace(/\\/g, '/') });
    }
  }
  return results;
}

async function main() {
  // Check if banner.png exists and delete it if not used
  const bannerPngPath = path.join(PUBLIC_DIR, 'banner.png');
  let bannerDeleted = false;
  if (fs.existsSync(bannerPngPath)) {
    fs.unlinkSync(bannerPngPath);
    bannerDeleted = true;
    console.log('Deleted unused public/banner.png');
  }

  const allFiles = getAllFiles(PUBLIC_DIR);
  const reportRows = [];
  const extensionReplacements = {}; // e.g. { "/subbanner.png": "/subbanner.webp" }

  for (const file of allFiles) {
    const normPath = file.relPath;
    const origStat = fs.statSync(file.fullPath);
    const origSizeKB = (origStat.size / 1024).toFixed(1);

    if (DO_NOT_TOUCH.has(normPath)) {
      const metadata = await sharp(file.fullPath).metadata();
      reportRows.push({
        file: normPath,
        oldKB: `${origSizeKB} KB`,
        newKB: `${origSizeKB} KB`,
        oldDim: `${metadata.width}x${metadata.height}`,
        newDim: `${metadata.width}x${metadata.height}`,
        quality: 'Untouched',
        status: 'OK (Skipped)'
      });
      continue;
    }

    if (origStat.size <= TARGET_MAX_BYTES) {
      const metadata = await sharp(file.fullPath).metadata();
      reportRows.push({
        file: normPath,
        oldKB: `${origSizeKB} KB`,
        newKB: `${origSizeKB} KB`,
        oldDim: `${metadata.width}x${metadata.height}`,
        newDim: `${metadata.width}x${metadata.height}`,
        quality: 'Untouched',
        status: 'OK (<=50KB)'
      });
      continue;
    }

    // Process oversized image
    const metadata = await sharp(file.fullPath).metadata();
    const origWidth = metadata.width;
    const origHeight = metadata.height;
    const isPng = normPath.endsWith('.png');

    // We convert PNG to WebP to handle compression and alpha
    // For JPG, try WebP as well since WebP offers significantly better compression under 50KB
    const targetExt = '.webp';
    const newRelPath = normPath.replace(/\.(png|jpg|jpeg)$/i, targetExt);
    const newFullPath = path.join(PUBLIC_DIR, newRelPath);

    let currentMaxWidth = Math.min(origWidth, getInitialMaxWidth(normPath, origWidth));
    let bestBuffer = null;
    let finalQuality = 75;
    let finalWidth = currentMaxWidth;
    let finalHeight = Math.round((origHeight / origWidth) * currentMaxWidth);

    let found = false;

    // Search loop: reduce quality 75 down to 40 step 5; if still > 48KB, reduce width by 10%
    while (!found && currentMaxWidth >= 200) {
      finalWidth = currentMaxWidth;
      finalHeight = Math.round((origHeight / origWidth) * currentMaxWidth);

      for (let q = 75; q >= 40; q -= 5) {
        let pipeline = sharp(file.fullPath)
          .rotate() // auto-orient if EXIF orientation present
          .resize({ width: finalWidth, withoutEnlargement: true });

        pipeline = pipeline.webp({
          quality: q,
          effort: 6,
          smartSubsample: true,
          alphaQuality: 85
        });

        const buf = await pipeline.toBuffer();
        if (buf.length <= TARGET_GOAL_BYTES) {
          bestBuffer = buf;
          finalQuality = q;
          found = true;
          break;
        } else if (buf.length <= TARGET_MAX_BYTES && !bestBuffer) {
          bestBuffer = buf;
          finalQuality = q;
        }
      }

      if (!found) {
        currentMaxWidth = Math.floor(currentMaxWidth * 0.9);
      }
    }

    // Fallback if quality 40 + reduction didn't reach 48KB but has buffer under 51200
    if (!bestBuffer) {
      // Force aggressive compression down to 35
      for (let q = 35; q >= 25; q -= 5) {
        const buf = await sharp(file.fullPath)
          .resize({ width: finalWidth, withoutEnlargement: true })
          .webp({ quality: q, effort: 6, smartSubsample: true })
          .toBuffer();
        if (buf.length <= TARGET_MAX_BYTES) {
          bestBuffer = buf;
          finalQuality = q;
          break;
        }
      }
    }

    if (!bestBuffer || bestBuffer.length > TARGET_MAX_BYTES) {
      console.error(`FAILED to compress ${normPath} to <= 50KB! Size: ${bestBuffer ? bestBuffer.length : 'none'}`);
      process.exit(1);
    }

    // Write new file
    fs.writeFileSync(newFullPath, bestBuffer);
    
    // If the path changed (e.g. .png/.jpg -> .webp), record replacement and delete original
    if (newFullPath !== file.fullPath) {
      fs.unlinkSync(file.fullPath);
      extensionReplacements[`/${normPath}`] = `/${newRelPath}`;
    }

    const newSizeKB = (bestBuffer.length / 1024).toFixed(1);
    reportRows.push({
      file: newRelPath,
      oldKB: `${origSizeKB} KB`,
      newKB: `${newSizeKB} KB`,
      oldDim: `${origWidth}x${origHeight}`,
      newDim: `${finalWidth}x${finalHeight}`,
      quality: `q=${finalQuality}`,
      status: 'Compressed'
    });
  }

  // 3. Update references in data/migrivo.json and helper scripts
  console.log('\nExtension replacements map:');
  console.log(extensionReplacements);

  function updateReferencesInFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    for (const [oldPath, newPath] of Object.entries(extensionReplacements)) {
      if (content.includes(oldPath)) {
        content = content.replaceAll(oldPath, newPath);
        changed = true;
      }
    }
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated references in: ${filePath}`);
    }
  }

  updateReferencesInFile(path.resolve('data', 'migrivo.json'));
  updateReferencesInFile(path.resolve('script.js'));
  updateReferencesInFile(path.resolve('add-blogs.js'));
  updateReferencesInFile(path.resolve('add-destinations.js'));
  updateReferencesInFile(path.resolve('add-home-blogs.js'));
  updateReferencesInFile(path.resolve('add-services.js'));
  updateReferencesInFile(path.resolve('update_dest.js'));

  // Save report to JSON for inspection
  fs.writeFileSync('scripts/compression-report.json', JSON.stringify({ reportRows, extensionReplacements, bannerDeleted }, null, 2));

  console.log('\n--- COMPRESSION COMPLETED ---');
  console.table(reportRows);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
