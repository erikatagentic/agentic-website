import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { ToolLogosBar } from "@/components/sections/tool-logos-bar";
import { ProblemSection } from "@/components/sections/problem-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { AboutSection } from "@/components/sections/about-section";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { MobileStickyCTA } from "@/components/layout/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <SocialProofBar />
        <ToolLogosBar />
        <ProblemSection />
        <PricingSection />
        <HowItWorksSection />
        <SocialProofSection />
        <UseCasesSection />
        <AboutSection />
        <ComparisonTable />
        <FAQSection />
        <FinalCTASection />
      </main>
      <MobileStickyCTA />
    </>
  );
}
