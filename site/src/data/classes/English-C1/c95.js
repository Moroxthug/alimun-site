// English C1, class 95 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u20:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c95',
  focus: 'By the end every student can describe every paper and part of C1 Advanced without notes: Reading and Use of English (eight parts), Writing (two parts), Listening (four parts) and Speaking (four parts, usually in pairs). They know the habits that lose marks on the day, have a plan for the last weeks of revision, and know what comes next: the practice exam, then Alimun’s level test for moving up to C2, the level of C2 Proficiency.',
  tips: [
    'Make this class active: students explain the parts to each other rather than listening to you. Correct facts, but let them do the talking.',
    'Overall results reflect all the papers together, so a strong paper can help a weaker one. Use this to encourage students to work on every paper, not only their favourite.',
    'Never promise a result. Say *You know the format and you have practised every part*; the next two classes show where each student stands.',
    'For students who ask about C2, explain it simply: longer and more demanding texts, more precision, and a Writing Part 1 that summarises and evaluates two texts. At Alimun, C2 runs as small groups and 1 on 1.',
    'End with a concrete revision plan for each student: one paper to strengthen, and when they will practise it before the practice exam.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Which part of the exam do you feel most ready for, and which least?* Collect answers in the chat.' },
    { min: 12, title: 'The four papers', md: 'Show board page 1. Students match each part to its task, then explain one paper each to the class in a minute.' },
    { min: 10, title: 'True or false', md: 'Show board page 2. Students decide alone, then justify each answer.' },
    { min: 10, title: 'Exam-day habits', md: 'Show board page 3. Students choose the better habit and share one habit of their own that helps.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4: a last round in the format of C1 Advanced Reading and Use of English Part 4, alone with “Everyone solves this”, then check together.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Revision plan and close', md: 'Each student writes in the chat the paper they will strengthen and when they will practise it. Explain the next classes: a review, the practice exam and the level test for C2. Set the homework.' },
  ],
  board: [
    { title: 'The four papers', blocks: [
      { t: 'table', caption: 'C1 Advanced at a glance', explain: ['head', 'col0', 'col2'], head: ['Paper', 'Parts', 'Time'], rows: [
        ['Reading and Use of English', '8', '1 h 30 min'],
        ['Writing', '2', '1 h 30 min'],
        ['Listening', '4', 'about 40 min'],
        ['Speaking', '4', 'about 15 min, usually in pairs'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match each part with what you do.', pairs: [
        ['Reading and Use of English Part 2', 'write one word in each gap'],
        ['Reading and Use of English Part 8', 'match statements to the sections of a text'],
        ['Writing Part 1', 'write an essay on two of three points'],
        ['Listening Part 2', 'complete sentences with words from a talk'],
        ['Listening Part 4', 'do two matching tasks on five speakers'],
        ['Speaking Part 2', 'compare two of three pictures'],
      ] },
    ] },
    { title: 'True or false?', blocks: [
      { t: 'ex', kind: 'tf', h: 'Are these sentences about C1 Advanced true or false?', items: [
        { q: 'In Writing Part 1 you must discuss all three points in the notes.', a: 'f', why: 'You choose two of the three and say which is more important or effective.' },
        { q: 'In Listening you hear every recording twice.', a: 't', why: 'Every part is heard twice.' },
        { q: 'Part 4 answers in Reading and Use of English use three to six words, including the key word.', a: 't', why: 'And contractions count as two words.' },
        { q: 'In Speaking Part 3 you and your partner must agree at the end.', a: 'f', why: 'You try to reach a decision, but you may agree to disagree.' },
        { q: 'One weak paper always means a weak overall result.', a: 'f', why: 'The overall result reflects all the papers together, so a strong paper can help a weaker one.' },
        { q: 'Both Writing tasks are 220 to 260 words.', a: 't', why: 'About 45 minutes for each task.' },
      ] },
    ] },
    { title: 'Exam-day habits', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which habit helps more on the day?', items: [
        { q: 'In Reading and Use of English:', o: ['about ten minutes each on Parts 1 to 4, and more on Parts 5 to 8', 'as long as you need on Part 1 before moving on', 'starting with the longest text and leaving Parts 1 to 4 to the end without timing them'], why: 'The long texts need most of the time.' },
        { q: 'In Listening:', o: ['reading the questions first and listening for the idea behind the words', 'trying to catch every single word', 'writing the answer the moment you hear a word from the options'], why: 'Wrong options are often mentioned; the right one paraphrases the idea.' },
        { q: 'In Writing:', o: ['ten minutes of planning for each text', 'starting to write at once to save time', 'writing as many words as possible'], why: 'A plan saves time and marks on content and organisation.' },
        { q: 'When you are not sure of an answer:', o: ['write your best guess and come back if there is time', 'leave it blank', 'choose the longest option'], why: 'A blank answer can never earn a mark.' },
      ] },
      { t: 'tip', art: 'owl', md: 'After C1 comes C2, the level of C2 Proficiency: the same four papers with longer and more demanding texts. Before you move up, you take Alimun’s level test for C2, the last class of this course.' },
    ] },
    { title: 'Exam corner: a last round of Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'As soon as the meeting started, the lights went out.', cue: 'SOONER', a: ['No sooner had the meeting started than the lights went out.'], why: 'Inversion: *No sooner had* + past participle + *than*.' },
        { q: 'If it hadn’t been for her advice, I would have made a terrible mistake.', cue: 'BUT', a: ['But for her advice, I would have made a terrible mistake.'], why: '*But for* + noun = *if it hadn’t been for*.' },
        { q: 'It doesn’t matter how hard he tries; he never wins.', cue: 'HOWEVER', a: ['However hard he tries, he never wins.'], why: '*However* + adjective or adverb for concession.' },
        { q: 'The two sisters have always disagreed about politics.', cue: 'EYE', a: ['The two sisters have never seen eye to eye about politics.', 'The two sisters have never seen eye to eye on politics.', 'The two sisters have never seen eye to eye over politics.'], why: '*See eye to eye*, made negative to keep the meaning.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Personal exam map', md: 'Go through every paper with the student and ask them to rate each part from what they have done in the course: confident, nearly or not yet. Together, choose two parts to practise before the practice exam and agree when they will do them.' },
    small: { title: 'Explain it to me', md: 'Each student draws a paper at random in the chat and explains it to the group in one minute: the parts, the timing and one strategy. The others add anything missing. Rotate until every paper has been explained.' },
    group: { title: 'Tips exchange', md: 'Breakout rooms of three each get one paper. In five minutes they agree on the three most useful tips for that paper from the course. Back together, each room shares its tips and the class keeps the best one per paper in the chat.' },
  },
  homework: { book: 'u20:p4', md: 'Finish lesson 4 of unit 20 if needed. Write your revision plan for the next two weeks in four or five sentences: the paper you will strengthen, what you will practise and when. Do one timed task from that paper before the review class.' },
};
