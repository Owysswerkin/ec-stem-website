

## Replace Services Overview Section with "Building Blocks of Early STEM"

### What Changes

The current "Learning Through Play, with the Fix-it Mindset" section (with two images and methodology button) will be replaced with a new two-part section:

### Part 1: Building Blocks of Early STEM

- New title: **"Building Blocks of Early STEM"**
- Four rectangle Lego-style bricks displayed in a row (responsive grid), each with a 3D/shadow effect to look like actual Lego bricks:
  - **Red brick** - "Observation"
  - **Green brick** - "Exploration"
  - **Yellow brick** - "Imagination"
  - **Blue brick** - "Construction"
- Each brick will have rounded studs on top (CSS-styled circles) and a slight 3D shadow on the bottom/right to simulate depth

### Part 2: Our Core Curriculum

Below the bricks, an **"Our Core Curriculum"** heading followed by three curriculum pillars, each containing:

1. **"FIX-IT" Mindset**
   - Speech bubble: "I try again"
   - Description: We direct children to view challenges as opportunities to learn, persist, and get better.

2. **Applied INNOVATION**
   - Speech bubble: "I think and figure things out"
   - Description: We guide children toward solutions that are useful, testable, and rooted in real-world needs.

3. **CONSCIENTIOUS Making**
   - Speech bubble: "I care for people and the planet"
   - Description: We teach kids to design with empathy, safety, and consideration for our world.

Each speech bubble will be styled with a colored background, rounded corners, and a small triangular tail pointing down-left (similar to the one on the OurMethodology page).

### Technical Details

**File modified:** `src/pages/Home.tsx` (lines 143-170)

- The two side-by-side images (`stemChildBuilding`, `stemChildScrewdriver`) and the "Our Methodology" button will be removed from this section
- The unused image imports can remain for now (they may be used elsewhere or cleaned up later)
- Lego bricks will be built with pure CSS using Tailwind classes: colored rectangles with `rounded-lg`, darker bottom borders for 3D effect, and small circular pseudo-elements or divs on top for studs
- The three curriculum pillars will be laid out in a responsive 3-column grid (`grid-cols-1 md:grid-cols-3`)
- Speech bubbles will use a pattern similar to the existing speech bubble on the OurMethodology page (a div with a triangular CSS tail)
- Color scheme: Red uses `bg-red-500`, Green uses `bg-green-500`, Yellow uses `bg-yellow-400`, Blue uses `bg-blue-500` to match the STEM color palette already used in the hero heading

