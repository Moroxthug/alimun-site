// English A2, class 28 (docs/LESSONS_PLAN.md). Builds on book lesson u5:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c28',
  focus: 'By the end of the class every student can read a chat between friends making weekend plans, find who is doing what and when, and write a short invitation message of about 30 words that answers three points. This class puts together *going to*, the present continuous for arrangements and inviting.',
  tips: [
    'In Reading Part 3, students often answer from memory of the whole text. Teach them to find the exact line for each question and read it again.',
    'For writing, insist on the three-point routine: underline the points, one sentence for each, check the word count.',
    'Weaker students can write with sentence starters from the board (*Would you like to …? We’re meeting at … Let’s …*). Stronger students should add one extra detail.',
    'Mixed classes: pair a confident writer with a confident speaker for the activity so both skills get practice.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask the class: *What are you doing this weekend? Who with?* Collect three answers and point out the forms they used.' },
    { min: 15, title: 'The chat', md: 'Board page 1. Read the chat aloud with two students taking the parts. Then students answer the questions in the format of Reading Part 3, showing the line that gives each answer.' },
    { min: 10, title: 'Plans, arrangements, invitations', md: 'Board page 2. Students say which form each sentence uses and why, then complete the gaps.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Writing a message', md: 'Board page 3. Read the task and the model; students write their own message in seven minutes and check it with the points.' },
    { min: 5, title: 'Close', md: 'Two students read their messages aloud; the class says if all three points are there. Set the homework.' },
  ],
  board: [
    { title: 'Exam corner: the weekend chat', blocks: [
      { t: 'dialogue', title: 'The class chat', lines: [
        { who: 'Nina', s: 'Hi everyone! Are you free on Saturday? I’m going to make pizza at my place.' },
        { who: 'Tom', s: 'I’d love to come, but I’m playing football until four. Can I come after that?' },
        { who: 'Nina', s: 'Of course! We’re starting at six.' },
        { who: 'Lucy', s: 'Sorry, I can’t. I’m visiting my grandparents this weekend. Have fun!' },
        { who: 'Tom', s: 'Shall I bring something? Drinks?' },
        { who: 'Nina', s: 'Yes please! And Sam is bringing a cake.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading Part 3): choose the best answer.', items: [
        { q: 'What is Nina going to do on Saturday?', o: ['make pizza at home', 'play football', 'visit her grandparents'], why: '*I’m going to make pizza at my place.*' },
        { q: 'When can Tom come?', o: ['after four o’clock', 'at four o’clock', 'before the football'], why: 'He plays football *until four* and comes *after that*.' },
        { q: 'Why can’t Lucy come?', o: ['She is visiting family.', 'She is working.', 'She doesn’t like pizza.'], why: '*I’m visiting my grandparents.*' },
        { q: 'What is Tom going to bring?', o: ['drinks', 'a cake', 'pizza'], why: 'He offers drinks; Sam brings the cake.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 3 the questions follow the order of the text. Find the line for each question and read it again: the right answer usually says the same thing **in different words**.' },
    ] },
    { title: 'Which form?', blocks: [
      { t: 'table', caption: 'Three ways to talk about the weekend', explain: ['head', 'col0'], head: ['Use', 'Example'], rows: [
        ['a plan or intention', 'I’m going to make pizza.'],
        ['an arrangement with a time', 'We’re starting at six.'],
        ['an invitation', 'Would you like to come?'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Complete the message with one word in each gap.', items: [
        { q: 'We’re meeting ___ the café at eleven.', a: ['at', 'in'], why: 'A place to meet: *at the café*.' },
        { q: 'Would you like ___ come with us?', a: ['to'], why: '*Would you like to …?*' },
        { q: 'Sam ___ bringing a cake.', a: ['is'], why: 'Present continuous: *Sam is bringing*.' },
      ] },
    ] },
    { title: 'Write a message', blocks: [
      { t: 'text', md: '**Task.** You want your friend Alex to come to the cinema with you. Write a message to Alex. In your message: say which film you are going to see; say when and where you are meeting; ask Alex to bring something. Write **25 words or more**.' },
      { t: 'reading', title: 'A model answer', md: 'Hi Alex! Would you like to come to the cinema? I’m going to see the new Spider film. We’re meeting outside the cinema at seven on Friday. Can you bring some snacks? Ana' },
      { t: 'ex', kind: 'tf', h: 'Read the model. Does it answer each point?', items: [
        { q: 'It says which film.', a: 't', why: '*the new Spider film*.' },
        { q: 'It says when and where.', a: 't', why: '*outside the cinema at seven on Friday*.' },
        { q: 'It asks Alex to bring something.', a: 't', why: '*Can you bring some snacks?*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Plan a real weekend', md: 'Plan an imaginary weekend together in a chat on screen: the student invites you to two things and you invite them to one. Use all three forms. At the end, the student writes the final plan in three sentences.' },
    small: { title: 'The group chat', md: 'Students write a group chat together, one message each in turn, like the one on board page 1: one person invites, others accept or say no with a reason, someone offers to bring something. Read the finished chat aloud with each student reading their own lines.' },
    group: { title: 'Reading race', md: 'In breakout rooms of three, each room writes a short chat (five or six messages) about weekend plans and three questions about it. Rooms swap chats and answer the other room’s questions. Back together, rooms check each other’s answers.' },
  },
  homework: { book: 'u5:p4', md: 'Finish book lesson 4 of unit 5 (A weekend with friends), including the speaking task. Then write the message task from board page 3 again, about a different plan (a concert, a picnic or a game), with all three points.' },
};
