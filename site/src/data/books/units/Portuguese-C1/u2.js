// Portuguese C1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Pronouns and the personal infinitive',
  goal: 'Control the placement of pronouns and the nuances of the personal infinitive. Learn the triggers of proclisis, pronouns in long verb groups, the infinitivo pessoal in depth, the futuro do conjuntivo and combined pronouns such as mo, to and lho.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['pronouns', 'personal infinitive', 'future subjunctive', 'word order'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Onde pôr o pronome',
      about: 'Place the pronoun correctly in complex sentences.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In European Portuguese, the pronoun normally follows the verb (**enclisis**): **Dou-lhe o livro.** But some words **attract** it before the verb (**proclisis**). The main triggers are: **negation** (*não, nunca, ninguém, nada*), **some adverbs** (*já, só, também, sempre, ainda, talvez*), **relative and interrogative words** (*que, quem, onde, como*), **quantifiers** (*todos, alguém, tudo, poucos*) and **subordinating conjunctions** (*que, se, quando, porque*): **Não lhe dou o livro. Já me disse. Quem te disse isso? Todos o conhecem. Disse que me ajudava.** In a long verb group, the pronoun can follow the **first** verb or the **infinitive**: **Quero-lhe dizer** or **Quero dizer-lhe**. After a trigger, it goes before the first verb: **Não lhe quero dizer** or **Não quero dizer-lhe**.' },
          { t: 'table', caption: 'Pronoun placement', explain: ['head', 'col1'], head: ['Situation', 'Example'], rows: [
            ['no trigger: after the verb', 'Dou-lhe o livro.'],
            ['negation: before the verb', 'Não lhe dou o livro.'],
            ['adverb: before the verb', 'Já me disse a verdade.'],
            ['question word: before the verb', 'Quem te disse isso?'],
            ['quantifier: before the verb', 'Todos o conhecem.'],
            ['conjunction: before the verb', 'Disse que me ajudava.'],
            ['verb group, no trigger', 'Quero dizer-lhe. / Quero-lhe dizer.'],
            ['verb group, with trigger', 'Não lhe quero dizer. / Não quero dizer-lhe.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In **Brazilian Portuguese**, the pronoun usually goes **before** the verb, even at the start of a sentence: **Me disse a verdade.** **Eu te dou o livro.** In Portugal, a sentence **never starts** with an unstressed pronoun: *Me disse a verdade* is wrong. After **ontem, hoje, aqui** and other adverbs of time and place, both orders are accepted: **Ontem disse-me** or **Ontem me disse**. After **e** and **mas**, the pronoun usually follows the verb: **Chegou e disse-me.**' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Dou-lhe** o livro.', n: 'No trigger: after the verb.' },
            { s: '**Não lhe** dou o livro.', n: 'Negation: before the verb.' },
            { s: '**Já me** disse a verdade.', n: 'An adverb.' },
            { s: '**Quem te** disse isso?', n: 'A question word.' },
            { s: '**Todos o** conhecem.', n: 'A quantifier.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'After the verb or before it? Sort the sentences.', groups: ['after the verb', 'before the verb'], explain: ['groups'], items: [
            { s: 'Dou-lhe o livro.', g: 0, why: 'No trigger.' },
            { s: 'Chegou e disse-me tudo.', g: 0, why: 'After *e* the pronoun follows the verb.' },
            { s: 'Telefonei-lhe ontem.', g: 0, why: 'No trigger before the verb.' },
            { s: 'Não lhe dou o livro.', g: 1, why: 'Negation.' },
            { s: 'Quem te disse isso?', g: 1, why: 'A question word.' },
            { s: 'Todos o conhecem.', g: 1, why: 'A quantifier.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the pronoun in the right place.', items: [
            { q: 'Não ___ dou o livro. (to him)', a: ['lhe'], why: 'After *não* the pronoun goes before the verb.' },
            { q: 'Já ___ disse a verdade. (to me)', a: ['me'], why: '*Já* is a trigger.' },
            { q: 'Quem ___ disse isso? (to you)', a: ['te'], why: 'A question word is a trigger.' },
            { q: 'Todos ___ conhecem. (him)', a: ['o'], why: '*Todos* is a trigger.' },
            { q: 'Quero dizer___ a verdade. (to him)', a: ['-lhe'], why: 'After the infinitive: hyphen and pronoun.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right order.', items: [
            { q: 'Disse que ___ ajudava.', o: ['me', 'ajudava-me', 'ajudava me'], why: '*Que* is a trigger.' },
            { q: 'Nunca ___ esqueci.', o: ['o', 'esqueci-o', 'esqueci o'], why: '*Nunca* is a trigger.' },
            { q: 'Chegou e ___ tudo.', o: ['disse-me', 'me disse', 'disse me'], why: 'After *e* the pronoun follows the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with a trigger.', items: [
            { q: 'Dou-lhe o livro.', cue: 'Não', a: ['Não lhe dou o livro.'], why: 'Negation attracts the pronoun.' },
            { q: 'Disse-me a verdade.', cue: 'Já', a: ['Já me disse a verdade.'], why: '*Já* attracts the pronoun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: '[Me disse] a verdade.', a: ['Disse-me'], why: 'In Portugal a sentence does not start with an unstressed pronoun.' },
            { s: 'Não [dou-lhe] o livro.', a: ['lhe dou'], why: 'After *não* the pronoun goes before the verb.' },
            { s: 'Todos [conhecem-no] bem.', a: ['o conhecem'], why: '*Todos* is a trigger.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Não lhe dou o livro.', why: 'Negation: before the verb.' },
            { a: 'Quem te disse isso?', why: 'A question word.' },
            { a: 'Quero dizer-lhe a verdade.', why: 'After the infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'O infinitivo pessoal em profundidade',
      about: 'Choose between the personal infinitive and the plain one.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'The **infinitivo pessoal** takes personal endings: **falar, falares, falar, falarmos, falardes, falarem**. It is used when the infinitive has **its own subject**, different from the main verb: **É melhor eles saírem.** **Para tu saberes, …** **Sem eles o dizerem, …** **Antes de chegarmos, …** After **prepositions** it is very common: *para, sem, antes de, depois de, por, até, apesar de*. The **plain infinitive** is used when the subject is the **same** as the main verb or **obvious**: **Quero sair.** **Vi-os sair.** (Also acceptable: **Vi-os saírem.**) After **causation** verbs (*mandar, deixar, fazer*) with a pronoun, the plain infinitive is normal: **Deixei-os entrar.**' },
          { t: 'table', caption: 'Personal and plain infinitive', explain: ['head', 'col1'], head: ['Use', 'Example'], rows: [
            ['different subject, with a preposition', 'Para tu saberes a verdade, …'],
            ['different subject, impersonal verb', 'É melhor eles saírem.'],
            ['same subject: plain infinitive', 'Quero sair agora.'],
            ['after a perception verb and a pronoun', 'Vi-os sair. / Vi-os saírem.'],
            ['after a causation verb and a pronoun', 'Deixei-os entrar.'],
            ['after a preposition and the same subject', 'Antes de sair, liguei-lhe.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The personal infinitive only **looks different** for **tu, nós, vós** and **eles**: *falares, falarmos, falardes, falarem*. For **eu, ele, você** it is identical to the plain infinitive: **para eu saber**, **para ele saber**. In **Brazil**, the personal infinitive is much less common: people say **para você saber** or use the conjuntivo: **para que eles saibam.** Do not use it after **querer, poder, dever** when the subject is the same: say **Queremos sair**, not *Queremos sairmos*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'É melhor **eles saírem**.', n: 'Different subject, impersonal verb.' },
            { s: '**Para tu saberes**, ele já chegou.', n: 'After a preposition, different subject.' },
            { s: '**Sem eles o dizerem**, ninguém soube.', n: 'After a preposition.' },
            { s: '**Antes de chegarmos**, telefonámos.', n: 'After a preposition.' },
            { s: '**Quero sair** agora.', n: 'Same subject: the plain infinitive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Personal or plain infinitive? Sort the sentences.', groups: ['personal infinitive', 'plain infinitive'], explain: ['groups'], items: [
            { s: 'É melhor eles saírem.', g: 0, why: 'A different subject.' },
            { s: 'Para tu saberes, ele já chegou.', g: 0, why: 'A different subject after a preposition.' },
            { s: 'Sem eles o dizerem, ninguém soube.', g: 0, why: 'A different subject after a preposition.' },
            { s: 'Quero sair agora.', g: 1, why: 'The same subject.' },
            { s: 'Deixei-os entrar.', g: 1, why: 'A causation verb and a pronoun.' },
            { s: 'Antes de sair, liguei-lhe.', g: 1, why: 'The same subject after a preposition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the infinitive in the right form.', items: [
            { q: 'É melhor eles ___. (sair)', a: ['saírem'], why: 'A different subject: *eles*.' },
            { q: 'Para tu ___ a verdade, ele já chegou. (saber)', a: ['saberes'], why: 'The ending for *tu* is *-es*.' },
            { q: 'Antes de ___ a casa, telefonámos. (nós, chegar)', a: ['chegarmos'], why: 'The ending for *nós* is *-mos*.' },
            { q: 'Sem eles o ___, ninguém soube. (dizer)', a: ['dizerem'], why: 'The ending for *eles* is *-em*.' },
            { q: 'Quero ___ agora. (sair, eu)', a: ['sair'], why: 'The same subject: the plain infinitive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Pedi-lhes para ___ em silêncio.', o: ['entrarem', 'entrar', 'entrarmos'], why: 'The subject of *entrar* is *eles*.' },
            { q: 'Depois de ___, descansou.', o: ['comer', 'comerem', 'comermos'], why: 'The same subject.' },
            { q: 'É importante nós ___ a tempo.', o: ['chegarmos', 'chegar', 'chegarem'], why: 'A different subject: *nós*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the personal infinitive.', items: [
            { q: 'Eles saem. É melhor.', cue: 'É melhor', a: ['É melhor eles saírem.'], why: 'Impersonal verb and a different subject.' },
            { q: 'Tu sabes a verdade. Ele já chegou.', cue: 'Para tu', a: ['Para tu saberes a verdade, ele já chegou.'], why: '*Para* + personal infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'É melhor eles [sair] hoje.', a: ['saírem'], why: 'A different subject needs the personal infinitive.' },
            { s: 'Para tu [saber] a verdade, ele já chegou.', a: ['saberes'], why: 'The ending for *tu* is *-es*.' },
            { s: 'Antes de [chegarmos], liguei-lhe.', a: ['chegar'], why: 'The subject is *eu*: the plain infinitive.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'É melhor eles saírem agora.', why: 'Personal infinitive.' },
            { a: 'Para tu saberes, ele já chegou.', why: 'Personal infinitive after *para*.' },
            { a: 'Quero sair agora mesmo.', why: 'The same subject.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Quem quiser, mo deu',
      about: 'Use the futuro do conjuntivo and combined pronouns.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'The **futuro do conjuntivo** (**falar, falares, falar, falarmos, falardes, falarem** for regular verbs; **quiser, puder, tiver, for** for irregular ones) is used for **future events** after **se, quando, logo que, assim que, enquanto** and after **indefinite subjects**: **Quem quiser, venha.** **Quando puderes, telefona.** **Se tiveres tempo, passa por cá.** **O que quer que aconteça, …** Combined pronouns join the **indirect** and the **direct** object: **me + o = mo, te + o = to, lhe + o = lho, nos + o = no-lo, vos + o = vo-lo**: **Ele deu-mo.** **Disse-lho ontem.** **Entregou-lha.** With a trigger: **Não lho disse.**' },
          { t: 'table', caption: 'Combined pronouns', explain: ['head', 'col1'], head: ['Pronouns', 'Result', 'Example'], rows: [
            ['me + o / a / os / as', 'mo, ma, mos, mas', 'Ele deu-mo.'],
            ['te + o / a / os / as', 'to, ta, tos, tas', 'Dei-to ontem.'],
            ['lhe(s) + o / a / os / as', 'lho, lha, lhos, lhas', 'Entregou-lha.'],
            ['nos + o / a / os / as', 'no-lo, no-la, no-los, no-las', 'Deu-no-lo.'],
            ['vos + o / a / os / as', 'vo-lo, vo-la, vo-los, vo-las', 'Mandou-vo-las.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Combined pronouns are **written** and **formal**; in speech, people say **Deu-me isso** or **Disse-lhe isso**. In **Brazil** they are almost never used. After **se**, **quando** and **logo que**, the **futuro do conjuntivo** is used where English uses the present: **Quando chegares, liga-me.** Never use the future indicative there: *Quando chegarás* is wrong. The forms **quiser, puder, tiver, for, vier, disser** are irregular and worth learning by heart.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Quem quiser**, venha.', n: 'An indefinite subject.' },
            { s: '**Quando puderes**, telefona.', n: 'When you can.' },
            { s: '**Se tiveres** tempo, passa por cá.', n: 'If you have time.' },
            { s: 'Ele **deu-mo**.', n: '*Me* + *o*.' },
            { s: '**Disse-lho** ontem.', n: '*Lhe* + *o*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the pair of pronouns with the combined form.', pairs: [
            ['me + o', 'mo'],
            ['te + a', 'ta'],
            ['lhe + o', 'lho'],
            ['nos + o', 'no-lo'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Quem ___, venha. (querer, futuro do conjuntivo)', a: ['quiser'], why: 'Irregular: *quiser*.' },
            { q: 'Quando ___, telefona. (poder, tu)', a: ['puderes'], why: 'Irregular: *puderes*.' },
            { q: 'Se ___ tempo, passa por cá. (ter, tu)', a: ['tiveres'], why: 'Irregular: *tiveres*.' },
            { q: 'Quando ___, liga-me. (chegar, tu)', a: ['chegares'], why: 'The future subjunctive of *chegar*.' },
            { q: 'Ele deu___ ontem. (me + o)', a: ['-mo'], why: '*Me* + *o* = *mo*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quando ___, avisa-me.', o: ['souberes', 'sabes', 'saberás'], why: 'The future subjunctive after *quando*.' },
            { q: 'O livro? Entregou-___ ontem.', o: ['lho', 'lhe o', 'o lhe'], why: '*Lhe* + *o* = *lho*.' },
            { q: 'Se ___ à cidade, visita o museu.', o: ['fores', 'vais', 'irás'], why: 'The future subjunctive of *ir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the two pronouns with one.', items: [
            { q: 'Ele deu-me o livro.', cue: 'Ele deu-', a: ['Ele deu-mo.'], why: '*Me* + *o* = *mo*.' },
            { q: 'Entregou-lhe a carta.', cue: 'Entregou-', a: ['Entregou-lha.'], why: '*Lhe* + *a* = *lha*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
            { s: 'Quando [chegarás], liga-me.', a: ['chegares'], why: 'After *quando*, the future subjunctive.' },
            { s: 'Se [tens] tempo, passa por cá. (future)', a: ['tiveres'], why: 'The future subjunctive after *se*.' },
            { s: 'Ele deu-[me o] ontem.', a: ['mo'], why: '*Me* + *o* = *mo*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quem quiser, que venha.', why: 'The future subjunctive.' },
            { a: 'Quando puderes, telefona-me.', why: 'The future subjunctive after *quando*.' },
            { a: 'Se tiveres tempo, passa por cá.', why: 'The future subjunctive after *se*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Uma tradutora e um editor',
      about: 'Read a conversation full of pronouns and infinitives.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'A tradução do romance', md: 'Uma tradutora e um editor falam sobre a revisão de um romance.\n\nEDITOR: Já lhe enviei as provas, mas não sei se as recebeu.\n\nTRADUTORA: Recebi-as ontem. Quando as terminar, devolvo-lhas.\n\nEDITOR: É melhor nós fixarmos já uma data. Para o livro sair em março, é preciso as provas estarem prontas em janeiro.\n\nTRADUTORA: Quem quiser um texto bom, terá de esperar. Mas quero ajudá-lo, por isso entrego-lho antes do Natal.\n\nEDITOR: Obrigado. Se tiver dúvidas, diga-mo logo. O que quer que aconteça, o prazo mantém-se.\n\nTRADUTORA: Não lho prometo de forma leviana. Antes de assinarmos o contrato, quero falar com o autor.\n\nEDITOR: Faço-lhe esse favor. Deixe-me tratar disso.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'O editor enviou as provas à tradutora.', a: 't', why: '*Já lhe enviei as provas.*' },
            { q: 'A tradutora recebeu as provas ontem.', a: 't', why: '*Recebi-as ontem.*' },
            { q: 'O livro vai sair em março.', a: 't', why: '*Para o livro sair em março.*' },
            { q: 'A tradutora recusa-se a ajudar o editor.', a: 'f', why: '*Quero ajudá-lo.*' },
            { q: 'A tradutora promete entregar as provas antes do Natal.', a: 't', why: '*Entrego-lho antes do Natal.*' },
            { q: 'O livro tem quinhentas páginas.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quando é que o editor quer as provas?', o: ['Em janeiro.', 'Em março.', 'Em dezembro.'], why: '*As provas estarem prontas em janeiro.*' },
            { q: 'O que quer fazer a tradutora antes do contrato?', o: ['Falar com o autor.', 'Falar com o advogado.', 'Rever o texto de novo.'], why: '*Quero falar com o autor.*' },
            { q: 'Que forma é um infinitivo pessoal?', o: ['estarem', 'ajudá-lo', 'falar'], why: '*Estarem* has the ending for *eles*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the combined pronouns and the personal infinitives.', items: [
            { s: 'Quando as terminar, [devolvo-lhas]. Quero ajudá-lo, por isso [entrego-lho] antes do Natal.', why: '*Lhas* and *lho*.' },
            { s: 'É melhor nós [fixarmos] já uma data. É preciso as provas [estarem] prontas em janeiro.', why: 'Personal infinitives.' },
            { s: 'Se [tiver] dúvidas, [diga-mo] logo. [Quem quiser] um texto bom, terá de esperar.', why: 'The future subjunctive and *mo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Quando as terminar, devolvo-___. (lhe + as)', a: ['lhas'], why: '*Lhe* + *as* = *lhas*.' },
            { q: 'É melhor nós ___ já uma data. (fixar)', a: ['fixarmos'], why: 'Personal infinitive for *nós*.' },
            { q: 'Se ___ dúvidas, diga-mo logo. (ter, futuro do conjuntivo)', a: ['tiver'], why: 'The future subjunctive after *se*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Não lho prometo de forma leviana.', why: 'Negation and a combined pronoun.' },
            { a: 'Quem quiser um texto bom, terá de esperar.', why: 'The future subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Não ___ dou o livro.', o: ['lhe', 'dou-lhe', 'lhe o'], why: 'After *não* the pronoun goes before the verb.' },
      { q: 'É melhor eles ___.', o: ['saírem', 'sair', 'saímos'], why: 'The personal infinitive.' },
      { q: 'Quando ___, liga-me.', o: ['chegares', 'chegarás', 'chegas'], why: 'The future subjunctive.' },
      { q: 'Entregou-___ ontem. (lhe + a)', o: ['lha', 'lhe a', 'a lhe'], why: '*Lhe* + *a* = *lha*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Quem ___, venha. (querer, futuro do conjuntivo)', a: ['quiser'], why: 'Irregular: *quiser*.' },
      { q: 'Para tu ___ a verdade, ele já chegou. (saber)', a: ['saberes'], why: 'The ending for *tu*.' },
      { q: 'Já ___ disse a verdade. (to me)', a: ['me'], why: '*Já* is a trigger.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the pair of pronouns with the combined form.', pairs: [
      ['me + o', 'mo'],
      ['lhe + a', 'lha'],
      ['nos + o', 'no-lo'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Dou-lhe o livro.', cue: 'Não', a: ['Não lhe dou o livro.'], why: 'Negation attracts the pronoun.' },
      { q: 'Eles saem. É melhor.', cue: 'É melhor', a: ['É melhor eles saírem.'], why: 'Personal infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right form.', items: [
      { s: '[Me disse] a verdade.', a: ['Disse-me'], why: 'No unstressed pronoun at the start in Portugal.' },
      { s: 'Quando [chegarás], liga-me.', a: ['chegares'], why: 'The future subjunctive after *quando*.' },
    ] },
  ],
};
