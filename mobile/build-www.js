/**
 * The files packaged inside the store apps (docs/APP_PLAN.md, step 3): the learners' app as the site builds it
 * (run `npm run build` at the root first), copied into mobile/www at the same paths. The app's native layer
 * (android/app/src/main/java/com/alimun/app/MainActivity.java) serves them at https://alimun.com/... so the app
 * opens from the device, even the first time and without a connection; every other address (sign-in, /api, /data,
 * Supabase, Stripe) goes to the network as on the website.
 *
 * The Supabase library comes from its CDN at the exact version and integrity the app page names, checked here.
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.join(__dirname, '..');
const www = path.join(__dirname, 'www');

const FILES = [
  'css/app.css',
  'fonts/Satoshi-Variable.ttf', 'fonts/coolvetica-condensed-rg.otf',
  'js/banner.js', 'js/app/launch-pop.js', 'js/app/poll.js',
  'images/favicon.svg', 'images/favicon-48.png',
  'images/app/icon-192.png', 'images/app/icon-512.png', 'images/app/icon-maskable-512.png', 'images/app/apple-touch-icon.png',
  'images/pexels-6599010-tool.jpg', 'images/pexels-diimejii-3466163-p-800.jpg', 'images/pexels-katerina-holmes-5905749-p-1080.jpg',
  'app/manifest.webmanifest',
];
const DIRS = ['js/app/dist'];

function copy(rel) {
  const to = path.join(www, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(path.join(root, rel), to);
}

async function main() {
  const page = fs.readFileSync(path.join(root, 'app/index.html'), 'utf8');
  if (!/dist\/app\.js\?v=/.test(page)) throw new Error('app/index.html has no bundled script: run `npm run build` at the root first');
  fs.rmSync(www, { recursive: true, force: true });
  fs.mkdirSync(www, { recursive: true });
  /* The app page is served for /app (and /, where the app starts) */
  fs.writeFileSync(path.join(www, 'index.html'), page);
  FILES.forEach(copy);
  for (const d of DIRS) for (const f of fs.readdirSync(path.join(root, d))) copy(d + '/' + f);
  for (const f of fs.readdirSync(path.join(root, 'js/i18n'))) if (/\.app\.js$/.test(f)) copy('js/i18n/' + f);

  const m = page.match(/<script src="(https:\/\/cdn\.jsdelivr\.net\/npm\/@supabase\/supabase-js@[^"]+)" integrity="(sha384-[^"]+)"/);
  if (!m) throw new Error('app/index.html: Supabase script not found');
  const r = await fetch(m[1]);
  if (!r.ok) throw new Error('Supabase library: ' + r.status);
  const body = Buffer.from(await r.arrayBuffer());
  const sri = 'sha384-' + crypto.createHash('sha384').update(body).digest('base64');
  if (sri !== m[2]) throw new Error('Supabase library does not match the integrity in app/index.html');
  fs.mkdirSync(path.join(www, 'vendor'), { recursive: true });
  fs.writeFileSync(path.join(www, 'vendor/supabase.js'), body);
  fs.writeFileSync(path.join(www, 'vendor/supabase.url'), m[1]);

  let n = 0, bytes = 0;
  (function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else { n++; bytes += fs.statSync(p).size; } } })(www);
  console.log(`build-www: ${n} files, ${(bytes / 1048576).toFixed(1)} MB in mobile/www`);
}
main().catch((e) => { console.error('build-www:', e.message); process.exit(1); });
