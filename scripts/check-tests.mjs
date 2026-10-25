// Checks mock tests against docs/TESTS.md: node scripts/check-tests.mjs [ids] (no ids: every test in site/src/data/tests).
// Prints every problem and a summary per test, and exits with 1 if there is a problem.
import { readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const DIR = path.resolve('site/src/data/tests');
const FORMATS = ['first', 'advanced', 'ielts', 'goethe', 'telc', 'alimun'];
const MARKING = ['cambridge', 'ielts', 'goethe', 'telc', 'alimun'];
const KINDS = ['choice', 'tf', 'select', 'gap', 'wordform', 'transform', 'match', 'bank', 'sort', 'pick', 'cloze', 'write', 'talk'];
const SCENES = ['cafe', 'station', 'kitchen', 'park'];
const VOICES = ['Sulafat', 'Kore', 'Aoede', 'Leda', 'Vindemiatrix', 'Orus', 'Charon', 'Puck', 'Achird', 'Sadaltager'];
const EMOJI = /\p{Extended_Pictographic}/u;

const args = process.argv.slice(2);
const ids = args.length ? args : readdirSync(DIR).filter((f) => /^[A-Z][a-z]+-[ABC][12]-[a-z]+\.js$/.test(f)).map((f) => f.slice(0, -3));
let problems = 0;

for (const id of ids) {
  const bad = (where, msg) => { problems++; console.log(`${id} ${where}: ${msg}`); };
  let T;
  try { ({ TEST: T } = await import(pathToFileURL(path.join(DIR, id + '.js')).href)); } catch (e) { bad('file', e.message); continue; }
  if (!T) { bad('file', 'no TEST export'); continue; }
  if (T.id !== id) bad('test', `id is ${T.id}`);
  if (!/^[A-Z][a-z]+$/.test(T.language || '') || !/^[ABC][12]$/.test(T.level || '')) bad('test', 'needs language and level');
  if (!FORMATS.includes(T.format)) bad('test', `format "${T.format}"`);
  if (!VOICES.includes(T.examiner)) bad('test', `examiner voice "${T.examiner}"`);
  const str = (where, s, need = true) => {
    if (s == null || s === '') { if (need) bad(where, 'missing text'); return; }
    if (typeof s !== 'string') { bad(where, 'not text'); return; }
    if ((s.match(/\*\*/g) || []).length % 2) bad(where, 'odd number of ** in: ' + s.slice(0, 60));
    if (EMOJI.test(s)) bad(where, 'emoji');
  };
  const arr = (where, a, min = 1) => { if (!Array.isArray(a) || a.length < min) { bad(where, `needs at least ${min}`); return false; } return true; };
  const accepted = (where, a) => { if (!arr(where + ' a', a)) return; a.forEach((x) => str(where + ' a', x)); };
  let total = 0, manual = 0;
  const pids = new Set();
  if (!arr('papers', T.papers)) continue;
  T.papers.forEach((p) => {
    if (pids.has(p.id)) bad(p.id, 'duplicate paper id'); pids.add(p.id);
    if (!/^[a-z]+$/.test(p.id || '')) bad('paper', `id "${p.id}"`);
    str(`${p.id} title`, p.title);
    if (!(p.minutes > 0)) bad(p.id, 'needs minutes');
    const parts = new Set();
    if (!arr(`${p.id} parts`, p.parts)) return;
    p.parts.forEach((pt) => {
      const w = `${p.id}/${pt.id}`;
      if (!/^[a-z0-9]+$/.test(pt.id || '')) bad(w, 'part id'); if (parts.has(pt.id)) bad(w, 'duplicate part id'); parts.add(pt.id);
      str(`${w} title`, pt.title); str(`${w} ref`, pt.ref, false); str(`${w} about`, pt.about);
      /* Questions are not numbered on screen */
      const NUM = /\b(questions?|Fragen?|Aufgaben?|Items?|Nummern?|Nr\.)\s*\d+|\b\d+\s*(–|-|to|bis)\s*\d+\b(?!\s*(words|Wörter|Wörtern|seconds|Sekunden|minutes|Minuten))/i;
      [pt.about].concat((pt.blocks || []).map((b) => b.h)).forEach((x) => { if (x && NUM.test(x)) bad(`${w}`, 'refers to question numbers: ' + String(x).slice(0, 80)); });
      if (pt.text) { str(`${w} text.title`, pt.text.title, false); str(`${w} text.md`, pt.text.md); }
      (pt.texts || []).forEach((x, i) => { str(`${w} texts[${i}].title`, x.title, false); str(`${w} texts[${i}].md`, x.md); });
      if (pt.recs) {
        arr(`${w} recs`, pt.recs);
        if (!(pt.plays >= 1 && pt.plays <= 2)) bad(w, 'plays must be 1 or 2');
        pt.recs.forEach((r, ri) => { if (arr(`${w} recs[${ri}].lines`, r.lines)) r.lines.forEach((l, li) => { str(`${w} rec ${ri} line ${li} who`, l.who); str(`${w} rec ${ri} line ${li}`, l.s); }); });
      }
      if (pt.chart) {
        const c = pt.chart;
        if (!['bar', 'line'].includes(c.type)) bad(w, 'chart type');
        if (!arr(`${w} chart labels`, c.labels) || c.labels.length > 8) bad(w, 'chart: one to eight labels');
        if (!arr(`${w} chart series`, c.series) || c.series.length > 4) bad(w, 'chart: one to four series');
        (c.series || []).forEach((s) => { if (!Array.isArray(s.values) || s.values.length !== (c.labels || []).length || s.values.some((v) => typeof v !== 'number')) bad(w, `chart series "${s.name}" values`); });
      }
      if (!arr(`${w} blocks`, pt.blocks)) return;
      pt.blocks.forEach((b, bi) => {
        const wb = `${w} block ${bi + 1}`;
        if (b.t !== 'ex') { bad(wb, 'tests hold exercise blocks only'); return; }
        if (!KINDS.includes(b.kind)) { bad(wb, `kind "${b.kind}" is not used in tests`); return; }
        str(`${wb} h`, b.h);
        if (b.rec != null && !(pt.recs && pt.recs[b.rec])) bad(wb, `rec ${b.rec} does not exist`);
        if (['write', 'talk'].includes(b.kind) && !MARKING.includes(b.marking)) bad(wb, `marking "${b.marking}"`);
        const items = b.items || [];
        switch (b.kind) {
          case 'match': if (arr(`${wb} pairs`, b.pairs, 3)) { total += b.pairs.length; b.pairs.forEach((x) => { str(wb, x[0]); str(wb, x[1]); }); } return;
          case 'sort': arr(`${wb} groups`, b.groups, 2); break;
          case 'bank': arr(`${wb} items`, items, 2); break;
          case 'pick':
            if (arr(`${wb} opts`, b.opts, 2)) b.opts.forEach((o) => str(`${wb} opts`, o));
            items.forEach((it, i) => { if (!(Number.isInteger(it.a) && it.a >= 0 && it.a < (b.opts || []).length)) bad(`${wb} item ${i + 1}`, 'a must be an index into opts'); });
            break;
          case 'cloze': {
            str(`${wb} text`, b.text);
            const gaps = (String(b.text || '').match(/\{\}/g) || []).length;
            if (gaps !== items.length) bad(wb, `${gaps} gaps in the text, ${items.length} items`);
            if (b.opts) b.opts.forEach((o) => str(`${wb} opts`, o));
            items.forEach((it, i) => {
              const wi = `${wb} gap ${i + 1}`;
              if (b.opts) { if (!(Number.isInteger(it.a) && it.a >= 0 && it.a < b.opts.length)) bad(wi, 'a must be an index into opts'); }
              else if (it.o) { if (arr(`${wi} o`, it.o, 3)) it.o.forEach((o) => str(wi, o)); }
              else accepted(wi, it.a);
            });
            if (b.opts && b.opts.length <= items.length) bad(wb, 'give at least one option more than gaps');
            break;
          }
          case 'write':
            items.forEach((it, i) => {
              const wi = `${wb} task ${i + 1}`;
              str(`${wi} task`, it.task); str(`${wi} model`, it.model);
              if (!(it.min > 0 && it.max >= it.min)) bad(wi, 'min and max words');
              const n = String(it.model || '').replace(/\*/g, '').split(/\s+/).filter(Boolean).length;
              if (it.min && n < it.min * 0.9) bad(wi, `model answer has ${n} words, fewer than ${it.min}`);
            });
            manual += b.choose ? 1 : items.length;
            break;
          case 'talk':
            items.forEach((it, i) => {
              const wi = `${wb} item ${i + 1}`;
              str(`${wi} q`, it.q);
              if (!(it.secs >= 10 && it.secs <= 240)) bad(wi, 'secs between 10 and 240');
              if (it.scene && !SCENES.includes(it.scene)) bad(wi, `scene "${it.scene}"`);
              if (it.scenes && (!Array.isArray(it.scenes) || it.scenes.length > 2 || it.scenes.some((x) => !SCENES.includes(x)))) bad(wi, 'scenes: one or two of ' + SCENES.join(', '));
              (it.notes || []).forEach((n) => str(`${wi} notes`, n));
              str(`${wi} model`, it.model, false);
            });
            manual += items.length;
            break;
          default: break;
        }
        if (!arr(`${wb} items`, items)) return;
        items.forEach((it, i) => {
          const wi = `${wb} item ${i + 1}`;
          str(`${wi} why`, it.why, !['write', 'talk'].includes(b.kind));
          switch (b.kind) {
            case 'choice': case 'select': str(`${wi} q`, it.q, b.kind === 'select'); if (arr(`${wi} o`, it.o, 3)) it.o.forEach((o) => str(wi, o)); if (b.kind === 'select' && !String(it.q).includes('___')) bad(wi, 'needs ___'); break;
            case 'tf': str(`${wi} q`, it.q); if (!['t', 'f', 'ng'].includes(it.a) || (it.a === 'ng' && !b.ng)) bad(wi, `a "${it.a}"`); break;
            case 'gap': case 'wordform': str(`${wi} q`, it.q); accepted(wi, it.a); if (!String(it.q).includes('___')) bad(wi, 'needs ___'); if (b.kind === 'wordform') str(`${wi} base`, it.base); break;
            case 'transform': str(`${wi} q`, it.q); accepted(wi, it.a); if (it.gap != null && !String(it.gap).includes('___')) bad(wi, 'gap needs ___'); break;
            case 'bank': str(`${wi} q`, it.q); str(`${wi} a`, it.a); break;
            case 'sort': str(`${wi} s`, it.s); if (!(it.g >= 0 && it.g < (b.groups || []).length)) bad(wi, 'g'); break;
            case 'pick': str(`${wi} q`, it.q); break;
            default: break;
          }
        });
        if (!['write', 'talk'].includes(b.kind)) total += items.length;
      });
    });
  });
  console.log(`${id}: ${T.papers.length} papers, ${total} marked questions, ${manual} writing and speaking tasks`);
}
process.exit(problems ? 1 : 0);
