// Resource: quiz. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-quiz-a1', site: 'en', slug: 'english-quiz-a1', kind: 'quiz', course: 'English', level: 'A1',
  draw: 'parrot', tint: 'sun', published: '2026-10-26',
  title: 'English quick quiz: ten questions at A1',
  metaTitle: 'Free English quiz A1: grammar and vocabulary – Alimun',
  desc: 'A free ten-question English quiz at A1 level: to be, articles, plurals, there is and there are, and everyday words, with every answer explained.',
  lead: 'Ten questions on the first grammar and words you learn in English. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'A1 is the first level of English. You can introduce yourself, say where you are from, talk about your family and your day in simple sentences, and understand short, slow questions about familiar things.',
    'This quiz checks the basics that everything else is built on: the verb to be, a and an, plural nouns, there is and there are, simple prepositions and common everyday words. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'She ___ a teacher.', options: ['am', 'is', 'are', 'be'], a: 1, why: 'With he, she and it, the verb to be is is: she is a teacher.' },
    { q: 'My brother has ___ old car.', options: ['a', 'any', 'many', 'an'], a: 3, why: 'Use an before a vowel sound: an old car, an apple.' },
    { q: 'I have two ___.', options: ['child', 'childs', 'children', 'childrens'], a: 2, why: 'Child has an irregular plural: one child, two children.' },
    { q: '___ a park near my house.', options: ['There is', 'There are', 'It have', 'It are'], a: 0, why: 'Use there is with one thing (a park) and there are with more than one.' },
    { q: 'My birthday is ___ May.', options: ['on', 'in', 'at', 'to'], a: 1, why: 'Use in with months: in May, in July.' },
    { q: 'My keys are ___ my bag.', options: ['in', 'at', 'of', 'to'], a: 0, why: 'Use in for something inside a container: in my bag, in the box.' },
    { q: 'You eat soup with a ___.', options: ['knife', 'plate', 'spoon', 'glass'], a: 2, why: 'A spoon is the thing you use to eat soup.' },
    { q: '___ you like coffee?', options: ['Are', 'Is', 'Does', 'Do'], a: 3, why: 'Questions with like use do: do you like coffee? With he, she and it, use does.' },
    { q: 'He ___ have a car.', options: ["don't", "doesn't", "isn't", 'not'], a: 1, why: 'In the negative, use does not (doesn\'t) with he, she and it: he doesn\'t have a car.' },
    { q: 'The opposite of big is ___.', options: ['tall', 'long', 'old', 'small'], a: 3, why: 'Big and small are opposites: a big house, a small house.' },
  ],
  related: ['en-quiz-a2', 'en-ex-a1', 'en-quiz-b1'],
};
