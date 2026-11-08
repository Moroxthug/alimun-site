// English B1, class 34 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c34',
  focus: 'By the end of the class every student can read and talk about a longer personal account of moving abroad, using all the language of unit 7 together: relative clauses, describing homes and areas, and talking politely about customs. Each student tells the story of a big move (their own, someone they know, or an imagined one) week by week, for about two minutes.',
  tips: [
    'This lesson brings the unit together. Listen for relative clauses, adjective order and customs phrases in the students’ stories, and note which ones are still not automatic.',
    'Before reading, ask students to predict what problems a person might have in the first month abroad. Prediction makes the reading faster and more personal.',
    'Students who have never lived abroad can tell the story of a move to a new city, a new school or a new job: the language is the same.',
    'Keep the reading questions short in class; the book lesson has the detailed reading. Use class time for retelling and personal stories.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What would be the hardest thing about moving to another country?* Write students’ ideas on the board.' },
    { min: 15, title: 'Reading', md: 'Show board page 1. Students read the diary extract alone, then answer the questions. Check together and ask which of the board ideas from the warm-up appear in the text.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Language from the unit', md: 'Show board page 2. Students complete the exercise, then each says one sentence about a place they have lived with a relative clause.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Writing part 2 planning. Students plan an article together in the chat.' },
    { min: 5, title: 'Close', md: 'Each student gives one piece of advice to someone moving to their city. Set the homework.' },
  ],
  board: [
    { title: 'Four weeks in Gdańsk', blocks: [
      { t: 'reading', title: 'A diary of a first month', md: '**Week 1.** The flat that the company found for me is tiny but bright, on a street where there are three bakeries. My neighbour, whose name I still can’t pronounce, brought me a cake. I felt very welcome.\n\n**Week 2.** I made my first mistake: I walked into a friend’s flat with my shoes on. Here you’re supposed to take them off at the door. Nobody said anything, but I noticed.\n\n**Week 3.** The language is the hardest part. People tend to switch to English when they hear my accent, which is kind, but I want to practise.\n\n**Week 4.** I have a favourite café now, the one where the owner knows my order. For the first time, this city feels like home.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'The writer found the flat herself.', a: 'f', why: '*The flat that the company found for me*.' },
        { q: 'In week 2 a friend told her to take her shoes off.', a: 'f', why: '*Nobody said anything, but I noticed.*' },
        { q: 'People often speak English to her.', a: 't', why: '*People tend to switch to English*.' },
        { q: 'By week 4 she feels at home.', a: 't', why: '*this city feels like home*.' },
      ] },
    ] },
    { title: 'Language of the unit', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'The café ___ I go every morning is next to the station.', o: ['where', 'which', 'who'], why: 'A place followed by a full sentence: *where*.' },
        { q: 'My landlord, ___ lives upstairs, is very helpful.', o: ['who', 'which', 'whose'], why: 'A person: *who*.' },
        { q: 'It’s ___ flat with a lovely view.', o: ['a small modern', 'a modern small', 'a small and modern'], why: 'Size before age: *a small modern flat*.' },
        { q: 'Here it’s more common ___ dinner at six.', o: ['to have', 'having', 'have'], why: '*It’s more common to* + verb.' },
      ] },
    ] },
    { title: 'Exam corner: Writing part 2 (article)', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Writing part 2. You see this notice in an English-language magazine:\n\n*Articles wanted: Moving to a new place. What was difficult? What helped you? What advice would you give? Write about 100 words.*\n\nPlan together before you write: a title, an opening that speaks to the reader, one paragraph for each question, and a final sentence.' },
      { t: 'ex', kind: 'choice', h: 'Which is the best choice for the article?', items: [
        { q: 'The best first sentence:', o: ['Have you ever arrived in a city where you knew nobody?', 'This is my article about moving.', 'I will write about three questions.'], why: 'An article speaks to the reader and makes them want to read on.' },
        { q: 'The best title:', o: ['My first lonely month', 'Article', 'Questions about moving'], why: 'A short, personal title that tells the reader the topic.' },
        { q: 'The best last sentence:', o: ['So if you move, be patient: one day the new place will feel like home.', 'That is all.', 'Thank you for reading my answers.'], why: 'End with advice or a thought that links back to the topic.' },
      ] },
      { t: 'tip', md: 'In Writing part 2, an article should sound personal and lively: ask the reader a question (*Have you ever moved to a new city?*) and answer **every** question in the notice.' },
    ] },
  ],
  activities: {
    one: { title: 'My first month', md: 'The student tells the story of a big move (real or imagined) week by week, like the diary: the home, the area, a cultural mistake, a turning point. You ask follow-up questions. Then the student gives three pieces of advice to someone making the same move. Note the relative clauses and adjective pairs they use well and the ones they avoid.' },
    small: { title: 'Week by week', md: 'Each student prepares four short notes (week 1 to week 4) about a move in their life. In pairs, they tell the story; the partner must ask one question per week. Then each student retells their partner’s story to the group in the third person.' },
    group: { title: 'Survival guide', md: 'In breakout rooms of three, each room writes a short survival guide for the first month in a new city: home, area, customs, language. Each student writes one part in the chat. Bring everyone back: rooms read their best two tips.' },
  },
  homework: { book: 'u7:p4', md: 'Finish book lesson 4 of unit 7 (Thirty days in a new city), including the speaking task and the reading. Then write the magazine article from the Exam corner, about 100 words, with a title and an answer to each question.' },
};
