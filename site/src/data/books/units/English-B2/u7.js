// English B2, unit 7, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
// Builds on B1 unit 13 (must, might, can't and must have): here the full range of certainty, past deduction in depth
// and speculating in the exam.
export const UNIT = {
  id: 'u7',
  title: 'Mysteries and deductions',
  goal: 'Say exactly how certain you are, reason about what happened in the past, and speculate fluently in conversation and in the exam.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['modals-of-deduction', 'certainty', 'past-deduction', 'speculating', 'mysteries'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Bound to, likely to, no way',
      about: 'Show exactly how certain you are, from completely sure to almost impossible, with more than modal verbs.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learned to guess with **must**, **might** and **can’t**. Real speakers have many more ways to say how sure they are, and they choose them carefully, because certainty is part of the message. *It will rain* and *It may well rain* do not say the same thing.\n\nThink of certainty as a scale. At the top are expressions for things you are sure of: **be bound to**, **be certain to**, **definitely**. In the middle are expressions for things that are probable or possible: **be likely to**, **may well**, **could easily**, **probably**, **possibly**. At the bottom are expressions for things you think will not happen: **be unlikely to**, **probably won’t**, **there’s no way**.' },
          { t: 'table', caption: 'The scale of certainty', explain: ['head', 'col0'], head: ['How sure', 'Expression', 'Example'], rows: [
            ['certain', 'be bound to / be certain to', 'She’s bound to win; she’s much faster than the others.'],
            ['very probable', 'be likely to / may well', 'Prices are likely to rise. It may well snow tonight.'],
            ['possible', 'could easily / might / possibly', 'The meeting could easily run late.'],
            ['not probable', 'be unlikely to / probably won’t', 'He’s unlikely to reply before Monday.'],
            ['almost impossible', 'there’s no way / can’t possibly', 'There’s no way they’ll finish today.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Be bound to** and **be likely to** are followed by the **base form** of the verb: *bound to **win***, *likely to **rise***. And the subject is the person or thing that will do the action: *She’s likely to be late*, not *It’s likely she to be late*.' },
        ],
        [
          { t: 'text', md: 'Adverbs of certainty need a careful position. With a normal verb they go **before** it: *She **probably** knows.* With **be** and with auxiliaries they go **after** the first auxiliary: *She’s **definitely** coming. They’ll **probably** be late.* In negative sentences, **probably** and **definitely** go **before** the negative: *He **probably won’t** come*, not *He won’t probably come*.\n\nYou can also use **It** + **be** + adjective + **that**: *It’s **likely that** the shop will close. It’s **unlikely that** we’ll see her again.* This is more formal and is common in essays and reports.' },
          { t: 'examples', items: [
            { s: 'You’re **bound to** feel nervous before the interview.', n: 'Certain, and normal: everybody does.' },
            { s: 'The train **may well** be delayed because of the storm.', n: '*May well* = it is quite probable.' },
            { s: 'He **probably won’t** remember my name.', n: '*Probably* before *won’t*.' },
            { s: '**There’s no way** she said that. It doesn’t sound like her.', n: 'Informal: you think it is impossible.' },
            { s: '**It’s unlikely that** the price will fall this year.', n: 'More formal, good for writing.' },
            { s: 'We **could easily** get lost without a map.', n: 'A real, quite strong possibility.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She is bound to winning.', 'She is bound to win.', '*Bound to* is followed by the base form.'],
            ['He won’t probably come.', 'He probably won’t come.', 'In negatives, *probably* goes before *won’t*.'],
            ['It’s likely to rain is good for farmers.', 'Rain is likely, which is good for farmers.', 'Do not use *it’s likely to* as the subject of a sentence.'],
            ['There’s no way that it can be possibly true.', 'There’s no way that can be true.', '*No way* is already very strong; do not add *possibly*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Waiting for the results', lines: [
            { who: 'Nina', s: 'The results are out tomorrow. I’m bound to have failed the maths paper.' },
            { who: 'Paul', s: 'There’s no way you failed. You studied for weeks.' },
            { who: 'Nina', s: 'Maybe, but the last question was really hard. I probably won’t get a top mark.' },
            { who: 'Paul', s: 'You may well be surprised. Teachers are likely to be generous with that question if everyone found it difficult.' },
            { who: 'Nina', s: 'I hope you’re right. It’s unlikely that I’ll sleep tonight, though.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the expression that fits the meaning in brackets.', items: [
            { q: 'He trains every day, so he’s ___ do well in the race. (certain)', o: ['bound to', 'unlikely to', 'could easily'], why: '*Bound to* means you are certain.' },
            { q: 'The weather ___ change this afternoon. (quite probable)', o: ['may well', 'can’t possibly', 'is bound'], why: '*May well* = quite probable.' },
            { q: 'She’s ___ to call before ten; she never gets up early. (not probable)', o: ['unlikely', 'bound', 'certain'], why: '*Unlikely to* = probably not.' },
            { q: '___ they’ll sell all the tickets in one day. (almost impossible)', o: ['There’s no way', 'It’s bound', 'They may well'], why: '*There’s no way* + clause = almost impossible.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'Our team is bound to [winning] the cup this year.', a: ['win'], why: '*Bound to* + base form.' },
            { s: 'They [won’t probably] arrive before midnight.', a: ['probably won’t', 'probably will not'], why: 'In negatives, *probably* comes before *won’t*.' },
            { s: 'The new law is [likely being] popular with drivers.', a: ['likely to be'], why: '*Be likely to* + base form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): rewrite the sentence with the key word, so it means the same.', items: [
            { q: 'I’m sure Anna will get the job.', cue: 'BOUND', a: ['Anna is bound to get the job.', 'Anna’s bound to get the job.'], why: '*Be bound to* = be certain to.' },
            { q: 'It is not probable that the shop will open on Sunday.', cue: 'UNLIKELY', a: ['The shop is unlikely to open on Sunday.', 'It is unlikely that the shop will open on Sunday.'], why: '*Be unlikely to* + base form, or *it is unlikely that*.' },
            { q: 'Perhaps the flight will be cancelled; it is quite probable.', cue: 'WELL', a: ['The flight may well be cancelled.', 'The flight might well be cancelled.'], why: '*May well* = quite probable.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** you must use the key word **without changing it**, and write **between two and five words**. Contractions like *’s* count as words. Read the second sentence to the end: the words after the gap often decide the structure.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, with natural stress on the certainty word.', tutor: 'omar', items: [
            { a: 'She’s bound to win.' },
            { a: 'It may well rain later.' },
            { a: 'There’s no way they’ll finish today.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'She must have been working',
      about: 'Reason about the past with must have, could have, might not have and can’t have, in the continuous and the passive too.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To guess about the past, put **have** + past participle after the modal: *She **must have** forgotten. He **can’t have** seen us.* You already know this from B1. At B2, three more things matter.\n\n**First, the full range.** **Must have** = almost sure. **May have**, **might have**, **could have** = possible. **Might not have** / **may not have** = possibly not. **Can’t have** / **couldn’t have** = almost sure it did not happen. Note that **could have** is a possibility, while **couldn’t have** is almost certainty: they are not opposites in strength.\n\n**Second, the continuous.** When you guess about an action **in progress** at a past moment, use **have been** + -ing: *He didn’t answer the phone. He **must have been driving**.*\n\n**Third, the passive.** When you guess about something done **to** someone or something, use **have been** + past participle: *The window is broken. It **must have been hit** by a ball.*' },
          { t: 'table', caption: 'Past deduction', explain: ['head', 'col0'], head: ['Meaning', 'Form', 'Example'], rows: [
            ['almost sure it happened', 'must have done', 'The ground is wet. It must have rained.'],
            ['possible', 'may / might / could have done', 'She might have missed the bus.'],
            ['possibly not', 'may not / might not have done', 'He might not have heard the message.'],
            ['almost sure it did not happen', 'can’t / couldn’t have done', 'They can’t have left; their coats are here.'],
            ['in progress (guess)', 'must / might have been doing', 'She must have been sleeping when I called.'],
            ['done to it (guess)', 'must / might have been done', 'The car must have been stolen last night.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not mix **can’t have** with **needn’t have**. *You **can’t have** paid*, means *I am sure you did not pay*. *You **needn’t have** paid* means *you paid, but it was not necessary*. The first is a guess; the second is about necessity.' },
        ],
        [
          { t: 'text', md: 'When we talk, we often give the **reason** for the guess straight after it, with *because*, *as*, *since*, or just a second sentence: *She must have been tired – she was yawning all evening.* This makes the deduction convincing, and it is exactly what examiners want to hear in the Speaking test.\n\nIn speech, **have** is weak: *must have* sounds like /mʌstəv/ and *can’t have* like /kɑːntəv/. Learners sometimes write *must of* because of this sound, but it is always **have**.' },
          { t: 'examples', items: [
            { s: 'The office was dark. Everyone **must have gone** home.', n: 'Almost sure, with the reason first.' },
            { s: 'I **might not have locked** the door. Can you check?', n: 'Possibly not.' },
            { s: 'He **couldn’t have written** this; he doesn’t speak German.', n: 'Almost sure it did not happen.' },
            { s: 'They **must have been arguing**; their faces were red.', n: 'An action in progress.' },
            { s: 'The letter **might have been sent** to the wrong address.', n: 'Passive: something done to the letter.' },
            { s: 'You **needn’t have bought** milk – we had some.', n: 'Not a guess: it was unnecessary.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She must of forgotten.', 'She must have forgotten.', 'Always *have*, even if it sounds like *of*.'],
            ['He can’t have saw it.', 'He can’t have seen it.', 'Past participle after *have*.'],
            ['It must have stolen yesterday.', 'It must have been stolen yesterday.', 'A thing that was stolen needs the passive.'],
            ['She mustn’t have heard me.', 'She can’t have heard me.', 'The negative of *must have* for deduction is *can’t have*.'],
          ] },
        ],
        [
          { t: 'reading', title: 'A message from a neighbour', md: 'Hi Sam, something odd happened while you were away. On Tuesday evening I noticed your front gate was open, though I’m sure you closed it before you left. The postman can’t have done it – he comes in the morning.\n\nThere were muddy paw prints on the path, so a dog must have pushed it open. Then on Wednesday a parcel was sitting on your doorstep in the rain. It must have been delivered after I went out, because it wasn’t there at lunchtime. I took it in for you; the box might have been damaged a little by the water, I’m afraid.\n\nOne more thing: your kitchen light was on all night. You might not have switched it off before leaving, or perhaps it’s on a timer. See you on Sunday! Maria' },
          { t: 'ex', kind: 'tf', h: 'Read the message. Are the sentences true, false or not given?', ng: true, items: [
            { q: 'Maria thinks the postman opened the gate.', a: 'f', why: '*The postman can’t have done it* – he comes in the morning.' },
            { q: 'Maria believes a dog pushed the gate open.', a: 't', why: '*A dog must have pushed it open.*' },
            { q: 'The parcel arrived in the morning.', a: 'f', why: 'It wasn’t there at lunchtime, so it was delivered later.' },
            { q: 'The parcel contained something made of glass.', a: 'ng', why: 'The message does not say what was in the parcel.' },
            { q: 'Maria is sure Sam forgot to switch off the light.', a: 'f', why: 'She says he *might not have* switched it off, or it is on a timer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with the right past form of the verb in brackets.', items: [
            { q: 'Tom isn’t answering. He must ___ (sleep) when you called.', a: ['have been sleeping'], why: 'An action in progress at that moment: *must have been* + -ing.' },
            { q: 'The documents are missing. They might ___ (throw) away by mistake.', a: ['have been thrown'], why: 'Something done to the documents: passive.' },
            { q: 'She can’t ___ (see) the email; she has been offline all week.', a: ['have seen'], why: '*Can’t have* + past participle.' },
            { q: 'I’m not sure, but the shop may ___ (close) early today.', a: ['have closed'], why: 'Possible past event: *may have* + past participle.' },
          ] },
          { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'The plane landed two hours late; the pilots must have been ___ to fly around the storm.', o: ['forced', 'pushed', 'pressed'], why: '*Be forced to* do something is the fixed expression.' },
            { q: 'Nobody knows for ___ what happened to the ship.', o: ['certain', 'clear', 'true'], why: '*Know for certain* is the fixed phrase; we do not say *for clear* or *for true*.' },
            { q: 'The thief ___ have used a key, because nothing was broken.', o: ['must', 'can’t', 'should'], why: 'Nothing broken leads to an almost certain conclusion: *must have*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, all four options often have a similar meaning. The right one is usually decided by **the words around the gap**: a preposition, a fixed phrase, or a collocation. Read the whole sentence before you choose.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these deductions after the tutor.', tutor: 'sofia', items: [
            { a: 'She must have been working late.' },
            { a: 'They can’t have heard the news.' },
            { a: 'The parcel might have been delivered already.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'It looks as if…',
      about: 'Speculate fluently in conversation and in Part 2 of the Speaking test.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Modal verbs are not the only way to speculate. In conversation, English speakers use a set of soft, natural phrases that show they are guessing: **it looks as if**, **it looks as though**, **it seems as if**, **I suppose**, **I would imagine**, **I’d say**, **judging by**, **presumably**.\n\nThese phrases are very useful in **Part 2** of the B2 First Speaking test, where you compare two photos and say what the people might be doing or feeling. Examiners reward candidates who speculate with a **range** of language, not the same *maybe* again and again.' },
          { t: 'table', caption: 'Phrases for speculating', explain: ['head', 'col1'], head: ['Phrase', 'Use it to…', 'Example'], rows: [
            ['It looks as if / as though', 'guess from what you see', 'It looks as if they’re waiting for someone.'],
            ['Judging by…', 'give the evidence first', 'Judging by their clothes, it’s quite cold.'],
            ['I’d say / I would imagine', 'give a careful opinion', 'I’d say she’s about forty.'],
            ['Presumably', 'guess the obvious', 'Presumably they’re on holiday.'],
            ['I suppose', 'guess without being sure', 'I suppose they’ve just finished work.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **as if** and **as though**, use a normal clause: *It looks **as if** it’s going to rain.* Do not use *like* + clause in the exam if you want to sound careful: *It looks like it’s going to rain* is common in speech but less formal.' },
        ],
        [
          { t: 'dialogue', title: 'Two candidates practise Part 2', lines: [
            { who: 'Examiner', s: 'Here are your photos. They show people celebrating. Compare the photos and say why the people might be celebrating.' },
            { who: 'Lena', s: 'In the first photo, judging by the cake and the candles, it looks as if it’s a birthday party.' },
            { who: 'Lena', s: 'The older woman must be the grandmother, I suppose, and she’s probably very proud.' },
            { who: 'Lena', s: 'The second photo is different. It seems as though the team has just won something, because they’re holding a trophy.' },
            { who: 'Lena', s: 'I would imagine they’ve been training for months, so they’re bound to feel relieved as well as happy.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It looks as if they are wait.', 'It looks as if they are waiting.', 'A full clause after *as if*.'],
            ['Judging by her face, she must to be tired.', 'Judging by her face, she must be tired.', 'No *to* after *must*.'],
            ['Maybe they are friends, maybe they are family, maybe…', 'They might be friends, or perhaps they’re family.', 'Use a range of phrases, not only *maybe*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['Judging by the snow on their boots,', 'they’ve just come in from outside.'],
            ['It looks as though', 'the concert has already started.'],
            ['I’d say', 'they’re about the same age.'],
            ['Presumably', 'they know each other quite well.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'It looks as if they have lost their way.', why: '*It looks as if* + full clause.' },
            { a: 'Judging by the boxes, they must be moving house.', why: 'Evidence first, then the deduction.' },
            { a: 'I would imagine they feel quite nervous.', why: '*I would imagine* + clause: a careful opinion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking Part 2): the examiner asks why the people might be in this situation. Choose the best answer for a high mark.', items: [
            { q: 'Photo: people standing in the rain at a bus stop.', o: ['Judging by their faces, they might have been waiting for a long time, and the bus may well be late.', 'They are at a bus stop. It is raining. They are wet.', 'Maybe the bus is late. Maybe they are tired. Maybe it is cold.'], why: 'The first answer speculates with a range of language and gives evidence.' },
            { q: 'Photo: a man smiling at a laptop in a kitchen.', o: ['It looks as though he’s just received some good news, presumably about work.', 'He has a laptop. He is in the kitchen.', 'He is smile because good news.'], why: 'The first answer speculates naturally and correctly.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 2** you talk alone for about **one minute**. Do not just describe what you see: **compare** the two photos and **speculate**. A good pattern is: evidence → guess → reason (*Judging by…, they might…, because…*).' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were in the exam.', tutor: 'arthur', items: [
            { a: 'It looks as if they’re waiting for someone.' },
            { a: 'Judging by their clothes, it must be quite cold.' },
            { a: 'I would imagine they feel very proud.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The lighthouse keepers',
      about: 'Read about an unsolved mystery and judge the explanations people have given.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'Unsolved mysteries are a perfect place to practise deduction, because nobody knows the answer. Writers and investigators present the **evidence**, then weigh up different **explanations** using the language of certainty: *must have*, *might have*, *is unlikely to have*, *there is no way*.\n\nAs you read, notice how the writer separates **facts** (what was found) from **speculation** (what might have happened). This skill is tested in Part 5 of the Reading paper, where questions often ask what the writer *suggests* or *believes*.' },
          { t: 'reading', title: 'Three men and an empty lighthouse', md: 'In December 1900, a supply boat reached a small island off the coast of Scotland. Three keepers were supposed to be working in its lighthouse. Nobody came down to meet the boat, and when the crew climbed up to the building, they found it empty.\n\nThe evidence was strange. The beds had not been slept in, a clock had stopped, and two of the three waterproof coats were missing. The last entries in the logbook described a violent storm, yet villagers on the mainland insisted the weather had been calm that week.\n\nMany explanations have been offered. Some believe a huge wave must have swept the men off the rocks while they were checking the equipment. This seems likely, since the coats were gone, but it cannot explain why the third man went outside without his. Others think one keeper might have attacked the other two, though there was no sign of a fight.\n\nThe most imaginative theories, involving sea monsters or foreign spies, are almost certainly false. What is likely is that the sea, always dangerous on that coast, played some part. Over a century later, we are unlikely ever to know the full story.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 5): choose the best answer.', items: [
            { q: 'What made the crew think something was wrong?', o: ['No one came to meet the boat.', 'The lighthouse light was off.', 'They found signs of a fight.'], why: '*Nobody came down to meet the boat.*' },
            { q: 'Why is the logbook described as strange?', o: ['It described a storm that people on land did not notice.', 'It had not been written for several days.', 'It was found outside the building.'], why: 'The villagers *insisted the weather had been calm*.' },
            { q: 'What problem does the writer see with the wave theory?', o: ['It does not explain why one man left without a coat.', 'There were no waves that week.', 'The equipment was not damaged.'], why: '*It cannot explain why the third man went outside without his.*' },
            { q: 'What is the writer’s opinion of the most imaginative theories?', o: ['They are very probably untrue.', 'They deserve more research.', 'They explain most of the evidence.'], why: '*Almost certainly false.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5**, the questions follow the order of the text. The correct option usually **paraphrases** the text: *almost certainly false* becomes *very probably untrue*. Be careful with options that repeat words from the text but change the meaning.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence about the mystery with the word given, so it means the same.', items: [
            { q: 'I am sure a wave swept the men away.', cue: 'MUST', a: ['A wave must have swept the men away.', 'The men must have been swept away by a wave.'], why: 'Almost sure about the past: *must have*.' },
            { q: 'It is impossible that the keepers slept in their beds that night.', cue: 'CAN’T', a: ['The keepers can’t have slept in their beds that night.'], why: 'Almost sure it did not happen: *can’t have*.' },
            { q: 'It is not probable that we will ever know the truth.', cue: 'UNLIKELY', a: ['We are unlikely ever to know the truth.', 'We are unlikely to ever know the truth.', 'It is unlikely that we will ever know the truth.'], why: '*Be unlikely to* + base form.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Give your own explanation: say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The men must have gone out to check the equipment.' },
            { a: 'A huge wave might have swept them away.' },
            { a: 'We are unlikely ever to know the full story.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right expression.', items: [
      { q: 'She has studied for months, so she’s ___ pass.', o: ['bound to', 'unlikely to', 'no way'], why: 'Certain: *bound to*.' },
      { q: 'The roads are icy; there ___ be some accidents.', o: ['may well', 'can’t possibly', 'is no way'], why: 'Quite probable: *may well*.' },
      { q: 'He ___ have heard us; he was wearing headphones.', o: ['can’t', 'must', 'bound to'], why: 'Almost sure it did not happen.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the right past form of the verb in brackets.', items: [
      { q: 'The car wasn’t there. It must ___ (tow) away by the police.', a: ['have been towed'], why: 'Passive deduction.' },
      { q: 'She didn’t hear the phone. She might ___ (have) a shower.', a: ['have been having'], why: 'An action in progress: continuous.' },
      { q: 'They can’t ___ (finish) already; they only started an hour ago.', a: ['have finished'], why: '*Can’t have* + past participle.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'He must [of] left early.', a: ['have'], why: 'Always *have*.' },
      { s: 'She [won’t definitely] come tonight.', a: ['definitely won’t', 'definitely will not'], why: '*Definitely* before *won’t*.' },
      { s: 'It looks as if they [wait] for a long time.', a: ['have been waiting', 'are waiting'], why: 'A full, correct clause after *as if*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given, so it means the same.', items: [
      { q: 'Perhaps Leo forgot about the meeting.', cue: 'MIGHT', a: ['Leo might have forgotten about the meeting.'], why: 'Possible past: *might have*.' },
      { q: 'I am sure the parcel was delivered to the wrong house.', cue: 'MUST', a: ['The parcel must have been delivered to the wrong house.'], why: 'Passive deduction with *must have been*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
      ['Judging by the empty plates,', 'the meal must have been good.'],
      ['It looks as though', 'nobody has been here for years.'],
      ['There’s no way', 'he finished that book in one night.'],
      ['You needn’t have', 'cooked so much food.'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['The window must have been broken by the wind.', 'The window must have broken by the wind.', 'The window must be broke by the wind.'], why: 'Passive deduction: *must have been* + past participle.' },
      { q: '', o: ['He probably won’t remember us.', 'He won’t probably remember us.', 'He probably not remember us.'], why: '*Probably* before *won’t*.' },
    ] },
  ],
};
