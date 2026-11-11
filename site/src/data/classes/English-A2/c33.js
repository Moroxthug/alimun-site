// English A2, class 33 (docs/LESSONS_PLAN.md). Builds on book lesson u6:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c33',
  focus: 'By the end of the class every student can read a short health leaflet and find the part that answers a person’s need (the format of A2 Key Reading Part 2), and write a short message to say they are ill and cannot come. The class brings together unit 6: problems, advice with *should*, and rules with *have to*.',
  tips: [
    'In Reading Part 2, students often match on one shared word. Teach them to underline what each person **needs** and look for a text that gives exactly that.',
    'Writing: the most common gap is forgetting to say what happens next (*I’ll be back on Monday*). Point to the three points in the task.',
    'Keep the leaflet short on the board; read it aloud once so weaker readers can follow.',
    'Encourage students to use language from earlier in the unit; praise every correct *should* or *have to* you hear.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you do to stay well in winter?* Collect ideas on the board as advice: *You should …*.' },
    { min: 15, title: 'The leaflet', md: 'Board page 1. Read the leaflet aloud. Students match each person to the right part, then show the words that gave the answer.' },
    { min: 10, title: 'Language from the unit', md: 'Board page 2. Students choose the right form in the mixed exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Write a message', md: 'Board page 3. Read the task and the model; students write their own message and check the three points.' },
    { min: 5, title: 'Close', md: 'Two students read their messages aloud. Set the homework.' },
  ],
  board: [
    { title: 'Exam corner: the leaflet', blocks: [
      { t: 'reading', title: 'Stay well this winter', md: '**A. Sleep.** Adults should sleep seven or eight hours a night. Don’t look at your phone in bed.\n\n**B. Food.** Eat fruit and vegetables every day. You should drink lots of water, not only coffee.\n\n**C. Exercise.** Walk for thirty minutes a day. You don’t have to go to a gym: you can walk to work.' },
      { t: 'ex', kind: 'match', h: 'In the format of the A2 Key exam (Reading Part 2): which part should each person read?', pairs: [
        ['Ana wants to get fit but hates gyms.', 'C. Exercise'],
        ['Ben is always tired in the morning.', 'A. Sleep'],
        ['Carla drinks five coffees a day.', 'B. Food'],
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 2 you match people to short texts. Underline what each person **needs**. Two texts can talk about the same thing, but only one gives exactly what the person needs.' },
    ] },
    { title: 'Unit 6 language', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'I’ve got a temperature. – You ___ stay at home.', o: ['should', 'have', 'don’t have'], why: 'Advice: *should*.' },
        { q: 'You ___ show your card. It’s the rule here.', o: ['have to', 'should to', 'has to'], why: 'A rule with *you*: *have to*.' },
        { q: 'My ___ hurts. I can’t walk.', o: ['foot', 'feet', 'foots'], why: 'One foot: *My foot hurts*.' },
      ] },
    ] },
    { title: 'Write a message', blocks: [
      { t: 'text', md: '**Task.** You are ill and can’t go to your English class tomorrow. Write a message to your teacher. In your message: say why you can’t come; say what the doctor said; ask about the homework. Write **25 words or more**.' },
      { t: 'reading', title: 'A model answer', md: 'Dear Jo, I’m sorry, but I can’t come to class tomorrow. I’ve got a bad cough and a temperature. The doctor says I should stay in bed for two days. What is the homework? Thanks, Sam' },
      { t: 'ex', kind: 'tf', h: 'Read the model. Does it answer each point?', items: [
        { q: 'It says why Sam can’t come.', a: 't', why: '*a bad cough and a temperature*.' },
        { q: 'It says what the doctor said.', a: 't', why: '*I should stay in bed for two days*.' },
        { q: 'It asks about the homework.', a: 't', why: '*What is the homework?*' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Your winter plan', md: 'Read the leaflet together. The student makes a personal winter plan: three things they should do, one thing they have to change, and one thing they don’t have to do. You ask follow-up questions on each point.' },
    small: { title: 'Write a leaflet', md: 'In pairs, students write one short part of a new leaflet (sleep, food, exercise, stress) with two *should* sentences. Then the group writes three people with needs, and other pairs match them. Discuss which matches were hard and why.' },
    group: { title: 'Leaflet challenge', md: 'In breakout rooms of three, each room writes a three-part leaflet in the chat and three people with needs. Rooms swap and match. Back together, each room says which match was the hardest and why.' },
  },
  homework: { book: 'u6:p4', md: 'Finish book lesson 4 of unit 6 (Stay well this winter), including the speaking task. Then write the message task from board page 3 again with a different problem.' },
};
