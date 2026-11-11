// English C1, class 6 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c06',
  focus: 'By the end every student chooses between *used to*, *would* and the past simple for past habits and states, shows an attitude to a habit with *was forever* + *-ing*, and talks about plans seen from the past with *was going to*, *was about to*, *was on the point of*, *was to* and *was to have*. The speaking goal: tell the story of a childhood routine and of a plan that never happened.',
  tips: [
    'The one rule students forget: *would* is for repeated actions only, never for states. *I used to have long hair*, not *I would have long hair*.',
    '*Would* sounds nostalgic and is typical of storytelling, often after *used to* has set the scene: *We used to spend August on the coast. We’d get up at six…*',
    '*Was to* (what really happened later) and *was to have* + past participle (a plan that failed) are mostly written. Use a short biography to show *was to*, and a cancelled event to show *was to have*.',
    'Watch for *be used to* + *-ing* (be accustomed to) mixed with *used to* + infinitive (past habit). Contrast them once, clearly, then move on.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What did a typical Sunday look like when you were about ten?* Students answer in two or three sentences. Write one *used to* and one *would* sentence on the board.' },
    { min: 12, title: 'Habits, then and now', md: 'Show board page 1. Students choose the forms, then say which ones also work with a different form, and how the meaning changes.' },
    { min: 10, title: 'The future seen from the past', md: 'Show board page 2. Students fix the mistakes, then each tells the class about something they were going to do but never did.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone and count their words, then compare.' },
    { min: 5, title: 'Close', md: 'Each student finishes: *I was on the point of… when…* Set the homework.' },
  ],
  board: [
    { title: 'Habits, then and now', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the form that fits best.', items: [
        { q: 'When we were students, we ___ argue about politics until dawn.', o: ['would', 'were used to', 'had'], why: 'A repeated past action: *would* + infinitive.' },
        { q: 'My grandmother ___ a small bakery in the village.', o: ['used to own', 'would own', 'was owning'], why: '*Own* is a state: *used to*, not *would*.' },
        { q: 'He ___ borrowing money and never paying it back.', o: ['was forever', 'would forever', 'used to forever'], why: '*Was forever* + *-ing* shows that the habit annoyed people.' },
        { q: 'I ___ call you last night, but it got too late.', o: ['was going to', 'am going to', 'used to'], why: 'A plan from the past that did not happen: *was going to*.' },
      ] },
    ] },
    { title: 'The future seen from the past', blocks: [
      { t: 'examples', items: [
        { s: 'She **was on the verge of** tears when the results came through.', n: 'Something that almost happened at that moment.' },
        { s: 'He left Vienna in 1938. He **was never to see** his parents again.', n: '*Was to*: what really happened later, seen from that time.' },
        { s: 'The festival **was to have opened** on Friday, but the storm put an end to it.', n: '*Was to have* + past participle: a plan that did not happen.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She was [on the point to resign] when they offered her a promotion.', a: ['on the point of resigning'], why: '*On the point of* + *-ing*.' },
        { s: 'The wedding [was to take] place in June, but it was cancelled.', a: ['was to have taken', 'was supposed to take', 'was going to take'], why: 'A plan that failed: *was to have* + past participle.' },
        { s: 'As a child I [would live] in a flat above a shop.', a: ['used to live', 'lived'], why: 'A past state: not *would*.' },
        { s: 'They had no idea that they [are to] meet again years later.', a: ['were to', 'would'], why: 'The future seen from the past: *were to*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'I very nearly gave up the course in my first year.', cue: 'verge', gap: 'In my first year I ___ up the course.', a: ['was on the verge of giving'], why: '*Be on the verge of* + *-ing* = be about to.' },
        { q: 'The plan was for the new bridge to open in 2020, but it didn’t.', cue: 'have', gap: 'The new bridge ___ in 2020.', a: ['was to have opened', 'was supposed to have opened', 'was meant to have opened'], why: 'A plan that did not happen: *was to have* + past participle.' },
        { q: 'My father’s constant whistling in the kitchen drove us mad.', cue: 'forever', gap: 'My father ___ in the kitchen, which drove us mad.', a: ['was forever whistling'], why: '*Was forever* + *-ing* for an irritating habit.' },
        { q: 'Walking to school every day was nothing unusual for me as a child.', cue: 'used', gap: 'As a child I ___ school every day.', a: ['used to walk to', 'was used to walking to'], why: '*Used to* + infinitive for a past habit; *was used to* + *-ing* also works here, meaning it felt normal.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 4** the word given often signals a fixed pattern (*verge*, *point*, *forever*). Write the whole pattern, including the preposition and the *-ing* form, then count: three to six words.' },
    ] },
  ],
  activities: {
    one: { title: 'Then and now', md: 'The student describes a place or routine from their childhood with *used to* and *would*, then a plan their family had that never happened (*We were to have moved to…*). Ask follow-up questions that need the future in the past: *What were you about to do when…?* Note forms for feedback.' },
    small: { title: 'Annoying habits', md: 'Each student describes, with humour, a family member or flatmate with an irritating habit (*She was forever leaving the lights on*). The group asks questions and votes for the most annoying habit. Then each student says one thing they used to do that they are glad they stopped.' },
    group: { title: 'The plans that failed', md: 'In breakout rooms of three, students invent the story of an event that was to have happened but never did (a concert, a wedding, an expedition): what was planned, what they were about to do when it went wrong, what happened instead. Each room tells its story in one minute.' },
  },
  homework: { book: 'u2:p1', md: 'Finish lesson 1 of unit 2 if needed, then do lesson 2 (Down the hill came the cart). Write about 120 words about a routine from your past and a plan that never happened, using *used to*, *would* and at least two forms of the future in the past.' },
};
