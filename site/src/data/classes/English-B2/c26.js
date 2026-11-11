// English B2, class 26 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u6:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c26',
  focus: 'By the end of the class every student can link and balance an argument with discourse markers chosen for their job: adding (*what is more, moreover*), contrasting (*however, on the other hand, nevertheless*), giving a result (*as a result, therefore*) and summing up (*all in all, to sum up*). Accuracy point: punctuation with *however* and the difference between *however* and *but*.',
  tips: [
    'Most learners use *however* exactly like *but*: *The plan was good, however it failed.* Show that *however* starts a new sentence or comes after a semicolon, with a comma after it.',
    '*On the other hand* needs a first hand: it introduces the other side of an argument, not any contrast. Learners use it to mean *in contrast* or even *in addition*.',
    'Overuse is the next problem. A paragraph with a marker in every sentence sounds mechanical. Aim for two or three per paragraph in essays.',
    'This lesson prepares the B2 First essay (Writing Part 1) and Speaking Part 3. Show that markers make spoken arguments clearer too (*What’s more…*, *Having said that…*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Is social media good or bad for teenagers?* Collect three points for and three against on the board in note form.' },
    { min: 12, title: 'Markers by job', md: 'Show board page 1. Sort the markers by job, then use the warm-up notes to build two linked sentences together.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students choose markers and fix the punctuation alone, then check together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: a gapped paragraph in the format of B2 First Reading and Use of English Part 6. Students choose the sentence that fits each gap, then explain which words linked it.' },
    { min: 5, title: 'Close', md: 'Each student gives one argument about the warm-up topic using a marker. Set the homework.' },
  ],
  board: [
    { title: 'Discourse markers by job', blocks: [
      { t: 'table', caption: 'Choose the marker for its job', explain: ['head', 'col0'], head: ['Job', 'Markers', 'Example'], rows: [
        ['adding a point', 'what is more, in addition, moreover, furthermore', 'What is more, it is free.'],
        ['contrast', 'however, on the other hand, nevertheless, having said that', 'However, few people use it.'],
        ['result', 'as a result, therefore, consequently, so', 'As a result, prices rose.'],
        ['example', 'for instance, for example, such as', 'For instance, many schools ban phones.'],
        ['summing up', 'all in all, to sum up, overall', 'All in all, the benefits are greater.'],
      ] },
      { t: 'text', md: '*However*, *moreover* and *therefore* usually start a new sentence and are followed by a comma: *The plan was good. **However,** it failed.* *But* joins two parts of one sentence: *The plan was good, **but** it failed.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best marker.', items: [
        { q: 'Public transport is cheap. ___, it is better for the environment.', o: ['What is more', 'However', 'As a result'], why: 'Adding a second advantage.' },
        { q: 'The app is very popular. ___, many users worry about their data.', o: ['Nevertheless', 'Therefore', 'In addition'], why: 'A contrast with the first sentence.' },
        { q: 'The city banned cars from the centre. ___, the air is cleaner.', o: ['As a result', 'On the other hand', 'For instance'], why: 'A result of the ban.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'The film was long, [however it] was never boring.', a: ['but it'], why: 'Inside one sentence, use *but*; *however* starts a new sentence.' },
        { s: 'Cycling is healthy. [On the other hand,] it is cheap.', a: ['What is more,', 'Moreover,', 'In addition,'], why: 'The second point is another advantage, not the other side.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 6', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 6: choose the sentence that fits each gap.\n\n*Many cities are now closing their centres to cars. (1) ___ Shop owners, for example, often fear that customers will stop coming. (2) ___ Studies from several European cities show that people on foot and on bikes actually spend more per month in local shops.*' },
      { t: 'ex', kind: 'choice', h: 'Which sentence fits each gap?', items: [
        { q: 'Gap 1', o: ['However, not everyone welcomes the idea.', 'As a result, the air has become cleaner.', 'All in all, the plan is a success.'], why: 'The next sentence gives an example of people who do not welcome it.' },
        { q: 'Gap 2', o: ['Nevertheless, the evidence suggests the opposite.', 'What is more, shops are often small.', 'For instance, cars are expensive.'], why: '*the opposite* of the fear, followed by evidence.' },
      ] },
      { t: 'tip', md: 'In Part 6, look at the sentences **before and after** the gap. Markers, pronouns (*this, they, such*) and examples are the links. If the next sentence starts with *for example*, the gap usually states the general idea.' },
    ] },
  ],
  activities: {
    one: { title: 'Mini debate', md: 'Give the student a topic (*Should homework be banned?*). The student speaks for one minute for the idea and one minute against, using at least five markers from three different jobs. Then write one paragraph together from the speech, paying attention to punctuation with *however*.' },
    small: { title: 'Marker relay', md: 'Choose a topic. The first student makes a statement; each next student must continue with a sentence that starts with a marker you name (*What is more… / However… / As a result… / For instance…*). After two rounds, review the sentences that did not fit the marker’s job.' },
    group: { title: 'Paragraph builders', md: 'Breakout rooms of three or four get a topic and a list of four markers. Together they write a balanced paragraph of five or six sentences in the chat. Back together, the class reads the paragraphs and checks two things: does each marker do the right job, and is the punctuation correct?' },
  },
  homework: { book: 'u6:p2', md: 'Finish book lesson 2 of unit 6 (Linking your ideas), including the speaking task. Then write a balanced paragraph (about 100 words) on *Is it better to live in a big city or a small town?* using at least five markers with three different jobs.' },
};
