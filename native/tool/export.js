/**
 * What the native app takes from the site (docs/NATIVE_APP_PLAN.md). Run from the repository root after changing
 * the texts, the drawings or the fonts:  node native/tool/export.js
 * - native/assets/i18n/<lang>.json: the app's texts in the nine languages, from js/translations.js (the only place
 *   text is written): the dashboard keys (app_*), the account keys (au_*) and the level names (lt_name_*).
 * - native/assets/art/<name>.svg: the approved drawing cast (js/app/cast.js), the book character, the logo mark and
 *   the wordmark.
 * - native/assets/fonts: Satoshi and Coolvetica Condensed.
 */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..', '..');
const out = path.join(__dirname, '..', 'assets');
const mk = (d) => fs.mkdirSync(path.join(out, d), { recursive: true });
mk('i18n'); mk('art'); mk('fonts');

/* Texts */
const w = {};
new Function('window', fs.readFileSync(path.join(root, 'js/translations.js'), 'utf8'))(w);
const T = w.ALIMUN_TRANSLATIONS;
if (!T || !T.en || !T.en.au_signin || !T.en.app_nav_home) throw new Error('js/translations.js: texts not found');
let keys = 0;
for (const lang of Object.keys(T)) {
  const d = {};
  for (const [k, v] of Object.entries(T[lang])) if (/^(app_|au_|lt_name_)/.test(k)) d[k] = v;
  keys = Math.max(keys, Object.keys(d).length);
  fs.writeFileSync(path.join(out, 'i18n', lang + '.json'), JSON.stringify(d));
}

/* Drawings */
global.window = {};
require(path.join(root, 'js/app/cast.js'));
const C = global.window.AlimunCast;
const src = fs.readFileSync(path.join(root, 'js/app/cast.js'), 'utf8');
const D = JSON.parse(src.match(/var DRAWINGS = (\{.*?\});\n/s)[1]);
const clean = (svg) => svg.replace(/ (aria-hidden|focusable|role|aria-label)="[^"]*"/g, '').replace(/ class="[^"]*"/g, '');
let n = 0;
for (const g of Object.keys(D)) for (const name of Object.keys(D[g])) { fs.writeFileSync(path.join(out, 'art', name + '.svg'), clean(C.drawing(name))); n++; }
fs.writeFileSync(path.join(out, 'art', 'book.svg'), clean(C.book('idle')));
fs.writeFileSync(path.join(out, 'art', 'wordmark.svg'), clean(C.wordmark().replace('<path class="wordmark__letters"', '<path fill="#1a443c"')));
fs.writeFileSync(path.join(out, 'art', 'mark.svg'),
  '<svg viewBox="290 360 445 445" xmlns="http://www.w3.org/2000/svg">' + C.logoPath.replace(/ class="[^"]*"/g, '') +
  '<circle fill="#d5af33" cx="453" cy="605" r="19"/><circle fill="#d5af33" cx="574" cy="605" r="19"/></svg>');

/* Countries: the site's list (js/country.js), with their names in each language */
global.self = global;
require(path.join(root, 'js/country.js'));
const CODES = global.AlimunCountry.codes;
const countries = {};
for (const lang of ['en', 'es', 'fr', 'de', 'pt', 'it', 'zh', 'ar']) {
  const dn = new Intl.DisplayNames([lang], { type: 'region' });
  countries[lang] = CODES.map((c) => [c, dn.of(c) || c]).sort((x, y) => x[1].localeCompare(y[1], lang));
}
fs.writeFileSync(path.join(out, 'countries.json'), JSON.stringify(countries));

/* Fonts */
for (const f of ['Satoshi-Variable.ttf', 'coolvetica-condensed-rg.otf']) fs.copyFileSync(path.join(root, 'fonts', f), path.join(out, 'fonts', f));
console.log(`export: ${Object.keys(T).length} languages (${keys} texts), ${n + 3} drawings, 2 fonts in native/assets`);
