// English B2, class 60 (docs/LESSONS_PLAN.md). Review of units 11 and 12. Draft for the owner's review.
export const LESSON = {
  id: 'c60',
  focus: 'By the end of the class every student has used the main language of units 11 and 12 in speaking: *both, either, neither, each, every, none*; the near future (*be about to, be due to, be on the point of*); compound adjectives; criticism and regret with *should have, ought to have, could have*; and comparisons with modifiers. The most common mistakes from both units are corrected, and students know what to practise before the two unit tests.',
  tips: [
    'Keep explanations to one sentence: the aim is to use the language and fix mistakes, not to teach it again.',
    'Top mistakes to listen for: *neither of them are* in formal writing (prefer *is*), *a two-hours flight*, *should went*, *very cheaper*, *about to leaving*.',
    'Regret language comes alive with real stories. Ask students about a trip or a purchase that went wrong; it combines both units.',
    'For students who are behind, note one point each from each unit and give it as extra practice in the book.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Tell us about a trip or a purchase you regret.* Each student answers in one sentence with *should have*.' },
    { min: 12, title: 'Quantity and the near future', md: 'Show board page 1. Students choose the right words, then say a sentence about their own next trip with *be about to* or *be due to*.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 2. Students correct the sentences from both units and explain each rule in a few words.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 4 mixing both units. Students work alone, then check together and count words.' },
    { min: 5, title: 'Close', md: 'Each student names one point from units 11 and 12 they want to practise more. Set the homework.' },
  ],
  board: [
    { title: 'Quantity and the near future', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'I asked two hotels, but ___ of them had a room.', o: ['neither', 'either', 'none'], why: 'Two things, negative: *neither*.' },
        { q: '___ passenger must show a passport.', o: ['Every', 'All', 'Both'], why: '*Every* + singular noun.' },
        { q: 'Hurry up! The train is ___ to leave.', o: ['about', 'due', 'point'], why: '*Be about to* = very soon.' },
        { q: 'The flight is ___ to land at 6 p.m.', o: ['due', 'about', 'going'], why: '*Be due to* = planned for a time.' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It was a [two-hours] delay.', a: ['two-hour'], why: 'In compound adjectives the noun stays singular.' },
        { s: 'You [should went] to bed earlier.', a: ['should have gone'], why: 'Past criticism: *should have* + past participle.' },
        { s: 'This flat is [very bigger] than ours.', a: ['much bigger', 'far bigger'], why: '*Very* cannot go with a comparative.' },
        { s: 'We were [about to leaving] when it started to rain.', a: ['about to leave'], why: '*About to* + base verb.' },
        { s: 'I [could have buy] it cheaper online.', a: ['could have bought'], why: '*Could have* + past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so that it means the same as the first, using the word given and **two to five words**.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence. Use the word given.', items: [
        { q: 'It was a mistake to book such an early flight. (SHOULD) We ___ such an early flight.', cue: 'SHOULD', a: ['should not have booked', 'shouldn’t have booked'], why: 'Criticism of the past: *shouldn’t have booked*.' },
        { q: 'The meeting will start very soon. (ABOUT) The meeting ___ start.', cue: 'ABOUT', a: ['is about to'], why: 'Very soon: *be about to*.' },
        { q: 'I didn’t like the first or the second hotel. (NEITHER) I liked ___ hotels.', cue: 'NEITHER', a: ['neither of the'], why: '*Neither of the* + plural noun, with a positive verb.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Part 4 often tests these units: *should have* for regret and *neither / either* for two things. Check the verb is positive after *neither*: *I liked neither*, not *I didn’t like neither*.' },
    ] },
  ],
  activities: {
    one: { title: 'The trip that went wrong', md: 'The student tells a true or invented story about a disastrous trip, using *should have*, *could have*, a compound adjective (*a ten-hour delay*) and *about to*. Correct three mistakes after the story and ask them to retell the key sentences correctly.' },
    small: { title: 'Two options', md: 'Give the group three decisions with two options each (train or plane, save or spend, beach or city). For each one students say what is good about both, what is bad about either, and which they would choose, comparing with modifiers.' },
    group: { title: 'Regret chain', md: 'In breakout rooms of four, one student describes a bad decision (*I bought a cheap tent*); each of the others adds a regret or criticism with a different modal (*You should have…, You could have…, You ought to have…*). Rotate. Bring everyone back to share the best story.' },
  },
  homework: { book: 'u11 u12', md: 'Do the unit tests of units 11 and 12 in the book. Then look again at the lessons with your lowest scores and redo their exercises.' },
};
