// English B1, unit 13, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u13',
  title: 'What might have happened?',
  goal: 'Say how sure you are about the present and the past, explain strange events, and follow a mystery story.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['modals-of-deduction', 'must-might-cant', 'must-have', 'probability', 'mysteries'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'It must be his',
      about: 'Say how sure you are about something now with must, might, could and can’t.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Very often we do not **know** something for certain, but we can **guess** from what we see or hear. English uses a small group of modal verbs to show how sure we are. This is called **deduction**.\n\nUse **must** when you are almost sure something is true: *The lights are off. They **must** be asleep.* Use **can’t** when you are almost sure something is **not** true: *She **can’t** be at home – her car isn’t there.* Use **might**, **may** or **could** when something is possible, but you are not sure: *He **might** be in the garden.*\n\nThe form is simple: modal verb + the **base form** of the verb, with no *to*: *must be*, *might know*, *can’t live*.' },
          { t: 'table', caption: 'How sure are you?', explain: ['head', 'col0', 'col2'], head: ['How sure', 'Modal', 'Example'], rows: [
            ['almost sure it is true (about 95%)', 'must', 'You must be tired after that journey.'],
            ['possible (about 50%)', 'might / may / could', 'Take an umbrella. It might rain later.'],
            ['almost sure it is not true (about 5%)', 'can’t', 'That can’t be Tom. He’s in Spain this week.'],
          ] },
          { t: 'tip', art: 'owl', md: 'For deduction, the opposite of **must** is **can’t**, not *mustn’t*. *Mustn’t* means that something is not allowed: *You mustn’t park here.* So say *It **can’t** be true*, not *It mustn’t be true*.' },
        ],
        [
          { t: 'text', md: 'We usually give the **reason** for our guess in the same sentence or the next one. Words like **because**, **so** and **– look,** help the listener follow your thinking: *The phone is ringing and nobody is answering, **so** they **must** be out.*\n\nYou can also use **be + -ing** after the modal for something happening now: *Listen! They **must be having** a party next door.* *She’s not answering. She **might be driving**.*\n\nIn questions, we usually ask with **Could**…? or **Do you think**…?, not with *must*: ***Could** this be his bag?* ***Do you think** it’s his?*' },
          { t: 'examples', items: [
            { s: 'There are three cups on the table. Someone **must** have visitors.', n: 'You see the cups and you are almost sure.' },
            { s: 'The shop **might** be closed. It’s a public holiday.', n: 'Possible, but you do not know.' },
            { s: 'This **can’t** be the right address. There’s no house here.', n: 'You are almost sure it is not true.' },
            { s: 'Listen to that noise. Our neighbours **must be moving** furniture.', n: '*must be + -ing* for something happening now.' },
            { s: '**Could** this be Anna’s jacket? It’s her colour.', n: 'Asking about a possibility.' },
            { s: 'He speaks Italian perfectly. He **may** have lived in Italy. – Or his parents **could** be Italian.', n: 'Two possible explanations.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She must to be at work.', 'She must be at work.', 'No *to* after a modal verb.'],
            ['It mustn’t be true.', 'It can’t be true.', 'The opposite of deduction *must* is *can’t*.'],
            ['He musts be rich.', 'He must be rich.', 'Modals never take *-s*.'],
            ['Maybe she might be ill.', 'She might be ill. / Maybe she’s ill.', '*maybe* and *might* say the same thing: use one.'],
            ['They can be at home, I’m not sure.', 'They could be at home, I’m not sure.', 'For a possible guess, use *could*, *might* or *may*.'],
          ] },
          { t: 'dialogue', title: 'Whose phone is this?', lines: [
            { who: 'Grace', s: 'Someone left a phone on the bus seat. Look.' },
            { who: 'Ben', s: 'It must belong to that man who got off at the station. He was sitting here.' },
            { who: 'Grace', s: 'It can’t be his. He was holding his phone when he left.' },
            { who: 'Ben', s: 'Then it might be the woman with the baby. She was in a hurry.' },
            { who: 'Grace', s: 'Could be. Let’s give it to the driver. They must get this all the time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'He’s been working for twelve hours. He ___ be exhausted.', o: ['must', 'can’t', 'mustn’t'], why: 'You are almost sure: *must*.' },
            { q: 'That ___ be Lucy at the door. She’s on holiday in Greece.', o: ['can’t', 'must', 'might'], why: 'You are almost sure it is not true: *can’t*.' },
            { q: 'I’m not sure where Ali is. He ___ be in the library.', o: ['might', 'must', 'can’t'], why: 'Only a possibility: *might*.' },
            { q: 'You ___ smoke in the hospital. It’s against the rules.', o: ['mustn’t', 'can’t be', 'must'], why: 'This is a rule, not a guess: *mustn’t* means it is not allowed.' },
            { q: 'Listen! Somebody ___ be playing the piano upstairs.', o: ['must', 'can’t', 'mustn’t'], why: 'You can hear it, so you are almost sure: *must be + -ing*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She [must to] be very happy about the news.', a: ['must'], why: 'No *to* after a modal.' },
            { s: 'This [mustn’t] be the right bus. It’s going the wrong way.', a: ['can’t'], why: 'For a guess that something is not true, use *can’t*.' },
            { s: 'Paul [mights] be late. The traffic is terrible.', a: ['might'], why: 'Modals never take *-s*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with must, might or can’t.', items: [
            { q: 'I’m sure she is a doctor. She’s wearing a white coat and a name badge.', cue: 'She', a: ['She must be a doctor.'], why: 'Almost sure it is true: *must be*.' },
            { q: 'Perhaps the tickets are sold out.', cue: 'The tickets', a: ['The tickets might be sold out.', 'The tickets may be sold out.', 'The tickets could be sold out.'], why: 'A possibility: *might / may / could*.' },
            { q: 'I’m sure this isn’t your key. It’s too small.', cue: 'This', a: ['This can’t be your key.'], why: 'Almost sure it is not true: *can’t be*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Reading part 1: what does the message say?', items: [
            { q: 'NOTE ON A DOOR: “Delivery for flat 4: if nobody answers, your parcel may be at reception.”', o: ['The parcel could be at reception.', 'The parcel is definitely at reception.', 'The parcel can’t be delivered to flat 4.'], why: '*may be* means it is possible, not certain.' },
            { q: 'TEXT FROM DAN: “Saw your bag in the café. It must be yours – it’s got your name on it! I’ve left it with the waiter.”', o: ['Dan is almost sure the bag belongs to you.', 'Dan wants you to come and get him from the café.', 'Dan isn’t sure who the bag belongs to.'], why: '*It must be yours*: Dan is almost sure.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading part 1 you read a short notice or message and choose what it means. Look carefully at small words like **must**, **may** and **can’t**: one option often changes *possible* into *certain*, and that option is wrong.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'They must be asleep.' },
            { a: 'It might rain later.' },
            { a: 'That can’t be true.' },
            { a: 'She could be stuck in traffic.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'She must have forgotten',
      about: 'Make guesses about the past with must have, might have and can’t have.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'We also make guesses about the **past**. The idea is the same as in lesson 1, but the form changes: modal + **have** + the **past participle** (*done, gone, seen, forgotten*).\n\n**must have done**: you are almost sure something happened. *The ground is wet. It **must have rained** in the night.*\n\n**might / may / could have done**: it is possible that something happened. *He’s late. He **might have missed** the bus.*\n\n**can’t have done** (or **couldn’t have done**): you are almost sure something did **not** happen. *She **can’t have seen** us. She didn’t say hello.*' },
          { t: 'table', caption: 'Guessing about the past', explain: ['head', 'col0'], head: ['How sure', 'Form', 'Example'], rows: [
            ['almost sure it happened', 'must have + past participle', 'You must have been very nervous before the interview.'],
            ['possible', 'might / may / could have + past participle', 'I might have left my glasses at work.'],
            ['almost sure it did not happen', 'can’t / couldn’t have + past participle', 'He can’t have eaten all the cake. It was huge!'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, **must have** sounds like *mustuv*, and **might have** sounds like *mightuv*. That is why some people wrongly write *must of*. The correct form is always **have**: *must **have** gone*.' },
        ],
        [
          { t: 'text', md: 'These past guesses are very useful when you **react** to someone’s news. If a friend tells you a story, you can show you understand how they felt: *You **must have been** so happy!* *That **can’t have been** easy.*\n\nThey also help you **explain** a problem when you are not sure of the cause: *The heating isn’t working. Someone **might have turned** it off.* *The parcel hasn’t arrived. They **could have sent** it to the wrong address.*\n\nFor something happening over a period of time in the past, use **have been + -ing**: *Your eyes are red. You **must have been crying**.*' },
          { t: 'examples', items: [
            { s: 'I passed my driving test! – Brilliant! You **must have been** really pleased.', n: 'Reacting to good news.' },
            { s: 'The window is broken. Someone **might have thrown** a ball.', n: 'One possible explanation.' },
            { s: 'Jack **can’t have written** this email. He doesn’t speak French.', n: 'Almost sure it did not happen.' },
            { s: 'I can’t find my wallet. I **may have dropped** it in the taxi.', n: 'A possibility.' },
            { s: 'You’re soaking wet! You **must have been walking** in the rain for ages.', n: 'An action over a period of time.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She must forgot her keys.', 'She must have forgotten her keys.', 'For the past: *must have* + past participle.'],
            ['They must of left early.', 'They must have left early.', 'Write *have*, not *of*.'],
            ['He can’t have went home.', 'He can’t have gone home.', 'Use the past participle, not the past simple.'],
            ['You must have be tired.', 'You must have been tired.', 'The past participle of *be* is *been*.'],
          ] },
        ],
        [
          { t: 'reading', title: 'The day the cake disappeared', md: 'On Friday afternoon, Mrs Patel left a large chocolate cake in the staff kitchen for her retirement party. When she came back an hour later, half of it had gone.\n\nThe office manager, Owen, was sure he knew who had eaten it. “It must have been the new trainee,” he said. “He was in the kitchen for ages.” But the trainee had spent the whole hour in a meeting with Owen himself, so it can’t have been him.\n\nThen somebody noticed chocolate on the photocopier. “The IT team might have taken it,” said Lina. “They were fixing the printer this afternoon.” It was a good guess, but the IT team had left before lunch.\n\nIn the end, the answer came from the security camera. A delivery driver had seen the cake, cut a large piece, and written “Thank you!” on a napkin. Mrs Patel just laughed. “He must have been really hungry,” she said.' },
          { t: 'ex', kind: 'tf', h: 'Read the story. Are the sentences true, false or not given?', ng: true, items: [
            { q: 'Owen thought the trainee had eaten the cake.', a: 't', why: '*It must have been the new trainee*, he said.' },
            { q: 'The trainee was in the kitchen all afternoon.', a: 'f', why: 'He was in a meeting with Owen for the whole hour.' },
            { q: 'The IT team were still in the office in the afternoon.', a: 'f', why: 'They had left before lunch.' },
            { q: 'The delivery driver came back to say sorry.', a: 'ng', why: 'The story says he left a note, but not that he came back.' },
            { q: 'Mrs Patel was angry about the cake.', a: 'f', why: 'She just laughed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with must have, might have or can’t have and the verb in brackets.', items: [
            { q: 'The streets are white. It ___ (snow) during the night.', a: ['must have snowed'], why: 'The evidence makes you almost sure.' },
            { q: 'I’m not sure where my phone is. I ___ (leave) it at Maria’s.', a: ['might have left', 'may have left', 'could have left'], why: 'Only a possibility.' },
            { q: 'She ___ (see) the film. She was in hospital when it was on.', a: ['can’t have seen', 'couldn’t have seen'], why: 'Almost sure it did not happen.' },
            { q: 'You ran a marathon? You ___ (be) exhausted!', a: ['must have been'], why: 'Reacting to news: *must have been*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'The door was open when I got home. I ___ to lock it.', o: ['must have forgotten', 'must forget', 'must have forgot'], why: '*must have* + past participle *forgotten*.' },
            { q: 'He ___ the email yet. He hasn’t replied.', o: ['might not have read', 'mustn’t have read', 'might not read'], why: '*might not have* + past participle for a past possibility.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Listening part 1: read the short conversation and choose the answer.', items: [
            { q: 'WOMAN: “Did you lock the back door?” MAN: “I think so… I remember closing the window, and then I went out the front. Oh, wait – I came back for my keys through the kitchen.” What does the man think?', o: ['He might have left the back door open.', 'He definitely locked the back door.', 'He can’t have used the kitchen.'], why: 'He is not sure: he came back through the kitchen, so the back door might be open.' },
            { q: 'MAN: “Sophie isn’t answering. She’s usually in at this time.” WOMAN: “She said she had a dentist’s appointment, but that was this morning…” What does the woman mean?', o: ['Sophie can’t still be at the dentist’s.', 'Sophie must be at the dentist’s now.', 'Sophie forgot her appointment.'], why: 'The appointment was in the morning, so she is almost sure Sophie is not there now.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Listening part 1, speakers often **change their mind** or add new information (*Oh, wait…*, *but that was this morning*). Do not choose the first thing you hear. Listen to the whole conversation before you answer.' },
          { t: 'ex', kind: 'speak', h: 'React to the news. Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'You must have been so happy.' },
            { a: 'That can’t have been easy.' },
            { a: 'He might have missed the train.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'It looks as if…',
      about: 'Explain strange events with probably, perhaps, I bet and it looks as if.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Modal verbs are not the only way to show how sure you are. English has many **adverbs and phrases** that do the same job, and using a mix of them makes you sound more natural.\n\n**Definitely** and **certainly** mean you are sure. **Probably** means you are quite sure (about 70–80%). **Perhaps**, **maybe** and **possibly** mean it is just a possibility.\n\nNotice the position: *probably* and *definitely* usually go **after** *be* and **before** other verbs: *She’s **probably** at home.* *He’ll **definitely** come.* But in negative sentences they go **before** *won’t* or *isn’t*: *She **probably** won’t come.* *Perhaps* and *maybe* usually start the sentence: ***Perhaps** they got lost.*' },
          { t: 'table', caption: 'From sure to not sure', explain: ['head', 'col1'], head: ['Word', 'How sure', 'Example'], rows: [
            ['definitely / certainly', 'sure', 'He’s definitely the best player in the team.'],
            ['probably', 'quite sure', 'They’ll probably be late again.'],
            ['perhaps / maybe / possibly', 'not sure', 'Maybe the shop has moved.'],
            ['probably not / definitely not', 'quite sure / sure it is not true', 'It probably won’t snow tomorrow.'],
          ] },
        ],
        [
          { t: 'text', md: 'When you explain something from what you can **see** or **hear**, use **It looks as if** / **It looks like** + a sentence, or **It sounds as if** / **It sounds like**: ***It looks as if** someone has been in the house.* ***It sounds like** they’re having an argument.*\n\nIn relaxed speech, people say **I bet** when they are very sure: ***I bet** he forgot!* And to give a possible reason, we often say **I suppose** or **I expect**: ***I expect** they were tired after the trip.*\n\nTo talk about a mystery, these words are useful: **a clue** (a thing that helps you find the answer), **evidence**, **a witness** (a person who saw something), **explain**, **an explanation**, **disappear**, **strange**, **solve a mystery**.' },
          { t: 'examples', items: [
            { s: '**It looks as if** it’s going to rain. Look at those clouds.', n: 'A guess from what you see.' },
            { s: '**It sounds like** the baby has woken up.', n: 'A guess from what you hear.' },
            { s: '**I bet** she knew about the party all along.', n: 'Relaxed: you are very sure.' },
            { s: 'The police found an important **clue** under the window.', n: '*a clue* helps you find the answer.' },
            { s: 'There’s no **explanation** for the strange lights in the sky.', n: '*explain* (verb), *explanation* (noun).' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['He will come probably.', 'He will probably come.', '*probably* goes before the main verb.'],
            ['She probably isn’t won’t come.', 'She probably won’t come.', 'One negative is enough.'],
            ['It looks like that someone was here.', 'It looks as if someone was here.', 'No *that* after *looks like / as if*.'],
            ['Maybe she might be ill.', 'Maybe she’s ill.', 'Use *maybe* or *might*, not both.'],
          ] },
          { t: 'dialogue', title: 'The empty house', lines: [
            { who: 'Mia', s: 'Look at the house on the corner. It looks as if nobody has lived there for years.' },
            { who: 'Tom', s: 'Probably. The garden is completely wild.' },
            { who: 'Mia', s: 'But there’s a light on upstairs. Maybe someone has moved in.' },
            { who: 'Tom', s: 'Or perhaps it’s on a timer. I bet the owners want people to think someone’s home.' },
            { who: 'Mia', s: 'That’s a good explanation. You should be a detective!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'She will probably call you tonight.', why: '*probably* goes after *will* and before the main verb.' },
            { a: 'It looks as if the shop has closed.', why: '*It looks as if* + a full sentence.' },
            { a: 'They probably won’t come to the party.', why: 'In the negative, *probably* goes before *won’t*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['a clue', 'something that helps you find the answer'],
            ['a witness', 'a person who saw what happened'],
            ['evidence', 'facts or things that show something is true'],
            ['disappear', 'go away so that nobody can see it'],
            ['solve a mystery', 'find the answer to a strange event'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Speaking part 2: you describe a photo. Choose the best sentence for each idea.', items: [
            { q: 'You are not sure where the people in the photo are.', o: ['It looks as if they’re in a station.', 'They are definitely in a station.', 'They must to be in a station.'], why: '*It looks as if* shows a guess from what you see.' },
            { q: 'A man is checking his watch and looks worried.', o: ['He might be late for something.', 'He is late for something, I know.', 'He mustn’t be on time.'], why: '*might be* is a natural guess about the photo.' },
            { q: 'You think the woman is probably on holiday.', o: ['She’s probably on holiday – she’s got a big suitcase.', 'She’s on holiday probably she’s got a big suitcase.', 'She probably is holiday.'], why: '*probably* after *be*, then the reason.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Speaking part 2 you describe a photo for about a minute. You cannot know everything about it, so the examiner wants to hear you **guess**: *It looks as if…*, *They might be…*, *She’s probably…*. Always give the reason you can see in the photo.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'It looks as if nobody lives there.' },
            { a: 'They’ll probably be late again.' },
            { a: 'I bet she knew all along.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The missing painting',
      about: 'Read a mystery, follow the clues, and explain what might have happened.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'In this lesson you will read a longer mystery story and use everything from the unit: guesses about the present and the past, and words like *probably* and *it looks as if*.\n\nGood readers of a mystery do what a detective does. They notice **clues**, think of **possible explanations**, and then **rule out** the ones that cannot be true: *It can’t have been the cleaner, because she was on holiday.*\n\nBefore you read, look at these words from the story: **a gallery** (a building where you can see paintings), **an alarm**, **a frame** (the wooden or metal edge around a picture), **a ladder**, **a copy**, **suspicious** (making you think someone has done something wrong).' },
          { t: 'table', caption: 'Thinking like a detective', explain: ['head', 'col0'], head: ['Step', 'Useful language'], rows: [
            ['notice a clue', 'Look at this… / Did you notice…?'],
            ['suggest an explanation', 'Someone might have… / Perhaps…'],
            ['rule something out', 'It can’t have been… because…'],
            ['reach a conclusion', 'So it must have been… / The answer is probably…'],
          ] },
        ],
        [
          { t: 'reading', title: 'The strange case of the missing painting', md: 'When the Hartley Gallery opened on Monday morning, the guard, Mr Lewis, noticed something strange. The frame of the most famous painting in the gallery, *The Blue Harbour*, was empty.\n\nThe police arrived within minutes. The alarm had not rung during the night, so the thief must have known how to switch it off. “Only three people know the code,” said the director. “Me, Mr Lewis and our cleaner, Mrs Dunn.” But Mrs Dunn had been visiting her sister in Scotland all weekend, so she can’t have taken it.\n\nThere was a ladder under a back window, and the police thought the thief might have climbed in that way. However, there were no footprints in the wet ground below the window. “It looks as if the ladder was put there to fool us,” said the detective.\n\nThen a young art student, who was visiting the gallery that morning, made a surprising discovery. “This painting in the storeroom,” she said, “is the real *Blue Harbour*. The one that has been on the wall for the last month is a copy. Somebody must have changed them weeks ago and taken the copy last night to hide it.”\n\nThe detective looked at the director, who had suddenly gone very pale. Only one person had a key to the storeroom.' },
          { t: 'ex', kind: 'choice', h: 'Read the story and choose the right answer.', items: [
            { q: 'Why does the detective think the alarm was switched off?', o: ['It did not ring during the night.', 'Mr Lewis heard it in the morning.', 'The cleaner told the police.'], why: '*The alarm had not rung during the night.*' },
            { q: 'Why can’t Mrs Dunn be the thief?', o: ['She was in Scotland all weekend.', 'She doesn’t know the alarm code.', 'She has no key to the gallery.'], why: 'She had been visiting her sister in Scotland.' },
            { q: 'What does the detective think about the ladder?', o: ['It was put there to make the police believe the wrong thing.', 'The thief used it to climb in.', 'Mr Lewis left it there.'], why: 'There were no footprints, so the ladder was *put there to fool us*.' },
            { q: 'Who does the end of the story suggest is the thief?', o: ['The director.', 'The art student.', 'Mr Lewis.'], why: 'The director went pale, and only one person had a key to the storeroom.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The thief must climbed in.', 'The thief must have climbed in.', 'Past guess: *must have* + past participle.'],
            ['It can’t be Mrs Dunn yesterday.', 'It can’t have been Mrs Dunn.', 'For the past, use *can’t have been*.'],
            ['Someone might have took it.', 'Someone might have taken it.', '*take – took – taken*.'],
            ['It looks as the ladder was a trick.', 'It looks as if the ladder was a trick.', 'Say *as if*, not only *as*.'],
          ] },
          { t: 'ex', kind: 'fix', h: 'A student wrote about the story. Find and fix the mistake.', items: [
            { s: 'The thief [must knew] the alarm code.', a: ['must have known'], why: '*must have* + past participle *known*.' },
            { s: 'Mrs Dunn [can’t have took] the painting.', a: ['can’t have taken'], why: 'Past participle of *take*: *taken*.' },
            { s: 'The director [might have plan] everything weeks ago.', a: ['might have planned'], why: 'After *might have*: the past participle *planned*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'The thief must have known the code.', extra: ['to', 'knew'], why: '*must have* + past participle, no *to*.' },
            { a: 'It can’t have been the cleaner.', extra: ['mustn’t', 'be'], why: '*can’t have been* for the past.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam, Reading part 5: choose the word that fits each gap.', items: [
            { q: 'Nobody knows exactly how the painting ___ out of the gallery.', o: ['got', 'took', 'made'], why: '*get out of* = leave a place.' },
            { q: 'The police think the thief ___ have had help from someone inside.', o: ['may', 'can', 'should'], why: '*may have had*: a possibility about the past.' },
            { q: 'There were no footprints, so the ladder was ___ a trick.', o: ['probably', 'possible', 'perhaps it'], why: 'An adverb is needed before the noun phrase: *probably a trick*.' },
            { q: 'In the ___, the real painting was found in the storeroom.', o: ['end', 'last', 'finish'], why: 'The phrase is *in the end*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Reading part 5 is a short text with gaps, and you choose one word for each. Often the answer depends on a **fixed phrase** (*in the end*, *get out of*) or on **grammar** (*may have had*). Read the whole sentence, not just the words next to the gap.' },
        ],
        [
          { t: 'text', md: 'Now explain the mystery in your own words. Use the detective language from this lesson: say what the thief **must have** done, what **might have** happened, and who **can’t have** done it. Then repeat the sentences after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'The thief must have known the code.' },
            { a: 'It can’t have been the cleaner.' },
            { a: 'Someone might have changed the paintings weeks ago.' },
            { a: 'It looks as if the ladder was a trick.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
      { q: 'The lights are on, so they ___ be at home.', o: ['must', 'can’t', 'mustn’t'], why: 'Almost sure it is true: *must*.' },
      { q: 'That ___ be our taxi. We booked it for eight, and it’s only seven.', o: ['can’t', 'must', 'mustn’t'], why: 'Almost sure it is not true: *can’t*.' },
      { q: 'Take a coat. It ___ get cold later.', o: ['might', 'must', 'can’t'], why: 'A possibility: *might*.' },
      { q: 'You ___ use your phone during the exam.', o: ['mustn’t', 'can’t be', 'might'], why: 'A rule, not a guess: *mustn’t*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with must have, might have or can’t have and the verb in brackets.', items: [
      { q: 'The road is wet. It ___ (rain) last night.', a: ['must have rained'], why: 'Almost sure: *must have* + past participle.' },
      { q: 'He ___ (go) to the gym. His bag is still here.', a: ['can’t have gone', 'couldn’t have gone'], why: 'Almost sure it did not happen.' },
      { q: 'I don’t know where she is. She ___ (take) the early train.', a: ['might have taken', 'may have taken', 'could have taken'], why: 'Only a possibility.' },
      { q: 'You climbed a mountain? You ___ (be) tired!', a: ['must have been'], why: 'Reacting to news: *must have been*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She [must to] be the new manager.', a: ['must'], why: 'No *to* after a modal.' },
      { s: 'They [must of] forgotten the meeting.', a: ['must have'], why: 'Write *have*, not *of*.' },
      { s: 'He will [come probably] tomorrow.', a: ['probably come'], why: '*probably* goes before the main verb.' },
      { s: 'Somebody [might have took] my umbrella.', a: ['might have taken'], why: 'Past participle *taken*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with a modal.', items: [
      { q: 'I’m sure he is Spanish.', cue: 'He', a: ['He must be Spanish.'], why: 'Almost sure: *must be*.' },
      { q: 'Perhaps she missed the bus.', cue: 'She', a: ['She might have missed the bus.', 'She may have missed the bus.', 'She could have missed the bus.'], why: 'A past possibility: *might have* + past participle.' },
      { q: 'I’m sure they didn’t see us.', cue: 'They', a: ['They can’t have seen us.', 'They couldn’t have seen us.'], why: 'Almost sure it did not happen: *can’t have*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['a clue', 'something that helps you find the answer'],
      ['a witness', 'a person who saw what happened'],
      ['suspicious', 'making you think someone did something wrong'],
      ['solve', 'find the answer to'],
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: '___ someone has been in my room. The window is open.', o: ['It looks as if', 'It looks', 'It looks like that'], why: '*It looks as if* + a sentence.' },
      { q: 'She ___ come tomorrow. She’s very busy.', o: ['probably won’t', 'won’t probably', 'probably isn’t won’t'], why: 'In the negative, *probably* goes before *won’t*.' },
      { q: 'It ___ been the cleaner. She was on holiday.', o: ['can’t have', 'mustn’t have', 'can’t'], why: '*can’t have been* for the past.' },
    ] },
  ],
};
