/**
 * Alimun in-page banners (owner, 8 Nov 2026: "templates ... for in page banners"). Loaded by js/cookies-banner.js on
 * every public page and by js/app/shell.js in the student dashboard. Asks /api/campaigns?action=banner for the banner
 * that is on for this place and language and draws it in one of three layouts:
 *   strip: a slim bone bar with one sentence and a link (floating at the bottom of the site, above the content in the
 *          dashboard, since the site's menu is fixed to the top);
 *   card:  a small white card in the bottom corner with a picture, a heading, a sentence and a lime button;
 *   panel: a wide bone panel with a picture (above the footer on the site, above the content in the dashboard).
 * Site colours and fonts only, no black backgrounds. Every text is set with textContent. Closing hides that banner for
 * this browser. ?alimun_banner=<id>.<signature> shows a draft (preview links come from banner_save).
 */
(function () {
  'use strict';
  if (window.__alimunBanner) return;
  window.__alimunBanner = true;

  var LANGS = ['ar', 'de', 'es', 'fr', 'it', 'ma', 'pt', 'zh'];
  var CLOSE = { en: 'Close', es: 'Cerrar', fr: 'Fermer', ma: 'Fermer', de: 'Schließen', pt: 'Fechar', it: 'Chiudi', zh: '关闭', ar: 'إغلاق' };
  var dashboard = /^\/app(\/|\/index\.html)?$/.test(location.pathname);
  if (/^\/app\/./.test(location.pathname) && !/^\/app\/index\.html$/.test(location.pathname)) return; // admin and teacher pages: none

  function lang() {
    var m = location.pathname.match(/^\/([a-z]{2})(\/|$)/);
    if (m && LANGS.indexOf(m[1]) !== -1) return m[1];
    var h = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
    return LANGS.indexOf(h) !== -1 ? h : 'en';
  }
  function closed(id) { try { return localStorage.getItem('alimun-banner-closed-' + id) === '1'; } catch (e) { return false; } }
  function close(id, el) {
    try { localStorage.setItem('alimun-banner-closed-' + id, '1'); } catch (e) { /* storage blocked */ }
    el.classList.add('alb-out');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 250);
  }

  var CSS =
    '.alb{font-family:Satoshi,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#080808;box-sizing:border-box;transition:opacity .25s,transform .25s}' +
    '.alb *{box-sizing:border-box}.alb.alb-out{opacity:0;transform:translateY(8px)}' +
    '.alb h2{font-family:"Coolvetica Condensed","Arial Narrow",sans-serif;font-weight:400;line-height:1;margin:0 0 8px;color:#080808}' +
    '.alb p{margin:0;line-height:1.5;color:#2b2b2b}' +
    '.alb-btn{display:inline-block;background:#ceff65;color:#080808;border-radius:999px;padding:12px 22px;font-weight:700;font-size:15px;text-decoration:none;white-space:nowrap}' +
    '.alb-btn:hover{filter:brightness(.96)}' +
    '.alb-x{position:absolute;top:10px;right:10px;width:34px;height:34px;border:0;border-radius:50%;background:transparent;cursor:pointer;color:#080808;font-size:0}' +
    '.alb-x:hover{background:rgba(8,8,8,.06)}.alb-x svg{width:16px;height:16px}' +
    '[dir=rtl] .alb-x,.alb[dir=rtl] .alb-x{right:auto;left:10px}' +
    /* strip */
    '.alb-strip{position:relative;z-index:30;background:#eeeeec;padding:12px 56px;text-align:center;font-size:15px}' +
    '.alb-strip p{display:inline;color:#080808}.alb-strip a.alb-link{margin-left:10px;font-weight:700;color:#080808;text-decoration:underline;white-space:nowrap}' +
    '.alb-strip .alb-x{top:50%;margin-top:-17px}' +
    '.alb-float{position:fixed;z-index:900;left:50%;bottom:20px;transform:translateX(-50%);width:760px;max-width:calc(100vw - 32px);border-radius:20px;' +
      'box-shadow:0 14px 40px rgba(8,8,8,.14)}.alb-float.alb-out{transform:translate(-50%,8px)}' +
    /* card */
    '.alb-card{position:fixed;z-index:900;left:24px;bottom:24px;width:340px;max-width:calc(100vw - 32px);background:#fff;border-radius:24px;padding:8px;' +
      'box-shadow:0 18px 50px rgba(8,8,8,.16)}' +
    '.alb-card img{display:block;width:100%;height:auto;border-radius:18px;background:#f0efe9}' +
    '.alb-card .alb-in{padding:16px 16px 14px}.alb-card h2{font-size:30px}.alb-card p{font-size:15px;margin:0 0 16px}' +
    '.alb-card .alb-x{background:#fff;top:14px;right:14px}' +
    /* panel */
    '.alb-panel{position:relative;display:flex;align-items:center;gap:28px;background:#f0efe9;border-radius:28px;padding:12px 40px 12px 12px;margin:0 auto}' +
    '.alb-panel img{display:block;width:44%;max-width:420px;height:auto;border-radius:20px;background:#fff;flex:none}' +
    '.alb-panel h2{font-size:44px}.alb-panel p{font-size:17px;margin:0 0 20px}' +
    '.alb-panel .alb-in{padding:20px 0}' +
    '.alb-wrap{padding:48px 5%;background:#fff}.alb-wrap .alb-panel{max-width:1200px}' +
    '.alb-dash{margin:0 0 20px}' +
    '@media (max-width:767px){.alb-strip{padding:12px 48px 12px 16px;text-align:left}.alb-float{bottom:16px}.alb-card{left:16px;bottom:16px}' +
      '.alb-panel{flex-direction:column;align-items:stretch;gap:0;padding:8px 8px 4px}.alb-panel img{width:100%;max-width:none}' +
      '.alb-panel .alb-in{padding:18px 14px 16px}.alb-panel h2{font-size:34px}.alb-wrap{padding:32px 16px}' +
      '.alb-dash-card{bottom:84px}}';

  function x(id, el) {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'alb-x'; b.setAttribute('aria-label', CLOSE[lang()] || CLOSE.en);
    b.innerHTML = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 3l10 10M13 3 3 13"/></svg>';
    b.addEventListener('click', function () { close(id, el); });
    return b;
  }
  function node(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text) n.textContent = text; return n; }
  function safe(u) { return /^https:\/\/alimun\.com\//.test(u || '') ? u : ''; }

  function draw(b) {
    var st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    var el = node('aside', 'alb alb-' + b.template);
    el.setAttribute('aria-label', b.heading || b.text);
    if (lang() === 'ar') el.setAttribute('dir', 'rtl');
    var href = safe(b.href), pic = safe(b.picture);
    if (b.template === 'strip') {
      el.appendChild(node('p', '', b.text));
      if (href) { var a = node('a', 'alb-link', b.button_label); a.href = href; el.appendChild(a); }
      el.appendChild(x(b.id, el));
      if (dashboard) { var main = document.querySelector('#app .main'); if (main) { main.insertBefore(el, main.firstChild); return; } }
      el.classList.add('alb-float');
      document.body.appendChild(el);
      return;
    }
    if (pic) { var img = node('img'); img.src = pic; img.alt = ''; img.loading = 'lazy'; el.appendChild(img); }
    var inn = node('div', 'alb-in');
    inn.appendChild(node('h2', '', b.heading));
    inn.appendChild(node('p', '', b.text));
    if (href) { var btn = node('a', 'alb-btn', b.button_label + '  →'); btn.href = href; inn.appendChild(btn); }
    el.appendChild(inn);
    el.appendChild(x(b.id, el));
    if (b.template === 'card') {
      if (dashboard) el.classList.add('alb-dash-card');
      document.body.appendChild(el);
      return;
    }
    // panel
    if (dashboard) {
      var view = document.querySelector('#app .view');
      if (view && view.parentNode) { el.classList.add('alb-dash'); view.parentNode.insertBefore(el, view); }
      return;
    }
    var wrap = node('section', 'alb-wrap'); wrap.appendChild(el);
    var foot = document.querySelector('footer');
    if (foot && foot.parentNode) foot.parentNode.insertBefore(wrap, foot); else document.body.appendChild(wrap);
  }

  // Wait for the cookie choice (its banner sits at the bottom too) and, in the dashboard, for the app to be drawn.
  function ready(fn, tries) {
    tries = tries || 0;
    var cookie = document.querySelector('#alimun-cookie-banner.show');
    var appOk = !dashboard || document.querySelector('#app .view');
    if ((!cookie && appOk) || tries > 120) return fn();
    setTimeout(function () { ready(fn, tries + 1); }, 1000);
  }

  function start() {
    var pv = (location.search.match(/[?&]alimun_banner=([0-9a-f-]{36}\.[A-Za-z0-9_-]+)/) || [])[1] || '';
    var url = '/api/campaigns?action=banner&place=' + (dashboard ? 'dashboard' : 'site') + '&lang=' + lang() + (pv ? '&preview=' + encodeURIComponent(pv) : '');
    fetch(url, { credentials: 'omit' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (d) {
      var b = d && d.banner;
      if (!b || !b.text || (!pv && closed(b.id))) return;
      ready(function () { draw(b); });
    }).catch(function () { /* no banner */ });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
