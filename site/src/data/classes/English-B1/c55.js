// English B1, class 55 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c55',
  focus: 'By the end of the class every student can use question tags to check information and keep a conversation going (*You’re from Lisbon, aren’t you? She didn’t call, did she?*), with the right auxiliary and the right intonation, and can understand and discuss a reading about a long friendship.',
  tips: [
    'The rule: positive sentence, **negative tag**; negative sentence, **positive tag**, with the **same auxiliary**. Learners often use *isn’t it?* for everything.',
    'With the present and past simple, the tag uses **do / does / did**: *You live here, don’t you? He called, didn’t he?*',
    'Intonation changes the meaning: falling when you are sure and want agreement, rising when you really ask. Model both and let students copy.',
    '*I’m late, aren’t I?* is a common exception. Point it out but don’t spend long on it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Check facts about students with tags (*You live near the station, don’t you?*). They answer.' },
    { min: 10, title: 'Question tags', md: 'Board page 1. Go through the rule and examples; practise intonation.' },
    { min: 10, title: 'Practice', md: 'Board page 2. Students complete the tags.' },
    { min: 15, title: 'Reading', md: 'Board page 3. Students read the text and answer the questions.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner and close', md: 'Board page 4: Speaking Part 1 questions with tags to keep talking. Set the homework.' },
  ],
  board: [
    {
      title: 'Question tags',
      blocks: [
        {
          t: 'table',
          caption: 'How tags work',
          explain: ['head'],
          head: ['Sentence', 'Tag'],
          rows: [
            ['You’re a teacher,', 'aren’t you?'],
            ['She isn’t coming,', 'is she?'],
            ['They live in Madrid,', 'don’t they?'],
            ['He called you yesterday,', 'didn’t he?'],
            ['You can swim,', 'can’t you?'],
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'Positive sentence, **negative** tag. Negative sentence, **positive** tag. Use the same helping verb; for the present and past simple, use **do, does, did**.',
        },
      ],
    },
    {
      title: 'Practice',
      blocks: [
        {
          t: 'ex',
          kind: 'gap',
          h: 'Write the question tag.',
          items: [
            { q: 'It’s a lovely day, ___?', a: ['isn’t it', 'isn\'t it'], why: 'Positive with *is*: *isn’t it?*' },
            { q: 'You don’t eat meat, ___?', a: ['do you'], why: 'Negative with *don’t*: *do you?*' },
            { q: 'She has moved to Berlin, ___?', a: ['hasn’t she', 'hasn\'t she'], why: 'Present perfect with *has*: *hasn’t she?*' },
            { q: 'They went to the party, ___?', a: ['didn’t they', 'didn\'t they'], why: 'Past simple: *didn’t they?*' },
          ],
        },
      ],
    },
    {
      title: 'Friends for fifty years',
      blocks: [
        {
          t: 'reading',
          title: 'A newspaper story',
          md: 'Margaret and Joan met on their first day at school in 1974. They sat next to each other because they were the only two girls with red hair. They have been friends ever since.\n\nOver fifty years they have lived in different countries, but they have never lost touch. They wrote letters for years, and now they video-call every Sunday. “We fell out once, about a boy, but we made up after a week,” Joan laughs.\n\nLast month they celebrated their friendship with a trip to the town where they grew up. “She knows me better than anyone, doesn’t she?” Margaret says to Joan.',
        },
        {
          t: 'ex',
          kind: 'tf',
          h: 'Are the sentences true, false or not given?',
          ng: true,
          items: [
            { q: 'They met at school.', a: 't', why: '*met on their first day at school in 1974*.' },
            { q: 'They have always lived in the same town.', a: 'f', why: '*they have lived in different countries*.' },
            { q: 'They have never had an argument.', a: 'f', why: '*We fell out once, about a boy*.' },
            { q: 'They are planning another trip next year.', a: 'ng', why: 'The text says nothing about next year.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Speaking Part 1',
      blocks: [
        {
          t: 'text',
          md: 'In B1 Preliminary Speaking Part 1 the examiner asks about you: where you live, your studies or work, your free time. Answer with a reason or an example. When you talk with a partner, tags help the conversation feel natural: *You like sport, don’t you?*\n\n*Tell me about your best friend.*\n\n*How often do you see your friends?*\n\n*What do you usually do together?*',
        },
        { t: 'tip', art: 'owl', md: 'In Speaking Part 1, give **two or three sentences** for each answer. One-word answers do not show your English.' },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Check the facts',
      md: 'Before the activity, write ten things you think are true about the student. Check each one with a tag (*You’ve got a brother, haven’t you?*); the student answers and adds a detail. Then the student checks ten facts about you. Practise both intonations.',
    },
    small: {
      title: 'What do we know?',
      md: 'Each student writes five things they think they know about a classmate, then checks them with question tags in pairs (*You started working here last year, didn’t you?*). Report the biggest surprise to the group.',
    },
    group: {
      title: 'Interview the friends',
      md: 'In breakout rooms, one student is Margaret or Joan from the reading; the others interview her with questions and tags (*You met at school, didn’t you?*). Swap roles. Back together, each room shares one new detail they invented.',
    },
  },
  homework: {
    book: 'u11:p4',
    md: 'Finish book lesson 4 of unit 11. Then write a short conversation (eight lines) between two old friends who meet after many years, with at least five question tags.',
  },
};
