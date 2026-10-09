import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoBannerData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

export default function HeroBanner() {
  const data: MigrivoBannerData = site.banner;
  if (!data) return null;

  return (
    <section className="relative w-full">
      {/* Background image */}
      <Image
        src={data.bgImage}
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
                {data.badge}
              </p>
            </div>

            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-6xl xl:text-[68px]">
              {data.titlePrefix} <br className="hidden sm:block" />
              <span className="text-[#f26a0f]">{data.titleHighlight}</span> {data.titleSuffix}
            </h1>

            <p className="mt-2 max-w-[460px] text-xs text-slate-200 sm:text-sm md:text-base">
              {data.description}
            </p>

            {/* Buttons */}
            <div className="mt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={data.primaryBtn.href}
                className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d95a05] sm:px-8 sm:text-base"
              >
                {data.primaryBtn.label}
                <FiArrowRight size={18} />
              </Link>
              <Link
                href={data.secondaryBtn.href}
                className="inline-flex items-center rounded-full border border-white/80 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#0b1a3b] sm:px-8 sm:text-base"
              >
                {data.secondaryBtn.label}
              </Link>
            </div>

            {/* Feature icons */}
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4">
              {data.features.map((feature, i) => {
                const Icon = getIcon(feature.icon);
                return (
                  <li
                    key={feature.id}
                    className={`flex items-center gap-3 ${
                      i > 0 ? "sm:ml-5 sm:border-l sm:border-white/40 sm:pl-5" : ""
                    }`}
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/80 text-orange-600 sm:h-11 sm:w-11">
                      <Icon size={20} />
                    </span>
                    <span className="text-xs font-medium leading-tight text-white sm:text-sm">
                      {feature.labelLine1}
                      <br />
                      {feature.labelLine2}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}