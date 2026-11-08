// English B2, class 83 (docs/LESSONS_PLAN.md). Practice exam in the format of B2 First, shortened and timed (all units). Draft for the owner's review.
export const LESSON = {
  id: 'c83',
  focus: 'By the end of the class every student has done a timed, shortened practice exam in the format of B2 First: Reading and Use of English (Parts 1, 2, 3, 4 and a reading part), a listening part read aloud by the teacher, a Writing Part 1 plan and opening, and a short speaking round. They see their answers at the end, know their score per part, and know which part needs most work before the level test.',
  tips: [
    'Keep strict time and tell students how many minutes are left. Time pressure is part of the practice.',
    'Use "Everyone solves this" for each written page so every student works alone; reveal only at the end.',
    'Read the listening text at natural speed, twice, as in the real exam. Do not explain words before the second reading.',
    'At the end, students count their correct answers per part. This tells them more than a total score.',
    'Writing is only planned and started in class; the full essay is homework and is marked against the four areas.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the timing and that answers come at the end.' },
    { min: 18, title: 'Reading and Use of English', md: 'Show board pages 1 and 2. Students work alone, about nine minutes per page.' },
    { min: 8, title: 'Listening', md: 'Show board page 3. Read the text aloud twice; students answer alone.' },
    { min: 10, title: 'Writing Part 1', md: 'Show board page 4. Students plan the essay and write the first paragraph.' },
    { min: 9, title: 'Speaking', md: 'Ask each student two Part 4 questions from board page 4; one minute each.' },
    { min: 12, title: 'Answers and scores', md: 'Reveal all the answers. Students count their score per part and choose the part to work on.' },
  ],
  board: [
    { title: 'Reading and Use of English: Parts 1 and 2', blocks: [
      { t: 'ex', kind: 'select', h: 'Part 1: choose the word that fits.', items: [
        { q: 'The new library has ___ a huge difference to the town.', o: ['made', 'done', 'taken', 'had'], why: '*make a difference*.' },
        { q: 'She was ___ to finish the race despite her injury.', o: ['determined', 'eager', 'keen', 'willing'], why: '*determined to* fits the effort despite difficulty.' },
        { q: 'The meeting was ___ off because of the storm.', o: ['called', 'put', 'taken', 'set'], why: '*call off* = cancel.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Part 2: write one word in each gap.', items: [
        { q: 'He apologised ___ being late.', a: ['for'], why: '*apologise for*.' },
        { q: 'Not ___ did she win, she also broke the record.', a: ['only'], why: '*Not only*.' },
        { q: 'The book, ___ was written in 1950, is still popular.', a: ['which'], why: 'Non-defining relative clause for a thing.' },
      ] },
    ] },
    { title: 'Reading and Use of English: Parts 3, 4 and reading', blocks: [
      { t: 'ex', kind: 'wordform', h: 'Part 3: use the word in capitals.', items: [
        { q: 'The ___ of the new bridge took three years.', base: 'CONSTRUCT', a: ['construction'], why: 'A noun after *The*.' },
        { q: 'It was ___ of him to forget her birthday.', base: 'CARE', a: ['careless'], why: 'Negative adjective: *careless*.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'Part 4: use the word given; two to five words.', items: [
        { q: 'It’s possible that she missed the train.', cue: 'MIGHT', a: ['She might have missed the train.'], why: 'Past possibility: *might have* + past participle.' },
        { q: 'I didn’t take an umbrella and got wet.', cue: 'HAD', a: ['If I had taken an umbrella, I wouldn’t have got wet.', 'If I had taken an umbrella I would not have got wet.'], why: 'Third conditional.' },
      ] },
      { t: 'reading', title: 'The four-day week', md: 'When a small design company tried a four-day week, the managers expected less work to be done. Instead, the team finished projects faster. Workers said they planned their time more carefully and wasted fewer hours in meetings. Not everyone was convinced, however. Some clients complained that they could not reach the company on Fridays.' },
      { t: 'ex', kind: 'choice', h: 'Reading: choose the best answer.', items: [
        { q: 'What surprised the managers?', o: ['The team became more productive.', 'Workers wanted longer hours.', 'Meetings became longer.', 'Clients were happier.'], why: '*the team finished projects faster*.' },
        { q: 'What was the problem with the new week?', o: ['Clients could not contact the company on Fridays.', 'Workers wasted time.', 'Projects were late.', 'Managers left the company.'], why: '*could not reach the company on Fridays*.' },
      ] },
    ] },
    { title: 'Listening (the teacher reads twice)', blocks: [
      { t: 'reading', title: 'A radio interview', md: 'Interviewer: You spent a year sailing around the world alone. What was the hardest part? Sailor: People expect me to say the storms, but honestly it was the silence. After three weeks without talking to anyone, I started recording messages to myself. Interviewer: Would you do it again? Sailor: Not alone. Next time I’d take a friend, mainly so that someone else can cook.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'What did the sailor find hardest?', o: ['being alone and silent', 'the storms', 'cooking', 'recording messages'], why: '*it was the silence*.' },
        { q: 'Why would she take a friend next time?', o: ['mainly so that someone else could cook', 'because of the storms', 'to record messages', 'to save money'], why: '*mainly so that someone else can cook*.' },
      ] },
    ] },
    { title: 'Writing Part 1 and speaking', blocks: [
      { t: 'text', md: '**Writing Part 1 (essay, 140 to 190 words):** *In your English class you have been talking about work. Now your teacher has asked you to write an essay. Is a four-day working week a good idea? Notes: write about productivity, family life and your own idea.* **Speaking Part 4:** *Would you prefer a shorter week or higher pay? What makes a job satisfying? Should people retire later than they do now?*' },
    ] },
  ],
  activities: {
    one: { title: 'Exam conditions', md: 'Follow the plan exactly, as the examiner. In the speaking part, give the full Part 4 round and then one Part 2 long turn with two photos of your choice. Finish with a score per part and one strategy for the weakest part.' },
    small: { title: 'Score and share', md: 'After the answers, each student shares their score per part and one tip that helped them. The group agrees on the most useful three tips before the level test.' },
    group: { title: 'Breakout speaking', md: 'For the speaking part, put students in breakout rooms of two and give each room the Part 4 questions. Visit each room. Afterwards, rooms share one good answer they heard.' },
  },
  homework: { book: 'u16:p4', md: 'Write the full Writing Part 1 essay (140 to 190 words) and check it against the four marking areas. Revise the part where you scored lowest before the level test.' },
};
