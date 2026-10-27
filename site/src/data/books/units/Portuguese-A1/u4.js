// Portuguese A1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Home and neighbourhood',
  goal: 'Describe your home and your neighbourhood and say where things are.',
  art: 'suitcase',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['rooms', 'furniture', 'há', 'estar', 'prepositions of place', 'contractions', 'neighbourhood'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Na sala há um sofá',
      about: 'Name rooms and furniture and say what there is with há.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say what there is in a place, use **há** (there is, there are). It never changes: *Há um sofá. Há dois quartos.* To say there is not, use **não há**: *Não há varanda.* To say what a home has, you can also use **ter**: *O apartamento tem três quartos.* To ask how many, say **Quantos quartos há?**' },
          { t: 'table', caption: 'Rooms and furniture', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['a cozinha', 'kitchen'],
            ['a sala', 'living room'],
            ['o quarto', 'bedroom'],
            ['a casa de banho', 'bathroom'],
            ['a varanda', 'balcony'],
            ['o sofá', 'sofa'],
            ['a mesa', 'table'],
            ['a cadeira', 'chair'],
            ['a cama', 'bed'],
            ['o frigorífico', 'fridge'],
            ['o fogão', 'cooker'],
            ['o chuveiro', 'shower'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal, a flat is described by its bedrooms: **T1** has one bedroom, **T2** has two, **T3** has three. In Portugal, the bathroom is **a casa de banho**; in Brazil, people say **o banheiro**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Na sala **há** um sofá e uma mesa.', n: '*Há* + things.' },
            { s: '**Há** dois quartos.', n: '*Há* does not change with more than one thing.' },
            { s: '**Não há** varanda.', n: '*Não há* = there is no.' },
            { s: 'O apartamento **tem** três quartos.', n: '*Ter* for what a home has.' },
            { s: 'Quantos quartos **há**?', n: 'Asking how many.' },
          ] },
          { t: 'dialogue', title: 'A casa nova', lines: [
            { who: 'Ana', s: 'Como é a tua casa nova, Pedro?' },
            { who: 'Pedro', s: 'É pequena, mas bonita. Há uma sala, uma cozinha e dois quartos.' },
            { who: 'Ana', s: 'Há varanda?' },
            { who: 'Pedro', s: 'Sim, há uma varanda pequena.' },
            { who: 'Ana', s: 'E a casa de banho?' },
            { who: 'Pedro', s: 'Há uma casa de banho, com chuveiro.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['a cozinha', 'kitchen'],
            ['o quarto', 'bedroom'],
            ['a casa de banho', 'bathroom'],
            ['o frigorífico', 'fridge'],
            ['a cama', 'bed'],
            ['a varanda', 'balcony'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write há or tem.', items: [
            { q: 'Na sala ___ um sofá.', a: ['há'], why: '*Na sala há um sofá.*' },
            { q: '___ dois quartos.', a: ['Há'], why: '*Há* does not change.' },
            { q: 'Não ___ varanda.', a: ['há'], why: '*Não há* = there is no.' },
            { q: 'O apartamento ___ três quartos.', a: ['tem'], why: 'A home *tem* rooms.' },
            { q: 'Quantos quartos ___?', a: ['há'], why: '*Quantos quartos há?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Na cozinha há um ___.', o: ['frigorífico', 'sofá', 'chuveiro'], why: 'The fridge is in the kitchen.' },
            { q: 'No quarto há uma ___.', o: ['cama', 'mesa de jantar', 'fogão'], why: 'The bed is in the bedroom.' },
            { q: 'Na casa de banho há um ___.', o: ['chuveiro', 'fogão', 'sofá'], why: 'The shower is in the bathroom.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'In which room is it?', groups: ['cozinha', 'sala', 'quarto'], items: [
            { s: 'fogão', g: 0, why: 'The cooker is in the kitchen.' },
            { s: 'frigorífico', g: 0, why: 'The fridge is in the kitchen.' },
            { s: 'sofá', g: 1, why: 'The sofa is in the living room.' },
            { s: 'televisão', g: 1, why: 'The television is in the living room.' },
            { s: 'cama', g: 2, why: 'The bed is in the bedroom.' },
            { s: 'guarda-fato', g: 2, why: 'The wardrobe is in the bedroom.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Na sala [está] um sofá e uma mesa.', a: ['há'], why: 'To say what there is: *há*.' },
            { s: 'Há [um] casa de banho.', a: ['uma'], why: '*Casa* is feminine: *uma casa de banho*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Na sala há um sofá e uma mesa.', why: '*Há* + things.' },
            { a: 'Não há varanda.', why: '*Não há*.' },
            { a: 'O apartamento tem dois quartos.', why: '*Ter* + rooms.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Onde está?',
      about: 'estar for place, and the difference between há and está.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**estar** also means *to be*. Use it to say where a person or thing **is**: *O livro está na mesa. Estou em casa.* It is irregular, so learn every form. To ask where something is, say **Onde está …?**' },
          { t: 'table', caption: 'estar (to be)', quiz: true, head: ['', 'estar'], rows: [
            ['eu', 'estou'],
            ['tu', 'estás'],
            ['ele / ela / você', 'está'],
            ['nós', 'estamos'],
            ['eles / elas / vocês', 'estão'],
          ] },
          { t: 'tip', art: 'owl', md: 'You now know two verbs for *to be*. **Ser** is for who you are and where you are from: *Sou de Lisboa.* **Estar** is for where you are now: *Estou em Lisboa.* Look at the accent: **ele está** (one person), **eles estão** (more than one).' },
        ],
        [
          { t: 'table', caption: 'há or está?', explain: ['head', 'col1'], head: ['Word', 'Use', 'Example'], rows: [
            ['há', 'something new, not known yet', 'Há um supermercado perto de casa.'],
            ['está', 'a known thing: where is it?', 'O supermercado está na rua da Praça.'],
          ] },
          { t: 'dialogue', title: 'Onde está a chave?', lines: [
            { who: 'Ana', s: 'Onde está a chave?' },
            { who: 'Pedro', s: 'Está na mesa da cozinha.' },
            { who: 'Ana', s: 'E o gato? Onde está?' },
            { who: 'Pedro', s: 'Está no sofá da sala.' },
            { who: 'Ana', s: 'Há leite no frigorífico?' },
            { who: 'Pedro', s: 'Há, sim.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of estar.', verb: 'estar', tense: 'present', rows: [
            ['eu', 'estou'],
            ['tu', 'estás'],
            ['ele / ela / você', 'está'],
            ['nós', 'estamos'],
            ['eles / elas / vocês', 'estão'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of estar.', items: [
            { q: 'Eu ___ em casa.', a: ['estou'], why: '*eu estou*' },
            { q: 'Tu ___ na cozinha?', a: ['estás'], why: '*tu estás*' },
            { q: 'O livro ___ na mesa.', a: ['está'], why: '*o livro está*' },
            { q: 'Nós ___ na sala.', a: ['estamos'], why: '*nós estamos*' },
            { q: 'Eles ___ no quarto.', a: ['estão'], why: '*eles estão*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'há or está? Choose.', items: [
            { q: 'Na sala ___ uma mesa.', o: ['há', 'está', 'estão'], why: 'A new thing in the room: *há*.' },
            { q: 'A mesa ___ na sala.', o: ['está', 'há', 'estou'], why: 'We know the table: *está*.' },
            { q: 'Onde ___ a chave?', o: ['está', 'há', 'estás'], why: '*Onde está …?*' },
            { q: '___ um supermercado perto de casa.', o: ['Há', 'Está', 'Estão'], why: 'A new thing: *há*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O livro [há] na mesa.', a: ['está'], why: 'A known thing: *está*.' },
            { s: 'Eu [é] em casa.', a: ['estou'], why: '*Eu estou*.' },
            { s: 'Onde [há] a chave?', a: ['está'], why: '*Onde está a chave?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O gato está no sofá.', why: '*Está* + place.' },
            { a: 'Onde está a chave?', why: '*Onde está* + thing.' },
            { a: 'Há um supermercado perto de casa.', why: '*Há* + a new thing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ao lado de, em frente de',
      about: 'Say where things are with prepositions and contractions.',
      art: 'dog',
      spreads: [
        [
          { t: 'table', caption: 'Where is it?', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['em cima de', 'on, above'],
            ['debaixo de', 'under'],
            ['ao lado de', 'next to'],
            ['em frente de', 'in front of, opposite'],
            ['atrás de', 'behind'],
            ['entre', 'between'],
            ['perto de', 'near'],
            ['longe de', 'far from'],
            ['à direita de / à esquerda de', 'to the right of / to the left of'],
            ['dentro de', 'inside'],
          ] },
          { t: 'text', md: 'The little words **em** (in, on, at) and **de** (of, from) join with **o, a, os, as**: **em + o = no, em + a = na, em + os = nos, em + as = nas**; **de + o = do, de + a = da, de + os = dos, de + as = das**; **a + o = ao, a + a = à**. So we say *no quarto, na cozinha, ao lado do sofá, em cima da mesa*. After *de*, the word *casa* (home) has no article: *perto de casa*.' },
        ],
        [
          { t: 'table', caption: 'Contractions', explain: ['head'], quiz: true, head: ['Preposition', '+ o', '+ a', '+ os', '+ as'], rows: [
            ['em (in, on)', 'no', 'na', 'nos', 'nas'],
            ['de (of, from)', 'do', 'da', 'dos', 'das'],
            ['a (to, at)', 'ao', 'à', 'aos', 'às'],
          ] },
          { t: 'examples', items: [
            { s: 'O gato está **em cima do** sofá.', n: '*De* + *o* = *do*.' },
            { s: 'A cadeira está **ao lado da** mesa.', n: '*De* + *a* = *da*.' },
            { s: 'O candeeiro está **entre** a janela e a porta.', n: '*Entre* has no contraction.' },
            { s: 'A cama está **debaixo da** janela.', n: '*De* + *a* = *da*.' },
            { s: 'O supermercado está **perto de** casa.', n: 'No article before *casa* here.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the contraction.', items: [
            { q: 'O livro está ___ mesa. (em + a)', a: ['na'], why: '*Em + a = na*.' },
            { q: 'O gato está em cima ___ sofá. (de + o)', a: ['do'], why: '*De + o = do*.' },
            { q: 'A cadeira está ao lado ___ mesa. (de + a)', a: ['da'], why: '*De + a = da*.' },
            { q: 'Os livros estão ___ quarto. (em + o)', a: ['no'], why: '*Em + o = no*.' },
            { q: 'O candeeiro está entre a janela ___ a porta.', a: ['e'], why: '*Entre … e …* = between … and …' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the words with their meaning.', pairs: [
            ['em cima de', 'on'],
            ['debaixo de', 'under'],
            ['ao lado de', 'next to'],
            ['atrás de', 'behind'],
            ['perto de', 'near'],
            ['longe de', 'far from'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'O gato está ___ do sofá. (on top)', o: ['em cima', 'debaixo', 'longe'], why: '*Em cima de* = on.' },
            { q: 'A cadeira está ___ da mesa. (next to)', o: ['ao lado', 'atrás', 'em cima'], why: '*Ao lado de* = next to.' },
            { q: 'O supermercado está ___ de casa. (near)', o: ['perto', 'longe', 'debaixo'], why: '*Perto de* = near.' },
            { q: 'A bola está ___ da cama. (under)', o: ['debaixo', 'em cima', 'dentro'], why: '*Debaixo de* = under.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'O gato está [em o] sofá.', a: ['no'], why: '*Em + o = no*.' },
            { s: 'A cadeira está ao lado [de a] mesa.', a: ['da'], why: '*De + a = da*.' },
            { s: 'Os livros estão [em as] caixas.', a: ['nas'], why: '*Em + as = nas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O gato está em cima do sofá.', why: '*Em cima de* + *o* = *do*.' },
            { a: 'A cadeira está ao lado da mesa.', why: '*Ao lado de* + *a* = *da*.' },
            { a: 'O supermercado está perto de casa.', why: '*Perto de* + *casa*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um anúncio e um e-mail',
      about: 'Read a flat advert and an e-mail about a new neighbourhood.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Aluga-se apartamento', md: 'Aluga-se apartamento T2 no centro de Coimbra. O apartamento tem sala, cozinha, dois quartos e casa de banho. Há uma varanda pequena. Está perto do mercado e da estação. A renda é quatrocentos e cinquenta euros por mês. Contacto: casa@example.com.' },
          { t: 'reading', title: 'Um e-mail do Rafael', md: 'Olá, Inês!\n\nJá estou na casa nova. O apartamento é pequeno, mas é muito bonito. Tem uma sala, uma cozinha e dois quartos. Na sala há um sofá e uma mesa. A varanda é pequena, mas tem muito sol. O mercado está perto e há uma paragem de autocarro em frente da porta.\n\nE tu, onde estás agora?\n\nBeijinhos,\nRafael' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O apartamento do anúncio tem dois quartos.', a: 't', why: '*T2* and *dois quartos*.' },
            { q: 'O apartamento está longe do mercado.', a: 'f', why: 'It is near the market: *perto do mercado*.' },
            { q: 'A renda é quatrocentos e cinquenta euros por mês.', a: 't', why: 'The advert says so.' },
            { q: 'O apartamento tem elevador.', a: 'ng', why: 'The advert does not mention a lift.' },
            { q: 'O apartamento do Rafael tem uma varanda pequena.', a: 't', why: '*A varanda é pequena.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Onde está o apartamento do anúncio?', o: ['No centro de Coimbra.', 'Em Lisboa.', 'Perto do mar.'], why: '*No centro de Coimbra.*' },
            { q: 'Como é o apartamento do Rafael?', o: ['Pequeno mas muito bonito.', 'Grande e caro.', 'Velho e escuro.'], why: '*É pequeno, mas é muito bonito.*' },
            { q: 'Onde há uma paragem de autocarro?', o: ['Em frente da porta.', 'Na sala.', 'Perto da estação.'], why: '*Há uma paragem de autocarro em frente da porta.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Na sala ___ um sofá e uma mesa.', a: ['há'], why: '*Há* + things.' },
            { q: 'O mercado ___ perto. (estar)', a: ['está'], why: '*Está* + place.' },
            { q: 'O apartamento ___ dois quartos. (ter)', a: ['tem'], why: '*Ter* for what a home has.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Na sala ___ um sofá.', o: ['há', 'está', 'são'], why: 'A new thing: *há*.' },
      { q: 'O sofá ___ na sala.', o: ['está', 'há', 'é'], why: 'A known thing: *está*.' },
      { q: 'O candeeiro está ___ a janela e a porta.', o: ['entre', 'em cima', 'dentro'], why: '*Entre … e …*' },
      { q: 'Eu ___ em casa.', o: ['estou', 'estás', 'está'], why: '*Eu estou*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Onde ___ o gato? (estar)', a: ['está'], why: '*Onde está …?*' },
      { q: '___ dois quartos no apartamento.', a: ['Há'], why: '*Há* does not change.' },
      { q: 'A chave está ___ mesa. (em + a)', a: ['na'], why: '*Em + a = na*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['a cozinha', 'kitchen'],
      ['o quarto', 'bedroom'],
      ['a casa de banho', 'bathroom'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'O livro [há] na mesa.', a: ['está'], why: 'A known thing: *está*.' },
      { s: 'O gato está [em o] sofá.', a: ['no'], why: '*Em + o = no*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'O gato está em cima do sofá.', why: '*Em cima de* + *o* = *do*.' },
      { a: 'Na sala há um sofá e uma mesa.', why: '*Há* + things.' },
    ] },
  ],
};
