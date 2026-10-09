"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { site } from "@/data/index";

const unsplash = (id: string, w = 800) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* -------------------------------- LIGHTBOX --------------------------------- */

type Active = { kind: "image" | "video"; index: number };
type GalleryImage = { id: string; photo: string; alt: string };
type VideoItem = {
    id: string;
    title: string;
    subtitle: string;
    duration: string;
    photo: string;
    embed: string;
};

function Lightbox({
    active,
    images,
    videos,
    onClose,
    onChange,
}: {
    active: Active;
    images: GalleryImage[];
    videos: VideoItem[];
    onClose: () => void;
    onChange: (index: number) => void;
}) {
    const total = active.kind === "image" ? images.length : videos.length;
    const prev = () => onChange((active.index - 1 + total) % total);
    const next = () => onChange((active.index + 1) % total);

    // keyboard: Esc / arrows
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onChange((active.index - 1 + total) % total);
            if (e.key === "ArrowRight") onChange((active.index + 1) % total);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [active.index, total, onClose, onChange]);

    // lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const image = active.kind === "image" ? images[active.index] : null;
    const video = active.kind === "video" ? videos[active.index] : null;

    const circleBtn =
        "flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:h-12 sm:w-12";

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={image ? image.alt : video?.title}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm sm:px-20"
            onClick={onClose}
        >
            {/* close */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    onClose();
                }}
                aria-label="Close"
                autoFocus
                className={`${circleBtn} absolute right-3 top-3 sm:right-6 sm:top-6`}
            >
                <FiX size={22} />
            </button>

            {/* prev */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    prev();
                }}
                aria-label="Previous"
                className={`${circleBtn} absolute left-2 top-1/2 -translate-y-1/2 sm:left-8`}
            >
                <FiChevronLeft size={24} />
            </button>

            {/* content */}
            <div onClick={(e) => e.stopPropagation()} className="flex max-w-full items-center justify-center">
                {image && (
                    <Image
                        key={image.id}
                        src={unsplash(image.photo, 1600)}
                        alt={image.alt}
                        width={1600}
                        height={1067}
                        sizes="90vw"
                        priority
                        className="h-auto max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                    />
                )}

                {video && (
                    <div className="aspect-video w-[min(90vw,960px)] overflow-hidden rounded-lg bg-black shadow-2xl">
                        <iframe
                            key={video.id}
                            src={`${video.embed}?autoplay=1&rel=0`}
                            title={video.title}
                            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                            allowFullScreen
                            className="h-full w-full"
                        />
                    </div>
                )}
            </div>

            {/* next */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    next();
                }}
                aria-label="Next"
                className={`${circleBtn} absolute right-2 top-1/2 -translate-y-1/2 sm:right-8`}
            >
                <FiChevronRight size={24} />
            </button>
        </div>
    );
}

/* -------------------------------- SECTIONS --------------------------------- */

function Heading({
    badge,
    title,
    highlight,
    description,
}: {
    badge: string;
    title: string;
    highlight: string;
    description: string;
}) {
    return (
        <div className="max-w-[760px]">
            <div className="flex items-center gap-4">
                <span className="h-[2px] w-10 bg-[#f26a0f]" />
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0b63e5] sm:text-sm">
                    {badge}
                </p>
            </div>

            <h2 className="mt-2 text-2xl font-bold text-[#101D33] sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px]">
                {title} <span className="text-[#f26a0f]">{highlight}</span>
            </h2>

            <p className="mt-2 max-w-[640px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[16px]">
                {description}
            </p>
        </div>
    );
}

export default function GallerySection() {
    const data = site.galleryPage;
    const [active, setActive] = useState<Active | null>(null);

    if (!data) return null;

    return (
        <>
            {/* IMAGE GALLERY */}
            <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
                    <Heading
                        badge={data.imageHeading.badge}
                        title={data.imageHeading.title}
                        highlight={data.imageHeading.highlight}
                        description={data.imageHeading.description}
                    />

                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
                        {data.images.map((img, i) => (
                            <button
                                key={img.id}
                                type="button"
                                onClick={() => setActive({ kind: "image", index: i })}
                                aria-label={`Open image: ${img.alt}`}
                                className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-xl bg-slate-100 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63e5]"
                            >
                                <Image
                                    src={unsplash(img.photo, 700)}
                                    alt={img.alt}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <span className="absolute inset-0 flex items-center justify-center bg-[#0b1a3b]/0 text-white opacity-0 transition-all duration-300 group-hover:bg-[#0b1a3b]/40 group-hover:opacity-100">
                                    <FiZoomIn size={28} />
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* VIDEO GALLERY */}
            <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14 ">
                <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
                    <Heading
                        badge={data.videoHeading.badge}
                        title={data.videoHeading.title}
                        highlight={data.videoHeading.highlight}
                        description={data.videoHeading.description}
                    />

                    <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {data.videos.map((v, i) => (
                            <button
                                key={v.id}
                                type="button"
                                onClick={() => setActive({ kind: "video", index: i })}
                                aria-label={`Play video: ${v.title}`}
                                className="group block w-full text-left focus:outline-none"
                            >
                                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-200 shadow-sm group-focus-visible:ring-2 group-focus-visible:ring-[#0b63e5]">
                                    <Image
                                        src={unsplash(v.photo, 700)}
                                        alt={v.title}
                                        fill
                                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 bg-black/10" />

                                    {/* play button */}
                                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0b63e5] shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-16 sm:w-16">
                                        <FaPlay size={18} className="ml-1" />
                                    </span>

                                    {/* duration */}
                                    <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
                                        {v.duration}
                                    </span>
                                </div>

                                <h3 className="mt-3 text-base font-bold text-[#101D33] transition-colors group-hover:text-[#0b63e5]">
                                    {v.title}
                                </h3>
                                <p className="mt-0.5 text-sm text-slate-500">{v.subtitle}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {active && (
                <Lightbox
                    active={active}
                    images={data.images}
                    videos={data.videos}
                    onClose={() => setActive(null)}
                    onChange={(index) => setActive({ kind: active.kind, index })}
                />
            )}
        </>
    );
}