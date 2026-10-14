// Syntax-checks every first-party JS file and every inline <script> in the
// root HTML pages and the generated locale copies. Exits 1 on the first
// batch of failures so CI blocks the PR.
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const cheerio = require('cheerio');

const root = path.resolve(__dirname, '..', '..');
const LOCALES = ['ar', 'de', 'es', 'fr', 'it', 'ma', 'pt', 'zh'];
const SKIP_JS = new Set(['js/webflow.js']);
const JS_TYPES = new Set(['', 'text/javascript', 'application/javascript', 'module']);

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, out);
    else if (name.endsWith('.js')) out.push(p);
  }
  return out;
}

// EXTRACT_DIR=<dir> keeps the extracted inline scripts (named
// <page>__L<line>.js) so Semgrep can scan them; otherwise a temp dir is used.
const keep = process.env.EXTRACT_DIR;
const tmp = keep ? path.resolve(keep) : fs.mkdtempSync(path.join(os.tmpdir(), 'inline-js-'));
if (keep) fs.mkdirSync(tmp, { recursive: true });
const failures = [];
let checked = 0;

function check(file, label) {
  checked++;
  try {
    execFileSync(process.execPath, ['--check', file], { stdio: 'pipe' });
  } catch (e) {
    failures.push(`${label}\n${String(e.stderr || e.message).trim()}`);
  }
}

// Standalone first-party JS
const jsFiles = [
  ...walk(path.join(root, 'api')),
  ...walk(path.join(root, 'js')),
  ...walk(path.join(root, 'scripts')),
  path.join(root, 'build.js'),
  path.join(root, 'verify.js'),
].filter((f) => fs.existsSync(f) && !SKIP_JS.has(path.relative(root, f).split(path.sep).join('/')));
jsFiles.forEach((f) => check(f, path.relative(root, f)));

// Inline scripts
const htmlFiles = [];
for (const dir of ['.', ...LOCALES]) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) continue;
  for (const name of fs.readdirSync(abs)) {
    if (name.endsWith('.html')) htmlFiles.push(path.join(abs, name));
  }
}

for (const file of htmlFiles) {
  const rel = path.relative(root, file);
  const src = fs.readFileSync(file, 'utf8');
  const $ = cheerio.load(src, { sourceCodeLocationInfo: true });
  $('script').each((i, el) => {
    if ($(el).attr('src')) return;
    const type = ($(el).attr('type') || '').trim().toLowerCase();
    if (!JS_TYPES.has(type)) return;
    const code = $(el).html() || '';
    if (!code.trim()) return;
    const line = el.sourceCodeLocation ? el.sourceCodeLocation.startLine : '?';
    const ext = type === 'module' ? '.mjs' : '.js';
    const out = path.join(tmp, `${rel.replace(/[\\/]/g, '__')}__L${line}${ext}`);
    fs.writeFileSync(out, code);
    check(out, `${rel} inline <script> #${i} (line ${line})`);
  });
}

if (!keep) fs.rmSync(tmp, { recursive: true, force: true });
if (failures.length) {
  console.error(`Syntax errors in ${failures.length} of ${checked} scripts:\n`);
  console.error(failures.join('\n\n'));
  process.exit(1);
}
console.log(`OK: ${checked} scripts pass node --check`);
