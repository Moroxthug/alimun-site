// English A1, class 20 (docs/LESSONS_PLAN.md). Builds on book lesson u4:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c20',
  focus: 'By the end of the class every student can order food and drink in a café politely (*Can I have a coffee, please?*), understand the waiter’s usual questions (*Anything else? Eat in or take away?*), answer them, and ask for the bill. The class should end with every student ordering a full meal in a role play.',
  tips: [
    'Politeness in English depends on **please**, **thank you** and the question form. *I want a coffee* sounds rude to many English speakers. Model **Can I have …, please?** and **I’d like …, please.**',
    'Learners often answer *Anything else?* with *No* only. Teach **No, that’s all, thanks.**',
    'The waiter’s phrases are fast and short in real life. Say them at natural speed after students know them, so they practise understanding.',
    'In some languages, people say *Give me a coffee*. Explain kindly that this is too direct in English, even with a smile.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *Do you often go to cafés? What do you usually order?* Write their orders on the board as *a coffee, a sandwich…*' },
    { min: 12, title: 'In a café', md: 'Show board page 1. Read the phrases, first slowly, then at real speed. Students match the waiter’s questions and the answers on the board.' },
    { min: 8, title: 'Polite or not?', md: 'Show board page 2. Students choose the polite way and explain why.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3.' },
    { min: 5, title: 'Close', md: 'Each student orders one thing from you, the waiter, as fast and politely as they can. Set the homework.' },
  ],
  board: [
    { title: 'In a café', blocks: [
      { t: 'table', caption: 'What the waiter says and what you say', explain: ['head', 'col2'], head: ['The waiter says', 'You say', 'What it means'], rows: [
        ['What can I get you?', 'Can I have a tea, please?', 'What do you want?'],
        ['Anything else?', 'No, that’s all, thanks.', 'Do you want more?'],
        ['Eat in or take away?', 'Eat in, please.', 'Here, or with you?'],
        ['That’s four fifty, please.', 'Here you are.', 'Pay, please.'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the waiter’s question with the answer.', pairs: [
        ['What can I get you?', 'A cappuccino, please.'],
        ['Anything else?', 'Yes, a piece of cake, please.'],
        ['Eat in or take away?', 'Take away, please.'],
        ['Small or large?', 'Large, please.'],
      ] },
    ] },
    { title: 'Polite or not?', blocks: [
      { t: 'examples', items: [
        { s: '**Can I have** a sandwich, **please**?', n: 'Polite and very common.' },
        { s: '**I’d like** a glass of water, **please**.', n: '*I’d like* = I want, but polite.' },
        { s: '**Could I have** the bill, **please**?', n: 'At the end, to pay.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Which is more polite?', items: [
        { q: 'You want a coffee.', o: ['Can I have a coffee, please?', 'Give me a coffee.', 'I want coffee.'], why: 'A question with *can* and *please* is polite.' },
        { q: 'You want to pay.', o: ['Could I have the bill, please?', 'Bill!', 'I pay now.'], why: '*Could I have the bill, please?*' },
        { q: 'The waiter brings your food.', o: ['Thank you.', 'OK.', 'Yes.'], why: 'Always say thank you.' },
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'Can I have a glass of orange juice, please?', why: '*Can I have* + thing + *please*.' },
        { a: 'I’d like a cheese sandwich, please.', why: '*I’d like* + thing + *please*.' },
      ] },
    ] },
    { title: 'Exam corner: read the menu', blocks: [
      { t: 'reading', title: 'Bella Café', md: '**Breakfast** (until 11.00): toast and jam £3, eggs on toast £5.50\n\n**Lunch** (from 12.00): soup of the day £4.50, cheese sandwich £4, pasta £7\n\n**Drinks**: tea £2, coffee £2.50, fresh orange juice £3\n\nYou can eat in or take away. Closed on Mondays.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'How much is a cheese sandwich?', o: ['£4', '£4.50', '£7'], why: '*cheese sandwich £4*.' },
        { q: 'Can you have eggs on toast at 12.30?', o: ['No, breakfast is until 11.00.', 'Yes, it’s lunch.', 'Only on Mondays.'], why: 'Breakfast is *until 11.00*.' },
        { q: 'When is the café closed?', o: ['On Mondays', 'On Sundays', 'In the evening'], why: '*Closed on Mondays.*' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the reading test, read the question first, then look for the number, the day or the time in the text.' },
    ] },
  ],
  activities: {
    one: { title: 'Two cafés', md: 'Role play twice. First you are a friendly waiter in a quiet café and speak slowly. Then you are a busy waiter in a station café: speak fast and ask more questions (*Small or large? Milk? Eat in or take away?*). The student orders for themselves and a friend and asks for the bill. Swap roles at the end: the student is the waiter.' },
    small: { title: 'Café Alimun', md: 'Post the Bella Café menu (board page 3) in the chat. One student is the waiter, the others are customers. Each customer orders a full meal and a drink and pays. Change the waiter every three minutes. The waiter writes the orders and says the total.' },
    group: { title: 'Busy café', md: 'Breakout rooms of three: one waiter, two customers, with the menu from the chat. Each round is four minutes; rotate the waiter three times. Post a twist for each round in the chat (*The café has no more soup. One customer doesn’t eat meat.*). Back in the main room, ask one room to perform their best round.' },
  },
  homework: { book: 'u4:p2', md: 'Finish book lesson 2 of unit 4 (Can I have a coffee, please?). Then write a short café dialogue (6 to 8 lines) between a waiter and a customer.' },
};
