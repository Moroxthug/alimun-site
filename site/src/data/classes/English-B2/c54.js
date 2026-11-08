// English B2, class 54 (docs/LESSONS_PLAN.md). Builds on book lesson u11:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c54',
  focus: 'By the end of the class every student can build and use compound adjectives (*a two-hour flight, a five-star hotel, well-known, eco-friendly, last-minute, hand-made*), knows that numbers in compounds stay singular (*a ten-day trip*, not *ten-days*), and uses them to describe travel and places precisely and naturally.',
  tips: [
    'The most common mistake: *a two-hours flight*. In a compound adjective before a noun, the noun part is **singular**. Compare: *The flight lasts two hours* / *a two-hour flight*.',
    'Hyphens show that the words work together before a noun; after the verb *be*, many compounds lose the hyphen (*The hotel is well known*). Do not spend long on this; accuracy before the noun matters more.',
    'Teach three patterns: number + noun (*a three-day course*), well/badly + past participle (*well-paid, badly organised*), noun + adjective (*eco-friendly, world-famous*).',
    'These adjectives are very useful in B2 First reviews and articles; recycle them in the writing homework.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask students to describe their last trip in one sentence. Rewrite one answer on the board with a compound adjective.' },
    { min: 12, title: 'Three patterns', md: 'Board page 1. Go through the patterns; students add one example of their own for each.' },
    { min: 10, title: 'Practice', md: 'Board page 2. The class solves the exercise and the mistake hunt.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: Use of English Part 4 with compound adjectives. Students work alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student describes their dream holiday in one sentence with two compound adjectives. Set the homework.' },
  ],
  board: [
    { title: 'Compound adjectives', blocks: [
      { t: 'table', caption: 'Three patterns', explain: ['head', 'col0'], head: ['Pattern', 'Examples'], rows: [
        ['number + noun (singular)', 'a two-hour flight, a five-star hotel, a ten-minute walk'],
        ['well / badly + past participle', 'well-known, well-paid, badly organised, well-behaved'],
        ['noun or adjective + adjective or participle', 'eco-friendly, world-famous, hand-made, last-minute, open-minded'],
      ] },
      { t: 'tip', art: 'owl', md: 'Numbers make the noun singular: *The walk takes ten minutes* becomes *a ten-**minute** walk*.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right compound adjective.', items: [
        { q: 'We stayed in a ___ hotel with a pool on the roof.', o: ['five-star', 'five-stars', 'five star’s'], why: 'Number + singular noun: *five-star*.' },
        { q: 'The museum is ___ for its collection of old maps.', o: ['world-famous', 'world-fame', 'famous-world'], why: 'Noun + adjective: *world-famous*.' },
        { q: 'They booked a ___ trip to Rome the night before.', o: ['last-minute', 'last-minutes', 'minute-last'], why: 'A trip booked at the last minute: *last-minute*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'It was a [three-hours] journey by coach.', a: ['three-hour'], why: 'In a compound adjective the noun is singular.' },
        { s: 'She is a [paid-well] engineer.', a: ['well-paid'], why: 'The pattern is *well* + past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'tip', art: 'owl', md: 'Compound adjectives are a favourite Part 4 trick: a sentence with *takes / lasts + time* often becomes *a … -hour / -minute* + noun.' },
      { t: 'ex', kind: 'transform', h: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence using the word given.', items: [
        { q: 'The walk to the beach takes ten minutes. WALK', cue: 'It is a', a: ['It is a ten-minute walk to the beach.'], why: 'Number + singular noun before *walk*.' },
        { q: 'Everybody knows this restaurant. WELL', cue: 'This restaurant is', a: ['This restaurant is well known.', 'This restaurant is well-known.'], why: '*Well known* = known by many people.' },
        { q: 'The course lasts three days. COURSE', cue: 'It is a', a: ['It is a three-day course.'], why: '*Three-day* before the noun, singular.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Holiday brochure', md: 'The student writes a short holiday advert (six sentences) for a place they love, using at least five compound adjectives. Read it together and improve two of them. Then you describe a bad trip and they rewrite your sentences with compounds.' },
    small: { title: 'Describe, guess', md: 'Each student describes a famous place or object using three compound adjectives (*a world-famous, eight-hundred-year-old, much-visited building*). The others guess. Correct singular nouns as you go.' },
    group: { title: 'Travel agency', md: 'In breakout rooms of three, each room creates a two-week trip with a short plan full of compound adjectives (*a two-hour drive, a family-run hotel*). Back together, rooms present their trips and the class chooses one to book.' },
  },
  homework: { book: 'u11:p3', md: 'Finish book lesson 3 of unit 11. Then write a short review (100 words) of a place you have stayed, with at least five compound adjectives.' },
};
