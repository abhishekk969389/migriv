const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'migrivo.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const getDestinations = () => {
  const countries = [
    { slug: "canada", name: "Canada", image: "1517935706615-2717063c2225" },
    { slug: "usa", name: "USA", image: "1485738422979-f5c462d49f74" },
    { slug: "uk", name: "UK", image: "1529655683826-aba9b3e77383" },
    { slug: "australia", name: "Australia", image: "1523482580672-f109ba8cb9be" },
    { slug: "germany", name: "Germany", image: "1560969184-10fe8719e047" },
    { slug: "new-zealand", name: "New Zealand", image: "1507699622108-4be3abd695ad" },
  ];

  return countries.map(c => ({
    slug: c.slug,
    subBanner: {
      title: "Destinations Detail",
      bgImage: `https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=1920&q=80`,
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Destinations", href: "/destination" },
        { label: "Destinations Detail", active: true }
      ]
    },
    overview: {
      badge: `ABOUT ${c.name.toUpperCase()}`,
      titlePrefix: "A Land of ",
      titleHighlight: "Opportunities",
      paragraphs: [
        `${c.name} is known for its high quality of life, world-class education, strong economy, and multicultural society. From stunning natural landscapes to vibrant cities, ${c.name} offers endless opportunities for students, professionals, families, and tourists.`,
        `Whether you're planning to study, work, visit, or settle, ${c.name} welcomes global talent and offers a safe, inclusive, and prosperous environment.`
      ],
      image: `https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=800&q=80`,
      features: [
        { icon: "FaGraduationCap", title: "World-Class Education", text: "Top-ranked universities and colleges" },
        { icon: "FaBriefcase", title: "Strong Economy", text: "Excellent career opportunities" },
        { icon: "FaUsers", title: "Multicultural Society", text: "Diverse and welcoming communities" },
        { icon: "FaShieldAlt", title: "High Quality of Life", text: "Safe, clean and well-developed cities" }
      ]
    },
    enquiryForm: {
      titlePrefix: "Enquire ",
      titleHighlight: "Now",
      description: `Get expert guidance for your ${c.name} visa application.`,
      fields: [
        { name: "name", type: "text", placeholder: "Full Name *", icon: "FiUser" },
        { name: "email", type: "email", placeholder: "Email Address *", icon: "FiMail" },
        { name: "phone", type: "tel", placeholder: "Phone Number *", icon: "FiPhone" },
        { name: "visaType", type: "select", placeholder: "Select Visa Type *", options: ["Student Visa", "Work Visa", "Visitor Visa", "PR & Immigration"], icon: "FiList" },
        { name: "message", type: "textarea", placeholder: "Your Message *" }
      ],
      buttonText: "Submit Enquiry"
    },
    attractions: {
      badge: "TOP ATTRACTIONS",
      titlePrefix: "Explore the Beauty of ",
      titleHighlight: c.name,
      description: `From breathtaking natural wonders to vibrant cities, ${c.name} offers unforgettable experiences.`,
      items: [
        { image: `https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=600&q=80`, title: "Top Destination 1", text: "World-famous natural wonder with stunning views." },
        { image: `https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=600&q=80`, title: "Top Destination 2", text: "A modern city with iconic landmarks and vibrant culture." },
        { image: `https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=600&q=80`, title: "Top Destination 3", text: "Breathtaking landscapes and outdoor adventures." },
        { image: `https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=600&q=80`, title: "Top Destination 4", text: "A beautiful coastal city surrounded by nature." }
      ]
    },
    visaOptions: {
      badge: "VISA TYPES",
      titlePrefix: `${c.name} `,
      titleHighlight: "Visa Options",
      description: `We assist with various types of ${c.name} visa applications, including:`,
      items: [
        { icon: "FaGraduationCap", title: "Student Visa", text: `Study at top ${c.name} universities and colleges.` },
        { icon: "FaBriefcase", title: "Work Visa", text: `Explore career opportunities in ${c.name}.` },
        { icon: "FaUsers", title: "Visitor Visa", text: "Visit for tourism, family or business purposes." },
        { icon: "FaHome", title: "PR & Immigration", text: `Settle in ${c.name} for a brighter future.` }
      ]
    },
    requirements: {
      badge: "VISA REQUIREMENTS",
      titlePrefix: "Documents Required for ",
      titleHighlight: `${c.name} Visa`,
      description: "The document requirements may vary by visa type, but generally include:",
      items: [
        "Valid Passport",
        "Employment Documents (for Work Visa)",
        "Recent Passport Size Photographs",
        "Travel Itinerary (for Visitor Visa)",
        "Completed Visa Application Form",
        "Invitation Letter (if required)",
        "Proof of Funds",
        "Medical Examination Report (if required)",
        "Educational Documents (for Student Visa)",
        "Additional Documents (as per embassy)"
      ],
      ctaCard: {
        titlePrefix: "Start Your",
        titleHighlight: `${c.name} Journey`,
        text: "Get expert consultation and make your visa process simple and hassle-free.",
        image: `https://images.unsplash.com/photo-${c.image}?auto=format&fit=crop&w=600&q=80`,
        buttonText: "Contact Us",
        buttonHref: "/contact"
      }
    }
  }));
};

data.MigrivoConsultancy.sections.DestinationDetails = {
  variants: {
    MigrivoDestinationDetails1: {
      countries: getDestinations()
    }
  }
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Successfully added DestinationDetails to migrivo.json');
