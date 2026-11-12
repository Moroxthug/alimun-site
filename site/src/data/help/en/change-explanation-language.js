// Sources checked (internal, never shown): js/app/settings.js (Dashboard language, stored in this browser as alimun-lang),
// js/app/reader.js (explanation switch, mine or target, stored as alimun-book-explain; Moroccan French uses French books),
// js/app/library.js (explanations in the student's language), api/_lib/tutor-brain.js (explainIn: dashboard language up to B1),
// js/translations.js app_st_ui_h, app_st_ui_p, app_book_explain, app_st_course, app_st_course_p.
export default {
  slug: 'change-explanation-language',
  lang: 'en',
  kind: 'answer',
  subject: 'learning',
  audience: 'student',
  title: 'How do I change the language of the dashboard and the explanations?',
  summary: 'Choose the Dashboard language in Settings for buttons and explanations on this device, and use the Explanations switch in the book to read explanations in the language you are learning.',
  words: ['change language', 'dashboard language', 'interface language', 'explanations language', 'explain in my language', 'translate', 'wrong language', 'language of buttons'],
  updated: '2026-11-12',
  body: [
    { p: 'Open **Settings** and find **Dashboard language**. It sets the language of the buttons and explanations in your dashboard, on this device. The page reloads in the language you pick. Because the choice belongs to the device, a new phone or browser may start in another language until you choose again.' },
    { p: 'In your course book, explanations are in your dashboard language, while example sentences, exercises and texts are in the language you are learning. If you would rather read the explanations in the language you are learning too, use the **Explanations** switch at the top of the book, a unit or a lesson. That choice is also remembered in this browser. The library\'s explanations follow your dashboard language as well.' },
    { p: 'The tutor speaks mostly in the language you are learning. At the lower levels it explains grammar in your dashboard language when that helps; at higher levels it explains in the language you are learning unless you ask for your own.' },
    { p: 'The language you are learning is a different setting: it is **Language you are learning** in Settings, with your **Level**, and changing it changes your book, practice and library.' }
  ],
  related: ['dashboard-language-and-time-zone', 'using-the-book', 'tests-and-level', 'using-the-tutor'],
  missing: [
    'Books exist with explanations in eight languages (en, es, fr, de, pt, zh, ar, it); Moroccan French uses French explanations and any other dashboard language falls back to English. Not mentioned in the text; confirm if it should be.'
  ]
};
