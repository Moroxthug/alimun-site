// English C2, unit 4, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Academic and critical writing: stance, hedging and boosting; complex noun phrases and reporting verbs; summarising and
// evaluating two texts (the first full lesson on the C2 Proficiency Writing Part 1 essay); and a literature review read
// in the format of Reading and Use of English Part 6. Other exam formats: Reading and Use of English Parts 4 and 3.
export const UNIT = {
  id: 'u4',
  title: 'Academic and critical writing',
  goal: 'Take a measured, evidence-based stance with hedges and boosters, pack ideas into complex noun phrases and report other writers with exactly the right verb, summarise and evaluate two texts in an essay in the format of C2 Proficiency Writing Part 1, and follow the argument of a literature review.',
  art: 'owl',
  tags: { skills: ['writing', 'reading', 'grammar', 'vocabulary', 'speaking'], topics: ['hedging', 'boosting', 'stance', 'noun-phrases', 'nominalisation', 'reporting-verbs', 'summary', 'paraphrase', 'evaluation', 'essay', 'literature-review', 'cohesion'], goals: ['foundations', 'academic'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Arguably, ostensibly, undoubtedly',
      about: 'Show exactly how sure you are: hedge a claim so it can be defended, boost it when the evidence allows, and tell ostensibly, purportedly and allegedly apart.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Academic writers rarely say that something is simply true. They tell the reader **how sure** they are, and how far the claim goes. This is called **stance**, and it is built with two kinds of language.\n\n**Hedges** soften a claim. They limit **certainty** (*may, might, could, it would seem, appears to, possibly, presumably*), **frequency** (*tends to, often, in many cases*), **degree** (*to a large extent, to some degree, somewhat, largely*) and **generality** (*many, most, in some contexts*). **Boosters** strengthen a claim when the evidence justifies it: *clearly, undoubtedly, evidently, it is evident that, there can be little doubt that, demonstrably*.\n\nWhy hedge at all? Because an academic claim must be **defensible**. *Screens cause poor sleep* can be destroyed by one counter-example; *Screen use late in the evening **appears to be associated with** poorer sleep **in many** adolescents* says exactly what the evidence supports and no more. Hedging is not weakness: it is precision about the limits of what you know, and it is also a form of politeness towards other researchers.' },
          { t: 'table', caption: 'Hedges and boosters', explain: ['head', 'col0'], head: ['Function', 'Examples', 'Sample sentence'], rows: [
            ['hedge: certainty', 'may, might, could, appear to, seem to, it would seem that', 'The results would seem to support this view.'],
            ['hedge: frequency', 'tends to, often, in many cases, on the whole', 'Prices tend to rise in the summer months.'],
            ['hedge: degree', 'to a large extent, to some degree, largely, somewhat', 'The decline is, to a large extent, a result of policy.'],
            ['hedge: generality', 'many, most, some, in certain contexts', 'Most participants reported an improvement.'],
            ['hedge: opinion', 'arguably, in my view, it could be argued that', 'This is arguably the decisive factor.'],
            ['booster', 'clearly, undoubtedly, evidently, there can be little doubt that', 'The effect is clearly significant.'],
          ] },
        ],
        [
          { t: 'text', md: 'A few adverbs mark **doubt about someone else’s claim**, and they are often confused.\n\n**Ostensibly** means *apparently, but probably not in reality*: the stated reason is not the real one. *The visit was **ostensibly** about trade.* **Purportedly** means *according to what is claimed, without proof*; the verb is **purport to**: *a letter that **purports to** be from the poet*. **Allegedly** belongs to accusations of wrongdoing that have not been proved. **Supposedly** is the everyday word, with a note of scepticism. **Arguably**, by contrast, is a hedge on **your own** opinion: *it is possible to argue this, and I do*.\n\nBalance matters. Too many hedges and you sound as if you believe nothing (*It might perhaps possibly be the case that…*). Too many boosters and you sound arrogant or careless. A strong paragraph boosts what is well established and hedges what is interpretation. Absolute words such as *all, always, never, prove* and *impossible* are almost always too strong.' },
          { t: 'examples', items: [
            { s: 'The data **would seem to** suggest a link, although the sample was small.', n: 'A double hedge, justified by the small sample.' },
            { s: 'Older employees **tend to** be more loyal to a single employer.', n: 'A frequency hedge: generally, not always.' },
            { s: 'The decline in bird numbers is, **to a large extent**, a result of farming practice.', n: 'A degree hedge: mostly, but not only.' },
            { s: 'This is **arguably** the most influential novel of the decade.', n: 'Your own opinion, presented as defensible.' },
            { s: 'The reform was **ostensibly** intended to cut costs.', n: 'The stated aim; the writer suspects another one.' },
            { s: 'The manuscript **purports to** be a lost play by Marlowe.', n: '*Purport to*: claim to be, with doubt.' },
            { s: '**There can be little doubt that** the policy has failed.', n: 'A booster for a well-supported conclusion.' },
            { s: 'The findings **clearly** demonstrate the value of early intervention.', n: 'A booster; acceptable when the evidence is strong.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['This study proves that diet affects mood.', 'This study suggests / indicates that diet affects mood.', 'One study rarely proves anything.'],
            ['It might perhaps possibly be true.', 'It may well be true. / It is possibly true.', 'Stacking hedges sounds evasive.'],
            ['The plan was ostensibly a success. (meaning it clearly was)', 'The plan was clearly a success.', '*Ostensibly* means it only seemed so.'],
            ['The letter is purported to be by Keats.', 'The letter purports to be by Keats. / It is purported to be by Keats.', 'The usual pattern is active: *purports to*.'],
            ['Undoubtedly, all students prefer online classes.', 'Many students appear to prefer online classes.', 'A booster with an absolute word is easy to attack.'],
            ['In my opinion I think that it is arguably true.', 'This is arguably true.', '*Arguably* already marks your opinion.'],
          ] },
          { t: 'dialogue', title: 'Feedback on a draft', lines: [
            { who: 'Helen', s: 'Your argument is interesting, Arjun, but the second paragraph says the survey “proves” that remote work increases productivity.' },
            { who: 'Arjun', s: 'Well, the figures did go up.' },
            { who: 'Helen', s: 'For one company, over six months, measured by the employees’ own estimates. Does that prove it everywhere?' },
            { who: 'Arjun', s: 'I suppose not. So, “the survey suggests”?' },
            { who: 'Helen', s: 'Better. And you might add “in this context”, or “at least for desk-based work”.' },
            { who: 'Arjun', s: 'Doesn’t that make it sound as if I’m not sure of anything?' },
            { who: 'Helen', s: 'Not if you boost what is solid. The rise in reported satisfaction is clear in every group, so say “clearly” there. Hedge the interpretation, boost the evidence.' },
            { who: 'Arjun', s: 'And the company’s claim that the move was about well-being?' },
            { who: 'Helen', s: 'It was ostensibly about well-being. The same report mentions the savings on office rent three times.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Hedge or booster? Sort the expressions.', groups: ['hedge', 'booster'], explain: ['groups'], items: [
            { s: 'it would seem that', g: 0, why: 'Softens certainty.' },
            { s: 'undoubtedly', g: 1, why: 'Strengthens the claim.' },
            { s: 'to some degree', g: 0, why: 'Limits the degree.' },
            { s: 'there can be little doubt that', g: 1, why: 'A formal booster.' },
            { s: 'tends to', g: 0, why: 'Limits frequency.' },
            { s: 'demonstrably', g: 1, why: 'It can be shown: a booster.' },
            { s: 'arguably', g: 0, why: 'Presents the claim as an opinion that can be defended.' },
            { s: 'evidently', g: 1, why: 'It is clear from the evidence.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the word that fits the writer’s meaning.', items: [
            { q: 'The trip was ___ a fact-finding mission, but most of it was spent on the golf course.', o: ['ostensibly', 'undoubtedly', 'arguably'], why: 'The stated purpose was not the real one.' },
            { q: 'The document ___ to show that the company knew about the fault.', o: ['purports', 'alleges', 'supposes'], why: '*Purport to* + infinitive: claim, with doubt.' },
            { q: 'All four trials agree, so the treatment is ___ effective.', o: ['clearly', 'arguably', 'ostensibly'], why: 'Strong, consistent evidence allows a booster.' },
            { q: 'This is ___ the most important novel of the century, though many critics would disagree.', o: ['arguably', 'evidently', 'demonstrably'], why: 'A defensible opinion, not an established fact.' },
            { q: 'Prices ___ to rise in the summer months, though not in every year.', o: ['tend', 'purport', 'concede'], why: '*Tend to*: a frequency hedge, true in general but not always.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence makes a claim the evidence cannot support, or misuses a word. Find and fix it.', items: [
            { s: 'This small survey of forty students [proves] that homework improves results.', a: ['suggests', 'indicates'], why: 'A small survey can suggest, not prove.' },
            { s: '[All] teenagers spend too much time on their phones.', a: ['Many', 'Most', 'Some'], why: 'An absolute generalisation; limit it.' },
            { s: 'The charity [ostensibly] helped thousands of families, as the audit confirmed.', a: ['demonstrably', 'clearly', 'evidently', 'undoubtedly'], why: 'The audit confirmed it, so a booster is needed, not *ostensibly*.' },
            { s: 'The painting is [purported] to be a forgery by its own owner.', a: ['claimed', 'said', 'alleged'], why: '*Purport* is used for what a thing claims to be; here the owner makes the claim.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C2 Proficiency Reading and Use of English Part 4** you complete **six** sentences. Each has a first sentence, a **key word** in capitals and a gapped second sentence with a similar meaning. You write **three to eight words**, including the key word, which you must not change. Each item can earn **two marks**, and at C2 it usually tests **two things at once**: here, a hedge or booster and the grammar it brings with it (*appear to have been*, *there can be little doubt that*, *purport to be*).' },
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between three and eight words, including the word given.', items: [
            { q: 'It seems that the results were affected by the hot weather.', cue: 'APPEAR', a: ['The results appear to have been affected by the hot weather.'], why: '*Appear to* + perfect passive infinitive for a past, passive event.' },
            { q: 'The letter claims to have been written by the poet, but nobody has proved it.', cue: 'PURPORTS', a: ['The letter purports to have been written by the poet, but nobody has proved it.'], why: '*Purport to have been* + past participle.' },
            { q: 'In most cases, people spend more when they shop on an empty stomach.', cue: 'TEND', a: ['People tend to spend more when they shop on an empty stomach.'], why: '*Tend to* replaces *in most cases*.' },
            { q: 'The theory is largely correct, in my view.', cue: 'EXTENT', a: ['The theory is, to a large extent, correct, in my view.', 'The theory is to a large extent correct, in my view.', 'To a large extent, the theory is correct, in my view.'], why: '*To a large extent* = largely.' },
            { q: 'The policy has undoubtedly failed.', cue: 'DOUBT', a: ['There can be little doubt that the policy has failed.', 'There can be no doubt that the policy has failed.', 'There is little doubt that the policy has failed.', 'There is no doubt that the policy has failed.'], why: 'A formal booster with *there*: *There can be little doubt that…*' },
            { q: 'It is very likely that the official figures are inaccurate.', cue: 'STRONG', a: ['There is a strong likelihood that the official figures are inaccurate.', 'There is a strong possibility that the official figures are inaccurate.', 'There is a strong chance that the official figures are inaccurate.'], why: '*Very likely* becomes the noun phrase *a strong likelihood / possibility*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Count your words in **Part 4**: contractions count as two (*isn’t* = *is not*). Then read the whole second sentence aloud in your head. If it says **more** or **less** than the first (*little doubt* where the first said *possibly*), the meaning has changed and the item loses a mark even if the grammar is perfect.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'The results would seem to support this view.' },
            { a: 'There can be little doubt that the policy has failed.' },
            { a: 'The visit was ostensibly about trade.' },
            { a: 'This is arguably the most important factor.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Contend, posit, concede',
      about: 'Pack information into complex noun phrases, and report other writers with the verb that shows their stance and yours.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Academic English carries much of its meaning in **noun phrases** rather than verbs. Compare *More and more people are working from home, and nobody knows yet how much this affects their productivity* with ***The extent to which** the growing number of people working from home affects productivity **remains unclear***. The second version is shorter, more abstract and easier to use as the subject of a new sentence.\n\nThis is **nominalisation**: turning verbs and adjectives into nouns (*increase → an increase*, *reliable → reliability*, *fail → the failure of*) and then adding information before and after the noun. Before it: adjectives and other nouns (*a **marked** increase*, *the **government’s housing** policy*). After it: prepositional phrases, participles and relative clauses (*an increase **in remote working***, *people **working from home***, *the extent **to which it matters***).\n\nSome frames are so common in academic writing that it is worth learning them whole: *the extent to which*, *the degree to which*, *a growing body of evidence*, *the likelihood that*, *the notion that*, *a marked increase / decline in*, *the lack of*, *the implications of*, *in the light of*.' },
          { t: 'table', caption: 'From clause to noun phrase', explain: ['head'], head: ['A clause', 'A noun phrase'], rows: [
            ['More and more evidence suggests…', 'A growing body of evidence suggests…'],
            ['How far screens affect sleep is unclear.', 'The extent to which screens affect sleep is unclear.'],
            ['Remote working has increased sharply.', 'There has been a marked increase in remote working.'],
            ['There is not enough funding, so…', 'The lack of funding means that…'],
            ['People believe that talent is fixed, and this is harmful.', 'The notion that talent is fixed is harmful.'],
            ['The results are reliable, but some doubt this.', 'The reliability of the results has been questioned.'],
          ] },
        ],
        [
          { t: 'text', md: 'When you refer to other writers, the **reporting verb** tells the reader what the writer did and, often, what **you** think of it.\n\n**Neutral**: *state, note, observe, suggest, argue*. **Firm position**: *contend that* and *maintain that* (often against opposition), *assert that* (strongly, perhaps without enough evidence). **Proposing an idea**: *posit* (put forward as a basis for argument: *The model **posits that** memory is reconstructive*). **Giving ground**: *concede that*, *acknowledge that* (admit, often reluctantly, a point against your own case). **Disagreeing**: *dispute* and *question* (+ noun or *whether*), *challenge*, *contest*. **Proving wrong**: *refute* means to **show** that a claim is false with evidence; *rebut* means to argue against it. Many people use *refute* to mean *deny*, but in academic writing this is a mistake: if you write *She refutes the claim*, you say she has proved it false.\n\nTense: use the **present** for what an author argues in a text that still stands (*Okafor **contends** that…*) and the **past** for what a study did (*The researchers **interviewed** forty teachers*).' },
          { t: 'table', caption: 'Reporting verbs and their patterns', explain: ['head', 'col1'], head: ['Verb', 'What the writer does', 'Pattern and example'], rows: [
            ['contend / maintain', 'holds a firm position', 'contend that: She contends that the reform has failed.'],
            ['assert', 'states strongly', 'assert that: He asserts that the market will recover.'],
            ['posit', 'puts forward an idea to build on', 'posit that / posit something: The theory posits a link.'],
            ['concede / acknowledge', 'admits a point against their own case', 'concede that: The author concedes that the sample was small.'],
            ['dispute / question', 'disagrees with', 'dispute + noun: Several scholars dispute this reading.'],
            ['refute', 'proves a claim false', 'refute + noun: Later studies refuted the hypothesis.'],
            ['rebut', 'argues against a claim', 'rebut + noun: She rebutted each criticism in turn.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The minister refuted the allegations. (meaning denied)', 'The minister denied / rejected the allegations.', '*Refute* means to prove false.'],
            ['the extent which screens affect sleep', 'the extent to which screens affect sleep', 'The frame needs *to which*.'],
            ['a growing body of evidences', 'a growing body of evidence', '*Evidence* is uncountable.'],
            ['The author posits about a link.', 'The author posits a link / posits that there is a link.', '*Posit* takes an object or *that*.'],
            ['Smith contends to be right.', 'Smith contends that he is right.', '*Contend* takes *that*, not *to*.'],
            ['According to Smith, he argues that…', 'According to Smith, … / Smith argues that…', 'Name the source once.'],
            ['The authors discuss about the risks.', 'The authors discuss the risks.', '*Discuss* takes a direct object.'],
          ] },
          { t: 'reading', title: 'A paragraph from a student’s essay', md: 'A growing body of evidence suggests that the design of a city affects the health of the people who live in it. Okafor contends that the decline in walking among urban adults is largely a consequence of planning decisions made decades ago, and she posits that the absence of safe routes to shops and schools matters more than the distance itself. Her critics dispute the weight she gives to planning, arguing that the extent to which people walk depends at least as much on income and working hours. Okafor concedes that these factors play a part, but maintains that they cannot account for the marked differences between neighbourhoods with similar incomes. The implications of this debate for policy are considerable: if she is right, the lack of investment in pavements and crossings is not a minor oversight but a public-health problem.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the reporting verb that fits the writer’s meaning.', items: [
            { q: 'The author ___ that her sample was too small to allow firm conclusions.', o: ['concedes', 'asserts', 'refutes'], why: 'She admits a weakness in her own study.' },
            { q: 'The model ___ that language is acquired through use rather than instruction.', o: ['posits', 'concedes', 'disputes'], why: 'It puts the idea forward as a basis for argument.' },
            { q: 'Later experiments ___ the hypothesis: none of them found the effect.', o: ['refuted', 'conceded', 'posited'], why: 'They proved it false with evidence.' },
            { q: 'Several historians ___ the date of the manuscript, placing it a century later.', o: ['dispute', 'concede', 'posit'], why: 'They disagree with it.' },
            { q: 'Despite every criticism, he ___ that the original findings were sound.', o: ['maintains', 'concedes', 'refutes'], why: 'He keeps holding his position against opposition.' },
            { q: 'In her reply, she ___ each of the reviewer’s objections in turn.', o: ['rebutted', 'conceded', 'posited'], why: 'She argued against them.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence with a noun phrase, starting with the words given.', items: [
            { q: 'Nobody knows how far social media influences how people vote.', cue: 'The extent to which', a: ['The extent to which social media influences how people vote is unknown.', 'The extent to which social media influences how people vote is unclear.', 'The extent to which social media influences voting is unknown.', 'The extent to which social media influences voting is unclear.', 'The extent to which social media influences how people vote remains unclear.', 'The extent to which social media influences how people vote remains unknown.'], why: 'The frame *the extent to which* + clause, as the subject.' },
            { q: 'More and more research shows that sleep affects memory.', cue: 'A growing body', a: ['A growing body of research shows that sleep affects memory.', 'A growing body of evidence shows that sleep affects memory.', 'A growing body of research suggests that sleep affects memory.', 'A growing body of evidence suggests that sleep affects memory.'], why: '*A growing body of* + uncountable noun.' },
            { q: 'There is not enough funding, and this has delayed the project.', cue: 'The lack', a: ['The lack of funding has delayed the project.'], why: '*The lack of* + noun as subject.' },
            { q: 'Some people believe that intelligence cannot change, and this belief is damaging.', cue: 'The notion', a: ['The notion that intelligence cannot change is damaging.', 'The notion that intelligence cannot be changed is damaging.'], why: '*The notion that* + clause.' },
          ] },
        ],
        [
          { t: 'text', md: 'Word formation is central to academic style, because nominalisation depends on it: *rigorous → **rigour***, *general → **generalisability***, *substantiate → **unsubstantiated***. In **C2 Proficiency Reading and Use of English Part 3**, academic texts are common, and many answers need a **prefix and a suffix** together. Check whether the context is **negative** (*far from…, lack of, criticised for*), because the negative prefix is often the second change the item is testing.' },
          { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about a disputed study. Use the word in capitals to form a word that fits each gap.', items: [
            { q: 'The original study was soon criticised for its lack of methodological ___.', base: 'rigorous', a: ['rigour', 'rigor'], why: 'A noun after *lack of*: *rigour* (British) or *rigor*.' },
            { q: 'Its participants were all postgraduate students, a sample that was clearly ___ of the wider population.', base: 'represent', a: ['unrepresentative'], why: 'A negative adjective: *un-* + *-ative*.' },
            { q: 'Critics therefore questioned the ___ of its findings to other groups.', base: 'general', a: ['generalisability', 'generalizability'], why: 'A noun with three suffixes: *-ise*, *-able*, *-ity*.' },
            { q: 'Several of the authors’ wider claims were, in fact, entirely ___.', base: 'substantiate', a: ['unsubstantiated'], why: 'A negative past participle used as an adjective.' },
            { q: 'A later team found that the effect, though real, was not ___ significant.', base: 'statistic', a: ['statistically'], why: 'An adverb before *significant*.' },
            { q: 'Their paper offered a radical ___ of the earlier data.', base: 'interpret', a: ['reinterpretation'], why: '*re-* (again) + *-ation*.' },
            { q: 'It also corrected a widespread ___ about how the original experiment had been run.', base: 'conceive', a: ['misconception'], why: '*mis-* + the noun *conception*, with the internal change *-ceive → -cept*.' },
            { q: 'Even so, the evidence on either side is far from ___.', base: 'refute', a: ['irrefutable'], why: '*ir-* + *-able*: impossible to prove false.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'A growing body of evidence suggests that design affects health.' },
            { a: 'The author concedes that her sample was small.' },
            { a: 'The extent to which this matters remains unclear.' },
            { a: 'Later studies refuted the original hypothesis.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Two texts, one essay',
      about: 'Write the essay of C2 Proficiency Writing Part 1: summarise the key points of two texts in your own words, evaluate them and give your own view, in 240 to 280 words.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: '**Writing Part 1** of C2 Proficiency is compulsory. You read **two short texts**, each about a hundred words, on the same subject. They usually take different positions, though they may agree on some points. You write an **essay of 240 to 280 words** that **summarises and evaluates the key points** of both texts and includes **your own view**. You must use **your own words** as far as possible.\n\nEach text normally contains **two key points**, so your essay deals with about **four** ideas. A key point is a claim with its reason (*exams are fair because conditions are identical*), not an example or a detail. Finding them is the first and most important step: underline them, then write each one in a few words of your own.\n\nThe essay does three jobs at once. It **summarises**: it reduces each text to its main ideas, without examples, quotations or your opinion. It **evaluates**: it says how convincing, valid, overstated or one-sided each point is, and why. And it **compares**: it shows how the two writers relate to each other (do they agree, disagree, or answer each other?). Your own view comes last, but it should grow out of your evaluation rather than appear from nowhere.' },
          { t: 'table', caption: 'A plan that works', explain: ['head', 'col0', 'col1'], head: ['Paragraph', 'What it does', 'Typical language'], rows: [
            ['introduction', 'names the shared question and says the writers differ', 'Both texts address the question of… but reach opposite conclusions.'],
            ['text one', 'its two key points in your words, each evaluated', 'The first writer maintains that… This is a fair point, although…'],
            ['text two', 'its two key points, evaluated and linked to text one', 'The second writer, by contrast, argues that… which turns the first argument on its head.'],
            ['conclusion', 'your own view, with a reason, drawing on both', 'In my view, the second text makes the stronger case, chiefly because…'],
          ] },
        ],
        [
          { t: 'text', md: '**Paraphrase** is what the examiner looks for most closely, because copied phrases show nothing about your own language. Four techniques help. **Change the words**: *the fairest way* → *the most equitable form*. **Change the word class**: *students who are anxious* → *anxiety*. **Change the structure**: *a single unfamiliar question can undo two years of work* → *two years of steady effort may be wasted because of one difficult question*. **Generalise**: *parents, tutors and software* → *outside assistance*.\n\nYou cannot paraphrase every technical term, and you need not: *coursework* and *examination* can stay. What must change is the **phrasing of the argument**.\n\n**Evaluation** needs its own language. To agree: *This is a valid / persuasive point*, *The writer rightly observes that…*. To agree in part: *This is true up to a point, but…*, *The argument has some force, although…*. To criticise: *This claim is overstated*, *The writer overlooks…*, *This is less convincing, since…*, *The argument rests on the assumption that…*. To compare: *Both writers accept that…*, *Whereas the first…, the second…*, *The second writer implicitly answers the first by…*.' },
          { t: 'table', caption: 'Common mistakes in the Part 1 essay', explain: ['head', 'col0', 'col1', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['copying whole phrases from the texts', 'rephrasing each key point', 'Copied language earns no credit for range.'],
            ['summarising without any evaluation', 'judging each point as you summarise it', 'The task says summarise **and** evaluate.'],
            ['a paragraph of your own opinions with no link to the texts', 'a view that grows out of your evaluation', 'Your view must respond to the writers.'],
            ['including the writers’ examples', 'keeping only the claims and reasons', 'Examples are detail, not key points.'],
            ['missing one of the four key points', 'listing all four in your plan and ticking them off', 'Each missing point weakens the Content mark.'],
            ['330 words', '240 to 280 words', 'Reducing is part of the skill.'],
          ] },
        ],
        [
          { t: 'reading', title: 'The task: two texts on examinations', md: 'Read the two texts below. Write an essay summarising and evaluating the key points from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer. Write 240 to 280 words.\n\n**Text one: The case for the exam hall.** Whatever their faults, final examinations remain the fairest way of judging what a student has learned. Every candidate faces the same questions, in the same room, in the same time, and the work is unmistakably their own. Coursework, by contrast, is open to help from parents, private tutors and software, so that a high mark may reflect a student’s resources rather than their ability. Nor is the pressure of an examination wholly a bad thing: learning to perform under stress is itself a skill that will be needed long after school.\n\n**Text two: Beyond a single morning.** An examination measures how well a student performs on one particular morning, and that is a narrower thing than it appears. Illness, anxiety or a single unfamiliar question can undo two years of steady work, and those who suffer most are often the students with the least support at home. Continuous assessment allows learners to show what they can do over time, in tasks that resemble the work they will actually do later. It is not immune to abuse, admittedly, but careful design, such as work completed in class, can reduce the risk considerably.' },
          { t: 'reading', title: 'A model answer', md: 'How should schools judge what their students have learned? Both texts address this question, but they reach opposite conclusions about the value of final examinations.\n\nThe first writer maintains that examinations are the most equitable form of assessment, since all candidates work under identical conditions and there is no doubt about who produced the answers. Coursework, in this view, is easily distorted by outside assistance, so that it may reward a family’s means rather than a student’s ability. This is a valid concern, although the further claim that exam stress builds a valuable skill is less convincing: coping with one high-stakes morning bears little resemblance to the pressures most adults face at work.\n\nThe second writer, by contrast, argues that an exam captures a single performance, which illness, nerves or bad luck can easily spoil. Tellingly, the writer observes that it is often the least advantaged students who lose most in this way, which turns the first writer’s argument about fairness on its head. Continuous assessment is presented as a truer reflection of sustained effort and of the tasks students will meet later in life, and the writer concedes that it can be abused while suggesting that supervised work in class would largely solve the problem.\n\nIn my view, the second text makes the stronger case, chiefly because it acknowledges the weakness of its own position and offers a remedy. Nevertheless, the first writer’s concern about authenticity is a real one, and a combination of the two methods, in which coursework is partly completed under supervision, would seem to offer the advantages of both.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the model answer again. Choose the correct answer.', items: [
            { q: 'What does the introduction do?', o: ['It names the shared question and says the writers disagree.', 'It summarises all four key points in detail.', 'It gives the writer’s own view at once.'], why: 'A short introduction sets up the comparison; the view comes at the end.' },
            { q: 'How does the model deal with the claim that exam stress is useful?', o: ['It summarises it and finds it less convincing, with a reason.', 'It leaves it out because it is a minor point.', 'It quotes it word for word.'], why: '*…is less convincing: coping with one high-stakes morning bears little resemblance to…*' },
            { q: 'Which sentence links the two texts most directly?', o: ['…which turns the first writer’s argument about fairness on its head.', 'How should schools judge what their students have learned?', 'Coursework, in this view, is easily distorted by outside assistance.'], why: 'It shows that text two answers text one on the same issue, fairness.' },
            { q: 'Where does the writer’s own view come from?', o: ['From the evaluation of both texts, with a reason.', 'From personal experience of exams.', 'From a new argument not related to the texts.'], why: '*…chiefly because it acknowledges the weakness of its own position…*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each phrase from the texts with the paraphrase used in the model answer.', pairs: [
            ['the fairest way of judging', 'the most equitable form of assessment'],
            ['the work is unmistakably their own', 'there is no doubt about who produced the answers'],
            ['parents, private tutors and software', 'outside assistance'],
            ['a student’s resources rather than their ability', 'a family’s means rather than a student’s ability'],
            ['how well a student performs on one particular morning', 'a single performance'],
            ['It is not immune to abuse', 'it can be abused'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Summary or evaluation? Sort the sentences from essays on the two texts.', groups: ['summary', 'evaluation'], explain: ['groups'], items: [
            { s: 'The first writer maintains that exams are fair because conditions are identical for all.', g: 0, why: 'It reports a key point without judging it.' },
            { s: 'This argument rests on the assumption that the questions themselves are fair.', g: 1, why: 'It exposes a hidden assumption.' },
            { s: 'The second writer argues that one bad morning can undo years of work.', g: 0, why: 'It reports a key point.' },
            { s: 'The writer rightly observes that disadvantaged students suffer most.', g: 1, why: '*Rightly* judges the point as valid.' },
            { s: 'The claim that stress is useful is somewhat overstated.', g: 1, why: '*Overstated* is a judgement.' },
            { s: 'Continuous assessment, the writer suggests, reflects the work students will do later.', g: 0, why: 'It reports a key point.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the expression that fits the evaluation.', items: [
            { q: 'The first writer ___ that coursework can be completed by others, a point few would dispute.', o: ['rightly observes', 'wrongly asserts', 'reluctantly refutes'], why: '*A point few would dispute* shows the writer agrees: *rightly observes*.' },
            { q: 'The argument has some ___, although it ignores pupils who are ill on the day.', o: ['force', 'vigour', 'might'], why: 'The fixed phrase is *have some force*.' },
            { q: 'The writer ___ the fact that supervised coursework takes up valuable teaching time.', o: ['overlooks', 'overstates', 'oversees'], why: '*Overlook*: fail to notice or consider.' },
            { q: 'The second text, ___, presents exams as a narrow measure of ability.', o: ['by contrast', 'moreover', 'as a result'], why: 'It introduces the opposite position.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Your task: two texts on cars in city centres', md: '**Text one: Reclaiming the streets.** When a city closes its centre to private cars, the benefits are felt almost at once. The air is cleaner, the streets are quieter and children can cross the road without fear. Shops, far from losing trade, often find that people on foot linger and spend more than drivers who park, buy and leave. The space once given to traffic can become squares, trees and cycle lanes, and a centre built for people rather than vehicles is one that people want to visit.\n\n**Text two: Not everyone can walk.** Car-free centres are usually designed by people who can walk or cycle to them. For older residents, disabled people and those who live in outlying districts with poor public transport, a ban on cars can mean a ban on the centre itself. There is a risk that city centres become pleasant spaces reserved for the young and the comfortably off. Before closing roads, a city should make sure that buses and trams offer a genuine alternative, and that those who depend on a car are not simply shut out.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 1): before you write, plan your essay on the two texts about cars in city centres. Choose the best answer each time.', items: [
            { q: 'Which is a key point of text one?', o: ['Removing cars improves the quality of life in the centre and can help local businesses.', 'Children can cross the road without fear.', 'Trees and cycle lanes can replace parking spaces.'], why: 'The first option combines the claim and its reason; the others are details or examples.' },
            { q: 'Which is the best paraphrase of the second key point of text two?', o: ['Restrictions should follow, not precede, improvements to public transport.', 'Before closing roads, a city should make sure that buses offer a genuine alternative.', 'Buses and trams are better than cars.'], why: 'It keeps the idea in new words; the second option is copied and the third changes the meaning.' },
            { q: 'Which sentence links the two texts best?', o: ['While the first writer sees a centre built for people, the second asks which people it is built for.', 'The first text is about cars and so is the second.', 'Text two is longer than text one.'], why: 'It shows how text two answers text one.' },
            { q: 'Which sentence evaluates rather than summarises?', o: ['The claim that shops benefit is plausible but would need evidence from more than a few cities.', 'The first writer says that the air becomes cleaner.', 'According to text two, some people live in outlying districts.'], why: '*Plausible but would need evidence* is a judgement with a reason.' },
          ] },
          { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 1): read the two texts on cars in city centres above and write an essay **summarising and evaluating the key points** from both texts. Use your own words throughout as far as possible, and include your own ideas in your answer. Write **240 to 280 words** and send your essay to your teacher, who will correct it.\n\nIn the exam, the Writing paper lasts **1 hour 30 minutes** for two tasks, so give yourself about **45 minutes**: ten to find the four key points and plan, thirty to write, five to check that every key point is there, that each is evaluated, and that no phrase is copied.' },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Your teacher will mark your essay on four areas, as the examiners do: **Content** (all four key points, summarised and evaluated, with your view), **Communicative achievement** (a formal, neutral essay that a reader can follow), **Organisation** (clear paragraphs and links between the texts, not two separate summaries), and **Language** (a wide range of vocabulary and grammar, including the hedges, noun phrases and reporting verbs of this unit, used accurately).' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Both texts address this question, but they reach opposite conclusions.' },
            { a: 'This is a valid concern, although the further claim is less convincing.' },
            { a: 'In my view, the second text makes the stronger case.' },
            { a: 'The writer overlooks the needs of older residents.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Inside a literature review',
      about: 'See how a literature review builds an argument from many studies, and rebuild one in the format of C2 Proficiency Reading and Use of English Part 6.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A **literature review** surveys what research has found on a question. It appears at the start of a thesis or a research article, and sometimes stands alone. A weak review is a **list**: one study, then another, then another. A strong review is a **synthesis**: it groups studies by **theme** or by **finding**, shows where they agree and disagree, explains **why** they might disagree, and ends by identifying a **gap** that new research could fill.\n\nEverything you have practised in this unit comes together here. The reviewer **hedges** interpretations (*this would seem to suggest*), **boosts** what is well established (*it is clear that*), uses **noun phrases** to sum up whole bodies of work (*the shallowing hypothesis*, *this line of research*) and chooses **reporting verbs** with care (*critics contend*, *later studies refuted*).\n\nThe review also depends on **cohesion**: each paragraph picks up an idea from the one before. That is exactly what you use in **C2 Proficiency Reading and Use of English Part 6**, where **seven paragraphs** have been removed from a long text and you choose the right one for each gap from **eight**; one is not needed.' },
          { t: 'table', caption: 'The language of a literature review', explain: ['head', 'col0'], head: ['Function', 'Typical language'], rows: [
            ['introducing a field', 'Few questions in… have attracted as much attention as…'],
            ['summing up research', 'A substantial body of research has found that… / Studies in this area tend to…'],
            ['showing disagreement', 'This view has not gone unchallenged. / Critics contend that…'],
            ['explaining a difference', 'Such variation suggests that… / One explanation is that…'],
            ['weighing evidence', 'Neither side can claim a decisive victory. / Taken together, the findings suggest…'],
            ['identifying a gap', 'Comparatively few studies have… / A notable limitation of the literature is…'],
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 6**, the clues that connect paragraphs are of four kinds, and the right answer usually satisfies **both** the paragraph before the gap and the one after it.\n\n**Reference words** point back: *this assumption, such variation, the objection, these findings, the former*. If a paragraph begins *That assumption…*, the paragraph before it must mention an assumption. **Linkers** show the logic: *however* (a turn), *in other words* (a restatement), *as a result* (a consequence). **Repeated or related ideas** run across the gap: a paragraph that ends with *conditions* is likely to be followed by one about a particular condition. **Time and sequence**: *early studies… later work…*.\n\nThe extra paragraph is always on the right **topic**; what it lacks is the right **links**. If a paragraph fits the subject but none of its reference words point to anything, it is probably the one you do not need.' },
          { t: 'table', caption: 'Common mistakes in Part 6', explain: ['head', 'col0', 'col1'], head: ['Not this', 'But this'], rows: [
            ['checking only the paragraph before the gap', 'checking the paragraphs before and after'],
            ['choosing a paragraph because it shares a topic word', 'choosing it because its reference words and linkers fit'],
            ['filling the gaps strictly in order and never going back', 'filling the certain gaps first and returning to the others'],
            ['forgetting that one paragraph is extra', 'expecting one good-looking paragraph to fit nowhere'],
          ] },
        ],
        [
          { t: 'reading', title: 'Reading on paper and on screen: a review of the evidence', md: 'Few questions in the study of literacy have attracted as much attention in recent years as whether the medium on which we read affects how well we understand. The question matters because schools, universities and publishers are moving rapidly from paper to screens, often on the assumption that the change is a neutral one.\n\n[gap one]\n\nSuch variation is, in itself, revealing. It suggests that the medium is not the only factor at work, and that the conditions under which people read may matter at least as much as the surface they read from.\n\n[gap two]\n\nThis explanation, sometimes called the shallowing hypothesis, has the merit of linking the findings to what readers actually do rather than to the technology itself. It would also account for a second, rather counter-intuitive pattern in the literature.\n\n[gap three]\n\nIf this is so, the consequences extend well beyond the laboratory. A student who overestimates how well she has understood a chapter is likely to stop studying it too soon.\n\n[gap four]\n\nThe objection is a serious one, and it has an obvious implication: as readers become more familiar with screens, the gap between the two media should narrow.\n\n[gap five]\n\nNeither side, then, can claim a decisive victory. What the literature does make clear is that the kind of text matters.\n\n[gap six]\n\nSeveral gaps in the research remain. Most studies have measured understanding immediately after reading, and comparatively few have asked what readers remember a week or a month later.\n\n[gap seven]\n\nUntil such work has been done, it would seem prudent for schools not to treat the move to screens as a mere change of format.' },
        ],
        [
          { t: 'reading', title: 'The removed paragraphs', md: '**A.** That assumption has not gone unchallenged. A substantial body of research comparing the two media has found that readers tend to understand long informational texts somewhat better on paper, although the size of the difference varies considerably from one study to the next.\n\n**B.** One such condition is time. Where readers can work at their own pace, the advantage of paper tends to shrink; under time pressure, by contrast, it becomes more marked. Some researchers posit that readers on screen, expecting to skim, adopt a shallower strategy when the clock is running.\n\n**C.** Readers on screen are often more confident about how much they have understood, yet they perform no better, and sometimes worse, when they are tested. In other words, the medium appears to affect not only comprehension but readers’ judgement of their own comprehension.\n\n**D.** Not all scholars accept this reading of the evidence, however. Critics contend that many early studies used participants who had grown up with printed books and were simply less practised on screens, so that what looked like an effect of the medium was in fact an effect of habit.\n\n**E.** Surprisingly, there is little sign that it has done so. Studies with younger participants, who have read on screens all their lives, have on the whole reported a similar advantage for paper, which casts some doubt on the idea that familiarity alone will close the gap.\n\n**F.** For short texts, and for texts read for pleasure rather than study, differences between the media are usually negligible. It is with longer and more demanding texts, of the kind students are expected to master, that the advantage of paper becomes apparent.\n\n**G.** This is a notable limitation, since it is precisely lasting understanding that education sets out to achieve. Future research might therefore follow the same readers over a longer period, and in the places where they normally read rather than in a laboratory.\n\n**H.** The appeal of screens is easy to understand. Digital texts are cheaper to distribute, can be updated instantly and allow readers to search for a word in seconds, advantages that no printed book can match.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 6): seven paragraphs have been removed from the review (shortened for this page). Choose from paragraphs A to H the one which fits each gap. There is one extra paragraph which you do not need to use.', items: [
            { q: 'Which paragraph fits gap one?', o: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], why: '*That assumption* picks up *the assumption that the change is a neutral one*, and the *variation* in A is what *Such variation* refers to next.' },
            { q: 'Which paragraph fits gap two?', o: ['B', 'A', 'C', 'D', 'E', 'F', 'G', 'H'], why: '*One such condition* follows *the conditions under which people read*; B’s shallower strategy is *the shallowing hypothesis* after the gap.' },
            { q: 'Which paragraph fits gap three?', o: ['C', 'A', 'B', 'D', 'E', 'F', 'G', 'H'], why: 'C is the *counter-intuitive pattern*: more confidence, worse results. *A student who overestimates* follows from it.' },
            { q: 'Which paragraph fits gap four?', o: ['D', 'A', 'B', 'C', 'E', 'F', 'G', 'H'], why: '*However* turns the argument, and D’s criticism is *The objection* in the next paragraph.' },
            { q: 'Which paragraph fits gap five?', o: ['E', 'A', 'B', 'C', 'D', 'F', 'G', 'H'], why: '*Little sign that it has done so* answers *the gap… should narrow*.' },
            { q: 'Which paragraph fits gap six?', o: ['F', 'A', 'B', 'C', 'D', 'E', 'G', 'H'], why: 'F develops *the kind of text matters*: short versus long, pleasure versus study.' },
            { q: 'Which paragraph fits gap seven?', o: ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'H'], why: '*This is a notable limitation* picks up the lack of studies on later recall, and *such work* in the last paragraph refers to G’s proposed research. H is on the topic but links to nothing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the language of stance in these sentences from the review: the hedges, boosters and reporting verbs.', items: [
            { s: 'Readers [tend to] understand long informational texts [somewhat] better on paper.', why: 'Two hedges: frequency and degree.' },
            { s: '[Critics contend] that many early studies used participants who were less practised on screens.', why: 'A reporting verb for a firm position held against others.' },
            { s: 'This [casts some doubt on] the idea that familiarity alone will close the gap.', why: 'A cautious way of saying the evidence weakens an idea.' },
            { s: 'It [would seem prudent] for schools not to treat the move as a mere change of format.', why: 'A hedged recommendation.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the review again. Choose the best answer.', items: [
            { q: 'What does the reviewer conclude about the effect of the medium?', o: ['It is real for some texts and conditions, but not fully understood.', 'It has been proved to be an effect of habit.', 'It disappears once readers are used to screens.'], why: '*Neither side… can claim a decisive victory*, but the kind of text matters.' },
            { q: 'Why does the reviewer think the confidence finding matters?', o: ['Students may stop studying before they have really understood.', 'Confident readers enjoy reading more.', 'It proves that screens are harmful.'], why: '*A student who overestimates… is likely to stop studying it too soon.*' },
            { q: 'What gap in the research does the reviewer identify?', o: ['Few studies measure what readers remember later.', 'No study has used younger participants.', 'Researchers have ignored short texts.'], why: '*Comparatively few have asked what readers remember a week or a month later.*' },
          ] },
        ],
        [
          { t: 'text', md: 'Now summarise the review aloud in about a minute, as you might in a seminar. Say what the main finding is, what explains it, what the critics say and what remains unknown. Use one hedge, one booster, one noun phrase such as *a growing body of evidence* and one reporting verb from lesson 2.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'That assumption has not gone unchallenged.' },
            { a: 'Neither side can claim a decisive victory.' },
            { a: 'Comparatively few studies have asked what readers remember later.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the word that fits the meaning.', items: [
      { q: 'The meeting was ___ about safety, but the real subject was job cuts.', o: ['ostensibly', 'undoubtedly', 'arguably'], why: 'The stated purpose was not the real one.' },
      { q: 'Four independent trials agree, so the effect is ___ real.', o: ['clearly', 'ostensibly', 'purportedly'], why: 'Strong evidence allows a booster.' },
      { q: 'The diary ___ to be the work of a soldier at the front.', o: ['purports', 'alleges', 'refutes'], why: '*Purport to be*.' },
      { q: 'People who sleep badly ___ to make more mistakes at work.', o: ['tend', 'refute', 'concede'], why: 'A frequency hedge.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning, using the word given (three to eight words).', items: [
      { q: 'It seems that the files were deleted by mistake.', cue: 'APPEAR', a: ['The files appear to have been deleted by mistake.'], why: '*Appear to have been* + past participle.' },
      { q: 'The report has undoubtedly changed public opinion.', cue: 'DOUBT', a: ['There can be little doubt that the report has changed public opinion.', 'There can be no doubt that the report has changed public opinion.', 'There is little doubt that the report has changed public opinion.', 'There is no doubt that the report has changed public opinion.'], why: 'A formal booster with *there*.' },
      { q: 'Nobody knows how far diet affects mood.', cue: 'EXTENT', a: ['The extent to which diet affects mood is unknown.', 'The extent to which diet affects mood is unclear.', 'Nobody knows the extent to which diet affects mood.'], why: '*The extent to which* + clause.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The study was criticised for its lack of ___.', base: 'rigorous', a: ['rigour', 'rigor'], why: 'A noun after *lack of*.' },
      { q: 'A sample of students is ___ of the wider population.', base: 'represent', a: ['unrepresentative'], why: 'A negative adjective.' },
      { q: 'The evidence is far from ___.', base: 'refute', a: ['irrefutable'], why: '*ir-* + *-able*.' },
      { q: 'The paper corrects a common ___ about the experiment.', base: 'conceive', a: ['misconception'], why: '*mis-* + *-ception*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the reporting verb that fits.', items: [
      { q: 'The author ___ that the sample was too small, but defends her conclusions.', o: ['concedes', 'refutes', 'asserts'], why: 'She admits a weakness in her own case.' },
      { q: 'Later work ___ the theory: no study could reproduce the effect.', o: ['refuted', 'posited', 'conceded'], why: 'Proved it false.' },
      { q: 'The model ___ that people learn mainly by imitation.', o: ['posits', 'concedes', 'disputes'], why: 'Puts the idea forward.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'A growing body of [evidences] suggests a link.', a: ['evidence'], why: '*Evidence* is uncountable.' },
      { s: 'The extent [which] screens affect sleep is unclear.', a: ['to which'], why: '*The extent to which*.' },
      { s: 'This single survey [proves] that the method works.', a: ['suggests', 'indicates'], why: 'One survey can only suggest.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Summary or evaluation?', groups: ['summary', 'evaluation'], explain: ['groups'], items: [
      { s: 'The writer argues that cars should be banned from the centre.', g: 0, why: 'Reports a point.' },
      { s: 'This argument overlooks the needs of disabled residents.', g: 1, why: 'Judges a point.' },
      { s: 'The second text suggests improving public transport first.', g: 0, why: 'Reports a point.' },
      { s: 'The claim is plausible but rests on a few examples.', g: 1, why: 'Judges a point.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which is right for the C2 Proficiency Writing Part 1 essay?', items: [
      { q: 'The essay should be', o: ['240 to 280 words', '220 to 260 words', '280 to 320 words'], why: 'Writing Part 1 asks for 240 to 280 words.' },
      { q: 'In the essay you', o: ['summarise and evaluate the key points of both texts and give your view', 'summarise only the text you agree with', 'give your own view without referring to the texts'], why: 'Summary, evaluation and your own view, for both texts.' },
    ] },
  ],
};
