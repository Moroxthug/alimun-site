// English B1, unit 3, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u3',
  title: 'Getting around',
  goal: 'Talk about rules and what is allowed, ask politely for information and directions, deal with travel problems, and understand a guide to a city.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['modals-obligation', 'indirect-questions', 'directions', 'travel-problems'], goals: ['foundations', 'relocation'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Rules and permission',
      about: 'Say what is necessary, what is not necessary, what is not allowed and what is allowed, now and in the past.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At airports, stations and borders there are a lot of rules. English has a small group of verbs for talking about them. At A2 you used **can** and **should**. At B1 you need to tell the difference between four ideas: something is **necessary**, something is **not necessary**, something is **not allowed**, and something is **allowed**.\n\n**Must** and **have to** both say that something is necessary. In everyday speech, **have to** is more common, especially for rules that come from other people: the airline, your boss, the law. **Must** often shows what the speaker personally thinks is important, and it is very common in written rules and on signs.' },
          { t: 'examples', items: [
            { s: 'You **have to** show your passport at the gate.', n: 'The airport’s rule.' },
            { s: 'I **must** remember to buy a present for my sister.', n: 'I think it is important.' },
            { s: 'Passengers **must** keep their bags with them at all times.', n: 'A written rule, on a sign or a notice.' },
            { s: 'Does she **have to** change trains in Leeds?', n: 'Questions are usually with *have to*.' },
          ] },
          { t: 'tip', art: 'owl', md: '**Must** has no past form and no *-ing* form. For the past, use **had to**: *We had to wait two hours for our flight.* For the future, use **will have to**: *You’ll have to buy a new ticket.*' },
        ],
        [
          { t: 'text', md: 'The negatives are where most learners make mistakes, because **mustn’t** and **don’t have to** look similar but mean very different things.\n\n**Mustn’t** means *it is not allowed; don’t do it*: *You mustn’t smoke on the train.*\n\n**Don’t have to** means *it is not necessary; you can choose*: *You don’t have to print your ticket; you can show it on your phone.*\n\nFor permission, use **can** and **be allowed to**. *Can* is more common in speech; *be allowed to* sounds a little more formal and works in every tense: *We weren’t allowed to take photos in the museum.*' },
          { t: 'table', caption: 'Obligation and permission', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['must / have to', 'it is necessary', 'You have to check in two hours before.'],
            ['mustn’t', 'it is not allowed', 'You mustn’t leave your bags here.'],
            ['don’t have to', 'it is not necessary', 'You don’t have to book; just come.'],
            ['can / be allowed to', 'it is allowed', 'You can take one small bag.'],
            ['can’t / not be allowed to', 'it is not allowed', 'You aren’t allowed to park here.'],
            ['had to / was allowed to', 'the past', 'We had to pay extra. We were allowed to stay.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You mustn’t pay; it’s free.', 'You don’t have to pay; it’s free.', 'Not necessary: *don’t have to*.'],
            ['I must to go now.', 'I must go now.', 'No *to* after *must*.'],
            ['Yesterday I must work late.', 'Yesterday I had to work late.', '*Must* has no past: *had to*.'],
            ['Do you must wear a uniform?', 'Do you have to wear a uniform?', 'Questions with *have to*.'],
            ['We are not allow to swim.', 'We aren’t allowed to swim.', '*be allowed to*, with *-ed*.'],
          ] },
          { t: 'dialogue', title: 'At the check-in desk', lines: [
            { who: 'Agent', s: 'Good morning. Can I see your passport, please?' },
            { who: 'Guest', s: 'Here you are. Do I have to check in this bag?' },
            { who: 'Agent', s: 'No, you don’t have to. It’s small enough to take on the plane.' },
            { who: 'Guest', s: 'Great. And am I allowed to take this bottle of water?' },
            { who: 'Agent', s: 'I’m afraid not. You mustn’t take liquids through security, but you can buy drinks after it.' },
            { who: 'Guest', s: 'OK. Last time I had to throw away a bottle of perfume!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
            { q: '“You don’t have to bring food; there’s a café.”', o: ['It isn’t necessary to bring food.', 'You can’t bring food.', 'You must bring food.'], why: '*don’t have to* = not necessary.' },
            { q: '“You mustn’t use your phone during the exam.”', o: ['Using your phone is not allowed.', 'Using your phone is not necessary.', 'You can use your phone if you want.'], why: '*mustn’t* = not allowed.' },
            { q: '“We were allowed to leave early.”', o: ['We had permission to leave early.', 'We had to leave early.', 'We didn’t leave early.'], why: '*be allowed to* = permission.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'Last year we ___ show our tickets three times on one journey.', o: ['had to', 'must', 'have to'], why: 'The past of *must* or *have to*: *had to*.' },
            { q: 'You ___ book a table. The restaurant is never full.', o: ['don’t have to', 'mustn’t', 'can’t'], why: 'Not necessary: *don’t have to*.' },
            { q: 'Children ___ to swim here without an adult.', o: ['aren’t allowed', 'mustn’t', 'don’t have'], why: 'Only *be allowed* is followed by *to* here.' },
            { q: '___ we have to change trains?', o: ['Do', 'Must', 'Are'], why: 'Questions with *have to* use *do*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'When I was at school we [must] wear a uniform.', a: ['had to'], why: '*must* has no past form: *had to*.' },
            { s: 'You [mustn’t] pay for the museum on Sundays; it’s free.', a: ['don’t have to'], why: 'Free means not necessary: *don’t have to*.' },
            { s: 'Are we [allow] to bring our dog?', a: ['allowed'], why: '*be allowed to*.' },
            { s: 'I [must to] leave at six tomorrow.', a: ['must', 'have to'], why: 'No *to* after *must*: *I must leave*, or *I have to leave*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'It isn’t necessary to wear a tie.', cue: 'have', a: ['You don’t have to wear a tie.', 'You don’t have to wear a tie'], why: 'Not necessary: *don’t have to*.' },
            { q: 'Smoking is not allowed in the station.', cue: 'allowed', a: ['You aren’t allowed to smoke in the station.', 'You are not allowed to smoke in the station.'], why: '*be allowed to* + verb.' },
            { q: 'It was necessary for us to pay in cash.', cue: 'had', a: ['We had to pay in cash.'], why: 'Past necessity: *had to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 1): what does each notice say?', items: [
            { q: 'Notice: “Platform 4. Passengers for Oxford: tickets must be shown before boarding. No bicycles at peak times.”', o: ['You need to show your ticket before you get on the train.', 'You can buy your ticket on the train.', 'Bicycles are never allowed on this train.'], why: '*must be shown before boarding* = you have to show it first. Bicycles are only stopped *at peak times*.' },
            { q: 'Message: “Hi Ana, you don’t have to pick me up from the airport. Tom’s driving me home. See you tomorrow! Kate”', o: ['Kate doesn’t need Ana to collect her.', 'Kate wants Ana to drive her home.', 'Ana isn’t allowed to come to the airport.'], why: '*don’t have to* = not necessary.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1 of the B1 Preliminary reading paper you read five short texts (signs, notices, messages) and choose what each one says. The wrong options often use **the same words** as the text with a different meaning. Watch the modal verbs: *mustn’t* and *don’t have to* are a favourite trap.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'You don’t have to print your ticket.' },
            { a: 'You mustn’t leave your bags here.' },
            { a: 'Last time we had to wait two hours.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Could you tell me where…?',
      about: 'Ask politely for information with indirect questions, and give and understand directions in a town or a building.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When you ask a stranger for information, a direct question can sound a little sudden: *Where is the station?* English speakers usually start with a polite phrase: **Could you tell me…?**, **Do you know…?**, **I was wondering…**. This is called an **indirect question**.\n\nThe important change is the **word order**. In an indirect question, the part after the question word has normal sentence order: **subject + verb**, not verb + subject. So *Where **is** the station?* becomes *Could you tell me where **the station is**?* And *do*, *does* and *did* disappear: *What time **does** the bus leave?* becomes *Do you know what time **the bus leaves**?*' },
          { t: 'table', caption: 'Direct and indirect questions', explain: ['head'], head: ['Direct', 'Indirect'], rows: [
            ['Where is the station?', 'Could you tell me where the station is?'],
            ['What time does the bus leave?', 'Do you know what time the bus leaves?'],
            ['How much did the tickets cost?', 'Can you tell me how much the tickets cost?'],
            ['Is this the right platform?', 'Do you know if this is the right platform?'],
            ['Does the museum open on Mondays?', 'Could you tell me whether the museum opens on Mondays?'],
          ] },
          { t: 'tip', art: 'owl', md: 'For a yes or no question, use **if** or **whether**: *Is it far?* becomes *Do you know **if** it’s far?* Indirect questions ending with *Could you tell me…?* or *Do you know…?* still need a **question mark**. Ones that start with *I wonder* or *I was wondering* end with a full stop.' },
        ],
        [
          { t: 'text', md: 'To give directions, English uses the **imperative**, the verb without a subject: *Go straight on. Turn left.* Add **sequence words** so the listener can follow: **first**, **then**, **after that**, **when you get to…**, **at the end of the street**.\n\nUseful phrases for directions: **go past** the church, **cross** the road, **take the second turning on the right**, **it’s on your left**, **you can’t miss it**, **it’s about five minutes’ walk**. Inside a building: **go up to the second floor**, **take the lift**, **go through the double doors**, **it’s at the end of the corridor**.' },
          { t: 'examples', items: [
            { s: '**Go straight on** and **take the second turning on the right**.', n: 'Not the first street: the second.' },
            { s: '**Go past** the cinema and the museum **is on your left**.', n: '*go past* = walk next to it and continue.' },
            { s: '**When you get to** the traffic lights, **cross the road**.', n: 'A point on the way, then an instruction.' },
            { s: 'Take the lift **up to the third floor**. The office is **at the end of the corridor**.', n: 'Inside a building.' },
            { s: 'It’s **about ten minutes’ walk** from here.', n: 'Note the apostrophe: *minutes’*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Could you tell me where is the bank?', 'Could you tell me where the bank is?', 'Subject before verb in an indirect question.'],
            ['Do you know what time does it open?', 'Do you know what time it opens?', 'No *does* in an indirect question.'],
            ['Do you know is it far?', 'Do you know if it’s far?', 'Yes or no questions need *if* or *whether*.'],
            ['Turn in the left.', 'Turn left.', 'No *in the* with *turn left / right*.'],
            ['It’s on the left side of you.', 'It’s on your left.', 'The usual phrase is *on your left*.'],
          ] },
          { t: 'dialogue', title: 'In the station', lines: [
            { who: 'Elena', s: 'Excuse me, could you tell me where the left-luggage office is?' },
            { who: 'Guard', s: 'Of course. Go down the stairs and turn right. It’s next to the ticket office.' },
            { who: 'Elena', s: 'Thank you. And do you know if there’s a bus to the old town from here?' },
            { who: 'Guard', s: 'Yes, the number 12. The stop is just outside the main entrance, on your left.' },
            { who: 'Elena', s: 'Great. Do you happen to know how often it runs?' },
            { who: 'Guard', s: 'Every ten minutes, I think. You can’t miss it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order to make polite questions.', items: [
            { a: 'Could you tell me where the museum is?', why: 'After *where*: subject (*the museum*), then verb (*is*).' },
            { a: 'Do you know what time the last train leaves?', why: 'No *does*: *the last train leaves*.' },
            { a: 'Do you know if this bus goes to the airport?', why: 'A yes or no question: *if* + subject + verb.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the question polite. Start with the words given.', items: [
            { q: 'Where is the nearest pharmacy?', cue: 'Could you tell me', a: ['Could you tell me where the nearest pharmacy is?'], why: 'Subject before verb: *the nearest pharmacy is*.' },
            { q: 'When does the museum close?', cue: 'Do you know', a: ['Do you know when the museum closes?'], why: 'No *does*; the verb takes *-s*: *closes*.' },
            { q: 'Is the castle open today?', cue: 'Do you know', a: ['Do you know if the castle is open today?', 'Do you know whether the castle is open today?'], why: 'Yes or no question: *if* or *whether*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading, Part 6): write one word in each gap.', items: [
            { q: 'Could you tell me where the swimming pool ___?', a: ['is'], why: 'Subject *the swimming pool*, then the verb *is*.' },
            { q: 'Go straight on and take the second turning ___ the right.', a: ['on'], why: '*on the right*.' },
            { q: 'Do you know ___ the shop is open on Sundays?', a: ['if', 'whether'], why: 'A yes or no question: *if* or *whether*.' },
            { q: 'Go ___ the bank and the café is on your left.', a: ['past'], why: '*go past* a place.' },
            { q: 'It’s about five minutes’ ___ from here.', a: ['walk'], why: '*five minutes’ walk*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 6 of the B1 Preliminary reading paper there is a short text with six gaps and no options: you write **one word** in each gap. The missing words are usually small grammar words: prepositions (*on, at, past*), pronouns, auxiliaries (*is, do, have*) and words like *if*. Read the whole sentence before you write.' },
          { t: 'ex', kind: 'speak', h: 'Ask politely. Say these questions after the tutor.', tutor: 'arthur', items: [
            { a: 'Could you tell me where the station is?' },
            { a: 'Do you know if this bus goes to the centre?' },
            { a: 'Go past the church and turn left.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'When things go wrong',
      about: 'Talk about delays, cancellations and lost luggage, complain politely, and ask for help.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Travel does not always go to plan. To deal with problems, you need two kinds of language: words for what went wrong, and polite phrases for asking someone to help.\n\nThe key words: a train or flight can be **delayed** (it leaves late) or **cancelled** (it does not go at all). You can **miss** a train (you arrive too late) or **catch** it (you get on it in time). Your luggage can be **lost** or **damaged**. You may need a **refund** (your money back) or a **replacement** (another one).\n\nWhen something goes wrong, English speakers often say it is a problem with the thing, not a mistake by the person: *There seems to be a problem with my booking* sounds much better than *You made a mistake*.' },
          { t: 'table', caption: 'Travel problems', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['delayed', 'later than planned', 'Our flight was delayed by three hours.'],
            ['cancelled', 'it will not happen', 'The 9.15 train has been cancelled.'],
            ['miss', 'arrive too late for it', 'We missed the last bus.'],
            ['a refund', 'your money back', 'Can I get a refund for this ticket?'],
            ['a connection', 'the next train or flight on a journey', 'I’m going to miss my connection.'],
            ['lost luggage', 'bags that did not arrive', 'I need to report some lost luggage.'],
          ] },
        ],
        [
          { t: 'text', md: 'To complain or ask for help politely, use softer phrases. Start with **I’m afraid…** or **I’m sorry, but…** to introduce the problem. Use **Could you…?** or **Would it be possible to…?** to ask for something. Use **I’d like to…** to say what you want. And keep calm: in English, a polite complaint usually gets better results than an angry one.' },
          { t: 'examples', items: [
            { s: '**I’m afraid** my suitcase didn’t arrive.', n: 'Introduces a problem politely.' },
            { s: '**Would it be possible to** change my seat?', n: 'A very polite request.' },
            { s: '**I’d like to** make a complaint about the delay.', n: 'Says what you want, firmly but politely.' },
            { s: '**There seems to be** a problem with my booking.', n: 'Talks about the problem, not the person’s mistake.' },
            { s: '**Could you** put me on the next flight?', n: 'A direct but polite request.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I lost the train.', 'I missed the train.', 'You *miss* a train, a bus or a flight.'],
            ['The flight is late of two hours.', 'The flight is delayed by two hours.', '*delayed by* + time.'],
            ['I want my money back now!', 'I’d like a refund, please.', 'Softer and more polite.'],
            ['Is possible to change it?', 'Is it possible to change it?', 'The sentence needs *it*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the lost luggage desk', lines: [
            { who: 'Clerk', s: 'Good afternoon. How can I help you?' },
            { who: 'Daniel', s: 'I’m afraid my suitcase didn’t arrive. I was on the flight from Lisbon.' },
            { who: 'Clerk', s: 'I’m sorry to hear that. Could you describe the bag, please?' },
            { who: 'Daniel', s: 'It’s a large blue suitcase with a yellow ribbon on the handle.' },
            { who: 'Clerk', s: 'Thank you. It probably missed the connection in Madrid. It should arrive on the next flight.' },
            { who: 'Daniel', s: 'Would it be possible to send it to my hotel?' },
            { who: 'Clerk', s: 'Of course. Just write the address here, and we’ll deliver it this evening.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. Are the sentences true or false?', items: [
            { q: 'Daniel’s bag was damaged on the flight.', a: 'f', why: 'It didn’t arrive; it was not damaged.' },
            { q: 'The bag probably stayed in Madrid.', a: 't', why: '*It probably missed the connection in Madrid.*' },
            { q: 'Daniel has to come back to the airport for his bag.', a: 'f', why: 'They will deliver it to his hotel.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the box.', extra: ['lost', 'caught'], items: [
            { q: 'Our train was ___ by forty minutes because of the snow.', a: 'delayed', why: 'Later than planned: *delayed*.' },
            { q: 'We ran to the station but we ___ the last train.', a: 'missed', why: 'Arrived too late: *missed*.' },
            { q: 'The concert was ___, so they gave everyone their money back.', a: 'cancelled', why: 'It did not happen: *cancelled*.' },
            { q: 'I’d like a ___ for this ticket, please.', a: 'refund', why: 'Money back: *a refund*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which is the most polite?', items: [
            { q: '', o: ['Would it be possible to change my room?', 'Change my room.', 'You must change my room.'], why: '*Would it be possible to…?* is very polite.' },
            { q: '', o: ['I’m afraid there’s a problem with my bill.', 'Your bill is wrong.', 'You made a mistake with my bill.'], why: 'Talk about the problem, not the person.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 5): choose the right word for each gap in this email.', items: [
            { q: 'Dear Sir or Madam, I am writing to complain about my journey on 3 May. The train was ___ by over two hours.', o: ['delayed', 'missed', 'lost'], why: 'Later than planned: *delayed by*.' },
            { q: 'Because of this, I ___ my connection to Glasgow.', o: ['missed', 'lost', 'cancelled'], why: 'You *miss* a connection.' },
            { q: 'I would like to ask for a ___ for my ticket.', o: ['refund', 'return', 'repair'], why: 'Money back: *a refund*.' },
            { q: 'I look forward ___ hearing from you.', o: ['to', 'for', 'at'], why: 'The fixed phrase is *look forward to* + *-ing*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5 of the B1 Preliminary reading paper you choose the right word for six gaps in a short text. The four options often have **similar meanings** (*miss, lose, cancel*); only one fits the **collocation** or the grammar around the gap. Learn words in pairs: *miss a train, catch a bus, make a complaint*.' },
          { t: 'ex', kind: 'speak', h: 'Complain politely. Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I’m afraid my suitcase didn’t arrive.' },
            { a: 'Would it be possible to change my seat?' },
            { a: 'I’d like to make a complaint about the delay.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A weekend in Kelmouth',
      about: 'Read a traveller’s guide to a city, find the important details, and use the language of the unit together.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Guides for travellers mix the language of this unit: rules (*you have to buy a ticket before you get on*), polite information (*ask at the tourist office if…*), directions (*from the station, go straight on*) and advice for when things go wrong.\n\nWhen you read a guide, you rarely need every word. First read quickly to see **what each paragraph is about**. Then read again slowly to find the **details** you need: times, prices, rules. This is also how you should read the long texts in the exam.' },
          { t: 'reading', title: 'Kelmouth: a guide for a short break', md: 'Kelmouth is a small harbour town on the south coast, and it is easy to visit by train. From the station, go straight down Harbour Road and you will see the sea after about five minutes’ walk. The tourist office is on the corner of Harbour Road and Market Street; ask there if you need a map or want to know what is on.\n\nGetting around is simple. The town centre is closed to cars, so you have to park at the large car park next to the station. Local buses run every twenty minutes, but you don’t have to buy a ticket in advance: you can pay the driver by card. In summer, a small boat takes visitors across the bay to Fenwick Island. You are not allowed to take bicycles on the boat, and dogs must stay on a lead.\n\nThe castle above the town is open every day except Monday. You don’t have to book, but in July and August it gets very busy, so go early. The best fish restaurant, The Anchor, is famous and small: if you want a table at the weekend, you must book a few days before.\n\nIf something goes wrong, the staff at the tourist office are very helpful. Last summer, when storms cancelled the island boats for two days, they helped visitors change their bookings and find other trips.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the guide. Are the sentences true, false or not given?', items: [
            { q: 'You can see the sea from the station.', a: 'f', why: 'You see it after about five minutes’ walk.' },
            { q: 'Visitors can drive into the town centre.', a: 'f', why: 'The town centre is closed to cars.' },
            { q: 'You can pay for the bus on the bus.', a: 't', why: 'You can pay the driver by card.' },
            { q: 'The boat to Fenwick Island runs all year.', a: 'f', why: 'It runs *in summer*.' },
            { q: 'The castle has a café.', a: 'ng', why: 'The guide does not say.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the rule in the guide with its meaning.', pairs: [
            ['You have to park next to the station.', 'It is necessary.'],
            ['You don’t have to buy a bus ticket in advance.', 'It is not necessary.'],
            ['You are not allowed to take bicycles on the boat.', 'It is not permitted.'],
            ['You must book The Anchor at the weekend.', 'It is necessary, says the writer.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 3): read the guide again and choose the right answer.', items: [
            { q: 'Why should you go to the castle early in the summer?', o: ['Because a lot of people visit it then.', 'Because it closes at lunchtime.', 'Because you have to book a ticket.'], why: '*In July and August it gets very busy, so go early.*' },
            { q: 'What does the writer say about The Anchor?', o: ['It is popular, so you need to book at the weekend.', 'It is the only restaurant in Kelmouth.', 'It is open every day except Monday.'], why: '*famous and small… you must book a few days before.*' },
            { q: 'What happened last summer?', o: ['The boats stopped because of bad weather.', 'The tourist office closed for two days.', 'The castle was closed because of storms.'], why: '*storms cancelled the island boats for two days*.' },
            { q: 'What is the writer’s main aim?', o: ['To help visitors plan a short trip.', 'To complain about the town’s buses.', 'To tell the history of the castle.'], why: 'It is a guide with practical information.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 3 of the B1 Preliminary reading paper there is one long text with five questions. The questions follow the **order of the text**, and the last one is often about the **whole text**: the writer’s aim or opinion. For that question, think about why the text was written.' },
        ],
        [
          { t: 'text', md: 'Now imagine you are planning a weekend in Kelmouth. Use the language of the whole unit: what you have to do and what you don’t have to do, polite questions for the tourist office, and directions from the station.' },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'Could you tell me when the castle opens?', extra: ['does', 'is'], why: 'Indirect question: no *does*; subject before verb.' },
            { a: 'We don’t have to book the bus.', extra: ['mustn’t', 'to'], why: 'Not necessary: *don’t have to*, not *mustn’t*. There is already one *to* after *have*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Plan your visit. Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Do you know if the boat runs on Sundays?' },
            { a: 'We have to park next to the station.' },
            { a: 'You don’t have to book the castle.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'You ___ pay for the concert; it’s free.', o: ['don’t have to', 'mustn’t', 'can’t'], why: 'Not necessary: *don’t have to*.' },
      { q: 'You ___ use your phone in the library. It’s against the rules.', o: ['mustn’t', 'don’t have to', 'needn’t'], why: 'Not allowed: *mustn’t*.' },
      { q: 'Yesterday I ___ get up at five to catch my flight.', o: ['had to', 'must', 'have to'], why: 'Past: *had to*.' },
      { q: 'We weren’t ___ to take photos inside.', o: ['allowed', 'allow', 'can'], why: '*be allowed to*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the question polite. Start with the words given.', items: [
      { q: 'Where is the bus station?', cue: 'Could you tell me', a: ['Could you tell me where the bus station is?'], why: 'Subject before verb.' },
      { q: 'What time does the film start?', cue: 'Do you know', a: ['Do you know what time the film starts?'], why: 'No *does*; *starts*.' },
      { q: 'Is the hotel near the beach?', cue: 'Do you know', a: ['Do you know if the hotel is near the beach?', 'Do you know whether the hotel is near the beach?'], why: '*if* or *whether*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Go straight on and turn ___ at the traffic lights.', a: ['left', 'right'], why: '*turn left* or *turn right*.' },
      { q: 'The museum is ___ your right, next to the bank.', a: ['on'], why: '*on your right*.' },
      { q: 'Our flight was delayed ___ three hours.', a: ['by'], why: '*delayed by* + time.' },
    ] },
    { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the box.', extra: ['lost'], items: [
      { q: 'We got to the platform just in time to ___ the train.', a: 'catch', why: 'Get on it in time: *catch*.' },
      { q: 'The 8.40 bus was ___ because the driver was ill.', a: 'cancelled', why: 'It did not run: *cancelled*.' },
      { q: 'They gave me a ___ because the hotel was full.', a: 'refund', why: 'Money back: *a refund*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Do you know what time [does the shop close]?', a: ['the shop closes'], why: 'Indirect question: subject + verb, no *does*.' },
      { s: 'I [lost] the bus, so I walked.', a: ['missed'], why: 'You *miss* a bus.' },
      { s: 'Do you [must] wear a helmet?', a: ['have to'], why: 'Questions with *have to*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which is the most polite?', items: [
      { q: '', o: ['I’m afraid there seems to be a problem with my booking.', 'You lost my booking.', 'My booking is wrong because of you.'], why: 'Talk about the problem, softly.' },
      { q: '', o: ['Would it be possible to have a window seat?', 'Give me a window seat.', 'I must have a window seat.'], why: '*Would it be possible to…?*' },
    ] },
  ],
};
