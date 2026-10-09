"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiMessageSquare, FiUser } from "react-icons/fi";
import { site } from "@/data/index";
import type { MigrivoBlogData } from "@/data/index";

type Post = MigrivoBlogData["posts"][0];

function DateBadge({ day, month }: { day: string; month: string }) {
  return (
    <span className="absolute left-3 top-3 z-10 rounded-lg bg-[#0f1f4b] px-3 py-1.5 text-center leading-tight text-white shadow-md sm:left-4 sm:top-4">
      <span className="block text-lg font-bold">{day}</span>
      <span className="block text-xs">{month}</span>
    </span>
  );
}

function Meta({ author }: { author: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-600">
      <span className="flex items-center gap-1.5">
        <FiUser className="text-[#f26a0f]" size={14} />
        By {author}
      </span>
      <span className="text-slate-400">/</span>
      <span className="flex items-center gap-1.5">
        <FiMessageSquare className="text-[#f26a0f]" size={14} />
        No Comments
      </span>
    </div>
  );
}

function ReadMore({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101D33] transition-colors hover:text-[#f26a0f]"
    >
      Read More
      <FiArrowRight className="text-[#f26a0f]" size={16} />
    </Link>
  );
}

function SmallCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-1 flex-col overflow-hidden rounded-xl bg-white shadow-md sm:flex-row">
      <div className="relative h-52 w-full shrink-0 sm:h-auto sm:min-h-[200px] sm:w-[40%]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw"
          className="object-cover"
        />
        <DateBadge day={post.day} month={post.month} />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2 p-5 sm:p-6">
        <Meta author={"Admin"} />
        <h3 className="text-base font-bold leading-snug text-[#101D33] sm:text-lg lg:text-[19px]">
          <Link href={`/blogs/${post.slug}`} className="hover:text-[#f26a0f]">
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-xs text-slate-500 sm:text-sm">{post.excerpt}</p>
        <ReadMore href={`/blogs/${post.slug}`} />
      </div>
    </article>
  );
}

function FeaturedCard({ post }: { post: Post }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md">
      <div className="relative h-60 w-full sm:h-72 lg:h-auto lg:min-h-[280px] lg:flex-1">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <DateBadge day={post.day} month={post.month} />
      </div>
      <div className="flex flex-col gap-2 p-5 sm:p-6">
        <Meta author={"Admin"} />
        <h3 className="mt-1 text-base font-bold leading-snug text-[#101D33] sm:text-lg lg:text-[19px]">
          <Link href={`/blogs/${post.slug}`} className="hover:text-[#f26a0f]">
            {post.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-xs text-slate-500 sm:text-sm">{post.excerpt}</p>
        <ReadMore href={`/blogs/${post.slug}`} />
      </div>
    </article>
  );
}

export default function BlogsSection() {
  const data: MigrivoBlogData = site.blogs;
  if (!data) return null;

  return (
    <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.5 }} className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
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

        {/* Posts: 2 stacked cards left, 1 large card right */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <SmallCard post={data.posts[0]} />
            <SmallCard post={data.posts[1]} />
          </div>
          <FeaturedCard post={data.posts[2]} />
        </div>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Link
            href={data.cta.href}
            className="inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-10 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:text-base"
          >
            {data.cta.label}
            <FiArrowRight size={18} />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}