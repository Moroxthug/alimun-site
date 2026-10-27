// English C1 for travel, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'The art of travel writing',
  goal: 'Describe places vividly and precisely, in speech and in writing.',
  art: 'suitcase',
  tags: { skills: ['writing', 'vocabulary', 'grammar', 'reading'], topics: ['descriptive-verbs', 'compound-adjectives', 'figurative-language', 'locative-inversion', 'participle-clauses', 'travel-writing'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Words that paint a picture',
      about: 'Use precise verbs, compound adjectives and images to describe a place.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Good travel writing rarely depends on adjectives like *beautiful* or *amazing*. It shows the place through **precise verbs**: instead of saying that a village *is* on a hill, the writer says it *clings to* the hillside or *nestles* in a valley. Each verb adds a picture and a feeling.' },
          { t: 'examples', items: [
            { s: 'The village **nestles** at the foot of the mountains.', n: '*Nestle*: lie in a sheltered, comfortable position. It feels safe and cosy.' },
            { s: 'Grey tower blocks **loom** over the old harbour.', n: '*Loom*: appear large and a little threatening.' },
            { s: 'The city **sprawls** for miles along the coast.', n: '*Sprawl*: spread out in an untidy way, often too far.' },
            { s: 'A narrow path **meanders** down to the beach.', n: '*Meander*: follow a slow, winding course, like a river.' },
            { s: 'White houses **cling to** the cliffs above the sea.', n: '*Cling to*: hold on tightly. The houses seem to be at risk of falling.' },
            { s: 'Tiny islands **dot** the bay.', n: '*Dot*: appear here and there across an area.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Compound adjectives for places', explain: ['head', 'col1'], quiz: true, head: ['Adjective', 'Meaning'], rows: [
            ['sun-drenched', 'full of strong sunshine'],
            ['tree-lined', 'with trees along both sides'],
            ['windswept', 'open to strong winds, often wild and empty'],
            ['centuries-old', 'built or started hundreds of years ago'],
            ['run-down', 'old and in bad condition because no one has cared for it'],
            ['picture-postcard', 'very pretty, almost too perfect to be real'],
            ['off-putting', 'making you not want to go there'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some phrases are used so often that they say nothing: *a hidden gem*, *a melting pot*, *a land of contrasts*. Editors call them **clichés**. Ask yourself what you actually saw, heard or smelt, and describe that instead.' },
        ],
        [
          { t: 'text', md: 'Writers also use **figurative language**. A **simile** compares two things with *like* or *as*. A **metaphor** says one thing *is* another. **Personification** gives a place human actions or feelings. Used carefully, one strong image is more powerful than a list of adjectives.' },
          { t: 'examples', items: [
            { s: 'The old town is **like a maze**: every street seems to lead back to the square.', n: 'A simile with *like*.' },
            { s: 'By August, the beach is **a sea of umbrellas**.', n: 'A metaphor: the umbrellas are so many that they look like water.' },
            { s: 'The city **wakes up slowly**, yawning and stretching in the morning light.', n: 'Personification: the city behaves like a person.' },
            { s: 'The market **hums** with conversation from dawn.', n: 'A sound verb: *hum* suggests steady, busy activity.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the verb that fits best.', items: [
            { q: 'The suburbs ___ for miles in every direction, with no clear centre.', o: ['sprawl', 'nestle', 'cling'], why: '*Sprawl*: spread out untidily over a large area.' },
            { q: 'A small chapel ___ in a quiet valley, sheltered from the wind.', o: ['nestles', 'looms', 'sprawls'], why: '*Nestle*: lie in a sheltered, protected place.' },
            { q: 'The volcano ___ over the town, dark and silent.', o: ['looms', 'dots', 'meanders'], why: '*Loom*: appear large and threatening.' },
            { q: 'Fishing boats ___ the harbour like scattered toys.', o: ['dot', 'loom over', 'cling'], why: '*Dot*: appear here and there across an area.' },
            { q: 'The river ___ lazily through the fields.', o: ['meanders', 'clings', 'towers'], why: '*Meander*: follow a slow, winding course.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'tree-lined', o: ['avenue', 'boulevard', 'storm', 'coffee'], a: [0, 1], why: 'Streets can be *tree-lined*; a storm or a coffee cannot.' },
            { key: 'windswept', o: ['coast', 'moor', 'cellar', 'kitchen'], a: [0, 1], why: '*Windswept* describes open, exposed places outdoors.' },
            { key: 'centuries-old', o: ['tradition', 'monastery', 'smartphone', 'traffic jam'], a: [0, 1], why: 'Only things that last a very long time can be *centuries-old*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is it a simile, a metaphor or personification?', groups: ['simile', 'metaphor', 'personification'], explain: ['groups'], items: [
            { s: 'The streets are as quiet as a library.', g: 0, why: 'A comparison with *as … as*: a simile.' },
            { s: 'The mountains stood guard over the valley.', g: 2, why: 'Mountains cannot stand guard: they act like people.' },
            { s: 'The station was an oven by midday.', g: 1, why: 'It says the station *was* an oven, without *like*: a metaphor.' },
            { s: 'Lanterns hung in the trees like ripe fruit.', g: 0, why: 'A comparison with *like*: a simile.' },
            { s: 'The wind whispered through the empty square.', g: 2, why: 'Whispering is a human action: personification.' },
            { s: 'The bay was a sheet of glass at dawn.', g: 1, why: 'The bay *was* glass: a metaphor for very still water.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Which phrase is a cliché that a careful writer would avoid?', items: [
            { o: ['a hidden gem', 'a lane barely wide enough for a cart', 'the smell of bread from an open doorway'], why: '*A hidden gem* is used so often that it no longer shows the reader anything.' },
            { o: ['a land of contrasts', 'a harbour that smells of diesel and fish', 'shutters painted the green of old bottles'], why: '*A land of contrasts* could describe almost anywhere.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Below the castle lies the old town',
      about: 'Set the scene with inversion after place adverbials and with participle clauses.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To lead the reader through a place, writers often put the **place first** and the subject last: *Below the castle lies the old town.* After an adverbial of place or direction, verbs like *be, lie, stand, sit, rise* and *come* can go **before the subject**. This keeps the important new information, the thing the reader is about to see, until the end.' },
          { t: 'examples', items: [
            { s: 'At the top of the hill **stands a ruined tower**.', n: 'Normal order: *A ruined tower stands at the top of the hill.* The inversion builds a little suspense.' },
            { s: 'Beyond the bridge **lie the vineyards**.', n: 'The verb agrees with the subject after it: *lie*, plural.' },
            { s: 'Next to the fountain **was a tiny café** with three tables.', n: 'Common with *be* in descriptions.' },
            { s: 'Round the corner **came a procession** of drummers.', n: 'With verbs of movement, the scene seems to happen in front of the reader.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use this inversion with a pronoun subject. Say *Here it comes* and *Above us it rose*, not *Here comes it*. And do not add *do* or *did*: *Below the castle lies the town*, not *Below the castle does the town lie*.' },
        ],
        [
          { t: 'text', md: 'A **participle clause** packs extra information into the start of a sentence. An *-ing* participle describes something happening at the same time or a reason. A **past participle** has a passive meaning. *Having* + past participle shows that one action came first.' },
          { t: 'examples', items: [
            { s: '**Perched on a cliff**, the monastery can only be reached on foot.', n: 'Past participle, passive meaning: the monastery *is perched* on a cliff.' },
            { s: '**Built in the twelfth century**, the walls still surround the town.', n: 'Passive: the walls *were built* then.' },
            { s: '**Wandering through the market**, I noticed a stall selling old maps.', n: '*-ing*: two things at the same time.' },
            { s: '**Having climbed for three hours**, we finally saw the lake below us.', n: '*Having* + past participle: the climbing came first.' },
          ] },
          { t: 'tip', art: 'cat', md: 'The participle clause must describe the **subject** of the main clause. *Walking along the beach, the sunset was beautiful* says that the sunset was walking. Write instead: *Walking along the beach, we watched a beautiful sunset.*' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
            { q: 'A little stone church stands in the middle of the square.', cue: 'In the middle of the square', a: ['In the middle of the square stands a little stone church.'], why: 'Place adverbial first, then the verb, then the subject.' },
            { q: 'The fields of lavender lie beyond the river.', cue: 'Beyond the river', a: ['Beyond the river lie the fields of lavender.'], why: 'The verb stays plural, *lie*, to agree with *fields*.' },
            { q: 'An old man with a donkey came down the path.', cue: 'Down the path', a: ['Down the path came an old man with a donkey.'], why: 'With a verb of movement, the subject goes after the verb.' },
            { q: 'The hotel was built on the ruins of a fort, and it has walls a metre thick.', cue: 'Built', a: ['Built on the ruins of a fort, the hotel has walls a metre thick.'], why: 'The past participle clause replaces *the hotel was built*.' },
            { q: 'We had walked all day, so we fell asleep at once.', cue: 'Having', a: ['Having walked all day, we fell asleep at once.'], why: '*Having* + past participle: the walking came first and is the reason.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Perching] high above the valley, the castle is visible for miles.', a: ['Perched'], why: 'The castle *is perched* there: passive meaning, past participle.' },
            { s: 'At the end of the pier [stand] a small lighthouse.', a: ['stands'], why: 'The subject, *a small lighthouse*, is singular: *stands*.' },
            { s: '[Have] lost our map, we asked a shepherd for directions.', a: ['Having'], why: 'The perfect participle is *Having* + past participle.' },
            { s: 'Across the square [did run] a crowd of children.', a: ['ran'], why: 'Inversion after a place adverbial does not use *do* or *did*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Some words do not belong.', items: [
            { a: 'Above the harbour rises a wall of cliffs.', extra: ['does', 'it'], why: 'No *do* and no pronoun in this kind of inversion.' },
            { a: 'Hidden behind a gate, the garden is easy to miss.', extra: ['Hiding', 'being'], why: 'The garden *is hidden*: past participle.' },
            { a: 'Having checked in, we went straight to the beach.', extra: ['Have', 'had'], why: '*Having* + past participle shows the order of events.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Where the road runs out',
      about: 'Read a travel essay and look closely at how the writer creates a sense of place.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Where the road runs out', md: 'The bus drops you at the end of the asphalt, and from there the road becomes a track. Ahead of you, folded into a narrow valley, lies the town: forty or so stone houses stacked one above the other, their roofs the colour of rust. Behind them the mountains rise so steeply that the sun reaches the main street only at midday.\n\nI arrived in late October, when the last summer visitors had gone and the town seemed to be holding its breath before winter. Smoke drifted from the chimneys. Somewhere a dog barked, and the sound bounced from wall to wall until it seemed to come from everywhere at once.\n\nTravel writers like to call places like this *timeless*, but that is not quite true. Satellite dishes cling to the old balconies, and the café on the square, wedged between the church and the post office, has a coffee machine that hisses like an angry cat. What is true is that the town moves at its own pace. Having lived through centuries of hard winters, its people are in no hurry to impress anyone.\n\nOn my third morning, I followed a path that meandered up through chestnut woods to a chapel. Inside, it smelt of candle wax and damp stone. On the wall hung a painting so dark with age that I could barely make out the faces. Sitting on the cold bench, I realised that I had not looked at my phone for two days.\n\nWhen I left, the woman who ran my guesthouse pressed a bag of chestnuts into my hands. “For the journey,” she said. It was a small thing, but I have described that town to friends many times since, and that is always where the story ends.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The bus takes visitors right into the main street of the town.', a: 'f', why: 'The bus stops at the end of the asphalt; from there it is a track.' },
            { q: 'The main street gets direct sunshine for only part of the day.', a: 't', why: '“The sun reaches the main street only at midday.”' },
            { q: 'The writer visited outside the busy summer season.', a: 't', why: 'The writer arrived in late October, after the summer visitors had gone.' },
            { q: 'The writer agrees that the town is *timeless*.', a: 'f', why: '“That is not quite true”: there are satellite dishes and a modern coffee machine.' },
            { q: 'The chapel is visited by many pilgrims every year.', a: 'ng', why: 'The essay does not say how many people visit the chapel.' },
            { q: 'The guesthouse owner gave the writer some food for the trip.', a: 't', why: 'She gave the writer a bag of chestnuts “for the journey”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the essay.', items: [
            { q: '“Ahead of you … lies the town.” Why does the writer put the subject at the end?', o: ['to reveal the town as the reader’s eye reaches it', 'because the sentence is a question', 'because *the town* is a pronoun'], why: 'Inversion after a place adverbial saves the new information for the end.' },
            { q: '“The town seemed to be holding its breath before winter.” This is an example of:', o: ['personification', 'a simile', 'a cliché'], why: 'Only people hold their breath: the town is described like a person.' },
            { q: '“A coffee machine that hisses like an angry cat.” This is:', o: ['a simile', 'a metaphor', 'personification'], why: 'A comparison with *like* is a simile.' },
            { q: '“Having lived through centuries of hard winters, its people are in no hurry.” *Having lived* shows that:', o: ['the experience came before and explains the present', 'the people are living there for a short time', 'the winters are getting harder'], why: '*Having* + past participle shows an earlier experience that explains the main clause.' },
            { q: '“The café … *wedged* between the church and the post office.” *Wedged* suggests:', o: ['there is very little space around it', 'it is shaped like a triangle', 'it is closed in winter'], why: '*Wedged* means pushed tightly into a narrow space.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the precise verbs that describe movement or position.', items: [
            { s: 'Satellite dishes [cling] to the old balconies.', why: '*Cling to*: hold on tightly, as if they might fall.' },
            { s: 'I followed a path that [meandered] up through chestnut woods.', why: '*Meander*: follow a slow, winding course.' },
            { s: 'Smoke [drifted] from the chimneys.', why: '*Drift*: move slowly and gently through the air.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'A huge cruise ship ___ over the little fishing port, blocking the view.', o: ['loomed', 'nestled', 'meandered'], why: '*Loom*: appear large and threatening.' },
      { q: 'At the end of the lane ___ a row of whitewashed cottages.', o: ['stood', 'did stand', 'it stood'], why: 'Inversion after a place adverbial: verb, then subject, without *do*.' },
      { q: '___ in 1890, the station still has its original clock.', o: ['Opened', 'Opening', 'Having opening'], why: 'The station *was opened*: passive meaning, past participle.' },
      { q: 'Which phrase is a simile?', o: ['as busy as an anthill', 'a sea of faces', 'the town held its breath'], why: 'A comparison with *as … as* is a simile.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The village is very pretty, almost picture-___.', a: ['postcard'], why: '*Picture-postcard*: so pretty that it looks unreal.' },
      { q: 'Small farms ___ the green hillside, each with its own red roof.', a: ['dot'], why: '*Dot*: appear here and there across an area.' },
      { q: '___ unpacked, we went out to explore the old town.', a: ['Having'], why: '*Having* + past participle: one action came first.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'A narrow staircase rises behind the door.', cue: 'Behind the door', a: ['Behind the door rises a narrow staircase.'], why: 'Place adverbial, then the verb *rises*, then the subject.' },
      { q: 'An old olive tree grows in the centre of the courtyard.', cue: 'In the centre of the courtyard', a: ['In the centre of the courtyard grows an old olive tree.', 'In the centre of the courtyard, an old olive tree grows.'], why: 'Place adverbial, then *grows*, then the subject.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Looking out of the window, [the mountains] were covered in snow.', a: ['I saw the mountains', 'we saw the mountains', 'I could see the mountains', 'we could see the mountains'], why: 'The participle clause must describe the subject: the mountains were not looking.' },
      { s: 'Beyond the gate [lies] three ancient olive trees.', a: ['lie', 'stand', 'grow'], why: 'The subject is plural, *three trees*: *lie*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A *run-down* hotel is old and in poor condition.', a: 't', why: '*Run-down*: in bad condition because no one has cared for it.' },
      { q: '*Here comes it* is a correct sentence.', a: 'f', why: 'With a pronoun subject, keep normal order: *Here it comes*.' },
    ] },
  ],
};
