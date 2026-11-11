// English C1, class 86 (docs/LESSONS_PLAN.md, L6). Review of units 17 and 18 (Law and fairness; Technology and us). Draft for the owner's review.
export const LESSON = {
  id: 'c86',
  focus: 'By the end every student uses the grammar and vocabulary of units 17 and 18 with more accuracy and confidence: the subjunctive after words of demand and necessity, the modals of rules and contracts (*shall, is not to, need not, is under no obligation to*), the collocations of justice, tenses for trends and change, phrasal verbs worked out from their particles and the collocations of technology. Speaking first: most of the class is discussion, with mistakes fixed together.',
  tips: [
    'Before the class, collect four or five real mistakes from classes 78 to 85 and from the unit 17 and 18 homework. Students learn more from their own sentences than from invented ones.',
    'The subjunctive mistake that lasts longest at C1 is the backshift: *It was essential that he was told*. Correct it to *be told* every time, and say why: the base form has no tense.',
    '*Must not* and *need not* are still mixed up by strong students. Contrast them in one pair: *You mustn’t sign it* (forbidden) and *You needn’t sign it* (your choice).',
    'Mix the two units on purpose: a discussion about a law on technology (screen time for children, rules for self-driving cars) needs the subjunctive, formal modals and trend tenses at once.',
    'End with a clear next step: the two unit tests are the homework, and the next class is exam practice for Listening and Speaking.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Should there be a law limiting how long children spend on screens? What would it say?* Each student answers in two sentences, one with *It is essential that…* or *I would recommend that…*' },
    { min: 12, title: 'Units 17 and 18 together', md: 'Show board page 1. Students choose the right forms alone, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2, then add the real mistakes you collected. Students correct them in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone with “Everyone solves this”, then count their words together.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 17 and 18 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'The committee recommended that the rule ___ reviewed every year.', o: ['be', 'is', 'was'], why: 'Unit 17: the subjunctive after *recommend*, the base form for every person.' },
        { q: 'You ___ bring your passport; a driving licence is enough.', o: ['needn’t', 'mustn’t', 'shan’t'], why: 'Unit 17: no obligation, so *need not*.' },
        { q: 'The company was found to be in ___ of the contract.', o: ['breach', 'break', 'brake'], why: 'Unit 17: *be in breach of* a contract or a rule.' },
        { q: 'Since the new model came out, sales ___ steadily.', o: ['have been rising', 'rose', 'had risen'], why: 'Unit 18: a trend still moving, the present perfect continuous.' },
        { q: 'By 2030 the old system ___ out completely.', o: ['will have been phased', 'will phase', 'is phasing'], why: 'Unit 18: *by* + a future time, future perfect passive.' },
        { q: 'The effect of the new rules soon wore ___.', o: ['off', 'out', 'down'], why: 'Unit 18: *off* for fading; *wear out* is breaking from use.' },
        { q: 'Smaller firms are struggling to keep ___ with the change.', o: ['pace', 'speed', 'step up'], why: 'Unit 18: *keep pace with*, no article.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It was vital that the witness [was protected].', a: ['be protected'], why: 'Unit 17: no backshift in the subjunctive.' },
        { s: 'We recommend that he [doesn’t sign] anything yet.', a: ['not sign'], why: 'Unit 17: the subjunctive negative has no *do*.' },
        { s: 'All visitors are [prohibited to take] photographs.', a: ['prohibited from taking', 'not permitted to take'], why: 'Unit 17: *prohibited from* + -ing.' },
        { s: 'The number of complaints [are growing] every month.', a: ['is growing'], why: 'Unit 18: the subject is *the number*, singular.' },
        { s: 'Prices rose [of] five per cent last year.', a: ['by'], why: 'Unit 18: *rise by* with the verb; *a rise of* with the noun.' },
        { s: 'The video [became] viral within hours.', a: ['went'], why: 'Unit 18: the fixed phrase is *go viral*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'The landlord said the tenants had to pay a deposit.', cue: 'INSISTED', a: ['The landlord insisted that the tenants pay a deposit.', 'The landlord insisted that the tenants should pay a deposit.', 'The landlord insisted on the tenants paying a deposit.'], why: 'Unit 17: *insist that* + subjunctive, or *insist on* + -ing.' },
        { q: 'It is not necessary for you to attend the hearing in person.', cue: 'NEED', a: ['You need not attend the hearing in person.', 'You needn’t attend the hearing in person.', 'You do not need to attend the hearing in person.', 'You don’t need to attend the hearing in person.'], why: 'Unit 17: *need not* for the absence of obligation.' },
        { q: 'The directors must take responsibility for the losses.', cue: 'ACCOUNTABLE', a: ['The directors must be held accountable for the losses.'], why: 'Unit 17: *be held accountable for*.' },
        { q: 'In 2020 there were only half as many users as there are today.', cue: 'DOUBLED', a: ['The number of users has doubled since 2020.'], why: 'Unit 18: one completed change up to now, the present perfect simple.' },
        { q: 'The new rules will gradually replace the old ones.', cue: 'PHASED', a: ['The old rules will gradually be phased out.', 'The old rules will be gradually phased out.', 'The old rules will be phased out gradually.'], why: 'Unit 18: *phase out*, removing in stages, in the passive.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In C1 Advanced Part 4 each answer can earn two marks, often one for each change. If you are sure of one change and not the other, write your best attempt: half an answer can still earn a mark.' },
    ] },
  ],
  activities: {
    one: { title: 'Draft the law', md: 'Together, write the short text of an imaginary law on one area of technology the student cares about (phones in schools, self-driving cars, data from smart homes). The student uses the subjunctive (*It is essential that…*), contract modals (*Providers shall not…, Users are under no obligation to…*) and one trend sentence explaining why the law is needed. Then argue against it: the student defends each clause.' },
    small: { title: 'For and against', md: 'Give the group one proposed law in the chat: *All social media accounts must be linked to a real name.* Half argue for, half against, for three minutes each side. Every speaker must use one structure from unit 17 and one from unit 18. The group notes the best sentence from each side.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one area in the chat: the subjunctive and formal modals, justice collocations, trend tenses, or phrasal verbs and technology collocations. Each room writes three quiz items with the answer and a short reason. Bring everyone back and run the quiz across the rooms.' },
  },
  homework: { book: 'u17 u18', md: 'Do the unit 17 and unit 18 tests in the book. Then look again at the lesson with your lowest score and redo its exercises. Write five sentences about a law on technology you would support, using the subjunctive at least twice.' },
};
