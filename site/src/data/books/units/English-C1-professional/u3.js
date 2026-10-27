// English C1 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Diplomacy and influence',
  goal: 'Influence people tactfully, even without authority over them.',
  art: 'cat',
  tags: { skills: ['speaking', 'grammar', 'vocabulary', 'reading'], topics: ['diplomatic-language', 'influence', 'tentative-forms', 'understatement', 'emphatic-do', 'persuasion'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Tact and distance',
      about: 'Make requests, criticism and bad news sound tactful with tentative forms and understatement.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Diplomatic English often works by creating a little **distance**. The past tense and the continuous form can make a request feel less direct, even when you mean the present: *I was wondering whether…*, *We were hoping to…*. Modal verbs and phrases like *it might be worth* turn an instruction into a suggestion.' },
          { t: 'table', caption: 'Adding distance', explain: ['head'], quiz: true, head: ['Direct', 'Tactful'], rows: [
            ['Can you send it today?', 'I was wondering whether you might be able to send it today.'],
            ['We want to start in May.', 'We were hoping to start in May.'],
            ['You should check the figures.', 'It might be worth double-checking the figures.'],
            ['Delay the launch.', 'Wouldn’t it make sense to delay the launch?'],
            ['This is wrong.', 'There appears to be a problem with this.'],
            ['You made a mistake.', 'It seems that a mistake was made at some point.'],
          ] },
        ],
        [
          { t: 'text', md: '**Understatement** says less than you mean, and English speakers at work use it constantly. *Not ideal* often means *bad*; *slightly concerned* can mean *very worried*. The **passive** also helps: it lets you talk about a problem without pointing at a person. Learn to use these forms, and also to hear them: the real message is often stronger than the words.' },
          { t: 'examples', items: [
            { s: 'The timing is **not ideal** for us.', n: 'Understatement: the timing is a real problem.' },
            { s: 'I’m **not entirely convinced** this is the right approach.', n: 'Polite but clear disagreement.' },
            { s: 'The report **wasn’t checked** before it went to the client.', n: 'The passive names the problem, not the person.' },
            { s: '**It would appear that** the budget has been exceeded.', n: '*It would appear that* distances the speaker from bad news.' },
            { s: '**Wouldn’t it be better** to wait for the final figures?', n: 'A negative question offers an opinion as a suggestion.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Too much distance can sound evasive or even sarcastic. Use one softener per sentence: *I was wondering if you could…* is enough. *I was just wondering whether you might possibly perhaps…* is not.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make each sentence more tactful, starting with the words given.', items: [
            { q: 'Can you finish the report by Friday?', cue: 'I was wondering', a: ['I was wondering whether you could finish the report by Friday.', 'I was wondering if you could finish the report by Friday.', 'I was wondering whether you might be able to finish the report by Friday.', 'I was wondering if you might be able to finish the report by Friday.'], why: '*I was wondering whether / if* + *could*: the past continuous adds distance.' },
            { q: 'We want to discuss the contract.', cue: 'We were hoping', a: ['We were hoping to discuss the contract.'], why: '*We were hoping to* sounds softer than *we want to*.' },
            { q: 'You should ask the legal team.', cue: 'It might be worth', a: ['It might be worth asking the legal team.'], why: '*It might be worth* + *-ing* turns advice into a suggestion.' },
            { q: 'You forgot to invite the client.', cue: 'The client', a: ['The client wasn’t invited.', 'The client was not invited.', 'The client wasn’t invited to the meeting.', 'The client was not invited to the meeting.'], why: 'The passive describes the problem without blaming the person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does the speaker probably mean? Match.', pairs: [
            ['The timing is not ideal.', 'The timing is a real problem.'],
            ['I’m slightly concerned about the budget.', 'I am worried about the budget.'],
            ['That’s an interesting idea.', 'I am not sure I like it.'],
            ['With respect, I’m not sure that’s right.', 'I think you are wrong.'],
            ['Could we perhaps revisit this later?', 'I do not want to decide this now.'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that make each sentence more tactful.', items: [
            { s: 'We [were hoping] to have the figures this week.', why: 'The past continuous makes the wish less direct.' },
            { s: 'There [appears to be] a gap in the plan.', why: '*Appears to be* is less certain than *is*.' },
            { s: 'I’m [not entirely] happy with the design.', why: '*Not entirely* softens the criticism.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Persuading without pressure',
      about: 'Influence colleagues through shared goals, emphasis and hypothetical offers.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you have no authority over people, you cannot tell them what to do. You can only **influence** them. Three moves help. **Start from a shared goal**, so the request serves both sides. **Acknowledge** their position, using emphatic *do* to show that you mean it: *I do understand the pressure you’re under.* Then **explore options** with hypothetical questions, which let people consider an idea without committing to it.' },
          { t: 'table', caption: 'Moves that influence', explain: ['head', 'col0'], head: ['Move', 'Example'], rows: [
            ['Appeal to a shared goal', 'We both want the launch to go smoothly, so…'],
            ['Acknowledge sincerely', 'I do see why your team is reluctant.'],
            ['Explore an option', 'How would you feel about sharing the workload for a month?'],
            ['Suppose a scenario', 'Supposing we covered the extra hours, would that change things?'],
            ['Ask what it would take', 'What would it take for your team to support this?'],
            ['Offer something back', 'In return, we’d be happy to help with your end-of-year report.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Asking another department for help', lines: [
            { who: 'Sofia', s: 'Thanks for making time, Daniel. I know your team is stretched at the moment.' },
            { who: 'Daniel', s: 'It is. If this is about lending you two developers, I’m afraid the answer is probably no.' },
            { who: 'Sofia', s: 'I do understand that. And I’m not asking you to put your own deadlines at risk.' },
            { who: 'Daniel', s: 'Then what are you asking?' },
            { who: 'Sofia', s: 'We both want the new system live before the audit, because your team will rely on it as much as mine. How would you feel about one developer, two days a week, for a month?' },
            { who: 'Daniel', s: 'That’s more manageable. But it would still slow us down.' },
            { who: 'Sofia', s: 'Supposing my team took over your weekly reports for that month, would that make up for it?' },
            { who: 'Daniel', s: 'It might. What would happen after the month?' },
            { who: 'Sofia', s: 'Everything goes back to normal. I’ll put it in writing so there are no surprises.' },
            { who: 'Daniel', s: 'All right. Let me talk to the team, but I think we can make that work.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Daniel is keen to help from the start.', a: 'f', why: 'He says *the answer is probably no*.' },
            { q: 'Sofia uses emphatic do to show she understands his position.', a: 't', why: '*I do understand that.*' },
            { q: 'Sofia points to a goal that matters to both teams.', a: 't', why: 'Daniel’s team will rely on the new system too.' },
            { q: 'Sofia offers nothing in return.', a: 'f', why: 'She offers to take over his weekly reports.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
            { q: 'I ___ see why your team is reluctant. (emphatic)', a: ['do'], why: 'Emphatic *do* before the main verb shows that you sincerely mean it.' },
            { q: '___ we covered the extra costs, would that change your view?', a: ['Supposing', 'Suppose'], why: '*Supposing* or *suppose* + past simple introduces a hypothetical idea.' },
            { q: 'What would it ___ for you to agree to this?', a: ['take'], why: '*What would it take for you to…?* asks what the other side needs.' },
            { q: 'How would you ___ about sharing the cost?', a: ['feel'], why: '*How would you feel about* + *-ing* proposes an option gently.' },
            { q: 'She ___ warn us about the risks, but we didn’t listen. (emphatic, past)', a: ['did'], why: 'In the past, emphatic *do* becomes *did* + base form: *she did warn us*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most influential thing to say.', items: [
            { q: 'A colleague in another team refuses to share data with you.', o: ['We both want the client to renew. What would it take for you to share the data?', 'You have to share the data. It’s company policy.', 'If you don’t share the data, I’ll speak to your manager.'], why: 'A shared goal and an open question influence without pressure.' },
            { q: 'A partner is worried about the cost of a joint project.', o: ['I do understand your concern. Supposing we split the cost equally, would that work?', 'The cost is not a problem.', 'Everyone else has already agreed to the cost.'], why: 'Acknowledge sincerely, then explore an option.' },
            { q: 'Your manager is reluctant to approve training.', o: ['How would you feel about a short trial with two people first?', 'You never approve anything.', 'I’ll go anyway, even if you don’t approve.'], why: 'A hypothetical question makes it easy to say yes to a small step.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
            { key: 'build', o: ['trust', 'support', 'a relationship', 'a concession', 'a favour'], a: [0, 1, 2], why: 'We *build trust*, *build support* and *build a relationship*. We *make* a concession and *do* a favour.' },
            { key: 'win', o: ['someone over', 'support', 'an argument', 'a compromise', 'a goal'], a: [0, 1, 2], why: '*Win someone over*, *win support*, *win an argument*. We *reach* a compromise and *achieve* a goal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Influence without authority',
      about: 'Read an article about influencing people who do not report to you.',
      art: 'monster',
      spreads: [
        [
          { t: 'reading', title: 'Leading from the side', md: 'In most organisations, the work that matters crosses team boundaries. A product manager needs engineers who report to someone else; a project lead needs help from finance, legal and sales. In these situations formal authority is of little use. What counts is influence, and influence is built long before it is needed.\n\nThe people who are best at it tend to share a few habits. They invest in relationships when nothing is at stake, so that a request does not arrive from a stranger. They take the trouble to understand what the other person is measured on, because a proposal that helps someone meet their own targets is far easier to accept. And they are generous with credit, which makes others more willing to help next time.\n\nWhen they do ask for something, they rarely open with the request itself. They begin with the goal both sides share and the problem that stands in its way. Only then do they suggest what they need, and they usually frame it as an option to explore rather than a demand. A question such as “How would you feel about trying this for a month?” leaves the other person in control, and people are far more committed to decisions they feel they have made themselves.\n\nNone of this is manipulation, provided it is honest. The line is crossed when someone pretends to share a goal they do not care about, or makes promises they have no intention of keeping. Colleagues notice, and trust, once lost, is very slow to rebuild. Influence without authority works precisely because it depends on a reputation for keeping your word.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'According to the writer, formal authority is the key to cross-team work.', a: 'f', why: '“Formal authority is of little use. What counts is influence.”' },
            { q: 'Good influencers build relationships before they need help.', a: 't', why: 'They “invest in relationships when nothing is at stake”.' },
            { q: 'Influential people usually start with their request.', a: 'f', why: 'They “rarely open with the request itself”.' },
            { q: 'Most managers are trained in influencing skills.', a: 'ng', why: 'The article does not mention training.' },
            { q: 'The writer believes influence can become manipulation.', a: 't', why: 'The line is crossed when someone pretends or makes false promises.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the article.', items: [
            { q: '“…when nothing is at stake.” What does at stake mean?', o: ['At risk, so that something could be won or lost.', 'Finished.', 'Written in a contract.'], why: 'If something is *at stake*, it could be lost or won.' },
            { q: '“Only then do they suggest what they need.” Why is the word order do they?', o: ['After only then at the start, the subject and auxiliary change places.', 'It is a question.', 'It is a mistake.'], why: 'Inversion after a limiting adverbial such as *only then*.' },
            { q: '“…they are generous with credit.” What do they do?', o: ['They openly say when others have helped or done good work.', 'They lend money to colleagues.', 'They give long deadlines.'], why: '*Give credit* to someone: recognise their contribution.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one wrong word. Tap it and write the correct word.', items: [
            { s: 'She is very generous [of] credit.', a: ['with'], why: 'The phrase is *generous with* credit, time or help.' },
            { s: 'Trust, once [losing], is slow to rebuild.', a: ['lost'], why: 'A past participle: *once lost* means *once it has been lost*.' },
            { s: 'He made promises he had no intention [to keep].', a: ['of keeping'], why: '*No intention of* + *-ing*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'I was wondering ___ you could look at the draft.', o: ['whether', 'that', 'what'], why: '*I was wondering whether / if* + clause.' },
      { q: 'It might be worth ___ the figures again.', o: ['checking', 'to check', 'check'], why: '*It might be worth* + *-ing*.' },
      { q: 'A colleague says the timing is “not ideal”. She probably means:', o: ['The timing is a real problem.', 'The timing is perfect.', 'She has no opinion about the timing.'], why: 'Understatement: *not ideal* often means *bad*.' },
      { q: 'What would it ___ for you to support the proposal?', o: ['take', 'make', 'need'], why: '*What would it take for you to…?*' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence starting with the words given.', items: [
      { q: 'We want to meet next week.', cue: 'We were hoping', a: ['We were hoping to meet next week.'], why: '*We were hoping to* adds distance.' },
      { q: 'Someone didn’t update the price list.', cue: 'The price list', a: ['The price list wasn’t updated.', 'The price list was not updated.', 'The price list hadn’t been updated.', 'The price list had not been updated.'], why: 'The passive avoids naming the person.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'I ___ understand your concerns, believe me. (emphatic)', a: ['do'], why: 'Emphatic *do* + base form.' },
      { q: '___ we shared the cost, would you agree?', a: ['Supposing', 'Suppose'], why: '*Supposing* + past simple: a hypothetical offer.' },
      { q: 'How would you feel ___ a short trial first?', a: ['about'], why: '*How would you feel about* + noun or *-ing*.' },
      { q: 'She has no intention ___ changing her mind.', a: ['of'], why: '*No intention of* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
      ['I’m not entirely', 'convinced this is the right approach.'],
      ['There appears to be', 'a problem with the figures.'],
      ['We both want', 'the launch to go smoothly.'],
      ['Wouldn’t it make sense', 'to wait for the results?'],
    ] },
  ],
};
