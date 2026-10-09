"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronDown, FiArrowRight, FiMenu, FiX, FiPhone } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoHeaderData } from "@/data/index";

export default function Navbar() {
  const data: MigrivoHeaderData = site.navbar;
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // desktop dropdown
  const [mobileSub, setMobileSub] = useState<string | null>(null); // mobile accordion
  const navRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // close dropdown on outside click
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  if (!data) return null;

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* LEFT: logo */}
          <Link href="/" className="shrink-0" aria-label="Migrivo home">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={260}
              height={80}
              priority
              className="h-18 w-40 sm:h-22 sm:w-50 lg:w-55 lg:h-20 xl:w-60 xl:h-25"
            />
          </Link>

          {/* CENTER: nav links (lg and up) */}
          <nav ref={navRef} className="hidden lg:block">
            <ul className="flex items-center gap-4 text-sm lg:text-[15px] xl:text-[16px] font-semibold text-[#0f1f4b] lg:gap-8 xl:gap-8 xl:text-[15px]">
              {data.navItems.map((item) => (
                <li key={item.id} className="relative">
                  {item.children ? (
                    <div 
                      className="group"
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <Link
                        href={item.href || "#"}
                        className={`flex items-center gap-1 whitespace-nowrap py-6 hover:text-[#0b63e5] xl:gap-1 ${
                          isActive(item.href) ? "text-[#0b63e5]" : ""
                        }`}
                      >
                        {item.label}
                        <FiChevronDown
                          size={16}
                          className={`transition-transform ${
                            openMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </Link>
                      {openMenu === item.label && (
                        <div className="absolute left-0 top-[100%] z-50 pt-2">
                          <ul className="w-52 overflow-hidden rounded-md border border-gray-100 bg-white py-1 shadow-lg">
                            {item.children.map((c) => (
                              <li key={c.id}>
                                <Link
                                  href={c.href}
                                  className="block px-4 py-2 hover:bg-gray-50 hover:text-[#0b63e5]"
                                >
                                  {c.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`relative block whitespace-nowrap py-2 hover:text-[#0b63e5] ${
                        isActive(item.href) ? "text-[#0b63e5]" : ""
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#f26a0f]" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: call number + CTA button */}
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 border-l border-gray-200 pl-4 lg:flex xl:gap-3 xl:pl-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-[#f26a0f] xl:h-11 xl:w-11">
                <FiPhone size={16} />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-gray-500">{data.phone.text}</p>
                <a
                  href={`tel:${data.phone.number}`}
                  className="whitespace-nowrap text-sm font-semibold text-[#0f1f4b] hover:text-[#0b63e5] xl:text-[15px]"
                >
                  {data.phone.label}
                </a>
              </div>
            </div>

            <Link
              href={data.cta.href}
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-[#f26a0f] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#d95a05] sm:inline-flex xl:px-6 xl:py-3 xl:text-[15px]"
            >
              {data.cta.label}
              <FiArrowRight size={18} />
            </Link>

            {/* hamburger (below lg) */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="rounded-md p-2 text-[#0f1f4b] hover:bg-gray-100 lg:hidden"
            >
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER (below lg) */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${mobileOpen ? "visible" : "invisible"}`}
        aria-hidden={!mobileOpen}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
            <Image src={data.logo.src} alt={data.logo.alt} width={160} height={50} className="h-10 w-auto" />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="rounded-md p-2 text-[#0f1f4b] hover:bg-gray-100"
            >
              <FiX size={24} />
            </button>
          </div>

          <ul className="flex-1 overflow-y-auto px-4 py-2 text-[#0f1f4b]">
            {data.navItems.map((item) => (
              <li key={item.id} className="border-b border-gray-100">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileSub(mobileSub === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between py-3 font-medium"
                    >
                      {item.label}
                      <FiChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileSub === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileSub === item.label && (
                      <ul className="pb-2 pl-4">
                        {item.children.map((c) => (
                          <li key={c.id}>
                            <Link href={c.href} className="block py-2 text-sm hover:text-[#0b63e5]">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-3 font-medium ${
                      isActive(item.href) ? "text-[#0b63e5]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="space-y-4 border-t border-gray-100 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-[#f26a0f]">
                <FiPhone size={18} />
              </span>
              <div className="leading-tight">
                <p className="text-xs text-gray-500">{data.phone.text}</p>
                <a href={`tel:${data.phone.number}`} className="font-semibold text-[#0f1f4b]">
                  {data.phone.label}
                </a>
              </div>
            </div>
            <Link
              href={data.cta.href}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#f26a0f] px-6 py-3 font-semibold text-white hover:bg-[#d95a05]"
            >
              {data.cta.label}
              <FiArrowRight size={18} />
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}