// Alimun test, English B1: Use of English. Draft for native-teacher review.
export const PAPER = {
  id: 'language', title: 'Use of English: grammar and vocabulary', minutes: 30,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'Then and now',
      about: 'Read the text. For each gap, choose the answer that fits best.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the right answer for each gap.',
          text: 'My grandmother has lived in Millford all her life, and she loves telling me how different it {} be. When she was young, there {} no supermarket, and people bought their food at the market, which {} every Thursday in the square. Most people walked or cycled, because very {} families had a car.\n\nToday the town is much {} than it was. A new road {} in the 1990s, and now hundreds of lorries pass through every day. My grandmother says the air isn’t as clean {} it was, although the town has {} made the centre traffic-free on Sundays.\n\nNot everything has changed for the worse, though. The old factory, which closed down years ago, has been {} into a library and a cinema. And my grandmother, at eighty-two, has just {} up yoga at the new sports centre.',
          items: [
            { o: ['used to', 'was used to', 'use to', 'is used'], why: 'A past habit or state that is no longer true: *used to* + verb.' },
            { o: ['was', 'were', 'had', 'is'], why: '*No supermarket* is singular and in the past: *there was*.' },
            { o: ['was held', 'held', 'was holding', 'has held'], why: 'The market does not hold itself: past passive, *was held*.' },
            { o: ['few', 'little', 'less', 'much'], why: '*Families* is countable and plural, so we say *very few*.' },
            { o: ['busier', 'more busy', 'busiest', 'busy'], why: 'A comparison with *than*: *busy* becomes *busier*.' },
            { o: ['was built', 'built', 'has built', 'was building'], why: 'The road was built by someone in finished time (*in the 1990s*): past passive.' },
            { o: ['as', 'than', 'so', 'like'], why: 'The pattern is *not as + adjective + as*.' },
            { o: ['recently', 'yet', 'ago', 'still'], why: '*Recently* goes with the present perfect in a positive sentence; *yet* is for questions and negatives.' },
            { o: ['turned', 'become', 'grown', 'done'], why: 'We say *turn something into something*; here in the passive, *has been turned into*.' },
            { o: ['taken', 'got', 'made', 'put'], why: '*Take up* a sport or hobby means start doing it.' },
          ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'A cat comes home',
      about: 'Read the news story. Write one word in each gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Write one word in each gap.',
          text: 'A cat called Biscuit has surprised his owners by walking more {} fifty kilometres back to his old home. The Ford family moved to a new town in June, but two weeks later Biscuit disappeared. “We looked everywhere {} him,” said Helen Ford.\n\nIn August, Biscuit {} found in the garden of the family’s old house by the new owners, {} called the phone number on his collar. It was {} first time anyone had seen him in two months. “He was thin and tired, but otherwise fine,” said Mrs Ford.\n\nExperts say cats often return to places they know, but nobody is sure how they find {} way. The family will keep Biscuit indoors {} he gets used to his new home. Their story has {} shared thousands of times on social media.',
          items: [
            { a: ['than'], why: 'A comparison: *more than fifty kilometres*.' },
            { a: ['for'], why: 'We say *look for* someone or something we have lost.' },
            { a: ['was'], why: 'He was found by the new owners: past passive, *was found*.' },
            { a: ['who'], why: 'A relative clause about people (the new owners) starts with *who*.' },
            { a: ['the'], why: 'We say *the first time*.' },
            { a: ['their'], why: 'The cats find *their* way: the possessive for *they*.' },
            { a: ['until', 'till'], why: '*Until* means up to the time when he gets used to it.' },
            { a: ['been'], why: 'Present perfect passive: *has been shared*.' },
          ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Words and sentences',
      about: 'Make a new word from the word in capitals. Then rewrite each sentence so that it means the same.',
      blocks: [
        { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to make a word that fits the gap.', items: [
          { q: 'We need to do more to reduce air ___ in our cities.', base: 'pollute', a: ['pollution'], why: 'After *air* we need a noun: *pollute* becomes *pollution*.' },
          { q: 'She was very ___ when she heard she had got the job.', base: 'surprise', a: ['surprised'], why: 'How a person feels: the *-ed* adjective, *surprised*.' },
          { q: 'The hotel staff were really ___ and answered all our questions.', base: 'help', a: ['helpful'], why: 'An adjective about people: *help* becomes *helpful*.' },
          { q: 'I’m sorry, the manager is ___ right now. Can I take a message?', base: 'available', a: ['unavailable'], why: 'She cannot talk, so we need the negative: *unavailable*.' },
          { q: 'Recycling is ___ important for the environment.', base: 'extreme', a: ['extremely'], why: 'Before the adjective *important* we need an adverb: *extremely*.' },
          { q: 'You need a lot of ___ to learn a language well.', base: 'patient', a: ['patience'], why: 'After *a lot of* we need a noun: *patient* becomes *patience*.' },
        ] },
        { t: 'ex', kind: 'transform', h: 'Rewrite the sentence. Start with the words given.', items: [
          { q: 'People make this cheese in the mountains.', cue: 'This cheese', a: ['This cheese is made in the mountains'], why: 'Present simple passive: *is made*; we do not need *by people*.' },
          { q: '“Where is the station?” Tom asked me.', cue: 'Tom asked me', a: ['Tom asked me where the station was'], why: 'In a reported question the verb goes after the subject and moves back: *where the station was*.' },
          { q: 'I don’t have a car, so I can’t drive to work.', cue: 'If I', a: ['If I had a car, I could drive to work', 'If I had a car I could drive to work', 'If I had a car, I would drive to work', 'If I had a car I would drive to work', 'If I had a car, I’d drive to work', 'If I had a car I’d drive to work', 'If I had a car, I would be able to drive to work', 'If I had a car I would be able to drive to work'], why: 'An imaginary present situation: second conditional, *If I had..., I could / would...*' },
          { q: 'When I was a child I played football every weekend, but I don’t now.', cue: 'I used', a: ['I used to play football every weekend', 'I used to play football every weekend when I was a child', 'I used to play football at the weekend', 'I used to play football every weekend as a child'], why: 'A past habit that has stopped: *used to* + verb.' },
          { q: 'This bag is too small for my laptop.', cue: 'This bag isn’t', a: ['This bag isn’t big enough for my laptop', 'This bag isn’t large enough for my laptop'], why: '*Too small* means the same as *not big enough*; *enough* goes after the adjective.' },
          { q: '“I’m tired,” Anna said.', cue: 'Anna said', a: ['Anna said she was tired', 'Anna said that she was tired'], why: 'In reported speech *am* moves back to *was* and *I* becomes *she*.' },
        ] },
      ],
    },
  ],
};
