// After `astro build`: makes every site language from the English pages in
// dist/, with the same per-page rules as the current site's build.js
// (scripts/localize-page.js), then adds hreflang links to every page and
// writes sitemap.xml. One approved design, every language.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const site = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const root = path.dirname(site);
const dist = path.join(site, 'dist');
const require = createRequire(path.join(root, 'package.json'));
const cheerio = require('cheerio');
const { localizePage } = require('./scripts/localize-page.js');

globalThis.window = {};
new Function(fs.readFileSync(path.join(root, 'js', 'translations.js'), 'utf8'))();
const translations = globalThis.window.ALIMUN_TRANSLATIONS;
const META_I18N = JSON.parse(fs.readFileSync(path.join(root, 'scripts', 'meta-i18n.json'), 'utf8'));
const META_LANG = { ma: 'fr' };

const BASE = 'https://alimun.com';
const languages = Object.keys(translations).filter((l) => l !== 'en');
const HREFLANG = { ma: 'fr-MA' };
// Not public pages: the 404 has no language copies, the mockup is a work file.
const SKIP = new Set(['404.html', 'mockup-home.html']);
const COURSE = /^course--([a-z]{2})--(.+)\.html$/;
const pages = fs.readdirSync(dist).filter((f) => f.endsWith('.html') && !SKIP.has(f) && !COURSE.test(f));
// Course pages are written for one site language each: built at the root as
// course--<site>--<slug>.html and moved to /<site>/<slug>.html (English stays at the root).
const coursePages = fs.readdirSync(dist).filter((f) => COURSE.test(f)).map((f) => {
  const [, site, slug] = f.match(COURSE);
  return { built: f, site, file: slug + '.html' };
});

const url = (lang, file) => {
  const name = file.replace(/\.html$/, '');
  return `${BASE}/${lang === 'en' ? '' : lang + '/'}${name === 'index' ? '' : name}`;
};

// Every page links to all its language versions (search engines pick the right one).
function withAlternates(html, file) {
  const $ = cheerio.load(html);
  $('link[rel="alternate"][hreflang]').remove();
  const links = [`<link rel="alternate" hreflang="x-default" href="${url('en', file)}">`,
    `<link rel="alternate" hreflang="en" href="${url('en', file)}">`,
    ...languages.map((l) => `<link rel="alternate" hreflang="${HREFLANG[l] || l}" href="${url(l, file)}">`)];
  $('head').append('\n  ' + links.join('\n  ') + '\n');
  return $.html();
}

// The English translation file must load before i18n.js (the language copies are added after it).
function withEnglishFile(html) {
  if (html.includes('js/i18n/en.js') || !html.includes('<script src="js/i18n.js"')) return html;
  return html.replace('<script src="js/i18n.js"', '<script src="js/i18n/en.js" defer></script>\n  <script src="js/i18n.js"');
}

// Homepage course list (src/blocks/home/languages.html): each site language links to its own course
// pages, with their video and a structured-data list of the courses. Sites without course pages drop it.
const courseSites = {};
for (const f of fs.readdirSync(path.join(site, 'src', 'data', 'course-sites')).filter((f) => f.endsWith('.js'))) {
  const S = (await import(new URL(`../src/data/course-sites/${f}`, import.meta.url))).default;
  courseSites[S.site] = S;
}
const coursePath = (S, c) => `/${S.site === 'en' ? '' : S.site + '/'}${c.slug}`;
function withCourseList(html, lang) {
  if (!html.includes('data-course-list')) return html;
  const $ = cheerio.load(html);
  const S = courseSites[lang];
  if (!S) { $('section.ln').remove(); return $.html(); }
  const list = $('[data-course-list]'), media = $('[data-course-media]');
  for (const c of S.courses) {
    const row = $('<li class="ln_row"><a class="ln_link"><span class="ln_title"></span></a></li>');
    // The row shows the language name alone (owner); the full course name stays in the link title and the list below.
    row.find('a').attr('href', coursePath(S, c)).attr('title', S.heroTitle(c));
    row.find('.ln_title').text(c.name.charAt(0).toLocaleUpperCase(S.locale.replace('_', '-')) + c.name.slice(1));
    list.append(row);
    const v = `/videos/${c.video}`;
    media.append(`<div class="ln_video"><video muted loop playsinline preload="none" poster="${v}-poster-00001.jpg"><source src="${v}-transcode.mp4" type="video/mp4"><source src="${v}-transcode.webm" type="video/webm"></video></div>`);
  }
  const ld = { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: S.courses.map((c, i) => ({
    '@type': 'ListItem', position: i + 1, url: BASE + coursePath(S, c),
    item: { '@type': 'Course', name: S.heroTitle(c), description: S.metaDesc(c), url: BASE + coursePath(S, c),
      provider: { '@type': 'Organization', name: 'Alimun', sameAs: BASE } } })) };
  $('head').append(`\n  <script type="application/ld+json">${JSON.stringify(ld).replace(/</g, '\\u003c')}</script>\n`);
  return $.html();
}

let count = 0;
for (const file of pages) {
  const english = withEnglishFile(fs.readFileSync(path.join(dist, file), 'utf8'));
  fs.writeFileSync(path.join(dist, file), withAlternates(withCourseList(english, 'en'), file));
  for (const lang of languages) {
    fs.mkdirSync(path.join(dist, lang), { recursive: true });
    const html = localizePage(english, { lang, templateFile: file, langDict: translations[lang] || {}, META_I18N, META_LANG });
    fs.writeFileSync(path.join(dist, lang, file), withAlternates(withCourseList(html, lang), file));
    count++;
  }
}

for (const p of coursePages) {
  const english = withEnglishFile(fs.readFileSync(path.join(dist, p.built), 'utf8'));
  const html = p.site === 'en' ? english
    : localizePage(english, { lang: p.site, templateFile: p.file, langDict: translations[p.site] || {}, META_I18N, META_LANG });
  const $ = cheerio.load(html);
  $('link[rel="alternate"][hreflang]').remove();
  $('head').append(`\n  <link rel="alternate" hreflang="${HREFLANG[p.site] || p.site}" href="${url(p.site, p.file)}">\n`);
  fs.writeFileSync(path.join(dist, p.site === 'en' ? '' : p.site, p.file), $.html());
  fs.rmSync(path.join(dist, p.built));
  count++;
}

const today = new Date().toISOString().slice(0, 10);
const entries = [];
for (const file of pages) {
  const alts = [['x-default', url('en', file)], ['en', url('en', file)], ...languages.map((l) => [HREFLANG[l] || l, url(l, file)])]
    .map(([h, u]) => `    <xhtml:link rel="alternate" hreflang="${h}" href="${u}"/>`).join('\n');
  for (const lang of ['en', ...languages]) entries.push(`  <url>\n    <loc>${url(lang, file)}</loc>\n${alts}\n    <lastmod>${today}</lastmod>\n  </url>`);
}
for (const p of coursePages) entries.push(`  <url>\n    <loc>${url(p.site, p.file)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
// Keep addresses the current sitemap lists that are not rebuilt yet (the Italian course pages).
const covered = new Set([...pages.flatMap((f) => ['en', ...languages].map((l) => url(l, f))), ...coursePages.map((p) => url(p.site, p.file))]);
const current = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
for (const block of current.match(/<url>[\s\S]*?<\/url>/g) || []) {
  const loc = (block.match(/<loc>([^<]+)<\/loc>/) || [])[1];
  if (loc && !covered.has(loc)) entries.push('  ' + block.trim());
}
fs.writeFileSync(path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`);
fs.copyFileSync(path.join(root, 'robots.txt'), path.join(dist, 'robots.txt'));
console.log(`localize: ${count} language pages from ${pages.length} English pages, sitemap with ${entries.length} addresses`);
