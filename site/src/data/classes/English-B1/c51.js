// English B1, class 51 (docs/LESSONS_PLAN.md). Conversation class: stories, plans and technology (units 7 to 10). Draft for the owner's review.
export const LESSON = {
  id: 'c51',
  focus: 'A fluency class. Students talk for most of the hour about stories from their lives, their plans and the technology they use, using the language of units 7 to 10 naturally (relative clauses, future forms, the second conditional, narrative tenses, the zero conditional, phrasal verbs). Accuracy comes last: a short correction slot at the end with the mistakes the teacher noted.',
  tips: [
    'Do not correct during the speaking. Write down mistakes and good phrases; deal with them in the last ten minutes.',
    'Give students thinking time and a simple frame before each round (*one story, one detail, one feeling*). It makes quieter students more confident.',
    'Ask follow-up questions that need longer answers: *What happened next? Why? What would you do differently?*',
    'Balance speaking time: a student who talks a lot can become the one who asks the questions.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Each student answers quickly: *What was the last thing you looked up online?*' },
    { min: 15, title: 'Round 1: stories', md: 'Board page 1. Students tell a story from the list, using the story frame.' },
    { min: 15, title: 'Round 2: plans and dreams', md: 'Board page 2. Questions about plans, with *going to*, *will* and the second conditional.' },
    { min: 10, title: 'Round 3: technology', md: 'Board page 3. Quick-fire questions and opinions.' },
    { min: 10, title: 'Correction slot', md: 'Write the mistakes you noted on the board. Students correct them in pairs; praise the best phrases you heard.' },
    { min: 5, title: 'Close', md: 'Each student says one new thing they learned about a classmate. Set the homework.' },
  ],
  board: [
    {
      title: 'Round 1: tell a story',
      blocks: [
        {
          t: 'text',
          md: 'Choose one and talk for two minutes:\n\nA time you got lost.\n\nThe best day of your last holiday.\n\nA time technology let you down.\n\nSomeone who helped you when you needed it.',
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'A good story: **set the scene** (where, when, what was happening), **the event** (what happened), **the end** (how you felt, what you learned).',
        },
      ],
    },
    {
      title: 'Round 2: plans and dreams',
      blocks: [
        {
          t: 'text',
          md: 'What are you going to do next summer?\n\nWhere do you think you will be in five years?\n\nIf you could live in any city, which would you choose and why?\n\nIf you had a free day tomorrow, what would you do?',
        },
      ],
    },
    {
      title: 'Round 3: technology',
      blocks: [
        {
          t: 'text',
          md: 'Which app do you use most? What happens if you don’t use it for a day?\n\nWhat technology are you good at using? What do you find difficult?\n\nIs it a good idea to switch off your phone at the weekend?',
        },
        {
          t: 'ex',
          kind: 'match',
          h: 'Useful phrases for keeping a conversation going: match them with their use.',
          pairs: [
            ['Really? What happened then?', 'ask for more of a story'],
            ['That’s interesting, because…', 'react and add your own idea'],
            ['What about you?', 'give your partner a turn'],
            ['I see what you mean, but…', 'disagree politely'],
          ],
        },
      ],
    },
    {
      title: 'Correction slot',
      blocks: [
        {
          t: 'ex',
          kind: 'fix',
          h: 'Typical mistakes from today: find and fix them.',
          items: [
            { s: 'If I [would have] more time, I would learn the guitar.', a: ['had'], why: 'Second conditional: *if* + past simple.' },
            { s: 'I was [study] when you called.', a: ['studying'], why: 'Past continuous: *was* + *-ing*.' },
            { s: 'My friend, [that] lives in Milan, works in tech.', a: ['who'], why: 'Non-defining clause about a person: *who*, not *that*.' },
          ],
        },
        { t: 'text', md: 'Add the mistakes you heard today below and correct them together.' },
      ],
    },
  ],
  activities: {
    one: {
      title: 'A real conversation',
      md: 'Go through the three rounds as a natural conversation: the student tells a story, you react and ask follow-up questions; then swap. Speak at natural speed. Take notes and use the last ten minutes for corrections and new words they needed.',
    },
    small: {
      title: 'Rotating pairs',
      md: 'For each round, students work in pairs for five minutes, then change partners. They use the conversation phrases on board page 3. At the end of each round, one student tells the group the most interesting thing they heard.',
    },
    group: {
      title: 'Conversation rooms',
      md: 'Breakout rooms of three or four for each round (twelve to fifteen minutes each). One student in each room is the host who asks the questions and makes sure everyone speaks. Visit each room to listen and note mistakes for the correction slot.',
    },
  },
  homework: {
    book: 'u7 u8 u9 u10',
    md: 'Record yourself (on your phone) telling one story from Round 1 in about two minutes. Listen back and write down two mistakes you made and the correct version. Bring them to the next class.',
  },
};
