// Checks the help content in site/src/data/help/<lang>/*.js (docs/HELP_PLAN.md, format in site/src/data/help/README.md).
// Usage: node scripts/check-help.mjs [lang]   (default: every language folder)
import { readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'site', 'src', 'data', 'help');
const KINDS = ['answer', 'guide', 'problem'];
const SUBJECTS = ['start', 'classes', 'plans', 'learning', 'tutor', 'account', 'teaching'];
const AUDIENCES = ['student', 'teacher', 'all'];
const AUTOS = ['speaker', 'mic', 'camera', 'browser', 'connection', 'payment', 'access', 'seat', 'next_session', 'email_confirmed'];
const BANNED = [
  [/^\s*(?:[-*•]|\d+[.)])\s/m, 'list item'],
  [/\bstep\s+\d+\b/i, 'step number'],
  [/\b0\d\b\s*\/\s*\d+/, 'step counter'],
  [/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u, 'emoji'],
  [/[€$£]\s?\d|\d\s?(?:€|EUR|USD|MAD)\b/, 'amount'],
  [/\[COPY NEEDED\]|TODO|lorem/i, 'placeholder'],
  [/\b(?:within|in under|in less than)\s+\d+\s+(?:minutes?|hours?|days?|business days?)\b/i, 'promised time (check it is a product rule, not a response time)'],
  [/<[a-z][^>]*>/i, 'HTML']
];

const langs = process.argv[2] ? [process.argv[2]] : readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
let errors = 0, warnings = 0;
const err = (f, m) => { errors++; console.log('ERROR ' + f + ': ' + m); };
const warn = (f, m) => { warnings++; console.log('warn  ' + f + ': ' + m); };

for (const lang of langs) {
  const dir = join(root, lang);
  if (!existsSync(dir)) { console.log('no folder ' + dir); process.exitCode = 1; continue; }
  const files = readdirSync(dir).filter(f => f.endsWith('.js')).sort();
  const items = {};
  for (const f of files) {
    try { items[f] = (await import(pathToFileURL(join(dir, f)).href)).default; }
    catch (e) { err(lang + '/' + f, 'does not load: ' + e.message); }
  }
  const slugs = new Set(Object.values(items).map(x => x && x.slug));
  const count = { answer: 0, guide: 0, problem: 0 };
  for (const [f, x] of Object.entries(items)) {
    const id = lang + '/' + f;
    if (!x || typeof x !== 'object') { err(id, 'no default export'); continue; }
    if (x.slug + '.js' !== f) err(id, 'slug does not match file name');
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(x.slug || '')) err(id, 'bad slug');
    if (x.lang !== lang) err(id, 'lang is not ' + lang);
    if (!KINDS.includes(x.kind)) err(id, 'kind'); else count[x.kind]++;
    if (!SUBJECTS.includes(x.subject)) err(id, 'subject ' + x.subject);
    if (!AUDIENCES.includes(x.audience)) err(id, 'audience ' + x.audience);
    for (const k of ['title', 'summary', 'updated']) if (typeof x[k] !== 'string' || !x[k].trim()) err(id, 'missing ' + k);
    if (!Array.isArray(x.words) || !x.words.length) warn(id, 'no search words');
    if (!Array.isArray(x.body)) err(id, 'body is not an array');
    const texts = [x.title, x.summary];
    for (const b of x.body || []) {
      const keys = Object.keys(b);
      if (b.p !== undefined) texts.push(b.p);
      else if (b.h !== undefined) { texts.push(b.h); if (x.kind === 'answer') warn(id, 'heading in an answer'); }
      else if (b.shot !== undefined) { if (!/^#\//.test(b.shot) || !b.alt) err(id, 'shot needs a #/ route and alt'); }
      else err(id, 'unknown block ' + keys.join(','));
    }
    if (x.kind === 'problem') {
      const c = x.check;
      if (!c || !c.steps || !c.steps[c.start]) err(id, 'problem needs check.start and steps');
      else {
        const seen = new Set(); const queue = [c.start];
        while (queue.length) {
          const s = queue.shift(); if (seen.has(s)) continue; seen.add(s);
          const st = c.steps[s];
          if (!st) { err(id, 'step "' + s + '" does not exist'); continue; }
          if (st.auto && !AUTOS.includes(st.auto)) err(id, 'unknown auto ' + st.auto);
          for (const k of ['ask', 'fix', 'solved']) if (st[k]) texts.push(st[k]);
          const ends = st.solved || st.handover;
          if (st.ask) { if (!st.yes || !st.no) err(id, 'step "' + s + '" asks without yes and no'); queue.push(st.yes, st.no); }
          else if (st.fix) { if (st.next) queue.push(st.next); else if (!st.handover) err(id, 'fix "' + s + '" has no next and no handover'); }
          else if (!ends) err(id, 'step "' + s + '" has no ask, fix, solved or handover');
        }
        for (const s of Object.keys(c.steps)) if (!seen.has(s)) warn(id, 'step "' + s + '" is never reached');
        if (!Object.values(c.steps).some(st => st.handover)) warn(id, 'no handover step');
      }
    } else if (x.check) err(id, 'only problems have a check');
    for (const r of x.related || []) if (!slugs.has(r)) warn(id, 'related "' + r + '" does not exist');
    for (const t of texts) {
      if (typeof t !== 'string') { err(id, 'non-text value'); continue; }
      for (const [re, what] of BANNED) if (re.test(t)) (what.startsWith('promised') ? warn : err)(id, what + ': "' + t.slice(0, 90) + '"');
      if (/\bAI\b|artificial intelligence/i.test(t) && !['tutor', 'teaching', 'learning'].includes(x.subject)) warn(id, 'AI mentioned outside tutor/learning/teaching: check it is a real AI feature');
    }
  }
  console.log(lang + ': ' + files.length + ' files (' + count.answer + ' answers, ' + count.guide + ' guides, ' + count.problem + ' problems)');
}
console.log(errors + ' errors, ' + warnings + ' warnings');
if (errors) process.exitCode = 1;
