// English A2, class 47 (docs/LESSONS_PLAN.md). A timed, shortened practice exam in the format of A2 Key, all units. Draft for the owner's review.
export const LESSON = {
  id: 'c47',
  focus: 'By the end of the class every student has done a timed, shortened practice exam in the format of A2 Key: reading, a listening task read aloud by the teacher, writing parts 6 and 7, and speaking part 1. They know how each part works, how long it takes, and which part is their weakest. Answers are revealed only at the end.',
  tips: [
    'Keep strict times and say how many minutes are left. Timing is half of the exam skill.',
    'Do not reveal answers until the end of each section; use "Show the answers" on the board only then.',
    'For the listening, read each text twice at a natural speed, as the exam plays each recording twice.',
    'Use "Everyone solves this" on the board for the reading pages so each student works alone; look at each student’s work before you reveal.',
    'After the exam, spend time on strategy, not only scores: what did students do when they did not know an answer?',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the parts and times. Students write their answers alone; there is no talking during the exam parts.' },
    { min: 12, title: 'Reading', md: 'Show board pages 1 and 2. Students answer alone in 12 minutes (use "Everyone solves this"). Do not reveal yet.' },
    { min: 8, title: 'Listening', md: 'Show board page 3. Read each short text twice at natural speed; students choose the answers.' },
    { min: 15, title: 'Writing', md: 'Show board page 4. Students write the message (part 6) and the story (part 7) in the chat or on paper in 15 minutes.' },
    { min: 10, title: 'Speaking part 1', md: 'Ask each student two or three questions from board page 5, as the examiner does. Give each student about two minutes.' },
    { min: 12, title: 'Answers and strategy', md: 'Reveal the answers page by page. Students count their score and say which part was hardest. Give one strategy tip per part.' },
  ],
  board: [
    { title: 'Reading part 1: notices', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does the notice say?', items: [
        { q: 'SWIMMING POOL: Children under 10 must swim with an adult.', o: ['Young children can’t swim alone.', 'Children under 10 can’t use the pool.', 'Adults must swim with children.'], why: '*must swim with an adult* = not alone.' },
        { q: 'Library books: return by Friday or pay 50p a day.', o: ['You pay if you bring books back late.', 'The library is closed on Friday.', 'Books cost 50p.'], why: 'Late books cost 50p a day.' },
        { q: 'Hi Jo, the match is at 4, not 3. Meet at the gate at 3.30? Sam', o: ['Sam has changed the time of the match.', 'The match starts at 3.30.', 'Sam can’t come to the match.'], why: 'The match is at 4, not 3.' },
      ] },
    ] },
    { title: 'Reading part 5: a short text', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word for each gap.', items: [
        { q: 'Last summer my family and I ___ to Scotland for two weeks.', o: ['went', 'have gone', 'go'], why: '*Last summer*: past simple.' },
        { q: 'We stayed in a small house ___ the sea.', o: ['near', 'between', 'under'], why: '*near the sea* = close to it.' },
        { q: 'It was the ___ holiday we have ever had.', o: ['best', 'better', 'good'], why: 'A superlative with *ever*.' },
        { q: 'Next year we are ___ to go back.', o: ['going', 'go', 'went'], why: 'A plan: *going to*.' },
      ] },
    ] },
    { title: 'Listening: the teacher reads', blocks: [
      { t: 'text', md: '**Teacher, read each text twice.**\n\n**One:** *Hi, it’s Mark. I can’t come at seven. Can we meet at half past eight at the cinema instead?*\n\n**Two:** *The train to Oxford leaves from platform six today, not platform two. Platform six.*\n\n**Three:** *I bought a jacket for my brother. It was forty pounds, but it was in the sale, so I paid thirty.*' },
      { t: 'ex', kind: 'choice', h: 'Listen and choose the right answer.', items: [
        { q: 'What time will they meet?', o: ['8.30', '7.00', '7.30'], why: '*half past eight* = 8.30.' },
        { q: 'Which platform does the train leave from?', o: ['6', '2', '8'], why: '*platform six today, not platform two*.' },
        { q: 'How much did the jacket cost?', o: ['£30', '£40', '£14'], why: 'It was in the sale: *I paid thirty*.' },
      ] },
    ] },
    { title: 'Writing parts 6 and 7', blocks: [
      { t: 'text', md: '**Part 6 (25 words or more):** You can’t go to your friend Alex’s party on Saturday. Write an email to Alex: say **sorry**, explain **why** you can’t go, and **suggest** another day to meet.\n\n**Part 7 (35 words or more):** Write the story of a day when something went wrong on a trip: where you were, what was happening, what happened, and how it ended.' },
      { t: 'tip', art: 'owl', md: 'Check before you finish: in part 6, **all three points**; in part 7, a **beginning, middle and end** and past tenses. Count your words roughly: too short loses marks.' },
    ] },
    { title: 'Speaking part 1: questions', blocks: [
      { t: 'examples', items: [
        { s: 'What’s your name? Where do you live?', n: 'The first questions are easy: answer and add one detail.' },
        { s: 'Tell me about your favourite place in your town.', n: 'Give two or three sentences with a reason.' },
        { s: 'What did you do last weekend?', n: 'Past simple.' },
        { s: 'What are you going to do next summer?', n: '*going to* for plans.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Full exam, one to one', md: 'Follow the plan exactly, but give the student the examiner’s full speaking part 1 (about four minutes). After each part, ask how sure they felt and compare with their real score: this shows where confidence and accuracy are different.' },
    small: { title: 'Peer marking', md: 'After the writing part, students swap texts (in the chat) and check each other against the three points and the word count before you reveal a model answer. Each student says one thing their partner did well.' },
    group: { title: 'Exam conditions', md: 'Keep everyone in the main room with cameras on for the reading and listening; use "Everyone solves this" so the work stays private. For speaking, send students to breakout rooms in threes and visit each room as the examiner; the waiting students read the model answers.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8', md: 'Write down your score in each part. Go back to the book unit for your weakest part and do its unit test again before the level test in the next class.' },
};
