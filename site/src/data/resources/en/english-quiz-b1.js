// Resource: quiz. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-quiz-b1', site: 'en', slug: 'english-quiz-b1', kind: 'quiz', course: 'English', level: 'B1',
  draw: 'parrot', tint: 'mint', published: '2026-10-26',
  title: 'English quick quiz: ten questions at B1',
  metaTitle: 'Free English quiz B1: grammar and vocabulary – Alimun',
  desc: 'A free ten-question English quiz at B1 level: tenses, prepositions and everyday vocabulary, with every answer explained.',
  lead: 'Ten questions on the grammar and words you meet at B1. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'B1 is the level where you can handle most everyday situations: you talk about experiences and plans, and you start to use the present perfect, the past continuous and the first conditional with confidence.',
    'This quiz mixes the points learners most often ask about at this level. Every answer comes with a short explanation, so you learn something even when you get it wrong.',
  ],
  items: [
    { q: 'I have lived in this city ___ 2019.', options: ['for', 'since', 'from', 'during'], a: 1, why: 'Use since with a starting point in time (2019) and for with a length of time (seven years).' },
    { q: 'She ___ dinner when the phone rang.', options: ['cooked', 'was cooking', 'has cooked', 'cooks'], a: 1, why: 'The past continuous describes an action in progress when something else happened.' },
    { q: 'If it rains tomorrow, we ___ at home.', options: ['stay', 'will stay', 'would stay', 'stayed'], a: 1, why: 'First conditional: if + present simple, then will + verb.' },
    { q: 'Have you ever ___ to Canada?', options: ['gone', 'went', 'been', 'go'], a: 2, why: 'For a visit that is over, use been: have you ever been to Canada?' },
    { q: 'I am really looking forward ___ you.', options: ['to see', 'to seeing', 'seeing', 'see'], a: 1, why: 'In look forward to, to is a preposition, so the verb takes -ing.' },
    { q: 'He is good ___ math.', options: ['in', 'on', 'at', 'with'], a: 2, why: 'We say good at something: good at math, good at tennis.' },
    { q: 'We ran out ___ milk, so I went to the shop.', options: ['from', 'of', 'off', 'with'], a: 1, why: 'Run out of means to have none left.' },
    { q: 'This is the ___ film I have ever seen.', options: ['worse', 'baddest', 'worst', 'most bad'], a: 2, why: 'Bad is irregular: bad, worse, the worst.' },
    { q: 'You ___ wear a seatbelt in the car. It is the law.', options: ['must', 'might', 'could', 'would'], a: 0, why: 'Must expresses a strong obligation, such as a rule or a law.' },
    { q: 'Can you ___ the music down, please? I am on the phone.', options: ['put', 'take', 'turn', 'make'], a: 2, why: 'Turn down means to make quieter: turn the music down.' },
  ],
  related: ['de-articles-a1', 'en-reading-a2', 'buddy-quiz'],
};
