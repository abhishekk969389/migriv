const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'migrivo.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const moreBlogs = [
  {
    slug: "vaccination-requirements-immigrant-visa",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "01 Nov 2026",
      author: "By Admin",
      readTime: "7 Min Read"
    },
    badge: "IMMIGRATION",
    titlePrefix: "Requirements for Vaccination for ",
    titleHighlight: "Immigrant Visa Applicants",
    introduction: "Medical examinations and vaccinations are a crucial part of the immigrant visa application process. To protect public health, most countries require prospective immigrants to be vaccinated against certain diseases before their visa can be approved.",
    items: [
      {
        number: "01",
        title: "Required Vaccines",
        description: "Depending on the country you are moving to, required vaccines may include COVID-19, Mumps, Measles, Rubella, Polio, Tetanus, and Hepatitis A and B."
      },
      {
        number: "02",
        title: "Medical Examination",
        description: "All applicants must have a medical examination by an authorized panel physician before their visa interview."
      },
      {
        number: "03",
        title: "Vaccination Records",
        description: "You must provide official vaccination records. If you are missing any required vaccines, the panel physician may administer them during your exam."
      },
      {
        number: "04",
        title: "Exemptions",
        description: "In some rare cases, waivers are available for applicants who object to vaccinations on religious or moral convictions, though these are difficult to obtain."
      }
    ],
    quote: "Ensuring you have the proper vaccinations is not just about fulfilling a visa requirement; it's about safeguarding global public health."
  },
  {
    slug: "travelling-america-tourism-business",
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
      date: "08 Nov 2026",
      author: "By Admin",
      readTime: "8 Min Read"
    },
    badge: "TRAVEL TIPS",
    titlePrefix: "Travelling America for Tourism or ",
    titleHighlight: "Business Meeting",
    introduction: "The United States is a vast country with a booming economy and endless tourist attractions. Whether you're visiting for a critical business meeting in New York or a family vacation to the Grand Canyon, securing the right visa is your first step.",
    items: [
      {
        number: "01",
        title: "B1 Business Visa",
        description: "The B-1 visa is for individuals traveling to the U.S. for business purposes such as attending meetings, consulting with associates, or attending conferences."
      },
      {
        number: "02",
        title: "B2 Tourist Visa",
        description: "The B-2 visa is for tourism, vacations, visiting family or friends, and medical treatments. Often, a B-1/B-2 combination visa is issued."
      },
      {
        number: "03",
        title: "ESTA for Visa Waiver Countries",
        description: "Citizens of participating countries in the Visa Waiver Program can travel to the U.S. for up to 90 days without a visa by applying for an ESTA."
      },
      {
        number: "04",
        title: "Preparing for the Interview",
        description: "Be prepared to prove your strong ties to your home country to show you intend to return after your short visit to the United States."
      }
    ],
    quote: "America offers boundless opportunities for both business professionals and adventure seekers. Start planning your journey today."
  },
  {
    slug: "cultural-encounters-cruise-booking",
    subBanner: {
      title: "Blogs Detail",
      bgImage: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1920&q=80",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blogs Detail", active: true }
      ]
    },
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    meta: {
      date: "10 Dec 2026",
      author: "By Admin",
      readTime: "6 Min Read"
    },
    badge: "TRAVEL GUIDE",
    titlePrefix: "Cultural Encounters And Connections ",
    titleHighlight: "Cruise Booking And Packages",
    introduction: "Cruising is no longer just about sitting by the pool; modern cruises offer deep cultural immersion, luxurious amenities, and the chance to wake up in a new country every day. Finding the right package can transform your vacation.",
    items: [
      {
        number: "01",
        title: "Choosing the Right Itinerary",
        description: "Consider what cultures you want to explore. Mediterranean cruises offer rich history, while Caribbean cruises focus on vibrant island culture."
      },
      {
        number: "02",
        title: "Shore Excursions",
        description: "Book guided tours that focus on local encounters—like cooking classes in Italy or visiting indigenous communities in Alaska."
      },
      {
        number: "03",
        title: "All-Inclusive Packages",
        description: "To avoid hidden costs, look for packages that include drinks, Wi-Fi, and gratuities so you can focus entirely on your experience."
      },
      {
        number: "04",
        title: "Visa Requirements for Cruising",
        description: "Remember that you may need multiple visas depending on the ports of call your cruise ship visits. Always check with a consultant beforehand."
      }
    ],
    quote: "A great cruise doesn't just take you to beautiful places; it connects you with the heart and soul of diverse cultures."
  }
];

const existingBlogs = data.MigrivoConsultancy.sections.BlogDetails.variants.MigrivoBlogDetails1.blogs;
data.MigrivoConsultancy.sections.BlogDetails.variants.MigrivoBlogDetails1.blogs = [...existingBlogs, ...moreBlogs];

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
console.log('Successfully added 3 homepage blogs to BlogDetails in migrivo.json!');
