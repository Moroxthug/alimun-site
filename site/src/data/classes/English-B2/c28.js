// English B2, class 28 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c28',
  focus: 'By the end of the class every student can compare how two opinion pieces argue (claims, evidence, hedging, markers), discuss the topic using the language of unit 6, and plan a four-paragraph essay in the format of B2 First Writing Part 1, including the student’s own third idea.',
  tips: [
    'When comparing the two texts, keep students on **how** they argue, not only **what** they say: Which one uses evidence? Which one presents opinions as facts? Which markers organise it?',
    'In Writing Part 1 many candidates forget the third point, which they must invent themselves. Make the third idea a separate step in the plan so nobody skips it.',
    'Planning saves marks. Insist on five minutes of planning before any writing: one line per paragraph, with the marker that will open it.',
    'The register is neutral or formal: no contractions, no *I think* in every sentence. Point to the hedging and markers from lessons 2 and 3 of the unit as the tools to use.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Should news websites be free for everyone?* Quick show of hands, then one reason from each side.' },
    { min: 15, title: 'Two opinions', md: 'Show board page 1. Students read both short pieces in four minutes and answer the questions. Discuss which writer is more convincing and why.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 2: an essay task in the format of B2 First Writing Part 1. Plan the essay together paragraph by paragraph, then students choose the best options in the planning exercise.' },
    { min: 10, title: 'Language for essays', md: 'Show board page 3. Students rewrite the informal sentences in essay style. Set the homework: the full essay.' },
  ],
  board: [
    { title: 'Two sides of a story', blocks: [
      { t: 'reading', title: 'A: Free news is good news', md: 'Information is a right, not a luxury. When the best journalism hides behind a paywall, only people who can afford it are well informed, and the rest are left with rumours on social media. What is more, free websites reach millions of young readers who would never buy a newspaper. Advertising may not be perfect, but it keeps the news open to everyone.' },
      { t: 'reading', title: 'B: Good journalism has a price', md: 'Serious reporting is expensive: a single investigation can take a team of journalists several months. Free websites tend to depend on clicks, and as a result they often reward sensational headlines rather than careful work. It could be argued that asking readers to pay is the most honest model, because the paper then answers to its readers, not to its advertisers.' },
      { t: 'ex', kind: 'choice', h: 'Compare the two texts.', items: [
        { q: 'Which writer uses a specific example of cost?', o: ['B', 'A', 'neither'], why: 'B: *an investigation can take a team… several months*.' },
        { q: 'Which writer presents an opinion as a general truth in the first sentence?', o: ['A', 'B', 'both'], why: '*Information is a right, not a luxury* is stated as fact.' },
        { q: 'Which writer hedges a claim with *It could be argued that*?', o: ['B', 'A', 'both'], why: 'B uses it in the last sentence.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Writing Part 1 you write an essay of 140 to 190 words.\n\n*In your English class you have been talking about the news. Now your teacher has asked you to write an essay.*\n\n**Should people pay for the news they read online?**\n\nNotes. Write about: **1.** the quality of journalism **2.** who can afford it **3.** ……… (your own idea)' },
      { t: 'ex', kind: 'choice', h: 'Plan the essay: choose the best option for each paragraph.', items: [
        { q: 'Paragraph 1 (introduction)', o: ['Introduce the question and say there are arguments on both sides.', 'Give your final opinion and three reasons.', 'Tell a story about your favourite newspaper.'], why: 'The introduction presents the topic; the opinion comes at the end.' },
        { q: 'A good third idea', o: ['the trust readers have in free and paid sources', 'the history of printing', 'my favourite journalist'], why: 'It is new, relevant and gives room for an argument.' },
        { q: 'Paragraph 4 (conclusion)', o: ['All in all, … followed by your opinion and the main reason.', 'However, … followed by a new idea.', 'For instance, … followed by an example.'], why: 'Sum up with a clear opinion; no new ideas.' },
      ] },
      { t: 'tip', md: 'Use **all three** points, including your own idea, or you lose marks for content. Open each body paragraph with a marker (*Firstly*, *What is more*, *On the other hand*) and hedge strong claims. Count roughly: 140 to 190 words.' },
    ] },
    { title: 'Essay style', blocks: [
      { t: 'ex', kind: 'transform', h: 'Rewrite each sentence in essay style, starting with the words given.', items: [
        { q: 'I think paying for news is a really good idea.', cue: 'It could be argued that', a: ['It could be argued that paying for news is a good idea.', 'It could be argued that paying for the news is a good idea.'], why: 'An impersonal hedge instead of *I think*.' },
        { q: 'Lots of people can’t pay for news, so that’s a problem.', cue: 'Many people', a: ['Many people cannot afford to pay for news, which is a problem.', 'Many people cannot afford the news, which is a problem.', 'Many people cannot pay for news, which is a problem.'], why: 'Formal words (*cannot*, *afford*) and *which* for the whole idea.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Plan and argue', md: 'The student argues for one side for one minute, then you argue for the other and the student answers your points with two markers and one hedge. Together, turn the discussion into a four-paragraph essay plan (one line per paragraph). The student writes the introduction in class while you watch and give feedback.' },
    small: { title: 'Panel discussion', md: 'Two students argue for paying, two against (or split the group as needed); one is the moderator. Each speaker uses one piece of evidence, one marker and one hedge. At the end, the moderator sums up both sides with *All in all…*. Then the group agrees on the best third idea for the essay.' },
    group: { title: 'Essay planning rooms', md: 'Breakout rooms of three or four plan the essay on board page 2 together: one sentence for the introduction, two arguments with an example each, the third idea and a conclusion, written in the chat. Back together, compare the third ideas from each room and choose the strongest.' },
  },
  homework: { book: 'u6:p4', md: 'Finish book lesson 4 of unit 6 (Two sides of a story), including the speaking task. Then write the essay from the exam corner (140 to 190 words) from your plan, using at least four discourse markers and two hedges.' },
};
