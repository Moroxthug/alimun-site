// Italian A2, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'Celebrations and the future',
  goal: 'Talk about celebrations, invite people and say what you will do. Learn dates, the simple future and se + present + future.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['celebrations', 'dates', 'months', 'invitations', 'futuro semplice', 'se clauses', 'plans', 'promises'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Buon compleanno!',
      about: 'Talk about celebrations, give dates and invite people.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To say the date, use **il** + number + month: *il dodici marzo, il quattordici luglio*. For the first day, Italian uses the ordinal: **il primo maggio**. The months and the days start with a small letter. To ask the date, say **Che giorno è oggi?** or **Quanti ne abbiamo oggi?** The answer is **Oggi è il dodici marzo.**' },
          { t: 'table', caption: 'The months', explain: ['head'], head: ['Month', 'Month'], rows: [
            ['gennaio', 'luglio'],
            ['febbraio', 'agosto'],
            ['marzo', 'settembre'],
            ['aprile', 'ottobre'],
            ['maggio', 'novembre'],
            ['giugno', 'dicembre'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say *in March*, use **a marzo** or **in marzo**: *Il mio compleanno è a marzo.* To say *on March 12th*, use **il 12 marzo**. Remember: **il primo maggio**, but **il due maggio, il tre maggio**.' },
        ],
        [
          { t: 'table', caption: 'Celebrations and wishes', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['Buon compleanno!', 'Happy birthday!'],
            ['Buon Natale!', 'Merry Christmas!'],
            ['Buon anno!', 'Happy New Year!'],
            ['Congratulazioni!', 'Congratulations!'],
            ['un regalo', 'a present'],
            ['una torta', 'a cake'],
            ['gli invitati', 'the guests'],
            ['una festa', 'a party'],
          ] },
          { t: 'dialogue', title: 'Un invito', lines: [
            { who: 'Giulia', s: 'Marco, il mio compleanno è il dodici marzo. Vuoi venire alla mia festa?' },
            { who: 'Marco', s: 'Volentieri! A che ora?' },
            { who: 'Giulia', s: 'Alle otto, a casa mia. Puoi portare una bibita?' },
            { who: 'Marco', s: 'Certo. Buon compleanno in anticipo!' },
          ] },
        ],
        [
          { t: 'text', md: 'To invite, say **Ti invito a …** (to a friend) or **La invito a …** (politely). To accept: **Volentieri! Grazie dell’invito.** To decline: **Grazie, ma non posso** and give a reason. When you give a present, say **È per te.** When you receive it, say **Grazie mille, è bellissimo!**' },
          { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
            ['È il tuo compleanno.', 'Buon compleanno!'],
            ['Il 31 dicembre a mezzanotte.', 'Buon anno!'],
            ['Hai superato l’esame.', 'Congratulazioni!'],
            ['Vuoi venire alla mia festa?', 'Volentieri!'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il mio compleanno è il dodici marzo.', why: '*il* + number + month.' },
            { a: 'Ti invito alla mia festa.', why: '*invitare a* + event.' },
            { a: 'Grazie mille, è bellissimo!', why: 'To thank.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il mio compleanno è a ___. (March)', a: ['marzo'], why: '*a marzo*' },
            { q: 'La festa è il ___ maggio. (1st)', a: ['primo'], why: '*il primo maggio*' },
            { q: 'Ti ___ alla mia festa. (invitare)', a: ['invito'], why: '*ti invito*' },
            { q: 'È ___ te, un piccolo regalo.', a: ['per'], why: '*È per te.*' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['gennaio', 'January'],
            ['marzo', 'March'],
            ['giugno', 'June'],
            ['agosto', 'August'],
            ['ottobre', 'October'],
            ['dicembre', 'December'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sarò lì, andremo',
      about: 'Form the simple future.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **simple future** says what will happen. For most verbs, take the **infinitive**, remove the final **-e**, and add the endings **-ò, -ai, -à, -emo, -ete, -anno**. For verbs in **-are**, the **a** changes to **e**: *parlare* gives *parlerò, parlerai, parlerà, parleremo, parlerete, parleranno*. *prendere* gives *prenderò*, and *dormire* gives *dormirò*.' },
          { t: 'table', caption: 'parlare and prendere in the future', quiz: true, head: ['', 'parlare', 'prendere'], rows: [
            ['io', 'parlerò', 'prenderò'],
            ['tu', 'parlerai', 'prenderai'],
            ['lui / lei / Lei', 'parlerà', 'prenderà'],
            ['noi', 'parleremo', 'prenderemo'],
            ['voi', 'parlerete', 'prenderete'],
            ['loro', 'parleranno', 'prenderanno'],
          ] },
          { t: 'tip', art: 'owl', md: 'The endings are the same for every verb, even irregular ones; only the stem changes. Remember the **accents** on **-ò** and **-à**: *parlerò* and *parlerà* are future, while *parlo* and *parla* are present. Verbs in **-care** and **-gare** keep the hard sound: **cercare → cercherò**, **pagare → pagherò**. Verbs in **-ciare** and **-giare** lose the **i**: **mangiare → mangerò**, **cominciare → comincerò**.' },
        ],
        [
          { t: 'table', caption: 'Irregular stems', explain: ['head', 'col3'], head: ['Infinitive', 'io', 'noi', 'Meaning'], rows: [
            ['essere', 'sarò', 'saremo', 'to be'],
            ['avere', 'avrò', 'avremo', 'to have'],
            ['andare', 'andrò', 'andremo', 'to go'],
            ['fare', 'farò', 'faremo', 'to do'],
            ['venire', 'verrò', 'verremo', 'to come'],
            ['potere', 'potrò', 'potremo', 'can'],
            ['volere', 'vorrò', 'vorremo', 'to want'],
            ['vedere', 'vedrò', 'vedremo', 'to see'],
          ] },
          { t: 'examples', items: [
            { s: 'Domani **sarò** a casa.', n: '*essere* → *sarò*.' },
            { s: 'L’estate prossima **andremo** in Italia.', n: '*andare* → *andremo*.' },
            { s: 'Lei **verrà** alla mia festa sabato.', n: '*venire* → *verrà*.' },
            { s: '**Farò** una torta per il compleanno.', n: '*fare* → *farò*.' },
            { s: 'Loro **avranno** una sorpresa.', n: '*avere* → *avranno*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the future of andare.', verb: 'andare', tense: 'futuro semplice', rows: [
            ['io', 'andrò|andro'],
            ['tu', 'andrai'],
            ['lui / lei', 'andrà|andra'],
            ['noi', 'andremo'],
            ['voi', 'andrete'],
            ['loro', 'andranno'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the simple future.', items: [
            { q: 'Domani ___ a casa. (io, essere)', a: ['sarò', 'saro'], why: '*io sarò*' },
            { q: 'L’estate prossima ___ in Italia. (noi, andare)', a: ['andremo'], why: '*noi andremo*' },
            { q: 'Lei ___ alla mia festa. (venire)', a: ['verrà', 'verra'], why: '*lei verrà*' },
            { q: '___ una torta. (io, fare)', a: ['Farò', 'Faro'], why: '*io farò*' },
            { q: 'Tu ___ il film sabato. (vedere)', a: ['vedrai'], why: '*tu vedrai*' },
            { q: 'Loro ___ una sorpresa. (avere)', a: ['avranno'], why: '*loro avranno*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Domani noi [andaremo] al cinema.', a: ['andremo'], why: '*andare* → *andremo*.' },
            { s: 'Sabato io [vederò] il film.', a: ['vedrò'], why: '*vedere* → *vedrò*, with a short stem.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'L’anno prossimo noi ___ in Spagna.', o: ['andremo', 'andiamo', 'andavamo'], why: 'Next year: the future *andremo*.' },
            { q: 'Io non ___ lì sabato.', o: ['sarò', 'sono', 'ero'], why: 'Future: *io sarò*.' },
            { q: 'Tu ___ domani? (come)', o: ['verrai', 'vieni', 'venivi'], why: '*tu verrai*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se ho tempo, verrò',
      about: 'Talk about plans and promises with se + present + future.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To say what will happen if something happens, use **se** + present, and the **future** in the other part: *Se vieni, preparerò una torta. Se piove, resteremo a casa.* The **se** part can come first or second: *Preparerò una torta se vieni.* In everyday Italian, the present is also common in the second part: *Se vieni, preparo una torta.*' },
          { t: 'table', caption: 'se + present + future', explain: ['head', 'col2'], head: ['If … (present)', 'Then … (future)', 'Meaning'], rows: [
            ['Se vieni', 'preparerò una torta.', 'If you come, I will make a cake.'],
            ['Se piove', 'resteremo qui.', 'If it rains, we will stay here.'],
            ['Se ho tempo', 'andrò al cinema.', 'If I have time, I will go to the cinema.'],
            ['Se vuoi', 'ti aiuterò.', 'If you want, I will help you.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Never use the future after **se**: say **Se vieni**, not *Se verrai*. The future goes only in the other part of the sentence. For a plan with no condition, the present with a time word is enough: *Domani preparo una torta.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se** ho tempo, **andrò** alla festa.', n: 'A possible plan.' },
            { s: '**Se** fa bel tempo, **faremo** un picnic.', n: '*se* + present, future.' },
            { s: '**Se** vuoi, **ti aiuterò**.', n: 'An offer.' },
            { s: '**Verrò** alla tua festa **se** posso.', n: 'The *se* part second.' },
            { s: '**Quando** avremo tempo, **partiremo** in vacanza.', n: '*quando* + future for a future time.' },
          ] },
          { t: 'dialogue', title: 'I progetti', lines: [
            { who: 'Giulia', s: 'Che cosa farai sabato?' },
            { who: 'Marco', s: 'Se fa bel tempo, andrò al mare. E tu?' },
            { who: 'Giulia', s: 'Se ho tempo, preparerò una torta per la mia festa.' },
            { who: 'Marco', s: 'Perfetto! Verrò se posso.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Se tu ___, preparerò una torta.', o: ['vieni', 'verrai', 'venivi'], why: 'After *se*: the present.' },
            { q: 'Se piove, noi ___ a casa.', o: ['resteremo', 'restiamo', 'restavamo'], why: 'The result is in the future.' },
            { q: 'Se ___ tempo, andrò al cinema.', o: ['ho', 'avrò', 'avevo'], why: 'After *se*: the present.' },
            { q: 'Se vuoi, io ti ___.', o: ['aiuterò', 'aiuto', 'aiutavo'], why: 'The offer is in the future.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with se.', items: [
            { q: 'Piove. Resteremo a casa.', cue: 'Se', a: ['Se piove, resteremo a casa.'], why: '*se* + present, future.' },
            { q: 'Vieni. Preparerò una torta.', cue: 'Se', a: ['Se vieni, preparerò una torta.'], why: '*se* + present, future in the other part.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se ho tempo, verrò.', why: '*se* + present, then the future.' },
            { a: 'Faremo un picnic se fa bel tempo.', why: 'The *se* part can come second.' },
            { a: 'Vedrai, andrà tutto bene.', why: 'Two futures.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Si dice «Se verrai, sarò contento».', a: 'f', why: 'No future after *se*: *Se vieni*.' },
            { q: 'Si dice «Se piove, restiamo a casa».', a: 't', why: 'The present is common in everyday Italian.' },
            { q: 'Si dice «Se ha tempo, verrà».', a: 't', why: 'After *se*, the present; the result in the future.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un invito e una risposta',
      about: 'Read an invitation card and an e-mail reply.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Un invito', md: '**Siete invitati!**\nPer festeggiare il mio compleanno, vi invito a una festa sabato 12 marzo, alle 20, a casa mia. Ci sarà musica, una grande torta e tante sorprese. Portate una bibita, se potete.\n\nRispondete entro il 5 marzo a giulia@example.com.\n\nGiulia' },
          { t: 'reading', title: 'Una risposta', md: 'Ciao Giulia,\n\ngrazie per l’invito, è molto gentile! Verrò volentieri. Sarò da te alle 20 e porterò del succo d’arancia. Se mio fratello è libero, verrà anche lui. Te lo dirò domani.\n\nBuon compleanno in anticipo!\nMarco' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La festa è sabato 12 marzo.', a: 't', why: '*sabato 12 marzo, alle 20*' },
            { q: 'La festa è in un ristorante.', a: 'f', why: 'It is at Giulia’s home: *a casa mia*.' },
            { q: 'Marco porterà del succo d’arancia.', a: 't', why: '*porterò del succo d’arancia*' },
            { q: 'Bisogna rispondere entro il 5 marzo.', a: 't', why: '*Rispondete entro il 5 marzo.*' },
            { q: 'Marco porterà un regalo.', a: 'ng', why: 'The reply does not mention a present.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa ci sarà alla festa?', o: ['Musica e una torta.', 'Un film e sport.', 'Un viaggio.'], why: '*Ci sarà musica, una grande torta e tante sorprese.*' },
            { q: 'Chi verrà forse con Marco?', o: ['Suo fratello.', 'Sua sorella.', 'Sua madre.'], why: '*Se mio fratello è libero, verrà anche lui.*' },
            { q: 'Quando dirà Marco se suo fratello viene?', o: ['Domani.', 'Stasera.', 'Sabato.'], why: '*Te lo dirò domani.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the simple future.', items: [
            { s: '[Verrò] volentieri e [sarò] da te alle 20.', why: '*verrò* and *sarò* are future forms.' },
            { s: '[Porterò] del succo e mio fratello [verrà] anche lui.', why: '*porterò* and *verrà* are future forms.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Domani io ___ a casa.', o: ['sarò', 'sono', 'ero'], why: 'Future of *essere*: *sarò*.' },
      { q: 'Se tu ___, preparerò una torta.', o: ['vieni', 'verrai', 'venivi'], why: 'After *se*, the present.' },
      { q: 'Il mio compleanno è ___ marzo.', o: ['a', 'da', 'di'], why: '*a marzo*' },
      { q: 'È il ___ maggio. (1st)', o: ['primo', 'uno', 'una'], why: '*il primo maggio*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'L’estate prossima noi ___ in Italia. (andare)', a: ['andremo'], why: '*noi andremo*' },
      { q: 'Lei ___ alla mia festa. (venire)', a: ['verrà', 'verra'], why: '*lei verrà*' },
      { q: '___ piove, resteremo a casa.', a: ['Se'], why: '*se* + present.' },
    ] },
    { t: 'ex', kind: 'match', h: 'What do you say?', pairs: [
      ['È il tuo compleanno.', 'Buon compleanno!'],
      ['Il 31 dicembre a mezzanotte.', 'Buon anno!'],
      ['Hai superato l’esame.', 'Congratulazioni!'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences with se.', items: [
      { q: 'Fa bel tempo. Faremo un picnic.', cue: 'Se', a: ['Se fa bel tempo, faremo un picnic.'], why: '*se* + present, future.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Se ho tempo, verrò.', why: '*se* + present, future.' },
      { a: 'Ti invito alla mia festa.', why: '*invitare a* + event.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Domani noi [andaremo] al cinema.', a: ['andremo'], why: '*andare* → *andremo*.' },
      { s: 'Se [verrai], sarò contento.', a: ['vieni'], why: 'No future after *se*.' },
    ] },
  ],
};
