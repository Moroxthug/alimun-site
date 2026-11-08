// English A2, class 32 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c32',
  focus: 'By the end of the class every student can use **have to** and **don’t have to** for rules and obligations (*You have to wait. You don’t have to pay.*), make an appointment at a doctor’s or dentist’s by phone, and understand simple instructions about medicine. The difference between *have to* (necessary) and *should* (a good idea) should be clear.',
  tips: [
    '*have to* works like a normal verb: questions and negatives use *do / does*. Watch for *I haven’t to* and *Have I to*.',
    'With *he, she, it* it becomes *has to*. Students who mastered *has got* may still say *She have to*.',
    'Pronunciation: *have to* sounds like *haf-ta*, *has to* like *has-ta*. Model and drill it; it helps listening too.',
    '*don’t have to* means it is not necessary, not that it is forbidden. Contrast it with *mustn’t* only if a student asks; it is not taught at A2 here.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you have to do every morning?* Collect three answers and write them with *have to / has to*.' },
    { min: 10, title: 'have to', md: 'Board page 1. Go through the table. Students complete the gaps with the right form.' },
    { min: 10, title: 'have to or should?', md: 'Board page 2. Students choose *have to* or *should* and explain the difference.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below: phone calls to the doctor’s.' },
    { min: 10, title: 'Fix it', md: 'Board page 3. Students fix the mistakes.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Listening Part 3. Read the conversation aloud twice; students answer.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they have to do this week and one thing they don’t have to do. Set the homework.' },
  ],
  board: [
    { title: 'have to', blocks: [
      { t: 'table', caption: 'have to', explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
        ['I / you / we / they', 'I have to wait.', 'I don’t have to pay.', 'Do I have to wait?'],
        ['he / she / it', 'She has to wait.', 'She doesn’t have to pay.', 'Does she have to wait?'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write have to, has to, don’t have to or doesn’t have to.', items: [
        { q: 'You ___ show your card at reception. It’s the rule.', a: ['have to'], why: 'A rule: *have to*.' },
        { q: 'My son ___ take this medicine three times a day.', a: ['has to'], why: '*he* → *has to*.' },
        { q: 'It’s free. You ___ pay.', a: ['don’t have to', 'do not have to'], why: 'Not necessary: *don’t have to*.' },
      ] },
    ] },
    { title: 'have to or should?', blocks: [
      { t: 'text', md: '**have to**: it is necessary, there is a rule or no choice. **should**: it is a good idea, my advice.' },
      { t: 'ex', kind: 'select', h: 'Choose the better word.', items: [
        { q: 'You ___ book an appointment. The doctor doesn’t see people without one.', o: ['have to', 'should'], why: 'A rule: *have to*.' },
        { q: 'You look tired. You ___ go to bed early.', o: ['should', 'have to'], why: 'Advice: *should*.' },
        { q: 'In this hospital visitors ___ leave at eight.', o: ['have to', 'should'], why: 'A rule: *have to*.' },
      ] },
    ] },
    { title: 'Fix it', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'She [have to] rest.', a: ['has to'], why: 'With *she*: *has to*.' },
        { s: 'I [haven’t to] work today.', a: ['don’t have to'], why: 'The negative uses *don’t*.' },
        { s: '[Have I to] wait?', a: ['Do I have to'], why: 'The question uses *do*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening Part 3', blocks: [
      { t: 'dialogue', title: 'For the teacher to read aloud twice', lines: [
        { who: 'Receptionist', s: 'Good morning, Green Street Surgery.' },
        { who: 'Man', s: 'Hello, I’d like to see a doctor, please. I’ve got a terrible cough.' },
        { who: 'Receptionist', s: 'There’s nothing this morning, but Dr Ahmed has an appointment at four this afternoon.' },
        { who: 'Man', s: 'Four is fine. Do I have to bring anything?' },
        { who: 'Receptionist', s: 'Just your health card. You don’t have to pay.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'What is the man’s problem?', o: ['a cough', 'a headache', 'a sore throat'], why: '*I’ve got a terrible cough.*' },
        { q: 'When is his appointment?', o: ['this afternoon', 'this morning', 'tomorrow'], why: '*at four this afternoon*.' },
        { q: 'What does he have to bring?', o: ['his health card', 'money', 'nothing'], why: '*Just your health card.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Listening Part 3 you often hear all three options. Here *this morning* is in the conversation, but there is nothing free then. Listen to the **whole** answer before you choose.' },
    ] },
  ],
  activities: {
    one: { title: 'Phone the surgery', md: 'You are the receptionist; the student phones to make an appointment for a problem from unit 6. Ask for name, problem and a time; offer two times that do not suit them, then one that does. Swap: the student is the receptionist and must explain one rule with *have to*.' },
    small: { title: 'Rules at work and at home', md: 'Each student says three things they have to do at work or home and one thing they don’t have to do. The others ask one question each (*Do you have to wear a uniform?*). Finish by comparing: who has the most rules?' },
    group: { title: 'Clinic rules', md: 'In breakout rooms of three or four, students write five rules for a new clinic in the chat (*Patients have to … Visitors don’t have to …*) and two pieces of advice with *should*. Back together, rooms read their rules and the class chooses the best clinic.' },
  },
  homework: { book: 'u6:p3', md: 'Finish book lesson 3 of unit 6 (At the doctor’s), including the speaking task. Then write five sentences about your week: three things you have to do and two things you don’t have to do.' },
};
