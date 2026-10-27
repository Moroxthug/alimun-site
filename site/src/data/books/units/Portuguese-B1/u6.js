// Portuguese B1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'News and daily life',
  goal: 'Understand the news and talk about what is done and what people say. Learn the passive with ser, impersonal sentences with se, participles with two forms, and reported speech.',
  art: 'pretzel',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passive voice', 'se passive', 'impersonal', 'participles', 'reported speech', 'news'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'A passiva',
      about: 'Use ser and the participle, and say who does it with por.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'In the **passive**, the object of an active sentence becomes the subject. Active: *A câmara organiza a festa.* Passive: *A festa é organizada pela câmara.* The passive is made with **ser** and the **past participle**, which agrees with the subject: *A carta foi escrita. Os bilhetes foram vendidos.* The person who does the action is introduced by **por**: *escrita por um amigo.* **Por** + *a* becomes **pela**, **por** + *o* becomes **pelo**.' },
          { t: 'table', caption: 'The passive in different tenses', explain: ['head'], head: ['Tense', 'ser + participle'], rows: [
            ['present', 'é lido, é lida'],
            ['imperfeito', 'era lido, era lida'],
            ['perfeito', 'foi lido, foi lida, foram lidos'],
            ['future', 'será lido, será lida'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the news, the passive is very common: *A ponte será fechada durante dois meses. Duas pessoas foram levadas para o hospital.* The agent is often left out. Do not confuse **ser** + participle (an action) with **estar** + participle (a result): *A porta foi aberta* (someone opened it) and *A porta está aberta* (it is open).' },
        ],
        [
          { t: 'examples', items: [
            { s: 'A festa **é organizada** pela câmara.', n: 'Present passive.' },
            { s: 'A carta **foi escrita** por um amigo.', n: 'Perfeito: *foi escrita* agrees with *carta*.' },
            { s: 'Os bilhetes **foram vendidos** ontem.', n: 'Plural: *foram vendidos*.' },
            { s: 'A ponte **será reparada** amanhã.', n: 'Future passive.' },
            { s: 'A porta **está aberta**.', n: 'A result with *estar*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Turn the sentence into the passive.', items: [
            { q: 'A câmara organiza a festa.', a: ['A festa é organizada pela câmara.'], why: 'The object becomes the subject; *por* + *a* = *pela*.' },
            { q: 'Fecharam a rua.', a: ['A rua foi fechada.'], why: 'Perfeito passive: *foi fechada*.' },
            { q: 'Um arquiteto construiu a ponte.', a: ['A ponte foi construída por um arquiteto.'], why: '*A ponte foi construída por …*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the participle in the right form.', items: [
            { q: 'A festa é ___ pela câmara. (organizar)', a: ['organizada'], why: 'It agrees with *a festa*: *organizada*.' },
            { q: 'A ponte foi ___ em 1950. (construir)', a: ['construída'], why: 'It agrees with *a ponte*: *construída*.' },
            { q: 'As ruas foram ___ por causa da chuva. (fechar)', a: ['fechadas'], why: 'It agrees with *as ruas*: *fechadas*.' },
            { q: 'Os bilhetes foram ___ ontem. (vender)', a: ['vendidos'], why: 'It agrees with *os bilhetes*: *vendidos*.' },
            { q: 'A carta foi ___ por um amigo. (escrever)', a: ['escrita'], why: 'The participle of *escrever* is *escrito*; feminine: *escrita*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'As ruas ___ fechadas ontem.', o: ['foram', 'foi', 'eram'], why: 'Plural, a finished event: *foram*.' },
            { q: 'A casa ___ construída em 1950.', o: ['foi', 'foram', 'é'], why: 'Feminine singular, finished: *foi*.' },
            { q: 'O livro foi escrito ___ uma jornalista.', o: ['por', 'de', 'para'], why: 'The agent: *por*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Os bilhetes foram [vendido].', a: ['vendidos'], why: 'It agrees with *os bilhetes*.' },
            { s: 'A carta foi [escrito].', a: ['escrita'], why: 'It agrees with *a carta*.' },
            { s: 'O livro é escrito [de] uma jornalista.', a: ['por'], why: 'The agent: *por*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A festa é organizada pela câmara.', why: 'The subject is *a festa*.' },
            { a: 'Os bilhetes foram vendidos ontem.', why: 'Perfeito passive.' },
            { a: 'A ponte será reparada amanhã.', why: 'Future passive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Dizem que, diz-se que',
      about: 'Use impersonal sentences and the participles with two forms.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'To say what people say in general, use the **third person plural** without a subject, or **se**: *Dizem que vai chover. Diz-se que vai chover.* To say *everybody*, use **toda a gente**. In speech, **a gente** means *we*: *A gente vai ao cinema* (= nós vamos). Some verbs have **two participles**. The **short** one is used with **ser** and **estar**, the **long** one with **ter**: *O pedido foi aceite* but *Tinha aceitado o pedido*; *A carta foi entregue* but *Tinha entregado a carta*.' },
          { t: 'table', caption: 'Two participles', explain: ['head'], head: ['Infinitive', 'with ter (long)', 'with ser or estar (short)'], rows: [
            ['aceitar', 'aceitado', 'aceite'],
            ['entregar', 'entregado', 'entregue'],
            ['pagar', 'pagado / pago', 'pago'],
            ['ganhar', 'ganhado / ganho', 'ganho'],
          ] },
          { t: 'tip', art: 'owl', md: 'In everyday speech, many people use the short participle with **ter** too: *Tinha entregue a carta*, *Já tinha pago*. For a safe written style, use the long form with *ter* and the short form with *ser* and *estar*. The verb **pagar** is the exception: **pago** is the usual form everywhere.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Dizem que** vai chover.', n: 'People say.' },
            { s: '**Diz-se que** o inverno vai ser frio.', n: 'It is said.' },
            { s: 'A carta **foi entregue** ontem.', n: 'Short participle with *ser*.' },
            { s: '**Tinha entregado** a carta antes.', n: 'Long participle with *ter*.' },
            { s: 'O pedido **foi aceite**.', n: 'Short participle with *ser*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right participle.', items: [
            { q: 'A carta foi ___ ontem. (entregar)', a: ['entregue'], why: 'With *ser*: the short participle.' },
            { q: 'O pedido foi ___ pela empresa. (aceitar)', a: ['aceite'], why: 'With *ser*: the short participle.' },
            { q: 'Eu tinha ___ a carta. (entregar)', a: ['entregado'], why: 'With *ter*: the long participle.' },
            { q: 'A conta foi ___ ontem. (pagar)', a: ['paga'], why: 'It agrees with *a conta*: *paga*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it without a subject.', items: [
            { q: 'As pessoas dizem que vai chover.', a: ['Dizem que vai chover.', 'Diz-se que vai chover.'], why: 'Without a subject, or with *se*.' },
            { q: 'As pessoas dizem que o inverno vai ser frio.', a: ['Dizem que o inverno vai ser frio.', 'Diz-se que o inverno vai ser frio.'], why: 'Without a subject, or with *se*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'A carta foi ___ ontem.', o: ['entregue', 'entregado', 'entregar'], why: 'With *ser*: the short participle.' },
            { q: 'O pedido ___ aceite.', o: ['foi', 'tinha', 'havia'], why: 'The passive uses *ser*.' },
            { q: 'Eu tinha ___ o convite.', o: ['aceitado', 'aceite', 'aceitar'], why: 'With *ter*: the long participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'A carta foi [entregado] ontem.', a: ['entregue'], why: 'With *ser*: the short participle.' },
            { s: 'Eu tinha [aceite] o pedido.', a: ['aceitado'], why: 'With *ter*: the long participle.' },
            { s: '[Diz] que vai chover.', a: ['Dizem', 'Diz-se'], why: 'Without a subject: *dizem que* or *diz-se que*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Dizem que vai chover amanhã.', why: 'People say.' },
            { a: 'A carta foi entregue ontem.', why: 'Short participle with *ser*.' },
            { a: 'Tinha entregado a carta antes.', why: 'Long participle with *ter*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Disse que…',
      about: 'Report what someone said and asked, with the tense changes.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To report what someone said, use **que** and change the person: *O Marco disse: «Estou cansado»* becomes *O Marco disse que estava cansado.* When the reporting verb is in the **perfeito** (*disse, explicou*), the verb usually moves one step back: the present becomes the **imperfeito**, the perfeito becomes the **mais-que-perfeito**, and the future becomes the **condicional**. A command becomes **para** + infinitive, and a yes/no question becomes **se**.' },
          { t: 'table', caption: 'Direct and reported speech', explain: ['head'], head: ['Direct speech', 'Reported speech'], rows: [
            ['«Estou cansado.»', 'Disse que estava cansado.'],
            ['«Comi.»', 'Disse que tinha comido.'],
            ['«Virei amanhã.»', 'Disse que viria no dia seguinte.'],
            ['«Espera aqui!»', 'Disse-me para esperar ali.'],
            ['«Tens fome?»', 'Perguntou-me se eu tinha fome.'],
          ] },
          { t: 'table', caption: 'Time and place words change too', explain: ['head'], head: ['Direct', 'Reported'], rows: [
            ['hoje', 'nesse dia'],
            ['ontem', 'no dia anterior'],
            ['amanhã', 'no dia seguinte'],
            ['agora', 'então'],
            ['aqui', 'ali'],
          ] },
        ],
        [
          { t: 'examples', items: [
            { s: 'O Marco disse que **estava** cansado.', n: 'Present → imperfeito.' },
            { s: 'A Ana disse que **tinha comido**.', n: 'Perfeito → mais-que-perfeito.' },
            { s: 'O Paulo disse que **viria** no dia seguinte.', n: 'Future → condicional.' },
            { s: 'O médico disse-me **para descansar**.', n: 'A command → *para* + infinitive.' },
            { s: 'Perguntou-me **se** eu tinha fome.', n: 'A question → *se*.' },
          ] },
          { t: 'dialogue', title: 'No médico', lines: [
            { who: 'Ana', s: 'O que te disse o médico?' },
            { who: 'Pedro', s: 'Disse-me que eu não tinha nada de grave.' },
            { who: 'Ana', s: 'Fez-te perguntas?' },
            { who: 'Pedro', s: 'Perguntou-me se eu dormia bem e aconselhou-me a descansar.' },
            { who: 'Ana', s: 'E os medicamentos?' },
            { who: 'Pedro', s: 'Disse que não eram necessários.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Report what was said.', items: [
            { q: 'O Marco disse: «Estou cansado».', cue: 'O Marco disse que', a: ['O Marco disse que estava cansado.'], why: 'Present → imperfeito.' },
            { q: 'A Ana disse: «Comi».', cue: 'A Ana disse que', a: ['A Ana disse que tinha comido.'], why: 'Perfeito → mais-que-perfeito.' },
            { q: 'O Paulo disse: «Virei amanhã».', cue: 'O Paulo disse que', a: ['O Paulo disse que viria no dia seguinte.', 'O Paulo disse que viria amanhã.'], why: 'Future → condicional; *amanhã* → *no dia seguinte*.' },
            { q: 'Perguntou: «Tens fome?»', cue: 'Perguntou', a: ['Perguntou se eu tinha fome.', 'Perguntou se tinha fome.'], why: 'A question → *se* + imperfeito.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Ontem o Marco disse que ___ cansado, mas hoje está bem.', o: ['estava', 'está', 'estaria'], why: 'After *disse*, the present moves to the imperfeito: *estava*.' },
            { q: 'A Ana disse que já ___ comido.', o: ['tinha', 'tem', 'teria'], why: 'Perfeito → mais-que-perfeito: *tinha comido*.' },
            { q: 'O médico disse-me ___ descansar.', o: ['para', 'que', 'se'], why: 'A command → *para* + infinitive.' },
            { q: 'Perguntou-me ___ eu tinha fome.', o: ['se', 'que', 'para'], why: 'A yes/no question → *se*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O Paulo disse que ___ no dia seguinte. (vir, condicional)', a: ['viria'], why: 'Future → condicional: *viria*.' },
            { q: 'A Sara disse que ___ atrasada nesse dia. (estar)', a: ['estava'], why: 'Present → imperfeito: *estava*.' },
            { q: 'O chefe disse que o trabalho acabaria no dia ___.', a: ['seguinte'], why: '*Amanhã* → *no dia seguinte*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'O Marco disse que estava cansado.', why: 'Present → imperfeito.' },
            { a: 'Perguntou-me se eu tinha fome.', why: 'A question → *se*.' },
            { a: 'O médico disse-me para descansar.', why: 'A command → *para* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ontem a Ana disse que [comeu] cedo, mas hoje não.', a: ['tinha comido'], why: 'Perfeito → mais-que-perfeito.' },
            { s: 'O médico disse-me [que] descansar.', a: ['para'], why: 'A command → *para* + infinitive.' },
            { s: 'Perguntou-me [que] eu tinha fome.', a: ['se'], why: 'A yes/no question → *se*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A biblioteca fecha',
      about: 'Read a short news item and a reader’s comment.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Biblioteca fecha para obras', md: 'A biblioteca municipal de uma pequena cidade vai fechar durante dois meses. O presidente da câmara disse que as obras estariam concluídas em janeiro. O telhado é reparado e as salas são renovadas. Segundo a câmara, os estudantes poderão estudar na sala do antigo cinema, onde já há muitos lugares. Espera-se que muitas pessoas usem este serviço.' },
          { t: 'reading', title: 'Um comentário', md: 'Fico contente que se repare a biblioteca, mas lamento que os estudantes tenham de mudar de sala. Um funcionário disse-me que a câmara tentaria acabar mais cedo. Espero que seja verdade!\n\nLuís' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A biblioteca vai fechar durante dois meses.', a: 't', why: '*Vai fechar durante dois meses.*' },
            { q: 'As obras estariam concluídas em janeiro.', a: 't', why: '*O presidente disse que as obras estariam concluídas em janeiro.*' },
            { q: 'Os estudantes não poderão estudar em lado nenhum.', a: 'f', why: 'They can study in the old cinema.' },
            { q: 'A biblioteca tem um novo diretor.', a: 'ng', why: 'The text does not mention a director.' },
            { q: 'O leitor espera que a câmara acabe mais cedo.', a: 't', why: '*Espero que seja verdade!*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'O que é reparado?', o: ['O telhado.', 'O chão.', 'A porta.'], why: '*O telhado é reparado.*' },
            { q: 'Onde poderão estudar os estudantes?', o: ['Na sala do antigo cinema.', 'Numa escola.', 'Em casa.'], why: '*Na sala do antigo cinema.*' },
            { q: 'O que disse um funcionário ao leitor?', o: ['Que a câmara tentaria acabar mais cedo.', 'Que a biblioteca já estava fechada.', 'Que as obras seriam longas.'], why: '*Disse-me que a câmara tentaria acabar mais cedo.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the passive verbs.', items: [
            { s: 'O telhado [é reparado] e as salas [são renovadas].', why: '*É reparado* and *são renovadas* are passive.' },
            { s: 'As obras [estariam concluídas] em janeiro.', why: '*Estariam concluídas* is the condicional with a participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'O telhado ___ reparado e as salas são renovadas. (ser)', a: ['é'], why: 'Present passive: *é reparado*.' },
            { q: 'Fico contente que se ___ a biblioteca. (reparar)', a: ['repare'], why: '*Fico contente que* + subjunctive.' },
            { q: 'Um funcionário ___-me que a câmara tentaria acabar mais cedo. (dizer)', a: ['disse'], why: '*Disse-me que* introduces the report.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'A biblioteca vai fechar durante dois meses.', why: '*Ir* + infinitive.' },
            { a: 'Um funcionário disse-me que a câmara tentaria acabar mais cedo.', why: 'Reported plan: the condicional.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'As ruas ___ fechadas ontem.', o: ['foram', 'foi', 'eram'], why: 'Plural, a finished event: *foram*.' },
      { q: 'A carta foi ___ ontem.', o: ['entregue', 'entregado', 'entregar'], why: 'With *ser*: the short participle.' },
      { q: 'Ontem o Marco disse que ___ cansado, mas hoje está bem.', o: ['estava', 'está', 'estaria'], why: 'Present → imperfeito.' },
      { q: 'O médico disse-me ___ descansar.', o: ['para', 'que', 'se'], why: 'A command → *para* + infinitive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'A festa é ___ pela câmara. (organizar)', a: ['organizada'], why: 'It agrees with *a festa*.' },
      { q: 'Eu tinha ___ a carta. (entregar)', a: ['entregado'], why: 'With *ter*: the long participle.' },
      { q: 'O Paulo disse que ___ no dia seguinte. (vir, condicional)', a: ['viria'], why: 'Future → condicional.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the direct and the reported time word.', pairs: [
      ['hoje', 'nesse dia'],
      ['amanhã', 'no dia seguinte'],
      ['aqui', 'ali'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'A câmara organiza a festa.', a: ['A festa é organizada pela câmara.'], why: 'The object becomes the subject.' },
      { q: 'A Ana disse: «Comi».', cue: 'A Ana disse que', a: ['A Ana disse que tinha comido.'], why: 'Perfeito → mais-que-perfeito.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Os bilhetes foram [vendido].', a: ['vendidos'], why: 'It agrees with *os bilhetes*.' },
      { s: 'Perguntou-me [que] eu tinha fome.', a: ['se'], why: 'A yes/no question → *se*.' },
    ] },
  ],
};
