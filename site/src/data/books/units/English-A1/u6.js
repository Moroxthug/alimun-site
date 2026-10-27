// English A1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Can and can’t',
  goal: 'Say what you can and cannot do, ask politely and talk about your free time.',
  art: 'monster',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['can', 'ability', 'requests', 'permission', 'hobbies', 'free time', 'frequency'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'I can swim',
      about: 'Use can and can’t to say what you are able to do.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'Use **can** to say what you are able to do: *I can swim. She can cook.* Use **can’t** for what you are not able to do: *I can’t drive.* **Can** is the same for every person, and the verb after it has **no -s** and **no to**: *She can swim*, not *she cans swim* or *she can to swim*. For a question, put **can** before the subject: *Can you swim?* Short answers: **Yes, I can.** or **No, I can’t.**' },
          { t: 'table', caption: 'can', explain: ['head', 'col1'], head: ['', 'Example'], rows: [
            ['statement', 'She can swim.'],
            ['negative', 'She can’t swim.'],
            ['question', 'Can she swim?'],
            ['short answer', 'Yes, she can. / No, she can’t.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Can’t** is short for **cannot**. Write **cannot** as one word, never *can not*. In speech, listen for the vowel: **can** is short and weak, and **can’t** has a long, strong vowel. In the USA, the two sound very close, so listen to the whole sentence.' },
        ],
        [
          { t: 'table', caption: 'Things you can do', explain: ['head', 'col1'], quiz: true, head: ['Verb phrase', 'Example'], rows: [
            ['swim', 'I can swim very well.'],
            ['cook', 'He can cook Italian food.'],
            ['drive', 'She can’t drive a car.'],
            ['ride a bike', 'We can ride a bike.'],
            ['play the guitar', 'They can play the guitar.'],
            ['dance', 'I can’t dance.'],
            ['sing', 'She can sing in two languages.'],
            ['ski', 'He can ski, but he can’t swim.'],
          ] },
          { t: 'dialogue', title: 'A new club', lines: [
            { who: 'Grace', s: 'Can you swim?' },
            { who: 'Ben', s: 'Yes, I can. And I can ride a bike, but I can’t drive.' },
            { who: 'Grace', s: 'Can you play the guitar?' },
            { who: 'Ben', s: 'No, I can’t. But I can sing!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write can, can’t or the verb.', items: [
            { q: 'She ___ swim. (she is able to)', a: ['can'], why: '*Can* shows that she is able to.' },
            { q: 'I ___ drive. I haven’t got a licence. (not)', a: ['can’t', 'cannot'], why: 'You are not able to: *can’t*.' },
            { q: 'He ___ play the guitar very well.', a: ['can'], why: '*Can* is the same for every person.' },
            { q: 'Can you ___ a bike? (ride)', a: ['ride'], why: 'After *can* the verb has no *to* and no *-s*.' },
            { q: 'We can’t ___ French. (speak)', a: ['speak'], why: 'After *can’t* the verb does not change.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'She ___ swim.', o: ['can', 'cans', 'can to'], why: '*Can* never takes *-s* or *to*.' },
            { q: '“Can you swim?” – “No, I ___.”', o: ['can’t', 'don’t', 'am not'], why: 'The short answer repeats *can*: *No, I can’t.*' },
            { q: '___ he play the piano?', o: ['Can', 'Does', 'Is'], why: 'A question with *can*: *Can he …?*' },
            { q: 'I can ___ very well.', o: ['sing', 'sings', 'singing'], why: 'After *can* the verb does not change.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Change the sentence.', items: [
            { q: 'She swims.', cue: 'can', a: ['She can swim.'], why: '*Can* + verb with no *-s*.' },
            { q: 'I cook.', cue: 'can’t', a: ['I can’t cook.', 'I cannot cook.'], why: '*Can’t* + verb.' },
            { q: 'He can drive.', cue: 'Can', a: ['Can he drive?'], why: 'A question: *Can he …?*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She can swim very well.', why: 'Subject, *can*, verb, adverb.' },
            { a: 'I can’t drive a car.', why: 'Subject, *can’t*, verb, object.' },
            { a: 'Can you play the guitar?', why: '*Can* + subject + verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She [cans] swim.', a: ['can'], why: '*Can* never takes *-s*.' },
            { s: 'He can [swims].', a: ['swim'], why: 'After *can* the verb does not change.' },
            { s: 'I [don’t can] cook.', a: ['can’t', 'cannot'], why: 'The negative of *can* is *can’t*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Can I open the window?',
      about: 'Use can to ask for permission and to ask for help.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'You also use **can** to ask politely. Use **Can I …?** to **ask for permission**: *Can I open the window?* Use **Can you …?** to **ask someone to do something**: *Can you help me?* To say yes, say **Yes, of course.** or **Sure.** To say no, say **Sorry, you can’t.** or **Sorry, I can’t.** Add **please** to be more polite.' },
          { t: 'table', caption: 'Asking politely', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
            ['Can I open the window?', 'you ask for permission'],
            ['Can you help me, please?', 'you ask someone to do something'],
            ['Can you say that again, please?', 'you do not understand'],
            ['Yes, of course. / Sure.', 'you say yes'],
            ['Sorry, I can’t.', 'you say no'],
          ] },
          { t: 'tip', art: 'owl', md: 'For a more polite request, say **Could you …?** or **Could I …?** In a formal letter or a very polite situation, you can say **May I …?** The answer to **Thank you** is **You’re welcome.** and the answer to **Sorry** is **That’s OK.**' },
        ],
        [
          { t: 'dialogue', title: 'In the library', lines: [
            { who: 'Grace', s: 'Excuse me, can I sit here?' },
            { who: 'Man', s: 'Yes, of course.' },
            { who: 'Grace', s: 'Can you help me with this form?' },
            { who: 'Man', s: 'Sure. What’s the problem?' },
            { who: 'Grace', s: 'Can you say that again, please? I don’t understand the word “surname”.' },
            { who: 'Man', s: 'Your surname is your family name.' },
          ] },
          { t: 'examples', items: [
            { s: '**Can I** open the window?', n: 'You ask for permission.' },
            { s: '**Can you** help me, please?', n: 'You ask someone to do something.' },
            { s: '**Yes, of course.**', n: 'You say yes.' },
            { s: '**Sorry, you can’t.** It’s a library.', n: 'You say no, with a reason.' },
            { s: '**Can you say that again**, please?', n: 'You do not understand.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Permission or help? Sort the questions.', groups: ['asking for permission', 'asking for help'], explain: ['groups'], items: [
            { s: 'Can I open the window?', g: 0, why: '*Can I …?* asks for permission.' },
            { s: 'Can you help me, please?', g: 1, why: '*Can you …?* asks for help.' },
            { s: 'Can I use your phone?', g: 0, why: '*Can I …?* asks for permission.' },
            { s: 'Can you open the door, please?', g: 1, why: '*Can you …?* asks someone to act.' },
            { s: 'Can I sit here?', g: 0, why: '*Can I …?* asks for permission.' },
            { s: 'Can you say that again?', g: 1, why: '*Can you …?* asks someone to act.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ I open the window?', a: ['Can'], why: '*Can I …?* asks for permission.' },
            { q: '___ you help me, please?', a: ['Can'], why: '*Can you …?* asks for help.' },
            { q: 'Yes, of ___.', a: ['course'], why: '*Yes, of course.*' },
            { q: 'Sorry, you ___. It’s a library. (not)', a: ['can’t', 'cannot'], why: 'You say no: *you can’t*.' },
            { q: 'Can you say that ___, please?', a: ['again'], why: '*Say that again.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You ask your friend to open the window. You say:', o: ['Can you open the window, please?', 'Can I open the window, please?', 'Can open the window?'], why: 'You ask someone to act: *Can you …?*' },
            { q: 'You want to use your friend’s pen. You say:', o: ['Can I use your pen?', 'Can you use your pen?', 'Can I to use your pen?'], why: 'You ask for permission: *Can I …?*' },
            { q: 'You do not understand. You say:', o: ['Can you say that again, please?', 'Can I say that again?', 'What can?'], why: 'You ask someone to act: *Can you …?*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Can I open the window?', 'Yes, of course.'],
            ['Can you help me, please?', 'Sure.'],
            ['Can I sit here?', 'Sorry, you can’t.'],
            ['Thank you.', 'You’re welcome.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Can you help me, please?', extra: ['do', 'are'], why: '*Can you …, please?* asks for help.' },
            { a: 'Can I open the window?', extra: ['opens', 'to'], why: 'After *can* the verb does not change and has no *to*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Do] I open the window, please?', a: ['Can'], why: 'To ask for permission, say *Can I …?*' },
            { s: 'Can you [helps] me?', a: ['help'], why: 'After *can* the verb does not change.' },
            { s: 'Can I [opens] the window?', a: ['open'], why: 'After *can* the verb does not change.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Free time',
      about: 'Talk about your hobbies with like + -ing, play, go and do, and say how often.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'After **like, love** and **don’t like**, use the **-ing** form of the verb to talk about your hobbies: *I like swimming. She loves reading. He doesn’t like running.* Add **-ing** to the verb: *swim, swimming* (double the *m*), *run, running* (double the *n*), *read, reading*, *dance, dancing* (drop the *e*).' },
          { t: 'table', caption: 'Verb + -ing', explain: ['head', 'col1'], quiz: true, head: ['Rule', 'Verb', 'Verb + -ing'], rows: [
            ['add -ing', 'read', 'reading'],
            ['add -ing', 'cook', 'cooking'],
            ['drop the e', 'dance', 'dancing'],
            ['double the last letter', 'swim', 'swimming'],
            ['double the last letter', 'run', 'running'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can also say **I like to swim**, but at A1 use **like + -ing** after **like** and **love** for hobbies. Do not say *I like swim*.' },
        ],
        [
          { t: 'text', md: 'Three verbs go with hobbies. Use **play** with games and instruments: *play football, play the guitar*. Use **go** with activities that end in **-ing**: *go swimming, go running*. Use **do** with other activities: *do yoga, do homework*. To say how often, use **once a week, twice a week, three times a week, every day** or **on Saturdays**. To ask, say **How often do you …?**' },
          { t: 'table', caption: 'play, go, do', explain: ['head', 'col1'], head: ['Verb', 'Example'], rows: [
            ['play', 'I play football on Saturdays.'],
            ['play', 'He plays the guitar every day.'],
            ['go', 'We go swimming twice a week.'],
            ['go', 'She goes running every morning.'],
            ['do', 'I do yoga on Sundays.'],
            ['do', 'He does his homework in the evening.'],
          ] },
          { t: 'examples', items: [
            { s: 'I **like swimming**.', n: '*like* + verb + *-ing*.' },
            { s: 'She **loves reading**.', n: '*love* + verb + *-ing*.' },
            { s: 'We **go swimming** twice a week.', n: '*go* + verb + *-ing*.' },
            { s: '**How often** do you play football?', n: 'To ask about frequency.' },
            { s: 'I play football **three times a week**.', n: 'The answer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all of them.', items: [
            { key: 'play', o: ['football', 'the guitar', 'swimming', 'yoga'], a: [0, 1], why: 'You *play football* and *play the guitar*. You *go swimming* and *do yoga*.' },
            { key: 'go', o: ['swimming', 'running', 'football', 'the guitar'], a: [0, 1], why: 'You *go swimming* and *go running*.' },
            { key: 'do', o: ['yoga', 'swimming', 'homework', 'the guitar'], a: [0, 2], why: 'You *do yoga* and *do homework*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'I like ___. (swim)', a: ['swimming'], why: 'Double the *m*: *swimming*.' },
            { q: 'She loves ___. (read)', a: ['reading'], why: 'Add *-ing*: *reading*.' },
            { q: 'He doesn’t like ___. (run)', a: ['running'], why: 'Double the *n*: *running*.' },
            { q: 'I ___ football on Saturdays.', a: ['play'], why: '*Play* + a game.' },
            { q: 'We ___ swimming every week.', a: ['go'], why: '*Go* + verb + *-ing*.' },
            { q: 'She ___ yoga on Sundays.', a: ['does'], why: '*Do* for other activities; with *she*: *does*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'I like ___.', o: ['swimming', 'swimmed', 'swims'], why: '*Like* + verb + *-ing*.' },
            { q: 'We ___ swimming every week.', o: ['go', 'play', 'do'], why: '*Go* + verb + *-ing*.' },
            { q: 'I go swimming ___ a week. (2 times)', o: ['twice', 'two', 'second'], why: '*Twice a week* = two times a week.' },
            { q: '“How often do you play football?” – “___.”', o: ['Three times a week.', 'In the park.', 'With my friends.'], why: '*How often* asks about frequency.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I like [swim].', a: ['swimming'], why: '*Like* + verb + *-ing*.' },
            { s: 'She goes [swimmin] twice a week.', a: ['swimming'], why: 'The spelling is *swimming*.' },
            { s: 'He [plays] swimming on Sundays.', a: ['goes'], why: '*Go* + verb + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The Riverside Club',
      about: 'Read a hobbies page on a club website.',
      art: 'monster',
      spreads: [
        [
          { t: 'reading', title: 'Welcome to the Riverside Club', md: 'We are a small club for people who like free time activities. Here are some of our members.\n\nOwen loves running. He runs three times a week, and he can run ten kilometres. Joanna likes swimming. She goes swimming every Tuesday, but she can’t dive. Leo plays the guitar. He can play ten songs, and he sings at the club on Fridays. Hannah doesn’t like sport. She likes reading, and she does yoga on Sundays.\n\nCan you swim, run or play an instrument? Do you like reading? Come to our open day on Saturday at 10.00. You can bring a friend, but you can’t bring a dog!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Owen runs three times a week.', a: 't', why: '*He runs three times a week.*' },
            { q: 'Joanna can dive.', a: 'f', why: '*She can’t dive.*' },
            { q: 'Leo plays the guitar.', a: 't', why: '*Leo plays the guitar.*' },
            { q: 'Hannah likes sport.', a: 'f', why: '*Hannah doesn’t like sport.*' },
            { q: 'You can bring a dog to the open day.', a: 'f', why: '*You can’t bring a dog!*' },
            { q: 'The club has got a swimming pool.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who is it?', pairs: [
            ['Owen', 'running'],
            ['Joanna', 'swimming'],
            ['Leo', 'the guitar'],
            ['Hannah', 'yoga'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the text again and choose.', items: [
            { q: 'When does Joanna go swimming?', o: ['Every Tuesday', 'Every Friday', 'On Sundays'], why: '*She goes swimming every Tuesday.*' },
            { q: 'What does Hannah do on Sundays?', o: ['Yoga', 'Swimming', 'Football'], why: '*She does yoga on Sundays.*' },
            { q: 'When is the open day?', o: ['On Saturday at 10.00', 'On Friday at 10.00', 'On Sunday at 9.00'], why: '*Come to our open day on Saturday at 10.00.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'She ___ swim.', o: ['can', 'cans', 'can to'], why: '*Can* never takes *-s* or *to*.' },
      { q: '“Can you swim?” – “No, I ___.”', o: ['can’t', 'don’t', 'am not'], why: 'The short answer repeats *can*.' },
      { q: 'I like ___.', o: ['swimming', 'swimmed', 'swims'], why: '*Like* + verb + *-ing*.' },
      { q: 'We ___ swimming every week.', o: ['go', 'play', 'do'], why: '*Go* + verb + *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'I can ___ a bike. (ride)', a: ['ride'], why: 'After *can* the verb does not change.' },
      { q: '___ I open the window, please?', a: ['Can'], why: '*Can I …?* asks for permission.' },
      { q: 'She ___ yoga on Sundays.', a: ['does'], why: '*Do* for other activities; with *she*: *does*.' },
      { q: 'I go swimming ___ a week. (2 times)', a: ['twice'], why: '*Twice a week* = two times a week.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
      ['Can I open the window?', 'Yes, of course.'],
      ['Can you help me?', 'Sure.'],
      ['Can you swim?', 'No, I can’t.'],
      ['How often do you run?', 'Twice a week.'],
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
      { a: 'Can you help me, please?', extra: ['do', 'are'], why: '*Can you …, please?* asks for help.' },
      { a: 'She can’t play the guitar.', extra: ['don’t', 'cans'], why: '*Can’t* + verb with no *-s*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She [cans] swim.', a: ['can'], why: '*Can* never takes *-s*.' },
      { s: 'I like [swim].', a: ['swimming'], why: '*Like* + verb + *-ing*.' },
    ] },
  ],
};
