// English A1, class 7 (docs/LESSONS_PLAN.md). Builds on book lesson u2:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c07',
  focus: 'By the end of the class every student can name everyday objects with **a** or **an**, make regular and the most common irregular plurals (*men, women, children, people*), and point to things near and far with **this, that, these, those**. Use real objects in the students’ rooms: everything they say today should be about things they can see.',
  tips: [
    'Students choose *a* or *an* by the letter, not the sound. Show *an hour* and *a university* only if a student asks; keep the rule simple: vowel **sound** → *an*.',
    'Speakers of Chinese, Japanese, Turkish and Arabic often leave out *a* (*I have pen*). Every time, hold up one object and ask *One?* to get *a pen*.',
    'Many learners pronounce *-es* plurals wrongly or add a syllable everywhere. Model *boxes, buses* (extra syllable) against *books, pens* (no extra syllable).',
    'For *this / that*, use the camera: hold an object close (*this*) and point to something far away in the room (*that*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show five things from your desk one by one (a pen, an apple, a key, an umbrella, a phone). Students say the word; write it with *a* or *an*.' },
    { min: 10, title: 'a or an', md: 'Show board page 1. Students say why each word takes *a* or *an*. Then the exercise on the board.' },
    { min: 10, title: 'Plurals', md: 'Show board page 2. Go through the rules; students make the plurals aloud, then sort the irregular ones.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'this, that, these, those', md: 'Show board page 3. Demonstrate with objects. Students do the exercise, then point to things in their room and say a sentence.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student shows one object and says *This is a …* or *These are …*. Set the homework.' },
  ],
  board: [
    { title: 'a or an?', blocks: [
      { t: 'table', caption: 'One thing', explain: ['head', 'col1'], head: ['Word', 'Why'], rows: [
        ['a pen, a bag, a key', 'a consonant sound'],
        ['an apple, an egg, an umbrella', 'a vowel sound (a, e, i, o, u)'],
      ] },
      { t: 'ex', kind: 'select', h: 'a or an?', items: [
        { q: 'It’s ___ orange.', o: ['an', 'a'], why: '*orange* starts with a vowel sound.' },
        { q: 'I’ve got ___ phone.', o: ['a', 'an'], why: '*phone* starts with a consonant sound.' },
        { q: 'She’s ___ artist.', o: ['an', 'a'], why: '*artist* starts with a vowel sound.' },
        { q: 'Is this ___ bus ticket?', o: ['a', 'an'], why: '*bus* starts with a consonant sound.' },
      ] },
    ] },
    { title: 'Plurals', blocks: [
      { t: 'table', caption: 'More than one', explain: ['head', 'col2'], head: ['One', 'More', 'Rule'], rows: [
        ['a book', 'books', 'most words: add -s'],
        ['a box, a bus, a watch', 'boxes, buses, watches', 'after x, s, ch, sh: add -es'],
        ['a city', 'cities', 'consonant + y: -ies'],
        ['a man, a woman, a child, a person', 'men, women, children, people', 'irregular: learn them'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the plural.', items: [
        { q: 'two ___ (bus)', a: ['buses'], why: 'After *s*: add *-es*.' },
        { q: 'three ___ (child)', a: ['children'], why: 'Irregular plural.' },
        { q: 'four ___ (city)', a: ['cities'], why: 'Consonant + *y*: *-ies*.' },
        { q: 'five ___ (key)', a: ['keys'], why: 'Vowel + *y*: just add *-s*.' },
      ] },
    ] },
    { title: 'this, that, these, those', blocks: [
      { t: 'table', caption: 'Near or far?', explain: ['head', 'col0'], head: ['', 'One', 'More than one'], rows: [
        ['near me', 'this', 'these'],
        ['far from me', 'that', 'those'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
        { q: 'I’m holding my glasses. ___ are my glasses.', o: ['These', 'That', 'This'], why: 'Near, more than one: *these*.' },
        { q: 'Look at ___ house over there!', o: ['that', 'these', 'this'], why: 'Far, one thing: *that*.' },
        { q: '___ shoes over there are nice.', o: ['Those', 'This', 'These'], why: 'Far, more than one: *those*.' },
      ] },
    ] },
    { title: 'Exam corner: read the signs', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key reading test: what does the notice say?', items: [
        { q: 'Notice: “Two pens and a notebook for every student.”', o: ['Each student gets three things.', 'Each student gets two notebooks.', 'Students buy a pen.'], why: 'Two pens + a notebook = three things.' },
        { q: 'Notice: “Children under 12: free.”', o: ['Young children do not pay.', 'Children cannot come.', 'Children pay 12.'], why: '*Free* means you do not pay.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In this part of the exam you read short notices and messages. Look at the **small words**: *a*, *two*, *every*, *free*. They often decide the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'What’s in your bag?', md: 'The student empties a bag or a drawer on camera and names each thing with *a* or *an*, then the plurals (*two keys, three pens*). Then you show things on your desk and the student says *this / that / these / those* depending on where they are. Finish with a memory test: the student says everything that was in their bag.' },
    small: { title: 'Room tour', md: 'Each student shows their room for one minute and names five things: *This is a lamp. Those are my books.* The others ask one question each (*Is that a guitar?*). Write new words on the board with *a* or *an*.' },
    group: { title: 'Lost property', md: 'Breakout rooms of three: one student is at a lost property office, the others lost things. They describe and point (*That bag! No, the black one. Those are my keys!*). Put a list of lost things in the chat to choose from. Back in the main room, each room tells you what they found, with plurals.' },
  },
  homework: { book: 'u2:p1', md: 'Do book lesson 1 of unit 2 (A, an, plurals, this and that). Then write ten things in your room: five with *a* or *an*, five plurals with a number (*three books*).' },
};
