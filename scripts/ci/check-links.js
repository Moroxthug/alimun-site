// Offline link checker: every sitemap URL and every local href/src in the
// root and locale HTML must resolve to a file in the repo (cleanUrls aware).
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const root = path.resolve(__dirname, '..', '..');
const DIRS = ['.', 'ar', 'de', 'es', 'fr', 'it', 'ma', 'pt', 'zh'];
const broken = [];

function resolves(urlPath) {
  let p = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (p.startsWith('/api/')) return true; // serverless, checked elsewhere
  const abs = path.join(root, p);
  const candidates = p.endsWith('/') ? [path.join(abs, 'index.html')] : [abs, abs + '.html', path.join(abs, 'index.html')];
  return candidates.some((c) => fs.existsSync(c) && fs.statSync(c).isFile());
}

const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const m of sitemap.matchAll(/<loc>https:\/\/alimun\.com([^<]*)<\/loc>/g)) {
  if (!resolves(m[1] || '/')) broken.push(`sitemap.xml: ${m[1]}`);
}

for (const dir of DIRS) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) continue;
  for (const name of fs.readdirSync(abs).filter((n) => n.endsWith('.html'))) {
    const rel = path.join(dir, name);
    const $ = cheerio.load(fs.readFileSync(path.join(abs, name), 'utf8'));
    $('a[href], link[href], script[src], img[src], source[src], video[src], video[poster]').each((_, el) => {
      for (const attr of ['href', 'src', 'poster']) {
        const v = ($(el).attr(attr) || '').trim();
        if (!v || /^(https?:|mailto:|tel:|data:|javascript:|#|\/\/)/i.test(v) || v.includes('${')) continue;
        const target = v.startsWith('/') ? v : '/' + path.posix.join(dir === '.' ? '' : dir, v);
        if (!resolves(path.posix.normalize(target))) broken.push(`${rel}: ${attr}="${v}"`);
      }
    });
  }
}

const uniq = [...new Set(broken)];
if (uniq.length) {
  console.error(`${uniq.length} broken local links:\n  ` + uniq.join('\n  '));
  process.exit(1);
}
console.log('OK: all local links and sitemap URLs resolve');
