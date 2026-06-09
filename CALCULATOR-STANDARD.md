# Calculator Standardization Guide

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
