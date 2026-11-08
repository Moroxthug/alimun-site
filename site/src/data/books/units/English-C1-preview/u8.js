// English C1, unit 8, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of C1 Advanced.
export const UNIT = {
  id: 'u8',
  title: 'The future of society',
  goal: 'Talk about plans, schedules and predictions with advanced future forms, link a complex argument with precise formal connectors, write the C1 Advanced essay, and read an essay on cities in 2050.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'writing', 'reading', 'speaking'], topics: ['future-forms', 'be-to', 'future-perfect-continuous', 'linkers', 'formal-connectors', 'essay', 'cities', 'society'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Bound to change',
      about: 'Use be to, be due to, be on the verge of, be bound to, be set to and the future perfect continuous for official plans, timetables, near events and confident predictions.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'By B2 you can use *will*, *going to*, the present continuous, the future continuous and the future perfect. At C1 English offers a further set of future forms, most of them built on **be + a phrase + infinitive**. Each one adds a precise shade of meaning: an official arrangement, a timetable, something that is about to happen, or a prediction you are confident about. You meet them constantly in news reports, official documents and serious discussion, which is exactly why the C1 Advanced exam tests them.\n\n**Be to** + infinitive describes **formal arrangements and official plans**: *The Prime Minister is to visit Berlin next week.* It also gives **instructions** from someone with authority: *You are to report to reception on arrival.* In the past it can describe **destiny**, what really happened later: *She left the village in 1950; she was never to return.*\n\n**Be due to** + infinitive is for things that are **expected according to a timetable or schedule**: *The train is due to arrive at 10.15.* **Be set to** is the favourite of journalists for something that **looks very likely soon**: *House prices are set to rise again.*' },
          { t: 'table', caption: 'Advanced future forms', explain: ['head', 'col2'], head: ['Form', 'Example', 'Meaning'], rows: [
            ['be to + infinitive', 'The new law is to come into force in April.', 'an official arrangement or an instruction'],
            ['be due to + infinitive', 'The report is due to be published on Friday.', 'expected by a timetable'],
            ['be set to + infinitive', 'Unemployment is set to fall this year.', 'likely soon (news style)'],
            ['be on the verge / brink of + -ing or noun', 'Scientists are on the verge of a breakthrough.', 'very close to happening (brink: often something bad)'],
            ['be on the point of + -ing', 'I was on the point of leaving when she called.', 'just about to'],
            ['be bound to / be sure to + infinitive', 'Prices are bound to go up.', 'the speaker is certain'],
            ['will have been + -ing', 'By 2030 I will have been teaching for twenty years.', 'duration up to a point in the future'],
          ] },
        ],
        [
          { t: 'text', md: '**Be on the verge of**, **be on the brink of** and **be on the point of** all mean that something is very close. They are followed by a **noun** or an **-ing** form, never by an infinitive: *on the verge of collapse*, *on the point of giving up*. *Brink* usually suggests danger or disaster: *on the brink of war*.\n\n**Be bound to** and **be sure to** express the speaker’s certainty, often based on experience: *If you leave it in the sun, it’s bound to melt.* Note that *bound to* here is about prediction, not obligation. Their opposites are *be unlikely to* and, for the future in the past, *was never to*.\n\nThe **future perfect continuous** (*will have been + -ing*) looks back from a point in the future and measures **how long** an activity will have lasted by then: *By the time the new airport opens, they will have been building it for twelve years.* It often explains a state at that future moment: *She will be exhausted: she will have been driving all day.*\n\nWhy so many forms? Because each one tells the listener **where the information comes from**: an authority (*is to*), a schedule (*is due to*), the evidence in the news (*is set to*), or the speaker’s own judgement (*is bound to*).' },
          { t: 'examples', items: [
            { s: 'All staff **are to** wear identification badges at all times.', n: 'An instruction from an authority.' },
            { s: 'The museum **is due to** reopen after the summer.', n: 'Expected according to the schedule.' },
            { s: 'The two companies **are set to** merge next year.', n: 'News style: it looks very likely.' },
            { s: 'The talks are **on the brink of** collapse.', n: '*Brink*: close to something bad. A noun follows.' },
            { s: 'I was **on the point of** booking the flight when the strike was announced.', n: 'Just about to, then interrupted.' },
            { s: 'Don’t worry, someone **is bound to** have a charger.', n: 'The speaker is confident.' },
            { s: 'Next month we **will have been living** here for a decade.', n: 'Future perfect continuous: duration up to a future point.' },
            { s: 'He moved to Canada in 1990, where he **was to** spend the rest of his life.', n: 'Future in the past: what happened later.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The company is on the verge to close.', 'The company is on the verge of closing.', '*On the verge of* + *-ing* or a noun.'],
            ['The plane is due to arriving at six.', 'The plane is due to arrive at six.', '*Be due to* + infinitive.'],
            ['By June I will be working here for five years.', 'By June I will have been working here for five years.', 'Duration up to a future point: future perfect continuous.'],
            ['I am to meet my friends for coffee later.', 'I’m meeting my friends for coffee later.', '*Be to* is for formal or official plans, not casual arrangements.'],
            ['It’s bound to rain, so you must take it.', 'It’s bound to rain, so take an umbrella.', '*Bound to* = certain to happen, not *obliged to*.'],
          ] },
          { t: 'dialogue', title: 'The evening news', lines: [
            { who: 'Grace', s: 'Did you hear? The government is to announce a new housing plan tomorrow.' },
            { who: 'Ravi', s: 'Another one? The last plan was due to deliver new homes by now.' },
            { who: 'Grace', s: 'This time the builders are on the verge of signing, apparently.' },
            { who: 'Ravi', s: 'There’s bound to be a delay. There always is.' },
            { who: 'Grace', s: 'Well, by next year we will have been waiting for a bigger flat for five years.' },
            { who: 'Ravi', s: 'So let’s hope this one is actually set to happen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the form that fits the meaning.', items: [
            { q: 'Passengers ___ remain seated until the aircraft has stopped.', o: ['are to', 'are bound to', 'are on the point of'], why: 'An official instruction: *be to*.' },
            { q: 'The next train to Leeds is ___ depart from platform four.', o: ['due to', 'on the verge to', 'bound'], why: 'A timetable: *due to*.' },
            { q: 'After weeks of strikes, the factory is on the ___ of closure.', o: ['brink', 'point', 'due'], why: '*On the brink of* + noun, for something bad.' },
            { q: 'Leave the cake on the table and the dog is ___ eat it.', o: ['bound to', 'due to', 'to'], why: 'A confident prediction: *bound to*.' },
            { q: 'By 2035, engineers ___ on the tunnel for fifteen years.', o: ['will have been working', 'will be working', 'are working'], why: 'Duration up to a future point.' },
            { q: 'She waved goodbye from the ship. She ___ see her homeland again.', o: ['was never to', 'is never to', 'will never be to'], why: 'Future in the past for what happened later.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first. Use the word given, which you must not change, and between three and six words.', items: [
            { q: 'The new bridge is scheduled to open in May.', cue: 'due', a: ['The new bridge is due to open in May.', 'The new bridge is due to be opened in May.'], why: '*Scheduled to* = *due to* (4 words: *is due to open*).' },
            { q: 'The company will almost certainly announce job cuts.', cue: 'bound', a: ['The company is bound to announce job cuts.'], why: '*Almost certainly* = *is bound to*.' },
            { q: 'The two sides very nearly reached an agreement.', cue: 'verge', a: ['The two sides were on the verge of reaching an agreement.', 'The two sides were on the verge of an agreement.'], why: '*On the verge of* + *-ing* or noun (6 words: *were on the verge of reaching*).' },
            { q: 'I started working here ten years ago next June.', cue: 'been', a: ['By next June, I will have been working here for ten years.', 'By next June I will have been working here for ten years.', 'By next June, I’ll have been working here for ten years.', 'Next June, I will have been working here for ten years.', 'Next June I will have been working here for ten years.'], why: 'Future perfect continuous: *will have been working*.' },
            { q: 'According to the official programme, the President will visit Rome next week.', cue: 'is', a: ['The President is to visit Rome next week.'], why: 'An official arrangement: *is to visit*.' },
            { q: 'Experts expect fuel prices to rise sharply this winter.', cue: 'set', a: ['Fuel prices are set to rise sharply this winter.'], why: 'News style for a likely event: *are set to rise*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **C1 Advanced Part 4** you write **three to six words**, including the word given, and you must not change that word. Each answer is worth **two marks**, and you can get one mark for half of it, so always write something. Contractions count as two words. Part 4 often tests fixed future phrases like *be on the verge of* and *be due to*, alongside passives, inversion and reporting.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'The new law is to come into force next spring.' },
            { a: 'The negotiations are on the brink of collapse.' },
            { a: 'Prices are bound to go up again.' },
            { a: 'By then, we will have been waiting for over a year.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Given that…',
      about: 'Link the ideas of a complex argument with whereas, notwithstanding, given that, insofar as, albeit and in that.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B2 you linked ideas with *although, however, despite* and *in addition*. A C1 argument needs connectors that say **exactly** how two ideas relate: not just *contrast*, but *a contrast between two parallel facts*; not just *reason*, but *a reason we both already accept*; not just *but*, but *but only to a certain extent*.\n\nThe most important thing to know about each connector is its **grammar**: what can follow it. Some take a **clause** (subject + verb), some take a **noun phrase**, and a few take just an adjective or adverb. Most C1 linking mistakes are grammar mistakes, not meaning mistakes.\n\n**Whereas** and **while** contrast **two parallel facts**: *Some cities are growing, whereas others are shrinking.* **Notwithstanding** is a very formal preposition meaning *despite*; it takes a noun and can even come after it: *Notwithstanding the cost, the project went ahead* or *The cost notwithstanding…*. **Given that** (+ clause) or **given** (+ noun) introduces a reason that is **already known or accepted**: *Given that the population is ageing, healthcare costs will rise.*' },
          { t: 'table', caption: 'Connectors for a complex argument', explain: ['head', 'col1', 'col3'], head: ['Connector', 'Meaning', 'Example', 'What follows'], rows: [
            ['whereas / while', 'contrast two parallel facts', 'Rents have risen, whereas wages have not.', 'a clause'],
            ['notwithstanding', 'despite (very formal)', 'Notwithstanding the delays, it opened on time.', 'a noun phrase'],
            ['given that / given', 'because of a known fact', 'Given the risks, caution is wise.', 'a clause / a noun'],
            ['insofar as', 'to the extent that, only as far as', 'The plan works insofar as it reduces traffic.', 'a clause'],
            ['in that', 'because, in the sense that', 'The study is useful in that it asks new questions.', 'a clause'],
            ['albeit', 'although (it is)', 'The economy grew, albeit slowly.', 'an adjective, adverb or noun phrase'],
            ['provided / providing that', 'only if', 'Provided that funding continues, the scheme will expand.', 'a clause'],
            ['let alone', 'and certainly not', 'Few can afford a flat, let alone a house.', 'a noun or verb, after a negative idea'],
          ] },
        ],
        [
          { t: 'text', md: '**Insofar as** (also written *in so far as*) limits a claim: it is true, but only to a certain extent. *The policy has succeeded insofar as fewer people now drive into the centre.* The writer is careful: one success, nothing more. Do not confuse it with *as far as I know* or *as far as… is concerned*.\n\n**In that** explains in what way something is true: *The two cities are similar in that both depend on tourism.* **Albeit** is a compact, formal *although* that is followed by an adjective, adverb or short phrase, never a full clause: *a small, albeit important, change*.\n\n**Let alone** follows a **negative** idea and adds something even less likely: *Many young people cannot afford to rent, let alone buy.* Informal speech uses *never mind* in the same way.\n\nThese connectors make writing more precise, but they are also **formal**. In an essay or report they show control. In conversation, *whereas* and *given that* are fine, but *notwithstanding* and *albeit* sound like a lecture.' },
          { t: 'examples', items: [
            { s: 'Older residents tend to drive, **whereas** younger ones prefer to cycle.', n: 'Two parallel facts in contrast.' },
            { s: '**Notwithstanding** strong opposition, the council approved the plan.', n: 'Very formal *despite*, + noun phrase.' },
            { s: '**Given that** energy prices are rising, insulation makes sense.', n: 'A reason the reader already accepts.' },
            { s: 'The scheme was a success **insofar as** it cut waiting times.', n: 'True, but only to that extent.' },
            { s: 'Remote work is attractive **in that** it saves travelling time.', n: 'Explains the way in which it is attractive.' },
            { s: 'The population is growing, **albeit** at a slower rate.', n: '*Albeit* + a phrase, not a clause.' },
            { s: 'Most people cannot imagine life in 2100, **let alone** plan for it.', n: 'After a negative idea, something even less likely.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Notwithstanding of the cost, they continued.', 'Notwithstanding the cost, they continued.', '*Notwithstanding* is a preposition; no *of*.'],
            ['The town grew, albeit it was slow.', 'The town grew, albeit slowly.', '*Albeit* is followed by a phrase, not a clause.'],
            ['Giving that prices are high, we waited.', 'Given that prices are high, we waited.', 'The form is *given*, the past participle.'],
            ['I can’t swim, let alone I can dive.', 'I can’t swim, let alone dive.', '*Let alone* + a word or phrase, not a new clause.'],
            ['Whereas the city is large. It has few parks.', 'Whereas the city is large, it has few parks.', '*Whereas* joins two clauses in one sentence.'],
          ] },
          { t: 'dialogue', title: 'A planning meeting', lines: [
            { who: 'Nadia', s: 'Given that the budget is fixed, we can’t build the new library and the sports centre.' },
            { who: 'Karim', s: 'True. The library would help more people, whereas the sports centre would mainly serve the clubs.' },
            { who: 'Nadia', s: 'The sports centre is popular in that it brings visitors to the town, though.' },
            { who: 'Karim', s: 'Only insofar as there are tournaments. Most weeks it would be half empty.' },
            { who: 'Nadia', s: 'So the library, then, albeit a smaller one than we planned?' },
            { who: 'Karim', s: 'Agreed. Most residents can’t name a sports club, let alone join one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the connector that fits the meaning and the grammar.', items: [
            { q: 'The north of the country is wet, ___ the south is almost desert.', o: ['whereas', 'albeit', 'notwithstanding'], why: 'Two parallel facts in contrast: *whereas*.' },
            { q: '___ the bad weather, the festival went ahead.', o: ['Notwithstanding', 'Whereas', 'In that'], why: 'A noun phrase follows: *notwithstanding* = *despite*.' },
            { q: 'The plan is fair ___ everyone pays the same rate.', o: ['in that', 'let alone', 'albeit'], why: '*In that* explains in what way it is fair.' },
            { q: 'Living standards improved, ___ unevenly.', o: ['albeit', 'whereas', 'given that'], why: '*Albeit* + an adverb.' },
            { q: '___ how quickly technology changes, schools must teach adaptability.', o: ['Given', 'Albeit', 'Insofar'], why: '*Given* + a noun phrase or *wh*-clause: a known fact.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: '[Giving] that the roads are full, a new railway is needed.', a: ['Given'], why: 'The connector is *given that*.' },
            { s: 'The project was approved, albeit [it was late].', a: ['late'], why: '*Albeit* + a phrase, not a clause.' },
            { s: 'Notwithstanding [of the protests], the law was passed.', a: ['the protests'], why: 'No *of* after *notwithstanding*: it is followed directly by the noun phrase.' },
            { s: 'Few people can explain the system, let alone [they can change] it.', a: ['change'], why: '*Let alone* + the verb only.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the text “Planning for the unknown” and write one word in each gap.', items: [
            { q: 'Planning for the future is difficult, ___ that nobody knows what technology will exist in thirty years.', a: ['given'], why: '*Given that* introduces a known fact.' },
            { q: 'Some planners try to predict specific inventions, ___ others focus on flexible systems.', a: ['whereas', 'while', 'whilst'], why: 'Two parallel approaches in contrast.' },
            { q: 'The second approach is wiser in ___ it does not depend on any single guess.', a: ['that'], why: '*In that* explains why.' },
            { q: 'A flexible system can adapt, ___ slowly, to almost any change.', a: ['albeit'], why: '*Albeit* + an adverb.' },
            { q: 'Most governments cannot plan ten years ahead, let ___ fifty.', a: ['alone'], why: '*Let alone* after a negative idea.' },
            { q: 'This is not a reason to give ___ planning, however.', a: ['up'], why: '*Give up* = stop doing.' },
            { q: 'Long-term plans are useful ___ so far as they force us to think about our priorities.', a: ['in'], why: '*In so far as* can be written as three words.' },
            { q: '___ the uncertainty, a society that plans will be better prepared than one that does not.', a: ['Notwithstanding', 'Despite'], why: 'A preposition before a noun phrase: *despite* or formal *notwithstanding*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Linkers are a favourite of **Part 2** because one word changes the whole logic of a sentence. Before you fill a gap, ask what the relationship is: **contrast**, **reason**, **condition** or **limit**? Then check the grammar: does a noun or a clause follow? *Despite* + noun, *although* + clause.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Given that the budget is limited, we need to choose carefully.' },
            { a: 'The economy is recovering, albeit slowly.' },
            { a: 'Some people welcome change, whereas others fear it.' },
            { a: 'Few can afford to rent, let alone buy.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Writing the essay',
      about: 'Write the C1 Advanced essay (Writing Part 1): choose two of the three points, compare them, and reach a clear conclusion in 220 to 260 words.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: '**Writing Part 1** of C1 Advanced is always an **essay**, and it is compulsory. You write **220 to 260 words**. The task is different from B2 in an important way. You are told that you have attended a talk, seminar or panel discussion, and you are given **notes with three points**: three methods, three factors or three areas. Below the notes there are often **opinions** that people expressed in the discussion.\n\nYou must write about **two of the three points**, not all three. Then you must **decide which of your two is more important** (or more effective, or more urgent, whatever the question asks) and **give reasons**. That decision is the heart of the essay: a C1 essay does not just list advantages, it evaluates and comes to a judgement.\n\nYou may use the opinions, but **in your own words**: copying them earns nothing. You have **1 hour 30 minutes** for the whole Writing paper, so about **45 minutes** for the essay.' },
          { t: 'table', caption: 'A plan for a C1 Advanced essay', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What to write', 'Useful language'], rows: [
            ['Introduction', 'The topic in your own words, why it matters, which two points you will discuss', 'Of the methods discussed, two stand out…'],
            ['First point', 'Your first chosen point: how it works, a reason, an example, a limitation', 'The case for… rests on… / Notwithstanding…'],
            ['Second point', 'Your second chosen point, compared with the first', 'By contrast, … / Given that…, … albeit…'],
            ['Conclusion', 'Which point is more important, and the deciding reason', 'On balance, I believe that… is the priority, insofar as…'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model essay', md: 'Task: Your class has attended a panel discussion on how governments can prepare society for the future. You have made the notes below. Methods: adult education, public transport, healthcare. Some opinions expressed: “Retraining adults is too expensive for most countries.” “Traffic is the first thing people complain about.” “Without a healthy population, nothing else works.” Write an essay discussing two of the methods in your notes. You should explain which method is more important for governments to invest in, giving reasons in support of your answer.\n\nGovernments today face a difficult question: how can a society prepare for changes that have not yet happened? Of the methods discussed, investment in adult education and better public transport stand out, although they differ considerably in their impact.\n\nThe case for adult education rests on the pace of change at work. Some of the jobs that today’s school leavers will be doing in twenty years’ time may not yet exist, and a qualification gained at eighteen is unlikely to last a whole career. Funding courses for adults, although costly in the short term, allows workers to adapt rather than be left behind. Notwithstanding the expense, it is arguably an investment that pays for itself.\n\nPublic transport, by contrast, addresses a more visible problem. Given that many cities are set to grow, faster and cheaper trains and buses would reduce congestion and pollution, not to mention the hours people lose travelling. Their benefits would also be felt almost immediately. However, such projects take decades to complete, and they mainly benefit those who live near the new lines, albeit considerably.\n\nOn balance, I believe that education should be the priority. Transport improvements are valuable insofar as they make daily life easier, but they cannot help people whose skills no longer match the jobs available. A society that keeps learning is far better placed to cope with whatever the future brings, including changes that no transport plan could anticipate.' },
          { t: 'ex', kind: 'choice', h: 'Read the model essay. Choose the correct answer.', items: [
            { q: 'Which point from the notes does the writer leave out?', o: ['Healthcare', 'Adult education', 'Public transport'], why: 'The task asks for two of the three methods; healthcare is not discussed.' },
            { q: 'How does the writer use the opinion “Retraining adults is too expensive”?', o: ['By rephrasing it as a cost and answering it.', 'By copying it word for word.', 'By ignoring it completely.'], why: '*Although costly in the short term… Notwithstanding the expense…*: the idea in new words, with a reply.' },
            { q: 'What does the conclusion do?', o: ['It chooses one method and gives the deciding reason.', 'It says both methods are equally important.', 'It introduces healthcare as a new idea.'], why: 'The task asks which is more important: *education should be the priority* because…' },
            { q: 'Why does the second body paragraph begin with *by contrast*?', o: ['It compares the second method with the first.', 'It disagrees with the task.', 'It starts the conclusion.'], why: 'A C1 essay compares and evaluates, not just lists.' },
          ] },
        ],
        [
          { t: 'text', md: 'The examiner marks four areas. **Content**: are both chosen points discussed, and does the essay say which is more important, with reasons? **Communicative achievement**: is it a convincing, formal essay that holds the reader’s attention, with a clear position? **Organisation**: are the paragraphs logical, and are ideas linked with a **range** of connectors, not only *firstly* and *secondly*? **Language**: is there a range of C1 vocabulary and structures, used accurately, such as the future forms and linkers of this unit?\n\nThe commonest weak C1 essay is the **B2 essay at greater length**: three points described one after another, a conclusion that says *there are advantages and disadvantages*, and no real evaluation. The second commonest is the essay that **copies the opinions** from the task. Plan for five minutes, decide your answer before you write, and make every paragraph lead towards it.' },
          { t: 'table', caption: 'Common mistakes in C1 essays', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['(writing about all three points)', 'Two points, discussed in depth', 'The task asks for two; a third makes each one shallow.'],
            ['In conclusion, both have pros and cons.', 'On balance, education should be the priority, insofar as…', 'You must decide which is more important.'],
            ['“Traffic is the first thing people complain about.”', 'Congestion is perhaps the most visible daily frustration.', 'Use the opinions in your own words.'],
            ['Firstly… Secondly… Thirdly… Finally…', 'The case for… By contrast… Given that…', 'C1 needs a range of linking, not a list.'],
            ['I think it’s a really big problem.', 'This is arguably the most pressing issue.', 'Formal register: no contractions, precise words, hedging.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which paragraph of the essay does each sentence belong to?', groups: ['Introduction', 'Body paragraph', 'Conclusion'], explain: ['groups'], items: [
            { s: 'Of the three approaches discussed, two deserve particular attention.', g: 0, why: 'It introduces the two chosen points.' },
            { s: 'The case for green spaces rests largely on public health.', g: 1, why: 'It develops one point with a reason.' },
            { s: 'Housing, by contrast, affects people’s lives more directly.', g: 1, why: 'It compares the second point with the first.' },
            { s: 'On balance, affordable housing is the more urgent priority.', g: 2, why: 'It gives the final judgement.' },
            { s: 'How should cities change to meet the needs of future generations?', g: 0, why: 'It presents the topic as a question.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite these sentences in a formal essay style. Use the word given.', items: [
            { q: 'Lots of people say it costs too much, but it’s worth it anyway.', cue: 'notwithstanding', a: ['Notwithstanding the cost, it is worth the investment.', 'Notwithstanding the cost, it is worthwhile.', 'Notwithstanding the expense, it is worth the investment.', 'Notwithstanding the cost, it is worth it.', 'Notwithstanding the high cost, it is worth the investment.'], why: '*Notwithstanding* + noun, and no contractions.' },
            { q: 'Cities are going to get bigger, so we need better transport.', cue: 'given', a: ['Given that cities are set to grow, better transport is needed.', 'Given that cities are set to grow, better transport will be needed.', 'Given that cities are going to grow, better transport is needed.', 'Given that cities are set to expand, better transport is needed.', 'Given that cities are bound to grow, better transport is needed.'], why: '*Given that* + a known fact; *set to* is a formal future.' },
          ] },
        ],
        [
          { t: 'text', md: 'Your task. Write this essay and give it to your teacher, who will correct it and mark it on the four areas above.\n\n*Your class has watched a documentary about how communities can become more resilient in the coming decades. You have made the notes below. Ways to make communities more resilient: local food production, neighbourhood networks, renewable energy. Some opinions expressed in the documentary: “Growing our own food would make us less dependent on imports.” “People don’t even know their neighbours any more.” “Clean energy is the only long-term answer.” Write an essay discussing two of the ways in your notes. You should explain which way would be more effective, giving reasons in support of your answer.*\n\nWrite **220 to 260 words**. Use at least two of the future forms and three of the connectors from this unit.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 1): before you write the essay above, choose the best answer to each question.', items: [
            { q: 'How many of the three ways must you discuss?', o: ['Two', 'All three', 'One'], why: 'The task says *discussing two of the ways*.' },
            { q: 'Which opening is best?', o: ['As climates and economies grow less predictable, the question of how communities can protect themselves has never seemed more urgent.', 'People don’t even know their neighbours any more.', 'In this essay I will write about three things.'], why: 'It introduces the topic in the writer’s own words, formally.' },
            { q: 'Which conclusion answers the question?', o: ['On balance, neighbourhood networks would be more effective, in that they help people in almost any crisis.', 'In conclusion, all of these ideas are good in their own way.', 'Finally, renewable energy is also important.'], why: 'It chooses one way and gives the deciding reason.' },
            { q: 'How should you use the opinion “Clean energy is the only long-term answer”?', o: ['Rephrase it and agree or disagree with reasons.', 'Copy it into the introduction.', 'Ignore it: opinions are not allowed.'], why: 'Opinions may be used, but in your own words.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Spend about **45 minutes** on the essay: **5 to plan** (choose your two points and decide your answer), **35 to write**, **5 to check** for the word count, contractions and accuracy. Choose the two points you have **most to say about**, not the ones that seem most impressive.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these essay sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Of the methods discussed, two stand out.' },
            { a: 'The case for adult education rests on the pace of change at work.' },
            { a: 'On balance, I believe that education should be the priority.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The city in 2050',
      about: 'Read an essay on how cities may change by 2050, follow its argument, and use its language to discuss the future.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'This lesson brings the unit together in a long essay like the texts in **C1 Advanced Reading and Use of English Part 5**. The writer makes predictions with the future forms from lesson 1, links the argument with the connectors from lesson 2, and reaches a clear judgement like the essay in lesson 3. Read it first for the main argument, then for the writer’s attitude.' },
          { t: 'reading', title: 'The city in 2050', md: 'Predictions about the city of the future have a poor record. The planners of the last century imagined flying cars and moving pavements; few of them imagined the smartphone, which has changed urban life far more. Any honest essay on the city in 2050 should therefore begin with a confession: most of what follows is bound to be wrong in some way.\n\nSome trends, however, are already well under way. Most forecasts agree that a larger share of humanity will live in cities by the middle of the century, and that many of those cities will be older on average, hotter in summer and more crowded than they are today. Given that the buildings and streets of 2050 are largely the ones we have now, the real question is not what new cities will look like, but how existing ones will adapt.\n\nAdaptation is less glamorous than invention, albeit far more important. It means planting trees where there is concrete, turning car parks into homes, and redesigning streets so that people can walk to most of what they need. Cities that have tried such changes report quieter streets and busier local shops, whereas the feared collapse in trade has rarely happened.\n\nTechnology will play a part, but only insofar as it serves these simpler goals. A city full of sensors is not necessarily a better place to live; a city where an elderly resident can reach a doctor, a park and a friend without a car almost certainly is. The danger is that cities will chase impressive projects while neglecting the ordinary ones, the repaired pavement and the reliable bus.\n\nBy 2050 many of today’s children will have been living with these decisions for most of their adult lives. They are unlikely to judge us by the gadgets we installed, let alone the slogans we used. They will judge us by whether the city still felt like home.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 5): read the essay and choose the best answer.', items: [
            { q: 'Why does the writer mention flying cars and the smartphone?', o: ['To show that predictions about cities often miss what really matters.', 'To argue that technology has had little effect on cities.', 'To suggest that flying cars will soon be common.'], why: 'Planners imagined flying cars but *few of them imagined the smartphone*.' },
            { q: 'What is the writer’s “confession” in the first paragraph?', o: ['That parts of the essay will probably turn out to be wrong.', 'That the writer dislikes city life.', 'That the writer has never studied planning.'], why: '*Most of what follows is bound to be wrong in some way.*' },
            { q: 'According to the second paragraph, the main challenge for cities is', o: ['changing the places that already exist.', 'building completely new cities.', 'stopping people moving to cities.'], why: '*Not what new cities will look like, but how existing ones will adapt.*' },
            { q: 'What does the writer say about cities that have redesigned their streets?', o: ['Local trade has generally not suffered as people feared.', 'Shops have closed in large numbers.', 'Residents have moved away.'], why: '*The feared collapse in trade has rarely happened.*' },
            { q: 'What is the writer’s view of technology in the fourth paragraph?', o: ['It is valuable only when it supports basic needs.', 'It is the key to the city of the future.', 'It should be removed from cities.'], why: '*Only insofar as it serves these simpler goals.*' },
            { q: 'What is the main point of the final paragraph?', o: ['Future generations will judge cities by how liveable they are.', 'Children in 2050 will be more interested in gadgets.', 'Slogans will matter more than buildings.'], why: '*They will judge us by whether the city still felt like home.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 5 questions often test the **function** of a detail: *Why does the writer mention…?* The answer is rarely the detail itself; it is what the detail **proves**. Ask yourself what argument the example supports.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): use the word in capitals to form a word that fits the gap.', items: [
            { q: 'Most ___ about the city of the future have proved wrong.', base: 'predict', a: ['predictions'], why: 'A plural noun after *Most*.' },
            { q: 'Adaptation is less ___ than invention, but more important.', base: 'glamour', a: ['glamorous'], why: 'An adjective; note the spelling *glamorous*, without *u*.' },
            { q: 'Many cities have become ___ crowded in recent decades.', base: 'increase', a: ['increasingly'], why: 'An adverb before *crowded*.' },
            { q: 'The ___ of public transport matters more than its speed.', base: 'rely', a: ['reliability'], why: 'A noun after *The*.' },
            { q: 'Some projects are impressive but ___ for ordinary residents.', base: 'use', a: ['useless', 'unusable'], why: 'A negative adjective is needed.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'In the style of Speaking Part 4, say these answers after the tutor.', tutor: 'kofi', items: [
            { a: 'Cities are bound to change, but perhaps more slowly than we expect.' },
            { a: 'Technology helps only insofar as it makes daily life easier.' },
            { a: 'Given that most buildings will still be here, we need to adapt them.' },
            { a: 'What matters most is whether the city still feels like home.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the form that fits.', items: [
      { q: 'The flight is ___ land at 18.40.', o: ['due to', 'on the verge to', 'bound'], why: 'A timetable: *due to*.' },
      { q: 'Visitors ___ leave their bags at the entrance.', o: ['are to', 'are due to', 'are on the point of'], why: 'An official instruction: *are to*.' },
      { q: 'The species is on the brink of ___.', o: ['extinction', 'to die out', 'die out'], why: '*On the brink of* + noun.' },
      { q: 'By May, she ___ the orchestra for twenty years.', o: ['will have been conducting', 'will be conducting', 'conducts'], why: 'Duration up to a future point.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first. Use the word given and between three and six words.', items: [
      { q: 'Experts expect rents to rise again next year.', cue: 'set', a: ['Rents are set to rise again next year.'], why: '*Are set to* for a likely future event.' },
      { q: 'I was just about to call you when you arrived.', cue: 'point', a: ['I was on the point of calling you when you arrived.'], why: '*On the point of* + *-ing*.' },
      { q: 'Although the cost was high, the council approved the plan.', cue: 'notwithstanding', a: ['Notwithstanding the high cost, the council approved the plan.', 'The high cost notwithstanding, the council approved the plan.'], why: '*Notwithstanding* + noun phrase.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'The town is growing, ___ slowly.', a: ['albeit'], why: '*Albeit* + adverb.' },
      { q: '___ that the climate is changing, cities must plan for hotter summers.', a: ['Given'], why: 'A known fact: *given that*.' },
      { q: 'Few people can afford a car, let ___ a house.', a: ['alone'], why: '*Let alone* after a negative idea.' },
      { q: 'The plan is fair in ___ everyone benefits.', a: ['that'], why: '*In that* explains why.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The talks are on the verge [to collapse].', a: ['of collapse', 'of collapsing'], why: '*On the verge of* + noun or *-ing*.' },
      { s: '[Giving] that prices are high, many people rent.', a: ['Given'], why: 'The connector is *given that*.' },
      { s: 'The economy grew, albeit [it was slow].', a: ['slowly'], why: '*Albeit* + a phrase, not a clause.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'C1 Advanced Writing Part 1: choose the correct answer.', items: [
      { q: 'How many words should the essay have?', o: ['220 to 260', '140 to 190', '300 to 350'], why: 'The C1 Advanced essay is 220 to 260 words.' },
      { q: 'How many of the three points in the notes should you discuss?', o: ['Two', 'Three', 'One'], why: 'Two of the three, then a judgement between them.' },
      { q: 'What must the conclusion do?', o: ['Say which point is more important, with a reason.', 'List all the advantages again.', 'Introduce the third point.'], why: 'The essay must evaluate and decide.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True, false or not given, according to the essay in lesson 4.', ng: true, items: [
      { q: 'The writer is confident that every prediction in the essay will come true.', a: 'f', why: '*Most of what follows is bound to be wrong in some way.*' },
      { q: 'The writer thinks most of the buildings of 2050 already exist.', a: 't', why: '*The buildings and streets of 2050 are largely the ones we have now.*' },
      { q: 'The writer lives in a city with many sensors.', a: 'ng', why: 'The essay does not say where the writer lives.' },
    ] },
  ],
};
