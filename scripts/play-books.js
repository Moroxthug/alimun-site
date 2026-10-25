/* Plays course books in /app/preview with the right answers, the way a student would (docs/BOOKS.md).
   Every lesson is turned page by page to its end page and every unit test must score 100%.
   Serves this checkout on a local port; /data/* comes from alimun.com unless --data=local (site build output in site/dist).
   Usage: node scripts/play-books.js [book ids...] [--units=N] [--lang=de] [--phone] [--practice]
   With no book ids: German-B1 and English-B1. --practice also plays every round of #/practice (js/app/practice.js). */
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const a = args.find(x => x.startsWith('--' + k + '=')); return a ? a.split('=')[1] : d; };
const flag = k => args.includes('--' + k);
const ids = args.filter(a => !a.startsWith('--'));
const BOOKS = ids.length ? ids : ['German-B1', 'English-B1'];
const UNITS = +opt('units', 99);
const LANG = opt('lang', 'en');
const DATA = opt('data', 'remote');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.ttf': 'font/ttf', '.otf': 'font/otf', '.woff2': 'font/woff2', '.mp3': 'audio/mpeg' };

async function practiceJSON(name) {
  const lib = await import(path.join(ROOT, 'scripts/book-lib.mjs'));
  const { localize } = await import(path.join(ROOT, 'site/src/data/books/explain.js'));
  if (name === 'pictures.json') {
    const { OBJECTS, SCENES } = await import(path.join(ROOT, 'site/src/data/practice/pictures.js') + '?t=' + Date.now());
    return JSON.stringify({ objects: OBJECTS, scenes: SCENES });
  }
  if (name === 'index.json') {
    const sets = await Promise.all(lib.setIds().map(id => lib.loadSet(id)));
    return JSON.stringify({ sets: sets.map(s => ({ id: s.id, language: s.language, level: s.level, review: s.review, blocks: s.blocks.length })) });
  }
  const [id, lang] = name.replace(/\.json$/, '').split('.');
  const set = await lib.loadSet(id);
  const f = path.join(lib.setDir, 'i18n', id + '.' + lang + '.json');
  const out = localize(set, fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null);
  out.explainLang = lang;
  return JSON.stringify(out);
}

function serve() {
  const cache = {};
  const server = http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    /* Practice sets are built here from site/src/data/practice, so new sets play before they are deployed */
    if (p.startsWith('/data/practice/')) {
      practiceJSON(p.slice('/data/practice/'.length)).then(b => { res.writeHead(200, { 'content-type': 'application/json' }); res.end(b); },
        e => { res.writeHead(404); res.end(String(e.message)); });
      return;
    }
    if (p.startsWith('/data/') && DATA === 'remote') {
      if (cache[p]) { res.writeHead(200, { 'content-type': 'application/json' }); return res.end(cache[p]); }
      https.get('https://alimun.com' + p, r => {
        const chunks = [];
        r.on('data', c => chunks.push(c));
        r.on('end', () => { const b = Buffer.concat(chunks); if (r.statusCode === 200) cache[p] = b; res.writeHead(r.statusCode, { 'content-type': 'application/json' }); res.end(b); });
      }).on('error', () => { res.writeHead(502); res.end(); });
      return;
    }
    if (p.startsWith('/data/')) p = '/site/dist' + p;
    if (p === '/app/preview') p = '/app/preview.html';
    const f = path.join(ROOT, p);
    if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' });
    fs.createReadStream(f).pipe(res);
  });
  return new Promise(r => server.listen(0, () => r(server)));
}

/* The word tokens of a "tap the words" item, numbered like the reader's spotTokens */
function spotTargets(s) {
  const out = []; const re = /\[([^\]]+)\]|([^\s[\]]+)|(\s+)/g; let m, i = 0;
  while ((m = re.exec(s))) { if (m[1]) out.push(i); i++; }
  return out;
}

/* Answers one exercise block on screen (block index gi) with the right answers. */
async function answer(page, b, gi) {
  const q = sel => page.locator('[data-block="' + gi + '"] ' + sel);
  const click = async sel => { const l = q(sel).first(); await l.click(); };
  switch (b.kind) {
    case 'choice': case 'odd': case 'hear': case 'picture':
      for (let i = 0; i < b.items.length; i++) await click('[data-act="pick"][data-i="' + i + '"][data-o="0"]');
      return;
    case 'tf':
      for (let i = 0; i < b.items.length; i++) await click('[data-act="pick"][data-i="' + i + '"][data-o="' + b.items[i].a + '"]');
      return;
    case 'gap': case 'wordform': case 'transform': case 'heargap': case 'dictation':
      for (let i = 0; i < b.items.length; i++) await q('input[data-i="' + i + '"]').fill(b.items[i].a[0]);
      if (await q('[data-act="check"]').count()) await click('[data-act="check"]');
      return;
    case 'select':
      for (let i = 0; i < b.items.length; i++) await q('select[data-i="' + i + '"]').selectOption({ value: '0' });
      return;
    case 'order': case 'build':
      for (let i = 0; i < b.items.length; i++) {
        const n = b.items[i].a.split(/\s+/).length;
        for (let w = 0; w < n; w++) await click('[data-act="place"][data-i="' + i + '"][data-w="' + w + '"]');
      }
      return;
    case 'bank': case 'label':
      for (let i = 0; i < b.items.length; i++) {
        await click('[data-act="gapsel"][data-i="' + i + '"]');
        await click('[data-act="bankpick"][data-w="' + i + '"]');
      }
      return;
    case 'match': case 'memory': {
      if (b.kind === 'memory') {
        for (let l = 0; l < b.pairs.length; l++) { await click('[data-act="flip"][data-c="' + (l * 2) + '"]'); await click('[data-act="flip"][data-c="' + (l * 2 + 1) + '"]'); }
        return;
      }
      const used = {};
      for (let l = 0; l < b.pairs.length; l++) {
        const r = b.pairs.findIndex((p, k) => !used[k] && p[1] === b.pairs[l][1]);
        used[r] = true;
        await click('[data-act="mleft"][data-l="' + l + '"]');
        await click('[data-act="mright"][data-r="' + r + '"]');
      }
      return;
    }
    case 'spot':
      for (let i = 0; i < b.items.length; i++) {
        for (const ti of spotTargets(b.items[i].s)) await click('[data-act="spot"][data-i="' + i + '"][data-t="' + ti + '"]');
      }
      return;
    case 'sort':
      for (let i = 0; i < b.items.length; i++) {
        await click('[data-act="sortpick"][data-i="' + i + '"]');
        await click('[data-act="sortdrop"][data-g="' + b.items[i].g + '"]');
      }
      return;
    case 'fix':
      for (let i = 0; i < b.items.length; i++) {
        const ti = spotTargets(b.items[i].s)[0];
        await click('[data-act="fixtap"][data-i="' + i + '"][data-t="' + ti + '"]');
        await q('input[data-i="' + i + '"]').fill(b.items[i].a[0]);
        await click('[data-act="fixok"][data-i="' + i + '"]');
      }
      return;
    case 'colloc':
      for (let i = 0; i < b.items.length; i++) {
        for (const k of b.items[i].a) await click('[data-act="toggle"][data-i="' + i + '"][data-o="' + k + '"]');
        if (await q('[data-act="itemok"][data-i="' + i + '"]').count()) await click('[data-act="itemok"][data-i="' + i + '"]');
      }
      return;
    case 'conjugate':
      for (let r = 0; r < b.rows.length; r++) await q('input[data-i="' + r + '"]').fill(b.rows[r][1].split('|')[0]);
      if (await q('[data-act="check"]').count()) await click('[data-act="check"]');
      return;
    case 'search': {
      /* The grid says where each word is (data-word-at) */
      const at = JSON.parse(await q('[data-word-at]').getAttribute('data-word-at'));
      for (const w of at) { await click('[data-act="scell"][data-x="' + w[0] + '"][data-y="' + w[1] + '"]'); await click('[data-act="scell"][data-x="' + w[2] + '"][data-y="' + w[3] + '"]'); }
      return;
    }
    case 'crossword':
      for (let i = 0; i < b.words.length; i++) await q('input[data-i="' + i + '"]').fill(b.words[i].a);
      await click('[data-act="check"]');
      return;
    default:
      throw new Error('No answer strategy for kind ' + b.kind);
  }
}

async function playLesson(page, base, book, unit, lesson, errors) {
  const blocks = [];
  lesson.spreads.forEach(sp => sp.forEach(b => blocks.push(b)));
  await page.goto(base + '#/book/' + book.id + '/' + unit.id + '/' + lesson.id);
  await page.waitForSelector('.lesson .spread');
  let gi = 0;
  for (let si = 0; si < lesson.spreads.length; si++) {
    await page.waitForSelector('.spread[data-spread="' + si + '"]:not([aria-hidden])');
    for (const b of lesson.spreads[si]) { if (b.t === 'ex') await answer(page, b, gi); gi++; }
    const next = page.locator('.lesson__next');
    if (await next.isDisabled()) throw new Error('Page ' + si + ' still locked after the right answers');
    await next.click();
  }
  await page.waitForSelector('.spread[data-spread="end"]:not([aria-hidden])');
  const wrong = await page.locator('.spread:not([aria-hidden]) .fb--no').count();
  if (wrong) errors.push(book.id + ' ' + unit.id + ' ' + lesson.id + ': ' + wrong + ' wrong feedback shown');
}

async function playTest(page, base, book, unit, errors) {
  await page.goto(base + '#/book/' + book.id + '/' + unit.id + '/test');
  await page.waitForSelector('.paper');
  for (let gi = 0; gi < unit.test.length; gi++) await answer(page, unit.test[gi], gi);
  await page.locator('[data-act="submit"]').click();
  const score = await page.locator('[data-count]').getAttribute('data-count');
  if (score !== '100') errors.push(book.id + ' ' + unit.id + ' test: ' + score + '%');
}

/* Plays a practice round (js/app/practice.js): the blocks on screen come from the page itself */
async function playRound(page, url, errors, label) {
  await page.goto(url);
  await page.reload();
  await page.waitForSelector('.pr .spread');
  const blocks = await page.evaluate(() => window.AlimunPractice.debug());
  const kinds = [];
  for (let gi = 0; gi < blocks.length; gi++) {
    await page.waitForSelector('.spread[data-spread="' + gi + '"]:not([aria-hidden])');
    kinds.push(blocks[gi].kind);
    await answer(page, blocks[gi], gi);
    const next = page.locator('.lesson__next');
    if (await next.isDisabled()) throw new Error(label + ': ' + blocks[gi].kind + ' still locked after the right answers');
    await next.click();
  }
  await page.waitForSelector('.spread[data-spread="end"]:not([aria-hidden])');
  const end = await page.locator('.spread--end .t-lead').textContent();
  console.log('Practice ' + label + ': ' + kinds.join(', ') + ' -> ' + end);
}

async function main() {
  const server = await serve();
  const base = 'http://localhost:' + server.address().port + '/app/preview?sample=1&lang=' + LANG;
  /* The project's own Playwright may want another browser build; fall back to the one installed on the machine */
  const browser = await chromium.launch().catch(() => chromium.launch({ executablePath: '/opt/pw-browsers/chromium' }));
  const context = await browser.newContext(flag('phone') ? { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true } : { viewport: { width: 1280, height: 900 } });
  await context.addInitScript(l => { try { localStorage.setItem('alimun-lang', l); } catch (e) { /* none */ } }, LANG);
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('page error: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/favicon|supabase|Failed to load resource/i.test(m.text())) errors.push('console: ' + m.text()); });
  let lessons = 0, tests = 0;
  for (const id of BOOKS) {
    const book = await (await fetch('http://localhost:' + server.address().port + '/data/books/' + id + '.en.json')).json();
    for (const unit of book.units.filter(u => !u.planned).slice(0, UNITS)) {
      for (const lesson of unit.pages) {
        try { await playLesson(page, base, book, unit, lesson, errors); lessons++; } catch (e) { errors.push(id + ' ' + unit.id + ' ' + lesson.id + ': ' + e.message.split('\n')[0]); }
      }
      try { await playTest(page, base, book, unit, errors); tests++; } catch (e) { errors.push(id + ' ' + unit.id + ' test: ' + e.message.split('\n')[0]); }
    }
  }
  if (flag('practice')) {
    try { await playRound(page, base + '#/practice/types', errors, 'types'); } catch (e) { errors.push('practice types: ' + e.message.split('\n')[0]); }
    for (let r = 0; r < +opt('rounds', 5); r++) {
      try { await playRound(page, base + '#/practice/round', errors, 'round ' + (r + 1)); } catch (e) { errors.push('practice round ' + (r + 1) + ': ' + e.message.split('\n')[0]); }
    }
  }
  console.log('Played ' + lessons + ' lessons and ' + tests + ' unit tests.');
  if (errors.length) { console.log(errors.length + ' problem(s):\n' + errors.join('\n')); process.exitCode = 1; } else console.log('No problems.');
  await browser.close();
  server.close();
}

if (require.main === module) main();
module.exports = { serve, answer, playRound };
