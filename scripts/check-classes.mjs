// Checks a course of class lessons (docs/LESSONS_PLAN.md): node scripts/check-classes.mjs English-A1
// The course file site/src/data/classes/<course>.js gives the order; each lesson is classes/<course>/<id>.js.
// Board blocks use the book formats (docs/BOOKS.md); exercises on the board exclude speak, memory and search.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const KINDS = ['choice', 'gap', 'order', 'match', 'tf', 'spot', 'odd', 'select', 'wordform', 'transform', 'conjugate', 'crossword', 'build', 'colloc', 'fix', 'bank', 'sort', 'picture', 'label'];
const BLOCKS = ['text', 'table', 'examples', 'tip', 'dialogue', 'reading', 'ex'];
const KIND_OF_LESSON = ['welcome', 'book', 'review', 'conversation', 'exam', 'check'];
let problems = 0;
const bad = (w, m) => { problems++; console.log(w + ': ' + m); };
const str = (w, s) => { if (typeof s !== 'string' || !s.trim()) bad(w, 'missing text'); };

async function load(file) { return import(pathToFileURL(file).href + '?t=' + Date.now()); }

function checkEx(w, b) {
  if (!KINDS.includes(b.kind)) return bad(w, `exercise kind "${b.kind}" cannot be used on the board`);
  str(w + ' h', b.h);
  if (b.kind === 'match') { if (!Array.isArray(b.pairs) || b.pairs.length < 3) bad(w, 'match needs at least three pairs'); return; }
  if (b.kind === 'crossword') { if (!Array.isArray(b.words) || b.words.length < 4 || b.words.length > 8) bad(w, 'crossword needs 4 to 8 words'); return; }
  if (b.kind === 'conjugate') { if (!Array.isArray(b.rows) || !b.rows.length) bad(w, 'conjugate needs rows'); return; }
  if (!Array.isArray(b.items) || !b.items.length) return bad(w, 'no items');
  if (b.kind === 'sort' && (!Array.isArray(b.groups) || b.groups.length < 2)) bad(w, 'sort needs groups');
  b.items.forEach((it, i) => {
    const iw = `${w} item ${i + 1}`;
    str(iw + ' why', it.why);
    if (['gap', 'select', 'bank', 'wordform'].includes(b.kind) && (String(it.q || '').match(/___/g) || []).length !== 1) bad(iw, 'needs exactly one ___');
    if (['choice', 'select', 'odd', 'picture'].includes(b.kind) && (!Array.isArray(it.o) || it.o.length < 2)) bad(iw, 'needs options');
    if (b.kind === 'fix' && (String(it.s || '').match(/\[[^\]]+\]/g) || []).length !== 1) bad(iw, 'needs exactly one [bracket]');
    if (['gap', 'fix', 'transform', 'wordform'].includes(b.kind) && (!Array.isArray(it.a) || !it.a.length)) bad(iw, 'needs accepted answers');
    if (['order', 'build'].includes(b.kind)) str(iw + ' a', it.a);
    if (b.kind === 'tf' && !['t', 'f', 'ng'].includes(it.a)) bad(iw, 'answer must be t, f or ng');
  });
}

function checkBlock(w, b) {
  if (!BLOCKS.includes(b.t)) return bad(w, `unknown block "${b.t}"`);
  if (b.t === 'text' || b.t === 'tip') str(w, b.md);
  if (b.t === 'reading') { str(w + ' title', b.title); str(w, b.md); }
  if (b.t === 'table' && (!Array.isArray(b.head) || !Array.isArray(b.rows) || !b.rows.length)) bad(w, 'table needs head and rows');
  if (b.t === 'examples' && (!Array.isArray(b.items) || !b.items.length)) bad(w, 'examples need items');
  if (b.t === 'dialogue' && (!Array.isArray(b.lines) || b.lines.length < 2)) bad(w, 'dialogue needs lines');
  if (b.t === 'ex') checkEx(w, b);
}

async function checkCourse(id) {
  const { COURSE } = await load(path.join(ROOT, 'site/src/data/classes', id + '.js'));
  const { BOOK } = await load(path.join(ROOT, 'site/src/data/books', COURSE.book + '.js'));
  const unitDir = path.join(ROOT, 'site/src/data/books/units', COURSE.book);
  const lessonsOf = {};
  for (const u of BOOK.units) {
    const f = path.join(unitDir, u.id + '.js');
    if (fs.existsSync(f)) lessonsOf[u.id] = (await load(f)).UNIT.pages.map((p) => p.id);
  }
  const bookRef = (w, ref) => String(ref || '').split(/\s+/).filter(Boolean).forEach((r) => {
    const [u, p] = r.split(':');
    if (!lessonsOf[u]) bad(w, `book unit "${u}" is not written`);
    else if (p && !lessonsOf[u].includes(p)) bad(w, `book lesson "${r}" does not exist`);
  });
  const seen = new Set();
  let written = 0;
  for (const meta of COURSE.lessons) {
    const w = `${id} ${meta.id}`;
    if (seen.has(meta.id)) bad(w, 'duplicate id'); seen.add(meta.id);
    if (!KIND_OF_LESSON.includes(meta.kind)) bad(w, `unknown kind "${meta.kind}"`);
    str(w + ' title', meta.title);
    bookRef(w, meta.book);
    const f = path.join(ROOT, 'site/src/data/classes', id, meta.id + '.js');
    if (!fs.existsSync(f)) { bad(w, 'lesson file missing'); continue; }
    const { LESSON: L } = await load(f);
    written++;
    if (L.id !== meta.id) bad(w, `file id is "${L.id}"`);
    str(w + ' focus', L.focus);
    if (!Array.isArray(L.tips) || L.tips.length < 2) bad(w, 'needs at least two tips');
    (L.tips || []).forEach((x, i) => str(`${w} tip ${i + 1}`, x));
    const mins = (L.plan || []).reduce((n, s) => n + (+s.min || 0), 0);
    if (!Array.isArray(L.plan) || L.plan.length < 3) bad(w, 'plan needs at least three stages');
    else if (mins < 55 || mins > 65) bad(w, `plan adds up to ${mins} minutes, not about ${COURSE.minutes}`);
    (L.plan || []).forEach((s, i) => { str(`${w} plan ${i + 1} title`, s.title); str(`${w} plan ${i + 1}`, s.md); });
    if (!Array.isArray(L.board) || L.board.length < 2 || L.board.length > 8) bad(w, 'board needs 2 to 8 pages');
    (L.board || []).forEach((pg, pi) => {
      const pw = `${w} board ${pi + 1}`;
      str(pw + ' title', pg.title);
      if (!Array.isArray(pg.blocks) || !pg.blocks.length) bad(pw, 'no blocks');
      (pg.blocks || []).forEach((b, bi) => checkBlock(`${pw} block ${bi + 1}`, b));
    });
    ['one', 'small', 'group'].forEach((k) => { const a = (L.activities || {})[k]; if (!a) bad(w, `activity "${k}" missing`); else { str(`${w} activity ${k} title`, a.title); str(`${w} activity ${k}`, a.md); } });
    if (!L.homework) bad(w, 'homework missing'); else { str(w + ' homework', L.homework.md); if (L.homework.book) bookRef(w + ' homework', L.homework.book); }
  }
  console.log(`${id}: ${written} of ${COURSE.lessons.length} lessons written`);
}

const ids = process.argv.slice(2);
for (const id of ids.length ? ids : ['English-A1']) await checkCourse(id);
console.log(problems ? problems + ' problems' : 'ok');
process.exit(problems ? 1 : 0);
