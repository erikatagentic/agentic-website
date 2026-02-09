import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { STATS } from "@/lib/constants";

export function SocialProofBar() {
  return (
    <section id="social-proof" aria-labelledby="social-proof-heading" className="border-y border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 id="social-proof-heading" className="sr-only">Key results at a glance</h2>
        <MotionWrapper>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-normal italic tracking-tight text-foreground md:text-4xl">
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
