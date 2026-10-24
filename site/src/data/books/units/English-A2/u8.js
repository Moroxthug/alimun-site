// English A2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Experiences',
  goal: 'Talk about things you have and have not done, and the best and worst of them.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['superlatives', 'present-perfect', 'been-gone', 'past-simple'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The best and the worst',
      about: 'Compare one thing with all the others in a group, with superlatives.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'Use a **superlative** to compare one thing or person with all the others in a group. Put **the** before it.' },
          { t: 'examples', items: [
            { s: 'Kemal is **the tallest** person in our class.', n: 'Taller than all the other people in the class.' },
            { s: 'This is **the most expensive** hotel in the town.', n: 'Long adjectives take *the most*.' },
            { s: 'It was **the best** day of my holiday.', n: '*Good* is irregular: *good, better, the best*.' },
            { s: 'That’s **the worst** film I**’ve** ever **seen**.', n: 'We often use the present perfect with *ever* after a superlative.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Superlatives', explain: ['head'], quiz: true, head: ['Adjective', 'Comparative', 'Superlative'], rows: [
            ['cheap', 'cheaper', 'the cheapest'],
            ['nice', 'nicer', 'the nicest'],
            ['big', 'bigger', 'the biggest'],
            ['happy', 'happier', 'the happiest'],
            ['expensive', 'more expensive', 'the most expensive'],
            ['good', 'better', 'the best'],
            ['bad', 'worse', 'the worst'],
            ['far', 'further', 'the furthest'],
          ] },
          { t: 'text', md: 'Short adjectives add *-est*. If the adjective ends in *-e*, add only *-st*. If it ends in one vowel and one consonant, double the consonant: *big → biggest, hot → hottest*. If it ends in *-y*, change *y* to *i*: *easy → easiest*. Most adjectives with two or more syllables take **the most**.' },
          { t: 'tip', art: 'owl', md: 'After a superlative, use *in* with places and groups: *the oldest building **in** the city*, *the youngest **in** my family*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct superlative.', items: [
            { q: 'This is the ___ café in town.', o: ['best', 'goodest', 'most good'], why: '*Good* is irregular: *the best*.' },
            { q: 'Monday is the ___ day of the week for me.', o: ['busiest', 'busyest', 'most busy'], why: '*Busy* ends in *-y*: change it to *i* and add *-est*.' },
            { q: 'It’s the ___ hotel in the city. A room costs a lot.', o: ['most expensive', 'expensivest', 'more expensive'], why: '*Expensive* is a long adjective: *the most expensive*.' },
            { q: 'August is usually the ___ month here.', o: ['hottest', 'hotest', 'most hot'], why: '*Hot* ends in one vowel and one consonant: double the *t*.' },
            { q: 'Who is the oldest person ___ your family?', o: ['in', 'of', 'from'], why: 'After a superlative, use *in* with a group: *in your family*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the superlative of the adjective in brackets.', items: [
            { q: 'This is the ___ (cheap) ticket.', a: ['cheapest'], why: 'Short adjective: add *-est*.' },
            { q: 'It was the ___ (bad) day of my holiday.', a: ['worst'], why: '*Bad* is irregular: *bad, worse, the worst*.' },
            { q: 'Lena is the ___ (funny) person I know.', a: ['funniest'], why: '*Funny* ends in *-y*: *funniest*.' },
            { q: 'That was the ___ (difficult) exam of the year.', a: ['most difficult'], why: 'Long adjective: *the most difficult*.' },
            { q: 'The ___ (big) room in the flat has a balcony.', a: ['biggest'], why: 'One vowel and one consonant: double the *g*.' },
            { q: 'This is the ___ (beautiful) beach on the island.', a: ['most beautiful'], why: 'Long adjective: *the most beautiful*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'This is the nicest room in the hotel.', why: '*The* + superlative + *in* + place.' },
            { a: 'She is the best cook in our family.', why: '*The best* + noun + *in* + group.' },
            { a: 'What is the most beautiful place you know?', why: 'Question word + *is* + *the most* + adjective + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Have you ever…?',
      about: 'Talk about experiences with the present perfect, *ever* and *never*.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To talk about experiences in your life, when you do not say **when** they happened, use the **present perfect**: *have* or *has* + past participle.\n\nIn questions we often use **ever**: at any time in your life. **Never** means not at any time.' },
          { t: 'examples', items: [
            { s: 'I**’ve been** to Morocco.', n: 'At some time in my life. I do not say when.' },
            { s: '**Have** you **ever eaten** sushi? Yes, I **have**.', n: 'Short answer: *Yes, I have.* or *No, I haven’t.*' },
            { s: 'She**’s never seen** snow.', n: '*Never* goes between *has* and the past participle.' },
            { s: 'We **haven’t tried** rock climbing.', n: 'Negative: *haven’t* + past participle.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Irregular past participles', explain: ['head'], quiz: true, head: ['Verb', 'Past simple', 'Past participle'], rows: [
            ['be', 'was / were', 'been'],
            ['eat', 'ate', 'eaten'],
            ['see', 'saw', 'seen'],
            ['meet', 'met', 'met'],
            ['fly', 'flew', 'flown'],
            ['drive', 'drove', 'driven'],
            ['swim', 'swam', 'swum'],
            ['win', 'won', 'won'],
            ['write', 'wrote', 'written'],
          ] },
          { t: 'tip', art: 'owl', md: 'For regular verbs, the past participle is the same as the past simple: *try → tried → tried*, *visit → visited → visited*. *I’ve visited Rome*, not *I’ve visit Rome*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'Have you ever ___ a horse?', o: ['ridden', 'rode', 'ride'], why: 'Present perfect: *have* + past participle. Ride, rode, ridden.' },
            { q: 'She ___ never been to Asia.', o: ['has', 'have', 'is'], why: '*She* takes *has*.' },
            { q: 'A: Have you ever eaten octopus? B: Yes, I ___.', o: ['have', 'did', 'ate'], why: 'The short answer repeats *have*: *Yes, I have.*' },
            { q: 'I’ve never ___ a famous person.', o: ['met', 'meet', 'meeted'], why: 'Meet, met, met.' },
            { q: '___ your parents ever visited you here?', o: ['Have', 'Has', 'Did'], why: '*Your parents* is plural: *Have*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present perfect of the verb in brackets.', items: [
            { q: 'I ___ (never / fly) in a small plane.', a: ['have never flown', '’ve never flown'], why: '*Never* goes between *have* and the participle. Fly, flew, flown.' },
            { q: '___ (you / ever / win) a prize?', a: ['Have you ever won'], why: 'Question: *Have* + *you* + *ever* + participle. Win, won, won.' },
            { q: 'My sister ___ (drive) across the whole country.', a: ['has driven', '’s driven'], why: '*She* takes *has*. Drive, drove, driven.' },
            { q: 'We ___ (not / try) Korean food.', a: ['haven’t tried', 'have not tried'], why: 'Negative: *haven’t* + participle. *Try* is regular: *tried*.' },
            { q: 'Tom ___ (see) that film three times.', a: ['has seen', '’s seen'], why: 'An experience, with no time: *has seen*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb and its past participle.', pairs: [
            ['eat', 'eaten'],
            ['see', 'seen'],
            ['go', 'gone'],
            ['swim', 'swum'],
            ['write', 'written'],
            ['meet', 'met'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Been or gone? When did you go?',
      about: 'Choose *been* or *gone*, and the present perfect or the past simple.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: '*Go* has two past participles. **Been** means someone went and came back. **Gone** means someone went and is still there, or is on the way.' },
          { t: 'examples', items: [
            { s: 'Sara**’s been** to Japan.', n: 'She went and came back. It is an experience.' },
            { s: 'Sara**’s gone** to Japan.', n: 'She is in Japan now, or travelling there. She is not here.' },
            { s: 'A: Where’s Ben? B: He**’s gone** to the shop.', n: 'Ben is not here at the moment.' },
          ] },
        ],
        [
          { t: 'text', md: 'Use the **present perfect** for an experience when you do not say when. When you say **when**, or ask *When…?*, use the **past simple**.\n\nThese words go with the past simple: *yesterday, last year, in 2019, two years ago, when I was a child*.' },
          { t: 'dialogue', title: 'At work', lines: [
            { who: 'Aylin', s: 'Have you ever been to Scotland?' },
            { who: 'David', s: 'Yes, I have. I went to Edinburgh two years ago.' },
            { who: 'Aylin', s: 'Did you like it?' },
            { who: 'David', s: 'I loved it. I visited the castle and walked a lot. What about you?' },
            { who: 'Aylin', s: 'I’ve never been there, but my brother has gone there to study. He’s there now.' },
          ] },
          { t: 'tip', art: 'owl', md: '*I have been to Edinburgh two years ago* is a mistake. With a finished time, use the past simple: *I went to Edinburgh two years ago*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose *been* or *gone*.', items: [
            { q: 'Dad isn’t here. He’s ___ to work.', o: ['gone', 'been'], why: 'He is at work now, not here: *gone*.' },
            { q: 'I’ve ___ to Brazil twice. I loved it both times.', o: ['been', 'gone'], why: 'I went and came back: *been*.' },
            { q: 'Have you ever ___ to a music festival?', o: ['been', 'gone'], why: 'A question about experience: *been*.' },
            { q: 'Where are Mia and Joe? Have they ___ home?', o: ['gone', 'been'], why: 'They are not here now. They went home: *gone*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'We ___ to Lisbon last summer.', o: ['went', 'have been', 'have gone'], why: '*Last summer* is a finished time: past simple.' },
            { q: 'I ___ a camel. Have you?', o: ['have ridden', 'rode', 'ride'], why: 'An experience with no time: present perfect.' },
            { q: 'When ___ you start this job?', o: ['did', 'have', 'has'], why: 'A question with *When* asks about a finished time: past simple.' },
            { q: 'She ___ her husband in 2015.', o: ['met', 'has met', 'have met'], why: '*In 2015* is a finished time: past simple.' },
            { q: '___ you ever lost your passport?', o: ['Have', 'Did', 'Were'], why: '*Ever* + experience: present perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present perfect or the past simple of the verb in brackets.', items: [
            { q: 'I ___ (see) that film last weekend.', a: ['saw'], why: '*Last weekend* is a finished time: past simple.' },
            { q: 'My parents ___ (never / travel) by plane.', a: ['have never travelled', '’ve never travelled', 'have never traveled'], why: 'Experience in their whole life: present perfect. British English writes *travelled* with *ll*.' },
            { q: 'Oscar ___ (lose) his phone two days ago.', a: ['lost'], why: '*Two days ago* is a finished time: past simple.' },
            { q: '___ (you / ever / try) Indian food?', a: ['Have you ever tried'], why: '*Ever* + experience: present perfect.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the past simple.', items: [
            { s: 'Yes, I have. I [went] to Edinburgh two years ago.', why: '*Went* has a finished time, *two years ago*. *I have* is the present perfect.' },
            { s: 'I [loved] it. I [visited] the castle and [walked] a lot.', why: '*Loved*, *visited* and *walked* are past simple: they are details about the trip two years ago.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The best day of my life',
      about: 'Read three people’s stories about their best day.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'The best day of my life', md: '**Nikhil:** The best day of my life was my graduation. I studied in the evenings for five years while I was working in a shop. My whole family came to the ceremony, and my grandmother cried. I’ve never felt so proud.\n\n**Amara:** I’ve travelled a lot, but my best day was in a small village by the sea. I was walking on the beach early in the morning when I saw dolphins in the water. It was the most beautiful thing I’ve ever seen.\n\n**Jun:** My best day? The day my daughter was born. It was also the longest day of my life! I didn’t sleep for thirty hours, but I’ve never been happier.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nikhil studied for five years.', a: 't', why: '“I studied in the evenings for five years.”' },
            { q: 'Nikhil’s grandmother didn’t go to the graduation.', a: 'f', why: 'His whole family came, and his grandmother cried.' },
            { q: 'Amara has never travelled much.', a: 'f', why: 'She says “I’ve travelled a lot.”' },
            { q: 'Amara saw the dolphins from a boat.', a: 'f', why: 'She was walking on the beach.' },
            { q: 'Jun’s daughter is now five years old.', a: 'ng', why: 'Jun does not say how old his daughter is.' },
            { q: 'Jun slept a lot on his best day.', a: 'f', why: 'He didn’t sleep for thirty hours.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Who says it? Choose the person.', items: [
            { q: '“It was the most beautiful thing I’ve ever seen.”', o: ['Amara', 'Nikhil', 'Jun'], why: 'Amara says this about the dolphins.' },
            { q: '“I’ve never been happier.”', o: ['Jun', 'Amara', 'Nikhil'], why: 'Jun says this about the day his daughter was born.' },
            { q: '“I’ve never felt so proud.”', o: ['Nikhil', 'Jun', 'Amara'], why: 'Nikhil says this about his graduation.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'This is the ___ restaurant in the city.', o: ['best', 'better', 'goodest'], why: '*Good, better, the best*.' },
      { q: 'It was the ___ journey of my life.', o: ['longest', 'most long', 'longer'], why: 'Short adjective: *the longest*.' },
      { q: 'Have you ever ___ to Egypt?', o: ['been', 'gone', 'went'], why: 'A question about experience: *been*.' },
      { q: 'Lucas isn’t at home. He’s ___ to the gym.', o: ['gone', 'been', 'go'], why: 'He is at the gym now: *gone*.' },
      { q: 'I ___ my first job in 2018.', o: ['got', 'have got', 'have gotten'], why: '*In 2018* is a finished time: past simple.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the word in brackets.', items: [
      { q: 'That was the ___ (easy) test of the year.', a: ['easiest'], why: '*Easy* ends in *-y*: *easiest*.' },
      { q: 'She ___ (never / eat) Mexican food.', a: ['has never eaten', '’s never eaten'], why: 'Experience: *has never* + past participle. Eat, ate, eaten.' },
      { q: 'We ___ (visit) my aunt last week.', a: ['visited'], why: '*Last week* is a finished time: past simple.' },
      { q: 'It was the ___ (bad) meal I’ve ever had.', a: ['worst'], why: '*Bad, worse, the worst*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Have you ever met a famous person?', why: '*Have* + *you* + *ever* + past participle.' },
      { a: 'I have never been to Canada.', why: '*Never* goes between *have* and the participle.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['I went to Rome two years ago.', 'I have been to Rome two years ago.', 'I have gone to Rome two years ago.'], why: '*Two years ago* is a finished time: past simple.' },
      { q: '', o: ['It’s the most expensive car in the shop.', 'It’s the expensivest car in the shop.', 'It’s the more expensive car in the shop.'], why: 'Long adjective: *the most expensive*.' },
      { q: '', o: ['Have you ever seen a whale?', 'Did you ever seen a whale?', 'Have you ever saw a whale?'], why: '*Have* + past participle: *seen*.' },
    ] },
  ],
};
