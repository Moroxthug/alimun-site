// English B2, class 52 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c52',
  focus: 'By the end of the class every student can talk about two or more things with *both, either, neither, each, every, all* and *none*, uses the right verb form after each (*neither of them is / are*, *each of the trains has*), and chooses between *each* and *every*, *all* and *none* without hesitating when comparing travel options.',
  tips: [
    '**Both, either, neither** are for **two** things; **all, none** are for three or more. Many learners say *both of the three*. Draw two and three circles on the board.',
    '*Neither… nor* takes a positive verb: *Neither Tom nor I **have** a car*, not *haven’t*. Double negatives are a frequent mistake.',
    '*Each* looks at things one by one, *every* at the whole group: *Each room has its own shower* / *Every room is full*. *Each* can be used with *of the*, *every* cannot.',
    'After *neither of*, *none of*, both singular and plural verbs are heard; in the exam the singular is the safer choice in formal writing.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show two travel options (train and plane to the same city). Ask: *What do they have in common? What is different?*' },
    { min: 12, title: 'Two or more', md: 'Board page 1. Go through the table with the circles; students make one sentence about their family with each word.' },
    { min: 10, title: 'Practice', md: 'Board page 2. The class solves the exercises; students explain the number (two or more).' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: Use of English Part 2 open cloze with these words. Students work alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student compares two places they have travelled to with *both* or *neither*. Set the homework.' },
  ],
  board: [
    { title: 'Two or more?', blocks: [
      { t: 'table', caption: 'Words for groups', explain: ['head', 'col1'], head: ['Word', 'Used for', 'Example'], rows: [
        ['both (of)', 'two, positive', 'Both trains are fast.'],
        ['either (of)', 'one or the other of two', 'You can take either route.'],
        ['neither (of)', 'not one and not the other of two', 'Neither hotel has a pool.'],
        ['each', 'every one, seen separately', 'Each passenger gets a ticket.'],
        ['every', 'all, seen as a group (no of)', 'Every flight was cancelled.'],
        ['all (of) / none (of)', 'three or more', 'None of the buses was on time.'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'I asked my two brothers, but ___ of them could drive me to the airport.', o: ['neither', 'none', 'either'], why: 'Two people, and the answer is negative: *neither*.' },
        { q: '___ of the five hotels we called had a free room.', o: ['None', 'Neither', 'Either'], why: 'More than two: *none*.' },
        { q: 'You can pay by card or in cash; ___ is fine.', o: ['either', 'both', 'each'], why: 'One or the other of two: *either*.' },
        { q: '___ room has its own balcony.', o: ['Each', 'All', 'Both'], why: 'One by one, with a singular noun: *each* (or *every*).' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Neither Tom nor I [don’t have] a passport.', a: ['have'], why: '*Neither… nor* is already negative; the verb is positive.' },
        { s: '[Every of] the passengers was tired.', a: ['Each of', 'All of'], why: '*Every* cannot be followed by *of*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'tip', art: 'owl', md: 'Part 2 gaps are often small grammar words. Read the whole sentence: is it about two things or more? Positive or negative? Is *of* after the gap?' },
      { t: 'ex', kind: 'gap', h: 'In the format of B2 First Reading and Use of English Part 2: write one word in each gap.', items: [
        { q: 'My parents both love travelling, but ___ of them likes flying.', a: ['neither'], why: 'Two people, negative meaning: *neither*.' },
        { q: '___ single seat on the train was taken.', a: ['Every'], why: '*Every single* + singular noun, no *of*.' },
        { q: 'We visited three cities, and ___ of them was as beautiful as Lisbon.', a: ['none'], why: 'More than two, negative: *none*.' },
        { q: 'You can take ___ the coast road or the motorway.', a: ['either'], why: '*Either… or* for two options.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Compare and choose', md: 'Show the student two holiday options and then four cities in the chat. They compare each set aloud with the six words, then choose one and explain why. Then they describe two members of their family with *both* and *neither*.' },
    small: { title: 'Find what we share', md: 'In pairs, students find three things they both do and three things neither of them does, then report to the group (*Both of us… Neither of us…*). Finish with the whole group: *All of us… None of us…*.' },
    group: { title: 'Class survey', md: 'In breakout rooms of four, students ask each other five travel questions and write sentences with *all, none, both, neither* and *each* about their room. Back together, each room reads its two most surprising sentences.' },
  },
  homework: { book: 'u11:p1', md: 'Finish book lesson 1 of unit 11. Then compare two places you know in 80 words, using at least four of the words from today.' },
};
