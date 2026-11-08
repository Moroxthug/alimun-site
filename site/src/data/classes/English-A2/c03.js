// English A2, class 3 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c03',
  focus: 'By the end every student can say what is happening now and these days with the present continuous, and choose between the two present tenses (*I work in a bank* / *I’m working from home this week*). They also avoid *-ing* with state verbs such as *want, like, know, understand*.',
  tips: [
    'Students often forget *be*: *She working now*. Point to the missing word rather than saying the whole sentence.',
    'Time words help: *now, at the moment, today, this week* usually mean the present continuous; *every day, usually, often* mean the present simple.',
    'State verbs (*want, like, love, know, understand, need*) are a common trap: *I’m wanting* is wrong. Keep a short list on the board.',
    'Use the students’ real situation: what they are doing these days (a course, a new job, a move) makes the difference clear.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What are you doing right now? What are you doing these days that is new?*' },
    { min: 10, title: 'Happening now', md: 'Show board page 1. Students complete the sentences, then make three sentences about people in their home right now.' },
    { min: 10, title: 'Usual or now?', md: 'Show board page 2. Students choose the tense and say why, using the time words.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: choose the word, in the format of A2 Key Reading Part 4.' },
    { min: 10, title: 'Mistakes and close', md: 'Write two mistakes you heard. Students fix them. Set the homework.' },
  ],
  board: [
    { title: 'Happening now', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write the present continuous.', items: [
        { q: 'Shh! The baby ___ (sleep).', a: ['is sleeping', '’s sleeping'], why: '*be* + *-ing*: *is sleeping*.' },
        { q: 'We ___ (not / work) today. It’s a holiday.', a: ['aren’t working', 'are not working', '’re not working'], why: 'Negative: *aren’t* + *-ing*.' },
        { q: '___ you waiting for the bus?', a: ['Are'], why: 'Question: *be* first: *Are you waiting…?*' },
        { q: 'They ___ (sit) in the garden.', a: ['are sitting', '’re sitting'], why: '*sit* doubles the *t*: *sitting*.' },
      ] },
    ] },
    { title: 'Usual or now?', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
        { q: 'I usually ___ to work, but today I’m taking the bus.', o: ['walk', 'am walking', 'walking'], why: '*usually*: present simple.' },
        { q: 'Look! It ___ .', o: ['’s snowing', 'snows', 'snow'], why: '*Look!*: happening now.' },
        { q: 'I ___ what you mean.', o: ['understand', 'am understanding', 'understanding'], why: '*understand* is a state verb: no *-ing*.' },
        { q: 'She ___ in Paris this month for her job.', o: ['is staying', 'stays', 'stay'], why: '*this month*: a short time, present continuous.' },
      ] },
    ] },
    { title: 'Exam corner: choose the word', blocks: [
      { t: 'reading', title: 'A message from Rosa', md: 'Hi Jo, thanks for your email. I’m sorry I can’t call you this week. I ___ for my exams at the moment, so I ___ to the library every day after work. Talk soon!' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 4): choose the right word for each gap.', items: [
        { q: 'I ___ for my exams at the moment.', o: ['’m studying', 'study', 'studies'], why: '*at the moment*: present continuous.' },
        { q: 'I ___ to the library every day after work.', o: ['go', '’m go', 'goes'], why: '*every day*: present simple with *I*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 4, look for time words near the gap: *at the moment, now, today* or *every day, usually*. They often tell you which tense is right.' },
    ] },
  ],
  activities: {
    one: { title: 'Two photos', md: 'Ask the student to describe two photos on their phone (or two scenes you describe): what usually happens in that place, and what is happening in the photo. Then swap. Correct the missing *be* each time.' },
    small: { title: 'What’s different this week?', md: 'Each student says three things they usually do and three things they are doing differently this week (*I usually drive, but this week I’m cycling because my car is at the garage*). The others ask one question each.' },
    group: { title: 'Mime and guess', md: 'In breakout rooms, one student mimes an action and the others guess with the present continuous (*Are you cooking? You’re playing the guitar!*). The student who guesses mimes next. Back in the main room, each room mimes its best one for the class.' },
  },
  homework: { book: 'u1:p3', md: 'Do lesson 3 of unit 1 (What are they like?). Write five sentences: three about what you usually do on Sundays, two about what you are doing this week that is different.' },
};
