// Portuguese A1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food and drink',
  goal: 'Order in a café, buy food and say what you want.',
  art: 'croissant',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['food', 'drink', 'articles', 'gender', 'plurals', 'present tense', 'cafe', 'prices'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'O pão, a maçã',
      about: 'Articles, masculine and feminine nouns, and plurals.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'Every Portuguese noun is **masculine** or **feminine**. The word for *the* is **o** (masculine) and **a** (feminine). The word for *a* is **um** (masculine) and **uma** (feminine). Most nouns that end in **-o** are masculine, and most that end in **-a** are feminine: *o queijo, a maçã*. You must learn the gender with the noun.' },
          { t: 'table', caption: 'Food and drink', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['o pão', 'bread'],
            ['o leite', 'milk'],
            ['o queijo', 'cheese'],
            ['a água', 'water'],
            ['o café', 'coffee'],
            ['o chá', 'tea'],
            ['o sumo', 'juice'],
            ['a maçã', 'apple'],
            ['a laranja', 'orange'],
            ['o arroz', 'rice'],
            ['a carne', 'meat'],
            ['o peixe', 'fish'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some nouns do not follow the rule: **o peixe** and **o leite** end in *-e* and are masculine, **a carne** ends in *-e* and is feminine. **Sumo** is the word in Portugal; in Brazil, people say *suco*.' },
        ],
        [
          { t: 'text', md: 'To make a **plural**, add **-s** after a vowel: *o queijo, os queijos; a laranja, as laranjas*. The articles change too: **os** and **as**, and **uns** and **umas**. Nouns that end in **-ão** often change to **-ães**: *o pão, os pães*. Nouns that end in **-r** or **-z** add **-es**: *a mulher, as mulheres*.' },
          { t: 'table', caption: 'Plurals', explain: ['head'], quiz: true, head: ['Singular', 'Plural'], rows: [
            ['o queijo', 'os queijos'],
            ['a laranja', 'as laranjas'],
            ['o café', 'os cafés'],
            ['o pão', 'os pães'],
            ['a mulher', 'as mulheres'],
            ['um ovo', 'uns ovos'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **o** before a masculine singular noun and **a** before a feminine singular one, even if you are talking about a food in general: *Gosto do queijo.* With **em** and **de**, the article joins them: *no*, *na*, *do*, *da*. You will learn this in unit 4.' },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Is the word o or a?', groups: ['o', 'a'], items: [
            { s: 'pão', g: 0, why: '*O pão* is masculine.' },
            { s: 'leite', g: 0, why: '*O leite* is masculine.' },
            { s: 'queijo', g: 0, why: '*O queijo* is masculine.' },
            { s: 'peixe', g: 0, why: '*O peixe* is masculine.' },
            { s: 'água', g: 1, why: '*A água* is feminine.' },
            { s: 'maçã', g: 1, why: '*A maçã* is feminine.' },
            { s: 'laranja', g: 1, why: '*A laranja* is feminine.' },
            { s: 'carne', g: 1, why: '*A carne* is feminine.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['o pão', 'bread'],
            ['o leite', 'milk'],
            ['a água', 'water'],
            ['a maçã', 'apple'],
            ['o peixe', 'fish'],
            ['o arroz', 'rice'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Eu como ___ maçã.', o: ['uma', 'um', 'uns'], why: '*Maçã* is feminine singular: *uma*.' },
            { q: 'Queria ___ café, se faz favor.', o: ['um', 'uma', 'umas'], why: '*Café* is masculine singular: *um*.' },
            { q: 'Eu compro ___ pão.', o: ['o', 'a', 'as'], why: '*Pão* is masculine singular: *o*.' },
            { q: 'Ela bebe ___ água.', o: ['a', 'o', 'os'], why: '*Água* is feminine: *a*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the plural.', items: [
            { q: 'o queijo → os ___', a: ['queijos'], why: 'Add *-s*: *queijos*.' },
            { q: 'a laranja → as ___', a: ['laranjas'], why: 'Add *-s*: *laranjas*.' },
            { q: 'o pão → os ___', a: ['pães'], why: '*-ão* often becomes *-ães*: *pães*.' },
            { q: 'o café → os ___', a: ['cafés'], why: 'Add *-s*: *cafés*.' },
            { q: 'a mulher → as ___', a: ['mulheres'], why: 'After *-r*, add *-es*: *mulheres*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[A] pão é fresco.', a: ['O'], why: '*Pão* is masculine: *o pão*.' },
            { s: 'Eu como [um] maçã.', a: ['uma'], why: '*Maçã* is feminine: *uma maçã*.' },
            { s: 'Os [pãos] são frescos.', a: ['pães'], why: 'The plural of *pão* is *pães*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Como, bebo, abro',
      about: 'The present of regular verbs in -ar, -er and -ir.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Regular verbs end in **-ar**, **-er** or **-ir**. To use them, remove the ending and add the endings for the person. You already know **falar**. Now learn **comer** (to eat) and **abrir** (to open). The forms for *ele*, *ela*, *você* are the same; the forms for *eles*, *elas*, *vocês* are the same.' },
          { t: 'table', caption: 'Three regular verbs', quiz: true, head: ['', 'falar', 'comer', 'abrir'], rows: [
            ['eu', 'falo', 'como', 'abro'],
            ['tu', 'falas', 'comes', 'abres'],
            ['ele / ela / você', 'fala', 'come', 'abre'],
            ['nós', 'falamos', 'comemos', 'abrimos'],
            ['eles / elas / vocês', 'falam', 'comem', 'abrem'],
          ] },
          { t: 'tip', art: 'owl', md: 'To make a sentence negative, put **não** before the verb: *Não como carne.* To ask a question, keep the order and raise your voice: *Comes peixe?* Useful verbs: **comer, beber** (to drink), **abrir, escrever** (to write), **viver** (to live), **trabalhar, comprar, pagar**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Eu **como** pão e **bebo** leite.', n: '*Comer* and *beber* with *eu*: *como*, *bebo*.' },
            { s: 'Tu **bebes** café?', n: '*Tu* ends in *-s*.' },
            { s: 'Ela **escreve** uma carta.', n: '*Ela*: *escreve*.' },
            { s: 'Nós **vivemos** em Lisboa.', n: '*Nós*: *-mos*.' },
            { s: 'Eles **abrem** a porta.', n: '*Eles*: *-em*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of comer.', verb: 'comer', tense: 'present', rows: [
            ['eu', 'como'],
            ['tu', 'comes'],
            ['ele / ela / você', 'come'],
            ['nós', 'comemos'],
            ['eles / elas / vocês', 'comem'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Eu ___ pão. (comer)', a: ['como'], why: '*eu como*' },
            { q: 'Tu ___ café? (beber)', a: ['bebes'], why: '*tu bebes*' },
            { q: 'Ela ___ uma carta. (escrever)', a: ['escreve'], why: '*ela escreve*' },
            { q: 'Nós ___ em Lisboa. (viver)', a: ['vivemos'], why: '*nós vivemos*' },
            { q: 'Eles ___ a porta. (abrir)', a: ['abrem'], why: '*eles abrem*' },
            { q: 'Eu ___ na cozinha. (trabalhar)', a: ['trabalho'], why: '*eu trabalho*' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which verb is it?', groups: ['-ar', '-er', '-ir'], items: [
            { s: 'falo', g: 0, why: '*falo* comes from *falar*.' },
            { s: 'como', g: 1, why: '*como* comes from *comer*.' },
            { s: 'abro', g: 2, why: '*abro* comes from *abrir*.' },
            { s: 'bebes', g: 1, why: '*bebes* comes from *beber*.' },
            { s: 'trabalha', g: 0, why: '*trabalha* comes from *trabalhar*.' },
            { s: 'vive', g: 1, why: '*vive* comes from *viver*, an *-er* verb.' },
            { s: 'abrimos', g: 2, why: '*abrimos* comes from *abrir*.' },
            { s: 'escrevem', g: 1, why: '*escrevem* comes from *escrever*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Nós ___ pão.', o: ['comemos', 'come', 'comem'], why: '*nós comemos*' },
            { q: 'Tu ___ a porta.', o: ['abres', 'abre', 'abro'], why: '*tu abres*' },
            { q: 'Eles ___ café.', o: ['bebem', 'bebe', 'bebemos'], why: '*eles bebem*' },
            { q: 'Eu ___ em Lisboa.', o: ['vivo', 'vive', 'vives'], why: '*eu vivo*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu [comes] pão.', a: ['como'], why: '*Eu como*.' },
            { s: 'Nós [bebem] água.', a: ['bebemos'], why: '*Nós bebemos*.' },
            { s: 'Ele [abro] a porta.', a: ['abre'], why: '*Ele abre*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Eu como pão e bebo leite.', why: 'Two verbs with *eu*.' },
            { a: 'Tu bebes café?', why: 'The question has the same order.' },
            { a: 'Nós vivemos em Lisboa.', why: '*Nós vivemos*.' },
            { a: 'Não como carne.', why: '*Não* goes before the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'No café',
      about: 'Order, ask the price and pay.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'To order politely, say **Queria …, se faz favor** (I would like …, please). The waiter asks **Que deseja?** (What would you like?) or **Mais alguma coisa?** (Anything else?). To ask the price, say **Quanto é?** To ask for the bill, say **A conta, se faz favor.** To give the money, say **Aqui tem.**' },
          { t: 'table', caption: 'In a café', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['Queria um café, se faz favor.', 'I would like a coffee, please.'],
            ['uma bica', 'a small black coffee (an espresso)'],
            ['um galão', 'a milky coffee in a tall glass'],
            ['um pastel de nata', 'a custard tart'],
            ['uma água com gás / sem gás', 'a sparkling / still water'],
            ['Mais alguma coisa?', 'Anything else?'],
            ['Só isso, obrigado.', 'Just that, thank you.'],
            ['Quanto é?', 'How much is it?'],
            ['A conta, se faz favor.', 'The bill, please.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Queria** is the polite way to say *I want*. It sounds friendlier than *Quero*. In Portugal, people say **uma bica** in Lisbon and **um café** in other places for a small black coffee. In Brazil, people say *um cafezinho*, and *suco* for juice.' },
        ],
        [
          { t: 'table', caption: 'Prices', explain: ['head'], head: ['Price', 'In words'], rows: [
            ['0,80 €', 'oitenta cêntimos'],
            ['1,00 €', 'um euro'],
            ['1,20 €', 'um euro e vinte'],
            ['2,50 €', 'dois euros e cinquenta'],
            ['3,20 €', 'três euros e vinte'],
          ] },
          { t: 'dialogue', title: 'No café', lines: [
            { who: 'Empregado', s: 'Boa tarde. Que deseja?' },
            { who: 'Marta', s: 'Queria um galão e um pastel de nata, se faz favor.' },
            { who: 'Empregado', s: 'Mais alguma coisa?' },
            { who: 'Marta', s: 'Não, só isso. Quanto é?' },
            { who: 'Empregado', s: 'São dois euros e vinte.' },
            { who: 'Marta', s: 'Aqui tem.' },
            { who: 'Empregado', s: 'Obrigado. Boa tarde!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['You want a coffee.', 'Queria um café, se faz favor.'],
            ['You want to know the price.', 'Quanto é?'],
            ['You want nothing else.', 'Só isso, obrigado.'],
            ['You want to pay.', 'A conta, se faz favor.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'Quer pedir um café:', o: ['Queria um café, se faz favor.', 'Eu café!', 'Dá-me café.'], why: '*Queria …, se faz favor* is polite.' },
            { q: 'Quer saber o preço:', o: ['Quanto é?', 'Quem é?', 'Onde é?'], why: '*Quanto é?* asks the price.' },
            { q: 'O empregado pergunta se quer mais alguma coisa:', o: ['Mais alguma coisa?', 'Quanto custa?', 'Como te chamas?'], why: '*Mais alguma coisa?* = anything else?' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Queria um café, se faz ___.', a: ['favor'], why: '*Se faz favor* = please.' },
            { q: 'Quanto ___?', a: ['é'], why: '*Quanto é?*' },
            { q: '___ dois euros e vinte.', a: ['São'], why: 'With *euros* (plural): *São dois euros*.' },
            { q: 'Aqui ___.', a: ['tem'], why: '*Aqui tem* = here you are.' },
            { q: 'Não, só ___, obrigado.', a: ['isso'], why: '*Só isso* = just that.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the price in words.', items: [
            { q: '2,50 € = dois euros e ___', a: ['cinquenta'], why: '*dois euros e cinquenta*' },
            { q: '1,20 € = um euro e ___', a: ['vinte'], why: '*um euro e vinte*' },
            { q: '0,80 € = ___ cêntimos', a: ['oitenta'], why: '*oitenta cêntimos*' },
            { q: '3,00 € = três ___', a: ['euros'], why: '*Três euros*, in the plural.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Queria um galão e um pastel de nata.', why: '*Queria* + what you want.' },
            { a: 'São dois euros e vinte.', why: '*São* + price.' },
            { a: 'Uma água sem gás, se faz favor.', why: '*Se faz favor* goes last.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A ementa e a lista',
      about: 'Read a café menu and a shopping list.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Café da Praça: ementa', md: 'Ao pequeno-almoço, uma bica custa oitenta cêntimos e um galão custa um euro e vinte. Um pastel de nata custa um euro. Uma torrada custa um euro e cinquenta. Ao almoço, a sopa do dia custa dois euros e cinquenta, e o prato do dia custa seis euros. A água custa um euro e o sumo de laranja custa dois euros.' },
          { t: 'reading', title: 'A lista da Marta', md: 'Para o jantar: pão, leite, queijo, seis ovos, duas laranjas, arroz e peixe.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Uma bica custa oitenta cêntimos.', a: 't', why: '*Uma bica custa oitenta cêntimos.*' },
            { q: 'Um galão custa dois euros.', a: 'f', why: 'A galão costs one euro and twenty: *um euro e vinte*.' },
            { q: 'O prato do dia custa seis euros.', a: 't', why: '*O prato do dia custa seis euros.*' },
            { q: 'O café fecha às dez da noite.', a: 'ng', why: 'The menu does not give the closing time.' },
            { q: 'A Marta compra peixe.', a: 't', why: '*… arroz e peixe.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quanto custa um pastel de nata?', o: ['Um euro.', 'Dois euros.', 'Oitenta cêntimos.'], why: '*Um pastel de nata custa um euro.*' },
            { q: 'Quantos ovos compra a Marta?', o: ['Seis.', 'Duas.', 'Dez.'], why: '*Seis ovos.*' },
            { q: 'Quanto custa o sumo de laranja?', o: ['Dois euros.', 'Um euro.', 'Seis euros.'], why: '*O sumo de laranja custa dois euros.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Uma torrada ___ um euro e cinquenta. (custar)', a: ['custa'], why: '*Custa*, for one thing.' },
            { q: 'A Marta compra ___ ovos.', a: ['seis'], why: '*Seis ovos.*' },
            { q: 'A sopa do dia custa dois euros e ___.', a: ['cinquenta'], why: '*Dois euros e cinquenta.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Eu como ___ maçã.', o: ['uma', 'um', 'uns'], why: '*Maçã* is feminine: *uma*.' },
      { q: 'o pão → os ___', o: ['pães', 'pãos', 'pãoes'], why: 'The plural of *pão* is *pães*.' },
      { q: 'Nós ___ pão.', o: ['comemos', 'come', 'comem'], why: '*Nós comemos*.' },
      { q: 'Quer saber o preço:', o: ['Quanto é?', 'Quem é?', 'Onde é?'], why: '*Quanto é?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Eu ___ pão. (comer)', a: ['como'], why: '*Eu como*.' },
      { q: 'Nós ___ em Lisboa. (viver)', a: ['vivemos'], why: '*Nós vivemos*.' },
      { q: '___ um café, se faz favor.', a: ['Queria'], why: '*Queria* is polite.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['o leite', 'milk'],
      ['a maçã', 'apple'],
      ['o peixe', 'fish'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: '[A] pão é fresco.', a: ['O'], why: '*Pão* is masculine: *o pão*.' },
      { s: 'Ele [abro] a porta.', a: ['abre'], why: '*Ele abre*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Queria um galão e um pastel de nata.', why: '*Queria* + what you want.' },
      { a: 'São dois euros e vinte.', why: '*São* + price.' },
    ] },
  ],
};
