// Portuguese C2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Subtle grammar',
  goal: 'Use the finer points of Portuguese grammar with confidence. Learn the future subjunctive and the inflected infinitive, absolute constructions, clitic placement and pronoun contractions, and the mood after talvez, oxalá and como se.',
  art: 'nata',
  tags: { skills: ['grammar', 'writing', 'reading'], topics: ['future subjunctive', 'inflected infinitive', 'absolute constructions', 'clitic placement', 'pronoun contractions', 'mood'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'O conjuntivo futuro e o infinitivo pessoal',
      about: 'Choose between the future subjunctive, the inflected infinitive and the indicative.',
      art: 'nata',
      spreads: [
        [
          { t: 'text', md: 'Portuguese keeps a tense that most languages have lost: the **future subjunctive** (*conjuntivo futuro*). We use it for something that has **not happened yet** after *quando*, *se*, *logo que*, *assim que*, and with *quem* and *o que*. **Quando fores a Lisboa, avisa-me.** **Se quiseres, venho contigo.** **Faz o que quiseres.** **Quem tiver dúvidas, pergunte.** The form comes from the third person plural of the preterite: *eles falaram → falar**es**, falar**mos**, falar**em***; *eles quiseram → quiser, quiseres, quiser, quisermos, quiserem*.' },
          { t: 'table', caption: 'Irregular future subjunctive', explain: ['head', 'col0'], head: ['Verb', 'Future subjunctive (eu/ele)', 'Example'], rows: [
            ['ser, ir', 'for', 'Quando for possível, ligo-te.'],
            ['ter', 'tiver', 'Se tiver tempo, passo por cá.'],
            ['fazer', 'fizer', 'O que fizer, fará bem.'],
            ['querer', 'quiser', 'Faz como quiseres.'],
            ['ver', 'vir', 'Se o vir, digo-lhe.'],
            ['vir', 'vier', 'Quando ele vier, jantamos.'],
            ['poder', 'puder', 'Se puder, ajudo.'],
            ['dizer', 'disser', 'Se ele disser que sim, aceito.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **inflected infinitive** (*infinitivo pessoal*) adds endings (*-es, -mos, -em*) to the infinitive. We use it when the subject changes or needs to be clear: **Convém partirmos cedo.** **Apesar de eles terem estudado, falharam.** **Sem nos avisarem, partiram.** After impersonal expressions, we can choose: *Convém que partamos cedo* (subjunctive) or *Convém partirmos cedo* (inflected infinitive). Both are correct, but the infinitive is more compact and more formal. With the **indicative**, we state facts: *Quando chego, ligo-te* (a habit) but *Quando chegar, ligo-te* (a future event).' },
          { t: 'tip', art: 'nata', md: 'Use the **future subjunctive** whenever the action is in the future and uncertain after *quando*, *se*, *assim que* or *enquanto*. Use the **present indicative** only for general facts or habits: *Quando chove, fico em casa.*' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Quando ___ a Lisboa, avisa-me.', o: ['fores', 'vais', 'foste'], why: 'A future event after *quando* takes the future subjunctive.' },
            { q: 'Se ___ tempo amanhã, passo por cá.', o: ['tiver', 'tenho', 'teria'], why: 'A possible future condition.' },
            { q: 'Faz o que ___.', o: ['quiseres', 'queres', 'quiseste'], why: 'An open choice in the future.' },
            { q: 'Convém ___ cedo.', o: ['partirmos', 'partimos', 'partindo'], why: 'Inflected infinitive after an impersonal expression.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with the future subjunctive, using the words given.', items: [
            { q: 'Tu queres e eu venho contigo.', cue: 'Se', a: ['Se quiseres, venho contigo.'], why: '*Se* + future subjunctive.' },
            { q: 'Ele vem e jantamos todos juntos.', cue: 'Quando', a: ['Quando ele vier, jantamos todos juntos.'], why: '*Vir*: vier.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the correct form.', items: [
            { q: 'Quando ___ possível, ligo-te. (ser)', a: ['for'], why: 'Future subjunctive of *ser*.' },
            { q: 'Se o ___, digo-lhe que ligue. (ver)', a: ['vir'], why: 'Future subjunctive of *ver*.' },
            { q: 'Sem nos ___, partiram de manhã. (avisar, eles)', a: ['avisarem'], why: 'Inflected infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Feita a reunião, dito isto',
      about: 'Use absolute and non-finite constructions to link ideas.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'An **absolute construction** (*construção absoluta*) is a short phrase with its own subject, put at the start of a sentence to say **when** or **why** something happens. The most common has a **participle**: **Feita a reunião, saímos.** **Chegados a casa, jantámos.** **Terminado o trabalho, descansámos.** The participle agrees with its noun. Fixed expressions with the same shape: **Dito isto, passemos ao ponto seguinte.** **Posto isto, a decisão é clara.** **Sendo assim, retiro a proposta.** **Visto o resultado, pedimos desculpa.**' },
          { t: 'table', caption: 'Absolute constructions', explain: ['head', 'col0'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['Feita a reunião, …', 'once the meeting was over', 'Feita a reunião, saímos.'],
            ['Chegados a casa, …', 'once we arrived home', 'Chegados a casa, jantámos.'],
            ['Dito isto, …', 'having said that', 'Dito isto, passemos ao ponto seguinte.'],
            ['Sendo assim, …', 'in that case', 'Sendo assim, retiro a proposta.'],
            ['Visto o resultado, …', 'given the result', 'Visto o resultado, pedimos desculpa.'],
          ] },
        ],
        [
          { t: 'text', md: 'The **gerund** (*gerúndio*) can also open a clause: **Chegando a casa, ligou-me.** **Sendo assim, retiro a proposta.** In Portugal, we use the gerund mainly in written, formal forms like these. In everyday speech, we prefer **estar a + infinitive**: **Está a chover. Estou a ler.** In Brazil, people say **Está chovendo. Estou lendo.** Both are correct in their country, but a European learner should use *estar a + infinitive* for an action in progress.' },
          { t: 'tip', art: 'owl', md: 'Check that the **subject of the absolute phrase is clear**. *Terminado o trabalho, descansámos* is clear. *Chegando a casa, o telefone tocou* is weaker, because it is the speaker who arrives, not the phone.' },
          { t: 'ex', kind: 'choice', h: 'Choose the best option.', items: [
            { q: '___ a reunião, saímos todos juntos.', o: ['Feita', 'Fazendo', 'Fez'], why: 'Participle that agrees with *reunião*.' },
            { q: '___ isto, passemos ao ponto seguinte.', o: ['Dito', 'Dizendo', 'Dizer'], why: '*Dito isto* is the fixed formula.' },
            { q: 'Em Portugal, “estou a ler” corresponde ao brasileiro “___”.', o: ['estou lendo', 'estou ler', 'li'], why: 'Brazil uses the gerund.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with an absolute construction, using the words given.', items: [
            { q: 'Quando a reunião terminou, saímos.', cue: 'Terminada', a: ['Terminada a reunião, saímos.'], why: 'The participle agrees with the feminine noun.' },
            { q: 'Quando chegámos a casa, jantámos.', cue: 'Chegados', a: ['Chegados a casa, jantámos.'], why: 'Plural masculine participle.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the correct word.', items: [
            { q: '___ assim, retiro a proposta. (being)', a: ['Sendo'], why: 'Gerund of *ser*.' },
            { q: 'Visto o ___, pedimos desculpa. (result)', a: ['resultado'], why: 'Absolute construction.' },
            { q: 'Em Portugal, dizemos “estou ___ ler”.', a: ['a'], why: '*Estar a* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Clíticos, contrações e modo',
      about: 'Place pronouns correctly, combine them, and choose the mood after talvez, oxalá and como se.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'In European Portuguese, the object pronoun goes **after the verb** by default (**enclisis**): *Disse-me a verdade.* It goes **before the verb** (**proclisis**) after a **negative** (*Não me disse*), after certain **adverbs** (*já, também, sempre, ainda*), after **conjunctions and relatives** (*que, se, quando, onde*), after **interrogatives** (*Quem te disse?*) and after **quantifiers** (*todos, alguém, ninguém*). In the **future** and **conditional**, the pronoun goes in the **middle** (**mesoclisis**): *Dir-te-ei a verdade. Falar-lhe-íamos.*' },
          { t: 'table', caption: 'Pronoun placement', explain: ['head', 'col0'], head: ['Context', 'Placement', 'Example'], rows: [
            ['plain statement', 'after the verb', 'Disse-me a verdade.'],
            ['negative', 'before the verb', 'Não me disse a verdade.'],
            ['adverb: já, também, sempre', 'before the verb', 'Já lhe falei.'],
            ['que, se, quando', 'before the verb', 'Disse que me ligava.'],
            ['interrogative', 'before the verb', 'Quem te disse isso?'],
            ['future or conditional', 'in the middle', 'Dir-te-ei a verdade.'],
          ] },
        ],
        [
          { t: 'text', md: 'Two pronouns can **fuse**: **me + o = mo**, **te + a = ta**, **lhe + o = lho**, **lhe + a = lha**, **nos + o = no-lo**, **vos + os = vo-los**. *Deu-me o livro* becomes *Deu-mo.* *Contei-lhe a história* becomes *Contei-lha.* Then there are the moods. After **talvez** we use the **subjunctive**: *Talvez ele venha.* After **oxalá**, also the subjunctive: *Oxalá chova.* After **como se**, the **imperfect subjunctive**: *Fala como se soubesse tudo.* All of these express doubt, wish or unreality.' },
          { t: 'tip', art: 'cactus', md: 'Do not translate pronoun placement from another language. In Portugal, *Eu disse-lhe* is natural; *Eu lhe disse* sounds Brazilian. Look at the word before the verb: if there is a negative, an adverb or *que*, put the pronoun first.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Ele ___ a verdade.', o: ['disse-me', 'me disse', 'disse me'], why: 'Enclisis in a plain statement.' },
            { q: 'Ele não ___ a verdade.', o: ['me disse', 'disse-me', 'disse me'], why: 'Proclisis after a negative.' },
            { q: 'Deu-me o livro → Deu-___.', o: ['mo', 'ma', 'me o'], why: '*Me* + *o* = *mo*.' },
            { q: 'Fala como se ___ tudo.', o: ['soubesse', 'sabe', 'saberá'], why: '*Como se* + imperfect subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence, using the words given.', items: [
            { q: 'Eu direi a verdade a ti.', cue: 'Dir-te-ei', a: ['Dir-te-ei a verdade.'], why: 'Mesoclisis in the future.' },
            { q: 'Contei a história a ele.', cue: 'Contei-lha', a: ['Contei-lha.'], why: '*Lhe* + *a* = *lha*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which mood follows?', groups: ['subjunctive', 'indicative'], explain: ['groups'], items: [
            { s: 'Talvez ele ___ amanhã.', g: 0, why: '*Talvez* + subjunctive.' },
            { s: 'Sei que ele ___ amanhã.', g: 1, why: '*Saber que* + indicative.' },
            { s: 'Oxalá ___ sol no sábado.', g: 0, why: '*Oxalá* + subjunctive.' },
            { s: 'Vejo que ela ___ cansada.', g: 1, why: '*Ver que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'O regresso',
      about: 'Read a short story that uses these structures.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'O regresso', md: 'Chegados a casa da avó, descobrimos que a porta estava aberta. Dito isto, entrámos sem hesitar. Dentro, tudo estava como o tínhamos deixado, como se o tempo não tivesse passado.\n\n— Se ela vier, não lhe digas nada — disse o meu irmão, baixinho. — Talvez prefira que seja eu a contar-lhe.\n\nNão respondi. Feito o silêncio, ouvimos passos na cozinha. Era ela. Quando nos viu, sorriu e foi buscar o álbum de fotografias.\n\n— Mostrar-vos-ei o que encontrei — disse. — Quem quiser, que se sente.\n\nSentámo-nos. Ela deu-nos as fotografias uma a uma: ao meu irmão, a da bicicleta; a mim, a do jardim. O que me deu foi mais do que um retrato. Oxalá eu soubesse dizer-lho.\n\nSendo assim, fiquei calado, e olhei para ela como se fosse a primeira vez.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'A porta da casa da avó estava aberta.', a: 't', why: '«A porta estava aberta.»' },
            { q: 'O irmão quer que a narradora diga tudo à avó.', a: 'f', why: '«Não lhe digas nada.»' },
            { q: 'A avó mostrou um álbum de fotografias.', a: 't', why: '«Foi buscar o álbum.»' },
            { q: 'A casa da avó fica no Porto.', a: 'ng', why: 'The place is not given.' },
            { q: 'A narradora disse à avó o que sentia.', a: 'f', why: '«Fiquei calado.»' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does «Chegados a casa da avó» express?', o: ['Once they had arrived.', 'While they were leaving.', 'If they arrived.'], why: 'An absolute construction with a participle.' },
            { q: 'Why is «Se ela vier» in the subjunctive?', o: ['It is a possible future event.', 'It is a past event.', 'It is a fact.'], why: 'Future subjunctive after *se*.' },
            { q: 'What does «lho» in «Oxalá eu soubesse dizer-lho» stand for?', o: ['lhe + o', 'me + o', 'te + o'], why: '*Lhe* + *o* = *lho*.' },
            { q: 'Why is «soubesse» used after «como se»?', o: ['It expresses something unreal.', 'It is a fact.', 'It is a future event.'], why: '*Como se* + imperfect subjunctive.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the future subjunctive and the mesoclisis.', items: [
            { s: 'Se ela [vier], não lhe digas nada.', why: 'Future subjunctive of *vir*.' },
            { s: '[Mostrar-vos-ei] o que encontrei.', why: 'Mesoclisis.' },
            { s: 'Quem [quiser], que se sente.', why: 'Future subjunctive of *querer*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: '___ a casa da avó, descobrimos que a porta estava aberta.', a: ['Chegados'], why: 'Absolute construction.' },
            { q: 'Dentro, tudo estava como se o tempo não ___ passado.', a: ['tivesse'], why: 'Pluperfect subjunctive after *como se*.' },
            { q: 'Ela deu-___ as fotografias uma a uma. (to us)', a: ['nos'], why: 'Enclisis: *deu-nos*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quem quiser, que se sente à mesa.', why: 'Future subjunctive with *quem*.' },
            { a: 'Ela olhou para mim como se fosse a primeira vez.', why: '*Como se* + imperfect subjunctive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
      { q: 'Quando ___ possível, ligo-te.', o: ['for', 'é', 'foi'], why: 'Future subjunctive.' },
      { q: 'Ele não ___ a verdade.', o: ['me disse', 'disse-me', 'disse me'], why: 'Proclisis after a negative.' },
      { q: 'Talvez ele ___ amanhã.', o: ['venha', 'vem', 'veio'], why: '*Talvez* + subjunctive.' },
      { q: '___ a reunião, saímos.', o: ['Terminada', 'Terminando', 'Terminou'], why: 'Participle that agrees with *reunião*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Which mood follows?', groups: ['subjunctive', 'indicative'], explain: ['groups'], items: [
      { s: 'Talvez ele ___.', g: 0, why: 'Subjunctive.' },
      { s: 'Sei que ele ___.', g: 1, why: 'Indicative.' },
      { s: 'Oxalá ___ sol.', g: 0, why: 'Subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Se ___ tempo, passo por cá. (ter)', a: ['tiver'], why: 'Future subjunctive of *ter*.' },
      { q: 'Dir-___-ei a verdade. (to you)', a: ['te'], why: 'Mesoclisis.' },
      { q: 'Contei-lhe a história: contei-___. (lhe + a)', a: ['lha'], why: '*Lhe* + *a* = *lha*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Quando a reunião terminou, saímos.', cue: 'Terminada', a: ['Terminada a reunião, saímos.'], why: 'Absolute construction.' },
      { q: 'Tu queres e eu venho contigo.', cue: 'Se', a: ['Se quiseres, venho contigo.'], why: '*Se* + future subjunctive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'Quando tu [vais] a Lisboa, avisa-me.', a: ['fores'], why: 'A future event takes the future subjunctive.' },
      { s: 'Fala como se [sabe] tudo.', a: ['soubesse'], why: '*Como se* takes the imperfect subjunctive.' },
    ] },
  ],
};
