/**
 * Cases for native/test/marking_test.dart, made by running the website's exercise engine (js/app/exercises.js)
 * without a browser on exercises taken from the course books. The app's engine (native/lib/book) must give the
 * same results for every case. Run from the repository root after changing the engine:
 *   node native/tool/marking-cases.js
 * Writes native/test/fixtures/marking.json.
 */
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const root = path.join(__dirname, '..', '..');

/* The engine, with the little of a browser it touches */
global.window = { addEventListener() {} };
global.document = { activeElement: null };
new Function('window', 'document', fs.readFileSync(path.join(root, 'js/app/exercises.js'), 'utf8'))(global.window, global.document);
const EX = global.window.AlimunEx;
const noRoot = () => ({ querySelector: () => null, querySelectorAll: () => [] });
const el = (attrs, extra) => Object.assign({ getAttribute: (k) => (attrs[k] == null ? null : String(attrs[k])), hasAttribute: (k) => attrs[k] != null,
  classList: { contains: (c) => (attrs.class || '').split(' ').includes(c) }, closest: () => null }, extra || {});
const CODES = { English: 'en', German: 'de', French: 'fr', Spanish: 'es', Italian: 'it', Portuguese: 'pt' };

function session(blocks, language, level, test, events) {
  return EX.create({ A: { t: (k) => k }, blocks: JSON.parse(JSON.stringify(blocks)), test, level, xa: '', ta: ' lang="' + CODES[language] + '" dir="ltr"', root: noRoot,
    onItem: (r) => events && events.push([r.bi, r.i, r.ok, r.kind]) });
}
/* One action on a session, the same list the Dart test replays */
function act(S, a) {
  const [name, bi, i, arg] = a;
  const d = { 'data-b': bi, 'data-i': i };
  switch (name) {
    case 'pick': return S.act('pick', el({ ...d, 'data-o': arg }));
    case 'value': return S.input(el({ ...d, class: 'gap-in' }, { value: arg }));
    case 'check': return S.act('check', el(d));
    case 'show': return S.act('show', el(d));
    case 'place': return S.act('place', el({ ...d, 'data-w': arg }));
    case 'unplace': return S.act('unplace', el({ ...d, 'data-w': arg }));
    case 'reset': return S.act('reset', el(d));
    case 'spot': return S.act('spot', el({ ...d, 'data-t': arg }));
    case 'toggle': return S.act('toggle', el({ ...d, 'data-o': arg }));
    case 'fixtap': return S.act('fixtap', el({ ...d, 'data-t': arg }));
    case 'fixok': return S.act('fixok', el(d));
    case 'mleft': return S.act('mleft', el({ 'data-b': bi, 'data-l': arg }));
    case 'mright': return S.act('mright', el({ 'data-b': bi, 'data-r': arg }));
    case 'gapsel': return S.act('gapsel', el(d));
    case 'bankpick': return S.act('bankpick', el({ 'data-b': bi, 'data-w': arg }));
    case 'sortpick': return S.act('sortpick', el(d));
    case 'sortdrop': return S.act('sortdrop', el({ 'data-b': bi, 'data-g': arg }));
    case 'flip': return S.act('flip', el({ 'data-b': bi, 'data-c': arg }));
    case 'cell': return S.act('scell', el({ 'data-b': bi, 'data-x': arg[0], 'data-y': arg[1] }));
    default: throw new Error('unknown action ' + name);
  }
}

const strip = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');
const acute = (s) => s.normalize('NFD').replace(/[́̈]/g, '').normalize('NFC');
function variants(a) {
  return [...new Set([a, a.toUpperCase(), '  ' + a.replace(/ /g, '   ') + ' ', a + '.', a + ' !?', a.replace(/['’]/g, '’'), a.replace(/['’]/g, "'"), a.replace(/['’]/g, '`'),
    strip(a), acute(a), a + 'x', a.slice(0, -1), a.replace(/ /g, ''), ''])];
}

/* What a learner would do, wrong first (when `slip`) and then right, for one block */
function script(b, bi, S, slip) {
  const out = [], st = S.state[bi];
  const typed = (i, it) => {
    const right = it.a[0];
    if (slip) out.push(['value', bi, i, right + 'q'], b.kind === 'fix' ? ['fixok', bi, i] : ['check', bi]);
    out.push(['value', bi, i, right], b.kind === 'fix' ? ['fixok', bi, i] : ['check', bi]);
  };
  switch (b.kind) {
    case 'choice': case 'odd': case 'picture': case 'select':
      b.items.forEach((it, i) => { if (slip && i % 2 === 0) out.push(['pick', bi, i, 1]); out.push(['pick', bi, i, 0]); }); break;
    case 'tf':
      b.items.forEach((it, i) => { if (slip && i % 2 === 0) out.push(['pick', bi, i, it.a === 't' ? 'f' : 't']); out.push(['pick', bi, i, it.a]); }); break;
    case 'gap': case 'wordform': case 'transform': case 'conjugate': case 'crossword':
      S.blocks[bi].items.forEach((it, i) => typed(i, it));
      if (slip) out.push(['value', bi, 0, 'zzz'], ['check', bi]);
      break;
    case 'order': case 'build':
      b.items.forEach((it, i) => {
        const n = st.items[i].words.length, all = st.items[i].all.length;
        if (slip && n > 1) {
          for (let w = n - 1; w >= 0; w--) out.push(['place', bi, i, w]);
          out.push(['reset', bi, i]);
          if (all > n) { out.push(['place', bi, i, all - 1]); for (let w = 1; w < n; w++) out.push(['place', bi, i, w]); out.push(['unplace', bi, i, all - 1]); out.push(['reset', bi, i]); }
          if (i % 2) { for (let w = n - 1; w >= 0; w--) out.push(['place', bi, i, w]); out.push(['show', bi, i]); return; }
        }
        for (let w = 0; w < n; w++) out.push(['place', bi, i, w]);
      }); break;
    case 'spot':
      b.items.forEach((it, i) => {
        const tk = st.items[i].tokens;
        const wrong = tk.findIndex((k) => !k.space && k.target === -1 && k.word);
        if (slip && wrong > -1) out.push(['spot', bi, i, wrong]);
        tk.forEach((k, ti) => { if (k.target > -1) out.push(['spot', bi, i, ti]); });
      }); break;
    case 'colloc':
      b.items.forEach((it, i) => {
        const wrong = it.o.findIndex((o, k) => it.a.indexOf(k) === -1);
        if (slip && wrong > -1) out.push(['toggle', bi, i, wrong]);
        it.a.forEach((k) => out.push(['toggle', bi, i, k]));
      }); break;
    case 'fix':
      b.items.forEach((it, i) => {
        const tk = st.items[i].tokens;
        const wrong = tk.findIndex((k) => !k.space && k.target === -1 && k.word);
        if (slip && wrong > -1) out.push(['fixtap', bi, i, wrong]);
        out.push(['fixtap', bi, i, tk.findIndex((k) => k.target > -1)]);
        typed(i, it);
      }); break;
    case 'match':
      b.pairs.forEach((p, l) => {
        /* A tile not matched yet (matched tiles cannot be tapped on the page) */
        const other = b.pairs.findIndex((q, r) => r > l && q[1] !== p[1]);
        if (slip && l % 2 === 0 && other > -1) out.push(['mleft', bi, null, l], ['mright', bi, null, other]);
        out.push(['mleft', bi, null, l], ['mright', bi, null, l]);
      }); break;
    case 'bank': case 'label':
      b.items.forEach((it, i) => {
        out.push(['gapsel', bi, i]);
        /* A word not used yet (used words cannot be tapped on the page) */
        const other = st.bank.findIndex((w, k) => k > i && EX.norm(w) !== EX.norm(it.a));
        if (slip && i % 2 === 0 && other > -1) { out.push(['bankpick', bi, null, other]); if (i === 0) { out.push(['bankpick', bi, null, other], ['show', bi, i]); return; } }
        out.push(['bankpick', bi, null, i]);
      }); break;
    case 'sort':
      b.items.forEach((it, i) => {
        const other = (it.g + 1) % b.groups.length;
        if (slip && i % 2 === 0) { out.push(['sortpick', bi, i], ['sortdrop', bi, null, other]); if (i % 4 === 0) { out.push(['sortpick', bi, i], ['sortdrop', bi, null, other]); return; } }
        out.push(['sortpick', bi, i], ['sortdrop', bi, null, it.g]);
      }); break;
    case 'memory':
      b.pairs.forEach((p, l) => out.push(['flip', bi, null, l * 2], ['flip', bi, null, l * 2 + 1])); break;
    case 'search':
      S.blocks[bi].grid.at.forEach((p, w) => {
        if (slip && w === 0) out.push(['cell', bi, null, [p[0], p[1]]], ['cell', bi, null, [(p[2] + 1) % S.blocks[bi].grid.size, p[3]]]);
        if (w % 2) out.push(['cell', bi, null, [p[2], p[3]]], ['cell', bi, null, [p[0], p[1]]]);
        else out.push(['cell', bi, null, [p[0], p[1]]], ['cell', bi, null, [p[2], p[3]]]);
      }); break;
  }
  return out;
}

function snapshot(S) {
  const f = S.firstTally();
  return { first: [f.right, f.total], done: S.blocks.map((b, i) => S.done(i)), ready: S.blocks.map((b, i) => S.ready(i)), allDone: S.allDone(), allReady: S.allReady() };
}

(async () => {
  const dir = path.join(root, 'site/src/data/books/units');
  const picked = {};      /* by kind + language + lesson|test: blocks */
  const typedItems = [];
  const crosswords = [], searches = [];
  const TYPED = { gap: 1, wordform: 1, transform: 1, conjugate: 1, crossword: 1 };
  for (const book of fs.readdirSync(dir).sort()) {
    const m = /^([A-Z][a-z]+)-([ABC][12])/.exec(book);
    if (!m) continue;
    for (const f of fs.readdirSync(path.join(dir, book)).filter((x) => x.endsWith('.js')).sort()) {
      const mod = await import(pathToFileURL(path.join(dir, book, f)));
      for (const u of Object.values(mod)) {
        if (!u || !u.pages) continue;
        const all = [...u.pages.flatMap((p) => p.spreads.flat()).map((b) => [b, false]), ...(u.test || []).map((b) => [b, true])];
        for (const [b, inTest] of all) {
          if (b.t !== 'ex' || b.kind === 'speak') continue;
          const key = b.kind + '|' + m[1] + '|' + (inTest ? 'test' : 'lesson');
          const list = picked[key] || (picked[key] = []);
          if (list.length < (inTest ? 2 : 4)) list.push({ block: b, language: m[1], level: m[2], test: inTest });
          if (b.kind === 'crossword' && crosswords.length < 80) crosswords.push(b.words.map((w) => w.a));
          if (b.kind === 'search' && searches.length < 60) searches.push(b.words);
          if (TYPED[b.kind] && typedItems.length < 4000 && (typedItems.length % 3 === 0 || m[1] === 'Spanish')) typedItems.push({ block: b, language: m[1], level: m[2] });
          else if (TYPED[b.kind]) typedItems.push(null);
        }
      }
    }
  }

  /* 1. Typed answers: what counts as right */
  const typed = [];
  const normCases = {};
  for (const x of typedItems.filter(Boolean).slice(0, 320)) {
    const S = session([x.block], x.language, x.level, true);
    const items = S.blocks[0].items;
    const tries = [];
    items.forEach((it, i) => {
      const list = [];
      it.a.forEach((a) => variants(a).forEach((v) => list.push(v)));
      if (x.block.kind === 'transform' && it.cue) { const a0 = it.a[0]; if (a0.toLowerCase().startsWith(it.cue.toLowerCase())) list.push(a0.slice(it.cue.length).trim()); list.push(it.cue + ' ' + a0); }
      [...new Set(list)].forEach((v) => {
        S.state[0].items[i].value = v;
        const ok = S.results().filter((r) => r.i === i)[0].ok;
        tries.push([i, v, ok]);
        normCases[v] = EX.norm(v);
      });
      S.state[0].items[i].value = '';
    });
    typed.push({ language: x.language, level: x.level, block: x.block, tries });
  }

  /* 2. Grids */
  const cross = crosswords.map((words) => {
    const S = session([{ t: 'ex', kind: 'crossword', h: '', words: words.map((a) => ({ a, clue: '' })) }], 'English', 'A1', false);
    const g = S.blocks[0].grid;
    return { words, w: g.w, h: g.h, cells: g.cells.map((c) => [c.x, c.y, c.of]), at: g.words.map((w) => [w.x, w.y, w.down ? 1 : 0, w.len]) };
  });
  const search = searches.map((words) => {
    const S = session([{ t: 'ex', kind: 'search', h: '', words }], 'English', 'A1', false);
    const g = S.blocks[0].grid;
    return { words, size: g.size, cells: g.cells.map((r) => r.join('')), at: g.at };
  });

  /* 3. Whole exercises answered the way a learner would: in a lesson (with and without slips) and in a test */
  const runs = [];
  for (const key of Object.keys(picked).sort()) {
    for (const x of picked[key]) {
      const blocks = [x.block];
      if (!x.test) {
        for (const slip of [false, true]) {
          const events = [];
          const S = session(blocks, x.language, x.level, false, events);
          const actions = script(S.blocks[0], 0, S, slip);
          actions.forEach((a) => act(S, a));
          runs.push({ language: x.language, level: x.level, test: false, blocks, actions, events, end: snapshot(S) });
        }
      }
      if (!EX.lessonOnly[x.block.kind]) {
        const S = session(blocks, x.language, x.level, true);
        /* Every other item answered wrongly: the test must score the same */
        const actions = script(S.blocks[0], 0, S, false).filter((a) => a[0] !== 'check' && a[0] !== 'fixok');
        const spoiled = actions.map((a, n) => {
          if (a[0] === 'pick' && a[2] % 2 === 0) return ['pick', a[1], a[2], a[3] === 0 ? 1 : a[3] === 't' ? 'f' : a[3] === 'f' ? 't' : 'f'];
          if (a[0] === 'value' && a[2] % 2 === 0) return ['value', a[1], a[2], a[3] + 'q'];
          if (a[0] === 'mright' && a[3] % 3 === 0) return ['mright', a[1], null, (a[3] + 1) % x.block.pairs.length];
          if (a[0] === 'sortdrop' && n % 3 === 0) return ['sortdrop', a[1], null, (a[3] + 1) % x.block.groups.length];
          return a;
        });
        spoiled.forEach((a) => act(S, a));
        const before = snapshot(S);
        const score = S.submit();
        runs.push({ language: x.language, level: x.level, test: true, blocks, actions: spoiled, before, score, results: S.results().map((r) => [r.bi, r.i, r.ok]) });
      }
    }
  }

  /* 4. Speaking: is what was heard close enough */
  const spoken = [['Guten Morgen, Frau Berg!', 'guten morgen frau berg'], ['Ich komme aus Spanien.', 'ich komme aus'], ['I have never been to Paris before.', 'I have never been to Paris'],
    ['I have never been to Paris before today, you know.', 'I have never been to Paris before today'], ['¿Dónde está la estación?', 'donde esta la estacion'], ['Je m’appelle Marie.', "je m'appelle marie"],
    ['Hello', ''], ['Wie geht’s?', 'Wie gehts'], ['one two three four five', 'one three two four five'], ['one two three four five six seven eight nine ten', 'one two three four five six seven eight'],
  ].map(([want, got]) => [want, got, EX.spokenRight(want, got)]);

  const out = { norm: Object.entries(normCases), typed, cross, search, runs, spoken };
  const file = path.join(__dirname, '..', 'test', 'fixtures', 'marking.json');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(out));
  const kinds = {};
  runs.forEach((r) => { kinds[r.blocks[0].kind] = (kinds[r.blocks[0].kind] || 0) + 1; });
  console.log('marking cases: ' + out.norm.length + ' normalised answers, ' + typed.reduce((n, x) => n + x.tries.length, 0) + ' typed answers in ' + typed.length + ' exercises, ' +
    cross.length + ' crosswords, ' + search.length + ' word searches, ' + runs.length + ' exercises played (' + Object.keys(kinds).sort().map((k) => k + ' ' + kinds[k]).join(', ') + '), ' +
    (fs.statSync(file).size / 1e6).toFixed(1) + ' MB');
})();
