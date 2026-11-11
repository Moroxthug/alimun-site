// English A1, class 23 (docs/LESSONS_PLAN.md). Review of book unit u4 (Food and drink). Draft for the owner's review.
export const LESSON = {
  id: 'c23',
  focus: 'A review class for unit 4. By the end, every student talks about food they like and don’t like (with the *-s* for *he/she*), uses **a, an, some** correctly, orders politely in a café, and asks and understands prices up to 100. Most of the class is speaking and role play; the board fixes the typical mistakes of this unit.',
  tips: [
    'Before class, check the students’ book results for unit 4 on the Students page and choose the weakest point for extra practice.',
    'The four most common mistakes in this unit: *a bread* (some bread), *I like the coffee* (I like coffee), *How much is the apples?* (are), and *I want a coffee* (Can I have …, please?). Make sure every student says each correctly at least once.',
    'Note mistakes during the activity without interrupting; correct them in the correction slot.',
    'Next class is the mid-level check. Tell students what it covers (units 1 to 4) so nobody is surprised.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask everyone: *What do you usually have for breakfast? Does your family like the same food?*' },
    { min: 10, title: 'Unit 4 in one page', md: 'Show board page 1. Students do the exercise alone in three minutes, then check together.' },
    { min: 20, title: 'Activity', md: 'Use the activity for your class size below. Note mistakes as you listen.' },
    { min: 10, title: 'Correction slot', md: 'Show board page 2, then add today’s mistakes. Correct them together.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3.' },
    { min: 5, title: 'Close', md: 'Explain the mid-level check next class. Set the unit test as homework.' },
  ],
  board: [
    { title: 'Unit 4 in one page', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'My brother ___ fish.', o: ['doesn’t like', 'don’t like', 'doesn’t likes'], why: '*he* + *doesn’t* + verb with no *-s*.' },
        { q: 'Can I have ___ milk in my tea, please?', o: ['some', 'a', 'an'], why: 'You cannot count milk: *some*.' },
        { q: 'Can I have ___ egg sandwich, please?', o: ['an', 'a', 'some'], why: '*egg* starts with a vowel sound: *an*.' },
        { q: 'How much ___ these tomatoes?', o: ['are', 'is', 'does'], why: 'More than one: *are*.' },
        { q: 'That’s ___, please. (£2.50)', o: ['two pounds fifty', 'two pound fifty', 'two point fifty'], why: '*two pounds fifty*.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I want [a bread] and some cheese.', a: ['some bread'], why: 'You cannot count bread: *some bread*.' },
        { s: 'We love [the pasta]!', a: ['pasta'], why: 'Things in general: no *the*.' },
        { s: '[I want] a coffee, please.', a: ['Can I have', 'I’d like', "I'd like", 'Could I have'], why: 'Polite: *Can I have …?* or *I’d like …*.' },
        { s: 'The bus ticket is [fourty] pence.', a: ['forty'], why: '*forty*: no *u*.' },
        { s: 'She [like] chocolate very much.', a: ['likes'], why: '*she* + *-s*.' },
      ] },
      { t: 'text', md: 'Your teacher adds today’s mistakes here.' },
    ] },
    { title: 'Exam corner: choose the reply', blocks: [
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
        { q: '“Would you like some cake?”', o: ['No, thank you. I’m fine.', 'No, I don’t.', 'Yes, I like.'], why: 'An offer: *Yes, please* or *No, thank you*.' },
        { q: '“Eat in or take away?”', o: ['Take away, please.', 'Yes, please.', 'It’s four pounds.'], why: 'Choose one of the two.' },
        { q: '“How much is the soup?”', o: ['Four fifty.', 'Very good.', 'Tomato.'], why: '*How much* asks for a price.' },
        { q: '“Anything else?”', o: ['No, that’s all, thanks.', 'Yes, I do.', 'Here you are.'], why: 'The usual answer when you don’t want more.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'From the shop to the table', md: 'Three scenes in a row, all role play. First the student buys food at a market from you, asking prices. Then they invite you to dinner and ask what you like. Finally you are both in a café: the student orders for both of you and pays. Note mistakes and correct them after each scene.' },
    small: { title: 'Food stories', md: 'Each student tells the group about a typical meal in their country: what people eat and drink, what they like and don’t like. The others ask at least one question each (*Do people eat …? How much is …?*). Finish with a café role play in which each student orders the dish they talked about.' },
    group: { title: 'Restaurant rounds', md: 'Breakout rooms of three, four-minute rounds, with a menu in the chat. Round 1: a customer who doesn’t eat meat. Round 2: a customer with only £10. Round 3: a customer ordering for a family of four. Rotate the waiter each round. Back in the main room, each room shares one funny or difficult moment.' },
  },
  homework: { book: 'u4', md: 'Do the unit test for unit 4 (Food and drink). Aim for 70% or more. Then look again at any lesson from units 1 to 4 with a score below 80%: the mid-level check is next class.' },
};
