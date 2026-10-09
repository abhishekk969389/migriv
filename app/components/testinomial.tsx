"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaQuoteLeft, FaStar, FaUsers } from "react-icons/fa";

const unsplash = (id: string, w = 200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// Replace the image IDs with your own Unsplash photos
const SIDE_IMAGE = unsplash("1488085061387-422e29b40080", 1000);

const testimonials = [
  {
    name: "Rohit Sharma",
    visa: "Canada Student Visa",
    text: "The team made my Canada student visa process so simple. They guided me at every step, from documentation to final approval. Highly recommended!",
    avatar: unsplash("1507003211169-0a1dd7228f2d"),
  },
  {
    name: "Priya Mehta",
    visa: "Australia PR Visa",
    text: "Professional, transparent and very supportive throughout my Australia PR process. They answered all my queries and kept me updated regularly. Great experience!",
    avatar: unsplash("1494790108377-be9c29b29330"),
  },
  {
    name: "Amit Verma",
    visa: "UK Work Visa",
    text: "I got my UK work visa faster than I expected. Every document was checked twice and the advice on interview preparation was spot on.",
    avatar: unsplash("1500648767791-00dcc994a43e"),
  },
  {
    name: "Neha Kapoor",
    visa: "Germany Job Seeker Visa",
    text: "From the first consultation to the visa stamp, the support was clear and honest. They never promised more than they could deliver.",
    avatar: unsplash("1438761681033-6461ffad8d80"),
  },
  {
    name: "Karan Singh",
    visa: "USA Business Visa",
    text: "Our business trip visa had a tight deadline and the team handled everything smoothly. Quick replies and zero confusion.",
    avatar: unsplash("1472099645785-5658abf4ff4e"),
  },
  {
    name: "Anjali Nair",
    visa: "New Zealand Family Visa",
    text: "They helped our whole family move with confidence. The checklist and regular updates made a stressful process feel easy.",
    avatar: unsplash("1544005313-94ddf0286df2"),
  },
];

export default function TestimonialsSection() {
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

  const pages: (typeof testimonials)[] = [];
  for (let i = 0; i < testimonials.length; i += perView) {
    pages.push(testimonials.slice(i, i + perView));
  }
  const total = pages.length;
  const current = Math.min(index, total - 1);

  const prev = () => setIndex((current - 1 + total) % total);
  const next = () => setIndex((current + 1) % total);

  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="lg:flex lg:items-stretch">
        {/* LEFT: image touching the left edge of the screen */}
        <div className="relative h-72 w-full sm:h-96 lg:h-auto lg:min-h-[560px] lg:w-[33%] lg:shrink-0 xl:w-[37%]">
          <Image
            src={SIDE_IMAGE}
            alt="Happy client at the airport"
            fill
            priority
            sizes="(min-width: 1024px) 37vw, 100vw"
            className="object-cover"
          />
          <div className="absolute bottom-6 left-4 flex items-center gap-4 bg-white p-3 pr-6 shadow-lg sm:bottom-8 sm:left-6 lg:bottom-10 lg:left-8">
            <span className="flex h-14 w-14 items-center justify-center bg-[#f26a0f] text-white sm:h-16 sm:w-16">
              <FaUsers size={26} />
            </span>
            <div className="leading-tight">
              <p className="text-2xl font-bold text-[#101D33] sm:text-3xl">3800+</p>
              <p className="text-sm text-slate-500 sm:text-base">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT: content (right edge follows the container padding) */}
        <div className="min-w-0 flex-1 px-4 py-12 sm:px-6 sm:py-14 lg:py-16 lg:pl-12 lg:pr-10 xl:pl-14 xl:pr-6 2xl:pr-[calc((100vw-1320px)/2+24px)]">
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#f26a0f]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-600">
              Customer Feedback
            </p>
          </div>

          <h2 className="mt-2 text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
            What are people saying about our <span className="text-[#f26a0f]">service</span>
          </h2>

          <p className="mt-3 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
            Real stories from students, professionals and families who achieved their global dreams
            with our support.
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
    </section>
  );
}