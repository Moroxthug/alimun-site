// English A2 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'At the hotel',
  goal: 'Check in, ask for things and solve small problems.',
  art: 'cat',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['hotel', 'check-in', 'requests', 'complaints'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'I have a reservation',
      about: 'Check in and out, and ask about breakfast and wifi.',
      art: 'cat',
      spreads: [
        [
          { t: 'dialogue', title: 'At reception', lines: [
            { who: 'Receptionist', s: 'Good evening. Welcome to the Riverside Hotel.' },
            { who: 'Mei', s: 'Hello. I have a reservation. My name is Mei Chen.' },
            { who: 'Receptionist', s: 'Let me see… Yes, a single room for three nights. Could I see your passport, please?' },
            { who: 'Mei', s: 'Here you are. What time is breakfast?' },
            { who: 'Receptionist', s: 'It’s from seven to half past nine, in the restaurant on the ground floor.' },
            { who: 'Mei', s: 'And is there wifi in the room?' },
            { who: 'Receptionist', s: 'Yes, it’s free. The password is on your key card. You’re in room 214, on the second floor.' },
            { who: 'Mei', s: 'Thank you. What time is check-out?' },
            { who: 'Receptionist', s: 'By eleven o’clock. Enjoy your stay.' },
          ] },
        ],
        [
          { t: 'table', caption: 'At reception', explain: ['head'], head: ['The guest says', 'The receptionist says'], rows: [
            ['I have a reservation.', 'What name is it under?'],
            ['It’s under the name Kowalski.', 'Could I see your passport, please?'],
            ['What time is breakfast?', 'It’s from seven to ten.'],
            ['What’s the wifi password?', 'It’s on your key card.'],
            ['Could I check out, please?', 'Of course. How was your stay?'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, the *ground floor* is the floor at street level. The *first floor* is one floor up. In the USA, the floor at street level is the *first floor*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['What name is it under?', 'It’s under Garcia.'],
            ['What time is breakfast?', 'From seven to ten.'],
            ['Where is the restaurant?', 'On the ground floor.'],
            ['What time is check-out?', 'By eleven o’clock.'],
            ['What’s the wifi password?', 'It’s on your key card.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'I ___ a reservation for two nights.', o: ['have', 'make', 'am'], why: 'You *have* a reservation when you arrive. You *make* it before.' },
            { q: 'Could I ___ your passport, please?', o: ['see', 'look', 'watch'], why: '*Could I see…?* is the polite question.' },
            { q: 'The booking is ___ the name Silva.', o: ['under', 'on', 'with'], why: 'We say a booking is *under* a name.' },
            { q: 'Breakfast is ___ seven to ten.', o: ['from', 'at', 'in'], why: '*From* one time *to* another.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What time does the restaurant open?', why: '*What time* + *does* + subject + verb.' },
            { a: 'Is there wifi in the room?', why: '*Is there…?* asks if something is in a place.' },
            { a: 'Could I see your passport?', why: '*Could I* + verb: a polite question.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the guest’s words.', items: [
            { q: 'Hello. I ___ a reservation. My name is Tom Baker.', a: ['have'], why: 'You *have* a reservation.' },
            { q: 'What’s the wifi ___?', a: ['password'], why: 'You need the *password* to use the wifi.' },
            { q: 'What time is check-___?', a: ['out'], why: '*Check-out* is the time you must leave the room.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The shower doesn’t work',
      about: 'Say what is wrong with your room and ask for help politely.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To talk about a problem, say what is wrong: *The shower doesn’t work.* *There aren’t any towels.* *The room is too noisy.* Then ask for help with *Could you…?* or *Could I…?*' },
          { t: 'examples', items: [
            { s: 'The air conditioning **doesn’t work**.', n: '*Doesn’t work* means it is broken.' },
            { s: 'There **isn’t any** hot water.', n: '*Water* is uncountable: *isn’t any*.' },
            { s: 'There **aren’t any** towels in the bathroom.', n: '*Towels* is plural: *aren’t any*.' },
            { s: 'The room is **too** cold.', n: '*Too* + adjective: more than you want.' },
            { s: '**Could you** send someone to look at it?', n: 'A polite request.' },
            { s: '**Could I** change rooms, please?', n: 'Ask for something for you: *Could I…?*' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Calling reception', lines: [
            { who: 'Reception', s: 'Reception, how can I help?' },
            { who: 'Daniel', s: 'Hi, this is room 108. I’m sorry, but the shower doesn’t work.' },
            { who: 'Reception', s: 'Oh, I’m sorry about that. I’ll send someone up right away.' },
            { who: 'Daniel', s: 'Thank you. And there aren’t any towels.' },
            { who: 'Reception', s: 'I’ll bring some towels up in five minutes.' },
            { who: 'Daniel', s: 'Also, the room is very noisy. It’s next to the lift. Could I change rooms?' },
            { who: 'Reception', s: 'Let me check… Yes, we have a quieter room on the fourth floor.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Start with *I’m sorry, but…* or *I’m afraid…*. It sounds polite, even when you have a problem. Staff often answer with *I’ll…* for something they decide to do now: *I’ll send someone.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right words.', items: [
            { q: 'The TV ___ work.', o: ['doesn’t', 'don’t', 'isn’t'], why: '*The TV* is one thing: *doesn’t work*.' },
            { q: 'There ___ any towels.', o: ['aren’t', 'isn’t', 'doesn’t'], why: '*Towels* is plural: *aren’t any*.' },
            { q: 'There ___ any soap.', o: ['isn’t', 'aren’t', 'don’t'], why: '*Soap* is uncountable: *isn’t any*.' },
            { q: 'The room is ___ hot. Can I open the window?', o: ['too', 'very much', 'enough'], why: '*Too hot*: more than you want.' },
            { q: '___ I have an extra pillow, please?', o: ['Could', 'Do', 'Am'], why: '*Could I have…?* asks for something politely.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the words that say what the problem is.', items: [
            { s: 'I’m sorry, but the light in the bathroom [doesn’t] [work].', why: '*Doesn’t work* tells you something is broken.' },
            { s: 'Could I change rooms? This one is [too] [noisy].', why: '*Too noisy*: there is more noise than you want.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the requests.', items: [
            { q: 'Could you ___ someone to look at the heating?', a: ['send'], why: 'Staff *send* someone to repair it.' },
            { q: 'Could I ___ rooms, please? This one is very small.', a: ['change'], why: 'We say *change rooms*, with a plural.' },
            { q: 'I’m ___, but there isn’t any hot water.', a: ['sorry', 'afraid'], why: '*I’m sorry, but…* or *I’m afraid…* sounds polite.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Information for guests',
      about: 'Read the information that hotels give to their guests.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Welcome to the Old Mill Hotel', md: 'We hope you enjoy your stay with us. Here is some useful information.\n\nBreakfast is served in the Garden Room from 7 am to 10 am on weekdays and from 8 am to 11 am at the weekend. If you leave very early, ask at reception for a breakfast bag.\n\nThe wifi is free for all guests. You can find the password on the back of this card.\n\nReception is open 24 hours a day. If you need anything, dial 0 from the phone in your room.\n\nPlease leave your room by 11 am on the day you leave. You can leave your bags at reception after check-out.\n\nThe car park is behind the hotel. It costs £8 a day. Please give your car number to reception.\n\nThis is a no-smoking hotel.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the information again. True, false or not given?', items: [
            { q: 'On Saturday, breakfast starts at 7 am.', a: 'f', why: 'At the weekend, breakfast is *from 8 am to 11 am*.' },
            { q: 'Guests pay for the wifi.', a: 'f', why: '*The wifi is free for all guests.*' },
            { q: 'You can call reception at night.', a: 't', why: '*Reception is open 24 hours a day.*' },
            { q: 'The hotel has a swimming pool.', a: 'ng', why: 'The information does not say anything about a pool.' },
            { q: 'You can leave your bags at the hotel after you check out.', a: 't', why: '*You can leave your bags at reception after check-out.*' },
            { q: 'Parking is free.', a: 'f', why: '*It costs £8 a day.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Your train leaves at 6 am. What can you do?', o: ['Ask at reception for a breakfast bag.', 'Have breakfast in the Garden Room at 6 am.', 'Call reception at 10 am.'], why: '*If you leave very early, ask at reception for a breakfast bag.*' },
            { q: 'Where is the wifi password?', o: ['On the back of the card.', 'At reception only.', 'In the Garden Room.'], why: '*You can find the password on the back of this card.*' },
            { q: 'How do you call reception from your room?', o: ['You dial 0.', 'You dial 24.', 'You dial 11.'], why: '*Dial 0 from the phone in your room.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'I have a reservation ___ the name Patel.', o: ['under', 'in', 'at'], why: 'A booking is *under* a name.' },
      { q: 'The shower ___ work.', o: ['doesn’t', 'isn’t', 'don’t'], why: '*The shower* is one thing: *doesn’t work*.' },
      { q: 'There ___ any towels in the room.', o: ['aren’t', 'isn’t', 'not'], why: '*Towels* is plural: *aren’t any*.' },
      { q: 'In the UK, the floor at street level is the ___', o: ['ground floor.', 'first floor.', 'second floor.'], why: 'In the UK, the *first floor* is one floor up.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Could I ___ rooms, please? This one is very noisy.', a: ['change'], why: '*Change rooms.*' },
      { q: 'The room is ___ cold. Could you turn on the heating?', a: ['too', 'very'], why: '*Too cold* or *very cold*: the guest is not happy with it.' },
      { q: 'What’s the wifi ___?', a: ['password'], why: 'You need the *password* for the wifi.' },
      { q: 'Please leave your room ___ 11 am.', a: ['by', 'before'], why: '*By 11 am* means at 11 or earlier.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you send someone to my room?', why: '*Could you* + verb: a polite request.' },
      { a: 'Is there wifi in the room?', why: '*Is there…?* asks if something is in a place.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the problem and the request.', pairs: [
      ['There aren’t any towels.', 'Could you bring some towels?'],
      ['The room is too noisy.', 'Could I change rooms?'],
      ['The TV doesn’t work.', 'Could you send someone to repair it?'],
      ['I leave at 5 am.', 'Could I have a breakfast bag?'],
    ] },
  ],
};
