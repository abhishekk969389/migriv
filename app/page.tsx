import Image from "next/image";
import TopBar from "./components/topbar";
import Navbar from "./components/navbar";
import HeroBanner from "./components/banner";
import AboutSection from "./components/about";
import ProcessSection from "./components/process";
import ServicesSection from "./components/services";
import DestinationsSection from "./components/destination";
import TestimonialsSection from "./components/testinomial";
import CtaSection from "./components/getstarted";
import BlogsSection from "./components/blog";
import Footer from "./components/footer";

export default function Home() {
  return (
  <>
  <TopBar/>
  <Navbar/>
  <HeroBanner/>
  <AboutSection/>
  <ProcessSection/>
  <ServicesSection/>
  <DestinationsSection/>
  <TestimonialsSection/>
  <CtaSection/>
  <BlogsSection/>
  <Footer/>
  </>
  );
}
