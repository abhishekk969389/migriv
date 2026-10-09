import React from "react";
import { notFound } from "next/navigation";
import { site } from "@/data/index";
import SubBanner from "@/app/components/subbanner";
import { DestinationOverview, DestinationAttractions, DestinationVisaOptions, DestinationRequirements } from "@/app/components/destinationdetails";

export async function generateStaticParams() {
  return site.destinationDetails.map((destination) => ({
    slug: destination.slug,
  }));
}

export default async function DestinationDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = site.destinationDetails.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <main>
      <SubBanner
        title={destination.subBanner.title}
        bgImage={destination.subBanner.bgImage}
        breadcrumbs={destination.subBanner.breadcrumbs}
      />
      
      <DestinationOverview data={destination} />
      <DestinationAttractions data={destination.attractions} />
      <DestinationVisaOptions data={destination.visaOptions} />
      <DestinationRequirements data={destination.requirements} />
    </main>
  );
}
