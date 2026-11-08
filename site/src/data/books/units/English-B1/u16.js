// English B1, unit 16, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// The last unit of B1: wishes, the B1 Preliminary email (Writing Part 1), choosing tenses in a text, and the whole
// B1 Preliminary exam step by step, with a look ahead to B2.
export const UNIT = {
  id: 'u16',
  title: 'Ready for B1 and beyond',
  goal: 'Talk about wishes, write a clear email, choose the right tense in a text, and know every part of the B1 Preliminary exam before you go on to B2.',
  art: 'dragon',
  tags: { skills: ['grammar', 'writing', 'reading', 'speaking', 'listening'], topics: ['wish', 'if-only', 'email', 'tenses', 'exam'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I wish I had more time',
      about: 'Talk about wishes for the present with I wish and If only + the past simple.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Use **I wish** to talk about something you would like to be different **now**, but that is not true: *I live in a small flat. **I wish I lived** in a house with a garden.*\n\nThe important point: after **wish**, the verb goes **one step back into the past**, even though you are talking about now. *I don’t have a car* → ***I wish I had** a car.* *I can’t sing* → ***I wish I could** sing.* The past form shows that the wish is not real.\n\nThis is the same idea as the second conditional you learned in unit 8: *If I **had** a car, I **would** drive to work.*' },
          { t: 'table', caption: 'From fact to wish', explain: ['head'], head: ['The fact now', 'The wish'], rows: [
            ['I don’t have enough time.', 'I wish I had more time.'],
            ['I can’t speak Japanese.', 'I wish I could speak Japanese.'],
            ['My job is boring.', 'I wish my job was more interesting.'],
            ['It’s raining.', 'I wish it wasn’t raining.'],
            ['I have to work on Saturdays.', 'I wish I didn’t have to work on Saturdays.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **I wish**, many people say **were** for every person in careful English: *I wish I **were** taller.* In everyday speech **was** is also correct: *I wish I **was** taller.* In the exam both are accepted.' },
        ],
        [
          { t: 'text', md: '**If only** means the same as **I wish**, but it is stronger and more emotional: ***If only** I lived closer to my family!* It often stands alone, like an exclamation.\n\nTo wish that **another person** would change their behaviour, which annoys you, use **wish + would**: *I wish my neighbour **would** turn the music down.* This is a complaint, so you do not use it about yourself.\n\nTo talk about a wish that can come true, use **hope**, not *wish*: *I **hope** you pass the exam.* (Not *I wish you pass the exam.*)' },
          { t: 'examples', items: [
            { s: 'I **wish** I **knew** the answer.', n: 'Present wish: *know → knew*.' },
            { s: '**If only** I **could** go home for the holidays!', n: 'A strong, emotional wish.' },
            { s: 'I **wish** my brother **would** stop borrowing my clothes.', n: '*wish + would*: someone else’s annoying behaviour.' },
            { s: 'I **hope** you **have** a great trip.', n: 'Something that can happen: *hope*, with a normal tense.' },
            { s: 'She **wishes** she **didn’t** live so far from the city.', n: 'Negative wish: *didn’t* + base form.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I wish I have a car.', 'I wish I had a car.', 'After *wish*, go one step into the past.'],
            ['I wish I can swim.', 'I wish I could swim.', '*can → could* after *wish*.'],
            ['I wish you pass your exam.', 'I hope you pass your exam.', 'For something possible, use *hope*.'],
            ['I wish I would be taller.', 'I wish I was / were taller.', '*wish + would* is only for other people’s behaviour.'],
          ] },
          { t: 'dialogue', title: 'The last week of the course', lines: [
            { who: 'Marta', s: 'I can’t believe the course is nearly finished.' },
            { who: 'Kemal', s: 'I know. I wish it was longer. I’ve learned so much.' },
            { who: 'Marta', s: 'Me too. But I wish I had more time to study at home.' },
            { who: 'Kemal', s: 'If only we didn’t have to work full time!' },
            { who: 'Marta', s: 'Are you going to take the B1 exam in June?' },
            { who: 'Kemal', s: 'Yes. I hope I pass. And I hope you pass too!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'I live far from the sea. I wish I ___ closer to it.', o: ['lived', 'live', 'would live'], why: 'Present wish: one step into the past, *lived*.' },
            { q: 'I can’t play the guitar. I wish I ___ play it.', o: ['could', 'can', 'would'], why: '*can → could*.' },
            { q: 'Good luck tomorrow! I ___ you get the job.', o: ['hope', 'wish', 'would'], why: 'Something possible: *hope*.' },
            { q: 'I wish my flatmate ___ wash his dishes.', o: ['would', 'will', 'can'], why: 'Another person’s annoying behaviour: *wish + would*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write a wish about each fact.', items: [
            { q: 'I don’t have a bike.', cue: 'I wish', a: ['I wish I had a bike.'], why: '*don’t have → had*.' },
            { q: 'I can’t understand this film.', cue: 'I wish', a: ['I wish I could understand this film.'], why: '*can’t → could*.' },
            { q: 'It’s so cold today.', cue: 'I wish', a: ['I wish it wasn’t so cold today.', 'I wish it weren’t so cold today.'], why: '*is → wasn’t / weren’t*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I wish I [know] her phone number.', a: ['knew'], why: '*know → knew* after *wish*.' },
            { s: 'I [wish] you have a lovely holiday.', a: ['hope'], why: 'A possible future: *hope*.' },
            { s: 'If only I [can] stay longer!', a: ['could'], why: '*can → could* after *if only*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 6): choose the word that fits each gap.', items: [
            { q: 'I really like my new flat, but I wish it ___ a bit bigger.', o: ['was', 'is', 'be'], why: 'Present wish: *was*.' },
            { q: 'If ___ I had a garden, I could grow my own vegetables.', o: ['only', 'just', 'even'], why: 'The phrase is *if only*.' },
            { q: 'Anyway, I hope you ___ come and visit me soon!', o: ['can', 'could', 'would'], why: 'After *hope*, a normal present: *can*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 6** you read a short text with six gaps and write **one word** in each gap; there are no options in the real exam. The missing words are usually small grammar words: *if, only, was, could, the, which, have*. Read the whole sentence, then ask which word the grammar needs.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I wish I had more free time.' },
            { a: 'If only I could speak five languages!' },
            { a: 'I hope you have a great weekend.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Writing an email',
      about: 'Write a clear email that answers every point, as in B1 Preliminary Writing Part 1.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In **Writing Part 1** of B1 Preliminary you read an email from a friend, a teacher or a company, with **four notes** next to it. You write a reply of **about 100 words** that answers all four notes. It is worth half of the writing marks, and the examiner checks three things: did you answer **every** note, is your email clear and well organised, and is your English correct and varied?\n\nA good plan has four parts: a **greeting** and a friendly first line; **one short paragraph for each note** (you can join two short notes in one paragraph); a **closing sentence**; and a **signature**.' },
          { t: 'table', caption: 'Useful phrases for an email', explain: ['head', 'col0'], head: ['Part', 'Phrases'], rows: [
            ['start', 'Hi Anna, / Dear Mr Hill, / Thanks for your email. / It was great to hear from you.'],
            ['answer a question', 'You asked me about… / To answer your question, …'],
            ['suggest', 'Why don’t we…? / How about…? / I think it would be better to…'],
            ['give a reason', 'because…, so…, That’s why…'],
            ['finish', 'I can’t wait to see you. / Let me know what you think. / Write soon!'],
            ['sign off', 'Best wishes, / Love, / Kind regards,'],
          ] },
          { t: 'tip', art: 'owl', md: 'Match the **style** to the person. To a friend, write *Hi Tom* and use short forms (*I’m, can’t*). To a teacher or a company, write *Dear Ms Clark* and use full forms and *Kind regards*. Mixing the two styles loses marks.' },
        ],
        [
          { t: 'text', md: 'Read the task and a model answer. The four notes were: **Say which day is best for you**, **Suggest a place to eat**, **Tell Sam what you want to do in the afternoon**, and **Ask about the weather**. Notice how the answer covers each note, one by one, and uses different structures: *would prefer*, *how about*, *I’d love to*, a question.' },
          { t: 'reading', title: 'Model answer: a day out with Sam', md: 'Hi Sam,\n\nThanks for your email. A day out sounds great!\n\nSaturday is better for me, because I work on Sundays at the moment.\n\nFor lunch, how about the Italian café near the station? The pizzas there are amazing and it isn’t expensive.\n\nIn the afternoon I’d love to visit the castle. I’ve never been inside, and I’ve heard the views from the tower are fantastic.\n\nBy the way, what’s the weather going to be like? If it rains, we could go to the museum instead.\n\nI can’t wait to see you!\n\nBest wishes,\nAlex' },
        ],
        [
          { t: 'table', caption: 'Common mistakes in the email', explain: ['head', 'col0', 'col2'], head: ['Problem', 'Example', 'Better'], rows: [
            ['one note is missing', 'The email forgets the weather.', 'Tick each note when you have answered it.'],
            ['too short or too long', '50 words, or 200 words', 'Aim for about 100 words.'],
            ['only very simple sentences', 'I like pizza. It is good. It is cheap.', 'The pizzas are amazing and it isn’t expensive.'],
            ['wrong style', 'Dear Sam, Kind regards (to a friend)', 'Hi Sam, Best wishes'],
          ] },
          { t: 'ex', kind: 'match', h: 'Match each note to the sentence in the model answer.', pairs: [
            ['Say which day is best.', 'Saturday is better for me.'],
            ['Suggest a place to eat.', 'How about the Italian café?'],
            ['Say what you want to do.', 'I’d love to visit the castle.'],
            ['Ask about the weather.', 'What’s the weather going to be like?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best phrase for the email.', items: [
            { q: 'To your teacher: “___ Ms Clark,”', o: ['Dear', 'Hi', 'Hey'], why: 'A teacher: formal, *Dear*.' },
            { q: 'To a friend: “___ we meet at the station at ten?”', o: ['Why don’t', 'How about', 'What about'], why: '*Why don’t we* + base form; *How about* needs *-ing*.' },
            { q: 'To a friend, at the end: “I can’t wait to ___ you!”', o: ['see', 'seeing', 'saw'], why: '*can’t wait to* + base form.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for an email.', items: [
            { a: 'Thanks for your email about the party.', why: 'A friendly first line.' },
            { a: 'How about meeting at the café on Friday?', why: '*How about* + *-ing*.' },
            { a: 'Let me know what you think.', why: 'A closing line.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Writing Part 1): which sentence answers the note best?', items: [
            { q: 'Note: “Tell me what food to bring.”', o: ['Could you bring some fruit? Everyone loves it after a long walk.', 'I like food very much.', 'The party is on Saturday.'], why: 'It answers the note and gives a reason.' },
            { q: 'Note: “Ask about the time.”', o: ['What time does the concert start?', 'The concert is great.', 'I will come to the concert.'], why: 'The note asks you to ask a question.' },
            { q: 'Note: “Say why you can’t come on Monday.”', o: ['I can’t come on Monday because I have an exam.', 'Monday is a day of the week.', 'I can come on Monday.'], why: 'It gives the reason the note asks for.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Before you write, spend **two minutes** planning: write the four notes as four short lines and add one idea to each. After you write, spend **two minutes** checking: one tick for each note, then look for your typical mistakes. This plan is the easiest way to get good marks in Part 1.' },
          { t: 'ex', kind: 'speak', h: 'Read these email sentences aloud after the tutor.', tutor: 'kofi', items: [
            { a: 'Thanks for your email. It was great to hear from you.' },
            { a: 'Why don’t we meet at the station at ten?' },
            { a: 'Let me know what you think.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'All the tenses together',
      about: 'Choose the right tense in a text: present, past, perfect and future forms side by side.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B1 you know many tenses. The difficult part is not each tense alone, but **choosing** between them in a real text. Ask yourself two questions: **When?** (past, present, future) and **What kind of action?** (a habit, something in progress, a finished event, a result now, a plan).\n\nThe table brings together the tenses you have learned in A2 and B1, with the question each one answers.' },
          { t: 'table', caption: 'Which tense?', explain: ['head', 'col0', 'col1'], head: ['Tense', 'Use it for', 'Example'], rows: [
            ['present simple', 'habits and facts', 'I work in a hospital.'],
            ['present continuous', 'now, or a fixed plan', 'I’m studying for my exam. / I’m flying on Friday.'],
            ['past simple', 'finished actions, finished time', 'I moved to Madrid in 2019.'],
            ['past continuous', 'background in a story', 'It was raining when I arrived.'],
            ['past perfect', 'earlier than another past action', 'The film had started when we got there.'],
            ['present perfect', 'past with a result now, or unfinished time', 'I’ve lived here for five years.'],
            ['present perfect continuous', 'an activity from the past until now', 'I’ve been learning English since 2023.'],
            ['going to / will', 'plans and predictions; decisions now', 'I’m going to apply. / I’ll help you.'],
          ] },
        ],
        [
          { t: 'text', md: 'Look for **signal words**: they often tell you the tense. *Yesterday, last year, in 2019, ago* → past simple. *For, since, ever, never, just, already, yet* → present perfect. *While, when* in a story → past continuous for the background. *By the time, before* → often past perfect. *Usually, every day* → present simple. *Tomorrow, next week* → a future form.\n\nBut signal words are a help, not a rule: always think about the meaning of the whole sentence.' },
          { t: 'examples', items: [
            { s: 'I **started** this course two years **ago**.', n: '*ago* → past simple.' },
            { s: 'I**’ve been** to London three times.', n: 'Experience, no time given → present perfect.' },
            { s: 'I **was cooking** when the phone **rang**.', n: 'Background + short action.' },
            { s: 'By the time we **arrived**, the train **had left**.', n: 'Earlier past → past perfect.' },
            { s: 'I**’ve been studying** all morning, so I’m tired.', n: 'Activity until now, with a result.' },
            { s: 'Look at those clouds. It**’s going to** rain.', n: 'A prediction from what you can see.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have seen her yesterday.', 'I saw her yesterday.', '*yesterday* is finished time: past simple.'],
            ['I live here since 2020.', 'I’ve lived here since 2020.', '*since* + until now: present perfect.'],
            ['When I arrived, the film already started.', 'When I arrived, the film had already started.', 'Earlier than *arrived*: past perfect.'],
            ['I’m going to answer the door!', 'I’ll answer the door!', 'A decision at the moment: *will*.'],
          ] },
          { t: 'reading', title: 'My English journey', md: 'I started learning English three years ago, when I moved to Dublin for work. At first I couldn’t understand anything. One day I was buying bread when the shop assistant asked me a question, and I just smiled because I hadn’t understood a word!\n\nSince then I’ve made a lot of progress. I’ve been taking classes twice a week for two years, and I’ve read four books in English. Now I usually speak English at work without any problems.\n\nNext June I’m going to take the B1 Preliminary exam. My teacher thinks I’ll pass. After that, I’m planning to start B2.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right tense for the text.', items: [
            { q: 'I ___ English three years ago.', o: ['started learning', 'have started learning', 'had started learning'], why: '*ago* → past simple.' },
            { q: 'One day I ___ bread when the assistant asked me a question.', o: ['was buying', 'bought', 'have bought'], why: 'Background action in a story: past continuous.' },
            { q: 'Since then I ___ a lot of progress.', o: ['’ve made', 'made', 'make'], why: '*since then* until now: present perfect.' },
            { q: 'Next June I ___ take the B1 Preliminary exam.', o: ['’m going to', 'took', 'have taken'], why: 'A plan: *going to*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'I ___ (live) in this flat since 2021.', a: ['have lived', '’ve lived', 'have been living', '’ve been living'], why: '*since* + until now.' },
            { q: 'When we got to the cinema, the film ___ (already start).', a: ['had already started'], why: 'Earlier than *got*: past perfect.' },
            { q: 'Don’t worry about the bags. I ___ (carry) them.', a: ['will carry', '’ll carry'], why: 'An offer decided now: *will*.' },
            { q: 'She ___ (work) in a bank. She goes there every day.', a: ['works'], why: 'A habit, now: present simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [have met] my best friend in 2015.', a: ['met'], why: '*in 2015* is finished time.' },
            { s: 'She [is working] here for ten years.', a: ['has worked', 'has been working'], why: '*for ten years* until now: present perfect.' },
            { s: 'While I [walked] home, I saw an accident.', a: ['was walking'], why: 'Background action with *while*: past continuous.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 5): choose the best word for each gap.', items: [
            { q: 'My grandmother ___ in the same village all her life, and she still loves it.', o: ['has lived', 'lived', 'was living'], why: 'Her whole life until now: present perfect.' },
            { q: 'Last summer we ___ a week in the mountains.', o: ['spent', 'have spent', 'had spent'], why: '*Last summer*: past simple.' },
            { q: 'I was tired because I ___ all night.', o: ['hadn’t slept', 'haven’t slept', 'don’t sleep'], why: 'Earlier than *was tired*: past perfect.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the exam, **don’t choose a tense by looking at one word**. Read the whole sentence, and the sentence before it: the time of the story tells you the tense. A text about last summer will be mostly in the past; a text about your life until now will use the present perfect.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I started learning English three years ago.' },
            { a: 'I’ve been taking classes for two years.' },
            { a: 'Next year I’m going to start B2.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The B1 exam, step by step',
      about: 'Know every part of the B1 Preliminary exam, how to prepare, and what comes next at B2.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Congratulations: you have reached the end of B1. This lesson shows you the **whole B1 Preliminary exam**, so that nothing is a surprise on the day. The exam has **four papers**: Reading, Writing, Listening and Speaking. Each paper is worth **25%** of the final mark.\n\nYou don’t need a perfect score. To pass at B1 you need about **70%** overall, and a weaker paper can be balanced by a stronger one. So prepare all four papers, and practise in the real time limits.' },
          { t: 'table', caption: 'The four papers', explain: ['head', 'col0', 'col1', 'col2'], head: ['Paper', 'Time', 'What you do'], rows: [
            ['Reading', '45 minutes', 'six parts: short messages, matching people to texts, a long text, a gapped text, two cloze texts'],
            ['Writing', '45 minutes', 'Part 1: an email of about 100 words; Part 2: an article or a story of about 100 words'],
            ['Listening', 'about 30 minutes', 'four parts: short recordings, a talk, a conversation, an interview; you hear each one twice'],
            ['Speaking', '12 to 17 minutes', 'with another candidate: questions about you, a photo, a discussion, a conversation'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the **Writing** paper you choose **either** an article **or** a story in Part 2. Choose the one with clearer ideas for you, not the one that looks shorter. You learned the story in unit 9 and the article in unit 14.' },
        ],
        [
          { t: 'text', md: 'The **Speaking** test is done in pairs, with two examiners. One asks the questions; the other only listens and gives marks. In **Part 1** you answer questions about yourself. In **Part 2** you describe a photo for about a minute. In **Part 3** you discuss a situation with your partner, using some pictures. In **Part 4** the examiner asks both of you more general questions about the same topic.\n\nThe examiners don’t only check grammar. They also check how well you **keep talking**, how you **take turns** with your partner, and your **pronunciation**. Listen to your partner, react to what they say, and ask them questions: *What do you think? I agree, but…*' },
          { t: 'dialogue', title: 'Speaking Part 3: planning a class trip', lines: [
            { who: 'Marta', s: 'Shall we start with the museum? I think it would be interesting for everyone.' },
            { who: 'Kemal', s: 'Maybe, but some students might find it a bit boring. What about the beach?' },
            { who: 'Marta', s: 'That’s a good idea in summer, but what if it rains?' },
            { who: 'Kemal', s: 'True. So which do you think is the best choice?' },
            { who: 'Marta', s: 'I think the cooking class. Everyone can take part, and it doesn’t depend on the weather.' },
            { who: 'Kemal', s: 'I agree. Let’s choose the cooking class.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes on exam day', explain: ['head', 'col0', 'col1'], head: ['Mistake', 'Do this instead'], rows: [
            ['spending too long on one hard question', 'mark it, move on, come back at the end'],
            ['leaving answers empty', 'always guess: an empty answer gets no marks'],
            ['answering only “yes” or “no” in Speaking', 'give a reason or an example every time'],
            ['not reading the writing task carefully', 'underline each point and tick it when it is done'],
          ] },
          { t: 'reading', title: 'After B1: what comes next?', md: 'At B1 you can deal with most everyday situations: you can travel, talk about your experiences, write a clear email and follow the main ideas of a conversation.\n\nAt B2 you will go further. You will understand longer and more complex texts, follow films and the news, take part in discussions and defend your opinion, and write well-organised essays and reports. You will also learn more advanced grammar: the third conditional, more passive forms, modal verbs in the past, and many more phrasal verbs and collocations.\n\nThe B2 exam is called B2 First. Many universities and employers ask for it, so it is a very useful certificate. With the same steady work, two classes a week and a little practice every day, you can get there.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'True, false or not given?', ng: true, items: [
            { q: 'Each of the four papers is worth the same part of the final mark.', a: 't', why: '*Each paper is worth 25%*.' },
            { q: 'In Writing Part 2 you must write both an article and a story.', a: 'f', why: 'You choose **either** an article **or** a story.' },
            { q: 'In the Speaking test you work with another candidate.', a: 't', why: '*The Speaking test is done in pairs.*' },
            { q: 'The B1 Preliminary exam is only offered in June.', a: 'ng', why: 'The texts do not say when the exam is offered.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the exam part to what you do.', pairs: [
            ['Writing Part 1', 'an email of about 100 words'],
            ['Speaking Part 2', 'describe a photo'],
            ['Speaking Part 3', 'discuss a situation with your partner'],
            ['Reading Part 6', 'write one word in each gap'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Speaking Part 3): choose the best thing to say to your partner.', items: [
            { q: 'Your partner says: “I think the museum is the best choice.”', o: ['Maybe, but some people might find it boring. What do you think about the cinema?', 'Museum.', 'Yes.'], why: 'React, give a reason and ask your partner a question.' },
            { q: 'You want to bring your partner into the discussion.', o: ['What do you think?', 'Be quiet, please.', 'I don’t know.'], why: 'Asking your partner shows you can take turns.' },
            { q: 'You want to finish the discussion with a decision.', o: ['So, shall we choose the cooking class?', 'The end.', 'I’m tired.'], why: 'Part 3 ends with you and your partner agreeing.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 3** there is no right answer. The examiner wants to hear you **suggest, agree, disagree politely and decide** together. Use phrases like *Shall we…?*, *What about…?*, *I see what you mean, but…* and *So, shall we choose…?*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Shall we start with the museum?' },
            { a: 'I see what you mean, but I think the beach is better.' },
            { a: 'So, shall we choose the cooking class?' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
      { q: 'I don’t have a car. I wish I ___ one.', o: ['had', 'have', 'would have'], why: 'Present wish: *had*.' },
      { q: 'Good luck! I ___ you win the match.', o: ['hope', 'wish', 'would'], why: 'Something possible: *hope*.' },
      { q: 'I wish my neighbours ___ so much noise.', o: ['wouldn’t make', 'don’t make', 'won’t make'], why: 'Other people’s behaviour: *wish + would*.' },
      { q: 'To your teacher: “___ Mr Hill,”', o: ['Dear', 'Hi', 'Hey'], why: 'Formal email: *Dear*.' },
      { q: 'By the time we arrived, the shop ___.', o: ['had closed', 'has closed', 'closes'], why: 'Earlier past: past perfect.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'I wish I ___ (can) sing.', a: ['could'], why: '*can → could* after *wish*.' },
      { q: 'I ___ (know) Tom for ten years. We met at school.', a: ['have known', '’ve known'], why: '*for ten years* until now.' },
      { q: 'We ___ (watch) TV when the lights went out.', a: ['were watching'], why: 'Background action: past continuous.' },
      { q: 'I moved to Rome two years ___.', a: ['ago'], why: '*two years ago* + past simple.' },
      { q: 'If ___ I lived nearer the sea!', a: ['only'], why: '*if only*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I wish I [am] taller.', a: ['was', 'were'], why: 'After *wish*: *was / were*.' },
      { s: 'I [have bought] this jacket last week.', a: ['bought'], why: '*last week*: past simple.' },
      { s: 'She [lives] in Paris since 2018.', a: ['has lived', 'has been living'], why: '*since* + until now.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'I can’t drive.', cue: 'I wish', a: ['I wish I could drive.'], why: '*can’t → could*.' },
      { q: 'It’s a pity I don’t speak French.', cue: 'I wish', a: ['I wish I spoke French.', 'I wish I could speak French.'], why: '*don’t speak → spoke*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the best phrase for the email.', items: [
      { q: 'To a friend: “___ meeting at the café?”', o: ['How about', 'Why don’t', 'Shall'], why: '*How about* + *-ing*.' },
      { q: 'To a company: “I look forward to ___ from you.”', o: ['hearing', 'hear', 'heard'], why: '*look forward to* + *-ing*.' },
      { q: 'At the end, to a friend: “Best ___,”', o: ['wishes', 'regards', 'Dear'], why: '*Best wishes* for a friend.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the exam paper to what you do.', pairs: [
      ['Reading', 'six parts with short and long texts'],
      ['Writing', 'an email and an article or a story'],
      ['Listening', 'four parts, each heard twice'],
      ['Speaking', 'questions, a photo and a discussion in pairs'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I’ve been learning English for three years.', why: 'Present perfect continuous: activity until now.' },
      { a: 'Why don’t we meet at the station?', why: '*Why don’t we* + base form.' },
    ] },
  ],
};
