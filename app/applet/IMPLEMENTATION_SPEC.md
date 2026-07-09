# Implementation Spec: Solve

## 1. Full Component Inventory

### Global Components
- **`Header`**: Top navigation, sticky or static, containing Logo and main links (`Fix`, `Calculators`, `Kits`, `Favorites`).
- **`Footer`**: Bottom navigation, containing legal links, about, contact, and network links.
- **`SectionContainer`**: A reusable wrapper for homepage sections to ensure consistent padding, max-width, and left-alignment.

### Reusable UI Elements (The Design System)
- **`Button`**: 
  - `Primary`: Orange background, dark border, hard shadow, translates down/right on click.
  - `Secondary`: Stone background, dark border, hard shadow.
  - `Ghost/Text`: Underlined, bold, for subtle links.
- **`Card`**: 
  - Base Card: Thick border, white background, hard offset shadow.
  - Interactive Card: Adds hover state (lift) and active state (depress).
- **`Badge/Tag`**: Monospaced, uppercase, thick border (used for kit specs or category tags).
- **`Heading`**: Zilla Slab, various sizes (H1-H6).
- **`Label`**: JetBrains Mono, uppercase, small, high contrast.
- **`DisclaimerBox`**: Yellow-tinted, heavy-bordered box for legal warnings.

### Homepage Specific Components
- **`HeroSection`**: Eyebrow, H1, Subhead, two CTAs.
- **`CategoryCard`** (Fix Section): Icon, Title, Problem Statement, Solution Statement, CTA.
- **`CalculatorCard`** (Calculators Section): Title, Description, Output Metric, CTA.
- **`KitCard`** (Kits Section): Spec Tags, Title, Subtype, Description, "Why this helps" box, CTA.
- **`TrustSection`**: High contrast (dark background, light text) manifesto block.

## 2. Page Layout Spec

### Homepage Structure (`/src/pages/Home.tsx` or similar)
```html
<Layout>
  <Header />
  <main>
    <HeroSection />
    <Divider />
    <FixCategoriesSection />
    <Divider />
    <CalculatorsSection />
    <Divider />
    <KitsSection />
    <Divider />
    <TrustSection />
    <DisclaimerSection />
  </main>
  <Footer />
</Layout>
```

### Layout Rules
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Alignment**: Everything defaults to left-aligned to maintain the "manual" or "clipboard" aesthetic.
- **Dividers**: Sections are separated by thick horizontal lines (`border-t-4 border-stone-800`) and generous whitespace (`py-16` or `py-24`).

## 3. Reusable Component Definitions

### The "Tactile Card" (`Card.tsx`)
```tsx
// Tailwind classes for the signature Solve card
const baseCardClasses = "border-4 border-stone-800 bg-white shadow-[8px_8px_0px_#292524] p-6 flex flex-col";
const interactiveCardClasses = "hover:-translate-y-1 hover:shadow-[12px_12px_0px_#292524] active:translate-x-[4px] active:translate-y-[4px] active:shadow-[0px_0px_0px_#292524] transition-all cursor-pointer";
```

### The "Rugged Button" (`Button.tsx`)
```tsx
// Tailwind classes for primary button
const primaryBtn = "bg-orange-600 text-white font-bold px-6 py-3 border-4 border-stone-900 shadow-[4px_4px_0px_#292524] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#292524] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all uppercase tracking-wider font-mono text-sm";
```

## 4. Content Model for Cards and Kits

### Category Card (Fix)
- `id`: string
- `title`: string
- `problemStatement`: string
- `solutionStatement`: string
- `ctaText`: string
- `icon`: ReactNode (Lucide icon)
- `href`: string (e.g., `/fix/water-leaks`)

### Calculator Card
- `id`: string
- `title`: string
- `description`: string
- `outputMetric`: string
- `ctaText`: string
- `href`: string (e.g., `/calculators/water-leak-cost`)

### Kit Card
- `id`: string
- `name`: string
- `subtype`: string
- `description`: string
- `whyItHelps`: string
- `tags`: string[] (e.g., `["10-YEAR BATTERY", "CELLULAR"]`)
- `ctaText`: string
- `href`: string (e.g., `/kits/flowwatch-snap-on`)

## 5. Responsive Behavior

- **Mobile First**: All grids default to `grid-cols-1` (vertical stack).
- **Tablet (`md:`)**: `grid-cols-2` for Calculators and Kits.
- **Desktop (`lg:`)**: `grid-cols-3` for Calculators and Kits.
- **Fix Section (Bento Grid)**: On desktop, use `lg:grid-cols-3`, making top priority items span 2 columns (`lg:col-span-2`) if an asymmetrical bento grid is desired, otherwise standard uniform grid.
- **Touch Targets**: Minimum `48px` height for all buttons and interactive elements to accommodate gloved/dirty hands.
- **Typography Scaling**: 
  - Mobile: H1 (`text-4xl`), H2 (`text-3xl`), Body (`text-base`)
  - Desktop: H1 (`text-6xl`), H2 (`text-4xl`), Body (`text-lg`)

## 6. Accessibility Requirements

- **Contrast**: Strict adherence to WCAG AAA. Stone 900 on White/Stone 50 passes easily.
- **Focus States**: Clearly visible focus rings for keyboard navigation. Do not use default faint blue. Use `focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-offset-2`.
- **Aria Labels**: Interactive cards functioning as links must have `aria-label` describing the destination if the CTA text is not entirely descriptive on its own.
- **Semantic HTML**: Proper use of `<main>`, `<section>`, `<header>`, `<footer>`, `<nav>`. Ensure only ONE `<h1>` per page.
- **No Reliance on Color**: Hover states rely on physical translation and shadow changes, not just color shifts, aiding colorblind users and glaring sunlight readability.

## 7. QA Checklist

- [ ] Check all text against Stone 50/100 background for contrast.
- [ ] Verify hover and active (click) states on all buttons and cards.
- [ ] Test mobile layout: Are cards stacked? Are buttons at least 48px tall?
- [ ] Check keyboard navigation (Tab through all links and buttons, verify focus rings).
- [ ] Verify HTML structure (One H1, logical H2/H3 nesting).
- [ ] Ensure no "lorem ipsum" or placeholder copy exists.
- [ ] Check that links route to correct placeholder pages (even if they just render a temporary "Coming Soon" view).

## 8. Launch Checklist

- [ ] Verify SEO metadata (Title tags, Meta descriptions for homepage).
- [ ] Ensure 404 page exists and matches brand tone (e.g., "Page Not Found. Let's get you back to the tools.").
- [ ] Test form/calculator inputs for mobile keyboard friendliness (e.g., `type="number"` or `inputMode="decimal"` for numeric inputs).
- [ ] Run Lighthouse audit for Performance, Accessibility, Best Practices, and SEO.
- [ ] Deploy to production and verify custom domain routing.
