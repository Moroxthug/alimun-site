// English B1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Food and health',
  goal: 'Talk about food, health and habits, and give advice.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['first-conditional', 'time-clauses', 'too-enough', 'advice', 'health'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'If you eat well…',
      about: 'Talk about possible future situations with the first conditional, when, as soon as and unless.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Use the **first conditional** for a possible situation in the future and its result: *if* + present simple, then *will* + infinitive.' },
          { t: 'examples', items: [
            { s: 'If you **eat** breakfast, you**’ll have** more energy.', n: 'Present simple after *if*, *will* in the result.' },
            { s: 'If it **rains** tomorrow, we **won’t go** for a run.', n: 'Negative result: *won’t* + infinitive.' },
            { s: 'What **will** you **do** if the shop **is** closed?', n: 'A question about the result.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Never use *will* after *if*. *If it will rain* is wrong. When the *if* part comes first, put a comma after it. When it comes second, you do not need a comma.' },
        ],
        [
          { t: 'text', md: 'After **when**, **as soon as**, **before**, **after** and **until**, we also use the present simple to talk about the future. **Unless** means *if … not*.' },
          { t: 'examples', items: [
            { s: 'I**’ll call** you **when** I **get** home.', n: 'Not *when I will get*.' },
            { s: '**As soon as** the soup **is** ready, I**’ll tell** you.', n: '*As soon as* means immediately when.' },
            { s: 'You **won’t lose** weight **unless** you **change** your diet.', n: 'The same as *if you don’t change* your diet.' },
          ] },
          { t: 'tip', art: 'owl', md: '*If* or *when*? *If I see her* means maybe I will see her. *When I see her* means I am sure I will see her.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'If you ___ more water, you’ll feel better.', o: ['drink', 'will drink', 'drank'], why: 'After *if*, use the present simple for the future.' },
            { q: 'I ___ you the recipe if you give me your email address.', o: ['’ll send', 'send', 'sent'], why: 'The result: *will* + infinitive.' },
            { q: 'We’ll start dinner as soon as Marco ___.', o: ['arrives', 'will arrive', 'arrive'], why: 'After *as soon as*, use the present simple. *Marco* takes *-s*.' },
            { q: 'You won’t sleep well ___ you stop drinking coffee in the evening.', o: ['unless', 'if', 'when'], why: '*Unless* means *if not*: if you don’t stop, you won’t sleep well.' },
            { q: 'What will you do if the doctor ___ you to stop running?', o: ['tells', 'will tell', 'told'], why: 'Present simple after *if*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
            { q: 'If you ___ (not / sleep) enough, you’ll feel tired.', a: ['don’t sleep', 'do not sleep'], why: 'Present simple after *if*: *don’t sleep*.' },
            { q: 'I ___ (cook) tonight if you do the shopping.', a: ['’ll cook', 'will cook'], why: 'The result: *will* + infinitive.' },
            { q: 'Call me when you ___ (finish) work.', a: ['finish'], why: 'Present simple after *when*, not *will finish*.' },
            { q: 'Unless we ___ (leave) now, we’ll miss the start of the class.', a: ['leave'], why: 'Present simple after *unless*.' },
            { q: 'If it ___ (be) sunny on Sunday, we’ll have a picnic.', a: ['is', '’s'], why: 'Present simple after *if*: *it is*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['If you exercise every day,', 'you’ll feel fitter.'],
            ['As soon as the water boils,', 'add the pasta.'],
            ['Unless you book a table,', 'we won’t get in.'],
            ['I’ll make a salad', 'when I get home.'],
            ['If it’s too hot outside,', 'we’ll eat inside.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Too much, not enough',
      about: 'Say there is more or less of something than you need.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: '**Too** means more than is good or possible. Use **too** + adjective, **too much** + uncountable noun and **too many** + plural noun. **Enough** means as much as you need. It goes **after** an adjective but **before** a noun.' },
          { t: 'table', caption: 'Too and enough', explain: ['head', 'col0'], quiz: true, head: ['Pattern', 'Example'], rows: [
            ['too + adjective', 'This coffee is too hot.'],
            ['too much + uncountable noun', 'I eat too much sugar.'],
            ['too many + plural noun', 'There are too many people here.'],
            ['adjective + enough', 'The soup isn’t hot enough.'],
            ['enough + noun', 'We haven’t got enough chairs.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'I**’m** not **fit enough** to run ten kilometres.', n: 'Adjective + *enough*.' },
            { s: 'Do we have **enough eggs** for the cake?', n: '*Enough* + noun.' },
            { s: 'This bag is **too heavy to carry**.', n: '*Too* + adjective + *to* + infinitive.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Too* is negative: it means there is a problem. *This dress is too beautiful* sounds strange. Say *very beautiful* or *so beautiful*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'I can’t drink this tea. It’s ___ hot.', o: ['too', 'too much', 'enough'], why: '*Too* + adjective.' },
            { q: 'You eat ___ biscuits. Have some fruit instead.', o: ['too many', 'too much', 'enough of'], why: '*Biscuits* is a plural noun, so *too many*.' },
            { q: 'There’s ___ salt in this soup. I can’t eat it.', o: ['too much', 'too many', 'enough'], why: '*Salt* is uncountable, so *too much*.' },
            { q: 'He isn’t old ___ to drive.', o: ['enough', 'too', 'too much'], why: 'Adjective + *enough*.' },
            { q: 'Have we got ___ for everyone?', o: ['enough plates', 'plates enough', 'too plates'], why: '*Enough* goes before a noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with too, too much, too many or enough.', items: [
            { q: 'I drink ___ coffee. I need to stop after two cups a day.', a: ['too much'], why: '*Coffee* is uncountable here, so *too much*.' },
            { q: 'The gym is ___ far from my flat, so I never go.', a: ['too'], why: '*Too* + adjective.' },
            { q: 'We didn’t buy ___ bread, so I’ll go back to the shop.', a: ['enough'], why: 'We need more: *not enough* + noun.' },
            { q: 'There are ___ cars in the city centre. The air is terrible.', a: ['too many'], why: '*Cars* is a plural noun, so *too many*.' },
            { q: 'Is the room warm ___ for you?', a: ['enough'], why: '*Enough* goes after an adjective.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'This box is too heavy to carry.', why: '*Too* + adjective + *to* + infinitive.' },
            { a: 'She isn’t tall enough to reach the shelf.', why: 'Adjective + *enough* + *to* + infinitive.' },
            { a: 'We haven’t got enough time to cook.', why: '*Enough* + noun + *to* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'You should see a doctor',
      about: 'Give advice with should, ought to, had better and If I were you.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To give advice, use **should** + infinitive. **Ought to** means the same, but it is less common. In the negative we usually say *shouldn’t*. **If I were you, I’d…** is a friendly way to give advice.' },
          { t: 'table', caption: 'Giving advice', explain: ['head'], head: ['Form', 'Example'], rows: [
            ['should / shouldn’t', 'You should rest.'],
            ['ought to', 'You ought to rest.'],
            ['had better (not)', 'You’d better rest.'],
            ['If I were you, I’d…', 'If I were you, I’d rest.'],
          ] },
          { t: 'examples', items: [
            { s: 'You **should see** a doctor about that cough.', n: '*Should* + infinitive, without *to*.' },
            { s: 'You **ought to drink** more water.', n: 'The same meaning as *should*. *Ought* is followed by *to*.' },
            { s: 'If I **were** you, I**’d take** a day off.', n: 'Use *were* in this phrase. *I’d* means *I would*.' },
          ] },
        ],
        [
          { t: 'text', md: '**Had better** (*’d better*) + infinitive is stronger. We use it for a particular situation, and it often means something bad will happen if you do not do it.' },
          { t: 'examples', items: [
            { s: 'You**’d better leave** now, or you’ll miss your train.', n: 'If you do not leave now, there will be a problem.' },
            { s: 'We**’d better not eat** that. It smells strange.', n: 'Negative: *had better not* + infinitive.' },
          ] },
          { t: 'tip', art: 'owl', md: 'After *should*, *had better* and *would*, the verb has no *to*: *You should go*, not *You should to go*. Only *ought* takes *to*. And *had better* is about now or the future, not the past.' },
        ],
        [
          { t: 'dialogue', title: 'At the pharmacy', lines: [
            { who: 'Pharmacist', s: 'Hello. How can I help?' },
            { who: 'Ravi', s: 'I’ve had a sore throat for three days, and I can’t sleep.' },
            { who: 'Pharmacist', s: 'You should have plenty of warm drinks, and you ought to rest your voice.' },
            { who: 'Ravi', s: 'But I’ve got an important presentation on Friday.' },
            { who: 'Pharmacist', s: 'Then you’d better not talk too much before it. If I were you, I’d try these throat sweets.' },
            { who: 'Ravi', s: 'And what if it doesn’t get better?' },
            { who: 'Pharmacist', s: 'If it doesn’t get better in a week, you should see a doctor.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Ravi has had a sore throat since yesterday.', a: 'f', why: 'He has had it for three days.' },
            { q: 'Ravi is having problems sleeping.', a: 't', why: '“I can’t sleep.”' },
            { q: 'The pharmacist tells Ravi to talk as little as possible before Friday.', a: 't', why: '“You’d better not talk too much before it.”' },
            { q: 'The pharmacist says Ravi should see a doctor today.', a: 'f', why: 'Only if it doesn’t get better in a week.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'You look tired. You ___ go to bed early tonight.', o: ['should', 'should to', 'ought'], why: '*Should* + infinitive without *to*. *Ought* needs *to*.' },
            { q: 'If I ___ you, I’d talk to your manager.', o: ['were', 'am', 'would be'], why: 'The fixed phrase is *If I were you*.' },
            { q: 'The shop closes in ten minutes. We’d better ___.', o: ['hurry', 'to hurry', 'hurrying'], why: '*Had better* + infinitive without *to*.' },
            { q: 'You ___ to eat more vegetables.', o: ['ought', 'should', 'had better'], why: 'Only *ought* is followed by *to*.' },
            { q: 'You ___ lift heavy things after your operation.', o: ['shouldn’t', 'don’t should', 'not should'], why: 'The negative of *should* is *shouldn’t*, without *do*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the advice. Use the words in brackets.', items: [
            { q: 'You ___ (had better / not) be late on your first day.', a: ['’d better not', 'had better not'], why: 'Negative: *had better not* + infinitive.' },
            { q: 'If I were you, I ___ (book) the tickets now.', a: ['’d book', 'would book'], why: '*If I were you* + *I’d* (*I would*) + infinitive.' },
            { q: 'You ___ (should / not) drink coffee after 4 p.m. if you want to sleep well.', a: ['shouldn’t', 'should not'], why: 'Negative advice: *shouldn’t* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Small habits, big changes',
      about: 'Read an article about healthy habits that are easy to keep.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Small habits, big changes', md: 'Every January, many people make big promises: no more sugar, the gym five times a week, bed by ten. By February, most of these promises are forgotten. The problem is not the people. The problem is that the changes are too big.\n\nThe best advice is to start small. If you want to read more, don’t try to read for an hour a day. Read two pages before you go to sleep. If you want to drink more water, keep a glass next to your computer. These changes are so easy that it is hard to say no to them.\n\nAnother useful idea is to connect a new habit to an old one. For example: “When I make my morning coffee, I’ll do ten squats.” You already make coffee every day, so the coffee reminds you of the new habit.\n\nYou should also make bad habits harder. If there are too many biscuits in the cupboard, you’ll eat them. If there aren’t any, you won’t. Some people leave their phone in another room at night, so they don’t look at it in bed.\n\nFinally, don’t worry if you miss a day. One bad day isn’t a problem, but two or three can become a new habit. So if you miss a day, start again as soon as you can.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer thinks people fail because their changes are too big.', a: 't', why: '“The problem is that the changes are too big.”' },
            { q: 'The writer suggests reading for an hour every evening.', a: 'f', why: 'The writer suggests reading two pages.' },
            { q: 'The writer goes to the gym five times a week.', a: 'ng', why: 'The text does not say what the writer does.' },
            { q: 'Connecting a new habit to an old one can help you remember it.', a: 't', why: 'The old habit reminds you of the new one.' },
            { q: 'Missing one day is a serious problem.', a: 'f', why: '“One bad day isn’t a problem.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Why does the writer talk about a glass next to the computer?', o: ['It is an example of a small, easy change.', 'It is a way to stop drinking coffee.', 'It is a rule from a doctor.'], why: 'It shows how to start small.' },
            { q: '“If there aren’t any, you won’t.” What won’t you do?', o: ['Eat biscuits.', 'Buy biscuits.', 'Open the cupboard.'], why: 'It means: if there aren’t any biscuits, you won’t eat them.' },
            { q: 'What should you do if you miss a day?', o: ['Start again as soon as possible.', 'Wait until the next week.', 'Make the habit bigger.'], why: '“Start again as soon as you can.”' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'If you ___ late again, the teacher will be angry.', o: ['are', 'will be', 'were'], why: 'First conditional: present simple after *if*.' },
      { q: 'I’ll call you as soon as the results ___.', o: ['arrive', 'will arrive', 'arrived'], why: 'Present simple after *as soon as*.' },
      { q: 'There are ___ people in this waiting room. Let’s come back later.', o: ['too many', 'too much', 'enough'], why: '*People* is plural, so *too many*.' },
      { q: 'It’s going to rain. You’d ___ take an umbrella.', o: ['better', 'should', 'ought'], why: '*You’d better* + infinitive.' },
      { q: 'If I ___ you, I’d see a doctor.', o: ['were', 'am', 'will be'], why: 'The fixed phrase is *If I were you*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the words in brackets.', items: [
      { q: 'We won’t finish on time unless we ___ (start) now.', a: ['start'], why: 'Present simple after *unless*.' },
      { q: 'This jacket isn’t ___ (big / enough) for me.', a: ['big enough'], why: '*Enough* goes after an adjective.' },
      { q: 'You ___ (should / not) eat so much salt.', a: ['shouldn’t', 'should not'], why: 'Negative advice: *shouldn’t*.' },
      { q: 'If it ___ (not / rain), we’ll walk to the restaurant.', a: ['doesn’t rain', 'does not rain'], why: 'Present simple after *if*: *doesn’t rain*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'You ought to drink more water.', why: '*Ought to* + infinitive.' },
      { a: 'The coffee is too hot to drink.', why: '*Too* + adjective + *to* + infinitive.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['I’ll tell you when I know.', 'I’ll tell you when I will know.', 'I tell you when I will know.'], why: 'Present simple after *when*, *will* in the result.' },
      { q: '', o: ['You should take a break.', 'You should to take a break.', 'You should taking a break.'], why: '*Should* + infinitive without *to*.' },
      { q: '', o: ['We haven’t got enough money.', 'We haven’t got money enough.', 'We haven’t got too money.'], why: '*Enough* goes before a noun.' },
    ] },
  ],
};
