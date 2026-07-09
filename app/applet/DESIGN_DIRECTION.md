# Design Direction & UI Guidelines: Solve

## 1. Art Direction Summary
Solve is a digital workbench, not a SaaS platform. The visual language should evoke the feeling of a heavy-duty shop clipboard, a laminated field checklist, or a weatherproof equipment manual. It is built for utility, speed, and readability in harsh environments (glaring sun, dirty hands, limited attention). Every design choice must prioritize function over decoration. We reject "digital transformation" tropes in favor of mechanical honesty, high contrast, and tactile, analog-inspired interactions.

## 2. Color Palette Suggestion (Earthy & Restrained)
We use a muted, high-contrast palette. Only one accent color is permitted to indicate action or critical alerts.

**Light Mode (Default & Preferred):**
- **Backgrounds:** Stone 50/100 (`#fafaf9` / `#f5f5f4`) - Looks like heavy-duty paper or concrete.
- **Text (Primary):** Stone 900 (`#1c1917`) - Maximum legibility.
- **Text (Secondary):** Stone 600 (`#57534e`) - For sub-labels and supporting copy.
- **Borders & Dividers:** Stone 800 (`#292524`) - Harsh, mechanical dividing lines.
- **Accent/Action:** Orange 600 (`#ea580c`) - Used strictly for primary CTAs, critical alerts, and active states. Reminiscent of safety orange or heavy machinery.

**Dark Mode (If required for night-time field use):**
- **Backgrounds:** Stone 950 (`#0c0a09`) / Stone 900 (`#1c1917`)
- **Text:** Stone 100 (`#f5f5f4`)
- **Borders:** Stone 700 (`#44403c`)
- **Accent:** Orange 500 (`#f97316`)

## 3. Font Pairing Suggestion
Typography must be durable, readable, and slightly industrial.
- **Display & Headings:** `Zilla Slab` - Provides a sturdy, mechanical, and slightly typewriter-esque feel without being a novelty font.
- **Body & UI Elements:** `Inter` - Highly legible, neutral workhorse sans-serif for paragraphs and standard UI.
- **Labels, Data & Technical:** `JetBrains Mono` - Used exclusively for form labels, tags, data outputs, and calculator inputs to mimic terminal or parts-catalog readouts.

## 4. Spacing, Radius, and Shadow Guidance
- **Spacing:** Use a strict 8px/16px/32px baseline grid. Padding should be generous to ensure readability and tap-friendliness.
- **Border Radius:** `rounded-sm` (2px) or `rounded-none` (0px). NO large pill-shaped buttons or over-rounded cards. Everything should feel blocky and manufactured.
- **Shadows & Depth:** Do not use soft, blurred drop shadows. Use hard, solid offset shadows to create a tactile, "stamped" physical feel (e.g., `shadow-[4px_4px_0px_#292524]`).
- **Borders:** Use thick borders (`border-2` or `border-4`) for structural elements like cards and buttons to make them feel indestructible.

## 5. Component Style Notes
- **Navigation:** Top nav should be a thick, horizontal bar separated from the body by a heavy border. Links should be uppercase, monospace, and left-aligned or cleanly distributed.
- **Cards:** Heavy `stone-800` borders, solid white/stone backgrounds, hard offset shadows. Internal content should be left-aligned with clear typographic hierarchy.
- **Buttons:** Blocky and substantial. Primary buttons use the Orange accent with a dark border and hard shadow. Hover states should translate the button down and right (mimicking a physical click) while removing the shadow.
- **Inputs:** High-contrast borders. Backgrounds slightly inset or stark white. Labels must be uppercase, monospace, and sit outside the input field (no floating labels).
- **Results Panels (Calculators):** Should look like a printed receipt or a stamped diagnostic readout. Use massive typography for the final number. Place it inside a thick-bordered container, perhaps with a subtle striped or textured background pattern to differentiate it from input areas.

## 6. Homepage Layout Principles
- **Left-Aligned by Default:** Text, cards, and headers should anchor to the left. This creates a predictable reading line mimicking a technical manual. Avoid centering text except for specific callouts or footers.
- **Modular Sections:** Each section (Fix, Calculators, Kits) must be separated by thick horizontal divider lines or stark background color changes (e.g., White to Stone 200) to clearly delineate different tools.
- **No Vague Imagery:** Use literal, mechanical line icons or high-contrast, cutout product photography. No abstract illustrations.

## 7. Mobile Behavior Notes
- **Touch Targets:** All clickable elements (buttons, card toggles, inputs) MUST be at least 48x48px. Operators will be using this with dirty hands or gloves.
- **Stacking:** Complex desktop grids (like the Bento layout for the "Fix" section) must collapse into a clean, vertical single-column stack on mobile.
- **Sticky Actions:** For calculators, keep the "Calculate" or "See Fix" CTA sticky at the bottom of the viewport so the user doesn't have to hunt for it after scrolling through inputs.

## 8. Accessibility and Readability Rules
- **Contrast is King:** Every text element must pass WCAG AAA contrast ratios. When in doubt, use Stone 900 on White.
- **No "Placeholder as Label":** Form inputs must always have permanent, visible labels above them. Placeholders are for examples only.
- **State Changes:** Do not rely on color alone to indicate state. Active states should use physical translation (depressing), thicker borders, or explicit text changes (e.g., "SELECTED") to ensure visibility in glaring sunlight.
- **Plain Language:** Write like a foreman talking to a crew. Use short sentences, active voice, and avoid jargon unless it's the exact technical term required (e.g., use "GPM", don't use "flow velocity metric").
