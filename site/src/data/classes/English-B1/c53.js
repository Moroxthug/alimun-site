// English B1, class 53 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c53',
  focus: 'By the end of the class every student can add extra information about a person, a place or a thing with non-defining relative clauses (*My sister, who lives in Rome, is a doctor*), with commas, *who* for people and *which* for things, and can explain the difference from defining clauses (no commas, *that* allowed). Every student introduces three people or places in their life with these clauses.',
  tips: [
    'In non-defining clauses **that is not allowed**. Learners often write *My car, that is old, …*. Correct it to *which* every time.',
    'The commas matter: they show the information is extra. Read the sentence aloud with a small pause at each comma; it helps students hear the difference.',
    'Contrast one pair on the board: *My brother who lives in Paris* (I have more brothers) and *My brother, who lives in Paris,* (I have one brother).',
    'Encourage these clauses in speaking: they make B1 descriptions sound more natural and are noticed in the exam.',
  ],
  plan: [
    {
      min: 5,
      title: 'Warm-up',
      md: 'Say two facts about a person in two sentences (*My aunt lives in Lisbon. She is a teacher.*). Ask students to join them into one sentence.',
    },
    { min: 10, title: 'Non-defining clauses', md: 'Board page 1. Go through the rule and the examples.' },
    { min: 10, title: 'Practice', md: 'Board page 2. Students join and fix the sentences alone, then compare.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 6, open cloze with relative pronouns.' },
    { min: 5, title: 'Close', md: 'Each student introduces their town in one sentence with *which* or *where*. Set the homework.' },
  ],
  board: [
    {
      title: 'Extra information',
      blocks: [
        {
          t: 'text',
          md: 'A **non-defining** relative clause adds **extra information**. The sentence is complete without it.\n\nPut it **between commas**. Use **who** for people, **which** for things, **where** for places, **whose** for possession. Never use **that**.',
        },
        {
          t: 'examples',
          items: [
            { s: 'My sister, who lives in Rome, is a doctor.', n: 'I have one sister; *who lives in Rome* is extra.' },
            { s: 'Our new flat, which is near the park, has two bedrooms.', n: '*which* for a thing.' },
            { s: 'I grew up in Porto, where my parents still live.', n: '*where* for a place.' },
            { s: 'Mr Lee, whose son is in my class, is very kind.', n: '*whose* for possession.' },
          ],
        },
      ],
    },
    {
      title: 'Practice',
      blocks: [
        {
          t: 'ex',
          kind: 'transform',
          h: 'Join the sentences with who, which or where.',
          items: [
            {
              q: 'My boss is very friendly. She started last month.',
              cue: 'My boss,',
              a: ['My boss, who started last month, is very friendly.'],
              why: '*who* for a person, between commas.',
            },
            {
              q: 'The museum is free on Sundays. It opened in 2010.',
              cue: 'The museum,',
              a: ['The museum, which opened in 2010, is free on Sundays.'],
              why: '*which* for a thing.',
            },
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'My car, [that] is ten years old, still works well.', a: ['which'], why: 'No *that* in non-defining clauses: *which*.' },
            { s: 'Kate, [which] I met at university, is my best friend.', a: ['who', 'whom'], why: 'For a person: *who*.' },
            { s: 'I visited Seville, [which] my grandparents were born.', a: ['where'], why: 'A place where something happened: *where*.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 6',
      blocks: [
        {
          t: 'reading',
          title: 'About my family',
          md: 'My grandfather, (1) ___ is 85, still walks every day. He lives in a small village, (2) ___ he was born. His house, (3) ___ is over a hundred years old, has a beautiful garden. My cousin, (4) ___ children I often look after, lives next door.',
        },
        {
          t: 'ex',
          kind: 'gap',
          h: 'In the format of B1 Preliminary Reading Part 6: write one word in each gap.',
          items: [
            { q: '(1) My grandfather, ___ is 85', a: ['who'], why: 'A person: *who*.' },
            { q: '(2) a small village, ___ he was born', a: ['where'], why: 'A place: *where*.' },
            { q: '(3) His house, ___ is over a hundred years old', a: ['which'], why: 'A thing: *which*.' },
            { q: '(4) My cousin, ___ children I often look after', a: ['whose'], why: 'Possession: *whose*.' },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'In Reading Part 6, a comma before the gap often means a **non-defining clause**: the answer is *who, which, where* or *whose*, never *that*.',
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'My people and places',
      md: 'The student shows (or describes) three people and two places important to them and introduces each with a non-defining clause (*This is Ana, who taught me to drive*). Ask follow-up questions; correct any *that* after a comma.',
    },
    small: {
      title: 'Two facts in one',
      md: 'Each student writes three pairs of facts about themselves on paper or in the chat (*I live in a small town. My town has a famous castle.*). Their partner joins each pair into one sentence with a relative clause, out loud. Swap and repeat.',
    },
    group: {
      title: 'Guess who',
      md: 'In breakout rooms, each student writes one sentence about a famous person with a non-defining clause but without the name (*This singer, whose songs everyone knows, comes from Barbados*). The room guesses. Back together, rooms share their best clue; check the commas and pronouns on the board.',
    },
  },
  homework: {
    book: 'u11:p2',
    md: 'Finish book lesson 2 of unit 11. Then write a short paragraph (about 80 words) about your family or your town with at least four non-defining relative clauses (*who, which, where, whose*).',
  },
};
