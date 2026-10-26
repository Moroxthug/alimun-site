// Resource: exercise. German items stay German; instructions and explanations are in the reader's language.
export default {
  key: 'de-articles-a1', site: 'en', slug: 'german-articles-exercise-a1', kind: 'exercise', course: 'German', level: 'A1',
  draw: 'pretzel', tint: 'sun', published: '2026-10-26',
  title: 'German articles exercise: der, die or das? (A1)',
  metaTitle: 'German articles exercise der, die, das (A1, free) – Alimun',
  desc: 'Twelve free questions on der, die and das for A1 learners of German, with instant feedback and an explanation for every answer.',
  lead: 'Choose der, die or das for each noun. You see straight away if you are right, and why.',
  instructions: 'Choose the right article.',
  about: [
    'Every German noun has a gender, and the article shows it: der for masculine, die for feminine and das for neuter. In the plural, all three use die.',
    'Many nouns give their gender away with their ending: nouns in -ung, -heit and -keit are feminine, nouns in -chen are neuter, and days, months and seasons are masculine. The rest you learn with the noun, which is why it pays to always say the article out loud.',
  ],
  items: [
    { q: '___ Zeitung', options: ['der', 'die', 'das'], a: 1, why: 'Nouns ending in -ung are feminine: die Zeitung.' },
    { q: '___ Mädchen', options: ['der', 'die', 'das'], a: 2, why: 'Nouns ending in -chen are always neuter, even for a person: das Mädchen.' },
    { q: '___ Montag', options: ['der', 'die', 'das'], a: 0, why: 'Days of the week are masculine: der Montag.' },
    { q: '___ Freiheit', options: ['der', 'die', 'das'], a: 1, why: 'Nouns ending in -heit are feminine: die Freiheit.' },
    { q: '___ Sommer', options: ['der', 'die', 'das'], a: 0, why: 'Seasons are masculine: der Sommer.' },
    { q: '___ Brötchen', options: ['der', 'die', 'das'], a: 2, why: 'The ending -chen makes a noun neuter: das Brötchen.' },
    { q: '___ Universität', options: ['der', 'die', 'das'], a: 1, why: 'Nouns ending in -tät are feminine: die Universität.' },
    { q: '___ Januar', options: ['der', 'die', 'das'], a: 0, why: 'Months are masculine: der Januar.' },
    { q: '___ Möglichkeit', options: ['der', 'die', 'das'], a: 1, why: 'Nouns ending in -keit are feminine: die Möglichkeit.' },
    { q: '___ Haustür', options: ['der', 'die', 'das'], a: 1, why: 'A compound noun takes the gender of its last part: die Tür, so die Haustür.' },
    { q: '___ Bücher (plural)', options: ['der', 'die', 'das'], a: 1, why: 'In the plural every noun uses die: die Bücher.' },
    { q: '___ Museum', options: ['der', 'die', 'das'], a: 2, why: 'Most nouns ending in -um are neuter: das Museum.' },
  ],
  related: ['en-quiz-b1', 'de-articles-sheet', 'false-friends'],
};
