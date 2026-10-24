// English B2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'If only',
  goal: 'Talk about regrets, imaginary situations and what might have been.',
  art: 'ghost',
  tags: { skills: ['grammar', 'reading'], topics: ['second-conditional', 'third-conditional', 'mixed-conditionals', 'wish', 'regrets'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Imagine…',
      about: 'Use the second conditional for imaginary situations now, and the third conditional for an imaginary past.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Use the **second conditional** for situations that are imaginary or unlikely, now or in the future: *if* + past simple, then *would* + infinitive. The past form does not mean past time here. It shows that the situation is not real.' },
          { t: 'text', md: 'Use the **third conditional** to imagine a different past: *if* + past perfect, then *would have* + past participle. The past cannot change, so we often use it for regrets and criticism.' },
          { t: 'examples', items: [
            { s: 'If I **had** a car, I **would drive** to work.', n: 'I do not have a car. This is an imaginary present.' },
            { s: 'If they **offered** me the job, I**’d accept** it immediately.', n: 'An unlikely future. *I’d* is short for *I would*.' },
            { s: 'If we **had booked** earlier, we **would have got** cheaper tickets.', n: 'We did not book early, so the tickets were expensive.' },
            { s: 'She **wouldn’t have missed** the flight if she **hadn’t overslept**.', n: 'The *if* clause can come second. Then there is no comma.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Two conditionals', explain: ['head', 'col0'], head: ['', 'If clause', 'Main clause'], rows: [
            ['Second: imaginary now or future', 'If I **knew** the answer,', 'I **would tell** you.'],
            ['Third: imaginary past', 'If I **had known** the answer,', 'I **would have told** you.'],
          ] },
          { t: 'text', md: 'Instead of *would*, you can use *could* for ability or *might* for possibility: *If you had asked me, I could have helped. If we left now, we might catch the last bus.*' },
          { t: 'tip', art: 'owl', md: 'Never put *would* in the *if* clause. *If I would have known* is a very common mistake: say *If I had known*. In the second conditional, careful speakers use *were* for every person: *If I were you, I’d say no.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'If I ___ more free time, I would take up the piano.', o: ['had', 'have', 'would have'], why: 'An imaginary present: *if* + past simple. *Would* never goes in the *if* clause.' },
            { q: 'If you had told me about the party, I ___.', o: ['would have come', 'will come', 'had come'], why: 'The party is in the past, so the third conditional: *would have* + past participle.' },
            { q: 'What would you do if you ___ the lottery?', o: ['won', 'win', 'would win'], why: 'An imaginary future situation: the second conditional, with the past simple after *if*.' },
            { q: 'If I ___ you, I would talk to your manager before you resign.', o: ['were', 'am', 'would be'], why: '*If I were you* is the usual way to give advice with the second conditional.' },
            { q: 'We ___ lost if we had taken a map.', o: ['wouldn’t have got', 'didn’t get', 'hadn’t got'], why: 'We got lost in the past: *wouldn’t have* + past participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the conditional sentences with the verbs in brackets.', items: [
            { q: 'If she ___ (live) closer to the office, she would cycle to work.', a: ['lived'], why: 'She does not live close. An imaginary present takes the past simple in the *if* clause.' },
            { q: 'If I had seen the sign, I ___ (stop).', a: ['would have stopped', '’d have stopped'], why: 'Third conditional: *would have* + past participle.' },
            { q: 'They would have won the match if their best player ___ (not / be) injured.', a: ['hadn’t been', 'had not been'], why: 'The player was injured in the past: past perfect in the *if* clause.' },
            { q: 'If you ___ (ask) him nicely, I’m sure he would help you.', a: ['asked'], why: 'A possible but imagined situation: past simple after *if*, *would* in the main clause.' },
            { q: 'I ___ (not / take) the job if I had known about the long hours.', a: ['wouldn’t have taken', 'would not have taken'], why: 'I took the job, and I regret it: *wouldn’t have* + past participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'If I were you, I would apologise.', why: 'Advice: *If I were you*, then a comma, then *would* + infinitive.' },
            { a: 'What would you do if you lost your job?', why: 'In a question, *would* comes before the subject. The *if* clause comes second, without a comma.' },
            { a: 'If I had known, I would have told you.', why: '*If* + past perfect, then *would have* + past participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mixing times',
      about: 'Use mixed conditionals when the condition and the result are at different times.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Sometimes the condition and the result are at different times. These are **mixed conditionals**. The most common type joins a **past** condition with a **present** result: *if* + past perfect, then *would* + infinitive.' },
          { t: 'examples', items: [
            { s: 'If I **had taken** that job in Berlin, I **would be living** in Germany now.', n: 'Past condition: I did not take the job. Present result: I do not live in Germany.' },
            { s: 'If she **hadn’t missed** the bus, she **wouldn’t be** so stressed.', n: 'She missed the bus earlier, and she is stressed now.' },
          ] },
          { t: 'text', md: 'The other type joins a **present** situation with a **past** result: *if* + past simple, then *would have* + past participle. Here the *if* clause describes something that is generally true, not just true at one moment.' },
          { t: 'examples', items: [
            { s: 'If I **spoke** French, I **would have applied** for the job in Lyon.', n: 'I do not speak French, so I did not apply.' },
            { s: 'If he **weren’t** so shy, he **would have said** something at the meeting.', n: 'He is a shy person, so he said nothing.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Mixed conditionals', explain: ['head', 'col0'], head: ['', 'If clause', 'Main clause'], rows: [
            ['Past condition, present result', 'If I had studied medicine,', 'I would be a doctor now.'],
            ['Present situation, past result', 'If I were braver,', 'I would have spoken up.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look for time words. *Now*, *today*, *still* and *by now* point to a present result. *Yesterday*, *last year* and *at the time* point to a past result.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'If I had saved more money, I ___ a house now.', o: ['would own', 'would have owned', 'will own'], why: 'Past condition, present result (*now*): *would* + infinitive.' },
            { q: 'If Marta weren’t so organised, the project ___ on time last month.', o: ['wouldn’t have finished', 'wouldn’t finish', 'hadn’t finished'], why: 'Marta is an organised person in general, and the result is in the past (*last month*).' },
            { q: 'If we ___ the wrong road, we would be at the hotel by now.', o: ['hadn’t taken', 'didn’t take', 'wouldn’t take'], why: 'We took the wrong road earlier: past perfect. The result (*by now*) is in the present.' },
            { q: 'If you ___ allergic to nuts, I would have put some in the cake.', o: ['weren’t', 'aren’t', 'wouldn’t be'], why: 'Your allergy is a present, general fact: past simple after *if*. The result, the cake, is in the past.' },
            { q: 'I ___ so tired today if I had gone to bed earlier.', o: ['wouldn’t be', 'wouldn’t been', 'won’t be'], why: '*Today* shows a present result: *wouldn’t* + infinitive. The condition (*had gone*) is in the past.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the mixed conditionals with the verbs in brackets.', items: [
            { q: 'If I ___ (not / move) to Canada, I wouldn’t know my wife.', a: ['hadn’t moved', 'had not moved'], why: 'The move was in the past: past perfect. The result is true now.' },
            { q: 'If Tom ___ (be) better with money, he wouldn’t have borrowed from his sister.', a: ['were', 'was'], why: 'Tom is bad with money in general: past simple (*were* or *was*). The borrowing happened in the past.' },
            { q: 'If she had accepted the offer, she ___ (work) in London now.', a: ['would be working', '’d be working', 'would work', '’d work'], why: '*Now* shows a present result. *Would be* + *-ing* is natural for something in progress.' },
            { q: 'If I didn’t have a fear of flying, I ___ (go) to my cousin’s wedding in Australia last year.', a: ['would have gone', '’d have gone'], why: 'The fear is a present, general fact. The wedding was *last year*: *would have* + past participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings.', pairs: [
            ['If I hadn’t broken my leg,', 'I would be skiing with my friends now.'],
            ['If I had a better memory,', 'I wouldn’t have forgotten your birthday.'],
            ['If we had left on time,', 'we wouldn’t be stuck in this traffic.'],
            ['If she weren’t so generous,', 'she wouldn’t have lent you the money.'],
            ['If he had a car,', 'he would have driven you to the airport.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'I wish…',
      about: 'Talk about present and past regrets with wish and if only.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Use **wish** and **if only** to say that you would like a situation to be different. *If only* is stronger and more emotional. After both, the verb moves one step back in time: a present wish takes a past form, and a past regret takes the past perfect.' },
          { t: 'examples', items: [
            { s: 'If only I **had** more time!', n: 'I do not have enough time now.' },
            { s: 'I wish I **were** taller.', n: 'After *wish*, *were* is common for every person, especially in writing. *Was* is fine in conversation.' },
            { s: 'If only we **had left** five minutes earlier.', n: 'We did not leave earlier, and now we are sorry.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Wish and if only', explain: ['head', 'col0', 'col1'], head: ['To talk about…', 'Form', 'Example'], rows: [
            ['a present situation you do not like', '*wish* + past simple', 'I wish I **lived** nearer the sea.'],
            ['an ability you do not have', '*wish* + *could*', 'I wish I **could** drive.'],
            ['a regret about the past', '*wish* + past perfect', 'I wish I **hadn’t sold** my old guitar.'],
            ['behaviour of other people that annoys you', '*wish* + *would*', 'I wish you **would** stop interrupting me.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not say *I wish I would…* about yourself. Use *could* or the past simple: *I wish I could stop eating chocolate*. Keep *wish* + *would* for other people and things: *I wish it would stop raining*. For things that are possible, use *hope*: *I hope you pass*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'I wish I ___ how to cook. I always eat takeaway food.', o: ['knew', 'know', 'had known'], why: 'A present situation: *wish* + past simple.' },
            { q: 'I wish I ___ that email to my boss yesterday. It was rude.', o: ['hadn’t sent', 'didn’t send', 'wouldn’t send'], why: 'A regret about *yesterday*: *wish* + past perfect.' },
            { q: 'I wish my neighbours ___ their music down at night.', o: ['would turn', 'will turn', 'are turning'], why: 'Behaviour of other people that you want to change: *wish* + *would*.' },
            { q: 'If only I ___ speak Japanese! The meeting would be so much easier.', o: ['could', 'can', 'would'], why: 'An ability you do not have: *if only* + *could*.' },
            { q: 'I ___ you get the job. Good luck tomorrow!', o: ['hope', 'wish', 'would like'], why: 'The job is possible, so *hope*. *Wish* is for things that are not real.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
            { q: 'I wish I ___ (have) a bigger flat. This one is too small for us.', a: ['had'], why: 'A present situation: *wish* + past simple.' },
            { q: 'If only I ___ (listen) to my father’s advice when I was younger.', a: ['had listened', '’d listened'], why: 'A regret about the past: past perfect.' },
            { q: 'She wishes she ___ (not / study) law. She hates her job.', a: ['hadn’t studied', 'had not studied'], why: 'She studied law in the past, and she regrets it: past perfect.' },
            { q: 'I wish it ___ (stop) raining. I want to go out.', a: ['would stop'], why: 'You want something outside your control to change: *wish* + *would*.' },
            { q: 'Do you ever wish you ___ (be) born in a different century?', a: ['had been', '’d been'], why: 'You were born in the past: *wish* + past perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the verb that shows a regret about the past.', items: [
            { s: 'I wish I [hadn’t said] that, and I wish I could take it back.', why: '*Wish* + past perfect is about the past. *Wish I could* is about now.' },
            { s: 'If only we [had bought] the flat when it was cheap! Now we wish we had more space.', why: '*Had bought* is past perfect: a past regret. *Wish we had more space* is about the present.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'The decision that changed my life',
      about: 'Read three people talking about a big decision, and look at how they use conditionals and wish.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'The decision that changed my life', md: 'Amara, 41: Ten years ago I was working in a bank. I was good at it, but I wasn’t happy. When my mother fell ill, I spent months in hospital waiting rooms, and I watched the nurses at work. One night I decided to retrain. If I hadn’t spent all that time at the hospital, I would never have thought of nursing. I sometimes wish I had made the change earlier, but I don’t regret it for a second.\n\nJun, 29: After university I had two offers: a safe job in my home town or a year teaching English in Chile. Almost everyone told me to stay. I went, and in Santiago I met the people who later became my business partners. Today we run a small translation company. If I had listened to everyone, I would probably be in the same office now, and I wouldn’t speak a word of Spanish.\n\nHelena, 58: My decision was smaller, but it changed everything. Five years ago, I sold my car. I live in a city with good buses, and I was spending a fortune on parking. Now I walk or cycle everywhere, I sleep better and I’ve made friends in my neighbourhood. My only regret? I wish I hadn’t waited so long. If I’d known how much better I would feel, I’d have done it twenty years ago.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Amara enjoyed her job at the bank.', a: 'f', why: 'She was good at it, but she was not happy.' },
            { q: 'Amara got the idea of nursing while her mother was in hospital.', a: 't', why: 'She watched the nurses in the waiting rooms and decided to retrain.' },
            { q: 'Most people advised Jun to stay in his home town.', a: 't', why: '“Almost everyone told me to stay.”' },
            { q: 'Jun’s company has an office in his home town.', a: 'ng', why: 'The text says they run a small translation company, but not where its offices are.' },
            { q: 'Helena sold her car because she moved to a new city.', a: 'f', why: 'She sold it because parking cost too much, and her city has good buses.' },
            { q: 'Helena wishes she had sold her car sooner.', a: 't', why: '“I wish I hadn’t waited so long.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the grammar in the texts.', items: [
            { q: '“If I hadn’t spent all that time at the hospital, I would never have thought of nursing.” What is this?', o: ['A third conditional: an imaginary past', 'A second conditional: an imaginary present', 'A mixed conditional: a past condition with a present result'], why: '*Hadn’t spent* and *would have thought* both refer to the past.' },
            { q: '“I would probably be in the same office now.” Why does Jun say *would be* and not *would have been*?', o: ['The result is in the present.', 'The condition is in the present.', 'It is more polite.'], why: 'A past condition (*had listened*) with a present result (*now*): a mixed conditional.' },
            { q: '“I wish I hadn’t waited so long.” What does Helena mean?', o: ['She waited a long time, and she is sorry about it.', 'She did not wait, and she is happy about it.', 'She wants to wait longer next time.'], why: '*Wish* + past perfect: a regret about something that really happened.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the texts with their meanings.', pairs: [
            ['retrain', 'learn the skills for a different job'],
            ['regret', 'feel sorry about something you did or did not do'],
            ['spend a fortune', 'spend a very large amount of money'],
            ['run a company', 'manage a business'],
            ['an offer', 'a chance of a job that someone gives you'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'If I ___ a bigger kitchen, I would cook more often.', o: ['had', 'have', 'would have'], why: 'An imaginary present: *if* + past simple.' },
      { q: 'If they had checked the weather, they ___ the trip.', o: ['would have cancelled', 'will cancel', 'had cancelled'], why: 'Third conditional: *would have* + past participle.' },
      { q: 'If I hadn’t missed the train, I ___ at home by now.', o: ['would be', 'would have been', 'am'], why: 'Past condition, present result (*by now*): a mixed conditional.' },
      { q: 'I wish my brother ___ calling me so late at night.', o: ['would stop', 'stops', 'will stop'], why: 'Annoying behaviour of another person: *wish* + *would*.' },
      { q: 'I wish I ___ to the concert last night. Everyone says it was amazing.', o: ['had gone', 'went', 'would go'], why: 'A regret about *last night*: *wish* + past perfect.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete with the correct form of the verb in brackets.', items: [
      { q: 'If you ___ (tell) me earlier, I could have helped.', a: ['had told', '’d told'], why: 'An imaginary past: *if* + past perfect.' },
      { q: 'I wish I ___ (can) play an instrument.', a: ['could'], why: 'An ability you do not have: *wish* + *could*.' },
      { q: 'If she ___ (not / be) afraid of heights, she would have climbed the tower with us.', a: ['weren’t', 'wasn’t', 'were not', 'was not'], why: 'Her fear is a general, present fact; the climb was in the past.' },
      { q: 'If only I ___ (know) what to say to her!', a: ['knew'], why: 'A present wish: *if only* + past simple.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I wish I had listened to you.', why: 'A past regret: *wish* + past perfect.' },
      { a: 'If we had more money, we would travel.', why: 'Second conditional: *if* + past simple, comma, *would* + infinitive.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['If I had known, I would have called you.', 'If I would have known, I would have called you.', 'If I had known, I would call you yesterday.'], why: 'No *would* in the *if* clause, and *yesterday* needs *would have called*.' },
      { q: '', o: ['I wish I could speak Italian.', 'I wish I can speak Italian.', 'I wish I would speak Italian.'], why: 'An ability you do not have: *wish* + *could*.' },
      { q: '', o: ['If she had taken the job, she would be rich now.', 'If she would have taken the job, she would be rich now.', 'If she had taken the job, she will be rich now.'], why: 'Past condition (*had taken*), present result (*would be … now*).' },
    ] },
  ],
};
