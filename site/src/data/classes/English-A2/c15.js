// English A2, class 15 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u3:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c15',
  focus: 'By the end of the class every student can order in a café and buy things in a shop politely: **I’d like…**, **Could I have…?**, answering offers with **Yes, please / No, thank you**, asking **How much is it / are they?** and understanding prices. The aim is natural, polite service English, said with a friendly tone.',
  tips: [
    '*I want a coffee* is not wrong grammar, but it can sound rude to a waiter. Present **I’d like** and **Could I have** as the normal, friendly choice, not a formal one.',
    'Students answer *Would you like…?* with *Yes, I would like*. Drill **Yes, please** and **No, thank you** until they are automatic.',
    'Many learners drop the *’d* in fast speech (*I like a coffee*). It changes the meaning. Ask: *Always, or now?*',
    'Prices: practise *three pounds fifty*, *twelve ninety-nine*. Students often read every digit (*three point five zero*).',
    'Tone matters as much as words: a flat *Could I have the bill* sounds cold. Model a rising, friendly tone and ask students to copy it.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What do you order in a café?* Write two orders a student says exactly as said, then ask the class to make them more polite.' },
    { min: 10, title: 'Polite orders', md: 'Show board page 1. Go through the phrases for the customer and the waiter. Students do the ordering exercise on the board.' },
    { min: 10, title: 'Prices', md: 'Show board page 2. Read the prices together. Students say prices aloud in a chain, then do the exercise.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 3. Students correct the sentences quickly.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 4: a short café conversation in the format of A2 Key Listening part 3. Read it aloud twice like a recording (two voices if you can); students answer.' },
    { min: 5, title: 'Close', md: 'Each student orders something from you in one polite sentence. Answer with a price. Set the homework.' },
  ],
  board: [
    { title: 'Polite orders', blocks: [
      { t: 'table', caption: 'In a café', explain: ['head', 'col1'], head: ['Say', 'Who says it'], rows: [
        ['What can I get you?', 'the waiter'],
        ['I’d like a cheese sandwich, please.', 'you'],
        ['Could I have a glass of water?', 'you'],
        ['Would you like anything else?', 'the waiter'],
        ['Yes, please. / No, thank you.', 'you'],
        ['Could I have the bill, please?', 'you'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'I’d like a cup of tea, please.', why: '*I’d like* + what you want + *please*.' },
        { a: 'Could I have the bill, please?', why: '*Could I have* + thing + *please*.' },
        { a: 'Would you like some milk?', why: 'An offer: *Would you like* + *some*.' },
      ] },
    ] },
    { title: 'How much is it?', blocks: [
      { t: 'text', md: 'Ask **How much is it?** for one thing and **How much are they?** for more than one.\n\nSay prices like this: **£3.50** = *three pounds fifty*; **€12.99** = *twelve euros ninety-nine*; **£0.80** = *eighty pence*.' },
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: '“How much ___ these shoes?” – “£45.”', o: ['are', 'is', 'do'], why: '*shoes* are plural: *are*.' },
        { q: '“How much is the coffee?” – “It’s two ___ twenty.”', o: ['pounds', 'pound', 'point'], why: '£2.20: *two pounds twenty*.' },
        { q: '“Would you like a bag?” – “___”', o: ['No, thank you.', 'No, I wouldn’t like.', 'No, I don’t want.'], why: 'Answer an offer with *No, thank you*.' },
      ] },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
        { s: '“Would you like a dessert?” – “Yes, [I would like].”', a: ['please'], why: 'Answer an offer: *Yes, please*.' },
        { s: 'How much [is] the oranges?', a: ['are'], why: 'Plural: *How much are…?*' },
        { s: '[I like] a coffee, please. (now, to the waiter)', a: ['I’d like', "I'd like", 'I would like'], why: 'For a request now: *I’d like*.' },
      ] },
    ] },
    { title: 'Exam corner: Listening part 3', blocks: [
      { t: 'text', md: 'In the format of the A2 Key exam, Listening part 3. The teacher reads the conversation twice. Then answer the questions.' },
      { t: 'dialogue', title: 'At the Green Cup café', lines: [
        { who: 'Waiter', s: 'Hi! What can I get you?' },
        { who: 'Maria', s: 'I’d like a tea and a piece of carrot cake, please.' },
        { who: 'Waiter', s: 'Sorry, there’s no carrot cake today. We’ve got chocolate cake or apple pie.' },
        { who: 'Maria', s: 'Oh. Then could I have the apple pie?' },
        { who: 'Waiter', s: 'Of course. Would you like cream with it?' },
        { who: 'Maria', s: 'No, thank you. How much is that?' },
        { who: 'Waiter', s: 'That’s five pounds sixty, please.' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
        { q: 'What does Maria eat?', o: ['apple pie', 'carrot cake', 'chocolate cake'], why: 'There is no carrot cake, so she has *the apple pie*.' },
        { q: 'What does Maria say about cream?', o: ['She doesn’t want it.', 'She wants a lot.', 'She wants it on the side.'], why: '*No, thank you.*' },
        { q: 'How much does she pay?', o: ['£5.60', '£6.50', '£5.16'], why: '*five pounds sixty* = £5.60.' },
      ] },
      { t: 'tip', md: 'In Listening part 3 you often hear **all three options**, but only one is the answer. Here she asks for carrot cake first, then changes her mind. Listen to the end before you choose.' },
    ] },
  ],
  activities: {
    one: { title: 'Two cafés', md: 'Play two scenes with the student. First you are a very polite waiter in an expensive café and the student orders a full lunch, asks about one dish and asks for the bill. Then swap: the student is the waiter and you are a difficult customer who changes the order twice. Give one correction after each scene and replay the best moment.' },
    small: { title: 'Our café', md: 'Together, the group writes a café menu with prices in the chat (five drinks, five food items). Then students take turns as waiter and customers: each customer orders two things politely, asks one question about the menu, and pays (the waiter says the total). Note phrases that sound rude and practise a friendlier version at the end.' },
    group: { title: 'Busy lunchtime', md: 'Breakout rooms of four: one waiter, three customers, using the menu you post in the chat. Each customer must order, change one thing, ask *How much is it?* and pay. After five minutes, a new student becomes the waiter. Bring everyone back: each room tells you the most expensive order and the price, said correctly.' },
  },
  homework: { book: 'u3:p3', md: 'Finish book lesson 3 of unit 3 (I’d like a coffee, please), including the speaking task. Then write a short dialogue (eight lines) between a customer and a shop assistant, with at least one offer and one price.' },
};
