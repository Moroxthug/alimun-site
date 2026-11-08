// English B1, unit 8, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u8',
  title: 'Looking ahead',
  goal: 'Choose the right future form, imagine situations that are not real, talk about your hopes and plans, and read about other people’s future.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['future-forms', 'second-conditional', 'hopes-plans'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Will, going to or the present continuous?',
      about: 'Choose between will, going to and the present continuous to talk about the future.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'English has no single future tense. Instead, it has three common ways to talk about the future, and each one says something a little different about **how sure you are** and **when you decided**.\n\n**Going to** + verb is for a **plan or intention**: you decided before you speak. *I’m going to look for a new job this year.* It is also for a **prediction from what you can see now**: *Look at those clouds. It’s going to rain.*\n\nThe **present continuous** (*am/is/are* + -ing) is for an **arrangement**: a plan with a time, a place and usually other people. If it is in your diary, use it. *I’m meeting Sara at six. We’re flying to Rome on Friday.*\n\n**Will** + verb is for a **decision at the moment of speaking**, an **offer** or a **promise**, and a **prediction from opinion**, often with *I think*, *probably*, *I’m sure*. *I’ll answer it! I’ll help you with that. I think it will be a good year.*' },
          { t: 'table', caption: 'Three ways to talk about the future', explain: ['head', 'col1'], head: ['Form', 'Use it for', 'Example'], rows: [
            ['going to', 'a plan you already had; a prediction from evidence', 'I’m going to study medicine.'],
            ['present continuous', 'an arrangement with a time or place', 'I’m seeing the dentist tomorrow.'],
            ['will', 'a decision now, an offer, a promise, an opinion', 'I’ll carry that for you.'],
          ] },
          { t: 'tip', art: 'owl', md: 'A simple test: if you could write it in your calendar, use the **present continuous**. If it is in your head but not booked, use **going to**. If you decide while you are talking, use **will**.' },
        ],
        [
          { t: 'text', md: 'Listen to how the choice changes the meaning in small conversations. Notice that **will** often appears as **’ll** when people speak, and **won’t** is the negative of *will*.' },
          { t: 'examples', items: [
            { s: 'The phone’s ringing. – **I’ll get** it.', n: 'Decided right now: *will*.' },
            { s: '**I’m going to paint** the kitchen this weekend.', n: 'A plan from before: *going to*.' },
            { s: '**We’re having** a party on Saturday. Can you come?', n: 'Arranged, with a date: present continuous.' },
            { s: 'Be careful! That glass **is going to fall**.', n: 'You can see it: *going to*.' },
            { s: 'I **think** prices **will go up** next year.', n: 'An opinion about the future: *will*.' },
            { s: 'Don’t worry, I **won’t tell** anyone.', n: 'A promise: *won’t*.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I will meet Tom at 7, we booked a table.', 'I’m meeting Tom at 7.', 'An arrangement: present continuous.'],
            ['– It’s cold. – I’m going to close the window.', '– It’s cold. – I’ll close the window.', 'Decided now: *will*.'],
            ['I will to call you later.', 'I’ll call you later.', '*will* + base verb, no *to*.'],
            ['It will rain, look at the sky!', 'It’s going to rain, look at the sky!', 'Evidence you can see: *going to*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Plans for the weekend', lines: [
            { who: 'Emma', s: 'Are you doing anything on Saturday?' },
            { who: 'Karim', s: 'Yes, I’m playing football in the morning. We’ve got a match at ten.' },
            { who: 'Emma', s: 'And in the afternoon?' },
            { who: 'Karim', s: 'Nothing special. I’m going to clean my flat, I think.' },
            { who: 'Emma', s: 'Some of us are going to the lake. Do you want to come?' },
            { who: 'Karim', s: 'That sounds better than cleaning! OK, I’ll come. I’ll bring some drinks.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
            { q: '“I haven’t got any money.” – “Don’t worry, I ___ you some.”', o: ['’ll lend', '’m lending', '’m going to lend'], why: 'An offer decided now: *will*.' },
            { q: 'My sister ___ married in June. The invitations are ready.', o: ['is getting', 'will get', 'gets'], why: 'A fixed arrangement with a date: present continuous.' },
            { q: 'Look at that driver! He ___ crash!', o: ['is going to', 'will', 'is'], why: 'Evidence you can see now: *going to*.' },
            { q: 'I’ve decided. I ___ learn to drive this summer.', o: ['am going to', '’ll', 'am learning to'], why: 'A plan you have made: *going to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 5): choose the right word for each gap in this message.', items: [
            { q: 'Hi Lena! Guess what? I ___ to Canada next month. I booked the flight yesterday!', o: ['’m flying', '’ll fly', 'fly'], why: 'Booked, with a date: present continuous.' },
            { q: 'I think it ___ be an amazing trip.', o: ['will', 'is going', 'is'], why: 'An opinion with *I think*: *will*.' },
            { q: 'I’m ___ to visit my cousins in Toronto first.', o: ['going', 'will', 'go'], why: '*be going to* + verb for a plan.' },
            { q: 'Don’t worry, I ___ forget your present!', o: ['won’t', 'don’t', 'am not going'], why: 'A promise: *won’t*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 5 the gap can test grammar as well as words. Look at what comes **after** the gap: *to* + verb means *going* fits; a base verb means *will* or *won’t* fits; a time phrase like *next month* with a booking points to the present continuous.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I’m meeting my brother at the station at six.' },
            { a: 'I’m going to look for a new job this year.' },
            { a: 'Don’t worry, I’ll help you with that.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'If I had more time…',
      about: 'Use the second conditional to talk about situations that are not real or not likely.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In unit 4 you used the **first conditional** for real possibilities: *If it rains, we’ll stay at home.* It could really happen.\n\nThe **second conditional** is for situations that are **not real now** or **not likely**: you are imagining. *If I **had** more time, I **would learn** the guitar.* (But I don’t have more time.) *If I **won** the lottery, I **would travel** round the world.* (But I probably won’t win.)\n\nThe form is **If + past simple, would + base verb**. The past simple here does not mean the past: it means *not real*. The two halves can change places, with no comma: *I would travel round the world if I won the lottery.*' },
          { t: 'table', caption: 'First or second conditional?', explain: ['head', 'col1'], head: ['Conditional', 'Meaning', 'Example'], rows: [
            ['First: If + present, will', 'possible, real', 'If I finish early, I’ll call you.'],
            ['Second: If + past, would', 'imagined, not real now', 'If I lived by the sea, I’d swim every day.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With **be**, careful English uses **were** for every person: *If I **were** you, I’d take the job. If she **were** here, she’d know.* In everyday speech you will also hear *If I was*, but **If I were you** is a fixed phrase for advice.' },
        ],
        [
          { t: 'text', md: 'The second conditional is very useful in conversation: to give advice (*If I were you…*), to talk about dreams, and to explain why you can’t do something (*If I had a car, I’d drive you home*, so: I’m sorry, I can’t). **Would** is often short: **I’d**, **you’d**, **she’d**. The negative is **wouldn’t**. You can use **could** instead of *would* to mean *would be able to*.' },
          { t: 'examples', items: [
            { s: 'If I **were** you, I**’d** ask for a pay rise.', n: 'Advice.' },
            { s: 'If we **didn’t have** the kids, we**’d** go out more.', n: 'A situation that is not real now.' },
            { s: 'She **would** be happier if she **lived** closer to work.', n: 'The *if* part can come second.' },
            { s: 'If I **spoke** Chinese, I **could** apply for that job.', n: '*could* = would be able to.' },
            { s: 'What **would** you do if you **lost** your phone?', n: 'A question: *What would you do if…?*' },
            { s: 'I **wouldn’t** live there if you **paid** me!', n: 'A strong *no*.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['If I would have money, I would buy it.', 'If I had money, I would buy it.', 'No *would* in the *if* part.'],
            ['If I had time, I will help you.', 'If I had time, I would help you.', 'Second conditional: *would*.'],
            ['If I am you, I would go.', 'If I were you, I would go.', 'Not real: past form, *were*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Dream jobs', lines: [
            { who: 'Ravi', s: 'What would you do if you didn’t have to work?' },
            { who: 'Clara', s: 'I’d open a little bookshop by the sea.' },
            { who: 'Ravi', s: 'Would you make any money?' },
            { who: 'Clara', s: 'Probably not! But I’d be happy. What about you?' },
            { who: 'Ravi', s: 'If I had the money, I’d travel for a year. But I’ve got a mortgage, so…' },
            { who: 'Clara', s: 'If I were you, I’d start with a long holiday!' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'If I ___ (have) a garden, I would grow vegetables.', a: ['had'], why: '*If* + past simple.' },
            { q: 'If she knew the answer, she ___ (tell) us.', a: ['would tell', '’d tell'], why: '*would* + base verb.' },
            { q: 'If I ___ (be) you, I would say sorry.', a: ['were', 'was'], why: '*If I were you* (also *was* in everyday speech).' },
            { q: 'We ___ (not / live) here if we didn’t like it.', a: ['wouldn’t live', 'would not live'], why: 'Negative: *wouldn’t* + base verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write a second conditional sentence.', items: [
            { q: 'I don’t have a car, so I can’t drive you home.', cue: 'If I had a car', a: ['If I had a car, I could drive you home.', 'If I had a car, I would drive you home.', 'If I had a car I could drive you home.'], why: 'Not real now: *If + past, could/would*.' },
            { q: 'He doesn’t speak French, so he doesn’t understand the film.', cue: 'If he spoke French', a: ['If he spoke French, he would understand the film.', 'If he spoke French, he’d understand the film.', 'If he spoke French he would understand the film.'], why: '*If* + past simple, *would* + base verb.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading Part 6): write one word in each gap.', items: [
            { q: 'If I won a lot of money, I ___ buy a house for my parents.', a: ['would', 'could'], why: 'Second conditional: *would* (or *could*).' },
            { q: 'What would you do ___ you met a famous person?', a: ['if'], why: 'The condition: *if*.' },
            { q: 'If I ___ you, I would take the job.', a: ['were', 'was'], why: '*If I were you* for advice.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 6 many gaps are small grammar words: *if, would, were, will, to*. When you see *If* + past verb earlier in the sentence, the missing word in the other half is very often *would*.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'If I had more time, I’d learn the piano.' },
            { a: 'If I were you, I’d talk to your boss.' },
            { a: 'What would you do if you lost your keys?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Hopes and plans',
      about: 'Talk about what you hope, plan and would like to do, and write an email about your plans.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Many verbs about the future are followed by **to** + base verb: **hope to**, **plan to**, **want to**, **would like to**, **intend to**, **decide to**, **expect to**. *I hope to finish my course in June. We’re planning to move next year.*\n\n**Look forward to** is different, and it is one of the most common mistakes in English. Here **to** is a preposition, so it is followed by a **noun** or an **-ing** form: *I’m looking forward **to the holidays**. I’m looking forward **to seeing** you.* Never *to see you*.\n\n**Hope** can also be followed by a sentence: *I **hope** you **have** a great time* (present simple, with a future meaning) or *I hope it will be sunny*.' },
          { t: 'table', caption: 'Verb + what?', explain: ['head', 'col1'], head: ['Verb', 'Followed by', 'Example'], rows: [
            ['hope / plan / want / would like', 'to + base verb', 'I’d like to study abroad.'],
            ['look forward to', 'noun or -ing', 'I look forward to hearing from you.'],
            ['hope', 'a sentence', 'I hope you like it.'],
            ['be thinking of / about', '-ing', 'We’re thinking of buying a car.'],
          ] },
          { t: 'tip', art: 'owl', md: '**I look forward to hearing from you** is the usual way to end a formal email. In a friendly message say **I’m looking forward to seeing you!** or just **Can’t wait to see you!**' },
        ],
        [
          { t: 'examples', items: [
            { s: 'I **hope to** get a better job next year.', n: '*hope to* + base verb.' },
            { s: 'We’re **planning to** visit Japan in the spring.', n: '*plan to* + base verb.' },
            { s: 'I’m **looking forward to starting** my new course.', n: '*look forward to* + -ing.' },
            { s: 'She’s **thinking of moving** to the coast.', n: '*thinking of* + -ing: not decided yet.' },
            { s: 'I**’d love to** see your new flat.', n: '*would love to*: stronger than *would like to*.' },
            { s: 'I **hope** you **enjoy** the concert.', n: '*hope* + sentence, present simple.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I look forward to see you.', 'I look forward to seeing you.', '*to* here is a preposition: -ing.'],
            ['I hope seeing you soon.', 'I hope to see you soon.', '*hope to* + base verb.'],
            ['We are thinking to buy a house.', 'We are thinking of buying a house.', '*thinking of* + -ing.'],
          ] },
        ],
        [
          { t: 'text', md: 'Here is an email from a friend, and a good reply. In the B1 Preliminary exam (Writing Part 1) you read an email with **notes** on it, and you write a reply of about **100 words** that answers **every** note.' },
          { t: 'reading', title: 'Email from Jo', md: 'Hi! I heard you finished your course. Congratulations! What are you planning to do next? [*Tell Jo*] Are you staying in the city or moving? [*Explain*] I’m visiting your town in May. Shall we meet? [*Yes, suggest when*]\n\nLove, Jo' },
          { t: 'reading', title: 'Reply', md: 'Hi Jo,\n\nThanks for your message! Yes, I finished last week and I’m really happy. Next, I’m planning to look for a job in a hotel, because I’d like to use my English every day.\n\nI’m staying here for now. My flat is cheap and I love the area, so I don’t want to move yet.\n\nOf course we should meet in May! I’m free most weekends, so how about Saturday the 14th? We could have lunch by the river. I’m really looking forward to seeing you!\n\nLove,\nSam' },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Writing Part 1): which sentence would answer Jo’s note “Yes, suggest when”?', items: [
            { q: '', o: ['Let’s meet on Friday the 13th after work.', 'I’m going to stay in the city.', 'I hope you have a good trip.'], why: 'It says yes and gives a day: it answers the note.' },
            { q: '', o: ['I’m looking forward to seeing you in May.', 'I’m looking forward to see you in May.', 'I look forward see you in May.'], why: '*look forward to* + -ing.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Writing Part 1 you lose marks if you forget a note. Before you write, number the notes in your head, and write at least one sentence for each. Then check: greeting, all the notes, a friendly ending.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'I’m looking forward ___ my family at Christmas.', o: ['to seeing', 'to see', 'seeing'], why: '*look forward to* + -ing.' },
            { q: 'We hope ___ a house with a garden one day.', o: ['to buy', 'buying', 'buy'], why: '*hope to* + base verb.' },
            { q: 'They’re thinking ___ a new car.', o: ['of getting', 'to get', 'get'], why: '*thinking of* + -ing.' },
            { q: 'I hope you ___ a lovely holiday.', o: ['have', 'to have', 'having'], why: '*hope* + sentence: *you have*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'I look forward to hearing from you.', extra: ['hear', 'for'], why: 'Fixed phrase: *look forward to hearing*.' },
            { a: 'We are planning to move next year.', extra: ['moving', 'of'], why: '*plan to* + base verb.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I’m planning to look for a new job.' },
            { a: 'We’re thinking of moving to the coast.' },
            { a: 'I’m really looking forward to seeing you.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Ten years from now',
      about: 'Read four young people talking about their future, and use all the future language of the unit.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'A magazine asked four people in their twenties: *Where do you think you’ll be in ten years?* Read their answers. Notice which future forms they use, and why.' },
          { t: 'reading', title: 'Where will you be in ten years?', md: '**Nadia, 22.** I’m starting a nursing course in September, and it lasts three years. After that I’m going to work in a big hospital. In ten years I hope to be a senior nurse, maybe in children’s medicine.\n\n**Jonas, 25.** Honestly, I have no idea! I like my job in a bank, but if I had the courage, I’d leave and become a chef. Maybe I’ll do it one day. I think I’ll probably still be in Berlin.\n\n**Mei, 27.** My partner and I are getting married next summer, and we’re planning to buy a small house outside the city. In ten years I’d like to have two children and my own design studio.\n\n**Tariq, 24.** I’m going to travel first. I’ve saved for two years, and I’m leaving in March. I want to see South America and Asia. I’m sure I’ll come back with a lot of stories, and then I’ll think about a career.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'In the format of the B1 Preliminary exam (Reading Part 2): match each person to what they say.', pairs: [
            ['Nadia', 'has already started planning her studies'],
            ['Jonas', 'imagines a different job but is not sure he will change'],
            ['Mei', 'has a wedding arranged'],
            ['Tariq', 'wants to see the world before choosing a career'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 2 several texts look similar. Each description has two or three details, and only one text matches **all** of them. Underline the details in the question, then find each one in the text.' },
          { t: 'ex', kind: 'tf', h: 'Are the sentences true, false or not given?', ng: true, items: [
            { q: 'Nadia’s course starts next year.', a: 'f', why: 'It starts in September (this year).' },
            { q: 'Jonas has decided to become a chef.', a: 'f', why: '*if I had the courage, I’d…*: he has not decided.' },
            { q: 'Mei already owns a house.', a: 'f', why: 'They are *planning to buy* one.' },
            { q: 'Tariq has bought his plane ticket.', a: 'ng', why: 'He is leaving in March, but the text does not mention a ticket.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Why does each person use that form?', items: [
            { q: 'Nadia: “I’m starting a nursing course in September.”', o: ['It is arranged, with a date.', 'She decided while speaking.', 'It is not real.'], why: 'Present continuous for an arrangement.' },
            { q: 'Jonas: “If I had the courage, I’d leave.”', o: ['He is imagining something that is not real now.', 'It is a firm plan.', 'It is a promise.'], why: 'Second conditional: imagined.' },
            { q: 'Tariq: “I’m sure I’ll come back with a lot of stories.”', o: ['It is a prediction from his opinion.', 'It is an arrangement.', 'He can see evidence now.'], why: '*I’m sure* + *will*: opinion.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'In ten years I hope to have my own business.' },
            { a: 'If I had the courage, I’d change my job.' },
            { a: 'I think I’ll probably still live in this city.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
      { q: 'I ___ my grandmother on Sunday. We’ve already bought the train tickets.', o: ['’m visiting', '’ll visit', 'visit'], why: 'Arranged: present continuous.' },
      { q: '“There’s no milk.” – “I ___ some on my way home.”', o: ['’ll get', '’m getting', 'get'], why: 'Decided now: *will*.' },
      { q: 'If I had a bigger flat, I ___ a party.', o: ['would have', 'will have', 'have'], why: 'Second conditional: *would*.' },
      { q: 'I’m looking forward ___ from you.', o: ['to hearing', 'to hear', 'hearing'], why: '*look forward to* + -ing.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'If I ___ you, I wouldn’t buy that car.', a: ['were', 'was'], why: '*If I were you* for advice.' },
      { q: 'We’re planning ___ move in the summer.', a: ['to'], why: '*plan to* + base verb.' },
      { q: 'Look at the time! We ___ going to miss the bus.', a: ['are', '’re'], why: '*be going to* for a prediction from evidence.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'If I [would have] more time, I would read more.', a: ['had'], why: 'No *would* in the *if* part.' },
      { s: 'I hope [seeing] you soon.', a: ['to see'], why: '*hope to* + base verb.' },
      { s: 'They are thinking [to buy] a dog.', a: ['of buying', 'about buying'], why: '*thinking of* + -ing.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'I don’t know her number, so I can’t call her.', cue: 'If I knew her number', a: ['If I knew her number, I would call her.', 'If I knew her number, I could call her.', 'If I knew her number, I’d call her.'], why: 'Second conditional.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
      { q: '“What would you do if you won a million euros?”', o: ['I’d buy a house for my parents.', 'I’ll buy a house for my parents.', 'I buy a house for my parents.'], why: 'An imagined situation: *would*.' },
      { q: '“Are you doing anything tonight?”', o: ['Yes, I’m meeting some friends at eight.', 'Yes, I meet some friends.', 'Yes, I would meet some friends.'], why: 'An arrangement: present continuous.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I would travel more if I had money.', why: '*would* part first, then *if* + past, no comma.' },
      { a: 'We are getting married next year.', why: 'An arrangement: present continuous.' },
    ] },
  ],
};
