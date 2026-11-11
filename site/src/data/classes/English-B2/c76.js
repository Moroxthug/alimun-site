// English B2, class 76 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p1 (Use of English Parts 2 and 4). Draft for the owner's review.
export const LESSON = {
  id: 'c76',
  focus: 'By the end of the class every student has a clear strategy for B2 First Reading and Use of English Part 2 (open cloze) and Part 4 (key word transformation): in Part 2 they look at the words around the gap to decide the type of word (preposition, article, auxiliary, pronoun, linking word), and in Part 4 they find the grammar the key word needs and count their words. They practise both under time pressure.',
  tips: [
    'In Part 2 the missing words are short grammar words, never nouns or adjectives. Make students ask *What kind of word is missing?* before guessing.',
    'In Part 4, the most common traps: changing the key word, writing more than five words, and changing the meaning. Check all three.',
    'Contractions count as two words in Part 4 (*didn’t* = *did not*).',
    'Spelling must be correct in both parts. Ask students to spell their answers aloud.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *___ the rain, we went out.* Ask what kind of word is missing and which words fit (*Despite*, *In spite of*).' },
    { min: 15, title: 'Part 2: open cloze', md: 'Show board page 1. Students decide the word type for each gap before writing, then fill them in.' },
    { min: 12, title: 'Part 4: key word transformations', md: 'Show board page 2. Model one transformation step by step, then students do the rest alone.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 3: a timed mini-test (four minutes). Reveal and discuss the mistakes.' },
    { min: 5, title: 'Close', md: 'Each student names the one trap they will watch out for. Set the homework.' },
  ],
  board: [
    { title: 'Part 2: what kind of word?', blocks: [
      { t: 'table', caption: 'Common missing words', explain: ['head', 'col0'], head: ['Type', 'Examples'], rows: [
        ['prepositions', 'in, on, at, for, of, despite'],
        ['auxiliaries and modals', 'have, had, been, would, could'],
        ['linking words', 'although, however, unless, whether'],
        ['pronouns and relatives', 'which, whose, it, there, themselves'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'She has been interested ___ photography since she was a child.', a: ['in'], why: '*interested in*.' },
        { q: '___ it was late, we decided to keep walking.', a: ['Although', 'Though'], why: 'A full clause follows: *Although*.' },
        { q: 'The man ___ car was stolen went to the police.', a: ['whose'], why: 'Possession in a relative clause.' },
        { q: 'If I ___ known, I would have helped.', a: ['had'], why: 'Third conditional: *had* + past participle.' },
      ] },
    ] },
    { title: 'Part 4: three steps', blocks: [
      { t: 'text', md: '**Step one:** find what the key word needs (a preposition? a tense? a passive?). **Step two:** write the new sentence with the same meaning. **Step three:** count the words (two to five) and check the key word is unchanged.' },
      { t: 'ex', kind: 'transform', h: 'Use the word given; two to five words.', items: [
        { q: 'It wasn’t necessary for us to take a taxi.', cue: 'NEED', a: ['We didn’t need to take a taxi.', 'We did not need to take a taxi.', 'We needn’t have taken a taxi.'], why: '*didn’t need to* / *needn’t have*.' },
        { q: 'People say that the castle is haunted.', cue: 'SAID', a: ['The castle is said to be haunted.'], why: 'Passive reporting: *is said to be*.' },
        { q: 'I regret not studying harder.', cue: 'WISH', a: ['I wish I had studied harder.'], why: '*wish* + past perfect for a past regret.' },
      ] },
    ] },
    { title: 'Exam corner: four minutes', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of B2 First Part 2: one word in each gap.', items: [
        { q: 'Not ___ did she win, but she also set a record.', a: ['only'], why: '*Not only… but also*.' },
        { q: 'We stayed at home because ___ the storm.', a: ['of'], why: '*because of* + noun.' },
        { q: 'It was the coach ___ convinced me to keep going.', a: ['who', 'that'], why: 'Cleft sentence: *It was… who/that*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2 read the whole text quickly first for the general meaning. Many gaps depend on a word in the next sentence, not only the one before the gap.' },
    ] },
  ],
  activities: {
    one: { title: 'Teacher for a minute', md: 'The student writes two Part 4 transformations for you with key words from units 1 to 16. You answer, sometimes making a classic mistake on purpose; the student must spot and explain it.' },
    small: { title: 'Gap race', md: 'You read a short paragraph aloud with gaps (say *beep* for each gap). Students write the missing words in the chat; the first correct answer scores. Then discuss the word type for each.' },
    group: { title: 'Make a test', md: 'In breakout rooms of three, each room writes three Part 4 questions with answers. Rooms swap questions, solve them, and mark the other room’s answers.' },
  },
  homework: { book: 'u16:p1', md: 'Finish book unit 16, lesson 1. Do two Part 2 texts and eight Part 4 items from your practice, and note every mistake with the reason.' },
};
