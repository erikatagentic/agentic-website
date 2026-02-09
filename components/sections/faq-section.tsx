import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQSection() {
  return (
    <SectionWrapper id="faq" variant="surface">
      <SectionHeading id="faq-heading" overline="FAQ" title="Questions? Answered." />

      <MotionWrapper className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="py-4 text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-foreground-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionWrapper>
    </SectionWrapper>
  );
}
