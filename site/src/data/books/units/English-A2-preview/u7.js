// English A2, unit 7, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of A2 Key.
export const UNIT = {
  id: 'u7',
  title: 'Travel and holidays',
  goal: 'Travel by train and plane, tell the story of a trip, book a hotel room and solve a problem there, and read about other people’s holidays.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['transport', 'airport', 'past-continuous', 'hotel'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Getting there',
      about: 'Talk about transport, buy a ticket, and find your way at the station and the airport.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'When you travel, the same small set of words comes back again and again: at the ticket office, on the screens, and in the announcements. If you know them, a station or an airport becomes much less stressful.\n\nTo say how you travel, use **by** + the transport, with no *a* or *the*: **by train, by bus, by plane, by car, by bike**. The one exception is walking: say **on foot**.\n\nUse **take** or **catch** with public transport: *I take the train to work. We need to catch the 8.15 bus.* To say you are inside it, use **get on** and **get off** for trains, buses and planes, and **get in** and **get out of** for cars and taxis.' },
          { t: 'table', caption: 'Getting on and off', explain: ['head', 'col2'], head: ['Transport', 'Verbs', 'Why'], rows: [
            ['train, bus, plane, boat', 'get on / get off', 'you can stand up and walk inside'],
            ['car, taxi', 'get in / get out of', 'you sit down at once, it is small'],
            ['bike, motorbike', 'get on / get off', 'you sit on top of it'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use **by** when there is a word like *my* or *the* before the transport: *I go to work **by car**,* but *I go to work **in my car**.* *We went **by train**,* but *We went **on the 9 o’clock train**.*' },
        ],
        [
          { t: 'text', md: 'At the station, you buy a **ticket**. In Britain, a **single** is a ticket for one way and a **return** is a ticket there and back. In the USA, people say **one-way** and **round-trip**. Trains leave from a **platform**, and the screen tells you if your train is **on time**, **delayed** or **cancelled**.\n\nAt the airport, you **check in** and leave your big bag (your **luggage**), go through **security**, and wait at the **gate**. Your **boarding pass** shows your seat and the time when **boarding** starts. When the plane leaves, it **takes off**; when it arrives, it **lands**.' },
          { t: 'examples', items: [
            { s: 'A **return** to Oxford, please.', n: 'At the ticket office: there and back.' },
            { s: 'Which **platform** does the Bristol train leave from?', n: '*Leave from* a platform.' },
            { s: 'Our flight is **delayed** by forty minutes.', n: 'Later than planned.' },
            { s: 'The 10.20 to Leeds is **cancelled**.', n: 'It is not going at all.' },
            { s: 'Please go to **gate** 14. **Boarding** starts at 9.30.', n: 'At the airport, before you get on the plane.' },
            { s: 'The plane **took off** late, but it **landed** on time.', n: 'The start and the end of the flight.' },
          ] },
          { t: 'tip', art: 'owl', md: '**Luggage** is uncountable, like *water* and *money*. Say *I have two bags* or *two pieces of luggage*, never *two luggages*. The same is true of **information**: *Can I have some information about the trains?*' },
        ],
        [
          { t: 'text', md: 'Three mistakes travellers make again and again.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I went by the train.', 'I went by train.', 'After *by*, no *a* or *the*.'],
            ['I got out of the bus.', 'I got off the bus.', 'Buses and trains: *get off*.'],
            ['Where can I put my luggages?', 'Where can I put my luggage?', '*Luggage* has no plural.'],
          ] },
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Grace', s: 'Hello. A return to Brighton, please.' },
            { who: 'Clerk', s: 'Are you coming back today?' },
            { who: 'Grace', s: 'Yes, this evening.' },
            { who: 'Clerk', s: 'That’s £24.50. The next train leaves at 11.15 from platform 6.' },
            { who: 'Grace', s: 'Is it a direct train, or do I need to change?' },
            { who: 'Clerk', s: 'You need to change at Croydon. But be careful: the 11.15 is delayed by ten minutes today.' },
            { who: 'Grace', s: 'OK, thank you. Is there a café on the platform?' },
            { who: 'Clerk', s: 'Yes, next to the stairs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
            ['a return', 'a ticket there and back'],
            ['a single', 'a ticket for one way'],
            ['delayed', 'later than planned'],
            ['cancelled', 'not happening at all'],
            ['the gate', 'where you wait before you get on a plane'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'We went to Paris ___ train.', o: ['by', 'on', 'with'], why: '*by* + transport, with no *the*.' },
            { q: 'Quick, we need to ___ off here!', o: ['get', 'go', 'take'], why: '*get off* a bus or a train.' },
            { q: 'He got ___ the taxi and paid the driver.', o: ['out of', 'off', 'down'], why: 'Cars and taxis: *get out of*.' },
            { q: 'The plane ___ off at 6.40 in the morning.', o: ['took', 'went', 'got'], why: 'A plane *takes off*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the dialogue at the ticket office again. True or false?', items: [
            { q: 'Grace is coming back the same day.', a: 't', why: '*Yes, this evening.*' },
            { q: 'Her train leaves from platform 11.', a: 'f', why: 'It leaves at 11.15 from platform 6.' },
            { q: 'She can go to Brighton without changing trains.', a: 'f', why: 'She needs to change at Croydon.' },
            { q: 'Her train is late today.', a: 't', why: '*The 11.15 is delayed by ten minutes today.*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I always go to work by [the bus].', a: ['bus'], why: 'After *by*, no *the*.' },
            { s: 'We got [out of] the train at York.', a: ['off'], why: 'Trains: *get off*.' },
            { s: 'How many [luggages] do you have?', a: ['bags', 'pieces of luggage'], why: '*Luggage* has no plural: say *bags*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 1): what does each notice say?', items: [
            { q: 'Notice at the station: “Platform 4 closed today. All trains to the airport leave from platform 2.”', o: ['Go to platform 2 for the airport today.', 'There are no trains to the airport today.', 'Platform 2 is closed all day.'], why: 'Platform 4 is closed, so the airport trains go from platform 2.' },
            { q: 'Screen at the airport: “Flight BA412 to Rome – boarding at gate 9 – last call.”', o: ['People for Rome must go to gate 9 now.', 'The flight to Rome is cancelled.', 'Boarding for Rome starts in an hour.'], why: '*Last call* means boarding is nearly finished: go now.' },
            { q: 'Message from Tom: “Train delayed. I’ll get a taxi from the station, so don’t come to meet me.”', o: ['Tom doesn’t need a lift from the station.', 'Tom wants someone to drive him home.', 'Tom’s train is cancelled.'], why: 'He is taking a taxi, so nobody needs to meet him.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1 of the A2 Key reading paper, you read six short notices or messages and choose what each one says. Read the whole text first, then all three answers. Often two answers use words from the text but change the meaning: check every detail, like *today*, *not* and times.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'A return to Brighton, please.' },
            { a: 'Which platform does the train leave from?' },
            { a: 'Our flight is delayed by forty minutes.' },
            { a: 'Where can I check in my luggage?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'I was walking when…',
      about: 'Tell the story of a trip with the past continuous and the past simple.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'When you tell a story about the past, you need two kinds of action. Some actions were **in progress**: they were happening for a while, like the background of a film. Others are **short events** that happened in the middle of them.\n\nFor the background, use the **past continuous**: **was** or **were** + the verb with **-ing**. For the short event, use the **past simple**, which you already know.\n\n*I **was walking** to the station when it **started** to rain.* The walking was in progress; the rain started in the middle of it.' },
          { t: 'table', caption: 'The past continuous', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I', 'I was walking', 'I wasn’t walking', 'Was I walking?'],
            ['you', 'you were walking', 'you weren’t walking', 'Were you walking?'],
            ['he / she / it', 'she was walking', 'she wasn’t walking', 'Was she walking?'],
            ['we / they', 'they were walking', 'they weren’t walking', 'Were they walking?'],
          ] },
          { t: 'tip', art: 'owl', md: 'The *-ing* spelling rules are the same as for the present continuous: *write → writing* (drop the *e*), *sit → sitting* (double the last letter), *travel → travelling* in British English.' },
        ],
        [
          { t: 'text', md: 'Two small words join the two actions. **When** usually goes before the **short** event: *We were having dinner **when** the phone rang.* **While** usually goes before the **long** action: ***While** we were having dinner, the phone rang.*\n\nThe past continuous is also good for describing the scene at the start of a story: *It was a cold morning. The sun was shining and people were hurrying to work.*\n\nIf two short events happen one after the other, use the past simple for both: *When the train stopped, we got off.* (First it stopped, then we got off.)' },
          { t: 'examples', items: [
            { s: 'I **was sleeping** when the plane **landed**.', n: 'Long action, then a short one in the middle.' },
            { s: '**While** we **were waiting** at the gate, I **met** an old friend.', n: '*While* + the long action.' },
            { s: 'What **were** you **doing** at 8 o’clock last night?', n: 'An action in progress at a time in the past.' },
            { s: 'It **was raining** and everyone **was looking** at their phones.', n: 'The scene at the start of a story.' },
            { s: 'When the bus **came**, we **got on**.', n: 'Two short events, one after the other: past simple.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Some verbs are not usually used with *-ing*, because they are states, not actions: **know, want, like, need, understand, believe**. Say *I didn’t know the way*, not *I wasn’t knowing the way*.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I walked when it started to rain.', 'I was walking when it started to rain.', 'The long action needs *was + -ing*.'],
            ['They was sitting in the café.', 'They were sitting in the café.', 'With *they*, *you* and *we*: *were*.'],
            ['I was wanting a coffee.', 'I wanted a coffee.', '*Want* is a state: no *-ing*.'],
          ] },
          { t: 'reading', title: 'The wrong train', md: 'Last summer I was travelling from Rome to Florence. It was a hot day, and the station was very busy. While I was buying a sandwich, I heard an announcement, but I didn’t understand it.\n\nI got on a train at platform 3 and found a seat. A woman next to me was reading a guidebook about Naples. I asked her where she was going. “Naples, of course,” she said.\n\nI was on the wrong train! Luckily, it was still waiting at the platform. I jumped off just before the doors closed. When I found the right train, it was leaving, but the guard saw me and opened the door. I was the last person to get on!' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the past continuous of the verb.', items: [
            { q: 'At 7 o’clock I ___ (have) breakfast.', a: ['was having'], why: '*I was* + *having*.' },
            { q: 'The children ___ (play) in the garden when it started to snow.', a: ['were playing'], why: '*They were* + *playing*.' },
            { q: 'We ___ (not watch) the film, so we turned the TV off.', a: ['were not watching', 'weren’t watching', "weren't watching"], why: '*We weren’t* + *-ing*.' },
            { q: 'What were you ___ (do) when I called?', a: ['doing'], why: 'Question: *were you doing*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'I ___ along the beach when I found a beautiful shell.', o: ['was walking', 'walked', 'were walking'], why: 'The long action: *was walking*.' },
            { q: 'While she was driving, her phone ___.', o: ['rang', 'was ringing', 'rings'], why: 'The short event: past simple.' },
            { q: 'When the film ended, we ___ home.', o: ['went', 'were going', 'go'], why: 'Two short events one after the other: past simple.' },
            { q: 'Sorry, I ___ what you said.', o: ['didn’t understand', 'wasn’t understanding', 'not understood'], why: '*Understand* is a state: no *-ing*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read “The wrong train”. True, false or not given?', ng: true, items: [
            { q: 'The writer was travelling to Florence.', a: 't', why: '*I was travelling from Rome to Florence.*' },
            { q: 'The writer was eating a sandwich on the train.', a: 'f', why: 'They were buying a sandwich at the station.' },
            { q: 'The woman on the train lived in Naples.', a: 'ng', why: 'We know she was going to Naples, not where she lived.' },
            { q: 'The writer got on the right train just in time.', a: 't', why: 'The guard opened the door, and they were the last person to get on.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the word given.', items: [
            { q: 'I was waiting for the bus. I saw an accident.', cue: 'While', a: ['While I was waiting for the bus, I saw an accident.', 'While I was waiting for the bus I saw an accident.'], why: '*While* + the long action, then the short event.' },
            { q: 'We were swimming. It started to rain.', cue: 'when', a: ['We were swimming when it started to rain.'], why: '*when* + the short event.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading, Part 5): choose the word that fits each gap in this story.', items: [
            { q: 'Last week I was ___ home from work when I saw a little dog in the street.', o: ['walking', 'walk', 'walked'], why: '*was* + *-ing*.' },
            { q: 'It was ___ and the dog looked cold and wet.', o: ['raining', 'rain', 'rains'], why: 'The scene: *it was raining*.' },
            { q: '___ I was looking at the dog, a woman ran out of a shop.', o: ['While', 'When', 'Because'], why: '*While* + the long action.' },
            { q: '“That’s my dog!” she said. “He ran away ___ I was buying some milk.”', o: ['while', 'so', 'but'], why: '*while* + the long action.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 5 of the A2 Key reading paper, you complete a short text with one word in each gap. The missing words are often small grammar words: *was, were, when, while, at, the*. Read the sentence before and after each gap before you choose.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I was walking to the station when it started to rain.' },
            { a: 'While we were waiting at the gate, I met an old friend.' },
            { a: 'What were you doing at eight o’clock last night?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'At the hotel',
      about: 'Book a room, check in and out, ask for things, and explain a problem with your room.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Hotels are one of the places where good, polite English really helps. The words are simple: you **book** a room (or make a **reservation**), you **check in** when you arrive and **check out** when you leave.\n\nRooms come in different sizes: a **single room** is for one person, a **double room** has one big bed for two, and a **twin room** has two small beds. Ask what is included: *Is breakfast included?* *Is there Wi-Fi in the room?*\n\nTo ask for something politely, use **Could I…?** or **Could you…?**: *Could I have a room with a view? Could you call me a taxi, please?* It is softer than *Can I…?* and perfect with people you do not know.' },
          { t: 'examples', items: [
            { s: 'I’d like to **book a double room** for two nights, please.', n: 'On the phone or by email.' },
            { s: 'I have a **reservation** in the name of Silva.', n: 'At reception, when you arrive.' },
            { s: '**Is breakfast included?**', n: 'Is it in the price?' },
            { s: '**Could I have** a quiet room, please?', n: 'A polite request.' },
            { s: 'What time do we need to **check out**?', n: 'When you must leave the room.' },
          ] },
          { t: 'tip', art: 'owl', md: '**I’d like** (= I would like) is a polite way to say *I want*. *I want a room* can sound rude to a receptionist; *I’d like a room, please* sounds friendly.' },
        ],
        [
          { t: 'text', md: 'Sometimes something in the room is wrong. To explain a problem, say what does not work with **isn’t working** or **doesn’t work**, or say what is missing with **there isn’t / there aren’t any**:\n\n*The shower **isn’t working**. There **aren’t any** towels. The room is very **noisy**.*\n\nThen ask for help politely: *Could someone look at it, please? Could I change rooms?* Starting with **I’m sorry to bother you, but…** makes everything friendlier.' },
          { t: 'dialogue', title: 'A problem with the room', lines: [
            { who: 'Guest', s: 'Hello, I’m sorry to bother you, but there’s a problem in room 214.' },
            { who: 'Receptionist', s: 'Oh dear. What’s wrong?' },
            { who: 'Guest', s: 'The air conditioning isn’t working, and the room is very hot.' },
            { who: 'Receptionist', s: 'I’m really sorry. I’ll send someone up right now.' },
            { who: 'Guest', s: 'Thank you. And there aren’t any towels in the bathroom.' },
            { who: 'Receptionist', s: 'Of course. Would you like to change rooms? We have a quiet room on the fifth floor.' },
            { who: 'Guest', s: 'Yes, please. That would be great.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I want a room for two nights.', 'I’d like a room for two nights, please.', '*I’d like* is more polite.'],
            ['The shower not working.', 'The shower isn’t working.', 'Do not forget *is*.'],
            ['There isn’t any towels.', 'There aren’t any towels.', '*Towels* is plural: *aren’t*.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words.', extra: ['twin'], items: [
            { q: 'I’d like to ___ a room for Friday night.', a: 'book', why: 'You *book* a room.' },
            { q: 'What time can we check ___?', a: 'in', why: 'When you arrive: *check in*.' },
            { q: 'Is breakfast ___ in the price?', a: 'included', why: '*Included* = in the price.' },
            { q: 'Could I have a room with a sea ___?', a: 'view', why: 'A *view* = what you can see from the window.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the best words.', items: [
            { q: 'Excuse me, the TV ___.', o: ['isn’t working', 'not working', 'doesn’t working'], why: '*isn’t working*, or *doesn’t work*.' },
            { q: '___ you call me a taxi, please?', o: ['Could', 'Would like', 'Do'], why: 'A polite request: *Could you…?*' },
            { q: 'There ___ any towels in my room.', o: ['aren’t', 'isn’t', 'don’t'], why: 'Plural: *there aren’t any*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’d like to book a twin room.', why: '*I’d like to* + verb.' },
            { a: 'Could I change rooms, please?', why: '*Could I* + verb.' },
            { a: 'Is breakfast included in the price?', why: 'A question with *is*.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue “A problem with the room” again. True or false?', items: [
            { q: 'The guest’s room is too cold.', a: 'f', why: 'The room is very hot: the air conditioning isn’t working.' },
            { q: 'There are no towels in the bathroom.', a: 't', why: '*There aren’t any towels.*' },
            { q: 'The guest moves to a different room.', a: 't', why: 'She says yes to the quiet room on the fifth floor.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Listening, Part 1 style): read what each person says and choose the right answer.', items: [
            { q: 'Receptionist: “Breakfast is from seven to ten, in the restaurant on the first floor. On Sundays it starts at eight.” When does breakfast start on Sunday?', o: ['8.00', '7.00', '10.00'], why: '*On Sundays it starts at eight.*' },
            { q: 'Guest: “We booked a double room, but we’d prefer two beds, if that’s possible.” What room does the guest want now?', o: ['a twin room', 'a double room', 'a single room'], why: 'Two beds: a twin room.' },
            { q: 'Receptionist: “Check-out is at eleven, but you can leave your bags here until four.” What can the guests do until four o’clock?', o: ['leave their luggage at the hotel', 'stay in their room', 'have breakfast'], why: 'They can leave their bags until four.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1 of the A2 Key listening paper, you hear five short conversations and choose the right picture or answer. You hear each one twice. Listen for the detail the question asks about: a time, a price, a day. Be careful: you often hear all three answers, but only one is correct.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I have a reservation in the name of Silva.' },
            { a: 'I’m sorry to bother you, but the shower isn’t working.' },
            { a: 'Could I have a quiet room, please?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Three days in the mountains',
      about: 'Read a holiday blog post, understand the details, and write a short message about a trip.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A travel blog is a good place to see everything from this unit working together: transport, the past simple and the past continuous for the story, and the hotel.\n\nWhen you read a longer text, do not stop at every new word. First read it quickly to understand the main idea: *Where did they go? Did they like it?* Then read it again slowly for the details. Words like **first, then, the next day, on the last morning** help you follow the order of the story.' },
          { t: 'reading', title: 'Three days in the mountains', md: 'Last month my sister Lucy and I spent three days in Alpbach, a small village in the Austrian mountains. We went by train from Vienna. The journey took five hours, but the views were beautiful, and we were talking and laughing all the way.\n\nOur hotel was old, wooden and very quiet. On the first evening, we were sitting in the garden when it started to snow! The receptionist brought us two hot chocolates, and we watched the snow from the window of the lounge.\n\nThe next day, we walked up to a lake above the village. While we were walking, we saw two deer near the path. The lake was frozen, and some children were skating on it. We were very tired after the walk, so we came back down by bus.\n\nThere was one problem. On the last morning, the hot water wasn’t working, so we had very cold showers. The manager was very sorry and gave us a free dinner.\n\nWould I go back? Yes, definitely. Next time I’m going to stay for a week and try skiing.' },
          { t: 'tip', art: 'owl', md: 'In the reading paper, the questions follow the order of the text. If you cannot find the answer to question 3, it is probably between the answers to questions 2 and 4.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the blog post. True, false or not given?', ng: true, items: [
            { q: 'The writer travelled to Alpbach with her sister.', a: 't', why: '*My sister Lucy and I spent three days in Alpbach.*' },
            { q: 'The train journey was boring.', a: 'f', why: 'The views were beautiful and they were talking and laughing.' },
            { q: 'It was snowing when they arrived at the hotel.', a: 'ng', why: 'It started to snow in the evening; we do not know about their arrival.' },
            { q: 'They walked back down from the lake.', a: 'f', why: 'They were tired, so they came back by bus.' },
            { q: 'The hotel gave them something to say sorry.', a: 't', why: 'The manager gave them a free dinner.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'What was happening when it started to snow?', o: ['They were sitting in the garden.', 'They were walking to the lake.', 'They were having a shower.'], why: '*We were sitting in the garden when it started to snow.*' },
            { q: 'What were the children doing on the lake?', o: ['skating', 'swimming', 'fishing'], why: '*Some children were skating on it.*' },
            { q: 'What does the writer want to do next time?', o: ['stay longer and ski', 'go by bus', 'stay in a different hotel'], why: '*Stay for a week and try skiing.*' },
          ] },
        ],
        [
          { t: 'text', md: 'Now it is your turn to write about a trip. A good short message answers the reader’s questions: **where** you went, **how** you travelled, **what** happened, and **how** you felt. Join your ideas with **and, but, so** and **because**, and use one sentence with the past continuous to make the story come alive.' },
          { t: 'examples', items: [
            { s: 'We went to Porto **by plane** and stayed in a small hotel near the river.', n: 'Where and how.' },
            { s: 'On the second day, we **were walking** along the river **when** we found a great café.', n: 'A moment of the story.' },
            { s: 'The weather was bad, **but** we had a great time.', n: '*but* for a contrast.' },
            { s: 'We were tired, **so** we went to bed early.', n: '*so* for a result.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'We were having lunch when the train arrived.', extra: ['was', 'while'], why: '*We were* + *-ing*, then *when* + the short event.' },
            { a: 'The hotel was small but very comfortable.', extra: ['so', 'were'], why: '*but* for a contrast.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Writing, Part 6): complete the message to your friend with one word in each gap. Then write your own message about a trip in at least 25 words.', items: [
            { q: 'Hi Sam! We got back from Edinburgh yesterday. We went ___ train.', a: ['by'], why: '*by* + transport.' },
            { q: 'On Saturday we ___ walking up the hill when we saw a rainbow.', a: ['were'], why: 'The past continuous: *we were walking*.' },
            { q: 'The hotel was nice, ___ the room was very small.', a: ['but'], why: 'A contrast: *but*.' },
            { q: 'I was really tired, ___ I slept on the train home.', a: ['so'], why: 'A result: *so*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 6 of the A2 Key paper, you write a short message of **25 words or more**, and you must answer all **three** points in the question. Before you write, underline the three points. Missing one point costs more marks than a small grammar mistake.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Tell the story: say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Last month we spent three days in the mountains.' },
            { a: 'We were sitting in the garden when it started to snow.' },
            { a: 'Next time I’m going to stay for a week.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'I usually go to work ___ bike.', o: ['by', 'on the', 'with'], why: '*by* + transport.' },
      { q: 'We got ___ the bus at the museum.', o: ['off', 'out of', 'down'], why: 'Buses: *get off*.' },
      { q: 'Our flight was ___, so we waited for three hours.', o: ['delayed', 'included', 'booked'], why: 'Late: *delayed*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
      { q: 'I ___ dinner when you called.', o: ['was cooking', 'cooked', 'were cooking'], why: 'The long action: *was cooking*.' },
      { q: 'While they were sleeping, someone ___ the car.', o: ['stole', 'was stealing', 'steals'], why: 'The short event: past simple.' },
      { q: 'I ___ the answer, so I asked the teacher.', o: ['didn’t know', 'wasn’t knowing', 'not knew'], why: '*Know* is a state: no *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the past continuous.', items: [
      { q: 'At midnight we ___ (dance) at the party.', a: ['were dancing'], why: '*We were* + *dancing*.' },
      { q: 'She ___ (not listen) to the teacher.', a: ['was not listening', 'wasn’t listening', "wasn't listening"], why: '*She wasn’t* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I [want] a double room, please.', a: ['’d like', 'would like', "'d like"], why: 'Polite: *I’d like*.' },
      { s: 'There [isn’t] any towels.', a: ['aren’t', "aren't", 'are not'], why: 'Plural: *aren’t*.' },
      { s: 'They [was] waiting at the gate.', a: ['were'], why: 'With *they*: *were*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['check in', 'say you have arrived at a hotel or airport'],
      ['check out', 'leave the hotel and pay'],
      ['take off', 'what a plane does when it leaves'],
      ['land', 'what a plane does when it arrives'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the sentences with the word given.', items: [
      { q: 'I was reading. The lights went out.', cue: 'when', a: ['I was reading when the lights went out.'], why: '*when* + the short event.' },
      { q: 'We were walking in the park. We saw a fox.', cue: 'While', a: ['While we were walking in the park, we saw a fox.', 'While we were walking in the park we saw a fox.'], why: '*While* + the long action.' },
    ] },
  ],
};
