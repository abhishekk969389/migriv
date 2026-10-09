"use client";

import { useEffect, useRef, useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoTopBarData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

export default function TopBar() {
  const data: MigrivoTopBarData = site.topBar;
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(data.languages[0].label);
  const ref = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  if (!data) return null;

  return (
    <div className="w-full border-b border-gray-200 bg-gray-50 text-sm text-[#0f1f4b]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="flex flex-col items-center justify-between gap-2 py-2.5 lg:flex-row">
          {/* LEFT: contact info */}
          <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 lg:justify-start">
            <li className="flex items-center gap-2 pr-6">
              <FaLocationDot className="text-[#0b63e5]" size={16} />
              <span>{data.address.label}</span>
            </li>
            <li className="flex items-center gap-2 border-gray-300 px-6 lg:border-l">
              <MdEmail className="text-[#0b63e5]" size={20} />
              <a href={data.email.href} className="hover:text-[#0b63e5]">
                {data.email.label}
              </a>
            </li>
            <li className="flex items-center gap-2 border-gray-300 pl-6 lg:border-l">
              <FaPhone className="text-[#0b63e5]" size={15} />
              <a href={data.phone.href} className="hover:text-[#0b63e5]">
                {data.phone.label}
              </a>
            </li>
          </ul>

          {/* RIGHT: socials + language */}
          <div className="flex items-center">
            <ul className="flex items-center gap-5 pr-6">
              {data.socials.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="block transition-colors hover:text-[#0b63e5]"
                    >
                      <Icon size={17} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <div ref={ref} className="relative border-l border-gray-300 pl-6">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={open}
                className="flex items-center gap-2 hover:text-[#0b63e5]"
              >
                <HiOutlineGlobeAlt className="text-[#0b63e5]" size={20} />
                <span>{lang}</span>
                <FiChevronDown
                  size={16}
                  className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
              </button>

              {open && (
                <ul
                  role="listbox"
                  className="absolute right-0 top-full z-50 mt-3 w-40 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg"
                >
                  {data.languages.map((l) => (
                    <li key={l.id}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={l.label === lang}
                        onClick={() => {
                          setLang(l.label);
                          setOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                          l.label === lang ? "font-semibold text-[#0b63e5]" : ""
                        }`}
                      >
                        {l.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}