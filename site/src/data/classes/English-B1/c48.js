// English B1, class 48 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c48',
  focus: 'By the end of the class every student can read an opinion article about screen time, find the writer’s opinion and the reasons behind it, and give their own opinion in a short discussion with phrases like *In my opinion*, *I agree that…, but*, *The problem is that…*, using the unit’s grammar (zero conditional, *-ing* forms, phrasal verbs).',
  tips: [
    'B1 readers often take one sentence as the writer’s opinion. Teach them to look at the **beginning and the end** of the article, where the opinion is usually clearest.',
    'In discussion, students often say *I am agree*. Correct it every time: **I agree** (no *am*).',
    'Give students a minute to think before each discussion question. Better answers come after a short silence.',
    'Use the article only as a starting point; most of the class time is speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How many hours a day do you look at a screen?* Students guess, then check on their phones if they want.' },
    { min: 15, title: 'Reading', md: 'Board page 1. Students read the article and answer the questions.' },
    { min: 10, title: 'Opinion phrases', md: 'Board page 2. Go through the phrases; students complete them with their own ideas.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Speaking Part 4, a short discussion.' },
    { min: 5, title: 'Close', md: 'Each student says one change they will make to their screen habits. Set the homework.' },
  ],
  board: [
    {
      title: 'How much screen time is too much?',
      blocks: [
        {
          t: 'reading',
          title: 'An article',
          md: 'Most of us look at a screen for more than seven hours a day. Is that a problem? Not always. Working on a computer or video-calling your family is not the same as scrolling for hours.\n\nThe real problem is what we stop doing. If we spend the evening on our phones, we sleep later and talk less to the people around us. Many people say they feel tired of being online all the time.\n\nMy advice is simple: switch your phone off one hour before going to bed, and keep it out of the bedroom. You do not need to give up technology; you need to decide when to use it.',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'Choose the best answer.',
          items: [
            {
              q: 'What is the writer’s main opinion?',
              o: [
                'How we use screens matters more than the number of hours.',
                'Seven hours a day is always too much.',
                'People should stop using technology.',
              ],
              why: '*Working on a computer… is not the same as scrolling*; *You do not need to give up technology*.',
            },
            {
              q: 'What does the writer say is the real problem?',
              o: ['the things we stop doing', 'the price of phones', 'working on computers'],
              why: '*The real problem is what we stop doing.*',
            },
            {
              q: 'What is the writer’s advice?',
              o: [
                'Switch off the phone before bed and keep it out of the bedroom.',
                'Never use a phone in the evening.',
                'Buy a phone with a smaller screen.',
              ],
              why: 'The last paragraph gives this advice.',
            },
          ],
        },
      ],
    },
    {
      title: 'Giving an opinion',
      blocks: [
        {
          t: 'table',
          caption: 'Useful phrases',
          explain: ['head', 'col1'],
          head: ['Phrase', 'Use it to'],
          rows: [
            ['In my opinion, …', 'give your opinion'],
            ['I agree that…, but…', 'agree, then add a different point'],
            ['I’m not sure about that because…', 'disagree politely'],
            ['The problem is that…', 'explain what is wrong'],
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'I [am agree] with the writer.', a: ['agree'], why: '*agree* is a verb: *I agree*, not *I am agree*.' },
            { s: 'In my [opinion I think] phones are useful.', a: ['opinion,'], why: '*In my opinion* already means *I think*; do not use both.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Speaking Part 4',
      blocks: [
        {
          t: 'text',
          md: 'In B1 Preliminary Speaking Part 4 the examiner asks you and your partner more general questions about the topic of Part 3. Give your opinion, a reason and an example, and react to your partner.\n\n*Do you think children spend too much time on screens?*\n\n*Is it possible to be happy without a smartphone?*\n\n*What are the good things about technology in your free time?*',
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'In Speaking Part 4, do not give one-word answers. Use **opinion + reason + example**, then ask your partner: *What do you think?*',
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Discussion with a twist',
      md: 'Discuss the three Speaking Part 4 questions. For each one, the student gives an opinion with a reason and an example; then you take the opposite view and the student must respond politely. Finish with feedback on one opinion phrase they used well.',
    },
    small: {
      title: 'Pairs for Part 4',
      md: 'Students work in pairs as in the exam: one asks a question from board page 3, both answer and react to each other for two minutes. Change pairs for each question. Listen and note good phrases to share at the end.',
    },
    group: {
      title: 'Class survey and debate',
      md: 'In breakout rooms, each room answers three questions about screen habits and agrees on one piece of advice. Back together, each room presents its advice in three sentences; the class decides which advice is the most realistic.',
    },
  },
  homework: {
    book: 'u10:p4',
    md: 'Finish book lesson 4 of unit 10. Then write a short opinion paragraph (about 80 words) answering: *Should phones be allowed at the dinner table?*',
  },
};
