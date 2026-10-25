// English B2 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of exams like B2 First and IELTS; no official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Prepare for a B2 exam: work fast in reading and listening, plan and check your writing, and organise what you say.',
  art: 'dragon',
  tags: { skills: ['reading', 'listening', 'writing', 'speaking'], topics: ['exam-strategies', 'paraphrase', 'distractors', 'word-limits', 'error-checking', 'long-turn', 'discussion'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading and listening under time pressure',
      about: 'Use your time well, recognise paraphrase and avoid the traps in reading and listening tasks.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'In B2 exams such as B2 First and IELTS, you rarely have time to read every word slowly. Read the **questions first**, so you know what to look for. Then **skim** to find the right part of the text and read that part carefully. The questions almost never use the same words as the text: they **paraphrase** it.' },
          { t: 'table', caption: 'Strategies for common task types', explain: ['head', 'col0', 'col1'], head: ['Task type', 'Strategy'], rows: [
            ['multiple choice', 'Read the question, find the part of the text it refers to, then check every option against that part.'],
            ['matching headings or people', 'Skim each paragraph for its main idea and leave the hardest ones until last.'],
            ['listening gap fill', 'Before you listen, predict the kind of word you need: a number, a name, a noun or a verb.'],
            ['true, false or not given', 'Look for the same idea in different words. If the text says nothing about it, choose not given.'],
          ] },
        ],
        [
          { t: 'text', md: 'Listening tasks often contain **distractors**: a speaker mentions one answer and then corrects it. Listen to the end of the sentence before you write. Words like *actually*, *sorry*, *no, wait* and *or rather* often come just before the real answer.' },
          { t: 'dialogue', title: 'A tutor gives some changes', lines: [
            { who: 'Tutor', s: 'Right, a few changes for next week. The essay deadline was going to be Monday, but we’ve moved it to Wednesday.' },
            { who: 'Student', s: 'Wednesday the fifteenth?' },
            { who: 'Tutor', s: 'That’s right. And the seminar will be in Room 12 as usual. Actually, no, sorry, Room 12 is being painted, so we’ll be in Room 20.' },
            { who: 'Student', s: 'Do we need to bring the textbook?' },
            { who: 'Tutor', s: 'No, you won’t need it. Just bring your notes on chapter four.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the notes from the conversation with one word or a number.', items: [
            { q: 'Essay deadline: ___', a: ['Wednesday', 'Wednesday the fifteenth', 'Wednesday 15th', 'the fifteenth'], why: 'Monday is a distractor: the deadline *was going to be Monday*, but it moved.' },
            { q: 'Seminar room: Room ___', a: ['20', 'twenty'], why: '*Actually, no, sorry* introduces the correction: Room 20, not Room 12.' },
            { q: 'Bring: notes on chapter ___', a: ['four', '4'], why: 'The textbook is not needed; the notes on chapter four are.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Text: “Although entry to the museum is free, visitors are asked to make a donation.” Question: Do visitors have to pay?', o: ['No, but they are invited to give money.', 'Yes, they must pay to enter.', 'The text does not say.'], why: '*Entry is free*; a donation is asked for, not required.' },
            { q: 'You have two minutes left and three questions without an answer. What should you do?', o: ['Choose an answer for every question, because a wrong answer usually loses no marks.', 'Leave them blank so that you do not lose marks.', 'Go back and check your first answers again.'], why: 'In most B2 exams, a wrong answer does not lose marks, but a blank answer never gains any.' },
            { q: 'In a listening gap fill, you read: “The library closes at ___.” What should you listen for?', o: ['a time', 'a name', 'a place'], why: '*Closes at* is followed by a time.' },
            { q: 'Text: “Few residents supported the plan.” Statement: Most residents were in favour of the plan.', o: ['False', 'True', 'Not given'], why: '*Few* means *not many*, so the statement contradicts the text.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words in the questions with the paraphrase in the text.', pairs: [
            ['rarely', 'not very often'],
            ['is not allowed', 'is forbidden'],
            ['reduced the cost', 'made it cheaper'],
            ['at the beginning', 'initially'],
            ['is concerned', 'is worried'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Each speaker corrects themselves. Tap the real answer.', items: [
            { s: 'The talk starts at six, or rather [half past six], because the speaker’s train is late.', why: '*Or rather* introduces the correction.' },
            { s: 'You can collect your certificate on Friday. No, wait, the office is closed then, so come on [Thursday].', why: '*No, wait* shows that Friday is wrong.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing: planning, word limits and checking',
      about: 'Plan your answer, keep to the word limit and find your own mistakes before the end.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Strong exam writing starts before you write. Read the task twice and mark every point you must include. Then spend a few minutes on a plan: one main idea for each paragraph. Leave time at the end to check your work. A clear plan usually saves more time than it costs.' },
          { t: 'text', md: 'Most tasks give a **word limit** or a minimum. If your answer is much too short, you probably have not covered the whole task, and you may lose marks. If it is much too long, you risk more mistakes and irrelevant ideas. Do not count every word: count the words in three lines, find the average and multiply by the number of lines.' },
          { t: 'tip', art: 'owl', md: 'Check that you have answered every part of the task, and in the right register. An email to a friend can be informal; an essay or a report cannot.' },
        ],
        [
          { t: 'text', md: 'When you check, look for the mistakes you know you often make. These are some of the most common at B2 level.' },
          { t: 'table', caption: 'Common mistakes to check', explain: ['head', 'col0'], head: ['Type of mistake', 'Wrong', 'Right'], rows: [
            ['subject and verb', 'The number of students have risen.', 'The number of students has risen.'],
            ['word form', 'It is a very economy solution.', 'It is a very economical solution.'],
            ['articles', 'The education is important for everyone.', 'Education is important for everyone.'],
            ['tense', 'Since 2020, the city grew rapidly.', 'Since 2020, the city has grown rapidly.'],
            ['spelling', 'accomodation, enviroment', 'accommodation, environment'],
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Each sentence has one mistake. Tap it.', items: [
            { s: 'The number of cars in the city centre [have] risen since 2015.', why: '*The number of* takes a singular verb: *has risen*.' },
            { s: 'In my opinion, this is a very [economy] solution.', why: 'An adjective is needed: *economical*.' },
            { s: '[The] education is the key to a better future.', why: 'Uncountable nouns used in a general sense have no article: *Education is…*' },
            { s: 'Since 2020, the population of the town [grew] rapidly.', why: '*Since* + a past time needs the present perfect: *has grown*.' },
            { s: 'Many students struggle to find [accomodation] in big cities.', why: 'The correct spelling is *accommodation*, with double *c* and double *m*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'The task asks for 140 to 190 words. Your essay has 110 words. What is the most likely result?', o: ['You may lose marks, because you have probably not covered the whole task.', 'You will get extra marks for being brief.', 'Nothing, because examiners do not look at the length.'], why: 'An answer that is much too short usually does not cover all of the task.' },
            { q: 'The task asks you to write about two given points and add one idea of your own. Your essay covers only the two given points. What is missing?', o: ['your own idea, which is part of the task', 'a title for the essay', 'a list of sources'], why: 'Every part of the task must be answered, including your own idea.' },
            { q: 'You have forty minutes for an essay. What is a sensible plan?', o: ['about five minutes planning, thirty writing and five checking', 'forty minutes writing without a plan', 'twenty minutes planning and twenty writing'], why: 'A short plan and a short check leave most of the time for writing.' },
            { q: 'The task asks for an email to an English-speaking friend. Which opening fits?', o: ['Hi Sam, thanks for your message!', 'Dear Sir or Madam,', 'To whom it may concern,'], why: 'An email to a friend is informal. The other openings are for formal letters.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Correct the common mistake: complete with one word.', items: [
            { q: 'Many people are ___ (interest) in learning a second language.', a: ['interested'], why: 'People are *interested*; a thing is *interesting*.' },
            { q: 'If I ___ (have) more free time, I would travel more.', a: ['had'], why: 'Second conditional: *if* + past simple, *would* + base form.' },
            { q: 'She has lived in London ___ three years.', a: ['for'], why: '*For* + a period of time; *since* + a point in time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Speaking: a long turn and a discussion',
      about: 'Organise a long turn about photos or a topic, and keep a discussion with a partner moving.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Many speaking tests include a **long turn**, where you speak alone. In B2 First, for example, you compare two photos and answer a question about them for about a minute. In IELTS, you talk about a topic for up to two minutes after a minute to prepare. Do not describe everything you see: compare, guess and give your opinion.' },
          { t: 'table', caption: 'Organising a long turn', explain: ['head', 'col0'], quiz: true, head: ['Stage', 'Useful language'], rows: [
            ['introduce the photos', 'Both photos show people who are…'],
            ['compare', 'In the first photo…, whereas in the second…'],
            ['guess', 'They might be… / It looks as if…'],
            ['answer the question', 'I think the people in the second photo… because…'],
            ['gain time', 'That’s an interesting question. Let me think…'],
          ] },
        ],
        [
          { t: 'reading', title: 'A model long turn: Why might people choose to study in these ways?', md: 'Both photos show people studying, but in very different situations. In the first photo, a young woman is working alone in what looks like a library. She seems very focused, and there are several books open in front of her. In the second photo, on the other hand, a group of students are sitting around a table in a café, and they appear to be discussing something.\n\nI think the woman in the library might have an exam soon, so she needs a quiet place where nobody will disturb her. The students in the café, however, are probably working on a group project. It looks as if they are sharing ideas and perhaps dividing up the work between them. They look quite relaxed, and one of them is laughing, so the atmosphere seems much less formal than in the library.\n\nPersonally, I prefer studying the way the woman does, because I find it hard to concentrate when there is noise around me. However, I can see that working in a group has advantages too. You can explain things to each other, and it is probably more fun. On the other hand, it is easy to start chatting about other things and get less done. So I suppose the best choice really depends on the task.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The speaker says the woman in the library looks very focused.', a: 't', why: '*She seems very focused.*' },
            { q: 'The speaker is certain that the woman has an exam soon.', a: 'f', why: 'She says the woman *might* have an exam: she is guessing.' },
            { q: 'The speaker often studied in cafés when she was younger.', a: 'ng', why: 'She says nothing about where she studied in the past.' },
            { q: 'The speaker gives a personal preference before the end.', a: 't', why: '*Personally, I prefer studying the way the woman does.*' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'A discussion task: which change would help students most?', lines: [
            { who: 'Ana', s: 'Shall we start with the library? I think longer opening hours would help a lot of students.' },
            { who: 'Jun', s: 'That’s true, but what about students who live far away? Better buses might help more people.' },
            { who: 'Ana', s: 'Good point. Although the bus service is already quite good, isn’t it?' },
            { who: 'Jun', s: 'For some areas, yes. What do you think about the new sports centre?' },
            { who: 'Ana', s: 'I don’t think it’s as important as the other two. Not everyone does sport.' },
            { who: 'Jun', s: 'I agree. So, shall we decide? I’d go for longer library hours.' },
            { who: 'Ana', s: 'Yes, let’s choose that. It would help almost everyone.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at how Ana and Jun discuss.', items: [
            { q: 'Why does Jun ask “What do you think about the new sports centre?”', o: ['to involve his partner and move the discussion on', 'to end the discussion', 'to correct his partner’s mistake'], why: 'Asking your partner a question keeps the discussion going and shares the speaking time.' },
            { q: 'Why does Ana end her sentence with “isn’t it?”', o: ['to invite Jun to agree or disagree', 'to show that she is angry', 'to ask for information that she does not have'], why: 'A question tag with falling intonation invites the other person to respond.' },
            { q: 'You want to reach a decision with your partner. What do you say?', o: ['So, shall we decide which one is best?', 'I have decided. Next.', 'Decide now, please.'], why: '*Shall we decide…?* invites your partner to agree on an answer together.' },
            { q: 'Your partner has said very little. What do you say?', o: ['What’s your view on this?', 'Why don’t you speak?', 'You should talk more.'], why: 'An open question invites your partner politely.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In a discussion task, examiners usually listen to how you interact, not only to your English. Respond to what your partner says, ask for their opinion and try to reach a decision together. Do not worry if you do not agree in the end.' },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Both photos show people who are travelling.', why: 'A simple way to introduce two photos.' },
            { a: 'It looks as if they are enjoying themselves.', why: '*It looks as if* + clause: a guess based on what you see.' },
            { a: 'What do you think about this idea?', why: 'Ask your partner for their opinion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Text: “The project was abandoned.” Which statement matches?', o: ['The project was stopped.', 'The project was finished successfully.', 'The project was delayed.'], why: '*Abandon* means stop doing something before it is finished.' },
      { q: 'In a listening task, a speaker says “at four, sorry, five o’clock”. What is the answer?', o: ['five o’clock', 'four o’clock', 'both times'], why: '*Sorry* introduces the correction.' },
      { q: 'How can you compare two photos in a long turn?', o: ['In the first photo…, whereas in the second…', 'The first photo. The second photo.', 'I like the photos.'], why: '*Whereas* links the two photos and shows the contrast.' },
      { q: 'You need a few seconds to think in the speaking test. What do you say?', o: ['That’s an interesting question. Let me think.', 'Next question, please.', 'I don’t know.'], why: 'A short phrase gives you time without ending your answer.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Each sentence has one mistake. Tap it.', items: [
      { s: 'The number of cars [have] increased.', why: '*The number of* takes a singular verb: *has increased*.' },
      { s: 'She is very [interesting] in politics.', why: 'People are *interested in* something.' },
      { s: 'I have lived here [since] three years.', why: '*For* + a period of time: *for three years*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'They ___ be students, but I’m not sure.', a: ['might', 'may', 'could'], why: '*Might*, *may* or *could*: a guess.' },
      { q: 'Before a listening gap fill, predict the ___ of word you need.', a: ['type', 'kind', 'sort'], why: 'A number, a name, a noun: knowing the type helps you listen.' },
      { q: 'So, shall we ___ which option is best?', a: ['decide', 'discuss', 'choose'], why: '*Shall we decide…?* invites your partner to reach an answer together.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'It looks as if she is tired.', why: '*It looks as if* + clause.' },
      { a: 'Both photos show people working.', why: 'An opening for a long turn.' },
    ] },
  ],
};
