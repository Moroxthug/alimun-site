// English B1 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Travelling independently',
  goal: 'Plan and make your own way, and change plans when needed.',
  art: 'suitcase',
  tags: { skills: ['speaking', 'vocabulary', 'grammar', 'reading'], topics: ['comparatives', 'tickets', 'recommendations', 'transport'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Train, coach or plane?',
      about: 'Compare ways to travel, then book and change a ticket.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'When you compare ways to travel, use **comparatives** and **superlatives**. With short adjectives, add *-er* or *-est*: *cheaper*, *the fastest*. With longer adjectives, use *more* or *the most*: *more comfortable*, *the most expensive*.\n\nTo show a big difference, put *much* or *a lot* before the comparative. To show a small difference, use *a bit*.' },
          { t: 'examples', items: [
            { s: 'The coach is **much cheaper than** the train, but it takes longer.', n: '*much* + comparative: a big difference.' },
            { s: 'Flying is **the quickest** way, but it’s **not as relaxing as** the train.', n: '*not as … as*: flying is less relaxing.' },
            { s: 'An off-peak ticket is **a bit cheaper**, but you can’t use it at busy times.', n: '*a bit* + comparative: a small difference.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Some adjectives are irregular: *good*, *better*, *the best*; *bad*, *worse*, *the worst*; *far*, *further*, *the furthest*. Never say *more better*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'The coach takes six hours and the train takes four. The train is ___.', o: ['quicker', 'more quick', 'the quickest'], why: 'Two things compared, short adjective: *quick* becomes *quicker*.' },
            { q: 'This is ___ hostel in town: only £18 a night.', o: ['the cheapest', 'cheaper', 'the most cheap'], why: 'One thing compared with all the others: *the* + *-est*.' },
            { q: 'The ferry is slow, but it’s ___ than the plane.', o: ['more relaxing', 'relaxinger', 'most relaxing'], why: '*relaxing* is a long adjective: *more relaxing than*.' },
            { q: 'Trains here are ___ more comfortable than buses.', o: ['much', 'very', 'most'], why: '*much* makes a comparative stronger. *very* does not go before a comparative.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the word in brackets.', items: [
            { q: 'Walking is ___ (healthy) than taking the metro.', a: ['healthier'], why: 'An adjective ending in *-y* changes to *-ier*: *healthier*.' },
            { q: 'August is ___ (busy) month for trains to the coast.', a: ['the busiest'], why: 'One month compared with all the others: *the busiest*.' },
            { q: 'My bike ride was ___ (bad) than I expected. It rained all day.', a: ['worse'], why: '*bad* is irregular: *worse*, *the worst*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Tickets and bookings', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['a single', 'a ticket for one journey, there only'],
            ['a return', 'a ticket there and back'],
            ['off-peak', 'at quieter times, and often cheaper'],
            ['a seat reservation', 'a seat that is kept for you'],
            ['a change fee', 'money you pay to change a booking'],
            ['a refund', 'money you get back'],
            ['a connection', 'the next train or bus you change to'],
          ] },
          { t: 'dialogue', title: 'Changing a ticket', lines: [
            { who: 'Agent', s: 'Morning. How can I help?' },
            { who: 'Leila', s: 'Hi. I’ve got a ticket to York for this afternoon, but I’d like to travel tomorrow instead. Is that possible?' },
            { who: 'Agent', s: 'Let me have a look. Yes, you can change it, but there’s a change fee of ten pounds.' },
            { who: 'Leila', s: 'That’s fine. Are there any trains in the morning?' },
            { who: 'Agent', s: 'There’s one at 8.15 and another at 9.40. The 9.40 is a bit cheaper because it’s off-peak.' },
            { who: 'Leila', s: 'I’ll take the 9.40, then. Can I reserve a seat?' },
            { who: 'Agent', s: 'Of course. Coach C, seat 42, by the window.' },
            { who: 'Leila', s: 'Perfect. And if I miss the train, can I get a refund?' },
            { who: 'Agent', s: 'Not on this ticket, I’m afraid. But you could change it again.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Leila wants to travel a day later.', a: 't', why: 'She has a ticket for this afternoon and wants to travel *tomorrow instead*.' },
            { q: 'Changing the ticket is free.', a: 'f', why: 'There is *a change fee of ten pounds*.' },
            { q: 'Leila can get her money back if she misses the train.', a: 'f', why: 'The agent says *Not on this ticket, I’m afraid.*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['a single', 'a ticket for one way only'],
            ['a return', 'a ticket there and back'],
            ['a refund', 'money you get back'],
            ['a connection', 'the next train you change to'],
            ['off-peak', 'at quieter, often cheaper times'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What would you recommend?',
      about: 'Ask locals for tips and understand their advice.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Locals often know the best places. To ask for a tip, use *Can you recommend…?*, *Is it worth…?* or *What would you recommend?*\n\nTo give advice, people say *You should…*, *It’s worth* + *-ing* or *If I were you, I’d…*. To tell you to skip something, they say *I wouldn’t bother with…*.' },
          { t: 'examples', items: [
            { s: '**Can you recommend** a good place for breakfast?', n: '*recommend* + a noun: polite and very common.' },
            { s: '**Is it worth** visiting the castle?', n: '*Is it worth* + *-ing*: is it good enough to spend time or money on?' },
            { s: '**If I were you, I’d** go early, before the crowds.', n: '*If I were you, I’d* + verb: strong, friendly advice.' },
            { s: 'I **wouldn’t bother with** the boat tour. It’s expensive and quite boring.', n: 'Advice to skip something.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Say *Can you recommend a restaurant?* or *Can you recommend a restaurant to me?* Many learners say *Can you recommend me a restaurant?*, but this is not correct in standard English.' },
        ],
        [
          { t: 'dialogue', title: 'At the guesthouse', lines: [
            { who: 'Tomasz', s: 'Morning! I’ve got one free day here. What would you recommend?' },
            { who: 'Bethan', s: 'Well, if the weather’s good, you should walk up to the lighthouse. The views are amazing.' },
            { who: 'Tomasz', s: 'Is it worth going to the old town too?' },
            { who: 'Bethan', s: 'Definitely, but go before ten. It gets really busy when the tour coaches arrive.' },
            { who: 'Tomasz', s: 'And can you recommend somewhere to eat tonight? Nothing too expensive.' },
            { who: 'Bethan', s: 'Try the little fish restaurant by the harbour. Locals eat there. I wouldn’t bother with the places on the main square. They’re overpriced.' },
            { who: 'Tomasz', s: 'Great, thanks. Do I need to book?' },
            { who: 'Bethan', s: 'On a Saturday, yes. If I were you, I’d call them this morning.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Bethan thinks the walk to the lighthouse is a good idea.', a: 't', why: 'She says *you should walk up to the lighthouse*.' },
            { q: 'The old town is quiet after ten.', a: 'f', why: 'It gets busy *when the tour coaches arrive*, so Tomasz should go before ten.' },
            { q: 'Bethan recommends the restaurants on the main square.', a: 'f', why: 'She says *I wouldn’t bother with* them, because they are overpriced.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'Is the museum worth ___?', o: ['visiting', 'to visit', 'visit'], why: '*worth* is followed by the *-ing* form.' },
            { q: 'Can you ___ a good café near here?', o: ['recommend', 'say', 'explain'], why: '*Can you recommend…?* asks for a tip.' },
            { q: 'If I ___ you, I’d take the early bus.', o: ['were', 'am', 'would be'], why: 'The fixed phrase is *If I were you*.' },
            { q: 'I wouldn’t ___ with the night tour. It’s not very good.', o: ['bother', 'worry', 'mind'], why: '*I wouldn’t bother with…* means: skip it, it is not worth it.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the tips.', items: [
            { q: 'It’s worth ___ (book) a table on Fridays.', a: ['booking'], why: '*It’s worth* + *-ing*.' },
            { q: 'You ___ definitely try the local cheese. It’s delicious.', a: ['should', 'must'], why: '*You should* (or *must*) + verb gives a strong recommendation.' },
            { q: 'Is it ___ getting a travel card for three days?', a: ['worth'], why: '*Is it worth* + *-ing*? asks if something is a good idea.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Can you recommend a good place to eat?', why: '*Can you recommend* + a noun.' },
            { a: 'Is it worth taking the cable car?', why: '*Is it worth* + *-ing*?' },
            { a: 'I wouldn’t bother with the boat trip.', why: '*I wouldn’t bother with* + the thing to skip.' },
          ] },
          { t: 'tip', art: 'owl', md: 'When a local gives you a tip, a short answer keeps the conversation friendly: *That sounds great, thanks*, or *Good to know!*' },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A travel forum',
      about: 'Read a forum thread where travellers share advice.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Travel forums are a good place to ask other travellers for advice. Read the thread. Marta wants to travel without a car.' },
          { t: 'reading', title: 'North Wales without a car?', md: '**Marta_travels:** Hi all. I’m planning ten days in North Wales in May, but I don’t drive. Is it possible to see the coast and the mountains by public transport, or is it better to rent a car? I’d like to stay in two or three different places.\n\n**Hugh_walks:** I did a similar trip last year without a car and loved it. The train along the coast is easy, and the views are great. The buses to the mountain villages were fine too, but they weren’t very frequent, especially on Sundays. Check the timetable the night before, and don’t miss the last bus!\n\n**Ana_R:** I agree with Hugh. Get a travel pass for several days if you can. For me, it was much cheaper than buying single tickets every day. One more tip: my bus was cancelled once because of a storm, so I changed my plans and spent the day in a café with a good book. Leave a free day in your plan for things like that.\n\n**Marta_travels:** Thanks, both! That’s really helpful. I think I’ll book my first two nights and keep the rest flexible.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the thread again. True, false or not given?', items: [
            { q: 'Marta does not drive.', a: 't', why: 'She writes *I don’t drive*.' },
            { q: 'Hugh travelled by car last year.', a: 'f', why: 'He did a similar trip *without a car*.' },
            { q: 'According to Hugh, there are more buses on Sundays.', a: 'f', why: 'The buses were not very frequent, *especially on Sundays*: there are fewer.' },
            { q: 'Ana bought her travel pass online.', a: 'ng', why: 'Ana does not say where she bought it.' },
            { q: 'Ana thinks it is a good idea to leave one day free.', a: 't', why: '*Leave a free day in your plan.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with a word from the thread.', items: [
            { q: 'The buses weren’t very ___, so I often waited an hour.', a: ['frequent'], why: '*frequent* means that something comes or happens often.' },
            { q: 'My bus was ___ because of a storm, so it didn’t come at all.', a: ['cancelled', 'canceled'], why: '*cancelled*: it did not happen. British English writes it with *ll*.' },
            { q: 'I’ll book the first two nights and keep the rest ___.', a: ['flexible'], why: '*flexible* plans are easy to change.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In forum replies, people often agree with someone before they add their own tip: *I agree with Hugh.* or *Hugh is right.*' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The train is ___ than the coach, but it’s more expensive.', o: ['faster', 'more fast', 'fastest'], why: 'Short adjective, two things compared: *faster than*.' },
      { q: 'A ___ ticket takes you there and back.', o: ['return', 'single', 'off-peak'], why: 'A *return* is a ticket there and back.' },
      { q: 'Is the old town worth ___?', o: ['seeing', 'to see', 'see'], why: '*worth* + *-ing*.' },
      { q: 'If I were you, ___ book a seat.', o: ['I’d', 'I will', 'I am'], why: '*If I were you, I’d* + verb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'This is ___ (good) café in town.', a: ['the best'], why: '*good* is irregular: *better*, *the best*.' },
      { q: 'Can I get a ___ (money back) if I cancel my ticket?', a: ['refund'], why: 'A *refund* is money you get back.' },
      { q: 'I wouldn’t ___ with the bus tour. It’s boring.', a: ['bother'], why: '*I wouldn’t bother with…*: skip it.' },
      { q: 'Buses to the villages are less ___ (often) on Sundays.', a: ['frequent'], why: '*frequent*: coming often.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
      ['Can you recommend', 'a good place for dinner?'],
      ['Is it worth', 'taking the cable car?'],
      ['I’d like to change', 'my ticket to Friday.'],
      ['The coach is much', 'cheaper than the train.'],
    ] },
  ],
};
