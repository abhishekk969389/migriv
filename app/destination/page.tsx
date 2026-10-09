import SubBanner from "@/app/components/subbanner";
import DestinationsSection from "../components/destination";

export default function DestinationsPage() {
  return (
    <>
      <SubBanner pageKey="destinations" />
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-14">
      <DestinationsSection layout="page" />
      </div>
    </>
  );
}
