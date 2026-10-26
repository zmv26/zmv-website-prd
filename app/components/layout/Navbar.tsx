
"use client";

import Link from "next/link";
import { NAVIGATION } from "@/constants/navigation";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="relative z-50 border-b border-slate-200/80 bg-white">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-6 px-6 py-3 sm:px-8 lg:px-12">
        {/* ZMV Branding */}
        

<Link href="/" className="flex shrink-0 items-center">
  <Image
    src="/images/zmv-logo.png"
    alt="ZMV Group Corp."
    width={112}
    height={64}
    priority
    className="h-14 w-auto object-contain"
  />
</Link>



        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-[#24344d] transition-colors hover:text-[#b18b20]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact CTA */}
        <Link
          href="/contact"
          className="hidden shrink-0 items-center gap-2 rounded-sm bg-[#b88b45] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#9e7334] md:inline-flex"
        >
          Get In Touch
          <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile CTA */}
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-[#b88b45] px-4 py-2.5 text-xs font-semibold text-white md:hidden"
        >
          Contact
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </header>
  );
}
