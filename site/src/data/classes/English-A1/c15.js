// English A1, class 15 (docs/LESSONS_PLAN.md). Builds on book lesson u3:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c15',
  focus: 'By the end of the class every student can ask and say the time in both ways (*half past seven* and *seven thirty*), use **at, on, in** with times, days and parts of the day, and describe their daily routine in order with times. Listening matters today: students must understand times said aloud quickly.',
  tips: [
    '*Quarter past* and *quarter to* confuse many learners, especially *to*: *quarter to eight* is 7.45. Draw a clock and show past on the right side, to on the left.',
    'Students who use the 24-hour clock in their language may say *at seventeen*. In speech, English uses 1 to 12, with *in the morning / in the afternoon* or *am / pm*.',
    'The prepositions are a frequent mistake: *in Monday, at the morning*. Keep the three-line table (at + time, on + day, in + part of the day) on the board for the whole class.',
    'Accept *seven thirty* (digital) as fully correct. Both ways are used by native speakers; students need to understand both.',
    'Routine verbs with *have* (*have breakfast, have a shower*) often come out as *take breakfast* or *do a shower*. Correct these as fixed phrases.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What time is it now?* Write the answer two ways. Ask two students what time they get up.' },
    { min: 12, title: 'Telling the time', md: 'Show board page 1. Draw a clock. Say times aloud quickly; students write them as numbers. Then they say times you write.' },
    { min: 8, title: 'At, on, in', md: 'Show board page 2. Students do the exercise on the board together and explain each choice.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'My day', md: 'Show board page 3. Students put the routine in order, then tell the class their own day with three times.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Read each text aloud once, like the listening test.' },
    { min: 5, title: 'Close', md: 'Each student says what time they go to bed. Set the homework.' },
  ],
  board: [
    { title: 'What time is it?', blocks: [
      { t: 'table', caption: 'Two ways to say the time', explain: ['head'], head: ['Time', 'Classic', 'Digital'], rows: [
        ['8.00', 'eight o’clock', 'eight o’clock'],
        ['8.15', 'quarter past eight', 'eight fifteen'],
        ['8.30', 'half past eight', 'eight thirty'],
        ['8.45', 'quarter to nine', 'eight forty-five'],
        ['8.50', 'ten to nine', 'eight fifty'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the times.', pairs: [
        ['6.30', 'half past six'],
        ['9.15', 'quarter past nine'],
        ['4.45', 'quarter to five'],
        ['11.10', 'ten past eleven'],
        ['2.55', 'five to three'],
      ] },
    ] },
    { title: 'At, on, in', blocks: [
      { t: 'table', caption: 'at, on, in', explain: ['head', 'col2'], head: ['Word', 'Example', 'Use it with'], rows: [
        ['at', 'at 7 o’clock, at night, at the weekend', 'a time, night, the weekend'],
        ['on', 'on Monday, on Sundays', 'days'],
        ['in', 'in the morning, in the evening', 'parts of the day'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write at, on or in.', items: [
        { q: 'I start work ___ nine o’clock.', a: ['at'], why: 'A time: *at*.' },
        { q: 'We have English ___ Tuesdays.', a: ['on'], why: 'A day: *on*.' },
        { q: 'She goes running ___ the morning.', a: ['in'], why: 'A part of the day: *in*.' },
        { q: 'I don’t work ___ the weekend.', a: ['at'], why: '*at the weekend*.' },
        { q: 'He reads ___ night.', a: ['at'], why: '*at night*.' },
      ] },
    ] },
    { title: 'My day', blocks: [
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I get up at seven o’clock.', why: 'Subject, verb, *at* + time.' },
        { a: 'She has breakfast at half past seven.', why: '*have breakfast*, then the time.' },
        { a: 'We go to bed at eleven.', why: '*go to bed* + *at* + time.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [take] breakfast at eight.', a: ['have'], why: 'In English you *have* breakfast.' },
        { s: 'He works [in] Monday.', a: ['on'], why: 'A day: *on*.' },
        { s: 'The class starts at [seventeen].', a: ['five', 'five o’clock', '5'], why: 'In speech, use 1 to 12: *five o’clock*.' },
      ] },
    ] },
    { title: 'Exam corner: what time?', blocks: [
      { t: 'text', md: 'Read each message. Choose the right time.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: '“The film starts at quarter to eight.” The film starts at:', o: ['7.45', '8.15', '8.45'], why: '*Quarter to eight* is fifteen minutes before eight.' },
        { q: '“Meet me at half past two, not three!” Meet at:', o: ['2.30', '3.00', '3.30'], why: '*Half past two* is 2.30.' },
        { q: '“The shop opens at nine and closes at five thirty.” It closes at:', o: ['5.30', '9.00', '5.00'], why: '*Five thirty* is 5.30.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the listening test, people often say two times. Listen to the end: the second time is often the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'A day in my week', md: 'The student describes their typical Monday with at least six times (*I get up at quarter past seven…*). You draw a simple timeline as they speak and ask follow-up questions (*What time do you have lunch?*). Then the student asks you about your Saturday and draws your timeline.' },
    small: { title: 'Find a time to meet', md: 'Each student writes a simple diary for Saturday in the chat privately to you (work, gym, lunch with family…). In pairs, they try to find a time to meet for coffee: *Are you free at ten? No, I go to the gym at ten. What about half past eleven?* The first pair to agree on a time tells the group.' },
    group: { title: 'Routine bingo', md: 'Put 12 routine phrases in the chat (*get up, have a shower, go to work…*). Each student chooses 6. Call out times and routines from your own day (*At half past seven I have breakfast.*); students cross out phrases they hear. Then breakout rooms of three: each student tells the others their day; the others listen for the times and write one down to report.' },
  },
  homework: { book: 'u3:p3', md: 'Finish book lesson 3 of unit 3 (What time is it?). Then write your weekday routine with six times, using at, on and in correctly.' },
};
