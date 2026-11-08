// English B1, class 84 (docs/LESSONS_PLAN.md). End-of-level check: ready for B2, all units. No gate test between B1 and B2 (owner). Draft for the owner's review.
export const LESSON = {
  id: 'c84',
  focus: 'By the end of the class every student has done a short written check covering all 16 units and a short speaking check, and receives a private report: their strengths, their weak areas and what to practise before B2. This is not a pass or fail test: every student moves on to B2. The report helps them and the B2 teacher start in the right place.',
  tips: [
    'Tell students at the start that this is a check, not a gate: everyone continues to B2. It lowers stress and gives a truer picture.',
    'Criteria for "ready for B2": about 70% on the written check, and in speaking, connected answers of three or four sentences with mostly correct tenses, conditionals and linking words.',
    'Give every report in private (a message or a short one to one at the end), never in front of the class. Start with a strength.',
    'Be specific in the report: name book units and lessons, not "grammar". For example: *revise unit 9, the past perfect*.',
    'Note each student’s weak areas in your class notes: the B2 teacher will see them.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the check: written part, speaking part, private report. Everyone continues to B2.' },
    { min: 20, title: 'Written check', md: 'Show board pages 1, 2 and 3. Students answer alone (use "Everyone solves this" for each page). Do not reveal yet.' },
    { min: 20, title: 'Speaking check', md: 'Show board page 4. Talk with each student for about three minutes, using the questions and the criteria. The others reread their written answers or read their book while they wait.' },
    { min: 10, title: 'Answers', md: 'Reveal the written answers. Students count their score and note the units of the questions they got wrong.' },
    { min: 7, title: 'Reports and close', md: 'Show board page 5. Explain how the reports work, send each student a private message with the three parts, and congratulate the class on finishing B1.' },
  ],
  board: [
    { title: 'Written check: grammar', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I ___ here since 2020.', o: ['have lived', 'live', 'lived'], why: 'Unit 1: *since* + up to now.' },
        { q: 'I’m not used to ___ up so early.', o: ['getting', 'get', 'got'], why: 'Unit 2: *be used to* + -ing.' },
        { q: 'If I ___ more time, I would learn the guitar.', o: ['had', 'have', 'would have'], why: 'Unit 8: second conditional.' },
        { q: 'When we arrived, the film ___.', o: ['had started', 'has started', 'starts'], why: 'Unit 9: before another past event.' },
        { q: 'She ___ have left: her coat is still here.', o: ['can’t', 'must', 'should'], why: 'Unit 13: sure it is not true.' },
        { q: 'He asked me where I ___.', o: ['lived', 'do live', 'live I'], why: 'Unit 6: reported question, no question order.' },
      ] },
    ] },
    { title: 'Written check: fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The bridge [was build] in 1850.', a: ['was built'], why: 'Unit 5: passive with the past participle.' },
        { s: 'My sister, [that] lives in Paris, is a doctor.', a: ['who'], why: 'Unit 11: non-defining clauses never use *that*.' },
        { s: 'I wish I [know] the answer.', a: ['knew'], why: 'Unit 16: *wish* + past simple.' },
        { s: '[Despite] it was cold, we went swimming.', a: ['Although', 'Even though'], why: 'Unit 14: a full clause needs *although*.' },
      ] },
    ] },
    { title: 'Written check: reading', blocks: [
      { t: 'reading', title: 'A year abroad', md: 'Last year Elena spent twelve months working in Toronto. At first she found the cold very hard, and she couldn’t understand people who spoke quickly. However, she joined a hiking club, where she made friends who helped her with her English. By the end of the year she had managed to pass an English exam and had been offered a permanent job. She says she wishes she had gone abroad earlier.' },
      { t: 'ex', kind: 'tf', h: 'True, false or not given?', ng: true, items: [
        { q: 'Elena understood fast speakers from the start.', a: 'f', why: '*she couldn’t understand people who spoke quickly*.' },
        { q: 'Her friends from the club helped her English.', a: 't', why: '*friends who helped her with her English*.' },
        { q: 'She has accepted the permanent job.', a: 'ng', why: 'The text says she was offered it, not that she accepted.' },
        { q: 'She thinks she went abroad too late.', a: 't', why: '*she wishes she had gone abroad earlier*.' },
      ] },
    ] },
    { title: 'Speaking check', blocks: [
      { t: 'text', md: '**Questions (choose three for each student):**\n\n*Tell me about something you have achieved this year.*\n\n*What would you do if you could live anywhere in the world?*\n\n*What do you think about social media? Give one good and one bad point.*\n\n*Describe a film or book you would recommend, and why.*\n\n*What are your plans for your English after B1?*' },
      { t: 'table', caption: 'Ready for B2: speaking criteria', explain: ['head', 'col0', 'col1'], head: ['Area', 'Ready for B2 when the student…'], rows: [
        ['Length', 'gives answers of three or four connected sentences'],
        ['Grammar', 'uses tenses, conditionals and passives mostly correctly'],
        ['Vocabulary', 'has words for the main B1 topics and explains words they do not know'],
        ['Linking', 'uses because, although, however, so, for example'],
        ['Pronunciation', 'is easy to understand, even with some accent'],
      ] },
    ] },
    { title: 'Your report', blocks: [
      { t: 'text', md: 'Every student gets a **private report** with three parts: **what you do well**, **what to work on** (with the book units), and **what to practise before B2**. Everyone continues to B2: this report is your starting point.' },
      { t: 'tip', art: 'owl', md: 'Before B2: do one practice round a day on your weakest unit, read something short in English every day, and keep talking. B2 builds on everything you have done at B1.' },
    ] },
  ],
  activities: {
    one: { title: 'Check and plan', md: 'Do the written check with the student, then the speaking check with all five questions. Write the report together: the student suggests their own strengths and weak areas first, then you add yours, and you agree on a four-week practice plan.' },
    small: { title: 'Rotating speaking check', md: 'While you do the speaking check with one student, the others work in the chat on a short writing task (*What I can do now in English*, 80 words). Each student reads their text to you at the end of their speaking check.' },
    group: { title: 'Speaking rooms', md: 'Send students to breakout rooms of three with the speaking questions; they ask each other while they wait. Visit each room and do the speaking check with one student at a time. Send each report privately after the class.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16', md: 'Read your private report. Do the unit tests again for the book units in your "what to work on" list, and one practice round a day on your weakest area before B2 starts.' },
};
