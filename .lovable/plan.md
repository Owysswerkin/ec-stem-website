

# Redesign "For Enrichment Centre" Page

## Changes

### 1. Hero Section
- Keep gradient overlay style, remove "Download Brochure" button
- Change CTA to "Sign Up for Trial Lesson" linking to `/trial-class`

### 2. Program Levels — Use Age Groups Instead of School Levels
Update the level labels:
- **Early Explorers** → "4 Years Old" (instead of "Nursery 2")
- **Curious Creators** → "5 Years Old" (instead of "Kindergarten 1")
- **Super Solvers** → "6 Years Old" (instead of "Kindergarten 2")

Update both `en.json` and `zh.json` translation files accordingly.

### 3. Update Bottom CTA
Change the motto section CTA button from contact link to "Sign Up for Trial Lesson" → `/trial-class`

### File Changes
- `src/pages/ForParents.tsx` — Replace brochure button with trial class CTA, update bottom CTA link
- `src/i18n/locales/en.json` — Change level labels to age-based ("4 Years Old", "5 Years Old", "6 Years Old"), remove `downloadBrochure` key
- `src/i18n/locales/zh.json` — Same label changes in Chinese ("4岁", "5岁", "6岁")

