// Checks library shelves against docs/LIBRARY.md: node scripts/check-library.mjs [shelves] (none: every shelf).
// Also checks the translations in site/src/data/library/i18n (every explanation translated in es fr de pt zh ar it).
// Prints every problem and a summary per shelf, and exits with 1 if there is a problem.
import { existsSync, readFileSync } from 'node:fs';
import { loadShelf, shelfIds, libDir, explainVisit } from './book-lib.mjs';

const GENRES = { listen: ['dialogue', 'announcement', 'interview', 'talk', 'podcast'], read: ['notice', 'message', 'article', 'opinion', 'story'] };
const TOPICS = ['daily-life', 'work', 'study', 'travel', 'health', 'food', 'home', 'city', 'nature', 'culture', 'technology', 'society', 'people'];
const KINDS = ['choice', 'tf', 'pick', 'gap', 'select', 'match', 'order', 'bank', 'spot', 'sort', 'odd'];
const LANGS = ['es', 'fr', 'de', 'pt', 'zh', 'ar', 'it'];
const LENGTH = { A1: [80, 200, 80, 200], A2: [150, 250, 150, 250], B1: [250, 400, 300, 450], B2: [400, 600, 450, 700], C1: [500, 800, 600, 900], C2: [500, 900, 600, 1000] };
const EMOJI = /\p{Extended_Pictographic}/u;
const NUM = /\b(questions?|Fragen?)\s*\d+|\b\d+\s*(–|-|to|bis)\s*\d+\b(?!\s*(words|Wörter|seconds|minutes|Minuten))/i;
const words = (s) => String(s || '').replace(/\*/g, '').split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

const ids = process.argv.slice(2).length ? process.argv.slice(2) : shelfIds();
const visit = await explainVisit();
let problems = 0;
for (const id of ids) {
  const bad = (where, msg) => { problems++; console.log(`${id} ${where}: ${msg}`); };
  let S;
  try { S = await loadShelf(id); } catch (e) { bad('file', e.message); continue; }
  if (S.id !== id) bad('shelf', `id is ${S.id}`);
  if (!/^[A-Z][a-z]+$/.test(S.language || '') || !LENGTH[S.level]) bad('shelf', 'needs language and level');
  const str = (where, s, need = true) => {
    if (s == null || s === '') { if (need) bad(where, 'missing text'); return; }
    if (typeof s !== 'string') { bad(where, 'not text'); return; }
    if ((s.match(/\*\*/g) || []).length % 2) bad(where, 'odd number of ** in: ' + s.slice(0, 60));
    if (EMOJI.test(s)) bad(where, 'emoji');
    if (/(^|\n)\s*(\d+[.)]|[-*•])\s/.test(s)) bad(where, 'list in: ' + s.slice(0, 60));
  };
  const seen = new Set();
  let items = 0, nl = 0, nr = 0;
  (S.pieces || []).forEach((p) => {
    const w = p.id;
    if (!/^[a-z0-9-]+$/.test(p.id || '')) bad(w, 'id'); if (seen.has(p.id)) bad(w, 'duplicate id'); seen.add(p.id);
    if (!GENRES[p.kind]) { bad(w, `kind "${p.kind}"`); return; }
    if (!GENRES[p.kind].includes(p.genre)) bad(w, `genre "${p.genre}" for ${p.kind}`);
    if (!Array.isArray(p.topics) || !p.topics.length || p.topics.length > 2 || p.topics.some((t) => !TOPICS.includes(t))) bad(w, 'topics: one or two of ' + TOPICS.join(', '));
    if (!(p.minutes > 0)) bad(w, 'minutes');
    str(`${w} title`, p.title); str(`${w} about`, p.about);
    const [l0, l1, r0, r1] = LENGTH[S.level] || [0, 1e9, 0, 1e9];
    let n = 0, all = '';
    if (p.kind === 'listen') {
      nl++;
      if (!Array.isArray(p.recs) || !p.recs.length || p.recs.length > 3) bad(w, 'one to three recordings');
      (p.recs || []).forEach((r, ri) => (r.lines || []).forEach((l, li) => { str(`${w} rec ${ri} line ${li} who`, l.who); str(`${w} rec ${ri} line ${li}`, l.s); n += words(l.s); all += ' ' + l.s; }));
      if (n < l0 * 0.9 || n > l1 * 1.15) bad(w, `${n} words spoken, ${l0} to ${l1} expected`);
    } else {
      nr++;
      if (!p.text || !p.text.md) bad(w, 'needs text.md'); else { str(`${w} text`, p.text.md); n = words(p.text.md); all = p.text.md; }
      if (n < r0 * 0.9 || n > r1 * 1.15) bad(w, `${n} words, ${r0} to ${r1} expected`);
    }
    if (!Array.isArray(p.words) || p.words.length < 6 || p.words.length > 10) bad(w, 'six to ten words');
    const plain = all.replace(/\*/g, '').toLowerCase();
    (p.words || []).forEach((x) => { str(`${w} word`, x.w); str(`${w} word meaning`, x.n); if (x.w && !plain.includes(x.w.replace(/\*/g, '').toLowerCase())) bad(w, `word "${x.w}" is not in the piece`); });
    if (!Array.isArray(p.blocks) || p.blocks.length < 3 || p.blocks.length > 5) bad(w, 'three to five exercise blocks');
    let k = 0;
    (p.blocks || []).forEach((b, bi) => {
      const wb = `${w} block ${bi + 1}`;
      if (b.t !== 'ex' || !KINDS.includes(b.kind)) { bad(wb, `kind "${b.kind}"`); return; }
      str(`${wb} h`, b.h); if (NUM.test(b.h || '')) bad(wb, 'refers to question numbers');
      if (b.kind === 'match') { if (!Array.isArray(b.pairs) || b.pairs.length < 3) bad(wb, 'pairs'); else { k += b.pairs.length; b.pairs.forEach((x) => { str(wb, x[0]); str(wb, x[1]); }); } return; }
      if (b.kind === 'pick') { if (!Array.isArray(b.opts) || b.opts.length < 2) bad(wb, 'opts'); }
      if (b.kind === 'sort') { if (!Array.isArray(b.groups) || b.groups.length < 2) bad(wb, 'groups'); }
      if (!Array.isArray(b.items) || !b.items.length) { bad(wb, 'items'); return; }
      b.items.forEach((it, i) => {
        const wi = `${wb} item ${i + 1}`;
        str(`${wi} why`, it.why);
        switch (b.kind) {
          case 'choice': case 'select': case 'odd':
            str(`${wi} q`, it.q, b.kind === 'select');
            if (!Array.isArray(it.o) || it.o.length < 3) bad(wi, 'three or more options'); else if (new Set(it.o).size !== it.o.length) bad(wi, 'repeated option');
            if (b.kind === 'select' && !String(it.q).includes('___')) bad(wi, 'needs ___');
            break;
          case 'tf': str(`${wi} q`, it.q); if (!['t', 'f', 'ng'].includes(it.a) || (it.a === 'ng' && !b.ng)) bad(wi, `a "${it.a}"`); break;
          case 'pick': str(`${wi} q`, it.q); if (!(Number.isInteger(it.a) && it.a >= 0 && it.a < (b.opts || []).length)) bad(wi, 'a must be an index into opts'); break;
          case 'gap': str(`${wi} q`, it.q); if (!String(it.q).includes('___')) bad(wi, 'needs ___'); if (!Array.isArray(it.a) || !it.a.length) bad(wi, 'a: accepted answers'); break;
          case 'order': str(`${wi} a`, it.a); break;
          case 'bank': str(`${wi} q`, it.q); str(`${wi} a`, it.a); break;
          case 'spot': if (!/\[[^\]]+\]/.test(it.s || '')) bad(wi, 'spot needs [words]'); break;
          case 'sort': str(`${wi} s`, it.s); if (!(it.g >= 0 && it.g < (b.groups || []).length)) bad(wi, 'g'); break;
          default: break;
        }
      });
      if (b.kind === 'bank') { const bank = b.items.map((x) => x.a).concat(b.extra || []); if (new Set(bank.map((x) => x.toLowerCase())).size !== bank.length) bad(wb, 'every bank word different'); }
      k += b.items.length;
    });
    if (k < 8 || k > 20) bad(w, `${k} items, 10 to 16 expected`);
    items += k;
  });
  /* Translations */
  const texts = [];
  visit(JSON.parse(JSON.stringify(S)), (t) => texts.push(t));
  LANGS.forEach((l) => {
    const f = `${libDir}i18n/${id}.${l}.json`;
    if (!existsSync(f)) { bad('i18n', `${l} missing`); return; }
    let m; try { m = JSON.parse(readFileSync(f, 'utf8')); } catch (e) { bad('i18n', `${l}: ${e.message}`); return; }
    const miss = texts.filter((t) => !m[t] || !String(m[t]).trim());
    if (miss.length) bad('i18n', `${l}: ${miss.length} explanations not translated, e.g. "${miss[0].slice(0, 50)}"`);
  });
  console.log(`${id}: ${nl} listening and ${nr} reading pieces, ${items} questions, ${texts.length} explanations`);
}
process.exit(problems ? 1 : 0);
