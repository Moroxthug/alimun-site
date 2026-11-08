// English A2, class 41 (docs/LESSONS_PLAN.md). Conversation class on units 5 to 7. Draft for the owner's review.
export const LESSON = {
  id: 'c41',
  focus: 'By the end of the class every student has spent most of the hour speaking about plans, health and travel, using the language of units 5 to 7: *going to* and the present continuous for plans, invitations (*Would you like to…?*), giving advice with *should*, and telling a trip story in the past. Fluency comes first today; accuracy has its own slot at the end.',
  tips: [
    'Do not interrupt to correct during the speaking activities. Write the mistakes down and use the correction slot at the end.',
    'Give students thinking time and useful phrases on the board before each activity; at A2 this makes the speaking much longer.',
    'Watch for students who stay silent. Give them a role with a clear task (the one who asks the questions, the one who reports).',
    'Common mistakes to listen for: *I go to visit* for a plan (*I’m going to visit*), *you should to rest*, and present tense for past trips.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student one quick question: *What are you doing this weekend? How do you feel today? Where did you go on your last holiday?*' },
    { min: 10, title: 'Useful phrases', md: 'Show board page 1. Go through the phrases for inviting, accepting, saying no politely and giving advice. Students practise each one aloud once.' },
    { min: 25, title: 'Activity', md: 'Use the activity for your class size below. This is the main part of the class.' },
    { min: 10, title: 'Correction slot', md: 'Show board page 2, then write five mistakes you heard. Students correct them together.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 3: speaking part 2 style questions. Two students answer each, then swap.' },
    { min: 5, title: 'Close', md: 'Each student says one plan for next week and one piece of advice for the class. Set the homework.' },
  ],
  board: [
    { title: 'Useful phrases', blocks: [
      { t: 'table', caption: 'Plans, invitations and advice', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['What are you doing on Saturday?', 'ask about plans'],
        ['Would you like to come?', 'invite someone'],
        ['I’d love to! / Sorry, I can’t. I’m working.', 'say yes / say no politely'],
        ['You should see a doctor.', 'give advice'],
        ['Why don’t you take the train?', 'make a suggestion'],
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'Next weekend I [visit] my grandmother. It’s all planned.', a: ['am visiting', 'am going to visit', '’m visiting'], why: 'A fixed plan: present continuous or *going to*.' },
        { s: 'You should [to drink] more water.', a: ['drink'], why: 'After *should* comes the verb without *to*: *You should drink*.' },
        { s: 'Would you like [come] to my party?', a: ['to come'], why: '*Would you like* + *to* + verb.' },
      ] },
    ] },
    { title: 'Exam corner: talk together', blocks: [
      { t: 'text', md: 'In the format of A2 Key Speaking part 2, talk with your partner. **Say which holiday you prefer and why:** a beach holiday, a city break, a camping trip, a holiday in the mountains, or staying at home. Ask your partner: *What about you? Why?*' },
      { t: 'tip', art: 'owl', md: 'In Speaking part 2 the examiners listen to how you **talk together**, not only what you say. Ask your partner questions, agree or disagree (*I think so too*, *Really? I don’t*), and give a reason with *because*.' },
    ] },
  ],
  activities: {
    one: { title: 'A weekend together', md: 'Plan a weekend trip together. The student invites you, you suggest changes, you get "ill" on Saturday and the student gives advice, then you both tell the story of the trip as if it is Monday. Take notes for the correction slot.' },
    small: { title: 'The busy week', md: 'Each student fills a diary for next week in the chat with three plans. Students try to find a time to meet everyone, inviting and politely saying no (*Sorry, I’m going to the dentist on Tuesday*). When they find a time, they plan where to go and how to travel there.' },
    group: { title: 'Speed talk', md: 'Breakout rooms of two, three minutes each, then new partners. Round 1: plans for the weekend. Round 2: a time you were ill or tired and what you did. Round 3: your best trip. After each round, the teacher brings everyone back for one good sentence from each pair.' },
  },
  homework: { book: 'u5 u6 u7', md: 'Write a message of 40 to 50 words inviting a friend to come on a trip with you: say where, how you will travel and what you are going to do. Then do the speaking task again in one lesson of unit 5, 6 or 7 of your choice.' },
};
