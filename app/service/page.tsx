import SubBanner from "@/app/components/subbanner";
import ServicesSection from "../components/services";
import ProcessSection from "../components/process";
import CtaSection from "../components/getstarted";

export default function ServicePage() {
  return (
    <>
      <SubBanner pageKey="service" />
      <ServicesSection />
      <CtaSection />
    </>
  );
}
