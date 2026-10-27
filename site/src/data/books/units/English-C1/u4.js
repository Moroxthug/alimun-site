// English C1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Work in transition',
  goal: 'Speculate about careers and the future of work, hedging where you need to.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'writing', 'reading'], topics: ['past-modals', 'modals-of-deduction', 'needn-t-have', 'hedging', 'distancing', 'work-collocations', 'careers', 'four-day-week'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'She might well have left',
      about: 'Speculate about the past and judge past actions with modal verbs + have + past participle.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At B2 you used *must have*, *might have* and *can’t have* to make deductions about the past. At C1, add **degrees of probability** and the right adverb. *Well*, *easily* and *quite possibly* make a possibility stronger: *She might well have left* means it is quite likely. *Conceivably* makes it weaker: it is possible, but you doubt it.' },
          { t: 'table', caption: 'How sure are you about the past?', explain: ['head', 'col0'], head: ['Certainty', 'Form', 'Example'], rows: [
            ['almost certain: yes', 'must have + participle', 'He **must have known** about the merger.'],
            ['likely', 'may well have / might well have', 'They **may well have** hired someone already.'],
            ['possible', 'may have / might have / could have', 'She **could have taken** a job abroad.'],
            ['possible, but not likely', 'could conceivably have', 'It **could conceivably have been** a mistake.'],
            ['probably not', 'may not have / might not have', 'He **might not have seen** the email.'],
            ['almost certain: no', 'can’t have / couldn’t have', 'They **can’t have closed** the office. It’s only noon.'],
          ] },
        ],
        [
          { t: 'text', md: 'Use the **continuous** form for an activity in progress at a past moment: *He must have been working late; the lights were on.* Use the **passive** when the subject received the action: *The decision must have been made months ago.*' },
          { t: 'text', md: 'Other past modals **judge** what happened rather than guess about it. They often express regret, criticism or relief.' },
          { t: 'examples', items: [
            { s: 'You **should have told** me you were leaving.', n: 'Criticism: it was the right thing to do, but you did not do it. *Ought to have* means the same.' },
            { s: 'I **could have been** a lawyer, but I chose teaching.', n: 'A possibility in the past that did not happen.' },
            { s: 'You **could have warned** us!', n: 'With stress on *could*, it is an angry criticism.' },
            { s: 'I **would have helped**, but nobody asked me.', n: 'I was willing, but it did not happen.' },
          ] },
        ],
        [
          { t: 'text', md: '**Needn’t have** and **didn’t need to** are not the same. *I needn’t have + participle* means I **did** something that was not necessary. *I didn’t need to + infinitive* usually means it was not necessary, so I did **not** do it (but the context can change this).' },
          { t: 'examples', items: [
            { s: 'I **needn’t have prepared** so many slides; the meeting was cancelled.', n: 'I prepared them, and it was a waste of time.' },
            { s: 'I **didn’t need to** prepare any slides; my colleague had done them.', n: 'It was not necessary, so I did not prepare them.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The negative of *must have* is **can’t have**, not *mustn’t have*. *He can’t have forgotten* means you are sure he did not forget. *Mustn’t* is only for rules and strong advice about now or the future.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best modal form.', items: [
            { q: 'The interview ___ well. She’s been smiling all afternoon.', o: ['must have gone', 'can’t have gone', 'should have gone'], why: 'The evidence (smiling) makes it almost certain: *must have*.' },
            { q: 'He ___ the job. He doesn’t even have the right qualifications.', o: ['can’t have got', 'mustn’t have got', 'needn’t have got'], why: 'The negative of *must have* is *can’t have*.' },
            { q: 'I ___ a taxi. The office was only five minutes away on foot.', o: ['needn’t have taken', 'mustn’t have taken', 'can’t have taken'], why: 'I took a taxi, but it was not necessary: *needn’t have*.' },
            { q: 'Don’t worry. She ___ seen your message yet; she’s been in meetings all day.', o: ['may not have', 'mustn’t have', 'needn’t have'], why: 'A possible explanation in the negative: *may not have*.' },
            { q: 'You ___ me about the deadline. Now I’ll have to work all weekend.', o: ['should have told', 'must have told', 'might well have told'], why: 'Criticism of a past action: *should have*.' },
            { q: 'Given the market at the time, they ___ sold the company for much more.', o: ['might well have', 'can’t have', 'needn’t have'], why: '*Might well have*: a strong possibility that did not happen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a modal + have + the verb in brackets.', items: [
            { q: 'The lights are off. They ___ (must / go) home already.', a: ['must have gone'], why: 'A confident deduction about the past: *must have* + participle.' },
            { q: 'He looked exhausted. He ___ (must / work) all night.', a: ['must have been working'], why: 'An activity in progress: *must have been* + *-ing*.' },
            { q: 'We ___ (need / not / book). The restaurant was empty.', a: ['needn’t have booked', 'need not have booked'], why: 'We booked, and it was unnecessary: *needn’t have* + participle.' },
            { q: 'The report ___ (can’t / write) by an expert. It’s full of errors.', a: ['can’t have been written', 'cannot have been written', 'couldn’t have been written'], why: 'Passive deduction: *can’t have been* + participle.' },
            { q: 'I ___ (would / help) you move, but I was away that weekend.', a: ['would have helped', '’d have helped'], why: 'Willingness in the past that did not happen: *would have*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with a modal + have, using the word given.', items: [
            { q: 'I’m sure she didn’t receive the invitation.', cue: 'can’t', a: ['She can’t have received the invitation.', 'She cannot have received the invitation.'], why: 'Certain negative deduction: *can’t have*.' },
            { q: 'It wasn’t necessary to bring food, but we brought some.', cue: 'needn’t', a: ['We needn’t have brought food.', 'We needn’t have brought any food.', 'We need not have brought food.'], why: 'An unnecessary past action that happened: *needn’t have*.' },
            { q: 'It’s quite likely that they have already chosen a candidate.', cue: 'well', a: ['They may well have already chosen a candidate.', 'They might well have already chosen a candidate.', 'They may well have chosen a candidate already.', 'They might well have chosen a candidate already.'], why: '*May well have* or *might well have*: likely.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'It would appear that…',
      about: 'Hedge your claims and distance yourself from information you are not sure of.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: '**Hedging** means making a claim less absolute, so that it is accurate and harder to attack. It is essential in academic and professional writing, and also in diplomatic conversation. At B2 you used *it seems that*, *tends to* and *arguably*. At C1, combine several devices and choose how strong your claim should be.' },
          { t: 'table', caption: 'Ways to hedge', explain: ['head', 'col0'], head: ['Device', 'Example'], rows: [
            ['would + seem / appear', '**It would appear that** demand is falling.'],
            ['likely / unlikely', 'Remote work **is likely to** become more common.'],
            ['tend to / be inclined to', 'Younger employees **tend to** change jobs more often.'],
            ['limiting phrases', '**To some extent** / **to a certain degree**, this is true.'],
            ['frequency and quantity', 'This is **often** / **in many cases** / **for the most part** the case.'],
            ['softening adverbs', 'The results are **somewhat** / **relatively** encouraging.'],
            ['careful nouns', 'There is **some evidence** / **a suggestion** that…'],
          ] },
        ],
        [
          { t: 'text', md: '**Distancing** shows that information comes from someone else and that you do not personally guarantee it. Use reporting verbs in the passive, *apparently*, or adverbs like *reportedly*, *supposedly* and *allegedly*. *Supposedly* and *allegedly* suggest more doubt than *reportedly*.' },
          { t: 'examples', items: [
            { s: '**It has been suggested that** the office could close by next year.', n: 'Passive reporting: the speaker does not say who suggested it, or whether it is true.' },
            { s: 'The company **is reported to be** planning a four-day week.', n: '*Be reported / said / thought + to*: information from others.' },
            { s: 'The new manager is, **supposedly**, an expert in change.', n: 'People say so, but the speaker has doubts.' },
            { s: '**Apparently**, the whole team is going to be retrained.', n: 'Informal: I have heard this from someone.' },
            { s: 'This **would seem to** confirm what we suspected.', n: '*Would seem* is more cautious than *seems*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not over-hedge. *It could perhaps possibly be argued that this may be true to some extent* says almost nothing. One or two hedges per claim are enough.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the claim more cautious, starting with the words given.', items: [
            { q: 'Flexible hours increase productivity.', cue: 'It would appear that', a: ['It would appear that flexible hours increase productivity.'], why: '*It would appear that* + clause: a cautious claim.' },
            { q: 'Automation will replace many office jobs.', cue: 'Automation is likely', a: ['Automation is likely to replace many office jobs.'], why: '*Be likely to* + infinitive: probable, not certain.' },
            { q: 'Older workers change careers less often.', cue: 'Older workers tend', a: ['Older workers tend to change careers less often.'], why: '*Tend to*: generally true, but not always.' },
            { q: 'People say the director is planning to resign.', cue: 'The director is said', a: ['The director is said to be planning to resign.'], why: '*Be said to be* + *-ing*: information from others about something in progress.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most suitable hedge.', items: [
            { q: 'In a report: ___, the new policy has been successful, although some problems remain.', o: ['For the most part', 'Absolutely', 'Without any doubt'], why: 'The sentence admits problems, so it needs a limiting phrase.' },
            { q: 'The figures are ___ better than last year, but there is still a long way to go.', o: ['somewhat', 'utterly', 'by far'], why: '*Somewhat* softens the comparison; the others make it stronger.' },
            { q: 'The CEO ___ knew about the problem for months, although she denies it.', o: ['allegedly', 'definitely', 'obviously'], why: 'The claim is not proved and she denies it: *allegedly*.' },
            { q: 'There is ___ evidence that shorter weeks reduce stress.', o: ['some', 'all', 'no doubt'], why: '*Some evidence* is a careful claim; it does not say the question is settled.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the sentence hedged or direct?', groups: ['hedged', 'direct'], explain: ['groups'], items: [
            { s: 'This may, to some extent, explain the drop in sales.', g: 0, why: '*May* and *to some extent* both soften the claim.' },
            { s: 'This explains the drop in sales.', g: 1, why: 'An absolute claim with no softening.' },
            { s: 'Remote workers are arguably more productive.', g: 0, why: '*Arguably*: the claim can be argued, but is not certain.' },
            { s: 'Remote workers are more productive.', g: 1, why: 'Stated as a fact.' },
            { s: 'It would seem that the plan has failed.', g: 0, why: '*It would seem*: cautious.' },
            { s: 'The plan has clearly failed.', g: 1, why: '*Clearly* makes the claim stronger, not weaker.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A steep learning curve',
      about: 'Talk about careers and change with natural collocations.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Talking about work naturally depends on **collocations**: words that are usually used together. Native speakers say *a steep learning curve*, not *a high learning curve*, and *climb the career ladder*, not *go up the career stairs*.' },
          { t: 'table', caption: 'Collocations of work and change', explain: ['head', 'col1'], quiz: true, head: ['Collocation', 'Meaning'], rows: [
            ['a steep learning curve', 'a lot to learn in a short time'],
            ['climb the (career) ladder', 'get promoted to higher positions'],
            ['a sideways move', 'a new job at the same level'],
            ['a dead-end job', 'a job with no chance of progress'],
            ['get a foot in the door', 'get a first opportunity in an organisation or industry'],
            ['hand in your notice', 'tell your employer you are leaving'],
            ['be made redundant', 'lose your job because it is no longer needed'],
            ['take a career break', 'stop working for a period, then return'],
            ['carve out a niche', 'create a special area where you are successful'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The first year was a **steep learning curve**, but I picked things up quickly.', n: '*Pick up* skills: learn them informally, by doing.' },
            { s: 'She decided to **step down** as director and **go freelance**.', n: '*Step down*: leave an important position. *Go freelance*: work for yourself for different clients.' },
            { s: 'He **burned out** after years of seventy-hour weeks.', n: '*Burn out*: become exhausted from too much work. The noun is *burnout*.' },
            { s: 'Many people now have a **portfolio career**, with two or three part-time roles.', n: 'Several jobs at once instead of one employer.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Notice the verbs. You *take on* responsibility, *gain* experience, *broaden* your skills, *reach* a turning point, and *make* a career change. Learning the verb with the noun is the key to sounding fluent.' },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete with the words from the box.', extra: ['ladder'], items: [
            { q: 'Moving to sales was a ___ move: same salary, same level, but new experience.', a: 'sideways', why: '*A sideways move*: a job at the same level.' },
            { q: 'I was stuck in a ___ job with no chance of promotion.', a: 'dead-end', why: '*A dead-end job*: no chance of progress.' },
            { q: 'An internship is a good way to get a foot in the ___.', a: 'door', why: '*Get a foot in the door*: get a first opportunity.' },
            { q: 'After ten years, she finally handed in her ___ and started her own business.', a: 'notice', why: '*Hand in your notice*: tell your employer you are leaving.' },
            { q: 'He has carved out a ___ as a translator of legal documents.', a: 'niche', why: '*Carve out a niche*: create a special area of success.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'take on', o: ['responsibility', 'staff', 'a challenge', 'a notice'], a: [0, 1, 2], why: 'You *take on* responsibility, staff (hire them) or a challenge. You *hand in* a notice.' },
            { key: 'gain', o: ['experience', 'qualifications', 'a promotion', 'a break'], a: [0, 1], why: 'You *gain* experience and qualifications. You *get* a promotion and *take* a break.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'crossword', h: 'Complete the crossword.', words: [
            { a: 'redundant', clue: 'If your job is no longer needed, you are made this.' },
            { a: 'freelance', clue: 'Working for different clients, not for one employer.' },
            { a: 'burnout', clue: 'Exhaustion caused by too much work over a long period.' },
            { a: 'ladder', clue: 'You climb the career one of these.' },
            { a: 'curve', clue: 'A steep learning one means a lot to learn quickly.' },
            { a: 'retrain', clue: 'Learn the skills for a completely new job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['After the factory closed, he was made', 'redundant.'],
            ['She stepped down as head of the department to', 'spend more time with her family.'],
            ['Taking a career break gave me the chance to', 'broaden my skills.'],
            ['Leaving the company was a real', 'turning point in my life.'],
            ['Most of us pick up new skills', 'simply by doing the job.'],
          ] },
          { t: 'ex', kind: 'search', h: 'Find the words from this lesson.', words: ['niche', 'notice', 'ladder', 'sideways', 'freelance', 'burnout'] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Four days, same pay',
      about: 'Read an article about the four-day week and look at how the writer hedges and speculates.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Four days, same pay', md: 'When the directors of Hartwell & Rowe, a small design agency, announced that the office would close every Friday, half the staff assumed it must have been a joke. The other half assumed the company was in trouble. Both groups were wrong. Starting in January, the agency’s twenty-three employees would work four days a week for the same salary, with one condition: the work still had to get done.\n\nThe idea is not new. For decades, economists have predicted that technology would gradually shorten the working week, and in recent years a number of companies in several countries have run trials. The results, as far as one can tell, have been broadly positive, although it would be unwise to read too much into them. Companies that volunteer for such trials are, almost by definition, the ones most likely to succeed.\n\nAt Hartwell & Rowe, the first month was, in the words of one designer, “a steep learning curve”. Meetings were cut from an hour to twenty minutes. A rule was introduced that internal emails should be answered within the day or not at all. “We realised we must have been wasting a huge amount of time,” says Marta, the office manager. “Not on purpose. It was just the way we had always done things.”\n\nNot everyone was convinced. Gareth, one of the senior designers, admits that he spent the first few Fridays checking his inbox. “I kept thinking a client might well have called and been told nobody was there. As it turned out, I needn’t have worried. Most clients didn’t even notice.” A few did, and the agency now has a rota so that someone is always available.\n\nWhether the model can work everywhere is another question. It is one thing for a design agency to compress its week; it is quite another for a hospital, a school or a supermarket, where the work cannot simply be done faster. Critics argue that a four-day week could, to some extent, widen the gap between office workers and everyone else. Supporters reply that those sectors need different solutions, such as shorter shifts, not no solution at all.\n\nThere are also hidden costs. Some employees report that their four days have become more intense, and that the pressure to finish everything by Thursday evening can be exhausting. A shorter week, it would appear, is not automatically a better one. It depends on what is removed: the unnecessary meetings, or simply the breathing space.\n\nSix months in, the directors say they have no plans to go back. Staff turnover, they say, has dropped, and two designers who had been thinking of handing in their notice have stayed. Whether this is because of the extra day or because of a wider change in how the agency works is hard to say. Perhaps, in the end, the most important result is not the day off, but the discovery of how much of a normal week could have been spent differently all along.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'When the plan was announced, all the staff believed it immediately.', a: 'f', why: 'Half assumed it was a joke and half assumed the company was in trouble.' },
            { q: 'The writer thinks the results of trials should be treated with some caution.', a: 't', why: '“It would be unwise to read too much into them.”' },
            { q: 'Meetings at the agency became shorter.', a: 't', why: 'They were cut from an hour to twenty minutes.' },
            { q: 'Gareth eventually left the agency.', a: 'ng', why: 'The text says he worried at first, not whether he stayed or left.' },
            { q: 'According to the article, a shorter week is always less stressful.', a: 'f', why: 'Some employees say their four days have become more intense.' },
            { q: 'The directors are sure the extra day is the only reason staff have stayed.', a: 'f', why: 'Whether it is the extra day or a wider change “is hard to say”.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the article.', items: [
            { q: '“We realised we must have been wasting a huge amount of time.” What does Marta mean?', o: ['She is now sure they were wasting time before.', 'She thinks they may waste time in the future.', 'She is criticising a colleague.'], why: '*Must have been* + *-ing*: a confident deduction about an activity in the past.' },
            { q: '“I needn’t have worried.” What does Gareth mean?', o: ['He worried, but it was not necessary.', 'He did not worry, because it was not necessary.', 'He should have worried more.'], why: '*Needn’t have* + participle: an unnecessary action that happened.' },
            { q: 'Why does the writer say “a four-day week could, to some extent, widen the gap”?', o: ['To report the critics’ claim in a cautious way.', 'To show that the writer is certain of the risk.', 'To say the gap already exists.'], why: '*Could* and *to some extent* are hedges that soften the claim.' },
            { q: '“It is one thing for a design agency to compress its week; it is quite another for a hospital.” What does this structure do?', o: ['It contrasts two situations that are very different.', 'It lists two similar examples.', 'It gives the writer’s final conclusion.'], why: '*It is one thing… it is quite another…* stresses a strong contrast.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the hedging phrases.', items: [
            { s: 'The results, [as far as one can tell], have been [broadly] positive.', why: 'Both phrases limit how strongly the writer makes the claim.' },
            { s: 'A shorter week, [it would appear], is not automatically a better one.', why: '*It would appear*: a cautious way to state a conclusion.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words from the article with their meanings.', pairs: [
            ['compress', 'fit into less time or space'],
            ['a rota', 'a list showing who works when'],
            ['staff turnover', 'how often employees leave and are replaced'],
            ['breathing space', 'time to rest and think'],
            ['read too much into', 'believe something means more than it does'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'She ___ the email. She replied within minutes.', o: ['must have read', 'can’t have read', 'needn’t have read'], why: 'The quick reply makes it almost certain: *must have*.' },
      { q: 'We ___ so early; the train was delayed by an hour.', o: ['needn’t have left', 'mustn’t have left', 'can’t have left'], why: 'We left early, but it was not necessary: *needn’t have*.' },
      { q: 'He ___ the project on his own. It’s far too big for one person.', o: ['can’t have finished', 'mustn’t have finished', 'should have finished'], why: 'A certain negative deduction: *can’t have*.' },
      { q: 'In formal writing: ___ that the scheme has had little effect.', o: ['It would appear', 'Obviously it is', 'Everybody knows'], why: 'A cautious, formal hedge.' },
      { q: 'Moving to the London office was a ___ move rather than a promotion.', o: ['sideways', 'sideward', 'side'], why: 'The collocation is *a sideways move*.' },
      { q: 'The minister is ___ to have known about the problem for months.', o: ['said', 'saying', 'told'], why: 'Distancing with the passive: *is said to have* + participle.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'You ___ (should / ask) me before you used my laptop.', a: ['should have asked'], why: 'Criticism of a past action: *should have* + participle.' },
      { q: 'They ___ (may / well / already / leave). Let’s call to check.', a: ['may well have already left', 'may well already have left'], why: '*May well have* + participle: likely.' },
      { q: 'He left the company after he was made ___.', a: ['redundant'], why: '*Be made redundant*: lose your job because it is no longer needed.' },
      { q: 'Younger staff ___ to change jobs more often than older staff.', a: ['tend'], why: '*Tend to*: a hedge for a general pattern.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the collocations with their meanings.', pairs: [
      ['a steep learning curve', 'a lot to learn quickly'],
      ['climb the ladder', 'get promoted'],
      ['hand in your notice', 'tell your employer you are leaving'],
      ['get a foot in the door', 'get a first chance'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, using the word given.', items: [
      { q: 'I’m sure he was joking.', cue: 'must', a: ['He must have been joking.'], why: 'A confident deduction about an activity: *must have been* + *-ing*.' },
      { q: 'People believe the company is losing money.', cue: 'The company is believed', a: ['The company is believed to be losing money.'], why: 'Distancing: *is believed to be* + *-ing*.' },
    ] },
  ],
};
