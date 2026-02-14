import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { IconBox } from "@/components/shared/icon-box";
import { AnimatedIconBox } from "@/components/shared/animated-icon-box";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { ServiceVisual } from "@/components/shared/service-visual";
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";

export function ServicesSection() {
  return (
    <SectionWrapper id="services" variant="surface-raised">
      <SectionHeading
        id="services-heading"
        overline="Our Services"
        title="What we build."
        subtitle="Clay-powered GTM systems designed for your ICP and sales motion."
      />

      <div className="space-y-24 md:space-y-32">
        {SERVICES.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <MotionWrapper key={service.title} delay={0.1}>
              <div
                className={cn(
                  "grid items-center gap-12 md:grid-cols-2 md:gap-16",
                  isReversed && "md:[&>*:first-child]:order-2"
                )}
              >
                {/* Text side */}
                <div>
                  <AnimatedIconBox>
                    <IconBox icon={service.icon} variant="primary" size="lg" />
                  </AnimatedIconBox>
                  <h3 className="mt-6 font-display text-2xl font-normal leading-snug tracking-tight md:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-foreground-muted">
                    {service.description}
                  </p>
                </div>
                {/* Visual side */}
                <ServiceVisual visualId={service.visualId} />
              </div>
            </MotionWrapper>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
