// English B1, class 59 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c59',
  focus: 'By the end of the class every student has understood a text about living on a budget, uses the money phrases from the unit (*stick to a budget, go over budget, a bargain, good value for money, an impulse buy*) naturally, and can give and justify an opinion about spending and saving for at least a minute. The exam focus is Reading Part 2: matching people to texts.',
  tips: [
    'Students confuse *a bargain* (cheap, good) with *expensive*. Check with quick concept questions: *If something is a bargain, are you happy or sad?*',
    '*Short of money*, not *short in money*; *on a budget*, not *in a budget*. Prepositions are the main accuracy point today.',
    'In Reading Part 2, the trap is a text that mentions the right words but not the right condition. Teach students to underline every condition in the person’s description (price, time, place) before reading the texts.',
    'Money can be a sensitive topic. Let students talk about "people they know" or invented characters if they prefer not to discuss their own finances.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What was the best bargain you ever found? What was your worst impulse buy?*' },
    { min: 10, title: 'Money phrases', md: 'Show board page 1. Students match the phrases to their meanings, then use two of them in a sentence about themselves.' },
    { min: 10, title: 'Reading', md: 'Show board page 2. Read the text together, then students answer the true or false questions and justify each answer from the text.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: a Reading Part 2 task. Students underline the conditions for each person, then match.' },
    { min: 5, title: 'Close', md: 'Each student gives one tip for saving money. Set the homework.' },
  ],
  board: [
    { title: 'Money phrases', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each phrase with its meaning.', pairs: [
        ['stick to a budget', 'follow your spending plan'],
        ['go over budget', 'spend more than you planned'],
        ['a bargain', 'much cheaper than normal'],
        ['good value for money', 'worth what you pay'],
        ['an impulse buy', 'something you buy without planning'],
        ['short of money', 'not having enough money'],
      ] },
    ] },
    { title: 'Reading: one month, one budget', blocks: [
      { t: 'reading', title: 'One month, one budget', md: 'Last January, Dara decided to live on a strict budget for one month. She wrote down everything she spent, from her rent to a single coffee.\n\nThe first week was hard. She went over budget on food because she kept buying lunch at work. In the second week she started cooking at home and taking food with her, and she saved almost forty pounds.\n\nThe biggest surprise was how many impulse buys she made online late at night. She deleted the shopping apps from her phone, and by the end of the month she had stuck to her budget and saved enough for a weekend away.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'Dara wrote down only her big costs.', a: 'f', why: 'She wrote down everything, *from her rent to a single coffee*.' },
        { q: 'She spent too much on food in the first week.', a: 't', why: '*She went over budget on food* in the first week.' },
        { q: 'Most of her impulse buys happened in shops.', a: 'f', why: 'They happened *online late at night*.' },
        { q: 'At the end of the month she could pay for a short trip.', a: 't', why: 'She *saved enough for a weekend away*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 2', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading Part 2: read what each person wants, then choose the best offer for them.\n\n**Offer A:** Second-hand bikes from £60, all checked by our mechanics. Open weekends only.\n\n**Offer B:** New city bikes, 20% off this week, free delivery to your home.\n\n**Offer C:** Rent a bike by the day or the month. Students get a lower price.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best offer for each person.', items: [
        { q: 'Mia is a student. She only needs a bike for the summer and has very little money.', o: ['Offer C', 'Offer A', 'Offer B'], why: 'She needs it for a short time and is a student: renting with a student price fits.' },
        { q: 'Tom wants a cheap bike to keep, and he can only go shopping on Saturdays.', o: ['Offer A', 'Offer B', 'Offer C'], why: 'Cheap, to keep, and the shop is open at weekends.' },
        { q: 'Lena wants a brand-new bike but has no car to bring it home.', o: ['Offer B', 'Offer A', 'Offer C'], why: 'New bikes with free delivery to her home.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 2, every person has **two or three conditions**. Underline them all. A text that matches one condition but not the others is a trap.' },
    ] },
  ],
  activities: {
    one: { title: 'Plan a budget', md: 'Together, plan a monthly budget for an invented person (a student in a big city). The student decides where to save and where to spend, using the phrases on the board, and explains every choice. Then the student describes their own best bargain and worst impulse buy.' },
    small: { title: 'The budget challenge', md: 'Give the group 500 euros for a weekend trip for four people in the chat: travel, hotel, food, activities. Students discuss and agree on a plan without going over budget. Each student must use at least two money phrases. Then each group member reports one decision and why.' },
    group: { title: 'Saver or spender debate', md: 'Breakout rooms of four: two students argue that saving money is more important, two argue that enjoying money now is more important. Give five minutes to prepare and five to discuss. Bring the rooms back and ask one student from each side to give the best argument.' },
  },
  homework: { book: 'u12:p4', md: 'Finish book lesson 4 of unit 12. Then write about 100 words: *Is it better to save money or to spend it?* Give your opinion with two reasons.' },
};
