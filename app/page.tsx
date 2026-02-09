import { HeroSection } from "@/components/sections/hero-section";
import { SocialProofBar } from "@/components/sections/social-proof-bar";
import { ProblemSection } from "@/components/sections/problem-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { ServicesSection } from "@/components/sections/services-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ResultsSection } from "@/components/sections/results-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { UseCasesSection } from "@/components/sections/use-cases-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTASection } from "@/components/sections/final-cta-section";
import { MobileStickyCTA } from "@/components/layout/mobile-sticky-cta";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <SocialProofBar />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <HowItWorksSection />
        <ResultsSection />
        <TestimonialsSection />
        <UseCasesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <MobileStickyCTA />
    </>
  );
}
