import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import {
  FaBriefcase,
  FaCamera,
  FaChartLine,
  FaGraduationCap,
  FaHome,
  FaTools,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=80`;

type Service = {
  title: string;
  text: string;
  href: string;
  image: string;
  Icon: IconType;
};

// Replace the image IDs with your own Unsplash photos
const services: Service[] = [
  {
    title: "Student Visa",
    text: "Study at top universities across the world.",
    href: "/visa-services/student",
    image: unsplash("1523050854058-8df90110c9f1"),
    Icon: FaGraduationCap,
  },
  {
    title: "Business Visa",
    text: "Expand your business opportunities globally.",
    href: "/visa-services/business",
    image: unsplash("1507679799987-c73779587ccf"),
    Icon: FaBriefcase,
  },
  {
    title: "Family Visa",
    text: "Reunite with your loved ones abroad.",
    href: "/visa-services/family",
    image: unsplash("1511895426328-dc8714191300"),
    Icon: FaUsers,
  },
  {
    title: "Tourist Visa",
    text: "Explore new destinations with ease.",
    href: "/visa-services/tourist",
    image: unsplash("1552832230-c0197dd311b5"),
    Icon: FaCamera,
  },
  {
    title: "Work Visa",
    text: "Build your international career with confidence.",
    href: "/visa-services/work",
    image: unsplash("1504307651254-35680f356dfd"),
    Icon: FaTools,
  },
  {
    title: "Permanent Residency",
    text: "Settle in your dream country for a brighter future.",
    href: "/visa-services/permanent-residency",
    image: unsplash("1517935706615-2717063c2225"),
    Icon: FaHome,
  },
  {
    title: "Investor Visa",
    text: "Invest in global opportunities with expert support.",
    href: "/visa-services/investor",
    image: unsplash("1521791136064-7986c2920216"),
    Icon: FaChartLine,
  },
  {
    title: "Dependent Visa",
    text: "Bring your family members with you abroad.",
    href: "/visa-services/dependent",
    image: unsplash("1476900543704-4312b78632f8"),
    Icon: FaUserFriends,
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#f26a0f]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b63e5]">
              Our Visa Services
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
            Outstanding Immigration Visa <span className="text-[#f26a0f]">Services</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
            We offer a wide range of visa services to help you achieve your global dreams with
            expert guidance and complete support.
          </p>
        </div>

        {/* Cards */}
        <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map(({ title, text, href, image, Icon }) => (
            <li key={title}>
              <Link
                href={href}
                className="group block overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-lg"
              >
                {/* image + icon badge */}
                <div className="relative aspect-[7/3] w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#f26a0f] shadow-md xl:h-[60px] xl:w-[60px]">
                    <Icon size={24} />
                  </span>
                </div>

                {/* info panel: full width, slightly overlapping the image with rounded top */}
                <div className="relative -mt-3 flex items-center justify-between gap-3 rounded-t-xl bg-white px-5 py-4">
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-[#101D33] xl:text-[17px]">{title}</h3>
                    <p className="mt-1 text-[13px] leading-snug text-slate-500">{text}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#f26a0f] transition-colors group-hover:bg-[#f26a0f] group-hover:text-white">
                    <FiArrowRight size={18} />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}