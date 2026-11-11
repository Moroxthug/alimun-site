// Portuguese B1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Society and the environment',
  goal: 'Discuss everyday issues, give reasons and write a short argument. Learn the infinitivo pessoal, the superlative, embora and apesar de, and the vocabulary of city life and the environment.',
  art: 'sun',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['infinitivo pessoal', 'superlative', 'connectors', 'environment', 'city life', 'argument'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Para falarmos, ao chegarem',
      about: 'Use the infinitivo pessoal when the subject of the infinitive is different.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'Portuguese has a special feature: the **infinitivo pessoal**, an infinitive with endings for the person. It is made from the infinitive: **-ø** for *eu* and *ele*, **-es** for *tu*, **-mos** for *nós*, **-em** for *eles*: *falar, falares, falar, falarmos, falarem*. Use it when the **subject of the infinitive is different** from the subject of the main verb, or to make the subject clear: *Disse-lhes para esperarem. É importante estudares. Ao chegarem, cumprimentaram-nos.* When the subject is the same, use the plain infinitive: *Quero falar. Antes de sair, fechei a porta.*' },
          { t: 'table', caption: 'The infinitivo pessoal', quiz: true, head: ['', 'falar', 'chegar', 'ser'], rows: [
            ['eu', 'falar', 'chegar', 'ser'],
            ['tu', 'falares', 'chegares', 'seres'],
            ['ele / ela / você', 'falar', 'chegar', 'ser'],
            ['nós', 'falarmos', 'chegarmos', 'sermos'],
            ['eles / elas / vocês', 'falarem', 'chegarem', 'serem'],
          ] },
          { t: 'tip', art: 'owl', md: 'The personal infinitive never has irregular forms: it is always **the infinitive + the ending**. It follows words like **para** (*para falarmos*), **ao** (*ao chegarem*), **antes de**, **depois de**, **sem**, **apesar de**, and impersonal expressions: **é importante, é preciso, é melhor**. In Brazil it is used less, but it is part of standard Portuguese.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Disse-lhes **para esperarem**.', n: 'The subject of the infinitive is *eles*; the subject of *disse* is *eu*.' },
            { s: 'É importante **estudares** mais.', n: '*É importante* + *tu*.' },
            { s: '**Ao chegarem**, cumprimentaram-nos.', n: '*Ao* + infinitive: when they arrived.' },
            { s: 'Telefonei **para falarmos** do assunto.', n: '*Para* + *nós*.' },
            { s: '**Antes de sair**, fechei a porta.', n: 'The same subject: the plain infinitive.' },
          ] },
          { t: 'dialogue', title: 'Uma reunião', lines: [
            { who: 'Ana', s: 'Liguei-lhes para virem à reunião.' },
            { who: 'Pedro', s: 'E eles vêm?' },
            { who: 'Ana', s: 'Ao receberem a mensagem, disseram que sim.' },
            { who: 'Pedro', s: 'Bom. É melhor chegarmos cedo para prepararmos tudo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the infinitivo pessoal.', items: [
            { q: 'Para ___ com ele, ligo-lhe. (nós, falar)', a: ['falarmos'], why: '*Para falarmos*.' },
            { q: 'Ao ___, eles cumprimentaram-nos. (chegar)', a: ['chegarem'], why: '*Ao chegarem*.' },
            { q: 'É importante ___ mais. (tu, estudar)', a: ['estudares'], why: '*É importante estudares*.' },
            { q: 'Disse-lhes para ___ . (eles, esperar)', a: ['esperarem'], why: '*Para esperarem*.' },
            { q: 'É melhor ___ cedo. (nós, partir)', a: ['partirmos'], why: '*É melhor partirmos*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Disse-lhes para ___.', o: ['esperarem', 'esperar', 'esperam'], why: 'The subject changes: the personal infinitive.' },
            { q: 'Antes de ___, fechei a porta.', o: ['sair', 'sairmos', 'saírem'], why: 'The same subject: the plain infinitive.' },
            { q: 'É importante ___ mais, Pedro.', o: ['estudares', 'estudar', 'estudo'], why: '*É importante* + *tu*: *estudares*.' },
            { q: 'Ao ___, vimos o mar.', o: ['chegarmos', 'chegar', 'chegamos'], why: '*Ao* + *nós*: *chegarmos*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Disse-lhes para [esperar].', a: ['esperarem'], why: 'The subject is *eles*: *esperarem*.' },
            { s: 'É importante [estudar] mais, tu.', a: ['estudares'], why: 'With *tu*: *estudares*.' },
            { s: 'Ao [chegarmos], eles cumprimentaram-nos.', a: ['chegarem'], why: 'The subject is *eles*: *chegarem*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Disse-lhes para esperarem aqui.', why: '*Para* + *eles*.' },
            { a: 'É melhor chegarmos cedo.', why: '*É melhor* + *nós*.' },
            { a: 'Antes de sair, fechei a porta.', why: 'The same subject: the plain infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'O mais, belíssimo, embora',
      about: 'Compare with the superlative and link ideas with connectors.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'The **relative superlative** says that something is the best, biggest or smallest of a group: **o mais / a mais / os mais / as mais** + adjective: *É a rua mais estreita da cidade.* The **absolute superlative** says *very*: add **-íssimo** to the adjective (without the final vowel) or use **muito**: *belo → belíssimo, alto → altíssimo, rico → riquíssimo, antigo → antiquíssimo*. It agrees: *belíssima, belíssimos, belíssimas*. Irregular: **bom → ótimo, mau → péssimo**.' },
          { t: 'table', caption: 'The absolute superlative', explain: ['head'], head: ['Adjective', 'Superlative', 'Agreement'], rows: [
            ['belo', 'belíssimo', 'belíssima, belíssimos, belíssimas'],
            ['alto', 'altíssimo', 'altíssima, altíssimos, altíssimas'],
            ['rico', 'riquíssimo', 'riquíssima, riquíssimos, riquíssimas'],
            ['antigo', 'antiquíssimo', 'antiquíssima, antiquíssimos, antiquíssimas'],
            ['bom', 'ótimo', 'ótima, ótimos, ótimas'],
            ['mau', 'péssimo', 'péssima, péssimos, péssimas'],
          ] },
          { t: 'tip', art: 'owl', md: 'Adjectives in **-co** and **-go** change spelling before **-íssimo**: **rico → riquíssimo**, **antigo → antiquíssimo**. Compare the relative form *o mais bonito da cidade* (the most beautiful in the city) with the absolute form *belíssimo* (very beautiful).' },
        ],
        [
          { t: 'table', caption: 'Connectors', explain: ['head', 'col1'], head: ['Connector', 'Use', 'Example'], rows: [
            ['embora + subjunctive', 'although', 'Embora seja caro, compro.'],
            ['apesar de + noun or infinitive', 'in spite of', 'Apesar do frio, saímos.'],
            ['em vez de + infinitive', 'instead of', 'Em vez de usar o carro, vou de bicicleta.'],
            ['portanto / por isso', 'so, therefore', 'Chove, portanto fico em casa.'],
            ['no entanto / contudo', 'however', 'Gosto da cidade, no entanto é barulhenta.'],
            ['mesmo que + subjunctive', 'even if', 'Mesmo que chova, saímos.'],
          ] },
          { t: 'dialogue', title: 'A minha cidade', lines: [
            { who: 'Sara', s: 'Qual é a coisa mais bonita da tua cidade?' },
            { who: 'Paulo', s: 'O centro histórico, é belíssimo. Embora seja pequeno, tem muitos jardins.' },
            { who: 'Sara', s: 'E o trânsito?' },
            { who: 'Paulo', s: 'É o maior problema. Em vez de usar o carro, muita gente anda de bicicleta.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the superlative.', items: [
            { q: 'Esta é a rua ___ estreita da cidade. (mais)', a: ['mais'], why: 'The relative superlative: *a mais estreita*.' },
            { q: 'O parque é muito belo: é ___.', a: ['belíssimo'], why: '*Belo* → *belíssimo*.' },
            { q: 'As montanhas são muito altas: são ___.', a: ['altíssimas'], why: 'Feminine plural: *altíssimas*.' },
            { q: 'O senhor é muito rico: é ___.', a: ['riquíssimo'], why: '*Rico* → *riquíssimo*, with *qu*.' },
            { q: 'A casa é muito antiga: é ___.', a: ['antiquíssima'], why: '*Antiga* → *antiquíssima*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: '___ seja caro, compro.', o: ['Embora', 'Portanto', 'Em vez de'], why: '*Embora* + subjunctive.' },
            { q: '___ usar o carro, vou de bicicleta.', o: ['Em vez de', 'Embora', 'Portanto'], why: '*Em vez de* + infinitive.' },
            { q: 'Chove, ___ fico em casa.', o: ['portanto', 'embora', 'sem'], why: '*Portanto* = so.' },
            { q: 'Gosto da cidade, ___ é barulhenta.', o: ['no entanto', 'portanto', 'porque'], why: '*No entanto* = however.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Use the absolute superlative or the connector.', items: [
            { q: 'Ele é muito alto.', a: ['Ele é altíssimo.'], why: '*Muito alto* → *altíssimo*.' },
            { q: 'A casa é muito antiga.', a: ['A casa é antiquíssima.'], why: '*Antiga* → *antiquíssima*.' },
            { q: 'Chove, mas saímos.', cue: 'Embora', a: ['Embora chova, saímos.'], why: '*Embora* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Embora [é] caro, compro.', a: ['seja'], why: '*Embora* + subjunctive.' },
            { s: 'A casa é [antigíssima].', a: ['antiquíssima'], why: 'Spelling: *antiquíssima*.' },
            { s: '[Embora] usar o carro, vou de bicicleta.', a: ['Em vez de'], why: '*Em vez de* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Esta é a rua mais estreita da cidade.', why: 'The relative superlative: *a mais estreita*.' },
            { a: 'Embora seja caro, compro.', why: '*Embora* + subjunctive.' },
            { a: 'Em vez de usar o carro, vou de bicicleta.', why: '*Em vez de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
            ['embora', 'although'],
            ['em vez de', 'instead of'],
            ['portanto', 'therefore'],
            ['no entanto', 'however'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Cidade e ambiente',
      about: 'Talk about city life and the environment and build a short argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'table', caption: 'City and environment', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['o trânsito', 'traffic'],
            ['a poluição', 'pollution'],
            ['os transportes públicos', 'public transport'],
            ['a ciclovia', 'cycle lane'],
            ['o lixo', 'rubbish'],
            ['a reciclagem / reciclar', 'recycling / to recycle'],
            ['reduzir', 'to reduce'],
            ['o ambiente', 'the environment'],
            ['o ruído', 'noise'],
            ['os espaços verdes', 'green spaces'],
          ] },
          { t: 'text', md: 'A short **argument** has four steps. Give your **opinion**: *Na minha opinião, a câmara devia construir mais ciclovias.* Give a **reason** with *porque*: *porque o trânsito é um grande problema.* Give an **example**: *Por exemplo, muitas pessoas vão de carro mesmo para distâncias curtas.* End with a **conclusion**: *Portanto, com mais ciclovias, haveria menos poluição.* To answer someone, use *Concordo*, *Não concordo*, *Tens razão, mas …* or *Depende.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Na minha opinião**, a câmara devia construir mais ciclovias.', n: 'An opinion.' },
            { s: 'O trânsito é um grande problema **porque** polui e faz ruído.', n: 'A reason.' },
            { s: '**Por exemplo**, muitas pessoas vão de carro para distâncias curtas.', n: 'An example.' },
            { s: '**Portanto**, com mais ciclovias, haveria menos poluição.', n: 'A conclusion.' },
            { s: '**Embora** custem dinheiro, as ciclovias são um bom investimento.', n: 'A contrast.' },
          ] },
          { t: 'dialogue', title: 'Reciclar', lines: [
            { who: 'Ana', s: 'Acho que reciclar é importante para o ambiente.' },
            { who: 'Pedro', s: 'Concordo. Mas nem todos têm espaço para separar o lixo.' },
            { who: 'Ana', s: 'Tens razão, mas basta um pequeno espaço. Se todos o fizessem, teríamos menos lixo.' },
            { who: 'Pedro', s: 'É verdade. Comecemos nós, portanto!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['o trânsito', 'traffic'],
            ['a poluição', 'pollution'],
            ['a ciclovia', 'cycle lane'],
            ['o lixo', 'rubbish'],
            ['reduzir', 'to reduce'],
            ['o ruído', 'noise'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O trânsito é um problema, ___ polui e faz ruído.', a: ['porque'], why: '*Porque* gives the reason.' },
            { q: '___ exemplo, muitas pessoas vão de carro.', a: ['Por'], why: '*Por exemplo*.' },
            { q: 'Com mais ciclovias ___ menos poluição. (haver, condicional)', a: ['haveria'], why: 'A hypothetical result: *haveria*.' },
            { q: 'Acho que reciclar ___ importante. (ser)', a: ['é'], why: '*Acho que* + indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Choose the word for each gap.', extra: ['sem', 'embora'], items: [
            { q: 'O trânsito é um problema, ___ é melhor usar os transportes públicos.', a: 'portanto', why: '*Portanto* = therefore.' },
            { q: 'Gosto da cidade, ___ é barulhenta.', a: 'no entanto', why: '*No entanto* = however.' },
            { q: '___ usar o carro, vou de bicicleta.', a: 'em vez de', why: '*Em vez de* + infinitive.' },
            { q: 'Vou a pé ___ reduzir a poluição.', a: 'para', why: '*Para* + infinitive = in order to.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Na minha opinião, a câmara devia construir mais ciclovias.', why: 'An opinion with *devia*.' },
            { a: 'Acho que reciclar é importante para o ambiente.', why: '*Acho que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma carta ao jornal',
      about: 'Read a letter to the editor about a cycle lane.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'A nova ciclovia', md: 'Exmo. Senhor Diretor,\n\nsou leitor do vosso jornal e moro no centro. Escrevo a propósito da nova ciclovia da Rua das Tílias. Penso que é uma excelente ideia, porque o trânsito na cidade se tornou insuportável. Ao andar de bicicleta, chega-se ao trabalho mais depressa e respira-se melhor. No entanto, lamento que a ciclovia seja tão estreita e que não haja onde estacionar as bicicletas. Se fosse mais larga, mais pessoas a usariam.\n\nPeço à câmara que atue rapidamente, sem esquecer quem anda a pé.\n\nCom os melhores cumprimentos,\nLuís Ferreira' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O leitor mora no centro.', a: 't', why: '*Moro no centro.*' },
            { q: 'O leitor acha que a ciclovia é uma má ideia.', a: 'f', why: 'He thinks it is an excellent idea: *uma excelente ideia*.' },
            { q: 'A ciclovia é demasiado estreita.', a: 't', why: '*A ciclovia seja tão estreita.*' },
            { q: 'O leitor vai trabalhar de bicicleta.', a: 'ng', why: 'He says cycling is faster, but not that he does it.' },
            { q: 'Pede à câmara que não esqueça quem anda a pé.', a: 't', why: '*Sem esquecer quem anda a pé.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Porque acha o leitor que é uma excelente ideia?', o: ['O trânsito é insuportável.', 'A ciclovia é nova.', 'Custa pouco.'], why: '*Porque o trânsito na cidade se tornou insuportável.*' },
            { q: 'O que falta, segundo o leitor?', o: ['Onde estacionar as bicicletas.', 'Uma ciclovia mais curta.', 'Mais carros.'], why: '*Não haja onde estacionar as bicicletas.*' },
            { q: 'O que aconteceria com uma ciclovia mais larga?', o: ['Mais pessoas a usariam.', 'Haveria mais trânsito.', 'Custaria menos.'], why: '*Se fosse mais larga, mais pessoas a usariam.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Lamento que a ciclovia [seja] tão estreita e que não [haja] onde estacionar.', why: '*Seja* and *haja* follow *lamento que*.' },
            { s: 'Peço à câmara que [atue] rapidamente.', why: '*Atue* follows *peço que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Penso que é uma excelente ideia, ___ o trânsito é insuportável.', a: ['porque'], why: '*Porque* gives the reason.' },
            { q: 'Lamento que a ciclovia ___ tão estreita. (ser)', a: ['seja'], why: '*Lamento que* + subjunctive.' },
            { q: 'Se fosse mais larga, mais pessoas a ___. (usar)', a: ['usariam'], why: 'The result is in the condicional.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Penso que é uma excelente ideia.', why: '*Penso que* + indicative.' },
            { a: 'Ao andar de bicicleta, respira-se melhor.', why: '*Ao* + infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Disse-lhes para ___.', o: ['esperarem', 'esperar', 'esperam'], why: 'The subject changes: the personal infinitive.' },
      { q: '___ seja caro, compro.', o: ['Embora', 'Portanto', 'Em vez de'], why: '*Embora* + subjunctive.' },
      { q: 'O parque é muito belo: é ___.', o: ['belíssimo', 'muito belíssimo', 'mais belo'], why: '*Belo* → *belíssimo*.' },
      { q: '___ usar o carro, vou de bicicleta.', o: ['Em vez de', 'Embora', 'Portanto'], why: '*Em vez de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ao ___, eles cumprimentaram-nos. (chegar)', a: ['chegarem'], why: '*Ao chegarem*.' },
      { q: 'A rua é muito comprida: é ___.', a: ['compridíssima'], why: '*Comprida* → *compridíssima*.' },
      { q: 'Apesar ___ chover, saímos.', a: ['de'], why: '*Apesar de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
      ['embora', 'although'],
      ['portanto', 'therefore'],
      ['no entanto', 'however'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Ele é muito alto.', a: ['Ele é altíssimo.'], why: '*Muito alto* → *altíssimo*.' },
      { q: 'Chove, mas saímos.', cue: 'Embora', a: ['Embora chova, saímos.'], why: '*Embora* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Embora [é] caro, compro.', a: ['seja'], why: '*Embora* + subjunctive.' },
      { s: 'Disse-lhes para [esperar].', a: ['esperarem'], why: 'The subject is *eles*: *esperarem*.' },
    ] },
  ],
};
