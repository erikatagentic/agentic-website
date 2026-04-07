import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SF_FAQ_ITEMS } from "@/lib/signal-feed-constants";

export function SFFaq() {
  return (
    <SectionWrapper id="sf-faq" size="default">
      <SectionHeading
        id="sf-faq-heading"
        overline="FAQ"
        title="Questions? Answered."
      />

      <MotionWrapper>
        <Accordion
          type="single"
          collapsible
          className="mx-auto grid max-w-3xl grid-cols-1 gap-4"
        >
          {SF_FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-border border-b-border bg-surface"
            >
              <AccordionTrigger className="px-5 py-4 text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 text-base leading-relaxed text-foreground-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </MotionWrapper>
    </SectionWrapper>
  );
}
