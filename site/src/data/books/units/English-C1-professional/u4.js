// English C1 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Writing for executives',
  goal: 'Write short, clear documents that busy decision-makers can act on.',
  art: 'mug',
  tags: { skills: ['writing', 'grammar', 'vocabulary', 'reading'], topics: ['executive-summary', 'concise-writing', 'recommendations', 'inverted-conditionals', 'nominalisation', 'briefing-note'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'The bottom line first',
      about: 'Structure an executive summary with the conclusion first, and cut every word that does no work.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Senior readers have little time and many documents. They read the first paragraph, perhaps the second, and then decide. So an **executive summary** does not tell the story in order. It puts **the bottom line first**: what you recommend and what you need from the reader. The background and the detail come after, for those who want them.' },
          { t: 'table', caption: 'The shape of an executive summary', explain: ['head', 'col0'], head: ['Part', 'Example'], rows: [
            ['Recommendation', 'We recommend moving customer support to a single site by June.'],
            ['Why it matters', 'This would cut response times by around a third and save costs.'],
            ['The decision needed', 'We are asking the board to approve the budget at Thursday’s meeting.'],
            ['Risks', 'The main risk is losing experienced staff during the move.'],
            ['Background', 'Support is currently split between two sites with different systems.'],
          ] },
        ],
        [
          { t: 'text', md: 'Concise writing is not about short words; it is about removing words that add nothing. Many phrases in business English have a shorter equivalent that says exactly the same. Strong verbs also help: *we decided* is clearer than *a decision was taken by us*.' },
          { t: 'table', caption: 'Wordy and concise', explain: ['head'], quiz: true, head: ['Wordy', 'Concise'], rows: [
            ['in order to', 'to'],
            ['due to the fact that', 'because'],
            ['at this moment in time', 'now'],
            ['in the event that', 'if'],
            ['carry out an analysis of', 'analyse'],
            ['a large number of', 'many'],
            ['with regard to', 'on / about'],
          ] },
          { t: 'tip', art: 'owl', md: 'Test each sentence: if you can remove a word and the meaning does not change, remove it. *Completely finished*, *future plans* and *past experience* each contain one word too many.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each wordy phrase to its concise version.', pairs: [
            ['due to the fact that', 'because'],
            ['in the event that', 'if'],
            ['at this moment in time', 'now'],
            ['make a decision', 'decide'],
            ['a large number of', 'many'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one unnecessary or wordy part. Tap it and write a shorter version.', items: [
            { s: 'We need more staff [in order to] meet the deadline.', a: ['to'], why: '*In order to* usually means simply *to*.' },
            { s: 'The project is now [completely finished].', a: ['finished', 'complete'], why: '*Finished* already means complete, so *completely* adds nothing.' },
            { s: 'We will [carry out a review of] the contract next month.', a: ['review'], why: 'A strong verb is shorter and clearer: *review the contract*.' },
            { s: 'Sales fell [due to the fact that] prices rose.', a: ['because'], why: '*Because* says the same in one word.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences from an executive summary.', items: [
            { a: 'We recommend closing the smaller warehouse.', why: 'An executive summary opens with the recommendation.' },
            { a: 'We are asking you to approve this today.', why: 'State clearly what you need from the reader.' },
            { a: 'The main risk is a short delay in deliveries.', why: 'Be upfront about the risks.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best first sentence for an executive summary.', items: [
            { q: 'You are writing to the leadership team about a new supplier.', o: ['We recommend switching to a new packaging supplier from April, which would save around twelve per cent.', 'Over the last six months, the procurement team has been looking at a number of suppliers.', 'Packaging is an important part of our business and has a long history.'], why: 'The bottom line first: the recommendation and the benefit.' },
            { q: 'You need the finance director to approve a budget.', o: ['I am writing to ask you to approve an extra budget for the security audit by Friday.', 'As you may know, there have been several changes in the IT team recently.', 'Security is something we all care about very much.'], why: 'Say what you need, and by when, in the first sentence.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Should the board approve…',
      about: 'Write precise recommendations with recommend that, inverted conditionals and formal nouns.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Formal recommendations follow a few fixed patterns. After *recommend*, *propose*, *suggest* and *advise*, you can use **that + base form** (the subjunctive) or **that + should**: *We recommend that the board **approve** the budget.* With *recommend* and *suggest* you can also use **-ing**, but never *to* + verb after the verb itself.' },
          { t: 'examples', items: [
            { s: 'We recommend that the contract **be renewed** for two years.', n: 'Subjunctive: the base form *be*, even after a singular subject.' },
            { s: 'We propose that each team **should appoint** a contact person.', n: '*That + should* is more common in British English.' },
            { s: 'We recommend **delaying** the launch until the tests are complete.', n: '*Recommend* + *-ing*. Not: *recommend to delay*.' },
            { s: 'We would advise the committee **to wait** for the final figures.', n: '*Advise* + person + *to*: possible because there is an object.' },
          ] },
        ],
        [
          { t: 'text', md: 'Formal documents often replace *if* with an **inverted conditional**. It sounds measured and is useful for scenarios and risks. *Should* + subject for a possible future, *were* + subject + *to* for a less likely one, *had* + subject + past participle for the past.' },
          { t: 'table', caption: 'Inverted conditionals', explain: ['head', 'col0'], head: ['Meaning', 'With if', 'Inverted'], rows: [
            ['A possible future', 'If the board approves the plan, work will start in May.', 'Should the board approve the plan, work will start in May.'],
            ['An unlikely or imagined case', 'If we delayed the launch, we would lose the season.', 'Were we to delay the launch, we would lose the season.'],
            ['A past that did not happen', 'If we had acted sooner, costs would have been lower.', 'Had we acted sooner, costs would have been lower.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Negative inverted conditionals do not contract: *Had we not acted*, *Should the plan not be approved*. Never write *Hadn’t we acted*.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with an inverted conditional, starting with the word given.', items: [
            { q: 'If the client accepts the offer, we will need extra staff.', cue: 'Should', a: ['Should the client accept the offer, we will need extra staff.'], why: '*Should* + subject + base form: a possible future.' },
            { q: 'If we lost this contract, we would have to cut costs.', cue: 'Were', a: ['Were we to lose this contract, we would have to cut costs.'], why: '*Were* + subject + *to* + base form: an imagined case.' },
            { q: 'If we had known about the problem, we would have acted.', cue: 'Had', a: ['Had we known about the problem, we would have acted.'], why: '*Had* + subject + past participle: the past.' },
            { q: 'If you need any further information, please contact me.', cue: 'Should', a: ['Should you need any further information, please contact me.'], why: 'A very common formal closing: *Should you need…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the correct form.', items: [
            { q: 'We recommend that the policy ___ reviewed every year.', o: ['be', 'is being', 'to be'], why: 'Subjunctive after *recommend that*: the base form *be*.' },
            { q: 'We suggest ___ the two teams before the summer.', o: ['merging', 'to merge', 'merge'], why: '*Suggest* + *-ing*.' },
            { q: 'Had the figures ___ checked, the error would have been found.', o: ['been', 'be', 'being'], why: 'Inverted third conditional: *had* + subject + *been* + past participle.' },
            { q: 'Were the price ___ rise again, demand would fall.', o: ['to', 'for', 'and'], why: '*Were* + subject + *to* + base form.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Complete each sentence with a noun formed from the word in capitals.', items: [
            { q: 'Our main ___ is to close the smaller site.', base: 'recommend', a: ['recommendation'], why: 'The noun of *recommend* is *recommendation*.' },
            { q: 'The ___ of the new system will take six months.', base: 'implement', a: ['implementation'], why: '*Implement* becomes *implementation*.' },
            { q: 'There has been a sharp ___ in customer complaints.', base: 'reduce', a: ['reduction'], why: '*A reduction in* something: the noun of *reduce*.' },
            { q: 'The board’s ___ is needed before we can sign.', base: 'approve', a: ['approval'], why: '*Approve* becomes *approval*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A briefing note',
      about: 'Read a short briefing note written for a leadership team.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Briefing note: customer support model', md: '**To:** Leadership team\n**From:** Helen Ward, Head of Customer Operations\n**Decision needed by:** 14 March\n\n**Recommendation**\n\nWe recommend that customer support be brought together at the northern site by the end of June, and that the leadership team approve a one-off budget for staff relocation and training.\n\n**Why this matters**\n\nSupport is currently split between two sites that use different systems and different procedures. Customers who contact us twice can receive two different answers, and complaints about inconsistency have risen steadily over the past year. A single site with one system would allow us to answer most queries at the first contact and to cover longer opening hours with the same number of staff.\n\n**Costs and savings**\n\nThe one-off cost covers relocation support, training and the closure of the southern office. Lower rent and the end of a second software licence would recover this cost within two years.\n\n**Risks**\n\nThe main risk is the loss of experienced staff who choose not to relocate. To reduce it, we propose offering remote working to anyone who would prefer not to move, and bringing the most experienced colleagues into the planning from the start. Should the move be delayed beyond June, it would overlap with our busiest season, and we would advise postponing it to the autumn rather than proceeding.\n\n**Alternatives considered**\n\nKeeping both sites and introducing a shared system was also examined. It would solve the problem of inconsistent answers, but not the higher running costs, and it would take longer to complete.\n\n**Next steps**\n\nWere the team to approve the recommendation on 14 March, staff would be informed the following week and the move would begin in May.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The note opens with the background to the problem.', a: 'f', why: 'It opens with the recommendation: the bottom line first.' },
            { q: 'The two sites currently use the same system.', a: 'f', why: 'They “use different systems and different procedures”.' },
            { q: 'The savings would cover the one-off cost within two years.', a: 't', why: '“…would recover this cost within two years.”' },
            { q: 'Most staff at the southern site have already agreed to move.', a: 'ng', why: 'The note does not say how many staff will move.' },
            { q: 'If the move is late, Helen suggests doing it during the busy season anyway.', a: 'f', why: 'She would advise postponing it to the autumn.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the note.', items: [
            { q: 'Why does the note say “that customer support be brought together” and not “is brought together”?', o: ['After recommend that, formal English uses the base form.', 'It is a mistake.', 'It refers to the past.'], why: 'The subjunctive: *recommend that* + base form.' },
            { q: '“Should the move be delayed beyond June…” What does this mean?', o: ['If the move is delayed beyond June…', 'The move must be delayed beyond June.', 'The move was delayed beyond June.'], why: 'An inverted conditional: *should* + subject = *if*.' },
            { q: 'Why does the note include “Alternatives considered”?', o: ['To show the readers that other options were examined and why they were rejected.', 'To give the readers a second recommendation.', 'To repeat the background.'], why: 'Decision-makers want to know that the recommendation was compared with other options.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two inverted conditionals.', items: [
            { s: '[Should the move be delayed], we would advise postponing it, and [were the team to approve] it, staff would be informed.', why: '*Should* + subject and *were* + subject + *to* replace *if*.' },
          ] },
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword with words from the unit.', words: [
            { a: 'summary', clue: 'A short version of a long document.' },
            { a: 'concise', clue: 'Using no more words than necessary.' },
            { a: 'approval', clue: 'Official permission or agreement.' },
            { a: 'risk', clue: 'The possibility that something bad will happen.' },
            { a: 'briefing', clue: 'A note or meeting that gives the key facts quickly.' },
            { a: 'rationale', clue: 'The reasons behind a decision.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'An executive summary should start with:', o: ['the recommendation', 'the history of the project', 'a list of the people involved'], why: 'The bottom line first.' },
      { q: 'We recommend that the contract ___ renewed.', o: ['be', 'is', 'to be'], why: 'Subjunctive after *recommend that*.' },
      { q: 'We suggest ___ the meeting to May.', o: ['moving', 'to move', 'move'], why: '*Suggest* + *-ing*.' },
      { q: '___ we not acted quickly, the losses would have been far higher.', o: ['Had', 'Hadn’t', 'Should'], why: 'Inverted negative conditionals do not contract: *Had we not acted*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write a shorter word or phrase with the same meaning.', items: [
      { q: 'due to the fact that = ___', a: ['because', 'as', 'since'], why: '*Because* says the same in one word.' },
      { q: 'in the event that = ___', a: ['if'], why: '*In the event that* means *if*.' },
      { q: 'at this moment in time = ___', a: ['now'], why: 'Simply *now*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite with an inverted conditional, starting with the word given.', items: [
      { q: 'If you have any questions, please let me know.', cue: 'Should', a: ['Should you have any questions, please let me know.'], why: '*Should* + subject + base form.' },
      { q: 'If we cut the budget, the project would fail.', cue: 'Were', a: ['Were we to cut the budget, the project would fail.'], why: '*Were* + subject + *to* + base form.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write a noun formed from the word in capitals.', items: [
      { q: 'The ___ of the plan will begin in May.', base: 'implement', a: ['implementation'], why: '*Implement* becomes *implementation*.' },
      { q: 'We are waiting for the director’s ___.', base: 'approve', a: ['approval'], why: '*Approve* becomes *approval*.' },
      { q: 'There was a significant ___ in costs.', base: 'reduce', a: ['reduction'], why: '*A reduction in*: the noun of *reduce*.' },
    ] },
  ],
};
