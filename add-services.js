const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'data/migrivo.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const baseServices = data.MigrivoConsultancy.sections.ServiceDetails.variants.MigrivoServiceDetails1.services;

const touristService = baseServices.find(s => s.slug === 'tourist');

const otherSlugs = [
  { slug: 'work', title: 'Work Visa' },
  { slug: 'business', title: 'Business Visa' },
  { slug: 'family', title: 'Family Visa' },
  { slug: 'permanent-residency', title: 'Permanent Residency' },
  { slug: 'investor', title: 'Investor Visa' },
  { slug: 'dependent', title: 'Dependent Visa' }
];

for (const s of otherSlugs) {
  if (baseServices.some(b => b.slug === s.slug)) continue;
  
  const newService = JSON.parse(JSON.stringify(touristService));
  newService.slug = s.slug;
  newService.overview.titleHighlight = s.title + '?';
  newService.benefits.titleHighlight = s.title + ' Services?';
  newService.process.titleHighlight = s.title;
  newService.documents.titleHighlight = s.title;
  newService.destinations.titleHighlight = s.title;
  baseServices.push(newService);
}

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log('Successfully added dummy data for all services!');
