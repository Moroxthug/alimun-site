// English B1, class 54 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c54',
  focus: 'By the end of the class every student can talk about friendships and relationships with the common phrasal verbs from the unit (*get on with*, *fall out with*, *make up*, *look up to*, *grow apart*, *break up*, *count on*, *catch up*) in the right meaning and form, and can tell the story of a friendship in five or six sentences.',
  tips: [
    'Many of these verbs have **three parts** and do not separate: *get on with someone*, *look up to someone*, *fall out with someone*. Learners often drop the last word.',
    'Teach them as a story: you meet, you **get on well**, you **fall out**, you **make up**, years later you **catch up**. A story is easier to remember than a list.',
    'Students may avoid phrasal verbs and use formal verbs (*admire* instead of *look up to*). Both are correct; encourage the phrasal verb in speaking.',
    'Relationships can be personal. Let students talk about characters or "a friend" if they prefer.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who do you get on well with in your family?* Write the phrasal verb on the board.' },
    { min: 10, title: 'The verbs', md: 'Board page 1. Match the verbs with their meanings.' },
    { min: 10, title: 'Practice', md: 'Board page 2. Students complete and fix the sentences.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 5, multiple-choice cloze.' },
    { min: 5, title: 'Close', md: 'Each student says one person they look up to and why. Set the homework.' },
  ],
  board: [
    {
      title: 'Relationships',
      blocks: [
        {
          t: 'ex',
          kind: 'match',
          h: 'Match the phrasal verb and its meaning.',
          pairs: [
            ['get on with', 'have a good relationship with'],
            ['fall out with', 'have an argument and stop being friends'],
            ['make up', 'become friends again after an argument'],
            ['look up to', 'admire and respect'],
            ['catch up', 'talk about what happened since you last met'],
            ['count on', 'trust someone to help you'],
          ],
        },
      ],
    },
    {
      title: 'Practice',
      blocks: [
        {
          t: 'ex',
          kind: 'select',
          h: 'Choose the right words.',
          items: [
            { q: 'I really ___ my older brother; he’s my hero.', o: ['look up to', 'get on', 'make up'], why: 'Admire: *look up to*.' },
            { q: 'They argued last week, but they’ve ___ now.', o: ['made up', 'fallen out', 'grown up'], why: 'Friends again after an argument: *make up*.' },
            { q: 'Let’s meet for coffee and ___.', o: ['catch up', 'count on', 'break up'], why: 'Talk about your news: *catch up*.' },
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'I don’t [get on] my neighbour.', a: ['get on with'], why: '*get on with* + a person.' },
            { s: 'She [fell out] her best friend about money.', a: ['fell out with'], why: '*fall out with* someone.' },
            { s: 'You can always [count] me.', a: ['count on'], why: '*count on* someone.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 5',
      blocks: [
        {
          t: 'reading',
          title: 'A blog post',
          md: 'Jo and I met at school, and we (1) ___ on really well from the first day. At university we (2) ___ out about something silly and didn’t speak for a year. But we (3) ___ up in the end, and now we meet every month to catch up.',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'In the format of B1 Preliminary Reading Part 5: choose the right word for each gap.',
          items: [
            { q: '(1) we ___ on really well', o: ['got', 'went', 'had'], why: '*get on (well)*.' },
            { q: '(2) we ___ out about something silly', o: ['fell', 'broke', 'went'], why: '*fall out* = argue and stop being friends.' },
            { q: '(3) we ___ up in the end', o: ['made', 'did', 'took'], why: '*make up* = become friends again.' },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'In Reading Part 5, when the next word is a **particle** (*on, out, up*), the answer is the verb that makes the right phrasal verb with it.',
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'A friendship story',
      md: 'The student tells the story of a friendship (real or from a film) using at least five phrasal verbs from board page 1. Ask questions that need other verbs (*Did you ever fall out? How did you make up?*). Then you tell a story with three mistakes for the student to correct.',
    },
    small: {
      title: 'Relationship questions',
      md: 'Students ask each other questions with the verbs (*Who do you look up to? Have you ever fallen out with a friend? Who can you always count on?*). Each pair reports one interesting answer to the group.',
    },
    group: {
      title: 'Soap opera',
      md: 'In breakout rooms, each room writes the plot of a short soap opera episode about two friends using six phrasal verbs. Back together, rooms tell their plots; the class votes for the most dramatic one. Check the verbs on the board.',
    },
  },
  homework: {
    book: 'u11:p3',
    md: 'Finish book lesson 3 of unit 11. Then write about a friendship that changed over time (about 80 words), using at least five phrasal verbs from the class.',
  },
};
