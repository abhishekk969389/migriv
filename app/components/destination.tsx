import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
// npm i country-flag-icons
import { AU, CA, DE, EU, GB, NZ, US } from "country-flag-icons/react/3x2";
import type { ComponentType, SVGProps } from "react";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

type Destination = {
  name: string;
  text: string;
  href: string;
  image: string;
  Flag: any;
};

// Replace the image IDs with your own Unsplash photos
// Note: on lg and xl only the first 6 are shown (the 7th is hidden)
const destinations: Destination[] = [
  {
    name: "Canada",
    text: "Study, work and settle in a land of opportunities.",
    href: "/countries/canada",
    image: unsplash("1517935706615-2717063c2225"),
    Flag: CA,
  },
  {
    name: "USA",
    text: "Build your future in the world's leading economy.",
    href: "/countries/usa",
    image: unsplash("1485738422979-f5c462d49f74"),
    Flag: US,
  },
  {
    name: "UK",
    text: "World-class education and global career growth.",
    href: "/countries/uk",
    image: unsplash("1529655683826-aba9b3e77383"),
    Flag: GB,
  },
  {
    name: "Australia",
    text: "High-quality education and pristine lifestyle.",
    href: "/countries/australia",
    image: unsplash("1523482580672-f109ba8cb9be"),
    Flag: AU,
  },
  {
    name: "Germany",
    text: "Innovation, career opportunities and a strong future.",
    href: "/countries/germany",
    image: unsplash("1560969184-10fe8719e047"),
    Flag: DE,
  },
  {
    name: "New Zealand",
    text: "Live, work and explore a better tomorrow.",
    href: "/countries/new-zealand",
    image: unsplash("1507699622108-4be3abd695ad"),
    Flag: NZ,
  },
  {
    name: "Europe",
    text: "Experience diverse cultures and global opportunities.",
    href: "/countries/europe",
    image: unsplash("1502602898657-3e91760cbb34"),
    Flag: EU,
  },
];

export default function DestinationsSection() {
  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 ">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[1000px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#f26a0f]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b63e5]">
              Popular Destinations
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#101D33] sm:whitespace-nowrap sm:text-4xl lg:text-[50px] xl:text-[58px]">
            Explore Popular <span className="text-[#f26a0f]">Destinations</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
            Discover top study, work, and immigration destinations around the world with expert
            guidance for a brighter future.
          </p>
        </div>

        {/* Cards: 2 / 3 per row, 6 in one row on lg and xl */}
        <ul className="mt-6 flex flex-wrap justify-center gap-4">
          {destinations.map(({ name, text, href, image, Flag }, i) => (
            <li
              key={name}
              className={`w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(16.666%-0.834rem)] ${
                i >= 6 ? "lg:hidden" : ""
              }`}
            >
              <Link
                href={href}
                className="group relative block h-full rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                {/* image + flag */}
                <div className="relative">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(min-width: 1024px) 17vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="absolute -bottom-5 left-3 z-10 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-white shadow-md">
                    <Flag
                      title={name}
                      className="h-full w-full"
                      preserveAspectRatio="xMidYMid slice"
                    />
                  </span>
                </div>

                {/* info */}
                <div className="relative px-3 pb-4 pt-8">
                  <h3 className="pr-10 text-sm font-bold text-[#101D33] sm:text-base">{name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{text}</p>
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-[#f26a0f] transition-colors group-hover:bg-[#f26a0f] group-hover:text-white">
                    <FiArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Link
            href="/countries"
            className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:text-base"
          >
            View All Destinations
            <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}