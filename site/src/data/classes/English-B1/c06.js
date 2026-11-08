// English B1, class 6 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u2:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c06',
  focus: 'By the end every student uses the right pattern after common verbs: *-ing* after *enjoy, finish, avoid, mind, suggest, keep*, and *to* + infinitive after *decide, plan, hope, want, agree, manage*. They also know how *stop*, *remember* and *try* change meaning with each pattern. The speaking goal: talk about work or study habits and decisions using at least six of these verbs.',
  tips: [
    'There is no rule to guess the pattern: students must learn verbs in pairs (*enjoy doing*, *decide to do*). Encourage them to write them that way in their flashcards.',
    '*stop smoking* (no more) versus *stop to smoke* (stop in order to smoke) is a favourite exam point. Act it out.',
    'Spanish and Italian speakers often say *I suggest you to call*. At B1, teach *I suggest calling* or *I suggest (that) you call*.',
    'After prepositions it is always *-ing*: *good at speaking*, *before leaving*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you enjoy doing at work or in your studies? What have you decided to change this year?* Write two answers on the board.' },
    { min: 10, title: 'Doing or to do?', md: 'Show board page 1. Students sort the verbs, then make one true sentence with two verbs from each group.' },
    { min: 10, title: 'Stop, remember, try', md: 'Show board page 2. Students choose the form, then explain the difference in meaning in pairs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading Part 6, open gaps. Students write one word in each gap alone, then compare and check.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they want to stop doing and one thing they plan to start. Set the homework.' },
  ],
  board: [
    { title: 'Doing or to do?', blocks: [
      { t: 'ex', kind: 'sort', h: 'Which pattern comes after each verb?', groups: ['+ -ing', '+ to + verb'], explain: ['groups'], items: [
        { s: 'enjoy', g: 0, why: '*enjoy working*' },
        { s: 'decide', g: 1, why: '*decide to work*' },
        { s: 'avoid', g: 0, why: '*avoid driving*' },
        { s: 'hope', g: 1, why: '*hope to see*' },
        { s: 'finish', g: 0, why: '*finish writing*' },
        { s: 'manage', g: 1, why: '*manage to finish*' },
        { s: 'mind', g: 0, why: '*Do you mind waiting?*' },
        { s: 'agree', g: 1, why: '*agree to help*' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
        { q: 'I really enjoy ___ (work) in a team.', a: ['working'], why: '*enjoy* + -ing.' },
        { q: 'She decided ___ (study) law.', a: ['to study'], why: '*decide* + to + verb.' },
        { q: 'Would you mind ___ (close) the window?', a: ['closing'], why: '*mind* + -ing.' },
      ] },
    ] },
    { title: 'Stop, remember, try', blocks: [
      { t: 'ex', kind: 'choice', h: 'Choose the sentence that matches the meaning.', items: [
        { q: 'He doesn’t smoke any more.', o: ['He stopped smoking.', 'He stopped to smoke.', 'He stopped smoke.'], why: '*stop* + -ing: the activity ends.' },
        { q: 'On the way home, she stood still for a minute to answer her phone.', o: ['She stopped to answer her phone.', 'She stopped answering her phone.', 'She stopped answer her phone.'], why: '*stop* + to: you stop in order to do something.' },
        { q: 'Don’t forget: lock the door when you leave.', o: ['Remember to lock the door.', 'Remember locking the door.', 'Remember lock the door.'], why: '*remember* + to: something you must do.' },
        { q: 'I have a picture in my head of my first day at school.', o: ['I remember going to school for the first time.', 'I remember to go to school for the first time.', 'I remember go to school.'], why: '*remember* + -ing: a memory of the past.' },
      ] },
    ] },
    { title: 'Exam corner: one word in each gap', blocks: [
      { t: 'reading', title: 'A message from Sara', md: 'Hi Jo! I’ve finally decided ___ look for a new job. I enjoy teaching, but I’m tired ___ working every weekend. I’m thinking of applying ___ a job at the language school near my flat.' },
      { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading, Part 6): write one word in each gap.', items: [
        { q: 'I’ve finally decided ___ look for a new job.', a: ['to'], why: '*decide* + to + verb.' },
        { q: 'I’m tired ___ working every weekend.', a: ['of'], why: '*tired of* + -ing.' },
        { q: 'I’m thinking of applying ___ a job.', a: ['for'], why: '*apply for* a job.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 6 you write one word, with no options. The answers are often small words: prepositions after verbs and adjectives (*tired of*, *apply for*), *to*, or a pronoun.' },
    ] },
  ],
  activities: {
    one: { title: 'Career interview', md: 'Interview the student about their work or studies with questions that need the patterns: *What do you enjoy doing? What do you avoid doing? What have you decided to do next year? What do you hope to do in five years?* Note every wrong pattern and give the correct form at the end.' },
    small: { title: 'Verb chain', md: 'Write twelve verbs in the chat. Students take turns making a sentence that continues a story about a new job, using the next verb with the right pattern (*I decided to apply… I avoided telling my boss…*). A wrong pattern means the next student must fix it.' },
    group: { title: 'Habits survey', md: 'Breakout rooms of four. Each room asks *What do you keep doing that you want to stop? What do you plan to learn this year?* and writes three sentences for the class: *Two of us keep checking our phones. Nobody plans to…*' },
  },
  homework: { book: 'u2:p2', md: 'Do lesson 2 of unit 2 (I used to…). Write eight sentences about your work or study habits using eight different verbs from today, with the right pattern.' },
};
