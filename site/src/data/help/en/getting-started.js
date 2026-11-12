// Sources checked (internal, never shown): site/src/pages/level-test.astro and lt_* / au_* keys in js/translations.js,
// welcome.html, js/app/shell.js (Home: next class card, plan card, room offer), js/app/settings.js (plan card, time zone),
// js/app/plans.js and app_pp_* / app_pay_* keys (Plans and prices, room picker, card first), api/_lib/rooms.js,
// docs/PRICING_ENGINE_SPEC.md §13 steps 4-9, docs/PROGRESS.md 10-12 Nov 2026, js/app/classes.js.
export default {
  slug: 'getting-started',
  lang: 'en',
  kind: 'guide',
  subject: 'start',
  audience: 'student',
  title: 'Getting started: from sign-up to your first class',
  summary: 'How to create your account, find your level, choose a plan and a room, and find your way around the dashboard before your first live class.',
  words: ['getting started', 'sign up', 'create account', 'new student', 'first steps', 'level test', 'how does it work', 'start learning', 'choose a plan', 'book a class'],
  updated: '2026-11-12',
  body: [
    { h: 'Create your account' },
    { p: 'Press **Get started** on the website. It opens the free level test: 20 questions on grammar, vocabulary and reading that adapt to your answers and take about 15 minutes. At the end you see your estimated level and can press **Create your free account** to keep the result.' },
    { p: 'If you already know your level, choose **Skip the test and choose it when you sign up**. The sign-up form then asks for the language you are learning and your level, and you can take the level test later from your dashboard.' },
    { p: 'After you sign up we send you a confirmation link by email. Open it to confirm your address. If nothing arrives after a few minutes, check your spam folder.' },
    { h: 'Tell us your goal' },
    { p: 'The first page after you confirm your email asks what you want to achieve (for example moving abroad, work, an exam or travel) and by when. Your practice, and later your classes, are built around it. You can change both later in **Settings**.' },
    { h: 'Choose a plan and a room' },
    { p: 'Your account starts on the free plan. Live classes with a teacher come with a paid plan. Open **Settings** and press **See the plans**, or use **See the plans** on Home, to reach **Plans and prices**. It lists what is on sale today with prices for the country you are in.' },
    { p: 'Live classes take place in rooms. Each room has its own level, days, time and, for the level and exam packs, a start date. When you choose a pack, an open class, a trial class or a help class, you first pick a room or a class date, with the real places left, and press **Choose**. A pack can also be reserved without choosing a room, for the next start date.' },
    { p: 'Payment starts with your card. Your price depends on the country your card was issued in, and you see the exact price before anything is charged. For a level or exam pack you press **Reserve my seat**: your card is saved and nothing is charged until the day your room opens.' },
    { shot: '#/settings/plans', alt: 'The Plans and prices page with the products on sale' },
    { h: 'Your dashboard' },
    { p: '**Home** shows your next class with its day and time, **Today’s plan** with the practice waiting for you, and your progress. **Classes** has your class times, a calendar, your teacher’s notes after each class and the words from class. **Messages** is where you talk with your class and your teacher once you are in a class.' },
    { p: 'Class times are shown in the time zone saved in **Settings**. Check it before your first class so the times match your clock.' },
    { shot: '#/home', alt: 'The dashboard Home page with the next class card' },
    { h: 'Your first class' },
    { p: 'When your class is scheduled it appears on Home and in Classes. The **Join** button switches on 15 minutes before the start. Read the guide to your first live class to know what to expect before, during and after it.' }
  ],
  related: ['choosing-a-plan', 'your-first-live-class', 'rooms-and-start-dates', 'class-schedule-and-time-zone', 'trial-and-help-class', 'join-live-class'],
  missing: [
    'Which six languages the level test covers is not named here; live classes (rooms) exist only for English and German, and the guide does not say so in case more open.',
    'Whether students with a self-reported level are placed in rooms differently from those who took the test is not visible in the code.',
    'What the free plan includes exactly (free tutor minutes, which course book units) is left out; the dashboard text only says live classes, mock tests and full course books need a paid plan.',
    'Exact wording of the Get started button on the public site and of the email confirmation page was not re-checked on the Astro pages.',
    'When a pack learner first sees the class in Classes: the room job enrols pack learners on the room start day, open-class buyers at once; the guide only says "when your class is scheduled".'
  ]
};
