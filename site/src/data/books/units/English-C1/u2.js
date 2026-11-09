// English C1, unit 2, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Memory and narrative: past habits and the future in the past, participle clauses and fronting in a story, the
// language of memory, and a memoir extract as a gapped text. Exam: C1 Advanced.
export const UNIT = {
  id: 'u2',
  title: 'Memory and narrative',
  goal: 'Tell stories about the past with would, used to and the future in the past, tighten a narrative with participle clauses and fronting, talk about memory precisely and follow how a memoir is built.',
  art: 'snail',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'listening', 'speaking'], topics: ['past-habits', 'future-in-the-past', 'participle-clauses', 'fronting', 'memory', 'narrative', 'memoir'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'It was to have been our year',
      about: 'Describe past habits with would, used to and keep -ing, and talk about plans seen from the past with was going to, was about to, was to and was to have.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At B2 you learned that **used to** and **would** both describe past habits. At C1 you need to choose between them for **style**, and to add the forms that show a speaker’s **attitude** to a habit.\n\n**Used to** works for actions and states that are no longer true: *I used to live by the sea. I used to swim every day.* **Would** works only for **repeated actions**, never for states (*I would live by the sea* is wrong). It sounds **nostalgic** and literary, and it needs a time already set: writers often open with *used to* and continue with *would*.\n\n*Every summer we **used to** go to my aunt’s farm. We**’d** get up at dawn, and she**’d** send us out to collect the eggs.*\n\nWhen a habit **annoyed** someone, English uses the past continuous with **always**, **forever** or **constantly**: *He **was always borrowing** money.* A stressed **would** criticises behaviour that was typical: *She **would** leave the door open, every single time.*' },
          { t: 'table', caption: 'Talking about past habits', explain: ['head', 'col1'], head: ['Form', 'Use', 'Example'], rows: [
            ['used to + infinitive', 'past habits and states, now over', 'We used to have a dog.'],
            ['would + infinitive', 'repeated actions only; nostalgic, written', 'On Sundays he’d cook for everyone.'],
            ['was always / forever + -ing', 'a habit that annoyed someone', 'She was forever losing her keys.'],
            ['stressed would', 'typical, irritating behaviour', 'He would say that, wouldn’t he?'],
            ['past simple', 'any finished past fact, with or without repetition', 'I walked to school every day.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **future in the past** describes what was in the future **at that time**. Each form moves one of the B2 future forms back in time.\n\n**Was going to** reports a plan or a prediction, and often suggests it did not happen: *I was going to call, but I forgot.* **Was about to** and **was on the point of** describe something that was going to happen immediately: *We were about to leave when the phone rang.* **Was due to** gives a timetable: *The ferry was due to sail at six.*\n\nTwo forms are typical of C1 narrative. **Was to** + infinitive tells the reader what **really did happen later**, like a look into the future: *It was a meeting that **was to change** her life.* **Was to have** + past participle describes a plan that was **not** carried out, in a formal tone: *The bridge **was to have opened** in May, but the work was delayed.* A simple **would** can do the same as *was to*: *She **would later describe** it as the best year of her life.*' },
          { t: 'examples', items: [
            { s: 'I **used to** be terrified of the dark.', n: 'A past state: *used to*, not *would*.' },
            { s: 'My father **would** sing as he shaved.', n: 'A repeated action, told with affection.' },
            { s: 'He **was forever** promising to fix the gate.', n: 'An irritating habit.' },
            { s: 'We **were on the point of** giving up when the bus appeared.', n: 'Something that almost happened.' },
            { s: 'Neither of them knew that they **were to meet** again forty years later.', n: '*Was to*: the narrator knows what happened next.' },
            { s: 'The concert **was to have taken place** in the cathedral.', n: 'A plan that did not happen, in formal style.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['When I was a child, I would have long hair.', 'When I was a child, I used to have long hair.', 'Having long hair is a state: *would* is only for actions.'],
            ['I was used to walk to school.', 'I used to walk to school.', '*Be used to* + *-ing* means *be accustomed to*; the habit form is *used to* + infinitive.'],
            ['We were about leaving when it rained.', 'We were about to leave when it rained.', '*About to* + infinitive.'],
            ['The bridge was to open in May, but it didn’t.', 'The bridge was to have opened in May, but it didn’t.', 'For a plan that failed, use *was to have* + past participle.'],
          ] },
          { t: 'dialogue', title: 'Looking at old photos', lines: [
            { who: 'Nadia', s: 'Look, that’s the flat we used to live in. We’d sit on that balcony every evening.' },
            { who: 'Rafael', s: 'And your brother was always climbing on the railing, I bet.' },
            { who: 'Nadia', s: 'He would do that. Mum was on the point of selling the flat because of it.' },
            { who: 'Rafael', s: 'Weren’t you going to move to Madrid that year?' },
            { who: 'Nadia', s: 'We were to have moved in the spring, but my grandmother fell ill. I didn’t know it then, but that was to be her last summer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the form that fits best.', items: [
            { q: 'As a child I ___ afraid of dogs.', o: ['used to be', 'would be', 'was being'], why: 'A past state: only *used to* works.' },
            { q: 'Every evening my grandfather ___ his pipe and tell us stories.', o: ['would light', 'was lighting', 'had lit'], why: 'A repeated past action, nostalgic: *would*.' },
            { q: 'The match ___ at three, but it was cancelled.', o: ['was to have started', 'was to start', 'would start'], why: 'A plan that did not happen: *was to have* + past participle.' },
            { q: 'I had no idea then that this young man ___ my husband.', o: ['was to become', 'was to have become', 'used to become'], why: 'What really happened later: *was to* + infinitive.' },
            { q: 'She ___ interrupting me, which drove me mad.', o: ['was forever', 'would be', 'used'], why: 'An irritating habit: *was forever* + *-ing*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given. Keep the meaning.', items: [
            { q: 'I almost left the party when Sam arrived.', cue: 'point', gap: 'I was ___ the party when Sam arrived.', a: ['on the point of leaving'], why: '*Be on the point of* + *-ing* = be about to.' },
            { q: 'They planned to marry in June, but they never did.', cue: 'have', gap: 'They were ___ in June.', a: ['to have married', 'to have got married', 'to have been married'], why: 'A failed plan: *was to have* + past participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text about a childhood memory and write one word in each gap.', items: [
            { q: 'When I was small, my family ___ to spend every August on a farm in the hills.', a: ['used'], why: '*Used to* + infinitive for a past habit.' },
            { q: 'My uncle ___ wake us at five, and we’d follow him out to the barn in our pyjamas.', a: ['would'], why: 'A repeated action, continued with *we’d*.' },
            { q: 'He was ___ telling us to keep quiet, but we never did.', a: ['always', 'forever', 'constantly'], why: 'An annoying habit: *was always* + *-ing*.' },
            { q: 'One morning we were just ___ to open the barn door when we heard a strange noise.', a: ['about'], why: '*Be about to*: something on the point of happening.' },
            { q: 'Inside, a cow was on the ___ of giving birth.', a: ['point', 'verge'], why: '*On the point of* + *-ing*.' },
            { q: 'My uncle had been ___ to call the vet, but there was no time.', a: ['going', 'meaning', 'planning'], why: 'A plan in the past that did not happen.' },
            { q: 'It was a morning that ___ to stay with me for the rest of my life.', a: ['was'], why: '*Was to* + infinitive: what happened later.' },
            { q: 'That calf, I later learned, ___ to have been sold, but my uncle never had the heart.', a: ['was'], why: '*Was to have been sold*: a plan that was not carried out.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** every gap needs exactly **one word**, and most of them are grammar words: auxiliaries, prepositions, articles, parts of fixed phrases. Read the whole sentence before you write, and check whether the word you need is part of a pattern such as *on the point of* or *was to have*. Contractions count as two words, so they never fill a gap.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'We’d spend whole summers at my grandmother’s house.' },
            { a: 'We were on the point of giving up when the bus appeared.' },
            { a: 'It was a decision that was to change my life.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Down the hill came the cart',
      about: 'Tighten a narrative with participle clauses, and change the order of a sentence for drama with fronting and inversion after place adverbials.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A **participle clause** is a short clause with no subject and no tense, built on a participle. Writers use it to pack two events into one sentence and to make a story move faster. The subject of the participle must be the **subject of the main clause**.\n\nThe **present participle** (*-ing*) shows an action at the same time, or a reason: *Opening the drawer, she found the letter.* *Not knowing what to say, I said nothing.* The **perfect participle** (*having* + past participle) shows that one action was finished **before** the other: *Having read the letter twice, she burned it.* The **past participle** has a passive meaning: *Built in 1890, the house had never been modernised.* *Asked about the money, he went pale.*\n\nYou can keep a conjunction for clarity: *After leaving school, While waiting for the bus, Once opened, Though warned of the danger.*' },
          { t: 'table', caption: 'Participle clauses', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['-ing', 'same time, or a reason', 'Hearing a noise, he turned round.'],
            ['not + -ing', 'a negative reason', 'Not wanting to wake her, I left quietly.'],
            ['having + past participle', 'an earlier action', 'Having lost the map, we asked a farmer.'],
            ['past participle', 'passive meaning', 'Shocked by the news, she sat down.'],
            ['noun + participle', 'a clause with its own subject (formal)', 'The rain having stopped, we set off.'],
          ] },
        ],
        [
          { t: 'text', md: '**Fronting** means moving a part of the sentence to the beginning to create drama or to link it to what came before. After an **adverbial of place or direction**, a verb of position or movement (*be, stand, sit, lie, come, go, run*) often comes **before** its subject: ***Down the hill came** the cart. **In the corner stood** an old piano.* This only happens when the subject is a **noun**: with a pronoun, the normal order stays: *Down the hill it came.* The same rule explains *Here comes the bus* and *Here it comes*.\n\nYou can also front a participle phrase to delay the subject: ***Sitting** at the back of the room **was** a man I had never seen.* And in speech, people front an object to contrast it: *Spiders I can cope with. Snakes I can’t.*' },
          { t: 'examples', items: [
            { s: '**Having said** goodbye, she walked out without looking back.', n: 'The goodbye came first.' },
            { s: '**Left** alone in the house, the boy began to explore.', n: 'Passive meaning: he had been left alone.' },
            { s: '**Up** the stairs **ran** the children, shouting.', n: 'Direction adverbial + verb + noun subject.' },
            { s: 'On the table **lay** a single white envelope.', n: 'Fronting makes the reader wait for the envelope.' },
            { s: 'Off **they** went, without a word.', n: 'With a pronoun subject, no inversion.' },
            { s: '**Standing** in the doorway **was** my father.', n: 'A fronted participle delays the surprise.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Walking down the street, a car hit me.', 'Walking down the street, I was hit by a car.', 'A dangling participle: the car was not walking. The subjects must match.'],
            ['Having finish the work, he left.', 'Having finished the work, he left.', '*Having* + past participle.'],
            ['Down the hill came it.', 'Down the hill it came.', 'No inversion with a pronoun subject.'],
            ['Being cold, I put on a coat.', 'Feeling cold, I put on a coat.', 'Natural but less common with *be*; *feeling* or *As I was cold* sounds better.'],
          ] },
          { t: 'reading', title: 'The night of the storm', md: 'Woken by the wind, I lay still and listened. Somewhere below, a door was banging. Not wanting to wake my sister, I crept down the stairs in the dark.\n\nAt the bottom stood my grandmother, a candle in her hand. Having lived through forty winters on that coast, she was not easily frightened, but that night her face was white. Out of the dark came a sound I would never forget: the roar of the sea breaking over the harbour wall.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the participle that fits.', items: [
            { q: '___ the bill, we left the restaurant.', o: ['Having paid', 'Paid', 'Being paid'], why: 'The paying came first: *having* + past participle.' },
            { q: '___ in 1920, the hotel still has its original lift.', o: ['Opened', 'Opening', 'Having opened'], why: 'Passive meaning: the hotel was opened.' },
            { q: '___ how to reply, she stayed silent.', o: ['Not knowing', 'Knowing not', 'Not known'], why: 'A negative reason: *Not* + *-ing*.' },
            { q: 'Into the room ___ , carrying a huge cake.', o: ['walked my mother', 'walked she', 'my mother did walk'], why: 'Direction adverbial + verb + noun subject.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Into the garden [ran they], laughing.', a: ['they ran'], why: 'With a pronoun subject, keep the normal order.' },
            { s: '[Having arrive] late, we missed the speeches.', a: ['Having arrived'], why: '*Having* + past participle.' },
            { s: 'Not [know] the way, we stopped to ask a farmer.', a: ['knowing'], why: 'A negative reason: *Not* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use between three and six words, including the word given, and do not change the word given.', items: [
            { q: 'After she had finished the report, she sent it to her manager.', cue: 'having', gap: '___ , she sent it to her manager.', a: ['Having finished the report', 'Having completed the report'], why: 'An earlier action: *Having* + past participle (four words).' },
            { q: 'Because I didn’t want to be late, I took a taxi.', cue: 'wanting', gap: '___ late, I took a taxi.', a: ['Not wanting to be'], why: 'A negative reason: *Not wanting to be* (four words).' },
            { q: 'An old wooden chest stood in the corner of the attic.', cue: 'stood', gap: 'In the corner of the attic ___ chest.', a: ['stood an old wooden'], why: 'Place adverbial fronted, then verb and noun subject (four words).' },
            { q: 'I only realised what had happened when I got home.', cue: 'until', gap: 'It ___ that I realised what had happened.', a: ['was not until I got home', 'wasn’t until I got home'], why: '*It was not until… that…* (six words, with *wasn’t* counted as two).' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 4 often tests **two changes at once**, for example a participle clause and a negative. Write the answer, then read the whole second sentence aloud in your head: if it does not sound like natural English, one of the two changes is missing.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor. Slow down before the subject.', tutor: 'sofia', items: [
            { a: 'Having said goodbye, she walked out without looking back.' },
            { a: 'Down the hill came an enormous lorry.' },
            { a: 'Standing in the doorway was my father.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'It rings a bell',
      about: 'Talk about memory precisely: collocations with memory and recollection, idioms for remembering and forgetting, and remember, remind and recall.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Memories are rarely simply good or bad. English describes them by how **clear** they are (*a vivid, clear, hazy, vague, dim* memory), by how they **feel** (*a fond, happy, painful, bitter* memory) and by how **long** they last (*a lasting, abiding, distant* memory). The formal word **recollection** is used with *a clear / distinct / vague recollection*, and with ***have no recollection of***: *I have no recollection of signing it.*\n\nThe verbs matter too. You **remember** something yourself; something or someone **reminds** you of it or to do it. **Recall** and **recollect** are more formal and suggest an effort: *I can’t recall her name.* **Look back on** and **reminisce about** mean thinking or talking about the past with pleasure. Memories can **come flooding back**, a song can **bring back** memories, and you can **jog someone’s memory** by giving them a clue.' },
          { t: 'table', caption: 'Idioms for remembering and forgetting', explain: ['head', 'col1'], head: ['Idiom', 'Meaning', 'Example'], rows: [
            ['ring a bell', 'seem familiar', 'Her name rings a bell.'],
            ['on the tip of my tongue', 'almost remembered', 'The word is on the tip of my tongue.'],
            ['slip your mind', 'be forgotten', 'Sorry, your birthday completely slipped my mind.'],
            ['jog someone’s memory', 'help them remember', 'Maybe this photo will jog your memory.'],
            ['a memory like a sieve', 'a very bad memory', 'I’ve got a memory like a sieve.'],
            ['in living memory', 'in the time people now alive remember', 'The worst flood in living memory.'],
            ['commit something to memory', 'learn it by heart', 'She committed the poem to memory.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Remind me to buy bread? I forgot it.', 'Remember to buy bread? I forgot.', 'You *remember*; someone else *reminds* you.'],
            ['This song remembers me of my school.', 'This song reminds me of my school.', '*Remind someone of something*.'],
            ['I have a dark memory of the house.', 'I have a dim memory of the house.', 'An unclear memory is *dim* or *hazy*.'],
            ['I don’t have any recollection to sign it.', 'I have no recollection of signing it.', '*Recollection of* + *-ing*.'],
            ['Your name rings me a bell.', 'Your name rings a bell.', 'No person after *ring*.'],
          ] },
          { t: 'dialogue', title: 'Do you remember…?', lines: [
            { who: 'Emma', s: 'Do you remember that teacher who used to keep a parrot in the classroom?' },
            { who: 'Joe', s: 'It rings a bell, but only vaguely. Mr… no, it’s on the tip of my tongue.' },
            { who: 'Emma', s: 'Mr Fenwick! I have such a vivid memory of that bird shouting during exams.' },
            { who: 'Joe', s: 'Oh, that’s jogged my memory. It all comes flooding back now.' },
            { who: 'Emma', s: 'Funny how you can forget something for twenty years and then remember every detail.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the key word?', items: [
            { key: 'a … memory', o: ['vivid', 'hazy', 'fond', 'tall', 'dim'], a: [0, 1, 2, 4], why: 'Memories are vivid, hazy, fond or dim; not *tall*.' },
            { key: 'a … recollection', o: ['distinct', 'vague', 'clear', 'loud'], a: [0, 1, 2], why: '*Recollection* collocates with how clear it is.' },
            { key: 'bring back', o: ['memories', 'the past', 'a reminder', 'a bell'], a: [0, 1], why: 'Something *brings back memories* or *the past*.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete each sentence with a word from the bank.', extra: ['remembered', 'tongue'], items: [
            { q: 'Sorry, the meeting completely ___ my mind.', a: 'slipped', why: '*Slip your mind* = be forgotten.' },
            { q: 'This old photo might ___ your memory.', a: 'jog', why: '*Jog someone’s memory*.' },
            { q: 'The smell of the bakery ___ me of my grandmother.', a: 'reminds', why: '*Remind someone of*.' },
            { q: 'I have no ___ of ever meeting him.', a: 'recollection', why: '*Have no recollection of*.' },
            { q: 'It was the coldest winter in living ___ .', a: 'memory', why: '*In living memory*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Three extracts', md: '**Extract one.** You hear a man talking about a school reunion. “I was dreading it, to be honest. I’d been telling myself for weeks that I wouldn’t know anyone. Then I walked in and a woman called my name, and it took me a full minute. Her face rang a bell, but it was only when she laughed that it all came back: we used to sit together in chemistry. What struck me was that she remembered things about me I’d completely forgotten, which was a little humbling.”\n\n**Extract two.** You hear a woman talking about her grandfather. “He had a memory like a sieve for everyday things. He was forever losing his glasses. But ask him about the war and he could recall the name of every man in his unit. I used to think it was selective. Now I think the old memories were simply rehearsed so often that they’d become a kind of story, polished every time he told it.”\n\n**Extract three.** You hear part of a radio programme about memory. “We tend to assume that a vivid memory is an accurate one. In fact, the research suggests that the confidence we feel about a memory and its accuracy are only loosely connected. Each time we recall an event, we rebuild it, and small details shift. That doesn’t make our memories worthless, but it should make us a little more modest about them.”' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 1): read the three extracts, as if you were hearing them, and choose the answer which fits best.', items: [
            { q: 'Extract one. How did the man feel before the reunion?', o: ['anxious that he would feel out of place', 'excited to see his old friends', 'annoyed that he had been invited'], why: '*I was dreading it… I wouldn’t know anyone.*' },
            { q: 'Extract one. What surprised him at the reunion?', o: ['how much the woman remembered about him', 'how much the woman had changed', 'that nobody recognised him'], why: '*She remembered things about me I’d completely forgotten.*' },
            { q: 'Extract two. What does the woman now believe about her grandfather’s memory?', o: ['His old memories had been shaped by retelling.', 'He chose to forget unpleasant events.', 'His memory was better than he admitted.'], why: '*Rehearsed so often… polished every time he told it.*' },
            { q: 'Extract two. What does *a memory like a sieve* tell us about him?', o: ['He forgot ordinary, everyday things.', 'He could not remember the war.', 'He remembered faces but not names.'], why: 'A sieve lets things through: he kept *losing his glasses*.' },
            { q: 'Extract three. What is the speaker’s main point?', o: ['Feeling sure of a memory does not make it accurate.', 'Vivid memories are usually correct.', 'Most of our memories are invented.'], why: '*Confidence… and its accuracy are only loosely connected.*' },
            { q: 'Extract three. What is the speaker’s attitude to human memory?', o: ['It is valuable but should be treated with caution.', 'It is completely unreliable.', 'It improves each time we use it.'], why: '*That doesn’t make our memories worthless, but it should make us a little more modest.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Listening Part 1** you hear three short, unrelated extracts, each twice, with **two questions** on each. The questions often ask about **feelings, attitude or purpose**, not facts. Listen for the speaker’s overall view: a single word like *dreading* or *modest* is often the key.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Her name rings a bell, but I can’t place her.' },
            { a: 'I have no recollection of saying that.' },
            { a: 'That song always brings back memories of my first job.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The boat he never sailed',
      about: 'Read a memoir extract with paragraphs removed, put them back as in C1 Advanced Reading Part 7, and see how the writer uses the grammar of the unit.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'In a **memoir**, the writer moves between the past as it was lived and the present in which it is understood. Watch for the unit’s grammar doing this work: *would* for habits, *was to* for what happened later, participle clauses and fronting for the moments that matter.\n\nSix paragraphs have been removed from the extract. Read the main text first, then the paragraphs on the next page.' },
          { t: 'reading', title: 'The boat he never sailed', md: 'My grandfather kept a boat he never sailed. It sat on a trailer beside his house in Kilbrae, its paint flaking a little more each winter, and every June he would announce that this was the year he would take it out. It never was. I was eight when I first heard the promise and nineteen when I last heard it, and it did not occur to me until much later that he had never meant to keep it.\n\n**Gap 1**\n\nI asked him about it only once. Sitting on the harbour wall one evening, legs dangling over the water, I wanted to know why a man who loved the sea would not go out on it. He looked at me for a long time, as if deciding how much an eleven-year-old could be trusted with, and then he changed the subject.\n\n**Gap 2**\n\nI had no recollection of anyone mentioning this, and when I said so, she seemed surprised. It was not a secret, she said; it was simply not discussed. Everyone in the town had known. Everyone, it seemed, except me.\n\n**Gap 3**\n\nI went back to Kilbrae the following spring, meaning to look at the boat again. I was too late. The house had been sold, and the trailer stood empty at the side of the road, its tyres flat.\n\n**Gap 4**\n\nI like to think they did. I have a vivid picture, which owes nothing to memory and everything to wishful thinking, of that boat out on the water at last, its new paint bright against the grey.\n\n**Gap 5**\n\nHe did not hear me come in, and I did not stay. I have never told anyone about it until now. It seemed, even then, to belong to him.\n\n**Gap 6**\n\nI am older now than he was that summer. I have no boat and no shed. But I have, I find, a habit of making promises I know I will not keep, and I have stopped apologising for it.' },
        ],
        [
          { t: 'reading', title: 'The removed paragraphs', md: '**A** The answer, when it came, came from my mother, years later and almost by accident. Her father, she told me, had worked on a fishing boat until the winter of 1962, when it went down off the point in a storm. Three men had been on board. Only he had come home.\n\n**B** The new owner remembered the boat well. She had sold it, she told me, to a couple from the mainland who were going to restore it and sail it round the islands. Whether they ever did, she could not say.\n\n**C** Perhaps that is what he was doing all those summers: not failing to keep a promise, but keeping a different one. Having lost two friends to the sea, he was not going to give it the chance to take him as well.\n\n**D** What he did instead was tinker. He would spend whole mornings in the shed, emerging at lunchtime with oil on his hands and an air of having achieved something. My grandmother, who had long since stopped asking what, would put his plate down without a word.\n\n**E** The bridge to the mainland was to have opened that summer, but the work dragged on for two more years, and the ferry that had carried my grandfather to market every week of his working life was eventually sold to a company in Norway.\n\n**F** Knowing it changed everything I remembered. The boat that was never launched, the hours in the shed, the long silence on the harbour wall: it all came flooding back, and all of it now meant something else.\n\n**G** But the picture I return to most often is a different one, and it is a real memory, though a hazy one. Early one morning, the summer I was ten, I woke before anyone else and went down to the shed. My grandfather was already there, not working, simply sitting on an upturned box with his hand resting on the side of the boat, the way you might rest your hand on a friend’s shoulder.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 7): choose the paragraph (A to G) that fits each gap. There is one extra paragraph that you do not need.', items: [
            { q: 'Which paragraph fits gap 1?', o: ['D', 'A', 'E', 'G'], why: '*What he did instead* follows *he had never meant to keep* the promise to sail.' },
            { q: 'Which paragraph fits gap 2?', o: ['A', 'B', 'F', 'C'], why: '*The answer, when it came* follows *he changed the subject*; *this* in the next paragraph is the shipwreck.' },
            { q: 'Which paragraph fits gap 3?', o: ['F', 'C', 'E', 'D'], why: '*Knowing it* refers to the story *everyone… except me* had known.' },
            { q: 'Which paragraph fits gap 4?', o: ['B', 'E', 'G', 'A'], why: 'The empty trailer leads to the new owner; *they* in *I like to think they did* is the couple.' },
            { q: 'Which paragraph fits gap 5?', o: ['G', 'C', 'D', 'F'], why: '*But the picture I return to* contrasts with the imagined picture; *He did not hear me come in* follows the shed.' },
            { q: 'Which paragraph fits gap 6?', o: ['C', 'E', 'B', 'A'], why: '*That is what he was doing* explains the scene in the shed; it leads to the narrator’s own promises.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 7**, look at both sides of each gap. Pronouns (*they, this, it*), contrast words (*But, instead*) and repeated ideas link a paragraph to the text before **and** after it. The extra paragraph usually fits the topic but has **no link** on either side: here, the bridge in **E** is never mentioned again.' },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the forms from this unit in sentences from the memoir.', items: [
            { s: 'Every June he [would announce] that this was the year.', why: '*Would* for a repeated past action.' },
            { s: '[Sitting] on the harbour wall one evening, I wanted to know why.', why: 'A participle clause: the narrator was sitting.' },
            { s: '[Having lost] two friends to the sea, he was not going to give it the chance.', why: 'A perfect participle: the loss came first.' },
            { s: 'The bridge [was to have opened] that summer.', why: 'A plan that was not carried out.' },
          ] },
          { t: 'text', md: 'Now tell a memory of your own: a person, a place, a habit. Use *would* or *used to*, one participle clause and one phrase about memory (*I have a vivid memory of…*, *It only came back to me years later*).' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Every June he would announce that this was the year.' },
            { a: 'I have a hazy memory of the house, but a vivid one of the garden.' },
            { a: 'It was only years later that I understood what he meant.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the form that fits best.', items: [
      { q: 'We ___ a cottage in Wales when I was little.', o: ['used to have', 'would have', 'were having'], why: 'A past state: *used to*.' },
      { q: 'The wedding ___ in June, but they postponed it.', o: ['was to have taken place', 'was to take place', 'would take place'], why: 'A plan that did not happen.' },
      { q: 'I ___ leave when the phone rang.', o: ['was about to', 'was on the point to', 'used to'], why: '*Be about to* + infinitive.' },
      { q: '___ the door, she found a parcel on the step.', o: ['Opening', 'Opened', 'Having been opened'], why: 'Same time, active: *Opening*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Little did they know that they ___ to meet again in Paris.', a: ['were'], why: '*Were to* + infinitive: what happened later.' },
      { q: 'In the doorway ___ a tall man in a grey coat.', a: ['stood', 'was'], why: 'Place adverbial + verb + noun subject.' },
      { q: 'I have no ___ of agreeing to that.', a: ['recollection', 'memory'], why: '*Have no recollection of* + *-ing*.' },
      { q: 'His name rings a ___, but I can’t picture him.', a: ['bell'], why: '*Ring a bell* = seem familiar.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use between three and six words, including the word given.', items: [
      { q: 'After he had locked the door, he went to bed.', cue: 'having', gap: '___ , he went to bed.', a: ['Having locked the door'], why: 'An earlier action: *Having* + past participle.' },
      { q: 'I forgot to send the email.', cue: 'slipped', gap: 'Sending the email ___ .', a: ['completely slipped my mind', 'slipped my mind', 'had slipped my mind'], why: '*Slip someone’s mind* = be forgotten.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the correct sentence.', items: [
      { q: '', o: ['This photo reminds me of our first holiday.', 'This photo remembers me of our first holiday.', 'This photo reminds me our first holiday.'], why: '*Remind someone of something*.' },
      { q: '', o: ['Down the road they ran.', 'Down the road ran they.', 'Down the road did they run.'], why: 'No inversion with a pronoun subject.' },
      { q: '', o: ['Walking home, I saw a fox.', 'Walking home, a fox crossed my path and I saw it.', 'Walking home, the fox was seen.'], why: 'The person walking must be the subject.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'As a child I [would be] very shy.', a: ['used to be', 'was'], why: '*Would* is not used for states.' },
      { s: 'We were [on the point to] leave.', a: ['about to'], why: '*About to* + infinitive; *on the point of* takes *-ing*.' },
      { s: 'I have a very [dark] memory of that year; I was only three.', a: ['dim', 'hazy', 'vague'], why: 'An unclear memory is *dim, hazy* or *vague*.' },
    ] },
  ],
};
