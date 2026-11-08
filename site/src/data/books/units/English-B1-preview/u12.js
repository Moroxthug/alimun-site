// English B1, unit 12, second edition (docs/LESSONS_PLAN.md, L6). Draft for native-teacher review.
// Each lesson: a full explanation first (the rule in plain words, why, many examples, the usual mistakes, a text that
// uses it), then fewer exercises from controlled to free, one speaking task, and one task in the format of B1 Preliminary.
export const UNIT = {
  id: 'u12',
  title: 'Money and shopping',
  goal: 'Talk about amounts with a few, a little, plenty of and hardly any, use make and do and money verbs correctly, complain and return things in a shop and by email, and talk about living on a budget.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'speaking', 'reading', 'writing'], topics: ['quantifiers', 'make-do', 'money', 'complaints', 'shopping', 'budget'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'A few, a little, hardly any',
      about: 'Talk about amounts precisely with a few, a little, few, little, plenty of, hardly any and too much.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'At A2 you learned **some, any, much, many** and **a lot of**. At B1 you can be more precise about amounts. The first thing to remember is the difference between **countable** nouns (*coins, shops, friends*) and **uncountable** nouns (*money, time, advice, information*).\n\nFor a **small amount**, use **a few** with countable nouns and **a little** with uncountable nouns: *I’ve got **a few** coins.* *I’ve got **a little** money.*\n\nFor a **large amount**, **plenty of** works with both, and it means *more than enough*: *Don’t worry, we’ve got **plenty of** time.*\n\nFor **almost none**, use **hardly any**: *There were **hardly any** people in the shop.* *I’ve got **hardly any** money left.*' },
          { t: 'table', caption: 'Amounts', explain: ['head', 'col0'], head: ['', 'Countable (coins)', 'Uncountable (money)'], rows: [
            ['almost none', 'hardly any coins', 'hardly any money'],
            ['a small amount', 'a few coins', 'a little money'],
            ['more than enough', 'plenty of coins', 'plenty of money'],
            ['more than you want', 'too many coins', 'too much money'],
            ['in questions and negatives', 'How many coins? not many coins', 'How much money? not much money'],
          ] },
          { t: 'tip', art: 'owl', md: '**Money** is uncountable in English, even though you can count coins and notes. So: *How **much** money?*, *a **little** money*, never *many moneys*. The same is true for **advice, information, news, furniture** and **luggage**.' },
        ],
        [
          { t: 'text', md: 'There is a small but important difference between **a few / a little** and **few / little** without *a*.\n\n**A few** and **a little** are **positive**: they mean *some, not a lot, but enough*. *I have **a little** time, so I can help you.*\n\n**Few** and **little** without *a* are **negative**: they mean *not enough, almost none*. *I have **little** time, so I can’t help you.* This form is quite formal; in everyday speech people usually say **not much** or **hardly any** instead.\n\nSo the little word **a** completely changes the feeling of the sentence!' },
          { t: 'examples', items: [
            { s: 'We’ve still got **a few** days before payday.', n: 'Positive: some days, enough.' },
            { s: '**Few** people can afford a house in the centre.', n: 'Negative and a bit formal: almost nobody.' },
            { s: 'Could you lend me **a little** money until Friday?', n: 'A small amount, polite.' },
            { s: 'There’s **hardly any** milk left. Can you buy some?', n: 'Almost none.' },
            { s: 'Relax, there’s **plenty of** food for everyone.', n: 'More than enough.' },
            { s: 'I spent **too much** money at the sales.', n: 'More than I wanted to.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I have a few money.', 'I have a little money.', '*Money* is uncountable: *a little*.'],
            ['There were hardly no people.', 'There were hardly any people.', '*Hardly* is already negative: use *any*.'],
            ['How many money do you need?', 'How much money do you need?', 'Uncountable: *how much*.'],
            ['We have plenty time.', 'We have plenty of time.', 'Always *plenty of*.'],
            ['Can you give me some advices?', 'Can you give me some advice?', '*Advice* is uncountable: no *-s*.'],
          ] },
          { t: 'dialogue', title: 'Planning a party', lines: [
            { who: 'Maya', s: 'Have we got enough food for Saturday?' },
            { who: 'Joe', s: 'Plenty of crisps, but hardly any drinks. And only a few plates.' },
            { who: 'Maya', s: 'I’ve got a little money left this month. I can buy drinks.' },
            { who: 'Joe', s: 'Great. Let’s not spend too much, though. Few people will eat a big meal at midnight.' },
            { who: 'Maya', s: 'True. A few pizzas will be enough.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'I can’t go out tonight. I’ve got ___ money until payday.', o: ['hardly any', 'a few', 'plenty of'], why: 'Almost none, so you can’t go out: *hardly any*.' },
            { q: 'Don’t hurry. We’ve got ___ time.', o: ['plenty of', 'a few', 'too many'], why: 'More than enough: *plenty of*.' },
            { q: 'Could I ask you ___ questions about the job?', o: ['a few', 'a little', 'much'], why: '*Questions* are countable: *a few*.' },
            { q: 'Add ___ salt, but not too much.', o: ['a little', 'a few', 'many'], why: '*Salt* is uncountable: *a little*.' },
            { q: 'I bought ___ clothes in the sales. My wardrobe is full!', o: ['too many', 'too much', 'a little'], why: 'Countable and more than you want: *too many*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Countable or uncountable?', groups: ['countable', 'uncountable'], explain: ['groups'], items: [
            { s: 'coin', g: 0, why: '*one coin, two coins*' },
            { s: 'money', g: 1, why: 'No plural: *some money*.' },
            { s: 'advice', g: 1, why: '*a piece of advice*, never *advices*.' },
            { s: 'receipt', g: 0, why: '*one receipt, two receipts*' },
            { s: 'information', g: 1, why: 'No plural in English.' },
            { s: 'bill', g: 0, why: '*two bills*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'We have [plenty] time before the train.', a: ['plenty of'], why: 'Always *plenty of*.' },
            { s: 'There were [hardly no] seats left.', a: ['hardly any'], why: '*Hardly* is negative already: *hardly any*.' },
            { s: 'Can you give me [an advice]?', a: ['some advice', 'a piece of advice'], why: '*Advice* is uncountable.' },
          ] },
          { t: 'ex', kind: 'select', h: 'In the format of B1 Preliminary, Reading Part 5: choose the right word for each gap.', items: [
            { q: 'Saving money is easier if you spend ___ time planning your shopping.', o: ['a little', 'a few', 'many'], why: '*Time* here is uncountable: *a little*.' },
            { q: 'Make a list, because ___ people buy things they don’t need when they shop without one.', o: ['many', 'much', 'little'], why: '*People* is countable plural: *many*.' },
            { q: 'Check how ___ money you have before you go.', o: ['much', 'many', 'few'], why: 'Uncountable: *how much*.' },
            { q: 'If you do this, you will have ___ of money left at the end of the month.', o: ['plenty', 'many', 'much'], why: '*Plenty of* + uncountable noun; *many of money* and *much of money* are wrong.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 5** many gaps test whether the next noun is **countable or uncountable**. Before you choose between *much / many* or *a few / a little*, look at the noun after the gap and ask: can I count it?' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Your turn: say these sentences after the tutor.', tutor: 'lena', items: [
            { a: 'I have got hardly any money left.' },
            { a: 'Don’t worry, we have got plenty of time.' },
            { a: 'Could you lend me a little money?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'Make or do? Spend, save, borrow, lend',
      about: 'Choose between make and do, and use the most important money verbs correctly.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many languages have one verb where English has two: **make** and **do**. There is a general idea that helps:\n\n**Make** is for **creating or producing** something new: *make a cake, make a plan, make a mistake, make money*.\n\n**Do** is for **activities, work and tasks**, often things you have to do: *do the shopping, do your homework, do a job, do the washing-up*.\n\nBut many expressions are fixed, and you simply have to learn them. Money expressions are a good example: you **make money** (earn it) but you **do business**, you **make a payment** but you **do the accounts**.' },
          { t: 'table', caption: 'Make or do?', explain: ['head'], head: ['make', 'do'], rows: [
            ['make money', 'do the shopping'],
            ['make a decision', 'do business'],
            ['make a mistake', 'do a job'],
            ['make a complaint', 'do someone a favour'],
            ['make a payment', 'do your best'],
            ['make an offer', 'do the accounts'],
          ] },
          { t: 'tip', art: 'owl', md: 'A useful test: if you can ask *What did you make?* and answer with a **thing**, it is probably **make**. If the answer is an **activity** (*I did the cleaning*), it is probably **do**. But always learn the fixed phrases as wholes.' },
        ],
        [
          { t: 'text', md: 'Some money verbs are often confused:\n\n**Spend** money **on** something: *I spend too much **on** clothes.* (also *spend time*)\n\n**Save** money **for** something: *I’m saving **for** a new laptop.*\n\n**Borrow** = take something that you will give back: *Can I **borrow** your pen?* You borrow **from** someone.\n\n**Lend** = give something that someone will give back: *Can you **lend** me a pen?* You lend something **to** someone.\n\n**Afford** = have enough money for something: *I can’t **afford** a new car.* After *afford* we often use **to** + verb: *We can’t afford **to go** on holiday this year.*\n\n**Owe** = need to pay someone back: *I **owe** you ten pounds.*' },
          { t: 'examples', items: [
            { s: 'How much do you **spend on** food every week?', n: '*Spend* + money + *on* + thing.' },
            { s: 'Could you **lend me** twenty euros?', n: 'The other person gives it to you.' },
            { s: 'Can I **borrow** twenty euros **from** you?', n: 'You take it from the other person.' },
            { s: 'I can’t **afford to** eat out every night.', n: '*Afford* + *to* + verb.' },
            { s: 'Thanks for paying. I **owe** you one!', n: 'A friendly way to say thank you for a favour.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['Can you borrow me your car?', 'Can you lend me your car?', 'The other person gives: *lend*.'],
            ['I do a lot of mistakes.', 'I make a lot of mistakes.', 'Fixed phrase: *make a mistake*.'],
            ['She spends a lot of money for shoes.', 'She spends a lot of money on shoes.', '*Spend money on*.'],
            ['I can’t afford buying it.', 'I can’t afford to buy it.', '*Afford* + *to* + verb.'],
            ['He makes the shopping on Saturday.', 'He does the shopping on Saturday.', 'Activities and tasks: *do*.'],
          ] },
          { t: 'dialogue', title: 'Between flatmates', lines: [
            { who: 'Ellie', s: 'Could you lend me fifty pounds? I’ll pay you back on Friday.' },
            { who: 'Marcus', s: 'Again? You already owe me thirty.' },
            { who: 'Ellie', s: 'I know. I spent too much on my sister’s birthday present.' },
            { who: 'Marcus', s: 'You need to make a budget. I’ll help you do it this weekend.' },
            { who: 'Ellie', s: 'Thanks. I can’t afford to keep making the same mistake.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Make or do?', groups: ['make', 'do'], explain: ['groups'], items: [
            { s: 'a mistake', g: 0, why: 'Fixed: *make a mistake*.' },
            { s: 'the shopping', g: 1, why: 'An activity: *do the shopping*.' },
            { s: 'a decision', g: 0, why: '*make a decision*' },
            { s: 'your homework', g: 1, why: 'A task: *do your homework*.' },
            { s: 'a complaint', g: 0, why: '*make a complaint*' },
            { s: 'business', g: 1, why: 'Fixed: *do business*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right verb.', items: [
            { q: 'Can I ___ your umbrella? It’s raining.', o: ['borrow', 'lend', 'owe'], why: 'You take it and give it back: *borrow*.' },
            { q: 'My parents ___ me the money for my course.', o: ['lent', 'borrowed', 'spent'], why: 'They gave it to you: *lent*.' },
            { q: 'We can’t ___ to go abroad this summer.', o: ['afford', 'spend', 'save'], why: '*Afford* + *to* + verb.' },
            { q: 'How much did you ___ on your new phone?', o: ['spend', 'save', 'owe'], why: '*Spend* money *on* something.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'In the format of B1 Preliminary, Reading Part 6: write one word in each gap.', items: [
            { q: 'When I was a student, I couldn’t ___ to buy new books.', a: ['afford'], why: '*Afford* + *to* + verb.' },
            { q: 'So I used to borrow them ___ the library.', a: ['from'], why: '*Borrow from* someone or somewhere.' },
            { q: 'I also ___ a little money by working in a café.', a: ['made', 'earned'], why: '*Make money* = earn it.' },
            { q: 'I spent most of it ___ train tickets home.', a: ['on'], why: '*Spend money on*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 6** some gaps need the **preposition** that goes with a verb: *spend **on***, *borrow **from***, *save **for***. Learn verbs with their prepositions, and these gaps become easy points.' },
        ],
        [
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'Could you lend me twenty euros?' },
            { a: 'I spend too much money on clothes.' },
            { a: 'We can’t afford to go on holiday this year.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'I’d like to return this',
      about: 'Complain and return things politely in a shop and in an email.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'When something you bought is wrong, you can **return** it (take it back to the shop), **exchange** it (change it for another one) or ask for a **refund** (your money back). Usually you need the **receipt**, the paper that shows you paid.\n\nIn English, complaints are usually **polite and indirect**, even when the customer is angry. Instead of *Give me my money back!*, people say ***I’d like*** *a refund, please* or ***Could*** *I exchange this?* This is not weakness: polite complaints usually work better.\n\nA good spoken complaint has three steps: say **what the problem is**, say **what you want**, and **thank** the person.' },
          { t: 'table', caption: 'Useful phrases in a shop', explain: ['head', 'col1'], head: ['You say', 'When'], rows: [
            ['I’d like to return this, please.', 'you want to take it back'],
            ['There’s a problem with this jacket. The zip is broken.', 'you explain the problem'],
            ['Could I exchange it for a smaller size?', 'you want a different one'],
            ['I’d like a refund, please.', 'you want your money back'],
            ['Here’s my receipt.', 'you show you paid'],
            ['I’m afraid that’s not good enough.', 'you are not happy with the answer'],
          ] },
          { t: 'tip', art: 'owl', md: '**I’m afraid…** is a polite way to give bad news or disagree: *I’m afraid it doesn’t work.* Shop assistants use it too: *I’m afraid we can’t give refunds without a receipt.* It does not mean you are scared!' },
        ],
        [
          { t: 'dialogue', title: 'At the customer service desk', lines: [
            { who: 'Customer', s: 'Hello. I’d like to return these headphones, please.' },
            { who: 'Assistant', s: 'Of course. What’s the problem with them?' },
            { who: 'Customer', s: 'The sound only comes out of one side. I bought them last Tuesday.' },
            { who: 'Assistant', s: 'I’m sorry about that. Have you got the receipt?' },
            { who: 'Customer', s: 'Yes, here it is. Could I have a refund, or exchange them for the same model?' },
            { who: 'Assistant', s: 'I’m afraid we haven’t got that model in stock, so I’ll give you a full refund.' },
            { who: 'Customer', s: 'That’s great. Thank you very much.' },
          ] },
          { t: 'text', md: 'When you complain **by email**, use a more formal style. A good complaint email has a clear structure:\n\nStart with **Dear Sir or Madam** (if you don’t know the name) or **Dear Ms Walker**.\n\nSay **why you are writing**: *I am writing to complain about…*\n\nGive the **details**: what you bought, when, and what is wrong.\n\nSay **what you want**: *I would like a full refund.*\n\nEnd politely: *I look forward to hearing from you.* *Yours faithfully* (no name at the start) or *Yours sincerely* (with a name).' },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I want that you give me my money.', 'I’d like a refund, please.', 'Polite and simple: *I’d like…*'],
            ['I bought this jacket and it is broken the zip.', 'I bought this jacket, and the zip is broken.', 'Keep normal word order: subject + verb.'],
            ['I am writing for complain.', 'I am writing to complain.', '*To* + verb for a reason.'],
            ['I look forward to hear from you.', 'I look forward to hearing from you.', 'After *look forward to*: *-ing*.'],
          ] },
          { t: 'reading', title: 'An email of complaint', md: 'Dear Sir or Madam,\n\nI am writing to complain about a coffee machine which I bought from your online shop on 3 May (order number 4471).\n\nWhen it arrived, the box was damaged, and the machine does not heat the water properly. I have tried it several times, following the instructions carefully, but the coffee is always cold.\n\nI would like you to exchange the machine for a new one. If this is not possible, I would like a full refund.\n\nI look forward to hearing from you.\n\nYours faithfully,\nAnna Kowalski' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the email. Choose the right answer.', items: [
            { q: 'Why is Anna writing?', o: ['The machine she bought doesn’t work properly.', 'She didn’t receive her order.', 'She wants to buy another machine.'], why: '*the machine does not heat the water properly*' },
            { q: 'What does she want first?', o: ['A new machine.', 'A full refund.', 'Free coffee.'], why: '*I would like you to exchange the machine for a new one.*' },
            { q: 'Why does she end with “Yours faithfully”?', o: ['She doesn’t know the name of the person she is writing to.', 'She is very angry.', 'She knows the manager.'], why: 'After *Dear Sir or Madam*, use *Yours faithfully*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make sentences for a complaint.', items: [
            { a: 'I would like to return this jacket.', why: 'Polite request: *I would like to* + verb.' },
            { a: 'I am writing to complain about my order.', why: 'The usual first line of a complaint email.' },
            { a: 'Could I exchange it for a bigger size?', why: '*Could I* + verb for a polite request.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'build', h: 'In the format of B1 Preliminary, Writing Part 1: build sentences for your email. Two words do not belong.', items: [
            { a: 'I look forward to hearing from you.', extra: ['hear', 'for'], why: '*Look forward to* + *-ing*.' },
            { a: 'The headphones I bought last week do not work.', extra: ['which', 'did'], why: 'A simple clear sentence giving the problem.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Writing Part 1** you write an **email of about 100 words**, answering the notes on a message you receive. You must cover **all four notes**. Plan one sentence or two for each note, use a clear opening and ending, and check your verbs: the examiner wants communication, organisation and accurate language.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I would like to return this, please.' },
            { a: 'Could I exchange it for a smaller size?' },
            { a: 'I am afraid it does not work.' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'Living on a budget',
      about: 'Read about saving money and use the unit’s language to talk about your own spending.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A **budget** is a plan for how much money you will spend and save. People talk about budgets in very everyday language, which is great practice for this unit.\n\nYou **set** or **make** a budget, you **stick to** it (follow it), and you **go over** it (spend more than you planned). Things can be **good value** (worth the price), **a bargain** (much cheaper than usual) or **a rip-off** (informal: much too expensive). And when you buy something you didn’t plan to, it is an **impulse buy**.' },
          { t: 'table', caption: 'Money phrases', explain: ['head', 'col1'], head: ['Phrase', 'Meaning'], rows: [
            ['stick to a budget', 'follow the plan'],
            ['go over budget', 'spend more than planned'],
            ['a bargain', 'much cheaper than normal'],
            ['a rip-off', 'much too expensive (informal)'],
            ['good value for money', 'worth what you pay'],
            ['an impulse buy', 'something you buy without planning'],
            ['be short of money', 'not have enough money'],
          ] },
        ],
        [
          { t: 'reading', title: 'How we saved £3,000 in a year', md: 'Last January, my partner and I realised we had hardly any savings, even though we both had good jobs. So we decided to make a budget and stick to it for a whole year.\n\nFirst, we wrote down everything we spent for a month. It was a shock. We were spending plenty of money on things we didn’t need: coffees on the way to work, takeaways, and lots of impulse buys online.\n\nThe changes were small. We started cooking at home and taking lunch to work. We cancelled two streaming services we hardly ever watched. And we made a rule: if we wanted something that cost more than £50, we had to wait a week before buying it. Most of the time, after a week we didn’t want it any more!\n\nIt wasn’t always easy. A few times we went over budget, especially in December. But by the end of the year we had saved £3,000, which paid for a holiday in Portugal. Was it worth it? Definitely.' },
          { t: 'ex', kind: 'tf', h: 'Read the text. True, false, or not given?', ng: true, items: [
            { q: 'At the start, the writer and partner had a lot of savings.', a: 'f', why: '*we had hardly any savings*' },
            { q: 'They spent money on coffee on the way to work.', a: 't', why: '*coffees on the way to work*' },
            { q: 'They cancelled all their streaming services.', a: 'f', why: 'They cancelled *two*, not all.' },
            { q: 'They never went over budget.', a: 'f', why: '*A few times we went over budget*.' },
            { q: 'Their holiday in Portugal cost exactly £3,000.', a: 'ng', why: 'The text says the savings paid for it, but not the exact cost.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['That bag was a real bargain! It was so expensive.', 'That bag was a real bargain! It was so cheap.', 'A *bargain* is cheap.'],
            ['We went over the budget of us.', 'We went over our budget.', 'Simple form: *our budget*.'],
            ['I’m short in money this month.', 'I’m short of money this month.', '*Short of* money.'],
            ['I have hardly any savings, so I am rich.', 'I have hardly any savings, so I need to save.', '*Hardly any* = almost none.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of B1 Preliminary, Reading Part 2: which offer is best for each person?', items: [
            { q: 'Sam wants a cheap phone and doesn’t mind if it is not new.', o: ['Shop A: “Second-hand phones, all checked, from €60.”', 'Shop B: “The latest models, interest-free payments.”', 'Shop C: “Phone repairs while you wait.”'], why: 'Sam wants cheap and doesn’t mind used: second-hand from €60.' },
            { q: 'Lina wants the newest phone but can’t pay for it all at once.', o: ['Shop B: “The latest models, interest-free payments.”', 'Shop A: “Second-hand phones, all checked, from €60.”', 'Shop C: “Phone repairs while you wait.”'], why: 'Newest models, and she can pay in parts.' },
            { q: 'Tom’s phone screen is broken and he needs it today.', o: ['Shop C: “Phone repairs while you wait.”', 'Shop B: “The latest models, interest-free payments.”', 'Shop A: “Second-hand phones, all checked, from €60.”'], why: 'He needs a repair today: *while you wait*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In **Reading Part 2** you match **five people** to **eight short texts**. Each person has **two or three needs**. Underline all of them, and choose the text that matches **every** need, not just one. Texts that match only one need are the traps.' },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Complete the sentences with the words in the bank.', extra: ['refund', 'owe'], items: [
            { q: 'Only €5 for this coat! What a ___!', a: 'bargain', why: 'Much cheaper than normal: *a bargain*.' },
            { q: '€12 for a coffee? That’s a ___.', a: 'rip-off', why: 'Much too expensive: *a rip-off*.' },
            { q: 'If we want to save, we must stick to our ___.', a: 'budget', why: '*Stick to a budget*.' },
            { q: 'I didn’t plan to buy it. It was an impulse ___.', a: 'buy', why: '*An impulse buy*.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'We made a budget and stuck to it.' },
            { a: 'That jacket was a real bargain.' },
            { a: 'I am a bit short of money this month.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'There’s ___ coffee left. Can you buy some more?', o: ['hardly any', 'a few', 'plenty of'], why: 'Almost none, so you need more: *hardly any*.' },
      { q: 'I need ___ information about the course.', o: ['a little', 'a few', 'many'], why: '*Information* is uncountable.' },
      { q: 'Can you ___ me your bike tomorrow?', o: ['lend', 'borrow', 'afford'], why: 'The other person gives: *lend*.' },
      { q: 'Everyone ___ mistakes when they learn a language.', o: ['makes', 'does', 'has'], why: 'Fixed phrase: *make a mistake*.' },
      { q: 'I’d like to ___ these shoes for a bigger size.', o: ['exchange', 'refund', 'spend'], why: 'Change for another one: *exchange*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Make or do?', groups: ['make', 'do'], explain: ['groups'], items: [
      { s: 'a payment', g: 0, why: '*make a payment*' },
      { s: 'the washing-up', g: 1, why: 'A task: *do the washing-up*.' },
      { s: 'money', g: 0, why: '*make money* = earn it.' },
      { s: 'someone a favour', g: 1, why: 'Fixed: *do someone a favour*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'I can’t afford [buying] a car.', a: ['to buy'], why: '*Afford* + *to* + verb.' },
      { s: 'She spends all her money [for] shoes.', a: ['on'], why: '*Spend money on*.' },
      { s: 'How [many] money do you need?', a: ['much'], why: '*Money* is uncountable.' },
      { s: 'I look forward to [hear] from you.', a: ['hearing'], why: '*Look forward to* + *-ing*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write one word in each gap.', items: [
      { q: 'Don’t rush. We’ve got plenty ___ time.', a: ['of'], why: 'Always *plenty of*.' },
      { q: 'Can I borrow some money ___ you?', a: ['from'], why: '*Borrow from*.' },
      { q: 'I am writing to ___ about my order.', a: ['complain'], why: 'The usual start of a complaint email.' },
      { q: 'We went ___ budget in December.', a: ['over'], why: '*Go over budget* = spend more than planned.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the words and their meanings.', pairs: [
      ['a bargain', 'much cheaper than normal'],
      ['a refund', 'your money back'],
      ['a receipt', 'paper that shows you paid'],
      ['owe', 'need to pay someone back'],
      ['afford', 'have enough money for'],
    ] },
  ],
};
