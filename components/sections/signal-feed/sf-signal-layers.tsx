import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { SIGNAL_LAYERS } from "@/lib/signal-feed-constants";

export function SFSignalLayers() {
  return (
    <SectionWrapper id="signal-layers" variant="surface">
      <SectionHeading
        id="signal-layers-heading"
        overline="The Pipeline"
        title="Three signal layers. One score."
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SIGNAL_LAYERS.map((layer, i) => (
          <MotionWrapper key={layer.title} delay={i * 0.1}>
            <div className="rounded-2xl border border-border bg-surface-raised p-6 md:p-8">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-muted">
                  <layer.icon className="h-6 w-6 text-primary-text" />
                </div>
                <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-foreground-muted">
                  {layer.tag}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{layer.title}</h3>
              <p className="text-sm leading-relaxed text-foreground-muted">
                {layer.description}
              </p>
            </div>
          </MotionWrapper>
        ))}
      </div>

      <MotionWrapper delay={0.3}>
        <p className="mt-12 text-center text-base text-foreground-muted">
          Every company gets scored 0-100 and tagged with which of your services
          fits their gaps.
        </p>
      </MotionWrapper>
    </SectionWrapper>
  );
}
