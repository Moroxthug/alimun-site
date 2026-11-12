/**
 * Pricing engine rules (docs/PRICING_ENGINE_SPEC.md section 4), kept free of Stripe and the database so they can be
 * unit tested (tests/unit/pricing.test.js). api/pricing.js does the reading and writing.
 *
 * The band comes from the country the card was issued in; a locked band goes up at once and down only after
 * band_change_allowed_at (the same rule as public.set_band). The currency is the card country's if the band is
 * priced in it, else EUR. Founding prices exist only for level and exam packs, while the window is open and seats
 * remain, or for a learner whose founding lock still runs.
 */
const crypto = require('crypto');

// What each product sells and how it is charged (section 5). b2b rooms are invoiced, never sold here.
const PRODUCTS = {
  app:         { kind: 'app',        cadences: ['month', 'year'],     charge: 'subscription' },
  open_en:     { kind: 'open_class', cadences: ['month'],             charge: 'subscription', language: 'en' },
  open_de:     { kind: 'open_class', cadences: ['month'],             charge: 'subscription', language: 'de' },
  level_en:    { kind: 'level_pack', cadences: ['month', 'upfront'],  charge: 'reserve',      language: 'en' },
  level_de:    { kind: 'level_pack', cadences: ['month', 'upfront'],  charge: 'reserve',      language: 'de' },
  exam_en:     { kind: 'exam_pack',  cadences: ['month', 'upfront'],  charge: 'reserve',      language: 'en' },
  exam_de:     { kind: 'exam_pack',  cadences: ['month', 'upfront'],  charge: 'reserve',      language: 'de' },
  help_class:  { kind: 'help_class', cadences: ['once'],              charge: 'once' },
  trial:       { kind: 'trial',      cadences: ['once'],              charge: 'once' },
  minutes_30:  { kind: 'minutes',    cadences: ['once'],              charge: 'once', minutes: 30 },
  minutes_120: { kind: 'minutes',    cadences: ['once'],              charge: 'once', minutes: 120 },
};

const QUOTE_MINUTES = 15;
const has = (k) => typeof k === 'string' && Object.prototype.hasOwnProperty.call(PRODUCTS, k);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** The products the checkout sells today: app_settings.pricing_on_sale, a comma list, known keys only. */
function onSale(setting) {
  return String(setting || '').split(',').map((s) => s.trim()).filter(has);
}

/** A purchase request the server can act on, or an error code. */
function checkRequest(productKey, cadence, saleList) {
  if (!has(productKey)) return 'unknown_product';
  const p = PRODUCTS[productKey];
  if (!p.cadences.includes(cadence)) return 'bad_cadence';
  if (saleList && !saleList.includes(productKey)) return 'not_on_sale';
  return null;
}

/** The country's row, or the default for countries the table does not list (Band B, USD, tax inside). */
function countryRow(row, country) {
  if (row && (row.band === 'A' || row.band === 'B')) return row;
  return { country: country || null, band: 'B', currency: 'usd', tax_inclusive: true };
}

/**
 * The band a purchase is priced in.
 * cardBand: the card country's band. current: the learner's customer_pricing row or null.
 * Returns { band, change } where change says set_band must record a new band.
 */
function resolveBand(cardBand, current, now) {
  const at = now instanceof Date ? now.getTime() : Date.now();
  if (!current || !current.band) return { band: cardBand, change: true };
  if (current.band === cardBand) return { band: cardBand, change: false };
  if (cardBand === 'A') return { band: 'A', change: true };                 // up: at once
  const allowed = current.band_change_allowed_at ? Date.parse(current.band_change_allowed_at) : NaN;
  if (Number.isFinite(allowed) && allowed > at) return { band: current.band, change: false };  // down: not yet
  return { band: cardBand, change: true };
}

/** The currency: the card country's when the band is priced in it, else EUR (or USD when only USD is there). */
function chooseCurrency(countryCurrency, available) {
  const set = new Set(available || []);
  if (countryCurrency && set.has(countryCurrency)) return countryCurrency;
  if (set.has('eur')) return 'eur';
  return set.size ? [...set][0] : 'eur';
}

/** Whether a founding seat is open: before the closing date and while seats remain. */
function foundingWindowOpen(settings, now) {
  const at = now instanceof Date ? now.getTime() : Date.now();
  const close = Date.parse(settings && settings.founding_closes_at);
  const cap = parseInt(settings && settings.founding_cap, 10);
  const count = parseInt(settings && settings.founding_count, 10);
  return Number.isFinite(close) && at < close && Number.isFinite(cap) && (Number.isFinite(count) ? count : 0) < cap;
}

/** Whether this learner already holds a founding price that still runs. */
function foundingHeld(pricing, now) {
  const at = now instanceof Date ? now.getTime() : Date.now();
  if (!pricing || !pricing.founding) return false;
  const until = Date.parse(pricing.founding_until);
  return !Number.isFinite(until) || until > at;
}

/**
 * The variant a quote uses: 'founding' when the product has a founding price and the learner holds one or a seat
 * is open (claimed at purchase), else 'list'. claim says the purchase must claim a seat first.
 */
function chooseVariant({ hasFoundingPrice, pricing, settings, now }) {
  if (!hasFoundingPrice) return { variant: 'list', claim: false };
  if (foundingHeld(pricing, now)) return { variant: 'founding', claim: false };
  if (foundingWindowOpen(settings, now)) return { variant: 'founding', claim: true };
  return { variant: 'list', claim: false };
}

/** Why a quote can no longer be used, or null. */
function quoteProblem(quote, userId, now) {
  const at = now instanceof Date ? now.getTime() : Date.now();
  if (!quote || quote.user_id !== userId) return 'quote_not_found';
  if (quote.used_at) return 'quote_used';
  if (Date.parse(quote.expires_at) <= at) return 'quote_expired';
  return null;
}

/** Lower-cased email; for Gmail, dots and +tags removed, so one inbox makes one trial marker. */
function normaliseEmail(email) {
  const e = String(email || '').trim().toLowerCase();
  const at = e.lastIndexOf('@');
  if (at < 1) return e;
  let local = e.slice(0, at), domain = e.slice(at + 1);
  if (domain === 'googlemail.com') domain = 'gmail.com';
  local = local.split('+')[0];
  if (domain === 'gmail.com') local = local.replace(/\./g, '');
  return local + '@' + domain;
}

/** HMAC of a trial marker. The key is PRICING_HMAC_SECRET, or one derived from the service key until it is set. */
function markerHash(kind, value, secret) {
  return crypto.createHmac('sha256', String(secret || '')).update(kind + ':' + String(value || '')).digest('hex');
}
function markerSecret(env) {
  if (env.PRICING_HMAC_SECRET) return env.PRICING_HMAC_SECRET;
  if (!env.SUPABASE_SERVICE_ROLE_KEY) return '';
  return crypto.createHash('sha256').update('alimun-trial-markers:' + env.SUPABASE_SERVICE_ROLE_KEY).digest('hex');
}

/** Price-book rows for one band, grouped for the plans page: { product: { cadence: { list, founding } } }. */
function displayBook(rows, band, currency) {
  const out = {};
  for (const r of rows || []) {
    if (r.band !== band || !has(r.product_key)) continue;
    const p = (out[r.product_key] = out[r.product_key] || {});
    const c = (p[r.cadence] = p[r.cadence] || {});
    // The band's own currency when it has one, else EUR; a row in the chosen currency always wins.
    if (r.currency === currency || (!c[r.variant] && r.currency === 'eur')) c[r.variant] = { amount: r.unit_amount, currency: r.currency };
  }
  return out;
}

/**
 * The admin's weekly payment checks (section 7). quotes: spent quotes of the last 7 days; log: abuse_log rows.
 * Purchases by band; those where the visitor's country (at checkout) differs from the card's, by band, newest first;
 * refused trials by the marker that matched; free minutes withheld; disputes.
 */
function weeklyReport(quotes, log) {
  const byBand = { A: 0, B: 0 }, mismatchByBand = { A: 0, B: 0 }, mismatches = [];
  for (const q of quotes) {
    if (!q.used_at) continue;
    byBand[q.band] = (byBand[q.band] || 0) + 1;
    if (q.ip_country && q.card_country && q.ip_country !== q.card_country) {
      mismatchByBand[q.band] = (mismatchByBand[q.band] || 0) + 1;
      mismatches.push({ at: q.used_at, product: q.product_key, band: q.band, ipCountry: q.ip_country, cardCountry: q.card_country });
    }
  }
  mismatches.sort((a, b) => String(b.at).localeCompare(String(a.at)));
  const trialsRefused = {}, withheld = {};
  let disputes = 0;
  const recent = [];
  for (const r of log) {
    const d = r.detail || {};
    if (r.kind === 'trial_refused') trialsRefused[d.marker || 'other'] = (trialsRefused[d.marker || 'other'] || 0) + 1;
    else if (r.kind === 'free_minutes_withheld') withheld[d.why || 'other'] = (withheld[d.why || 'other'] || 0) + 1;
    else if (r.kind === 'dispute') disputes += 1;
    if (recent.length < 50) recent.push({ at: r.at, kind: r.kind, detail: d });
  }
  return { purchases: byBand, mismatchByBand, mismatches: mismatches.slice(0, 50), trialsRefused, freeMinutesWithheld: withheld, disputes, recent };
}

/**
 * Whether a referral earns its reward (section 7): only after the referred learner's first payment, only when their
 * card, phone and device markers all differ from the referrer's, and at most 5 rewards a month per referrer.
 * referrer / referred: { markers: { card, phone, device } } (hashes); rewardsThisMonth: the referrer's count so far.
 */
const REFERRAL_MONTHLY_CAP = 5;
function referralEligible({ referrer, referred, referredHasPaid, rewardsThisMonth }) {
  if (!referredHasPaid) return { ok: false, why: 'not_paid_yet' };
  if ((rewardsThisMonth || 0) >= REFERRAL_MONTHLY_CAP) return { ok: false, why: 'monthly_cap' };
  const a = (referrer && referrer.markers) || {}, b = (referred && referred.markers) || {};
  for (const k of ['card', 'phone', 'device']) if (a[k] && b[k] && a[k] === b[k]) return { ok: false, why: 'same_' + k };
  return { ok: true };
}

function isUuid(s) { return typeof s === 'string' && UUID.test(s); }

module.exports = {
  PRODUCTS, QUOTE_MINUTES, onSale, checkRequest, countryRow, resolveBand, chooseCurrency, foundingWindowOpen,
  foundingHeld, chooseVariant, quoteProblem, normaliseEmail, markerHash, markerSecret, displayBook, isUuid,
  weeklyReport, referralEligible, REFERRAL_MONTHLY_CAP,
};
