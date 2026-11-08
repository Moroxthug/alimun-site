// English B2, class 57 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c57',
  focus: 'By the end of the class every student can compare things in detail, not just say *bigger* or *cheaper*: big and small differences with *far, much, a lot, slightly, a bit*, the strong negative *nowhere near as … as*, and the pattern *the more…, the more…*. Students should compare real products, prices and choices aloud, giving the size of the difference every time.',
  tips: [
    'The most common mistake is using *very* with a comparative: *very cheaper*. Write it on the board crossed out and replace it with *far / much cheaper*.',
    'In *the… the…* sentences students often drop the second *the* or use *more* twice wrongly: *The more you pay, more you get*. Insist on both halves starting with *the*.',
    '*Nowhere near as … as* and *not nearly as … as* both mean a big difference. *Not quite as … as* means a small one. A simple line on the board from *slightly* to *nowhere near* helps.',
    'Speakers of Romance languages sometimes say *more cheap*; speakers of German and Dutch may say *much more better*. Correct both quickly.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show two prices on the board (a coffee at home and in a café). Ask: *How much more expensive is the café? A little or a lot?* Accept any answer, then point out the words students used.' },
    { min: 12, title: 'How big is the difference?', md: 'Show board page 1. Go through the scale from *slightly* to *far*, and the strong negative *nowhere near*. Students place each sentence on the scale.' },
    { min: 10, title: 'The… the…', md: 'Show board page 2. Students complete the sentences, then make one about their own life.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 4. Students write their answers alone, then compare. Count the words together.' },
    { min: 5, title: 'Close', md: 'Each student compares two things they bought this year in one sentence with a modifier. Set the homework.' },
  ],
  board: [
    { title: 'How big is the difference?', blocks: [
      { t: 'table', caption: 'Modifiers with comparatives', explain: ['head', 'col0'], head: ['Size of the difference', 'Words', 'Example'], rows: [
        ['small', 'slightly, a bit, a little', 'The train is slightly faster than the bus.'],
        ['big', 'much, far, a lot, considerably', 'Renting is far more expensive than it was.'],
        ['big, negative', 'nowhere near as … as, not nearly as … as', 'My phone is nowhere near as good as yours.'],
        ['small, negative', 'not quite as … as', 'This flat is not quite as big as the last one.'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
        { q: 'The new model costs 2 euros more. It is ___ more expensive.', o: ['slightly', 'far', 'nowhere near'], why: 'Two euros is a small difference: *slightly*.' },
        { q: 'A taxi is ___ quicker than walking across the city.', o: ['much', 'very', 'more'], why: '*Very* never goes with a comparative; *much* shows a big difference.' },
        { q: 'The sequel was ___ as good as the first film.', o: ['nowhere near', 'far', 'slightly'], why: '*Nowhere near as … as* means much worse.' },
      ] },
    ] },
    { title: 'The more…, the more…', blocks: [
      { t: 'examples', items: [
        { s: '**The more** you save, **the more** options you have.', n: 'Two changes that go together.' },
        { s: '**The cheaper** the flight, **the less** comfortable the seat.', n: 'Comparative adjective, then a clause.' },
        { s: '**The sooner, the better.**', n: 'A short fixed phrase.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
        { q: 'The longer you wait, ___ more expensive the tickets get.', a: ['the'], why: 'Both halves start with *the*.' },
        { q: 'The ___ you shop online, the more adverts you see.', a: ['more'], why: '*The more* + clause.' },
        { q: 'Prices here are a ___ higher than in my town, maybe 5% more.', a: ['bit', 'little'], why: 'A small difference: *a bit / a little higher*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'This laptop is [very lighter] than my old one.', a: ['much lighter', 'far lighter', 'a lot lighter'], why: '*Very* cannot go with a comparative.' },
        { s: 'The more you practise, [more confident] you feel.', a: ['the more confident'], why: 'The second half also needs *the*.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so that it means the same as the first. Use the word given and **two to five words**. Do not change the word given.' },
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence. Use the word given.', items: [
        { q: 'My old phone was much better than this one. (NEAR) This phone is ___ my old one.', cue: 'NEAR', a: ['nowhere near as good as'], why: '*Much better* becomes *nowhere near as good as*.' },
        { q: 'If you start early, you will finish early. (SOONER) The ___ you will finish.', cue: 'SOONER', a: ['sooner you start, the sooner'], why: 'The pattern *the sooner…, the sooner…*.' },
        { q: 'The bus is slightly slower than the train. (QUITE) The bus is ___ as the train.', cue: 'QUITE', a: ['not quite as fast'], why: 'A small negative difference: *not quite as … as*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 the answer is usually two changes at once: a grammar pattern and a word change (*better* becomes *as good as*). Count your words: contractions count as two (*isn’t* = *is not*).' },
    ] },
  ],
  activities: {
    one: { title: 'Which would you choose?', md: 'Give the student three pairs to compare: a train or a plane for a 500 km trip, renting or buying a flat, a cheap or an expensive phone. For each pair they compare at least three features with a modifier, then decide. Note every comparative without a modifier and ask them to add one.' },
    small: { title: 'Price detectives', md: 'Each student finds the price of the same thing (a coffee, a cinema ticket, a month of rent) in their city and posts it in the chat. The group compares the cities using *slightly, far, nowhere near* and finishes with one *the… the…* sentence about prices.' },
    group: { title: 'The best deal', md: 'In breakout rooms of three, give each room two invented phone plans in the chat. Rooms compare them and choose one, using at least five modified comparatives. Back together, each room defends its choice in one minute; the class votes.' },
  },
  homework: { book: 'u12:p2', md: 'Finish book lesson 2 of unit 12. Then write five sentences comparing two shops, two cities or two jobs you know, using *slightly*, *far*, *nowhere near*, *not quite* and one *the… the…* sentence.' },
};
