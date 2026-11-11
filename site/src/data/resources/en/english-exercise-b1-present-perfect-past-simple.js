// Resource: exercise. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-ex-b1', site: 'en', slug: 'english-exercise-b1-present-perfect-past-simple', kind: 'exercise', course: 'English', level: 'B1',
  draw: 'owl', tint: 'coral', published: '2026-10-26',
  title: 'English exercise: present perfect or past simple? (B1)',
  metaTitle: 'Present perfect vs past simple exercise (B1, free) – Alimun',
  desc: 'Twelve free questions for B1 learners of English on the present perfect and the past simple, with time words as clues and every answer explained.',
  lead: 'Choose the present perfect or the past simple in each sentence. You see straight away if you are right, and why.',
  instructions: 'Choose the right tense.',
  about: [
    'Use the past simple for an action that happened at a finished time: yesterday, last Friday, two days ago, in 2019, when I was a child. If the sentence says or clearly means when it happened, the past simple is the right choice, and questions with when also take it: "When did you move here?" It is also the tense for the finished lives of people who have died, as in "Leonardo da Vinci painted the Mona Lisa."',
    'Use the present perfect (have or has + past participle) when the time reaches up to now. It goes with since and for when the situation is still true ("She has lived here since 2020"), with how long questions ("How long have you known her?"), with "This is the first time..." and with periods that are not over yet, such as all my life. A simple test: if you can add a finished time like yesterday, choose the past simple; if the action connects to the present, choose the present perfect.',
  ],
  items: [
    { q: 'We ___ to Japan in 2019.', options: ['have gone', 'went', 'have been'], a: 1, why: 'In 2019 is a finished time, so use the past simple.' },
    { q: 'She ___ in Boston since 2020.', options: ['has lived', 'lived', 'lives'], a: 0, why: 'Since + a starting point shows a situation that continues to now: present perfect.' },
    { q: 'I ___ my keys two days ago.', options: ['have lost', 'lose', 'lost'], a: 2, why: 'Ago points to a finished time, so use the past simple.' },
    { q: 'How long ___ you known Maria?', options: ['did', 'have', 'do'], a: 1, why: 'How long questions about a situation that is still true use the present perfect.' },
    { q: 'This is the first time I ___ sushi.', options: ['ate', 'eat', 'have eaten'], a: 2, why: 'After "This is the first time", English uses the present perfect.' },
    { q: 'When ___ you move to this apartment?', options: ['did', 'have', 'are'], a: 0, why: 'Questions with when ask about a finished time, so they take the past simple.' },
    { q: 'They ___ married for ten years, and they are still very happy.', options: ['were', 'are', 'have been'], a: 2, why: 'For + a length of time that continues to now takes the present perfect.' },
    { q: 'Leonardo da Vinci ___ the Mona Lisa.', options: ['has painted', 'painted', 'paints'], a: 1, why: 'His life is finished, so the action belongs to a finished time: past simple.' },
    { q: 'He ___ for the company since he left college.', options: ['has worked', 'worked', 'works'], a: 0, why: 'Since + a past event, with the job still going on, takes the present perfect.' },
    { q: 'I ___ him last Friday at the party.', options: ['have seen', 'saw', 'see'], a: 1, why: 'Last Friday is a finished time, so use the past simple.' },
    { q: 'I ___ in this town all my life, and I don\'t want to leave.', options: ['lived', 'was living', 'have lived'], a: 2, why: 'All my life is a period that is not over yet, so use the present perfect.' },
    { q: 'What ___ you do last weekend?', options: ['have', 'did', 'do'], a: 1, why: 'Last weekend is a finished time, so the question uses did.' },
  ],
  related: ['en-ex-a2', 'en-ex-b2', 'en-quiz-b1'],
};
