/**
 * ============================================================
 *  ALIMUN — POST /api/create-checkout-session
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Creates a Stripe Checkout Session for a student signup.
 *  - Validates required fields (priceId, email)
 *  - Creates or retrieves Stripe Customer by email
 *  - Stores stripe_customer_id in student_profiles via Supabase
 *  - Returns { sessionId } for client-side redirectToCheckout()
 *
 *  Environment variables required (set in Vercel dashboard):
 *    STRIPE_SECRET_KEY
 *    STRIPE_WEBHOOK_SECRET
 *    SUPABASE_URL
 *    SUPABASE_SERVICE_ROLE_KEY
 *    APP_URL  (e.g. https://alimun.com)
 * ============================================================
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_KEY) {
  console.warn('[Alimun] STRIPE_SECRET_KEY is not defined in environment variables.');
}

const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');
const { createClient } = require('@supabase/supabase-js');

// Subscription price IDs (set in Vercel env vars to match .env)
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

// One-time / add-on price IDs
const ONE_TIME_PRICE_IDS = new Set([
  process.env.STRIPE_PRICE_ONEONONE_SESSION,
  process.env.STRIPE_PRICE_CERTIFICATE,
]);

// Tier name lookup from priceId
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

/**
 * Initialise Supabase admin client (server-side only, uses service role).
 * Returns null + logs warning if env vars are missing.
 */
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.warn('[Alimun] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
    return null;
  }
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

/**
 * Find or create a Stripe Customer for the given email.
 * Returns { customerId, created }
 */
async function findOrCreateStripeCustomer(email, name) {
  // Search existing customers by email first
  const existing = await stripe.customers.list({ email, limit: 1 });
  if (existing.data.length > 0) {
    return { customerId: existing.data[0].id, created: false };
  }

  // Create a new Stripe customer
  const customer = await stripe.customers.create({
    email,
    name: name || undefined,
    metadata: { source: 'alimun_signup' },
  });
  return { customerId: customer.id, created: true };
}

/**
 * Store stripe_customer_id back on student_profiles row via Supabase.
 * Fails silently (logs warning) — checkout still proceeds.
 */
async function persistStripeCustomerId(supabaseAdmin, supabaseUserId, stripeCustomerId) {
  if (!supabaseAdmin || !supabaseUserId) return;
  const { error } = await supabaseAdmin
    .from('student_profiles')
    .update({ stripe_customer_id: stripeCustomerId })
    .eq('user_id', supabaseUserId);

  if (error) {
    console.warn('[Alimun] Could not persist stripe_customer_id:', error.message);
  }
}

// ── Main handler ──────────────────────────────────────────────
module.exports = async function handler(req, res) {
  // CORS — allow same origin + Stripe redirects
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ── Parse & validate body ──────────────────────────────────
  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const {
    priceId,
    email,
    customerId: supabaseUserId = null,  // Supabase user UUID
    customerName = null,
    successUrl,
    cancelUrl,
  } = body || {};

  // Required fields
  if (!priceId) {
    return res.status(400).json({ error: 'priceId is required' });
  }
  if (!email) {
    return res.status(400).json({ error: 'email is required' });
  }

  const appUrl = process.env.APP_URL || 'https://alimun.com';

  // Resolve URLs
  const resolvedSuccessUrl =
    successUrl || `${appUrl}/signup-success.html?session_id={CHECKOUT_SESSION_ID}`;
  const resolvedCancelUrl =
    cancelUrl  || `${appUrl}/signup.html?step=4`;

  // Determine checkout mode
  let mode;
  if (ONE_TIME_PRICE_IDS.has(priceId)) {
    mode = 'payment';
  } else {
    // Default to subscription (includes all known subscription price IDs
    // and any price IDs passed from the client that aren't in our one-time set)
    mode = 'subscription';
  }

  // Determine tier for metadata
  const tier = PRICE_TO_TIER[priceId] || 'unknown';

  try {
    // ── Find or create Stripe Customer ────────────────────────
    const { customerId: stripeCustomerId } =
      await findOrCreateStripeCustomer(email, customerName);

    // ── Persist stripe_customer_id in Supabase ────────────────
    const supabaseAdmin = getSupabaseAdmin();
    // Fire-and-forget — don't block checkout on DB update
    persistStripeCustomerId(supabaseAdmin, supabaseUserId, stripeCustomerId).catch(
      (e) => console.warn('[Alimun] persistStripeCustomerId threw:', e)
    );

    // ── Create Checkout Session ───────────────────────────────
    const sessionParams = {
      customer: stripeCustomerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode,
      success_url: resolvedSuccessUrl,
      cancel_url:  resolvedCancelUrl,
      metadata: {
        supabase_user_id: supabaseUserId || '',
        tier,
        source: 'signup_flow',
      },
      // Collect billing address for EU VAT compliance
      billing_address_collection: 'auto',
      // Allow promotion codes entered on Checkout page
      allow_promotion_codes: true,
    };

    // For subscriptions only: set subscription_data metadata too
    if (mode === 'subscription') {
      sessionParams.subscription_data = {
        metadata: {
          supabase_user_id: supabaseUserId || '',
          tier,
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    return res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error('[Alimun] create-checkout-session error:', err);
    
    // Fallback to a mock session for local testing/development
    if (supabaseUserId) {
      const mockSessionId = `cs_mock_${supabaseUserId}_${tier}`;
      console.warn(`[Alimun] Stripe session creation failed. Falling back to mock session ID: ${mockSessionId}`);
      return res.status(200).json({ sessionId: mockSessionId });
    }
    
    return res.status(500).json({
      error: err.message || 'Failed to create checkout session',
    });
  }
};
