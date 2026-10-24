// Checks a course book and its unit files against docs/BOOKS.md: node scripts/check-book.mjs English-A2 [more ids]
// Prints every problem and exits with 1 if there is one. Run it after writing or changing a unit.
import { loadBook } from './book-lib.mjs';

const CAST = ['owl', 'parrot', 'cat', 'snail', 'dog', 'teacup', 'pretzel', 'croissant', 'pizza', 'churro', 'nata', 'dragon', 'alien', 'ghost', 'suitcase', 'cactus', 'mug', 'sun', 'monster'];
const KINDS = ['choice', 'gap', 'order', 'match', 'tf', 'spot'];
const EMOJI = /\p{Extended_Pictographic}/u;
let problems = 0;

for (const id of process.argv.slice(2)) {
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
    (u.test || []).forEach((b, bi) => { if (b.t !== 'ex') bad(`${u.id} test ${bi + 1}`, 'tests hold exercises only'); tItems += block(`${u.id} test ${bi + 1}`, b); });
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
  function ex(w, b) {
    if (!KINDS.includes(b.kind)) { bad(w, `unknown exercise kind "${b.kind}"`); return 0; }
    str(w + ' instruction', b.h);
    if (b.kind === 'match') {
      if (!b.pairs || b.pairs.length < 3) bad(w, 'match needs at least three pairs');
      const l = new Set();
      (b.pairs || []).forEach((p, i) => { if (!Array.isArray(p) || p.length !== 2) bad(w, `pair ${i + 1}`); else { if (l.has(p[0])) bad(w, `left "${p[0]}" twice`); l.add(p[0]); str(w, p[0]); str(w, p[1]); } });
      return (b.pairs || []).length;
    }
    if (!b.items || !b.items.length) { bad(w, 'no items'); return 0; }
    b.items.forEach((it, i) => {
      const iw = `${w} item ${i + 1}`;
      str(iw + ' why', it.why);
      if (b.kind === 'choice') {
        str(iw, it.q, false);
        if (!Array.isArray(it.o) || it.o.length < 2) bad(iw, 'needs options');
        else if (new Set(it.o).size !== it.o.length) bad(iw, 'two options are the same');
        if (it.q && (it.q.match(/___/g) || []).length > 1) bad(iw, 'more than one gap');
      } else if (b.kind === 'gap') {
        str(iw, it.q);
        if ((String(it.q).match(/___/g) || []).length !== 1) bad(iw, 'needs exactly one ___');
        if (!Array.isArray(it.a) || !it.a.length || it.a.some((a) => !String(a).trim())) bad(iw, 'needs accepted answers');
      } else if (b.kind === 'order') {
        str(iw, it.a);
        if (String(it.a).split(/\s+/).length < 3) bad(iw, 'too short to order');
      } else if (b.kind === 'tf') {
        str(iw, it.q);
        if (!['t', 'f', 'ng'].includes(it.a) || (it.a === 'ng' && !b.ng)) bad(iw, `answer "${it.a}"`);
      } else if (b.kind === 'spot') {
        str(iw, it.s);
        const s = String(it.s);
        if (!/\[[^\]]+\]/.test(s)) bad(iw, 'no [words] to find');
        if ((s.match(/\[/g) || []).length !== (s.match(/\]/g) || []).length) bad(iw, 'brackets do not match');
      }
    });
    return b.items.length;
  }
}
if (problems) { console.log(`${problems} problems`); process.exit(1); }
console.log('ok');
