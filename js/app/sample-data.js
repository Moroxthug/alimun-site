/* Alimun app preview: sample data only (no account, no database). Used by app/preview.html until each
   screen is wired to Supabase in its own step. Names and numbers here are placeholders, never shown as real. */
window.ALIMUN_SAMPLE = {
  student: { firstName: 'Sara', initials: 'SR', plan: 'free' },
  course: { language: 'German', buddy: 'pretzel', level: 'B1', unit: 'Unit 4: Making plans', unitProgress: 0.62 },
  nextClass: { title: 'German B1 group class', teacher: 'Jonas', when: 'Thursday, 18:30', inMinutes: 2 * 24 * 60 + 150 },
  streak: { days: 6, week: [1, 1, 1, 1, 1, 1, 0], todayIndex: 6 },
  today: [
    { title: 'Finish Unit 4, page 3', detail: 'Separable verbs in context, about 10 minutes', art: 'owl', tint: 'sun' },
    { title: 'Review 18 flashcards', detail: 'Words from Tuesday’s class', art: 'ghost', tint: 'coral' },
    { title: 'Say it out loud', detail: 'Three short answers about your weekend', art: 'parrot', tint: 'mint' }
  ],
  focus: 'Your level test pointed to word order after weil and dass, and the dative after mit, bei and nach.'
};
