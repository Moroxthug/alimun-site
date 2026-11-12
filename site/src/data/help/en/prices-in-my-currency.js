// Sources checked (internal, never shown): api/pricing.js (display, quote), api/_lib/pricing.js (resolveBand, chooseCurrency, QUOTE_MINUTES), supabase/migrations/202611111300_pricing_engine.sql set_band (90 days), js/app/plans.js, js/translations.js app_pp_lead, app_pp_tax_in, app_pp_tax_plus, app_pay_card_p, app_pay_quote, app_pay_expired, tiers2_faq_a3, tiers2_faq_a4
export default {
  slug: 'prices-in-my-currency',
  lang: 'en',
  kind: 'answer',
  subject: 'plans',
  audience: 'student',
  title: 'Why does my price depend on my country, and which currency do I pay in?',
  summary: "Prices are shown for the country you are in, the country your card was issued in sets the final price and currency, and you see it before anything is charged.",
  words: ['currency', 'price in my country', 'local price', 'euros', 'dirhams', 'dollars', 'pounds', 'tax', 'VAT', 'sales tax', 'different price', 'card country'],
  updated: '2026-11-12',
  body: [
    { p: "Prices follow the cost of living in each country. **Plans and prices** shows them for the country you are in now, but the country your card was issued in sets your final price. After you add your card, the checkout tells you which country your card is from and your exact price, before anything is charged. That price is held for 15 minutes; after that, add your card again." },
    { p: "You pay in your country's currency where we offer it: euros, pounds, Swiss francs, US, Canadian and Australian dollars or Moroccan dirhams. Otherwise you pay in euros or US dollars. Prices include tax, except in the United States and Canada, where sales tax is added at checkout." },
    { p: "After your first payment, your price level is kept on your account. Paying with a card from a country with higher prices moves it up at once; a card from a country with lower prices moves it down only after 90 days." }
  ],
  related: ['payment-methods', 'choosing-a-plan', 'founding-price'],
  missing: [
    "Whether a learner's bank adds a foreign-currency fee is outside Alimun's code and is not mentioned.",
    "The list of currencies is taken from the public FAQ (tiers2_faq_a4); the price book may hold more or fewer by the time this is published."
  ]
};
