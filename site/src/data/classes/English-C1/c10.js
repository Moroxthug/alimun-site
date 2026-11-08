// English C1, class 10 (docs/LESSONS_PLAN.md, L6). Review of units 1 and 2. Draft for the owner's review.
export const LESSON = {
  id: 'c10',
  focus: 'By the end every student uses the language of units 1 and 2 with more accuracy and more choice: aspects (perfect, continuous, perfect continuous, including the future), state verbs used dynamically, character collocations and connotation, past habits and the future in the past, participle clauses and fronting, and the language of memory. Speaking first: most of the class is talk, with mistakes fixed together.',
  tips: [
    'Collect typical mistakes from classes 2 to 9 before this class and replace the items on board page 2 with four of your students’ own if you can.',
    'Mix the units deliberately: a story about a person who changed the student’s life uses aspects, character vocabulary, *would* and memory phrases at once.',
    'At C1 the review is also about range. When a sentence is correct, ask *Can you say it another way?* and reward the more precise version.',
    'End with a clear next step: the two unit tests are the homework, and each student should name their weakest area before they leave.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who is someone you have been thinking about lately, and why?* Each student answers in two or three sentences.' },
    { min: 12, title: 'Units 1 and 2 together', md: 'Show board page 1. Students choose the right forms, then explain one choice each.' },
    { min: 10, title: 'Fix it', md: 'Show board page 2: typical mistakes. Students correct them in pairs and say which unit each one comes from.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 3. Students form the words alone, then compare spelling and word class.' },
    { min: 5, title: 'Close', md: 'Each student names one point they now feel sure about and one to practise. Set the homework.' },
  ],
  board: [
    { title: 'Units 1 and 2 together', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'By the time she retires, she ___ at the hospital for forty years.', o: ['will have been working', 'will be working', 'has been working'], why: 'The length of an activity at a future point: the future perfect continuous.' },
        { q: 'He isn’t usually like this. He ___ very difficult today.', o: ['is being', 'is', 'has'], why: 'Behaviour at the moment, not character.' },
        { q: 'When I was a teenager, I ___ painfully shy.', o: ['used to be', 'would be', 'was being'], why: 'A past state: *used to*, not *would*.' },
        { q: '___ the news, she sat down and said nothing for a long time.', o: ['Having heard', 'Heard', 'Being heard'], why: 'The hearing came first: *having* + past participle.' },
        { q: 'I have only a ___ recollection of the accident.', o: ['vague', 'dark', 'weak'], why: '*A vague recollection*: an unclear memory.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [am knowing] him since we were at school.', a: ['have known', '’ve known'], why: 'A state from the past until now: the present perfect simple.' },
        { s: 'She is [strongly] independent and hates asking for help.', a: ['fiercely'], why: 'The collocation is *fiercely independent*.' },
        { s: 'The concert [was to take] place last night, but it was cancelled.', a: ['was to have taken', 'was going to take', 'was supposed to take'], why: 'A plan that did not happen.' },
        { s: 'That song always [remembers] me of my first job.', a: ['reminds'], why: '*Remind someone of something*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 3', blocks: [
      { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word given in capitals to form a word that fits the gap.', items: [
        { q: 'Her ___ about other people’s lives made her unpopular with the neighbours.', base: 'curious', a: ['curiosity'], why: 'A noun after *her*; note the spelling change.' },
        { q: 'He was ___ unaware of the trouble he had caused.', base: 'bliss', a: ['blissfully'], why: 'An adverb before an adjective: *blissfully unaware*.' },
        { q: 'I have no ___ of agreeing to that.', base: 'recollect', a: ['recollection'], why: 'A noun after *no*: *have no recollection of*.' },
        { q: 'The ___ of the old harbour has changed the character of the town.', base: 'develop', a: ['redevelopment'], why: 'Two changes: the prefix *re-* (done again) and the noun suffix.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Part 3** check the word before and after the gap to find the word class, then read the whole sentence for meaning: a negative or a prefix such as *re-* or *mis-* is often the second mark of difficulty.' },
    ] },
  ],
  activities: {
    one: { title: 'A person who shaped me', md: 'Interview the student about a person who influenced them: what they were like, what they would do, what you have been thinking about them lately, how clearly you remember the first meeting. Push for both units’ language. Note five sentences and upgrade them together at the end.' },
    small: { title: 'Upgrade it', md: 'Each student says a plain sentence about their past or a person they know (*My uncle was very independent. He often told stories.*). The next student upgrades it with a collocation, *would* or a participle clause. The group votes for the best upgrade each round.' },
    group: { title: 'Review stations', md: 'Breakout rooms of three each get one area in the chat (aspects and state verbs; character vocabulary; past habits and the future in the past; participles and memory). Each room writes three quiz questions for the class. Bring everyone back and run the quiz.' },
  },
  homework: { book: 'u1 u2', md: 'Do the unit 1 test and the unit 2 test in the book, then do lesson 1 of unit 3 (What it comes down to). Note your weakest area and practise it for 30 minutes before the next class.' },
};
