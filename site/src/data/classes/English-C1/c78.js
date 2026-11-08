// English C1, class 78 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u17:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c78',
  focus: 'By the end every student uses the mandative subjunctive after words of demand, necessity and recommendation (*They insisted that she leave*, *It is essential that he be informed*, *We recommend that tenants not sign*) and the formal semi-modals of rules and rights: *be required to*, *be obliged to*, *be entitled to*, *be exempt from*, *be liable for*. The speaking goal: make firm, formal demands about fairness at work, at home and in public life.',
  tips: [
    'The base form does not change with the person or the time: *They demanded that she leave* is right although *demanded* is past. Students will want *leaves* or *left*; ask *Is it a fact or a demand?*',
    'The negative has no *do*: *that he not sign*. It sounds strange to many learners, so say several examples aloud together.',
    '*Insist* and *suggest* change meaning: with the subjunctive they demand or propose, with a normal tense they state a fact. *She insisted that he was innocent* is a claim, not a demand.',
    'Prepositions after the semi-modals cause errors: *entitled to*, *exempt from*, *liable for*. Keep them on the board through the class.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is one rule you think every workplace should have?* Students answer with *It is essential that…* or *I would insist that…*; do not correct the verb yet.' },
    { min: 12, title: 'Demands and requirements', md: 'Show board page 1. Go through the table, then students choose the forms. Go back to the warm-up answers and correct the verbs together.' },
    { min: 10, title: 'Rules and rights', md: 'Show board page 2. Students fix the mistakes, then decide whether each *insist* or *suggest* sentence is a demand or a fact.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone with "Everyone solves this", then count the words together. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student makes one formal demand for their town or school with the subjunctive. Set the homework.' },
  ],
  board: [
    { title: 'Demands and requirements', blocks: [
      { t: 'table', caption: 'Words that take the subjunctive', explain: ['head'], head: ['Type', 'Words', 'Example'], rows: [
        ['verbs', 'insist, demand, require, request, recommend, propose, suggest, urge', 'The committee urged that the report be published.'],
        ['adjectives', 'essential, vital, crucial, imperative, important, advisable', 'It is crucial that every tenant receive a copy.'],
        ['nouns', 'the requirement that, the proposal that, on condition that', 'She agreed on condition that her name not be used.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the form that fits a formal text.', items: [
        { q: 'The judge ordered that the evidence ___ examined again.', o: ['be', 'is', 'was'], why: 'A demand: subjunctive *be*, whatever the tense of *ordered*.' },
        { q: 'It is vital that each patient ___ a written explanation.', o: ['receive', 'receives', 'received'], why: 'Base form, no *-s*, even after *each patient*.' },
        { q: 'We strongly advise that visitors ___ valuables in their cars.', o: ['not leave', 'don’t leave', 'not to leave'], why: 'Negative subjunctive: *not* + base form, no *do*.' },
        { q: 'Residents over seventy are exempt ___ the new parking charge.', o: ['from', 'of', 'to'], why: '*Exempt from*.' },
        { q: 'Every employee is entitled ___ a copy of their contract.', o: ['to', 'for', 'of'], why: '*Entitled to* + noun or verb.' },
      ] },
    ] },
    { title: 'Rules and rights', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The union demanded that the company [pays] overtime at the full rate.', a: ['pay', 'should pay'], why: 'Subjunctive: base form for every person.' },
        { s: 'It was essential that the witnesses [were] protected.', a: ['be', 'should be'], why: 'No backshift: the base form has no tense.' },
        { s: 'The lawyer recommended that we [don’t sign] until Monday.', a: ['not sign', 'should not sign', 'shouldn’t sign'], why: 'No *do* in the subjunctive negative.' },
        { s: 'The landlord is liable [of] any damage to the roof.', a: ['for'], why: '*Liable for*.' },
        { s: 'All drivers are required [showing] their licence at the gate.', a: ['to show'], why: '*Be required to* + infinitive.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Demand or fact? Choose what the sentence means.', items: [
        { q: 'She insisted that he be given a second chance.', o: ['She demanded a second chance for him.', 'She said firmly that he had had a second chance.'], why: 'Subjunctive *be*: a demand.' },
        { q: 'The evidence suggests that the rule was ignored.', o: ['It shows the rule was probably ignored.', 'It proposes that the rule be ignored.'], why: 'Past tense *was*: a statement of fact.' },
        { q: 'The report suggests that the rule be changed.', o: ['It proposes a change.', 'It shows the rule has changed.'], why: 'Subjunctive *be*: a proposal.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'Pensioners do not have to pay the entrance fee.', cue: 'EXEMPT', a: ['Pensioners are exempt from paying the entrance fee.', 'Pensioners are exempt from the entrance fee.'], why: '*Be exempt from* + noun or -ing.' },
        { q: 'The law says that employers must give staff a written contract.', cue: 'REQUIRED', a: ['Employers are required by law to give staff a written contract.', 'By law, employers are required to give staff a written contract.'], why: '*Be required to*: an official rule.' },
        { q: 'The owner has to pay for any damage the dog causes.', cue: 'LIABLE', a: ['The owner is liable for any damage the dog causes.'], why: '*Be liable for*: legally responsible.' },
        { q: '“You must all leave the building now,” the officer told us.', cue: 'INSISTED', a: ['The officer insisted that we all leave the building now.', 'The officer insisted that we should all leave the building now.', 'The officer insisted on us all leaving the building now.'], why: '*Insist that* + subjunctive: a demand.' },
        { q: 'It is vital to keep the families informed.', cue: 'BE', a: ['It is vital that the families be kept informed.'], why: 'Passive subjunctive: *be kept*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 4 often tests a formal pattern with its preposition: *exempt from*, *liable for*, *entitled to*. Leaving out or changing the preposition loses a mark even when the rest is right.' },
    ] },
  ],
  activities: {
    one: { title: 'The fair contract', md: 'Together you write the main terms of a fair contract for a job or a flat the student knows well. The student dictates each term using the lesson’s language (*The employer shall… The tenant is entitled to… It is essential that…*); you type it in the chat. At the end, read it back and correct every verb after *that*.' },
    small: { title: 'Tenant and landlord', md: 'Pairs or threes: one student is a tenant with a problem (a broken boiler, a sudden rent rise), another is the landlord, a third is an adviser. The adviser listens and tells each side what they are required to, entitled to or liable for. Swap roles twice.' },
    group: { title: 'Class charter', md: 'Breakout rooms of three each write four rules for a fair online class, using the subjunctive and the semi-modals (*It is essential that every student be given a turn*, *Students are entitled to…*). Rooms share their rules and the class agrees on the best six for a class charter.' },
  },
  homework: { book: 'u17:p1', md: 'Finish lesson 1 of unit 17 if needed, then do lesson 2 (The tenant shall not). Write six formal sentences about what should be required of a good employer, landlord or school, with at least three subjunctives and three semi-modals.' },
};
