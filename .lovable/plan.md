

# Redesign About Page - Replace Values with Core Curriculum

## Overview
Replace the "Our Core Values" section on the About page with the **Core Curriculum** section from the Home page. This brings the three pillars -- "FIX-IT" Mindset, Applied Innovation, and Conscientious Making -- with their colorful speech bubble quotes into the About page, making the design bolder and more impactful.

## What Changes

### Remove: "Our Core Values" Section (lines 83-107)
The current 3-card grid (Curiosity, Understanding, Hands & Minds) with icon cards will be replaced entirely.

### Add: "Our Core Curriculum" Section
Ported from the Home page (lines 200-247), styled to match the About page context:

- **Section title**: "Our Core Curriculum" in bold, large font (Lilita One or Montserrat)
- **3-column grid** with three pillars:

  1. **"FIX-IT" Mindset** -- Red speech bubble saying "I try again" with descriptive text below
  2. **Applied INNOVATION** -- Blue speech bubble saying "I think and figure things out" with descriptive text below
  3. **CONSCIENTIOUS Making** -- Green speech bubble saying "I care for people and the planet" with descriptive text below

- Each pillar uses the same **colored speech bubble with tail** design from the Home page
- Colored keyword highlights in headings (red for Mindset, blue for INNOVATION, green for Making)
- Text size slightly larger for bolder feel (text-lg descriptions, text-2xl headings)

### File Changes

1. **`src/pages/About.tsx`**
   - Remove the `values` array and the Values Section JSX (lines 17-107)
   - Remove unused imports (`Star`, `Zap`, `Card`, `CardContent`, `gearClippyCharacter`) that were only used by the values section
   - Insert the Core Curriculum section with the 3-column speech bubble layout, matching the Home page design
   - Keep the same `bg-muted/30` background for visual consistency

2. **No translation file changes needed** -- the curriculum text is hardcoded in the Home page component and will be the same here. No i18n keys required for this content.

## Technical Details

### New Section Structure (replacing lines 83-107)
```text
section (py-20, bg-muted/30)
  +-- container
       +-- h2 "Our Core Curriculum" (centered, bold, large)
       +-- 3-col grid (md:grid-cols-3)
            +-- Pillar 1: h4 + red speech bubble + description
            +-- Pillar 2: h4 + blue speech bubble + description
            +-- Pillar 3: h4 + green speech bubble + description
```

### Imports Cleanup
- Remove: `Star`, `Card`, `CardContent`, `gearClippyCharacter`
- Keep: `Heart`, `Zap` only if used elsewhere (Heart is not used elsewhere either, so remove both)
- Final imports: `React`, `useState`, `useTranslation`, plus image imports and team-related code

