

## Summary

Add an "Our Methodology" button to the Home page's "Learning Through Play" section (after the photos), linking to a brand-new `/our-methodology` page. The new page will feature playful STEM-themed decorations and present the methodology content in distinct, visually engaging sections.

---

## Changes

### 1. Copy uploaded image into project

Copy `user-uploads://Picture1.jpg` to `src/assets/methodology-child-building.jpg` for use on the new page.

### 2. Update Home page (`src/pages/Home.tsx`)

Add an "Our Methodology" button after the two photos in the "Learning Through Play" section (after line 157, before the closing `</div>` of the section):

- Centered button styled similarly to existing CTAs (rounded-full, primary colors)
- Links to `/our-methodology`

### 3. Create new page (`src/pages/OurMethodology.tsx`)

A dedicated page with the following sections, using the same playful design language (wave dividers, animated gears, gradient backgrounds, rounded cards) as the rest of the site:

**Hero / Intro Section**
- Title: "Our Methodology"
- Subtitle: "Building a child's Self-Ecstem"
- Body text about the powerful internal narrative
- The uploaded photo displayed below the text (rounded, shadowed)

**Sys-STEM-ic Approach Section** (alternate background)
- Title and description about integrated hands-on learning
- Decorative gear elements

**Quote Section**
- Styled blockquote: "No question is too silly, No idea is too big."
- Gradient background card similar to the slogan section on Home

**Productive Struggle Section**
- Title and description about guiding children through challenges

**Empowering Fixers Section** (alternate background)
- Title and description about shaping proactive problem-solvers
- CTA button linking to `/trial-class`

Wave dividers will be used between sections to maintain visual consistency with the rest of the site.

### 4. Register the route (`src/App.tsx`)

- Import `OurMethodology` from `src/pages/OurMethodology`
- Add route: `<Route path="/our-methodology" element={<OurMethodology />} />`

---

## Technical Details

- The button text on Home reads "Our Methodology" (fixing the typo "Our Methodolog" in the request)
- The new page follows existing patterns: React functional component, Tailwind utility classes, reuses `WaveDivider`, `AnimatedGear`, and `Button` components
- The uploaded photo is imported as an ES6 module from `src/assets/`
- No new dependencies required

