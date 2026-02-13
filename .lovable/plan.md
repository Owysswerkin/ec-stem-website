## Add "Join Our Team" Career Page

### Overview

Create a new career/recruitment page and add it to the navigation bar, following the site's warm, playful aesthetic with STEM-themed decorations.

### Changes Required

**1. New Page: `src/pages/JoinOurTeam.tsx**`

A full career page with three sections:

- **Hero Section**: "Build the Future. Start with Yours." headline on a gradient background (Growth Green / Innovation Blue tones blended with the existing teal-soft palette). Includes a CTA button that scrolls to the roles section. Decorative gear image in corner, matching the Home page pattern.
- **"More Than a Classroom" Section**: Three-pillar card layout with icons (Lightbulb for Impact, MessageCircle for Voice, TrendingUp for Growth), each with a short description. Uses WaveDivider for smooth transitions between sections.
- &nbsp;
- **Call-to-Action Footer**: A closing section encouraging candidates to reach out send their resume to hr@ecstem.education, CTA button link to ec stem linkedin [https://www.linkedin.com/company/ecstemeducation/jobs/](https://www.linkedin.com/company/ecstemeducation/jobs/)

**2. Navigation Update: `src/components/Navigation.tsx**`

Add "Join Our Team" as a new nav item to the left of "What's New" in the `navItems` array, linking to `/join-our-team`.

**3. Route Update: `src/App.tsx**`

- Import the new `JoinOurTeam` component
- Add route: `<Route path="/join-our-team" element={<JoinOurTeam />} />`

**4. Translation Files**

- `**src/i18n/locales/en.json**`: Add `"nav.joinOurTeam": "Join Our Team"` and a `joinOurTeamPage` section with all page content strings.
- `**src/i18n/locales/zh.json**`: Add corresponding Chinese translations (`"nav.joinOurTeam": "加入我们"` and page content).

### Design Notes

- Color accents will lean toward green (`emerald`/`teal`) and blue (`sky`/`blue`) to convey "Growth Green" and "Innovation Blue" while staying harmonious with the site's palette.
- Imagery will use existing teacher/classroom photos from `src/assets/` as placeholders for the "in-action" shots described.
- Typography uses the site's existing rounded, friendly style with bold headers.