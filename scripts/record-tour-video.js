/**
 * Records the teacher dashboard overview video shown on the tour's welcome card (docs/TEACHER_ONBOARDING_PLAN.md).
 * It opens the real teacher dashboard with sample data, lights up each part with a caption taken from the tour's own
 * text (app_tour_* in js/translations.js, so every language gets its own version) and a cursor, and records it.
 *
 *   node scripts/record-tour-video.js <lang> <out.mp4> [base url, default https://alimun.com] [ffmpeg path]
 *
 * Needs Playwright's Chromium (npx playwright install chromium) and an ffmpeg with H.264 (e.g. the ffmpeg-static
 * package). Upload the result in Admin -> Teacher onboarding, which stores it as tour/<lang>.mp4.
 */
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');

const [lang = 'en', out = 'tour-' + lang + '.mp4', base = 'https://alimun.com', ffmpeg = 'ffmpeg'] = process.argv.slice(2);
const W = 1600, H = 900;

/* What the video shows, in order: the page, what to light up, where the cursor goes (and clicks), the caption keys */
const SCENES = [
  { route: 'today', ring: '#view .card--forest', cursor: '[data-start-sample]', h: 'app_tour_next_h', p: 'app_tour_next_p', ms: 8000 },
  { route: 'today', ring: '#view .home__section ~ a.card', h: 'app_tour_todo_h', p: 'app_tour_todo_p', ms: 6500 },
  { route: 'classes', ring: '#view .view__head .btn-row', cursor: 'a[href="#/classes/availability"]', click: true, after: 2500, h: 'app_tour_classes_h', p: 'app_tour_classes_p', ms: 8000 },
  { route: 'classes/practice', ring: '[data-board]', cursor: '[data-bd="reveal"]', click: true, h: 'app_tour_lessons_h', p: 'app_tour_lessons_p', ms: 8000 },
  { route: 'homework', ring: '#view .card', cursor: '#view a[href^="#/homework/mark/"]', click: true, after: 2500, h: 'app_tour_homework_h', p: 'app_tour_homework_p', ms: 9000 },
  { route: 'messages', ring: '#view .card', h: 'app_tour_messages_h', p: 'app_tour_messages_p', ms: 6000 },
  { route: 'settings', ring: '#view textarea', h: 'app_tour_settings_h', p: 'app_tour_settings_p', ms: 8500 },
  { route: 'today', ring: '[data-pagehelp]', cursor: '[data-pagehelp]', click: true, after: 2000, h: 'app_tour_help_h', p: 'app_tour_help_p', ms: 7000 }
];

/* The caption, the light and the cursor, drawn on top of the page in the dashboard's own fonts and colours */
const STAGE = `
(() => {
  const css = document.createElement('style');
  css.textContent = \`
    .sample-note, .pr-note { display: none !important; }
    #vt-dim { position: fixed; inset: 0; z-index: 2000; pointer-events: none; transition: opacity .4s; }
    #vt-ring { position: fixed; z-index: 2001; border-radius: 22px; pointer-events: none; box-shadow: 0 0 0 3px #ceff65, 0 0 0 9999px rgba(8,8,8,.45);
      transition: left .6s cubic-bezier(.2,.8,.2,1), top .6s cubic-bezier(.2,.8,.2,1), width .6s cubic-bezier(.2,.8,.2,1), height .6s cubic-bezier(.2,.8,.2,1), opacity .4s; }
    #vt-cap { position: fixed; z-index: 2003; left: 50%; bottom: 36px; transform: translateX(-50%); width: min(1040px, calc(100vw - 64px)); padding: 22px 30px 24px;
      border-radius: 26px; background: #fff; box-shadow: 0 24px 60px rgba(8,8,8,.28); transition: opacity .35s, transform .35s; }
    #vt-cap.is-out { opacity: 0; transform: translate(-50%, 14px); }
    #vt-cap h2 { margin: 0 0 6px; font-family: 'Coolvetica', 'Coolvetica Condensed', sans-serif; font-size: 34px; line-height: 1.05; text-transform: uppercase; color: #080808; font-weight: 400; }
    #vt-cap p { margin: 0; font-size: 21px; line-height: 1.45; color: #080808; }
    #vt-cur { position: fixed; z-index: 2004; width: 26px; height: 26px; margin: -13px 0 0 -13px; border-radius: 50%; background: rgba(255,255,255,.9);
      border: 3px solid #1a443c; box-shadow: 0 4px 14px rgba(8,8,8,.3); left: 50%; top: 40%; transition: left .9s cubic-bezier(.3,.7,.2,1), top .9s cubic-bezier(.3,.7,.2,1), transform .15s; }
    #vt-cur.is-click { transform: scale(.7); }
    #vt-full { position: fixed; inset: 0; z-index: 2005; display: grid; place-items: center; background: #f0efe9; transition: opacity .6s; }
    #vt-full.is-out { opacity: 0; pointer-events: none; }
    #vt-full div { max-width: 1000px; padding: 0 60px; text-align: center; }
    #vt-full h1 { margin: 0 0 18px; font-family: 'Coolvetica', 'Coolvetica Condensed', sans-serif; font-size: 88px; line-height: .95; text-transform: uppercase; font-weight: 400; color: #080808; }
    #vt-full p { margin: 0 auto; max-width: 820px; font-size: 26px; line-height: 1.45; color: #080808; }
    #vt-full i { display: block; width: 90px; height: 10px; margin: 0 auto 30px; border-radius: 6px; background: #ceff65; }
  \`;
  document.head.appendChild(css);
  const add = (id) => { const e = document.createElement('div'); e.id = id; document.body.appendChild(e); return e; };
  const ring = add('vt-ring'), cap = add('vt-cap'), cur = add('vt-cur'), full = add('vt-full');
  ring.style.opacity = 0; cap.classList.add('is-out'); full.classList.add('is-out');
  const T = window.ALIMUN_TRANSLATIONS || {}, lang = document.documentElement.lang === 'fr-MA' ? 'ma' : document.documentElement.lang;
  const t = (k) => (T[lang] && T[lang][k]) || (T.en && T.en[k]) || k;
  const vis = (sel) => Array.from(document.querySelectorAll(sel)).find((x) => { const r = x.getBoundingClientRect(); return r.width && r.height && getComputedStyle(x).visibility !== 'hidden'; });
  window.VT = {
    full(h, p) { full.innerHTML = '<div><i></i><h1></h1><p></p></div>'; full.querySelector('h1').textContent = t(h); full.querySelector('p').textContent = t(p); full.classList.remove('is-out'); },
    fullOut() { full.classList.add('is-out'); },
    cap(h, p) { cap.innerHTML = '<h2></h2><p></p>'; cap.querySelector('h2').textContent = t(h); cap.querySelector('p').textContent = t(p); cap.classList.remove('is-out'); },
    capOut() { cap.classList.add('is-out'); },
    ring(sel) {
      const el = sel && vis(sel); if (!el) { ring.style.opacity = 0; return false; }
      el.scrollIntoView({ block: 'center' });
      const r = el.getBoundingClientRect(), pad = 10;
      Object.assign(ring.style, { left: (r.left - pad) + 'px', top: (r.top - pad) + 'px', width: (r.width + pad * 2) + 'px', height: (r.height + pad * 2) + 'px', opacity: 1 });
      return true;
    },
    ringOut() { ring.style.opacity = 0; },
    cursor(sel) { const el = vis(sel); if (!el) return false; const r = el.getBoundingClientRect(); cur.style.left = (r.left + r.width / 2) + 'px'; cur.style.top = (r.top + r.height / 2) + 'px'; return true; },
    press() { cur.classList.add('is-click'); setTimeout(() => cur.classList.remove('is-click'), 180); },
    click(sel) { const el = vis(sel); if (el) el.click(); }
  };
})();`;

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'alimun-tour-'));
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, recordVideo: { dir: tmp, size: { width: W, height: H } } });
  const t0 = Date.now();
  const page = await ctx.newPage();
  const wait = (ms) => page.waitForTimeout(ms);
  await page.goto(`${base}/app/teach?sample=1&lang=${lang}#/today`);
  await page.waitForSelector('#loading.is-done', { state: 'attached', timeout: 20000 });
  await wait(800);
  await page.evaluate(STAGE);
  await page.evaluate(() => VT.full('app_tour_video_h', 'app_tour_video_p'));
  const start = (Date.now() - t0) / 1000 + 0.3;
  await wait(4500);
  await page.evaluate(() => VT.fullOut());
  await wait(700);

  for (const s of SCENES) {
    const hash = '#/' + s.route;
    if (await page.evaluate(() => location.hash) !== hash) {
      await page.evaluate(() => { VT.capOut(); VT.ringOut(); });
      await wait(350);
      await page.evaluate((h) => { location.hash = h; }, hash);
      await wait(1600);
    }
    await page.evaluate((s) => { VT.ring(s.ring); VT.cap(s.h, s.p); }, s);
    await wait(1200);
    if (s.cursor) {
      await page.evaluate((sel) => VT.cursor(sel), s.cursor);
      await wait(1300);
      if (s.click) {
        await page.evaluate(() => VT.press()); await wait(200);
        await page.evaluate(() => VT.ringOut());
        await page.evaluate((sel) => VT.click(sel), s.cursor);
        await wait(s.after || 1200);
      }
    }
    await wait(Math.max(1500, s.ms - 2700 - (s.after || 0)));
  }
  await page.evaluate(() => { VT.capOut(); VT.ringOut(); VT.full('app_tour_practice_h', 'app_tour_practice_p'); });
  await wait(6000);
  const end = (Date.now() - t0) / 1000;
  const raw = await page.video().path();
  await ctx.close(); await browser.close();

  execFileSync(ffmpeg, ['-y', '-loglevel', 'error', '-ss', start.toFixed(2), '-to', end.toFixed(2), '-i', raw,
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '23', '-pix_fmt', 'yuv420p', '-r', '30', '-movflags', '+faststart', '-an', out]);
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(`${out}: ${(end - start).toFixed(1)} s, ${(fs.statSync(out).size / 1048576).toFixed(1)} MB`);
})().catch((e) => { console.error(e); process.exit(1); });
