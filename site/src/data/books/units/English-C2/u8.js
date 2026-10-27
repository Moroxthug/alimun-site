// English C2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Literature and criticism',
  goal: 'Read literary English closely and write about it.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary'], topics: ['metaphor', 'simile', 'personification', 'symbol', 'narrative voice', 'tone', 'close reading'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Metaphor, simile, symbol',
      about: 'Identify figurative language and explain what it does for the reader.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Literary writers use **figurative language**, words that mean more than their literal sense. A **metaphor** says that one thing *is* another: *The city was a furnace.* A **simile** compares with *like* or *as*: *The city was like a furnace.* **Personification** gives human qualities to a non-human thing: *The wind whispered through the trees.* A **symbol** is an object or image that stands for a larger idea: *a locked door* may stand for a closed future. **Imagery** is language that appeals to the senses: *the sour smell of old rain*.' },
          { t: 'table', caption: 'Figurative language', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['metaphor', 'says one thing is another', 'The city was a furnace.'],
            ['simile', 'compares using like or as', 'The city was like a furnace.'],
            ['personification', 'gives human qualities to things', 'The wind whispered through the trees.'],
            ['symbol', 'stands for a larger idea', 'a locked door for a closed future'],
            ['imagery', 'appeals to the senses', 'the sour smell of old rain'],
          ] },
        ],
        [
          { t: 'text', md: 'Naming a device is only the first step. The skill is to explain its **effect**: what does it make the reader see, feel or think? *The city was a furnace* suggests not only heat but also pressure and exhaustion. Always ask: **why this image, and not another?** A weak comment says *the writer uses a metaphor*. A strong one says *the furnace metaphor presents the city as a place that burns people up*.' },
          { t: 'tip', art: 'owl', md: 'Use verbs of effect: *suggests, evokes, conveys, reinforces, highlights, creates a sense of*. Avoid *shows* on its own. Say what the image suggests **to the reader**: *The simile evokes loneliness*.' },
          { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['metaphor', 'simile', 'personification'], explain: ['groups'], items: [
            { s: 'The classroom was a zoo.', g: 0, why: 'One thing is another: no *like* or *as*.' },
            { s: 'Her voice was as cold as ice.', g: 1, why: 'A comparison with *as*.' },
            { s: 'The sun smiled down on the village.', g: 2, why: 'Human quality given to the sun.' },
            { s: 'Time is a thief.', g: 0, why: 'A metaphor.' },
            { s: 'He ran like the wind.', g: 1, why: 'A comparison with *like*.' },
            { s: 'The old house groaned in the night.', g: 2, why: 'The house is given a human sound.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the effect?', items: [
            { q: '“The city was a furnace.” This metaphor suggests…', o: ['heat and exhaustion', 'a place for making metal', 'a quiet town'], why: 'It conveys oppressive heat and pressure.' },
            { q: '“The old house groaned in the night.” This personification creates…', o: ['a sense of age and unease', 'a sense of comfort', 'a sense of speed'], why: 'The house sounds like a person in discomfort.' },
            { q: '“A locked door” in a novel about a young person may symbolise…', o: ['a closed future', 'a broken lock', 'a new house'], why: 'A symbol stands for a larger idea.' },
            { q: '“She stood alone, like a lamp-post at dawn.” The simile suggests…', o: ['loneliness and being forgotten', 'brightness', 'noise'], why: 'A lamp-post at dawn has lost its purpose.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the device with its definition.', pairs: [
            ['metaphor', 'says one thing is another'],
            ['simile', 'compares using like or as'],
            ['personification', 'gives human qualities to things'],
            ['imagery', 'language that appeals to the senses'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the simile into a metaphor.', items: [
            { q: 'Her voice was as cold as ice.', cue: 'Her voice was', a: ['Her voice was ice.'], why: 'Remove *as… as*: the metaphor says it *is* ice.' },
            { q: 'The classroom was like a zoo.', cue: 'The classroom was', a: ['The classroom was a zoo.'], why: 'Remove *like*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'The wind whispered through the trees: this is an example of ___.', a: ['personification'], why: 'Human quality given to the wind.' },
            { q: 'A ___ stands for a larger idea, such as a locked door for a closed future.', a: ['symbol'], why: 'The definition of a symbol.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Voice and tone',
      about: 'Describe who is telling the story, how reliable they are and what tone they take.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Every story has a **narrator**. In **first person**, the narrator is a character: *I opened the door.* The reader sees only what the narrator sees. In **third person**, the narrator stands outside: *She opened the door.* A **limited** third-person narrator knows only one character’s thoughts; an **omniscient** narrator knows everything. A narrator is **unreliable** when the reader has reason to doubt them, because they lie, forget, or do not understand what they see.' },
          { t: 'table', caption: 'Narrative voice', explain: ['head', 'col0'], head: ['Type', 'What the reader gets', 'Example'], rows: [
            ['first person', 'one character’s view', 'I opened the door.'],
            ['third person limited', 'one character’s thoughts', 'She opened the door, afraid of what she would find.'],
            ['third person omniscient', 'many characters’ thoughts', 'She opened the door; he, upstairs, held his breath.'],
            ['unreliable narrator', 'a view that cannot be trusted', 'I have never told a lie, I assure you, except once or twice.'],
          ] },
        ],
        [
          { t: 'text', md: '**Tone** is the writer’s or narrator’s attitude to the subject: *serious, ironic, nostalgic, bitter, playful, detached*. It comes from word choice, rhythm and detail. **Register** is the level of formality. A narrator who calls a funeral *a rather dull affair* uses an ironic, detached tone; one who says *the day we buried her* sounds nostalgic and serious. Be careful to support a claim about tone with **evidence from the text**.' },
          { t: 'tip', art: 'owl', md: 'When you comment on tone, avoid vague words (*good, bad, interesting*). Use precise ones: *wry, resigned, tender, sardonic, solemn*. And always link the tone to a **word or phrase** in the text: *The tone is wry: “a rather dull affair” treats a funeral as a social event.*' },
          { t: 'ex', kind: 'sort', h: 'First or third person?', groups: ['first person', 'third person'], explain: ['groups'], items: [
            { s: 'I could not sleep that night.', g: 0, why: 'The narrator is a character: *I*.' },
            { s: 'She could not sleep that night.', g: 1, why: 'The narrator stands outside: *she*.' },
            { s: 'We walked home in silence.', g: 0, why: 'First person plural.' },
            { s: 'They walked home in silence.', g: 1, why: 'Third person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the tone?', items: [
            { q: '“It was, I suppose, a rather dull affair, the funeral: only forty people and the sandwiches were stale.”', o: ['wry and detached', 'tender and grieving', 'angry and bitter'], why: 'The understatement and flat detail suggest a wry tone.' },
            { q: '“I remember the summer light on her hands as she peeled apples, and how the kitchen smelled of cinnamon.”', o: ['nostalgic and tender', 'ironic and cold', 'angry and sharp'], why: 'Sensory memories suggest a nostalgic tone.' },
            { q: '“Nothing ever changes in this town, and nobody has the slightest wish to change it.”', o: ['bitter and resigned', 'excited and hopeful', 'playful and light'], why: 'Negative generalisation, with a tired attitude.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['wry', 'dry, with a hint of humour'],
            ['nostalgic', 'looking back fondly'],
            ['detached', 'not emotionally involved'],
            ['omniscient', 'knowing everything'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite from the first person into the third person limited.', items: [
            { q: 'I opened the door and was afraid of what I would find.', cue: 'She opened the door', a: ['She opened the door and was afraid of what she would find.'], why: 'Change *I* to *she* and *I would find* to *she would find*.' },
            { q: 'We walked home in silence.', cue: 'They walked', a: ['They walked home in silence.'], why: 'First person plural becomes third person plural.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'A narrator who knows everything about every character is ___.', a: ['omniscient'], why: 'The definition.' },
            { q: 'A narrator the reader cannot trust is ___.', a: ['unreliable'], why: 'The definition.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Point, evidence, explanation',
      about: 'Write a close reading paragraph that makes a point, quotes briefly and explains the effect.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **close reading** paragraph follows a clear pattern: **Point**, **Evidence**, **Explanation** (often called PEE). The **point** answers the question in your own words. The **evidence** is a short quotation, embedded in your sentence. The **explanation** says what the words do: what they suggest, and why the writer chose them. Example: *The narrator presents the house as hostile **(point)**: it “groaned in the night” **(evidence)**, a personification that makes the building seem to suffer and creates unease **(explanation)**.*' },
          { t: 'table', caption: 'Point, evidence, explanation', explain: ['head', 'col0'], head: ['Part', 'What it does', 'Useful language'], rows: [
            ['point', 'answers the question in your own words', 'The writer presents… / The narrator seems…'],
            ['evidence', 'a short, embedded quotation', 'it is “groaning”, which… / the phrase “…” suggests…'],
            ['explanation', 'explains the effect', 'This suggests / evokes / reinforces / creates a sense of…'],
          ] },
        ],
        [
          { t: 'text', md: 'Keep quotations **short**: a word or a phrase is better than a whole sentence. **Embed** them in your own sentence rather than introducing them with a colon: *The house is “groaning”, which gives it a human pain.* Then explain the **effect on the reader**. Finally, if possible, link to the writer’s wider purpose: *This reinforces the sense that the family is trapped.*' },
          { t: 'tip', art: 'owl', md: 'Do not just **retell** the story (“Then the girl opened the door”). A close reading is about **how** the writer creates meaning, not **what** happens. Use the present tense for what the text does: *The writer uses…*, not *used*.' },
          { t: 'ex', kind: 'sort', h: 'Which part of PEE is it?', groups: ['point', 'evidence', 'explanation'], explain: ['groups'], items: [
            { s: 'The writer presents the house as hostile.', g: 0, why: 'A point in your own words.' },
            { s: 'it “groaned in the night”', g: 1, why: 'A short quotation.' },
            { s: 'This personification makes the building seem to suffer and creates unease.', g: 2, why: 'It explains the effect.' },
            { s: 'The narrator seems nostalgic.', g: 0, why: 'A point.' },
            { s: 'the “summer light on her hands”', g: 1, why: 'A short quotation.' },
            { s: 'This sensory image evokes tenderness and loss.', g: 2, why: 'It explains the effect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which is the best sentence for a close reading?', items: [
            { q: '', o: ['The writer makes the house seem alive by saying it “groaned”, which creates unease.', 'The house groaned and then she went upstairs.', 'The writer uses a lot of interesting words.'], why: 'It has a point, a quotation and an explanation.' },
            { q: '', o: ['The cold simile “as cold as ice” suggests the speaker’s emotional distance.', 'The speaker says “as cold as ice”, and I think this is good.', 'Ice is cold and so is the speaker.'], why: 'It names the device, quotes briefly and explains the effect.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite as a close-reading sentence, using the words given.', items: [
            { q: 'The writer says the wind “whispered”, which is personification and it makes the scene calm.', cue: 'The personification of', a: ['The personification of the wind as “whispering” makes the scene calm.', 'The personification of the wind as whispering makes the scene calm.'], why: 'Embed the quotation and explain the effect.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the tense problem.', items: [
            { s: 'The writer [used] a metaphor to show that the city is hot.', a: ['uses'], why: 'Use the present tense for what the text does.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The orchard',
      about: 'Read a short story extract and a critical note on it.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'The orchard', md: 'STORY\n\nMy mother’s orchard was a quiet place, the kind of quiet that waits. In autumn the apples fell like small red coins into the grass, and I would walk among them, counting, as if I might one day be rich. The old gate groaned whenever I pushed it, as though it knew what I was about to do.\n\nI am not, whatever my brother says, a careless person. I only wished to see the orchard once more before the sale. The man from the agency had smiled as if he were doing me a favour.\n\nAt the far end, the oldest tree stood bent over the wall, an old woman looking for something she had dropped. I put my hand on the bark. It was warm, which made no sense, because the sun had gone. I stood there, I think, for an hour. Or for ever. It is hard to say.\n\nCRITICAL NOTE\n\nThe narrator’s calm tone is undercut by small signs of unease. The simile of falling apples “like small red coins” suggests the narrator’s wish for security, while the personification of the gate that “groaned… as though it knew” hints at guilt. The line “I am not, whatever my brother says, a careless person” suggests an unreliable narrator: the defensive denial makes the reader doubt it. The ending, with its uncertainty (“an hour. Or for ever”), leaves the reader unsure what has really happened.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The narrator visited the orchard to see it before the sale.', a: 't', why: '“I only wished to see the orchard once more before the sale.”' },
            { q: 'The narrator’s brother says the narrator is careless.', a: 't', why: '“Whatever my brother says.”' },
            { q: 'The old tree felt cold to the touch.', a: 'f', why: '“It was warm.”' },
            { q: 'The critical note says the narrator’s tone is completely calm.', a: 'f', why: '“Undercut by small signs of unease.”' },
            { q: 'The note suggests the narrator may be unreliable.', a: 't', why: '“Suggests an unreliable narrator.”' },
            { q: 'The orchard belonged to the narrator’s father.', a: 'ng', why: 'The story says “my mother’s orchard”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What device is “the apples fell like small red coins”?', o: ['simile', 'metaphor', 'personification'], why: 'A comparison with *like*.' },
            { q: 'What device is “The old gate groaned… as though it knew what I was about to do”?', o: ['personification', 'simile', 'chiasmus'], why: 'The gate is given human awareness.' },
            { q: 'What does the tree “an old woman looking for something she had dropped” suggest?', o: ['sadness and searching', 'anger and speed', 'joy and noise'], why: 'The image evokes loss and age.' },
            { q: 'Why might the narrator be unreliable?', o: ['The denial is defensive and the ending is unsure.', 'The narrator tells the whole truth.', 'The narrator is a child.'], why: 'The text raises doubt about the narrator’s account.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the figurative language.', items: [
            { s: 'The apples fell [like small red coins] into the grass.', why: 'A simile.' },
            { s: 'The old gate [groaned] whenever I pushed it, as though it knew what I was about to do.', why: 'Personification.' },
            { s: 'The oldest tree stood bent over the wall, [an old woman looking for something she had dropped].', why: 'A metaphor with a human image.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the critical note.', items: [
            { q: 'The narrator’s calm tone is ___ by small signs of unease.', a: ['undercut'], why: 'The critic’s word.' },
            { q: 'The defensive denial makes the reader ___ the narrator.', a: ['doubt'], why: 'The effect on the reader.' },
            { q: 'The ending leaves the reader ___ what has really happened.', a: ['unsure'], why: 'The effect of the ending.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'The gate is personified as groaning, which hints at guilt.', why: 'A close-reading sentence.' },
            { a: 'The simile suggests the narrator’s wish for security.', why: 'A close-reading sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '“The classroom was a zoo.” This is a…', o: ['metaphor', 'simile', 'symbol'], why: 'One thing is another.' },
      { q: '“The wind whispered.” This is…', o: ['personification', 'simile', 'a symbol'], why: 'Human quality given to the wind.' },
      { q: 'A narrator who knows all the characters’ thoughts is…', o: ['omniscient', 'unreliable', 'first person'], why: 'Knows everything.' },
      { q: 'Which is the best close-reading sentence?', o: ['The writer makes the house seem alive by saying it “groaned”, which creates unease.', 'The house groaned and she went upstairs.', 'The writer uses interesting words.'], why: 'Point, evidence, explanation.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['wry', 'dry, with a hint of humour'],
      ['nostalgic', 'looking back fondly'],
      ['detached', 'not emotionally involved'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'A ___ compares two things using *like* or *as*.', a: ['simile'], why: 'The definition.' },
      { q: 'A narrator the reader cannot trust is ___.', a: ['unreliable'], why: 'The definition.' },
      { q: 'A locked door standing for a closed future is a ___.', a: ['symbol'], why: 'The definition.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Her voice was as cold as ice.', cue: 'Her voice was', a: ['Her voice was ice.'], why: 'The metaphor.' },
      { q: 'I opened the door and was afraid.', cue: 'She opened the door', a: ['She opened the door and was afraid.'], why: 'Third person.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The writer [used] a metaphor to show that the city is hot.', a: ['uses'], why: 'Use the present tense for what the text does.' },
      { s: 'The narrator says “the city was a furnace”, which is a [simile].', a: ['metaphor'], why: 'There is no *like* or *as*.' },
    ] },
  ],
};
