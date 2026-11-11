// Portuguese B2, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Relative clauses and long sentences',
  goal: 'Join ideas in longer sentences with advanced relative pronouns and the conjuntivo in relative clauses. Learn o qual, cujo, quem, tudo o que, relative clauses with the conjuntivo, commas, and the participle in place of a relative clause.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['relative clauses', 'cujo', 'conjuntivo', 'writing', 'city'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'O qual, cujo, quem, tudo o que',
      about: 'Use the relative pronouns of written and careful Portuguese.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'After a preposition, or when **que** could be unclear, use **o qual, a qual, os quais, as quais**: *O livro sobre o qual falámos é novo. A rua na qual moro é calma.* For people after a preposition, **quem** is the usual choice: *A amiga com quem viajo é italiana.* To say **whose**, use **cujo, cuja, cujos, cujas**, and make it agree with the **thing owned**, not the owner: *O autor cujo livro li é jovem. A casa cujas janelas são grandes é nova.* **Tudo o que** means *everything that*: *Tudo o que disseste é verdade.* In formal writing, **tudo quanto** means the same.' },
          { t: 'table', caption: 'Advanced relative pronouns', explain: ['head', 'col1'], head: ['Pronoun', 'Use', 'Example'], rows: [
            ['o qual, a qual, os quais, as quais', 'after a preposition; agrees with the noun', 'A casa na qual vivo é velha.'],
            ['cujo, cuja, cujos, cujas', 'whose; agrees with the thing owned', 'O autor cujo livro li é jovem.'],
            ['quem', 'a person, after a preposition', 'A amiga com quem viajo é italiana.'],
            ['tudo o que', 'everything that', 'Tudo o que disseste é verdade.'],
            ['tudo quanto', 'everything that (formal)', 'Dei-lhe tudo quanto tinha.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech many people say *o livro de que falámos* or *a rua onde moro* instead of *o qual*. Never put an article after **cujo**: not *o autor cujo o livro*. In Brazil **cujo** is rarer in speech and is mostly written.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'O livro **sobre o qual** falámos é novo.', n: '*O qual* after a preposition.' },
            { s: 'A amiga **com quem** viajo é italiana.', n: '*Quem* for a person.' },
            { s: 'O autor **cujo livro** li é jovem.', n: '*Cujo* agrees with *livro*.' },
            { s: 'A casa **cujas janelas** são grandes é nova.', n: '*Cujas* agrees with *janelas*.' },
            { s: '**Tudo o que** disseste é verdade.', n: 'Everything that.' },
          ] },
          { t: 'dialogue', title: 'Um livro novo', lines: [
            { who: 'Sara', s: 'Já leste o livro sobre o qual te falei?' },
            { who: 'Paulo', s: 'Ainda não. É do autor cujo primeiro romance ganhou um prémio?' },
            { who: 'Sara', s: 'Esse mesmo. É a história de uma família com quem ele viveu.' },
            { who: 'Paulo', s: 'Então compro-o. Tudo o que ele escreve vale a pena.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing relative pronoun.', items: [
            { q: 'O livro sobre ___ falámos é novo. (o qual)', a: ['o qual'], why: '*O qual* after *sobre*.' },
            { q: 'A rua em ___ moro é calma. (a qual)', a: ['a qual'], why: '*A qual* after *em*.' },
            { q: 'O autor ___ livro li é jovem.', a: ['cujo'], why: '*Cujo* agrees with *livro*.' },
            { q: 'A amiga com ___ viajo é italiana.', a: ['quem'], why: '*Quem* for a person after a preposition.' },
            { q: 'Tudo ___ disseste é verdade.', a: ['o que'], why: '*Tudo o que* = everything that.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'A casa ___ janelas são grandes é nova.', o: ['cujas', 'cujos', 'cuja'], why: '*Cujas* agrees with *janelas*.' },
            { q: 'O colega com ___ trabalho é simpático.', o: ['quem', 'cujo', 'o que'], why: 'A person after a preposition: *quem*.' },
            { q: 'O médico ___ filha conheci é meu vizinho.', o: ['cuja', 'cujo', 'quem'], why: '*Cuja* agrees with *filha*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the pronoun in brackets.', items: [
            { q: 'O autor é jovem. Li o livro dele.', cue: 'cujo', a: ['O autor cujo livro li é jovem.'], why: '*Cujo* agrees with *livro*.' },
            { q: 'A casa é nova. As janelas dela são grandes.', cue: 'cujas', a: ['A casa cujas janelas são grandes é nova.'], why: '*Cujas* agrees with *janelas*.' },
            { q: 'A amiga é italiana. Viajo com ela.', cue: 'quem', a: ['A amiga com quem viajo é italiana.'], why: '*Com quem* for a person.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O autor cujos [livro] li é jovem.', a: ['livros'], why: '*Cujos* agrees with the plural *livros*.' },
            { s: 'A amiga com [qual] viajo é italiana.', a: ['quem'], why: 'A person after a preposition: *quem*.' },
            { s: 'Tudo [que] disseste é verdade.', a: ['o que'], why: '*Tudo o que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O livro sobre o qual falámos é novo.', why: '*O qual* after *sobre*.' },
            { a: 'A casa cujas janelas são grandes é nova.', why: '*Cujas* + noun.' },
            { a: 'Tudo o que disseste é verdade.', why: '*Tudo o que*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Relative clauses with the conjuntivo',
      about: 'Choose between the indicative and the conjuntivo in a relative clause.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'When the person or thing **exists and is known**, the relative clause takes the **indicative**: *Conheço um médico que fala francês.* When it is **not known**, **may not exist** or is only **wished for**, it takes the **conjuntivo**: *Procuro um médico que fale francês. Não há ninguém que saiba a resposta. Preciso de um amigo que more em Lisboa.* After **o único, o primeiro, o último** and the **superlative**, the conjuntivo shows a personal view: *É o melhor filme que tenha visto.*' },
          { t: 'table', caption: 'Known or not known', explain: ['head'], head: ['Known (indicative)', 'Not known (conjuntivo)'], rows: [
            ['Conheço um médico que fala francês.', 'Procuro um médico que fale francês.'],
            ['Há uma loja que abre ao domingo.', 'Não há nenhuma loja que abra ao domingo.'],
            ['Tenho um amigo que mora em Lisboa.', 'Preciso de um amigo que more em Lisboa.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After a superlative both forms are heard: *o melhor filme que já vi* is a plain fact, *o melhor filme que tenha visto* sounds more careful and personal. After **ninguém, nada, nenhum** the conjuntivo is the safe choice: *Não vi nada que me interessasse.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Conheço um médico **que fala** francês.', n: 'He exists: indicative.' },
            { s: 'Procuro um médico **que fale** francês.', n: 'Not known yet: conjuntivo.' },
            { s: 'Não há ninguém **que saiba** a resposta.', n: 'Nobody: conjuntivo.' },
            { s: 'É o único aluno **que tenha chegado** atrasado.', n: 'After *o único*.' },
            { s: 'Não vi nada **que me interessasse**.', n: 'After *nada*.' },
          ] },
          { t: 'dialogue', title: 'À procura de casa', lines: [
            { who: 'Ana', s: 'Procuro um apartamento que tenha varanda.' },
            { who: 'Pedro', s: 'Conheço um que tem duas, mas é caro.' },
            { who: 'Ana', s: 'Quero algo que seja barato e que fique perto do metro.' },
            { who: 'Pedro', s: 'Não há nada que reúna tudo isso na baixa.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Procuro um médico que ___ francês. (falar)', a: ['fale'], why: 'Not known: conjuntivo.' },
            { q: 'Não há ninguém que ___ a resposta. (saber)', a: ['saiba'], why: 'Nobody: conjuntivo.' },
            { q: 'Conheço um médico que ___ francês. (falar)', a: ['fala'], why: 'He exists: indicative.' },
            { q: 'Precisamos de um professor que ___ paciente. (ser)', a: ['seja'], why: 'Not known: conjuntivo.' },
            { q: 'Tenho um amigo que ___ em Lisboa. (morar)', a: ['mora'], why: 'He exists: indicative.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Known or not known? Sort the sentences.', explain: ['groups'], groups: ['Known (indicative)', 'Not known (conjuntivo)'], items: [
            { s: 'Conheço um médico que fala francês.', g: 0, why: 'He exists: indicative.' },
            { s: 'Procuro um médico que fale francês.', g: 1, why: 'Not known yet: conjuntivo.' },
            { s: 'Há uma loja que abre ao domingo.', g: 0, why: 'It exists: indicative.' },
            { s: 'Não há nenhuma loja que abra ao domingo.', g: 1, why: 'None: conjuntivo.' },
            { s: 'Tenho um amigo que mora aqui.', g: 0, why: 'He exists: indicative.' },
            { s: 'Preciso de um amigo que more aqui.', g: 1, why: 'Only wished for: conjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences into one.', items: [
            { q: 'Quero um quarto. Tem de ter vista para o mar.', cue: 'Quero um quarto', a: ['Quero um quarto que tenha vista para o mar.'], why: 'Wished for: conjuntivo.' },
            { q: 'Não conheço ninguém. Sabe a resposta.', cue: 'Não conheço ninguém', a: ['Não conheço ninguém que saiba a resposta.'], why: 'Nobody: conjuntivo.' },
            { q: 'Há muitas lojas. Abrem ao domingo.', cue: 'Há muitas lojas', a: ['Há muitas lojas que abrem ao domingo.'], why: 'They exist: indicative.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Procuro um médico que [fala] francês.', a: ['fale'], why: 'Not known: conjuntivo.' },
            { s: 'Não há ninguém que [sabe] a resposta.', a: ['saiba'], why: 'Nobody: conjuntivo.' },
            { s: 'Conheço um médico que [fale] francês.', a: ['fala'], why: 'He exists: indicative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Preciso de uma casa que ___ jardim.', o: ['tenha', 'tem', 'teve'], why: 'Not known: conjuntivo.' },
            { q: 'Vivo numa casa que ___ jardim.', o: ['tem', 'tenha', 'tivesse'], why: 'It exists: indicative.' },
            { q: 'Não vi nada que me ___.', o: ['interessasse', 'interessou', 'interessava'], why: 'After *nada*: conjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Procuro um médico que fale francês.', why: 'Not known: conjuntivo.' },
            { a: 'Não há ninguém que saiba a resposta.', why: 'Nobody: conjuntivo.' },
            { a: 'Conheço um médico que fala francês.', why: 'He exists: indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Commas and the participle',
      about: 'Tell restrictive and appositive clauses apart, and shorten a clause with the participle.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A **restrictive** clause has **no commas** and says **which one**: *Os alunos que estudaram passaram* (only those who studied). An **appositive** clause has **commas** and only adds information: *Os alunos, que estudaram, passaram* (all of them studied, and all passed). In writing you can shorten a relative clause with the **past participle**, which agrees with the noun: *O livro escrito por ela* means *o livro que foi escrito por ela*. *As casas construídas em 1900* means *as casas que foram construídas em 1900*.' },
          { t: 'table', caption: 'Commas change the meaning', explain: ['head'], head: ['Restrictive', 'Appositive'], rows: [
            ['Os alunos que estudaram passaram.', 'Os alunos, que estudaram, passaram.'],
            ['O vizinho que mora ao lado é médico.', 'O meu vizinho, que mora ao lado, é médico.'],
            ['A cidade onde nasci é pequena.', 'Lisboa, onde nasci, é grande.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With a name or a one-of-a-kind noun, use commas: *Lisboa, onde nasci, é grande.* The participle must agree: *o livro escrito, a carta escrita, os livros escritos, as cartas escritas.* It is common in newspapers and reports.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Os alunos **que estudaram** passaram.', n: 'Only those who studied.' },
            { s: 'Os alunos, **que estudaram**, passaram.', n: 'All of them studied.' },
            { s: 'O livro **escrito por ela** é famoso.', n: 'Reduced clause with the participle.' },
            { s: 'As casas **construídas em 1900** são lindas.', n: 'The participle agrees with *casas*.' },
            { s: 'Lisboa, **onde nasci**, é grande.', n: 'Commas for extra information.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Who passed?', items: [
            { q: 'Os alunos que estudaram passaram. Quem passou?', o: ['Only those who studied.', 'All the students.', 'Nobody.'], why: 'No commas: it says which students.' },
            { q: 'Os alunos, que estudaram, passaram. Quem passou?', o: ['All the students, and all had studied.', 'Only some of them.', 'Nobody.'], why: 'Commas: extra information about all of them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle.', items: [
            { q: 'O livro ___ por ela é famoso. (escrever)', a: ['escrito'], why: 'Masculine singular: *escrito*.' },
            { q: 'As casas ___ em 1900 são lindas. (construir)', a: ['construídas'], why: 'Feminine plural: *construídas*.' },
            { q: 'Os documentos ___ ontem estão aqui. (assinar)', a: ['assinados'], why: 'Masculine plural: *assinados*.' },
            { q: 'A carta ___ pela diretora chegou hoje. (enviar)', a: ['enviada'], why: 'Feminine singular: *enviada*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'With commas or without? Sort the sentences.', explain: ['groups'], groups: ['Restrictive (no commas)', 'Appositive (commas)'], items: [
            { s: 'Os alunos que estudaram passaram.', g: 0, why: 'It says which students.' },
            { s: 'Os alunos, que estudaram, passaram.', g: 1, why: 'Extra information.' },
            { s: 'O vizinho que mora ao lado é médico.', g: 0, why: 'It says which neighbour.' },
            { s: 'O meu vizinho, que mora ao lado, é médico.', g: 1, why: 'Extra information.' },
            { s: 'A cidade onde nasci é pequena.', g: 0, why: 'It says which city.' },
            { s: 'Lisboa, onde nasci, é grande.', g: 1, why: 'A name: extra information.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Shorten the sentence with the participle.', items: [
            { q: 'O livro que foi escrito por ela é famoso.', cue: 'O livro', a: ['O livro escrito por ela é famoso.'], why: 'Participle in place of the clause.' },
            { q: 'As casas que foram construídas em 1900 são lindas.', cue: 'As casas', a: ['As casas construídas em 1900 são lindas.'], why: 'The participle agrees with *casas*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O livro [escreveu] por ela é famoso.', a: ['escrito'], why: 'Participle: *escrito*.' },
            { s: 'As casas [construído] em 1900 são lindas.', a: ['construídas'], why: 'It agrees with *casas*.' },
            { s: 'Os documentos [assinada] ontem estão aqui.', a: ['assinados'], why: 'It agrees with *documentos*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O livro escrito por ela é famoso.', why: 'Participle after the noun.' },
            { a: 'Lisboa, onde nasci, é grande.', why: 'Commas around the extra information.' },
            { a: 'As casas construídas em 1900 são lindas.', why: 'Participle after the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A cidade que mudou',
      about: 'Read an article on a city quarter that changed.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'O bairro junto ao rio', md: 'Quando cheguei a esta cidade, há vinte anos, o bairro junto ao rio, cujas fábricas estavam fechadas, era um lugar que ninguém queria visitar. As ruas, onde só passavam camiões, não tinham árvores nem bancos.\n\nHoje, as antigas fábricas, transformadas em escolas e oficinas, atraem gente que vem de todo o país. A praça onde antes se guardavam máquinas é agora o sítio em que as famílias se encontram ao domingo. Foi a câmara, a quem os moradores tinham pedido ajuda, que começou as obras.\n\nProcuro ainda uma coisa que não encontrei: um café que abra de madrugada, para quem trabalha cedo. Mas tudo o que vi até agora mostra que valeu a pena.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Há vinte anos, o bairro tinha as fábricas fechadas.', a: 't', why: '*Cujas fábricas estavam fechadas.*' },
            { q: 'Hoje as fábricas continuam fechadas.', a: 'f', why: 'They are now schools and workshops.' },
            { q: 'Os moradores tinham pedido ajuda à câmara.', a: 't', why: '*A quem os moradores tinham pedido ajuda.*' },
            { q: 'O autor vive agora noutro país.', a: 'ng', why: 'The text does not say so.' },
            { q: 'Já existe um café aberto de madrugada.', a: 'f', why: 'The author is still looking for one.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quem começou as obras?', o: ['A câmara.', 'Os moradores.', 'As escolas.'], why: '*Foi a câmara … que começou as obras.*' },
            { q: 'O que são agora as antigas fábricas?', o: ['Escolas e oficinas.', 'Casas.', 'Cafés.'], why: '*Transformadas em escolas e oficinas.*' },
            { q: 'O que procura ainda o autor?', o: ['Um café que abra de madrugada.', 'Uma escola nova.', 'Uma casa junto ao rio.'], why: '*Um café que abra de madrugada.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the conjuntivo.', items: [
            { s: 'Procuro ainda um café que [abra] de madrugada, para quem trabalha cedo.', why: '*Abra*: the café is not known to exist.' },
            { s: 'Procuro uma casa que [tenha] jardim e [seja] barata.', why: '*Tenha* and *seja*: the house is only wished for.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word or verb.', items: [
            { q: 'A praça ___ antes se guardavam máquinas é agora o sítio dos encontros.', a: ['onde'], why: '*Onde* for a place.' },
            { q: 'Procuro um café que ___ de madrugada. (abrir)', a: ['abra'], why: 'Not known: conjuntivo.' },
            { q: 'As fábricas, ___ em escolas, atraem gente. (transformar)', a: ['transformadas'], why: 'The participle agrees with *fábricas*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A praça onde antes se guardavam máquinas é agora um sítio de encontro.', why: '*Onde* for a place.' },
            { a: 'Tudo o que vi mostra que valeu a pena.', why: '*Tudo o que*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'O livro sobre ___ falámos é novo.', o: ['o qual', 'cujo', 'quem'], why: '*O qual* after *sobre*.' },
      { q: 'A amiga com ___ viajo é italiana.', o: ['quem', 'cujo', 'onde'], why: 'A person after a preposition: *quem*.' },
      { q: 'O autor ___ livro li é jovem.', o: ['cujo', 'o qual', 'quem'], why: '*Cujo* agrees with *livro*.' },
      { q: 'Não há ninguém que ___ a resposta.', o: ['saiba', 'sabe', 'soube'], why: 'Nobody: conjuntivo.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Tudo ___ disseste é verdade.', a: ['o que'], why: '*Tudo o que*.' },
      { q: 'O livro ___ por ela é famoso. (escrever)', a: ['escrito'], why: 'Participle: *escrito*.' },
      { q: 'Conheço um médico que ___ francês. (falar)', a: ['fala'], why: 'He exists: indicative.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the pronoun with its meaning.', pairs: [
      ['cujo', 'whose'],
      ['quem', 'who, after a preposition'],
      ['tudo o que', 'everything that'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences into one.', items: [
      { q: 'O autor é jovem. Li o livro dele.', cue: 'cujo', a: ['O autor cujo livro li é jovem.'], why: '*Cujo* agrees with *livro*.' },
      { q: 'Quero um quarto. Tem de ter vista para o mar.', cue: 'Quero um quarto', a: ['Quero um quarto que tenha vista para o mar.'], why: 'Wished for: conjuntivo.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Procuro um médico que [fala] francês.', a: ['fale'], why: 'Not known: conjuntivo.' },
      { s: 'O livro [escreveu] por ela é famoso.', a: ['escrito'], why: 'Participle: *escrito*.' },
    ] },
  ],
};
