/**
 * ============================================================
 *  ALIMUN — POST /api/webhooks/stripe
 *  Vercel Serverless Function (Node.js runtime)
 *
 *  Stripe webhook handler — the ONLY writer of billing state
 *  (student_profiles.tier / stripe_* columns, session_credits).
 *
 *  - Verifies the event signature with STRIPE_WEBHOOK_SECRET
 *  - Idempotent via webhook_logs.event_id (unique)
 *  - Processes the event BEFORE responding, so Vercel never
 *    freezes the function mid-work. Stripe allows ~30s.
 *  - Maps Stripe subscription statuses onto our enum
 *    (active | past_due | cancelled)
 *  - Cancels enrollments when a subscription ends, freeing the
 *    cohort seat (trigger decrements enrolled_count)
 * ============================================================
 */

const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
if (!STRIPE_KEY) {
  console.warn('[Alimun] STRIPE_SECRET_KEY is not defined in environment variables.');
}

const stripe = require('stripe')(STRIPE_KEY || 'dummy_key_for_load_validation');
const { createClient } = require('@supabase/supabase-js');

const env = (k) => process.env[k] || '';

const PRICE_TO_TIER = Object.fromEntries([
  [env('STRIPE_PRICE_COMMUNITY_MONTHLY'),      'community'],
  [env('STRIPE_PRICE_COMMUNITY_YEARLY'),       'community'],
  [env('STRIPE_PRICE_FOCUSED_MONTHLY'),        'focused'],
  [env('STRIPE_PRICE_FOCUSED_YEARLY'),         'focused'],
  [env('STRIPE_PRICE_INTENSIVE_MONTHLY'),      'intensive'],
  [env('STRIPE_PRICE_INTENSIVE_YEARLY'),       'intensive'],
  [env('STRIPE_PRICE_PRIVATE_MONTHLY'),        'private'],
  [env('STRIPE_PRICE_PRIVATE_YEARLY'),         'private'],
  [env('STRIPE_PRICE_COMMUNITY_MONTHLY_AUD'),  'community'],
  [env('STRIPE_PRICE_FOCUSED_MONTHLY_AUD'),    'focused'],
  [env('STRIPE_PRICE_INTENSIVE_MONTHLY_AUD'),  'intensive'],
  [env('STRIPE_PRICE_PRIVATE_MONTHLY_AUD'),    'private'],
  [env('STRIPE_PRICE_COMMUNITY_MONTHLY_MAD'),  'community'],
  [env('STRIPE_PRICE_FOCUSED_MONTHLY_MAD'),    'focused'],
  [env('STRIPE_PRICE_INTENSIVE_MONTHLY_MAD'),  'intensive'],
  [env('STRIPE_PRICE_PRIVATE_MONTHLY_MAD'),    'private'],
].filter(([id]) => id));

const VALID_TIERS = new Set(['community', 'focused', 'intensive', 'private']);
const TIER_WEIGHTS = { community: 1, focused: 2, intensive: 3, private: 4 };

/** Stripe subscription.status → student_profiles.stripe_subscription_status */
function mapSubscriptionStatus(stripeStatus) {
  switch (stripeStatus) {
    case 'active':
    case 'trialing':
      return 'active';
    case 'past_due':
    case 'unpaid':
    case 'incomplete':
    case 'paused':
      return 'past_due';
    case 'canceled':
    case 'incomplete_expired':
    default:
      return 'cancelled';
  }
}

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
 * Obtain the raw request body for signature verification.
 *
 * Stripe signs the exact bytes it sent, so the body must NOT be parsed first.
 * This is a plain Vercel Node function: `config.api.bodyParser` (exported at
 * the bottom) is a Next.js option and may be ignored, so the stream is read
 * FIRST, before anything touches `req.body` (on Vercel, req.body is a lazy
 * getter that parses JSON). Pre-read buffers/strings are accepted as a
 * fallback. A body already parsed into an object cannot be verified, so the
 * caller fails closed (400) and logs it.
 */
async function getRawBody(req) {
  if (Buffer.isBuffer(req.rawBody)) return req.rawBody;
  if (typeof req.rawBody === 'string') return Buffer.from(req.rawBody, 'utf8');

  if (!req.readableEnded && typeof req[Symbol.asyncIterator] === 'function') {
    const chunks = [];
    for await (const chunk of req) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    if (chunks.length) return Buffer.concat(chunks);
  }

  // Stream already consumed: only an untouched Buffer/string body is usable.
  let body;
  try { body = req.body; } catch { body = undefined; }
  if (Buffer.isBuffer(body)) return body;
  if (typeof body === 'string') return Buffer.from(body, 'utf8');

  if (body && typeof body === 'object') {
    // The original bytes are gone and a re-serialised copy will never match.
    console.error('[Alimun Webhook] Raw body unavailable: request body was pre-parsed into an object. Disable body parsing for this function (e.g. NODEJS_HELPERS=0).');
  } else {
    console.error('[Alimun Webhook] Raw body unavailable: request stream was empty.');
  }
  return Buffer.alloc(0);
}

/** Subscription id of an invoice (moved under `parent` in newer Stripe API versions). */
function invoiceSubscriptionId(invoice) {
  const direct = invoice.subscription;
  if (direct) return typeof direct === 'string' ? direct : direct.id;
  const nested = invoice.parent?.subscription_details?.subscription;
  if (nested) return typeof nested === 'string' ? nested : nested.id;
  return null;
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
    return res.status(400).json({ error: 'Missing stripe-signature header' });
  }

  let event;
  try {
    const rawBody = await getRawBody(req);
    if (!rawBody.length) {
      return res.status(400).json({ error: 'Empty or unreadable request body' });
    }
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('[Alimun Webhook] Signature verification failed:', err.message);
    return res.status(400).json({ error: 'Webhook signature verification failed' });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    // Tell Stripe to retry later rather than silently dropping the event.
    return res.status(500).json({ error: 'Database unavailable' });
  }

  // 1. Idempotency: log first; duplicate event ids short-circuit.
  let logId = null;
  {
    const { data: logData, error: logError } = await supabase
      .from('webhook_logs')
      .insert({
        event_id: event.id,
        event_type: event.type,
        payload: { id: event.id, type: event.type, created: event.created, livemode: event.livemode,
                   object: event.data?.object?.object, object_id: event.data?.object?.id },
        status: 'pending',
      })
      .select('id')
      .single();

    if (logError) {
      if (logError.code === '23505') {
        // Seen before. Skip if it finished. A 'failed' row, or a 'pending' row
        // older than 2 minutes (function killed mid-run), is reclaimed
        // atomically; a younger 'pending' row is still in flight in another
        // invocation, so ask Stripe to retry later instead of double-processing.
        const { data: existing } = await supabase
          .from('webhook_logs').select('id, status').eq('event_id', event.id).maybeSingle();
        if (existing?.status === 'processed') {
          return res.status(200).json({ received: true, duplicate: true });
        }
        if (existing?.id) {
          const staleBefore = new Date(Date.now() - 2 * 60 * 1000).toISOString();
          const { data: claimed } = await supabase
            .from('webhook_logs')
            .update({ status: 'pending', error_message: null })
            .eq('id', existing.id)
            .neq('status', 'processed')
            .or(`status.eq.failed,created_at.lt."${staleBefore}"`)
            .select('id');
          if (!claimed || claimed.length === 0) {
            return res.status(409).json({ error: 'Event is already being processed' });
          }
          logId = existing.id;
        }
      } else {
        console.warn('[Alimun Webhook] Failed to create initial log:', logError.message);
      }
    } else {
      logId = logData.id;
    }
  }

  // 2. Process synchronously, then acknowledge.
  try {
    await processWebhookEvent(event, supabase);
    if (logId) {
      await supabase.from('webhook_logs').update({ status: 'processed' }).eq('id', logId);
    }
    return res.status(200).json({ received: true });
  } catch (err) {
    console.error(`[Alimun Webhook] Error processing event ${event.id} (${event.type}):`, err);
    if (logId) {
      await supabase
        .from('webhook_logs')
        .update({ status: 'failed', error_message: (err.message || String(err)).slice(0, 1000) })
        .eq('id', logId);
    }
    // 500 → Stripe retries with backoff; the 'failed' row is reprocessed.
    return res.status(500).json({ error: 'Processing failed' });
  }
};

// ── Lookup helpers ────────────────────────────────────────────

const STUDENT_BILLING_COLUMNS = 'id, user_id, full_name, tier, stripe_subscription_id, stripe_subscription_status, enrolled_cohort_id';

/**
 * Find the student a subscription/invoice event belongs to.
 * Matches on the stored subscription id first. The customer fallback is used
 * only when the student has no live subscription stored (none, or the stored
 * one is cancelled): events from an OLD or second subscription of the same
 * customer must never overwrite the active one (APIP-01).
 */
async function findStudentBySubscription(supabase, subscriptionId, stripeCustomerId) {
  if (subscriptionId) {
    const { data } = await supabase
      .from('student_profiles')
      .select(STUDENT_BILLING_COLUMNS)
      .eq('stripe_subscription_id', subscriptionId)
      .maybeSingle();
    if (data) return data;
  }
  if (stripeCustomerId) {
    const { data } = await supabase
      .from('student_profiles')
      .select(STUDENT_BILLING_COLUMNS)
      .eq('stripe_customer_id', stripeCustomerId)
      .maybeSingle();
    if (data) {
      const storedLive = data.stripe_subscription_id && data.stripe_subscription_status !== 'cancelled';
      if (storedLive && subscriptionId && data.stripe_subscription_id !== subscriptionId) {
        console.warn(`[Alimun Webhook] Ignoring event for subscription ${subscriptionId}: student ${data.id} has active subscription ${data.stripe_subscription_id}`);
        return null;
      }
      return data;
    }
  }
  return null;
}

/** End a student's active enrollment(s); the DB trigger frees the seat. */
async function cancelActiveEnrollments(supabase, studentId) {
  const { error } = await supabase
    .from('enrollments')
    .update({ status: 'cancelled', cancelled_at: new Date().toISOString() })
    .eq('student_id', studentId)
    .eq('status', 'active');
  if (error) throw new Error(`Failed to cancel enrollments: ${error.message}`);
}

/** After a tier decrease, end enrollments in cohorts above the new tier (APIP-04). */
async function cancelEnrollmentsAboveTier(supabase, student, newTier) {
  const newWeight = TIER_WEIGHTS[newTier] || 0;
  const { data: rows, error } = await supabase
    .from('enrollments')
    .select('id, cohort_id, cohorts ( tier )')
    .eq('student_id', student.id)
    .eq('status', 'active');
  if (error) throw new Error(`Failed to load enrollments: ${error.message}`);
  const over = (rows || []).filter((r) => (TIER_WEIGHTS[r.cohorts?.tier] || 0) > newWeight);
  if (!over.length) return;
  const { error: cErr } = await supabase
    .from('enrollments')
    .update({ status: 'cancelled', cancelled_at: new Date().toISOString() })
    .in('id', over.map((r) => r.id));
  if (cErr) throw new Error(`Failed to cancel enrollments above tier: ${cErr.message}`);
  if (over.some((r) => r.cohort_id === student.enrolled_cohort_id)) {
    await supabase.from('student_profiles').update({ enrolled_cohort_id: null }).eq('id', student.id);
  }
  console.log(`[Alimun Webhook] Tier lowered to ${newTier}: released ${over.length} seat(s) for student ${student.id}`);
}

// ── Event processing ──────────────────────────────────────────

async function processWebhookEvent(event, supabase) {
  const object = event.data.object;

  switch (event.type) {
    case 'checkout.session.completed':
    case 'checkout.session.async_payment_succeeded': {
      const session = object;
      // Only money that has arrived grants anything. Delayed methods (SEPA,
      // bank transfer...) complete with payment_status 'unpaid' and are
      // granted later by checkout.session.async_payment_succeeded.
      if (session.payment_status !== 'paid' && session.payment_status !== 'no_payment_required') {
        console.log(`[Alimun Webhook] Checkout ${session.id} not paid yet (${session.payment_status}); waiting.`);
        break;
      }
      const metadata = session.metadata || {};
      const supabaseUserId = metadata.supabase_user_id || session.client_reference_id;
      if (!supabaseUserId) {
        console.warn(`[Alimun Webhook] No supabase_user_id on checkout session ${session.id}`);
        break;
      }

      if (session.mode === 'subscription') {
        await handleSubscriptionCheckout(session, metadata, supabaseUserId, supabase);
      } else {
        await handleOneTimeCheckout(session, metadata, supabaseUserId, supabase);
      }
      break;
    }

    case 'checkout.session.async_payment_failed': {
      // Delayed payment failed: nothing was granted for it, so nothing to undo.
      console.warn(`[Alimun Webhook] Async payment failed for checkout ${object.id} (customer ${object.customer}); nothing granted.`);
      break;
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      // Events can arrive out of order: apply the subscription's CURRENT
      // state, not the payload snapshot (APIP-08).
      const subscription = await stripe.subscriptions.retrieve(object.id);
      const student = await findStudentBySubscription(supabase, subscription.id, subscription.customer);
      if (!student) {
        console.warn(`[Alimun Webhook] No student for subscription ${subscription.id}`);
        break;
      }

      const status = mapSubscriptionStatus(subscription.status);
      const priceId = subscription.items?.data?.[0]?.price?.id;
      // The current price decides the tier; metadata is copied at checkout and
      // goes stale after a plan switch, so it is only a fallback (APIP-04).
      const newTier = PRICE_TO_TIER[priceId]
        || ((subscription.metadata?.tier && VALID_TIERS.has(subscription.metadata.tier)) ? subscription.metadata.tier : undefined);

      const updates = {
        stripe_subscription_id: subscription.id,
        stripe_subscription_status: status,
        updated_at: new Date().toISOString(),
      };
      if (status === 'active' && newTier && VALID_TIERS.has(newTier) && newTier !== student.tier) {
        updates.tier = newTier;
      }

      const { error } = await supabase.from('student_profiles').update(updates).eq('id', student.id);
      if (error) throw new Error(`Failed to update student profile: ${error.message}`);

      // Release the seat once Stripe has given up on the subscription
      // (canceled/expired, or 'unpaid' after the dashboard retry schedule).
      if (status === 'cancelled' || subscription.status === 'unpaid') {
        await cancelActiveEnrollments(supabase, student.id);
        await supabase.from('student_profiles').update({ enrolled_cohort_id: null }).eq('id', student.id);
      } else if (updates.tier && (TIER_WEIGHTS[updates.tier] || 0) < (TIER_WEIGHTS[student.tier] || 0)) {
        await cancelEnrollmentsAboveTier(supabase, student, updates.tier);
      }
      console.log(`[Alimun Webhook] Subscription ${subscription.id} → ${status}${updates.tier ? ', tier ' + updates.tier : ''}`);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = object;
      const student = await findStudentBySubscription(supabase, subscription.id, subscription.customer);
      if (!student) {
        console.warn(`[Alimun Webhook] No student for subscription ${subscription.id}`);
        break;
      }

      const { error } = await supabase
        .from('student_profiles')
        .update({
          stripe_subscription_status: 'cancelled',
          enrolled_cohort_id: null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', student.id);
      if (error) throw new Error(`Failed to mark subscription cancelled: ${error.message}`);

      await cancelActiveEnrollments(supabase, student.id);
      await sendCancellationEmail(student, subscription);
      break;
    }

    case 'invoice.paid':
    case 'invoice.payment_succeeded': {
      const invoice = object;
      const subId = invoiceSubscriptionId(invoice);
      const student = await findStudentBySubscription(supabase, subId, invoice.customer);
      if (!student) break;
      if (student.stripe_subscription_status !== 'active') {
        const { error } = await supabase
          .from('student_profiles')
          .update({ stripe_subscription_status: 'active', updated_at: new Date().toISOString() })
          .eq('id', student.id);
        if (error) throw new Error(`Failed to reactivate after payment: ${error.message}`);
        console.log(`[Alimun Webhook] Payment recovered for student ${student.id}`);
      }
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = object;
      const subId = invoiceSubscriptionId(invoice);
      const student = await findStudentBySubscription(supabase, subId, invoice.customer);
      if (!student) {
        console.warn(`[Alimun Webhook] No student for customer ${invoice.customer}`);
        break;
      }

      // Mark past_due only. Stripe's retry schedule decides when the
      // subscription ends; the seat is released on customer.subscription.deleted
      // (or updated to unpaid/canceled), not after a fixed attempt count (APIP-09).
      const { error } = await supabase
        .from('student_profiles')
        .update({ stripe_subscription_status: 'past_due', updated_at: new Date().toISOString() })
        .eq('id', student.id);
      if (error) throw new Error(`Failed to update on payment failure: ${error.message}`);

      await sendPaymentFailedEmail(student, invoice, false);
      break;
    }

    case 'charge.refunded':
    case 'charge.dispute.created': {
      // Money went back out. Log loudly for the admin; product decision on
      // access revocation is handled manually (see admin dashboard).
      // The webhook_logs row for this event keeps the id for the admin.
      console.warn(`[Alimun Webhook] ${event.type} for charge ${object.charge || object.id} payment_intent ${object.payment_intent} customer ${object.customer} amount ${object.amount}`);
      break;
    }

    default:
      console.log(`[Alimun Webhook] Unhandled event type: ${event.type}`);
  }
}

/** Subscription checkout → activate tier. */
async function handleSubscriptionCheckout(session, metadata, supabaseUserId, supabase) {
  const stripeCustomerId = typeof session.customer === 'string' ? session.customer : session.customer?.id;
  const stripeSubscriptionId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id;

  let tier;
  if (stripeSubscriptionId) {
    const sub = await stripe.subscriptions.retrieve(stripeSubscriptionId);
    tier = PRICE_TO_TIER[sub.items?.data?.[0]?.price?.id];
  }
  if (!VALID_TIERS.has(tier)) tier = metadata.tier;
  if (!VALID_TIERS.has(tier)) {
    throw new Error(`Cannot resolve tier for checkout ${session.id} (metadata.tier=${metadata.tier})`);
  }

  const { data, error } = await supabase
    .from('student_profiles')
    .update({
      stripe_customer_id: stripeCustomerId,
      stripe_subscription_id: stripeSubscriptionId,
      stripe_subscription_status: 'active',
      tier,
      updated_at: new Date().toISOString(),
    })
    .eq('user_id', supabaseUserId)
    .select('id');

  if (error) throw new Error(`Failed to activate subscription: ${error.message}`);
  if (!data || data.length === 0) throw new Error(`No student_profiles row for user ${supabaseUserId}`);

  console.log(`[Alimun Webhook] Subscription tier '${tier}' activated for user ${supabaseUserId}`);
}

/**
 * One-time purchases: founding member fee, 1:1 session credit, certificate.
 * Writes are keyed on stripe_session_id (unique), so completed +
 * async_payment_succeeded or a redelivery grant at most once (APIP-02).
 */
async function handleOneTimeCheckout(session, metadata, supabaseUserId, supabase) {
  const type = metadata.type || 'unknown';
  const { data: student, error } = await supabase
    .from('student_profiles')
    .select('id')
    .eq('user_id', supabaseUserId)
    .maybeSingle();
  if (error || !student) throw new Error(`No student_profiles row for user ${supabaseUserId}`);

  const stripeCustomerId = typeof session.customer === 'string' ? session.customer : session.customer?.id;
  if (stripeCustomerId) {
    await supabase.from('student_profiles').update({ stripe_customer_id: stripeCustomerId }).eq('id', student.id);
  }

  switch (type) {
    case 'session': {
      const credits = Math.max(1, parseInt(metadata.credits || '1', 10) || 1);
      const { error: creditError } = await supabase.from('session_credits').upsert({
        student_id: student.id,
        credits,
        source: 'stripe_checkout_payment',
        stripe_session_id: session.id,
      }, { onConflict: 'stripe_session_id', ignoreDuplicates: true });
      if (creditError) throw new Error(`Failed to grant session credits: ${creditError.message}`);
      console.log(`[Alimun Webhook] Granted ${credits} 1:1 credit(s) to student ${student.id}`);
      break;
    }
    case 'founding_member': {
      // No longer sold (removed 15 Oct 2026). Kept so a checkout opened before
      // the removal is still recorded if it completes.
      // The founding fee locks the founding price; access itself comes with
      // the subscription. Record the purchase for the admin.
      const { error: creditError } = await supabase.from('session_credits').upsert({
        student_id: student.id,
        credits: 0,
        source: 'founding_member_fee',
        stripe_session_id: session.id,
      }, { onConflict: 'stripe_session_id', ignoreDuplicates: true });
      if (creditError) throw new Error(`Failed to record founding fee: ${creditError.message}`);
      console.log(`[Alimun Webhook] Founding member fee recorded for student ${student.id}`);
      break;
    }
    case 'certificate': {
      // Certificate generation is not implemented yet (no /api/generate-certificate).
      const { error: certError } = await supabase.from('session_credits').upsert({
        student_id: student.id,
        credits: 0,
        source: 'certificate_purchase',
        stripe_session_id: session.id,
      }, { onConflict: 'stripe_session_id', ignoreDuplicates: true });
      if (certError) throw new Error(`Failed to record certificate purchase: ${certError.message}`);
      console.warn(`[Alimun Webhook] Certificate purchased by ${student.id} — manual fulfilment required`);
      break;
    }
    default:
      throw new Error(`Unknown one-time purchase type '${type}' on session ${session.id}`);
  }
}

// ── Email helpers (Resend) ────────────────────────────────────

async function resolveStudentEmail(student, fallback) {
  const supabase = getSupabaseAdmin();
  if (supabase && student.user_id) {
    try {
      const { data } = await supabase.auth.admin.getUserById(student.user_id);
      if (data?.user?.email) return data.user.email;
    } catch (e) {
      console.warn('[Alimun Webhook] Failed to resolve user email:', e.message);
    }
  }
  return fallback || null;
}

async function sendResend({ to, subject, html }) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('[Alimun Webhook] RESEND_API_KEY not configured. Skipping email.');
    return;
  }
  const from = process.env.EMAIL_FROM_ADDRESS || 'Alimun <no-reply@alimun.com>';
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from, to, subject, html }),
    });
    if (!response.ok) {
      console.error('[Alimun Webhook] Resend API error:', await response.text());
    }
  } catch (err) {
    console.error('[Alimun Webhook] Resend dispatch failed:', err);
  }
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

async function sendCancellationEmail(student, subscription) {
  let fallback = null;
  if (subscription.customer) {
    try {
      const customer = await stripe.customers.retrieve(subscription.customer);
      fallback = customer.email;
    } catch (_) { /* ignore */ }
  }
  const email = await resolveStudentEmail(student, fallback);
  if (!email) return;

  const periodEnd = subscription.current_period_end || subscription.items?.data?.[0]?.current_period_end;
  const endDate = periodEnd
    ? new Date(periodEnd * 1000).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'today';

  await sendResend({
    to: email,
    subject: 'Your Alimun subscription has ended',
    html: `<div style="font-family:sans-serif;color:#333;line-height:1.6;max-width:600px;margin:0 auto;padding:20px;border:1px solid #f0f0f0;border-radius:8px;">
      <h2 style="color:#080808;">Your subscription has ended</h2>
      <p>Hi ${escapeHtml(student.full_name) || 'there'},</p>
      <p>Your subscription has ended and your seat in your class has been released. Your access continues until <strong>${endDate}</strong>.</p>
      <p>You can resubscribe at any time from your dashboard to rejoin a class.</p>
      <p>Thank you for studying with us!</p>
      <p>The Alimun Team</p>
    </div>`,
  });
}

async function sendPaymentFailedEmail(student, invoice, isFinalFailure) {
  const email = await resolveStudentEmail(student, invoice.customer_email);
  if (!email) return;

  const name = escapeHtml(student.full_name) || 'there';
  const html = isFinalFailure
    ? `<div style="font-family:sans-serif;color:#333;line-height:1.6;max-width:600px;margin:0 auto;padding:20px;border:1px solid #f0f0f0;border-radius:8px;">
        <h2 style="color:#ea4335;">Your Alimun subscription has been suspended</h2>
        <p>Hi ${name},</p>
        <p>We were unable to process your payment after 3 attempts. Your subscription has been cancelled and your class seat released.</p>
        <p>To come back, log in to your dashboard, update your payment method and resubscribe.</p>
        <p>The Alimun Team</p>
      </div>`
    : `<div style="font-family:sans-serif;color:#333;line-height:1.6;max-width:600px;margin:0 auto;padding:20px;border:1px solid #f0f0f0;border-radius:8px;">
        <h2 style="color:#080808;">Payment failed for your Alimun subscription</h2>
        <p>Hi ${name},</p>
        <p>We could not process your latest subscription payment. Please update your payment method in your dashboard's billing settings to keep your seat.</p>
        <p>We will retry automatically in a few days.</p>
        <p>The Alimun Team</p>
      </div>`;

  await sendResend({
    to: email,
    subject: isFinalFailure ? 'Your subscription has been suspended' : 'Payment failed — action required',
    html,
  });
}

module.exports = handler;
// Stripe signs the raw bytes — Vercel must not parse the body first.
module.exports.config = { api: { bodyParser: false } };
