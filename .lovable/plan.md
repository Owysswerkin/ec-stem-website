

## SEO Audit Report

### What's Working Well
- Dynamic per-page `<title>` and `<meta description>` via SEOHead component with localized translations
- Canonical URLs dynamically set per page
- sitemap.xml is up-to-date with all current routes and 2026 dates
- robots.txt properly configured with sitemap reference
- Route-level code splitting with React.lazy() for performance
- `loading="lazy"` on below-fold images and iframes
- Google Analytics (gtag) and Microsoft Clarity tracking in place
- Google Search Console verification file present
- OpenGraph and Twitter Card meta tags in index.html

---

### Issues Found

#### Critical SEO Issues

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| 1 | **No JSON-LD structured data** | Search engines can't understand your business type. Missing Organization, LocalBusiness, and EducationalOrganization schema markup. Reduces chances of rich snippets in Google results. | Add JSON-LD script to index.html or inject dynamically via SEOHead |
| 2 | **OG/Twitter meta tags are static** | All pages share the same OG title/description/image from index.html. When sharing `/about` or `/programmes` on social media, the wrong title and description appear. | Update SEOHead to dynamically set `og:title`, `og:description`, and `og:url` meta tags per page |
| 3 | **OG image uses relative path** | `content="/lovable-uploads/..."` — social media crawlers need absolute URLs. The image won't render on Facebook/Twitter/LinkedIn shares. | Change to `content="https://ecstem.education/lovable-uploads/..."` |
| 4 | **Missing SEO meta for legal pages** | `/privacy-policy`, `/cookies-policy`, `/terms-conditions`, `/policies/access-control` have no entries in SEOHead's pageMeta — they fall back to a generic title and lose their meta description entirely. | Add entries to pageMeta and seo translations |
| 5 | **Stale `nav.admissions` translation key** | Still present in en.json and zh.json despite page deletion. Not actively breaking anything but adds dead weight. | Remove from both locale files |

#### Moderate SEO Issues

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| 6 | **Many images missing `loading="lazy"`** | Programmes hero, About page images, LearningBuddy hero, WhatsNew post images, JoinOurTeam hero — all load eagerly, slowing initial paint. | Add `loading="lazy"` to below-fold images across these pages |
| 7 | **Hard-coded English alt text** | JoinOurTeam (`"Child building with colourful blocks"`), LearningBuddy (`"Learning Buddy Hero"`), About (`"Ec stem education team"`, `"Ms Huang, Founder..."`) — not translatable for Chinese SEO. | Wrap in `t()` with translation keys |
| 8 | **No `hreflang` tags** | Site supports English and Chinese but doesn't signal this to search engines. Google may not know which language version to serve. | Add `<link rel="alternate" hreflang="en" />` and `hreflang="zh"` in SEOHead |
| 9 | **`html lang` attribute never updates** | `<html lang="en">` is hardcoded. When user switches to Chinese, the lang attribute stays "en", which confuses screen readers and search engines. | Update `document.documentElement.lang` in SEOHead or i18n config based on active language |

#### Minor / Nice-to-Have

| # | Issue | Impact | Fix |
|---|-------|--------|-----|
| 10 | **No `<meta name="robots">` on legal pages** | Legal pages rank low-priority but still compete with main content. Could add `noindex` to prevent index dilution. | Optional: add `<meta name="robots" content="noindex">` for legal pages |
| 11 | **Netlify hidden form in body** | `<form name="interest-registration" netlify ...>` — if not deployed on Netlify, this is dead markup. | Remove if not using Netlify |

---

### Recommended Implementation Plan

**Phase 1 — High-impact fixes:**
1. Make OG/Twitter meta tags dynamic per page in SEOHead (title, description, url)
2. Fix OG image to use absolute URL
3. Add JSON-LD Organization structured data to index.html
4. Add SEO meta entries for legal pages (privacy, cookies, terms, access-control)
5. Update `html lang` attribute when language changes

**Phase 2 — Moderate fixes:**
6. Add `loading="lazy"` to remaining below-fold images (About, Programmes, LearningBuddy, WhatsNew, JoinOurTeam)
7. Add `hreflang` alternate link tags
8. Internationalize remaining hard-coded alt text
9. Clean up stale `nav.admissions` translation key

