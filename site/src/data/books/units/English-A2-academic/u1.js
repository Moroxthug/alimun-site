// English A2 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'In the classroom',
  goal: 'Understand classroom language and talk about your course.',
  art: 'owl',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['classroom-language', 'instructions', 'timetables', 'prepositions-of-time', 'notices'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'How do you say…?',
      about: 'Understand what the teacher asks you to do, and ask questions in class.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Teachers use short **instructions** in class. An instruction starts with the verb: *Open your books.* *Work in pairs.* For a negative instruction, put *Don’t* before the verb: *Don’t write in the book.*' },
          { t: 'table', caption: 'Classroom instructions', explain: ['head', 'col1'], quiz: true, head: ['Instruction', 'What you do'], rows: [
            ['Open your books at page 20.', 'You find page 20 in your book.'],
            ['Work in pairs.', 'You work with one other student.'],
            ['Work in groups of three.', 'You work with two other students.'],
            ['Listen and repeat.', 'You hear the words and then say them.'],
            ['Write down the new words.', 'You write the words in your notebook.'],
            ['Check your answers with a partner.', 'You compare your answers with another student.'],
            ['Hand in your homework.', 'You give your homework to the teacher.'],
          ] },
        ],
        [
          { t: 'text', md: 'Good students ask questions. These questions help you when you do not know a word or do not understand the teacher.' },
          { t: 'examples', items: [
            { s: '**How do you say** this in English?', n: 'Use it when you know a word in your language, but not in English. You can point at the thing or show the word.' },
            { s: '**What does** “deadline” **mean**?', n: 'Use it when you do not know an English word.' },
            { s: '**How do you spell** your surname?', n: 'Ask for the letters of a word.' },
            { s: '**How do you pronounce** this word?', n: 'Ask how to say a word correctly.' },
            { s: '**Could you repeat** that, please?', n: 'Ask the teacher to say it again.' },
            { s: '**Could you speak more slowly**, please?', n: 'Ask the teacher to speak less fast.' },
            { s: 'Sorry, **I don’t understand**.', n: 'This is polite and normal in class.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Say *What does this word mean?*, not *What means this word?* The question needs *does*, and *mean* goes at the end.' },
        ],
        [
          { t: 'dialogue', title: 'The first lesson', lines: [
            { who: 'Ms Hughes', s: 'Good morning, everyone. Please open your books at page 34.' },
            { who: 'Yusuf', s: 'Sorry, which page?' },
            { who: 'Ms Hughes', s: 'Page 34. Today we’re learning words for jobs. Listen and repeat: architect, plumber, receptionist.' },
            { who: 'Mei', s: 'Could you repeat the last word, please?' },
            { who: 'Ms Hughes', s: 'Of course. Receptionist.' },
            { who: 'Mei', s: 'How do you spell it?' },
            { who: 'Ms Hughes', s: 'R-E-C-E-P-T-I-O-N-I-S-T.' },
            { who: 'Lucía', s: 'What does “plumber” mean?' },
            { who: 'Ms Hughes', s: 'A plumber repairs water pipes in a house. Now work in pairs and write down five more jobs.' },
          ] },
          { t: 'text', md: 'In English classes, students often ask questions like these. It is polite, and it helps you learn.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two parts of each question.', pairs: [
            ['Could you speak', 'more slowly, please?'],
            ['What does “timetable”', 'mean?'],
            ['How do you spell', 'it? With one L or two?'],
            ['Which page', 'are we on?'],
            ['Sorry, I don’t', 'understand.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You do not know the word “enrol”.', o: ['What does “enrol” mean?', 'What means “enrol”?', 'What is mean “enrol”?'], why: '*What does* + word + *mean?* The question needs *does*.' },
            { q: 'The teacher speaks very fast.', o: ['Could you speak more slowly, please?', 'Could you speak more slow, please?', 'Could you more slowly speak, please?'], why: 'We say *speak more slowly*: *slowly* tells us how you speak, and it comes after the verb.' },
            { q: 'You want the English word for something.', o: ['How do you say this in English?', 'How you say this in English?', 'How do you tell this in English?'], why: 'The question is *How do you say…?* We do not use *tell* here.' },
            { q: 'You did not hear the page number.', o: ['Sorry, which page?', 'Sorry, which pages?', 'Sorry, what page are?'], why: 'A short, polite question: *Sorry, which page?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the instructions and questions with one word.', items: [
            { q: '___ your books at page 12.', a: ['Open'], why: 'An instruction starts with the verb: *Open your books*.' },
            { q: 'How do you ___ “Wednesday”? Is it W-E-D?', a: ['spell'], why: 'We ask for the letters with *How do you spell…?*' },
            { q: 'What ___ “homework” mean?', a: ['does'], why: '*What does* + word + *mean?*' },
            { q: '___ write in the book, please. Use your notebook.', a: ['Don’t', 'Do not'], why: 'A negative instruction: *Don’t* + verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'How do you say this in English?', why: '*How do you say* + the thing + *in English?*' },
            { a: 'Could you speak more slowly, please?', why: '*Could you* + verb + *more slowly*.' },
            { a: 'What does this word mean?', why: '*What does* + word + *mean?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'My course',
      about: 'Talk about subjects, timetables and your course, and ask for course information.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'These words help you talk about your studies. In the UK, the school or college year usually has three **terms**.' },
          { t: 'table', caption: 'Words for your course', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['a course', 'a group of lessons about one subject'],
            ['a subject', 'something you study, like maths or history'],
            ['a timetable', 'a list of lessons with the days and times'],
            ['a term', 'one part of the school or college year'],
            ['a lecture', 'a talk by a teacher to a big group, often at university'],
            ['a break', 'a short time with no lessons'],
            ['enrol', 'put your name on the list for a course'],
          ] },
        ],
        [
          { t: 'text', md: 'To talk about times, use **on** with days, **at** with clock times, **in** with parts of the day and months, and **from … to** for the start and the end.' },
          { t: 'examples', items: [
            { s: 'My English class is **on** Tuesdays and Thursdays.', n: '*On* with days.' },
            { s: 'It starts **at** half past six.', n: '*At* with clock times.' },
            { s: 'I have maths **in** the morning.', n: '*In* with parts of the day: *in the morning*, *in the afternoon*, *in the evening*.' },
            { s: 'The course is **from** September **to** December.', n: '*From … to* for the start and the end.' },
            { s: '**What time does** the lesson start?', n: 'A question about a time.' },
            { s: '**How long is** the course? Ten weeks.', n: 'A question about a length of time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'We say *at night* and *at the weekend*, but *in the morning*. In American English, people say *on the weekend*.' },
        ],
        [
          { t: 'dialogue', title: 'At the college reception', lines: [
            { who: 'Tomasz', s: 'Hi. I’d like some information about the evening English course.' },
            { who: 'Receptionist', s: 'Sure. What level are you?' },
            { who: 'Tomasz', s: 'I think I’m A2.' },
            { who: 'Receptionist', s: 'OK. The A2 course is on Mondays and Wednesdays, from seven to nine.' },
            { who: 'Tomasz', s: 'How long is the course?' },
            { who: 'Receptionist', s: 'Twelve weeks. It starts on 14 January.' },
            { who: 'Tomasz', s: 'And how many students are there in a class?' },
            { who: 'Receptionist', s: 'Usually about twelve.' },
            { who: 'Tomasz', s: 'Great. How do I enrol?' },
            { who: 'Receptionist', s: 'You can fill in this form, or you can enrol online.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'The A2 course is in the evening.', a: 't', why: 'The lessons are from seven to nine, and Tomasz asks about the evening course.' },
            { q: 'The course is twelve weeks long.', a: 't', why: '“How long is the course?” “Twelve weeks.”' },
            { q: 'There are usually twenty students in a class.', a: 'f', why: 'There are usually about twelve.' },
            { q: 'Tomasz can only enrol online.', a: 'f', why: 'He can fill in a form or enrol online.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with on, at, in or to.', items: [
            { q: 'The lesson starts ___ ten o’clock.', a: ['at'], why: '*At* with clock times.' },
            { q: 'We have history ___ Fridays.', a: ['on'], why: '*On* with days.' },
            { q: 'The course is from March ___ June.', a: ['to'], why: '*From … to* for the start and the end.' },
            { q: 'I study at the library ___ the afternoon.', a: ['in'], why: '*In* with parts of the day: *in the afternoon*.' },
            { q: 'The exam is ___ 12 May.', a: ['on'], why: '*On* with dates.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'What time ___ the lecture start?', o: ['does', 'is', 'do'], why: '*The lecture* is one thing: *What time does it start?*' },
            { q: 'How ___ is the course? Eight weeks.', o: ['long', 'many', 'much'], why: '*How long* asks about a length of time.' },
            { q: '___ subject do you like best?', o: ['Which', 'Who', 'How'], why: '*Which* asks about one thing from a group.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Timetables and notices',
      about: 'Read a course timetable and a notice with changes.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A timetable gives you the day, the time, the class and the room. Read it carefully: rooms and times can be different on different days.' },
          { t: 'table', caption: 'Evening English, A2: spring term', head: ['Day', 'Time', 'Class', 'Room'], rows: [
            ['Monday', '18:30–20:00', 'Grammar and writing', 'Room 12'],
            ['Tuesday', '18:30–20:00', 'Speaking and listening', 'Room 4'],
            ['Wednesday', 'no class', '–', '–'],
            ['Thursday', '18:30–20:00', 'Reading and vocabulary', 'Room 12'],
            ['Saturday', '10:00–11:30', 'Exam practice', 'Library'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the timetable. Choose the correct answer.', items: [
            { q: 'On Tuesday the class is in ___', o: ['Room 4.', 'Room 12.', 'the library.'], why: 'The Tuesday row says Room 4.' },
            { q: 'There is no class on ___', o: ['Wednesday.', 'Thursday.', 'Saturday.'], why: 'The Wednesday row says “no class”.' },
            { q: 'Each evening class is ___ long.', o: ['an hour and a half', 'two hours', 'one hour'], why: 'From 18:30 to 20:00 is an hour and a half.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Notice: changes next week', md: 'To all students in the evening English classes\n\nNext week, Room 12 is closed because workers are painting the walls. On Monday and Thursday, your classes are in Room 7 on the first floor. Room 7 is next to the computer room. The times do not change.\n\nOn Tuesday, your teacher, Mr Adeyemi, is at a training day, so Ms Clarke is teaching the class. Please bring your speaking homework.\n\nThe Saturday exam practice is in the library as usual. Please arrive ten minutes early, because the library opens at quarter to ten and the class starts on time.\n\nIf you have any questions, please ask at reception or email the course office.\n\nThank you,\nThe Course Office' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Next week, the Monday class is in Room 7.', a: 't', why: '“On Monday and Thursday, your classes are in Room 7.”' },
            { q: 'The class times are different next week.', a: 'f', why: '“The times do not change.”' },
            { q: 'Ms Clarke usually teaches the Tuesday class.', a: 'f', why: 'Mr Adeyemi is the usual teacher. Ms Clarke is teaching only next week.' },
            { q: 'Room 7 has new computers.', a: 'ng', why: 'Room 7 is next to the computer room, but the notice does not say what is in Room 7.' },
            { q: 'On Saturday, the library opens at 9:45.', a: 't', why: '“The library opens at quarter to ten”, and that is 9:45.' },
            { q: 'Students pay extra for the Saturday class.', a: 'ng', why: 'The notice does not talk about money.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words for the day and the time.', items: [
            { s: 'Your next class is on [Thursday] at [half] [past] [six].', why: 'The day is *Thursday*. The time is *half past six*, which is 6:30.' },
            { s: 'The library opens at [quarter] [to] [ten] on [Saturday].', why: 'The time is *quarter to ten*, which is 9:45. The day is *Saturday*.' },
            { s: 'Please come to reception on [Friday] at [five] [o’clock].', why: 'The day is *Friday*. The time is *five o’clock*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'You do not understand a word. You ask: ___', o: ['What does it mean?', 'What it means?', 'What does it means?'], why: '*What does it mean?* After *does*, the verb has no *-s*.' },
      { q: 'The teacher says “Work in pairs.” You work with ___', o: ['one other student.', 'two other students.', 'the whole class.'], why: 'A pair is two people: you and one other student.' },
      { q: 'The course starts ___ September.', o: ['in', 'on', 'at'], why: '*In* with months.' },
      { q: 'What time ___ the class finish?', o: ['does', 'do', 'is'], why: '*The class* is one thing: *does*.' },
      { q: 'A list of lessons with the days and times is a ___', o: ['timetable.', 'term.', 'lecture.'], why: 'A *timetable* shows the days and times of your lessons.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'Could you ___ that, please? I didn’t hear it.', a: ['repeat', 'say'], why: '*Could you repeat that, please?* asks the teacher to say it again.' },
      { q: 'How do you ___ your name? Is it with a K or a C?', a: ['spell'], why: '*How do you spell…?* asks for the letters.' },
      { q: 'My class is ___ Mondays and Wednesdays.', a: ['on'], why: '*On* with days.' },
      { q: 'Please ___ in your homework on Friday.', a: ['hand'], why: '*Hand in your homework*: give it to the teacher.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'How long is the course?', why: '*How long* + *is* + the thing.' },
      { a: 'How do you pronounce this word?', why: '*How do you* + verb + the thing.' },
      { a: 'What time does the lesson start?', why: '*What time does* + the thing + verb.' },
    ] },
  ],
};
