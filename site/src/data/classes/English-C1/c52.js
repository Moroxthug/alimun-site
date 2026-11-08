// English C1, class 52 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u11:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c52',
  focus: 'By the end every student can follow a discussion between speakers who partly agree, identify each speaker’s opinion and attitude, and answer questions in the format of C1 Advanced Listening Part 3. The speaking goal: take part in a discussion on misinformation with the discussion phrases of the unit (*I take your point, but…*, *Up to a point*, *I’d go further than that*, *To play devil’s advocate…*), reporting verbs and distancing language.',
  tips: [
    'Read the discussion aloud twice, as in the exam, or give the roles to two confident students for the second listening. Students keep their answers private until the end.',
    'Wrong options in Part 3 usually contain words the speakers really say. Train students to ask *who* said it and whether they agreed with it.',
    'Listen for the phrases that change direction: *I take your point, but…* means the real opinion comes after *but*; *Up to a point* means only partial agreement.',
    'In the discussion stage, a student playing devil’s advocate should say so clearly. It makes the debate safer and shows control of the language.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever shared something online and later found out it wasn’t true? What happened?* Each student answers in two sentences, with a distancing word if they can.' },
    { min: 17, title: 'The discussion', md: 'Show board page 1. Read the questions together first. Read the discussion aloud twice (or with two students reading the roles the second time). Students answer alone, then check together, finding the words that gave each answer.' },
    { min: 8, title: 'What the speaker is doing', md: 'Show board page 2. Students match each phrase with its function, then use two of them in a sentence about the discussion.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Your view', md: 'Show board page 3. Students give their own view on the question, as in Speaking Part 4, then respond to one other student’s answer.' },
    { min: 5, title: 'Close', md: 'Each student says one idea from today they agree with only up to a point. Set the homework.' },
  ],
  board: [
    { title: 'The discussion', blocks: [
      { t: 'text', md: 'You will hear a radio presenter talking to two guests, Nadia, a journalist, and Marco, who designs apps, about slowing down the sharing of news online. Read the questions first. You will hear the discussion twice.' },
      { t: 'dialogue', title: 'Slowing down the share button', lines: [
        { who: 'Presenter', s: 'Some apps now ask you whether you’ve read an article before you share it. Marco, does a small question like that really make a difference?' },
        { who: 'Marco', s: 'More than people expect. Most false stories aren’t shared by people who want to deceive; they’re shared by people in a hurry. If you give them a moment to think, a fair number simply change their minds.' },
        { who: 'Nadia', s: 'I take your point, but I’d be wary of treating it as a solution. It slows down the casual sharer. The people who spread lies deliberately won’t be put off by a pop-up.' },
        { who: 'Marco', s: 'That’s not quite what I’m claiming. I’m not saying it stops everything. I’m saying it removes a lot of the noise, so the deliberate campaigns are easier to spot.' },
        { who: 'Nadia', s: 'Up to a point. What really worries me is that the platforms can then say they’ve done their bit. A pop-up is cheap. Paying people to check what’s trending is not.' },
        { who: 'Presenter', s: 'So who should be responsible?' },
        { who: 'Nadia', s: 'I’d go further than most of my colleagues. I think if a platform profits from a story spreading, it should share responsibility for checking it.' },
        { who: 'Marco', s: 'To play devil’s advocate for a moment, who decides what counts as false? Some stories that were dismissed as rumours turned out to be true.' },
        { who: 'Nadia', s: 'That’s a fair question, and it’s exactly why the checking has to be done openly, with the reasons published.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 3): choose the answer that fits best according to what you hear.', items: [
        { q: 'According to Marco, most false stories are shared by people who', o: ['act without thinking because they are in a rush.', 'want to mislead others on purpose.', 'have not learnt how to check sources.', 'trust the apps they use too much.'], why: '*They’re shared by people in a hurry.* The deliberate deceivers are a minority in his view.' },
        { q: 'What is Nadia’s main doubt about the pop-up question?', o: ['It will not stop people who spread lies deliberately.', 'Most users will find it irritating.', 'It makes people share less real news.', 'It is too expensive for small platforms.'], why: '*The people who spread lies deliberately won’t be put off by a pop-up.*' },
        { q: 'When Marco says *That’s not quite what I’m claiming*, he is', o: ['correcting a misunderstanding of his view.', 'admitting that Nadia is right.', 'changing the subject.', 'making a stronger claim.'], why: 'He restates his view: it does not stop everything, it reduces the noise.' },
        { q: 'What really worries Nadia?', o: ['Platforms may use cheap measures to avoid costlier ones.', 'Users will stop reading the news altogether.', 'Journalists will lose their jobs to fact-checkers.', 'Pop-ups will be used to spread propaganda.'], why: '*The platforms can then say they’ve done their bit. A pop-up is cheap.*' },
        { q: 'Why does Marco mention stories that turned out to be true?', o: ['to question who should judge what is false', 'to show that the media are often biased', 'to defend people who spread rumours', 'to prove that checking is impossible'], why: '*To play devil’s advocate… who decides what counts as false?*' },
      ] },
    ] },
    { title: 'What the speaker is doing', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each phrase from the discussion with what the speaker is doing.', pairs: [
        ['I take your point, but…', 'accepting part of an argument, then disagreeing'],
        ['That’s not quite what I’m claiming.', 'correcting a misunderstanding'],
        ['Up to a point.', 'agreeing only partly'],
        ['I’d go further than…', 'making a stronger claim'],
        ['To play devil’s advocate…', 'arguing a view they may not hold'],
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 3 of C1 Advanced you hear about four minutes of discussion twice and answer six questions with four options each. The questions follow the order of the recording, so if you miss one, move on and catch it on the second listening.' },
    ] },
    { title: 'Your view', blocks: [
      { t: 'text', md: 'Answer as you would in Speaking Part 4: *Should social media platforms be responsible for checking the stories that spread on them?*\n\nUse a reporting verb with its pattern (*Nadia argued that…*, *Marco conceded that…*), one distancing phrase (*it would appear that…*, *reportedly*) and one discussion phrase from page 2.' },
      { t: 'tip', art: 'owl', md: 'A strong Part 4 answer gives an opinion, a reason, a qualification and an example, and then responds to your partner. Refer to what they said: *As you said, …, but I’d go further than that.*' },
    ] },
  ],
  activities: {
    one: { title: 'Devil’s advocate', md: 'Ask the student for their view on who should stop false stories spreading. Then play devil’s advocate and argue the opposite firmly. The student must respond with at least three discussion phrases and one reporting verb about what you said. Swap roles for a second topic.' },
    small: { title: 'Three-way radio show', md: 'One student is the presenter, two are guests with opposite views (assign them privately). They hold a three-minute discussion on misinformation using the phrases from page 2. The listeners then report the discussion with precise reporting verbs (*Ana insisted that…*, *Ben conceded that…*). Rotate roles.' },
    group: { title: 'Panel rooms', md: 'Breakout rooms of four hold a panel: two argue that platforms are responsible, two that users are. Each speaker must use one phrase from page 2. Bring everyone back; one student from each room reports the outcome with reporting verbs and the class votes on the most convincing argument.' },
  },
  homework: { book: 'u11', md: 'Finish lesson 4 of unit 11 if needed and do the unit 11 test, then do lesson 1 of unit 12 (Sustain, sustainable, sustainability). Write about 150 words answering: *Who should be responsible for stopping false stories from spreading?* Report at least two views with precise reporting verbs before giving your own.' },
};
