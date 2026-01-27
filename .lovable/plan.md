

# Fix Google Search Console "Duplicate without user-selected canonical" Issue

## Problem Summary

Google Search Console is flagging pages as duplicates because there are no canonical tags telling Google which URL version is authoritative. This can hurt SEO rankings and indexing.

## What We'll Do

### 1. Add a Base Canonical Tag to index.html

Add a default canonical link in the HTML head that will be dynamically updated by React.

**Changes to `index.html`:**
- Add `<link rel="canonical" href="https://ecstem.education/">` in the head section

### 2. Create a SEO Component for Dynamic Updates

Create a new `SEOHead` component that updates the canonical URL based on the current page route.

**New file: `src/components/SEOHead.tsx`**
- Uses `useLocation()` from React Router to detect current route
- Dynamically updates the canonical link element
- Can also update page title and meta description per page

### 3. Integrate SEOHead into the App

Add the SEOHead component to the page layout so it runs on every page.

**Changes to `src/components/PageLayout.tsx`:**
- Import and render the SEOHead component

### 4. Update Sitemap with Missing Pages

The sitemap is missing some routes that exist in the app.

**Changes to `public/sitemap.xml`:**
- Add `/programmes/for-parents`
- Add `/whats-new`

---

## Technical Details

### SEOHead Component Logic

```text
+-------------------+
|   User navigates  |
|    to /about      |
+--------+----------+
         |
         v
+--------+----------+
|  useLocation()    |
|  detects route    |
+--------+----------+
         |
         v
+--------+----------+
| Update canonical  |
| to full URL:      |
| ecstem.education  |
| /about            |
+--------+----------+
         |
         v
+--------+----------+
| Google sees       |
| proper canonical  |
+-------------------+
```

### Canonical URL Format

All canonical URLs will use the production domain: `https://ecstem.education`

This ensures that even if someone visits via the Lovable preview URL, Google knows the real URL is `ecstem.education`.

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `src/components/SEOHead.tsx` | Create new |
| `src/components/PageLayout.tsx` | Modify |
| `index.html` | Modify |
| `public/sitemap.xml` | Modify |

## Expected Outcome

After these changes:
- Every page will have a proper canonical URL pointing to the production domain
- Google will stop flagging "Duplicate without user-selected canonical"
- The sitemap will accurately reflect all available pages
- SEO rankings should improve as Google understands your site structure better

