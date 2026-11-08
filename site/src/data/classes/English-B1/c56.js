// English B1, class 56 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c56',
  focus: 'By the end of the class every student can talk about amounts precisely with *a few* and *a little* (some, positive), *few* and *little* (not many, negative), *plenty of*, *hardly any*, *too much / too many* and *enough*, choosing the right word for countable and uncountable nouns, and can describe their shopping and spending with them.',
  tips: [
    '**A few / a little** sound positive (some, enough); **few / little** sound negative (not many, not enough). Show the difference with two sentences: *I have a little money, so let’s eat out* / *I have little money, so let’s stay in.*',
    'Learners often use *a few* with uncountable nouns (*a few money*). Keep a countable / uncountable reminder on the board.',
    '**Hardly any** means almost none and is followed by a noun: *There’s hardly any milk.* Learners sometimes add *not*: *There isn’t hardly any*, which is wrong.',
    'Use real contexts: what is in your fridge, how much free time you have, how many apps are on your phone.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is in your fridge right now?* Students answer; write their quantity words on the board.' },
    { min: 10, title: 'Quantifiers', md: 'Board page 1. Go through the table and the difference between *a few* and *few*.' },
    { min: 10, title: 'Practice', md: 'Board page 2. Students choose and fix.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Board page 3: Reading Part 5, multiple-choice cloze.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they have plenty of and one thing they have hardly any of. Set the homework.' },
  ],
  board: [
    {
      title: 'Talking about amounts',
      blocks: [
        {
          t: 'table',
          caption: 'Quantifiers',
          explain: ['head', 'col1', 'col2'],
          head: ['Word', 'With', 'Meaning'],
          rows: [
            ['a few', 'countable: *a few coins*', 'some, a small number (positive)'],
            ['a little', 'uncountable: *a little time*', 'some, a small amount (positive)'],
            ['few / little', 'countable / uncountable', 'not many, not much (negative)'],
            ['plenty of', 'both', 'more than enough'],
            ['hardly any', 'both', 'almost none'],
            ['too much / too many', 'uncountable / countable', 'more than you want'],
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: '**A few** friends: you have some, that’s nice. **Few** friends: you have not many, that’s a pity. The small word **a** makes it positive.',
        },
      ],
    },
    {
      title: 'Practice',
      blocks: [
        {
          t: 'ex',
          kind: 'select',
          h: 'Choose the right word.',
          items: [
            { q: 'Hurry up! We have ___ time before the shop closes.', o: ['very little', 'a few', 'plenty of'], why: 'Almost no time, uncountable: *very little*.' },
            { q: 'Don’t worry, there’s ___ food for everyone.', o: ['plenty of', 'few', 'hardly'], why: 'More than enough: *plenty of*.' },
            { q: 'I bought ___ apples at the market.', o: ['a few', 'a little', 'much'], why: 'Countable, a small number: *a few*.' },
            { q: 'There are ___ people in the shop; it’s nearly empty.', o: ['hardly any', 'plenty of', 'too much'], why: 'Almost none: *hardly any*.' },
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'Can you lend me [a few] money?', a: ['a little', 'some'], why: '*money* is uncountable: *a little*.' },
            { s: 'There [isn’t hardly any] bread left.', a: ['is hardly any'], why: '*hardly any* already means almost none; no *not*.' },
            { s: 'I spend [too many] money on clothes.', a: ['too much'], why: 'Uncountable: *too much*.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 5',
      blocks: [
        {
          t: 'reading',
          title: 'A shopping blog',
          md: 'This month I tried to save money. I made (1) ___ changes: I took lunch to work and walked instead of taking the bus. There were (2) ___ problems at first, but now I have (3) ___ money left at the end of the month.',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'In the format of B1 Preliminary Reading Part 5: choose the right word for each gap.',
          items: [
            { q: '(1) I made ___ changes', o: ['a few', 'a little', 'much'], why: '*changes* is countable: *a few*.' },
            { q: '(2) There were ___ problems at first', o: ['some', 'any', 'much'], why: 'Positive sentence, countable plural: *some*.' },
            { q: '(3) now I have ___ money left', o: ['plenty of', 'many', 'a few'], why: '*money* is uncountable; *plenty of* works with both.' },
          ],
        },
        { t: 'tip', art: 'owl', md: 'In Reading Part 5, check if the noun after the gap is **countable or uncountable**. That often removes two options at once.' },
      ],
    },
  ],
  activities: {
    one: {
      title: 'My week in amounts',
      md: 'The student describes their typical week with eight quantifier sentences (*I have very little free time on Mondays; I drink too much coffee*). Ask follow-up questions; then plan a cheaper, healthier week together using the same words.',
    },
    small: {
      title: 'Fridge and wallet survey',
      md: 'Students ask each other questions (*How much coffee do you drink? How many apps are on your phone? Do you have enough free time?*) and answer with quantifiers. Each student reports two answers with *a few*, *hardly any* or *plenty of*.',
    },
    group: {
      title: 'Party planning',
      md: 'In breakout rooms, each room plans a party for twenty people with a small budget and writes a shopping list with quantifiers (*plenty of water, a few snacks, hardly any meat*). Back together, rooms compare lists and explain their choices; correct quantifiers on the board.',
    },
  },
  homework: {
    book: 'u12:p1',
    md: 'Finish book lesson 1 of unit 12. Then write about your shopping habits (about 80 words) using *a few, a little, plenty of, hardly any* and *too much / too many*.',
  },
};
