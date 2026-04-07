import type { Metadata } from "next";
import { SFHeroSection } from "@/components/sections/signal-feed/sf-hero-section";
import { SFSignalLayers } from "@/components/sections/signal-feed/sf-signal-layers";
import { SFSampleLead } from "@/components/sections/signal-feed/sf-sample-lead";
import { SFWhoItsFor } from "@/components/sections/signal-feed/sf-who-its-for";
import { SFPricing } from "@/components/sections/signal-feed/sf-pricing";
import { SFComparison } from "@/components/sections/signal-feed/sf-comparison";
import { SFFaq } from "@/components/sections/signal-feed/sf-faq";
import { SFFinalCta } from "@/components/sections/signal-feed/sf-final-cta";

export const metadata: Metadata = {
  title: "Signal Feed -- Signal-Scored Lead Intelligence",
  description:
    "Signal Feed scores thousands of companies against your ICP every month. Website performance, tech stack detection, hiring signals -- all in one scored feed. Starting at $497/mo.",
  openGraph: {
    title: "Signal Feed by Agentic -- Signal-Scored Lead Intelligence",
    description:
      "Stop guessing who to call. Get signal-scored leads matched to your services, delivered weekly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Signal Feed by Agentic",
    description:
      "Signal-scored lead intelligence. 500-5,000 leads/mo, matched to your services.",
  },
};

export default function SignalFeedPage() {
  return (
    <main id="main-content">
      <SFHeroSection />
      <SFSignalLayers />
      <SFSampleLead />
      <SFWhoItsFor />
      <SFPricing />
      <SFComparison />
      <SFFaq />
      <SFFinalCta />
    </main>
  );
}
