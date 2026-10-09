const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'data/migrivo.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const services = data.MigrivoConsultancy.sections.ServiceDetails.variants.MigrivoServiceDetails1.services;

services.forEach(service => {
  service.subBanner.breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service', href: '/service' },
    { label: 'Service Detail', active: true }
  ];
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
console.log('Successfully updated all breadcrumbs in migrivo.json!');
