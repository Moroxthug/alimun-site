// English B2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Work and ambition',
  goal: 'Talk about careers and the future with precision, and negotiate politely.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['future-continuous', 'future-perfect', 'work-collocations', 'negotiating', 'careers'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'I’ll be working, I’ll have finished',
      about: 'Use the future continuous and the future perfect to talk about plans and deadlines.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use the **future continuous** for an action that will be **in progress** at a particular time in the future. Form it with *will be* + the *-ing* form.' },
          { t: 'examples', items: [
            { s: 'This time next week, I**’ll be lying** on a beach.', n: 'At that moment next week, the lying on the beach will be in progress.' },
            { s: 'Don’t call at eight. We**’ll be having** dinner.', n: 'Dinner will already have started and will not be finished at eight.' },
            { s: '**Will** you **be using** the car tomorrow? I need to go to the airport.', n: 'A polite way to ask about someone’s plans, often before a request.' },
          ] },
        ],
        [
          { t: 'text', md: 'Use the **future perfect** for an action that will be **finished before** a particular time in the future. Form it with *will have* + the past participle.' },
          { t: 'examples', items: [
            { s: 'I**’ll have finished** the report **by** Friday.', n: 'The report will be done on Friday or earlier.' },
            { s: 'By the end of this year, we**’ll have been** married for ten years.', n: 'We look back from a future point in time.' },
            { s: 'Don’t worry. The meeting **won’t have started** by the time you arrive.', n: 'Negative: *won’t have* + past participle.' },
          ] },
          { t: 'tip', art: 'owl', md: '*By* + a time means *not later than*: *by Friday*, *by the end of the month*, *by the time you arrive*. It is very common with the future perfect.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Don’t call me at eight. I ___ the children to bed.', o: ['’ll be putting', '’ll have put', 'put'], why: 'At eight the action will be in progress: future continuous.' },
            { q: 'By seven o’clock I ___ dinner, so we can eat as soon as you arrive.', o: ['’ll have cooked', '’ll be cooking', 'am cooking'], why: 'The cooking will be finished before seven: future perfect.' },
            { q: 'This time tomorrow, we ___ over the Atlantic.', o: ['’ll be flying', '’ll have flown', 'fly'], why: '*This time tomorrow*: an action in progress at that moment.' },
            { q: '___ the printer this afternoon? I need to print forty pages.', o: ['Will you be using', 'Will you have used', 'Are you use'], why: 'A polite question about someone’s plans: future continuous.' },
            { q: 'She ___ her degree by next June.', o: ['will have completed', 'will have complete', 'has completed'], why: '*By next June*: finished before that time, so the future perfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the future continuous or the future perfect of the verb in brackets.', items: [
            { q: 'By the end of the month, we ___ (sell) all the tickets.', a: ['will have sold', '’ll have sold'], why: 'Finished before a future time: *will have* + past participle.' },
            { q: 'Don’t phone at midnight. I ___ (sleep).', a: ['will be sleeping', '’ll be sleeping'], why: 'In progress at midnight: *will be* + *-ing*.' },
            { q: '___ (you / finish) the project by Monday?', a: ['Will you have finished'], why: 'Question: *Will* + subject + *have* + past participle.' },
            { q: 'At this time on Friday, they ___ (sit) their final exam.', a: ['will be sitting', '’ll be sitting'], why: 'In progress at that moment on Friday: future continuous.' },
            { q: 'I’m sure the guests ___ (not / leave) by the time we get there.', a: ['won’t have left', 'will not have left'], why: 'Negative future perfect: *won’t have* + past participle.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Will you be coming to the meeting?', why: 'Question: *Will* + subject + *be* + *-ing*.' },
            { a: 'She won’t have read the report.', why: '*Won’t have* + past participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Meet a deadline, run a business',
      about: 'Learn the verbs and nouns that go together when we talk about work.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In English, some verbs and nouns go together naturally. These pairs are called **collocations**. Another verb often sounds wrong to a native speaker: we **make** a decision, never *do* a decision.' },
          { t: 'table', caption: 'Work collocations', explain: ['head'], quiz: true, head: ['Collocation', 'Example'], rows: [
            ['meet a deadline', 'We worked all weekend to meet the deadline.'],
            ['miss a deadline', 'If we miss the deadline, we lose the client.'],
            ['run a business', 'My aunt runs a small travel business.'],
            ['take on responsibility', 'I’d like to take on more responsibility next year.'],
            ['make a decision', 'We need to make a decision by Friday.'],
            ['gain experience', 'She gained a lot of experience abroad.'],
            ['get a promotion', 'He got a promotion after only a year.'],
            ['earn a living', 'It’s hard to earn a living as an artist.'],
            ['do overtime', 'I did ten hours of overtime last week.'],
            ['hand in your notice', 'She handed in her notice on Monday.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: '*Hand in your notice* means you tell your employer that you are going to leave your job. When your employer makes you leave, you *are fired* or, in informal British English, you *get the sack*.' },
          { t: 'ex', kind: 'match', h: 'Match the verbs and the nouns.', pairs: [
            ['meet', 'a deadline'],
            ['run', 'a business'],
            ['earn', 'a living'],
            ['hand in', 'your notice'],
            ['gain', 'experience'],
            ['do', 'overtime'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the missing verb in the correct form.', items: [
            { q: 'We’ll have to stay late tonight if we want to ___ the deadline.', a: ['meet'], why: 'We *meet* a deadline when we finish in time.' },
            { q: 'He ___ in his notice yesterday, so he leaves at the end of the month.', a: ['handed'], why: '*Hand in your notice*, in the past simple: *handed*.' },
            { q: 'Volunteering is a good way to ___ experience.', a: ['gain', 'get'], why: 'We *gain* or *get* experience.' },
            { q: 'I’ve been asked to ___ on more responsibility next year.', a: ['take'], why: '*Take on responsibility*: accept more duties.' },
            { q: 'It’s hard to ___ a living as a musician.', a: ['earn', 'make'], why: 'We *earn* or *make* a living.' },
            { q: 'After only eighteen months, she ___ a promotion.', a: ['got', 'received', 'won', 'earned'], why: 'We *get* a promotion. *Receive*, *win* and *earn* are also possible.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Each sentence has one wrong verb. Tap it.', items: [
            { s: 'I hope to [do] a decision about the job by Friday.', why: 'We *make* a decision, not *do* one.' },
            { s: 'She [made] a lot of overtime last month to pay for her holiday.', why: 'We *do* overtime: *She did a lot of overtime*.' },
            { s: 'We [arrived] the deadline, but only just.', why: 'We *meet* a deadline: *We met the deadline*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'I see your point, but…',
      about: 'Negotiate politely: disagree, ask and suggest without sounding rude.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'In a negotiation, very direct language can sound rude in English. Speakers make their requests and disagreements softer with a few simple tools: *would*, *could* and *might*, questions instead of orders, and phrases that show they have listened.' },
          { t: 'table', caption: 'Direct and diplomatic', explain: ['head'], head: ['Direct', 'More diplomatic'], rows: [
            ['You’re wrong.', 'I see your point, but I’m not sure I agree.'],
            ['Give us a discount.', 'Would you be willing to offer us a discount?'],
            ['That’s impossible.', 'I’m afraid that might be difficult.'],
            ['We want delivery in May.', 'We’d prefer delivery in May, if possible.'],
            ['Your price is too high.', 'Your price is a little higher than we expected.'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Talking about price', lines: [
            { who: 'Kwame', s: 'Thanks for coming in, Inés. Shall we start with the price?' },
            { who: 'Inés', s: 'Yes, let’s. To be honest, your price is a little higher than we expected.' },
            { who: 'Kwame', s: 'I see your point, but our machines are built to last. What did you have in mind?' },
            { who: 'Inés', s: 'Would you be willing to offer ten per cent off if we ordered two hundred?' },
            { who: 'Kwame', s: 'I’m afraid ten per cent might be difficult. Could we meet halfway, at five?' },
            { who: 'Inés', s: 'That sounds reasonable, as long as you can deliver by the end of May.' },
            { who: 'Kwame', s: 'I think we can manage that. Let’s put it in writing.' },
          ] },
          { t: 'text', md: 'Neither speaker says a direct *no*. *I’m afraid* introduces bad news politely. *Could we meet halfway?* suggests a compromise. *As long as* adds a condition to an agreement.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the most diplomatic answer.', items: [
            { q: 'A colleague says the deadline is fine. You disagree.', o: ['I see what you mean, but I think it might be a bit tight.', 'That’s wrong. The deadline is too tight.', 'No. Change the deadline.'], why: '*I see what you mean, but…* shows you listened. *Might* and *a bit* make it softer.' },
            { q: 'You want a client to pay sooner.', o: ['Would it be possible to pay within thirty days?', 'Pay within thirty days.', 'You must pay within thirty days, OK?'], why: 'A question with *would* sounds like a request, not an order.' },
            { q: 'You can’t accept a lower price.', o: ['I’m afraid we can’t go any lower than that.', 'We won’t go lower. Forget it.', 'That price is ridiculous.'], why: '*I’m afraid* introduces bad news politely.' },
            { q: 'You want to suggest a compromise.', o: ['Could we meet halfway?', 'Just accept half.', 'You have to give us half.'], why: '*Could we…?* makes a suggestion that the other side can accept or refuse.' },
            { q: 'You agree, but with one condition.', o: ['That sounds fine, as long as we can review it in June.', 'Fine, but only if you stop complaining.', 'OK, whatever.'], why: '*As long as* adds a condition politely.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the beginnings and the endings of these phrases.', pairs: [
            ['I see your', 'point, but I’m not sure.'],
            ['Would you be', 'willing to wait a week?'],
            ['Could we meet', 'halfway?'],
            ['I’m afraid that', 'might be difficult.'],
            ['That sounds', 'like a good idea.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Would you be willing to change the date?', why: '*Would you be willing to* + base form: a polite request.' },
            { a: 'I’m afraid that might be difficult.', why: '*I’m afraid* + a softer statement with *might*.' },
            { a: 'Could we discuss the price again?', why: '*Could we* + base form: a polite suggestion.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'From the courtroom to the kitchen',
      about: 'Read an interview with someone who changed career.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'From the courtroom to the kitchen', md: 'Marisol Ortega worked as a lawyer for twelve years before she opened a small bakery. We asked her about the change.\n\n**Why did you leave law?**\n\nI was good at my job and I had a good salary, but I was working seventy hours a week and I wasn’t happy. One evening I realised that the only part of my day I really enjoyed was baking bread when I got home. That frightened me a little.\n\n**Was it a difficult decision?**\n\nVery. It took me nearly two years to make it. I didn’t want to hand in my notice and then discover that I hated running a business. So first I did a weekend course, and then I worked in a friend’s bakery on Saturdays to gain some experience.\n\n**What surprised you most?**\n\nHow much of the job has nothing to do with baking. I spend hours on suppliers, staff and tax. Funnily enough, my legal training helps a lot. When I negotiate with suppliers, I still say things like “I see your point, but…”\n\n**Do you earn less now?**\n\nMuch less, at least for now. But I only take on the work I want, and the deadlines I have to meet are my own.\n\n**Where do you see yourself in five years?**\n\nI hope I’ll have opened a second shop by then. And on most mornings, I’ll be doing exactly what I do today: getting up at four and making bread.\n\n**Any advice for people who are thinking about a change?**\n\nTest the idea before you jump. And don’t wait for the perfect moment, because it won’t come.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marisol left law because she was bad at her job.', a: 'f', why: 'She says she was good at her job but she was not happy.' },
            { q: 'She made the decision to change career very quickly.', a: 'f', why: 'It took her nearly two years.' },
            { q: 'She worked in a bakery before she opened her own.', a: 't', why: 'She worked in a friend’s bakery on Saturdays.' },
            { q: 'Her bakery has five employees.', a: 'ng', why: 'She mentions staff, but the text does not say how many.' },
            { q: 'Her experience as a lawyer is useful in her new job.', a: 't', why: '“My legal training helps a lot.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the interview.', items: [
            { q: '“I hope I’ll have opened a second shop by then.” What does Marisol mean?', o: ['She hopes the second shop will be open in five years or sooner.', 'She is opening a second shop at the moment.', 'She opened a second shop five years ago.'], why: 'The future perfect: finished before a future time.' },
            { q: '“I’ll be doing exactly what I do today.” Why the future continuous?', o: ['It describes an activity in progress at a time in the future.', 'It describes an activity that will be finished.', 'It describes a decision she is making now.'], why: '*Will be* + *-ing*: in progress at that future time.' },
            { q: 'What does “Test the idea before you jump” mean?', o: ['Try the new work in a small way before you leave your job.', 'Do a sports test before you start.', 'Leave your job first and think later.'], why: 'Marisol did a course and worked on Saturdays before she left law.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two work collocations.', items: [
            { s: 'I didn’t want to [hand in my notice] and then discover that I hated [running a business].', why: '*Hand in your notice* and *run a business* are work collocations.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'By the time you read this email, I ___ the country.', o: ['’ll have left', '’m leaving', 'leave'], why: 'The leaving will be finished before you read it: future perfect.' },
      { q: 'Don’t visit at two. I ___ an online lesson.', o: ['’ll be teaching', '’ll have taught', 'teach'], why: 'In progress at two: future continuous.' },
      { q: 'We need to ___ a decision about the new office soon.', o: ['make', 'do', 'take on'], why: 'We *make* a decision.' },
      { q: 'If we miss the ___, the client will be very unhappy.', o: ['deadline', 'notice', 'living'], why: 'We meet or miss a *deadline*.' },
      { q: 'You disagree politely: “I see your point, ___ I’m not sure it will work.”', o: ['but', 'so', 'because'], why: '*I see your point, but…* accepts the idea and then disagrees.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'By 2030, they ___ (build) the new bridge.', a: ['will have built', '’ll have built'], why: 'Finished before a future time: future perfect.' },
      { q: '___ (you / use) your laptop this evening? Mine is broken.', a: ['Will you be using'], why: 'A polite question about plans: future continuous.' },
      { q: 'She wants to ___ on more responsibility at work.', a: ['take'], why: '*Take on responsibility*.' },
      { q: 'Would you be ___ to lower the price a little?', a: ['willing', 'able', 'prepared'], why: '*Would you be willing to…?* is a polite request.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could we meet halfway on the price?', why: '*Could we* + base form: a polite suggestion.' },
      { a: 'Will you have finished the report?', why: 'Question: *Will* + subject + *have* + past participle.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which is the most diplomatic?', items: [
      { q: '', o: ['I’m afraid Friday might be difficult for us.', 'Friday is impossible.', 'We can’t do Friday, sorry, no.'], why: '*I’m afraid* and *might* make the bad news softer.' },
      { q: '', o: ['We’d prefer to pay in two parts, if possible.', 'We want to pay in two parts.', 'We will pay in two parts.'], why: '*We’d prefer…, if possible* is a soft way to say what you want.' },
    ] },
  ],
};
