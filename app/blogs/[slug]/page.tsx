import React from "react";
import { notFound } from "next/navigation";
import { site } from "@/data/index";
import SubBanner from "@/app/components/subbanner";
import { BlogContent } from "@/app/components/blogdetails";

export async function generateStaticParams() {
  return site.blogDetails.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = site.blogDetails.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <SubBanner
        title={blog.subBanner.title}
        bgImage={blog.subBanner.bgImage}
        breadcrumbs={blog.subBanner.breadcrumbs}
      />

      <BlogContent data={blog} />
    </main>
  );
}
