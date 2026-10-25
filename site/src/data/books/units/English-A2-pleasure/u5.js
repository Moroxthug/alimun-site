// English A2 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Sightseeing',
  goal: 'Ask about sights, opening times and tickets, and talk about what you saw.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['sightseeing', 'tickets', 'opening-times', 'past-simple'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'What time does it open?',
      about: 'Ask about sights, tours, opening times and tickets.',
      art: 'sun',
      spreads: [
        [
          { t: 'table', caption: 'Things to see and do', explain: ['head', 'col1'], quiz: true, head: ['Word', 'What it is'], rows: [
            ['a castle', 'a big, old building with strong walls'],
            ['a cathedral', 'a very big, important church'],
            ['a gallery', 'a place where you look at paintings and art'],
            ['a market', 'a place outside where people sell food and other things'],
            ['a guided tour', 'a visit with a person who tells you about the place'],
            ['a boat trip', 'a short journey on a boat to see a place from the water'],
          ] },
          { t: 'tip', art: 'owl', md: 'Ask at the *tourist information centre*. The staff can give you a map, tell you about tours and often sell tickets.' },
        ],
        [
          { t: 'dialogue', title: 'At the tourist information centre', lines: [
            { who: 'Kenji', s: 'Hello. What time does the castle open?' },
            { who: 'Assistant', s: 'It opens at ten and closes at five. But it’s closed on Mondays.' },
            { who: 'Kenji', s: 'How much is a ticket?' },
            { who: 'Assistant', s: 'It’s fourteen pounds for adults. There’s a discount for students.' },
            { who: 'Kenji', s: 'Are there any guided tours in English?' },
            { who: 'Assistant', s: 'Yes, there’s one at eleven and one at two. It takes about an hour.' },
            { who: 'Kenji', s: 'Can I buy tickets here?' },
            { who: 'Assistant', s: 'Yes, you can. And it’s cheaper online.' },
          ] },
          { t: 'text', md: 'Use *What time does… open / close?* for opening times. Use *How much is…?* for prices. Use *Is there… / Are there any…?* to ask if something exists.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['What time does the gallery open?', 'At half past nine.'],
            ['How much is a ticket?', 'Twelve pounds.'],
            ['How long does the tour take?', 'About two hours.'],
            ['Is there a discount for children?', 'Yes, children under five go free.'],
            ['Where can I buy tickets?', 'At the entrance or online.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'What time does the museum ___?', o: ['close', 'closes', 'closed'], why: 'After *does*, use the base form: *close*.' },
            { q: 'The cathedral is closed ___ Sundays.', o: ['on', 'in', 'at'], why: 'Use *on* with days of the week.' },
            { q: 'Are there ___ tours in Spanish?', o: ['any', 'a', 'some of'], why: '*Are there any…?* with a plural noun.' },
            { q: 'Is there a ___ for students?', o: ['discount', 'price', 'ticket office'], why: 'A *discount* is a lower price for some people.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
            { a: 'What time does the castle close?', why: '*What time* + *does* + subject + verb.' },
            { a: 'How much is a ticket for children?', why: '*How much* + *is* + the thing.' },
            { a: 'Are there any tours in English?', why: '*Are there any…?* with a plural noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the questions.', items: [
            { q: 'How ___ does the tour take? One hour or two?', a: ['long'], why: '*How long…?* asks about time.' },
            { q: '___ there a guided tour in French?', a: ['Is'], why: '*A guided tour* is one thing: *Is there…?*' },
            { q: '___ can I buy tickets? Here or at the castle?', a: ['Where'], why: '*Where…?* asks about a place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'We went to the castle',
      about: 'Talk about your day with the past simple.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To talk about your day, use the **past simple**. Regular verbs end in *-ed*: *visit*, *visited*. Many common verbs are irregular. Learn them one by one.' },
          { t: 'table', caption: 'Useful verbs for a day out', explain: ['head'], quiz: true, head: ['Verb', 'Past simple'], rows: [
            ['go', 'went'],
            ['see', 'saw'],
            ['take', 'took'],
            ['buy', 'bought'],
            ['eat', 'ate'],
            ['have', 'had'],
            ['visit', 'visited'],
            ['walk', 'walked'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Back at the hotel', lines: [
            { who: 'Olga', s: 'Hi! What did you do today?' },
            { who: 'Sam', s: 'We went to the castle in the morning. We took a guided tour.' },
            { who: 'Olga', s: 'Was it good?' },
            { who: 'Sam', s: 'Yes, it was great. The guide was very funny. Then we had lunch at the market.' },
            { who: 'Olga', s: 'Did you see the cathedral?' },
            { who: 'Sam', s: 'No, we didn’t. We were too tired! What about you?' },
            { who: 'Olga', s: 'I visited the gallery and bought some postcards.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In questions and negatives, use *did* + the base form: *Did you see the cathedral?* *We didn’t see it.* Not *Did you saw…?*' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the past simple.', items: [
            { q: 'Yesterday we ___ (go) on a boat trip.', a: ['went'], why: '*Go* is irregular: *went*.' },
            { q: 'I ___ (take) a lot of photos of the old town.', a: ['took'], why: '*Take* is irregular: *took*.' },
            { q: 'We ___ (visit) the gallery in the afternoon.', a: ['visited'], why: '*Visit* is regular: *visited*.' },
            { q: 'She ___ (buy) a map at the tourist information centre.', a: ['bought'], why: '*Buy* is irregular: *bought*.' },
            { q: 'We ___ (eat) fish and chips by the sea.', a: ['ate'], why: '*Eat* is irregular: *ate*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Did you see the castle?', 'Did you saw the castle?', 'Do you saw the castle?'], why: '*Did* + base form: *Did you see…?*' },
            { q: '', o: ['We didn’t go to the museum.', 'We didn’t went to the museum.', 'We not went to the museum.'], why: '*Didn’t* + base form: *didn’t go*.' },
            { q: '', o: ['The tour was very interesting.', 'The tour were very interesting.', 'The tour is very interesting yesterday.'], why: '*The tour* is one thing: *was*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the past simple.', items: [
            { s: 'In the morning we [walked] to the market and [had] coffee there.', why: '*Walked* is regular. *Had* is the past of *have*.' },
            { s: 'Then I [saw] the cathedral and [bought] a guidebook.', why: '*Saw* is the past of *see*. *Bought* is the past of *buy*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A city leaflet',
      about: 'Read a leaflet about the sights of a town.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Welcome to Wexley', md: 'Wexley is a small, old town on a river. It is easy to see everything on foot in one or two days.\n\nWexley Castle is on the hill above the town. It is more than eight hundred years old. It is open every day from 10 am to 5 pm, but it is closed on Mondays in winter. Tickets cost £14, and children under five go free.\n\nThe Town Gallery has paintings of the river and the hills. Entry is free.\n\nThe market is in the main square on Wednesdays and Saturdays. You can buy local cheese, bread and flowers there.\n\nIn summer, boat trips leave from the old bridge every hour. The trip takes forty minutes.\n\nFor maps and tickets, visit the tourist information centre next to the station.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the leaflet again. True, false or not given?', items: [
            { q: 'You need a car to see the sights of Wexley.', a: 'f', why: '*It is easy to see everything on foot.*' },
            { q: 'The castle is open on Mondays in summer.', a: 't', why: 'It is open every day, and closed on Mondays only *in winter*.' },
            { q: 'A four-year-old child pays nothing at the castle.', a: 't', why: '*Children under five go free.*' },
            { q: 'You pay to go into the Town Gallery.', a: 'f', why: '*Entry is free.*' },
            { q: 'The castle has a café.', a: 'ng', why: 'The leaflet does not say anything about a café.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'You want to buy local cheese. When can you go to the market?', o: ['on Saturday', 'on Monday', 'on Friday'], why: 'The market is *on Wednesdays and Saturdays*.' },
            { q: 'Where do the boat trips start?', o: ['at the old bridge', 'at the castle', 'at the station'], why: '*Boat trips leave from the old bridge.*' },
            { q: 'How long is a boat trip?', o: ['forty minutes', 'one hour', 'two days'], why: '*The trip takes forty minutes.* They leave every hour.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'What time does the gallery ___?', o: ['open', 'opens', 'opened'], why: 'After *does*, use the base form.' },
      { q: 'A visit with a person who tells you about a place is a ___', o: ['guided tour.', 'boat trip.', 'market.'], why: 'A *guide* tells you about the place.' },
      { q: 'Did you ___ the cathedral?', o: ['see', 'saw', 'seen'], why: '*Did* + base form.' },
      { q: 'There’s a ___ for students. Their tickets are cheaper.', o: ['discount', 'castle', 'guide'], why: 'A *discount* is a lower price.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the past simple.', items: [
      { q: 'We ___ (go) to the market on Saturday.', a: ['went'], why: '*Go*, *went*.' },
      { q: 'I ___ (buy) two tickets online.', a: ['bought'], why: '*Buy*, *bought*.' },
      { q: 'They ___ (take) a boat trip on the river.', a: ['took'], why: '*Take*, *took*.' },
      { q: 'We ___ (not see) the castle. It was closed.', a: ['didn’t see', 'did not see'], why: '*Didn’t* + base form.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'How much is a ticket for adults?', why: '*How much* + *is* + the thing.' },
      { a: 'Where did you have lunch?', why: '*Where* + *did* + *you* + base form.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb and its past simple.', pairs: [
      ['go', 'went'],
      ['see', 'saw'],
      ['eat', 'ate'],
      ['have', 'had'],
    ] },
  ],
};
