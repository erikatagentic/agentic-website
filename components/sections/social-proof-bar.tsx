import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { STATS } from "@/lib/constants";

export function SocialProofBar() {
  return (
    <section id="social-proof" aria-labelledby="social-proof-heading" className="border-y border-border py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="social-proof-heading" className="sr-only">Key results at a glance</h2>
        <MotionWrapper>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-normal tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-foreground-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
