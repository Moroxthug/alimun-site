// English B1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Looking ahead',
  goal: 'Talk about the future, your hopes and plans, and imaginary situations.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['future-forms', 'second-conditional', 'hopes-plans'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Will, going to or the present continuous?',
      about: 'Choose the right form to talk about the future.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'English has several ways to talk about the future. The choice depends on **what** you want to say, not on how far away the future is.' },
          { t: 'table', caption: 'Three future forms', explain: ['head', 'col1'], head: ['Form', 'Use', 'Example'], rows: [
            ['will', 'a decision you make now, an offer, a promise, an opinion about the future', 'I**’ll** have the soup, please. I think it **will** be sunny tomorrow.'],
            ['going to', 'a plan you made before; a prediction from what you can see now', 'I**’m going to** study medicine. Look at the sky. It**’s going to** rain.'],
            ['present continuous', 'an arrangement with a time and other people, often in your calendar', 'I**’m meeting** Ravi at six.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'A: There’s no milk. B: I**’ll** get some.', n: 'B decides now, while speaking: *will*.' },
            { s: 'I**’m going to** look for a new job this year.', n: 'A plan. The person has already decided.' },
            { s: 'We**’re flying** to Nairobi on Friday.', n: 'An arrangement: the tickets are booked. *Going to* is also possible here.' },
          ] },
          { t: 'tip', art: 'owl', md: 'For a plan you made before, *going to* is more natural than *will*. If a friend asks about your weekend, say *I’m going to paint my flat.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: 'A: The phone’s ringing. B: OK, I ___ answer it.', o: ['will', 'am', 'going to'], why: 'A decision made at the moment of speaking: *will*.' },
            { q: 'Look at those dark clouds. It ___ rain.', o: ['is going to', 'goes to', 'is raining to'], why: 'A prediction from what we can see now: *is going to*.' },
            { q: 'I ___ the dentist at four tomorrow. It’s in my calendar.', o: ['am seeing', 'see', 'will to see'], why: 'An arrangement with a time: the present continuous.' },
            { q: 'We’ve saved enough money. We ___ buy a car next year.', o: ['are going to', 'go to', 'are buying to'], why: 'A plan we decided before: *are going to* + verb.' },
            { q: 'I promise I ___ tell anyone your secret.', o: ['won’t', 'am not', 'don’t going to'], why: 'A promise: *will* or *won’t*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Plans for the weekend', lines: [
            { who: 'Kemal', s: 'Are you doing anything this weekend?' },
            { who: 'Hana', s: 'Yes, I’m visiting my aunt on Saturday. She’s cooking lunch for the whole family.' },
            { who: 'Kemal', s: 'Nice. And on Sunday?' },
            { who: 'Hana', s: 'I’m going to clean my flat. It’s a mess! What about you?' },
            { who: 'Kemal', s: 'Nothing yet. Maybe I’ll go to the cinema.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Hana has an arrangement with her aunt on Saturday.', a: 't', why: '*I’m visiting my aunt on Saturday*: the present continuous for an arrangement.' },
            { q: 'Hana’s aunt is taking the family to a restaurant.', a: 'f', why: 'Her aunt is cooking lunch.' },
            { q: 'Hana has already decided to clean her flat on Sunday.', a: 't', why: '*I’m going to clean my flat*: a plan.' },
            { q: 'Kemal made plans for the weekend a long time ago.', a: 'f', why: 'He has no plans. *Maybe I’ll…* is an idea he has now.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a future form of the verb in brackets.', items: [
            { q: 'A: I’m cold. B: Wait, I ___ (close) the window.', a: ['’ll close', 'will close'], why: 'An offer, decided now: *will*.' },
            { q: 'Lucia ___ (start) her new job on Monday. She signed the contract last week.', a: ['is starting', '’s starting', 'is going to start', '’s going to start', 'starts'], why: 'It is arranged: the present continuous is the most natural form.' },
            { q: 'I’m sure you ___ (love) the new flat.', a: ['will love', '’ll love', 'are going to love', '’re going to love'], why: 'An opinion about the future after *I’m sure*: usually *will*.' },
            { q: 'We ___ (have) a party on Saturday. Can you come?', a: ['are having', '’re having', 'are going to have', '’re going to have'], why: 'An arrangement: the present continuous, or *going to*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'If I had more time…',
      about: 'Talk about imaginary situations with the second conditional.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'Use the **second conditional** for situations that are imaginary or unlikely, now or in the future. The *if* part uses the **past simple**, but it does not talk about the past.' },
          { t: 'table', caption: 'The second conditional', explain: ['head'], head: ['If + past simple', 'would / wouldn’t + verb'], rows: [
            ['If I **had** more time,', 'I **would learn** the guitar.'],
            ['If she **lived** nearer,', 'we**’d see** her more often.'],
            ['If they **didn’t work** so much,', 'they **wouldn’t be** so tired.'],
          ] },
          { t: 'text', md: 'You can also start with the *would* part: *I would learn the guitar if I had more time.* Then there is no comma. Instead of *would*, you can use *could* (= would be able to).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'If I **won** the lottery, I**’d buy** a house by the sea.', n: 'Very unlikely, so the second conditional.' },
            { s: 'If I **were** you, I**’d** talk to your manager.', n: '*If I were you* gives advice. *Were* is correct for all persons; *was* is also common in everyday speech.' },
            { s: 'What **would** you **do** if you **lost** your passport?', n: 'A question about an imaginary situation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Compare: *If I have time, I’ll call you* (first conditional: real and possible). *If I had time, I’d call you* (second conditional: but I do not have time). Never put *would* in the *if* part.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'If I ___ a car, I would drive to work.', o: ['had', 'have', 'would have'], why: 'The *if* part takes the past simple.' },
            { q: 'If she spoke Spanish, she ___ apply for the job in Madrid.', o: ['could', 'can', 'will'], why: 'The result part: *would* or *could* + verb.' },
            { q: 'What would you do if you ___ a famous actor in the street?', o: ['met', 'meet', 'would meet'], why: 'The *if* part: past simple, *met*.' },
            { q: 'If I were you, I ___ take that job.', o: ['would', 'will', 'am'], why: '*If I were you, I would…* gives advice.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
            { q: 'If I ___ (live) in the countryside, I would get a dog.', a: ['lived'], why: 'The *if* part: past simple.' },
            { q: 'We ___ (travel) more if flights were cheaper.', a: ['would travel', '’d travel'], why: 'The result part: *would* + verb.' },
            { q: 'If he ___ (not / work) at weekends, he could visit his family more.', a: ['didn’t work', 'did not work'], why: 'A negative past simple in the *if* part.' },
            { q: 'I ___ (not / say) that if I were you.', a: ['wouldn’t say', 'would not say'], why: 'The result part: *wouldn’t* + verb.' },
            { q: 'If you ___ (can) live anywhere in the world, where would you go?', a: ['could'], why: 'The past of *can* is *could*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['If I lived by the sea,', 'I would swim every morning.'],
            ['If I spoke Japanese,', 'I could work in Tokyo.'],
            ['If she had a car,', 'she wouldn’t need to take the bus.'],
            ['If we didn’t have to work tomorrow,', 'we would stay at the party longer.'],
            ['If the jacket weren’t so expensive,', 'I would buy it.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What would you do with more money?', why: 'Question word + *would* + subject + verb.' },
            { a: 'If I were you, I would apologise.', why: '*If I were you* comes first, then a comma and *I would*.' },
            { a: 'Where would you live if you could choose?', why: 'The question first, then the *if* part with *could*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Hopes and plans',
      about: 'Talk about what you hope, plan and would like to do.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'These phrases talk about hopes and plans. Look at the form that comes after each one: some take **to** + verb, others take **-ing**.' },
          { t: 'table', caption: 'Hopes and plans', explain: ['head'], quiz: true, head: ['Phrase', 'Example'], rows: [
            ['hope to + verb', 'I hope to finish my degree next year.'],
            ['plan to + verb', 'We plan to move to the coast.'],
            ['would like to + verb', 'She would like to work abroad.'],
            ['be thinking of + -ing', 'I’m thinking of changing jobs.'],
            ['be looking forward to + -ing', 'I’m looking forward to seeing you.'],
            ['dream of + -ing', 'He dreams of opening a bakery.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In *look forward to*, the word *to* is a preposition, so the next verb takes *-ing*: *I’m looking forward to meeting you*, not *to meet you*. You can also use a noun: *I’m looking forward to the holidays.*' },
        ],
        [
          { t: 'text', md: 'Choose the phrase by how sure you are. *I’m going to* and *I plan to* are firm plans. *I hope to* and *I’d like to* are wishes that may not happen. *I’m thinking of* means you have not decided yet.' },
          { t: 'examples', items: [
            { s: 'I**’m thinking of** learning Korean.', n: 'Not decided yet. It is an idea.' },
            { s: 'I **hope to** get a place at the university.', n: 'I want it, but it does not depend only on me.' },
            { s: 'We**’re looking forward to** the wedding.', n: 'It will happen, and we are happy about it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
            { q: 'I’m looking forward to ___ (see) you next week.', a: ['seeing'], why: '*Look forward to* + *-ing*.' },
            { q: 'We hope ___ (buy) a house in a few years.', a: ['to buy'], why: '*Hope to* + verb.' },
            { q: 'She’d like ___ (study) medicine.', a: ['to study'], why: '*Would like to* + verb.' },
            { q: 'He’s thinking of ___ (change) jobs.', a: ['changing'], why: '*Think of* + *-ing*.' },
            { q: 'They plan ___ (open) a café by the river.', a: ['to open'], why: '*Plan to* + verb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct word or words.', items: [
            { q: 'I’d like ___ my own business one day.', o: ['to start', 'starting', 'start'], why: '*Would like to* + verb.' },
            { q: 'She’s thinking ___ moving to Canada.', o: ['of', 'to', 'for'], why: '*Be thinking of* + *-ing*.' },
            { q: 'We’re looking forward ___ the summer holidays.', o: ['to', 'for', 'of'], why: '*Look forward to* + noun.' },
            { q: 'They ___ to buy a house before they are forty.', o: ['hope', 'are thinking', 'look forward'], why: '*Hope to* + verb. *Think of* and *look forward to* need *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I am looking forward to meeting you.', why: '*Looking forward to* + *-ing*.' },
            { a: 'She is thinking of changing her job.', why: '*Thinking of* + *-ing*.' },
            { a: 'They would like to learn Arabic.', why: '*Would like to* + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ten years from now',
      about: 'Read four young people talk about their future.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Where will you be in ten years?', md: 'We asked four young people one question: where do you think you will be in ten years?\n\n**Amara, 19, student:** I’m studying engineering, and I hope to work on clean energy projects. If I could choose, I’d live in a small city near the mountains. I don’t think I’ll be rich, but I’ll have a job that I believe in.\n\n**Felipe, 23, chef:** I’m going to open my own restaurant. I’ve already found a place, and I’m meeting someone at the bank next week to ask about a loan. In ten years, I hope people will travel across the country to eat my food!\n\n**Ji-woo, 21, nursing student:** Honestly, I don’t know. I’m thinking of working abroad for a few years, maybe in Australia or Canada. My parents would like me to stay close to home, so we’ll see.\n\n**Tom, 25, office worker:** If I had more courage, I’d leave my job tomorrow and travel the world. But I have a flat and a cat, so I’ll probably still be here. Next month I’m starting evening classes in photography, though. Who knows where that will lead?' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each person to a plan or a hope.', pairs: [
            ['Amara', 'work on clean energy'],
            ['Felipe', 'open a restaurant'],
            ['Ji-woo', 'maybe work abroad'],
            ['Tom', 'take photography classes'],
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Felipe has already found a place for his restaurant.', a: 't', why: '“I’ve already found a place.”' },
            { q: 'Amara would like to live in a big city.', a: 'f', why: 'She would choose a small city near the mountains.' },
            { q: 'Ji-woo’s parents would like Ji-woo to work abroad.', a: 'f', why: 'They would like Ji-woo to stay close to home.' },
            { q: 'Tom has a dog.', a: 'f', why: 'He has a cat.' },
            { q: 'Felipe’s parents are also chefs.', a: 'ng', why: 'The text does not talk about Felipe’s parents.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the verbs in the text.', items: [
            { q: '“I’m meeting someone at the bank next week.” Why the present continuous?', o: ['It is an arrangement with a time.', 'It is happening now.', 'It is a decision made while speaking.'], why: 'An arrangement in the calendar: the present continuous.' },
            { q: '“If I had more courage, I’d leave my job.” What does Tom mean?', o: ['He does not have enough courage, so he stays.', 'He is going to leave his job tomorrow.', 'He left his job in the past.'], why: 'The second conditional: an imaginary situation. In reality he stays.' },
            { q: 'Who is the least sure about the future?', o: ['Ji-woo', 'Felipe', 'Amara'], why: 'Ji-woo says “I don’t know” and is only *thinking of* working abroad.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'A: I’ve left my wallet at home. B: Don’t worry, I ___ pay.', o: ['will', 'am going', 'paying'], why: 'A decision and an offer, made now: *will*.' },
      { q: 'We ___ dinner with Ana’s parents on Friday. They invited us last week.', o: ['are having', 'have had', 'will to have'], why: 'An arrangement: the present continuous.' },
      { q: 'If I ___ you, I’d take the train.', o: ['were', 'am', 'would be'], why: '*If I were you* gives advice.' },
      { q: 'I’m looking forward to ___ my family.', o: ['seeing', 'see', 'saw'], why: '*Look forward to* + *-ing*.' },
      { q: 'She’s thinking ___ studying law.', o: ['of', 'to', 'for'], why: '*Be thinking of* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'If we ___ (have) a garden, we would grow vegetables.', a: ['had'], why: 'The *if* part of the second conditional: past simple.' },
      { q: 'I ___ (not / buy) that phone if I were you.', a: ['wouldn’t buy', 'would not buy'], why: 'The result part: *wouldn’t* + verb.' },
      { q: 'He hopes ___ (find) a job in Berlin.', a: ['to find'], why: '*Hope to* + verb.' },
      { q: 'Look! That glass ___ (fall) off the table.', a: ['is going to fall', '’s going to fall'], why: 'A prediction from what we can see now: *going to*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'What are you doing this weekend?', why: 'A question about arrangements: the present continuous.' },
      { a: 'I would like to study abroad.', why: '*Would like to* + verb.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['If I had more money, I would travel.', 'If I would have more money, I would travel.', 'If I have more money, I would travel.'], why: 'Past simple in the *if* part, *would* in the other part.' },
      { q: '', o: ['I’m looking forward to hearing from you.', 'I’m looking forward to hear from you.', 'I look forward to hear from you.'], why: '*Look forward to* + *-ing*.' },
      { q: '', o: ['I think it will be a great year.', 'I think it is be a great year.', 'I think it will to be a great year.'], why: 'An opinion about the future: *will* + verb.' },
    ] },
  ],
};
