/* Live prices on the public pages (docs/PRICING_ENGINE_SPEC.md step 9).
   The prices come from /api/pricing?action=display: the visitor's country sets the band and currency (the card sets
   the final price at checkout). Nothing is written in the page: an element shows a price only once it has loaded,
   and stays hidden if it cannot load, so there is never a stale or placeholder amount.

   Markup:
     data-pp-text="price=level_{lang}:month,up=level_{lang}:upfront,save=level_{lang}:save,class=level_{lang}:class"
         the element's own text is a template ("{price} a month, or {up} once, saving {save}") in the page's language
         (translated by the build or js/i18n.js); each name is replaced by that price. {lang} is the language chosen in
         the nearest [data-pp-lang] (en or de). Specs: product:cadence (the founding price while it is open, else the
         usual one), product:cadence:list (always the usual one), product:save (three monthly payments minus the
         upfront price), product:class (the monthly price over the classes in a month: 13 for packs, 4 for open
         classes).
     data-pp-founding   shown only while founding prices are open.
     data-pp-sale="app" shown only when that product is on sale.
     data-pp-tax="in" / "plus"  shown when the visitor's prices include tax / have sales tax added at checkout.
   AlimunPrices.render(root) re-fills after a change (for example the English / German switch). */
(function () {
  'use strict';
  var KEY = 'alimun_pp_v1', TTL = 600000, data = null, waiting = null;
  var CLASSES = { level_en: 13, level_de: 13, exam_en: 13, exam_de: 13, open_en: 4, open_de: 4 };

  function load() {
    if (data) return Promise.resolve(data);
    if (waiting) return waiting;
    try {
      var c = JSON.parse(sessionStorage.getItem(KEY) || 'null');
      if (c && Date.now() - c.at < TTL && c.d && c.d.prices) { data = c.d; return Promise.resolve(data); }
    } catch (e) { /* storage blocked */ }
    waiting = fetch('/api/pricing?action=display').then(function (r) { if (!r.ok) throw new Error('prices ' + r.status); return r.json(); })
      .then(function (d) { data = d; try { sessionStorage.setItem(KEY, JSON.stringify({ at: Date.now(), d: d })); } catch (e) { /* fine */ } return d; });
    return waiting;
  }
  function locale() { var l = document.documentElement.lang || 'en'; return l === 'ma' ? 'fr-MA' : l; }
  function fmt(x) {
    var whole = x.amount % 100 === 0;
    try {
      return new Intl.NumberFormat(locale(), { style: 'currency', currency: String(x.currency).toUpperCase(), minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 }).format(x.amount / 100);
    } catch (e) { return (x.amount / 100).toFixed(2) + ' ' + String(x.currency).toUpperCase(); }
  }
  function cell(product, cadence) { return data && data.prices && data.prices[product] && data.prices[product][cadence]; }
  /* The price a spec stands for, as { amount, currency }, or null */
  function priceOf(spec) {
    var p = spec.split(':'), product = p[0], what = p[1], only = p[2];
    var pick = function (cadence) { var c = cell(product, cadence); if (!c) return null; return only === 'list' || !data.founding || !c.founding ? c.list : c.founding; };
    if (what === 'save') {
      var m = pick('month'), u = pick('upfront');
      return m && u && m.currency === u.currency && m.amount * 3 > u.amount ? { amount: m.amount * 3 - u.amount, currency: m.currency } : null;
    }
    if (what === 'class') {
      var mo = pick('month');
      return mo && CLASSES[product] ? { amount: Math.round(mo.amount / CLASSES[product]), currency: mo.currency } : null;
    }
    return pick(what);
  }
  function langOf(el) { var h = el.closest('[data-pp-lang]'); return (h && h.getAttribute('data-pp-lang')) || 'en'; }

  function fill(el) {
    el.setAttribute('data-no-currency', '');                                 // already in the visitor's currency (js/currency.js skips it)
    var t = el.textContent;
    if (t.indexOf('{') > -1) el.setAttribute('data-pp-tpl', t);          // the (translated) template
    var tpl = el.getAttribute('data-pp-tpl');
    if (!tpl) return;
    var lang = langOf(el), ok = true;
    var out = tpl.replace(/\{(\w+)\}/g, function (m, name) {
      var spec = (el.getAttribute('data-pp-text') || '').split(',').map(function (s) { return s.split('='); }).filter(function (kv) { return kv[0] === name; })[0];
      if (!spec) return m;
      var x = priceOf(spec[1].replace('{lang}', lang));
      if (!x) { ok = false; return m; }
      return fmt(x);
    });
    el.__pp = true;
    el.textContent = out;
    el.hidden = !ok;
  }
  function render(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-pp-text]').forEach(fill);
    scope.querySelectorAll('[data-pp-founding]').forEach(function (el) { el.hidden = !(data && data.founding); });
    scope.querySelectorAll('[data-pp-sale]').forEach(function (el) { el.hidden = !(data && data.onSale && data.onSale.indexOf(el.getAttribute('data-pp-sale')) > -1); });
    scope.querySelectorAll('[data-pp-tax]').forEach(function (el) { el.hidden = !data || (el.getAttribute('data-pp-tax') === 'plus' ? data.taxInclusive !== false : data.taxInclusive === false); });
  }
  function start() {
    var els = document.querySelectorAll('[data-pp-text]');
    if (!els.length) return;
    els.forEach(function (el) { if (el.textContent.indexOf('{') > -1) el.setAttribute('data-pp-tpl', el.textContent); el.hidden = true; });
    document.querySelectorAll('[data-pp-founding],[data-pp-sale],[data-pp-tax]').forEach(function (el) { el.hidden = true; });
    load().then(function () { render(); }, function () { /* stays hidden */ });
    // js/i18n.js may translate the page after this runs: a new template is filled again
    if ('MutationObserver' in window) {
      var mo = new MutationObserver(function (list) {
        list.forEach(function (m) {
          var el = m.target.nodeType === 1 ? m.target : m.target.parentElement;
          if (el && el.hasAttribute && el.hasAttribute('data-pp-text') && el.textContent.indexOf('{') > -1 && data) fill(el);
        });
      });
      els.forEach(function (el) { mo.observe(el, { childList: true, characterData: true, subtree: true }); });
    }
  }
  window.AlimunPrices = { load: load, render: render, fmt: fmt, priceOf: function (spec) { return data ? priceOf(spec) : null; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
