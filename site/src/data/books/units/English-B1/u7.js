// English B1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'A new home abroad',
  goal: 'Describe places, people and customs in a new country.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['relative-clauses', 'adjective-order', 'homes', 'customs'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The people who live next door',
      about: 'Say which person, thing or place you mean with who, which, that, where and whose.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **defining relative clause** tells us **which** person, thing or place we mean. Without it, the sentence is not clear. It comes straight after the noun.' },
          { t: 'table', caption: 'Relative pronouns', explain: ['head', 'col1'], head: ['Word', 'Use', 'Example'], rows: [
            ['who', 'for people', 'The woman **who** lives next door is a nurse.'],
            ['which', 'for things', 'The flat **which** we rented was very small.'],
            ['that', 'for people or things', 'The bus **that** goes to the centre is the 12.'],
            ['where', 'for places', 'This is the café **where** we first met.'],
            ['whose', 'for possession (his, her, their)', 'I have a neighbour **whose** son plays the drums.'],
          ] },
        ],
        [
          { t: 'text', md: 'When *who*, *which* or *that* is the **object** of the clause, you can leave it out. When it is the **subject**, you must keep it.' },
          { t: 'examples', items: [
            { s: 'The flat (**that**) we rented was very small.', n: '*We* is the subject of *rented*, so *that* is the object. You can leave it out.' },
            { s: 'The man **who** called you is my landlord.', n: '*Who* is the subject of *called*. You cannot leave it out.' },
            { s: 'That’s the shop **where** I buy my bread.', n: 'After a place, *where* + subject + verb.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not add a second pronoun: say *the man who lives here*, not *the man who he lives here*. And use *who* or *that* for people, never *which*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct word.', items: [
            { q: 'I met a woman ___ works at the embassy.', o: ['who', 'which', 'where'], why: 'A person, and the subject of *works*: *who*.' },
            { q: 'The supermarket ___ is near our flat closes at ten.', o: ['that', 'who', 'where'], why: 'A thing: *that* or *which*. *Where* would need a subject after it.' },
            { q: 'This is the street ___ I grew up.', o: ['where', 'which', 'who'], why: 'A place, followed by subject + verb: *where*.' },
            { q: 'He’s the neighbour ___ dog barks all night.', o: ['whose', 'who', 'who’s'], why: 'The dog belongs to him: *whose*. *Who’s* means *who is*.' },
            { q: 'Do you remember the restaurant ___ we had dinner on our first night?', o: ['where', 'which', 'who'], why: 'We had dinner there, in that place: *where*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a relative pronoun: *who*, *which*, *that*, *where* or *whose*.', items: [
            { q: 'The teacher ___ helped me with my visa forms was very kind.', a: ['who', 'that'], why: 'A person, subject of *helped*: *who* or *that*.' },
            { q: 'I’ve lost the key ___ opens the front door.', a: ['which', 'that'], why: 'A thing, subject of *opens*: *which* or *that*.' },
            { q: 'We stayed in a small town ___ nobody spoke English.', a: ['where'], why: 'A place: *where* + subject + verb.' },
            { q: 'Do you know anyone ___ flat has a garden?', a: ['whose'], why: 'Their flat: *whose*.' },
            { q: 'The doctor ___ I saw yesterday was very helpful.', a: ['who', 'that', 'whom'], why: 'A person: *who* or *that*. Here it is the object, so you could also leave it out.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'This is the café where we met.', why: '*Where* comes straight after the place, *the café*.' },
            { a: 'I have a friend whose father is a pilot.', why: '*Whose* + noun: *whose father*.' },
            { a: 'The man who lives upstairs is French.', why: 'The clause *who lives upstairs* comes straight after *the man*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['A landlord is a person', 'who owns the flat that you rent.'],
            ['A lift is a machine', 'which carries people between floors.'],
            ['A launderette is a place', 'where you can wash your clothes.'],
            ['A flatmate is someone', 'who shares a flat with you.'],
            ['A deposit is money', 'that you pay before you move in.'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Homes and neighbourhoods',
      about: 'Describe where you live, with adjectives in the right order.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Here are useful words for finding a home and describing it.' },
          { t: 'table', caption: 'Homes', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['a detached house', 'a house that is not joined to another house'],
            ['a terraced house', 'a house in a row of houses that are joined together'],
            ['a studio flat', 'a small flat with one main room'],
            ['furnished', 'with furniture already in it'],
            ['the rent', 'the money that you pay every month to live in a place'],
            ['a deposit', 'money that you pay at the start and usually get back when you leave'],
            ['the ground floor', 'the floor at street level'],
          ] },
        ],
        [
          { t: 'text', md: 'To describe a **neighbourhood**, you can say it is *quiet*, *lively*, *safe*, *noisy* or *residential* (with homes, not shops or offices). You can also say what is close: *There’s a park nearby.* *It’s close to the station.* *It’s a ten-minute walk from the centre.*' },
          { t: 'dialogue', title: 'Looking at a flat', lines: [
            { who: 'Agent', s: 'So, this is the living room. The flat is fully furnished.' },
            { who: 'Amira', s: 'It’s lovely and bright. How much is the rent?' },
            { who: 'Agent', s: 'It’s nine hundred a month, plus a deposit of one month’s rent.' },
            { who: 'Amira', s: 'And what’s the neighbourhood like?' },
            { who: 'Agent', s: 'It’s quiet and residential, but there’s a lively market a five-minute walk away.' },
            { who: 'Amira', s: 'Perfect. Is there a lift?' },
            { who: 'Agent', s: 'I’m afraid not, but the flat is only on the second floor.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and the meanings.', pairs: [
            ['furnished', 'with furniture already in it'],
            ['rent', 'money you pay every month for your home'],
            ['detached', 'not joined to another house'],
            ['residential', 'with homes, not shops or offices'],
            ['lively', 'busy and full of energy'],
            ['nearby', 'not far away'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Amira will need to buy furniture.', a: 'f', why: 'The flat is fully furnished.' },
            { q: 'The deposit is the same as one month’s rent.', a: 't', why: '“A deposit of one month’s rent.”' },
            { q: 'There is a market near the flat.', a: 't', why: 'It is a five-minute walk away.' },
            { q: 'The building has a lift.', a: 'f', why: 'The agent says “I’m afraid not.”' },
          ] },
        ],
        [
          { t: 'text', md: 'When you use two or more adjectives before a noun, they usually go in this order. Your **opinion** comes first, and the **material** comes just before the noun.' },
          { t: 'table', caption: 'Adjective order', explain: ['head', 'col0'], head: ['Type', 'Examples'], rows: [
            ['opinion', 'lovely, ugly, comfortable'],
            ['size', 'big, small, tiny'],
            ['age', 'old, new, modern'],
            ['colour', 'white, red, grey'],
            ['origin', 'Spanish, Turkish, Japanese'],
            ['material', 'wooden, stone, glass'],
          ] },
          { t: 'examples', items: [
            { s: 'a **lovely old stone** house', n: 'Opinion, then age, then material.' },
            { s: 'a **small white Italian** car', n: 'Size, then colour, then origin.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech we usually put only one or two adjectives before a noun. Three is possible, but more than three sounds strange.' },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'They live in a lovely old stone house.', why: 'Opinion (*lovely*), age (*old*), material (*stone*).' },
            { a: 'She bought a small white Italian car.', why: 'Size (*small*), colour (*white*), origin (*Italian*).' },
            { a: 'We found a comfortable new leather sofa.', why: 'Opinion (*comfortable*), age (*new*), material (*leather*).' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which phrase has the correct order?', items: [
            { q: '', o: ['a beautiful old Turkish carpet', 'an old beautiful Turkish carpet', 'a Turkish beautiful old carpet'], why: 'Opinion, age, origin.' },
            { q: '', o: ['a big red brick house', 'a red big brick house', 'a brick big red house'], why: 'Size, colour, material.' },
            { q: '', o: ['a tiny grey stone cottage', 'a stone tiny grey cottage', 'a grey tiny stone cottage'], why: 'Size, colour, material.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'In my country we usually…',
      about: 'Talk politely about customs and cultural differences.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'When you talk about customs, it is polite to speak in general and not to judge. These phrases help you compare your country with your new home in a friendly way.' },
          { t: 'table', caption: 'Talking about customs', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['In my country, we usually…', 'In my country, we usually eat dinner at around six.'],
            ['People tend to…', 'People tend to arrive a little late for parties.'],
            ['It’s common to…', 'It’s common to take your shoes off at the door.'],
            ['It’s considered rude / polite to…', 'It’s considered rude to ask someone’s salary.'],
            ['You’re expected to…', 'You’re expected to bring a small gift.'],
            ['I’ve noticed that…', 'I’ve noticed that people here queue very patiently.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'To ask about a custom, use a soft question: *Is it OK to…?*, *Do people usually…?*, *Should I…?* This shows that you want to do the right thing.' },
          { t: 'dialogue', title: 'A first dinner invitation', lines: [
            { who: 'Jonas', s: 'My colleague has invited me to dinner at her home on Saturday. Should I bring anything?' },
            { who: 'Yuki', s: 'Here it’s common to bring something small, like flowers or a dessert.' },
            { who: 'Jonas', s: 'In my country, we usually bring a bottle of wine. Is that OK too?' },
            { who: 'Yuki', s: 'Yes, that’s fine. And people tend to take their shoes off when they come in.' },
            { who: 'Jonas', s: 'Really? I’ve noticed that in a few homes already. What time should I arrive?' },
            { who: 'Yuki', s: 'Try to be on time. Here it’s considered a bit rude to arrive more than ten minutes late.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Jonas has been invited to a colleague’s home.', a: 't', why: 'His colleague has invited him to dinner at her home.' },
            { q: 'Yuki says that flowers are a good gift.', a: 't', why: 'She says it is common to bring flowers or a dessert.' },
            { q: 'Jonas has never seen people take their shoes off at home.', a: 'f', why: 'He has noticed it in a few homes already.' },
            { q: 'Yuki says it is fine to arrive half an hour late.', a: 'f', why: 'More than ten minutes late is a bit rude.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases. Use the word in brackets in the correct form.', items: [
            { q: 'It’s ___ (consider) polite to thank the bus driver.', a: ['considered'], why: '*It’s considered* + adjective + *to*: a passive form.' },
            { q: 'Guests are ___ (expect) to take off their shoes.', a: ['expected'], why: '*Be expected to* + verb.' },
            { q: 'In my country, we ___ (usual) shake hands when we meet.', a: ['usually'], why: 'An adverb before the verb: *usually*.' },
            { q: 'I’ve ___ (notice) that people here rarely pay in cash.', a: ['noticed'], why: 'Present perfect: *I’ve noticed that…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most polite thing to say.', items: [
            { q: 'You want to know if you should tip in a restaurant.', o: ['Do people usually leave a tip here?', 'Why don’t you tip here?', 'Tipping here is wrong.'], why: '*Do people usually…?* is a soft, open question.' },
            { q: 'You want to describe a custom from your country.', o: ['In my country, we usually kiss on both cheeks.', 'Everyone in the world kisses on both cheeks.', 'Your way of saying hello is strange.'], why: '*In my country, we usually…* talks about your custom without judging others.' },
            { q: 'You see people taking off their shoes, and you are not sure what to do.', o: ['Should I take my shoes off too?', 'I don’t want to take my shoes off.', 'Why do you all do that?'], why: '*Should I…?* shows that you want to do the right thing.' },
            { q: 'You notice that people here eat dinner late.', o: ['I’ve noticed that people here tend to eat quite late.', 'People here eat at a crazy time.', 'You eat too late in this country.'], why: '*I’ve noticed that…* and *tend to* sound neutral and friendly.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Thirty days in a new city',
      about: 'Read a blog post about a first month abroad.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Thirty days in a new city', md: 'I moved here exactly one month ago for a job at a design studio. I didn’t know anyone, and the only words I could say in the local language were “hello” and “thank you”.\n\nMy first home was a tiny studio flat that I found online. The photos looked great, but the flat was above a bar where people sang until two in the morning. After a week I found a room in a flat in a quiet residential area. I share the flat with Tomasz, who is a nurse, and Leila, whose food is the best I have ever eaten.\n\nThe biggest surprise has been the customs. People here tend to eat dinner very late, often after nine. It’s also considered rude to start eating before everyone has their food. On my first evening I started too early, and Leila laughed and told me to wait.\n\nThe neighbours are friendly too. The old man who lives downstairs says good morning to me every day, and last week he asked me if I was enjoying the city. I told him I was, and it was true. I still get lost, but every day this place feels a little more like home.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The writer moved to the city for work.', a: 't', why: 'The writer came for a job at a design studio.' },
            { q: 'The writer spoke the local language well on arrival.', a: 'f', why: 'The writer could only say “hello” and “thank you”.' },
            { q: 'The studio flat was noisy at night.', a: 't', why: 'It was above a bar where people sang until two in the morning.' },
            { q: 'Tomasz and Leila are married.', a: 'ng', why: 'The text does not say.' },
            { q: 'Leila is a very good cook.', a: 't', why: 'Her food is the best the writer has ever eaten.' },
            { q: 'The neighbour downstairs is a young man.', a: 'f', why: 'He is an old man.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronouns (*who*, *which*, *that*, *where*, *whose*).', items: [
            { s: 'My first home was a tiny studio flat [that] I found online. It was above a bar [where] people sang until two in the morning.', why: '*That* refers to the flat, a thing. *Where* refers to the bar, a place.' },
            { s: 'The old man [who] lives downstairs says good morning. Leila, [whose] food is wonderful, told me to wait.', why: '*Who* is for a person. *Whose* shows possession: her food.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Answer the questions about the text.', items: [
            { q: 'Why did the writer leave the first flat?', o: ['It was too noisy at night.', 'It was too expensive.', 'It was too far from work.'], why: 'People in the bar below sang until two in the morning.' },
            { q: 'What mistake did the writer make on the first evening?', o: ['Starting to eat before the others had their food.', 'Arriving late for dinner.', 'Eating dinner before nine.'], why: 'It is considered rude to start before everyone has their food.' },
            { q: '“The old man who lives downstairs…” Why *who*?', o: ['It tells us which man, and he is a person.', 'It is for a place.', 'It shows possession.'], why: '*Who* is for people, and the clause tells us which man.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'The woman ___ cuts my hair is from Ghana.', o: ['who', 'which', 'where'], why: 'A person: *who*.' },
      { q: 'That’s the hospital ___ my son was born.', o: ['where', 'which', 'who'], why: 'A place, followed by subject + verb: *where*.' },
      { q: 'I have a friend ___ brother runs a restaurant.', o: ['whose', 'who', 'who’s'], why: 'Her brother: *whose*.' },
      { q: 'They live in a ___ house.', o: ['lovely old stone', 'stone lovely old', 'old stone lovely'], why: 'Opinion, age, material.' },
      { q: 'Here it’s ___ rude to ask people how much they earn.', o: ['considered', 'consider', 'considering'], why: '*It’s considered* + adjective.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'The phone ___ I bought last week has stopped working.', a: ['which', 'that'], why: 'A thing: *which* or *that*.' },
      { q: 'Guests are ___ (expect) to arrive on time.', a: ['expected'], why: '*Be expected to* + verb.' },
      { q: 'The flat has furniture in it: it is ___ (furniture).', a: ['furnished'], why: 'A flat with furniture is *furnished*.' },
      { q: 'In my country, we ___ (usual) eat lunch at one.', a: ['usually'], why: 'An adverb before the verb: *usually*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'This is the town where I grew up.', why: '*Where* comes straight after the place.' },
      { a: 'Do people usually bring a gift?', why: 'A soft question: *Do people usually…?*' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['The man who lives next door is a pilot.', 'The man which lives next door is a pilot.', 'The man who he lives next door is a pilot.'], why: '*Who* for people, and no second pronoun.' },
      { q: '', o: ['We rented a big white wooden house.', 'We rented a wooden big white house.', 'We rented a white wooden big house.'], why: 'Size, colour, material.' },
      { q: '', o: ['Is it OK to take photos here?', 'Is OK to take photos here?', 'It is OK take photos here?'], why: '*Is it OK to* + verb.' },
    ] },
  ],
};
