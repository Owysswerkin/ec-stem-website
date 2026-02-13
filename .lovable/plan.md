

## Increase Gear Decoration Size

Make the static gear image in the hero section larger across all breakpoints.

### Changes

**File: `src/pages/Home.tsx`**

Update the gear image sizing classes from the current values to larger ones:

| Breakpoint | Current | New |
|---|---|---|
| Mobile | `w-24 h-24` (96px) | `w-32 h-32` (128px) |
| Medium (md) | `w-36 h-36` (144px) | `w-48 h-48` (192px) |
| Large (lg) | `w-44 h-44` (176px) | `w-56 h-56` (224px) |

The positioning (`top-4 right-4` / `md:top-8 md:right-8`) and other properties remain unchanged.

