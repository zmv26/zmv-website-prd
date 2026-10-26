// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import { Playfair_Display, DM_Sans } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
 
// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-playfair",
//   display: "swap",
// });

// const dmSans = DM_Sans({
//   subsets: ["latin"],
//   variable: "--font-dm-sans",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   metadataBase: new URL("https://zmvtrading.com"),
//   title: {
//     default: "ZMV Group Corp.",
//     template: "%s | ZMV Group Corp.",
//   },
//   description:
//     "A Philippine-based business group focused on wellness, food and beverage, and trading.",
//   keywords: [
//     "ZMV Group",
//     "Trading Company Philippines",
//     "Import",
//     "Export",
//     "Procurement",
//     "Distribution",
//     "Global Trading",
//   ],
//   authors: [{ name: "ZMV Trading Inc." }],
//   openGraph: {
//     title: "ZMV Trading Inc.",
//     description:
//       "Connecting Global Markets. Delivering Trusted Solutions.",
//     url: "https://zmvtrading.com",
//     siteName: "ZMV Trading Inc.",
//     locale: "en_PH",
//     type: "website",
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className={`${playfair.variable} ${dmSans.variable}`}>
//         {children}
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZMV Group Corp. | Purpose. Progress. Possibility.",
  description:
    "A Philippine-based business group focused on wellness, food and beverage, and trading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}

