// English B1 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Renting a flat',
  goal: 'Find a flat, ask the right questions and understand the basics of a tenancy.',
  art: 'suitcase',
  tags: { skills: ['reading', 'writing', 'speaking', 'vocabulary'], topics: ['housing', 'indirect-questions', 'formal-email', 'tenancy'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading flat adverts',
      about: 'The words and abbreviations in flat adverts in the UK.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In the UK, flats are advertised online by landlords and by **letting agents**, companies that rent out flats for landlords. The rent is usually given for one month: *pcm*, per calendar month. Some adverts give it for one week: *pw*.' },
          { t: 'table', caption: 'Words and abbreviations in flat adverts', explain: ['head', 'col2'], quiz: true, head: ['Short', 'Long', 'Meaning'], rows: [
            ['pcm', 'per calendar month', 'the rent for one month'],
            ['pw', 'per week', 'the rent for one week'],
            ['2 bed', 'two bedrooms', 'a flat with two bedrooms'],
            ['furn.', 'furnished', 'with furniture, for example a bed, a sofa and a table'],
            ['unfurn.', 'unfurnished', 'without furniture'],
            ['inc. bills', 'including bills', 'some bills are in the rent: check which ones'],
            ['excl. bills', 'excluding bills', 'you pay the bills on top of the rent'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **deposit** is money you pay at the start. You get it back at the end if there is no damage. In England, the deposit for most flats is no more than five weeks’ rent. Tenants also usually pay *council tax*, a local tax for services like bin collection.' },
        ],
        [
          { t: 'reading', title: 'Flat advert', md: '**Bright 2 bed flat, Leeds city centre, £950 pcm**\n\nSecond-floor flat with a lift, close to shops and the train station. Two double bedrooms, a modern kitchen and a bathroom with a shower. Unfurnished, but the fridge and the washing machine stay. Excl. bills and council tax. Deposit: five weeks’ rent. Available from 1 March. Pets: please ask. Viewings on weekdays and Saturday mornings: contact the letting agent.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the advert. True, false or not given?', items: [
            { q: 'The flat has two bedrooms.', a: 't', why: '*2 bed* and *two double bedrooms*.' },
            { q: 'The fridge is included.', a: 't', why: 'The flat is unfurnished, but *the fridge and the washing machine stay*.' },
            { q: 'The rent includes gas and electricity.', a: 'f', why: '*Excl. bills*: you pay the bills on top of the rent.' },
            { q: 'You can never keep a pet in this flat.', a: 'f', why: '*Pets: please ask*: it may be possible.' },
            { q: 'The flat has a garden.', a: 'ng', why: 'The advert does not say anything about a garden.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['furnished', 'with furniture'],
            ['tenant', 'the person who rents the flat'],
            ['deposit', 'money you get back at the end'],
            ['bills', 'gas, electricity and water'],
            ['letting agent', 'a company that rents out flats for landlords'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What does the advert mean?', items: [
            { q: '“2 bed, furn., inc. bills” means the flat ___.', o: ['has two bedrooms and furniture, and some bills are in the rent', 'has two beds but no furniture', 'has two bedrooms, and you pay all the bills on top'], why: '*furn.* = furnished, *inc.* = including.' },
            { q: 'The rent is £800 pcm, excl. bills. Every month you pay ___.', o: ['£800 plus your gas, electricity and water', '£800 and nothing more for energy', '£800 every week'], why: '*pcm* = per month; *excl. bills* = the bills are extra.' },
            { q: 'You want to know when you can move in. You look for the word ___.', o: ['available', 'deposit', 'furnished'], why: '*Available from 1 March*: you can move in from that date.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Viewing a flat',
      about: 'Ask the right questions at a viewing and write a polite email to a letting agent.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'At a viewing, ask about money, the building and the rules. **Indirect questions** sound more polite: *Could you tell me…?* or *Do you know…?* After them, the word order is like a statement: *Could you tell me how much the deposit **is**?*, not *how much is the deposit*.' },
          { t: 'examples', items: [
            { s: 'Could you tell me **when the flat is** available?', n: 'Indirect question: the subject *the flat* comes before the verb *is*.' },
            { s: 'Do you know **if the bills are** included?', n: 'A yes/no question becomes *if* (or *whether*) + subject + verb.' },
            { s: 'Is it OK **if I** put pictures on the walls?', n: 'A polite way to ask for permission.' },
            { s: 'What are the neighbours like?', n: 'A direct question is fine too. It is just less formal.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build polite questions for the viewing.', items: [
            { a: 'Could you tell me how much the rent is?', why: 'Indirect question: *the rent is* at the end.' },
            { a: 'Do you know if the flat has parking?', why: '*Do you know if* + subject + verb.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'At the viewing', lines: [
            { who: 'Liam', s: 'So this is the living room. As you can see, it gets a lot of light.' },
            { who: 'Sofia', s: 'It’s lovely. Could you tell me how much the bills usually are?' },
            { who: 'Liam', s: 'The last tenant paid about a hundred and twenty pounds a month for gas and electricity.' },
            { who: 'Sofia', s: 'And do you know if the heating is gas or electric?' },
            { who: 'Liam', s: 'It’s gas. The boiler is new: it was put in last year.' },
            { who: 'Sofia', s: 'I’ve got a bike. Is there anywhere to keep it?' },
            { who: 'Liam', s: 'Yes, there’s a bike store behind the building.' },
            { who: 'Sofia', s: 'Great. What happens next if I want the flat?' },
            { who: 'Liam', s: 'You fill in an application form, and we do some checks, for example on your income and your right to rent.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In England, landlords and letting agents must check that you have the *right to rent* before the tenancy starts. Have your passport or your visa details ready.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the viewing. True or false?', items: [
            { q: 'The living room is quite dark.', a: 'f', why: '*It gets a lot of light.*' },
            { q: 'The heating is gas.', a: 't', why: '*It’s gas.*' },
            { q: 'The boiler is old.', a: 'f', why: '*The boiler is new: it was put in last year.*' },
            { q: 'There is a place to keep bikes.', a: 't', why: '*There’s a bike store behind the building.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the questions for the viewing.', items: [
            { q: 'Could you tell me how much the deposit ___? (be)', a: ['is'], why: 'Indirect question: *the deposit* + *is*, like a statement.' },
            { q: 'Do you know ___ pets are allowed?', a: ['if', 'whether'], why: 'A yes/no question inside another question: *if* or *whether*.' },
            { q: 'Could you tell me when I ___ move in? (can)', a: ['can'], why: 'Statement order: *I can*, not *can I*.' },
            { q: 'Do you know how often the bins ___ collected? (be)', a: ['are'], why: '*the bins* is plural: *are*. The verb comes after the subject.' },
          ] },
        ],
        [
          { t: 'text', md: 'Before a viewing you often write to the agent. Keep the email short: say which flat, who you are and when you are free.' },
          { t: 'reading', title: 'Subject: 2 bed flat, Park Road', md: 'Dear Ms Hughes,\n\nI saw your advert for the two-bedroom flat on Park Road, and I am very interested in it. I have just moved to Leeds for work, and the flat would be for me and my partner. We are both non-smokers and we do not have any pets.\n\nWould it be possible to arrange a viewing this week? I am free on Wednesday after 5 pm or on Saturday morning. I would also like to know whether the rent includes water.\n\nI look forward to hearing from you.\n\nKind regards,\nSofia Márquez' },
          { t: 'ex', kind: 'choice', h: 'Which line fits an email to a letting agent?', items: [
            { q: '', o: ['Would it be possible to arrange a viewing on Friday?', 'I want to see the flat Friday.', 'Show me the flat on Friday.'], why: '*Would it be possible to…?* is polite and correct.' },
            { q: '', o: ['I would also like to know whether the flat has a parking space.', 'I would also like to know does the flat have a parking space.', 'Tell me if there is parking or not.'], why: 'After *I would like to know whether*, use statement order: *the flat has*.' },
            { q: '', o: ['I look forward to hearing from you.', 'Write back fast.', 'I look forward to hear from you.'], why: '*look forward to* + *-ing*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Your tenancy in plain English',
      about: 'Read a short summary of a tenancy agreement and understand the main points.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Before you move in, you sign a **tenancy agreement**, the contract between you and the landlord. It is long, so some agents also send a short summary. These words come up again and again.' },
          { t: 'table', caption: 'Tenancy words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['tenancy agreement', 'the contract between you and the landlord'],
            ['due', 'when a payment must be made'],
            ['inventory', 'a list of everything in the flat and its condition'],
            ['repairs', 'work to fix things that are broken'],
            ['notice', 'a message that says you want to leave, and the time before you go'],
          ] },
        ],
        [
          { t: 'reading', title: 'Your tenancy: the main points', md: 'This summary explains the most important parts of your tenancy agreement for Flat 4, 18 Park Road. Please also read the full agreement, because only the full agreement is legally binding.\n\n**Rent.** Your rent is £950 per month. It is due on the 1st of each month. If you are going to be late with a payment, please tell us as soon as possible.\n\n**Deposit.** Your deposit of £1,096 is protected in a government-approved scheme. At the end of the tenancy, you will get it back if there is no damage and all the rent has been paid.\n\n**Bills.** Water is included in the rent. You pay for gas, electricity, internet and council tax yourself.\n\n**Moving in.** On the day you move in, we will go through the inventory with you. Take photos of anything that is damaged or dirty and send them to us within seven days.\n\n**Repairs.** The landlord is responsible for repairs to the heating, the hot water and the building. Please report any problem quickly. You are responsible for small jobs, such as changing light bulbs.\n\n**Rules.** Smoking is not allowed in the flat. You may keep a pet only if you ask us in writing first.\n\n**Leaving.** If you want to leave, you must give us two months’ notice in writing.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the summary. True, false or not given?', items: [
            { q: 'The tenant pays the rent every week.', a: 'f', why: '*£950 per month*, due on the 1st of each month.' },
            { q: 'Water is included in the rent.', a: 't', why: '*Water is included in the rent.*' },
            { q: 'The landlord keeps the deposit in his own bank account.', a: 'f', why: 'It is *protected in a government-approved scheme*.' },
            { q: 'The tenant should send photos of any damage in the first week.', a: 't', why: '*Send them to us within seven days.*' },
            { q: 'The landlord visits the flat every three months.', a: 'ng', why: 'The summary does not say anything about visits.' },
            { q: 'The tenant can leave with two weeks’ notice.', a: 'f', why: '*Two months’ notice in writing.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What should the tenant do?', items: [
            { q: 'The boiler stops working in January. The tenant should ___.', o: ['report it to the agent quickly', 'repair it himself', 'wait until the end of the tenancy'], why: 'The landlord is responsible for the heating: *please report any problem quickly*.' },
            { q: 'A light bulb in the kitchen stops working. The tenant should ___.', o: ['change it himself', 'ask the landlord to change it', 'stop paying the rent'], why: 'Small jobs, *such as changing light bulbs*, are the tenant’s job.' },
            { q: 'The tenant would like a cat. He should ___.', o: ['ask the agent in writing first', 'just get one', 'tell the neighbours'], why: '*Only if you ask us in writing first.*' },
            { q: 'On moving day, the tenant finds a broken chair. He should ___.', o: ['take a photo and send it to the agent', 'throw the chair away', 'say nothing'], why: 'Photos of damage go to the agent within seven days, so you do not pay for it later.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the three words for money the tenant pays.', items: [
            { s: 'Every month I pay the [rent] and the [bills], and at the start I paid a [deposit].', why: 'Rent and bills every month; the deposit once, at the start.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'In an advert, *pcm* means ___.', o: ['per calendar month', 'per complete month', 'pay cash monthly'], why: 'The rent for one month.' },
      { q: 'An *unfurn.* flat comes ___.', o: ['without furniture', 'with furniture', 'without a kitchen'], why: '*unfurn.* = unfurnished.' },
      { q: 'Could you tell me where ___?', o: ['the bike store is', 'is the bike store', 'the bike store'], why: 'Indirect question: subject + verb, *the bike store is*.' },
      { q: 'The list of everything in the flat and its condition is the ___.', o: ['inventory', 'deposit', 'tenancy'], why: 'You check the *inventory* on the day you move in.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Do you know ___ the rent includes water?', a: ['if', 'whether'], why: 'A yes/no question inside a question: *if* or *whether*.' },
      { q: 'You pay a ___ at the start, and you get it back if there is no damage.', a: ['deposit'], why: 'The *deposit* comes back at the end.' },
      { q: 'Would it be possible to ___ a viewing on Saturday?', a: ['arrange', 'book', 'have', 'organise', 'organize'], why: '*arrange* or *book a viewing*.' },
      { q: 'If you want to leave, you must give two months’ ___ in writing.', a: ['notice'], why: '*give notice*: say that you are going to leave.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Could you tell me when the flat is available?', why: 'Indirect question: *the flat is*.' },
      { a: 'I look forward to hearing from you.', why: '*look forward to* + *-ing*: a polite last line.' },
    ] },
  ],
};
