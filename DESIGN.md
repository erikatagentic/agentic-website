# Design System: The Receipt

**Stitch Project ID:** 8243999282306696793
**Direction:** Warm luxury meets transactional clarity

## 1. Visual Theme & Atmosphere

"The Digital Concierge's Ledger." This is not a cold SaaS interface. It borrows from the permanence and tactile prestige of a high-end transactional experience -- like getting the check at the best restaurant you've been to. Deep ink-blacks layered against warm, organic "paper" surfaces. Every line of data feels earned and intentional.

The signature element: a floating cream receipt card showing stats as monospace line items with a torn paper edge. Light-on-dark creates an instant pattern break that no other B2B site uses.

## 2. Color Palette & Roles

| Token | Hex | Role |
|-------|-----|------|
| Background | #09090B | Near-black base. The void. |
| Surface | #131313 | Primary content background. The desk. |
| Surface Raised | #1c1b1b | Card backgrounds, modules. The folders. |
| Surface Overlay | #201f1f | Elevated elements. |
| Foreground | #FAFAFA | Primary text (never pure white #fff). |
| Foreground Muted | #A1A1AA | Secondary text, descriptions. |
| Foreground Subtle | #71717A | Tertiary text, metadata. |
| Primary Text (amber) | #ffc880 | Text links, highlights, badges on dark bg. |
| Primary CTA (amber) | #f5a623 | CTA button backgrounds. "Ink stamp" accent. |
| Primary CTA Hover | #ffc04d | CTA hover state. |
| Primary Foreground | #452b00 | Dark text ON amber buttons. Not white. |
| Primary Muted | rgba(245,166,35,0.1) | Subtle amber tint backgrounds. |
| Secondary Accent (warm gold) | #ecbf85 | Secondary highlights. |
| Ring | #f5a623 | Focus ring color. |
| Receipt Paper | #faf8f0 | The cream receipt card background. |
| Receipt Text | #1b1c17 | Dark text on receipt paper. |
| Border | rgba(255,255,255,0.06) | Ghost borders -- felt, not seen. |
| Border Hover | rgba(82,69,52,0.3) | Warm-tinted hover borders. |
| Glow | rgba(245,166,35,0.15) | Amber glow for shadows. |
| Success | #34D399 | — |
| Warning | #FBBF24 | — |
| Error | #F87171 | — |

### Color Rules
- Use amber sparingly. It is a laser pointer, not a paint brush.
- Never use pure grey. Always warm-tinted neutrals.
- The receipt card (#faf8f0) is the only light element. Reserve it for "deliverable" moments.

## 3. Typography Rules

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display headlines | Instrument Serif | 400 normal | Large, warm, confident. NO italics ever. |
| Body / UI | Inter | 400-600 | Clean, objective, legible. |
| Receipt / labels | DM Mono | 400 | Monospace for stats, metadata, receipt items. Uppercase with +0.05em tracking. |

- Display headlines: tight letter-spacing (-0.02em) at large sizes.
- Body text uses foreground-muted for low-fatigue reading on dark.
- All DM Mono labels: uppercase, slight letter-spacing, evokes thermal printing.

## 4. Component Stylings

### Buttons
- **Primary:** Background #f5a623, text #452b00. 4px radius. Amber glow on hover: `box-shadow: 0 0 15px rgba(245,166,35,0.4)`.
- **Secondary:** Ghost style. Border at 15% opacity. Text in foreground.
- **Ghost:** Amber text, underline on hover.
- Hover transitions: 150ms max. Snappy and mechanical.

### Cards & Containers
- 4px border radius (subtle, not rounded).
- Background: surface-raised with ghost borders at 15% opacity.
- No solid 1px borders for sectioning. Use tonal shifts instead.
- Hover: shift background one tier darker, not shadow lift.

### The Receipt Card
- Background: #faf8f0 cream.
- 0px border radius (paper is not rounded).
- DM Mono monospace for all text.
- Dashed divider lines.
- Torn/zigzag bottom edge via CSS clip-path.
- Drop shadow: `box-shadow: 0 20px 50px rgba(0,0,0,0.5)`.

### Inputs
- Bottom border only, warm-tinted outline.
- Focus: border transitions to amber.

## 5. Layout Principles

- 4px border radius site-wide. Receipt card = 0px.
- Generous vertical whitespace between sections.
- Ghost borders (15% opacity) replace solid borders.
- Section separation through tonal layering, not divider lines.
- Subtle grain texture overlay (3% opacity SVG noise) on backgrounds.
- Amber accent used only for CTAs, active states, and key highlights.

## 6. Do's and Don'ts

### Do
- Embrace the void. Large dark areas make amber accents pop.
- Think "print." Design as if this will be printed on 100lb cardstock.
- Use DM Mono for anything that should feel "transactional" or "official."

### Don't
- No italics. Ever. Instrument Serif normal weight only.
- No pure greys. Always warm-tinted.
- No rounded corners above 4px (except pills for badges).
- No standard bubbly icons. Use thin-stroke linear icons (1-1.5px).

## 7. Signature Interaction: "The Thermal Reveal"

When new data appears (stats counting up, receipt items loading), it should slide up from a clip-path, mimicking a receipt emerging from a printer. Paired with a subtle amber fade-in to signal "finalized."
