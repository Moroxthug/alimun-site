// Checked 2026-11-16 against: site/src/blocks/legal/gdpr.html (last updated 7 Nov 2026: section 2 data collected, section 4 AI processing, section 5 sharing, section 7 retention, section 10 rights), docs/GROWTH_PLAN.md (steps 2 and 3: consent and activity), supabase/migrations/202610262200_tutor_sessions.sql (tutor conversations 90 days).
export default {
  slug: 'what-data-does-alimun-keep',
  section: 'help',
  subject: 'account',
  audience: 'all',
  updated: '2026-11-16',
  status: 'approved',
  title: "What data does Alimun keep about me, and for how long?",
  summary: "We keep what we need to run your account and your learning, for as long as your account is open, and the Privacy page lists everything and how long it is kept.",
  body: [
    "We keep your account details (name, email address, the language you learn or teach, your level and your preferences, your country and whether you confirmed you are 16 or older), your learning (test results, classes, attendance, homework, scores, feedback, flashcards and practice), your plan and payments, and messages you send us. Card numbers are entered on Stripe's pages; we never store them. We also record which parts of your dashboard you open and what you do there, but for messages we record only that you sent one, not what it said. Alimun does not record live classes.",
    "Your account, profile and learning data are kept while your account is open and deleted or anonymised within 90 days after you close it. Tutor conversations are kept for 90 days. The record of which parts of your dashboard you open is deleted after 24 months, and dashboard notifications after 12 months. Payment and invoice records are kept as long as tax and accounting law requires.",
    "We never sell your personal information. We share it only as needed to run Alimun: your teacher sees your profile, work and progress, and companies that work for us, such as our database host, Stripe for payments, our video and email services and our AI providers, process it on our instructions.",
    "The Privacy page at alimun.com/gdpr lists everything in full, including your rights. For any question about your data, email privacy@alimun.com.",
  ],
  related: ['download-or-delete-my-data', 'cookies-and-my-choices', 'does-the-tutor-keep-my-conversations'],
};
