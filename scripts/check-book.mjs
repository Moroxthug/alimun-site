// Checks a course book and its unit files against docs/BOOKS.md: node scripts/check-book.mjs English-A2 [more ids]
// Practice sets: node scripts/check-book.mjs --sets (every set in site/src/data/practice).
// Prints every problem and exits with 1 if there is one. Run it after writing or changing a unit.
import { loadBook, loadSet, setIds } from './book-lib.mjs';

const CAST = ['owl', 'parrot', 'cat', 'snail', 'dog', 'teacup', 'pretzel', 'croissant', 'pizza', 'churro', 'nata', 'dragon', 'alien', 'ghost', 'suitcase', 'cactus', 'mug', 'sun', 'monster'];
const KINDS = ['choice', 'gap', 'order', 'match', 'tf', 'spot', 'odd', 'select', 'wordform', 'transform', 'conjugate', 'crossword', 'build', 'colloc', 'fix', 'bank', 'sort', 'memory', 'search'];
/* Games that only make sense with feedback straight away: not in unit tests */
const LESSON_ONLY = ['memory', 'search'];
const EMOJI = /\p{Extended_Pictographic}/u;
let problems = 0;

const args = process.argv.slice(2);
if (args[0] === '--sets') {
  for (const id of setIds()) {
    const bad = (where, msg) => { problems++; console.log(`${id} ${where}: ${msg}`); };
    const set = await loadSet(id);
    if (set.id !== id) bad('set', `id is ${set.id}`);
    if (!set.title || !set.language || !set.level) bad('set', 'needs title, language and level');
    let n = 0;
    (set.blocks || []).forEach((b, i) => { if (b.t !== 'ex') bad(`block ${i + 1}`, 'practice sets hold exercises only'); else n += exCheck(bad, `block ${i + 1}`, b); });
    console.log(`${id}: ${(set.blocks || []).length} exercises, ${n} items`);
  }
}

for (const id of args.filter((a) => !a.startsWith('--'))) {
  const bad = (where, msg) => { problems++; console.log(`${id} ${where}: ${msg}`); };
  let book;
  try { ({ book } = await loadBook(id)); } catch (e) { bad('file', e.message); continue; }
  if (book.id !== id) bad('book', `id is ${book.id}`);
  const str = (where, s, need = true) => {
    if (s == null || s === '') { if (need) bad(where, 'missing text'); return; }
    if (typeof s !== 'string') { bad(where, 'not text'); return; }
    if ((s.match(/\*/g) || []).length % 2) bad(where, 'odd number of * in: ' + s.slice(0, 60));
    if (EMOJI.test(s)) bad(where, 'emoji');
    if (/(^|\n)\s*\d+[.)]\s/.test(s)) bad(where, 'numbered list');
  };
  const ids = new Set();
  let written = 0, items = 0;
  book.units.forEach((u) => {
    if (ids.has(u.id)) bad(u.id, 'duplicate unit id'); ids.add(u.id);
    str(`${u.id} title`, u.title);
    if (u.planned) return;
    written++;
    str(`${u.id} goal`, u.goal);
    if (!CAST.includes(u.art)) bad(u.id, `art "${u.art}" is not in the cast`);
    if (!Array.isArray(u.pages) || u.pages.length < 3) bad(u.id, 'needs at least three lessons');
    const pids = new Set();
    (u.pages || []).forEach((p) => {
      const w = `${u.id}/${p.id}`;
      if (pids.has(p.id)) bad(w, 'duplicate lesson id'); pids.add(p.id);
      str(`${w} title`, p.title); str(`${w} about`, p.about);
      if (!CAST.includes(p.art)) bad(w, `art "${p.art}" is not in the cast`);
      if (!Array.isArray(p.spreads) || p.spreads.length < 2) bad(w, 'needs at least two pages (spreads)');
      let ex = 0;
      (p.spreads || []).forEach((sp, si) => {
        if (!Array.isArray(sp) || !sp.length) { bad(`${w} page ${si + 1}`, 'empty page'); return; }
        sp.forEach((b, bi) => { if (b.t === 'ex') ex++; items += block(`${w} page ${si + 1} block ${bi + 1}`, b); });
      });
      if (!ex) bad(w, 'a lesson needs at least one exercise');
    });
    if (!Array.isArray(u.test) || !u.test.length) bad(u.id, 'no unit test');
    let tItems = 0;
    (u.test || []).forEach((b, bi) => {
      if (b.t !== 'ex') bad(`${u.id} test ${bi + 1}`, 'tests hold exercises only');
      if (LESSON_ONLY.includes(b.kind)) bad(`${u.id} test ${bi + 1}`, `${b.kind} is for lessons only`);
      tItems += block(`${u.id} test ${bi + 1}`, b);
    });
    if (tItems < 8) bad(`${u.id} test`, `only ${tItems} questions (at least 8)`);
  });
  console.log(`${id}: ${written} written units, ${items} exercise items in lessons`);

  function block(w, b) {
    switch (b.t) {
      case 'text': case 'tip': str(w, b.md); if (b.t === 'tip' && b.art && !CAST.includes(b.art)) bad(w, 'tip art not in the cast'); return 0;
      case 'reading': str(w, b.md); str(w + ' title', b.title, false); return 0;
      case 'examples':
        if (!b.items || !b.items.length) bad(w, 'no examples');
        (b.items || []).forEach((x, i) => { str(`${w} example ${i + 1}`, x.s); str(`${w} note ${i + 1}`, x.n, false); });
        return 0;
      case 'table':
        str(w + ' caption', b.caption, false);
        if (!Array.isArray(b.head) || !Array.isArray(b.rows) || !b.rows.length) { bad(w, 'table needs head and rows'); return 0; }
        b.rows.forEach((r, i) => { if (r.length !== b.head.length) bad(w, `row ${i + 1} has ${r.length} cells, head has ${b.head.length}`); r.forEach((c) => str(w, c, false)); });
        (b.explain || []).forEach((e) => { if (!/^(head|col\d+)$/.test(e)) bad(w, `explain "${e}"`); });
        return 0;
      case 'dialogue':
        if (!b.lines || b.lines.length < 2) bad(w, 'dialogue needs lines');
        (b.lines || []).forEach((l, i) => { str(`${w} line ${i + 1} who`, l.who); str(`${w} line ${i + 1}`, l.s); });
        return 0;
      case 'ex': return ex(w, b);
      default: bad(w, `unknown block type "${b.t}"`); return 0;
    }
  }
  function ex(w, b) { return exCheck(bad, w, b); }
}
/* One exercise block against docs/BOOKS.md; returns how many items it has */
function exCheck(bad, w, b) {
  const str = (where, s, need = true) => {
    if (s == null || s === '') { if (need) bad(where, 'missing text'); return; }
    if (typeof s !== 'string') { bad(where, 'not text'); return; }
    if ((s.match(/\*/g) || []).length % 2) bad(where, 'odd number of * in: ' + s.slice(0, 60));
    if (EMOJI.test(s)) bad(where, 'emoji');
    if (/(^|\n)\s*\d+[.)]\s/.test(s)) bad(where, 'numbered list');
  };
  const oneGap = (iw, q) => { if ((String(q).match(/___/g) || []).length !== 1) bad(iw, 'needs exactly one ___'); };
  const answers = (iw, a) => { if (!Array.isArray(a) || !a.length || a.some((x) => !String(x).trim())) bad(iw, 'needs accepted answers'); };
  const options = (iw, o) => { if (!Array.isArray(o) || o.length < 2) bad(iw, 'needs options'); else if (new Set(o).size !== o.length) bad(iw, 'two options are the same'); };
  const brackets = (iw, s) => {
    s = String(s);
    if (!/\[[^\]]+\]/.test(s)) bad(iw, 'no [words] to find');
    if ((s.match(/\[/g) || []).length !== (s.match(/\]/g) || []).length) bad(iw, 'brackets do not match');
    return (s.match(/\[/g) || []).length;
  };
  if (!KINDS.includes(b.kind)) { bad(w, `unknown exercise kind "${b.kind}"`); return 0; }
  str(w + ' instruction', b.h);
  if (b.kind === 'match' || b.kind === 'memory') {
    if (!b.pairs || b.pairs.length < 3) bad(w, `${b.kind} needs at least three pairs`);
    if (b.kind === 'memory' && b.pairs && b.pairs.length > 8) bad(w, 'memory: at most eight pairs');
    const l = new Set(), r = new Set();
    (b.pairs || []).forEach((p, i) => {
      if (!Array.isArray(p) || p.length !== 2) { bad(w, `pair ${i + 1}`); return; }
      if (l.has(p[0])) bad(w, `left "${p[0]}" twice`); l.add(p[0]); str(w, p[0]); str(w, p[1]);
      if (b.kind === 'memory') { if (r.has(p[1])) bad(w, `right "${p[1]}" twice`); r.add(p[1]); }
    });
    return (b.pairs || []).length;
  }
  if (b.kind === 'conjugate') {
    str(w + ' verb', b.verb); str(w + ' tense', b.tense, false);
    if (!b.rows || b.rows.length < 3) bad(w, 'conjugate needs at least three rows');
    (b.rows || []).forEach((r, i) => { if (!Array.isArray(r) || r.length < 2 || !String(r[1]).trim()) bad(w, `row ${i + 1} needs [person, answer]`); else { str(w, r[0]); str(w, r[2], false); } });
    return (b.rows || []).length;
  }
  if (b.kind === 'crossword' || b.kind === 'search') {
    const words = b.words || [];
    if (words.length < 4 || words.length > 8) bad(w, `${b.kind} needs four to eight words`);
    words.forEach((x, i) => {
      const a = b.kind === 'crossword' ? x.a : x;
      if (!/^[\p{L}]{3,12}$/u.test(String(a))) bad(w, `word ${i + 1} "${a}": one word, 3 to 12 letters`);
      if (b.kind === 'crossword') str(`${w} clue ${i + 1}`, x.clue);
    });
    return words.length;
  }
  if (b.kind === 'sort') {
    if (!Array.isArray(b.groups) || b.groups.length < 2 || b.groups.length > 4) bad(w, 'sort needs two to four groups');
    (b.groups || []).forEach((g) => str(w + ' group', g));
  }
  if (b.kind === 'bank') {
    const all = (b.items || []).map((it) => it.a).concat(b.extra || []);
    if (new Set(all.map((x) => String(x).toLowerCase())).size !== all.length) bad(w, 'bank words must all be different');
  }
  if (!b.items || !b.items.length) { bad(w, 'no items'); return 0; }
  b.items.forEach((it, i) => {
    const iw = `${w} item ${i + 1}`;
    str(iw + ' why', it.why);
    switch (b.kind) {
      case 'choice': str(iw, it.q, false); options(iw, it.o); if (it.q && (it.q.match(/___/g) || []).length > 1) bad(iw, 'more than one gap'); break;
      case 'odd': options(iw, it.o); if (it.o && it.o.length < 3) bad(iw, 'odd one out needs at least three options'); break;
      case 'select': str(iw, it.q); oneGap(iw, it.q); options(iw, it.o); break;
      case 'gap': str(iw, it.q); oneGap(iw, it.q); answers(iw, it.a); break;
      case 'wordform': str(iw, it.q); oneGap(iw, it.q); str(iw + ' base', it.base); answers(iw, it.a); break;
      case 'transform': str(iw, it.q); str(iw + ' cue', it.cue, false); answers(iw, it.a); break;
      case 'order': case 'build':
        str(iw, it.a);
        if (String(it.a).split(/\s+/).length < 3) bad(iw, 'too short to order');
        if (b.kind === 'build' && (!Array.isArray(it.extra) || !it.extra.length)) bad(iw, 'build needs extra words');
        break;
      case 'tf': str(iw, it.q); if (!['t', 'f', 'ng'].includes(it.a) || (it.a === 'ng' && !b.ng)) bad(iw, `answer "${it.a}"`); break;
      case 'spot': str(iw, it.s); brackets(iw, it.s); break;
      case 'fix': str(iw, it.s); if (brackets(iw, it.s) !== 1) bad(iw, 'exactly one [mistake]'); answers(iw, it.a); break;
      case 'colloc':
        str(iw + ' key', it.key); options(iw, it.o);
        if (!Array.isArray(it.a) || !it.a.length || it.a.some((k) => !it.o || k < 0 || k >= it.o.length)) bad(iw, 'a: the indexes of the right options');
        break;
      case 'bank': str(iw, it.q); oneGap(iw, it.q); str(iw + ' answer', it.a); break;
      case 'sort': str(iw, it.s); if (!Number.isInteger(it.g) || it.g < 0 || it.g >= (b.groups || []).length) bad(iw, `group ${it.g}`); break;
    }
  });
  return b.items.length;
}

if (problems) { console.log(`${problems} problems`); process.exit(1); }
console.log('ok');
