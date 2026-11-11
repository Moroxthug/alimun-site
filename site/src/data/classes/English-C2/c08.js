// English C2, class 8 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c08',
  focus: 'By the end every student uses the semicolon, the colon, the dash, brackets and the comma with control and for effect, knows the comma that changes meaning (defining and non-defining clauses), and plans an article in the format of C2 Proficiency Writing Part 2: an intriguing title, an opening that draws the reader in, a fair counterpoint and an ending that stays with the reader.',
  tips: [
    'The most common C2 punctuation error is still the comma splice (*The film was long, it was brilliant*). Point it out every time; students who fix it in class usually stop making it in writing.',
    'Teach the semicolon by meaning, not by rule: it joins two complete sentences that belong together, so it often carries a contrast or a consequence (*The plan was simple; the execution was not*).',
    'The dash is expressive but informal. In an article one or two dashes add voice; in a report or an essay, prefer commas, brackets or a colon.',
    'When you correct the homework article, mark it on the four areas the exam uses (Content, Communicative achievement, Organisation and Language) and comment on punctuation under Organisation and Language.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write on the board: *My brother who lives in Rome is a doctor.* and *My brother, who lives in Rome, is a doctor.* Ask how many brothers the speaker has in each sentence.' },
    { min: 10, title: 'Which is right?', md: 'Show board page 1. Students choose the correctly punctuated sentence and explain what each mark does.' },
    { min: 10, title: 'Fix the mark', md: 'Show board page 2. Students fix the punctuation in pairs and read the sentences aloud, pausing as the marks tell them to.' },
    { min: 12, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 18, title: 'Exam corner', md: 'Show board page 3: C2 Proficiency Writing Part 2, an article. Students read the task and answer the planning questions, then spend five minutes writing their own title and first two sentences. Read them aloud and discuss which openings make the reader want to go on.' },
    { min: 5, title: 'Close', md: 'Each student reads their best sentence of the day aloud, with the punctuation audible. Set the homework.' },
  ],
  board: [
    { title: 'Which is right?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which sentence is punctuated correctly?', items: [
        { q: '', o: ['The interview went well; the offer, however, never came.', 'The interview went well, the offer, however, never came.', 'The interview went well; however the offer; never came.'], why: 'A semicolon joins the two sentences; *however* inside the second clause takes commas.' },
        { q: '', o: ['There was only one person she trusted: her sister.', 'There was only one person she trusted; her sister.', 'There was only one person, she trusted her sister.'], why: 'A colon delivers what the sentence promised.' },
        { q: '', o: ['The report – all ninety pages of it – arrived on the morning of the meeting.', 'The report – all ninety pages of it, arrived on the morning of the meeting.', 'The report; all ninety pages of it; arrived on the morning of the meeting.'], why: 'A pair of dashes sets off an aside; both dashes are needed.' },
        { q: '', o: ['Students who miss the deadline will lose marks.', 'Students, who miss the deadline, will lose marks.', 'Students who miss the deadline, will lose marks.'], why: 'A defining clause: only those students. No commas.' },
        { q: '', o: ['He had prepared for everything – except the question he was actually asked.', 'He had prepared for everything; except the question he was actually asked.', 'He had prepared for everything: except, the question he was actually asked.'], why: 'A single dash before a twist at the end of the sentence.' },
      ] },
    ] },
    { title: 'Fix the mark', blocks: [
      { t: 'ex', kind: 'fix', h: 'Fix the punctuation mark in brackets.', items: [
        { s: 'The hotel was cheap[,] it was also the noisiest place I have ever slept.', a: [';', '.', '–'], why: 'A comma splice: a semicolon, a full stop or a dash.' },
        { s: 'She packed three things[;] a torch, a map and a flask of tea.', a: [':'], why: 'A colon introduces a list; a semicolon needs a full sentence on both sides.' },
        { s: '[Let’s eat grandma.]', a: ['Let’s eat, grandma.', 'Let’s eat, grandma!'], why: 'The comma that changes meaning: without it, grandma is the meal.' },
        { s: 'The new [manager who] had worked in Tokyo for ten years, changed everything.', a: ['manager, who'], why: 'A non-defining clause needs a comma on both sides.' },
        { s: 'The results were clear[:] however, nobody wanted to accept them.', a: [';', '.'], why: '*However* joining two sentences takes a semicolon or a full stop before it.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 2, an article', blocks: [
      { t: 'text', md: '**Task.** An international magazine for young professionals is publishing a series of articles called *Should we still teach handwriting?* Write an article describing the place handwriting has in your life and in schools today, explaining whether you think it still matters, and suggesting what schools should do. Write **280 to 320 words**.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2): read the task and choose the best answer to each question about planning the article.', items: [
        { q: 'Which title would work best?', o: ['The last pen standing', 'Handwriting: an article', 'Some thoughts on whether schools should still teach handwriting'], why: 'Short, intriguing and linked to the topic; the others are flat or too long.' },
        { q: 'Which opening would draw the reader in?', o: ['Last week I wrote a birthday card for the first time in years, and halfway through I realised I had forgotten how to join my letters.', 'Handwriting is a skill that people learn at school.', 'In this article I will discuss the topic of handwriting in schools.'], why: 'A small, familiar scene with a surprise; the others announce the topic without interest.' },
        { q: 'Which sentence best introduces a fair counterpoint?', o: ['None of this is to say that the keyboard is the enemy; for most of us, it is simply the faster pen.', 'On the other hand, there are some disadvantages.', 'But some people do not agree with what I think.'], why: 'A balanced, precise concession with a semicolon; the others are vague.' },
        { q: 'Which plan covers the whole task?', o: ['handwriting in my life and in schools now; why it still matters, and the case against; what schools should do; a closing thought', 'the history of writing; my favourite pens; a conclusion', 'why handwriting matters; why it does not matter; a conclusion'], why: 'The task has three parts: describe, explain whether it matters, suggest. Only the first plan covers them all.' },
        { q: 'Which ending would stay with the reader?', o: ['Teach children to type, by all means. But teach them, too, to write a note that nobody else could have written.', 'In conclusion, handwriting is important and schools should teach it.', 'That is all I have to say about handwriting.'], why: 'A balanced final sentence that returns to the human point of the opening.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Writing Part 2** you choose **one** task (an article, a letter, a report or a review) and write **280 to 320 words**. An article needs a voice: speak to the reader, vary the rhythm, and let your punctuation carry the tone. One dash or one well-placed colon does more than three exclamation marks.' },
    ] },
  ],
  activities: {
    one: { title: 'Punctuate my paragraph', md: 'Ask the student to write a paragraph of five or six sentences in the chat about the last thing that annoyed them, with no punctuation except full stops. Then repunctuate it together for effect: join two sentences with a semicolon, add a colon before an explanation, set off an aside with dashes or brackets, and end with a single dash before a twist. Read both versions aloud and compare.' },
    small: { title: 'Same words, new meaning', md: 'Post a few unpunctuated word strings in the chat (*the teacher said the student is a genius*, *I like cooking my family and my dog*, *woman without her man is nothing*). Pairs or individuals punctuate each one in two ways that give different meanings, then read them out with the pauses audible. The group judges which pair of meanings is furthest apart.' },
  },
  homework: { book: 'u2:p4', md: 'Finish lesson 3 of unit 2 if needed, then do lesson 4 (The slow lane). Write the article from today’s Exam corner, *Should we still teach handwriting?*, in 280 to 320 words, and send it to your teacher. Use at least one semicolon, one colon and one pair of dashes, each for a reason.' },
};
