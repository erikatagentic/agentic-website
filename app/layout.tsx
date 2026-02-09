import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { ScrollProgress } from "@/components/layout/scroll-progress";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://heyagentic.ai"
  ),
  title: {
    default: "Agentic | Clay-Powered GTM Automation",
    template: "%s | Agentic",
  },
  description:
    "We build signals-based outbound systems on Clay that detect buying intent, enrich prospects, and generate qualified pipeline. Campaigns live in days, not weeks.",
  keywords: [
    "Clay agency",
    "Claygency",
    "GTM automation",
    "signals-based outbound",
    "buying signals",
    "pipeline generation",
    "Clay.com",
    "outbound automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentic",
    title: "Agentic | Clay-Powered GTM Automation",
    description:
      "Signals-based outbound systems on Clay that generate qualified pipeline. Campaigns live in days.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic | Clay-Powered GTM Automation",
    description:
      "Signals-based outbound systems on Clay that generate qualified pipeline. Campaigns live in days.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
