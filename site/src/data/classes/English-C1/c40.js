// English C1, class 40 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u9:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c40',
  focus: 'By the end every student fronts so and such for emphasis in the three patterns: So + adjective + be + subject + that, So + adverb + auxiliary + subject + verb + that, and Such + be + noun phrase + that, plus the literary To such an extent… that. They use them at the moments of a story or argument that need drama.',
  tips: [
    'Three patterns: adjective, adverb, *such*. Put them on the board in three colours and keep asking which one a sentence needs.',
    'With an adverb, learners forget the auxiliary: *So quickly the news spread*. The fix is the question test: *Did the news spread quickly?* gives *So quickly did the news spread*.',
    '*Such* is followed by *be* and a noun phrase with *the* or a possessive: *Such was the noise*, *Such was his relief*. *Such the noise was* is the commonest error.',
    'When *so many* or *so much* + noun is the subject, there is no inversion: *So many people applied that…*. Show it once as the exception.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Write *The queue was so long that we went home.* on the blank page. Ask students how to make it more dramatic; build *So long was the queue that…* together.' },
    { min: 12, title: 'Three patterns', md: 'Show board page 1. Students choose the right word, then say which of the three patterns each sentence uses.' },
    { min: 10, title: 'Build the sentence', md: 'Show board page 2. Students build the sentences and read them aloud with a slight pause before *that*.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 13, title: 'Exam corner', md: 'Show board page 3: C1 Advanced Reading and Use of English Part 4. Students complete the sentences alone, count their words, then compare. Reveal the answers.' },
    { min: 5, title: 'Close', md: 'Each student describes the best or worst moment of their month in one fronted *so* or *such* sentence. Set the homework.' },
  ],
  board: [
    { title: 'Three patterns', blocks: [
      { t: 'ex', kind: 'select', h: 'Choose the correct word.', items: [
        { q: 'So ___ was the view that we forgot to take photos.', o: ['breathtaking', 'breathtakingly', 'breath'], why: '*So* + adjective + *was* + subject.' },
        { q: '___ was the crowd outside that the doors were closed early.', o: ['Such', 'So', 'Very'], why: '*Such* + *was* + noun phrase.' },
        { q: 'So rarely ___ he lose his temper that nobody knew what to say.', o: ['did', 'was', 'had'], why: 'An adverb needs an auxiliary: *did* + subject + base form.' },
        { q: 'So badly ___ the road been damaged that it had to close.', o: ['had', 'did', 'was'], why: 'The past perfect passive keeps its auxiliary: *had the road been damaged*.' },
        { q: 'Such ___ her talent that she won a place at the academy at twelve.', o: ['was', 'did', 'had'], why: '*Such* + *was* + noun phrase.' },
        { q: 'So many complaints ___ that the show was cancelled.', o: ['arrived', 'did arrive', 'did they arrive'], why: '*So many complaints* is the subject, so there is no inversion.' },
      ] },
    ] },
    { title: 'Build the sentence', blocks: [
      { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
        { a: 'So loud was the music that the neighbours called the police.', extra: ['such', 'it'], why: '*So* + adjective + *was* + subject + *that*.' },
        { a: 'Such was the delay that we missed our connection.', extra: ['so', 'did'], why: '*Such* + *was* + noun phrase + *that*.' },
        { a: 'So quickly did the fire spread that nothing could be saved.', extra: ['was', 'such'], why: 'Adverb + *did* + subject + base form.' },
        { a: 'To such an extent had the town changed that I hardly recognised it.', extra: ['so', 'did'], why: '*To such an extent* + auxiliary + subject + participle.' },
      ] },
    ] },
    { title: 'Exam corner: Reading and Use of English Part 4', blocks: [
      { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
        { q: 'The film was so moving that half the audience cried. (So … that half the audience cried.)', cue: 'WAS', a: ['So moving was the film that half the audience cried.'], why: '*So* + adjective + *was* + subject: four words.' },
        { q: 'His disappointment was so great that he could not speak. (… that he could not speak.)', cue: 'SUCH', a: ['Such was his disappointment that he could not speak.'], why: '*Such* + *was* + noun phrase: four words.' },
        { q: 'She trains so hard that she rarely gets injured. (So hard … that she rarely gets injured.)', cue: 'DOES', a: ['So hard does she train that she rarely gets injured.'], why: 'Adverb + *does* + subject + base form: three words.' },
        { q: 'Prices had risen so much that families could not afford bread. (To such … that families could not afford bread.)', cue: 'EXTENT', a: ['To such an extent had prices risen that families could not afford bread.', 'To such an extent had the prices risen that families could not afford bread.'], why: '*To such an extent* + *had* + subject + participle: five or six words.' },
      ] },
      { t: 'tip', art: 'owl', md: 'If the key word is *such*, think *Such was* + noun phrase. If the sentence starts *So* + adverb, you need an auxiliary (*do, does, did, had*). Then count: the result clause with *that* is usually already given.' },
    ] },
  ],
  activities: {
    one: { title: 'Tell it with drama', md: 'The student tells a short story (a storm, a journey, a match) in plain sentences. Then they tell it again, turning the three key moments into fronted *so* or *such* sentences. Compare the two versions and decide together where the drama works and where it is too much.' },
    small: { title: 'Top this', md: 'Give a topic in the chat (*the worst holiday ever*). Each student adds a sentence that must be more dramatic than the last, using a different pattern each time (*So…*, *Such was…*, *To such an extent…*). The group checks the word order and picks the winner.' },
    group: { title: 'Town chronicle', md: 'Breakout rooms of three write the short history of a festival that went wrong in an imaginary town, in five sentences with at least two fronted *so* or *such* sentences. Back together, each room reads its story aloud with a pause before *that*, and the class checks each inversion.' },
  },
  homework: { book: 'u9:p2', md: 'Finish lesson 2 of unit 9 if needed, then do lesson 3 (At a crossroads). Write a short news story (about 120 words) about an event that surprised a town, with at least three sentences that front *so* or *such*.' },
};
