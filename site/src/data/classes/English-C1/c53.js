// English C1, class 53 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u12:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c53',
  focus: 'By the end every student builds words in two or three steps, with prefixes, suffixes and the changes inside the word that go with them (*sustain → sustainable → sustainability → unsustainably*, *deep → depth*, *maintain → maintenance*), and chooses the right negative prefix. The speaking goal: talk about the environment with a precise range of word forms (*irreversible damage*, *an abundance of wildlife*, *the depth of the lake*).',
  tips: [
    'Train the four questions for every gap: which word class, positive or negative, singular or plural, one change or two? Students who skip the second question lose easy marks.',
    'The internal changes are where the exam catches people: *explain → explanation*, *pronounce → pronunciation*, *intervene → intervention*, *persevere → perseverance*. Ask students to spell them aloud letter by letter.',
    'Negative prefixes follow patterns: *im-* before *m* and *p*, *il-* before *l*, *ir-* before *r*. *Imbalance* and *non-native* are worth learning as exceptions to guessing *un-*.',
    'Adjectives ending in *-le* drop the *e* for the adverb: *sustainable → sustainably*, *irreversible → irreversibly*. *Sustainablely* is a common written mistake.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *predict* on the board. Students call out as many words from it as they can (*prediction*, *predictable*, *unpredictable*, *unpredictably*, *predictability*). Mark the word class of each.' },
    { min: 12, title: 'One root, many words', md: 'Show board page 1. Students read the table, then choose the right form in each sentence and name its word class.' },
    { min: 10, title: 'Prefixes and spelling', md: 'Show board page 2. Students sort the words by negative prefix, then fix the spelling mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 3. Students form the words alone, then compare. Check spelling letter by letter.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence about nature where they live with a word built in two steps. Set the homework.' },
  ],
  board: [
    { title: 'One root, many words', blocks: [
      { t: 'table', caption: 'Building in steps', explain: ['head'], head: ['Verb or adjective', 'Noun', 'Adjective', 'Adverb'], rows: [
        ['reverse', 'reversal', 'reversible, irreversible', 'irreversibly'],
        ['protect', 'protection', 'protective, unprotected', 'protectively'],
        ['predict', 'prediction, predictability', 'predictable, unpredictable', 'unpredictably'],
        ['strong', 'strength', 'strong', 'strongly'],
        ['persist', 'persistence', 'persistent', 'persistently'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'Scientists fear that some of the damage to the coral is ___.', o: ['irreversible', 'unreversible', 'irreversibly'], why: 'An adjective after *is*, with *ir-* before *r*.' },
        { q: 'The ___ of the storm took the town by surprise.', o: ['strength', 'strongness', 'strong'], why: 'Size and force adjectives have *-th* nouns.' },
        { q: 'The weather in the mountains changes ___.', o: ['unpredictably', 'unpredictable', 'unpredictablely'], why: 'An adverb after the verb; *-le* becomes *-ly*.' },
        { q: 'Volunteers cleared the river with remarkable ___.', o: ['persistence', 'persistance', 'persisting'], why: 'The noun of *persist* is spelt *-ence*.' },
      ] },
    ] },
    { title: 'Prefixes and spelling', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which negative prefix does each word take?', groups: ['un-', 'ir-', 'im-', 'in-', 'non-'], items: [
        { s: 'sustainable', g: 0, why: '*unsustainable*' },
        { s: 'replaceable', g: 1, why: '*irreplaceable*: *ir-* before *r*.' },
        { s: 'mature', g: 2, why: '*immature*: *im-* before *m*.' },
        { s: 'balance', g: 2, why: '*imbalance*: learn it as a whole word.' },
        { s: 'adequate', g: 3, why: '*inadequate*' },
        { s: 'native', g: 4, why: '*non-native*, as in *a non-native species*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the spelling mistake.', items: [
        { s: 'The park needs regular [maintainance].', a: ['maintenance'], why: '*Maintain → maintenance*: the spelling changes inside.' },
        { s: 'Rapid [intervension] saved the wetland.', a: ['intervention'], why: '*Intervene → intervention*.' },
        { s: 'Fish were caught [unsustainablely] for decades.', a: ['unsustainably'], why: '*-le* adjectives become *-ly*.' },
        { s: 'The [wideness] of the river surprised us.', a: ['width'], why: '*Wide → width*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'text', md: 'A short text about a city river, one sentence at a time. Use the word in capitals to form a word that fits each gap.' },
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
        { q: 'For decades the river was polluted by the ___ dumping of factory waste.', base: 'RESPONSIBLE', a: ['irresponsible'], why: 'A negative adjective before a noun: *ir-* before *r*.' },
        { q: 'Its ___ began when the last factory closed.', base: 'RECOVER', a: ['recovery'], why: 'A noun after *its*.' },
        { q: 'Fish returned in surprising ___ within a few years.', base: 'ABOUND', a: ['abundance'], why: '*In abundance*: the noun of *abound*.' },
        { q: 'The ___ of the water has improved dramatically.', base: 'CLEAR', a: ['clarity'], why: 'The noun of *clear* in this sense is *clarity*.' },
        { q: 'There is now an ___ variety of birds along the banks.', base: 'BELIEVE', a: ['unbelievable'], why: 'An adjective with a negative prefix and a suffix: two changes.' },
        { q: 'Local people were ___ involved in planting the new reed beds.', base: 'ACTIVE', a: ['actively'], why: 'An adverb before a participle.' },
        { q: 'Without their ___, the project would have failed.', base: 'PERSEVERE', a: ['perseverance'], why: '*Persevere → perseverance*.' },
        { q: 'Experts warn that the gains are fragile and that further pollution could be ___.', base: 'DESTROY', a: ['destructive'], why: 'An adjective after *be*: *destructive*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 3 of C1 Advanced has eight gaps. Decide the word class from the position, check whether the meaning is positive or negative, and spell the word letter by letter. A word that is nearly right earns no mark.' },
    ] },
  ],
  activities: {
    one: { title: 'Word family race', md: 'Give the student five roots (*vary*, *resist*, *compare*, *threaten*, *deep*). For each, they build as many words as they can in a minute and use the hardest one in a sentence about the environment. Note any spelling slips and go over them at the end.' },
    small: { title: 'Pass the root', md: 'Students take turns: the first says a root word, the next must give a different form and a sentence with it, and so on until no one can add a form. The student who adds the last correct form wins the round. Keep a list of the forms in the chat.' },
    group: { title: 'Gap-making rooms', md: 'Breakout rooms of three write three Part 3 sentences of their own about nature, each with a word in capitals that needs two changes. Bring everyone back; rooms swap sentences and solve them, and the class checks the spelling together.' },
  },
  homework: { book: 'u12:p1', md: 'Finish lesson 1 of unit 12 if needed, then do lesson 2 (Man-made and drought-resistant). Choose four roots from today and write every form you can for each, with a sentence about the natural world for the hardest form.' },
};
