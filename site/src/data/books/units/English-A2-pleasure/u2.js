// English A2 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'At the station and airport',
  goal: 'Travel by train, bus and plane.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['tickets', 'train', 'airport', 'announcements', 'delays'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'A return ticket, please',
      about: 'Buy a ticket and learn the words for platforms, gates and delays.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Lucas', s: 'Hello. A return ticket to Oxford, please.' },
            { who: 'Clerk', s: 'Coming back today?' },
            { who: 'Lucas', s: 'No, on Sunday.' },
            { who: 'Clerk', s: 'OK. That’s thirty-two pounds forty.' },
            { who: 'Lucas', s: 'Can I pay by card?' },
            { who: 'Clerk', s: 'Yes, of course. The next train leaves at 10.15 from platform 3.' },
            { who: 'Lucas', s: 'Is it a direct train?' },
            { who: 'Clerk', s: 'No, you change at Reading.' },
          ] },
          { t: 'text', md: 'A **single** ticket is for one journey. A **return** ticket is there and back. In the UK, train tickets are often cheaper at quieter times of the day, so it is a good idea to ask.' },
        ],
        [
          { t: 'table', caption: 'Words for trains, buses and planes', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['platform', 'where you get on a train'],
            ['gate', 'where you get on a plane'],
            ['boarding pass', 'the ticket you need to get on a plane'],
            ['direct', 'with no change'],
            ['on time', 'not early and not late'],
            ['delayed', 'later than the time on the timetable'],
            ['cancelled', 'it is not going to leave at all'],
          ] },
          { t: 'tip', art: 'owl', md: 'We say *on the platform* but *at the gate*: *Wait on platform 2.* *Go to gate 14.* For a train, people say *get on* and *get off*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
            ['a single ticket', 'to go there only'],
            ['a return ticket', 'to go there and come back'],
            ['a direct train', 'you do not change trains'],
            ['a boarding pass', 'you show it at the gate'],
            ['a cancelled flight', 'the plane does not leave'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'The train to Bath leaves from ___ 6.', o: ['platform', 'gate', 'station'], why: 'Trains leave from a *platform*.' },
            { q: 'Our flight is boarding at ___ 22.', o: ['gate', 'platform', 'stop'], why: 'You get on a plane at a *gate*.' },
            { q: 'The bus is ___. It’s twenty minutes late.', o: ['delayed', 'cancelled', 'on time'], why: '*Delayed* means late. *Cancelled* means it is not going at all.' },
            { q: 'You don’t need to change. It’s a ___ train.', o: ['direct', 'return', 'single'], why: 'A *direct* train goes all the way with no change.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete what the passenger says.', items: [
            { q: 'A ___ to Manchester, please. I’m coming back tomorrow.', a: ['return', 'return ticket'], why: 'There and back: a *return*.' },
            { q: 'Can I pay ___ card?', a: ['by'], why: 'We say *pay by card*, but *pay in cash*.' },
            { q: 'What time does the next train ___?', a: ['leave', 'go'], why: '*The next train* is the subject, so after *does* use the base form: *leave*.' },
            { q: 'Do I need to ___ trains?', a: ['change'], why: 'To *change trains* is to get off one train and get on another.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Excuse me, is this the right train?',
      about: 'Ask for help at the station or airport and understand messages on screens.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you need help, start with *Excuse me*. Then ask a short question. *Which* asks about one thing from a small group: *which platform*, *which gate*.' },
          { t: 'examples', items: [
            { s: 'Excuse me, **which platform** does the train to York leave from?', n: 'The preposition *from* goes at the end of the question.' },
            { s: '**Is this** the right bus for the airport?', n: 'A question with *be*: *Is this…?*' },
            { s: '**Where** can I buy a ticket?', n: '*Where can I…?* is useful in any new place.' },
            { s: '**How do I get** to gate 30?', n: 'Ask the way with *How do I get to…?*' },
          ] },
        ],
        [
          { t: 'text', md: 'Screens and signs use very short messages. Words like *now* and *will* tell you about a change. *Is now boarding* means you can get on the plane now.' },
          { t: 'table', caption: 'Messages on screens', explain: ['head', 'col1'], head: ['Message', 'What it means'], rows: [
            ['Flight AR 316 to Dublin is now boarding at gate 12.', 'Go to gate 12 now and get on the plane.'],
            ['Platform change: the 14.05 to Leeds will now leave from platform 7.', 'The train is the same, but go to a different platform.'],
            ['The 09.40 to Cardiff is delayed by about 15 minutes.', 'The train will leave at about 09.55.'],
            ['Gate closing', 'Hurry. Soon you cannot get on the plane.'],
          ] },
          { t: 'tip', art: 'owl', md: 'People often say times like *09.40* as *nine forty*. On screens in the UK, times often use the 24-hour clock: *14.05* is *five past two* in the afternoon.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
            { a: 'Is this the right train for Glasgow?', why: '*Is this…?* asks if you are in the right place.' },
            { a: 'Where can I buy a ticket?', why: '*Where* + *can* + *I* + verb.' },
            { a: 'Which gate does our flight leave from?', why: '*Which gate* + *does* + subject + verb, and *from* at the end.' },
            { a: 'How do I get to platform nine?', why: '*How do I get to…?* asks the way.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the messages on screens. True or false?', items: [
            { q: 'Passengers for Dublin can get on the plane now.', a: 't', why: '*Is now boarding* means people are getting on now.' },
            { q: 'The 14.05 to Leeds is cancelled.', a: 'f', why: 'It leaves from a different platform. It is not cancelled.' },
            { q: 'The train to Cardiff will leave at about 09.55.', a: 't', why: '09.40 plus about 15 minutes is about 09.55.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that tell you about a problem or a change.', items: [
            { s: 'The 11.20 to Bristol is [delayed] by ten minutes.', why: '*Delayed* means the train is late.' },
            { s: 'Flight AR 552 to Rome is [cancelled]. Please go to the information desk.', why: '*Cancelled* means the flight is not going.' },
            { s: 'Platform [change]: the 16.30 to Exeter leaves from platform 2.', why: 'A *change* means the plan is now different.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best question.', items: [
            { q: 'You are not sure if you are on the right bus. You ask: ___', o: ['Is this the right bus for the centre?', 'Is the right bus this for the centre?', 'This is the right bus for the centre?'], why: 'In a question with *be*, the verb comes first: *Is this…?*' },
            { q: 'You want to find the gate. You ask: ___', o: ['Excuse me, how do I get to gate 5?', 'Excuse me, how I get to gate 5?', 'Excuse me, how do I go gate 5?'], why: '*How do I get to…?* needs *do* and *to*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The departure board',
      about: 'Read a departure board and a notice about changes to trains.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Departures, Brackwell station', md: '10.05 London Paddington, platform 1, on time\n\n10.12 Swindon, platform 4, delayed, expected 10.30\n\n10.20 Oxford, platform 2, on time\n\n10.34 Bath Spa, platform 3, cancelled\n\n10.45 Bristol Temple Meads, platform 4, on time' },
          { t: 'ex', kind: 'choice', h: 'Look at the departure board. Choose the right answer.', items: [
            { q: 'Which train is late?', o: ['the 10.12 to Swindon', 'the 10.05 to London Paddington', 'the 10.45 to Bristol Temple Meads'], why: 'The board says *delayed, expected 10.30*.' },
            { q: 'Which train does not go today?', o: ['the 10.34 to Bath Spa', 'the 10.20 to Oxford', 'the 10.12 to Swindon'], why: '*Cancelled* means it does not go.' },
            { q: 'Two trains leave from the same platform. Which platform?', o: ['platform 4', 'platform 2', 'platform 3'], why: 'The trains to Swindon and Bristol both leave from platform 4.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Notice to passengers', md: 'Weekend engineering work\n\nOn Saturday 12 and Sunday 13 October there are no trains between Brackwell and Bath Spa. This is because of work on the line.\n\nReplacement buses will run every 30 minutes. They leave from the bus stop outside the main entrance of the station. The journey is about 25 minutes longer than by train.\n\nYour train ticket is valid on the replacement buses. You do not need to buy a new ticket.\n\nBikes are not allowed on the buses. Please allow extra time for your journey and check before you travel.\n\nWe are sorry for any problems this may cause.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice again. True, false or not given?', items: [
            { q: 'There are no trains to Bath Spa on that weekend.', a: 't', why: '*There are no trains between Brackwell and Bath Spa.*' },
            { q: 'The buses leave from platform 1.', a: 'f', why: 'They leave from *the bus stop outside the main entrance*.' },
            { q: 'The bus journey is quicker than the train.', a: 'f', why: 'It is *about 25 minutes longer*.' },
            { q: 'Passengers need a new ticket for the bus.', a: 'f', why: '*Your train ticket is valid on the replacement buses.*' },
            { q: 'There is a café at the bus stop.', a: 'ng', why: 'The notice does not talk about a café.' },
            { q: 'You cannot take a bike on the bus.', a: 't', why: '*Bikes are not allowed on the buses.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, there is often work on train lines at weekends. Then a *replacement bus* takes passengers instead of the train. Always check before you travel.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'You get on a plane at the ___', o: ['gate.', 'platform.', 'ticket office.'], why: 'Planes: *gate*. Trains: *platform*.' },
      { q: 'The flight is ___. It is not going today.', o: ['cancelled', 'delayed', 'boarding'], why: '*Cancelled* means it does not go at all.' },
      { q: 'A ticket there and back is a ___ ticket.', o: ['return', 'single', 'direct'], why: '*Return* means there and back.' },
      { q: 'Flight AR 210 is now ___ at gate 9.', o: ['boarding', 'board', 'boarded'], why: '*Is now boarding*: people are getting on now.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Can I pay ___ card?', a: ['by'], why: '*Pay by card.*' },
      { q: 'Excuse me, ___ platform does the train to Leeds leave from?', a: ['which', 'what'], why: '*Which platform…?* asks about one platform from a group.' },
      { q: 'The train is ___ by about ten minutes.', a: ['delayed'], why: '*Delayed by* + time: it is late.' },
      { q: 'It isn’t a direct train. You ___ at Birmingham.', a: ['change'], why: 'To *change* is to get off one train and get on another.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Is this the right bus for the airport?', why: '*Is this…?* comes first in the question.' },
      { a: 'Where can I buy a ticket?', why: '*Where* + *can* + *I* + verb.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A replacement bus takes passengers when there are no trains.', a: 't', why: 'It replaces the train for a short time.' },
      { q: 'A *direct* train means you change trains once.', a: 'f', why: '*Direct* means no change.' },
    ] },
  ],
};
