// English C1, class 4 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c04',
  focus: 'By the end every student describes character precisely: with adverb and adjective collocations (*notoriously unreliable*, *refreshingly modest*), with words that carry the right connotation (*frank* or *blunt*, *thrifty* or *tight-fisted*) and with compound adjectives (*level-headed*, *thick-skinned*). The speaking goal: describe a person in a way that shows what the speaker thinks of them.',
  tips: [
    'Collocations are not logical, so do not explain them; let students hear them often. Repeat each new pair in a full sentence and ask students to use it straight away.',
    'Connotation is where C1 descriptions succeed or fail. Ask: *Do you admire this person or criticise them? Then which word?*',
    'Compound adjectives take the *-ed* form: *level-headed*, *open-minded*, not *level-head*. Correct it every time.',
    'Describing real people can be delicate. Let students describe a fictional character or a public figure if they prefer.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student to describe a friend in three words. Write the words on the board, then ask who can make each one more precise.' },
    { min: 12, title: 'The right partner', md: 'Show board page 1. Students choose the adjectives that go with each adverb, then make one sentence about someone they know.' },
    { min: 10, title: 'Praise or criticism', md: 'Show board page 2. Students sort the words, then complete the sentences with compound adjectives.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 3. Students form the words alone, check spelling, then compare.' },
    { min: 5, title: 'Close', md: 'Each student describes themselves with one collocation and one compound adjective. Set the homework.' },
  ],
  board: [
    { title: 'The right partner', blocks: [
      { t: 'ex', kind: 'colloc', h: 'Which adjectives go naturally with the adverb?', items: [
        { key: 'notoriously', o: ['unreliable', 'stubborn', 'modest', 'difficult', 'generous'], a: [0, 1, 3], why: '*Notoriously* means well known for something bad: unreliable, stubborn, difficult.' },
        { key: 'refreshingly', o: ['honest', 'down-to-earth', 'arrogant', 'modest', 'tactless'], a: [0, 1, 3], why: '*Refreshingly* praises a quality that is pleasantly unusual.' },
        { key: 'deeply', o: ['private', 'religious', 'caring', 'tall', 'punctual'], a: [0, 1, 2], why: '*Deeply* goes with inner qualities, feelings and beliefs.' },
      ] },
    ] },
    { title: 'Praise or criticism', blocks: [
      { t: 'ex', kind: 'sort', h: 'Does the word praise the person or criticise them?', groups: ['praise', 'criticism'], explain: ['groups'], items: [
        { s: 'frank', g: 0, why: 'Honest in a way we respect.' },
        { s: 'blunt', g: 1, why: 'Honest in a way that hurts people.' },
        { s: 'thrifty', g: 0, why: 'Careful with money.' },
        { s: 'tight-fisted', g: 1, why: 'Unwilling to spend or share money.' },
        { s: 'inquisitive', g: 0, why: 'Curious and keen to learn.' },
        { s: 'nosy', g: 1, why: 'Too interested in other people’s private lives.' },
        { s: 'resolute', g: 0, why: 'Determined in a way we admire.' },
        { s: 'obstinate', g: 1, why: 'Refusing to change, unreasonably.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the compound adjective that fits.', items: [
        { q: 'You need to be fairly ___ to survive the criticism that comes with the job.', o: ['thick-skinned', 'thin-skinned', 'big-headed'], why: '*Thick-skinned*: not easily hurt by criticism.' },
        { q: 'She stayed ___ while everyone around her panicked.', o: ['level-headed', 'narrow-minded', 'two-faced'], why: '*Level-headed*: calm and sensible.' },
        { q: 'He’s so ___ that he never hears a word anyone else says.', o: ['self-absorbed', 'open-minded', 'good-natured'], why: '*Self-absorbed*: interested only in yourself.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word given in capitals to form a word that fits the gap.', items: [
        { q: 'His ___ remarks upset several people at the meeting.', base: 'tact', a: ['tactless'], why: 'An adjective before *remarks*, with a negative meaning: *-less*.' },
        { q: 'She showed remarkable ___ in rebuilding the business after the fire.', base: 'determine', a: ['determination'], why: 'A noun after *remarkable*.' },
        { q: 'He came across as rather ___, which surprised those who knew him well.', base: 'conceit', a: ['conceited'], why: 'An adjective after *rather*: *conceited* = too proud of yourself.' },
        { q: 'Young children are naturally ___ about the world around them.', base: 'inquire', a: ['inquisitive', 'enquiring', 'inquiring'], why: 'An adjective after *naturally*; *inquisitive* also changes the stem.' },
        { q: 'Her ___ to compromise eventually cost her the job.', base: 'willing', a: ['unwillingness'], why: 'Two changes: a negative prefix and a noun suffix after *her*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 3** decide first what kind of word the gap needs (noun, adjective, adverb, verb), then whether the meaning is positive or negative. Many answers need two changes at once, and spelling must be exact.' },
    ] },
  ],
  activities: {
    one: { title: 'Two versions', md: 'The student describes a person twice: once as a friend would, once as a critic would (*refreshingly frank* becomes *rather blunt*). Then they describe a character from a book or film. Note each collocation and connotation choice and review the best ones.' },
    small: { title: 'Who am I describing?', md: 'Each student describes a well-known person or fictional character with three collocations and one compound adjective, without the name. The others guess. Then the group decides whether the description was approving or critical, and which word showed it.' },
    group: { title: 'The reference letter', md: 'In breakout rooms of three, students write a short reference for an imaginary colleague who is talented but difficult. They must be honest without being unkind, using the positive words from the lesson. Each room reads its letter aloud; the class decides which one they would trust most.' },
  },
  homework: { book: 'u1:p3', md: 'Finish lesson 3 of unit 1 if needed, then do lesson 4 (The face we show). Write about 120 words describing someone who influenced you, with three adverb and adjective collocations and two compound adjectives.' },
};
