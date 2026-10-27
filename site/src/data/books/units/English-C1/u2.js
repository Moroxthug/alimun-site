// English C1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Memory and narrative',
  goal: 'Tell stories with style: emphasis, suspense and a clear time frame.',
  art: 'ghost',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['inversion', 'negative-adverbials', 'would-used-to', 'future-in-the-past', 'participle-clauses', 'fronting', 'storytelling', 'memoir'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Never have I…',
      about: 'Put the auxiliary before the subject after negative and limiting adverbials, for emphasis.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When a sentence begins with a **negative** or **limiting** adverbial (*never, rarely, hardly, not until, only then*), the subject and the auxiliary change places, as in a question. This is called **inversion**. It makes a statement more dramatic and is typical of storytelling, speeches and formal writing.' },
          { t: 'examples', items: [
            { s: '**Never have I** seen such a beautiful sunrise.', n: 'Neutral: *I have never seen such a beautiful sunrise.* The inversion adds drama.' },
            { s: '**Rarely do we** get the chance to travel together.', n: 'With the present or past simple, add *do*, *does* or *did*, as in a question.' },
            { s: '**Little did she know** that her life was about to change.', n: '*Little* means *not at all* here. A classic way to build suspense in a story.' },
            { s: '**Under no circumstances should you** open this door.', n: 'Very strong and formal: a warning or rule.' },
          ] },
        ],
        [
          { t: 'text', md: 'Some adverbials describe **time and sequence**, and are useful for saying that one event followed another very quickly, or happened only after something else.' },
          { t: 'table', caption: 'Inversion for time and sequence', explain: ['head', 'col0'], head: ['Meaning', 'Structure', 'Example'], rows: [
            ['B happened immediately after A', '*Hardly / Scarcely* + had + subject + past participle… *when*', 'Hardly **had we** sat down when the phone rang.'],
            ['B happened immediately after A', '*No sooner* + had + subject + past participle… *than*', 'No sooner **had I** arrived than it started to rain.'],
            ['B happened only after A', '*Not until* + clause, then inversion', 'Not until I got home **did I** notice the missing wallet.'],
            ['B happened only at that point', '*Only then / Only after / Only when*', 'Only when the lights came on **did we** see the damage.'],
            ['two things, both surprising', '*Not only* + inversion… *but (also)*', 'Not only **did he** forget my name, but he also called me Bethan.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'With *Not until* and *Only when* / *Only after*, the inversion is in the **second** clause, not the first: *Only after the meeting had ended **did I** realise my mistake.* And remember the partners: *hardly… when*, *no sooner… than*.' },
          { t: 'text', md: 'Inversion sounds unnatural in relaxed conversation if it is overused. Save it for a moment of emphasis: the turning point of a story, the end of a speech, a strong warning. One well-placed inversion is worth more than five.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Seldom ___ such a talented young musician.', o: ['have I heard', 'I have heard', 'I heard'], why: 'After *seldom*, invert the auxiliary and subject: *have I heard*.' },
            { q: 'No sooner had she left the house ___ she remembered her keys.', o: ['than', 'when', 'that'], why: '*No sooner* is always followed by *than*.' },
            { q: 'Hardly had the film started ___ the power went off.', o: ['when', 'than', 'then'], why: '*Hardly* and *scarcely* are followed by *when* (or *before*).' },
            { q: 'Not until he apologised ___ to speak to him again.', o: ['did she agree', 'she agreed', 'she did agree'], why: 'With *Not until*, the inversion comes in the second clause.' },
            { q: 'Little ___ that we were being watched.', o: ['did we realise', 'we realised', 'had realised we'], why: '*Little* + inversion with *did* for the past simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
            { q: 'I have never been so embarrassed in my life.', cue: 'Never', a: ['Never have I been so embarrassed in my life.', 'Never in my life have I been so embarrassed.'], why: '*Never* + *have I* + past participle.' },
            { q: 'As soon as we arrived, the guide began the tour.', cue: 'No sooner', a: ['No sooner had we arrived than the guide began the tour.'], why: '*No sooner had* + subject + participle + *than*.' },
            { q: 'We only understood the danger when we saw the map.', cue: 'Only when', a: ['Only when we saw the map did we understand the danger.'], why: 'The inversion goes in the second clause: *did we understand*.' },
            { q: 'He was rude, and he was also late.', cue: 'Not only', a: ['Not only was he rude, but he was also late.', 'Not only was he rude but he was also late.', 'Not only was he rude, he was also late.'], why: 'With *be*, invert *was* and the subject: *Not only was he…*' },
            { q: 'You must not tell anyone about this under any circumstances.', cue: 'Under no circumstances', a: ['Under no circumstances must you tell anyone about this.', 'Under no circumstances should you tell anyone about this.'], why: 'Invert the modal and the subject: *must you* or *should you*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Rarely [we see] snow in this part of the country.', a: ['do we see'], why: 'After *Rarely*, add *do* and invert: *do we see*.' },
            { s: 'No sooner had the guests arrived [when] the music started.', a: ['than'], why: '*No sooner* pairs with *than*.' },
            { s: 'Only after the exam [I realised] I had misread the question.', a: ['did I realise', 'did I realize'], why: 'After *Only after* + time phrase, invert the main clause.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Scarcely had I closed my eyes when the alarm went off.', why: '*Scarcely had* + subject + participle, then *when*.' },
            { a: 'At no time did anyone mention the extra cost.', why: '*At no time* + *did* + subject + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'We would spend whole summers there',
      about: 'Talk about past habits with would and used to, and about plans that changed with was going to and was about to.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Both *used to* and *would* describe **repeated actions** in the past that no longer happen. But only *used to* describes past **states**: *I used to have long hair*, never *I would have long hair*. *Would* is very common in nostalgic storytelling, once the past time has been made clear.' },
          { t: 'examples', items: [
            { s: 'Every August we **would** drive to the coast, and my father **would** sing the whole way.', n: 'Repeated actions. The time (*Every August*) is set first, then *would* carries the memory.' },
            { s: 'We **used to** live in a tiny flat above a bakery.', n: 'A past state: only *used to*, not *would*.' },
            { s: 'She **would** always leave her shoes by the door.', n: '*Would* + *always* can suggest a typical, slightly annoying habit.' },
            { s: 'I **didn’t use to** like olives, but now I love them.', n: 'Negative: *didn’t use to*. In questions: *Did you use to…?*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use either form for a single event or for how long something lasted: *I lived in Rome for three years*, not *I used to live in Rome for three years*. And *be used to* + *-ing* is different: it means *be accustomed to*.' },
        ],
        [
          { t: 'text', md: 'To talk about a **past plan or expectation**, use the future seen from the past. These forms often suggest that the plan **did not happen** or was interrupted.' },
          { t: 'table', caption: 'The future in the past', explain: ['head', 'col0'], head: ['Meaning', 'Example'], rows: [
            ['an intention that may have changed', 'I **was going to** call you, but I fell asleep.'],
            ['something on the point of happening', 'We **were about to** leave when the taxi arrived.'],
            ['very close, more formal', 'She **was on the point of** resigning when they offered her a raise.'],
            ['an arrangement that did not happen (formal)', 'They **were to have** married in June, but the wedding was cancelled.'],
            ['destiny: what really happened later', 'It was a decision he **would** regret for the rest of his life.'],
          ] },
          { t: 'text', md: '*Was to* + infinitive tells the reader what really happened later, and is typical of biographies: *She left the village at sixteen. She was never to return.* The perfect form, *was to have* + participle, means the plan failed.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
            { q: 'When I was a child, I ___ a dog called Pepper.', o: ['used to have', 'would have', 'was having'], why: '*Have* meaning own is a state: *used to*, not *would*.' },
            { q: 'In the evenings my grandmother ___ tell us stories about the war.', o: ['would', 'was going to', 'was about to'], why: 'A repeated action in the past, in a nostalgic description: *would*.' },
            { q: 'I ___ to the gym this morning, but it was closed.', o: ['was going to go', 'used to go', 'would go'], why: 'A plan that did not happen: *was going to*.' },
            { q: 'We ___ to give up when someone finally answered the door.', o: ['were about', 'used', 'would'], why: '*Be about to*: something on the point of happening.' },
            { q: 'He left for Australia at twenty. He ___ never to see his parents again.', o: ['was', 'used', 'would'], why: '*Was to* + infinitive tells us what really happened later.' },
            { q: 'I ___ live in Lisbon, but I moved back home in 2019.', o: ['used to', 'would', 'was about to'], why: '*Live* is a state here: only *used to* is possible.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Can you use *would* in the gap, or only *used to*?', groups: ['would or used to', 'only used to'], explain: ['groups'], items: [
            { s: 'On Sundays we ___ walk to the river.', g: 0, why: 'A repeated action: both forms are possible.' },
            { s: 'There ___ be a cinema on this corner.', g: 1, why: 'A past state (*there is*): only *used to*.' },
            { s: 'My uncle ___ bring us sweets every time he visited.', g: 0, why: 'A repeated action: both forms work.' },
            { s: 'I ___ believe in ghosts as a child.', g: 1, why: '*Believe* is a state verb: only *used to*.' },
            { s: 'She ___ wear a red scarf to every match.', g: 0, why: 'A repeated action: both forms work.' },
            { s: 'We ___ know everyone in the village.', g: 1, why: '*Know* is a state verb: only *used to*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a form of *be going to*, *be about to* or *be to have*.', items: [
            { q: 'I ___ (be going to / tell) you, but you found out first.', a: ['was going to tell'], why: 'A past intention that did not happen: *was going to* + infinitive.' },
            { q: 'The concert ___ (be to / take) place in May, but it was postponed.', a: ['was to have taken'], why: 'A formal arrangement that failed: *was to have* + participle.' },
            { q: 'Shh, the film ___ (be about to / start).', a: ['is about to start', '’s about to start'], why: '*Be about to*: something will happen very soon.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Having left early…',
      about: 'Use participle clauses and fronting to make a narrative tighter and more dramatic.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Participle clauses replace a full clause and make writing more compact. At B2 you met the basic forms. At C1, use the **perfect** forms to show that one action was **complete** before another, and the **passive** forms when the subject receives the action.' },
          { t: 'table', caption: 'Participle clauses for narrative', explain: ['head', 'col0'], head: ['Meaning', 'Form', 'Example'], rows: [
            ['at the same time, or because', '-ing', '**Hearing** a noise, she turned round.'],
            ['complete before the main action', 'having + participle', '**Having packed** the car, we set off.'],
            ['passive, complete before', 'having been + participle', '**Having been warned** about the roads, we drove slowly.'],
            ['passive, describes the subject', 'past participle', '**Exhausted** by the climb, he sat down.'],
            ['negative', 'not + participle', '**Not knowing** what to say, I stayed silent.'],
            ['background circumstance', 'with + object + -ing', '**With the rain pouring** down, we ran for shelter.'],
          ] },
        ],
        [
          { t: 'text', md: 'The subject of a participle clause must be the **same** as the subject of the main clause. If not, the sentence becomes confusing or comic: *Walking down the street, the trees looked beautiful* suggests that the trees were walking. This mistake is called a **dangling participle**.' },
          { t: 'examples', items: [
            { s: '**Having finished** the exam, the students left the room.', n: 'Correct: the students finished and the students left.' },
            { s: '**Having finished** the exam, the room was emptied.', n: 'Wrong: the room did not finish the exam. Say *When the exam had finished, the room was emptied.*' },
            { s: '**Not having been told** about the change, I went to the old office.', n: 'Negative + perfect + passive: nobody had told me before I went.' },
          ] },
        ],
        [
          { t: 'text', md: '**Fronting** moves part of a sentence to the beginning to create emphasis, contrast or suspense. After adverbs of place and direction, a short verb can come before the subject: *Down came the rain. Out ran the children. In the corner stood an old piano.* With a pronoun, keep the normal order: *Out they ran.*' },
          { t: 'examples', items: [
            { s: '**Strange as it may seem**, I have no memory of that day.', n: 'Adjective + *as* + clause = *Although it may seem strange*.' },
            { s: '**Tired though we were**, we kept walking.', n: 'Adjective + *though* + clause: a concession, fronted for emphasis.' },
            { s: '**That** part of the story I’ve never told anyone.', n: 'The object is fronted to contrast it with other parts of the story.' },
            { s: 'At the end of the corridor **stood a tall man** in a grey coat.', n: 'Place phrase, then verb, then subject: a classic way to introduce a character.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Fronting with place and inversion (*Into the room walked…*) works with verbs of position and movement: *be, stand, sit, lie, come, go, walk, run*. It is a literary device, so use it in stories rather than in emails.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a participle clause, starting with the words given.', items: [
            { q: 'After she had read the letter, she burst into tears.', cue: 'Having', a: ['Having read the letter, she burst into tears.'], why: 'The reading was complete before the crying: *having* + participle.' },
            { q: 'Because I didn’t know the way, I asked a stranger.', cue: 'Not', a: ['Not knowing the way, I asked a stranger.'], why: 'A negative reason: *not* + *-ing*.' },
            { q: 'He had been told to wait, so he sat down by the door.', cue: 'Having been', a: ['Having been told to wait, he sat down by the door.'], why: 'Passive and complete before: *having been* + participle.' },
            { q: 'The house was built in 1820 and has survived two floods.', cue: 'Built', a: ['Built in 1820, the house has survived two floods.'], why: 'A passive participle describes the subject: *Built in 1820, the house…*' },
            { q: 'Although it may sound strange, I enjoyed being ill as a child.', cue: 'Strange as', a: ['Strange as it may sound, I enjoyed being ill as a child.'], why: 'Adjective + *as* + clause, fronted.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Having lost my map, I had to ask for directions.', 'Having lost my map, directions were needed.', 'Having lost my map, a man helped me.'], why: 'Only in the first sentence is the subject of *having lost* (I) also the subject of the main clause.' },
            { q: '', o: ['Down came the rain.', 'Down the rain came it.', 'Down came it.'], why: 'With a noun subject, the verb can come first: *Down came the rain*. With a pronoun: *Down it came*.' },
            { q: '', o: ['Exhausted though she was, she finished the race.', 'Though exhausted she was, she finished the race.', 'Exhausted though was she, she finished the race.'], why: 'Adjective + *though* + subject + verb.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'In the doorway stood an old woman with a lamp.', extra: ['did', 'was'], why: 'Place phrase, then the verb *stood*, then the subject: no auxiliary needed.' },
            { a: 'With the clock ticking, she opened the envelope.', extra: ['was', 'had'], why: '*With* + object + *-ing* describes the background.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The house on Harbour Street',
      about: 'Read a memoir extract and look at how the writer creates time, emphasis and suspense.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'The house on Harbour Street', md: 'My grandmother’s house stood at the top of Harbour Street, so close to the sea that in winter the windows would be white with salt by morning. Every summer of my childhood, my brother and I were sent there for six weeks, and every summer my grandmother would greet us at the gate with the same words: “You’ve grown. Shoes off.”\n\nShe was not, by any ordinary measure, a warm woman. She used to keep the good biscuits in a tin on the highest shelf, and she would count them. She never hugged us, rarely laughed, and treated our questions as a kind of minor illness that would pass if ignored. And yet, strange as it may seem, I have never felt as safe anywhere as I did in that house.\n\nThe days had their own fixed shape. We would wake to the sound of her radio, eat porridge in silence, and then be released, like dogs, onto the beach. Having been told to stay away from the rocks, we went straight to the rocks. Having been told to be back by six, we were back by six, because nobody wanted to discover what would happen if we were not.\n\nIt was the summer I turned eleven that everything changed. I remember it as the summer of the storm, although it was only one night. Hardly had we gone to bed when the wind began to rise. By midnight it was shaking the whole house. Not knowing what else to do, I crept downstairs, and there, at the kitchen table, sat my grandmother, fully dressed, a candle in front of her and a box of photographs open beside it.\n\nI was about to go back upstairs when she saw me. I expected to be sent away. Instead, she pulled out a chair. For the next three hours, with the storm battering the windows, she told me about the man in the photographs: my grandfather, whom I had never met. He had been a fisherman. He had gone out one October morning in weather much like this, and he had not come back. Not until that night did I understand why she sat up every time the wind blew from the north.\n\nShe told the story flatly, the way she told us to take our shoes off, and only once did her voice change. “We were going to move inland,” she said. “He had found us a house with a garden. We were to have moved that spring.”\n\nBy the morning the storm had passed. She was back at the stove, the radio was on, and nothing was ever said about the night before. But from then on, there would always be an extra biscuit beside my plate. Little did I know that it was the last summer we would spend in that house. She sold it the following year and moved, finally, inland.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The children spent their summers at their grandmother’s house every year.', a: 't', why: '“Every summer of my childhood, my brother and I were sent there for six weeks.”' },
            { q: 'The grandmother often showed her affection physically.', a: 'f', why: '“She never hugged us.”' },
            { q: 'The children obeyed every rule their grandmother gave them.', a: 'f', why: 'Told to stay away from the rocks, “we went straight to the rocks”.' },
            { q: 'The writer’s brother also came downstairs during the storm.', a: 'ng', why: 'The text only mentions the writer going downstairs; it does not say what the brother did.' },
            { q: 'The grandparents had planned to leave the coast.', a: 't', why: '“We were going to move inland… We were to have moved that spring.”' },
            { q: 'The writer returned to the house the following summer.', a: 'f', why: 'It was “the last summer we would spend in that house”; she sold it the next year.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at how the story is told.', items: [
            { q: '“My grandmother would greet us at the gate.” What does *would* show here?', o: ['A repeated action in the past.', 'A plan that did not happen.', 'A polite request.'], why: '*Would* for past habits, in a nostalgic description.' },
            { q: 'Why does the writer say “We were to have moved that spring”?', o: ['To show that the move was arranged but never happened.', 'To show that the move happened that spring.', 'To show that the move was a regular event.'], why: '*Was to have* + participle: an arrangement that failed.' },
            { q: '“There, at the kitchen table, sat my grandmother.” Why is the verb before the subject?', o: ['To create suspense before revealing who was there.', 'Because it is a question.', 'Because the sentence is negative.'], why: 'Fronting a place phrase delays the subject and creates suspense.' },
            { q: '“Not until that night did I understand…” What does this sentence suggest?', o: ['The writer understood only at that moment, not before.', 'The writer never understood.', 'The writer understood long before that night.'], why: '*Not until* + inversion: the understanding happened only then.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the participle clauses.', items: [
            { s: '[Having been told to stay away from the rocks], we went straight to the rocks.', why: 'A passive perfect participle clause: the telling came first.' },
            { s: '[Not knowing what else to do], I crept downstairs.', why: 'A negative participle clause giving the reason.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrases from the text with their meanings.', pairs: [
            ['be released', 'be allowed to go free'],
            ['creep downstairs', 'go down quietly so nobody hears'],
            ['batter the windows', 'hit them again and again with force'],
            ['flatly', 'without showing emotion'],
            ['by any ordinary measure', 'judged in the usual way'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Never ___ so many people in one square.', o: ['have I seen', 'I have seen', 'I saw'], why: '*Never* at the start: invert *have* and the subject.' },
      { q: 'No sooner had we sat down ___ the waiter brought the bill.', o: ['than', 'when', 'then'], why: '*No sooner… than*.' },
      { q: 'When we were small, we ___ a big garden with an apple tree.', o: ['used to have', 'would have', 'were having'], why: 'A past state: *used to*, not *would*.' },
      { q: 'I ___ text you, but my phone died.', o: ['was going to', 'used to', 'would'], why: 'A plan that did not happen: *was going to*.' },
      { q: '___ the door, she switched on the light.', o: ['Having locked', 'Locked', 'Having been locked'], why: 'Active, complete before the main action: *having* + participle.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'I didn’t realise how serious it was until the doctor called.', cue: 'Not until', a: ['Not until the doctor called did I realise how serious it was.', 'Not until the doctor called did I realize how serious it was.'], why: 'The inversion goes in the second clause: *did I realise*.' },
      { q: 'We had only just started dinner when the guests arrived.', cue: 'Hardly', a: ['Hardly had we started dinner when the guests arrived.'], why: '*Hardly had* + subject + participle + *when*.' },
      { q: 'Although he was tired, he kept working.', cue: 'Tired', a: ['Tired as he was, he kept working.', 'Tired though he was, he kept working.'], why: 'Adjective + *as* or *though* + subject + verb.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Little [she knew] what was waiting for her.', a: ['did she know'], why: '*Little* + inversion with *did*: *Little did she know*.' },
      { s: 'My grandfather [would own] a small shop in the village.', a: ['used to own', 'owned'], why: '*Own* is a state verb: *used to own* or *owned*, not *would*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Having missed the bus, I walked to school.', 'Having missed the bus, the school was far away.', 'Having missed the bus, it was a long walk.'], why: 'The subject of the participle (I) must be the subject of the main clause.' },
      { q: '', o: ['In the garden stood a stone statue.', 'In the garden did stand a stone statue.', 'In the garden a stone statue did stood.'], why: 'Place phrase + verb + subject, with no auxiliary.' },
      { q: '', o: ['They were to have opened the shop in May, but the plan fell through.', 'They were to open the shop in May, and it was to have happened.', 'They used to have opened the shop in May.'], why: '*Were to have* + participle: an arrangement that did not happen.' },
    ] },
  ],
};
