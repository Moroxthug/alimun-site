// English B1, class 40 (docs/LESSONS_PLAN.md, L6). Mid-level check of book units u1 to u8. Draft for the owner's review.
export const LESSON = {
  id: 'c40',
  focus: 'The mid-level check: a calm, structured check of units 1 to 8 that shows you and each student what they can already do and what needs more work before the second half of B1. It has two parts: a written check on the board (everyone, about 22 minutes) and a short speaking check with each student. At the end every student knows their strongest and weakest units.',
  tips: [
    'Present it as a check, not an exam: *This shows us what to practise in the second half of the course.* Nervous students do worse and learn nothing from it.',
    'Speaking check criteria (each student, about 3 minutes): (a) uses the present perfect and past simple correctly about experiences, (b) reports what someone said or asked, (c) uses relative clauses to say exactly who or what, (d) talks about the future and imagined situations with the right forms, (e) gives opinions with reasons and examples. Mark each as *yes*, *nearly* or *not yet*.',
    'A student is on track with *yes* or *nearly* in at least four criteria and 70% or more in the written check (17 of 24). Below that, the student is behind: tell them privately, with two clear things to practise.',
    'For students who are behind: point them to the book lessons of their two weakest units and to Practice, which brings back their own mistakes; offer a short 1 on 1 if their plan includes it; and pair them with a stronger student in the next activities.',
    'In large classes, do the speaking check in turns while the others work: two students at a time in a breakout room with you, or half the class today and half in the next class.',
  ],
  plan: [
    { min: 3, title: 'Welcome', md: 'Explain the two parts and how long they take. Reassure students that the result is for planning, not a grade.' },
    { min: 22, title: 'Written check', md: 'Show board pages 1 to 3 one by one (about 7 minutes each). Students write their answers alone, privately in the chat to you or on paper. Do not help during this part.' },
    { min: 5, title: 'Check together', md: 'Go through the answers quickly. Students count their own score out of 24 and note which units their mistakes came from.' },
    { min: 25, title: 'Speaking check', md: 'Use the questions on board page 4. Call students one or two at a time. The others do the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Tell each student privately in the chat their strongest unit and two things to practise. Set the homework.' },
  ],
  board: [
    { title: 'Check 1: units 1 to 3', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'I ___ in this company since 2021.', o: ['have worked', 'work', 'worked'], why: 'From the past until now with *since*: present perfect (unit 1).' },
        { q: 'We ___ to Rome last summer.', o: ['went', 'have gone', 'have been'], why: 'A finished time: past simple (unit 1).' },
        { q: 'I’ve been ___ English for three years.', o: ['learning', 'learnt', 'learn'], why: 'Present perfect continuous: *been* + -ing (unit 1).' },
        { q: 'She gave up ___ last year.', o: ['smoking', 'to smoke', 'smoke'], why: '*give up* + -ing (unit 2).' },
        { q: 'When I was a child, I ___ play football every day.', o: ['used to', 'use to', 'am used to'], why: 'A past habit: *used to* + verb (unit 2).' },
        { q: 'You ___ pay for the museum; it’s free on Sundays.', o: ['don’t have to', 'mustn’t', 'can’t'], why: 'No obligation: *don’t have to* (unit 3).' },
        { q: 'Could you tell me where ___?', o: ['the station is', 'is the station', 'the station'], why: 'Indirect question: statement order (unit 3).' },
        { q: 'You ___ take photos in the gallery: it’s not allowed.', o: ['mustn’t', 'don’t have to', 'needn’t'], why: 'Not allowed: *mustn’t* (unit 3).' },
      ] },
    ] },
    { title: 'Check 2: units 4 to 6', blocks: [
      { t: 'ex', kind: 'gap', h: 'Write one word.', items: [
        { q: 'If you eat ___ much sugar, you’ll have problems with your teeth.', a: ['too'], why: '*too much* + uncountable noun (unit 4).' },
        { q: 'We’ll leave as ___ as the rain stops.', a: ['soon'], why: '*as soon as* + present for the future (unit 4).' },
        { q: 'You ___ better see a doctor about that cough.', a: ['had', '’d'], why: '*had better* + verb (unit 4).' },
        { q: 'This bridge was ___ in 1850.', a: ['built'], why: 'Passive: *was* + past participle (unit 5).' },
        { q: 'The new train is much ___ than the old one.', a: ['faster', 'quicker'], why: '*much* + comparative (unit 5).' },
        { q: 'She ___ me that she was moving to Paris.', a: ['told'], why: '*tell* + person (unit 6).' },
        { q: 'He asked me ___ I could help him.', a: ['if', 'whether'], why: 'Reported yes/no question: *if* (unit 6).' },
        { q: 'They asked us ___ wait outside.', a: ['to'], why: 'Reported request: *ask someone to* (unit 6).' },
      ] },
    ] },
    { title: 'Check 3: units 7 and 8', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'That’s the woman [who her] son is in my class.', a: ['whose'], why: 'Possession: *whose son* (unit 7).' },
        { s: 'This is the shop [which] I bought my bike.', a: ['where'], why: 'A place + a full sentence: *where* (unit 7).' },
        { s: 'They have a [wooden lovely] table.', a: ['lovely wooden'], why: 'Opinion before material (unit 7).' },
        { s: 'In my country [is usual] to eat late.', a: ['it’s usual', 'it is usual'], why: 'English needs *it* (unit 7).' },
        { s: 'I [will meet] my boss at nine tomorrow; it’s in my diary.', a: ['’m meeting', 'am meeting'], why: 'An arrangement: present continuous (unit 8).' },
        { s: 'If I [would know] the answer, I would tell you.', a: ['knew'], why: 'Second conditional: past in the *if* part (unit 8).' },
        { s: 'I’m looking forward to [meet] you.', a: ['meeting'], why: '*look forward to* + -ing (unit 8).' },
        { s: 'We plan [moving] next spring.', a: ['to move'], why: '*plan to* + verb (unit 8).' },
      ] },
    ] },
    { title: 'Speaking check', blocks: [
      { t: 'text', md: 'Questions for each student (about 3 minutes). Ask for a reason or a detail after each short answer.\n\n*What is something you have done that you are proud of? When did you do it?*\n\n*Tell me about a conversation you had this week. What did the other person say or ask?*\n\n*Describe a person who is important to you and a place where you feel happy.*\n\n*What are you doing next weekend? And if you had a whole month free, what would you do?*\n\n*Some people say working from home is better than working in an office. What do you think?*' },
      { t: 'tip', md: 'This is like B1 Preliminary Speaking parts 1 and 4: give an answer, a reason and an example. Use different tenses where the question asks for them.' },
    ] },
  ],
  activities: {
    one: { title: 'Speaking check, then a plan', md: 'In a 1 on 1 class the whole speaking check is with this student: use all the questions on board page 4 and add follow-ups. Then plan the second half of B1 together: look at the written score by unit, choose the two weakest units, and agree on book lessons and Practice rounds before the next class.' },
    small: { title: 'While I check', md: 'While you check students one at a time, the others work in pairs on a discussion in the chat: *What is the most useful thing you have learned in English so far, and what is still difficult?* Each pair writes their three best sentences; read them with the group at the end.' },
    group: { title: 'Revision stations', md: 'While you call students two at a time, the others work in breakout rooms of three on the book’s unit tests: each room takes the unit its members found hardest in the written check and goes through the mistakes together. Visit each room briefly between speaking checks.' },
  },
  homework: { book: 'u1 u2 u3 u4 u5 u6 u7 u8', md: 'Go back to the book lessons of your two weakest units (your teacher told you which) and redo their exercises. Then do two Practice rounds: they bring back your own mistakes from units 1 to 8.' },
};
