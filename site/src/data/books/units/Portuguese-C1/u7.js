// Portuguese C1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'The art of argument',
  goal: 'Build and defend a nuanced argument in a written commentary. Learn connectors such as contudo, todavia and aliás, ways to concede and refute, and the structure of a newspaper commentary with its rhetorical figures.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['argument', 'connectors', 'concession', 'commentary', 'rhetoric'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Contudo, todavia, aliás',
      about: 'Link ideas with the connectors of written argument.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A good argument moves from point to point with **connectors**. To contrast: **contudo**, **todavia**, **no entanto** (*however*) and **ainda assim** (*even so*). To add a point: **aliás** and **de resto** (*moreover, besides*). To confirm: **com efeito** (*indeed*). To balance two sides: **por um lado … por outro** (*on the one hand … on the other*). To conclude: **portanto**, **por conseguinte** and **em suma** (*therefore, in short*). **O projeto é ambicioso; contudo, custa demasiado.** **A cidade é bonita; aliás, é muito tranquila.** **Com efeito, os números são claros.**' },
          { t: 'table', caption: 'Connectors of argument', explain: ['head', 'col1'], head: ['Connector', 'Function', 'Example'], rows: [
            ['contudo / todavia / no entanto', 'contrast', 'O projeto é ambicioso; contudo, custa demasiado.'],
            ['ainda assim', 'contrast: even so', 'Estava cansado; ainda assim, ficou até ao fim.'],
            ['aliás / de resto', 'adding a point', 'A cidade é bonita; aliás, é muito tranquila.'],
            ['com efeito', 'confirming', 'Com efeito, os números são claros.'],
            ['por um lado … por outro', 'balancing', 'Por um lado é cómodo, por outro é caro.'],
            ['portanto / em suma', 'concluding', 'Em suma, a proposta é recusada.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Aliás** has two uses: it **adds** a point (*moreover*) and it **corrects** (*or rather*): **Era uma casa, aliás, um palácio.** It never means *instead*. **Contudo** and **todavia** are written; in speech use **mas** or **no entanto**. Put a **semicolon** or a **full stop** before **contudo**: **O projeto é ambicioso; contudo, custa demasiado.** In **Brazil**, **porém** is also very common: **O projeto é ambicioso; porém, custa muito.**' },
        ],
        [
          { t: 'examples', items: [
            { s: 'O projeto é ambicioso; **contudo**, custa demasiado.', n: 'Contrast.' },
            { s: 'A cidade é bonita; **aliás**, é muito tranquila.', n: 'Adding a point.' },
            { s: '**Com efeito**, os números são claros.', n: 'Confirming.' },
            { s: '**Por um lado** é cómodo, **por outro** é caro.', n: 'Balancing.' },
            { s: '**Em suma**, a proposta é recusada.', n: 'Concluding.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Contrast or addition? Sort the connectors.', groups: ['contrast', 'addition'], explain: ['groups'], items: [
            { s: 'contudo', g: 0, why: 'Contrast.' },
            { s: 'todavia', g: 0, why: 'Contrast.' },
            { s: 'no entanto', g: 0, why: 'Contrast.' },
            { s: 'aliás', g: 1, why: 'Addition.' },
            { s: 'de resto', g: 1, why: 'Addition.' },
            { s: 'além disso', g: 1, why: 'Addition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O projeto é ambicioso; ___, custa demasiado.', a: ['contudo', 'todavia', 'no entanto'], why: 'A connector of contrast.' },
            { q: 'A cidade é bonita; ___, é muito tranquila.', a: ['aliás', 'de resto'], why: 'A connector that adds a point.' },
            { q: '___ efeito, os números são claros.', a: ['Com'], why: '*Com efeito* = indeed.' },
            { q: 'Por um lado é cómodo, por ___ é caro.', a: ['outro'], why: '*Por um lado … por outro*.' },
            { q: 'Em ___, a proposta é recusada.', a: ['suma'], why: '*Em suma* = in short.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
            ['contudo', 'contrast'],
            ['aliás', 'adding a point'],
            ['com efeito', 'confirming'],
            ['em suma', 'concluding'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best connector.', items: [
            { q: 'O plano é simples; ___, ninguém o compreende.', o: ['no entanto', 'com efeito', 'por conseguinte'], why: 'Contrast.' },
            { q: 'Estava muito cansado; ___, foi dormir.', o: ['por isso', 'contudo', 'ainda assim'], why: 'A result.' },
            { q: 'O plano falhou; ___, tem de ser mudado.', o: ['por conseguinte', 'todavia', 'aliás'], why: 'Conclusion.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'O projeto é ambicioso, mas custa demasiado.', cue: 'O projeto é ambicioso; contudo', a: ['O projeto é ambicioso; contudo, custa demasiado.'], why: '*Contudo* replaces *mas*.' },
            { q: 'A cidade é bonita e, além disso, é tranquila.', cue: 'A cidade é bonita; aliás', a: ['A cidade é bonita; aliás, é tranquila.', 'A cidade é bonita; aliás, é muito tranquila.'], why: '*Aliás* adds a point.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O projeto é ambicioso; [portanto], custa demasiado.', a: ['contudo', 'todavia', 'no entanto'], why: 'The second clause contrasts.' },
            { s: 'O plano falhou; [contudo], tem de ser mudado.', a: ['por conseguinte', 'portanto'], why: 'The second clause is a conclusion.' },
            { s: 'Por um lado é cómodo, [por um lado] é caro.', a: ['por outro'], why: '*Por um lado … por outro*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'É verdade que, nem por isso',
      about: 'Concede a point and then refute it.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A strong argument **concedes** the other side before it **refutes** it. To concede: **é verdade que** (*it is true that*), **certamente** (*certainly*), **não se pode negar que** (*it cannot be denied that*). To refute: **o certo é que** and **a verdade é que** (*the fact is that*), **nem por isso** (*not for that reason*), **ainda assim** (*even so*). **É verdade que a cidade é cara; o certo é que oferece muitas oportunidades.** **Nem por isso** se deve desistir. **Por mais que se diga** + conjuntivo means *however much*: **Por mais que se diga o contrário, a cidade é segura.**' },
          { t: 'table', caption: 'Concession and refutation', explain: ['head', 'col1'], head: ['Expression', 'Function', 'Example'], rows: [
            ['é verdade que', 'concession', 'É verdade que a cidade é cara.'],
            ['não se pode negar que', 'concession', 'Não se pode negar que o problema existe.'],
            ['o certo é que', 'refutation', 'O certo é que oferece muitas oportunidades.'],
            ['a verdade é que', 'refutation', 'A verdade é que os dados são claros.'],
            ['nem por isso', 'refutation', 'Nem por isso se deve desistir.'],
            ['por mais que + conjuntivo', 'concession', 'Por mais que se diga o contrário, é segura.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **é verdade que** and **não se pode negar que**, use the **indicative** for something true (**é verdade que a cidade é cara**). **Por mais que** always takes the **conjuntivo**: **por mais que se diga**, **por mais que insista**. **O certo é que** and **a verdade é que** introduce a fact and take the **indicative**. **Nem por isso** can also mean *not really*: **— Gostaste? — Nem por isso.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**É verdade que** a cidade é cara.', n: 'Concession.' },
            { s: '**O certo é que** oferece muitas oportunidades.', n: 'Refutation.' },
            { s: '**Nem por isso** se deve desistir.', n: 'Refutation.' },
            { s: '**Por mais que se diga** o contrário, a cidade é segura.', n: 'However much is said.' },
            { s: '**A verdade é que** os dados são claros.', n: 'The fact is.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Concession or refutation? Sort the expressions.', groups: ['concession', 'refutation'], explain: ['groups'], items: [
            { s: 'É verdade que a cidade é cara.', g: 0, why: 'Concession.' },
            { s: 'Não se pode negar que o problema existe.', g: 0, why: 'Concession.' },
            { s: 'Certamente há custos.', g: 0, why: 'Concession.' },
            { s: 'O certo é que oferece muitas oportunidades.', g: 1, why: 'Refutation.' },
            { s: 'A verdade é que os dados são claros.', g: 1, why: 'Refutation.' },
            { s: 'Nem por isso se deve desistir.', g: 1, why: 'Refutation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'É ___ que a cidade é cara.', a: ['verdade'], why: '*É verdade que*.' },
            { q: 'O ___ é que oferece muitas oportunidades.', a: ['certo'], why: '*O certo é que*.' },
            { q: 'Nem por ___ se deve desistir.', a: ['isso'], why: '*Nem por isso*.' },
            { q: 'Por mais que se ___ o contrário, a cidade é segura. (dizer)', a: ['diga'], why: '*Por mais que* + conjuntivo.' },
            { q: 'Não se pode ___ que o problema existe.', a: ['negar'], why: '*Não se pode negar que*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['é verdade que', 'it is true that'],
            ['o certo é que', 'the fact is that'],
            ['nem por isso', 'not for that reason'],
            ['por mais que', 'however much'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the expression in brackets.', items: [
            { q: 'A cidade é cara. Oferece muitas oportunidades.', cue: 'É verdade que', a: ['É verdade que a cidade é cara, mas oferece muitas oportunidades.', 'É verdade que a cidade é cara; o certo é que oferece muitas oportunidades.'], why: 'Concession, then refutation.' },
            { q: 'Diz-se o contrário, mas a cidade é segura.', cue: 'Por mais que', a: ['Por mais que se diga o contrário, a cidade é segura.'], why: '*Por mais que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Por mais que se [diz] o contrário, a cidade é segura.', a: ['diga'], why: '*Por mais que* + conjuntivo.' },
            { s: 'O certo é que oferece muitas oportunidades. Nem por [esse] se deve desistir.', a: ['isso'], why: 'The fixed phrase is *nem por isso*.' },
            { s: '[É verdadeiro] que a cidade é cara.', a: ['É verdade'], why: 'The phrase is *é verdade que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'É verdade que a cidade é cara, mas oferece muitas oportunidades.', why: 'Concession, then refutation.' },
            { a: 'Por mais que se diga o contrário, a cidade é segura.', why: '*Por mais que* + conjuntivo.' },
            { a: 'Nem por isso se deve desistir.', why: 'A refutation.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Perguntas retóricas, litotes, antíteses',
      about: 'Learn the figures of a commentary.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A newspaper **commentary** (artigo de opinião) persuades with figures of speech. The **rhetorical question** (pergunta retórica) asks without expecting an answer: **Quem pode dizer-se realmente surpreendido?** The **litotes** (litotes) says less to mean more by negating the opposite: **Não foi um mau resultado** (it was a good result), **Não é pouco** (it is a lot). The **antithesis** (antítese) sets two opposite ideas side by side: **Menos palavras, mais ação.** The **triad** (tricolon) lists three items: **uma cidade viva, aberta, justa.** A commentary has a clear structure: an **opening** (the fact), a **thesis**, **arguments** with examples, and a **conclusion** that repeats the idea in a new way.' },
          { t: 'table', caption: 'Figures of a commentary', explain: ['head', 'col1'], head: ['Figure', 'Meaning', 'Example'], rows: [
            ['pergunta retórica', 'a question with no expected answer', 'Quem pode dizer-se realmente surpreendido?'],
            ['litotes', 'negating the opposite', 'Não foi um mau resultado.'],
            ['antítese', 'two opposite ideas', 'Menos palavras, mais ação.'],
            ['tricolon', 'a list of three', 'Uma cidade viva, aberta, justa.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **one figure per paragraph**, not five: a commentary full of figures becomes tiring. The **litotes** is typical of Portuguese: **não é mau** means *it is good*, **não é pouco** means *it is a lot*. The **rhetorical question** works best at the **end** of a paragraph. In a formal essay, avoid exclamation marks and keep the **first person plural** (**nós**) for an inclusive tone: **Não podemos ignorar …**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Quem pode dizer-se realmente surpreendido?**', n: 'A rhetorical question.' },
            { s: 'Não foi **um mau resultado**.', n: 'A litotes: it was a good result.' },
            { s: '**Menos palavras, mais ação.**', n: 'An antithesis.' },
            { s: 'Uma cidade **viva, aberta, justa**.', n: 'A list of three.' },
            { s: 'Não é **pouco**.', n: 'A litotes: it is a lot.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the figure with its example.', pairs: [
            ['pergunta retórica', 'Quem pode dizer-se realmente surpreendido?'],
            ['litotes', 'Não foi um mau resultado.'],
            ['antítese', 'Menos palavras, mais ação.'],
            ['tricolon', 'Uma cidade viva, aberta, justa.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'O que significa *Não foi um mau resultado*?', o: ['Foi um bom resultado.', 'Foi um péssimo resultado.', 'Não houve resultado.'], why: 'A litotes says less to mean more.' },
            { q: 'O que significa *Não é pouco*?', o: ['É muito.', 'É pouquíssimo.', 'É normal.'], why: 'A litotes negates the opposite.' },
            { q: 'Que frase é uma antítese?', o: ['Menos palavras, mais ação.', 'Uma cidade viva, aberta, justa.', 'Quem pode dizer-se surpreendido?'], why: 'Two opposite ideas.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which figure? Sort the sentences.', groups: ['litotes', 'antithesis'], explain: ['groups'], items: [
            { s: 'Não foi um mau resultado.', g: 0, why: 'A litotes.' },
            { s: 'Não é mau.', g: 0, why: 'A litotes.' },
            { s: 'Não é pouco.', g: 0, why: 'A litotes.' },
            { s: 'Menos palavras, mais ação.', g: 1, why: 'An antithesis.' },
            { s: 'Não o tempo, mas a vontade.', g: 1, why: 'An antithesis.' },
            { s: 'Poucos na praça, muitos em casa.', g: 1, why: 'An antithesis.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Menos palavras, ___ ação.', a: ['mais'], why: 'An antithesis.' },
            { q: 'Não foi um ___ resultado. (the opposite of bom)', a: ['mau'], why: 'A litotes.' },
            { q: 'Quem pode dizer-se realmente ___? (surprised)', a: ['surpreendido'], why: 'A rhetorical question.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it as a litotes.', items: [
            { q: 'Foi um bom resultado.', cue: 'Não foi', a: ['Não foi um mau resultado.'], why: 'The litotes negates the opposite.' },
            { q: 'É muito.', cue: 'Não é', a: ['Não é pouco.'], why: 'The litotes negates the opposite.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quem pode dizer-se realmente surpreendido?', why: 'A rhetorical question.' },
            { a: 'Menos palavras, mais ação.', why: 'An antithesis.' },
            { a: 'Não foi um mau resultado.', why: 'A litotes.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um artigo de opinião',
      about: 'Read a commentary and see how the argument is built.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'A biblioteca do bairro', md: 'A câmara decidiu encerrar a biblioteca do bairro. Por um lado, as contas ficam em ordem; por outro, o bairro perde um lugar vivo.\n\nÉ verdade que os empréstimos diminuem há anos. Não se pode negar que os recursos são limitados. Mas o certo é que uma biblioteca não é uma loja: não se mede pelas vendas. Quem pode dizer-se realmente surpreendido se, fechada a biblioteca, os jovens deixarem de ter onde estudar?\n\nPor mais que se diga o contrário, a poupança é modesta: poucos milhares de euros por ano. Não é pouco para um orçamento pequeno, mas não é nada perante o que se perde. Menos empréstimos, certamente; contudo, mais isolamento, mais solidão, menos oportunidades.\n\nPortanto, a pergunta não é se a câmara pode pagá-la, mas se pode dar-se ao luxo de a perder. Uma cidade viva, aberta, justa não fecha os seus lugares de encontro.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A câmara decidiu encerrar a biblioteca.', a: 't', why: '*A câmara decidiu encerrar a biblioteca do bairro.*' },
            { q: 'O autor pensa que a poupança é grande.', a: 'f', why: '*A poupança é modesta.*' },
            { q: 'Os empréstimos diminuem há anos.', a: 't', why: '*Os empréstimos diminuem há anos.*' },
            { q: 'Segundo o autor, uma biblioteca não se mede pelas vendas.', a: 't', why: '*Não é uma loja: não se mede pelas vendas.*' },
            { q: 'O autor propõe uma biblioteca digital.', a: 'ng', why: 'The text does not say.' },
            { q: 'Os jovens deixariam de ter onde estudar.', a: 't', why: '*Os jovens deixarem de ter onde estudar.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Como começa o artigo?', o: ['Com o facto e dois lados.', 'Com uma citação.', 'Com uma história.'], why: '*Por um lado … por outro.*' },
            { q: 'O que concede o autor?', o: ['Os empréstimos diminuem e os recursos são limitados.', 'A biblioteca é inútil.', 'A câmara tem razão.'], why: '*É verdade … não se pode negar.*' },
            { q: 'O que diz a conclusão?', o: ['Uma cidade viva não fecha os lugares de encontro.', 'A câmara deve poupar.', 'A biblioteca deve custar menos.'], why: 'The last sentence.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors of argument.', items: [
            { s: '[Por um lado], as contas ficam em ordem; [por outro], o bairro perde um lugar vivo.', why: '*Por um lado … por outro*.' },
            { s: '[É verdade que] os empréstimos diminuem. Mas [o certo é que] uma biblioteca não é uma loja.', why: 'Concession and refutation.' },
            { s: 'Menos empréstimos, certamente; [contudo], mais isolamento. [Portanto], a pergunta não é se a câmara pode pagá-la.', why: '*Contudo* and *portanto*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Por um lado as contas ficam em ordem; por ___, o bairro perde um lugar vivo.', a: ['outro'], why: '*Por um lado … por outro*.' },
            { q: 'Por mais que se ___ o contrário, a poupança é modesta. (dizer)', a: ['diga'], why: '*Por mais que* + conjuntivo.' },
            { q: 'Quem pode dizer-se realmente ___? (surprised)', a: ['surpreendido'], why: 'The rhetorical question.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O certo é que uma biblioteca não é uma loja.', why: 'A refutation.' },
            { a: 'Uma cidade viva, aberta, justa não fecha os seus lugares de encontro.', why: 'The closing sentence.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'O projeto é ambicioso; ___, custa demasiado.', o: ['contudo', 'com efeito', 'portanto'], why: 'Contrast.' },
      { q: 'Por mais que se ___ o contrário, a cidade é segura.', o: ['diga', 'diz', 'dirá'], why: '*Por mais que* + conjuntivo.' },
      { q: 'O que significa *Não é pouco*?', o: ['É muito.', 'É pouquíssimo.', 'É normal.'], why: 'A litotes.' },
      { q: 'Que expressão introduz uma concessão?', o: ['É verdade que', 'O certo é que', 'Nem por isso'], why: '*É verdade que* concedes a point.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'O ___ é que oferece muitas oportunidades.', a: ['certo'], why: '*O certo é que*.' },
      { q: 'Menos palavras, ___ ação.', a: ['mais'], why: 'An antithesis.' },
      { q: 'Em ___, a proposta é recusada.', a: ['suma'], why: '*Em suma*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its function.', pairs: [
      ['contudo', 'contrast'],
      ['aliás', 'adding a point'],
      ['com efeito', 'confirming'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the expression in brackets.', items: [
      { q: 'O projeto é ambicioso, mas custa demasiado.', cue: 'O projeto é ambicioso; contudo', a: ['O projeto é ambicioso; contudo, custa demasiado.'], why: '*Contudo* replaces *mas*.' },
      { q: 'Foi um bom resultado.', cue: 'Não foi', a: ['Não foi um mau resultado.'], why: 'A litotes.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Por mais que se [diz] o contrário, a cidade é segura.', a: ['diga'], why: '*Por mais que* + conjuntivo.' },
      { s: 'O plano falhou; [contudo], tem de ser mudado.', a: ['portanto', 'por conseguinte'], why: 'The second clause is a conclusion.' },
    ] },
  ],
};
