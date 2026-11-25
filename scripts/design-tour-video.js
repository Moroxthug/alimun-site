/**
 * The designed overview video for the teacher tour's welcome card (docs/TEACHER_TOUR_VIDEO_CLAUDE_DESIGN.md): the same
 * scenes and captions as the Claude Design prompt, in Alimun's own style. Real dashboard screens (sample data, at 2x)
 * in a large rounded frame, a gentle zoom into the part being explained, a lime outline around it, the caption under
 * it; title and closing cards on bone. Captions come from the tour's own text (app_tour_* in js/translations.js).
 *
 *   node scripts/design-tour-video.js <lang> <out.mp4> [base url, default https://alimun.com: the prepared lessons on the board only load there] [ffmpeg path] [video]
 *
 * [video] is `overview` (default, the welcome card) or a task video from scripts/task-videos.js (start, notes,
 * availability, board, homework, messages, profile), saved as videos/teacher-tour/<video>-<lang>.mp4.
 *
 * Rendered frame by frame (not recorded in real time), so a slow or sleeping computer cannot break the timing.
 * Needs Playwright's Chromium and an ffmpeg with H.264 (e.g. the ffmpeg-static package).
 */
const path = require('path');
const fs = require('fs');
const os = require('os');
const { spawn } = require('child_process');
const { chromium } = require('playwright');

const [lang = 'en', out = 'tour-' + lang + '.mp4', base = 'https://alimun.com', ffmpeg = 'ffmpeg', video = 'overview'] = process.argv.slice(2);
const FPS = 30, CW = 1920, CH = 1080, SW = 1600, SH = 900;

/* Scenes as in the Claude Design prompt; seconds; ring = what is outlined; cursor/click = shown pressing it, then
   the screen after the click (afterRing outlined there) */
let SCENES = [
  { card: ['app_tour_video_h', 'app_tour_video_p'], s: 5 },
  { route: 'today', minW: 1400, ring: '#view .card--forest', cursor: '[data-start-sample]', h: 'app_tour_next_h', p: 'app_tour_next_p', s: 9 },
  { route: 'today', ring: '#view .home__section ~ a.card', h: 'app_tour_todo_h', p: 'app_tour_todo_p', s: 7 },
  { route: 'classes', minW: 1600, ring: '#view .view__head .btn-row', cursor: 'a[href="#/classes/availability"]', click: true, afterRing: '#view .card', h: 'app_tour_classes_h', p: 'app_tour_classes_p', s: 9 },
  { route: 'classes/practice', ring: '[data-board]', cursor: '[data-bd="reveal"]', click: true, afterRing: '[data-board]', h: 'app_tour_lessons_h', p: 'app_tour_lessons_p', s: 9 },
  { route: 'homework', ring: '#view .card', cursor: '#view a[href^="#/homework/mark/"]', click: true, afterRing: '#view .card', h: 'app_tour_homework_h', p: 'app_tour_homework_p', s: 9 },
  { route: 'messages', ring: '.ms-list', cursor: 'a.ms-conv', click: true, afterRing: '.ms-main', h: 'app_tour_messages_h', p: 'app_tour_messages_p', s: 6 },
  { route: 'settings', ring: '#view textarea', h: 'app_tour_settings_h', p: 'app_tour_settings_p', s: 8 },
  { route: 'today', minW: 1600, ring: '[data-pagehelp]', cursor: '[data-pagehelp]', h: 'app_tour_help_h', p: 'app_tour_help_p', s: 7 },
  { card: ['app_tour_practice_h', 'app_tour_practice_p'], s: 6, last: true }
];

/* A task video: its title card, then one scene per beat (scripts/task-videos.js); captions under keys tv_* */
const TASK = video === 'overview' ? null : require('./task-videos.js');
if (TASK) {
  const v = TASK.VIDEOS[video]; if (!v) throw new Error('No video ' + video);
  SCENES = [{ card: ['tv_h', 'tv_p'], s: 3.5 }].concat(v.beats.map((b, i) => ({ ...b, task: true, h: 'tv_h', p: 'tv_' + i, s: b.s || 5.5 })));
  SCENES[SCENES.length - 1].s += 1.5; SCENES[SCENES.length - 1].last = true;
}

/* The first visible match; "css|key" = the one whose text is that dashboard label in the page's language */
const vis = (sel) => {
  if (!sel) return null;
  let css = sel, txt = null;
  if (sel.indexOf('|') > 0) { const p = sel.split('|'), T = window.ALIMUN_TRANSLATIONS || {}, l = document.documentElement.lang === 'fr-MA' ? 'ma' : document.documentElement.lang; css = p[0]; txt = ((T[l] && T[l][p[1]]) || (T.en && T.en[p[1]]) || '').trim(); }
  return Array.from(document.querySelectorAll(css)).find((x) => { const r = x.getBoundingClientRect(); return r.width && r.height && getComputedStyle(x).visibility !== 'hidden' && (!txt || x.textContent.trim() === txt); });
};

async function capture(page, tmp) {
  await page.goto(`${base}/app/teach?sample=1&lang=${lang}#/today`);
  await page.waitForSelector('#loading.is-done', { state: 'attached', timeout: 30000 });
  await page.addStyleTag({ content: '.sample-note, .pr-note, .cr-wait .bub, #view > .grid > p.t-tiny.span-12 { display: none !important; } ::-webkit-scrollbar { display: none; }' });
  await page.waitForTimeout(1200);
  const text = await page.evaluate(() => {
    const T = window.ALIMUN_TRANSLATIONS || {}, l = document.documentElement.lang === 'fr-MA' ? 'ma' : document.documentElement.lang;
    const o = {}; Object.keys(T.en || {}).filter((k) => k.indexOf('app_tour_') === 0).forEach((k) => { o[k] = (T[l] && T[l][k]) || T.en[k]; });
    return { t: o, rtl: document.documentElement.dir === 'rtl' };
  });
  if (TASK) { /* the captions, with each {app_...} replaced by that label as the dashboard shows it */
    const tx = (TASK.TEXT[lang] || TASK.TEXT.en)[video];
    const lines = await page.evaluate((tx) => {
      const T = window.ALIMUN_TRANSLATIONS || {}, l = document.documentElement.lang === 'fr-MA' ? 'ma' : document.documentElement.lang;
      return tx.map((x) => x.replace(/\{(app_\w+)\}/g, (m, k) => (T[l] && T[l][k]) || (T.en && T.en[k]) || k));
    }, tx);
    text.t.tv_h = lines[0]; text.t.tv_p = lines[1]; lines.slice(2).forEach((x, i) => { text.t['tv_' + i] = x; });
  }
  const shots = [];
  for (let i = 0; i < SCENES.length; i++) {
    const s = SCENES[i];
    if (!s.route && !s.task) { shots.push(null); continue; }
    if (s.route) {
      await page.evaluate((h) => { location.hash = h; window.scrollTo(0, 0); }, '#/' + s.route);
      await page.waitForTimeout(1800);
    } else await page.waitForTimeout(300);
    for (const a of s.act || []) { /* done before the screenshot, not shown */
      if (a[0] === 'click') await page.evaluate(([sel, visSrc]) => { const e = eval(visSrc)(sel); if (e) e.click(); }, [a[1], '(' + vis.toString() + ')']);
      else if (a[0] === 'fill') { await page.locator(a[1]).filter({ visible: true }).first().fill(typeof a[2] === 'object' ? a[2][lang] || a[2].en : a[2]); await page.evaluate(() => document.activeElement && document.activeElement.blur()); }
      await page.waitForTimeout(300);
    }
    const rects = await page.evaluate(([ring, cur, visSrc]) => {
      const vis = eval(visSrc), box = (e) => { if (!e) return null; const r = e.getBoundingClientRect(); return { x: r.left, y: r.top, w: r.width, h: r.height }; };
      const el = vis(ring); if (el) el.scrollIntoView({ block: 'center' });
      return { ring: box(el), cursor: cur ? box(vis(cur)) : null };
    }, [s.ring, s.cursor, '(' + vis.toString() + ')']);
    if (s.narrow) [rects.ring, rects.cursor].forEach((r) => { if (r && r.w > s.narrow) { if (text.rtl) r.x += r.w - s.narrow; r.w = s.narrow; } }); /* only the start of a wide link */
    await page.waitForTimeout(500);
    const shot = { img: `s${i}.jpg`, ...rects };
    await page.screenshot({ path: path.join(tmp, shot.img), type: 'jpeg', quality: 92 });
    if (s.task) { /* a task beat: the click really happens, and the next beat shows what follows */
      if (s.click) { await page.evaluate(([sel, visSrc]) => { const e = eval(visSrc)(sel); if (e) e.click(); }, [s.cursor, '(' + vis.toString() + ')']); await page.waitForTimeout(s.wait || 2000); }
    } else if (s.click) {
      await page.evaluate(([sel, visSrc]) => { const e = eval(visSrc)(sel); if (e) e.click(); }, [s.cursor, '(' + vis.toString() + ')']);
      await page.waitForTimeout(2000);
      shot.after = await page.evaluate(([ring, visSrc]) => {
        const el = eval(visSrc)(ring); if (!el) return null; window.scrollTo(0, 0); document.querySelectorAll('#view, main, .app__main').forEach((m) => { m.scrollTop = 0; });
        const r = el.getBoundingClientRect(); return { x: r.left, y: Math.max(0, r.top), w: r.width, h: Math.min(r.height, innerHeight - Math.max(0, r.top)) };
      }, [s.afterRing, '(' + vis.toString() + ')']);
      await page.waitForTimeout(400);
      shot.afterImg = `s${i}b.jpg`;
      await page.screenshot({ path: path.join(tmp, shot.afterImg), type: 'jpeg', quality: 92 });
    }
    shots.push(shot);
  }
  return { ...text, shots };
}

/* The composition: one page, drawn as a pure function of time so every frame is exact */
function stageHtml(data) {
  return `<!doctype html><html dir="${data.rtl ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><style>
@font-face { font-family: Satoshi; src: url('/fonts/Satoshi-Variable.ttf') format('truetype'); font-weight: 300 900; }
@font-face { font-family: 'Coolvetica Condensed'; src: url('/fonts/coolvetica-condensed-rg.otf') format('opentype'); }
* { box-sizing: border-box; margin: 0; }
html, body { width: ${CW}px; height: ${CH}px; overflow: hidden; background: #f0efe9; color: #080808; font-family: Satoshi, sans-serif; }
.sc { position: absolute; inset: 0; opacity: 0; background: #f0efe9; }
.logo { position: absolute; top: 34px; inset-inline-start: 80px; height: 34px; }
.frame { position: absolute; left: 80px; top: 96px; width: 1760px; height: 700px; border-radius: 40px; overflow: hidden; background: #eeeeec;
  box-shadow: 0 30px 70px rgba(8,8,8,.14), 0 0 0 1px rgba(8,8,8,.06); }
.frame img { position: absolute; left: 0; top: 0; transform-origin: 0 0; will-change: transform; }
.ring { position: absolute; border-radius: 22px; box-shadow: 0 0 0 5px #ceff65, 0 0 0 3000px rgba(8,8,8,.16); opacity: 0; }
.tap { position: absolute; width: 64px; height: 64px; margin: -32px 0 0 -32px; border-radius: 50%; border: 5px solid #ceff65; opacity: 0; }
.cur { position: absolute; width: 34px; height: 34px; margin: -17px 0 0 -17px; border-radius: 50%; background: rgba(255,255,255,.92);
  border: 4px solid #1a443c; box-shadow: 0 6px 18px rgba(8,8,8,.3); opacity: 0; }
.cap { position: absolute; left: 80px; right: 80px; top: 836px; }
.cap h2 { font-family: 'Coolvetica Condensed', Satoshi, sans-serif; font-weight: 400; font-size: 58px; line-height: 1; text-transform: uppercase; letter-spacing: .005em; }
.cap p { margin-top: 14px; max-width: 1560px; font-size: 27px; line-height: 1.42; }
.card { display: grid; place-items: center; text-align: center; }
.card .in { width: 1240px; }
.card img { height: 52px; margin-bottom: 64px; }
.card h1 { font-family: 'Coolvetica Condensed', Satoshi, sans-serif; font-weight: 400; font-size: 132px; line-height: .92; text-transform: uppercase; }
.card i { display: block; width: 120px; height: 14px; margin: 40px auto; border-radius: 8px; background: #ceff65; }
.card p { font-size: 34px; line-height: 1.45; max-width: 1100px; margin: 0 auto; }
</style></head><body></body></html>`;
}

function stageScript() {
  /* runs in the page: builds the scenes from window.DATA and exposes window.draw(t) */
  const D = window.DATA, FW = 1760, FH = 700, SW = D.SW, SH = D.SH;
  const t = (k) => D.t[k] || k, body = document.body;
  const ease = (x) => x <= 0 ? 0 : x >= 1 ? 1 : x < .5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const span = (lt, a, b) => ease((lt - a) / (b - a));
  let at = 0;
  const S = D.scenes.map((s, i) => {
    const el = document.createElement('div'); el.className = 'sc' + (s.card ? ' card' : ''); body.appendChild(el);
    const o = { s, el, start: at, end: at + s.s }; at += s.s;
    if (s.card) {
      el.innerHTML = '<div class="in"><img src="/images/Alimun-Source-File-fixes.svg" alt=""><h1></h1><i></i><p></p></div>';
      el.querySelector('h1').textContent = t(s.card[0]); el.querySelector('p').textContent = t(s.card[1]);
      o.inner = el.querySelector('.in');
      return o;
    }
    const sh = D.shots[i];
    el.innerHTML = '<img class="logo" src="/images/Alimun-Source-File-fixes.svg" alt=""><div class="frame"><img class="a"><img class="b"><div class="ring"></div><div class="tap"></div><div class="cur"></div></div><div class="cap"><h2></h2><p></p></div>';
    el.querySelector('img.a').src = '/__vt/' + sh.img;
    if (sh.afterImg) el.querySelector('img.b').src = '/__vt/' + sh.afterImg; else el.querySelector('img.b').remove();
    el.querySelector('h2').textContent = t(s.h); el.querySelector('p').textContent = t(s.p);
    Object.assign(o, { sh, a: el.querySelector('img.a'), b: el.querySelector('img.b'), ring: el.querySelector('.ring'), cur: el.querySelector('.cur'), tap: el.querySelector('.tap'), cap: el.querySelector('.cap') });
    [o.a, o.b].forEach((im) => { if (im) { im.style.width = SW + 'px'; im.style.height = SH + 'px'; } });
    return o;
  });
  const TOTAL = at;

  /* camera: centre (cx, cy) and visible width vw, in screenshot pixels */
  /* near the top of the page, show it from the top instead of cutting a heading in half */
  const top = (cy, vh) => cy - vh / 2 < 150 ? vh / 2 : cy;
  const side = (cx, vw, r) => cx - vw / 2 < 260 && (!r || r.x + r.w + 40 <= vw) ? vw / 2 : SW - (cx + vw / 2) < 260 && (!r || r.x - 40 >= SW - vw) ? SW - vw / 2 : cx;
  const wide = (r) => { const vw = SW, vh = vw * FH / FW; return { vw, cx: SW / 2, cy: top(clamp(r ? r.y + r.h / 2 : SH / 2, vh / 2, SH - vh / 2), vh) }; };
  const focus = (r, minW) => {
    if (!r) return wide(null);
    const vw = clamp(Math.max(r.w + 220, (r.h + 170) * FW / FH, minW || 0), 620, SW), vh = vw * FH / FW;
    return { vw, cx: side(clamp(r.x + r.w / 2, vw / 2, SW - vw / 2), vw, r), cy: vh >= SH ? SH / 2 : top(clamp(r.y + r.h / 2, vh / 2, SH - vh / 2), vh) };
  };
  const mix = (a, b, k) => ({ vw: a.vw + (b.vw - a.vw) * k, cx: a.cx + (b.cx - a.cx) * k, cy: a.cy + (b.cy - a.cy) * k });
  const put = (img, cam) => { const s = FW / cam.vw; img.style.transform = `translate(${FW / 2 - cam.cx * s}px, ${FH / 2 - cam.cy * s}px) scale(${s})`; };
  const map = (cam, x, y) => { const s = FW / cam.vw; return [FW / 2 + (x - cam.cx) * s, FH / 2 + (y - cam.cy) * s, s]; };
  const ringAt = (el, cam, r, op) => {
    if (!r || op <= 0) { el.style.opacity = 0; return; }
    const pad = 12, [x, y, s] = map(cam, r.x - pad, r.y - pad);
    Object.assign(el.style, { left: x + 'px', top: y + 'px', width: (r.w + pad * 2) * s + 'px', height: (r.h + pad * 2) * s + 'px', opacity: op });
  };

  /* task beats carry on from the previous beat: the camera and the pointer start where they were */
  S.forEach((o, i) => {
    const p = S[i - 1];
    if (!o.s.task || !p || !p.s.task) return;
    o.prevCam = focus(p.sh.ring, p.s.minW);
    if (p.sh.cursor) o.prevCur = { x: p.sh.cursor.x + p.sh.cursor.w / 2, y: p.sh.cursor.y + p.sh.cursor.h / 2 };
  });
  window.TOTAL = TOTAL;
  function drawTask(o, lt, dur) {
    const sh = o.sh, f = focus(sh.ring, o.s.minW), from = o.prevCam || wide(sh.ring);
    const cam = mix(from, f, span(lt, 0, 1.2)); cam.vw *= 1 - .025 * clamp((lt - 1.2) / (dur - 1.2), 0, 1);
    put(o.a, cam);
    ringAt(o.ring, cam, sh.ring, span(lt, .9, 1.4));
    o.cur.style.opacity = 0; o.tap.style.opacity = 0;
    if (sh.cursor) {
      const c = sh.cursor, tx = c.x + c.w / 2, ty = c.y + c.h / 2, st = o.prevCur || { x: tx + 240, y: ty + 200 }, k = span(lt, 1.3, 2.3);
      const [x, y] = map(cam, st.x + (tx - st.x) * k, st.y + (ty - st.y) * k);
      const pr = (o.s.press || o.s.click) && lt > 2.55 && lt < 2.8 ? .72 : 1;
      Object.assign(o.cur.style, { left: x + 'px', top: y + 'px', opacity: o.prevCur ? 1 : span(lt, 1, 1.4), transform: 'scale(' + pr + ')' });
      if (o.s.press || o.s.click) { const q = clamp((lt - 2.6) / .7, 0, 1); Object.assign(o.tap.style, { left: x + 'px', top: y + 'px', opacity: q > 0 && q < 1 ? .9 * (1 - q) : 0, transform: 'scale(' + (.5 + q * 1.4) + ')' }); }
    }
    const pv = S[S.indexOf(o) - 1], ck = pv && pv.s.task ? 1 : span(lt, .15, .9);
    o.cap.style.opacity = ck; o.cap.style.transform = 'translateY(' + (1 - ck) * 18 + 'px)';
  }
  window.draw = (T) => {
    S.forEach((o, i) => {
      const lt = T - o.start, dur = o.s.s;
      const fin = i === 0 ? 1 : clamp((lt + .3) / .6, 0, 1);
      /* task videos: the next scene fades in on top, so this one stays solid underneath (no flash between beats) */
      const fout = o.s.last ? 1 : D.task ? (lt > dur + .3 ? 0 : 1) : clamp((dur + .3 - lt) / .6, 0, 1);
      const op = Math.min(fin, fout);
      o.el.style.opacity = op; o.el.style.display = op > 0 ? '' : 'none';
      if (op <= 0) return;
      if (o.s.card) { const k = span(lt, 0, 1.1); o.inner.style.transform = `translateY(${(1 - k) * 26}px)`; o.inner.style.opacity = k; return; }
      if (o.s.task) { drawTask(o, lt, dur); return; }
      const sh = o.sh, cl = o.s.click ? 3.9 : 99;
      const w0 = wide(sh.ring), f1 = focus(sh.ring, o.s.minW);
      let cam = mix(w0, f1, span(lt, .25, 1.8));
      const drift = clamp((lt - 1.8) / (dur - 1.8), 0, 1);
      cam = { ...cam, vw: cam.vw * (1 - .035 * drift) };
      if (lt >= cl) {
        const f2 = focus(sh.after), k = span(lt, cl + .1, cl + 1.5);
        cam = mix(f1, f2, k); cam.vw *= (1 - .02 * clamp((lt - cl - 1.5) / 3, 0, 1));
      }
      put(o.a, cam); if (o.b) { put(o.b, cam); o.b.style.opacity = span(lt, cl, cl + .45); }
      const r1 = span(lt, 1.5, 2.1) * (lt < cl - .3 ? 1 : 1 - span(lt, cl - .3, cl));
      if (lt < cl) ringAt(o.ring, cam, sh.ring, r1); else ringAt(o.ring, cam, sh.after, span(lt, cl + 1.4, cl + 1.9));
      if (sh.cursor) {
        const c = sh.cursor, [tx, ty] = map(cam, c.x + c.w / 2, c.y + c.h / 2), k = span(lt, 2.3, 3.3);
        const x = FW * .62 + (tx - FW * .62) * k, y = FH + 40 + (ty - FH - 40) * k;
        const press = o.s.click && lt > 3.45 && lt < 3.7 ? .72 : 1;
        const vis = span(lt, 2.2, 2.6) * (o.s.click ? 1 - span(lt, cl + .2, cl + .6) : 1 - span(lt, dur - .8, dur - .3));
        Object.assign(o.cur.style, { left: x + 'px', top: y + 'px', opacity: vis, transform: `scale(${press})` });
      }
      const ck = span(lt, .15, .9); o.cap.style.opacity = ck; o.cap.style.transform = `translateY(${(1 - ck) * 18}px)`;
    });
  };
}

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'alimun-dtour-'));
  const browser = await chromium.launch();
  const cap = await browser.newContext({ viewport: { width: SW, height: SH }, deviceScaleFactor: 2 });
  const data = await capture(await cap.newPage(), tmp);
  await cap.close();

  const ctx = await browser.newContext({ viewport: { width: CW, height: CH } });
  const page = await ctx.newPage();
  await page.route('**/__vt/**', (r) => {
    const f = decodeURIComponent(new URL(r.request().url()).pathname.replace('/__vt/', ''));
    if (f === 'stage.html') return r.fulfill({ contentType: 'text/html', body: stageHtml(data) });
    r.fulfill({ contentType: 'image/jpeg', body: fs.readFileSync(path.join(tmp, path.basename(f))) });
  });
  await page.goto(`${base}/__vt/stage.html`);
  await page.evaluate((d) => { window.DATA = d; }, { ...data, scenes: SCENES, SW, SH, task: !!TASK });
  await page.evaluate('(' + stageScript.toString() + ')()');
  await page.evaluate(() => Promise.all([document.fonts.ready, ...Array.from(document.images).map((i) => i.decode().catch(() => {}))]));
  const total = await page.evaluate(() => window.TOTAL), frames = Math.round(total * FPS);
  if (process.env.VT_STILLS) { /* VT_STILLS=2,8.5,14 writes those seconds as <out>-<s>.jpg to look at, instead of the video */
    for (const s of process.env.VT_STILLS.split(',')) { await page.evaluate((T) => window.draw(T), +s); await page.screenshot({ path: `${out}-${s}.jpg`, type: 'jpeg', quality: 85 }); }
    await browser.close(); fs.rmSync(tmp, { recursive: true, force: true }); return;
  }

  const ff = spawn(ffmpeg, ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '27', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-an', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const done = new Promise((ok, no) => ff.on('close', (c) => c ? no(new Error('ffmpeg ' + c)) : ok()));
  for (let f = 0; f < frames; f++) {
    await page.evaluate((T) => window.draw(T), f / FPS);
    const buf = await page.screenshot({ type: 'jpeg', quality: 90 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  }
  ff.stdin.end(); await done;
  await browser.close();
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`${out}: ${total} s, ${frames} frames, ${(fs.statSync(out).size / 1048576).toFixed(1)} MB`);
})().catch((e) => { console.error(e); process.exit(1); });
