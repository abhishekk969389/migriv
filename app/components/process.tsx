import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { FaComments, FaHourglassHalf, FaPassport } from "react-icons/fa";
import { FaFileCircleCheck, FaFilePen } from "react-icons/fa6";
import type { IconType } from "react-icons";

// Swap with your own Unsplash link (images.unsplash.com must be in next.config)
const BG_IMAGE =
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80";

type Step = { title: string; text: string; Icon: IconType };

const steps: Step[] = [
  {
    title: "Initial Consultation",
    text: "We understand your goals and assess your eligibility to suggest the right visa options.",
    Icon: FaComments,
  },
  {
    title: "Document Guidance",
    text: "We provide a detailed checklist and help you prepare and organize all required documents.",
    Icon: FaFileCircleCheck,
  },
  {
    title: "Application Filing",
    text: "Our experts complete and file your application accurately, ensuring all requirements are met.",
    Icon: FaFilePen,
  },
  {
    title: "Tracking & Updates",
    text: "We keep you informed at every stage and assist with any additional requirements.",
    Icon: FaHourglassHalf,
  },
  {
    title: "Visa Approval",
    text: "Receive your visa and get ready to begin your global journey with confidence.",
    Icon: FaPassport,
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 overflow-hidden bg-[#0b1a3b] py-10">
      {/* Full-width background image */}
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1a3b]/70 via-[#0b1a3b]/55 to-[#0b1a3b]/75" />

      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
            Our Process
          </p>
          <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#f26a0f]" />

          <h2 className="mt-2 text-3xl font-bold text-[#ffffff] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
            Our Visa <span className="text-[#f26a0f]">Process</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-100 sm:text-sm md:text-base lg:text-[16px]">
            We follow a simple and transparent process to make your immigration journey smooth,
            hassle-free and successful.
          </p>
        </div>

        {/* Steps */}
        <ul className="mt-8 flex flex-wrap justify-center gap-8 lg:flex-nowrap lg:gap-5">
          {steps.map(({ title, text, Icon }, i) => (
            <li
              key={title}
              className="relative w-full sm:w-[calc(50%-1rem)] lg:w-auto lg:flex-1"
            >
              <div className="relative flex h-full flex-col items-center rounded-2xl bg-white px-5 pb-6 pt-7 text-center shadow-xl">
                {/* number badge */}
                <span
                  className={`absolute -left-2 -top-4 flex h-11 w-11 items-center justify-center rounded-full text-base font-bold text-white shadow-lg ring-2 ring-white/70 ${
                    i % 2 === 0 ? "bg-[#0b63e5]" : "bg-[#f26a0f]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* icon */}
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-[#0b63e5] lg:h-[88px] lg:w-[88px]">
                  <Icon size={34} />
                </span>

                <h3 className="mt-4 text-base font-bold text-[#101D33] lg:text-[17px]">{title}</h3>
                <span className="mt-2 block h-[2px] w-8 bg-[#f26a0f]" />
                <p className="mt-3 text-xs text-slate-500 sm:text-sm">{text}</p>
              </div>

              {/* arrow between cards (lg and up) */}
              {i < steps.length - 1 && (
                <span className="absolute -right-[28px] top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#f26a0f] text-white shadow-lg lg:flex">
                  <FiArrowRight size={18} />
                </span>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-14 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#d95a05] sm:text-sm md:text-base"
          >
            Get a Quote
            <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}