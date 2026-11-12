/**
 * Entitlements: what a learner bought through the card-first checkout, and what Stripe says happened to it
 * (docs/PRICING_ENGINE_SPEC.md sections 5 and 6; build step 5).
 *
 *   fulfil(ctx, user, quote, refs)   grants a paid or reserved quote (used by api/pricing.js and by the webhook when the
 *                                    learner closed the page before the bank's check came back). Idempotent.
 *   isPricingEvent(ctx, event)       whether a Stripe event belongs to the new checkout (metadata type pricing_v2, or a
 *                                    charge whose invoice or payment the new checkout made).
 *   processEvent(ctx, event)         renewals, failed payments (seat held 3 days), cancellations, room-day payments,
 *                                    refunds (minutes taken back) and disputes (paused, owner told, card flagged).
 *   startPack(ctx, ent, startAt)     the room's first day: monthly packs a subscription schedule of 3 months, upfront
 *                                    packs one off-session payment (step 7's room job calls it).
 *   releasePack(ctx, ent)            a room that did not open: the reservation ends, nothing charged.
 *
 * ctx = { sb, stripe, notify: { paymentFailed(userId, info), owner(subject, text) }, markerSecret }
 * After every change to access, public.sync_access() writes student_profiles.tier and stripe_subscription_status.
 */
const P = require('./pricing.js');

const TYPE = 'pricing_v2';
const PACK_DAYS = 84; // 12 weeks
const iso = (unix) => (unix ? new Date(unix * 1000).toISOString() : null);
const idOf = (x) => (x && typeof x === 'object' ? x.id : x || null);

async function sync(ctx, userId) {
  if (!userId) return;
  const { error } = await ctx.sb.rpc('sync_access', { p_user: userId });
  if (error) throw new Error('sync_access: ' + error.message);
}

async function profileId(sb, userId) {
  const { data } = await sb.from('student_profiles').select('id').eq('user_id', userId).maybeSingle();
  return data ? data.id : null;
}

// ── Room places (enrolments give the class pages, video and reminders) ──
async function enrol(sb, userId, cohortId) {
  const { data: sp } = await sb.from('student_profiles').select('id, enrolled_cohort_id').eq('user_id', userId).maybeSingle();
  if (!sp) return;
  const { data: had } = await sb.from('enrollments').select('id, status').eq('student_id', sp.id).eq('cohort_id', cohortId).limit(1);
  if (had && had.length) {
    if (had[0].status !== 'active') await sb.from('enrollments').update({ status: 'active', cancelled_at: null }).eq('id', had[0].id);
  } else {
    const { error } = await sb.from('enrollments').insert({ student_id: sp.id, cohort_id: cohortId, status: 'active' });
    if (error) throw new Error('enrol: ' + error.message);
  }
  if (!sp.enrolled_cohort_id) await sb.from('student_profiles').update({ enrolled_cohort_id: cohortId }).eq('id', sp.id);
}
async function unenrol(sb, userId, cohortId) {
  const { data: sp } = await sb.from('student_profiles').select('id, enrolled_cohort_id').eq('user_id', userId).maybeSingle();
  if (!sp) return;
  await sb.from('enrollments').update({ status: 'cancelled', cancelled_at: new Date().toISOString() }).eq('student_id', sp.id).eq('cohort_id', cohortId).eq('status', 'active');
  if (sp.enrolled_cohort_id === cohortId) await sb.from('student_profiles').update({ enrolled_cohort_id: null }).eq('id', sp.id);
}

/** Grants what a paid quote bought (or reserves a pack). refs: { invoice, subscription, amountPaid, periodEnd, paymentIntent } */
async function fulfil(ctx, user, q, refs) {
  const { sb, stripe } = ctx;
  if (q.used_at && q.entitlement_id) return q.entitlement_id;
  const prod = P.PRODUCTS[q.product_key];
  let entitlementId = null;
  if (prod.kind === 'minutes') {
    const sp = await profileId(sb, user.id);
    const { error } = await sb.rpc('tutor_add_credit', { p_student: sp, p_seconds: prod.minutes * 60, p_reason: 'purchase',
      p_stripe_session: refs.invoice, p_note: `${prod.minutes} minutes bought`, p_by: null });
    if (error) throw new Error('tutor_add_credit: ' + error.message);
  } else {
    const { data: pr } = await sb.from('products').select('voice_minutes_month').eq('product_key', q.product_key).maybeSingle();
    const ent = {
      user_id: user.id, product_key: q.product_key, variant: q.variant, band: q.band, currency: q.currency, cadence: q.cadence,
      source: 'stripe', cohort_id: q.cohort_id, voice_minutes_month: (pr && pr.voice_minutes_month) || 0, quote_id: q.id,
      stripe_payment_method_id: q.payment_method_id, session_id: q.session_id || null,
    };
    if (q.offer) Object.assign(ent, { offer: q.offer, discount_minor: q.discount_minor || 0 });
    if (prod.charge === 'reserve' || refs.reserve) Object.assign(ent, { status: 'pending_room', amount_paid: 0 });
    else Object.assign(ent, { status: 'active', starts_at: new Date().toISOString(), amount_paid: refs.amountPaid || 0,
      ends_at: refs.periodEnd || null, stripe_subscription_id: refs.subscription || null,
      stripe_invoice_id: refs.subscription ? null : (refs.invoice || null), last_invoice_id: refs.invoice || null });
    const { data, error } = await sb.from('entitlements').upsert(ent, { onConflict: 'quote_id' }).select('id').single();
    if (error) throw new Error('entitlement: ' + error.message);
    entitlementId = data.id;
    // An open class is a room that already runs or is about to: the learner joins it at once
    if (prod.kind === 'open_class' && q.cohort_id && !refs.reserve) await enrol(sb, user.id, q.cohort_id);
  }
  if (q.product_key === 'trial') {
    const pm = await stripe.paymentMethods.retrieve(q.payment_method_id);
    const marks = [{ kind: 'email', hash: P.markerHash('email', P.normaliseEmail(user.email), ctx.markerSecret) }];
    if (pm.card && pm.card.fingerprint) marks.push({ kind: 'card', hash: P.markerHash('card', pm.card.fingerprint, ctx.markerSecret) });
    await sb.from('trial_markers').upsert(marks.map((m) => Object.assign(m, { first_user_id: user.id })), { onConflict: 'kind,hash', ignoreDuplicates: true });
  }
  await sb.from('quotes').update({ used_at: new Date().toISOString(), entitlement_id: entitlementId }).eq('id', q.id);
  await sync(ctx, user.id);
  return entitlementId;
}

// ── Which events are ours ──
function metaType(o) { return o && o.metadata && o.metadata.type; }
function invoiceIsOurs(inv) {
  return metaType(inv) === TYPE || !!(inv.subscription_details && inv.subscription_details.metadata && inv.subscription_details.metadata.type === TYPE);
}
async function chargeTarget(ctx, charge) {
  const { sb } = ctx;
  const inv = idOf(charge.invoice), pi = idOf(charge.payment_intent);
  if (inv) {
    const { data: q } = await sb.from('quotes').select('*').eq('stripe_invoice_id', inv).maybeSingle();
    if (q) return { quote: q };
    const { data: e } = await sb.from('entitlements').select('*').or(`last_invoice_id.eq.${inv},stripe_invoice_id.eq.${inv}`).limit(1);
    if (e && e.length) return { ent: e[0] };
  }
  if (pi) {
    const { data: e } = await sb.from('entitlements').select('*').eq('stripe_payment_intent_id', pi).limit(1);
    if (e && e.length) return { ent: e[0] };
  }
  return null;
}
async function isPricingEvent(ctx, event) {
  const o = event.data.object, t = event.type;
  if (/^customer\.subscription\./.test(t) || /^subscription_schedule\./.test(t) || /^payment_intent\./.test(t)) return metaType(o) === TYPE;
  if (/^invoice\./.test(t)) return invoiceIsOurs(o);
  if (t === 'charge.refunded') return !!(await chargeTarget(ctx, o));
  if (t === 'charge.dispute.created') {
    const charge = await ctx.stripe.charges.retrieve(idOf(o.charge));
    return !!(await chargeTarget(ctx, charge));
  }
  return false;
}

// ── Finding the entitlement ──
async function entBy(sb, col, val) {
  if (!val) return null;
  const { data } = await sb.from('entitlements').select('*').eq(col, val).limit(1);
  return data && data.length ? data[0] : null;
}
async function entOfSubscription(ctx, sub) {
  const { sb } = ctx;
  const m = sub.metadata || {};
  return (await entBy(sb, 'stripe_subscription_id', sub.id))
    || (P.isUuid(m.entitlement_id) ? await entBy(sb, 'id', m.entitlement_id) : null)
    || (P.isUuid(m.quote_id) ? await entBy(sb, 'quote_id', m.quote_id) : null);
}
async function update(ctx, ent, fields) {
  const { error } = await ctx.sb.from('entitlements').update(Object.assign({ updated_at: new Date().toISOString() }, fields)).eq('id', ent.id);
  if (error) throw new Error('entitlement update: ' + error.message);
  await sync(ctx, ent.user_id);
}

/** A quote the learner left before the bank's check came back: grant it now that Stripe says it is paid. */
async function fulfilLate(ctx, quoteId, refs) {
  if (!P.isUuid(quoteId)) return false;
  const { data: q } = await ctx.sb.from('quotes').select('*').eq('id', quoteId).maybeSingle();
  if (!q || q.used_at) return false;
  const { data: u, error } = await ctx.sb.auth.admin.getUserById(q.user_id);
  if (error || !u || !u.user) throw new Error('quote owner not found: ' + quoteId);
  await fulfil(ctx, u.user, q, refs);
  return true;
}

// ── The events ──
async function onSubscription(ctx, object, deleted) {
  const sub = deleted ? object : await ctx.stripe.subscriptions.retrieve(object.id);
  let ent = await entOfSubscription(ctx, sub);
  if (!ent) {
    if ((sub.status === 'active' || sub.status === 'trialing') && sub.metadata && sub.metadata.quote_id) {
      await fulfilLate(ctx, sub.metadata.quote_id, { subscription: sub.id, invoice: idOf(sub.latest_invoice), periodEnd: iso(sub.current_period_end) });
    }
    return;
  }
  const f = { stripe_subscription_id: sub.id };
  if (deleted || sub.status === 'canceled' || sub.status === 'incomplete_expired') {
    f.status = ent.status === 'refunded' ? 'refunded' : 'ended';
    f.ends_at = iso(sub.ended_at) || iso(sub.current_period_end) || new Date().toISOString();
  } else if (sub.status === 'active' || sub.status === 'trialing') {
    f.status = ent.status === 'paused' || ent.status === 'pending_room' || ent.status === 'active' ? 'active' : ent.status;
    f.ends_at = iso(sub.current_period_end);
    if (!ent.starts_at) f.starts_at = iso(sub.current_period_start) || new Date().toISOString();
    f.payment_failed_at = null;
  } else if (sub.status === 'unpaid' || sub.status === 'paused') {
    f.status = 'paused';
  } // past_due: the seat is held; invoice.payment_failed set payment_failed_at
  await update(ctx, ent, f);
}

async function onSchedule(ctx, sched) {
  const ent = (await entBy(ctx.sb, 'stripe_schedule_id', sched.id))
    || (P.isUuid(sched.metadata && sched.metadata.entitlement_id) ? await entBy(ctx.sb, 'id', sched.metadata.entitlement_id) : null);
  if (!ent) return;
  if (ent.status === 'refunded' || ent.status === 'ended') return;
  // Completed: the 3 months were billed; access runs to the end of the last paid month (ends_at from invoice.paid).
  // Cancelled: the learner stopped the future months; access runs to the end of the month already paid.
  await update(ctx, ent, { stripe_schedule_id: sched.id, status: ent.status === 'pending_room' ? 'ended' : ent.status });
}

async function onInvoicePaid(ctx, inv) {
  const subId = idOf(inv.subscription);
  if (!subId) {
    // One payment (minutes, trial, help class): grant it if the learner left before the bank's check came back.
    await fulfilLate(ctx, inv.metadata && inv.metadata.quote_id, { invoice: inv.id, amountPaid: inv.amount_paid });
    return;
  }
  const sub = await ctx.stripe.subscriptions.retrieve(subId);
  const ent = await entOfSubscription(ctx, sub);
  if (!ent) {
    await fulfilLate(ctx, sub.metadata && sub.metadata.quote_id, { subscription: sub.id, invoice: inv.id, amountPaid: inv.amount_paid, periodEnd: iso(sub.current_period_end) });
    return;
  }
  const line = inv.lines && inv.lines.data && inv.lines.data[0];
  const end = (line && line.period && iso(line.period.end)) || iso(sub.current_period_end);
  const f = { status: ent.status === 'refunded' ? 'refunded' : 'active', ends_at: end, payment_failed_at: null, stripe_subscription_id: sub.id };
  if (!ent.starts_at) f.starts_at = (line && line.period && iso(line.period.start)) || new Date().toISOString();
  if (ent.last_invoice_id !== inv.id) { f.amount_paid = (ent.amount_paid || 0) + (inv.amount_paid || 0); f.last_invoice_id = inv.id; }
  await update(ctx, ent, f);
}

async function onInvoiceFailed(ctx, inv, needsAction) {
  const subId = idOf(inv.subscription);
  if (!subId) return; // a one-time invoice the learner is paying on the page: the page shows the error
  const sub = await ctx.stripe.subscriptions.retrieve(subId);
  const ent = await entOfSubscription(ctx, sub);
  if (!ent || ent.status !== 'active') return;
  if (!ent.payment_failed_at) await update(ctx, ent, { payment_failed_at: new Date().toISOString() });
  await ctx.notify.paymentFailed(ent.user_id, { link: inv.hosted_invoice_url || null, needsAction: !!needsAction, invoice: inv });
}

async function onPaymentIntent(ctx, pi, ok) {
  const ent = P.isUuid(pi.metadata && pi.metadata.entitlement_id) ? await entBy(ctx.sb, 'id', pi.metadata.entitlement_id) : null;
  if (!ent) return;
  if (ok) {
    if (ent.stripe_payment_intent_id === pi.id && ent.status === 'active') return;
    const start = ent.starts_at ? Date.parse(ent.starts_at) : Date.now();
    await update(ctx, ent, { status: 'active', stripe_payment_intent_id: pi.id, amount_paid: pi.amount_received || pi.amount,
      starts_at: new Date(start).toISOString(), ends_at: new Date(start + PACK_DAYS * 86400000).toISOString(), payment_failed_at: null });
  } else {
    if (!ent.payment_failed_at) await update(ctx, ent, { payment_failed_at: new Date().toISOString(), stripe_payment_intent_id: pi.id });
    await ctx.notify.paymentFailed(ent.user_id, { link: null, needsAction: pi.status === 'requires_action', paymentIntent: pi });
  }
}

async function onRefund(ctx, charge) {
  const target = await chargeTarget(ctx, charge);
  if (!target) return;
  const full = charge.refunded === true || charge.amount_refunded >= charge.amount;
  if (target.quote && !target.quote.entitlement_id) {
    // Voice minutes: take back what is left of the refunded minutes (tutor_add_credit never goes below zero)
    const q = target.quote, prod = P.PRODUCTS[q.product_key];
    if (!prod || prod.kind !== 'minutes') return;
    const share = full ? 1 : charge.amount_refunded / charge.amount;
    const seconds = Math.round(prod.minutes * 60 * share);
    const sp = await profileId(ctx.sb, q.user_id);
    if (sp && seconds > 0) {
      const { error } = await ctx.sb.rpc('tutor_add_credit', { p_student: sp, p_seconds: -seconds, p_reason: 'admin',
        p_stripe_session: null, p_note: `refund of ${q.stripe_invoice_id}`, p_by: null });
      if (error) throw new Error('tutor_add_credit (refund): ' + error.message);
    }
    return;
  }
  const ent = target.ent || await entBy(ctx.sb, 'id', target.quote.entitlement_id);
  if (!ent || !full) return; // a partial refund (withdrawal by classes taken) leaves access as the admin decided
  if (ent.stripe_subscription_id) await ctx.stripe.subscriptions.cancel(ent.stripe_subscription_id).catch(() => {});
  if (ent.stripe_schedule_id) await ctx.stripe.subscriptionSchedules.cancel(ent.stripe_schedule_id).catch(() => {});
  await update(ctx, ent, { status: 'refunded', ends_at: new Date().toISOString() });
}

async function onDispute(ctx, dispute) {
  const charge = await ctx.stripe.charges.retrieve(idOf(dispute.charge));
  const target = await chargeTarget(ctx, charge);
  const ent = target && (target.ent || (target.quote.entitlement_id ? await entBy(ctx.sb, 'id', target.quote.entitlement_id) : null));
  if (ent && ent.status === 'active') await update(ctx, ent, { status: 'paused' });
  const fp = charge.payment_method_details && charge.payment_method_details.card && charge.payment_method_details.card.fingerprint;
  if (fp) {
    await ctx.sb.from('trial_markers').upsert({ kind: 'card', hash: P.markerHash('card', fp, ctx.markerSecret),
      first_user_id: ent ? ent.user_id : null }, { onConflict: 'kind,hash', ignoreDuplicates: true });
  }
  await ctx.sb.from('abuse_log').insert({ kind: 'dispute', user_id: ent ? ent.user_id : null,
    detail: { dispute: dispute.id, charge: charge.id, amount: dispute.amount, currency: dispute.currency, reason: dispute.reason, product: ent ? ent.product_key : null } });
  await ctx.notify.owner('Alimun: payment dispute opened',
    `A payment was disputed: dispute ${dispute.id}, charge ${charge.id}, ${(dispute.amount / 100).toFixed(2)} ${String(dispute.currency).toUpperCase()}, reason ${dispute.reason}. ` +
    (ent ? `Entitlement ${ent.id} (${ent.product_key}) is paused.` : 'No entitlement found.') + ' Answer it in the Stripe dashboard before the due date.');
}

async function processEvent(ctx, event) {
  const o = event.data.object;
  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': return onSubscription(ctx, o, false);
    case 'customer.subscription.deleted': return onSubscription(ctx, o, true);
    case 'subscription_schedule.completed':
    case 'subscription_schedule.canceled': return onSchedule(ctx, o);
    case 'invoice.paid':
    case 'invoice.payment_succeeded': return onInvoicePaid(ctx, o);
    case 'invoice.payment_failed': return onInvoiceFailed(ctx, o, false);
    case 'invoice.payment_action_required': return onInvoiceFailed(ctx, o, true);
    case 'payment_intent.succeeded': return onPaymentIntent(ctx, o, true);
    case 'payment_intent.payment_failed': return onPaymentIntent(ctx, o, false);
    case 'charge.refunded': return onRefund(ctx, o);
    case 'charge.dispute.created': return onDispute(ctx, o);
    default: return undefined;
  }
}

// ── Charging a reserved pack on the room's first day (section 5) ──
async function priceOf(sb, ent) {
  const { data, error } = await sb.from('price_book').select('unit_amount, stripe_price_id').eq('product_key', ent.product_key)
    .eq('band', ent.band).eq('variant', ent.variant).eq('cadence', ent.cadence).eq('currency', ent.currency).eq('active', true).limit(1);
  if (error) throw new Error('price_book: ' + error.message);
  if (!data || !data.length) throw new Error(`no price for entitlement ${ent.id}`);
  return data[0];
}
async function customerOfUser(sb, userId) {
  const { data } = await sb.from('student_profiles').select('stripe_customer_id').eq('user_id', userId).maybeSingle();
  if (!data || !data.stripe_customer_id) throw new Error('no Stripe customer for ' + userId);
  return data.stripe_customer_id;
}

/**
 * Moving up from an open class to a pack (docs/PRICING_ENGINE_SPEC.md section 5): on the pack's first day the open-class
 * subscription ends and the unused share of its current month is credited, in the same currency, on the pack's first
 * payment (a customer balance credit for a monthly pack, a lower amount for an upfront one). Returns the credit in minor
 * units (0 when there is nothing to credit). The pure share is creditShare(), unit tested.
 */
function creditShare(paidMinor, periodStartMs, periodEndMs, nowMs) {
  if (!paidMinor || !(periodEndMs > periodStartMs) || nowMs >= periodEndMs) return 0;
  const left = Math.max(0, Math.min(1, (periodEndMs - nowMs) / (periodEndMs - periodStartMs)));
  return Math.floor(paidMinor * left);
}
async function moveUpCredit(ctx, ent, customer, nowMs) {
  const { sb, stripe } = ctx;
  const { data: opens } = await sb.from('entitlements').select('*').eq('user_id', ent.user_id).eq('status', 'active')
    .in('product_key', ['open_en', 'open_de']).limit(5);
  let credit = 0;
  for (const o of opens || []) {
    if (o.stripe_subscription_id) {
      let sub = null;
      try { sub = await stripe.subscriptions.retrieve(o.stripe_subscription_id); } catch (e) { sub = null; }
      if (sub && sub.status === 'active' && o.currency === ent.currency) {
        const { data: pr } = await sb.from('price_book').select('unit_amount').eq('product_key', o.product_key).eq('band', o.band)
          .eq('variant', o.variant).eq('cadence', 'month').eq('currency', o.currency).limit(1);
        credit += creditShare(pr && pr[0] ? pr[0].unit_amount : 0, (sub.current_period_start || 0) * 1000, (sub.current_period_end || 0) * 1000, nowMs);
      }
      if (sub && sub.status !== 'canceled') await stripe.subscriptions.cancel(o.stripe_subscription_id).catch(() => {});
    }
    await sb.from('entitlements').update({ status: 'ended', ends_at: new Date(nowMs).toISOString(), updated_at: new Date(nowMs).toISOString() }).eq('id', o.id);
    if (o.cohort_id) await unenrol(sb, o.user_id, o.cohort_id);
  }
  if (credit > 0 && ent.cadence === 'month') {
    await stripe.customers.createBalanceTransaction(customer, { amount: -credit, currency: ent.currency,
      description: 'Unused open-class month, credited on the pack', metadata: { type: TYPE, entitlement_id: ent.id } }, { idempotencyKey: 'moveup-' + ent.id });
  }
  return credit;
}

/** Starts a reserved pack: returns { status: 'scheduled' | 'paid' | 'needs_action' | 'failed' }. startAt: Date or null (now). */
async function startPack(ctx, ent, startAt) {
  const { sb, stripe } = ctx;
  if (ent.status !== 'pending_room') return { status: 'skipped' };
  const price = await priceOf(sb, ent);
  const customer = await customerOfUser(sb, ent.user_id);
  const meta = { type: TYPE, entitlement_id: ent.id, product_key: ent.product_key, band: ent.band, variant: ent.variant, cadence: ent.cadence, supabase_user_id: ent.user_id };
  const at = startAt instanceof Date ? startAt : new Date();
  // Moving up from an open class: its unused share of the month comes off the pack's first payment
  const isOpen = /^open_/.test(ent.product_key);
  const credit = at.getTime() <= Date.now() + 60000 && !isOpen ? await moveUpCredit(ctx, ent, customer, Date.now()) : 0;
  // An offer's discount (launch class, €10 off): off the first payment, in the entitlement's currency
  const discount = Math.max(0, Math.min(ent.discount_minor || 0, price.unit_amount - 50));
  if (ent.cadence === 'month') {
    const future = at.getTime() > Date.now() + 60000;
    if (discount > 0) {
      await stripe.customers.createBalanceTransaction(customer, { amount: -discount, currency: ent.currency,
        description: 'Launch offer: off the first payment', metadata: { type: TYPE, entitlement_id: ent.id, offer: ent.offer || '' } }, { idempotencyKey: 'offer-' + ent.id });
    }
    // A pack is three monthly payments; an open class reserved for its first day goes on monthly until cancelled
    const sched = await stripe.subscriptionSchedules.create({
      customer, start_date: future ? Math.floor(at.getTime() / 1000) : 'now', end_behavior: isOpen ? 'release' : 'cancel', metadata: meta,
      phases: [{ items: [{ price: price.stripe_price_id }], iterations: isOpen ? 1 : 3, currency: ent.currency,
        default_payment_method: ent.stripe_payment_method_id || undefined, metadata: meta }],
    }, { idempotencyKey: 'pack-sched-' + ent.id });
    const { error } = await sb.from('entitlements').update({ stripe_schedule_id: sched.id, starts_at: at.toISOString(),
      stripe_subscription_id: idOf(sched.subscription), updated_at: new Date().toISOString() }).eq('id', ent.id);
    if (error) throw new Error('entitlement schedule: ' + error.message);
    return { status: 'scheduled', schedule: sched.id };
  }
  // Upfront: one off-session payment now (the room job calls this on the first day)
  try {
    const pi = await stripe.paymentIntents.create({
      amount: Math.max(50, price.unit_amount - credit - discount), currency: ent.currency, customer, payment_method: ent.stripe_payment_method_id,
      off_session: true, confirm: true, metadata: meta, description: `Alimun ${ent.product_key}`,
    }, { idempotencyKey: 'pack-pi-' + ent.id });
    await sb.from('entitlements').update({ stripe_payment_intent_id: pi.id, starts_at: at.toISOString(), updated_at: new Date().toISOString() }).eq('id', ent.id);
    if (pi.status === 'succeeded') { await onPaymentIntent(ctx, pi, true); return { status: 'paid', paymentIntent: pi.id }; }
    return { status: pi.status === 'requires_action' ? 'needs_action' : 'failed', paymentIntent: pi.id };
  } catch (e) {
    const pi = e && e.raw && e.raw.payment_intent;
    if (pi) {
      await sb.from('entitlements').update({ stripe_payment_intent_id: pi.id, payment_failed_at: new Date().toISOString(),
        starts_at: at.toISOString(), updated_at: new Date().toISOString() }).eq('id', ent.id);
      await ctx.notify.paymentFailed(ent.user_id, { link: null, needsAction: e.code === 'authentication_required', paymentIntent: pi });
      return { status: e.code === 'authentication_required' ? 'needs_action' : 'failed', paymentIntent: pi.id };
    }
    throw e;
  }
}

/** A room that did not open: the reservation ends with nothing charged. */
async function releasePack(ctx, ent) {
  if (ent.status !== 'pending_room') return false;
  if (ent.stripe_schedule_id) await ctx.stripe.subscriptionSchedules.cancel(ent.stripe_schedule_id).catch(() => {});
  await update(ctx, ent, { status: 'ended', ends_at: new Date().toISOString() });
  return true;
}

module.exports = { TYPE, creditShare, fulfil, enrol, unenrol, isPricingEvent, processEvent, startPack, releasePack, PACK_DAYS };
