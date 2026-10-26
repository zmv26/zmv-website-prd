
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "WELLNESS",
    title: "ZMV Group Corp. Expands into the Wellness Industry",
    date: "Company Update",
    description:
      "Discover our vision for building businesses that support healthier lifestyles and stronger communities.",
    image: "/images/businesses/fitness-wellness.jpg",
    alt: "Fitness and wellness studio",
    href: "/#businesses",
  },
  {
    category: "FOOD & BEVERAGE",
    title: "Solmates Cafe: Creating Better Connections",
    date: "Business Feature",
    description:
      "Explore our approach to thoughtful food, good coffee, and meaningful everyday experiences.",
    image: "/images/businesses/cafe-food.jpg",
    alt: "Coffee served in a cafe",
    href: "/#businesses",
  },
  {
    category: "TRADING",
    title: "Building Opportunities Through Trade",
    date: "Business Update",
    description:
      "Learn how our trading and distribution business aims to connect markets and deliver trusted solutions.",
    image: "/images/businesses/trading-distribution.jpg",
    alt: "Shipping containers at a commercial port",
    href: "/#businesses",
  },
];

export default function News() {
  return (
    <section
      id="news"
      className="bg-[#fffdf8] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1800px] px-5 sm:px-8 lg:px-10 xl:px-14">
        {/* Section heading */}
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#b18b20] sm:text-xs">
              Latest News
            </p>

            <h2 className="font-heading mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#0b2d5b] sm:text-4xl lg:text-5xl">
              Updates from ZMV Group Corp.
            </h2>
          </div>

          <Link
            href="#news"
            className="hidden shrink-0 items-center gap-2 pb-1 text-sm font-semibold text-[#9b7419] transition hover:text-[#0b2d5b] sm:inline-flex"
          >
            View All News
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* News cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group flex min-w-0 flex-col overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link
                href={article.href}
                aria-label={`Read more: ${article.title}`}
                className="relative block aspect-[2/1] overflow-hidden bg-slate-200"
              >
                <Image
                  src={article.image}
                  alt={article.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#a67c18]">
                  {article.category}
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  {article.date}
                </p>

                <h3 className="font-heading mt-3 text-lg font-semibold leading-snug text-[#0b2d5b] sm:text-xl">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b2d5b] transition hover:text-[#b18b20]"
                >
                  Read More
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="#news"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9b7419] sm:hidden"
        >
          View All News
          <ArrowRight size={15} />
        </Link>
      </div>
    </section>
  );
}
