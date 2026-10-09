import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { site } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export default function ThankYouSection() {
  const data = site.thankuPage;
  if (!data) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Image: full width on mobile (behind a white veil). On lg+ its width is tied to the
          1320px container (50% + 106px), so on wide screens it does NOT keep growing and the
          tower is not over-zoomed; it still touches the right edge of the screen. */}
      <div className="absolute inset-0 lg:left-auto lg:w-[calc(50%+106px)]">
        <Image
          src={data.bgImage}
          alt="Thank you page background"
          fill
          priority
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-right"
        />
        {/* mobile: even white veil for readable text */}
        <div className="absolute inset-0 bg-white/85 lg:hidden" />
        {/* lg+: fade the image into white on the left */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-white via-white/10 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-[1320px] flex-col justify-between gap-10 px-4 pb-4 pt-12 sm:px-6 sm:pb-5 sm:pt-14 lg:min-h-[640px] lg:px-10 xl:px-6">
        {/* Message */}
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-center text-center lg:mx-0 lg:w-[46%] lg:max-w-none">
          {/* check icon with rays */}
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 sm:h-24 sm:w-24 lg:h-28 lg:w-28">
            <span className="flex h-11 w-11 items-center justify-center rounded-full text-[#f26a0f] sm:h-14 sm:w-14">
              <FiCheck className="h-full w-full" strokeWidth={3} />
            </span>
            {/* rays */}
            <span className="absolute -left-4 top-1 h-[2px] w-4 -rotate-[25deg] rounded-full bg-[#f26a0f]" />
            <span className="absolute -left-3 -top-3 h-[2px] w-4 rotate-[35deg] rounded-full bg-[#f26a0f]" />
            <span className="absolute -right-4 top-1 h-[2px] w-4 rotate-[25deg] rounded-full bg-[#f26a0f]" />
            <span className="absolute -right-3 -top-3 h-[2px] w-4 -rotate-[35deg] rounded-full bg-[#f26a0f]" />
          </div>

          <h1 className="mt-5 text-4xl font-bold text-[#0f1f4b] sm:text-5xl lg:text-6xl xl:text-[76px]">
            {data.message.titlePrefix} <span className="text-[#f26a0f]">{data.message.titleHighlight}</span>
          </h1>

          <h2 className="mt-2 text-lg font-bold text-[#101D33] sm:text-xl lg:text-2xl xl:text-[28px]">
            {data.message.subtitle}
          </h2>

          <p className="mt-3 max-w-[500px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[17px]">
            {data.message.text}
          </p>

          <Link
            href={data.message.buttonHref}
            className="mt-6 inline-flex items-center gap-3 rounded-lg bg-[#f26a0f] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:px-9 sm:py-3.5 sm:text-base"
          >
            {data.message.buttonLabel}
            <FiArrowRight size={18} />
          </Link>
        </div>

        {/* Feature strip */}
        <div className="grid grid-cols-2 gap-y-6 rounded-xl bg-white/95 p-4 shadow-[0_8px_30px_rgba(15,31,75,0.12)] ring-1 ring-gray-100 backdrop-blur-sm sm:p-5 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-gray-200 lg:py-6">
          {data.features.map(({ title, text, icon }) => {
            const Icon = getIcon(icon);
            return (
              <div key={title} className="flex flex-col items-center px-3 text-center sm:px-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-[#f26a0f] ring-1 ring-orange-100 sm:h-14 sm:w-14">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="mt-3 text-sm font-bold text-[#101D33] sm:text-base">{title}</h3>
                <p className="mt-1 max-w-[220px] text-xs leading-snug text-slate-500 sm:text-[13px]">
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}