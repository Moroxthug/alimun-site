// English B1, class 58 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c58',
  focus: 'By the end of the class every student can return something in a shop, explain the problem clearly and ask for an exchange or a refund politely, and can plan a short complaint email in the format of B1 Preliminary Writing Part 1, covering every point in the task.',
  tips: [
    'Politeness in English shops comes from *I’d like…*, *Could I…?* and *I’m afraid…*, not from long sentences. Students who translate *I want that you give me…* sound rude without meaning to.',
    'Keep normal word order when describing the problem: *The zip is broken*, not *It is broken the zip*. Speakers of Romance languages often put the subject at the end.',
    'In the exam email, students lose marks for missing one of the points in the task far more often than for small grammar mistakes. Train them to tick off each point.',
    'Role plays work best when the shop assistant has a secret instruction (*you can only offer an exchange, not a refund*), so the customer has to negotiate.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Have you ever taken something back to a shop? What was wrong with it? Did you get your money back?*' },
    { min: 12, title: 'In the shop', md: 'Show board page 1. Go through the phrases. Students practise each one in pairs with an object from their desk.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 8, title: 'Correction', md: 'Show board page 2. Students correct the sentences together and say why.' },
    { min: 15, title: 'Exam corner', md: 'Show board page 3. Read the task together, find the three points, then build the email on the board with the class.' },
    { min: 5, title: 'Close', md: 'Each student says the one phrase they will use next time they return something. Set the homework.' },
  ],
  board: [
    { title: 'Returning something', blocks: [
      { t: 'table', caption: 'In a shop', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['I’d like to return this, please.', 'you want to take it back'],
        ['There’s a problem with it. The screen is cracked.', 'you explain the problem'],
        ['Could I exchange it for a different size?', 'you want another one'],
        ['I’d like a refund, please.', 'you want your money back'],
        ['I’m afraid that isn’t good enough.', 'you are not happy with the answer'],
        ['Could I speak to the manager, please?', 'you need someone with more power'],
      ] },
      { t: 'dialogue', title: 'At the counter', lines: [
        { who: 'Customer', s: 'Hi. I’d like to return this jacket, please. The zip broke the first time I wore it.' },
        { who: 'Assistant', s: 'I’m sorry about that. Have you got the receipt?' },
        { who: 'Customer', s: 'Yes, here it is. Could I have a refund?' },
        { who: 'Assistant', s: 'I’m afraid we can only exchange it. Would you like the same jacket in a new one?' },
        { who: 'Customer', s: 'That’s fine, as long as the zip works this time.' },
      ] },
    ] },
    { title: 'Polite and clear', blocks: [
      { t: 'ex', kind: 'fix', h: 'Make each sentence correct and polite.', items: [
        { s: 'I want [that you give me my money back].', a: ['a refund', 'my money back'], why: 'Simple and polite: *I want a refund* / *I want my money back*.' },
        { s: 'I bought these shoes and [is broken the heel].', a: ['the heel is broken'], why: 'Normal word order: subject + verb.' },
        { s: 'I am writing [for complain] about my order.', a: ['to complain'], why: 'Purpose: *to* + verb.' },
        { s: 'Could I [exchange it with] a smaller size?', a: ['exchange it for'], why: '*Exchange* something *for* something else.' },
      ] },
    ] },
    { title: 'Exam corner: Writing Part 1', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Writing Part 1: you bought headphones online last week. Read the note from your friend and write an email to the shop. **Say what you bought, explain the problem, say what you want the shop to do.** Write about 100 words.' },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for the email.', items: [
        { a: 'I am writing about the headphones I ordered last week.', why: 'Start by saying why you are writing.' },
        { a: 'Unfortunately the left side does not work.', why: 'Explain the problem clearly.' },
        { a: 'I would like you to send me a new pair.', why: 'Say what you want the shop to do.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Writing Part 1 you must answer **all three points** in the task. Before you write, number the points in the question. After you write, check each one is in your email. Missing a point loses more marks than a small grammar mistake.' },
    ] },
  ],
  activities: {
    one: { title: 'The difficult shop', md: 'You are the shop assistant; the student returns three items (a phone, a jumper, a coffee machine). For each one, give a different answer: a refund, only an exchange, then no without a receipt. The student must stay polite and get the best result. Swap roles for the last item.' },
    small: { title: 'Customer service desk', md: 'Each student writes a problem in the chat (*my new kettle leaks*). Pairs take turns as customer and assistant. The assistant has a secret rule from the teacher (exchange only, or refund only with a receipt). After each role play, the group says what the customer did well.' },
    group: { title: 'Complaints day', md: 'Breakout rooms of three: customer, assistant, observer. The observer ticks the phrases used from board page 1 and gives feedback. Rotate three times so everyone plays each role. Bring everyone back to hear the most creative problem.' },
  },
  homework: { book: 'u12:p3', md: 'Finish book lesson 3 of unit 12. Then write the email from the Exam corner (about 100 words), making sure you answer all three points.' },
};
