# Website Redesign Handoff: Micro-Offer GTM Engineering Practice

> This is a COMPLETE rewrite of the site direction. Ignore any previous HANDOFF.md instructions. Read this file, then implement all changes in priority order. The existing CLAUDE.md has the design system and tech stack -- don't change those.

## The Pivot

Agentic is NOT an agency. It's a freelance GTM engineering practice that sells fixed-scope, fixed-price projects. Think of it like a restaurant menu: pick what you need, pay once, get it delivered in 3-10 days, own it forever.

The entire site needs to reflect this. No "agency" language. No "retainer" language. No "we run your campaigns." Instead: "Pick a project. Get it built. Own the system."

---

## Priority: CRITICAL

### A. Remove fake testimonials

The three testimonials are fabricated. Remove them entirely:
- Sarah Chen / Meridian SaaS
- Marcus Webb / Trellus Health
- Elena Vasquez / Canopy Financial

Replace with a single anonymized case study card:

```
"B2B SaaS Company, 80 employees"
Before: 0.8% reply rate, 2 meetings/month
After: 4.7% reply rate, 14 meetings/month
Timeline: System built in 10 days
```

### B. Fix the metrics banner

Replace the current 4 metrics with these 3:

- "10,000+ campaigns of data powering every build"
- "4x average reply rate lift"
- "3-10 days from kickoff to live system"

Drop "200+ Campaigns Deployed" and "35+ GTM Teams Served."

---

## Priority: HIGH (complete repositioning)

### C. Rewrite the hero section

**Current:** "Turn buying signals into booked meetings" (agency positioning)

**New:**

```
Eyebrow: GTM Engineering for B2B Teams
Headline: Your outbound infrastructure. Built in days, not months.
Subhead: Fixed-scope projects that build enrichment waterfalls, signal detection, and personalized outbound systems. Pick a project, get it delivered, own the system.
Primary CTA: "See the Menu" -> scrolls to #pricing
Secondary CTA: "Book a Call" -> TidyCal link
```

### D. Rewrite the "problem" section

Replace the current 3 problems. Keep 3 cards, new copy:

**Card 1 headline:** "A full-time GTM engineer costs $135K/year."
**Card 1 body:** "And takes 3 months to ramp. You don't need a full-time hire. You need the specific system built. Enrichment waterfall, signal detection, campaign infrastructure. Scoped, delivered, done."

**Card 2 headline:** "Agency retainers lock you in for $4-8K/month."
**Card 2 body:** "You pay whether they're building or coasting. And when you leave, you start over. With a project, you pay once and own the system forever. No dependency."

**Card 3 headline:** "Your SDRs spend 15 minutes researching each prospect."
**Card 3 body:** "That's 125 hours a month of research for 500 prospects. An enrichment waterfall does it in seconds. A signal detection workflow catches buying intent your team will never see manually."

### E. Replace "Our Services" with a Pricing Menu

This is the most important section on the site. Remove the current 3 generic service cards. Replace with a tiered pricing menu.

**Section headline:** "Pick what you need. Get it built."
**Section subhead:** "Fixed scope. Fixed price. Delivered in days. You own everything."

**Tier 1: Data Layer**

Display as 3 cards in a row:

Card 1:
```
ICP Enrichment Build
$750
4-provider enrichment waterfall with dedup and dual email verification. You provide the list, we return it enriched with verified emails.
Delivered in 3 days.
CTA: "Book a Call"
```

Card 2:
```
Signal Detection Setup
$1,500
n8n workflow monitoring 3 buying signals (hiring, funding, job changes) for your ICP. Alerts pushed to Slack or your CRM.
Delivered in 5 days.
CTA: "Book a Call"
```

Card 3:
```
Full Data Stack
$2,000
Enrichment + signal detection + lead scoring. Ready to feed into any sequencer.
Delivered in 7 days.
CTA: "Book a Call"
```

**Tier 2: Campaign Infrastructure**

Display as 3 cards in a row:

Card 1:
```
Outbound Campaign Build
$2,000
500 enriched prospects, 4-touch LinkedIn sequence, 3-email sequence. Loaded into HeyReach + Smartlead. Ready to launch.
Delivered in 7 days.
CTA: "Book a Call"
```

Card 2:
```
Website Intelligence Pipeline
$2,500
AI scrapes prospect websites, extracts positioning, and generates personalized first messages. Plugs into your existing sequencer.
Delivered in 5 days.
CTA: "Book a Call"
```

Card 3:
```
Full GTM Stack Build
$4,000
Data layer + campaign infrastructure + CRM integration. The complete outbound machine.
Delivered in 10 days.
CTA: "Book a Call"
```

**Tier 3: Ongoing** (display below as a simpler row, less prominent)

```
Need ongoing support? Month-to-month, cancel anytime.

Signal Monitoring: $750/mo -- We maintain your workflows and tune scoring.
List Refresh: $1,000/mo -- 500 new enriched prospects delivered monthly.
Fractional GTM Engineer: $2,500/mo -- 10 hours/month. Slack access. Use as-needed.
```

All "Book a Call" CTAs -> tidycal.com/heyagentic/30-minutes

### F. Rewrite "How It Works" (keep 4-step structure, new copy)

**Step 1: Pick a Project**
"Browse the menu. Choose the system you need built. Not sure? Book a 30-minute call and we'll figure it out together."

**Step 2: Kickoff (Day 1)**
"You answer a few questions about your ICP, tools, and goals. We start building the same day. No multi-week discovery phase."

**Step 3: Build (Days 2-7)**
"We configure enrichment waterfalls, signal detection, campaign copy, and CRM integrations. You get progress updates in Slack. No surprises."

**Step 4: Handoff**
"You own the system. We walk you through how it works, hand over all credentials and documentation. If something breaks in the first 14 days, we fix it free."

### G. Add an "About" section

After the pricing menu, before the FAQ.

```
Built by Erik Hernal

I've built outbound systems for 40+ B2B companies across 47 industries. 10,000+ campaigns. The systems I sell are the same ones I run in production every day.

I'm not a workflow builder who watched a Clay tutorial. I've been in the trenches of B2B outbound for years. Every project I deliver is battle-tested.

[LinkedIn: linkedin.com/in/erikhernal]
```

Use Erik's headshot (placeholder for now, he'll provide the real one). One person. No fake team.

### H. Update the FAQ

Replace the current FAQ answers. Keep the accordion component.

**"What does pricing look like?"**
"Projects range from $750 to $4,000 depending on scope. Everything is fixed-price, no hourly billing. You know exactly what you're paying before we start. Ongoing support starts at $750/month, month-to-month."

**"How is this different from hiring a GTM engineer?"**
"A full-time GTM engineer costs $135K/year and takes 3 months to ramp. A project with us costs $750-4,000 and is delivered in 3-10 days. You get the specific system built without the commitment of a hire."

**"How is this different from a Clay agency?"**
"Most Clay agencies charge $4-8K/month retainers with 3-month minimums. We charge once per project. You own the system. No retainer, no dependency, no lock-in."

**"What tools do you work with?"**
"Clay, n8n, HubSpot, Salesforce, HeyReach, Smartlead, Instantly, LeadMagic, Findymail, Firecrawl, and Claude AI. If you use it for outbound, we probably integrate with it."

**"What if I need changes after delivery?"**
"Every project includes 14 days of free bug fixes after handoff. If you want ongoing optimization, our monthly plans start at $750/month."

**"Do I need my own Clay account?"**
"Depends on the project. For enrichment and signal detection, yes. We build inside your workspace so you own everything. For campaign builds, we can use our infrastructure or yours."

**"What results should I expect?"**
"That depends on your ICP, your offer, and your market. What we guarantee: the system will be built correctly, the data will be clean, and the infrastructure will work. We don't guarantee specific reply rates because too many variables are outside our control. But our average client sees a 4x lift in reply rates after implementing signal-based outbound."

### I. Rewrite the final CTA section

**Current:** "Your competitors are already using signals."

**New:**
```
Headline: "Your outbound infrastructure shouldn't take 3 months to build."
Subhead: "Pick a project. We'll have it live in days."
Primary CTA: "See the Menu" -> scroll to #pricing
Secondary CTA: "Book a Call" -> TidyCal
```

---

## Design Notes

- Keep the dark theme (#09090B). Don't change.
- The pricing menu section is the centerpiece. Make it visually prominent. Cards with clear pricing, scope, and timeline.
- Use subtle tier labels: "Data Layer" and "Campaign Infrastructure" as section dividers within the pricing area.
- Keep tool logos banner (Clay, HubSpot, Salesforce, Smartlead, Instantly, HeyReach, n8n, Firecrawl).
- Remove any remaining "agency" language anywhere on the site. Replace with "practice" or just "Agentic."
- The signal campaign tabs section (Funding, Job Change, Hiring, Tech Stack) can stay but move it BELOW the pricing menu. It's supporting content, not the main sell.

---

## Anti-AI Writing Rules (ALL copy)

- No em dashes. Use commas, periods, or "and"/"but"
- Contractions always: "don't" not "do not"
- Banned words: leverage, robust, seamless, cutting-edge, revolutionize, streamline, harness, supercharge, comprehensive, scalable, ecosystem, optimize, synergize, holistic, paradigm, actionable, facilitate, utilize, unprecedented, pivotal
- No triplet patterns. Use 2 or 4 items.
- Sentence length variation: mix short and long
- At least 1 specific number per section (not round numbers)
- Opinions without hedging
- No exclamation marks

---

## Verification Checklist

1. Zero fake testimonials remaining anywhere on the site
2. No "agency" or "retainer" language anywhere
3. All "Book a Call" CTAs point to tidycal.com/heyagentic/30-minutes
4. "See the Menu" scrolls to the pricing section
5. Pricing cards show correct amounts ($750, $1,500, $2,000, $2,000, $2,500, $4,000)
6. Mobile responsive check on the pricing card grid
7. Read all copy out loud. If it sounds like AI, rewrite it.
8. Meta title: "Agentic | GTM Engineering for B2B Teams"
9. Meta description: "Fixed-scope projects that build enrichment waterfalls, signal detection, and outbound campaign infrastructure. $750-4,000. Delivered in days."
