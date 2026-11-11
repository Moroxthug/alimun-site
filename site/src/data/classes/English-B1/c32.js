// English B1, class 32 (docs/LESSONS_PLAN.md, L6). Builds on book lesson u7:p2. Draft for the owner's review.
export const LESSON = {
  id: 'c32',
  focus: 'By the end of the class every student can describe a home and the area around it in detail (rooms, features, what is nearby, what it is like to live there) and put two or three adjectives in the natural order (*a lovely old wooden table*). Each student describes the home they live in now and the home they would like, for at least a minute each.',
  tips: [
    'Adjective order is felt more than learned. Teach the short version: **opinion, size, age, colour, material** + noun, and practise with real objects in the students’ rooms.',
    'Students often put the adjective after the noun (*a house big*) or add *-s* to adjectives (*nices rooms*). Correct both quickly.',
    'Words that confuse: *flat* (British) and *apartment* (American) are both fine; *a floor* can be the level of a building (*on the third floor*); *a room* is not *a place* in English for space: say *There isn’t much space*.',
    'For the area, push beyond *There is a supermarket*: *It’s a lively area with lots of cafés*, *It’s quiet at night*, *It’s well connected*.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *What is your favourite room at home, and why?* One sentence each.' },
    { min: 10, title: 'Homes', md: 'Show board page 1. Go through the words, then students sort them and say which ones describe their home.' },
    { min: 10, title: 'Adjective order', md: 'Show board page 2. Go through the order, then students build the phrases and describe two objects near them.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below.' },
    { min: 10, title: 'Exam corner', md: 'Show board page 3: B1 Preliminary Reading part 2, matching people to flats. Students read alone and choose, then explain.' },
    { min: 5, title: 'Neighbourhoods', md: 'Show board page 4. Students say which phrases describe their area.' },
    { min: 5, title: 'Close', md: 'Each student says one thing they would change about their home. Set the homework.' },
  ],
  board: [
    { title: 'Inside and outside', blocks: [
      { t: 'ex', kind: 'sort', h: 'Is it part of the home or part of the area?', groups: ['the home', 'the area'], explain: ['groups'], items: [
        { s: 'a balcony', g: 0, why: 'A small outside space on a flat: part of the home.' },
        { s: 'a lively square', g: 1, why: 'A public place nearby: part of the area.' },
        { s: 'a spare room', g: 0, why: 'An extra bedroom: part of the home.' },
        { s: 'good public transport', g: 1, why: 'Buses and trains near you: the area.' },
        { s: 'central heating', g: 0, why: 'Heating in every room: part of the home.' },
        { s: 'a quiet street', g: 1, why: 'Outside the home: the area.' },
      ] },
    ] },
    { title: 'Adjective order', blocks: [
      { t: 'table', caption: 'The usual order', explain: ['head', 'col0'], head: ['', 'Examples'], rows: [
        ['Opinion', 'lovely, ugly, comfortable'],
        ['Size', 'big, small, tiny'],
        ['Age', 'old, new, modern'],
        ['Colour', 'white, dark, green'],
        ['Material', 'wooden, glass, stone'],
      ] },
      { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
        { a: 'a lovely old stone house', why: 'Opinion, age, material, then the noun.' },
        { a: 'a small white kitchen', why: 'Size, colour, then the noun.' },
        { a: 'a comfortable modern sofa', why: 'Opinion, age, then the noun.' },
      ] },
    ] },
    { title: 'Exam corner: Reading part 2', blocks: [
      { t: 'text', md: 'In the format of B1 Preliminary Reading part 2: people want a home; choose the best flat for each.\n\n**Marco** works from home and needs a quiet room for an office. He doesn’t have a car.\n\n**Julia** has a dog and loves cooking for friends.\n\n**Flat A:** two bedrooms, a big modern kitchen and a garden; pets welcome; 30 minutes from the centre by car.\n\n**Flat B:** a bright flat with a spare room at the back, far from the traffic; five minutes from the station.\n\n**Flat C:** a tiny studio in the centre above a busy bar; no pets.' },
      { t: 'ex', kind: 'choice', h: 'Which flat is best?', items: [
        { q: 'Marco', o: ['Flat B', 'Flat A', 'Flat C'], why: 'A quiet spare room for an office, and near the station for someone without a car.' },
        { q: 'Julia', o: ['Flat A', 'Flat B', 'Flat C'], why: 'Pets welcome, a big kitchen and a garden for friends.' },
      ] },
      { t: 'tip', md: 'In Reading part 2 each person has two or three needs. Check that the flat matches **all** of them, not just one: Flat C is central, but it is noisy and has no pets.' },
    ] },
    { title: 'What’s the area like?', blocks: [
      { t: 'ex', kind: 'match', h: 'Match the phrase to its meaning.', pairs: [
        ['It’s well connected.', 'There are good buses and trains.'],
        ['It’s a lively area.', 'There are lots of people, cafés and things to do.'],
        ['It’s up and coming.', 'It is getting better and more popular.'],
        ['It’s a bit run-down.', 'The buildings are old and not looked after.'],
      ] },
    ] },
  ],
  activities: {
    one: { title: 'Dream home', md: 'The student describes their home now for one minute, then their dream home for one minute, with at least three adjective pairs in the right order and two phrases about the area. Ask follow-up questions about each room. At the end, give back three phrases with the adjectives in a better order.' },
    small: { title: 'Estate agents', md: 'In pairs, A is an estate agent and describes a flat to rent (invent it, with adjectives in order and the area); B is a customer with two needs and asks questions. Then swap. The group votes for the most convincing agent.' },
    group: { title: 'Home swap', md: 'In breakout rooms of three, each student describes their real home as if offering it for a holiday home swap: rooms, features, the area. The others ask questions and decide whose home they would choose. Bring everyone back: each room says which home won and why.' },
  },
  homework: { book: 'u7:p2', md: 'Finish book lesson 2 of unit 7 (Homes and neighbourhoods), including the speaking task. Then write an advert of 60 to 80 words for your home or an imaginary flat, with at least three adjective pairs and two phrases about the area.' },
};
