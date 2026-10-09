"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import type { IconType } from "react-icons";
import { site } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiFileText,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiPhone,
  FiUser,
} from "react-icons/fi";

const inputBase =
  "h-12 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm text-[#101D33] placeholder:text-slate-400 outline-none transition focus:border-[#0b63e5] focus:ring-2 focus:ring-[#0b63e5]/20";

function Field({
  label,
  htmlFor,
  Icon,
  children,
}: {
  label: string;
  htmlFor: string;
  Icon: IconType;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-[#101D33]">
        {label}
        <span className="text-[#f26a0f]"> *</span>
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

export default function ContactSection() {
  const data = site.contactPage;
  const [subject, setSubject] = useState("");
  const [sent, setSent] = useState(false);

  if (!data) return null;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send FormData(e.currentTarget) to your API route / email service here
    setSent(true);
    e.currentTarget.reset();
    setSubject("");
  };

  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* INFO CARDS */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {data.infoCards.map(({ title, text, lines, note, href, icon }) => {
            const Icon = getIcon(icon);
            return (
              <div
                key={title}
                className="rounded-xl bg-[#f1f6fd] p-5 ring-1 ring-[#0b63e5]/10 sm:p-6"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f26a0f] text-white shadow-md shadow-orange-300/50">
                  <Icon size={26} />
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#101D33]">{title}</h3>
                <p className="mt-1 text-[13px] leading-snug text-slate-500 sm:text-sm">{text}</p>
                <div className="mt-3 text-sm font-bold leading-snug text-[#0f1f4b]">
                  {href ? (
                    <a href={href} className="transition-colors hover:text-[#0b63e5]">
                      {lines[0]}
                    </a>
                  ) : (
                    lines.map((line) => <p key={line}>{line}</p>)
                  )}
                  {note && <p className="mt-0.5 text-xs font-medium text-slate-500">{note}</p>}
                </div>
              </div>
            );
          })}
        </div>

        {/* FORM + MAP */}
        <div className="mt-6 grid items-stretch gap-6 sm:mt-8 lg:grid-cols-[1.45fr_1fr] lg:gap-8">
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

            <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-5">
              <Field label="Full Name" htmlFor="fullName" Icon={FiUser}>
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

              <Field label="Email Address" htmlFor="email" Icon={FiMail}>
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

              <Field label="Phone Number" htmlFor="phone" Icon={FiPhone}>
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

              <Field label="Subject" htmlFor="subject" Icon={FiFileText}>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={`${inputBase} appearance-none pr-10 ${
                    subject ? "text-[#101D33]" : "text-slate-400"
                  }`}
                >
                  <option value="" disabled>
                    Select subject
                  </option>
                  {data.subjects.map((s) => (
                    <option key={s} value={s} className="text-[#101D33]">
                      {s}
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
                  Message<span className="text-[#f26a0f]"> *</span>
                </label>
                <div className="relative">
                  <FiMessageSquare
                    size={17}
                    className="pointer-events-none absolute left-3.5 top-3.5 text-slate-400"
                  />
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your travel plans, requirements, or any details..."
                    className="w-full resize-none rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-3 text-sm text-[#101D33] placeholder:text-slate-400 outline-none transition focus:border-[#0b63e5] focus:ring-2 focus:ring-[#0b63e5]/20"
                  />
                </div>
              </div>

              {sent && (
                <div
                  role="status"
                  className="flex items-start gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700 sm:col-span-2"
                >
                  <FiCheckCircle size={18} className="mt-0.5 shrink-0" />
                  Thank you! Your message has been sent. Our team will get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#f26a0f] px-6 text-base font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:col-span-2"
              >
                Send Message
                <FiArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* RIGHT: map + office card */}
          <aside className="flex flex-col gap-4 sm:gap-5">
            {/* Map: fills the space left above the office card */}
            <div className="relative min-h-[260px] flex-1 overflow-hidden rounded-2xl shadow-[0_6px_28px_rgba(15,31,75,0.12)] ring-1 ring-gray-200 sm:min-h-[300px]">
              <iframe
                title={data.officeCard.title}
                src={data.officeCard.mapUrl}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            {/* Office card */}
            <div className="rounded-2xl bg-[#0f1f4b] p-5 text-white shadow-[0_6px_28px_rgba(15,31,75,0.25)] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#f26a0f]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {data.officeCard.badge}
                </p>
              </div>

              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">{data.officeCard.title}</h3>

              <p className="mt-2 text-xs text-white/75 sm:text-sm">
                {data.officeCard.description}
              </p>

              <div className="mt-4 flex items-start gap-3 border-t border-white/15 pt-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f26a0f] text-white">
                  <FiMapPin size={18} />
                </span>
                <address className="text-sm font-semibold not-italic leading-snug sm:text-base">
                  {data.officeCard.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < data.officeCard.address.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}