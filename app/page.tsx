import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ServicesSection } from "@/components/sections/services-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ResultsSection } from "@/components/sections/results-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { AboutSection } from "@/components/sections/about-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { MobileStickyCTA } from "@/components/layout/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <HowItWorksSection />
        <ResultsSection />
        <SocialProofSection />
        <UseCasesSection />
        <AboutSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <MobileStickyCTA />
    </>
  );
}
