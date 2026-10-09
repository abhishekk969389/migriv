"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoCtaData } from "@/data/index";

export default function CtaSection() {
  const data: MigrivoCtaData = site.cta;
  if (!data) return null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Image: full width on mobile (behind a white veil), right half on lg+ touching the screen edge */}
      <div className="absolute inset-0 lg:left-auto lg:w-[58%]">
        <Image
          src={data.bgImage}
          alt="Traveler with passport at the airport"
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-[50%_30%]"
        />
        {/* mobile: even white veil for readable text */}
        <div className="absolute inset-0 bg-white/85 lg:hidden" />
        {/* lg+: fade the image into white on the left */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/5 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="flex min-h-[380px] items-center py-14 sm:py-16 lg:min-h-[420px]">
          <div className="max-w-[680px]">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#f26a0f]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
                {data.badge}
              </p>
            </div>

            <h2 className="mt-2 text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
              {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
            </h2>

            <p className="mt-3 max-w-[520px] text-xs text-slate-600 sm:text-sm md:text-base lg:text-[16px]">
              {data.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={data.cta.href}
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:px-10 sm:text-base"
              >
                {data.cta.label}
                <FiArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}