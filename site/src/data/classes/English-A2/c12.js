// English A2, class 12 (docs/LESSONS_PLAN.md, L6). Exam practice on units u1 and u2: A2 Key reading and writing. Draft for the owner's review.
export const LESSON = {
  id: 'c12',
  focus: 'Exam practice in the format of A2 Key Reading and Writing, using the language of units 1 and 2. By the end every student knows what Reading Parts 1, 3 and 5 and Writing Parts 6 and 7 look like, how much time to spend on each, and one strategy for each part. Students work alone, then check together.',
  tips: [
    'Tell students the real exam: Reading and Writing is one paper of about 60 minutes with seven parts. Today we practise five of them in shorter form.',
    'Time each part strictly (a few minutes each) so students feel the pace. Reveal answers only after everyone has finished.',
    'For every wrong answer, ask *Where is the answer in the text?* Finding the evidence is the skill that improves scores.',
    'For the writing tasks, remind students: answer every point, write enough words, and check the verb forms.',
  ],
  plan: [
    { min: 5, title: 'The exam in brief', md: 'Show board page 1. Explain the paper and today’s plan.' },
    { min: 10, title: 'Reading Part 1', md: 'Board page 2: three short messages. Students choose alone (four minutes), then check.' },
    { min: 10, title: 'Reading Part 3', md: 'Board page 3: a short text and questions. Students answer alone (five minutes), then find the evidence together.' },
    { min: 10, title: 'Reading Part 5', md: 'Board page 4: one word in each gap. Alone, then check.' },
    { min: 20, title: 'Writing Parts 6 and 7', md: 'Board page 5. Students write the message (Part 6) in eight minutes and plan the story (Part 7) together. Use the activity for your class size to share and correct.' },
    { min: 5, title: 'Close', md: 'Each student names the part they found hardest. Set the homework.' },
  ],
  board: [
    { title: 'A2 Key: Reading and Writing', blocks: [
      { t: 'text', md: 'The Reading and Writing paper takes **about 60 minutes** and has **seven parts**: five for reading (short messages, matching, a longer text, choosing words, writing words in gaps) and two for writing (a short message of **25 words or more** and a picture story of **35 words or more**).\n\nToday you practise Reading Parts 1, 3 and 5 and Writing Parts 6 and 7.' },
    ] },
    { title: 'Reading Part 1: short messages', blocks: [
      { t: 'reading', title: 'Three messages', md: '**A.** Gym closed on Sunday for cleaning. Open again Monday 7 am.\n\n**B.** Sam, your mum called. Can you phone her before six? She’s at work after that.\n\n**C.** Lost: small black bag with keys. Please bring it to reception.' },
      { t: 'ex', kind: 'choice', h: 'In the format of A2 Key (Reading, Part 1): what does each message say?', items: [
        { q: 'Message A', o: ['You can’t use the gym on Sunday.', 'The gym opens at 7 am on Sunday.', 'You must clean the gym on Monday.'], why: '*closed on Sunday*.' },
        { q: 'Message B', o: ['Sam should call his mum before six.', 'Sam’s mum is at home after six.', 'Sam must go to work.'], why: '*Can you phone her before six?*' },
        { q: 'Message C', o: ['Someone is looking for their bag.', 'Reception has lost some keys.', 'You can buy a black bag at reception.'], why: '*Lost: small black bag*.' },
      ] },
    ] },
    { title: 'Reading Part 3: a longer text', blocks: [
      { t: 'reading', title: 'My first month in Manchester', md: 'I moved to Manchester in September to start a new job. The first week was difficult: I didn’t know anyone and it rained every day. But my colleagues were very friendly. On Fridays we usually have lunch together, and last Friday they took me to a Lebanese restaurant. Now I’m looking for a flat near the park, because at the moment I’m staying with my cousin and her flat is very small.' },
      { t: 'ex', kind: 'choice', h: 'In the format of A2 Key (Reading, Part 3): choose the right answer.', items: [
        { q: 'Why was the first week difficult?', o: ['The writer didn’t know anyone.', 'The job was very hard.', 'The colleagues weren’t friendly.'], why: '*I didn’t know anyone*.' },
        { q: 'On Fridays the colleagues', o: ['usually eat together.', 'go to a restaurant every week.', 'finish work early.'], why: '*On Fridays we usually have lunch together*.' },
        { q: 'Where does the writer live now?', o: ['With a family member.', 'In a flat near the park.', 'Alone in a small flat.'], why: '*I’m staying with my cousin*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'Read the questions first, then the text. The right answer often uses **different words** from the text: *my cousin* = *a family member*.' },
    ] },
    { title: 'Reading Part 5: one word in each gap', blocks: [
      { t: 'ex', kind: 'gap', h: 'In the format of A2 Key (Reading, Part 5): write one word in each gap.', items: [
        { q: 'I ___ born in a small town in the north.', a: ['was'], why: '*I was born*.' },
        { q: 'My brother lives ___ Canada now.', a: ['in'], why: 'Countries: *in Canada*.' },
        { q: 'We ___ to the beach every summer when we were children.', a: ['went'], why: 'Past habit, past simple: *went*.' },
        { q: 'What ___ you do last night?', a: ['did'], why: 'Past question: *did*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 5, the missing word is short: a preposition, *was / were*, *did*, a pronoun. Read the whole sentence, then decide what kind of word is missing.' },
    ] },
    { title: 'Writing Parts 6 and 7', blocks: [
      { t: 'text', md: '**Part 6.** You went to a new café with a friend last weekend. Write an email to another friend. Say: **where the café is**, **what you ate or drank**, and **why you liked it**. Write 25 words or more.\n\n**Part 7.** Three pictures: **a man buys a cake**, **he drops it in the street**, **he buys a second cake and his friends laugh at the party**. Write the story in 35 words or more.' },
      { t: 'tip', art: 'owl', md: 'Part 6: answer **all three points**. Part 7: write about **all three pictures**, in the **past simple**, with **then, after that, when**.' },
    ] },
  ],
  activities: {
    one: { title: 'Write and mark', md: 'The student writes both tasks (8 minutes each). Mark them together with three questions: are all the points there? Is it long enough? Are the past verbs right? The student rewrites one sentence from each to make it better.' },
    small: { title: 'Swap and check', md: 'Each student writes the Part 6 email in the chat. Students check another student’s email for the three points and one verb mistake. Then plan the Part 7 story together on the board, and each student writes their own version for homework.' },
    group: { title: 'Room checks', md: 'Students write the Part 6 email alone (8 minutes). In breakout rooms of three, they read each other’s emails and tick the three points. Each room chooses one email to read in the main room; the class finds one thing to improve.' },
  },
  homework: { book: 'u1 u2', md: 'Write the Part 7 story (35 words or more) and send it to your teacher. Then do the practice for units 1 and 2 you scored lowest on.' },
};
