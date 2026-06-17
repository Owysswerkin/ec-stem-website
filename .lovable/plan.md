## Update Make-Up Classes Policy (Section 11)

Replace the existing MC-based make-up policy in `src/pages/TermsConditions.tsx` with a new rescheduling policy.

### New Section 11 content

- Parents/guardians may reschedule a **maximum of two (2) classes per term**.
- Rescheduling requests must be submitted **at least one (1) month in advance**.
- Requests made with less than one (1) month notice may still be accommodated at the Company's discretion, **subject to availability**.
- Rescheduled classes are subject to available slots and timings determined by the Company.
- Unused reschedule entitlements do not carry over to subsequent terms.
- No refunds or class credits will be provided for missed lessons.

### Files to update

- `src/pages/TermsConditions.tsx` — replace the bullet list inside the Section 11 card.
- `Last updated` header → change from "January 2025" to "June 2026".

No i18n locale changes needed (this page is English-only static content).

### Memory update

Update `mem://legal/terms-and-conditions-policy` to reflect the new make-up/reschedule rules.
