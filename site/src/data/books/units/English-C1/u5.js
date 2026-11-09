// English C1 (preview book), unit 5, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Science and ethics: passive reporting with the full range of infinitives, nominalisation for a formal style, the
// language of certainty and doubt, and four views on gene editing read in the format of C1 Advanced Reading Part 6.
export const UNIT = {
  id: 'u5',
  title: 'Science and ethics',
  goal: 'Report what is claimed without taking responsibility for it, write in a dense, formal style with nouns, say exactly how sure the evidence allows you to be, and compare four writers’ views on gene editing.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['passive-reporting', 'perfect-infinitive', 'nominalisation', 'certainty-and-doubt', 'hedging', 'academic-style', 'science', 'ethics', 'gene-editing'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'The data is alleged to have been altered',
      about: 'Use passive reporting structures with every kind of infinitive to report claims precisely and keep your distance from them.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At B2 you met two ways of reporting what people say or believe: ***It is said that** the lab is closing* and *The lab **is said to be** closing*. Both tell the reader that the claim comes from someone else, not from the writer. That is why news reports and academic texts rely on them: the writer passes on information **without vouching for it**.\n\nAt C1 the challenge is precision. The infinitive after the reporting verb carries two pieces of information at once: **when** the action happens compared with the moment of reporting, and whether it is **active or passive**. Choose the wrong infinitive and you change the facts.\n\n*The researcher **is said to falsify** results.* (a habit, now)\n*The researcher **is said to have falsified** results.* (something done before)\n*The results **are said to have been falsified**.* (done to the results, before)' },
          { t: 'table', caption: 'The infinitive decides the time and the voice', explain: ['head', 'col0'], head: ['Meaning', 'Form', 'Example'], rows: [
            ['Same time, or a general fact', 'to + verb', 'The compound **is known to cause** headaches.'],
            ['In progress at the time', 'to be + -ing', 'Two teams **are thought to be racing** to publish first.'],
            ['Earlier than the reporting', 'to have + past participle', 'The company **is alleged to have hidden** the side effects.'],
            ['An activity over a period up to then', 'to have been + -ing', 'She **is believed to have been working** alone for months.'],
            ['Passive, same time or future', 'to be + past participle', 'The findings **are expected to be published** in May.'],
            ['Passive, earlier', 'to have been + past participle', 'The samples **are reported to have been contaminated**.'],
          ] },
        ],
        [
          { t: 'text', md: 'Why choose *The samples are reported to have been contaminated* rather than *It is reported that the samples were contaminated*? Both are correct. The personal pattern puts **the topic first** (the samples), which keeps a paragraph flowing when the samples were already the subject of the previous sentence. The *it*-pattern puts **the claim first** and is easier when the clause after *that* is long.\n\nThe verbs differ in tone. *Allege* means an accusation that has not been proved; *is understood to* in journalism means a source has told the writer privately; *is held to* and *is deemed to* are formal and legal; *is presumed to* means that people assume it until shown otherwise. With *there*, keep *there* as the subject: ***There are thought to be** few safe alternatives.*\n\nA past reporting verb moves everything back: *The disease **was once thought to be** contagious* (the belief and the state at the same past time), *The drug **was later found to have caused** the damage* (the damage came first).' },
          { t: 'examples', items: [
            { s: '**There is said to have been** a serious error in the first trial.', n: '*There* stays the subject; the perfect infinitive puts the error before the reporting.' },
            { s: 'The scientist **is understood to be considering** an offer from abroad.', n: 'Journalistic: a source has said so privately. Continuous infinitive for something in progress.' },
            { s: 'The early results **were later shown to have been exaggerated**.', n: 'Past reporting verb, earlier passive action: *to have been* + past participle.' },
            { s: '**It has been suggested that** the study should be repeated.', n: '*Suggest* cannot take the personal pattern: only *It has been suggested that…*' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The vaccine is said to be developed in 2019.', 'The vaccine is said to have been developed in 2019.', 'A past date needs the perfect infinitive, and the vaccine is developed by someone: passive.'],
            ['The trial was suggested to stop.', 'It was suggested that the trial (should) stop.', '*Suggest, propose, recommend* only work with the *it*-pattern.'],
            ['It is believed the drug to be safe.', 'The drug is believed to be safe.', 'Do not mix the two patterns: either *It is believed that the drug is safe* or *The drug is believed to be safe*.'],
            ['She is said being the best in her field.', 'She is said to be the best in her field.', 'In the personal pattern the reporting verb is followed by a *to*-infinitive.'],
            ['He is alleged that he stole the data.', 'He is alleged to have stolen the data.', 'The person subject takes an infinitive, not a *that*-clause.'],
          ] },
          { t: 'reading', title: 'Inquiry into missing results', md: 'An inquiry has been opened at a university laboratory after a junior researcher raised concerns about a drug trial. The trial’s leader is alleged to have removed results that did not support the treatment, and several files are reported to have been deleted shortly before an inspection.\n\nThe researcher who raised the alarm is understood to have been collecting evidence for almost a year. She is not thought to have spoken to the press. There are believed to be at least two other studies that relied on the same data, and these are now expected to be reviewed.\n\nThe university said it was “cooperating fully”. It has been suggested that the trial should be repeated by an independent team.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the infinitive that gives the right time and voice.', items: [
            { q: 'The fossil is thought ___ about 30 million years ago.', o: ['to have formed', 'to form', 'to be forming'], why: 'The formation was long before the belief: perfect infinitive.' },
            { q: 'The new guidelines are expected ___ next spring.', o: ['to be introduced', 'to introduce', 'to have been introduced'], why: 'Future and passive: someone will introduce them.' },
            { q: 'The two universities are said ___ on a joint project at the moment.', o: ['to be collaborating', 'to have collaborated', 'to collaborate'], why: '*At the moment*: an action in progress, so the continuous infinitive.' },
            { q: 'The patients were later found ___ the wrong dose for weeks.', o: ['to have been receiving', 'to receive', 'to be received'], why: 'An activity over a period before the discovery: *to have been* + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Write the whole sentence; the new part has three to six words, including the word given.', items: [
            { q: 'People believe that the original samples were destroyed in the fire.', cue: 'BELIEVED', a: ['The original samples are believed to have been destroyed in the fire.'], why: 'An earlier passive event: *are believed to have been destroyed* (six words).' },
            { q: 'Experts think that the two companies are working on similar treatments.', cue: 'THOUGHT', a: ['The two companies are thought to be working on similar treatments.'], why: 'In progress now: *are thought to be working* (five words).' },
            { q: 'According to the newspaper, the company paid scientists to stay silent.', cue: 'ALLEGED', a: ['The company is alleged to have paid scientists to stay silent.'], why: 'An unproved accusation about the past: *is alleged to have paid*.' },
            { q: 'People say that there were three earlier versions of the report.', cue: 'SAID', a: ['There are said to have been three earlier versions of the report.'], why: '*There* stays the subject: *are said to have been* (five words).' },
            { q: 'It is expected that the committee will publish its decision on Friday.', cue: 'EXPECTED', a: ['The committee is expected to publish its decision on Friday.'], why: 'A future event: *is expected to publish*.' },
            { q: 'Someone proposed that the experiment should be stopped.', cue: 'WAS', a: ['It was proposed that the experiment should be stopped.', 'It was proposed that the experiment be stopped.'], why: '*Propose* only works with the *it*-pattern: *It was proposed that*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** of C1 Advanced you write **three to six words**, including the word given, which you must not change. Each answer usually tests **two things** (here, for example, the reporting pattern and the right infinitive), and each part earns a mark. Contractions count as two words.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as a newsreader would.', tutor: 'lena', items: [
            { a: 'The samples are reported to have been contaminated.' },
            { a: 'The scientist is understood to be considering an offer from abroad.' },
            { a: 'There are thought to be very few safe alternatives.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'The discovery of the gene',
      about: 'Turn verbs and adjectives into nouns to write in the compact, impersonal style of formal and academic English.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Compare two ways of saying the same thing:\n\n*Scientists **discovered** the gene in 2003, and because of this doctors **changed** how they **treat** the disease.*\n\n***The discovery of** the gene in 2003 **led to** a change in **the treatment of** the disease.*\n\nThe second sentence uses **nominalisation**: the actions (*discover, change, treat*) have become nouns. Formal English does this constantly, for good reasons. A noun can be the **subject** of a sentence, so a process becomes the thing you are talking about. It removes the people (*scientists, doctors*), which makes the text **impersonal**. It lets you add **adjectives** where you would otherwise need adverbs and clauses (*a sharp reduction in costs*). And it lets the next sentence **refer back** neatly: ***This discovery** was later questioned.*\n\nThe verbs that hold the sentence together then become general ones: *lead to, result in, give rise to, bring about, cause, follow, prompt*.' },
          { t: 'table', caption: 'Verb or adjective, noun and the word that follows', explain: ['head'], head: ['Verb or adjective', 'Noun', 'Typical phrase'], rows: [
            ['reduce, increase, rise, decline', 'reduction, increase, rise, decline', 'a reduction **in** emissions'],
            ['approve, refuse, remove', 'approval, refusal, removal', 'approval **for** a new drug'],
            ['rely, depend, insist', 'reliance, dependence, insistence', 'reliance **on** animal models'],
            ['oppose, object', 'opposition, objection', 'opposition **to** the plan'],
            ['analyse, emphasise, hypothesise', 'analysis, emphasis, hypothesis', 'an analysis **of** the data'],
            ['affect, impact', 'effect, impact', 'the impact **of** X **on** Y'],
            ['able, likely, accurate, complex', 'ability, likelihood, accuracy, complexity', 'the likelihood **of** success'],
          ] },
        ],
        [
          { t: 'text', md: 'Nouns also bring their own **collocations**, and at C1 these matter as much as the noun itself. You do not *make* research; you **carry out** or **conduct** it. A finding **raises** concerns, a technique **poses** a risk, a government **places** restrictions **on** something, and a team **reaches** a conclusion.\n\nThere is a limit. Strings of nouns joined by *of* quickly become hard to read: *the implementation of the reduction of the use of pesticides* is grammatical but tiring. Keep one or two nominalisations per clause and let a real verb do some of the work: *reducing the use of pesticides*.' },
          { t: 'examples', items: [
            { s: '**The introduction of** stricter rules **resulted in** a decline **in** complaints.', n: 'Two nominalisations linked by a general verb.' },
            { s: 'The team **carried out an analysis of** over two thousand patient records.', n: 'Collocation: *carry out an analysis*.' },
            { s: '**The complexity of** the immune system **poses a challenge** for researchers.', n: 'An adjective (*complex*) turned into the subject.' },
            { s: '**This development** has **given rise to** serious ethical questions.', n: '*This* + noun refers back to the previous sentence.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['a reduction of pollution', 'a reduction in pollution', 'A change in an amount takes *in*. *Of* gives the size: *a reduction of 10%*.'],
            ['the impact to the environment', 'the impact on the environment', '*Impact* and *effect* take *on*.'],
            ['They made a research on bees.', 'They carried out research on bees.', '*Research* is uncountable and goes with *carry out* or *conduct*.'],
            ['The analyse of the results took weeks.', 'The analysis of the results took weeks.', 'The noun is *analysis* (plural *analyses*).'],
            ['the reliance of technology', 'reliance on technology', '*Rely on* gives *reliance on*.'],
          ] },
          { t: 'dialogue', title: 'Editing a report', lines: [
            { who: 'Helen', s: 'Your draft says “we tested the drug and fewer people got ill”. It sounds like a diary.' },
            { who: 'Daniel', s: 'So what would you write instead?' },
            { who: 'Helen', s: 'Something like “testing of the drug resulted in a reduction in infection rates”.' },
            { who: 'Daniel', s: 'That’s more formal, but I don’t want ten nouns in every sentence.' },
            { who: 'Helen', s: 'Fair point. One or two per clause is plenty. The aim is clarity, not decoration.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence in a more formal style. Start with the words given.', items: [
            { q: 'Because the government delayed the decision, the project lost its funding.', cue: 'The government’s delay', a: ['The government’s delay in making the decision led to the loss of funding for the project.', 'The government’s delay in making the decision resulted in the loss of funding for the project.', 'The government’s delay in making the decision caused the project to lose its funding.', 'The government’s delay led to the project losing its funding.', 'The government’s delay resulted in the project losing its funding.', 'The government’s delay caused the project to lose its funding.'], why: '*Delay* becomes a noun, followed by *in* + *-ing*; a general verb such as *led to* links cause and result.' },
            { q: 'Many people objected strongly to the new law.', cue: 'There was', a: ['There was strong objection to the new law.', 'There was strong opposition to the new law.', 'There was a strong objection to the new law.'], why: 'The adverb *strongly* becomes the adjective *strong* before the noun.' },
            { q: 'The researchers analysed the data carefully.', cue: 'The researchers carried out', a: ['The researchers carried out a careful analysis of the data.'], why: '*Analyse carefully* becomes *a careful analysis of*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the preposition that follows the noun.', items: [
            { q: 'There has been a sharp rise ___ the cost of medicines.', a: ['in'], why: 'A change in an amount: *a rise in*.' },
            { q: 'The study looked at the effect of screen time ___ sleep.', a: ['on'], why: '*the effect of X on Y*.' },
            { q: 'Critics point to our growing dependence ___ a few large companies.', a: ['on'], why: '*depend on*, *dependence on*.' },
            { q: 'Scientists are still looking for a solution ___ the problem.', a: ['to'], why: '*a solution to*, *an answer to*, *a key to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 3): read the text about animal testing and use the word in capitals to form a word that fits each gap.', items: [
            { q: 'The ___ of a new vaccine usually takes many years.', base: 'develop', a: ['development'], why: 'A noun after *The*: *development*.' },
            { q: 'Critics question the ___ of results that come from animal studies.', base: 'rely', a: ['reliability'], why: 'The quality of being reliable: *reliability*, two steps from the verb.' },
            { q: 'There is growing public ___ to experiments on primates.', base: 'oppose', a: ['opposition'], why: 'A noun followed by *to*: *opposition*.' },
            { q: 'Every study must first receive ___ from an ethics committee.', base: 'approve', a: ['approval'], why: 'A noun after *receive*: *approval*.' },
            { q: 'Some argue that such experiments are ___ unnecessary today.', base: 'large', a: ['largely'], why: 'An adverb before an adjective: *largely* (= mostly).' },
            { q: 'Others stress the ___ of finding alternatives that work as well.', base: 'difficult', a: ['difficulty'], why: 'A noun after *the*: *difficulty*.' },
            { q: 'Computer models have already led to a ___ fall in the number of animals used.', base: 'signify', a: ['significant'], why: 'An adjective before *fall*: *significant*.' },
            { q: 'For many people, the suffering involved remains simply ___.', base: 'justify', a: ['unjustifiable'], why: 'The meaning is negative, and *remains* needs an adjective: prefix *un-* and suffix *-able*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3** of C1 Advanced the words often need **two or three changes**: a prefix, a suffix and sometimes a change inside the word (*rely, reliable, reliability*; *justify, unjustifiable*). Decide the word class first, then read the whole sentence for meaning: is it positive or negative, singular or plural?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these formal sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The discovery of the gene led to a change in treatment.' },
            { a: 'There is growing opposition to testing on animals.' },
            { a: 'The team carried out a careful analysis of the data.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'It remains unclear whether',
      about: 'Say exactly how certain the evidence allows you to be, from there is no doubt that to it remains to be seen whether.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Good scientific writing never claims more than the evidence shows, and never less. At B2 you used *must, might, probably* and *definitely*. At C1 you need a wider scale and, above all, phrases that **organise a whole sentence** around how certain you are.\n\nSome phrases are followed by a ***that*-clause** because they introduce a fact: *There is **no doubt that**…, It is **beyond doubt that**…, The evidence **suggests that**…* Others introduce an open question and are followed by ***whether*** (or *how, why, what*): *It **remains unclear whether**…, It is **debatable whether**…, It **remains to be seen whether**…* You cannot be unclear *that* something is true; you can only be unclear *whether* it is.\n\nWatch two traps. ***There is little doubt that** X* means you are **almost certain** (little = almost no doubt). And *likely* takes a *to*-infinitive (*The trial is likely to fail*), but *probable* does not: *It is probable that the trial will fail.*' },
          { t: 'table', caption: 'A scale of certainty', explain: ['head', 'col0'], head: ['How sure', 'Expressions', 'Example'], rows: [
            ['Certain', 'there is no doubt that, it is beyond doubt that, undoubtedly, be bound to', 'The results **are bound to** attract criticism.'],
            ['Almost certain', 'there is little doubt that, in all likelihood, be almost certain to', '**In all likelihood**, the trial will be extended.'],
            ['Probable', 'be likely to, may well, there is a strong possibility that, the evidence points to', 'The drug **may well** prove effective.'],
            ['Possible', 'could conceivably, it is not inconceivable that, there is a chance that', 'It **is not inconceivable that** the virus will return.'],
            ['Uncertain', 'it remains unclear whether, it is debatable whether, it remains to be seen whether', '**It remains to be seen whether** the ban will work.'],
            ['Improbable', 'be unlikely to, it is doubtful whether, there is little evidence that', 'The method **is unlikely to** replace surgery.'],
          ] },
        ],
        [
          { t: 'text', md: 'Academic writers also **hedge**: they soften a claim so that it matches their data. Verbs such as *appear to, seem to, tend to* and *suggest*, and phrases such as *to some extent* or *in most cases*, are not a sign of weakness. They show the reader that the writer knows the limits of the study.\n\n*The treatment **cures** the disease.* (too strong for one small trial)\n*The treatment **appears to reduce** symptoms **in most cases**.* (matches the evidence)\n\nThe opposite move, **boosting**, uses *clearly, undoubtedly, there is overwhelming evidence that* when the evidence really is strong. Using boosters for weak evidence is a quick way to lose a reader’s trust.' },
          { t: 'examples', items: [
            { s: '**There is little doubt that** the climate is warming.', n: '*Little doubt* = almost no doubt: a strong claim.' },
            { s: '**It remains unclear whether** the effect lasts beyond six months.', n: 'An open question: *whether*, not *that*.' },
            { s: 'Prices **are bound to** rise once the patent expires.', n: '*Bound to* = a confident prediction.' },
            { s: 'The results **appear to** confirm the original hypothesis.', n: 'A hedge: confident, but not claiming proof.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It remains unclear that the drug works.', 'It remains unclear whether the drug works.', 'An open question needs *whether*.'],
            ['The results are probable to be accurate.', 'The results are likely to be accurate.', '*Probable* does not take a *to*-infinitive: *It is probable that…*'],
            ['It is bound that prices will rise.', 'Prices are bound to rise.', '*Bound* works only in the pattern *be bound to* + verb.'],
            ['There is no doubt whether it is true.', 'There is no doubt that it is true.', 'No doubt means a fact: *that*.'],
            ['The treatment will may well help.', 'The treatment may well help.', '*May well* replaces *will*; two modals cannot sit together.'],
          ] },
          { t: 'dialogue', title: 'Before the press conference', lines: [
            { who: 'Hannah', s: 'The press release says the vaccine “prevents all infections”. We can’t say that.' },
            { who: 'Ravi', s: 'It worked in every volunteer, though.' },
            { who: 'Hannah', s: 'Every one of forty. It appears to be highly effective, and that’s as far as we can go.' },
            { who: 'Ravi', s: 'And the long-term effects?' },
            { who: 'Hannah', s: 'It remains to be seen whether the protection lasts. Journalists are bound to ask, so let’s say so first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'How sure is the writer? Sort the sentences.', groups: ['Certain or almost certain', 'Probable or possible', 'Uncertain or improbable'], explain: ['groups'], items: [
            { s: 'There is little doubt that the method works.', g: 0, why: '*Little doubt* = almost no doubt.' },
            { s: 'The drug may well prove effective.', g: 1, why: '*May well* = probable.' },
            { s: 'It is doubtful whether the plan will succeed.', g: 2, why: '*Doubtful whether* = probably not.' },
            { s: 'The results are bound to be challenged.', g: 0, why: '*Bound to* = a confident prediction.' },
            { s: 'It is not inconceivable that the virus will mutate.', g: 1, why: 'A double negative that means *it is possible*.' },
            { s: 'It remains to be seen whether the ban will work.', g: 2, why: 'Nobody knows yet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): read the text about a new treatment and choose the word that best fits each gap.', items: [
            { q: 'There is ___ doubt that the new treatment has helped many patients.', o: ['little', 'few', 'short', 'minor'], why: 'The fixed phrase is *there is little doubt that*.' },
            { q: 'However, it ___ unclear whether its benefits last.', o: ['remains', 'stays', 'keeps', 'rests'], why: '*It remains unclear whether* is the fixed pattern.' },
            { q: 'Its high price is ___ to cause controversy.', o: ['bound', 'definite', 'obvious', 'positive'], why: 'Only *bound* works in *be … to* + verb with this meaning.' },
            { q: 'In all ___, health services will negotiate a lower price.', o: ['likelihood', 'chance', 'possibility', 'prospect'], why: 'The fixed phrase is *in all likelihood*.' },
            { q: 'It is open to ___ whether the trials were large enough.', o: ['question', 'query', 'enquiry', 'problem'], why: '*Open to question* = doubtful.' },
            { q: 'A cheaper version ___ well appear within a few years.', o: ['may', 'can', 'will', 'must'], why: '*May well* means *will probably*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1** the four options usually share a general meaning. What decides the answer is the **fixed phrase** or **grammar pattern** around the gap: *little doubt*, *remain unclear whether*, *in all likelihood*. Learn such phrases as whole chunks.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'There is little doubt that the method works.' },
            { a: 'It remains to be seen whether the protection lasts.' },
            { a: 'The results appear to confirm the original hypothesis.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Four views on gene editing',
      about: 'Compare four writers’ views on gene editing in the format of C1 Advanced Reading Part 6, then plan an essay for Writing Part 1.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Gene editing lets scientists change the DNA of living cells with great precision. Changes to the cells of one patient affect only that person; changes to an **embryo** would be passed on to that person’s children, which is why they are called **heritable**. Read four short texts by different writers. Read each once for the writer’s **overall position**, then again to see **where they agree and disagree** with the others.' },
          { t: 'reading', title: 'A: a geneticist', md: 'Treating adults with inherited blood disorders by editing their own cells is no longer science fiction, and there is little doubt that such therapies will become routine. Editing embryos is another matter. The tools are known to make occasional changes in the wrong place, and it remains unclear what the long-term consequences of those errors would be. That said, I would not rule heritable editing out for ever: once the technique is reliable, preventing a devastating disease could well be justified. As for the companies involved, their investment is precisely what turns laboratory discoveries into treatments patients can actually receive.' },
          { t: 'reading', title: 'B: a philosopher', md: 'The debate is often presented as a question of safety, as if the only obstacle were technical. It is not. A child whose genes were altered before birth cannot consent, and nor can that child’s descendants. For that reason I believe heritable editing should be prohibited, however safe it becomes. I am also uneasy about where the money is coming from. Firms answerable to their shareholders are bound to look for markets beyond serious illness, and the step from treatment to enhancement is a short one once there is a profit to be made.' },
        ],
        [
          { t: 'reading', title: 'C: a parent', md: 'My son has a condition that will shorten his life. When I read experts arguing about risks that might appear in thirty years, I want to ask whether they have ever watched a child struggle to breathe. Every treatment carries risk; the question is whether the risk is worse than the disease. Above all, families like mine should have a voice. These decisions are usually made by committees of scientists and lawyers who will never live with the consequences, and that strikes me as the wrong way round.' },
          { t: 'reading', title: 'D: a science journalist', md: 'Public discussion of gene editing tends to swing between excitement and panic. Neither helps. The honest position is that nobody yet knows how edited genes will behave over a lifetime, let alone over generations, and that uncertainty should make us patient rather than afraid. I see no reason to ban heritable editing in principle, but it is too early to allow it. Crucially, the choice should not be left to experts alone. Citizens’ assemblies, in which ordinary people hear the evidence and then decide, are a far better model than closed meetings of specialists.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 6): for each question, choose the writer (A, B, C or D).', items: [
            { q: 'Which writer shares writer D’s view that the long-term effects of editing are not yet known?', o: ['Writer A', 'Writer B', 'Writer C'], why: 'A: *it remains unclear what the long-term consequences of those errors would be*; D: *nobody yet knows how edited genes will behave over a lifetime*.' },
            { q: 'Which writer has a different opinion from the others about whether heritable editing could ever be acceptable?', o: ['Writer B', 'Writer A', 'Writer C', 'Writer D'], why: 'B wants it prohibited *however safe it becomes*; A would not rule it out, C accepts risk, D sees no reason to ban it in principle.' },
            { q: 'Which writer expresses a similar view to writer C about who should make decisions?', o: ['Writer D', 'Writer A', 'Writer B'], why: 'C: families should have a voice, not only committees of experts; D: *the choice should not be left to experts alone*.' },
            { q: 'Which writer takes a different view from writer B on the role of companies?', o: ['Writer A', 'Writer C', 'Writer D'], why: 'B fears profit will lead to enhancement; A sees company investment as what brings treatments to patients.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'In **Part 6** the questions ask about **agreement and disagreement between writers**, not about details. Before you answer, write one line for each writer on each topic (safety, embryos, money, who decides). Then compare the lines. Writers rarely use the same words when they agree, so look for the same idea in different language.' },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the texts with one word.', items: [
            { q: 'There is little ___ that such therapies will become routine.', a: ['doubt'], why: 'Writer A: an almost certain prediction.' },
            { q: 'The tools are ___ to make occasional changes in the wrong place.', a: ['known'], why: 'Writer A: a passive reporting structure, *are known to*.' },
            { q: 'Firms answerable to their shareholders are ___ to look for markets beyond serious illness.', a: ['bound'], why: 'Writer B: a confident prediction.' },
            { q: 'Public discussion of gene editing ___ to swing between excitement and panic.', a: ['tends'], why: 'Writer D: a hedge, *tends to*.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **C1 Advanced Writing Part 1** you write an **essay** of **220 to 260 words**. You are given a topic and **three points**, and you discuss **two** of them, say which is more important and give reasons. The style is formal and balanced; this is where nominalisation, passive reporting and careful certainty earn you marks.\n\nA strong essay introduces the issue, gives one paragraph to each point you have chosen, compares them, and ends with a clear conclusion that answers the question. Present the opposite view fairly before you reject it.' },
          { t: 'reading', title: 'Your essay task', md: 'Your class has watched a documentary about gene editing. You have made the notes below.\n\nWhich area should receive most public funding for gene-editing research? Medicine, farming, protecting endangered species.\n\nSome opinions expressed in the documentary: “It could end inherited diseases.” “Crops that resist drought could feed millions.” “We can’t edit our way out of destroying habitats.”\n\nWrite an essay discussing **two** of the areas in your notes. Explain which area should receive most funding, giving reasons in support of your answer. You may use the opinions, but use your own words as far as possible. Write 220 to 260 words. Your teacher will read and correct it.' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Writing Part 1): choose the best answer about the task.', items: [
            { q: 'How many of the three areas must you discuss?', o: ['Two, and say which should receive most funding.', 'All three, equally.', 'One, in detail.'], why: 'Part 1 asks for two of the three points and a decision between them.' },
            { q: 'Which sentence suits the introduction best?', o: ['The development of precise gene-editing tools has raised the question of where limited public funds should be directed.', 'I think gene editing is amazing and we should do it everywhere.', 'In this essay I will tell you what the documentary said.'], why: 'Formal, impersonal, and it introduces the issue with a nominalisation.' },
            { q: 'Which sentence handles the evidence most carefully?', o: ['Drought-resistant crops could well reduce hunger, although it remains unclear how quickly farmers would adopt them.', 'Drought-resistant crops will definitely end hunger.', 'Nobody knows anything about crops, so we cannot decide.'], why: 'A probable claim plus a fair limit: neither too strong nor too weak.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'Heritable changes would be passed on to future generations.' },
            { a: 'Nobody yet knows how edited genes will behave over a lifetime.' },
            { a: 'The choice should not be left to experts alone.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
      { q: 'The bridge is thought ___ by Roman engineers.', o: ['to have been built', 'to build', 'to have built'], why: 'Earlier and passive: *to have been built*.' },
      { q: 'The two labs are believed ___ on the same problem right now.', o: ['to be working', 'to have worked', 'to work'], why: 'In progress now: continuous infinitive.' },
      { q: 'It remains unclear ___ the treatment is safe for children.', o: ['whether', 'that', 'if not'], why: 'An open question: *whether*.' },
      { q: 'The results are ___ to surprise many experts.', o: ['likely', 'probable', 'doubtful'], why: 'Only *likely* takes *to* + verb.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning, using the word given (three to six words).', items: [
      { q: 'People say that the professor resigned after the scandal.', cue: 'SAID', a: ['The professor is said to have resigned after the scandal.'], why: 'An earlier action: *is said to have resigned*.' },
      { q: 'People think there are several errors in the study.', cue: 'THOUGHT', a: ['There are thought to be several errors in the study.'], why: '*There* stays the subject: *are thought to be*.' },
      { q: 'I am almost certain that the law will change.', cue: 'DOUBT', a: ['There is little doubt that the law will change.'], why: '*Little doubt* = almost certain.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The ___ of the gene changed the way the disease is treated.', base: 'discover', a: ['discovery'], why: 'A noun after *The*.' },
      { q: 'There is strong ___ to the new law.', base: 'oppose', a: ['opposition'], why: 'A noun followed by *to*.' },
      { q: 'Critics doubt the ___ of the results.', base: 'rely', a: ['reliability'], why: 'The quality of being reliable.' },
      { q: 'Such cruelty is completely ___.', base: 'justify', a: ['unjustifiable'], why: 'A negative adjective.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'The new policy led to a reduction ___ waste.', a: ['in'], why: 'A change in an amount: *in*.' },
      { q: 'Screens have an effect ___ sleep.', a: ['on'], why: '*an effect on*.' },
      { q: 'The team carried ___ an analysis of the samples.', a: ['out'], why: '*carry out an analysis*.' },
      { q: 'Prices are ___ to rise once the patent expires.', a: ['bound'], why: '*be bound to*: a confident prediction.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The vaccine is said [to be developed] in 2019.', a: ['to have been developed'], why: 'A past date: perfect passive infinitive.' },
      { s: 'They [made] a research on memory.', a: ['carried out', 'conducted', 'did'], why: '*carry out* or *conduct research*.' },
      { s: 'It is [bound that] prices will rise.', a: ['likely that', 'certain that', 'probable that'], why: '*Bound* only works as *be bound to* + verb.' },
    ] },
  ],
};
