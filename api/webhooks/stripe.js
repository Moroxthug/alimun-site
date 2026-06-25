/**
 * ============================================================
 *  ALIMUN — POST /api/webhooks/stripe
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Stripe Webhook handler.
 *  - Verifies event signature using STRIPE_WEBHOOK_SECRET
 *  - Responds with 200 immediately to avoid timeouts
 *  - Logs all events to Supabase `webhook_logs` table
 *  - Processes events asynchronously to update user profile tiers,
 *    cancel subscriptions, log payment failures, send Resend emails,
 *    and grant session credits.
 * ============================================================
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_KEY) {
  console.warn('[Alimun] STRIPE_SECRET_KEY is not defined in environment variables.');
}

const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');
const { createClient } = require('@supabase/supabase-js');

// Price to tier mapping (synchronized with signup config)
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
 * Initialise Supabase admin client (server-side only, uses service role key to bypass RLS).
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
 * Read request stream chunks and concatenate into a raw request Buffer.
 */
async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

// ── Main webhook endpoint handler ─────────────────────────────
const handler = async function (req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error('[Alimun Webhook] STRIPE_WEBHOOK_SECRET is not configured.');
    return res.status(500).json({ error: 'Webhook secret is not configured' });
  }

  if (!sig) {
    console.error('[Alimun Webhook] Missing stripe-signature header.');
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  let rawBody;
  try {
    rawBody = await getRawBody(req);
  } catch (err) {
    console.error('[Alimun Webhook] Failed to read request body:', err);
    return res.status(400).json({ error: 'Failed to read request body' });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('[Alimun Webhook] Signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook signature verification failed: ${err.message}` });
  }

  const supabase = getSupabaseAdmin();
  let logId = null;

  // 1. Log event immediately as 'pending' to Supabase (idempotency safety)
  if (supabase) {
    try {
      const { data: logData, error: logError } = await supabase
        .from('webhook_logs')
        .insert({
          event_id: event.id,
          event_type: event.type,
          payload: event,
          status: 'pending'
        })
        .select('id')
        .single();

      if (logError) {
        // Handle postgres unique constraint violation (duplicate event code: 23505)
        if (logError.code === '23505') {
          console.log(`[Alimun Webhook] Duplicate event ignored: ${event.id}`);
          return res.status(200).json({ received: true, duplicate: true });
        }
        console.warn('[Alimun Webhook] Failed to create initial log in Supabase:', logError.message);
      } else {
        logId = logData.id;
      }
    } catch (err) {
      console.error('[Alimun Webhook] Error writing initial log:', err);
    }
  }

  // 2. Respond to Stripe with 200 immediately to meet Stripe requirements
  res.status(200).json({ received: true });

  // 3. Process the event payload asynchronously
  try {
    await processWebhookEvent(event, supabase);

    // Update log status to 'processed'
    if (supabase && logId) {
      await supabase
        .from('webhook_logs')
        .update({ status: 'processed' })
        .eq('id', logId);
    }
  } catch (err) {
    console.error(`[Alimun Webhook] Error processing event ${event.id}:`, err);

    // Update log status to 'failed'
    if (supabase && logId) {
      await supabase
        .from('webhook_logs')
        .update({
          status: 'failed',
          error_message: err.message || String(err)
        })
        .eq('id', logId);
    }
  }
};

/**
 * Handle Stripe event types and trigger side effects
 */
async function processWebhookEvent(event, supabase) {
  const object = event.data.object;

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = object;
      const metadata = session.metadata || {};
      const supabaseUserId = metadata.supabase_user_id;

      if (!supabaseUserId) {
        console.warn(`[Alimun Webhook] No supabase_user_id in session metadata: ${session.id}`);
        break;
      }

      const type = metadata.type;

      if (type === 'certificate') {
        await triggerCertificateGeneration(session, supabaseUserId);
      } else if (type === 'session') {
        await grantSessionCredits(session, supabaseUserId, supabase);
      } else {
        await handleSubscriptionCheckout(session, metadata, supabaseUserId, supabase);
      }
      break;
    }

    case 'customer.subscription.updated': {
      const subscription = object;
      const subscriptionId = subscription.id;
      const stripeCustomerId = subscription.customer;
      const status = subscription.status;
      const metadata = subscription.metadata || {};

      let { data: student, error: fetchError } = await supabase
        .from('student_profiles')
        .select('id, tier, stripe_subscription_status')
        .eq('stripe_subscription_id', subscriptionId)
        .single();

      // Fallback search by stripe_customer_id
      if (!student && stripeCustomerId) {
        const { data: studentByCust } = await supabase
          .from('student_profiles')
          .select('id, tier, stripe_subscription_status')
          .eq('stripe_customer_id', stripeCustomerId)
          .single();
        student = studentByCust;
      }

      if (!student) {
        console.warn(`[Alimun Webhook] Student profile not found for subscription ${subscriptionId}`);
        break;
      }

      const oldTier = student.tier;

      // Resolve the new tier
      let newTier = metadata.tier;
      if (!newTier) {
        const priceId = subscription.items?.data?.[0]?.price?.id;
        if (priceId) {
          newTier = PRICE_TO_TIER[priceId];
        }
      }

      const updates = {
        stripe_subscription_status: status,
        updated_at: new Date().toISOString()
      };

      if (status === 'active' && newTier && newTier !== oldTier) {
        updates.tier = newTier;
      }

      const { error: updateError } = await supabase
        .from('student_profiles')
        .update(updates)
        .eq('id', student.id);

      if (updateError) {
        throw new Error(`Failed to update student profile: ${updateError.message}`);
      }
      console.log(`[Alimun Webhook] Subscription updated for student ${student.id}. Status: ${status}, Tier: ${updates.tier || oldTier}`);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = object;
      const subscriptionId = subscription.id;

      const { data: student, error: fetchError } = await supabase
        .from('student_profiles')
        .select('id, user_id, full_name')
        .eq('stripe_subscription_id', subscriptionId)
        .single();

      if (!student) {
        console.warn(`[Alimun Webhook] Student profile not found for subscription ${subscriptionId}`);
        break;
      }

      const { error: updateError } = await supabase
        .from('student_profiles')
        .update({
          stripe_subscription_status: 'cancelled',
          enrolled_cohort_id: null,
          updated_at: new Date().toISOString()
        })
        .eq('id', student.id);

      if (updateError) {
        throw new Error(`Failed to update student profile to cancelled: ${updateError.message}`);
      }

      console.log(`[Alimun Webhook] Subscription cancelled for student ${student.id}. Dispatched cancellation email.`);
      await sendCancellationEmail(student, subscription);
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = object;
      const stripeCustomerId = invoice.customer;
      const attemptCount = invoice.attempt_count || 1;

      const { data: student, error: fetchError } = await supabase
        .from('student_profiles')
        .select('id, user_id, full_name')
        .eq('stripe_customer_id', stripeCustomerId)
        .single();

      if (!student) {
        console.warn(`[Alimun Webhook] Student profile not found for customer ${stripeCustomerId}`);
        break;
      }

      const isThirdFailure = attemptCount >= 3;
      const newStatus = isThirdFailure ? 'cancelled' : 'past_due';

      const updates = {
        stripe_subscription_status: newStatus,
        updated_at: new Date().toISOString()
      };

      if (isThirdFailure) {
        updates.enrolled_cohort_id = null;
      }

      const { error: updateError } = await supabase
        .from('student_profiles')
        .update(updates)
        .eq('id', student.id);

      if (updateError) {
        throw new Error(`Failed to update student profile on payment failure: ${updateError.message}`);
      }

      console.log(`[Alimun Webhook] Payment failed for student ${student.id} (attempt #${attemptCount}). Status: ${newStatus}`);
      await sendPaymentFailedEmail(student, invoice, isThirdFailure);
      break;
    }

    default:
      console.log(`[Alimun Webhook] Unhandled event type: ${event.type}`);
  }
}

/**
 * Call the generate-certificate endpoint on Alimun to start PDF generation.
 */
async function triggerCertificateGeneration(session, supabaseUserId) {
  const appUrl = process.env.APP_URL || 'https://alimun.com';
  const url = `${appUrl}/api/generate-certificate`;

  console.log(`[Alimun Webhook] Triggering certificate generation for user ${supabaseUserId} at ${url}`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId:    supabaseUserId,
        sessionId: session.id,
        email:     session.customer_details?.email,
        metadata:  session.metadata
      })
    });

    if (!response.ok) {
      const responseText = await response.text();
      throw new Error(`HTTP ${response.status}: ${responseText}`);
    }

    console.log(`[Alimun Webhook] Certificate generation trigger succeeded for session ${session.id}`);
  } catch (err) {
    console.error(`[Alimun Webhook] Certificate generation request failed:`, err);
    throw err;
  }
}

/**
 * Add a record of 1-on-1 session credits for the student.
 */
async function grantSessionCredits(session, supabaseUserId, supabase) {
  const { data: student, error: studentError } = await supabase
    .from('student_profiles')
    .select('id')
    .eq('user_id', supabaseUserId)
    .single();

  if (studentError || !student) {
    throw new Error(`Student profile not found for user ${supabaseUserId}: ${studentError?.message || 'Not found'}`);
  }

  const credits = parseInt(session.metadata?.credits || '1', 10) || 1;

  const { error: creditError } = await supabase
    .from('session_credits')
    .insert({
      student_id:        student.id,
      credits:           credits,
      source:            'stripe_checkout_payment',
      stripe_session_id: session.id
    });

  if (creditError) {
    throw new Error(`Failed to grant session credits: ${creditError.message}`);
  }

  console.log(`[Alimun Webhook] Successfully granted ${credits} session credits to student profile ${student.id}`);
}

/**
 * Handle subscription profile association.
 */
async function handleSubscriptionCheckout(session, metadata, supabaseUserId, supabase) {
  const stripeCustomerId = session.customer;
  const stripeSubscriptionId = session.subscription;
  const tier = metadata.tier || 'unknown';

  const { error: updateError } = await supabase
    .from('student_profiles')
    .update({
      stripe_customer_id:         stripeCustomerId,
      stripe_subscription_id:     stripeSubscriptionId,
      stripe_subscription_status: 'active',
      tier:                       tier,
      updated_at:                 new Date().toISOString()
    })
    .eq('user_id', supabaseUserId);

  if (updateError) {
    throw new Error(`Failed to associate subscription details to profile: ${updateError.message}`);
  }

  console.log(`[Alimun Webhook] Active subscription tier '${tier}' synced for user ${supabaseUserId}`);
}

/**
 * Send email cancellation warning using Resend REST API
 */
async function sendCancellationEmail(student, subscription) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[Alimun Webhook] RESEND_API_KEY not configured. Skipping cancellation email.');
    return;
  }

  let email = null;
  const supabase = getSupabaseAdmin();
  if (supabase && student.user_id) {
    try {
      const { data: userData } = await supabase.auth.admin.getUserById(student.user_id);
      email = userData?.user?.email;
    } catch (e) {
      console.warn('[Alimun Webhook] Failed to retrieve user email from Supabase:', e.message);
    }
  }

  if (!email && subscription.customer) {
    try {
      const customer = await stripe.customers.retrieve(subscription.customer);
      email = customer.email;
    } catch (e) {
      console.warn('[Alimun Webhook] Failed to retrieve customer email from Stripe:', e.message);
    }
  }

  if (!email) {
    console.error(`[Alimun Webhook] Could not determine recipient email for cancellation notice.`);
    return;
  }

  const endDate = new Date(subscription.current_period_end * 1000).toLocaleDateString('en-US', {
    year:  'numeric',
    month: 'long',
    day:   'numeric'
  });

  const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({
        from:    emailFrom,
        to:      email,
        subject: 'Your subscription has ended',
        html:    `<div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px;">
                   <h2 style="color: #080808;">Your subscription has ended</h2>
                   <p>Hi ${student.full_name || 'there'},</p>
                   <p>Your subscription has ended. Your access continues until <strong>${endDate}</strong>.</p>
                   <p>If you wish to continue learning with Alimun after this date, you can resubscribe at any time from your dashboard.</p>
                   <p>Thank you for studying with us!</p>
                   <p>Best regards,<br/>The Alimun Team</p>
                 </div>`
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[Alimun Webhook] Resend API response error:', errText);
    } else {
      console.log(`[Alimun Webhook] Subscription cancellation email sent to ${email}`);
    }
  } catch (err) {
    console.error('[Alimun Webhook] Resend email dispatch failed:', err);
  }
}

/**
 * Send payment failed warning or suspension email using Resend REST API
 */
async function sendPaymentFailedEmail(student, invoice, isThirdFailure) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[Alimun Webhook] RESEND_API_KEY not configured. Skipping payment failed email.');
    return;
  }

  let email = null;
  const supabase = getSupabaseAdmin();
  if (supabase && student.user_id) {
    try {
      const { data: userData } = await supabase.auth.admin.getUserById(student.user_id);
      email = userData?.user?.email;
    } catch (e) {
      console.warn('[Alimun Webhook] Failed to retrieve user email from Supabase:', e.message);
    }
  }

  if (!email && invoice.customer_email) {
    email = invoice.customer_email;
  }

  if (!email) {
    console.error(`[Alimun Webhook] Could not determine recipient email for payment failure notice.`);
    return;
  }

  const emailFrom = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
  const subject = isThirdFailure ? 'Your subscription has been suspended' : 'Payment failed — Action required';

  const htmlContent = isThirdFailure
    ? `<div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px;">
         <h2 style="color: #ea4335;">Your Alimun subscription has been suspended</h2>
         <p>Hi ${student.full_name || 'there'},</p>
         <p>We were unable to process your payment after 3 attempts. Your subscription has been cancelled and your access has been suspended.</p>
         <p>To reactivate your account, please log in to your dashboard and update your payment method to resubscribe.</p>
         <p>Best regards,<br/>The Alimun Team</p>
       </div>`
    : `<div style="font-family: sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px;">
         <h2 style="color: #080808;">Payment failed for your Alimun subscription</h2>
         <p>Hi ${student.full_name || 'there'},</p>
         <p>We were unable to process your recent subscription payment. Please update your payment method to keep your access active.</p>
         <p>We will attempt to process the payment again in a few days. You can update your payment method in your dashboard's billing settings.</p>
         <p>Best regards,<br/>The Alimun Team</p>
       </div>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type':  'application/json'
      },
      body: JSON.stringify({
        from:    emailFrom,
        to:      email,
        subject: subject,
        html:    htmlContent
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('[Alimun Webhook] Resend API response error:', errText);
    } else {
      console.log(`[Alimun Webhook] Payment failed alert (suspension: ${isThirdFailure}) sent to ${email}`);
    }
  } catch (err) {
    console.error('[Alimun Webhook] Resend email dispatch failed:', err);
  }
}

// Disable body parsing by default so we can fetch raw stream for signature verification
handler.config = {
  api: {
    bodyParser: false,
  },
};

module.exports = handler;
