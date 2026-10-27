// Portuguese C1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Reporting, quoting and summarising',
  goal: 'Report what others say with precision. Learn reporting verbs with nuance, the tenses of indirect speech, the condicional of reported doubt, ways to name a source, and how to summarise a text.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['reported speech', 'sources', 'summary', 'press', 'hedging'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Afirmar, sustentar, admitir',
      about: 'Choose reporting verbs that show attitude.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A press article rarely says only **dizer**. The verb shows the **attitude** of the speaker. **Afirmar** and **declarar** are neutral and formal: **O ministro declarou que o plano está pronto.** **Sustentar** means *to maintain* and suggests an opinion that may be disputed: **Sustenta não saber nada.** **Admitir** means *to admit*: **Admitiu ter errado.** **Sublinhar** means *to stress*: **Sublinhou a gravidade do problema.** **Negar** means *to deny*: **Nega ter participado.** **Lamentar** means *to regret, to condemn*: **Lamentou a decisão.** **Pretender** means *to intend*, not *to pretend*: **Pretende viajar em maio.** For *to pretend*, use **fingir**: **Finge dormir.**' },
          { t: 'table', caption: 'Reporting verbs', explain: ['head', 'col1'], head: ['Verb', 'Meaning', 'Example'], rows: [
            ['afirmar / declarar', 'to state (neutral)', 'O ministro declarou que o plano está pronto.'],
            ['sustentar', 'to maintain', 'Sustenta não saber nada.'],
            ['admitir', 'to admit', 'Admitiu ter errado.'],
            ['sublinhar', 'to stress', 'Sublinhou a gravidade do problema.'],
            ['negar', 'to deny', 'Nega ter participado.'],
            ['lamentar', 'to regret, to condemn', 'Lamentou a decisão.'],
            ['pretender', 'to intend (not to pretend)', 'Pretende viajar em maio.'],
          ] },
          { t: 'tip', art: 'owl', md: 'When the subject of the two verbs is the **same person**, use the **infinitive** (often the **personal** or the **compound** infinitive): **Sustenta não saber nada**, **Admitiu ter errado**, **Nega ter participado**. When the subjects differ, use **que + clause**: **Admitiu que o plano estava errado.** **Pretender** is a **false friend** of *to pretend*: the Portuguese verb for that is **fingir**. In **Brazil**, **afirmar** and **declarar** are used in the same way in the press.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'O ministro **declarou que** o plano está pronto.', n: 'Neutral.' },
            { s: '**Sustenta** não saber nada.', n: 'The same subject: the infinitive.' },
            { s: '**Admitiu** ter errado.', n: 'The compound infinitive.' },
            { s: '**Sublinhou** a gravidade do problema.', n: 'To stress.' },
            { s: '**Pretende** viajar em maio.', n: 'To intend.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
            ['sustentar', 'to maintain'],
            ['admitir', 'to admit'],
            ['negar', 'to deny'],
            ['pretender', 'to intend'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Sustenta ___ saber nada. (not to know)', a: ['não'], why: 'The same subject: *sustenta não saber nada*.' },
            { q: 'Admitiu ter ___. (errar, participle)', a: ['errado'], why: 'The compound infinitive: *ter errado*.' },
            { q: 'Nega ___ participado. (ter)', a: ['ter'], why: '*Negar* + compound infinitive.' },
            { q: '___ a gravidade do problema. (sublinhar, perfeito, ele)', a: ['Sublinhou'], why: '*Sublinhar*.' },
            { q: 'O ministro ___ que o plano está pronto. (declarar, perfeito)', a: ['declarou', 'afirmou'], why: 'A neutral verb.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best verb.', items: [
            { q: '___ a decisão: acha-a injusta.', o: ['Lamentou', 'Admitiu', 'Negou'], why: '*Lamentar* = to condemn, to regret.' },
            { q: '___ viajar em maio e já comprou os bilhetes.', o: ['Pretende', 'Finge', 'Nega'], why: '*Pretender* = to intend.' },
            { q: '___ ter errado: pede desculpa.', o: ['Admitiu', 'Negou', 'Lamentou'], why: '*Admitir* = to admit.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentence with the verb in brackets.', items: [
            { q: 'Errei, diz o Luís.', cue: 'O Luís admite', a: ['O Luís admite ter errado.'], why: 'The same subject: the compound infinitive.' },
            { q: 'Não sei nada, diz a Ana.', cue: 'A Ana sustenta', a: ['A Ana sustenta não saber nada.'], why: 'The same subject: the infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O Luís [finge] viajar em maio e já comprou os bilhetes.', a: ['pretende'], why: '*Pretender* means to intend; *fingir* means to pretend.' },
            { s: 'Admitiu ter [errar].', a: ['errado'], why: 'The participle after *ter*.' },
            { s: 'Sustenta [de não] saber nada.', a: ['não'], why: 'No preposition: *sustenta não saber*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O ministro declarou que o plano está pronto.', why: 'A neutral verb.' },
            { a: 'O Luís admite ter errado.', why: '*Admitir* + compound infinitive.' },
            { a: 'Sublinhou a gravidade do problema.', why: '*Sublinhar*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'O discurso indireto e o condicional',
      about: 'Move the tenses correctly in indirect speech.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In **indirect speech**, if the reporting verb is in the **past**, the tenses move back. The **present** becomes the **imperfeito**: **“Estou cansado”** → **Disse que estava cansado.** The **perfeito** becomes the **mais-que-perfeito composto**: **“Acabei”** → **Disse que tinha acabado.** The **future** becomes the **condicional**: **“Virei amanhã”** → **Disse que viria no dia seguinte.** Time words change too: **hoje** becomes **nesse dia**, **amanhã** becomes **no dia seguinte**, **ontem** becomes **na véspera**, **aqui** becomes **ali**. The **imperative** becomes **para + infinitive**: **“Vem!”** → **Disse-me para ir.** A reported **question** uses **se**: **Perguntou-me se eu ia.**' },
          { t: 'table', caption: 'Indirect speech', explain: ['head', 'col1'], head: ['Direct', 'Indirect'], rows: [
            ['“Estou cansado.”', 'Disse que estava cansado.'],
            ['“Acabei.”', 'Disse que tinha acabado.'],
            ['“Virei amanhã.”', 'Disse que viria no dia seguinte.'],
            ['“Vem aqui!”', 'Disse-me para ir ali.'],
            ['hoje / ontem / amanhã', 'nesse dia / na véspera / no dia seguinte'],
          ] },
          { t: 'tip', art: 'owl', md: 'If the reporting verb is in the **present** (**Diz que está cansado**), the tenses do **not** move. The **condicional** is the Portuguese *future in the past*: **tinha prometido que viria**. In speech, **ia** + infinitive is common: **Disse que ia vir.** The **imperfeito** stays the same in indirect speech: **“Quando era jovem, vivia em Lisboa”** → **Disse que, quando era jovem, vivia em Lisboa.** In **Brazil**, **pedir que** + conjuntivo is also used: **Pediu que eu fosse.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '“Estou cansado.” → Disse que **estava** cansado.', n: 'Present to imperfeito.' },
            { s: '“Acabei.” → Disse que **tinha acabado**.', n: 'Perfeito to mais-que-perfeito composto.' },
            { s: '“Virei amanhã.” → Disse que **viria** no dia seguinte.', n: 'Future to condicional.' },
            { s: '“Vem aqui!” → Disse-me **para ir ali**.', n: 'Imperative and place word.' },
            { s: '“Vens?” → Perguntou-me **se** eu ia.', n: 'A reported question.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the direct tense with the indirect one.', pairs: [
            ['estou', 'estava'],
            ['acabei', 'tinha acabado'],
            ['virei', 'viria'],
            ['amanhã', 'no dia seguinte'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: '“Estou cansado.” → Disse que ___ cansado. (estar)', a: ['estava'], why: 'Present to imperfeito.' },
            { q: '“Acabei.” → Disse que ___ acabado. (ter)', a: ['tinha'], why: 'Perfeito to mais-que-perfeito composto.' },
            { q: '“Virei amanhã.” → Disse que ___ no dia seguinte. (vir, condicional)', a: ['viria'], why: 'Future to condicional.' },
            { q: '“Vem aqui!” → Disse-me ___ ir ali.', a: ['para'], why: 'The imperative becomes *para* + infinitive.' },
            { q: '“Vens?” → Perguntou-me ___ eu ia.', a: ['se'], why: 'A reported question.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: '“Vou a Lisboa.” → Disse que ___ a Lisboa.', o: ['ia', 'vai', 'irá'], why: 'Present to imperfeito.' },
            { q: '“Telefonarei amanhã.” → Disse que ___ no dia seguinte.', o: ['telefonaria', 'telefonava', 'telefonará'], why: 'Future to condicional.' },
            { q: '“Ontem estive em casa.” → Disse que na véspera ___ em casa.', o: ['tinha estado', 'esteve', 'estaria'], why: 'Perfeito to mais-que-perfeito composto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the sentence.', items: [
            { q: '“Virei amanhã.” Disse que', cue: 'Disse que', a: ['Disse que viria no dia seguinte.', 'Disse que ia vir no dia seguinte.'], why: 'Future to condicional.' },
            { q: '“Perdi as chaves.” Disse que', cue: 'Disse que', a: ['Disse que tinha perdido as chaves.'], why: 'Perfeito to mais-que-perfeito composto.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ontem disse que [está] cansado.', a: ['estava'], why: 'The reporting verb is in the past.' },
            { s: 'Disse que [virá] no dia seguinte.', a: ['viria'], why: 'Future to condicional.' },
            { s: 'Perguntou-me [que] eu ia.', a: ['se'], why: 'A reported question uses *se*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Disse que viria no dia seguinte.', why: 'Future to condicional.' },
            { a: 'Perguntou-me se eu ia.', why: 'A reported question.' },
            { a: 'Disse que tinha acabado o trabalho.', why: 'Perfeito to mais-que-perfeito composto.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'As fontes e a cautela',
      about: 'Name a source and show doubt with the condicional.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A journalist names the **source** and shows how sure the news is. To name a source: **segundo**, **de acordo com**, **no dizer de** and **conforme refere**: **Segundo a câmara, as obras acabam em maio.** **De acordo com as primeiras informações, não há feridos.** To show caution: **parece que**, **ao que parece**, **consta que**, **tudo indica que**: **Ao que parece, o presidente vai demitir-se.** The **condicional of reported doubt** is typical of the press: **O presidente teria renunciado** means *the president has reportedly resigned*, and the journalist does not guarantee the news. The same form can be present: **O incêndio seria criminoso.**' },
          { t: 'table', caption: 'Sources and caution', explain: ['head', 'col1'], head: ['Expression', 'Use', 'Example'], rows: [
            ['segundo / de acordo com', 'naming a source', 'Segundo a câmara, as obras acabam em maio.'],
            ['no dizer de', 'according to what someone says', 'No dizer do presidente, o plano está pronto.'],
            ['ao que parece / consta que', 'caution', 'Ao que parece, o presidente vai demitir-se.'],
            ['tudo indica que', 'a strong sign', 'Tudo indica que o prazo será cumprido.'],
            ['condicional', 'reported doubt', 'O presidente teria renunciado.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **condicional of reported doubt** appears in headlines and news: **O ministro teria deixado o cargo.** Do not use it for your own opinion or for a plain fact. **Segundo eu** is wrong: say **na minha opinião** or **a meu ver**, because **segundo** names a source. **Parece que** takes the **indicative**: **Parece que o presidente se demitiu.** **Não parece que** takes the **conjuntivo**: **Não parece que seja verdade.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Segundo** a câmara, as obras acabam em maio.', n: 'Naming a source.' },
            { s: '**De acordo com** as primeiras informações, não há feridos.', n: 'Naming a source.' },
            { s: '**Ao que parece**, o presidente vai demitir-se.', n: 'Caution.' },
            { s: 'O presidente **teria renunciado**.', n: 'Reported doubt.' },
            { s: 'O incêndio **seria** criminoso.', n: 'Reported doubt in the present.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Source or caution? Sort the expressions.', groups: ['source', 'caution'], explain: ['groups'], items: [
            { s: 'Segundo a câmara', g: 0, why: 'A source.' },
            { s: 'De acordo com as primeiras informações', g: 0, why: 'A source.' },
            { s: 'No dizer do presidente', g: 0, why: 'A source.' },
            { s: 'Ao que parece', g: 1, why: 'Caution.' },
            { s: 'Consta que', g: 1, why: 'Caution.' },
            { s: 'Tudo indica que', g: 1, why: 'Caution.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: '___ a câmara, as obras acabam em maio.', a: ['Segundo'], why: 'Naming a source.' },
            { q: 'De ___ com as primeiras informações, não há feridos.', a: ['acordo'], why: '*De acordo com*.' },
            { q: 'Ao que ___, o presidente vai demitir-se.', a: ['parece'], why: '*Ao que parece*.' },
            { q: 'O presidente ___ renunciado. (condicional, reported doubt)', a: ['teria'], why: 'Reported doubt.' },
            { q: 'Não parece que ___ verdade. (ser, conjuntivo)', a: ['seja'], why: '*Não parece que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best form.', items: [
            { q: 'O ministro ___ deixado o cargo, mas não está confirmado.', o: ['teria', 'tem', 'tinha'], why: 'Reported doubt.' },
            { q: 'Parece que o plano ___ pronto.', o: ['está', 'esteja', 'estivesse'], why: '*Parece que* + indicative.' },
            { q: '___ as primeiras informações, não há feridos.', o: ['De acordo com', 'De acordo a', 'Em acordo de'], why: '*De acordo com*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report the news with caution.', items: [
            { q: 'O presidente renunciou. (reported doubt)', cue: 'O presidente', a: ['O presidente teria renunciado.'], why: 'Condicional composto.' },
            { q: 'O incêndio é criminoso. (reported doubt)', cue: 'O incêndio', a: ['O incêndio seria criminoso.'], why: 'Condicional of reported doubt.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Não parece que [é] verdade.', a: ['seja'], why: '*Não parece que* + conjuntivo.' },
            { s: '[Segundo eu], o plano está errado. (in my opinion)', a: ['Na minha opinião', 'A meu ver'], why: '*Segundo* names a source, not yourself.' },
            { s: 'O ministro [deixou] o cargo, mas não está confirmado. (reported doubt)', a: ['teria deixado'], why: 'The news is not confirmed.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Segundo a câmara, as obras acabam em maio.', why: 'Naming a source.' },
            { a: 'O presidente teria renunciado ontem.', why: 'Reported doubt.' },
            { a: 'Ao que parece, o presidente vai demitir-se.', why: 'Caution.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um artigo e o seu resumo',
      about: 'Read a press article and its summary.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'A ponte encerrada', md: 'ARTIGO\n\nA ponte sobre o rio ficará encerrada até setembro. Foi anunciado ontem pelo presidente da câmara, que declarou ter recebido um relatório dos técnicos. Segundo o documento, algumas vigas apresentam sinais de cedência. O presidente sublinhou que não há perigo imediato, mas admitiu que as obras serão longas.\n\nA comissão de moradores nega que as obras fossem necessárias e sustenta que o encerramento prejudicará o comércio. De acordo com as primeiras estimativas, o trânsito teria já aumentado trinta por cento nas ruas vizinhas. Ao que parece, o vereador das obras públicas ter-se-ia demitido, mas a notícia não foi confirmada.\n\nRESUMO\n\nO presidente da câmara anunciou o encerramento da ponte até setembro devido à cedência de algumas vigas. Os moradores contestam a necessidade das obras e temem pelo comércio. Permanece incerta a notícia de uma demissão na vereação.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A ponte ficará encerrada até setembro.', a: 't', why: '*Ficará encerrada até setembro.*' },
            { q: 'O presidente diz que há um perigo imediato.', a: 'f', why: '*Não há perigo imediato.*' },
            { q: 'A comissão de moradores acha que as obras eram necessárias.', a: 'f', why: '*Nega que as obras fossem necessárias.*' },
            { q: 'A demissão do vereador está confirmada.', a: 'f', why: '*A notícia não foi confirmada.*' },
            { q: 'O trânsito nas ruas vizinhas teria aumentado trinta por cento.', a: 't', why: '*De acordo com as primeiras estimativas.*' },
            { q: 'A ponte foi construída em 1950.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Porque está a ponte encerrada?', o: ['Algumas vigas apresentam sinais de cedência.', 'Há um concurso.', 'Caiu neve.'], why: '*Algumas vigas apresentam sinais de cedência.*' },
            { q: 'O que admite o presidente?', o: ['As obras serão longas.', 'Errou.', 'Demite-se.'], why: '*Admitiu que as obras serão longas.*' },
            { q: 'Como apresenta o resumo a demissão?', o: ['Como uma notícia incerta.', 'Como um facto.', 'Não a refere.'], why: '*Permanece incerta a notícia de uma demissão.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reporting verbs and the sources.', items: [
            { s: 'O presidente [declarou] ter recebido um relatório. [Segundo] o documento, algumas vigas apresentam sinais de cedência.', why: 'A reporting verb and a source.' },
            { s: 'O presidente [sublinhou] que não há perigo, mas [admitiu] que as obras serão longas.', why: 'Two reporting verbs.' },
            { s: 'A comissão [nega] que as obras fossem necessárias e [sustenta] que o encerramento prejudicará o comércio.', why: 'Two reporting verbs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O presidente ___ ter recebido um relatório. (declarar, perfeito)', a: ['declarou'], why: '*Declarar* + infinitive.' },
            { q: '___ as primeiras estimativas, o trânsito teria aumentado.', a: ['De acordo com'], why: '*De acordo com*.' },
            { q: 'O vereador ter-se-___ demitido, mas não está confirmado. (condicional)', a: ['ia'], why: 'Reported doubt with mesoclisis.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O presidente anunciou o encerramento da ponte até setembro.', why: 'The summary opens with the main fact.' },
            { a: 'Os moradores contestam a necessidade das obras.', why: 'The summary uses a nominal style.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Sustenta ___ saber nada.', o: ['não', 'de não', 'a não'], why: 'The same subject: the infinitive.' },
      { q: '“Estou cansado.” → Disse que ___ cansado.', o: ['estava', 'está', 'estará'], why: 'Present to imperfeito.' },
      { q: '“Virei amanhã.” → Disse que ___ no dia seguinte.', o: ['viria', 'virá', 'veio'], why: 'Future to condicional.' },
      { q: 'O ministro ___ deixado o cargo, mas não está confirmado.', o: ['teria', 'tem', 'tinha'], why: 'Reported doubt.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Admitiu ter ___. (errar, participle)', a: ['errado'], why: 'The compound infinitive.' },
      { q: 'Perguntou-me ___ eu ia.', a: ['se'], why: 'A reported question.' },
      { q: 'Ao que ___, o presidente vai demitir-se.', a: ['parece'], why: '*Ao que parece*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the verb with its meaning.', pairs: [
      ['sustentar', 'to maintain'],
      ['negar', 'to deny'],
      ['pretender', 'to intend'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Report the sentence.', items: [
      { q: '“Perdi as chaves.” Disse que', cue: 'Disse que', a: ['Disse que tinha perdido as chaves.'], why: 'Perfeito to mais-que-perfeito composto.' },
      { q: 'O presidente renunciou. (reported doubt)', cue: 'O presidente', a: ['O presidente teria renunciado.'], why: 'Condicional composto.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Disse que [virá] no dia seguinte.', a: ['viria'], why: 'Future to condicional.' },
      { s: 'Não parece que [é] verdade.', a: ['seja'], why: '*Não parece que* + conjuntivo.' },
    ] },
  ],
};
