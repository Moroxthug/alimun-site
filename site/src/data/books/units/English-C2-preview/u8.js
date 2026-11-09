// English C2, unit 8, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why it works, many examples, the usual mistakes, a text
// that uses it), then exercises from controlled to free, one speaking task, and one task in the format of C2 Proficiency.
// Exam formats: Reading and Use of English Parts 1, 5 and 6, Writing Part 2 (the review, taught in full in lesson 3).
// Every story, extract, review and critical essay is original; quotations from published literature are limited to a few
// famous public-domain words.
export const UNIT = {
  id: 'u8',
  title: 'Literature and criticism',
  goal: 'Read literary English closely and write about it: explain what figurative language does for the reader, describe narrative voice, tone and irony precisely, write a close reading and a review of a book in the format of C2 Proficiency Writing Part 2, and follow a critical essay on a short story.',
  art: 'owl',
  tags: { skills: ['reading', 'writing', 'vocabulary', 'speaking'], topics: ['metaphor', 'simile', 'symbol', 'imagery', 'narrative-voice', 'free-indirect-speech', 'unreliable-narrator', 'tone', 'irony', 'close-reading', 'review'], goals: ['foundations', 'academic', 'pleasure'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Saying one thing in terms of another',
      about: 'Name and explain metaphor, simile, personification, symbol, imagery, metonymy and the extended metaphor, say what each does for the reader, and complete a text in the format of C2 Proficiency Reading and Use of English Part 1.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Figurative language** says one thing in terms of another. A **metaphor** says that something *is* something else: *The city was a furnace.* The thing described (the city) is sometimes called the **tenor**, and the image used for it (the furnace) the **vehicle**. A **simile** makes the comparison openly, with *like* or *as*: *The city was like a furnace.* **Personification** gives human qualities to something that is not human: *The wind worried at the shutters.*\n\nA **symbol** is a real object in the story that also stands for something larger: a stopped clock in a dead man’s house is a clock, and it is also time that has ended. **Imagery** is language that appeals to the senses: sight, but also sound, smell, touch and taste. **Metonymy** names something by a thing closely linked to it (*the Crown* for the monarchy, *the press* for journalists), and **synecdoche** names the whole by a part (*all hands on deck*). An **extended metaphor** develops one image over several sentences or a whole poem: *All the world’s a stage, and all the men and women merely players* (Shakespeare).' },
          { t: 'table', caption: 'Figurative language', explain: ['head', 'col1'], head: ['Device', 'What it does', 'Example'], rows: [
            ['metaphor', 'says one thing is another', 'Her silence was a locked room.'],
            ['simile', 'compares openly with like or as', 'The fog came down like a dust sheet.'],
            ['personification', 'gives human qualities to a thing', 'The old house groaned in the night.'],
            ['symbol', 'a real object that stands for a larger idea', 'a stopped clock for a life that has ended'],
            ['imagery', 'appeals to the senses', 'the sour smell of paraffin and wet wool'],
            ['metonymy', 'names a thing by something linked to it', 'The Crown has refused to comment.'],
            ['synecdoche', 'names the whole by a part', 'There were a hundred mouths to feed.'],
            ['extended metaphor', 'develops one image at length', 'All the world’s a stage… (Shakespeare)'],
          ] },
        ],
        [
          { t: 'text', md: 'Naming a device is the easy part. What a C2 reader must explain is its **effect**: what is carried across from the image to the thing described, and why the writer chose this image rather than another. *The city was a furnace* carries over not only heat but pressure, noise and the sense that people are being used up as fuel.\n\nThe difference between **simile** and **metaphor** matters. A simile keeps the two things apart and invites the reader to compare them; a metaphor fuses them, so it usually feels bolder and more certain. **Dead metaphors** (*the leg of a table*, *a bottleneck*) are no longer felt as images at all. A **mixed metaphor** joins images that clash. And when the weather or the landscape seems to share a character’s mood, critics speak of the **pathetic fallacy**: *The rain wept against the window as she read the letter.*' },
          { t: 'examples', items: [
            { s: 'Her silence **was a locked room**, and he had long since lost the key.', n: 'An extended metaphor: the silence is a room he cannot enter.' },
            { s: 'The apples fell **like small red coins** into the grass.', n: 'A simile: abundance and value, and perhaps a child counting wealth.' },
            { s: 'The gate **groaned** whenever she pushed it, **as though it knew** what she meant to do.', n: 'Personification that hints at guilt.' },
            { s: 'On the kitchen wall, **the clock had stopped** at twenty past four.', n: 'A symbol: time has ended with the father’s life.' },
            { s: 'The kitchen smelled of **salt, paraffin and old bread**.', n: 'Imagery of smell: a house long closed.' },
            { s: 'The sky **sulked** all afternoon, as if it, too, had heard the news.', n: 'Pathetic fallacy: the weather mirrors the mood.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use precise verbs of effect: *evokes*, *conveys*, *suggests*, *connotes*, *reinforces*, *undercuts*, *foreshadows*, *lends* (*lends the scene a sense of menace*). Avoid *shows* on its own, and never write that an image *makes the reader want to read on*: it is true of almost every sentence and explains nothing.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes when you write about imagery', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The writer uses a metaphor.', 'The furnace metaphor presents the city as a place that uses people up.', 'Name the device and explain its effect.'],
            ['“Like a dust sheet” is a metaphor.', '“Like a dust sheet” is a simile.', 'With *like* or *as*, it is a simile.'],
            ['This makes the reader want to read on.', 'This creates a sense of unease that the ending confirms.', 'Say what the reader feels or understands, precisely.'],
            ['The writer used personification.', 'The writer uses personification.', 'Write about a text in the present tense.'],
            ['The clock symbolises a clock.', 'The stopped clock symbolises a life, or a time, that has ended.', 'A symbol stands for something beyond itself.'],
          ] },
          { t: 'reading', title: 'From a short story: “Night Shift”', md: 'By three in the morning the ward had shrunk to the size of its lamps. Beyond their small yellow islands the corridor ran away into a dark that smelled of bleach and other people’s sleep. The machines kept their own time, clicking and sighing like old men in a waiting room who have long since stopped expecting to be called.\n\nShe made her round. In bed four the professor was awake again, his hands moving on the blanket as if he were turning the pages of a book that nobody else could see. Outside, the rain had given up arguing with the windows and settled into a steady, patient grey.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Read the extract from “Night Shift” again. Which device is each phrase?', groups: ['metaphor', 'simile', 'personification'], explain: ['groups'], items: [
            { s: 'small yellow islands (the light of the lamps)', g: 0, why: 'The pools of light *are* islands: no *like* or *as*.' },
            { s: 'clicking and sighing like old men in a waiting room', g: 1, why: 'A comparison with *like*.' },
            { s: 'the rain had given up arguing with the windows', g: 2, why: 'Rain cannot argue or give up: human behaviour.' },
            { s: 'as if he were turning the pages of a book', g: 1, why: '*As if* introduces an open comparison.' },
            { s: 'The machines kept their own time', g: 2, why: 'The machines are given a will of their own.' },
            { s: 'the ward had shrunk to the size of its lamps', g: 0, why: 'The ward has not really shrunk: the darkness is presented as a physical change.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What is the main effect of each image?', items: [
            { q: '“clicking and sighing like old men in a waiting room who have long since stopped expecting to be called”', o: ['It suggests weariness and patients who have been forgotten.', 'It suggests that the machines are new and efficient.', 'It suggests that the ward is noisy and cheerful.'], why: 'Old men who no longer expect to be called evoke tiredness and neglect.' },
            { q: '“a dark that smelled of bleach and other people’s sleep”', o: ['It mixes the clinical with the intimate, making the hospital feel both cold and close.', 'It shows that the cleaners have done a poor job.', 'It suggests that the nurse is about to fall asleep.'], why: '*Bleach* is clinical; *other people’s sleep* is strangely personal.' },
            { q: '“his hands moving on the blanket as if he were turning the pages of a book”', o: ['It suggests that the professor’s mind is still at work in a world of its own.', 'It suggests that he is reading in the dark.', 'It shows that he is trying to call the nurse.'], why: 'The invisible book hints at memory, habit and confusion.' },
            { q: '“the rain had given up arguing with the windows and settled into a steady, patient grey”', o: ['The weather mirrors a mood of resignation as the night wears on.', 'It tells us that the storm has completely ended.', 'It suggests that the nurse is angry.'], why: 'Pathetic fallacy: *given up*, *patient* match the quiet acceptance of the ward.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 1** you read a text with **eight gaps** and choose the word that fits each one from **four options**. At C2 the options are often all real, all similar in meaning and all grammatically possible. The answer depends on **collocation** (*strike a chord*, not *hit a chord*), **fixed phrases** (*by contrast*), **dependent prepositions** (*rooted in*) or a fine difference of meaning. Read the whole sentence, including the words **after** the gap.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 1): the text “The metaphors we live by” is given sentence by sentence. Choose the word that best fits each gap.', items: [
            { q: 'Most of us would be hard ___ to get through a single conversation without a metaphor.', o: ['pressed', 'pushed', 'put', 'driven'], why: 'The fixed phrase is *be hard pressed to do something*: to find it very difficult.' },
            { q: 'We say that time is running out, or that an idea has struck a ___ with us,', o: ['chord', 'note', 'tone', 'key'], why: '*Strike a chord*: to seem familiar or to move someone.' },
            { q: 'rarely pausing to notice how deeply such phrases are ___ in the body and the physical world.', o: ['rooted', 'planted', 'buried', 'set'], why: '*Rooted in*: having its origin in. *Planted* and *buried* do not take this meaning.' },
            { q: 'Writers of fiction, by ___, are trained to notice exactly this.', o: ['contrast', 'difference', 'opposition', 'distinction'], why: 'The fixed linking phrase is *by contrast*.' },
            { q: 'Where a careless writer reaches for a cliché, a good novelist will ___ a fresh image,', o: ['coin', 'mint', 'forge', 'print'], why: 'You *coin* a phrase or an image: invent it. *Forge* suggests something false.' },
            { q: 'one that can bring a whole scene to ___ in half a sentence.', o: ['life', 'light', 'mind', 'view'], why: '*Bring something to life*: make it vivid.' },
            { q: 'Yet an image that is laboured or too ___ draws attention to itself,', o: ['far-fetched', 'long-winded', 'wide-ranging', 'high-handed'], why: '*Far-fetched*: hard to believe, too remote from the thing described.' },
            { q: 'and in doing so breaks the ___ that the story has worked so hard to cast.', o: ['spell', 'charm', 'magic', 'trance'], why: 'You *cast* and *break a spell*; the verb *cast* after the gap decides it.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Gaps in **Part 1** are often decided by a word some distance away. In the last item, *cast* at the end of the sentence is the clue: you *cast a spell*, so *break the spell* follows. Before choosing, read the sentence aloud in your head with each option: at C2 the wrong ones are not impossible, just not what a native writer would say.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were explaining a poem in a seminar.', tutor: 'sofia', items: [
            { a: 'The furnace metaphor presents the city as a place that uses people up.' },
            { a: 'The simile evokes weariness and neglect.' },
            { a: 'The stopped clock symbolises a time that has ended.' },
            { a: 'The weather mirrors a mood of quiet resignation.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Who is telling the story?',
      about: 'Describe narrative voice and tone precisely: first and third person, limited and omniscient narration, free indirect speech, the unreliable narrator and irony, and read a literary extract in the format of C2 Proficiency Reading and Use of English Part 5.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Every story has a **narrator**, and the narrator is not the author. A **first-person** narrator is a character in the story (*I opened the door*), so we see only what they see and know only what they choose to tell. A **third-person** narrator stands outside (*She opened the door*). A **limited** third-person narrator stays close to one character’s mind; an **omniscient** narrator can enter anyone’s mind, move in time and comment freely. **Point of view** is the position from which events are seen, and **focalisation** is the critic’s word for whose perceptions a passage follows.\n\nThe choice changes everything. A first-person narrator offers intimacy and limits; an omniscient one offers range and authority, and can be ironic about the characters. Much modern fiction uses a close third person, which gives most of the intimacy of *I* with some of the freedom of *she*.' },
          { t: 'table', caption: 'Narrative voice', explain: ['head', 'col0', 'col1'], head: ['Voice', 'What the reader gets', 'Example'], rows: [
            ['first person', 'one character’s view, from inside', 'I had not meant to stay so long.'],
            ['third person limited', 'one character’s thoughts, from close by', 'She had not meant to stay so long, and now it was dark.'],
            ['third person omniscient', 'any mind, any time, with comment', 'She had not meant to stay; he, upstairs, had counted on it.'],
            ['second person (rare)', 'the reader placed inside the story', 'You had not meant to stay so long.'],
          ] },
        ],
        [
          { t: 'text', md: '**Free indirect speech** (or free indirect style) is the most important technique in the modern novel, and the one most often missed by learners. It reports a character’s thoughts with the **grammar of reported speech** (third person, past tense, backshifted verbs) but **without a reporting verb**, and it keeps the character’s **own words**: their questions, exclamations, slang and sense of *here* and *now*.\n\nThe effect is a double voice. We hear the character from the inside, yet the narrator is still there, and can quietly let us see more than the character does. Jane Austen made it famous; it is how a novel can be both sympathetic and ironic in the same sentence.' },
          { t: 'table', caption: 'One thought, three ways', explain: ['head', 'col0', 'col2'], head: ['Form', 'Example', 'What changes'], rows: [
            ['direct thought', 'She thought, “I can’t stay here another day.”', 'her exact words, in quotation marks'],
            ['indirect (reported) thought', 'She thought that she couldn’t stay there another day.', 'reporting verb; *here* becomes *there*'],
            ['free indirect thought', 'She couldn’t stay here another day. Not one more day.', 'no reporting verb; her *here* and her emphasis remain'],
          ] },
          { t: 'examples', items: [
            { s: 'He looked at the letter again. **Why had she never written before? And why now, of all times?**', n: 'Free indirect: his questions, in the past tense, without *he wondered*.' },
            { s: 'She would tell him tomorrow. **Tomorrow, definitely.**', n: 'Free indirect: *would* for her plan; the second sentence is her own insistence.' },
            { s: 'The party was, **of course, a triumph**. Everyone **simply adored** Mrs Hale’s little dinners.', n: 'The words are Mrs Hale’s, so the narrator can be quietly ironic.' },
          ] },
        ],
        [
          { t: 'text', md: 'An **unreliable narrator** is one whose account the reader has reason to doubt. They may be lying, deceiving themselves, too naive to understand what they see, or simply forgetful. The signals are small: contradictions, a defence nobody asked for (*I am not, whatever people say, a jealous man*), other characters reacting strangely, gaps in the story. The reader then understands **more than the narrator does**, and this gap is a form of **dramatic irony**.\n\n**Tone** is the attitude a text takes to its subject, and you describe it with precise adjectives, always supported by a phrase from the text. **Register** is the level of formality. **Verbal irony** says one thing and means another; **situational irony** is the gap between what is expected and what happens.' },
          { t: 'table', caption: 'Words for tone', explain: ['head', 'col1'], head: ['Tone', 'Meaning', 'Example'], rows: [
            ['wry', 'dry, quietly amused', 'It was, I suppose, a successful funeral: nobody fell in.'],
            ['sardonic', 'mocking, scornful', 'He was generous to a fault, the fault being other people’s.'],
            ['elegiac', 'mourning something lost', 'There were orchards here once, and the sound of bees.'],
            ['wistful', 'gently longing, a little sad', 'She sometimes wondered who she might have been in Lisbon.'],
            ['detached', 'cool, without emotion', 'The body was found at 6.10. The kettle was still warm.'],
            ['tender', 'gentle and loving', 'He tucked the blanket round her as if she might break.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes when you discuss voice and tone', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The author says she hates her father.', 'The narrator says she hates her father.', 'The narrator is not the author.'],
            ['The tone is good and interesting.', 'The tone is wry: “nobody fell in” turns a funeral into a social event.', 'Use a precise adjective and give the evidence.'],
            ['She couldn’t stay here, she thought to herself.', 'She couldn’t stay here. Not another day.', 'Free indirect speech has no reporting verb.'],
            ['The narrator is unreliable because he is the narrator.', 'The narrator is unreliable: his defence of himself is contradicted by what others do.', 'Show the evidence that creates doubt.'],
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite each thought as free indirect speech. Start with the words given.', items: [
            { q: 'She thought, “I can’t stay here another day.”', cue: 'She couldn’t', a: ['She couldn’t stay here another day.', 'She could not stay here another day.'], why: 'Past tense and third person, but no reporting verb, and *here* stays as she would say it.' },
            { q: 'He wondered, “Why did she never write to me?”', cue: 'Why had', a: ['Why had she never written to him?'], why: 'Backshift (*did write* → *had written*), *me* → *him*, and the question mark stays.' },
            { q: 'She said to herself, “Tomorrow I will tell him everything.”', cue: 'Tomorrow she', a: ['Tomorrow she would tell him everything.'], why: '*Will* becomes *would*; *tomorrow* stays, because it is her time, not the narrator’s.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each tone word with its meaning.', pairs: [
            ['wry', 'dry and quietly amused'],
            ['sardonic', 'mocking and scornful'],
            ['elegiac', 'mourning something lost'],
            ['wistful', 'gently longing, a little sad'],
            ['detached', 'cool and unemotional'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What is the tone of each sentence?', items: [
            { q: '“The new manager believed passionately in transparency, which is why nobody ever saw the accounts.”', o: ['sardonic', 'elegiac', 'tender'], why: 'Verbal irony: the second half mocks the first.' },
            { q: '“In those summers the river was ours, and the evenings did not seem to end.”', o: ['elegiac', 'sardonic', 'detached'], why: 'A lost past, remembered with longing and sorrow.' },
            { q: '“The patient was admitted at 2.15. She was given fluids. At 4.30 she asked for her daughter.”', o: ['detached', 'wistful', 'wry'], why: 'Flat, factual sentences that hold back emotion, which makes the last one hit harder.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 5** you read **one long text** and answer **six multiple-choice questions** with **four options** each. The text may be fiction or non-fiction. The questions test detail, opinion, attitude, tone, purpose, implication and the meaning of a phrase in context, and with fiction they often ask what the reader understands that a character or narrator does not. Read the extract below, from a story with a first-person narrator.' },
          { t: 'reading', title: 'From “A Small Contribution”', md: 'I have been asked, more than once now, whether I take any credit for what Marcus Hale has become. I always say no, and I always mean it, though I notice that people tend to smile when I say so, as if modesty were a kind of confession.\n\nHe came to me at nine, a thin, untidy child whose mother had been told he had “an ear”. Most children who are said to have an ear have, in my experience, a mother. Marcus, I will admit, was an exception, although not in the way the newspapers now suggest. He did not play beautifully. He played impatiently, which is a different thing, and which it was my job to correct.\n\nI corrected it, I think, rather thoroughly. For two years he was not permitted to play a piece he liked until he had played, without error, three he did not. His mother once asked whether this might be putting him off. I explained to her, as kindly as I could, that a child who is never put off anything will never be put on to anything either, and she did not raise the matter again. Nor, shortly afterwards, did she bring him to his lessons, but I have always assumed that this was a question of money.\n\nSo I was surprised, some fifteen years later, to read in an interview that he had “nearly given up music altogether” as a boy, “until a teacher at school let me play whatever I wanted”. I do not suppose the interviewer checked. They seldom do. And there is no reason, of course, why a young man should remember accurately what was done for him at nine; one hardly expects gratitude from the young, and I have never sought it.\n\nI went to the concert. I had a seat near the back, which suited me, since I did not wish to be recognised and fussed over. He played the Schubert, the very piece I had refused to let him touch until he was eleven, and he played it, I must say, with a freedom I would not have permitted. There were passages I would have taken more slowly. There was one, near the end, where he seemed to forget the audience altogether, and the hall went so quiet that I could hear the woman beside me breathing.\n\nAfterwards I wrote to him: a short and perfectly friendly letter, reminding him of our lessons and suggesting, in the most general terms, that the slow movement might bear a little more discipline. He has not replied. I imagine he is very busy.\n\nI have been asked whether I take any credit. I take none. I simply note that the boy who could not sit still for a scale now sits still for forty minutes in front of two thousand people, and that someone, at some point, must have taught him how.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 5): choose the answer which fits best according to the text.', items: [
            { q: 'In the first paragraph, what does the narrator suggest about people who hear him deny taking credit?', o: ['They take his denial as a sign of the opposite.', 'They admire his modesty.', 'They do not know who Marcus Hale is.', 'They think he is joking.'], why: '*as if modesty were a kind of confession*: they think he secretly does take credit.' },
            { q: 'The remark “Most children who are said to have an ear have, in my experience, a mother” is an example of', o: ['dry humour revealing the narrator’s low opinion of ambitious parents.', 'genuine admiration for the boy’s mother.', 'a fact the narrator has carefully checked.', 'an apology for doubting the boy’s talent.'], why: 'It mocks mothers who believe their children are gifted.' },
            { q: 'What does the reader understand about why the lessons ended?', o: ['The narrator’s methods were probably the reason, though he does not see it.', 'The family could no longer afford them.', 'The boy had started lessons at school instead.', 'The boy’s mother had moved away.'], why: 'The mother’s complaint comes just before she stops bringing him; *I have always assumed* signals self-deception.' },
            { q: 'How does the narrator respond to the interview?', o: ['He dismisses Marcus’s account while claiming not to want gratitude.', 'He accepts that the school teacher deserves the credit.', 'He contacts the newspaper to correct the facts.', 'He admits that his methods were too strict.'], why: '*I do not suppose the interviewer checked… one hardly expects gratitude… I have never sought it.*' },
            { q: 'What does the description of the concert reveal about the narrator?', o: ['He is moved despite himself but cannot stop judging the performance.', 'He thinks the performance was a failure.', 'He believes the audience was bored.', 'He hopes Marcus will notice him in the hall.'], why: 'The silent hall moves him, yet he notes passages he *would have taken more slowly*.' },
            { q: 'Why is the final paragraph ironic?', o: ['The narrator claims no credit while implying that he deserves all of it.', 'The narrator finally admits that he was wrong.', 'The narrator praises the school teacher.', 'Marcus has at last thanked him.'], why: '*someone, at some point, must have taught him how* claims the credit he says he does not take.' },
          ] },
          { t: 'tip', art: 'owl', md: 'With a first-person narrator, **Part 5** questions often turn on the gap between what the narrator says and what the reader sees. Look for the narrator’s own explanations (*I have always assumed that…*) and test them against the facts around them. The right option usually describes what the **text** shows, not what the narrator believes.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were discussing the extract.', tutor: 'arthur', items: [
            { a: 'The narrator is unreliable: his account is undercut by the facts around it.' },
            { a: 'The tone is wry, but the humour is at the narrator’s expense.' },
            { a: 'The reader understands more than the narrator does.' },
            { a: 'The final line claims the credit he says he does not take.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Writing about what you read',
      about: 'Write a close-reading paragraph that makes a point, quotes briefly and explains the effect, and write a review of a book in the format of C2 Proficiency Writing Part 2.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A **close reading** explains **how** a text creates its meaning, not **what** happens in it. Each paragraph does four things. It makes a **point** in your own words. It gives **evidence**: a short quotation, a word or a phrase, **embedded** in your own sentence. It explains the **effect**: what the words suggest and why the writer chose them. And, at C2, it **connects** the detail to the text as a whole.\n\n*The narrator presents the island as a place that refuses to change (point): even the gulls are “where she had left them” (evidence), a phrase that makes the birds seem like furniture in an unused room (effect). This prepares us for the stopped clock, the story’s central image of time that will not move (connection).*\n\nWrite in the **present tense** (*the narrator presents*), quote **briefly**, and never retell the plot: the reader of a close reading knows the story.' },
          { t: 'table', caption: 'A close-reading paragraph', explain: ['head', 'col0', 'col1'], head: ['Step', 'What it does', 'Useful language'], rows: [
            ['point', 'answers the question in your own words', 'The narrator presents… / The writer undercuts…'],
            ['evidence', 'a short, embedded quotation', 'even the gulls are “where she had left them”'],
            ['effect', 'explains what the words do', 'a phrase that evokes / suggests / lends the scene…'],
            ['connection', 'links the detail to the whole', 'This prepares us for… / This is echoed in…'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes in a close reading', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Then Ellen goes to the jetty and looks at the sea.', 'The jetty scene shows how close escape seems, and how far.', 'Explain how the text works; do not retell it.'],
            ['The writer says: “The fog had come down over the water like a dust sheet thrown over furniture.” This is a simile.', 'The fog is “like a dust sheet”, a simile that turns the sea into an abandoned room.', 'Quote briefly and embed the quotation.'],
            ['The writer used irony.', 'The writer uses irony.', 'Use the present tense for what a text does.'],
            ['This is very effective and interesting.', 'This lends the ending a quiet, unresolved tension.', 'Name the effect precisely.'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Which step of a close-reading paragraph is each part?', groups: ['point', 'evidence', 'effect', 'connection'], explain: ['groups'], items: [
            { s: 'The narrator presents her father as distant but admired.', g: 0, why: 'A claim about the text in your own words.' },
            { s: 'he kept silence “the way other men keep bees”', g: 1, why: 'A short embedded quotation.' },
            { s: 'a simile that makes his silence both a skill and a danger', g: 2, why: 'It explains what the image does.' },
            { s: 'This ambivalence returns in her refusal to wind his clock.', g: 3, why: 'It links the detail to a later moment.' },
            { s: 'The story’s quietness is deceptive.', g: 0, why: 'A point to be argued.' },
            { s: 'a phrase that lends the ending an unresolved tension', g: 2, why: 'It names the effect.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Writing Part 2** you choose **one** task from several: an **article**, a **letter**, a **report** or a **review**. You write **280 to 320 words**. The paper lasts one and a half hours for Part 1 and Part 2 together, so you have about forty-five minutes for each.\n\nA C2 review is written for the readers of a particular publication: a literary magazine, a university website, a newspaper. They want to know what kind of book it is, whether it succeeds and whether **they** should read it. At C2 the task usually adds a further angle (*compare it with the author’s earlier work*, *explain why it has been overlooked*), and answering that angle fully is part of the mark.\n\nThe balance matters: **description is brief**, and most of the review is **evaluation**, supported by precise detail, perhaps a few words of quotation, exactly as in a close reading. The register is neutral to formal with a personal voice: *I* is welcome, but the judgements must be argued, not just stated. Examiners mark four areas: **content** (the whole task covered), **communicative achievement** (the right effect on the target reader), **organisation** and **language**.' },
          { t: 'table', caption: 'A plan for a C2 review (280 to 320 words)', explain: ['head', 'col0', 'col1'], head: ['Part', 'What to write', 'Useful language'], rows: [
            ['title', 'the book and a hint of your verdict', '“The Glass Orchard”: a quiet book that deserves a louder welcome'],
            ['opening', 'draw the reader in; say what the book is', 'Few novels reward patience as generously as…'],
            ['brief description', 'setting, situation, no spoilers', 'Set on…, it follows… over a single summer.'],
            ['evaluation', 'the main strengths, with precise evidence', 'What lifts the novel above… is… / The prose is spare without being thin.'],
            ['reservation', 'a fair criticism, in proportion', 'If the book has a flaw, it is… / This is a minor quibble.'],
            ['the task’s angle and verdict', 'answer it; recommend to a named reader', 'It deserves a place beside… / Readers who… will find…'],
          ] },
        ],
        [
          { t: 'table', caption: 'The language of literary evaluation', explain: ['head'], head: ['Praise', 'Measured criticism', 'Recommendation'], rows: [
            ['a quietly devastating ending', 'the middle section loses momentum', 'it deserves a far wider readership'],
            ['prose that is spare without being thin', 'the secondary characters are thinly drawn', 'readers who value… will be richly rewarded'],
            ['a narrator whose voice lingers long after', 'the symbolism is at times heavy-handed', 'it is not for readers who want a plot'],
            ['a rare gift for the telling detail', 'the dialogue occasionally rings false', 'it stands comparison with…'],
            ['the writing is never less than assured', 'the ending feels contrived', 'it is well worth the effort it asks of you'],
          ] },
          { t: 'tip', art: 'owl', md: 'Balance praise and criticism with **concession**: *For all its strengths, the novel is not without flaws*; *If the book has a weakness, it is…*; *This is a minor quibble, however*. A reviewer who sees one weakness is more believable when they praise. But keep the criticism **in proportion** to your verdict: three paragraphs of complaint followed by *I highly recommend it* confuses the reader.' },
        ],
        [
          { t: 'reading', title: 'Task and model review (306 words)', md: 'Task: A literary magazine is publishing a series called *Books that deserve a second look*. Write a review of a novel or story collection that you think has been overlooked or misjudged. Describe the book briefly, evaluate the writing, and explain why it deserves more readers.\n\n**“The Glass Orchard” by Mara Linden: a quiet book that deserves a louder welcome**\n\nWhen “The Glass Orchard” appeared, it was politely reviewed and quickly forgotten, dismissed as a gentle family story in which nothing much happens. That judgement could hardly be more mistaken. Few novels reward patience as generously as this one.\n\nSet in a single summer on a fruit farm that the family can no longer afford, the novel follows Ruth, the eldest daughter, as she tries to decide whether to sell the land her father spent his life on. The plot is slight, and deliberately so. What matters is what the characters cannot bring themselves to say.\n\nWhat lifts the book above the many novels like it is Linden’s use of a close third-person narrator who slips constantly into Ruth’s own idiom. We hear her excuses in her own words (“It was only land, after all. Only trees.”) and slowly realise, before she does, that she has already made up her mind. The prose is spare without being thin, and Linden has a rare gift for the telling detail: a broken greenhouse pane that nobody mends becomes, without a word of explanation, an image of the whole family.\n\nIf the novel has a flaw, it is that the secondary characters are thinly drawn; Ruth’s brother, in particular, exists mainly to disagree with her. This is a minor quibble, however, in a book of such control.\n\nWhy, then, was it overlooked? Probably because it refuses to raise its voice. Readers who want a dramatic plot will be disappointed. Those who value precision, restraint and an ending that lingers for weeks will find it one of the most rewarding novels of recent years.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2): read the task and the model review again. Choose the best answer.', items: [
            { q: 'How does the review answer the task’s angle, “explain why it deserves more readers”?', o: ['It names the misjudgement in the opening and explains it fully in the last paragraph.', 'Only in the title.', 'It does not answer it.'], why: 'The first paragraph sets up the misjudgement; the last asks *Why, then, was it overlooked?* and answers it.' },
            { q: 'Which technique from lesson 2 does the reviewer praise, with evidence?', o: ['Free indirect speech in a close third-person narration.', 'An omniscient narrator who comments on every character.', 'An unreliable first-person narrator.'], why: '*a close third-person narrator who slips constantly into Ruth’s own idiom*, with a quotation as proof.' },
            { q: 'How does the reviewer keep the criticism in proportion?', o: ['With a concession and a phrase that limits it: *If the novel has a flaw… a minor quibble*.', 'By leaving all criticism out.', 'By giving the weakness a whole paragraph of detail.'], why: 'The criticism is fair, specific and kept small.' },
            { q: 'Who is the recommendation for?', o: ['Readers who value precision and restraint, not those who want a dramatic plot.', 'Everyone without exception.', 'Only people who live on farms.'], why: 'A C2 recommendation names, and limits, its audience.' },
          ] },
          { t: 'table', caption: 'Common mistakes in a C2 review', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Two paragraphs retelling the plot, with the ending', 'Two sentences of situation; no spoilers', 'The reader wants your judgement, not a summary.'],
            ['The book is amazing and the writing is very good.', 'The prose is spare without being thin.', 'Precise, argued praise.'],
            ['In conclusion, there are advantages and disadvantages.', 'Readers who value restraint will be richly rewarded.', 'A review ends with a verdict for a reader, not an essay conclusion.'],
            ['(the task’s angle forgotten)', 'Why, then, was it overlooked?', 'Every part of the task counts towards content.'],
          ] },
        ],
        [
          { t: 'text', md: '**Your writing task.** You see this announcement on a university website: *Reviews wanted: “The book I would give to a friend.” Write a review of a novel, a story collection or a work of non-fiction that you would give to a friend. Describe the book briefly, evaluate what makes the writing successful, and say what kind of friend it would suit and why.*\n\nWrite your review in **280 to 320 words** and send it to your teacher, who will correct it and comment on the four areas. Plan for five minutes first: choose your verdict, two strengths you can support with a detail or a short quotation, and one fair reservation. Use at least two expressions from the evaluation table, one concession, and one close-reading sentence (point, evidence, effect), and give your review a title.' },
          { t: 'ex', kind: 'speak', h: 'Say these review sentences after the tutor.', tutor: 'lena', items: [
            { a: 'Few novels reward patience as generously as this one.' },
            { a: 'The prose is spare without being thin.' },
            { a: 'If the novel has a flaw, it is that the secondary characters are thinly drawn.' },
            { a: 'Readers who value restraint will be richly rewarded.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A story and its critic',
      about: 'Read a short story extract and a critical essay on it, and put removed paragraphs back into the essay in the format of C2 Proficiency Reading and Use of English Part 6.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together: an extract from a short story that uses figurative language, a symbol and free indirect speech, and a critical essay about it. Read the story first, slowly, and notice what each image does.' },
          { t: 'reading', title: 'From “The Last Ferry”', md: 'The ferry was late, as it had been late on every day of her childhood, and Ellen found, to her surprise, that she was glad of it. The harbour wall was where she had left it. The gulls were where she had left them, quarrelling over the same scraps, or their grandchildren were. Only the fog was new, or seemed new: it had come down over the water like a dust sheet thrown over furniture in a house nobody means to live in again.\n\nShe had told the estate agent on the telephone that she would not stay long. A night, two at most. There was nothing to keep her. Her father had kept nothing anyway: he was not a man for keeping things, apart from silence, which he had kept beautifully, the way other men keep bees.\n\nThe house, when she reached it, smelled of salt and paraffin. On the kitchen wall the clock had stopped at twenty past four. Morning or afternoon, there was no telling. She reached up to wind it, and then, for no reason she could have given the agent, she did not.\n\nThat evening she walked down to the jetty. The fog had lifted, and the mainland lay along the horizon, low and blue and perfectly ordinary: close enough to row to, her father used to say, if you were the kind of fool who rowed. She had been that kind of fool once, at sixteen, and had got as far as the second buoy before the tide turned her round.\n\nShe would sign the papers in the morning. She would catch the early ferry, if it came. And if it was late, well. It was always late.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the story again. Choose the best answer.', items: [
            { q: '“A night, two at most. There was nothing to keep her.” Whose words are these?', o: ['Ellen’s, in free indirect speech.', 'The estate agent’s, in direct speech.', 'An omniscient narrator’s comment on Ellen.'], why: 'No reporting verb, past tense, and Ellen’s own clipped way of thinking.' },
            { q: 'What does the simile of the bees suggest about the father’s silence?', o: ['That it was cultivated with skill and could also sting.', 'That he was a keen beekeeper.', 'That he spoke very quietly.'], why: 'Bees are tended with patience, and they sting: the silence was an achievement and a weapon.' },
            { q: 'Why is Ellen’s decision not to wind the clock significant?', o: ['It is an act she cannot explain, which suggests she is not ready to move on.', 'It shows that the clock is broken.', 'It proves that she has decided to stay.'], why: '*for no reason she could have given the agent*: something outside practical reasons holds her.' },
            { q: 'What is the effect of the last line, “And if it was late, well. It was always late.”?', o: ['The unfinished thought leaves the ending open and echoes the opening.', 'It tells us clearly that she misses the ferry.', 'It shows that she is angry with the ferry company.'], why: 'The broken sentence returns to the first line and refuses to resolve.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the figurative language in each sentence.', items: [
            { s: 'It had come down over the water [like a dust sheet] thrown over furniture.', why: 'A simile: the sea becomes an abandoned room.' },
            { s: 'He had kept silence beautifully, [the way other men keep bees].', why: 'A simile that compares silence to a careful, risky hobby.' },
            { s: 'She had got as far as the second buoy before [the tide turned her round].', why: 'The tide acts like a person sending her back: a hint of personification and of fate.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 6** you read a long text from which **seven paragraphs** have been removed. They are printed after the text, jumbled, with **one extra** paragraph that does not fit anywhere. You decide which paragraph fits each gap.\n\nThe task tests how a text **holds together**: reference words (*this*, *that phrase*, *it*, *such*), linking ideas, the development of an argument and the logic of time. Read the whole main text first to follow the argument. Then, for each gap, look at the sentence **before** and the sentence **after**: the right paragraph must connect in **both** directions.' },
          { t: 'reading', title: 'Time and tide in “The Last Ferry”', md: 'At first sight, very little happens in “The Last Ferry”. A woman returns to the island where she grew up, intending to sell her dead father’s house, spends a night there and plans to leave. Yet the story’s quietness is deceptive.\n\n[gap one]\n\nThe fog is the first sign that this question will not be answered directly. Comparing it to “a dust sheet thrown over furniture in a house nobody means to live in again”, the narrator brings the language of the abandoned house out onto the open sea.\n\n[gap two]\n\nWho that someone is remains uncertain. The story is told in the third person, but much of it slips into free indirect speech, so that we hear Ellen’s thoughts in her own idiom, with no reporting verb to separate them from the narrator’s.\n\n[gap three]\n\nHer father, too, is seen only through her eyes, and her judgement of him is sharpened by irony. He was “not a man for keeping things, apart from silence, which he had kept beautifully, the way other men keep bees”.\n\n[gap four]\n\nThe story’s central symbol is the kitchen clock, stopped at twenty past four.\n\n[gap five]\n\nThat phrase matters. The agent stands for the practical world of sales and signatures, a world in which every action needs a reason. By leaving the clock alone, Ellen steps briefly outside it, and for a moment the island’s time, rather than the agent’s, is the one that counts.\n\n[gap six]\n\nThe ending returns, deliberately, to the beginning: “And if it was late, well. It was always late.” The unfinished sentence is the story’s last and best piece of free indirect speech.\n\n[gap seven]\n\n**The removed paragraphs**\n\n**A.** The simile is affectionate and cruel at once. Bees are tended with patience and skill, and they sting; the comparison suggests that his silence was both an achievement and a weapon, and that Ellen has never decided which.\n\n**B.** Almost every detail Ellen notices, from the late ferry to the unchanged gulls, insists that the island has stood still while she has moved on. The question the story asks is whether she has really moved at all.\n\n**C.** The memory of her failed escape at sixteen develops the same idea. Then, as now, she set out for the mainland and was turned back, not by her father but by the tide, a kind of time that nobody can argue with.\n\n**D.** Ellen’s brother, who appears briefly at the funeral, offers a very different view of their father, one that the story clearly invites us to share.\n\n**E.** “A night, two at most. There was nothing to keep her” reads at first as a plain statement of fact. By the end of the story it sounds more like a sentence she has been rehearsing, the kind of thing people say precisely because it is not quite true.\n\n**F.** We are left to finish it ourselves, and the story is too careful to tell us how. Ellen may catch the ferry and sign the papers; she may not. What is certain is that the island, like her father, has kept something from her, and that she finds she does not entirely mind.\n\n**G.** The effect is to make the whole island feel like a room that has been closed up, and to hint, before Ellen has even arrived, that the decision to leave it has already been taken by someone.\n\n**H.** It would be easy to read it as a conventional image of death: the father’s time has run out. But the most striking moment in the story is not the discovery of the clock but Ellen’s refusal to wind it, “for no reason she could have given the agent”.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): choose the paragraph (A to H) that fits each gap. There is one extra paragraph which you do not need.', items: [
            { q: 'Which paragraph fits gap one?', o: ['B', 'D', 'G', 'E'], why: '*Yet the story’s quietness is deceptive* leads to B; the next paragraph’s *this question* refers to B’s *The question the story asks*.' },
            { q: 'Which paragraph fits gap two?', o: ['G', 'A', 'H', 'C'], why: 'G explains the effect of the dust-sheet simile; *Who that someone is* then picks up G’s *by someone*.' },
            { q: 'Which paragraph fits gap three?', o: ['E', 'B', 'F', 'D'], why: 'E gives an example of the free indirect speech just described; *Her father, too, is seen only through her eyes* follows from Ellen’s own words.' },
            { q: 'Which paragraph fits gap four?', o: ['A', 'C', 'G', 'D'], why: '*The simile* in A refers to *the way other men keep bees* just quoted.' },
            { q: 'Which paragraph fits gap five?', o: ['H', 'A', 'E', 'F'], why: '*It* in H is the clock; H ends with *for no reason she could have given the agent*, which the next paragraph calls *That phrase*.' },
            { q: 'Which paragraph fits gap six?', o: ['C', 'B', 'G', 'D'], why: '*develops the same idea* follows the island’s time and the agent’s; the tide is *a kind of time*.' },
            { q: 'Which paragraph fits gap seven?', o: ['F', 'E', 'H', 'D'], why: '*We are left to finish it ourselves*: *it* is the unfinished sentence. D is the extra paragraph: the story has no brother and no funeral.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The extra paragraph in **Part 6** is often close to the topic but wrong in a fact or a reference. Paragraph D sounds like literary criticism, yet the story has no brother and no funeral scene. Check every name, time and reference in a paragraph against the main text before you place it, and when you have finished, read the whole essay through once more: the links should work in both directions.' },
          { t: 'ex', kind: 'match', h: 'Match the critic’s words with their meanings.', pairs: [
            ['deceptive', 'giving a false impression'],
            ['idiom (her own idiom)', 'a person’s particular way of speaking'],
            ['affectionate and cruel at once', 'loving and hurtful at the same time'],
            ['a conventional image', 'an image readers have met many times before'],
            ['rehearsing', 'repeating something in order to believe or perform it'],
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were presenting the story to a reading group.', tutor: 'omar', items: [
            { a: 'At first sight, very little happens in the story.' },
            { a: 'The simile is affectionate and cruel at once.' },
            { a: 'The stopped clock is the story’s central symbol.' },
            { a: 'We are left to finish the sentence ourselves.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '“The fog came down like a dust sheet.” This is', o: ['a simile', 'a metaphor', 'metonymy'], why: 'A comparison with *like*.' },
      { q: '“The Crown has refused to comment.” This is', o: ['metonymy', 'personification', 'a simile'], why: 'The monarchy is named by something closely linked to it.' },
      { q: 'A narrator who can enter any character’s mind is', o: ['omniscient', 'unreliable', 'first-person'], why: '*Omniscient*: knowing everything.' },
      { q: '“In those summers the river was ours, and the evenings did not seem to end.” The tone is', o: ['elegiac', 'sardonic', 'detached'], why: 'Mourning a lost past.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the word that best fits each gap.', items: [
      { q: 'The image struck a ___ with readers of every age.', o: ['chord', 'note', 'tone', 'key'], why: '*Strike a chord*.' },
      { q: 'An over-written image can break the ___ that the story has cast.', o: ['spell', 'charm', 'magic', 'trance'], why: '*Cast* and *break a spell*.' },
      { q: 'A good novelist will ___ a fresh image rather than use a cliché.', o: ['coin', 'forge', 'mint', 'print'], why: '*Coin* an image or a phrase.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite each thought as free indirect speech. Start with the words given.', items: [
      { q: 'She thought, “I can’t stay here another day.”', cue: 'She couldn’t', a: ['She couldn’t stay here another day.', 'She could not stay here another day.'], why: 'No reporting verb; past tense; her *here* stays.' },
      { q: 'He wondered, “Why did she never write to me?”', cue: 'Why had', a: ['Why had she never written to him?'], why: 'Backshift and third person; the question stays.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each sentence from a close reading.', items: [
      { s: 'The writer [used] a simile to present the fog as a dust sheet.', a: ['uses'], why: 'Write about a text in the present tense.' },
      { s: 'The phrase “like small red coins” is a [metaphor].', a: ['simile'], why: '*Like* makes it a simile.' },
      { s: 'The [author] says she hates her father, but the reader doubts it.', a: ['narrator'], why: 'The narrator is not the author.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Which part of a review is each sentence?', groups: ['description', 'evaluation', 'verdict'], explain: ['groups'], items: [
      { s: 'Set over a single summer, it follows a family deciding whether to sell their farm.', g: 0, why: 'Brief situation, no judgement.' },
      { s: 'The prose is spare without being thin.', g: 1, why: 'A precise judgement of the writing.' },
      { s: 'If the novel has a flaw, it is that the minor characters are thinly drawn.', g: 1, why: 'A measured criticism.' },
      { s: 'Readers who value restraint will be richly rewarded.', g: 2, why: 'A recommendation to a named reader.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each tone word with its meaning.', pairs: [
      ['wry', 'dry and quietly amused'],
      ['sardonic', 'mocking and scornful'],
      ['wistful', 'gently longing'],
      ['detached', 'cool and unemotional'],
    ] },
  ],
};
