// Portuguese C2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Style and rhythm',
  goal: 'Write sentences that are varied, cohesive and well paced. Learn to vary sentence length, link ideas without repeating words, and use punctuation for effect.',
  art: 'nata',
  tags: { skills: ['writing', 'reading'], topics: ['sentence variety', 'parallel structure', 'cohesion', 'punctuation', 'rhythm'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Frases curtas, frases longas',
      about: 'Vary the length and shape of your sentences.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'A page where every sentence has the same length reads like a drum. Good writers **vary** their sentences. A **short sentence** hits hard: *Ninguém respondeu.* A **long periodic sentence** builds slowly and holds the main idea until the end: *Depois de meses de dúvidas, de conversas interrompidas e de decisões adiadas, a empresa decidiu finalmente fechar.* A **medium sentence** carries information without strain. The art is the mix: after a long sentence, a short one gives the reader air.' },
          { t: 'examples', items: [
            { s: '**Ninguém respondeu.**', n: 'Short: silence, tension, impact.' },
            { s: 'Depois de meses de dúvidas, de conversas interrompidas e de decisões adiadas, **a empresa decidiu finalmente fechar**.', n: 'Long and periodic: the main clause comes last.' },
            { s: 'Chegou tarde. Estava cansado e, pior ainda, tinha perdido a chave.', n: 'A short sentence followed by a medium one.' },
          ] },
        ],
        [
          { t: 'text', md: '**Parallel structure** (*paralelismo*) gives balance: items in a list have the same grammatical form. Weak: *Gosta de ler, de escrever e viajar.* Better: *Gosta de ler, de escrever e de viajar.* Weak: *O curso é rápido, barato e com bons professores.* Better: *O curso é rápido, barato e bem orientado.* Balance also works between two clauses: *Quanto mais se lê, mais se aprende.* When structures match, the reader hears the rhythm and follows the idea without effort.' },
          { t: 'tip', art: 'nata', md: 'Read your paragraph **aloud**. If you run out of breath, the sentence is probably too long. If it sounds like a list of short beats, join two of them. Your ear is a good editor.' },
          { t: 'ex', kind: 'transform', h: 'Make the structure parallel, using the words given.', items: [
            { q: 'Gosta de ler, de escrever e viajar.', cue: 'Gosta de ler, de escrever e de', a: ['Gosta de ler, de escrever e de viajar.'], why: 'Each item has the same form: *de* + infinitive.' },
            { q: 'O curso é rápido, barato e com bons professores.', cue: 'O curso é rápido, barato e', a: ['O curso é rápido, barato e bem orientado.', 'O curso é rápido, barato e bem organizado.'], why: 'Three adjectives or adjective phrases of the same kind.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: 'Which sentence has parallel structure?', o: ['Prefere cozinhar, passear e dormir cedo.', 'Prefere cozinhar, a passear e dormir cedo.', 'Prefere cozinhar, passear e a dormir cedo.'], why: 'All three items are infinitives.' },
            { q: 'Which sentence best creates impact after a long paragraph?', o: ['Silêncio.', 'Houve, naquele momento, um silêncio longo e pesado que se estendeu por toda a sala.', 'Fez-se silêncio por algum tempo.'], why: 'A one-word sentence marks a turning point.' },
            { q: 'Which balanced sentence is correct?', o: ['Quanto mais se lê, mais se aprende.', 'Quanto mais se lê, aprende-se mais.', 'Mais se lê, quanto mais se aprende.'], why: '*Quanto mais… mais…* is a balanced pair.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Short, medium or long?', groups: ['short', 'long'], explain: ['groups'], items: [
            { s: 'Ninguém respondeu.', g: 0, why: 'Two words.' },
            { s: 'Depois de meses de dúvidas, de conversas interrompidas e de decisões adiadas, a empresa decidiu fechar.', g: 1, why: 'A long periodic sentence.' },
            { s: 'Estava frio.', g: 0, why: 'Three words.' },
            { s: 'Embora ninguém o tivesse dito, todos sabiam que a reunião, marcada para as nove, não acabaria bem.', g: 1, why: 'Long, with an inserted clause.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Coesão sem repetição',
      about: 'Link ideas without repeating the same words.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To avoid repeating a noun, writers use **reference words**. **Este último** and **aquele** point to the last-named and first-named person or thing: *A Ana e a Rita visitaram a Sofia; esta última estava doente.* **O primeiro… o segundo** order two items: *Há dois problemas: o primeiro é o preço; o segundo, o prazo.* **O que** sums up a whole clause: *Chegou tarde, o que irritou todos.* **Tal** and **isso** point back: *Tal decisão foi criticada.* **Nominal resumption** picks up an earlier idea with a noun: *O governo aprovou a lei. Esta medida divide a opinião pública.*' },
          { t: 'table', caption: 'Reference and linking words', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['este último / aquele', 'last-named / first-named', 'Falaram o João e o Rui; este último concordou.'],
            ['o primeiro… o segundo', 'orders two items', 'O primeiro é o preço; o segundo, o prazo.'],
            ['o que', 'sums up the whole clause', 'Chegou tarde, o que irritou todos.'],
            ['tal', 'points back to the earlier idea', 'Tal decisão foi criticada.'],
            ['nominal resumption', 'replaces a clause with a noun', 'O governo aprovou a lei. Esta medida divide a opinião.'],
          ] },
        ],
        [
          { t: 'text', md: '**Ellipsis** (*elipse*) leaves out a word that the reader can supply: *A Ana prefere chá; o Paulo, café.* (the verb *prefere* is left out in the second part). Use it for elegance, not for puzzles. Another way to avoid repetition is to **change the grammatical form**: *Ele decidiu partir. A decisão surpreendeu todos.* Here the verb became a noun. This links two sentences without saying *ele decidiu* again.' },
          { t: 'tip', art: 'cactus', md: 'Do not use *este último* with more than two items, and make sure it is clear which one you mean. If in doubt, repeat the noun: a repeated word is better than a confusing reference.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best linking word.', items: [
            { q: 'A Marta e a Beatriz falaram com a diretora; ___ estava de partida.', o: ['esta última', 'aquela primeira', 'aquelas'], why: '*Esta última* refers to the last-named person.' },
            { q: 'O comboio chegou com atraso, ___ irritou os passageiros.', o: ['o que', 'que o', 'o qual'], why: '*O que* sums up the whole clause.' },
            { q: 'Há dois problemas: o primeiro é o preço; ___ , o prazo.', o: ['o segundo', 'o seguinte', 'o último'], why: '*O primeiro… o segundo*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the second sentence with a noun, using the words given.', items: [
            { q: 'Ele decidiu partir. Ele decidiu partir surpreendeu todos.', cue: 'Ele decidiu partir. A decisão', a: ['Ele decidiu partir. A decisão surpreendeu todos.'], why: 'Verb to noun links two sentences without repeating the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the best word.', items: [
            { q: 'Falaram o João e o Rui; este ___ concordou.', a: ['último'], why: '*Este último*.' },
            { q: 'A Ana prefere chá; o Paulo, ___. (coffee)', a: ['café'], why: 'Ellipsis: the verb *prefere* is understood.' },
            { q: 'O governo aprovou a lei. Esta ___ divide a opinião pública.', a: ['medida'], why: 'Nominal resumption.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which device is used?', groups: ['reference word', 'ellipsis'], explain: ['groups'], items: [
            { s: 'Falaram o João e o Rui; este último concordou.', g: 0, why: '*Este último*.' },
            { s: 'A Ana prefere chá; o Paulo, café.', g: 1, why: 'The verb is left out.' },
            { s: 'Chegou tarde, o que irritou todos.', g: 0, why: '*O que* sums up the clause.' },
            { s: 'Uns gostaram do filme; outros, não.', g: 1, why: 'The verb *gostaram* is left out.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A pontuação como efeito',
      about: 'Use the semicolon, colon, dash and brackets with purpose.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Punctuation is the **music** of a sentence. The **ponto e vírgula** (;) joins two closely linked sentences: *A cidade é bonita; o clima, porém, é difícil.* The **dois pontos** (:) introduce an explanation, a list or a quotation: *Só havia uma solução: partir.* The **travessão** (—) adds an aside or a sudden turn: *A casa — velha e húmida — estava à venda.* **Parênteses** hold a side remark that can be skipped: *O museu (aberto desde 1990) é gratuito.* **Aspas angulares** («…») are the standard quotation marks in Portugal: *Disse-me: «Volto já.»*' },
          { t: 'table', caption: 'Punctuation and its effect', explain: ['head', 'col0'], head: ['Mark', 'Effect', 'Example'], rows: [
            [';', 'joins two linked ideas', 'A cidade é bonita; o clima, porém, é difícil.'],
            [':', 'introduces an explanation or list', 'Só havia uma solução: partir.'],
            ['—', 'aside or sudden turn', 'A casa — velha e húmida — estava à venda.'],
            ['( )', 'side remark, can be skipped', 'O museu (aberto desde 1990) é gratuito.'],
            ['« »', 'quotation marks in Portugal', 'Disse-me: «Volto já.»'],
          ] },
        ],
        [
          { t: 'text', md: 'A single **comma** can change the meaning. *Vamos comer, crianças!* invites the children to eat; *Vamos comer crianças!* suggests something terrible. *Não, quero ir* refuses and then says *I want to go*; *Não quero ir* says *I do not want to go*. The comma before a **non-restrictive clause** adds extra information: *Os alunos, que estudaram, passaram.* (all of them studied and passed). Without commas, the clause restricts: *Os alunos que estudaram passaram.* (only those who studied passed).' },
          { t: 'tip', art: 'owl', md: 'Do not use too many dashes or semicolons. One striking mark per paragraph is enough. If every sentence has a dash, none of them stands out.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct punctuation.', items: [
            { q: 'Qual frase convida as crianças a comer?', o: ['Vamos comer, crianças!', 'Vamos comer crianças!', 'Vamos, comer crianças!'], why: 'The comma marks the vocative.' },
            { q: 'Qual frase diz que só alguns alunos passaram?', o: ['Os alunos que estudaram passaram.', 'Os alunos, que estudaram, passaram.', 'Os alunos que, estudaram passaram.'], why: 'Without commas, the clause restricts.' },
            { q: 'Qual é a pontuação correta para uma explicação?', o: ['Só havia uma solução: partir.', 'Só havia uma solução; partir.', 'Só havia uma solução — partir —.'], why: 'The colon introduces an explanation.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Add punctuation, using the words given.', items: [
            { q: 'A cidade é bonita o clima porém é difícil', cue: 'A cidade é bonita;', a: ['A cidade é bonita; o clima, porém, é difícil.'], why: 'A semicolon joins the linked ideas.' },
            { q: 'Só havia uma solução partir', cue: 'Só havia uma solução:', a: ['Só havia uma solução: partir.'], why: 'A colon introduces the explanation.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which mark is the best choice?', groups: ['semicolon', 'colon'], explain: ['groups'], items: [
            { s: 'A casa é grande ___ o jardim é pequeno.', g: 0, why: 'Two linked clauses.' },
            { s: 'Só trouxe três coisas ___ pão, queijo e vinho.', g: 1, why: 'A list follows.' },
            { s: 'Gosto de chá ___ ele prefere café.', g: 0, why: 'A contrast between linked clauses.' },
            { s: 'Havia um problema ___ não tínhamos dinheiro.', g: 1, why: 'An explanation follows.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Viver devagar',
      about: 'Read a magazine essay and notice its rhythm.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Viver devagar', md: 'Acordei cedo, como sempre. Mas desta vez não olhei para o telemóvel. Fiz o café, sentei-me à janela e fiquei a ver a rua acordar. Foi uma pequena revolução.\n\nVivemos depressa, e não por escolha: o relógio decide as nossas manhãs, o correio eletrónico decide as nossas tardes, e a ansiedade decide as nossas noites. Há quem lhe chame produtividade; eu chamo-lhe cansaço. Mas viver devagar não é viver mal. É escolher o que importa.\n\nOs defensores desta ideia — que nasceu na cozinha, mas rapidamente chegou às cidades — propõem três coisas simples: comer sem pressa, andar a pé, conversar sem consultar o ecrã. O primeiro gesto é o mais fácil; o último, o mais difícil. Tal desafio não é pequeno.\n\nHaverá quem diga que isto é um luxo, o que talvez seja verdade para alguns. Para outros, porém, é uma questão de hábito. Começa-se com dez minutos por dia. Depois, quinze. Depois, uma manhã inteira.\n\nSó há uma regra: não ter pressa de a cumprir.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A autora não olhou para o telemóvel naquela manhã.', a: 't', why: '«Desta vez não olhei para o telemóvel.»' },
            { q: 'A autora acha que viver devagar é viver mal.', a: 'f', why: '«Viver devagar não é viver mal.»' },
            { q: 'Os defensores propõem três gestos simples.', a: 't', why: 'Comer sem pressa, andar a pé, conversar sem consultar o ecrã.' },
            { q: 'A autora vive numa pequena aldeia.', a: 'ng', why: 'Where she lives is not mentioned.' },
            { q: 'Segundo a autora, o gesto mais difícil é comer sem pressa.', a: 'f', why: 'The hardest is the last: talking without looking at the screen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «o que talvez seja verdade para alguns» refer to?', o: ['The whole idea that slow living is a luxury.', 'Only the word luxury.', 'The idea of speed.'], why: '*O que* sums up the whole clause.' },
            { q: 'Why are the short sentences at the end effective?', o: ['They show the pace slowly increasing.', 'They repeat the first paragraph.', 'They give a list of rules.'], why: 'Depois, quinze. Depois, uma manhã inteira.' },
            { q: 'What does the dash do in «Os defensores desta ideia — que nasceu na cozinha…»?', o: ['It adds an aside.', 'It introduces a quotation.', 'It ends the sentence.'], why: 'An aside inside the sentence.' },
            { q: 'Which phrase is an example of parallel structure?', o: ['comer sem pressa, andar a pé, conversar sem consultar o ecrã', 'depressa e não por escolha', 'cedo, como sempre'], why: 'Three items with the same form.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the reference words.', items: [
            { s: 'O primeiro gesto é o mais fácil; [o último], o mais difícil.', why: 'Orders the items.' },
            { s: '[Tal] desafio não é pequeno.', why: 'Points back to the earlier idea.' },
            { s: 'Haverá quem diga que isto é um luxo, [o que] talvez seja verdade para alguns.', why: 'Sums up the clause.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'O relógio decide as nossas ___, o correio eletrónico decide as nossas tardes.', a: ['manhãs'], why: 'A parallel list.' },
            { q: 'Há quem lhe chame produtividade; eu chamo-lhe ___.', a: ['cansaço'], why: 'The author’s view.' },
            { q: 'Começa-se com dez minutos por dia. Depois, ___.', a: ['quinze'], why: 'A rising rhythm.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Viver devagar não é viver mal, é escolher o que importa.', why: 'The main idea.' },
            { a: 'Fiquei a ver a rua acordar à janela.', why: 'A slow image.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Which sentence has parallel structure?', o: ['Gosta de ler, de escrever e de viajar.', 'Gosta de ler, de escrever e viajar.', 'Gosta de ler, escrever e de viajar.'], why: 'Same form for each item.' },
      { q: 'A Marta e a Bia falaram com a diretora; ___ estava de partida.', o: ['esta última', 'aquela primeira', 'aquelas'], why: 'The last-named.' },
      { q: 'Chegou tarde, ___ irritou todos.', o: ['o que', 'que o', 'o qual'], why: 'Sums up the clause.' },
      { q: 'Which sentence invites the children to eat?', o: ['Vamos comer, crianças!', 'Vamos comer crianças!', 'Vamos, comer crianças!'], why: 'The comma marks the vocative.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Reference word or ellipsis?', groups: ['reference word', 'ellipsis'], explain: ['groups'], items: [
      { s: 'Falaram o João e o Rui; este último concordou.', g: 0, why: 'Reference word.' },
      { s: 'A Ana prefere chá; o Paulo, café.', g: 1, why: 'Ellipsis.' },
      { s: 'Uns gostaram; outros, não.', g: 1, why: 'Ellipsis.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Só havia uma solução___ partir. (the mark that introduces an explanation)', a: [':'], why: 'A colon.' },
      { q: 'Há dois problemas: o primeiro é o preço; o ___, o prazo.', a: ['segundo'], why: '*O primeiro… o segundo*.' },
      { q: 'O governo aprovou a lei. Esta ___ divide a opinião pública.', a: ['medida'], why: 'Nominal resumption.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Gosta de ler, de escrever e viajar.', cue: 'Gosta de ler, de escrever e de', a: ['Gosta de ler, de escrever e de viajar.'], why: 'Parallel structure.' },
      { q: 'Ele decidiu partir. Ele decidiu partir surpreendeu todos.', cue: 'Ele decidiu partir. A decisão', a: ['Ele decidiu partir. A decisão surpreendeu todos.'], why: 'Verb to noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'Gosta de ler, de escrever e [viajar].', a: ['de viajar'], why: 'The third item breaks the parallel structure.' },
      { s: 'Só trouxe três coisas[;] pão, queijo e vinho.', a: [':'], why: 'A colon, not a semicolon, introduces a list.' },
    ] },
  ],
};
