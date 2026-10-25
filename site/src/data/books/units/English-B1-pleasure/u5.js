// English B1 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Nature and the outdoors',
  goal: 'Plan walks and trips into nature safely.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['landscape', 'weather', 'might-will', 'first-conditional', 'rules-signs', 'safety'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Hills, lakes and the forecast',
      about: 'Talk about the landscape and the weather, and plan a walk.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Before a walk, you need words for the landscape. Maps, guidebooks and signs use them all the time.' },
          { t: 'table', caption: 'Landscape', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['a valley', 'low land between hills or mountains'],
            ['a ridge', 'a long, narrow line of high land along the top of hills'],
            ['a stream', 'a small, narrow river'],
            ['a cliff', 'a high, steep wall of rock, often by the sea'],
            ['woods', 'an area with a lot of trees, smaller than a forest'],
            ['a viewpoint', 'a place with a good view'],
            ['a path', 'a narrow way for walking'],
          ] },
        ],
        [
          { t: 'table', caption: 'Weather', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['showers', 'short periods of rain'],
            ['foggy', 'with thick cloud near the ground, so you cannot see far'],
            ['gusts', 'sudden strong winds'],
            ['chilly', 'cold enough to feel uncomfortable'],
            ['mild', 'not too cold, pleasant'],
          ] },
          { t: 'text', md: 'To plan a walk, use **might** for something that is possible, **will** for something you are quite sure about, and the **first conditional** to plan for the weather: *if* + present simple, then *will* + verb.' },
          { t: 'examples', items: [
            { s: 'It **might** rain in the afternoon, so take a waterproof.', n: '*might* + verb: possible, but not certain.' },
            { s: 'It**’ll be** windy on the ridge, so wear a warm hat.', n: '*will*: a prediction you are quite sure about.' },
            { s: '**If** it**’s** foggy, we**’ll** stay in the valley.', n: 'First conditional. Never use *will* after *if* here: not *If it will be foggy*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Planning a walk', lines: [
            { who: 'Hannah', s: 'So, where shall we walk tomorrow?' },
            { who: 'Diego', s: 'I’d love to do the ridge walk. People say the views from the top are amazing.' },
            { who: 'Hannah', s: 'Have you checked the forecast?' },
            { who: 'Diego', s: 'Yes. It’ll be sunny in the morning, but there might be showers in the afternoon.' },
            { who: 'Hannah', s: 'And the wind?' },
            { who: 'Diego', s: 'Strong gusts on high ground after three o’clock.' },
            { who: 'Hannah', s: 'OK. If we start early, we’ll be back down before then.' },
            { who: 'Diego', s: 'Good idea. And if the weather changes, we can come down through the woods.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'The forecast says it will rain all day.', a: 'f', why: 'It will be *sunny in the morning*; showers are only possible in the afternoon.' },
            { q: 'There will be strong winds on high ground in the afternoon.', a: 't', why: '*Strong gusts on high ground after three o’clock.*' },
            { q: 'Hannah wants to start early.', a: 't', why: '*If we start early, we’ll be back down before then.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'It ___ snow tonight, but the forecast isn’t sure.', o: ['might', 'will certainly', 'must'], why: 'It is possible, not certain: *might*.' },
            { q: 'If it ___ foggy tomorrow, we’ll stay in the valley.', o: ['is', 'will be', 'would be'], why: 'First conditional: *if* + present simple.' },
            { q: 'We crossed a small ___ on some flat stones.', o: ['stream', 'cliff', 'ridge'], why: 'You cross a *stream*: a small river.' },
            { q: 'Take a jumper. It’s quite ___ this morning.', o: ['chilly', 'humid', 'sunny and hot'], why: '*chilly*: cold enough to need a jumper.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the plans.', items: [
            { q: 'If we ___ (leave) at eight, we’ll reach the top by eleven.', a: ['leave'], why: 'First conditional: *if* + present simple.' },
            { q: 'Bring a waterproof. It ___ (perhaps) rain later.', a: ['might', 'may', 'could'], why: '*might* (or *may*, *could*): it is possible.' },
            { q: 'We’ll take the lower path if it ___ (be) windy.', a: ['is'], why: 'After *if*, use the present simple, even for the future.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match each word with its meaning.', pairs: [
            ['a valley', 'low land between hills'],
            ['a stream', 'a small, narrow river'],
            ['a cliff', 'a high wall of rock by the sea'],
            ['a viewpoint', 'a place with a good view'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Stay safe, follow the rules',
      about: 'Understand signs and safety advice in parks and mountains.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In national parks and in the countryside, signs tell you the rules. Use *must* and *have to* for rules, *mustn’t* for things that are not allowed, and *should* for good advice.' },
          { t: 'table', caption: 'Signs in the countryside', explain: ['head', 'col1'], head: ['Sign', 'What it means'], rows: [
            ['Keep dogs on a lead', 'Your dog must be on a lead, for example near sheep or cows.'],
            ['Please close the gate', 'Close every gate after you, so animals cannot get out.'],
            ['Take your litter home', 'There are no bins, so you have to carry your rubbish with you.'],
            ['No fires or barbecues', 'You mustn’t make a fire here.'],
            ['Please keep to the path', 'Walk only on the path, to protect plants and for your safety.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Should* is advice, *must* is a rule. *You should take a map* means it is a good idea. *Dogs must be on a lead* means it is a rule.' },
        ],
        [
          { t: 'text', md: 'Before a walk in the hills, people usually check the forecast and tell someone their route and the time they expect to be back. They also take water, food, warm clothes and a map. A phone is useful, but the battery can run out, and there is not always a signal.\n\nIn the UK, in an emergency in the mountains, you call 999 or 112, ask for the police and then ask for Mountain Rescue. On the coast, you ask for the Coastguard.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. True or false?', items: [
            { q: 'In the UK, you can call 999 or 112 in an emergency in the mountains.', a: 't', why: '*you call 999 or 112, ask for the police and then ask for Mountain Rescue*' },
            { q: 'On the coast, you ask for Mountain Rescue.', a: 'f', why: 'On the coast, you ask for *the Coastguard*.' },
            { q: 'A phone always works in the hills.', a: 'f', why: 'The battery can run out, and *there is not always a signal*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'You ___ make a fire here. It’s not allowed.', o: ['mustn’t', 'don’t have to', 'should'], why: 'Not allowed: *mustn’t*.' },
            { q: 'You ___ take extra water. It’s a long, hot walk.', o: ['should', 'mustn’t', 'aren’t allowed to'], why: 'Good advice: *should*.' },
            { q: 'Dogs ___ be kept on a lead near the sheep.', o: ['must', 'mustn’t', 'don’t have to'], why: 'A rule: *must*.' },
            { q: 'You ___ pay to enter the park. It’s free.', o: ['don’t have to', 'mustn’t', 'have to'], why: 'Not necessary, because it is free: *don’t have to*.' },
            { q: 'Please ___ the gate behind you.', o: ['close', 'closing', 'to close'], why: 'An instruction: *please* + the base form of the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the safety advice with one word.', items: [
            { q: 'Always tell someone your ___ (the way you will walk) before you go into the hills.', a: ['route'], why: 'Your *route* is the way you plan to walk.' },
            { q: 'There are no bins, so take your ___ home.', a: ['litter', 'rubbish'], why: '*litter* or *rubbish*: things you throw away.' },
            { q: 'My phone had no ___ in the valley, so I couldn’t call anyone.', a: ['signal'], why: 'Without a *signal*, a phone cannot make calls.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dogs must be kept on a lead.', why: '*must* + *be* + past participle: a rule in the passive.' },
            { a: 'Have you checked the weather forecast?', why: 'Present perfect question: *Have you checked…?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'The Ridge and Lake Circuit',
      about: 'Read the information for a hiking route.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Ridge and Lake Circuit', md: '**Distance:** 11 km. **Time:** 4 to 5 hours. **Difficulty:** moderate.\n\nThis circular walk starts and finishes at the car park in Elmdale village. It follows a quiet lane for the first kilometre, then climbs steeply through the woods to Hawk Ridge. The climb takes about an hour and is the hardest part of the route. From the top, there are wonderful views of the valley and, on a clear day, the sea.\n\nThe path along the ridge is narrow and rocky in places. In strong winds or fog it can be dangerous, so check the forecast before you start. If the weather turns bad, take the lower path that goes back down to the village.\n\nAfter the ridge, the route goes down to Long Lake, a popular place for a picnic. Swimming is not allowed in the lake, because the water is very cold and deep. The final section follows a stream back to Elmdale.\n\nWear walking boots, as the ground can be wet and muddy at any time of year. There are toilets and a café at the car park, but there is nowhere to buy food or water on the route.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the route information again. True, false or not given?', items: [
            { q: 'The walk starts and ends in the same place.', a: 't', why: 'It *starts and finishes at the car park in Elmdale village*.' },
            { q: 'The climb to Hawk Ridge is the easiest part of the walk.', a: 'f', why: 'It *is the hardest part of the route*.' },
            { q: 'You can always see the sea from the ridge.', a: 'f', why: 'Only *on a clear day*.' },
            { q: 'You are not allowed to swim in Long Lake.', a: 't', why: '*Swimming is not allowed in the lake.*' },
            { q: 'The café at the car park opens at nine.', a: 'ng', why: 'The text does not give the café’s opening times.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'What should you do if the weather turns bad on the ridge?', o: ['Take the lower path back to the village.', 'Continue to Long Lake.', 'Wait at the top.'], why: '*If the weather turns bad, take the lower path.*' },
            { q: 'Why should you take food and water with you?', o: ['There is nowhere to buy them on the route.', 'The café is closed in winter.', 'The lake water is too cold.'], why: '*there is nowhere to buy food or water on the route*' },
            { q: 'A circular walk ___.', o: ['ends where it started', 'has a lot of hills', 'is always short'], why: 'A *circular* walk goes in a circle, back to the start.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Route times in guides are usually for walking only. Add extra time for photos, breaks and lunch.' },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'It ___ rain later. Take a waterproof, just in case.', o: ['might', 'must', 'mustn’t'], why: 'Possible, not certain: *might*.' },
      { q: 'If it ___ windy, we’ll take the lower path.', o: ['is', 'will be', 'would be'], why: '*if* + present simple.' },
      { q: 'You ___ light a fire here. It’s not allowed.', o: ['mustn’t', 'don’t have to', 'should'], why: 'Not allowed: *mustn’t*.' },
      { q: 'You ___ bring your own tent. You can hire one at the campsite.', o: ['don’t have to', 'mustn’t', 'have to'], why: 'Not necessary: *don’t have to*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences with one word.', items: [
      { q: 'Please close the ___ so the sheep can’t get out.', a: ['gate'], why: 'Close the *gate* after you.' },
      { q: 'Take your ___ home. There are no bins.', a: ['litter', 'rubbish'], why: '*litter* or *rubbish*.' },
      { q: 'We followed a small ___ (narrow river) down to the lake.', a: ['stream'], why: 'A *stream* is a small river.' },
      { q: 'Always tell someone your ___ and when you expect to be back.', a: ['route', 'plans'], why: 'Your *route* is the way you will walk.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match each weather word with its meaning.', pairs: [
      ['showers', 'short periods of rain'],
      ['gusts', 'sudden strong winds'],
      ['foggy', 'you cannot see far'],
      ['mild', 'not too cold, pleasant'],
    ] },
  ],
};
