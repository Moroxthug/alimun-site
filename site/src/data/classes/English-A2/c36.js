// English A2, class 36 (docs/LESSONS_PLAN.md). Builds on book lesson u7:p1. Draft for the owner's review.
export const LESSON = {
  id: 'c36',
  focus: 'By the end of the class every student can talk about how they travel (*by train, on the bus, in my car*), use **get on / get off** and **get in / get out of** correctly, buy a ticket at a station and ask for information. *luggage* and *information* as uncountable words should be clear.',
  tips: [
    'The *by* rule causes many mistakes: *by train* but *on the 9 o’clock train* and *in my car*. No *the* or *my* after *by*.',
    '*get on / off* for buses, trains, planes and bikes; *get in / out of* for cars and taxis. A simple image helps: can you walk inside? *on/off*.',
    'Almost every learner says *luggages* or *informations*. Correct it every time and give *two bags*, *some information*.',
    'Use real tickets or timetables (or screenshots) to make the station dialogue concrete.',
  ],
  plan: [
    { min: 5, title: 'Warm-up', md: 'Ask: *How did you get here today? How do you get to work?* Write answers on the board with *by*.' },
    { min: 10, title: 'By, on, in', md: 'Board page 1. Go through the examples, then students choose the right word.' },
    { min: 10, title: 'Getting on and off', md: 'Board page 2. Students sort the transport into *get on/off* and *get in/out of*, then fix the mistakes.' },
    { min: 15, title: 'Activity', md: 'Use the activity for your class size below: at the station.' },
    { min: 10, title: 'Luggage and information', md: 'Board page 3. Students complete the gaps and say why there is no plural.' },
    { min: 5, title: 'Exam corner', md: 'Board page 4: Reading Part 1 notices at a station.' },
    { min: 5, title: 'Close', md: 'Each student describes their best journey in two sentences. Set the homework.' },
  ],
  board: [
    { title: 'by, on, in', blocks: [
      { t: 'examples', items: [
        { s: 'I go to work **by bus**.', n: '*by* + transport, no *the*.' },
        { s: 'We went **on the 9 o’clock train**.', n: 'A particular train: *on the*.' },
        { s: 'She drives **in her car**.', n: 'With *my, her, the*: *in* or *on*, not *by*.' },
        { s: 'I walk to school. I go **on foot**.', n: 'Walking: *on foot*.' },
      ] },
      { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
        { q: 'They travelled to Spain ___ plane.', o: ['by', 'by the', 'on'], why: '*by* + transport.' },
        { q: 'I came ___ my dad’s car.', o: ['in', 'by', 'on'], why: 'With *my dad’s*: *in*.' },
        { q: 'He’s ___ the 7.30 bus.', o: ['on', 'by', 'in'], why: 'A particular bus: *on the*.' },
      ] },
    ] },
    { title: 'Getting on and off', blocks: [
      { t: 'ex', kind: 'sort', h: 'get on / off or get in / out of?', groups: ['get on / off', 'get in / out of'], items: [
        { s: 'a train', g: 0, why: 'You can walk inside a train: *get on*.' },
        { s: 'a taxi', g: 1, why: 'A small car: *get in*.' },
        { s: 'a bike', g: 0, why: 'You sit on top: *get on*.' },
        { s: 'a car', g: 1, why: '*get in / out of* a car.' },
        { s: 'a plane', g: 0, why: '*get on / off* a plane.' },
      ] },
      { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
        { s: 'I went [by the train].', a: ['by train'], why: 'After *by*, no *the*.' },
        { s: 'We got [out of] the bus at the station.', a: ['off'], why: 'Buses: *get off*.' },
      ] },
    ] },
    { title: 'Luggage and information', blocks: [
      { t: 'text', md: '**Luggage** and **information** are uncountable, like *water* and *money*: no *a*, no plural. Say *two bags* or *two pieces of luggage*, *some information*.' },
      { t: 'ex', kind: 'gap', h: 'Write one word.', items: [
        { q: 'Where can I put my ___? (bags)', a: ['luggage'], why: 'No plural: *my luggage*.' },
        { q: 'Can I have ___ information about the trains to Bath?', a: ['some'], why: 'Uncountable: *some information*.' },
        { q: 'I’ve got two ___ and a small backpack.', a: ['bags', 'suitcases'], why: 'Countable words for luggage: *bags*.' },
      ] },
    ] },
    { title: 'Exam corner: Reading Part 1', blocks: [
      { t: 'reading', title: 'Station notice', md: 'Platform 4: the 10.15 train to Bristol is 20 minutes late. Passengers for Bath should change at Bristol.' },
      { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: what does the notice say?', items: [
        { q: '', o: ['The train to Bristol will leave at 10.35.', 'There is no train to Bath today.', 'The train to Bath leaves from platform 4 at 10.15.'], why: '10.15 + 20 minutes late = 10.35. For Bath you change at Bristol.' },
      ] },
      { t: 'tip', art: 'owl', md: 'In Reading Part 1 you sometimes have to **work something out**, like a new time. Read the whole notice, then check each answer against it.' },
    ] },
  ],
  activities: {
    one: { title: 'At the ticket office', md: 'You are the ticket seller; the student wants to travel to a city (with luggage). They ask for a ticket, the time, the platform and if they have to change. Give one problem (the train is late). Swap roles.' },
    small: { title: 'My journey', md: 'Each student describes a real journey (home to work, a holiday trip) with at least three kinds of transport and *get on/off, get in/out of*. The others ask two questions each. Finish with the most complicated journey.' },
    group: { title: 'Travel information desk', md: 'In breakout rooms of three, one student is the information desk, two are travellers with questions (times, platforms, luggage). Each traveller asks three questions. Rotate. Back together, rooms share one useful question they asked.' },
  },
  homework: { book: 'u7:p1', md: 'Finish book lesson 1 of unit 7 (Getting there), including the speaking task. Then write how you would travel from your home to the airport: four sentences with *by*, *get on/off* or *get in/out of*.' },
};
