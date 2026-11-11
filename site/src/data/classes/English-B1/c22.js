// English B1, class 22 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c22',
  focus: 'By the end of the class every student can talk about the environment with the words that naturally go together: **reduce** waste, **save** energy, **protect** wildlife, **cause** pollution, **recycle** plastic, **climate change**, **renewable energy**. Students use these collocations to describe problems and solutions in their own town, and give opinions in a short discussion.',
  tips: [
    'Learners translate word by word and produce *make pollution* or *close the light*. Teach collocations as blocks: write the verb and its partners together, never single words.',
    '*Climate change* and *global warming* are fixed phrases; *the weather change* is a common mistake. Correct it every time.',
    'Environmental topics can turn into long opinions in the student’s own language. Keep the discussion concrete and short: one problem, one solution, one example.',
    'Recycle the passive from the last class: *Plastic is collected every week. The park was cleaned by volunteers.*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the biggest environmental problem in your town?* Write the problems as short notes, and note any wrong verbs students use.' },
    { min: 10, title: 'Words that go together', md: 'Show board page 1. Go through the table. Students say which collocation fits each warm-up problem.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students match and complete the sentences, then make two true sentences about their own habits.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: an open cloze in the format of B1 Preliminary Reading part 6. Students write one word in each gap alone, then compare.' },
    { min: 5, title: 'Fix it', md: 'Show board page 4 and add one mistake from the activity.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they will do this week to save energy or reduce waste. Set the homework.' },
  ],
  board: [
    { title: 'Words that go together', blocks: [
      { t: 'table', caption: 'Verbs and their partners', explain: ['head'], head: ['Verb', 'Goes with', 'Example'], rows: [
        ['reduce', 'waste, pollution, your carbon footprint', 'We must reduce waste.'],
        ['save', 'energy, water, money', 'Turn off the lights to save energy.'],
        ['protect', 'the environment, wildlife, forests', 'The law protects wildlife here.'],
        ['cause', 'pollution, damage, floods', 'Traffic causes air pollution.'],
        ['recycle', 'plastic, glass, paper', 'We recycle all our glass.'],
      ] },
      { t: 'text', md: 'Fixed phrases: **climate change**, **global warming**, **renewable energy**, **public transport**, **turn off** the lights.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
        ['Cars and factories cause', 'air pollution.'],
        ['Solar panels produce', 'renewable energy.'],
        ['Short showers save', 'water.'],
        ['National parks protect', 'wildlife.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right verb.', items: [
        { q: 'We should ___ the amount of plastic we use.', o: ['reduce', 'make', 'save'], why: 'The partner of *amount of plastic / waste* is *reduce*.' },
        { q: 'Please ___ the lights when you leave.', o: ['turn off', 'close', 'stop'], why: 'Lights and machines are *turned off*.' },
        { q: 'Storms can ___ serious damage to homes.', o: ['cause', 'do', 'make'], why: 'We say *cause damage*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 6', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 6: write **one word** in each gap.\n\n*Our school started a green project last year. All the classrooms now have recycling bins, and the lights are turned off automatically when nobody is in the room.*' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'Every week, the paper ___ collected by a local company.', a: ['is'], why: 'Present simple passive: *is collected*.' },
        { q: 'We have reduced the amount ___ waste by half.', a: ['of'], why: '*the amount of* + noun.' },
        { q: 'Students who cycle to school can park their bikes ___ the gate.', a: ['near', 'by', 'at', 'behind'], why: 'A preposition of place.' },
        { q: 'Next year we hope ___ install solar panels on the roof.', a: ['to'], why: '*hope to* + verb.' },
      ] },
      { t: 'tip', md: 'In Reading part 6 there are no options. Decide first what kind of word you need: part of a verb (*is, have*), a preposition (*of, at*) or a linker (*but, because*). Then read the sentence again with your word.' },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'We must [make] less pollution.', a: ['cause', 'produce'], why: 'We *cause* or *produce* pollution.' },
        { s: 'The [weather change] is a serious problem.', a: ['climate change'], why: 'The fixed phrase is *climate change*.' },
        { s: 'Please [close] the light.', a: ['turn off', 'switch off'], why: 'Lights are *turned off*.' },
        { s: 'Wind turbines produce [renewing] energy.', a: ['renewable'], why: 'The adjective is *renewable*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'A greener home', md: 'Walk through the student’s home room by room. In each room the student says one thing they already do and one thing they could do (*In the kitchen we recycle glass, but we could reduce food waste by…*). Push for exact collocations. Finish with the student choosing their three best ideas.' },
    small: { title: 'Town council meeting', md: 'Students are members of the town council with 10,000 euros to spend on one green project. Each student proposes a different project with two reasons, using the collocations (*A new bike lane will reduce traffic and cause less pollution*). The group discusses and votes. The winner explains why they won.' },
    group: { title: 'Problem and solution', md: 'Breakout rooms of three. Each room chooses one problem from the warm-up and writes three solutions in the chat with the right verbs. Back together, each room presents its best solution in one minute, and the other rooms ask one question each.' },
  },
  homework: { book: 'u5:p2', md: 'Finish book lesson 2 of unit 5 (Our planet), including the speaking task. Then write 60 to 80 words about an environmental problem in your town and what people could do about it, using at least five collocations from the class.' },
};
