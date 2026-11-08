// English B2, class 16 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c16',
  focus: 'By the end of the class every student can say that someone else does a job for them with **have something done** and **get something done** in different tenses (*I had my hair cut*, *We’re getting the roof repaired*), and can use the same pattern for something bad that happened to them (*She had her bag stolen*). Accuracy point: the object comes before the past participle.',
  tips: [
    'The most common mistake is the word order: *I had cut my hair* means you did it yourself. Draw three boxes on the board: **have** / **object** / **past participle**, and fill them every time.',
    'Learners often think *get something done* is wrong or slang. Explain that it is a little more informal and common in speech, and that both are fine in the exam.',
    'The tense goes on **have** or **get**, never on the participle: *I’m going to have my eyes tested*, *She has had her car serviced*. Practise one sentence in five tenses.',
    'The “bad experience” meaning (*He had his phone stolen*) surprises many learners. Give it its own example on the board so it is not mistaken for a service.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Who cuts your hair? Who repairs your car or your bike? Did you paint your flat yourself?* Write one student answer on the board and rephrase it: *I have my hair cut every month.*' },
    { min: 12, title: 'The pattern', md: 'Show board page 1. Build the pattern in boxes, then go through the tenses. Students make one sentence each about a service they used recently.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students do the word-order exercise alone, then fix the mistakes together on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: a multiple-choice cloze in the format of B2 First Reading and Use of English Part 1. Read the text aloud once, then students choose. Discuss why the wrong options do not fit the collocation.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they need to have done this month. Set the homework.' },
  ],
  board: [
    { title: 'Have or get something done', blocks: [
      { t: 'table', caption: 'have / get + object + past participle', explain: ['head'], head: ['Tense', 'Example'], rows: [
        ['present simple', 'I have my car serviced every year.'],
        ['present continuous', 'We’re getting the kitchen painted this week.'],
        ['past simple', 'She had her eyes tested last month.'],
        ['present perfect', 'They’ve just had the roof repaired.'],
        ['going to', 'I’m going to get my hair cut on Friday.'],
        ['modal', 'You should have that tooth checked.'],
      ] },
      { t: 'text', md: 'The same pattern describes something bad that someone did to you: *He **had his phone stolen** on the train.* The tense always goes on **have** or **get**.' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'We are having the windows cleaned tomorrow.', why: '*having* + object + past participle.' },
        { a: 'She has just had her passport renewed.', why: 'Present perfect on *have*; object before *renewed*.' },
        { a: 'I need to get my laptop fixed.', why: '*get* + object + past participle.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'I [had cut my hair] yesterday at the new place.', a: ['had my hair cut'], why: 'The object comes before the past participle.' },
        { s: 'Tom had [stolen his wallet] on holiday.', a: ['his wallet stolen'], why: 'Something bad done to Tom: *had his wallet stolen*.' },
        { s: 'We’re going to have [repaired the car] next week.', a: ['the car repaired'], why: 'Object before the past participle.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 1', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 1: read the text and choose the word that best fits each gap.\n\n*Last spring we finally decided to have our old house completely (1) ___. We (2) ___ the work done by a local company, and they (3) ___ a very good job. The only problem was that we had to (4) ___ with the noise for six weeks.*' },
      { t: 'ex', kind: 'select', h: 'Choose the best word for each gap.', items: [
        { q: 'We decided to have our old house completely ___.', o: ['renovated', 'renewed', 'refreshed'], why: 'You *renovate* a building; you *renew* a passport.' },
        { q: 'We ___ the work done by a local company.', o: ['had', 'made', 'let'], why: '*have something done*.' },
        { q: 'They ___ a very good job.', o: ['did', 'made', 'had'], why: 'The collocation is *do a good job*.' },
        { q: 'We had to put ___ with the noise for six weeks.', o: ['up', 'on', 'off'], why: '*put up with* = accept something unpleasant.' },
      ] },
      { t: 'tip', md: 'In Part 1 all four options usually have a similar meaning. The answer depends on **collocation** and **grammar**: which word goes with the words around the gap? Read the whole sentence, not just the gap.' },
    ] },
  ],
  activities: {
    one: { title: 'The busy week', md: 'Give the student a diary with five jobs (car service, haircut, boiler check, suit cleaned, photos printed). The student explains their week: *On Monday I’m having the car serviced…* Then ask questions in other tenses (*Have you had the boiler checked yet? When did you last have your eyes tested?*). Correct the word order every time.' },
    small: { title: 'Bad luck stories', md: 'Each student tells a short true or invented story of something bad done to them (*I had my bike stolen*, *We had our flight cancelled*). The others ask two follow-up questions. At the end, each student writes their best sentence in the chat and the group checks the word order.' },
    group: { title: 'The renovation plan', md: 'Breakout rooms of three or four: each room has a budget to improve an old flat. They decide five things to have done and who will do them, and write the plan in the chat (*We’ll have the walls painted…*). Back together, rooms compare plans and vote on the most sensible one.' },
  },
  homework: { book: 'u4:p2', md: 'Finish book lesson 2 of unit 4 (I had my phone repaired), including the speaking task. Then write six sentences about things you have done for you, in six different tenses, and one sentence about something bad that happened to you or someone you know.' },
};
