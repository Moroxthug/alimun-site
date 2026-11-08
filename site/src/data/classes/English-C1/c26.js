// English C1, class 26 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c26',
  focus: 'By the end every student sets conditions with more than *if*, and chooses the right shade of meaning: *provided (that)*, *as long as* and *on condition that* for a necessary condition, *supposing* and *assuming* to imagine, *unless*, *even if*, *but for* + noun and *otherwise*; and uses inverted conditionals in formal English (*Should you need…*, *Were the price to rise…*, *Had we known…*). The speaking goal: negotiate an agreement with clear conditions, then write it up formally.',
  tips: [
    'Only three verbs can invert in a condition: *should*, *were* and *had*. Students sometimes try *Did I know…*; stop it early.',
    'The negative in an inversion is never contracted: *Had I not seen*, never *Hadn’t I seen*, which looks like a question.',
    'After *provided*, *as long as* and *unless*, use a present tense for the future: *Provided you finish early*, not *you will finish*.',
    '*Unless* already means *if not*, so *Unless you don’t hurry* is a double negative. *But for* takes a noun: *But for his help*, not *But for he helped*.',
    'Inversion sounds formal: good in letters, notices, contracts and essays, stiff with friends. Ask students where they would see each sentence.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say: *You can borrow my car.* Ask students to add a condition in as many ways as they can (*as long as…*, *provided…*, *on condition that…*). Write the most precise ones on the board.' },
    { min: 12, title: 'Not just if', md: 'Show board page 1. Students choose the best word or phrase, then say what shade of meaning it adds.' },
    { min: 10, title: 'Formal conditions', md: 'Show board page 2. Students fix the mistakes, then turn two neutral sentences into formal notices with an inversion.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite alone, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student gives one formal instruction with *Should you…* for a place they know (a gym, a hotel, their office). Set the homework.' },
  ],
  board: [
    { title: 'Not just if', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best word or phrase.', items: [
        { q: 'You can work from home on Fridays ___ you answer your phone.', o: ['as long as', 'unless', 'otherwise'], why: 'A necessary condition: *as long as*.' },
        { q: '___ you won the lottery, what would you do first?', o: ['Supposing', 'Provided', 'Unless'], why: 'Imagining a situation, often in a question: *supposing*.' },
        { q: '___ the rain, the match would have finished on time.', o: ['But for', 'Unless', 'Even if'], why: '*But for* + noun: without the rain.' },
        { q: 'Book early; ___, you may not get a seat.', o: ['otherwise', 'provided', 'supposing'], why: '*Otherwise*: if you do not.' },
        { q: 'I’m going to the beach tomorrow, ___ it rains.', o: ['even if', 'as long as', 'provided that'], why: 'The condition will not change the plan: *even if*.' },
        { q: 'The loan was approved ___ that it would be repaid within a year.', o: ['on condition', 'as long', 'supposing'], why: 'The most formal necessary condition: *on condition that*.' },
      ] },
    ] },
    { title: 'Formal conditions', blocks: [
      { t: 'table', caption: 'Inverted conditionals', explain: ['head', 'col2'], head: ['Inversion', 'Example', 'Neutral version'], rows: [
        ['Should + subject + verb', 'Should you lose your key, contact reception.', 'If you lose your key (which may not happen)'],
        ['Were + subject + to + verb', 'Were the bank to raise rates, many families would struggle.', 'If the bank raised rates'],
        ['Had + subject + past participle', 'Had the alarm worked, the damage would have been smaller.', 'If the alarm had worked'],
        ['Had it not been for + noun', 'Had it not been for the guide, we would have got lost.', 'If it hadn’t been for the guide'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Provided you [will finish] the report, you can leave early.', a: ['finish'], why: 'Present tense for the future after *provided*.' },
        { s: '[Hadn’t we] booked, we would have had nowhere to stay.', a: ['Had we not'], why: 'No contraction in an inverted negative.' },
        { s: 'Unless you [don’t hurry], you’ll miss the train.', a: ['hurry'], why: '*Unless* already means *if not*.' },
        { s: 'But for [he helped], we would have failed.', a: ['his help'], why: '*But for* + noun.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. The new part has three to six words, including the word given.', items: [
        { q: 'If you have any questions, please ask a member of staff.', cue: 'SHOULD', a: ['Should you have any questions, please ask a member of staff.'], why: 'A formal future condition: *Should you have*.' },
        { q: 'If we had known about the delay, we would have left later.', cue: 'HAD', a: ['Had we known about the delay, we would have left later.'], why: 'An inverted past condition: no *if*.' },
        { q: 'If the bank raised interest rates, many families would struggle.', cue: 'WERE', a: ['Were the bank to raise interest rates, many families would struggle.'], why: '*Were* + subject + *to* + verb.' },
        { q: 'Without the lifeguard’s help, the boy would have drowned.', cue: 'FOR', a: ['But for the lifeguard’s help, the boy would have drowned.', 'Had it not been for the lifeguard’s help, the boy would have drowned.', 'If it hadn’t been for the lifeguard’s help, the boy would have drowned.', 'If it had not been for the lifeguard’s help, the boy would have drowned.'], why: '*But for* or *had it not been for* + noun.' },
        { q: 'You can come to the party, but only if you bring something to eat.', cue: 'PROVIDED', a: ['You can come to the party provided you bring something to eat.', 'You can come to the party provided that you bring something to eat.'], why: '*Only if* becomes *provided (that)*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'If the word given is *Had*, *Should* or *Were* at the start of the sentence, expect an inverted conditional: no *if*, and no contraction in the negative.' },
    ] },
  ],
  activities: {
    one: { title: 'The deal', md: 'Role-play a negotiation: the student wants to rent your flat for the summer, or to work four days a week. Each side sets conditions with *provided*, *as long as*, *on condition that* and *unless*. When you agree, the student dictates the agreement as a formal note with two inversions (*Should the tenant…*). Correct it together.' },
    small: { title: 'House rules', md: 'The group writes the rules for an imaginary shared house in the chat. Each student adds one rule with a different condition word, and one formal notice with an inversion (*Should the fire alarm sound…*). Then the group reads the rules aloud and decides which sound too stiff for friends.' },
    group: { title: 'Notices and contracts', md: 'Breakout rooms of three each get a place in the chat (a hotel, a gym, a library, a car hire company). Each room writes four formal notices with *Should*, *Were* and *Had*, and one condition with *on condition that*. Bring everyone back; the class checks every inversion for contractions and *if*.' },
  },
  homework: { book: 'u6:p3', md: 'Finish lesson 3 of unit 6 if needed, then do lesson 4 (Platform Four). Write a short formal notice (about 80 words) for a place you know, with at least three inverted conditionals and two other condition words.' },
};
