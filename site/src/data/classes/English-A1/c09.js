// English A1, class 9 (docs/LESSONS_PLAN.md). Builds on book lesson u2:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c09',
  focus: 'By the end of the class every student can say what they and other people have got with **have got / has got**, make negatives and questions (*I haven’t got … Have you got …? Yes, I have.*), and describe people and things with simple adjectives before the noun (*a big house, long hair*). Students should ask each other many *Have you got …?* questions.',
  tips: [
    'The main mistake is *She have got*. Write **he / she / it → has got** in a corner of the board and point to it.',
    'In questions, learners often say *Do you have got …?* Show that *have* moves to the front: **Have you got …?**',
    'Adjectives come **before** the noun and never take *-s*: *a red car*, *two red cars*. Speakers of Spanish, French, Italian, Portuguese and Arabic often put them after, or add *-s*.',
    'Tell students that *have got* is very common in British English and that *have* alone (*I have a car*) is also correct; they will learn it later.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell the class three things you have got and one thing you haven’t got (*I’ve got a cat. I haven’t got a car.*). Students repeat with their own information.' },
    { min: 10, title: 'have got and has got', md: 'Show board page 1. Build the table with students’ examples. Do the gap exercise on the board.' },
    { min: 10, title: 'Questions and short answers', md: 'Show board page 2. Students ask you questions with *Have you got …?* Then the order exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Describing people and things', md: 'Show board page 3. Describe a person in the class (without the name); students guess who. Then the fix exercise.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4.' },
    { min: 5, title: 'Close', md: 'Each student asks the next one a *Have you got …?* question. Set the homework.' },
  ],
  board: [
    { title: 'have got and has got', blocks: [
      { t: 'table', caption: 'have got', explain: ['head'], head: ['', 'Positive', 'Negative'], rows: [
        ['I / you / we / they', 'have got (’ve got)', 'haven’t got'],
        ['he / she / it', 'has got (’s got)', 'hasn’t got'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write have got, has got, haven’t got or hasn’t got.', items: [
        { q: 'My brother ___ a new bike. (+)', a: ['has got', '’s got'], why: 'One person, positive: *has got*.' },
        { q: 'We ___ a garden. (–)', a: ['haven’t got', 'have not got'], why: '*we* + negative: *haven’t got*.' },
        { q: 'Ana ___ two cats. (+)', a: ['has got', '’s got'], why: '*she*: *has got*.' },
        { q: 'I ___ a car. (–)', a: ['haven’t got', 'have not got'], why: '*I* + negative: *haven’t got*.' },
      ] },
    ] },
    { title: 'Have you got …?', blocks: [
      { t: 'examples', items: [
        { s: '**Have you got** a pet? – **Yes, I have.**', n: '*have* goes first in the question.' },
        { s: '**Has she got** a brother? – **No, she hasn’t.**', n: 'With *she*: *has*.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'Have you got a pen?', why: '*Have* + subject + *got*.' },
        { a: 'Has your sister got children?', why: '*Has* + subject + *got*.' },
        { a: 'They haven’t got a dog.', why: 'Subject + *haven’t got*.' },
      ] },
    ] },
    { title: 'Describing people and things', blocks: [
      { t: 'text', md: 'Adjectives go **before** the noun and never change: **a big house**, **two big houses**. With *be*, they go after: *The house is big.*' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She has got [hair long].', a: ['long hair'], why: 'The adjective goes before the noun.' },
        { s: 'They are [news] cars.', a: ['new'], why: 'Adjectives never take *-s*.' },
        { s: 'My dad [have] got a beard.', a: ['has'], why: 'With *he*: *has got*.' },
      ] },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Have you got a brother or a sister?”', o: ['Yes, I’ve got one sister.', 'Yes, I am.', 'Yes, I do got.'], why: 'Answer with *have got*.' },
        { q: '“Has your flat got a garden?”', o: ['No, it hasn’t.', 'No, it isn’t.', 'No, it haven’t.'], why: 'Short answer with *has*: *No, it hasn’t.*' },
        { q: '“What’s your new teacher like?”', o: ['She’s got short hair and she’s very nice.', 'She’s got a teacher.', 'Yes, she is.'], why: 'A description answers *What … like?*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Guess my things', md: 'Think of five things you have got at home. The student guesses with *Have you got a …?* and you answer with short answers. Then swap. Finish with the student describing one person they know with *has got* and two adjectives (*She’s got long dark hair*).' },
    small: { title: 'Survey', md: 'Each student writes three *Have you got …?* questions in the chat (a car, a pet, a bike, a garden, a big family). They ask everyone and count the *yes* answers. Report with *has got* and *haven’t got*: *Two people have got a pet. Kemal hasn’t got a car.*' },
    group: { title: 'Who is it?', md: 'Breakout rooms of four: each student describes a famous person with *has got* and adjectives (*He’s got short grey hair and blue eyes*); the others guess. Each room chooses its best description and reads it to the class in the main room.' },
  },
  homework: { book: 'u2:p3', md: 'Do book lesson 3 of unit 2 (I have got a brother). Then write five sentences about what you and your family have got and haven’t got, with one adjective in each.' },
};
