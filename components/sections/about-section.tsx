import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { MotionWrapper } from "@/components/shared/motion-wrapper";
import { ABOUT, TEAM } from "@/lib/constants";

export function AboutSection() {
  const member = TEAM[0];

  return (
    <SectionWrapper id="about" variant="surface">
      <MotionWrapper>
        <div className="mx-auto max-w-2xl">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            {/* Headshot */}
            <Image
              src="/erik-headshot.jpg"
              alt={`${member.name} headshot`}
              width={80}
              height={80}
              className="h-20 w-20 shrink-0 rounded-full object-cover"
            />

            <div>
              <h2
                id="about-heading"
                className="font-display text-3xl font-normal leading-[1.15] tracking-tight sm:text-4xl"
              >
                {ABOUT.title}
              </h2>
              <p className="mt-1 text-sm text-primary-text">{member.role}</p>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-foreground-muted">
                {member.bio.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary-text hover:text-primary-hover transition-colors"
                >
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </MotionWrapper>
    </SectionWrapper>
  );
}
