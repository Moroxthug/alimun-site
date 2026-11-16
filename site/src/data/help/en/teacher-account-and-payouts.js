// Checked 2026-11-16 against: js/app/teach-account.js (Settings fields the teacher may change, languages set by Alimun, dashboard language,
// password rules, sign out, delete request via Contact; Payouts: recorded payouts in EUR with status, this month's completed classes and 1:1s,
// counts only, no amount worked out in the dashboard), js/app/data.js (teacherPayouts reads sessions with status completed),
// js/translations.js (app_tst_*, app_st_*, app_tp_*).
// Not stated: pay rates, how a payout is worked out, payment dates or method, contracts and invoices (none confirmed in code or Terms).
export default {
  slug: 'teacher-account-and-payouts',
  section: 'help',
  subject: 'teachers',
  audience: 'teacher',
  updated: '2026-11-16',
  status: 'draft',
  title: 'Where do I change my profile, and where do I see what I have been paid?',
  summary: 'Settings holds your name, location, specialty and the bio students read, plus your password and the dashboard’s language; Payouts shows each payout Alimun has recorded for you and what you have taught this month.',
  body: [
    'Under Settings, “About you” has your name, where you teach from, what you specialise in, the country you live in, and “About you, for students”: a few sentences students read when they choose a class. Press “Save changes” to keep them. Your email is the address you sign in with and is shown but cannot be changed here. The languages you teach are set by Alimun; to change them, write to us.',
    'Settings also lets you choose the dashboard’s language on this device, change your password (at least 8 characters, with a lowercase letter, a capital letter and a number), turn news and offers from Alimun on or off, and sign out. To delete your account, use “Ask us to delete your account”.',
    'Payouts shows this month so far: the classes taught and the 1:1s completed, per class. It shows counts only; your payout is worked out by Alimun at the end of each period. Below, each payout Alimun has recorded for you is listed with its period, the number of classes, the amount in euros and its state: “Paid” with the date, “Being paid”, or “Not paid yet, Alimun is looking into it”.',
    'If you have a question about a payout, press “Contact us” on the Payouts page, or email support@alimun.com.',
  ],
  related: ['teacher-dashboard-at-a-glance', 'apply-to-teach'],
};
