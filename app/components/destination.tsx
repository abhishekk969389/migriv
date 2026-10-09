"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoDestinationsData } from "@/data/index";
import { getFlag } from "@/app/components/ui/icons";

export default function DestinationsSection({ layout = "home" }: { layout?: "home" | "page" }) {
  const data: MigrivoDestinationsData = site.destinations;
  if (!data) return null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 ">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[1000px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#f26a0f]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b63e5]">
              {data.badge}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#101D33] sm:whitespace-nowrap sm:text-4xl lg:text-[50px] xl:text-[58px]">
            {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-8 flex flex-wrap justify-center gap-4">
          {data.destinations.map((destination, i) => {
            const Flag = getFlag(destination.flag);
            
            // For home page: 6 cards per row, hide beyond 6th on lg
            // For destination page: 3 cards per row, show all
            const widthClass = layout === "home" 
              ? "w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(16.666%-0.834rem)]"
              : "w-[calc(100%-0rem)] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]";
            
            const hiddenClass = layout === "home" && i >= 6 ? "lg:hidden" : "";

            return (
              <li key={destination.id} className={`${widthClass} ${hiddenClass}`}>
                <Link
                  href={destination.href}
                  className="group relative block h-full overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-xl ring-1 ring-gray-100"
                >
                  {layout === "home" ? (
                    <>
                      {/* Home Layout */}
                      <div className="relative">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-xl">
                          <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            sizes="(min-width: 1024px) 17vw, (min-width: 640px) 33vw, 50vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <span className="absolute -bottom-5 left-3 z-10 h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-white shadow-md">
                          <Flag className="h-full w-full" preserveAspectRatio="xMidYMid slice" />
                        </span>
                      </div>
                      <div className="relative px-3 pb-4 pt-8">
                        <h3 className="pr-10 text-sm font-bold text-[#101D33] sm:text-base">{destination.name}</h3>
                        <p className="mt-1 text-xs text-slate-500 line-clamp-2">{destination.text}</p>
                        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-[#f26a0f] transition-colors group-hover:bg-[#f26a0f] group-hover:text-white">
                          <FiArrowRight size={16} />
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Page Layout (Like Screenshot) */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={destination.image}
                          alt={destination.name}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-3 py-4 sm:py-5">
                        <span className="h-6 w-6 shrink-0 overflow-hidden rounded-full shadow-sm">
                          <Flag className="h-full w-full" preserveAspectRatio="xMidYMid slice" />
                        </span>
                        <h3 className="text-base font-bold text-[#101D33] sm:text-lg">{destination.name}</h3>
                      </div>
                    </>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA (only show on home) */}
        {layout === "home" && (
          <div className="mt-8 text-center sm:mt-10">
            <Link
              href={data.cta.href}
              className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:text-base"
            >
              {data.cta.label}
              <FiArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </motion.section>
  );
}