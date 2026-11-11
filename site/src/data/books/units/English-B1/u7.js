// English B1, unit 7, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u7',
  title: 'A new home abroad',
  goal: 'Say exactly which person, thing or place you mean, describe homes and neighbourhoods, talk politely about customs, and read about life in a new country.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['relative-clauses', 'adjective-order', 'homes', 'customs'], goals: ['foundations', 'relocation'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'The people who live next door',
      about: 'Use who, which, that, where and whose to say exactly which person, thing or place you mean.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'When you move to a new place, you talk about a lot of new people and things, and you often need to say **which one** you mean. *The woman* is not enough when there are ten women in the building. *The woman **who lives on the second floor*** is clear.\n\nThe part in bold is a **defining relative clause**. It comes straight after the noun and tells us which one. Without it, the sentence does not give enough information: *I met the man* (which man?) becomes *I met **the man who owns the café***.\n\nThe clause starts with a **relative pronoun**. Which one you choose depends on what the noun is.' },
          { t: 'table', caption: 'Relative pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Use it for', 'Example'], rows: [
            ['who', 'people', 'the neighbour who helped me'],
            ['which', 'things and animals', 'the flat which has a balcony'],
            ['that', 'people or things (more informal)', 'the bus that goes to the centre'],
            ['where', 'places', 'the street where I live'],
            ['whose', 'possession: his, her, their', 'the girl whose dog barks all night'],
          ] },
          { t: 'tip', art: 'owl', md: 'Never use **which** for people. Say *the doctor **who** speaks English*, not *the doctor which speaks English*. **That** is fine for both, and it is very common when people speak.' },
        ],
        [
          { t: 'text', md: 'Look at the job the pronoun does in its clause. In *the man **who** owns the café*, **who** is the **subject** of *owns*: the man owns the café. In *the café **that** I like*, **that** is the **object** of *like*: I like the café.\n\nWhen the pronoun is the **object**, you can leave it out, and English speakers usually do: *the café **(that)** I like*, *the people **(who)** we met*. When it is the **subject**, you must keep it: *the man **who** owns the café*, never *the man owns the café* as one noun phrase.\n\nOne more rule that learners often forget: the relative pronoun **replaces** *he, she, it* or *them*. Do not add them again.' },
          { t: 'examples', items: [
            { s: 'That’s **the woman who** runs the bakery.', n: '*who* is the subject (she runs the bakery): keep it.' },
            { s: 'Is this **the key (that) you** lost?', n: '*that* is the object (you lost it): you can leave it out.' },
            { s: 'We found **a flat which** is close to the station.', n: 'A thing: *which* or *that*.' },
            { s: 'This is **the park where** my kids play every afternoon.', n: 'A place: *where*.' },
            { s: 'I talked to **the man whose** car was parked outside.', n: '*whose* = his: his car was parked outside.' },
            { s: 'The people **(who) I work with** are very friendly.', n: 'The preposition goes at the end in everyday English.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Do not put **where** after a noun that is not a place in the sentence. *The flat **where** I live* is fine; *the flat **which** I rented* is also fine. Ask yourself: could I say *in it*? If yes, *where* works: I live *in it*. I rented *it*, not *in it*: so *which*.' },
        ],
        [
          { t: 'text', md: 'These are the mistakes teachers correct most often with relative clauses.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['the man which lives here', 'the man who lives here', 'People: *who* or *that*, never *which*.'],
            ['the book that I bought it', 'the book that I bought', '*that* replaces *it*: do not repeat it.'],
            ['the town where I visited', 'the town (that) I visited', 'You visit a town, not *in* it: no *where*.'],
            ['the girl who her brother is a pilot', 'the girl whose brother is a pilot', 'Possession: *whose*.'],
          ] },
          { t: 'dialogue', title: 'Who’s who in the building', lines: [
            { who: 'Lucía', s: 'Who’s the man who just said hello in the lift?' },
            { who: 'Tom', s: 'That’s Mr Okafor. He’s the one whose daughter plays the piano every evening.' },
            { who: 'Lucía', s: 'Oh, so he’s the person I can hear at seven o’clock!' },
            { who: 'Tom', s: 'Exactly. And the woman who lives opposite you is Mrs Hall. She knows everyone.' },
            { who: 'Lucía', s: 'Is there a shop where I can buy bread on Sunday?' },
            { who: 'Tom', s: 'Yes, the little shop that’s next to the bus stop is open every day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'My neighbour is the woman ___ dog you saw this morning.', o: ['whose', 'who', 'which'], why: 'Possession (her dog): *whose*.' },
            { q: 'This is the café ___ we first met.', o: ['where', 'which', 'who'], why: 'A place, *we met in it*: *where*.' },
            { q: 'I need a bag ___ is big enough for my laptop.', o: ['which', 'who', 'where'], why: 'A thing, and the subject of *is*: *which* (or *that*).' },
            { q: 'Do you know anyone ___ speaks Portuguese?', o: ['who', 'which', 'whose'], why: 'A person: *who* (or *that*).' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'The doctor [which] I saw was very kind.', a: ['who', 'that'], why: 'A person: *who* or *that*.' },
            { s: 'This is the flat that I told you [about it].', a: ['about'], why: '*that* already means *it*: say *told you about*, not *about it*.' },
            { s: 'Is that the man [who his] car was stolen?', a: ['whose'], why: 'Possession: *whose car*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with who, which, where or whose.', items: [
            { q: 'I have a friend. She lives in Lisbon.', cue: 'I have a friend', a: ['I have a friend who lives in Lisbon.', 'I have a friend that lives in Lisbon.'], why: 'A person, subject of *lives*: *who* or *that*.' },
            { q: 'That’s the restaurant. We had dinner there.', cue: 'That’s the restaurant', a: ['That’s the restaurant where we had dinner.', 'That’s the restaurant that we had dinner in.', 'That’s the restaurant which we had dinner in.'], why: 'A place, *there*: *where*.' },
            { q: 'I met a woman. Her son goes to my school.', cue: 'I met a woman', a: ['I met a woman whose son goes to my school.'], why: '*Her son*: *whose son*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Reading Part 6): write one word in each gap.', items: [
            { q: 'Our new flat is in a street ___ there are lots of trees.', a: ['where'], why: 'A place, *in it*: *where*.' },
            { q: 'The neighbour ___ lives below us gave us a cake.', a: ['who', 'that'], why: 'A person, subject: *who* or *that*.' },
            { q: 'We have a cat ___ name is Pepper.', a: ['whose'], why: 'Possession (its name): *whose*.' },
            { q: 'It is the best flat ___ we have ever had.', a: ['that', 'which'], why: 'After a superlative, *that* is the most natural; *which* is also possible.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 6 of B1 Preliminary there are no options: you write one word. Relative pronouns come up often. Read the whole sentence first, then ask: is the noun a person, a thing or a place, and is there *his, her* or *their* in the meaning?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'She’s the neighbour who helped us move in.' },
            { a: 'This is the street where I grew up.' },
            { a: 'He’s the man whose car is always in front of my door.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Homes and neighbourhoods',
      about: 'Describe a home and the area around it, and put two or three adjectives in the right order.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When you look for a home abroad, you read adverts, ask questions and describe what you want. A few words do a lot of the work.\n\nA **flat** (in the USA an **apartment**) is one home in a bigger building; a **house** stands on its own or joined to others. A **detached** house is not joined to any other; a **semi-detached** house shares one wall; a **terraced** house is in a row. A **studio** is one main room with a small kitchen and bathroom.\n\nYou **rent** a flat from a **landlord** or **landlady**, you pay **rent** every month and usually a **deposit** at the start. Bills like water and electricity are sometimes **included** in the rent. A flat can be **furnished** (with furniture) or **unfurnished**.' },
          { t: 'table', caption: 'Describing an area', explain: ['head', 'col1'], head: ['Word', 'What it means'], rows: [
            ['lively', 'a lot of people, shops and things happening'],
            ['quiet', 'not much noise or traffic'],
            ['crowded', 'too many people'],
            ['run-down', 'old and in bad condition'],
            ['convenient', 'close to the things you need'],
            ['residential', 'mostly homes, not shops or offices'],
          ] },
          { t: 'tip', art: 'owl', md: '**Rent** is both a verb and a noun: *We **rent** a flat. The **rent** is €900 a month.* The person who rents is the **tenant**; the person who owns the flat is the **landlord**.' },
        ],
        [
          { t: 'text', md: 'Often you want to use two or three adjectives before a noun: *a lovely big old house*. English has a fixed order for them, and native speakers feel it without thinking. *A big lovely old house* sounds strange.\n\nThe general rule: **opinion** comes first (what you think), then **facts**. Among the facts, the usual order is **size**, **age**, **shape**, **colour**, **origin** (where it is from), **material** (what it is made of), and **purpose** (what it is for), then the noun.\n\nIn real life you rarely use more than two or three, so remember the start of the list: **opinion, size, age, colour**.' },
          { t: 'table', caption: 'The order of adjectives', explain: ['head'], head: ['Opinion', 'Size', 'Age', 'Colour', 'Material', 'Noun'], rows: [
            ['a lovely', 'small', 'old', '', '', 'cottage'],
            ['a', 'huge', 'modern', 'white', '', 'kitchen'],
            ['an ugly', '', '', 'grey', 'concrete', 'building'],
            ['a comfortable', 'big', '', 'red', 'leather', 'sofa'],
          ] },
          { t: 'examples', items: [
            { s: 'They live in **a beautiful old** farmhouse.', n: 'Opinion before age.' },
            { s: 'We bought **a small round wooden** table.', n: 'Size, shape, material.' },
            { s: 'It’s **a noisy, crowded** street.', n: 'Two opinions: use a comma.' },
          ] },
        ],
        [
          { t: 'text', md: 'Three common mistakes with homes and adjectives.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['a red big car', 'a big red car', 'Size comes before colour.'],
            ['The flat is very convenience.', 'The flat is very convenient.', '*Convenient* is the adjective.'],
            ['We pay the landlord 900 euros of rent.', 'We pay 900 euros in rent.', 'Say *in rent*, or *The rent is 900 euros*.'],
          ] },
          { t: 'dialogue', title: 'Looking at a flat', lines: [
            { who: 'Agent', s: 'So this is the living room. It’s a bright, spacious room with two big windows.' },
            { who: 'Daniel', s: 'It’s lovely. Is the flat furnished?' },
            { who: 'Agent', s: 'Yes, everything you see is included: the sofa, the beds and the small wooden table.' },
            { who: 'Daniel', s: 'And what’s the area like at night?' },
            { who: 'Agent', s: 'It’s quite lively at the weekend, but this street is residential, so it’s quiet.' },
            { who: 'Daniel', s: 'Are the bills included in the rent?' },
            { who: 'Agent', s: 'Water is included, but you pay electricity and internet yourself.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'They have a lovely old stone house.', why: 'Opinion, age, material, noun.' },
            { a: 'I bought a big blue sofa.', why: 'Size before colour.' },
            { a: 'It is a quiet residential area.', why: 'Opinion, then the type of area.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words and the meanings.', pairs: [
            ['deposit', 'money you pay at the start and get back later'],
            ['landlord', 'the person who owns the flat you rent'],
            ['furnished', 'with furniture in it'],
            ['run-down', 'old and in bad condition'],
            ['convenient', 'close to what you need'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 5): choose the right word for each gap.', items: [
            { q: 'Our new flat is small but very ___: the station is only two minutes away.', o: ['convenient', 'crowded', 'run-down'], why: 'Close to what you need: *convenient*.' },
            { q: 'The landlord asked us to pay a ___ of one month’s rent.', o: ['deposit', 'bill', 'price'], why: 'Money at the start that you get back: *deposit*.' },
            { q: 'The flat comes ___, so we didn’t need to buy any furniture.', o: ['furnished', 'included', 'equipped'], why: 'With furniture: *furnished*.' },
            { q: 'Electricity is not ___ in the rent.', o: ['included', 'contained', 'involved'], why: 'Fixed phrase: *included in the rent*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 5 the four words often have similar meanings. The answer depends on **collocation**, the words that go together: *included in the rent*, *pay a deposit*. Read the words around the gap, not only the gap.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'It’s a lovely old flat in a quiet street.' },
            { a: 'Are the bills included in the rent?' },
            { a: 'The area is lively but very convenient.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'In my country we usually…',
      about: 'Talk politely about customs, compare them with your own, and ask what is normal.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Living in another country means meeting customs that are different from yours: what time people eat, how they greet, whether you take your shoes off. Talking about this is interesting, but it can also sound rude if you are not careful.\n\nThe secret is to describe, not to judge. Instead of *That’s strange*, say **In my country we usually…** or **Where I come from, people tend to…**. **Tend to** + verb means *usually do*: *People tend to eat late in Spain.*\n\nTo ask what is normal, use **Is it OK to…?**, **Is it normal to…?** or **Do people usually…?**. For rules, use what you learned in unit 3: **You’re supposed to…** means *the rule or custom says you should*: *You’re supposed to take your shoes off.*' },
          { t: 'examples', items: [
            { s: '**In my country we usually** kiss on both cheeks.', n: 'Describe your own custom.' },
            { s: 'People here **tend to** arrive exactly on time.', n: '*tend to* = usually do.' },
            { s: '**Is it OK to** call someone after nine in the evening?', n: 'Asking what is acceptable.' },
            { s: '**Do people usually** leave a tip in restaurants?', n: 'Asking what most people do.' },
            { s: 'You’**re supposed to** bring a small present.', n: 'The custom says so.' },
            { s: 'That’s **quite different from** what we do at home.', n: 'Comparing politely: *different from*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Soft words help a lot: **quite**, **a bit**, **usually**, **tend to**. *People are a bit more formal here* sounds friendly. *People are cold here* does not.' },
        ],
        [
          { t: 'text', md: 'To compare two customs, use the comparison words from unit 5: **more** / **less** + adjective, **not as … as**, **the same as**, **similar to**, **different from**. To show you are open to the difference, use phrases like **It took me a while to get used to it** (unit 2: *get used to* + noun or -ing).' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['different of my country', 'different from my country', 'Say *different from*.'],
            ['People tend to arriving late.', 'People tend to arrive late.', '*tend to* + base verb.'],
            ['I’m not used to eat so late.', 'I’m not used to eating so late.', '*be used to* + -ing.'],
            ['Is normal to tip?', 'Is it normal to tip?', 'You need *it*.'],
          ] },
          { t: 'dialogue', title: 'Dinner at eight', lines: [
            { who: 'Aiko', s: 'Can I ask you something? Is it OK to arrive a bit late for dinner?' },
            { who: 'Ben', s: 'Ten minutes is fine. People here tend to come a little after the time on the invitation.' },
            { who: 'Aiko', s: 'That’s quite different from Japan. We usually arrive exactly on time, or early.' },
            { who: 'Ben', s: 'Really? I think I’d find that hard to get used to!' },
            { who: 'Aiko', s: 'And are you supposed to bring something?' },
            { who: 'Ben', s: 'It’s not a rule, but most people bring flowers or a bottle of something.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'It took me months to get used to ___ dinner at nine.', o: ['having', 'have', 'had'], why: '*get used to* + -ing.' },
            { q: 'In Britain people tend ___ in a queue.', o: ['to wait', 'waiting', 'wait'], why: '*tend to* + base verb.' },
            { q: 'Our customs are quite different ___ yours.', o: ['from', 'of', 'than'], why: '*different from*.' },
            { q: 'Is it OK ___ my shoes on in your house?', o: ['to keep', 'keeping', 'keep'], why: '*Is it OK* + *to* + verb.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'You are supposed to shake hands.', extra: ['should', 'shaking'], why: '*be supposed to* + base verb.' },
            { a: 'Do people usually leave a tip?', extra: ['does', 'leaving'], why: 'Question with *do* + base verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 1): what does the notice say?', items: [
            { q: 'NOTICE TO RESIDENTS: Please put recycling out on Tuesday evenings only, not before 6 pm.', o: ['You should take recycling outside after 6 pm on Tuesdays.', 'Recycling is collected every evening after 6 pm.', 'You can put recycling out any time on Tuesday.'], why: 'Only on Tuesday, and not before 6 pm.' },
            { q: 'Message from Sam: Shoes off at the door, please! Slippers are in the basket if your feet get cold.', o: ['Sam asks guests to take off their shoes and offers slippers.', 'Sam wants guests to bring their own slippers.', 'Guests must keep their shoes on.'], why: 'Shoes off, and slippers are there for you.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 1 the text is short, but each word counts. Look for words like **only**, **not before**, **unless**, **must** and **if**: the wrong options usually change one of them.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'In my country we usually eat dinner quite early.' },
            { a: 'Is it OK to arrive a few minutes late?' },
            { a: 'It took me a while to get used to it.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Thirty days in a new city',
      about: 'Read an expat’s diary of her first month, and use the language of the unit together.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Marta is from Seville. Last month she moved to Edinburgh for a new job. She wrote a short post on her blog at the end of each week. Read the four posts, then answer the questions. Notice how she uses relative clauses, adjectives and the language of customs.' },
          { t: 'reading', title: 'Week by week', md: '**Week 1.** I’m living in a small, furnished studio which a colleague found for me. It’s on a quiet residential street where everyone seems to have a dog. The landlady, who lives upstairs, brought me soup on my first evening. I didn’t expect that!\n\n**Week 2.** Work is great. The people I work with are friendly, but they tend to eat lunch at their desks in twenty minutes. In Spain we usually take an hour and talk. I’m trying to get used to sandwiches.\n\n**Week 3.** I’ve found a lively café where I can practise English with locals on Thursday evenings. The owner, whose mother is Italian, makes the best coffee in the city.\n\n**Week 4.** The weather is the thing I still can’t get used to. It can be sunny, rainy and windy in the same hour. But the light at ten o’clock in the evening is amazing, and the city is more beautiful than I imagined. I’m staying.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Are the sentences true, false or not given?', ng: true, items: [
            { q: 'Marta found her studio herself.', a: 'f', why: '*a colleague found for me*.' },
            { q: 'The landlady lives in the same building.', a: 't', why: '*who lives upstairs*.' },
            { q: 'Marta’s colleagues take long lunch breaks.', a: 'f', why: 'They eat at their desks in twenty minutes.' },
            { q: 'The café owner speaks Italian.', a: 'ng', why: 'His mother is Italian, but the text does not say what he speaks.' },
            { q: 'Marta plans to stay in Edinburgh.', a: 't', why: '*I’m staying.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading Part 3): choose the best answer.', items: [
            { q: 'Why did Marta mention the soup?', o: ['It was a kind thing she did not expect.', 'She had nothing to eat in her studio.', 'Her landlady runs a restaurant.'], why: '*I didn’t expect that!*' },
            { q: 'What does Marta say about lunch at work?', o: ['It is very different from what she was used to.', 'She refuses to eat at her desk.', 'Her colleagues invited her to a long lunch.'], why: 'She compares it with Spain and is *trying to get used to* it.' },
            { q: 'Which sentence best describes Marta’s month?', o: ['Some things were hard, but she likes her new life.', 'She found everything easy from the first day.', 'She is thinking of going back to Seville.'], why: 'The weather is hard, but the city is beautiful and she is staying.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 3 the last question is often about the **whole text**: the writer’s opinion or the main idea. Do not choose an answer because it repeats a word from one line; choose the one that is true of everything you read.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write one sentence with who, which, where or whose.', items: [
            { q: 'I rent a flat. It has a small balcony.', cue: 'I rent a flat', a: ['I rent a flat which has a small balcony.', 'I rent a flat that has a small balcony.'], why: 'A thing, subject: *which* or *that*.' },
            { q: 'There’s a market. You can buy fresh fish there.', cue: 'There’s a market', a: ['There’s a market where you can buy fresh fish.'], why: 'A place: *where*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I live in a small furnished studio near the centre.' },
            { a: 'The people I work with tend to eat at their desks.' },
            { a: 'The weather is the thing I still can’t get used to.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Is that the shop ___ sells second-hand furniture?', o: ['that', 'where', 'who'], why: 'A thing, subject of *sells*: *that* or *which*.' },
      { q: 'This is the town ___ my grandparents were born.', o: ['where', 'which', 'whose'], why: 'A place, *born in it*: *where*.' },
      { q: 'I met a man ___ wife is from Brazil.', o: ['whose', 'who', 'which'], why: 'His wife: *whose*.' },
      { q: 'The tenant ___ lived here before left a lot of books.', o: ['who', 'which', 'where'], why: 'A person: *who*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The driver [which] drives our bus is always friendly.', a: ['who', 'that'], why: 'A person: *who* or *that*.' },
      { s: 'She bought a [red big] umbrella.', a: ['big red'], why: 'Size before colour.' },
      { s: 'It took me a year to get used to [drive] on the left.', a: ['driving'], why: '*get used to* + -ing.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'We found a beautiful old flat.', why: 'Opinion, age, noun.' },
      { a: 'People tend to eat late here.', why: '*tend to* + base verb.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
      { q: '“Is it OK to call you after nine?”', o: ['Sure, I usually go to bed quite late.', 'Yes, it is call.', 'No, I don’t tend.'], why: 'A natural answer to a polite question.' },
      { q: '“What’s your new area like?”', o: ['It’s quiet and very convenient.', 'It likes trees.', 'Yes, I like it very much area.'], why: '*What’s it like?* asks for a description.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Our customs are quite different ___ yours.', a: ['from'], why: '*different from*.' },
      { q: 'You’re supposed ___ take your shoes off.', a: ['to'], why: '*be supposed to* + verb.' },
      { q: 'The woman ___ lives upstairs is very kind.', a: ['who', 'that'], why: 'A person, subject of *lives*: *who* or *that*.' },
    ] },
  ],
};
