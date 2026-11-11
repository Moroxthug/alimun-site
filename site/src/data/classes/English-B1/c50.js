// English B1, class 50 (docs/LESSONS_PLAN.md). Exam practice: B1 Preliminary Writing, with the language of units 9 and 10. Draft for the owner's review.
export const LESSON = {
  id: 'c50',
  focus: 'Exam practice in the format of B1 Preliminary Writing. By the end of the class every student knows the two parts of the paper (Part 1: an email of about 100 words answering four notes; Part 2: an article or a story of about 100 words), has planned and written one Part 1 email in class, and can check their own writing with the simple marking criteria: content, communication, organisation and language.',
  tips: [
    'In Part 1 the most common way to lose marks is **missing one of the four notes**. Teach students to tick each note in their plan before they write.',
    'Students often copy whole phrases from the email they answer. Show them how to answer the same idea in their own words.',
    'Keep to about 100 words. Under 80 usually means a note is missing; over 140 usually means mistakes and no time to check.',
    'Mark kindly with the four criteria on the board, one strength and one thing to improve for each. Students learn the criteria best by using them on each other’s work.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you know about the B1 Preliminary Writing paper?* Show board page 1.' },
    { min: 10, title: 'The paper and the criteria', md: 'Board page 1. Go through both parts and the four criteria.' },
    { min: 10, title: 'Part 1 email: plan', md: 'Board page 2. Read the email and the notes; students plan an answer that covers all four notes.' },
    {
      min: 20,
      title: 'Activity: write and mark',
      md: 'Use the activity for your class size below. Students write the email in fifteen minutes, then mark with the criteria.',
    },
    { min: 10, title: 'Part 2 choice', md: 'Board page 3. Students choose the article or the story and plan it in three minutes; it becomes homework.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they will check in every email. Set the homework.' },
  ],
  board: [
    {
      title: 'The Writing paper',
      blocks: [
        {
          t: 'table',
          caption: 'B1 Preliminary Writing',
          explain: ['head', 'col1', 'col2'],
          head: ['Part', 'Task', 'Length'],
          rows: [
            ['Part 1', 'an email answering another email, with four notes to cover', 'about 100 words'],
            ['Part 2', 'an article or a story (you choose one)', 'about 100 words'],
          ],
        },
        {
          t: 'table',
          caption: 'How it is marked',
          explain: ['head', 'col1'],
          head: ['Criterion', 'The examiner asks'],
          rows: [
            ['Content', 'Did you answer every part of the task?'],
            ['Communication', 'Is the style right for the reader (friendly email, interesting article)?'],
            ['Organisation', 'Is it easy to follow, with linking words and paragraphs?'],
            ['Language', 'Are there a range of words and structures, mostly correct?'],
          ],
        },
      ],
    },
    {
      title: 'Part 1: the email',
      blocks: [
        {
          t: 'reading',
          title: 'Email from your English friend, Lucy',
          md: 'Hi! I’m writing a project about how young people use technology. Could you help me? **What do you use your phone for most?** (note: *tell Lucy*) **Is there any technology you couldn’t live without?** (note: *explain why*) **Do you think people spend too much time online?** (note: *give your opinion*) **Can we video-call next week?** (note: *suggest a day*) Thanks! Lucy',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'Which plan covers all four notes?',
          items: [
            {
              q: '',
              o: [
                'Phone for messages and maps; can’t live without my laptop because of work; yes, too much time on social media; Thursday evening is good',
                'Phone for messages; my favourite app; I love technology; see you soon',
                'My laptop is old; I want a new phone; technology is expensive; thanks for writing',
              ],
              why: 'Only the first plan answers all four notes: use, can’t live without + why, opinion, a day.',
            },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'Before you write, **number the four notes** in your plan. When you finish, tick each one in your email. A missing note costs more than a small grammar mistake.',
        },
      ],
    },
    {
      title: 'Part 2: article or story',
      blocks: [
        {
          t: 'text',
          md: '**Article.** *Articles wanted! A gadget I love. What is it? Why is it important to you? Would you recommend it to other people?* Write your article in about 100 words.\n\n**Story.** *Your story must begin with this sentence:* **As soon as I switched on my computer, I knew something was wrong.** Write your story in about 100 words.',
        },
        {
          t: 'ex',
          kind: 'select',
          h: 'Choose the best phrase for each part.',
          items: [
            {
              q: 'A good opening for the article: ___',
              o: ['Have you ever wondered how you lived without it?', 'I am writing to tell you about a gadget.', 'Dear Sir or Madam,'],
              why: 'An article talks to the reader and catches interest; it is not a letter.',
            },
            {
              q: 'A good ending for the story: ___',
              o: ['In the end, I was glad it had happened.', 'That is all for my article.', 'Write back soon!'],
              why: 'A story needs a clear ending; the others belong to other text types.',
            },
          ],
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Timed email',
      md: 'The student plans (three minutes) and writes the Part 1 email to Lucy (fifteen minutes) while you wait. Mark it together with the four criteria; the student finds one improvement for each. Then they rewrite the weakest paragraph.',
    },
    small: {
      title: 'Write, swap, mark',
      md: 'Each student writes the Part 1 email in fifteen minutes. Swap with a partner, who ticks the four notes and gives one comment for each criterion. Writers correct their emails with the comments.',
    },
    group: {
      title: 'Examiners for a day',
      md: 'Everyone writes the email (fifteen minutes). In breakout rooms of three, students read each other’s emails and decide together which one covers the notes best and why. Back together, each room shares one strong sentence and one common mistake; build a checklist sentence on the board.',
    },
  },
  homework: {
    book: 'u9 u10',
    md: 'Write the Part 2 task you planned in class (article or story, about 100 words). Check it with the four criteria before you hand it in. If you have time, write the other one too.',
  },
};
