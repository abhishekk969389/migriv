import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaGraduationCap, FaBriefcase, FaPlaneDeparture, FaRegFileAlt } from "react-icons/fa";

const features = [
  { label: ["Study", "Abroad"], Icon: FaGraduationCap },
  { label: ["Work", "Visa"], Icon: FaBriefcase },
  { label: ["Visit", "Visa"], Icon: FaPlaneDeparture },
  { label: ["PR", "Services"], Icon: FaRegFileAlt },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      {/* Background image */}
      <Image
        src="/banner-bg.png"
        alt="Immigration and visa consultancy"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] lg:object-center"
      />
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="flex min-h-[420px] items-center sm:min-h-[480px] lg:min-h-[500px]">
          {/* LEFT content */}
          <div className="max-w-[640px] ">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#f26a0f]" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white sm:text-xs">
                Your Global Journey Starts Here
              </p>
            </div>

            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-6xl xl:text-[68px]">
              Immigration &amp; <br className="hidden sm:block" />
              <span className="text-[#f26a0f]">Visa</span> Consultancy
            </h1>

            <p className="mt-2 max-w-[460px] text-xs text-slate-200 sm:text-sm md:text-base">
              Expert guidance for your study, work, visit or permanent residency journey.
            </p>

            {/* Buttons */}
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/visa-services"
                className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d95a05] sm:px-8 sm:text-base"
              >
                Explore Services
                <FiArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0b1a3b] sm:px-8 sm:text-base"
              >
                Contact Now
              </Link>
            </div>

            {/* Feature icons */}
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4">
              {features.map(({ label, Icon }, i) => (
                <li
                  key={label.join(" ")}
                  className={`flex items-center gap-3 ${
                    i > 0 ? "sm:ml-5 sm:border-l sm:border-white/40 sm:pl-5" : ""
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-orange-600 sm:h-11 sm:w-11">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-medium leading-tight text-white sm:text-sm">
                    {label[0]}
                    <br />
                    {label[1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}