
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <section
      id="careers"
      className="relative isolate overflow-hidden border-y border-[#e8dfd1] bg-[#f7f2e7]"
    >
      {/* Full-width image on desktop */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[55%] bg-[#071a28] lg:block"
        style={{
          clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <Image
          src="/images/careers-office.png"
          alt=""
          fill
          priority
          sizes="55vw"
          className="object-cover object-center"
        />
      </div>

      {/* Shared centered container */}
      <div className="relative mx-auto grid min-h-[340px] w-full max-w-[1500px] grid-cols-1 px-5 sm:px-8 lg:min-h-[390px] lg:grid-cols-[45%_55%] lg:px-14">
        {/* Careers content */}
        <div className="relative z-10 flex items-center py-12 sm:py-14 lg:py-16">
          <div className="w-full max-w-[540px]">
            <p className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.28em] text-[#b3842b] sm:text-[11px]">
              Careers
              <span className="h-px w-12 bg-[#b3842b]" />
            </p>

            <h2 className="font-heading mt-5 max-w-[520px] text-3xl font-semibold leading-[1.08] tracking-tight text-[#10365b] sm:text-4xl xl:text-5xl">
              Be Part of Something Bigger
            </h2>

            <p className="mt-4 max-w-[440px] text-sm leading-6 text-[#64748b] sm:text-base sm:leading-7">
              Join our growing team and help us build businesses that create
              lasting impact.
            </p>

            <Link
              href="mailto:info@zmvtrading.com?subject=Career%20Inquiry"
              className="mt-6 inline-flex items-center gap-3 rounded-md bg-[#b3842b] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#956b20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b3842b]"
            >
              Explore Careers
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Mobile image: normal rectangle, no diagonal */}
        <div className="relative -mx-5 min-h-[230px] overflow-hidden bg-[#071a28] sm:-mx-8 sm:min-h-[300px] lg:hidden">
          <Image
            src="/images/careers-office.png"
            alt="Professionals collaborating in a modern office"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Desktop image space */}
        <div className="hidden lg:block" aria-hidden="true" />
      </div>
    </section>
  );
}
