// English B2, class 41 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c41',
  focus: 'By the end of the class every student can express conditions and precautions precisely with *unless*, *provided that*, *as long as*, *in case* and *otherwise*, knows that *in case* is about a precaution and not a condition, and uses the present tense after these words for the future.',
  tips: [
    'The biggest confusion is *in case* and *if*: *Take an umbrella in case it rains* (a precaution, take it anyway) is different from *Take an umbrella if it rains* (only when it rains). Spend time on this contrast.',
    'Common mistakes: *will* after these words (*unless it will rain*), double negatives with *unless* (*unless you don’t hurry*), and *in case of* + clause.',
    '*Provided that* and *as long as* both mean *only if*; *provided that* is more formal. *Otherwise* starts a new clause and means *if not*.',
    'The second half of B2 starts here: after the mid-level check, give a quick word of encouragement and remind students of their two practice points.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you always take with you when you travel, just in case?* Each student answers in one sentence.' },
    { min: 15, title: 'Conditions and precautions', md: 'Show board page 1. Go through the table, then the *in case* and *if* contrast. Students say two sentences about their own habits.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose and fix alone, then check.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B2 First Part 4 key word transformations. Students write alone, then reveal.' },
    { min: 5, title: 'Close', md: 'Each student gives one piece of health advice with *as long as* or *unless*. Set the homework.' },
  ],
  board: [
    { title: 'Conditions and precautions', blocks: [
      { t: 'table', caption: 'Beyond if', explain: ['head', 'col2'], head: ['Word', 'Example', 'Meaning'], rows: [
        ['unless', 'You won’t improve unless you practise.', 'if… not'],
        ['provided (that) / as long as', 'You can go, as long as you’re back by ten.', 'only if'],
        ['in case', 'Take some water in case you get thirsty.', 'as a precaution'],
        ['otherwise', 'Leave now; otherwise you’ll miss the bus.', 'if not (new clause)'],
      ] },
      { t: 'examples', items: [
        { s: 'I’ll take a jacket **in case** it gets cold.', n: 'I take it anyway, to be ready.' },
        { s: 'I’ll put on a jacket **if** it gets cold.', n: 'Only when it gets cold.' },
        { s: 'We’ll go **unless** it rains.', n: 'Present tense after *unless*, even for the future.' },
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
        { q: 'Write down the address ___ you forget it.', o: ['in case', 'unless', 'provided that'], why: 'A precaution: *in case*.' },
        { q: 'You can borrow my bike ___ you look after it.', o: ['as long as', 'in case', 'unless'], why: 'Only if: *as long as*.' },
        { q: 'I won’t go ___ you come with me.', o: ['unless', 'in case', 'otherwise'], why: '*if you don’t come*: *unless*.' },
        { q: 'Book early; ___ there won’t be any seats.', o: ['otherwise', 'unless', 'in case'], why: '*if not*, new clause: *otherwise*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Unless it [will rain], we’ll have a picnic.', a: ['rains'], why: 'Present tense after *unless*.' },
        { s: 'You won’t pass unless you [don’t study].', a: ['study'], why: '*unless* is already negative.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: use the word given and between two and five words.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence.', items: [
        { q: 'If you don’t book a table, we won’t get in.', cue: 'UNLESS', a: ['We won’t get in unless you book a table.', 'Unless you book a table, we won’t get in.'], why: '*unless* = *if… not*.' },
        { q: 'You can use my car, but only if you drive carefully.', cue: 'LONG', a: ['You can use my car as long as you drive carefully.'], why: '*as long as* = only if.' },
        { q: 'Take your phone because you might need to call me.', cue: 'CASE', a: ['Take your phone in case you need to call me.'], why: 'A precaution: *in case*.' },
      ] },
      { t: 'tip', md: '*unless*, *as long as* and *in case* are favourite Part 4 words. Watch the tense: the clause after them uses the present for the future, never *will*.' },
    ] },
  ],
  activities: {
    one: { title: 'House rules', md: 'The student is lending their flat to a friend for a week. They give the friend six rules and precautions using every word from page 1 (*You can have guests as long as…*, *Leave a window open in case…*). You play the friend and ask *What if…?* questions the student must answer with the same words.' },
    small: { title: 'Survival kit', md: 'In pairs, students plan a weekend hiking trip. They agree on what to take and why, using *in case* at least three times, and on their rules for the trip with *as long as*, *unless* and *otherwise*. Each pair presents its kit; others challenge one item (*Why take that?*).' },
    group: { title: 'Healthy rules', md: 'Each breakout room of three writes five rules for a healthier life using different condition words (*You can eat dessert as long as…*). Back in the main room, rooms read their rules and the class votes on the most useful and the most unrealistic.' },
  },
  homework: { book: 'u9:p1', md: 'Finish book lesson 1 of unit 9 (Unless, provided that, in case), including the speaking task. Then write six sentences about your own health or travel habits, using each word from today at least once.' },
};
