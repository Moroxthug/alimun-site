// English A2, class 25 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c25',
  focus: 'By the end of the class every student can talk about their plans and intentions with **be going to** (positive, negative, questions and short answers), and make a prediction from what they can see (*Look at those clouds. It’s going to rain.*). Every student should say at least five true sentences about their own plans.',
  tips: [
    'The most common mistake is leaving out *be*: *I going to work.* Write the full pattern on the board and point to *am / is / are* every time a student forgets it.',
    'Learners often add *-s* after *going to*: *She’s going to calls.* Remind them that the verb after *to* is always the base form.',
    'Spanish, French and Italian speakers have a very similar form (ir a, aller, andare a); use this as a bridge, but check the word order in questions: *Are you going to …?*',
    '*Gonna* is common in speech and songs. Accept it when students hear it, but ask them to write and say *going to* in class.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Tell the class two real plans for your weekend with *going to*. Ask: *What are you going to do this weekend?* Write two student answers on the board.' },
    { min: 10, title: 'The form', md: 'Board page 1. Elicit the rule from the table: *be* + *going to* + verb. Students complete the gaps on the board one by one, saying each sentence aloud.' },
    { min: 10, title: 'Questions and short answers', md: 'Board page 2. Students put the questions in order, then ask and answer them in a chain: each student asks the next one.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Predictions', md: 'Board page 3. Talk about the pictures in words (dark clouds, a glass at the edge of a table). Students make predictions: *It’s going to rain. It’s going to fall.* Then they fix the mistakes on the board.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Reading Part 5. Students write one word in each gap of the message, then check together.' },
    { min: 5, title: 'Close', md: 'Every student says one plan for next month. Set the homework.' },
  ],
  board: [
    { title: 'be going to', blocks: [
      { t: 'table', caption: 'Plans and intentions', explain: ['head'], head: ['', 'Positive', 'Negative'], rows: [
        ['I', 'I’m going to study.', 'I’m not going to study.'],
        ['he / she / it', 'She’s going to study.', 'She isn’t going to study.'],
        ['you / we / they', 'They’re going to study.', 'They aren’t going to study.'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write am, is or are.', items: [
        { q: 'I ___ going to visit my grandmother on Sunday.', a: ['am', '’m'], why: 'With *I*: *am*.' },
        { q: 'My brother ___ going to buy a new car.', a: ['is', '’s'], why: 'One person: *is*.' },
        { q: 'We ___ not going to eat out tonight.', a: ['are', '’re'], why: 'With *we*: *are*.' },
        { q: 'The children ___ going to start school next week.', a: ['are'], why: 'More than one person: *are*.' },
      ] },
    ] },
    { title: 'Are you going to …?', blocks: [
      { t: 'examples', items: [
        { s: '**Are you going to** cook tonight? – **Yes, I am.**', n: 'A yes or no question and a short answer.' },
        { s: '**Is she going to** come? – **No, she isn’t.**', n: 'A negative short answer.' },
        { s: '**What are you going to** do after the class?', n: 'Question word first, then *be*.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
        { a: 'What are you going to do tomorrow?', why: 'Question word, *be*, subject, *going to*, verb.' },
        { a: 'Is your sister going to come?', why: 'A yes or no question starts with *be*.' },
        { a: 'Where are they going to stay?', why: '*Where* first, then *are they going to*.' },
      ] },
    ] },
    { title: 'It’s going to rain', blocks: [
      { t: 'text', md: 'We also use **going to** to say what will happen when we can **see** it now: *Look at those black clouds. It’s going to rain.* *Be careful! You’re going to fall!*' },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Look at the sky. It [going] to rain.', a: ['is going', '’s going'], why: 'Do not forget *be*: *It is going to rain.*' },
        { s: 'She’s going to [calls] you tonight.', a: ['call'], why: 'After *going to*, the base form.' },
        { s: '[Are you go] to come to the party?', a: ['Are you going'], why: 'The form is *going to*, always with *-ing*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'reading', title: 'A message from Leo', md: 'Hi Mia! I’m going ___ have a party on Saturday. It’s going to start ___ eight o’clock. Are you going to come? My sister ___ going to make a big cake!' },
      { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam: write ONE word in each gap of Leo’s message.', items: [
        { q: 'I’m going ___ have a party on Saturday.', a: ['to'], why: '*going to* + verb.' },
        { q: 'It’s going to start ___ eight o’clock.', a: ['at'], why: 'Clock times take *at*.' },
        { q: 'My sister ___ going to make a big cake!', a: ['is'], why: 'One person: *is going to*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 5 you write **one word** in each gap. The missing words are usually small grammar words: *to, at, is, a, the, for*. Read the whole sentence before you write.' },
    ] },
  ],
  activities: {
    one: { title: 'My next year', md: 'Ask the student to make a plan for the next twelve months: work, home, holidays, learning. They say six sentences with *going to*; you ask a follow-up question after each (*Where are you going to stay?*). Then swap: you say your plans and the student asks the questions.' },
    small: { title: 'Find someone who', md: 'Write six activities on the board (*travel abroad, cook a new dish, buy something big, visit family, start a course, watch a film*). Students ask each other *Are you going to … this month?* and find one person for each. The first student with six names reads them aloud with full sentences.' },
    group: { title: 'Weekend plans', md: 'In breakout rooms of three or four, each student writes their real weekend plans in the chat (four sentences with *going to*). The others ask two questions each. Back together, each room reports: *Ana is going to visit her parents, and she is going to cook for them.*' },
  },
  homework: { book: 'u5:p1', md: 'Finish book lesson 1 of unit 5 (What are you going to do?), including the speaking task. Then write a message of 30 words to a friend about your plans for next weekend, with at least three sentences using *going to*.' },
};
