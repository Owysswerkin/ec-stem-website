

# Redesign "For Enrichment Centre" Page — Make It Visual and Scannable

## Problem
The current page is text-heavy with multiple card grids that all look similar. Parents scanning quickly will bounce. The key issues:
- Long paragraph descriptions in the program level cards
- Too many small cards (4 highlights + 5 benefits + NEL checklist) create visual fatigue
- Every section uses the same card layout — no visual variety
- No photos of actual children/classrooms beyond the hero

## Proposed Design Changes

### 1. Hero Section — Keep As-Is
Already has the background image, CTA, and concise text. No changes needed.

### 2. Programme Levels — Use the Preschool Page Layout
Instead of 3 small icon cards with long paragraphs, switch to the alternating image + text layout already used on the Preschool Programmes page (`Programmes.tsx`). Each programme gets:
- A large photo (reuse `early-explorers.png`, `k1-robots-playing.png`, `stem-child-building.jpg`)
- Age badge (e.g. "4 Years Old")
- Programme name as heading
- **Shortened description** — trim each to 1-2 sentences max, focusing on the outcome rather than method

### 3. Program Highlights — Compact Horizontal Strip
Replace the 4-card grid with a single-row icon strip (like the Preschool page's highlights strip), using colored background. More scannable, less vertical space.

### 4. Why Parents Love Us — Replace 5 Cards with 3 Key Points
Reduce from 5 benefit cards to 3 strongest selling points. Use a simpler layout with large icons and short one-liner descriptions instead of paragraphs:
- "Child-sized robot companion" (most unique differentiator)
- "Qualified ex-preschool teachers"
- "Small class sizes, max 8 children"

### 5. NEL Framework — Collapse into Expandable or Badge Row
Replace the long checklist with a compact row of 5 colourful badges/pills showing each NEL area. Parents who care can click to expand; others just see the alignment at a glance.

### 6. Bottom CTA — Keep As-Is
The motto + trial lesson CTA is already clean and effective.

## Text Shortening (en.json updates)
Trim programme descriptions from ~3 sentences to 1-2:
- **Early Explorers (4 yrs)**: "Hands-on play with building blocks to develop fine motor skills, problem-solving, and natural curiosity."
- **Curious Creators (5 yrs)**: "Using simple tools to connect and build, developing coordination, precision, and early engineering skills."
- **Super Solvers (6 yrs)**: "Exploring gears and mechanisms through experiments that build critical thinking and engineering understanding."

## Files to Change
- `src/pages/ForParents.tsx` — Restructure layout: alternating image+text for programmes, compact highlight strip, reduce benefits to 3, NEL as badge pills
- `src/i18n/locales/en.json` — Shorten programme descriptions, trim benefit descriptions to one-liners
- `src/i18n/locales/zh.json` — Same shortening in Chinese

## Technical Notes
- Reuse programme images already imported in `Programmes.tsx` (`early-explorers.png`, `k1-robots-playing.png`, `stem-child-building.jpg`)
- The alternating layout pattern is already proven in `Programmes.tsx` lines 81-105
- NEL badges can use the existing `Badge` component from `@/components/ui/badge`

