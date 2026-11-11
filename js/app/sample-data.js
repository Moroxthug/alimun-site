/* Alimun app preview: sample data only (no account, no database). Shown when nobody is signed in, or with
   ?sample=1, in the same shape js/app/data.js returns. Names and numbers here are placeholders, never shown as real. */
window.ALIMUN_SAMPLE = function () {
  var now = Date.now(), DAY = 86400000;
  var monday = new Date(); monday.setHours(12, 0, 0, 0);
  var todayIndex = (monday.getDay() + 6) % 7;
  monday = new Date(monday.getTime() - todayIndex * DAY);
  var week = [0, 0, 0, 0, 0, 0, 0];
  for (var i = 0; i < todayIndex; i++) week[i] = 1;
  return {
    sample: true,
    profile: { name: 'Sara Rossi', language: 'German', level: 'B1', tier: 'free', goal: 'relocation' },
    nextClass: { at: new Date(now + 2 * DAY + 150 * 60000).toISOString(), live: false, language: 'German', level: 'B1', teacher: 'Jonas' },
    flashcardsDue: 18,
    homework: [{ id: 'sample', titleKey: 'app_sample_hw', due_date: new Date(now + 3 * DAY).toISOString().slice(0, 10) }],
    streak: { days: Math.max(todayIndex, 1) + 4, week: week, todayIndex: todayIndex, activeToday: false, lastActive: new Date(now - DAY).toISOString(), monday: monday },
    placement: { language: 'German', level: 'B1', topics: ['word-order', 'prepositions', 'separable-verbs'] },
    topics: null,
    /* AI tutor, part 5: the Tutor card; part 5b: the class lesson to go over (the sample class's notes, js/app/classes.js) */
    tutor: { seconds: 3120, fresh: false, next: 'Separable verbs in the Perfekt.', last: { id: 'x1', started_at: new Date(now - 2 * DAY).toISOString(), title: 'Weil and dass', summary: 'You practised word order after weil and dass and wrote three sentences about your job.' } },
    lesson: { id: 'n1', at: new Date(now - 4 * DAY).toISOString(), grammar: 'Nebensätze mit weil und obwohl' }
  };
};
