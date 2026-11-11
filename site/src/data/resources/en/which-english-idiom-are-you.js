// Resource: fun. Each option votes for a drawing from the cast; the result is an English idiom that fits. Idiom meanings checked against Cambridge Dictionary (night owl, life and soul of the party, go the extra mile, on cloud nine, as cool as a cucumber).
export default {
  key: 'english-idiom-quiz', site: 'en', slug: 'which-english-idiom-are-you', kind: 'fun', course: 'English', level: 'Just for fun',
  draw: 'parrot', tint: 'coral', published: '2026-11-01',
  title: 'Which English idiom are you?',
  metaTitle: 'Which English idiom are you? A fun quiz for learners – Alimun',
  desc: 'A free three-question quiz: find the English idiom that matches your personality, from a night owl to on cloud nine, then share it with a friend.',
  lead: 'Three quick questions, one English idiom that sums you up. Share it with a friend and learn what it means.',
  about: [
    'English is full of idioms, phrases whose meaning you cannot guess from the words alone. Native speakers use them all the time, and one of them probably describes you better than you think.',
    'This quiz is just for fun, but every idiom in it is real and common, so you will finish with one new expression you can use in your next conversation.',
  ],
  youAre: 'Your English idiom: {}',
  buddy: {
    questions: [
      ['It is Saturday night. You...', [['Start a new project at midnight', 'owl'], ['Dance in the middle of the room', 'parrot'], ['Help a friend carry boxes to their new flat', 'dog'], ['Stay calm while everyone else argues about the plan', 'cat']]],
      ['A friend has a big deadline tomorrow. You...', [['Stay up late working with them', 'owl'], ['Bring snacks and stay until it is done', 'dog'], ['Tell them it will be fine and make a clear plan', 'cat'], ['Plan the celebration for when it is finished', 'sun']]],
      ['Pick a sound:', [['A quiet city at two in the morning', 'owl'], ['Laughter across a busy party', 'parrot'], ['Your phone ringing with great news', 'sun'], ['Slow waves on a calm sea', 'cat']]],
    ],
    results: {
      owl: ['a night owl', 'Someone who prefers to be awake and active at night. Your best ideas arrive when everyone else is asleep.'],
      parrot: ['the life and soul of the party', 'Someone energetic and funny who is at the heart of every social event. When you arrive, the fun starts.'],
      dog: ['go the extra mile', 'To make more effort than anyone expects of you. Your friends know they can always count on you.'],
      sun: ['on cloud nine', 'Extremely happy and excited. Your good mood lights up the whole room.'],
      cat: ['as cool as a cucumber', 'Very calm, especially when that is surprising. Nothing shakes you, even when everyone else panics.'],
    },
  },
  related: ['english-idioms', 'buddy-quiz', 'british-american'],
};
