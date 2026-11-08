// English B1, class 47 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c47',
  focus: 'By the end of the class every student can use the common phrasal verbs for technology (*turn on/off*, *log in/out*, *set up*, *back up*, *run out of*, *plug in*, *switch off*, *look up*) in the right meaning, and put a pronoun object in the right place (*turn it on*, not *turn on it*). They can explain a simple tech problem and its solution with these verbs.',
  tips: [
    'The rule students need most: with a **pronoun**, the object goes **in the middle** of separable verbs: *turn it off*, *back them up*. Many learners say *turn off it*.',
    '**Run out of** and **log in to** are three-part or fixed patterns; they do not separate: *We’ve run out of paper*, not *run paper out of*.',
    'Teach phrasal verbs in pairs of opposites where possible (*log in / log out*, *turn on / turn off*, *plug in / unplug*). Pairs are easier to remember.',
    'Ask for real stories: a laptop that would not turn on, a phone that ran out of battery at the wrong moment. Real stories make the verbs memorable.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Mime actions (turning on a computer, logging in, plugging in a charger). Students say the phrasal verb.' },
    { min: 10, title: 'The verbs', md: 'Board page 1. Go through the meanings; students make one true sentence each.' },
    { min: 10, title: 'Object position', md: 'Board page 2. Explain the pronoun rule; students fix and order the sentences.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 5, multiple-choice cloze with phrasal verbs.' },
    { min: 5, title: 'Close', md: 'Each student describes one tech problem from this week in two sentences. Set the homework.' },
  ],
  board: [
    {
      title: 'Phrasal verbs for technology',
      blocks: [
        {
          t: 'ex',
          kind: 'match',
          h: 'Match the phrasal verb and its meaning.',
          pairs: [
            ['log in', 'enter your name and password'],
            ['back up', 'make a copy of your files'],
            ['set up', 'prepare a new device or account to use'],
            ['run out of', 'have none left'],
            ['look up', 'find information, for example online'],
          ],
        },
      ],
    },
    {
      title: 'Where does the object go?',
      blocks: [
        {
          t: 'text',
          md: 'With a **noun**, the object can go after the verb or in the middle: *turn off the light* or *turn the light off*.\n\nWith a **pronoun** (*it, them, him*), it must go **in the middle**: *turn it off*, never *turn off it*.',
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'The TV is too loud. Can you [turn down it]?', a: ['turn it down'], why: 'With a pronoun, the object goes in the middle.' },
            { s: 'These photos are important. I need to [back up them].', a: ['back them up'], why: '*back them up*: pronoun in the middle.' },
            { s: 'Oh no, we’ve [run out] coffee.', a: ['run out of'], why: '*run out of* + the thing you have none of.' },
          ],
        },
        {
          t: 'ex',
          kind: 'order',
          h: 'Put the words in order.',
          items: [
            { a: 'I set it up last night.', why: 'Pronoun object in the middle of *set up*.' },
            { a: 'Please log out before you leave.', why: '*log out* has no object here.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 5',
      blocks: [
        {
          t: 'reading',
          title: 'A short article',
          md: 'My new phone arrived yesterday. It took me an hour to (1) ___ it up, but now it works perfectly. The only problem is the battery: it (2) ___ out very quickly. My brother says I should (3) ___ off the apps I am not using.',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'In the format of B1 Preliminary Reading Part 5: choose the right word for each gap.',
          items: [
            { q: '(1) to ___ it up', o: ['set', 'put', 'make'], why: 'Prepare a new device: *set up*.' },
            { q: '(2) it ___ out very quickly', o: ['runs', 'goes', 'takes'], why: 'A battery that has no power left *runs out*.' },
            { q: '(3) I should ___ off the apps', o: ['switch', 'close', 'stop'], why: '*switch off* is the phrasal verb; *close* does not take *off*.' },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'In Reading Part 5 the options are often verbs that look right alone. Check which one makes the **phrasal verb** with the next word: *set up*, *run out*, *switch off*.',
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Help desk',
      md: 'You are a customer with three tech problems (a laptop that will not turn on, a forgotten password, a phone full of photos). The student is the help desk and solves each one with at least two phrasal verbs. Swap roles. Correct pronoun positions as you go.',
    },
    small: {
      title: 'Phrasal verb stories',
      md: 'Each student gets three phrasal verbs in the chat and tells a short true or invented story about a tech disaster using all three. The others listen and note the verbs; they ask one question each.',
    },
    group: {
      title: 'Instructions for a new colleague',
      md: 'In breakout rooms, each room writes six instructions for a new colleague’s first day with the office computer, using six different phrasal verbs (*First, plug it in…*). Back together, rooms read their instructions; check object positions on the board.',
    },
  },
  homework: {
    book: 'u10:p3',
    md: 'Finish book lesson 3 of unit 10. Then write a short email (about 70 words) to a friend explaining how to set up a new phone, using at least five phrasal verbs, two with *it* or *them*.',
  },
};
