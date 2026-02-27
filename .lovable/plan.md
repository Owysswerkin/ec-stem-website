

# Programmes Page Redesign

## Changes

### 1. Remove "Why Preschools Love Our Program" section
Delete lines 105-299 (the entire bento grid section).

### 2. Add a hero banner at the top
Use `classroom-activities.jpg` as a full-width hero background with a soft pastel overlay, similar to the About page style. Display the page title large and centered.

### 3. Redesign the program levels as colorful image-backed cards
Each of the 3 program cards gets a relevant background image:
- **Early Explorers (N2)**: `parents-child-duplo.jpg` — children with hands-on play
- **Curious Creators (K1)**: `k1-robots-playing.png` — kids with robots
- **Super Solvers (K2)**: `stem-child-building.jpg` — child building

Layout: Stacked alternating rows (image left/text right, then flipped), large rounded blocks with soft pastel backgrounds per level (sky-50, amber-50, rose-50).

### 4. Keep the highlights section but move it below the program cards
Restyle as a single horizontal strip with a soft gradient background, keeping the 4 highlight items (duration, class size, flexible, materials).

### 5. Add a CTA section at the bottom
Simple call-to-action block encouraging schools to partner, linking to the contact page.

## Structure

```text
Hero Banner (classroom-activities.jpg background, pastel overlay)
  +-- Page title

Program Level 1 - Early Explorers (bg-sky-50)
  +-- Row: image left | text right

Program Level 2 - Curious Creators (bg-amber-50)  
  +-- Row: text left | image right

Program Level 3 - Super Solvers (bg-rose-50)
  +-- Row: image left | text right

Highlights Strip (soft gradient)
  +-- 4 items in a row

CTA Section
  +-- "Partner with us" button → /contact
```

## File Changes
- `src/pages/Programmes.tsx` — full redesign

## Images Used
- `classroom-activities.jpg` (hero)
- `parents-child-duplo.jpg` (Early Explorers)
- `k1-robots-playing.png` (Curious Creators)
- `stem-child-building.jpg` (Super Solvers)

