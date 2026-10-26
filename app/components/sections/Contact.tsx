
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "info@zmvtrading.com",
    href: "mailto:info@zmvtrading.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "Coming Soon",
    href: null,
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Metro Manila, Philippines",
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F7F3EA] py-6 text-[#0B2D5B] sm:py-7 lg:py-8"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 sm:px-10 lg:px-12 xl:px-16">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A67C18]">
            Get In Touch
          </p>

          <h2 className="font-heading mt-3 text-3xl font-bold leading-tight text-[#0B2D5B] sm:text-4xl">
            Contact Us
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            We'd love to discuss your sourcing, import, export, and
            distribution requirements. Get in touch with our team.
          </p>
        </div>

        {/* Contact cards */}
        <div className="mt-5 grid gap-4 md:grid-cols-3 lg:gap-5">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            const content = (
              <div className="flex h-full min-h-[80px] items-start gap-3 rounded-md border border-[#E5DFD3] bg-white p-4 transition duration-300 hover:border-[#C4933E] hover:shadow-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C4933E]/40 bg-[#FBF7ED] text-[#A67C18]">
                  <Icon size={17} strokeWidth={1.6} />
                </div>

                <div className="min-w-0 pt-0.5">
                  <h3 className="font-heading text-base font-semibold text-[#0B2D5B]">
                    {contact.title}
                  </h3>

                  <p className="mt-1.5 break-words text-xs leading-5 text-slate-600 sm:text-sm">
                    {contact.value}
                  </p>

                  {contact.href && (
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#A67C18]">
                      Send us an email
                      <ArrowUpRight size={12} />
                    </span>
                  )}
                </div>
              </div>
            );

            return contact.href ? (
              <Link
                key={contact.title}
                href={contact.href}
                aria-label={`Contact us by ${contact.title.toLowerCase()}`}
                className="block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C4933E]"
              >
                {content}
              </Link>
            ) : (
              <div key={contact.title}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
