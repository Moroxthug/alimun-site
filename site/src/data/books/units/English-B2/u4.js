// English B2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Science and technology',
  goal: 'Explain processes and discoveries, and report what is believed.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passive', 'have-something-done', 'passive-reporting', 'science', 'technology'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'It was invented, it has been found',
      about: 'Use the passive in all tenses, and know when the passive is the better choice.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Form the **passive** with *be* in the right tense + the past participle. Only *be* changes from tense to tense; the participle stays the same.' },
          { t: 'table', caption: 'The passive in different tenses', explain: ['head', 'col0'], quiz: true, head: ['Tense', 'Active', 'Passive'], rows: [
            ['Present simple', 'They make the parts in Spain.', 'The parts are made in Spain.'],
            ['Present continuous', 'They are testing the new app.', 'The new app is being tested.'],
            ['Past simple', 'Someone stole my bike.', 'My bike was stolen.'],
            ['Past continuous', 'They were repairing the road.', 'The road was being repaired.'],
            ['Present perfect', 'They have found the problem.', 'The problem has been found.'],
            ['Past perfect', 'Someone had cancelled the flight.', 'The flight had been cancelled.'],
            ['Future with will', 'They will announce the results.', 'The results will be announced.'],
            ['Modal verbs', 'You must charge the battery.', 'The battery must be charged.'],
          ] },
        ],
        [
          { t: 'text', md: 'Use the passive when the person who does the action is unknown, unimportant or obvious, or when the action and its result matter more than who did it. It is very common in science, news and descriptions of processes. Add *by* + the person or thing only when it gives useful information.' },
          { t: 'examples', items: [
            { s: 'The samples **are kept** at minus eighty degrees.', n: 'A process: who keeps them is not important.' },
            { s: 'This bridge **was designed by** a young engineer.', n: '*By* adds information that is interesting here.' },
            { s: 'My laptop **has been stolen**!', n: 'We do not know who stole it.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not add *by people* or *by someone*: it gives no information. Say *English is spoken here*, not *English is spoken by people here*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the passive of the verb in brackets. Use the tense that fits.', items: [
            { q: 'Millions of emails ___ (send) every minute.', a: ['are sent'], why: 'A general fact: present simple passive, *are* + *sent*.' },
            { q: 'The museum is closed because it ___ (repair) at the moment.', a: ['is being repaired', '’s being repaired'], why: '*At the moment*: present continuous passive, *is being* + participle.' },
            { q: 'Penicillin ___ (discover) by accident.', a: ['was discovered'], why: 'A finished event in the past: *was* + participle.' },
            { q: 'Good news! The missing files ___ (just / find).', a: ['have just been found', '’ve just been found'], why: 'Recent news: present perfect passive, *have just been* + participle.' },
            { q: 'When we got to the box office, all the tickets ___ (already / sell).', a: ['had already been sold'], why: 'Before another past moment: past perfect passive.' },
            { q: 'The results ___ (publish) next month.', a: ['will be published', 'are going to be published'], why: 'The future: *will be* + participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'The road ___ when I drove past, so I had to take another route.', o: ['was being repaired', 'was repairing', 'has been repaired'], why: 'In progress at that past moment: past continuous passive.' },
            { q: 'All the documents must ___ before Friday.', o: ['be signed', 'signed', 'been signed'], why: 'After a modal verb: *be* + past participle.' },
            { q: 'Has the parcel ___ yet?', o: ['been delivered', 'delivered', 'be delivered'], why: 'Present perfect passive: *has* + *been* + participle.' },
            { q: 'This song ___ millions of times since it came out.', o: ['has been streamed', 'has streamed', 'was streaming'], why: '*Since*: present perfect. The song does not stream itself, so the passive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'The email has already been sent.', why: '*Already* goes after *has*, before *been*.' },
            { a: 'Was the meeting cancelled?', why: 'Past simple passive question: *Was* + subject + participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I had my phone repaired',
      about: 'Say that someone else does a job for you with have something done and get something done.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use *have* + object + past participle when someone else does a job for you, usually a service you pay for. *Get* + object + past participle means the same and is more informal.' },
          { t: 'examples', items: [
            { s: 'I **had my hair cut** yesterday.', n: 'A hairdresser cut it. Compare *I cut my hair*: I did it myself.' },
            { s: 'We**’re having** a new kitchen **fitted**.', n: 'Workers are fitting it for us at the moment.' },
            { s: 'You should **get** your eyes **tested**.', n: '*Get* is very common in speech.' },
            { s: 'She **had** her bag **stolen** on the metro.', n: 'This pattern can also describe something bad that someone did to you.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Have something done in different tenses', explain: ['head', 'col0'], head: ['Tense', 'Example'], rows: [
            ['Present simple', 'I have my car serviced every year.'],
            ['Present continuous', 'We’re having the roof repaired.'],
            ['Past simple', 'He had his phone screen replaced.'],
            ['Present perfect', 'Have you had your eyes tested recently?'],
            ['Going to', 'I’m going to get my hair coloured.'],
            ['Modal verbs', 'You should get that cut checked by a doctor.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Word order matters. The object comes **before** the participle: *I had my hair cut*. *I had cut my hair* is the past perfect, and it means I did it myself.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with *have* or *get* + the object + the past participle. Use the words in brackets.', items: [
            { q: 'I can’t see very well. I need to ___ (my eyes / test).', a: ['have my eyes tested', 'get my eyes tested'], why: 'Someone else tests your eyes: *have* or *get* + *my eyes* + *tested*.' },
            { q: 'We ___ (the house / paint) last summer.', a: ['had the house painted', 'got the house painted'], why: 'Past simple: *had* or *got* + object + participle.' },
            { q: 'She’s ___ (her wedding dress / make) at the moment.', a: ['having her wedding dress made', 'getting her wedding dress made'], why: 'Present continuous: *is having* + object + participle.' },
            { q: 'Have you ever ___ (your bag / steal)?', a: ['had your bag stolen'], why: 'Something bad that someone did to you: *had your bag stolen*.' },
            { q: 'He’s going to ___ (his car / repair) tomorrow.', a: ['have his car repaired', 'get his car repaired'], why: '*Going to* + *have* or *get* + object + participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'Which sentence means that someone else did the job?', o: ['I had my hair cut.', 'I had cut my hair.', 'I cut my hair.'], why: '*Have* + object + participle: someone did it for me.' },
            { q: 'Your brakes make a strange noise. You should get ___.', o: ['them checked', 'checked them', 'them check'], why: 'The object comes before the past participle.' },
            { q: 'Lena ___ her passport stolen while she was on holiday.', o: ['had', 'made', 'did'], why: '*Have something stolen*: something bad that someone did to her.' },
            { q: 'We’re ___ solar panels installed next week.', o: ['having', 'making', 'doing'], why: 'A future arrangement: *be having* + object + participle.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Where do you get your hair cut?', why: 'Question: *do you get* + object + participle.' },
            { a: 'We are having our kitchen redecorated.', why: 'Present continuous: *are having* + object + participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'It is said that…',
      about: 'Report what people believe without saying who believes it.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'In news, science and formal writing, we often report what people in general say or believe without saying exactly who. We do this with verbs like *say, believe, think, know, report, expect* and *consider* in the passive. There are two patterns.' },
          { t: 'table', caption: 'Passive reporting', explain: ['head', 'col0'], head: ['Pattern', 'Example'], rows: [
            ['It + passive + that', 'It is said that the castle is haunted.'],
            ['Subject + passive + to + infinitive', 'The castle is said to be haunted.'],
            ['Subject + passive + to have + past participle', 'The castle is said to have been built in the twelfth century.'],
          ] },
          { t: 'text', md: 'After the subject pattern, use *to* + infinitive for the present or the future, *to be* + *-ing* for something in progress now, and *to have* + past participle for the past.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**It is believed that** the fire started in the kitchen.', n: 'Pattern with *it*: the rest of the sentence is a normal clause.' },
            { s: 'The fire **is believed to have started** in the kitchen.', n: 'The same meaning. The fire started in the past, so *to have* + participle.' },
            { s: 'The minister **is expected to resign** today.', n: 'Something in the future: *to* + infinitive.' },
            { s: 'Thousands of people **are thought to be living** without electricity.', n: 'Something in progress now: *to be* + *-ing*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'These patterns sound neutral and careful. Writers use them when they are not completely sure, or when the source is not important. You will see them in news reports every day.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'The painting ___ to be worth two million pounds.', o: ['is thought', 'thinks', 'is thinking'], why: 'Passive of *think* + *to be*.' },
            { q: 'The thieves are believed ___ the country last night.', o: ['to have left', 'to leave', 'leaving'], why: '*Last night* is in the past: *to have* + past participle.' },
            { q: 'It ___ that the new law will reduce traffic.', o: ['is expected', 'expects', 'is expecting'], why: 'Pattern with *it*: *It is expected that…*' },
            { q: 'The singer is said ___ on a new album at the moment.', o: ['to be working', 'to have worked', 'be working'], why: 'In progress now: *to be* + *-ing*.' },
            { q: '___ is reported that two people were injured.', o: ['It', 'There', 'They'], why: 'The pattern always starts with *It*: *It is reported that…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the second sentence so that it means the same as the first.', items: [
            { q: 'People say that the island is beautiful in spring. The island ___ beautiful in spring.', a: ['is said to be'], why: 'Subject + *is said* + *to be*.' },
            { q: 'Experts believe that the Romans built the bridge. The bridge is believed ___ built by the Romans.', a: ['to have been'], why: 'A past action in the passive: *to have been* + participle.' },
            { q: 'People think that the company is losing money. The company is thought ___ money.', a: ['to be losing'], why: 'In progress now: *to be* + *-ing*.' },
            { q: 'Everyone expects that prices will rise. Prices are expected ___ rise.', a: ['to'], why: 'The future: *to* + infinitive.' },
            { q: 'The police know that the man visited the house before. It ___ that the man visited the house before.', a: ['is known'], why: 'Pattern with *it*: *It is known that…*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'He is thought to be in Paris.', why: 'Subject + *is thought* + *to be*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The quiet machine in your kitchen',
      about: 'Read an article about an everyday invention.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'The quiet machine in your kitchen', md: 'Most of us open the fridge many times a day without thinking about it. Yet this ordinary white box has changed the way we shop, cook and eat more than almost any other machine in the home.\n\nBefore fridges were invented, food had to be eaten quickly or kept in other ways. Meat and fish were salted, smoked or dried, and vegetables were stored in cool cellars. In some cold countries, ice was cut from frozen lakes in winter and kept in thick-walled ice houses, where it was packed in straw or sawdust so that it lasted into the summer.\n\nSo how does a fridge actually work? Surprisingly, it does not make cold; it moves heat. A special liquid, called a refrigerant, flows through pipes inside the fridge. As it turns into a gas, it takes in heat from the food. The gas is then compressed by a motor and sent to pipes at the back, where the heat is given off into the kitchen. That is why the back of a fridge often feels warm.\n\nElectric fridges were first sold for homes in the early twentieth century, but for many years they were considered a luxury. Today they are found in almost every kitchen in many countries, and it is often said that they have changed our lives in ways we hardly notice. Families can shop once a week instead of every day, and much less food goes bad before it can be eaten.\n\nSo the next time you have your fridge repaired, remember that inside that quiet machine, a surprisingly simple idea is being used every second of the day.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Before fridges, people had no way of keeping food.', a: 'f', why: 'Food was salted, smoked, dried or stored in cool cellars.' },
            { q: 'Ice from frozen lakes was kept in ice houses.', a: 't', why: 'It was kept in thick-walled ice houses.' },
            { q: 'A fridge works by producing cold air.', a: 'f', why: 'It does not make cold; it moves heat.' },
            { q: 'Ice houses were usually built underground.', a: 'ng', why: 'The text says they had thick walls, but not where they were built.' },
            { q: 'For many years, fridges were seen as a luxury.', a: 't', why: '“For many years they were considered a luxury.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the article.', items: [
            { q: '“Meat and fish were salted, smoked or dried.” Why does the writer use the passive?', o: ['What happened to the food matters more than who did it.', 'The writer knows exactly who did it.', 'The sentence is about the future.'], why: 'The passive puts the focus on the process, not on the people.' },
            { q: '“It is often said that they have changed our lives.” What does this mean?', o: ['Many people say this.', 'The writer has proved this.', 'Nobody believes this.'], why: 'Passive reporting: a general opinion, without naming who holds it.' },
            { q: '“The next time you have your fridge repaired…” Who repairs the fridge?', o: ['Someone else, for example a technician.', 'You repair it yourself.', 'Nobody repairs it.'], why: '*Have something done*: someone else does the job for you.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the passive.', items: [
            { s: 'In some cold countries, ice [was cut] from frozen lakes in winter.', why: '*Was cut*: past simple passive.' },
            { s: 'Today they [are found] in almost every kitchen in many countries.', why: '*Are found*: present simple passive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'A new hospital ___ in our town at the moment.', o: ['is being built', 'is building', 'has built'], why: 'In progress now, and the hospital does not build itself: present continuous passive.' },
      { q: 'The report must ___ by Friday.', o: ['be finished', 'finished', 'been finished'], why: 'After a modal: *be* + past participle.' },
      { q: 'I’m going to ___ my jacket cleaned.', o: ['have', 'make', 'do'], why: '*Have something done*: someone else cleans it.' },
      { q: 'The ship is believed ___ in a storm two hundred years ago.', o: ['to have sunk', 'to sink', 'sinking'], why: 'A past event: *to have* + past participle.' },
      { q: 'It ___ that the old factory will close next year.', o: ['is reported', 'reports', 'has reporting'], why: 'Passive reporting with *it*: *It is reported that…*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Our flight ___ (cancel), so we stayed another night.', a: ['was cancelled', 'had been cancelled'], why: 'A past event in the passive: *was* + participle.' },
      { q: 'She ___ (her phone / steal) at the station last week.', a: ['had her phone stolen', 'got her phone stolen'], why: 'Something bad that someone did to her: *had her phone stolen*.' },
      { q: 'The president is expected ___ (arrive) at noon.', a: ['to arrive'], why: 'The future: *to* + infinitive.' },
      { q: 'Since 2020, more than a thousand trees ___ (plant) in the park.', a: ['have been planted'], why: '*Since*: present perfect passive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'The film is said to be excellent.', why: 'Subject + *is said* + *to be*.' },
      { a: 'Have you had your eyes tested?', why: 'Present perfect question: *Have you had* + object + participle.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
      ['The results will be', 'announced tomorrow.'],
      ['The thief is thought to have', 'escaped through a window.'],
      ['We had our roof', 'repaired after the storm.'],
      ['It is widely believed', 'that the plan will fail.'],
    ] },
  ],
};
