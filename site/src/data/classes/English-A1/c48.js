// English A1, class 48 (docs/LESSONS_PLAN.md). End-of-level check, all units. Draft for the owner's review.
export const LESSON = {
  id: 'c48',
  focus: 'The end-of-level check for A1. In one class the teacher checks every unit: a written check on the board (vocabulary, grammar, reading, a short message) and a short speaking check with each student, against clear criteria. At the end, the teacher tells each student whether they are ready for A2, and what to practise before they start. Results go into the teacher’s notes for each student.',
  tips: [
    'Criteria for "ready for A2": about 70% or more in the written check, and in speaking the student can introduce themselves, talk about their day, family and home, ask and answer simple questions, and handle a shop, café or station situation with help phrases. Small mistakes are fine if the meaning is clear.',
    'A student who is not ready is not "failed": they repeat the book units they found hardest and the teacher checks again after two weeks. Say this before the check so nobody is anxious.',
    'Keep the speaking check to about three minutes per student. In a big class, do part of it in breakout rooms with the other students doing the written part, or continue speaking checks in the next class.',
    'Write down for each student: the written score, the speaking result, their two strongest and two weakest areas. You report this to each student privately (a message), never in front of the class.',
  ],
  plan: [
    { min: 5, title: 'Introduction', md: 'Explain how the check works, what "ready for A2" means and what happens if a student needs more time.' },
    { min: 20, title: 'Written check', md: 'Show board pages 1 to 3. Students answer alone (chat or paper). Reveal the answers only after page 3, and students count their own score.' },
    { min: 25, title: 'Speaking check', md: 'Show board page 4. Each student has a short conversation with you using the prompts. While you talk to one student, the others write the message on board page 3, or use breakout rooms.' },
    { min: 10, title: 'Results and next steps', md: 'Show board page 5. Thank the class, explain how they get their result (a private message today) and what to do before A2. Set the homework.' },
  ],
  board: [
    { title: 'Check: words and grammar', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'She ___ from Brazil.', o: ['is', 'are', 'am'], why: 'Unit 1: *she is*.' },
        { q: 'My brother has ___ two children.', o: ['got', 'get', 'gets'], why: 'Unit 2: *has got*.' },
        { q: 'He ___ in a bank.', o: ['works', 'work', 'working'], why: 'Unit 3: *he* + verb + *-s*.' },
        { q: 'Can I ___ a tea, please?', o: ['have', 'has', 'having'], why: 'Unit 4: *Can I have…?*' },
        { q: 'There ___ two bedrooms in my flat.', o: ['are', 'is', 'has'], why: 'Unit 5: more than one: *there are*.' },
        { q: 'I ___ swim, but I can’t ski.', o: ['can', 'cans', 'to can'], why: 'Unit 6: *can* never changes.' },
        { q: 'Look! It ___.', o: ['’s raining', 'rains', 'rain'], why: 'Unit 7: happening now.' },
        { q: 'I go to work ___ train.', o: ['by', 'on', 'with the'], why: 'Unit 8: *by* + transport.' },
      ] },
    ] },
    { title: 'Check: reading', blocks: [
      { t: 'reading', title: 'An email from Olga', md: 'Hi Ahmed! I’m in Dublin for my English course. I’m staying with a family near the city centre. They have got two children and a big dog. Every morning I take the bus to school: it takes fifteen minutes. The weather is cold and it rains a lot, so I’m wearing my warm coat every day! At the weekend I can visit the museums. See you soon, Olga' },
      { t: 'ex', kind: 'tf', h: 'Are the sentences true, false or not given?', ng: true, items: [
        { q: 'Olga is staying in a hotel.', a: 'f', why: 'She is staying with a family.' },
        { q: 'The family has got a dog.', a: 't', why: '*two children and a big dog*.' },
        { q: 'Olga walks to school.', a: 'f', why: 'She takes the bus.' },
        { q: 'Olga likes the museums very much.', a: 'ng', why: 'She can visit them, but she does not say if she likes them.' },
      ] },
    ] },
    { title: 'Check: write a message', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [have] 25 years old.', a: ['am', '’m'], why: 'Unit 1: ages use *be*.' },
        { s: 'She [don’t] like coffee.', a: ['doesn’t', 'does not'], why: 'Unit 3 and 4: *she doesn’t*.' },
        { s: 'Is [it] a supermarket near here?', a: ['there'], why: 'Unit 5: *Is there…?*' },
        { s: 'I like [play] tennis.', a: ['playing'], why: 'Unit 6: *like* + *-ing*.' },
      ] },
      { t: 'text', md: 'Then write a message to your teacher (30 words or more): who you are, what you do every day, and what you are doing this weekend.' },
    ] },
    { title: 'Speaking check', blocks: [
      { t: 'text', md: 'The teacher talks with each student for about three minutes:\n\n**About you**: *Tell me about yourself: your name, where you are from, your job or studies.*\n\n**Your day and home**: *What do you do on a normal day? Tell me about your home and your family.*\n\n**A situation**: *We are in a café (or at a station). Order something (or buy a ticket) and ask one question.*\n\n**A picture**: *Look at this picture. What can you see? What are the people doing and wearing?*' },
      { t: 'tip', art: 'owl', md: 'The teacher listens for clear meaning, full sentences, the main forms of the level (*be*, present simple, *can*, *there is*, present continuous) and help phrases when something is difficult. A few small mistakes are normal.' },
    ] },
    { title: 'What comes next', blocks: [
      { t: 'text', md: 'Today you get a private message from your teacher with your result, your strong points and two things to practise. **Ready for A2**: you start A2 with your class. **Need more time**: you repeat the book units you found hardest for two weeks, then you have a short check again. Either way, keep your 30 minutes a day with the book and Practice.' },
    ] },
  ],
  activities: {
    one: { title: 'Full check, then feedback', md: 'Do the written check and a longer speaking check (five minutes) with the student. Then mark the written part together and give feedback straight away: the result, two strong points, two things to practise, and the book lessons for them.' },
    small: { title: 'Written in the room, speaking in turns', md: 'All students start the written check. Take students one at a time for the speaking check (a breakout room with you, about three minutes each). When all are done, reveal the written answers to the whole group. Send each student their result privately after class.' },
    group: { title: 'Check in two rooms', md: 'The main room does the written check with the answers revealed at the end. You run speaking checks in a breakout room, one student at a time (about three minutes each). If time runs out, finish the speaking checks at the start of the first A2 class. Send each student their result privately.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8', md: 'Read your teacher’s message. Practise the two areas it names, using the book lessons it points to and Practice in the dashboard (your mistakes come back there). Then try each unit test you scored lowest on again before A2 starts.' },
};
