# Solve.RuralOpsTools

Welcome to **Solve**, a subdomain of the RuralOpsTools ecosystem. This platform provides DIY Farm & Ranch Monitors, IoT cost estimators, and simple calculators to help operators find and fix farm utility leaks.

## Overview
Solve is designed for agricultural professionals, farm managers, and rural utility users who need practical tools without the fluff. The platform is organized into three main areas:
1. **The Math & Operations Planning**: Simple, localized scratchpad calculators to estimate waste on water pumps, pipes, fences, and power systems. Also includes operational planners like **Water Check OS**, **Pump Trouble Logger**, **Freeze Event Planner**, and **Fence Fault Tracker**.
2. **The Tool Wall**: A catalog of rugged, "snap-on" DIY hardware monitors (PulseGuard, FlowWatch, GateLog, etc.).
3. **My Shed**: A digital logbook to track active sensors, asset health, and compliance.

## Tech Stack
- **Frontend Framework**: React 18+ with Vite
- **Routing**: React Router
- **Styling**: Tailwind CSS (Utility-first)
- **Typography**: Zilla Slab (Display), Inter (Sans), JetBrains Mono (Monospace)
- **SEO/Metadata**: React Helmet Async

## Design System
The application utilizes a specific "Workbench" or "Tactile" UI design language to resonate with physical work environments:
- Graph paper/workbench backgrounds.
- Heavy dark borders and flat solid drop shadows (e.g., `shadow-[4px_4px_0px_#292524]`).
- Tilted or slightly rotated structural elements (like cards or notepads) for an organic, clipboard-like feel.
- High visual contrast using deep stones (Stone 900) and alert colors (Orange 500/600).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will run with Vite's dev server constraints.

3. **Build for production:**
   ```bash
   npm run build
   ```

   This produces static files in the `dist/` directory, ready to be served.

## Legal Disclaimer
All tools, calculators, and models provided across the Rural Ops Tools network are intended for informational, estimation, and decision-support purposes only. They do not constitute professional financial, legal, engineering, or agronomic advice.
