# Λογιστικό Γραφείο Φιλιππός Καλέσης — Website (Pack 2)

Premium one-page website with smart intake form, knowledge assistant
(Βοηθός Συνεργασίας), SEO-rich FAQ and full structured data.

Stack: **Vite 7 · React 19 · TypeScript · Tailwind CSS v3 · shadcn/ui · framer-motion**

## Develop

This repo lives on the WSL filesystem; run tooling inside WSL (Windows npm fails
on the UNC path):

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build → dist/
npm run lint     # eslint (vendored src/components/ui is ignored)
npm run preview  # serve the built dist/
```

## Configuration (`.env`)

Copy `.env.example` to `.env` and fill in before final deployment. Nothing here
is required for the site to build — sensible placeholders are used until set.

| Variable | Purpose |
| --- | --- |
| `VITE_SITE_URL` | Final domain — used for canonical, Open Graph & JSON-LD. |
| `VITE_GOOGLE_FORM_EMBED_URL` | Google Form embed `src` (`…/viewform?embedded=true`). Embeds the intake form. |
| `VITE_GOOGLE_FORM_PUBLIC_URL` | Public Google Form link (the "open in new tab" button). |
| `VITE_GA_ID` | Google Analytics 4 id (`G-XXXX`). Loads GA only when set. |
| `VITE_GTM_ID` | Google Tag Manager id (`GTM-XXXX`). Loads GTM only when set. |

The production domain is `filipposkalesis.gr` (set in `index.html` for
canonical / OG, in `src/config.ts`, and in `VITE_SITE_URL`).

## Brand assets

Icons and the social preview card are generated from `src/assets/logo.png`
(high-res master) into `public/`:

```bash
node scripts/gen-assets.mjs   # needs: npm i --no-save sharp
```

Outputs: `public/logo.png` (used everywhere), `favicon.png`,
`apple-touch-icon.png`, `og-image.png` (1200×630).

## Pending client input (placeholders in code)

- `[ΠΕΡΙΟΧΗ / ΔΙΕΥΘΥΝΣΗ]` — business address / area (footer, About, JSON-LD).
- `[ΩΡΕΣ ΛΕΙΤΟΥΡΓΙΑΣ]` — opening hours (footer).
- Google Form URLs (intake) — set in `.env`.
- Final domain — set in `.env` and `index.html`.
- Footer legal links (Privacy / Cookies / Terms) — need real legal text.
