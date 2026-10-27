// Italian A1, unit 8 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u8',
  title: 'At the weekend',
  goal: 'Say what you did at the weekend and what you liked.',
  art: 'cactus',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['past', 'passato prossimo', 'avere', 'essere', 'agreement', 'negation', 'weekend'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ho guardato un film',
      about: 'The passato prossimo with avere: regular and common irregular participles.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To say what you did in the past, Italian uses the **passato prossimo**. It has two parts: the present of **avere** (or **essere**) and a **past participle**. *Ho guardato un film* means *I watched a film* or *I have watched a film*. Both English tenses are translated by the same form.' },
          { t: 'table', caption: 'Regular past participles', explain: ['head'], head: ['Verbs in', 'Participle', 'Example'], rows: [
            ['-are (guardare)', '-ato: guardato', 'Ho guardato un film.'],
            ['-ere (vendere)', '-uto: venduto', 'Abbiamo venduto la macchina.'],
            ['-ire (finire)', '-ito: finito', 'Lei ha finito alle sei.'],
          ] },
          { t: 'tip', art: 'owl', md: 'With **avere**, the participle does not change when the subject is a woman or a group: *Lei ha mangiato, loro hanno mangiato.* The auxiliary shows the person: *ho, hai, ha, abbiamo, avete, hanno.* Short adverbs like **già** (already) go between the auxiliary and the participle: *Ho già mangiato.*' },
        ],
        [
          { t: 'text', md: 'Many common verbs have an **irregular participle**. You must learn each one. Here are the ones you need the most at A1.' },
          { t: 'table', caption: 'Common irregular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Participle', 'Example'], rows: [
            ['fare', 'fatto', 'Ho fatto sport.'],
            ['prendere', 'preso', 'Abbiamo preso il treno.'],
            ['vedere', 'visto', 'Lei ha visto un amico.'],
            ['avere', 'avuto', 'Ho avuto una lezione.'],
            ['essere', 'stato', 'Lui è stato malato.'],
            ['leggere', 'letto', 'Hanno letto un libro.'],
            ['scrivere', 'scritto', 'Ho scritto un’e-mail.'],
            ['dire', 'detto', 'Ha detto buongiorno.'],
          ] },
          { t: 'examples', items: [
            { s: 'Sabato **ho lavorato**.', n: 'On Saturday, I worked.' },
            { s: '**Abbiamo mangiato** al ristorante.', n: '*mangiare* → *mangiato*.' },
            { s: 'Lei **ha fatto** la spesa.', n: '*fare* → *fatto*.' },
            { s: '**Avete preso** l’autobus?', n: '*prendere* → *preso*.' },
            { s: '**Hanno guardato** un film.', n: '*guardare* → *guardato*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the passato prossimo.', items: [
            { q: 'Ieri ___ un film. (io, guardare)', a: ['ho guardato'], why: '*ho guardato*' },
            { q: 'Noi ___ al ristorante. (mangiare)', a: ['abbiamo mangiato'], why: '*abbiamo mangiato*' },
            { q: 'Lei ___ alle sei. (finire)', a: ['ha finito'], why: '*ha finito*' },
            { q: 'Tu ___ sport? (fare)', a: ['hai fatto'], why: '*hai fatto*' },
            { q: 'Loro ___ il treno. (prendere)', a: ['hanno preso'], why: '*hanno preso*' },
            { q: 'Voi ___ un caffè? (bere)', a: ['avete bevuto'], why: '*bere* → *bevuto*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
            ['fare', 'fatto'],
            ['prendere', 'preso'],
            ['vedere', 'visto'],
            ['leggere', 'letto'],
            ['scrivere', 'scritto'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ieri ho guardato un film.', why: 'Time, auxiliary, participle, object.' },
            { a: 'Abbiamo preso il treno.', why: '*abbiamo* + *preso*.' },
            { a: 'Lei ha fatto la spesa sabato.', why: '*ha fatto* + object + time.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Ieri ___ mangiato al ristorante.', o: ['ho', 'sono', 'ha'], why: '*mangiare* uses *avere*: *ho mangiato*.' },
            { q: 'Sabato abbiamo ___ un film.', o: ['visto', 'vedere', 'veduto'], why: 'The participle of *vedere* is *visto*.' },
            { q: 'Lei ha ___ un’e-mail.', o: ['scritto', 'scrivere', 'scrivuto'], why: 'The participle of *scrivere* is *scritto*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sono andata a Firenze',
      about: 'The passato prossimo with essere for movement, and time words.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A group of verbs of movement and change use **essere**, not *avere*, in the passato prossimo: **andare, venire, partire, arrivare, rimanere, uscire, tornare, essere**. With *essere*, the participle **agrees with the subject**: *-o* for a man, *-a* for a woman, *-i* for several men, *-e* for several women. *Lui è andato, lei è andata, loro sono andati, loro sono andate.* Reflexive verbs also use *essere*: *mi sono alzato / alzata.*' },
          { t: 'table', caption: 'andare in the passato prossimo', quiz: true, head: ['', 'andare'], rows: [
            ['io', 'sono andato / andata'],
            ['tu', 'sei andato / andata'],
            ['lui', 'è andato'],
            ['lei', 'è andata'],
            ['noi', 'siamo andati / andate'],
            ['voi', 'siete andati / andate'],
            ['loro (men or mixed)', 'sono andati'],
            ['loro (women)', 'sono andate'],
          ] },
          { t: 'tip', art: 'owl', md: 'Here is a way to remember them: the verbs describe movement or a change of place or state: *andare, venire, arrivare, partire, uscire, entrare, tornare, rimanere, nascere.* Many are pairs of opposites: *andare / venire, arrivare / partire, entrare / uscire.* For all other verbs, use *avere*.' },
        ],
        [
          { t: 'table', caption: 'Verbs with essere', explain: ['head', 'col2'], head: ['Infinitive', 'Participle', 'Meaning'], rows: [
            ['andare', 'andato', 'to go'],
            ['venire', 'venuto', 'to come'],
            ['partire', 'partito', 'to leave'],
            ['arrivare', 'arrivato', 'to arrive'],
            ['rimanere', 'rimasto', 'to stay'],
            ['uscire', 'uscito', 'to go out'],
            ['tornare', 'tornato', 'to go back'],
          ] },
          { t: 'text', md: 'Time words help you place a past event: **ieri** (yesterday), **ieri sera** (last night), **sabato scorso** (last Saturday), **la settimana scorsa** (last week), **due giorni fa** (two days ago), **stamattina** (this morning). They usually come at the start or the end of the sentence.' },
          { t: 'examples', items: [
            { s: 'Sabato **sono andato** al mercato.', n: 'A man says *andato*.' },
            { s: 'Sabato **sono andata** al mercato.', n: 'A woman says *andata*.' },
            { s: '**Siamo arrivati** a mezzogiorno.', n: 'A group: *arrivati*.' },
            { s: 'Loro **sono partite** ieri sera.', n: 'Women: *partite*.' },
            { s: '**La settimana scorsa** lui **è rimasto** a casa.', n: 'A time word at the start.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Maria è ___ a Firenze.', o: ['andata', 'andato', 'andati'], why: 'Maria is a woman: *andata*.' },
            { q: 'I miei fratelli sono ___ ieri.', o: ['partiti', 'partito', 'partite'], why: 'Several men: *partiti*.' },
            { q: 'Noi siamo ___ alle otto. (due donne)', o: ['arrivate', 'arrivati', 'arrivato'], why: 'Two women: *arrivate*.' },
            { q: 'Paolo è ___ a casa.', o: ['rimasto', 'rimasta', 'rimasti'], why: 'Paolo is a man: *rimasto*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'avere or essere?', groups: ['avere', 'essere'], items: [
            { s: 'mangiare', g: 0, why: '*ho mangiato*' },
            { s: 'andare', g: 1, why: '*sono andato*' },
            { s: 'guardare', g: 0, why: '*ho guardato*' },
            { s: 'arrivare', g: 1, why: '*sono arrivato*' },
            { s: 'fare', g: 0, why: '*ho fatto*' },
            { s: 'rimanere', g: 1, why: '*sono rimasto*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the passato prossimo of andare (a woman speaks).', verb: 'andare', tense: 'passato prossimo', rows: [
            ['io', 'sono andata'],
            ['tu', 'sei andata'],
            ['lei', 'è andata|e andata'],
            ['noi', 'siamo andate'],
            ['loro', 'sono andate'],
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ieri [ho] andato al cinema.', a: ['sono'], why: '*andare* uses *essere*: *sono andato*.' },
            { s: 'Lei è [arrivato] a mezzogiorno.', a: ['arrivata'], why: 'A woman: *arrivata*.' },
            { s: 'Loro sono [rimasto] a casa.', a: ['rimasti'], why: 'Several people: *rimasti*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Com’è andata?',
      about: 'Negation in the past, asking about the weekend and era.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To make a past sentence negative, put **non** before the auxiliary: *Non ho mangiato. Lei non è andata al cinema.* To ask about the weekend, say **Che cosa hai fatto nel fine settimana?** and answer with the passato prossimo. To ask how it was, say **Com’è andata?** or **Com’era?** and answer **È stato bello / Era bello / Era bellissimo / Era lungo / Era faticoso.**' },
          { t: 'dialogue', title: 'Il fine settimana', lines: [
            { who: 'Giulia', s: 'Ciao Marco! Che cosa hai fatto nel fine settimana?' },
            { who: 'Marco', s: 'Sabato sono andato al mare con mia sorella. Abbiamo fatto una passeggiata.' },
            { who: 'Giulia', s: 'Com’è andata?' },
            { who: 'Marco', s: 'Benissimo! Ma domenica sono rimasto a casa. Non ho lavorato.' },
          ] },
          { t: 'tip', art: 'owl', md: '**Era** is the past of **è**: *È bello* (it is nice) becomes *Era bello* (it was nice). It belongs to the **imperfect**, which you will learn later. At this level, use **era** and **c’era** as fixed words to say what something was like: **Com’era?** and answer with one adjective.' },
        ],
        [
          { t: 'table', caption: 'The weekend', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['fare una passeggiata', 'to go for a walk'],
            ['andare al mare', 'to go to the sea'],
            ['vedere gli amici', 'to see friends'],
            ['fare sport', 'to do sport'],
            ['rimanere a casa', 'to stay at home'],
            ['dormire', 'to sleep'],
            ['Era bello / lungo', 'It was nice / long'],
          ] },
          { t: 'examples', items: [
            { s: '**Non ho** lavorato domenica.', n: '*non* before *ho*.' },
            { s: 'Lei **non è** venuta sabato.', n: 'With *essere*, *non* goes before *è*.' },
            { s: 'Che cosa **avete fatto**?', n: 'What did you do?' },
            { s: '**Non abbiamo** fatto niente.', n: '*non … niente* means nothing.' },
            { s: 'Com’**era** il film? – **Era** lungo, ma bello.', n: '*Era* + adjective.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Non ho lavorato domenica.', why: '*non* before *ho*.' },
            { a: 'Lei non è andata al cinema.', why: 'With *essere*: *non è andata*.' },
            { a: 'Che cosa hai fatto sabato?', why: 'Question word, then *hai fatto*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make the sentence negative.', items: [
            { q: 'Ho mangiato al ristorante.', cue: 'Non ho', a: ['Non ho mangiato al ristorante.'], why: 'Put *non* before *ho*.' },
            { q: 'Lei è partita ieri sera.', cue: 'Lei non è', a: ['Lei non è partita ieri sera.'], why: 'Put *non* before *è*.' },
            { q: 'Abbiamo visto un film.', cue: 'Non abbiamo', a: ['Non abbiamo visto un film.'], why: 'Put *non* before *abbiamo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: '— Che cosa hai fatto sabato? — ___', o: ['Ho fatto sport.', 'Faccio sport domani.', 'Sono sport.'], why: 'Use the passato prossimo for what you did.' },
            { q: '— Com’è andata? — ___', o: ['Benissimo!', 'È a mezzogiorno.', 'Era alle otto.'], why: 'Answer with an adjective or adverb: *Benissimo!*' },
            { q: '— Sei andato al cinema? — No, ___ al cinema.', o: ['non sono andato', 'non ho andato', 'sono non andato'], why: '*andare* uses *essere*, and *non* goes before it.' },
          ] },
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['ieri', 'domani'], items: [
            { q: 'Siamo ___ a mezzogiorno.', a: 'arrivati', why: '*arrivare* uses *essere* and agrees with *noi*: *arrivati*.' },
            { q: 'Sono partita due giorni ___.', a: 'fa', why: '*due giorni fa* means two days ago.' },
            { q: 'Ha ___ un libro.', a: 'letto', why: 'The participle of *leggere* is *letto*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un weekend al mare',
      about: 'Read a short blog post about a weekend trip.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Il nostro weekend', md: '**Un weekend al mare**\n\nSabato mattina siamo partiti alle otto. Abbiamo preso il treno fino alla costa. Siamo arrivati alle dieci e abbiamo lasciato le valigie in albergo.\n\nNel pomeriggio abbiamo fatto una lunga passeggiata sulla spiaggia. Faceva bel tempo e abbiamo mangiato un gelato. La sera abbiamo cenato in un piccolo ristorante. Io ho preso del pesce, e mia sorella ha preso della pasta.\n\nDomenica ha piovuto. Siamo rimasti in albergo la mattina e abbiamo letto. Il pomeriggio siamo tornati a casa. È stato un weekend breve, ma bellissimo!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Sono partiti sabato mattina.', a: 't', why: '*Sabato mattina siamo partiti alle otto.*' },
            { q: 'Sono andati al mare in macchina.', a: 'f', why: 'They went by train: *Abbiamo preso il treno.*' },
            { q: 'Sabato sera hanno cenato al ristorante.', a: 't', why: '*La sera abbiamo cenato in un piccolo ristorante.*' },
            { q: 'La sorella dell’autore ha preso del pesce.', a: 'f', why: 'The author had fish; the sister had pasta.' },
            { q: 'L’albergo aveva una piscina.', a: 'ng', why: 'The text does not mention a swimming pool.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa hanno fatto sabato pomeriggio?', o: ['Una passeggiata sulla spiaggia.', 'Sport.', 'La spesa.'], why: '*Abbiamo fatto una lunga passeggiata sulla spiaggia.*' },
            { q: 'Che tempo ha fatto domenica?', o: ['Ha piovuto.', 'Ha nevicato.', 'Ha fatto molto caldo.'], why: '*Domenica ha piovuto.*' },
            { q: 'Com’è stato il weekend?', o: ['Breve, ma bellissimo.', 'Lungo e faticoso.', 'Triste.'], why: '*È stato un weekend breve, ma bellissimo!*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the passato prossimo.', items: [
            { s: 'Sabato mattina [siamo partiti] alle otto.', why: '*siamo partiti*: essere + participle.' },
            { s: '[Abbiamo preso] il treno fino alla costa.', why: '*abbiamo preso*: avere + participle.' },
            { s: 'La sera [abbiamo cenato] in un piccolo ristorante.', why: '*abbiamo cenato*: avere + participle.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ieri ___ guardato un film.', o: ['ho', 'sono', 'ha'], why: '*guardare* uses *avere*: *ho guardato*.' },
      { q: 'Sabato lei è ___ al mare.', o: ['andata', 'andato', 'andati'], why: 'A woman: *andata*.' },
      { q: 'Abbiamo ___ il treno.', o: ['preso', 'prendere', 'prendato'], why: 'The participle of *prendere* is *preso*.' },
      { q: '— Com’è andata? — ___', o: ['Benissimo!', 'È a mezzogiorno.', 'Era alle otto.'], why: 'Answer with an adjective or adverb.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Lei ___ fatto sport. (avere)', a: ['ha'], why: '*lei ha fatto*' },
      { q: 'Loro non sono ___. (venire)', a: ['venuti'], why: '*loro sono venuti*; negative: *non sono venuti*.' },
      { q: 'La settimana ___, siamo andati a Lucca.', a: ['scorsa'], why: '*la settimana scorsa* means last week.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
      ['fare', 'fatto'],
      ['vedere', 'visto'],
      ['leggere', 'letto'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Ieri sera abbiamo mangiato al ristorante.', why: 'A time word at the start, then *abbiamo mangiato*.' },
      { a: 'Lei non è andata al lavoro.', why: '*non* before *è*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ieri [ho] andato al cinema.', a: ['sono'], why: '*andare* uses *essere*.' },
      { s: 'Lei è [arrivato] a mezzogiorno.', a: ['arrivata'], why: 'A woman: *arrivata*.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Noi ___ preso l’autobus.', o: ['abbiamo', 'siamo', 'hanno'], why: '*prendere* uses *avere*: *abbiamo preso*.' },
    ] },
  ],
};
