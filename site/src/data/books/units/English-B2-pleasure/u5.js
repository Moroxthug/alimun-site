// English B2 for travel, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Tourism today',
  goal: 'Discuss the effects of tourism and give a balanced opinion.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'speaking', 'writing', 'reading'], topics: ['tourism-effects', 'cause-and-effect', 'contrast-linkers', 'although-despite-however', 'balanced-opinion', 'opinion-pieces'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Jobs, crowds and rising rents',
      about: 'Talk about the good and bad effects of tourism on places and the people who live there.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Tourism changes places in many ways. It brings money and jobs, but it can also bring crowds, noise and higher prices. These words help you talk about these effects precisely.' },
          { t: 'table', caption: 'Talking about tourism', explain: ['head', 'col1'], quiz: true, head: ['Word or phrase', 'Meaning'], rows: [
            ['mass tourism', 'very large numbers of people visiting the same places'],
            ['overcrowding', 'too many people in one place'],
            ['a short-term rental', 'a flat or house rented to visitors for a few days'],
            ['the local economy', 'the businesses, jobs and money in an area'],
            ['seasonal work', 'jobs that exist only at certain times of the year'],
            ['heritage', 'old buildings, traditions and culture that a place wants to keep'],
            ['sustainable', 'able to continue without damaging the place or the environment'],
          ] },
        ],
        [
          { t: 'text', md: 'To explain effects, use verbs like *lead to*, *result in* and *cause*, followed by a noun or an *-ing* form. To give the reason, use *be caused by*, *due to* or *because of*. To connect two sentences, use *As a result,*.' },
          { t: 'examples', items: [
            { s: 'Short-term rentals have **led to** higher rents for local people.', n: '*Lead to* + noun: *led* in the past and the present perfect.' },
            { s: 'Cruise ships can **result in** overcrowding in small ports.', n: '*Result in* + noun: the effect.' },
            { s: 'The damage to the path is **caused by** thousands of walkers.', n: 'Passive *be caused by* + the reason.' },
            { s: 'The museum closed early **due to** the crowds.', n: '*Due to* + noun, more formal than *because of*.' },
            { s: 'Visitor numbers doubled. **As a result**, the town opened a new car park.', n: '*As a result* starts a new sentence and introduces the effect.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Be careful with the direction: *Tourism results in traffic* (cause, then effect), but *Traffic results from tourism* (effect, then cause).' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words with their meanings.', pairs: [
            ['overcrowding', 'too many people in one place'],
            ['seasonal work', 'jobs only at certain times of the year'],
            ['heritage', 'old buildings and traditions worth keeping'],
            ['sustainable', 'able to continue without causing damage'],
            ['mass tourism', 'huge numbers of visitors in the same places'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the correct word or phrase.', items: [
            { q: 'Tourism has ___ to many new jobs in the area.', o: ['led', 'resulted', 'caused'], why: '*Lead to* + noun. *Result* needs *in*, and *cause* takes no preposition.' },
            { q: 'The erosion of the cliffs is partly caused ___ walkers leaving the path.', o: ['by', 'from', 'of'], why: 'Passive: *be caused by*.' },
            { q: 'The old town is part of the region’s ___, so new buildings are not allowed there.', o: ['heritage', 'economy', 'rental'], why: '*Heritage* is what a place wants to protect from the past.' },
            { q: 'The beach was closed ___ pollution.', o: ['due to', 'as a result', 'so that'], why: '*Due to* + noun gives the reason.' },
            { q: 'Many young people leave in winter because most jobs here are ___.', o: ['seasonal', 'sustainable', 'overcrowded'], why: '*Seasonal* jobs only exist at certain times of the year.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'Too many holiday flats can result ___ a shortage of homes for local people.', a: ['in'], why: '*Result in* + the effect.' },
            { q: 'Traffic jams in the village result ___ the large number of day visitors.', a: ['from'], why: '*Result from* + the cause.' },
            { q: 'Hotel prices rose sharply. As a ___, fewer students visited.', a: ['result', 'consequence'], why: '*As a result* introduces the effect in a new sentence.' },
            { q: 'Green tourism tries to be ___, so that the place is not damaged.', a: ['sustainable'], why: '*Sustainable*: able to continue without damage.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Each sentence has one wrong word. Tap it.', items: [
            { s: 'Mass tourism has led [at] higher prices in the old town.', why: '*Lead to*: *has led to higher prices*.' },
            { s: 'The noise is caused [from] the bars near the harbour.', why: '*Be caused by*: *caused by the bars*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'On the one hand…',
      about: 'Argue for and against, and give a balanced opinion with contrast linkers.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A **balanced opinion** shows both sides before you decide. Contrast linkers help, but each one has its own grammar. *Although* and *while* are followed by a clause (subject + verb). *Despite* and *in spite of* are followed by a noun or an *-ing* form. *However* starts a new sentence and is followed by a comma.' },
          { t: 'table', caption: 'Linkers for a balanced opinion', explain: ['head'], head: ['Linker', 'Example'], rows: [
            ['Although …', 'Although tourism creates jobs, many of them are badly paid.'],
            ['Despite … / In spite of …', 'Despite the crowds, the festival was a great success.'],
            ['… However, …', 'Tourists bring money. However, they also bring traffic.'],
            ['On the one hand, … On the other hand, …', 'On the one hand, the town needs visitors. On the other hand, residents need homes.'],
            ['Admittedly, …', 'Admittedly, the new hotel has created some jobs.'],
            ['On balance, …', 'On balance, I think the benefits are greater than the costs.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'A local radio phone-in', lines: [
            { who: 'Presenter', s: 'Our question today: should the town limit the number of cruise ships? Lena, you’re on the line.' },
            { who: 'Lena', s: 'Well, on the one hand, the passengers spend money in our shops. On the other hand, they only stay for a few hours.' },
            { who: 'Presenter', s: 'So are you for or against a limit?' },
            { who: 'Lena', s: 'Admittedly, some businesses would lose out. But in spite of that, I think a limit makes sense.' },
            { who: 'Presenter', s: 'Thank you. Kemal, what do you think?' },
            { who: 'Kemal', s: 'I see Lena’s point. However, my restaurant depends on those passengers, so on balance I’m against it.' },
          ] },
          { t: 'text', md: 'Both callers see two sides. *Admittedly* accepts a point from the other side before you argue against it. *On balance* introduces your final opinion after you have weighed everything.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct linker.', items: [
            { q: '___ the rain, thousands of people came to the carnival.', o: ['Despite', 'Although', 'However'], why: '*Despite* + noun. *Although* needs a subject and a verb.' },
            { q: '___ the island is beautiful, it is very expensive to visit.', o: ['Although', 'Despite', 'In spite of'], why: '*Although* + clause: *the island is beautiful*.' },
            { q: 'The new airport will bring jobs. ___, it will also bring noise.', o: ['However', 'Although', 'Despite'], why: '*However* starts a new sentence, followed by a comma.' },
            { q: 'In spite of ___ hard, the council couldn’t reduce the traffic.', o: ['trying', 'try', 'it tried'], why: '*In spite of* + *-ing*.' },
            { q: 'After looking at both sides: “___, I think the plan is a good idea.”', o: ['On balance', 'On the one hand', 'Admittedly'], why: '*On balance* introduces your final opinion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
            { q: 'On the one hand, it’s cheap. On the ___ hand, it’s very crowded.', a: ['other'], why: '*On the one hand… On the other hand…*' },
            { q: 'In ___ of the high prices, the hotel is always full.', a: ['spite'], why: '*In spite of* + noun.' },
            { q: '___, the ferry is cheaper than the plane, but it takes much longer.', a: ['Admittedly', 'True', 'Certainly', 'Granted', 'Obviously', 'Of course'], why: '*Admittedly* accepts a point before a contrast.' },
            { q: 'Despite ___ (spend) a week there, we never saw the castle.', a: ['spending', 'having spent'], why: '*Despite* + *-ing*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Although it was crowded, we loved the market.', why: '*Although* + clause, then the main clause.' },
            { a: 'On balance, I am against the new hotel.', why: '*On balance* + your final opinion.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Two views on tourism',
      about: 'Read two opinion pieces about tourism and compare their arguments.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Don’t shut the door on visitors', md: 'Every summer, someone writes an article complaining that places like Porthmellin are being ruined by tourists. I understand the frustration. In August the narrow streets are packed, parking is impossible and the queue for the ferry stretches all the way along the harbour.\n\nBut I have lived here all my life, and I remember what the village was like before tourism grew. The fishing industry had almost disappeared, young people were leaving to find work, and half the shops on the high street were empty. Today, my café employs eight people in summer, and the bakery, the boat-trip company and the surf school all depend on visitors. So do the farmers who supply our kitchen.\n\nAdmittedly, not everything about tourism is positive. Holiday lets have pushed up rents, and some local families can no longer afford to live here. That is a real problem, and the council should limit the number of short-term rentals. However, the answer is to manage tourism better, not to discourage it. Without visitors, villages like ours would slowly die. Instead of complaining about tourists, we should be asking how to make sure that the money they spend stays in the community.\n\n*Gwen Treloar runs a café in Porthmellin.*' },
        ],
        [
          { t: 'reading', title: 'Fewer visitors, longer stays', md: 'I live in the historic centre of a city that appears on almost every list of places to see. Ten years ago, my street had a butcher, a hardware shop and a primary school. Today it has four souvenir shops, two ice-cream parlours and a building full of holiday flats. The school closed because there were not enough children left.\n\nSupporters of tourism point out that it creates jobs, and that is true. But many of those jobs are seasonal and badly paid, and much of the profit goes to companies based elsewhere. Meanwhile, the people who give the city its character are being pushed out. Despite all the visitors, the old centre feels emptier every year.\n\nI am not against tourism. I travel myself, and I love meeting people from other countries. What I would like to see is a different kind of tourism: fewer day-trippers who stay for three hours, and more visitors who stay longer, spend their money in local businesses and treat the city as a place where people live, not as a theme park. On balance, fewer visitors would be better for everyone, including the visitors themselves.\n\n*Dario Mendes is a teacher and lives in the old town.*' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Gwen thinks the complaints about crowds in August are completely wrong.', a: 'f', why: '“I understand the frustration.”' },
            { q: 'Before tourism grew, many shops in Porthmellin were empty.', a: 't', why: '“Half the shops on the high street were empty.”' },
            { q: 'Gwen wants the council to limit short-term rentals.', a: 't', why: '“The council should limit the number of short-term rentals.”' },
            { q: 'Dario’s street had a primary school ten years ago.', a: 't', why: '“Ten years ago, my street had… a primary school.”' },
            { q: 'Dario never travels abroad.', a: 'f', why: '“I travel myself.”' },
            { q: 'Dario works in the tourism industry.', a: 'ng', why: 'He is a teacher. The text does not say he works in tourism.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Compare the two writers.', items: [
            { q: 'What do both writers agree on?', o: ['Holiday flats can cause problems for local people.', 'Tourism should be stopped.', 'Tourism jobs are always well paid.'], why: 'Gwen mentions rising rents; Dario mentions a building full of holiday flats and people being pushed out.' },
            { q: 'Why does Gwen write “Admittedly, not everything about tourism is positive”?', o: ['To accept a point from the other side before arguing against it.', 'To change her opinion completely.', 'To give her final conclusion.'], why: '*Admittedly* accepts a point before a contrast.' },
            { q: 'Dario’s main suggestion is:', o: ['fewer visitors who stay longer', 'more cruise ships', 'closing the city to all visitors'], why: 'He wants fewer day-trippers and more visitors who stay longer.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the linker that introduces a contrast.', items: [
            { s: 'Supporters of tourism point out that it creates jobs, and that is true. [But] many of those jobs are seasonal.', why: '*But* introduces the other side of the argument.' },
            { s: '[Despite] all the visitors, the old centre feels emptier every year.', why: '*Despite* + noun: something surprising in contrast.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The new road has ___ to more traffic in the village.', o: ['led', 'resulted', 'caused'], why: '*Lead to* + noun.' },
      { q: 'The damage was caused ___ a storm.', o: ['by', 'from', 'to'], why: '*Be caused by*.' },
      { q: '___ the cost, we decided to stay for a week.', o: ['Despite', 'Although', 'However'], why: '*Despite* + noun.' },
      { q: '___ it was expensive, the tour was worth it.', o: ['Although', 'Despite', 'In spite of'], why: '*Although* + clause.' },
      { q: 'A flat rented to visitors for a few days is a ___ rental.', o: ['short-term', 'seasonal', 'sustainable'], why: '*A short-term rental*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'Overcrowding can result ___ damage to old buildings.', a: ['in'], why: '*Result in* + effect.' },
      { q: 'The trains were full. As a ___, we had to stand.', a: ['result', 'consequence'], why: '*As a result* introduces the effect.' },
      { q: 'On ___, I think tourism does more good than harm.', a: ['balance'], why: '*On balance* introduces your final opinion.' },
      { q: 'The park was closed ___ to the fire risk.', a: ['due', 'owing'], why: '*Due to* + noun gives the reason.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Tourism has led to higher rents.', why: '*Lead to* + noun.' },
      { a: 'In spite of the crowds, we enjoyed it.', why: '*In spite of* + noun, then the main clause.' },
    ] },
  ],
};
