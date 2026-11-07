// English A1, class 26 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c26',
  focus: 'By the end of the class every student can say where things are with **in**, **on**, **under**, **next to**, **behind**, **in front of** and **between**, and ask *Where is …? Where are …?* Students should be able to give and follow simple instructions about where things are, quickly and without writing.',
  tips: [
    'The difference between **in** and **on** causes most mistakes: *on the wall*, *on the table* (a surface), *in the box*, *in the drawer* (inside). Speakers of Spanish, Portuguese and Italian have one word (en/em/in) for both, so correct this every time.',
    '**Between** needs two things: *between the sofa and the window*. Learners often say *between the sofa*.',
    '**In front of** has three words; students often say *in front the TV* or *front of*. Drill it as one chunk.',
    'Use real objects on camera (a pen, a cup, a book). Moving them and asking *Where is the pen now?* is faster and clearer than any explanation.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Hold up your phone: *Where is my phone? It’s in my hand.* Put it on the table, under a book, next to a cup. Students say where it is each time.' },
    { min: 10, title: 'Prepositions', md: 'Board page 1. Go through the table with a cup and a box (or a drawing). Students repeat each preposition with a full sentence.' },
    { min: 10, title: 'Where is it?', md: 'Board page 2. Students look at the picture description and solve the exercise on the board together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Common mistakes', md: 'Board page 3. Students find and fix the mistakes, then say each correct sentence aloud.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: an A2 Key style short message with a missing word in each gap.' },
    { min: 5, title: 'Close', md: 'Each student says where their phone is right now. Set the homework.' },
  ],
  board: [
    { title: 'In, on, under …', blocks: [
      { t: 'table', caption: 'Where is the ball?', explain: ['head', 'col1'], head: ['Preposition', 'Meaning'], rows: [
        ['in the box', 'inside it'],
        ['on the box', 'on top of it'],
        ['under the box', 'below it'],
        ['next to the box', 'at the side of it'],
        ['behind the box', 'at the back of it'],
        ['in front of the box', 'at the front of it'],
        ['between the boxes', 'with one box on each side'],
      ] },
      { t: 'tip', art: 'owl', md: 'Use **on** for a surface, even when it is not on top: a picture is **on the wall**, a fly is **on the ceiling**.' },
    ] },
    { title: 'Where is my phone?', blocks: [
      { t: 'reading', title: 'My desk', md: 'My laptop is on the desk. My phone is next to the laptop, and my keys are between the phone and the lamp. There is a bag under the desk. My chair is in front of the desk, and the window is behind it.' },
      { t: 'ex', kind: 'select', h: 'Read the text. Choose the right word.', items: [
        { q: 'The laptop is ___ the desk.', o: ['on', 'under', 'behind'], why: '*My laptop is on the desk.*' },
        { q: 'The keys are ___ the phone and the lamp.', o: ['between', 'next', 'in'], why: 'Two things, one on each side: *between*.' },
        { q: 'The bag is ___ the desk.', o: ['under', 'on', 'in front of'], why: '*There is a bag under the desk.*' },
        { q: 'The window is ___ the desk.', o: ['behind', 'on', 'between'], why: '*the window is behind it*.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The clock is [in] the wall.', a: ['on'], why: 'A wall is a surface: *on the wall*.' },
        { s: 'The cat is [in front the] door.', a: ['in front of the'], why: 'The full form is *in front of*.' },
        { s: 'The lamp is [between the bed].', a: ['between the bed and the window', 'next to the bed'], why: '*between* needs two things; with one thing, say *next to*.' },
        { s: 'Your glasses are [in] the table.', a: ['on'], why: 'On top of a table: *on*.' },
      ] },
    ] },
    { title: 'Exam corner: complete the message', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam: write one word in each gap.', items: [
        { q: 'Hi Sam, your keys are ___ the kitchen table.', a: ['on'], why: 'On top of the table: *on*.' },
        { q: 'Your bag is ___ the sofa and the TV.', a: ['between'], why: 'Two things, one on each side: *between*.' },
        { q: 'The milk is ___ the fridge.', a: ['in'], why: 'Inside the fridge: *in*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In this part of the exam you write **one word** in each gap. Read the whole sentence first: the words after the gap (*the sofa **and** the TV*) often show the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Hide and find', md: 'You “hide” five things in a room you describe or show on camera; the student asks *Is it under the bed? Is it behind the door?* and you answer *Yes, it is / No, it isn’t.* Then swap: the student hides things in their own room and you ask.' },
    small: { title: 'Draw what I say', md: 'One student describes a simple picture (a table, a cat, a lamp, a box) using prepositions; the others draw it without looking. Compare the drawings on camera. Change the speaker each round.' },
    group: { title: 'Room detectives', md: 'Post a picture of a messy room in the chat. In breakout rooms of three, students write six sentences about where things are, two of them false. Back together, rooms read their sentences and the others say *true* or *false*.' },
  },
  homework: { book: 'u5:p2', md: 'Finish book lesson 2 of unit 5 (In, on, under), including the speaking task. Then write a message to a friend who is coming to your home: say where three things are (keys, food, towels).' },
};
