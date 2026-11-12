/**
 * Finance jobs and the admin figures (docs/PRICING_ENGINE_SPEC.md section 8; build step 8).
 *
 *   foundingJob   daily: learners whose founding price ends within 30 days are told once (in their language); on the
 *                 day it ends the lock is closed, so later purchases are at the list price. Packs already running keep
 *                 their price to the end of the pack (the "end of the path" rule).
 *   fxJob         weekly: the ECB's rates (and an aggregator's for MAD) into fx_rates; each currency's move since the
 *                 price book was set (fx_rates of 11 Nov 2026, source 'pricing'); more than 7% is flagged.
 *   monthJob      monthly (the 1st, for the month before): revenue by currency, band and product from Stripe's charges,
 *                 refunds, disputes, new paying customers by channel, deferred revenue of packs, and the exam-guarantee
 *                 reserve (5% of exam-pack revenue) into finance_months and finance_reserves.
 *   figures       the admin page: cash by currency (Stripe balance), the months, deferred revenue, reserves, margin per
 *                 room, room size, refund and dispute rates, cost to win a customer by channel, AI cost against revenue,
 *                 founding seats, currency drift and today's tutor budget.
 *
 * The pure parts (perClass, roomMargin, drift, deferredOf, cac) are unit tested in tests/unit/finance.test.js.
 */
const DAY = 86400000;
const DRIFT_LIMIT = 0.07;
const RESERVE_SHARE = 0.05;
// Teacher pay per 60-minute class (docs/LAUNCH_PRICING_SPEC.md section 7): English €8 + €0.75 per learner present,
// German €12 + €1; open classes add €3; help classes pay half; payouts add about 3%. Video (Daily) about $0.004 per
// participant minute. Used for the margin estimate only; payouts are still entered by the admin.
const PAY = { English: { base: 8, per: 0.75 }, German: { base: 12, per: 1 } };
const VIDEO_EUR_PER_PERSON_MINUTE = 0.0037;

function monthStart(d) { const x = new Date(d); return new Date(Date.UTC(x.getUTCFullYear(), x.getUTCMonth(), 1)); }
function ymd(d) { return new Date(d).toISOString().slice(0, 10); }
function toEur(minor, currency, rates) {
  const c = String(currency || 'eur').toLowerCase();
  if (c === 'eur') return minor / 100;
  const r = rates[c];
  return r ? minor / 100 / r : 0;
}

/** Teacher pay for one class of a room, in EUR (estimate for the margin). */
function teacherPay(kind, language, learners) {
  const p = PAY[language] || PAY.English;
  let pay = p.base + p.per * learners;
  if (kind === 'open_class') pay += 3;
  if (kind === 'help_class') pay /= 2;
  return pay * 1.03;
}
/** What one learner's place is worth per class, in the entitlement's currency (minor units). */
function perClass(ent, price, sessionsTotal, classesPerMonth) {
  if (!price) return 0;
  if (ent.product_key.startsWith('open_')) return price.unit_amount / Math.max(1, classesPerMonth || 4);
  const full = ent.cadence === 'month' ? price.unit_amount * 3 : price.unit_amount;
  return full / Math.max(1, sessionsTotal);
}
/** A room's margin per class in EUR, before tax and card fees. learners: [{ perClassEur }] */
function roomMargin({ kind, language, minutes, learners }) {
  const revenue = learners.reduce((t, x) => t + x.perClassEur, 0);
  const pay = teacherPay(kind, language, learners.length) * ((minutes || 60) / 60);
  const video = VIDEO_EUR_PER_PERSON_MINUTE * (learners.length + 1) * (minutes || 60);
  return { revenue, pay, video, margin: revenue - pay - video, share: revenue > 0 ? (revenue - pay - video) / revenue : null };
}
/** Deferred revenue of one pack: what was paid minus the classes already given at their per-class value. */
function deferredOf(amountPaid, delivered, perClassValue) { return Math.max(0, amountPaid - delivered * perClassValue); }
/** Each currency's move since the price book was set: { currency: { then, now, drift, flagged } } */
function drift(pricingRates, latestRates) {
  const out = {};
  for (const c of Object.keys(pricingRates)) {
    if (!latestRates[c]) continue;
    const d = latestRates[c] / pricingRates[c] - 1;
    out[c] = { then: pricingRates[c], now: latestRates[c], drift: Math.round(d * 10000) / 10000, flagged: Math.abs(d) > DRIFT_LIMIT };
  }
  return out;
}
/** Cost to win a paying customer by channel: spend / new customers. */
function cac(spendByChannel, customersByChannel) {
  const out = {};
  for (const ch of new Set(Object.keys(spendByChannel).concat(Object.keys(customersByChannel)))) {
    const spend = spendByChannel[ch] || 0, n = customersByChannel[ch] || 0;
    out[ch] = { spend, customers: n, perCustomer: n ? Math.round((spend / n) * 100) / 100 : null };
  }
  return out;
}

// ── Reading helpers ──
async function rows(q, what) { const { data, error } = await q; if (error) throw new Error(what + ': ' + error.message); return data || []; }
async function latestRates(sb) {
  const data = await rows(sb.from('fx_rates').select('day, currency, per_eur').order('day', { ascending: false }).limit(200), 'fx_rates');
  const out = {};
  for (const r of data) if (!(r.currency in out)) out[r.currency] = Number(r.per_eur);
  return out;
}
async function pricingRates(sb) {
  const data = await rows(sb.from('fx_rates').select('currency, per_eur').eq('source', 'pricing'), 'pricing rates');
  return Object.fromEntries(data.map((r) => [r.currency, Number(r.per_eur)]));
}

// ── Founding prices ──
async function foundingJob(ctx, now) {
  const { sb } = ctx;
  const at = (now || new Date()).getTime();
  const out = { notices: 0, ended: 0 };
  const soon = await rows(sb.from('customer_pricing').select('user_id, founding_until, founding_notice_at').eq('founding', true)
    .is('founding_notice_at', null).lte('founding_until', new Date(at + 30 * DAY).toISOString()).gt('founding_until', new Date(at).toISOString()), 'founding soon');
  for (const r of soon) {
    await ctx.tell.founding(r.user_id, r.founding_until);
    await sb.from('customer_pricing').update({ founding_notice_at: new Date(at).toISOString() }).eq('user_id', r.user_id);
    out.notices++;
  }
  const over = await rows(sb.from('customer_pricing').select('user_id').eq('founding', true).lte('founding_until', new Date(at).toISOString()), 'founding over');
  for (const r of over) {
    await sb.from('customer_pricing').update({ founding: false, founding_ended_at: new Date(at).toISOString(), updated_at: new Date(at).toISOString() }).eq('user_id', r.user_id);
    out.ended++;
  }
  return out;
}

// ── Exchange rates ──
async function fetchRates(fetchFn) {
  const out = {};
  try {
    const r = await fetchFn('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml');
    const xml = await r.text();
    for (const m of xml.matchAll(/currency=['"]([A-Z]{3})['"]\s+rate=['"]([\d.]+)['"]/g)) out[m[1].toLowerCase()] = parseFloat(m[2]);
  } catch (e) { /* the aggregator below */ }
  try {
    const r = await fetchFn('https://open.er-api.com/v6/latest/EUR');
    const j = await r.json();
    for (const c of ['mad', 'usd', 'cad', 'gbp', 'aud', 'chf']) if (!out[c] && j && j.rates && j.rates[c.toUpperCase()]) out[c] = Number(j.rates[c.toUpperCase()]);
  } catch (e) { /* what the ECB gave */ }
  return out;
}
async function fxJob(ctx, now, fetchFn) {
  const { sb } = ctx;
  const day = ymd(now || new Date());
  const fresh = await rows(sb.from('fx_rates').select('day').neq('source', 'pricing').gte('day', ymd((now || new Date()).getTime() - 6 * DAY)).limit(1), 'recent rates');
  if (fresh.length) return { skipped: 'rates from this week exist' };
  const wanted = Object.keys(await pricingRates(sb));
  const got = await fetchRates(fetchFn || fetch);
  const rowsIn = wanted.filter((c) => got[c]).map((c) => ({ day, currency: c, per_eur: got[c], source: c === 'mad' ? 'open.er-api.com' : 'ecb' }));
  if (rowsIn.length) {
    const { error } = await sb.from('fx_rates').upsert(rowsIn, { onConflict: 'day,currency' });
    if (error) throw new Error('fx_rates: ' + error.message);
  }
  const d = drift(await pricingRates(sb), Object.fromEntries(rowsIn.map((r) => [r.currency, r.per_eur])));
  const flagged = Object.keys(d).filter((c) => d[c].flagged);
  if (flagged.length) await ctx.tell.owner([`Exchange rates moved more than 7% since the prices were set: ${flagged.map((c) => `${c.toUpperCase()} ${(d[c].drift * 100).toFixed(1)}%`).join(', ')}. Local prices in these currencies may need new amounts (supabase/maintenance/build_pricing_seed.py).`]);
  return { stored: rowsIn.length, flagged };
}

// ── Deferred revenue of packs (now) ──
async function deferredNow(sb, rates) {
  const ents = await rows(sb.from('entitlements').select('id, product_key, cadence, band, variant, currency, amount_paid, cohort_id, starts_at')
    .in('status', ['active', 'paused']).not('cohort_id', 'is', null).limit(5000), 'pack entitlements');
  let total = 0;
  for (const e of ents.filter((x) => /^(level|exam)_/.test(x.product_key))) {
    const sessions = await rows(sb.from('sessions').select('status, scheduled_at').eq('cohort_id', e.cohort_id).neq('status', 'cancelled'), 'room sessions');
    const delivered = sessions.filter((s) => s.status === 'completed' && (!e.starts_at || s.scheduled_at >= e.starts_at)).length;
    const price = (await rows(sb.from('price_book').select('unit_amount').eq('product_key', e.product_key).eq('band', e.band).eq('variant', e.variant)
      .eq('cadence', e.cadence).eq('currency', e.currency).limit(1), 'price'))[0];
    const per = perClass(e, price, sessions.length, 0);
    total += toEur(deferredOf(e.amount_paid || 0, delivered, per), e.currency, rates);
  }
  return Math.round(total * 100) / 100;
}

// ── The month ──
async function chargesOf(stripe, from, to) {
  const out = [];
  let starting_after;
  for (let page = 0; page < 50; page++) {
    const r = await stripe.charges.list({ created: { gte: Math.floor(from / 1000), lt: Math.floor(to / 1000) }, limit: 100, starting_after,
      expand: ['data.customer', 'data.invoice'] });
    out.push(...r.data);
    if (!r.has_more) break;
    starting_after = r.data[r.data.length - 1].id;
  }
  return out;
}
function productOfCharge(ch) {
  const inv = ch.invoice && typeof ch.invoice === 'object' ? ch.invoice : null;
  return (ch.metadata && ch.metadata.product_key) || (inv && inv.metadata && inv.metadata.product_key)
    || (inv && inv.subscription_details && inv.subscription_details.metadata && inv.subscription_details.metadata.product_key) || 'other';
}
async function monthJob(ctx, monthDate) {
  const { sb, stripe } = ctx;
  const from = monthStart(monthDate).getTime();
  const to = Date.UTC(new Date(from).getUTCFullYear(), new Date(from).getUTCMonth() + 1, 1);
  const rates = await latestRates(sb);
  const charges = (await chargesOf(stripe, from, to)).filter((c) => c.paid && c.status === 'succeeded');
  const revenue = {}, refunds = {};
  let refunded = 0, disputes = 0, examEur = 0;
  for (const c of charges) {
    const cur = c.currency, band = (c.customer && typeof c.customer === 'object' && c.customer.metadata && c.customer.metadata.band) || 'unknown';
    const product = productOfCharge(c);
    revenue[cur] = revenue[cur] || { total: 0, byBand: {}, byProduct: {} };
    revenue[cur].total += c.amount;
    revenue[cur].byBand[band] = (revenue[cur].byBand[band] || 0) + c.amount;
    revenue[cur].byProduct[product] = (revenue[cur].byProduct[product] || 0) + c.amount;
    if (c.amount_refunded) { refunds[cur] = (refunds[cur] || 0) + c.amount_refunded; refunded++; }
    if (c.disputed) disputes++;
    if (/^exam_/.test(product)) examEur += toEur(c.amount - (c.amount_refunded || 0), cur, rates);
  }
  // New paying customers this month by channel (their first paid entitlement)
  const paid = await rows(sb.from('entitlements').select('user_id, created_at').gt('amount_paid', 0).order('created_at').limit(10000), 'paid entitlements');
  const first = {};
  for (const e of paid) if (!first[e.user_id]) first[e.user_id] = e.created_at;
  const fresh = Object.keys(first).filter((u) => Date.parse(first[u]) >= from && Date.parse(first[u]) < to);
  const newCustomers = {};
  if (fresh.length) {
    const src = await rows(sb.from('signup_sources').select('user_id, utm_source, heard_from').in('user_id', fresh), 'signup sources');
    const by = Object.fromEntries(src.map((s) => [s.user_id, s.utm_source || s.heard_from || 'unknown']));
    for (const u of fresh) { const ch = by[u] || 'unknown'; newCustomers[ch] = (newCustomers[ch] || 0) + 1; }
  }
  const deferred = await deferredNow(sb, rates);
  const reserve = Math.round(examEur * RESERVE_SHARE * 100) / 100;
  const month = ymd(from);
  const { error } = await sb.from('finance_months').upsert({ month, revenue, refunds, charges: charges.length, refunded, disputes, deferred_eur: deferred,
    reserve_eur: reserve, new_customers: newCustomers, computed_at: new Date().toISOString() }, { onConflict: 'month' });
  if (error) throw new Error('finance_months: ' + error.message);
  await sb.from('finance_reserves').upsert({ month, kind: 'exam_guarantee', amount_eur: reserve, note: '5% of exam-pack revenue' }, { onConflict: 'month,kind' });
  return { month, charges: charges.length, refunded, disputes, deferred_eur: deferred, reserve_eur: reserve, new_customers: Object.values(newCustomers).reduce((a, b) => a + b, 0) };
}

/** The daily finance run: founding every day, rates once a week, the month on the 1st (and whenever last month is missing). */
async function dailyJob(ctx, now, fetchFn) {
  const out = { founding: await foundingJob(ctx, now) };
  out.fx = await fxJob(ctx, now, fetchFn);
  const last = monthStart(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  const { data: had } = await ctx.sb.from('finance_months').select('month').eq('month', ymd(last)).maybeSingle();
  if (!had || now.getUTCDate() === 1) out.month = await monthJob(ctx, last);
  return out;
}

// ── The admin figures ──
async function figures(ctx, now) {
  const { sb, stripe } = ctx;
  const rates = await latestRates(sb);
  const at = (now || new Date()).getTime();
  const out = { asOf: new Date(at).toISOString(), rates };
  try {
    const bal = await stripe.balance.retrieve();
    out.cash = {};
    for (const b of (bal.available || []).concat(bal.pending || [])) {
      out.cash[b.currency] = out.cash[b.currency] || { available: 0, pending: 0 };
      out.cash[b.currency][(bal.available || []).includes(b) ? 'available' : 'pending'] += b.amount;
    }
  } catch (e) { out.cash = null; }
  out.months = await rows(sb.from('finance_months').select('*').order('month', { ascending: false }).limit(6), 'months');
  out.deferredEur = await deferredNow(sb, rates);
  const reserves = await rows(sb.from('finance_reserves').select('amount_eur').eq('kind', 'exam_guarantee'), 'reserves');
  out.reserveEur = Math.round(reserves.reduce((t, r) => t + Number(r.amount_eur || 0), 0) * 100) / 100;

  // Rooms: margin per class and size
  const rooms = await rows(sb.from('cohorts').select('id, product_key, language, level, class_minutes, room_state, starts_on, max_students').in('room_state', ['open', 'running']), 'rooms');
  const KIND = { level_en: 'level_pack', level_de: 'level_pack', exam_en: 'exam_pack', exam_de: 'exam_pack', open_en: 'open_class', open_de: 'open_class', help_class: 'help_class' };
  out.rooms = [];
  for (const r of rooms) {
    const ents = await rows(sb.from('entitlements').select('product_key, cadence, band, variant, currency').eq('cohort_id', r.id).is('session_id', null).in('status', ['pending_room', 'active', 'paused']), 'room learners');
    const nSessions = (await rows(sb.from('sessions').select('id').eq('cohort_id', r.id).neq('status', 'cancelled'), 'sessions')).length;
    const learners = [];
    for (const e of ents) {
      const price = (await rows(sb.from('price_book').select('unit_amount').eq('product_key', e.product_key).eq('band', e.band).eq('variant', e.variant).eq('cadence', e.cadence).eq('currency', e.currency).limit(1), 'price'))[0];
      learners.push({ perClassEur: toEur(perClass(Object.assign({}, e), price, nSessions, 4), e.currency, rates) });
    }
    const m = roomMargin({ kind: KIND[r.product_key], language: r.language, minutes: r.class_minutes, learners });
    out.rooms.push({ id: r.id, product: r.product_key, level: r.level, state: r.room_state, startsOn: r.starts_on, learners: learners.length, max: r.max_students,
      revenuePerClass: Math.round(m.revenue * 100) / 100, payPerClass: Math.round(m.pay * 100) / 100, videoPerClass: Math.round(m.video * 100) / 100,
      marginPerClass: Math.round(m.margin * 100) / 100, marginShare: m.share == null ? null : Math.round(m.share * 1000) / 1000 });
  }
  out.avgRoomSize = out.rooms.length ? Math.round((out.rooms.reduce((t, r) => t + r.learners, 0) / out.rooms.length) * 10) / 10 : null;

  // Last complete month: refund and dispute rates, cost to win a customer
  const lm = out.months.find((m) => m.month < ymd(monthStart(at))) || null;
  out.lastMonth = lm ? { month: lm.month, refundRate: lm.charges ? lm.refunded / lm.charges : null, disputeRate: lm.charges ? lm.disputes / lm.charges : null } : null;
  if (lm) {
    const spend = await rows(sb.from('marketing_spend').select('channel, amount_eur').eq('month', lm.month), 'spend');
    out.cac = cac(Object.fromEntries(spend.map((s) => [s.channel, Number(s.amount_eur)])), lm.new_customers || {});
  }
  out.spend = await rows(sb.from('marketing_spend').select('id, month, channel, amount_eur, note').order('month', { ascending: false }).limit(60), 'spend list');

  // AI cost against revenue over the last 30 days
  const since = new Date(at - 30 * DAY).toISOString();
  const ai = await rows(sb.from('ai_usage').select('cost_usd').gte('created_at', since).limit(100000), 'ai usage');
  const aiUsd = ai.reduce((t, r) => t + Number(r.cost_usd || 0), 0);
  let revenueEur = 0;
  try {
    for (const c of (await chargesOf(stripe, at - 30 * DAY, at)).filter((x) => x.paid && x.status === 'succeeded')) revenueEur += toEur(c.amount - (c.amount_refunded || 0), c.currency, rates);
  } catch (e) { revenueEur = null; }
  const aiEur = rates.usd ? aiUsd / rates.usd : aiUsd;
  out.ai = { costUsd30: Math.round(aiUsd * 100) / 100, revenueEur30: revenueEur == null ? null : Math.round(revenueEur * 100) / 100,
    share: revenueEur ? Math.round((aiEur / revenueEur) * 1000) / 1000 : null };

  // Founding seats, currency drift
  const s = Object.fromEntries((await rows(sb.from('app_settings').select('key, value').in('key', ['founding_count', 'founding_cap', 'founding_closes_at']), 'settings')).map((x) => [x.key, x.value]));
  out.founding = { used: parseInt(s.founding_count, 10) || 0, cap: parseInt(s.founding_cap, 10) || 0, closesAt: s.founding_closes_at || null };
  out.drift = drift(await pricingRates(sb), rates);
  return out;
}

module.exports = { perClass, roomMargin, deferredOf, drift, cac, teacherPay, foundingJob, fxJob, monthJob, dailyJob, figures, fetchRates, toEur, DRIFT_LIMIT, RESERVE_SHARE };
