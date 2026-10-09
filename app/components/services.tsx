"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoServicesData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

export default function ServicesSection() {
  const data: MigrivoServicesData = site.services;
  if (!data) return null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#f26a0f]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b63e5]">
              {data.badge}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
            {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {data.services.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <li key={service.id}>
                <Link
                  href={service.href}
                  className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
                >
                  {/* image + icon badge */}
                  <div className="relative aspect-[7/3] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#f26a0f] shadow-md xl:h-[60px] xl:w-[60px]">
                      <Icon size={24} />
                    </span>
                  </div>

                  {/* info panel: full width, slightly overlapping the image with rounded top */}
                  <div className="relative -mt-3 flex items-center justify-between gap-3 rounded-t-xl bg-white px-5 py-4">
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-[#101D33] xl:text-[17px]">{service.title}</h3>
                      <p className="mt-1 text-[13px] leading-snug text-slate-500">{service.text}</p>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#f26a0f] transition-colors group-hover:bg-[#f26a0f] group-hover:text-white">
                      <FiArrowRight size={18} />
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.section>
  );
}