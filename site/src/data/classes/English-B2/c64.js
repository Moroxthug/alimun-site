// English B2, class 64 (docs/LESSONS_PLAN.md). Builds on book lesson u13:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c64',
  focus: 'By the end of the class every student can describe art, music and performances with precise words and natural collocations: *a breathtaking performance, a moving song, a catchy tune, a thought-provoking exhibition, a standing ovation, a sell-out show*. Students should describe one performance or work of art for a full minute without repeating *nice*, *good* or *beautiful*.',
  tips: [
    'Teach the words in pairs (adjective + noun), not alone. *Catchy* almost always goes with *tune* or *song*; *thought-provoking* with *film, book, exhibition*.',
    'Show the difference between *moving* (it touches your feelings) and *exciting*. Many learners confuse them.',
    'Listen for false friends: *sensible* (Spanish/French *sensible* = sensitive), *actual* (= current in many languages), *spectacle* (show).',
    'The speaking activity works best with real pictures; share two or three photos of paintings or stage shows on camera.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Show a photo of a painting or performance. Each student describes it in one sentence. Note every *nice* and *beautiful* on the board.' },
    { min: 12, title: 'Strong collocations', md: 'Show board page 1. Match the adjectives to the nouns, then students use two of them about something they have seen.' },
    { min: 10, title: 'Which word?', md: 'Show board page 2. Students choose the right word and explain the difference between pairs like *moving* and *exciting*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Speaking Part 2, comparing two photos. Model the first minute, then students try.' },
    { min: 5, title: 'Close', md: 'Each student replaces one of the *nice* words from the warm-up with a precise word. Set the homework.' },
  ],
  board: [
    { title: 'Strong collocations', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the words that often go together.', pairs: [
        ['a catchy', 'tune'],
        ['a thought-provoking', 'exhibition'],
        ['a standing', 'ovation'],
        ['a breathtaking', 'view of the stage'],
        ['a sell-out', 'show'],
      ] },
      { t: 'examples', items: [
        { s: 'The dancers gave a **breathtaking performance**.', n: 'So good that it surprises you.' },
        { s: 'It’s a **moving** story about two brothers.', n: 'It touches your feelings.' },
        { s: 'The band got a **standing ovation**.', n: 'The audience stood up to clap.' },
      ] },
    ] },
    { title: 'Which word?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
        { q: 'I cried at the end. It was such a ___ film.', o: ['moving', 'exciting', 'catchy'], why: 'It touched her feelings: *moving*.' },
        { q: 'I can’t stop singing that ___ chorus.', o: ['catchy', 'thought-provoking', 'breathtaking'], why: 'Easy to remember and sing: *catchy*.' },
        { q: 'The exhibition made me think about the future. It was really ___.', o: ['thought-provoking', 'catchy', 'sold-out'], why: 'It made her think: *thought-provoking*.' },
        { q: 'There were no tickets left. It was a ___ concert.', o: ['sell-out', 'standing', 'moving'], why: 'All tickets sold: *a sell-out*.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 2', blocks: [
      { t: 'text', md: 'In the format of B2 First Speaking Part 2: compare two photos for about **one minute** and answer the question. *Photo A: an orchestra in a concert hall. Photo B: a street musician playing to a small crowd.* Question: **What are the people enjoying about these performances?**' },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make useful phrases for comparing.', items: [
        { a: 'Whereas the first photo shows a formal concert, the second is more relaxed.', why: '*Whereas* compares two different things.' },
        { a: 'Both photos show people enjoying live music.', why: 'Start with what the photos have in common.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 2, do not describe each photo in detail. **Compare** them (*both, whereas, while*) and spend most of your minute on the question at the top of the page.' },
    ] },
  ],
  activities: {
    one: { title: 'One minute, no nice', md: 'Show three photos of paintings or performances. For each one the student speaks for one minute using at least three precise words and no *nice*, *good* or *beautiful*. Count the banned words together after each minute.' },
    small: { title: 'Gallery walk', md: 'Each student shares a photo of a work of art, a stage show or a concert they like. The others describe it with collocations from the lesson; the owner says which description was the most accurate.' },
    group: { title: 'Part 2 in pairs', md: 'In breakout rooms of three, students take turns: one compares two photos for a minute (the teacher posts pairs of photos in the chat), one asks the follow-up question, and one listens and counts comparing words. Rotate.' },
  },
  homework: { book: 'u13:p3', md: 'Finish book lesson 3 of unit 13. Then write about 80 words describing a performance or a work of art you love, using at least five collocations from the lesson.' },
};
