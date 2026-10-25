// English B1 for work, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Small talk at work',
  goal: 'Make small talk with colleagues and clients.',
  art: 'teacup',
  tags: { skills: ['speaking', 'listening', 'reading'], topics: ['small-talk', 'follow-up-questions', 'reactions', 'ending-conversations'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Safe topics and follow-up questions',
      about: 'Choose safe topics and keep a conversation going with follow-up questions.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Small talk is a short, friendly conversation about everyday things, for example before a meeting or at the coffee machine. In the UK, safe topics are the weather, the journey, the weekend, holidays, food and work in general. People usually avoid money, politics, religion and very personal questions, especially with people they do not know well.' },
          { t: 'table', caption: 'Starting a conversation', explain: ['head', 'col0'], quiz: true, head: ['Topic', 'Opening question'], rows: [
            ['The journey', 'Did you find us OK?'],
            ['The weekend', 'Did you do anything nice at the weekend?'],
            ['The weather', 'Lovely day, isn’t it?'],
            ['Holidays', 'Are you going anywhere this summer?'],
            ['Work', 'How long have you been with the company?'],
          ] },
        ],
        [
          { t: 'text', md: 'A conversation stops quickly if you only answer. Give a little extra information, then ask a **follow-up question** about what the other person said.' },
          { t: 'dialogue', title: 'At the coffee machine', lines: [
            { who: 'Sofia', s: 'Morning, James. Did you have a good weekend?' },
            { who: 'James', s: 'Yes, thanks. I went walking in the Lake District with some friends.' },
            { who: 'Sofia', s: 'Oh, nice! Was the weather OK?' },
            { who: 'James', s: 'Mostly. It rained on Sunday, but Saturday was beautiful. How about you?' },
            { who: 'Sofia', s: 'Quite quiet. My sister came to visit, so we just cooked and watched films.' },
            { who: 'James', s: 'That sounds relaxing. Does she live far away?' },
            { who: 'Sofia', s: 'In Cardiff, so about three hours by train.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose a good small-talk question.', items: [
            { q: 'You meet a visitor at reception.', o: ['Did you find us OK?', 'How much do you earn?', 'Who did you vote for?'], why: 'The journey is a safe topic. Money and politics are not.' },
            { q: 'It is Monday morning.', o: ['Did you do anything nice at the weekend?', 'Why do you look so tired?', 'Are you married?'], why: 'The weekend is a safe topic. The other questions are too personal.' },
            { q: 'A colleague says: ‘I’ve just come back from Portugal.’', o: ['Oh, lovely! Where did you go?', 'OK.', 'Portugal is too hot.'], why: 'React with interest and ask a follow-up question.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match what people say and a good follow-up question.', pairs: [
            ['I went to a concert on Saturday.', 'Oh nice, who did you see?'],
            ['We’ve just moved to a new flat.', 'Congratulations! Which part of town is it in?'],
            ['I’m going to Japan in May.', 'How exciting! Is it your first time there?'],
            ['I play in a football team.', 'What position do you play?'],
            ['My daughter started school this week.', 'How did her first day go?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the follow-up questions.', items: [
            { q: 'A: I was in Rome last week. B: Oh, really? ___ was it?', a: ['How'], why: '*How was it?* asks for an opinion about something in the past.' },
            { q: 'A: I’ve just come back from holiday. B: Lovely! Where ___ you go?', a: ['did'], why: 'A past simple question: *Where did you go?*' },
            { q: 'A: My parents are visiting this weekend. B: That’s nice. Where ___ they live?', a: ['do'], why: 'A present simple question about a fact: *Where do they live?*' },
            { q: 'A: I started running last year. B: Great! How often ___ you go?', a: ['do'], why: 'A habit now: *How often do you go?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Showing interest and ending politely',
      about: 'React to what people say and leave a conversation in a friendly way.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'Show that you are listening with short reactions. Your voice is important too: try to sound interested.' },
          { t: 'examples', items: [
            { s: '**Really?** That’s interesting.', n: 'Surprise and interest.' },
            { s: '**That sounds** great!', n: '*That sounds* + adjective: for good news.' },
            { s: '**Oh no!** I’m sorry to hear that.', n: 'For bad news.' },
            { s: '**So do I.**', n: 'You agree with a positive sentence: *I love Italian food.* – *So do I.*' },
            { s: '**Neither do I.**', n: 'You agree with a negative sentence: *I don’t like flying.* – *Neither do I.*' },
          ] },
        ],
        [
          { t: 'text', md: 'To end a conversation, do not just walk away. Give a **reason**, say something friendly and perhaps make a plan.' },
          { t: 'table', caption: 'Ending a conversation', explain: ['head', 'col0'], quiz: true, head: ['', 'Phrase'], rows: [
            ['Give a reason', 'Anyway, I should get back to work.'],
            ['Give a reason', 'Sorry, I have a meeting at ten.'],
            ['Say it was nice', 'It was really nice to meet you.'],
            ['Make a plan', 'Let’s have lunch sometime next week.'],
            ['Say goodbye', 'See you later. Have a good weekend!'],
          ] },
          { t: 'tip', art: 'owl', md: '*Anyway* is a useful word. At the start of a sentence, it tells the other person that you want to finish the conversation or change the topic.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best reaction.', items: [
            { q: '‘I’ve just got a new job!’', o: ['Congratulations! That sounds great.', 'Oh no! I’m sorry to hear that.', 'Neither do I.'], why: 'Good news: *Congratulations!*' },
            { q: '‘My flight was cancelled, so I slept at the airport.’', o: ['Oh no! That sounds awful.', 'Really? That sounds great.', 'So do I.'], why: 'Bad news: *Oh no!* + *That sounds awful.*' },
            { q: '‘I don’t really like big parties.’', o: ['Neither do I.', 'So do I.', 'Me neither do.'], why: 'The sentence is negative, so agree with *Neither do I* (or *Me neither*).' },
            { q: '‘I love working from home on Fridays.’', o: ['So do I.', 'Neither do I.', 'So am I.'], why: 'Positive sentence with *love*: *So do I.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I should get back to work.', why: 'A polite reason to end a conversation.' },
            { a: 'It was nice to meet you.', why: '*It was nice to* + verb.' },
            { a: 'That sounds like a great idea.', why: '*That sounds like* + noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the reactions.', items: [
            { q: 'I’m sorry to ___ that. I hope your mum feels better soon.', a: ['hear'], why: '*I’m sorry to hear that*: a reaction to bad news.' },
            { q: 'That ___ amazing! Did you take lots of photos?', a: ['sounds'], why: '*That sounds* + adjective.' },
            { q: 'It was really nice ___ meet you.', a: ['to'], why: '*Nice to* + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: small talk at work',
      about: 'Read an article about small talk and why it matters at work.',
      art: 'nata',
      spreads: [
        [
          { t: 'reading', title: 'Why small talk matters', md: 'Many people say they hate small talk. They find it boring or difficult, and they would prefer to talk about something important. But at work, a few minutes of friendly conversation can be very useful.\n\nSmall talk helps people to build trust. When you know a little about a colleague’s life, it is easier to ask them for help or to tell them about a problem. Colleagues who chat together often find it easier to work together too.\n\nSmall talk is also a good way to start a meeting, especially with a new client. Two or three minutes about the journey or the weather give everyone time to relax before the real discussion begins.\n\nSo how can you get better at it? Listen more than you talk, and ask open questions that start with ‘what’, ‘how’ or ‘where’, not questions with a yes or no answer. Also, remember details: if a colleague told you about their son’s exam, ask how it went next time.\n\nTopics are different in different cultures. In some countries, people ask about family very quickly; in others, this can feel too personal. If you are not sure, start with the journey or the weekend.\n\nAnd if the conversation stops? That is fine. A smile and ‘Anyway, I’d better get back to work’ is enough.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'The writer thinks small talk is a waste of time at work.', a: 'f', why: '*A few minutes of friendly conversation can be very useful.*' },
            { q: 'Small talk can make it easier to ask a colleague for help.', a: 't', why: '*It is easier to ask them for help.*' },
            { q: 'The writer suggests questions with a yes or no answer.', a: 'f', why: 'The writer suggests open questions, *not questions with a yes or no answer*.' },
            { q: 'In every country, people ask about family very quickly.', a: 'f', why: '*In some countries… in others, this can feel too personal.*' },
            { q: 'The writer used to find small talk difficult.', a: 'ng', why: 'The writer says many people find it difficult, but nothing about their own experience.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Which is an open question?', o: ['What did you do at the weekend?', 'Did you have a nice weekend?', 'Was it sunny?'], why: 'It starts with *what*, so the answer is more than *yes* or *no*.' },
            { q: 'Why is small talk useful at the start of a meeting?', o: ['It gives everyone time to relax.', 'It makes the meeting shorter.', 'It is the most important part.'], why: '*Give everyone time to relax before the real discussion begins.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the question words that start open questions.', items: [
            { s: '[Where] did you go on holiday, and [how] was the hotel?', why: '*Where* and *how* start open questions.' },
            { s: 'Did you see the match? [What] did you think of it?', why: '*Did you…?* is a yes or no question. *What* starts an open question.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A safe topic with a new client: ___', o: ['the journey', 'their salary', 'politics'], why: 'The journey is safe. Money and politics are not.' },
      { q: '‘I don’t like Mondays.’ – ‘___’', o: ['Neither do I.', 'So do I.', 'Me too do.'], why: 'Agree with a negative sentence: *Neither do I.*' },
      { q: '‘I passed my driving test!’ – ‘___’', o: ['Congratulations!', 'I’m sorry to hear that.', 'Neither do I.'], why: 'Good news: *Congratulations!*' },
      { q: 'You want to end the conversation politely: ___', o: ['Anyway, I should get back to work.', 'I don’t want to talk any more.', 'Go away, please.'], why: '*Anyway* + a reason.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'That ___ lovely. Where did you stay?', a: ['sounds'], why: '*That sounds* + adjective.' },
      { q: 'Did you do anything nice ___ the weekend?', a: ['at', 'over'], why: 'In British English: *at the weekend*.' },
      { q: 'A: I’m going to Canada next month. B: How exciting! ___ you been there before?', a: ['Have'], why: 'Experience up to now: *Have you been…?*' },
      { q: 'A: I started a pottery class. B: Really? How often ___ you go?', a: ['do'], why: 'A habit now: *How often do you go?*' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Did you find us OK?', why: 'A safe question for a visitor.' },
      { a: 'Where did you go on holiday?', why: 'Question word + *did* + subject + verb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match what people say and the best reaction.', pairs: [
      ['I’ve just got engaged!', 'Congratulations!'],
      ['I lost my phone on the train.', 'Oh no, that sounds awful.'],
      ['I love Italian food.', 'So do I.'],
      ['I don’t drink coffee.', 'Neither do I.'],
    ] },
  ],
};
