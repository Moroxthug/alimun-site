// Checked 2026-11-16 against: site/src/blocks/tiers/faq.html ("Why does the price depend on my country?", "In which currency do I pay?"), site/src/blocks/tiers/plans.html (tax notes), js/translations.js / js/i18n/en.app.js (app_pp_lead, app_pp_tax_in, app_pp_tax_plus, app_pay_card_p, app_pay_quote, app_pay_expired), api/_lib/pricing.js (resolveBand, chooseCurrency), api/pricing.js (display uses the visitor's country or the locked band; quote held 15 minutes), supabase/migrations/202611111300_pricing_engine.sql (set_band: down at most every 90 days), docs/LAUNCH_PRICING_SPEC.md sections 3, 4 and 9.
export default {
  slug: 'price-in-my-country',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'Why does my price depend on my country, and which currency do I pay in?',
  summary: 'Prices follow the cost of living in each country, the country your card was issued in sets your final price, and you see the exact amount before anything is charged.',
  body: [
    'The prices on the Plans and prices page are shown for the country you are in at the moment. At checkout you add your card first, and the country that card was issued in sets your final price and currency. The page then tells you, for example, "Your card is from France, so your price is" followed by the amount, before anything is charged. That price is held for 15 minutes; after that you are asked to add your card again.',
    'You pay in your country\'s currency where we offer it: euros, pounds, Swiss francs, US, Canadian and Australian dollars or Moroccan dirhams. Otherwise you pay in euros or US dollars. Prices include tax, except in the United States and Canada, where sales tax is added at checkout where it applies.',
    'Once you have paid, your price level stays with your account. If you later pay with a card from a country with higher prices, the higher price applies straight away. A card from a country with lower prices changes your price level only after 90 days.',
  ],
  related: ['plans-and-prices', 'founding-price', 'card-declined'],
};
