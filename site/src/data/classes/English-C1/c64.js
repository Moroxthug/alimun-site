// English C1, class 64 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u14:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c64',
  focus: 'By the end every student compares in detail: a big difference (*far, considerably, significantly* + comparative; *nowhere near as… as*), a small one (*marginally, slightly*), no difference with emphasis (*every bit as… as*), the top of a group (*by far the…*), one change causing another (*the more…, the more…*), multiples (*twice as much as*) and correction (*not so much X as Y*). The speaking goal: compare prices, jobs and ways of living precisely.',
  tips: [
    '*Very* never goes before a comparative. *Very cheaper* is the mistake to listen for all class; offer *far, much, considerably* instead.',
    'In *the more… the more…*, the comparative stays with its noun: *The more money you have*, not *The more you have money*. Drill three examples aloud before the activity.',
    '*Nowhere near as… as* needs both *as*’s; students often drop the first. Multiples go before *as*: *twice as much as*, not *as much twice as*.',
    '*Not so much X as Y* corrects an idea, which makes it very useful in discussion and in Speaking Part 3. Model it in a short exchange: *Is the problem the salary? Not so much the salary as the hours.*',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Compare life in your city now with ten years ago. What is more expensive, what is better, what has not changed?* Write two answers and improve the comparatives together.' },
    { min: 12, title: 'How big is the difference?', md: 'Show board page 1. Go through the table, then students choose the correct sentences alone and explain the pattern in each.' },
    { min: 10, title: 'Word order', md: 'Show board page 2. Students put the words in order, then fix the mistakes in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 2. Students write one word in each gap alone in five minutes, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student finishes the sentence *The more I…, the more I…* about their own life. Set the homework.' },
  ],
  board: [
    { title: 'How big is the difference?', blocks: [
      { t: 'table', caption: 'Comparison in detail', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
        ['far / considerably + comparative', 'a big difference', 'Flats are considerably smaller in the centre.'],
        ['marginally / slightly + comparative', 'a small difference', 'The coach is marginally slower than the train.'],
        ['nowhere near as… as', 'much less', 'My new job is nowhere near as stressful as the old one.'],
        ['every bit as… as', 'exactly the same, with emphasis', 'Cooking at home can be every bit as enjoyable as eating out.'],
        ['the + comparative…, the + comparative…', 'one change causes another', 'The earlier you book, the less you pay.'],
        ['not so much X as Y', 'Y is the better description', 'It was not so much a holiday as a working trip.'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
        { q: '', o: ['Electricity is considerably more expensive than last winter.', 'Electricity is very more expensive than last winter.', 'Electricity is considerably expensiver than last winter.'], why: '*Considerably* + comparative; *very* does not go with comparatives.' },
        { q: '', o: ['The more hours she works, the less she sees her children.', 'The more she works hours, the less she sees her children.', 'More hours she works, less she sees her children.'], why: 'The comparative stays with its noun, and both halves start with *the*.' },
        { q: '', o: ['A taxi costs about three times as much as the bus.', 'A taxi costs about as much three times as the bus.', 'A taxi costs about three times much as the bus.'], why: 'The multiple goes before *as… as*.' },
      ] },
    ] },
    { title: 'Word order and mistakes', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'The problem is not so much the price as the quality.', why: '*not so much X as Y*: correcting an idea.' },
        { a: 'Rent is by far the biggest cost for students.', why: '*by far* before a superlative.' },
        { a: 'The sooner you start saving, the better.', why: 'A short second half with no verb.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The market is [nowhere near cheap] as it used to be.', a: ['nowhere near as cheap'], why: 'The pattern needs both *as*’s.' },
        { s: 'Of the five banks, this one is by far the [more] reliable.', a: ['most'], why: 'With more than two, use the superlative.' },
        { s: 'Online shopping is [very easier] than it was.', a: ['far easier', 'much easier', 'considerably easier'], why: '*Very* does not go with comparatives.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 2', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): the sentences make one short text about the cost of living. Write one word in each gap.', items: [
        { q: 'Renting in the capital is nowhere ___ as cheap as it was a decade ago.', a: ['near'], why: '*nowhere near as… as*.' },
        { q: 'A good second-hand bike can be every ___ as reliable as a new one.', a: ['bit'], why: '*every bit as… as*: exactly as, with emphasis.' },
        { q: 'The ___ you put off saving, the harder it becomes.', a: ['longer', 'more'], why: '*the + comparative…, the + comparative…*' },
        { q: 'Food is by ___ the largest part of most family budgets.', a: ['far'], why: '*by far* + superlative.' },
        { q: 'For many young people, the problem is not so ___ the salary as the rent.', a: ['much'], why: '*not so much X as Y*.' },
        { q: 'Train fares have risen twice as fast ___ wages.', a: ['as'], why: 'A multiple + *as… as*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2 comparison gaps often hide inside a fixed frame: *nowhere ___ as*, *every ___ as*, *by ___ the*, *not so ___ as*. When you see *as* after the gap, look back for the frame.' },
    ] },
  ],
  activities: {
    one: { title: 'Then and now', md: 'The student compares two stages of their life (student days and now, two cities, two jobs) for cost, stress and happiness. Push for a range: *considerably, marginally, nowhere near as, every bit as, the more… the more…*. At the end, together list the patterns they used and the one they avoided, and make two sentences with it.' },
    small: { title: 'Which is better value?', md: 'Write three pairs in the chat (*renting or buying*, *a car or public transport*, *eating out or cooking*). For each pair, students take turns to compare them with a different pattern from the table. Nobody may repeat a pattern in the same round.' },
    group: { title: 'City comparison', md: 'Breakout rooms of three choose two cities they know and write five comparative sentences about cost and quality of life, each with a different pattern. Back together, rooms read their sentences; the class guesses which cities they are and checks the grammar.' },
  },
  homework: { book: 'u14:p2', md: 'Finish book lesson 2 of unit 14 if needed, then do lesson 3 (Making ends meet). Write a short paragraph (about 100 words) comparing the cost of living in two places you know, with at least five patterns from today.' },
};
