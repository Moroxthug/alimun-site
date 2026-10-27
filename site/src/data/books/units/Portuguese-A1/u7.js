// Portuguese A1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'In town',
  goal: 'Find places in town, ask the way and use public transport.',
  art: 'dragon',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['places in town', 'ficar', 'ir a', 'transport', 'tickets', 'directions', 'imperative'], goals: ['foundations', 'relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Onde fica o banco?',
      about: 'Name places in town and ask where they are.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'To ask where a place is, say **Onde fica …?** The verb **ficar** (to be located) is regular: *O banco fica na rua da Praça.* To ask if there is one nearby, say **Há … aqui perto?** To ask the distance, say **É longe?** The answer can be **Fica a cinco minutos a pé** (It is five minutes on foot).' },
          { t: 'table', caption: 'Places in town', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['o banco', 'bank'],
            ['o correio', 'post office'],
            ['a farmácia', 'pharmacy'],
            ['o supermercado', 'supermarket'],
            ['o hospital', 'hospital'],
            ['a estação', 'station'],
            ['a paragem', 'bus stop'],
            ['o museu', 'museum'],
            ['a biblioteca', 'library'],
            ['a praça', 'square'],
            ['o parque', 'park'],
            ['a rua', 'street'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **aqui** (here), **ali** (over there) and **lá** (there, far): *O banco é ali.* In Portugal, a bus stop is **a paragem**; in Brazil, it is *o ponto*. The word **perto** means *near* and **longe** means *far*: *É perto? É longe?*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Onde **fica** o banco?', n: 'Asking where a place is.' },
            { s: 'O banco **fica** na rua da Praça.', n: '*Ficar* + place.' },
            { s: '**Há** uma farmácia aqui perto?', n: 'Asking if there is one nearby.' },
            { s: '**É** longe? – Não, **fica a** cinco minutos a pé.', n: 'Asking and giving the distance.' },
            { s: 'O museu **fica** ao lado da biblioteca.', n: 'A place next to another.' },
          ] },
          { t: 'dialogue', title: 'Perdido na cidade', lines: [
            { who: 'Pedro', s: 'Desculpe, há uma farmácia aqui perto?' },
            { who: 'Marta', s: 'Há, sim. Fica na rua da Praça, em frente do banco.' },
            { who: 'Pedro', s: 'É longe?' },
            { who: 'Marta', s: 'Não, fica a cinco minutos a pé.' },
            { who: 'Pedro', s: 'Muito obrigado.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the place with its meaning.', pairs: [
            ['o banco', 'bank'],
            ['o correio', 'post office'],
            ['a farmácia', 'pharmacy'],
            ['a estação', 'station'],
            ['a paragem', 'bus stop'],
            ['o museu', 'museum'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O banco ___ na rua da Praça. (ficar)', a: ['fica'], why: '*O banco fica*.' },
            { q: 'Há uma farmácia aqui ___?', a: ['perto'], why: '*Aqui perto* = near here.' },
            { q: 'Fica ___ cinco minutos a pé.', a: ['a'], why: '*A cinco minutos* = five minutes away.' },
            { q: 'Onde ___ o museu? (ficar)', a: ['fica'], why: '*Onde fica …?*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Where do you go?', items: [
            { q: 'Quer comprar medicamentos. Vai à ___.', o: ['farmácia', 'biblioteca', 'estação'], why: 'You buy medicines at the pharmacy.' },
            { q: 'Quer enviar uma carta. Vai ao ___.', o: ['correio', 'museu', 'parque'], why: 'You post a letter at the post office.' },
            { q: 'Quer ver quadros antigos. Vai ao ___.', o: ['museu', 'banco', 'correio'], why: 'You see old paintings at the museum.' },
            { q: 'Quer apanhar o comboio. Vai à ___.', o: ['estação', 'paragem', 'farmácia'], why: 'You take the train at the station.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Onde [fico] o banco?', a: ['fica'], why: '*Onde fica o banco?*' },
            { s: 'Fica [em] cinco minutos a pé.', a: ['a'], why: '*A cinco minutos*.' },
            { s: 'O museu [fico] perto do parque.', a: ['fica'], why: '*O museu fica*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Onde fica o banco?', why: '*Onde fica* + place.' },
            { a: 'Há uma farmácia aqui perto?', why: '*Há* + place + *aqui perto*.' },
            { a: 'Fica a cinco minutos a pé.', why: '*A cinco minutos a pé*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Vou de autocarro',
      about: 'Say where you go and how, and buy a ticket.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say where you are going, use **ir a** + place. The little word **a** joins with the article: *Vou ao banco* (a + o), *Vou à farmácia* (a + a), *Vamos aos museus* (a + os), *Vão às lojas* (a + as). To say *home* or *to work*, use **ir para**: *Vou para casa. Vou para o trabalho.* To say how you travel, use **de** + vehicle: *de autocarro, de comboio, de metro, de táxi, de bicicleta, de carro*. On foot is **a pé**.' },
          { t: 'table', caption: 'Transport', explain: ['head', 'col1'], head: ['Portuguese', 'English'], rows: [
            ['de autocarro', 'by bus'],
            ['de comboio', 'by train'],
            ['de metro', 'by underground'],
            ['de táxi', 'by taxi'],
            ['de bicicleta', 'by bicycle'],
            ['de carro', 'by car'],
            ['a pé', 'on foot'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **Como vais para o trabalho?** and answer **Vou de metro.** or just **De metro.** Look at **a pé**: it is *a*, not *de*. In Brazil, the bus is also *ônibus*; in Portugal, it is **o autocarro**.' },
        ],
        [
          { t: 'text', md: 'To buy a ticket, say **Queria um bilhete para …, se faz favor.** The clerk may ask **De ida ou de ida e volta?** (one way or return). To ask the time or the platform, say **A que horas parte o próximo comboio?** or **Qual é a linha?**' },
          { t: 'dialogue', title: 'Na bilheteira', lines: [
            { who: 'Inês', s: 'Boa tarde. Queria um bilhete para Coimbra, se faz favor.' },
            { who: 'Tomás', s: 'De ida ou de ida e volta?' },
            { who: 'Inês', s: 'De ida e volta.' },
            { who: 'Tomás', s: 'São dezoito euros e cinquenta.' },
            { who: 'Inês', s: 'A que horas parte o próximo comboio?' },
            { who: 'Tomás', s: 'Às quinze e dez, na linha três.' },
            { who: 'Inês', s: 'Obrigada.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Vou ___ banco. (a + o)', a: ['ao'], why: '*A + o = ao*.' },
            { q: 'Vou ___ farmácia. (a + a)', a: ['à'], why: '*A + a = à*.' },
            { q: 'Nós vamos ___ cinema. (a + o)', a: ['ao'], why: '*A + o = ao*.' },
            { q: 'Vou ___ casa. (to home)', a: ['para'], why: '*Ir para casa*.' },
            { q: 'Vou ___ pé.', a: ['a'], why: '*A pé* = on foot.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the transport with its meaning.', pairs: [
            ['de autocarro', 'by bus'],
            ['de comboio', 'by train'],
            ['de metro', 'by underground'],
            ['de táxi', 'by taxi'],
            ['de bicicleta', 'by bicycle'],
            ['a pé', 'on foot'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Vou ___ autocarro.', o: ['de', 'em', 'a'], why: '*De autocarro* = by bus.' },
            { q: 'Vou a ___.', o: ['pé', 'metro', 'carro'], why: '*A pé* = on foot.' },
            { q: 'Queria um bilhete ___ Coimbra.', o: ['para', 'de', 'em'], why: '*Um bilhete para* + place.' },
            { q: 'De ida e ___?', o: ['volta', 'vinda', 'ida'], why: '*De ida e volta* = return.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vou ao banco de autocarro.', why: '*Ir a* + place + *de* + vehicle.' },
            { a: 'Queria um bilhete para Coimbra.', why: '*Queria* + what you want.' },
            { a: 'A que horas parte o próximo comboio?', why: 'The question for the departure time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Siga em frente',
      about: 'Give and understand directions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To give directions to someone you do not know, use the polite form: **Siga em frente. Vire à direita. Atravesse a rua.** To give directions to a friend (**tu**), use the form that looks like *ele* in the present: **Segue em frente. Vira à direita. Atravessa a rua.** To say which street, use ordinal numbers: **a primeira rua à direita**, **a segunda rua à esquerda**.' },
          { t: 'table', caption: 'Giving directions', explain: ['head'], head: ['Verb', 'tu', 'o senhor / a senhora'], rows: [
            ['seguir (to follow, to go on)', 'segue', 'siga'],
            ['virar (to turn)', 'vira', 'vire'],
            ['atravessar (to cross)', 'atravessa', 'atravesse'],
            ['passar (to pass)', 'passa', 'passe'],
            ['tomar (to take)', 'toma', 'tome'],
            ['ir (to go)', 'vai', 'vá'],
          ] },
          { t: 'tip', art: 'owl', md: 'Directions are often short: **em frente** (straight on), **à direita** (to the right), **à esquerda** (to the left), **ao fundo da rua** (at the end of the street), **na esquina** (on the corner), **no semáforo** (at the traffic lights), **na rotunda** (at the roundabout). With the polite form, Portugal and Brazil are the same.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Siga** em frente até ao semáforo.', n: 'Polite: *siga*.' },
            { s: '**Vire** na segunda rua à direita.', n: 'Polite: *vire*.' },
            { s: '**Atravesse** a praça.', n: 'Polite: *atravesse*.' },
            { s: '**Vira** à esquerda na esquina.', n: 'To a friend: *vira*.' },
            { s: 'O museu fica **ao fundo** da rua.', n: 'At the end of the street.' },
          ] },
          { t: 'dialogue', title: 'Onde fica a estação?', lines: [
            { who: 'Pedro', s: 'Desculpe, onde fica a estação?' },
            { who: 'Marta', s: 'Siga em frente e vire na segunda rua à direita.' },
            { who: 'Pedro', s: 'É longe?' },
            { who: 'Marta', s: 'Não, fica ao fundo da rua, a cinco minutos a pé.' },
            { who: 'Pedro', s: 'Muito obrigado.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the direction with its meaning.', pairs: [
            ['Siga em frente.', 'Go straight on.'],
            ['Vire à direita.', 'Turn right.'],
            ['Vire à esquerda.', 'Turn left.'],
            ['Atravesse a rua.', 'Cross the street.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the polite form.', items: [
            { q: '___ em frente. (seguir)', a: ['Siga'], why: '*Siga em frente*.' },
            { q: '___ à direita. (virar)', a: ['Vire'], why: '*Vire à direita*.' },
            { q: '___ a rua. (atravessar)', a: ['Atravesse'], why: '*Atravesse a rua*.' },
            { q: '___ a segunda rua. (tomar)', a: ['Tome'], why: '*Tome a segunda rua*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'A uma senhora: ___ em frente.', o: ['Siga', 'Segue', 'Seguir'], why: 'Polite: *siga*.' },
            { q: 'A um amigo: ___ à esquerda.', o: ['Vira', 'Vire', 'Virar'], why: 'To a friend: *vira*.' },
            { q: 'A um senhor: ___ a rua.', o: ['Atravesse', 'Atravessa', 'Atravessar'], why: 'Polite: *atravesse*.' },
            { q: 'O museu fica ao ___ da rua.', o: ['fundo', 'frente', 'lado'], why: '*Ao fundo da rua* = at the end of the street.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Desculpe, [segue] em frente.', a: ['siga'], why: 'Polite: *siga*.' },
            { s: '[Vira] à direita, minha senhora.', a: ['Vire'], why: 'Polite: *vire*.' },
            { s: 'Vire [em] segunda rua à direita.', a: ['na'], why: '*Na segunda rua*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Siga em frente até ao semáforo.', why: '*Siga* + direction.' },
            { a: 'Vire na segunda rua à direita.', why: '*Vire* + which street + direction.' },
            { a: 'A estação fica ao fundo da rua.', why: '*Ao fundo da rua*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um guia e um aviso',
      about: 'Read a city guide and a metro notice.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Guia de Coimbra', md: 'A cidade tem uma universidade muito antiga. No centro, há a Praça e o mercado. O museu fica perto da praça e está aberto de terça a domingo. A estação de comboios fica a dez minutos a pé do centro. Pode ir de autocarro ou a pé.' },
          { t: 'reading', title: 'Aviso do metro', md: 'Por favor, compre o bilhete antes de entrar. Não fume na estação. O último metro parte à meia-noite.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O museu fica perto da praça.', a: 't', why: '*O museu fica perto da praça.*' },
            { q: 'O museu está aberto ao domingo.', a: 't', why: '*De terça a domingo.*' },
            { q: 'A estação fica longe do centro, a duas horas a pé.', a: 'f', why: 'It is ten minutes on foot: *a dez minutos a pé*.' },
            { q: 'O bilhete do metro custa dois euros.', a: 'ng', why: 'The notice does not give a price.' },
            { q: 'O último metro parte à meia-noite.', a: 't', why: '*O último metro parte à meia-noite.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Como se pode ir à estação?', o: ['De autocarro ou a pé.', 'Só de táxi.', 'De metro.'], why: '*Pode ir de autocarro ou a pé.*' },
            { q: 'Quando está aberto o museu?', o: ['De terça a domingo.', 'De segunda a sexta.', 'Só ao sábado.'], why: '*De terça a domingo.*' },
            { q: 'O que se deve fazer antes de entrar no metro?', o: ['Comprar o bilhete.', 'Falar com o motorista.', 'Fumar fora.'], why: '*Compre o bilhete antes de entrar.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O museu ___ perto da praça. (ficar)', a: ['fica'], why: '*O museu fica*.' },
            { q: 'A estação fica a dez minutos ___ pé.', a: ['a'], why: '*A pé* = on foot.' },
            { q: 'O último metro parte ___ meia-noite.', a: ['à'], why: '*À meia-noite* = at midnight.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Onde ___ o banco?', o: ['fica', 'fico', 'ficam'], why: '*O banco fica*.' },
      { q: 'Vou ___ pé.', o: ['a', 'de', 'em'], why: '*A pé* = on foot.' },
      { q: 'Vou ___ autocarro.', o: ['de', 'a', 'em'], why: '*De autocarro* = by bus.' },
      { q: 'A uma senhora: ___ à direita.', o: ['Vire', 'Vira', 'Virar'], why: 'Polite: *vire*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Vou ___ banco. (a + o)', a: ['ao'], why: '*A + o = ao*.' },
      { q: 'Desculpe, onde ___ a estação? (ficar)', a: ['fica'], why: '*Onde fica …?*' },
      { q: 'Siga em ___.', a: ['frente'], why: '*Em frente* = straight on.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the place with its meaning.', pairs: [
      ['o banco', 'bank'],
      ['o correio', 'post office'],
      ['a farmácia', 'pharmacy'],
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Onde [fico] o banco?', a: ['fica'], why: '*Onde fica o banco?*' },
      { s: 'Desculpe, [segue] em frente.', a: ['siga'], why: 'Polite: *siga*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Onde fica a estação?', why: '*Onde fica* + place.' },
      { a: 'Queria um bilhete para Coimbra.', why: '*Queria* + what you want.' },
    ] },
  ],
};
