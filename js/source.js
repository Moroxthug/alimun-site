/* Where a visitor first came from (docs/GROWTH_PLAN.md, "Where new people come from").
 * On the first visit it notes the referring site (host only), the landing page and any utm_source / utm_medium /
 * utm_campaign tags. It is kept in the browser only when the cookie banner's analytics switch is on; without that
 * consent nothing is stored. The sign-up form sends it with the new account (AlimunSource.get()).
 * Turning analytics off later deletes it. */
(function () {
  if (window.AlimunSource) return;
  var KEY = 'alimun-first-touch';
  var OWN = /(^|\.)alimun\.com$/i;

  function clip(v, n) { v = v == null ? '' : String(v).trim(); return v ? v.slice(0, n) : ''; }
  function consentGiven() {
    if (window.ALIMUN_CONSENT) return !!window.ALIMUN_CONSENT.analytics;
    try { var p = JSON.parse(localStorage.getItem('alimun-cookie-consent') || 'null'); return !!(p && p.analytics); } catch (e) { return false; }
  }
  function read() {
    try { var v = JSON.parse(localStorage.getItem(KEY) || 'null'); return v && typeof v === 'object' ? v : null; } catch (e) { return null; }
  }
  function forget() { try { localStorage.removeItem(KEY); } catch (e) { /* storage blocked */ } }

  // This page view, in memory only until consent is known.
  var here = (function () {
    var ref = '';
    try { if (document.referrer) { var h = new URL(document.referrer).hostname.replace(/^www\./, ''); if (h && !OWN.test(h) && h !== location.hostname) ref = h; } } catch (e) { /* bad referrer */ }
    var q = new URLSearchParams(location.search);
    var t = { ref: clip(ref, 100), path: clip(location.pathname, 200), utm_source: clip(q.get('utm_source'), 100), utm_medium: clip(q.get('utm_medium'), 100), utm_campaign: clip(q.get('utm_campaign'), 100), at: new Date().toISOString() };
    // A page reached from inside the site without tags is not a first touch.
    t.external = !!(t.ref || t.utm_source || !document.referrer);
    return t;
  })();

  function save() {
    if (!consentGiven()) return;
    var old = read();
    // Keep the first touch; a later visit with campaign tags does not overwrite it.
    if (old || !here.external) return;
    var t = { ref: here.ref, path: here.path, utm_source: here.utm_source, utm_medium: here.utm_medium, utm_campaign: here.utm_campaign, at: here.at };
    try { localStorage.setItem(KEY, JSON.stringify(t)); } catch (e) { /* storage blocked */ }
  }

  window.addEventListener('alimun-consent-updated', function (e) {
    if (e.detail && e.detail.analytics) save(); else forget();
  });
  save();

  window.AlimunSource = {
    // The stored first touch, or null without consent or when none was recorded.
    get: function () {
      if (!consentGiven()) return null;
      save();
      var t = read();
      if (!t) return null;
      return { ref: clip(t.ref, 100), path: clip(t.path, 200), utm_source: clip(t.utm_source, 100), utm_medium: clip(t.utm_medium, 100), utm_campaign: clip(t.utm_campaign, 100), at: clip(t.at, 40) };
    }
  };
})();
