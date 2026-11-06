/* Alimun captcha (Cloudflare Turnstile), docs/GROWTH_PLAN.md step 1.
 *
 * window.AlimunCaptcha.token() resolves to a fresh Turnstile token, or '' while no site key is set (dormant).
 * Cloudflare's script loads only on first use. The widget runs in "interaction-only" mode: invisible, and a small
 * check box appears at the bottom of the screen only when Cloudflare is unsure.
 *
 * Same-origin POSTs to the protected endpoints get the token in an X-Captcha-Token header automatically (contact,
 * corporate and email-signup forms, password reset), so the forms themselves, some in locked blocks, need no change.
 * Supabase Auth calls (sign up, sign in, password reset, resend) pass the token themselves as options.captchaToken.
 */
(function () {
  if (window.AlimunCaptcha) return;
  // Public site key from Cloudflare → Turnstile (safe in the browser). Empty = captcha off everywhere.
  var SITE_KEY = '';
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

  var box = null, widget = null;
  function container() {
    if (box) return box;
    box = document.createElement('div');
    box.id = 'alimun-captcha';
    box.setAttribute('style', 'position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:2147483000;');
    document.body.appendChild(box);
    return box;
  }

  function token() {
    if (!SITE_KEY) return Promise.resolve('');
    return load().then(function (ts) {
      return new Promise(function (resolve, reject) {
        var done = function (t) { resolve(t); };
        var fail = function () { reject(new Error('captcha failed')); };
        var lang = (document.documentElement.getAttribute('lang') || 'auto').slice(0, 2);
        if (widget !== null) { try { ts.remove(widget); } catch (e) {} }
        widget = ts.render(container(), {
          sitekey: SITE_KEY, appearance: 'interaction-only', language: lang === 'ma' ? 'fr' : lang,
          callback: done, 'error-callback': fail, 'expired-callback': fail, 'timeout-callback': fail,
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
