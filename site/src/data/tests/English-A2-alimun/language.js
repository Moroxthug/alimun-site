// Alimun test, English A2: Use of English. Draft for native-teacher review.
export const PAPER = {
  id: 'language', title: 'Use of English: grammar and vocabulary', minutes: 25,
  parts: [
    {
      id: 'p1', ref: 'Part 1', title: 'An email',
      about: 'Read the email. Choose the right word for each gap.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Choose the right word.',
          text: 'Hi Paula,\n\nHow {} you? I’m writing from Edinburgh! We {} here on Saturday by train. The journey was long, but it was {} than the bus.\n\nOur hotel is in the city centre, {} to a big park. Yesterday we {} the castle and then we had lunch in a little café. I had {} soup and some bread. It was very good.\n\nThe weather isn’t great. It {} raining right now, so we’re in the hotel. Tomorrow we’re {} to visit the museum. I’ve never {} to Scotland before, and I love it.\n\nSee you {} Friday!\n\nAnna',
          items: [
            { o: ['are', 'is', 'do', 'have'], why: 'We ask “How are you?”: *be* with *you* is *are*.' },
            { o: ['arrived', 'arrive', 'arriving', 'are arriving'], why: 'Last Saturday is finished time, so we use the past simple.' },
            { o: ['faster', 'fast', 'fastest', 'more fast'], why: 'Comparing two things with *than* needs the comparative *faster*.' },
            { o: ['next', 'near', 'opposite', 'between'], why: 'We say *next to*; *near* and *opposite* are not used with *to*.' },
            { o: ['visited', 'visit', 'have visited', 'were visiting'], why: '*Yesterday* is finished time, so we use the past simple.' },
            { o: ['some', 'a', 'many', 'an'], why: '*Soup* is uncountable, so we say *some soup*.' },
            { o: ['is', 'was', 'are', 'has'], why: '*Right now* needs the present continuous: *it is raining*.' },
            { o: ['going', 'go', 'will', 'went'], why: 'A plan: *be going to* + verb.' },
            { o: ['been', 'gone', 'went', 'go'], why: 'For a visit and return we say *I’ve never been to*.' },
            { o: ['on', 'in', 'at', 'to'], why: 'We use *on* with days: *on Friday*.' },
          ] },
      ],
    },
    {
      id: 'p2', ref: 'Part 2', title: 'Grammar',
      about: 'Choose the right word, then write the missing word.',
      blocks: [
        { t: 'ex', kind: 'select', h: 'Choose the right word for each gap.', items: [
          { q: 'My brother ___ to work by car every day.', o: ['goes', 'go', 'is going'], why: '*Every day* is a routine: present simple, and *he* takes *-es*.' },
          { q: 'How ___ apples do you want?', o: ['many', 'much', 'any'], why: '*Apples* is countable and plural, so we ask *how many*.' },
          { q: 'You’ve got a temperature. You ___ stay in bed.', o: ['should', 'can’t', 'don’t'], why: 'We give advice with *should*.' },
          { q: 'I ___ dinner when my phone rang.', o: ['was cooking', 'cooked', 'am cooking'], why: 'A longer action in the past, stopped by a short one: past continuous.' },
          { q: 'This is the ___ restaurant in our town.', o: ['best', 'better', 'good'], why: 'One of all the restaurants: the superlative, *the best*.' },
          { q: 'At work we ___ wear a uniform. It’s a rule.', o: ['have to', 'has to', 'should to'], why: 'A rule is *have to*; with *we* it is *have*, not *has*.' },
        ] },
        { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
          { q: 'There ___ two bedrooms in my flat.', a: ['are'], why: 'Two bedrooms is plural: *there are*.' },
          { q: '___ you go out last night?', a: ['Did'], why: 'Past simple questions start with *did*.' },
          { q: 'Have you ___ eaten Indian food?', a: ['ever'], why: 'We ask about experiences with *Have you ever...?*' },
          { q: 'Would you like ___ come to my party?', a: ['to'], why: 'We say *would like to* + verb.' },
        ] },
      ],
    },
    {
      id: 'p3', ref: 'Part 3', title: 'Words',
      about: 'Put the words in the right sentences. Then put the words in groups.',
      blocks: [
        { t: 'ex', kind: 'bank', h: 'Choose a word from the box for each sentence.', extra: ['kitchen', 'stomach'], items: [
          { q: 'I’d like a ___ of water, please.', a: 'bottle', why: 'Water comes in a *bottle*.' },
          { q: 'I can’t talk very well. I’ve got a sore ___.', a: 'throat', why: 'A sore *throat* makes it hard to talk.' },
          { q: 'Turn left at the ___ and the bank is on your right.', a: 'corner', why: 'We turn at a *corner* in the street.' },
          { q: 'Our plane leaves at 8, so we must be at the ___ at 6.', a: 'airport', why: 'Planes leave from the *airport*.' },
          { q: 'Can I see your ___, please? I need to check your name at the border.', a: 'passport', why: 'You show your *passport* at the border.' },
        ] },
        { t: 'ex', kind: 'sort', h: 'Can you count it? Put each word in a group.', groups: ['We can count it (a, two, three)', 'We can’t count it (some, much)'], explain: ['groups'], items: [
          { s: 'egg', g: 0, why: 'We can say *an egg, two eggs*.' },
          { s: 'rice', g: 1, why: '*Rice* is uncountable: *some rice*.' },
          { s: 'sandwich', g: 0, why: 'We can say *a sandwich, two sandwiches*.' },
          { s: 'cheese', g: 1, why: 'We say *some cheese* or *a piece of cheese*.' },
          { s: 'information', g: 1, why: '*Information* is uncountable in English.' },
        ] },
      ],
    },
  ],
};
