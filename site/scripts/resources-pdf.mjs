// Prints the Resources printables to PDF (docs/BLOG_PLAN.md, "Resources"). Run after `npm --prefix site run build`,
// with the built site served on http://localhost:4400 (npx serve site/dist): node site/scripts/resources-pdf.mjs
// Writes downloads/<site>/<slug>.pdf at the repository root; the PDFs are committed (the deploy has no browser).
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const site = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const root = path.dirname(site);
const require = createRequire(path.join(root, 'package.json'));
let chromium;
try { ({ chromium } = require('playwright')); } catch (e) { ({ chromium } = await import('playwright')); }
const BASE = process.env.SITE_URL || 'http://localhost:4400';

const UI = { en: (await import(new URL('../src/data/resources/ui.js', import.meta.url))).default.en };
for (const f of fs.readdirSync(path.join(site, 'src', 'data', 'resources')).filter((f) => /^ui-[a-z]{2}\.js$/.test(f))) UI[f.slice(3, 5)] = (await import(new URL(`../src/data/resources/${f}`, import.meta.url))).default;
const items = [];
for (const d of fs.readdirSync(path.join(site, 'src', 'data', 'resources'), { withFileTypes: true }).filter((e) => e.isDirectory())) {
  for (const f of fs.readdirSync(path.join(site, 'src', 'data', 'resources', d.name)).filter((f) => f.endsWith('.js'))) items.push((await import(new URL(`../src/data/resources/${d.name}/${f}`, import.meta.url))).default);
}
const browser = await chromium.launch(fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {});
const page = await browser.newPage();
let n = 0;
for (const r of items.filter((x) => x.kind === 'printable')) {
  const url = `${BASE}/${r.site === 'en' ? '' : r.site + '/'}${UI[r.site].slugBase}/${r.slug}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.rsPreparePrint && window.rsPreparePrint());
  await page.emulateMedia({ media: 'print' });
  const out = path.join(root, 'downloads', r.site, r.slug + '.pdf');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.pdf({ path: out, format: 'A4', printBackground: true, margin: { top: '12mm', bottom: '12mm', left: '10mm', right: '10mm' } });
  console.log('pdf', out.replace(root + '/', ''));
  n++;
}
await browser.close();
console.log(`resources-pdf: ${n} PDFs`);
