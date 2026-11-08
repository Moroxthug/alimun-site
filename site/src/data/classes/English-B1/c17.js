// English B1, class 17 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u4:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c17',
  focus: 'By the end of the class every student can ask for and give advice with **should**, **ought to**, **had better** and **If I were you, I’d…**, choosing the right strength, and can talk about common health problems at a doctor’s or with a friend. Accuracy point: no *to* after *should* and *had better*, but *to* after *ought*.',
  tips: [
    'Learners say *You should to rest* because of *have to* and *want to*. Show the three verbs side by side: **should rest**, **ought to rest**, **had better rest**.',
    '*Had better* is stronger than learners think. It means: do it, or there will be a problem. Practise it with clear consequences: *You’d better leave now or you’ll miss the train.*',
    'The negative of *had better* is *had better not*, never *hadn’t better*. Write it on the board before students try it.',
    'Many learners say *If I was you*. Both are heard, but *If I were you* is the fixed advice phrase and the one examiners expect. Teach it as a block.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Say: *I’ve got a terrible headache and an important meeting in an hour. What should I do?* Collect the students’ advice on the board without correcting yet.' },
    { min: 10, title: 'Giving advice', md: 'Show board page 1. Explain how strong each form is. Go back to the warm-up advice and improve it together.' },
    { min: 10, title: 'Practice', md: 'Show board page 2. Students match the problems and the advice, then fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: in the format of B1 Preliminary Writing part 1, students read a friend’s email and choose the best piece of advice for the reply. Discuss what makes the answer natural.' },
    { min: 5, title: 'Health words', md: 'Show board page 4. Students say which problem they had most recently and what they did about it.' },
    { min: 5, title: 'Close', md: 'Each student gives one piece of advice to the student on their left about learning English. Set the homework.' },
  ],
  board: [
    { title: 'Giving advice', blocks: [
      { t: 'table', caption: 'How strong is it?', explain: ['head', 'col1'], head: ['Form', 'Strength', 'Example'], rows: [
        ['should + verb', 'a good idea', 'You should drink more water.'],
        ['ought to + verb', 'a good idea, a little formal', 'You ought to take a break.'],
        ['had better + verb', 'strong: or there will be a problem', 'You’d better see a doctor today.'],
        ['If I were you, I’d…', 'friendly, personal', 'If I were you, I’d go to bed early.'],
      ] },
      { t: 'text', md: 'To ask for advice: *What should I do? Do you think I should…? What would you do?*\n\nNegatives: *You **shouldn’t** work so late. You’d **better not** drive.*' },
    ] },
    { title: 'Practice', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the problem and the advice.', pairs: [
        ['I’ve got a sore throat.', 'You should drink something hot with honey.'],
        ['I can’t stop coughing at night.', 'If I were you, I’d see a doctor.'],
        ['I twisted my ankle running.', 'You’d better not run for a week.'],
        ['I always feel tired after lunch.', 'You ought to eat a lighter meal.'],
      ] },
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: 'You should [to rest] for a few days.', a: ['rest'], why: 'No *to* after *should*.' },
        { s: 'You [ought take] a day off.', a: ['ought to take'], why: '*ought* needs *to*.' },
        { s: 'You [hadn’t better] drive after this medicine.', a: ['had better not', '’d better not'], why: 'The negative is *had better not*.' },
        { s: 'If I [was] you, I’d call the doctor.', a: ['were'], why: 'The fixed advice phrase is *If I were you*.' },
      ] },
    ] },
    { title: 'Exam corner: Writing part 1', blocks: [
      { t: 'text', md: 'In the format of the B1 Preliminary exam, Writing part 1: you reply to an email. Your friend Ana wrote: *“I’ve got a big exam next week and I can’t sleep because I’m so nervous. What do you think I should do?”*' },
      { t: 'ex', kind: 'choice', h: 'Which sentence answers Ana best?', items: [
        { q: 'You want to give advice in a friendly way.', o: ['If I were you, I’d go for a walk every evening to relax.', 'You must not to be nervous.', 'I am nervous too.'], why: 'It gives clear, friendly advice with the right form.' },
        { q: 'You want to warn her about something.', o: ['You’d better not drink coffee late in the day, or you won’t sleep.', 'You hadn’t better drink coffee.', 'Coffee is a drink.'], why: '*had better not* + a clear reason.' },
        { q: 'You want to finish the email.', o: ['Good luck, and let me know how it goes!', 'Goodbye Ana, this is the end.', 'Thank you for your email about it.'], why: 'A natural, friendly ending for an email to a friend.' },
      ] },
      { t: 'tip', md: 'In Writing part 1 you must answer **every** question in the email and write about 100 words. Advice is one of the most common things to give: use two different forms (*should*, *If I were you*) to show your range.' },
    ] },
    { title: 'Health problems', blocks: [
      { t: 'table', caption: 'Common problems', explain: ['head', 'col1'], head: ['Problem', 'What it means'], rows: [
        ['a sore throat', 'it hurts when you swallow'],
        ['a temperature', 'your body is hotter than normal'],
        ['a sprained ankle', 'you hurt it by turning it badly'],
        ['an allergy', 'your body reacts badly to something'],
        ['a cough', 'you push air out of your chest with a noise'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'The advice column', md: 'The student is the writer of an advice column. You read three short problems (*My neighbour plays loud music at night; I eat too much fast food; I’m always late for work*). For each, the student gives two pieces of advice with different forms. Then swap: the student tells you a real small problem and you give advice. Note any *should to* or *ought* without *to*.' },
    small: { title: 'Problem cards', md: 'Each student writes a health or life problem in the chat. Read them one by one: every other student must give a different piece of advice, using a form nobody has used yet for that problem. The student with the problem chooses the best advice and says why (*I think I’d better…, because…*).' },
    group: { title: 'At the clinic', md: 'Breakout rooms of three: a patient, a doctor and an observer. The patient describes symptoms from board page 4; the doctor asks two questions and gives advice with three different forms. The observer counts the forms and writes the best sentence in the chat. Swap roles twice. Back together, correct the most common mistake from the chat.' },
  },
  homework: { book: 'u4:p3', md: 'Finish book lesson 3 of unit 4 (You should see a doctor), including the speaking task. Then write a reply to Ana’s email from the exam corner (about 100 words), giving her three pieces of advice with different forms.' },
};
