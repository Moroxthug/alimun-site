// English B2 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Money, tax and pensions',
  goal: 'Understand payslips, taxes and pensions in general terms.',
  art: 'cat',
  tags: { skills: ['reading', 'vocabulary', 'grammar', 'speaking'], topics: ['payslip', 'tax', 'pensions', 'savings', 'insurance', 'comparatives'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Reading a payslip',
      about: 'Understand the words on a UK payslip and what is taken from your pay.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Most employees in the UK pay **Income Tax** and **National Insurance** through **PAYE** (Pay As You Earn). The employer takes the money from your pay before you receive it and sends it to **HMRC**, the government department that collects tax. Your payslip shows what you earned, what was taken off and what you actually receive.' },
          { t: 'table', caption: 'Words on a payslip', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['gross pay', 'your pay before anything is taken off'],
            ['net pay', 'the money you actually receive, also called take-home pay'],
            ['deductions', 'amounts taken from your pay, such as tax and pension contributions'],
            ['National Insurance', 'a contribution that helps to pay for the State Pension and some benefits'],
            ['tax code', 'letters and numbers that tell your employer how much of your pay is tax-free'],
            ['personal allowance', 'the amount you can earn in a year before you pay Income Tax'],
            ['P60', 'a yearly summary of your pay and the tax you paid'],
          ] },
        ],
        [
          { t: 'table', caption: 'An example payslip', head: ['October', 'Amount'], rows: [
            ['Gross pay', '£2,600.00'],
            ['Income Tax', '£310.20'],
            ['National Insurance', '£122.40'],
            ['Pension contribution', '£104.00'],
            ['Net pay', '£2,063.40'],
          ] },
          { t: 'text', md: 'Tax and other amounts **are deducted from** your gross pay. Other useful verbs are *take off* (*£310 was taken off for tax*), *pay into* (*I pay into a pension*) and *be paid* (*We are paid monthly*).' },
          { t: 'tip', art: 'owl', md: 'If you start a job before your employer has your tax details, you may get an **emergency tax code** for a while and pay the wrong amount of tax. This is usually corrected later, but it is worth checking your tax code with HMRC if it looks wrong.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the example payslip.', items: [
            { q: 'How much does the employee actually receive in October?', o: ['£2,063.40', '£2,600.00', '£536.60'], why: 'The *net pay* is what you receive.' },
            { q: 'What is the total of the deductions?', o: ['£536.60', '£310.20', '£2,063.40'], why: 'Tax, National Insurance and pension together: £310.20 + £122.40 + £104.00.' },
            { q: 'Which amount goes into the employee’s pension?', o: ['£104.00', '£122.40', '£310.20'], why: 'The line *Pension contribution*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['gross pay', 'pay before deductions'],
            ['net pay', 'take-home pay'],
            ['tax code', 'tells your employer how much is tax-free'],
            ['P60', 'a summary of the tax year'],
            ['HMRC', 'the government department that collects tax'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'My ___ salary is £32,000 a year, but I take home much less.', a: ['gross'], why: '*Gross*: before deductions.' },
            { q: 'Tax is deducted ___ your pay before you receive it.', a: ['from'], why: '*Deduct something from something*.' },
            { q: 'At the end of the tax year, your employer gives you a ___, which summarises your pay and tax.', a: ['P60'], why: 'The *P60* is the yearly summary.' },
            { q: 'If your tax ___ is wrong, you may pay too much tax.', a: ['code'], why: 'The *tax code* tells your employer how much of your pay is tax-free.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'What does my tax code mean?', why: 'Direct question: *What does* + subject + verb.' },
            { a: 'How much was deducted for National Insurance?', why: 'Passive question: *How much was* + past participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Savings, pensions and insurance',
      about: 'Talk about saving and insurance and compare options precisely.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In the UK, employers usually have to enrol eligible workers in a **workplace pension** automatically. Both the employee and the employer pay in, and the employee can choose to **opt out**. There is also a **State Pension**, which depends mainly on how many years of National Insurance contributions you have.\n\nFor savings, banks offer **easy-access accounts**, where you can take money out at any time, and **fixed-rate accounts**, which usually pay more interest but keep your money for a fixed period.' },
          { t: 'table', caption: 'Words for savings and insurance', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['interest rate', 'the percentage a bank pays you, or that you pay on a loan'],
            ['opt out', 'choose not to take part'],
            ['contents insurance', 'insurance for the things inside your home'],
            ['premium', 'the amount you pay for insurance'],
            ['excess', 'the part of a claim that you pay yourself'],
            ['make a claim', 'ask the insurer for money after a loss or damage'],
          ] },
        ],
        [
          { t: 'text', md: 'To compare options precisely, show how big the difference is. Use *much*, *far* or *a lot* for a big difference and *slightly* or *a bit* for a small one. *Not nearly as … as* shows a big difference. *The more…, the more…* shows that two things change together. *Whereas* contrasts two facts.' },
          { t: 'examples', items: [
            { s: 'The fixed-rate account pays **slightly more** interest than the easy-access one.', n: 'A small difference.' },
            { s: 'This policy is **far cheaper**, but the excess is **much higher**.', n: '*Far* and *much* + comparative: a big difference.' },
            { s: 'The easy-access account is**n’t nearly as** generous **as** the fixed-rate one.', n: '*Not nearly as … as*: a big difference.' },
            { s: '**The longer** you save, **the more** interest you earn.', n: '*The* + comparative, *the* + comparative: two things change together.' },
            { s: 'You can take money out of this account at any time, **whereas** the other one keeps it for two years.', n: '*Whereas* contrasts two facts in one sentence.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Comparing quotes', lines: [
            { who: 'Aisha', s: 'I’ve found two quotes for contents insurance. Have a look.' },
            { who: 'Joon', s: 'The first one is far cheaper. What’s the catch?' },
            { who: 'Aisha', s: 'The excess is much higher. We’d have to pay the first three hundred pounds of any claim ourselves.' },
            { who: 'Joon', s: 'And the second one?' },
            { who: 'Aisha', s: 'Only fifty. And it covers our laptops outside the flat, whereas the first one doesn’t.' },
            { who: 'Joon', s: 'Then the first one isn’t nearly as good a deal as it looks. The more we work in cafés, the more that matters.' },
            { who: 'Aisha', s: 'Exactly. I think the second one is worth the extra few pounds a month.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Think about the conversation.', items: [
            { q: 'Why is the first policy cheaper?', o: ['It has a much higher excess and covers less.', 'It covers more things.', 'It has no excess at all.'], why: 'Its excess is £300, not £50, and it does not cover laptops outside the flat.' },
            { q: 'What does Joon mean by “What’s the catch?”', o: ['What is the hidden disadvantage?', 'What can we catch?', 'When do we have to pay?'], why: 'A *catch* is a hidden problem in something that looks good.' },
            { q: 'Which policy do they prefer?', o: ['the second one', 'the first one', 'neither of them'], why: '*The second one is worth the extra few pounds a month.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with one word.', items: [
            { q: 'This account pays ___ more interest than mine, but the difference is tiny.', a: ['slightly', 'marginally'], why: 'A small difference: *slightly more*.' },
            { q: 'This insurance is ___ cheaper than the other one: it costs half as much.', a: ['much', 'far', 'considerably', 'significantly'], why: 'A big difference: *much* or *far* + comparative.' },
            { q: 'The ___ you pay into your pension, the more you will have when you retire.', a: ['more'], why: '*The more…, the more…*: two things change together.' },
            { q: 'The cheap policy isn’t nearly ___ good as the expensive one.', a: ['as'], why: '*Not nearly as … as*.' },
            { q: 'I prefer easy access, ___ my partner prefers a higher interest rate.', a: ['whereas', 'while', 'whilst', 'but'], why: '*Whereas* (or *while*) contrasts two facts.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Can I opt out of the pension?', why: '*Opt out of* + noun.' },
            { a: 'Is it worth paying a bit more?', why: '*It is worth* + *-ing*, as a question.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Money questions online',
      about: 'Read a forum thread where newcomers ask about tax, pensions and insurance.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Newcomers’ forum: money questions', md: '**Mateus_in_Leeds:** I started my first job here two months ago, and my payslip says my tax code is “BR”. A colleague said that might mean I’m paying too much tax. Should I be worried?\n\n**Ifeoma_K:** Not worried, but I’d definitely look into it. BR usually means all your pay is taxed at the basic rate, with no tax-free allowance. It often happens when you start a new job and your employer doesn’t have all your details yet. You can check and update your details with HMRC online. If you’ve overpaid, the money is normally paid back to you.\n\n**Mateus_in_Leeds:** Thanks, that makes sense. I had no idea.\n\n**Svetlana.R:** While we’re on the subject, can anyone explain the workplace pension? Quite a lot of my salary disappears into it every month. I’m not sure I’ll stay in the UK, so is it worth it?\n\n**Ifeoma_K:** That’s a big question, and it depends on your situation. The main thing to know is that your employer also pays in, so if you opt out, you lose that money too. Leaving the country doesn’t mean you lose your pension: it stays in your name. But it’s worth getting proper advice before you decide.\n\n**Dev_P:** Agree with Ifeoma. I nearly opted out in my first year, and I’m really glad I didn’t.\n\n**Svetlana.R:** OK, I’ll leave it for now and find out more.\n\n**Mateus_in_Leeds:** One more thing: is contents insurance worth it if you rent?\n\n**Dev_P:** Your landlord’s insurance usually covers the building, not your belongings. If someone broke in tomorrow, would you be able to replace your laptop and phone? If not, I’d get a quote. It’s often cheaper than people expect.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Mateus has been working in the UK for about two months.', a: 't', why: '*I started my first job here two months ago.*' },
            { q: 'Ifeoma says a BR code always means the employer has made a mistake.', a: 'f', why: 'It *often happens* when the employer does not have all your details yet.' },
            { q: 'If Mateus has paid too much tax, he will normally get it back.', a: 't', why: '*If you’ve overpaid, the money is normally paid back to you.*' },
            { q: 'Svetlana is certain that she will stay in the UK.', a: 'f', why: '*I’m not sure I’ll stay in the UK.*' },
            { q: 'Dev opted out of his workplace pension in his first year.', a: 'f', why: 'He *nearly* opted out, and he is glad he *didn’t*.' },
            { q: 'Mateus’s laptop was stolen last month.', a: 'ng', why: 'Dev only imagines a break-in: *If someone broke in tomorrow…*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the thread.', items: [
            { q: 'According to Ifeoma, what is the main disadvantage of opting out?', o: ['You also lose the money your employer pays in.', 'You have to leave the UK.', 'You pay more Income Tax.'], why: '*Your employer also pays in, so if you opt out, you lose that money too.*' },
            { q: '“I’d definitely look into it” means:', o: ['I would find out more about it.', 'I would look at it once and then forget it.', 'I would not worry about it at all.'], why: '*Look into something* means investigate it.' },
            { q: 'What does Dev suggest about contents insurance?', o: ['Get a quote, because it may cost less than you think.', 'Don’t bother, because the landlord’s insurance covers everything.', 'Wait until something is stolen.'], why: '*I’d get a quote. It’s often cheaper than people expect.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the phrase that introduces a related new topic.', items: [
            { s: '[While we’re on the subject], can anyone explain the workplace pension?', why: '*While we’re on the subject* connects a new question to the current topic.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Your pay after tax and other deductions is your ___ pay.', o: ['net', 'gross', 'total'], why: '*Net pay* is take-home pay.' },
      { q: 'In the UK, most employees pay tax through ___.', o: ['PAYE', 'P60', 'the excess'], why: '*PAYE*: the employer takes tax from your pay.' },
      { q: 'The amount you pay yourself when you make an insurance claim is the ___.', o: ['excess', 'premium', 'interest'], why: '*Excess*: the part of the claim you pay.' },
      { q: 'This account is ___ better than that one: it pays twice as much interest.', o: ['far', 'slightly', 'very'], why: 'A big difference: *far* + comparative. *Very* cannot go before a comparative.' },
      { q: 'The earlier you start saving, ___ you will have.', o: ['the more', 'more', 'the most'], why: '*The* + comparative, *the* + comparative.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'National Insurance is ___ from your pay every month.', a: ['deducted', 'taken'], why: '*Be deducted from*.' },
      { q: 'You can choose to opt ___ of the workplace pension.', a: ['out'], why: '*Opt out of*.' },
      { q: 'The basic policy isn’t nearly as good ___ the premium one.', a: ['as'], why: '*Not nearly as … as*.' },
      { q: 'I like the flexibility of easy access, ___ my brother prefers a fixed rate.', a: ['whereas', 'while', 'whilst', 'but'], why: '*Whereas* contrasts two facts.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['premium', 'what you pay for insurance'],
      ['personal allowance', 'income you can earn before paying tax'],
      ['interest rate', 'the percentage a bank pays you'],
      ['deductions', 'amounts taken from your pay'],
    ] },
  ],
};
