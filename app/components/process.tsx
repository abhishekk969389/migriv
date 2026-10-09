"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoProcessData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

export default function ProcessSection() {
  const data: MigrivoProcessData = site.process;
  if (!data) return null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden bg-[#0b1a3b] py-10">
      {/* Full-width background image */}
      <Image
        src={data.bgImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a3b]/70 via-[#0b1a3b]/55 to-[#0b1a3b]/75" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
            {data.badge}
          </p>
          <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#f26a0f]" />

          <h2 className="mt-2 text-3xl font-bold text-[#ffffff] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
            {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-100 sm:text-sm md:text-base lg:text-[16px]">
            {data.description}
          </p>
        </div>

        {/* Steps */}
        <ul className="mt-8 flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:gap-5">
          {data.steps.map((step, i) => {
            const Icon = getIcon(step.icon);
            return (
              <li
                key={step.id}
                className="relative w-full sm:w-[calc(50%-1rem)] lg:w-auto lg:flex-1"
              >
                <div className="relative flex h-full flex-col items-center rounded-2xl bg-white px-5 pb-6 pt-7 text-center shadow-xl">
                  {/* number badge */}
                  <span
                    className={`absolute -left-2 -top-4 flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white shadow-lg ring-2 ring-white/70 ${
                      i % 2 === 0 ? "bg-[#0b63e5]" : "bg-[#f26a0f]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* icon */}
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-[#0b63e5] lg:h-[88px] lg:w-[88px]">
                    <Icon size={34} />
                  </span>

                  <h3 className="mt-4 text-base font-bold text-[#101D33] lg:text-[17px]">{step.title}</h3>
                  <span className="mt-2 block h-[2px] w-8 bg-[#f26a0f]" />
                  <p className="mt-3 text-xs text-slate-500 sm:text-sm">{step.text}</p>
                </div>

                {/* arrow between cards (lg and up) */}
                {i < data.steps.length - 1 && (
                  <span className="absolute -right-[28px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#f26a0f] text-white shadow-lg lg:flex">
                    <FiArrowRight size={18} />
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-14 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#d95a05] sm:text-sm md:text-base"
          >
            {data.cta.label}
            <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}