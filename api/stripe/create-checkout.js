/**
 * ============================================================
 *  ALIMUN — POST /api/stripe/create-checkout
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Creates a Stripe Checkout Session.
 *  - Supports both anonymous signups and authenticated dashboard requests.
 *  - Handles metadata linkage to Supabase user profiles.
 * ============================================================
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');
const { createClient } = require('@supabase/supabase-js');

// Subscription price IDs
const SUBSCRIPTION_PRICE_IDS = new Set([
  process.env.STRIPE_PRICE_COMMUNITY_MONTHLY,
  process.env.STRIPE_PRICE_COMMUNITY_YEARLY,
  process.env.STRIPE_PRICE_FOCUSED_MONTHLY,
  process.env.STRIPE_PRICE_FOCUSED_YEARLY,
  process.env.STRIPE_PRICE_INTENSIVE_MONTHLY,
  process.env.STRIPE_PRICE_INTENSIVE_YEARLY,
  process.env.STRIPE_PRICE_PRIVATE_MONTHLY,
  process.env.STRIPE_PRICE_PRIVATE_YEARLY,
  // Regional
  process.env.STRIPE_PRICE_COMMUNITY_MONTHLY_AUD,
  process.env.STRIPE_PRICE_FOCUSED_MONTHLY_AUD,
  process.env.STRIPE_PRICE_INTENSIVE_MONTHLY_AUD,
  process.env.STRIPE_PRICE_PRIVATE_MONTHLY_AUD,
  process.env.STRIPE_PRICE_COMMUNITY_MONTHLY_MAD,
  process.env.STRIPE_PRICE_FOCUSED_MONTHLY_MAD,
  process.env.STRIPE_PRICE_INTENSIVE_MONTHLY_MAD,
  process.env.STRIPE_PRICE_PRIVATE_MONTHLY_MAD,
]);

const ONE_TIME_PRICE_IDS = new Set([
  process.env.STRIPE_PRICE_FOUNDING_MEMBER,
  process.env.STRIPE_PRICE_ONEONONE_SESSION,
  process.env.STRIPE_PRICE_CERTIFICATE,
]);

const PRICE_TO_TIER = {
  [process.env.STRIPE_PRICE_COMMUNITY_MONTHLY]:      'community',
  [process.env.STRIPE_PRICE_COMMUNITY_YEARLY]:       'community',
  [process.env.STRIPE_PRICE_FOCUSED_MONTHLY]:        'focused',
  [process.env.STRIPE_PRICE_FOCUSED_YEARLY]:         'focused',
  [process.env.STRIPE_PRICE_INTENSIVE_MONTHLY]:      'intensive',
  [process.env.STRIPE_PRICE_INTENSIVE_YEARLY]:       'intensive',
  [process.env.STRIPE_PRICE_PRIVATE_MONTHLY]:        'private',
  [process.env.STRIPE_PRICE_PRIVATE_YEARLY]:         'private',
  [process.env.STRIPE_PRICE_COMMUNITY_MONTHLY_AUD]:  'community',
  [process.env.STRIPE_PRICE_FOCUSED_MONTHLY_AUD]:    'focused',
  [process.env.STRIPE_PRICE_INTENSIVE_MONTHLY_AUD]:  'intensive',
  [process.env.STRIPE_PRICE_PRIVATE_MONTHLY_AUD]:    'private',
  [process.env.STRIPE_PRICE_COMMUNITY_MONTHLY_MAD]:  'community',
  [process.env.STRIPE_PRICE_FOCUSED_MONTHLY_MAD]:    'focused',
  [process.env.STRIPE_PRICE_INTENSIVE_MONTHLY_MAD]:  'intensive',
  [process.env.STRIPE_PRICE_PRIVATE_MONTHLY_MAD]:    'private',
};

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
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey  = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) return null;
  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
  const { data, error } = await supabase.auth.getUser(authHeader.split(' ')[1]);
  if (error || !data?.user) return null;
  return data.user;
}

async function findOrCreateStripeCustomer(email, name) {
  const existing = await stripe.customers.list({ email, limit: 1 });
  if (existing.data.length > 0) {
    return { customerId: existing.data[0].id, created: false };
  }
  const customer = await stripe.customers.create({
    email,
    name: name || undefined,
    metadata: { source: 'alimun_stripe_api' },
  });
  return { customerId: customer.id, created: true };
}

async function persistStripeCustomerId(supabaseAdmin, supabaseUserId, stripeCustomerId) {
  if (!supabaseAdmin || !supabaseUserId) return;
  await supabaseAdmin
    .from('student_profiles')
    .update({ stripe_customer_id: stripeCustomerId })
    .eq('user_id', supabaseUserId);
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const {
    priceId,
    mode: requestedMode,
    email: requestEmail,
    customerEmail,
    customerId: requestCustomerId,
    customerName,
    successUrl,
    cancelUrl,
    cohortId,
  } = body || {};

  if (!priceId) return res.status(400).json({ error: 'priceId is required' });

  // Resolve email and user ID
  let email = requestEmail || customerEmail;
  let supabaseUserId = requestCustomerId;

  // Verify auth session if token is provided to get accurate user details
  const authUser = await getSupabaseUser(req);
  if (authUser) {
    supabaseUserId = authUser.id;
    if (!email) email = authUser.email;
  }

  if (!email) {
    return res.status(400).json({ error: 'email or user session is required' });
  }

  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const resolvedSuccessUrl = successUrl || `${appUrl}/student-dashboard.html?checkout=success`;
  const resolvedCancelUrl = cancelUrl || `${appUrl}/student-dashboard.html?checkout=cancelled`;

  let mode = requestedMode;
  if (!mode) {
    mode = ONE_TIME_PRICE_IDS.has(priceId) ? 'payment' : 'subscription';
  }

  const tier = PRICE_TO_TIER[priceId] || 'unknown';

  try {
    const { customerId: stripeCustomerId } = await findOrCreateStripeCustomer(email, customerName);

    const supabaseAdmin = getSupabaseAdmin();
    if (supabaseAdmin && supabaseUserId) {
      persistStripeCustomerId(supabaseAdmin, supabaseUserId, stripeCustomerId).catch((e) =>
        console.warn('[Alimun] persistStripeCustomerId failed:', e)
      );
    }

    const sessionParams = {
      customer: stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode,
      success_url: resolvedSuccessUrl,
      cancel_url: resolvedCancelUrl,
      metadata: {
        supabase_user_id: supabaseUserId || '',
        tier,
        cohort_id: cohortId || '',
        source: 'stripe_api',
      },
      billing_address_collection: 'auto',
      allow_promotion_codes: true,
    };

    if (mode === 'subscription') {
      sessionParams.subscription_data = {
        metadata: {
          supabase_user_id: supabaseUserId || '',
          tier,
          cohort_id: cohortId || '',
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);
    return res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (err) {
    console.error('[Alimun] create-checkout error:', err);
    return res.status(500).json({ error: err.message || 'Failed to create checkout session' });
  }
};
