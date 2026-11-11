// English B2, class 53 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c53',
  focus: 'By the end of the class every student can talk about the very near future and schedules with *be about to*, *be due to* and *be on the point of*, choose the right one for the situation (a moment from now, an official time, almost happening), and use them in travel announcements, messages and stories.',
  tips: [
    '*Be about to* = in the next moment; we do not add a time expression (*I’m about to leave now* is fine, *I’m about to leave tomorrow* is wrong).',
    '*Be due to* = planned or expected at an official time: *The train is due to arrive at 10.15*. It is very common in announcements.',
    '*Be on the point of* is followed by **-ing**: *She was on the point of giving up*. Students often write *on the point to give up*.',
    'In the past, these forms tell stories of things that almost happened: *I was about to call you when you arrived.*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read a short station announcement aloud: *The 9.40 to Bristol is due to depart from platform 4.* Ask: *Is it certain? Is it now?*' },
    { min: 12, title: 'Three ways to be close', md: 'Board page 1. Go through the table; students mime situations and others describe them (*He is about to jump!*).' },
    { min: 10, title: 'Practice', md: 'Board page 2. The class solves the exercise and the mistake hunt.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: Listening Part 1 style. Read each short text aloud twice; students answer, then check.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they were about to do when something stopped them. Set the homework.' },
  ],
  board: [
    { title: 'Very soon or officially planned', blocks: [
      { t: 'table', caption: 'The near future', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
        ['be about to + verb', 'in the next moment', 'Hurry, the doors are about to close!'],
        ['be due to + verb', 'expected at an official time', 'The flight is due to land at 18.30.'],
        ['be on the point of + -ing', 'very close, often a decision', 'I was on the point of selling my car.'],
        ['be just about to (past)', 'almost happened', 'We were just about to leave when it started to rain.'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'Don’t get in now, the lift ___ go up.', o: ['is about to', 'is due to', 'is on the point of'], why: 'In the next moment: *is about to*.' },
        { q: 'The new bridge ___ open next May.', o: ['is due to', 'is about to', 'is on the point'], why: 'A planned official time: *is due to*.' },
        { q: 'He was on the point of ___ the job when they offered him more money.', o: ['quitting', 'quit', 'to quit'], why: '*On the point of* + -ing.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I’m [about to leave next week] for Canada.', a: ['leaving next week', 'going to leave next week'], why: '*Be about to* is for the next moment, not for next week.' },
        { s: 'We were on the point [to cancel] the trip.', a: ['of cancelling'], why: '*On the point of* + -ing.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 1', blocks: [
      { t: 'tip', art: 'owl', md: 'In Listening Part 1 you hear eight short, separate extracts. The answer is often **not** the first time or place you hear: listen for words like *due*, *about to*, *changed*, *instead*.' },
      { t: 'reading', title: 'The teacher reads these aloud twice', md: '**Extract 1.** "Good morning. The 8.15 service to Manchester, due to depart from platform 2, will now leave from platform 6. We apologise for the change."\n\n**Extract 2.** "Hi, it’s Sara. I was about to book the hotel by the beach, but the reviews were awful, so I’ve booked the one in the old town instead."' },
      { t: 'ex', kind: 'choice', h: 'In the format of B2 First Listening Part 1: choose the right answer.', items: [
        { q: 'Extract 1: Which platform will the Manchester train leave from?', o: ['6', '2', '8'], why: 'It was due to leave from 2 but will now leave from 6.' },
        { q: 'Extract 2: Which hotel did Sara book?', o: ['the one in the old town', 'the one by the beach', 'she has not booked yet'], why: 'She was about to book the beach hotel, but booked the old town one instead.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Announcer and traveller', md: 'The student writes and reads three station or airport announcements with *due to* and *about to*. You play a confused traveller asking questions. Then they tell you about a time they were on the point of giving something up.' },
    small: { title: 'Nearly!', md: 'Each student tells the group a short true story about something that almost happened (*I was about to…when…*). The others ask two questions each. The group votes for the closest escape.' },
    group: { title: 'Departure board', md: 'In breakout rooms of three, students write a departure board of five trains or flights with delays and changes, then write announcements for it. Back together, each room reads its announcements and the class answers one question about each.' },
  },
  homework: { book: 'u11:p2', md: 'Finish book lesson 2 of unit 11. Then write a short message (80 words) to a friend about a trip, using *be due to*, *be about to* and *be on the point of*.' },
};
