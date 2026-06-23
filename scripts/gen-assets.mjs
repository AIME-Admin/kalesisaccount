// One-off asset generation: optimized logo, favicon, apple-touch-icon, OG image.
// Run with: node scripts/gen-assets.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const SRC_LOGO = resolve(root, "src/assets/logo.png");
const PUB = resolve(root, "public");

await sharp(SRC_LOGO)
  .resize(256, 256, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9, quality: 90 })
  .toFile(resolve(PUB, "logo.png"));

await sharp(SRC_LOGO)
  .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
  .png({ compressionLevel: 9 })
  .toFile(resolve(PUB, "apple-touch-icon.png"));

await sharp(SRC_LOGO)
  .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(resolve(PUB, "favicon.png"));

// Open Graph card (1200x630), premium dark editorial style.
const ogSvg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#111827"/>
      <stop offset="1" stop-color="#172033"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="10" height="630" fill="#B91C1C"/>
  <circle cx="980" cy="315" r="230" fill="#ffffff" opacity="0.03"/>
  <text x="100" y="250" font-family="DejaVu Serif, Georgia, serif" font-size="62" font-weight="700" fill="#ffffff">Λογιστικό Γραφείο</text>
  <text x="100" y="330" font-family="DejaVu Serif, Georgia, serif" font-size="62" font-weight="700" fill="#ffffff">Φίλιππος Καλέσης</text>
  <rect x="103" y="372" width="64" height="4" rx="2" fill="#B91C1C"/>
  <text x="100" y="430" font-family="DejaVu Sans, Arial, sans-serif" font-size="30" fill="#94A3B8">Λογιστής - Φοροτεχνικός Α’ Τάξης</text>
  <text x="100" y="478" font-family="DejaVu Sans, Arial, sans-serif" font-size="26" fill="#64748B">Λογιστική &amp; φοροτεχνική υποστήριξη · myDATA · μισθοδοσία</text>
</svg>`;

const logoBuf = await sharp(SRC_LOGO)
  .resize(300, 300, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

await sharp(Buffer.from(ogSvg))
  .composite([{ input: logoBuf, left: 830, top: 165 }])
  .png({ compressionLevel: 9 })
  .toFile(resolve(PUB, "og-image.png"));

const sizes = await Promise.all(
  ["logo.png", "apple-touch-icon.png", "favicon.png", "og-image.png"].map(async (f) => {
    const meta = await sharp(resolve(PUB, f)).metadata();
    return `${f}: ${meta.width}x${meta.height}`;
  })
);
console.log("Generated:\n" + sizes.join("\n"));
