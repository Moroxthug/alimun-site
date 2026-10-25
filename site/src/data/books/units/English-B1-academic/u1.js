// English B1 for study and exams, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Starting a course or university',
  goal: 'Enrol, choose your modules, ask for information and find your way around in your first week.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'speaking', 'writing', 'reading'], topics: ['enrolment', 'course-words', 'indirect-questions', 'formal-email'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Enrolment and course words',
      about: 'The words you need when you join a course or a university.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Before you can start a course, you **enrol**: you join the course officially, often online and then in person. After that, you will hear the same words again and again. Learn them in your first week.' },
          { t: 'table', caption: 'Words for your course', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['enrolment', 'the process of officially joining a course'],
            ['lecture', 'a talk by a teacher to a large group of students'],
            ['seminar', 'a small class where students discuss a topic with a tutor'],
            ['term', 'one of the parts of the academic year'],
            ['module', 'one part of a course about one subject, usually with its own exam or essay'],
            ['tutor', 'a teacher who helps one student or a small group'],
            ['timetable', 'a list of your classes with the days, times and rooms'],
            ['deadline', 'the last day or time to hand in a piece of work'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the enrolment desk', lines: [
            { who: 'Staff', s: 'Hello. Are you here to enrol?' },
            { who: 'Amara', s: 'Yes, I’m starting the Business Studies course this year.' },
            { who: 'Staff', s: 'Can I see your passport and your offer letter, please?' },
            { who: 'Amara', s: 'Here you are. Do you know when I’ll get my timetable?' },
            { who: 'Staff', s: 'You’ll get it by email after enrolment. Lectures start on Monday, and seminars start in the second week.' },
            { who: 'Amara', s: 'And how many modules do I take this term?' },
            { who: 'Staff', s: 'Four. Your personal tutor will help you choose your optional modules.' },
          ] },
          { t: 'tip', art: 'owl', md: 'British English writes *enrol* and *enrolment* with one *l*, but *enrolled* and *enrolling* with two. Many UK universities have three terms a year; some have two *semesters* instead.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['lecture', 'a talk to a large group of students'],
            ['seminar', 'a small group discussion with a tutor'],
            ['deadline', 'the last day to hand in work'],
            ['timetable', 'a list of your classes and rooms'],
            ['term', 'a part of the academic year'],
            ['module', 'one part of a course about one subject'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'I have to ___ before I can go to any classes.', o: ['enrol', 'enrolment', 'enrolling'], why: 'After *have to* we need the base form of the verb: *enrol*. *Enrolment* is the noun.' },
            { q: 'The ___ for the essay is 5 pm on Friday.', o: ['deadline', 'timetable', 'term'], why: 'The last time to hand in work is the *deadline*.' },
            { q: 'In a ___, about fifteen students discuss the reading with a tutor.', o: ['seminar', 'lecture', 'campus'], why: 'A small group that discusses a topic: a *seminar*.' },
            { q: 'Introduction to Psychology is a compulsory ___ for all first-year students.', o: ['module', 'term', 'deadline'], why: 'One part of a course about one subject is a *module*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences. The meaning is in brackets.', items: [
            { q: 'The ___ (a talk for 200 students) is in the main hall at 9 am.', a: ['lecture'], why: 'A talk to a large group is a *lecture*.' },
            { q: 'Please check your ___ (list of your classes) for room changes.', a: ['timetable'], why: 'Your *timetable* shows days, times and rooms.' },
            { q: 'You need to ___ (officially join the university) before term starts.', a: ['enrol', 'enroll'], why: 'The verb is *enrol*. British English uses one *l*; American English writes *enroll*.' },
            { q: 'My personal ___ (a teacher who helps you) meets me twice a term.', a: ['tutor'], why: 'A *tutor* helps one student or a small group.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Asking for information',
      about: 'Ask politely at a student office and write a short email to ask a question.',
      art: 'parrot',
      spreads: [
        [
          { t: 'dialogue', title: 'At the Student Centre', lines: [
            { who: 'Kenji', s: 'Hi. Could you tell me where I can get my student ID card?' },
            { who: 'Officer', s: 'Yes, right here. Have you enrolled online?' },
            { who: 'Kenji', s: 'Yes, I did that last week.' },
            { who: 'Officer', s: 'Good. Then I just need to take a photo. Could you stand over there?' },
            { who: 'Kenji', s: 'Sure. Do you know if I can use the card in the library too?' },
            { who: 'Officer', s: 'Yes, it’s your library card as well. You also need it to get into some buildings in the evening.' },
            { who: 'Kenji', s: 'Great. One more thing: I was wondering if there’s a bus to the sports centre.' },
            { who: 'Officer', s: 'There is. It leaves from the main gate every twenty minutes.' },
          ] },
          { t: 'text', md: 'Kenji uses **indirect questions**: *Could you tell me where I can get…?*, *Do you know if…?* They sound more polite than direct questions. After the opening phrase, use normal word order: subject + verb, and no *do*, *does* or *did*.' },
        ],
        [
          { t: 'table', caption: 'Direct and polite questions', explain: ['head'], head: ['Direct', 'More polite'], rows: [
            ['Where is the library?', 'Could you tell me where the library is?'],
            ['When does enrolment close?', 'Do you know when enrolment closes?'],
            ['Is the course full?', 'Could you let me know if the course is full?'],
            ['Can I change my module?', 'I was wondering if I could change my module.'],
          ] },
          { t: 'reading', title: 'Subject: Question about the Academic Writing module', md: 'Dear Student Services,\n\nMy name is Lucía Ortega and I am a first-year student on the BSc Biology course (student number 2417763).\n\nI am writing to ask about the Academic Writing module. Could you please let me know if it is still possible to join it this term? I would also like to know when and where the classes take place.\n\nThank you for your help.\n\nKind regards,\nLucía Ortega' },
          { t: 'tip', art: 'owl', md: 'In an email to an office, always give your full name, your course and your student number. Then the staff can find you quickly and answer sooner.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best words.', items: [
            { q: 'Could you tell me where ___?', o: ['the library is', 'is the library', 'the library it is'], why: 'In an indirect question the subject comes before the verb: *the library is*.' },
            { q: 'Do you know ___ the office is open on Saturdays?', o: ['if', 'that', 'does'], why: 'For a yes or no question, use *if*.' },
            { q: 'The best first line for an email to an office:', o: ['I am writing to ask about the deadline for module choices.', 'I want the deadline now.', 'Tell me the deadline.'], why: '*I am writing to ask about…* says politely why you are writing.' },
            { q: 'The best last line before *Kind regards*:', o: ['Thank you for your help.', 'That’s all.', 'Answer soon.'], why: 'Thank the reader before you close the email.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Could you tell me when the library closes?', why: 'After *Could you tell me when*, use subject + verb: *the library closes*.' },
            { a: 'Do you know if the course is full?', why: 'A yes or no question: *if* + subject + verb.' },
            { a: 'I am writing to ask about my timetable.', why: 'A common first line in a formal email.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the polite phrase at the start of each question.', items: [
            { s: '[I] [was] [wondering] [if] there are any rooms for group study.', why: '*I was wondering if…* is a very polite way to ask.' },
            { s: 'Hello, [could] [you] [let] [me] [know] when the exam results come out?', why: '*Could you let me know…?* asks for information politely.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the email phrases with one word.', items: [
            { q: 'I am ___ to ask about the Academic Writing module.', a: ['writing'], why: '*I am writing to ask about…* opens a formal email.' },
            { q: 'Could you please ___ me know if there are any places left?', a: ['let'], why: '*Let me know* means *tell me*.' },
            { q: 'I would also like to ___ when the classes take place.', a: ['know'], why: '*I would like to know…* is a polite way to ask a second question.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A welcome guide',
      about: 'Read a guide for new students and find the information you need.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Your first week at Northbridge University', md: 'Welcome to Northbridge! This guide tells you what to do in your first week, which we call Welcome Week. There are no lectures this week, but there is a lot to do.\n\nFirst, finish your online enrolment before you arrive. On Monday, bring your passport and your offer letter to the Student Centre to collect your student ID card. You need this card to borrow books from the library and to enter some buildings in the evening.\n\nOn Tuesday, every department holds a welcome talk. This is where you meet your personal tutor and receive your timetable. Most first-year students take four modules each term. Some modules are compulsory; others you can choose. You can change your optional modules until the Friday of the second week.\n\nOn Wednesday afternoon, the Students’ Union organises a fair, where you can join clubs and societies. Many students say this is the best way to make friends.\n\nIf you have a question, the Student Centre is open from 9 am to 5 pm, Monday to Friday. You can also email the help desk, which usually answers within two working days. Please include your student number in every email.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the guide. True, false or not given?', items: [
            { q: 'There are no lectures in Welcome Week.', a: 't', why: '*There are no lectures this week.*' },
            { q: 'Students collect their ID card on Tuesday.', a: 'f', why: 'They collect it on Monday at the Student Centre.' },
            { q: 'You need your ID card to borrow library books.', a: 't', why: '*You need this card to borrow books from the library.*' },
            { q: 'All modules are compulsory.', a: 'f', why: '*Some modules are compulsory; others you can choose.*' },
            { q: 'You can change your optional modules until the end of the first week.', a: 'f', why: 'You can change them until the Friday of the second week.' },
            { q: 'It costs money to join a society.', a: 'ng', why: 'The guide does not say if clubs and societies are free.' },
            { q: 'The help desk always answers emails on the same day.', a: 'f', why: 'It usually answers within two working days.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the guide with their meanings.', pairs: [
            ['compulsory', 'you must take it'],
            ['optional', 'you can choose to take it'],
            ['borrow', 'take something and give it back later'],
            ['societies', 'student groups for a hobby or interest'],
            ['working days', 'Monday to Friday, without holidays'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'A talk by a teacher to a large group of students is a ___.', o: ['lecture', 'seminar', 'module'], why: 'A *seminar* is a small group; a *lecture* is for many students.' },
      { q: 'Could you tell me where ___?', o: ['room B12 is', 'is room B12', 'does room B12 be'], why: 'Indirect question: subject + verb, *room B12 is*.' },
      { q: 'You must take this module. It is ___.', o: ['compulsory', 'optional', 'free'], why: '*Compulsory* means you must take it.' },
      { q: 'I am writing ___ about the reading list.', o: ['to ask', 'for ask', 'asking to'], why: '*I am writing to ask about…*' },
      { q: 'Do you know ___ the library opens on Sundays?', o: ['if', 'does', 'that'], why: 'A yes or no question needs *if*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'The ___ for this essay is next Monday at noon.', a: ['deadline'], why: 'The last time to hand in work is the *deadline*.' },
      { q: 'Could you ___ me know if there are places on the course?', a: ['let'], why: '*Let me know* means *tell me*.' },
      { q: 'Check your ___ to see which room your seminar is in.', a: ['timetable'], why: 'Your *timetable* lists days, times and rooms.' },
      { q: 'The academic year in many UK universities has three ___.', a: ['terms'], why: 'The parts of the academic year are called *terms*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Do you know when enrolment closes?', why: 'No *does* after *Do you know when*: *enrolment closes*.' },
      { a: 'I was wondering if I could change my module.', why: '*I was wondering if* + subject + *could* + verb.' },
      { a: 'Could you tell me where the Student Centre is?', why: 'Subject before verb: *the Student Centre is*.' },
    ] },
  ],
};
