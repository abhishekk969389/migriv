import React from "react";
import { notFound } from "next/navigation";
import { site } from "@/data/index";
import SubBanner from "@/app/components/subbanner";
import { Overview, BenefitsAndEnquiry, Process, Documents, Destinations } from "@/app/components/servicedetails";
import CtaSection from "@/app/components/getstarted";

export async function generateStaticParams() {
  return site.serviceDetails.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = site.serviceDetails.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <SubBanner
        title={service.subBanner.title}
        bgImage={service.subBanner.bgImage}
        breadcrumbs={service.subBanner.breadcrumbs}
      />
      
      <Overview data={service.overview} />
      <BenefitsAndEnquiry benefits={service.benefits} enquiryForm={service.enquiryForm} />
      <Process data={service.process} />
      <Documents data={service.documents} />
      <Destinations data={service.destinations} />
      <CtaSection/>
    </main>
  );
}
