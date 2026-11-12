/**
 * The free limit (docs/APP_PLAN.md, owner's decisions of 12 Nov 2026), applied at deploy time after the site build
 * has written the course material to data/.
 *
 * - The public files in data/ keep only what a free account may use: the first 3 units of every course book, the
 *   first 2 texts of every library shelf, the first 3 exercise kinds of every "Every kind of exercise" set and the
 *   first paper of every mock test; the recording plans (data/audio) keep only the lines of those parts. Everything
 *   after that is replaced by a short entry (id, title, locked: true), so the app can show what comes with a plan.
 * - The complete files are written, gzipped, to private/material/<same path>.gz. They are never served as files
 *   (vercel.json answers 404 for /private) and are read only by api/material.js, after it has checked the sign-in and
 *   the plan, and by the tutor and the mock-test marking on the server (api/_lib/material.js).
 *
 * Run: node scripts/split-material.js   (part of `npm run build:site`, after scripts/apply-rebuild.js)
 */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { FREE } = require('../api/_lib/free-limit.js');

const root = path.join(__dirname, '..');
const data = path.join(root, 'data');
const priv = path.join(root, 'private', 'material');

function lockBook(b) {
  let seen = 0, locked = 0;
  b.units = (b.units || []).map((u) => {
    if (u.planned) return u;
    seen++;
    if (seen <= FREE.bookUnits) return u;
    locked++;
    // planned: true keeps every screen that lists written units from opening it; the reader shows it as locked
    return { id: u.id, title: u.title, goal: u.goal, art: u.art, locked: true, planned: true, pages: [] };
  });
  return locked;
}
function lockShelf(s) {
  let locked = 0;
  s.pieces = (s.pieces || []).map((p, i) => {
    if (i < FREE.libraryPieces) return p;
    locked++;
    return { id: p.id, kind: p.kind, genre: p.genre, minutes: p.minutes, topics: p.topics, title: p.title, about: p.about, locked: true };
  });
  return locked;
}
function lockSet(s) {
  let locked = 0;
  s.blocks = (s.blocks || []).map((b, i) => {
    if (i < FREE.practiceBlocks) return b;
    locked++;
    return { t: b.t, kind: b.kind, h: b.h, locked: true };
  });
  return locked;
}
function lockTest(x) {
  let locked = 0;
  x.papers = (x.papers || []).map((p, i) => {
    if (i < FREE.testPapers) return p;
    locked++;
    return { id: p.id, title: p.title, minutes: p.minutes, locked: true, parts: [] };
  });
  return locked;
}

const KINDS = { books: lockBook, library: lockShelf, practice: lockSet, tests: lockTest };
const SKIP = new Set(['index.json', 'preview.json', 'pictures.json']);

if (!fs.existsSync(data)) {
  console.error('split-material: data/ is missing; run the site build first');
  process.exit(1);
}
fs.rmSync(priv, { recursive: true, force: true });
let files = 0, parts = 0, bytes = 0;
for (const kind of Object.keys(KINDS)) {
  const dir = path.join(data, kind);
  if (!fs.existsSync(dir)) continue;
  fs.mkdirSync(path.join(priv, kind), { recursive: true });
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.json') || SKIP.has(f)) continue;
    const file = path.join(dir, f);
    const raw = fs.readFileSync(file, 'utf8');
    const doc = JSON.parse(raw);
    const n = KINDS[kind](doc);
    if (!n) continue;
    const gz = zlib.gzipSync(raw, { level: 9 });
    fs.writeFileSync(path.join(priv, kind, f + '.gz'), gz);
    doc.limited = true;
    fs.writeFileSync(file, JSON.stringify(doc));
    files++; parts += n; bytes += gz.length;
  }
}
// Recording plans (data/audio/<id>.json) hold the text of every line: keep the free parts' lines in public. Item keys
// start with the unit (books), the text (library) or the paper (tests) they belong to.
const audioDir = path.join(data, 'audio');
function freeIds(id) {
  const read = (rel) => { try { return JSON.parse(fs.readFileSync(path.join(data, rel), 'utf8')); } catch (e) { return null; } };
  const book = read(`books/${id}.en.json`);
  if (book) return book.limited ? book.units.filter((u) => !u.locked).map((u) => u.id) : null;
  const shelf = read(`library/${id}.en.json`);
  if (shelf) return shelf.limited ? shelf.pieces.filter((x) => !x.locked).map((x) => x.id) : null;
  const test = read(`tests/${id}.json`);
  if (test) return test.limited ? test.papers.filter((x) => !x.locked).map((x) => x.id) : null;
  return null;
}
if (fs.existsSync(audioDir)) {
  fs.mkdirSync(path.join(priv, 'audio'), { recursive: true });
  for (const f of fs.readdirSync(audioDir)) {
    if (!f.endsWith('.json')) continue;
    const keep = freeIds(f.replace(/\.json$/, ''));
    if (!keep) continue;
    const file = path.join(audioDir, f);
    const raw = fs.readFileSync(file, 'utf8');
    const doc = JSON.parse(raw);
    const items = {};
    let n = 0;
    for (const k of Object.keys(doc.items || {})) {
      if (keep.includes(k.split(':')[0])) items[k] = doc.items[k]; else n++;
    }
    if (!n) continue;
    fs.writeFileSync(path.join(priv, 'audio', f + '.gz'), zlib.gzipSync(raw, { level: 9 }));
    doc.items = items;
    doc.limited = true;
    fs.writeFileSync(file, JSON.stringify(doc));
    files++; parts += n;
  }
}
console.log(`split-material: ${parts} parts in ${files} files kept for paying learners (${(bytes / 1048576).toFixed(1)} MB gzipped in private/material)`);
