// English B1, class 45 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c45',
  focus: 'By the end of the class every student can use the zero conditional (*If / When you press this, it turns off*) for facts, rules and how things work, and can explain how a device or an app works in three or four clear sentences. They also see the difference between the zero conditional (always true) and the first conditional (one future situation).',
  tips: [
    'The zero conditional uses the **present simple in both parts**. Learners often put *will* in the result: *If you heat ice, it will melt* is not wrong, but for a general fact we prefer *it melts*.',
    'In the zero conditional **if** and **when** mean almost the same. Show both on the board so students feel free to use either.',
    'Students who know the first conditional may mix them. Use one contrast pair: *If you press this button, the screen turns off* (always) and *If you press it now, you’ll lose your work* (this time).',
    'Bring real objects: phones, a remote control, a coffee machine. Explaining something real makes the grammar stick.',
  ],
  plan: [
    {
      min: 5,
      title: 'Warm-up',
      md: 'Hold up a phone. Ask: *What happens if you hold this button for five seconds?* Write the answer on the board as a zero conditional.',
    },
    {
      min: 10,
      title: 'Facts and how things work',
      md: 'Board page 1. Go through the rule and the examples; students give one fact about their country (*If it rains in summer, …*).',
    },
    { min: 10, title: 'Zero or first?', md: 'Board page 2. Students choose the form and explain the difference.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 1, short notices and messages.' },
    { min: 5, title: 'Close', md: 'Each student gives one rule from their workplace or home with *If you…, you…*. Set the homework.' },
  ],
  board: [
    {
      title: 'The zero conditional',
      blocks: [
        {
          t: 'text',
          md: 'Use the zero conditional for things that are **always true**: facts, rules and how things work.\n\n**If / When + present simple, present simple**',
        },
        {
          t: 'examples',
          items: [
            { s: 'If you press this button, the screen turns off.', n: 'How a device works.' },
            { s: 'When the battery is low, the light goes red.', n: '*When* means almost the same as *if* here.' },
            { s: 'If you don’t save your work, you lose it.', n: 'A general rule.' },
            { s: 'Water boils if you heat it to 100 degrees.', n: 'The *if* part can come second; then no comma.' },
          ],
        },
      ],
    },
    {
      title: 'Zero or first conditional?',
      blocks: [
        {
          t: 'ex',
          kind: 'select',
          h: 'Choose the right form.',
          items: [
            { q: 'If you leave milk in the sun, it ___ bad.', o: ['goes', 'will go yesterday', 'went'], why: 'A general fact: present simple in both parts.' },
            {
              q: 'If you don’t charge your phone tonight, it ___ off during the meeting tomorrow.',
              o: ['will turn', 'turns', 'turned'],
              why: 'One future situation: first conditional with *will*.',
            },
            { q: 'When you ___ the app, it asks for your password.', o: ['open', 'will open', 'opened'], why: 'Zero conditional: present simple after *when*.' },
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'If you [will press] the red button, the machine stops.', a: ['press'], why: 'No *will* after *if*.' },
            { s: 'When it rains, the streets [got] very busy.', a: ['get'], why: 'A general fact: present simple.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 1',
      blocks: [
        {
          t: 'reading',
          title: 'A notice in an office kitchen',
          md: 'COFFEE MACHINE\nIf the red light comes on, the water tank is empty. Fill it before you press START. Please do not switch the machine off at the wall.',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'In the format of B1 Preliminary Reading Part 1: what does the notice say?',
          items: [
            {
              q: '',
              o: [
                'A red light means you need to add water.',
                'You should turn the machine off after using it.',
                'The machine starts as soon as the red light comes on.',
              ],
              why: '*If the red light comes on, the water tank is empty. Fill it…*',
            },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'In Reading Part 1 the three options often use **words from the text** in a different meaning. Find the sentence in the notice that matches the whole idea, not just one word.',
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'How does it work?',
      md: 'The student chooses three things they use every day (their phone, a washing machine, a banking app) and explains how each works in three zero-conditional sentences. You play a confused user and ask *What happens if…?* questions. Correct any *will* in general facts.',
    },
    small: {
      title: 'Instruction cards',
      md: 'Each student writes a short instruction card for a real device (four sentences with *if* or *when*). Pairs swap cards and try to follow the instructions aloud; they ask a question if something is not clear. Choose the clearest card and put it on the board.',
    },
    group: {
      title: 'House rules',
      md: 'In breakout rooms of three or four, each room writes six zero-conditional rules for an imaginary shared flat (*If you use the last of the milk, you buy more*). Back together, rooms read their rules and the class votes on the fairest flat. Correct forms on the board.',
    },
  },
  homework: {
    book: 'u10:p1',
    md: 'Finish book lesson 1 of unit 10. Then write instructions of about 60 words for something you use at home or at work, with at least four zero-conditional sentences.',
  },
};
