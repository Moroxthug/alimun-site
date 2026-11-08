// English B1, class 63 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c63',
  focus: 'By the end of the class every student can make guesses about the past with *must have*, *might / may / could have* and *can’t / couldn’t have* + past participle, explaining the clue each time (*She must have forgotten, because her phone is still here*). The form is the main accuracy point: *have* + past participle, never the past simple.',
  tips: [
    'The most common mistake is the past simple after *must*: *She must forgot*. Write the pattern on the board as three boxes: modal + *have* + past participle, and point to it every time.',
    'In speech, *must have* sounds like *must of*. Students who learn by ear sometimes write *must of*; correct it in writing.',
    'Irregular past participles are often the real problem (*can’t have went*). Have a short list of common ones ready: *gone, taken, eaten, forgotten, seen, left*.',
    'This lesson connects to the past modals students may have seen in A2 (*should have* is not taught here). Keep the focus on deduction only.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell a short puzzle: *I came home and the window was open, the cake was gone, and there were muddy footprints on the floor.* Ask: *What happened?*' },
    { min: 12, title: 'Guessing about the past', md: 'Show board page 1. Go through the form and the three levels. Students make the warm-up guesses again with the new form.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students complete and correct the sentences, saying the past participle aloud.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: Listening Part 1. Read each short conversation aloud twice; students choose the answer.' },
    { min: 5, title: 'Close', md: 'Each student explains one strange thing that happened to them recently with a past guess. Set the homework.' },
  ],
  board: [
    { title: 'Guessing about the past', blocks: [
      { t: 'table', caption: 'Modal + have + past participle', explain: ['head', 'col0'], head: ['How sure?', 'Form', 'Example'], rows: [
        ['almost sure it happened', 'must have + past participle', 'The grass is wet. It must have rained.'],
        ['possible', 'might / may / could have + past participle', 'I might have left my glasses at work.'],
        ['almost sure it did not happen', 'can’t / couldn’t have + past participle', 'He can’t have eaten it all. It was huge.'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete with the right form of the verb in brackets.', items: [
        { q: 'Her coat isn’t here. She must have ___ (go) home already.', a: ['gone'], why: 'Past participle of *go*: *gone*.' },
        { q: 'I can’t find my wallet. I might have ___ (leave) it in the taxi.', a: ['left'], why: 'Past participle of *leave*: *left*.' },
        { q: 'He can’t have ___ (see) the email. He hasn’t replied.', a: ['seen'], why: 'Past participle of *see*: *seen*.' },
        { q: 'They’re very late. They must have ___ (take) the wrong train.', a: ['taken'], why: 'Past participle of *take*: *taken*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She must [forgot] her keys again.', a: ['have forgotten'], why: 'Past guess: *must have* + past participle.' },
        { s: 'They must [of] left early.', a: ['have'], why: 'Write *have*, not *of*.' },
        { s: 'He can’t have [went] to bed. The light is on.', a: ['gone'], why: 'Past participle, not past simple: *gone*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 1', blocks: [
      { t: 'text', md: '**Teacher reads aloud, twice:**\n\n(1) *Man:* Where’s my phone? I had it at lunch. *Woman:* You took it to the café, didn’t you? You might have left it on the table. *Man:* No, I remember putting it in my bag. It must have fallen out on the bus.\n\n(2) *Woman:* Is Sam coming to the party? *Man:* He can’t have got my message. He hasn’t answered, and he always answers.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'Where does the man think he lost his phone?', o: ['on the bus', 'in the café', 'at the office'], why: 'The woman suggests the café, but he says *It must have fallen out on the bus*.' },
        { q: 'What does the man think about Sam?', o: ['Sam hasn’t received the message.', 'Sam doesn’t want to come.', 'Sam forgot to answer.'], why: '*He can’t have got my message.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 1, one speaker often suggests an answer and the other **changes** it. Listen to the end of the conversation before you choose.' },
    ] },
  ],
  activities: {
    one: { title: 'The detective', md: 'Describe a room after something happened (a party, a robbery, a surprise visit), one clue at a time. The student explains what must have, might have and can’t have happened after each clue. Then the student describes a scene and you guess.' },
    small: { title: 'Strange stories', md: 'Each student posts a strange situation in the chat (*My neighbour’s car was in my garden this morning*). The others give three explanations with *must have, might have* and *can’t have*. The writer chooses the best one.' },
    group: { title: 'What happened here?', md: 'Breakout rooms of three get a picture each (an empty room with broken glass, a person soaking wet, a kitchen full of smoke). They agree on the most likely story, using past modals, and prepare to tell it in one minute. Bring two rooms back to tell their stories.' },
  },
  homework: { book: 'u13:p2', md: 'Finish book lesson 2 of unit 13. Then write a short paragraph about something you lost or something strange that happened, with at least three past guesses.' },
};
