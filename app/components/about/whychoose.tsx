"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { getIcon } from "@/app/components/ui/icons";
import { site } from "@/data/index";
import type { MigrivoAboutPageData } from "@/data/index";
import { FaPlane } from "react-icons/fa";

export default function WhyChooseUsSection() {
  const data = site.aboutPage.whyChooseUs;
  if (!data) return null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* LEFT: content */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#f26a0f]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b63e5]">
                {data.badge}
              </p>
            </div>

            <h2 className="mt-2 text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
              {data.titlePrefix}{" "}
              <span className="text-[#f26a0f]">{data.titleHighlight}</span>
            </h2>

            <p className="mt-3 max-w-[560px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
              {data.description}
            </p>

            {/* Feature cards */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {data.features.map(({ title, text, icon }) => {
                const Icon = getIcon(icon);
                return (
                  <div
                    key={title}
                    className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-[0_6px_24px_rgba(15,31,75,0.08)] ring-1 ring-gray-100 sm:p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#f26a0f] sm:h-14 sm:w-14">
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base font-bold leading-tight text-[#101D33]">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-snug text-slate-500 sm:text-sm">
                        {text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: circular image collage (all positions in % so it scales) */}
          <div className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[520px]">
            {/* blue circle behind */}
            <span className="absolute left-0 top-0 aspect-square w-[29%] rounded-full bg-[#0b4fc4]" />

            {/* circle image */}
            <div className="absolute bottom-0 left-[9%] aspect-square w-[85%] overflow-hidden rounded-full">
              <Image
                src={data.image}
                alt="Why choose us image"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-[50%_25%]"
              />
            </div>

            {/* dashed flight path + plane */}
            <svg
              viewBox="0 0 100 200"
              fill="none"
              aria-hidden="true"
              className="absolute right-[1%] top-[17%] hidden h-[40%] w-[10%] sm:block"
            >
              <path
                d="M30 0 C 100 50, 100 150, 0 195"
                stroke="#f26a0f"
                strokeWidth="2"
                strokeDasharray="5 6"
                strokeLinecap="round"
              />
            </svg>
            <FaPlane
              aria-hidden="true"
              className="absolute right-0 top-[10%] h-[8%] w-[8%] text-[#f26a0f]"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}