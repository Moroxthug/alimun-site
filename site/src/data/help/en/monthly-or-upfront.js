// Checked 2026-11-16 against: js/translations.js / js/i18n/en.app.js (app_pp_pay_upfront, app_pay_reserve_mo, app_pay_reserve_up, app_pl_per_month, app_pl_per_year), site/src/blocks/tiers/faq.html ("Monthly or upfront?", "Can I stop at any time?"), api/_lib/pricing.js (cadences per product), api/_lib/entitlements.js (startPack: monthly packs are a 3-payment schedule from the room's first day, upfront packs one payment on that day), docs/LAUNCH_PRICING_SPEC.md section 6.
export default {
  slug: 'monthly-or-upfront',
  section: 'help',
  subject: 'plans',
  audience: 'student',
  updated: '2026-11-16',
  status: 'approved',
  title: 'Should I pay for my pack monthly or upfront?',
  summary: 'A level, intensive or exam pack is either three monthly payments or one payment for the 12 weeks that costs a little less, and either way your card is only charged once your room opens.',
  body: [
    'Level packs, the intensive pack and exam packs last 12 weeks. If you pay monthly, the first payment is taken on the day your room opens and then once a month, three payments in all. If you pay upfront, one payment for the whole 12 weeks is taken on the day your room opens, and it costs a little less than the three monthly payments together. The Plans and prices page shows both prices for your country.',
    'A pack paid monthly can be stopped before its next month, and you leave the room then. A pack paid upfront is already paid for the full 12 weeks.',
    'The other products have their own rhythm. The open class is paid monthly until you cancel. The app is paid monthly or yearly until you cancel. Help classes, the trial class and voice practice minutes are paid once, when you buy them.',
  ],
  related: ['plans-and-prices', 'reserve-a-place-in-a-pack', 'cancel-your-plan'],
};
