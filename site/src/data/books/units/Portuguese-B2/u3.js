// Portuguese B2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Although, provided that, unless',
  goal: 'Build precise complex sentences with conjunctions that take the conjuntivo. Learn embora, ainda que, por mais que, para que, desde que, a não ser que, caso, antes que and sem que, and when to use the infinitive instead.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['concession', 'purpose', 'condition', 'conjunctions', 'conjuntivo'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Embora, ainda que, apesar de',
      about: 'Express a contrast with conjunctions that take the conjuntivo.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To say that something happens **in spite of** something else, Portuguese has several connectors. **Embora**, **ainda que**, **por mais que** and **mesmo que** are followed by the **conjuntivo**: *Embora esteja cansado, trabalha. Ainda que chova, saímos. Por mais que tente, não consegue.* **Apesar de** is followed by a **noun** or an **infinitive**: *Apesar do frio, saímos. Apesar de estar cansado, trabalha.*' },
          { t: 'table', caption: 'Concession', explain: ['head', 'col1'], head: ['Connector', 'Followed by', 'Example'], rows: [
            ['embora', 'subjunctive', 'Embora esteja cansado, trabalha.'],
            ['ainda que', 'subjunctive', 'Ainda que chova, saímos.'],
            ['por mais que', 'subjunctive', 'Por mais que tente, não consegue.'],
            ['mesmo que', 'subjunctive', 'Mesmo que chova, saímos.'],
            ['apesar de', 'a noun or an infinitive', 'Apesar do frio, saímos.'],
            ['se bem que', 'indicative or subjunctive', 'Gosto dele, se bem que fale muito.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Never use the indicative after **embora** or **ainda que**. **Mesmo que** with the present subjunctive is about the future (*Mesmo que chova, saímos*); with the imperfeito do conjuntivo it is unlikely (*Mesmo que chovesse, sairíamos*). After **apesar de**, the personal infinitive is common when the subject changes: *Apesar de eles estarem cansados, continuaram.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Embora esteja** cansado, trabalha.', n: '*Embora* + conjuntivo.' },
            { s: '**Ainda que chova**, saímos.', n: '*Ainda que* + conjuntivo.' },
            { s: '**Por mais que tente**, não consegue.', n: '*Por mais que* + conjuntivo.' },
            { s: '**Apesar do frio**, saímos.', n: '*Apesar de* + noun.' },
            { s: '**Apesar de estar** cansado, trabalha.', n: '*Apesar de* + infinitive.' },
          ] },
          { t: 'dialogue', title: 'Uma excursão', lines: [
            { who: 'Sara', s: 'Vamos à serra no sábado?' },
            { who: 'Paulo', s: 'Embora a previsão seja má, eu vou com prazer.' },
            { who: 'Sara', s: 'Mesmo que chova?' },
            { who: 'Paulo', s: 'Sim, ainda que não goste de caminhar à chuva.' },
            { who: 'Sara', s: 'Então levo os impermeáveis.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Embora ___ cansado, trabalha. (ele, estar)', a: ['esteja'], why: '*Embora* + *esteja*.' },
            { q: 'Ainda que ___, saímos. (chover)', a: ['chova'], why: '*Ainda que* + *chova*.' },
            { q: 'Por mais que ___, não consegue. (ele, tentar)', a: ['tente'], why: '*Por mais que* + *tente*.' },
            { q: 'Embora eles ___ pouco tempo, ajudam todos. (ter)', a: ['tenham'], why: '*Embora* + *tenham*.' },
            { q: 'Mesmo que nós ___ muito, chegamos tarde. (correr)', a: ['corramos'], why: '*Mesmo que* + *corramos*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'What follows the connector? Sort them.', explain: ['groups'], groups: ['Subjunctive', 'Noun or infinitive'], items: [
            { s: 'embora', g: 0, why: '*Embora* + conjuntivo.' },
            { s: 'ainda que', g: 0, why: '*Ainda que* + conjuntivo.' },
            { s: 'por mais que', g: 0, why: '*Por mais que* + conjuntivo.' },
            { s: 'mesmo que', g: 0, why: '*Mesmo que* + conjuntivo.' },
            { s: 'apesar do frio', g: 1, why: '*Apesar de* + noun.' },
            { s: 'apesar de estar cansado', g: 1, why: '*Apesar de* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Mesmo que ___, saímos.', o: ['chova', 'chove', 'choveu'], why: '*Mesmo que* about the future: the conjuntivo.' },
            { q: 'Embora ___ tarde, ficamos mais um pouco.', o: ['seja', 'é', 'era'], why: '*Embora* + conjuntivo.' },
            { q: '___ do frio, saímos.', o: ['Apesar', 'Embora', 'Ainda que'], why: 'Before a noun: *apesar de*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the connector in brackets.', items: [
            { q: 'Está cansado. Trabalha.', cue: 'Embora', a: ['Embora esteja cansado, trabalha.'], why: '*Embora* + conjuntivo.' },
            { q: 'Chove. Saímos.', cue: 'Ainda que', a: ['Ainda que chova, saímos.'], why: '*Ainda que* + conjuntivo.' },
            { q: 'É tarde. Ficamos.', cue: 'Embora', a: ['Embora seja tarde, ficamos.'], why: '*Embora* + conjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Embora [está] cansado, trabalha.', a: ['esteja'], why: '*Embora* + conjuntivo.' },
            { s: 'Ainda que [chove], saímos.', a: ['chova'], why: '*Ainda que* + conjuntivo.' },
            { s: '[Embora] o frio, saímos.', a: ['Apesar do'], why: 'Before a noun: *apesar de*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Embora esteja cansado, trabalha.', why: '*Embora* + conjuntivo.' },
            { a: 'Ainda que chova, saímos.', why: '*Ainda que* + conjuntivo.' },
            { a: 'Apesar do frio, saímos.', why: '*Apesar de* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Para que, desde que, a não ser que',
      about: 'Express purpose and condition with the conjuntivo.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say **for what purpose**, use **para que** (or **a fim de que**) + conjuntivo: *Explico-te para que percebas.* To say **on one condition**, use **desde que**, **contanto que** + conjuntivo: *Vou, desde que não chova.* To say **unless**, use **a não ser que** + conjuntivo: *Partimos amanhã, a não ser que neve.* To say **in case**, use **caso** + conjuntivo: *Caso precises de ajuda, liga-me.*' },
          { t: 'table', caption: 'Purpose and condition', explain: ['head', 'col1'], head: ['Connector', 'Meaning', 'Example'], rows: [
            ['para que / a fim de que', 'so that', 'Explico-te para que percebas.'],
            ['desde que / contanto que', 'provided that', 'Vou, desde que não chova.'],
            ['a não ser que', 'unless', 'Partimos, a não ser que neve.'],
            ['caso', 'in case', 'Caso precises de ajuda, liga-me.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Desde que** has two meanings. With the **conjuntivo** it means *provided that*: *Vou, desde que não chova.* With the **indicative** it means *since*: *Desde que moro aqui, durmo bem.* **Caso** often goes with the **presente** or the **imperfeito do conjuntivo**: *Caso precises … Caso precisasse …*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Explico-te **para que percebas**.', n: 'Purpose.' },
            { s: 'Vou, **desde que não chova**.', n: 'One condition.' },
            { s: 'Empresto-te o carro **desde que o devolvas** amanhã.', n: 'A condition.' },
            { s: 'Partimos amanhã, **a não ser que neve**.', n: 'An exception.' },
            { s: '**Caso precises** de ajuda, liga-me.', n: 'In case.' },
          ] },
          { t: 'dialogue', title: 'Um piquenique', lines: [
            { who: 'Ana', s: 'Fazemos o piquenique no domingo?' },
            { who: 'Pedro', s: 'Está bem, desde que não chova.' },
            { who: 'Ana', s: 'Partimos cedo, a não ser que neve na serra.' },
            { who: 'Pedro', s: 'Levo uma manta, caso faça frio.' },
            { who: 'Ana', s: 'Ligo-te no sábado, para que saibas a hora.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the conjuntivo.', items: [
            { q: 'Explico-te para que ___. (tu, perceber)', a: ['percebas'], why: '*Para que* + *percebas*.' },
            { q: 'Vou, desde que não ___. (chover)', a: ['chova'], why: '*Desde que* + *chova*.' },
            { q: 'Partimos amanhã, a não ser que ___. (nevar)', a: ['neve'], why: '*A não ser que* + *neve*.' },
            { q: 'Caso ___ de ajuda, liga-me. (tu, precisar)', a: ['precises'], why: '*Caso* + *precises*.' },
            { q: 'Empresto-te o carro desde que o ___ amanhã. (tu, devolver)', a: ['devolvas'], why: '*Desde que* + *devolvas*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: 'Falo devagar ___ percebas.', o: ['para que', 'embora', 'apesar de'], why: 'Purpose: *para que*.' },
            { q: 'Vou ___ não chova.', o: ['desde que', 'embora', 'como se'], why: 'One condition: *desde que*.' },
            { q: 'Partimos amanhã, ___ neve.', o: ['a não ser que', 'antes que', 'sem que'], why: '*A não ser que* = unless.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the connector.', items: [
            { q: 'Falo devagar. Quero que percebas.', cue: 'Falo devagar', a: ['Falo devagar para que percebas.'], why: '*Para que* + conjuntivo.' },
            { q: 'Vou. Mas não deve chover.', cue: 'Vou', a: ['Vou desde que não chova.'], why: '*Desde que* + conjuntivo.' },
            { q: 'Partimos amanhã. Se nevar, não partimos.', cue: 'Partimos', a: ['Partimos amanhã, a não ser que neve.'], why: '*A não ser que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Vou desde que não [chove].', a: ['chova'], why: '*Desde que* + conjuntivo.' },
            { s: 'Falo devagar para que [percebes].', a: ['percebas'], why: '*Para que* + conjuntivo.' },
            { s: 'Partimos, a não ser que [neva].', a: ['neve'], why: '*A não ser que* + conjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
            ['para que', 'so that'],
            ['desde que', 'provided that'],
            ['a não ser que', 'unless'],
            ['caso', 'in case'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vou desde que não chova.', why: '*Desde que* + conjuntivo.' },
            { a: 'Explico-te para que percebas.', why: '*Para que* + conjuntivo.' },
            { a: 'Partimos amanhã a não ser que neve.', why: '*A não ser que* + conjuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Antes que, sem que, como se',
      about: 'Use the conjuntivo for time and manner, and the infinitive when the subject is the same.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Several other conjunctions take the **conjuntivo**: **antes que** (before), **sem que** (without), **até que** (until), **como se** (as if), **de modo que** (so that). But when the **subject is the same** in both clauses, use the **infinitive** with **antes de, sem, para, de modo a**: *Antes de sair, fecho a porta* (the same person), but *Antes que saias, fecho a porta* (two people). When the subject changes, the **personal infinitive** is also possible: *Antes de saíres, fecho a porta.* **Depois que** takes the indicative: *Depois que saíste, liguei.*' },
          { t: 'table', caption: 'Same subject or different subject', explain: ['head'], head: ['Same subject (infinitive)', 'Different subject (que + subjunctive)'], rows: [
            ['Antes de sair, fecho a porta.', 'Antes que saias, fecho a porta.'],
            ['Foi-se embora sem falar.', 'Foi-se embora sem que ninguém falasse.'],
            ['Estudo para perceber.', 'Explico-te para que percebas.'],
            ['Levanto-me cedo de modo a chegar a horas.', 'Acordo-te de modo que chegues a horas.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **como se**, use the **imperfeito** or the **mais-que-perfeito do conjuntivo**: *Fala como se fosse o chefe. Comporta-se como se não tivesse ouvido.* **Até que** takes the conjuntivo for the future: *Espera até que ele chegue.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Antes que partas**, quero despedir-me.', n: 'Two subjects: *antes que* + conjuntivo.' },
            { s: '**Antes de partir**, despedi-me de todos.', n: 'One subject: *antes de* + infinitive.' },
            { s: 'Foi-se embora **sem que ninguém o visse**.', n: '*Sem que* + imperfeito do conjuntivo.' },
            { s: 'Escrevo-te **de modo que saibas** tudo.', n: 'Purpose with *de modo que*.' },
            { s: 'Fala **como se fosse** o chefe.', n: '*Como se* + imperfeito do conjuntivo.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Same subject or different subject? Sort the phrases.', explain: ['groups'], groups: ['Same subject', 'Different subject'], items: [
            { s: 'antes de sair', g: 0, why: '*Antes de* + infinitive: one subject.' },
            { s: 'antes que saias', g: 1, why: '*Antes que* + conjuntivo: two subjects.' },
            { s: 'sem falar', g: 0, why: '*Sem* + infinitive: one subject.' },
            { s: 'sem que ninguém fale', g: 1, why: '*Sem que* + conjuntivo: two subjects.' },
            { s: 'para perceber', g: 0, why: '*Para* + infinitive: one subject.' },
            { s: 'para que percebas', g: 1, why: '*Para que* + conjuntivo: two subjects.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word or verb.', items: [
            { q: 'Antes que tu ___, quero despedir-me. (partir)', a: ['partas'], why: '*Antes que* + *partas*.' },
            { q: 'Foi-se embora sem que ninguém o ___. (ver)', a: ['visse'], why: '*Sem que* + imperfeito do conjuntivo.' },
            { q: 'Fala como se ___ o chefe. (ser)', a: ['fosse'], why: '*Como se* + *fosse*.' },
            { q: 'Escrevo-te de modo que ___ tudo. (tu, saber)', a: ['saibas'], why: '*De modo que* + *saibas*.' },
            { q: 'Antes ___ sair, fecha a porta.', a: ['de'], why: 'Same subject: *antes de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Antes ___ sair, fecha a porta.', o: ['de', 'que', 'da'], why: 'Same subject: *antes de* + infinitive.' },
            { q: 'Antes ___ tu saias, fecha a porta.', o: ['que', 'de', 'do'], why: 'Different subject: *antes que* + conjuntivo.' },
            { q: 'Foi-se embora sem ___ ninguém se apercebesse.', o: ['que', 'de', 'a'], why: 'Two subjects: *sem que* + conjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the phrase in brackets.', items: [
            { q: 'Saio. Primeiro fecho a porta.', cue: 'Antes de', a: ['Antes de sair, fecho a porta.'], why: 'One subject: *antes de* + infinitive.' },
            { q: 'Tu partes. Primeiro quero despedir-me.', cue: 'Antes que', a: ['Antes que partas, quero despedir-me.'], why: 'Two subjects: *antes que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Antes que [partes], quero despedir-me.', a: ['partas'], why: '*Antes que* + conjuntivo.' },
            { s: 'Antes [que] sair, fecho a porta.', a: ['de'], why: 'One subject: *antes de* + infinitive.' },
            { s: 'Fala como se [é] o chefe.', a: ['fosse'], why: '*Como se* + imperfeito do conjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Antes que partas, quero despedir-me.', why: '*Antes que* + conjuntivo.' },
            { a: 'Antes de partir, despedi-me de todos.', why: '*Antes de* + infinitive.' },
            { a: 'Fala como se fosse o chefe.', why: '*Como se* + imperfeito do conjuntivo.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um autocarro a cada dez minutos',
      about: 'Read an opinion piece on public transport.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Os transportes públicos na cidade', md: 'Embora muita gente pense que o carro seja o meio mais cómodo, na cidade os transportes públicos podem ser a melhor escolha, desde que funcionem bem. Um autocarro que chega atrasado ou que falta a uma carreira leva as pessoas a voltarem ao carro, apesar do trânsito.\n\nPara que mais pessoas usem os transportes públicos, a câmara devia aumentar as carreiras, a não ser que queira continuar a pagar o custo do trânsito. Antes que a situação piore, são precisas escolhas corajosas: bilhetes mais simples, faixas reservadas e horários claros.\n\nSem que ninguém tenha de mudar os hábitos de um dia para o outro, pode começar-se por uma linha.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Muita gente pensa que o carro é o meio mais cómodo.', a: 't', why: '*Embora muita gente pense que o carro seja o meio mais cómodo.*' },
            { q: 'O autor diz que os transportes públicos não servem para nada.', a: 'f', why: 'He says they can be the best choice.' },
            { q: 'O autor propõe bilhetes mais simples.', a: 't', why: '*Bilhetes mais simples, faixas reservadas e horários claros.*' },
            { q: 'A câmara já construiu uma nova linha.', a: 'ng', why: 'The text does not say so.' },
            { q: 'O autor aconselha a mudar tudo num dia.', a: 'f', why: '*Sem que ninguém tenha de mudar os hábitos de um dia para o outro.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'A que condição são os transportes públicos a melhor escolha?', o: ['Desde que funcionem bem.', 'Desde que custem pouco.', 'Desde que sejam novos.'], why: '*Desde que funcionem bem.*' },
            { q: 'O que leva as pessoas a voltar ao carro?', o: ['Um autocarro que chega atrasado.', 'O preço do bilhete.', 'O ruído.'], why: '*Um autocarro que chega atrasado … leva as pessoas a voltarem ao carro.*' },
            { q: 'Por onde se pode começar?', o: ['Por uma linha.', 'Por todas as linhas.', 'Pelas ruas.'], why: '*Pode começar-se por uma linha.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the conjuntivo.', items: [
            { s: 'Embora muita gente [pense] que o carro [seja] o meio mais cómodo, os transportes públicos podem ser a melhor escolha.', why: '*Pense* and *seja* follow *embora* and *pensar que*.' },
            { s: 'Para que mais pessoas [usem] os transportes públicos, a câmara devia aumentar as carreiras.', why: '*Usem* follows *para que*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word or verb.', items: [
            { q: 'Antes que a situação ___, são precisas escolhas corajosas. (piorar)', a: ['piore'], why: '*Antes que* + conjuntivo.' },
            { q: 'Os transportes públicos são a melhor escolha, ___ funcionem bem.', a: ['desde que'], why: '*Desde que* = provided that.' },
            { q: 'Para que mais pessoas ___ os transportes públicos, a câmara deve aumentar as carreiras. (usar)', a: ['usem'], why: '*Para que* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Embora muita gente pense que o carro seja cómodo, os transportes públicos servem.', why: '*Embora* + conjuntivo.' },
            { a: 'Pode começar-se por uma só linha.', why: 'A simple conclusion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Embora ___ cansado, trabalha.', o: ['esteja', 'está', 'estava'], why: '*Embora* + conjuntivo.' },
      { q: 'Falo devagar ___ percebas.', o: ['para que', 'embora', 'apesar de'], why: 'Purpose: *para que*.' },
      { q: 'Partimos amanhã, ___ neve.', o: ['a não ser que', 'antes que', 'sem que'], why: '*A não ser que* = unless.' },
      { q: 'Apesar ___ frio, saímos.', o: ['do', 'de', 'dos'], why: '*De + o = do*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Vou, desde que não ___. (chover)', a: ['chova'], why: '*Desde que* + conjuntivo.' },
      { q: 'Antes que tu ___, quero despedir-me. (partir)', a: ['partas'], why: '*Antes que* + conjuntivo.' },
      { q: 'Fala como se ___ o chefe. (ser)', a: ['fosse'], why: '*Como se* + imperfeito do conjuntivo.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the connector with its meaning.', pairs: [
      ['para que', 'so that'],
      ['desde que', 'provided that'],
      ['a não ser que', 'unless'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences with the connector in brackets.', items: [
      { q: 'Chove. Saímos.', cue: 'Ainda que', a: ['Ainda que chova, saímos.'], why: '*Ainda que* + conjuntivo.' },
      { q: 'Saio. Primeiro fecho a porta.', cue: 'Antes de', a: ['Antes de sair, fecho a porta.'], why: 'One subject: *antes de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Embora [está] cansado, trabalha.', a: ['esteja'], why: '*Embora* + conjuntivo.' },
      { s: 'Falo devagar para que [percebes].', a: ['percebas'], why: '*Para que* + conjuntivo.' },
    ] },
  ],
};
