

## Site Audit: SEO, Speed, Cleanup & Chinese Translation

### 1. Unused Assets (files in `src/assets/` not imported anywhere)

The following 14 image files are never imported or referenced in any component:

- `booster-logo.png`
- `booster-robotics-logo.png`
- `classroom-activities.jpg`
- `ec-stem-logo-white.jpg`
- `ec-stem-logo.jpg`
- `gear-clippy-character.jpg`
- `hero-preschool.jpg`
- `hero-robot-classroom.png`
- `holiday-stem-trial-banner.jpg`
- `ms-huang-founder-portrait.jpg`
- `ms-huang-founder.jpg`
- `ms-huang-new.jpg`
- `ms-huang-portrait.jpg`
- `outdoor-play.jpg`
- `parents-child-duplo.jpg`
- `preschooler-scientist.jpg`
- `principal-portrait.jpg`
- `team-gear-avatar.jpg`
- `teacher-clairabel.jpg` (Teacher Clairabel exists in translation but is no longer in the About page team array)

**Action**: Delete all unused assets to reduce bundle size.

---

### 2. Unused Import in `OurMethodology.tsx`

`screwdriverPhoto` is imported but never used in the JSX (only `methodologyPhoto` and a lovable-upload image are rendered).

**Action**: Remove the unused import.

---

### 3. Deprecated Admissions Page Still Routed

Per your memory note, Admissions was deprecated. However:
- `src/pages/Admissions.tsx` still exists and is routed at `/admissions` in `App.tsx`
- The 404 page (`NotFound.tsx`) still links to `/admissions` with `t('nav.admissions')`
- Translation files still have `"admissions": "Admissions"` in nav keys
- `admissionsPage` translations still exist in both en.json and zh.json

**Action**: Remove the `/admissions` route from `App.tsx`, delete `Admissions.tsx`, remove the admissions link from `NotFound.tsx`, and clean up unused translation keys.

---

### 4. Unused `Index.tsx` Page

`src/pages/Index.tsx` redirects to `/` but is never routed in `App.tsx`.

**Action**: Delete `Index.tsx`.

---

### 5. SEO Issues

| Issue | Detail | Fix |
|-------|--------|-----|
| **Hardcoded hero text** | Home.tsx hero title/subtitle is not using i18n translations | Wrap in `t()` calls |
| **Missing alt text i18n** | Many images have English-only alt text | Not critical but could improve |
| **Sitemap outdated** | Missing `/centres`, `/trial-class`, `/our-methodology`, `/join-our-team` pages; still lists `/admissions`; `lastmod` dates are old (2025-11-27) | Update sitemap.xml |
| **Copyright year** | Footer says "© 2025" — should be 2026 given current date | Update in both en.json and zh.json |
| **Missing meta descriptions per page** | Only one global meta description in index.html | Could add per-page via SEOHead component |
| **Trial Class page not i18n** | `TrialClass.tsx` has hardcoded English text, no `t()` calls | Add translations |
| **Centres page not i18n** | `Centres.tsx` has all hardcoded English text | Add translations |
| **OurMethodology page not i18n** | All text is hardcoded English | Add translations |

---

### 6. Chinese Translation Gaps

Pages/sections with **no Chinese translation support** (hardcoded English):

| Page | Missing Chinese |
|------|----------------|
| **Home.tsx** | Hero section (title, subtitle, CTA text), Building Blocks section, Core Curriculum section, methodology section — all hardcoded |
| **Centres.tsx** | Entire page hardcoded in English |
| **TrialClass.tsx** | Entire page hardcoded in English |
| **OurMethodology.tsx** | Entire page hardcoded in English |
| **Admissions.tsx** | FAQ section hardcoded (but page is deprecated) |
| **About.tsx** | "Our Core Curriculum" section text hardcoded |

The `en.json` and `zh.json` translation files are otherwise well-matched for pages that do use `t()`.

---

### 7. Performance/Speed Observations

- **Large number of image assets** (50+ files in `src/assets/`). Removing ~18 unused ones will help.
- **No lazy loading on routes** — all pages are eagerly imported in `App.tsx`. Adding `React.lazy()` + `Suspense` would improve initial load.
- **No image lazy loading** — images below the fold should use `loading="lazy"` attribute.
- **Two Google Forms iframes** (Contact + Trial Class) — these are heavy. Consider adding `loading="lazy"` to iframes.

---

### 8. Other Issues Found

- **NotFound.tsx** references `t('nav.admissions')` which links to the deprecated admissions page
- **Footer copyright** in zh.json still says "© 2025"
- **`home.programmes.viewAll`** translation key is referenced in Home.tsx but doesn't exist in either translation file (the text "View our programs →" is hardcoded in JSX)

---

### Recommended Implementation Plan (Priority Order)

1. **Delete unused assets** (18 files) — immediate bundle size reduction
2. **Delete `Index.tsx`** and remove Admissions route + page
3. **Update `sitemap.xml`** — add missing pages, remove `/admissions`, update dates
4. **Fix NotFound.tsx** — remove admissions link
5. **Add `React.lazy()`** for route-level code splitting in `App.tsx`
6. **Add `loading="lazy"`** to all below-fold images and iframes
7. **Add i18n to hardcoded pages**: Home hero, Centres, TrialClass, OurMethodology, About curriculum section
8. **Add corresponding Chinese translations** to `zh.json`
9. **Update copyright year** to 2026 in both locale files
10. **Remove unused `screwdriverPhoto` import** from OurMethodology
11. **Enhance SEOHead** to set per-page `<title>` and `<meta description>`

This is a substantial amount of work. I'd recommend tackling items 1-6 first (cleanup and performance), then items 7-8 (i18n) as a second pass.

