# CLAUDE.md — Agentic Website Blueprint

> Single-source-of-truth for AI agents building the Agentic marketing website.
> Every decision is made. Follow this file exactly. Do not improvise.

---

## Workflow Rules

- **Auto-commit**: Commit after every meaningful change (new feature, fix, or update). Do not batch multiple unrelated changes into one commit.
- **Auto-push**: Push to remote after every commit. Always `git push` immediately after committing.
- **Auto-update docs**: After making changes, automatically update this CLAUDE.md and session MEMORY.md without being asked. The user should never have to remind you to document.
- **Plans before execution**: For multi-step or ambiguous tasks, present a comprehensive plan before writing code. Get approval first.

---

## 1. Project Overview

| Field | Value |
|-------|-------|
| **Company** | Agentic |
| **Business** | AI consulting & services — workflow automation |
| **Value prop** | We automate business workflows using AI so teams ship faster, reduce errors, and scale without hiring. |
| **Target audience** | Business leaders, CTOs, ops/engineering teams evaluating AI workflow automation |
| **Primary CTA** | "Book a Demo" → `https://cal.com/agentic/demo` |
| **Secondary CTA** | "See How It Works" → scrolls to `#how-it-works` |
| **Site type** | Single landing page |

### Placeholder Stats (replace with real data)

- `[150]+` — Workflows automated
- `[40]+` — Enterprise clients
- `[10x]` — Average efficiency gain
- `[98]%` — Client retention rate
- `[3]` — Average days to first workflow live

---

## 2. Tech Stack

### Setup Commands

```bash
# 1. Create Next.js project
pnpm create next-app@latest agentic-website \
  --typescript --tailwind --eslint --app --src-dir=false \
  --import-alias "@/*" --use-pnpm --yes

# 2. Navigate into project
cd agentic-website

# 3. Install dependencies
pnpm add framer-motion lucide-react clsx tailwind-merge

# 4. Initialize shadcn/ui
pnpm dlx shadcn@latest init

# 5. Add shadcn/ui components
pnpm dlx shadcn@latest add button card badge separator sheet accordion
```

### Stack Details

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | latest stable |
| Language | TypeScript (strict mode) | 5.x |
| Styling | Tailwind CSS | v4 (CSS-first config) |
| Components | shadcn/ui | latest |
| Animation | Framer Motion | latest |
| Icons | Lucide React | latest |
| Fonts | next/font (Inter + Instrument Serif) | built-in |
| Package Manager | pnpm | latest |
| Deployment | Vercel | — |

### TypeScript Configuration

In `tsconfig.json`, ensure `strict: true` and the path alias `"@/*": ["./*"]`.

---

## 3. Design System

### 3.1 Color Tokens

All colors defined as CSS custom properties in `app/globals.css`.

**Two-tier accent strategy:** It is mathematically impossible to achieve WCAG AA 4.5:1 contrast in both directions (text-on-dark AND white-on-accent) with a single color at this background darkness. Solution:

- **`--primary`** (#A78BFA) — for text, links, badges on dark backgrounds (7.31:1 on dark)
- **`--primary-cta`** (#7C3AED) — for CTA button backgrounds with white text (5.70:1 white-on-accent)

```css
@import "tailwindcss";

:root {
  /* ── Background Tiers ── */
  --background: hsl(240 6% 3.9%);          /* #09090B */
  --surface: hsl(240 5% 6.5%);             /* #0F0F12 */
  --surface-raised: hsl(240 5.9% 10%);     /* #18181B — zinc-900 */
  --surface-overlay: hsl(240 3.7% 15.9%);  /* #27272A — zinc-800 */

  /* ── Border ── */
  --border: hsl(240 3.7% 15.9%);           /* #27272A */
  --border-hover: hsl(240 5.3% 26.1%);     /* #3F3F46 */
  --ring: hsl(263 70% 50.4%);              /* #6D28D9 */

  /* ── Text ── */
  --foreground: hsl(0 0% 98%);             /* #FAFAFA */
  --foreground-muted: hsl(240 5% 64.9%);   /* #A1A1AA — zinc-400 */
  --foreground-subtle: hsl(240 4% 46%);     /* #71717A — zinc-500 */

  /* ── Primary Accent (Violet) ── */
  --primary: hsl(255 92% 76%);             /* #A78BFA — text/links on dark bg */
  --primary-hover: hsl(258 90% 66%);       /* #8B5CF6 */
  --primary-cta: hsl(262 83% 58%);         /* #7C3AED — CTA button bg */
  --primary-cta-hover: hsl(263 70% 50%);   /* #6D28D9 */
  --primary-muted: hsl(255 92% 76% / 0.1); /* subtle bg tint */

  /* ── Secondary Accent (Indigo) ── */
  --secondary: hsl(239 84% 67%);           /* #6366F1 */
  --secondary-muted: hsl(239 84% 67% / 0.1);

  /* ── Semantic ── */
  --success: hsl(160 64% 52%);             /* #34D399 */
  --warning: hsl(43 96% 56%);              /* #FBBF24 */
  --error: hsl(0 91% 71%);                 /* #F87171 */

  /* ── Gradients ── */
  --gradient-primary: linear-gradient(135deg, hsl(263 70% 50%), hsl(239 84% 67%));
  --gradient-glow: radial-gradient(ellipse at center, hsl(255 92% 76% / 0.15), transparent 70%);
  --gradient-surface: linear-gradient(180deg, hsl(240 6% 3.9%), hsl(240 5% 6.5%));

  /* ── Shadows (glow-based for dark theme) ── */
  --shadow-sm: 0 1px 2px hsl(0 0% 0% / 0.3);
  --shadow-md: 0 4px 12px hsl(0 0% 0% / 0.4);
  --shadow-lg: 0 8px 24px hsl(0 0% 0% / 0.5);
  --shadow-glow-sm: 0 0 15px hsl(255 92% 76% / 0.1);
  --shadow-glow-md: 0 0 30px hsl(255 92% 76% / 0.15);
  --shadow-glow-lg: 0 0 60px hsl(255 92% 76% / 0.2);
}

@theme inline {
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-surface-raised: var(--surface-raised);
  --color-surface-overlay: var(--surface-overlay);
  --color-border: var(--border);
  --color-border-hover: var(--border-hover);
  --color-ring: var(--ring);
  --color-foreground: var(--foreground);
  --color-foreground-muted: var(--foreground-muted);
  --color-foreground-subtle: var(--foreground-subtle);
  --color-primary: var(--primary);
  --color-primary-hover: var(--primary-hover);
  --color-primary-cta: var(--primary-cta);
  --color-primary-cta-hover: var(--primary-cta-hover);
  --color-primary-muted: var(--primary-muted);
  --color-secondary: var(--secondary);
  --color-secondary-muted: var(--secondary-muted);
  --color-success: var(--success);
  --color-warning: var(--warning);
  --color-error: var(--error);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-display), Georgia, "Times New Roman", serif;
}
```

### WCAG AA Contrast Documentation

| Token | Hex | On Dark BG (#09090B) | White On This BG |
|-------|-----|---------------------|------------------|
| `--foreground` | #FAFAFA | 19.06:1 PASS | — |
| `--foreground-muted` | #A1A1AA | 7.76:1 PASS | — |
| `--primary` (text) | #A78BFA | 7.31:1 PASS | 2.72:1 FAIL (don't use as button bg) |
| `--primary-cta` (buttons) | #7C3AED | 3.49:1 (large text only) | 5.70:1 PASS |
| `--primary-cta-hover` | #6D28D9 | 2.80:1 (decorative) | 7.10:1 PASS |
| `--secondary` | #6366F1 | 4.45:1 PASS | 4.47:1 PASS |
| `--success` | #34D399 | 10.35:1 PASS | — |
| `--warning` | #FBBF24 | 11.92:1 PASS | — |
| `--error` | #F87171 | 7.19:1 PASS | — |

**Rules:**

- Use `--primary` (#A78BFA) for inline text links, highlighted text, badges, labels on dark backgrounds.
- Use `--primary-cta` (#7C3AED) exclusively as background color for CTA buttons. Always pair with white (#FFFFFF) text.
- Never place `--primary` text on `--primary-cta` background or vice versa.
- Semantic colors (success, warning, error) are text-on-dark only. Never use as button backgrounds with white text.

### 3.2 Typography

**Fonts:**

- **Sans-serif (body):** Inter via `next/font/google` — variable font
- **Display serif (headings):** Instrument Serif via `next/font/google` — weight 400 + italic

```typescript
// app/layout.tsx
import { Inter } from "next/font/google";
import { Instrument_Serif } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
```

**Typography Scale:**

| Element | Tailwind Classes | Font |
|---------|-----------------|------|
| Hero headline | `text-5xl md:text-6xl lg:text-7xl font-display font-normal leading-[1.1] tracking-tight` | Instrument Serif |
| Section headline | `text-3xl md:text-4xl lg:text-5xl font-display font-normal leading-[1.15] tracking-tight` | Instrument Serif |
| Section subhead | `text-lg md:text-xl text-foreground-muted leading-relaxed max-w-2xl` | Inter |
| Card title | `text-xl md:text-2xl font-semibold leading-snug` | Inter |
| Body large | `text-lg leading-relaxed text-foreground-muted` | Inter |
| Body | `text-base leading-relaxed text-foreground-muted` | Inter |
| Body small | `text-sm leading-normal text-foreground-subtle` | Inter |
| Label / overline | `text-xs font-medium uppercase tracking-widest text-primary` | Inter |
| Button large | `text-base font-medium` | Inter |
| Button default | `text-sm font-medium` | Inter |
| Nav link | `text-sm font-medium text-foreground-muted hover:text-foreground` | Inter |

### 3.3 Spacing (8px grid)

- `space-1` = 4px (half-step, use sparingly)
- `space-2` = 8px
- `space-4` = 16px
- `space-6` = 24px
- `space-8` = 32px
- `space-12` = 48px
- `space-16` = 64px
- `space-20` = 80px
- `space-24` = 96px
- `space-32` = 128px

**Section vertical padding:** `py-24 md:py-32` (96px / 128px)
**Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
**Card padding:** `p-6 md:p-8`

### 3.4 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-sm` | 4px | Small badges |
| `rounded-md` | 6px | Inputs, small buttons |
| `rounded-lg` | 8px | Cards, containers |
| `rounded-xl` | 12px | Feature cards, modals |
| `rounded-2xl` | 16px | Hero cards, large sections |
| `rounded-full` | 9999px | Pills, avatars, icon buttons |

### 3.5 Motion / Animation Presets

```typescript
// lib/motion.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};
```

**Rules:**

- All scroll-triggered animations: `whileInView` with `viewport={{ once: true, margin: "-100px" }}`
- Duration: 0.3–0.6s max. Never exceed 0.8s.
- Easing: `[0.25, 0.46, 0.45, 0.94]` (ease-out-quad) for entrances
- Respect `prefers-reduced-motion` — provide a `useReducedMotion` hook (see Section 15)

---

## 4. Brand Voice

### Tone

- Confident but not arrogant
- Technical but accessible
- Direct, no fluff
- Future-oriented, pragmatic

### Copy Rules

1. Lead with the outcome, not the feature. "Ship workflows in days, not months" not "Our platform has a drag-and-drop builder."
2. Active voice always.
3. Sentences max 20 words for hero/headline copy.
4. Numbers beat adjectives: "10x faster" not "significantly faster."
5. Address the reader as "you" / "your team."
6. Present tense: "Automate your workflows" not "You will be able to automate."

### Forbidden Phrases

- "Leverage" / "synergy" / "paradigm shift"
- "Cutting-edge" / "best-in-class" / "world-class"
- "Just" (minimizer)
- "Simple" / "easy" (let the product prove it)
- "Disrupting" / "revolutionary"
- "AI-powered" in every headline (once in hero is fine, then vary)
- "Click here"

### CTA Hierarchy

| Priority | Label | Style | Usage |
|----------|-------|-------|-------|
| Primary | "Book a Demo" | Solid `bg-primary-cta text-white` | Max 1 per viewport — hero + final CTA |
| Secondary | "See How It Works" | Outline `border-border text-foreground` | Alongside primary, or standalone |
| Tertiary | "Learn More" / "View Case Study" | Ghost `text-primary hover:underline` | Inline links, card footers |

### Headline Formula

**[Outcome verb] + [your/business thing] + [with/using AI] + [speed/scale modifier]**

Examples:

- "Automate your workflows with AI — in days, not months"
- "Turn manual processes into intelligent pipelines"
- "Scale operations without scaling headcount"

---

## 5. Site Architecture

Single landing page: `app/page.tsx`. All sections rendered sequentially. Each section is a separate component in `components/sections/`.

### Section Order

| # | Section ID | Component | Content Summary |
|---|-----------|-----------|-----------------|
| 1 | `#hero` | `HeroSection` | Headline (Instrument Serif), subheadline, primary CTA ("Book a Demo"), secondary CTA ("See How It Works"), trust bar |
| 2 | `#social-proof` | `SocialProofBar` | Stat counters: "[150]+ Workflows", "[40]+ Clients", "[10x] Efficiency", "[98]% Retention" |
| 3 | `#problem` | `ProblemSection` | Title: "Your team is drowning in manual work." 3-col grid of pain points with icons |
| 4 | `#solution` | `SolutionSection` | Title: "There's a better way." Differentiator: "Custom AI pipelines — not off-the-shelf templates." |
| 5 | `#services` | `ServicesSection` | Title: "What We Build." 3 service cards: AI Workflow Automation, Custom AI Integrations, Process Intelligence |
| 6 | `#how-it-works` | `HowItWorksSection` | Title: "From kickoff to production in [3] days." 4-step vertical timeline: Discovery → Design → Deploy → Optimize |
| 7 | `#results` | `ResultsSection` | Title: "The numbers speak." 4 animated stat cards with large numbers (Instrument Serif italic) |
| 8 | `#testimonials` | `TestimonialsSection` | Title: "What our clients say." 3 testimonial cards (placeholder content) |
| 9 | `#use-cases` | `UseCasesSection` | Title: "Built for your stack." Tabbed: Sales Ops, Customer Support, Finance, Engineering |
| 10 | `#faq` | `FAQSection` | Title: "Questions? Answered." 6 accordion items using shadcn Accordion |
| 11 | `#cta` | `FinalCTASection` | Full-width gradient bg. Headline: "Ready to automate?" Primary CTA + reassurance text |
| 12 | — | `not-found.tsx` | Branded 404: headline, subtext, "Go Home" + primary CTA buttons |

### Navigation

- **Desktop:** Fixed top navbar — Logo ("Agentic" in Instrument Serif italic + dot), nav links (How It Works, Services, Results, FAQ), "Book a Demo" button
- **Mobile:** Hamburger → shadcn Sheet. Same links + CTA.
- **Scroll behavior:** `backdrop-blur-md bg-background/80 border-b border-border` when scrolled past 50px
- **Active section:** Highlight current nav link via Intersection Observer

### Footer

- 3-column: Brand (logo + tagline), Links (sections + legal), CTA ("Book a Demo")
- Bottom row: copyright, privacy policy, terms
- Minimal. No social icons unless provided.

---

## 6. Component Architecture

### File Structure

```
agentic-website/
├── app/
│   ├── globals.css              # Tailwind v4 + color tokens
│   ├── layout.tsx               # Root layout (fonts, metadata)
│   ├── page.tsx                 # Landing page (all sections)
│   ├── not-found.tsx            # Custom branded 404
│   ├── opengraph-image.tsx      # Dynamic OG image
│   └── sitemap.ts               # Sitemap generation
├── components/
│   ├── ui/                      # shadcn/ui (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   ├── sheet.tsx
│   │   └── separator.tsx
│   ├── layout/
│   │   ├── navbar.tsx           # Fixed navigation
│   │   ├── mobile-nav.tsx       # Mobile Sheet nav
│   │   ├── footer.tsx           # Site footer
│   │   └── section-wrapper.tsx  # Reusable section container
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── social-proof-bar.tsx
│   │   ├── problem-section.tsx
│   │   ├── solution-section.tsx
│   │   ├── services-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── results-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── use-cases-section.tsx
│   │   ├── faq-section.tsx
│   │   └── final-cta-section.tsx
│   └── shared/
│       ├── animated-counter.tsx  # Number counting animation
│       ├── gradient-blob.tsx     # Decorative gradient bg
│       ├── section-heading.tsx   # Overline + title + subtitle
│       ├── cta-button.tsx        # Standardized CTA button
│       ├── icon-box.tsx          # Icon with background
│       └── motion-wrapper.tsx    # Client wrapper for framer-motion
├── hooks/
│   └── use-reduced-motion.ts    # prefers-reduced-motion hook
├── lib/
│   ├── utils.ts                 # cn() helper
│   ├── motion.ts                # Animation presets
│   └── constants.ts             # All site content
├── public/
│   ├── og-default.png           # Fallback OG image (1200x630)
│   └── favicon.ico
├── CLAUDE.md
├── next.config.ts
├── tsconfig.json
├── package.json
└── .env.local                   # CAL_LINK, SITE_URL
```

### Key Component Interfaces

```typescript
// components/layout/section-wrapper.tsx
interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "surface" | "gradient";
}

// components/shared/section-heading.tsx
interface SectionHeadingProps {
  overline?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
}

// components/shared/cta-button.tsx
interface CTAButtonProps {
  variant: "primary" | "secondary" | "ghost";
  size?: "default" | "lg";
  href: string;
  children: React.ReactNode;
  external?: boolean;
}

// components/shared/icon-box.tsx
interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "surface";
}

// components/shared/animated-counter.tsx
interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}
```

### Client vs. Server Component Rules

- **Server Components (default):** `page.tsx`, `layout.tsx`, `section-wrapper.tsx`, all section containers
- **Client Components (`"use client"`):** Anything using `framer-motion`, `useState`, `useEffect`, `onClick`, Intersection Observer, or shadcn interactive components (Accordion, Sheet)
- **Pattern:** Keep section components as Server Components. Extract interactive parts into small Client Component children (`motion-wrapper.tsx`, `animated-counter.tsx`, `mobile-nav.tsx`).

---

## 7. Conversion Optimization Rules

1. **Above-fold CTA:** "Book a Demo" must be visible without scrolling on all viewports.
2. **CTA frequency:** Primary CTA appears exactly 3 times: hero, (optionally) after results, and final CTA section.
3. **Sticky mobile CTA:** On mobile (`< md`), fixed bottom bar with "Book a Demo" that appears after scrolling past hero. `fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border`. Hide when footer is in view.
4. **Social proof proximity:** Place social proof within 200px of every primary CTA.
5. **Single-action sections:** Each section has at most one action.
6. **External links:** All Cal.com links use `target="_blank" rel="noopener noreferrer"`.
7. **Value before ask:** Never show a CTA without first presenting a value proposition. Flow: pain → solution → proof → ask.
8. **Contrast hierarchy:** Primary CTA must be the highest-contrast element. Nothing else uses `bg-primary-cta`.
9. **Trust signals near pricing:** Include reassurance text ("No long-term contracts", "Cancel anytime", "No commitment") directly below pricing CTAs. Reduces friction.
10. **Comparison tables before final CTA:** If the business has competitors or alternatives, a comparison table (Us vs. Them vs. DIY) placed before the final CTA handles objections and pushes conversion.

---

## 8. Performance & SEO

### Core Web Vitals Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |

### Image Rules

- No images in initial build (use CSS gradients + SVG for visuals).
- If added later: `next/image` only with `width`, `height`, `alt` always specified.
- Format: WebP or AVIF. `quality={85}`.
- Always set `sizes` attribute.
- Above-fold: `priority` prop. All others: lazy load (default).

### Video Embed Performance (YouTube Facade)

Never auto-load YouTube iframes. Use a facade pattern:

1. Show a static thumbnail image + play button overlay
2. On click, replace with the actual `<iframe>` (`autoplay=1`)
3. This saves ~500KB+ of initial page weight per embed

```tsx
const [playing, setPlaying] = useState(false);
// When !playing: <Image> with play button overlay
// When playing: <iframe src="...?autoplay=1">
```

### Font Loading

- Both fonts use `display: "swap"` via `next/font/google` (self-hosted, no external requests).
- Preload is automatic.

### Bundle Optimization

- Import Lucide icons individually: `import { Zap } from "lucide-react"` — never `import * from "lucide-react"`.
- Dynamic imports for below-fold sections if bundle exceeds 200KB first-load JS.
- Framer Motion: import only what's needed: `import { motion, useInView } from "framer-motion"`.
- Do not install unused dependencies.

### SEO Metadata

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://agentic.com"),
  title: {
    default: "Agentic — AI Workflow Automation",
    template: "%s | Agentic",
  },
  description:
    "Automate your business workflows with AI. Custom pipelines, n8n integrations, and intelligent automation — deployed in days, not months.",
  keywords: [
    "AI workflow automation",
    "business process automation",
    "n8n automation",
    "AI consulting",
    "workflow optimization",
    "AI integrations",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentic",
    title: "Agentic — AI Workflow Automation",
    description:
      "Automate your business workflows with AI. Custom pipelines deployed in days.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic — AI Workflow Automation",
    description:
      "Automate your business workflows with AI. Custom pipelines deployed in days.",
  },
  robots: { index: true, follow: true },
};
```

### Sitemap

```typescript
// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://agentic.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
```

### JSON-LD Structured Data

Add inline in `layout.tsx` body for rich search results:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      description: SITE_CONFIG.description,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        url: SITE_CONFIG.calLink,
      },
    }),
  }}
/>
```

### Security Headers

Configure in `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
      ],
    },
  ];
},
```

Extend the CSP `script-src` directive if adding analytics (Google Tag Manager, etc.) or embeds (YouTube iframes need `frame-src`).

---

## 9. Responsive Design

### Breakpoints (Tailwind defaults)

| Breakpoint | Min-width | Device |
|-----------|-----------|--------|
| (base) | 0px | Mobile portrait |
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Small desktop |
| `xl` | 1280px | Desktop |
| `2xl` | 1536px | Large desktop |

### Mobile-First Rules

1. Write base styles for mobile. Layer `md:` and `lg:` overrides.
2. Container: `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
3. Never use `hidden` without a responsive show: e.g., `hidden md:block`.

### Component Behavior Table

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Navbar | Hamburger (Sheet) | Full horizontal | Full horizontal |
| Hero headline | `text-5xl` | `text-6xl` | `text-7xl` |
| Service cards | 1-col stack | 2-col grid | 3-col grid |
| How It Works | Vertical timeline | Vertical timeline | Vertical timeline |
| Stats grid | 2x2 grid | 4-col row | 4-col row |
| Testimonials | Horizontal scroll | 2-col grid | 3-col grid |
| Use Cases tabs | Horizontal scroll pills | Inline pills | Inline pills |
| FAQ | Full-width accordions | max-w-3xl centered | max-w-3xl centered |
| Footer | Stacked columns | 3-col row | 3-col row |
| Mobile sticky CTA | Visible (fixed bottom) | Hidden | Hidden |

### Touch Targets

- Minimum touch target: 44x44px (WCAG 2.5.5).
- Buttons: minimum `h-11` (44px). CTA buttons: `h-12` (48px) on mobile.
- Nav links in mobile menu: `py-3` minimum.
- FAQ accordion triggers: full-width, `py-4`.

---

## 10. Code Standards

### Component Rules

1. One component per file. File name = component name in kebab-case.
2. Named exports only: `export function HeroSection() {}`. No default exports.
3. Props interface defined in the same file, directly above the component.
4. Use `cn()` for conditional class merging.
5. Destructure props in the function signature.

### TypeScript Rules

1. `strict: true`. No `any` type ever.
2. All props must have explicit interfaces.
3. Use `React.ReactNode` for children, `React.ComponentPropsWithoutRef<"div">` for extending HTML elements.
4. Lucide icons type: `import type { LucideIcon } from "lucide-react"`.

### Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Component files | kebab-case | `hero-section.tsx` |
| Component names | PascalCase | `HeroSection` |
| Prop interfaces | PascalCase + Props | `HeroSectionProps` |
| Utility functions | camelCase | `formatNumber()` |
| Constants | SCREAMING_SNAKE | `SITE_CONFIG` |
| CSS variables | kebab-case | `--primary-cta` |
| Section IDs | kebab-case | `#how-it-works` |

### Import Order

```typescript
// 1. React / Next.js
import { type Metadata } from "next";

// 2. Third-party libraries
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

// 3. Internal components (UI first, then custom)
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";

// 4. Lib / utils
import { cn } from "@/lib/utils";
import { SERVICES } from "@/lib/constants";

// 5. Types (type-only imports)
import type { ServiceCard } from "@/lib/constants";
```

### Tailwind Rules

1. Use design tokens: `text-foreground`, `bg-surface`, `border-border`. Never hardcode hex.
2. Use `cn()` for conditional classes.
3. Keep class strings under 120 chars. Break with `cn()` if needed.
4. Responsive: always mobile-first. Base = mobile, then `md:`, `lg:`.
5. Never use `@apply`. Write Tailwind classes in JSX.
6. Spacing: use multiples of 2 (8px grid). Prefer `p-4`, `p-6`, `p-8`.

---

## 11. Content Data

All content lives in `lib/constants.ts`. Components read from here. Never hardcode content strings in components.

```typescript
// lib/constants.ts

import {
  Workflow,
  Plug,
  Search,
  Clock,
  AlertTriangle,
  Users,
  type LucideIcon,
} from "lucide-react";

// ── Site Config ──

export const SITE_CONFIG = {
  name: "Agentic",
  tagline: "AI Workflow Automation",
  description:
    "Automate your business workflows with AI. Custom pipelines, n8n integrations, and intelligent automation — deployed in days, not months.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agentic.com",
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "https://cal.com/agentic/demo",
} as const;

// ── Navigation ──

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

// ── Hero ──

export const HERO = {
  headline: "Automate your workflows with AI",
  subheadline:
    "We design and deploy intelligent automation pipelines that eliminate manual work, reduce errors, and scale with your business — in days, not months.",
  primaryCta: "Book a Demo",
  secondaryCta: "See How It Works",
  secondaryCtaHref: "#how-it-works",
} as const;

// ── Stats ──

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "150+", label: "Workflows Automated" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "10x", label: "Average Efficiency Gain" },
  { value: "98%", label: "Client Retention" },
];

// ── Problem ──

export interface PainPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: Clock,
    title: "Hours lost to repetitive tasks",
    description:
      "Your team spends more time on manual data entry and handoffs than on work that actually moves the needle.",
  },
  {
    icon: AlertTriangle,
    title: "Errors from manual processes",
    description:
      "Copy-paste workflows, missed steps, and human error cost you time, money, and customer trust.",
  },
  {
    icon: Users,
    title: "Can't scale without hiring",
    description:
      "Growth means more processes, more people, more overhead. There's a ceiling you can't break through manually.",
  },
];

// ── Solution ──

export const SOLUTION = {
  title: "There's a better way.",
  subtitle:
    "We design and deploy AI-powered workflows tailored to your operations. Not templates. Not generic tools. Custom automation built for how your team actually works.",
  differentiator: "Custom AI pipelines — not off-the-shelf templates.",
} as const;

// ── Services ──

export interface ServiceCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: ServiceCard[] = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description:
      "End-to-end automation pipelines built on n8n and custom orchestration. We connect your tools, add intelligence, and eliminate manual steps.",
  },
  {
    icon: Plug,
    title: "Custom AI Integrations",
    description:
      "Connect LLMs, vector databases, and AI models directly into your existing stack. Salesforce, Slack, HubSpot, databases — we integrate it all.",
  },
  {
    icon: Search,
    title: "Process Intelligence",
    description:
      "We audit your workflows, identify bottlenecks, and prioritize what to automate first for maximum ROI.",
  },
];

// ── How It Works ──

export interface Step {
  number: number;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: 1,
    title: "Discovery",
    description:
      "We audit your current workflows, map dependencies, and identify the highest-impact automation opportunities.",
  },
  {
    number: 2,
    title: "Design",
    description:
      "We architect the AI pipeline — choosing the right models, tools, and integrations for your specific use case.",
  },
  {
    number: 3,
    title: "Deploy",
    description:
      "We build, test, and ship your automation into production. Average time to first workflow live: 3 days.",
  },
  {
    number: 4,
    title: "Optimize",
    description:
      "We monitor performance, fine-tune models, and continuously improve your workflows as your needs evolve.",
  },
];

// ── Testimonials (placeholders — replace with real quotes) ──

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Agentic automated our entire onboarding pipeline in under a week. What used to take 4 hours per client now takes 12 minutes.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "Placeholder Corp",
  },
  {
    quote:
      "We evaluated three automation vendors. Agentic was the only one that understood our actual workflows instead of trying to sell us a platform.",
    author: "Marcus Johnson",
    role: "CTO",
    company: "Placeholder Inc",
  },
  {
    quote:
      "The ROI was immediate. We reduced manual processing errors by 94% in the first month.",
    author: "Elena Rodriguez",
    role: "Director of Engineering",
    company: "Placeholder Labs",
  },
];

// ── Use Cases ──

export interface UseCase {
  tab: string;
  description: string;
  tools: string[];
  result: string;
}

export const USE_CASES: UseCase[] = [
  {
    tab: "Sales Ops",
    description:
      "Automated lead scoring, CRM enrichment, and follow-up sequences powered by AI.",
    tools: ["Salesforce", "HubSpot", "OpenAI", "Slack"],
    result: "3x increase in qualified pipeline",
  },
  {
    tab: "Customer Support",
    description:
      "Intelligent ticket routing, auto-responses, and escalation workflows.",
    tools: ["Zendesk", "Intercom", "GPT-4", "Slack"],
    result: "67% reduction in first-response time",
  },
  {
    tab: "Finance",
    description:
      "Automated invoice processing, expense categorization, and reporting pipelines.",
    tools: ["QuickBooks", "Stripe", "Google Sheets", "n8n"],
    result: "12 hours saved per week",
  },
  {
    tab: "Engineering",
    description:
      "CI/CD monitoring, incident response automation, and code review triage.",
    tools: ["GitHub", "PagerDuty", "Slack", "Jira"],
    result: "40% faster incident resolution",
  },
];

// ── FAQ ──

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "What kinds of workflows can you automate?",
    answer:
      "Anything with repeatable steps, data movement between tools, or decision-making that follows rules. Common examples: onboarding flows, data enrichment, report generation, ticket routing, and approval processes.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most workflows go live within 3-5 business days. Complex multi-system integrations may take 1-2 weeks. We scope everything upfront so there are no surprises.",
  },
  {
    question: "Do you work with our existing tools?",
    answer:
      "Yes. We integrate with 200+ tools including Salesforce, HubSpot, Slack, Jira, Google Workspace, Notion, databases, and custom APIs. If it has an API, we can connect it.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "We offer project-based pricing for one-time builds and retainer packages for ongoing automation work. Book a demo and we'll scope your specific needs.",
  },
  {
    question: "Do we need AI expertise on our team?",
    answer:
      "No. We handle all the technical implementation. Your team just needs to explain how the workflow works today — we handle the rest.",
  },
  {
    question: "What happens after deployment?",
    answer:
      "We provide monitoring, maintenance, and optimization as part of our service. Workflows are never 'set and forget' — we continuously improve them based on real performance data.",
  },
];

// ── Final CTA ──

export const FINAL_CTA = {
  headline: "Ready to automate?",
  subheadline:
    "Book a 30-minute demo and see how AI can transform your operations.",
  cta: "Book a Demo",
  note: "No commitment. No sales pitch. Just a conversation.",
} as const;
```

---

## 12. Implementation Order

Build in this exact sequence. Each step must be complete before the next.

### Phase 1: Foundation

1. **Project scaffold** — Run setup commands from Section 2. Verify dev server starts.
2. **Tailwind v4 + tokens** — Configure `globals.css` with all color tokens from Section 3.1. Verify `bg-background text-foreground` works.
3. **Fonts** — Configure Inter + Instrument Serif in `layout.tsx`. Register CSS variables. Verify both render.
4. **Utils** — Create `lib/utils.ts` with `cn()`. Create `lib/motion.ts` with animation presets.
5. **Constants** — Create `lib/constants.ts` with all content from Section 11.
6. **Root layout** — Build `app/layout.tsx` with fonts, metadata (Section 8), base HTML.

### Phase 2: Layout Components

7. **SectionWrapper** — `components/layout/section-wrapper.tsx` with id, padding, container, variant.
8. **SectionHeading** — `components/shared/section-heading.tsx` with overline, title, subtitle.
9. **CTAButton** — `components/shared/cta-button.tsx` wrapping shadcn Button.
10. **IconBox** — `components/shared/icon-box.tsx`.
11. **MotionWrapper** — `components/shared/motion-wrapper.tsx` (`"use client"` wrapper for `motion.div`).
12. **Navbar** — Desktop navbar + mobile nav (Sheet).
13. **Footer** — Site footer.

### Phase 3: Sections (top to bottom)

14. **Hero** — Headline, subtitle, dual CTAs.
15. **Social Proof Bar** — Stats/logo bar.
16. **Problem** — 3-column pain points.
17. **Solution** — Differentiator section.
18. **Services** — 3-card grid.
19. **How It Works** — 4-step timeline.
20. **Results** — Animated stat cards.
21. **Testimonials** — 3 testimonial cards.
22. **Use Cases** — Tabbed section.
23. **FAQ** — Accordion.
24. **Final CTA** — Full-width gradient CTA.

### Phase 4: Assembly & Polish

25. **Assemble page** — Wire all sections into `app/page.tsx`.
26. **Scroll spy** — Intersection Observer for navbar active state.
27. **Mobile sticky CTA** — Fixed bottom bar.
28. **Animations** — `whileInView` on all sections.
29. **OG image** — `app/opengraph-image.tsx`.
30. **Sitemap** — `app/sitemap.ts`.

### Phase 5: QA

31. **Responsive** — Test all breakpoints per Section 9 table.
32. **Accessibility** — axe-core, contrast, focus states, keyboard nav.
33. **Performance** — Lighthouse > 90. Core Web Vitals pass.
34. **Final review** — Proofread copy, verify links, test CTA flow.

---

## 13. What NOT To Do

| Anti-Pattern | Why | Do Instead |
|-------------|-----|-----------|
| Hardcode text in components | Breaks single-source-of-truth | Read from `lib/constants.ts` |
| Use `any` type | Defeats strict TypeScript | Define proper interfaces |
| Import all Lucide icons | +200KB bundle bloat | Import individually |
| Use `@apply` in CSS | Fights utility-first Tailwind | Write classes in JSX |
| Add `dark:` variants | Dark-only site, no light mode | Use token colors directly |
| Use hex colors in classes | Breaks token system | Use semantic tokens |
| Animate everything | Visual noise, perf hit | Only section entrances + key interactions |
| Add a carousel library | Extra dep, bad UX | CSS scroll-snap or grid |
| Create separate pages | Single landing page | All sections in `app/page.tsx` |
| Use `useEffect` for scroll | Performance problems | Intersection Observer API |
| Skip `alt` on images | A11y violation | Always provide descriptive alt |
| Use `<div onClick>` | A11y violation | `<button>` for actions, `<a>` for navigation |
| Install a form library | No forms (CTA goes to Cal.com) | Link buttons |
| Multiple sticky elements | Layout jank | Only navbar + mobile CTA |
| Use default exports | Inconsistent imports | Named exports only |
| Add unused dependencies | Bundle bloat | Only install what's needed |

---

## 14. Deployment

### GitHub Repository

`https://github.com/erikatagentic/agentic-website.git`

### Vercel Configuration

- Framework preset: Next.js (auto-detected)
- Build command: `pnpm build`
- Install command: `pnpm install`
- Output directory: `.next`
- Node.js version: 20.x

### Environment Variables (set in Vercel dashboard)

```
NEXT_PUBLIC_SITE_URL=https://agentic.com
NEXT_PUBLIC_CAL_LINK=https://cal.com/agentic/demo
```

### Git Workflow

- `main` = production. Auto-deploys on push.
- Feature branches get preview deployments.
- Conventional commits:
  - `feat: add hero section`
  - `fix: correct CTA contrast ratio`
  - `style: adjust section spacing`
  - `chore: update dependencies`

### Pre-deployment Checklist

- [ ] `pnpm build` succeeds with zero errors
- [ ] `pnpm lint` passes
- [ ] No TypeScript errors
- [ ] All CTA links → correct Cal.com URL
- [ ] OG image renders correctly
- [ ] Lighthouse performance > 90
- [ ] All sections render on mobile (375px), tablet (768px), desktop (1440px)

---

## 15. Accessibility

### WCAG AA Compliance

**Color & Contrast:** See Section 3.1 contrast table. All ratios documented and verified.

**Focus States:**

All interactive elements must have:

```
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
```

Never use `outline-none` without an alternative. Tab order follows visual order (no `tabindex > 0`).

**Semantic HTML:**

- Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` landmarks.
- Each section: `aria-labelledby` pointing to its heading.
- Heading hierarchy: one `<h1>` (hero), `<h2>` for sections, `<h3>` for subsections.
- `<button>` for actions, `<a>` for navigation. Never `<div onClick>`.

**Screen Readers:**

- Decorative elements (gradient blobs): `aria-hidden="true"`.
- Icon-only buttons: `<span className="sr-only">Label</span>`.
- Animated counters: `aria-label` with the static final value.

**Reduced Motion:**

```typescript
// hooks/use-reduced-motion.ts
"use client";
import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}
```

**Keyboard Navigation:**

- Mobile menu (Sheet): trap focus when open, return focus on close.
- FAQ accordions: Enter/Space to toggle, arrow keys between items.
- All links and buttons reachable via Tab.

---

## 16. OG Images

### Dynamic OG Image

```typescript
// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const alt = "Agentic — AI Workflow Automation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #09090B 0%, #18181B 50%, #09090B 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Gradient accent orb */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Company name */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#A78BFA",
            letterSpacing: "0.05em",
            marginBottom: 24,
          }}
        >
          AGENTIC
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FAFAFA",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.1,
          }}
        >
          AI Workflow Automation
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#A1A1AA",
            marginTop: 24,
            textAlign: "center",
            maxWidth: 700,
          }}
        >
          Custom AI pipelines deployed in days, not months.
        </div>
      </div>
    ),
    { ...size }
  );
}
```

### Specs

- Size: 1200 x 630px
- Background: dark gradient matching site
- Accent: violet radial glow
- Runtime: Edge (no external deps)
- Fallback: static `public/og-default.png`

---

## 17. User Preferences

These apply across all of Erik's projects:

- **"Co-Founder"** not "Co-founder" (always capitalize both words)
- **Limit em dashes** — use sparingly, prefer periods or commas
- **Concise copy** — trim wordiness, every word must earn its place
- **Plans before execution** — present comprehensive plans before multi-step work
- **No invented data** — never fabricate testimonials, stats, or client names. Use only what's in `constants.ts`
- **Auto-update docs** — always update CLAUDE.md and MEMORY.md after making changes without being asked

---

## 18. Gotchas & Known Issues

- **robots.txt in dev**: Next.js metadata API `robots.ts` only works in production builds (`next build && next start`). The dev server returns 404 for `/robots.txt`. This is expected.
- **OG images in dev**: `opengraph-image.tsx` renders correctly in production but may show stale/cached versions locally. Test with `next build && next start`.
- **Framer Motion + SSR**: Components using `motion.*` must be in `"use client"` files. Server Components cannot use Framer Motion directly.
- **Tailwind v4 `@theme`**: Color tokens must be registered in the `@theme inline {}` block to be usable as Tailwind classes (e.g., `bg-surface`, `text-primary`).
- **WCAG AA dual-accent trap**: A single accent color cannot pass 4.5:1 contrast in both directions (text-on-dark AND white-on-accent) at dark background levels. Always use two tokens: one for text, one for button backgrounds.
- **next/image mixed formats**: Verify actual file types with `file` command. A `.png` extension may contain SVG or WebP data. Use correct extensions.

---

*End of CLAUDE.md*
