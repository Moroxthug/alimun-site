/**
 * ============================================================
 *  ALIMUN — GET /api/checkout-session?session_id=X
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Retrieves a Stripe Checkout Session by ID for the
 *  signup-success.html page to confirm payment status.
 *
 *  Returns a safe subset of the session object:
 *    { status, paymentStatus, customerEmail, subscriptionId,
 *      amountTotal, currency, metadata }
 *
 *  Environment variables required:
 *    STRIPE_SECRET_KEY
 *    APP_URL
 * ============================================================
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_KEY) {
  console.warn('[Alimun] STRIPE_SECRET_KEY is not defined in environment variables.');
}

const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sessionId = req.query?.session_id;
  if (!sessionId || typeof sessionId !== 'string' || !sessionId.startsWith('cs_')) {
    return res.status(400).json({ error: 'Invalid or missing session_id' });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['subscription', 'customer'],
    });

    // Return only what the client needs
    return res.status(200).json({
      status:          session.status,             // 'open' | 'complete' | 'expired'
      paymentStatus:   session.payment_status,     // 'paid' | 'unpaid' | 'no_payment_required'
      customerEmail:   session.customer_details?.email || session.customer?.email || null,
      subscriptionId:  session.subscription?.id   || session.subscription || null,
      subscriptionStatus: session.subscription?.status || null,
      amountTotal:     session.amount_total,       // in smallest currency unit (cents/euro-cents)
      currency:        session.currency,
      metadata:        session.metadata,           // { supabase_user_id, tier, source }
    });
  } catch (err) {
    console.error('[Alimun] checkout-session retrieval error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to retrieve checkout session',
    });
  }
};
