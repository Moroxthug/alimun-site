// English B1, class 39 (docs/LESSONS_PLAN.md, L6). Review of book units u7 and u8. Draft for the owner's review.
export const LESSON = {
  id: 'c39',
  focus: 'A speaking-heavy review of units 7 and 8. By the end every student can say exactly who or what they mean with relative clauses, describe a home and area with adjectives in the right order, talk politely about customs, choose the right future form, and imagine situations with the second conditional. The class fixes the mistakes you heard most in these two units before the mid-level check.',
  tips: [
    'Go through your notes from the last eight classes and choose the three mistakes you heard most; give them the most time. The mid-level check is next class, so this review matters.',
    'Typical problems in these units: the extra subject in relative clauses (*the man who he…*), *would* in the *if* part, *will* for arrangements, and *look forward to* + infinitive.',
    'Mix grammar and speaking: every exercise on the board should end with students saying a true sentence about themselves.',
    'Remind students how the mid-level check works (written check plus a short speaking check) so they are not anxious.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Describe the place where you would most like to live, and why.* One or two sentences each.' },
    { min: 10, title: 'Who, which, where, whose', md: 'Show board page 1. Students complete the sentences, then define three things in their home with relative clauses.' },
    { min: 10, title: 'The future and if', md: 'Show board page 2. Students choose the forms, then answer one *What would you do if…?* question each.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading part 6, an open cloze. Students write the missing words alone, then check together.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4 and add mistakes from your notes.' },
    { min: 5, title: 'Close', md: 'Explain the mid-level check. Set the homework.' },
  ],
  board: [
    { title: 'Unit 7: who, which, where', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write one word.', items: [
        { q: 'That’s the neighbour ___ cat sleeps in our garden.', a: ['whose'], why: 'Possession: *whose cat*.' },
        { q: 'The town ___ I was born is very small.', a: ['where'], why: 'A place + a full sentence: *where*.' },
        { q: 'I need a lamp ___ gives more light.', a: ['that', 'which'], why: 'A thing: *that* or *which*.' },
        { q: 'In my country it’s rude ___ arrive late for dinner.', a: ['to'], why: '*It’s rude to* + verb.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'They live in a lovely old wooden house.', why: 'Opinion, age, material.' },
      ] },
    ] },
    { title: 'Unit 8: the future and if', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
        { q: 'I ___ my grandparents on Sunday; it’s all arranged.', o: ['’m visiting', '’ll visit', 'visit'], why: 'An arrangement: present continuous.' },
        { q: '“This bag is heavy.” – “I ___ it for you.”', o: ['’ll carry', '’m carrying', 'carry'], why: 'An offer at the moment: *will*.' },
        { q: 'If I ___ more confident, I’d sing in public.', o: ['were', 'would be', 'am'], why: 'Second conditional: past in the *if* part.' },
        { q: 'I’m looking forward to ___ on holiday.', o: ['going', 'go', 'to go'], why: '*look forward to* + -ing.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 6', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading part 6: write **one** word in each gap.\n\nLast year I moved to a city ___ (1) I didn’t know anybody. The first person I met was my neighbour, ___ (2) invited me for coffee on my first day. I’m going ___ (3) stay here for at least two more years. If I had more free time, I ___ (4) explore the mountains near the city every weekend.' },
      { t: 'ex', kind: 'gap', h: 'Write one word for each gap.', items: [
        { q: 'Gap 1: a city ___ I didn’t know anybody', a: ['where'], why: 'A place + a full sentence: *where*.' },
        { q: 'Gap 2: my neighbour, ___ invited me', a: ['who'], why: 'A person: *who*.' },
        { q: 'Gap 3: I’m going ___ stay', a: ['to'], why: '*going to* + verb.' },
        { q: 'Gap 4: If I had more free time, I ___ explore', a: ['would', 'could'], why: 'Second conditional result: *would* (or *could*).' },
      ] },
      { t: 'tip', md: 'In Reading part 6 the missing words are small grammar words: relative words, prepositions, *to*, auxiliaries. Read the whole sentence, then ask: *Which grammar word is missing here?*' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Typical mistakes from units 7 and 8.', items: [
        { s: 'The woman [who she] lives upstairs is a teacher.', a: ['who', 'that'], why: 'No extra subject after *who*.' },
        { s: 'If I [would live] abroad, I’d learn the language.', a: ['lived'], why: 'Past in the *if* part.' },
        { s: 'In my country [is polite] to bring a gift.', a: ['it’s polite', 'it is polite'], why: 'English needs *it*.' },
        { s: 'We [will have] a meeting at ten tomorrow; it’s in the diary.', a: ['are having', '’re having'], why: 'An arrangement: present continuous.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Life abroad, life ahead', md: 'The student imagines they are moving abroad next year. They describe the city and home they would choose (relative clauses, adjectives), the customs they would need to learn, their plans and arrangements for the first weeks, and what they would do if things went wrong. Ask follow-ups and note the forms they avoid; practise those at the end.' },
    small: { title: 'Interview swap', md: 'In pairs, A interviews B with six questions from units 7 and 8 (*Who is someone that…? What would you do if…? What are you doing next weekend?*). Swap. Then each student reports two answers from their partner to the group.' },
    group: { title: 'Review stations', md: 'In breakout rooms of three, each room has two minutes per station in the chat: relative clauses (define five words), customs (three polite sentences), future (three plans), if (three imagined situations). Bring everyone back and check one answer per station with the class.' },
  },
  homework: { book: 'u7 u8', md: 'Do the unit tests of unit 7 (A new home abroad) and unit 8 (Looking ahead). Look again at any lesson where you scored under 70%, because the next class is the mid-level check of units 1 to 8.' },
};
