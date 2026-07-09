# Sitemap & Routing Architecture: Solve

## 1. Full Sitemap & Suggested URLs

**Core Hubs**
- `/` (Homepage)
- `/fix` (Problem Triage Hub)
  - `/fix/water-leaks`
  - `/fix/pumps-power`
  - `/fix/fence-faults`
  - `/fix/freeze-prep`
  - `/fix/remote-checks`
- `/calculators` (The Math Hub)
  - `/calculators/water-leak-cost`
  - `/calculators/manual-check-labor`
  - `/calculators/pump-burnout-risk`
  - `/calculators/fence-fault-cost`
  - `/calculators/fix-vs-ignore`
- `/kits` (The Hardware Hub)
  - `/kits/flowwatch-snap-on`
  - `/kits/pulseguard-monitor`
  - `/kits/gatelog-sensor`
- `/favorites` (My Shed - Local Storage Saved Items)

**Legal & Utility (Footer)**
- `/about`
- `/contact`
- `/privacy-policy`
- `/terms-of-use`
- `/disclaimer`

---

## 2. Route-by-Route Purpose

- **`/` (Home):** Introduces the entire workflow. Routes users immediately to their preferred starting point (Problem, Math, or Fix).
- **`/fix/*` (Category Pages):** Aggregates everything related to a specific problem. For example, `/fix/water-leaks` explains the problem, links to the Water Leak Calculator, and recommends the FlowWatch Kit.
- **`/calculators/*` (Tool Pages):** Pure utility. The user inputs their data, gets a bold financial/risk estimate, and is presented with a CTA to buy the kit that solves it.
- **`/kits/*` (Product Detail Pages):** Hardware sales pages. Focuses on specs, install simplicity, what's in the box, and pricing.
- **`/favorites`:** A quick-access scratchpad storing the user's frequently used calculators or saved kits using local storage.

---

## 3. Internal Linking Model (The Conversion Path)

The primary conversion loop follows a strict "Identify → Quantify → Solve" path:

1. **Identify (The Problem):** A user lands on `/fix/water-leaks`. The page validates their pain (e.g., "Stop paying for water you aren't using") and pushes them to *Quantify* it. 
   - *Link:* "Run the numbers on your water loss →" (points to `/calculators/water-leak-cost`)
2. **Quantify (The Math):** The user uses the calculator. The output is a painful, undeniable number (e.g., "You are losing $4,200/year"). Right below this number is the *Solve* CTA.
   - *Link:* "Stop the leak with a FlowWatch kit →" (points to `/kits/flowwatch-snap-on`)
3. **Solve (The Hardware):** The user lands on the kit page, fully educated on the cost of their problem, making the hardware price an easy ROI decision.
   - *Action:* Purchase / Add to Cart.

**Secondary Cross-linking:**
- Kit pages link back to calculators: *"Not sure if you need this? Calculate your leak cost first."*
- Calculators link to related categories: *"Looking for pump diagnostics instead? Go to Pumps & Power."*

---

## 4. MVP Launch Pages vs. Later Phases

**MVP (Must Haves for Launch):**
- `/` (Home)
- `/fix` (Triage Hub)
- `/fix/water-leaks`
- `/fix/pumps-power`
- `/fix/fence-faults`
- `/calculators` (Hub)
- `/calculators/water-leak-cost`
- `/calculators/pump-burnout-risk`
- `/calculators/fence-fault-cost`
- `/kits` (Hub)
- `/kits/flowwatch-snap-on`
- `/kits/pulseguard-monitor`

**Phase 2 (Fast Follows):**
- `/fix/freeze-prep`
- `/fix/remote-checks`
- `/calculators/manual-check-labor`
- `/calculators/fix-vs-ignore`
- `/kits/gatelog-sensor`
- `/favorites`

---

## 5. SEO Indexability

**Indexable (Open to Search Engines):**
- `/` (Home)
- `/fix/*` (Highly optimized for intent-based long-tail keywords like "how to find farm water leaks" or "troubleshoot short-cycling well pump").
- `/calculators/*` (Targeting utility search intent like "water leak cost calculator" or "electric fence fault cost").
- `/kits/*` (Product pages).

**No-Index (Hide from Search Engines):**
- `/favorites` (Personalized local state, no SEO value).
- Legal pages (`/privacy-policy`, `/terms-of-use`, `/disclaimer`).

---

## 6. Conversion Hubs

**Primary Conversion Hubs:**
- **The `/calculators/*` result panels:** This is the highest leverage point. The user has just quantified their pain. The CTA here converts at the highest rate.
- **The `/kits/*` detail pages:** The final checkout/conversion point for hardware.

**Traffic Hubs (Not Conversion Hubs):**
- `/fix/*` pages are *Traffic Hubs*. Their job is to capture SEO traffic and immediately route the user down the funnel into a Calculator, not to sell a kit directly.
- The Homepage is a *Routing Hub*. Its only job is to get the user off the homepage and into a specific Fix, Calculator, or Kit.

---

## 7. Breadcrumb Logic

Keep breadcrumbs functional and literal. They should appear on all subpages to allow easy upward navigation.

- On a Calculator: `Solve > Calculators > Water Leak Cost`
- On a Kit: `Solve > Kits > FlowWatch Snap-On`
- On a Category: `Solve > Fix > Water & Leaks`
