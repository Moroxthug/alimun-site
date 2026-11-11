// English B1, class 83 (docs/LESSONS_PLAN.md). A timed, shortened practice exam in the format of B1 Preliminary, all units. Draft for the owner's review.
export const LESSON = {
  id: 'c83',
  focus: 'By the end of the class every student has done a timed, shortened practice exam in the format of B1 Preliminary: reading (parts 1 and 5), a listening part the teacher reads aloud, writing parts 1 and 2, and speaking. They know how each paper feels under time pressure and which part is their weakest. Answers are revealed only at the end.',
  tips: [
    'Keep strict times and say how many minutes are left. Timing is half of the exam skill.',
    'Do not reveal answers until the answer slot; use "Show the answers" on the board only then.',
    'For the listening, read each text twice at a natural speed, as the exam plays each recording twice.',
    'Use "Everyone solves this" on the board for the reading pages so each student works alone; look at each student’s work before you reveal.',
    'Writing takes the longest: if time is short, students plan part 2 in class and finish it at home.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the parts and times. Students work alone; there is no talking during the exam parts.' },
    { min: 12, title: 'Reading', md: 'Show board pages 1 and 2. Students answer alone in 12 minutes (use "Everyone solves this"). Do not reveal yet.' },
    { min: 8, title: 'Listening', md: 'Show board page 3. Read each text twice; students choose the answers.' },
    { min: 17, title: 'Writing', md: 'Show board page 4. Students write the email (part 1) and plan or write the article or story (part 2) in 17 minutes.' },
    { min: 10, title: 'Speaking', md: 'Show board page 5. Ask each student two part 1 questions and give pairs one part 3 task, as the examiner.' },
    { min: 10, title: 'Answers and strategy', md: 'Reveal the answers page by page. Students count their scores and say which paper was hardest. Give one strategy tip per paper.' },
  ],
  board: [
    { title: 'Reading part 1: short texts', blocks: [
      { t: 'ex', kind: 'choice', h: 'What does each text say?', items: [
        { q: 'LIBRARY: Study rooms can be booked online up to a week in advance. Bookings not used within 15 minutes will be cancelled.', o: ['You lose your room if you arrive more than 15 minutes late.', 'You can only book rooms at the library desk.', 'Study rooms are free for one week.'], why: '*not used within 15 minutes will be cancelled*.' },
        { q: 'Hi Max, the course has moved to Room 12 because of the building work. It still starts at 6. Leila', o: ['The course is in a different room.', 'The course starts later.', 'Leila cannot come to the course.'], why: '*moved to Room 12*; the time is the same.' },
        { q: 'Concert tickets: no refunds, but tickets can be passed to a friend before the day.', o: ['You can give your ticket to someone else.', 'You can get your money back.', 'Tickets are sold on the day.'], why: '*can be passed to a friend*.' },
      ] },
    ] },
    { title: 'Reading part 5: a gapped text', blocks: [
      { t: 'reading', title: 'A new start', md: 'When Marco moved to Dublin, he (1) ___ speak much English. He (2) ___ a job in a café, where he practised every day. By the end of the first year he (3) ___ so many people that the city felt like home. (4) ___ the weather was often grey, he loved his new life.' },
      { t: 'ex', kind: 'choice', h: 'Choose the right word for each gap.', items: [
        { q: 'Gap 1', o: ['couldn’t', 'didn’t manage', 'wasn’t able'], why: 'Only *couldn’t* goes before a bare verb.' },
        { q: 'Gap 2', o: ['found', 'has found', 'had been finding'], why: 'One finished past event: past simple.' },
        { q: 'Gap 3', o: ['had met', 'meets', 'has met'], why: 'Before a past point (*by the end of the first year*): past perfect.' },
        { q: 'Gap 4', o: ['Although', 'However', 'Despite'], why: '*Although* + a full clause.' },
      ] },
    ] },
    { title: 'Listening: the teacher reads', blocks: [
      { t: 'text', md: '**Teacher, read each text twice.**\n\n**One:** *Hi, it’s Paula. The football match on Saturday has been cancelled because of the rain, so let’s go to the cinema instead. Call me back!*\n\n**Two:** *The museum is free on the first Sunday of every month. On other days, adults pay eight pounds and students pay five.*\n\n**Three:** *I was going to take the bus, but it was so late that I walked in the end, and I still arrived before the others.*' },
      { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary Listening part 1: choose the right answer.', items: [
        { q: 'What does Paula want to do on Saturday?', o: ['Go to the cinema', 'Play football', 'Watch the rain'], why: '*let’s go to the cinema instead*.' },
        { q: 'How much does a student pay on a normal day?', o: ['£5', '£8', 'Nothing'], why: '*students pay five*.' },
        { q: 'How did the speaker get there?', o: ['On foot', 'By bus', 'By car'], why: '*I walked in the end*.' },
      ] },
    ] },
    { title: 'Writing parts 1 and 2', blocks: [
      { t: 'text', md: '**Part 1 (about 100 words):** Your English friend Kim writes: *I’d love to visit you this summer! (**Great!**) When is the best month to come? (**Tell Kim**) What should we do together? (**Suggest something**) Do I need to bring anything special? (**Say what and why**)* Write your email using all the notes.\n\n**Part 2 (about 100 words), choose one:** an **article**, *The best way to learn a language*, or a **story** that begins *As soon as I got on the train, I knew something was wrong.*' },
      { t: 'tip', art: 'owl', md: 'Check before you finish: in part 1, **all four notes**; in part 2, a clear **beginning, middle and end**, paragraphs and linking words. Spend about 20 minutes on each part in the real exam.' },
    ] },
    { title: 'Speaking', blocks: [
      { t: 'examples', items: [
        { s: 'Part 1: How long have you been learning English?', n: 'Present perfect continuous and a detail.' },
        { s: 'Part 1: What would you change about your town if you could?', n: 'Second conditional with a reason.' },
        { s: 'Part 3: A friend is bored at weekends. Talk about these ideas: a cooking class, a sports club, volunteering, learning an instrument. Decide which is best.', n: 'Discuss each idea, then decide together.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Full exam, one to one', md: 'Follow the plan exactly and play the partner in speaking part 3. After each paper, ask how sure the student felt and compare with the real score: it shows where confidence and accuracy are different.' },
    small: { title: 'Peer marking', md: 'After writing, students swap texts (in the chat) and check each other’s email for the four notes and the word count before you reveal the strengths you looked for. Each student says one thing their partner did well.' },
    group: { title: 'Exam conditions', md: 'Keep everyone in the main room with cameras on for reading and listening; use "Everyone solves this" so the work stays private. For speaking, send students to breakout rooms in pairs and visit each room as the examiner.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16', md: 'Write down your score in each paper. Finish the writing part 2 text if you did not finish it in class. Before the end-of-level check, go back to the book unit for your weakest paper and do its unit test again.' },
};
