// English B1, unit 1, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Builds on A2 unit 8 (Have you ever…?, been or gone): the present perfect in more depth, against the past simple,
// with for, since, just, already, yet, and the present perfect continuous; then a life story.
export const UNIT = {
  id: 'u1',
  title: 'Life stories',
  goal: 'Talk about your experiences and the big moments in your life, and say how long things have been true, with the present perfect, the present perfect continuous and the past simple.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['present-perfect', 'past-simple', 'present-perfect-continuous', 'life-events'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Experiences: have you ever…?',
      about: 'Talk about life experiences with the present perfect, with ever, never, before, and It’s the first time.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At A2 you met the present perfect in questions like *Have you ever been to Spain?* At B1 you use it with more control. Remember the idea: the present perfect connects the past to **now**. When we talk about **experiences**, we mean *at any time in my life up to now*. We do not say when, because the time is not important: what matters is that it happened.\n\nThe form is **have / has + past participle**: *I have tried, she has seen, we have never eaten.* With regular verbs the participle is the same as the past simple (*tried*). With irregular verbs you need the third form: *see – saw – **seen**, eat – ate – **eaten**, write – wrote – **written***.' },
          { t: 'table', caption: 'The present perfect for experiences', explain: ['head'], head: ['', 'Example'], rows: [
            ['positive', 'I’ve worked in a hotel.'],
            ['negative', 'She hasn’t flown before.'],
            ['never', 'We’ve never seen snow.'],
            ['question', 'Have you ever lived abroad?'],
            ['short answers', 'Yes, I have. / No, I haven’t.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **ever** only in questions (and after superlatives, see the next page). In a positive sentence, say *I’ve been to Rome*, not *I’ve ever been to Rome*. For the negative, choose one: *I’ve **never** been* or *I **haven’t** been*, never both.' },
        ],
        [
          { t: 'text', md: 'Three useful patterns make your English sound natural when you talk about experiences.\n\nAfter a **superlative**, use the present perfect with **ever**: *It’s the best film I’ve ever seen. She’s the kindest person I’ve ever met.*\n\nAfter **It’s the first / second time**, use the present perfect, not the present simple: *It’s the first time I’ve driven on the left.*\n\n**Before** at the end of a sentence means *at any time before now*: *Have you done this before? I’ve never eaten sushi before.*' },
          { t: 'examples', items: [
            { s: 'This is the **hardest exam I’ve ever taken**.', n: 'Superlative + present perfect + *ever*.' },
            { s: 'It’s **the first time I’ve stayed** in a hostel.', n: 'Not *It’s the first time I stay*.' },
            { s: '**Have** you **ever been** on television? – No, never!', n: 'A short answer with *never* is fine in speech.' },
            { s: 'My grandmother **has visited** forty countries.', n: 'Her life is not finished: the number can still grow.' },
            { s: 'I **haven’t read** that book **before**.', n: '*before* at the end.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’ve ever been to Paris.', 'I’ve been to Paris.', '*ever* belongs in questions and after superlatives.'],
            ['It’s the first time I eat this.', 'It’s the first time I’ve eaten this.', 'After *It’s the first time*, use the present perfect.'],
            ['I’ve never not seen it.', 'I’ve never seen it.', 'One negative is enough.'],
            ['Have you ever saw a whale?', 'Have you ever seen a whale?', 'Use the past participle after *have*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A first time', lines: [
            { who: 'Grace', s: 'You look nervous. Have you ever done a job interview in English before?' },
            { who: 'Karim', s: 'No, never. It’s the first time I’ve had an interview in another language.' },
            { who: 'Grace', s: 'Don’t worry. I’ve done three, and the first one was the worst.' },
            { who: 'Karim', s: 'Really? What happened?' },
            { who: 'Grace', s: 'I forgot the name of the company! It was the most embarrassing moment I’ve ever had.' },
            { who: 'Karim', s: 'Well, I’ve written the name on my hand, just in case.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'It’s the best pizza I ___.', o: ['’ve ever eaten', 'ever ate', '’ve never eaten'], why: 'After a superlative: present perfect + *ever*.' },
            { q: 'It’s the first time she ___ a plane.', o: ['has taken', 'takes', 'is taking'], why: 'After *It’s the first time*: present perfect.' },
            { q: 'Have you ever ___ a horse?', o: ['ridden', 'rode', 'ride'], why: '*have* + past participle: *ridden*.' },
            { q: 'I ___ tried Ethiopian food before.', o: ['’ve never', '’ve ever', 'never have'], why: 'Use *never* in a positive-form sentence with a negative meaning.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the past participle.', verb: 'irregular verbs', tense: 'past participle', rows: [
            ['see', 'seen'],
            ['write', 'written'],
            ['fly', 'flown'],
            ['take', 'taken'],
            ['meet', 'met'],
            ['win', 'won'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'I’ve [ever] climbed a mountain.', a: ['never', 'once'], why: '*ever* does not go in a positive statement. Say *never* (or *once*).' },
            { s: 'It’s the first time I [visit] this museum.', a: ['’ve visited', 'have visited'], why: 'After *It’s the first time*, use the present perfect.' },
            { s: 'Have you ever [went] to a concert?', a: ['been'], why: 'The participle of *go* for experiences is *been*.' },
            { s: 'That’s the funniest thing I [ever heard].', a: ['’ve ever heard', 'have ever heard'], why: 'After a superlative: present perfect + *ever*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Speaking, Part 1): choose the best answer to the examiner’s question.', items: [
            { q: 'Examiner: “Have you ever studied another language apart from English?”', o: ['Yes, I have. I studied French at school for three years, but I’ve forgotten most of it.', 'Yes, I study.', 'I have studied English.'], why: 'A good Part 1 answer says *yes or no*, then adds a reason or a detail.' },
            { q: 'Examiner: “What’s the most interesting place you’ve ever visited?”', o: ['Probably Istanbul. I went there two years ago and I loved the markets.', 'Istanbul is interesting.', 'I have visited.'], why: 'Answer the question, then give a short extra detail in the past simple.' },
            { q: 'Examiner: “Is this the first time you’ve taken an English exam?”', o: ['No, it isn’t. I took the A2 Key exam last year.', 'No, I don’t.', 'Yes, first.'], why: 'A short answer that matches the question (*No, it isn’t*), plus a detail.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Speaking Part 1 the examiner asks simple questions about you. Never answer with just *yes* or *no*. Add **one more sentence**: a reason, an example or a time. Two sentences per answer is the target.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I’ve never been to Japan, but I’d love to go.' },
            { a: 'It’s the first time I’ve done this.' },
            { a: 'That’s the best book I’ve ever read.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Finished or not finished?',
      about: 'Choose between the present perfect and the past simple by asking one question: is the time finished?',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Choosing between the present perfect and the past simple is one of the most important skills at B1. Many languages use one tense for both ideas, so learners mix them up. The key question is: **is the time period finished or not?**\n\nUse the **past simple** when the time is finished, or when you say **when** something happened: *yesterday, last year, in 2015, two days ago, when I was a child.* *I **saw** Tom yesterday.*\n\nUse the **present perfect** when the time period is **not finished** (*today, this week, this year, in my life*) or when no time is given: *I**’ve seen** Tom three times this week.*' },
          { t: 'table', caption: 'Finished time or unfinished time?', explain: ['head'], head: ['Past simple: finished', 'Present perfect: not finished'], rows: [
            ['I saw her yesterday.', 'I’ve seen her today.'],
            ['We went to Italy last summer.', 'We’ve been to Italy twice.'],
            ['He wrote two books in 2020.', 'He’s written five books so far.'],
            ['Did you call her last night?', 'Have you called her yet?'],
          ] },
          { t: 'tip', art: 'owl', md: '**This morning** can be both. At 10 a.m. the morning is not finished: *I’ve drunk three coffees this morning.* At 4 p.m. it is finished: *I drank three coffees this morning.*' },
        ],
        [
          { t: 'text', md: 'A very common pattern in conversation: we **start** with the present perfect to introduce a general fact or piece of news, and then **change** to the past simple when we give details: where, when, how.\n\n*I**’ve been** to Morocco. I **went** there in 2019 and **stayed** in Fez for a week.*\n\nThe first sentence answers *Has it happened?* The others answer *When? Where? How?* and so they need the past simple. The same is true for questions: *Have you ever met anyone famous? – Yes! Who **did** you meet? Where **was** it?*' },
          { t: 'examples', items: [
            { s: 'I**’ve lost** my phone. I **left** it on the bus this morning.', n: 'News first, then the detail.' },
            { s: '**Have** you **seen** the new film? – Yes, I **saw** it on Saturday.', n: 'The answer gives a finished time.' },
            { s: 'She**’s lived** here since May.', n: 'She still lives here: not finished.' },
            { s: 'She **lived** in Lisbon for two years.', n: 'She doesn’t live there now: finished.' },
            { s: 'When **did** you **start** this job?', n: 'A question with *When?* always needs the past simple.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I’ve seen him yesterday.', 'I saw him yesterday.', '*yesterday* is finished time.'],
            ['When have you arrived?', 'When did you arrive?', '*When?* asks for a finished time.'],
            ['I live here since 2020.', 'I’ve lived here since 2020.', 'From the past to now: present perfect.'],
            ['Did you ever eat snails?', 'Have you ever eaten snails?', 'For life experiences, use the present perfect.'],
          ] },
        ],
        [
          { t: 'reading', title: 'A message from Ana', md: 'Hi Lucas! You won’t believe what’s happened. I’ve got a new job! I had the interview last Thursday and they phoned me yesterday with the good news.\n\nIt’s at a design company in the city centre. I’ve never worked for a big company before, so I’m a bit nervous. I start on Monday.\n\nHow about you? Have you finished your course yet? We haven’t seen each other since your birthday party. Let’s meet next week!' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read Ana’s message. Are the sentences true, false or not given?', items: [
            { q: 'Ana had her job interview last week.', a: 't', why: '*I had the interview last Thursday.*' },
            { q: 'Ana has worked for a big company before.', a: 'f', why: '*I’ve never worked for a big company before.*' },
            { q: 'The company makes furniture.', a: 'ng', why: 'It is a design company, but the message does not say what it designs.' },
            { q: 'Ana and Lucas saw each other at his birthday party.', a: 't', why: '*We haven’t seen each other since your birthday party.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the past simple or the present perfect.', items: [
            { q: 'I ___ (finish) my report. Here it is.', a: ['have finished', '’ve finished', 've finished'], why: 'News with a result now, no time given: present perfect.' },
            { q: 'We ___ (move) to Manchester in 2018.', a: ['moved'], why: '*in 2018* is finished time: past simple.' },
            { q: 'How many emails ___ you sent today?', a: ['have'], why: '*today* is not finished: present perfect, *have you sent*.' },
            { q: 'My brother ___ (break) his leg when he was ten.', a: ['broke'], why: '*when he was ten* is finished time.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: '“Have you ever been to Egypt?” – “Yes, I ___ there two years ago.”', o: ['went', '’ve been', 'have gone'], why: 'The answer gives a finished time: *two years ago*.' },
            { q: 'She ___ three cups of coffee so far today.', o: ['’s had', 'had', 'has having'], why: '*so far today*: up to now.' },
            { q: '___ the meeting start on time yesterday?', o: ['Did', 'Has', 'Have'], why: '*yesterday*: past simple question with *did*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 5): choose the right word for each gap in the text.', items: [
            { q: 'My uncle ___ in the same village all his life, and he still loves it.', o: ['has lived', 'lived', 'was living', 'lives'], why: '*all his life* and *still*: from the past up to now.' },
            { q: 'He ___ his first shop in 1985, when he was only twenty.', o: ['opened', 'has opened', 'opens', 'had opened'], why: '*in 1985*: finished time.' },
            { q: 'Since then, he ___ three more shops in nearby towns.', o: ['has opened', 'opened', 'opens', 'is opening'], why: '*Since then*: from 1985 up to now.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading Part 5 is a short text with gaps and four options. Look for **time words** around the gap: *since, so far, ever, yet* point to the present perfect; *in 1985, ago, last, when* point to the past simple. Read the whole sentence before you choose.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I’ve been to Morocco. I went there in 2019.' },
            { a: 'When did you start this job?' },
            { a: 'She’s lived here since May.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'How long? Since, for, just, yet',
      about: 'Say how long something has been true with for and since, give news with just, already and yet, and use the present perfect continuous.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To say **how long** something has been true up to now, use the present perfect with **for** or **since**.\n\n**For** + a period of time: *for ten minutes, for three years, for a long time, for ages.*\n\n**Since** + a point in time, the moment it started: *since Monday, since 2015, since I was a child, since lunchtime.*\n\nThe question is **How long have you…?** *How long have you known Maria? – I’ve known her for twenty years / since we were at school.*' },
          { t: 'table', caption: 'For or since?', explain: ['head'], head: ['for (a period)', 'since (a starting point)'], rows: [
            ['for two hours', 'since nine o’clock'],
            ['for six months', 'since March'],
            ['for ten years', 'since 2016'],
            ['for a long time', 'since I left school'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many learners say *I live here for five years*. In English, if the situation started in the past and is still true now, you need the present perfect: *I**’ve lived** here for five years.* The present simple *I live here* only says what is true now.' },
        ],
        [
          { t: 'text', md: 'Three small words help you give **news** with the present perfect.\n\n**Just** means *a very short time ago*. It goes between *have* and the participle: *I’ve **just** finished. The film has **just** started.*\n\n**Already** means *before now, maybe earlier than expected*. It also goes in the middle: *I’ve **already** paid. She’s **already** left.*\n\n**Yet** means *up to now* and is used in **questions and negatives**. It goes at the **end**: *Have you finished **yet**? I haven’t decided **yet**.*' },
          { t: 'examples', items: [
            { s: 'Sorry, Mr Lee has **just** gone out.', n: 'A moment ago.' },
            { s: 'Don’t buy milk. I’ve **already** bought some.', n: 'Before now: no need to do it.' },
            { s: 'Has the parcel arrived **yet**?', n: 'A question: *yet* at the end.' },
            { s: 'I haven’t seen the new series **yet**.', n: 'A negative: *yet* at the end.' },
          ] },
          { t: 'text', md: 'When an activity started in the past and is **still going on**, and we want to show that it is continuous or long, we use the **present perfect continuous**: **have / has been + -ing**. *I**’ve been learning** English for six years. It**’s been raining** since this morning. How long **have** you **been waiting**?*\n\nWith verbs that do not describe actions, like **know, like, have** (possession) or **be**, keep the simple form: *I’ve known her for years*, not *I’ve been knowing her*.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I work here since 2019.', 'I’ve worked here since 2019.', 'Started in the past and still true: present perfect.'],
            ['I’ve lived here since five years.', 'I’ve lived here for five years.', 'A period of time needs *for*.'],
            ['I’ve finished yet.', 'I’ve already finished.', '*yet* is for questions and negatives.'],
            ['I’ve been knowing him for years.', 'I’ve known him for years.', '*know* does not take the continuous.'],
          ] },
          { t: 'dialogue', title: 'Catching up', lines: [
            { who: 'Sam', s: 'Mia! I haven’t seen you for ages. How long have you been back?' },
            { who: 'Mia', s: 'I’ve just got back, actually. My plane landed this morning.' },
            { who: 'Sam', s: 'And how was Canada? You’ve been living there since January, right?' },
            { who: 'Mia', s: 'Yes, and I’ve already decided to go back. I love it.' },
            { who: 'Sam', s: 'Have you found a flat there yet?' },
            { who: 'Mia', s: 'Not yet. I’ve been looking for weeks, but it’s hard.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'For or since?', groups: ['for', 'since'], items: [
            { s: 'three weeks', g: 0, why: 'A period of time.' },
            { s: 'last Friday', g: 1, why: 'A starting point.' },
            { s: 'I was born', g: 1, why: 'A starting point (a moment).' },
            { s: 'a few days', g: 0, why: 'A period of time.' },
            { s: '2010', g: 1, why: 'A starting point.' },
            { s: 'ages', g: 0, why: 'A (long) period of time.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write just, already or yet.', items: [
            { q: 'Have you booked the tickets ___?', a: ['yet'], why: 'A question: *yet* at the end.' },
            { q: 'Quick, turn on the TV! The match has ___ started.', a: ['just'], why: 'A moment ago.' },
            { q: 'No, thanks, I’ve ___ eaten.', a: ['already'], why: 'Before now, so I don’t need to eat.' },
            { q: 'The results haven’t come out ___.', a: ['yet'], why: 'A negative: *yet* at the end.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the present perfect continuous and the word given.', items: [
            { q: 'I started waiting at six o’clock. I’m still waiting.', cue: 'since', a: ['I’ve been waiting since six o’clock.', 'I have been waiting since six o’clock.'], why: 'Started in the past, still going on: *have been + -ing* + *since*.' },
            { q: 'They started building the bridge two years ago. They are still building it.', cue: 'for', a: ['They’ve been building the bridge for two years.', 'They have been building the bridge for two years.'], why: 'A period: *for two years*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 1): read the message and choose what it says.', items: [
            { q: 'Note on the office door: “Mr Patel has just gone to lunch. He’ll be back at 2 p.m. If your matter is urgent, please call reception.”', o: ['Mr Patel left the office a short time ago.', 'Mr Patel has been at lunch all morning.', 'Mr Patel doesn’t want any visitors today.'], why: '*has just gone* means a short time ago.' },
            { q: 'Text message: “Haven’t heard from the landlord yet about the repair. I’ve been calling him since Monday!”', o: ['The writer is still waiting for an answer from the landlord.', 'The landlord has already repaired the problem.', 'The writer called the landlord for the first time on Monday and he answered.'], why: '*haven’t heard … yet* and *I’ve been calling since Monday*: no answer up to now.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading Part 1 has five short texts: notes, signs, messages. Each has three options that say almost the same thing. Underline the **time words** (*just, yet, since, already*) in the text: they often decide the answer.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'I’ve been learning English for six years.' },
            { a: 'Have you found a flat yet?' },
            { a: 'I’ve just got back from Canada.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A life in three cities',
      about: 'Learn the words for the big moments of a life, read a life story, and write a short one of your own.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When people tell their life story, they use a set of fixed phrases for the big moments. Many of them are **collocations**: words that go together, like *get married* (not *become married*) or *have a baby*. Learning them as blocks will make your stories sound natural.' },
          { t: 'table', caption: 'The big moments of a life', explain: ['head', 'col1'], head: ['Phrase', 'Meaning'], rows: [
            ['be born', 'start your life (always passive: I was born)'],
            ['grow up', 'go from child to adult'],
            ['leave school', 'finish school'],
            ['get a degree', 'finish university'],
            ['get a job / lose a job', 'start / stop working somewhere'],
            ['fall in love', 'start to love someone'],
            ['get married / get divorced', 'start / end a marriage'],
            ['have a baby', 'become a parent'],
            ['move house / move abroad', 'go to live in a new home / country'],
            ['retire', 'stop working because of age'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **I was born in 1990**, never *I am born* or *I born*. And it is **get married to** someone, not *get married with*: *She got married to a doctor.*' },
        ],
        [
          { t: 'reading', title: 'A life in three cities', md: 'Rosa Medina was born in Valencia in 1958. She grew up above her parents’ bakery and left school at sixteen to help in the shop.\n\nIn 1979 she moved to London to learn English. She meant to stay for six months, but she fell in love with a musician called Daniel and got married to him two years later. They had two children and opened a small Spanish café.\n\nWhen Daniel retired in 2015, they moved to Montreal, where their daughter lives. Rosa has lived there for nine years now. She has learned French, she has started painting, and she has never been happier.\n\n“I’ve lived in three cities and I’ve had three lives,” she says. “But I’ve always baked bread. Some things never change.”' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read Rosa’s story. True, false or not given?', items: [
            { q: 'Rosa finished university in Valencia.', a: 'f', why: 'She left school at sixteen to work in the bakery.' },
            { q: 'She planned to stay in London for a short time.', a: 't', why: '*She meant to stay for six months.*' },
            { q: 'Daniel played the guitar.', a: 'ng', why: 'He was a musician, but the text does not say which instrument.' },
            { q: 'Rosa still lives in Montreal.', a: 't', why: '*Rosa has lived there for nine years now.*' },
            { q: 'Rosa stopped baking when she moved to Canada.', a: 'f', why: '*I’ve always baked bread.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
            ['She was born', 'in a small village.'],
            ['They fell', 'in love on holiday.'],
            ['He got married', 'to his best friend.'],
            ['We moved', 'abroad when I was twelve.'],
            ['My grandfather retired', 'at sixty-five.'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [am born] in Lima in 1995.', a: ['was born'], why: '*be born* is always in the past: *I was born*.' },
            { s: 'She got married [with] a teacher.', a: ['to'], why: '*get married to* someone.' },
            { s: 'They [became] a baby last year.', a: ['had'], why: 'The collocation is *have a baby*.' },
            { s: 'He [has retired] in 2010.', a: ['retired'], why: '*in 2010* is finished time: past simple.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now plan your own short life story, or the story of someone in your family. Use the **past simple** for the events with dates (*I was born…, I moved…*), and finish with the **present perfect** to connect the story to now (*I’ve lived here for…, I’ve always…, I’ve never…*). This is exactly how Rosa’s story is built.' },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for a life story.', items: [
            { a: 'I grew up in a small town by the sea.', why: 'Subject, verb, then where.' },
            { a: 'Since then I have lived in three countries.', why: '*Since then* starts the sentence; present perfect up to now.' },
            { a: 'I have always wanted to write a book.', why: '*always* goes between *have* and the participle.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'She has worked as a nurse for twenty years.', extra: ['since', 'did'], why: 'A period of time: *for twenty years*.' },
            { a: 'They moved to Canada when their son was born.', extra: ['have', 'since'], why: 'A finished event with *when*: past simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 4): choose the sentence that fits each gap in the text about a famous chef.', items: [
            { q: 'Kofi Asante grew up in Accra, in a family of seven. ___ He was cooking for the whole family by the age of twelve.', o: ['His mother taught him to cook when he was very young.', 'He has opened four restaurants since 2010.', 'Today he lives in London with his wife.'], why: 'The next sentence (*by the age of twelve*) continues the idea of learning young.' },
            { q: 'In 2005 he moved to London and got a job washing dishes. ___ Two years later, he was the head chef.', o: ['The owner soon noticed how fast he learned.', 'He was born in 1984.', 'He has never liked fast food.'], why: 'The gap explains how he went from dishes to head chef.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading Part 4 removes five sentences from a text. Read the sentence **before and after** each gap: the missing sentence must connect them. Check time words and pronouns (*he, this, then*), because they link one sentence to the next.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I was born in a small town and grew up by the sea.' },
            { a: 'She got married to a musician two years later.' },
            { a: 'I’ve lived in three cities and I’ve had three lives.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'It’s the most beautiful beach I ___.', o: ['’ve ever seen', 'ever saw', '’ve never seen'], why: 'Superlative + present perfect + *ever*.' },
      { q: 'It’s the first time I ___ a speech.', o: ['’ve given', 'give', 'gave'], why: 'After *It’s the first time*: present perfect.' },
      { q: 'We ___ to Paris three years ago.', o: ['went', '’ve been', 'have gone'], why: '*three years ago*: finished time.' },
      { q: 'How long ___ you known your best friend?', o: ['have', 'did', 'are'], why: '*How long have you…?* up to now.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write for, since, just, already or yet.', items: [
      { q: 'I’ve had this car ___ 2018.', a: ['since'], why: 'A starting point.' },
      { q: 'They’ve been friends ___ twenty years.', a: ['for'], why: 'A period of time.' },
      { q: 'Have you replied to her email ___?', a: ['yet'], why: 'A question: *yet* at the end.' },
      { q: 'You’re too late: the bus has ___ left.', a: ['just', 'already'], why: 'A moment ago (*just*) or before now (*already*).' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [have seen] her last weekend.', a: ['saw'], why: '*last weekend* is finished time.' },
      { s: 'She [lives] in Rome since 2020.', a: ['has lived', '’s lived'], why: 'From 2020 up to now: present perfect.' },
      { s: '[I’ve been knowing] Tom for ages.', a: ['I’ve known', 'I have known'], why: '*know* does not take the continuous.' },
      { s: 'When [have you met] your wife?', a: ['did you meet'], why: '*When?* needs the past simple.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'I started working here in 2021, and I still work here.', cue: 'since', a: ['I’ve worked here since 2021.', 'I have worked here since 2021.', 'I’ve been working here since 2021.', 'I have been working here since 2021.'], why: 'From 2021 up to now: present perfect (simple or continuous) + *since*.' },
      { q: 'I have never eaten Korean food before.', cue: 'first', a: ['It’s the first time I’ve eaten Korean food.', 'It is the first time I have eaten Korean food.'], why: '*It’s the first time* + present perfect.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
      ['She fell', 'in love with him at university.'],
      ['They got', 'married in 2010.'],
      ['He grew', 'up on a farm.'],
      ['I left', 'school at eighteen.'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: '“Have you ever been to Japan?”', o: ['Yes, I went there in 2019 for a friend’s wedding.', 'Yes, I have gone there in 2019.', 'Yes, I go there.'], why: 'Present perfect question, past simple detail with a finished time.' },
      { q: '“How long have you been learning English?”', o: ['For about six years.', 'Since six years.', 'Six years ago.'], why: 'A period of time: *for*.' },
    ] },
  ],
};
