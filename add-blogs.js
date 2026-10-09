const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'migrivo.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const blogs = [
  {
    slug: "top-tourist-attractions-france",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "15 Aug 2026",
      author: "By Admin",
      readTime: "8 Min Read"
    },
    badge: "TRAVEL GUIDE",
    titlePrefix: "Top Tourist Attractions You Must Visit in ",
    titleHighlight: "France",
    introduction: "France is one of the most visited countries in the world, known for its rich history, stunning architecture, world-class cuisine, and vibrant culture. From charming cities to breathtaking landscapes, France offers something for every traveler. Whether you're a history enthusiast, a foodie, or an adventure seeker, here are the top tourist attractions you must visit in France.",
    items: [
      {
        number: "01",
        title: "Eiffel Tower - Paris",
        description: "The Eiffel Tower is the most iconic landmark in France and a symbol of romance, culture, and architectural brilliance. Standing tall in the heart of Paris, it offers breathtaking views of the city, especially at sunset. You can take an elevator to the top or enjoy a leisurely walk around the nearby gardens, making it a must-visit spot for every traveler."
      },
      {
        number: "02",
        title: "Louvre Museum - Paris",
        description: "Home to thousands of works of art, including the famous Mona Lisa, the Louvre Museum is a paradise for art and history lovers. Its stunning architecture and vast collection make it one of the world's most renowned museums. Spend time exploring its fascinating galleries and uncover masterpieces from different eras."
      },
      {
        number: "03",
        title: "French Riviera - Nice",
        description: "The French Riviera is known for its beautiful coastline, crystal-clear waters, and luxurious lifestyle. Cities like Nice, Cannes, and Monaco offer stunning beaches, charming old towns, and a vibrant nightlife. It's the perfect destination for those looking to relax, enjoy the Mediterranean sun, and experience the glamorous side of France."
      },
      {
        number: "04",
        title: "Mont Saint-Michel",
        description: "This historic island commune is one of France's most unique attractions. With its medieval abbey, picturesque views, and rich history, Mont Saint-Michel is a UNESCO World Heritage Site and a must-see destination. The island's magical atmosphere and breathtaking surroundings make it a truly unforgettable experience."
      }
    ],
    quote: "From iconic landmarks to hidden gems, France offers unforgettable experiences for every traveler. Plan your trip and explore the beauty, culture, and history of this incredible country."
  },
  {
    slug: "step-by-step-tourist-visa",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "12 Aug 2026",
      author: "By Admin",
      readTime: "5 Min Read"
    },
    badge: "VISA TIPS",
    titlePrefix: "Step-by-Step Guide to Apply for a ",
    titleHighlight: "Tourist Visa",
    introduction: "Applying for a tourist visa can be a complex process, but breaking it down into simple steps makes it manageable. Here is a complete guide to help you apply for your next travel visa smoothly.",
    items: [
      {
        number: "01",
        title: "Identify Visa Type",
        description: "Ensure you are applying for the correct visa category (tourism, business, medical) before starting."
      },
      {
        number: "02",
        title: "Gather Documents",
        description: "Prepare your passport, photographs, bank statements, itinerary, and any other required paperwork."
      }
    ],
    quote: "A well-prepared application is the first step toward a successful visa approval."
  },
  {
    slug: "why-australia-top-choice",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "09 Aug 2026",
      author: "By Admin",
      readTime: "7 Min Read"
    },
    badge: "DESTINATIONS",
    titlePrefix: "Why Australia is a Top Choice for ",
    titleHighlight: "Travelers",
    introduction: "Australia is a vast and incredibly diverse country. With its breathtaking natural wonders, vibrant cities, and unique wildlife, it attracts millions of visitors every year.",
    items: [
      {
        number: "01",
        title: "The Great Barrier Reef",
        description: "Explore the world's largest coral reef system, perfect for snorkeling and diving."
      },
      {
        number: "02",
        title: "Sydney Opera House",
        description: "A marvel of modern architecture and the most recognizable landmark in Australia."
      }
    ],
    quote: "There's nothing quite like the Australian outback and its coastal wonders."
  },
  {
    slug: "study-in-canada-benefits",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "05 Aug 2026",
      author: "By Admin",
      readTime: "6 Min Read"
    },
    badge: "STUDY ABROAD",
    titlePrefix: "Study in Canada: Benefits, Requirements and ",
    titleHighlight: "Opportunities",
    introduction: "Canada is consistently ranked as one of the best countries in the world for international students. With world-class institutions and a welcoming culture, it's a great place to advance your education.",
    items: [
      {
        number: "01",
        title: "Top-Tier Education",
        description: "Canadian degrees are recognized worldwide for their exceptional academic standards."
      },
      {
        number: "02",
        title: "Post-Graduation Work Options",
        description: "Canada offers excellent pathways for students to work after they graduate and eventually apply for PR."
      }
    ],
    quote: "Choosing to study in Canada is an investment in a brighter, global future."
  },
  {
    slug: "essential-travel-tips",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "02 Aug 2026",
      author: "By Admin",
      readTime: "4 Min Read"
    },
    badge: "TRAVEL TIPS",
    titlePrefix: "Essential Travel Tips for a ",
    titleHighlight: "Hassle-Free Journey",
    introduction: "Traveling should be relaxing, not stressful. By following a few simple tips, you can ensure your trip goes smoothly from start to finish.",
    items: [
      {
        number: "01",
        title: "Pack Light",
        description: "Only bring what you truly need. Rolling your clothes saves space and prevents wrinkles."
      },
      {
        number: "02",
        title: "Keep Digital Copies",
        description: "Always have digital copies of your passport, visa, and itinerary stored securely in the cloud."
      }
    ],
    quote: "A smart traveler is a happy traveler. Always plan ahead."
  },
  {
    slug: "latest-uk-visa-updates",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "28 Jul 2026",
      author: "By Admin",
      readTime: "9 Min Read"
    },
    badge: "VISA UPDATES",
    titlePrefix: "Latest UK Visa Updates You Should ",
    titleHighlight: "Know",
    introduction: "The UK government frequently updates its visa policies. Staying informed on these changes is crucial for successful applications.",
    items: [
      {
        number: "01",
        title: "Financial Requirements",
        description: "Make sure you meet the updated minimum financial threshold required for your specific visa category."
      },
      {
        number: "02",
        title: "Processing Times",
        description: "Be aware of the latest expected processing times to avoid delays in your travel plans."
      }
    ],
    quote: "Staying updated with immigration laws is the key to a successful journey to the UK."
  }
];

data.MigrivoConsultancy.sections.BlogDetails = {
  variants: {
    MigrivoBlogDetails1: {
      blogs: blogs
    }
  }
};

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Successfully updated BlogDetails in migrivo.json with all 6 blogs!');
