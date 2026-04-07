import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, DM_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { HeroVisibilityProvider } from "@/hooks/use-hero-visibility";
import { SITE_CONFIG, FAQ_ITEMS } from "@/lib/constants";

import "./globals.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      sameAs: [SITE_CONFIG.linkedIn],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal"],
  variable: "--font-display-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://heyagentic.ai"
  ),
  title: {
    default: "Agentic | GTM Engineering for B2B Teams",
    template: "%s | Agentic",
  },
  description:
    "Fixed-scope projects that build enrichment waterfalls, signal detection, and outbound campaign infrastructure. $750-4,000. Delivered in days.",
  keywords: [
    "GTM engineering",
    "Clay workflows",
    "enrichment waterfall",
    "signal detection",
    "outbound infrastructure",
    "B2B outbound",
    "Clay.com",
    "outbound automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentic",
    title: "Agentic | GTM Engineering for B2B Teams",
    description:
      "Fixed-scope projects that build enrichment waterfalls, signal detection, and outbound infrastructure. $750-4,000. Delivered in days.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic | GTM Engineering for B2B Teams",
    description:
      "Fixed-scope projects that build enrichment waterfalls, signal detection, and outbound infrastructure. $750-4,000. Delivered in days.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${dmMono.variable} grain antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary-cta focus:px-4 focus:py-2 focus:text-foreground focus:outline-none"
        >
          Skip to main content
        </a>
        <HeroVisibilityProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </HeroVisibilityProvider>
      </body>
    </html>
  );
}
