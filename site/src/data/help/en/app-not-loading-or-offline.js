// Checked 2026-11-16 against: js/app/shell.js (needsNet and offlineView, sampleNote with Try again), js/app/offline.js (card shown only where the browser supports downloads, download states, "The download stopped", files already on the device kept so trying again carries on, free limit on downloads), js/app/settings.js (offline card still shown when Settings cannot load), docs/APP_PLAN.md (what works offline and what does not), js/translations.js (app_off_*, app_book_error, app_lock_*, app_sample_error).
export default {
  slug: 'app-not-loading-or-offline',
  section: 'support',
  subject: 'dashboard',
  audience: 'student',
  updated: '2026-11-16',
  status: 'draft',
  title: 'Why does the app not load, or only partly work offline?',
  summary: 'Offline, only what you downloaded works, and live classes, the tutor, messages, progress and plans always need a connection.',
  body: [
    'If a page says This needs a connection, that part of Alimun only works online: live classes, the tutor, messages, progress and plans in Settings. It opens again by itself when you are back online.',
    'Only what you downloaded works offline. Go to Settings, then Use Alimun offline, and check that each item says On this device; while you are online, press Download or Download all for anything missing. If a download stops, you see The download stopped. Check your connection and try again; trying again keeps what already arrived and carries on from there.',
    'Without a plan, downloads hold only the free parts, so later units, texts and papers show Comes with a plan offline too.',
    'If you do not see Use Alimun offline in Settings, the browser you are using cannot keep downloads; open your dashboard in another browser.',
    'If a page does not load, you see a message such as The book did not load. Check your connection and try again. If Home says your data could not be loaded, press Try again. If it still does not work, write to us from Support in your dashboard, or email support@alimun.com, and tell us your device and browser.',
  ],
  related: ['install-the-app-and-use-offline', 'progress-or-homework-missing'],
};
