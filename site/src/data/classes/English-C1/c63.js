// English C1, class 63 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c63',
  focus: 'By the end every student says how much and how many precisely and in the right register: *a great deal of, a large number of, numerous, the vast majority of, the bulk of, a handful of, hardly any, next to no, the odd*, and *few* or *little* without *a* for a negative view. They also make verbs agree after *the majority of, a number of* and *the number of*. The speaking goal: talk about money and spending in their town with exact quantities, without inventing figures.',
  tips: [
    'Start every choice with the noun: countable plural (*shops, loans*) or uncountable (*money, advice, debt*). *A great deal of people* is the mistake you will hear most.',
    '*A number of* banks **have** closed (several, plural); *the number of* banks **has** fallen (the figure, singular). Write both on the board and leave them there all class.',
    '*Few* and *little* without *a* carry a negative attitude (not enough): *Few people saved anything.* With *a* they are neutral or positive. Ask students how the speaker feels.',
    'Register: *a great deal of* and *numerous* are formal; *loads of* and *tons of* are informal. Students will need the formal ones in the report in lesson 4.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How do people in your town spend their money at weekends? Is it changing?* Ask for answers without numbers: *most people, hardly anyone, a handful of…*' },
    { min: 12, title: 'How much and how many', md: 'Show board page 1. Go through the table, then students choose the quantifiers alone and explain one choice each.' },
    { min: 10, title: 'Agreement', md: 'Show board page 2. Students fix the mistakes in pairs and say whether the noun is countable or uncountable.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then count the words together. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student describes their own spending last month in one sentence with two quantifiers. Set the homework.' },
  ],
  board: [
    { title: 'How much and how many', blocks: [
      { t: 'table', caption: 'Quantifiers by noun type', explain: ['head', 'col1', 'col2'], head: ['Quantifier', 'Noun', 'Meaning'], rows: [
        ['a great deal of / a large amount of', 'uncountable', 'a lot (formal)'],
        ['a large number of / numerous', 'plural', 'a lot (formal)'],
        ['the vast majority of / the bulk of', 'plural or uncountable', 'almost all'],
        ['a handful of', 'plural', 'a very small number'],
        ['hardly any / next to no', 'both', 'almost none'],
        ['the odd', 'singular countable', 'an occasional one'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right quantifier.', items: [
        { q: 'There has been ___ interest in the new savings account.', o: ['a great deal of', 'a large number of', 'numerous'], why: '*Interest* here is uncountable.' },
        { q: '___ students now work part-time to cover their rent.', o: ['Many', 'Much', 'A great deal of'], why: 'A countable plural noun: *many*.' },
        { q: 'There were ___ complaints, so the bank kept the new charges.', o: ['few', 'little', 'a little'], why: 'Countable, and not enough to change anything: *few*.' },
        { q: 'After the holiday we had ___ money left.', o: ['very little', 'very few', 'a number of'], why: '*Money* is uncountable: *very little*.' },
      ] },
    ] },
    { title: 'Agreement and common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'A number of local firms [has] closed this year.', a: ['have'], why: '*A number of* means several: plural verb.' },
        { s: 'The majority of the money [are] spent on wages.', a: ['is'], why: 'The verb agrees with *money*, which is uncountable.' },
        { s: 'There are [less] buses on Sundays now.', a: ['fewer'], why: '*Fewer* with plural nouns in careful English.' },
        { s: 'I’ve still got [a few] cash in my wallet.', a: ['a little', 'some'], why: '*Cash* is uncountable: *a little*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'Almost all the residents voted against the plan. (The … voted against the plan.)', cue: 'VAST', a: ['The vast majority of the residents voted against the plan.', 'The vast majority of residents voted against the plan.'], why: '*the vast majority of* = almost all.' },
        { q: 'There were almost no customers in the shop. (There were … in the shop.)', cue: 'HARDLY', a: ['There were hardly any customers in the shop.'], why: '*hardly any* = almost none.' },
        { q: 'Very few people came to the meeting. (Only … to the meeting.)', cue: 'HANDFUL', a: ['Only a handful of people came to the meeting.'], why: '*a handful of* = a very small number.' },
        { q: 'They spent a lot of money on the project. (A great … on the project.)', cue: 'DEAL', a: ['A great deal of money was spent on the project.'], why: '*a great deal of* + uncountable noun, in the passive.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 the word given often decides the grammar of the whole answer. *DEAL* tells you *a great deal of* and an uncountable noun; *HANDFUL* tells you *a handful of* and a plural.' },
    ] },
  ],
  activities: {
    one: { title: 'My money map', md: 'The student describes where their money goes in a typical month (they can keep it vague or invent it). Ask for quantifiers, not figures: *What takes the bulk of it? Is there anything you spend next to nothing on? Do you buy the odd treat?* Note every quantifier and correct agreement at the end.' },
    small: { title: 'Survey without numbers', md: 'Each student asks the group one question about spending (*Who pays for streaming services? Who uses cash?*). The student then reports the answer with a quantifier: *The vast majority of us…*, *Only a handful…*, *Hardly anyone…*. The group checks the verb agreement.' },
    group: { title: 'The high street', md: 'Breakout rooms of three describe the main shopping street of a town they know in five sentences, with at least five different quantifiers and no numbers. Back together, each room reads its description and the class corrects any mistakes.' },
  },
  homework: { book: 'u14:p1', md: 'Finish book lesson 1 of unit 14 if needed, then do lesson 2 (Nowhere near as cheap as it looks). Write six sentences about how people in your country spend or save money, each with a different quantifier from today.' },
};
