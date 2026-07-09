# Fix Section Design & UX Copy

## Section Overview
**Purpose:** Help a rural operator start from the real-world problem, not a generic tool list. This section acts as a triage desk, routing users to the right diagnostic calculator or hardware kit based on immediate pain points.

- **Section Heading:** What's broken today?
- **Section Intro Text:** Skip the guesswork. Tell us what's failing, and we'll hand you the exact tool to measure the damage and fix it fast.

## Category Cards (In order of priority/frequency)

### 1. Water & Leaks
- **Card Title:** Water Lines & Tanks
- **1-Line Problem Statement:** You're losing pressure, draining tanks, or paying for water you aren't using.
- **1-Line "What you can do here":** Calculate exact gallon loss and find the right snap-on leak monitor.
- **Primary CTA Text:** Stop Water Loss →
- **Suggested Icon Metaphor:** A heavy water drop or a dripping pipe joint.

### 2. Pumps & Power
- **Card Title:** Well Pumps & Motors
- **1-Line Problem Statement:** The pump is short-cycling, pulling too much power, or making a new noise.
- **1-Line "What you can do here":** Log the symptoms to gauge failure risk before the motor burns out entirely.
- **Primary CTA Text:** Diagnose Pump Trouble →
- **Suggested Icon Metaphor:** A lightning bolt or an electric motor silhouette.

### 3. Fence Faults
- **Card Title:** Electric Perimeter
- **1-Line Problem Statement:** The voltage is dropping, and livestock are testing the weak spots.
- **1-Line "What you can do here":** Track fault locations and map out the fastest repair route.
- **Primary CTA Text:** Track Fence Faults →
- **Suggested Icon Metaphor:** A jagged line or a high-voltage warning symbol.

### 4. Freeze Prep
- **Card Title:** Winter & Freeze Risk
- **1-Line Problem Statement:** The temperature is dropping, and exposed valves are going to crack.
- **1-Line "What you can do here":** Audit exposed lines and plan your winterization checklist before the freeze.
- **Primary CTA Text:** Plan Freeze Defense →
- **Suggested Icon Metaphor:** A snowflake or a thermometer dropping.

### 5. Remote Checks
- **Card Title:** Remote Gates & Sites
- **1-Line Problem Statement:** You're burning diesel driving to check sites that might be totally fine.
- **1-Line "What you can do here":** Price out remote sensors to verify gates are closed and tanks are full without driving.
- **Primary CTA Text:** Cut Drive Time →
- **Suggested Icon Metaphor:** A truck or a padlocked gate.

## Layout & Interaction Guidelines

### Recommended Layout Pattern
- **Bento Grid / Asymmetric Grid:** Don't just use standard equal-width cards. Make "Water Lines & Tanks" and "Well Pumps & Motors" slightly larger (spanning 2 columns in a 3-column grid, for example) to reflect their higher frequency and urgency.
- **Card Structure:** Place the icon and title at the top left, the problem statement in the middle, and anchor the CTA heavily at the bottom.

### Desktop Presentation Notes
- **Left-Aligned Text:** Keep all text left-aligned inside the cards for faster scanning.
- **High Contrast Borders:** Use thick (4px) `stone-800` borders around cards to give them a physical, heavy feel. 
- **Typography:** Use a monospaced font for the "What you can do here" sub-text to make it feel like technical instructions.

### Mobile Presentation Notes
- **Vertical Stack:** Stack the cards vertically, full-width.
- **Touch Targets:** Ensure the entire card is clickable, not just the CTA text. 
- **Legibility:** Keep the font sizes large (minimum 16px body, 20px title) so it's readable outdoors in glaring sunlight.

### Hover / Active States
- **Hover:** The card should lift slightly (using a hard drop shadow like `shadow-[8px_8px_0px_#292524]`) and the border or CTA text should switch to `orange-500` to indicate interactivity.
- **Active (Click):** The card should depress (remove the shadow, translate down/right) to mimic pressing a physical, heavy-duty mechanical button.
