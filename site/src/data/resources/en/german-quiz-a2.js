// Resource: quiz. German items stay German; explanations are in the reader's language.
export default {
  key: 'de-quiz-a2', site: 'en', slug: 'german-quiz-a2', kind: 'quiz', course: 'German', level: 'A2',
  draw: 'mug', tint: 'coral', published: '2026-10-26',
  title: 'German quick quiz: ten questions at A2',
  metaTitle: 'Free German quiz A2: grammar and vocabulary – Alimun',
  desc: 'A free ten-question German quiz at A2 level: the Perfekt, modal verbs, the dative, separable verbs and comparatives, with every answer explained.',
  lead: 'Ten questions on the grammar you meet at A2. Pick an answer to see why it is right.',
  instructions: 'Choose the best answer.',
  about: [
    'A2 is the level where you can talk about what you did last weekend, describe your daily routine, say what you can, must or want to do, and compare things in simple sentences.',
    'This quiz checks the points that trip up most learners at this level: haben or sein in the Perfekt, past participles, modal verbs, dative forms after verbs and prepositions, separable verbs and comparatives. Every answer comes with a short explanation.',
  ],
  items: [
    { q: 'Gestern ___ ich ins Kino gegangen.', options: ['habe', 'bin', 'war', 'hatte'], a: 1, why: 'Verbs of movement from one place to another, such as gehen, form the Perfekt with sein: ich bin gegangen.' },
    { q: 'Wir haben den ganzen Abend Pizza ___.', options: ['gegessen', 'geessen', 'gegesst', 'essen'], a: 0, why: 'Essen is irregular, and its past participle is gegessen.' },
    { q: 'Hier ___ man nicht rauchen. Das ist verboten.', options: ['muss', 'will', 'darf', 'möchte'], a: 2, why: 'Nicht dürfen expresses that something is not allowed.' },
    { q: 'Ich helfe ___ Mutter in der Küche.', options: ['meine', 'meiner', 'meinen', 'meinem'], a: 1, why: 'Helfen takes the dative, and feminine mein becomes meiner in the dative.' },
    { q: 'Wann stehst du morgens ___?', options: ['an', 'auf', 'aus', 'ein'], a: 1, why: 'Aufstehen (to get up) is separable, so auf goes to the end of the sentence.' },
    { q: 'Mein Bruder ist drei Jahre ___ als ich.', options: ['am ältesten', 'alt', 'älter', 'ältere'], a: 2, why: 'Comparisons with als use the comparative, and alt takes an umlaut: alt, älter, am ältesten.' },
    { q: 'Ich trinke lieber Tee ___ Kaffee.', options: ['als', 'wie', 'dann', 'wenn'], a: 0, why: 'After a comparative such as lieber, German uses als (than).' },
    { q: 'Das Buch liegt auf ___ Tisch.', options: ['der', 'den', 'dem', 'des'], a: 2, why: 'Liegen describes a position, so auf takes the dative: auf dem Tisch.' },
    { q: 'Hast du schon ___?', options: ['geeinkauft', 'einkaufen', 'eingekaufen', 'eingekauft'], a: 3, why: 'In separable verbs, ge- goes between the prefix and the stem: einkaufen, eingekauft.' },
    { q: 'Gefällt ___ das Kleid?', options: ['dich', 'du', 'dein', 'dir'], a: 3, why: 'Gefallen takes the dative, so du becomes dir: das Kleid gefällt dir.' },
  ],
  related: ['de-quiz-a1', 'de-quiz-b1', 'de-ex-a2'],
};
