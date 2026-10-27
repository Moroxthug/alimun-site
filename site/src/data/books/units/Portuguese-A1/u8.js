// Portuguese A1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Shopping and plans',
  goal: 'Buy clothes, compare things and talk about your plans.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['clothes', 'colours', 'demonstratives', 'shopping', 'object pronouns', 'ir + infinitive', 'plans', 'time words'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Roupa e cores',
      about: 'Name clothes and colours, and point to things with este, esse and aquele.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To talk about clothes, learn the main words: **a camisa** (shirt), **as calças** (trousers), **o casaco** (coat, jacket), **o vestido** (dress), **a saia** (skirt), **os sapatos** (shoes). Colours are adjectives, so they agree with the noun: *um casaco preto, uma saia preta, sapatos pretos, calças pretas.* Colours go **after** the noun.' },
          { t: 'table', caption: 'Clothes', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['a camisa', 'shirt'],
            ['as calças', 'trousers'],
            ['o casaco', 'coat, jacket'],
            ['o vestido', 'dress'],
            ['a saia', 'skirt'],
            ['os sapatos', 'shoes'],
            ['a camisola', 'jumper, sweater'],
            ['o chapéu', 'hat'],
            ['as meias', 'socks'],
          ] },
          { t: 'tip', art: 'owl', md: '**As calças** is always plural in Portuguese, like *trousers* in English. In Portugal, **a camisola** is a warm jumper. In Brazil, the word for a jumper is *o suéter*, and *a camiseta* is a T-shirt.' },
        ],
        [
          { t: 'table', caption: 'Colours', explain: ['head'], head: ['masculine', 'feminine', 'masculine plural', 'feminine plural'], rows: [
            ['branco', 'branca', 'brancos', 'brancas'],
            ['preto', 'preta', 'pretos', 'pretas'],
            ['vermelho', 'vermelha', 'vermelhos', 'vermelhas'],
            ['amarelo', 'amarela', 'amarelos', 'amarelas'],
            ['castanho', 'castanha', 'castanhos', 'castanhas'],
            ['cinzento', 'cinzenta', 'cinzentos', 'cinzentas'],
            ['azul', 'azul', 'azuis', 'azuis'],
            ['verde', 'verde', 'verdes', 'verdes'],
            ['cor-de-rosa', 'cor-de-rosa', 'cor-de-rosa', 'cor-de-rosa'],
          ] },
          { t: 'tip', art: 'owl', md: 'Colours that end in **-o** change to **-a** for feminine. Colours that end in **-e** or in a consonant (**azul, verde**) stay the same for masculine and feminine, but add **-s** or **-is** in the plural: *azuis, verdes*. **Cor-de-rosa** never changes.' },
        ],
        [
          { t: 'text', md: 'To point to things, use **este** (this, near me), **esse** (that, near you) and **aquele** (that, far from both of us). They agree with the noun: *este casaco, esta saia, estes sapatos, estas calças.*' },
          { t: 'table', caption: 'This and that', quiz: true, head: ['', 'masculine', 'feminine', 'masculine plural', 'feminine plural'], rows: [
            ['this (near me)', 'este', 'esta', 'estes', 'estas'],
            ['that (near you)', 'esse', 'essa', 'esses', 'essas'],
            ['that (far)', 'aquele', 'aquela', 'aqueles', 'aquelas'],
          ] },
          { t: 'examples', items: [
            { s: '**Este** casaco é bonito.', n: 'Near me.' },
            { s: '**Essa** saia é cara.', n: 'Near you.' },
            { s: '**Aqueles** sapatos são pequenos.', n: 'Far from both.' },
            { s: '**Estas** camisas são azuis.', n: 'Feminine plural.' },
            { s: 'Quero uma camisa **branca**.', n: 'The colour after the noun.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['a camisa', 'shirt'],
            ['as calças', 'trousers'],
            ['o casaco', 'coat'],
            ['o vestido', 'dress'],
            ['a saia', 'skirt'],
            ['os sapatos', 'shoes'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Um casaco ___.', o: ['preto', 'preta', 'pretos'], why: '*Casaco* is masculine singular: *preto*.' },
            { q: 'Uma saia ___.', o: ['preta', 'preto', 'pretas'], why: '*Saia* is feminine singular: *preta*.' },
            { q: 'Sapatos ___.', o: ['pretos', 'preto', 'pretas'], why: 'Masculine plural: *pretos*.' },
            { q: 'Uma camisa ___.', o: ['azul', 'azula', 'azuls'], why: '*Azul* is the same for both genders.' },
            { q: 'As calças ___.', o: ['verdes', 'verde', 'verdas'], why: 'The plural of *verde* is *verdes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write este, esta, estes or estas, or aquele and its forms.', items: [
            { q: '___ casaco é bonito. (this, near me)', a: ['Este'], why: '*Casaco* is masculine singular: *este*.' },
            { q: '___ saia é cara. (that, near you)', a: ['Essa'], why: '*Saia* is feminine singular: *essa*.' },
            { q: '___ sapatos são pequenos. (those, far)', a: ['Aqueles'], why: 'Masculine plural, far: *aqueles*.' },
            { q: '___ camisas são azuis. (these)', a: ['Estas'], why: 'Feminine plural: *estas*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Uma saia [preto].', a: ['preta'], why: '*Saia* is feminine: *preta*.' },
            { s: 'Os sapatos [azul].', a: ['azuis'], why: 'The plural of *azul* is *azuis*.' },
            { s: '[Este] saia é bonita.', a: ['Esta'], why: '*Saia* is feminine: *esta*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quero um casaco preto.', why: 'The colour goes after the noun.' },
            { a: 'Esta saia é muito bonita.', why: '*Esta* + feminine noun.' },
            { a: 'Aqueles sapatos são azuis.', why: '*Aqueles* + masculine plural.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quanto custa?',
      about: 'Ask the price, try things on and say what you take.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In a shop, ask the price with **Quanto custa …?** for one thing and **Quanto custam …?** for more than one: *Quanto custa este casaco? Quanto custam estas calças?* To try on, say **Posso experimentar?** To ask for another size, say **Tem um tamanho maior / menor?** To decide, say **Levo este** (I will take this one) or **Não levo.** To pay, say **Posso pagar com cartão?** or **Pago em dinheiro.**' },
          { t: 'table', caption: 'In a shop', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['Quanto custa este casaco?', 'How much is this coat?'],
            ['Quanto custam estas calças?', 'How much are these trousers?'],
            ['Posso experimentar?', 'Can I try it on?'],
            ['Tem um tamanho maior / menor?', 'Do you have a bigger / smaller size?'],
            ['É muito caro.', 'It is very expensive.'],
            ['Levo este.', 'I will take this one.'],
            ['Posso pagar com cartão?', 'Can I pay by card?'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say *I will take it*, put a little word after the verb with a hyphen: **Levo-o** (o casaco), **Levo-a** (a saia), **Levo-os** (os sapatos), **Levo-as** (as calças). This is how it works in Portugal. In Brazil, people often say *Eu levo ele* or just *Levo*.' },
        ],
        [
          { t: 'dialogue', title: 'Na loja', lines: [
            { who: 'Tomás', s: 'Boa tarde. Posso ajudar?' },
            { who: 'Marta', s: 'Boa tarde. Quanto custa este casaco?' },
            { who: 'Tomás', s: 'Custa quarenta e cinco euros.' },
            { who: 'Marta', s: 'Posso experimentar?' },
            { who: 'Tomás', s: 'Claro. Qual é o seu tamanho?' },
            { who: 'Marta', s: 'Quarenta.' },
            { who: 'Tomás', s: 'Aqui tem. Fica bem?' },
            { who: 'Marta', s: 'Sim, levo-o. Posso pagar com cartão?' },
            { who: 'Tomás', s: 'Pode, sim.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Quanto ___ este casaco? (custar)', a: ['custa'], why: 'One thing: *custa*.' },
            { q: 'Quanto ___ estas calças? (custar)', a: ['custam'], why: 'More than one thing: *custam*.' },
            { q: 'Posso ___? (try on)', a: ['experimentar'], why: '*Posso experimentar?*' },
            { q: 'Posso pagar ___ cartão?', a: ['com'], why: '*Com cartão* = by card.' },
            { q: 'Gosto deste casaco. Levo-___.', a: ['o'], why: '*O casaco* → *levo-o*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say what you take. Use a little word after the verb.', items: [
            { q: 'Levo o casaco.', a: ['Levo-o.'], why: '*O casaco* → *-o*.' },
            { q: 'Levo a saia.', a: ['Levo-a.'], why: '*A saia* → *-a*.' },
            { q: 'Levo os sapatos.', a: ['Levo-os.'], why: '*Os sapatos* → *-os*.' },
            { q: 'Levo as calças.', a: ['Levo-as.'], why: '*As calças* → *-as*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Quer saber o preço de um casaco:', o: ['Quanto custa este casaco?', 'Quem custa este casaco?', 'Onde custa este casaco?'], why: '*Quanto custa …?* asks the price.' },
            { q: 'Quer ver se a camisa lhe fica bem:', o: ['Posso experimentar?', 'Posso comprar?', 'Posso custar?'], why: '*Experimentar* = to try on.' },
            { q: 'Decide comprar os sapatos:', o: ['Levo-os.', 'Levo-o.', 'Levo-as.'], why: '*Os sapatos* → *levo-os*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quanto custa este casaco?', why: '*Quanto custa* + thing.' },
            { a: 'Posso pagar com cartão?', why: '*Posso* + infinitive.' },
            { a: 'Tem um tamanho maior?', why: 'A question for a size.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Vou comprar',
      about: 'Talk about your plans with ir and the infinitive.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To talk about plans, use **ir** + infinitive: *Vou comprar um casaco. Vamos jantar fora.* You already know *ir*: **vou, vais, vai, vamos, vão**. In Portugal, you do not need **a** between *ir* and the verb. To say *when*, add a time word: **hoje** (today), **amanhã** (tomorrow), **depois de amanhã** (the day after tomorrow), **no sábado**, **no fim de semana**, **no próximo ano**.' },
          { t: 'table', caption: 'ir + infinitive', quiz: true, head: ['', 'ir + comprar'], rows: [
            ['eu', 'vou comprar'],
            ['tu', 'vais comprar'],
            ['ele / ela / você', 'vai comprar'],
            ['nós', 'vamos comprar'],
            ['eles / elas / vocês', 'vão comprar'],
          ] },
          { t: 'tip', art: 'owl', md: 'To ask about plans, say **O que vais fazer no fim de semana?** To say *I am not going to do anything*, say **Não vou fazer nada.** The present tense also works for near plans: *Amanhã trabalho.* Compare **vamos** (we go) with **vamos** + infinitive (we are going to): *Vamos ao cinema* and *Vamos ver um filme.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Amanhã **vou trabalhar**.', n: '*Ir* + infinitive.' },
            { s: 'No sábado **vamos jantar** fora.', n: '*Nós vamos* + infinitive.' },
            { s: 'O que **vais fazer** no fim de semana?', n: 'A question about plans.' },
            { s: '**Vou visitar** os meus avós.', n: 'A plan with family.' },
            { s: '**Não vou fazer** nada.', n: '*Não* before *ir*.' },
          ] },
          { t: 'dialogue', title: 'Planos', lines: [
            { who: 'Ana', s: 'O que vais fazer no fim de semana?' },
            { who: 'Pedro', s: 'Vou visitar os meus avós no Porto. E tu?' },
            { who: 'Ana', s: 'Vou comprar um casaco novo e depois vou ao cinema.' },
            { who: 'Pedro', s: 'Que bom! Amanhã vou trabalhar, mas no domingo estou livre.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of ir.', items: [
            { q: 'Eu ___ comprar um casaco. (ir)', a: ['vou'], why: '*Eu vou*.' },
            { q: 'Tu ___ viajar no verão? (ir)', a: ['vais'], why: '*Tu vais*.' },
            { q: 'Ela ___ trabalhar amanhã. (ir)', a: ['vai'], why: '*Ela vai*.' },
            { q: 'Nós ___ jantar fora. (ir)', a: ['vamos'], why: '*Nós vamos*.' },
            { q: 'Eles ___ visitar os avós. (ir)', a: ['vão'], why: '*Eles vão*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it as a plan with ir.', items: [
            { q: 'Compro um casaco.', a: ['Vou comprar um casaco.'], why: '*Compro* → *vou comprar*.' },
            { q: 'Ela trabalha amanhã.', a: ['Ela vai trabalhar amanhã.'], why: '*Trabalha* → *vai trabalhar*.' },
            { q: 'Nós jantamos fora.', a: ['Nós vamos jantar fora.', 'Vamos jantar fora.'], why: '*Jantamos* → *vamos jantar*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the time word with its meaning.', pairs: [
            ['hoje', 'today'],
            ['amanhã', 'tomorrow'],
            ['depois de amanhã', 'the day after tomorrow'],
            ['no fim de semana', 'at the weekend'],
            ['no próximo ano', 'next year'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu [vais] comprar um casaco.', a: ['vou'], why: '*Eu vou*.' },
            { s: 'Nós vamos [jantamos] fora.', a: ['jantar'], why: '*Ir* + infinitive.' },
            { s: 'Eles [vai] visitar os avós.', a: ['vão'], why: '*Eles vão*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Amanhã vou trabalhar.', why: 'A time word can come first.' },
            { a: 'O que vais fazer no fim de semana?', why: 'The question about plans.' },
            { a: 'Não vou fazer nada.', why: '*Não* before *ir*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um anúncio e uma mensagem',
      about: 'Read a sale advert and a message about weekend plans.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Saldos', md: 'Grandes saldos no centro comercial! Os casacos custam trinta euros, as calças custam vinte e cinco euros e os sapatos custam quarenta euros. Só de sexta a domingo. Pague em dinheiro ou com cartão.' },
          { t: 'reading', title: 'Uma mensagem', md: 'Olá, Sofia!\n\nNo sábado vou às compras com a minha irmã. Vamos comprar um vestido azul e sapatos pretos. Depois vamos jantar a um restaurante. No domingo vou visitar os meus avós.\n\nE tu, o que vais fazer?\n\nBeijinhos,\nClara' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Os casacos custam trinta euros.', a: 't', why: '*Os casacos custam trinta euros.*' },
            { q: 'Os saldos são de segunda a quinta.', a: 'f', why: 'They are from Friday to Sunday: *de sexta a domingo*.' },
            { q: 'Pode pagar com cartão.', a: 't', why: '*Pague em dinheiro ou com cartão.*' },
            { q: 'A Clara vai comprar um chapéu.', a: 'ng', why: 'She says a dress and shoes, not a hat.' },
            { q: 'No domingo, a Clara vai visitar os avós.', a: 't', why: '*No domingo vou visitar os meus avós.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quanto custam os sapatos?', o: ['Quarenta euros.', 'Trinta euros.', 'Vinte e cinco euros.'], why: '*Os sapatos custam quarenta euros.*' },
            { q: 'Com quem vai às compras a Clara?', o: ['Com a irmã.', 'Com a mãe.', 'Com a Sofia.'], why: '*Vou às compras com a minha irmã.*' },
            { q: 'Que cor tem o vestido?', o: ['Azul.', 'Preto.', 'Vermelho.'], why: '*Um vestido azul.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Os casacos ___ trinta euros. (custar)', a: ['custam'], why: 'More than one thing: *custam*.' },
            { q: 'No sábado ___ às compras. (eu, ir)', a: ['vou'], why: '*Eu vou*.' },
            { q: 'Vamos comprar um vestido ___ e sapatos pretos.', a: ['azul'], why: '*Um vestido azul*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Um casaco ___.', o: ['preto', 'preta', 'pretos'], why: 'Masculine singular: *preto*.' },
      { q: 'Uma saia ___.', o: ['preta', 'preto', 'pretas'], why: 'Feminine singular: *preta*.' },
      { q: 'Quanto ___ estas calças?', o: ['custam', 'custa', 'custo'], why: 'More than one thing: *custam*.' },
      { q: 'Vou ___ um casaco.', o: ['comprar', 'compro', 'comprado'], why: '*Ir* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Gosto deste casaco. Levo-___.', a: ['o'], why: '*O casaco* → *levo-o*.' },
      { q: 'Amanhã ___ ao cinema. (nós, ir)', a: ['vamos'], why: '*Nós vamos*.' },
      { q: '___ casaco é bonito. (this)', a: ['Este'], why: '*Casaco* is masculine: *este*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['a saia', 'skirt'],
      ['o vestido', 'dress'],
      ['os sapatos', 'shoes'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Uma saia [preto].', a: ['preta'], why: 'Feminine: *preta*.' },
      { s: 'Eu [vais] comprar um casaco.', a: ['vou'], why: '*Eu vou*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Quanto custa este casaco?', why: '*Quanto custa* + thing.' },
      { a: 'O que vais fazer no fim de semana?', why: 'The question about plans.' },
    ] },
  ],
};
