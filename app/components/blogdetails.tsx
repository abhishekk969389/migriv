"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiUser, FiClock } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaLink, FaQuoteLeft } from "react-icons/fa";
import type { MigrivoBlogDetailsData } from "@/data/index";

export function BlogContent({ data }: { data: MigrivoBlogDetailsData }) {
  return (
    <article className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Hero Image */}
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-md">
        <Image 
          src={data.image} 
          alt={data.titleHighlight} 
          fill 
          className="object-cover" 
          priority
        />
      </div>

      {/* Meta Info */}
      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500 sm:gap-6">
        <div className="flex items-center gap-2">
          <FiCalendar size={16} />
          <span>{data.meta.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiUser size={16} />
          <span>{data.meta.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <FiClock size={16} />
          <span>{data.meta.readTime}</span>
        </div>
      </div>

      {/* Badge & Title */}
      <div className="mt-8">
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-8 bg-[#f26a0f]"></span>
          <span className="text-xs font-bold tracking-widest text-[#0b63e5] uppercase">
            {data.badge}
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-[#101D33] sm:text-4xl lg:text-[48px]">
          {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
        </h1>
        <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
          {data.introduction}
        </p>
      </div>

      {/* List Items */}
      <div className="mt-12 space-y-10">
        {data.items.map((item, idx) => (
          <div key={idx} className="flex gap-4 sm:gap-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f26a0f] text-lg font-bold text-white shadow-sm sm:h-14 sm:w-14 sm:text-xl">
              {item.number}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#101D33] sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="mt-6 flex gap-4 rounded-2xl bg-[#fff4ed] p-6 sm:p-8 lg:p-10">
        <FaQuoteLeft className="mt-1 shrink-0 text-3xl text-[#f26a0f]" />
        <p className="text-lg font-medium italic leading-relaxed text-[#101D33] sm:text-xl">
          {data.quote}
        </p>
      </div>

      {/* Share Article */}
      <div className="mt-8 flex flex-col items-center gap-4 border-t border-gray-200 pt-8 sm:flex-row sm:justify-start">
        <span className="font-bold text-[#101D33]">Share This Article:</span>
        <div className="flex items-center gap-3">
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition-transform hover:scale-110">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-transform hover:scale-110">
            <FaLinkedinIn size={18} />
          </a>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110">
            <FaWhatsapp size={20} />
          </a>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-transform hover:scale-110">
            <FaLink size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
