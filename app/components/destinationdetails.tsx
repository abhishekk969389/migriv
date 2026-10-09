"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/app/components/ui/icons";
import type { MigrivoDestinationDetailsData } from "@/data/index";

export function DestinationOverview({ data }: { data: MigrivoDestinationDetailsData }) {
  const { overview, enquiryForm } = data;
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px] lg:items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {/* Top Row: Text & Image */}
            <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
              <div className="flex flex-col justify-center">
                <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-slate-50 px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
                  {overview.badge}
                </div>
                <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl">
                  {overview.titlePrefix} <span className="text-[#f26a0f]">{overview.titleHighlight}</span>
                </h2>
                <div className="mt-4 space-y-4 text-sm text-slate-600 sm:text-base leading-relaxed">
                  {overview.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md sm:aspect-auto sm:h-full sm:min-h-[250px]">
                <Image src={overview.image} alt={overview.titleHighlight} fill className="object-cover" />
              </div>
            </div>

          {/* Bottom Row: 4 Feature Cards */}
<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
  {overview.features.map((feature, idx) => {
    const Icon = getIcon(feature.icon);
    const isOrange = idx % 2 === 0; // 0,2 = orange | 1,3 = blue
    return (
      <div
        key={idx}
        className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
      >
        <span
          className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
            isOrange ? "bg-[#fff1e8] text-[#f26a0f]" : "bg-[#eaf1fd] text-[#0b63e5]"
          }`}
        >
          <Icon size={30} />
        </span>
        <h4 className="text-[15px] font-bold text-[#101D33]">{feature.title}</h4>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{feature.text}</p>
      </div>
    );
  })}
</div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl lg:p-8">
            <h3 className="text-2xl font-bold text-[#101D33]">
              {enquiryForm.titlePrefix} <span className="text-[#f26a0f]">{enquiryForm.titleHighlight}</span>
            </h3>
            <p className="mt-2 text-sm text-slate-500">{enquiryForm.description}</p>
            <form className="mt-6 flex flex-col gap-4">
              {enquiryForm.fields.map((field) => {
                const FieldIcon = field.icon ? getIcon(field.icon) : null;
                return (
                  <div key={field.name} className="relative">
                    {field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full rounded-xl border border-gray-200 bg-slate-50 p-4 text-sm outline-none transition-colors focus:border-[#f26a0f] focus:bg-white"
                      />
                    ) : field.type === "select" ? (
                      <div className="relative">
                        {FieldIcon && (
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <FieldIcon size={18} />
                          </div>
                        )}
                        <select className={`w-full appearance-none rounded-xl border border-gray-200 bg-slate-50 p-4 text-sm text-slate-500 outline-none transition-colors focus:border-[#f26a0f] focus:bg-white ${FieldIcon ? "pl-11" : ""}`}>
                          <option value="" disabled selected>{field.placeholder}</option>
                          {field.options?.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        {FieldIcon && (
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                            <FieldIcon size={18} />
                          </div>
                        )}
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className={`w-full rounded-xl border border-gray-200 bg-slate-50 p-4 text-sm outline-none transition-colors focus:border-[#f26a0f] focus:bg-white ${FieldIcon ? "pl-11" : ""}`}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#f26a0f] py-4 text-sm font-bold text-white transition-colors hover:bg-[#d95c0a]"
              >
                {enquiryForm.buttonText}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.section>
  );
}

export function DestinationAttractions({ data }: { data: MigrivoDestinationDetailsData["attractions"] }) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth > 1024 ? scrollRef.current.clientWidth / 2 : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="mt-12 bg-[#f8fafc] py-10">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
              {data.badge}
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl">
              {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 sm:text-base max-w-2xl">{data.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => scroll('left')} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-colors hover:bg-[#f26a0f] hover:text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={() => scroll('right')} className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-200 text-slate-600 transition-colors hover:bg-[#f26a0f] hover:text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="mt-10 flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
        >
          {data.items.map((item, idx) => (
            <div key={idx} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex-none snap-start group relative h-full overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgb(0,0,0,0.06)] transition-all hover:shadow-[0_4px_20px_rgb(0,0,0,0.1)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h4 className="text-[17px] font-bold text-[#101D33]">{item.title}</h4>
                <p className="mt-2 text-[13px] text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export function DestinationVisaOptions({ data }: { data: MigrivoDestinationDetailsData["visaOptions"] }) {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="mt-12">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div>
          <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-slate-50 px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
            {data.badge}
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl">
            {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
          </h2>
          <p className="mt-3 text-sm text-slate-500 sm:text-base max-w-2xl">{data.description}</p>
        </div>

       <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  {data.items.map((item, idx) => {
    const Icon = getIcon(item.icon);
    const isOrange = idx % 2 === 0; // 0,2 = orange | 1,3 = blue
    return (
      <div
        key={idx}
        className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
      >
        <span
          className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${
            isOrange ? "bg-[#fff1e8] text-[#f26a0f]" : "bg-[#eaf1fd] text-[#0b63e5]"
          }`}
        >
          <Icon size={32} />
        </span>
        <div>
          <h4 className="text-[16px] font-bold text-[#101D33]">{item.title}</h4>
          <p className="mt-1 text-[14px] leading-relaxed text-slate-500">{item.text}</p>
        </div>
      </div>
    );
  })}
</div>
      </div>
    </motion.section>
  );
}

export function DestinationRequirements({ data }: { data: MigrivoDestinationDetailsData["requirements"] }) {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="mt-12 mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] lg:items-stretch">
          {/* Left Column: Requirements */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex max-w-max items-center rounded-md border border-[#dbe6f7] bg-[#e8eefb] px-3 py-1 text-[11px] font-bold tracking-wider text-[#101D33] sm:text-xs">
              {data.badge}
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl">
              {data.titlePrefix}{" "}
              <span className="text-[#f26a0f]">{data.titleHighlight}</span>
            </h2>
            <p className="mt-3 text-sm text-slate-400 sm:text-base">{data.description}</p>

            {/* Checklist Card */}
            <div className="mt-6 px-5 py-5 sm:px-6">
              <ul className="grid gap-x-8 gap-y-4 sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-5">
                {data.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f26a0f] text-white">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-[#101D33]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Image + floating CTA Card */}
          <div className="relative min-h-[340px] w-full overflow-hidden rounded-2xl shadow-xl lg:min-h-[400px]">
            <Image
              src={data.ctaCard.image}
              alt="Start Journey"
              fill
              sizes="(min-width: 1280px) 440px, (min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />

            <div className="absolute inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-auto sm:right-6 sm:top-1/2 sm:w-[270px] sm:-translate-y-1/2">
              <div className="rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold leading-tight text-[#101D33]">
                  {data.ctaCard.titlePrefix} <br />
                  <span className="text-[#f26a0f]">{data.ctaCard.titleHighlight}</span>
                </h3>
                <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
                  {data.ctaCard.text}
                </p>
                <Link
                  href={data.ctaCard.buttonHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f26a0f] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#d95c0a]"
                >
                  {data.ctaCard.buttonText}
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
