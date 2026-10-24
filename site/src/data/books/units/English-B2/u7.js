// English B2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Mysteries and deductions',
  goal: 'Speculate about the present and the past.',
  art: 'alien',
  tags: { skills: ['grammar', 'speaking', 'reading'], topics: ['modals-of-deduction', 'speculating', 'mysteries'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'It must be true',
      about: 'Say how sure you are about the present with must, might, may, could and can’t.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you are not sure about something, use a modal verb to show how certain you are. **Must** means you are almost sure it is true. **Can’t** means you are almost sure it is not true. **Might**, **may** and **could** mean it is possible.' },
          { t: 'examples', items: [
            { s: 'You’ve been travelling all day. You **must be** exhausted.', n: 'I am almost sure, because of what I know.' },
            { s: 'Someone’s at the door. It **might be** the delivery.', n: 'Possible, but I do not know.' },
            { s: 'He **can’t be** hungry. He’s just had lunch.', n: 'I am almost sure it is not true.' },
            { s: 'Where’s Priya? She **could be** stuck in traffic.', n: '*Could* here is a possibility, like *might*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'How sure are you?', explain: ['head', 'col0'], head: ['How sure?', 'Modal', 'Example'], rows: [
            ['almost certain that it is true', 'must', 'She must be at home. Her lights are on.'],
            ['possible', 'might / may / could', 'He might be in a meeting.'],
            ['possible that it is not true', 'might not / may not', 'They may not know about the change.'],
            ['almost certain that it is not true', 'can’t / couldn’t', 'That can’t be Joe. He’s in Spain.'],
          ] },
          { t: 'text', md: 'For an action in progress now, use the modal + *be* + *-ing*: *She must be working late. They might be waiting outside.*' },
          { t: 'tip', art: 'owl', md: 'The opposite of *must* in a deduction is *can’t*, not *mustn’t*. *Mustn’t* means that something is not allowed. Also compare *It couldn’t be him* (I am sure it is not him) with *It might not be him* (perhaps it is not him).' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best modal.', items: [
            { q: 'Lena has three jobs. She ___ very busy.', o: ['must be', 'can’t be', 'mustn’t be'], why: 'Three jobs: you are almost sure she is busy.' },
            { q: 'That ___ Martin’s car. His car is red, and this one is blue.', o: ['can’t be', 'must be', 'might be'], why: 'The colour is wrong, so you are sure it is not his.' },
            { q: 'I’m not sure where Ali is. He ___ in the library.', o: ['might be', 'must be', 'can’t be'], why: 'You are not sure: a possibility.' },
            { q: 'Listen! Someone ___ the piano upstairs.', o: ['must be playing', 'must play', 'can’t be playing'], why: 'You can hear it now: *must be* + *-ing* for an action in progress.' },
            { q: 'The restaurant is empty on a Saturday night. The food ___ very good.', o: ['can’t be', 'must be', 'mustn’t be'], why: 'An empty restaurant suggests the food is not good. *Mustn’t* is not used for deduction.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with must, might or can’t and the verb in brackets.', items: [
            { q: 'You ___ (be) Sara’s brother. You look just like her!', a: ['must be'], why: 'The resemblance makes you almost sure.' },
            { q: 'Take an umbrella. It ___ (rain) later.', a: ['might rain', 'may rain', 'could rain'], why: 'Possible, not certain: *might*, *may* or *could*.' },
            { q: 'This bill ___ (be) right. We only had two coffees, and it says six.', a: ['can’t be', 'cannot be', 'couldn’t be'], why: 'You are sure the bill is wrong.' },
            { q: 'It’s three in the morning in Tokyo, so Kenji ___ (sleep).', a: ['must be sleeping', 'might be sleeping', 'may be sleeping', 'could be sleeping'], why: 'An action in progress now: modal + *be* + *-ing*. *Must* if you are sure, *might* if you are less sure.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Lost keys', lines: [
            { who: 'Inés', s: 'I can’t find my keys. They must be somewhere in the flat.' },
            { who: 'Kwame', s: 'Have you checked your coat? They might be in the pocket.' },
            { who: 'Inés', s: 'They can’t be in my coat. I wasn’t wearing it today.' },
            { who: 'Kwame', s: 'Then they could be in the car. You drove to the shop, didn’t you?' },
            { who: 'Inés', s: 'You’re right. They must be in the car!' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the modal that shows the speaker is almost sure something is not true.', items: [
            { s: 'They [can’t] be in my coat. I wasn’t wearing it today, so they must be somewhere else.', why: '*Can’t be*: almost sure it is not true. *Must be* is the opposite.' },
            { s: 'He might be at the gym, but he [can’t] be at work. The office is closed today.', why: '*Might be* is a possibility. *Can’t be* means it is impossible.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'It must have happened',
      about: 'Make deductions about the past with must have, might have and can’t have.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To make a deduction about the **past**, use the modal + *have* + past participle. The meanings are the same as for the present: *must have* (almost sure), *might have*, *may have* or *could have* (possible), *can’t have* or *couldn’t have* (almost sure it did not happen).' },
          { t: 'examples', items: [
            { s: 'The streets are wet. It **must have rained** in the night.', n: 'I did not see it, but I am almost sure.' },
            { s: 'She isn’t answering. She **might have gone** to bed early.', n: 'A possible explanation.' },
            { s: 'They **can’t have seen** us. They didn’t even wave.', n: 'I am almost sure they did not see us.' },
            { s: 'His eyes were red. He **must have been crying**.', n: 'An action in progress in the past: *must have been* + *-ing*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Deductions about the past', explain: ['head', 'col0', 'col1'], head: ['How sure?', 'Form', 'Example'], rows: [
            ['almost certain that it happened', '*must have* + past participle', 'He must have missed the train.'],
            ['possible', '*might / may / could have* + past participle', 'She might have forgotten.'],
            ['almost certain that it did not happen', '*can’t / couldn’t have* + past participle', 'They can’t have seen us.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Could have* has two uses. It can be a deduction: *She could have taken the bus* (perhaps she did). It can also be a possibility that did not happen: *You could have hurt yourself!* The context tells you which. In speech, *must have* sounds like “must’ve”, but never write *must of*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: 'The grass is wet. It ___ in the night.', o: ['must have rained', 'can’t have rained', 'must rain'], why: 'A past deduction you are almost sure of: *must have* + past participle.' },
            { q: 'Ben ___ my email. He hasn’t replied, and he always replies quickly.', o: ['can’t have read', 'must have read', 'mustn’t have read'], why: 'He always replies, so you are almost sure he did not read it.' },
            { q: 'I’m not sure how they got here. They ___ a taxi.', o: ['might have taken', 'must have taken', 'can’t have taken'], why: 'You are not sure: a possibility in the past.' },
            { q: 'Her eyes were red. She ___.', o: ['must have been crying', 'must cry', 'can’t have cried'], why: 'Red eyes suggest an action in progress before: *must have been* + *-ing*.' },
            { q: 'You ___ Eva at the party last night. She was in Rome all week.', o: ['can’t have seen', 'must have seen', 'might have seen'], why: 'She was in another city, so it is impossible.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Say the same thing with a past modal and the verb in brackets.', items: [
            { q: 'I’m sure he forgot. → He ___ (forget).', a: ['must have forgotten', 'must’ve forgotten'], why: '*I’m sure* = *must have* + past participle.' },
            { q: 'Perhaps they got lost. → They ___ (get) lost.', a: ['might have got', 'may have got', 'could have got'], why: '*Perhaps* = *might*, *may* or *could have*.' },
            { q: 'I’m sure she didn’t write this. → She ___ (write) this.', a: ['can’t have written', 'couldn’t have written', 'cannot have written'], why: '*I’m sure … not* = *can’t have* + past participle.' },
            { q: 'Perhaps he didn’t hear the alarm. → He ___ (hear) the alarm.', a: ['might not have heard', 'may not have heard'], why: '*Perhaps … not* = *might not have* or *may not have*.' },
            { q: 'I’m sure they were waiting for hours. → They ___ (wait) for hours.', a: ['must have been waiting', 'must’ve been waiting'], why: 'An action in progress: *must have been* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She must have left her phone at home.', why: '*Must have* + past participle, then the object and the place.' },
            { a: 'You can’t have seen my brother.', why: '*Can’t have* + past participle.' },
            { a: 'He might have been working late.', why: '*Might have been* + *-ing* for an action in progress.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'I bet…',
      about: 'Use everyday expressions for guessing and speculating.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Besides modal verbs, English has many expressions for guessing. Some show you are almost sure, and some show you doubt something. Many of them are informal and very common in conversation.' },
          { t: 'table', caption: 'Expressions for speculating', explain: ['head', 'col1'], quiz: true, head: ['Expression', 'Meaning', 'Example'], rows: [
            ['I bet…', 'I am fairly sure (informal)', 'I bet she’s forgotten our meeting.'],
            ['There’s no way…', 'It is impossible (informal)', 'There’s no way he ran ten kilometres in twenty minutes.'],
            ['It looks as if / as though…', 'This is what it seems from what I can see', 'It looks as if it’s going to snow.'],
            ['be bound to…', 'It is certain to happen', 'They’re bound to be late. They always are.'],
            ['I doubt (that)…', 'I do not think so', 'I doubt she’ll call back today.'],
            ['I reckon…', 'I think (informal)', 'I reckon they’ve sold the house.'],
            ['Chances are…', 'It is probable', 'Chances are he’s still at work.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: '*I bet*, *I reckon* and *there’s no way* are informal: use them with friends, not in an essay. In formal writing, use *it is likely that* or *it is almost certain that*. After *it looks as if*, people often use a present tense: *It looks as if nobody is home.*' },
          { t: 'ex', kind: 'match', h: 'Match each expression with its meaning.', pairs: [
            ['I bet', 'I’m fairly sure'],
            ['There’s no way', 'It’s impossible'],
            ['be bound to', 'be certain to'],
            ['I doubt', 'I don’t think'],
            ['Chances are', 'It’s probable that'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best expression.', items: [
            { q: 'Look at those clouds. It looks ___ it’s going to rain.', o: ['as if', 'like as', 'so if'], why: '*It looks as if* + clause: what we can see suggests this.' },
            { q: 'She’s been training for months. She’s ___ to win.', o: ['bound', 'doubt', 'reckon'], why: '*Be bound to* + infinitive: certain to happen.' },
            { q: '___ he’s still asleep. He never gets up before ten.', o: ['I bet', 'I doubt', 'There’s no way'], why: 'The reason supports the guess, so *I bet*: I am fairly sure.' },
            { q: '___ she wrote that report herself. It’s full of words she never uses.', o: ['There’s no way', 'I bet', 'Chances are'], why: 'The reason shows it is impossible: *there’s no way*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'It looks as ___ nobody is at home.', a: ['if', 'though'], why: '*It looks as if* or *as though*.' },
            { q: 'They’re ___ to notice the mistake. It’s on the first page.', a: ['bound', 'sure', 'certain'], why: '*Be bound to*: it is certain to happen.' },
            { q: 'I ___ she’ll come. She said she was very busy.', a: ['doubt'], why: '*I doubt* + clause: I do not think it will happen.' },
            { q: 'There’s no ___ he finished the marathon in two hours.', a: ['way'], why: '*There’s no way*: it is impossible.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the expression that means the speaker is sure something will happen.', items: [
            { s: 'Don’t worry about the tickets. They’re [bound to] have some left, although I doubt they’ll be cheap.', why: '*Bound to* means certain. *I doubt* shows the opposite: probably not.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The piano in the forest',
      about: 'Read about an unsolved mystery and follow how people speculate about it.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'The piano in the forest', md: 'Early one October morning, two walkers in the hills above the small town of Carrow found something strange in the middle of the forest: an old piano, standing between the trees, more than a kilometre from the nearest road.\n\nThe piano was in surprisingly good condition. Its wood was dry, and there was no dust on the keys, so it can’t have been there for long. It had rained heavily two days earlier, which meant it must have arrived after the rain. But how? The path was too narrow for a car, and there were no tyre marks on the ground.\n\nLocal people soon had their theories. Some said a group of students must have carried it there as a joke, but a piano like that weighs more than two hundred kilograms. Others thought it might have been dropped from a helicopter, yet nobody in the town remembered hearing one. A musician from Carrow suggested that it could be part of an art project, and that the artist might be watching to see how people react.\n\nInside the piano, the police found only a folded note. It said, in neat handwriting, “Play something.” Three years later, nobody has explained how the piano got there. It is still in the forest, and on summer evenings people walk up the hill to play it.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The piano was found next to a road.', a: 'f', why: 'It was more than a kilometre from the nearest road.' },
            { q: 'People think the piano arrived after the heavy rain.', a: 't', why: 'The wood was dry, so it must have arrived after the rain.' },
            { q: 'Several people in the town heard a helicopter.', a: 'f', why: 'Nobody remembered hearing one.' },
            { q: 'The police found out who wrote the note.', a: 'ng', why: 'The text describes the note, but it does not say if anyone knows who wrote it.' },
            { q: 'People still play the piano today.', a: 't', why: 'On summer evenings people walk up the hill to play it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the deductions in the text.', items: [
            { q: 'Why “can’t have been there for long”?', o: ['The wood was dry and the keys were clean.', 'There was a note inside it.', 'The path was too narrow.'], why: 'No dust and dry wood show it had not been outside long.' },
            { q: 'Why is the students theory weak?', o: ['A piano like that is very heavy.', 'The students were on holiday.', 'Nobody heard any music.'], why: 'It weighs more than two hundred kilograms, so carrying it a kilometre is very hard.' },
            { q: '“The artist might be watching.” How sure is the musician?', o: ['Not sure: it is only a possibility.', 'Completely sure.', 'Sure that it is not true.'], why: '*Might* + *be* + *-ing*: a possibility about the present.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Your sister ___ very proud of you. You did so well!', o: ['must be', 'can’t be', 'mustn’t be'], why: 'You are almost sure: *must be*.' },
      { q: 'That ___ the right address. There’s no number 90 on this street.', o: ['can’t be', 'must be', 'might be'], why: 'The number does not exist, so it is impossible.' },
      { q: 'They’re not answering. They ___ out for dinner.', o: ['might have gone', 'can’t have gone', 'must go'], why: 'A possible explanation in the past: *might have* + past participle.' },
      { q: 'Nobody’s here. Everyone ___ home already.', o: ['must have gone', 'can’t have gone', 'must go'], why: 'The empty room makes you almost sure: *must have gone*.' },
      { q: 'It ___ as if the shop is closed.', o: ['looks', 'bets', 'doubts'], why: '*It looks as if* + clause.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with a modal and the verb in brackets.', items: [
      { q: 'I’m sure Lucas didn’t break it. Lucas ___ (break) it.', a: ['can’t have broken', 'couldn’t have broken', 'cannot have broken'], why: 'Almost sure it did not happen: *can’t have* + past participle.' },
      { q: 'Perhaps the letter got lost. The letter ___ (get) lost.', a: ['might have got', 'may have got', 'could have got'], why: 'A past possibility: *might have* + past participle.' },
      { q: 'Listen to that noise! The neighbours ___ (have) a party.', a: ['must be having'], why: 'An action in progress now that you are sure about: *must be* + *-ing*.' },
      { q: 'You’ve worked twelve hours today. You ___ (be) tired.', a: ['must be'], why: 'Almost sure about the present: *must be*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Someone must have taken my umbrella.', why: '*Must have* + past participle.' },
      { a: 'It looks as if nobody is home.', why: '*It looks as if* + subject + verb.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['She must have left early.', 'She must left early.', 'She must of left early.'], why: '*Must have* + past participle. *Must of* is a spelling mistake.' },
      { q: '', o: ['He can’t be at work. It’s Sunday.', 'He mustn’t be at work. It’s Sunday.', 'He can’t to be at work. It’s Sunday.'], why: 'The opposite of *must* in a deduction is *can’t*, followed by the infinitive without *to*.' },
      { q: '', o: ['They’re bound to be late.', 'They’re bound being late.', 'They’re bound that they are late.'], why: '*Be bound to* + infinitive.' },
    ] },
  ],
};
