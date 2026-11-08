// English B2, class 84 (docs/LESSONS_PLAN.md). Level test: ready for C1, all 16 units (owner's gate between B2 and C1). Draft for the owner's review.
export const LESSON = {
  id: 'c84',
  focus: 'By the end of the class every student has done the level test for moving up to C1: a written test on the board covering all 16 units of B2, and a speaking test. A student is ready for C1 with about 70% on the written test and a confident B2 speaking performance (connected, organised answers with a range of structures and few errors that affect meaning). Results are given privately, with a re-test after two weeks for anyone not ready yet.',
  tips: [
    'Tell students at the start how the test works and that a re-test after two weeks is possible. This keeps stress down and gives a truer result.',
    'Criteria for "ready for C1": about 70% on the written test (at least 15 of 21 items), and in speaking: answers of four or five connected sentences, a range of B2 structures (conditionals, passives, modals of deduction, relative clauses), and errors that do not stop understanding.',
    'Give every result in private, never in front of the class. Start with a strength, then the decision, then the plan.',
    'For students who are not ready: name the units to revise, set the homework below, and book the re-test for two weeks later.',
    'Note each student’s result and weak areas in your class notes: the C1 teacher will see them.',
  ],
  plan: [
    { min: 3, title: 'Instructions', md: 'Explain the written part, the speaking part, the private results and the re-test.' },
    { min: 22, title: 'Written test', md: 'Show board pages 1, 2 and 3. Students answer alone with "Everyone solves this" for each page. Do not reveal yet.' },
    { min: 20, title: 'Speaking test', md: 'Show board page 4. Talk with each student for about three minutes with the questions and the criteria. The others reread their answers while they wait.' },
    { min: 10, title: 'Answers', md: 'Reveal the written answers. Students count their score out of 21.' },
    { min: 5, title: 'Results and close', md: 'Explain that results come privately today, with the next step: C1 or a re-test in two weeks. Congratulate the class on finishing B2.' },
  ],
  board: [
    { title: 'Written test: grammar', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I ___ for this company since 2019.', o: ['have been working', 'am working', 'work'], why: 'Unit 1: duration up to now.' },
        { q: 'By the time we arrived, the film ___.', o: ['had already started', 'has already started', 'already started'], why: 'Unit 2: before another past event.' },
        { q: 'This time next year, I ___ in Canada.', o: ['will be living', 'will live', 'live'], why: 'Unit 3: future continuous.' },
        { q: 'The museum is thought ___ in the twelfth century.', o: ['to have been built', 'to build', 'being built'], why: 'Unit 4: passive reporting about the past.' },
        { q: 'If I had taken the job, I ___ in Paris now.', o: ['would be living', 'would have lived', 'will live'], why: 'Unit 5: mixed conditional.' },
        { q: 'She denied ___ the money.', o: ['taking', 'to take', 'take'], why: 'Unit 6: *deny* + -ing.' },
        { q: 'He ___ have seen us: he didn’t say hello.', o: ['can’t', 'must', 'should'], why: 'Unit 7: sure it was not true.' },
      ] },
    ] },
    { title: 'Written test: fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'The man [which] lives next door is a pilot.', a: ['who', 'that'], why: 'Unit 8: people take *who* or *that*.' },
        { s: 'Take an umbrella in case it [will rain].', a: ['rains'], why: 'Unit 9: *in case* + present.' },
        { s: 'I remember [to meet] her at a party years ago.', a: ['meeting'], why: 'Unit 10: *remember doing* for a past memory.' },
        { s: 'I asked my two sisters, but [none] of them knew the answer.', a: ['neither'], why: 'Unit 11: for two people, *neither*.' },
        { s: 'You [should have tell] me earlier.', a: ['should have told'], why: 'Unit 12: *should have* + past participle.' },
        { s: 'What I need [are] more time.', a: ['is'], why: 'Unit 13: the *what* clause takes a singular verb.' },
        { s: 'The rules don’t let us [to use] phones.', a: ['use'], why: 'Unit 14: *let someone do*, without *to*.' },
      ] },
    ] },
    { title: 'Written test: transformations', blocks: [
      { t: 'ex', kind: 'transform', h: 'Use the word given; two to five words.', items: [
        { q: 'I have never been so nervous.', cue: 'NEVER', a: ['Never have I been so nervous.'], why: 'Unit 15: inversion after *Never*.' },
        { q: 'It wasn’t necessary for her to come.', cue: 'NEED', a: ['She didn’t need to come.', 'She did not need to come.', 'She needn’t have come.'], why: 'Unit 10: *didn’t need to*.' },
        { q: 'They are repairing my car.', cue: 'HAVING', a: ['I am having my car repaired.', 'I’m having my car repaired.'], why: 'Unit 4: *have something done*.' },
        { q: 'I regret not studying medicine.', cue: 'WISH', a: ['I wish I had studied medicine.'], why: 'Unit 5: *wish* + past perfect.' },
        { q: 'The film was good, but the ending was weak.', cue: 'ALTHOUGH', a: ['Although the film was good, the ending was weak.'], why: 'Unit 14: concession.' },
        { q: 'Immediately after we left, it started to rain.', cue: 'SOONER', a: ['No sooner had we left than it started to rain.'], why: 'Unit 15: *No sooner had… than*.' },
        { q: 'You must use the key word without changing it.', cue: 'CHANGE', a: ['You must not change the key word.', 'You mustn’t change the key word.'], why: 'Unit 16: the Part 4 rule itself.' },
      ] },
    ] },
    { title: 'Speaking test', blocks: [
      { t: 'text', md: '**Questions (three minutes per student):** *Tell me about a decision that changed your life. What would you do differently if you could start again?* *Some people say technology makes us less creative. What do you think?* *Should governments do more to protect the environment, even if it costs people money?* **Criteria:** connected answers of four or five sentences; a range of B2 structures; clear pronunciation; errors that do not stop understanding.' },
      { t: 'tip', art: 'owl', md: 'This is Alimun’s level test for C1, not the Cambridge exam, but it uses the same kinds of tasks as B2 First. A result of about 70% plus confident speaking means you are ready for C1.' },
    ] },
  ],
  activities: {
    one: { title: 'One to one test', md: 'Do the written test with the student, then a longer speaking test of about eight minutes using all three questions and one follow-up each. Give the result at the end, privately, with the plan for C1 or the re-test.' },
    small: { title: 'Small group test', md: 'Students do the written test alone. For speaking, talk with each student for three minutes while the others review their answers. Give each result privately by message after the class.' },
    group: { title: 'Large group test', md: 'Students do the written test alone with "Everyone solves this". For speaking, invite students one by one into a breakout room for three minutes while the others review. Send each result privately after the class.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8 u9 u10 u11 u12 u13 u14 u15 u16', md: 'Ready for C1: read the C1 welcome information and revise any unit your teacher named. Not ready yet: revise the units your teacher named, redo their unit tests in the book, and prepare for the re-test in two weeks.' },
};
