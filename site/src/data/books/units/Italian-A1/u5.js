// Italian A1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'My day',
  goal: 'Say what you do during the day and make appointments.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['time', 'days', 'daily routine', 'present tense', 'fare', 'reflexive verbs', 'appointments'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Che ore sono?',
      about: 'Tell the time, say the days of the week and the parts of the day.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **Che ore sono?** or **Che ora è?** The answer starts with **Sono le** + the hour (plural): *Sono le otto.* Only for one o’clock, noon and midnight, use **È**: **È l’una**, **È mezzogiorno**, **È mezzanotte**. For the minutes, add **e** (past), **meno** (to), **e un quarto** (quarter past), **e mezza** (half past), **meno un quarto** (quarter to).' },
          { t: 'table', caption: 'The time', explain: ['head'], head: ['Time', 'Italian'], rows: [
            ['1:00', 'È l’una.'],
            ['8:00', 'Sono le otto.'],
            ['8:15', 'Sono le otto e un quarto.'],
            ['8:30', 'Sono le otto e mezza.'],
            ['8:45', 'Sono le nove meno un quarto.'],
            ['8:10', 'Sono le otto e dieci.'],
            ['12:00', 'È mezzogiorno.'],
            ['0:00', 'È mezzanotte.'],
          ] },
          { t: 'tip', art: 'owl', md: 'On timetables and in official announcements, Italians use the 24-hour clock: *le quattordici e trenta* is 14:30. In everyday speech, they say *le due e mezza*. To say *at*, use **a** + the article: **alle otto**, **all’una**, **a mezzogiorno**: *Mi alzo alle sette.*' },
        ],
        [
          { t: 'text', md: 'The days of the week start with a small letter and, except **domenica**, are masculine. To say *on Monday*, just say **lunedì**: *Lunedì lavoro.* To say *every Monday*, say **il lunedì**. The parts of the day are **la mattina** (morning), **il pomeriggio** (afternoon), **la sera** (evening) and **la notte** (night). To say *in the morning*, say **di mattina**, **di pomeriggio**, **di sera**.' },
          { t: 'table', caption: 'Days of the week', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['lunedì', 'Monday'],
            ['martedì', 'Tuesday'],
            ['mercoledì', 'Wednesday'],
            ['giovedì', 'Thursday'],
            ['venerdì', 'Friday'],
            ['sabato', 'Saturday'],
            ['domenica', 'Sunday'],
          ] },
          { t: 'examples', items: [
            { s: '**Che ore sono?** – **Sono le** dieci e mezza.', n: 'Asking and telling the time.' },
            { s: 'Il corso comincia **alle** nove.', n: '*a* + article + hour means at.' },
            { s: '**Lunedì** lavoro **dalle** otto **alle** dodici.', n: '*dalle … alle …* means from … to ….' },
            { s: 'Faccio sport **il** martedì **e il** giovedì.', n: '*il martedì* means every Tuesday.' },
            { s: '**Di sera** ceno alle otto.', n: '*di sera* means in the evening.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the time.', pairs: [
            ['7:15', 'le sette e un quarto'],
            ['7:30', 'le sette e mezza'],
            ['6:45', 'le sette meno un quarto'],
            ['12:00', 'mezzogiorno'],
            ['0:00', 'mezzanotte'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the time and choose.', items: [
            { q: '9:30', o: ['Sono le nove e mezza.', 'Sono le nove e un quarto.', 'Sono le dieci meno un quarto.'], why: 'Half past nine: *le nove e mezza*.' },
            { q: '3:45', o: ['Sono le quattro meno un quarto.', 'Sono le tre e un quarto.', 'Sono le quattro e mezza.'], why: 'A quarter to four: *le quattro meno un quarto*.' },
            { q: '12:00', o: ['È mezzogiorno.', 'È mezzanotte.', 'Sono le dodici e mezza.'], why: 'Noon is *mezzogiorno*.' },
            { q: '1:00', o: ['È l’una.', 'Sono le una.', 'È le una.'], why: 'One o’clock is singular: *È l’una*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'search', h: 'Find the days of the week.', words: ['lunedì', 'martedì', 'giovedì', 'sabato', 'domenica'] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Che ore sono?', why: 'The question starts with *che ore*.' },
            { a: 'Il corso comincia alle nove.', why: 'Subject, verb, *alle* + hour.' },
            { a: 'Lavoro da lunedì a venerdì.', why: '*da … a …* for from … to ….' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Lavoro, mangio, faccio',
      about: 'Regular verbs in the present, and fare.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Italian verbs end in **-are**, **-ere** or **-ire**. Each group has its own endings in the present. Take off the ending and add: for **-are**, *-o, -i, -a, -iamo, -ate, -ano*; for **-ere**, *-o, -i, -e, -iamo, -ete, -ono*; for **-ire**, *-o, -i, -e, -iamo, -ite, -ono*. Some **-ire** verbs add **-isc-** in three persons: *finire* gives *finisco, finisci, finisce, finiamo, finite, finiscono*.' },
          { t: 'table', caption: 'lavorare, scrivere, dormire', quiz: true, head: ['', 'lavorare', 'scrivere', 'dormire'], rows: [
            ['io', 'lavoro', 'scrivo', 'dormo'],
            ['tu', 'lavori', 'scrivi', 'dormi'],
            ['lui / lei / Lei', 'lavora', 'scrive', 'dorme'],
            ['noi', 'lavoriamo', 'scriviamo', 'dormiamo'],
            ['voi', 'lavorate', 'scrivete', 'dormite'],
            ['loro', 'lavorano', 'scrivono', 'dormono'],
          ] },
          { t: 'tip', art: 'owl', md: 'Verbs in **-care**, **-gare**, **-ciare** and **-giare** have small spelling changes so that the sound stays the same: *cercare → cerchi, cerchiamo* (with **h**), *mangiare → mangi, mangiamo* (one **i** only). To make a verb negative, put **non** before it: *Non lavoro il sabato.*' },
        ],
        [
          { t: 'text', md: '**fare** (to do, to make) is irregular and very common: you use it for sport (*fare sport*), shopping (*fare la spesa*), housework (*fare le pulizie*) and for the weather (*Fa caldo*). **Che cosa fai?** asks what you do or what you are doing. **Che lavoro fai?** or **Che cosa fa nella vita?** asks about your job.' },
          { t: 'table', caption: 'fare (to do, to make)', quiz: true, head: ['', 'fare'], rows: [
            ['io', 'faccio'],
            ['tu', 'fai'],
            ['lui / lei / Lei', 'fa'],
            ['noi', 'facciamo'],
            ['voi', 'fate'],
            ['loro', 'fanno'],
          ] },
          { t: 'examples', items: [
            { s: '**Lavoro** in un ufficio.', n: '*lavorare in* + a place.' },
            { s: '**Mangiamo** a mezzogiorno.', n: '*noi mangiamo*, with one *i*.' },
            { s: '**Comincia** alle otto.', n: '*cominciare* is a regular verb in *-are*.' },
            { s: '**Fanno** la spesa il sabato.', n: '*fare la spesa* means to do the shopping.' },
            { s: '**Non lavoro** la domenica.', n: '*non* before the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of fare.', verb: 'fare', tense: 'present', rows: [
            ['io', 'faccio'],
            ['tu', 'fai'],
            ['lui / lei', 'fa'],
            ['noi', 'facciamo'],
            ['voi', 'fate'],
            ['loro', 'fanno'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Io ___ in una banca. (lavorare)', a: ['lavoro'], why: '*io lavoro*' },
            { q: 'Tu ___ a mezzogiorno? (mangiare)', a: ['mangi'], why: '*tu mangi*, with one *i*.' },
            { q: 'Noi ___ alle nove. (cominciare)', a: ['cominciamo'], why: '*noi cominciamo*' },
            { q: 'Voi ___ sport? (fare)', a: ['fate'], why: '*voi fate*' },
            { q: 'Loro ___ a Milano. (abitare)', a: ['abitano'], why: '*loro abitano*' },
            { q: 'Loro ___ la spesa. (fare)', a: ['fanno'], why: '*loro fanno*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Noi [mangiiamo] a mezzogiorno.', a: ['mangiamo'], why: 'Only one *i*: *mangiamo*.' },
            { s: 'Voi [facete] sport.', a: ['fate'], why: '*voi fate*' },
            { s: 'Lui [mangi] a mezzogiorno.', a: ['mangia'], why: 'One person: *lui mangia*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Luca ___ alle otto.', o: ['comincia', 'cominci', 'cominciamo'], why: 'One person: *comincia*.' },
            { q: 'I miei genitori ___ a casa.', o: ['lavorano', 'lavora', 'lavoriamo'], why: 'Several people: *lavorano*.' },
            { q: 'Voi ___ la spesa il sabato?', o: ['fate', 'fanno', 'fai'], why: '*voi fate*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Mi alzo alle sette',
      about: 'Reflexive verbs for your daily routine.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Many verbs of the daily routine are **reflexive**: they have a small word before the verb that points back to the subject. **alzarsi** (to get up) is *mi alzo* for *io*, *ti alzi* for *tu*, *si alza* for *lui* and *lei*. The pattern is **mi, ti, si, ci, vi, si** before the verb. The infinitive ends in **-si**: *alzarsi, lavarsi, svegliarsi.*' },
          { t: 'table', caption: 'alzarsi (to get up)', quiz: true, head: ['', 'alzarsi'], rows: [
            ['io', 'mi alzo'],
            ['tu', 'ti alzi'],
            ['lui / lei / Lei', 'si alza'],
            ['noi', 'ci alziamo'],
            ['voi', 'vi alzate'],
            ['loro', 'si alzano'],
          ] },
          { t: 'tip', art: 'owl', md: 'You already know this pattern from **mi chiamo**. In a negative sentence, **non** goes before the small word: **non mi alzo**. Other useful verbs: *svegliarsi, lavarsi, vestirsi, addormentarsi, riposarsi.*' },
        ],
        [
          { t: 'table', caption: 'My day', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['svegliarsi', 'to wake up'],
            ['alzarsi', 'to get up'],
            ['lavarsi', 'to wash'],
            ['vestirsi', 'to get dressed'],
            ['fare colazione', 'to have breakfast'],
            ['andare al lavoro', 'to go to work'],
            ['pranzare', 'to have lunch'],
            ['cenare', 'to have dinner'],
            ['addormentarsi', 'to fall asleep'],
          ] },
          { t: 'dialogue', title: 'Una giornata normale', lines: [
            { who: 'Giulia', s: 'A che ora ti alzi, Marco?' },
            { who: 'Marco', s: 'Mi alzo alle sette. Faccio la doccia e faccio colazione.' },
            { who: 'Giulia', s: 'A che ora cominci a lavorare?' },
            { who: 'Marco', s: 'Alle nove. Di sera ceno alle otto e vado a letto alle undici.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of alzarsi.', verb: 'alzarsi', tense: 'present', rows: [
            ['io', 'mi alzo'],
            ['tu', 'ti alzi'],
            ['lui / lei', 'si alza'],
            ['noi', 'ci alziamo'],
            ['voi', 'vi alzate'],
            ['loro', 'si alzano'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mi alzo alle sette.', why: 'Small word, verb, time.' },
            { a: 'Ci svegliamo alle sei e mezza.', why: '*ci svegliamo*: the small word comes first.' },
            { a: 'Lei si lava la mattina.', why: '*si lava*, then *la mattina*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Io ___ alzo alle sei.', o: ['mi', 'ti', 'si'], why: '*io mi alzo*' },
            { q: 'Tu ___ svegli presto?', o: ['ti', 'mi', 'si'], why: '*tu ti svegli*' },
            { q: 'Mia sorella ___ veste in fretta.', o: ['si', 'mi', 'ti'], why: '*lei si veste*' },
            { q: 'Noi ___ alziamo tardi la domenica.', o: ['ci', 'si', 'vi'], why: '*noi ci alziamo*' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Morning or evening?', groups: ['la mattina', 'la sera'], items: [
            { s: 'alzarsi', g: 0, why: 'We get up in the morning.' },
            { s: 'cenare', g: 1, why: 'We have dinner in the evening.' },
            { s: 'svegliarsi', g: 0, why: 'We wake up in the morning.' },
            { s: 'addormentarsi', g: 1, why: 'We fall asleep in the evening.' },
            { s: 'fare colazione', g: 0, why: 'Breakfast is the first meal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'La mia settimana',
      about: 'Read a week planner and a message that changes an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'L’agenda di Nadia', md: '**Lunedì**: corso di italiano alle 9, pranzo con Giulia a mezzogiorno.\n**Martedì**: lavoro dalle 8 alle 17.\n**Mercoledì**: appuntamento dal medico alle 15,30.\n**Giovedì**: lavoro dalle 8 alle 17, sport alle 18.\n**Venerdì**: corso di italiano alle 9, cena con Karim alle 20.\n**Sabato**: spesa la mattina, cinema la sera.\n**Domenica**: mi riposo.' },
          { t: 'reading', title: 'Un messaggio', md: 'Ciao Giulia!\n\nMi dispiace, lunedì non posso pranzare con te. Ho un altro appuntamento a mezzogiorno. Possiamo pranzare martedì alle 12,30? Oppure venerdì a mezzogiorno? Dimmi quando preferisci.\n\nA presto! Nadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia ha un corso di italiano il lunedì e il venerdì.', a: 't', why: '*Lunedì: corso di italiano alle 9* and *Venerdì: corso di italiano alle 9*.' },
            { q: 'Nadia lavora il mercoledì.', a: 'f', why: 'On Wednesday she has an appointment at the doctor’s; she works on Tuesday and Thursday.' },
            { q: 'Fa sport il giovedì.', a: 't', why: '*Giovedì: … sport alle 18*' },
            { q: 'Nadia cena con Karim venerdì alle 20.', a: 't', why: '*cena con Karim alle 20*' },
            { q: 'Nadia ha un cane.', a: 'ng', why: 'Nothing is said about a dog.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the message again and choose.', items: [
            { q: 'Perché Nadia non può pranzare lunedì?', o: ['Ha un altro appuntamento a mezzogiorno.', 'Lavora.', 'È malata.'], why: '*Ho un altro appuntamento a mezzogiorno.*' },
            { q: 'Quando propone di pranzare Nadia?', o: ['martedì alle 12,30 o venerdì a mezzogiorno', 'giovedì sera', 'sabato mattina'], why: '*martedì alle 12,30? Oppure venerdì a mezzogiorno?*' },
            { q: 'Che cosa chiede Nadia alla fine del messaggio?', o: ['Quando preferisce Giulia.', 'Dove abita Giulia.', 'Quanti anni ha Giulia.'], why: '*Dimmi quando preferisci.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Il mercoledì, Nadia ha un appuntamento dal ___.', a: ['medico'], why: '*appuntamento dal medico*' },
            { q: 'Il sabato sera, va al ___.', a: ['cinema'], why: '*cinema la sera*' },
            { q: 'La domenica, si ___.', a: ['riposa'], why: '*Domenica: mi riposo.* With *lei*: *si riposa*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '8:30', o: ['Sono le otto e mezza.', 'Sono le otto e un quarto.', 'Sono le nove meno un quarto.'], why: 'Half past eight: *le otto e mezza*.' },
      { q: 'Noi ___ a mezzogiorno. (mangiare)', o: ['mangiamo', 'mangiiamo', 'mangiano'], why: '*noi mangiamo*, with one *i*.' },
      { q: 'Voi ___ sport?', o: ['fate', 'fanno', 'fai'], why: '*voi fate*' },
      { q: 'Lui ___ alza alle sette.', o: ['si', 'mi', 'ti'], why: '*lui si alza*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Io ___ alle otto. (cominciare)', a: ['comincio'], why: '*io comincio*' },
      { q: '___ mezzogiorno.', a: ['È', 'E'], why: 'Noon is singular: *È mezzogiorno*.' },
      { q: 'Lei non ___ la domenica. (lavorare)', a: ['lavora'], why: '*lei lavora*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the time.', pairs: [
      ['6:15', 'le sei e un quarto'],
      ['6:30', 'le sei e mezza'],
      ['5:45', 'le sei meno un quarto'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Mi addormento alle undici.', why: 'Small word, verb, time.' },
      { a: 'Lavoriamo da lunedì a venerdì.', why: '*da … a …*' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Io [ti] alzo alle sette.', a: ['mi'], why: '*io mi alzo*' },
      { s: 'Noi [facete] sport.', a: ['facciamo'], why: '*noi facciamo*' },
    ] },
  ],
};
