// Branded header image for the Google Form (1600x400).
// Run with: node scripts/gen-form-header.mjs  (needs: npm i --no-save sharp)
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { mkdirSync } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const SRC_LOGO = resolve(root, "src/assets/logo.png");
const OUT_DIR = resolve(root, "brand");
mkdirSync(OUT_DIR, { recursive: true });

const W = 1600;
const H = 400;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#111827"/>
      <stop offset="1" stop-color="#172033"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="0" width="12" height="${H}" fill="#B91C1C"/>
  <circle cx="1360" cy="200" r="260" fill="#ffffff" opacity="0.03"/>
  <rect x="86" y="105" width="190" height="190" rx="26" fill="#ffffff"/>
  <text x="320" y="180" font-family="DejaVu Serif, Georgia, serif" font-size="58" font-weight="700" fill="#ffffff">Λογιστικό Γραφείο Φιλιππός Καλέσης</text>
  <rect x="323" y="210" width="72" height="4" rx="2" fill="#B91C1C"/>
  <text x="320" y="262" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#94A3B8">Φόρμα Ενδιαφέροντος · Λογιστής - Φοροτεχνικός Α’ Τάξης</text>
</svg>`;

const logoBuf = await sharp(SRC_LOGO)
  .resize(150, 150, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .flatten({ background: "#ffffff" })
  .png()
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: logoBuf, left: 106, top: 125 }])
  .png({ compressionLevel: 9 })
  .toFile(resolve(OUT_DIR, "form-header.png"));

console.log("Wrote brand/form-header.png (1600x400)");
