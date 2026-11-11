// English B1, class 23 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c23',
  focus: 'By the end of the class every student can compare precisely: **as … as** and **not as … as**, and show the size of a difference with **much, far, a lot** (big) and **a bit, a little, slightly** (small) + comparative. Students compare ways of travelling, cities and products, and make a choice with reasons.',
  tips: [
    'The most common mistake is *very cheaper*. *Very* goes with adjectives, not comparatives: show *very cheap* / *much cheaper* side by side.',
    'Learners mix the two structures: *as tall than me*. Teach the pattern as a block: **as + adjective + as** and **-er / more + adjective + than**.',
    'Double comparatives (*more cheaper*, *more better*) are common. One rule on the board: short adjectives take *-er*, long ones take *more*, never both.',
    '*Not as … as* is often more natural and polite than a comparative: *The second hotel is not as nice as the first* sounds softer than *is worse*. Point this out.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How do you get to work or school? Is it faster than the bus? Is it cheaper?* Write two sentences on the board as students say them.' },
    { min: 10, title: 'How big is the difference?', md: 'Show board page 1. Explain the table. Go back to the warm-up sentences and make them more precise with *much* or *slightly*.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose and rewrite the sentences, then compare two things they own.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: notices in the format of B1 Preliminary Reading part 1. Students choose the meaning, then explain which words decided it.' },
    { min: 5, title: 'Fix it', md: 'Show board page 4 and add one mistake from the activity.' },
    { min: 5, title: 'Close', md: 'Each student compares this year and last year with one sentence (*My English is much better than last year*). Set the homework.' },
  ],
  board: [
    { title: 'How big is the difference?', blocks: [
      { t: 'table', caption: 'Comparing precisely', explain: ['head', 'col0'], head: ['Difference', 'Words', 'Example'], rows: [
        ['big difference', 'much, far, a lot', 'Cars are much more polluting than bikes.'],
        ['small difference', 'a bit, a little, slightly', 'The second hotel is slightly cheaper.'],
        ['no difference', 'as … as', 'It’s as cold as last winter.'],
        ['negative', 'not as … as, not nearly as … as', 'It’s not nearly as hot as last year.'],
      ] },
      { t: 'tip', md: '**Very** never goes before a comparative. Say *very cheap* or *much cheaper*, but never *very cheaper*.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'The train is ___ faster than the bus: one hour instead of three.', o: ['much', 'very', 'slightly'], why: 'A big difference: *much faster*.' },
        { q: 'My new phone is ___ bigger than the old one; you can hardly see the difference.', o: ['slightly', 'far', 'a lot'], why: 'A very small difference: *slightly*.' },
        { q: 'This flat is as big ___ the last one.', o: ['as', 'than', 'like'], why: '*as … as*.' },
        { q: 'Cycling is ___ healthier than driving.', o: ['far', 'very', 'more'], why: 'A big difference: *far healthier*.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Rewrite with not as … as. Keep the meaning.', items: [
        { q: 'The bus is slower than the train.', cue: 'The bus is not as', a: ['The bus is not as fast as the train.'], why: '*slower than* = *not as fast as*.' },
        { q: 'My town is smaller than yours.', cue: 'My town is not as', a: ['My town is not as big as yours.'], why: '*smaller than* = *not as big as*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 1', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Reading part 1: what does each text say?' },
      { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
        { q: 'TRAIN STATION: Off-peak tickets are much cheaper than peak tickets but cannot be used before 9.30 am.', o: ['You can save a lot if you travel after 9.30 am.', 'Off-peak tickets are only slightly cheaper.', 'All tickets cost the same before 9.30 am.'], why: '*much cheaper* = a big saving, and only after 9.30.' },
        { q: 'MESSAGE: The new café isn’t nearly as good as the old one, but it’s a bit closer to the office. – Sara', o: ['Sara prefers the old café, although the new one is a little nearer.', 'Sara thinks both cafés are equally good.', 'The new café is far from the office.'], why: '*not nearly as good* = much worse; *a bit closer* = a little nearer.' },
      ] },
      { t: 'tip', md: 'In Reading part 1, comparison words decide the answer: *much* and *a bit* are very different. Read the options carefully: one usually changes the size of the difference.' },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'It’s [very cheaper] in the market.', a: ['much cheaper'], why: '*very* does not go before a comparative.' },
        { s: 'He’s as tall [than] me.', a: ['as'], why: '*as … as*.' },
        { s: 'This hotel is [more cheaper] than the other.', a: ['cheaper'], why: 'Short adjectives take *-er*, not *more*.' },
        { s: 'She feels [more better] today.', a: ['much better', 'better'], why: '*better* is already a comparative.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Choosing how to travel', md: 'The student must travel from their city to another city 300 km away. Together, compare the train, the bus, the car and a plane for price, time, comfort and pollution, using *much, slightly* and *not as … as*. The student makes a final choice and explains it in four sentences.' },
    small: { title: 'Then and now', md: 'Each student compares their town or life ten years ago and now in four sentences, using a different structure each time (*much more, slightly, as … as, not nearly as*). The others ask one follow-up question each. Correct *very* + comparative at the end.' },
    group: { title: 'Which is better?', md: 'Breakout rooms of three. Each room gets two choices in the chat (city or countryside, summer or winter holidays, working from home or at the office) and must agree on a winner with four comparative sentences. Back together, each room defends its choice; another room may challenge with one sentence.' },
  },
  homework: { book: 'u5:p3', md: 'Finish book lesson 3 of unit 5 (Not as big as…), including the speaking task. Then write a short comparison (60 to 80 words) of two places you know, using *much*, *slightly* and *not as … as* at least once each.' },
};
