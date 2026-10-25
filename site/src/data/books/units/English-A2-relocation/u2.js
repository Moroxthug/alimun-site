// English A2 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Getting around',
  goal: 'Buy tickets, use buses and trains and ask for directions.',
  art: 'snail',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['transport', 'tickets', 'directions', 'prepositions-of-place', 'timetables'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'A return, please',
      about: 'Learn the words for tickets and transport, and buy a ticket at the station.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In your new town you will often take a bus or a train. These words are on every ticket machine, timetable and screen.' },
          { t: 'table', caption: 'Tickets and transport', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['a single', 'a ticket for one journey: you go, but you do not come back'],
            ['a return', 'a ticket to go and come back'],
            ['a platform', 'the place in a station where you get on a train'],
            ['a bus stop', 'the place in the street where you wait for a bus'],
            ['to change', 'to get off one train or bus and get on another'],
            ['direct', 'with no change: one train all the way'],
            ['off-peak', 'at a quieter time of day, when tickets are often cheaper'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, people say *a single* and *a return*. In the US, they say *one-way* and *round trip*.' },
        ],
        [
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Clerk', s: 'Hello. Where would you like to go?' },
            { who: 'Tomasz', s: 'A return to York, please.' },
            { who: 'Clerk', s: 'Are you coming back today?' },
            { who: 'Tomasz', s: 'Yes, this evening.' },
            { who: 'Clerk', s: 'OK, an off-peak day return. That’s twenty-four pounds fifty.' },
            { who: 'Tomasz', s: 'Can I pay by card?' },
            { who: 'Clerk', s: 'Yes, of course. Just tap it here.' },
            { who: 'Tomasz', s: 'Which platform does the train leave from?' },
            { who: 'Clerk', s: 'Platform three. The next one is at ten fifteen.' },
            { who: 'Tomasz', s: 'Do I need to change?' },
            { who: 'Clerk', s: 'No, it’s a direct train.' },
          ] },
          { t: 'text', md: 'On buses in many UK towns, you pay the driver when you get on, or you tap your bank card on a card reader. It is a good idea to ask: *Can I pay by card on the bus?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['a single', 'you go, but you do not come back'],
            ['a return', 'you go and come back'],
            ['a platform', 'you get on a train here'],
            ['direct', 'you do not need to change'],
            ['a bus stop', 'you wait for a bus here'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about Tomasz at the ticket office. True or false?', items: [
            { q: 'Tomasz wants a single ticket.', a: 'f', why: 'He asks for *a return to York*.' },
            { q: 'He is coming back on the same day.', a: 't', why: '*Yes, this evening.* So the clerk sells him a day return.' },
            { q: 'He pays in cash.', a: 'f', why: 'He asks *Can I pay by card?* and taps his card.' },
            { q: 'He needs to change trains.', a: 'f', why: '*It’s a direct train.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'I’m not coming back today. Can I have a ___ to Leeds, please?', o: ['single', 'return', 'platform'], why: 'You only go one way, so you need *a single*.' },
            { q: '___ platform does the train to York leave from?', o: ['Which', 'Who', 'How'], why: '*Which platform…?* asks about one of a number of platforms.' },
            { q: 'Do I need to ___ trains?', o: ['change', 'pay', 'leave'], why: '*Change trains* means get off one train and get on another.' },
            { q: 'Can I pay ___ card?', o: ['by', 'in', 'on'], why: 'We say *pay by card* and *pay in cash*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the questions at the ticket office.', items: [
            { q: 'A ___ to Bristol, please. I’m coming back tonight.', a: ['return', 'day return'], why: 'You go and come back, so you need *a return*.' },
            { q: 'What time is the ___ train? (after this one)', a: ['next'], why: '*The next train* is the first train after now.' },
            { q: 'Is it a ___ train, or do I need to change?', a: ['direct'], why: 'A *direct* train goes all the way with no change.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'How do I get to…?',
      about: 'Ask for directions politely and understand the answer.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To ask a stranger for help, start with **Excuse me**. Then ask your question. *How do I get to…?* asks for the way. *Is there a… near here?* asks if a place is close.' },
          { t: 'examples', items: [
            { s: '**Excuse me**, how do I get to the station?', n: '*Excuse me* first: it is polite to a stranger.' },
            { s: 'Excuse me, **is there** a cash machine **near here**?', n: 'You do not know where the place is, or if there is one.' },
            { s: '**Is it far?**', n: 'Ask how long the walk is.' },
            { s: 'Sorry, could you say that again?', n: 'Ask the person to repeat.' },
          ] },
          { t: 'table', caption: 'Understanding the answer', explain: ['head', 'col1'], head: ['Phrase', 'Meaning'], rows: [
            ['Go straight on.', 'Do not turn. Keep going.'],
            ['Turn left. / Turn right.', 'Go to the left or to the right.'],
            ['Take the second right.', 'Do not take the first road on the right. Take the next one.'],
            ['It’s on your left.', 'You see it on the left side.'],
            ['It’s opposite the bank.', 'It is on the other side of the road from the bank.'],
            ['It’s next to the café.', 'It is beside the café.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'In the street', lines: [
            { who: 'Grace', s: 'Excuse me, how do I get to the post office?' },
            { who: 'Man', s: 'Go straight on to the traffic lights, then turn left into King Street.' },
            { who: 'Grace', s: 'Left at the traffic lights. OK.' },
            { who: 'Man', s: 'Then take the second right. The post office is on your left, opposite the bank.' },
            { who: 'Grace', s: 'Sorry, could you say that again?' },
            { who: 'Man', s: 'Second right, and it’s on your left, opposite the bank.' },
            { who: 'Grace', s: 'Thanks. Is it far?' },
            { who: 'Man', s: 'No, it’s about five minutes on foot.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Repeat the directions back, like Grace: *Left at the traffic lights.* Then the other person can tell you if you understood. *On foot* means walking.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about Grace’s directions. True or false?', items: [
            { q: 'Grace turns left at the traffic lights.', a: 't', why: '*Turn left into King Street.*' },
            { q: 'She takes the first road on the right.', a: 'f', why: 'She takes the *second right*.' },
            { q: 'The post office is opposite the bank.', a: 't', why: '*It’s on your left, opposite the bank.*' },
            { q: 'The post office is a long walk away.', a: 'f', why: '*It’s about five minutes on foot.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___ me, is there a pharmacy near here?', o: ['Excuse', 'Thank', 'Help'], why: 'Before a question to a stranger, say *Excuse me*.' },
            { q: 'How do I ___ to the bus station?', o: ['get', 'go', 'arrive'], why: 'The fixed question is *How do I get to…?*' },
            { q: 'Go straight ___ and turn right.', o: ['on', 'in', 'to'], why: '*Go straight on* means do not turn.' },
            { q: 'The bank is ___ the supermarket. Cross the road and you’re there.', o: ['opposite', 'next to', 'in'], why: 'You cross the road, so it is on the other side: *opposite*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'How do I get to the library?', why: '*How do I get to* + the place.' },
            { a: 'Is there a cash machine near here?', why: '*Is there a* + place + *near here?*' },
            { a: 'Take the first road on the left.', why: 'An instruction starts with the verb: *Take…*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that tell you where the place is.', items: [
            { s: 'The café is [next] [to] the cinema.', why: '*Next to* says where the café is.' },
            { s: 'Turn left. The school is [opposite] the park.', why: '*Opposite* says where the school is.' },
            { s: 'Go straight on. The bus stop is [on] [your] [right].', why: '*On your right* says where the bus stop is.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The 10:15 is cancelled',
      about: 'Read a train timetable and a notice about a cancelled train.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Timetables in the UK use the 24-hour clock. *14:30* is half past two in the afternoon. People often say the numbers: *fourteen thirty*.' },
          { t: 'table', caption: 'Leeds to York, Saturday', head: ['Leaves Leeds', 'Arrives York', 'Platform', 'Change'], rows: [
            ['09:45', '10:12', '2', 'direct'],
            ['10:15', '10:41', '3', 'direct'],
            ['10:45', '11:14', '4', 'direct'],
            ['11:20', '12:05', '1', 'change at Selby'],
          ] },
        ],
        [
          { t: 'reading', title: 'Customer notice', md: 'The 10:15 train from Leeds to York is cancelled today because of a problem with the train. We are sorry for the delay to your journey.\n\nPassengers can take the next train at 10:45 from platform 4. Your ticket is valid on this train, so you do not need to buy a new one.\n\nThere is also a replacement bus. It leaves from the bus stop in front of the station at 10:30. The journey by bus takes about fifty minutes.\n\nFor more information, please speak to a member of staff or look at the screens in the station.' },
          { t: 'text', md: '*Cancelled* means the train does not run today. A *delay* is when something is late. A *replacement bus* takes you to the same place when there is no train.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'The 10:15 train to York is not running today.', a: 't', why: 'It is *cancelled*: it does not run.' },
            { q: 'Passengers need to buy a new ticket for the 10:45 train.', a: 'f', why: '*Your ticket is valid on this train, so you do not need to buy a new one.*' },
            { q: 'The replacement bus is faster than the train.', a: 'f', why: 'The bus takes about fifty minutes. On the timetable, the train takes less than thirty minutes.' },
            { q: 'There is a café in the station.', a: 'ng', why: 'The notice does not talk about a café.' },
            { q: 'The replacement bus leaves before the 10:45 train.', a: 't', why: 'The bus leaves at 10:30.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Use the timetable and the notice. Choose the right answer.', items: [
            { q: 'Tomasz wants the next train to York. Which platform does he go to?', o: ['Platform 4', 'Platform 3', 'Platform 1'], why: 'The 10:15 is cancelled. The next train is at 10:45 from platform 4.' },
            { q: 'When does the 10:45 train arrive in York?', o: ['At 11:14', 'At 10:41', 'At 12:05'], why: 'The timetable says the 10:45 arrives at 11:14.' },
            { q: 'On which train do you need to change?', o: ['The 11:20', 'The 09:45', 'The 10:45'], why: 'The 11:20 has a change at Selby. The others are direct.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with words from the notice.', items: [
            { q: 'The train is ___. It is not running today.', a: ['cancelled'], why: '*Cancelled* means it does not run. British English writes it with two Ls.' },
            { q: 'We are sorry for the ___ to your journey.', a: ['delay'], why: 'A *delay* is when you arrive late.' },
            { q: 'Your ticket is ___ on the next train.', a: ['valid'], why: '*Valid* means you can use it.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You want to go to Leeds and come back. You ask for ___.', o: ['a return', 'a single', 'a platform'], why: 'A *return* is a ticket to go and come back.' },
      { q: 'Excuse me, how do I ___ to the hospital?', o: ['get', 'arrive', 'take'], why: '*How do I get to…?*' },
      { q: 'The 18:20 train is ___. There is a replacement bus.', o: ['cancelled', 'direct', 'valid'], why: 'There is no train, so there is a replacement bus: it is *cancelled*.' },
      { q: 'It isn’t a direct train. You need to ___ at Crewe.', o: ['change', 'turn', 'stop'], why: '*Change* means get off one train and get on another.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Can I pay ___ card?', a: ['by'], why: '*Pay by card*.' },
      { q: 'Go straight ___, then turn left.', a: ['on'], why: '*Go straight on* means do not turn.' },
      { q: 'The pharmacy is ___ the bank, on the other side of the road.', a: ['opposite'], why: 'On the other side of the road: *opposite*.' },
      { q: '___ me, is there a bus stop near here?', a: ['Excuse'], why: 'Start a question to a stranger with *Excuse me*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
      ['Which platform is it?', 'Platform two.'],
      ['Is it far?', 'No, about five minutes on foot.'],
      ['Single or return?', 'Return, please.'],
      ['Do I need to change?', 'No, it’s a direct train.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Which platform does the train leave from?', why: '*Which platform* + *does the train* + *leave from?*' },
      { a: 'Is there a pharmacy near here?', why: '*Is there a* + place + *near here?*' },
    ] },
  ],
};
