// English B1, class 49 (docs/LESSONS_PLAN.md). Review of units 9 and 10. Draft for the owner's review.
export const LESSON = {
  id: 'c49',
  focus: 'A speaking-heavy review of units 9 and 10. By the end of the class every student can tell a past story with the past simple, past continuous and past perfect and clear time words, and can talk about technology with the zero conditional, *-ing* forms and phrasal verbs. The teacher listens for the most common errors and corrects them together at the end.',
  tips: [
    'Most of the class is speaking. Keep a list of mistakes as you listen and correct them in the last part of the class.',
    'The mistakes to watch: past continuous where the past simple is needed (*I was seeing an accident*), missing past perfect after *by the time*, infinitive after a preposition (*good at fix*), and *turn on it*.',
    'Mix partners often, and give quieter students the first turn in each activity.',
    'Remind students that the two unit tests are in the book; today is practice for them.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student tells one sentence about something that happened while they were using their phone this week.' },
    { min: 10, title: 'Mixed practice', md: 'Board page 1. Students choose the right form and explain why.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 10, title: 'Fix it', md: 'Board page 2. Fix the typical mistakes, then add the ones you heard.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 6, open cloze mixing both units.' },
    { min: 5, title: 'Close', md: 'Each student names one thing they now say better. Set the homework.' },
  ],
  board: [
    {
      title: 'Units 9 and 10 together',
      blocks: [
        {
          t: 'ex',
          kind: 'choice',
          h: 'Choose the best answer.',
          items: [
            { q: 'I ___ to work when my phone rang.', o: ['was cycling', 'cycled', 'had cycled'], why: 'The longer background action: past continuous.' },
            { q: 'By the time I found my charger, the battery ___.', o: ['had died', 'was dying', 'dies'], why: 'Before another past moment: past perfect.' },
            { q: 'If you hold this button, the phone ___.', o: ['restarts', 'will restarted', 'restarted'], why: 'How it works: zero conditional, present simple.' },
            { q: 'She’s really good at ___ problems.', o: ['solving', 'solve', 'to solve'], why: '*good at* + *-ing*.' },
            {
              q: 'My laptop is slow, so I’m going to ___.',
              o: ['back up my files and reset it', 'back up it and reset', 'backing my files up it'],
              why: 'Noun object after *back up*; *it* would need to go in the middle.',
            },
          ],
        },
      ],
    },
    {
      title: 'Fix it',
      blocks: [
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'When I arrived, the meeting [already finished].', a: ['had already finished'], why: 'It finished before I arrived: past perfect.' },
            { s: 'I’m tired of [wait] for the update.', a: ['waiting'], why: 'After a preposition: *-ing*.' },
            { s: 'It’s cold. Can you [turn on it]?', a: ['turn it on'], why: 'Pronoun in the middle.' },
            { s: '[At the end], we fixed the problem.', a: ['In the end'], why: 'Finally, after difficulties: *in the end*.' },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'Check three things in every story: the **background** (past continuous), what happened **before** (past perfect), and **time words** for the order.',
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 6',
      blocks: [
        {
          t: 'reading',
          title: 'A blog post',
          md: 'Last week my laptop stopped working while I (1) ___ writing an important report. Luckily, I had backed (2) ___ my files the day before. I’m not very good (3) ___ fixing computers, so I took it to a shop. (4) ___ the end, the problem was a broken cable!',
        },
        {
          t: 'ex',
          kind: 'gap',
          h: 'In the format of B1 Preliminary Reading Part 6: write one word in each gap.',
          items: [
            { q: '(1) while I ___ writing', a: ['was'], why: 'Past continuous: *was writing*.' },
            { q: '(2) I had backed ___ my files', a: ['up'], why: '*back up* your files.' },
            { q: '(3) not very good ___ fixing', a: ['at'], why: '*good at* + *-ing*.' },
            { q: '(4) ___ the end, the problem was', a: ['In'], why: '*In the end* = finally.' },
          ],
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Two stories, two problems',
      md: 'The student tells you one story from their past (eight sentences, three tenses, four time words) and explains one piece of technology they use at work or home (zero conditional and phrasal verbs). Ask questions to make them extend each answer. End with the three mistakes you noted.',
    },
    small: {
      title: 'Story and gadget rounds',
      md: 'Round 1: each student tells a two-minute story about a day when technology went wrong. Round 2: each student explains a gadget or app to the group as if to a grandparent. The group asks *What happens if…?* questions.',
    },
    group: {
      title: 'Review challenge',
      md: 'In breakout rooms of three or four, students take turns with cards in the chat (*Tell a story that ends with "In the end…"*, *Explain how a dishwasher works*, *Describe what you are good at and tired of*). Each room writes its three best sentences in the chat; correct them together on the board.',
    },
  },
  homework: {
    book: 'u9 u10',
    md: 'Do the unit 9 and unit 10 tests in the book (aim for 70% or more in each). Then write a short story of about 100 words that begins: *My phone was ringing when I woke up.*',
  },
};
