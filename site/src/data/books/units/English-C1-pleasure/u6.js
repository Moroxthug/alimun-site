// English C1 for travel, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Responsible travel',
  goal: 'Debate the ethics of travel with a clear, balanced and persuasive argument.',
  art: 'sun',
  tags: { skills: ['speaking', 'vocabulary', 'writing', 'reading'], topics: ['sustainable-tourism', 'overtourism', 'word-formation', 'conceding-and-countering', 'debating', 'opinion-writing'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Leave only footprints',
      about: 'Use precise vocabulary to talk about the impact of travel on places and people.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Discussions about responsible travel use a fairly technical vocabulary. Knowing these words lets you follow articles and documentaries, and take part in a debate without simplifying your ideas. Many of them are nouns, so they also help you write in a more formal style.' },
          { t: 'table', caption: 'The language of impact', explain: ['head', 'col1'], quiz: true, head: ['Word or phrase', 'Meaning'], rows: [
            ['a carbon footprint', 'the amount of carbon dioxide that a person or an activity produces'],
            ['offset (emissions)', 'pay for something, like planting trees, that balances the pollution you cause'],
            ['overtourism', 'too many visitors in one place, so that life there gets worse'],
            ['leakage', 'tourist money that leaves the local area, for example to foreign companies'],
            ['community-based tourism', 'tourism that local people organise and profit from'],
            ['greenwashing', 'making a product or company look better for the environment than it really is'],
            ['be priced out (of)', 'be unable to afford to live somewhere any more because prices have risen'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'Cheap flights have made it easy to **underestimate** our **carbon footprint**.', n: '*Underestimate*: think something is smaller than it really is.' },
            { s: 'In some old towns, residents are being **priced out** by short-term rentals.', n: '*Be priced out*: forced to leave because it is too expensive.' },
            { s: 'Cruise ships can **put a strain on** small ports.', n: '*Put a strain on*: cause problems by making something work too hard.' },
            { s: 'Much of the money is lost through **leakage** to companies abroad.', n: 'The money does not stay where it was spent.' },
            { s: 'The lodge calls itself *eco-friendly*, but critics say it’s **greenwashing**.', n: 'The green image may not be true.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with numbers in a debate. Phrases like *a growing number of*, *a significant share of* and *in many cases* let you make a point honestly when you do not have exact figures. If you quote a figure, be ready to say where it comes from.' },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Complete with a form of the word in capitals.', items: [
            { q: 'The island is trying to become more ___ by limiting the number of visitors.', base: 'sustain', a: ['sustainable'], why: '*Sustain* + *-able*: able to continue without causing damage.' },
            { q: 'The ___ of the old harbour cost far more than expected.', base: 'preserve', a: ['preservation'], why: 'The noun of *preserve* is *preservation*.' },
            { q: 'Many villages have become ___ on tourism for most of their income.', base: 'depend', a: ['dependent', 'dependant'], why: '*Dependent on*: needing something in order to survive.' },
            { q: 'Campaigners have criticised the ___ of local workers in some resorts.', base: 'exploit', a: ['exploitation'], why: 'The noun of *exploit* is *exploitation*: unfair treatment for profit.' },
            { q: 'We chose an ___ friendly way to travel: the train.', base: 'environment', a: ['environmentally'], why: 'Adverb before an adjective: *environmentally friendly*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word?', items: [
            { key: 'put a strain on', o: ['local services', 'the water supply', 'a souvenir', 'a postcard'], a: [0, 1], why: 'You *put a strain on* systems or resources that can be overloaded.' },
            { key: 'carbon', o: ['footprint', 'emissions', 'tourism', 'leakage'], a: [0, 1], why: '*Carbon footprint* and *carbon emissions* are fixed collocations.' },
            { key: 'offset', o: ['emissions', 'a flight', 'a beach', 'a resident'], a: [0, 1], why: 'You *offset* pollution or the activity that causes it.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['Young families are being priced', 'out of the city centre.'],
            ['The company was accused of', 'greenwashing its hotels.'],
            ['Community-based tourism lets villagers', 'keep more of the profits.'],
            ['Thousands of day visitors put a', 'strain on the old bridges.'],
            ['Some travellers plant trees to', 'offset their emissions.'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Which word does not belong with the others?', items: [
            { o: ['souvenir', 'overtourism', 'overcrowding', 'congestion'], why: 'The others all describe too many people in one place.' },
            { o: ['leakage', 'community-based', 'locally owned', 'family-run'], why: 'The others describe businesses where money stays local; *leakage* is money leaving.' },
            { o: ['afford', 'emissions', 'pollution', 'carbon footprint'], why: 'The others are about damage to the environment.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Granted, but…',
      about: 'Concede a point, then counter it and emphasise your own view in a debate.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A persuasive argument rarely ignores the other side. Strong speakers first **concede**: they admit that the other person has a point. Then they **counter**: they explain why their own view still matters more. Finally they **emphasise** what they see as the key point. This makes you sound fair, and it is much harder to argue against.' },
          { t: 'table', caption: 'Conceding, countering and emphasising', explain: ['head', 'col0'], head: ['Function', 'Phrase', 'Example'], rows: [
            ['Concede', 'Granted, … / Admittedly, …', 'Granted, the train is more expensive.'],
            ['Concede', 'I take your point, but …', 'I take your point, but not everyone has two weeks to travel.'],
            ['Concede', 'There’s some truth in that.', 'There’s some truth in that, to be fair.'],
            ['Counter', 'That said, … / Even so, …', 'That said, the price of flights hides the real cost.'],
            ['Counter', 'Be that as it may, …', 'Be that as it may, the beaches are overcrowded.'],
            ['Emphasise', 'The fact remains that …', 'The fact remains that the old town cannot cope with the crowds.'],
            ['Emphasise', 'If anything, …', 'If anything, the problem is getting worse.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A debate in a travel podcast', lines: [
            { who: 'Joanna', s: 'I think people should stop taking short city breaks by plane. It’s hard to justify.' },
            { who: 'Kwame', s: 'I take your point, but for many people a weekend is the only holiday they can afford.' },
            { who: 'Joanna', s: 'Granted, not everyone has time for a long trip. Even so, the train is often a real option within Europe.' },
            { who: 'Kwame', s: 'Admittedly, it is. That said, plenty of places depend on visitors who fly in. If they stopped coming, local jobs would disappear.' },
            { who: 'Joanna', s: 'There’s some truth in that. But the fact remains that the most popular cities are struggling with too many tourists.' },
            { who: 'Kwame', s: 'Which is exactly why we should spread visitors out, not stop people travelling. If anything, we need more travel to less-known places, not less travel.' },
          ] },
          { t: 'tip', art: 'cat', md: '*Granted* and *Admittedly* usually start the sentence and are followed by a comma. *Be that as it may* is formal and slightly old-fashioned, but still common in debates and essays. *If anything* introduces a point that goes even further than, or the opposite of, what the other person expects.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best phrase.', items: [
            { q: '___, cruise ships bring money to the port. But most passengers spend very little there.', o: ['Admittedly', 'If anything', 'The fact remains'], why: '*Admittedly* concedes a point before the counter-argument.' },
            { q: 'The new rules haven’t reduced the crowds. ___, there are more visitors than last year.', o: ['If anything', 'Granted', 'I take your point'], why: '*If anything* introduces a point that goes further: the opposite of what was hoped.' },
            { q: 'Offsetting helps a little. ___, it doesn’t remove the emissions from the flight.', o: ['That said', 'Granted', 'There’s some truth in that'], why: '*That said* introduces a counter-argument after a concession.' },
            { q: 'Tourism creates jobs. Be that ___ it may, many of them are badly paid.', o: ['as', 'so', 'that'], why: 'The fixed phrase is *Be that as it may*.' },
            { q: 'You can argue about details, but ___ that the town cannot cope with ten thousand day visitors.', o: ['the fact remains', 'if anything', 'admittedly'], why: '*The fact remains that* emphasises your key point.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Does the phrase concede, counter or emphasise?', groups: ['concede', 'counter', 'emphasise'], explain: ['groups'], items: [
            { s: 'Granted, …', g: 0, why: '*Granted* admits that the other person is right about something.' },
            { s: 'Even so, …', g: 1, why: '*Even so* introduces your counter-argument.' },
            { s: 'The fact remains that …', g: 2, why: 'It puts weight on your key point.' },
            { s: 'I take your point, but …', g: 0, why: 'You accept the point before you disagree.' },
            { s: 'Be that as it may, …', g: 1, why: 'It accepts the point, then moves to the opposite view.' },
            { s: 'What really matters is …', g: 2, why: 'A cleft that puts the focus on your main point.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Some words do not belong.', items: [
            { a: 'Granted, the train takes much longer.', extra: ['Granting', 'is'], why: '*Granted*, with a comma, concedes the point.' },
            { a: 'Be that as it may, the problem remains.', extra: ['so', 'Being'], why: 'The fixed phrase is *Be that as it may*.' },
            { a: 'I take your point, but I still disagree.', extra: ['make', 'although'], why: '*I take your point, but…*: concede, then counter.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'There’s some ___ in that, but it isn’t the whole story.', a: ['truth'], why: '*There’s some truth in that*: you partly agree.' },
            { q: 'That ___, cheap flights have opened the world to many people.', a: ['said'], why: '*That said* introduces a contrasting point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Should we fly less?',
      about: 'Read two opinion pieces and compare how each writer builds an argument.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Should we fly less? Two views', md: '**Yes: travel slower, travel better.** There is no comfortable way to say this, but most of us fly far more than we need to. A weekend away by plane has become so cheap and so normal that we rarely stop to ask whether it is worth it. Granted, flying is only one part of the climate problem, and individuals cannot solve it alone. Even so, for people who fly several times a year, it is often the biggest single part of their carbon footprint. Offsetting may ease our conscience, but it does not take the emissions back. What I am arguing for is not an end to travel. It is fewer, longer trips, by train where possible, with more time spent in each place. If anything, we would come home with better memories and fewer receipts.\n\n**No: the answer is better travel, not less.** I take the point that frequent flying has a cost. But the debate is often led by people who have already seen the world, and who now ask everyone else to stay at home. For many families, one cheap flight is the only way to visit relatives or see the sea. Entire regions, particularly islands, depend on visitors who cannot arrive by train. If those visitors disappear, the first people to suffer will not be airline owners but waiters, guides and small hotel owners. None of this means that the current model is fine: it clearly needs to change. The fact remains, though, that the solution lies in cleaner aircraft, fairer taxes on the most frequent flyers, and spreading visitors beyond the same few cities, not in making travel a luxury once again.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The first writer believes that people should stop travelling completely.', a: 'f', why: '“What I am arguing for is not an end to travel.”' },
            { q: 'The first writer thinks offsetting fully solves the problem of emissions.', a: 'f', why: '“It does not take the emissions back.”' },
            { q: 'The second writer accepts that frequent flying has a cost.', a: 't', why: '“I take the point that frequent flying has a cost.”' },
            { q: 'The second writer has visited many islands.', a: 'ng', why: 'The second writer mentions islands but says nothing about personal visits.' },
            { q: 'The second writer thinks the current model of tourism is fine as it is.', a: 'f', why: '“The current model clearly needs to change.”' },
            { q: 'Both writers agree that something about the way we travel should change.', a: 't', why: 'The first wants fewer, longer trips; the second wants cleaner aircraft and fairer taxes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Compare the two arguments.', items: [
            { q: 'What does the first writer concede?', o: ['that flying is only one part of the climate problem', 'that cheap flights help families', 'that trains are always cheaper'], why: '“Granted, flying is only one part of the climate problem.”' },
            { q: 'The second writer criticises some people in the debate because:', o: ['they have already travelled a lot and now ask others to stay at home', 'they never travel', 'they work for airlines'], why: 'The debate is “led by people who have already seen the world”.' },
            { q: 'Who would suffer first if visitors disappeared, according to the second writer?', o: ['local workers and small businesses', 'airline owners', 'climate scientists'], why: '“Not airline owners but waiters, guides and small hotel owners.”' },
            { q: '“Offsetting may **ease our conscience**.” This means it may:', o: ['make us feel less guilty', 'make travel easier', 'help us decide where to go'], why: '*Ease your conscience*: make you feel less guilty.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrases that concede or counter a point.', items: [
            { s: '[Granted], flying is only one part of the climate problem. [Even so], it is often the biggest part of a person’s footprint.', why: '*Granted* concedes; *Even so* counters.' },
            { s: '[I take the point] that frequent flying has a cost. [But] the debate is often led by people who have already seen the world.', why: '*I take the point* concedes; *But* introduces the counter-argument.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Rents rose so much that many locals were priced ___ of the old town.', o: ['out', 'off', 'away'], why: '*Be priced out of* a place.' },
      { q: 'Money from tourism that leaves the local area is called ___.', o: ['leakage', 'offsetting', 'greenwashing'], why: '*Leakage*: tourist money that goes elsewhere.' },
      { q: 'The hotel’s “green” advertising is mostly ___: nothing has really changed.', o: ['greenwashing', 'overtourism', 'a footprint'], why: '*Greenwashing*: a false green image.' },
      { q: '___, the train is slower. But it is far better for the environment.', o: ['Admittedly', 'If anything', 'Be that'], why: '*Admittedly* concedes a point.' },
      { q: 'The crowds haven’t got smaller. ___, they’ve grown.', o: ['If anything', 'Granted', 'Admittedly'], why: '*If anything* goes even further than expected.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Complete with a form of the word in capitals.', items: [
      { q: 'The village wants tourism to be ___ in the long term.', base: 'sustain', a: ['sustainable'], why: '*Sustainable*: able to continue without damage.' },
      { q: 'Too many visitors can lead to the ___ of local workers.', base: 'exploit', a: ['exploitation'], why: 'The noun is *exploitation*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'Be that as it ___, we still need a solution.', a: ['may'], why: 'The fixed phrase is *Be that as it may*.' },
      { q: 'The fact ___ that the island cannot cope with so many cars.', a: ['remains', 'is'], why: '*The fact remains that* emphasises your key point.' },
      { q: 'Day trips by coach put a ___ on the town’s narrow streets.', a: ['strain'], why: '*Put a strain on*: cause problems by overloading.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I take your point, but I disagree.', why: 'Concede with *I take your point*, then counter with *but*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'In the reading, the second writer suggests fairer taxes on the most frequent flyers.', a: 't', why: 'The solution lies partly in “fairer taxes on the most frequent flyers”.' },
    ] },
  ],
};
