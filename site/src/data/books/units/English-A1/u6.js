// English A1, unit 6, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Style approved by the owner 7 Nov 2026; draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of the A2 Key exam.
export const UNIT = {
  id: 'u6',
  title: 'Can and can’t',
  goal: 'Say what you can and cannot do, ask politely and talk about your free time.',
  art: 'monster',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['can', 'ability', 'requests', 'permission', 'hobbies', 'free time', 'frequency'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I can swim',
      about: 'Use can and can’t to say what you are able to do, and ask about other people’s skills.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'Use **can** to say that you are able to do something: *I can swim. She can cook. They can speak French.* Use **can’t** (= *cannot*) for things you are not able to do: *I can’t drive. He can’t sing.*\n\n**Can** is one of the easiest verbs in English, because it **never changes**. It is the same for every person: *I can, you can, he can, she can, we can, they can.* There is no *-s* with *he* or *she*: *she can*, never *she cans*.\n\nAfter **can**, use the **base form** of the verb, the form you find in the dictionary, with **no to**: *I can swim*, not *I can to swim*.' },
          { t: 'table', caption: 'can and can’t', explain: ['head', 'col2'], head: ['Sentence', 'Example', 'What it says'], rows: [
            ['I / you / he / she / we / they can …', 'She can swim.', 'She is able to swim.'],
            ['I / you / he / she / we / they can’t …', 'I can’t drive.', 'I am not able to drive.'],
            ['can + base form', 'We can play the piano.', 'No *to*, no *-s*, no *-ing*.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Cannot** is one word. It is the full form of **can’t**. Use **can’t** when you speak and in messages, and **cannot** in formal writing: *Visitors cannot park here.*' },
        ],
        [
          { t: 'text', md: 'To ask a question, put **can** before the subject: *You can swim.* → *Can you swim?* The short answers are **Yes, I can** and **No, I can’t**.\n\nTo ask for information, put a question word first: *What can you cook? Which languages can she speak?*\n\nTo say **how well** you can do something, add a word at the end: **very well**, **well**, **a little**, **not very well**. To say that you cannot do it at all, use **can’t … at all**: *I can’t swim at all.*' },
          { t: 'examples', items: [
            { s: '**Can you** ride a bike? – **Yes, I can.**', n: 'A question and a short answer.' },
            { s: '**Can** your brother cook? – **No, he can’t.**', n: 'A short negative answer.' },
            { s: 'I can speak Spanish **very well**.', n: 'How well: at the end of the sentence.' },
            { s: 'She can play the guitar **a little**.', n: 'Not very well, but a little.' },
            { s: 'I **can’t** dance **at all**!', n: 'Not even a little.' },
            { s: '**What can** you cook? – I can cook pasta.', n: 'A question word before *can*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Listen to the sound. In a sentence, **can** is short and quiet (*I c’n swim*), but **can’t** is long and strong (*I CAAN’T swim*). In short answers, **can** is strong too: *Yes, I CAN.*' },
        ],
        [
          { t: 'text', md: 'Here are useful things you can, or cannot, do. Notice the verbs that go with each activity: you **play** a sport or an instrument, you **ride** a bike or a horse, you **speak** a language.' },
          { t: 'table', caption: 'Skills', explain: ['head'], quiz: true, head: ['Skill', 'Example'], rows: [
            ['swim', 'I can swim, but not very fast.'],
            ['drive a car', 'My father can’t drive.'],
            ['ride a bike', 'Can you ride a bike?'],
            ['cook', 'He can cook very well.'],
            ['play the guitar', 'She can play the guitar a little.'],
            ['play tennis', 'We can play tennis on Saturday.'],
            ['speak French', 'They can speak French and English.'],
            ['sing', 'I can’t sing at all!'],
            ['dance', 'Can your sister dance?'],
          ] },
          { t: 'table', caption: 'Three common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She cans swim.', 'She can swim.', '*can* never takes *-s*.'],
            ['I can to drive.', 'I can drive.', 'No *to* after *can*.'],
            ['Do you can cook?', 'Can you cook?', 'No *do* with *can*: put *can* first.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A new club', lines: [
            { who: 'Mia', s: 'Hi! Are you new in the sports club?' },
            { who: 'Leo', s: 'Yes, I am. I’m Leo. Can you swim, Mia?' },
            { who: 'Mia', s: 'Yes, I can. I can swim very well. Can you?' },
            { who: 'Leo', s: 'No, I can’t. I can’t swim at all! But I can play tennis.' },
            { who: 'Mia', s: 'Great! I can’t play tennis. Can you teach me?' },
            { who: 'Leo', s: 'Yes, of course!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. Are the sentences true or false?', items: [
            { q: 'Mia can swim very well.', a: 't', why: '*I can swim very well.*' },
            { q: 'Leo can swim a little.', a: 'f', why: 'Leo can’t swim *at all*.' },
            { q: 'Leo can play tennis.', a: 't', why: '*But I can play tennis.*' },
            { q: 'Mia can play tennis.', a: 'f', why: 'Mia says: *I can’t play tennis.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'My sister ___ speak three languages.', o: ['can', 'cans', 'can to'], why: '*can* is the same for every person, and no *to* after it.' },
            { q: '“Can you drive?” – “No, I ___.”', o: ['can’t', 'don’t', 'not can'], why: 'The short answer repeats *can*: *No, I can’t.*' },
            { q: '___ your friends play football?', o: ['Can', 'Do can', 'Are'], why: 'In a question, put *can* first. No *do*.' },
            { q: 'He can ___ the piano very well.', o: ['play', 'plays', 'playing'], why: 'After *can*: the base form, *play*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'Tom [cans] cook pasta.', a: ['can'], why: '*can* never takes *-s*.' },
            { s: 'I can [to swim].', a: ['swim'], why: 'No *to* after *can*: *I can swim.*' },
            { s: '[Do] you can dance?', a: ['Can'], why: 'Questions with *can* start with *can*: *Can you dance?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make a question with can.', items: [
            { q: 'You can ride a horse.', cue: 'Can', a: ['Can you ride a horse?'], why: 'Put *can* before *you*.' },
            { q: 'She can speak Chinese.', cue: 'Can', a: ['Can she speak Chinese?'], why: 'Put *can* before *she*.' },
            { q: 'They can come on Friday.', cue: 'Can', a: ['Can they come on Friday?'], why: 'Put *can* before *they*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I can play the guitar a little.', why: 'Subject, *can*, verb, the thing, then *how well* at the end.' },
            { a: 'What languages can you speak?', why: 'Question words first, then *can* and the subject.' },
            { a: 'My grandmother can’t ride a bike.', why: 'Subject, *can’t*, verb, the rest.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“Can you speak Italian?”', o: ['Only a little.', 'Yes, I do.', 'I’m from Italy.'], why: 'The question is about how well you speak: *Only a little.*' },
            { q: '“Can your brother drive?”', o: ['No, he can’t.', 'No, he doesn’t.', 'No, he isn’t.'], why: 'A question with *can* has a short answer with *can*.' },
            { q: '“What sports can you play?”', o: ['Tennis and volleyball.', 'Yes, I can.', 'On Sundays.'], why: '*What sports* asks for the names of sports.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In this part of the A2 Key exam, look at the **first word** of the question. A question that starts with **Can**, **Is** or **Do** wants a short answer with the **same** verb: *Can …? – Yes, I can.* A question that starts with **What** or **Where** wants information, not *yes* or *no*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I can swim, but I can’t drive.' },
            { a: 'Can you play the guitar?' },
            { a: 'Yes, I can. I can play it a little.' },
            { a: 'She can speak French very well.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Can I open the window?',
      about: 'Use can to ask for permission and to ask for help, and answer politely.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Can** has a second job: asking politely. There are two kinds of polite questions.\n\nTo **ask for permission** (to ask if *you* can do something), say **Can I …?** *Can I open the window? Can I sit here? Can I use your pen?*\n\nTo **ask someone to do something for you**, say **Can you …?** *Can you help me? Can you close the door, please?*\n\nAdd **please** to be more polite. It goes at the end, or after the subject: *Can you help me, please? Can I please have a glass of water?*' },
          { t: 'table', caption: 'Asking politely', explain: ['head', 'col1'], head: ['You say', 'What you want'], rows: [
            ['Can I sit here?', 'permission: you want to do something'],
            ['Can I have a coffee, please?', 'you want to get something'],
            ['Can you help me, please?', 'help: you want the other person to do something'],
            ['Can you say that again, please?', 'you did not hear or understand'],
            ['Can you speak more slowly, please?', 'the other person speaks too fast'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a café or a shop, **Can I have …, please?** is the easiest polite way to ask for something: *Can I have a tea, please?* Saying only *I want a tea* sounds rude in English.' },
        ],
        [
          { t: 'text', md: 'How do you answer? To say yes, the short answer **Yes, you can** is correct, but people usually say something warmer: **Yes, of course**, **Sure** or **No problem**.\n\nTo say no politely, do not say only *No.* Say **sorry** and give a short reason: **Sorry, you can’t. It’s my friend’s seat.** or **I’m sorry, I can’t. I’m busy.**' },
          { t: 'examples', items: [
            { s: '**Can I** sit here? – **Yes, of course.**', n: 'Saying yes, in a friendly way.' },
            { s: '**Can you** close the door, **please**? – **Sure.**', n: 'A short, friendly yes.' },
            { s: '**Can I** use your phone? – **Sorry, you can’t.** It’s not working.', n: 'Saying no: *sorry* and a reason.' },
            { s: '**Can you** help me with my bag? – **No problem!**', n: 'Another friendly yes.' },
            { s: '**Can you** say that again, please? – Yes, of course. Room twelve.', n: 'A very useful question when you do not understand.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Learn this question by heart, because you will need it often: **Can you say that again, please?** It is polite, and it is always better than pretending that you understand.' },
        ],
        [
          { t: 'dialogue', title: 'In the library', lines: [
            { who: 'Sara', s: 'Excuse me. Can I sit here?' },
            { who: 'Man', s: 'Yes, of course.' },
            { who: 'Sara', s: 'Thanks. Can I use the computer?' },
            { who: 'Man', s: 'Sorry, you can’t. It’s for library staff.' },
            { who: 'Sara', s: 'Oh, OK. Can you help me? Where are the English books?' },
            { who: 'Man', s: 'Sure. They’re on the second floor.' },
            { who: 'Sara', s: 'Sorry, can you say that again, please?' },
            { who: 'Man', s: 'On the second floor, next to the stairs.' },
          ] },
          { t: 'table', caption: 'Two common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Can you give me a coffee?', 'Can I have a coffee, please?', 'In a café, ask with *Can I have*: it is more polite.'],
            ['Can I to open the window?', 'Can I open the window?', 'No *to* after *can*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Permission or help? Sort the questions.', groups: ['asking for permission', 'asking for help'], explain: ['groups'], items: [
            { s: 'Can I open the window?', g: 0, why: '*Can I* asks if you can do something.' },
            { s: 'Can you help me?', g: 1, why: '*Can you* asks someone to do something.' },
            { s: 'Can I sit here?', g: 0, why: 'You want to do something: *Can I*.' },
            { s: 'Can you carry this bag?', g: 1, why: 'The other person does it: *Can you*.' },
            { s: 'Can I use your pen?', g: 0, why: 'Permission: *Can I*.' },
            { s: 'Can you speak more slowly?', g: 1, why: 'The other person does it: *Can you*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the best answer.', pairs: [
            ['Can I sit here?', 'Yes, of course.'],
            ['Can you help me, please?', 'Sure, no problem.'],
            ['Can I use your phone?', 'Sorry, it isn’t working.'],
            ['Can you say that again, please?', 'Yes. Room twelve.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write I or you.', items: [
            { q: 'Can ___ have a glass of water, please?', a: ['I'], why: 'You want to get something: *Can I have*.' },
            { q: 'Can ___ open the door for me? My hands are full.', a: ['you'], why: 'The other person does it: *Can you*.' },
            { q: 'Can ___ go home now? I’m very tired.', a: ['I'], why: 'You ask for permission: *Can I*.' },
            { q: 'Can ___ speak more slowly, please?', a: ['you'], why: 'The other person speaks: *Can you*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the polite question. Two words do not belong.', items: [
            { a: 'Can I have a tea, please?', extra: ['want', 'to'], why: 'Ask with *Can I have*, and no *to* after *can*.' },
            { a: 'Can you help me, please?', extra: ['do', 'helps'], why: '*Can you* + the base form, *help*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
            { q: 'LIBRARY: You cannot eat or drink here.', o: ['Do not have food in the library.', 'You can buy food in the library.', 'The library has a café.'], why: '*Cannot* means it is not allowed.' },
            { q: 'Ask at reception. We can help you with your bags.', o: ['The hotel can carry your bags.', 'You must carry your bags.', 'Reception is closed.'], why: '*We can help you* means they will do it for you.' },
            { q: 'Students can use the computers from 9 to 5.', o: ['The computers are for students in the day.', 'Students cannot use computers.', 'The computers are open at night.'], why: '*Can use from 9 to 5*: they are allowed in those hours.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the reading test of the A2 Key exam, you read short **notices and messages** and choose what they mean. Notices often use **can** (it is allowed) and **cannot** (it is not allowed). Read every word: one small *not* changes the answer.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these questions and answers after the tutor.', tutor: 'sofia', items: [
            { a: 'Can I have a coffee, please?' },
            { a: 'Can you help me, please?' },
            { a: 'Yes, of course.' },
            { a: 'Can you say that again, please?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Free time',
      about: 'Talk about your hobbies with like + -ing, and use play, go and do with free-time activities.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To talk about your hobbies, use **like**, **love** and **don’t like** with the **-ing** form of the verb: *I like swimming. She loves reading. We don’t like running.*\n\nWhy *-ing*? Because here the activity works like a **thing**, a noun: *I like **football**. I like **swimming**.* Both are names of activities.\n\nWith **he**, **she** and **it**, remember the present simple: **likes**, **loves**, **doesn’t like**: *He likes cooking. She doesn’t like dancing.*' },
          { t: 'table', caption: 'How to make -ing', explain: ['head', 'col0'], quiz: true, head: ['Rule', 'Verb', 'Verb + -ing'], rows: [
            ['most verbs: add -ing', 'read', 'reading'],
            ['most verbs: add -ing', 'play', 'playing'],
            ['verb ends in -e: drop the e', 'dance', 'dancing'],
            ['verb ends in -e: drop the e', 'ride', 'riding'],
            ['short verb, one vowel + one consonant: double it', 'swim', 'swimming'],
            ['short verb, one vowel + one consonant: double it', 'run', 'running'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **love** for something you like very much, and **hate** for something you do not like at all: *I love dancing, but I hate running!* All four (**love, like, don’t like, hate**) take *-ing*.' },
        ],
        [
          { t: 'text', md: 'Three verbs go with free-time activities, and each one has its own group:\n\n**play** + sports with a ball and games: *play football, play tennis, play chess, play video games*. Also instruments, with **the**: *play the guitar, play the piano*.\n\n**go** + activities that end in **-ing**, often outside: *go swimming, go running, go shopping, go dancing*.\n\n**do** + other activities, often without a ball: *do yoga, do karate, do exercise, do your homework*.' },
          { t: 'table', caption: 'play, go, do', explain: ['head', 'col1'], head: ['Verb', 'With', 'Examples'], rows: [
            ['play', 'ball sports, games, instruments (with the)', 'play football, play chess, play the piano'],
            ['go', 'activities with -ing', 'go swimming, go cycling, go shopping'],
            ['do', 'other activities and exercise', 'do yoga, do karate, do exercise'],
          ] },
          { t: 'examples', items: [
            { s: 'I **go swimming** on Saturdays.', n: '*go* + an *-ing* activity.' },
            { s: 'My son **plays the piano**.', n: 'An instrument: *play the …*' },
            { s: 'We **do yoga** in the park.', n: '*do* + yoga.' },
            { s: 'She **loves playing** tennis.', n: '*love* + *-ing*, then *play* + a sport.' },
          ] },
        ],
        [
          { t: 'text', md: 'Here are the mistakes learners make most often with hobbies.' },
          { t: 'table', caption: 'Four common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I like swim.', 'I like swimming.', '*like* + *-ing* for hobbies.'],
            ['I play swimming.', 'I go swimming.', '*-ing* activities go with *go*.'],
            ['She play the guitar.', 'She plays the guitar.', '*she* + present simple: add *-s*.'],
            ['I play piano.', 'I play the piano.', 'Instruments take *the*.'],
          ] },
          { t: 'dialogue', title: 'What do you do at the weekend?', lines: [
            { who: 'Nadia', s: 'What do you do at the weekend, Paul?' },
            { who: 'Paul', s: 'I love cycling. I go cycling every Saturday.' },
            { who: 'Nadia', s: 'Nice! I don’t like cycling. I like dancing.' },
            { who: 'Paul', s: 'Do you go dancing on Saturdays?' },
            { who: 'Nadia', s: 'Yes, and I do yoga on Sundays.' },
            { who: 'Paul', s: 'I hate yoga! But I play chess on Sundays.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all of them.', items: [
            { key: 'play', o: ['tennis', 'the piano', 'swimming', 'yoga', 'chess'], a: [0, 1, 4], why: 'You *play* ball sports, games and instruments.' },
            { key: 'go', o: ['running', 'shopping', 'football', 'karate'], a: [0, 1], why: 'You *go* + an *-ing* activity.' },
            { key: 'do', o: ['yoga', 'karate', 'cycling', 'the guitar'], a: [0, 1], why: 'You *do* yoga and karate.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Write the verb with -ing.', items: [
            { q: 'I love ___ in the sea.', base: 'swim', a: ['swimming'], why: 'Short verb, one vowel and one consonant: double the *m*.' },
            { q: 'She likes ___ to music.', base: 'dance', a: ['dancing'], why: 'Drop the *e*: *dancing*.' },
            { q: 'We don’t like ___ in the rain.', base: 'run', a: ['running'], why: 'Double the *n*: *running*.' },
            { q: 'He hates ___ the dishes.', base: 'wash', a: ['washing'], why: 'Just add *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'My friends ___ running every morning.', o: ['go', 'play', 'do'], why: '*-ing* activities: *go running*.' },
            { q: 'Do you ___ the guitar?', o: ['play', 'go', 'do'], why: 'Instruments: *play the guitar*.' },
            { q: 'I ___ karate at the sports centre.', o: ['do', 'go', 'play'], why: '*do karate*.' },
            { q: 'Ben likes ___ video games.', o: ['playing', 'play', 'plays'], why: '*like* + *-ing*: *playing*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I like [read] books.', a: ['reading'], why: '*like* + *-ing*.' },
            { s: 'We [play] swimming on Sundays.', a: ['go'], why: '*go swimming*.' },
            { s: 'My daughter plays [piano].', a: ['the piano'], why: 'Instruments take *the*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“What do you do in your free time?”', o: ['I go swimming and I play chess.', 'I’m free on Monday.', 'Yes, I do.'], why: 'The question asks about your hobbies.' },
            { q: '“Do you like dancing?”', o: ['Not really. I prefer reading.', 'Yes, I can.', 'I’m dancing.'], why: 'A question with *Do you like* can have a longer answer about what you like.' },
            { q: '“Let’s go running tomorrow!”', o: ['Good idea!', 'Yes, I go.', 'I’m fine, thanks.'], why: '*Let’s …* is an idea: answer with *Good idea!*' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I love reading, but I hate running.' },
            { a: 'We go swimming on Saturdays.' },
            { a: 'Do you play the guitar?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The Riverside Club',
      about: 'Say how often you do things, and read a hobbies page on a club website.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'To say **how often** you do something, use a frequency word. They go from **always** (every time) to **never** (not one time).\n\nThese words go **before** the main verb: *I **always** go running on Mondays. She **never** plays tennis.* But they go **after** the verb **be**: *He is **always** late.*' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], head: ['Word', 'How often', 'Example'], rows: [
            ['always', 'every time (100%)', 'I always walk to work.'],
            ['usually', 'nearly every time', 'We usually go cycling on Sunday.'],
            ['often', 'many times', 'She often plays chess.'],
            ['sometimes', 'some of the time', 'I sometimes do yoga.'],
            ['never', 'not one time (0%)', 'He never goes dancing.'],
          ] },
          { t: 'tip', art: 'owl', md: 'You can also use a phrase at the **end** of the sentence: **every day**, **every week**, **once a week** (one time), **twice a week** (two times), **three times a week**: *I go swimming twice a week.*' },
        ],
        [
          { t: 'text', md: 'To ask about frequency, say **How often …?** *How often do you go running?* The answer is a frequency word or a phrase: *Every day. Twice a week. Not very often.*\n\nRemember: with **never**, the verb is positive. English does not use two negative words together: *I never go*, not *I don’t never go*.' },
          { t: 'examples', items: [
            { s: '**How often** do you play tennis? – **Once a week.**', n: 'A question and a short answer.' },
            { s: 'I **usually** go swimming on Friday.', n: 'Before the main verb.' },
            { s: 'Our club is **always** open on Saturday.', n: 'After *be*.' },
            { s: 'She **never** watches TV.', n: '*never* + a positive verb.' },
            { s: 'We do yoga **three times a week**.', n: 'A phrase at the end.' },
          ] },
          { t: 'table', caption: 'Two common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I go always running.', 'I always go running.', 'Frequency words go before the main verb.'],
            ['I don’t never swim.', 'I never swim.', 'No two negatives together.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Welcome to the Riverside Club', md: 'We are a small club for people who love their free time. Here are some of our members.\n\nOwen loves running. He goes running by the river three times a week, and he never stops in the rain! He can run ten kilometres.\n\nPriya is a teacher. She usually does yoga on Monday and Wednesday evenings. She can’t swim, but she wants to learn.\n\nLuis and Anna are married. They play tennis every Saturday morning, and they sometimes play chess in the club café.\n\nCan you sing? Our music group meets once a week, on Thursday. Everyone can come, and it’s free!' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text. True, false or not given?', items: [
            { q: 'Owen goes running three times a week.', a: 't', why: '*He goes running by the river three times a week.*' },
            { q: 'Priya can swim.', a: 'f', why: '*She can’t swim.*' },
            { q: 'Luis and Anna play tennis on Sunday.', a: 'f', why: 'They play every *Saturday* morning.' },
            { q: 'Priya has two children.', a: 'ng', why: 'The text does not say.' },
            { q: 'The music group is free.', a: 't', why: '*Everyone can come, and it’s free!*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who is it? Match the person and the activity.', pairs: [
            ['Owen', 'runs by the river'],
            ['Priya', 'does yoga'],
            ['Luis and Anna', 'play tennis and chess'],
            ['The music group', 'meets on Thursday'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I usually go swimming on Sunday.', why: '*usually* before the main verb *go*.' },
            { a: 'How often do you play chess?', why: '*How often* + *do* + subject + verb.' },
            { a: 'She is never late for yoga.', why: '*never* after *be*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
            { q: 'I play football once a week and tennis ___ a week.', a: ['twice'], why: 'Two times: *twice*.' },
            { q: '___ often do you go to the gym?', a: ['How'], why: '*How often* asks about frequency.' },
            { q: 'He ___ goes dancing. He hates it!', a: ['never'], why: 'Not one time: *never*.' },
            { q: 'We go running every ___. Monday to Sunday!', a: ['day'], why: 'All seven days: *every day*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the message and choose the right answer.', items: [
            { q: 'Hi Sam, I can’t play tennis on Saturday – I’m working. Can we play on Sunday afternoon? Maria', o: ['Maria wants to change the day.', 'Maria can’t play tennis.', 'Maria works on Sunday.'], why: 'She can’t play on Saturday and asks for Sunday.' },
            { q: 'YOGA CLASS: Tuesdays and Thursdays, 7 pm. Bring water and a towel.', o: ['There is a class twice a week.', 'The class is every day.', 'The club gives you water.'], why: 'Tuesdays and Thursdays: two times a week.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key reading test, short messages often **change a plan**: *I can’t … Can we … instead?* Find the sentence with **can’t** and the new plan after it. That is usually the answer.' },
        ],
        [
          { t: 'text', md: 'Now talk about your own free time. What do you love doing? How often do you do it? Then say these sentences after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I usually go running on Saturday.' },
            { a: 'How often do you play tennis?' },
            { a: 'I never watch TV in the morning.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'My grandfather ___ use a computer.', o: ['can’t', 'doesn’t can', 'cans not'], why: 'The negative of *can* is *can’t*, the same for every person.' },
      { q: '“Can she cook?” – “Yes, she ___.”', o: ['can', 'does', 'is'], why: 'A short answer repeats *can*.' },
      { q: 'I love ___ in the mountains.', o: ['walking', 'walk', 'to walking'], why: '*love* + *-ing*.' },
      { q: 'They ___ yoga on Tuesdays.', o: ['do', 'go', 'play'], why: '*do yoga*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write I or you.', items: [
      { q: 'Can ___ have the menu, please?', a: ['I'], why: 'You want to get something: *Can I have*.' },
      { q: 'Can ___ help me with this box?', a: ['you'], why: 'The other person does it: *Can you*.' },
    ] },
    { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all of them.', items: [
      { key: 'go', o: ['cycling', 'dancing', 'chess', 'the piano'], a: [0, 1], why: 'You *go* + an *-ing* activity.' },
      { key: 'play', o: ['football', 'the guitar', 'karate', 'running'], a: [0, 1], why: 'Ball sports and instruments: *play*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He [cans] speak German.', a: ['can'], why: '*can* never takes *-s*.' },
      { s: 'I like [cook].', a: ['cooking'], why: '*like* + *-ing*.' },
      { s: 'She [goes always] to the gym.', a: ['always goes'], why: '*always* goes before the main verb: *She always goes to the gym.*' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make a question with can.', items: [
      { q: 'You can play the piano.', cue: 'Can', a: ['Can you play the piano?'], why: 'Put *can* before *you*.' },
      { q: 'He can ride a horse.', cue: 'Can', a: ['Can he ride a horse?'], why: 'Put *can* before *he*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the best answer.', pairs: [
      ['Can I sit here?', 'Yes, of course.'],
      ['How often do you swim?', 'Twice a week.'],
      ['Can you swim?', 'No, I can’t.'],
      ['Do you like dancing?', 'Yes, I love it!'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'We sometimes play chess at the club.', why: '*sometimes* before the main verb.' },
      { a: 'Can you say that again, please?', why: '*Can you* + verb + the rest, then *please*.' },
    ] },
  ],
};
