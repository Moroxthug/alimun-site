// English A2, class 43 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c43',
  focus: 'By the end of the class every student can ask and answer about life experiences with the present perfect: *Have you ever been to…? Yes, I have. / No, I’ve never…*, form the past participles of the most common verbs, and add one detail in the past simple (*I went there in 2019*). The class is built around real questions about the students’ lives.',
  tips: [
    'The present perfect does not exist in the same way in many languages. Keep the meaning simple: **an experience at some time in your life, when is not important**.',
    'Students mix *ever* and *never*: *Have you never…?* is possible but rare. Practise *ever* in questions and *never* in answers.',
    'Past participles are the hardest part: *been, seen, eaten, done, gone, written, flown*. Drill ten of them in a quick chain.',
    'Do not use the present perfect with a finished time: *I have been to Rome in 2019* is wrong. This is the main point of the next class, so only mention it today.',
    'Short answers: **Yes, I have. / No, I haven’t.** Students often answer *Yes, I did.* Correct it gently.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say three experiences, one false: *I’ve eaten snake. I’ve flown a plane. I’ve never seen snow.* Students guess the false one. Write *I’ve eaten* on the board.' },
    { min: 10, title: 'Have you ever…?', md: 'Show board page 1. Go through the form, then students complete the exercise with past participles.' },
    { min: 10, title: 'Ever and never', md: 'Show board page 2. Students order the questions and answers, then ask a partner two of them.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3. Students choose the best reply to each question.' },
    { min: 10, title: 'Close', md: 'Each student says one thing they have never done and would like to do. Set the homework.' },
  ],
  board: [
    { title: 'Experiences', blocks: [
      { t: 'text', md: 'Use **have/has + past participle** for things in your life, when the exact time is not important: *I **have visited** Paris. She **has never eaten** sushi.* To ask, use **ever**: *Have you **ever** been to Japan?*' },
      { t: 'ex', kind: 'gap', h: 'Write the past participle.', items: [
        { q: 'Have you ever ___ (see) a famous person?', a: ['seen'], why: '*see – saw – seen*.' },
        { q: 'I’ve never ___ (eat) Indian food.', a: ['eaten'], why: '*eat – ate – eaten*.' },
        { q: 'She has ___ (fly) to Canada three times.', a: ['flown'], why: '*fly – flew – flown*.' },
        { q: 'Have they ever ___ (write) a poem?', a: ['written'], why: '*write – wrote – written*.' },
      ] },
    ] },
    { title: 'Questions and answers', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'Have you ever lost your passport?', why: '*Have* + subject + *ever* + past participle.' },
        { a: 'No, I have never lost it.', why: '*never* goes before the past participle.' },
        { a: 'Has your brother ever been to London?', why: 'With *he*: *Has*.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right answer.', items: [
        { q: '“Have you ever ridden a horse?” – “Yes, I ___.”', o: ['have', 'did', 'am'], why: 'Short answer: *Yes, I have.*' },
        { q: '“Has she ever been to Spain?” – “No, she ___.”', o: ['hasn’t', 'didn’t', 'haven’t'], why: 'With *she*: *hasn’t*.' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Have you ever been to Scotland?”', o: ['Yes, I went there last year.', 'Yes, I go there.', 'I’m going there.'], why: 'An experience, then a detail in the past simple.' },
        { q: '“I’ve never seen the sea.”', o: ['Really? You should go!', 'Yes, I have.', 'It was blue.'], why: 'React to news with *Really?*' },
        { q: '“Has Tom finished his homework?”', o: ['I don’t know. Ask him.', 'Yes, he did.', 'He finishes at six.'], why: 'The others do not answer a present perfect question.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Life list', md: 'Ask the student ten *Have you ever…?* questions (been on TV, broken a bone, met a famous person, cooked for ten people). For every *yes*, ask one follow-up in the past simple: *When? Where? What happened?* Then the student interviews you.' },
    small: { title: 'Find someone who', md: 'Write eight experiences in the chat (*…has flown in a helicopter*, *…has never drunk coffee*). Students ask each other *Have you ever…?* and find a name for each. The first to finish reports with full sentences: *Sara has never drunk coffee.*' },
    group: { title: 'Never have I ever', md: 'In breakout rooms of four, each student says *I’ve never…* with something they think the others have done. Anyone who *has* done it says *I have!* and tells when, in the past simple. Each room reports the most surprising experience.' },
  },
  homework: { book: 'u8:p2', md: 'Finish book lesson 2 of unit 8. Then write six sentences about your experiences: three with *I’ve…* and three with *I’ve never…*.' },
};
