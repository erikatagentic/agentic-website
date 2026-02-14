"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { easeOutQuadMutable } from "@/lib/motion";

interface ServiceVisualProps {
  visualId: "workflows" | "integrations" | "intelligence";
  className?: string;
}

export function ServiceVisual({ visualId, className }: ServiceVisualProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface",
        className
      )}
      aria-hidden="true"
    >
      {visualId === "workflows" && (
        <WorkflowVisual reducedMotion={reducedMotion} />
      )}
      {visualId === "integrations" && (
        <IntegrationVisual reducedMotion={reducedMotion} />
      )}
      {visualId === "intelligence" && (
        <IntelligenceVisual reducedMotion={reducedMotion} />
      )}
    </div>
  );
}

// ── Shared types ──

interface VisualProps {
  reducedMotion: boolean;
}

// ── Workflow Visual: Pipeline / flow diagram ──

const workflowNodes = [
  { cx: 15, cy: 30 },
  { cx: 35, cy: 55 },
  { cx: 55, cy: 25 },
  { cx: 75, cy: 50 },
  { cx: 90, cy: 35 },
];

const workflowPaths = [
  "M 15 30 Q 25 50 35 55",
  "M 35 55 Q 45 35 55 25",
  "M 55 25 Q 65 40 75 50",
  "M 75 50 Q 83 40 90 35",
];

function WorkflowVisual({ reducedMotion }: VisualProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Subtle gradient overlay at bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-surface to-transparent" />

      <svg
        viewBox="0 0 100 80"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connecting paths */}
        {workflowPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="hsl(255 92% 76% / 0.2)"
            strokeWidth="0.5"
            strokeLinecap="round"
          />
        ))}
      </svg>

      {/* Nodes */}
      {workflowNodes.map((node, i) => {
        const Wrapper = reducedMotion ? "div" : motion.div;
        const animProps = reducedMotion
          ? {}
          : {
              initial: { opacity: 0, scale: 0.5 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: {
                duration: 0.4,
                delay: i * 0.12,
                ease: easeOutQuadMutable,
              },
            };

        return (
          <Wrapper
            key={i}
            {...animProps}
            className="absolute h-3 w-3 rounded-full border border-primary/30 bg-primary/20 md:h-4 md:w-4"
            style={{
              left: `${node.cx}%`,
              top: `${node.cy}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="absolute inset-1 rounded-full bg-primary/40" />
          </Wrapper>
        );
      })}
    </div>
  );
}

// ── Integration Visual: Grid of connected circles ──

const integrationGrid = [
  { row: 0, col: 0, opacity: 0.5 },
  { row: 0, col: 1, opacity: 0.65 },
  { row: 0, col: 2, opacity: 0.45 },
  { row: 1, col: 0, opacity: 0.6 },
  { row: 1, col: 1, opacity: 1 }, // center
  { row: 1, col: 2, opacity: 0.55 },
  { row: 2, col: 0, opacity: 0.4 },
  { row: 2, col: 1, opacity: 0.7 },
  { row: 2, col: 2, opacity: 0.5 },
];

const integrationLines = [
  // Horizontal connections
  { x1: 30, y1: 25, x2: 50, y2: 25 },
  { x1: 50, y1: 25, x2: 70, y2: 25 },
  { x1: 30, y1: 50, x2: 50, y2: 50 },
  { x1: 50, y1: 50, x2: 70, y2: 50 },
  { x1: 30, y1: 75, x2: 50, y2: 75 },
  { x1: 50, y1: 75, x2: 70, y2: 75 },
  // Vertical connections
  { x1: 30, y1: 25, x2: 30, y2: 50 },
  { x1: 50, y1: 25, x2: 50, y2: 50 },
  { x1: 70, y1: 25, x2: 70, y2: 50 },
  { x1: 30, y1: 50, x2: 30, y2: 75 },
  { x1: 50, y1: 50, x2: 50, y2: 75 },
  { x1: 70, y1: 50, x2: 70, y2: 75 },
];

function IntegrationVisual({ reducedMotion }: VisualProps) {
  return (
    <div className="absolute inset-0">
      {/* Connecting lines */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {integrationLines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="hsl(255 92% 76% / 0.1)"
            strokeWidth="0.3"
          />
        ))}
      </svg>

      {/* Grid circles */}
      {integrationGrid.map((pos, i) => {
        const isCenter = pos.row === 1 && pos.col === 1;
        const left = 30 + pos.col * 20;
        const top = 25 + pos.row * 25;

        const Wrapper = reducedMotion ? "div" : motion.div;
        const animProps = reducedMotion
          ? {}
          : {
              initial: { opacity: 0, scale: 0.6 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: {
                duration: 0.35,
                delay: i * 0.06,
                ease: easeOutQuadMutable,
              },
            };

        return (
          <Wrapper
            key={i}
            {...animProps}
            className={cn(
              "absolute rounded-full",
              isCenter
                ? "h-6 w-6 border border-primary/30 bg-primary/15 md:h-8 md:w-8"
                : "h-4 w-4 border border-border bg-surface-raised md:h-5 md:w-5"
            )}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              transform: "translate(-50%, -50%)",
              opacity: reducedMotion ? pos.opacity : undefined,
            }}
          >
            {isCenter && (
              <span className="absolute -inset-2 rounded-full bg-primary/5" />
            )}
          </Wrapper>
        );
      })}
    </div>
  );
}

// ── Intelligence Visual: Concentric rings with pulsing center ──

const ringRadii = [18, 30, 42];

const ringDots = [
  { ring: 0, angle: 45 },
  { ring: 0, angle: 200 },
  { ring: 1, angle: 90 },
  { ring: 1, angle: 270 },
  { ring: 1, angle: 30 },
  { ring: 2, angle: 150 },
  { ring: 2, angle: 310 },
  { ring: 2, angle: 60 },
];

function IntelligenceVisual({ reducedMotion }: VisualProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="absolute h-4/5 w-4/5"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Concentric rings */}
        {ringRadii.map((r, i) => {
          const opacity = 0.08 + i * 0.06;
          if (reducedMotion) {
            return (
              <circle
                key={i}
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke={`hsl(255 92% 76% / ${opacity})`}
                strokeWidth="0.4"
              />
            );
          }
          return (
            <motion.circle
              key={i}
              cx="50"
              cy="50"
              r={r}
              fill="none"
              stroke={`hsl(255 92% 76% / ${opacity})`}
              strokeWidth="0.4"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: easeOutQuadMutable,
              }}
              style={{ transformOrigin: "50px 50px" }}
            />
          );
        })}

        {/* Dots on rings */}
        {ringDots.map((dot, i) => {
          const r = ringRadii[dot.ring];
          const rad = (dot.angle * Math.PI) / 180;
          const cx = 50 + r * Math.cos(rad);
          const cy = 50 + r * Math.sin(rad);

          if (reducedMotion) {
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r="1.2"
                fill="hsl(255 92% 76% / 0.3)"
              />
            );
          }
          return (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="1.2"
              fill="hsl(255 92% 76% / 0.3)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
            />
          );
        })}

        {/* Center dot */}
        {reducedMotion ? (
          <circle cx="50" cy="50" r="3" fill="hsl(255 92% 76% / 0.4)" />
        ) : (
          <>
            <motion.circle
              cx="50"
              cy="50"
              r="3"
              fill="hsl(255 92% 76% / 0.4)"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="6"
              fill="none"
              stroke="hsl(255 92% 76% / 0.15)"
              strokeWidth="0.3"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: [0, 0.8, 0], scale: [0.5, 1.5, 2] }}
              viewport={{ once: true }}
              transition={{
                duration: 2.5,
                delay: 0.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "50px 50px" }}
            />
          </>
        )}
      </svg>
    </div>
  );
}
