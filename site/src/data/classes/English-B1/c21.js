// English B1, class 21 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c21',
  focus: 'By the end of the class every student can describe processes and past events with the passive in the present simple and the past simple (*Glass is recycled here. The bridge was built in 1890.*), and knows when to leave out the person who does the action and when to add *by*. The key accuracy points are the form of *be* and the past participle.',
  tips: [
    'The most common mistake is leaving out *be*: *The house built in 1950*. Explain that without *be* the sentence means the house built something. Insist on **be + past participle** every time.',
    'Irregular past participles (*made, built, sold, written, taken*) cause errors such as *are make*. Keep a short list of irregular participles on the board during the class.',
    'Learners overuse *by*. Teach the rule: add *by* only when the person is important or new information. *The museum was opened by the Queen* (important) but *Tickets are sold online* (we don’t need to know who).',
    'Use processes students know: how coffee, bread or a phone is made, how rubbish is recycled in their town.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a simple object (a cup, a T-shirt). Ask: *Where was it made? What is it made of?* Write the students’ answers, correct or not.' },
    { min: 10, title: 'The passive', md: 'Show board page 1. Explain the table. Go back to the warm-up answers and correct them together.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students complete the sentences, then rewrite two active sentences of their own in the passive.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a multiple-choice cloze in the format of B1 Preliminary Reading part 5. Students work alone, then explain each choice.' },
    { min: 5, title: 'Fix it', md: 'Show board page 4 and add one mistake from the activity.' },
    { min: 5, title: 'Close', md: 'Each student says one fact about their town in the passive (*The castle was built in…*). Set the homework.' },
  ],
  board: [
    { title: 'The passive', blocks: [
      { t: 'table', caption: 'be + past participle', explain: ['head'], head: ['', 'Active', 'Passive'], rows: [
        ['present simple', 'They recycle glass here.', 'Glass is recycled here.'],
        ['present, plural', 'They sell tickets online.', 'Tickets are sold online.'],
        ['past simple', 'Someone built the bridge in 1890.', 'The bridge was built in 1890.'],
        ['past, plural', 'They planted the trees last year.', 'The trees were planted last year.'],
      ] },
      { t: 'text', md: 'Use the passive when the action or the object is more important than the person who does it, or when we don’t know who did it.\n\nAdd **by** only when the person is important: *The song was written **by** a sixteen-year-old.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'gap', h: 'Complete with the passive of the verb in brackets.', items: [
        { q: 'Paper ___ (collect) every Tuesday in our street.', a: ['is collected'], why: 'Present simple passive, singular: *is collected*.' },
        { q: 'These phones ___ (make) in Korea.', a: ['are made'], why: 'Present simple passive, plural: *are made*.' },
        { q: 'The old factory ___ (close) in 1998.', a: ['was closed'], why: 'Past simple passive, singular: *was closed*.' },
        { q: 'Two new schools ___ (open) last year.', a: ['were opened'], why: 'Past simple passive, plural: *were opened*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 5', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 5: choose the word that best fits each gap.\n\n*The town’s first bridge (1) … in 1820. It (2) … of wood, so it was often damaged by floods. In 1890 it (3) … by a stone bridge, which is still (4) … today.*' },
      { t: 'ex', kind: 'choice', h: 'Choose the right word for each gap.', items: [
        { q: 'Gap 1', o: ['was built', 'built', 'is built'], why: 'Past event, passive: *was built*.' },
        { q: 'Gap 2', o: ['was made', 'made', 'did'], why: '*be made of* = the material: *was made of wood*.' },
        { q: 'Gap 3', o: ['was replaced', 'replaced', 'is replacing'], why: 'The bridge did not replace itself: passive *was replaced by*.' },
        { q: 'Gap 4', o: ['used', 'using', 'use'], why: '*is still used*: present passive with the past participle.' },
      ] },
      { t: 'tip', md: 'In Reading part 5 the three options are often forms of the same verb. Ask: who does the action? If the subject does not do it, you need the passive.' },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'The house [built] in 1950.', a: ['was built'], why: 'The passive needs *be*.' },
        { s: 'The cars are [make] in Spain.', a: ['made'], why: 'After *be*, use the past participle.' },
        { s: 'The museum was opened [from] the mayor.', a: ['by'], why: 'The person who does the action: *by*.' },
        { s: 'Coffee [is grew] in Brazil.', a: ['is grown'], why: 'The past participle of *grow* is *grown*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'How is it made?', md: 'The student chooses something they know well (bread, coffee, a T-shirt, olive oil) and explains how it is made, step by step, in the passive (*First the olives are picked, then they are washed…*). Ask questions to get more steps. Then you describe a process and the student retells it.' },
    small: { title: 'Town quiz', md: 'Each student writes three facts about a famous place or their own town in the passive, one of them false (*The tower was built in 1889. It was designed by…*). The others guess which fact is false. Correct passive mistakes before the guessing starts.' },
    group: { title: 'Process posters', md: 'Breakout rooms of three. Each room gets a process in the chat (recycling plastic, making chocolate, sending a letter). They write five passive sentences in order and post them. Back together, each room reads its process and the others add one missing step.' },
  },
  homework: { book: 'u5:p1', md: 'Finish book lesson 1 of unit 5 (It is made, it was built), including the speaking task. Then write six sentences about the history of a building in your town, using the passive at least four times.' },
};
