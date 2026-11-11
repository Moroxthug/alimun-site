// English B2, unit 3, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B2 First.
export const UNIT = {
  id: 'u3',
  title: 'Work and ambition',
  goal: 'Talk about careers, plans and deadlines with precision, use the natural word partners of working life, and negotiate politely.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading'], topics: ['future-continuous', 'future-perfect', 'work-collocations', 'negotiating', 'careers'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I’ll be working, I’ll have finished',
      about: 'Use the future continuous and the future perfect to picture the future and talk about deadlines.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At B1 you learned to choose between **will**, **going to** and the **present continuous** for the future. At B2 you need two more forms, which help you look at the future from a particular point in time.\n\nThe **future continuous** (*will be* + *-ing*) describes an action that will be **in progress** at a moment in the future. Imagine a photo taken at that moment: *This time next week, I**’ll be lying** on a beach.* The action started before that moment and continues after it.\n\nThe **future perfect** (*will have* + past participle) describes an action that will be **complete before** a moment in the future. You look back from that moment: *By Friday, I**’ll have finished** the report.* We usually show the moment with **by** (by Friday, by the end of the year, by the time you arrive).' },
          { t: 'table', caption: 'Two ways of seeing the future', quiz: true, explain: ['head', 'col0', 'col3'], head: ['', 'Form', 'Example', 'Meaning'], rows: [
            ['future continuous', 'will be + -ing', 'At 10 tomorrow I’ll be interviewing a candidate.', 'in progress at that moment'],
            ['future perfect', 'will have + past participle', 'By 10 tomorrow I’ll have interviewed three candidates.', 'complete before that moment'],
            ['negative', 'won’t be + -ing / won’t have + p.p.', 'I won’t have finished by then.', 'not complete yet at that moment'],
            ['question', 'Will you be …ing? / Will you have …?', 'Will you have read it by Monday?', 'asking about a deadline'],
          ] },
          { t: 'tip', art: 'owl', md: 'A quick test: if you can add **by + a time**, you usually need the **future perfect**. If you can add **at + a time** or **this time next…**, you often need the **future continuous**.' },
        ],
        [
          { t: 'text', md: 'The future continuous has a second, very useful job: it makes questions about someone’s plans **more polite**. *Will you come to the meeting?* can sound like a request or even an order. *Will you be coming to the meeting?* only asks about their plans, so the other person does not feel pushed.\n\nIt is also used for things that will happen **as a normal part of events**, not because someone decided: *I’ll be seeing Anna at the conference anyway, so I can give her the documents.*\n\nThe future perfect continuous (*will have been working*) exists too. It looks back at **how long** an activity will have lasted at a future point: *In June I**’ll have been working** here for ten years.* Use it with *for* + a period.' },
          { t: 'examples', items: [
            { s: '**Will you be using** the meeting room this afternoon?', n: 'A polite question about someone’s plans.' },
            { s: 'Don’t call at 9: I**’ll be driving** to work.', n: 'In progress at that moment.' },
            { s: 'By the end of the year, we**’ll have opened** two new offices.', n: '*By* + time: complete before then.' },
            { s: 'She **won’t have arrived** by the time the meeting starts.', n: 'Negative: not complete at that point.' },
            { s: 'Next month I**’ll have been working** in sales for five years.', n: 'Future perfect continuous: duration up to a future point.' },
            { s: 'I**’ll be passing** your office tomorrow, so I can drop the contract off.', n: 'A normal part of events, not a new decision.' },
          ] },
        ],
        [
          { t: 'text', md: 'Most mistakes with these forms come from the time words. **By** means *at the latest*, so it goes with the future perfect. **Until** means *up to that point*, and goes with an action that continues. And after **when, as soon as, by the time** we use the **present**, not *will*.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['By Friday I’ll finish the report.', 'By Friday I’ll have finished the report.', 'With *by* + time, show the action as complete: future perfect.'],
            ['This time tomorrow I’ll fly to Rome.', 'This time tomorrow I’ll be flying to Rome.', 'In progress at that moment: future continuous.'],
            ['By the time you will arrive, we’ll have eaten.', 'By the time you arrive, we’ll have eaten.', 'After *by the time*, use the present simple.'],
            ['I’ll have finished until six.', 'I’ll have finished by six.', '*Until* is for a continuing action; *by* is for a deadline.'],
            ['Will you be come tomorrow?', 'Will you be coming tomorrow?', 'Future continuous: *be* + *-ing*.'],
          ] },
          { t: 'dialogue', title: 'Planning a launch', lines: [
            { who: 'Hannah', s: 'Will you be working from home on Thursday?' },
            { who: 'Daniel', s: 'Yes, but I’ll be checking my email all day, so just write.' },
            { who: 'Hannah', s: 'Good. The client wants the designs by Friday.' },
            { who: 'Daniel', s: 'That’s fine. By Thursday evening I’ll have finished the last two.' },
            { who: 'Hannah', s: 'And next week? The launch is on Monday.' },
            { who: 'Daniel', s: 'This time next week we’ll be celebrating, I hope.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
            { q: 'By the end of the month, we ___ all the interviews.', o: ['will have done', 'will be doing', 'will do'], why: '*By* + time: complete before then, future perfect.' },
            { q: 'Don’t phone at eight: we ___ dinner.', o: ['will be having', 'will have had', 'have'], why: 'In progress at that moment: future continuous.' },
            { q: '___ the car tomorrow? I need it to get to work.', o: ['Will you be using', 'Will you have used', 'Are you use'], why: 'A polite question about someone’s plans.' },
            { q: 'In April she ___ here for twenty years.', o: ['will have been working', 'will be working', 'works'], why: 'Duration up to a future point: future perfect continuous.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the verb in brackets in the future continuous or the future perfect.', items: [
            { q: 'By the time you read this, I ___ (leave) the company.', a: ['will have left', '’ll have left', 'll have left'], why: 'Complete before the moment you read it.' },
            { q: 'At midday tomorrow I ___ (give) my presentation.', a: ['will be giving', '’ll be giving', 'll be giving'], why: 'In progress at midday.' },
            { q: 'Don’t worry, the team ___ (fix) the problem by Monday.', a: ['will have fixed', '’ll have fixed', 'll have fixed'], why: 'Deadline with *by*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of the B2 First exam (Reading and Use of English Part 4): complete the second sentence so that it means the same as the first, using the word given. Use between two and five words.', items: [
            { q: 'I will finish the project before the deadline on Friday. Begin: By Friday, I …', cue: 'HAVE', a: ['By Friday, I will have finished the project', 'By Friday, I’ll have finished the project'], why: '*Will have finished*: complete before Friday.' },
            { q: 'My shift starts at six and ends at two, so at ten I am at work. Begin: At ten, I …', cue: 'BE', a: ['At ten, I will be working', 'At ten, I’ll be working', 'At ten, I will be at work', 'At ten, I’ll be at work'], why: 'In progress at ten: *will be working*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4** you must use the key word **without changing it**, and write **two to five words**. Contractions like *I’ll* count as two words. First find what grammar the key word points to, then check the meaning has not changed.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'This time next year I’ll be working abroad.' },
            { a: 'By the end of the week we’ll have finished.' },
            { a: 'Will you be coming to the meeting?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Meet a deadline, run a business',
      about: 'Use the natural word partners of working life, so your English sounds professional.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A **collocation** is a pair of words that native speakers naturally put together. You can understand *do a deadline*, but nobody says it: we **meet** a deadline. Collocations are why an English sentence sounds natural or strange, and the B2 First exam tests them often.\n\nWork English is full of fixed verb + noun pairs. The verb often seems random, so learn the pair, not the single word. It helps to group them by verb: **make** a decision, a profit, a mistake; **take** responsibility, a risk, a day off; **run** a business, a meeting, a team.' },
          { t: 'table', caption: 'Work collocations', head: ['Verb', 'Natural partners'], rows: [
            ['meet', 'a deadline, a target, someone’s needs'],
            ['run', 'a business, a company, a meeting, a team'],
            ['take on', 'responsibility, new staff, extra work, a challenge'],
            ['make', 'a decision, a profit, a loss, a complaint, progress'],
            ['apply for', 'a job, a position, a promotion, a loan'],
            ['earn', 'a living, a salary, a reputation'],
            ['set up', 'a company, a meeting, a system'],
          ] },
        ],
        [
          { t: 'text', md: 'Some collocations come in families. You **get** a promotion, a pay rise and a bonus. You **hand in** your notice when you leave, and you are **made redundant** when your job disappears (not because of your work). You **work overtime** when you stay late, and you **work flexible hours** when you choose your times.\n\nAdjectives have partners too: a **heavy** workload (not *big*), **high** demand, **fierce** competition, a **steady** income, **tight** deadlines.' },
          { t: 'examples', items: [
            { s: 'We **set up** the company with only two people.', n: '*Set up* = start a business or a system.' },
            { s: 'She **took on** a lot of **responsibility** in her first year.', n: '*Take on* = accept extra work or duties.' },
            { s: 'He was **made redundant** when the factory closed.', n: 'The job disappeared; it was not his fault.' },
            { s: 'I’ve got a **heavy workload** this month and **tight deadlines**.', n: 'Adjective partners: heavy, tight.' },
            { s: 'After three years she **got a promotion** and a **pay rise**.', n: '*Get* a promotion, a pay rise.' },
          ] },
        ],
        [
          { t: 'text', md: 'Learners usually translate the verb from their own language. Here are the pairs that go wrong most often.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['do a decision', 'make a decision', 'Decisions are *made*.'],
            ['make a business', 'run a business', '*Run* = manage; *set up* = start.'],
            ['win a salary', 'earn a salary', 'Money for work is *earned*; you *win* a prize.'],
            ['arrive a deadline', 'meet a deadline', 'You *meet* or *miss* a deadline.'],
            ['big competition', 'fierce competition', 'Competition is *fierce* or *strong*.'],
            ['a big workload', 'a heavy workload', 'A workload is *heavy* or *light*.'],
          ] },
          { t: 'reading', title: 'A message to the team', md: 'Hi everyone,\n\nI know we’ve all had a heavy workload this quarter, and I want to thank you. We met every deadline, even the very tight one in March, and we made a profit for the first time since we set up the company.\n\nNext month we will take on two new members of staff, so some of you will run a small team for the first time. If you’d like to apply for one of these positions, please let me know by Friday.\n\nThanks again,\nMarta' },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go naturally with the verb?', items: [
            { key: 'make', o: ['a decision', 'a profit', 'a deadline', 'a mistake', 'a business'], a: [0, 1, 3], why: 'We *make* decisions, profits and mistakes; we *meet* deadlines and *run* businesses.' },
            { key: 'take on', o: ['responsibility', 'new staff', 'a salary', 'extra work'], a: [0, 1, 3], why: 'You *take on* duties, people and work; you *earn* a salary.' },
            { key: 'run', o: ['a meeting', 'a team', 'a promotion', 'a business'], a: [0, 1, 3], why: 'You *run* things you manage; you *get* a promotion.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Read Marta’s message again. Are the sentences true or false?', items: [
            { q: 'The team missed one deadline in March.', a: 'f', why: 'They *met every deadline, even the very tight one in March*.' },
            { q: 'The company has made a profit before.', a: 'f', why: 'It is *the first time since we set up the company*.' },
            { q: 'Some staff will manage a team for the first time.', a: 't', why: '*Some of you will run a small team for the first time.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'In the format of the B2 First exam (Reading and Use of English Part 1): choose the word that best fits each gap.', items: [
            { q: 'After two years of hard work, the café finally began to ___ a profit.', o: ['make', 'do', 'win', 'gain'], why: 'The collocation is *make a profit*.' },
            { q: 'If we don’t hire more people, we won’t ___ our targets.', o: ['meet', 'reach out', 'arrive', 'touch'], why: 'You *meet* a target.' },
            { q: 'Competition in the industry is ___, so prices are low.', o: ['fierce', 'big', 'tall', 'wide'], why: 'Competition is *fierce*.' },
            { q: 'She decided to ___ in her notice and start her own company.', o: ['hand', 'give up', 'take', 'pass'], why: 'You *hand in* your notice.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, all four options often have a similar meaning. The right one is usually the word that **collocates** with the words around the gap, so read the whole phrase, not just the gap.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'We met every deadline this year.' },
            { a: 'She took on a lot of responsibility.' },
            { a: 'He set up his own company last spring.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I see your point, but…',
      about: 'Negotiate and disagree politely with diplomatic language.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a negotiation, *No, that’s wrong* can end the conversation. Fluent speakers soften what they say so that the other person can agree without losing face. This is **diplomatic language**, and it is one of the clearest signs of B2 speaking.\n\nThere are three main tools. **Acknowledge** the other person before you disagree: *I see your point, but…*, *I understand that, however…*. **Soften** with modal verbs and distance: *That might be difficult*, *I would suggest…*, *It could be a problem.* **Ask** instead of telling: *Would you be willing to…?*, *How would you feel about…?*' },
          { t: 'table', caption: 'Direct and diplomatic', head: ['Direct', 'Diplomatic'], rows: [
            ['That’s too expensive.', 'That’s a little more than we were hoping to pay.'],
            ['No, we can’t do that.', 'I’m afraid that might be difficult for us.'],
            ['You’re wrong.', 'I see your point, but I’m not sure I agree.'],
            ['Give us a discount.', 'Would you be willing to offer a discount?'],
            ['Deliver it next week.', 'How would you feel about delivering it next week?'],
          ] },
          { t: 'tip', art: 'owl', md: 'Small words make a big difference: **a little**, **slightly**, **quite**, **not entirely**. *It’s not entirely what we expected* is much softer than *It’s bad*.' },
        ],
        [
          { t: 'text', md: 'A negotiation usually has the same shape. You **open** by saying what you want, you **make offers** and **conditions**, and you **close** with an agreement.\n\nConditions often use *if* or *as long as*: *We could lower the price **if** you ordered more.* Notice the past tense *ordered* after *if*: like the second conditional, it makes the offer sound less fixed and more polite. To accept, say *That sounds reasonable* or *I think we can agree to that*. To close, say *So, to sum up, we’ve agreed that…*' },
          { t: 'dialogue', title: 'Negotiating a price', lines: [
            { who: 'Supplier', s: 'For two hundred units, the price is eight euros each.' },
            { who: 'Buyer', s: 'I see. That’s a little more than we were hoping to pay.' },
            { who: 'Supplier', s: 'What did you have in mind?' },
            { who: 'Buyer', s: 'Would you be willing to go down to seven, if we ordered three hundred?' },
            { who: 'Supplier', s: 'Seven might be difficult. How would you feel about seven fifty?' },
            { who: 'Buyer', s: 'That sounds reasonable, as long as you can deliver by the end of the month.' },
            { who: 'Supplier', s: 'I think we can agree to that.' },
          ] },
        ],
        [
          { t: 'text', md: 'Being too direct is the commonest problem, but being too polite can also confuse people. And some phrases are simply wrong in form.' },
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I see your point, and you’re wrong.', 'I see your point, but I see it differently.', 'After acknowledging, disagree gently with *but*.'],
            ['Would you be willing to lowering the price?', 'Would you be willing to lower the price?', '*Willing to* + base form.'],
            ['How would you feel about to deliver earlier?', 'How would you feel about delivering earlier?', 'After *about*, use *-ing*.'],
            ['If you will order more, we lower the price.', 'If you ordered more, we could lower the price.', 'A polite offer: past tense after *if*, *could* in the result.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match each direct sentence with a diplomatic version.', pairs: [
            ['That’s too late.', 'That might be a little late for us.'],
            ['Reduce the price.', 'Would you be willing to reduce the price?'],
            ['I disagree.', 'I see your point, but I’m not sure.'],
            ['This plan is bad.', 'This plan isn’t entirely what we hoped for.'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Would you be willing to [giving] us more time?', a: ['give'], why: '*Willing to* + base form.' },
            { s: 'How would you feel about [meet] on Tuesday?', a: ['meeting'], why: 'After *about*: *-ing*.' },
            { s: 'We could deliver sooner if you [will pay] in advance.', a: ['paid'], why: 'A polite condition: past simple after *if*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Speaking Part 3): you and your partner must agree. Choose the most suitable thing to say.', items: [
            { q: 'Your partner suggests a plan you do not like. You say:', o: ['That’s an interesting idea, but I wonder if it would work.', 'No, that’s a terrible plan.', 'I don’t want to talk about it.'], why: 'Acknowledge, then disagree politely.' },
            { q: 'You want to move the discussion towards a decision. You say:', o: ['So, shall we decide which one is the most important?', 'We have finished.', 'Choose one now.'], why: 'Invite your partner to decide together.' },
            { q: 'Your partner has not said much. You say:', o: ['What do you think about this one?', 'Why are you so quiet?', 'I will choose for us.'], why: 'In Part 3 you are marked on interaction: ask for your partner’s opinion.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Speaking Part 3** you get marks for how you **interact**, not for winning. Ask your partner questions, react to their ideas, and try to reach a decision together in the last minute.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I see your point, but I’m not sure I agree.' },
            { a: 'Would you be willing to offer a discount?' },
            { a: 'That sounds reasonable.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'From the courtroom to the kitchen',
      about: 'Read an interview about a change of career, and talk about your own ambitions.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'This interview brings together the language of the unit: future forms, work collocations and the way people describe big decisions. Read it once for the general idea, then again for detail.' },
          { t: 'reading', title: 'From the courtroom to the kitchen', md: 'For twelve years, Rachel Okafor worked as a lawyer in a large firm. She earned a good salary, but she says she had a heavy workload and almost no free time. “I was taking on more and more responsibility, and I was very good at it, but I wasn’t happy,” she explains.\n\nThe turning point came when her firm made her a partner. “Everyone expected me to be delighted. Instead, I realised that in ten years I would still be doing exactly the same thing.” Six months later, she handed in her notice and enrolled on a cooking course.\n\nToday she runs a small restaurant near the river. The work is hard and the hours are long, and she earns less than half of her old salary. “People ask if I regret it. I don’t. When I was a lawyer, I was always waiting for the weekend. Now I’m always thinking about the next menu.”\n\nWhat comes next? “By this time next year, we’ll have opened a second place. And in five years, I hope I’ll be teaching young cooks. Maybe some of them will be lawyers who changed their minds.”' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B2 First exam (Reading and Use of English Part 5): choose the best answer.', items: [
            { q: 'Why did Rachel leave the law?', o: ['She realised her future would be the same as her present.', 'Her firm refused to make her a partner.', 'She was not good at her job.', 'She wanted a higher salary.'], why: '*In ten years I would still be doing exactly the same thing.*' },
            { q: 'How did Rachel feel when she became a partner?', o: ['Not as happy as people expected.', 'Delighted and proud.', 'Angry with her colleagues.', 'Worried about money.'], why: '*Everyone expected me to be delighted. Instead…*' },
            { q: 'What does she say about her new job?', o: ['It is demanding but she has no regrets.', 'It is easier than the law.', 'It pays better than her old job.', 'She is thinking of going back to the law.'], why: 'Hard work and long hours, *I don’t* regret it.' },
            { q: 'What are her plans for next year?', o: ['To have a second restaurant.', 'To start teaching cooks.', 'To return to her old firm.', 'To work fewer hours.'], why: '*By this time next year, we’ll have opened a second place.* Teaching is in five years.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5** the questions follow the order of the text. The wrong options often use **words from the text** but change the meaning, so check the whole sentence, not just matching words.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about Rachel with one word in each gap.', items: [
            { q: 'Rachel ___ in her notice six months after becoming a partner.', a: ['handed'], why: 'The phrase is *hand in your notice*.' },
            { q: 'She now ___ a small restaurant near the river.', a: ['runs'], why: 'You *run* a business.' },
            { q: 'By next year she will ___ opened a second restaurant.', a: ['have'], why: 'Future perfect: *will have opened*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'In five years I hope I will be teaching young cooks.', why: 'Future continuous for a picture of the future.' },
            { a: 'By then we will have opened a second restaurant.', why: '*By then* + future perfect.' },
          ] },
        ],
        [
          { t: 'text', md: 'Now talk about your own working life or studies. Think about where you will be at a moment in the future and what you will have achieved by then. Use the future continuous, the future perfect and at least two collocations from this unit.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'She handed in her notice and enrolled on a cooking course.' },
            { a: 'By this time next year, we’ll have opened a second place.' },
            { a: 'I don’t regret it at all.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the best form.', items: [
      { q: 'By the time the guests arrive, we ___ the food.', o: ['will have prepared', 'will be preparing', 'prepare'], why: 'Complete before they arrive: future perfect.' },
      { q: 'This time tomorrow I ___ on a plane.', o: ['will be sitting', 'will have sat', 'sit'], why: 'In progress at that moment: future continuous.' },
      { q: '___ the car this evening? I’d like to borrow it.', o: ['Will you be using', 'Will you have used', 'Do you will use'], why: 'Polite question about plans.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'We need to ___ a decision about the new office.', a: ['make'], why: '*Make a decision.*' },
      { q: 'I’m afraid we didn’t ___ the deadline.', a: ['meet'], why: '*Meet a deadline.*' },
      { q: 'She ___ a small team of designers.', a: ['runs', 'manages', 'leads'], why: 'You *run* or *manage* a team.' },
      { q: 'He was made ___ when the factory closed.', a: ['redundant'], why: '*Be made redundant* = lose your job because it disappears.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence so that it means the same as the first, using the word given.', items: [
      { q: 'The painters will finish the house before Friday. Begin: By Friday, the painters …', cue: 'HAVE', a: ['By Friday, the painters will have finished the house', 'By Friday, the painters’ll have finished the house'], why: 'Future perfect with *by*.' },
      { q: 'Can you lower the price? Begin: Would you …', cue: 'WILLING', a: ['Would you be willing to lower the price?', 'Would you be willing to lower the price'], why: '*Would you be willing to* + base form.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'By six I’ll [finish] all my emails.', a: ['have finished'], why: 'With *by*: future perfect.' },
      { s: 'How would you feel about [change] the date?', a: ['changing'], why: 'After *about*: *-ing*.' },
      { s: 'We need to [do] a decision today.', a: ['make'], why: '*Make a decision.*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the direct and the diplomatic sentences.', pairs: [
      ['That’s too expensive.', 'That’s a little more than we hoped to pay.'],
      ['We can’t do that.', 'That might be difficult for us.'],
      ['You’re wrong.', 'I see your point, but I’m not sure.'],
    ] },
  ],
};
