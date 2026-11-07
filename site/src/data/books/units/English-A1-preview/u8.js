// English A1, unit 8, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for the owner's review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one skills task, and one task in the format of the A2 Key exam.
export const UNIT = {
  id: 'u8',
  title: 'Out and about',
  goal: 'Find your way, buy a ticket and ask for help.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['transport', 'timetables', 'tickets', 'directions', 'imperatives', 'asking for help'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'By bus, by train',
      about: 'Say how you travel, ask about times and ask how long a trip takes.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say how you usually travel, use **by** + the kind of transport: **by bus**, **by train**, **by car**, **by bike**, **by plane**. Notice that there is no *a* or *the*: *I go to work by bus*, not *by the bus*.\n\nThere is one exception: when you walk, say **on foot**. *I go to school on foot.* Many people also simply say **I walk**: *I walk to work.*\n\nTo talk about one trip, or one bus or train, use the verb **take**: *I take the bus at 8.00. She takes a taxi to the airport.* Here you need **the** or **a**, because you mean one bus, one taxi.' },
          { t: 'table', caption: 'Transport', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Example'], rows: [
            ['bus', 'I go to work by bus.'],
            ['train', 'She takes the train to London.'],
            ['tram', 'We go to the centre by tram.'],
            ['taxi', 'I take a taxi to the airport.'],
            ['bike', 'He goes to school by bike.'],
            ['car', 'They go to the sea by car.'],
            ['plane', 'We go to Spain by plane.'],
            ['on foot', 'I go to the shop on foot.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In London, the trains under the city are the **underground**, and people call it the **tube**. In New York it is the **subway**, and in many other cities it is the **metro**.' },
        ],
        [
          { t: 'text', md: 'At a station or a bus stop, you often need to ask about the **timetable**. Use **What time does … leave?** and **What time does … arrive?** The answer uses **at** + the time: *It leaves at 8.15.*\n\nTo ask about the length of a trip, say **How long does it take?** The answer is **It takes** + a time: *It takes twenty minutes. It takes about an hour.*\n\nTo ask how someone travels, say **How do you get to** + a place? *How do you get to work?* The answer is short: *By bus.* or *I walk.*' },
          { t: 'examples', items: [
            { s: 'How do you get **to** work? – **By** bus.', n: '*get to* + a place; *by* + transport.' },
            { s: 'What time **does** the bus **leave**? – It leaves **at** 8.15.', n: 'A question about the timetable.' },
            { s: 'What time **does** the train **arrive**? – It arrives **at** 10.30.', n: 'The time it gets there.' },
            { s: '**How long does it take?** – It takes twenty minutes.', n: 'The length of the trip.' },
            { s: 'I **take the** 7.40 train every day.', n: '*take* + one train.' },
            { s: 'We go to the beach **on foot**.', n: 'Walking: *on foot*.' },
          ] },
        ],
        [
          { t: 'text', md: 'These are the mistakes learners make most often with transport.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I go by the bus.', 'I go by bus.', 'After *by*, no *a* or *the*.'],
            ['I go by foot.', 'I go on foot.', 'Walking is *on foot*.'],
            ['What time leaves the train?', 'What time does the train leave?', 'Questions need *does*.'],
            ['It takes twenty minutes by walk.', 'It takes twenty minutes on foot.', 'There is no *by walk*.'],
          ] },
          { t: 'dialogue', title: 'The way to work', lines: [
            { who: 'Grace', s: 'How do you get to work, Ben?' },
            { who: 'Ben', s: 'By bus. I take the 8.15 bus.' },
            { who: 'Grace', s: 'How long does it take?' },
            { who: 'Ben', s: 'It takes twenty minutes. And you?' },
            { who: 'Grace', s: 'I go on foot. It takes ten minutes.' },
            { who: 'Ben', s: 'Lucky you!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'picture', h: 'What is it?', items: [
            { pic: 'bus', o: ['bus', 'train', 'bicycle'], why: 'It is a *bus*.' },
            { pic: 'train', o: ['train', 'bus', 'bicycle'], why: 'It is a *train*.' },
            { pic: 'bicycle', o: ['bicycle', 'bus', 'train'], why: 'It is a *bicycle*, or a *bike*.' },
            { pic: 'ticket', o: ['ticket', 'key', 'phone'], why: 'It is a *ticket*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'I go to school ___ bike.', o: ['by', 'on', 'with'], why: 'Transport: *by* + the kind of transport.' },
            { q: 'She goes to the shop ___ foot.', o: ['on', 'by', 'in'], why: 'Walking is *on foot*.' },
            { q: 'We ___ a taxi to the airport.', o: ['take', 'go', 'by'], why: 'For one trip, use *take*: *take a taxi*.' },
            { q: 'The train arrives ___ 6.30.', o: ['at', 'on', 'in'], why: 'A clock time: *at*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'What time does the bus ___? – At 8.15.', a: ['leave'], why: 'A bus *leaves* at a time.' },
            { q: 'How ___ does it take? – Twenty minutes.', a: ['long'], why: '*How long does it take?* asks about time.' },
            { q: 'It ___ an hour by train.', a: ['takes'], why: '*It takes* + a time.' },
            { q: 'How do you get ___ work? – By car.', a: ['to'], why: '*get to* + a place.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I go to work [by the train].', a: ['by train'], why: 'After *by*, no *the*: *by train*.' },
            { s: 'What time [leaves the bus]?', a: ['does the bus leave'], why: 'A question needs *does*: *What time does the bus leave?*' },
            { s: 'He goes to school [by foot].', a: ['on foot'], why: 'Walking: *on foot*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“How do you get to school?”', o: ['I walk. It’s near.', 'At 8 o’clock.', 'It’s a big school.'], why: '*How do you get to …?* asks how you travel.' },
            { q: '“How long does the trip take?”', o: ['About two hours.', 'By plane.', 'It’s a long trip, yes.'], why: '*How long does it take?* wants a length of time.' },
            { q: '“What time does the next bus leave?”', o: ['In ten minutes.', 'From platform 2.', 'Yes, it does.'], why: 'The question asks *when*, so the answer is a time.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key listening test, you often hear about **times**: *at 8.15, in ten minutes, every half hour*. Before you listen, read the question and decide: do they want a time, a place or a kind of transport?' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I go to work by bus.' },
            { a: 'What time does the train leave?' },
            { a: 'It takes twenty minutes.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'A single to Leeds, please',
      about: 'Buy a ticket at the station, and ask for help when you do not understand.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'At a station, you buy a ticket at the **ticket office** or at a **ticket machine**. To ask for a ticket, say what you want and add **please**: **A single to Leeds, please.** It is short, polite and natural.\n\nIn Britain, a **single** is a ticket for one way, and a **return** is a ticket to go and come back. To ask the price, say **How much is it?** To ask where your train is, say **Which platform?** The **platform** is the place where you wait for the train.\n\nWhen you are not sure, check: **Is this the train to Leeds?** A short answer comes back: *Yes, it is.* or *No, it isn’t.*' },
          { t: 'table', caption: 'At the station', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
            ['A single to Leeds, please.', 'you want a ticket for one way'],
            ['A return to Leeds, please.', 'you want a ticket to go and come back'],
            ['How much is it?', 'you ask the price'],
            ['Which platform?', 'you ask where the train is'],
            ['Is this the train to Leeds?', 'you check'],
            ['What time does it leave?', 'you ask the time'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the USA, they say **one-way** for a single and **round-trip** for a return. Both words are understood everywhere.' },
        ],
        [
          { t: 'text', md: 'Everyone has moments when they do not understand. That is normal, and English speakers are happy to help, if you ask politely. The secret is to use a few **ready phrases**: you do not need to make a new sentence, just remember these.\n\n**Can you …, please?** is the polite way to ask for something: *Can you say that again, please? Can you speak more slowly, please?* Do not forget **please**: without it, the question can sound rude.\n\nTo ask about one word, say **What does … mean?** *What does “platform” mean?*' },
          { t: 'table', caption: 'When you do not understand', explain: ['head', 'col1'], head: ['Say', 'When'], rows: [
            ['Sorry, can you say that again, please?', 'you did not hear'],
            ['Can you speak more slowly, please?', 'the person speaks too fast'],
            ['I don’t understand.', 'you do not understand'],
            ['What does “platform” mean?', 'you do not know a word'],
            ['Can you write it down, please?', 'you want to read it'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **Sorry?** with your voice going up at the end. It is a short, friendly way to say *I didn’t hear*, and English speakers use it all the time.' },
        ],
        [
          { t: 'dialogue', title: 'At the ticket office', lines: [
            { who: 'Grace', s: 'Hello. A return to Leeds, please.' },
            { who: 'Clerk', s: 'That’s twenty-four pounds fifty.' },
            { who: 'Grace', s: 'Sorry, can you say that again, please?' },
            { who: 'Clerk', s: 'Twenty-four pounds fifty.' },
            { who: 'Grace', s: 'Thank you. Which platform?' },
            { who: 'Clerk', s: 'Platform four. The train leaves at ten past nine.' },
            { who: 'Grace', s: 'Is it a fast train?' },
            { who: 'Clerk', s: 'Yes, it is. It takes about an hour.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. Are the sentences true or false?', items: [
            { q: 'Grace wants a single ticket.', a: 'f', why: 'She asks for *a return*.' },
            { q: 'The ticket is £24.50.', a: 't', why: '*Twenty-four pounds fifty.*' },
            { q: 'The train leaves from platform four.', a: 't', why: '*Platform four.*' },
            { q: 'The trip takes two hours.', a: 'f', why: 'It takes *about an hour*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'label', h: 'Label the station.', scene: 'station', extra: ['ticket'], items: [
            { x: 110, y: 90, a: 'train', why: 'The *train* is in the station.' },
            { x: 260, y: 52, a: 'clock', why: 'The *clock* shows the time.' },
            { x: 262, y: 116, a: 'bench', why: 'You sit on a *bench*.' },
            { x: 150, y: 160, a: 'platform', why: 'You wait for the train on the *platform*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and what you say.', pairs: [
            ['You did not hear.', 'Can you say that again, please?'],
            ['The person speaks too fast.', 'Can you speak more slowly, please?'],
            ['You do not know a word.', 'What does it mean?'],
            ['You want to read it.', 'Can you write it down, please?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want a ticket to Leeds and back. You say:', o: ['A return to Leeds, please.', 'A single to Leeds, please.', 'Which platform, please?'], why: 'To go and come back: *a return*.' },
            { q: 'You want to know the price. You say:', o: ['How much is it?', 'How long is it?', 'What time is it?'], why: 'The price: *How much is it?*' },
            { q: 'You are not sure about your train. You say:', o: ['Is this the train to Leeds?', 'This is the train to Leeds.', 'Where are you from?'], why: 'To check, ask a question: *Is this the train to Leeds?*' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Can you speak more slowly, please?', extra: ['slow', 'does'], why: 'After *speak*, use *slowly*.' },
            { a: 'What does this word mean?', extra: ['is', 'means'], why: '*What does … mean?*: after *does*, the verb is *mean*, without *-s*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the sign. What does it say?', items: [
            { q: 'Sign: “Tickets must be bought before you get on the train.”', o: ['Buy your ticket first.', 'You can buy a ticket on the train.', 'Tickets are free today.'], why: '*Before you get on*: buy the ticket first.' },
            { q: 'Sign: “Platform 3 closed. Trains to Leeds leave from Platform 5.”', o: ['Go to platform 5 for Leeds.', 'There are no trains to Leeds.', 'Platform 5 is closed.'], why: 'Platform 3 is closed; the Leeds trains use platform 5.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Part 1 of the A2 Key reading test shows short **signs and notices**, like the ones in a station. You choose the sentence that means the same. Do not look only for the same words: think about what the sign **tells you to do**.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'A single to Leeds, please.' },
            { a: 'Can you say that again, please?' },
            { a: 'Which platform?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Turn left',
      about: 'Ask for directions, give simple directions, and say where a place is.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To give directions or instructions, English uses the **imperative**. It is the simplest form of the verb, with **no subject**: *Turn left. Go straight on. Take the bus.* It is the same for one person or many people.\n\nFor the negative, put **Don’t** before the verb: *Don’t turn right. Don’t take a taxi.*\n\nThe imperative is not rude in English, but to be friendly, add **please** or start with a polite phrase: *Go straight on, please.*' },
          { t: 'table', caption: 'Directions', explain: ['head', 'col1'], quiz: true, head: ['Say', 'Meaning'], rows: [
            ['Turn left.', 'go to the left'],
            ['Turn right.', 'go to the right'],
            ['Go straight on.', 'do not turn'],
            ['Take the first street on the left.', 'turn into the first street on your left'],
            ['at the traffic lights', 'where the red, yellow and green lights are'],
            ['Walk past the bank.', 'go by the bank and do not stop'],
            ['It’s on the left. / It’s on the right.', 'where the place is'],
          ] },
          { t: 'tip', art: 'owl', md: 'For the order of streets, use **first**, **second**, **third**. After that, add *-th*: *fourth, fifth, sixth*. *Take the second street on the right.*' },
        ],
        [
          { t: 'text', md: 'To ask the way, start with **Excuse me**. It is the polite way to stop someone in the street. Then ask: **How do I get to the station?** or **Where is the bank, please?** or **Is there a pharmacy near here?**\n\nTo say where a place is, use these small words: **next to** (very near, at the side), **opposite** (on the other side of the street), **between** (in the middle of two places), and **on the corner** (where two streets meet).\n\nTo ask about the distance, say **Is it far?** The answer is often a time: *No, it’s five minutes on foot.*' },
          { t: 'examples', items: [
            { s: '**Excuse me**, how do I get to the station?', n: 'A polite way to ask the way.' },
            { s: '**Turn left** at the traffic lights.', n: 'The imperative.' },
            { s: '**Don’t turn** right here.', n: 'The negative imperative: *Don’t* + verb.' },
            { s: 'Take the **second** street on the right.', n: 'The order of streets.' },
            { s: 'The bank is **opposite** the park.', n: 'On the other side of the street.' },
            { s: 'The café is **between** the bank and the library.', n: 'In the middle of two places.' },
          ] },
        ],
        [
          { t: 'text', md: 'Learners often translate directions word for word from their language. Watch out for these.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You turn left.', 'Turn left.', 'Directions use the imperative, with no subject.'],
            ['No turn right.', 'Don’t turn right.', 'The negative imperative is *Don’t* + verb.'],
            ['Go straight.', 'Go straight on.', 'The full phrase is *go straight on*.'],
            ['It’s in the left.', 'It’s on the left.', '*on the left*, *on the right*.'],
          ] },
          { t: 'dialogue', title: 'How do I get to the station?', lines: [
            { who: 'Grace', s: 'Excuse me, how do I get to the station?' },
            { who: 'Man', s: 'Go straight on and turn left at the traffic lights.' },
            { who: 'Grace', s: 'Left at the traffic lights. Is it far?' },
            { who: 'Man', s: 'No, it’s five minutes on foot. Walk past the bank. The station is on the right, opposite the park.' },
            { who: 'Grace', s: 'Thank you very much.' },
            { who: 'Man', s: 'You’re welcome.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: '___ left at the traffic lights.', o: ['Turn', 'You turn', 'Turning'], why: 'Directions use the imperative: *Turn left*.' },
            { q: '___ take a taxi. It’s expensive.', o: ['Don’t', 'No', 'Not'], why: 'The negative imperative: *Don’t* + verb.' },
            { q: 'The station is ___ the right.', o: ['on', 'in', 'at'], why: '*on the right*' },
            { q: 'Take the ___ street on the left.', o: ['second', 'two', 'twice'], why: 'For order, use *first, second, third*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Go straight ___ for two hundred metres.', a: ['on'], why: '*go straight on*' },
            { q: '___ me, where is the bank?', a: ['Excuse'], why: 'Start with *Excuse me* to stop someone politely.' },
            { q: 'The café is ___ the bank and the library.', a: ['between'], why: 'In the middle of two places: *between*.' },
            { q: 'Walk ___ the post office.', a: ['past'], why: 'Go by a place and do not stop: *walk past*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the negative instruction.', items: [
            { q: 'Turn right.', cue: 'Don’t', a: ['Don’t turn right.', 'Do not turn right.'], why: 'Put *Don’t* before the verb.' },
            { q: 'Take the bus.', cue: 'Don’t', a: ['Don’t take the bus.', 'Do not take the bus.'], why: 'Put *Don’t* before the verb.' },
            { q: 'Walk past the bank.', cue: 'Don’t', a: ['Don’t walk past the bank.', 'Do not walk past the bank.'], why: 'Put *Don’t* before the verb.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'How do I get to the station?', why: '*How do I get to* + a place.' },
            { a: 'Turn left at the traffic lights.', why: 'The verb first, then the direction and the place.' },
            { a: 'The bank is opposite the park.', why: 'Subject, *is*, then where it is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“Excuse me, is there a pharmacy near here?”', o: ['Yes, it’s next to the bank.', 'Yes, I am.', 'It’s five pounds.'], why: 'The question asks where a place is.' },
            { q: '“Is it far?”', o: ['No, about five minutes on foot.', 'No, it isn’t a station.', 'Turn left, please.'], why: '*Is it far?* asks about distance; a time on foot answers it.' },
            { q: '“Thank you very much.”', o: ['You’re welcome.', 'Turn right.', 'Yes, it is.'], why: 'The answer to *thank you* is *you’re welcome*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key exam, a listening task can ask you to follow directions on a small map. Listen for the **key words**: *left, right, straight on, past, opposite, next to*. Draw the route with your finger as you listen.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Excuse me, how do I get to the station?' },
            { a: 'Turn left at the traffic lights.' },
            { a: 'It’s on the right, opposite the park.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A message and a route',
      about: 'Read a message with travel plans and directions, and put the whole unit together.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'In this last lesson of A1, you read a real-life message: a friend invites you to a party and tells you how to get there. A message like this mixes everything from this unit: transport, times, tickets and directions.\n\nWhen you read a message for travel information, do it in two steps. First, read it quickly to understand the main idea: *Who is it from? What is it about?* Then read it again slowly and look for the **details**: times, numbers, places and instructions.' },
          { t: 'tip', art: 'owl', md: 'Instructions in a message use the **imperative**: *Take the train. Get off at the library. Don’t take a taxi.* Each imperative is one step. Count the steps, and you have the route.' },
          { t: 'reading', title: 'The party', md: '**Ben’s message**\nHi Grace! The party is at my flat on Saturday at 7.00. Take the train to Leeds Station. It leaves at 5.30 and arrives at 6.15. Then take bus 12. It leaves from the bus station every ten minutes. Get off at the library and call me.\n\n**Ben’s directions**\nFrom the library, go straight on and turn left at the traffic lights. Walk past the post office. My flat is the second building on the right, next to the bank. It’s number 14. Don’t take a taxi: it’s too expensive! See you soon!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false or not given?', items: [
            { q: 'The party is on Saturday.', a: 't', why: '*The party is at my flat on Saturday.*' },
            { q: 'The train arrives at 5.30.', a: 'f', why: 'It *leaves* at 5.30 and *arrives* at 6.15.' },
            { q: 'Bus 12 leaves every ten minutes.', a: 't', why: '*It leaves from the bus station every ten minutes.*' },
            { q: 'Ben’s flat is next to the post office.', a: 'f', why: 'Grace walks past the post office; the flat is *next to the bank*.' },
            { q: 'There is music at the party.', a: 'ng', why: 'The message does not say anything about music.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Read the message again and choose.', items: [
            { q: 'How does Grace get from Leeds Station to the library?', o: ['by bus', 'by taxi', 'on foot'], why: '*Then take bus 12.*' },
            { q: 'What does Grace do at the library?', o: ['She calls Ben.', 'She buys a ticket.', 'She takes a taxi.'], why: '*Get off at the library and call me.*' },
            { q: 'Why does Ben say “Don’t take a taxi”?', o: ['It’s too expensive.', 'It’s too slow.', 'There are no taxis.'], why: '*Don’t take a taxi: it’s too expensive!*' },
          ] },
        ],
        [
          { t: 'text', md: 'Now look back at the whole of A1. You can greet people and talk about yourself, your family, your day, food, your home and town, what you can do, clothes and the weather, and now how to travel and find your way.\n\nThe next level, **A2**, builds on all of this. You will talk about the **past** (*I went, I saw*), make plans, compare things and tell short stories. Before you start, make sure the A1 basics are strong: the unit test and the end-of-level check show you what to review.' },
          { t: 'ex', kind: 'sort', h: 'Is it about transport or about directions?', groups: ['transport', 'directions'], explain: ['groups'], items: [
            { s: 'by train', g: 0, why: 'How you travel: transport.' },
            { s: 'turn left', g: 1, why: 'Where to go: directions.' },
            { s: 'a return ticket', g: 0, why: 'A ticket: transport.' },
            { s: 'go straight on', g: 1, why: 'Where to go: directions.' },
            { s: 'platform four', g: 0, why: 'The place for the train: transport.' },
            { s: 'opposite the bank', g: 1, why: 'Where a place is: directions.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'Take the bus and [you get] off at the library.', a: ['get'], why: 'Instructions use the imperative, with no subject: *get off*.' },
            { s: 'The train [arrive] at 6.15.', a: ['arrives'], why: 'With *the train* (it), add *-s*: *arrives*.' },
            { s: 'My flat is [in] the right.', a: ['on'], why: '*on the right*' },
            { s: '[No] take a taxi.', a: ['Don’t', 'Do not'], why: 'The negative imperative: *Don’t* + verb.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the message. Two words do not belong.', items: [
            { a: 'Take the train to Leeds Station.', extra: ['by', 'You'], why: 'An instruction: the imperative, with no subject.' },
            { a: 'My flat is next to the bank.', extra: ['in', 'at'], why: '*next to* + a place.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read the notes and choose the right answer.', items: [
            { q: 'Note: “Meet me at the café opposite the station at 4.00. Don’t be late! – Sam” What must you do?', o: ['Be at the café at 4.00.', 'Be at the station at 4.00.', 'Call Sam at 4.00.'], why: 'The meeting place is *the café opposite the station*.' },
            { q: 'Note: “Bus 7 isn’t running today. Take bus 9 to the hospital.” Which bus goes to the hospital today?', o: ['Bus 9', 'Bus 7', 'No bus'], why: 'Bus 7 is not running; take *bus 9*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key reading test, short notes and messages often have a **change of plan**: *isn’t running*, *closed*, *not today*. Read to the end before you answer: the important information is often in the second sentence.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Take the train to Leeds Station.' },
            { a: 'Get off at the library and call me.' },
            { a: 'Don’t take a taxi.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'I go to work ___ train.', o: ['by', 'on', 'with'], why: 'Transport: *by* + the kind of transport.' },
      { q: 'We go to the park ___ foot.', o: ['on', 'by', 'at'], why: 'Walking: *on foot*.' },
      { q: 'The bus leaves ___ 9.20.', o: ['at', 'on', 'in'], why: 'A clock time: *at*.' },
      { q: '___ turn right here.', o: ['Don’t', 'No', 'Not'], why: 'The negative imperative: *Don’t* + verb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'How long does it ___? – Ten minutes.', a: ['take'], why: '*How long does it take?*' },
      { q: 'A ___ to Leeds, please. I want to come back today.', a: ['return'], why: 'To go and come back: *a return*.' },
      { q: 'Can you speak more ___, please?', a: ['slowly'], why: 'After *speak*, use *slowly*.' },
      { q: 'Go straight ___ and turn left.', a: ['on'], why: '*go straight on*' },
    ] },
    { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
      { q: 'You did not hear the price. You say:', o: ['Sorry, can you say that again, please?', 'Which platform?', 'I go by bus.'], why: 'To ask someone to repeat: *Can you say that again, please?*' },
      { q: 'You want to stop someone in the street. You say:', o: ['Excuse me, …', 'You’re welcome.', 'Go straight on.'], why: 'Start with *Excuse me*.' },
      { q: 'You want to know where your train is. You say:', o: ['Which platform?', 'How much is it?', 'Is it far?'], why: 'The train waits at a *platform*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['How do you get to work?', 'By bike.'],
      ['What time does the train leave?', 'At ten past nine.'],
      ['Is it far?', 'No, five minutes on foot.'],
      ['How much is it?', 'Twelve pounds.'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I go to school [by the bus].', a: ['by bus'], why: 'After *by*, no *the*.' },
      { s: 'What time [leaves the train]?', a: ['does the train leave'], why: 'A question needs *does*.' },
      { s: 'The station is [in] the left.', a: ['on'], why: '*on the left*' },
      { s: '[You turn] left at the bank.', a: ['Turn'], why: 'Directions use the imperative, with no subject.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make the negative instruction.', items: [
      { q: 'Take a taxi.', cue: 'Don’t', a: ['Don’t take a taxi.', 'Do not take a taxi.'], why: 'Put *Don’t* before the verb.' },
      { q: 'Turn left here.', cue: 'Don’t', a: ['Don’t turn left here.', 'Do not turn left here.'], why: 'Put *Don’t* before the verb.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'Read the message. True or false?', items: [
      { q: 'Message: “The train to York leaves at 8.40 from platform 2.” The train leaves from platform 8.', a: 'f', why: 'It leaves at 8.40 from *platform 2*.' },
      { q: 'Message: “Get off the bus at the museum. My house is opposite.” The house is on the other side of the street from the museum.', a: 't', why: '*Opposite* means on the other side of the street.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Take the second street on the right.', why: 'The imperative, then which street.' },
      { a: 'What time does the bus arrive?', why: '*What time does* + subject + verb.' },
    ] },
  ],
};
