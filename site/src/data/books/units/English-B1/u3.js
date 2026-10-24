// English B1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Getting around',
  goal: 'Get around a city and deal with travel problems.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['modals-obligation', 'indirect-questions', 'directions', 'travel-problems'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Rules and permission',
      about: 'Say what is necessary, not necessary, allowed and not allowed.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Must** and **have to** both say that something is necessary. *Have to* is more common for rules and duties that come from other people. *Must* often shows what the speaker thinks is necessary, and it is common in signs and written rules.' },
          { t: 'examples', items: [
            { s: 'You **have to** show your passport at the gate.', n: 'It is the airport’s rule.' },
            { s: 'I **must** call my mother tonight.', n: 'I think it is important.' },
            { s: 'Passengers **must** wear a seat belt.', n: 'A written rule, for example on a sign.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Must* has no past form. For the past, use *had to*: *I had to wait two hours for my flight.*' },
        ],
        [
          { t: 'table', caption: 'Obligation and permission', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['must / have to', 'it is necessary', 'You have to buy a ticket before you get on.'],
            ['mustn’t', 'it is not allowed, so do not do it', 'You mustn’t smoke on the train.'],
            ['don’t have to', 'it is not necessary, but you can', 'You don’t have to book. You can just come.'],
            ['can / be allowed to', 'it is permitted', 'Are we allowed to take photos?'],
            ['can’t / not be allowed to', 'it is not permitted', 'You aren’t allowed to park here.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Mustn’t* and *don’t have to* are very different. *You mustn’t pay* means paying is not allowed. *You don’t have to pay* means it is free, or it is your choice.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Children under five ___ pay on the bus. It’s free for them.', o: ['don’t have to', 'mustn’t', 'have to'], why: 'It is not necessary, because it is free: *don’t have to*.' },
            { q: 'You ___ cross the road here. It’s dangerous.', o: ['mustn’t', 'don’t have to', 'are allowed to'], why: 'It is not allowed, because it is dangerous: *mustn’t*.' },
            { q: 'Yesterday I ___ wait an hour for a taxi.', o: ['had to', 'must', 'have to'], why: '*Yesterday* is in the past, and *must* has no past form: *had to*.' },
            { q: '___ we allowed to bring food into the museum?', o: ['Are', 'Do', 'Can'], why: 'The question form of *be allowed to*: *Are we allowed to…?*' },
            { q: 'In the UK, cars ___ drive on the left.', o: ['have to', 'don’t have to', 'are allowed to'], why: 'It is a law, so it is necessary: *have to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. Use the words in brackets.', items: [
            { q: 'You ___ (not / have to) wear a suit. The office is quite relaxed.', a: ['don’t have to', 'do not have to'], why: 'It is not necessary: *don’t have to*.' },
            { q: 'She ___ (have to) change trains twice yesterday.', a: ['had to'], why: 'Past of *have to*: *had to*.' },
            { q: 'When ___ (you / have to) be at the airport tomorrow?', a: ['do you have to'], why: 'Questions with *have to* use *do*: *When do you have to…?*' },
            { q: 'Visitors ___ (not / be allowed to) park in front of the hospital.', a: ['aren’t allowed to', 'are not allowed to', '’re not allowed to'], why: '*Visitors* is plural: *aren’t allowed to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each sign with its meaning.', pairs: [
            ['NO PARKING', 'You mustn’t leave your car here.'],
            ['FREE ENTRY', 'You don’t have to pay to go in.'],
            ['PLEASE SHOW YOUR TICKET', 'You have to show your ticket.'],
            ['PHOTOS WELCOME', 'You can take pictures.'],
            ['QUIET ZONE: NO PHONE CALLS', 'You aren’t allowed to talk on the phone here.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Could you tell me where…?',
      about: 'Ask the way politely and understand directions.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'These phrases help you give and understand directions in a town.' },
          { t: 'table', caption: 'Giving directions', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Meaning'], rows: [
            ['go straight on', 'continue in the same direction'],
            ['take the second left', 'turn into the second street on your left'],
            ['turn right at the lights', 'turn right where the traffic lights are'],
            ['go past the church', 'walk beside the church and continue'],
            ['it’s on the corner', 'it is where two streets meet'],
            ['it’s opposite the bank', 'it is on the other side of the street from the bank'],
            ['it’s next to the bank', 'it is beside the bank'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Asking the way', lines: [
            { who: 'Farah', s: 'Excuse me, could you tell me where the train station is?' },
            { who: 'Owen', s: 'Sure. Go straight on and take the second left. Then go past the church, and the station is on your right.' },
            { who: 'Farah', s: 'Do you know how long it takes to walk there?' },
            { who: 'Owen', s: 'About ten minutes. Or you can take the number 4 bus from opposite the bank.' },
            { who: 'Farah', s: 'Thanks. Do you know if the buses run on Sundays?' },
            { who: 'Owen', s: 'Yes, they do, but only every half hour.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Farah wants to go to the train station.', a: 't', why: 'She asks where the train station is.' },
            { q: 'The station is on the left.', a: 'f', why: 'Owen says it is on her right.' },
            { q: 'It takes about ten minutes to walk to the station.', a: 't', why: '“About ten minutes.”' },
            { q: 'There are no buses on Sundays.', a: 'f', why: 'They run on Sundays, but only every half hour.' },
          ] },
        ],
        [
          { t: 'text', md: 'Farah asks **indirect questions**. They begin with a polite phrase, such as *Could you tell me…?*, *Can you tell me…?* or *Do you know…?* After this phrase, the rest of the question uses **normal word order**: subject + verb. Do not use *do*, *does* or *did*.' },
          { t: 'table', caption: 'Indirect questions', explain: ['head'], head: ['Direct question', 'Indirect question'], rows: [
            ['Where is the station?', 'Could you tell me where the station is?'],
            ['What time does the museum open?', 'Do you know what time the museum opens?'],
            ['Is this the right bus?', 'Do you know if this is the right bus?'],
            ['Has the train left?', 'Can you tell me if the train has left?'],
          ] },
          { t: 'tip', art: 'owl', md: 'For a yes or no question, use *if* or *whether*: *Do you know if the shop is open?*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'Could you tell me where ___?', o: ['the post office is', 'is the post office', 'the post office it is'], why: 'Indirect question: subject + verb, *the post office is*.' },
            { q: 'Do you know what time ___?', o: ['the film starts', 'does the film start', 'starts the film'], why: 'No *does* in an indirect question. The verb gets *-s*: *the film starts*.' },
            { q: 'Can you tell me ___ this bus stops at the airport?', o: ['if', 'that', 'does'], why: 'A yes or no question: *if*.' },
            { q: 'The café is ___ the bank, on the other side of the street.', o: ['opposite', 'next to', 'past'], why: 'On the other side of the street: *opposite*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you tell me where the toilets are?', why: 'After *Could you tell me where*, the subject comes before the verb.' },
            { a: 'Do you know if the museum is open?', why: 'A yes or no question: *if* + subject + verb.' },
            { a: 'Can you tell me how much the ticket costs?', why: 'No *does*: *how much the ticket costs*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'When things go wrong',
      about: 'Talk about delays, lost luggage and other travel problems, and make a polite complaint.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'Travel does not always go to plan. These words help you explain what happened.' },
          { t: 'table', caption: 'Travel problems', explain: ['head', 'col1'], quiz: true, head: ['Word or phrase', 'Meaning'], rows: [
            ['a delay', 'when something happens later than planned'],
            ['be delayed', 'leave or arrive late'],
            ['be cancelled', 'not happen at all'],
            ['miss a connection', 'arrive too late for your next train or flight'],
            ['lost luggage', 'bags that the airline cannot find'],
            ['a refund', 'money that you get back'],
            ['make a complaint', 'say formally that you are not happy with something'],
            ['compensation', 'money that you get because something went wrong'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the lost luggage desk', lines: [
            { who: 'Agent', s: 'Good afternoon. How can I help?' },
            { who: 'Ines', s: 'My suitcase hasn’t arrived. I was on the flight from Madrid.' },
            { who: 'Agent', s: 'I’m sorry about that. Could you describe the bag?' },
            { who: 'Ines', s: 'It’s a large blue suitcase with a black handle.' },
            { who: 'Agent', s: 'Thank you. Please fill in this form. We’ll call you as soon as we find it.' },
            { who: 'Ines', s: 'I have no clothes with me. Can I buy a few things?' },
            { who: 'Agent', s: 'Yes. Keep your receipts, and you can ask the airline to pay you back.' },
          ] },
          { t: 'text', md: 'In a complaint, stay polite and clear. Say what happened, how it affected you, and what you would like.' },
          { t: 'examples', items: [
            { s: 'I’m afraid there’s a problem with my booking.', n: '*I’m afraid* makes bad news more polite.' },
            { s: 'I’d like to make a complaint.', n: 'We *make* a complaint, not *do* a complaint.' },
            { s: 'Could I have a refund, please?', n: 'Say clearly what you would like.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['My train is delayed,', 'so I’ll be about twenty minutes late.'],
            ['The hotel room was dirty,', 'so I asked to speak to the manager.'],
            ['My bag didn’t arrive,', 'so I went to the lost luggage desk.'],
            ['The concert was cancelled,', 'so they gave us our money back.'],
            ['I missed my connection,', 'so I had to wait for the next flight.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'Our flight was ___ because of the snow, so we went home and flew the next day.', o: ['cancelled', 'delayed', 'missed'], why: 'The flight did not happen at all that day: *cancelled*.' },
            { q: 'The first train was forty minutes late, so I ___ my connection.', o: ['missed', 'lost', 'failed'], why: 'We *miss* a connection.' },
            { q: 'The shoes broke after a week, so I asked for a ___.', o: ['refund', 'delay', 'connection'], why: 'Money that you get back: a *refund*.' },
            { q: 'I’d like to ___ a complaint about my room.', o: ['make', 'do', 'say'], why: 'The phrase is *make a complaint*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson. The first letter is given.', items: [
            { q: 'Our flight was ___ (d) by three hours because of a technical problem.', a: ['delayed'], why: 'It left late: *delayed by* three hours.' },
            { q: 'The airline lost my ___ (l), so I had no clothes for two days.', a: ['luggage'], why: '*Luggage* means your bags and suitcases. It is uncountable.' },
            { q: 'The hotel was so noisy that I made a ___ (c) to the manager.', a: ['complaint'], why: '*Make a complaint*: say formally that you are not happy.' },
            { q: 'After the long delay, the airline paid us ___ (c).', a: ['compensation'], why: 'Money that you get because something went wrong: *compensation*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A weekend in Kelmouth',
      about: 'Read a short guide for visitors to a city and check the details.',
      art: 'dog',
      spreads: [
        [
          { t: 'reading', title: 'A weekend in Kelmouth', md: 'Kelmouth is a small harbour city, and the best way to see it is on foot. Most of the sights are less than twenty minutes from the station, so you don’t have to take a taxi.\n\nWhen you leave the station, turn left and go straight on down Market Street. You will pass the old fish market, which is now full of cafés. At the end of the street you’ll see the harbour. The Maritime Museum is opposite the lighthouse. Entry is free, but at the weekend you have to book a time online.\n\nIf you want to go further, buses leave from outside the station every fifteen minutes. You can’t buy tickets on the bus, so get one from the machine first. Children under twelve don’t have to pay.\n\nA few rules: you mustn’t swim in the harbour, because boats come in and out all day. Dogs are allowed on the beach in winter, but not from May to September.\n\nIf you are not sure where to go, ask someone. People here are friendly, and most of them will happily tell you where the best fish and chips are. Just don’t ask them which café is the best. Everyone has a different answer.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'You need a taxi to see the main sights.', a: 'f', why: 'Most sights are less than twenty minutes away on foot, so you don’t have to take a taxi.' },
            { q: 'The old fish market now has cafés in it.', a: 't', why: 'It is now full of cafés.' },
            { q: 'You always have to book a time for the museum.', a: 'f', why: 'Only at the weekend.' },
            { q: 'You can buy a ticket from the bus driver.', a: 'f', why: 'You can’t buy tickets on the bus.' },
            { q: 'The museum has a shop.', a: 'ng', why: 'The text does not say.' },
            { q: 'Dogs can go on the beach in July.', a: 'f', why: 'They are not allowed from May to September.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Where is the Maritime Museum?', o: ['Opposite the lighthouse.', 'Next to the station.', 'In the old fish market.'], why: '“The Maritime Museum is opposite the lighthouse.”' },
            { q: 'Why mustn’t you swim in the harbour?', o: ['Because boats use it all day.', 'Because the water is too cold.', 'Because it is only for children.'], why: '“Boats come in and out all day.”' },
            { q: 'What does the writer say about the people of Kelmouth?', o: ['They are happy to give directions.', 'They all agree on the best café.', 'They do not like visitors.'], why: 'They are friendly and will happily tell you where to go.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'You ___ bring a towel. The hotel gives you one.', o: ['don’t have to', 'mustn’t', 'have to'], why: 'It is not necessary: *don’t have to*.' },
      { q: 'Last week we ___ take a bus because the trains weren’t running.', o: ['had to', 'must', 'have to'], why: 'The past of *have to* and *must* is *had to*.' },
      { q: 'You ___ use your phone during the exam. It’s against the rules.', o: ['mustn’t', 'don’t have to', 'are allowed to'], why: 'It is not allowed: *mustn’t*.' },
      { q: 'Do you know where ___?', o: ['the nearest chemist is', 'is the nearest chemist', 'does the nearest chemist'], why: 'Indirect question: subject + verb.' },
      { q: 'The bank is ___ the supermarket, on the other side of the road.', o: ['opposite', 'next', 'past'], why: 'On the other side of the road: *opposite*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Could you tell me what time the bus ___ (leave)?', a: ['leaves'], why: 'No *does* in an indirect question, so the verb takes *-s*.' },
      { q: 'Our train was ___ (cancel), so we took a coach.', a: ['cancelled'], why: 'In British English, *cancelled* has double *l*.' },
      { q: '___ (we / be allowed to) take photos in the church?', a: ['are we allowed to'], why: 'Question form: *Are we allowed to…?*' },
      { q: 'I’d like to make a ___ (c) about the noise in my room.', a: ['complaint'], why: 'The phrase is *make a complaint*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Do you know if this bus goes to the airport?', why: '*Do you know if* + subject + verb.' },
      { a: 'Visitors aren’t allowed to feed the animals.', why: '*Be not allowed to* + infinitive.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Can you tell me where the station is?', 'Can you tell me where is the station?', 'Can you tell me where does the station is?'], why: 'Indirect question: subject + verb.' },
      { q: '', o: ['I had to wait for two hours.', 'I must waited for two hours.', 'I musted wait for two hours.'], why: '*Must* has no past form. Use *had to*.' },
      { q: '', o: ['The flight was delayed by two hours.', 'The flight delayed by two hours.', 'The flight was delay by two hours.'], why: '*Be delayed*: *was* + past participle.' },
    ] },
  ],
};
