// English A2, class 22 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c22',
  focus: 'By the end of the class every student can read a friendly email about a new flat and its area, and write their own short message about where they live: opening and closing the email, giving details with *there is / there are* and places, comparing with an old home, and joining ideas with **and, but, because, so**. This is the A2 Key Writing part 6 task, so every student writes one message in class.',
  tips: [
    'At A2, the difference between a good and a weak message is often the joining words. Ask students to use **because** and **so** at least once each.',
    'Students often write one very long sentence or many very short ones. Show one model sentence of each kind and ask: *Which is easier to read?*',
    'The exam message must answer all three points. Train students to tick the three points before they write.',
    'Correct only what blocks understanding during writing; save the rest for the feedback at the end.',
    'Online, ask students to write in the chat or a shared document so you can read as they write.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you like and not like about your area?* Each student says one thing they like and one they don’t.' },
    { min: 10, title: 'Read the email', md: 'Show board page 1. Students read the email alone and answer the questions, then find the joining words in the text.' },
    { min: 10, title: 'Joining ideas', md: 'Show board page 2. Go through *and, but, because, so*. Students choose the right word, then join two of their own ideas.' },
    { min: 20, title: 'Exam corner and activity', md: 'Show board page 3: the Writing part 6 task. Students write their message (about 10 minutes), then use the activity for your class size below to read and improve the messages.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 4. Add two mistakes from the students’ messages (no names). Correct them together.' },
    { min: 5, title: 'Close', md: 'Each student reads their best sentence aloud. Set the homework.' },
  ],
  board: [
    { title: 'An email from Ana', blocks: [
      { t: 'reading', title: 'Hi Tom!', md: 'Hi Tom,\n\nI’m in my new flat now! It’s smaller than my old one, but it’s much nearer to my work, so I can walk there. There’s a big market opposite my building and there are lots of cafés in the next street. The only problem is the noise, because the market starts at six in the morning!\n\nCome and visit soon. Write soon!\n\nAna' },
      { t: 'ex', kind: 'tf', h: 'Read the email. True or false?', items: [
        { q: 'Ana’s new flat is bigger than her old one.', a: 'f', why: '*It’s smaller than my old one*.' },
        { q: 'Ana walks to work now.', a: 't', why: '*it’s much nearer to my work, so I can walk there*.' },
        { q: 'The market is next to her building.', a: 'f', why: 'It is *opposite* her building.' },
        { q: 'Ana thinks the market is noisy in the morning.', a: 't', why: '*the market starts at six in the morning*.' },
      ] },
    ] },
    { title: 'And, but, because, so', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the joining word.', items: [
        { q: 'My flat is small, ___ it has a nice balcony.', o: ['but', 'so', 'because'], why: 'A contrast: *but*.' },
        { q: 'I love my street ___ it’s very quiet.', o: ['because', 'so', 'but'], why: 'A reason: *because*.' },
        { q: 'The station is next to my flat, ___ I go to work by train.', o: ['so', 'because', 'but'], why: 'A result: *so*.' },
        { q: 'There’s a park ___ a library near my home.', o: ['and', 'but', 'so'], why: 'Adding: *and*.' },
      ] },
    ] },
    { title: 'Exam corner: Writing part 6', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Writing part 6. Read the task and write **25 words or more**.\n\n*You have moved to a new home. Write an email to your English friend, Sam. In your email:*\n\n*say where your new home is*\n\n*say what is near it*\n\n*invite Sam to visit.*' },
      { t: 'ex', kind: 'choice', h: 'Which email answers all three points?', items: [
        { q: '', o: ['Hi Sam, my new flat is in the centre of Porto. There’s a beautiful park opposite and lots of shops. Would you like to visit next month? Love, Rui', 'Hi Sam, my new flat is in the centre of Porto. It’s bigger than my old flat and I love it. Bye, Rui', 'Hi Sam, there’s a park and some shops near my flat. Would you like to come? Rui'], why: 'Only the first says where, what is near, and invites Sam.' },
      ] },
      { t: 'tip', md: 'In Writing part 6 you lose marks for each point you miss, not for being short. Before you write, number the three points in your head; after you write, check you answered each one. 25 to 40 words is enough.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'My new flat is [more near] to my work.', a: ['nearer', 'closer'], why: 'Short adjective: *nearer*.' },
        { s: 'There [is] lots of cafés in my street.', a: ['are'], why: 'Plural: *there are*.' },
        { s: 'I like my area [so] it’s quiet.', a: ['because'], why: 'A reason: *because*.' },
        { s: '[Come visit me] soon!', a: ['Come and visit me', 'Come to visit me'], why: '*Come and visit* is the natural phrase.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Write and improve', md: 'The student writes the Writing part 6 message in the chat (10 minutes). Read it together: first check the three points, then find one place to add *because* or *so*, and one comparison with an old home. The student rewrites it. Compare the two versions: which would get more marks, and why?' },
    small: { title: 'Swap and check', md: 'Everyone writes the Writing part 6 message (10 minutes). Then each student reads a partner’s message and checks three things: all three points, at least two joining words, one *there is / there are*. They tell the partner one good thing and one thing to improve. Students rewrite one sentence each.' },
    group: { title: 'Message exchange', md: 'Everyone writes the message. In breakout rooms of three, students read each other’s messages aloud and the other two check the three points. Each room chooses its clearest message. Bring everyone back: read the chosen messages, and point out the joining words and any missing points.' },
  },
  homework: { book: 'u4:p4', md: 'Finish book lesson 4 of unit 4 (My new neighbourhood), including the speaking task. Then rewrite your exam message with the corrections from class, and write a second one: an email to a friend about the best café in your area (25 to 40 words).' },
};
