/**
 * ============================================================
 *  ALIMUN — POST /api/stripe/billing-portal
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Creates a Stripe Billing Portal/Customer Portal session.
 *  - Authenticates the user via Supabase.
 *  - Resolves their stripe_customer_id from student_profiles or teacher_profiles.
 *  - Redirects to/returns the Stripe billing portal URL.
 * ============================================================
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');
const { createClient } = require('@supabase/supabase-js');

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

  const { returnUrl } = body || {};
  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const resolvedReturnUrl = returnUrl || `${appUrl}/student-dashboard.html`;

  // Authenticate user via Supabase
  const user = await getSupabaseUser(req);
  if (!user) {
    return res.status(401).json({ error: 'Unauthorized. Valid user session is required.' });
  }

  const supabaseAdmin = getSupabaseAdmin();
  if (!supabaseAdmin) {
    return res.status(500).json({ error: 'Database service is unavailable' });
  }

  try {
    // 1. Retrieve the student profile to find stripe_customer_id
    let { data: profile, error: profileErr } = await supabaseAdmin
      .from('student_profiles')
      .select('stripe_customer_id, full_name')
      .eq('user_id', user.id)
      .single();

    let stripeCustomerId = profile?.stripe_customer_id;

    // 2. If not found in student, try teacher profile
    if (!stripeCustomerId) {
      let { data: tProfile } = await supabaseAdmin
        .from('teacher_profiles')
        .select('stripe_customer_id')
        .eq('user_id', user.id)
        .single();
      stripeCustomerId = tProfile?.stripe_customer_id;
    }

    // 3. If still no customer ID, check Stripe for existing customer or create one
    if (!stripeCustomerId) {
      const existing = await stripe.customers.list({ email: user.email, limit: 1 });
      if (existing.data.length > 0) {
        stripeCustomerId = existing.data[0].id;
      } else {
        const customer = await stripe.customers.create({
          email: user.email,
          name: profile?.full_name || undefined,
          metadata: { supabase_user_id: user.id },
        });
        stripeCustomerId = customer.id;
      }

      // Update student profiles row
      await supabaseAdmin
        .from('student_profiles')
        .update({ stripe_customer_id: stripeCustomerId })
        .eq('user_id', user.id);
    }

    // 4. Create Stripe Billing Portal session
    const session = await stripe.billingPortal.sessions.create({
      customer: stripeCustomerId,
      return_url: resolvedReturnUrl,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('[Alimun] billing-portal error:', err);
    return res.status(500).json({ error: err.message || 'Failed to create portal session' });
  }
};
