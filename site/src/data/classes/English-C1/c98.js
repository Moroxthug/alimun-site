// English C1, class 98 (docs/LESSONS_PLAN.md, L6). Level test: ready for C2, all 20 units (owner's gate between C1 and C2). Draft for the owner's review.
export const LESSON = {
  id: 'c98',
  focus: 'By the end of the class every student has done the level test for moving up to C2: a written test on the board covering all 20 units of C1, and a speaking test. A student is ready for C2 with about 70% on the written test and a confident C1 speaking performance (extended, well-organised answers with a wide range of structures, precise vocabulary, natural softening and hedging, and errors that are rare and do not affect meaning). Results are given privately, with a re-test after two weeks for anyone not ready yet. At Alimun, C2 runs as small groups and 1 on 1, so the next step for a student who is ready is a C2 small group or 1 on 1.',
  tips: [
    'Tell students at the start how the test works and that a re-test after two weeks is possible. This keeps stress down and gives a truer result.',
    'Criteria for “ready for C2”: about 70% on the written test (at least 17 of 24 items), and in speaking: developed answers of five or more connected sentences, a wide range of C1 structures (inversion, clefts, mixed conditionals, passive reporting, modals with *have*), precise collocations and idioms, tact when disagreeing, and errors that are rare.',
    'Give every result in private, never in front of the class. Start with a strength, then the decision, then the plan.',
    'For students who are not ready: name the units to revise, set the homework below, and book the re-test for two weeks later. For students who are ready: explain that C2 at Alimun runs as small groups and 1 on 1, and help them choose.',
    'This is Alimun’s level test, not the Cambridge exam. Do not tell any student they will pass C1 Advanced or C2 Proficiency; say what they can do and what to work on.',
    'Note each student’s result and weak areas in your class notes: the C2 teacher will see them.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the written part, the speaking part, the private results and the re-test.' },
    { min: 22, title: 'Written test', md: 'Show board pages 1, 2 and 3. Students answer alone with “Everyone solves this” for each page, about seven minutes each. Do not reveal yet.' },
    { min: 20, title: 'Speaking test', md: 'Show board page 4. Talk with each student for about three minutes with the questions and the criteria. The others reread their answers while they wait.' },
    { min: 10, title: 'Answers', md: 'Reveal the written answers. Students count their score out of 24.' },
    { min: 5, title: 'Results and close', md: 'Explain that results come privately today, with the next step: a C2 small group or 1 on 1, or a re-test in two weeks. Congratulate the class on finishing C1.' },
  ],
  board: [
    { title: 'Written test: grammar', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I ___ to call you for weeks, but something always came up.', o: ['’d been meaning', 'meant', '’ve meant'], why: 'Unit 1: an intention over a period before a past moment.' },
        { q: 'We ___ married in June, but the wedding was cancelled.', o: ['were to have got', 'were getting', 'had got'], why: 'Unit 2: a past plan that did not happen.' },
        { q: '___ I need is more time, not more money.', o: ['What', 'That', 'Which'], why: 'Unit 3: a *what* cleft.' },
        { q: 'You ___ have worried; the exam was easier than expected.', o: ['needn’t', 'mustn’t', 'can’t'], why: 'Unit 4: you worried, but it was not necessary.' },
        { q: 'The minister is alleged ___ public money.', o: ['to have misused', 'to misuse', 'misusing'], why: 'Unit 5: passive reporting about the past.' },
        { q: 'If I had accepted the job, I ___ in Toronto now.', o: ['would be living', 'would have lived', 'will live'], why: 'Unit 6: a mixed conditional, past cause and present result.' },
        { q: '“Will the trains be on strike tomorrow?” “I hope ___.”', o: ['not', 'no', 'don’t'], why: 'Unit 7: substitution with *not*.' },
        { q: 'The new law is ___ to come into force next year.', o: ['due', 'on the verge', 'about'], why: 'Unit 8: *be due to* for a timetable; *about to* is too near for *next year*.' },
      ] },
    ] },
    { title: 'Written test: fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Not until the next morning [I realised] what had happened.', a: ['did I realise', 'did I realize'], why: 'Unit 9: inversion after *not until*.' },
        { s: 'A quiet room is conducive [for] concentration.', a: ['to'], why: 'Unit 10: *conducive to*.' },
        { s: 'My tutor urged [me that I apply] for the scholarship.', a: ['me to apply'], why: 'Unit 11: *urge someone to do*.' },
        { s: 'The teacher made us [to rewrite] the whole essay.', a: ['rewrite'], why: 'Unit 12: *make someone do*, without *to*.' },
        { s: 'The final scene was [very magnificent].', a: ['absolutely magnificent', 'truly magnificent', 'utterly magnificent', 'magnificent'], why: 'Unit 13: an ungradable adjective takes *absolutely*, not *very*.' },
        { s: 'The flat is [nowhere near so] spacious as the photos suggest.', a: ['nowhere near as'], why: 'Unit 14: *nowhere near as… as*.' },
        { s: 'The government should do more to help [the poors].', a: ['the poor'], why: 'Unit 15: *the* + adjective for a group, with no *-s*.' },
        { s: 'I hated the city at first, but I [came loving] it.', a: ['came to love'], why: 'Unit 16: *come to* + verb for a gradual change.' },
      ] },
    ] },
    { title: 'Written test: transformations', blocks: [
      { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use the word given and three to six words, including the word given.', items: [
        { q: 'The rules say every member must attend the annual meeting.', cue: 'REQUIRED', a: ['Every member is required to attend the annual meeting.'], why: 'Unit 17: *be required to* for formal obligation.' },
        { q: 'It is vital for the patient to rest.', cue: 'THAT', a: ['It is vital that the patient rest.', 'It is vital that the patient should rest.', 'It is vital that the patient rests.'], why: 'Unit 17: the subjunctive after *vital that*.' },
        { q: 'Sales started rising in January and they are still rising.', cue: 'BEEN', a: ['Sales have been rising since January.'], why: 'Unit 18: a trend still moving, the present perfect continuous.' },
        { q: 'Where is the nearest station?', cue: 'HAPPEN', a: ['Do you happen to know where the nearest station is?'], why: 'Unit 19: an indirect question with statement order.' },
        { q: 'The two neighbours argue all the time.', cue: 'LOGGERHEADS', a: ['The two neighbours are always at loggerheads.', 'The two neighbours are constantly at loggerheads.', 'The two neighbours are always at loggerheads with each other.', 'The two neighbours are constantly at loggerheads with each other.'], why: 'Unit 19: *be at loggerheads*, with an adverb to keep *all the time*.' },
        { q: 'We had only just arrived when it started to snow.', cue: 'HARDLY', a: ['Hardly had we arrived when it started to snow.'], why: 'Units 9 and 20: inversion after *hardly*.' },
        { q: 'The noise bothered me most.', cue: 'WHAT', a: ['What bothered me most was the noise.', 'What bothered me the most was the noise.'], why: 'Unit 3: a *what* cleft to focus on the noise.' },
        { q: 'The demand was so great that the shop ran out of stock.', cue: 'SUCH', a: ['Such was the demand that the shop ran out of stock.'], why: 'Unit 9: fronting *such* with inversion.' },
      ] },
    ] },
    { title: 'Speaking test', blocks: [
      { t: 'text', md: '**Questions (three minutes per student):** *Tell me about a time you changed your mind about something important. What made you change it?* *Some people say technology has made us better informed but worse at listening to each other. How far do you agree?* *If you could change one law in your country, what would it be, and what might the consequences be?* **Criteria:** developed answers of five or more connected sentences; a wide range of C1 structures; precise vocabulary, collocations and idioms; tact when disagreeing or hedging; errors that are rare and do not affect meaning.' },
      { t: 'tip', art: 'owl', md: 'This is Alimun’s level test for C2, not the Cambridge exam, but it uses the same kinds of tasks as C1 Advanced. A result of about 70% plus confident speaking means you are ready for C2, which at Alimun runs as small groups and 1 on 1.' },
    ] },
  ],
  activities: {
    one: { title: 'One to one test', md: 'Do the written test with the student, then a longer speaking test of about eight minutes using all three questions with one follow-up each, including a point you disagree with so the student has to respond tactfully. Give the result at the end, privately, with the plan: a C2 small group or 1 on 1, or the re-test.' },
    small: { title: 'Small group test', md: 'Students do the written test alone. For speaking, talk with each student for three minutes while the others review their answers. Give each result privately by message after the class.' },
    group: { title: 'Large group test', md: 'Students do the written test alone with “Everyone solves this”. For speaking, invite students one by one into a breakout room for three minutes while the others review. Send each result privately after the class.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16 u17 u18 u19 u20', md: 'Ready for C2: choose a C2 small group or 1 on 1 with your teacher, and revise any unit your teacher named. Not ready yet: revise the units your teacher named, redo their unit tests in the book, and prepare for the re-test in two weeks.' },
};
