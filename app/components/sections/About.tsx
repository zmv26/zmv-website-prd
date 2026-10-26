
import Image from "next/image";
import { ShieldCheck, Target, Eye } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To build, grow, and manage diverse businesses through integrity, innovation, and operational excellence—delivering quality products, services, and experiences while creating lasting value for our customers, partners, people, shareholders, and communities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become a trusted and innovative Filipino business group that builds sustainable enterprises, creates meaningful opportunities, and enriches the lives of people and communities.",
  },
  {
    icon: ShieldCheck,
    title: "Our Values",
    description:
      "Integrity, Excellence, People, Innovation, and Social Responsibility.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-[#071a28] text-white"
    >
      <div className="mx-auto grid w-full max-w-[1800px] lg:grid-cols-[1.1fr_0.9fr]">
        {/* About content */}
        <div className="grid content-center gap-9 px-5 py-12 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10 lg:py-16 xl:gap-12 xl:px-14 2xl:px-16">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#efbd5c] sm:text-xs">
              About ZMV Group Corp.
            </p>

            <h2 className="font-heading mt-4 text-3xl font-semibold leading-[1.12] text-white sm:text-4xl xl:text-5xl">
              Driven by Purpose.
              <span className="mt-1 block text-[#efbd5c]">
                Built for the Future.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
              ZMV Group Corp. is a diversified company committed to
              creating lasting value through people, innovation, and
              sustainable growth. We build businesses that create
              opportunities and positively impact the communities we serve.
            </p>

            <a
              href="#businesses"
              className="mt-7 inline-flex items-center rounded-sm border border-[#d9aa52] bg-[#b9852e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c99743] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#efbd5c]"
            >
              Our Story
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </a>
          </div>

          {/* Mission, vision and values */}
          <div className="space-y-7 lg:space-y-8">
            {principles.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="flex gap-4">
                  <div className="mt-1 shrink-0 text-[#efbd5c]">
                    <Icon size={25} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold text-[#efbd5c]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-blue-100/80">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Corporate office image */}
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-full lg:self-stretch">
          <Image
            src="/images/about-office.png"
            alt="Modern corporate office and executive boardroom at sunset"
            fill
            priority={false}
            sizes="(max-width: 1023px) 100vw, 45vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#071a28]/80 via-[#071a28]/10 to-transparent" />

          <div className="absolute bottom-7 left-5 right-5 z-10 sm:bottom-10 sm:left-8 sm:right-8 xl:bottom-12 xl:left-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#efbd5c] sm:text-xs">
              Purpose · Progress · Possibility
            </p>

            <h3 className="font-heading mt-3 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl xl:text-4xl">
              Building businesses that move us forward.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}