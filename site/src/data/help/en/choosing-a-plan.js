// Sources checked (internal, never shown): js/app/plans.js (ORDER, card(), picker), api/_lib/pricing.js PRODUCTS, api/_lib/entitlements.js (moveUpCredit), js/translations.js app_pp_*, app_pay_*, app_home_moveup_p, tiers2_*, docs/PROGRESS.md 12 Nov 2026 (steps 4, 5, 7: what is on sale), docs/LAUNCH_PRICING_SPEC.md sections 1 to 3
export default {
  slug: 'choosing-a-plan',
  lang: 'en',
  kind: 'guide',
  subject: 'plans',
  audience: 'student',
  title: 'Choosing a plan: what you can buy and how the options differ',
  summary: "The open class, level pack, exam pack, the app, voice practice minutes, the trial class and the help class, and which one suits what you want to do.",
  words: ['which plan', 'plans', 'prices', 'what can I buy', 'open class', 'level pack', 'exam pack', 'the app', 'trial class', 'help class', 'compare plans', 'subscription'],
  updated: '2026-11-12',
  body: [
    { h: 'Where to see what is on sale' },
    { p: "Open **Settings** and choose **See the plans** to reach **Plans and prices**. The page lists only what you can buy today, with prices for the country you are in now. The country your card was issued in sets your final price, and the checkout shows it before anything is charged." },
    { shot: '#/settings/plans', alt: 'The Plans and prices page with the products on sale' },
    { h: 'Live classes with a teacher' },
    { p: "The **open class** is one live class a week in a room of up to 20 people at your level, with the app included. It is paid monthly and you can stop it whenever you like." },
    { p: "The **level pack** is 12 weeks of three live classes a week with your teacher in a fixed room, with the app included: the same teacher and the same people from the first class to the last. You pay it in three monthly payments, or once for the 12 weeks, which costs a little less. You reserve your place with your card, and nothing is charged until your room opens." },
    { p: "The **exam pack** works like a level pack and prepares you for IELTS in English, or for Goethe or telc B1 in German, with three mock exams marked by your teacher and the app included. Alimun prepares you for the exam; the certificate is issued by the exam board." },
    { p: "Open classes and packs are offered in English and German. For each of them you first choose a time: every room shows its start date, days, time and the real number of places left." },
    { h: 'Practising on your own' },
    { p: "**The app** on its own gives you every unit, the full course book, exercises and 60 minutes of voice practice with the tutor a month. It is paid monthly or yearly." },
    { p: "**Voice practice minutes** are extra minutes with the tutor, bought once in a pack of 30 or 120 minutes and yours for 12 months. You can buy them on Plans and prices, or from the Tutor when your time is used up." },
    { h: 'Trying a class, and extra help' },
    { p: "The **trial class** is one live class in a room that is already running, and it can be taken once per person. The **help class** is a 30-minute live class in a small group on the week's units. For both, you choose a class date before you pay." },
    { h: 'Which one to choose' },
    { p: "If you want to keep speaking every week without a long commitment, the open class is the lightest way to have a teacher. If you want to work through a level with the same teacher and group, choose a level pack, and if you have an exam ahead, the exam pack. If you mainly want to practise on your own, the app is enough." },
    { p: "You can start with an open class and move up later. When your pack starts, your open class ends and the unused part of its month comes off the pack's first payment." }
  ],
  related: ['reserved-seat-card-saved', 'rooms-and-start-dates', 'trial-and-help-class', 'prices-in-my-currency', 'founding-price', 'minutes-packs'],
  missing: [
    "The trial class being credited to the first month (LAUNCH_PRICING_SPEC section 3) was not found in the checkout code, so it is left out.",
    "The spec says voice-minute packs are for subscribers only; the code sells them to any signed-in learner, so no restriction is stated.",
    "Exam pack wording in the spec (you take the exam at an official test centre; the exam fee is not included) is not in the dashboard text, so only the dashboard sentence is used.",
    "Company rooms are invoiced and not sold in the dashboard; not covered here.",
    "The App Store and Google Play are not mentioned: no store app is linked anywhere and the RevenueCat webhook still needs the owner's setup (docs/STRIPE_RADAR_RULES.md)."
  ]
};
