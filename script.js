const fs = require('fs');

const raw = fs.readFileSync('data/migrivo.json', 'utf8');
let data = JSON.parse(raw);

// Available images
const aboutImages = ['/about/a1.webp', '/about/a2.jpg', '/about/a3.webp'];
const destinationImages = ['/destination/aus.webp', '/destination/canada.webp', '/destination/germany.webp', '/destination/nz.webp', '/destination/uk.webp', '/destination/usa.webp'];
const serviceImages = ['/services/s1.webp', '/services/s2.webp', '/services/s3.webp', '/services/s4.webp', '/services/s5.jpg'];
const tesImages = ['/tes/t1.jpg', '/tes/t2.webp', '/tes/t3.webp', '/tes/t4.jpg'];
const allImages = [...aboutImages, ...destinationImages, ...serviceImages, ...tesImages];

let counters = {
    about: 0,
    dest: 0,
    service: 0,
    tes: 0,
    other: 0
};

function getNextImage(type) {
    if (type === 'about') return aboutImages[counters.about++ % aboutImages.length];
    if (type === 'destination') return destinationImages[counters.dest++ % destinationImages.length];
    if (type === 'service') return serviceImages[counters.service++ % serviceImages.length];
    if (type === 'tes') return tesImages[counters.tes++ % tesImages.length];
    return allImages[counters.other++ % allImages.length];
}

// Recursively traverse and replace URLs
function traverseAndReplace(obj, contextType) {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            traverseAndReplace(obj[i], contextType);
        }
    } else if (obj !== null && typeof obj === 'object') {
        // Try to infer context type from keys if not provided or to override
        let newContextType = contextType;
        if (obj.slug && typeof obj.slug === 'string') {
            if (obj.slug.includes('about')) newContextType = 'about';
            else if (obj.slug.includes('service')) newContextType = 'service';
            else if (obj.slug.includes('destination')) newContextType = 'destination';
        }
        
        for (const key in obj) {
            if (typeof obj[key] === 'string' && obj[key].startsWith('http')) {
                // Determine which image to use
                let currentContext = newContextType || 'other';
                // Check if key or parent suggests context
                if (key.toLowerCase().includes('about') || (contextType && contextType.includes('about'))) currentContext = 'about';
                else if (key.toLowerCase().includes('service') || (contextType && contextType.includes('service'))) currentContext = 'service';
                else if (key.toLowerCase().includes('destination') || (contextType && contextType.includes('destination'))) currentContext = 'destination';
                else if (key.toLowerCase().includes('testimonial') || key.toLowerCase().includes('tes') || (contextType && contextType.includes('testimonial'))) currentContext = 'tes';
                
                // If it's a known URL (image), replace it
                if (obj[key].includes('unsplash') || obj[key].includes('images') || obj[key].match(/\.(jpg|jpeg|png|gif)/i)) {
                     obj[key] = getNextImage(currentContext);
                }
            } else {
                traverseAndReplace(obj[key], newContextType);
            }
        }
    }
}

// We could be more specific based on the actual keys of migrivo.json
// Let's do a more targeted approach if we know the top-level keys
for (const key in data) {
    let type = 'other';
    if (key.toLowerCase().includes('about')) type = 'about';
    else if (key.toLowerCase().includes('service')) type = 'service';
    else if (key.toLowerCase().includes('destination')) type = 'destination';
    else if (key.toLowerCase().includes('testimonial')) type = 'tes';
    
    traverseAndReplace(data[key], type);
}

fs.writeFileSync('data/migrivo.json', JSON.stringify(data, null, 2));
console.log('Done replacing images');
