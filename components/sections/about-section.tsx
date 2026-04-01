import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeading } from "@/components/shared/section-heading";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { ABOUT, TEAM } from "@/lib/constants";

export function AboutSection() {
  return (
    <SectionWrapper id="about" variant="surface">
      <SectionHeading
        id="about-heading"
        overline={ABOUT.overline}
        title={ABOUT.title}
        subtitle={ABOUT.subtitle}
      />

      <MotionWrapper>
        <div className="mx-auto max-w-xl">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-6"
            >
              {/* Initials avatar */}
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary-muted">
                <span className="font-display text-2xl font-normal text-primary">
                  {member.initials}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-primary-text">{member.role}</p>
                <p className="mt-3 text-base leading-relaxed text-foreground-muted">
                  {member.bio}
                </p>
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text hover:text-primary-hover transition-colors"
                  >
                    LinkedIn
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
