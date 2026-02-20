
## Summary

Update the Home page H1 to use Montserrat font, color each letter of "STEM" in the puzzle logo colors, and make the rest of the heading text blue.

---

## Changes

### 1. Add Montserrat font import (`src/index.css`)

Add a Google Fonts import for Montserrat (bold weights) alongside existing font imports:
```
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&display=swap');
```

### 2. Update Home page H1 (`src/pages/Home.tsx`)

**Font**: Override the H1 from "Lilita One" to Montserrat using `style={{ fontFamily: "'Montserrat', sans-serif" }}`.

**Colors**: Change the heading text to blue (`text-primary`) and individually color each letter of "STEM" in the puzzle logo colors:
- **S** = Red/Coral (`#E74C3C`)
- **T** = Green (`#27AE60`)
- **E** = Yellow/Orange (`#F1C40F`)
- **M** = Blue (`#2980B9`)

The current structure:
```
Early Childhood
STEM Education
in Singapore
```

Will become:
```
Early Childhood          (blue)
S T E M  Education       (S=red, T=green, E=yellow, M=blue, "Education"=blue)
in Singapore             (keep current green or change to blue per preference)
```

"in Singapore" will remain green (`text-secondary`) as it currently is, since the user only specified "the rest of the text will be blue" referring to the non-STEM portions of the main heading line.

---

## Technical Details

- Montserrat loaded via Google Fonts CDN in `src/index.css`
- STEM letters wrapped in individual `<span>` elements with inline `style={{ color: '...' }}`
- Only the Home page H1 is affected; global H1 style remains unchanged for other pages
- The `font-display` override in the H1 ensures Montserrat is used instead of the base `Lilita One`
