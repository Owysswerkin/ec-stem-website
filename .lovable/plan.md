## Add Image and Header to Services Section

### What will change

1. Copy the uploaded photo (child with STEM building blocks) into the project assets folder.
2. In the Services Overview section (the one right after the video and wave divider on the Home page), add:
  - A suitable header such as "Learning Through Play, with the "Fix-it Mindset"
  - The uploaded image displayed prominently alongside or above the existing description text
3. The layout will show the image and text side-by-side on desktop (image left, text right) and stacked on mobile.

### Technical Details

**File: `src/assets/stem-child-building.jpg**` (new)

- Copy `user-uploads://DSC09178.JPG` to `src/assets/stem-child-building.jpg`

**File: `src/pages/Home.tsx**`

- Import the new image asset
- Update the Services Overview section (the `bg-gray-50` section) to add:
  - An `h2` header above the description paragraph
  - A two-column layout: left side shows the image with rounded corners, right side shows the header and description text
  - On mobile, stack vertically (image on top, text below)
- The three service cards grid remains unchanged below