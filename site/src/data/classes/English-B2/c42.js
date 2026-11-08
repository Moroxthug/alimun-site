// English B2, class 42 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c42',
  focus: 'By the end of the class every student can explain why people do things with *to*, *in order to*, *so as to*, *so that* and *for*, uses the right negative forms (*in order not to*, *so as not to*, *so that… won’t*), and knows that *for* + verb is wrong for a purpose (*I went out for buy bread*).',
  tips: [
    'Common mistakes: *for* + verb for purpose (*I came here for learn English*), *to not* instead of *not to* in formal writing, and a full verb after *so that* without a modal (*so that I understand* is fine, but *so that I will can understand* is not).',
    '*so that* is needed when the subject changes: *I spoke slowly so that the students could follow.* With the same subject, *to* or *in order to* is simpler.',
    'After *so that*, use *can* or *will* for the present and future, *could* or *would* for the past.',
    'Link today to health habits from unit 9 so the language feels useful: *I walk to work to stay fit.*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Why are you learning English?* Each student gives two reasons. Note how they express purpose.' },
    { min: 15, title: 'Explaining purpose', md: 'Show board page 1. Go through the table, especially the negatives and the change of subject with *so that*.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose and fix alone, then check.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 2, an open cloze. Students write alone, then reveal.' },
    { min: 5, title: 'Close', md: 'Each student explains one healthy habit and its purpose. Set the homework.' },
  ],
  board: [
    { title: 'Explaining purpose', blocks: [
      { t: 'table', caption: 'Why we do things', explain: ['head', 'col2'], head: ['Form', 'Example', 'Note'], rows: [
        ['to + verb', 'I walk to work to stay fit.', 'the most common'],
        ['in order to / so as to', 'We left early in order to avoid the traffic.', 'more formal'],
        ['in order not to / so as not to', 'I whispered so as not to wake the baby.', 'negative purpose'],
        ['so that + can / will / could / would', 'I spoke slowly so that everyone could follow.', 'a different subject'],
        ['for + noun', 'I went to the shop for some bread.', 'a noun, not a verb'],
      ] },
      { t: 'tip', md: 'Use **for** with a noun (*for some bread*), never with a verb: not *for buy bread*, but *to buy bread*.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best option.', items: [
        { q: 'She set two alarms ___ oversleep.', o: ['so as not to', 'so as to not', 'for not'], why: 'Negative purpose: *so as not to*.' },
        { q: 'I printed the map ___ my parents could find the house.', o: ['so that', 'in order to', 'for'], why: 'A different subject: *so that*.' },
        { q: 'He joined a gym ___ get stronger.', o: ['to', 'for', 'so that'], why: 'Same subject: *to* + verb.' },
        { q: 'We went to the market ___ fresh vegetables.', o: ['for', 'to', 'so that'], why: 'A noun: *for*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I came to London [for study] English.', a: ['to study'], why: 'Purpose with a verb: *to* + verb.' },
        { s: 'Speak clearly so that the class [can to] hear you.', a: ['can'], why: '*can* + base verb.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 2: write **one** word in each gap.\n\nMany people now walk or cycle to work (1) ___ order to stay healthy. Some leave home earlier so (2) ___ they can avoid the busiest roads, and others take the stairs at work so (3) ___ not to sit all day. Small changes like these are enough (4) ___ make a real difference.' },
      { t: 'ex', kind: 'gap', h: 'Write one word for each gap.', items: [
        { q: 'Gap 1: ___ order to stay healthy', a: ['in'], why: '*in order to*.' },
        { q: 'Gap 2: so ___ they can avoid the busiest roads', a: ['that'], why: '*so that* + subject + *can*.' },
        { q: 'Gap 3: so ___ not to sit all day', a: ['as'], why: '*so as not to*.' },
        { q: 'Gap 4: enough ___ make a real difference', a: ['to'], why: '*enough to* + verb.' },
      ] },
      { t: 'tip', md: 'Part 2 often tests the small words in fixed phrases: *in order to*, *so as to*, *so that*. If the gap comes just before *order*, *as* or *that*, check these phrases first.' },
    ] },
  ],
  activities: {
    one: { title: 'Why do you do it?', md: 'Ask the student about ten habits in their daily life (getting up at a certain time, drinking coffee, their route to work). For each, they explain the purpose with a different form from page 1, including two negatives and two with *so that* and a different subject.' },
    small: { title: 'Healthy week plan', md: 'In pairs, students plan a healthier week for a busy office worker: five changes, each with its purpose (*She’ll cycle to work so as not to sit in traffic*). Pairs present their plans and the group chooses the most realistic one.' },
    group: { title: 'Purpose chain', md: 'In breakout rooms of three, one student says an action (*I bought a new alarm clock*), the next gives a purpose, the third adds a purpose for that purpose, and so on, using a different form each time. Rooms share their longest chains in the main room.' },
  },
  homework: { book: 'u9:p2', md: 'Finish book lesson 2 of unit 9 (So that, in order to). Then write about 100 words on three healthy habits you have or want to start, explaining the purpose of each with at least three different forms.' },
};
