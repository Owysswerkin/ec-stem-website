## Add Maple Bear Labrador to Our Partners

1. Upload the provided logo as a Lovable asset (`src/assets/maplebear-labrador-logo.png.asset.json`).
2. **`src/components/PartnersMarquee.tsx`** — import the new logo and append a 4th partner entry: `{ name: 'Maple Bear Labrador', logo: maplebearLogo }`.
3. **`src/pages/Centres.tsx`** — add a 4th centre card for Maple Bear Labrador with the logo. Grid will switch to wrap (md:grid-cols-2 lg:grid-cols-4, or keep 3 cols and wrap). Will use `md:grid-cols-2 lg:grid-cols-4` so all 4 fit on desktop.
4. Update the `LocalBusiness` JSON-LD `@graph` automatically (derived from centres array).

## Question
Do you have the **street address** for Maple Bear Labrador (Singapore)? Without it, I'll list it on the partners marquee only and add a placeholder "Singapore" address on the Centres page — or omit it from Centres entirely until you provide the address.
