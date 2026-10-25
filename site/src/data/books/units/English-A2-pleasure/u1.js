// English A2 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Planning a trip',
  goal: 'Plan a trip, book a room and talk about dates and prices.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['dates', 'prices', 'booking', 'accommodation'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Dates and prices',
      about: 'Say and write dates and prices, and understand a booking form.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'In British English we usually **write** a date with the number first: *14 June*. We **say** it with *the* and *of*: *the fourteenth of June*. For dates we use ordinal numbers: *first*, *second*, *third*, *fourth*.' },
          { t: 'table', caption: 'Writing and saying dates', explain: ['head'], quiz: true, head: ['We write', 'We say'], rows: [
            ['1 March', 'the first of March'],
            ['2 April', 'the second of April'],
            ['3 May', 'the third of May'],
            ['12 August', 'the twelfth of August'],
            ['21 September', 'the twenty-first of September'],
            ['30 December', 'the thirtieth of December'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use *in* with months: *in July*. Use *on* with days and dates: *on Friday*, *on 3 July*. For a holiday, say *from 3 to 10 July*.' },
        ],
        [
          { t: 'text', md: 'We write the money sign **before** the number, but we say the money word **after** it: *£45* is *forty-five pounds*. For a price with pence, people often say only the numbers: *£12.50* is *twelve pounds fifty* or *twelve fifty*.' },
          { t: 'examples', items: [
            { s: 'The room is **£85 a night**.', n: '*Eighty-five pounds a night.* *A night* and *per night* mean the same.' },
            { s: 'The tour costs **€40 per person**.', n: '*Forty euros per person.* Each person pays this price.' },
            { s: 'A coffee at the station is **£3.20**.', n: '*Three pounds twenty* or *three twenty*.' },
            { s: 'Three nights is **£255 in total**.', n: '*In total* is the full price for everything.' },
          ] },
          { t: 'reading', title: 'Your booking', md: 'Hotel: The Harbour View, Brighton\n\nCheck-in: Friday 14 June\n\nCheck-out: Sunday 16 June\n\nGuests: 2 adults\n\nRoom: 1 double room, sea view\n\nPrice: £95 per night\n\nTotal: £190\n\nFree cancellation until 10 June' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the written date and the spoken date.', pairs: [
            ['5 May', 'the fifth of May'],
            ['15 May', 'the fifteenth of May'],
            ['22 July', 'the twenty-second of July'],
            ['3 October', 'the third of October'],
            ['31 January', 'the thirty-first of January'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with in, on, from or to.', items: [
            { q: 'We usually go on holiday ___ August.', a: ['in'], why: 'Use *in* with months.' },
            { q: 'Our flight leaves ___ 2 September.', a: ['on'], why: 'Use *on* with a date.' },
            { q: 'I’d like a room from 4 ___ 7 March.', a: ['to'], why: '*From* one date *to* another date.' },
            { q: 'The hotel is closed ___ Mondays.', a: ['on'], why: 'Use *on* with days of the week.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the booking form again. Choose the right answer.', items: [
            { q: 'The guests arrive on ___', o: ['the fourteenth of June.', 'the sixteenth of June.', 'the tenth of June.'], why: 'The check-in date is the day you arrive: *Friday 14 June*.' },
            { q: 'They stay for ___', o: ['two nights.', 'three nights.', 'one night.'], why: 'From Friday to Sunday is two nights: Friday night and Saturday night.' },
            { q: 'One night costs ___', o: ['ninety-five pounds.', 'a hundred and ninety pounds.', 'nine pounds fifty.'], why: '*£95 per night* is the price for one night.' },
            { q: 'They can cancel and pay nothing ___', o: ['until the tenth of June.', 'on the day they arrive.', 'after the sixteenth of June.'], why: '*Free cancellation until 10 June*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Is breakfast included?',
      about: 'Ask about a room or a tour before you book.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'Booking a room by phone', lines: [
            { who: 'Receptionist', s: 'Good morning, Seaview Guest House. How can I help?' },
            { who: 'Amira', s: 'Hello. Do you have a double room from the eighth to the tenth of May?' },
            { who: 'Receptionist', s: 'Let me check. Yes, we do. Two nights, is that right?' },
            { who: 'Amira', s: 'Yes. How much is it per night?' },
            { who: 'Receptionist', s: 'It’s seventy-eight pounds a night.' },
            { who: 'Amira', s: 'Is breakfast included?' },
            { who: 'Receptionist', s: 'Yes, it is. Breakfast is from seven to ten.' },
            { who: 'Amira', s: 'Great. I’d like to book it, please.' },
          ] },
          { t: 'text', md: 'To ask if something is free or part of the price, use *Is … included?* To say what you want, use *I’d like…*. It is more polite than *I want…*.' },
        ],
        [
          { t: 'table', caption: 'Useful questions before you book', explain: ['head'], head: ['You want to know…', 'You ask'], rows: [
            ['if there is a free room', 'Do you have a room for two nights?'],
            ['the price', 'How much is it per night?'],
            ['if breakfast is part of the price', 'Is breakfast included?'],
            ['the time of a tour', 'What time does the tour start?'],
            ['how long it takes', 'How long is the tour?'],
            ['where to meet', 'Where does the tour start?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Start with *Excuse me* or *Hello* and finish with *please* and *thank you*. People in the UK often say *please* and *thank you*, also in shops and hotels.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
            { a: 'Do you have a room for tonight?', why: 'A question with *do*: *Do you have…?*' },
            { a: 'How much is the room per night?', why: '*How much* + *is* + the thing.' },
            { a: 'What time does the tour start?', why: '*What time* + *does* + subject + verb.' },
            { a: 'Is breakfast included in the price?', why: '*Is* comes first in a question with *be*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['How long is the tour?', 'About two hours.'],
            ['Where does the tour start?', 'In front of the town hall.'],
            ['Is breakfast included?', 'Yes, it is.'],
            ['How much is it per person?', 'Twenty-five pounds.'],
            ['Do you have a single room?', 'Sorry, we’re full.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best words.', items: [
            { q: '___ like to book a boat tour, please.', o: ['I’d', 'I’m', 'I'], why: '*I’d like* (*I would like*) is the polite way to ask for something.' },
            { q: 'How ___ is a ticket for the tour?', o: ['much', 'many', 'long'], why: 'For a price, ask *How much…?*' },
            { q: 'What time ___ the bus tour leave?', o: ['does', 'is', 'do'], why: '*The bus tour* is one thing: *does*.' },
            { q: 'Is lunch ___ in the price?', o: ['included', 'include', 'including'], why: '*Is … included?* asks if it is part of the price.' },
            { q: 'Do you ___ a room with a sea view?', o: ['have', 'has', 'having'], why: 'After *Do you*, use the base form: *have*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Your booking is confirmed',
      about: 'Read a booking confirmation and find the important information.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Booking confirmation', md: 'Dear Mr Okafor,\n\nThank you for booking with Lakeside Lodge. Your booking is confirmed.\n\nYou will arrive on Thursday 22 August and leave on Monday 26 August. That is four nights. You have one twin room for two adults. The price is £70 per night, so the total is £280. You paid a deposit of £50 today. Please pay the rest when you arrive.\n\nCheck-in is from 3 pm. Check-out is by 11 am on your last day. Breakfast is not included, but there is a small café in the main building. It opens at 8 am.\n\nYou can cancel for free until 15 August. After that date, we keep your deposit.\n\nWe look forward to meeting you.\n\nBest wishes,\nHelen Price, Lakeside Lodge' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the confirmation again. True, false or not given?', items: [
            { q: 'Mr Okafor will stay for four nights.', a: 't', why: '*That is four nights*: from 22 to 26 August.' },
            { q: 'He has a room with one big bed.', a: 'f', why: 'He has a *twin room*: a room with two single beds.' },
            { q: 'He paid £280 today.', a: 'f', why: 'He paid a *deposit* of £50. He pays the rest when he arrives.' },
            { q: 'Breakfast is in the price.', a: 'f', why: '*Breakfast is not included.*' },
            { q: 'The café serves hot food in the evening.', a: 'ng', why: 'The email says the café opens at 8 am. It says nothing about the evening.' },
            { q: 'If he cancels on 20 August, he loses £50.', a: 't', why: 'Free cancellation is only *until 15 August*. After that, they keep the deposit.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the nouns that name an amount of money. Do not tap the numbers.', items: [
            { s: 'The [price] is £70 per night, so the [total] is £280.', why: 'The *price* is for one night. The *total* is for all the nights.' },
            { s: 'You paid a [deposit] of £50 today.', why: 'A *deposit* is part of the money that you pay before you arrive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with words from the email.', items: [
            { q: 'Your booking is ___. We have your room ready for you.', a: ['confirmed'], why: '*Confirmed* means it is sure and final.' },
            { q: 'Check-___ is by 11 am on your last day.', a: ['out'], why: '*Check-out* is when you leave the room.' },
            { q: 'You can ___ for free until 15 August.', a: ['cancel'], why: 'To *cancel* is to say you do not want the booking any more.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'How do we say *21 May*?', o: ['the twenty-first of May', 'the twenty-one of May', 'the twentieth-one of May'], why: 'Dates use ordinal numbers: *twenty-first*.' },
      { q: 'How do we say *£16.50*?', o: ['sixteen pounds fifty', 'pounds sixteen fifty', 'fifty sixteen pounds'], why: 'The money word comes after the number: *sixteen pounds fifty*.' },
      { q: 'You want to know if breakfast is part of the price. You ask: ___', o: ['Is breakfast included?', 'Is breakfast including?', 'Does breakfast include?'], why: '*Is … included?*' },
      { q: 'A room with two single beds is a ___', o: ['twin room.', 'double room.', 'single room.'], why: 'A *twin room* has two single beds. A *double room* has one big bed.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'We arrive ___ 9 July.', a: ['on'], why: 'Use *on* with a date.' },
      { q: 'How ___ is the room per night?', a: ['much'], why: 'For a price, ask *How much…?*' },
      { q: 'I’d ___ to book two tickets for the boat tour.', a: ['like'], why: '*I’d like to* + verb is a polite way to ask.' },
      { q: 'You paid a ___ of £30. Please pay the rest when you arrive.', a: ['deposit'], why: 'A *deposit* is part of the money, paid before.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Do you have a room for Saturday?', why: '*Do you have…?* asks if something is free.' },
      { a: 'What time does the tour start?', why: '*What time* + *does* + subject + verb.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Check-in is the day you leave the hotel.', a: 'f', why: 'Check-in is when you arrive. Check-out is when you leave.' },
      { q: '*£60 per night* and *£60 a night* mean the same.', a: 't', why: 'Both mean the price for one night.' },
    ] },
  ],
};
