// Italian C2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Subtle grammar',
  goal: 'Use the finer points of Italian grammar with confidence. Learn the si passivante and si impersonale, andare and venire with the participle, absolute constructions, combined pronouns with ci and ne, and the mood after forse, magari and come se.',
  art: 'cat',
  tags: { skills: ['grammar', 'reading', 'writing'], topics: ['si passivante', 'si impersonale', 'absolute constructions', 'combined pronouns', 'subjunctive'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Si vendono case, si è stanchi, va fatto',
      about: 'Distinguish the passive si, the impersonal si and the use of andare and venire with the participle.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Si** has several functions. The **si passivante** turns a transitive verb into a passive: the verb agrees with the **thing**: *Si vende una casa. Si vendono case.* The **si impersonale** has no specific subject (*one*): *Si vive bene qui.* With **essere** and adjectives, the adjective is **plural**: *Quando si è stanchi, si lavora male.* In **compound tenses** of the impersonal, the auxiliary is always **essere** and the participle is **plural**: *Si è lavorato molto*, but *Si è andati via*. When a reflexive verb is impersonal, **ci si** is used: *Ci si lava le mani.*' },
          { t: 'table', caption: 'Uses of si', explain: ['head', 'col0'], head: ['Use', 'Example', 'Meaning'], rows: [
            ['si passivante', 'Si vendono case.', 'houses are sold'],
            ['si impersonale', 'Si vive bene qui.', 'one lives well here'],
            ['si impersonale + essere', 'Quando si è stanchi, si lavora male.', 'when one is tired, one works badly'],
            ['impersonal compound tense', 'Si è lavorato molto. / Si è andati via.', 'one has worked a lot / people left'],
            ['ci si (reflexive)', 'Ci si lava le mani.', 'one washes one’s hands'],
          ] },
        ],
        [
          { t: 'text', md: '**Andare + past participle** expresses **obligation** (a passive with *must*): *Il modulo va compilato* (the form must be filled in). *Le regole vanno rispettate.* **Venire + past participle** is an alternative passive with action: *La domanda viene esaminata entro dieci giorni.* **Andare** also carries a sense of *lost*: *È andato perso* (it was lost). The participle agrees with the subject: *va fatto*, *vanno fatte*.' },
          { t: 'tip', art: 'owl', md: 'In the impersonal with **essere**, the participle agrees with an **implied plural**: *Si è partiti*, *Si è stanche* (if all women). With a **passive si**, the verb agrees with the **thing**: *Si vende la casa*, *Si vendono le case*. In **Switzerland**, the same rules apply. Do not confuse **va fatto** (must be done) with **viene fatto** (is done): the first is an obligation, the second a plain passive.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Si ___ case in centro.', o: ['vendono', 'vende', 'vendete'], why: 'The passive si agrees with *case*.' },
            { q: 'Quando si è ___, si lavora male.', o: ['stanchi', 'stanco', 'stanca'], why: 'The impersonal with *essere* takes a plural adjective.' },
            { q: 'Il modulo ___ compilato entro venerdì.', o: ['va', 'viene', 'è andato'], why: '*Andare + participle* = must be filled in.' },
            { q: 'Si è ___ via presto.', o: ['andati', 'andato', 'andata'], why: 'The impersonal compound tense: *essere* + plural participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Si ___ case e appartamenti. (vendere, presente)', a: ['vendono'], why: 'The passive si agrees with the plural.' },
            { q: 'Le regole ___ rispettate. (andare, presente)', a: ['vanno'], why: '*Andare + participle*: must be respected.' },
            { q: 'La domanda ___ esaminata entro dieci giorni. (venire, presente)', a: ['viene'], why: '*Venire + participle*: is examined.' },
            { q: 'Quando si ___ giovani, si fanno molte cose. (essere, presente)', a: ['è'], why: 'The impersonal with *essere*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite with the structure given.', items: [
            { q: 'Bisogna compilare il modulo entro venerdì.', cue: 'Il modulo va', a: ['Il modulo va compilato entro venerdì.'], why: '*Andare + participle* expresses obligation.' },
            { q: 'Esaminano la domanda entro dieci giorni.', cue: 'La domanda viene', a: ['La domanda viene esaminata entro dieci giorni.'], why: '*Venire + participle*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Si [vende] case in centro.', a: ['vendono'], why: 'The passive si agrees with *case*.' },
            { s: 'Quando si è [stanco], si lavora male.', a: ['stanchi'], why: 'A plural adjective after impersonal *si è*.' },
            { s: 'Le regole [va] rispettate.', a: ['vanno'], why: '*Andare* agrees with *le regole*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Obligation or plain fact?', groups: ['obligation', 'plain fact'], explain: ['groups'], items: [
            { s: 'Il modulo va compilato.', g: 0, why: '*Andare + participle* = obligation.' },
            { s: 'Il modulo viene compilato.', g: 1, why: '*Venire + participle* = a plain passive.' },
            { s: 'Le regole vanno rispettate.', g: 0, why: 'Obligation.' },
            { s: 'La domanda viene esaminata.', g: 1, why: 'A plain passive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Finita la riunione, detto questo',
      about: 'Use absolute and non-finite constructions for a compact style.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'An **absolute construction** is a phrase with its **own subject**, separate from the subject of the main clause. It gives time, cause or condition in a compact form. With a **participle**: *Finita la riunione, ce ne andammo.* (= When the meeting was over.) *Detto questo, uscì.* With a **gerund**: *Stando così le cose, non c’è nulla da dire.* *Piovendo, restammo a casa.* Common fixed forms: **detto questo** (that said), **tutto sommato** (all in all), **stando così le cose** (that being so), **date le circostanze** (given the circumstances).' },
          { t: 'table', caption: 'Absolute constructions', explain: ['head', 'col0'], head: ['Construction', 'Meaning', 'Example'], rows: [
            ['noun + participle', 'time', 'Finita la riunione, ce ne andammo.'],
            ['noun + gerund', 'cause or condition', 'Piovendo, restammo a casa.'],
            ['pronoun + participle', 'time', 'Detto questo, uscì.'],
            ['stando così le cose', 'that being so', 'Stando così le cose, non c’è nulla da dire.'],
            ['date le circostanze', 'given that', 'Date le circostanze, non possiamo aspettare.'],
          ] },
        ],
        [
          { t: 'text', md: 'Subordinate clauses can also be **reduced** to a participle or a gerund when the subject is the **same** as in the main clause: *Stanca, continuò a lavorare.* (= Anche se era stanca.) *Interrogato dalla stampa, il ministro non rispose.* *Una volta dentro, chiusero la porta.* *Vedendo la pioggia, restammo a casa.* The participle is **passive** in sense, the gerund is **active** and **simultaneous**: *Interrogato* (when asked), *interrogando* (while asking).' },
          { t: 'tip', art: 'owl', md: 'In a reduced clause, the **understood subject** must be the same as the subject of the main clause; otherwise the sentence is faulty: *Stanca, il lavoro continuò* wrongly suggests that the work was tired. In an absolute construction, the **two subjects differ** on purpose: *Finita la riunione, ce ne andammo.* The participle **agrees** with its noun: *finita la riunione*, *finiti gli esami*. Use these structures in writing, rarely in speech.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: '___ la riunione, i presenti se ne andarono.', o: ['Finita', 'Finito', 'Finendo'], why: 'The participle agrees with *la riunione*.' },
            { q: '___ gli esami, gli studenti festeggiarono.', o: ['Finiti', 'Finite', 'Finito'], why: 'The participle agrees with *gli esami*.' },
            { q: '___, restammo a casa.', o: ['Piovendo', 'Piovuto', 'Piovere'], why: 'An absolute gerund.' },
            { q: '___ dalla stampa, il ministro non rispose.', o: ['Interrogato', 'Interrogando', 'Interrogare'], why: 'Passive sense: *when asked*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with a compact construction, using the words given.', items: [
            { q: 'Quando la riunione finì, ce ne andammo.', cue: 'Finita', a: ['Finita la riunione, ce ne andammo.'], why: 'An absolute participle.' },
            { q: 'Poiché pioveva, restammo a casa.', cue: 'Piovendo', a: ['Piovendo, restammo a casa.'], why: 'A gerund.' },
            { q: 'Benché fosse stanca, continuò a lavorare.', cue: 'Stanca', a: ['Stanca, continuò a lavorare.'], why: 'A reduced clause.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the structure with its use.', pairs: [
            ['finita la riunione', 'absolute participle: time'],
            ['piovendo', 'gerund: cause'],
            ['detto questo', 'fixed phrase: that said'],
            ['vedendo la pioggia', 'gerund: cause, same subject'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the faulty sentence.', items: [
            { s: '[Stanca, il lavoro continuò] fino a notte.', a: ['Stanca, continuò a lavorare', 'Stanca, lei continuò a lavorare'], why: 'The understood subject of *stanca* must be a person.' },
            { s: '[Finito] gli esami, gli studenti festeggiarono.', a: ['Finiti'], why: 'The participle agrees with *gli esami*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Glielo, me ne, forse, come se',
      about: 'Use combined pronouns with ci and ne, and choose the mood after forse, magari and come se.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'When two pronouns appear together, the **indirect** comes first: **me lo, te lo, glielo, ce lo, ve lo**. **Gli, le** and **loro** become **glie-** and join the other pronoun: **glielo** (*it to him/her/you*), **gliela**, **glieli**, **gliele**, **gliene**: *Glielo do domani.* **Me**, **te**, **se**, **ce**, **ve** change *-i* to *-e* before **lo, la, li, le, ne**: *Me lo dai?* *Te ne parlo.* **Ci** means *there* or *about it*; **ne** means *of it, of them*: *Ci penso.* *Ne ho due.* With **avere**: *Ce l’ho.* *Non ce n’è.*' },
          { t: 'table', caption: 'Combined pronouns', explain: ['head', 'col0'], head: ['Pronouns', 'Result', 'Example'], rows: [
            ['mi + lo', 'me lo', 'Me lo dai?'],
            ['ti + ne', 'te ne', 'Te ne parlo domani.'],
            ['gli, le + lo', 'glielo', 'Glielo do domani.'],
            ['ci + lo', 'ce lo', 'Ce lo dice.'],
            ['ci + ne', 'ce ne', 'Ce ne sono molti.'],
            ['gli + ne', 'gliene', 'Gliene parlo io.'],
          ] },
        ],
        [
          { t: 'text', md: '**Forse** takes the **indicative** in everyday speech and the **subjunctive** in careful or literary style: *Forse viene domani.* *Forse venga domani.* **Magari** expresses a **wish** with the imperfect subjunctive (*Magari fosse vero!*) or means *perhaps* with the indicative (*Magari viene.*). **Chissà** takes the **indicative**: *Chissà se viene.* **Come se** takes the **imperfect or pluperfect subjunctive**: *Parla come se sapesse tutto.* *Sembra come se avesse pianto.* **Benché** and **sebbene** take the subjunctive: *Benché piova, usciamo.*' },
          { t: 'tip', art: 'owl', md: 'Do not use the present subjunctive after **come se**: *come se sa* is wrong, *come se sappia* is also wrong. Use the **imperfect** (*come se sapesse*) or the **pluperfect** (*come se avesse saputo*). **Glielo** is written as **one word** and is the same for *him*, *her* and formal *you*; the context shows who. In informal speech, many people say **gli** for *to them* instead of **loro**.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Glielo ___ domani. (I give it to him)', o: ['do', 'dai', 'dà'], why: 'The verb *dare* for *io*.' },
            { q: 'Parla come se ___ tutto.', o: ['sapesse', 'sa', 'sappia'], why: '*Come se* + imperfect subjunctive.' },
            { q: 'Magari ___ vero! (a wish)', o: ['fosse', 'è', 'sarà'], why: '*Magari* + imperfect subjunctive for a wish.' },
            { q: '— Hai delle penne? — Sì, ___ ho due.', o: ['ne', 'ci', 'lo'], why: '*Ne* replaces *delle penne*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing pronoun.', items: [
            { q: 'Il libro? ___ do domani. (I give it to him)', a: ['Glielo'], why: '*Gli* + *lo* = *glielo*.' },
            { q: 'Dei soldi? ___ ho pochi.', a: ['Ne'], why: '*Ne* replaces *di soldi*.' },
            { q: 'Ci vai? Sì, ___ vado domani. (I am going there)', a: ['ci'], why: '*Ci* replaces *there*.' },
            { q: 'Il caffè? ___ prendo volentieri. (I will have it)', a: ['Lo'], why: '*Lo* replaces *il caffè*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Replace the words in italics with pronouns.', items: [
            { q: 'Do il libro a lui domani.', cue: 'Glielo', a: ['Glielo do domani.'], why: '*Gli* + *lo* = *glielo*.' },
            { q: 'Parlo di questo a te domani.', cue: 'Te ne', a: ['Te ne parlo domani.'], why: '*Ti* + *ne* = *te ne*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Parla come se [sa] tutto.', a: ['sapesse'], why: '*Come se* needs the imperfect subjunctive.' },
            { s: '[Gli lo] do domani.', a: ['Glielo'], why: '*Gli* + *lo* = *glielo*, written as one word.' },
            { s: 'Magari [è] vero! (a wish)', a: ['fosse'], why: 'A wish needs the imperfect subjunctive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Indicative or subjunctive?', groups: ['indicative', 'subjunctive'], explain: ['groups'], items: [
            { s: 'chissà + verbo', g: 0, why: '*Chissà* takes the indicative.' },
            { s: 'come se + verbo', g: 1, why: '*Come se* takes the imperfect subjunctive.' },
            { s: 'benché + verbo', g: 1, why: '*Benché* takes the subjunctive.' },
            { s: 'forse + verbo (everyday)', g: 0, why: '*Forse* takes the indicative in speech.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'L’ultimo traghetto',
      about: 'Read a short story and notice the advanced structures in context.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'L’ultimo traghetto', md: 'Chiusa la biglietteria, Marta rimase sul molo e guardò allontanarsi l’ultimo traghetto. Si perdeva, pensò, come tutte le occasioni. Forse non sarebbe più tornata.\n\n«Non c’è un altro traghetto prima dell’alba — disse l’uomo del chiosco, come se sapesse tutto —. Ma un bar aperto ce n’è.» Marta non gli diede ascolto; l’ombrello era andato perso, e persino la pioggia sembrava prenderla in giro.\n\nUn’ora dopo si sedette accanto a lei uno sconosciuto. Stanco, sorrise lo stesso. Parlò come se la conoscesse da sempre, di barche, di pioggia e di una sorella a Lisbona. Detto questo, tacque e guardò il mare. Si è soli, pensò Marta, quando si è stanchi. Si fanno cose strane, e si dicono cose vere.\n\nAll’alba, il mare era calmo. Arrivato il primo traghetto, Marta salì a bordo. Piovendo ancora, il biglietto va conservato, le disse il controllore. Glielo mostrò volentieri.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta ha perso l’ultimo traghetto.', a: 't', why: '«Guardò allontanarsi l’ultimo traghetto.»' },
            { q: 'L’uomo del chiosco dice che c’è un altro traghetto prima dell’alba.', a: 'f', why: '«Non c’è un altro traghetto prima dell’alba.»' },
            { q: 'L’ombrello di Marta era andato perso.', a: 't', why: '«L’ombrello era andato perso.»' },
            { q: 'Lo sconosciuto parlò pochissimo.', a: 'f', why: 'He talked of boats, rain and a sister.' },
            { q: 'Marta prese il primo traghetto del mattino.', a: 't', why: '«Marta salì a bordo.»' },
            { q: 'Lo sconosciuto si chiamava Luca.', a: 'ng', why: 'The text does not give his name.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the grammar.', items: [
            { q: '«Chiusa la biglietteria, Marta rimase sul molo.» What is this?', o: ['An absolute participle.', 'A gerund.', 'An infinitive.'], why: 'Noun + participle with its own subject.' },
            { q: '«Parlò come se la conoscesse da sempre.» What is *conoscesse*?', o: ['Imperfect subjunctive, after come se.', 'Indicative.', 'Conditional.'], why: '*Come se* + imperfect subjunctive.' },
            { q: '«Si è soli, pensò Marta, quando si è stanchi.» What is this *si*?', o: ['Impersonal si with essere.', 'Passive si.', 'Reflexive si.'], why: 'The impersonal with *essere*: *soli*, *stanchi* in the plural.' },
            { q: '«Il biglietto va conservato» means…', o: ['The ticket must be kept.', 'The ticket was kept.', 'The ticket is kept.'], why: '*Andare + participle* = must be done.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the structures of formal Italian.', items: [
            { s: '[Chiusa la biglietteria], Marta rimase sul molo. [Arrivato il primo traghetto], salì a bordo.', why: 'Absolute participles.' },
            { s: '[Piovendo ancora], il biglietto va conservato.', why: 'An absolute gerund.' },
            { s: '[Detto questo], tacque e guardò il mare.', why: 'A fixed phrase: that said.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: '___ la biglietteria, Marta rimase sul molo. (chiudere, participio)', a: ['Chiusa'], why: 'An absolute participle.' },
            { q: 'L’ombrello era ___ perso. (andare, participio)', a: ['andato'], why: '*Andare perso*: to be lost.' },
            { q: 'Il biglietto ___ conservato, le disse il controllore. (andare, presente)', a: ['va'], why: '*Andare + participle*: must be kept.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Parlò come se la conoscesse da sempre.', why: '*Come se* + imperfect subjunctive.' },
            { a: 'Arrivato il primo traghetto, Marta salì a bordo.', why: 'An absolute participle.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Si ___ case in centro.', o: ['vendono', 'vende', 'vendete'], why: 'The passive si agrees with *case*.' },
      { q: '___ la riunione, ce ne andammo.', o: ['Finita', 'Finito', 'Finendo'], why: 'The participle agrees with *la riunione*.' },
      { q: 'Il modulo ___ compilato entro venerdì.', o: ['va', 'viene', 'è andato'], why: '*Andare + participle* = must be filled in.' },
      { q: 'Parla come se ___ tutto.', o: ['sapesse', 'sa', 'sappia'], why: '*Come se* + imperfect subjunctive.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Il libro? ___ do domani. (I give it to him)', a: ['Glielo'], why: '*Gli* + *lo* = *glielo*.' },
      { q: 'Dei soldi? ___ ho pochi.', a: ['Ne'], why: '*Ne* replaces *di soldi*.' },
      { q: 'Quando si è ___, si lavora male. (stanco, impersonal)', a: ['stanchi'], why: 'A plural adjective after impersonal *si è*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the structure with its use.', pairs: [
      ['finita la riunione', 'absolute participle: time'],
      ['detto questo', 'fixed phrase: that said'],
      ['va compilato', 'obligation'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Bisogna compilare il modulo entro venerdì.', cue: 'Il modulo va', a: ['Il modulo va compilato entro venerdì.'], why: '*Andare + participle*.' },
      { q: 'Quando la riunione finì, ce ne andammo.', cue: 'Finita', a: ['Finita la riunione, ce ne andammo.'], why: 'An absolute participle.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Si [vende] case in centro.', a: ['vendono'], why: 'The passive si agrees with *case*.' },
      { s: 'Parla come se [sa] tutto.', a: ['sapesse'], why: '*Come se* needs the imperfect subjunctive.' },
    ] },
  ],
};
