"use client";

import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion, type Variants } from "framer-motion";
import { site } from "@/data/index";
import type { MigrivoBannerData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

/* ------------------------------ ANIMATIONS -------------------------------- */

// Parent: children ko ek ke baad ek trigger karta hai
const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

// Text blocks: fade + neeche se upar
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Badge ki orange line: left se grow
const lineGrow: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Feature icons list
const listContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* -------------------------------- BANNER ---------------------------------- */

export default function HeroBanner() {
  const data: MigrivoBannerData = site.banner;
  if (!data) return null;

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background image */}
      <Image
        src={data.bgImage}
        alt="Immigration and visa consultancy"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center] lg:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/60 lg:hidden" />
      
      <div className="relative z-10 mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="flex min-h-[500px] items-center sm:min-h-[480px] lg:min-h-[500px]">
          {/* LEFT content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-[640px]"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <motion.span
                variants={lineGrow}
                style={{ originX: 0 }}
                className="h-[2px] w-10 bg-[#f26a0f]"
              />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white sm:text-xs">
                {data.badge}
              </p>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-6xl xl:text-[68px]"
            >
              {data.titlePrefix} <br className="hidden sm:block" />
              <span className="text-[#f26a0f]">{data.titleHighlight}</span>{" "}
              {data.titleSuffix}
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-2 max-w-[460px] text-xs text-slate-200 sm:text-sm md:text-base"
            >
              {data.description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={data.primaryBtn.href}
                  className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d95a05] sm:px-8 sm:text-base"
                >
                  {data.primaryBtn.label}
                  <FiArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={data.secondaryBtn.href}
                  className="inline-flex items-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0b1a3b] sm:px-8 sm:text-base"
                >
                  {data.secondaryBtn.label}
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature icons */}
            <motion.ul
              variants={listContainer}
              className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4"
            >
              {data.features.map((feature, i) => {
                const Icon = getIcon(feature.icon);
                return (
                  <motion.li
                    key={feature.id}
                    variants={listItem}
                    className={`flex items-center gap-3 ${
                      i > 0 ? "sm:ml-5 sm:border-l sm:border-white/40 sm:pl-5" : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-orange-600 sm:h-11 sm:w-11">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-medium leading-tight text-white sm:text-sm">
                      {feature.labelLine1}
                      <br />
                      {feature.labelLine2}
                    </span>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}