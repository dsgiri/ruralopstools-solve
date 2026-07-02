const fs = require('fs');

const agentsContent = fs.readFileSync('AGENTS.md', 'utf8');

const calculatorStandard = fs.readFileSync('CALCULATOR-STANDARD.md', 'utf8');
const toolsStandard = fs.readFileSync('TOOLS-STANDARD.md', 'utf8');
const systemDesign = fs.readFileSync('SYSTEM_DESIGN.md', 'utf8');
const prd = fs.readFileSync('PRD.md', 'utf8');
const architecture = fs.readFileSync('ARCHITECTURE.md', 'utf8');
const dataModels = fs.readFileSync('DATA_MODELS.md', 'utf8');
const apiSpec = fs.readFileSync('API_SPEC.md', 'utf8');

const appendedContent = `

## Domain-Specific Standards & Reference

The following sections consolidate all project requirements, design systems, and architecture standards.

### 1. Product Requirements (PRD)
${prd.replace(/^# .*\n/, '')}

### 2. Design System / Style Guide
${systemDesign.replace(/^# .*\n/, '')}

### 3. Site Architecture & URL Map
${architecture.replace(/^# .*\n/, '')}

### 4. Data Models & Schema
${dataModels.replace(/^# .*\n/, '')}

### 5. API & Integrations Spec
${apiSpec.replace(/^# .*\n/, '')}

### 6. Calculator Standardization Guide
${calculatorStandard.replace(/^# .*\n/, '')}

### 7. Online Calculator Layout and Standard
${toolsStandard.replace(/^# .*\n/, '')}
`;

fs.writeFileSync('AGENTS.md', agentsContent + appendedContent);

console.log("Merged standards into AGENTS.md");
