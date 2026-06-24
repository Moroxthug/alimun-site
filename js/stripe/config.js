/**
 * ============================================================
 *  ALIMUN — Stripe Client Module
 *  /js/stripe/config.js
 *
 *  Exports:
 *    stripe          — Stripe.js instance (browser, lazy-init)
 *    getStripe()     — async getter that loads Stripe.js on demand
 *    PRICE_IDS       — map of all Stripe price IDs
 *    PLANS           — display metadata for all subscription plans
 *    createCheckout  — helper to redirect to Stripe Checkout
 *    openBillingPortal — helper to open Stripe Customer Portal
 *
 *  Usage:
 *    import { getStripe, createCheckout, PLANS } from '/js/stripe/config.js';
 *
 *  Stripe.js is loaded lazily on first call to getStripe() to
 *  avoid blocking page load on pages that don't need payments.
 * ============================================================
 */

// ── Price IDs ─────────────────────────────────────────────────
// Populated from window.ALIMUN_CONFIG (injected per-page)
// or fall back to the placeholder strings for dev reference.

const cfg = window.ALIMUN_CONFIG || {};

export const PRICE_IDS = {
  // EUR Monthly subscriptions
  community_monthly:      cfg.stripePriceCommunityMonthly      || 'price_COMMUNITY_MONTHLY_ID',
  focused_monthly:        cfg.stripePriceFocusedMonthly        || 'price_FOCUSED_MONTHLY_ID',
  intensive_monthly:      cfg.stripePriceIntensiveMonthly      || 'price_INTENSIVE_MONTHLY_ID',
  private_monthly:        cfg.stripePricePrivateMonthly        || 'price_PRIVATE_MONTHLY_ID',

  // EUR Yearly subscriptions
  community_yearly:       cfg.stripePriceCommunityYearly       || 'price_COMMUNITY_YEARLY_ID',
  focused_yearly:         cfg.stripePriceFocusedYearly         || 'price_FOCUSED_YEARLY_ID',
  intensive_yearly:       cfg.stripePriceIntensiveYearly       || 'price_INTENSIVE_YEARLY_ID',
  private_yearly:         cfg.stripePricePrivateYearly         || 'price_PRIVATE_YEARLY_ID',

  // One-time payments (EUR only)
  oneonone_session:       cfg.stripePriceOneononeSession       || 'price_ONEONONE_SESSION_ID',
  certificate:            cfg.stripePriceCertificate           || 'price_CERTIFICATE_ID',

  // AUD Monthly (regional)
  community_monthly_aud:  cfg.stripePriceCommunityMonthlyAud   || 'price_COMMUNITY_MONTHLY_AUD_ID',
  focused_monthly_aud:    cfg.stripePriceFocusedMonthlyAud     || 'price_FOCUSED_MONTHLY_AUD_ID',
  intensive_monthly_aud:  cfg.stripePriceIntensiveMonthlyAud   || 'price_INTENSIVE_MONTHLY_AUD_ID',
  private_monthly_aud:    cfg.stripePricePrivateMonthlyAud     || 'price_PRIVATE_MONTHLY_AUD_ID',

  // MAD Monthly (regional)
  community_monthly_mad:  cfg.stripePriceCommunityMonthlyMad   || 'price_COMMUNITY_MONTHLY_MAD_ID',
  focused_monthly_mad:    cfg.stripePriceFocusedMonthlyMad     || 'price_FOCUSED_MONTHLY_MAD_ID',
  intensive_monthly_mad:  cfg.stripePriceIntensiveMonthlyMad   || 'price_INTENSIVE_MONTHLY_MAD_ID',
  private_monthly_mad:    cfg.stripePricePrivateMonthlyMad     || 'price_PRIVATE_MONTHLY_MAD_ID',
};

// ── Plan display metadata ─────────────────────────────────────
export const PLANS = {
  community: {
    name:           'Community',
    tagline:        '1 session/week · ~35 learners',
    monthlyPrice:   17,
    yearlyPrice:    290,
    yearlyMonthly:  24,   // effective monthly when billed yearly (290/12 ≈ 24)
    color:          '#f5f4f0',
    textColor:      '#080808',
    badge:          null,
    features: [
      '1 live group session per week',
      'Up to 35 learners per cohort',
      'Session notes & vocabulary PDF',
      'Goal-specific curriculum',
      'Community chat access',
    ],
    priceId: {
      monthly:     PRICE_IDS.community_monthly,
      yearly:      PRICE_IDS.community_yearly,
      monthly_aud: PRICE_IDS.community_monthly_aud,
      monthly_mad: PRICE_IDS.community_monthly_mad,
    },
  },

  focused: {
    name:           'Focused',
    tagline:        '2 sessions/week · ~17 learners',
    monthlyPrice:   39,
    yearlyPrice:    590,
    yearlyMonthly:  49,   // effective monthly when billed yearly (590/12 ≈ 49)
    color:          '#080808',
    textColor:      '#ffffff',
    accentColor:    '#ceff65',
    badge:          'Most popular',
    features: [
      '2 live group sessions per week',
      'Up to 17 learners per cohort',
      'Session notes & vocabulary PDF',
      'Goal-specific curriculum',
      'Community chat access',
      'Monthly progress report',
    ],
    priceId: {
      monthly:     PRICE_IDS.focused_monthly,
      yearly:      PRICE_IDS.focused_yearly,
      monthly_aud: PRICE_IDS.focused_monthly_aud,
      monthly_mad: PRICE_IDS.focused_monthly_mad,
    },
  },

  intensive: {
    name:           'Intensive',
    tagline:        '3 sessions/week · ~6 learners + 1:1',
    monthlyPrice:   69,
    yearlyPrice:    990,
    yearlyMonthly:  82,   // effective monthly when billed yearly (990/12 ≈ 82)
    color:          '#ceff65',
    textColor:      '#080808',
    badge:          null,
    features: [
      '3 live group sessions per week',
      'Up to 6 learners per cohort',
      'Monthly 1:1 check-in with teacher',
      'Session notes & vocabulary PDF',
      'Goal-specific curriculum',
      'Community chat access',
      'Monthly progress report',
      'Priority support',
    ],
    priceId: {
      monthly:     PRICE_IDS.intensive_monthly,
      yearly:      PRICE_IDS.intensive_yearly,
      monthly_aud: PRICE_IDS.intensive_monthly_aud,
      monthly_mad: PRICE_IDS.intensive_monthly_mad,
    },
  },

  private: {
    name:           '1 on 1',
    tagline:        'Private sessions · Base 3 classes/week',
    monthlyPrice:   179,
    yearlyPrice:    1790,
    yearlyMonthly:  149,  // effective monthly when billed yearly (1790/12 ≈ 149)
    color:          '#f5f4f0',
    textColor:      '#080808',
    badge:          'Maximum progress',
    features: [
      'Fully private cohort (1 student)',
      'Flexible schedule with your teacher',
      'Completely personalised curriculum',
      'Session notes & vocabulary PDF',
      'Base 3 private sessions per week',
      'Option for extra classes after limit',
      'Voice note feedback between sessions',
      'Priority support',
    ],
    priceId: {
      monthly:     PRICE_IDS.private_monthly,
      yearly:      PRICE_IDS.private_yearly,
      monthly_aud: PRICE_IDS.private_monthly_aud,
      monthly_mad: PRICE_IDS.private_monthly_mad,
    },
  },
};

// ── Regional price ID resolver ─────────────────────────────────

/**
 * Returns the correct Stripe Price ID for a given plan tier and billing cycle,
 * based on the user's preferred currency.
 *
 * Falls back to EUR if no regional price is configured for the given currency.
 * Yearly billing is always EUR (no regional yearly prices).
 *
 * @param {'community'|'focused'|'intensive'|'private'} tier
 * @param {'monthly'|'yearly'} billing
 * @param {'eur'|'aud'|'mad'} [currency='eur']
 * @returns {string} Stripe Price ID
 *
 * @example
 *   const priceId = getRegionalPriceId('focused', 'monthly', 'aud');
 *   await createCheckout({ priceId, mode: 'subscription' });
 */
export function getRegionalPriceId(tier, billing = 'monthly', currency = 'eur') {
  const plan = PLANS[tier];
  if (!plan) throw new Error(`[Alimun] Unknown plan tier: ${tier}`);

  const cur = currency.toLowerCase();

  // Yearly is EUR-only; AUD/MAD regional prices are monthly only
  if (billing === 'yearly' || cur === 'eur') {
    return plan.priceId[billing] || plan.priceId.monthly;
  }

  const regionalKey = `monthly_${cur}`;
  return plan.priceId[regionalKey] || plan.priceId.monthly;
}

// ── Stripe.js lazy loader ─────────────────────────────────────
let _stripe = null;

/**
 * Lazily loads Stripe.js and returns the Stripe instance.
 * Safe to call multiple times — only loads the script once.
 * @returns {Promise<stripe.Stripe>}
 */
export async function getStripe() {
  if (_stripe) return _stripe;

  const publishableKey = cfg.stripePublishableKey;
  if (!publishableKey) {
    throw new Error(
      '[Alimun] window.ALIMUN_CONFIG.stripePublishableKey is not set.'
    );
  }

  // Load Stripe.js from CDN if not already loaded
  if (!window.Stripe) {
    await new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src    = 'https://js.stripe.com/v3/';
      script.async  = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error('[Alimun] Failed to load Stripe.js'));
      document.head.appendChild(script);
    });
  }

  _stripe = window.Stripe(publishableKey, {
    locale: 'en',
  });

  return _stripe;
}

// ── Checkout helper ───────────────────────────────────────────

/**
 * Create a Stripe Checkout session via your backend API
 * and redirect the user to Stripe's hosted checkout page.
 *
 * @param {Object} params
 * @param {string} params.priceId           - Stripe Price ID to charge
 * @param {'subscription'|'payment'} params.mode - Subscription or one-time
 * @param {string} [params.successUrl]      - Override success redirect URL
 * @param {string} [params.cancelUrl]       - Override cancel redirect URL
 * @param {string} [params.cohortId]        - Pass cohort ID as metadata
 * @param {string} [params.customerEmail]   - Pre-fill checkout email
 */
export async function createCheckout({
  priceId,
  mode = 'subscription',
  successUrl = `${cfg.appUrl || window.location.origin}/student-dashboard.html?checkout=success`,
  cancelUrl  = `${cfg.appUrl || window.location.origin}/signup.html?checkout=cancelled`,
  cohortId   = null,
  customerEmail = null,
} = {}) {
  try {
    const body = { priceId, mode, successUrl, cancelUrl };
    if (cohortId)       body.cohortId       = cohortId;
    if (customerEmail)  body.customerEmail   = customerEmail;

    const resp = await fetch('/api/stripe/create-checkout', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.message || `Checkout API error ${resp.status}`);
    }

    const { url } = await resp.json();
    if (!url) throw new Error('[Alimun] No checkout URL returned from API');

    window.location.href = url;
  } catch (err) {
    console.error('[Alimun] createCheckout failed:', err);
    throw err;
  }
}

/**
 * Open the Stripe Customer Portal for subscription management.
 * (cancel, upgrade, update payment method, download invoices)
 *
 * @param {string} [returnUrl] - URL to return to after the portal session
 */
export async function openBillingPortal(
  returnUrl = `${cfg.appUrl || window.location.origin}/student-dashboard.html`
) {
  try {
    const resp = await fetch('/api/stripe/billing-portal', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ returnUrl }),
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.message || `Billing portal API error ${resp.status}`);
    }

    const { url } = await resp.json();
    if (!url) throw new Error('[Alimun] No portal URL returned from API');

    window.location.href = url;
  } catch (err) {
    console.error('[Alimun] openBillingPortal failed:', err);
    throw err;
  }
}

// ── Stripe Elements helper ────────────────────────────────────

/**
 * Mount a Stripe Payment Element into a container for custom
 * embedded payment flows (alternative to hosted Checkout).
 *
 * @param {string} containerId    - DOM element ID to mount into
 * @param {string} clientSecret   - Payment/Setup intent client secret from your API
 * @returns {Promise<{elements: stripe.elements.Elements, paymentElement: stripe.elements.Element}>}
 */
export async function mountPaymentElement(containerId, clientSecret) {
  const stripe = await getStripe();

  const elements = stripe.elements({
    clientSecret,
    appearance: {
      theme: 'flat',
      variables: {
        colorPrimary:        '#ceff65',
        colorBackground:     '#ffffff',
        colorText:           '#080808',
        colorDanger:         '#d5455f',
        fontFamily:          'Satoshi, system-ui, sans-serif',
        borderRadius:        '10px',
        spacingUnit:         '5px',
      },
      rules: {
        '.Input': {
          border: '1.5px solid rgba(8,8,8,0.18)',
          boxShadow: 'none',
        },
        '.Input:focus': {
          border: '1.5px solid #080808',
          boxShadow: 'none',
          outline: 'none',
        },
        '.Label': {
          fontSize: '0.78rem',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          color: 'rgba(8,8,8,0.5)',
        },
      },
    },
  });

  const paymentElement = elements.create('payment');
  paymentElement.mount(`#${containerId}`);

  return { elements, paymentElement };
}

/**
 * Confirm a payment using a mounted Payment Element.
 *
 * @param {stripe.elements.Elements} elements
 * @param {string} returnUrl
 * @returns {Promise<{error?: stripe.StripeError}>}
 */
export async function confirmPayment(elements, returnUrl) {
  const stripe = await getStripe();
  return stripe.confirmPayment({ elements, confirmParams: { return_url: returnUrl } });
}
