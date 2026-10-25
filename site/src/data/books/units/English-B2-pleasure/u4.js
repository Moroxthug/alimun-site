// English B2 for travel, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'History in places',
  goal: 'Talk about the history of places you visit.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['dates-and-periods', 'narrative-tenses', 'past-perfect', 'passive', 'reporting-passive', 'relative-clauses', 'guided-tours'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'In the late 18th century…',
      about: 'Talk about dates and periods, and tell the history of a place in the right tenses.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'When you talk about history, you need exact ways to say **when**. Use *in* for centuries, decades and years, *during* + a noun for an event or period, and *early*, *mid-* or *late* to be more precise.' },
          { t: 'table', caption: 'Dates and periods', explain: ['head'], head: ['Expression', 'Example'], rows: [
            ['in the + century', 'The church was built in the twelfth century.'],
            ['in the + decade', 'The railway arrived in the 1840s.'],
            ['early / mid- / late', 'In the late 18th century, the town grew very quickly.'],
            ['at the turn of the century', 'At the turn of the 20th century, the harbour was full of ships.'],
            ['during + noun', 'During the war, the castle was used as a hospital.'],
            ['for … until …', 'The family lived there for over 300 years, until 1920.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say years in pairs: *1480* is *fourteen eighty*, *1905* is *nineteen oh five*. For years after 2000, British speakers often say *two thousand and eight*. *The 1840s* is *the eighteen forties*.' },
        ],
        [
          { t: 'text', md: 'A history is a story, so it uses narrative tenses. The **past simple** gives the main events. The **past perfect** (*had* + past participle) goes back to something earlier, often with *by*. *Used to* and *would* describe things that happened regularly in the past. Only *used to* works for states such as *be* or *have*.' },
          { t: 'examples', items: [
            { s: 'The town **became** rich in the 15th century.', n: 'Past simple: a main event.' },
            { s: '**By** 1800, the river **had filled** with sand.', n: 'Past perfect: finished before that point in the past.' },
            { s: 'Merchants **would meet** in the square every Thursday.', n: '*Would* + base form: a regular action in the past.' },
            { s: 'There **used to be** a market here.', n: '*Used to* for a past state. *There would be a market* is not possible here.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word or form.', items: [
            { q: 'The cathedral was finished ___ the early 13th century.', o: ['in', 'on', 'at'], why: '*In* + a century or a part of a century.' },
            { q: '___ the war, many buildings in the old town were damaged.', o: ['During', 'While', 'For'], why: '*During* + a noun. *While* needs a subject and a verb.' },
            { q: 'By the time the railway arrived, the port ___ most of its trade.', o: ['had lost', 'has lost', 'was losing'], why: 'The loss happened before the railway arrived: past perfect.' },
            { q: 'There ___ a mill by the river, but it burned down in 1910.', o: ['used to be', 'would be', 'had been being'], why: 'A past state: *used to*, not *would*.' },
            { q: 'The family owned the house ___ more than two centuries.', o: ['for', 'since', 'during'], why: '*For* + a length of time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'The bridge was built in the ___ 1700s, probably around 1705.', a: ['early'], why: 'Around 1705 is near the start of the century: the *early* 1700s.' },
            { q: 'At the ___ of the century, the town had three theatres.', a: ['turn'], why: '*At the turn of the century*: around the year a new century begins.' },
            { q: 'By 1850, the population ___ doubled.', a: ['had'], why: 'Past perfect with *by* + a past date.' },
            { q: 'Fishermen ___ sell their catch on the beach every morning.', a: ['would'], why: '*Would* + base form for a regular past action. (*Used to* is also possible, but it needs two words.)' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each sentence has one mistake. Tap it.', items: [
            { s: 'The castle was built [on] the 14th century.', why: '*In* + century: *in the 14th century*.' },
            { s: 'There [would] be a prison in the tower, but now it is a museum.', why: 'A past state: *There used to be*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Built in 1480, which…',
      about: 'Use the passive and relative clauses to describe buildings and places.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'Descriptions of places often use the **passive**, because the building is more important than the people who built it. In guidebooks you also meet the **reporting passive**: *is said to*, *is thought to*, *is believed to*. It shows that something is generally believed, but not certain.' },
          { t: 'examples', items: [
            { s: 'The tower **was built** in 1480.', n: 'Past simple passive: *was* / *were* + past participle.' },
            { s: 'The bridge **has been restored** several times.', n: 'Present perfect passive: *has* / *have been* + past participle.' },
            { s: 'The town hall **is being repaired** at the moment.', n: 'Present continuous passive: *is* / *are being* + past participle.' },
            { s: 'The house **is said to be** haunted.', n: 'Reporting passive: people say it is haunted.' },
            { s: 'The wall **is thought to have been** built by the Romans.', n: '*To have been* + past participle refers to the past.' },
          ] },
        ],
        [
          { t: 'text', md: 'A **non-defining relative clause** adds extra information about a place or person. It goes between commas and starts with *which* (things), *who* (people), *where* (places) or *whose* (possession). *That* is not possible in this kind of clause.' },
          { t: 'examples', items: [
            { s: 'The museum, **which** opened in 1998, is free on Sundays.', n: '*Which* for a thing. The sentence works without the clause.' },
            { s: 'The square, **where** the market is held, dates from 1350.', n: '*Where* for a place: the market is held there.' },
            { s: 'The architect, **whose** statue stands by the river, died poor.', n: '*Whose* + noun: the statue belongs to the architect.' },
            { s: 'The monks, **who** lived here for centuries, made cheese.', n: '*Who* for people.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, you can hear the commas as short pauses: *The museum (pause) which opened in 1998 (pause) is free on Sundays.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'The old mill ___ into a hotel in 2015.', o: ['was turned', 'turned', 'has turned'], why: 'Someone turned it into a hotel: past simple passive.' },
            { q: 'Since then, the walls ___ several times.', o: ['have been repaired', 'were repaired', 'have repaired'], why: '*Since then* + present perfect, passive: *have been repaired*.' },
            { q: 'The castle is believed ___ in the 11th century.', o: ['to have been built', 'to be build', 'that it was built'], why: '*Is believed to have been* + past participle refers to the past.' },
            { q: 'The harbour, ___ once held hundreds of ships, is now almost empty.', o: ['which', 'that', 'where'], why: 'Non-defining clause about a thing, which is the subject: *which*. *That* is not possible after a comma.' },
            { q: 'The poet, ___ house you can visit, was born here in 1812.', o: ['whose', 'who’s', 'which'], why: '*Whose* + noun shows possession.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the guide’s sentences with one word.', items: [
            { q: 'The chapel, ___ the king was married, is closed today.', a: ['where'], why: '*Where* for a place: he was married there.' },
            { q: 'The church was badly ___ (damage) by fire in 1702.', a: ['damaged'], why: 'Past simple passive: *was* + past participle.' },
            { q: 'The painting is ___ to be the oldest in the country.', a: ['said', 'thought', 'believed', 'considered'], why: 'Reporting passive: *is said / thought / believed to be*.' },
            { q: 'The merchants, ___ grew rich from wool, built the hall.', a: ['who'], why: '*Who* for people in a non-defining clause.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'The house is said to be haunted.', why: 'Reporting passive: *is said to be*.' },
            { a: 'The old bridge has been restored.', why: 'Present perfect passive: *has been* + past participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A walk through Calderwick',
      about: 'Read a guide text about an old town and follow its history.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'A walk through Calderwick', md: 'Calderwick may look like a quiet market town today, but for much of its history it was one of the busiest ports on this stretch of coast. The first settlement here is thought to date from Roman times, although very little from that period has survived.\n\nMost of what you see in the old town was built between the 14th and the 17th centuries, when Calderwick grew rich from the wool trade. Start your walk in the Market Square, where wool merchants would do business every Thursday. The tall timber-framed building on the north side, which now houses the tourist information centre, was built in 1480 as a hall for the merchants.\n\nFrom the square, follow Church Lane down to St Anne’s, whose tower can be seen from almost everywhere in town. The church was badly damaged by fire in 1702 and was rebuilt over the following twenty years. Look out for the medieval doorway, which somehow survived the fire.\n\nBy the late 18th century, larger ships could no longer reach the harbour, because the river had filled with sand. Trade moved to other ports, and Calderwick slowly became the sleepy place it is today. The old warehouses along the quay, where wool used to be stored before it was shipped abroad, have since been turned into flats, cafés and a small museum.\n\nThe museum, which is open from April to October, tells the story of the town through objects found by local people. A ship’s bell in the main room is said to come from a ship that sank off the coast in 1789. Nobody has ever been able to prove it, but it makes a good story.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Many Roman buildings can still be seen in Calderwick.', a: 'f', why: '“Very little from that period has survived.”' },
            { q: 'The town became rich because of the wool trade.', a: 't', why: '“…when Calderwick grew rich from the wool trade.”' },
            { q: 'The tourist information centre is in a building from the 15th century.', a: 't', why: 'It was built in 1480, which is in the 15th century.' },
            { q: 'The fire of 1702 destroyed every part of St Anne’s.', a: 'f', why: 'The medieval doorway survived the fire.' },
            { q: 'Ships stopped coming because a new port was built nearby.', a: 'f', why: 'The river had filled with sand, so larger ships could not reach the harbour.' },
            { q: 'The museum charges an entrance fee.', a: 'ng', why: 'The text gives the opening months, but says nothing about prices.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the guide.', items: [
            { q: '“The first settlement is thought to date from Roman times.” This means:', o: ['people believe it is Roman, but it is not certain', 'it is certainly Roman', 'it was built by people who studied the Romans'], why: 'The reporting passive *is thought to* shows a belief, not a proven fact.' },
            { q: 'Why does the guide say “the river had filled with sand”?', o: ['This happened before ships stopped coming.', 'This happened after trade moved away.', 'This is still happening today.'], why: 'The past perfect goes back to an earlier event.' },
            { q: '“Wool merchants would do business every Thursday.” *Would* shows:', o: ['a regular action in the past', 'a polite request', 'a future plan'], why: '*Would* + base form can describe past habits.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings from the guide.', pairs: [
            ['St Anne’s, whose tower', 'can be seen from almost everywhere'],
            ['the Market Square, where', 'merchants did business'],
            ['the medieval doorway, which', 'survived the fire'],
            ['the museum, which', 'is open from April to October'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The abbey was founded ___ the late 12th century.', o: ['in', 'on', 'during'], why: '*In* + part of a century.' },
      { q: 'By 1900, most of the old houses ___ pulled down.', o: ['had been', 'have been', 'were being'], why: 'Past perfect passive with *by* + a past date.' },
      { q: 'The castle ___ to have been built by a Norman lord.', o: ['is thought', 'thinks', 'is thinking'], why: 'Reporting passive: *is thought to have been*.' },
      { q: 'The square, ___ a market is held every Saturday, is very lively.', o: ['where', 'which', 'that'], why: '*Where* for a place: the market is held there.' },
      { q: 'There ___ a cinema on this street when I was young.', o: ['used to be', 'would be', 'is used to be'], why: 'A past state: *used to*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The station opened in the mid-___ century, around 1850.', a: ['19th', 'nineteenth'], why: '1850 is in the middle of the 19th century.' },
      { q: 'The bridge ___ being repaired, so it is closed.', a: ['is'], why: 'Present continuous passive: *is being* + past participle.' },
      { q: 'The writer, ___ novels made the town famous, lived at number 12.', a: ['whose'], why: '*Whose* + noun shows possession.' },
      { q: '___ the 1920s, the hotel was a favourite with artists.', a: ['In', 'During', 'Throughout'], why: '*In the 1920s* or *During the 1920s*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'The museum, which opened in 1998, is free.', why: 'A non-defining relative clause between commas.' },
      { a: 'The town hall is being repaired.', why: 'Present continuous passive: *is being* + past participle.' },
    ] },
  ],
};
