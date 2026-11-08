// English B1, class 64 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c64',
  focus: 'By the end of the class every student can explain strange events and describe pictures with different degrees of certainty: *definitely, probably, perhaps / maybe, I bet, it looks as if*. They put *probably* and *definitely* in the right place in the sentence, and use these phrases fluently in a photo description in the format of B1 Preliminary Speaking Part 2.',
  tips: [
    'Word order is the main accuracy point: *He will probably come*, *He probably won’t come*. Show that *probably* goes after *will* but before *won’t*.',
    '*It looks as if / like* + a sentence: *It looks as if someone was here*. Students often add *that*, which is wrong here.',
    'Speaking Part 2 is a one-minute monologue. Students at B1 often stop after three sentences. Give them a structure: where, who, what they are doing, what might be happening, how they might feel.',
    'Encourage *I bet* in informal speaking. Students enjoy it, and it sounds natural.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a photo with something unusual happening. Ask each student for one quick explanation.' },
    { min: 12, title: 'From sure to not sure', md: 'Show board page 1. Go through the scale and the word order. Students make sentences about the warm-up photo with each word.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students put the words in order and correct the sentences.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 3: Speaking Part 2. Model a one-minute description, then each student describes a photo for one minute while the others note phrases.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student says one thing that will *definitely*, *probably* and *probably not* happen this week. Set the homework.' },
  ],
  board: [
    { title: 'From sure to not sure', blocks: [
      { t: 'table', caption: 'How sure are you?', explain: ['head', 'col0'], head: ['How sure?', 'Words', 'Example'], rows: [
        ['sure', 'definitely, certainly', 'She’s definitely the best player in the team.'],
        ['quite sure', 'probably', 'They’ll probably be late again.'],
        ['not sure', 'perhaps, maybe, possibly', 'Maybe the shop has moved.'],
        ['quite sure it is true (informal)', 'I bet', 'I bet he forgot his keys again.'],
        ['from what you can see', 'it looks as if / like', 'It looks as if it’s going to rain.'],
      ] },
      { t: 'tip', art: 'owl', md: '**Probably** goes after *will* but before *won’t*: *He’ll **probably** come. He **probably** won’t come.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'She will probably be here soon.', why: '*probably* goes after *will*.' },
        { a: 'It probably won’t snow tomorrow.', why: '*probably* goes before *won’t*.' },
        { a: 'It looks as if someone was here.', why: '*It looks as if* + a sentence.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'He [will come probably] tomorrow.', a: ['will probably come'], why: '*probably* goes before the main verb: *He will probably come tomorrow*.' },
        { s: 'It looks like [that somebody] has opened the door.', a: ['somebody'], why: 'No *that* after *looks like / as if*: *It looks like somebody has opened…*' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 2', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Speaking Part 2: describe a photo for about **one minute**. Say **where** the people are, **who** they are, **what** they are doing, what **might** be happening and how they **probably** feel.\n\nUseful phrases: *In this photo I can see… / It looks as if… / They’re probably… / Maybe they’re… / I think they might be… / On the left / on the right / in the background…*' },
      { t: 'ex', kind: 'choice', h: 'Which is the best sentence to start a photo description?', items: [
        { q: '', o: ['In this photo I can see two people in a kitchen, and it looks as if they’re cooking for a party.', 'Kitchen. Two people.', 'I don’t know what this is.'], why: 'A good start says where and who, and already guesses what is happening.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Speaking Part 2, if you don’t know a word, **describe it**: *a kind of…*, *something you use to…*. Keep talking for the whole minute; the examiner wants to hear you speak, not a perfect vocabulary.' },
    ] },
  ],
  activities: {
    one: { title: 'Two photos', md: 'Show the student two photos. They describe each for one minute using the phrases on board page 3. Give feedback on one strength and one thing to add. Then compare the two photos together: *Which place would you prefer? Why?*' },
    small: { title: 'Photo minute', md: 'Each student gets a different photo in the chat and describes it for one minute. The others listen and write down one phrase from the board they heard and one question to ask. After each description, the speaker answers the questions.' },
    group: { title: 'Odd one out', md: 'Breakout rooms of three get four photos: three of the same situation and one strange one. They describe each photo, decide which is the odd one out and explain why with *probably, it looks as if* and *I bet*. Bring the rooms back to compare answers.' },
  },
  homework: { book: 'u13:p3', md: 'Finish book lesson 3 of unit 13. Then choose a photo from your phone and record yourself describing it for one minute, using at least four phrases from today.' },
};
