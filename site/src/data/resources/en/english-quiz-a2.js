// Resource: quiz. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-quiz-a2', site: 'en', slug: 'english-quiz-a2', kind: 'quiz', course: 'English', level: 'A2',
  draw: 'dog', tint: 'coral', published: '2026-10-26',
  title: 'English quick quiz: ten questions at A2',
  metaTitle: 'Free English quiz A2: grammar and vocabulary – Alimun',
  desc: 'A free ten-question English quiz at A2 level: past simple, comparatives, going to, some and any, and prepositions of time, with every answer explained.',
  lead: 'Ten questions on the grammar and words you meet at A2. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'At A2 you can talk about your past, compare things and make simple plans. You can shop, order food, ask for directions and write short messages about everyday topics.',
    'This quiz checks the points that come up most at this level: the past simple, comparatives, going to for plans and predictions, some and any, countable and uncountable nouns, and prepositions of time. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'We ___ to the beach last weekend.', options: ['go', 'went', 'gone', 'have gone'], a: 1, why: 'Last weekend is a finished time in the past, so use the past simple: went.' },
    { q: 'Did you ___ the email?', options: ['see', 'saw', 'seen', 'seeing'], a: 0, why: 'After did in a question, use the base form of the verb: did you see?' },
    { q: 'My sister is ___ than me.', options: ['more tall', 'tallest', 'tall', 'taller'], a: 3, why: 'Short adjectives add -er to compare two things: tall, taller.' },
    { q: 'This book is ___ than that one.', options: ['the most interesting', 'interestinger', 'more interesting', 'interesting'], a: 2, why: 'Long adjectives use more to compare two things: more interesting than.' },
    { q: 'Look at those dark clouds! It ___ rain.', options: ['is going to', 'will to', 'going to', 'is go to'], a: 0, why: 'Use be going to for a prediction based on what you can see now.' },
    { q: 'There isn\'t ___ bread left.', options: ['some', 'any', 'many', 'a'], a: 1, why: 'Use any in negative sentences; bread is uncountable, so many and a are wrong.' },
    { q: 'How ___ water do you drink every day?', options: ['much', 'many', 'few', 'lot'], a: 0, why: 'Water is uncountable, so use how much; how many is for countable nouns.' },
    { q: 'She gave me some good ___.', options: ['advices', 'an advice', 'advise', 'advice'], a: 3, why: 'Advice is an uncountable noun with no plural; advise is the verb.' },
    { q: 'The meeting is ___ Monday morning.', options: ['in', 'at', 'to', 'on'], a: 3, why: 'Use on with days, including parts of a named day: on Monday morning.' },
    { q: 'I started this job three years ___.', options: ['ago', 'since', 'for', 'last'], a: 0, why: 'Ago comes after a length of time to say when something happened in the past.' },
  ],
  related: ['en-quiz-a1', 'en-quiz-b1', 'en-ex-a2'],
};
