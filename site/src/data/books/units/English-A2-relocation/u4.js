// English A2 for moving abroad, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Shopping and money',
  goal: 'Shop, pay and return things.',
  art: 'croissant',
  tags: { skills: ['speaking', 'vocabulary', 'reading'], topics: ['shopping', 'sizes', 'prices', 'paying', 'returns', 'too-adjective'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Can I try it on?',
      about: 'Ask about sizes and prices in a shop, and pay.',
      art: 'croissant',
      spreads: [
        [
          { t: 'dialogue', title: 'In a clothes shop', lines: [
            { who: 'Assistant', s: 'Hi there. Can I help you?' },
            { who: 'Joseph', s: 'Yes, please. Have you got this jacket in a medium?' },
            { who: 'Assistant', s: 'Let me check. Yes, here you are.' },
            { who: 'Joseph', s: 'Thanks. Can I try it on?' },
            { who: 'Assistant', s: 'Of course. The fitting rooms are over there.' },
            { who: 'Joseph', s: 'Hmm, it’s a bit too big. Have you got a small?' },
            { who: 'Assistant', s: 'Sorry, not in black. We’ve got a small in blue.' },
            { who: 'Joseph', s: 'OK, I’ll try the blue one. How much is it?' },
            { who: 'Assistant', s: 'It’s forty-nine ninety-nine.' },
          ] },
          { t: 'text', md: 'Clothes sizes are often *small*, *medium* and *large*, or numbers. You *try on* clothes in the *fitting room* before you buy them. Prices are often said without the word *pounds*: £49.99 is *forty-nine ninety-nine*.' },
        ],
        [
          { t: 'text', md: 'Use **too** + adjective when something is not right for you: *too big*, *too small*, *too expensive*. Use **How much is…?** for one thing and **How much are…?** for more things.' },
          { t: 'examples', items: [
            { s: 'These shoes are **too small**. Have you got a size eight?', n: '*Too small*: they are not the right size for you.' },
            { s: 'This coat is nice, but it’s **too expensive** for me.', n: '*Too expensive*: it costs more than you want to pay.' },
            { s: '**How much are** these jeans?', n: '*Jeans* is always plural: *are*. The same is true for *trousers* and *shorts*.' },
          ] },
          { t: 'table', caption: 'Paying', explain: ['head', 'col0'], head: ['You want to', 'You say'], rows: [
            ['pay with a bank card', 'Can I pay by card?'],
            ['pay with notes and coins', 'Can I pay in cash?'],
            ['pay with your phone or by tapping your card', 'Can I pay contactless?'],
            ['get the paper that shows what you bought', 'Can I have a receipt, please?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'How much ___ these trousers?', o: ['are', 'is', 'does'], why: '*Trousers* is always plural: *How much are…?*' },
            { q: 'How much ___ this bag?', o: ['is', 'are', 'do'], why: '*This bag* is one thing: *How much is…?*' },
            { q: 'Can I try it ___?', o: ['on', 'in', 'up'], why: 'You *try on* clothes to see if they are right.' },
            { q: 'Can I pay ___ cash?', o: ['in', 'by', 'with'], why: 'We say *pay in cash* and *pay by card*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with too and an adjective.', items: [
            { q: 'I can’t buy this phone. It’s ___ expensive.', a: ['too'], why: '*Too expensive*: it costs more than you want to pay.' },
            { q: 'These shoes are too ___. I need a size nine, not a size eight. (small / big)', a: ['small'], why: 'You need a bigger size, so these are *too small*.' },
            { q: 'This shirt is too ___. Have you got a small? (small / big)', a: ['big'], why: 'You want a smaller size, so this one is *too big*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the prices and how we say them.', pairs: [
            ['£4.50', 'four pounds fifty'],
            ['£12.99', 'twelve ninety-nine'],
            ['£30', 'thirty pounds'],
            ['75p', 'seventy-five pence'],
            ['£115', 'a hundred and fifteen pounds'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Have you got this in a large?', why: '*Have you got* + *this* + *in* + the size.' },
            { a: 'Can I have a receipt?', why: '*Can I have* + the thing you want.' },
            { a: 'Where are the fitting rooms?', why: '*Where* + *are* + *the fitting rooms*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'I’d like to return this',
      about: 'Take something back to a shop and ask for a refund or an exchange.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Sometimes you buy something and it is not right. You can take it back to the shop. Most shops in the UK have a **returns policy**: rules about when you can bring things back.' },
          { t: 'table', caption: 'Returning things', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['a receipt', 'the paper that shows what you bought, when and for how much'],
            ['a refund', 'the shop gives you your money back'],
            ['an exchange', 'you get a different size, colour or thing for free'],
            ['faulty', 'it does not work or it is broken'],
            ['a gift card', 'a card with money on it that you can only spend in that shop'],
          ] },
          { t: 'tip', art: 'owl', md: 'Keep your receipts, or a photo of them. Many shops give a refund only with a receipt, and often only for a few weeks after you buy something.' },
        ],
        [
          { t: 'dialogue', title: 'At the customer service desk', lines: [
            { who: 'Ana', s: 'Hello. I’d like to return this kettle, please. It’s faulty.' },
            { who: 'Assistant', s: 'Oh, I’m sorry. What’s the problem?' },
            { who: 'Ana', s: 'It doesn’t switch on. I bought it last week.' },
            { who: 'Assistant', s: 'Have you got the receipt?' },
            { who: 'Ana', s: 'Yes, here it is.' },
            { who: 'Assistant', s: 'Thanks. Would you like a refund or an exchange?' },
            { who: 'Ana', s: 'A refund, please. I paid by card.' },
            { who: 'Assistant', s: 'OK. Can I have your card, please? The money will go back on it in a few days.' },
          ] },
          { t: 'text', md: 'Say what you want first: *I’d like to return this…* Then say what the problem is: *It’s faulty.*, *It doesn’t work.*, *It’s too small.* Use the past simple for when you bought it: *I **bought** it on Saturday.*' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about Ana at the customer service desk. True or false?', items: [
            { q: 'Ana wants to return a kettle.', a: 't', why: '*I’d like to return this kettle.*' },
            { q: 'The kettle is too big.', a: 'f', why: 'It is *faulty*: *It doesn’t switch on.*' },
            { q: 'Ana has got the receipt.', a: 't', why: '*Yes, here it is.*' },
            { q: 'Ana wants a new kettle.', a: 'f', why: 'She wants *a refund*: her money back.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem and what you say.', pairs: [
            ['The shoes are a size too big.', 'Can I exchange them for a smaller size?'],
            ['The lamp doesn’t work.', 'I’d like a refund. It’s faulty.'],
            ['You can’t find the receipt.', 'I haven’t got the receipt. Can I still return it?'],
            ['You don’t like the colour.', 'Have you got it in another colour?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'I ___ this shirt on Monday. (buy, past)', a: ['bought'], why: 'The past of *buy* is *bought*.' },
            { q: 'I’d like to ___ these jeans, please. They’re too small.', a: ['return', 'exchange', 'change', 'take back'], why: 'You take them back: *return* them, or *exchange* them for a different size.' },
            { q: 'It doesn’t work. Can I have a ___, please? I want my money back.', a: ['refund'], why: 'Money back is a *refund*.' },
            { q: 'Have you got the ___? It shows when you bought it.', a: ['receipt'], why: 'The *receipt* shows what you bought and when.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'I ___ it last week, but it doesn’t work.', o: ['bought', 'buy', 'buyed'], why: '*Last week* is in the past. The past of *buy* is *bought*, not *buyed*.' },
            { q: 'Would you like a refund ___ an exchange?', o: ['or', 'and', 'but'], why: 'You choose one of the two: *or*.' },
            { q: 'The radio is broken. It’s ___.', o: ['faulty', 'expensive', 'medium'], why: '*Faulty* means it does not work or it is broken.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Keep your receipt',
      about: 'Read a receipt and a shop notice about returns.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Receipt', md: '**HOME AND GARDEN STORE**\n\n12 High Street, Norwich\n\nDate: 14/09 Time: 16:42\n\nTowels x 2 £16.00\n\nTable lamp £24.99\n\nKettle £19.50\n\nTOTAL £60.49\n\nPaid by card (contactless)\n\nKeep this receipt for returns.' },
          { t: 'reading', title: 'Returns', md: 'You can return most things within 28 days. Please bring your receipt. Things must be unused and in their box.\n\nWe give refunds to the card you paid with. If you paid in cash, we give you cash back. Without a receipt, we can give you an exchange or a gift card, but not a refund.\n\nSale items: exchange only.\n\nWe cannot take back pillows or bedding that you have opened.\n\nIs something faulty? Please speak to a member of staff at the customer service desk. This does not change your legal rights.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the receipt and the notice. True, false or not given?', items: [
            { q: 'The customer paid by card.', a: 't', why: 'The receipt says *Paid by card (contactless)*.' },
            { q: 'The customer bought one towel.', a: 'f', why: '*Towels x 2*: two towels.' },
            { q: 'You can return most things for 28 days.', a: 't', why: '*You can return most things within 28 days.*' },
            { q: 'Without a receipt, you can get your money back.', a: 'f', why: '*Without a receipt, we can give you an exchange or a gift card, but not a refund.*' },
            { q: 'The shop is open on Sundays.', a: 'ng', why: 'The receipt and the notice do not give opening times.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'How much was the lamp?', o: ['£24.99', '£19.50', '£60.49'], why: 'The receipt says *Table lamp £24.99*.' },
            { q: 'You bought a shirt in the sale. It is too small. What can you get?', o: ['An exchange.', 'A refund.', 'Cash back.'], why: '*Sale items: exchange only.*' },
            { q: 'You paid in cash and have the receipt. How do you get your refund?', o: ['In cash.', 'On a gift card.', 'On your bank card.'], why: '*If you paid in cash, we give you cash back.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words about money back.', items: [
            { s: 'We give [refunds] to the card you paid with.', why: 'A *refund* is your money back.' },
            { s: 'Bring your receipt and we will give you your [money] [back].', why: '*Money back* is the same as a refund.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'How much ___ these shoes?', o: ['are', 'is', 'do'], why: '*Shoes* is plural: *are*.' },
      { q: 'This jacket is ___ small. I need a medium.', o: ['too', 'very much', 'a lot'], why: '*Too* + adjective: not the right size.' },
      { q: 'I’d like my money back. Can I have a ___?', o: ['refund', 'receipt', 'size'], why: 'Money back is a *refund*.' },
      { q: 'I ___ this phone on Friday, and now it doesn’t work.', o: ['bought', 'buy', 'buyed'], why: 'The past of *buy* is *bought*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Can I try it ___? Where are the fitting rooms?', a: ['on'], why: 'You *try on* clothes.' },
      { q: 'Can I pay ___ card?', a: ['by'], why: '*Pay by card*.' },
      { q: 'The toaster doesn’t work. It’s ___.', a: ['faulty', 'broken'], why: '*Faulty* or *broken*: it does not work.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the questions and the answers.', pairs: [
      ['Have you got the receipt?', 'Yes, here it is.'],
      ['Refund or exchange?', 'A refund, please.'],
      ['What size are you?', 'I’m a medium.'],
      ['How much is it?', 'It’s twenty-five pounds.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'I’d like to return this jacket.', why: '*I’d like to* + verb + the thing.' },
      { a: 'Have you got this in blue?', why: '*Have you got* + *this* + *in* + the colour.' },
    ] },
  ],
};
