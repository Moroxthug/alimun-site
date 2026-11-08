// English A2, class 2 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c02',
  focus: 'By the end every student can describe their routine and other people’s routines with the present simple, including the *-s* form, questions with *do* and *does*, and frequency words in the right place (*I usually…*, *She is never…*). The speaking goal: a one-minute description of a typical week.',
  tips: [
    'The *-s* form with *he, she, it* is still the most common mistake at A2. Correct it every time, briefly, and ask the student to repeat the sentence.',
    'Frequency words go **before** the main verb but **after** *be*: *I often cook*, *She is often late*. Spanish, Italian and Portuguese speakers often say *I cook often*.',
    'Questions: insist on *Does she…?* + simple form. *Does she works?* is a typical mistake.',
    'Keep the explanation short: the book lesson covers the rules. Give the class time to talk.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What time do you usually get up? What do you do after work?* Write two answers on the board.' },
    { min: 10, title: 'He, she and does', md: 'Show board page 1. Students complete the sentences alone, then check together. Drill three questions with *does*.' },
    { min: 10, title: 'How often?', md: 'Show board page 2. Draw a line from *never* to *always*. Students put the words in order and make true sentences about themselves.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: one-word gaps in the format of A2 Key Reading Part 5. Students work alone for three minutes, then reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they always do and one thing they never do. Set the homework.' },
  ],
  board: [
    { title: 'He, she and does', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
        { q: 'My brother ___ (work) in a hotel.', a: ['works'], why: 'One person (*he*): add *-s*.' },
        { q: 'She ___ (watch) TV every evening.', a: ['watches'], why: 'After *-ch*, add *-es*.' },
        { q: 'They ___ (not / eat) meat.', a: ['don’t eat', 'do not eat'], why: 'With *they*: *don’t* + simple form.' },
        { q: '___ your sister live in Madrid?', a: ['Does'], why: 'Question with *she*: *Does*.' },
        { q: 'He ___ (study) every night.', a: ['studies'], why: 'Consonant + *y*: *-ies*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Does she [works] on Saturdays?', a: ['work'], why: 'After *does*, the simple form.' },
        { s: 'My father [don’t] drink coffee.', a: ['doesn’t', 'does not'], why: 'With *he*: *doesn’t*.' },
      ] },
    ] },
    { title: 'How often?', blocks: [
      { t: 'table', caption: 'From never to always', explain: ['head', 'col1'], head: ['Word', 'How often'], rows: [
        ['always', 'every time'],
        ['usually', 'nearly every time'],
        ['often', 'many times'],
        ['sometimes', 'now and then'],
        ['never', 'not at any time'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I usually walk to work.', why: 'The frequency word goes before the main verb.' },
        { a: 'She is often late.', why: 'With *be*, the frequency word goes after it.' },
        { a: 'We never eat breakfast at home.', why: '*never* before the main verb.' },
      ] },
    ] },
    { title: 'Exam corner: one word in each gap', blocks: [
      { t: 'reading', title: 'An email from Leo', md: 'Hi Sam! I’m in Dublin now. I work in a café near the river. I start work ___ seven o’clock, so I get up very early. My boss is nice and she ___ coffee better than anyone!' },
      { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading, Part 5): write one word in each gap.', items: [
        { q: 'I start work ___ seven o’clock.', a: ['at'], why: 'A time: *at seven o’clock*.' },
        { q: 'She ___ coffee better than anyone.', a: ['makes'], why: 'Present simple with *she*: *makes*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 5, read the whole sentence before you write. The missing word is often small: a preposition (*at, in, on*), a pronoun or a verb form with *-s*.' },
    ] },
  ],
  activities: {
    one: { title: 'Guess the job', md: 'The student thinks of a job and describes the person’s routine without saying the job (*She gets up at four. She works in a kitchen. She makes bread.*). You guess, then swap. Do three jobs each and correct the *-s* form each time.' },
    small: { title: 'Our week', md: 'Each student writes five frequency sentences about their week in the chat, one of them false. The others ask questions (*Do you really go to the gym every day?*) and guess which sentence is false.' },
    group: { title: 'Class survey', md: 'Breakout rooms of four with three questions in the chat: *How often do you cook? Do you usually work at the weekend? What do you never do on Mondays?* Each room reports one result in a sentence: *Two of us never cook. Marta usually works on Saturdays.*' },
  },
  homework: { book: 'u1:p2', md: 'Do lesson 2 of unit 1 (Right now). Write six sentences about a friend’s routine, using three different frequency words.' },
};
