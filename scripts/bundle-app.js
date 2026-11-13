/**
 * The app's script, bundled (docs/APP_PLAN.md, step 2). The learners' app (/app) loads one minified file instead of
 * about 35; the tutor, the live classroom and the payment window are separate files loaded when first opened
 * (js/app/lazy.js). The source files in js/ stay as they are and are still loaded one by one by the teacher and
 * admin pages.
 *
 * Writes js/app/dist/app.js, js/app/dist/<chunk>.js and puts their version (a hash of the content) into
 * app/index.html and app-sw.js between the "app-bundle" markers. Part of `npm run build`; commit the results.
 * A size budget is checked here: the build fails if the main file grows past BUDGET_KB once gzipped.
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');
const esbuild = require('esbuild');

const root = path.join(__dirname, '..');
const BUDGET_KB = 175;

/* In the order the page used to load them; shell.js last */
const CORE = [
  'js/app/lazy.js', 'js/app/cast.js', 'js/app/cast3.js', 'js/app/sample-data.js', 'js/app/device.js', 'js/app/data.js', 'js/app/offline.js',
  'js/app/feel.js', 'js/app/exercises.js', 'js/app/reader.js', 'js/app/practice.js', 'js/app/cards.js', 'js/app/tests.js',
  'js/app/library.js', 'js/tz.js', 'js/app/find.js', 'js/app/classes.js', 'js/app/homework.js', 'js/app/progress.js',
  'js/app/messages.js', 'js/app/plans.js', 'js/country.js', 'js/app/prefs.js', 'js/app/withdraw.js', 'js/app/settings.js',
  'js/app/bell.js', 'js/app/shell.js',
];
const CHUNKS = {
  tutor: ['js/app/lipsync.js', 'js/app/tutor-live.js', 'js/app/tutor.js'],
  classroom: ['js/app/board.js', 'js/app/classroom.js'],
  pay: ['js/app/pay.js'],
};

function join(files) {
  return files.map((f) => {
    const src = fs.readFileSync(path.join(root, f), 'utf8').replace(/\r\n/g, '\n');
    return `/* ${f} */\n${src.trim()}\n;\n`;
  }).join('\n');
}
function minify(code, name) {
  const out = esbuild.transformSync(code, { minify: true, target: 'es2017', legalComments: 'none', charset: 'utf8', sourcefile: name });
  return out.code;
}
function hash(s) { return crypto.createHash('sha256').update(s).digest('hex').slice(0, 10); }
function between(file, start, end, body) {
  const p = path.join(root, file);
  const raw = fs.readFileSync(p, 'utf8');
  const nl = raw.includes('\r\n') ? '\r\n' : '\n';
  const a = raw.indexOf(start), b = raw.indexOf(end);
  if (a < 0 || b < a) throw new Error(`${file}: markers ${start} … ${end} not found`);
  const next = raw.slice(0, a + start.length) + nl + body.replace(/\n/g, nl) + nl + raw.slice(b);
  if (next !== raw) fs.writeFileSync(p, next);
}

const dist = path.join(root, 'js', 'app', 'dist');
fs.mkdirSync(dist, { recursive: true });
const urls = {};
for (const name of Object.keys(CHUNKS)) {
  const code = minify(join(CHUNKS[name]), name + '.js');
  fs.writeFileSync(path.join(dist, name + '.js'), code);
  urls[name] = `/js/app/dist/${name}.js?v=${hash(code)}`;
}
const core = minify(`window.ALIMUN_CHUNKS=${JSON.stringify(urls)};\n` + join(CORE), 'app.js');
fs.writeFileSync(path.join(dist, 'app.js'), core);
const coreUrl = `/js/app/dist/app.js?v=${hash(core)}`;

between('app/index.html', '<!-- app-bundle -->', '<!-- /app-bundle -->', `<script src="${coreUrl}" defer></script>`);
between('app-sw.js', '/* app-bundle */', '/* /app-bundle */', `var BUNDLE = ${JSON.stringify(coreUrl)};`);

const gz = zlib.gzipSync(core, { level: 9 }).length / 1024;
const sizes = Object.keys(CHUNKS).map((n) => `${n} ${(fs.statSync(path.join(dist, n + '.js')).size / 1024).toFixed(0)} kB`).join(', ');
console.log(`bundle-app: app.js ${(core.length / 1024).toFixed(0)} kB (${gz.toFixed(0)} kB gzipped, budget ${BUDGET_KB} kB); loaded when opened: ${sizes}`);
if (gz > BUDGET_KB) {
  console.error(`bundle-app: app.js is ${gz.toFixed(0)} kB gzipped, over the ${BUDGET_KB} kB budget (docs/APP_PLAN.md, step 2)`);
  process.exit(1);
}
