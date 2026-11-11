// Portuguese B2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Arts, culture and opinion',
  goal: 'Describe a book, film or exhibition, defend a view and make concessions. Learn the vocabulary of plot and criticism, the indefinite expressions qualquer que seja, quem quer que and onde quer que, and the markers of a review.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['arts', 'books', 'film', 'exhibition', 'opinion', 'conjuntivo'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Books, films and exhibitions',
      about: 'Learn the words used to describe a work of art and to judge it.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To talk about a book or a film, name its parts: **o enredo** (the plot), **a personagem** (the character), **o argumento** (the script), **o realizador** (the film director), **o autor** (the author) and **o estilo** (the style). To judge it, use verbs and adjectives that carry a view: *o enredo é previsível, a personagem é convincente, o estilo é original, o final é fraco, a história prende-nos.* For an exhibition, say **a exposição**, **o comissário** (the curator), **a obra** (the work) and **o visitante**. Use **retratar** (to portray), **explorar** (to explore) and **abordar** (to deal with) for the theme: *O filme aborda a solidão.*' },
          { t: 'table', caption: 'Describing and judging', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['o enredo', 'the plot', 'O enredo é previsível.'],
            ['a personagem', 'the character', 'A personagem principal é convincente.'],
            ['o realizador', 'the film director', 'O realizador abordou a solidão.'],
            ['retratar', 'to portray', 'O livro retrata a vida numa aldeia.'],
            ['prender', 'to hold, to grip', 'A história prende o leitor.'],
            ['a exposição', 'the exhibition', 'A exposição reúne cem obras.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Personagem** is feminine for a man or a woman: *a personagem principal é um homem.* In Brazil **o diretor** is the film director; in Portugal people say **o realizador**. **Prender** also means *to arrest* and *to tie*; with a story it means that you cannot stop reading.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**O enredo** é previsível, mas **o estilo** é original.', n: 'The plot and the style.' },
            { s: '**A personagem principal** é muito convincente.', n: 'The main character.' },
            { s: 'O livro **retrata** a vida numa aldeia.', n: 'To portray.' },
            { s: 'A história **prende** o leitor até ao fim.', n: 'To grip.' },
            { s: 'A exposição **reúne** cem obras.', n: 'To bring together.' },
          ] },
          { t: 'dialogue', title: 'À saída do cinema', lines: [
            { who: 'Sara', s: 'Gostaste do filme?' },
            { who: 'Paulo', s: 'O enredo é previsível, mas a personagem principal é muito convincente.' },
            { who: 'Sara', s: 'O realizador aborda a solidão com muita delicadeza.' },
            { who: 'Paulo', s: 'Sim, e o final prende-nos até ao último minuto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O ___ é previsível, mas o estilo é original. (the plot)', a: ['enredo'], why: '*O enredo* = the plot.' },
            { q: 'A ___ principal é muito convincente. (the character)', a: ['personagem'], why: '*A personagem* = the character.' },
            { q: 'O livro ___ a vida numa aldeia. (retratar)', a: ['retrata'], why: '*Retratar* = to portray.' },
            { q: 'A história ___ o leitor até ao fim. (prender)', a: ['prende'], why: '*Prender* = to grip.' },
            { q: 'A ___ reúne cem obras. (the exhibition)', a: ['exposição'], why: '*A exposição* = the exhibition.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['o enredo', 'the plot'],
            ['a personagem', 'the character'],
            ['o realizador', 'the film director'],
            ['a exposição', 'the exhibition'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'O ___ do filme é muito previsível.', o: ['enredo', 'visitante', 'comissário'], why: '*O enredo* is the plot.' },
            { q: 'O realizador ___ a solidão com delicadeza.', o: ['aborda', 'prende', 'reúne'], why: '*Abordar* = to deal with a theme.' },
            { q: 'A ___ está aberta até domingo.', o: ['exposição', 'personagem', 'argumento'], why: '*A exposição* = the exhibition.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[O] personagem principal é muito convincente.', a: ['A'], why: '*Personagem* is feminine.' },
            { s: 'A história [prendem] o leitor até ao fim.', a: ['prende'], why: 'The subject is singular.' },
            { s: 'O livro [retratar] a vida numa aldeia.', a: ['retrata'], why: 'Present tense: *retrata*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O enredo é previsível, mas o estilo é original.', why: 'Plot, then style.' },
            { a: 'A personagem principal é muito convincente.', why: 'Noun, adjective, adverb.' },
            { a: 'A história prende o leitor até ao fim.', why: 'Subject, verb, object.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Qualquer que seja, quem quer que',
      about: 'Make a concession with indefinite expressions and the conjuntivo.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'To say that **it does not matter which** or **who**, Portuguese uses indefinite expressions with the **conjuntivo**. **Qualquer que seja** means *whatever it may be*: *Qualquer que seja a tua opinião, respeito-a.* **Quem quer que** means *whoever*: *Quem quer que chegue, deixa entrar.* **Onde quer que** means *wherever*: *Onde quer que vás, serás bem recebido.* **Seja como for** means *however it may be*: *Seja como for, o filme vale a pena.* **Por mais que** and **por muito que** are followed by the conjuntivo too: *Por muito que insistas, não mudo de ideias.*' },
          { t: 'table', caption: 'Indefinite expressions', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['qualquer que seja', 'whatever it may be', 'Qualquer que seja a tua opinião, respeito-a.'],
            ['quem quer que', 'whoever', 'Quem quer que chegue, deixa entrar.'],
            ['onde quer que', 'wherever', 'Onde quer que vás, serás bem recebido.'],
            ['seja como for', 'however it may be', 'Seja como for, o filme vale a pena.'],
            ['por muito que', 'however much', 'Por muito que insistas, não mudo.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Qualquer que seja** agrees in number with the noun: *quaisquer que sejam as razões.* The verb after **quer que** is always in the **presente do conjuntivo**: *quem quer que seja, onde quer que esteja.* In speech people often say **não interessa quem** or **não importa onde** instead.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Qualquer que seja** a tua opinião, respeito-a.', n: 'Whatever it may be.' },
            { s: '**Quem quer que chegue**, deixa entrar.', n: 'Whoever arrives.' },
            { s: '**Onde quer que vás**, serás bem recebido.', n: 'Wherever you go.' },
            { s: '**Seja como for**, o filme vale a pena.', n: 'However it may be.' },
            { s: '**Por muito que insistas**, não mudo de ideias.', n: 'However much you insist.' },
          ] },
          { t: 'dialogue', title: 'Uma discussão amigável', lines: [
            { who: 'Ana', s: 'Qualquer que seja a crítica, eu gostei do livro.' },
            { who: 'Pedro', s: 'Por muito que o defendas, o final é fraco.' },
            { who: 'Ana', s: 'Seja como for, o autor escreve muito bem.' },
            { who: 'Pedro', s: 'Nisso concordo contigo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the conjuntivo.', items: [
            { q: 'Qualquer que ___ a tua opinião, respeito-a. (ser)', a: ['seja'], why: '*Qualquer que* + *seja*.' },
            { q: 'Quem quer que ___, deixa entrar. (chegar)', a: ['chegue'], why: '*Quem quer que* + conjuntivo.' },
            { q: 'Onde quer que tu ___, serás bem recebido. (ir)', a: ['vás'], why: '*Onde quer que* + *vás*.' },
            { q: 'Por muito que tu ___, não mudo de ideias. (insistir)', a: ['insistas'], why: '*Por muito que* + conjuntivo.' },
            { q: 'Seja como ___, o filme vale a pena. (ser)', a: ['for'], why: '*Seja como for*: fixed expression.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['qualquer que seja', 'whatever it may be'],
            ['quem quer que', 'whoever'],
            ['onde quer que', 'wherever'],
            ['por muito que', 'however much'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quem quer que ___, deixa entrar.', o: ['chegue', 'chega', 'chegou'], why: '*Quem quer que* + conjuntivo.' },
            { q: 'Onde quer que ___, serás bem recebido.', o: ['vás', 'vais', 'foste'], why: '*Onde quer que* + conjuntivo.' },
            { q: 'Quaisquer que ___ as razões, a decisão está tomada.', o: ['sejam', 'seja', 'são'], why: 'Plural: *quaisquer que sejam*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the expression in brackets.', items: [
            { q: 'Não importa qual seja a tua opinião, respeito-a.', cue: 'Qualquer que', a: ['Qualquer que seja a tua opinião, respeito-a.'], why: '*Qualquer que seja*.' },
            { q: 'Não importa quem chegue, deixa entrar.', cue: 'Quem quer que', a: ['Quem quer que chegue, deixa entrar.'], why: '*Quem quer que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quem quer que [chega], deixa entrar.', a: ['chegue'], why: 'Conjuntivo after *quer que*.' },
            { s: 'Onde quer que [vais], serás bem recebido.', a: ['vás'], why: 'Conjuntivo after *quer que*.' },
            { s: 'Seja como [é], o filme vale a pena.', a: ['for'], why: 'Fixed expression: *seja como for*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Qualquer que seja a tua opinião, respeito-a.', why: '*Qualquer que seja* + noun.' },
            { a: 'Onde quer que vás, serás bem recebido.', why: '*Onde quer que* + conjuntivo.' },
            { a: 'Seja como for, o filme vale a pena.', why: 'Fixed expression first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'No fundo, em suma, para ser sincero',
      about: 'Use the markers that open, balance and close a review or a conversation.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A review or a conversation about art needs markers that show where you are going. **Para ser sincero** (to be honest) opens a frank view: *Para ser sincero, esperava mais.* **No fundo** (deep down) gives your real opinion: *No fundo, gostei do filme.* **No geral** (on the whole) sums up: *No geral, a exposição é boa.* **Em suma** (in short) closes: *Em suma, vale a pena ver.* **Por um lado … por outro** balances two views: *Por um lado, o enredo é fraco; por outro, o estilo é original.* **Ainda assim** (even so) answers an objection: *O final é fraco; ainda assim, recomendo-o.*' },
          { t: 'table', caption: 'Markers of a review', explain: ['head', 'col1'], head: ['Marker', 'Use', 'Example'], rows: [
            ['para ser sincero', 'a frank view', 'Para ser sincero, esperava mais.'],
            ['no fundo', 'your real opinion', 'No fundo, gostei do filme.'],
            ['no geral', 'on the whole', 'No geral, a exposição é boa.'],
            ['por um lado … por outro', 'two views', 'Por um lado, o enredo é fraco; por outro, o estilo é original.'],
            ['ainda assim', 'even so', 'O final é fraco; ainda assim, recomendo-o.'],
            ['em suma', 'in short', 'Em suma, vale a pena ver.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Put a **comma** after these markers at the start of a sentence: *No geral, …* Use **em suma** or **em resumo** for the last sentence of a review. In speech **sinceramente** is a short way to say *para ser sincero*.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Para ser sincero**, esperava mais.', n: 'A frank view.' },
            { s: '**No fundo**, gostei do filme.', n: 'Your real opinion.' },
            { s: '**No geral**, a exposição é boa.', n: 'On the whole.' },
            { s: '**Por um lado**, o enredo é fraco; **por outro**, o estilo é original.', n: 'Balancing two views.' },
            { s: '**Em suma**, vale a pena ver.', n: 'In short.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Where does the marker go in a review? Sort the phrases.', explain: ['groups'], groups: ['Opening or giving a view', 'Balancing or closing'], items: [
            { s: 'para ser sincero', g: 0, why: 'It opens a frank view.' },
            { s: 'no fundo', g: 0, why: 'It gives your real opinion.' },
            { s: 'sinceramente', g: 0, why: 'It opens a frank view.' },
            { s: 'por um lado … por outro', g: 1, why: 'It balances two views.' },
            { s: 'ainda assim', g: 1, why: 'It answers an objection.' },
            { s: 'em suma', g: 1, why: 'It closes the review.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Para ser ___, esperava mais.', a: ['sincero'], why: '*Para ser sincero*.' },
            { q: 'No ___, gostei do filme.', a: ['fundo'], why: '*No fundo*.' },
            { q: 'No ___, a exposição é boa.', a: ['geral'], why: '*No geral*.' },
            { q: 'Por um lado, o enredo é fraco; por ___, o estilo é original.', a: ['outro'], why: '*Por um lado … por outro*.' },
            { q: 'O final é fraco; ainda ___, recomendo-o.', a: ['assim'], why: '*Ainda assim*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the marker with what it does.', pairs: [
            ['para ser sincero', 'I give a frank view'],
            ['no geral', 'I sum up'],
            ['ainda assim', 'I answer an objection'],
            ['em suma', 'I close the review'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best marker.', items: [
            { q: 'O filme é longo; ___, recomendo-o.', o: ['ainda assim', 'em suma', 'no geral'], why: '*Ainda assim* answers an objection.' },
            { q: 'Last sentence of a review:', o: ['Em suma, vale a pena ver.', 'Para ser sincero, esperava mais.', 'Por um lado, o enredo é fraco.'], why: '*Em suma* closes the review.' },
            { q: 'You balance two views:', o: ['Por um lado, é caro; por outro, é bom.', 'Em suma, é caro.', 'No fundo, é caro.'], why: '*Por um lado … por outro*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Para ser [sinceramente], esperava mais.', a: ['sincero'], why: '*Para ser sincero*.' },
            { s: 'Por um lado, é caro; [por outra], é bom.', a: ['por outro'], why: '*Por um lado … por outro*.' },
            { s: 'O final é fraco; ainda [assi], recomendo-o.', a: ['assim'], why: '*Ainda assim*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Para ser sincero, esperava mais do filme.', why: 'The marker comes first.' },
            { a: 'No geral, a exposição é muito boa.', why: 'The marker comes first.' },
            { a: 'Em suma, vale a pena ver o filme.', why: 'The closing marker comes first.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma exposição que vale a pena',
      about: 'Read a review of an exhibition.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Crítica de uma exposição', md: 'A nova exposição do museu da cidade reúne cem fotografias de aldeias do interior. O comissário aborda a vida no campo sem a idealizar: as imagens retratam casas vazias e campos abandonados, mas também festas e mercados que continuam vivos.\n\nPara ser sincero, esperava um conjunto mais variado. Por um lado, muitas fotografias parecem repetir-se; por outro, algumas são tão fortes que prendem o visitante durante minutos. Qualquer que seja o gosto de cada um, há pelo menos uma imagem que fica na memória.\n\nNo geral, a exposição é cuidada e honesta. O catálogo é caro; ainda assim, merece ser comprado por quem queira levar um pouco do que viu. Em suma, vale a pena ver, quem quer que seja o visitante.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A exposição reúne cem fotografias.', a: 't', why: '*Reúne cem fotografias.*' },
            { q: 'O comissário idealiza a vida no campo.', a: 'f', why: '*Sem a idealizar.*' },
            { q: 'O crítico esperava um conjunto mais variado.', a: 't', why: '*Esperava um conjunto mais variado.*' },
            { q: 'A exposição fica aberta até dezembro.', a: 'ng', why: 'The text does not say so.' },
            { q: 'O crítico acha o catálogo barato.', a: 'f', why: '*O catálogo é caro.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que mostram as fotografias?', o: ['Casas vazias, campos abandonados, festas e mercados.', 'Só festas.', 'Só cidades grandes.'], why: 'Both the empty houses and the lively markets.' },
            { q: 'Qual é a crítica do autor?', o: ['Muitas fotografias parecem repetir-se.', 'As fotografias são feias.', 'O museu é pequeno.'], why: '*Muitas fotografias parecem repetir-se.*' },
            { q: 'Como conclui o autor?', o: ['Vale a pena ver.', 'Não vale a pena.', 'Só vale para especialistas.'], why: '*Em suma, vale a pena ver.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the conjuntivo.', items: [
            { s: 'Qualquer que [seja] o gosto de cada um, há pelo menos uma imagem que fica na memória.', why: '*Seja* follows *qualquer que*.' },
            { s: 'Merece ser comprado por quem [queira] levar um pouco do que viu, quem quer que [seja] o visitante.', why: '*Queira* and *seja* are in the conjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Para ser ___, esperava um conjunto mais variado.', a: ['sincero'], why: '*Para ser sincero*.' },
            { q: 'O catálogo é caro; ainda ___, merece ser comprado.', a: ['assim'], why: '*Ainda assim*.' },
            { q: 'Qualquer que ___ o gosto de cada um, há uma imagem que fica. (ser)', a: ['seja'], why: '*Qualquer que* + *seja*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A exposição reúne cem fotografias de aldeias do interior.', why: 'Subject, verb, object.' },
            { a: 'Em suma, vale a pena ver a exposição.', why: 'The closing marker comes first.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'O ___ do filme é muito previsível.', o: ['enredo', 'visitante', 'comissário'], why: '*O enredo* is the plot.' },
      { q: 'Quem quer que ___, deixa entrar.', o: ['chegue', 'chega', 'chegou'], why: '*Quem quer que* + conjuntivo.' },
      { q: 'O filme é longo; ___, recomendo-o.', o: ['ainda assim', 'em suma', 'no geral'], why: '*Ainda assim* answers an objection.' },
      { q: 'Last sentence of a review:', o: ['Em suma, vale a pena ver.', 'Para ser sincero, esperava mais.', 'Por um lado, o enredo é fraco.'], why: '*Em suma* closes the review.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'A ___ principal é muito convincente. (the character)', a: ['personagem'], why: '*A personagem*.' },
      { q: 'Qualquer que ___ a tua opinião, respeito-a. (ser)', a: ['seja'], why: '*Qualquer que* + *seja*.' },
      { q: 'No ___, gostei do filme.', a: ['fundo'], why: '*No fundo*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
      ['qualquer que seja', 'whatever it may be'],
      ['onde quer que', 'wherever'],
      ['no geral', 'on the whole'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the expression in brackets.', items: [
      { q: 'Não importa quem chegue, deixa entrar.', cue: 'Quem quer que', a: ['Quem quer que chegue, deixa entrar.'], why: '*Quem quer que* + conjuntivo.' },
      { q: 'Não importa qual seja a tua opinião, respeito-a.', cue: 'Qualquer que', a: ['Qualquer que seja a tua opinião, respeito-a.'], why: '*Qualquer que seja*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Onde quer que [vais], serás bem recebido.', a: ['vás'], why: 'Conjuntivo after *quer que*.' },
      { s: '[O] personagem principal é muito convincente.', a: ['A'], why: '*Personagem* is feminine.' },
    ] },
  ],
};
