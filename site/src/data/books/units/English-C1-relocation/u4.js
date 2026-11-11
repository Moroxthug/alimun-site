// English C1 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Schools and parenting',
  goal: 'Understand a school system and talk to teachers tactfully about your child.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'speaking', 'grammar', 'reading'], topics: ['schools', 'admissions', 'parenting', 'past-modals', 'hedging', 'tact', 'parents-evening'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Finding your way round the school system',
      about: 'Learn the words parents need for admissions, school life and extra support.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'School systems differ widely: the age children start, how places are given, how long the school day is and how progress is reported. In many countries, places at state schools are allocated through a formal **admissions** process, and living in a school’s **catchment area** can make a place more likely. Deadlines for applications are often early and strict, so it is worth finding out about them as soon as you know where you will live.' },
          { t: 'table', caption: 'Words for parents', explain: ['head', 'col1'], quiz: true, head: ['Term', 'Meaning'], rows: [
            ['admissions', 'the process of giving children places at a school'],
            ['catchment area', 'the area around a school whose children may get priority'],
            ['oversubscribed', 'having more applications than places'],
            ['the curriculum', 'the subjects and content that are taught'],
            ['parents’ evening', 'a meeting where parents talk to teachers about progress'],
            ['a school report', 'a written summary of a child’s progress'],
            ['additional needs', 'needs for extra support with learning, health or behaviour'],
            ['the school run', 'taking children to and from school'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The school is heavily **oversubscribed**, so we’ve put down two other schools as well.', n: '*Put down* a school: list it on an application form, usually in order of preference.' },
            { s: 'Children who **have a sibling** at the school are usually **given priority**.', n: '*Give priority to*: put someone before others. A *sibling* is a brother or sister.' },
            { s: 'She’s **settling in** well, but she’s finding the reading a bit of a struggle.', n: '*Settle in*: get used to a new place. *A bit of a struggle* is a soft way of saying it is hard.' },
            { s: 'We’d like her to be **assessed** for extra support with English.', n: '*Assess*: test or observe someone to find out what they need.' },
            { s: 'He’s **ahead of** his year in maths but **behind** in writing.', n: '*Ahead of* / *behind*: better or worse than expected for his age group.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Many schools have staff who coordinate support for children with additional needs, or for children learning the school language. Their job titles vary from country to country, so a simple question works well: *Who should I speak to about extra support?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
            ['catchment area', 'the area around a school that may get priority'],
            ['oversubscribed', 'more applicants than places'],
            ['sibling', 'a brother or sister'],
            ['curriculum', 'what is taught at school'],
            ['assess', 'find out what a child needs'],
            ['settle in', 'get used to a new place'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'Children with a brother or sister at the school are often given ___.', a: ['priority'], why: '*Give priority*: put someone first.' },
            { q: 'We missed the application ___, so we had to apply late.', a: ['deadline'], why: 'A *deadline* is the last date to do something.' },
            { q: 'He’s doing well in maths, but he’s a little ___ in reading.', a: ['behind'], why: '*Behind* means below the expected level.' },
            { q: 'We put the school down as our first ___.', a: ['choice', 'preference'], why: 'Applications often list schools in order of *choice* or *preference*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'admissions', clue: 'The process of giving out school places.' },
            { a: 'catchment', clue: 'The ___ area is near the school and may get priority.' },
            { a: 'curriculum', clue: 'All the subjects and content taught at school.' },
            { a: 'report', clue: 'A written summary of a child’s progress.' },
            { a: 'sibling', clue: 'A brother or a sister.' },
            { a: 'term', clue: 'One of the parts the school year is divided into.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word does not belong?', items: [
            { o: ['landlord', 'headteacher', 'teaching assistant', 'class teacher'], why: 'A *landlord* rents out property. The others work in schools.' },
            { o: ['settle in', 'fall behind', 'struggle', 'lag behind'], why: '*Settle in* is positive. The others describe difficulty.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Raising a concern',
      about: 'Talk to a teacher about a problem with past modals, hedging and tact.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When something goes wrong at school, parents often feel strongly. A conversation with a teacher goes better when you **speculate** about what happened rather than accuse, and when you **hedge** your view. **Past modals** are the key tool: they let you suggest an explanation without claiming it is the only one.' },
          { t: 'table', caption: 'Past modals for speculating and judging', explain: ['head', 'col0'], head: ['Meaning', 'Example'], rows: [
            ['almost certain', 'She **must have** misunderstood the homework.'],
            ['possible', 'He **might have** / **may have** / **could have** left it at school.'],
            ['almost certainly not', 'She **can’t have** known about the trip; the letter never came home.'],
            ['a good idea that did not happen', 'We **should have** been told about the change.'],
            ['it was not necessary, but it happened', 'I **needn’t have** worried; she loved it.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**I may be wrong, but** I get the impression she’s finding playtime difficult.', n: '*I may be wrong, but…* and *I get the impression* soften your view.' },
            { s: '**I just wanted to flag** that he’s been quite anxious about Mondays.', n: '*Flag* something: mention it so that someone is aware of it. *Just* makes it sound smaller.' },
            { s: 'There **might have been** a misunderstanding about the homework.', n: 'An impersonal speculation: nobody is blamed.' },
            { s: '**It would really help if** we could hear about changes a bit earlier.', n: 'A request framed as what would help, not as a complaint.' },
          ] },
          { t: 'dialogue', title: 'After school', lines: [
            { who: 'Farah', s: 'Thanks for seeing me. I just wanted to flag something about Omar’s homework.' },
            { who: 'Teacher', s: 'Of course. What’s been happening?' },
            { who: 'Farah', s: 'He was marked down for not handing in his project, but he says he didn’t know it was due. He must have missed the announcement, I think.' },
            { who: 'Teacher', s: 'Ah. It was on the class page, but it’s possible he was out of the room when I mentioned it.' },
            { who: 'Farah', s: 'That might explain it. I may be wrong, but I don’t think we’ve been given access to the class page yet.' },
            { who: 'Teacher', s: 'Really? You should have received a login in the first week. I’ll check with the office.' },
            { who: 'Farah', s: 'Thank you. It would really help if we could see those deadlines too, as English isn’t our first language at home.' },
            { who: 'Teacher', s: 'That makes sense. And given all that, he can hand the project in on Friday without any penalty.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Think about the conversation. True, false or not given?', items: [
            { q: 'Farah thinks Omar probably did not hear about the deadline.', a: 't', why: '*He must have missed the announcement, I think.*' },
            { q: 'Farah accuses the teacher of not announcing the deadline.', a: 'f', why: 'She speculates about what Omar missed; she does not blame the teacher.' },
            { q: 'The family has been able to see the class page.', a: 'f', why: 'Farah thinks they have not been given access yet.' },
            { q: 'Omar is the only child who missed the deadline.', a: 'ng', why: 'Nothing is said about other children.' },
            { q: 'The teacher removes the penalty.', a: 't', why: 'He can hand it in on Friday *without any penalty*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best past modal.', items: [
            { q: 'The letter is still in his bag. He ___ forgotten to give it to me.', o: ['must have', 'can’t have', 'needn’t have'], why: 'The evidence makes it almost certain: *must have*.' },
            { q: 'She ___ been at school on Tuesday; she was at home with a fever.', o: ['can’t have', 'must have', 'should have'], why: 'It is impossible, so *can’t have*.' },
            { q: 'I ___ bought the uniform; the school gives it out free.', o: ['needn’t have', 'mustn’t have', 'can’t have'], why: 'She bought it, but it was not necessary: *needn’t have*.' },
            { q: 'Parents ___ been told about the change of date much earlier.', o: ['should have', 'must have', 'needn’t have'], why: 'It was the right thing to do, and it did not happen: *should have*.' },
            { q: 'I’m not sure where her coat is. She ___ left it in the playground.', o: ['might have', 'can’t have', 'should have'], why: 'One possibility among others: *might have*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'He must have [forget] his lunch at home.', a: ['forgotten'], why: 'Past modals take *have* + past participle: *forgotten*.' },
            { s: 'They [mustn’t] have seen the email, because nobody replied.', a: ['can’t', 'cannot', 'couldn’t'], why: 'For a past deduction in the negative, use *can’t have* or *couldn’t have*, not *mustn’t have*.' },
            { s: 'I just wanted to [flagging] that she is tired in the mornings.', a: ['flag'], why: 'After *wanted to*, use the base form: *flag*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the comment more tactful, starting with the words given.', items: [
            { q: 'You didn’t tell us about the trip.', cue: 'We should', a: ['We should have been told about the trip.'], why: 'The passive *should have been told* avoids blaming one person.' },
            { q: 'My son is unhappy at break time.', cue: 'I get the impression', a: ['I get the impression that my son is unhappy at break time.', 'I get the impression my son is unhappy at break time.'], why: '*I get the impression (that)* presents it as your view, not a fact.' },
            { q: 'Tell us about changes earlier.', cue: 'It would really help if', a: ['It would really help if you could tell us about changes earlier.', 'It would really help if you told us about changes earlier.', 'It would really help if we could hear about changes earlier.'], why: '*It would really help if* + *could* or a past form makes a request tactful.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Our first year',
      about: 'Read three parents looking back on their first year in a new school system.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'What we wish we had known', md: '**Yuki**\n\nI wish I had understood how early the application deadline was. We arrived in the spring, assumed we would sort out a school over the summer, and discovered that most places had been allocated months before. We ended up with a school forty minutes away, which made the school run exhausting. If we had applied from abroad, Kenji would probably have got a place round the corner. As it turned out, the school was wonderful, so I needn’t have panicked quite as much as I did.\n\n**Mateo**\n\nWhat surprised me most was how little homework there was at primary level. At first I was worried that the children weren’t being stretched, and I said so rather bluntly at the first parents’ evening. Looking back, I should have asked more questions before forming an opinion. The teachers explained that a lot of learning happens through projects and reading at home, and both children are doing well.\n\n**Nadia**\n\nThe hardest part was language. My daughter was nine, and for the first few months she barely spoke at school. I kept wondering whether we had made a terrible mistake. The school assessed her and gave her extra support in small groups, and by the spring she was chatting away. If only someone had told me at the start that a silent period is completely normal, I would have slept a lot better.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the texts. True, false or not given?', items: [
            { q: 'Yuki’s family applied for a school before they arrived.', a: 'f', why: 'They *assumed we would sort out a school over the summer*. *If we had applied from abroad…* shows they did not.' },
            { q: 'Yuki is now happy with Kenji’s school.', a: 't', why: '*As it turned out, the school was wonderful.*' },
            { q: 'Mateo now thinks his first reaction was a mistake.', a: 't', why: '*Looking back, I should have asked more questions before forming an opinion.*' },
            { q: 'Mateo’s children get more homework now than in their first term.', a: 'ng', why: 'He does not say whether the amount of homework has changed.' },
            { q: 'Nadia’s daughter spoke a lot at school from the start.', a: 'f', why: '*For the first few months she barely spoke at school.*' },
            { q: 'Nadia was told at the start that a silent period is normal.', a: 'f', why: '*If only someone had told me…* means nobody told her.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the texts.', items: [
            { q: '“I wish I had understood how early the deadline was.” What does Yuki mean?', o: ['She did not understand it, and she regrets that.', 'She understood it and was glad.', 'She hopes to understand it in the future.'], why: '*Wish* + past perfect expresses a regret about the past.' },
            { q: '“If we had applied from abroad, Kenji would probably have got a place.” What kind of sentence is this?', o: ['A third conditional about an imagined past.', 'A first conditional about the future.', 'A zero conditional about a general truth.'], why: '*If* + past perfect, *would have* + past participle: an imagined past result.' },
            { q: 'Mateo says he spoke “rather bluntly”. What does this suggest?', o: ['He was too direct and perhaps a little rude.', 'He spoke very quietly.', 'He was polite and tactful.'], why: '*Bluntly*: directly, without trying to be tactful.' },
            { q: 'Why might children not be “stretched”?', o: ['The work is too easy for them.', 'They are too tired.', 'They do too much sport.'], why: '*Stretch* a child: give them work that challenges them.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that expresses a regret about the past.', items: [
            { s: 'Looking back, [I should have asked] more questions.', why: '*Should have* + past participle: the right thing that did not happen.' },
            { s: '[If only someone had told me] at the start, I would have slept better.', why: '*If only* + past perfect: a strong regret.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'A school with more applicants than places is ___.', o: ['oversubscribed', 'overbooked', 'overcrowded'], why: 'For school places, the usual word is *oversubscribed*.' },
      { q: 'His bag is here, so he ___ gone to football practice.', o: ['can’t have', 'must have', 'should have'], why: 'He needs his bag for practice, so it is almost impossible: *can’t have*.' },
      { q: 'I ___ made sandwiches; lunch was provided.', o: ['needn’t have', 'mustn’t have', 'can’t have'], why: 'Unnecessary, but done: *needn’t have*.' },
      { q: 'Which is the most tactful?', o: ['I may be wrong, but I get the impression she’s unhappy.', 'You haven’t noticed she’s unhappy.', 'She’s unhappy and it’s your fault.'], why: 'Hedging with *I may be wrong* and *I get the impression*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'We live in the ___ area, so we have a good chance of a place.', a: ['catchment'], why: '*Catchment area*.' },
      { q: 'The parents’ ___ is next Thursday; we have ten minutes with each teacher.', a: ['evening'], why: '*Parents’ evening*.' },
      { q: 'I just wanted to ___ that he has been tired recently.', a: ['flag', 'mention'], why: '*Flag* something: make someone aware of it.' },
      { q: 'If ___ we had known about the deadline!', a: ['only'], why: '*If only* + past perfect: a regret.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'I’m sure she misunderstood the instructions.', cue: 'She must', a: ['She must have misunderstood the instructions.'], why: '*Must have* + past participle: almost certain.' },
      { q: 'Nobody told us about the change, and that was wrong.', cue: 'We should', a: ['We should have been told about the change.'], why: '*Should have been* + past participle: the right thing that did not happen.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Your *siblings* are your parents.', a: 'f', why: 'Siblings are brothers and sisters.' },
      { q: '*Settle in* means get used to a new place.', a: 't', why: 'That is its meaning.' },
    ] },
  ],
};
