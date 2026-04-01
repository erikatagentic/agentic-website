# Website Redesign Handoff Spec

> Read this file, then implement all changes in priority order. This covers content, messaging, and credibility changes. The existing CLAUDE.md has the design system and tech stack -- don't change those.

---

## Priority: CRITICAL (do these first)

### A. Remove fake testimonials

The three testimonials are fabricated:
- Sarah Chen / Meridian SaaS
- Marcus Webb / Trellus Health
- Elena Vasquez / Canopy Financial

None of these people or companies exist. If any prospect Googles them, trust is gone.

**Replace the entire testimonials section with outcome-based social proof:**

"10,000+ outbound campaigns built. 47 industries. 4x average reply rate lift."

No names. No fake companies. Let the numbers speak. Use the existing card/badge component style to display these as a simple stats row.

If Erik later provides real testimonials, they can be added back. For now, remove ALL fabricated content.

### B. Fix the metrics banner

**Current:** "200+ Campaigns Deployed, 35+ GTM Teams Served, 4.2x Avg Reply Rate Lift, 12 Days to First Meetings"

**Change to just 2 metrics:**
- "4x Avg Reply Rate Lift"
- "12 Days to First Meetings"

Drop "200+ Campaigns" and "35+ GTM Teams." These volume claims are hard to verify for a newer brand. Outcome metrics are what prospects care about.

---

## Priority: HIGH (positioning and messaging)

### C. Rewrite the hero section

**Current headline:** "Turn buying signals into booked meetings"

**New headline:** "Your SDRs research 15 minutes per prospect. We built a system that does it in 15 seconds."

**New subhead:** "Clay-powered outbound that scrapes buying signals, enriches every lead, and writes personalized sequences. Your pipeline fills while your team focuses on closing."

Keep the same layout and animation. Just swap the copy.

### D. Rewrite the "problem" section

Replace the current three problems with these:

**Problem 1 headline:** "Your team sends 500 emails a week. 4 people reply."
**Problem 1 body:** "Generic sequences with {FIRST_NAME} and {COMPANY} variables aren't personalization. Your prospects get 47 of these a day. They delete yours in 2 seconds."

**Problem 2 headline:** "A prospect just raised $12M. You found out 3 weeks later."
**Problem 2 body:** "Funding rounds, executive hires, tech stack changes, office expansions. These are buying signals. By the time your team manually discovers them, a competitor already booked the meeting."

**Problem 3 headline:** "Real personalization takes 15 minutes per prospect. You have 500 prospects."
**Problem 3 body:** "Your SDRs choose between sending 50 personalized emails or 500 generic ones. Clay makes it so they don't have to choose. Every prospect gets researched in seconds."

### E. Add "Website Intelligence" as 5th signal type

The signal campaign section currently has 4 tabs: Funding, Job Change, Hiring, Tech Stack.

Add a 5th tab: **Website Intelligence**

**Tab content:**
"We scrape your prospect's website, extract who they serve, how they position themselves, and what their outbound angle should be. Every first message references something specific about their business. Not their name. Not their company. Their actual positioning."

**Result line:** "3x reply rates vs. standard personalization"

**Integration logos for this tab:** Firecrawl, Clay, Claude AI, Smartlead

This is Agentic's unique differentiator. No other Clay agency does website-level research as an outbound signal.

---

## Priority: MEDIUM (credibility and conversion)

### F. Add an "About" section

Add a new section between the signal campaigns and FAQ. Keep it minimal.

**Content:**
- Erik's headshot (use placeholder image for now, Erik will provide the real one)
- Name: Erik Hernal
- Title: Founder
- Bio: "Built outbound systems for 40+ B2B companies across 47 industries. I don't run your campaigns. I build the infrastructure that makes your team's outreach 4x more effective."
- LinkedIn link: https://www.linkedin.com/in/erikhernal/

One person. No fake team grid.

### G. Add a mini case study

Replace or supplement the testimonials area with one anonymized case study:

```
"B2B SaaS Company, 80 employees"

Before: 0.8% reply rate, 2 meetings/month from outbound
Signal campaign: Funding round detection + personalized outreach
After: 4.7% reply rate, 14 meetings/month
Timeline: Live in 10 days
```

Use a simple card layout. No named company. The specificity of the numbers is the credibility.

### H. Add pricing signals to FAQ

The FAQ has "What does pricing look like?" -- update the answer:

"Signal campaign builds start at $3,000. Monthly management starts at $1,500/month. Most clients run 2-3 campaigns at $4,000-6,000/month. No long-term contracts."

### I. Fix the CTA flow

**Current:** Both "Book a Demo" and "See How It Works" go to the TidyCal booking link.

**Fix:**
- "Book a Demo" -> Keep the TidyCal link (tidycal.com/heyagentic/30-minutes)
- "See How It Works" -> Change to scroll anchor: `#how-it-works` (the process section)

---

## Anti-AI writing rules (apply to ALL new copy)

Every word on this site must follow these rules:

- No em dashes anywhere. Use commas, periods, or "and"/"but"
- Use contractions: "don't" not "do not", "we'll" not "we will", "it's" not "it is"
- **Banned words (zero tolerance):** leverage, robust, seamless, cutting-edge, revolutionize, streamline, harness, supercharge, comprehensive, scalable, ecosystem, optimize, synergize, holistic, paradigm, actionable, facilitate, utilize, unprecedented, pivotal
- No triplet patterns (groups of 3 items). Use 2 or 4 instead.
- No "It's not about X, it's about Y" structures
- Sentence length variation: mix short punchy lines (3-5 words) with longer ones (15-20 words)
- At least 1 specific number per section (not round numbers)
- Opinions without hedging: "This works" not "This could potentially work"
- No exclamation marks. Zero.

---

## Design notes

- Keep the dark theme (#09090B). Don't change the color system.
- Keep the 4-step process section structure and FAQ section as-is (just update copy per above)
- Add tool integration logos in a subtle banner: Clay, HubSpot, Salesforce, Smartlead, Instantly, Firecrawl
- The "Signal Detected -> Enriched in Clay -> Personalized Outreach -> Meeting Booked" flow should have a visual diagram or animated steps, not just text labels

---

## Verification checklist

After implementing all changes:

1. Google every testimonial name + company still on the site to verify they're real people at real companies
2. Confirm "See How It Works" scrolls to #how-it-works (not to TidyCal)
3. Confirm "Book a Demo" still opens TidyCal correctly
4. Read all new copy out loud. If it sounds like AI wrote it, rewrite it.
5. Mobile responsive check on all new/changed sections
6. Check that the 5th signal tab (Website Intelligence) renders correctly in the tab component
