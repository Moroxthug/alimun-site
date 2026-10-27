// Portuguese C1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Hypotheses and concessions with nuance',
  goal: 'Express conditions, hypotheses and concessions precisely in formal writing and in speech. Learn conquanto, nem que and uma vez que, the futuro do conjuntivo, fosse como fosse and mal, and the spoken imperfeito of hypotheses and unreal wishes.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['concession', 'conditions', 'subjunctive', 'hypotheses', 'debate'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Conquanto, nem que, uma vez que',
      about: 'Choose the conjunction and the mood for concession and cause.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Written Portuguese has several conjunctions for **concession** and **cause**. For concession (*although*) with the **conjuntivo**: **conquanto** and **ainda que**: **Conquanto seja difícil, é possível.** **Nem que** means *even if* and also takes the conjuntivo: **Nem que chova, vou à praia.** **Se bem que** means *although* and takes the **indicative** or the conjuntivo: **Se bem que estava cansado, ficou até ao fim.** For cause (*since*) with the **indicative**: **uma vez que**, **porquanto** and **dado que**: **Uma vez que o prazo terminou, o pedido é recusado.** **Porquanto não há provas, o caso é arquivado.**' },
          { t: 'table', caption: 'Concession and cause', explain: ['head', 'col1'], head: ['Conjunction', 'Meaning', 'Mood', 'Example'], rows: [
            ['conquanto / ainda que', 'although', 'conjuntivo', 'Conquanto seja difícil, é possível.'],
            ['nem que', 'even if', 'conjuntivo', 'Nem que chova, vou à praia.'],
            ['se bem que', 'although', 'indicative or conjuntivo', 'Se bem que estava cansado, ficou.'],
            ['uma vez que / dado que', 'since', 'indicative', 'Uma vez que o prazo terminou, …'],
            ['porquanto', 'since (formal)', 'indicative', 'Porquanto não há provas, …'],
          ] },
          { t: 'tip', art: 'owl', md: '**Conquanto** and **porquanto** are **formal and written**; in speech, people say **embora** and **porque**. **Nem que** is common in speech and takes the **imperfeito do conjuntivo** for a remote case (**nem que me pagassem**) and the **present** for a possible one (**nem que chova**). **Uma vez que** is not about time here: it gives a **reason**. In **Brazil**, **mesmo que** is much more common than **nem que**, but both are understood.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Conquanto seja** difícil, é possível.', n: 'Although: conjuntivo.' },
            { s: '**Nem que chova**, vou à praia.', n: 'Even if.' },
            { s: '**Se bem que estava** cansado, ficou até ao fim.', n: 'Although: indicative.' },
            { s: '**Uma vez que** o prazo terminou, o pedido é recusado.', n: 'Since: indicative.' },
            { s: '**Porquanto** não há provas, o caso é arquivado.', n: 'Since: formal.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Concession or cause? Sort the sentences.', groups: ['concession', 'cause'], explain: ['groups'], items: [
            { s: 'Conquanto seja difícil, é possível.', g: 0, why: 'Although.' },
            { s: 'Nem que chova, vou à praia.', g: 0, why: 'Even if.' },
            { s: 'Se bem que estava cansado, ficou.', g: 0, why: 'Although.' },
            { s: 'Uma vez que o prazo terminou, o pedido é recusado.', g: 1, why: 'A reason.' },
            { s: 'Porquanto não há provas, o caso é arquivado.', g: 1, why: 'A reason.' },
            { s: 'Dado que não há provas, o caso é arquivado.', g: 1, why: 'A reason.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Conquanto ___ difícil, é possível. (ser)', a: ['seja'], why: '*Conquanto* + conjuntivo.' },
            { q: 'Nem que ___, vou à praia. (chover)', a: ['chova'], why: '*Nem que* + conjuntivo.' },
            { q: 'Uma vez que o prazo ___, o pedido é recusado. (terminar, perfeito)', a: ['terminou'], why: '*Uma vez que* + indicative.' },
            { q: 'Porquanto não ___ provas, o caso é arquivado. (haver)', a: ['há'], why: '*Porquanto* + indicative.' },
            { q: 'Nem que me ___ um milhão, não aceitava. (pagar, imperfeito)', a: ['pagassem'], why: 'A remote case: imperfeito do conjuntivo.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Ainda que ___ tarde, vou ligar-lhe.', o: ['seja', 'é', 'será'], why: '*Ainda que* + conjuntivo.' },
            { q: 'Dado que não ___ provas, o caso foi arquivado.', o: ['havia', 'houvesse', 'haja'], why: '*Dado que* + indicative.' },
            { q: 'Nem que ___ a pé, chego a horas.', o: ['tenha de ir', 'tenho de ir', 'terei de ir'], why: '*Nem que* + conjuntivo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
            { q: 'Embora seja difícil, é possível.', cue: 'Conquanto', a: ['Conquanto seja difícil, é possível.'], why: '*Conquanto* + conjuntivo.' },
            { q: 'Como o prazo terminou, o pedido é recusado.', cue: 'Uma vez que', a: ['Uma vez que o prazo terminou, o pedido é recusado.'], why: '*Uma vez que* + indicative.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Conquanto [é] difícil, é possível.', a: ['seja'], why: '*Conquanto* + conjuntivo.' },
            { s: 'Nem que [chove], vou à praia.', a: ['chova'], why: '*Nem que* + conjuntivo.' },
            { s: 'Uma vez que o prazo [termine], o pedido é recusado.', a: ['terminou'], why: '*Uma vez que* + indicative.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Conquanto seja difícil, é possível.', why: '*Conquanto* + conjuntivo.' },
            { a: 'Nem que chova, vou à praia.', why: '*Nem que* + conjuntivo.' },
            { a: 'Uma vez que o prazo terminou, o pedido é recusado.', why: '*Uma vez que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Se o tempo o permitir, fosse como fosse',
      about: 'Use the futuro do conjuntivo and the imperfeito do conjuntivo in hypotheses.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'For a **possible future condition**, Portuguese uses **se + futuro do conjuntivo**: **Se o tempo o permitir, vamos à praia.** **Se não puderes vir, avisa.** For an **indifferent condition**, the **conjuntivo** repeats the verb: **Fosse como fosse, ele tinha de partir.** **Fosse quem fosse, não abria a porta.** **Digam o que disserem, não mudo de ideias.** **Quer chova, quer faça sol, vamos.** And **mal** + the **perfeito** means *as soon as*: **Mal chegou, telefonou-me.** **Mal acabou o trabalho, saiu.**' },
          { t: 'table', caption: 'Hypotheses and indifference', explain: ['head', 'col1'], head: ['Structure', 'Example'], rows: [
            ['se + futuro do conjuntivo', 'Se o tempo o permitir, vamos à praia.'],
            ['fosse como fosse', 'Fosse como fosse, ele tinha de partir.'],
            ['fosse quem fosse', 'Fosse quem fosse, não abria a porta.'],
            ['digam o que disserem', 'Digam o que disserem, não mudo de ideias.'],
            ['quer … quer + conjuntivo', 'Quer chova, quer faça sol, vamos.'],
            ['mal + perfeito', 'Mal chegou, telefonou-me.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The pairs **fosse como fosse**, **fosse quem fosse**, **fosse o que fosse** keep the **same verb twice** in the imperfeito do conjuntivo. For the future, use the **futuro do conjuntivo**: **digam o que disserem**, **faça o que fizer**. **Mal** here is a **conjunction**, not an adverb: **mal chegou** (as soon as he arrived), but **chegou mal** (he arrived badly). For the future, **mal** takes the **conjuntivo**: **Mal a obra acabe, …** In **Brazil**, **assim que** and **logo que** are more common than **mal**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se o tempo o permitir**, vamos à praia.', n: 'A possible condition in the future.' },
            { s: '**Fosse como fosse**, ele tinha de partir.', n: 'Whatever the case.' },
            { s: '**Fosse quem fosse**, não abria a porta.', n: 'Whoever it was.' },
            { s: '**Quer chova, quer faça sol**, vamos.', n: 'Whether … or.' },
            { s: '**Mal chegou**, telefonou-me.', n: 'As soon as.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the structure with its meaning.', pairs: [
            ['fosse como fosse', 'whatever the case'],
            ['fosse quem fosse', 'whoever it was'],
            ['quer chova, quer faça sol', 'whether it rains or shines'],
            ['mal chegou', 'as soon as he arrived'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se o tempo o ___, vamos à praia. (permitir, futuro do conjuntivo)', a: ['permitir'], why: '*Se* + futuro do conjuntivo.' },
            { q: 'Se não ___ vir, avisa. (poder, tu)', a: ['puderes'], why: 'The future subjunctive of *poder*.' },
            { q: 'Fosse como ___, ele tinha de partir. (ser)', a: ['fosse'], why: 'The pair repeats the verb.' },
            { q: 'Digam o que ___, não mudo de ideias. (dizer)', a: ['disserem'], why: 'The future subjunctive of *dizer*.' },
            { q: '___ chegou, telefonou-me.', a: ['Mal'], why: '*Mal* = as soon as.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quer ___, quer faça sol, vamos à praia.', o: ['chova', 'chove', 'chover'], why: '*Quer … quer* + conjuntivo.' },
            { q: 'Se ___ tempo, passa por cá.', o: ['tiveres', 'tens', 'terás'], why: '*Se* + futuro do conjuntivo.' },
            { q: '___ acabou o trabalho, saiu.', o: ['Mal', 'Mau', 'Mais'], why: '*Mal* = as soon as.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the structure in brackets.', items: [
            { q: 'Quando chegou, telefonou-me logo.', cue: 'Mal', a: ['Mal chegou, telefonou-me.'], why: '*Mal* + perfeito.' },
            { q: 'Seja quem for, não abro a porta.', cue: 'Fosse', a: ['Fosse quem fosse, não abria a porta.'], why: 'The imperfeito version for the past.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Se não [podes] vir, avisa. (future)', a: ['puderes'], why: 'The future subjunctive after *se*.' },
            { s: 'Quer [chove], quer faça sol, vamos.', a: ['chova'], why: '*Quer … quer* + conjuntivo.' },
            { s: 'Fosse como [é], ele tinha de partir.', a: ['fosse'], why: 'The pair repeats the verb *fosse*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se o tempo o permitir, vamos à praia.', why: '*Se* + futuro do conjuntivo.' },
            { a: 'Quer chova, quer faça sol, vamos.', why: '*Quer … quer*.' },
            { a: 'Mal chegou, telefonou-me logo.', why: '*Mal* + perfeito.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se eu soubesse, ia',
      about: 'Use the imperfeito in spoken hypotheses and wishes.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In **spoken Portuguese**, the imperfeito replaces the condicional in hypotheses. The formal sentence **Se eu soubesse, iria** becomes **Se eu soubesse, ia.** And **Se eu tivesse sabido, teria ido** becomes **Se eu tivesse sabido, tinha ido.** This is natural in conversation and in informal writing, but not in a formal text. The imperfeito also says what **almost happened**: **Por pouco caía.** An **unreal wish** uses **quem me dera** or **oxalá** with the **imperfeito do conjuntivo**: **Quem me dera ter mais tempo!** **Oxalá fosse verdade!**' },
          { t: 'table', caption: 'The imperfeito in hypotheses', explain: ['head', 'col1'], head: ['Spoken', 'Formal', 'Meaning'], rows: [
            ['Se eu soubesse, ia.', 'Se eu soubesse, iria.', 'If I knew, I would go.'],
            ['Se eu tivesse sabido, tinha ido.', 'Se eu tivesse sabido, teria ido.', 'If I had known, I would have gone.'],
            ['Por pouco caía.', 'Quase caí.', 'I almost fell.'],
            ['Quem me dera ter mais tempo!', 'Oxalá tivesse mais tempo!', 'If only I had more time!'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use the spoken form with friends, never in an exam essay or a letter. For writing, keep **se + imperfeito do conjuntivo + condicional**. **Quem me dera** is a fixed phrase and takes the **conjuntivo**: **Quem me dera que fosse verdade!** **Oxalá** can also take the **present subjunctive** for a possible wish: **Oxalá chova amanhã!** In **Brazil**, the imperfeito is the **normal** form in speech: **Se eu soubesse, ia**.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Se eu soubesse, **ia**.', n: 'Spoken for: I would go.' },
            { s: 'Se eu tivesse sabido, **tinha ido**.', n: 'Spoken for: I would have gone.' },
            { s: '**Por pouco caía.**', n: 'I almost fell.' },
            { s: '**Quem me dera** ter mais tempo!', n: 'If only I had more time!' },
            { s: '**Oxalá fosse** verdade!', n: 'If only it were true!' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Spoken or formal? Sort the sentences.', groups: ['spoken', 'formal'], explain: ['groups'], items: [
            { s: 'Se eu soubesse, ia.', g: 0, why: 'The imperfeito replaces the condicional.' },
            { s: 'Se eu tivesse sabido, tinha ido.', g: 0, why: 'Spoken style.' },
            { s: 'Por pouco caía.', g: 0, why: 'Spoken style.' },
            { s: 'Se eu soubesse, iria.', g: 1, why: 'Formal: the condicional.' },
            { s: 'Se eu tivesse sabido, teria ido.', g: 1, why: 'Formal: the condicional composto.' },
            { s: 'Quase caí.', g: 1, why: 'Neutral and written.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Se eu soubesse, ___. (ir, imperfeito)', a: ['ia'], why: 'The spoken hypothesis.' },
            { q: 'Se eu tivesse sabido, ___ ido. (ter, imperfeito)', a: ['tinha'], why: 'The spoken hypothesis.' },
            { q: 'Por pouco ___. (cair, imperfeito)', a: ['caía'], why: '*Por pouco* + imperfeito.' },
            { q: 'Quem me ___ ter mais tempo! (dar)', a: ['dera'], why: 'The fixed phrase *quem me dera*.' },
            { q: 'Oxalá ___ verdade! (ser, imperfeito do conjuntivo)', a: ['fosse'], why: '*Oxalá* + imperfeito do conjuntivo.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the spoken sentence with the formal one.', pairs: [
            ['Se eu soubesse, ia.', 'Se eu soubesse, iria.'],
            ['Se eu tivesse sabido, tinha ido.', 'Se eu tivesse sabido, teria ido.'],
            ['Por pouco caía.', 'Quase caí.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Se eu soubesse, ia.', cue: 'Se eu soubesse', a: ['Se eu soubesse, iria.'], why: 'The condicional.' },
            { q: 'Se eu tivesse sabido, tinha ido.', cue: 'Se eu tivesse sabido', a: ['Se eu tivesse sabido, teria ido.'], why: 'The condicional composto.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Oxalá [é] verdade!', a: ['fosse'], why: 'The unreal wish needs the imperfeito do conjuntivo.' },
            { s: 'Se eu tivesse sabido, [vou] ter ido.', a: ['teria'], why: 'The condicional composto.' },
            { s: 'Por pouco [caio].', a: ['caía'], why: '*Por pouco* + imperfeito.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se eu soubesse, ia contigo.', why: 'The spoken hypothesis.' },
            { a: 'Quem me dera ter mais tempo!', why: 'A fixed phrase.' },
            { a: 'Se eu tivesse sabido, teria ido.', why: 'The formal hypothesis.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Um debate sobre uma decisão pública',
      about: 'Read a debate full of conditions and concessions.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'A praça fechada ao trânsito', md: 'A assembleia municipal debate o fecho de uma praça ao trânsito.\n\nVEREADORA: Fecharemos a praça, uma vez que o ruído é excessivo. Se os comerciantes o pedirem, reveremos a decisão passados seis meses.\n\nCOMERCIANTE: Conquanto a ideia seja boa, temo pelas vendas. Nem que os clientes aumentem, os fornecedores não conseguirão chegar.\n\nVEREADORA: Fosse como fosse, haveria sempre um horário de entregas pela manhã. Mal a obra acabe, o horário entra em vigor.\n\nCOMERCIANTE: Se bem que a proposta é razoável, quer chova, quer faça sol, os fornecedores precisam de acesso. Quem me dera que fosse sempre tão simples!\n\nRESIDENTE: Se eu soubesse, participava mais cedo! Oxalá me ouçam agora.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A praça será fechada porque o ruído é excessivo.', a: 't', why: '*Uma vez que o ruído é excessivo.*' },
            { q: 'A decisão pode ser revista passados seis meses.', a: 't', why: '*Reveremos a decisão passados seis meses.*' },
            { q: 'O comerciante acha que a ideia é má.', a: 'f', why: '*Conquanto a ideia seja boa.*' },
            { q: 'A vereadora propõe um horário de entregas pela manhã.', a: 't', why: '*Um horário de entregas pela manhã.*' },
            { q: 'O residente já participou antes.', a: 'f', why: '*Se eu soubesse, participava mais cedo.*' },
            { q: 'A praça tem uma fonte.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Qual é o problema principal do comerciante?', o: ['Os fornecedores não conseguirão chegar.', 'O preço da renda.', 'O barulho.'], why: '*Os fornecedores não conseguirão chegar.*' },
            { q: 'Que solução propõe a vereadora?', o: ['Um horário de entregas pela manhã.', 'Reabrir a praça.', 'Um parque novo.'], why: '*Um horário de entregas pela manhã.*' },
            { q: 'O que diz o residente?', o: ['Teria participado mais cedo.', 'Está contra.', 'Não vive na zona.'], why: '*Se eu soubesse, participava mais cedo.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the conjunctions of concession, cause and time.', items: [
            { s: 'Fecharemos a praça, [uma vez que] o ruído é excessivo.', why: 'A conjunction of cause.' },
            { s: '[Conquanto] a ideia seja boa, temo pelas vendas. [Nem que] os clientes aumentem, os fornecedores não conseguirão chegar.', why: 'Concession.' },
            { s: '[Mal] a obra acabe, o horário entra em vigor. [Quer chova, quer faça sol], os fornecedores precisam de acesso.', why: '*Mal* and *quer … quer*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Fecharemos a praça, uma ___ que o ruído é excessivo.', a: ['vez'], why: '*Uma vez que*.' },
            { q: 'Conquanto a ideia ___ boa, temo pelas vendas. (ser)', a: ['seja'], why: '*Conquanto* + conjuntivo.' },
            { q: 'Oxalá me ___ agora. (ouvir, presente do conjuntivo)', a: ['ouçam'], why: '*Oxalá* + conjuntivo.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se eu soubesse, participava mais cedo.', why: 'The spoken hypothesis.' },
            { a: 'Quem me dera que fosse sempre tão simples!', why: 'An unreal wish.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Conquanto ___ difícil, é possível.', o: ['seja', 'é', 'será'], why: '*Conquanto* + conjuntivo.' },
      { q: 'Uma vez que o prazo ___, o pedido é recusado.', o: ['terminou', 'termine', 'terminasse'], why: '*Uma vez que* + indicative.' },
      { q: 'Quer ___, quer faça sol, vamos.', o: ['chova', 'chove', 'chover'], why: '*Quer … quer* + conjuntivo.' },
      { q: 'Se não ___ vir, avisa.', o: ['puderes', 'podes', 'poderás'], why: '*Se* + futuro do conjuntivo.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nem que ___, vou à praia. (chover)', a: ['chova'], why: '*Nem que* + conjuntivo.' },
      { q: 'Oxalá ___ verdade! (ser, imperfeito do conjuntivo)', a: ['fosse'], why: '*Oxalá* + imperfeito do conjuntivo.' },
      { q: '___ chegou, telefonou-me. (as soon as)', a: ['Mal'], why: '*Mal* = as soon as.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the spoken sentence with the formal one.', pairs: [
      ['Se eu soubesse, ia.', 'Se eu soubesse, iria.'],
      ['Se eu tivesse sabido, tinha ido.', 'Se eu tivesse sabido, teria ido.'],
      ['Por pouco caía.', 'Quase caí.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Embora seja difícil, é possível.', cue: 'Conquanto', a: ['Conquanto seja difícil, é possível.'], why: '*Conquanto* + conjuntivo.' },
      { q: 'Quando chegou, telefonou-me logo.', cue: 'Mal', a: ['Mal chegou, telefonou-me.'], why: '*Mal* + perfeito.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Conquanto [é] difícil, é possível.', a: ['seja'], why: '*Conquanto* + conjuntivo.' },
      { s: 'Se não [podes] vir, avisa. (future)', a: ['puderes'], why: 'The future subjunctive after *se*.' },
    ] },
  ],
};
