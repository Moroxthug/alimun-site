// English B2, class 59 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p4. Draft for the owner's review.
export const LESSON = {
  id: 'c59',
  focus: 'By the end of the class every student has read and discussed an article about impulse buying, can explain the main reasons people buy things they do not need, and can talk about their own spending habits for two minutes using the language of units 12 (regret with *should have*, comparisons with modifiers, persuasion words).',
  tips: [
    'The reading is the starting point; most of the class is discussion. Do not explain every word: ask students to guess meaning from context first.',
    'Push for regret language when students talk about past purchases: *I should have waited*, *I could have bought it cheaper*. This recycles lesson 1 naturally.',
    'Money can be a sensitive topic. Let students talk about invented or general situations if they prefer.',
    'In the exam corner students often choose an answer because it uses the same words as the text. Teach them to look for the same meaning, not the same words.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is the last thing you bought that you did not really need?* Students answer in one sentence.' },
    { min: 12, title: 'Read', md: 'Show board page 1. Students read the article alone, then say in one sentence what each paragraph is about.' },
    { min: 10, title: 'Words from the text', md: 'Show board page 2. Students match the words to their meanings, then use two of them in a sentence about themselves.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading Part 5 questions on the article. Students answer alone, then justify each answer with a line from the text.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 5, title: 'Close', md: 'Each student shares one tip for spending less. Set the homework.' },
  ],
  board: [
    { title: 'Why we buy things we don’t need', blocks: [
      { t: 'reading', title: 'The two-minute decision', md: 'Most of us like to think that we shop carefully. In reality, researchers believe that around a third of what we buy is bought on impulse, often in less than two minutes.\n\nShops know this very well. Sweets are placed near the checkout, where we wait with nothing to do. Online, a red countdown clock tells us that a deal will disappear soon, and suddenly a jacket we had never thought about becomes urgent.\n\nThe feeling after an impulse purchase is often mixed. For a short time we feel excited, but many people soon regret spending the money. Psychologists call this buyer’s remorse.\n\nThe simplest solution may also be the oldest: wait. People who leave an item in their basket for 24 hours buy far less, and they rarely miss the things they did not buy.' },
    ] },
    { title: 'Words from the text', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the words from the text with their meanings.', pairs: [
        ['on impulse', 'suddenly, without planning'],
        ['the checkout', 'where you pay in a shop'],
        ['urgent', 'needing action now'],
        ['buyer’s remorse', 'regret after buying something'],
        ['rarely', 'not often'],
      ] },
    ] },
    { title: 'Exam corner: Reading Part 5', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 5: read the article again and choose the answer that fits best according to the text.' },
      { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
        { q: 'What does the writer say about how we shop?', o: ['We plan our shopping less than we think.', 'We spend two minutes on every purchase.', 'We buy a third of our things online.'], why: 'The first paragraph contrasts what we think with reality.' },
        { q: 'Why are sweets placed near the checkout?', o: ['People are waiting and have nothing else to do.', 'They are cheaper there.', 'Children ask for them there.'], why: '*Where we wait with nothing to do*.' },
        { q: 'What is the writer’s advice?', o: ['Give yourself time before buying.', 'Never shop online.', 'Only buy things on sale.'], why: 'The last paragraph recommends waiting 24 hours.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 5 the right answer usually says the same thing as the text **in different words**. An option that repeats words from the text exactly is often a trap.' },
    ] },
  ],
  activities: {
    one: { title: 'My spending story', md: 'The student talks for two minutes about a purchase they regret and one they never regret, using *should have*, *could have* and at least two comparisons with modifiers. Then ask follow-up questions as an examiner would in Speaking Part 3.' },
    small: { title: 'The 24-hour rule', md: 'Ask the group: *Is the 24-hour rule realistic?* Each student gives an opinion with a reason and an example. Then they agree on three rules for smarter shopping and post them in the chat.' },
    group: { title: 'Shop design', md: 'In breakout rooms of three, each room designs a shop (or a website) that makes people buy more, using what they learned from the article. Back together, each room presents its plan and the others say which trick is the most unfair.' },
  },
  homework: { book: 'u12:p4', md: 'Finish book lesson 4 of unit 12. Then write about 100 words: describe a purchase you made on impulse, how you felt afterwards, and what you should have done.' },
};
