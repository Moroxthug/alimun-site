// Resource: exercise. German items stay German; instructions and explanations are in the reader's language.
export default {
  key: 'de-ex-a2', site: 'en', slug: 'german-exercise-a2-perfekt-haben-sein', kind: 'exercise', course: 'German', level: 'A2',
  draw: 'pretzel', tint: 'mint', published: '2026-10-26',
  title: 'German exercise: Perfekt with haben or sein (A2)',
  metaTitle: 'German Perfekt exercise: haben or sein? (A2, free) – Alimun',
  desc: 'Twelve free questions on the German Perfekt for A2 learners: choose haben or sein, with instant feedback and an explanation for every answer.',
  lead: 'Choose the right form of haben or sein for each sentence in the Perfekt. You see straight away if you are right, and why.',
  instructions: 'Choose the right helping verb.',
  about: [
    'The Perfekt is the past tense Germans use most in conversation. It has two parts: a form of haben or sein in second position, and the past participle at the end of the clause, as in "Ich habe Pizza gegessen" or "Ich bin nach Hause gegangen".',
    'Most verbs use haben, including every verb that takes a direct object. Sein is used with verbs of movement from one place to another (gehen, fahren, fliegen, kommen), verbs of a change of state (aufstehen, einschlafen, wachsen, sterben), and the verbs sein, bleiben and passieren. If you can ask "where to?" or the subject ends up in a new state, sein is usually the answer.',
  ],
  items: [
    { q: 'Ich ___ gestern nach Berlin gefahren.', options: ['habe', 'bin', 'hat'], a: 1, why: 'Fahren to a destination is movement from one place to another, so it takes sein: ich bin gefahren.' },
    { q: 'Wir ___ zum Mittagessen eine Pizza gegessen.', options: ['haben', 'sind', 'hat'], a: 0, why: 'Essen takes a direct object (eine Pizza), so it uses haben: wir haben gegessen.' },
    { q: 'Anna ___ heute um sieben Uhr aufgestanden.', options: ['hat', 'sind', 'ist'], a: 2, why: 'Aufstehen is a change of state, from lying to standing, so it takes sein: sie ist aufgestanden.' },
    { q: 'Was ___ denn passiert?', options: ['hat', 'ist', 'haben'], a: 1, why: 'Passieren always takes sein in the Perfekt: was ist passiert?' },
    { q: 'Mein Opa ___ letztes Jahr gestorben.', options: ['hat', 'haben', 'bist', 'ist'], a: 3, why: 'Sterben is a change of state, so it takes sein: er ist gestorben.' },
    { q: 'Ich ___ am Sonntag sehr lange geschlafen.', options: ['habe', 'bin', 'hat'], a: 0, why: 'Schlafen describes a state that does not change, so it uses haben: ich habe geschlafen.' },
    { q: 'Die Kinder ___ in diesem Jahr schnell gewachsen.', options: ['haben', 'hat', 'sind'], a: 2, why: 'Wachsen (to grow) is a change of state, so it takes sein: sie sind gewachsen.' },
    { q: 'Wie lange ___ ihr in Spanien geblieben?', options: ['seid', 'habt', 'sind'], a: 0, why: 'Bleiben always takes sein, and the form for ihr is seid: ihr seid geblieben.' },
    { q: 'Er ___ den Brief noch nicht gelesen.', options: ['ist', 'hat', 'sind'], a: 1, why: 'Lesen takes a direct object (den Brief), so it uses haben: er hat gelesen.' },
    { q: 'Ich ___ noch nie in Japan gewesen.', options: ['habe', 'hat', 'bin'], a: 2, why: 'Sein itself forms its Perfekt with sein: ich bin gewesen.' },
    { q: 'Wann ___ du Lisa kennengelernt?', options: ['hast', 'bist', 'hat'], a: 0, why: 'Kennenlernen takes a direct object (Lisa), so it uses haben: du hast kennengelernt.' },
    { q: 'Der Zug ___ pünktlich in München angekommen.', options: ['hat', 'haben', 'ist', 'sind'], a: 2, why: 'Ankommen is movement that ends at a place, so it takes sein: der Zug ist angekommen.' },
  ],
  related: ['de-articles-a1', 'de-ex-b1', 'de-quiz-a2'],
};
