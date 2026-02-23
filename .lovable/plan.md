# Redesign Team Section - "Meet Our Teachers"

## Overview

Redesign the team section on the About page to match the playful, colorful style from the reference image. The title changes to "Meet Our Teachers" and each teacher card gets a unique colorful background.

## Design Changes

### Header Area

- Change title from "Meet Our Expert Team" to "Meet Our Teachers"  
- Add a playful large heading: "Behind every little inventor... is a big heart" with a heart emoji
- Keep the subtitle text describing the team

### Teacher Cards (Inspired by Reference)

- Remove the current Card-based design with white backgrounds
- Each teacher photo gets a unique **colorful background** (e.g., pink/lavender, lime/yellow, teal, pink/coral) — cycling through colors
- Photos displayed in **rounded-corner rectangles** with the colored background visible around/behind the image
- Teacher name shown in a **pill-shaped colored badge** below each photo (matching or complementing the card background color)
- Role and description text shorten and hidden from the card to keep it clean and playful like the reference. It will show when clicking on the pill.
- Grid layout: 3 columns on desktop (since there are 3 teachers), responsive to 1 column on mobile

### Color Palette for Cards

Using the brand's playful palette:

- Card 1 (Wan Rong): Lavender/pink background, green name badge
- Card 2 (Jayne): Lime/yellow background, teal name badge  
- Card 3 (Flynne): Teal background, coral/orange name badge

## Technical Details

### Files Modified

1. `**src/pages/About.tsx**` - Redesign the team section:
  - Update section heading text
  - Replace Card-based layout with colorful custom cards
  - Each card: colored `div` with rounded corners, image inside, and a pill-shaped name badge below
  - Use Tailwind classes for the colorful backgrounds (e.g., `bg-pink-200`, `bg-lime-200`, `bg-teal-200`)
  - Grid changes to `lg:grid-cols-3` (3 teachers instead of 4)
2. `**src/i18n/locales/en.json**` - Update `aboutPage.team.title` to "Meet Our Teachers"
3. `**src/i18n/locales/zh.json**` - Update Chinese translation for the team title accordingly