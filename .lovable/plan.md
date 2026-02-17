

## Summary

Remove all floating/animated STEM decorations from the Our Methodology page, add the uploaded image above the "Book a Trial Class" button, and add lead-in text encouraging parents to book a trial.

---

## Changes

### 1. Copy uploaded image to project

Save `user-uploads://WhatsApp_Image_2025-12-27_at_12.32.54_AM_1.jpeg` as `src/assets/stem-child-screwdriver.jpg`.

### 2. Update `src/pages/OurMethodology.tsx`

- **Remove** all `<StemDecorations ... />` components (3 instances) and the import
- **Add** in the "Empowering Fixers" section, between the description text and the button:
  - The uploaded photo (rounded, shadowed, centered, max-width constrained)
  - Lead-in text such as: "Ready to see your child's confidence soar? Experience our hands-on STEM learning firsthand."

