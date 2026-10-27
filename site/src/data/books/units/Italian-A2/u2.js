// Italian A2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'What did you do?',
  goal: 'Tell a short story about last week and put events in order. Learn more irregular participles, reflexive verbs in the passato prossimo and the time words fa, da and per.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passato prossimo', 'irregular participles', 'reflexive verbs', 'time expressions', 'narrative'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ho messo, ho detto, ho chiesto',
      about: 'Review the passato prossimo and learn more irregular participles.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **passato prossimo** is built with the present of **avere** (or **essere**) and a past participle: *Ho lavorato. Lei è partita.* You learned the regular participles (**-ato, -uto, -ito**) and a few irregular ones at A1. Here are more irregular participles. Learn them with the infinitive, because the spelling does not follow a rule.' },
          { t: 'table', caption: 'Irregular participles', explain: ['head'], quiz: true, head: ['Infinitive', 'Participle', 'Example'], rows: [
            ['mettere', 'messo', 'Ho messo il cappotto.'],
            ['chiedere', 'chiesto', 'Lei ha chiesto un caffè.'],
            ['aprire', 'aperto', 'Abbiamo aperto la finestra.'],
            ['chiudere', 'chiuso', 'Ho chiuso la porta.'],
            ['rispondere', 'risposto', 'Hai risposto alla mail?'],
            ['vincere', 'vinto', 'Hanno vinto la partita.'],
            ['bere', 'bevuto', 'Ho bevuto un tè.'],
            ['nascere', 'nato', 'Sono nato a Roma.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Short adverbs like **già** (already), **ancora** (yet, still), **sempre** (always) and **mai** (ever) go between the auxiliary and the participle: *Ho già mangiato. Non ho ancora finito.* A time word like **ieri** goes at the start or the end: *Ieri ho lavorato.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ieri **ho messo** un maglione perché faceva freddo.', n: '*mettere* → *messo*.' },
            { s: 'Lei mi **ha chiesto** l’indirizzo.', n: '*chiedere* → *chiesto*.' },
            { s: 'Abbiamo **aperto** le finestre.', n: '*aprire* → *aperto*.' },
            { s: 'Hai **già risposto** alla mail?', n: 'The adverb *già* goes between the auxiliary and the participle.' },
            { s: 'Non **ho ancora** capito.', n: 'Negative: *non ho ancora capito*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the passato prossimo.', items: [
            { q: 'Ieri ___ il cappotto. (io, mettere)', a: ['ho messo'], why: '*ho messo*' },
            { q: 'Lei ___ un caffè. (chiedere)', a: ['ha chiesto'], why: '*ha chiesto*' },
            { q: 'Noi ___ la porta. (aprire)', a: ['abbiamo aperto'], why: '*abbiamo aperto*' },
            { q: 'Tu ___ alla mail? (rispondere)', a: ['hai risposto'], why: '*hai risposto*' },
            { q: 'Loro ___ la partita. (vincere)', a: ['hanno vinto'], why: '*hanno vinto*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
            ['mettere', 'messo'],
            ['chiedere', 'chiesto'],
            ['aprire', 'aperto'],
            ['chiudere', 'chiuso'],
            ['rispondere', 'risposto'],
            ['vincere', 'vinto'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Lei ha ___ la porta.', o: ['chiuso', 'chiudato', 'chiusato'], why: 'The participle of *chiudere* is *chiuso*.' },
            { q: 'Abbiamo ___ le finestre.', o: ['aperto', 'aprito', 'apreto'], why: 'The participle of *aprire* is *aperto*.' },
            { q: 'Hai ___ bene?', o: ['dormito', 'dormato', 'dormuto'], why: '*dormire* is regular in *-ire*: *dormito*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ieri ho [mettato] il cappotto.', a: ['messo'], why: '*mettere* → *messo*.' },
            { s: 'Lei ha [chiedato] un caffè.', a: ['chiesto'], why: '*chiedere* → *chiesto*.' },
            { s: 'Abbiamo [capuo] la lezione.', a: ['capito'], why: '*capire* → *capito*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ho dormito bene ieri sera.', why: 'Auxiliary, participle, adverb, time.' },
            { a: 'Lei ha già aperto la porta.', why: '*già* goes between *ha* and the participle.' },
            { a: 'Non abbiamo capito.', why: '*non* before the auxiliary.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Mi sono alzato presto',
      about: 'Reflexive verbs in the passato prossimo.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Reflexive verbs always use **essere** in the passato prossimo, and the participle **agrees with the subject**. The small word (**mi, ti, si, ci, vi, si**) goes before *essere*: *Mi sono alzato / alzata. Lei si è coricata tardi. Ci siamo divertiti.*' },
          { t: 'table', caption: 'alzarsi in the passato prossimo', quiz: true, head: ['', 'alzarsi'], rows: [
            ['io', 'mi sono alzato / alzata'],
            ['tu', 'ti sei alzato / alzata'],
            ['lui', 'si è alzato'],
            ['lei', 'si è alzata'],
            ['noi', 'ci siamo alzati / alzate'],
            ['voi', 'vi siete alzati / alzate'],
            ['loro (men or mixed)', 'si sono alzati'],
            ['loro (women)', 'si sono alzate'],
          ] },
          { t: 'tip', art: 'owl', md: 'For the negative, put **non** before the small word: **Non mi sono alzato.** In writing, check the participle: a man writes *alzato*, a woman writes *alzata*. In speech, the endings sound different (*-o* and *-a*), so you can hear who is speaking.' },
        ],
        [
          { t: 'table', caption: 'Useful reflexive verbs', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['svegliarsi', 'to wake up'],
            ['alzarsi', 'to get up'],
            ['riposarsi', 'to rest'],
            ['divertirsi', 'to have fun'],
            ['prepararsi', 'to get ready'],
            ['incontrarsi', 'to meet'],
            ['annoiarsi', 'to be bored'],
            ['arrabbiarsi', 'to get angry'],
          ] },
          { t: 'examples', items: [
            { s: 'Stamattina **mi sono alzato** alle sei.', n: 'A man speaks.' },
            { s: 'Ieri **lei si è coricata** molto tardi.', n: 'A woman: *coricata*.' },
            { s: 'Sabato **ci siamo divertiti** alla festa.', n: 'A group of men or mixed.' },
            { s: 'Loro **si sono riposate** tutto il pomeriggio.', n: 'Several women.' },
            { s: '**Non mi sono riposato** questo fine settimana.', n: 'Negative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the passato prossimo of the reflexive verb.', items: [
            { q: 'Stamattina io ___ alle sette. (alzarsi, un uomo)', a: ['mi sono alzato'], why: '*mi sono alzato*' },
            { q: 'Lei ___ molto presto. (svegliarsi)', a: ['si è svegliata', 'si e svegliata'], why: 'A woman: *si è svegliata*.' },
            { q: 'Noi ci ___ molto alla festa. (divertirsi, uomini)', a: ['siamo divertiti'], why: '*ci siamo divertiti*' },
            { q: 'Loro si ___ bene. (riposarsi, uomini)', a: ['sono riposati'], why: '*si sono riposati*' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Maria si è ___ tardi.', o: ['coricata', 'coricato', 'coricati'], why: 'Maria is a woman: *coricata*.' },
            { q: 'I miei amici si sono ___ alla festa.', o: ['divertiti', 'divertito', 'divertite'], why: 'Several men: *divertiti*.' },
            { q: 'Le mie sorelle si sono ___ presto.', o: ['alzate', 'alzati', 'alzato'], why: 'Several women: *alzate*.' },
            { q: 'Io mi sono ___ stamattina. (una donna)', o: ['svegliata', 'svegliato', 'svegliate'], why: 'A woman: *svegliata*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mi sono alzato alle sette.', why: 'Small word, *sono*, participle, time.' },
            { a: 'Lei non si è riposata.', why: '*non* before the small word.' },
            { a: 'Ci siamo divertiti molto.', why: '*molto* at the end.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Mi [ho] alzato presto.', a: ['sono'], why: 'Reflexive verbs use *essere*: *mi sono alzato*.' },
            { s: 'Lei si è [alzato] tardi.', a: ['alzata'], why: 'A woman: *alzata*.' },
            { s: 'Loro si sono [riposato].', a: ['riposati'], why: 'Several men: *riposati*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Prima, poi, infine',
      about: 'Put events in order, and use fa, da and per.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To tell a story in order, use words of sequence: **prima** (first), **poi** or **dopo** (then, after), **infine** or **alla fine** (finally). You can also use **per prima cosa** (first of all). Each one goes at the start of a sentence, followed by a comma, or inside the sentence: *Prima mi sono alzato. Poi ho preso un caffè. Infine sono uscito.*' },
          { t: 'dialogue', title: 'Una mattina intensa', lines: [
            { who: 'Giulia', s: 'Che cosa hai fatto stamattina, Marco?' },
            { who: 'Marco', s: 'Prima mi sono alzato alle sei. Poi ho fatto la doccia.' },
            { who: 'Giulia', s: 'E dopo?' },
            { who: 'Marco', s: 'Dopo ho preso l’autobus. Infine sono arrivato in ufficio alle otto.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In speech, people also use **e poi** and **allora**. Do not put **dopo** alone before a verb: say **dopo aver mangiato** (after eating) or **dopo ho mangiato**.' },
        ],
        [
          { t: 'text', md: 'Three small words say *when* and *how long*. **fa** after a time means *ago*: *Sono arrivato due giorni fa.* **da** + a time means *for* or *since*, with a **present** verb: *Abito qui da tre anni* (I have lived here for three years). **per** + a time means *for*, with a **past** verb: *Ho lavorato per due ore.*' },
          { t: 'table', caption: 'fa, da, per', explain: ['head', 'col2'], head: ['Word', 'Example', 'Meaning'], rows: [
            ['fa', 'È partito un’ora fa.', 'ago'],
            ['da', 'Studio italiano da un anno.', 'for, since (still true now)'],
            ['per', 'Ho dormito per otto ore.', 'for (finished)'],
            ['ieri / stamattina', 'Stamattina ho lavorato.', 'yesterday / this morning'],
            ['la settimana scorsa', 'La settimana scorsa siamo partiti.', 'last week'],
          ] },
          { t: 'examples', items: [
            { s: 'È partita **cinque minuti fa**.', n: 'Five minutes ago.' },
            { s: 'Lavoro qui **da** due anni.', n: 'I still work here.' },
            { s: 'Abbiamo aspettato **per** un’ora.', n: 'We waited; it is finished.' },
            { s: '**La settimana scorsa** ha piovuto tutti i giorni.', n: 'A time word at the start.' },
            { s: '**Prima** abbiamo mangiato. **Poi** siamo usciti.', n: 'Two events in order.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose fa, da or per.', items: [
            { q: 'Abito a Roma ___ tre anni.', o: ['da', 'fa', 'per'], why: 'You still live there: *da* + present.' },
            { q: 'È arrivata due ore ___.', o: ['fa', 'da', 'per'], why: 'Two hours ago: *fa*.' },
            { q: 'Abbiamo camminato ___ un’ora.', o: ['per', 'da', 'fa'], why: 'A finished action with a duration: *per*.' },
            { q: 'Studia spagnolo ___ sei mesi.', o: ['da', 'fa', 'per'], why: 'He still studies it: *da*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Prima mi sono alzato.', why: 'The first thing in the morning.' },
            { a: 'Poi ho preso la colazione.', why: 'Then breakfast.' },
            { a: 'Infine sono uscito di casa.', why: 'Finally, leaving home.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['fa', 'ieri'], items: [
            { q: '___ ho aperto la finestra. Poi ho fatto il letto.', a: 'Per prima cosa', why: '*per prima cosa* starts the story.' },
            { q: 'Ho mangiato, ___ sono uscito.', a: 'poi', why: '*poi* means then.' },
            { q: '___, siamo tornati stanchissimi.', a: 'Infine', why: '*infine* ends the story.' },
            { q: 'Ho dormito ___ otto ore.', a: 'per', why: 'A finished action with a duration: *per*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una settimana intensa',
      about: 'Read an email about a busy week.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Una settimana intensa', md: 'Ciao Giulia,\n\nChe settimana! Lunedì mi sono alzata alle sei perché avevo un appuntamento di lavoro. Per prima cosa ho preso il treno, poi ho lavorato per sei ore senza pausa. La sera mi sono coricata molto presto.\n\nMartedì ho fatto la spesa e ho preparato una grande cena per i miei genitori. Mercoledì non sono potuta venire al corso di italiano, perché ero stanca. Giovedì mi sono riposata e ho letto un libro.\n\nVenerdì sono andata da Clara. Ci siamo divertite molto! Abbiamo guardato un film e abbiamo mangiato una pizza. Infine sabato ho passeggiato al parco con Karim. Mi ha detto che abita qui da due anni.\n\nE tu, che cosa hai fatto?\n\nA presto,\nNadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia si è alzata alle sei lunedì.', a: 't', why: '*Lunedì mi sono alzata alle sei.*' },
            { q: 'Ha lavorato per sei ore lunedì.', a: 't', why: '*ho lavorato per sei ore senza pausa*' },
            { q: 'Mercoledì è andata al corso di italiano.', a: 'f', why: '*Non sono potuta venire al corso di italiano.*' },
            { q: 'Venerdì Nadia e Clara hanno guardato un film.', a: 't', why: '*Abbiamo guardato un film.*' },
            { q: 'Karim abita a Torino.', a: 'ng', why: 'The email says he has lived here for two years, but not where.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Perché Nadia non è venuta al corso?', o: ['Era stanca.', 'Lavorava.', 'Era malata.'], why: '*perché ero stanca*' },
            { q: 'Che cosa ha fatto giovedì?', o: ['Si è riposata e ha letto.', 'È andata da Clara.', 'Ha fatto la spesa.'], why: '*Giovedì mi sono riposata e ho letto un libro.*' },
            { q: 'Che cosa vuol dire «da due anni»?', o: ['Karim abita ancora qui adesso.', 'Karim è partito due anni fa.', 'Karim ha abitato qui per due anni e poi è partito.'], why: '*da* + present: it is still true.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that put the events in order.', items: [
            { s: '[Per prima cosa] ho preso il treno, [poi] ho lavorato.', why: '*per prima cosa* and *poi* put the events in order.' },
            { s: '[Infine], sabato, ho passeggiato.', why: '*infine* ends the story.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the email.', items: [
            { q: 'Mercoledì Nadia non è potuta venire al ___ di italiano.', a: ['corso'], why: '*al corso di italiano*' },
            { q: 'Venerdì Nadia e Clara hanno mangiato una ___.', a: ['pizza'], why: '*una pizza*' },
            { q: 'Giovedì ha letto un ___.', a: ['libro'], why: '*ho letto un libro*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Lei ha ___ il cappotto.', o: ['messo', 'mettato', 'mettuto'], why: '*mettere* → *messo*.' },
      { q: 'Maria si è ___ tardi.', o: ['coricata', 'coricato', 'coricati'], why: 'Maria is a woman: *coricata*.' },
      { q: 'Abito qui ___ tre anni.', o: ['da', 'fa', 'per'], why: 'You still live here: *da*.' },
      { q: 'Abbiamo camminato ___ un’ora.', o: ['per', 'da', 'fa'], why: 'A finished action: *per*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ieri ho ___ una mail. (scrivere)', a: ['scritto'], why: '*scrivere* → *scritto*.' },
      { q: 'Mi ___ alzato alle sette. (essere)', a: ['sono'], why: '*mi sono alzato*' },
      { q: 'È partito un’ora ___.', a: ['fa'], why: 'One hour ago: *fa*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the participle.', pairs: [
      ['chiedere', 'chiesto'],
      ['aprire', 'aperto'],
      ['rispondere', 'risposto'],
      ['vincere', 'vinto'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Lei non si è riposata.', why: '*non* before the small word.' },
      { a: 'Prima abbiamo mangiato, poi siamo usciti.', why: '*prima* … *poi* …' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ieri [sono] mangiato al ristorante.', a: ['ho'], why: '*mangiare* uses *avere*.' },
      { s: 'Lei si è [alzato] a sei.', a: ['alzata'], why: 'A woman: *alzata*.' },
    ] },
  ],
};
