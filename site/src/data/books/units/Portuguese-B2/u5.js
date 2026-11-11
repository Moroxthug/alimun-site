// Portuguese B2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Media and public debate',
  goal: 'Follow and join a debate on the media, the news and social networks. Learn the vocabulary and collocations of the news, mandar, deixar and fazer with an infinitive, ser and estar with the participle, and the phrases that give, soften and answer an opinion.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['media', 'news', 'debate', 'opinions', 'discourse markers'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The news and social networks',
      about: 'Learn the words and collocations used to talk about the media.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Many words about the media go with one verb. You **divulgar** a news item, **desmentir** a rumour, **dar** an interview, **seguir** the news, **partilhar** a post and **verificar** the source. Learn them together: *divulgar uma notícia, desmentir um boato, dar uma entrevista, seguir as notícias, partilhar uma publicação, verificar a fonte*. The people and places are **o jornalista**, **a imprensa**, **a manchete** (the headline) and **as redes sociais**.' },
          { t: 'table', caption: 'Collocations of the news', explain: ['head', 'col1'], head: ['Expression', 'Meaning', 'Example'], rows: [
            ['divulgar uma notícia', 'to spread a piece of news', 'O jornal divulgou a notícia ontem.'],
            ['desmentir um boato', 'to deny a rumour', 'A empresa desmentiu o boato.'],
            ['dar uma entrevista', 'to give an interview', 'A ministra deu uma entrevista à rádio.'],
            ['seguir as notícias', 'to follow the news', 'Sigo as notícias todas as manhãs.'],
            ['partilhar uma publicação', 'to share a post', 'Ela partilhou a publicação com os amigos.'],
            ['verificar a fonte', 'to check the source', 'Antes de partilhar, verifica a fonte.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal people **partilham** a post; in Brazil they say **compartilhar**. You **dar** an interview but a journalist **faz** an interview: *A ministra deu uma entrevista. O jornalista fez uma entrevista à ministra.* Never say *fazer uma entrevista* for the person who answers.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'O jornal **divulgou** a notícia ontem.', n: 'To spread a piece of news.' },
            { s: 'A empresa **desmentiu** o boato.', n: 'To deny a rumour.' },
            { s: 'A ministra **deu** uma entrevista à rádio.', n: 'The person who answers.' },
            { s: 'O jornalista **fez** uma entrevista à ministra.', n: 'The person who asks.' },
            { s: 'Antes de partilhar, **verifica** a fonte.', n: 'To check the source.' },
          ] },
          { t: 'dialogue', title: 'Ao pequeno-almoço', lines: [
            { who: 'Ana', s: 'Já viste a manchete de hoje?' },
            { who: 'Pedro', s: 'Vi. A empresa desmentiu o boato que circulava nas redes sociais.' },
            { who: 'Ana', s: 'Muita gente partilhou a publicação sem verificar a fonte.' },
            { who: 'Pedro', s: 'Pois, e agora ninguém divulga a correção.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ontem a empresa ___ o boato. (desmentir)', a: ['desmentiu'], why: 'Perfeito simples: *desmentiu*.' },
            { q: 'Ontem a ministra ___ uma entrevista à rádio. (dar)', a: ['deu'], why: 'The person who answers *dá* an interview.' },
            { q: 'Antes de partilhar, ___ a fonte. (tu, verificar)', a: ['verifica'], why: 'Imperative: *verifica*.' },
            { q: 'Sigo as ___ todas as manhãs.', a: ['notícias'], why: '*Seguir as notícias*.' },
            { q: 'Ela partilhou a ___ com os amigos.', a: ['publicação'], why: '*Partilhar uma publicação*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['divulgar uma notícia', 'to spread a piece of news'],
            ['desmentir um boato', 'to deny a rumour'],
            ['dar uma entrevista', 'to give an interview'],
            ['verificar a fonte', 'to check the source'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Antes de partilhar, verifica a ___.', o: ['fonte', 'manchete', 'entrevista'], why: '*Verificar a fonte*.' },
            { q: 'A empresa vai ___ o boato.', o: ['desmentir', 'divulgar', 'seguir'], why: '*Desmentir um boato*.' },
            { q: 'O jornalista fez uma ___ à ministra.', o: ['entrevista', 'publicação', 'manchete'], why: '*Fazer uma entrevista* to someone.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ontem o jornal [divulgue] a notícia.', a: ['divulgou'], why: 'Perfeito simples: *divulgou*.' },
            { s: 'Sigo as [notícia] todas as manhãs.', a: ['notícias'], why: '*As notícias* in the plural.' },
            { s: 'A ministra [fez] uma entrevista à rádio.', a: ['deu'], why: 'The person who answers *dá* an interview.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O jornal divulgou a notícia ontem.', why: 'Subject, verb, object, time.' },
            { a: 'A ministra deu uma entrevista à rádio.', why: '*Dar uma entrevista*.' },
            { a: 'Antes de partilhar, verifica a fonte.', why: '*Verificar a fonte*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mandar, deixar, fazer; ser and estar',
      about: 'Use mandar, deixar and fazer with an infinitive, and ser or estar with the participle.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Three verbs take an **infinitive** straight after them. **Mandar** means *to have something done*: *Mandei reparar o carro.* **Deixar** means *to let*: *Deixei-o falar.* **Fazer** means *to make someone do something*: *Fizeram-me esperar.* The pronoun goes with the first verb: *deixei-o falar*, *mandei-o sair*. With the **participle**, **ser** shows the **action**: *A notícia foi divulgada ontem.* **Estar** shows the **state** that results: *A loja está fechada.* The participle agrees with the subject.' },
          { t: 'table', caption: 'Verb patterns', explain: ['head', 'col1'], head: ['Pattern', 'Meaning', 'Example'], rows: [
            ['mandar + infinitive', 'to have something done', 'Mandei reparar o carro.'],
            ['deixar + infinitive', 'to let someone do it', 'Deixei-o falar.'],
            ['fazer + infinitive', 'to make someone do it', 'Fizeram-me esperar.'],
            ['ser + participle', 'the action', 'A notícia foi divulgada ontem.'],
            ['estar + participle', 'the state', 'A loja está fechada.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **mandar** the infinitive stays singular even when the thing is plural: *Mandei reparar os carros.* **Mandar** also means *to send*: *Mandei uma carta.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Mandei reparar** o carro.', n: 'I had the car repaired.' },
            { s: '**Deixei-o falar** até ao fim.', n: 'I let him speak.' },
            { s: '**Fizeram-me esperar** uma hora.', n: 'They made me wait.' },
            { s: 'A notícia **foi divulgada** ontem.', n: 'The action.' },
            { s: 'A loja **está fechada**.', n: 'The state.' },
          ] },
          { t: 'dialogue', title: 'Na oficina', lines: [
            { who: 'Ana', s: 'Mandaste reparar o carro?' },
            { who: 'Pedro', s: 'Mandei, mas ainda está na oficina.' },
            { who: 'Ana', s: 'Deixaste lá as chaves?' },
            { who: 'Pedro', s: 'Deixei. Fizeram-me esperar uma hora, mas já está pago.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Mandei ___ o carro. (reparar)', a: ['reparar'], why: '*Mandar* + infinitive.' },
            { q: 'Deixei-o ___ até ao fim. (falar)', a: ['falar'], why: '*Deixar* + infinitive.' },
            { q: 'Fizeram-me ___ uma hora. (esperar)', a: ['esperar'], why: '*Fazer* + infinitive.' },
            { q: 'A notícia ___ divulgada ontem. (ser)', a: ['foi'], why: 'The action: *ser*.' },
            { q: 'Agora a loja ___ fechada. (estar)', a: ['está'], why: 'The state: *estar*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Action or state? Sort the sentences.', explain: ['groups'], groups: ['Action (ser)', 'State (estar)'], items: [
            { s: 'A notícia foi divulgada ontem.', g: 0, why: 'The action: *foi*.' },
            { s: 'A loja está fechada.', g: 1, why: 'The state: *está*.' },
            { s: 'A carta foi escrita pelo diretor.', g: 0, why: 'The action: *foi*.' },
            { s: 'A carta está escrita em inglês.', g: 1, why: 'The state: *está*.' },
            { s: 'A porta foi aberta pelo vento.', g: 0, why: 'The action: *foi*.' },
            { s: 'A porta está aberta.', g: 1, why: 'The state: *está*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Agora a porta ___ aberta.', o: ['está', 'foi', 'é'], why: 'The state now: *estar*.' },
            { q: 'A carta ___ escrita pelo diretor ontem.', o: ['foi', 'está', 'é'], why: 'The action: *ser*.' },
            { q: 'Mandei ___ um vestido.', o: ['fazer', 'faço', 'fiz'], why: '*Mandar* + infinitive.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
            { q: 'O mecânico reparou o carro. Eu pedi isso.', cue: 'Mandei', a: ['Mandei reparar o carro.'], why: '*Mandar* + infinitive.' },
            { q: 'Ele falou. Eu deixei.', cue: 'Deixei-o', a: ['Deixei-o falar.'], why: 'The pronoun goes with *deixar*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Agora a loja [foi] fechada.', a: ['está'], why: 'The state now: *estar*.' },
            { s: 'Mandei [reparei] o carro.', a: ['reparar'], why: '*Mandar* + infinitive.' },
            { s: 'A notícia [está] divulgada ontem.', a: ['foi'], why: 'The action: *ser*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mandei reparar o carro na oficina.', why: '*Mandar* + infinitive.' },
            { a: 'Deixei-o falar até ao fim.', why: 'The pronoun goes with *deixar*.' },
            { a: 'A notícia foi divulgada ontem.', why: '*Ser* + participle.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Giving and softening an opinion',
      about: 'Give an opinion, agree, disagree politely and use the markers of a debate.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To give an opinion, say **Na minha opinião, …**, **Parece-me que …** or **Acho que …**. To agree, say **Tens razão** or **Concordo**. To agree only a little, say **Concordo em parte**. To soften a disagreement, say **Não sei se é bem assim** or **Talvez fosse melhor …**. After **talvez** use the **conjuntivo**: *Talvez tenhas razão.* Debate markers organise what you say: **aliás** (what is more), **de resto** (besides), **de facto** (indeed), **pois** (yes, I see) and **enfim** (well, anyway).' },
          { t: 'table', caption: 'Markers of a debate', explain: ['head', 'col1'], head: ['Marker', 'Use', 'Example'], rows: [
            ['aliás', 'adds a stronger point', 'Não gosto da ideia; aliás, acho-a perigosa.'],
            ['de resto', 'besides, for the rest', 'Gosto da casa; de resto, o bairro é calmo.'],
            ['de facto', 'indeed, in fact', 'De facto, tens razão.'],
            ['pois', 'yes, I see (Portugal)', 'Pois, é verdade.'],
            ['enfim', 'well, anyway', 'Enfim, não há mais nada a fazer.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Portugal **pois** alone is a common answer that means *yes, I agree* or *I see*. **Se calhar** (maybe) is common in speech and takes the **indicative**: *Se calhar tens razão.* **Talvez** is a little more careful and takes the **conjuntivo**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Na minha opinião**, o preço é demasiado alto.', n: 'Giving a view.' },
            { s: '**Concordo em parte** com o que disseste.', n: 'Partly agreeing.' },
            { s: '**Talvez fosse melhor** esperar mais um dia.', n: 'A soft suggestion.' },
            { s: '**Talvez tenhas** razão.', n: '*Talvez* + conjuntivo.' },
            { s: 'Não gosto da ideia; **aliás**, acho-a perigosa.', n: 'A stronger point.' },
          ] },
          { t: 'dialogue', title: 'Um debate', lines: [
            { who: 'Sara', s: 'Acho que as redes sociais informam mais depressa.' },
            { who: 'Paulo', s: 'De facto, mas nem tudo o que se lê é verdade.' },
            { who: 'Sara', s: 'Pois, e aliás muita gente nem verifica a fonte.' },
            { who: 'Paulo', s: 'Concordo em parte; se calhar o problema é a pressa.' },
            { who: 'Sara', s: 'Talvez tenhas razão. Enfim, vamos ver o que muda.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Não gosto da ideia; ___, acho-a perigosa.', a: ['aliás'], why: '*Aliás* adds a stronger point.' },
            { q: 'Gosto da casa; ___, o bairro é calmo.', a: ['de resto'], why: '*De resto* = besides.' },
            { q: 'Talvez ___ razão. (tu, ter)', a: ['tenhas'], why: '*Talvez* + conjuntivo.' },
            { q: 'Concordo ___ parte com o que disseste.', a: ['em'], why: '*Concordar em parte*.' },
            { q: '___, não há mais nada a fazer.', a: ['Enfim'], why: '*Enfim* = well, anyway.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the phrase with what it does.', pairs: [
            ['Na minha opinião', 'I give my view'],
            ['Concordo em parte', 'I partly agree'],
            ['Tens razão, mas…', 'I agree, then object'],
            ['Talvez fosse melhor…', 'I suggest softly'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Which sentence is softer?', o: ['Talvez fosse melhor esperar.', 'Esperar é a única solução.', 'Não esperes.'], why: '*Talvez fosse melhor* softens a suggestion.' },
            { q: 'You partly agree. You say:', o: ['Concordo em parte.', 'Concordo totalmente.', 'Não concordo nada.'], why: '*Concordo em parte*.' },
            { q: 'Talvez ___ razão.', o: ['tenhas', 'tens', 'tinhas'], why: '*Talvez* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Agree or disagree? Sort the phrases.', explain: ['groups'], groups: ['Agree', 'Disagree or soften'], items: [
            { s: 'Tens toda a razão.', g: 0, why: 'A full agreement.' },
            { s: 'Pois, é verdade.', g: 0, why: '*Pois* = I agree.' },
            { s: 'De facto, concordo.', g: 0, why: 'A full agreement.' },
            { s: 'Não concordo totalmente.', g: 1, why: 'A soft disagreement.' },
            { s: 'Não sei se é bem assim.', g: 1, why: 'A soft disagreement.' },
            { s: 'Talvez fosse melhor esperar.', g: 1, why: 'A soft suggestion.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Talvez [tens] razão.', a: ['tenhas'], why: '*Talvez* + conjuntivo.' },
            { s: 'Concordo [de] parte.', a: ['em'], why: '*Concordar em parte*.' },
            { s: 'Parece-me [se] a ideia é boa.', a: ['que'], why: '*Parece-me que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Na minha opinião, o preço é demasiado alto.', why: 'Opinion first, then the sentence.' },
            { a: 'Concordo em parte com o que disseste.', why: '*Concordar em parte*.' },
            { a: 'Talvez fosse melhor esperar mais um dia.', why: '*Talvez* + imperfeito do conjuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Menos ecrãs à mesa',
      about: 'Read an opinion article and a reader\'s reply.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Menos ecrãs à mesa', md: 'Na minha opinião, as redes sociais mudaram a forma como falamos, e nem sempre para melhor. Muita gente divulga uma notícia sem verificar a fonte; depois, quando a empresa desmente o boato, já ninguém o lê. De facto, é fácil partilhar, mas é difícil corrigir.\n\nAliás, deixei de seguir as notícias ao jantar. Mandei desligar a televisão na sala e deixei o telemóvel na gaveta. Talvez seja um exagero, mas a conversa voltou à mesa.\n\nResposta de uma leitora: Concordo em parte com o autor. Pois, as notícias falsas são um problema, mas as redes sociais também permitem que a verdade se espalhe depressa. Se calhar o problema não são os ecrãs, mas a pressa. Enfim, talvez o melhor seja verificar sempre a fonte antes de partilhar.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O autor acha que as redes sociais mudaram sempre para melhor.', a: 'f', why: '*Nem sempre para melhor.*' },
            { q: 'O autor deixou de seguir as notícias ao jantar.', a: 't', why: '*Deixei de seguir as notícias ao jantar.*' },
            { q: 'A leitora concorda totalmente com o autor.', a: 'f', why: '*Concordo em parte.*' },
            { q: 'A leitora diz que as redes sociais também espalham a verdade.', a: 't', why: '*Permitem que a verdade se espalhe depressa.*' },
            { q: 'O autor trabalha num jornal.', a: 'ng', why: 'The text does not say so.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que fez o autor com o telemóvel?', o: ['Deixou-o na gaveta.', 'Vendeu-o.', 'Deu-o à filha.'], why: '*Deixei o telemóvel na gaveta.*' },
            { q: 'Para a leitora, qual pode ser o problema?', o: ['A pressa.', 'Os ecrãs.', 'As notícias.'], why: '*Se calhar o problema não são os ecrãs, mas a pressa.*' },
            { q: 'O que aconselha a leitora?', o: ['Verificar a fonte antes de partilhar.', 'Deixar de ler notícias.', 'Desligar o telemóvel.'], why: '*Verificar sempre a fonte antes de partilhar.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the discourse markers.', items: [
            { s: '[Aliás], deixei de seguir as notícias ao jantar. [Enfim], a conversa voltou à mesa.', why: '*Aliás* adds a point; *enfim* closes it.' },
            { s: '[Pois], é verdade, mas [se calhar] o problema é a pressa.', why: '*Pois* agrees; *se calhar* softens.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O autor ___ de seguir as notícias ao jantar. (deixar)', a: ['deixou'], why: 'Perfeito simples: *deixou*.' },
            { q: 'Mandei ___ a televisão. (desligar)', a: ['desligar'], why: '*Mandar* + infinitive.' },
            { q: 'Concordo ___ parte com o autor.', a: ['em'], why: '*Concordar em parte*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mandei desligar a televisão na sala.', why: '*Mandar* + infinitive.' },
            { a: 'Talvez o melhor seja verificar a fonte.', why: '*Talvez* + conjuntivo.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ontem a empresa ___ o boato.', o: ['desmentiu', 'desmentir', 'desmente'], why: 'Perfeito simples: *desmentiu*.' },
      { q: 'Mandei ___ o carro.', o: ['reparar', 'reparei', 'repara'], why: '*Mandar* + infinitive.' },
      { q: 'Agora a loja ___ fechada.', o: ['está', 'foi', 'é'], why: 'The state now: *estar*.' },
      { q: 'Talvez ___ razão.', o: ['tenhas', 'tens', 'tiveste'], why: '*Talvez* + conjuntivo.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Antes de partilhar, ___ a fonte. (tu, verificar)', a: ['verifica'], why: 'Imperative: *verifica*.' },
      { q: 'Deixei-o ___ até ao fim. (falar)', a: ['falar'], why: '*Deixar* + infinitive.' },
      { q: 'Não gosto da ideia; ___, acho-a perigosa.', a: ['aliás'], why: '*Aliás* adds a stronger point.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
      ['divulgar uma notícia', 'to spread a piece of news'],
      ['dar uma entrevista', 'to give an interview'],
      ['de facto', 'indeed'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the word in brackets.', items: [
      { q: 'O mecânico reparou o carro. Eu pedi isso.', cue: 'Mandei', a: ['Mandei reparar o carro.'], why: '*Mandar* + infinitive.' },
      { q: 'Ele falou. Eu deixei.', cue: 'Deixei-o', a: ['Deixei-o falar.'], why: 'The pronoun goes with *deixar*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'A ministra [fez] uma entrevista à rádio.', a: ['deu'], why: 'The person who answers *dá* an interview.' },
      { s: 'Concordo [de] parte.', a: ['em'], why: '*Concordar em parte*.' },
    ] },
  ],
};
