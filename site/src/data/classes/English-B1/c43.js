// English B1, class 43 (docs/LESSONS_PLAN.md). Builds on book lesson u9:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c43',
  focus: 'By the end of the class every student can tell a short story in the past with clear time words: *when*, *as soon as*, *by the time*, *after*, *then*, *in the end*. They use *as soon as* for something that happens immediately after, *by the time* with the past perfect, and *in the end* (not *at the end*) for the final result. Every student tells one story of six to eight sentences aloud.',
  tips: [
    'The most common confusion is **in the end** (finally, after problems) and **at the end** (at the last point of something: *at the end of the film*). Give a pair of examples on the board and come back to it every time it appears.',
    'Learners often use **after** alone as an adverb (*After, we went home*). Teach **afterwards** or **after that** for the adverb.',
    '**By the time** usually needs the past perfect in the other clause: *By the time we arrived, the train had left.* Draw a short timeline if students hesitate.',
    'Keep the stories short and personal. A real story about a late train or a lost key works better than an invented adventure.',
  ],
  plan: [
    {
      min: 5,
      title: 'Warm-up',
      md: 'Tell a four-sentence story about a bad morning with no time words. Ask students what is missing. Add the time words on the board as they suggest them.',
    },
    { min: 10, title: 'Time words', md: 'Board page 1. Go through the table; students make one sentence with each word about their own week.' },
    { min: 10, title: 'Practice', md: 'Board page 2. Students choose the right word alone, then compare in pairs and explain their choice.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Put it in order', md: 'Board page 3. Students order the story, then retell it without looking.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Reading Part 5 style.' },
    { min: 5, title: 'Close', md: 'Each student says one sentence with *in the end* about their day. Set the homework.' },
  ],
  board: [
    {
      title: 'Time words in a story',
      blocks: [
        {
          t: 'table',
          caption: 'Ordering events',
          explain: ['head', 'col1'],
          head: ['Word', 'What it does'],
          rows: [
            ['when', 'one moment in the story: *When I opened the door, the dog ran out.*'],
            ['as soon as', 'immediately after: *As soon as I got home, I called her.*'],
            ['by the time', 'before a moment, often with the past perfect: *By the time we arrived, the shop had closed.*'],
            ['after that / afterwards', 'the next step: *After that, we had dinner.*'],
            ['in the end', 'finally, after problems or changes: *In the end, we took a taxi.*'],
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: '**At the end** is a place in time: *at the end of the film, at the end of May*. **In the end** means *finally*. Do not say *at the end we took a taxi*.',
        },
      ],
    },
    {
      title: 'Choose the word',
      blocks: [
        {
          t: 'ex',
          kind: 'select',
          h: 'Choose the right words.',
          items: [
            { q: '___ I heard the news, I phoned my brother.', o: ['As soon as', 'By the time', 'In the end'], why: 'Immediately after hearing the news: *as soon as*.' },
            {
              q: '___ the police came, the thief had gone.',
              o: ['By the time', 'As soon as', 'After that'],
              why: 'Before the police came, with the past perfect: *by the time*.',
            },
            { q: 'We waited for an hour. ___, we went home.', o: ['In the end', 'At the end', 'By the time'], why: 'Finally, after a problem: *in the end*.' },
            { q: 'I fell asleep ___ the film.', o: ['at the end of', 'in the end of', 'by the time of'], why: 'A point in something: *at the end of*.' },
          ],
        },
      ],
    },
    {
      title: 'Put the story in order',
      blocks: [
        {
          t: 'ex',
          kind: 'order',
          h: 'Put the words in order.',
          items: [
            { a: 'As soon as the plane landed, I turned on my phone.', why: '*As soon as* + first action, then the result.' },
            { a: 'By the time I got to the gate, everyone had left.', why: '*By the time* + past simple, then the past perfect.' },
            { a: 'In the end, a kind woman helped me find my bag.', why: '*In the end* opens the final result.' },
          ],
        },
      ],
    },
    {
      title: 'Exam corner: Reading Part 5',
      blocks: [
        {
          t: 'reading',
          title: 'A short story',
          md: 'Last summer I missed my train. I ran to the station, but (1) ___ the time I got there, it had left. I sat down to wait for the next one, and (2) ___ I started reading my book. (3) ___ the end, I arrived two hours late, but I had finished a whole book.',
        },
        {
          t: 'ex',
          kind: 'choice',
          h: 'In the format of B1 Preliminary Reading Part 5: choose the right word for each gap.',
          items: [
            { q: '(1) ___ the time I got there', o: ['by', 'in', 'on'], why: '*by the time* is a fixed phrase.' },
            { q: '(2) and ___ I started reading', o: ['then', 'until', 'since'], why: 'The next step: *then*.' },
            { q: '(3) ___ the end, I arrived', o: ['In', 'At', 'On'], why: 'Finally, after a problem: *in the end*.' },
          ],
        },
        {
          t: 'tip',
          art: 'owl',
          md: 'In Reading Part 5 many gaps are part of a **fixed phrase**. Read the words on both sides of the gap: *by the time*, *in the end*.',
        },
      ],
    },
  ],
  activities: {
    one: {
      title: 'My worst journey',
      md: 'The student tells you about a difficult journey in six to eight sentences, using at least four time words from board page 1. Ask follow-up questions (*What did you do as soon as…? What had happened by the time…?*). Then retell their story back with one mistake for them to catch.',
    },
    small: {
      title: 'Story chain',
      md: 'Give the first sentence: *Last Saturday I left the house without my keys.* Students continue the story one sentence each; every sentence must begin with a different time word. The last student must use *in the end*. Play twice with different first sentences.',
    },
    group: {
      title: 'Three-picture stories',
      md: 'In breakout rooms of three, put three simple situations in the chat (a missed bus, a phone with no battery, a surprise visitor). Each room makes a story of eight sentences with five time words and writes it in the chat. Back together, the class votes for the best story; correct time words together.',
    },
  },
  homework: {
    book: 'u9:p3',
    md: 'Finish book lesson 3 of unit 9. Then write a story of about 80 words about a day when something went wrong, using *as soon as*, *by the time* and *in the end*.',
  },
};
