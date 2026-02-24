

# About Page Redesign - Colorful Blocks Style

## Overview
Redesign the About page with a **Colorful Blocks** aesthetic: large rounded color blocks, the team photo as a wide banner background behind Mission and Vision, chunky bold typography, and vibrant section separations.

## Design Changes

### 1. Mission and Vision Section (Hero-style with Team Photo Background)
**Current**: 2-column grid with team photo on the left, text on the right.
**New**: Full-width section with `teamPhoto` as a background image, covered by a semi-transparent dark overlay. Mission and Vision text displayed large and bold on top.

- Team photo becomes `background-image` with `bg-cover bg-center`, minimum height ~70vh
- Dark gradient overlay (`bg-black/50`) for text readability
- Title in white, extra large (`text-4xl md:text-5xl lg:text-6xl`)
- Mission and Vision headers in colored pill badges (blue for Mission, green for Vision)
- Body text in white/light color, larger size (`text-lg md:text-xl`)
- Mission and Vision stacked vertically, centered, with generous spacing

### 2. Core Curriculum Section - No changes
Keep the existing speech-bubble design as-is. It already fits the playful aesthetic.

### 3. Founder's Message Section - Bolder treatment
- Wrap in a colored block background (e.g., `bg-amber-50` or `bg-orange-50`)
- Increase quote text size to `text-xl md:text-2xl`
- Add a large colored quotation mark decoration
- Keep the existing 2-column layout with photo

### 4. Meet Our Teachers Section - No changes
Already has the colorful flip cards and playful design. Kept as-is.

## Technical Details

### File: `src/pages/About.tsx`

**Lines 38-66 (Mission and Vision section)** - Replace with:
- Remove the `<img>` tag for `teamPhoto` from the grid
- Convert section to use inline `backgroundImage` style with `teamPhoto`
- Add overlay div with dark gradient
- Restructure content to be centered, single-column, with large white text
- Mission and Vision headers in colored rounded badges/pills

**Lines 124-166 (Founder section)** - Update:
- Add warm background color (`bg-amber-50`)
- Increase blockquote font size
- Add decorative large quotation mark element

**No new imports needed** - all assets already imported.
**No translation file changes** - using existing i18n keys.

### Structure for new Mission/Vision section:
```text
section (relative, min-h-[70vh], bg-cover, bg-center)
  +-- backgroundImage: teamPhoto (inline style)
  +-- overlay div (absolute inset-0, bg-gradient-to-b from-black/60 to-black/40)
  +-- content div (relative z-10, centered, text-white)
       +-- h2 title (text-5xl, bold, white)
       +-- flex/grid with 2 blocks:
            +-- Mission block (bg-blue-500/20 backdrop-blur rounded-3xl)
            |    +-- pill badge header
            |    +-- body text (text-lg/xl, white)
            +-- Vision block (bg-green-500/20 backdrop-blur rounded-3xl)
                 +-- pill badge header
                 +-- body text (text-lg/xl, white)
```

