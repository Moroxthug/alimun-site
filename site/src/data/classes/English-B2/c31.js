// English B2, class 31 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c31',
  focus: 'By the end of the class every student can say exactly how certain they are about the present and the future, from completely sure to almost impossible, using more than modal verbs: *bound to*, *sure to*, *likely to*, *unlikely to*, *there’s a good chance*, *there’s no way*, and adverbs such as *definitely*, *probably* and *possibly* in the right position.',
  tips: [
    'Draw a certainty line on the board from 0% to 100% and keep it there all class. Students place each new expression on the line as they learn it.',
    'Common mistakes: *He is likely to come* is right, but learners often say *It is likely to he comes*. Also *bound to* is only for things we are sure about, not things that are allowed.',
    'Adverb position matters: *She’ll probably be late*, but *She probably won’t be late*. Many learners put *probably* after *won’t*.',
    'B1 students learnt *must*, *might* and *can’t*. Today is about going beyond modals, so reward students who use the new phrases even if they fall back on modals sometimes.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask three quick questions: *Will it rain tomorrow? Will you be rich one day? Will humans live on Mars by 2050?* Students answer however they like; note how many only use *will* and *maybe*.' },
    { min: 15, title: 'The certainty line', md: 'Show board page 1. Go through the table, then students place five sentences on a 0–100% line. Practise adverb position with page 1’s examples.' },
    { min: 10, title: 'Controlled practice', md: 'Show board page 2. Students choose the phrases alone, then compare. Ask for one true prediction from each student with *bound to* and one with *there’s no way*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 1. Students choose alone, then you reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student makes one prediction about next week using a phrase from today. Set the homework.' },
  ],
  board: [
    { title: 'How sure are you?', blocks: [
      { t: 'table', caption: 'From sure to impossible', explain: ['head', 'col2'], head: ['Phrase', 'Example', 'How sure'], rows: [
        ['bound to / sure to', 'She’s bound to win.', 'almost 100%'],
        ['definitely', 'It will definitely rain.', 'almost 100%'],
        ['likely to / there’s a good chance', 'Prices are likely to rise.', 'about 70–80%'],
        ['probably', 'He’ll probably call later.', 'about 70%'],
        ['might / may / possibly', 'We may possibly be late.', 'about 50%'],
        ['unlikely to', 'They’re unlikely to agree.', 'about 20%'],
        ['there’s no way', 'There’s no way he’ll pass.', 'almost 0%'],
      ] },
      { t: 'examples', items: [
        { s: 'She’ll **probably** be late.', n: 'Positive: *probably* after *will*.' },
        { s: 'She **probably** won’t be late.', n: 'Negative: *probably* before *won’t*.' },
        { s: 'It is **likely that** prices will rise.', n: 'With *it*: *likely that* + clause.' },
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best phrase.', items: [
        { q: 'He’s trained for months, so he’s ___ do well in the race.', o: ['bound to', 'unlikely to', 'no way to'], why: 'Months of training: we are very sure.' },
        { q: 'The shops are closed on Sunday, so there’s ___ we can buy it today.', o: ['no way', 'a good chance', 'bound'], why: 'Shops closed: impossible.' },
        { q: 'With this traffic, we ___ arrive on time.', o: ['probably won’t', 'won’t probably', 'will probably not to'], why: 'Negative: *probably* before *won’t*.' },
        { q: 'It’s ___ that the meeting will be cancelled.', o: ['likely', 'bound', 'sure to'], why: '*It is likely that* + clause.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It is likely [to he comes] tomorrow.', a: ['that he will come', 'that he comes'], why: 'With *it*: *likely that* + clause. Or: *He is likely to come.*' },
        { s: 'They [won’t probably] agree.', a: ['probably won’t'], why: '*probably* goes before *won’t*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 1: choose the word that best fits each gap.\n\nScientists say that the summer is (1) ___ to be the hottest on record. There is a good (2) ___ that water will be scarce in the south, and farmers are (3) ___ to lose part of their harvest.' },
      { t: 'ex', kind: 'select', h: 'Choose the best word for each gap.', items: [
        { q: 'Gap 1: the summer is ___ to be the hottest on record', o: ['likely', 'probable', 'possibly'], why: '*likely to* + verb; *probable* does not take *to*.' },
        { q: 'Gap 2: There is a good ___ that water will be scarce', o: ['chance', 'luck', 'hope'], why: 'Fixed phrase: *a good chance that*.' },
        { q: 'Gap 3: farmers are ___ to lose part of their harvest', o: ['bound', 'sure that', 'certainly'], why: '*bound to* + verb.' },
      ] },
      { t: 'tip', md: 'In Part 1 the four options often have similar meanings. Look at the words after the gap: *likely to*, *probable that*, *a good chance that*. The grammar around the gap usually decides the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Fortune teller', md: 'The student makes predictions about their own next year, then about their city, then about the world in 2050, using a different phrase from the certainty table each time. You challenge each prediction (*Really? Why are you so sure?*) and the student must justify it.' },
    small: { title: 'Place your bets', md: 'Write six predictions in the chat (*A woman will be president of the USA within ten years*, *Cash will disappear*, *Our teacher will be late next class*). Each student chooses a certainty phrase for each one and explains their choice. Students with very different answers must debate for one minute.' },
    group: { title: 'Prediction panels', md: 'In breakout rooms of three, each room gets two topics in the chat (work, travel, technology, food). They agree on three predictions for 2040, each with a different certainty phrase. Back in the main room, each panel presents; other students react with *I’d say that’s unlikely, because…*' },
  },
  homework: { book: 'u7:p1', md: 'Finish book lesson 1 of unit 7 (Bound to, likely to, no way), including the speaking task. Then write six predictions about your life or your country, each with a different phrase from today.' },
};
