"use client";


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Counter from "@/app/components/ui/counter";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { site } from "@/data/index";
import type { MigrivoTestimonialData } from "@/data/index";
import { getIcon } from "@/app/components/ui/icons";

export default function TestimonialsSection() {
  const data: MigrivoTestimonialData = site.testimonial;
  const [perView, setPerView] = useState(2);
  const [index, setIndex] = useState(0);

  // 2 cards from sm and up (including lg and xl), 1 card on mobile
  useEffect(() => {
    const update = () => {
      setPerView(window.innerWidth >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!data) return null;
  const BadgeIcon = getIcon(data.stats.icon);

  const pages: (typeof data.testimonials)[] = [];
  for (let i = 0; i < data.testimonials.length; i += perView) {
    pages.push(data.testimonials.slice(i, i + perView));
  }
  const total = pages.length;
  const current = Math.min(index, total - 1);

  const prev = () => setIndex((current - 1 + total) % total);
  const next = () => setIndex((current + 1) % total);

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="lg:flex lg:items-stretch">
        {/* LEFT: image touching the left edge of the screen */}
        <div className="relative h-72 w-full sm:h-96 lg:h-auto lg:min-h-[560px] lg:w-[33%] lg:shrink-0 xl:w-[37%]">
          <Image
            src={data.sideImage}
            alt="Happy client at the airport"
            fill
            priority
            sizes="(min-width: 1024px) 37vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-4 flex items-center gap-4 bg-white p-3 pr-6 shadow-lg sm:bottom-8 sm:left-6 lg:bottom-10 lg:left-8">
            <span className="flex h-14 w-14 items-center justify-center bg-[#f26a0f] text-white sm:h-16 sm:w-16">
              <BadgeIcon size={26} />
            </span>
            <div className="leading-tight">
              <p className="text-2xl font-bold text-[#101D33] sm:text-3xl">
                <Counter text={data.stats.number} />
              </p>
              <p className="text-sm text-slate-500 sm:text-base">{data.stats.label}</p>
            </div>
          </div>
        </div>

        {/* RIGHT: content (right edge follows the container padding) */}
        <div className="min-w-0 flex-1 px-4 py-12 sm:px-6 sm:py-14 lg:py-16 lg:pl-12 lg:pr-10 xl:pl-14 xl:pr-6 2xl:pr-[calc((100vw-1320px)/2+24px)]">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#f26a0f]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
              {data.badge}
            </p>
          </div>

          <h2 className="mt-2 text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
            {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
          </h2>

          <p className="mt-3 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
            {data.description}
          </p>

          {/* Slider */}
          <div className="mt-8 overflow-hidden py-2">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {pages.map((page, p) => (
                <div
                  key={p}
                  className={`grid min-w-full gap-4 xl:gap-5 ${
                    perView === 2 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {page.map((t) => (
                    <article
                      key={t.name}
                      className="rounded-xl bg-white p-4 shadow-md xl:p-5"
                    >
                      <div className="flex items-start gap-3 xl:gap-4">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-200 sm:h-14 sm:w-14 xl:h-16 xl:w-16">
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm font-bold text-[#101D33] xl:text-base">{t.name}</h3>
                          <p className="text-xs text-slate-500 xl:text-sm">{t.visa}</p>
                          <div className="mt-1.5 flex gap-1 text-[#f9b406]">
                            {Array.from({ length: 5 }).map((_, s) => (
                              <FaStar key={s} size={14} />
                            ))}
                          </div>
                        </div>
                        <FaQuoteLeft className="shrink-0 text-xl text-[#f26a0f] xl:text-2xl" />
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm xl:mt-4">{t.text}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots + arrows */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === current ? "w-2.5 bg-[#f26a0f]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonials"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#101D33] shadow-md transition-colors hover:bg-[#f26a0f] hover:text-white sm:h-14 sm:w-14"
              >
                <FiArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonials"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#101D33] shadow-md transition-colors hover:bg-[#f26a0f] hover:text-white sm:h-14 sm:w-14"
              >
                <FiArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
