// English C1, class 77 (docs/LESSONS_PLAN.md, L6). Review of units 15 and 16. Draft for the owner's review.
export const LESSON = {
  id: 'c77',
  focus: 'By the end every student uses the grammar and vocabulary of units 15 and 16 with more accuracy: articles for generic reference, phrasal verbs with several meanings, the language of place and belonging, perfect and passive infinitives and -ing forms, verbs that change meaning with the pattern, and the vocabulary of learning. Speaking first: most of the class is talk, with mistakes fixed together, and a short look back at the formal letter and the proposal.',
  tips: [
    'Collect typical mistakes from classes 69 to 76 before this class, including any from the letters and proposals students sent, and put four of them on board page 2.',
    'Mix the units on purpose: a story about moving abroad to study uses articles, belonging, infinitives and learning vocabulary all at once.',
    'Give the less confident students the first, easier turns and the stronger students the follow-up questions.',
    'End with a clear next step: the two unit tests are the homework, and each student should note their weakest area before the next unit.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever moved somewhere to study or learn something? How long did it take you to find your feet?* Each student answers in two or three sentences.' },
    { min: 12, title: 'Units 15 and 16 together', md: 'Show board page 1. Students choose the right forms, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2: typical mistakes from the last classes. Students correct them in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: C1 Advanced Reading and Use of English Part 4. Students rewrite the sentences alone, then compare and count the words. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 15 and 16 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: '___ elderly are often the most isolated people in a new city.', o: ['The', 'An', '–'], why: '*The* + adjective for a group of people, with a plural verb (unit 15).' },
        { q: 'She arrived with ___ excellent knowledge of the local dialect.', o: ['an', 'the', '–'], why: '*A/an* + adjective + abstract noun: one kind of knowledge (unit 15).' },
        { q: 'He comes across ___ quite shy until you get to know him.', o: ['as', 'like', 'to'], why: '*Come across as* + adjective (unit 15).' },
        { q: 'It took the children a term to integrate ___ the new school.', o: ['into', 'in', 'with'], why: '*Integrate into* (unit 15).' },
        { q: 'I’m relieved ___ a place on the course after waiting so long.', o: ['to have been offered', 'to offer', 'having offered'], why: 'Earlier, and done to me: perfect passive infinitive (unit 16).' },
        { q: 'After her degree she went on ___ as a primary teacher.', o: ['to train', 'training', 'train'], why: 'A new stage: *go on to do* (unit 16).' },
        { q: 'He only just ___ through his final exams.', o: ['scraped', 'scratched', 'squeezed'], why: '*Scrape through*: pass, but only just (unit 16).' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: '[The life] in a foreign city is never easy at first.', a: ['Life'], why: 'An abstract noun in general takes no article (unit 15).' },
        { s: 'The noise of the traffic put me off [to sleep] in the front room.', a: ['sleeping'], why: '*Put off* + -ing (unit 15).' },
        { s: 'She fitted in at work, but she never felt she [fitted].', a: ['belonged'], why: '*Fit in* is acceptance by a group; *belong* is the deeper feeling (unit 15).' },
        { s: 'He denied [to have copied] his friend’s essay.', a: ['having copied', 'copying'], why: '*Deny* + -ing (unit 16).' },
        { s: 'When it comes to [learn] vocabulary, nothing beats repetition.', a: ['learning'], why: '*To* is a preposition here (unit 16).' },
        { s: 'I would recommend that the school [offers] evening classes.', a: ['offer', 'should offer'], why: 'Formal recommending: base form or *should* (unit 16).' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'I found an old letter from my grandfather by chance while I was tidying.', cue: 'CAME', a: ['I came across an old letter from my grandfather while I was tidying.', 'While I was tidying, I came across an old letter from my grandfather.'], why: '*Come across*: find by chance (unit 15).' },
        { q: 'The fake guide fooled a lot of tourists.', cue: 'TAKEN', a: ['A lot of tourists were taken in by the fake guide.'], why: '*Take in* = deceive, often passive (unit 15).' },
        { q: 'People believe that the school was founded in the twelfth century.', cue: 'BELIEVED', a: ['The school is believed to have been founded in the twelfth century.'], why: 'Passive reporting + perfect passive infinitive (unit 16).' },
        { q: 'Taking the job would involve moving to another city.', cue: 'MEAN', a: ['Taking the job would mean moving to another city.'], why: '*Mean* + -ing = involve (unit 16).' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4 the key word often hides a phrasal verb or a fixed pattern: *CAME* points to *came across*, *MEAN* to *mean doing*. Ask yourself which expressions contain the word before you start writing.' },
    ] },
  ],
  activities: {
    one: { title: 'A year away', md: 'Interview the student about a time they lived, worked or studied somewhere new (or an imagined year abroad): how they settled in, what they picked up, what they would like to have done differently, and what they came to appreciate. Push for both units’ language. Note five sentences and correct them together at the end.' },
    small: { title: 'Find the mistake', md: 'Each student tells a short true story about learning something or moving somewhere, with one deliberate mistake from units 15 or 16. The others must find and fix it. Score a point for each fix and one for a well-hidden mistake.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one topic in the chat (articles, phrasal verbs, infinitives and -ing forms, learning vocabulary). Each room writes three quiz questions for the class. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u15 u16', md: 'Do the unit 15 test and the unit 16 test in the book. Note your weakest area and practise it for 30 minutes before the next class.' },
};
