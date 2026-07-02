# Data Models & Schema

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
