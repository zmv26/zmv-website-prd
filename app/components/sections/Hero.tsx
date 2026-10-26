
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  UsersRound,
  Globe,
  Leaf,
} from "lucide-react";

const highlights = [
  {
    icon: ChartNoAxesColumnIncreasing,
    value: "3+",
    title: "Business Segments",
    description: "Wellness, café and trading",
  },
  {
    icon: UsersRound,
    value: "",
    title: "People & Partners",
    description: "Growing through collaboration",
  },
  {
    icon: Globe,
    value: "",
    title: "Local Impact",
    description: "Creating value for communities",
  },
  {
    icon: Leaf,
    value: "",
    title: "Sustainable Growth",
    description: "Building for the long term",
  },
];

export default function Hero() {
  return (
    <>
      {/* Main Hero */}
      <section
        id="top"
        className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#071a35] bg-cover bg-center sm:min-h-[600px] lg:min-h-[680px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(4,19,38,0.82) 0%, rgba(4,19,38,0.62) 38%, rgba(4,19,38,0.18) 75%, rgba(4,19,38,0.12) 100%), url('/images/zmv-headquarters.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="mx-auto w-full max-w-[1800px] px-6 py-20 sm:px-10 sm:py-24 lg:px-14 lg:py-28 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[680px]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/90 sm:text-xs">
              People
              <span className="mx-3 text-[#e5b34f]">•</span>
              Businesses
              <span className="mx-3 text-[#e5b34f]">•</span>
              A Better Tomorrow
            </p>

            <h1 className="font-heading mt-7 max-w-[680px] text-[42px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl lg:text-[76px]">
              Building Businesses
              <span className="mt-1 block text-[#efbd5c]">
                for a Brighter Tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-[510px] text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              ZMV Group Corp. is building a diverse portfolio of businesses
              across wellness, food and beverage, and trading—guided by a
              commitment to quality, responsible growth, and long-term value.
            </p>

            <Link
              href="#businesses"
              className="mt-8 inline-flex items-center gap-3 rounded-sm border border-[#e4b35c] bg-[#c4933e] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#d4a653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e4b35c]"
            >
              Our Businesses
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-7 right-6 flex items-center gap-4 text-xs font-medium text-white/80 sm:right-10 lg:right-14 xl:right-20">
          <span className="border-b-2 border-[#efbd5c] pb-1 text-white">
            01
          </span>
          <span>02</span>
          <span>03</span>
        </div>
      </section>

      {/* Company Highlights */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-[1800px] grid-cols-1 px-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10 xl:px-14">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`flex min-h-[100px] items-center gap-4 py-5 sm:py-6 ${
                  index > 0
                    ? "border-t border-slate-200 sm:pl-6 lg:border-t-0 lg:border-l lg:pl-6 xl:pl-8"
                    : ""
                } ${
                  index < 3 ? "lg:pr-5 xl:pr-8" : ""
                }`}
              >
                <div className="shrink-0 text-[#b9852e]">
                  <Icon size={27} strokeWidth={1.5} />
                </div>

                <div className="min-w-0">
                  {item.value && (
                    <p className="text-2xl font-bold leading-none text-[#0b2d5b]">
                      {item.value}
                    </p>
                  )}

                  <h2
                    className={`font-semibold text-[#0b2d5b] ${
                      item.value ? "mt-2 text-sm" : "text-sm"
                    }`}
                  >
                    {item.title}
                  </h2>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
