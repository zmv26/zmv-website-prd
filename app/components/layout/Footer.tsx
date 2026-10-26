
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Our Businesses", href: "/#businesses" },
  { label: "News", href: "/#news" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
];

const businessLinks = [
  { label: "StudioMorpho", href: "/businesses/fitness-wellness" },
  { label: "Solmates Cafe", href: "/businesses/cafe-food" },
  {
    label: "Trading & Importation",
    href: "/businesses/trading-distribution",
  },
  
  { label: "Other Ventures", href: "/#businesses" },
];

const socialLinks = [
  { label: "LinkedIn", text: "in", href: "https://www.linkedin.com/" },
  { label: "Facebook", text: "f", href: "https://www.facebook.com/" },
  { label: "Instagram", text: "◎", href: "https://www.instagram.com/" },
  { label: "YouTube", text: "▶", href: "https://www.youtube.com/" },
];

export default function Footer() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden bg-[#041d2b] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(20,65,83,0.35),transparent_55%),linear-gradient(115deg,#062536_0%,#041d2b_55%,#052638_100%)]"
      />

      <div className="relative mx-auto w-full max-w-[1800px] px-6 sm:px-10 lg:px-14 xl:px-20">
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.35fr_0.85fr_1.05fr_1.15fr] lg:gap-0 lg:py-16 xl:py-20">
          {/* Company branding */}
          <div className="lg:pr-10 xl:pr-14">
            <Link
              href="/"
              aria-label="ZMV Group Corp. home"
              className="inline-flex"
            >
              <Image
                src="/images/zmv-logo.png"
                alt="ZMV Group Corp."
                width={200}
                height={100}
                className="h-auto w-[145px] object-contain sm:w-[165px]"
              />
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300 sm:text-base">
              A diversified group of businesses creating lasting value
              through people, innovation, and sustainable growth.
            </p>

            <div className="mt-7 h-[2px] w-12 bg-[#e7b44d]" />

            <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#e7b44d] sm:text-xs">
              People <span className="mx-1.5">·</span> Businesses
              <span className="mx-1.5">·</span> Communities
            </p>
          </div>

          {/* Navigation */}
          <div className="border-white/10 lg:border-l lg:px-8 xl:px-10">
            <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">
              Navigation
            </h2>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3.5">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 transition-colors hover:text-[#efbd5c] sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Business portfolio */}
          <div className="border-white/10 lg:border-l lg:px-8 xl:px-10">
            <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">
              Our Businesses
            </h2>

            <ul className="mt-5 space-y-3.5">
              {businessLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-[#efbd5c] sm:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div
            id="contact"
            className="border-white/10 lg:border-l lg:pl-8 xl:pl-10"
          >
            <h2 className="font-heading text-xl font-semibold text-white sm:text-2xl">
              Get in Touch
            </h2>

            <div className="mt-5 space-y-5">
              <a
                href="mailto:info@zmvtrading.com"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c99532] text-[#efbd5c] transition-colors group-hover:bg-[#c99532]/10">
                  <Mail size={23} strokeWidth={1.8} />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[#efbd5c] sm:text-base">
                    Email
                  </span>
                  <span className="mt-1 block break-words text-sm text-slate-300 sm:text-base">
                    info@zmvtrading.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c99532] text-[#efbd5c]">
                  <Phone size={23} strokeWidth={1.8} />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-[#efbd5c] sm:text-base">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm text-slate-300 sm:text-base">
                    Coming Soon
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c99532] text-[#efbd5c]">
                  <MapPin size={23} strokeWidth={1.8} />
                </span>

                <span>
                  <span className="block text-sm font-semibold text-[#efbd5c] sm:text-base">
                    Office
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-300 sm:text-base">
                    Metro Manila, Philippines
                  </span>
                </span>
              </div>
            </div>

            {/* Social media links */}
            <div className="mt-8 border-t border-white/15 pt-6">
              <div className="flex items-center gap-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-7 min-w-5 items-center justify-center text-lg font-bold text-slate-300 transition-colors hover:text-[#efbd5c]"
                  >
                    {social.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-5 text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} ZMV Group Corp. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-slate-400 sm:gap-x-6 sm:text-sm">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/20 sm:block"
            />

            <Link
              href="/terms-of-use"
              className="transition-colors hover:text-white"
            >
              Terms of Use
            </Link>

            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-white/20 sm:block"
            />

            <Link
              href="/sitemap"
              className="transition-colors hover:text-white"
            >
              Sitemap
            </Link>

            <a
              href="#site-footer"
              aria-label="Back to top"
              className="ml-1 inline-flex items-center text-[#efbd5c] transition-transform hover:-translate-y-1"
            >
              <ArrowUp size={23} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
