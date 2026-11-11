// English A1, class 41 (docs/LESSONS_PLAN.md). Conversation class using units u5, u6 and u7. Draft for the owner's review.
export const LESSON = {
  id: 'c41',
  focus: 'A conversation class: plans for the weekend. Students talk as much as possible, using what they know from units 5 to 7: places in town (*Is there a cinema near here?*), *can* for ability and invitations (*Can you come?*), free-time activities with *like* + *-ing*, the weather and clothes. Fluency comes first today: let students speak without stopping them, and keep corrections for the slot at the end.',
  tips: [
    'Aim for students to speak at least 70% of the time. Your job today is to set up situations, listen and note mistakes.',
    'Teach two or three fixed phrases for invitations before the role plays: **Do you want to …?**, **Sorry, I can’t.**, **Good idea!** They make conversations flow.',
    'Shy students: give them a role card with two sentences written out, so they can start safely.',
    'Note mistakes without names. In the correction slot, show five, and let the class correct them.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask each student: *What do you like doing at the weekend?* Accept short answers; ask one follow-up question each.' },
    { min: 10, title: 'Useful phrases', md: 'Show board page 1. Go through the phrases for inviting, saying yes and saying no. Students match questions and answers.' },
    { min: 10, title: 'Model conversation', md: 'Show board page 2. Read the dialogue with a strong student. Then pairs read it, changing the place, the day and the activity.' },
    { min: 15, title: 'Role plays', md: 'Use the activity for your class size below. This is the main part of the class: let students talk.' },
    { min: 10, title: 'Correction slot', md: 'Show board page 3, then add the mistakes you noted during the role plays. Students correct them together.' },
    { min: 5, title: 'Exam corner', md: 'Show board page 4: speaking part 2 style questions. Students answer in pairs, then two pairs answer for the class.' },
    { min: 5, title: 'Close', md: 'Each student says their real plan for this weekend in one sentence. Set the homework.' },
  ],
  board: [
    { title: 'Making plans', blocks: [
      { t: 'table', caption: 'Inviting, saying yes and no', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
        ['Do you want to go to the cinema?', 'you invite someone'],
        ['Can you come to my party on Saturday?', 'you invite someone'],
        ['Good idea! / I’d love to.', 'you say yes'],
        ['Sorry, I can’t. I’m working.', 'you say no and give a reason'],
        ['What time? / Where?', 'you ask for details'],
      ] },
      { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
        ['Do you want to play tennis on Sunday?', 'Sorry, I can’t play tennis.'],
        ['Is there a good café near here?', 'Yes, there’s one next to the bank.'],
        ['What’s the weather like on Saturday?', 'It’s sunny and warm.'],
        ['What time does the film start?', 'At half past seven.'],
      ] },
    ] },
    { title: 'A model conversation', blocks: [
      { t: 'dialogue', title: 'Plans for Saturday', lines: [
        { who: 'Mia', s: 'Hi Tom! Do you want to go to the park on Saturday?' },
        { who: 'Tom', s: 'Good idea! What’s the weather like on Saturday?' },
        { who: 'Mia', s: 'It’s sunny. We can play football or go swimming.' },
        { who: 'Tom', s: 'I can’t swim very well. Let’s play football!' },
        { who: 'Mia', s: 'OK. Can we meet at ten, at the café next to the station?' },
        { who: 'Tom', s: 'Perfect. See you there!' },
      ] },
      { t: 'ex', kind: 'choice', h: 'Read the dialogue. Choose the right answer.', items: [
        { q: 'Why does Tom want to play football?', o: ['He can’t swim very well.', 'It’s raining.', 'The park is closed.'], why: '*I can’t swim very well.*' },
        { q: 'Where do they meet?', o: ['At the café next to the station.', 'At the park.', 'At Tom’s house.'], why: '*at the café next to the station*.' },
      ] },
    ] },
    { title: 'Correction slot', blocks: [
      { t: 'ex', kind: 'fix', h: 'These mistakes are common in conversations. Fix them.', items: [
        { s: 'Do you want [go] to the cinema?', a: ['to go'], why: '*want* + *to* + verb.' },
        { s: 'I like [swim] in the sea.', a: ['swimming'], why: '*like* + *-ing* for hobbies.' },
        { s: 'Sorry, I [not can] come.', a: ['can’t', 'cannot'], why: 'The negative is *can’t*.' },
        { s: 'Is [it] a cinema near here?', a: ['there'], why: 'Places in town: *Is there…?*' },
      ] },
    ] },
    { title: 'Exam corner: talking together', blocks: [
      { t: 'text', md: 'In part 2 of the A2 Key speaking test, two candidates talk together about some ideas. Practise with this question: *You and your partner want to do something together this weekend. Talk about these ideas: the cinema, a picnic, a museum, a football match. Which is best?*' },
      { t: 'tip', art: 'owl', md: 'In this part, do not only give your opinion: ask your partner too. **What do you think?** and **Do you like…?** show the examiner you can have a real conversation.' },
    ] },
  ],
  activities: {
    one: { title: 'Weekend planner', md: 'You and the student plan a real or imaginary weekend together in their city. Take turns to suggest activities, say yes or no with a reason, check the weather and agree on times and places. Then swap: the student invites you to three things and you say no to one of them with a reason.' },
    small: { title: 'Find a partner for the weekend', md: 'Each student writes three plans in the chat (*Saturday morning: tennis*). Students invite each other, accept or refuse with a reason, and try to fill their weekend with a partner for each plan. At the end, each student tells the class their weekend plan.' },
    group: { title: 'Role plays in rooms', md: 'Breakout rooms of three, ten minutes. Send three role cards in the chat: (A) you want to go to a concert but do not know where it is; (B) you know the town well; (C) you can’t come because you are working, but you suggest another day. Rotate roles twice. Visit the rooms and note mistakes for the correction slot.' },
  },
  homework: { book: 'u7', md: 'Write a message (40 to 50 words) inviting a friend to do something this weekend: say what, where and when, what the weather is like, and what to wear. If you have time, repeat the speaking tasks in units 5 to 7 of the book.' },
};
