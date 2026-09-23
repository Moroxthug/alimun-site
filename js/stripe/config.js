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
// Populated from window.ALIMUN_CONFIG.prices — the object returned by
// GET /api/stripe/config ({ communityMonthly, ..., regional: { aud, mad } }).
// Pages that still inject the legacy flat cfg.stripePrice* keys keep working.
// Placeholder strings remain only as a dev-time fallback.

const cfg = window.ALIMUN_CONFIG || {};
const prices   = cfg.prices || {};
const regional = prices.regional || {};
const aud = regional.aud || {};
const mad = regional.mad || {};

export const PRICE_IDS = {
  // EUR Monthly subscriptions
  community_monthly:      prices.communityMonthly || cfg.stripePriceCommunityMonthly || 'price_COMMUNITY_MONTHLY_ID',
  focused_monthly:        prices.focusedMonthly   || cfg.stripePriceFocusedMonthly   || 'price_FOCUSED_MONTHLY_ID',
  intensive_monthly:      prices.intensiveMonthly || cfg.stripePriceIntensiveMonthly || 'price_INTENSIVE_MONTHLY_ID',
  private_monthly:        prices.privateMonthly   || cfg.stripePricePrivateMonthly   || 'price_PRIVATE_MONTHLY_ID',

  // EUR Yearly subscriptions
  community_yearly:       prices.communityYearly  || cfg.stripePriceCommunityYearly  || 'price_COMMUNITY_YEARLY_ID',
  focused_yearly:         prices.focusedYearly    || cfg.stripePriceFocusedYearly    || 'price_FOCUSED_YEARLY_ID',
  intensive_yearly:       prices.intensiveYearly  || cfg.stripePriceIntensiveYearly  || 'price_INTENSIVE_YEARLY_ID',
  private_yearly:         prices.privateYearly    || cfg.stripePricePrivateYearly    || 'price_PRIVATE_YEARLY_ID',

  // One-time payments (EUR only)
  founding_member:        prices.foundingMember   || cfg.stripePriceFoundingMember   || 'price_FOUNDING_MEMBER_ID',
  oneonone_session:       prices.oneOnOneSession  || cfg.stripePriceOneononeSession  || 'price_ONEONONE_SESSION_ID',
  certificate:            prices.certificate      || cfg.stripePriceCertificate      || 'price_CERTIFICATE_ID',

  // AUD Monthly (regional)
  community_monthly_aud:  aud.communityMonthly || cfg.stripePriceCommunityMonthlyAud || 'price_COMMUNITY_MONTHLY_AUD_ID',
  focused_monthly_aud:    aud.focusedMonthly   || cfg.stripePriceFocusedMonthlyAud   || 'price_FOCUSED_MONTHLY_AUD_ID',
  intensive_monthly_aud:  aud.intensiveMonthly || cfg.stripePriceIntensiveMonthlyAud || 'price_INTENSIVE_MONTHLY_AUD_ID',
  private_monthly_aud:    aud.privateMonthly   || cfg.stripePricePrivateMonthlyAud   || 'price_PRIVATE_MONTHLY_AUD_ID',

  // MAD Monthly (regional)
  community_monthly_mad:  mad.communityMonthly || cfg.stripePriceCommunityMonthlyMad || 'price_COMMUNITY_MONTHLY_MAD_ID',
  focused_monthly_mad:    mad.focusedMonthly   || cfg.stripePriceFocusedMonthlyMad   || 'price_FOCUSED_MONTHLY_MAD_ID',
  intensive_monthly_mad:  mad.intensiveMonthly || cfg.stripePriceIntensiveMonthlyMad || 'price_INTENSIVE_MONTHLY_MAD_ID',
  private_monthly_mad:    mad.privateMonthly   || cfg.stripePricePrivateMonthlyMad   || 'price_PRIVATE_MONTHLY_MAD_ID',
};

// ── Plan display metadata ─────────────────────────────────────
// Amounts are NOT stored here — Stripe (via the price IDs above) is the
// single source of truth. Pages that display prices keep their own copy.
export const PLANS = {
  community: {
    name:           'Community',
    tagline:        '1 session/week · ~35 learners',
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

// ── Session token helper ──────────────────────────────────────

/**
 * Returns the current Supabase access token, or null when signed out.
 * Prefers a client the page exposed on window.SB; otherwise imports the
 * shared app client (window.supabase is the UMD library, not a client).
 * @returns {Promise<string|null>}
 */
async function getAccessToken() {
  try {
    let sb = window.SB;
    if (!sb?.auth?.getSession) {
      ({ supabase: sb } = await import('/js/supabase/config.js'));
    }
    const { data: { session } } = await sb.auth.getSession();
    return session?.access_token || null;
  } catch (err) {
    console.warn('[Alimun] Could not read Supabase session:', err);
    return null;
  }
}

// ── Checkout helper ───────────────────────────────────────────

/**
 * Create a Stripe Checkout session via your backend API
 * and redirect the user to Stripe's hosted checkout page.
 *
 * Requires a signed-in Supabase session: the API derives the customer
 * (email / user id) from the Bearer token, so none of that is sent here.
 * Stripe.js is NOT needed — the API returns a hosted-checkout URL.
 *
 * @param {Object} params
 * @param {string} params.priceId           - Stripe Price ID to charge
 * @param {'subscription'|'payment'} params.mode - Subscription or one-time
 * @param {string} [params.successUrl]      - Override success redirect URL
 * @param {string} [params.cancelUrl]       - Override cancel redirect URL
 * @param {string} [params.cohortId]        - Pass cohort ID as metadata
 * @param {string} [params.customerName]    - Optional display name for the Stripe customer
 */
export async function createCheckout({
  priceId,
  mode = 'subscription',
  successUrl = `${cfg.appUrl || window.location.origin}/student-dashboard.html?checkout=success`,
  cancelUrl  = `${cfg.appUrl || window.location.origin}/signup.html?checkout=cancelled`,
  cohortId   = null,
  customerName = null,
} = {}) {
  try {
    const body = { priceId, mode, successUrl, cancelUrl };
    if (cohortId)      body.cohortId     = cohortId;
    if (customerName)  body.customerName = customerName;

    // Supabase session is mandatory — the API rejects unauthenticated calls.
    const accessToken = await getAccessToken();
    if (!accessToken) {
      throw new Error('Please sign in first');
    }

    const headers = {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${accessToken}`,
    };

    const resp = await fetch('/api/stripe/create-checkout', {
      method:  'POST',
      headers: headers,
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
    const accessToken = await getAccessToken();
    if (!accessToken) {
      throw new Error('Please sign in first');
    }
    const headers = {
      'Content-Type':  'application/json',
      'Authorization': `Bearer ${accessToken}`,
    };

    const resp = await fetch('/api/stripe/billing-portal', {
      method:  'POST',
      headers: headers,
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
