// Post-build step: generate per-route HTML files with route-specific
// Open Graph / Twitter meta so crawlers (LinkedIn, Facebook, X, …) that don't
// run JavaScript get the right preview for each case study.
//
// The SPA itself is unaffected: each generated file is a copy of dist/index.html
// (same JS bundle) with only the <title> and social meta swapped. The browser
// boots React as usual; the static host serves dist/<route>/index.html for the
// matching path before falling back to the `/* /index.html 200` rewrite.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://robertjamesherold.com';
const FALLBACK_IMAGE = 'og-image.jpg';

/** Routes that get their own preview. Keep in sync with src/lib/router.tsx. */
const ROUTES = [
  {
    path: 'codescanner',
    title: 'CodeScanner — Robert James Herold',
    description:
      'KI-gestütztes Analyse-Tool für mehr Vertrauen in KI-generierten Code – vom Research bis zum vollständigen Designsystem. Bachelorarbeit, IU Internationale Hochschule.',
    image: 'og-codescanner.jpg',
  },
  {
    path: 'villa-oliveto',
    title: 'Villa Oliveto — Robert James Herold',
    description:
      'Italienische Familientradition aus 6 Generationen, modern erzählt. Markenwelt über Produkt, Web und Social Media hinweg.',
    image: 'og-villa-oliveto.jpg',
  },
  {
    path: 'schuelerhilfe',
    title: 'Träume werden wahr — Robert James Herold',
    description:
      'Ein 30-Sekunden-Werbespot für die Schülerhilfe – von Plot über Drehbuch und Storyboard bis zum fertigen Animatic.',
    image: 'og-schuelerhilfe.jpg',
  },
];

const indexPath = join(dist, 'index.html');
if (!existsSync(indexPath)) {
  console.error('[prerender-og] dist/index.html not found — run `vite build` first.');
  process.exit(1);
}
const baseHtml = readFileSync(indexPath, 'utf8');

/** Replace the content="" of a meta tag identified by property|name="key". */
const setMeta = (html, attr, key, value) => {
  const re = new RegExp(
    `(<meta\\s+${attr}=["']${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']\\s+content=["'])[^"']*(["'])`,
    'i'
  );
  if (!re.test(html)) {
    console.warn(`[prerender-og] meta ${attr}="${key}" not found — skipped.`);
    return html;
  }
  return html.replace(re, `$1${value}$2`);
};

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let count = 0;
for (const r of ROUTES) {
  const url = `${SITE}/${r.path}`;
  const imageFile = existsSync(join(dist, r.image)) ? r.image : FALLBACK_IMAGE;
  if (imageFile === FALLBACK_IMAGE) {
    console.warn(
      `[prerender-og] ${r.image} missing in dist/ — using ${FALLBACK_IMAGE} for /${r.path}. ` +
        `Add public/${r.image} (1200×630) for a custom preview.`
    );
  }
  const imageUrl = `${SITE}/${imageFile}`;
  const title = escapeHtml(r.title);
  const desc = escapeHtml(r.description);

  let html = baseHtml;
  html = html.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`);
  html = setMeta(html, 'name', 'description', desc);
  html = setMeta(html, 'property', 'og:type', 'article');
  html = setMeta(html, 'property', 'og:url', url);
  html = setMeta(html, 'property', 'og:title', title);
  html = setMeta(html, 'property', 'og:description', desc);
  html = setMeta(html, 'property', 'og:image', imageUrl);
  html = setMeta(html, 'name', 'twitter:title', title);
  html = setMeta(html, 'name', 'twitter:description', desc);
  html = setMeta(html, 'name', 'twitter:image', imageUrl);

  const outDir = join(dist, r.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);
  count++;
  console.log(`[prerender-og] /${r.path} → dist/${r.path}/index.html (image: ${imageFile})`);
}

console.log(`[prerender-og] done — ${count} route(s) generated.`);
