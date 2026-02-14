

## Redesign "More Than a Classroom" Section

Currently this section has a centered title + subtitle followed by a 3-column pillar card grid. The proposal is to convert it into a **2-column layout** with the uploaded child-building-blocks photo on one side and the text content on the other.

### Layout

```text
+--------------------------------------------------+
|  [Photo of child        |  "More Than a Classroom.|
|   building blocks]      |   A Community."         |
|                         |                         |
|   (rounded corners,     |   Body text paragraph   |
|    object-cover)        |                         |
|                         |   Three pillars stacked  |
|                         |   vertically as compact  |
|                         |   icon + text rows       |
+--------------------------------------------------+
```

- On desktop (md+): 2-column grid with image on the left, text + pillars on the right
- On mobile: single column, image on top, text below

### Changes

**New asset file**: Copy uploaded image to `src/assets/child-building-blocks.jpg`

**`src/pages/JoinOurTeam.tsx`**:
- Import the new image asset
- Replace the current centered header + 3-column card grid with a 2-column layout (`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`)
- Left column: the photo with rounded corners and shadow
- Right column: section title, body text, and the three pillars displayed as a vertical list (icon + title + description in a compact row format instead of large cards)

No translation file changes needed -- existing keys are reused as-is.

