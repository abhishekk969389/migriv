"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiChevronRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoFooterData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h3 className="text-lg font-semibold text-white">{children}</h3>
      <span className="mt-2 block h-[2px] w-9 bg-[#f26a0f]" />
    </>
  );
}

function LinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="group inline-flex items-center gap-1.5 text-sm text-white/90 transition-colors hover:text-[#f26a0f] xl:gap-2"
          >
            <FiChevronRight size={16} className="shrink-0" />
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  const data: MigrivoFooterData = site.footer;
  const pathname = usePathname();
  if (!data) return null;

  const noTopMarginPages = ["/about", "/service", "/destination"];
  const hasNoMargin =
    noTopMarginPages.includes(pathname || "") ||
    pathname?.startsWith("/visa-services") ||
    pathname?.startsWith("/countries");

  return (
    <footer
      className={`relative w-full overflow-hidden text-white ${
        hasNoMargin ? "" : "mt-8 sm:mt-10 md:mt-12 lg:mt-14"
      }`}
    >
      {/* Background image */}
      <Image
        src={data.bgImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-[#081634]/60" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Main columns */}
        <div className="grid gap-10 pb-8 pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr] lg:gap-6 lg:pb-10 lg:pt-14 xl:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Migrivo home" className="inline-block">
              <Image
                src={data.logo.src}
                alt={data.logo.alt}
                width={240}
                height={100}
                className="h-18 w-40 object-contain object-left sm:h-22 sm:w-50 lg:h-16 lg:w-44 xl:h-25 xl:w-60"
              />
            </Link>
            <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-white/90">
              {data.aboutText}
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {data.socials.map((social) => {
                const Icon = getIcon(social.icon);
                return (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-[#f26a0f] lg:h-9 lg:w-9 xl:h-10 xl:w-10"
                    >
                      <Icon size={16} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList items={data.quickLinks} />
          </div>

          {/* Visa services */}
          <div>
            <ColumnTitle>Our Visa Services</ColumnTitle>
            <LinkList items={data.visaServices} />
          </div>

          {/* Destinations */}
          <div>
            <ColumnTitle>Popular Destinations</ColumnTitle>
            <LinkList items={data.destinations} />
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-white/15 lg:pl-6 xl:pl-8">
            <ColumnTitle>Contact Information</ColumnTitle>
            <ul className="mt-5 space-y-4">
              {data.contacts.map((contact) => {
                const Icon = getIcon(contact.icon);
                return (
                  <li key={contact.id} className="flex items-center gap-3 xl:gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f26a0f] text-white lg:h-9 lg:w-9 xl:h-10 xl:w-10">
                      <Icon size={16} />
                    </span>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="break-words text-sm text-white/90 hover:text-[#f26a0f]"
                      >
                        {contact.lines[0]}
                      </a>
                    ) : (
                      <address className="text-sm not-italic leading-snug text-white/90">
                        {contact.lines.map((l, idx) => (
                          <span key={idx} className="block">
                            {l}
                          </span>
                        ))}
                      </address>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/20 py-5 text-sm text-white/90 sm:flex-row">
          <p>{data.copyright}</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            {data.bottomLinks.map((link, idx) => (
              <li key={link.id} className="flex items-center gap-4">
                {idx > 0 && <span className="text-white/40">|</span>}
                <Link href={link.href} className="hover:text-[#f26a0f]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}