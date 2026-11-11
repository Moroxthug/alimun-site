// English B2, class 58 (docs/LESSONS_PLAN.md). Builds on book lesson u12:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c58',
  focus: 'By the end of the class every student can recognise the tricks of advertising and persuasion (strong adjectives, imperatives, limited offers, questions to the reader, vague claims) and can use persuasive language themselves to promote something honestly. Students should both analyse an advert and write or say a short one.',
  tips: [
    'Persuasion is about choices of words, not new grammar. Keep the focus on effect: ask *Why did the writer choose this word?*',
    'Vague claims are a good discussion point: *up to 50% off*, *clinically proven*, *the best in town*. Ask what each one really promises.',
    'Students often overuse *very* in adverts. Push for stronger words: *stunning, unbeatable, effortless, must-have*.',
    'Imperatives sound rude to some learners (speakers of Japanese and Korean, for example). Explain that in adverts they are normal and friendly.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Read a short advert slogan aloud from board page 1. Ask: *Would you buy it? Why or why not?*' },
    { min: 12, title: 'How adverts persuade', md: 'Show board page 1. Go through the techniques with the examples. Students find each technique in the sample advert.' },
    { min: 10, title: 'Strong words', md: 'Show board page 2. Students match the plain words to stronger, persuasive ones, then rewrite a dull sentence.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: B2 First Reading and Use of English Part 3, word formation. Students write the words alone, then check spelling together.' },
    { min: 5, title: 'Close', md: 'Each student names one advertising trick they will notice from now on. Set the homework.' },
  ],
  board: [
    { title: 'How adverts persuade', blocks: [
      { t: 'table', caption: 'Persuasion techniques', explain: ['head', 'col0', 'col2'], head: ['Technique', 'Example', 'What it does'], rows: [
        ['imperative', 'Treat yourself today.', 'tells you what to do, in a friendly way'],
        ['question to the reader', 'Tired of slow internet?', 'makes you think of your own problem'],
        ['limited offer', 'Only three days left!', 'creates a feeling of urgency'],
        ['strong adjectives', 'An unbeatable, effortless clean.', 'makes the product sound special'],
        ['vague claim', 'Up to 50% off.', 'sounds big, but promises very little'],
      ] },
      { t: 'reading', title: 'An advert', md: 'Tired of waking up exhausted? Meet DreamWell, the mattress that thousands of happy sleepers already love. Feel the difference from the very first night. Order today and save up to 40%, but hurry: this offer ends on Sunday!' },
    ] },
    { title: 'Stronger words', blocks: [
      { t: 'ex', kind: 'match', h: 'Match each plain word with a more persuasive one.', pairs: [
        ['very good', 'outstanding'],
        ['easy', 'effortless'],
        ['very cheap', 'unbeatable value'],
        ['nice-looking', 'stunning'],
        ['necessary', 'a must-have'],
      ] },
      { t: 'ex', kind: 'choice', h: 'Which sentence uses a vague claim?', items: [
        { q: '', o: ['Prices from just 9 euros.', 'This phone costs 299 euros.', 'Delivery takes two days.'], why: '*From just* hides the real, usually higher, prices.' },
        { q: '', o: ['Up to 70% off selected items.', 'All shoes are 20% off.', 'The sale ends on Friday.'], why: '*Up to* and *selected* mean most items get far less.' },
      ] },
    ] },
    { title: 'Exam corner: Use of English Part 3', blocks: [
      { t: 'text', md: 'In the format of B2 First Reading and Use of English Part 3: use the word in capitals to form a word that fits the gap.' },
      { t: 'ex', kind: 'wordform', h: 'Form the right word.', items: [
        { q: 'The offer is only available for a ___ time.', base: 'LIMIT', a: ['limited'], why: 'An adjective before *time*: *limited*.' },
        { q: 'Many adverts make claims that are simply ___.', base: 'TRUE', a: ['untrue'], why: 'A negative adjective: *untrue*.' },
        { q: 'Good adverts are often very ___.', base: 'PERSUADE', a: ['persuasive'], why: 'Adjective from *persuade*: *persuasive*.' },
        { q: 'The company promised a full ___ if you were not happy.', base: 'REFUND', a: ['refund'], why: 'A noun after *a full*: *refund*.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Part 3, first decide what kind of word the gap needs (noun, adjective, adverb), then whether it is positive or negative. Many marks are lost on a missing prefix like *un-* or *in-*.' },
    ] },
  ],
  activities: {
    one: { title: 'Sell it to me', md: 'Give the student an ordinary object in the room (a pen, a mug, an old chair). They prepare a 30-second advert using at least three techniques. Then swap: you sell something and they name every technique you used.' },
    small: { title: 'Advert makeover', md: 'Share a dull product description in the chat (a basic umbrella). Each student rewrites it as an advert with an imperative, a question and two strong adjectives. Read them aloud and vote for the most persuasive.' },
    group: { title: 'Honest or not?', md: 'In breakout rooms of three, each room writes a short advert for an invented product, but must include one hidden vague claim. Back together, rooms read their adverts and the others find the hidden claim.' },
  },
  homework: { book: 'u12:p3', md: 'Finish book lesson 3 of unit 12. Then find one real advert, copy its slogan and write three sentences about the techniques it uses and whether its claims are honest.' },
};
