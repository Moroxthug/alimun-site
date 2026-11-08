// English A2, unit 5, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of A2 Key.
export const UNIT = {
  id: 'u5',
  title: 'Plans and invitations',
  goal: 'Talk about your plans and arrangements, say days, dates and times, invite people and answer invitations politely.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['going-to', 'present-continuous-future', 'dates-and-times', 'invitations'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'What are you going to do?',
      about: 'Talk about plans and intentions with *be going to*, and make predictions from what you can see.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'When you have already decided to do something, use **be going to** + the base form of a verb. The decision is made before you speak: *I’m going to learn to drive this year.* *We’re going to paint the kitchen on Saturday.*\n\nThe form has three parts, and each one matters. First **be** (*am, is, are*), which changes with the person. Then **going to**, which never changes. Then the verb in its base form, with no *-s*, no *-ed* and no *-ing*: *She’s going to call you*, not *She’s going to calls you*.' },
          { t: 'table', caption: 'be going to', quiz: true, explain: ['head'], head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I', 'I’m going to work', 'I’m not going to work', 'Am I going to work?'],
            ['he / she / it', 'she’s going to work', 'she isn’t going to work', 'Is she going to work?'],
            ['you / we / they', 'they’re going to work', 'they aren’t going to work', 'Are they going to work?'],
          ] },
          { t: 'tip', art: 'owl', md: 'When people speak fast, **going to** often sounds like *gonna*. You will hear it in songs and films, but write **going to**.' },
        ],
        [
          { t: 'text', md: 'To ask about someone’s plans, put **be** before the subject: *Are you going to stay at home?* With a question word, the question word comes first: **What** are you going to do? **Where** is she going to live? **When** are they going to arrive?\n\nShort answers use only *be*: **Yes, I am.** / **No, I’m not.** / **Yes, she is.** / **No, they aren’t.**\n\nWe often use **be going to** with time words for the future: *tonight, tomorrow, this weekend, next week, next month, next year, in July, one day.*' },
          { t: 'examples', items: [
            { s: '**What are you going to do** this weekend? – **I’m going to visit** my grandparents.', n: 'A question about plans and the answer.' },
            { s: 'We**’re not going to** buy a new car this year.', n: 'The negative: *be* + *not*.' },
            { s: '**Is** Daniel **going to** study medicine? – **Yes, he is.**', n: 'A yes or no question and a short answer.' },
            { s: 'They**’re going to** get married **next summer**.', n: 'With a future time word.' },
            { s: 'One day, I**’m going to** live by the sea.', n: '*One day* = at some time in the future.' },
          ] },
        ],
        [
          { t: 'text', md: 'We also use **be going to** for a **prediction**: something we think will happen because we can see it coming *now*. Look at the sky: *It’s going to rain.* Look at the clock: *We’re going to be late!*\n\nThe idea is the same in both uses. Something in the present (a decision in your head, or clouds in the sky) tells you about the future.' },
          { t: 'examples', items: [
            { s: 'Look at those black clouds. **It’s going to rain.**', n: 'You can see the reason now.' },
            { s: 'Be careful! That glass **is going to fall**.', n: 'It is at the edge of the table.' },
            { s: 'It’s 8.55 and the train is at 9.00. **We’re going to miss** it!', n: 'The clock tells us.' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I going to work tomorrow.', 'I’m going to work tomorrow.', 'Do not forget *be*.'],
            ['She’s going to calls me.', 'She’s going to call me.', 'After *going to*, the base form: no *-s*.'],
            ['Are you go to come?', 'Are you going to come?', 'The form is *going to*, always with *-ing*.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'New year, new plans', lines: [
            { who: 'Elena', s: 'So, what are you going to do this year?' },
            { who: 'Marco', s: 'I’m going to run a half marathon in October.' },
            { who: 'Elena', s: 'Wow! Are you going to train every day?' },
            { who: 'Marco', s: 'No, I’m not. Three times a week. What about you?' },
            { who: 'Elena', s: 'I’m going to learn Japanese. My company is going to send me to Osaka next year.' },
            { who: 'Marco', s: 'That’s great news! Are you going to take lessons?' },
            { who: 'Elena', s: 'Yes, I am. I’m going to start next Monday.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read the dialogue. Are the sentences true or false?', items: [
            { q: 'Marco is going to run in October.', a: 't', why: '*I’m going to run a half marathon in October.*' },
            { q: 'Marco is going to train every day.', a: 'f', why: '*No, I’m not. Three times a week.*' },
            { q: 'Elena’s company is going to send her to Osaka.', a: 't', why: '*My company is going to send me to Osaka next year.*' },
            { q: 'Elena is going to start her lessons next month.', a: 'f', why: 'She is going to start *next Monday*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the correct form of be going to and the verb.', items: [
            { q: 'I ___ (buy) a new phone next month.', a: ['am going to buy', '’m going to buy'], why: '*I* + *am going to* + base form.' },
            { q: 'My sister ___ (not / come) to the party.', a: ['is not going to come', 'isn’t going to come', '’s not going to come'], why: 'Negative: *is not going to* + base form.' },
            { q: 'Are you ___ (watch) the match tonight?', a: ['going to watch'], why: 'Question: *Are you going to* + base form.' },
            { q: 'We ___ (stay) in a hotel near the beach.', a: ['are going to stay', '’re going to stay'], why: '*We* + *are going to* + base form.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'He [going] to start a new job.', a: ['is going', '’s going'], why: 'Do not forget *be*: *He is going to start…*' },
            { s: 'They’re going to [visits] Rome in May.', a: ['visit'], why: 'After *going to*, the base form.' },
            { s: 'Where [you are] going to stay?', a: ['are you'], why: 'In a question, *be* comes before the subject: *Where are you going to stay?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Plan or prediction? Choose the best sentence.', items: [
            { q: 'You see a man running to the bus stop. The bus is leaving.', o: ['He’s going to miss the bus.', 'He’s going to buy a bus.', 'He goes to miss the bus.'], why: 'A prediction from what you can see now.' },
            { q: 'Your friend has decided to study in Canada.', o: ['She’s going to study in Canada.', 'She going to study in Canada.', 'She’s going to studies in Canada.'], why: 'A plan: *be going to* + base form.' },
            { q: 'The sky is blue and there are no clouds.', o: ['It isn’t going to rain today.', 'It doesn’t going to rain today.', 'It not going to rain today.'], why: 'Negative: *isn’t going to*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
            { a: 'What are you going to cook tonight?', why: 'Question word, *be*, subject, *going to*, verb.' },
            { a: 'Is your brother going to move to London?', why: 'A yes or no question starts with *be*.' },
            { a: 'When are they going to get married?', why: '*When* first, then *are they going to*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Reading Part 5): write ONE word in each gap.', items: [
            { q: 'Hi Sam, I’m ___ to have a party on Saturday for my birthday.', a: ['going'], why: '*be going to*: *I’m going to have…*' },
            { q: 'My cousins are going ___ come from Leeds.', a: ['to'], why: '*going to* + verb.' },
            { q: 'We aren’t going to stay at home. We’re going to go ___ a restaurant first.', a: ['to'], why: '*go to* a place.' },
            { q: '___ you going to come? Please tell me by Thursday!', a: ['Are'], why: 'Question with *you*: *Are you going to…?*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 5, you write **one word** in each gap of a short email or message. The missing words are often small grammar words: *be, to, at, on, a, the, for, have*. Read the whole sentence before you write, and check the spelling: a wrong spelling is a wrong answer.' },
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'What are you going to do this weekend?' },
            { a: 'I’m going to visit my grandparents.' },
            { a: 'Look at those clouds. It’s going to rain.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Are you free on Friday?',
      about: 'Talk about fixed arrangements with the present continuous, and say days, dates and times.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'You know the **present continuous** (*be* + verb-*ing*) for things happening now: *I’m reading.* We also use it for the **future**, when a plan is **fixed**: there is a day, a time, a place, and often another person knows about it. It is like a plan written in your diary.\n\n*I’m meeting Anna at six on Friday.* (Anna knows, the time is fixed.)\n*We’re flying to Lisbon on 12 June.* (The tickets are bought.)\n\nWith this meaning, there is almost always a future time word in the sentence, or it is clear from the conversation. Without it, *I’m meeting Anna* could mean *now*.' },
          { t: 'examples', items: [
            { s: 'I**’m having** lunch with my boss **tomorrow**.', n: 'Fixed, with another person.' },
            { s: 'What **are you doing on Saturday evening**?', n: 'The usual question about arrangements.' },
            { s: 'She **isn’t coming** to the meeting **on Monday**.', n: 'The negative.' },
            { s: 'They**’re getting** married **in the summer**.', n: 'Everything is booked.' },
          ] },
          { t: 'tip', art: 'owl', md: '**going to** or the **present continuous**? Very often both are correct. Use **going to** for a decision or intention (*I’m going to look for a new job*). Use the **present continuous** when the arrangement is fixed, with a time and other people (*I’m meeting the manager at ten*).' },
        ],
        [
          { t: 'text', md: 'To talk about arrangements you need **days, dates and times**, with the right little word in front.\n\nUse **at** for clock times and a few fixed phrases (*at night, at the weekend*). Use **on** for days and dates (*on Monday, on 3 May, on Friday evening*). Use **in** for longer periods: months, years, seasons and parts of the day (*in June, in 2027, in the summer, in the morning*).\n\nNo little word before **this, next, last, every, tomorrow, tonight**: *I’m busy next Friday*, not *on next Friday*.' },
          { t: 'table', caption: 'at, on or in?', explain: ['head', 'col1'], head: ['Word', 'Use it with', 'Examples'], rows: [
            ['at', 'clock times, *night*, *the weekend*', 'at six o’clock, at half past two, at night, at the weekend'],
            ['on', 'days and dates', 'on Monday, on Friday evening, on 3 May'],
            ['in', 'months, years, seasons, parts of the day', 'in June, in 2027, in the summer, in the morning'],
            ['–', '*this, next, last, every, tomorrow, tonight*', 'next Friday, this evening, tomorrow morning'],
          ] },
        ],
        [
          { t: 'text', md: 'In British English, write the date **3 May** or **3rd May**. Say **the third of May** or **May the third**. Dates use the **ordinal numbers**: *first, second, third, fourth, fifth, …, twentieth, twenty-first, twenty-second, twenty-third, …, thirtieth, thirty-first.* Most just add **-th** to the number, but learn the special ones: **first, second, third, fifth, ninth, twelfth**, and the tens ending in **-tieth** (*twentieth, thirtieth*).\n\nFor times, you can say the numbers: *10.15* is **ten fifteen**. Or use **past** and **to**: **quarter past ten** (10.15), **half past ten** (10.30), **quarter to eleven** (10.45).' },
          { t: 'table', caption: 'Ordinal numbers to learn', explain: ['head'], head: ['Number', 'Say', 'Number', 'Say'], rows: [
            ['1st', 'first', '9th', 'ninth'],
            ['2nd', 'second', '12th', 'twelfth'],
            ['3rd', 'third', '20th', 'twentieth'],
            ['5th', 'fifth', '21st', 'twenty-first'],
            ['8th', 'eighth', '31st', 'thirty-first'],
          ] },
          { t: 'dialogue', title: 'Finding a free evening', lines: [
            { who: 'Paul', s: 'Are you free on Thursday evening?' },
            { who: 'Aisha', s: 'Sorry, I’m working late on Thursday. What about Friday?' },
            { who: 'Paul', s: 'I’m playing football at seven on Friday. Saturday?' },
            { who: 'Aisha', s: 'Saturday is fine. I’m not doing anything in the evening.' },
            { who: 'Paul', s: 'Great. Let’s meet at half past eight, outside the cinema.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose at, on, in or nothing (–).', items: [
            { q: 'The concert starts ___ 8 o’clock.', o: ['at', 'on', 'in'], why: 'A clock time: *at*.' },
            { q: 'I’m seeing the dentist ___ Tuesday.', o: ['on', 'at', 'in'], why: 'A day: *on*.' },
            { q: 'My brother is getting married ___ August.', o: ['in', 'on', 'at'], why: 'A month: *in*.' },
            { q: 'We’re leaving ___ next Sunday.', o: ['–', 'on', 'in'], why: 'No little word before *next*.' },
            { q: 'I never work ___ the weekend.', o: ['at', 'in', 'on'], why: 'British English: *at the weekend*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the times and the words.', pairs: [
            ['7.15', 'quarter past seven'],
            ['7.30', 'half past seven'],
            ['7.45', 'quarter to eight'],
            ['3 May', 'the third of May'],
            ['21 June', 'the twenty-first of June'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Use the present continuous for these arrangements.', items: [
            { q: 'I ___ (meet) my friends at the station at six.', a: ['am meeting', '’m meeting'], why: '*be* + verb-*ing*, with a time.' },
            { q: 'Lucy ___ (not / come) to class tomorrow.', a: ['is not coming', 'isn’t coming', '’s not coming'], why: 'Negative: *isn’t coming*.' },
            { q: 'What are you ___ (do) on Saturday?', a: ['doing'], why: 'Question: *What are you doing…?*' },
            { q: 'We ___ (fly) to Madrid on the fifth of July.', a: ['are flying', '’re flying'], why: 'A fixed plan with a date.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the date in words, the British way.', items: [
            { q: '2 March', cue: 'the', a: ['the second of March'], why: '2 = *second*; say *the second of March*.' },
            { q: '12 October', cue: 'the', a: ['the twelfth of October'], why: '12 = *twelfth*, with *f*.' },
            { q: '31 December', cue: 'the', a: ['the thirty-first of December'], why: '31 = *thirty-first*.' },
          ] },
        ],
        [
          { t: 'reading', title: 'A voice message', md: 'Hi Max, it’s Nora. I’m calling about the trip to the lake. We’re leaving on Saturday the fourteenth, not Friday. The bus goes from the station at quarter to eight in the morning, so please be there at half past seven. Tickets are twelve pounds. We’re coming back on Sunday evening. Bring a warm jacket! See you soon.' },
          { t: 'ex', kind: 'gap', h: 'In the format of the A2 Key exam (Listening Part 2): complete the notes about the trip. Write one word or a number.', items: [
            { q: 'Day we leave: Saturday the ___', a: ['fourteenth', '14th', '14'], why: '*We’re leaving on Saturday the fourteenth.*' },
            { q: 'Time to be at the station: half past ___', a: ['seven', '7'], why: 'The bus goes at 7.45, but *be there at half past seven*.' },
            { q: 'Price of a ticket: £___', a: ['12', 'twelve'], why: '*Tickets are twelve pounds.*' },
            { q: 'Bring a warm ___', a: ['jacket'], why: '*Bring a warm jacket!*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Listening Part 2 you complete notes with **one word, a number or a date**. Read the notes before you listen, and guess what kind of word is missing. Be careful: the speaker often says two times or two days, and only one is the answer. Here, the bus leaves at 7.45, but you must **be there** at 7.30.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'Are you free on Friday evening?' },
            { a: 'I’m meeting my sister at half past seven.' },
            { a: 'We’re leaving on the fourteenth of May.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Would you like to come?',
      about: 'Invite people, accept invitations, and say no politely with a reason.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'To invite someone politely, use **Would you like to** + the base form of a verb: *Would you like to come to my party?* It is polite and friendly, and you can use it with anyone.\n\nWith friends, people also say **Do you want to…?** (*Do you want to go for a coffee?*), **How about…?** and **Let’s…** **How about** is followed by a noun or a verb with **-ing**: *How about a film?* *How about going to the beach?* **Let’s** is followed by the base form: *Let’s go out tonight!*\n\nBefore you invite someone, it is natural to check if they are free: **Are you free on Saturday?** **Are you doing anything tonight?**' },
          { t: 'examples', items: [
            { s: '**Would you like to** have dinner with us on Friday?', n: 'Polite: good with anyone.' },
            { s: '**Do you want to** come to the gym with me?', n: 'Relaxed, with friends.' },
            { s: '**How about** a walk in the park?', n: '*How about* + a noun.' },
            { s: '**How about going** to the new café?', n: '*How about* + verb-*ing*.' },
            { s: '**Let’s** meet at the station.', n: '*Let’s* + base form.' },
          ] },
        ],
        [
          { t: 'text', md: 'To **accept** an invitation, you can say **I’d love to!**, **That sounds great!**, **Yes, why not?** or **Good idea!** Then you often ask a question: *What time?* *Where shall we meet?*\n\nTo **say no politely**, English speakers almost never just say *No.* They say sorry, give a short reason, and often suggest another time: **Sorry, I can’t. I’m working on Saturday. Maybe next week?** **I’m afraid** is a polite way to give bad news: *I’m afraid I’m busy that day.*' },
          { t: 'table', caption: 'Inviting and answering', explain: ['head'], head: ['Invite', 'Say yes', 'Say no'], rows: [
            ['Would you like to come?', 'I’d love to.', 'Sorry, I can’t. I’m busy.'],
            ['Do you want to go for a coffee?', 'That sounds great.', 'I’m afraid I’m working then.'],
            ['How about a film on Friday?', 'Yes, why not?', 'Thanks, but I’m going out.'],
            ['Are you free on Sunday?', 'Yes, I am. Good idea!', 'Maybe another time?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not mix up two questions. **Do you like** dancing? asks what you enjoy in general. **Would you like to** go dancing? is an invitation. The answer to the first is *Yes, I do*; the answer to the second is *I’d love to!*' },
        ],
        [
          { t: 'dialogue', title: 'An invitation', lines: [
            { who: 'Tomás', s: 'Hi Hana! Are you doing anything on Saturday?' },
            { who: 'Hana', s: 'Not really. Why?' },
            { who: 'Tomás', s: 'It’s my birthday. Would you like to come to my party?' },
            { who: 'Hana', s: 'I’d love to! What time is it?' },
            { who: 'Tomás', s: 'At eight, at my flat. Is your brother free too?' },
            { who: 'Hana', s: 'I’m afraid he can’t come. He’s working on Saturday evening.' },
            { who: 'Tomás', s: 'That’s a shame. Maybe next time!' },
          ] },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Would you like come?', 'Would you like to come?', '*Would you like* + *to* + verb.'],
            ['How about go to the cinema?', 'How about going to the cinema?', 'After *How about*, verb-*ing*.'],
            ['Let’s to go out.', 'Let’s go out.', 'After *Let’s*, the base form, no *to*.'],
            ['No.', 'Sorry, I can’t. I’m busy.', 'A polite *no* has a reason.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'Would you like ___ to the cinema tonight?', o: ['to go', 'go', 'going'], why: '*Would you like* + *to* + verb.' },
            { q: 'How about ___ a pizza?', o: ['ordering', 'order', 'to order'], why: '*How about* + verb-*ing*.' },
            { q: 'Let’s ___ at the café.', o: ['meet', 'to meet', 'meeting'], why: '*Let’s* + base form.' },
            { q: '“Would you like to come?” – “I’d ___ to!”', o: ['love', 'like', 'want'], why: 'The usual answer: *I’d love to!*' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Is it an invitation, a yes or a no?', groups: ['invitation', 'yes', 'no'], explain: ['groups'], items: [
            { s: 'Do you want to come with us?', g: 0, why: 'A question that invites.' },
            { s: 'That sounds great!', g: 1, why: 'Accepting happily.' },
            { s: 'I’m afraid I’m busy that day.', g: 2, why: 'A polite no.' },
            { s: 'How about a game of tennis?', g: 0, why: '*How about* invites.' },
            { s: 'Yes, why not?', g: 1, why: 'A relaxed yes.' },
            { s: 'Thanks, but I can’t.', g: 2, why: 'A polite no.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'Write a polite no. Two words do not belong.', items: [
            { a: 'Sorry, I can’t. I’m working on Saturday.', extra: ['don’t', 'at'], why: 'Say sorry, then the reason with the present continuous.' },
            { a: 'I’m afraid I’m busy tonight.', extra: ['on', 'am'], why: '*I’m afraid* + the bad news. No *on* before *tonight*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Would you like [come] to my party?', a: ['to come'], why: '*Would you like to* + verb.' },
            { s: 'How about [watch] a film tonight?', a: ['watching'], why: 'After *How about*, verb-*ing*.' },
            { s: '“Do you like tennis?” – “[I’d love to.]”', a: ['Yes, I do.'], why: '*Do you like…?* asks about what you enjoy, not an invitation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading Part 1): read the message. What does it say?', items: [
            { q: '“Anna – Football practice is on Wednesday this week, not Tuesday. Same time. Coach Tim”', o: ['Football practice is on a different day this week.', 'Football practice is at a different time this week.', 'There is no football practice this week.'], why: 'The day changes (Wednesday, not Tuesday), the time is the same.' },
            { q: '“Jo, I can’t come to the cinema tonight, I’m sorry. Are you free tomorrow? Ella”', o: ['Ella wants to go to the cinema on another day.', 'Ella is going to the cinema without Jo.', 'Ella doesn’t like going to the cinema.'], why: 'She says sorry and asks about *tomorrow*.' },
            { q: 'Notice: “Café closed on Monday. Open again Tuesday at 8.00.”', o: ['You can have breakfast there on Tuesday.', 'The café is closed on Tuesday.', 'The café opens at 8.00 every day except Tuesday.'], why: 'Closed Monday, open again Tuesday morning.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 1 there are short messages, notes and notices. Each has three sentences, and only one has the **same meaning**. The wrong answers often use words from the text but change a detail: the day, the time or the person. Read each option and find the words in the text that prove it.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'Would you like to come to my party?' },
            { a: 'I’d love to. What time is it?' },
            { a: 'Sorry, I can’t. I’m working on Saturday.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A weekend with friends',
      about: 'Read messages between friends who are making plans, and write a short invitation.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In this lesson you read a group chat. Four friends are planning a weekend away. Notice how they use what you learned in this unit: **going to** for decisions, the **present continuous** for fixed arrangements, **days, dates and times**, and the language of **invitations**.\n\nIn messages, people often leave out small words: *Can’t come, sorry!* (= *I can’t come, I’m sorry*). That is fine in a chat, but in the exam and in emails, write full sentences.' },
          { t: 'reading', title: 'Group chat: Weekend in Brighton', md: '**Sophie:** Hi everyone! I’m going to book a cottage in Brighton for the weekend of 20 and 21 September. Would you like to come?\n\n**Leo:** I’d love to! I’m working on Friday until six, but I’m free after that.\n\n**Mia:** Sounds great! But I’m afraid I can’t come on Saturday morning. I’m taking my dad to the airport. I can come by train on Saturday afternoon.\n\n**Sophie:** No problem, Mia. Leo, how about driving down on Friday evening? I can come with you.\n\n**Leo:** Good idea. Let’s leave at half past six.\n\n**Daniel:** Sorry, I can’t come this time. My sister is getting married on the 20th! Have fun, and send photos!\n\n**Sophie:** Congratulations to your sister, Daniel! Maybe next time.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the chat. Are the sentences true, false, or is it not given?', items: [
            { q: 'Sophie is going to book a cottage.', a: 't', why: '*I’m going to book a cottage in Brighton.*' },
            { q: 'Leo is free all day on Friday.', a: 'f', why: 'He is working until six.' },
            { q: 'Mia is going to Brighton by car.', a: 'f', why: 'She is coming *by train*.' },
            { q: 'Mia’s dad is flying to Spain.', a: 'ng', why: 'We know he is going to the airport, but not where he is flying.' },
            { q: 'Daniel’s sister is getting married on Saturday 20 September.', a: 't', why: '*My sister is getting married on the 20th.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'When are Sophie and Leo going to leave?', o: ['On Friday at 6.30.', 'On Saturday morning.', 'On Friday at 6.00.'], why: '*Let’s leave at half past six*, on Friday evening; Leo works until six.' },
            { q: 'Why can’t Daniel come?', o: ['He’s going to a wedding.', 'He’s working.', 'He doesn’t like Brighton.'], why: 'His sister is getting married.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now look at how a short invitation is organised. It answers three questions for the reader: **what** (the plan), **when** (day, date, time) and **what to do** (bring something, reply by a day). In A2 Key Writing Part 6, you write a message like this of **25 words or more**, and you must answer **all three points** in the question.' },
          { t: 'examples', items: [
            { s: 'Hi Tom, **would you like to come** to a picnic in the park?', n: 'What: the invitation.' },
            { s: 'It’s **on Sunday at twelve**, near the lake.', n: 'When and where.' },
            { s: 'Can you **bring** some drinks? **Let me know** by Friday!', n: 'What to do.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for an invitation.', items: [
            { a: 'Would you like to come to my house on Saturday?', why: '*Would you like to* + verb, then the place and day.' },
            { a: 'We’re having a barbecue at four o’clock.', why: 'An arrangement: present continuous, then the time.' },
            { a: 'Please bring something to drink.', why: 'What to do: *Please* + base form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam (Reading Part 3): read the chat again and choose the best answer.', items: [
            { q: 'Why is Mia coming on Saturday afternoon?', o: ['She is busy on Saturday morning.', 'She doesn’t like driving.', 'The train is cheaper in the afternoon.'], why: 'She is taking her dad to the airport on Saturday morning.' },
            { q: 'Who is Sophie travelling with?', o: ['Leo', 'Mia', 'Daniel'], why: '*Leo, how about driving down on Friday evening? I can come with you.*' },
            { q: 'What does Sophie say to Daniel at the end?', o: ['She is happy for his sister.', 'She is angry that he can’t come.', 'She wants to come to the wedding.'], why: '*Congratulations to your sister!*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Reading Part 3 there is one longer text and five questions. The questions follow the order of the text. Find the part of the text for each question, then read it carefully: the right answer usually says the same thing **with different words**, like *busy on Saturday morning* for *taking my dad to the airport*.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'I’m going to book a cottage for the weekend.' },
            { a: 'How about driving down on Friday evening?' },
            { a: 'Sorry, I can’t come this time.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'gap', h: 'Write the correct form of be going to and the verb.', items: [
      { q: 'We ___ (paint) the living room this weekend.', a: ['are going to paint', '’re going to paint'], why: '*We are going to* + base form.' },
      { q: 'He ___ (not / sell) his car.', a: ['is not going to sell', 'isn’t going to sell', '’s not going to sell'], why: 'Negative: *isn’t going to*.' },
      { q: 'Look at the sky! It ___ (snow).', a: ['is going to snow', '’s going to snow'], why: 'A prediction from what you can see.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Use the present continuous.', items: [
      { q: 'I ___ (see) the doctor at ten tomorrow.', a: ['am seeing', '’m seeing'], why: 'A fixed arrangement.' },
      { q: '___ you working tomorrow?', a: ['Are'], why: 'Question: *Are you working…?*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose at, on, in or nothing (–).', items: [
      { q: 'My course starts ___ September.', o: ['in', 'on', 'at'], why: 'A month: *in*.' },
      { q: 'The party is ___ Saturday.', o: ['on', 'in', 'at'], why: 'A day: *on*.' },
      { q: 'I’m busy ___ next week.', o: ['–', 'in', 'on'], why: 'No little word before *next*.' },
      { q: 'The film starts ___ quarter past nine.', o: ['at', 'on', 'in'], why: 'A time: *at*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'Would you like ___ for a coffee?', o: ['to go', 'go', 'going'], why: '*Would you like to* + verb.' },
      { q: 'How about ___ the museum?', o: ['visiting', 'visit', 'to visit'], why: '*How about* + verb-*ing*.' },
      { q: '“Do you want to come?” – “Sorry, I ___. I’m working.”', o: ['can’t', 'don’t', 'won’t like'], why: 'A polite no: *Sorry, I can’t* + reason.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the invitation and the answer.', pairs: [
      ['Would you like to come to dinner?', 'I’d love to! What time?'],
      ['Are you free on Sunday?', 'Yes, I am. Why?'],
      ['How about a game of tennis?', 'Good idea!'],
      ['Do you want to come to the gym?', 'Sorry, I can’t. I’m busy.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Write the date in words, the British way.', items: [
      { q: '1 April', cue: 'the', a: ['the first of April'], why: '1 = *first*.' },
      { q: '22 November', cue: 'the', a: ['the twenty-second of November'], why: '22 = *twenty-second*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She’s going to [moves] to Paris.', a: ['move'], why: 'After *going to*, the base form.' },
      { s: 'Let’s [to meet] at seven.', a: ['meet'], why: 'After *Let’s*, the base form.' },
      { s: 'Would you like [go] for a walk?', a: ['to go'], why: '*Would you like to* + verb.' },
    ] },
  ],
};
