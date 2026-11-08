// English C1, class 65 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c65',
  focus: 'By the end every student talks about the economy and personal finance with natural collocations and idioms: the economy *grows, shrinks, goes into recession*; prices *soar, level off*; people *make ends meet, live beyond their means, tighten their belts, splash out, break even*, *take out* and *pay off* loans. They also choose the right register: *strapped for cash* in conversation, *in financial difficulty* in a report. The speaking goal: discuss money habits openly but tactfully.',
  tips: [
    'Money is personal. Let students talk about *people they know* or *people in general* if they prefer, and never ask anyone about their own salary or debts.',
    'The verbs are where mistakes happen: you *earn* a salary (not *win*), *make* a profit (not *do*), *take out* a loan, *run up* debts and *get into* debt. Correct these every time.',
    'Idioms have fixed forms: *make ends meet* (no *the*), *live beyond your means* (not *over*), *break even* (not *break equal*). Ask students to say them exactly before they use them.',
    'Register matters for lesson 4: point out which phrases belong in a report (*on a low income, in financial difficulty, prohibitively expensive*) and which only in conversation (*broke, cost an arm and a leg*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one thing people of your age often splash out on, and one thing they cut back on when money is tight?*' },
    { min: 12, title: 'The economy and your wallet', md: 'Show board page 1. Go through the table, then students match the expressions alone and explain two in their own words.' },
    { min: 10, title: 'Register and mistakes', md: 'Show board page 2. Students sort the phrases by register, then fix the mistakes in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 1. Students choose alone in five minutes, then compare. Reveal the answers and talk about the wrong options.' },
    { min: 5, title: 'Close', md: 'Each student gives one piece of money advice to a teenager with an idiom from today. Set the homework.' },
  ],
  board: [
    { title: 'The economy and your wallet', blocks: [
      { t: 'table', caption: 'Economy and personal finance', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
        ['go into recession / come out of recession', 'start or end a period when the economy shrinks'],
        ['prices soar / level off', 'rise very fast / stop rising'],
        ['make ends meet', 'have just enough money to live on'],
        ['live beyond your means', 'spend more than you earn'],
        ['tighten your belt', 'spend less than before'],
        ['break even', 'make neither a profit nor a loss'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
        ['splash out on something', 'spend a lot on a treat'],
        ['be in the black', 'have money in your account'],
        ['a windfall', 'money you did not expect'],
        ['run up debts', 'borrow more and more'],
        ['a boom', 'a period of fast economic growth'],
      ] },
    ] },
    { title: 'Register and mistakes', blocks: [
      { t: 'ex', kind: 'sort', h: 'Informal, or neutral and formal?', groups: ['informal', 'neutral or formal'], explain: ['groups'], items: [
        { s: 'strapped for cash', g: 0, why: 'Conversation only.' },
        { s: 'on a low income', g: 1, why: 'Fine in a report.' },
        { s: 'cost an arm and a leg', g: 0, why: 'A conversational idiom.' },
        { s: 'prohibitively expensive', g: 1, why: 'The formal way to say it.' },
        { s: 'broke', g: 0, why: 'Informal for *having no money*.' },
        { s: 'in financial difficulty', g: 1, why: 'Neutral and formal.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Rents [rose up] by ten per cent last year.', a: ['rose'], why: '*Rise* already means *go up*.' },
        { s: 'He [gained] a good salary in his first job.', a: ['earned'], why: 'You *earn* a salary.' },
        { s: 'Many students get [in] debt at university.', a: ['into'], why: 'The collocation is *get into debt*.' },
        { s: 'The company is [on the red] for the third year.', a: ['in the red'], why: 'The idiom is *in the red*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): the sentences make one short text about a family business. Choose the word that best fits each gap.', items: [
        { q: 'When the factory closed, many families in the town found it hard to make ends ___.', o: ['meet', 'join', 'reach', 'touch'], why: 'The idiom is *make ends meet*.' },
        { q: 'Some had been living ___ their means and soon ran into debt.', o: ['beyond', 'over', 'above', 'past'], why: 'The idiom is *live beyond your means*.' },
        { q: 'The Silva family ___ out a small loan and opened a bakery.', o: ['took', 'got', 'made', 'did'], why: 'You *take out* a loan.' },
        { q: 'For two years they barely ___ even.', o: ['broke', 'made', 'came', 'went'], why: '*Break even*: no profit, no loss.' },
        { q: 'Then the local economy began to recover and sales ___.', o: ['soared', 'flew', 'mounted', 'lifted'], why: 'Prices and sales *soar*: rise fast.' },
        { q: 'Last year they finally ___ off the loan.', o: ['paid', 'gave', 'put', 'cleared'], why: '*Pay off* a loan: finish paying it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 1 at C1 the four options often look possible on their own. Read to the end of the sentence: the particle or the word after the gap (*___ out a loan*, *___ even*) usually rules out three of them.' },
    ] },
  ],
  activities: {
    one: { title: 'Advice column', md: 'Read the student two short problems in the chat (*I earn well but I am always in the red by the twentieth of the month*; *My business has broken even for three years*). The student gives advice using the idioms, then you swap roles with a problem the student invents. Correct the collocations at the end.' },
    small: { title: 'Money lives', md: 'Each student invents a character (a musician, a pensioner, a student, a shop owner) and tells the group their money story in one minute with at least three expressions from today. The others ask one follow-up question each and name the idioms they heard.' },
    group: { title: 'Two registers', md: 'Breakout rooms of three get the same situation in the chat (a young couple who cannot afford their rent). They write it twice: once as a friend’s message, once as two sentences for a council report. Back together, rooms compare and the class decides which phrases belong in which register.' },
  },
  homework: { book: 'u14:p3', md: 'Finish book lesson 3 of unit 14 if needed, then do lesson 4 (Writing a report). Write two short paragraphs about how people in your town manage their money: one as a message to a friend, one in a formal register for a report.' },
};
