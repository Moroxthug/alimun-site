// English A1, class 30 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c30',
  focus: 'By the end of the class every student can say what they can and can’t do with **can** + verb, ask *Can you …?* with short answers (*Yes, I can. / No, I can’t.*), and add a little detail (*very well, a little, not at all*). Every student should ask and answer at least five questions about skills.',
  tips: [
    'The most common mistakes: *She cans swim*, *I can to swim*, *I can swimming*. *Can* never changes and the verb after it is the base form. Correct every time.',
    'Pronunciation: in a positive sentence **can** is weak (*I c’n swim*); **can’t** is strong and long. Many learners only hear the difference in the stressed vowel, so model it clearly and exaggerate.',
    'In British English *can’t* has a long /ɑː/ sound; in American English it is short but the final *t* is stopped. Accept both; be consistent.',
    'Learners from languages that use “know” for skills (French *savoir*, Spanish *saber*) may say *I know swim*. Show that English uses *can* for both.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Mime three actions (swimming, cooking, playing the guitar). Students guess the verb. Say: *I can cook, but I can’t play the guitar.*' },
    { min: 10, title: 'can and can’t', md: 'Board page 1. Elicit the rule from the examples: same form for everyone, base verb after *can*. Drill the weak *can* and strong *can’t*.' },
    { min: 10, title: 'Questions', md: 'Board page 2. Practise *Can you …? – Yes, I can. / No, I can’t.* in a chain. Students solve the exercise on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Common mistakes', md: 'Board page 3. Students fix the mistakes and say the sentences correctly.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: A2 Key speaking part 1 style questions about skills.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they can do very well. Set the homework.' },
  ],
  board: [
    { title: 'can and can’t', blocks: [
      { t: 'examples', items: [
        { s: 'I **can** swim.', n: 'Weak *can*: you hear *c’n*.' },
        { s: 'She **can** speak three languages.', n: 'No *-s*: *she can*, not *she cans*.' },
        { s: 'We **can’t** drive.', n: 'Negative: *can’t* (= *cannot*), strong.' },
        { s: 'He **can** play the piano **very well**.', n: 'Add how well: *very well, quite well, a little*.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write can or can’t.', items: [
        { q: 'Fish ___ swim.', a: ['can'], why: 'Fish are able to swim: *can*.' },
        { q: 'Babies ___ drive a car.', a: ['can’t', 'cannot', "can't"], why: 'Babies are not able to drive: *can’t*.' },
        { q: 'Birds ___ fly.', a: ['can'], why: 'Birds are able to fly: *can*.' },
      ] },
    ] },
    { title: 'Can you …?', blocks: [
      { t: 'table', caption: 'Questions and short answers', explain: ['head'], head: ['Question', 'Yes', 'No'], rows: [
        ['Can you cook?', 'Yes, I can.', 'No, I can’t.'],
        ['Can she ride a bike?', 'Yes, she can.', 'No, she can’t.'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
        { a: 'Can you play the guitar?', why: '*Can* first, then the person, then the base verb.' },
        { a: 'Can your brother speak French?', why: '*Can* + subject + base verb.' },
        { a: 'Can they swim very well?', why: '*very well* goes at the end.' },
      ] },
    ] },
    { title: 'Common mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'My sister [cans] dance.', a: ['can'], why: '*can* never takes *-s*.' },
        { s: 'I can [to swim].', a: ['swim'], why: 'After *can*, the verb has no *to*.' },
        { s: 'He can [playing] tennis.', a: ['play'], why: 'After *can*, use the base verb.' },
        { s: '[Do you can] cook?', a: ['Can you'], why: 'Questions with *can* do not use *do*.' },
      ] },
    ] },
    { title: 'Exam corner: speaking part 1', blocks: [
      { t: 'text', md: 'The examiner asks about you. Answer each question with **a short answer and one more sentence**.\n\n*Can you cook?* – *Yes, I can. I can make good pasta.*\n\n*Can you play a musical instrument?*\n\n*What sports can you do?*' },
      { t: 'tip', art: 'owl', md: 'In part 1 of the A2 Key speaking test, *Yes, I can.* alone is too short. Always add one more sentence: what, how well, or when.' },
    ] },
  ],
  activities: {
    one: { title: 'Skills interview', md: 'Give the student a list of ten skills (cook, swim, drive, ski, sing, speak Italian …). The student asks you *Can you …?* about each and notes your answers; then you ask the student. Finish by comparing: *We can both swim, but only you can ski.*' },
    small: { title: 'Find someone who can', md: 'Post six skills in the chat. Students ask each other *Can you …?* and find one person for each skill. The first student with six names reads them aloud with full sentences: *Marco can play the piano.*' },
    group: { title: 'Team talent show', md: 'In breakout rooms of three or four, students find out what everyone in their group can do and choose a name for their team. Back together, one person presents the team: *In our team, Ana can sing, Tom can cook, and nobody can drive!*' },
  },
  homework: { book: 'u6:p1', md: 'Finish book lesson 1 of unit 6 (I can swim), including the speaking task. Then write six sentences: three things you can do and three things you can’t do, with *very well* or *a little* in two of them.' },
};
