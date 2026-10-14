/**
 * ALIMUN — create the live Stripe products/prices and print the Vercel env vars.
 *
 * Run from alimun-site/ with the LIVE secret key of the Alimun.com account:
 *
 *   PowerShell:  $env:STRIPE_SECRET_KEY="sk_live_..."; node supabase/setup-stripe-prices.js
 *   bash:        STRIPE_SECRET_KEY=sk_live_... node supabase/setup-stripe-prices.js
 *
 * Idempotent: prices are found by lookup_key; existing ones get their
 * currency_options refreshed, so editing the amounts below and re-running
 * updates CAD/USD/AUD/MAD without creating new price IDs.
 *
 * Currencies: EUR is the base; USD, CAD, AUD and MAD are currency_options on the
 * SAME price id (checkout picks one via the `currency` param, see api/stripe.js).
 * Non-EUR amounts are approximate conversions rounded to clean numbers — edit AMOUNTS.
 * Amounts are in minor units (cents; MAD has 2 decimals in Stripe).
 *
 * NOT created here (manual in the Stripe dashboard until the owner sets the
 * amounts): STRIPE_PRICE_ONEONONE_SESSION and STRIPE_PRICE_CERTIFICATE, both
 * one-time EUR prices with the same USD/CAD/AUD/MAD currency_options. The
 * separate STRIPE_PRICE_*_MONTHLY_AUD / _MAD env vars are optional: the base
 * prices already carry AUD and MAD currency_options.
 */
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || '');

if (!/^sk_live_/.test(process.env.STRIPE_SECRET_KEY || '')) {
  console.error('Set STRIPE_SECRET_KEY to the live secret key (sk_live_...).');
  process.exit(1);
}

// [eur, usd, cad, aud, mad] in whole currency units
const AMOUNTS = {
  COMMUNITY: { name: 'Alimun Community', month: [24, 26, 39, 40, 260],     year: [240, 260, 390, 400, 2600] },
  FOCUSED:   { name: 'Alimun Focused',   month: [59, 65, 95, 98, 640],      year: [590, 650, 950, 980, 6400] },
  INTENSIVE: { name: 'Alimun Intensive', month: [109, 119, 175, 180, 1180], year: [1090, 1190, 1750, 1800, 11800] },
  PRIVATE:   { name: 'Alimun 1 on 1',    month: [269, 289, 429, 445, 2910], year: [2690, 2890, 4290, 4450, 29100] },
};
const FOUNDING = [29, 32, 45, 48, 310];

const opts = ([, usd, cad, aud, mad]) => ({
  usd: { unit_amount: usd * 100 },
  cad: { unit_amount: cad * 100 },
  aud: { unit_amount: aud * 100 },
  mad: { unit_amount: mad * 100 },
});

async function price(lookupKey, productName, amounts, recurring) {
  const found = await stripe.prices.list({ lookup_keys: [lookupKey], active: true, limit: 1 });
  if (found.data[0]) {
    await stripe.prices.update(found.data[0].id, { currency_options: opts(amounts) });
    return found.data[0].id;
  }
  const created = await stripe.prices.create({
    currency: 'eur',
    unit_amount: amounts[0] * 100,
    currency_options: opts(amounts),
    lookup_key: lookupKey,
    // An archived price may still hold this lookup_key; move it over.
    transfer_lookup_key: true,
    ...(recurring ? { recurring: { interval: recurring } } : {}),
    product_data: { name: productName },
  });
  return created.id;
}

(async () => {
  const lines = [];
  for (const [key, t] of Object.entries(AMOUNTS)) {
    lines.push(`STRIPE_PRICE_${key}_MONTHLY=${await price(`alimun_${key.toLowerCase()}_monthly_eur`, t.name, t.month, 'month')}`);
    lines.push(`STRIPE_PRICE_${key}_YEARLY=${await price(`alimun_${key.toLowerCase()}_yearly_eur`, t.name, t.year, 'year')}`);
  }
  lines.push(`STRIPE_PRICE_FOUNDING_MEMBER=${await price('alimun_founding_member_eur', 'Alimun Founding Member', FOUNDING, null)}`);
  console.log('\n# Vercel (Production) — same IDs as before if you already pasted them:\n' + lines.join('\n') + '\n');
})().catch((e) => { console.error(e.message); process.exit(1); });
