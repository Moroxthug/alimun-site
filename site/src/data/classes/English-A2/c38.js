// English A2, class 38 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c38',
  focus: 'By the end of the class every student can book a room, check in and out, ask politely for something they need (*Could I have…?*, *Could you…?*) and explain a simple problem with their room. The goal is polite, clear requests in a real hotel situation, spoken with confidence.',
  tips: [
    'Many learners ask too directly: *Give me a towel.* Teach **Could I have…?** and **Could you…, please?** as fixed phrases, and point out that tone matters as much as words.',
    'Students confuse *book* (reserve) and *book* (a thing to read). Make the meaning clear with *book a room*, *a booking*.',
    'Dates and numbers are hard to hear: practise *the fourteenth of June*, *room 312 (three one two)*.',
    'For problems, give a simple pattern: *The … doesn’t work* / *There’s no …* / *The room is too …*. Avoid long grammar explanations.',
    'Role plays work best when students have a real reason to speak: give the "guest" a problem card the "receptionist" does not see.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *When did you last stay in a hotel? Was there a problem?* Collect useful words on the board (*check in, key card, towel, Wi-Fi*).' },
    { min: 10, title: 'Booking and checking in', md: 'Show board page 1. Read the dialogue in two parts with a student, then the class solves the exercise.' },
    { min: 10, title: 'Polite requests', md: 'Show board page 2. Model *Could I have…?* and *Could you…?* with friendly intonation. Students transform the direct sentences on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Problems with the room', md: 'Show board page 3. Students match the problems with the solutions, then say one problem each.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Students choose the right sign or notice meaning.' },
    { min: 5, title: 'Close', md: 'Each student makes one polite request to the teacher as the receptionist. Set the homework.' },
  ],
  board: [
    { title: 'At reception', blocks: [
      { t: 'dialogue', title: 'Checking in', lines: [
        { who: 'Receptionist', s: 'Good evening. Can I help you?' },
        { who: 'Guest', s: 'Yes, I have a booking. My name is Karim Haddad.' },
        { who: 'Receptionist', s: 'Thank you. A single room for three nights. Could you sign here, please?' },
        { who: 'Guest', s: 'Of course. What time is breakfast?' },
        { who: 'Receptionist', s: 'From seven to ten. Here is your key card. You’re in room 312.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Read the dialogue. Choose the right answer.', items: [
        { q: 'How long is Karim staying?', o: ['three nights', 'one night', 'a week'], why: '*A single room for three nights.*' },
        { q: 'When can he have breakfast?', o: ['from seven to ten', 'at seven', 'after ten'], why: '*From seven to ten.*' },
      ] },
    ] },
    { title: 'Asking politely', blocks: [
      { t: 'text', md: 'To ask for something, say **Could I have…, please?** To ask someone to do something, say **Could you…, please?** These are more polite than *Can I…?* and much more polite than an order.' },
      { t: 'ex', kind: 'transform', h: 'Make the request polite.', items: [
        { q: 'Give me another pillow.', cue: 'Could I', a: ['Could I have another pillow, please?', 'Could I have another pillow?'], why: 'Ask for a thing: *Could I have…?*' },
        { q: 'Call a taxi for me.', cue: 'Could you', a: ['Could you call a taxi for me, please?', 'Could you call me a taxi, please?', 'Could you call a taxi for me?'], why: 'Ask someone to do something: *Could you…?*' },
        { q: 'Tell me the Wi-Fi password.', cue: 'Could you', a: ['Could you tell me the Wi-Fi password, please?', 'Could you tell me the Wi-Fi password?'], why: '*Could you* + verb.' },
      ] },
    ] },
    { title: 'A problem with the room', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the problem and what the hotel can do.', pairs: [
        ['The shower doesn’t work.', 'We’ll send someone to fix it.'],
        ['There are no towels.', 'I’ll bring some up now.'],
        ['The room is too noisy.', 'We can give you a quieter room.'],
        ['The key card doesn’t open the door.', 'Let me make you a new one.'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
        { q: 'Excuse me, the air conditioning doesn’t ___.', a: ['work'], why: 'For a machine: *doesn’t work*.' },
        { q: 'There’s ___ hot water in my bathroom.', a: ['no'], why: '*There’s no* + a thing that is missing.' },
        { q: 'What time do I have to check ___?', a: ['out'], why: 'You *check in* when you arrive and *check out* when you leave.' },
      ] },
    ] },
    { title: 'Exam corner: notices', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
        { q: 'NOTICE: Please leave your key card at reception when you check out.', o: ['Give the card back before you go.', 'You can keep the card.', 'You need a new card to check out.'], why: '*Leave it at reception* = give it back.' },
        { q: 'Breakfast room closed for cleaning 10.30 to 11.00', o: ['You can’t eat there for half an hour.', 'Breakfast finishes at 11.00.', 'You must clean the room.'], why: 'It is closed between 10.30 and 11.00.' },
        { q: 'Late check-out (until 2 pm) available: ask at reception.', o: ['You may be able to leave your room later.', 'You must leave before 2 pm.', 'Reception closes at 2 pm.'], why: '*Available: ask* = you can request it.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading part 1 of A2 Key, read the notice first and think: *who wrote it, and what do they want me to do?* Then read the three answers. Two of them use words from the notice but change the meaning.' },
    ] },
  ],
  activities: {
    one: { title: 'The difficult guest', md: 'You are the receptionist. The student checks in, then comes back twice with a problem (no towels, a noisy room). The second time, you are a little difficult; the student must stay polite and ask again with *Could you…?*. Swap roles at the end.' },
    small: { title: 'Hotel role play', md: 'Give each student a role card in the chat: two receptionists and the rest guests, each with a hidden problem (broken shower, wrong room type, no Wi-Fi). Guests check in, then report their problem. Receptionists offer a solution. Rotate so everyone is a receptionist once.' },
    group: { title: 'Three-star or five-star?', md: 'In breakout rooms of four: one receptionist, three guests. Each guest makes two polite requests and reports one problem. The receptionist notes them. Back in the main room, each receptionist reports: *Room 205 had no towels, so I brought some.* Collect the best polite phrases on the board.' },
  },
  homework: { book: 'u7:p3', md: 'Finish book lesson 3 of unit 7. Then write an email of 35 to 45 words to a hotel: say when you are arriving, ask one question and make one polite request.' },
};
