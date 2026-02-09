import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { AnimatedIconBox } from "@/components/shared/animated-icon-box";
import { HoverCard } from "@/components/shared/hover-card";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <SectionHeading
        id="services-heading"
        overline="Our Services"
        title="What we build."
        subtitle="Tailored AI automation solutions designed for how your team actually works."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <MotionWrapper key={service.title} delay={index * 0.1}>
            <HoverCard>
              <div className="card-hover-glow gradient-border-card rounded-xl border border-border bg-surface p-6 md:p-8">
                <AnimatedIconBox>
                  <IconBox icon={service.icon} variant="primary" size="lg" />
                </AnimatedIconBox>
                <h3 className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground-muted">
                  {service.description}
                </p>
              </div>
            </HoverCard>
          </MotionWrapper>
        ))}
      </div>
    </SectionWrapper>
  );
}
