// English B1, class 76 (docs/LESSONS_PLAN.md). Builds on book lesson u16:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c76',
  focus: 'By the end of the class every student can talk about wishes for the present with *I wish* and *If only* + the past simple (*I wish I had more time*), with *were* for *be* (*I wish I were taller*), and can say what they would do if the wish came true, linking to the second conditional.',
  tips: [
    'The past form talks about the present: *I wish I lived by the sea* means I do not live there now. Draw a quick timeline if students are confused.',
    'Correct *I wish I have*: after *wish* the verb moves back to the past.',
    'Both *I wish I was* and *I wish I were* are used; *were* is more formal and is safe in the exam.',
    'Students often confuse *wish* with *hope*. *I hope* is for things that are possible: *I hope it’s sunny tomorrow*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *If you could change one thing about your day, what would it be?* Write two answers as *I wish…* sentences.' },
    { min: 12, title: 'I wish and If only', md: 'Show board page 1. Explain the rule with the table, then students choose the forms.' },
    { min: 10, title: 'Wish or hope?', md: 'Show board page 2. Students choose, then explain the difference in their own words.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: Reading part 6, an open cloze. Use "Everyone solves this", then reveal.' },
    { min: 8, title: 'Close', md: 'Each student says one wish and what they would do if it came true. Set the homework.' },
  ],
  board: [
    { title: 'I wish I had more time', blocks: [
      { t: 'table', caption: 'Wishes about the present', explain: ['head', 'col2'], head: ['Wish', 'The reality now', 'Note'], rows: [
        ['I wish I had more time.', 'I don’t have much time.', 'wish + past simple'],
        ['If only I could drive!', 'I can’t drive.', 'can → could'],
        ['I wish I were taller.', 'I’m not tall.', 'were for every person'],
        ['I wish it wasn’t raining.', 'It is raining now.', 'past continuous for now'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I wish I ___ Japanese.', o: ['spoke', 'speak', 'will speak'], why: 'After *wish*: past simple for the present.' },
        { q: 'If only we ___ a bigger flat!', o: ['had', 'have', 'would have'], why: '*If only* + past simple.' },
        { q: 'She wishes she ___ go to the party, but she has to work.', o: ['could', 'can', 'will'], why: '*can* → *could* after *wish*.' },
      ] },
    ] },
    { title: 'Wish or hope?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
        { q: 'I ___ you have a good holiday!', o: ['hope', 'wish', 'want'], why: 'A real possibility in the future: *hope*.' },
        { q: 'I ___ I didn’t live so far from work.', o: ['wish', 'hope', 'like'], why: 'Not true now: *wish* + past.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I wish I [have] a car.', a: ['had'], why: 'After *wish*, past simple: *had*.' },
        { s: 'I [wish] it doesn’t rain tomorrow.', a: ['hope'], why: 'A real future possibility: *hope*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 6', blocks: [
      { t: 'reading', title: 'A message to a friend', md: 'Hi Leo, I wish you (1) ___ here! The festival is amazing. If only I (2) ___ more money, I would stay another week. The music is so good (3) ___ I don’t want to go home.' },
      { t: 'ex', kind: 'gap', h: 'In the format of B1 Preliminary Reading part 6: write one word in each gap.', items: [
        { q: 'Gap 1: I wish you ___ here!', a: ['were', 'was'], why: '*wish* + past of *be*: *were*.' },
        { q: 'Gap 2: If only I ___ more money.', a: ['had'], why: '*If only* + past simple.' },
        { q: 'Gap 3: so good ___ I don’t want to go home.', a: ['that'], why: '*so* + adjective + *that*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading part 6 you write **one word** only, and it is usually a small grammar word: *that*, *were*, *had*, *the*, *of*. Spelling must be correct.' },
    ] },
  ],
  activities: {
    one: { title: 'Wish list', md: 'The student writes five wishes about their life now (work, home, skills). For each one, ask *What would you do if…?* and get a second-conditional answer. Then swap and the student asks you.' },
    small: { title: 'The genie', md: 'One student is a genie who grants three wishes, but each wish must be a correct *I wish* sentence. The genie can refuse a wrong sentence. Rotate the genie every three wishes.' },
    group: { title: 'Complaints and wishes', md: 'In breakout rooms of three, students list five problems in their town or school and turn each into an *If only…* sentence and a suggestion. Rooms share their best wish in the main room.' },
  },
  homework: { book: 'u16:p1', md: 'Do book lesson 1 of unit 16 (I wish I had more time). Write six wishes: three about you and three about the world, with what would change.' },
};
