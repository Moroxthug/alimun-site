// English C1, class 79 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u17:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c79',
  focus: 'By the end every student reads and writes rules and contracts with the right modals: *shall* for a duty in a contract, *may* and *may not* for formal permission, *is to* and *is not to* for instructions from authority, *is prohibited from* and *is permitted to*, and the crucial difference between *must not* (forbidden) and *need not*, *is not required to*, *is under no obligation to* (a free choice). The speaking goal: explain the rules of a place clearly and correctly to someone new.',
  tips: [
    '*Must not* and *need not* are the most dangerous pair: one forbids, the other gives a choice. Test it with real situations: *You mustn’t pay now* means you are not allowed to.',
    '*Shall* in a contract is a legal duty, but in conversation British English uses it for offers (*Shall I help?*). Make sure students do not say *You shall come at nine* to a friend.',
    'Formal rules love the passive and impersonal subjects: *Smoking is prohibited*, not *It is prohibited to smoke*. Show students how to turn a spoken rule into a written notice.',
    'Ask students to bring a real rule from their building, gym or workplace. Rewriting it formally makes the lesson memorable.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the strangest rule you have ever had to follow?* Each student answers in one or two sentences.' },
    { min: 10, title: 'Duty, permission, choice', md: 'Show board page 1. Go through the table, then students choose the right meaning for each rule.' },
    { min: 15, title: 'Read the rules', md: 'Show board page 2. Students read the membership agreement alone, then answer true, false or not given with "Everyone solves this". Discuss the answers that depend on *need not* and *may not*.' },
    { min: 13, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 12, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then compare and count the words. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student states one rule of their home or workplace as it would appear in a contract. Set the homework.' },
  ],
  board: [
    { title: 'Duty, permission, choice', blocks: [
      { t: 'table', caption: 'The modals of rules and contracts', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
        ['shall / shall not', 'a duty or prohibition in a contract', 'The member shall pay the fee each month.'],
        ['is to / is not to', 'an instruction from authority', 'Equipment is not to be removed from the gym.'],
        ['may / may not', 'formal permission or its refusal', 'Members may bring one guest per visit.'],
        ['must not', 'forbidden', 'Fire doors must not be wedged open.'],
        ['need not / is under no obligation to', 'a free choice', 'Members need not book in advance.'],
      ] },
      { t: 'ex', kind: 'choice', h: 'What does each rule mean?', items: [
        { q: 'Guests may not use the sauna.', o: ['Guests are not allowed to use it.', 'Guests do not have to use it.', 'Guests will probably not use it.'], why: '*May not* in a rule refuses permission.' },
        { q: 'You need not bring your own towel.', o: ['You can bring one, but you do not have to.', 'You are not allowed to bring one.', 'You must bring one.'], why: '*Need not*: no obligation, a free choice.' },
        { q: 'The supplier shall deliver the goods within ten days.', o: ['The supplier has a legal duty to deliver within ten days.', 'The supplier is offering to deliver.', 'The supplier might deliver within ten days.'], why: '*Shall* in a contract: a legal duty.' },
        { q: 'Candidates are not to speak during the test.', o: ['They are instructed not to speak.', 'They are unlikely to speak.', 'They do not need to speak.'], why: '*Be not to*: an instruction from authority.' },
      ] },
    ] },
    { title: 'Read the rules', blocks: [
      { t: 'reading', title: 'From a gym membership agreement', md: '**Fees.** The Member shall pay the monthly fee by direct debit on the first working day of each month. The Club is under no obligation to refund fees for months in which the Member does not attend.\n\n**Use of the Club.** Members may use the Club between six in the morning and ten at night. Members under sixteen may not use the weights area unless accompanied by an adult. Bags are not to be left in the changing rooms overnight.\n\n**Classes.** Members need not book for the swimming pool, but places in group classes must be reserved at least two hours in advance. A Member who fails to attend three booked classes in one month may be prohibited from booking for the following month.\n\n**Ending the agreement.** Either party may end this agreement by giving one month’s written notice. The Member is not required to give a reason.' },
      { t: 'ex', kind: 'tf', h: 'Read the agreement. Are the sentences true, false or not given?', ng: true, items: [
        { q: 'A member who goes on holiday for a month can ask for that month’s fee back.', a: 'f', why: 'The Club *is under no obligation to refund* fees for months without attendance.' },
        { q: 'A fifteen-year-old can use the weights on their own.', a: 'f', why: 'Under sixteen they *may not* use it *unless accompanied by an adult*.' },
        { q: 'Members have to book before using the pool.', a: 'f', why: 'Members *need not book* for the pool.' },
        { q: 'Missing classes three times can lead to a temporary ban on booking.', a: 't', why: 'They *may be prohibited from booking for the following month*.' },
        { q: 'The Club charges a fee for ending the agreement early.', a: 'ng', why: 'The text gives the notice period but says nothing about a fee.' },
        { q: 'A member who leaves must explain why.', a: 'f', why: 'The Member *is not required to give a reason*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'You do not have to give us a reason for cancelling.', cue: 'OBLIGATION', a: ['You are under no obligation to give us a reason for cancelling.', 'You’re under no obligation to give us a reason for cancelling.'], why: '*Be under no obligation to*: a free choice.' },
        { q: 'Visitors are not allowed to take photographs in the gallery.', cue: 'PROHIBITED', a: ['Visitors are prohibited from taking photographs in the gallery.'], why: '*Prohibited from* + -ing.' },
        { q: 'There is no need for you to arrive before nine.', cue: 'NEED', a: ['You need not arrive before nine.', 'You needn’t arrive before nine.', 'You do not need to arrive before nine.', 'You don’t need to arrive before nine.'], why: '*Need not*: no obligation.' },
        { q: 'The manager has instructed that this door must be kept locked.', cue: 'TO', a: ['This door is to be kept locked.'], why: '*Is to be* + past participle: an instruction from authority.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 check that the meaning is exactly the same: *must not* and *need not* are never interchangeable. Contractions count as two words, so *needn’t arrive* is three.' },
    ] },
  ],
  activities: {
    one: { title: 'House rules', md: 'The student explains the rules of a place they know well (their building, workplace or a club) as if you were a new member. Then together you rewrite three of the rules as they would appear in a formal agreement, using *shall*, *may not*, *is to* and *need not*. Check every *must not* and *need not*.' },
    small: { title: 'Read the small print', md: 'Each student writes one tricky rule in the chat using a modal from the lesson (*Members need not…*, *Guests are not to…*). The others say exactly what is allowed, forbidden or optional, and give an example situation. Score a point for each correct reading.' },
    group: { title: 'Write the agreement', md: 'Breakout rooms of three each get a situation in the chat (a shared flat, a coworking space, a summer camp). Each room writes five clauses of an agreement with headings, using at least four different forms from the table. Rooms swap agreements and find one clause that could be misunderstood.' },
  },
  homework: { book: 'u17:p2', md: 'Finish lesson 2 of unit 17 if needed, then do lesson 3 (Uphold the law). Find a real notice or set of rules in English (online or near you) and rewrite three rules: one with *shall*, one with *may not* and one with *need not*.' },
};
