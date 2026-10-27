// English C1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'The future of society',
  goal: 'Discuss and write about future trends with a range of future forms and a clear argument.',
  art: 'cactus',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['future-forms', 'future-perfect-continuous', 'linking-words', 'discursive-essay', 'cities', 'future-trends'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Bound to change',
      about: 'Use advanced future forms for official plans, timetables, things about to happen and confident predictions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Beyond *will*, *going to* and the present continuous, English has a set of fixed phrases for the future. Each one adds a precise meaning: an official plan, a timetable, an event that is very close, or a prediction you feel sure about.' },
          { t: 'table', caption: 'Advanced future forms', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['*be to* + infinitive', 'an official plan or arrangement; also an order', 'The minister **is to visit** the region next week.'],
            ['*be due to* + infinitive', 'expected at a certain time, often in a timetable', 'The new law **is due to come** into force in January.'],
            ['*be on the verge of* / *be on the point of* + *-ing* or noun', 'very close to happening', 'Scientists **are on the verge of** a breakthrough.'],
            ['*be about to* + infinitive', 'going to happen very soon', 'Hurry up, the film **is about to start**.'],
            ['*be bound to* / *be sure to* + infinitive', 'certain to happen, in the speaker’s opinion', 'Anything new **is bound to attract** criticism.'],
            ['*be (un)likely to* + infinitive', 'probable or not probable', 'The plan **is unlikely to succeed** without public support.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **future perfect continuous** (*will have been* + *-ing*) looks back from a point in the future and stresses how long an activity will have lasted by then. It often comes with *by* and *for*.\n\n*Be to* also appears in conditions: *If we are to meet the target, we must act now* means *if we want to meet the target*. In news headlines, *be* is usually left out: *Minister to resign*.' },
          { t: 'examples', items: [
            { s: 'By 2035, she **will have been teaching** here for twenty years.', n: 'From a point in the future, we look back on how long the activity has lasted.' },
            { s: 'Next month, we **will have been living** in this flat for a decade.', n: 'The activity is still going on at that future point.' },
            { s: 'By the time the bridge opens, they **will have been building** it for six years.', n: 'After *by the time*, use the present simple (*opens*), not *will*.' },
            { s: 'If the city **is to** grow without more traffic, it needs better public transport.', n: '*Is to* = wants to, has the aim of.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use *be to* for personal plans with friends: it sounds official. *Be due to* suits timetables and schedules. *Be bound to* is a strong prediction based on your opinion or experience, not on a timetable.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'The prime minister ___ meet union leaders on Monday, a spokesperson confirmed.', o: ['is to', 'is bound to', 'is on the verge of'], why: 'An official arrangement announced by a spokesperson: *be to* + infinitive.' },
            { q: 'The train ___ arrive at 10.42, but it’s running late.', o: ['is due to', 'is bound to', 'is on the point to'], why: 'A time in a timetable: *be due to*.' },
            { q: 'After years of losses, the company is on the verge ___ bankruptcy.', o: ['of', 'to', 'for'], why: '*On the verge of* + noun or *-ing*.' },
            { q: 'Don’t worry about the exam. You’ve worked so hard that you’re ___ pass.', o: ['bound to', 'due to', 'on the point of'], why: 'A confident prediction based on your opinion: *bound to*.' },
            { q: 'By June, I ___ for this company for exactly ten years.', o: ['will have been working', 'will be working', 'am working'], why: 'Looking back from June on how long the activity has lasted: future perfect continuous.' },
            { q: 'If we ___ win this match, we need to defend much better.', o: ['are to', 'are bound to', 'are due to'], why: '*If* + *be to* = if we want to.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence with the word or words given.', items: [
            { q: 'The president has officially arranged to visit Japan in May.', cue: 'The president is', a: ['The president is to visit Japan in May.'], why: 'An official arrangement: *be to* + infinitive.' },
            { q: 'According to the schedule, the report will be published on Friday.', cue: 'The report is', a: ['The report is due to be published on Friday.', 'According to the schedule, the report is due to be published on Friday.'], why: 'A schedule: *be due to*, here with a passive infinitive.' },
            { q: 'The two companies will agree a deal very soon.', cue: 'verge', a: ['The two companies are on the verge of agreeing a deal.', 'The two companies are on the verge of a deal.'], why: '*On the verge of* + *-ing* or a noun.' },
            { q: 'I’m certain that the new rules will cause confusion.', cue: 'bound', a: ['The new rules are bound to cause confusion.'], why: 'A confident prediction: *be bound to* + infinitive.' },
            { q: 'He started training for the marathon in January. The race is in June.', cue: 'By June', a: ['By June, he will have been training for the marathon for five months.', 'By June, he will have been training for five months.', 'By June he will have been training for the marathon for five months.', 'By June he will have been training for five months.'], why: 'Looking back from June on the length of the training: *will have been* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word, or the verb in brackets.', items: [
            { q: 'Hurry! The doors are ___ to close.', a: ['about'], why: '*Be about to*: going to happen very soon.' },
            { q: 'The new museum is ___ to open next spring.', a: ['due', 'set', 'expected', 'scheduled'], why: 'A planned date: *is due to open*.' },
            { q: 'Talks have broken down, and the workers are on the ___ of going on strike.', a: ['point', 'verge', 'brink'], why: '*On the point of* or *on the verge of* + *-ing*: very close to happening.' },
            { q: 'If the city is ___ reduce traffic, it needs better public transport.', a: ['to'], why: '*If* + *be to* = if it wants to.' },
            { q: 'By the time they retire, they ___ (work) together for thirty years.', a: ['will have been working', '’ll have been working', 'will have worked', '’ll have worked'], why: 'Looking back from a future point on a long activity: future perfect continuous (the simple form is also possible).' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Given that…',
      about: 'Link the ideas of a complex argument with precise, formal connectors.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'In a complex argument, the link between two ideas matters as much as the ideas themselves. At B2 you used *however*, *on the other hand* and *as a result*. At C1 you need connectors that show more exact relationships, and you need to know the grammar that follows each one.' },
          { t: 'table', caption: 'Connectors for a complex argument', explain: ['head', 'col1', 'col2'], head: ['Connector', 'Meaning', 'What follows', 'Example'], rows: [
            ['whereas / while', 'a contrast between two facts', 'a clause', 'Older residents prefer cars, **whereas** younger ones tend to cycle.'],
            ['notwithstanding', 'despite (very formal)', 'a noun; it can also come after the noun', '**Notwithstanding** the cost, the council approved the plan.'],
            ['given that / given', 'considering the fact that', '*that* + a clause, or a noun', '**Given that** many people work from home, offices are changing.'],
            ['insofar as', 'to the extent that; only partly', 'a clause', 'The plan is fair **insofar as** everyone pays the same.'],
            ['in that', 'explaining in what way something is true', 'a clause', 'The policy is risky **in that** it depends on one supplier.'],
            ['albeit', 'although (formal)', 'an adjective, adverb or short phrase, not a full clause', 'The economy is growing, **albeit** slowly.'],
            ['that said', 'but, after what I have just said', 'a new clause or sentence', 'The plan has flaws. **That said**, it is better than nothing.'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: '**Given** the rise in rents, many young people are leaving the city.', n: '*Given* + noun = considering.' },
            { s: 'Remote work suits many parents, **whereas** young workers often miss the office.', n: 'Two facts placed side by side to contrast them.' },
            { s: 'The policy succeeded **insofar as** emissions fell, but traffic did not.', n: 'Only to this extent: the success was partial.' },
            { s: 'The scheme was a success, **albeit** a costly one.', n: '*Albeit* + a short phrase, not a clause.' },
            { s: 'The delays **notwithstanding**, the project was finished within budget.', n: '*Notwithstanding* can come after the noun. This is very formal.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Notwithstanding* and *despite* are followed by a noun, not a clause: *notwithstanding the delays*, not *notwithstanding there were delays*. With a clause, use *although* or *even though*. Do not put a comma straight after *whereas*.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best connector.', items: [
            { q: 'Some cities have invested heavily in trams, ___ others have relied on buses.', o: ['whereas', 'notwithstanding', 'albeit'], why: '*Whereas* + clause contrasts two facts.' },
            { q: '___ the objections of local residents, the new road was built.', o: ['Notwithstanding', 'Whereas', 'Insofar as'], why: '*Notwithstanding* + noun = despite.' },
            { q: '___ that the population is ageing, we will need more carers.', o: ['Given', 'Albeit', 'Whereas'], why: '*Given that* + clause = considering the fact that.' },
            { q: 'The proposal was accepted, ___ with some changes.', o: ['albeit', 'whereas', 'given'], why: '*Albeit* + a short phrase = although.' },
            { q: 'The plan is unusual ___ it gives residents a direct vote on spending.', o: ['in that', 'albeit', 'notwithstanding'], why: '*In that* explains in what way the plan is unusual.' },
            { q: 'The report is useful ___ it describes the problem, but it offers few solutions.', o: ['insofar as', 'albeit', 'notwithstanding'], why: '*Insofar as* = to the extent that. The report is useful only partly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words in the box.', extra: ['therefore', 'unless'], items: [
            { q: 'Rural areas are losing people, ___ cities continue to grow.', a: 'whereas', why: 'A contrast between two facts: *whereas*.' },
            { q: 'The festival went ahead, ___ on a smaller scale.', a: 'albeit', why: '*Albeit* + a short phrase.' },
            { q: '___ the high cost of land, it is hard to build cheap homes in the centre.', a: 'Given', why: '*Given* + noun = considering.' },
            { q: 'The new law is controversial ___ it limits the right to protest.', a: 'in that', why: '*In that* explains why the law is controversial.' },
            { q: 'The scheme was expensive. ___, it has reduced traffic considerably.', a: 'That said', why: '*That said* introduces a point that balances the one before.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Notwithstanding [there were] delays, the project was finished on time.', a: ['the'], why: '*Notwithstanding* + noun: *notwithstanding the delays*.' },
            { s: 'The plan worked, [albeit it was] slowly.', a: ['albeit'], why: '*Albeit* is followed by a short phrase, not a clause: *albeit slowly*.' },
            { s: '[Despite] the economy is growing, wages are not rising.', a: ['Although', 'Even though', 'While', 'Though'], why: 'A full clause follows, so use *although*. *Despite* needs a noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'For and against',
      about: 'Plan and write a balanced discursive essay with a clear structure and a strong conclusion.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'A **discursive essay** discusses a question from more than one side before it reaches a conclusion. Readers and examiners look for a clear structure, a fair balance of arguments and a conclusion that follows from what you have written.\n\nThe **introduction** gives the context in a sentence or two, restates the question in your own words and says how you will approach it. Each **body paragraph** develops one main idea: it opens with a topic sentence, supports it with reasons and examples, and leads into the next paragraph. A strong essay also deals with the **opposing view**: present it fairly, then explain why you find it less convincing. The **conclusion** weighs up the arguments and gives your final position. It does not introduce new arguments.' },
          { t: 'table', caption: 'Useful phrases', explain: ['head', 'col0'], head: ['Purpose', 'Phrases'], rows: [
            ['Introducing the topic', 'It is often argued that… / In recent years, there has been growing debate about…'],
            ['Stating the approach', 'This essay will examine… / The following paragraphs consider both sides of…'],
            ['Opening a paragraph', 'One of the main arguments in favour of… is… / A further consideration is…'],
            ['Presenting the other side', 'Critics of this view point out that… / It could be argued that…'],
            ['Answering the other side', 'While this is true to some extent, … / This argument, however, overlooks…'],
            ['Concluding', 'On balance, … / Taking everything into account, … / All things considered, …'],
          ] },
        ],
        [
          { t: 'reading', title: 'Should private cars be banned from city centres?', md: 'In recent years, there has been growing debate about whether private cars should be banned from city centres. This essay will consider the main arguments on both sides before reaching a conclusion.\n\nOne of the main arguments in favour of a ban is its effect on health. Cleaner air and quieter streets benefit everyone, especially children and older people. Moreover, space that is now used for parking could become parks, cycle lanes and terraces for cafés.\n\nCritics of this view point out that a ban would hit some groups much harder than others. People with disabilities, parents with small children and workers who start early may depend on a car, and small shops fear losing customers. While this is true to some extent, most of these problems could be solved with exceptions for those in genuine need and with better public transport.\n\nOn balance, the benefits of a car-free centre appear to outweigh the costs, provided that the change is introduced gradually and the needs of the most vulnerable are protected. A ban is not an end in itself; it is a means to a city that works better for the people who live in it.' },
          { t: 'tip', art: 'owl', md: 'Keep a neutral to formal register throughout: no contractions, few idioms, and *I* only in the conclusion, if at all. Vary your connectors, and give each paragraph one clear job.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the model essay.', items: [
            { q: '“This essay will consider the main arguments on both sides before reaching a conclusion.” What is the job of this sentence?', o: ['It says how the essay will approach the question.', 'It gives the writer’s final opinion.', 'It presents an argument against the ban.'], why: 'The introduction ends by stating the approach.' },
            { q: 'Which sentence would make the best topic sentence for a new body paragraph?', o: ['A further consideration is the cost of enforcing a ban.', 'Cars are bad and everyone knows it.', 'In conclusion, banning cars is a good idea.'], why: 'A topic sentence introduces one clear idea in a formal register. The others are too vague or belong in the conclusion.' },
            { q: 'Why does the writer include the paragraph that begins “Critics of this view…”?', o: ['To present the opposing view fairly and then answer it', 'To change the writer’s position completely', 'To introduce the topic'], why: 'The paragraph gives the other side and then answers it: *While this is true to some extent…*.' },
            { q: 'Which sentence should NOT be added to the conclusion?', o: ['Another interesting point is that electric cars are becoming cheaper.', 'On balance, the benefits seem to outweigh the costs.', 'Taking everything into account, a gradual ban appears to be the fairest solution.'], why: 'A conclusion weighs up what has been said. It does not introduce a new argument.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Where does each phrase belong in an essay? Sort the phrases.', explain: ['groups'], groups: ['introduction', 'body paragraph', 'opposing view', 'conclusion'], items: [
            { s: 'In recent years, there has been growing debate about…', g: 0, why: 'It introduces the topic and its context.' },
            { s: 'This essay will examine…', g: 0, why: 'It states the approach, at the end of the introduction.' },
            { s: 'One of the main arguments in favour of… is…', g: 1, why: 'A topic sentence that opens a body paragraph.' },
            { s: 'A further consideration is…', g: 1, why: 'It opens another body paragraph with a new idea.' },
            { s: 'Critics of this view point out that…', g: 2, why: 'It presents the other side.' },
            { s: 'It could be argued that…', g: 2, why: 'It introduces an argument the writer does not fully share.' },
            { s: 'On balance, …', g: 3, why: 'It weighs up the arguments.' },
            { s: 'All things considered, …', g: 3, why: 'It introduces the final position.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the essay phrases with one word.', items: [
            { q: '___ balance, the advantages of the plan outweigh the disadvantages.', a: ['On'], why: 'The fixed phrase is *on balance*.' },
            { q: 'Critics of this view point ___ that the costs are high.', a: ['out'], why: '*Point out that…* = mention a fact.' },
            { q: 'While this is true to some ___, it ignores the needs of rural areas.', a: ['extent', 'degree'], why: '*To some extent* admits that a point is partly true.' },
            { q: '___ everything into account, a gradual approach seems wisest.', a: ['Taking'], why: 'The fixed phrase is *taking everything into account*.' },
            { q: 'This argument, however, ___ the fact that most people cannot afford it.', a: ['overlooks', 'ignores'], why: '*Overlook* = fail to notice or consider something.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The city in 2050',
      about: 'Read an essay on cities in 2050, and notice its future forms and connectors.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'The city in 2050', md: 'Predictions about the future of cities have a poor record. The planners of the last century imagined flying cars and moving pavements; few of them foresaw the smartphone, which has changed urban life far more. Any attempt to describe the city of 2050 should therefore be made with some humility. That said, several trends are already visible, and some of them are bound to shape the decades ahead.\n\nThe first is growth. Most of the world’s people already live in cities, and in many regions urban populations are expected to keep rising. By 2050, some cities will have been expanding for so long that it will be hard to say where they end. Given that land is limited, the question is not whether cities will grow, but how: outwards, in suburbs that depend on cars, or upwards, in denser neighbourhoods where shops, schools and work are within walking distance.\n\nThe second trend is climate. Cities produce a large share of the gases that warm the planet, whereas they are also among the places most exposed to the results: heatwaves, floods and rising seas. Many coastal cities are on the verge of difficult choices about which areas they can protect. Adaptation is therefore likely to become as important as prevention, and buildings designed today will have to cope with summers far hotter than those their architects grew up with.\n\nTechnology is the third. Driverless vehicles, sensors and data are often presented as the answer to congestion and waste. Notwithstanding their potential, such tools are useful only insofar as they serve the people who live in the city; a street full of sensors is not necessarily a better street. There is also a risk that the benefits will reach wealthy districts first, albeit with the promise that others will follow.\n\nWhat, then, will the city of 2050 look like? It is unlikely to be the gleaming city of science fiction. In all probability it will be a patchwork: old buildings adapted to use less energy, streets given back to pedestrians, and neighbourhoods that are greener in some places and more crowded in others. The decisions that will determine which version we get are not due to be taken in 2049. They are being taken now, in council meetings and planning offices, and on the streets of the cities we already live in.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer thinks past predictions about cities were usually accurate.', a: 'f', why: '“Predictions about the future of cities have a poor record.”' },
            { q: 'Few planners of the last century predicted the smartphone.', a: 't', why: '“Few of them foresaw the smartphone.”' },
            { q: 'The writer is certain that cities will grow upwards rather than outwards.', a: 'f', why: 'The writer presents both as possible: the question is how cities will grow.' },
            { q: 'According to the writer, cities both cause climate change and suffer from its effects.', a: 't', why: 'They produce a large share of the gases and are among the places most exposed to the results.' },
            { q: 'The writer believes that sensors will automatically make streets better.', a: 'f', why: '“A street full of sensors is not necessarily a better street.”' },
            { q: 'Most coastal cities have already decided which areas to protect.', a: 'f', why: 'They are “on the verge of difficult choices”: they have not made them yet.' },
            { q: 'The writer works in a city planning office.', a: 'ng', why: 'Planning offices are mentioned, but nothing is said about the writer’s job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the essay.', items: [
            { q: '“Some of them are bound to shape the decades ahead.” How sure is the writer?', o: ['Very sure', 'Not sure at all', 'The writer does not give an opinion'], why: '*Be bound to* is a confident prediction.' },
            { q: '“By 2050, some cities will have been expanding for so long…” Why does the writer use the future perfect continuous?', o: ['To look back from 2050 on how long the growth will have lasted', 'To describe a single action at one moment in 2050', 'To show that the growth will stop before 2050'], why: '*Will have been* + *-ing* stresses the length of an activity up to a future point.' },
            { q: '“Notwithstanding their potential, such tools are useful only insofar as they serve the people who live in the city.” What does the writer mean?', o: ['Although the tools could help, they are only useful to the extent that they serve people.', 'Because the tools have potential, they always serve people.', 'The tools have no potential and should not be used.'], why: '*Notwithstanding* = despite; *insofar as* = to the extent that.' },
            { q: '“The decisions … are not due to be taken in 2049.” What point is the writer making?', o: ['The decisions are not scheduled for later; they are being made now.', 'The decisions will be taken in 2049.', 'Nobody will ever take these decisions.'], why: '*Be due to* refers to a schedule. The writer says there is no later date: the decisions are happening now.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words from the essay.', words: [
            { a: 'humility', clue: 'The quality of not thinking that you know more than you do.' },
            { a: 'suburb', clue: 'An area of homes on the edge of a city.' },
            { a: 'heatwave', clue: 'A period of unusually hot weather.' },
            { a: 'coastal', clue: 'On or near the sea.' },
            { a: 'congestion', clue: 'Too much traffic in the streets.' },
            { a: 'patchwork', clue: 'Something made of many different parts.' },
            { a: 'pedestrian', clue: 'A person who is walking in the street.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The new hospital ___ open next spring, according to the council’s timetable.', o: ['is due to', 'is bound to', 'is on the verge of'], why: 'A timetable: *be due to*.' },
      { q: 'Scientists say they are on the point ___ a major discovery.', o: ['of making', 'to make', 'make'], why: '*On the point of* + *-ing*.' },
      { q: 'By the end of this year, she ___ in the same office for fifteen years.', o: ['will have been working', 'will be working', 'has been working'], why: 'Looking back from a future point: future perfect continuous.' },
      { q: '___ the bad weather, the ceremony took place outdoors.', o: ['Notwithstanding', 'Whereas', 'Albeit'], why: '*Notwithstanding* + noun = despite.' },
      { q: 'The book is unusual ___ it has no main character.', o: ['in that', 'albeit', 'whereas'], why: '*In that* explains in what way the book is unusual.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'If we are ___ finish on time, we must start today.', a: ['to'], why: '*If* + *be to* = if we want to.' },
      { q: 'The project was a success, ___ an expensive one.', a: ['albeit'], why: '*Albeit* + a short phrase = although it was.' },
      { q: '___ that most people now shop online, the high street must change.', a: ['Given'], why: '*Given that* + clause = considering the fact that.' },
      { q: '___ balance, the arguments for the plan are stronger.', a: ['On'], why: '*On balance* introduces a conclusion.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite each sentence with the word or words given.', items: [
      { q: 'I’m sure the changes will be popular.', cue: 'bound', a: ['The changes are bound to be popular.'], why: 'A confident prediction: *be bound to*.' },
      { q: 'The mayor has an official plan to open the new bridge.', cue: 'The mayor is', a: ['The mayor is to open the new bridge.'], why: 'An official arrangement: *be to* + infinitive.' },
      { q: 'Some people live in the centre. Others prefer the suburbs.', cue: 'whereas', a: ['Some people live in the centre, whereas others prefer the suburbs.', 'Whereas some people live in the centre, others prefer the suburbs.'], why: '*Whereas* contrasts two facts in one sentence.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'By the time the film [will start], we will have been waiting for an hour.', a: ['starts'], why: 'After *by the time*, use the present simple for the future.' },
      { s: 'The train is [due] to be late again; it always is.', a: ['bound', 'sure', 'certain', 'likely'], why: 'This is a prediction from experience, not a timetable: *bound to*. *Due to* is for scheduled times.' },
    ] },
  ],
};
