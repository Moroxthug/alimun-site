// English C2, unit 11, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Science and the public, one of the eight academic and professional units: reporting research with the right strength
// (cause and correlation, risk, uncertainty), nominalisation and the passive and how to unpack them, the C2 article taught
// in full, and a feature on a disputed study. Studies in the texts are fictional examples, never presented as real
// findings. Each lesson ends with a task in the format of a named C2 Proficiency part and a speaking task.
export const UNIT = {
  id: 'u11',
  title: 'Science and the public',
  goal: 'Report what research shows with exactly the strength the evidence allows, unpack dense scientific prose for a general reader, write an article that makes evidence clear and engaging, and read science journalism critically.',
  art: 'owl',
  tags: { skills: ['vocabulary', 'grammar', 'writing', 'reading', 'speaking'], topics: ['science', 'correlation', 'risk', 'uncertainty', 'nominalisation', 'passive', 'article', 'science-journalism'], goals: ['foundations', 'academic'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Linked to, not caused by',
      about: 'Describe what a study shows with the right strength: cause and correlation, risk and probability, and the language of uncertainty.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At C2 you are expected not only to understand research but to **report it accurately**: no stronger and no weaker than the evidence allows. That is harder than it sounds, because everyday English blurs distinctions that scientists keep apart, and because a sentence that is slightly too strong can mislead thousands of readers.\n\nThe most important distinction is between **correlation** and **causation**. Two things are *correlated* when they tend to rise and fall together. A correlation can arise because A causes B; because B causes A (**reverse causation**); because a third factor causes both (a **confounding factor**, or *confounder*); or simply by **chance**. People who carry a lighter are more likely to develop lung disease, but the lighter is not the cause: smoking explains both.\n\nOnly certain kinds of study, above all the **randomised controlled trial**, in which people are assigned to groups by chance, can show cause with much confidence. Most studies reported in the news are **observational**: they watch what people already do. Such a study can show that two things are **associated**, and it can be very valuable, but on its own it cannot prove that one causes the other. Your choice of verb is where you show your reader which kind of claim you are making.' },
          { t: 'table', caption: 'From the strongest claim to the weakest', explain: ['head', 'col1'], head: ['Expression', 'What it claims', 'Example'], rows: [
            ['causes / results in', 'a cause that has been shown', 'Smoking causes lung cancer.'],
            ['leads to / gives rise to', 'a cause, often through several steps', 'Chronic lack of sleep can lead to lapses in attention.'],
            ['contributes to / plays a part in', 'one cause among several', 'Diet is one of many factors that contribute to heart disease.'],
            ['is associated with / is linked to', 'they occur together; the cause is not shown', 'Late bedtimes are associated with lower exam results.'],
            ['is predictive of / predicts', 'one helps to forecast the other', 'Early vocabulary is predictive of later reading ability.'],
            ['coincides with', 'they happen at the same time; nothing more', 'The fall in cases coincided with an unusually mild winter.'],
          ] },
        ],
        [
          { t: 'text', md: 'The second trap is **risk**. Researchers often report **relative risk**, which compares two groups: *people who did X were twice as likely to develop Y*. That may be true and still hide the **absolute risk**, the actual chance of the thing happening. In a hypothetical trial where a side effect appears in 1 in 20,000 people on a normal dose and 2 in 20,000 on a stronger one, the risk has **doubled**, yet it has only gone from very small to still very small. Careful writers give both: *the risk doubles, from about one in twenty thousand to one in ten thousand*.\n\nEnglish has a precise scale for the size of a change: **negligible** and **marginal** (it hardly matters), **modest** and **slight** (small but real), **appreciable**, **substantial** and **marked** (large enough to matter), **dramatic** and **sharp** (large and fast). You can **double**, **treble** or **halve** something, or report *a **twofold** or **tenfold** increase*.\n\nFinally, **statistically significant** does not mean *important*. It means the result is **unlikely to be due to chance alone**; a tiny effect in a huge study can be significant and still of no practical interest.' },
          { t: 'examples', items: [
            { s: 'Regular exercise **is associated with** a lower risk of depression, though the direction of the effect is not yet clear.', n: 'An association; the writer flags possible reverse causation.' },
            { s: 'The difference between the two groups was **statistically significant** but **marginal** in practical terms.', n: 'Unlikely to be chance, but too small to matter much.' },
            { s: 'In the trial, the drug **halved** the risk of a second stroke, from roughly four in a hundred to two.', n: 'The relative change with the absolute figures.' },
            { s: 'Once income was **controlled for**, the link between coffee and memory **disappeared**.', n: '*control for* a confounder: remove its influence in the analysis.' },
            { s: 'The new method produced a **modest but consistent** improvement.', n: 'Small but real, and repeated across the data.' },
            { s: 'Sales of ice cream and cases of sunburn **rise and fall together**; hot weather drives both.', n: 'A classic correlation with a third factor behind it.' },
          ] },
        ],
        [
          { t: 'text', md: 'The third skill is to signal **how strong the evidence is**. Scientists rarely say *proved*. They speak of evidence that is **robust**, **compelling** or **conclusive** at one end, and **preliminary**, **mixed**, **patchy**, **inconclusive** or merely **anecdotal** at the other. A finding that **has yet to be replicated** has been seen once and not yet confirmed by other researchers.\n\nNotice the difference between ***no evidence of harm*** and ***evidence of no harm***. The first may simply mean that nobody has looked carefully; the second means that people have looked and found nothing. Journalists confuse them constantly.\n\nUncertainty can be expressed precisely without sounding weak. *The findings **point to** a link* is confident but measured. *It **cannot be ruled out** that…* admits a possibility. *It **remains to be seen** whether…* says the answer depends on future work. *On the **balance of evidence**…* weighs everything known. *The **jury is still out*** is the informal version of *the evidence is inconclusive*.' },
          { t: 'table', caption: 'How strong is the evidence?', explain: ['head', 'col1'], head: ['Phrase', 'What it tells the reader'], rows: [
            ['The evidence is robust / compelling.', 'many good studies agree'],
            ['The evidence is conclusive.', 'the question is effectively settled'],
            ['The findings point to / suggest a link.', 'there is a pattern worth taking seriously'],
            ['The evidence is mixed / patchy.', 'some studies find it and some do not'],
            ['The results are preliminary.', 'an early stage; more work is needed'],
            ['The finding has yet to be replicated.', 'nobody else has confirmed it so far'],
            ['The evidence is largely anecdotal.', 'personal stories, not systematic data'],
            ['It cannot be ruled out that…', 'it is possible, though not shown'],
            ['To date, no study has shown…', 'so far; this may change'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The study proves that coffee prevents memory loss.', 'The study suggests that coffee may be linked to a lower risk of memory loss.', 'One observational study shows an association; it proves nothing.'],
            ['Eating breakfast causes better grades, according to a survey.', 'Pupils who eat breakfast tend to get better grades, according to a survey.', 'A survey can show a tendency, not a cause.'],
            ['The drug increases the risk by 100%.', 'The drug doubles the risk, from one in ten thousand to two in ten thousand.', 'A relative figure alone exaggerates; give the absolute numbers too.'],
            ['The result was significant, so the effect is large.', 'The result was significant, though the effect was small.', '*Significant* means unlikely to be chance, not large.'],
            ['There is no evidence it is harmful, so it is safe.', 'There is no evidence of harm so far, but it has not been studied in children.', 'No evidence of harm is not evidence of no harm.'],
            ['The data is inconclusive, so the treatment does not work.', 'The data is inconclusive, so we cannot yet say whether the treatment works.', 'Inconclusive means unknown, not negative.'],
            ['an increase of temperature', 'an increase in temperature', 'A change *in* something; an increase *of* is for the amount: *an increase of 2%*.'],
          ] },
          { t: 'dialogue', title: 'On the radio: a study about sleep', lines: [
            { who: 'Presenter', s: 'Your study has been everywhere this week. One headline says that going to bed late makes teenagers fail their exams. Is that what you found?' },
            { who: 'Nadia', s: 'Not quite. We found that late bedtimes were associated with lower results. That is a correlation, and it could run in either direction.' },
            { who: 'Presenter', s: 'In either direction?' },
            { who: 'Nadia', s: 'A pupil who is struggling may stay up late worrying, or revising. And once we controlled for things like family income and screen time, the gap narrowed considerably. It was still statistically significant, but it would not turn a pass into a fail.' },
            { who: 'Presenter', s: 'So what should parents take from it?' },
            { who: 'Nadia', s: 'That sleep probably matters, which we knew, and that the findings are preliminary. It remains to be seen whether changing bedtimes changes results. That would need a proper trial.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Does the sentence claim a cause, or only an association? Sort the sentences.', groups: ['claims a cause', 'only an association'], explain: ['groups'], items: [
            { s: 'Lack of vitamin C causes scurvy.', g: 0, why: '*causes*: the strongest causal verb, here a long-established fact.' },
            { s: 'Higher screen time is linked to shorter sleep.', g: 1, why: '*is linked to* claims only that they occur together.' },
            { s: 'The new fertiliser led to a sharp rise in yields.', g: 0, why: '*led to* presents the fertiliser as the cause.' },
            { s: 'Dog owners tend to report lower stress levels.', g: 1, why: '*tend to report* describes a pattern, not a cause.' },
            { s: 'The fall in crime coincided with the opening of the youth centre.', g: 1, why: '*coincided with*: they happened at the same time, nothing more.' },
            { s: 'The vaccine gave rise to a strong immune response in most volunteers.', g: 0, why: '*gave rise to* presents the vaccine as the cause.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the word that reports the evidence accurately.', items: [
            { q: 'The effect was tiny, but the study was huge, so the result was statistically ___.', o: ['significant', 'important', 'dramatic'], why: 'A large sample can make a tiny effect *significant*: unlikely to be chance.' },
            { q: 'Only one small study has found this, so the finding has yet to be ___.', o: ['replicated', 'repeated back', 'reproduced in print'], why: '*Replicate* a finding: confirm it in a new study.' },
            { q: 'Some studies find a benefit and others do not: the evidence is ___.', o: ['mixed', 'mingled', 'blended'], why: 'The fixed collocation is *the evidence is mixed*.' },
            { q: 'Most of the evidence comes from personal stories; it is largely ___.', o: ['anecdotal', 'empirical', 'conclusive'], why: '*Anecdotal* evidence comes from individual stories, not systematic data.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 3): read the text about a study that made headlines. Use the word in capitals to form a word that fits each gap.', items: [
            { q: 'Few subjects are as reliably ___ as a new study about coffee.', base: 'news', a: ['newsworthy'], why: 'A compound adjective: *news* + *-worthy*, worth reporting.' },
            { q: 'Last spring, one such study was presented, almost ___, as proof that coffee protects the brain.', base: 'universe', a: ['universally'], why: 'Two suffixes: *universe → universal → universally*.' },
            { q: 'In fact, the researchers had found only a weak ___ between coffee drinking and memory scores.', base: 'correlate', a: ['correlation'], why: 'The noun after *a weak*: *correlation*.' },
            { q: 'Their sample, drawn from a single wealthy town, was hardly ___ of the population as a whole.', base: 'represent', a: ['representative'], why: '*representative of*: typical of a larger group.' },
            { q: 'Coffee drinkers there were also richer, which made the effect of coffee ___ difficult to separate from the effect of money.', base: 'notorious', a: ['notoriously'], why: 'An adverb before an adjective: *notoriously difficult*.' },
            { q: 'The authors themselves called their findings ___ and asked for a proper trial.', base: 'conclude', a: ['inconclusive'], why: 'Prefix *in-* and suffix *-ive*: not settled.' },
            { q: 'Such caution rarely survives the journey to the headline, where ___ is rewarded with clicks.', base: 'simple', a: ['oversimplification'], why: 'Three changes: *over-* + *simplify* + *-ication*, the noun.' },
            { q: 'Readers are left with the ___ impression that science changes its mind every week.', base: 'lead', a: ['misleading'], why: 'Prefix *mis-* and *-ing*: giving a false impression.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 3** of C2 Proficiency, many answers need **two or three changes** to the word in capitals: a prefix, a suffix and sometimes a change inside the word (*simple → oversimplification*), and some need a **compound** (*news → newsworthy*). Decide the word class from the sentence, then ask whether the meaning is negative, then whether a noun must be plural. Spelling must be exact.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as a careful science reporter would.', tutor: 'lena', items: [
            { a: 'Late bedtimes were associated with lower results, but the direction of the effect is unclear.' },
            { a: 'The risk doubles, from about one in twenty thousand to one in ten thousand.' },
            { a: 'The findings are preliminary and have yet to be replicated.' },
            { a: 'There is no evidence of harm so far, which is not the same as evidence of no harm.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Unpacking dense prose',
      about: 'Recognise nominalisation and the passive in scientific writing, see why scientists use them, and unpack them for a general reader.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Nominalisation** turns a process (a verb) or a quality (an adjective) into a noun: *analyse → analysis, reduce → reduction, expose → exposure, likely → likelihood*. Compare *Ice in the region melted faster and faster* with *the rapid **acceleration** of ice **loss** in the region*. The second is a noun phrase, not a sentence, so it can become the subject of a new sentence and carry more information.\n\nWriters nominalise for good reasons. A noun phrase **compresses** a clause into a few words. It turns a process into a **thing that can be discussed** and evaluated: once *temperatures rose sharply* becomes *the sharp **rise***, the next sentence can say *this rise has been attributed to…*. It helps **cohesion**, because the verb at the end of one sentence becomes the noun at the start of the next. And it sounds **impersonal**, which keeps the evidence, not the researcher, at the centre.\n\nThe cost is that it hides **who did what**. *The **implementation** of the **recommendations** was delayed* does not say who recommended, who implemented or who delayed. For specialists that is often acceptable; for a general reader it is hard work.' },
          { t: 'table', caption: 'From clause to noun phrase', explain: ['head'], head: ['Clause (verbs and adjectives)', 'Noun phrase (nouns)'], rows: [
            ['Bees are declining rapidly.', 'the rapid decline in bee numbers'],
            ['Patients were exposed to the virus for a long time.', 'prolonged exposure to the virus'],
            ['The bacteria resist antibiotics.', 'the resistance of the bacteria to antibiotics'],
            ['It is likely that the result will be repeated.', 'the likelihood of the result being repeated'],
            ['They failed to report the side effects.', 'their failure to report the side effects'],
            ['People want cheaper energy more and more.', 'growing demand for cheaper energy'],
          ] },
        ],
        [
          { t: 'text', md: 'Scientific writing also relies on the **passive**. In a methods section the researcher is obvious, so the passive puts the **material and the process** first: *Samples **were collected** at dawn.* The **impersonal passive** reports findings without naming anyone: ***It was found that…**, **It has been suggested that…***. Passive reporting with an infinitive keeps a careful distance: *The effect **is thought to be** small.*\n\nTogether, nominalisation and the passive make a sentence doubly dense. In *A reduction in symptoms **was observed***, the agent disappears twice (who observed? who got better?), and the real action is buried in a noun while the verb does almost nothing.\n\nYou still need both: they show range in formal writing, and Part 4 of the exam often asks you to move between a verb and a noun. But for the public, an agentless passive can sound evasive. *Mistakes were made* is famous precisely because it avoids saying *we made mistakes*.' },
          { t: 'examples', items: [
            { s: 'Participants **were randomly assigned** to one of two groups.', n: 'Methods passive: who assigned them does not matter.' },
            { s: '**It has been proposed that** the decline is linked to a common pesticide.', n: 'Impersonal passive: a view without a named source.' },
            { s: 'The **decline** in bee numbers **has been attributed to** several factors.', n: 'A nominalisation as subject, with a passive reporting verb.' },
            { s: 'A **reduction in symptoms was observed** in the treatment group. → Patients who took the drug **felt better**.', n: 'The same finding, unpacked: a real subject and a real verb.' },
            { s: 'The **failure** of the trial **to recruit** enough volunteers delayed publication.', n: '*failure to do*: the noun keeps the verb’s pattern.' },
            { s: 'The vaccine **is thought to offer** protection for several years.', n: 'Passive reporting with an infinitive: cautious distance.' },
          ] },
        ],
        [
          { t: 'text', md: 'To **unpack** a dense sentence for a general reader, work backwards from the nominalisation. Find the nouns that are really **verbs in disguise** (*reduction, exposure, analysis, failure*) and ask, for each one, **who did it** and **to what**. Then make the most important action the **main verb**, with a **real subject**, preferably a person: *researchers, patients, the drug*. Break long chains of nouns (*adolescent evening screen use*) into phrases with *who*, *that* and *when*. Keep one or two technical words if they matter, and explain them in passing.\n\nUnpacking usually makes a text **longer but faster**: more words, less effort. It also forces you to **commit**. A sentence such as *An association was found* lets the writer avoid saying how strong the association was; once you write *Teenagers who used screens more slept less*, you must decide how much less, and whether the study really showed it.' },
          { t: 'reading', title: 'Two versions of the same finding', md: '**Version A, for specialists.** An investigation into the effects of prolonged exposure to artificial light at night on sleep duration in adolescent populations was conducted. A significant reduction in total sleep time was observed among participants with higher levels of evening screen use, although no causal relationship could be established, owing to the cross-sectional nature of the design.\n\n**Version B, for the public.** Researchers wanted to know whether light from screens late at night affects how long teenagers sleep. They found that teenagers who used screens more in the evening slept less overall. But the study could not show that the screens caused the shorter nights. Because it looked at each teenager only once, it is just as possible that teenagers who sleep badly simply reach for their phones more.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The analyse of the data took a year.', 'The analysis of the data took a year.', '*analyse* is the verb; *analysis* is the noun.'],
            ['an increase of demand for water', 'an increase in demand for water', 'Each noun has its preposition: *increase in, demand for*.'],
            ['the effect of the drug to patients', 'the effect of the drug on patients', '*an effect on* someone or something.'],
            ['adolescent evening screen use sleep reduction', 'a reduction in how long teenagers sleep after using screens in the evening', 'Long noun chains are hard to read; unpack them.'],
            ['It was decided by us to stop the trial.', 'We decided to stop the trial.', 'A passive with *by us* is clumsy; use the active.'],
            ['A decision was made by the board to close the lab.', 'The board decided to close the lab.', 'For the public, name the actor and use the verb.'],
            ['The exposure to sunlight of the volunteers was measured.', 'The volunteers’ exposure to sunlight was measured.', 'Keep the noun next to its own preposition.'],
          ] },
          { t: 'dialogue', title: 'Rewriting a press release', lines: [
            { who: 'Helen', s: 'Ravi, I love the research, but nobody outside your department will get past the first sentence.' },
            { who: 'Ravi', s: 'It says exactly what we did. “A reduction in hospital admissions was observed following the implementation of the scheme.”' },
            { who: 'Helen', s: 'It says what happened to some nouns. Who was admitted to hospital? And who implemented what?' },
            { who: 'Ravi', s: 'Older people with asthma. The council started sending nurses to check their inhalers at home.' },
            { who: 'Helen', s: 'Then let’s say that. “After the council began sending nurses to check inhalers at home, fewer older people with asthma ended up in hospital.”' },
            { who: 'Ravi', s: 'Fine, but “after” is not the same as “because”. We didn’t have a control group.' },
            { who: 'Helen', s: 'Good point. So we add a sentence: the study cannot rule out other reasons for the fall, such as a mild winter.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each verb or adjective with its noun.', pairs: [
            ['to fail to report', 'a failure to report'],
            ['to be exposed to', 'exposure to'],
            ['to resist', 'resistance to'],
            ['likely', 'the likelihood of'],
            ['to depend on', 'dependence on'],
            ['to emit', 'emissions of'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the preposition that follows the noun.', items: [
            { q: 'Scientists have recorded a steep decline ___ the number of wild bees.', a: ['in'], why: '*a decline in* something.' },
            { q: 'There is a growing demand ___ cheaper and cleaner energy.', a: ['for'], why: '*demand for* something.' },
            { q: 'Prolonged exposure ___ loud noise can damage hearing.', a: ['to'], why: '*exposure to* something.' },
            { q: 'Little is known about the long-term effect of the drug ___ children.', a: ['on'], why: '*an effect on* someone.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Unpack each sentence for a general reader. Start with the words given and use a verb for the main action.', items: [
            { q: 'A reduction in symptoms was observed in patients receiving the drug.', cue: 'Patients who', a: ['Patients who received the drug had fewer symptoms.', 'Patients who took the drug had fewer symptoms.', 'Patients who received the drug had milder symptoms.', 'Patients who took the drug had milder symptoms.'], why: 'The hidden subject (patients) and the hidden action (had fewer symptoms) come out of the nouns.' },
            { q: 'The failure of the company to report the side effects caused a delay.', cue: 'Because the company', a: ['Because the company failed to report the side effects, there was a delay.', 'Because the company did not report the side effects, there was a delay.', 'Because the company didn’t report the side effects, there was a delay.'], why: '*failure to report* becomes *failed to report*, with a clear subject.' },
            { q: 'An increase in demand for water is expected.', cue: 'Experts expect', a: ['Experts expect people to need more water.', 'Experts expect people to use more water.', 'Experts expect demand for water to increase.', 'Experts expect demand for water to rise.', 'Experts expect demand for water to grow.'], why: 'An active verb with a named subject; *increase* becomes a verb.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Part 4** of C2 Proficiency you complete a second sentence so that it means the same as the first, using a **key word** that you must not change and **three to eight words** in total, including the key word. There are **six** items and each can earn **two marks**, so a partly correct answer still counts. Many items move between a **verb and a noun** (*decide → decision, explain → explanation*) or between **active and passive**, which is exactly the skill of this lesson. Contractions count as two words.' },
          { t: 'ex', kind: 'transform', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Do not change the word given. Use between three and eight words, including the word given.', items: [
            { q: 'Scientists have still not explained why the effect occurs.', cue: 'explanation', gap: 'There is ___ why the effect occurs.', a: ['still no explanation for', 'as yet no explanation for', 'still no explanation of', 'as yet no explanation of', 'still no scientific explanation for', 'no explanation yet for'], why: 'The verb *explain* becomes the noun *explanation*, with *still* or *as yet* and the preposition *for* or *of*.' },
            { q: 'Nobody had expected the results to be so clear.', cue: 'surprise', gap: 'The clarity of the results ___ everyone.', a: ['came as a surprise to', 'came as a complete surprise to', 'came as something of a surprise to', 'came as a great surprise to', 'was a surprise to', 'was a complete surprise to'], why: 'The fixed phrase *come as a surprise to* someone.' },
            { q: 'People widely believe that the drug was tested too quickly.', cue: 'widely', gap: 'The drug ___ tested too quickly.', a: ['is widely believed to have been', 'is widely thought to have been'], why: 'Passive reporting with a perfect passive infinitive: *is widely believed to have been tested*.' },
            { q: 'The trial was stopped early because several patients reacted badly to the treatment.', cue: 'led', gap: 'Several adverse reactions to the treatment ___ early.', a: ['led to the trial being stopped', 'led to the trial’s being stopped', 'led to the trial being halted', 'led to the trial being ended', 'led to the trial being called off'], why: '*lead to* + object + *-ing* passive: *led to the trial being stopped*.' },
            { q: 'The researchers did not take into account how much the participants exercised.', cue: 'account', gap: 'No ___ of how much the participants exercised.', a: ['account was taken', 'account was taken by the researchers'], why: 'The idiom *take account of* in the passive, with *no* at the start.' },
            { q: 'It is very unlikely that the findings will be replicated.', cue: 'likelihood', gap: 'There is ___ the findings being replicated.', a: ['little likelihood of', 'very little likelihood of', 'only a slight likelihood of', 'only a small likelihood of', 'a very low likelihood of', 'hardly any likelihood of', 'little or no likelihood of'], why: 'The adjective *likely* becomes the noun *likelihood*, followed by *of* + noun + *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say each pair after the tutor: the dense version, then the unpacked one.', tutor: 'arthur', items: [
            { a: 'A reduction in hospital admissions was observed following the implementation of the scheme.' },
            { a: 'After the council started the scheme, fewer people ended up in hospital.' },
            { a: 'The drug is widely believed to have been tested too quickly.' },
            { a: 'There is as yet no explanation for why the effect occurs.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Making evidence readable',
      about: 'Write an article in the format of C2 Proficiency Writing Part 2: a headline, a hook, an analogy and a fair account of the evidence.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'The **Writing** paper of C2 Proficiency lasts **1 hour 30 minutes** and has two parts. **Part 1** is compulsory: an essay that summarises and evaluates two short texts, in **240 to 280 words**. In **Part 2** you choose **one** task from a set of options, usually an **article**, a **letter**, a **report** or a **review**, and write **280 to 320 words**. Allowing time for Part 1, you have about **45 minutes** for your Part 2 text.\n\nAn **article** is written for the readers of a magazine, newspaper or website. The task tells you who they are and what the article must do: explain, describe, discuss, compare, give an opinion. Unlike an essay, an article must **engage**: the reader can stop at any moment, so you have to give them a reason to go on. Unlike a report, it has **no headings** inside it, and its voice can be personal, witty and direct.\n\nExaminers judge four things, in general terms: whether you have done **everything the task asks** (content); whether the text **works for its reader**, in the right register, holding their interest (communicative achievement); whether it is **well organised**, with clear paragraphs and a natural flow (organisation); and the **range and control** of your language. At C2, a confident, consistent voice and precise, natural vocabulary make the difference.' },
          { t: 'table', caption: 'The shape of a C2 article', explain: ['head', 'col0', 'col1'], head: ['Part', 'Its job', 'Example'], rows: [
            ['headline', 'catch the eye; promise something; never overclaim', 'Twice the risk of almost nothing'],
            ['opening (the hook)', 'make the reader want to go on', 'Every few weeks, a headline warns us that something ordinary doubles the risk of a frightening disease.'],
            ['the explanation', 'make the idea clear, often with an analogy', 'Think of it as a lottery in which you now hold two tickets instead of one.'],
            ['the evidence, fairly', 'give both sides, with the right strength', 'None of this means the finding is worthless.'],
            ['the ending', 'leave the reader with something to keep, often back to the hook', 'Ask two things before you change your breakfast.'],
          ] },
        ],
        [
          { t: 'text', md: 'A good **headline** is short, specific and intriguing. It may ask a question, play on a familiar phrase, or set up a contrast, but in a science article it must **not promise more than the evidence gives**: *Coffee cures memory loss* is a lie; *Is your morning coffee really protecting your brain?* is a fair question.\n\nThe **hook** is the first one or two sentences. There are several reliable openings: a **scene** (*It is three in the morning and you are reading about sleep*); a **common belief** you are about to challenge (*We are often told that…*); a **surprising fact** stated plainly; a **direct question** to the reader. What to avoid is the essay opening, *In this article I will discuss…*, which tells the reader the article has not started yet.\n\nThe **ending** should not simply repeat the introduction. Strong endings return to the hook with a new understanding, give the reader something to do or to watch for, or leave them with a sharp final image. *In conclusion* belongs to essays, not articles.' },
          { t: 'examples', items: [
            { s: '**Is your morning coffee really protecting your brain?**', n: 'A headline as a question: intriguing, and honest about uncertainty.' },
            { s: '**Twice the risk of almost nothing**', n: 'A headline built on a contrast that is the point of the article.' },
            { s: 'We are often told that a glass of red wine a day is good for the heart. The evidence is rather less cheerful.', n: 'A hook that sets up a common belief, then questions it.' },
            { s: 'So the next time a headline announces a miracle, ask the only question that matters: compared with what?', n: 'An ending that gives the reader something to keep.' },
            { s: 'In this article I am going to talk about risk.', n: 'A weak opening: it announces the article instead of starting it.' },
          ] },
        ],
        [
          { t: 'text', md: 'The heart of a science article is the **explanation**, and the writer’s best tool is the **analogy**: comparing the unfamiliar to something the reader already knows. *A vaccine is a rehearsal: it lets the immune system practise against a harmless copy before the real performance.* *Weather is your mood; climate is your personality.* Introduce an analogy with ***Think of it as…***, ***It is rather like…***, ***Imagine…*** or ***To put it another way…***, and, if it could mislead, mark its limits: ***The comparison only goes so far, of course…***.\n\nThe second duty is **fairness**. Give the strength of the evidence (lesson 1), attribute claims to their sources, present the strongest version of the other side, and give **absolute numbers** alongside relative ones. Fairness does not mean **false balance**: if the evidence is overwhelming on one side, giving a lone dissenter equal space misleads the reader as much as exaggeration does.' },
          { t: 'table', caption: 'Common mistakes in a C2 article', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Coffee Cures Memory Loss!', 'Is your morning coffee really protecting your brain?', 'A headline must not overclaim.'],
            ['In this article I will discuss risk.', 'Every few weeks, a headline warns us that…', 'Start the article; do not announce it.'],
            ['Firstly… Secondly… In conclusion…', 'So the next time a headline announces…', 'Essay signposts feel stiff in an article.'],
            ['Headings inside the article', 'Paragraphs linked by ideas', 'Headings belong to reports, not articles.'],
            ['An analogy with no limits stated', 'The comparison only goes so far, of course.', 'Show where the analogy stops being true.'],
            ['Giving a lone sceptic equal weight', 'Saying where the weight of evidence lies', 'False balance misleads the reader.'],
          ] },
        ],
        [
          { t: 'reading', title: 'Task and model article', md: '*Task: A popular science magazine is running a series called What the Headlines Get Wrong. Write an article for the series about a kind of scientific claim that is often misreported. Explain why it is misunderstood and what readers should look for when they meet it. Write 280 to 320 words.*\n\n**Twice the risk of almost nothing**\n\nEvery few weeks, a headline warns us that something ordinary, a sausage, a late night, a glass of wine, “doubles the risk” of a frightening disease. Some readers panic; more, I suspect, simply shrug, having learned that next month’s headline will probably say the opposite. Both reactions miss what the study actually found.\n\nThe problem lies in a single word: risk. Researchers usually report relative risk, which compares two groups. If a hypothetical illness affects one person in twenty thousand, and a habit raises that to two in twenty thousand, the risk has indeed doubled. Yet your chance of falling ill has gone from vanishingly small to very small. Think of it as a lottery in which you now hold two tickets instead of one: twice as many, but you are still most unlikely to win.\n\nNone of this means the finding is worthless. Across a whole population, a small rise in individual risk can add up to a great many extra cases, which is precisely why public health researchers take such results seriously. What matters is that the figure is reported alongside the absolute numbers, so that readers can judge for themselves.\n\nA second question is worth asking of any startling claim: did the researchers show that the habit causes the illness, or merely that the two tend to appear together? People who eat a lot of processed meat may also smoke more, exercise less or sleep worse. Unless a study has ruled such factors out, “linked to” is the most it can honestly say.\n\nSo the next time a headline announces that something doubles your risk, ask two things before you change your breakfast: double what, and caused by what? The answers are usually there in the story, a few paragraphs below the alarm.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the model article again. Choose the correct answer.', items: [
            { q: 'How does the article open?', o: ['with familiar examples of alarming headlines', 'with a definition of relative risk', 'with a statement of what the article will discuss'], why: 'A hook built on headlines every reader has seen.' },
            { q: 'Why does the third paragraph begin “None of this means the finding is worthless”?', o: ['to give a fair account of why such findings still matter', 'to change the writer’s mind about risk', 'to introduce a new example'], why: 'The writer avoids dismissing the research: fairness, not cynicism.' },
            { q: 'How does the ending relate to the opening?', o: ['It returns to the headlines with two questions for the reader.', 'It repeats the first paragraph word for word.', 'It introduces a completely new topic.'], why: 'The ending comes back to the hook with something new to keep.' },
            { q: 'Which feature shows the article is not an essay or a report?', o: ['a personal voice and a direct address to the reader', 'headings for each section', 'the phrase “In conclusion”'], why: 'Articles speak to the reader (*your chance*, *ask two things*).' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Writing Part 2, an article): choose the best sentence for each part of an article about why people distrust experts.', items: [
            { q: 'The headline:', o: ['Why we stopped listening to the people who know', 'Experts Are Always Right', 'An article about experts and trust'], why: 'Intriguing and fair; the others overclaim or merely describe.' },
            { q: 'The opening sentence:', o: ['Most of us trust a stranger with our lives every time we board a plane, yet we will happily ignore a scientist on the evening news.', 'In this article I will explain why people distrust experts.', 'Experts are people who know a lot about a subject.'], why: 'A hook with a striking contrast.' },
            { q: 'A sentence that explains with an analogy:', o: ['Trust is rather like a bank balance: built slowly through small deposits, and spent in a single bad decision.', 'Trust is very important for everyone.', 'Trust is when you believe someone.'], why: 'A clear analogy that makes an abstract idea concrete.' },
            { q: 'A sentence that is fair to the other side:', o: ['To be fair to the sceptics, experts have not always deserved the trust they ask for.', 'Sceptics are simply ignorant.', 'Everyone who distrusts experts is wrong.'], why: 'It concedes a real point without false balance.' },
            { q: 'The final sentence:', o: ['Perhaps the question is not whether we trust experts, but whether we have given them reasons to earn it.', 'In conclusion, experts are good and bad.', 'That is the end of my article.'], why: 'An ending that reframes the question and stays with the reader.' },
          ] },
        ],
        [
          { t: 'text', md: 'In the format of the C2 Proficiency exam (Writing Part 2, an article): write your own article on the task below, in **280 to 320 words**, and send it to your teacher, who will correct it. Give yourself **45 minutes**, as in the exam: about ten to plan, thirty to write and five to check.\n\n*A magazine for curious general readers is publishing a series called Science You Can Use. Write an article for the series explaining one scientific idea that you think everyone should understand, such as probability, the placebo effect or how vaccines work. Explain the idea clearly, say why it matters in everyday life, and discuss any ways in which it is commonly misunderstood.*' },
          { t: 'tip', art: 'owl', md: 'Before you write, decide your **headline**, your **hook**, one **analogy** and your **last line**. Then check your draft for strength: every *causes*, *proves* and *always* should be earned. Your teacher will mark it on the same four areas as the examiners: content, effect on the reader, organisation and language.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if reading your article aloud.', tutor: 'sofia', items: [
            { a: 'Think of it as a lottery in which you now hold two tickets instead of one.' },
            { a: 'None of this means the finding is worthless.' },
            { a: 'The comparison only goes so far, of course.' },
            { a: 'The answers are usually there in the story, a few paragraphs below the alarm.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The study that would not go away',
      about: 'Read a feature article on a disputed study in the format of C2 Proficiency Reading Part 7, and talk about how science corrects itself.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Science corrects itself, but slowly and untidily. This lesson’s feature follows one fictional study from a striking result to a failed replication. First, the vocabulary of how research is checked: a study is **peer-reviewed** before publication; other teams try to **replicate** it, and if they cannot, it may have been a **fluke**. A **null result** finds no effect, and because striking results are published more often, many null results stay in **the file drawer** (**publication bias**). A journal may **retract** a paper, withdrawing it from the record.\n\nIn **Part 7** of C2 Proficiency, you read a long text in sections, or several short texts, and answer **ten questions** by finding the section where each idea appears. The questions **paraphrase** the text: *uneasy about the attention* may be *not entirely comfortable with the publicity*. Read the questions first, then the text, and expect several sections to touch on a similar idea; only one matches exactly.' },
          { t: 'table', caption: 'How research is checked', explain: ['head', 'col1'], head: ['Term', 'Meaning'], rows: [
            ['peer review', 'other experts assess a study before it is published'],
            ['replicate a finding', 'repeat a study to see whether the result holds'],
            ['a fluke', 'a result produced by chance'],
            ['a null result', 'a finding of no effect'],
            ['publication bias', 'striking results are published more often than null ones'],
            ['the file drawer', 'where unpublished null results end up'],
            ['retract a paper', 'withdraw it officially from the record'],
          ] },
        ],
        [
          { t: 'reading', title: 'The blue room effect: anatomy of a disputed study', md: '**A.** It began, as these stories often do, with a small experiment and a memorable result. A team of psychologists reported that volunteers who worked in a room painted pale blue solved more word puzzles than those in an identical white room. The study was modest in size, and its authors were careful to call the findings preliminary. Within months, however, the “blue room effect” had been taken up by office designers and lifestyle magazines, and some schools were repainting their classrooms. The researchers, I am told, were as surprised as anyone, and not entirely comfortable with the publicity.\n\n**B.** The first serious challenge came from a doctoral student, Mara Klein, who had set out not to question the study but to build on it. “I assumed the effect was real,” she told me. “I only wanted to know whether it worked for older people too.” Her experiment was several times larger than the original and followed its methods closely. She found no difference at all between the rooms. Suspecting an error, she checked every step of her procedure and ran the experiment again. The result did not change. “My first instinct was that I had done something wrong,” she admits. “It took me a long time to accept that I might not have.”\n\n**C.** The lead author of the original study has not withdrawn it, and when we spoke he was gracious but unmoved. Replications, he pointed out, are never exact copies: the shade of blue, the lighting, even the season can differ. He accepts that the effect may be smaller than his first paper suggested, but he believes it is premature to call it a fluke. “Science doesn’t advance by one study cancelling out another,” he said. “It advances by many studies, over many years.” It is a fair point, though one that could equally be made about his own original paper.\n\n**D.** Part of the difficulty, according to the editor of a psychology journal I consulted, lies in what gets published in the first place. Striking positive results are far more likely to appear in print than careful studies that find nothing, which tend to end up in what researchers call the file drawer. “For years we rewarded surprise over reliability,” she said. Her journal now agrees to publish some studies on the strength of their design, before the results are known, so that a null finding is as publishable as a dramatic one. She is cautiously optimistic that others will follow.\n\n**E.** And what of the rest of us? I should confess that I once wrote an enthusiastic paragraph about the blue room effect myself, without asking how many people had taken part. Readers can hardly be blamed for believing what writers like me told them so confidently. If there is a lesson, it is not that science is unreliable, but that a single study is a beginning rather than a verdict, and that the most honest phrase in any research paper may well be “further work is needed”.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C2 Proficiency exam (Reading and Use of English Part 7): for each question, choose the section (A to E) where the idea appears.', items: [
            { q: 'Which section mentions someone who set out to extend a finding rather than challenge it?', o: ['B', 'A', 'C', 'D', 'E'], why: 'B: *had set out not to question the study but to build on it*.' },
            { q: 'Which section describes a change of policy intended to make unremarkable results easier to publish?', o: ['D', 'A', 'B', 'C', 'E'], why: 'D: *publish some studies on the strength of their design, before the results are known*.' },
            { q: 'Which section contains the writer’s admission of a lapse in their own professional standards?', o: ['E', 'A', 'B', 'C', 'D'], why: 'E: *I once wrote an enthusiastic paragraph… without asking how many people had taken part*.' },
            { q: 'Which section describes a finding being put into practice before it had been confirmed?', o: ['A', 'B', 'C', 'D', 'E'], why: 'A: *some schools were repainting their classrooms*, though the findings were preliminary.' },
            { q: 'Which section suggests that an argument could be turned against the person who makes it?', o: ['C', 'A', 'B', 'D', 'E'], why: 'C: *a fair point, though one that could equally be made about his own original paper*.' },
            { q: 'Which section mentions researchers feeling uneasy about the attention their work received?', o: ['A', 'B', 'C', 'D', 'E'], why: 'A: *not entirely comfortable with the publicity*.' },
            { q: 'Which section suggests that differences between experiments may explain conflicting results?', o: ['C', 'A', 'B', 'D', 'E'], why: 'C: *the shade of blue, the lighting, even the season can differ*.' },
            { q: 'Which section describes someone repeating an experiment to check for a mistake?', o: ['B', 'A', 'C', 'D', 'E'], why: 'B: *Suspecting an error, she checked every step… and ran the experiment again*.' },
            { q: 'Which section suggests that the public is not to blame for being misled?', o: ['E', 'A', 'B', 'C', 'D'], why: 'E: *Readers can hardly be blamed for believing what writers like me told them*.' },
            { q: 'Which section refers to studies that find nothing going largely unseen?', o: ['D', 'A', 'B', 'C', 'E'], why: 'D: *careful studies that find nothing… tend to end up in… the file drawer*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Notice how the questions paraphrase: *uneasy about the attention* for *not entirely comfortable with the publicity*; *a lapse in their own professional standards* for *without asking how many people had taken part*. Several sections mention the original study, but only one matches each **exact** idea. If two sections seem to fit, read both again and ask which one says the **whole** of the question.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the feature with one word.', items: [
            { q: 'He believes it is ___ to call the effect a fluke.', a: ['premature'], why: '*premature*: too early.' },
            { q: 'Some studies are accepted on the ___ of their design.', a: ['strength'], why: '*on the strength of*: because of, on the basis of.' },
            { q: 'A single study is a beginning rather than a ___.', a: ['verdict'], why: '*a verdict*: a final judgement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'A single study is a beginning rather than a verdict.' },
            { a: 'He believes it is premature to call the effect a fluke.' },
            { a: 'For years we rewarded surprise over reliability.' },
            { a: 'One failed replication is not the end of the matter.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the word or phrase that reports the evidence accurately.', items: [
      { q: 'An observational study of ten thousand adults found that walking ___ a lower risk of heart disease.', o: ['was associated with', 'caused', 'proved', 'guaranteed'], why: 'An observational study shows an association, not a cause.' },
      { q: 'The result was statistically ___, but the effect was too small to matter in practice.', o: ['significant', 'dramatic', 'substantial', 'conclusive'], why: '*Significant* means unlikely to be chance, not large.' },
      { q: 'Only one small study has found this; it has yet to be ___.', o: ['replicated', 'retracted', 'reviewed', 'reported'], why: 'Confirmed by another study: *replicated*.' },
      { q: 'Once income was controlled ___, the link disappeared.', o: ['for', 'by', 'against', 'with'], why: '*control for* a confounding factor.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to form a word that fits the gap.', items: [
      { q: 'The sample was too small to be ___ of the population.', base: 'represent', a: ['representative'], why: '*representative of* a larger group.' },
      { q: 'The authors described their results as ___.', base: 'conclude', a: ['inconclusive'], why: 'Prefix *in-* and suffix *-ive*.' },
      { q: 'Headlines reward ___ over accuracy.', base: 'simple', a: ['oversimplification'], why: '*over-* + *simplify* + *-ication*.' },
      { q: 'The study left readers with a ___ impression.', base: 'lead', a: ['misleading'], why: 'Prefix *mis-* and *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the preposition that follows the noun.', items: [
      { q: 'There has been a sharp decline ___ the number of wild bees.', a: ['in'], why: '*a decline in*.' },
      { q: 'Long exposure ___ noise can damage hearing.', a: ['to'], why: '*exposure to*.' },
      { q: 'Nobody knows the effect of the drug ___ young children.', a: ['on'], why: '*an effect on*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and eight words, including the word given.', items: [
      { q: 'Nobody expected the trial to be cancelled.', cue: 'surprise', gap: 'The cancellation of the trial ___ everyone.', a: ['came as a surprise to', 'came as a complete surprise to', 'was a surprise to', 'came as something of a surprise to'], why: '*come as a surprise to* someone.' },
      { q: 'People believe the data was altered before publication.', cue: 'believed', gap: 'The data ___ altered before publication.', a: ['is believed to have been'], why: 'Passive reporting with a perfect passive infinitive.' },
      { q: 'It is very unlikely that the effect is real.', cue: 'likelihood', gap: 'There is ___ the effect being real.', a: ['little likelihood of', 'very little likelihood of', 'hardly any likelihood of', 'a very low likelihood of'], why: '*likely* becomes *likelihood of*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which is the better choice for a C2 article?', items: [
      { q: 'The best headline for an article on a study about chocolate:', o: ['Is chocolate really good for you? Not quite.', 'Chocolate Cures Heart Disease', 'An article about chocolate'], why: 'Intriguing, and it does not overclaim.' },
      { q: 'The best opening sentence:', o: ['We are often told that a little chocolate is good for the heart; the evidence is rather less sweet.', 'In this article I will discuss chocolate.', 'Chocolate is a food made from cocoa.'], why: 'A hook that sets up a belief and questions it.' },
      { q: 'An article should usually have', o: ['a headline and paragraphs, but no headings inside', 'a heading for every paragraph', 'numbered sections'], why: 'Headings belong to reports.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
      ['a fluke', 'a result produced by chance'],
      ['a null result', 'a finding of no effect'],
      ['publication bias', 'striking results are published more often'],
      ['retract a paper', 'withdraw it from the record'],
      ['a confounding factor', 'a third thing that causes both'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The [analyse] of the samples took several months.', a: ['analysis'], why: 'The noun is *analysis*.' },
      { s: 'A small survey [proves] that pet owners are happier.', a: ['suggests', 'indicates'], why: 'A survey can suggest, not prove.' },
    ] },
  ],
};
