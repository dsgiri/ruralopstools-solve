# AGENTS.md

## Purpose
This repository builds niche digital tools and SEO landing pages for SOLVE.RURALUTILITYCOST.COM.
The business focuses on boring, underserved operational software and digital tools for farms, ranches, homesteads, and remote rural infrastructure.
Products built here include tools like Water Check OS, Pump Trouble Logger, Remote Inspection Proof Tool, Freeze Event Planner, and Fence Fault Tracker, alongside related SEO landing pages.
This file provides reusable, repository-level instructions to AI coding agents to ensure consistent, high-quality, and predictable execution.

## Project Priorities
1. Build useful, narrow, operational tools.
2. Keep UX practical, rugged, and mobile-friendly.
3. Support SEO growth and future affiliate monetization.
4. Keep code simple and maintainable.
5. Make pages conversion-oriented and problem-focused.
Avoid broad “platform” or "enterprise SaaS" thinking unless explicitly requested. Every feature must be simple enough to explain clearly and useful enough to stand alone.

## Agent Operating Rules
- Work in small, deliberate steps.
- Do not rewrite unrelated files.
- Preserve existing behavior unless intentionally changing it.
- Prefer editing existing files over creating duplicates.
- If blocked, leave a clear note in the code or response.
- Do not invent fake APIs, fake infrastructure, or fake integrations.
- Do not add dependencies unless necessary. If adding a dependency, explain why.
- Avoid unnecessary abstractions. Keep implementation production-minded.
- Prefer semantic HTML, accessible UI, and clean structure.
- Do not use placeholder marketing fluff in product pages. Write outcome-driven copy.
- Always make output specific to farms, ranches, and rural infrastructure when relevant.
- Always use simple, easy, and impactful words. Prioritize making all output incredibly easy to read. Avoid jargon unless absolutely necessary.

## Product and UX Rules
- Each tool must solve one narrow, painful workflow.
- Every page must explain the problem it solves in under 5 seconds.
- Mobile-first design is mandatory.
- Avoid generic startup language and generic SaaS styling (no purple/blue AI gradients, no glassmorphism, no generic icon grids).
- Use practical, rugged, field-operations-style design.
- Copy must be plainspoken, outcome-driven, and specific to rural operations.
- Structure pages around problems, workflows, trust, and clear calls to action (CTA).
- Prefer pages that are easy to scan in the field.
- Use strong visual hierarchy with high contrast for readability.
- Keep forms short, useful, and tactile.

## SEO and Content Rules
- Target one primary keyword theme per page.
- Use exactly one `<h1>` per page.
- Use descriptive title tags and meta descriptions.
- Use internal links to related tools and guide pages.
- Add FAQ sections when relevant to the workflow or tool.
- Use natural-language headings that reflect user search intent.
- Write for real users first, search engines second.
- Avoid keyword stuffing. Favor problem-based search intent.
- Keep pages specific and topically focused.
- Every tool page MUST include: definitions, who-it’s-for, what-problem-it-solves, core features, and an FAQ block.

## Code Style and Implementation Preferences
- Keep components small and readable.
- Use descriptive naming for variables, functions, and files.
- Avoid magic constants; define them clearly at the top of the file or in a constants file.
- Prefer explicit logic over clever, unreadable shortcuts.
- Keep CSS organized and reusable. Do not over-nest styles.
- Avoid giant files when possible; modularize logically.
- Preserve accessibility (aria labels, keyboard navigation, contrast).
- Minimize JavaScript where HTML/CSS is sufficient.
- Use comments only where they explain the "why", not the "what".
- Prefer production-ready code over demo hacks.

## File and Folder Expectations
- `src/pages/` or equivalent: Landing pages and tool application views.
- `src/components/` or equivalent: Shared UI components.
- `src/utils/` or `src/hooks/`: Reusable logic and helpers.
- `public/`: Static assets and images.
- Keep names descriptive and use `kebab-case` for URLs and non-component files, `PascalCase` for React components.
- Do not create duplicate versions of the same page or component.
- Prefer predictable file locations matching the established repository structure.

## Build Workflow
1. Understand the task and clarify constraints.
2. Inspect existing files to understand the current architecture.
3. Reuse patterns already present in the repository.
4. Implement the smallest correct change to achieve the goal.
5. Review the implementation for UX, SEO, and accessibility rules.
6. Run tests or lint scripts if available.
7. Summarize what changed clearly and concisely.
Avoid broad, speculative rewrites of the codebase. Build one page, tool, or feature at a time.

## Testing and Validation
- Inspect `package.json` scripts first instead of inventing commands.
- Run tests if present.
- Run lint if present.
- Check mobile layout responsiveness.
- Check for obvious console errors.
- Validate heading hierarchy (only one H1, proper nesting).
- Validate CTA visibility and touch targets.
- Validate internal links and form submissions.
- Check that no placeholder text (e.g., "Lorem ipsum") remains.
- Check basic accessibility (color contrast, alt text on images).

## Safety and Change Management
- Ask before deleting major files.
- Ask before changing deployment configurations.
- Ask before large dependency additions.
- Ask before schema or data model migrations.
- Do not expose secrets or API keys.
- Do not commit generated credentials.
- Do not assume production infrastructure details.
- Avoid editing unrelated content during focused tasks.

## Prompting and Collaboration Rules
- Expect detailed prompts and follow structured instructions carefully.
- Return organized, highly scannable summaries.
- State assumptions clearly when forced to make them.
- Do not ask unnecessary clarifying questions if the task is actionable with reasonable defaults.
- Break work into logical sections and maintain clean implementation logic.
- Use practical defaults and move forward unless permanently blocked.

## Definition of Done
A task is complete when:
- [ ] Task goal is fully met.
- [ ] No broken layouts or console errors exist.
- [ ] No obvious placeholder copy remains.
- [ ] The implementation is mobile-friendly.
- [ ] Accessibility basics are covered.
- [ ] SEO basics are covered if page content was changed.
- [ ] No unrelated regressions were introduced.
- [ ] Code is readable, maintainable, and follows repo conventions.
- [ ] A concise summary of changes is ready.

## Optional Nested AGENTS.md Guidance
If the repository grows, nested `AGENTS.md` files may be added in subfolders to define domain-specific rules. The nearest `AGENTS.md` file in the directory tree takes precedence for subprojects.


## Repository Documentation Index

This repository uses multiple markdown files to track project context, requirements, and progress. AI agents MUST reference these files when executing tasks.

- **`AGENTS.md`** (This file)
  - **Objective**: Core instructions, rules, and guidelines for AI coding agents. Contains consolidated project requirements and standards.
  - **When to refer**: Read at the start of every session or task. Always dictates agent behavior.
  - **When to update**: When project-wide priorities, UX/UI standards, agent rules, or core domain logic change.
  
- **`README.md`**
  - **Objective**: Project overview, tech stack, legal disclaimers, and getting started instructions.
  - **When to refer**: When needing high-level context of the repo's purpose and tech stack.
  - **When to update**: When major features are released, tech stack changes, or deployment instructions change.

- **`Planning.md`**
  - **Objective**: Architectural planning, design patterns, and high-level workflow (e.g., PIV).
  - **When to refer**: When making structural changes or reviewing established design patterns.
  - **When to update**: When introducing a new pattern or changing the fundamental architecture.

- **`Tasks.md`**
  - **Objective**: Current project tasks and immediate checklist of work in progress.
  - **When to refer**: Before starting a new task to understand immediate next steps.
  - **When to update**: When a task is completed, blocked, or when new immediate sub-tasks are identified.

- **`BACKLOG.md`**
  - **Objective**: Future features and prioritized roadmap (P0, P1, P2).
  - **When to refer**: When looking for the next major feature to build after immediate tasks are done.
  - **When to update**: When new ideas are generated, priorities shift, or backlog items are moved to Tasks.

- **`PRD.md`**
  - **Objective**: Product Requirements Document outlining features and scope.
  - **When to refer**: When building new features to ensure alignment with product requirements.
  - **When to update**: When new product features are conceived or scope changes.

- **`SYSTEM_DESIGN.md`**
  - **Objective**: Design system, styling rules, typography, and core component styles.
  - **When to refer**: When building UI to ensure visual consistency and correct use of Tailwind classes.
  - **When to update**: When the design language evolves or new core UI components are added.

- **`ARCHITECTURE.md`**
  - **Objective**: Site architecture and URL routing map.
  - **When to refer**: When adding new pages, routing, or changing navigation.
  - **When to update**: Whenever a new route or major section is added to the application.

- **`DATA_MODELS.md`**
  - **Objective**: Data schemas and state structures (e.g., local storage, static JSON).
  - **When to refer**: When creating or modifying data structures, API mocks, or storage logic.
  - **When to update**: Whenever a data model changes or new schemas are added.

- **`API_SPEC.md`**
  - **Objective**: API and integration specifications.
  - **When to refer**: When integrating third-party services or defining external data requirements.
  - **When to update**: When adding or changing APIs (e.g., Firebase, Analytics).

- **`CALCULATOR-STANDARD.md`**
  - **Objective**: Guidelines for calculator layout, UI/UX, and mathematical integrity.
  - **When to refer**: Whenever building or modifying a calculator tool.
  - **When to update**: When calculator UI patterns change or new standard requirements for math tools are established.


## Domain-Specific Standards & Reference

The following sections consolidate all project requirements, design systems, and architecture standards.

### 1. Product Requirements (PRD)

## Overview
Solve.RuralUtilityCost provides simple, offline-capable calculators and guides for agricultural utility cost estimation and IoT device hardware kits.

## Features
- Dynamic calculators with local storage support.
- Tool Wall for DIY sensor kit information.


### 2. Design System / Style Guide

## Colors
- Background: Stone 100/50
- Text: Stone 900 (primary), Stone 500/600 (secondary)
- Accent: Orange 500/600
- Borders: Stone 800

## Typography
- Display/Headings: `Zilla Slab`
- Body: `Inter`
- Labels/Technical: `JetBrains Mono`

## Components
- **Tactile Cards**: `border-4 border-stone-800 shadow-[8px_8px_0px_#292524] bg-white`
- **Buttons**: Thick borders, strong hover states, often using the accent color.


### 3. Site Architecture & URL Map

## Routes
- `/` - Home (Tool Wall & Calculators Dashboard)
- `/tool/:id` - Detailed calculator view
- `/favorites` (or "My Shed") - Saved tools and active tracked assets
- `/about`, `/contact`, `/privacy`, `/terms` - Static informational pages


### 4. Data Models & Schema

*(Currently utilizing local storage and static JSON structures)*

## Tool Configuration (Static)
- `id`: string
- `title`: string
- `description`: string
- `category`: string
- `primaryOutcome`: string
- `fields`: Array of calculator inputs (id, label, type, options, default)

## User State (Local Storage)
- `favorites`: Array of tool string IDs


### 5. API & Integrations Spec

*(No external backend or APIs integrated currently.)*

- Future integrations may include Google Analytics, simple auth (Firebase), or email providers.


### 6. Calculator Standardization Guide

When developing or updating calculators for the Solve.RuralUtilityCost platform, adhere to the following standards to ensure consistency and mathematical reliability.

## 1. UI/UX Standards
- **Input Fields**: Use rugged, high-contrast inputs. Example styles: `w-full border-2 border-stone-800 bg-stone-100 rounded-sm py-2 px-3 shadow-[2px_2px_0px_#292524]`.
- **Labels**: Use uppercase, monospaced fonts with high contrast (e.g., `font-mono text-xs font-bold text-stone-600 uppercase`).
- **Output Display**: Highlight final cost or waste prominently. The output block should stand out, often resembling a piece of paper or notepad.
- **Tooltips & Help**: Keep explanations short, practical, and devoid of unnecessary technical jargon.

## 2. Mathematical Integrity
- **Variables**: Expose all critical variables to the user. Do not hardcode rates (like electricity cost per kWh or water cost per 1000 gallons) without allowing the user to override them with localized data.
- **Formulas**: Keep calculations transparent. If estimating "waste" or "inefficiency," clearly define the baseline percentage or formula assumption.

## 3. Recommended Calculator Structure
A standard calculator implementation should include:
- `id`: A unique identifier (e.g., `pump-waste`)
- `title`: A clear, action-oriented title (e.g., `Water Pump Cost`)
- `fields`: State values representing the user inputs (label, id, type, default value).
- `calcFn`: A pure Javascript/TypeScript function taking the form state as input and returning the calculated financial or resource metrics.

## 4. Bridge to Solutions
Every calculator MUST include a "Bridge" action. Once a user calculates their waste or cost, present a clear next step (e.g., "Get FlowWatch Kit →") that links directly to the corresponding hardware or software solution on the Tool Wall.


### 7. Online Calculator Layout and Standard

This document outlines the ideal structure and layout standards for an online calculator page within the Solve.RuralUtilityCost ecosystem. All calculators ("The Math") must follow this top-to-bottom organization to ensure a consistent, rugged, and practical user experience.

## 1. Above the Fold (Immediate Access)
- **Clear H1 Header**: State exactly what the calculator does in no-nonsense terms (e.g., "Water Pump Cost Calculator", "Sensor Network Cost").
- **Brief Description**: One practical sentence explaining the benefit or target outcome for the operator.
- **The Calculator Interface**: Place the tool immediately visible without scrolling. The user should be able to start inputting data instantly.

## 2. The Calculator Layout
- **Input Column**: Left side (or top on mobile) for user data entry.
- **Visual Controls**: Use tactile, physical-feeling controls. Use sliders for ranges, standard high-contrast dropdowns for categories, and clear numeric inputs.
- **Output Column**: Right side (or bottom on mobile) displaying results in real-time or upon explicit "Compile" action.
- **Visual Anchors**: Use bold, oversized display fonts (`Zilla Slab`) and high-contrast colors (e.g., Orange 600) for the primary result. It should look like a prominent stamp or result on a clipboard.
- **Call to Action (CTA)**: A primary button underneath the results bridging to solutions (e.g., "Get Required Hardware &rarr;" linking to "The Tool Wall").

## 3. Below the Fold (Supporting Context)
- **How It Works**: A short, bulleted breakdown of the formula, logic, or standard values used in the background. Keep it practical.
- **Definitions**: Brief explanations of technical terms or input fields (e.g., defining "LoRaWAN" vs "Cellular").
- **Assumptions/Disclaimer**: A prominent section detailing variables like estimated tax rates, standard inflation, or base labor cost assumptions. Must include the standard "informational purposes only" legal disclaimer.

## 4. Trust and Engagement Elements
- **FAQ Section**: Dropdown accordions answering common operator questions related to the specific utility or cost.
- **Related Tools**: Links to complementary calculators on the site (e.g., linking the Automation Budget estimator to the Smart Farm ROI estimator).
- **Share/Save Buttons**: Options to save to "My Shed", email results, copy a unique link, or print a PDF summary for the clipboard.

