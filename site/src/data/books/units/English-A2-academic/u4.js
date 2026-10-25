// English A2 for study and exams, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Reading for information',
  goal: 'Find information in notices, adverts and short articles.',
  art: 'cat',
  tags: { skills: ['reading', 'vocabulary'], topics: ['scanning', 'main-idea', 'notices', 'adverts', 'times-and-prices'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Finding the details',
      about: 'Scan a text quickly to find times, prices and places.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'You do not always need to read every word. To find one detail, like a time or a price, **scan** the text: move your eyes quickly over it and look only for that detail.' },
          { t: 'table', caption: 'What details look like', explain: ['head', 'col0'], head: ['You are looking for…', 'Look for…'], rows: [
            ['a time', '9:30, 7 pm, half past six'],
            ['a price', '£12, five pounds, free'],
            ['a day or a date', 'Monday, 3 May, next week'],
            ['a place', 'Room 6, the library, Park Road'],
          ] },
          { t: 'tip', art: 'owl', md: 'Read the question **first**. Then you know what to look for. Prices often have *£*, and names of places often start with a capital letter: *Park Road*. *am* means in the morning, and *pm* means in the afternoon or evening.' },
        ],
        [
          { t: 'reading', title: 'Weekend English Club', md: '**Practise speaking English in a friendly group!**\n\nWhere: Hillside Library, Room 3 (second floor)\n\nWhen: Saturdays, 10:30 am to 12 noon\n\nPrice: £4 a session, free for library members\n\nBring a notebook and a pen. Tea and coffee are free.\n\nFor more information, ask at the library desk.' },
          { t: 'ex', kind: 'choice', h: 'Scan the advert. Choose the correct answer.', items: [
            { q: 'What time does the club start?', o: ['At 10:30 am.', 'At 12 noon.', 'At 3 pm.'], why: '“10:30 am to 12 noon”: it starts at 10:30.' },
            { q: 'How much is it for library members?', o: ['Nothing.', '£4.', '£3.'], why: '“Free for library members”: they pay nothing.' },
            { q: 'Where is the club?', o: ['In Room 3 of the library.', 'In the library café.', 'On the first floor.'], why: '“Room 3 (second floor)”.' },
            { q: 'What do you need to bring?', o: ['A notebook and a pen.', 'Tea and coffee.', 'A dictionary.'], why: '“Bring a notebook and a pen.” Tea and coffee are free there.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Scan each sentence. Tap the price and the time.', items: [
            { s: 'The trip costs [£25] and the coach leaves at [8:15].', why: 'The price has *£*: *£25*. The time is *8:15*.' },
            { s: 'Tickets are [£6] for adults, and the museum closes at [5] [pm].', why: 'The price is *£6*. The time is *5 pm*.' },
            { s: 'The class starts at [7] [pm] and costs [£10].', why: 'The time is *7 pm*. The price is *£10*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the time in numbers.', items: [
            { q: 'half past six in the evening = ___ pm', a: ['6:30', '6.30'], why: '*Half past six* is 6:30. In the evening, we write *pm*.' },
            { q: 'quarter to nine in the morning = ___ am', a: ['8:45', '8.45'], why: '*Quarter to nine* is fifteen minutes before nine: 8:45.' },
            { q: 'quarter past two in the afternoon = ___ pm', a: ['2:15', '2.15'], why: '*Quarter past two* is fifteen minutes after two: 2:15.' },
            { q: 'ten o’clock in the morning = 10 ___', a: ['am'], why: 'In the morning, we write *am*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What is it about?',
      about: 'Understand the main idea of a short text.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **main idea** is what a text is mostly about. To find it, read the title, the first sentence and the last sentence. You do not need to understand every word.' },
          { t: 'reading', title: 'New bike park', md: 'From Monday 3 March, students cannot leave bicycles at the front door of the college. There is a new bike park behind the sports hall, with space for eighty bikes. It has a roof, so your bike stays dry in the rain. Please use the new bike park from this date.' },
          { t: 'tip', art: 'owl', md: 'A text can have many details, but it has only one main idea. Ask yourself: *Why did the writer write this?*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read about the bike park. What is the main idea?', items: [
            { q: '', o: ['There is a new place for students’ bikes.', 'The sports hall is new.', 'The college is closed on Monday.'], why: 'The title, the first sentence and the last sentence are all about the new bike park.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Now find two details. True or false?', items: [
            { q: 'There is space for eighty bikes.', a: 't', why: '“With space for eighty bikes”.' },
            { q: 'The new bike park has no roof.', a: 'f', why: '“It has a roof, so your bike stays dry.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each short text and its main idea.', pairs: [
            ['The lift is broken. Please use the stairs.', 'You cannot use the lift today.'],
            ['Lost: a blue scarf in Room 9. Please bring it to reception.', 'Someone wants their scarf back.'],
            ['Tomorrow’s exam starts at 9:00, not 10:00.', 'The exam time is different.'],
            ['Quiet, please. Students are taking exams.', 'Do not make noise here.'],
            ['For sale: grammar book, A2 level, £5. Like new.', 'Someone is selling a book.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the message. Choose the main idea.', items: [
            { q: '“Hi all, our class party is on Friday at 8 pm in the café. Bring some food to share!” Why did Sam write this?', o: ['To invite the class to a party.', 'To sell some food.', 'To say the café is closed.'], why: 'The main idea is the party. The day, the time and the food are details.' },
            { q: '“Sorry, I’m going to be late for class today. My train isn’t running.” Why did Lina write this?', o: ['To say she is going to arrive late.', 'To ask about train times.', 'To say she is ill.'], why: 'She writes that she is going to be late. The train is the reason.' },
            { q: '“From next week, the computer room is open until 9 pm. Before, it closed at 6 pm.” What is the main idea?', o: ['The computer room is open longer.', 'There are new computers.', 'The computer room is closed next week.'], why: 'It now closes at 9 pm, not 6 pm, so it is open for longer.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The school noticeboard',
      about: 'Read four notices and find the right one for each person.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Notices', md: '**Conversation partners**\nWould you like to practise your English with a native speaker? Local volunteers meet learners in the college café on Wednesdays from 5 to 6 pm. It’s free. Write your name on the list at reception.\n\n**Room for rent**\nQuiet room in a shared flat, ten minutes’ walk from the college. £450 a month with bills. Good for a student. Call Marta after 6 pm.\n\n**Library opening times**\nIn the exam weeks (12 to 23 May), the library is open from 8 am to 10 pm, Monday to Saturday. It is closed on Sundays.\n\n**Football team**\nThe college football team needs new players! We train on Tuesday evenings at the sports centre. All levels are welcome. Ask for Joe in Room 15.' },
          { t: 'ex', kind: 'match', h: 'Which notice is right for each person?', pairs: [
            ['Kofi wants to study late in the evening.', 'Library opening times'],
            ['Ana needs somewhere to live.', 'Room for rent'],
            ['Li wants to practise English with a native speaker.', 'Conversation partners'],
            ['Omar wants to play a sport.', 'Football team'],
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notices again. True, false or not given?', items: [
            { q: 'The conversation partners meet on Wednesdays.', a: 't', why: '“On Wednesdays from 5 to 6 pm”.' },
            { q: 'Learners pay for the conversation partners.', a: 'f', why: '“It’s free.”' },
            { q: 'The room is in a shared flat.', a: 't', why: '“Quiet room in a shared flat”.' },
            { q: 'The room has a big desk.', a: 'ng', why: 'The notice does not say what is in the room.' },
            { q: 'In the exam weeks, the library is open on Sundays.', a: 'f', why: '“It is closed on Sundays.”' },
            { q: 'You need to be very good at football to join the team.', a: 'f', why: '“All levels are welcome.”' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'You want to find one price in an advert. You ___', o: ['scan the text for £.', 'read every word slowly.', 'read only the title.'], why: 'To find one detail, scan the text and look only for that detail.' },
      { q: 'To find the main idea, read ___', o: ['the title and the first and last sentences.', 'only the last word.', 'only the numbers.'], why: 'The title, the first sentence and the last sentence often show the main idea.' },
      { q: '“Lost: black umbrella in the library. Please call Tom.” What is the main idea?', o: ['Tom wants his umbrella back.', 'Tom is selling an umbrella.', 'The library is closed.'], why: 'Tom lost his umbrella and wants it back.' },
      { q: '“Open 9 am to 5 pm.” When does it close?', o: ['At five in the afternoon.', 'At nine in the morning.', 'At nine in the evening.'], why: '*5 pm* is five o’clock in the afternoon.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the time in numbers.', items: [
      { q: 'half past seven in the morning = ___ am', a: ['7:30', '7.30'], why: '*Half past seven* is 7:30.' },
      { q: 'quarter to four in the afternoon = ___ pm', a: ['3:45', '3.45'], why: '*Quarter to four* is fifteen minutes before four: 3:45.' },
      { q: 'eight o’clock in the evening = 8 ___', a: ['pm'], why: 'In the evening, we write *pm*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each short text and its main idea.', pairs: [
      ['Room 4 is closed today. Class is in Room 8.', 'The class is in a different room.'],
      ['Free coffee for students on Friday!', 'Students do not pay for coffee on Friday.'],
      ['Please switch off your phone in the library.', 'Do not use your phone in the library.'],
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the price and the time.', items: [
      { s: 'The film starts at [8] [pm] and tickets cost [£7].', why: 'The time is *8 pm*. The price is *£7*.' },
      { s: 'Lunch is [£3.50] in the café, from [12:30].', why: 'The price is *£3.50*. The time is *12:30*.' },
    ] },
  ],
};
