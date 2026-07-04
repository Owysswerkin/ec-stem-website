## Fix: Allow legal pages to be indexed by Google

Google Search Console flagged pages excluded by `noindex`. The tag is set in `src/components/SEOHead.tsx` for four routes. We'll allow the three public legal pages to be indexed and keep the internal Access Control page hidden.

### Change

In `src/components/SEOHead.tsx`, remove `noindex: true` from:
- `/privacy-policy`
- `/cookies-policy`
- `/terms-conditions`

Keep `noindex: true` on:
- `/policies/access-control` (internal)

### After deploy

1. In Google Search Console, use **URL Inspection** on each of the three legal URLs and click **Request Indexing** to speed up re-crawl.
2. The "Excluded by noindex" report will still list `/policies/access-control` — that's intentional and can be ignored.

No other files affected.