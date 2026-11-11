// English B2, unit 9, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for native-teacher review.
// Health and lifestyle: alternatives to if (unless, provided that, as long as, in case, otherwise), purpose (so that,
// in order to, so as not to), health and lifestyle collocations, and a reading on the science of sleep.
export const UNIT = {
  id: 'u9',
  title: 'Health and lifestyle',
  goal: 'Talk about conditions and precautions without always using if, explain why people do things, use natural health collocations and follow a longer article about sleep.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['conditionals', 'unless', 'in-case', 'purpose', 'health', 'lifestyle', 'sleep'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'Unless, provided that, in case',
      about: 'Express conditions and precautions precisely with unless, provided that, as long as, in case and otherwise.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'At B1 you used **if** for almost every condition. At B2, English gives you more precise words, and examiners notice when you use them well. They all follow the same tense rule as **if**: after them, use a **present** tense for the future, never *will*.\n\n**Unless** means *if … not* or *except if*: *You won’t improve **unless** you practise* = *if you don’t practise*. Be careful: after **unless**, the verb is usually positive. *Unless you don’t practise* is a double negative and is wrong.\n\n**Provided (that)**, **providing (that)** and **as long as** mean *only if*. They make the condition sound strict, like a rule or a deal: *You can borrow my bike **as long as** you bring it back by six.*' },
          { t: 'table', caption: 'Words for conditions', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['unless', 'if … not, except if', 'Don’t call unless it’s urgent.'],
            ['provided (that)', 'only if (a little formal)', 'Provided that you rest, you’ll be fine.'],
            ['as long as', 'only if (everyday)', 'You can eat it as long as it’s cooked.'],
            ['in case', 'as a precaution, because something might happen', 'Take water in case you get thirsty.'],
            ['otherwise', 'if not (starts a new clause)', 'Warm up first; otherwise you’ll get injured.'],
          ] },
          { t: 'tip', art: 'owl', md: '**In case** is not the same as **if**. *Take an umbrella **if** it rains* = take it only when it rains. *Take an umbrella **in case** it rains* = take it now, because it might rain later.' },
        ],
        [
          { t: 'text', md: '**In case** is about doing something **before**, to be ready for a possible problem. The action happens anyway. Compare:\n\n*I’ll buy some painkillers **in case** I get a headache.* (I buy them now.)\n*I’ll take a painkiller **if** I get a headache.* (I take one only when the headache comes.)\n\n**Otherwise** links two sentences: the first one gives an instruction or a necessity, and **otherwise** tells you the bad result if you ignore it. It often comes after a semicolon, a full stop or *or*: *Drink plenty of water, **otherwise** you’ll feel tired.*' },
          { t: 'examples', items: [
            { s: 'You shouldn’t run a marathon **unless** you’ve trained for months.', n: '= if you haven’t trained.' },
            { s: 'I’ll come to the gym with you **as long as** we don’t go before seven.', n: 'Only on this condition.' },
            { s: '**Providing** the weather stays dry, we’ll cycle to work all week.', n: 'Slightly formal; the same as *provided*.' },
            { s: 'I always keep a snack in my bag **in case** my blood sugar drops.', n: 'A precaution, done in advance.' },
            { s: 'Stretch after running; **otherwise** your legs will ache tomorrow.', n: 'The result of not doing it.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Unless you don’t sleep, you’ll be tired.', 'Unless you sleep, you’ll be tired.', '*Unless* already means *if not*.'],
            ['Take a jacket in case it will be cold.', 'Take a jacket in case it’s cold.', 'Present tense after *in case*.'],
            ['As long as you will rest, you’ll recover.', 'As long as you rest, you’ll recover.', 'No *will* after *as long as*.'],
            ['I’ll call you in case I’m late.', 'I’ll call you if I’m late.', 'You only call if it happens: use *if*.'],
          ] },
          { t: 'dialogue', title: 'Planning a hike', lines: [
            { who: 'Hannah', s: 'We can do the long route, as long as we start before eight.' },
            { who: 'Daniel', s: 'Fine, but I’m bringing the first-aid kit in case someone twists an ankle.' },
            { who: 'Hannah', s: 'Good idea. And we should pack proper lunches; otherwise we’ll be starving by noon.' },
            { who: 'Daniel', s: 'Let’s not go unless the forecast is decent, though.' },
            { who: 'Hannah', s: 'Agreed. Provided it doesn’t rain, it’ll be a great day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
            { q: 'Don’t take antibiotics ___ a doctor tells you to.', o: ['unless', 'in case', 'otherwise'], why: '= if a doctor doesn’t tell you to.' },
            { q: 'I’ll pack some plasters ___ anyone gets a blister.', o: ['in case', 'unless', 'as long as'], why: 'A precaution, done in advance.' },
            { q: 'You can join the class ___ you bring your own mat.', o: ['as long as', 'in case', 'otherwise'], why: 'Only on this condition.' },
            { q: 'Book the appointment now; ___ there won’t be any slots left.', o: ['otherwise', 'unless', 'provided'], why: '*Otherwise* gives the bad result.' },
            { q: '___ you follow the plan, you should lose a few kilos.', o: ['Provided that', 'In case', 'Otherwise'], why: '= only if you follow the plan.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'Take some water in case you [will] get thirsty.', a: ['you'], why: 'Present after *in case*: *in case you get thirsty*.' },
            { s: 'Unless you [don’t eat] well, you’ll get ill.', a: ['eat'], why: '*Unless* is already negative.' },
            { s: 'I’ll text you [in case] the train is late, so you know.', a: ['if'], why: 'You only text when it happens: *if*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'In the format of B2 First Reading and Use of English Part 4: complete the second sentence so it means the same as the first, using the word given.', items: [
            { q: 'You won’t get fit if you don’t exercise regularly.', cue: 'UNLESS', a: ['You won’t get fit unless you exercise regularly.'], why: '*if … not* becomes *unless* + positive verb.' },
            { q: 'I’ll lend you my running shoes, but only if you clean them.', cue: 'LONG', a: ['I’ll lend you my running shoes as long as you clean them.'], why: '*Only if* = *as long as*.' },
            { q: 'Take an extra layer because it might get cold.', cue: 'CASE', a: ['Take an extra layer in case it gets cold.'], why: 'A precaution: *in case* + present.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 4**, you must use the word given **without changing it**, and write between **two and five words**. Contractions count as two words: *won’t* = *will not*. Check that your sentence keeps exactly the same meaning.' },
        ],
        [
          { t: 'text', md: 'Talk about your own habits and plans using the new words. Then say the sentences after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I never skip breakfast unless I’m really late.' },
            { a: 'I keep some fruit in my bag in case I get hungry.' },
            { a: 'You can borrow it as long as you give it back.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'So that, in order to',
      about: 'Explain why people do things with to, in order to, so as to, so that and for.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To explain **why** someone does something, you need **purpose** language. The simplest way is the **infinitive with to**: *I go to the gym **to** stay fit.* **In order to** and **so as to** mean the same, but they are more formal and sound good in essays: *Many people walk to work **in order to** save money.*\n\nFor a negative purpose, put **not** before **to**, but only after **in order** or **so as**: *Leave early **so as not to** miss the train.* A plain *I left early not to miss the train* sounds unnatural to many speakers.' },
          { t: 'table', caption: 'Purpose structures', explain: ['head', 'col1'], head: ['Structure', 'Use', 'Example'], rows: [
            ['to + verb', 'everyday, same subject', 'I cut down on sugar to lose weight.'],
            ['in order to / so as to', 'more formal, same subject', 'She cycles in order to reduce stress.'],
            ['in order not to / so as not to', 'negative purpose', 'He sets an alarm so as not to oversleep.'],
            ['so that + subject + can / could / will / would', 'a different subject, or a modal', 'I cook at home so that my kids eat well.'],
            ['for + noun or -ing', 'what something is used for', 'This app is for tracking your steps.'],
          ] },
        ],
        [
          { t: 'text', md: 'Use **so that** when the purpose has **a new subject**, or when you need a modal verb like **can**, **could** or **won’t**: *I put the vegetables on the table **so that** everyone **can** help themselves.*\n\nAfter **so that**, use **can / will** for the present and future, and **could / would** for the past: *She went to bed early **so that** she **would** feel fresh for the interview.*\n\n**For** + noun tells you the purpose of a thing or a trip: *I went to the chemist **for** some cough medicine.* Do not say *for to buy*: that is a common mistake.' },
          { t: 'examples', items: [
            { s: 'I’ve started walking to work **to** get more exercise.', n: 'Simple purpose with *to*.' },
            { s: 'The clinic opens early **in order to** reduce waiting times.', n: 'A formal reason.' },
            { s: 'We spoke quietly **so as not to** wake the baby.', n: 'Negative purpose.' },
            { s: 'He bought a blender **so that** he **could** make smoothies.', n: 'Past: *so that* + *could*.' },
            { s: 'I keep a bottle on my desk **so that** I **don’t** forget to drink.', n: '*so that* + present for a general habit.' },
            { s: 'She went to the pharmacy **for** some vitamins.', n: '*for* + noun.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I went out for buy some milk.', 'I went out to buy some milk.', 'Purpose with a verb: *to*, not *for*.'],
            ['I train hard for to be faster.', 'I train hard to be faster.', 'Never *for to*.'],
            ['She left early for not to be late.', 'She left early so as not to be late.', 'Negative: *so as not to* / *in order not to*.'],
            ['I spoke slowly so that she can understand.', 'I spoke slowly so that she could understand.', 'Past: *so that* + *could*.'],
          ] },
          { t: 'reading', title: 'Why I changed my routine', md: 'Two years ago I was exhausted all the time. I decided to change a few small things in order to get my energy back.\n\nFirst, I started going to bed at the same time every night so that my body would get used to a rhythm. I also put my phone in another room so as not to check messages in bed.\n\nI began cooking on Sundays so that I could take healthy lunches to work, and I joined a walking group to meet new people. None of it was dramatic, but together these changes made a huge difference.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. True, false or not given?', ng: true, items: [
            { q: 'The writer made big, dramatic changes.', a: 'f', why: '*None of it was dramatic.*' },
            { q: 'Going to bed at the same time helped the writer’s body find a rhythm.', a: 't', why: '*so that my body would get used to a rhythm*.' },
            { q: 'The writer stopped using a phone completely.', a: 'f', why: 'The phone went to another room at night only.' },
            { q: 'The walking group meets every weekend.', a: 'ng', why: 'The text doesn’t say when it meets.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
            { q: 'I take vitamin D in the winter so ___ I don’t get ill as often.', a: ['that'], why: '*so that* + new clause.' },
            { q: 'He keeps a diary in order ___ track his sleep.', a: ['to'], why: '*in order to* + verb.' },
            { q: 'Walk slowly so as ___ to fall on the ice.', a: ['not'], why: '*so as not to* = negative purpose.' },
            { q: 'I popped into the shop ___ some bread.', a: ['for'], why: '*for* + noun.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the word given.', items: [
            { q: 'I set two alarms because I didn’t want to miss my flight.', cue: 'SO', a: ['I set two alarms so as not to miss my flight.', 'I set two alarms so that I wouldn’t miss my flight.'], why: 'Negative purpose: *so as not to* or *so that … wouldn’t*.' },
            { q: 'She studies nutrition because she wants to help athletes.', cue: 'ORDER', a: ['She studies nutrition in order to help athletes.'], why: '*in order to* + verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of B2 First Reading and Use of English Part 1: choose the word that best fits each gap.', items: [
            { q: 'Many people take up yoga in order to ___ stress.', o: ['reduce', 'decrease down', 'lower down', 'drop'], why: '*reduce stress* is the natural collocation.' },
            { q: 'Doctors advise eating slowly so ___ to avoid overeating.', o: ['as', 'that', 'for', 'in'], why: '*so as to* + verb.' },
            { q: 'She keeps healthy snacks at work so that she ___ resist the vending machine.', o: ['can', 'could have', 'must', 'should have'], why: 'Present habit: *so that* + *can*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 1**, all four options often have a similar meaning. The right one is the word that fits the **grammar** around the gap (a preposition, *to*, *that*) or forms a fixed **collocation**. Read the whole sentence, not just the words next to the gap.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'I walk to work in order to get more exercise.' },
            { a: 'I turn off my phone so that I can sleep better.' },
            { a: 'I eat slowly so as not to feel too full.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'Cutting down and taking up',
      about: 'Use natural collocations and phrasal verbs for health and lifestyle.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Good vocabulary at B2 is not about rare words. It is about **collocations**: the words that naturally go together. A native speaker says *lead an active life*, *a balanced diet*, *catch a cold*, not *have an active life*, *an equilibrated diet* or *take a cold*.\n\nLearn these phrases as **chunks**, not as single words. When you write or speak, a correct collocation sounds fluent immediately, even if the grammar is simple.' },
          { t: 'table', caption: 'Health collocations', explain: ['head', 'col1'], head: ['Collocation', 'Meaning', 'Example'], rows: [
            ['lead an active / a healthy life', 'live in an active or healthy way', 'My grandparents still lead an active life.'],
            ['a balanced diet', 'food with the right mix of everything', 'A balanced diet includes plenty of vegetables.'],
            ['catch a cold / the flu', 'become ill with it', 'I always catch a cold in November.'],
            ['make a full recovery', 'get completely better', 'She made a full recovery after the operation.'],
            ['take regular exercise', 'exercise often', 'Try to take regular exercise.'],
            ['be in good / bad shape', 'be fit or unfit', 'I’m in terrible shape after the holidays.'],
          ] },
        ],
        [
          { t: 'text', md: 'Many lifestyle changes are expressed with **phrasal verbs**. Some of them can be separated by the object, and some cannot. The safe rule: when the object is a **pronoun** (*it, them*), it goes **in the middle** of a separable phrasal verb: *I **gave** it **up***, never *I gave up it*.' },
          { t: 'table', caption: 'Phrasal verbs for lifestyle', explain: ['head', 'col1'], head: ['Phrasal verb', 'Meaning', 'Example'], rows: [
            ['take up', 'start a new hobby or activity', 'I took up swimming last year.'],
            ['give up', 'stop doing or having something', 'He gave up smoking in 2020.'],
            ['cut down on', 'have less of something', 'I’m cutting down on coffee.'],
            ['work out', 'do exercise, often at a gym', 'She works out three times a week.'],
            ['get over', 'recover from an illness or problem', 'It took me weeks to get over the flu.'],
            ['come down with', 'start to have an illness', 'I think I’m coming down with something.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Cut down on** and **come down with** are three-part phrasal verbs: they can never be separated. *I’m cutting down on sugar*, not *cutting sugar down on*.' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I took a cold last week.', 'I caught a cold last week.', 'The collocation is *catch a cold*.'],
            ['She does a balanced diet.', 'She has a balanced diet.', '*have / follow a balanced diet*.'],
            ['I gave up it last year.', 'I gave it up last year.', 'Pronouns go in the middle.'],
            ['He made a complete recovering.', 'He made a full recovery.', '*make a full recovery*: noun *recovery*.'],
          ] },
          { t: 'dialogue', title: 'At the GP surgery', lines: [
            { who: 'Doctor', s: 'So, how have you been since the last appointment?' },
            { who: 'Joseph', s: 'Much better. I’ve cut down on salt and taken up cycling, like you suggested.' },
            { who: 'Doctor', s: 'That’s great. Your blood pressure is lower already. Are you working out as well?' },
            { who: 'Joseph', s: 'Twice a week. I did catch a cold last month, but I got over it quickly.' },
            { who: 'Doctor', s: 'Well, keep it up and you’ll be in great shape by the summer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves of each collocation.', pairs: [
            ['lead', 'an active life'],
            ['catch', 'a cold'],
            ['make', 'a full recovery'],
            ['follow', 'a balanced diet'],
            ['take', 'regular exercise'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete each sentence with the right particle.', items: [
            { q: 'I really need to cut down ___ sugar.', a: ['on'], why: '*cut down on* something.' },
            { q: 'She took ___ rock climbing in her fifties.', a: ['up'], why: '*take up* = start a hobby.' },
            { q: 'It took him a month to get ___ the virus.', a: ['over'], why: '*get over* = recover from.' },
            { q: 'I think I’m coming down ___ the flu.', a: ['with'], why: '*come down with* an illness.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of B2 First Reading and Use of English Part 1: choose the best word.', items: [
            { q: 'After the accident, it took Ana six months to make a full ___.', o: ['recovery', 'healing', 'repair', 'return'], why: '*make a full recovery* is the fixed phrase.' },
            { q: 'Office workers often find it hard to ___ an active lifestyle.', o: ['lead', 'take', 'hold', 'carry'], why: '*lead an active life / lifestyle*.' },
            { q: 'I’m trying to ___ down on fried food.', o: ['cut', 'take', 'make', 'put'], why: '*cut down on* = eat less of.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'I’ve taken up swimming and cut down on coffee.' },
            { a: 'It took me two weeks to get over the flu.' },
            { a: 'My grandmother still leads a very active life.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'The science of sleep',
      about: 'Read a longer article about sleep and answer questions in the format of the exam.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'This lesson puts the unit together in a longer article, about the length of a B2 First reading text. Read it once quickly for the **general idea**, then a second time slowly for **details**. Notice how the writer uses *unless*, *in case*, *so that* and health collocations.' },
          { t: 'reading', title: 'Why we can’t catch up on sleep', md: 'Most of us treat sleep as something we can postpone. We stay up late to finish work, telling ourselves we will catch up at the weekend. Unfortunately, research suggests that the body does not keep accounts so generously.\n\nDuring deep sleep, the brain clears away waste products and stores the memories of the day. Unless we get enough of this deep sleep, those processes are only partly completed. A long lie-in on Saturday helps us feel less tired, but it does not repair the effects of a week of short nights.\n\nScientists also point out that regular timing matters as much as total hours. Going to bed and getting up at the same time, even at weekends, trains the body clock so that falling asleep becomes easier. Dramatic changes in routine, on the other hand, can leave us feeling as if we have a mild case of jet lag.\n\nSo what can we do? Experts recommend keeping the bedroom cool and dark, and avoiding screens for an hour before bed in order to give the brain a chance to slow down. Caffeine after mid-afternoon is best avoided in case it keeps you awake. None of these habits is difficult, provided that we treat sleep as a priority rather than a luxury.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of B2 First Reading and Use of English Part 5: choose the best answer.', items: [
            { q: 'What does the writer suggest in the first paragraph?', o: ['People wrongly believe they can make up for lost sleep later.', 'Most people sleep too much at the weekend.', 'Working late is good for the body.', 'The body records exactly how much we sleep.'], why: '*the body does not keep accounts so generously* = we can’t simply catch up.' },
            { q: 'According to the second paragraph, a weekend lie-in…', o: ['makes us feel better but doesn’t undo the damage.', 'completely repairs a week of short nights.', 'stops the brain from storing memories.', 'is harmful to deep sleep.'], why: '*helps us feel less tired, but it does not repair the effects*.' },
            { q: 'Why does the writer mention jet lag?', o: ['To describe how changing our routine can feel.', 'To warn readers about long flights.', 'To explain how the brain stores memories.', 'To show that weekends are relaxing.'], why: 'Dramatic routine changes can feel *as if we have a mild case of jet lag*.' },
            { q: 'What is the writer’s main message in the last paragraph?', o: ['Good sleep habits are easy if we value sleep.', 'Sleep is a luxury most people cannot afford.', 'Caffeine is the main cause of poor sleep.', 'Bedrooms should always be warm.'], why: '*None of these habits is difficult, provided that we treat sleep as a priority.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Part 5**, the questions follow the order of the text. Find the part of the text for each question, then check that the option says the **same thing in different words**. Wrong options often use words from the text but change the meaning.' },
        ],
        [
          { t: 'text', md: 'Now look at the language of the article. Writers at B2 vary their structures: they don’t repeat *if* and *because* in every sentence. Find these examples in the text.' },
          { t: 'ex', kind: 'gap', h: 'Complete the phrases from the article with one word.', items: [
            { q: '___ we get enough of this deep sleep, those processes are only partly completed.', a: ['Unless'], why: '= if we don’t get enough.' },
            { q: 'Going to bed at the same time trains the body clock so ___ falling asleep becomes easier.', a: ['that'], why: '*so that* + result.' },
            { q: 'Avoid screens in order ___ give the brain a chance to slow down.', a: ['to'], why: '*in order to* + verb.' },
            { q: 'Caffeine is best avoided in ___ it keeps you awake.', a: ['case'], why: 'A precaution: *in case*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences about healthy habits.', items: [
            { a: 'I go to bed early so that I can wake up fresh.', why: 'Purpose with *so that* + *can*.' },
            { a: 'Avoid coffee in the evening unless you want to stay awake.', why: '*unless* = if you don’t want.' },
          ] },
        ],
        [
          { t: 'text', md: 'Speaking: in B2 First Speaking Part 1, the examiner asks short questions about your life. Give an answer of two or three sentences and use some of the language from this unit. Repeat these model answers after the tutor.' },
          { t: 'ex', kind: 'speak', h: 'Say these answers after the tutor.', tutor: 'mei', items: [
            { a: 'I try to sleep eight hours, unless I have an early flight.' },
            { a: 'I’ve cut down on screens in the evening so that I sleep better.' },
            { a: 'I always keep water by the bed in case I wake up thirsty.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the best word.', items: [
      { q: 'You won’t sleep well ___ you stop drinking coffee at night.', o: ['unless', 'in case', 'as long as'], why: '= if you don’t stop.' },
      { q: 'Take your inhaler ___ you have an asthma attack.', o: ['in case', 'unless', 'otherwise'], why: 'A precaution in advance.' },
      { q: 'You can go running ___ you warm up first.', o: ['provided that', 'in case', 'otherwise'], why: 'Only on this condition.' },
      { q: 'Wear a hat; ___ you’ll get sunburnt.', o: ['otherwise', 'unless', 'in case'], why: 'The bad result if you don’t.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I joined a gym in order ___ get fit for the summer.', a: ['to'], why: '*in order to*.' },
      { q: 'Speak quietly so as ___ to disturb the patients.', a: ['not'], why: '*so as not to*.' },
      { q: 'She bought a bike so ___ she could cycle to work.', a: ['that'], why: '*so that* + new clause.' },
      { q: 'I’m trying to cut down ___ sugar.', a: ['on'], why: '*cut down on*.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the correct collocation.', items: [
      { q: 'I always ___ a cold in the winter.', o: ['catch', 'take', 'make'], why: '*catch a cold*.' },
      { q: 'After the operation he made a full ___.', o: ['recovery', 'recovering', 'recover'], why: '*make a full recovery*.' },
      { q: 'My aunt still ___ a very active life at eighty.', o: ['leads', 'does', 'makes'], why: '*lead an active life*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I went to the shop [for buy] some medicine.', a: ['to buy'], why: 'Purpose with a verb: *to*.' },
      { s: 'Bring a jacket in case it [will rain].', a: ['rains'], why: 'Present after *in case*.' },
      { s: 'I used to smoke but I gave [up it].', a: ['it up'], why: 'Pronoun in the middle.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Complete the second sentence using the word given.', items: [
      { q: 'You can come with us, but only if you’re ready by nine.', cue: 'LONG', a: ['You can come with us as long as you’re ready by nine.', 'You can come with us as long as you are ready by nine.'], why: '*only if* = *as long as*.' },
      { q: 'I’ll bring an umbrella because it might rain.', cue: 'CASE', a: ['I’ll bring an umbrella in case it rains.', 'I will bring an umbrella in case it rains.'], why: 'A precaution: *in case*.' },
      { q: 'He left early because he didn’t want to miss the bus.', cue: 'SO', a: ['He left early so as not to miss the bus.', 'He left early so that he wouldn’t miss the bus.', 'He left early so that he would not miss the bus.'], why: 'Negative purpose.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the phrasal verb and its meaning.', pairs: [
      ['take up', 'start a hobby'],
      ['give up', 'stop doing something'],
      ['get over', 'recover from'],
      ['work out', 'do exercise'],
    ] },
  ],
};
