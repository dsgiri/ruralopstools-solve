# Calculator & Tools Standardization Guide

This document outlines the ideal structure, layout standards, and mathematical integrity guidelines for online calculators ("The Math") within the Solve.RuralUtilityCost ecosystem. All calculators must follow this organization to ensure a consistent, rugged, and practical user experience.

## 1. Calculator Structure and Mathematical Integrity

A standard calculator implementation should include:
- `id`: A unique identifier (e.g., `pump-waste`)
- `title`: A clear, action-oriented title (e.g., `Water Pump Cost`)
- `fields`: State values representing the user inputs (label, id, type, default value).
- `calcFn`: A pure Javascript/TypeScript function taking the form state as input and returning the calculated financial or resource metrics.

**Variables & Formulas:**
- Expose all critical variables to the user. Do not hardcode rates (like electricity cost per kWh or water cost per 1000 gallons) without allowing the user to override them with localized data.
- Keep calculations transparent. If estimating "waste" or "inefficiency," clearly define the baseline percentage or formula assumption.

## 2. Above the Fold (Immediate Access)

- **Clear H1 Header**: State exactly what the calculator does in no-nonsense terms (e.g., "Water Pump Cost Calculator", "Sensor Network Cost").
- **Brief Description**: One practical sentence explaining the benefit or target outcome for the operator.
- **The Calculator Interface**: Place the tool immediately visible without scrolling. The user should be able to start inputting data instantly.

## 3. The Calculator Layout (UI/UX Standards)

- **Input Column**: Left side (or top on mobile) for user data entry.
- **Visual Controls**: Use tactile, physical-feeling controls. Use sliders for ranges, standard high-contrast dropdowns for categories, and clear numeric inputs.
  - *Input Fields Style*: Use rugged, high-contrast inputs. Example styles: `w-full border-2 border-stone-800 bg-stone-100 rounded-sm py-2 px-3 shadow-[2px_2px_0px_#292524]`.
  - *Labels*: Use uppercase, monospaced fonts with high contrast (e.g., `font-mono text-xs font-bold text-stone-600 uppercase`).
- **Output Column**: Right side (or bottom on mobile) displaying results in real-time or upon explicit "Compile" action.
- **Visual Anchors**: Highlight final cost or waste prominently. The output block should stand out, often resembling a piece of paper or notepad. Use bold, oversized display fonts (`Zilla Slab`) and high-contrast colors (e.g., Orange 600) for the primary result. It should look like a prominent stamp or result on a clipboard.
- **Call to Action (CTA)**: Every calculator MUST include a "Bridge" action. A primary button underneath the results bridging to solutions (e.g., "Get Required Hardware →" linking to "The Tool Wall").

## 4. Below the Fold (Supporting Context)

- **How It Works / Tooltips**: A short, bulleted breakdown of the formula, logic, or standard values used in the background. Keep explanations short, practical, and devoid of unnecessary technical jargon.
- **Definitions**: Brief explanations of technical terms or input fields (e.g., defining "LoRaWAN" vs "Cellular").
- **Assumptions/Disclaimer**: A prominent section detailing variables like estimated tax rates, standard inflation, or base labor cost assumptions. Must include the standard "informational purposes only" legal disclaimer.

## 5. Trust and Engagement Elements

- **FAQ Section**: Dropdown accordions answering common operator questions related to the specific utility or cost.
- **Related Tools**: Links to complementary calculators on the site (e.g., linking the Automation Budget estimator to the Smart Farm ROI estimator).
- **Share/Save Buttons**: Options to save to "My Shed", email results, copy a unique link, or print a PDF summary for the clipboard.
