import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Visa Services", href: "/visa-services" },
  { label: "Destinations", href: "/countries" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

const visaServices = [
  { label: "Student Visa", href: "/visa-services/student" },
  { label: "Work Visa", href: "/visa-services/work" },
  { label: "Business Visa", href: "/visa-services/business" },
  { label: "Family Visa", href: "/visa-services/family" },
  { label: "Tourist Visa", href: "/visa-services/tourist" },
  { label: "PR & Immigration", href: "/visa-services/permanent-residency" },
  { label: "Visa Consultation", href: "/contact" },
];

const destinations = [
  { label: "Canada", href: "/countries/canada" },
  { label: "Australia", href: "/countries/australia" },
  { label: "USA", href: "/countries/usa" },
  { label: "UK", href: "/countries/uk" },
  { label: "New Zealand", href: "/countries/new-zealand" },
  { label: "Germany", href: "/countries/germany" },
  { label: "Europe", href: "/countries/europe" },
  { label: "Dubai", href: "/countries/dubai" },
];

const socials = [
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

const contacts = [
  {
    Icon: FaMapMarkerAlt,
    lines: ["123 Business Street,", "New Delhi, India 110001"],
  },
  { Icon: FaPhoneAlt, lines: ["+91 98765 43210"], href: "tel:+919876543210" },
  { Icon: FaEnvelope, lines: ["info@migrivo.in"], href: "mailto:info@migrivo.in" },
  { Icon: FaClock, lines: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"] },
];

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
            className="group inline-flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-[#f26a0f]"
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
  return (
    <footer className="relative w-full overflow-hidden text-white mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Background image */}
      <Image
        src="/footer-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-bottom"
      />
      <div className="absolute inset-0 bg-[#081634]/60" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Main columns */}
        <div className="grid gap-10 pb-8 pt-12 sm:grid-cols-2 lg:grid-cols-3 lg:pb-10 lg:pt-14 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1.4fr] xl:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Migrivo home" className="inline-block">
              <Image
                src="/logo.png"
                alt="Migrivo Visa Consultants"
                width={240}
                height={100}
                className="h-18 w-40 object-contain object-left sm:h-22 sm:w-50 lg:h-20 lg:w-55 xl:h-25 xl:w-60"
              />
            </Link>
            <p className="mt-4 max-w-[340px] text-sm leading-relaxed text-white/90">
              We provide trusted immigration and visa consultancy services to help you study, work,
              visit or settle abroad with confidence.
            </p>
            <ul className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-[#f26a0f]"
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <LinkList items={quickLinks} />
          </div>

          {/* Visa services */}
          <div>
            <ColumnTitle>Our Visa Services</ColumnTitle>
            <LinkList items={visaServices} />
          </div>

          {/* Destinations */}
          <div>
            <ColumnTitle>Popular Destinations</ColumnTitle>
            <LinkList items={destinations} />
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1 xl:border-l xl:border-white/15 xl:pl-8">
            <ColumnTitle>Contact Information</ColumnTitle>
            <ul className="mt-5 space-y-4">
              {contacts.map(({ Icon, lines, href }) => (
                <li key={lines[0]} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f26a0f] text-white">
                    <Icon size={16} />
                  </span>
                  {href ? (
                    <a href={href} className="text-sm text-white/90 hover:text-[#f26a0f]">
                      {lines[0]}
                    </a>
                  ) : (
                    <address className="text-sm not-italic leading-snug text-white/90">
                      {lines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/20 py-5 text-sm text-white/90 sm:flex-row">
          <p>© 2026 Migrivo. All Rights Reserved.</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <li>
              <Link href="/privacy-policy" className="hover:text-[#f26a0f]">
                Privacy Policy
              </Link>
            </li>
            <li className="text-white/40">|</li>
            <li>
              <Link href="/terms" className="hover:text-[#f26a0f]">
                Terms &amp; Conditions
              </Link>
            </li>
            <li className="text-white/40">|</li>
            <li>
              <Link href="/sitemap" className="hover:text-[#f26a0f]">
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}