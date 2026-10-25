// English B1 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of B1 exams such as B1 Preliminary; all tasks are original, none is official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Get ready for a B1 exam: know the task types, use good strategies, write to a task and speak with a partner.',
  art: 'dragon',
  tags: { skills: ['reading', 'listening', 'writing', 'speaking'], topics: ['exam-strategies', 'paraphrase', 'informal-email', 'discussion'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading and listening tasks',
      about: 'Strategies for the most common task types.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'B1 exams such as B1 Preliminary test reading, writing, listening and speaking. The reading and listening papers use a few common task types. If you know them before the exam, you can spend your time on the answers, not on the instructions.' },
          { t: 'table', caption: 'Task types and strategies', explain: ['head', 'col0', 'col1'], head: ['Task type', 'Strategy'], rows: [
            ['Multiple choice', 'Read the question first and underline the key words. Then find the part of the text that answers it.'],
            ['Matching people to texts', 'Note what each person needs. A text must match every need, not only one.'],
            ['Gap filling', 'Look at the words before and after the gap. Do you need a noun, a verb or an adjective?'],
            ['Listening for details', 'Read the questions before you listen. Think about what kind of answer you need: a time, a place, a price.'],
          ] },
        ],
        [
          { t: 'text', md: 'Exam texts often say the same thing as the question in **different words**. This is called a **paraphrase**. Do not look only for the same words: look for the same meaning.' },
          { t: 'examples', items: [
            { s: 'Text: *The museum is closed on Mondays.* Question: *You can’t visit at the start of the week.*', n: 'Same meaning, different words.' },
            { s: 'Text: *Tickets must be booked in advance.* Question: *You need to reserve a place before you go.*', n: '*Book in advance* = *reserve before you go*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In listening tasks, you often hear words from all three options. Only one option matches what the speaker really means, so listen to the whole answer. In many exams you hear each recording twice, and you do not lose marks for a wrong answer, so never leave a question blank.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sentence with its paraphrase.', pairs: [
            ['It’s free.', 'You don’t have to pay.'],
            ['It’s fully booked.', 'There are no places left.'],
            ['The event has been postponed.', 'It will happen later than planned.'],
            ['It’s within walking distance.', 'You can get there on foot.'],
            ['Booking is essential.', 'You must reserve a place.'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about exam strategies. True or false?', items: [
            { q: 'It is a good idea to read the questions before you listen.', a: 't', why: 'Then you know what information to listen for.' },
            { q: 'If you hear a word from an option, that option is always right.', a: 'f', why: 'You often hear words from wrong options too. Listen for the meaning.' },
            { q: 'If you do not know an answer, it is usually best to leave it blank.', a: 'f', why: 'In many exams a wrong answer does not lose marks, so make your best guess.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Exam practice. Read each short text and choose what it says.', items: [
            { q: 'NOTICE: The language lab will be closed for repairs from 3 to 7 June. Students can use the computers in the library instead.', o: ['Students should use the library computers while the lab is closed.', 'The library will be closed for repairs in June.', 'Students need to repair the computers in the lab.'], why: '*Instead* tells students where to go while the lab is closed.' },
            { q: 'Hi Jo, the seminar has moved from Room 4 to Room 12, but the time is the same. See you there! Sam', o: ['The seminar is at the usual time in a different room.', 'The seminar has moved to a later time.', 'Sam cannot go to the seminar.'], why: 'The room changes, *but the time is the same*.' },
            { q: 'Course books can be returned at the front desk. Please do not leave them in the classroom.', o: ['Students should give their books back at the front desk.', 'Students can leave their books in the classroom.', 'Students must buy their course books at the front desk.'], why: '*Returned* means given back.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing an email to a task',
      about: 'Answer every point of the task and check your work.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In a B1 writing task you often answer an email from a friend. Read the task carefully. Answer **every question** in it, use the right tone (here informal) and write about the number of words the task asks for, often about 100.' },
          { t: 'reading', title: 'The task', md: 'You have received an email from your friend Alex:\n\n*I’m coming to your town next month to do a three-month course! Which school do you recommend? Where should I stay? And what can I do in my free time?*\n\nWrite your email to Alex. Write about 100 words.' },
        ],
        [
          { t: 'reading', title: 'A model answer', md: 'Hi Alex,\n\nGreat news about your course! I’d recommend the Lakeside Language Centre. My cousin studied there last year, and she loved the teachers.\n\nAs for accommodation, I think you should stay with a host family. It’s cheaper than a flat, and you’ll practise speaking every evening.\n\nIn your free time, you should definitely visit the old town and the market on Saturdays. There’s also a great running club by the river if you like sport.\n\nLet me know when you arrive, and we can meet for coffee!\n\nBest wishes,\nNadia' },
          { t: 'tip', art: 'owl', md: 'Keep five minutes at the end to check your work. Look for verb forms, *-s* on verbs after *he*, *she* and *it*, missing words and spelling. Then check that you answered every question.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the model answer. True or false?', items: [
            { q: 'Nadia recommends a school.', a: 't', why: '*I’d recommend the Lakeside Language Centre.*' },
            { q: 'Nadia suggests that Alex rents a flat.', a: 'f', why: 'She suggests a host family because it is cheaper than a flat.' },
            { q: 'Nadia answers all three of Alex’s questions.', a: 't', why: 'School, accommodation and free time: one paragraph for each.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best words for an email to a friend.', items: [
            { q: 'Greeting:', o: ['Hi Alex,', 'Dear Sir or Madam,', 'To whom it may concern,'], why: 'Alex is a friend, so the tone is informal.' },
            { q: 'Giving advice:', o: ['You should definitely visit the market.', 'It is advisable that the market be visited.', 'Visit market.'], why: '*You should* + base form is friendly, clear advice.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Check the work. Tap the mistake in each sentence.', items: [
            { s: 'My cousin [study] there last year.', why: '*Last year* is in the past: *studied*.' },
            { s: 'There [is] lots of cafés near the school.', why: '*Cafés* is plural: *There are lots of cafés*.' },
            { s: 'I’m looking forward to [see] you.', why: '*look forward to* + *-ing*: *seeing*.' },
            { s: 'You should [to] visit the old town.', why: 'No *to* after *should*: *You should visit*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences correctly.', items: [
            { q: 'I think you ___ (should / stay) with a host family.', a: ['should stay'], why: '*should* + base form.' },
            { q: 'I’m looking forward to ___ (meet) you.', a: ['meeting'], why: '*look forward to* + *-ing*.' },
            { q: 'Let me ___ when you arrive.', a: ['know'], why: '*Let me know* = *tell me*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Speaking with a partner',
      about: 'Plan something together, give opinions and agree or disagree politely.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In some B1 speaking tests you talk with another candidate about a situation, often with pictures, for example choosing a present or planning an event. The examiner wants to hear you **make suggestions**, **give opinions with reasons**, **ask your partner** and **react** to what they say. You do not have to agree at the end, but keep the conversation going.' },
          { t: 'table', caption: 'Phrases for a discussion', explain: ['head', 'col0'], quiz: true, head: ['What you do', 'Phrases'], rows: [
            ['suggest', 'How about…? / Why don’t we…? / We could…'],
            ['give your opinion', 'I think… / In my opinion, … / For me, …'],
            ['ask your partner', 'What do you think? / Do you agree? / What about you?'],
            ['agree', 'I agree. / That’s a good idea. / You’re right.'],
            ['disagree politely', 'I’m not sure. / I see what you mean, but… / That’s true, but…'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Planning an end-of-term activity', lines: [
            { who: 'Lena', s: 'Shall I start? I think a picnic would be fun, because we can all talk together.' },
            { who: 'Omar', s: 'That’s true, but what if it rains? Why don’t we go bowling instead?' },
            { who: 'Lena', s: 'Bowling is a good idea, but it can be expensive for students. What do you think about the cooking class?' },
            { who: 'Omar', s: 'I like that. In my opinion, it’s the best option, because everyone can take part, even people who aren’t sporty.' },
            { who: 'Lena', s: 'I agree. And we could eat the food together at the end.' },
            { who: 'Omar', s: 'Great. So, shall we choose the cooking class?' },
            { who: 'Lena', s: 'Yes, let’s do that.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Lena suggests a picnic first.', a: 't', why: '*I think a picnic would be fun.*' },
            { q: 'Omar is worried about the weather.', a: 't', why: '*What if it rains?*' },
            { q: 'Lena thinks bowling is cheap.', a: 'f', why: 'She says *it can be expensive for students*.' },
            { q: 'They do not agree in the end.', a: 'f', why: 'They both choose the cooking class.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrase with what it does.', pairs: [
            ['Why don’t we go bowling?', 'makes a suggestion'],
            ['What do you think?', 'asks for your partner’s opinion'],
            ['I see what you mean, but…', 'disagrees politely'],
            ['In my opinion, …', 'gives your opinion'],
            ['You’re right.', 'agrees'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Your partner says: “I think the museum is boring.” You disagree politely:', o: ['I see what you mean, but it could be interesting.', 'No, that’s wrong.', 'You don’t know anything.'], why: 'Show that you understand, then give your view.' },
            { q: 'Why don’t we ___ a film?', o: ['watch', 'watching', 'to watch'], why: '*Why don’t we* + base form.' },
            { q: 'How about ___ a film?', o: ['watching', 'watch', 'to watch'], why: '*How about* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What do you think about the cinema?', why: 'A question to ask your partner’s opinion.' },
            { a: 'Why don’t we have a picnic?', why: '*Why don’t we* + base form.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Text: *Entry is free for students.* Which sentence means the same?', o: ['Students don’t have to pay to go in.', 'Students can’t go in.', 'Students must pay at the entrance.'], why: '*Free* means you do not pay.' },
      { q: 'Before a listening task, you should ___.', o: ['read the questions', 'close your eyes', 'write your answers'], why: 'Then you know what to listen for.' },
      { q: 'How about ___ to the museum on Saturday?', o: ['going', 'go', 'to go'], why: '*How about* + *-ing*.' },
      { q: 'Your partner makes a suggestion you do not like. You say:', o: ['That’s true, but it might be too expensive.', 'That’s a terrible idea.', 'No.'], why: 'Agree a little, then give a reason.' },
      { q: 'A friend asks you three questions in an email. In your answer you ___.', o: ['answer all three', 'answer the first one', 'ask three new questions'], why: 'In the exam, you must answer every point of the task.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'The concert has been ___ until next month.', a: ['postponed'], why: '*Postponed* means moved to a later time.' },
      { q: 'You ___ definitely try the local food.', a: ['should'], why: '*should* gives advice.' },
      { q: 'I see what you ___, but I prefer the cinema.', a: ['mean'], why: '*I see what you mean, but…* disagrees politely.' },
      { q: 'I’m looking forward to ___ (hear) from you.', a: ['hearing'], why: '*look forward to* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the mistake in each sentence.', items: [
      { s: 'My sister [live] in Leeds.', why: '*he*, *she*, *it* + verb with *-s*: *lives*.' },
      { s: 'We [goed] to the market yesterday.', why: 'The past of *go* is *went*.' },
      { s: 'You should [to] book a table.', why: 'No *to* after *should*.' },
    ] },
  ],
};
