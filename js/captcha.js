/* Alimun captcha (Cloudflare Turnstile), docs/GROWTH_PLAN.md step 1.
 *
 * window.AlimunCaptcha.token() resolves to a fresh Turnstile token, or '' while no site key is set (dormant).
 * Cloudflare's script loads only on first use. The widget runs in "interaction-only" mode: invisible, and only when
 * Cloudflare is unsure does it ask for a tick. Then it is shown centred in an Alimun card (white, large radius, over a
 * bone tint) with a short heading and sentence in the page's language, in Cloudflare's light theme, and the card closes
 * by itself once the check passes (owner, 10 Nov 2026: "it looks horrible visually").
 *
 * Same-origin POSTs to the protected endpoints get the token in an X-Captcha-Token header automatically (contact,
 * corporate and email-signup forms, password reset), so the forms themselves, some in locked blocks, need no change.
 * Supabase Auth calls (sign up, sign in, password reset, resend) pass the token themselves as options.captchaToken.
 */
(function () {
  if (window.AlimunCaptcha) return;
  // Public site key from Cloudflare → Turnstile (safe in the browser). Empty = captcha off everywhere.
  var SITE_KEY = '0x4AAAAAAF21wM8ag7AmQ4hx';
  var PROTECTED = [/^\/api\/send-admin-email\?action=(contact|subscribe)\b/, /^\/api\/auth\?action=reset\b/];

  var loading = null;
  function load() {
    if (window.turnstile) return Promise.resolve(window.turnstile);
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      s.async = true;
      s.onload = function () { resolve(window.turnstile); };
      s.onerror = function () { loading = null; reject(new Error('captcha script failed')); };
      document.head.appendChild(s);
    });
    return loading;
  }

  var TEXT = {
    en: ['One quick check', 'Tick the box so we know you are a person. It only takes a second.'],
    es: ['Una comprobación rápida', 'Marca la casilla para que sepamos que eres una persona. Solo lleva un segundo.'],
    fr: ['Une petite vérification', 'Cochez la case pour nous montrer que vous êtes une personne. Cela ne prend qu\u2019une seconde.'],
    de: ['Eine kurze Prüfung', 'Setzen Sie das Häkchen, damit wir wissen, dass Sie ein Mensch sind. Es dauert nur eine Sekunde.'],
    pt: ['Uma verificação rápida', 'Marque a caixa para sabermos que é uma pessoa. Demora só um segundo.'],
    it: ['Un rapido controllo', 'Spunta la casella per farci sapere che sei una persona. Basta un secondo.'],
    zh: ['快速验证', '请勾选方框，让我们确认您是真人。只需一秒钟。'],
    ar: ['تحقق سريع', 'ضع علامة في المربع لنعرف أنك شخص حقيقي. لن يستغرق ذلك سوى ثانية.'],
  };
  function pageLang() {
    var m = location.pathname.match(/^\/(ar|de|es|fr|it|ma|pt|zh)(\/|$)/);
    var l = m ? m[1] : (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
    return l === 'ma' ? 'fr' : (TEXT[l] ? l : 'en');
  }

  var shell = null, box = null, widget = null;
  function container() {
    if (box) return box;
    var st = document.createElement('style');
    st.textContent =
      '#alimun-captcha-shell{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:16px;' +
        'background:rgba(240,239,233,.82);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .2s}' +
      '#alimun-captcha-shell.is-open{opacity:1;pointer-events:auto}' +
      '#alimun-captcha-card{width:100%;max-width:380px;background:#fff;border-radius:28px;padding:28px 26px 24px;box-shadow:0 24px 60px rgba(8,8,8,.12);' +
        'font-family:Satoshi,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#080808;transform:translateY(8px);transition:transform .2s}' +
      '#alimun-captcha-shell.is-open #alimun-captcha-card{transform:none}' +
      '#alimun-captcha-card h2{font-family:"Coolvetica Condensed","Arial Narrow",sans-serif;font-weight:400;font-size:34px;line-height:1;margin:0 0 10px;color:#080808;text-transform:none;letter-spacing:0}' +
      '#alimun-captcha-card p{margin:0 0 18px;font-size:15px;line-height:1.55;color:#2b2b2b}' +
      '#alimun-captcha{min-height:65px}';
    document.head.appendChild(st);
    var t = TEXT[pageLang()];
    shell = document.createElement('div');
    shell.id = 'alimun-captcha-shell';
    shell.setAttribute('role', 'dialog');
    shell.setAttribute('aria-modal', 'true');
    shell.setAttribute('aria-hidden', 'true');
    if (pageLang() === 'ar') shell.setAttribute('dir', 'rtl');
    var card = document.createElement('div'); card.id = 'alimun-captcha-card';
    var h = document.createElement('h2'); h.id = 'alimun-captcha-title'; h.textContent = t[0];
    var p = document.createElement('p'); p.textContent = t[1];
    box = document.createElement('div'); box.id = 'alimun-captcha';
    card.appendChild(h); card.appendChild(p); card.appendChild(box);
    shell.appendChild(card);
    shell.setAttribute('aria-labelledby', 'alimun-captcha-title');
    document.body.appendChild(shell);
    return box;
  }
  function show(on) {
    if (!shell) return;
    shell.classList.toggle('is-open', !!on);
    shell.setAttribute('aria-hidden', on ? 'false' : 'true');
  }

  function token() {
    if (!SITE_KEY) return Promise.resolve('');
    return load().then(function (ts) {
      return new Promise(function (resolve, reject) {
        var done = function (t) { show(false); resolve(t); };
        var fail = function () { show(false); reject(new Error('captcha failed')); };
        var lang = (document.documentElement.getAttribute('lang') || 'auto').slice(0, 2);
        if (widget !== null) { try { ts.remove(widget); } catch (e) {} }
        widget = ts.render(container(), {
          sitekey: SITE_KEY, appearance: 'interaction-only', theme: 'light', size: 'flexible', language: lang === 'ma' ? 'fr' : lang,
          callback: done, 'error-callback': fail, 'expired-callback': fail, 'timeout-callback': fail,
          // Cloudflare wants a tick: show the card; it closes again on success or failure.
          'before-interactive-callback': function () { show(true); },
          'after-interactive-callback': function () { setTimeout(function () { show(false); }, 600); },
        });
      });
    });
  }

  window.AlimunCaptcha = { token: token, enabled: function () { return !!SITE_KEY; } };

  if (!SITE_KEY || !window.fetch) return;
  var original = window.fetch;
  window.fetch = function (input, init) {
    try {
      var url = typeof input === 'string' ? input : (input && input.url) || '';
      var u = new URL(url, location.href);
      var path = u.pathname + u.search;
      var method = String((init && init.method) || (input && input.method) || 'GET').toUpperCase();
      var given = new Headers((init && init.headers) || (input && input.headers) || {});
      if (u.origin === location.origin && method === 'POST' && !given.get('X-Captcha-Token') && PROTECTED.some(function (re) { return re.test(path); })) {
        return token().then(function (t) {
          var opts = Object.assign({}, init || {});
          var h = new Headers(opts.headers || (input && input.headers) || {});
          h.set('X-Captcha-Token', t);
          opts.headers = h;
          return original.call(window, input, opts);
        });
      }
    } catch (e) { /* fall through to the normal request */ }
    return original.apply(window, arguments);
  };
})();
