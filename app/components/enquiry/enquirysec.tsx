"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Image from "next/image";
import type { IconType } from "react-icons";
import { site } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiFileText,
  FiList,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import { FaPlane } from "react-icons/fa";

const inputBase =
  "h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm text-[#101D33] placeholder:text-slate-400 outline-none transition focus:border-[#0b63e5] focus:ring-2 focus:ring-[#0b63e5]/20";

function Field({
  label,
  htmlFor,
  required,
  Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  Icon: IconType;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-[#101D33]">
        {label}
        {required && <span className="text-[#f26a0f]"> *</span>}
      </label>
      <div className="relative">
        <Icon
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
        />
        {children}
      </div>
    </div>
  );
}

export default function EnquirySection() {
  const data = site.enquiryPage;
  const [selects, setSelects] = useState({ country: "", travelers: "", type: "" });
  const [sent, setSent] = useState(false);

  if (!data) return null;

  const setSelect = (key: keyof typeof selects) => (value: string) =>
    setSelects((s) => ({ ...s, [key]: value }));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send FormData(e.currentTarget) to your API route / email service here
    setSent(true);
    e.currentTarget.reset();
    setSelects({ country: "", travelers: "", type: "" });
  };

  const selectClass = (value: string) =>
    `${inputBase} appearance-none pr-10 ${value ? "text-[#101D33]" : "text-slate-400"}`;

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid items-start gap-6 lg:grid-cols-[1.45fr_1fr] lg:gap-8">
          {/* LEFT: form card */}
          <div className="rounded-2xl bg-white p-5 shadow-[0_6px_28px_rgba(15,31,75,0.08)] ring-1 ring-gray-100 sm:p-7 lg:p-8">
            {/* Heading */}
            <div className="max-w-[760px]">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-10 bg-[#f26a0f]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0b63e5] sm:text-sm">
                  {data.formHeading.badge}
                </p>
              </div>

              <h2 className="mt-2 text-2xl font-bold text-[#101D33] sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]">
                {data.formHeading.titlePrefix} <span className="text-[#f26a0f]">{data.formHeading.titleHighlight}</span>
              </h2>

              <p className="mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
                {data.formHeading.description}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-5">
              <Field label="Full Name" htmlFor="fullName" required Icon={FiUser}>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your full name"
                  className={inputBase}
                />
              </Field>

              <Field label="Email Address" htmlFor="email" required Icon={FiMail}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Enter your email address"
                  className={inputBase}
                />
              </Field>

              <Field label="Phone Number" htmlFor="phone" required Icon={FiPhone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Enter your phone number"
                  className={inputBase}
                />
              </Field>

              <Field label="Country" htmlFor="country" required Icon={FiMapPin}>
                <select
                  id="country"
                  name="country"
                  required
                  value={selects.country}
                  onChange={(e) => setSelect("country")(e.target.value)}
                  className={selectClass(selects.country)}
                >
                  <option value="" disabled>
                    Select your country
                  </option>
                  {data.countries.map((c) => (
                    <option key={c} value={c} className="text-[#101D33]">
                      {c}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </Field>

              <Field label="City" htmlFor="city" Icon={FiFileText}>
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Enter your city"
                  className={inputBase}
                />
              </Field>

              <Field label="Preferred Destination" htmlFor="destination" Icon={FaPlane}>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="Enter destination (if any)"
                  className={inputBase}
                />
              </Field>

              <Field label="Number of Travelers" htmlFor="travelers" Icon={FiUsers}>
                <select
                  id="travelers"
                  name="travelers"
                  value={selects.travelers}
                  onChange={(e) => setSelect("travelers")(e.target.value)}
                  className={selectClass(selects.travelers)}
                >
                  <option value="">Select number of travelers</option>
                  {data.travelerOptions.map((t) => (
                    <option key={t} value={t} className="text-[#101D33]">
                      {t}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </Field>

              <Field label="Enquiry Type" htmlFor="enquiryType" Icon={FiList}>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={selects.type}
                  onChange={(e) => setSelect("type")(e.target.value)}
                  className={selectClass(selects.type)}
                >
                  <option value="">Select enquiry type</option>
                  {data.enquiryTypes.map((t) => (
                    <option key={t} value={t} className="text-[#101D33]">
                      {t}
                    </option>
                  ))}
                </select>
                <FiChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                />
              </Field>

              {/* Message (full width) */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-[#101D33]"
                >
                  Message / Additional Information
                </label>
                <div className="relative">
                  <FiMessageSquare
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your requirements, interests, or any specific details..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-3 text-sm text-[#101D33] placeholder:text-slate-400 outline-none transition focus:border-[#0b63e5] focus:ring-2 focus:ring-[#0b63e5]/20"
                  />
                </div>
              </div>

              {/* Success message */}
              {sent && (
                <div
                  role="status"
                  className="flex items-start gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 sm:col-span-2"
                >
                  <FiCheckCircle size={18} className="mt-0.5 shrink-0" />
                  Thank you! Your enquiry has been received. Our team will contact you within
                  24 hours.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#f26a0f] px-6 text-base font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:col-span-2"
              >
                Submit Enquiry
                <FiArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* RIGHT: image + support card */}
          <aside className="overflow-hidden rounded-2xl bg-[#f1f6fd] shadow-[0_6px_28px_rgba(15,31,75,0.08)] ring-1 ring-gray-100">
            <div className="relative aspect-[16/8] w-full">
              <Image
                src={data.sideImage}
                alt="Enquiry side image"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="p-5 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#f26a0f]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0b63e5]">
                  {data.supportHeading.badge}
                </p>
              </div>

              <h3 className="mt-2 text-2xl font-bold leading-tight text-[#101D33] sm:text-3xl lg:text-[32px]">
                {data.supportHeading.titlePrefix} <br className="hidden sm:block" />
                <span className="text-[#f26a0f]">{data.supportHeading.titleHighlight}</span>
              </h3>

              <p className="mt-2 text-xs text-slate-500 sm:text-sm md:text-base">
                {data.supportHeading.description}
              </p>

              <ul className="mt-5 space-y-4">
                {data.supportItems.map(({ title, text, icon }) => {
                  const Icon = getIcon(icon);
                  return (
                    <li key={title} className="flex items-center gap-4">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#f26a0f] shadow-md sm:h-16 sm:w-16">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-base font-bold leading-tight text-[#101D33]">
                          {title}
                        </h4>
                        <p className="mt-0.5 text-[13px] leading-snug text-slate-500 sm:text-sm">
                          {text}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}