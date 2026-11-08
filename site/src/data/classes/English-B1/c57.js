// English B1, class 57 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c57',
  focus: 'By the end of the class every student chooses correctly between *make* and *do* in the common fixed phrases, and uses the money verbs *spend, save, borrow, lend, afford, owe* and *waste* with the right prepositions (*spend on*, *borrow from*, *lend to*). Students should leave able to talk for a minute about how they handle money, without the classic *borrow me* and *do a mistake* errors.',
  tips: [
    '*Make* is usually about creating or producing something (*make a cake, make a decision, make money*); *do* is usually about activities and work (*do the shopping, do a job, do your best*). Give the rule, but say clearly that many phrases simply have to be learned.',
    '*Borrow* and *lend* are the most frequent money mistake. Draw two arrows on the board: *lend* goes away from me, *borrow* comes to me. Ask students to act it out with a pen.',
    'Speakers of Spanish, Italian and Portuguese often say *spend money in* and *afford to + noun*; speakers of Arabic and Turkish often use one verb for both *make* and *do*. Listen for these.',
    '*Afford* needs *can / can’t* and is followed by a noun or *to* + verb: *I can’t afford a new car* / *I can’t afford to go*. Never *afford buying*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Are you a saver or a spender? What did you last spend too much money on?* Students answer in one or two sentences.' },
    { min: 12, title: 'Make or do?', md: 'Show board page 1. Students sort the phrases into *make* and *do* on the board, then explain the general idea. Point out the phrases that do not follow the rule.' },
    { min: 10, title: 'Money verbs', md: 'Show board page 2. Go through the verbs and their prepositions, then the class corrects the sentences together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: a Reading Part 6 open cloze. Students write one word in each gap alone, then compare and check.' },
    { min: 3, title: 'Close', md: 'Each student says one *make* and one *do* phrase in a sentence about themselves. Set the homework.' },
  ],
  board: [
    { title: 'Make or do?', blocks: [
      { t: 'text', md: 'Use **make** when you create or produce something: *make a cake, make a plan, make money*. Use **do** for activities, work and jobs: *do the shopping, do homework, do a job*. Some phrases just have to be learned: *make a mistake, make a complaint, do someone a favour, do your best*.' },
      { t: 'ex', kind: 'sort', h: 'Make or do?', groups: ['make', 'do'], items: [
        { s: 'a decision', g: 0, why: 'You *make* a decision: you create it.' },
        { s: 'the shopping', g: 1, why: 'An activity: *do the shopping*.' },
        { s: 'a mistake', g: 0, why: 'A fixed phrase: *make a mistake*.' },
        { s: 'your best', g: 1, why: 'A fixed phrase: *do your best*.' },
        { s: 'money', g: 0, why: 'You *make money*: you produce it.' },
        { s: 'someone a favour', g: 1, why: 'A fixed phrase: *do someone a favour*.' },
        { s: 'a complaint', g: 0, why: 'A fixed phrase: *make a complaint*.' },
        { s: 'business', g: 1, why: 'A fixed phrase: *do business*.' },
      ] },
    ] },
    { title: 'Money verbs', blocks: [
      { t: 'table', caption: 'Money verbs and their prepositions', explain: ['head', 'col2'], head: ['Verb', 'Example', 'Remember'], rows: [
        ['spend', 'I spend a lot on books.', 'spend money **on** something'],
        ['save', 'We’re saving for a holiday.', 'save **for** something'],
        ['borrow', 'Can I borrow ten euros from you?', 'you take: borrow **from** someone'],
        ['lend', 'Can you lend me ten euros?', 'you give: lend **to** someone'],
        ['afford', 'I can’t afford a new phone.', 'can / can’t afford + noun or *to* + verb'],
        ['owe', 'I owe my sister twenty pounds.', 'you must pay it back'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Can you [borrow] me your bike tomorrow?', a: ['lend'], why: 'The other person gives: *lend*.' },
        { s: 'She spends all her money [in] clothes.', a: ['on'], why: '*Spend money on* something.' },
        { s: 'I can’t afford [buying] a car this year.', a: ['to buy'], why: '*Afford* + *to* + verb.' },
        { s: 'I [did] a big mistake in my test.', a: ['made'], why: 'Fixed phrase: *make a mistake*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 6', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 6: read the text and write **one word** in each gap.' },
      { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
        { q: 'Last year I decided to ___ my best to save money.', a: ['do'], why: 'Fixed phrase: *do your best*.' },
        { q: 'I stopped spending so much ___ coffee and snacks.', a: ['on'], why: '*Spend money on* something.' },
        { q: 'When my friend asked me to lend her some money, I ___ yes.', a: ['said'], why: '*say yes*: past simple *said*.' },
        { q: 'Now I can afford ___ go on holiday in the summer.', a: ['to'], why: '*Afford* + *to* + verb.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 6 the missing words are usually small: prepositions, articles, auxiliaries and parts of fixed phrases. Read the whole sentence first, then ask: *what kind of word fits here?*' },
    ] },
  ],
  activities: {
    one: { title: 'Money interview', md: 'Interview the student about their money habits: what they spend most on, what they are saving for, whether they ever borrow or lend money, what they can’t afford right now. Then swap roles. Note two mistakes with *make / do* or the verbs and correct them at the end.' },
    small: { title: 'Find someone who', md: 'Put six prompts in the chat: *has made a big decision this year, has done someone a favour this week, is saving for something special, has lent money to a friend, can’t afford something they want, has made a complaint in a shop*. Students ask each other questions and find a name for each, asking one follow-up question every time.' },
    group: { title: 'The money advice line', md: 'Breakout rooms of three. One student calls a "money advice line" with a problem (*I owe my brother money and I can’t pay him back*). The other two give advice using the verbs on the board. Rotate so each student calls once. Bring two rooms back to share the best advice.' },
  },
  homework: { book: 'u12:p2', md: 'Finish book lesson 2 of unit 12, including the speaking task. Then write six sentences about your own money habits: use three *make* or *do* phrases and three money verbs.' },
};
