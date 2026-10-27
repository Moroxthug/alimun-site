// English A1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Out and about',
  goal: 'Find your way, buy a ticket and ask for help.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['transport', 'timetables', 'tickets', 'directions', 'imperatives', 'asking for help'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'By bus, by train',
      about: 'Talk about transport and ask about times.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say how you travel, use **by** + the transport, without *a* or *the*: *by bus, by train, by car*. Say **on foot** for walking. To ask about a timetable, say **What time does the bus leave?** or **What time does the train arrive?** To ask how long a trip is, say **How long does it take?** The answer is **It takes** + a time.' },
          { t: 'table', caption: 'Transport', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Example'], rows: [
            ['bus', 'I go to work by bus.'],
            ['train', 'She takes the train to London.'],
            ['tram', 'We go to the centre by tram.'],
            ['taxi', 'I take a taxi to the airport.'],
            ['bike', 'He goes to school by bike.'],
            ['car', 'They go to the sea by car.'],
            ['plane', 'We go to Spain by plane.'],
            ['on foot', 'I go to the shop on foot.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **by** for the way you travel, but say **take** for one trip: *I go by bus* but *I take the bus.* In London, the underground is called the **tube**. In the USA, it is the **subway**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'How do you get **to** work? – **By** bus.', n: '*get to* + a place; *by* + transport.' },
            { s: 'What time **does** the bus **leave**? – It leaves **at** 8.15.', n: 'A question about the timetable.' },
            { s: 'What time **does** the train **arrive**? – It arrives **at** 10.30.', n: 'Another question about the timetable.' },
            { s: '**How long does it take?** – It takes twenty minutes.', n: 'To ask about the length of a trip.' },
            { s: 'I go to the shop **on foot**.', n: 'Walking: *on foot*.' },
          ] },
          { t: 'dialogue', title: 'The way to work', lines: [
            { who: 'Grace', s: 'How do you get to work, Ben?' },
            { who: 'Ben', s: 'By bus. It leaves at 8.15.' },
            { who: 'Grace', s: 'How long does it take?' },
            { who: 'Ben', s: 'It takes twenty minutes. And you?' },
            { who: 'Grace', s: 'I go on foot. It takes ten minutes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bus', o: ['bus', 'train', 'bicycle'], why: 'It is a *bus*.' },
            { pic: 'train', o: ['train', 'bus', 'bicycle'], why: 'It is a *train*.' },
            { pic: 'bicycle', o: ['bicycle', 'bus', 'train'], why: 'It is a *bicycle*, or a *bike*.' },
            { pic: 'ticket', o: ['ticket', 'key', 'phone'], why: 'It is a *ticket*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the right sentence.', pairs: [
            ['train', 'You take it at a station.'],
            ['bike', 'You ride it.'],
            ['taxi', 'You pay the driver.'],
            ['plane', 'You take it at an airport.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'I go to work ___ bus.', a: ['by'], why: '*By* + transport.' },
            { q: 'He goes to school ___ foot.', a: ['on'], why: '*On foot*.' },
            { q: 'What time ___ the bus leave?', a: ['does'], why: 'With *the bus* (it): *does*.' },
            { q: 'The train ___ at 6.15. (arrive)', a: ['arrives'], why: 'With *the train* (it): *arrives*.' },
            { q: 'How do you get ___ work?', a: ['to'], why: '*Get to* + a place.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: '“How do you get to work?” – “___.”', o: ['By bus.', 'At bus.', 'With bus.'], why: '*By* + transport.' },
            { q: 'The train leaves ___ 8.15.', o: ['at', 'in', 'on'], why: '*At* + a time.' },
            { q: '“How long does it take?” – “It takes ___.”', o: ['twenty minutes', 'twenty minute', 'in twenty'], why: '*It takes* + a time. *Minutes* is plural.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I go to work by bus.', why: 'Subject, verb, *to* + place, *by* + transport.' },
            { a: 'What time does the train leave?', why: 'Question word, *does*, subject, verb.' },
            { a: 'It takes twenty minutes.', why: '*It takes* + a time.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I go to work [on] bus.', a: ['by'], why: '*By* + transport.' },
            { s: 'What time [do] the bus leave?', a: ['does'], why: 'With *the bus* (it): *does*.' },
            { s: 'He goes to school [by] foot.', a: ['on'], why: '*On foot*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A single to Leeds, please',
      about: 'Buy a ticket and ask for help when you do not understand.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To buy a train ticket, say **A single to …, please** for one way and **A return to …, please** to go and come back. Then ask **How much is it?** To find your train, ask **Which platform?** To check, ask **Is this the train to …?**' },
          { t: 'table', caption: 'At the station', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
            ['A single to Leeds, please.', 'you want a ticket for one way'],
            ['A return to Leeds, please.', 'you want a ticket to go and come back'],
            ['How much is it?', 'you ask the price'],
            ['Which platform?', 'you ask where the train is'],
            ['Is this the train to Leeds?', 'you check'],
            ['What time does it leave?', 'you ask the time'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Britain, a **single** ticket is for one way and a **return** is for both ways. In the USA, they say **one-way** and **round-trip**. A **platform** is the place in a station where you wait for the train.' },
        ],
        [
          { t: 'text', md: 'When you do not understand, do not be afraid to say it. Use these phrases. They are polite and very useful.' },
          { t: 'table', caption: 'When you do not understand', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
            ['Sorry, can you say that again, please?', 'you did not hear'],
            ['Can you speak more slowly, please?', 'the person speaks too fast'],
            ['I don’t understand.', 'you do not understand'],
            ['What does “platform” mean?', 'you do not know a word'],
            ['Can you write it down, please?', 'you want to read it'],
          ] },
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Ben', s: 'A return to Leeds, please.' },
            { who: 'Woman', s: 'That’s twelve pounds fifty. The train leaves from platform three.' },
            { who: 'Ben', s: 'Sorry, can you say that again, please?' },
            { who: 'Woman', s: 'Platform three. It leaves at ten fifteen.' },
            { who: 'Ben', s: 'Thank you very much.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words from the box.', extra: ['double', 'fast'], items: [
            { q: 'A ___ to Leeds, please. I don’t come back today.', a: 'single', why: 'A ticket for one way: *single*.' },
            { q: 'A ___ to Leeds, please. I come back tonight.', a: 'return', why: 'A ticket to go and come back: *return*.' },
            { q: 'Which ___ is the train?', a: 'platform', why: 'The place to wait for a train: *platform*.' },
            { q: 'Sorry, can you say that ___, please?', a: 'again', why: '*Say that again.*' },
            { q: 'Can you speak more ___, please?', a: 'slowly', why: '*More slowly* = not so fast.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Which platform?', 'Platform three.'],
            ['How much is it?', 'It’s twelve pounds fifty.'],
            ['Is this the train to Leeds?', 'Yes, it is.'],
            ['What time does it leave?', 'At ten fifteen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You do not understand. You say:', o: ['Sorry, can you say that again, please?', 'Thank you very much.', 'See you tomorrow.'], why: 'To ask for repetition: *Can you say that again, please?*' },
            { q: 'You want a ticket for one way. You say:', o: ['A single, please.', 'A return, please.', 'A platform, please.'], why: 'One way: *single*.' },
            { q: 'The person speaks too fast. You say:', o: ['Can you speak more slowly, please?', 'Can you speak faster?', 'Can I speak slowly?'], why: 'Ask the other person: *Can you speak more slowly?*' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Can you say that again, please?', extra: ['do', 'are'], why: '*Can you …, please?* asks for help.' },
            { a: 'Is this the train to Leeds?', extra: ['it', 'are'], why: '*Is this the train to …?* checks the train.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Can you [speaks] more slowly?', a: ['speak'], why: 'After *can* the verb does not change.' },
            { s: 'Sorry, I [not] understand.', a: ['don’t', 'do not'], why: 'The negative needs *don’t*.' },
            { s: 'What time [do] the train leave?', a: ['does'], why: 'With *the train* (it): *does*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'A ___ to Leeds, please. I come back tomorrow.', o: ['return', 'single', 'platform'], why: 'To go and come back: *return*.' },
            { q: 'Which ___ is the train?', o: ['platform', 'single', 'return'], why: 'The place to wait: *platform*.' },
            { q: 'Can you say that ___?', o: ['again', 'slowly', 'down'], why: '*Say that again.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Turn left',
      about: 'Give and follow simple directions.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To give directions, use the **imperative**. It is the verb with no subject: *Turn left. Go straight on.* For the negative, say **Don’t**: *Don’t turn right.* Add **please** to be polite. To ask, say **Excuse me, how do I get to the station?**' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], quiz: true, head: ['Say', 'Meaning'], rows: [
            ['Turn left.', 'go to the left'],
            ['Turn right.', 'go to the right'],
            ['Go straight on.', 'do not turn'],
            ['Take the first street on the left.', 'turn into the first street on your left'],
            ['at the traffic lights', 'where the red, yellow and green lights are'],
            ['Walk past the bank.', 'go by the bank and do not stop'],
            ['It’s on the left. / It’s on the right.', 'where the place is'],
          ] },
          { t: 'tip', art: 'owl', md: 'The numbers for order are **first, second, third**. After that, they end in *-th*: *fourth, fifth*. In the USA, **traffic lights** are *stoplights*. A **roundabout** is a circle in the road, and it is very common in Britain.' },
        ],
        [
          { t: 'dialogue', title: 'How do I get to the station?', lines: [
            { who: 'Grace', s: 'Excuse me, how do I get to the station?' },
            { who: 'Man', s: 'Go straight on and turn left at the traffic lights.' },
            { who: 'Grace', s: 'Is it far?' },
            { who: 'Man', s: 'No, it’s five minutes on foot. It’s next to the bank, on the right.' },
            { who: 'Grace', s: 'Thank you very much.' },
          ] },
          { t: 'examples', items: [
            { s: '**Turn left** at the traffic lights.', n: 'The imperative.' },
            { s: '**Go straight on** for two hundred metres.', n: 'The imperative with a distance.' },
            { s: '**Don’t turn** right here.', n: 'The negative imperative.' },
            { s: 'Take the **second** street on the right.', n: 'The second street.' },
            { s: 'The station is **on the left**.', n: 'Where the place is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Go straight ___ for two hundred metres.', o: ['on', 'in', 'at'], why: '*Go straight on.*' },
            { q: 'Turn ___ at the traffic lights.', o: ['left', 'lefts', 'to left'], why: '*Turn left.*' },
            { q: 'Take the ___ street on the right.', o: ['second', 'two', 'twice'], why: 'For order: *second*.' },
            { q: '___ turn right here. It is the wrong way.', o: ['Don’t', 'Not', 'No'], why: 'The negative imperative: *Don’t*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ left at the traffic lights.', a: ['Turn'], why: 'The imperative: *Turn*.' },
            { q: 'Go ___ on and take the first street on the right.', a: ['straight'], why: '*Go straight on.*' },
            { q: 'Walk ___ the bank and turn left.', a: ['past'], why: '*Walk past* = go by.' },
            { q: 'The station is ___ the left.', a: ['on'], why: '*On the left.*' },
            { q: 'Excuse me, how do I ___ to the station?', a: ['get'], why: '*How do I get to …?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the meaning.', pairs: [
            ['Turn left.', 'Go to the left.'],
            ['Go straight on.', 'Do not turn.'],
            ['Walk past the bank.', 'Go by the bank.'],
            ['at the traffic lights', 'where the red and green lights are'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Turn left at the traffic lights.', why: 'The verb first, then the place.' },
            { a: 'Go straight on for two hundred metres.', why: 'The verb first, then the distance.' },
            { a: 'Take the second street on the right.', why: '*Take the* + number + *street*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Turning] left at the traffic lights.', a: ['Turn'], why: 'The imperative is the base verb.' },
            { s: 'Go [straigth] on.', a: ['straight'], why: 'The spelling is *straight*.' },
            { s: 'Take the [two] street on the right.', a: ['second'], why: 'For order: *second*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A message and a route',
      about: 'Read a message and directions to a flat.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'The party', md: '**Ben’s message**\nHi Grace! The party is at my flat on Saturday at 7.00. Take the train to Leeds Station. It leaves at 5.30 and arrives at 6.15. Then take bus 12. It leaves from the bus station every ten minutes. Get off at the library and call me.\n\n**Ben’s directions**\nFrom the library, go straight on and turn left at the traffic lights. Walk past the post office. My flat is the second building on the right, next to the bank. It’s number 14. Don’t take a taxi: it’s too expensive! See you soon!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The party is on Saturday.', a: 't', why: '*The party is at my flat on Saturday at 7.00.*' },
            { q: 'The train leaves at 6.15.', a: 'f', why: 'It leaves at 5.30 and arrives at 6.15.' },
            { q: 'Grace takes bus 12 from the bus station.', a: 't', why: '*Take bus 12. It leaves from the bus station.*' },
            { q: 'Ben’s flat is next to the bank.', a: 't', why: '*Next to the bank.*' },
            { q: 'Ben’s flat is on the left.', a: 'f', why: '*The second building on the right.*' },
            { q: 'Ben lives with his parents.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the end of the instruction.', pairs: [
            ['Take the train', 'to Leeds Station'],
            ['Take bus 12', 'from the bus station'],
            ['Turn left', 'at the traffic lights'],
            ['Walk past', 'the post office'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the text again and choose.', items: [
            { q: 'What time does the train arrive?', o: ['6.15', '5.30', '7.00'], why: '*It leaves at 5.30 and arrives at 6.15.*' },
            { q: 'Where does Grace get off the bus?', o: ['At the library', 'At the station', 'At the bank'], why: '*Get off at the library.*' },
            { q: 'Where is the flat?', o: ['Next to the bank', 'Next to the park', 'Next to the cinema'], why: '*Next to the bank.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'I go to work ___ bus.', o: ['by', 'on', 'with'], why: '*By* + transport.' },
      { q: 'What time ___ the train leave?', o: ['does', 'do', 'is'], why: 'With *the train* (it): *does*.' },
      { q: 'You do not understand. You say:', o: ['Sorry, can you say that again, please?', 'Thank you very much.', 'See you tomorrow.'], why: 'To ask for repetition: *Can you say that again, please?*' },
      { q: '___ left at the traffic lights.', o: ['Turn', 'Turning', 'Turns'], why: 'The imperative is the base verb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'A ___ to Leeds, please. (one way)', a: ['single'], why: 'One way: *single*.' },
      { q: 'The train ___ at 6.15. (arrive)', a: ['arrives'], why: 'With *the train* (it): *arrives*.' },
      { q: 'Go ___ on and turn right.', a: ['straight'], why: '*Go straight on.*' },
      { q: 'Sorry, I don’t ___.', a: ['understand'], why: '*I don’t understand.*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
      ['Which platform?', 'Platform three.'],
      ['What time does it leave?', 'At ten fifteen.'],
      ['How much is it?', 'It’s twelve pounds fifty.'],
      ['Is this the train to Leeds?', 'Yes, it is.'],
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
      { a: 'What time does the train leave?', extra: ['do', 'leaves'], why: 'Question word, *does*, subject, verb with no *-s*.' },
      { a: 'Turn left at the traffic lights.', extra: ['turns', 'in'], why: 'The imperative is the base verb.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'What time [do] the bus leave?', a: ['does'], why: 'With *the bus* (it): *does*.' },
      { s: 'I go to work [on] bus.', a: ['by'], why: '*By* + transport.' },
    ] },
  ],
};
