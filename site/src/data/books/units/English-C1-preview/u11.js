// English C1, unit 11, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Media and truth: reporting verbs with complex patterns, distancing and attribution, the language of news and bias,
// and a radio discussion on misinformation. Each lesson ends with a task in the format of C1 Advanced and a speaking task.
export const UNIT = {
  id: 'u11',
  title: 'Media and truth',
  goal: 'Report what people say with precise verbs and the right patterns, keep your distance from claims you cannot check, recognise spin and bias in the news, and follow a long radio discussion on misinformation.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'listening', 'speaking'], topics: ['reporting-verbs', 'distancing', 'passive-reporting', 'news', 'bias', 'misinformation'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Urge, concede, dismiss',
      about: 'Report speech precisely with verbs that carry a judgement, each with its own pattern.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2 you replaced *said* with verbs like *advise, warn, deny* and *suggest*. At C1 the choice of reporting verb does more work: it tells the reader **what the speaker was doing** (pressing, giving way, rejecting, blaming) and often **what the writer thinks of it**. *She **said** the figures were wrong* is neutral. *She **conceded** that the figures were wrong* tells us she accepted it reluctantly, probably after pressure. *She **claimed** the figures were wrong* suggests the writer is not sure she is right.\n\nThe difficulty is that each verb comes with its own **pattern**, and the patterns are not interchangeable. You cannot *suggest someone to do* something, but you can *urge* them to. You *dismiss* a report **as** nonsense, but you *attribute* a quotation **to** someone. Learning the verb means learning the pattern with it.' },
          { t: 'table', caption: 'Reporting verbs and their patterns', explain: ['head', 'col0'], head: ['Pattern', 'Verbs', 'Example'], rows: [
            ['verb + someone + to do', 'urge, implore, press, caution, pressure, prompt, encourage', 'She urged the board to act.'],
            ['verb + that', 'concede, maintain, contend, assert, acknowledge, stress', 'He conceded that mistakes had been made.'],
            ['verb + something + as', 'dismiss, describe, brand, hail, portray', 'They dismissed the story as gossip.'],
            ['verb + something + to', 'attribute, put down, ascribe', 'The quote was attributed to Twain.'],
            ['verb + someone + of / for / with', 'accuse of, blame for, praise for, credit with', 'Critics accused the paper of bias.'],
            ['verb + (preposition) + -ing', 'deny, admit (to), object to, apologise for, insist on', 'He denied leaking the memo.'],
          ] },
        ],
        [
          { t: 'text', md: 'Some verbs **presuppose** that what follows is true; others leave it open. *She **revealed** that the deal had collapsed* tells us the deal really collapsed. *She **alleged** that the deal had collapsed* does not. *Acknowledge*, *admit* and *concede* all accept a fact, but *concede* adds the idea of losing ground in an argument, and *acknowledge* is the most neutral and formal.\n\nWatch the verbs that move the blame around. You **blame** a person **for** a problem, or **blame** a problem **on** a person. You **credit** a person **with** a success, or **attribute** a success **to** a person. The meaning is the same; the order and the preposition change.\n\nAfter *deny, admit* and *regret*, a **perfect -ing** (*having done*) makes the earlier time clear, but the simple *-ing* is just as correct: *He denied **leaking** / **having leaked** the memo.*' },
          { t: 'examples', items: [
            { s: 'The editor **urged** her reporters **to** double-check every figure.', n: 'Strong, repeated advice: *urge* + object + *to*.' },
            { s: 'The minister **conceded that** the policy had not worked as planned.', n: 'Admitting something reluctantly: *concede that*.' },
            { s: 'He **dismissed** the allegations **as** a smear campaign.', n: 'Rejecting something as unworthy: *dismiss X as Y*.' },
            { s: 'The famous line is often **attributed to** Churchill, but there is no record of him saying it.', n: '*attribute X to Y*: say that Y is the source of X.' },
            { s: 'The station **was credited with** breaking the story.', n: '*credit someone with* a success; here in the passive.' },
            { s: 'She **maintained that** she had never seen the documents.', n: 'Keep saying something firmly, often against doubt.' },
            { s: 'They **blamed** the delay **on** a technical fault.', n: '*blame a problem on* a cause.' },
            { s: 'The spokesperson **cautioned** journalists **against** drawing conclusions too early.', n: '*caution someone against* + -ing: a formal warning.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['She suggested me to check the source.', 'She suggested (that) I check the source. / She suggested checking the source.', '*suggest* never takes object + *to*.'],
            ['The paper urged that readers to complain.', 'The paper urged readers to complain.', '*urge* + object + *to*, with no *that*.'],
            ['He dismissed the report like nonsense.', 'He dismissed the report as nonsense.', '*dismiss … as*, never *like*.'],
            ['They attributed the error at the editor.', 'They attributed the error to the editor.', '*attribute … to*.'],
            ['She denied to have spoken to the press.', 'She denied speaking / having spoken to the press.', '*deny* + -ing or *that*, never *to*.'],
            ['He credited the success to his team.', 'He credited his team with the success. / He attributed the success to his team.', '*credit* a person *with* a thing.'],
            ['The minister admitted to make a mistake.', 'The minister admitted making / admitted to making a mistake.', '*admit (to)* + -ing.'],
          ] },
          { t: 'dialogue', title: 'In the newsroom', lines: [
            { who: 'Helen', s: 'The company has finally responded. Their spokesperson dismissed our story as speculation.' },
            { who: 'Daniel', s: 'Did they deny that the factory had been closed?' },
            { who: 'Helen', s: 'Not exactly. They conceded that production had stopped, but they attributed it to routine maintenance.' },
            { who: 'Daniel', s: 'And the workers we spoke to?' },
            { who: 'Helen', s: 'They maintain that nobody was told anything. Two of them urged us to keep their names out of it.' },
            { who: 'Daniel', s: 'Then we report both sides. And we credit the local paper with breaking the story first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the word that completes the pattern.', items: [
            { q: 'The report was widely dismissed ___ an attempt to distract the public.', o: ['as', 'like', 'for'], why: '*dismiss something as*.' },
            { q: 'Scientists attribute the rise in sea temperatures ___ several factors.', o: ['to', 'on', 'with'], why: '*attribute something to* a cause.' },
            { q: 'Her lawyer cautioned her ___ speaking to the press.', o: ['against', 'from', 'to'], why: '*caution someone against* + -ing.' },
            { q: 'The editor was credited ___ saving the newspaper from closure.', o: ['with', 'for', 'to'], why: '*credit someone with* an achievement.' },
            { q: 'Ministers blamed the leak ___ a junior official.', o: ['on', 'for', 'to'], why: '*blame a problem on* a person.' },
            { q: 'The presenter apologised ___ having misquoted the guest.', o: ['for', 'to', 'of'], why: '*apologise for* + -ing.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'The campaigners urged [that the government] to reconsider.', a: ['the government'], why: '*urge someone to do*: no *that* before the object. (*Urge that the government reconsider* is another, more formal pattern, without *to*.)' },
            { s: 'He denied [to have] written the article.', a: ['having', 'that he had'], why: '*deny* + -ing (*having written*) or *deny that he had written*.' },
            { s: 'Critics accused the channel [for] ignoring the story.', a: ['of'], why: '*accuse someone of* + -ing.' },
            { s: 'She suggested [me to] contact the author directly.', a: ['that I', 'I'], why: '*suggest (that) someone do*, never *suggest someone to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 4): complete the second sentence so that it has a similar meaning to the first, using the word given. Use between three and six words, including the word given.', items: [
            { q: '‘You really must check every source, Maya,’ said the editor.', cue: 'URGED', a: ['The editor urged Maya to check every source.'], why: '*urge someone to do*: four words, *urged Maya to check*.' },
            { q: '‘All right, the figures in my article were wrong,’ said Helen.', cue: 'CONCEDED', a: ['Helen conceded that the figures in her article were wrong.', 'Helen conceded that the figures in her article had been wrong.', 'Helen conceded the figures in her article were wrong.', 'Helen conceded the figures in her article had been wrong.'], why: '*concede (that)*, and *my* becomes *her* in reported speech.' },
            { q: 'The minister said the report was nothing more than gossip.', cue: 'DISMISSED', a: ['The minister dismissed the report as nothing more than gossip.', 'The minister dismissed the report as gossip.', 'The minister dismissed the report as mere gossip.'], why: '*dismiss something as*.' },
            { q: 'Most historians believe that the poem was written by Marlowe.', cue: 'ATTRIBUTE', a: ['Most historians attribute the poem to Marlowe.'], why: '*attribute a work to* its author.' },
            { q: '‘You leaked the documents, Daniel!’ said his manager.', cue: 'ACCUSED', a: ['Daniel’s manager accused him of leaking the documents.', 'Daniel’s manager accused him of having leaked the documents.', 'His manager accused Daniel of leaking the documents.', 'His manager accused Daniel of having leaked the documents.'], why: '*accuse someone of* + -ing; the perfect *having leaked* is also right.' },
            { q: '‘I didn’t speak to any reporters,’ said the actor.', cue: 'DENIED', a: ['The actor denied speaking to any reporters.', 'The actor denied having spoken to any reporters.', 'The actor denied that he had spoken to any reporters.', 'The actor denied that she had spoken to any reporters.'], why: '*deny* + -ing or *that*; no *not* after *deny*, because the verb is already negative.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** at C1 you write **three to six words**, and each item usually tests **two things**: here, the reporting verb and the pattern after it. The answer is marked in two halves, so a correct verb with the wrong preposition can still earn one mark. Never change the key word, and remember that a contraction counts as two words.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'She conceded that the figures had been wrong.' },
            { a: 'They dismissed the story as pure speculation.' },
            { a: 'The quotation is often attributed to Churchill.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Allegedly, reportedly',
      about: 'Keep your distance from claims you cannot check, with adverbs, attribution phrases and passive reporting.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'Good journalists, academics and careful speakers do not present every claim as a fact. When the information comes from someone else, or has not been proved, they **distance** themselves from it and **attribute** it to a source. This protects the writer, and it also tells the reader how much weight to give the claim.\n\nAt B2 you met the passive reporting structures: *It is said that… / He is thought to have…*. At C1 you combine them with **distancing adverbs**, **attribution phrases** and **continuous and perfect infinitives**, and you choose between them for tone.\n\n**Allegedly** is the word of the courtroom: an accusation that has not been proved. **Reportedly** means *according to reports*. **Apparently** means *I have heard this, but I cannot confirm it*, and is common in conversation. **Supposedly** adds doubt: *it is supposed to be true, but I am not convinced*. **Ostensibly** means that something looks like the reason, but probably is not.' },
          { t: 'table', caption: 'Ways of keeping your distance', explain: ['head', 'col1'], head: ['Form', 'What it signals', 'Example'], rows: [
            ['allegedly / the alleged …', 'an accusation not yet proved', 'the alleged fraud'],
            ['reportedly', 'this is what the reports say', 'He has reportedly resigned.'],
            ['apparently', 'I heard it; I cannot confirm it', 'Apparently, they’ve split up.'],
            ['supposedly / so-called', 'I doubt it', 'the so-called experts'],
            ['according to …', 'the source of the claim', 'according to sources close to the club'],
            ['It has been claimed / suggested that …', 'a claim, with no named source', 'It has been suggested that the vote was rigged.'],
            ['is said / thought / alleged to be doing', 'continuous: happening now', 'He is thought to be hiding abroad.'],
            ['is said / thought / alleged to have done', 'perfect: happened earlier', 'She is alleged to have lied.'],
            ['it would appear / seem that …', 'a cautious conclusion', 'It would appear that nobody checked.'],
          ] },
        ],
        [
          { t: 'text', md: 'The passive infinitive changes with the **time** of the claim. *He **is said to be** in hiding* (now). *He **is said to be living** abroad* (now, and continuing). *He **is said to have left** the country* (before now). *The money **is believed to have been taken** in March* (before now, and passive).\n\n**According to** introduces somebody else’s view. Do not use it for your own opinion (*according to me* sounds odd: say *in my view*), and do not repeat the source with a second verb: *According to the report, it says…* says the same thing twice.\n\nNews writing often stacks two signals: *The company is **reportedly** considering job cuts, **according to** two people familiar with the plans.* In a formal essay, one signal is usually enough.' },
          { t: 'examples', items: [
            { s: 'The singer **is reported to be considering** a move to Paris.', n: 'Continuous infinitive: an action in progress now.' },
            { s: 'The files **are thought to have been destroyed** years ago.', n: 'Perfect passive infinitive: earlier, and passive.' },
            { s: 'Two officials **allegedly** accepted gifts from the contractor.', n: 'An accusation; nothing has been proved.' },
            { s: '**According to** sources close to the club, the manager will leave in May.', n: 'The source is named, but vaguely.' },
            { s: '**It has been claimed that** the photograph was altered.', n: 'An impersonal claim with no source.' },
            { s: 'The **so-called** miracle cure turned out to be sugar and water.', n: '*so-called* shows the writer does not accept the name.' },
            { s: 'The trip was **ostensibly** a holiday, but he spent every day in meetings.', n: 'It looked like a holiday; it really was not.' },
            { s: '**It would appear that** the article was published without being checked.', n: 'A careful, formal conclusion.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['According to me, the story is false.', 'In my view, the story is false.', '*according to* introduces someone else’s view.'],
            ['According to the report, it says that…', 'According to the report, … / The report says that…', 'One way of naming the source is enough.'],
            ['He is said to leave the country last week.', 'He is said to have left the country last week.', 'An earlier action needs the perfect infinitive.'],
            ['It is alleged him to have lied.', 'He is alleged to have lied. / It is alleged that he lied.', 'Two separate patterns: *It is alleged that…* or *He is alleged to…*.'],
            ['The allegedly thief was arrested.', 'The alleged thief was arrested.', 'Before a noun: the adjective *alleged*.'],
            ['Reportedly, it is reported that…', 'Reportedly, … / It is reported that…', 'Do not repeat the same signal.'],
          ] },
          { t: 'dialogue', title: 'Checking a rumour', lines: [
            { who: 'Grace', s: 'Have you seen this? Apparently the mayor is resigning tomorrow.' },
            { who: 'Owen', s: 'Says who? That account posts something like this every week.' },
            { who: 'Grace', s: 'It says “according to sources close to the council”.' },
            { who: 'Owen', s: 'Which could mean anyone. Has any proper news site reported it?' },
            { who: 'Grace', s: 'One has. The mayor is said to be considering her position, but it doesn’t say she has decided anything.' },
            { who: 'Owen', s: 'So “resigning tomorrow” is a long way from “considering her position”. I’d wait before sharing it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which word or phrase fits the writer’s meaning best?', items: [
            { q: 'Nothing has been proved yet, but the director ___ moved company money into a private account.', o: ['allegedly', 'apparently', 'evidently', 'obviously'], why: 'An accusation not yet proved: *allegedly*.' },
            { q: 'The visit was ___ about trade, but everyone knew it was really about the election.', o: ['ostensibly', 'reportedly', 'allegedly', 'accordingly'], why: 'It looked like the reason but was not: *ostensibly*.' },
            { q: 'The ___ experts on the programme turned out to have no qualifications at all.', o: ['so-called', 'alleged', 'reported', 'apparent'], why: 'The writer rejects the label: *so-called*.' },
            { q: 'The painting is believed ___ stolen during the war.', o: ['to have been', 'to be', 'being', 'to have'], why: 'An earlier, passive event: *to have been stolen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 2): read the news report and write one word in each gap.', items: [
            { q: '___ to sources close to the company, the deal was signed late last night.', a: ['According'], why: '*According to* + source.' },
            { q: 'The chief executive is said ___ have known about the losses for months.', a: ['to'], why: '*is said to have* + past participle.' },
            { q: '___ has also been claimed that some figures were changed before publication.', a: ['It'], why: 'Impersonal *It has been claimed that…*.' },
            { q: 'Two directors are reported to have ___ questioned by the police.', a: ['been'], why: 'Perfect passive infinitive: *to have been questioned*.' },
            { q: 'The report, ___ was leaked to journalists on Friday, has not been officially released.', a: ['which'], why: 'A non-defining relative clause about a thing.' },
            { q: 'It would ___ that nobody on the board checked the accounts.', a: ['appear', 'seem'], why: '*It would appear / seem that*: a cautious conclusion.' },
            { q: 'Neither the bank ___ the regulator has commented on the allegations.', a: ['nor'], why: '*Neither … nor*.' },
            { q: 'Shares fell sharply, ___ the company insists that its position is secure.', a: ['although', 'though', 'but', 'yet', 'while', 'whilst'], why: 'A contrast between the fall and the company’s claim.' },
          ] },
          { t: 'tip', art: 'owl', md: '**Part 2** has eight gaps and no options. The missing words are almost always **grammar words**: prepositions, auxiliaries, relatives, linkers and the small words inside fixed patterns like *according to* and *it would appear that*. Read the whole text first, then read each sentence to the end before you decide.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'The director allegedly moved the money abroad.' },
            { a: 'She is thought to have left the country.' },
            { a: 'It would appear that nobody checked the facts.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Spin and a balanced account',
      about: 'Recognise loaded language, describe bias precisely and talk about how news is made.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'Two reports can give the same facts and leave the reader with opposite impressions. The difference is often in single words. *Workers **walked out*** and *workers **went on strike*** describe the same event; *the council **slashed** the budget* sounds more dramatic than *the council **reduced** the budget*; *the minister **admitted*** suggests guilt where *the minister **said*** does not.\n\nWords that carry an attitude are **loaded**. A report that leans one way is **biased** (*biased towards* or *against* someone) or has a **slant**. Presenting facts in the most favourable light is **spin**: a company *puts a positive spin on* bad results. A **sensationalist** story exaggerates to shock; a **misleading headline** promises something the article does not support; **clickbait** exists only to make you click. The opposite is a **balanced account**, **impartial** or **objective** reporting, based on **reliable sources** and **verified** facts.' },
          { t: 'table', caption: 'Talking about news and bias', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['put a (positive) spin on something', 'present it in a favourable way'],
            ['sensationalist', 'exaggerated to shock or excite'],
            ['a misleading headline', 'a headline that gives a false impression'],
            ['a balanced account', 'a report that gives fair weight to each side'],
            ['impartial / objective', 'not taking sides'],
            ['biased towards / against', 'unfairly favouring or opposing'],
            ['cherry-pick the facts', 'choose only the facts that support you'],
            ['take something out of context', 'quote it so that it seems to mean something else'],
            ['unsubstantiated claims', 'claims with no evidence behind them'],
            ['break / run / cover a story', 'be first with it / publish it / report on it'],
          ] },
        ],
        [
          { t: 'reading', title: 'One event, two reports', md: '**Report A.** Chaos erupted outside the town hall yesterday as angry protesters stormed the building’s entrance. Council leaders, who have slashed spending on parks for the third year running, were forced to admit that the plans had been rushed through.\n\n**Report B.** Around two hundred residents gathered outside the town hall yesterday to protest against cuts to the parks budget. A small group entered the lobby before leaving peacefully. The council said the reductions were necessary and that the consultation had followed the usual timetable.' },
          { t: 'text', md: 'Report A uses **loaded verbs** (*erupted, stormed, slashed*), an emotional adjective (*angry*) and the reporting verb *admit*, which presents the council’s words as a confession. Report B gives a **number**, uses neutral verbs (*gathered, entered, said*) and reports the council’s view in its own terms. Neither report invents a fact, but only one is a balanced account.\n\nNotice also *sensational* and *sensationalist*. **Sensational** can be positive in everyday English (*a sensational goal*), while **sensationalist** is always a criticism of how something is reported.' },
          { t: 'ex', kind: 'spot', h: 'Tap the loaded words that make the report less neutral.', items: [
            { s: 'Chaos [erupted] outside the town hall as protesters [stormed] the entrance.', why: '*Erupted* and *stormed* suggest violence; *began* and *entered* would be neutral.' },
            { s: 'The council has [slashed] spending and was forced to [admit] the plans were rushed.', why: '*Slashed* exaggerates the cut; *admit* turns a statement into a confession.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['The paper is biased to the government.', 'The paper is biased towards / in favour of the government.', '*biased towards* or *against*.'],
            ['They made the story first.', 'They broke the story.', 'You *break* a story when you are first to report it.'],
            ['The headline was misleaded.', 'The headline was misleading.', 'The *-ing* adjective describes what misleads.'],
            ['The news are worrying.', 'The news is worrying.', '*News* is uncountable and singular.'],
            ['a sensational, unfair article', 'a sensationalist, unfair article', '*sensationalist* is the critical word.'],
            ['They gave a balance account.', 'They gave a balanced account.', 'The adjective is *balanced*.'],
          ] },
          { t: 'ex', kind: 'select', h: 'In the format of the C1 Advanced exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'The paper was the first to ___ the story about the missing funds.', o: ['break', 'make', 'open', 'start'], why: 'The collocation is *break a story*.' },
            { q: 'The government tried to put a positive ___ on the disappointing figures.', o: ['spin', 'turn', 'twist', 'side'], why: '*Put a positive spin on* something.' },
            { q: 'His words were taken out of ___ and made to sound far more extreme.', o: ['context', 'contents', 'contact', 'connection'], why: '*Take something out of context*.' },
            { q: 'Most of the claims in the video remain completely ___.', o: ['unsubstantiated', 'unfounding', 'unreported', 'unrelated'], why: '*Unsubstantiated claims* have no evidence behind them.' },
            { q: 'A good report should give a fair and ___ account of both sides.', o: ['balanced', 'equal', 'level', 'even'], why: 'The collocation is *a balanced account*.' },
            { q: 'Critics said the documentary had ___ the facts that suited its argument.', o: ['cherry-picked', 'hand-picked', 'picked out', 'picked up'], why: '*Cherry-pick* means choosing only the convenient facts.' },
          ] },
        ],
        [
          { t: 'text', md: 'In **Speaking Part 2** of C1 Advanced, the examiner gives you **three pictures** and **two questions**. You choose **two** of the pictures and talk about them for about **one minute**, comparing them and answering both questions. Then your partner answers a short follow-up question about your pictures.\n\nA strong answer does not describe the pictures; it **compares** them (*Whereas the first…, the second…*), **speculates** (*It looks as though…, I’d imagine…*), and answers the questions with reasons. Here the pictures show people getting the news in three ways: a woman reading a newspaper on a train, a teenager scrolling a phone, and a family watching the evening news on television. The questions: *Why might the people be getting their news in this way? How reliable might the information be?*' },
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Speaking Part 2): which answer would earn the higher mark?', items: [
            { q: 'Comparing the newspaper and the phone.', o: ['Whereas the woman on the train has chosen a paper she probably trusts, the teenager seems to be relying on whatever the app puts in front of him, which may well be less reliable.', 'In the first picture there is a woman with a newspaper. In the second picture there is a boy with a phone.', 'The woman is reading. The boy is using his phone. Both are getting news.'], why: 'The first answer compares, speculates and answers the question about reliability.' },
            { q: 'Speculating about the family.', o: ['I’d imagine watching the evening news is something of a ritual for them, and a public broadcaster is presumably held to stricter standards of balance than a social media feed.', 'The family is watching TV. They are on the sofa.', 'Maybe they like TV. Maybe the news is good. Maybe it is late.'], why: 'A range of language for speculation, with a reason linked to the second question.' },
            { q: 'Ending the long turn.', o: ['On balance, I’d say the phone is the quickest but the least reliable of the two, unless he checks where the stories come from.', 'That is all I can see in the pictures.', 'I don’t know which one is better.'], why: 'A short conclusion that answers both questions.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 2** you have only a minute, so do not spend it describing. Choose the two pictures that give you most to say, and use the vocabulary of the lesson: *a reliable source, a balanced account, sensationalist, clickbait, verified*.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor, as if you were in the exam.', tutor: 'sofia', items: [
            { a: 'Whereas the first picture shows a newspaper, the second shows a phone.' },
            { a: 'I’d imagine the information on the phone is far less reliable.' },
            { a: 'A public broadcaster has to give a balanced account.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A discussion on misinformation',
      about: 'Follow a long radio discussion and answer questions in the format of C1 Advanced Listening Part 3.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'In **Listening Part 3** of C1 Advanced you hear an **interview or discussion** of about four minutes, usually with two or three speakers, and answer **six multiple-choice questions** with **four options** each. You hear it twice.\n\nThe questions follow the order of the recording, and many of them ask about **opinions and attitudes**: what a speaker believes, what surprised them, why they mention an example. The wrong options usually contain words you will hear, but say something the speaker does not mean, or something the *other* speaker says.\n\nListen especially for the language of discussion. Speakers **qualify** what they say (*up to a point, that’s not quite what I meant*), **challenge** each other (*I’d question that, with respect*), and **concede** (*I take your point, fair enough*). The answer to a question often comes **after** a phrase like *but* or *what I’d say is*.' },
          { t: 'table', caption: 'Phrases to listen for', explain: ['head', 'col1'], head: ['Phrase', 'What the speaker is doing'], rows: [
            ['I take your point, but…', 'accepting part of an argument, then disagreeing'],
            ['That’s not quite what I meant.', 'correcting a misunderstanding'],
            ['I’d go further than that.', 'making a stronger claim'],
            ['Up to a point.', 'agreeing only partly'],
            ['To play devil’s advocate…', 'arguing a view they may not hold'],
            ['What really struck me was…', 'pointing to what surprised them'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Talking Point: why do false stories spread?', lines: [
            { who: 'Presenter', s: 'With me today are Priya, who runs a fact-checking service, and James, who teaches media studies. Priya, is misinformation really worse than it used to be, or do we just notice it more?' },
            { who: 'Priya', s: 'Rumours have always existed, of course. What has changed is the speed. A false story can now reach millions of people before anyone has had the chance to check it, and by the time a correction appears, most of them have moved on.' },
            { who: 'James', s: 'I take your point, but I’d question the idea that speed is the whole problem. People don’t share stories because they’re fast. They share them because the stories confirm something they already believe.' },
            { who: 'Presenter', s: 'So it’s about us rather than the technology?' },
            { who: 'James', s: 'Up to a point. The platforms reward whatever keeps us scrolling, and outrage does that very well. But nobody forces us to press share.' },
            { who: 'Priya', s: 'That’s true, and it’s what really struck me when we started. We assumed people shared false stories because they couldn’t tell they were false. In fact, many of them told us they had doubts and shared the story anyway, as a kind of joke or a question.' },
            { who: 'Presenter', s: 'Which brings us to fact-checking. Does it actually change anyone’s mind?' },
            { who: 'Priya', s: 'Not as often as we would like. A correction rarely travels as far as the original claim. But it gives journalists and teachers something solid to point to, and that matters more than any single click.' },
            { who: 'James', s: 'I’d go further than that. The real value of fact-checking is that it shows people how to check for themselves: who is the source, what is the evidence, has anyone else reported it.' },
            { who: 'Presenter', s: 'James, you’ve argued that schools should teach this. Isn’t that asking a lot of teachers?' },
            { who: 'James', s: 'It is, and I wouldn’t want it to become one more box to tick. What I’d say is that it doesn’t need to be a separate subject. A history teacher asking where a source comes from is already doing it.' },
            { who: 'Priya', s: 'And it isn’t only young people. In our experience, older readers are just as likely to be taken in, sometimes more so, because they trust anything that looks like a newspaper.' },
            { who: 'Presenter', s: 'To play devil’s advocate for a moment: if people want to believe something, can anyone really stop them?' },
            { who: 'James', s: 'Probably not. But we can make the false story a little harder to believe and the true one a little easier to find. That isn’t a defeat. That’s the job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the C1 Advanced exam (Listening Part 3): read the discussion again and choose the answer that fits best according to what you hear.', items: [
            { q: 'According to Priya, what is the main change in how misinformation spreads?', o: ['False stories reach a huge audience before they can be checked.', 'There are far more rumours than there used to be.', 'Corrections are now published more quickly.', 'People have become worse at recognising false stories.'], why: '*What has changed is the speed… before anyone has had the chance to check it.*' },
            { q: 'What does James suggest is the main reason people share false stories?', o: ['The stories support views they already hold.', 'The stories are the first ones they see.', 'The platforms force them to share.', 'They cannot tell that the stories are false.'], why: '*They share them because the stories confirm something they already believe.* *Nobody forces us* rules out the third option.' },
            { q: 'What surprised Priya when her service began its work?', o: ['Many people shared stories even though they doubted them.', 'Most people could easily tell a story was false.', 'People shared stories mainly to make others angry.', 'Few people were willing to talk to the fact-checkers.'], why: '*Many of them told us they had doubts and shared the story anyway.*' },
            { q: 'In Priya’s view, the main value of a correction is that it…', o: ['gives people a reliable reference to point to.', 'spreads further than the original claim.', 'changes the minds of most readers.', 'attracts a large number of clicks.'], why: '*It gives journalists and teachers something solid to point to.* She says it *rarely travels as far* as the claim.' },
            { q: 'What does James think about teaching these skills in schools?', o: ['They can be part of the subjects teachers already teach.', 'They should become a separate subject.', 'Teachers are not prepared to teach them.', 'They are less important than fact-checking.'], why: '*It doesn’t need to be a separate subject. A history teacher… is already doing it.*' },
            { q: 'How does James answer the presenter’s final question?', o: ['He accepts there is a limit but sees value in small improvements.', 'He says nothing can be done and the effort is wasted.', 'He argues that people can always be persuaded with facts.', 'He refuses to accept the presenter’s point of view.'], why: '*Probably not. But we can make the false story a little harder to believe… That isn’t a defeat.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'Many wrong options in **Part 3** use words from the recording. *Corrections*, *platforms* and *a separate subject* are all heard here, but in the wrong place or with the opposite meaning. Before you choose, ask **who** said it and whether they said it was true.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each phrase from the discussion with what the speaker is doing.', pairs: [
            ['I take your point, but…', 'accepting part of an argument before disagreeing'],
            ['Up to a point.', 'agreeing only partly'],
            ['I’d go further than that.', 'making a stronger claim than the other speaker'],
            ['To play devil’s advocate…', 'arguing a view for the sake of discussion'],
            ['What really struck me was…', 'introducing something surprising'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences you could use in a discussion.', items: [
            { a: 'I take your point, but I’d question the evidence.', why: 'Accept, then challenge.' },
            { a: 'That isn’t quite what I meant.', why: 'A polite correction.' },
            { a: 'What I’d say is that it depends on the source.', why: '*What I’d say is that…* introduces your real view.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now give your own view, as you would in **Speaking Part 4**: *Is it the responsibility of the platforms, the news media or each of us to stop false stories spreading?* Use a reporting verb with its pattern, a distancing phrase and one of the discussion phrases from this lesson.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I take your point, but speed isn’t the whole problem.' },
            { a: 'A correction rarely travels as far as the original claim.' },
            { a: 'Older readers are just as likely to be taken in.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the word that completes the pattern.', items: [
      { q: 'The editor urged her team ___ verify every quotation.', o: ['to', 'that', 'for'], why: '*urge someone to do*.' },
      { q: 'The minister dismissed the claims ___ absurd.', o: ['as', 'like', 'for'], why: '*dismiss something as*.' },
      { q: 'The failure was blamed ___ poor planning.', o: ['on', 'for', 'to'], why: '*blame a problem on* a cause.' },
      { q: 'She was credited ___ uncovering the scandal.', o: ['with', 'for', 'of'], why: '*credit someone with*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: '___ to the report, the two companies are about to merge.', a: ['According'], why: '*According to* + source.' },
      { q: 'The manager is thought to have ___ told about the problem in May.', a: ['been'], why: 'Perfect passive infinitive.' },
      { q: 'It would ___ that the photograph had been edited.', a: ['appear', 'seem'], why: 'A cautious conclusion.' },
      { q: 'The ___-called expert had never worked in the field.', a: ['so'], why: '*so-called*: the writer rejects the label.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it has a similar meaning, using the word given (three to six words).', items: [
      { q: '‘You stole the idea from me!’ the writer told her colleague.', cue: 'ACCUSED', a: ['The writer accused her colleague of stealing the idea from her.', 'The writer accused her colleague of having stolen the idea from her.'], why: '*accuse someone of* + -ing.' },
      { q: 'People say that the singer is living in Lisbon now.', cue: 'SAID', a: ['The singer is said to be living in Lisbon now.'], why: 'Continuous infinitive for an action now.' },
      { q: '‘I admit our coverage was not balanced,’ said the editor.', cue: 'CONCEDED', a: ['The editor conceded that their coverage had not been balanced.', 'The editor conceded that their coverage was not balanced.', 'The editor conceded their coverage had not been balanced.', 'The editor conceded their coverage was not balanced.'], why: '*concede (that)*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She suggested [me to] read the original article.', a: ['that I', 'I'], why: '*suggest (that) someone do*.' },
      { s: 'The [allegedly] thief was released yesterday.', a: ['alleged'], why: 'Before a noun: *alleged*.' },
      { s: 'The paper is clearly biased [to] the opposition.', a: ['towards', 'toward', 'against'], why: '*biased towards* or *against*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expressions with their meanings.', pairs: [
      ['put a spin on something', 'present it in a favourable light'],
      ['break a story', 'be the first to report it'],
      ['cherry-pick the facts', 'choose only the convenient ones'],
      ['unsubstantiated claims', 'claims with no evidence'],
      ['a balanced account', 'fair to each side'],
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Which sentence is the most neutral report?', o: ['Around a hundred residents gathered outside the council offices.', 'Angry crowds stormed the council offices.', 'Chaos erupted as mobs besieged the council offices.', 'Furious residents laid siege to the council offices.'], why: 'Neutral verbs and a number, with no loaded words.' },
      { q: 'In a discussion, what does “Up to a point” mean?', o: ['I partly agree.', 'I completely agree.', 'I want to change the subject.', 'I didn’t hear you.'], why: 'It signals partial agreement.' },
    ] },
  ],
};
