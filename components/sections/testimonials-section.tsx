import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { HoverCard } from "@/components/shared/hover-card";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" variant="surface">
      <SectionHeading
        id="testimonials-heading"
        overline="Testimonials"
        title="What our clients say."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <MotionWrapper key={testimonial.author} delay={index * 0.1}>
            <HoverCard>
              <blockquote className="card-hover-glow flex h-full flex-col rounded-xl border border-border bg-background p-6 md:p-8">
                <p className="flex-1 text-base leading-relaxed text-foreground-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-medium">{testimonial.author}</p>
                  <p className="text-sm text-foreground-subtle">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </blockquote>
            </HoverCard>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
