import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
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
    process.env.NEXT_PUBLIC_SITE_URL || "https://agentic.com"
  ),
  title: {
    default: "Agentic — AI Workflow Automation",
    template: "%s | Agentic",
  },
  description:
    "Automate your business workflows with AI. Custom pipelines, n8n integrations, and intelligent automation — deployed in days, not months.",
  keywords: [
    "AI workflow automation",
    "business process automation",
    "n8n automation",
    "AI consulting",
    "workflow optimization",
    "AI integrations",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentic",
    title: "Agentic — AI Workflow Automation",
    description:
      "Automate your business workflows with AI. Custom pipelines deployed in days.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic — AI Workflow Automation",
    description:
      "Automate your business workflows with AI. Custom pipelines deployed in days.",
  },
  robots: { index: true, follow: true },
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
        {children}
      </body>
    </html>
  );
}
