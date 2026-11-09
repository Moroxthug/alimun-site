// English C2, class 1 (docs/LESSONS_PLAN.md, L6). Welcome to C2. Builds on book unit u1. Draft for the owner's review.
export const LESSON = {
  id: 'c01',
  focus: 'By the end every student knows how the C2 course works (16 units, the book lesson before each class, reviews, exam practice, a mid-level check, a practice exam and a final check), has seen the four papers of C2 Proficiency, has named a precise personal goal for the course, and has done a short diagnostic that shows the teacher where to push. The speaking goal: answer personal questions with the ease, range and control of Speaking Part 1.',
  tips: [
    'C2 students already communicate with ease. What they need is precision and naturalness: the exact word, the idiomatic phrase, the sentence with the right weight. From the first class, praise accuracy less and choice more: *That is correct; is there a sharper way to say it?*',
    'Take the goals seriously and write them down. A student preparing for university, one who negotiates at work and one who wants to read novels need different emphasis in the same lessons, and the activities leave room for it.',
    'Present the exam honestly. C2 Proficiency has four papers (Reading and Use of English, Writing, Listening, Speaking), and every class has an Exam corner in the format of one part. Never promise a result; say that the course works in the format of every part, many times.',
    'The diagnostic is for you, not a grade. Watch which items take longest and which mistakes repeat, and note them for the review classes. Do not correct more than three or four points today.',
    'In 1 on 1 classes you are the student’s partner in the Speaking tasks; in small groups, pair students who have different goals so they hear more than one kind of English.',
  ],
  plan: [
    { min: 10, title: 'Warm-up and goals', md: 'Each student introduces themselves: what they do, where English fits into their life now, and one thing they want to do in English at the end of C2 that they cannot yet do well. Push for a precise goal (*write a report my director does not rewrite*, not *improve my writing*). Write the goals on the board.' },
    { min: 8, title: 'How C2 works', md: 'Show board page 1. Explain the book, the class lessons, the reviews, the exam practice classes, the mid-level check, the practice exam and the final check. Students answer the true or false questions.' },
    { min: 8, title: 'The C2 Proficiency exam', md: 'Show board page 2. Go through the four papers. Students match each paper with what it asks them to do, then say which one they expect to find hardest and why.' },
    { min: 10, title: 'Diagnostic', md: 'Show board page 3. Six minutes, alone, no dictionaries. Check together and ask which answers were guesses. Note each student’s weak points privately.' },
    { min: 12, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 8, title: 'Exam corner', md: 'Show board page 4: Speaking Part 1. Students choose the answers that would score best and say why, then answer two of the questions themselves.' },
    { min: 4, title: 'Close', md: 'Each student repeats their goal in one sentence, more precisely than at the start. Set the homework.' },
  ],
  board: [
    { title: 'How C2 works', blocks: [
      { t: 'text', md: 'C2 has **16 units** in the book and **80 classes**. Before each class, do the book lesson; after it, practise for about **30 minutes a day**. After every two units there is a **review**, and along the way there are four **exam practice** classes (one for each paper of C2 Proficiency), a **mid-level check** after unit 8, a full **practice exam** and a **final check** as the last class. C2 is taught in **small groups of up to six** and **1 on 1**, so every class leaves time for you to speak and write.' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'The class builds on the book lesson you did before it.', a: 't', why: 'You arrive with the language; the class makes you use it.' },
        { q: 'Exam practice is kept for the last few weeks of the course.', a: 'f', why: 'Every class has an Exam corner, and there are four exam practice classes along the way.' },
        { q: 'Every two units end with a review class.', a: 't', why: 'Eight reviews: after units 2, 4, 6 and so on.' },
        { q: 'C2 classes can have up to fifteen students.', a: 'f', why: 'C2 runs as small groups of up to six and 1 on 1 only.' },
      ] },
    ] },
    { title: 'C2 Proficiency: the four papers', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each paper with what you do in it.', pairs: [
        ['Reading and Use of English', 'seven parts on vocabulary, grammar and long texts, in an hour and a half'],
        ['Writing', 'an essay on two short texts, and one article, letter, report or review'],
        ['Listening', 'four parts: short extracts, a talk, an interview or discussion, and five short speakers'],
        ['Speaking', 'three parts with an examiner and another candidate: questions, a task together and a long turn'],
      ] },
      { t: 'text', md: 'The two halves of **Writing** are different in kind. **Part 1** is compulsory: you read two short texts on the same subject, summarise and evaluate their ideas and add your own view, in **240 to 280 words**. In **Part 2** you choose one task and write **280 to 320 words**. Every C2 unit has work in the format of at least one part.' },
      { t: 'tip', art: 'owl', md: 'You do not need a separate exam course. The units of the book cover every task type of C2 Proficiency, and every class has an **Exam corner**, so by the end you will have worked in the format of each part many times.' },
    ] },
    { title: 'Diagnostic', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the word or phrase that fits best. Do not guess: if you do not know, say so.', items: [
        { q: 'She ___ at the faded letter, trying to make out the signature.', o: ['peered', 'glanced', 'gazed'], why: '*Peer*: look hard because it is difficult to see. Unit 1.' },
        { q: 'We were ___ disappointed by the result, but hardly surprised.', o: ['bitterly', 'strongly', 'highly'], why: 'The collocation is *bitterly disappointed*. Unit 1.' },
        { q: '___ had we sat down than the fire alarm went off.', o: ['No sooner', 'Hardly', 'As soon as'], why: '*No sooner… than*; *hardly* needs *when*. Unit 2.' },
        { q: 'He was asked to apologise and ___ with surprising grace.', o: ['did so', 'made it', 'did it so'], why: '*Do so* replaces a verb phrase. Unit 2.' },
        { q: 'I suggest that he ___ the matter with his manager first.', o: ['raise', 'raises to', 'will raise'], why: 'The mandative subjunctive: the base form, *that he raise*. Unit 6.' },
        { q: 'Sooner or later the council will have to ___ the nettle of housing.', o: ['grasp', 'bite', 'seize'], why: 'The idiom is fixed: *grasp the nettle*. Unit 3.' },
      ] },
      { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4), shortened to two items: complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and eight words, including the word given.', items: [
        { q: 'I had no idea that the company was in such difficulty.', cue: 'little', gap: '___ the company was in such difficulty.', a: ['Little did I know that', 'Little did I realise that', 'Little did I suspect that', 'Little did I know', 'Little did I realise'], why: 'Negative inversion with *little*: *Little did I know (that)…* Unit 2.' },
        { q: 'People say that the house was built by a famous architect.', cue: 'reputed', gap: 'The house ___ by a famous architect.', a: ['is reputed to have been built'], why: 'Passive reporting with a perfect passive infinitive: six words.' },
      ] },
    ] },
    { title: 'Exam corner: Speaking Part 1', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Speaking Part 1): the examiner asks each question below. Choose the answer that would score best.', items: [
        { q: '“What do you enjoy most about the work you do?”', o: ['Oddly enough, the problems. On a good day nothing goes to plan, and untangling it is where I feel I’m actually earning my salary.', 'I enjoy my work very much because it is very interesting.', 'My work. I like it.'], why: 'A C2 answer is short, natural and precise: a surprising angle (*oddly enough*), then a concrete reason.' },
        { q: '“How has the place where you live changed in recent years?”', o: ['Almost beyond recognition, at least in the centre. The old shops have given way to cafés, which is pleasant enough, though I sometimes wonder where people actually buy a hammer now.', 'It has changed a lot. There are many new things.', 'The place where I live has been changing in the recent years very much.'], why: 'A precise collocation (*beyond recognition*, *give way to*) and a light touch of humour.' },
        { q: '“Why are you learning English to this level?”', o: ['Partly for work, where I write to clients every day, but if I’m honest, mainly because I’m tired of sounding less intelligent in English than I do in my own language.', 'For my job and for travelling.', 'Because English is the most important language in the world.'], why: 'Two reasons, ranked, with an honest and personal ending: natural and controlled.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In **Speaking Part 1** the examiner asks each candidate a few questions about themselves for about **two minutes**. Answer, add a reason or a detail, and stop. At C2 the examiner listens for range and naturalness, not length.' },
    ] },
  ],
  activities: {
    one: { title: 'Goal interview', md: 'Interview the student about their English: where they use it, the last time they felt their English was not enough, and what a perfect result of this course would look like. Turn their answer into one precise goal and two or three areas to work on (for example, *formal writing for senior readers*, *idiom in conversation*), and agree how the Exam corners will serve it. Write the goal at the top of the class notes.' },
    small: { title: 'Interview and introduce', md: 'In pairs, students interview each other for four minutes (work or studies, the moment their English felt not enough, a goal for C2), then introduce their partner to the group in one minute, using at least one precise word or idiom the partner used. The group asks one follow-up question each. With an odd number, make one group of three.' },
  },
  homework: { book: 'u1:p1', md: 'Start unit 1: do lesson 1 (Glance, gaze, stare). Then write about 150 words: where English fits into your life now, the last time it was not enough, and what you want to be able to do at the end of C2. Choose every word with care: you will reread it at the end of the course.' },
};
