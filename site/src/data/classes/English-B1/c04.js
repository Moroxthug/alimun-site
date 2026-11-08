// English B1, class 4 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u1:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c04',
  focus: 'By the end every student says how long something has been true with *for* and *since*, gives recent news with *just*, *already* and *yet*, and uses the present perfect continuous for activities that started in the past and continue now (*I’ve been learning English for three years*). The speaking goal: a catching-up conversation with a friend after a long time.',
  tips: [
    'Many languages use the present for unfinished time (*I live here since 2020*). This is the most common B1 mistake on this point: correct it every time.',
    '*for* + a period (*for six months*), *since* + a starting point (*since March*). A quick drill with time cards helps.',
    'The present perfect continuous focuses on the activity (*I’ve been painting*: my hands are dirty); the simple on the result (*I’ve painted two rooms*).',
    'Word order: *just* and *already* before the past participle, *yet* at the end of questions and negatives.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How long have you lived where you live now? How long have you been learning English?* Write the answers with *for* and *since*.' },
    { min: 10, title: 'For or since?', md: 'Show board page 1. Students complete the gaps, then turn two of them into questions for a partner.' },
    { min: 10, title: 'Just, already, yet, and been doing', md: 'Show board page 2. Students choose the right form, then say what they have already done today and what they haven’t done yet.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 1. Students read each message and choose what it says, then explain which words gave the answer.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they have been doing recently and for how long. Set the homework.' },
  ],
  board: [
    { title: 'For or since?', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write for or since.', items: [
        { q: 'I’ve worked here ___ 2019.', a: ['since'], why: '2019 is the starting point: *since*.' },
        { q: 'She’s been waiting ___ twenty minutes.', a: ['for'], why: 'Twenty minutes is a period: *for*.' },
        { q: 'We haven’t seen them ___ the summer.', a: ['since'], why: 'The summer is a starting point: *since*.' },
        { q: 'They’ve been married ___ a long time.', a: ['for'], why: 'A long time is a period: *for*.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I [live] in Berlin since 2020.', a: ['’ve lived', 'have lived', '’ve been living', 'have been living'], why: 'From the past until now: present perfect.' },
        { s: 'He has been here [since] two hours.', a: ['for'], why: 'A period of time needs *for*.' },
      ] },
    ] },
    { title: 'Just, already, yet, and been doing', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right word or form.', items: [
        { q: 'Have you finished your report ___?', o: ['yet', 'already', 'just'], why: '*yet* at the end of a question.' },
        { q: 'I’ve ___ had lunch, thanks. I’m not hungry.', o: ['already', 'yet', 'since'], why: 'Before now, sooner than expected: *already*.' },
        { q: 'You look tired. ___ you been running?', o: ['Have', 'Did', 'Are'], why: 'An activity with a result you can see now: present perfect continuous.' },
        { q: 'I’ve ___ read three chapters of the book.', o: ['already', 'been', 'yet'], why: 'A result (three chapters): present perfect simple with *already*.' },
      ] },
      { t: 'tip', art: 'owl', md: '*I’ve been painting* tells you about the activity (and maybe the paint on my hands). *I’ve painted two rooms* tells you the result.' },
    ] },
    { title: 'Exam corner: what does it say?', blocks: [
      { t: 'reading', title: 'A message on the office board', md: 'Maria: The printer on floor 2 has been broken since Monday. The technician has already been called, but he hasn’t come yet. Please use the printer on floor 3 until further notice.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 1): what does the message say?', items: [
        { q: '', o: ['The printer on floor 2 is still not working.', 'The technician repaired the printer on Monday.', 'The printer on floor 3 is broken too.'], why: '*has been broken since Monday* and *hasn’t come yet*: it is still broken.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 1, the wrong options often use words from the text in a different way. Check the time words: *since*, *already* and *yet* often decide the answer.' },
    ] },
  ],
  activities: {
    one: { title: 'Catching up', md: 'Play two old friends who meet after five years. The student asks *How long have you…? Have you… yet? What have you been doing?* and you answer, then swap. Correct *for* and *since* and the missing present perfect.' },
    small: { title: 'How long?', md: 'Each student writes three facts in the chat with a gap for the time (*I’ve played the guitar for…*). The others guess the time with *for* or *since*; the closest guess wins a point.' },
    group: { title: 'To-do lists', md: 'Breakout rooms of three. Each room gets a moving-house to-do list in the chat (*pack books, call the bank, clean the kitchen…*). Students decide what they have already done, what they haven’t done yet and what they have been doing all day, then report in three sentences.' },
  },
  homework: { book: 'u1:p4', md: 'Do lesson 4 of unit 1 (A life in three cities). Write five sentences about your life with *for*, *since*, *already*, *yet* and the present perfect continuous.' },
};
