// Resource: quiz. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-quiz-c1', site: 'en', slug: 'english-quiz-c1', kind: 'quiz', course: 'English', level: 'C1',
  draw: 'alien', tint: 'mint', published: '2026-10-26',
  title: 'English quick quiz: ten questions at C1',
  metaTitle: 'Free English quiz C1: grammar and vocabulary – Alimun',
  desc: 'A free ten-question English quiz at C1 level: inversion, cleft sentences, collocations, idioms and words that are easy to confuse, every answer explained.',
  lead: 'Ten questions on the grammar and words you meet at C1. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'At C1 you can use English flexibly for work, study and social life. You understand long, demanding texts, notice implied meaning and express yourself fluently without searching for words. The focus shifts from getting it right to choosing the most precise and natural way to say it.',
    'This quiz checks inversion after negative and conditional openings, cleft sentences for emphasis, advanced collocations, common idioms and words that look alike but mean different things. These points also come up in C1 Advanced and IELTS. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: 'When a sentence starts with a negative word such as never, the subject and auxiliary swap places: never have I seen.' },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['did he arrive', 'he arrived', 'he did arrive', 'arrived he'], a: 0, why: 'After not only at the start of a sentence, use question word order with an auxiliary: not only did he arrive.' },
    { q: '___ I known about the problem, I would have helped.', options: ['If', 'Have', 'Had', 'Should'], a: 2, why: 'Had I known is an inverted third conditional and means the same as if I had known.' },
    { q: '___ I need is a long vacation.', options: ['That', 'What', 'Which', 'It'], a: 1, why: 'A cleft sentence with what puts the focus on the end: what I need is a long vacation.' },
    { q: 'It was Maria ___ found the mistake, not Tom.', options: ['which', 'what', 'who', 'whom'], a: 2, why: 'In an it-cleft about a person who is the subject, use who (or that): it was Maria who found it.' },
    { q: 'The report ___ serious doubts about the project.', options: ['rose', 'arose', 'raised', 'lifted'], a: 2, why: 'Raise takes an object and collocates with doubts, questions and concerns; rise and arise take no object.' },
    { q: 'The decision ___ a storm of protest.', options: ['lit', 'fired', 'burned', 'sparked'], a: 3, why: 'Spark collocates with protest, debate and controversy and means to cause them suddenly.' },
    { q: 'I expected the exam to be hard, but it was a ___.', options: ['cup of tea', 'piece of cake', 'slice of bread', 'bag of tricks'], a: 1, why: 'A piece of cake is an idiom for something very easy.' },
    { q: 'We will have to ___ the bullet and pay for the repairs.', options: ['chew', 'hit', 'take', 'bite'], a: 3, why: 'Bite the bullet means to accept something unpleasant that cannot be avoided.' },
    { q: 'The instructions were so ___ that nobody knew what to do.', options: ['ambivalent', 'ambitious', 'ambiguous', 'amiable'], a: 2, why: 'Ambiguous means open to more than one meaning; ambivalent describes mixed feelings, not texts.' },
  ],
  related: ['en-quiz-b2', 'en-ex-c1', 'en-ex-b2'],
};
