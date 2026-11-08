// English B1, class 44 (docs/LESSONS_PLAN.md). Builds on book lesson u9:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c44',
  focus: 'By the end of the class every student can plan and write a short story of about 100 words as in B1 Preliminary Writing Part 2: it starts with the given first sentence, has a clear beginning, middle and end, uses past simple, past continuous and past perfect correctly, and includes time words and a few interesting adjectives. Each student leaves with a plan and a first draft.',
  tips: [
    'Students often write a story that does not follow from the first sentence they are given. Insist that the first sentence is copied exactly and the story continues from it.',
    'At B1, three tenses carry the story: **past simple** for events, **past continuous** for the background, **past perfect** for what happened before. Check each draft for all three.',
    'Many students stop at 60 words or go to 200. Teach them to plan three short paragraphs of three or four sentences each: that lands near 100 words.',
    'Show the marking criteria and use them kindly: content, organisation and language. Praise one thing before correcting one thing.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read the model story on board page 1 aloud. Ask: *What tenses do you see? Which words show the order of events?*' },
    { min: 10, title: 'What makes a good story', md: 'Board page 1 and 2. Go through the plan and the marking criteria.' },
    { min: 10, title: 'Language check', md: 'Board page 3. Students choose the right tense and fix the mistakes.' },
    { min: 20, title: 'Activity: plan and write', md: 'Use the activity for your class size below. Students plan with the three-part frame, then write.' },
    { min: 10, title: 'Exam corner', md: 'Board page 4: two first sentences in the exam style. Students choose one and plan it in two minutes.' },
    { min: 5, title: 'Close', md: 'Each student reads their last sentence aloud. Set the homework.' },
  ],
  board: [
    {
      title: 'A model story',
      blocks: [
        {
          t: 'reading',
          title: '"It was raining when I left the house."',
          md: 'It was raining when I left the house. I was walking quickly to the bus stop when I realised I had forgotten my umbrella. By the time I got back, I was completely wet.\n\nAs soon as I opened the door, I saw a letter on the floor. Someone had pushed it under the door that morning. It was from my old school friend, Marta.\n\nShe was in town for one day only. I changed my clothes and ran to meet her. In the end, the rain was the best thing that happened that day.',
        },
        {
          t: 'ex',
          kind: 'tf',
          h: 'Read the story. Are the sentences true or false?',
          items: [
            { q: 'The story starts with the given first sentence.', a: 't', why: 'The first sentence is copied exactly.' },
            { q: 'The writer found the letter before going out.', a: 'f', why: 'Someone *had pushed* it under the door, but the writer saw it only after coming back.' },
            { q: 'The story has a clear ending.', a: 't', why: '*In the end, the rain was the best thing…* closes the story.' },
          ],
        },
      ],
    },
    {
      title: 'Plan and marking',
      blocks: [
        {
          t: 'table',
          caption: 'A three-part plan',
          explain: ['head', 'col1'],
          head: ['Part', 'What to write'],
          rows: [
            ['Beginning', 'copy the first sentence and set the scene (where, when, who): past continuous for the background'],
            ['Middle', 'the problem or surprise: past simple, past perfect for what happened before'],
            ['End', 'how it finished and how you felt: *in the end*, *finally*'],
          ],
        },
        {
          t: 'table',
          caption: 'How the story is marked',
          explain: ['head', 'col1'],
          head: ['Criterion', 'The examiner asks'],
          rows: [
            ['Content', 'Does it follow from the first sentence? Is it a complete story?'],
            ['Organisation', 'Is the order clear, with time words and paragraphs?'],
            ['Language', 'Are the past tenses right? Are there some good words?'],
          ],
        },
      ],
    },
    {
      title: 'Language check',
      blocks: [
        {
          t: 'ex',
          kind: 'select',
          h: 'Choose the right form.',
          items: [
            { q: 'The sun ___ when we reached the beach.', o: ['was shining', 'had shone', 'shines'], why: 'Background to the story: past continuous.' },
            { q: 'I couldn’t pay because I ___ my wallet at home.', o: ['had left', 'was leaving', 'leave'], why: 'It happened before: past perfect.' },
            { q: 'Suddenly, the lights ___ off.', o: ['went', 'were going', 'had gone'], why: 'A single event in the story: past simple.' },
          ],
        },
        {
          t: 'ex',
          kind: 'fix',
          h: 'Find and fix the mistake.',
          items: [
            { s: 'While I [walked] home, I saw an old friend.', a: ['was walking'], why: '*While* + the longer background action: past continuous.' },
            { s: 'When I arrived, the film [already started].', a: ['had already started'], why: 'It started before I arrived: past perfect.' },
            { s: '[At the end], we found the hotel.', a: ['In the end'], why: 'Finally, after a problem: *in the end*.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Writing Part 2, the story',
      blocks: [
        {
          t: 'text',
          md: 'In B1 Preliminary Writing Part 2 you choose **an article or a story**. For the story you get the **first sentence**. Write **about 100 words**.\n\nTask A: *Your story must begin with this sentence:* **I opened the box and couldn’t believe my eyes.**\n\nTask B: *Your story must begin with this sentence:* **Nobody had told me that the shop was closed.**',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'In the format of B1 Preliminary Writing Part 2: which plan is better for Task A?',
          items: [
            {
              q: '',
              o: [
                'Who sent the box and why; what was inside; what happened next and how it ended',
                'A description of my favourite present when I was a child',
                'A list of things people often put in boxes',
              ],
              why: 'The story must continue from the first sentence and have a beginning, a middle and an end.',
            },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'Spend **two minutes planning** before you write: three parts, three or four sentences each. That gives you about 100 words and a clear ending.',
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'Write it together',
      md: 'The student chooses Task A or B. Plan together with the three-part frame (three minutes), then the student writes for twelve minutes while you wait. Mark it with the three criteria, one strength and one correction for each, and let them rewrite one paragraph.',
    },
    small: {
      title: 'Plan, swap, improve',
      md: 'Each student plans and writes a first draft (fifteen minutes). Swap drafts with a partner, who checks the three tenses and the time words and writes one question (*What happened next?*). Writers improve one paragraph with the feedback.',
    },
    group: {
      title: 'Story rooms',
      md: 'In breakout rooms of three, each room gets one first sentence in the chat and plans the story together (five minutes); then each student writes their own version (ten minutes). Back together, two volunteers read their stories; the class marks them with the criteria on board page 2.',
    },
  },
  homework: {
    book: 'u9:p4',
    md: 'Finish book lesson 4 of unit 9. Then write the story you did not choose in class (Task A or B), about 100 words, and check it with the three criteria before you hand it in.',
  },
};
