// Resource: exercise. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-ex-b2', site: 'en', slug: 'english-exercise-b2-conditionals', kind: 'exercise', course: 'English', level: 'B2',
  draw: 'cat', tint: 'lime', published: '2026-10-26',
  title: 'English exercise: conditionals (B2)',
  metaTitle: 'Conditionals exercise for B2 English learners (free) – Alimun',
  desc: 'Twelve free questions for B2 learners of English on zero, first, second, third and mixed conditionals, with an explanation for every answer.',
  lead: 'Choose the right verb form in each if sentence. You see straight away if you are right, and why.',
  instructions: 'Choose the right form.',
  about: [
    'The zero conditional (if + present, present) is for facts and things that always happen: "If you heat ice, it melts." The first conditional (if + present, will + verb) is for real possibilities in the future: "If it rains tomorrow, we will stay home." Unless means if not, so it follows the same pattern. The second conditional (if + past, would + verb) is for situations that are unreal or unlikely now: "If I had more time, I would learn the piano." In formal English, were is used for every person: "If I were you..."',
    'The third conditional (if + past perfect, would have + past participle) is for imagined changes to the past: "If we had left earlier, we would have caught the train." Mixed conditionals combine the two: an unreal past with a present result ("If I had taken that job, I would live in New York now"), or an unreal present with a past result ("If he were more careful, he wouldn\'t have made that mistake"). Look at the time words in each half of the sentence to decide which form fits.',
  ],
  items: [
    { q: 'If you mix red and white paint, you ___ pink.', options: ['would get', 'get', 'got', 'had gotten'], a: 1, why: 'A general fact uses the zero conditional: if + present, present.' },
    { q: 'If it ___ tomorrow, we will cancel the picnic.', options: ['will rain', 'rained', 'rains', 'would rain'], a: 2, why: 'In the first conditional the if clause takes the present simple, even for the future.' },
    { q: 'If I ___ you, I would talk to her.', options: ['were', 'am', 'had been', 'will be'], a: 0, why: 'Second conditional advice uses "If I were you", with were for every person.' },
    { q: 'If she had studied harder, she ___ the exam last month.', options: ['would pass', 'will pass', 'would have passed', 'passed'], a: 2, why: 'An imagined past result in the third conditional takes would have + past participle.' },
    { q: 'If I had taken the job in New York, I ___ there now.', options: ['would live', 'would have lived', 'will live', 'lived'], a: 0, why: 'A mixed conditional: an unreal past condition with a present result (now) takes would + verb.' },
    { q: 'If we ___ the map, we wouldn\'t have gotten lost.', options: ['had checked', 'checked', 'would check', 'have checked'], a: 0, why: 'The if clause of the third conditional takes the past perfect.' },
    { q: 'Unless you hurry, you ___ the bus.', options: ['miss', 'would miss', 'missed', 'will miss'], a: 3, why: 'Unless means if not, and here it follows the first conditional: will + verb.' },
    { q: 'If he ___ more money, he would buy a house.', options: ['would have', 'will have', 'has', 'had'], a: 3, why: 'The second conditional takes the past simple in the if clause.' },
    { q: 'If he were more careful, he ___ that mistake yesterday.', options: ['wouldn\'t make', 'wouldn\'t have made', 'won\'t make', 'didn\'t make'], a: 1, why: 'A mixed conditional: an unreal present condition with a past result takes would have + past participle.' },
    { q: 'If she weren\'t so busy, she ___ us more often.', options: ['visits', 'will visit', 'would visit', 'would have visited'], a: 2, why: 'An unreal present situation uses the second conditional: would + verb.' },
    { q: 'If I hadn\'t eaten so much, I ___ sick now.', options: ['wouldn\'t feel', 'won\'t feel', 'wouldn\'t have felt', 'don\'t feel'], a: 0, why: 'A mixed conditional: a past condition with a present result (now) takes would + verb.' },
    { q: 'What would you do if you ___ the lottery?', options: ['win', 'had won', 'will win', 'won'], a: 3, why: 'An imagined, unlikely situation uses the second conditional: if + past simple.' },
  ],
  related: ['en-ex-b1', 'en-ex-c1', 'en-quiz-b2'],
};
