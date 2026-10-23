/**
 * ALIMUN — display currency for pricing pages.
 *
 * Detects the visitor's currency (eur | usd | cad | aud | mad), rewrites the
 * hardcoded "€NN" prices on the page to the SAME amounts configured in Stripe
 * (supabase/setup-stripe-prices.js — keep FIXED in sync). There is no on-page
 * switcher (owner, 23 Oct 2026); ?cur= still overrides. Checkout reads window.AlimunCurrency.code (signup.html).
 *
 * Priority: ?cur=cad  >  saved choice (localStorage)  >  timezone / locale  >  eur
 */
(function () {
  var ORDER = ['eur', 'usd', 'cad', 'aud', 'mad'];
  var SYMBOL = { eur: '€', usd: '$', cad: 'C$', aud: 'A$', mad: 'MAD' };

  // EUR amount -> [usd, cad, aud, mad]. Exactly the Stripe prices.
  var FIXED = {
    24: [26, 39, 40, 260],       240: [260, 390, 400, 2600],
    59: [65, 95, 98, 640],       590: [650, 950, 980, 6400],
    109: [119, 175, 180, 1180],  1090: [1190, 1750, 1800, 11800],
    269: [289, 429, 445, 2910],  2690: [2890, 4290, 4450, 29100],
    29: [32, 45, 48, 310]
  };
  // Anything else (strike-through "was" prices, per-month equivalents) is converted approximately.
  var RATE = { usd: 1.1, cad: 1.6, aud: 1.65, mad: 10.8 };

  function saved() { try { return localStorage.getItem('alimun-currency'); } catch (e) { return null; } }
  function save(c) { try { localStorage.setItem('alimun-currency', c); } catch (e) {} }

  function detect() {
    try {
      var q = new URLSearchParams(location.search).get('cur');
      if (q && ORDER.indexOf(q.toLowerCase()) > -1) return q.toLowerCase();
    } catch (e) {}
    var s = saved();
    if (s && ORDER.indexOf(s) > -1) return s;
    try {
      var tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      var loc = (navigator.language || '').toLowerCase();
      if (/^America\/(Toronto|Vancouver|Edmonton|Winnipeg|Halifax|St_Johns|Regina|Montreal|Moncton|Glace_Bay|Goose_Bay|Iqaluit|Whitehorse|Yellowknife)$/.test(tz) || /-ca$/.test(loc)) return 'cad';
      if (/^Australia\//.test(tz) || /-au$/.test(loc)) return 'aud';
      if (tz === 'Africa/Casablanca' || /-ma$/.test(loc)) return 'mad';
      if (/^America\/(New_York|Chicago|Denver|Los_Angeles|Phoenix|Anchorage|Detroit|Indiana|Kentucky|Boise)/.test(tz) || tz === 'Pacific/Honolulu' || /-us$/.test(loc)) return 'usd';
    } catch (e) {}
    return 'eur';
  }

  var code = detect();

  function convert(eur, to) {
    to = to || code;
    if (to === 'eur') return eur;
    var f = FIXED[eur];
    if (f) return f[ORDER.indexOf(to) - 1];
    return Math.round(eur * RATE[to]);
  }

  function fmt(eur, to) {
    to = to || code;
    var n = convert(eur, to);
    var txt = String(n);
    if (to === 'mad') return txt + ' MAD';
    return SYMBOL[to] + txt;
  }

  // Format a number that is ALREADY in the target currency.
  function fmtNative(n, to) {
    to = to || code;
    return to === 'mad' ? n + ' MAD' : SYMBOL[to] + n;
  }

  // Monthly equivalent of a yearly price, in the active currency.
  function perMonthFromYearly(eurYearly, eurMonthlyEq) {
    if (code === 'eur') return eurMonthlyEq;
    return Math.round(convert(eurYearly) / 12);
  }

  window.AlimunCurrency = {
    code: code, order: ORDER, symbol: SYMBOL[code],
    convert: convert, fmt: fmt, fmtNative: fmtNative, perMonthFromYearly: perMonthFromYearly,
    set: function (c) { save(c); location.reload(); }
  };

  // ── Rewrite "€NN" text on static pages ──────────────────────
  var RE = /€\s?(\d+(?:[.,]\d+)?)/g;
  function rewrite(root) {
    if (code === 'eur') return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || /^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA|OPTION)$/.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest('[data-no-currency]')) return NodeFilter.FILTER_REJECT;
        return n.nodeValue.indexOf('€') > -1 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [], n;
    while ((n = w.nextNode())) nodes.push(n);
    nodes.forEach(function (t) {
      t.nodeValue = t.nodeValue.replace(RE, function (_, num) {
        return fmt(parseFloat(num.replace(',', '.')));
      });
    });
  }

  function init() {
    rewrite(document.body);
    if (code !== 'eur' && window.MutationObserver) {
      var busy = false;
      new MutationObserver(function () {
        if (busy) return;
        busy = true;
        setTimeout(function () { rewrite(document.body); busy = false; }, 50);
      }).observe(document.body, { childList: true, subtree: true, characterData: true });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
