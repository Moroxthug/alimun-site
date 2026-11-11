// Resource: exercise. English items stay English; explanations are in the reader's language.
export default {
  key: 'en-ex-a1', site: 'en', slug: 'english-exercise-a1-present-simple', kind: 'exercise', course: 'English', level: 'A1',
  draw: 'teacup', tint: 'mint', published: '2026-10-26',
  title: 'English exercise: present simple (A1)',
  metaTitle: 'Present simple exercise for A1 English learners (free) – Alimun',
  desc: 'Twelve free present simple questions for A1 learners of English: am, is, are, do and does, and the -s for he, she and it, with every answer explained.',
  lead: 'Choose the right form of the verb in each sentence. You see straight away if you are right, and why.',
  instructions: 'Choose the right form.',
  about: [
    "The present simple describes habits, routines and facts that are generally true: I work in an office, she drinks tea, water boils at 100 degrees. With the verb be, use am with I, is with he, she and it, and are with you, we and they. With other verbs, add -s for he, she and it (she lives, he works), -es after ch, sh, s, x and o (he watches, she goes), and change a final consonant + y to -ies (the baby cries). Have becomes has.",
    "Questions and negatives with other verbs need a helper: do with I, you, we and they, and does with he, she and it. After does and doesn't, the main verb goes back to its base form, so it is \"Does she live here?\" and \"He doesn't eat meat\", never \"Does she lives\". The verb be does not need this helper: \"Are you tired?\" and \"I am not ready.\"",
  ],
  items: [
    { q: 'She ___ in a big city.', options: ['live', 'lives', 'living'], a: 1, why: 'With he, she and it, add -s to the verb: she lives.' },
    { q: 'They ___ from Brazil.', options: ['is', 'am', 'are'], a: 2, why: 'With they, the verb be is are: they are.' },
    { q: '___ you like coffee?', options: ['Do', 'Does', 'Are'], a: 0, why: 'Questions with you use do + the base verb: Do you like...?' },
    { q: 'My brother ___ eat meat.', options: ["don't", "doesn't", "isn't"], a: 1, why: 'My brother is he, so the negative is doesn\'t + the base verb.' },
    { q: 'I ___ a student.', options: ['is', 'are', 'am'], a: 2, why: 'With I, the verb be is always am: I am.' },
    { q: 'He ___ TV every evening.', options: ['watches', 'watchs', 'watch'], a: 0, why: 'Verbs ending in ch add -es with he, she and it: he watches.' },
    { q: '___ your sister work in a bank?', options: ['Do', 'Is', 'Does'], a: 2, why: 'Your sister is she, so the question uses does + the base verb.' },
    { q: 'My parents ___ have a car.', options: ["doesn't", "don't", "aren't"], a: 1, why: 'My parents is they, so the negative is don\'t + the base verb.' },
    { q: 'He ___ two brothers.', options: ['has', 'have', 'haves'], a: 0, why: 'Have is irregular: with he, she and it it becomes has.' },
    { q: 'The baby ___ a lot at night.', options: ['crys', 'cry', 'cries'], a: 2, why: 'After a consonant, a final y changes to -ies: cry becomes cries.' },
    { q: 'Where ___ he live?', options: ['do', 'does', 'is'], a: 1, why: 'Questions with he use does, and the main verb stays in the base form: Where does he live?' },
    { q: 'The store ___ at nine o\'clock.', options: ['opens', 'open', 'opening'], a: 0, why: 'The store is it, so the verb takes -s: it opens.' },
  ],
  related: ['en-ex-a2', 'en-quiz-a1', 'en-quiz-a2'],
};
