"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoBlogListData } from "@/data/index";

export default function BlogListSection() {
  const data = site.blogList;
  if (!data) return null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#f26a0f]" />
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b63e5]">
              {data.badge}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
            {data.titlePrefix} <span className="text-[#f26a0f]">{data.titleHighlight}</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-6 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {data.posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_6px_24px_rgba(15,31,75,0.08)] ring-1 ring-gray-100 transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(15,31,75,0.14)]"
            >
              {/* Image + date badge */}
              <Link
                href={`/blogs/${post.slug}`}
                className="relative block aspect-[16/9] w-full overflow-hidden"
                aria-label={post.title}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 z-10 rounded-lg bg-[#0f1f4b] px-3 py-1.5 text-center leading-tight text-white shadow-md sm:left-4 sm:top-4">
                  <span className="block text-xl font-bold sm:text-2xl">{post.day}</span>
                  <span className="block text-[10px] font-medium sm:text-xs">
                    {post.monthYear}
                  </span>
                </span>
              </Link>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-5 bg-[#f26a0f]" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0b63e5]">
                    {post.category}
                  </p>
                </div>

                <h3 className="mt-2 text-base font-bold leading-snug text-[#101D33] transition-colors group-hover:text-[#0b63e5] sm:text-lg">
                  <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="mt-2 text-[13px] leading-relaxed text-slate-500 sm:text-sm">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blogs/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#101D33] transition-colors hover:text-[#f26a0f]"
                >
                  Read More
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f26a0f] text-white">
                    <FiArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}