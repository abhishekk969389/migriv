"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { MigrivoServiceDetailsData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

export function Overview({ data }: { data: MigrivoServiceDetailsData["overview"] }) {
  const BadgeIcon = getIcon(data.floatingBadge.icon);
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="relative mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* items-stretch: both columns get the same height */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-16">
          {/* Left Text: top starts with badge, bottom ends with last paragraph */}
          <div className="flex flex-col lg:justify-between">
            <div>
              <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
                {data.badge}
              </div>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl md:text-[40px]">
                {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
              </h2>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {data.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Image: same height as the left column on lg+ */}
          <div className="relative lg:min-h-[360px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src={data.image}
                alt={data.titleHighlight}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


export function BenefitsAndEnquiry({
  benefits,
  enquiryForm,
}: {
  benefits: MigrivoServiceDetailsData["benefits"];
  enquiryForm: MigrivoServiceDetailsData["enquiryForm"];
}) {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="relative mt-16">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          {/* Left: Benefits */}
          <div>
            <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
              {benefits.badge}
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl">
              {benefits.titlePrefix} <span className="text-[#f26a0f]">{benefits.titleHighlight}</span>
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.items.map((item, idx) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={idx} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                    <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-[#f1f6fd] text-[#f26a0f]">
                      <Icon size={35} />
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-[#101D33] text-sm sm:text-sm md:text-base">{item.title}</h4>
                      <p className="mt-1 text-slate-500">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Enquiry Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-8">
            <h3 className="text-xl font-bold text-[#101D33]">{enquiryForm.title}</h3>
            <p className="mt-2 text-sm text-slate-500">{enquiryForm.description}</p>
            <form className="mt-6 flex flex-col gap-4">
              {((enquiryForm as any).fields || [
                { name: "name", placeholder: "Full Name *" },
                { name: "email", placeholder: "Email Address *" },
                { name: "phone", placeholder: "Phone Number *" },
                { name: "destination", placeholder: "Select Destination *" },
                { name: "message", placeholder: "Your Message *" }
              ]).map((field: any) => (
                <div key={field.name}>
                  {field.name === "message" ? (
                    <textarea
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#0b63e5] focus:ring-2 focus:ring-[#0b63e5]/20"
                    />
                  ) : field.name === "destination" ? (
                    <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-slate-500 outline-none transition-colors focus:border-[#0b63e5] focus:ring-2 focus:ring-[#0b63e5]/20">
                      <option value="">{field.placeholder}</option>
                      <option value="canada">Canada</option>
                      <option value="usa">USA</option>
                      <option value="uk">UK</option>
                      <option value="australia">Australia</option>
                    </select>
                  ) : (
                    <input
                      type={field.name === "email" ? "email" : "text"}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-[#0b63e5] focus:ring-2 focus:ring-[#0b63e5]/20"
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-[#f26a0f] py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05]"
              >
                {enquiryForm.buttonText} →
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


export function Process({ data }: { data: MigrivoServiceDetailsData["process"] }) {
  const processImage =
    (data as any).image ||
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80";

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="mt-12 bg-[#f4f7fc] py-12">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid gap-12 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] lg:gap-16 items-stretch">
          {/* Left: Image (full height of the row) */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl shadow-lg lg:h-full lg:min-h-[360px]">
            <Image
              src={processImage}
              alt="Our Process"
              fill
              sizes="(min-width: 1280px) 450px, (min-width: 1024px) 400px, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right: Content & Steps */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
                {data.badge}
              </div>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl md:text-[40px]">
                {data.titlePrefix}{" "}
                <span className="text-[#f26a0f]">{data.titleHighlight}</span>
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 xl:gap-6">
              {data.steps.map((step, idx) => {
                const Icon = getIcon(step.icon);
                return (
                  <div key={idx} className="relative flex flex-col items-start">
                    {/* Dashed Arrow (hidden on last item) */}
                    {idx < data.steps.length - 1 && (
                      <div className="absolute left-[80px] top-[42px] hidden w-[calc(100%-80px)] items-center xl:w-[calc(100%-70px)] lg:flex">
                        <div className="h-0 w-full border-t border-dashed border-[#0b63e5]/40"></div>
                        <div className="h-2 w-2 border-t-2 border-r-2 border-[#0b63e5]/40 rotate-45 -ml-1"></div>
                      </div>
                    )}

                    {/* Circle Icon */}
                    <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#eef4fd] shadow-sm">
                      <div className="flex h-[80px] w-[80px] items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
                        <Icon size={42} className="text-[#0b63e5]" />
                      </div>
                    </div>

                    {/* Blue Number */}
                    <span className="mt-5 text-[15px] font-bold text-[#0b63e5] leading-none">
                      {step.number}
                    </span>

                    {/* Title with faint grey number */}
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <h4 className="text-base font-bold text-[#101D33]">{step.title}</h4>
                    </div>

                    {/* Text */}
                    <p className="mt-2 text-[13px] text-slate-500 leading-relaxed pr-4">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export function Documents({ data }: { data: MigrivoServiceDetailsData["documents"] }) {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="relative mt-12">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Text */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
                {data.badge}
              </div>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl">
                {data.titlePrefix}{" "}
                <span className="text-[#f26a0f]">{data.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-sm text-slate-500 sm:text-base">
                {data.description}
              </p>
            </div>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {data.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f26a0f] text-white">
                    <svg
                      className="h-3 w-3"
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

          {/* Right Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-xl lg:aspect-auto lg:h-full lg:min-h-[360px]">
            <Image
              src={data.image}
              alt="Documents"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

const unsplash = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export function Destinations({ data }: { data: MigrivoServiceDetailsData["destinations"] }) {
  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="mt-12">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="inline-flex max-w-max items-center rounded-md border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold tracking-wider text-slate-500 shadow-sm sm:text-xs">
          {data.badge}
        </div>
        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#101D33] sm:text-4xl">
          {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
        </h2>
        <p className="mt-2 text-sm text-slate-500 sm:text-base max-w-[600px]">
          {data.description}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {data.items.map((dest, idx) => {
            const slug = dest.name.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link href={`/countries/${slug}`} key={idx} className="group cursor-pointer block">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 shadow-sm transition-shadow group-hover:shadow-md">
                  <Image
                    src={unsplash(dest.image)}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-bold text-[#101D33]">{dest.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

