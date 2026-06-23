# Λογιστικό Γραφείο Φίλιππος Καλέσης — Website (Pack 2)

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

## Routing

Client-side routing (react-router): `/` (home), `/privacy`, `/cookies`,
`/terms`. Static hosts must serve `index.html` for unknown paths (SPA
fallback). `public/_redirects` covers Netlify / Cloudflare Pages. For other
hosts: Vercel → add a rewrite to `/index.html`; Apache → `.htaccess` fallback;
Nginx → `try_files $uri /index.html`.

## Pending client input

- Legal pages — content is in place; recommend a final review by the client /
  a lawyer before launch.

Done: production domain (`filipposkalesis.gr`), business address
(Γοργοποτάμου 10-12, Αχαρνές 13671), opening hours, the live Google Form
(intake, defaults in `src/config.ts`, overridable via `.env`), and
Privacy / Cookies / Terms pages.

## Launch & handover

- **Website:** https://filipposkalesis.gr
- **Preview:** https://kalesisaccount.pages.dev
- **Google Form (public):** https://forms.gle/5nAynLvwuVTiQToz7
  (responses flow to the linked Google Sheet, owned by the AIME account and
  shared with the client).

### Where to edit things

| What | File |
| --- | --- |
| Phone / email / address / hours / name / job title | `src/config.ts` (`BUSINESS`) |
| Google Form URLs | `src/config.ts` (`DEFAULT_FORM_*`) or `.env` |
| Services | `src/data/services.ts` |
| Assistant / FAQ Q&A | `src/data/assistantQuestions.ts` |
| Audience & "when to contact" | `src/components/AudienceSection.tsx` |
| Hero copy / H1 | `src/components/Hero.tsx` |
| Core SEO meta + static JSON-LD | `index.html` (`<head>`) |
| robots / sitemap / security headers / SPA fallback | `public/robots.txt`, `public/sitemap.xml`, `public/_headers`, `public/_redirects` |

> Note: business name, address, hours and services appear **both** in
> `src/config.ts` (runtime UI + FAQ schema) and in the static JSON-LD in
> `index.html`. When the client's details change, update **both** places.

### Reminders

- Legal pages (`/privacy`, `/cookies`, `/terms`) should be **approved by the
  client or a legal advisor** before launch.
- Never request **Taxisnet codes, bank credentials, or passwords** through the
  form or email. This is stated on the site and must stay true operationally.

### Optional next commercial steps (not in Pack 2 scope)

- Professional email at `@filipposkalesis.gr`
- Google Business Profile (Αχαρνές) setup/optimization
- Google Search Console + submit `sitemap.xml`
- Analytics: set `VITE_GA_ID` / `VITE_GTM_ID` in `.env`
- Local SEO boost (citations, reviews opt-in)

### TODO (optional, needs Google Form edit — not code)

- Add a **"Πώς μας βρήκατε;"** question to the Google Form with options:
  Google · Google Maps / Business Profile · Σύσταση · Social media · AI
  assistant · Άλλο. The form is external, so this is done in the Forms UI, not
  in this repo.
