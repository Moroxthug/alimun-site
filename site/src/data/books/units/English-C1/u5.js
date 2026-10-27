// English C1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Science and ethics',
  goal: 'Discuss research and its ethics in an impersonal, academic style.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['passive-reporting', 'perfect-infinitive', 'nominalisation', 'certainty-and-doubt', 'academic-style', 'science', 'ethics'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'She is said to have…',
      about: 'Use the full range of infinitives after passive reporting verbs to show exactly when something happened.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2 you met the two patterns for reporting what people believe: *It is said that the castle is haunted* and *The castle is said to be haunted*. At C1 you need the **full range of infinitives** after the second pattern. The infinitive shows two things: when the action happens compared with the reporting, and whether it is active or passive.' },
          { t: 'table', caption: 'Six infinitives after a reporting verb', explain: ['head', 'col0', 'col1'], head: ['Time and voice', 'Form', 'Example'], rows: [
            ['Same time or future, active', '*to* + verb', 'The drug **is thought to reduce** the risk of infection.'],
            ['In progress now, active', '*to be* + *-ing*', 'Several teams **are believed to be testing** similar treatments.'],
            ['Earlier, active', '*to have* + past participle', 'The researcher **is said to have ignored** the warnings.'],
            ['Earlier and lasting for some time', '*to have been* + *-ing*', 'She **is understood to have been working** on the project for a decade.'],
            ['Same time or future, passive', '*to be* + past participle', 'The results **are expected to be published** next month.'],
            ['Earlier, passive', '*to have been* + past participle', 'Some of the data **is alleged to have been altered**.'],
          ] },
        ],
        [
          { t: 'text', md: 'Common verbs in this pattern are *believe, think, consider, know, say, report, expect, understand, estimate, allege* and *presume*. *Allege* is used when someone is accused of something that has not been proved. In the news, *is understood to* often means that a journalist has been told something privately.\n\nWhen the reporting verb is in the past, compare the time of the belief with the time of the event. If they are the same, use the simple infinitive. If the event came first, use the perfect infinitive.' },
          { t: 'examples', items: [
            { s: 'The heart **was** once **believed to control** our emotions.', n: 'A past belief about something at the same time: past reporting verb + simple infinitive.' },
            { s: 'The infection **is now known to have spread** through the water supply.', n: 'Present knowledge about an earlier event: the perfect infinitive.' },
            { s: '**There are thought to be** thousands of species that have never been described.', n: 'With *there*, keep *there* as the subject: *there is said to be*, *there are believed to have been*.' },
            { s: 'The treatment **is not thought to pose** any serious risk.', n: 'The negative usually goes with the reporting verb. *Is thought not to pose* is possible but less common.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Not every reporting verb takes the subject pattern. *Suggest*, *propose* and *recommend* only work with *it*: *It has been suggested that the trial should stop*, never *The trial has been suggested to stop*. *Rumour* is the opposite: it is almost always passive, as in *She is rumoured to be leaving the institute*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'The virus is believed ___ in bats many years ago.', o: ['to have originated', 'to originate', 'to be originating'], why: 'The origin came long before the belief, and *many years ago* shows the past: *to have* + past participle.' },
            { q: 'The new vaccine is expected ___ by the end of the year.', o: ['to be approved', 'to approve', 'to have approved'], why: 'The vaccine does not approve anything; somebody approves it. A future passive: *to be* + past participle.' },
            { q: 'The professor is said ___ on the same problem for over twenty years before she finally solved it.', o: ['to have been working', 'to be working', 'to work'], why: 'A long activity that continued up to a point in the past: *to have been* + *-ing*.' },
            { q: '___ said to be several reasons for the delay.', o: ['There are', 'It is', 'They are'], why: 'With *there*, the verb agrees with *several reasons*. *It is said* would need a *that* clause.' },
            { q: 'In the nineteenth century, many illnesses ___ to be caused by bad air.', o: ['were widely thought', 'are widely thought', 'were widely thought that'], why: 'A past belief about something at the same time: past reporting verb + simple infinitive.' },
            { q: 'It ___ that the committee should review the study again.', o: ['has been suggested', 'has suggested', 'is suggested to be'], why: '*Suggest* only works with *it* + passive + *that*. It cannot take *to* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence. Start with the words given.', items: [
            { q: 'People believe that an earthquake destroyed the ancient city.', cue: 'The ancient city', a: ['The ancient city is believed to have been destroyed by an earthquake.'], why: 'The destruction came earlier and the city is the object: *to have been* + past participle.' },
            { q: 'It is reported that the company is developing a new treatment.', cue: 'The company', a: ['The company is reported to be developing a new treatment.'], why: 'Something in progress now: *to be* + *-ing*.' },
            { q: 'Experts estimate that the project cost twice the original budget.', cue: 'The project', a: ['The project is estimated to have cost twice the original budget.'], why: 'Present estimate, past cost: *to have* + past participle.' },
            { q: 'It is alleged that the scientist invented some of his results.', cue: 'The scientist', a: ['The scientist is alleged to have invented some of his results.'], why: '*Allege* for an accusation not yet proved. The inventing came earlier: perfect infinitive.' },
            { q: 'People say that there are risks that nobody has studied yet.', cue: 'There', a: ['There are said to be risks that nobody has studied yet.', 'There are said to be risks nobody has studied yet.'], why: 'Keep *there* as the subject: *There are said to be…*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The treatment is thought [to have been] safe for most patients, so doctors use it widely.', a: ['to be'], why: 'Its safety is a present fact, at the same time as the belief: the simple infinitive *to be*.' },
            { s: 'The two laboratories are known [to work] together since 2019.', a: ['to have worked', 'to have been working'], why: '*Since* shows a period up to now, so the infinitive must be perfect.' },
            { s: 'There [is] believed to be several errors in the paper.', a: ['are'], why: 'After *there*, the verb agrees with the noun that follows: *several errors*, so *are*.' },
            { s: 'The missing samples are believed [to have stolen] from the laboratory.', a: ['to have been stolen'], why: 'The samples did not steal anything; they were stolen. Perfect passive: *to have been* + past participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The discovery of…',
      about: 'Turn verbs and adjectives into nouns to write in a formal, academic style.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Academic and scientific writing often expresses actions and qualities as **nouns** instead of verbs and adjectives. This is called **nominalisation**. It makes a text more compact and impersonal, and it lets the writer put a whole process at the start of a sentence, as its subject.\n\nWhen you nominalise, other parts of the sentence change too. The subject or object of the verb often moves into an *of* phrase or a possessive, adverbs become adjectives, and a new verb such as *led to, caused, showed* or *resulted in* links the ideas.' },
          { t: 'examples', items: [
            { s: 'Scientists **discovered** penicillin by accident. → The **discovery of** penicillin was an accident.', n: 'The object of *discover* becomes *of* + noun.' },
            { s: 'Emissions **fell sharply**, which surprised researchers. → The **sharp fall in** emissions surprised researchers.', n: 'The adverb *sharply* becomes the adjective *sharp*. *Fall* is followed by *in*.' },
            { s: 'The public **did not trust** the study. → **Public distrust of** the study grew.', n: 'The subject *the public* becomes the adjective *public*.' },
            { s: 'If you **fail to** obtain consent, the research cannot continue. → **Failure to** obtain consent means the research cannot continue.', n: 'Some nouns keep the *to* infinitive: *failure to, refusal to, decision to, ability to*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Nouns and their prepositions', explain: ['head'], quiz: true, head: ['Verb or adjective', 'Noun + preposition'], rows: [
            ['reduce', 'a reduction in'],
            ['increase', 'an increase in'],
            ['discover', 'the discovery of'],
            ['depend', 'dependence on'],
            ['emerge', 'the emergence of'],
            ['refuse', 'a refusal to'],
            ['reluctant', 'reluctance to'],
            ['available', 'the availability of'],
            ['responsible', 'responsibility for'],
            ['aware', 'awareness of'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not turn every verb into a noun. Two or three nominalisations in one sentence make it heavy and hard to read. Notice also that nouns can hide who did something: *There was a failure to inform the patients* does not say who failed. When you read about ethics, ask who was responsible.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Complete each sentence with a noun formed from the word in capitals.', items: [
            { q: 'There has been a sharp ___ in the number of animals used in testing.', base: 'reduce', a: ['reduction'], why: '*Reduce* → *reduction*, followed by *in*.' },
            { q: 'The ___ of the new species surprised the whole team.', base: 'discover', a: ['discovery'], why: '*Discover* → *discovery*, followed by *of*.' },
            { q: 'Patients must give their ___ before they take part in a trial.', base: 'permit', a: ['permission'], why: '*Permit* → *permission*. *Give permission* is a fixed collocation.' },
            { q: 'The study points to our growing ___ on digital devices.', base: 'depend', a: ['dependence', 'dependency'], why: '*Depend* → *dependence* (or *dependency*), followed by *on*.' },
            { q: 'There is little public ___ of the risks involved.', base: 'aware', a: ['awareness'], why: '*Aware* → *awareness*, followed by *of*.' },
            { q: 'The ___ of cheap genetic tests has raised new ethical questions.', base: 'available', a: ['availability'], why: 'Adjectives in *-able* often form nouns in *-ability*.' },
            { q: 'The company’s ___ to share its data was widely criticised.', base: 'refuse', a: ['refusal'], why: '*Refuse* → *refusal*, followed by *to* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the preposition that follows the noun.', items: [
            { q: 'The report calls for a reduction ___ the use of antibiotics in farming.', o: ['in', 'of', 'on'], why: '*A reduction in* something: the thing that becomes smaller.' },
            { q: 'Scientists still have a limited understanding ___ how the disease spreads.', o: ['of', 'on', 'to'], why: '*An understanding of* something.' },
            { q: 'Who should take responsibility ___ the mistakes in the trial?', o: ['for', 'of', 'on'], why: '*Responsibility for* something, as in *responsible for*.' },
            { q: 'Her refusal ___ sign the agreement delayed the project.', o: ['to', 'of', 'for'], why: '*Refusal* keeps the pattern of *refuse*: *to* + infinitive.' },
            { q: 'The emergence ___ new technologies often raises difficult questions.', o: ['of', 'in', 'from'], why: '*The emergence of* something: the moment it appears.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Rewrite in a formal style. Complete each sentence with one noun.', items: [
            { q: 'The government decided to fund the project, which pleased scientists. → The government’s ___ to fund the project pleased scientists.', a: ['decision'], why: '*Decide to* → *decision to*. The subject becomes a possessive.' },
            { q: 'Researchers analysed the samples carefully, and this revealed several errors. → Careful ___ of the samples revealed several errors.', a: ['analysis'], why: '*Analyse* → *analysis*. The adverb *carefully* becomes the adjective *careful*.' },
            { q: 'Temperatures rose steadily, and this worried farmers. → The steady ___ in temperatures worried farmers.', a: ['rise', 'increase'], why: '*Rise* is both a verb and a noun. The noun takes *in*.' },
            { q: 'Many patients were unwilling to take part, which slowed the trial. → The ___ of many patients to take part slowed the trial.', a: ['unwillingness', 'reluctance'], why: '*Unwilling* → *unwillingness*; *reluctance* means the same.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which ending does the noun take? Sort the words.', groups: ['-tion / -sion', '-ment', '-ance / -ence', '-ity'], items: [
            { s: 'investigate', g: 0, why: '*Investigate* → *investigation*.' },
            { s: 'conclude', g: 0, why: '*Conclude* → *conclusion*.' },
            { s: 'develop', g: 1, why: '*Develop* → *development*.' },
            { s: 'assess', g: 1, why: '*Assess* → *assessment*.' },
            { s: 'interfere', g: 2, why: '*Interfere* → *interference*.' },
            { s: 'exist', g: 2, why: '*Exist* → *existence*.' },
            { s: 'complex', g: 3, why: '*Complex* → *complexity*.' },
            { s: 'secure', g: 3, why: '*Secure* → *security*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'There is little doubt that…',
      about: 'Show exactly how sure you are, from certain to unclear, in formal English.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In research, a careful writer shows how strong the evidence is. Formal English has many fixed phrases for this. Many of them begin with *it* or *there*, which keeps the style impersonal: the claim is about the evidence, not about the writer.' },
          { t: 'table', caption: 'From certain to unknown', explain: ['head', 'col0'], head: ['How sure?', 'Phrases'], rows: [
            ['Certain', 'There is little doubt that… / It is beyond doubt that… / The evidence clearly shows that…'],
            ['Probable', 'It seems highly likely that… / In all likelihood, … / There is strong evidence that…'],
            ['Possible', 'It may well be that… / There is some evidence that… / It cannot be ruled out that…'],
            ['Doubtful', 'It is doubtful whether… / There is little evidence that… / It seems unlikely that…'],
            ['Unknown', 'It remains unclear whether… / It is open to question whether… / It is not yet known whether…'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'There is **little doubt** that the climate is warming.', n: '*Little doubt* means almost no doubt. The writer is nearly certain.' },
            { s: 'There is **little evidence** that the supplement improves memory.', n: '*Little evidence* means almost no evidence. The writer thinks the claim is probably false.' },
            { s: 'There is **a little evidence** that it may help older patients.', n: 'With *a*, the meaning is positive: some evidence, but not much.' },
            { s: 'It **remains unclear whether** the effect lasts.', n: '*Whether* introduces a question that has no answer yet. *Remains* shows that people have been asking it for some time.' },
            { s: 'The new findings **cast doubt on** earlier research.', n: '*Cast doubt on* means make people less sure about something.' },
            { s: '**In all likelihood**, the trial will be extended.', n: 'Very probably. A comma follows it at the start of a sentence.' },
          ] },
          { t: 'tip', art: 'owl', md: '*There is no doubt that* means you are certain. *I doubt that…* and *It is doubtful whether…* mean you think it is probably not true. After *unclear, doubtful, open to question* and *not known*, use *whether* (or *if* in less formal English), not *that*.' },
        ],
        [
          { t: 'dialogue', title: 'Promising or proven?', lines: [
            { who: 'Priya', s: 'Have you read the new study on sleep and memory? Everyone’s calling it a breakthrough.' },
            { who: 'Kenji', s: 'I have. There’s little doubt that sleep matters, but I’m not convinced by their conclusions.' },
            { who: 'Priya', s: 'Why not? The results seemed fairly clear to me.' },
            { who: 'Kenji', s: 'Only up to a point. The sample was tiny, so it remains unclear whether the effect would hold in a larger group.' },
            { who: 'Priya', s: 'Fair enough. Still, there’s some evidence that it works for older adults.' },
            { who: 'Kenji', s: 'True, and in all likelihood someone will try to repeat it. Until then, I’d call it promising rather than proven.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'How sure is the writer? Sort the phrases.', explain: ['groups'], groups: ['certain', 'probable', 'doubtful or unknown'], items: [
            { s: 'There is little doubt that…', g: 0, why: 'Almost no doubt: the writer is nearly certain.' },
            { s: 'It is beyond doubt that…', g: 0, why: '*Beyond doubt* means certain.' },
            { s: 'The evidence clearly shows that…', g: 0, why: '*Clearly shows* presents the claim as proved.' },
            { s: 'In all likelihood, …', g: 1, why: 'Very probable, but not certain.' },
            { s: 'It seems highly likely that…', g: 1, why: '*Highly likely* is strong, but *seems* keeps a little caution.' },
            { s: 'There is strong evidence that…', g: 1, why: 'Strong evidence, but not proof.' },
            { s: 'It remains unclear whether…', g: 2, why: 'The question has not been answered.' },
            { s: 'There is little evidence that…', g: 2, why: 'Almost no evidence: the claim is probably false.' },
            { s: 'It is doubtful whether…', g: 2, why: 'The writer thinks it is probably not true.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'There is ___ doubt that smoking damages health; the evidence is overwhelming.', o: ['little', 'a little', 'some'], why: '*Little doubt* means almost none, which matches *overwhelming* evidence.' },
            { q: 'It remains unclear ___ the new treatment is better than the old one.', o: ['whether', 'that', 'what'], why: 'After *unclear*, an open question: *whether*.' },
            { q: 'There is ___ evidence that the diet works, so doctors do not recommend it.', o: ['little', 'a little', 'strong'], why: 'Doctors do not recommend it, so there is almost no evidence: *little*.' },
            { q: 'The latest data ___ doubt on the original theory.', o: ['casts', 'gives', 'makes'], why: '*Cast doubt on* is a fixed collocation.' },
            { q: '___, the results will be confirmed by other teams.', o: ['In all likelihood', 'Beyond doubt', 'With likelihood'], why: '*In all likelihood* means very probably and fits a prediction about the future.' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['It is doubtful whether…', 'There is little doubt that…', 'It is beyond doubt that…', 'The evidence clearly shows that…'], why: 'The others express certainty. *It is doubtful whether* expresses doubt.' },
            { o: ['There is little doubt that…', 'It remains unclear whether…', 'It is not yet known whether…', 'It is open to question whether…'], why: 'The others say the question is still open. *There is little doubt* says it is almost certain.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each phrase with one word.', items: [
            { q: 'The evidence ___ shows that the vaccine is safe.', a: ['clearly', 'strongly', 'conclusively'], why: 'An adverb makes the claim strong: *clearly shows*.' },
            { q: 'It ___ unclear whether the results apply to children.', a: ['remains', 'is', 'seems'], why: '*Remains unclear*: the question is still open.' },
            { q: 'There is strong ___ that the two problems are connected.', a: ['evidence', 'reason'], why: '*Strong evidence that…* is a common collocation.' },
            { q: 'It seems highly ___ that the project will be delayed.', a: ['likely', 'probable'], why: '*Highly* goes with *likely* and *probable*, not with *possible*.' },
            { q: 'A link between the two diseases cannot be ruled ___.', a: ['out'], why: '*Rule out* means say that something is not possible. *Cannot be ruled out* means it is still possible.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Editing life',
      about: 'Read a feature on gene editing, and notice its reporting structures, nouns and language of certainty.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Editing life', md: 'Not long ago, the idea of changing the genes of a living thing with precision belonged to science fiction. Today, gene editing is carried out in laboratories around the world, and its arrival has raised questions that scientists alone cannot answer.\n\nThe technique is often compared to a pair of molecular scissors. A guide molecule leads a cutting enzyme to a chosen place in the DNA, where it makes a cut; the cell’s own repair system then does the rest. Work that once took years can now be done in weeks, and the low cost of the tools has led to their rapid adoption in medicine and agriculture.\n\nThe potential benefits are hard to ignore. Several inherited blood disorders are thought to be suitable for treatment in this way, and early results in some patients are said to have been encouraging. In farming, crops are being developed that are believed to tolerate drought better, which could matter greatly as summers become hotter.\n\nYet there is little doubt that the technology also carries risks. The scissors do not always cut where they should, and the long-term consequences of such errors remain unclear. The deepest concern, however, involves the editing of embryos. Changes made at this stage would be passed on to future generations, who cannot give their consent. It is open to question whether any medical benefit could justify that, and researchers who are alleged to have edited embryos without approval have faced strong criticism from their colleagues.\n\nWhere, then, should the line be drawn? Many ethicists draw a distinction between treatment and enhancement: the correction of a gene that causes serious disease is one thing; the selection of height or intelligence is quite another. Others point out that the boundary between the two is far from clear. What does seem certain is that decisions about this technology should not be left to laboratories alone. In all likelihood, it will require a public debate as careful and patient as the science itself.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Gene editing is now carried out in many countries.', a: 't', why: '“Gene editing is carried out in laboratories around the world.”' },
            { q: 'The tools are so expensive that few laboratories use them.', a: 'f', why: 'Their low cost has led to their rapid adoption.' },
            { q: 'Crops that tolerate drought better are already sold to farmers.', a: 'ng', why: 'The text says such crops are being developed, not whether any are sold.' },
            { q: 'The writer says the technique always cuts in the right place.', a: 'f', why: '“The scissors do not always cut where they should.”' },
            { q: 'Changes to embryos would affect people who are not yet born.', a: 't', why: 'They would be passed on to future generations.' },
            { q: 'All ethicists agree on where treatment ends and enhancement begins.', a: 'f', why: 'Others point out that the boundary is far from clear.' },
            { q: 'The writer thinks the public should take part in decisions about gene editing.', a: 't', why: 'Decisions should not be left to laboratories alone, and a public debate will be needed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the text.', items: [
            { q: '“Early results in some patients are said to have been encouraging.” Why *to have been*?', o: ['The results came before the reporting.', 'The results will come in the future.', 'The writer is certain about the results.'], why: 'The perfect infinitive shows that the results came earlier than the saying.' },
            { q: '“The low cost of the tools has led to their rapid adoption.” Which sentence means the same?', o: ['Because the tools are cheap, people have started using them quickly.', 'The tools are cheap because people started using them quickly.', 'People have been slow to use the tools, although they are cheap.'], why: 'Two nominalisations: *the low cost* (the tools cost little) and *rapid adoption* (people adopted them rapidly).' },
            { q: '“It is open to question whether any medical benefit could justify that.” What does the writer mean?', o: ['The question has not been answered, and people disagree.', 'The question has been answered clearly.', 'Nobody has asked this question before.'], why: '*Open to question* means still uncertain and still debated.' },
            { q: '“There is little doubt that the technology also carries risks.” How sure is the writer?', o: ['Almost certain', 'Quite doubtful', 'Not sure at all'], why: '*Little doubt* means almost no doubt.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the text with their meanings.', pairs: [
            ['precision', 'the quality of being exact'],
            ['adoption', 'the decision to start using something'],
            ['inherited', 'passed from parents to their children'],
            ['consent', 'permission given by the person affected'],
            ['enhancement', 'making normal abilities better than they are'],
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words from the text.', words: [
            { a: 'scissors', clue: 'A cutting tool with two blades, used in the text as an image for gene editing.' },
            { a: 'embryo', clue: 'A human or animal in the earliest stage of development.' },
            { a: 'enzyme', clue: 'A substance in living cells that causes a chemical change, such as a cut in DNA.' },
            { a: 'drought', clue: 'A long period without rain.' },
            { a: 'ethicist', clue: 'An expert who studies what is morally right and wrong.' },
            { a: 'boundary', clue: 'A line that marks where one thing ends and another begins.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The ship is believed ___ in a storm more than three hundred years ago.', o: ['to have sunk', 'to sink', 'to be sinking'], why: 'A past event reported now: *to have* + past participle.' },
      { q: 'The new guidelines are expected ___ later this week.', o: ['to be announced', 'to announce', 'to have announced'], why: 'The guidelines are announced by someone, in the future: *to be* + past participle.' },
      { q: '___ thought to be over a million people affected by the shortage.', o: ['There are', 'It is', 'They are'], why: 'Keep *there* as the subject; the verb agrees with *people*.' },
      { q: 'Public ___ in the study fell after the errors were reported.', o: ['confidence', 'confident', 'confidently'], why: 'A noun is needed as the subject: *confidence in*.' },
      { q: 'There is ___ evidence that the treatment works, so it is not offered to patients.', o: ['little', 'a little', 'plenty of'], why: 'It is not offered, so there is almost no evidence: *little*.' },
      { q: 'It is not yet known ___ the drug has any side effects.', o: ['whether', 'that', 'which'], why: 'After *not known*, an open question: *whether*.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Complete each sentence with a noun formed from the word in capitals.', items: [
      { q: 'The report calls for greater ___ for the safety of volunteers.', base: 'responsible', a: ['responsibility'], why: '*Responsible* → *responsibility*, followed by *for*.' },
      { q: 'The ___ of the internet changed how scientists share their work.', base: 'emerge', a: ['emergence'], why: '*Emerge* → *emergence*, followed by *of*.' },
      { q: 'Some doctors showed great ___ to accept the new method.', base: 'reluctant', a: ['reluctance'], why: '*Reluctant* → *reluctance*, followed by *to*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite each sentence. Start with the words given.', items: [
      { q: 'People say that the professor has been writing the book for ten years.', cue: 'The professor', a: ['The professor is said to have been writing the book for ten years.'], why: 'An activity that has lasted up to now: *to have been* + *-ing*.' },
      { q: 'It is thought that the documents were destroyed in a fire.', cue: 'The documents', a: ['The documents are thought to have been destroyed in a fire.'], why: 'Earlier and passive: *to have been* + past participle.' },
      { q: 'In the past, people believed that the Earth was the centre of the universe.', cue: 'The Earth', a: ['The Earth was believed to be the centre of the universe.', 'The Earth was believed in the past to be the centre of the universe.', 'The Earth was once believed to be the centre of the universe.'], why: 'A past belief about the same time: past reporting verb + simple infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The new findings cast ___ on the earlier study.', a: ['doubt'], why: '*Cast doubt on* means make people less sure of something.' },
      { q: 'In all ___, the project will need more funding.', a: ['likelihood'], why: '*In all likelihood* means very probably.' },
      { q: 'The sudden ___ in temperature killed many of the plants.', a: ['drop', 'fall', 'rise', 'increase', 'change'], why: 'A noun after the adjective *sudden*, followed by *in*.' },
    ] },
  ],
};
