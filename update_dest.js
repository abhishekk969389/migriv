const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'migrivo.json');
let rawdata = fs.readFileSync(filePath, 'utf8');
let data = JSON.parse(rawdata);

const destinationMap = {
  "usa": [
    "Statue of Liberty",
    "Grand Canyon",
    "Yellowstone National Park",
    "Golden Gate Bridge",
    "Times Square",
    "Yosemite National Park",
    "Mount Rushmore",
    "Las Vegas Strip"
  ],
  "uk": [
    "Tower of London",
    "Stonehenge",
    "British Museum",
    "Big Ben",
    "Buckingham Palace",
    "Edinburgh Castle",
    "Roman Baths",
    "Lake District"
  ],
  "canada": [
    "Niagara Falls",
    "Banff National Park",
    "CN Tower",
    "Old Quebec",
    "Whistler",
    "Stanley Park",
    "Parliament Hill",
    "Victoria Inner Harbour"
  ],
  "australia": [
    "Sydney Opera House",
    "Great Barrier Reef",
    "Uluru-Kata Tjuta National Park",
    "Sydney Harbour Bridge",
    "Bondi Beach",
    "Great Ocean Road",
    "Kakadu National Park",
    "Daintree Rainforest"
  ],
  "germany": [
    "Brandenburg Gate",
    "Neuschwanstein Castle",
    "Cologne Cathedral",
    "Black Forest",
    "Miniatur Wunderland",
    "Berlin Wall",
    "Museum Island",
    "Zugspitze"
  ],
  "new-zealand": [
    "Milford Sound",
    "Hobbiton Movie Set",
    "Aoraki / Mount Cook",
    "Rotorua Geothermal Parks",
    "Waitomo Glowworm Caves",
    "Tongariro National Park",
    "Bay of Islands",
    "Franz Josef Glacier"
  ],
  "france": [
    "Eiffel Tower",
    "Louvre Museum",
    "Palace of Versailles",
    "Mont Saint-Michel",
    "French Riviera",
    "Château de Chambord",
    "Gorges du Verdon",
    "Chamonix-Mont-Blanc"
  ]
};

let updatedCount = 0;

function traverse(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(traverse);
  } else if (obj !== null && typeof obj === 'object') {
    if (Array.isArray(obj.countries)) {
      obj.countries.forEach(country => {
        if (country.slug && country.attractions && Array.isArray(country.attractions.items)) {
          const places = destinationMap[country.slug] || destinationMap[country.slug.toLowerCase()];
          if (places) {
            country.attractions.items.forEach((item, index) => {
              if (item.title && item.title.startsWith("Top Destination")) {
                item.title = places[index] || item.title;
                updatedCount++;
              }
            });
          }
        }
      });
    }
    for (const key in obj) {
      if (key !== 'countries') {
        traverse(obj[key]);
      }
    }
  }
}

traverse(data);

if (updatedCount > 0) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log(`Successfully updated ${updatedCount} destinations in JSON.`);
} else {
  console.log("No destinations were updated. Please check JSON structure.");
}
