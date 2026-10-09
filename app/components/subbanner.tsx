"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/index";
import type { MigrivoSubBannersData } from "@/data/index";
import { FaHome } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

/* ------------------------------ ANIMATIONS -------------------------------- */

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const crumbsContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const crumb: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ------------------------------- SUB BANNER -------------------------------- */

interface SubBannerProps {
  pageKey?: string;
  title?: string;
  bgImage?: string;
  breadcrumbs?: { label: string; href?: string; active?: boolean }[];
}

export default function SubBanner({
  pageKey = "about",
  title,
  bgImage,
  breadcrumbs,
}: SubBannerProps) {
  // Try to find data in the site.subBanners object based on the pageKey
  const bannerData = site.subBanners[pageKey as keyof MigrivoSubBannersData];

  const displayTitle = title || bannerData?.title || "Page Title";
  const displayBgImage = bgImage || bannerData?.bgImage || "/placeholder-banner.jpg";
  const displayBreadcrumbs = breadcrumbs || bannerData?.breadcrumbs || [
    { label: "Home", href: "/" },
    { label: displayTitle, active: true },
  ];

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#081634] px-4 py-28 text-center sm:py-32 md:py-36 lg:py-30 xl:py-35">
      {/* Background image & overlays (no animation) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={displayBgImage}
          alt={displayTitle}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#081634]/60" />
      </div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-[1320px]"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-[64px]"
        >
          {displayTitle}
        </motion.h1>

        {/* Breadcrumbs */}
        <motion.div
          variants={crumbsContainer}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-white/90 sm:mt-5 sm:text-base"
        >
          <motion.div variants={crumb}>
            <Link
              href="/"
              aria-label="Home"
              className="block transition-colors hover:text-[#f26a0f]"
            >
              <FaHome size={16} />
            </Link>
          </motion.div>

          {displayBreadcrumbs.map((item, idx) => (
            <React.Fragment key={idx}>
              <motion.span variants={crumb} className="flex items-center">
                <FiChevronRight size={16} className="mx-0.5 text-white/60" />
              </motion.span>
              <motion.span variants={crumb}>
                {item.href && !item.active ? (
                  <Link
                    href={item.href}
                    className="font-medium transition-colors hover:text-[#f26a0f]"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white">{item.label}</span>
                )}
              </motion.span>
            </React.Fragment>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}