
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const businesses = [
  {
    number: "01",
    title: "StudioMorpho",
    category: "HEALTH & LIFESTYLE",
    description:
      "Fitness, Pilates & wellness. Healthier people. Stronger communities.",
    image: "/images/businesses/fitness-wellness.jpg",
    alt: "Fitness equipment in a modern wellness studio",
    href: "/businesses/fitness-wellness",
  },
  {
    number: "02",
    title: "Solmates Cafe",
    category: "FOOD & HOSPITALITY",
    description:
      "Good coffee. Thoughtful food. Better connections.",
    image: "/images/businesses/cafe-food.jpg",
    alt: "Coffee in a warm cafe setting",
    href: "/businesses/cafe-food",
  },
  {
    number: "03",
    title: "Trading & Distribution",
    category: "TRADE & COMMERCE",
    description: "Reliable supply. Real opportunities.",
    image: "/images/businesses/trading-distribution.jpg",
    alt: "Cargo containers at a logistics port",
    href: "/businesses/trading-distribution",
  },
];

export default function Services() {
  return (
    <section
      id="businesses"
      className="bg-[#fffdf8] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 lg:px-14">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_2.15fr] lg:gap-7 xl:gap-10">
          {/* Introduction */}
          <div className="max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b18b20] sm:text-xs">
              Our Businesses
            </p>

            <h2 className="font-heading mt-3 text-3xl font-bold leading-[1.08] tracking-tight text-[#0b2d5b] sm:text-4xl xl:text-5xl">
              Diverse Businesses.
              <span className="block">Stronger Together.</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600 sm:leading-7">
              We build and grow businesses that improve lives and create
              long-term value across wellness, food and beverage, and trade.
            </p>

            <Link
              href="#businesses-list"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#b18b20] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#947117] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b18b20] sm:text-sm"
            >
              Explore Our Businesses
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Business cards */}
          <div
            id="businesses-list"
            className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-3 xl:gap-4"
          >
            {businesses.map((business) => (
              <article
                key={business.number}
                className="group flex min-w-0 flex-col overflow-hidden rounded-md bg-[#0b2d5b] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Link
                  href={business.href}
                  aria-label={`Learn more about ${business.title}`}
                  className="flex h-full flex-col"
                >
                  <div className="relative aspect-[1.05/1] overflow-hidden bg-slate-200">
                    <Image
                      src={business.image}
                      alt={business.alt}
                      fill
                      loading="eager"
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 30vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#071a35]/60 via-transparent to-black/10" />

                    <span className="absolute right-3 top-3 text-[10px] font-semibold tracking-widest text-white">
                      {business.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-3 sm:p-3 xl:p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#e5bd60]">
                      {business.category}
                    </p>

                    <h3 className="font-heading mt-2 text-sm font-semibold leading-snug text-white sm:text-sm xl:text-base">
                      {business.title}
                    </h3>

                    <p className="mt-2 text-[11px] leading-[1.6] text-blue-100/85 sm:text-[10px] xl:text-xs">
                      {business.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#f3df91]">
                      Learn More
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
