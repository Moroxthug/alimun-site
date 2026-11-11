// Portuguese B1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Wishes and polite requests',
  goal: 'Make polite requests, give advice and talk about wishes. Learn the condicional, regular and irregular, and how it is used for politeness, advice and the future seen from the past.',
  art: 'churro',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['condicional', 'polite requests', 'advice', 'wishes', 'formal email'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Gostaria de, tomaria',
      about: 'Form the condicional of regular verbs and use it for wishes.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'The **condicional** says what you would do or would like. It is also a polite way to ask for things. For regular verbs, add the endings **-ia, -ias, -ia, -íamos, -iam** to the **infinitive**: *falaria, falarias, falaria, falaríamos, falariam*. *Comer* gives *comeria*, *abrir* gives *abriria*, and *gostar* gives *gostaria*.' },
          { t: 'table', caption: 'The condicional', quiz: true, head: ['', 'falar', 'comer', 'abrir'], rows: [
            ['eu', 'falaria', 'comeria', 'abriria'],
            ['tu', 'falarias', 'comerias', 'abririas'],
            ['ele / ela / você', 'falaria', 'comeria', 'abriria'],
            ['nós', 'falaríamos', 'comeríamos', 'abriríamos'],
            ['eles / elas / vocês', 'falariam', 'comeriam', 'abririam'],
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the accent in the **nós** form: **falaríamos, comeríamos**. The **eu** and **ele** forms are the same. In speech, people often use the **imperfeito** to be polite: *Queria um café. Gostava de saber o preço.* The condicional is a little more formal: *Gostaria de saber o preço.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Gostaria de** viajar mais.', n: '*Gostar* → *gostaria*: a wish.' },
            { s: '**Tomaria** um café, se faz favor.', n: 'A polite order.' },
            { s: 'Nós **ficaríamos** mais um dia.', n: '*Ficar* → *ficaríamos*.' },
            { s: 'O Marco **compraria** uma casa no campo.', n: '*Comprar* → *compraria*.' },
            { s: 'Eles **comprariam** uma casa no campo.', n: 'What they would like to do.' },
          ] },
          { t: 'dialogue', title: 'No café', lines: [
            { who: 'Ana', s: 'Bom dia. Tomaria um café com leite, se faz favor.' },
            { who: 'Empregado', s: 'Com certeza. Gostaria também de alguma coisa para comer?' },
            { who: 'Ana', s: 'Comeria uma torrada, obrigada.' },
            { who: 'Empregado', s: 'Temos com manteiga ou com queijo.' },
            { who: 'Ana', s: 'Então prefiro com manteiga.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the condicional of abrir.', verb: 'abrir', tense: 'condicional', rows: [
            ['eu', 'abriria'],
            ['tu', 'abririas'],
            ['ele / ela / você', 'abriria'],
            ['nós', 'abriríamos'],
            ['eles / elas / vocês', 'abririam'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the condicional.', items: [
            { q: 'Eu ___ de viajar mais. (gostar)', a: ['gostaria'], why: '*Gostar* → *gostaria*.' },
            { q: 'Tu ___ um café? (tomar)', a: ['tomarias'], why: '*Tomar* → *tomarias*.' },
            { q: 'Nós ___ em Portugal um mês. (ficar)', a: ['ficaríamos'], why: '*Ficar* → *ficaríamos*, with an accent.' },
            { q: 'Eles ___ uma casa no campo. (comprar)', a: ['comprariam'], why: '*Comprar* → *comprariam*.' },
            { q: 'O Marco ___ a janela, mas faz frio. (abrir)', a: ['abriria'], why: '*Abrir* → *abriria*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Eu [falariá] com ele.', a: ['falaria'], why: 'No accent on *falaria*.' },
            { s: 'Nós [falariamos] com ele.', a: ['falaríamos'], why: 'With an accent: *falaríamos*.' },
            { s: 'Eles [falaria] com ele.', a: ['falariam'], why: '*Eles falariam*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Gostaria ___ viajar mais.', o: ['de', 'a', 'em'], why: '*Gostar de*.' },
            { q: 'Nós ___ ficar mais um dia.', o: ['ficaríamos', 'ficaremos', 'ficámos'], why: 'A wish: the condicional *ficaríamos*.' },
            { q: 'Tu ___ um café comigo?', o: ['tomarias', 'tomarás', 'tomaste'], why: 'A polite invitation: *tomarias*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Gostaria de viajar mais.', why: '*Gostaria de* + infinitive.' },
            { a: 'Tomaria um café com leite, se faz favor.', why: 'A polite order.' },
            { a: 'Eles comprariam uma casa no campo.', why: '*Comprariam* = they would buy.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Podia ajudar-me?',
      about: 'Learn the irregular stems and make polite requests.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The verbs that are irregular in the future have the same stem in the condicional. The endings stay the same: **-ia, -ias, -ia, -íamos, -iam**. The most useful forms are **seria** (I would be), **teria** (I would have), **iria** (I would go), **faria** (I would do), **diria** (I would say), **poderia** (I could) and **gostaria** (I would like).' },
          { t: 'table', caption: 'Irregular stems', explain: ['head', 'col3'], head: ['Infinitive', 'eu', 'nós', 'Meaning'], rows: [
            ['ser', 'seria', 'seríamos', 'to be'],
            ['ter', 'teria', 'teríamos', 'to have'],
            ['ir', 'iria', 'iríamos', 'to go'],
            ['fazer', 'faria', 'faríamos', 'to do'],
            ['dizer', 'diria', 'diríamos', 'to say'],
            ['vir', 'viria', 'viríamos', 'to come'],
            ['ver', 'veria', 'veríamos', 'to see'],
            ['pôr', 'poria', 'poríamos', 'to put'],
          ] },
          { t: 'tip', art: 'owl', md: 'To ask politely, use **poder** in the condicional or the imperfeito: **Podia ajudar-me?** or **Poderia ajudar-me?** (Could you help me?). Another polite form is **Importava-se de** + infinitive: *Importava-se de abrir a janela?* (Would you mind opening the window?). A very polite offer is **Se não se importa …** (If you do not mind).' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Podia** ajudar-me com esta mala?', n: 'A polite request with the imperfeito.' },
            { s: '**Poderia** dizer-me onde é a estação?', n: 'A more formal request with the condicional.' },
            { s: '**Importava-se de** abrir a janela?', n: '*Importar-se de* + infinitive.' },
            { s: '**Queria** reservar uma mesa para dois.', n: '*Queria* is the polite *quero*.' },
            { s: '**Teria** um minuto para mim?', n: '*Ter* → *teria*.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the condicional of fazer.', verb: 'fazer', tense: 'condicional', rows: [
            ['eu', 'faria'],
            ['tu', 'farias'],
            ['ele / ela / você', 'faria'],
            ['nós', 'faríamos'],
            ['eles / elas / vocês', 'fariam'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the condicional.', items: [
            { q: 'Eu ___ isso por ti. (fazer)', a: ['faria'], why: '*Eu faria*.' },
            { q: 'Ele ___ a verdade. (dizer)', a: ['diria'], why: '*Ele diria*.' },
            { q: 'Nós ___ ao cinema. (ir)', a: ['iríamos'], why: '*Nós iríamos*.' },
            { q: 'Eles ___ mais tempo. (ter)', a: ['teriam'], why: '*Eles teriam*.' },
            { q: 'Eu ___ contente. (ser)', a: ['seria'], why: '*Eu seria*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the request more polite.', items: [
            { q: 'Pode abrir a janela?', a: ['Poderia abrir a janela?', 'Podia abrir a janela?'], why: '*Pode* → *poderia* or *podia*.' },
            { q: 'Quero um café.', a: ['Queria um café.', 'Gostaria de um café.'], why: '*Quero* → *queria* or *gostaria de*.' },
            { q: 'Dá-me o seu número?', a: ['Dava-me o seu número?', 'Poderia dar-me o seu número?'], why: 'The imperfeito or the condicional is polite.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the most polite form.', items: [
            { q: '___ dizer-me onde é a estação? (to a stranger)', o: ['Poderia', 'Pode', 'Podes'], why: 'With a stranger, use the condicional: *Poderia*.' },
            { q: '___ de abrir a janela? (to a friend)', o: ['Importavas-te', 'Importas-te', 'Importaste-te'], why: '*Importavas-te de* is polite.' },
            { q: '___ uma mesa para dois, se faz favor.', o: ['Queria', 'Quero', 'Querer'], why: '*Queria* is the polite form.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Poderia dizer-me onde é a estação?', why: '*Poderia* + infinitive with the pronoun.' },
            { a: 'Importava-se de abrir a janela?', why: '*Importava-se de* + infinitive.' },
            { a: 'Queria reservar uma mesa para dois.', why: '*Queria* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'No teu lugar',
      about: 'Give advice and talk about the future seen from the past.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The condicional is the natural way to give **advice**. Say **no teu lugar** (in your place) and use the condicional: *No teu lugar, eu aceitaria.* You can also say **Era melhor** + infinitive: *Era melhor esperar.* Or use **devias** or **deverias**: *Devias falar com ele.* The condicional also gives the **future seen from the past**: *Ele disse que chegaria às oito. Prometeu que ligaria.*' },
          { t: 'table', caption: 'Ways to give advice', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['no teu lugar + condicional', 'No teu lugar, eu aceitaria.'],
            ['devias / deverias + infinitive', 'Devias falar com ele.'],
            ['podias + infinitive', 'Podias voltar ao fim de semana.'],
            ['era melhor + infinitive', 'Era melhor esperar.'],
            ['seria bom + infinitive', 'Seria bom falar com a tua mãe.'],
          ] },
          { t: 'tip', art: 'owl', md: 'To report what someone promised or planned in the past, use the condicional: **Disse que viria. Prometeu que ligaria.** In speech, many people use the imperfeito instead: *Disse que vinha.* The condicional is the written, careful form.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'No teu lugar, eu **aceitaria** o emprego.', n: '*No teu lugar* + condicional.' },
            { s: '**Devias** falar com ele.', n: 'Advice.' },
            { s: '**Seria bom** falar com a tua mãe.', n: 'A suggestion.' },
            { s: 'Ele disse que **chegaria** às oito.', n: 'The future seen from the past.' },
            { s: 'Prometeu que **ligaria** no dia seguinte.', n: 'A promise reported.' },
          ] },
          { t: 'dialogue', title: 'Um conselho', lines: [
            { who: 'Pedro', s: 'Não sei se aceito o novo emprego.' },
            { who: 'Ana', s: 'No teu lugar, eu aceitaria. O ordenado é mais alto.' },
            { who: 'Pedro', s: 'Mas teria de mudar de cidade.' },
            { who: 'Ana', s: 'Poderias voltar ao fim de semana. Seria bom falar com a tua mãe.' },
            { who: 'Pedro', s: 'Tens razão. Gostaria de saber a opinião dela.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'No teu lugar, eu ___ o emprego. (aceitar)', a: ['aceitaria'], why: '*No teu lugar* + condicional.' },
            { q: 'Tu ___ falar com ele. (dever, softer)', a: ['deverias', 'devias'], why: '*Devias* or *deverias*.' },
            { q: '___ bom falar com a tua mãe. (ser)', a: ['Seria'], why: '*Seria bom* + infinitive.' },
            { q: 'Ele disse que ___ às oito. (chegar)', a: ['chegaria'], why: 'The future seen from the past: *chegaria*.' },
            { q: 'Prometeu que ___ no dia seguinte. (ligar)', a: ['ligaria'], why: '*Ligaria*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'No teu lugar, eu ___ o emprego.', o: ['aceitaria', 'aceito', 'aceitei'], why: '*No teu lugar* + condicional.' },
            { q: 'Ele disse que ___ às oito.', o: ['chegaria', 'chegou', 'chegue'], why: 'A reported plan: the condicional.' },
            { q: 'Estás cansado: ___ descansar.', o: ['devias', 'deves ter', 'deveste'], why: 'Advice: *devias*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the order into friendly advice.', items: [
            { q: 'Tens de dormir mais.', a: ['Devias dormir mais.', 'Deverias dormir mais.'], why: '*Tens de* → *devias* is advice.' },
            { q: 'Chama o médico.', a: ['Devias chamar o médico.', 'Podias chamar o médico.'], why: 'Advice with *devias* or *podias*.' },
            { q: 'Aceita o emprego.', a: ['No teu lugar, aceitaria o emprego.', 'No teu lugar, eu aceitaria o emprego.'], why: '*No teu lugar* + condicional.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the problem with the advice.', pairs: [
            ['Tenho dor de cabeça.', 'Devias descansar um pouco.'],
            ['Não tenho tempo para cozinhar.', 'Podias comprar uma pizza.'],
            ['O comboio parte cedo.', 'Era melhor sair já.'],
            ['Não sei se aceito.', 'No teu lugar, aceitaria.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'No teu lugar, eu aceitaria o emprego.', why: '*No teu lugar* + condicional.' },
            { a: 'Seria bom falar com a tua mãe.', why: '*Seria bom* + infinitive.' },
            { a: 'Ele disse que chegaria às oito.', why: 'The future seen from the past.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Estás cansado: [devo] descansar.', a: ['devias'], why: 'Advice to *tu*: *devias*.' },
            { s: 'No teu lugar, eu [aceito] o emprego.', a: ['aceitaria'], why: '*No teu lugar* needs the condicional.' },
            { s: 'Ele disse que [chega] às oito.', a: ['chegaria'], why: 'A reported plan: the condicional.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um pedido de informações',
      about: 'Read a polite e-mail and its answer.',
      art: 'churro',
      spreads: [
        [
          { t: 'reading', title: 'O pedido', md: '**Assunto:** Informações sobre o curso de fotografia\n\nExmos. Senhores,\n\nChamo-me Elena Duarte e gostaria de me inscrever no curso de fotografia para principiantes. Poderiam informar-me quando começa o próximo curso e quanto custa? Gostaria também de saber se seria possível frequentar as aulas à noite, porque durante o dia trabalho. Precisaria ainda de saber se é necessário levar uma máquina fotográfica ou se a escola disponibiliza uma.\n\nAguardo a vossa resposta.\n\nCom os melhores cumprimentos,\nElena Duarte\nelena.duarte@example.com' },
          { t: 'reading', title: 'A resposta', md: 'Exma. Senhora,\n\nagradecemos o seu contacto. O próximo curso começa a 12 de novembro e dura oito semanas. As aulas realizam-se à terça e à quinta, das 18h às 20h. O preço é de 180 euros. A escola disponibiliza máquinas fotográficas, mas se tem uma, pode trazê-la.\n\nFicamos ao dispor para qualquer esclarecimento.\n\nCumprimentos,\nA secretaria' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A Elena gostaria de se inscrever num curso de fotografia.', a: 't', why: '*Gostaria de me inscrever no curso de fotografia.*' },
            { q: 'A Elena trabalha de dia.', a: 't', why: '*Durante o dia trabalho.*' },
            { q: 'O curso dura seis semanas.', a: 'f', why: 'It lasts eight weeks: *dura oito semanas*.' },
            { q: 'As aulas são noutra cidade.', a: 'ng', why: 'The place of the lessons is not mentioned.' },
            { q: 'A escola disponibiliza máquinas fotográficas.', a: 't', why: '*A escola disponibiliza máquinas fotográficas.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quando são as aulas?', o: ['À terça e à quinta, à noite.', 'Ao sábado de manhã.', 'Todos os dias.'], why: '*À terça e à quinta, das 18h às 20h.*' },
            { q: 'Quanto custa o curso?', o: ['180 euros.', '120 euros.', '80 euros.'], why: '*O preço é de 180 euros.*' },
            { q: 'O que pode trazer a Elena?', o: ['A sua máquina fotográfica.', 'Um computador.', 'Um livro.'], why: '*Se tem uma, pode trazê-la.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the condicional.', items: [
            { s: 'Chamo-me Elena e [gostaria] de me inscrever; [poderiam] informar-me quando começa?', why: '*Gostaria* and *poderiam* are in the condicional.' },
            { s: 'Gostaria de saber se [seria] possível frequentar as aulas à noite.', why: '*Seria* is in the condicional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word from the e-mail.', items: [
            { q: 'Exmos. Senhores, ___-me Elena Duarte. (chamar-se)', a: ['Chamo'], why: 'The opening: *Chamo-me*.' },
            { q: 'Aguardo a vossa ___.', a: ['resposta'], why: 'A formal closing: *a vossa resposta*.' },
            { q: 'A escola ___ máquinas fotográficas. (disponibilizar)', a: ['disponibiliza'], why: '*A escola disponibiliza*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Gostaria de me inscrever no curso de fotografia.', why: '*Gostaria de* + infinitive with the pronoun.' },
            { a: 'Poderiam informar-me quando começa o curso?', why: '*Poderiam* + infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Nós ___ ficar mais um dia.', o: ['ficaríamos', 'ficaremos', 'ficámos'], why: 'A wish: the condicional.' },
      { q: '___ dizer-me onde é a estação? (to a stranger)', o: ['Poderia', 'Pode', 'Podes'], why: 'Polite: the condicional.' },
      { q: 'No teu lugar, eu ___ o emprego.', o: ['aceitaria', 'aceito', 'aceitei'], why: '*No teu lugar* + condicional.' },
      { q: 'Ele disse que ___ às oito.', o: ['chegaria', 'chegou', 'chegue'], why: 'A reported plan: the condicional.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the condicional.', items: [
      { q: 'Eu ___ de viajar mais. (gostar)', a: ['gostaria'], why: '*Gostar* → *gostaria*.' },
      { q: 'Eu ___ isso por ti. (fazer)', a: ['faria'], why: '*Fazer* → *faria*.' },
      { q: 'Eles ___ mais tempo. (ter)', a: ['teriam'], why: '*Ter* → *teriam*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the problem with the advice.', pairs: [
      ['Tenho dor de cabeça.', 'Devias descansar um pouco.'],
      ['O comboio parte cedo.', 'Era melhor sair já.'],
      ['Não sei se aceito.', 'No teu lugar, aceitaria.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Make it more polite.', items: [
      { q: 'Pode abrir a janela?', a: ['Poderia abrir a janela?', 'Podia abrir a janela?'], why: '*Pode* → *poderia* or *podia*.' },
      { q: 'Quero um café.', a: ['Queria um café.', 'Gostaria de um café.'], why: '*Quero* → *queria*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Nós [falariamos] com ele.', a: ['falaríamos'], why: 'With an accent: *falaríamos*.' },
      { s: 'Ele disse que [chega] às oito.', a: ['chegaria'], why: 'A reported plan: the condicional.' },
    ] },
  ],
};
