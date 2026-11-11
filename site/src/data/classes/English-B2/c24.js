// English B2, class 24 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u5:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c24',
  focus: 'By the end of the class every student can tell the story of an important decision and discuss choices and regrets in an extended answer, using conditionals, *wish* and *if only* naturally, as in B2 First Speaking Part 4. Skills point: understanding a writer’s attitude and implied meaning, as in B2 First Reading Part 5.',
  tips: [
    'In Speaking Part 4, many students give one-sentence answers. Teach the shape **answer + reason + example + (a contrast)**, and time each answer at about forty-five seconds.',
    'Reading Part 5 asks about attitude and meaning, not just facts. When checking, always ask *How do you know? Which words show it?*',
    'Students sometimes avoid the third conditional in free speaking because it feels long. Praise any correct use loudly; it signals a strong B2 candidate.',
    'Some students may not want to share real regrets. Allow invented or third-person stories (*a friend of mine…*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the best decision you have ever made?* Students answer in two sentences each.' },
    { min: 15, title: 'Reading', md: 'Show board page 1. Students read the short story in four minutes, then answer the questions. Discuss the words that show the writer’s feelings.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 2: Speaking Part 4 questions in the format of B2 First. Students answer one question each with the answer–reason–example shape; the others give one point of feedback each.' },
    { min: 10, title: 'Language check', md: 'Show board page 3. Students rewrite the regrets, then one student reads the corrected story aloud. Set the homework.' },
  ],
  board: [
    { title: 'Reading: one big decision', blocks: [
      { t: 'reading', title: 'The year I said no', md: 'When I was twenty-two, I was offered a place at a famous music school in Vienna. Everyone expected me to accept. My teacher had spent years preparing me, and my parents had already told half the town.\n\nI turned it down. I had fallen in love with photography, and I could not imagine spending the next five years practising scales. For a long time I wished I had been braver and explained my reasons better; instead, I simply stopped answering the phone.\n\nToday I run a small photography studio. If I had gone to Vienna, I would probably be playing in an orchestra now, and I sometimes wonder if I would be happier. But when a family thanks me for a photo that they will keep for fifty years, I know I chose the right road.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer, as in Reading Part 5.', items: [
        { q: 'How did the writer’s family feel about the music school?', o: ['They were proud and sure she would go.', 'They were against the idea.', 'They did not know about the offer.'], why: '*Everyone expected me to accept*; *told half the town*.' },
        { q: 'What does the writer regret?', o: ['the way she handled the decision', 'refusing the place', 'learning photography'], why: '*I wished I had been braver and explained my reasons better*.' },
        { q: 'How does the writer feel now?', o: ['mostly sure she was right, with a few doubts', 'completely certain and never doubtful', 'sorry she did not become a musician'], why: '*I sometimes wonder…* but *I know I chose the right road*.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 4', blocks: [
      { t: 'text', md: 'In the format of B2 First Speaking Part 4, the examiner asks questions related to the topic of Part 3. Answer each in about forty-five seconds.\n\n*Is it better to make important decisions quickly or slowly? Why?*\n\n*Should young people always follow their parents’ advice about work?*\n\n*Do you think people today have too many choices?*\n\n*Is it useful to think about the things we regret?*' },
      { t: 'tip', md: 'Give **an answer, a reason and an example**, and if you can, a contrast (*On the other hand…*). Use a conditional or a wish to show your range: *If I had decided more slowly, I would have…*. You may also react to your partner: *I agree with what you said about…*' },
    ] },
    { title: 'Language check: regrets', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each regret starting with the words given.', items: [
        { q: 'I didn’t explain my reasons. That was a mistake.', cue: 'I wish', a: ['I wish I had explained my reasons.', 'I wish I’d explained my reasons.'], why: 'Past regret: *wish* + past perfect.' },
        { q: 'I didn’t go to Vienna, so I’m not in an orchestra now.', cue: 'If I had gone to Vienna', a: ['If I had gone to Vienna, I would be in an orchestra now.', 'If I had gone to Vienna, I might be in an orchestra now.'], why: 'Mixed conditional: past cause, present result.' },
        { q: 'It’s a pity I can’t play the violin any more.', cue: 'If only', a: ['If only I could play the violin any more.', 'If only I could still play the violin.'], why: 'A present wish about ability: *If only I could*.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The interview', md: 'Interview the student about a decision that changed their life (a move, a job, a course, a relationship). Ask: *What happened? What would your life be like now if you had chosen differently? Do you have any regrets?* Then switch to the four Part 4 questions and time each answer. Give two specific points to improve.' },
    small: { title: 'Decision stories', md: 'Each student tells the story of one decision (real or about someone they know) in two minutes. The listeners must ask one *What if…?* question and one *Do you wish…?* question. At the end, the group chooses the most surprising story and retells it in the third person.' },
    group: { title: 'Part 4 practice rooms', md: 'Breakout rooms of three: two candidates and one examiner. The examiner asks two Part 4 questions from board page 2 and times the answers; the candidates also react to each other. Swap roles until everyone has been the examiner. Back together, each examiner shares the best sentence they heard.' },
  },
  homework: { book: 'u5:p4', md: 'Finish book lesson 4 of unit 5 (The decision that changed my life), including the speaking task. Then record yourself answering two of the Part 4 questions from the board (about forty-five seconds each) and listen back: did you give an answer, a reason and an example?' },
};
