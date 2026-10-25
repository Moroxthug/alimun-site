// English B1 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Problems, complaints and solutions',
  goal: 'Explain problems, deal with complaints and agree on solutions.',
  art: 'monster',
  tags: { skills: ['speaking', 'writing', 'reading', 'grammar'], topics: ['problems', 'apologising', 'will-promises', 'complaint-email'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Problems and apologies',
      about: 'Explain what has gone wrong and why, and apologise in a professional way.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'When you describe a problem at work, say clearly **what** happened and **why**. The present perfect is common for a problem that you can see now. For the cause, use *because*, *because of* or *due to*.' },
          { t: 'examples', items: [
            { s: 'The printer **has stopped** working.', n: 'Present perfect: the problem is there now.' },
            { s: 'The order is late **because** the driver was ill.', n: '*Because* + subject + verb.' },
            { s: 'The flight was cancelled **because of** the snow.', n: '*Because of* + a noun.' },
            { s: 'The office is closed **due to** a power cut.', n: '*Due to* + a noun. It is more formal than *because of*.' },
          ] },
        ],
        [
          { t: 'text', md: 'A good apology is short. Say sorry, show that you understand, take responsibility if it was your mistake, and say what you will do.' },
          { t: 'table', caption: 'Apologising at work', explain: ['head', 'col0'], quiz: true, head: ['', 'Neutral', 'More formal'], rows: [
            ['Saying sorry', 'I’m really sorry about this.', 'We apologise for the delay.'],
            ['Taking responsibility', 'That was our mistake.', 'The error was on our side.'],
            ['Showing you understand', 'I can see why you’re upset.', 'I fully understand your concerns.'],
            ['Saying what happens next', 'I’ll look into it straight away.', 'We are looking into the matter.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say *sorry about* or *sorry for* + noun: *I’m sorry about the mistake.* With *apologise*, use *for*: *We apologise for the delay.* British English writes *apologise*; American English writes *apologize*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'The meeting was postponed ___ the train strike.', o: ['because of', 'because', 'due'], why: 'Before a noun (*the train strike*): *because of*.' },
            { q: 'We are late ___ the traffic was terrible.', o: ['because', 'because of', 'due to'], why: 'Before subject + verb (*the traffic was*): *because*.' },
            { q: 'Our website ___ down since this morning.', o: ['has been', 'was', 'is being'], why: '*Since this morning*: up to now, so present perfect.' },
            { q: 'I’m sorry ___ the mistake.', o: ['about', 'to', 'of'], why: '*Sorry about* (or *sorry for*) + noun.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with *because*, *because of* or *due to*.', items: [
            { q: 'The shop is closed today ___ illness.', a: ['due to', 'because of'], why: 'Before a noun: *due to* or *because of*.' },
            { q: 'I couldn’t open the file ___ it was damaged.', a: ['because'], why: 'Before subject + verb: *because*.' },
            { q: 'Many trains are late ___ the bad weather.', a: ['because of', 'due to'], why: 'Before a noun: *because of* or *due to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verb in the present perfect.', items: [
            { s: 'Sorry, the system [has] [crashed] again.', why: '*Has* + past participle: the problem is there now.' },
            { s: 'Our supplier [hasn’t] [sent] the parts yet.', why: '*Hasn’t* + past participle, often with *yet*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’m really sorry about the mistake.', why: '*Sorry about* + noun.' },
            { a: 'The delivery hasn’t arrived yet.', why: '*Yet* goes at the end of a negative sentence.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Solutions and promises',
      about: 'Suggest solutions and promise action with *will*.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'After an apology, offer a solution. Use *will* (*’ll*) for a decision or a promise that you make now. *We’ll make sure…* is a strong promise that the problem will not happen again.' },
          { t: 'examples', items: [
            { s: '**I’ll** send you a new one today.', n: 'A promise you make now.' },
            { s: '**We’ll make sure** this doesn’t happen again.', n: 'A strong promise. After *make sure*, use the present simple.' },
            { s: '**We could** send an engineer tomorrow morning.', n: '*Could* + verb: a possible solution.' },
            { s: '**Would it help if** we sent you a new one?', n: 'A polite offer. The verb after *if* is in the past simple here.' },
            { s: '**Let me** check with the warehouse and call you back.', n: '*Let me* + verb: you offer to do something.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'A problem with an order', lines: [
            { who: 'Mr Clarke', s: 'Hello, I’m calling about my order. You sent twenty chairs, but we ordered thirty.' },
            { who: 'Ayumi', s: 'I’m really sorry about that, Mr Clarke. Let me check your order… Yes, you’re right. That was our mistake.' },
            { who: 'Mr Clarke', s: 'We need them for a conference on Thursday.' },
            { who: 'Ayumi', s: 'I understand. I’ll send the other ten chairs by express delivery. They’ll arrive tomorrow.' },
            { who: 'Mr Clarke', s: 'OK. And who pays for the express delivery?' },
            { who: 'Ayumi', s: 'We will, of course. And we’ll make sure your next order is checked twice before it leaves.' },
            { who: 'Mr Clarke', s: 'Thank you. That’s very helpful.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Mr Clarke received fewer chairs than he ordered.', a: 't', why: 'He got twenty, but he ordered thirty.' },
            { q: 'Ayumi says the mistake was Mr Clarke’s.', a: 'f', why: 'She says *That was our mistake.*' },
            { q: 'Mr Clarke must pay for the express delivery.', a: 'f', why: '*We will, of course*: the company pays.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Don’t worry. I ___ you the file again right now.', o: ['will send', 'send', 'sent'], why: 'A promise you make now: *will* + verb.' },
            { q: 'We’ll make ___ this doesn’t happen again.', o: ['sure', 'safe', 'true'], why: 'The phrase is *make sure*.' },
            { q: 'Would it help ___ we sent you a new one?', o: ['if', 'that', 'what'], why: '*Would it help if…?* is a polite offer.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the promises and offers.', items: [
            { q: '___ me check that for you.', a: ['Let'], why: '*Let me* + verb: an offer.' },
            { q: 'I promise I ___ call you back in ten minutes.', a: ['will', '’ll'], why: 'A promise: *will* + verb.' },
            { q: 'We ___ offer you a refund or a new product. Which would you prefer?', a: ['could', 'can'], why: '*Could* or *can* + verb: possible solutions.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'We’ll make sure this doesn’t happen again.', why: '*Make sure* + a sentence in the present simple.' },
            { a: 'Let me check with my manager.', why: '*Let me* + verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a complaint and a reply',
      about: 'Read a complaint email and the reply, and see how each one is organised.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A good complaint email is polite but firm. It says what went wrong, what the result was and what the writer wants. A good reply thanks the writer, apologises, explains the cause and offers a solution.' },
          { t: 'reading', title: 'Subject: Problems with our office cleaning', md: 'Dear Mr Bianchi,\n\nI am writing to complain about the cleaning service at our office on Harbour Street.\n\nSince the beginning of this month, the cleaners have arrived late almost every evening, and twice they did not come at all. As a result, the kitchen and the meeting rooms were not clean for two important client visits. When I called your office last Tuesday, I was told that someone would call me back, but nobody did.\n\nWe have used your company for three years and we have always been happy with the service until now. However, I am not prepared to pay the full price for this month.\n\nI would be grateful if you could explain what has happened and tell me how you will solve the problem.\n\nI look forward to hearing from you.\n\nKind regards,\nFatima Rahman\nOffice Manager' },
        ],
        [
          { t: 'reading', title: 'Re: Problems with our office cleaning', md: 'Dear Ms Rahman,\n\nThank you for your email, and I am very sorry for the problems with our service this month.\n\nI have looked into the matter. Two of our cleaners left the company in September, and we did not replace them quickly enough. I also apologise that nobody called you back. That should not have happened.\n\nFrom next Monday, a new team of two cleaners will work at your office every evening from 6 pm. Their supervisor, Joseph, will check the work once a week and send you a short report.\n\nWe will also give you a 30% discount on this month’s invoice.\n\nWe value our work with you, and we will make sure this does not happen again. Please call me directly if you have any questions.\n\nKind regards,\nPaolo Bianchi\nCustomer Service Manager' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read both emails. True, false or not given?', items: [
            { q: 'Twice the cleaners did not come at all.', a: 't', why: '*Twice they did not come at all.*' },
            { q: 'Ms Rahman has used the company for three months.', a: 'f', why: 'For *three years*.' },
            { q: 'Somebody from the company called Ms Rahman back.', a: 'f', why: '*Someone would call me back, but nobody did.*' },
            { q: 'The cleaning company is the biggest in the city.', a: 'ng', why: 'The emails say nothing about the size of the company.' },
            { q: 'The problems started because some cleaners left the company.', a: 't', why: '*Two of our cleaners left the company in September.*' },
            { q: 'Ms Rahman will pay the full price for this month.', a: 'f', why: 'She gets a 30% discount on this month’s invoice.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each point in the complaint with the answer in the reply.', pairs: [
            ['The cleaners have arrived late almost every evening.', 'A new team will work at your office every evening from 6 pm.'],
            ['Nobody called me back.', 'I also apologise that nobody called you back.'],
            ['I am not prepared to pay the full price.', 'We will also give you a 30% discount.'],
            ['Please explain what has happened.', 'Two of our cleaners left the company in September.'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'The train is late ___ a problem with the signals.', o: ['due to', 'because', 'since'], why: 'Before a noun: *due to* (or *because of*).' },
      { q: 'Oh no, the computer ___ again. Can you help?', o: ['has crashed', 'crash', 'is crash'], why: 'A problem you see now: present perfect.' },
      { q: 'We ___ make sure it doesn’t happen again.', o: ['will', 'are', 'would to'], why: 'A promise: *will* + verb.' },
      { q: 'I’m really sorry ___ the delay.', o: ['about', 'of', 'to'], why: '*Sorry about* (or *for*) + noun.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ me look into it and call you back.', a: ['Let'], why: '*Let me* + verb: an offer.' },
      { q: 'I am writing to ___ about the service.', a: ['complain'], why: '*I am writing to complain about…* opens a complaint email.' },
      { q: 'The meeting was cancelled ___ of the storm.', a: ['because'], why: '*Because of* + noun.' },
      { q: 'We ___ (not / receive) your payment yet.', a: ['haven’t received', 'have not received'], why: 'Present perfect with *yet*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'We apologise for the delay.', why: '*Apologise for* + noun.' },
      { a: 'That was our mistake.', why: 'Taking responsibility.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the words that introduce the cause.', items: [
      { s: 'The office is closed [due] [to] a power cut.', why: '*Due to* + noun gives the cause.' },
      { s: 'We are late [because] the motorway was closed.', why: '*Because* + subject + verb gives the cause.' },
    ] },
  ],
};
