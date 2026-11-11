// English B1, class 33 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p3. Draft for the owner's review.
export const LESSON = {
  id: 'c33',
  focus: 'By the end of the class every student can talk politely about customs in their country and others: say what is normal (*In my country we usually…, People tend to…*), compare without judging (*Here it’s more common to…*), and ask what is normal (*Is it OK to…? Do people usually…?*). Each student explains three customs from their own culture to someone who does not know them.',
  tips: [
    'This topic can feel personal. Model respectful language first and correct judging phrases gently: *People in X are rude* becomes *In X it’s less common to…*.',
    '*tend to* and *be supposed to* are new for many students. Give one example of each from your own country and let students copy the pattern.',
    'Students often say *In my country is normal to…*: the missing *it* is very common. Drill **It’s normal to…** and **It’s rude to…** as chunks.',
    'Mixed classes are a gift here: let students explain customs to each other. In classes from one country, ask them to compare their region with another, or with a country they have visited.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What surprised you the first time you visited another country?* Two or three students answer.' },
    { min: 10, title: 'What is normal?', md: 'Show board page 1. Go through the phrases, then students complete the exercise and say two true sentences about their country.' },
    { min: 10, title: 'Asking politely', md: 'Show board page 2. Students read the dialogue, answer the questions, then practise asking about customs.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading part 3, a longer text with questions about the writer’s attitude.' },
    { min: 5, title: 'Fix the mistakes', md: 'Show board page 4. Quick corrections.' },
    { min: 5, title: 'Close', md: 'Each student gives one tip to a visitor to their country. Set the homework.' },
  ],
  board: [
    { title: 'What is normal?', blocks: [
      { t: 'table', caption: 'Talking about customs', explain: ['head', 'col1'], head: ['Phrase', 'What it means'], rows: [
        ['In my country we usually…', 'what most people do'],
        ['People tend to…', 'what is common, but not always'],
        ['It’s normal / rude / polite to…', 'how people see an action'],
        ['You’re supposed to…', 'what the rule or custom expects'],
        ['Here it’s more common to…', 'a polite comparison'],
      ] },
      { t: 'ex', kind: 'gap', h: 'Write one word.', items: [
        { q: 'In Japan it’s ___ to take your shoes off at home.', a: ['normal', 'usual', 'polite'], why: '*It’s normal / usual / polite to* + verb.' },
        { q: 'People ___ to eat dinner quite late in Spain.', a: ['tend'], why: '*tend to* + verb: what is common.' },
        { q: 'You’re ___ to arrive a few minutes late to a party here.', a: ['supposed'], why: '*be supposed to*: what the custom expects.' },
        { q: 'In my country we ___ shake hands when we meet someone new.', a: ['usually', 'often', 'always'], why: 'A frequency word before the main verb.' },
      ] },
    ] },
    { title: 'Is it OK to…?', blocks: [
      { t: 'dialogue', title: 'A dinner invitation', lines: [
        { who: 'Sara', s: 'My colleague invited me to dinner at her home. Is it OK to bring something?' },
        { who: 'Tom', s: 'Yes, people tend to bring flowers or something to drink.' },
        { who: 'Sara', s: 'And are you supposed to arrive exactly on time?' },
        { who: 'Tom', s: 'Not really. It’s normal to arrive five or ten minutes late. In my country it’s more common to arrive early, actually.' },
      ] },
      { t: 'ex', kind: 'tf', h: 'True or false?', items: [
        { q: 'Tom says guests usually bring something.', a: 't', why: '*people tend to bring flowers or something to drink*.' },
        { q: 'Guests are supposed to arrive exactly on time.', a: 'f', why: '*It’s normal to arrive five or ten minutes late*.' },
        { q: 'In Tom’s country people usually arrive late.', a: 'f', why: 'He says it is more common to arrive **early** there.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 3', blocks: [
      { t: 'reading', title: 'My first dinner party abroad', md: 'When I moved to Sweden, my new neighbours invited me to dinner. I arrived at seven exactly, which I thought was polite, but they were still cooking. Later I learned that in my neighbours’ group of friends people tend to arrive a little late. The meal itself was relaxed and nobody talked about work, which surprised me, because at home dinner is where business happens. I left that evening feeling a bit embarrassed about my timing, but very happy to have such kind neighbours.' },
      { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary Reading part 3: choose the right answer.', items: [
        { q: 'Why did the writer arrive at seven exactly?', o: ['He thought it was the polite thing to do.', 'His neighbours asked him to come early.', 'He wanted to help with the cooking.'], why: '*which I thought was polite*.' },
        { q: 'What surprised the writer during the meal?', o: ['Nobody discussed work.', 'The food was late.', 'The neighbours were very formal.'], why: '*nobody talked about work, which surprised me*.' },
        { q: 'How did the writer feel at the end?', o: ['A little embarrassed but happy', 'Angry with the neighbours', 'Bored and tired'], why: '*a bit embarrassed about my timing, but very happy*.' },
      ] },
      { t: 'tip', md: 'Reading part 3 often asks how the writer **felt** or what they **thought**. Look for words of feeling (*surprised, embarrassed, happy*) and for *which I thought…*.' },
    ] },
    { title: 'Fix the mistakes', blocks: [
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'In my country [is normal] to kiss on both cheeks.', a: ['it’s normal', 'it is normal'], why: 'English needs the subject: *it is normal to*.' },
        { s: 'People tend [eating] dinner early here.', a: ['to eat'], why: '*tend to* + verb.' },
        { s: 'You are supposed [taking] your shoes off.', a: ['to take'], why: '*be supposed to* + verb.' },
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Cultural guide', md: 'The student is a guide for a visitor to their country. You ask about greetings, meals, visiting a home, tipping and punctuality; the student answers with the phrases on board page 1. Then swap: you describe customs in a country you know and the student asks *Is it OK to…?* questions.' },
    small: { title: 'Customs swap', md: 'In pairs, each student explains three customs from their country (or region) that a visitor might not know. The partner asks two questions about each. Then each student tells the group the custom from their partner that surprised them most, with a polite comparison.' },
    group: { title: 'Visitor’s guide', md: 'In breakout rooms of three, each room writes a short guide in the chat called *Five things to know before you visit…* (a country one of them knows well), with the phrases from board page 1. Bring everyone back: each room reads its guide; the others ask one question.' },
  },
  homework: { book: 'u7:p3', md: 'Finish book lesson 3 of unit 7 (In my country we usually…), including the speaking task. Then write a message of 80 to 100 words to a friend who will visit your country, explaining three customs politely.' },
};
