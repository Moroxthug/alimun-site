// English A2, class 45 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c45',
  focus: 'By the end of the class every student can read short personal stories and find the details, tell the story of their own best day in five or six sentences using the past simple, the past continuous and a superlative, and say what they can now do in English after A2. It is also the moment to look ahead to B1 and the level test.',
  tips: [
    'This class closes the book. Keep the tone positive: ask students what they can do now that they could not do at the start of A2.',
    'For the story, give a simple shape: when and where, what was happening, what happened, how you felt, why it was the best day.',
    'Listen for the tenses from units 2, 7 and 8 together. These mixes are exactly what the B1 level test checks.',
    'Some students are shy about personal stories. Let them invent a day or tell a friend’s story.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What was a really good day for you this year?* Two or three students answer in one sentence.' },
    { min: 15, title: 'Three stories', md: 'Show board page 1. Students read the three short stories and say who each sentence is about.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 2. Read the writing task and the tip; students plan their story in the chat with five notes.' },
    { min: 10, title: 'What you can do now', md: 'Show board page 3. Go through the list of A2 skills; each student says which they are proud of and which needs more work. Explain the level test (class 48).' },
    { min: 5, title: 'Close', md: 'Set the homework and the date of the practice exam and the level test.' },
  ],
  board: [
    { title: 'Three best days', blocks: [
      { t: 'reading', title: 'My best day', md: '**Maya:** The best day of my life was my wedding day. It was raining in the morning, but at three o’clock the sun came out and we had the party in the garden.\n\n**Daniel:** I was working in a café in London when I got an email: I had the job I wanted! I called my parents and we all cried.\n\n**Aiko:** My best day was when I climbed Mount Fuji with my father. It was the hardest walk I have ever done, but the view from the top was amazing.' },
      { t: 'ex', kind: 'choice', h: 'Who is it?', items: [
        { q: 'This person got good news at work.', o: ['Daniel', 'Maya', 'Aiko'], why: 'Daniel got an email about the job.' },
        { q: 'The weather changed on this person’s best day.', o: ['Maya', 'Daniel', 'Aiko'], why: '*It was raining… the sun came out.*' },
        { q: 'This person did something very difficult.', o: ['Aiko', 'Maya', 'Daniel'], why: '*the hardest walk I have ever done*.' },
      ] },
    ] },
    { title: 'Exam corner: tell a story', blocks: [
      { t: 'text', md: 'In the format of A2 Key Writing part 7, you write a story of **35 words or more** about three pictures. Today, tell the story of **your best day**: say when and where it was, what happened, and how you felt.' },
      { t: 'tip', art: 'owl', md: 'For Writing part 7, plan before you write: **one sentence for each picture or idea**, then join them with *then*, *when*, *but* and *so*. Use past tenses all the way through, and check your spelling of the past forms.' },
    ] },
    { title: 'What you can do after A2', blocks: [
      { t: 'text', md: 'After A2 you can talk about your daily life and the past, make plans and invitations, give advice, compare things, and talk about your experiences. You can read short texts about everyday topics and write short messages and stories.\n\n**Next: B1.** At B1 you will tell longer stories, give your opinion and reasons, and understand the main points of longer conversations. The level test in class 48 checks if you are ready.' },
    ] },
  ],
  activities: {
    one: { title: 'Interview: your best day', md: 'Interview the student about their best day with past simple and past continuous questions (*What were you doing when…? How did you feel?*). Then the student tells the whole story without stopping. Give feedback on three things: tenses, linking words, and pronunciation of past forms.' },
    small: { title: 'Story circle', md: 'Each student tells their best-day story in one minute. The others write one question in the chat for each speaker, and the speaker answers. Finish by voting for the most surprising story.' },
    group: { title: 'Best days gallery', md: 'In breakout rooms of three, each student tells their story; the room chooses one and prepares to retell it together, each saying two sentences. Back in the main room, each room tells its story; other students ask one question each.' },
  },
  homework: { book: 'u8:p4', md: 'Finish book lesson 4 of unit 8. Then write the story of your best day (35 words or more). Bring a list of the three things in A2 that you find most difficult to the next class.' },
};
