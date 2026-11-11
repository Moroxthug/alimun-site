// English C1 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Strategy and stakeholders',
  goal: 'Explain a strategy and adapt the message to each group of stakeholders.',
  art: 'owl',
  tags: { skills: ['speaking', 'writing', 'vocabulary', 'reading'], topics: ['strategy', 'stakeholders', 'priorities', 'trade-offs', 'cleft-sentences', 'nominalisation', 'register'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Priorities and trade-offs',
      about: 'Explain what a strategy aims to do, what comes first and what you will stop doing.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A strategy is not a list of everything a company wants. It is a set of **choices**: what comes first (**priorities**), what you accept to lose in order to gain something else (**trade-offs**), and what you will **stop** doing. At C1 you can make these choices sound clear and deliberate, not vague.' },
          { t: 'table', caption: 'The language of strategic choices', explain: ['head', 'col0'], quiz: true, head: ['Purpose', 'Phrase'], rows: [
            ['Say what comes first', 'Our overriding priority over the next two years is to…'],
            ['Narrow the focus', 'We will concentrate our resources on…'],
            ['Name a trade-off', 'We will accept slower growth in exchange for higher margins.'],
            ['Choose one thing over another', 'We are prioritising retention over rapid expansion.'],
            ['Say what stops', 'We will no longer be pursuing…'],
            ['Explain the reason', 'The rationale behind this is that…'],
          ] },
        ],
        [
          { t: 'text', md: 'Two structures give a strategic message its focus. A **cleft sentence** points the listener to the key idea: *What we are not going to do is compete on price.* **Nominalisation**, turning verbs into nouns, makes a written strategy sound formal and compact: *we will expand* becomes *the expansion of*.' },
          { t: 'examples', items: [
            { s: '**What matters most** at this stage **is** keeping the customers we already have.', n: 'A what-cleft: the focus comes at the end, after *is*.' },
            { s: '**It is** the service, not the product, **that** sets us apart.', n: 'An it-cleft makes a contrast between two ideas.' },
            { s: 'The **reduction** of our product range will free up resources for the **development** of the platform.', n: 'Two nominalisations: *reduce* becomes *reduction*, *develop* becomes *development*.' },
            { s: 'We are **prioritising** quality **over** speed, **at the expense of** some short-term growth.', n: '*Prioritise A over B*; *at the expense of* names what you lose.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Nominalisation suits documents, but too much of it in a speech sounds cold and abstract. When you speak, bring back the people and the verbs: *we are going to cut the range*, not *a reduction of the range is planned*.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Complete each sentence with the right form of the word in capitals.', items: [
            { q: 'The ___ of two regional offices will save around a fifth of our running costs.', base: 'merge', a: ['merger'], why: 'A noun is needed after *the*: *merge* becomes *merger*.' },
            { q: 'We need a more ___ approach to choosing which markets to enter.', base: 'strategy', a: ['strategic'], why: 'An adjective is needed before *approach*: *strategic*.' },
            { q: 'Long-term ___ matters more to us than a single good year.', base: 'profitable', a: ['profitability'], why: 'A noun is needed as the subject: *profitability*.' },
            { q: 'The ___ of new staff has been slower than we planned.', base: 'recruit', a: ['recruitment'], why: '*Recruit* becomes the noun *recruitment*.' },
            { q: 'Our prices are no longer ___ in the northern market.', base: 'compete', a: ['competitive'], why: 'An adjective after *are*: *competitive*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all that fit.', items: [
            { key: 'set', o: ['priorities', 'the direction', 'targets', 'a trade-off', 'resources'], a: [0, 1, 2], why: 'We *set priorities*, *set the direction* and *set targets*. We *make* a trade-off and *allocate* resources.' },
            { key: 'allocate', o: ['resources', 'a budget', 'staff', 'a vision', 'a risk'], a: [0, 1, 2], why: 'You *allocate* resources, a budget or staff to a task. A vision is *shared*; a risk is *taken* or *managed*.' },
            { key: 'pursue', o: ['a strategy', 'an opportunity', 'growth', 'a meeting', 'a decision'], a: [0, 1, 2], why: '*Pursue* means follow or try to achieve: a strategy, an opportunity, growth.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite each sentence for more focus, starting with the words given.', items: [
            { q: 'We need a clearer sense of direction.', cue: 'What we need', a: ['What we need is a clearer sense of direction.'], why: 'A what-cleft puts *a clearer sense of direction* at the end, where it stands out.' },
            { q: 'Our people make the difference, not our technology.', cue: 'It is', a: ['It is our people that make the difference, not our technology.', 'It is our people who make the difference, not our technology.', 'It’s our people that make the difference, not our technology.', 'It’s our people who make the difference, not our technology.'], why: 'An it-cleft for a contrast: *It is* + focus + *that* / *who*.' },
            { q: 'We will not try to be the cheapest supplier.', cue: 'What we will not do', a: ['What we will not do is try to be the cheapest supplier.', 'What we will not do is to try to be the cheapest supplier.'], why: 'Focus on an action: *What we will not do is* + infinitive, with or without *to*.' },
            { q: 'We will expand into two new markets next year.', cue: 'The expansion', a: ['The expansion into two new markets will take place next year.', 'The expansion into two new markets will happen next year.', 'The expansion into two new markets is planned for next year.'], why: 'Nominalisation: the verb *expand* becomes the noun *expansion*, and a new verb is needed.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: 'We are prioritising customer retention ___ rapid growth.', o: ['over', 'than', 'against'], why: 'The pattern is *prioritise A over B*.' },
            { q: 'We will grow more slowly, but not at the ___ of quality.', o: ['expense', 'cost price', 'loss'], why: 'The fixed phrase is *at the expense of*.' },
            { q: 'The rationale ___ this decision is simple.', o: ['behind', 'under', 'about'], why: 'We say *the rationale behind* a decision.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'One message, many audiences',
      about: 'Adapt the same strategic message for the board, your team and your clients.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: '**Stakeholders** are the people who are affected by a decision or can influence it. Each group listens for something different. The board wants numbers and risks. Your team wants to know what changes for them. Clients want to know what it means for their service. The facts stay the same; the **emphasis**, the **detail** and the **register** change.' },
          { t: 'table', caption: 'What each audience listens for', explain: ['head', 'col1'], head: ['Audience', 'They want to know', 'You might say'], rows: [
            ['The board', 'cost, return, risk and timing', 'We expect the investment to pay for itself within three years.'],
            ['Your team', 'what changes for them and why', 'Your roles will stay the same, but the way we work will change.'],
            ['Clients', 'what improves and what stays the same', 'You will keep the same contact person, and response times will get shorter.'],
            ['Partners and suppliers', 'how the relationship will change', 'We would like to work more closely with fewer partners.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Preparing the announcement', lines: [
            { who: 'Elena', s: 'We have to tell three groups about the move to a single platform, and I don’t want to give the same talk three times.' },
            { who: 'Kenji', s: 'Agreed. For the board, I’d lead with the savings and the timeline, and be upfront about the risks.' },
            { who: 'Elena', s: 'And keep it to ten minutes. They’ll have read the paper already.' },
            { who: 'Kenji', s: 'The team is a different story. What they’ll be worried about is their jobs, so we should address that head-on.' },
            { who: 'Elena', s: 'Yes. If we leave it until the end, nobody will hear anything else. What about clients?' },
            { who: 'Kenji', s: 'With clients, I’d keep the internal details out of it altogether. All they need to know is that the service will be faster.' },
            { who: 'Elena', s: 'Fine, but let’s not overpromise. Faster, yes, but only once the transition is complete.' },
            { who: 'Kenji', s: 'Good point. I’ll draft three versions and we can compare them on Thursday.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Address something head-on* means deal with it directly and early. *Be upfront about* something means be honest about it from the start. Both build trust with any audience.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Elena wants to give the same presentation to every group.', a: 'f', why: 'She says she does not want to give the same talk three times.' },
            { q: 'Kenji thinks the board should hear about the risks.', a: 't', why: 'He says they should *be upfront about the risks*.' },
            { q: 'They plan to talk about jobs at the end of the team meeting.', a: 'f', why: 'They want to address it head-on, because if they leave it to the end nobody will hear anything else.' },
            { q: 'Elena is careful not to promise too much to clients.', a: 't', why: '*Let’s not overpromise*: faster only once the transition is complete.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Who is each sentence for? Sort them.', groups: ['the board', 'the team', 'clients'], items: [
            { s: 'The total cost is within the approved budget.', g: 0, why: 'Cost and budget are the board’s main concern.' },
            { s: 'Nobody’s contract will change as a result of this.', g: 1, why: 'Staff want to know how the change affects their jobs.' },
            { s: 'Your account manager will remain your first point of contact.', g: 2, why: 'Clients want continuity in their service.' },
            { s: 'The main risk is a delay during the data transfer.', g: 0, why: 'The board needs an honest view of the risks.' },
            { s: 'Training will take place during working hours.', g: 1, why: 'A practical detail for the people doing the work.' },
            { s: 'You will notice shorter waiting times from the spring.', g: 2, why: 'A benefit that clients will feel directly.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one wrong word. Tap it and write the correct word.', items: [
            { s: 'We should address the question of jobs [head-first].', a: ['head-on'], why: 'The fixed phrase is *address something head-on*.' },
            { s: 'I want to be [upfront of] the risks from the start.', a: ['upfront about'], why: 'We say *be upfront about* something.' },
            { s: 'The board will want to know the [return of] the investment.', a: ['return on'], why: 'We say *a return on an investment*: the money it brings back.' },
            { s: 'Clients will keep the same contact person, so the change will hardly [affect on] them.', a: ['affect'], why: '*Affect* is a verb with a direct object: *affect them*. *Effect on* is the noun pattern.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best sentence for the audience.', items: [
            { q: 'You are speaking to the board about a new system.', o: ['We expect the system to pay for itself within three years, with the main risk in the first quarter.', 'Everyone is really excited about the new system.', 'The new system has lots of great features you will love.'], why: 'The board listens for return, timing and risk.' },
            { q: 'You are telling your team about a reorganisation.', o: ['I know the first question on your minds is what this means for your roles, so let me start there.', 'The share price should rise as a result of this decision.', 'Our clients will not notice any change.'], why: 'Start with what the team is worried about: their roles.' },
            { q: 'You are writing to clients about the same change.', o: ['From March, you will be able to manage your orders in one place.', 'We are merging two internal departments and restructuring reporting lines.', 'The project has a budget of two million and a payback period of three years.'], why: 'Clients care about what improves for them, not internal details.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A strategy update to staff',
      about: 'Read a director’s message to staff about a new strategy.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Where we go from here', md: '**From: Margaret Hale, Managing Director**\n**To: All staff**\n\nDear colleagues,\n\nAs many of you know, the leadership team has spent the last three months reviewing our direction. I want to share the outcome with you directly, before you hear it second-hand.\n\nOver the past five years we have grown by saying yes to almost everything: new services, new regions, new types of client. That growth has been good for us, but it has come at a price. We are spread too thinly, our teams are stretched, and too much of our energy goes into work that our clients value least.\n\nWhat we have decided, therefore, is to do fewer things and do them better. Our overriding priority for the next two years will be the quality of our core consulting service. We will concentrate our investment on the three regions where we are strongest, and we will no longer be pursuing new contracts in the south. Existing clients there will continue to be looked after by the team that knows them.\n\nI want to be upfront about what this means. It means slower growth in the short term, and it means that some projects that people care about will be paused. These were not easy choices, and they were not made lightly.\n\nIt is equally important to say what will not change. Nobody’s role is at risk as a result of this decision. Our values, our offices and the way we treat each other will stay exactly as they are.\n\nOver the coming weeks, each department head will hold a session to explain what the strategy means for your team in practice and to answer your questions. In the meantime, my door, and my inbox, are open.\n\nWith best wishes,\nMargaret' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Margaret wanted staff to hear the news from her first.', a: 't', why: '“…before you hear it second-hand.”' },
            { q: 'The company has grown by focusing on one type of client.', a: 'f', why: 'It grew by “saying yes to almost everything”.' },
            { q: 'The company will stop serving its existing clients in the south.', a: 'f', why: 'Existing clients there will continue to be looked after; only new contracts stop.' },
            { q: 'Some staff will lose their jobs.', a: 'f', why: '“Nobody’s role is at risk as a result of this decision.”' },
            { q: 'The leadership team hired outside advisers for the review.', a: 'ng', why: 'The message does not say who helped with the review.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the message.', items: [
            { q: '“We are spread too thinly.” What does this mean?', o: ['We are trying to do too many things with too few resources.', 'We have too few clients.', 'Our offices are too far apart.'], why: '*Spread too thinly*: our resources cover too many areas to be effective.' },
            { q: 'Why does Margaret write “What we have decided, therefore, is…”?', o: ['To put the focus on the decision with a cleft sentence.', 'To show that she disagrees with the decision.', 'To ask staff for their decision.'], why: 'The what-cleft leads up to the key message: *to do fewer things and do them better*.' },
            { q: '“They were not made lightly.” What is Margaret saying about the choices?', o: ['They were made after serious thought.', 'They were made quickly.', 'They were made by someone else.'], why: '*Not lightly* means carefully, with a sense of their importance.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two phrases that tell staff what will stop.', items: [
            { s: 'We [will no longer be pursuing] new contracts in the south, and some projects [will be paused].', why: '*Will no longer be pursuing* and *will be paused* describe work that stops.' },
          ] },
          { t: 'ex', kind: 'search', h: 'Find six words from the unit about strategy.', words: ['priority', 'rationale', 'pursue', 'allocate', 'focus', 'merger'] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'What we need at this stage ___ a clearer focus.', o: ['is', 'it is', 'that is'], why: 'A what-cleft: the *what* clause is followed directly by *is*.' },
      { q: 'We are prioritising quality ___ speed.', o: ['over', 'than', 'from'], why: '*Prioritise A over B*.' },
      { q: 'With the board, I would be upfront ___ the risks.', o: ['about', 'of', 'with'], why: '*Be upfront about* something.' },
      { q: 'Their main concern is jobs, so let’s address it ___.', o: ['head-on', 'head-first', 'face-on'], why: '*Address something head-on*: directly and early.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Write the right form of the word in capitals.', items: [
      { q: 'The ___ of the two teams will take place in June.', base: 'merge', a: ['merger'], why: 'A noun after *the*: *merger*.' },
      { q: 'We have to remain ___ on price in a difficult market.', base: 'compete', a: ['competitive'], why: 'An adjective after *remain*: *competitive*.' },
      { q: 'The ___ behind the decision was explained in the paper.', base: 'rational', a: ['rationale'], why: 'The noun *rationale* means the reasons for a decision.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence starting with the words given.', items: [
      { q: 'Trust, not price, wins us contracts.', cue: 'It is', a: ['It is trust, not price, that wins us contracts.', 'It’s trust, not price, that wins us contracts.', 'It is trust that wins us contracts, not price.', 'It’s trust that wins us contracts, not price.'], why: 'An it-cleft for contrast: *It is* + focus + *that*.' },
      { q: 'Clients only need to know that the service will be faster.', cue: 'All', a: ['All clients need to know is that the service will be faster.', 'All that clients need to know is that the service will be faster.'], why: '*All* + clause + *is*: the only thing.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['a stakeholder', 'someone affected by a decision or able to influence it'],
      ['a trade-off', 'accepting a loss in one area to gain in another'],
      ['spread too thinly', 'trying to cover too much with too little'],
      ['second-hand', 'heard from someone else, not from the source'],
    ] },
  ],
};
