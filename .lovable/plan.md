

# EC STEM Website Redesign Plan (Updated)

## Overview

This plan transforms the EC STEM website with a playful, organic aesthetic inspired by arcchildren.org, featuring real STEM components (gears, wheels, technic beams) as animated decorative elements throughout the site.

---

## Updated Design Direction

### Removed Components
- Multi-slide Hero Carousel (keeping the current single hero layout)

### New Features
- Animated STEM components (gears, wheels, beams) as floating decorations
- SVG wave dividers between sections
- Enhanced color palette with warm coral accent

---

## Phase 1: Asset Setup

### Copy Uploaded STEM Component Images

Move the uploaded gear and component images to the assets folder for use throughout the site:

| Source Image | Destination | Purpose |
|--------------|-------------|---------|
| Yellow & Blue Gears | `src/assets/stem-gears-yellow-blue.png` | Hero decorations, rotating animations |
| Rubber Tires | `src/assets/stem-wheels.png` | Rolling animations, section accents |
| Technic Beam & Rings | `src/assets/stem-beam-rings.png` | Floating elements, loading states |
| Yellow Connector & Worm Gear | `src/assets/stem-connectors.png` | Card decorations |
| Red/Coral Gear | `src/assets/stem-gear-coral.png` | Accent color highlights |

---

## Phase 2: New Reusable Components

### 1. AnimatedGear Component

A rotating gear element that can be placed anywhere:

```text
+---------------------------+
|   AnimatedGear Props      |
+---------------------------+
| - image: gear image src   |
| - size: sm/md/lg/xl       |
| - speed: slow/normal/fast |
| - direction: cw/ccw       |
| - className: positioning  |
+---------------------------+
```

Features:
- CSS rotation animation (continuous spin)
- Multiple size options (32px to 120px)
- Clockwise or counter-clockwise rotation
- Configurable animation speed

### 2. FloatingComponent Component

For non-rotating STEM parts that float/bob:

```text
+---------------------------+
|  FloatingComponent Props  |
+---------------------------+
| - image: component src    |
| - size: sm/md/lg          |
| - delay: animation delay  |
| - amplitude: float height |
+---------------------------+
```

### 3. WaveDivider Component

SVG-based wave transitions between sections:

```text
+---------------------------+
|    WaveDivider Props      |
+---------------------------+
| - variant: wave1/wave2    |
| - color: fill color       |
| - flip: boolean           |
| - height: px value        |
+---------------------------+
```

### 4. StemDecorations Component

Pre-configured decoration layouts for different page sections:

- `hero`: Gears positioned around hero image
- `section`: Subtle floating components
- `footer`: Small decorative accents

---

## Phase 3: Animation System Updates

### New Keyframes in tailwind.config.ts

```text
Animations to Add:
+-----------------+--------------------------------+
| Name            | Effect                         |
+-----------------+--------------------------------+
| spin-slow       | 360deg rotation over 20s       |
| spin-slower     | 360deg rotation over 30s       |
| spin-reverse    | -360deg rotation over 25s      |
| float-gentle    | Vertical bob with rotation     |
| roll-in         | Wheel rolling entrance         |
| gear-mesh       | Two gears meshing together     |
+-----------------+--------------------------------+
```

---

## Phase 4: Color Palette Updates

### New Colors in index.css

| Color Name | HSL Value | Hex Equivalent | Usage |
|------------|-----------|----------------|-------|
| gear-yellow | 45 100% 50% | #F5A623 | Yellow gear accents |
| gear-blue | 220 80% 45% | #2E5AAC | Blue gear accents |
| coral | 0 75% 60% | #E05A47 | Warm coral highlights |
| teal-soft | 180 50% 95% | #E0F7FA | Section backgrounds |

---

## Phase 5: Home Page Updates

### Hero Section Enhancements

Replace the current simple decorative circles with actual STEM component images:

```text
Current:                          Updated:
+------------------+              +------------------+
|  [Yellow circle] |              |  [Yellow Gear]   | <- rotating
|                  |              |     (spinning)   |
|   [Hero Image]   |              |   [Hero Image]   |
|                  |              |                  |
|  [Blue circle]   |              |  [Blue Gear]     | <- counter-rotating
|  [Orange circle] |              |  [Technic Beam]  | <- floating
+------------------+              +------------------+
```

Specific placements:
- **Top-right**: Large yellow gear (120px), slow clockwise spin
- **Bottom-left**: Blue gear (80px), slow counter-clockwise spin
- **Left side**: Red/coral gear (60px), floating with delay
- **Bottom decorative**: Technic beam element, gentle float

### Section Dividers

Add wave dividers between major sections:
- After Hero: Wave flowing into Services section
- After Services: Wave into Slogan section
- After About: Wave into Programs section

---

## Phase 6: Global Decorations

### Footer Enhancement

Add small floating gear elements to footer background (subtle, low opacity)

### Navigation

Optional: Tiny gear icon near logo that spins on hover

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/components/AnimatedGear.tsx` | Rotating gear component |
| `src/components/FloatingComponent.tsx` | Floating STEM parts |
| `src/components/WaveDivider.tsx` | SVG wave section dividers |
| `src/components/StemDecorations.tsx` | Pre-built decoration layouts |

## Files to Modify

| File | Changes |
|------|---------|
| `tailwind.config.ts` | Add new animations and colors |
| `src/index.css` | Add new CSS variables for colors |
| `src/pages/Home.tsx` | Integrate gear decorations and wave dividers |
| `src/components/Footer.tsx` | Add subtle gear decorations |

---

## Visual Preview of Gear Placement

```text
+------------------------------------------------------------------+
|  HERO SECTION                                                     |
|                                          [YELLOW GEAR] (rotating) |
|  +------------------+                         o                   |
|  | Welcome to       |                        /|\                  |
|  | EC STEM          |     +---------------+   |                   |
|  |                  |     |               |                       |
|  | [Buttons]        |     |  Hero Image   |                       |
|  +------------------+     |               |                       |
|                           +---------------+                       |
|  [BLUE GEAR]                                                      |
|    (counter-rotating)     [CORAL GEAR]                           |
|                              (floating)                           |
+~~~~~~~~~~~~~~~~~~~ WAVE DIVIDER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
|  SERVICES SECTION                                                 |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Implementation Order

1. Copy uploaded images to src/assets
2. Create AnimatedGear component
3. Create FloatingComponent component
4. Create WaveDivider component
5. Update tailwind.config.ts with new animations
6. Update index.css with new color variables
7. Update Home.tsx hero section with gear decorations
8. Add wave dividers between Home page sections
9. Apply similar decorations to other key pages

---

## Expected Outcome

- Playful, engaging visual design with real STEM components
- Smooth, performant CSS animations
- Consistent design language across all pages
- Enhanced brand identity connecting to hands-on learning
- No carousel complexity - keeping the clean single hero layout

