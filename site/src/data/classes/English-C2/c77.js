// English C2, class 77 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u16:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c77',
  focus: 'By the end every student can describe every paper and part of C2 Proficiency without notes: Reading and Use of English (seven parts, 1 hour 30 minutes), Writing (two parts, 1 hour 30 minutes), Listening (four parts, about 40 minutes) and Speaking (three parts, about 16 minutes, usually in pairs). They know, in general terms, that each skill receives a score and the overall result reflects them all, the habits that lose marks on the day, and what comes next in this course: a review, the practice exam and the final check, the last class of the English course.',
  tips: [
    'Make this class active: students explain the parts to each other rather than listening to you. Correct facts, but let them do the talking.',
    'Describe marking in general terms only: a score for each skill and an overall result that reflects them all, so a stronger paper can make up for a weaker one. Use this to encourage work on every paper, not only the favourite.',
    'Never promise a result. Say *You know the format and you have practised every part*; the practice exam and the final check will show each student where they stand and which parts they are ready for.',
    'Some students will ask about taking the real exam. Explain that it is taken independently at an authorised exam centre, and that the final check will help them decide whether and when. Alimun prepares students in the format of the exam; it does not award the qualification.',
    'End with a concrete revision plan for each student: one paper to strengthen before the practice exam, and when they will practise it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Which paper do you feel most ready for, and which least? Why?* Collect answers in the chat.' },
    { min: 12, title: 'The four papers', md: 'Show board page 1. Students match each part to its task alone, then each explains one paper to the others in a minute.' },
    { min: 8, title: 'True or false', md: 'Show board page 2. Students decide alone with “Everyone solves this”, then justify each answer.' },
    { min: 10, title: 'Exam-day habits', md: 'Show board page 3. Students choose the better habit, then share one habit of their own that helps under pressure.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 4: a last round in the format of C2 Proficiency Reading and Use of English Part 4, alone, then check together and count the words.' },
    { min: 10, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'What comes next and close', md: 'Show board page 5. Explain the last three classes. Each student writes in the chat the paper they will strengthen and when. Set the homework.' },
  ],
  board: [
    { title: 'The four papers', blocks: [
      { t: 'table', caption: 'C2 Proficiency at a glance', explain: ['head', 'col0', 'col2'], head: ['Paper', 'Parts', 'Time'], rows: [
        ['Reading and Use of English', '7', '1 h 30 min'],
        ['Writing', '2', '1 h 30 min'],
        ['Listening', '4', 'about 40 min, everything heard twice'],
        ['Speaking', '3', 'about 16 min, usually in pairs'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match each part with what you do.', pairs: [
        ['Reading and Use of English Part 1', 'choose one of four words for each of eight gaps'],
        ['Reading and Use of English Part 3', 'form a word from a stem in capitals'],
        ['Reading and Use of English Part 7', 'match ten statements to sections or short texts'],
        ['Writing Part 2', 'write an article, letter, report or review of 280 to 320 words'],
        ['Listening Part 3', 'answer five multiple-choice questions on a long interview'],
        ['Speaking Part 2', 'talk with your partner about pictures and reach a decision'],
      ] },
    ] },
    { title: 'True or false?', blocks: [
      { t: 'ex', kind: 'tf', h: 'Are these sentences about C2 Proficiency true or false?', items: [
        { q: 'In Writing Part 1 you summarise and evaluate two texts and give your own view.', a: 't', why: 'Summary, evaluation and your own view, in 240 to 280 words.' },
        { q: 'In Reading and Use of English Part 4 you may change the form of the key word.', a: 'f', why: 'The key word never changes; you use three to eight words including it.' },
        { q: 'In Listening Part 1 you hear three short extracts, each with two questions.', a: 't', why: 'Three extracts, two multiple-choice questions each, with three options.' },
        { q: 'In Reading and Use of English Part 6 every removed paragraph fits somewhere.', a: 'f', why: 'There are eight paragraphs for seven gaps; one is not needed.' },
        { q: 'In Speaking Part 3 each candidate speaks alone for about two minutes.', a: 't', why: 'The long turn from a question card, followed by a short question to the partner and a discussion.' },
        { q: 'A weak result in one paper always means a weak overall result.', a: 'f', why: 'The overall result reflects all the skills together, so a stronger paper can make up for a weaker one.' },
      ] },
    ] },
    { title: 'Exam-day habits', blocks: [
      { t: 'ex', kind: 'choice', h: 'Which habit helps more on the day?', items: [
        { q: 'In Reading and Use of English:', o: ['about forty minutes on Parts 1 to 4 and the rest on Parts 5 to 7', 'as long as it takes to get Part 1 perfect', 'starting with Part 7 and leaving Parts 1 to 4 untimed'], why: 'The long texts need most of the time.' },
        { q: 'In Writing Part 1:', o: ['summarising both texts in new words and evaluating each one', 'summarising the text you agree with in detail', 'copying the clearest sentences from each text'], why: 'Both texts, paraphrased, with evaluation and your own view.' },
        { q: 'In Listening, when you miss an answer:', o: ['moving on and using the second listening to check', 'stopping to think about it until the next question has passed', 'leaving the answer blank'], why: 'Everything is heard twice; follow the idea.' },
        { q: 'Between papers:', o: ['resting and not comparing answers with other candidates', 'checking every answer with the others', 'revising a new grammar point'], why: 'Comparing unsettles you and changes nothing.' },
        { q: 'In Speaking Part 2:', o: ['responding to your partner and working together towards a decision', 'saying as much as possible before your partner can speak', 'waiting silently for the examiner to ask you a question'], why: 'Your partner is not your rival: helping the conversation along helps you both.' },
      ] },
    ] },
    { title: 'Exam corner: a last round of Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Do not change the word given. Use between three and eight words, including the word given.', items: [
        { q: 'I’m sure she didn’t mean to offend anyone.', cue: 'INTENTION', a: ['I’m sure she had no intention of offending anyone.', 'I am sure she had no intention of offending anyone.'], why: '*Have no intention of* + *-ing*.' },
        { q: 'The report was published, and immediately there was an outcry.', cue: 'SOONER', a: ['No sooner had the report been published than there was an outcry.'], why: '*No sooner had* + passive past participle + *than*.' },
        { q: 'Nobody could have predicted the result.', cue: 'FORESEEN', a: ['The result could not have been foreseen.', 'The result couldn’t have been foreseen.', 'The result could not possibly have been foreseen.', 'The result could not have been foreseen by anybody.', 'The result could not have been foreseen by anyone.'], why: 'A passive modal perfect: *could not have been* + past participle.' },
        { q: 'His reaction was not at all what I expected.', cue: 'CRY', a: ['His reaction was a far cry from what I expected.', 'His reaction was a far cry from what I had expected.'], why: 'The idiom *a far cry from*.' },
        { q: 'We postponed the meeting because the chair was ill.', cue: 'ACCOUNT', a: ['We postponed the meeting on account of the chair’s illness.', 'The meeting was postponed on account of the chair’s illness.'], why: '*On account of* + noun: because of.' },
      ] },
      { t: 'tip', art: 'dragon', md: 'Read each answer back once: same meaning, three to eight words, key word unchanged. If you are unsure of half the answer, write the half you know: it may still earn a mark.' },
    ] },
    { title: 'What comes next', blocks: [
      { t: 'text', md: 'Three classes are left in this course. **The review** revises units 15 and 16 with new tasks. **The practice exam** gives you a sample of every paper under exam timing, with the rest as timed homework. **The final check** is the last class of the English course: a check across the whole of C2, with your results given privately and a report from your teacher on where you stand and what to keep working on. There is no pass or fail and no level after C2.\n\nIf you decide to take the real C2 Proficiency exam, you book it yourself at an authorised exam centre. This course has prepared you in its format; the final check will help you judge when you are ready to take it.' },
    ] },
  ],
  activities: {
    one: { title: 'Personal exam map', md: 'Go through every paper and part with the student and ask them to rate each from what they have done in the course: confident, nearly or not yet. Together, choose two parts to practise before the practice exam, agree when they will do them, and decide what they want to learn from the final check.' },
    small: { title: 'Explain it to me', md: 'Each student draws a paper at random in the chat and explains it to the group in one minute: the parts, the timing and one strategy that works for them. The others add anything missing or correct a fact. Rotate until every paper has been explained, then the group keeps the single most useful tip for each paper in the chat.' },
  },
  homework: { book: 'u16', md: 'Finish lesson 4 of unit 16 if needed and do the unit 16 test. Write your revision plan for the next two weeks in four or five sentences: the paper you will strengthen, what you will practise and when. Do one timed task from that paper before the review class.' },
};
