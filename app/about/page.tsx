import SubBanner from "@/app/components/subbanner";
import AboutSection from "../components/about";
import ProcessSection from "../components/process";
import WhyChooseUsSection from "../components/about/whychoose";
import CtaSection from "../components/getstarted";

export default function AboutPage() {
  return (
    <>
      <SubBanner pageKey="about" />
       <AboutSection hideButton />
       <ProcessSection/>
       <WhyChooseUsSection/>
       <CtaSection/>
    </>
  );
}
