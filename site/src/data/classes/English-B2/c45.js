// English B2, class 45 (docs/LESSONS_PLAN.md). Builds on book lesson u10:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c45',
  focus: 'By the end of the class every student can choose between **-ing** and **to** after *remember, forget, try, stop, regret* and *mean*, and explain the change in meaning (*I remember locking the door* = a memory; *Remember to lock the door* = a duty). Students use both forms correctly when talking about their own learning experiences.',
  tips: [
    'The simplest rule to give: **to** looks forward (the action comes after), **-ing** looks back (the action came before). Draw a time line on the board and keep it there.',
    'Learners often confuse *stop to do* (stop in order to do) and *stop doing* (no longer do). Act it out: walk, stop, then drink water.',
    '*Try to do* = make an effort; *try doing* = experiment to see if it helps. Use a problem: *My laptop is slow. Try restarting it.*',
    '*Regret to tell you* is formal and used for bad news; students rarely need it in speech, but it appears in B2 First letters and transformations.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is your earliest memory of school?* Write one student answer as *I remember …ing*.' },
    { min: 12, title: 'The meaning change', md: 'Board page 1. Draw the time line; go through the table pair by pair with the examples.' },
    { min: 10, title: 'Practice', md: 'Board page 2. The class solves the exercise; students explain each choice using the time line.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Board page 3: Use of English Part 4 transformations with these verbs. Students work alone, then compare.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they must remember to do this week and one thing they remember doing as a child. Set the homework.' },
  ],
  board: [
    { title: 'To or -ing: the meaning changes', blocks: [
      { t: 'table', caption: 'Verb + to or -ing', explain: ['head', 'col2'], head: ['Verb', 'Example', 'Meaning'], rows: [
        ['remember', 'I remember meeting her. / Remember to call her.', 'a memory (before) / a duty (after)'],
        ['forget', 'I’ll never forget seeing the sea. / Don’t forget to pay.', 'a memory / something you must do'],
        ['try', 'Try drinking water. / I tried to lift it, but I couldn’t.', 'an experiment / an effort'],
        ['stop', 'He stopped smoking. / He stopped to buy a coffee.', 'no longer do / stop in order to do'],
        ['regret', 'I regret leaving early. / We regret to inform you…', 'sorry about the past / formal bad news'],
        ['mean', 'Moving means changing schools. / I meant to call you.', 'involves / intended'],
      ] },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
        { q: 'I clearly remember ___ my first English lesson.', o: ['having', 'to have'], why: 'A memory of the past: *remember* + -ing.' },
        { q: 'Please remember ___ your homework on Friday.', o: ['to bring', 'bringing'], why: 'A duty in the future: *remember* + to.' },
        { q: 'If you can’t sleep, try ___ a book instead of looking at your phone.', o: ['reading', 'to read'], why: 'An experiment to see if it helps: *try* + -ing.' },
        { q: 'On the way home we stopped ___ some bread.', o: ['to buy', 'buying'], why: 'Stop in order to do something: *stop* + to.' },
        { q: 'I regret not ___ harder at school.', o: ['studying', 'to study'], why: 'Sorry about the past: *regret* + -ing.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 4', blocks: [
      { t: 'tip', art: 'owl', md: 'In Part 4 you must use the key word **without changing it** and write two to five words. Check the meaning stays the same: *I wish I had…* often becomes *regret not doing*.' },
      { t: 'ex', kind: 'transform', h: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence using the word given.', items: [
        { q: 'I’m sorry I didn’t take the job. REGRET', cue: 'I', a: ['I regret not taking the job.', 'I regret not having taken the job.'], why: '*Regret* + not + -ing for a past action you are sorry about.' },
        { q: 'Don’t forget to lock the door. REMEMBER', cue: 'Remember', a: ['Remember to lock the door.'], why: 'A duty: *remember* + to.' },
        { q: 'He doesn’t eat meat any more. STOPPED', cue: 'He', a: ['He has stopped eating meat.', 'He stopped eating meat.'], why: '*Stop* + -ing = no longer do.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Learning memories', md: 'Ask the student about their best and worst learning experiences. They must use *remember …ing*, *never forget …ing* and *regret (not) …ing* at least once each. Then plan their next month of English together with *try to*, *remember to* and *mean to*.' },
    small: { title: 'Advice circle', md: 'Each student describes a learning problem (*I forget new words*). The others give advice with *Try …ing* and *Remember to…*. The student chooses the best piece of advice and says why. Rotate until everyone has had a turn.' },
    group: { title: 'Two truths, one lie', md: 'In breakout rooms of three, each student says three sentences about their past or plans using the verbs from the table, one of them false. The others ask questions and guess the lie. Back together, each room shares its most surprising true sentence.' },
  },
  homework: { book: 'u10:p1', md: 'Finish book lesson 1 of unit 10. Then write six sentences about yourself, one for each verb in the table, using the form that fits.' },
};
