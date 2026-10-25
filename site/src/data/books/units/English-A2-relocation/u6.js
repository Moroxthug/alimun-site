// English A2 for moving abroad, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Neighbours and new friends',
  goal: 'Meet neighbours, make friends and accept invitations.',
  art: 'dog',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['small-talk', 'weather', 'past-simple-questions', 'invitations', 'would-like-to'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Lovely day, isn’t it?',
      about: 'Say hello to a neighbour and make small talk about the weather and the weekend.',
      art: 'dog',
      spreads: [
        [
          { t: 'dialogue', title: 'A new neighbour', lines: [
            { who: 'Kofi', s: 'Hi. I’m Kofi. I’ve just moved in next door.' },
            { who: 'Helen', s: 'Oh, hello! Nice to meet you. I’m Helen.' },
            { who: 'Kofi', s: 'Nice to meet you too.' },
            { who: 'Helen', s: 'Lovely day, isn’t it?' },
            { who: 'Kofi', s: 'Yes, it’s beautiful. It was really cold last week.' },
            { who: 'Helen', s: 'I know! So where are you from, Kofi?' },
            { who: 'Kofi', s: 'I’m from Ghana. I moved here for my job.' },
            { who: 'Helen', s: 'Well, welcome to the street. If you need anything, just knock.' },
            { who: 'Kofi', s: 'Thanks, that’s very kind.' },
          ] },
          { t: 'text', md: '**Small talk** is a short, friendly chat about easy things. In the UK, people often start with the weather. *Lovely day, isn’t it?* is not a real question. Just agree: *Yes, it’s beautiful.*' },
        ],
        [
          { t: 'table', caption: 'Talking about the weather', explain: ['head'], quiz: true, head: ['Good weather', 'Bad weather'], rows: [
            ['It’s sunny.', 'It’s raining.'],
            ['It’s warm.', 'It’s cold.'],
            ['Lovely day, isn’t it?', 'Horrible weather, isn’t it?'],
            ['It’s nice and dry today.', 'It’s really windy today.'],
          ] },
          { t: 'text', md: 'On Monday, people ask about the weekend. Use the **past simple**: *Did you have a good weekend?* *What did you do?* In the answer, use the past form: *I **went** to the beach.*, *I **stayed** at home.*' },
          { t: 'dialogue', title: 'Monday morning', lines: [
            { who: 'Helen', s: 'Morning, Kofi! Did you have a good weekend?' },
            { who: 'Kofi', s: 'Yes, thanks. I went to the seaside on Saturday. What about you?' },
            { who: 'Helen', s: 'It was quiet. I stayed at home and watched a film.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
            ['Lovely day, isn’t it?', 'Yes, it’s beautiful.'],
            ['Did you have a good weekend?', 'Yes, thanks. It was great.'],
            ['What did you do?', 'I went to the market.'],
            ['Where are you from?', 'I’m from Ghana.'],
            ['Nice to meet you.', 'Nice to meet you too.'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about Kofi and Helen. True or false?', items: [
            { q: 'Kofi lives next door to Helen.', a: 't', why: '*I’ve just moved in next door.*' },
            { q: 'The weather was warm last week.', a: 'f', why: '*It was really cold last week.*' },
            { q: 'Helen went to the seaside at the weekend.', a: 'f', why: 'Kofi went to the seaside. Helen stayed at home.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the past simple.', items: [
            { q: 'Did you ___ a good weekend? (have)', a: ['have'], why: 'After *did*, use the base form: *Did you have…?*' },
            { q: 'I ___ to the park with my children. (go)', a: ['went'], why: 'The past of *go* is *went*.' },
            { q: 'We ___ at home and cooked. (stay)', a: ['stayed'], why: '*Stay* is regular: *stayed*.' },
            { q: 'What ___ you do on Saturday?', a: ['did'], why: 'Questions in the past simple use *did*: *What did you do?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Did you have a good weekend?', why: '*Did* + *you* + base form.' },
            { a: 'What did you do on Sunday?', why: '*What* + *did you do* + time.' },
            { a: 'Nice to meet you too.', why: '*Too* goes at the end: *Nice to meet you too.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Would you like to come?',
      about: 'Invite someone, and say yes or no politely.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'To invite someone, use **Would you like to** + verb. It is polite and friendly. With friends, *Do you want to…?* is fine too.' },
          { t: 'table', caption: 'Inviting and replying', explain: ['head', 'col0'], head: ['You want to', 'You say'], rows: [
            ['invite someone', 'Would you like to come for dinner on Saturday?'],
            ['ask if someone is free', 'Are you free on Friday evening?'],
            ['say yes', 'I’d love to, thanks!'],
            ['say yes', 'That sounds great.'],
            ['say no politely', 'I’m sorry, I can’t. I’m working that day.'],
            ['say no politely', 'That’s kind of you, but I’m busy on Saturday.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When you say no, give a short reason. *No, thanks.* alone can sound unfriendly. You can add *Maybe another time?*' },
        ],
        [
          { t: 'dialogue', title: 'An invitation', lines: [
            { who: 'Helen', s: 'Kofi, we’re having a barbecue in the garden on Sunday. Would you like to come?' },
            { who: 'Kofi', s: 'I’d love to, thanks! What time?' },
            { who: 'Helen', s: 'From about two o’clock.' },
            { who: 'Kofi', s: 'Great. Shall I bring anything?' },
            { who: 'Helen', s: 'Maybe a salad? But you don’t need to.' },
            { who: 'Kofi', s: 'No problem. Can I bring my friend Sara too?' },
            { who: 'Helen', s: 'Of course! See you on Sunday.' },
          ] },
          { t: 'text', md: '*Shall I bring anything?* is a kind question to ask. In the UK, guests often bring something to a party or a dinner, like a drink, a dessert or flowers.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the invitation. True or false?', items: [
            { q: 'The barbecue is on Saturday.', a: 'f', why: '*On Sunday.*' },
            { q: 'Kofi says yes to the invitation.', a: 't', why: '*I’d love to, thanks!*' },
            { q: 'Helen asks Kofi to bring a salad.', a: 't', why: '*Maybe a salad?*' },
            { q: 'Kofi is going to come alone.', a: 'f', why: 'He asks to bring his friend Sara, and Helen says *Of course!*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'Would you like ___ for coffee tomorrow?', o: ['to come', 'come', 'coming'], why: '*Would you like* + *to* + verb.' },
            { q: 'Would you like to come to my party? — Yes, ___!', o: ['I’d love to', 'I’d love', 'I love to'], why: 'To say yes to an invitation: *I’d love to*.' },
            { q: '___ I bring anything?', o: ['Shall', 'Would', 'Do'], why: '*Shall I…?* offers to do something.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which reply says no politely?', items: [
            { q: 'Would you like to come to the cinema on Friday?', o: ['That’s kind of you, but I’m busy on Friday.', 'No.', 'I don’t want to.'], why: 'Thank the person and give a short reason.' },
            { q: 'Do you want to play football with us on Saturday?', o: ['I’m sorry, I can’t. I’m visiting my aunt.', 'No, thanks.', 'Football is boring.'], why: 'Say sorry and give a reason. *No, thanks* alone can sound unfriendly.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Would you like to come for dinner?', why: '*Would you like* + *to come* + the rest.' },
            { a: 'Are you free on Saturday evening?', why: '*Are you free* + day and time.' },
            { a: 'Shall I bring anything?', why: '*Shall I* + verb: an offer.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the replies.', items: [
            { q: 'I’d ___ to, thanks! What time?', a: ['love'], why: '*I’d love to*: a happy yes.' },
            { q: 'I’m sorry, I ___. I’m working that day.', a: ['can’t', 'cannot', "can't"], why: '*I’m sorry, I can’t* + a reason: a polite no.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Notes and messages',
      about: 'Read a note from a neighbour and a message about a party.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'A note through the door', md: 'Hello,\n\nI’m Ruth from number 14. Welcome to Elm Close! I hope you like your new home.\n\nHere is some useful information. The black bin is for general rubbish. It goes out on Tuesday morning. The blue bin is for recycling, and it goes out every two weeks on Thursday. Most people put their bins out the night before.\n\nWe’re also having a street party on Saturday 21 June from 3 pm. Everyone is welcome. Bring something to eat if you like.\n\nIf you have any questions, just knock on my door or call me on 07700 900815.\n\nBest wishes,\nRuth' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read Ruth’s note. True, false or not given?', items: [
            { q: 'Ruth lives at number 14.', a: 't', why: '*I’m Ruth from number 14.*' },
            { q: 'The black bin is for recycling.', a: 'f', why: 'The black bin is for general rubbish. The blue bin is for recycling.' },
            { q: 'The blue bin goes out every Thursday.', a: 'f', why: 'It goes out *every two weeks on Thursday*.' },
            { q: 'Ruth has got two children.', a: 'ng', why: 'The note does not say anything about Ruth’s family.' },
            { q: 'You must bring food to the street party.', a: 'f', why: '*Bring something to eat if you like*: you can, but you do not have to.' },
          ] },
        ],
        [
          { t: 'reading', title: 'A message from a colleague', md: 'Hi Kofi! It’s my birthday on Friday, and I’m having a few friends round to my flat from 8 pm. Would you like to come? You don’t need to bring anything. My address is Flat 3, 41 Station Road. Let me know! Priya' },
          { t: 'reading', title: 'Kofi’s reply', md: 'Hi Priya, thanks for the invitation! I’d love to come, but I’m working until 9 on Friday. Can I come a bit later, at about 9.30? See you then. Kofi' },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Why is Priya having a party?', o: ['It’s her birthday.', 'She has a new flat.', 'It’s a street party.'], why: '*It’s my birthday on Friday.*' },
            { q: 'What time is Kofi going to arrive?', o: ['At about 9.30.', 'At 8 pm.', 'At 9.'], why: 'He works until 9 and asks to come *at about 9.30*.' },
            { q: 'What does Priya say about presents or food?', o: ['You don’t need to bring anything.', 'Bring a salad.', 'Bring a drink.'], why: '*You don’t need to bring anything.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that say yes to an invitation.', items: [
            { s: 'Thanks for the invitation! [I’d] [love] [to] come, but I’m working until 9.', why: '*I’d love to* says yes, happily.' },
            { s: 'A street party? [That] [sounds] [great]. See you on Saturday!', why: '*That sounds great* is a friendly yes.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with words from the texts.', items: [
            { q: 'Welcome to Elm Close! I hope you like your new ___.', a: ['home'], why: 'Ruth writes *your new home*.' },
            { q: 'I’m having a few friends ___ to my flat. (they come to my home)', a: ['round', 'over'], why: '*Have friends round* means invite them to your home.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Lovely day, isn’t it? — ___', o: ['Yes, it’s beautiful.', 'No, I’m not.', 'Yes, I did.'], why: 'Agree about the weather: *Yes, it’s beautiful.*' },
      { q: 'Did you have a good weekend? — Yes, I ___ to the beach.', o: ['went', 'go', 'goed'], why: 'The past of *go* is *went*.' },
      { q: 'Would you like ___ to my party?', o: ['to come', 'come', 'coming'], why: '*Would you like* + *to* + verb.' },
      { q: 'Which reply is a polite no?', o: ['I’m sorry, I can’t. I’m busy that day.', 'No.', 'I don’t like parties.'], why: 'Say sorry and give a short reason.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'What ___ you do at the weekend?', a: ['did'], why: 'A past simple question: *What did you do?*' },
      { q: 'Thanks for the invitation. I’d ___ to come!', a: ['love'], why: '*I’d love to*: a happy yes.' },
      { q: '___ I bring anything? (an offer)', a: ['Shall', 'Should', 'Can'], why: '*Shall I bring anything?* offers to help.' },
      { q: 'Nice to meet you. — Nice to meet you ___.', a: ['too'], why: 'The usual reply: *Nice to meet you too.*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Would you like to come for coffee?', why: '*Would you like* + *to come* + the rest.' },
      { a: 'Did you have a good weekend?', why: '*Did* + *you* + base form.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: '*That sounds great* is a way to say yes.', a: 't', why: 'It is a friendly yes to an invitation.' },
      { q: '*Horrible weather, isn’t it?* is about good weather.', a: 'f', why: '*Horrible* means very bad.' },
    ] },
  ],
};
