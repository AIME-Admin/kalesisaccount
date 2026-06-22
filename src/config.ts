// Central site configuration.
// Final-domain placeholder: override with VITE_SITE_URL at build time.
const rawSiteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined) ||
  "https://kalesis-accounting.gr";

// Normalise to no trailing slash for joins, keep a "/" canonical helper.
export const SITE_URL = rawSiteUrl.replace(/\/+$/, "");
export const CANONICAL_URL = `${SITE_URL}/`;
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

export const BUSINESS = {
  name: "Λογιστικό Γραφείο Φιλιππός Καλέσης",
  person: "Φιλιππός Καλέσης",
  jobTitle: "Λογιστής - Φοροτεχνικός Α’ Τάξης",
  phoneDisplay: "+30 698 014 4612",
  phoneHref: "tel:+306980144612",
  phoneIntl: "+306980144612",
  email: "kalesisacc@gmail.com",
  emailHref: "mailto:kalesisacc@gmail.com",
  areaServed: "Ελλάδα",
} as const;

// Google Form: set these in .env to embed / link the real intake form.
export const GOOGLE_FORM_EMBED_URL =
  (import.meta.env.VITE_GOOGLE_FORM_EMBED_URL as string | undefined) || "";
export const GOOGLE_FORM_PUBLIC_URL =
  (import.meta.env.VITE_GOOGLE_FORM_PUBLIC_URL as string | undefined) || "";
export const HAS_FORM_EMBED = GOOGLE_FORM_EMBED_URL.trim().length > 0;
export const HAS_FORM_PUBLIC = GOOGLE_FORM_PUBLIC_URL.trim().length > 0;

// Logo lives in /public so the same path works in dev and production builds.
export const LOGO_SRC = "/logo.png";
export const LOGO_ALT = "Λογιστικό Γραφείο Φιλιππός Καλέσης";

// Analytics: scripts load only when an id is provided via .env (no hardcoding).
export const GA_ID = (import.meta.env.VITE_GA_ID as string | undefined)?.trim() || "";
export const GTM_ID = (import.meta.env.VITE_GTM_ID as string | undefined)?.trim() || "";
