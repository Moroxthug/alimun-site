/**
 * Tutor time packs (docs/AI_TUTOR_PLAN.md, part 6): minutes bought once through Stripe Checkout, shared by
 * api/stripe.js (checkout and the prices the dashboard shows) and api/webhooks/stripe.js (adding the minutes).
 * The owner creates the prices in Stripe (one-time) and puts their ids in Vercel as STRIPE_PRICE_TUTOR_30 and
 * STRIPE_PRICE_TUTOR_120. The minutes come from the price's metadata `minutes` in Stripe when it is set there,
 * otherwise from the pack below; never from the browser.
 */

const PACKS = [
  { key: 'tutor30', env: 'STRIPE_PRICE_TUTOR_30', minutes: 30 },
  { key: 'tutor120', env: 'STRIPE_PRICE_TUTOR_120', minutes: 120 },
];
const MAX_MINUTES = 6000;

/** The packs whose price is configured, with the price id */
function packs() {
  return PACKS.map((p) => Object.assign({ id: process.env[p.env] || '' }, p)).filter((p) => p.id);
}

function packByPrice(priceId) {
  return packs().find((p) => p.id === priceId) || null;
}

/** Minutes a pack gives: the Stripe price's metadata `minutes` (a whole number up to 6000) or the pack's own */
function minutesOf(pack, price) {
  const m = Number(price && price.metadata && price.metadata.minutes);
  return Number.isInteger(m) && m > 0 && m <= MAX_MINUTES ? m : pack.minutes;
}

module.exports = { packs, packByPrice, minutesOf, MAX_MINUTES };
