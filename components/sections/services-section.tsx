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
        subtitle="Clay-powered GTM systems designed for your ICP and sales motion."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <MotionWrapper key={service.title} delay={index * 0.1} className="h-full">
            <HoverCard className="h-full">
              <div className="card-hover-glow gradient-border-card flex h-full flex-col rounded-xl border border-border bg-surface p-6 md:p-8">
                <AnimatedIconBox>
                  <IconBox icon={service.icon} variant="primary" size="lg" />
                </AnimatedIconBox>
                <h3 className="mt-4 text-xl font-semibold leading-snug md:min-h-[4.25rem] md:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-foreground-muted">
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
