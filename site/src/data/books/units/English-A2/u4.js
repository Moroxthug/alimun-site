// English A2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Homes and towns',
  goal: 'Describe your home and your town, and compare places.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['there-is-there-are', 'prepositions-of-place', 'comparatives', 'directions', 'home'], goals: ['foundations', 'relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'There’s a park opposite',
      about: 'Say what there is in a place with there is and there are, and say where things are.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use **there is** (*there’s*) with a singular or uncountable noun, and **there are** with a plural noun, to say that something exists in a place.' },
          { t: 'table', caption: 'There is, there are', explain: ['head'], quiz: true, head: ['', 'Singular', 'Plural'], rows: [
            ['+', 'There’s a balcony.', 'There are two bedrooms.'],
            ['−', 'There isn’t a garden.', 'There aren’t any shops.'],
            ['?', 'Is there a lift?', 'Are there any parks?'],
          ] },
          { t: 'examples', items: [
            { s: '**There’s** a big window in the living room.', n: 'One window: *there’s* = *there is*.' },
            { s: '**There are** three supermarkets in my town.', n: 'Plural: *there are*.' },
            { s: '**Is there** a bus stop near here? Yes, **there is**.', n: 'Short answer: *Yes, there is* or *No, there isn’t*.' },
          ] },
        ],
        [
          { t: 'text', md: '**Prepositions of place** say where something is.' },
          { t: 'table', caption: 'Where is it?', explain: ['head'], quiz: true, head: ['Preposition', 'Example'], rows: [
            ['next to', 'The bakery is next to the bank.'],
            ['opposite', 'The school is opposite the park.'],
            ['between', 'The café is between the cinema and the library.'],
            ['behind', 'There’s a small garden behind the house.'],
            ['in front of', 'There’s a tree in front of my window.'],
            ['near', 'We live near the station.'],
          ] },
          { t: 'tip', art: 'owl', md: '*Opposite* means on the other side, facing it, often across a street. *Next to* means very close, at the side. *Between* needs two things: *between the bank **and** the shop*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with there is, there are, there isn’t, there aren’t, is there or are there.', items: [
            { q: '___ a lovely park near my flat. I go there every day.', a: ['There is', 'There’s'], why: 'One park, positive: *there is*.' },
            { q: '___ any good restaurants in your street?', a: ['Are there'], why: 'A question with a plural noun: *Are there*.' },
            { q: 'It’s a quiet village. ___ any shops or cafés.', a: ['There aren’t', 'There are not'], why: 'Quiet, with no shops: negative plural, *there aren’t*.' },
            { q: '___ two bathrooms in our new house.', a: ['There are'], why: 'Plural, positive: *there are*.' },
            { q: '___ a lift in your building? No, there isn’t.', a: ['Is there'], why: 'A question with a singular noun: *Is there*. The answer is *No, there isn’t*.' },
            { q: 'Sorry, ___ any milk. Can you buy some?', a: ['there isn’t', 'there is not'], why: '*Milk* is uncountable, so *there isn’t any*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct preposition.', items: [
            { q: 'The café is ___ the cinema and the library.', o: ['between', 'next to', 'opposite'], why: 'Two places, one on each side: *between* … *and* ….' },
            { q: 'You can’t see the car from the street. It’s ___ the house.', o: ['behind', 'in front of', 'opposite'], why: 'You cannot see it, so it is at the back: *behind*.' },
            { q: 'The bus stop is ___ my house, on the other side of the road.', o: ['opposite', 'behind', 'between'], why: 'On the other side of the road, facing it: *opposite*.' },
            { q: 'The pharmacy and the supermarket are in the same building. The pharmacy is ___ the supermarket.', o: ['next to', 'opposite', 'between'], why: 'At the side, very close: *next to*.' },
            { q: 'There’s a bike ___ the door. Please move it, I can’t get in!', o: ['in front of', 'opposite', 'between'], why: 'It stops you from going in, so it is *in front of* the door.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap every preposition of place.', items: [
            { s: 'The bakery is [next to] the bank, and the post office is [opposite] the school.', why: '*Next to* and *opposite* say where the places are.' },
            { s: 'My flat is [between] a hotel and a gym.', why: '*Between* says where the flat is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Is there a bank near here?', why: 'Question: *Is there* + a singular noun.' },
            { a: 'How many bedrooms are there?', why: '*How many* + plural noun + *are there*?' },
            { a: 'Are there any shops near your flat?', why: 'Question: *Are there any* + a plural noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Bigger and better',
      about: 'Compare places and things with comparative adjectives and than.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Use a **comparative** adjective + **than** to compare two things: *My flat is **smaller than** your house.*' },
          { t: 'table', caption: 'How to make comparatives', explain: ['head', 'col0'], quiz: true, head: ['Adjective', 'Comparative'], rows: [
            ['short adjective: add -er', 'cheap → cheaper, old → older'],
            ['ends in -e: add -r', 'nice → nicer, safe → safer'],
            ['one vowel + one consonant: double it', 'big → bigger, hot → hotter'],
            ['ends in -y: change to -ier', 'busy → busier, noisy → noisier'],
            ['long adjective: more + adjective', 'expensive → more expensive'],
            ['irregular', 'good → better, bad → worse, far → further'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'The city is **noisier than** the village.', n: '*Noisy* ends in *-y*, so *noisier*.' },
            { s: 'Rents here are **more expensive than** in my home town.', n: '*Expensive* is long: *more expensive*.' },
            { s: 'The weather is **better** today **than** yesterday.', n: '*Good* is irregular: *better*.' },
            { s: 'My new job is **much easier than** my old one.', n: '*Much* before a comparative makes the difference bigger.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Use *-er* **or** *more*, never both. Say *bigger*, not *more bigger*. And after a comparative, use *than*, not *that*: *older than me*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the comparative of the adjective in brackets.', items: [
            { q: 'My new flat is ___ (big) than my old one.', a: ['bigger'], why: 'One vowel + one consonant: double the *g*.' },
            { q: 'The train is ___ (fast) than the bus.', a: ['faster'], why: 'Short adjective: add *-er*.' },
            { q: 'Life in the city is ___ (busy) than life in the country.', a: ['busier'], why: '*Busy* ends in *-y*: *busier*.' },
            { q: 'This area is ___ (beautiful) than the city centre.', a: ['more beautiful'], why: '*Beautiful* is long: *more beautiful*.' },
            { q: 'The traffic is ___ (bad) in the morning than in the evening.', a: ['worse'], why: '*Bad* is irregular: *worse*.' },
            { q: 'The beach is ___ (far) from here than the park.', a: ['further', 'farther'], why: '*Far* is irregular: *further* or *farther*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['London is bigger than Bristol.', 'London is more bigger than Bristol.', 'London is bigger that Bristol.'], why: '*Big* takes *-er*, never *more* too, and we use *than*.' },
            { q: '', o: ['My sister’s flat is nicer than mine.', 'My sister’s flat is more nice than mine.', 'My sister’s flat is nicier than mine.'], why: '*Nice* ends in *-e*: just add *-r*.' },
            { q: '', o: ['This street is more dangerous at night.', 'This street is dangerouser at night.', 'This street is more dangerouser at night.'], why: '*Dangerous* is long: *more dangerous*.' },
            { q: '', o: ['The food here is better than at home.', 'The food here is gooder than at home.', 'The food here is more good than at home.'], why: '*Good* is irregular: *better*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'My town is smaller than your city.', why: 'Subject + *is* + comparative + *than* + the second thing.' },
            { a: 'Is your flat cheaper than mine?', why: 'Question: *Is* + subject + comparative + *than*.' },
            { a: 'The park is much quieter than the square.', why: '*Much* goes before the comparative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'How do I get to…?',
      about: 'Ask for and give directions in town.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'dialogue', title: 'In the street', lines: [
            { who: 'Ines', s: 'Excuse me. How do I get to the train station, please?' },
            { who: 'Man', s: 'Go straight on and turn left at the traffic lights.' },
            { who: 'Ines', s: 'Left at the traffic lights. OK.' },
            { who: 'Man', s: 'Then take the second street on the right. Go past the church, and the station is at the end of the street.' },
            { who: 'Ines', s: 'Is it far?' },
            { who: 'Man', s: 'No, it’s about ten minutes on foot.' },
            { who: 'Ines', s: 'Thank you very much!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'What it means'], rows: [
            ['go straight on', 'do not turn, keep going'],
            ['turn left / turn right', 'change direction'],
            ['take the first street on the left', 'turn into the first street on your left'],
            ['go past the church', 'walk by the church, but do not stop there'],
            ['cross the road', 'go to the other side of the road'],
            ['at the end of the street', 'where the street finishes'],
            ['it’s on your left', 'you can see it on your left side'],
          ] },
          { t: 'tip', art: 'owl', md: 'To ask, start with *Excuse me*. Then say *How do I get to…?* or *Is there a… near here?* To say thank you, *Thank you very much* is always polite.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['Excuse me, how do I get', 'to the museum?'],
            ['Go straight', 'on.'],
            ['Take the first street', 'on the right.'],
            ['Cross', 'the road.'],
            ['The bank is at the end', 'of the street.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the directions with one word.', items: [
            { q: 'Go ___ the bank, and the post office is after it.', a: ['past'], why: '*Go past*: walk by something without stopping.' },
            { q: 'The museum is ___ the end of this street.', a: ['at'], why: 'We say *at the end of the street*.' },
            { q: 'Turn left, and the hotel is ___ your right.', a: ['on'], why: 'We say *on your right* and *on your left*.' },
            { q: 'Excuse me, how do I get ___ the hospital?', a: ['to'], why: '*How do I get to…?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation in the street. True or false?', items: [
            { q: 'Ines wants to go to the bus station.', a: 'f', why: 'She asks for the train station.' },
            { q: 'She turns left at the traffic lights.', a: 't', why: '“Turn left at the traffic lights.”' },
            { q: 'The station is before the church.', a: 'f', why: 'She goes past the church, and the station is at the end of the street.' },
            { q: 'The station is near: about ten minutes on foot.', a: 't', why: '“It’s about ten minutes on foot.”' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Is there a pharmacy near here?', why: 'Question: *Is there* + a singular noun.' },
            { a: 'Take the second street on the left.', why: '*Take* + *the second street* + *on the left*.' },
            { a: 'How do I get to the library?', why: '*How do I get to* + the place?' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'My new neighbourhood',
      about: 'Read an email about a new flat and the area around it.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'An email from Glasgow', md: 'Hi Grace,\n\nI moved into my new flat last month, and I love it! It’s on the third floor of an old building. There are two bedrooms, a small kitchen and a big living room with a balcony. It’s bigger than my old flat, but it’s a bit more expensive.\n\nThe neighbourhood is great. There’s a bakery opposite my building, and there’s a small park behind it. The nearest supermarket is between the bank and the post office, only five minutes on foot. There isn’t a cinema near here, but there are a lot of cafés.\n\nThe area is quieter than the city centre, and the people are friendlier. The only problem is the bus to work. It’s slower than the train in my old town.\n\nCome and visit soon!\n\nLove,\nKenji' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Kenji’s new flat has got a balcony.', a: 't', why: 'The living room has a balcony.' },
            { q: 'The new flat is cheaper than his old flat.', a: 'f', why: 'It is a bit more expensive.' },
            { q: 'The bakery is behind his building.', a: 'f', why: 'The bakery is opposite his building. The park is behind it.' },
            { q: 'There is a cinema near Kenji’s flat.', a: 'f', why: '“There isn’t a cinema near here.”' },
            { q: 'Kenji works in the city centre.', a: 'ng', why: 'He takes the bus to work, but the email does not say where he works.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: 'Where is the supermarket?', o: ['Between the bank and the post office.', 'Opposite the bakery.', 'Behind the park.'], why: '“The nearest supermarket is between the bank and the post office.”' },
            { q: 'What does Kenji think of the people in the area?', o: ['They are friendlier than in the city centre.', 'They are noisier than in his old town.', 'He doesn’t know them.'], why: '“The people are friendlier.”' },
            { q: 'What is the problem with the new flat?', o: ['The bus to work is slow.', 'The rooms are small.', 'The area is noisy.'], why: '“The only problem is the bus to work. It’s slower than the train.”' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap every comparative.', items: [
            { s: 'It’s [bigger] than my old flat, but it’s a bit [more expensive].', why: '*Bigger* and *more expensive* compare the two flats.' },
            { s: 'The area is [quieter] than the city centre, and the people are [friendlier].', why: '*Quieter* and *friendlier* are comparatives with *-er* and *-ier*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: '___ any parks near your house?', o: ['Are there', 'Is there', 'There are'], why: 'A question with a plural noun: *Are there*.' },
      { q: 'The cinema is ___ the café and the hotel.', o: ['between', 'next', 'opposite'], why: 'Two places, one on each side: *between* … *and* ….' },
      { q: 'My new job is ___ than my old one.', o: ['more interesting', 'interestinger', 'more interestinger'], why: '*Interesting* is long: *more interesting*.' },
      { q: 'Go ___ the cinema and turn right.', o: ['past', 'across', 'between'], why: '*Go past*: walk by it without stopping.' },
      { q: 'This summer is ___ than last summer.', o: ['hotter', 'hoter', 'more hot'], why: '*Hot*: one vowel + one consonant, so double the *t*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ a bus stop in front of the school. (there is / there are)', a: ['There is', 'There’s'], why: 'One bus stop, positive: *there is*.' },
      { q: 'My brother is ___ (old) than me.', a: ['older'], why: 'Short adjective: add *-er*.' },
      { q: 'The flat is nice, but the kitchen is ___ (small) than the photos.', a: ['smaller'], why: 'Short adjective: add *-er*.' },
      { q: 'The station is at the end ___ the street.', a: ['of'], why: 'We say *at the end of the street*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'How do I get to the castle?', why: '*How do I get to* + the place?' },
      { a: 'Is your street noisier than mine?', why: 'Question: *Is* + subject + comparative + *than*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['There are three bedrooms in the flat.', 'There is three bedrooms in the flat.', 'There have three bedrooms in the flat.'], why: 'Plural noun: *there are*.' },
      { q: '', o: ['The weather here is worse than at home.', 'The weather here is badder than at home.', 'The weather here is more bad than at home.'], why: '*Bad* is irregular: *worse*.' },
      { q: '', o: ['The pharmacy is opposite the bank.', 'The pharmacy is opposite of the bank.', 'The pharmacy is opposite at the bank.'], why: 'We say *opposite the bank*, with no *of*.' },
    ] },
  ],
};
