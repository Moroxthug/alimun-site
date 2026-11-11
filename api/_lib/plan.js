/**
 * Whether a student's plan is active: an active Stripe subscription, or a plan
 * an admin gave without payment that has not ended yet (plan_given_until).
 * Keep in step with public.can_join_waitlist() and public.tutor_plan_allowance().
 */
function planActive(profile, now) {
  if (!profile) return false;
  if (profile.stripe_subscription_status === 'active') return true;
  const until = profile.plan_given_until ? Date.parse(profile.plan_given_until) : NaN;
  const at = now instanceof Date ? now.getTime() : typeof now === 'number' ? now : Date.now();
  return Number.isFinite(until) && until > at;
}

module.exports = { planActive };
