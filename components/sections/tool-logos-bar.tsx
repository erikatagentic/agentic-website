import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { TOOL_LOGOS } from "@/lib/constants";

export function ToolLogosBar() {
  return (
    <section aria-label="Tools we integrate with" className="py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionWrapper>
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-foreground-subtle">
            Built on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {TOOL_LOGOS.map((tool, i) => (
              <span
                key={tool}
                className="text-sm font-medium text-foreground-subtle"
              >
                {tool}
                {i < TOOL_LOGOS.length - 1 && (
                  <span className="ml-6 text-border" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
