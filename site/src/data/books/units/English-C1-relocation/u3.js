// English C1 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Civic life',
  goal: 'Follow local politics and take part in public consultations and meetings.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'speaking', 'reading', 'grammar'], topics: ['local-government', 'planning', 'consultation', 'public-meeting', 'discourse-markers', 'conceding', 'local-news'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'How your town is run',
      about: 'Learn the language of local government, consultations and planning decisions.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Many of the decisions that shape daily life are made locally: bin collections, parks, libraries, parking, new housing. In many countries, residents can take part even before they can vote in national elections, for example by responding to a **public consultation**, signing a **petition** or **objecting** to a **planning application**. Who can vote in local elections depends on the country and on your status, so check the rules where you live.' },
          { t: 'table', caption: 'Words of local politics', explain: ['head', 'col1'], quiz: true, head: ['Term', 'Meaning'], rows: [
            ['the council', 'the elected body that runs a town, city or district'],
            ['a councillor', 'an elected member of the council who represents an area'],
            ['a ward', 'one of the areas a town is divided into for local elections'],
            ['a public consultation', 'a period when the council asks residents for their views'],
            ['a planning application', 'a formal request to build or change a building'],
            ['planning permission', 'official approval to go ahead with building work'],
            ['lodge an objection', 'formally say that you are against a proposal'],
            ['a residents’ association', 'a group of local people who act together on local issues'],
          ] },
        ],
        [
          { t: 'text', md: 'Local news and council documents often report plans and opinions impersonally, with **passive reporting structures**. They let the writer report what is planned or believed without saying exactly who planned or believes it.' },
          { t: 'examples', items: [
            { s: 'The new bus route **is expected to** open next spring.', n: '*Be expected to* + infinitive: this is the plan, but it is not certain.' },
            { s: '**It has been proposed that** the library **should** open on Sundays.', n: '*It has been proposed that* + *should*: someone has suggested it, officially.' },
            { s: 'The scheme **is said to have cost** twice the original budget.', n: '*Be said to have* + past participle: people say this about the past, but the writer does not confirm it.' },
            { s: 'Residents **are thought to be** divided on the issue.', n: '*Be thought to be*: the general belief, not a proven fact.' },
            { s: 'A decision **is due to be taken** at the council meeting on 14 May.', n: '*Be due to* + infinitive: something is planned for a particular time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'A *consultation* asks for your view, but the council is not bound to follow it. Responses carry more weight when they give specific local reasons, such as traffic on a particular road, rather than general feelings.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the term and its meaning.', pairs: [
            ['councillor', 'an elected local representative'],
            ['ward', 'an area of a town for local elections'],
            ['petition', 'a written request signed by many people'],
            ['planning permission', 'official approval for building work'],
            ['consultation', 'a time when residents are asked for their views'],
            ['objection', 'a formal statement that you are against something'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word does not belong?', items: [
            { o: ['landlord', 'councillor', 'mayor', 'council officer'], why: 'A *landlord* rents out property. The others work in local government.' },
            { o: ['approve', 'object', 'oppose', 'protest'], why: '*Approve* means agree to something. The others express disagreement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with a passive reporting structure, starting with the words given.', items: [
            { q: 'People expect the new school to open in 2028.', cue: 'The new school is expected', a: ['The new school is expected to open in 2028.'], why: '*Be expected to* + infinitive.' },
            { q: 'People say the old cinema was built in the 1920s.', cue: 'The old cinema is said', a: ['The old cinema is said to have been built in the 1920s.'], why: 'For the past, *be said to have* + past participle; here it is passive too: *to have been built*.' },
            { q: 'People believe that the mayor supports the plan.', cue: 'The mayor is believed', a: ['The mayor is believed to support the plan.'], why: '*Be believed to* + infinitive for a present belief.' },
            { q: 'Someone has proposed that the market should move to the square.', cue: 'It has been proposed', a: ['It has been proposed that the market should move to the square.', 'It has been proposed that the market move to the square.', 'It has been proposed that the market moves to the square.'], why: '*It has been proposed that* + clause. *Should* is common in British English; the base form is more formal.' },
          ] },
          { t: 'ex', kind: 'wordform', h: 'Complete with the correct form of the word in capitals.', items: [
            { q: 'Over two hundred residents signed the ___ against the closure.', base: 'PETITION', a: ['petition'], why: 'The noun and the verb have the same form: *a petition*, *to petition the council*.' },
            { q: 'The council received more than fifty ___ to the plan.', base: 'OBJECT', a: ['objections'], why: 'The noun of *object* (verb) is *objection*, here plural.' },
            { q: 'Each ward has two elected ___.', base: 'REPRESENT', a: ['representatives'], why: 'A *representative* is a person who acts for others.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Speaking at a public meeting',
      about: 'Make your point, concede a point and disagree firmly but respectfully.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At a public meeting you usually have a few minutes to speak, and you are speaking to people who may disagree with you. The most persuasive speakers show that they have listened. They **concede** what is reasonable in the other side’s view, then **counter** it with their own argument. **Discourse markers** signal each move clearly.' },
          { t: 'table', caption: 'Signalling your moves', explain: ['head', 'col0'], head: ['Move', 'Phrases'], rows: [
            ['Making your point', 'The point I’d like to make is… / My main concern is… / What matters here is…'],
            ['Conceding', 'Admittedly, … / Granted, … / I take the point that… / There’s some truth in that.'],
            ['Countering', 'That said, … / Be that as it may, … / Even so, … / The fact remains that…'],
            ['Disagreeing respectfully', 'With respect, I’d see it differently. / I’m not sure that follows.'],
            ['Clarifying', 'To put it another way, … / What I’m getting at is…'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A meeting about a new cycle lane', lines: [
            { who: 'Chair', s: 'Thank you. I’d now like to invite residents to comment. Yes, at the back.' },
            { who: 'Sophie', s: 'Thank you. I live on Mill Road. My main concern is that the cycle lane would remove most of the parking outside the shops.' },
            { who: 'Sophie', s: 'Admittedly, the road is dangerous for cyclists at the moment. Even so, if customers can’t park, some of those shops may not survive.' },
            { who: 'Chair', s: 'Thank you. Would anyone like to respond to that?' },
            { who: 'Arjun', s: 'I take the point about the shops, and I don’t think anyone wants them to close. That said, the fact remains that two cyclists have been injured on that junction this year.' },
            { who: 'Arjun', s: 'With respect, I’m not sure it follows that fewer parking spaces means fewer customers. To put it another way, people who walk or cycle are customers too.' },
            { who: 'Sophie', s: 'There’s some truth in that. Be that as it may, I’d like the council to look at keeping at least some short-stay spaces.' },
            { who: 'Chair', s: 'That seems a constructive suggestion. We’ll note both views for the consultation report.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What is the speaker doing?', items: [
            { q: 'Sophie: “Admittedly, the road is dangerous for cyclists at the moment.”', o: ['She accepts a point that supports the other side.', 'She changes her mind completely.', 'She introduces her main concern.'], why: '*Admittedly* concedes a point before she continues with her own argument.' },
            { q: 'Arjun: “That said, the fact remains that two cyclists have been injured.”', o: ['He moves from conceding to his counter-argument.', 'He agrees completely with Sophie.', 'He asks the chair a question.'], why: '*That said* and *the fact remains* introduce his counter-argument.' },
            { q: 'Arjun: “I’m not sure it follows that fewer parking spaces means fewer customers.”', o: ['He questions the logic of Sophie’s argument.', 'He admits he does not understand the plan.', 'He says the shops will close.'], why: '*I’m not sure it follows* means the conclusion does not come logically from the facts.' },
            { q: 'Sophie: “Be that as it may, I’d like the council to look at…”', o: ['She accepts his point may be true, but keeps her request.', 'She refuses to listen to him.', 'She withdraws her request.'], why: '*Be that as it may* means *even if that is true*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that concedes a point.', items: [
            { s: '[Granted], the new homes are needed. Even so, this is the wrong site.', why: '*Granted* accepts the other side’s point before *even so* counters it.' },
            { s: 'I [take the point that] it would bring jobs, but the traffic will be terrible.', why: '*I take the point that* shows you have listened.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Be that as it may, the fact remains that the road is unsafe.', why: '*Be that as it may* concedes; *the fact remains that* counters.' },
            { a: 'What I’m getting at is that we need more options.', why: '*What I’m getting at is…* clarifies your point.' },
            { a: 'With respect, I would see it rather differently.', why: '*With respect* softens a disagreement. *Rather* is a mild softener.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: the phrase and what it does.', pairs: [
            ['Admittedly', 'conceding'],
            ['That said', 'countering'],
            ['To put it another way', 'clarifying'],
            ['My main concern is', 'making your point'],
            ['With respect', 'disagreeing politely'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Homes or green space?',
      about: 'Read a local news report on a planning proposal and the views around it.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Plans for 120 homes on Ashfield playing fields divide residents', md: 'Proposals to build 120 homes on part of the Ashfield playing fields have drawn more than three hundred responses to the council’s public consultation, which closes on Friday.\n\nThe scheme, put forward by a housing association, would see around a third of the site developed, with the remainder kept as public open space. Forty of the homes are expected to be offered at below-market rents. A planning application is due to be considered by the council’s planning committee in the autumn.\n\nSupporters argue that the town badly needs affordable housing. “Young families are being priced out of the area,” said Councillor Hana Ito, who represents the neighbouring ward. “Admittedly, nobody wants to lose green space. That said, the plans keep most of the field, and they would improve what remains, with new paths and lighting.”\n\nThe Ashfield Residents’ Association, however, has lodged a formal objection. Its chair, Joseph Reid, said that the field was the only large open space within walking distance for many households. “We are not against new housing as such,” he said. “What we object to is building it on land that, once it has gone, will never come back.” The association has also raised concerns about traffic on the already busy Station Lane.\n\nThe housing association is understood to be considering changes to the access road in response to the consultation. The council has stressed that no decision has yet been made and that every response will be taken into account.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the report. True, false or not given?', items: [
            { q: 'The whole of the playing fields would be built on.', a: 'f', why: 'Around a third of the site would be developed, with the rest kept as open space.' },
            { q: 'All 120 homes would have below-market rents.', a: 'f', why: 'Forty of the homes *are expected to be* offered at below-market rents.' },
            { q: 'The council has already approved the planning application.', a: 'f', why: '*No decision has yet been made*; the committee will consider it in the autumn.' },
            { q: 'Councillor Ito concedes that losing green space is a real cost.', a: 't', why: '*Admittedly, nobody wants to lose green space.*' },
            { q: 'The residents’ association is against all new housing in the town.', a: 'f', why: '*We are not against new housing as such.*' },
            { q: 'Most of the consultation responses oppose the plan.', a: 'ng', why: 'The report gives the number of responses, but not how many are for or against.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the report.', items: [
            { q: 'Why does the report say “is understood to be considering changes”?', o: ['The journalist has heard this but the housing association has not confirmed it publicly.', 'The housing association has definitely made the changes.', 'The journalist does not understand the plan.'], why: '*Be understood to* reports information from unnamed sources, without full confirmation.' },
            { q: 'What does “priced out of the area” mean?', o: ['Unable to afford to live there any more.', 'Paid to leave the area.', 'Offered cheaper homes in the area.'], why: '*Be priced out*: prices become too high for you.' },
            { q: 'Joseph Reid says “What we object to is…”. Why does he use this structure?', o: ['To focus clearly on the exact part of the plan he opposes.', 'To show he has no objection.', 'To ask the council a question.'], why: 'A what-cleft puts the focus on the precise point: building on land that cannot be replaced.' },
            { q: '“Not against new housing as such.” What does *as such* mean here?', o: ['In itself, in general.', 'Like this.', 'Very much.'], why: '*Not against X as such*: not against the thing itself, only a particular part of it.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Complete the summary with words from the bank.', extra: ['elected', 'granted'], items: [
            { q: 'The council is holding a public ___ on the plans.', a: 'consultation', why: 'The council asks residents for their views in a *consultation*.' },
            { q: 'The residents’ association has lodged a formal ___.', a: 'objection', why: 'You *lodge an objection* to a proposal.' },
            { q: 'The planning ___ will make a decision in the autumn.', a: 'committee', why: 'A *planning committee* of councillors decides on applications.' },
            { q: 'Supporters say the town needs more ___ housing.', a: 'affordable', why: '*Affordable housing*: homes people on average or low incomes can pay for.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'An elected member of the local council is a ___.', o: ['councillor', 'counsellor', 'consultant'], why: 'A *councillor* sits on the council. A *counsellor* gives advice and support.' },
      { q: 'Official approval to build is called planning ___.', o: ['permission', 'consultation', 'objection'], why: '*Planning permission*.' },
      { q: '___, the plan has some benefits. Even so, I oppose it.', o: ['Admittedly', 'To put it another way', 'What I’m getting at'], why: '*Admittedly* concedes before *even so* counters.' },
      { q: 'The bridge is said ___ in 1850.', o: ['to have been built', 'to build', 'to be building'], why: 'Past and passive: *to have been built*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
      { q: 'The new library is expected ___ open next year.', a: ['to'], why: '*Be expected to* + infinitive.' },
      { q: 'Be that as it ___, we still need more parking.', a: ['may'], why: 'The fixed phrase is *be that as it may*.' },
      { q: 'I take the ___ that it is expensive, but it is necessary.', a: ['point'], why: '*I take the point that…* concedes politely.' },
      { q: 'Residents can lodge an ___ to the planning application.', a: ['objection'], why: '*Lodge an objection*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, starting with the words given.', items: [
      { q: 'People believe the council made a mistake.', cue: 'The council is believed', a: ['The council is believed to have made a mistake.'], why: 'A belief about the past: *be believed to have* + past participle.' },
      { q: 'A decision is planned for June.', cue: 'A decision is due', a: ['A decision is due in June.', 'A decision is due to be made in June.', 'A decision is due to be taken in June.'], why: '*Be due* (*to be made*): planned for a time.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'A council must always follow the results of a consultation.', a: 'f', why: 'A consultation asks for views; the council is not bound by it.' },
      { q: '*That said* introduces a contrasting point.', a: 't', why: 'It means *however, after saying that*.' },
    ] },
  ],
};
