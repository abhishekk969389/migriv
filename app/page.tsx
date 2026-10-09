import Image from "next/image";
import HeroBanner from "./components/banner";
import AboutSection from "./components/about";
import ProcessSection from "./components/process";
import ServicesSection from "./components/services";
import DestinationsSection from "./components/destination";
import CtaSection from "./components/getstarted";
import BlogsSection from "./components/blog";
import TestimonialsSection from "./components/testimonial";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <DestinationsSection />
      <TestimonialsSection />
      <CtaSection />
      <BlogsSection />
    </>
  );
}
