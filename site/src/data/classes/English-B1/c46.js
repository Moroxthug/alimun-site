// English B1, class 46 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c46',
  focus: 'By the end of the class every student can use the *-ing* form as the subject of a sentence (*Learning a language takes time*) and after prepositions (*good at fixing*, *tired of waiting*, *before leaving*, *without asking*), and can talk about their skills and habits with technology using these patterns.',
  tips: [
    'The key rule: after a **preposition** the verb takes **-ing**. Learners often write *interested in learn* or *before to leave*. Underline the preposition every time.',
    'The word **to** is sometimes a preposition: *I’m looking forward to seeing you*, *I’m used to working late*. Point this out; it is a classic B1 trap.',
    'Starting a sentence with an *-ing* form feels strange to many learners. Model it with real opinions: *Working from home is easier for me.*',
    'Recycle the adjective + preposition pairs from the book (good at, bad at, interested in, tired of, worried about) in every activity.',
  ],
  plan: [
    {
      min: 5,
      title: 'Warm-up',
      md: 'Ask: *What are you good at? What are you tired of?* Write the answers on the board; underline the preposition and the *-ing* form.',
    },
    { min: 10, title: '-ing as subject and after prepositions', md: 'Board page 1. Go through the table and examples.' },
    { min: 10, title: 'Practice', md: 'Board page 2. Students complete and fix the sentences alone, then compare.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 6, open cloze.' },
    { min: 5, title: 'Close', md: 'Each student completes: *I’m looking forward to…* Set the homework.' },
  ],
  board: [
    {
      title: 'The -ing form',
      blocks: [
        {
          t: 'table',
          caption: 'Where we use -ing',
          explain: ['head', 'col0'],
          head: ['Use', 'Example'],
          rows: [
            ['as the subject', '*Checking emails at night is a bad habit.*'],
            ['after an adjective + preposition', '*She’s good at fixing computers.*'],
            ['after a preposition of time', '*Always back up your files before installing an update.*'],
            ['after without, instead of, by', '*He paid without asking the price.*'],
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'After a preposition, always **-ing**. Careful with **to**: in *look forward to* and *be used to*, *to* is a preposition: *I look forward to **hearing** from you.*',
        },
      ],
    },
    {
      title: 'Practice',
      blocks: [
        {
          t: 'ex',
          kind: 'gap',
          h: 'Write the right form of the verb in brackets.',
          items: [
            { q: 'I’m tired of ___ (wait) for this page to load.', a: ['waiting'], why: '*tired of* + *-ing*.' },
            { q: '___ (use) a password manager makes life easier.', a: ['Using'], why: '*-ing* as the subject.' },
            { q: 'Read the instructions before ___ (start).', a: ['starting'], why: '*before* is a preposition: *-ing*.' },
            { q: 'I look forward to ___ (meet) you.', a: ['meeting'], why: 'In *look forward to*, *to* is a preposition.' },
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'She’s interested in [learn] to code.', a: ['learning'], why: '*interested in* + *-ing*.' },
            { s: 'He left without [to say] goodbye.', a: ['saying'], why: '*without* + *-ing*.' },
            { s: '[Play] video games all night is not healthy.', a: ['Playing'], why: '*-ing* as the subject.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 6',
      blocks: [
        {
          t: 'reading',
          title: 'A message from a friend',
          md: 'Hi Sam, thanks (1) ___ helping me with my laptop yesterday. I’m really bad (2) ___ fixing things like that. Instead of (3) ___ a new one, I can use it for another year! See you soon, Maya',
        },
        {
          t: 'ex',
          kind: 'gap',
          h: 'In the format of B1 Preliminary Reading Part 6: write one word in each gap.',
          items: [
            { q: '(1) thanks ___ helping me', a: ['for'], why: '*thanks for* + *-ing*.' },
            { q: '(2) I’m really bad ___ fixing things', a: ['at'], why: '*bad at* + *-ing*.' },
            { q: '(3) Instead of ___ a new one', a: ['buying', 'getting'], why: 'After *instead of* comes an *-ing* form; *buying* fits the meaning.' },
          ],
        },
        { t: 'tip', art: 'owl', md: 'In Reading Part 6 many gaps are **prepositions** after adjectives and verbs (*good at*, *thanks for*). Learn them as pairs.' },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Tech habits interview',
      md: 'Ask the student eight questions with the patterns (*What are you good at? What are you worried about? What do you do before going to bed?*). The student answers in full sentences with *-ing* forms, then asks you the same questions. Note and correct any infinitive after a preposition.',
    },
    small: {
      title: 'Find someone who…',
      md: 'Each student gets four prompts in the chat (*is good at cooking*, *is tired of using social media*, *is looking forward to travelling*, *is interested in learning a new skill*). They ask the others full questions and note names. Share the results with *-ing* sentences.',
    },
    group: {
      title: 'Opinion statements',
      md: 'In breakout rooms, each room writes five opinions starting with an *-ing* form about technology (*Using a phone at dinner is rude*). Back together, read each statement; students agree or disagree with a reason. Correct forms on the board.',
    },
  },
  homework: {
    book: 'u10:p2',
    md: 'Finish book lesson 2 of unit 10. Then write eight true sentences about your technology habits: four starting with an *-ing* form and four with an adjective + preposition + *-ing*.',
  },
};
