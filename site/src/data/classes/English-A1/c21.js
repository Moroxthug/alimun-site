// English A1, class 21 (docs/LESSONS_PLAN.md). Builds on book lesson u4:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c21',
  focus: 'By the end of the class every student can count to 100, ask **How much is it? / How much are they?**, understand prices when they hear them and say prices in pounds and euros (*two pounds fifty, three euros twenty*). Listening to numbers is the main skill today: students must catch prices said at normal speed.',
  tips: [
    '*Thirteen* and *thirty*, *fifteen* and *fifty* are the classic problem. Stress the difference: thir**TEEN** and **THIR**ty. Do a quick listening game before anything else.',
    'Spelling mistakes to watch: *forty* (no *u*), *ninety* (keep the *e*), *a hundred*.',
    '*How much is the apples?* is very common. Show *is* with one thing, *are* with more: **How much are the apples?**',
    'Students from countries with a decimal comma (*2,50*) may write prices that way. In English, it is a point: *£2.50*, said *two pounds fifty* (not *two point fifty*).',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Count around the class in tens (*ten, twenty, thirty…*), then in fives backwards from 100. Correct *forty* and *fifty* pronunciation.' },
    { min: 10, title: 'Numbers to 100', md: 'Show board page 1. Say numbers; students write them. Focus on *-teen* and *-ty*.' },
    { min: 10, title: 'How much?', md: 'Show board page 2. Model the questions and price phrases. Students do the exercise on the board.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Fix the mistakes', md: 'Show board page 3. Students correct the sentences together.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4. Read the short dialogues aloud at normal speed, twice.' },
    { min: 5, title: 'Close', md: 'Each student says the price of something they bought this week. Set the homework.' },
  ],
  board: [
    { title: 'Numbers to 100', blocks: [
      { t: 'table', caption: 'Tens', explain: ['head'], head: ['Number', 'Word', 'Number', 'Word'], rows: [
        ['13', 'thirteen', '30', 'thirty'],
        ['14', 'fourteen', '40', 'forty'],
        ['15', 'fifteen', '50', 'fifty'],
        ['18', 'eighteen', '80', 'eighty'],
        ['21', 'twenty-one', '100', 'a hundred'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the numbers and the words.', pairs: [
        ['16', 'sixteen'],
        ['60', 'sixty'],
        ['47', 'forty-seven'],
        ['99', 'ninety-nine'],
        ['72', 'seventy-two'],
      ] },
    ] },
    { title: 'How much is it?', blocks: [
      { t: 'examples', items: [
        { s: '**How much is** this bag? – **It’s** twenty-five pounds.', n: 'One thing: *is*.' },
        { s: '**How much are** the oranges? – **They’re** two euros a kilo.', n: 'More than one: *are*.' },
        { s: 'That’s **three pounds fifty**, please.', n: '£3.50: say the pounds, then the pence.' },
        { s: 'The coffee is **ninety p**.', n: '90p: *pence* is often *p* in speech.' },
      ] },
      { t: 'ex', kind: 'gap', h: 'Write the price in words.', items: [
        { q: '£4.50 = four pounds ___', a: ['fifty'], why: 'The pence after the pounds: *fifty*.' },
        { q: '€12 = twelve ___', a: ['euros'], why: 'More than one euro: *euros*.' },
        { q: '£1 = one ___', a: ['pound'], why: 'Only one: *pound*.' },
        { q: '£30 = ___ pounds', a: ['thirty'], why: '30 is *thirty*.' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'How much [is] the apples?', a: ['are'], why: 'More than one thing: *are*.' },
        { s: 'It’s [fourty] pounds.', a: ['forty'], why: '*forty*: no *u*.' },
        { s: 'That’s two [pound], please.', a: ['pounds'], why: 'More than one pound: *pounds*.' },
        { s: 'How [many] is this shirt?', a: ['much'], why: 'For a price: *how much*.' },
      ] },
    ] },
    { title: 'Exam corner: listen for the price', blocks: [
      { t: 'text', md: 'Your teacher reads each short dialogue twice. Choose the price you hear.' },
      { t: 'dialogue', title: 'At the market', lines: [
        { who: 'Customer', s: 'How much are the strawberries?' },
        { who: 'Seller', s: 'They’re three fifty a box, or two boxes for six pounds.' },
        { who: 'Customer', s: 'Two boxes, please.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the right answer.', items: [
        { q: 'How much does the customer pay?', o: ['£6', '£3.50', '£7'], why: 'She buys two boxes: *two boxes for six pounds*.' },
        { q: '“The museum is fifteen euros, but students pay half.” A student pays:', o: ['€7.50', '€15', '€50'], why: 'Half of fifteen is seven fifty.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In the listening test, you often hear more than one price. Listen for **what the person buys** at the end.' },
    ] },
  ],
  activities: {
    one: { title: 'The market', md: 'You are a market seller. Put a list of 8 items with prices in the chat but hide some prices. The student has £20 to buy food for a dinner for two. They ask *How much is/are …?*, listen to your prices (say some quickly), and decide what to buy. At the end they say what they bought and how much they spent.' },
    small: { title: 'Price is right', md: 'Show photos (or name) everyday things: a coffee in your city, a cinema ticket, a pair of jeans. Students guess the price in English. The closest guess wins a point. Then students ask each other *How much is a … in your country?* and compare.' },
    group: { title: 'Shop and buy', md: 'Breakout rooms of three: one shop assistant, two customers. Post a shop list with prices in the chat (a clothes shop, a bakery, a fruit shop, one per round). Customers buy at least two things each and check the total. Rotate roles every four minutes. Back in the main room, ask each room for the most expensive thing they bought.' },
  },
  homework: { book: 'u4:p3', md: 'Finish book lesson 3 of unit 4 (How much is it?). Then write the prices of five things in your fridge or kitchen in words (for example: milk, one pound twenty).' },
};
