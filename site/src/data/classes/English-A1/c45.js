// English A1, class 45 (docs/LESSONS_PLAN.md). Builds on book lesson u8:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c45',
  focus: 'By the end of the class every student can read a message with travel plans and directions and find the key information (when, where, how), and write their own message inviting someone and explaining how to get there. This lesson puts unit 8 together: transport, times, tickets and directions in one real task.',
  tips: [
    'Before reading, ask students what information they expect in an invitation (time, place, how to get there). Predicting makes reading easier.',
    'In writing, learners often forget the time or the address. Give a checklist question: *Can your friend arrive with only your message?*',
    'Keep the message short (40 to 50 words). At A1, a clear short message is better than a long one with many mistakes.',
    'This is the last book lesson of A1: tell students what they can now do, and that the next classes are review, exam practice and the end-of-level check.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last go to a party or a friend’s house? How did you get there?*' },
    { min: 15, title: 'Read the message', md: 'Show board page 1. Students read the message alone, then answer the questions on the board together. Ask them to show where they found each answer.' },
    { min: 10, title: 'Plan your message', md: 'Show board page 2. Students complete the message with the missing words, then note their own plan: what, when, where, how to get there.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 3: the A2 Key writing task. Discuss what the three points must be.' },
    { min: 10, title: 'Close', md: 'Two or three students read their messages; the class checks that all three points are there. Tell students what comes next in the course. Set the homework.' },
  ],
  board: [
    { title: 'The party', blocks: [
      { t: 'reading', title: 'A message from Sara', md: 'Hi everyone! My birthday party is on Saturday at 7 pm at my flat, 12 Hill Street. Take bus 5 from the station: it takes fifteen minutes. Get off at the park. Walk past the park and take the first street on the right. My flat is opposite the café. See you there!' },
      { t: 'ex', kind: 'tf', h: 'Read the message. Are the sentences true or false?', items: [
        { q: 'The party starts at seven in the evening.', a: 't', why: '*at 7 pm*.' },
        { q: 'The bus journey takes fifty minutes.', a: 'f', why: 'It takes *fifteen* minutes.' },
        { q: 'Sara’s flat is next to the café.', a: 'f', why: 'It is *opposite* the café.' },
        { q: 'You get off the bus at the park.', a: 't', why: '*Get off at the park.*' },
      ] },
    ] },
    { title: 'Plan your message', blocks: [
      { t: 'ex', kind: 'bank', h: 'Complete the message with the words.', extra: ['by'], items: [
        { q: 'Come to my house ___ Sunday for lunch!', a: 'on', why: 'Days take *on*.' },
        { q: 'Take the train to Oxford. It ___ an hour.', a: 'takes', why: '*It takes* + time.' },
        { q: 'From the station, turn ___ and walk for five minutes.', a: 'left', why: 'A direction: *turn left*.' },
      ] },
    ] },
    { title: 'Exam corner: write a message', blocks: [
      { t: 'text', md: 'In the format of the A2 Key writing test: *You want to invite your English friend Sam to a picnic in the park on Sunday. Write a message to Sam (25 words or more). Say: where the picnic is, what time it starts, and how to get there.*' },
      { t: 'ex', kind: 'choice', h: 'Which message answers all three points?', items: [
        { q: '', o: ['Hi Sam! Come to my picnic in River Park on Sunday at 12. Take bus 3 from the station and get off at the park gate. See you!', 'Hi Sam! I’m having a picnic on Sunday. It’s great. Bring some food and drinks. See you!', 'Hi Sam! The picnic is at 12 on Sunday. The weather is sunny and warm. See you!'], why: 'Only the first message says where, what time and how to get there.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the A2 Key writing test you get marks for each point you include. Before you write, number the three points in the question in your head, and check at the end that every one is in your message.' },
    ] },
  ],
  activities: {
    one: { title: 'Write and follow', md: 'The student writes a 40-word invitation to their home or a place in their town (in the chat), with directions from the nearest station. You read it and ask questions about anything unclear, then together you improve it. Then you write one and the student finds the three key points.' },
    small: { title: 'Invitation exchange', md: 'Each student writes an invitation in the chat (event, time, place, how to get there). Then each student reads another student’s message and answers: *Can I go? How do I get there? What time?* If information is missing, the writer adds it.' },
    group: { title: 'Event planners', md: 'Breakout rooms of three. Each room plans one event (a concert, a picnic, a birthday) and writes the invitation together in the chat with clear directions. In the main room, rooms swap invitations and check that all the information is there; the clearest invitation wins.' },
  },
  homework: { book: 'u8:p4', md: 'Finish book lesson 4 of unit 8 (A message and a route). Then write an invitation (40 to 50 words) to a real event: what it is, when, where and how to get there.' },
};
