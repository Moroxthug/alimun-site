// English A1, class 22 (docs/LESSONS_PLAN.md). Builds on book lesson u4:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c22',
  focus: 'By the end of the class every student can read a real café menu and a short message about meeting for lunch, find prices, times and food in them, and use the whole unit together: talk about what they like, order, ask the price and pay. Students also write a short reply to an invitation, the first writing task in the format of A2 Key.',
  tips: [
    'This class brings the unit together. Keep new language to a minimum: the café words *a cup, a glass, the bill, a menu, a waiter/waitress*.',
    'For the writing task, show a model first. A2 Key writing tasks ask for three pieces of information; students who miss one lose marks. Teach them to tick each point.',
    'Students often begin messages with *Dear* to friends. For a friend, **Hi** + name is natural; *Dear* is for formal emails.',
    'Reading for detail is slow for beginners. Tell students to read the questions first and look for the answers, not to understand every word.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is your favourite café? What do you order there?*' },
    { min: 10, title: 'In the café', md: 'Show board page 1. Students match the café words and their meanings on the board.' },
    { min: 10, title: 'Read the menu and the message', md: 'Show board page 2. Students read alone, then answer together.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 15, title: 'Exam corner: writing', md: 'Show board page 3. Read the model reply together, find the three points, then students write their own reply in 8 minutes (in the chat or on paper). Read two or three aloud.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they can now do in English in a café. Set the homework.' },
  ],
  board: [
    { title: 'In the café', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
        ['a menu', 'it shows the food, the drinks and the prices'],
        ['the bill', 'the paper with the price you pay'],
        ['a waiter', 'the person who serves you'],
        ['a cup', 'you drink tea or coffee from it'],
        ['a glass', 'you drink water or juice from it'],
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
        { q: 'Can I see the ___, please? I want to choose my food.', o: ['menu', 'bill', 'cup'], why: 'The *menu* shows the food.' },
        { q: 'Could I have a ___ of water, please?', o: ['glass', 'cup', 'plate'], why: 'Water: *a glass*.' },
        { q: 'We want to pay. Can we have the ___, please?', o: ['bill', 'menu', 'waiter'], why: 'To pay: *the bill*.' },
      ] },
    ] },
    { title: 'A menu and a message', blocks: [
      { t: 'reading', title: 'Green Garden Café', md: '**Soups**: tomato soup £4, vegetable soup £4.50\n\n**Salads**: Greek salad £6.50, chicken salad £7.50\n\n**Drinks**: tea £2, coffee £2.40, lemonade £2.80\n\nOpen every day from 9 am to 5 pm. Lunch from 12 to 3.' },
      { t: 'reading', title: 'A message from Nadia', md: 'Hi Elena! Do you want to have lunch with me on Friday at the Green Garden Café? I love their soups. I don’t eat meat, so I usually have the vegetable soup. Let’s meet at half past twelve. Can you come? Nadia' },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'Nadia wants to meet on Friday.', a: 't', why: '*on Friday*.' },
        { q: 'Nadia often has the chicken salad.', a: 'f', why: 'She doesn’t eat meat; she usually has the vegetable soup.' },
        { q: 'The vegetable soup is £4.50.', a: 't', why: '*vegetable soup £4.50*.' },
        { q: 'They can have lunch at the café at four o’clock.', a: 'f', why: 'Lunch is from 12 to 3.' },
      ] },
    ] },
    { title: 'Exam corner: write a reply', blocks: [
      { t: 'text', md: 'In part 6 of the A2 Key exam, you write a short message (25 words or more) and answer **three points**. Answer Nadia’s message. Say: **yes or no** to lunch, **what you want to eat**, and **what time is good for you**.' },
      { t: 'reading', title: 'A model reply', md: 'Hi Nadia! Yes, I’d love to come on Friday. I want to try the Greek salad. Half past twelve is good for me, but can we meet at one? I finish work at quarter to one. See you then! Elena' },
      { t: 'tip', art: 'owl', md: 'Before you write, list the three points. After you write, tick each one. A reply with two points is not enough, even with perfect English.' },
      { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for your reply.', items: [
        { a: 'Yes, I’d love to come.', why: 'Say yes politely.' },
        { a: 'I want to try the tomato soup.', why: 'Say what you want to eat.' },
        { a: 'Can we meet at one o’clock?', why: 'Suggest a time.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Lunch with a friend', md: 'Use the Green Garden menu. You are the student’s friend and the waiter, changing hats. First, as the friend, invite the student to lunch and agree on a time. Then, as the waiter, take their order. Then, as the friend, talk about what you both like. The student asks for the bill and checks the total.' },
    small: { title: 'The group lunch', md: 'The group is planning a lunch together at the Green Garden Café. Each student finds out what the others like and don’t like, then the group agrees on an order and a time. One student calls the café (you) to book a table and says the order. The group checks the total price together.' },
    group: { title: 'Invitations', md: 'Each student writes a short invitation in the chat to a classmate (day, place, time). In breakout rooms of three, students read the invitations they received and answer each other aloud with the three points (yes or no, food, time). Back in the main room, read two invitations and two replies aloud.' },
  },
  homework: { book: 'u4:p4', md: 'Finish book lesson 4 of unit 4 (At the café). Then write a reply (25 words or more) to Nadia, with your own three points, and send it to your teacher.' },
};
