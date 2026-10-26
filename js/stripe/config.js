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
// Placeholder strings remain only as a dev-time fallback; createCheckout
// refuses to send them.
//
// Values are resolved LAZILY (getters): pages fill window.ALIMUN_CONFIG
// asynchronously, so reading it once at import time could freeze the
// placeholders for the whole page load.

const getCfg = () => window.ALIMUN_CONFIG || {};
const PLACEHOLDER_PRICE_RE = /^price_[A-Z_]+_ID$/;

function priceGetter(key, legacyKey, placeholder, region) {
  return () => {
    const c = getCfg();
    const prices = c.prices || {};
    const src = region ? ((prices.regional || {})[region] || {}) : prices;
    return src[key] || c[legacyKey] || placeholder;
  };
}

const PRICE_SOURCES = {
  // EUR Monthly subscriptions
  community_monthly:      priceGetter('communityMonthly', 'stripePriceCommunityMonthly', 'price_COMMUNITY_MONTHLY_ID'),
  focused_monthly:        priceGetter('focusedMonthly',   'stripePriceFocusedMonthly',   'price_FOCUSED_MONTHLY_ID'),
  intensive_monthly:      priceGetter('intensiveMonthly', 'stripePriceIntensiveMonthly', 'price_INTENSIVE_MONTHLY_ID'),
  private_monthly:        priceGetter('privateMonthly',   'stripePricePrivateMonthly',   'price_PRIVATE_MONTHLY_ID'),

  // EUR Yearly subscriptions
  community_yearly:       priceGetter('communityYearly',  'stripePriceCommunityYearly',  'price_COMMUNITY_YEARLY_ID'),
  focused_yearly:         priceGetter('focusedYearly',    'stripePriceFocusedYearly',    'price_FOCUSED_YEARLY_ID'),
  intensive_yearly:       priceGetter('intensiveYearly',  'stripePriceIntensiveYearly',  'price_INTENSIVE_YEARLY_ID'),
  private_yearly:         priceGetter('privateYearly',    'stripePricePrivateYearly',    'price_PRIVATE_YEARLY_ID'),

  // One-time payments (EUR only)
  oneonone_session:       priceGetter('oneOnOneSession',  'stripePriceOneononeSession',  'price_ONEONONE_SESSION_ID'),
  certificate:            priceGetter('certificate',      'stripePriceCertificate',      'price_CERTIFICATE_ID'),

  // AUD Monthly (regional)
  community_monthly_aud:  priceGetter('communityMonthly', 'stripePriceCommunityMonthlyAud', 'price_COMMUNITY_MONTHLY_AUD_ID', 'aud'),
  focused_monthly_aud:    priceGetter('focusedMonthly',   'stripePriceFocusedMonthlyAud',   'price_FOCUSED_MONTHLY_AUD_ID',   'aud'),
  intensive_monthly_aud:  priceGetter('intensiveMonthly', 'stripePriceIntensiveMonthlyAud', 'price_INTENSIVE_MONTHLY_AUD_ID', 'aud'),
  private_monthly_aud:    priceGetter('privateMonthly',   'stripePricePrivateMonthlyAud',   'price_PRIVATE_MONTHLY_AUD_ID',   'aud'),

  // MAD Monthly (regional)
  community_monthly_mad:  priceGetter('communityMonthly', 'stripePriceCommunityMonthlyMad', 'price_COMMUNITY_MONTHLY_MAD_ID', 'mad'),
  focused_monthly_mad:    priceGetter('focusedMonthly',   'stripePriceFocusedMonthlyMad',   'price_FOCUSED_MONTHLY_MAD_ID',   'mad'),
  intensive_monthly_mad:  priceGetter('intensiveMonthly', 'stripePriceIntensiveMonthlyMad', 'price_INTENSIVE_MONTHLY_MAD_ID', 'mad'),
  private_monthly_mad:    priceGetter('privateMonthly',   'stripePricePrivateMonthlyMad',   'price_PRIVATE_MONTHLY_MAD_ID',   'mad'),
};

export const PRICE_IDS = {};
for (const [k, get] of Object.entries(PRICE_SOURCES)) {
  Object.defineProperty(PRICE_IDS, k, { get, enumerable: true });
}

/** Lazy { monthly, yearly, monthly_aud, monthly_mad } price map for one tier. */
function planPriceIds(tier) {
  const ids = {};
  for (const [field, key] of [['monthly', `${tier}_monthly`], ['yearly', `${tier}_yearly`],
                              ['monthly_aud', `${tier}_monthly_aud`], ['monthly_mad', `${tier}_monthly_mad`]]) {
    Object.defineProperty(ids, field, { get: PRICE_SOURCES[key], enumerable: true });
  }
  return ids;
}

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
    priceId: planPriceIds('community'),
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
    priceId: planPriceIds('focused'),
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
    priceId: planPriceIds('intensive'),
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
    priceId: planPriceIds('private'),
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

  // Unset regional prices fall back to the base price (its currency_options
  // cover AUD/MAD; the server picks the currency).
  const regional = plan.priceId[`monthly_${cur}`];
  return (regional && !PLACEHOLDER_PRICE_RE.test(regional)) ? regional : plan.priceId.monthly;
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

  const publishableKey = getCfg().stripePublishableKey;
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
  successUrl = `${getCfg().appUrl || window.location.origin}/app?checkout=success`,
  cancelUrl  = `${getCfg().appUrl || window.location.origin}/signup.html?checkout=cancelled`,
  cohortId   = null,
  customerName = null,
} = {}) {
  try {
    if (!priceId || PLACEHOLDER_PRICE_RE.test(priceId)) {
      throw new Error('Pricing is still loading or not configured. Please try again in a moment.');
    }
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
      const e = new Error(err.message || err.error || `Checkout API error ${resp.status}`);
      // e.code === 'active_subscription' (with e.portal) means: send the
      // student to the Billing Portal to change plan instead.
      e.code = err.error || null;
      e.portal = !!err.portal;
      e.status = resp.status;
      throw e;
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
  returnUrl = `${getCfg().appUrl || window.location.origin}/app#/settings`
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
      throw new Error(err.message || err.error || `Billing portal API error ${resp.status}`);
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
