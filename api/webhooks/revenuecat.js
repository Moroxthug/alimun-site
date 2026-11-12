/**
 * Store purchases into entitlements (docs/PRICING_ENGINE_SPEC.md section 11; build step 6).
 *
 * RevenueCat calls POST /api/webhooks/revenuecat for every App Store and Google Play event of the Alimun apps, with
 * the header Authorization: Bearer <REVENUECAT_WEBHOOK_SECRET> (set in RevenueCat → Integrations → Webhooks and in
 * Vercel). The apps log in to RevenueCat with the Supabase user id, so event.app_user_id (or one of its aliases) is
 * the learner. Store products map to Alimun products by id: app_settings.store_products (JSON, store id → product
 * key) when set, else ids starting alimun_app, alimun_minutes_30 or alimun_minutes_120.
 *
 *   app subscription  one entitlement per original transaction (source 'store', cadence 'store'): active to the
 *                     expiry the store gives; renewals move it; EXPIRATION ends it; a refund (CANCELLATION by customer
 *                     support) marks it refunded; a turned-off renewal changes nothing until it expires.
 *   minutes           added to the tutor time once per store transaction (tutor_add_credit keyed 'rc:<transaction>').
 *
 * Each event is handled once (webhook_logs, event id 'rc_<id>'). Sandbox events are ignored unless
 * REVENUECAT_SANDBOX=on. After every change public.sync_access writes the learner's tier and paying status.
 */
const { createClient } = require('@supabase/supabase-js');
const crypto = require('crypto');
const P = require('../_lib/pricing.js');

const ACTIVE = new Set(['INITIAL_PURCHASE', 'RENEWAL', 'UNCANCELLATION', 'PRODUCT_CHANGE', 'SUBSCRIPTION_EXTENDED', 'TEMPORARY_ENTITLEMENT_GRANT', 'REFUND_REVERSED']);
const PAID = new Set(['INITIAL_PURCHASE', 'RENEWAL']);

function admin() {
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}
function authorised(req) {
  const secret = process.env.REVENUECAT_WEBHOOK_SECRET;
  if (!secret) return false;
  const got = Buffer.from(String(req.headers.authorization || '')), want = Buffer.from('Bearer ' + secret);
  return got.length === want.length && crypto.timingSafeEqual(got, want);
}

/** The Alimun product a store product id stands for, or null. */
const STORE_SELLS = new Set(['app', 'minutes_30', 'minutes_120']);
function productOf(storeId, map) {
  const id = String(storeId || '');
  if (map && typeof map === 'object' && Object.prototype.hasOwnProperty.call(map, id) && STORE_SELLS.has(map[id])) return map[id];
  const base = id.split(':')[0].toLowerCase();
  if (/^alimun_minutes_120($|[_.])/.test(base)) return 'minutes_120';
  if (/^alimun_minutes_30($|[_.])/.test(base)) return 'minutes_30';
  if (/^alimun_app($|[_.])/.test(base)) return 'app';
  return null;
}
/** The learner: the app user id, or the first alias that is a Supabase user id. */
function userOf(ev) {
  return [ev.app_user_id, ev.original_app_user_id].concat(ev.aliases || []).find((x) => P.isUuid(x)) || null;
}
const iso = (ms) => (ms ? new Date(Number(ms)).toISOString() : null);

async function bandOf(sb, userId, country) {
  const { data: cp } = await sb.from('customer_pricing').select('band').eq('user_id', userId).maybeSingle();
  if (cp && cp.band) return cp.band;
  if (/^[A-Z]{2}$/.test(country || '')) {
    const { data } = await sb.from('country_bands').select('band').eq('country', country).maybeSingle();
    if (data && data.band) return data.band;
  }
  return 'B';
}

/** Handles one RevenueCat event; returns what was done (for the log and the tests). */
async function processEvent(sb, ev, settings) {
  if (ev.type === 'TEST') return 'test';
  if (ev.environment === 'SANDBOX' && process.env.REVENUECAT_SANDBOX !== 'on') return 'sandbox_ignored';
  const userId = userOf(ev);
  if (!userId) return 'no_user';
  const productKey = productOf(ev.product_id, settings.storeProducts);
  if (!productKey) return 'unknown_product';
  const prod = P.PRODUCTS[productKey];

  if (prod.kind === 'minutes') {
    if (!(ev.type === 'NON_RENEWING_PURCHASE' || ev.type === 'INITIAL_PURCHASE')) return 'ignored';
    const { data: sp } = await sb.from('student_profiles').select('id').eq('user_id', userId).maybeSingle();
    if (!sp) return 'no_student';
    const { error } = await sb.rpc('tutor_add_credit', { p_student: sp.id, p_seconds: prod.minutes * 60, p_reason: 'purchase',
      p_stripe_session: 'rc:' + (ev.transaction_id || ev.id), p_note: `${prod.minutes} minutes bought in the ${ev.store === 'PLAY_STORE' ? 'Play Store' : 'App Store'}`, p_by: null });
    if (error) throw new Error('tutor_add_credit: ' + error.message);
    return 'minutes_added';
  }

  const tx = String(ev.original_transaction_id || ev.transaction_id || '');
  if (!tx) return 'no_transaction';
  const storeTx = 'rc:' + tx;
  const { data: found } = await sb.from('entitlements').select('*').eq('store_transaction_id', storeTx).limit(1);
  let ent = found && found.length ? found[0] : null;
  const now = new Date().toISOString();
  const amount = Math.max(0, Math.round(Number(ev.price_in_purchased_currency || 0) * 100));
  const currency = /^[A-Za-z]{3}$/.test(ev.currency || '') ? ev.currency.toLowerCase() : 'usd';

  if (ACTIVE.has(ev.type)) {
    const fields = { status: 'active', ends_at: iso(ev.expiration_at_ms), payment_failed_at: null, updated_at: now };
    if (!ent) {
      const { data: pr } = await sb.from('products').select('voice_minutes_month').eq('product_key', productKey).maybeSingle();
      const row = Object.assign({ user_id: userId, product_key: productKey, variant: 'list', band: await bandOf(sb, userId, ev.country_code),
        currency, cadence: 'store', source: 'store', starts_at: iso(ev.purchased_at_ms) || now, voice_minutes_month: (pr && pr.voice_minutes_month) || 0,
        amount_paid: PAID.has(ev.type) ? amount : 0, store_transaction_id: storeTx }, fields);
      const { error } = await sb.from('entitlements').upsert(row, { onConflict: 'store_transaction_id' });
      if (error) throw new Error('entitlement: ' + error.message);
    } else {
      if (PAID.has(ev.type)) fields.amount_paid = (ent.amount_paid || 0) + amount;
      const { error } = await sb.from('entitlements').update(fields).eq('id', ent.id);
      if (error) throw new Error('entitlement: ' + error.message);
    }
  } else if (ev.type === 'EXPIRATION' && ent) {
    await sb.from('entitlements').update({ status: ent.status === 'refunded' ? 'refunded' : 'ended', ends_at: iso(ev.expiration_at_ms) || now, updated_at: now }).eq('id', ent.id);
  } else if (ev.type === 'CANCELLATION' && ent && ev.cancel_reason === 'CUSTOMER_SUPPORT') {
    await sb.from('entitlements').update({ status: 'refunded', ends_at: now, updated_at: now }).eq('id', ent.id);   // a store refund
  } else if (ev.type === 'SUBSCRIPTION_PAUSED' && ent) {
    await sb.from('entitlements').update({ status: 'paused', updated_at: now }).eq('id', ent.id);
  } else {
    return 'ignored';   // renewal turned off, billing issue (the store's grace period runs), transfer
  }
  const { error: sErr } = await sb.rpc('sync_access', { p_user: userId });
  if (sErr) throw new Error('sync_access: ' + sErr.message);
  return 'entitlement_' + ev.type.toLowerCase();
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });
  if (!authorised(req)) return res.status(401).json({ error: 'unauthorized' });
  const sb = admin();
  if (!sb) return res.status(503).json({ error: 'database_unavailable' });
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = null; } }
  const ev = body && body.event;
  if (!ev || typeof ev.id !== 'string' || typeof ev.type !== 'string') return res.status(400).json({ error: 'bad_event' });

  const eventId = 'rc_' + ev.id.slice(0, 200);
  const { data: logged, error: logErr } = await sb.from('webhook_logs').insert({ event_id: eventId, event_type: 'revenuecat.' + ev.type.slice(0, 60),
    payload: { id: ev.id, type: ev.type, product_id: ev.product_id, store: ev.store, environment: ev.environment } }).select('id').single();
  if (logErr) {
    const { data: prev } = await sb.from('webhook_logs').select('id, status').eq('event_id', eventId).maybeSingle();
    if (prev && prev.status === 'processed') return res.status(200).json({ ok: true, duplicate: true });
    if (!prev) return res.status(500).json({ error: 'log_failed' });
  }
  const logId = logged ? logged.id : null;
  try {
    const { data: s } = await sb.from('app_settings').select('value').eq('key', 'store_products').maybeSingle();
    let storeProducts = null;
    try { storeProducts = s && s.value ? JSON.parse(s.value) : null; } catch { storeProducts = null; }
    const done = await processEvent(sb, ev, { storeProducts });
    if (logId) await sb.from('webhook_logs').update({ status: 'processed' }).eq('id', logId);
    else await sb.from('webhook_logs').update({ status: 'processed' }).eq('event_id', eventId);
    return res.status(200).json({ ok: true, done });
  } catch (e) {
    console.error('[Alimun RevenueCat]', ev.type, e && e.message);
    await sb.from('webhook_logs').update({ status: 'failed', error_message: String(e && e.message).slice(0, 500) }).eq('event_id', eventId);
    return res.status(500).json({ error: 'server_error' });   // RevenueCat retries
  }
};

module.exports._test = { processEvent, productOf, userOf };
