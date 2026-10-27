// English C2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Academic and critical writing',
  goal: 'Take a measured, evidence-based stance in academic writing.',
  art: 'owl',
  tags: { skills: ['writing', 'reading', 'vocabulary'], topics: ['hedging', 'boosting', 'reporting verbs', 'noun phrases', 'critical evaluation', 'signposting'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Arguably, ostensibly, undoubtedly',
      about: 'Hedge and boost claims to show exactly how sure you are.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say that something is simply true. They show **how sure** they are. **Hedges** make a claim less certain: *arguably*, *it would seem*, *tends to*, *to a large extent*, *somewhat*, *may*, *appear to*. **Boosters** make it stronger: *clearly*, *undoubtedly*, *it is evident that*, *without doubt*. Some adverbs need care. **Ostensibly** means *apparently, but perhaps not in reality*: *The trip was ostensibly a holiday, but it was also a business meeting.* **Purportedly** means *as people claim, without proof*.' },
          { t: 'table', caption: 'Hedges and boosters', explain: ['head', 'col0'], head: ['Function', 'Examples', 'Sample sentence'], rows: [
            ['hedge: possibility', 'it would seem, appears to, may', 'The data would seem to support this view.'],
            ['hedge: frequency or degree', 'tends to, to a large extent, somewhat', 'Prices tend to rise in summer.'],
            ['hedge: opinion', 'arguably, in my view', 'This is arguably the most important change.'],
            ['hedge: doubt about truth', 'ostensibly, purportedly', 'The visit was ostensibly private.'],
            ['booster', 'clearly, undoubtedly, evidently', 'The results are clearly significant.'],
          ] },
        ],
        [
          { t: 'text', md: 'Too many hedges make you sound unsure; too many boosters make you sound arrogant. A strong paragraph balances them. In a weak argument: *It is undoubtedly true that all students prefer online lessons.* In a measured one: *The survey suggests that many students prefer online lessons, although this may vary by subject.* Notice **suggests**, **many** and **may**: three small hedges that make the claim defensible.' },
          { t: 'tip', art: 'owl', md: 'Be especially careful with absolute words: *all, always, never, proves, impossible*. They are almost always too strong in academic writing. Replace them: *all → most / many*; *always → often / tends to*; *proves → suggests / indicates*.' },
          { t: 'ex', kind: 'transform', h: 'Make the claim more cautious, using the word given.', items: [
            { q: 'Social media causes anxiety in teenagers.', cue: 'may', a: ['Social media may cause anxiety in teenagers.', 'Social media may cause anxiety among teenagers.'], why: 'The hedge *may* reduces certainty.' },
            { q: 'The study proves that exercise improves memory.', cue: 'suggests', a: ['The study suggests that exercise improves memory.'], why: '*Suggests* is weaker than *proves*.' },
            { q: 'All young people prefer text messages.', cue: 'tend', a: ['Young people tend to prefer text messages.', 'Most young people tend to prefer text messages.'], why: '*Tend to* hedges frequency.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best word.', items: [
            { q: 'The new law was ___ introduced to protect workers, though critics believe it benefits employers.', o: ['ostensibly', 'undoubtedly', 'clearly'], why: '*Ostensibly*: apparently, but perhaps not truly.' },
            { q: 'The evidence is ___ in favour of the new treatment: all four trials agree.', o: ['overwhelmingly', 'arguably', 'purportedly'], why: 'A strong booster fits strong evidence.' },
            { q: 'This is ___ the most influential novel of the decade, though some would disagree.', o: ['arguably', 'undoubtedly', 'evidently'], why: '*Arguably* hedges an opinion.' },
            { q: 'The company, which ___ donates to local charities, was accused of tax avoidance.', o: ['purportedly', 'clearly', 'undoubtedly'], why: '*Purportedly*: as claimed, without proof.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
            { s: 'tends to', g: 0, why: 'A hedge for frequency.' },
            { s: 'undoubtedly', g: 1, why: 'A booster.' },
            { s: 'it would seem', g: 0, why: 'A hedge.' },
            { s: 'evidently', g: 1, why: 'A booster.' },
            { s: 'to a large extent', g: 0, why: 'A hedge for degree.' },
            { s: 'without doubt', g: 1, why: 'A booster.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Contend, posit, concede',
      about: 'Use complex noun phrases and precise reporting verbs.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Academic English packs information into **noun phrases**. Instead of *More people are working from home, and this matters*, a writer might say *the growing number of people working from home* or *a marked increase in remote working*. Useful frames: *the extent to which…*, *a growing body of evidence*, *a marked increase in…*, *the lack of…*, *the implications of…*. The noun phrase can be the subject: *A growing body of evidence suggests that…*' },
          { t: 'examples', items: [
            { s: '**The extent to which** screens affect sleep remains unclear.', n: 'A noun phrase as subject, followed by *remains unclear*.' },
            { s: '**A growing body of evidence** suggests that bilingual children concentrate better.', n: 'Impersonal and academic.' },
            { s: '**The lack of** funding has slowed the project.', n: 'A noun phrase replacing *there is not enough funding*.' },
          ] },
        ],
        [
          { t: 'text', md: 'To refer to other writers, choose a **reporting verb** that shows their stance. **Argue**, **claim** and **suggest** are common. **Contend** and **maintain** show a firm position. **Posit** means *put forward as a basis for argument*. **Assert** is strong and may sound forceful. **Concede** means *admit reluctantly*. **Dispute** and **question** show disagreement. **Allege** shows doubt: the claim has not been proved. Use the **present** for what an author says (*Smith argues…*) and the **past** for what a study did (*The researchers found…*).' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col0'], head: ['Verb', 'What it shows', 'Example'], rows: [
            ['argue / suggest', 'neutral', 'The author argues that cities should reduce traffic.'],
            ['contend / maintain', 'firm position', 'She contends that the policy has failed.'],
            ['posit', 'puts forward an idea', 'The theory posits that memory is reconstructive.'],
            ['concede', 'admits reluctantly', 'The writer concedes that the sample was small.'],
            ['dispute / question', 'disagrees', 'Several scholars dispute this claim.'],
            ['allege', 'doubt about the truth', 'The report alleges that funds were misused.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Do not use **allege** unless you want to signal doubt, and be careful with **claim**, which can also suggest doubt (*He claims to be an expert*). In academic writing, **argue** and **suggest** are the safest choices when you are not sure of an author’s strength of feeling.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best reporting verb.', items: [
            { q: 'The author ___ that the experiment was too short to draw firm conclusions.', o: ['concedes', 'alleges', 'disputes'], why: '*Concede*: admit reluctantly, against the writer’s own case.' },
            { q: 'The theory ___ that language is learned through imitation.', o: ['posits', 'concedes', 'disputes'], why: '*Posit*: put forward as a basis for argument.' },
            { q: 'Several scholars ___ the accuracy of the figures.', o: ['dispute', 'posit', 'maintain'], why: '*Dispute*: disagree with.' },
            { q: 'The newspaper ___ that the minister took bribes, but no evidence has been produced.', o: ['alleges', 'contends', 'concedes'], why: '*Allege*: claim without proof.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a noun phrase, starting with the words given.', items: [
            { q: 'More and more people are cycling to work, and this is important.', cue: 'The growing number', a: ['The growing number of people cycling to work is important.'], why: 'A noun phrase as subject.' },
            { q: 'There is not enough funding, so the project has slowed down.', cue: 'The lack', a: ['The lack of funding has slowed down the project.', 'The lack of funding has slowed the project.'], why: '*The lack of* + noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'A growing ___ of evidence suggests that sleep affects memory.', a: ['body'], why: '*A growing body of evidence*.' },
            { q: 'The ___ to which screens affect sleep is unclear.', a: ['extent'], why: '*The extent to which*.' },
            { q: 'There has been a marked ___ in remote working.', a: ['increase', 'rise'], why: '*A marked increase in*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Strengths and limitations',
      about: 'Evaluate a piece of research and signpost your argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A critical writer does not only describe; they **evaluate**. For any study, ask: what is its **strength**, and what are its **limitations**? Typical strengths: a large or varied sample, a clear method, results that agree with other studies. Typical limitations: a small or narrow sample, a short time period, a method that relies on self-reporting, a conclusion that goes further than the data. Useful phrases: *A key strength of the study is…*, *A notable limitation is…*, *The findings cannot be generalised to…*, *It remains to be seen whether…*.' },
          { t: 'examples', items: [
            { s: '**A key strength** of the study is its large and varied sample.', n: 'A positive evaluation.' },
            { s: '**A notable limitation** is that the data rely on self-reporting.', n: 'A negative evaluation.' },
            { s: 'The findings **cannot be generalised** to older adults.', n: 'The sample did not include them.' },
          ] },
        ],
        [
          { t: 'text', md: '**Signposting** tells the reader where the argument is going. To contrast: *whereas*, *by contrast*, *on the other hand*, *notwithstanding*. To draw a conclusion: *it follows that*, *this suggests that*, *taken together*. To add: *moreover*, *furthermore*. To concede and then argue: *Admittedly…, nevertheless…*. These words are the grammar of an argument; without them, a paragraph is a list of facts.' },
          { t: 'table', caption: 'Signposting', explain: ['head', 'col0'], head: ['Function', 'Phrases', 'Example'], rows: [
            ['contrast', 'whereas, by contrast, on the other hand', 'The first study found a link, whereas the second did not.'],
            ['conclusion', 'it follows that, this suggests that', 'It follows that the policy needs revision.'],
            ['addition', 'moreover, furthermore', 'Moreover, the sample was small.'],
            ['concession', 'admittedly… nevertheless…', 'Admittedly, the sample was small; nevertheless, the trend is clear.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Strength or limitation?', groups: ['strength', 'limitation'], explain: ['groups'], items: [
            { s: 'The sample included 5,000 participants from twelve countries.', g: 0, why: 'A large and varied sample.' },
            { s: 'All the participants were university students.', g: 1, why: 'A narrow sample.' },
            { s: 'The results agree with those of three earlier studies.', g: 0, why: 'Consistency with earlier research.' },
            { s: 'The study lasted only two weeks.', g: 1, why: 'A short time period.' },
            { s: 'The data came from questionnaires completed by the participants.', g: 1, why: 'Self-reporting can be unreliable.' },
            { s: 'The researchers described their method in full detail.', g: 0, why: 'A clear method.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best signpost.', items: [
            { q: 'The first study found a clear link; ___, the second found none.', o: ['by contrast', 'moreover', 'it follows that'], why: 'Contrast between the studies.' },
            { q: 'The sample was small; ___, the trend was consistent across all groups.', o: ['nevertheless', 'moreover', 'therefore'], why: 'A concession followed by a counter-point.' },
            { q: 'The data come from two countries; ___, the findings may not apply elsewhere.', o: ['it follows that', 'by contrast', 'whereas'], why: 'A logical conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the signpost given.', items: [
            { q: 'The first study found a link. The second found none.', cue: 'whereas', a: ['The first study found a link, whereas the second found none.', 'The first study found a link whereas the second found none.'], why: '*Whereas* links two contrasting clauses.' },
            { q: 'The sample was small. The trend was clear.', cue: 'Admittedly', a: ['Admittedly, the sample was small; nevertheless, the trend was clear.', 'Admittedly, the sample was small, but the trend was clear.'], why: 'Concession then counter-point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Working from home: what do we know?',
      about: 'Read an extract from a literature review and identify stance, hedging and evaluation.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Working from home: what do we know?', md: 'A growing body of evidence suggests that remote working has changed the way many people organise their days. The extent to which these changes improve productivity, however, remains disputed.\n\nOne early study contended that employees working from home were more productive, ostensibly because they were interrupted less. A later study, by contrast, found that productivity fell for tasks that required close teamwork. Both studies had limitations: the first sample was drawn from a single company, whereas the second relied on workers’ own estimates of their output.\n\nSeveral researchers concede that the data are incomplete. One posits that the key variable is not location but the quality of management, a view that would seem to fit the available evidence, although it has not been tested directly. Others dispute this reading and argue that the type of work matters more than the way it is managed.\n\nTaken together, the studies suggest that remote working tends to suit independent tasks, but that its effects on creativity and collaboration are less clear. It follows that organisations should avoid sweeping generalisations. A notable limitation of the existing literature is its short time frame; future research might therefore follow the same employees over several years.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer says it is certain that remote working improves productivity.', a: 'f', why: 'The extent “remains disputed”.' },
            { q: 'The early study suggested employees were more productive at home.', a: 't', why: '“Employees working from home were more productive.”' },
            { q: 'The later study found that all tasks were done less well at home.', a: 'f', why: 'Only “tasks that required close teamwork”.' },
            { q: 'One researcher thinks the quality of management is the key variable.', a: 't', why: '“One posits that the key variable is… the quality of management.”' },
            { q: 'The writer recommends sweeping generalisations.', a: 'f', why: '“Organisations should avoid sweeping generalisations.”' },
            { q: 'The first study was carried out in a hospital.', a: 'ng', why: 'The text says only “a single company”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does “ostensibly because they were interrupted less” suggest?', o: ['The reason is apparent, but may not be the real one.', 'The reason is certainly true.', 'The reason is unimportant.'], why: '*Ostensibly*: apparently, perhaps not in reality.' },
            { q: 'What does “concede” show about the researchers?', o: ['They admit the data are incomplete.', 'They reject the data.', 'They collected the data.'], why: '*Concede*: admit reluctantly.' },
            { q: 'What is the function of “by contrast” in the second paragraph?', o: ['It introduces a different finding.', 'It adds a similar finding.', 'It concludes the argument.'], why: 'Signposting a contrast between studies.' },
            { q: 'What limitation of the literature is named in the last paragraph?', o: ['A short time frame.', 'A small number of countries.', 'A lack of interest.'], why: '“A notable limitation… is its short time frame.”' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the hedges.', items: [
            { s: 'A view that [would seem to] fit the available evidence, although it has not been tested directly.', why: 'A hedge: *would seem to*.' },
            { s: 'Remote working [tends to] suit independent tasks.', why: 'A hedge for frequency.' },
            { s: 'The studies [suggest] that its effects on creativity are [less clear].', why: 'Hedged claims.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'A growing ___ of evidence suggests that remote working has changed daily routines.', a: ['body'], why: '*A growing body of evidence*.' },
            { q: 'It ___ that organisations should avoid sweeping generalisations.', a: ['follows'], why: '*It follows that*.' },
            { q: 'The first sample was drawn from a single company, ___ the second relied on workers’ own estimates.', a: ['whereas'], why: '*Whereas* contrasts two things.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'The extent to which these changes improve productivity remains disputed.', why: 'A noun phrase as subject.' },
            { a: 'Both studies had limitations, and neither can be generalised.', why: 'Evaluation of research.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'The trip was ___ a holiday, but it was mostly business.', o: ['ostensibly', 'undoubtedly', 'clearly'], why: '*Ostensibly*: apparently.' },
      { q: 'The author ___ that the sample was too small.', o: ['concedes', 'alleges', 'disputes'], why: 'Admits reluctantly.' },
      { q: 'The first study found a link; ___, the second found none.', o: ['by contrast', 'moreover', 'it follows that'], why: 'Contrast.' },
      { q: 'A growing ___ of evidence suggests this view.', o: ['body', 'group', 'set'], why: '*A growing body of evidence*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Hedge or booster?', groups: ['hedge', 'booster'], explain: ['groups'], items: [
      { s: 'tends to', g: 0, why: 'Hedge.' },
      { s: 'undoubtedly', g: 1, why: 'Booster.' },
      { s: 'it would seem', g: 0, why: 'Hedge.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'The ___ to which screens affect sleep is unclear.', a: ['extent'], why: '*The extent to which*.' },
      { q: 'The findings cannot be ___ to older adults.', a: ['generalised', 'generalized'], why: '*Generalised to*.' },
      { q: 'Admittedly, the sample was small; ___, the trend was clear.', a: ['nevertheless'], why: 'Concession and counter-point.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the word given.', items: [
      { q: 'The study proves that exercise improves memory.', cue: 'suggests', a: ['The study suggests that exercise improves memory.'], why: '*Suggests* is weaker than *proves*.' },
      { q: 'There is not enough funding, so the project has slowed.', cue: 'The lack', a: ['The lack of funding has slowed the project.'], why: '*The lack of* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'The study [proves] that exercise improves memory, in all cases.', a: ['suggests', 'indicates'], why: 'Too strong for academic writing.' },
      { s: 'The newspaper [concedes] that the minister took bribes, but there is no proof.', a: ['alleges'], why: '*Allege* signals doubt.' },
    ] },
  ],
};
