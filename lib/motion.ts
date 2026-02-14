// Canonical easing from CLAUDE.md Section 3.5
export const easeOutQuad = [0.25, 0.46, 0.45, 0.94] as const;

// Pre-cast mutable copy for Framer Motion's ease prop (avoids repeated `[...easeOutQuad] as [number, number, number, number]`)
export const easeOutQuadMutable: [number, number, number, number] = [...easeOutQuad];

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOutQuad },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4, ease: easeOutQuad },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Cinematic easing -- smooth overshoot curve for premium feel
export const cinematicEase = [0.22, 1, 0.36, 1] as const;

// Pre-cast mutable copy for Framer Motion's ease prop
export const cinematicEaseMutable: [number, number, number, number] = [...cinematicEase];

export const cinematicFadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: cinematicEase },
};

export const slideFromLeft = {
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: cinematicEase },
};

export const slideFromRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: cinematicEase },
};
