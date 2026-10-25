// English B1 for work, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Presenting your work',
  goal: 'Give a short, clear presentation at work.',
  art: 'sun',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['presentations', 'signposting', 'trends', 'project-update'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Structure and signposting',
      about: 'Open a presentation, guide people through it and finish clearly.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'A short presentation at work needs a clear structure: a beginning, a middle and an end. **Signposting** phrases tell the audience where you are in the talk and what comes next.' },
          { t: 'table', caption: 'Signposting phrases', explain: ['head', 'col0'], quiz: true, head: ['', 'Phrase'], rows: [
            ['Start', 'Today I’d like to talk about…'],
            ['Give the plan', 'First, I’ll look at…, and then…'],
            ['Go to the next part', 'Moving on to…'],
            ['Show a slide', 'As you can see on this slide,…'],
            ['Sum up', 'To sum up,…'],
            ['Finish', 'Thank you for listening. Are there any questions?'],
          ] },
        ],
        [
          { t: 'reading', title: 'The start of Nadia’s presentation', md: 'Good morning, everyone, and thanks for coming. Today I’d like to talk about our new customer app.\n\nFirst, I’ll explain why we built it. Then I’ll show you how it works, and finally I’ll tell you about our plans for next year. The talk will take about ten minutes, and there will be time for questions at the end.\n\nSo, let’s start with why we built the app.' },
          { t: 'tip', art: 'owl', md: 'Tell people at the start when they can ask questions: *Please stop me if you have a question*, or *There will be time for questions at the end.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginning and the end of each phrase.', pairs: [
            ['Today I’d like to', 'talk about our sales in Spain.'],
            ['Moving', 'on to the costs.'],
            ['As you can see', 'on this slide, the project is on time.'],
            ['To sum', 'up, it was a good year.'],
            ['Thank you for', 'listening.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: '___, I’ll talk about the budget, and then about the timeline.', o: ['First', 'Last', 'Finally'], why: '*First* introduces the first part of your plan.' },
            { q: 'Moving ___ to the next point: our new office.', o: ['on', 'in', 'up'], why: '*Moving on to…* takes you to the next part.' },
            { q: 'To ___ up, the project is going well.', o: ['sum', 'end', 'close'], why: '*To sum up* introduces a short summary at the end.' },
            { q: 'Are there ___ questions?', o: ['any', 'a', 'one'], why: 'In questions we usually use *any* with plural nouns.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’d like to talk about our new product.', why: '*I’d like to* + verb: a polite way to start.' },
            { a: 'Let’s move on to the next slide.', why: '*Let’s move on to…* takes you to the next part.' },
            { a: 'Thank you for listening.', why: '*Thank you for* + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Figures and trends',
      about: 'Describe numbers that go up, go down or stay the same.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To describe a change in numbers, use verbs like *rise*, *fall*, *increase* and *decrease*. *Rise* and *fall* are irregular. Many of these verbs are also nouns: *Sales rose.* means the same as *There was a rise in sales.*' },
          { t: 'table', caption: 'Verbs for trends', explain: ['head'], quiz: true, head: ['Verb', 'Past simple', 'Example'], rows: [
            ['rise', 'rose', 'Prices rose in March.'],
            ['fall', 'fell', 'Costs fell last year.'],
            ['increase', 'increased', 'Our team increased from six to nine people.'],
            ['decrease', 'decreased', 'Complaints decreased in the summer.'],
            ['stay the same', 'stayed the same', 'The number of orders stayed the same.'],
          ] },
        ],
        [
          { t: 'text', md: 'Say **how much** something changed with an adverb. Use *by* for the size of the change and *to* for the new number.' },
          { t: 'examples', items: [
            { s: 'Sales rose **sharply** in December.', n: '*Sharply*: a big, fast change.' },
            { s: 'Costs fell **slightly** last month.', n: '*Slightly*: a small change.' },
            { s: 'Visitor numbers grew **steadily** all year.', n: '*Steadily*: slowly and regularly.' },
            { s: 'The price increased **by** two pounds.', n: '*By*: the size of the change.' },
            { s: 'The price increased **to** twelve pounds.', n: '*To*: the new number.' },
          ] },
          { t: 'tip', art: 'owl', md: '*Rise* has no object: *Prices rose.* *Raise* has an object: *We raised our prices.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'Last year our costs ___ by five per cent.', o: ['fell', 'fall', 'falled'], why: '*Last year*: past simple. *Fall* is irregular: *fell*.' },
            { q: 'The number of visitors stayed ___ in July.', o: ['the same', 'same', 'equal'], why: 'The phrase is *stay the same*.' },
            { q: 'Sales went up a lot, very quickly. They rose ___.', o: ['sharply', 'slightly', 'steadily'], why: '*Sharply*: a big, fast change.' },
            { q: 'There was a small ___ in prices.', o: ['rise', 'rose', 'risen'], why: 'After *a small* we need a noun: *a rise*.' },
            { q: 'We ___ our prices in January.', o: ['raised', 'rose', 'rised'], why: 'With an object (*our prices*), use *raise*: *raised*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with *by* or *to*.', items: [
            { q: 'Our team grew from ten ___ fourteen people.', a: ['to'], why: '*From… to…*: *to* gives the new number.' },
            { q: 'The price went up ___ £2, from £10 to £12.', a: ['by'], why: 'The size of the change is £2: *by*.' },
            { q: 'Orders fell from 500 ___ 300 a week.', a: ['to'], why: '*From… to…*: 300 is the new number.' },
            { q: 'Costs rose ___ ten per cent, from £1,000 to £1,100.', a: ['by'], why: 'Ten per cent is the size of the change: *by*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that say how big or how fast the change was.', items: [
            { s: 'Visitor numbers rose [sharply] in May and then fell [slightly] in June.', why: '*Sharply*: big and fast. *Slightly*: small.' },
            { s: 'Our online sales grew [steadily] all year.', why: '*Steadily*: slowly and regularly.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a project update',
      about: 'Read a short project update and find the key facts.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Project update: the new booking system', md: 'Hello everyone,\n\nHere is a short update on the new online booking system for our three clinics.\n\nFirst, the good news. The system has been live in our Leeds clinic since 1 September, and the results so far are positive. Online bookings rose steadily in September and October, and phone calls to reception fell sharply. The reception team says they now have more time for patients at the desk.\n\nMoving on to the problems. Some older patients find the system difficult to use, and the number of missed appointments stayed the same. We had hoped it would fall. We are now testing text-message reminders the day before each appointment.\n\nNext steps: the system will start in our York clinic in January and in Hull in March. Before that, we will make the booking page simpler, and we will train all reception staff.\n\nThe budget is on track. We have spent about 60% of the money, and we expect to finish the project slightly under budget.\n\nTo sum up: a good start, with one or two problems to solve. If you have any questions, please send them to me before our meeting on Friday.\n\nBest,\nCarlos' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the update. True, false or not given?', items: [
            { q: 'The system is already used in all three clinics.', a: 'f', why: 'Only in Leeds. York starts in January and Hull in March.' },
            { q: 'Phone calls to reception went down a lot.', a: 't', why: '*Phone calls to reception fell sharply.*' },
            { q: 'Missed appointments fell after the system started.', a: 'f', why: '*The number of missed appointments stayed the same.*' },
            { q: 'Patients in Leeds pay less for appointments now.', a: 'ng', why: 'The update says nothing about what patients pay.' },
            { q: 'The project will probably cost a little less than planned.', a: 't', why: '*Slightly under budget*: a little less than planned.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Online bookings in September and October: ___', o: ['rose steadily', 'fell sharply', 'stayed the same'], why: '*Online bookings rose steadily in September and October.*' },
            { q: 'When will the system start in Hull?', o: ['In March', 'In January', 'On 1 September'], why: '*In York in January and in Hull in March.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the signposting phrase in each sentence.', items: [
            { s: '[Moving] [on] [to] the problems, some patients find the system difficult.', why: '*Moving on to…* starts a new part of the update.' },
            { s: '[To] [sum] [up], it was a good start.', why: '*To sum up* introduces the summary.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the update.', items: [
            { q: 'The budget is on ___: there are no problems with the money.', a: ['track'], why: '*On track*: going as planned.' },
            { q: 'We expect to finish slightly ___ budget.', a: ['under'], why: '*Under budget*: it costs less than planned.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Last year prices ___ by four per cent.', o: ['rose', 'raised', 'rised'], why: 'No object: *rise*, past simple *rose*.' },
      { q: 'A small change: sales rose ___.', o: ['slightly', 'sharply', 'highly'], why: '*Slightly*: a little.' },
      { q: '___ sum up, it was a very good year.', o: ['To', 'For', 'In'], why: '*To sum up*.' },
      { q: 'Costs ___ last month, so we saved money.', o: ['fell', 'rose', 'raised'], why: 'We saved money, so costs went down: *fell*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Prices went up ___ 50p, from £3 to £3.50.', a: ['by'], why: 'The size of the change: *by*.' },
      { q: 'The team grew from eight ___ twelve people.', a: ['to'], why: '*From… to…*' },
      { q: 'Thank you for ___ (listen).', a: ['listening'], why: '*Thank you for* + *-ing*.' },
      { q: 'Last month our costs ___ (fall) slightly.', a: ['fell'], why: 'Past simple of *fall*: *fell*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'The number of orders stayed the same.', why: '*Stay the same*: no change.' },
      { a: 'Let’s look at the next slide.', why: '*Let’s* + verb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['sharply', 'a lot and fast'],
      ['slightly', 'a little'],
      ['steadily', 'slowly and regularly'],
      ['stay the same', 'not change'],
    ] },
  ],
};
