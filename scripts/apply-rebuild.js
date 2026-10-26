/**
 * Switch-over step (docs/REBUILD_PLAN.md, Step 3): after the current site's
 * build and the Astro rebuild, copy the rebuilt public pages (English and every
 * language folder), the 404 page and the new sitemap over the current files.
 * App pages (sign in, dashboards, admin), assets, api/ and vercel.json are untouched.
 */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const dist = path.join(root, 'site', 'dist');
const SKIP = new Set(['mockup-home.html']);
let copied = 0;

function copyPages(from, to) {
  for (const f of fs.readdirSync(from)) {
    if (!f.endsWith('.html') || SKIP.has(f)) continue;
    fs.copyFileSync(path.join(from, f), path.join(to, f));
    copied++;
  }
}

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('apply-rebuild: site/dist is missing; run the site build first');
  process.exit(1);
}
copyPages(dist, root);
// Blog and Resources pages (docs/BLOG_PLAN.md): every page folder the build made, such as /blog, /resources,
// /it/blog and /it/risorse (assets, data and language folders are handled elsewhere).
const NOT_PAGES = new Set(['css', 'js', 'images', 'fonts', 'videos', 'data', '_astro', 'downloads']);
function copyBlog(from, to) {
  for (const d of fs.readdirSync(from)) {
    const dir = path.join(from, d);
    if (NOT_PAGES.has(d) || /^[a-z]{2}$/.test(d) || !fs.statSync(dir).isDirectory()) continue;
    if (!fs.readdirSync(dir).some((f) => f.endsWith('.html'))) continue;
    fs.mkdirSync(path.join(to, d), { recursive: true });
    copyPages(dir, path.join(to, d));
  }
}
copyBlog(dist, root);
for (const d of fs.readdirSync(dist)) {
  const dir = path.join(dist, d);
  if (/^[a-z]{2}$/.test(d) && fs.statSync(dir).isDirectory()) { copyPages(dir, path.join(root, d)); copyBlog(dir, path.join(root, d)); }
}
fs.copyFileSync(path.join(dist, 'sitemap.xml'), path.join(root, 'sitemap.xml'));
// Data the rebuilt pages load at run time (level test question banks).
fs.cpSync(path.join(dist, 'data'), path.join(root, 'data'), { recursive: true });
// The build's working copies are not part of the site; drop them so the deployment stays small.
for (const d of ['dist', 'public', 'node_modules']) fs.rmSync(path.join(root, 'site', d), { recursive: true, force: true });
console.log(`apply-rebuild: ${copied} rebuilt pages and sitemap.xml copied over the current site`);
