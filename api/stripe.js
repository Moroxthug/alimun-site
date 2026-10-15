/**
 * ============================================================
 *  ALIMUN — Consolidated Stripe Endpoint
 *  /api/stripe.js
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Actions (see vercel.json rewrites for legacy paths):
 *    - POST ?action=create-checkout   (auth required)
 *    - GET  ?action=retrieve-session  (public, non-sensitive fields only)
 *    - POST ?action=billing-portal    (auth required)
 *    - GET  ?action=config            (public, publishable values only)
 *
 *  Security notes:
 *    - Checkout REQUIRES a Supabase JWT. The user id / email that end
 *      up in Stripe metadata always come from the verified session,
 *      never from the request body.
 *    - priceId must be one of the configured STRIPE_PRICE_* values.
 *    - success/cancel URLs must live on APP_URL (no open redirects).
 *    - Billing state (tier, subscription status) is written ONLY by
 *      the webhook (api/webhooks/stripe.js), never by clients.
 * ============================================================
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');
const { createClient } = require('@supabase/supabase-js');

const env = (k) => process.env[k] || '';

// ── Price catalogue (single source of truth for this function) ──
// tier: what the subscription grants. type: one-time product kind.
const PRICE_CATALOGUE = [
  { id: env('STRIPE_PRICE_COMMUNITY_MONTHLY'),      mode: 'subscription', tier: 'community' },
  { id: env('STRIPE_PRICE_COMMUNITY_YEARLY'),       mode: 'subscription', tier: 'community' },
  { id: env('STRIPE_PRICE_FOCUSED_MONTHLY'),        mode: 'subscription', tier: 'focused' },
  { id: env('STRIPE_PRICE_FOCUSED_YEARLY'),         mode: 'subscription', tier: 'focused' },
  { id: env('STRIPE_PRICE_INTENSIVE_MONTHLY'),      mode: 'subscription', tier: 'intensive' },
  { id: env('STRIPE_PRICE_INTENSIVE_YEARLY'),       mode: 'subscription', tier: 'intensive' },
  { id: env('STRIPE_PRICE_PRIVATE_MONTHLY'),        mode: 'subscription', tier: 'private' },
  { id: env('STRIPE_PRICE_PRIVATE_YEARLY'),         mode: 'subscription', tier: 'private' },
  { id: env('STRIPE_PRICE_COMMUNITY_MONTHLY_AUD'),  mode: 'subscription', tier: 'community' },
  { id: env('STRIPE_PRICE_FOCUSED_MONTHLY_AUD'),    mode: 'subscription', tier: 'focused' },
  { id: env('STRIPE_PRICE_INTENSIVE_MONTHLY_AUD'),  mode: 'subscription', tier: 'intensive' },
  { id: env('STRIPE_PRICE_PRIVATE_MONTHLY_AUD'),    mode: 'subscription', tier: 'private' },
  { id: env('STRIPE_PRICE_COMMUNITY_MONTHLY_MAD'),  mode: 'subscription', tier: 'community' },
  { id: env('STRIPE_PRICE_FOCUSED_MONTHLY_MAD'),    mode: 'subscription', tier: 'focused' },
  { id: env('STRIPE_PRICE_INTENSIVE_MONTHLY_MAD'),  mode: 'subscription', tier: 'intensive' },
  { id: env('STRIPE_PRICE_PRIVATE_MONTHLY_MAD'),    mode: 'subscription', tier: 'private' },
  // The EUR 29 founding member fee was removed on 15 Oct 2026 (owner decision); it is no longer sold.
  { id: env('STRIPE_PRICE_ONEONONE_SESSION'),       mode: 'payment',      type: 'session' },
  { id: env('STRIPE_PRICE_CERTIFICATE'),            mode: 'payment',      type: 'certificate' },
].filter((p) => p.id);

const PRICE_BY_ID = Object.fromEntries(PRICE_CATALOGUE.map((p) => [p.id, p]));

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function getSupabaseUser(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;
  const { data, error } = await supabase.auth.getUser(authHeader.split(' ')[1]);
  if (error || !data?.user) return null;
  return data.user;
}

function appOrigin() {
  const appUrl = process.env.APP_URL || 'https://alimun.com';
  try { return new URL(appUrl).origin; } catch { return 'https://alimun.com'; }
}

/** Only allow redirect targets on our own origin (or relative paths). */
function safeReturnUrl(candidate, fallbackPath) {
  const origin = appOrigin();
  if (typeof candidate === 'string' && candidate) {
    if (candidate.startsWith('/') && !candidate.startsWith('//')) return origin + candidate;
    try {
      const u = new URL(candidate);
      const allowed = new Set([origin, 'https://alimun.com', 'https://www.alimun.com']);
      if (allowed.has(u.origin)) return u.toString();
    } catch { /* fall through */ }
  }
  return origin + fallbackPath;
}

/** Load the caller's student_profiles row (null when missing). */
async function loadStudentProfile(supabaseAdmin, user) {
  if (!supabaseAdmin) return null;
  const { data, error } = await supabaseAdmin
    .from('student_profiles')
    .select('id, stripe_customer_id, stripe_subscription_id, stripe_subscription_status, full_name')
    .eq('user_id', user.id)
    .maybeSingle();
  if (error) throw new Error(`student profile lookup: ${error.message}`);
  return data || null;
}

/**
 * Resolve the Stripe customer for a verified user with a student profile:
 *  1. stored student_profiles.stripe_customer_id
 *  2. an existing Stripe customer tagged with this supabase_user_id
 *  3. create a new one (tagged, idempotent per user), and persist it.
 */
async function resolveStripeCustomer(supabaseAdmin, user, profile, name) {
  if (profile?.stripe_customer_id) return profile.stripe_customer_id;

  const search = await stripe.customers.search({
    query: `metadata['supabase_user_id']:'${user.id}'`,
    limit: 1,
  }).catch(() => ({ data: [] }));
  let customerId = search.data?.[0]?.id;

  if (!customerId) {
    // Idempotency key: customer search is eventually consistent, so parallel
    // calls must not create duplicate customers. Params stay deterministic
    // (name from the profile first) so a retry within 24h matches the key.
    const customer = await stripe.customers.create({
      email: user.email,
      name: profile?.full_name || name || undefined,
      metadata: { supabase_user_id: user.id, source: 'alimun_stripe_api' },
    }, { idempotencyKey: `cust-${user.id}` });
    customerId = customer.id;
  }

  if (supabaseAdmin && profile) {
    await supabaseAdmin
      .from('student_profiles')
      .update({ stripe_customer_id: customerId })
      .eq('id', profile.id);
  }
  return customerId;
}

function parseBody(req) {
  try {
    return typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch {
    return null;
  }
}

// ── Action: Create Checkout ──
async function handleCreateCheckout(req, res) {
  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: 'Invalid JSON body' });

  const user = await getSupabaseUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Sign in before starting checkout.' });
  }

  const { priceId, customerName, successUrl, cancelUrl, cohortId, currency } = body;
  if (!priceId || typeof priceId !== 'string') {
    return res.status(400).json({ error: 'priceId is required' });
  }
  const price = PRICE_BY_ID[priceId];
  if (!price) {
    return res.status(400).json({ error: 'Unknown priceId' });
  }

  const safeCohortId = typeof cohortId === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(cohortId) ? cohortId : '';
  let resolvedSuccessUrl = safeReturnUrl(successUrl, '/student-dashboard.html?checkout=success');
  const resolvedCancelUrl  = safeReturnUrl(cancelUrl,  '/student-dashboard.html?checkout=cancelled');
  // The webhook does not enrol; carry the cohort back so the dashboard can
  // resume the join after payment (APIP-14).
  if (safeCohortId) {
    try {
      const u = new URL(resolvedSuccessUrl);
      u.searchParams.set('join', safeCohortId);
      resolvedSuccessUrl = u.toString();
    } catch { /* keep as is */ }
  }
  const safeName = typeof customerName === 'string' ? customerName.slice(0, 120) : '';

  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) {
    return res.status(500).json({ error: 'Database service is unavailable' });
  }

  try {
    // A paid checkout needs a student profile, or the webhook cannot grant it.
    const profile = await loadStudentProfile(supabaseAdmin, user);
    if (!profile) {
      return res.status(409).json({ error: 'profile_required', message: 'Complete your student profile before checkout.' });
    }

    // One subscription per student: plan changes go through the Billing
    // Portal, never a second Checkout (APIP-01).
    if (price.mode === 'subscription'
        && ['active', 'past_due', 'trialing'].includes(profile.stripe_subscription_status)) {
      return res.status(409).json({
        error: 'active_subscription',
        portal: true,
        message: 'You already have a subscription. Manage or change your plan from billing.',
      });
    }

    const stripeCustomerId = await resolveStripeCustomer(supabaseAdmin, user, profile, safeName);

    const metadata = {
      supabase_user_id: user.id,
      tier: price.tier || '',
      type: price.type || 'subscription',
      cohort_id: safeCohortId,
      source: 'stripe_api',
    };

    const sessionParams = {
      customer: stripeCustomerId,
      client_reference_id: user.id,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: price.mode,
      success_url: resolvedSuccessUrl,
      cancel_url: resolvedCancelUrl,
      metadata,
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
    };

    // Prices carry EUR (base) + USD/CAD/AUD/MAD currency options
    // (supabase/setup-stripe-prices.js). EUR is the default.
    if (typeof currency === 'string' && ['usd', 'cad', 'aud', 'mad'].includes(currency.toLowerCase())) {
      sessionParams.currency = currency.toLowerCase();
    }

    if (price.mode === 'subscription') {
      sessionParams.subscription_data = { metadata };
    } else {
      sessionParams.payment_intent_data = { metadata };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (err) {
    console.error('[Alimun] create-checkout error:', err);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
}

// ── Action: Retrieve Checkout Session (public, minimal) ──
async function handleRetrieveSession(req, res) {
  const sessionId = req.query?.session_id;
  if (!sessionId || typeof sessionId !== 'string' || !/^cs_(live|test)_[A-Za-z0-9]+$/.test(sessionId)) {
    return res.status(400).json({ error: 'Invalid or missing session_id' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return res.status(200).json({
      status:        session.status,
      paymentStatus: session.payment_status,
      mode:          session.mode,
      tier:          session.metadata?.tier || null,
      type:          session.metadata?.type || null,
      amountTotal:   session.amount_total,
      currency:      session.currency,
    });
  } catch (err) {
    console.error('[Alimun] checkout-session retrieval error:', err);
    return res.status(500).json({ error: 'Failed to retrieve checkout session' });
  }
}

// ── Action: Billing Portal ──
async function handleBillingPortal(req, res) {
  const body = parseBody(req);
  if (!body) return res.status(400).json({ error: 'Invalid JSON body' });

  const user = await getSupabaseUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Valid user session is required.' });
  }

  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) {
    return res.status(500).json({ error: 'Database service is unavailable' });
  }

  const resolvedReturnUrl = safeReturnUrl(body.returnUrl, '/student-dashboard.html');

  try {
    const profile = await loadStudentProfile(supabaseAdmin, user);
    if (!profile) {
      return res.status(409).json({ error: 'profile_required', message: 'Complete your student profile first.' });
    }
    const stripeCustomerId = await resolveStripeCustomer(supabaseAdmin, user, profile, '');
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: resolvedReturnUrl,
    });
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('[Alimun] billing-portal error:', err);
    return res.status(500).json({ error: 'Failed to create portal session' });
  }
}

// Publishable, non-secret values only — safe to expose to any client.
// This is the single source of truth for which Stripe mode (test/live) the
// site is wired to: swap the underlying env vars in Vercel to flip modes,
// nothing in the served HTML needs to change.
function handleGetConfig(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=300');
  return res.status(200).json({
    stripePublishableKey: env('STRIPE_PUBLISHABLE_KEY'),
    prices: {
      communityMonthly: env('STRIPE_PRICE_COMMUNITY_MONTHLY'),
      focusedMonthly:   env('STRIPE_PRICE_FOCUSED_MONTHLY'),
      intensiveMonthly: env('STRIPE_PRICE_INTENSIVE_MONTHLY'),
      privateMonthly:   env('STRIPE_PRICE_PRIVATE_MONTHLY'),
      communityYearly:  env('STRIPE_PRICE_COMMUNITY_YEARLY'),
      focusedYearly:    env('STRIPE_PRICE_FOCUSED_YEARLY'),
      intensiveYearly:  env('STRIPE_PRICE_INTENSIVE_YEARLY'),
      privateYearly:    env('STRIPE_PRICE_PRIVATE_YEARLY'),
      oneOnOneSession:  env('STRIPE_PRICE_ONEONONE_SESSION'),
      certificate:      env('STRIPE_PRICE_CERTIFICATE'),
      regional: {
        aud: {
          communityMonthly: env('STRIPE_PRICE_COMMUNITY_MONTHLY_AUD'),
          focusedMonthly:   env('STRIPE_PRICE_FOCUSED_MONTHLY_AUD'),
          intensiveMonthly: env('STRIPE_PRICE_INTENSIVE_MONTHLY_AUD'),
          privateMonthly:   env('STRIPE_PRICE_PRIVATE_MONTHLY_AUD'),
        },
        mad: {
          communityMonthly: env('STRIPE_PRICE_COMMUNITY_MONTHLY_MAD'),
          focusedMonthly:   env('STRIPE_PRICE_FOCUSED_MONTHLY_MAD'),
          intensiveMonthly: env('STRIPE_PRICE_INTENSIVE_MONTHLY_MAD'),
          privateMonthly:   env('STRIPE_PRICE_PRIVATE_MONTHLY_MAD'),
        },
      },
    },
  });
}

// ── Main handler ──
module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || 'https://alimun.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (!STRIPE_KEY) {
    return res.status(503).json({ error: 'Payments are not configured' });
  }

  const action = req.query.action || 'create-checkout';

  switch (action) {
    case 'create-checkout':
      if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
      return handleCreateCheckout(req, res);
    case 'retrieve-session':
      if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
      return handleRetrieveSession(req, res);
    case 'billing-portal':
      if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
      return handleBillingPortal(req, res);
    case 'config':
      if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
      return handleGetConfig(req, res);
    default:
      return res.status(400).json({ error: 'Unknown action' });
  }
};
