/**
 * Help articles for the dashboards and the help assistant (docs/HELP_PLAN.md, Part 2).
 * Reads site/src/data/help/<lang>/*.js and writes js/help/<lang>.json with the owner-approved articles only.
 * The dashboards fetch /js/help/<lang>.json; api/help.js requires the same files, so both read the same text.
 * Part of `npm run build`; commit the results.
 */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const root = path.join(__dirname, '..');
const src = path.join(root, 'site', 'src', 'data', 'help');
const out = path.join(root, 'js', 'help');
const KEEP = ['slug', 'section', 'subject', 'audience', 'updated', 'title', 'summary', 'body', 'related'];

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const langs = fs.readdirSync(src).filter((d) => /^[a-z]{2}$/.test(d) && fs.statSync(path.join(src, d)).isDirectory());
  for (const lang of langs) {
    const dir = path.join(src, lang);
    const articles = [];
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.js')).sort()) {
      const a = (await import(pathToFileURL(path.join(dir, f)).href)).default;
      if (!a || a.slug !== f.slice(0, -3)) throw new Error(`help ${lang}/${f}: slug does not match the file name`);
      if (a.status !== 'approved') continue;
      const o = {}; for (const k of KEEP) o[k] = a[k];
      articles.push(o);
    }
    const slugs = new Set(articles.map((a) => a.slug));
    for (const a of articles) a.related = (a.related || []).filter((r) => slugs.has(r));
    const json = JSON.stringify({ lang, articles }) + '\n';
    const file = path.join(out, lang + '.json');
    if (!fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== json) fs.writeFileSync(file, json);
    console.log(`help: ${lang} ${articles.length} approved articles`);
  }
})().catch((e) => { console.error(e); process.exit(1); });
