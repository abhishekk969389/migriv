"use client";

import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";

const languages = ["English", "हिन्दी", "Español", "Français", "العربية"];

const socials = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="w-full border-b border-gray-200 bg-gray-50 text-sm text-[#0f1f4b]">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="flex flex-col items-center justify-between gap-2 py-2.5 lg:flex-row">
          {/* LEFT: contact info */}
          <ul className="flex flex-wrap items-center justify-center gap-x-0 gap-y-2 lg:justify-start">
            <li className="flex items-center gap-2 pr-6">
              <FaLocationDot className="text-[#0b63e5]" size={16} />
              <span>123 Business Street, New Delhi, India</span>
            </li>
            <li className="flex items-center gap-2 border-gray-300 px-6 lg:border-l">
              <MdEmail className="text-[#0b63e5]" size={20} />
              <a href="mailto:info@migrivo.com" className="hover:text-[#0b63e5]">
                info@migrivo.com
              </a>
            </li>
            <li className="flex items-center gap-2 border-gray-300 pl-6 lg:border-l">
              <FaPhone className="text-[#0b63e5]" size={15} />
              <a href="tel:+919876543210" className="hover:text-[#0b63e5]">
                +91 98765 43210
              </a>
            </li>
          </ul>

          {/* RIGHT: socials + language */}
          <div className="flex items-center">
            <ul className="flex items-center gap-5 pr-6">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="block transition-colors hover:text-[#0b63e5]"
                  >
                    <Icon size={17} />
                  </a>
                </li>
              ))}
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
                  {languages.map((l) => (
                    <li key={l}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={l === lang}
                        onClick={() => {
                          setLang(l);
                          setOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
                          l === lang ? "font-semibold text-[#0b63e5]" : ""
                        }`}
                      >
                        {l}
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