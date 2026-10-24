// English A2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Plans and invitations',
  goal: 'Make plans, invite people and reply to invitations.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['going-to', 'present-continuous-future', 'dates-and-times', 'invitations'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'What are you going to do?',
      about: 'Talk about your plans with *be going to*.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Use **be going to** + the base form of a verb for plans and intentions. These are things you have already decided to do.' },
          { t: 'examples', items: [
            { s: 'I**’m going to look** for a new job this year.', n: 'I have decided. *I’m* is short for *I am*.' },
            { s: 'We **aren’t going to buy** a car. We don’t need one.', n: 'Negative: *be* + *not* + *going to* + verb.' },
            { s: '**Are** you **going to study** tonight?', n: 'Question: put *be* before the person.' },
            { s: 'Look at those clouds. It**’s going to rain**.', n: 'We also use *going to* when we can see that something will happen soon.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Be going to', explain: ['head'], quiz: true, head: ['', 'Positive', 'Negative', 'Question'], rows: [
            ['I', 'I’m going to work', 'I’m not going to work', 'Am I going to work?'],
            ['he / she / it', 'she’s going to work', 'she isn’t going to work', 'Is she going to work?'],
            ['you / we / they', 'they’re going to work', 'they aren’t going to work', 'Are they going to work?'],
          ] },
          { t: 'text', md: 'Do not forget *be*. *I going to work* is a mistake. After *going to*, the verb has no *-s* and no *-ing*: *She’s going to call*, not *She’s going to calls*.' },
          { t: 'tip', art: 'owl', md: 'With the verb *go*, people often drop the second *go*. *I’m going to go to the beach* and *I’m going to the beach* are both correct.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct words.', items: [
            { q: 'Look at the sky. It ___ rain.', o: ['’s going to', 'going to', 'goes to'], why: 'We can see it will happen soon: *it is going to*. Do not forget *is*.' },
            { q: 'We ___ going to buy a car this year. It’s too expensive.', o: ['aren’t', 'don’t', 'isn’t'], why: 'Negative of *going to*: *be* + *not*. *We* takes *aren’t*.' },
            { q: '___ she going to study medicine?', o: ['Is', 'Does', 'Are'], why: 'Questions with *going to* start with *be*. *She* takes *is*.' },
            { q: 'I’m going to ___ my grandmother at the weekend.', o: ['visit', 'visiting', 'visits'], why: 'After *going to*, use the base form: *visit*.' },
            { q: 'What ___ you going to do after work?', o: ['are', 'do', 'is'], why: '*You* takes *are*: *What are you going to do?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with *be going to* and the verb in brackets.', items: [
            { q: 'I ___ (paint) the kitchen on Saturday.', a: ['am going to paint', '’m going to paint'], why: '*I* + *am going to* + base form.' },
            { q: 'Kofi ___ (start) a new job in March.', a: ['is going to start', '’s going to start'], why: 'One person, *Kofi*, so *is going to*.' },
            { q: 'We ___ (not / have) a party this year.', a: ['aren’t going to have', 'are not going to have', '’re not going to have'], why: 'Negative: *we aren’t going to* + base form.' },
            { q: 'My parents ___ (move) to the coast when they retire.', a: ['are going to move', '’re going to move'], why: '*My parents* is plural, so *are going to*.' },
            { q: 'I ___ (not / eat) any more cake today!', a: ['’m not going to eat', 'am not going to eat'], why: 'Negative with *I*: *I’m not going to* + base form.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Are you going to sell your flat?', why: 'Question: *Are* + *you* + *going to* + verb.' },
            { a: 'She is going to learn Spanish.', why: 'Person + *is going to* + base form.' },
            { a: 'What are they going to wear?', why: 'Question word first, then *are* + *they* + *going to*.' },
            { a: 'I am not going to stay long.', why: '*Not* comes after *am* and before *going to*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Are you free on Friday?',
      about: 'Talk about arrangements with the present continuous, and say days, dates and times.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'When a plan is fixed, with a day or a time, and often with other people, we usually use the **present continuous**: *be* + verb-*ing*. It is like a plan in your diary.' },
          { t: 'examples', items: [
            { s: 'I**’m meeting** Ana at six o’clock.', n: 'Ana and I have agreed on a time.' },
            { s: 'We**’re flying** to Cairo on Monday.', n: 'We have the tickets.' },
            { s: 'What **are** you **doing** on Saturday evening?', n: 'A very common question before an invitation.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Often both forms are correct. *I’m going to see the dentist* means I have decided to go. *I’m seeing the dentist at four* means I have an appointment.' },
        ],
        [
          { t: 'table', caption: 'At, on or in?', explain: ['head', 'col1'], head: ['', 'We use it with', 'Examples'], rows: [
            ['at', 'clock times, *night* and *the weekend*', 'at six o’clock, at half past two, at night, at the weekend'],
            ['on', 'days and dates', 'on Monday, on Friday evening, on 3 May'],
            ['in', 'months, years, seasons and parts of the day', 'in June, in 2027, in the summer, in the morning'],
          ] },
          { t: 'text', md: 'In British English we write a date like this: *3 May*. We say *the third of May* or *May the third*. For dates we use *first, second, third, fourth, fifth… twentieth, twenty-first… thirty-first*.\n\nFor times we say *ten past six* (6.10), *quarter past seven* (7.15), *half past seven* (7.30) and *quarter to nine* (8.45).' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose *at*, *on* or *in*.', items: [
            { q: 'The meeting is ___ Tuesday.', o: ['on', 'in', 'at'], why: 'Days take *on*.' },
            { q: 'My flight leaves ___ 7.15.', o: ['at', 'on', 'in'], why: 'Clock times take *at*.' },
            { q: 'We’re moving to a new flat ___ September.', o: ['in', 'on', 'at'], why: 'Months take *in*.' },
            { q: 'Are you free ___ Friday evening?', o: ['on', 'in', 'at'], why: 'A day with a part of the day still takes *on*: *on Friday evening*.' },
            { q: 'I usually see my friends ___ the weekend.', o: ['at', 'in', 'to'], why: 'In British English we say *at the weekend*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the present continuous of the verb in brackets.', items: [
            { q: 'I ___ (meet) my sister for lunch on Sunday.', a: ['am meeting', '’m meeting'], why: 'A fixed plan with another person: *I’m meeting*.' },
            { q: 'Leila ___ (fly) to Lagos on 12 June.', a: ['is flying', '’s flying'], why: '*Leila* takes *is*. Fly → flying.' },
            { q: 'We ___ (not / work) on Friday. It’s a holiday.', a: ['aren’t working', 'are not working', '’re not working'], why: 'Negative: *we aren’t* + verb-*ing*.' },
            { q: 'What time ___ (you / leave) tomorrow?', a: ['are you leaving'], why: 'Question: *are* + *you* + verb-*ing*. Leave → leaving: drop the *e*.' },
            { q: 'My parents ___ (come) to dinner at the weekend.', a: ['are coming', '’re coming'], why: 'Plural, so *are*. Come → coming: drop the *e*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the times and the words.', pairs: [
            ['7.30', 'half past seven'],
            ['8.15', 'quarter past eight'],
            ['9.45', 'quarter to ten'],
            ['6.00', 'six o’clock'],
            ['10.20', 'twenty past ten'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the date in words.', items: [
            { q: 'The course starts on the ___ (1) of October.', a: ['first', '1st'], why: '1 → *first*.' },
            { q: 'Her flight is on the ___ (3) of May.', a: ['third', '3rd'], why: '3 → *third*.' },
            { q: 'The party is on the ___ (20) of July.', a: ['twentieth', '20th'], why: '20 → *twentieth*: *twenty* changes *y* to *ie* and adds *th*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Would you like to come?',
      about: 'Invite people, say yes and say no politely.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'To invite someone politely, use **Would you like to** + verb. With friends, *Do you want to…?* is also fine. Before you invite someone, you can ask *Are you free on…?*' },
          { t: 'dialogue', title: 'An invitation', lines: [
            { who: 'Tomás', s: 'Hi Hana. Are you free on Saturday evening?' },
            { who: 'Hana', s: 'I think so. Why?' },
            { who: 'Tomás', s: 'It’s my birthday. Would you like to come to dinner at my flat?' },
            { who: 'Hana', s: 'I’d love to! What time?' },
            { who: 'Tomás', s: 'About eight. My brother is coming too.' },
            { who: 'Hana', s: 'Great. Can I bring anything?' },
            { who: 'Tomás', s: 'No, thanks. Just come!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Useful phrases', explain: ['head'], head: ['Invite', 'Say yes', 'Say no politely'], rows: [
            ['Would you like to come?', 'I’d love to.', 'Sorry, I can’t.'],
            ['Do you want to go for a coffee?', 'That sounds great.', 'I’m afraid I’m busy that day.'],
            ['How about a film on Friday?', 'Yes, why not?', 'Thanks, but I’m working then.'],
            ['Are you free on Sunday?', 'Good idea!', 'Maybe another time?'],
          ] },
          { t: 'tip', art: 'owl', md: 'When you say no, say thank you and give a short reason: *Thanks for asking, but I’m visiting my parents.* Only *No.* sounds rude.' },
          { t: 'text', md: '*Do you like dancing?* asks what you enjoy in general. *Would you like to go dancing?* is an invitation. After *How about*, use a noun or verb-*ing*: *How about a walk?*, *How about going for a walk?*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: '___ you like to come to my party?', o: ['Would', 'Do', 'Are'], why: 'An invitation: *Would you like to…?*' },
            { q: 'Would you like ___ for a walk?', o: ['to go', 'go', 'going'], why: '*Would like* + *to* + verb.' },
            { q: 'How about ___ a pizza tonight?', o: ['ordering', 'to order', 'order'], why: 'After *How about*, use verb-*ing*.' },
            { q: 'A: Would you like to have lunch with us? B: ___', o: ['I’d love to. Thanks!', 'Yes, I like.', 'Yes, I would like.'], why: '*I’d love to* is a complete answer. *I like* and *I would like* need something after them.' },
            { q: 'A: Do you want to see a film on Friday? B: Sorry, I can’t. ___', o: ['I’m working late.', 'I’d love to.', 'That sounds great.'], why: 'After *Sorry, I can’t*, give a short reason.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['Would you like', 'to come with us?'],
            ['How about', 'meeting at six?'],
            ['Sorry, I', 'can’t come.'],
            ['Thanks for', 'inviting me.'],
            ['That sounds', 'great!'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Would you like to come for dinner?', why: '*Would you like* + *to* + verb.' },
            { a: 'Are you free on Saturday?', why: 'Question: *Are* + *you* + *free*.' },
            { a: 'Thanks for asking, but I can’t.', why: 'Say thank you first, then say no.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the conversation between Tomás and Hana. True or false?', items: [
            { q: 'Tomás invites Hana to dinner at a restaurant.', a: 'f', why: 'The dinner is at his flat.' },
            { q: 'Hana says yes.', a: 't', why: 'She says “I’d love to!”' },
            { q: 'The dinner starts at about eight.', a: 't', why: 'Tomás says “About eight.”' },
            { q: 'Hana has to bring some food.', a: 'f', why: 'Tomás says “No, thanks. Just come!”' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A weekend with friends',
      about: 'Read messages between friends who are making plans.',
      art: 'cat',
      spreads: [
        [
          { t: 'reading', title: 'Weekend plans', md: '**Priya:** Hi both! Are you free this weekend? The weather is going to be lovely, so I’m going to walk up to the lake on Saturday. Would you like to come?\n\n**Marco:** I’d love to! But I’m working on Saturday morning. I finish at twelve. Is the afternoon OK?\n\n**Priya:** Sure. How about meeting at the station at half past one?\n\n**Joy:** Sorry, I can’t come on Saturday. My cousin is getting married! But I’m free on Sunday. Are you two doing anything?\n\n**Marco:** I’m not doing anything on Sunday. Let’s have brunch!\n\n**Priya:** Good idea. There’s a new café near the market. Shall we meet there at eleven?\n\n**Joy:** Perfect. See you both on Sunday. Have fun at the lake!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Priya is going to walk to the lake on Saturday.', a: 't', why: '“I’m going to walk up to the lake on Saturday.”' },
            { q: 'Marco is working all day on Saturday.', a: 'f', why: 'He works in the morning and finishes at twelve.' },
            { q: 'Priya and Marco are meeting at the station at 1.30.', a: 't', why: 'Priya says “at half past one”, and Marco agrees.' },
            { q: 'Joy is going to a wedding on Saturday.', a: 't', why: 'Her cousin is getting married on Saturday.' },
            { q: 'The new café near the market is expensive.', a: 'ng', why: 'The messages do not say anything about prices.' },
            { q: 'Joy is going to the lake with her friends.', a: 'f', why: 'She can’t come on Saturday.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
            { q: '“I’m working on Saturday morning.” Marco is talking about…', o: ['an arrangement in the future', 'something he is doing now', 'something he does every day'], why: 'The present continuous with a future time, *on Saturday morning*, is an arrangement.' },
            { q: 'Who is going to the lake?', o: ['Priya and Marco', 'Priya, Marco and Joy', 'Only Joy'], why: 'Joy can’t come on Saturday.' },
            { q: 'Where are the three friends meeting on Sunday?', o: ['At a new café near the market.', 'At the station.', 'At the lake.'], why: 'Priya suggests the new café near the market at eleven.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'I ___ going to take the bus tomorrow.', o: ['am', 'do', 'be'], why: '*Going to* needs *be*: *I am going to*.' },
      { q: 'We’re having a meeting ___ 10 May.', o: ['on', 'in', 'at'], why: 'Dates take *on*.' },
      { q: 'The film starts ___ half past eight.', o: ['at', 'on', 'in'], why: 'Clock times take *at*.' },
      { q: 'How about ___ to the market on Saturday?', o: ['going', 'go', 'to go'], why: 'After *How about*, use verb-*ing*.' },
      { q: 'A: Would you like to come to the concert? B: ___', o: ['Thanks, but I’m busy that evening.', 'No, I don’t like.', 'Yes, I like it.'], why: 'A polite no: say thank you and give a reason.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'Look at the sky! It ___ (snow).', a: ['is going to snow', '’s going to snow'], why: 'We can see it will happen soon: *going to*.' },
      { q: 'I ___ (not / go) to the gym this week. I’m too tired.', a: ['’m not going to go', 'am not going to go', '’m not going', 'am not going'], why: 'A decision: *I’m not going to go*. *I’m not going* is also correct.' },
      { q: 'What ___ (you / do) on Saturday evening?', a: ['are you doing', 'are you going to do'], why: 'Asking about plans: *What are you doing…?* or *What are you going to do…?*' },
      { q: 'My exam is on the ___ (5) of June.', a: ['fifth', '5th'], why: '5 → *fifth*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Would you like to come with us?', why: 'An invitation: *Would you like* + *to* + verb.' },
      { a: 'Is he going to call his mother?', why: 'Question: *Is* + *he* + *going to* + verb.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['I’m going to study tonight.', 'I going to study tonight.', 'I’m going study tonight.'], why: 'You need *am* and *to*: *I’m going to study*.' },
      { q: '', o: ['I’d love to come.', 'I’d love come.', 'I’d love coming.'], why: '*I’d love* + *to* + verb.' },
      { q: '', o: ['See you on Monday at nine.', 'See you in Monday at nine.', 'See you on Monday in nine.'], why: '*On* + day, *at* + time.' },
    ] },
  ],
};
