import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiUsers } from "react-icons/fi";
import { FaPassport, FaPlane } from "react-icons/fa";

// Swap these with your own Unsplash links (host must be allowed in next.config)
const IMAGES = {
  passports:
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
  traveler:
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
  canada:
    "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80",
};

export default function AboutSection() {
  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-10 xl:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-12">
          {/* LEFT: content */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#f26a0f]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0b63e5]">
                About the Company
              </p>
            </div>

            <h2 className="mt-2 text-3xl font-bold text-[#101D33] sm:text-4xl md:text-5xl lg:text-[50px] xl:text-[58px]">
              Providing the best immigration{" "}
              <span className="text-[#f26a0f]">services</span>
            </h2>

            <span className="mt-4 block h-[3px] w-20 rounded-full bg-[#0b63e5]" />

            <p className="mt-5 text-lg font-semibold text-[#0b63e5] sm:text-xl lg:text-2xl">
              Your trusted partner for global opportunities.
            </p>

            <p className="mt-3 max-w-[560px] text-xs text-slate-500 sm:text-sm md:text-base lg:text-[18px]">
              At Migrivo, we are dedicated to helping individuals and families turn their
              international dreams into reality. With expert guidance, personalized support, and
              a transparent process, we make your immigration journey simple, smooth and
              stress-free.
            </p>

            {/* Feature row */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-orange-50 text-[#f26a0f]">
                <FaPassport size={36} />
              </span>
              <div className="flex items-center gap-4 sm:border-l-0">
                <h3 className="text-lg font-bold leading-tight text-[#101D33] sm:max-w-[150px]">
                  Best Immigration Services
                </h3>
                <span className="hidden h-12 w-px bg-gray-300 sm:block" />
                <p className="max-w-[240px] text-sm text-slate-500 sm:text-sm md:text-base">
                  We have a tendency to the idea that smart planning today creates a
                  brighter tomorrow.
                </p>
              </div>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f26a0f] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-[#d95a05] sm:text-base"
            >
              Discover More
              <FiArrowRight size={18} />
            </Link>
          </div>

          {/* RIGHT: image collage (all positions in % so it scales) */}
          <div className="relative mx-auto aspect-[675/565] w-full max-w-[680px]">
            {/* dashed ring */}
            <span className="absolute left-[1%] top-[7%] aspect-square w-[46%] rounded-full border-2 border-dashed border-[#f26a0f]/60" />

            {/* Canada tall image */}
            <div className="absolute right-0 top-0 h-[96%] w-[54%] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={IMAGES.canada}
                alt="Canada flag and CN Tower"
                fill
                sizes="(min-width: 1024px) 360px, 55vw"
                className="object-cover"
              />
            </div>

            {/* orange crescent behind circle */}
            <span className="absolute left-[7%] top-[6%] aspect-square w-[45%] rounded-full bg-[#f26a0f]" />

            {/* circle image */}
            <div className="absolute left-[4%] top-[3%] aspect-square w-[45%] overflow-hidden rounded-full border-[6px] border-white shadow-lg sm:border-8">
              <Image
                src={IMAGES.passports}
                alt="Passports at the airport"
                fill
                sizes="(min-width: 1024px) 300px, 45vw"
                className="object-cover"
              />
            </div>

            {/* plane badge */}
            <span className="absolute left-0 top-[8%] flex aspect-square w-[10%] min-w-9 items-center justify-center rounded-full bg-white text-[#f26a0f] shadow-md">
              <FaPlane className="h-1/2 w-1/2" />
            </span>

            {/* bottom-left image */}
            <div className="absolute bottom-0 left-0 h-[43%] w-[49%] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={IMAGES.traveler}
                alt="Traveler at the airport"
                fill
                sizes="(min-width: 1024px) 330px, 50vw"
                className="object-cover"
              />
            </div>

            {/* stats card */}
            <div className="absolute left-[41%] top-[57%] w-[44%] rounded-xl bg-white p-1 shadow-xl sm:rounded-2xl sm:p-1.5">
              <div className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0b4fc4] to-[#0b63e5] p-2 text-white sm:gap-4 sm:rounded-xl sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#f26a0f] sm:h-14 sm:w-14 sm:rounded-lg">
                  <FiUsers className="h-5 w-5 sm:h-7 sm:w-7" />
                </span>
                <div className="leading-tight">
                  <p className="text-lg font-bold sm:text-2xl md:text-3xl">3800+</p>
                  <p className="text-[10px] sm:text-sm md:text-base">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}