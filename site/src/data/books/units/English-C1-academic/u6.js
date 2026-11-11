// English C1 for study and exams, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
// Practice in the format of exams like C1 Advanced and IELTS Academic; no official material.
export const UNIT = {
  id: 'u6',
  title: 'Exam skills',
  goal: 'Prepare for a C1 exam: handle the language tasks, describe data, write a balanced essay, give extended spoken answers and read under time pressure.',
  art: 'dragon',
  tags: { skills: ['vocabulary', 'grammar', 'writing', 'speaking', 'reading'], topics: ['exam-strategies', 'word-formation', 'key-word-transformation', 'collocations', 'describing-data', 'discursive-essay', 'extended-answers'], goals: ['academic'] },
  pages: [
    {
      id: 'p1',
      title: 'Language tasks: word formation, transformations and collocation',
      about: 'Practise the grammar and vocabulary tasks that C1 exams often use, and learn what they test.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Some C1 exams, such as C1 Advanced, test grammar and vocabulary directly. In **word formation**, you change a base word so that it fits a gap. Read the whole sentence first: decide whether you need a noun, a verb, an adjective or an adverb, whether it is singular or plural, and whether the meaning is positive or negative.' },
          { t: 'table', caption: 'Common patterns in word formation', explain: ['head', 'col0'], quiz: true, head: ['Pattern', 'Examples'], rows: [
            ['negative prefixes', 'unlikely, inaccurate, impractical, irrelevant, dissatisfied, misleading'],
            ['nouns', 'achievement, reliability, awareness, significance, dependence'],
            ['adjectives', 'controversial, sustainable, ambitious, representative'],
            ['verbs', 'modernise, strengthen, enable, clarify'],
            ['changes inside the word', 'deep → depth, long → length, broad → breadth, high → height'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many answers need two changes: a prefix and a suffix, as in *depend → independence*, or a plural, as in *accurate → inaccuracies*. Check your spelling: a correct word spelled wrongly usually gets no mark.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Complete each sentence with the correct form of the word in capitals.', items: [
            { q: 'The decision to close the library proved highly ___.', base: 'controversy', a: ['controversial'], why: 'After *highly* we need an adjective: *controversial*.' },
            { q: 'The report contained several ___ that had to be corrected.', base: 'accurate', a: ['inaccuracies'], why: 'A plural noun with a negative prefix: *inaccuracies*.' },
            { q: 'Many students value their financial ___ above everything else.', base: 'depend', a: ['independence'], why: 'A noun after *their financial*, with the prefix *in-*: *independence*.' },
            { q: 'The survey was small and not ___ of the whole population.', base: 'represent', a: ['representative'], why: '*Representative of*: typical of a larger group.' },
            { q: 'The ___ of the river makes it dangerous for swimmers.', base: 'deep', a: ['depth'], why: 'The noun from *deep* is *depth*, with a change inside the word.' },
            { q: 'The instructions were deliberately ___ and confused many people.', base: 'lead', a: ['misleading'], why: '*Mislead* means give the wrong idea; the adjective is *misleading*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In a **key word transformation**, you complete a second sentence so that it means the same as the first, using a given word that you must not change. These tasks often test C1 structures: passive reporting verbs, inversion, cleft sentences, past modals and fixed phrases. Here, write the whole new sentence.' },
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence so that it means the same. Use the word given.', items: [
            { q: 'People believe that the painting was stolen in 1990.', cue: 'thought', a: ['The painting is thought to have been stolen in 1990.', 'It is thought that the painting was stolen in 1990.'], why: 'Passive reporting: *is thought to have been* + past participle for an earlier action.' },
            { q: 'I had never seen such a beautiful view.', cue: 'Never', a: ['Never had I seen such a beautiful view.', 'Never before had I seen such a beautiful view.'], why: 'After a negative word at the start, use question word order: *Never had I seen…*' },
            { q: 'The price surprised me most.', cue: 'What', a: ['What surprised me most was the price.', 'What surprised me the most was the price.'], why: 'A cleft sentence with *What… was…* puts the emphasis on *the price*.' },
            { q: 'It wasn’t necessary for you to bring food, but you did.', cue: 'needn’t', a: ['You needn’t have brought food.', 'You need not have brought food.', 'You needn’t have brought any food.'], why: '*Needn’t have* + past participle: you did it, but it was not necessary.' },
            { q: 'She will probably win the prize.', cue: 'likely', a: ['She is likely to win the prize.', 'It is likely that she will win the prize.', 'She is very likely to win the prize.'], why: '*Be likely to* + base form means *will probably*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
            { key: 'pose', o: ['a threat', 'a question', 'a risk', 'a decision', 'an effort'], a: [0, 1, 2], why: 'We *pose a threat, a question* or *a risk*; we *make* a decision or an effort.' },
            { key: 'heavily', o: ['dependent', 'influenced', 'criticised', 'happy', 'small'], a: [0, 1, 2], why: '*Heavily* goes with *dependent*, *influenced* and *criticised*, not with *happy* or *small*.' },
            { key: 'bear', o: ['in mind', 'a resemblance to', 'responsibility', 'attention', 'a mistake'], a: [0, 1, 2], why: '*Bear in mind*, *bear a resemblance to* and *bear responsibility*; we *pay* attention and *make* a mistake.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
            { q: '___ no circumstances should you leave the room during the test.', a: ['Under', 'In'], why: '*Under no circumstances* + inversion: never.' },
            { q: 'Not only ___ the plan expensive, but it was also unpopular.', a: ['was'], why: 'After *Not only* at the start, use question word order: *was the plan*.' },
            { q: 'The more you practise, ___ easier the tasks become.', a: ['the'], why: '*The more…, the easier…*: two changes that go together.' },
            { q: 'Little ___ they know that the exam had been cancelled.', a: ['did'], why: '*Little did they know*: inversion with *did* for the past simple.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Writing and speaking: data, essays and extended answers',
      about: 'Describe a graph objectively, write a balanced essay at C1 level and give full answers in a speaking test.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Some academic exams, such as IELTS Academic, ask you to describe a graph, a table or a chart. Begin with an **overview**: the main trends in one or two sentences. Then describe the key features and compare them, with numbers. Do not give opinions or reasons that are not in the data, and do not try to mention every number.' },
          { t: 'examples', items: [
            { s: '**Overall**, the number of visitors to all three museums increased over the period, with the science museum showing the most dramatic growth.', n: 'An overview: the general trend and the most striking feature, without details.' },
            { s: 'Visitors to the art gallery **rose steadily from** 20,000 **to** 35,000.', n: '*From… to…* gives the start and end of a change.' },
            { s: 'The history museum, **by contrast**, saw little change until 2015.', n: '*By contrast* compares two lines on the graph.' },
            { s: 'The science museum attracted **roughly twice as many** visitors **as** the art gallery.', n: '*Twice as many… as…* compares quantities precisely.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use a range of structures for change: verb and adverb (*rose sharply*), adjective and noun (*a sharp rise*), and *there was* (*there was a sharp rise in…*). Repeating *increased* in every sentence looks like B2.' },
        ],
        [
          { t: 'text', md: 'In a **discursive essay**, you discuss a question and reach a clear conclusion. A good C1 essay has a clear position, deals fairly with the other side and uses precise, varied language. Each exam sets its own length and task points: check them before you plan.' },
          { t: 'table', caption: 'From B2 to C1 in an essay', explain: ['head'], head: ['B2', 'C1'], rows: [
            ['This is very important.', 'This is of paramount importance.'],
            ['In my opinion, …', 'I would argue that… / It seems to me that…'],
            ['There are a lot of advantages.', 'The benefits are considerable.'],
            ['But some people disagree.', 'Nevertheless, this view is not universally shared.'],
            ['So, …', 'It therefore follows that… / On balance, …'],
          ] },
        ],
        [
          { t: 'text', md: 'In speaking tests, a short answer gives the examiner little to assess. Extend each answer naturally: give a **reason**, an **example**, a **contrast** or a guess about the future. Do not learn speeches by heart: examiners notice, and it rarely answers the actual question.' },
          { t: 'dialogue', title: 'Part of a speaking test', lines: [
            { who: 'Examiner', s: 'Do you think people read less than they used to?' },
            { who: 'Sofia', s: 'In some ways, yes. People certainly read fewer printed books, partly because there are so many other things competing for their attention.' },
            { who: 'Sofia', s: 'That said, I’d argue that we actually read more words than ever, just in shorter forms, like messages and articles on our phones. My younger brother, for instance, hardly ever opens a novel, but he reads about his hobbies for hours.' },
            { who: 'Sofia', s: 'Whether that kind of reading is as valuable is another question, of course.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'How does Sofia extend her answer?', items: [
            { q: 'What does “partly because there are so many other things competing for their attention” add?', o: ['a reason', 'an example', 'a conclusion'], why: '*Because* introduces a reason for her opinion.' },
            { q: 'What does “That said” do?', o: ['It introduces a contrasting point.', 'It repeats the same point.', 'It ends her answer.'], why: '*That said* means *however*: she adds the other side.' },
            { q: 'Why does Sofia mention her brother?', o: ['to give a personal example', 'to change the topic', 'to ask the examiner a question'], why: '*For instance* introduces an example that supports her point.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best sentence for each purpose.', items: [
            { q: 'Which sentence is the best overview of a graph?', o: ['Overall, car use fell while cycling rose steadily over the period.', 'In 2010, car use was 60 per cent.', 'I think people cycle more because it is healthier.'], why: 'An overview gives the main trends; it does not give one figure or an opinion.' },
            { q: 'Which sentence does not belong in a description of data?', o: ['This is probably because the government built new cycle lanes.', 'Cycling rose from 5 to 15 per cent.', 'By contrast, bus use remained stable.'], why: 'The reason is not in the data, so it should not be in a data description.' },
            { q: 'Which essay sentence sounds most like C1?', o: ['Nevertheless, this view is not universally shared.', 'But some people do not agree.', 'Some people think different.'], why: 'Formal linking and precise vocabulary; the last option also has a grammar mistake.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake in each sentence.', items: [
            { s: 'The number of students [raised] from 200 to 450.', a: ['rose', 'increased', 'grew'], why: '*Rise* has no object: *rose*. *Raise* needs an object: *they raised prices*.' },
            { s: 'There was a sharp increase [of] the price of housing.', a: ['in'], why: '*An increase in* something; *an increase of* is used with the amount: *an increase of 10%*.' },
            { s: 'Cycling was popular, [compared than] driving.', a: ['compared with', 'compared to'], why: '*Compared with* or *compared to*, never *compared than*.' },
            { s: 'The proportion of [peoples] who cycled to work doubled.', a: ['people'], why: '*People* is already plural; *peoples* means nations or ethnic groups.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Practice reading: in praise of boredom',
      about: 'Read a passage in the style of a C1 academic reading task and answer exam-style questions under time pressure.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'In praise of boredom', md: '**A** For most of human history, boredom has been treated as a problem to be solved. Parents worry when children complain of having nothing to do, and employers see bored staff as a sign of poor management. Today, with a phone in almost every pocket, it has become possible to avoid boredom almost entirely. Yet a growing number of psychologists suggest that this may come at a cost.\n\n**B** One reason is that boredom appears to serve a purpose. Rather than being a simple absence of stimulation, it can be understood as a signal: a message that our current activity is not meeting our needs. Like hunger, the feeling is unpleasant precisely because it pushes us to act. Researchers who take this view argue that the problem is not boredom itself, but the speed with which we now silence it.\n\n**C** There is also some evidence that boredom can encourage creativity. In several small experiments, participants who first completed a deliberately dull task, such as copying numbers from a list, later produced more ideas in a creative task than those who had not been bored. The explanation offered is that a mind without external stimulation begins to wander, and that mind-wandering allows unexpected connections to be made. However, the effects found so far have been modest, and not every attempt to repeat these studies has succeeded.\n\n**D** None of this means that boredom is always beneficial. Chronic boredom, which lasts for long periods, has been linked to low mood, risky behaviour and poor concentration. The distinction that matters, many researchers believe, is between short episodes of boredom, which may prompt reflection or a change of activity, and a long-term state from which people feel unable to escape.\n\n**E** What, then, should we do? Few experts recommend making life deliberately dull. A more modest suggestion is that we might occasionally resist the urge to reach for a screen the moment we feel restless, and see where our thoughts lead instead.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each paragraph with the best heading.', pairs: [
            ['Paragraph A', 'An old problem with a modern solution'],
            ['Paragraph B', 'A feeling with a function'],
            ['Paragraph C', 'A possible link with new ideas'],
            ['Paragraph D', 'When boredom becomes harmful'],
            ['Paragraph E', 'A small change of habit'],
          ] },
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer compares boredom with hunger.', a: 't', why: '*Like hunger, the feeling is unpleasant precisely because it pushes us to act.*' },
            { q: 'All attempts to repeat the creativity experiments have produced the same results.', a: 'f', why: '*Not every attempt to repeat these studies has succeeded.*' },
            { q: 'Children today are more easily bored than children in the past.', a: 'ng', why: 'The text mentions children complaining, but does not compare them with the past.' },
            { q: 'Chronic boredom has been linked to poor concentration.', a: 't', why: 'It *has been linked to low mood, risky behaviour and poor concentration*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'According to paragraph B, what do some researchers see as the real problem?', o: ['how quickly people now end their boredom', 'the unpleasant feeling of boredom itself', 'the lack of interesting work'], why: '*The problem is not boredom itself, but the speed with which we now silence it.*' },
            { q: 'How does the writer describe the evidence on creativity?', o: ['promising but limited', 'conclusive', 'completely unreliable'], why: 'There is *some evidence*, but *the effects found so far have been modest*.' },
            { q: 'What is the writer’s overall attitude to boredom?', o: ['cautiously positive about short periods of it', 'strongly in favour of making life dull', 'convinced that it is always harmful'], why: 'Short boredom may help, chronic boredom harms, and *few experts recommend making life deliberately dull*.' },
            { q: 'In paragraph E, the word “modest” is closest in meaning to…', o: ['limited and not extreme', 'shy', 'cheap'], why: 'A *modest* suggestion is a small, reasonable one, not a dramatic change.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In multiple choice, the wrong options are often true of the text in general, but do not answer the exact question. Find the sentence that the question refers to and check every option against it.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'wordform', h: 'Complete each sentence with the correct form of the word in capitals.', items: [
      { q: 'The new rules are completely ___ to this situation.', base: 'relevant', a: ['irrelevant'], why: 'The negative prefix for *relevant* is *ir-*.' },
      { q: 'The study raised public ___ of the problem.', base: 'aware', a: ['awareness'], why: 'A noun after *public*: *awareness*.' },
      { q: 'The government plans to ___ the existing laws.', base: 'strong', a: ['strengthen'], why: 'A verb after *to*: *strengthen*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite each sentence so that it means the same. Use the word given.', items: [
      { q: 'People say that the castle is haunted.', cue: 'said', a: ['The castle is said to be haunted.', 'It is said that the castle is haunted.'], why: 'Passive reporting: *is said to be*.' },
      { q: 'I only understood the problem when I read the report.', cue: 'Only', a: ['Only when I read the report did I understand the problem.', 'Only after I read the report did I understand the problem.', 'Only after reading the report did I understand the problem.'], why: '*Only when* at the start is followed by inversion: *did I understand*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'How should you begin a description of a graph?', o: ['with an overview of the main trends', 'with every number in the first year', 'with your opinion of the data'], why: 'An overview of the main trends comes first.' },
      { q: 'We pose ___.', o: ['a threat', 'a decision', 'an effort'], why: '*Pose a threat*; we *make* a decision or an effort.' },
      { q: 'In a speaking test, what is the best way to answer a question?', o: ['answer it, then add a reason or an example', 'give a one-word answer', 'repeat a speech you learned by heart'], why: 'An extended, relevant answer shows your range.' },
      { q: 'Which sentence is the most suitable for a C1 essay?', o: ['On balance, the benefits are considerable.', 'So there are a lot of good things.', 'Anyway, it is very good.'], why: 'Formal linking and precise vocabulary.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Prices [raised] sharply in 2020.', a: ['rose', 'increased'], why: '*Rise* has no object: *prices rose*.' },
      { s: 'There was a fall [of] the number of visitors.', a: ['in'], why: '*A fall in* something.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Under no circumstances ___ students use their phones.', a: ['should', 'may', 'can', 'must'], why: 'Inversion after *Under no circumstances*: a modal before the subject.' },
      { q: 'Little ___ we realise how difficult it would be.', a: ['did'], why: '*Little did we realise*: inversion with *did*.' },
    ] },
  ],
};
