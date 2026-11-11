// English B1, unit 4, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u4',
  title: 'Food and health',
  goal: 'Talk about real possibilities in the future, say when there is too much or not enough, give advice, and understand an article about healthy habits.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['first-conditional', 'time-clauses', 'too-enough', 'advice', 'health'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'If you eat well…',
      about: 'Talk about real possibilities and their results with the first conditional, and use when, as soon as and unless about the future.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'The **first conditional** talks about something that is **really possible** in the future, and its result. It has two parts: the **if** part (the condition) and the main part (the result).\n\n**If + present simple, will + verb**: *If you **eat** more vegetables, you **will feel** better.*\n\nThe surprise for many learners is the tense after **if**: it is the **present simple**, even though we are talking about the future. We never say *If you will eat…*. The future idea is already in the other part of the sentence, with **will**.\n\nYou can put the two parts in either order. When the **if** part comes first, write a **comma** after it. When it comes second, no comma: *You’ll feel better if you sleep more.*' },
          { t: 'examples', items: [
            { s: 'If it **rains** tomorrow, we**’ll eat** inside.', n: 'A real possibility: maybe it will rain.' },
            { s: 'If you **don’t drink** enough water, you**’ll get** a headache.', n: 'Negative in the *if* part.' },
            { s: 'She **won’t sleep** well if she **drinks** coffee after six.', n: 'Result first: no comma.' },
            { s: 'What **will** you **do** if the shop **is** closed?', n: 'A question about the result.' },
            { s: 'If you **feel** tired, you **can** have a rest.', n: '*can*, *may* or *might* can replace *will*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Compare with the zero conditional (*If you heat ice, it melts*), which is for things that are **always** true. The first conditional is for **one real situation** in the future: *If you heat the soup now, it’ll be ready at seven.*' },
        ],
        [
          { t: 'text', md: 'The same rule works with other **time words** about the future: **when**, **as soon as**, **before**, **after**, **until**. After all of them, use the **present simple**, not *will*: *I’ll call you **when** I **get** home.*\n\n**When** is for something you are sure will happen: *When I finish work, I’ll go to the gym.* **If** is for something that may or may not happen: *If I finish early, I’ll go to the gym.*\n\n**As soon as** means *immediately after*: *I’ll start cooking as soon as you arrive.*\n\n**Unless** means *if … not*: *You won’t lose weight **unless** you change your diet* = *if you don’t change your diet*. After **unless**, the verb is usually positive.' },
          { t: 'table', caption: 'If, when, as soon as, unless', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['if', 'maybe it will happen', 'If I’m hungry, I’ll have a sandwich.'],
            ['when', 'it will happen; the time', 'When I get home, I’ll make dinner.'],
            ['as soon as', 'immediately after', 'I’ll text you as soon as the doctor calls.'],
            ['unless', 'if … not', 'You’ll be hungry later unless you eat now.'],
            ['until', 'up to that time', 'Stay in bed until you feel better.'],
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['If it will rain, we’ll stay in.', 'If it rains, we’ll stay in.', 'Present simple after *if*.'],
            ['I’ll call you when I will arrive.', 'I’ll call you when I arrive.', 'Present simple after *when*.'],
            ['Unless you don’t hurry, you’ll miss it.', 'Unless you hurry, you’ll miss it.', '*unless* already means *if not*.'],
            ['If you eat too much sugar you will be ill, if you don’t stop.', 'If you don’t stop eating so much sugar, you’ll be ill.', 'One *if* part is enough.'],
            ['If I see her I tell her.', 'If I see her, I’ll tell her.', 'The result needs *will* (and a comma).'],
          ] },
          { t: 'dialogue', title: 'Planning a healthy week', lines: [
            { who: 'Lucy', s: 'I’m going to try to eat better this week. If I cook at home, I’ll save money too.' },
            { who: 'Sam', s: 'Good idea. I’ll come running with you if you want.' },
            { who: 'Lucy', s: 'Great. As soon as I get home tonight, I’ll make a plan for the week.' },
            { who: 'Sam', s: 'Just don’t try to change everything at once. You won’t keep going unless it’s easy.' },
            { who: 'Lucy', s: 'True. When I see results, I’ll add more.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'If you ___ to bed earlier, you won’t be so tired.', o: ['go', 'will go', 'went'], why: 'Present simple after *if*.' },
            { q: 'I’ll call you as soon as the results ___.', o: ['arrive', 'will arrive', 'arrived'], why: 'Present simple after *as soon as*.' },
            { q: 'You won’t get better ___ you rest.', o: ['unless', 'if', 'when'], why: '*unless* = *if … not*.' },
            { q: 'If she eats all that cake, she ___ ill.', o: ['will feel', 'feels', 'felt'], why: 'The result: *will* + verb.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'If you don’t book, you won’t get a table.', cue: 'Unless', a: ['Unless you book, you won’t get a table.', 'Unless you book, you will not get a table.'], why: '*unless* + positive verb.' },
            { q: 'I will finish my dinner. Then I will phone you.', cue: 'As soon as', a: ['As soon as I finish my dinner, I’ll phone you.', 'As soon as I finish my dinner, I will phone you.'], why: 'Present simple after *as soon as*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 2): which café is best for each person?', items: [
            { q: 'Maria wants a quick, healthy lunch near her office, and she doesn’t eat meat. Café A: “Fresh salads and vegetable soups, ready in five minutes, in the business district.” Café B: “Traditional meat pies, cooked slowly. Lunch is served from 1.30.” Café C: “Big breakfasts and burgers all day, near the beach.”', o: ['Café A', 'Café B', 'Café C'], why: 'Only Café A is quick, healthy, vegetarian and near offices.' },
            { q: 'Tom and his children want somewhere relaxed by the sea at the weekend. Café A: “Open Monday to Friday only.” Café B: “In the old town, closed on Sundays.” Café C: “Next to the beach, with a play area. Open every day.”', o: ['Café C', 'Café A', 'Café B'], why: 'Café C is by the sea, good for children and open at the weekend.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 2 of the B1 Preliminary reading paper you read about **five people** and **eight short texts**, and choose the best text for each person. Each person has **three or four needs**. Underline them, then check that the text matches **all** of them: one missing detail makes it wrong.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'If you eat more vegetables, you’ll feel better.' },
            { a: 'I’ll call you as soon as I get home.' },
            { a: 'You won’t sleep well unless you stop drinking coffee.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Too much, not enough',
      about: 'Say when there is more or less than you want with too, too much, too many, enough and not enough.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'English has a small set of words for saying that something is **more than you want or need**, or **less than you need**. They are easy to mix up, so it helps to think about two questions: is the word after it an **adjective** or a **noun**? And if it is a noun, can you **count** it?\n\n**Too + adjective** means *more than is good*: *This soup is **too hot**.* It is negative: compare *very hot* (just a fact) with *too hot* (I can’t eat it).\n\n**Too much + uncountable noun**, **too many + plural noun**: *There’s **too much sugar** in this drink. There are **too many people** in the gym.*' },
          { t: 'table', caption: 'Too and enough', explain: ['head', 'col1'], head: ['Pattern', 'Use it with', 'Example'], rows: [
            ['too + adjective', 'adjectives', 'The coffee is too strong.'],
            ['too much + noun', 'uncountable nouns', 'I eat too much salt.'],
            ['too many + noun', 'plural nouns', 'There are too many sweets in the house.'],
            ['adjective + enough', 'adjectives (after them)', 'The water isn’t warm enough.'],
            ['enough + noun', 'all nouns (before them)', 'Do you get enough sleep?'],
            ['not enough', 'less than you need', 'We haven’t got enough eggs.'],
          ] },
        ],
        [
          { t: 'text', md: '**Enough** means *the right amount*, and **not enough** means *less than you need*. The tricky part is its **position**: **enough** goes **after** an adjective, but **before** a noun.\n\n*The room isn’t **big enough**.* (adjective + enough)\n\n*There aren’t **enough chairs**.* (enough + noun)\n\nAll these words can be followed by **to + verb** or **for + person**, to say what the problem is: *This box is **too heavy to carry**. The coffee isn’t **sweet enough for me**.*' },
          { t: 'examples', items: [
            { s: 'I can’t drink this tea; it’s **too hot**.', n: 'More than is good: *too* + adjective.' },
            { s: 'He eats **too much** fast food and **too many** biscuits.', n: '*much* with uncountable, *many* with plural.' },
            { s: 'Is the soup **hot enough**?', n: '*enough* after the adjective.' },
            { s: 'Most people don’t drink **enough water**.', n: '*enough* before the noun.' },
            { s: 'She’s **too tired to cook** tonight.', n: '*too* + adjective + *to* + verb.' },
            { s: 'This bag isn’t **big enough for** all the shopping.', n: '*enough for* + noun.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['It’s too much hot.', 'It’s too hot.', '*too* alone before an adjective.'],
            ['There are too much cars.', 'There are too many cars.', 'Plural: *too many*.'],
            ['The room isn’t enough big.', 'The room isn’t big enough.', '*enough* after an adjective.'],
            ['We haven’t got eggs enough.', 'We haven’t got enough eggs.', '*enough* before a noun.'],
            ['This cake is too delicious!', 'This cake is really delicious!', '*too* is negative; for praise use *very* or *really*.'],
          ] },
          { t: 'dialogue', title: 'In a new flat', lines: [
            { who: 'Mia', s: 'I love this flat, but the kitchen is too small. There isn’t enough space for a table.' },
            { who: 'Tom', s: 'And there are too many stairs! I’m too old for four floors.' },
            { who: 'Mia', s: 'You’re not too old, you just don’t do enough exercise.' },
            { who: 'Tom', s: 'Maybe. But the fridge isn’t big enough either. We’ll have to go shopping every day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'I can’t sleep. There’s ___ noise outside.', o: ['too much', 'too many', 'enough'], why: '*noise* is uncountable: *too much*.' },
            { q: 'There are ___ cars in the city centre.', o: ['too many', 'too much', 'too'], why: 'Plural: *too many*.' },
            { q: 'Is the water ___ for a swim?', o: ['warm enough', 'enough warm', 'too much warm'], why: '*enough* after the adjective.' },
            { q: 'We haven’t got ___ to make a cake.', o: ['enough eggs', 'eggs enough', 'too eggs'], why: '*enough* before the noun.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
            { q: 'The suitcase is very heavy. I can’t carry it.', cue: 'too', a: ['The suitcase is too heavy to carry.', 'The suitcase is too heavy for me to carry.'], why: '*too* + adjective + *to* + verb.' },
            { q: 'The coat is too small for him.', cue: 'enough', a: ['The coat isn’t big enough for him.', 'The coat is not big enough for him.'], why: '*not* + opposite adjective + *enough*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of the B1 Preliminary exam (Listening, Part 3): read the doctor’s message and complete the notes. Write one or two words in each gap.', items: [
            { q: 'Message: “You don’t drink enough water: try for eight glasses a day.” Notes: Drink ___ glasses of water every day.', a: ['eight', '8'], why: '*eight glasses a day*.' },
            { q: 'Message: “You eat too much salt, so cut down on crisps and ready meals.” Notes: Eat less ___.', a: ['salt'], why: '*too much salt*.' },
            { q: 'Message: “You aren’t getting enough sleep. Go to bed before eleven.” Notes: Go to bed before ___.', a: ['eleven', '11', '11 pm', 'eleven o’clock'], why: '*before eleven*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 3 of the B1 Preliminary listening paper you hear one person speaking and complete **six notes**. Before you listen, read the notes and guess **what kind of word** is missing: a number, a time, a food, a place. Write exactly the words you hear, and check your spelling.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'There’s too much sugar in this drink.' },
            { a: 'I don’t get enough sleep.' },
            { a: 'The kitchen isn’t big enough for a table.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'You should see a doctor',
      about: 'Give and ask for advice with should, ought to, had better and If I were you, and talk about common health problems.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'At A2 you used **should** for advice. At B1 you can give advice in several ways, from friendly to strong.\n\n**Should** and **ought to** mean the same: *it is a good idea*. **Ought to** is a little more formal and less common in questions and negatives: *You should rest. You ought to rest.*\n\n**Had better** (*’d better*) is stronger: it is advice with a **warning**. If you don’t do it, something bad will happen. *You’d better see a doctor, or it will get worse.* It talks about **now or the near future**, not the past, even though it has *had*.\n\n**If I were you, I’d…** is a friendly way to give advice by imagining you are the other person. Note **were**, not *was*: *If I were you, I’d stay at home.*' },
          { t: 'table', caption: 'Giving advice', explain: ['head', 'col1'], head: ['Form', 'How strong', 'Example'], rows: [
            ['should + verb', 'a good idea', 'You should drink more water.'],
            ['ought to + verb', 'a good idea, a little formal', 'You ought to take a break.'],
            ['had better + verb', 'strong: or there will be a problem', 'You’d better leave now or you’ll be late.'],
            ['If I were you, I’d…', 'friendly', 'If I were you, I’d go to bed.'],
            ['Why don’t you…?', 'a friendly suggestion', 'Why don’t you try yoga?'],
          ] },
        ],
        [
          { t: 'text', md: 'To ask for advice, say **What should I do?**, **Do you think I should…?** or **What would you do?**\n\nThese are the words you need to talk about common health problems. You **have** a cold, a cough, a headache, a sore throat, a temperature. Something **hurts** (*My back hurts*). You **feel** sick, dizzy or tired. You can **take** medicine, **see** a doctor, **get** some rest.' },
          { t: 'examples', items: [
            { s: 'I’ve got a **sore throat** and a **temperature**. What **should** I do?', n: 'Asking for advice.' },
            { s: 'You **should** stay in bed and drink a lot.', n: 'A good idea.' },
            { s: 'You**’d better not** go to work. You don’t want to make everyone ill.', n: 'Negative: *had better not* + verb.' },
            { s: '**If I were you, I’d** see a doctor.', n: 'Friendly advice.' },
            { s: '**Do you think I should** take something for it?', n: 'Asking for an opinion.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['You should to rest.', 'You should rest.', 'No *to* after *should*.'],
            ['You ought rest.', 'You ought to rest.', '*ought* needs *to*.'],
            ['You had better to go.', 'You’d better go.', 'No *to* after *had better*.'],
            ['You hadn’t better go.', 'You’d better not go.', 'Negative: *had better not*.'],
            ['If I was you, I would…', 'If I were you, I’d…', 'The fixed phrase uses *were*.'],
            ['I have a headache in my head.', 'I have a headache.', '*headache* already means a pain in the head.'],
          ] },
          { t: 'dialogue', title: 'At the doctor’s', lines: [
            { who: 'Doctor', s: 'Good morning. What seems to be the problem?' },
            { who: 'Karim', s: 'I’ve had a bad cough for two weeks, and I feel tired all the time.' },
            { who: 'Doctor', s: 'Do you smoke?' },
            { who: 'Karim', s: 'Yes, about ten a day.' },
            { who: 'Doctor', s: 'Well, you should really stop. And you’d better take this medicine twice a day, or the cough won’t go away.' },
            { who: 'Karim', s: 'Should I stay at home?' },
            { who: 'Doctor', s: 'If I were you, I’d rest for a few days. Come back if you don’t feel better by Friday.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the best advice.', items: [
            { q: 'It’s going to rain. You ___ take an umbrella, or you’ll get wet.', o: ['’d better', 'ought', 'should to'], why: 'A warning: *had better*.' },
            { q: 'If I ___ you, I’d talk to your boss.', o: ['were', 'am', 'will be'], why: 'The phrase is *If I were you*.' },
            { q: 'You ought ___ eat more fruit.', o: ['to', 'for', '—'], why: '*ought to*.' },
            { q: 'You’d better ___ be late again.', o: ['not', 'don’t', 'to not'], why: 'Negative: *had better not*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Each sentence has one mistake. Find it and fix it.', items: [
            { s: 'You [should to] see a dentist.', a: ['should', 'ought to'], why: 'No *to* after *should*: *You should see a dentist*.' },
            { s: 'If I [was] you, I’d stay at home.', a: ['were'], why: '*If I were you*.' },
            { s: 'You [hadn’t better] eat that; it’s old.', a: ['’d better not', 'had better not'], why: 'Negative: *had better not*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and the advice.', pairs: [
            ['I’ve got a terrible headache.', 'You should lie down in a dark room.'],
            ['I can’t sleep at night.', 'Why don’t you stop drinking coffee after lunch?'],
            ['My tooth really hurts.', 'You’d better see a dentist today.'],
            ['I always feel tired.', 'If I were you, I’d go to bed earlier.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'In the format of the B1 Preliminary exam (Writing, Part 1): put the words in order to make sentences for an email to a friend who is ill.', items: [
            { a: 'I’m sorry to hear that you are ill.', why: 'Start by answering your friend’s news.' },
            { a: 'If I were you, I would stay in bed.', why: 'Give advice with *If I were you*.' },
            { a: 'I’ll bring you some soup when I finish work.', why: 'Offer help: future with *when* + present simple.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 1 of the B1 Preliminary writing paper you answer an email in about **100 words**. The email has **four notes** next to it, and you must answer **all four**: one missing point loses marks. Use friendly phrases (*Thanks for your email*, *I’m sorry to hear…*, *Hope to see you soon*) and a range of grammar: a conditional, *should*, a future form.' },
          { t: 'ex', kind: 'speak', h: 'Give advice. Say these sentences after the tutor.', tutor: 'omar', items: [
            { a: 'You should drink a lot of water.' },
            { a: 'You’d better see a doctor.' },
            { a: 'If I were you, I’d stay at home.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Small habits, big changes',
      about: 'Read an article about healthy habits, find the writer’s main ideas, and discuss your own habits.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'Magazine articles about health often use the language of this unit together: conditionals for results (*if you…, you’ll…*), *too much* and *not enough* for problems, and *should* for advice.\n\nIn an article, the writer usually gives an **opinion** as well as facts. Look for opinion words: **I think**, **in my view**, **the truth is**, **the best thing is**. In the exam, many questions are about what the writer **thinks**, not only what happens.' },
          { t: 'reading', title: 'Small habits, big changes', md: 'Every January, millions of people decide to change their lives. They promise to go to the gym every day, stop eating sugar and sleep eight hours a night. By February, most of them have given up. The problem, in my view, is not that people are lazy. It is that they try to change too many things at once.\n\nScientists who study habits say that small changes work better than big ones. If you want to drink more water, don’t promise to drink three litres a day; start by having one glass every morning as soon as you get up. When that is easy, add another. A habit is something you do without thinking, and you will only stop thinking about it when it is small enough to be automatic.\n\nIt also helps to connect a new habit to an old one. Most people already make tea or coffee every day. While the kettle is boiling, you could do ten squats or stretch for two minutes. Unless you link the habit to something you already do, you will probably forget it.\n\nFinally, don’t be too hard on yourself. You will miss a day sometimes; everyone does. The best thing is to start again the next day. In the end, it is not the perfect week that makes you healthier, but the ordinary months that follow it.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. Are the sentences true, false or not given?', items: [
            { q: 'The writer thinks most people give up because they are lazy.', a: 'f', why: '*The problem… is not that people are lazy.*' },
            { q: 'Scientists say small changes are more successful.', a: 't', why: '*small changes work better than big ones*.' },
            { q: 'The writer drinks three litres of water a day.', a: 'ng', why: 'The article doesn’t say what the writer drinks.' },
            { q: 'It is a good idea to connect a new habit to something you already do.', a: 't', why: '*It also helps to connect a new habit to an old one.*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the B1 Preliminary exam (Reading, Part 3): choose the right answer.', items: [
            { q: 'Why do many people stop their new habits by February?', o: ['They try to change too much at the same time.', 'They don’t sleep enough.', 'They start too late in the year.'], why: '*they try to change too many things at once*.' },
            { q: 'What does the writer say about missing a day?', o: ['It is normal; just start again.', 'It means the habit has failed.', 'You should do twice as much the next day.'], why: '*You will miss a day sometimes… start again the next day.*' },
            { q: 'What is the writer’s main message?', o: ['Small, regular changes are the best way to get healthier.', 'Everyone should go to the gym every day.', 'New Year is the wrong time to change.'], why: 'The whole article is about small habits.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb?', items: [
            { key: 'give', o: ['up', 'advice', 'a habit', 'a cold'], a: [0, 1], why: '*give up* and *give advice* are common; you *break* or *form* a habit and *catch* a cold.' },
            { key: 'take', o: ['medicine', 'a break', 'a headache', 'exercise'], a: [0, 1, 3], why: '*take medicine, take a break, take exercise*; you *have* a headache.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In Part 4 of the B1 Preliminary speaking test, you and another candidate discuss a topic with the examiner, for example healthy habits. Give your **opinion** and a **reason** (*I think… because…*), and ask your partner too: *What about you? Do you agree?*' },
          { t: 'ex', kind: 'speak', h: 'Talk about your habits. Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I think small changes are easier to keep.' },
            { a: 'If I drink coffee late, I can’t sleep.' },
            { a: 'I don’t do enough exercise, but I’m trying.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
      { q: 'If you ___ more, you’ll feel less tired.', o: ['sleep', 'will sleep', 'slept'], why: 'Present simple after *if*.' },
      { q: 'I’ll call you when I ___ the results.', o: ['get', 'will get', 'got'], why: 'Present simple after *when*.' },
      { q: 'You won’t pass ___ you study.', o: ['unless', 'if', 'as soon as'], why: '*unless* = *if … not*.' },
      { q: 'There’s ___ salt in this soup.', o: ['too much', 'too many', 'enough of'], why: '*salt* is uncountable.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'The flat isn’t [enough big] for a family.', a: ['big enough'], why: '*enough* after an adjective.' },
      { s: 'You [ought] eat more vegetables.', a: ['ought to', 'should'], why: '*ought to* + verb, or *should* + verb.' },
      { s: 'If it [will snow], the school will close.', a: ['snows'], why: 'Present simple after *if*.' },
      { s: 'You [had better to] leave now.', a: ['had better', '’d better'], why: 'No *to* after *had better*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word given.', items: [
      { q: 'The tea is very hot. I can’t drink it.', cue: 'too', a: ['The tea is too hot to drink.', 'The tea is too hot for me to drink.'], why: '*too* + adjective + *to*.' },
      { q: 'If you don’t hurry, you’ll miss the bus.', cue: 'Unless', a: ['Unless you hurry, you’ll miss the bus.', 'Unless you hurry, you will miss the bus.'], why: '*unless* + positive verb.' },
      { q: 'It is a good idea for you to see a doctor.', cue: 'should', a: ['You should see a doctor.'], why: 'Advice: *should* + verb.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Choose the best reply.', items: [
      { q: '“I’ve had a headache all day.”', o: ['If I were you, I’d take a break from the screen.', 'You had better to work more.', 'You ought take a pill.'], why: 'Correct form and useful advice.' },
      { q: '“There aren’t enough chairs for everyone.”', o: ['I’ll bring some from the kitchen.', 'Yes, there are too much chairs.', 'The chairs are enough big.'], why: 'A natural, correct answer.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'I’ll start cooking as ___ as you arrive.', a: ['soon'], why: '*as soon as*.' },
      { q: 'You’d better ___ drive; you’re too tired.', a: ['not'], why: '*had better not*.' },
      { q: 'Most people don’t drink ___ water.', a: ['enough'], why: '*enough* before a noun.' },
    ] },
  ],
};
