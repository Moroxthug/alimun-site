// Italian A1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Free time',
  goal: 'Talk about hobbies, say what you can do and arrange to meet.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['hobbies', 'piacere', 'giocare', 'suonare', 'potere', 'volere', 'sapere', 'dovere', 'weather', 'seasons', 'invitations'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Mi piace la musica',
      about: 'Hobbies, mi piace and mi piacciono, giocare a and suonare.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To say what you like, use **piacere**. It works differently from English: the thing you like is the **subject**, so the verb agrees with it. Say **mi piace** for one thing or an action: *Mi piace la musica. Mi piace leggere.* Say **mi piacciono** for several things: *Mi piacciono i film.* To ask, say **Ti piace …?** (tu) or **Le piace …?** (Lei). To say you do not like something, say **non mi piace**.' },
          { t: 'table', caption: 'Hobbies', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['leggere', 'to read'],
            ['ascoltare la musica', 'to listen to music'],
            ['guardare un film', 'to watch a film'],
            ['cucinare', 'to cook'],
            ['viaggiare', 'to travel'],
            ['ballare', 'to dance'],
            ['camminare', 'to walk'],
            ['disegnare', 'to draw'],
          ] },
          { t: 'tip', art: 'owl', md: 'To agree, say **anche a me** (me too) after *mi piace*, and **neanche a me** (me neither) after *non mi piace*. To disagree, say **a me no** (not me) or **a me sì** (I do). To say who likes something, use **a** + a name or pronoun: **A Marco piace il calcio. A me piace il tennis.**' },
        ],
        [
          { t: 'text', md: 'Italian uses **giocare a** + a game or sport (*giocare a calcio, giocare a carte*) and **suonare** + an instrument with the article (*suonare la chitarra, suonare il pianoforte*). For many other activities, use **fare** + the noun: *fare sport, fare nuoto, fare yoga, fare una passeggiata, fare ginnastica.*' },
          { t: 'table', caption: 'Sport and music', explain: ['head'], head: ['Verb', 'Examples'], rows: [
            ['giocare a (a game)', 'a calcio, a tennis, a carte'],
            ['suonare (an instrument)', 'la chitarra, il pianoforte, il violino'],
            ['fare (an activity)', 'sport, nuoto, yoga, una passeggiata'],
          ] },
          { t: 'examples', items: [
            { s: '**Gioco a** tennis il mercoledì.', n: '*giocare a* + sport, no article.' },
            { s: 'Lei **suona la** chitarra.', n: 'An instrument: *suonare* + article.' },
            { s: 'Facciamo **una passeggiata** la domenica.', n: '*fare una passeggiata* means to go for a walk.' },
            { s: 'Fate **nuoto** il martedì?', n: '*fare nuoto* means to swim (as a hobby).' },
            { s: '**Mi piacciono** i film italiani.', n: 'Plural: *mi piacciono*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Mi ___ il calcio.', o: ['piace', 'piacciono', 'piaci'], why: 'One thing: *mi piace*.' },
            { q: 'Mi ___ le mele.', o: ['piacciono', 'piace', 'piacete'], why: 'Several things: *mi piacciono*.' },
            { q: 'Lei suona ___ chitarra.', o: ['la', 'a', 'il'], why: 'An instrument takes the article: *la chitarra*.' },
            { q: 'Giocano ___ carte la sera.', o: ['a', 'la', 'di'], why: '*giocare a* + game.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all of them.', items: [
            { key: 'giocare a', o: ['calcio', 'tennis', 'pianoforte', 'nuoto'], a: [0, 1], why: '*giocare a calcio / tennis*. For the piano, *suonare il pianoforte*.' },
            { key: 'fare', o: ['sport', 'una passeggiata', 'chitarra', 'carte'], a: [0, 1], why: '*fare sport / una passeggiata*. For an instrument, *suonare*; for cards, *giocare a carte*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Lei suona ___ chitarra.', a: ['la'], why: 'An instrument, feminine: *la chitarra*.' },
            { q: 'Noi giochiamo ___ carte la sera.', a: ['a'], why: '*giocare a carte*' },
            { q: 'Mi ___ la musica.', a: ['piace'], why: 'One thing: *mi piace*.' },
            { q: 'Facciamo una ___ la domenica. (walk)', a: ['passeggiata'], why: '*fare una passeggiata*' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['leggere', 'to read'],
            ['ballare', 'to dance'],
            ['cucinare', 'to cook'],
            ['viaggiare', 'to travel'],
            ['disegnare', 'to draw'],
            ['ascoltare', 'to listen'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Posso, voglio, so, devo',
      about: 'potere, volere, sapere and dovere with the infinitive.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Four irregular verbs help you say what you can, want, know how to do and must do. **potere** means *can* (possible or allowed), **volere** means *to want*, **sapere** means *to know how to* and **dovere** means *must*. They are followed by an **infinitive**: *Posso venire. Vuoi mangiare? Sa nuotare. Devo lavorare.*' },
          { t: 'table', caption: 'potere, volere, sapere, dovere', quiz: true, head: ['', 'potere', 'volere', 'sapere', 'dovere'], rows: [
            ['io', 'posso', 'voglio', 'so', 'devo'],
            ['tu', 'puoi', 'vuoi', 'sai', 'devi'],
            ['lui / lei / Lei', 'può', 'vuole', 'sa', 'deve'],
            ['noi', 'possiamo', 'vogliamo', 'sappiamo', 'dobbiamo'],
            ['voi', 'potete', 'volete', 'sapete', 'dovete'],
            ['loro', 'possono', 'vogliono', 'sanno', 'devono'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **vorrei** (I would like) to ask politely and **voglio** only with friends and family. To ask a favour, use **Può …?** or **Puoi …?** In English, *I can swim* is **so nuotare** (I know how to) in Italian; **posso** is for what is possible or allowed: *Posso venire sabato.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Posso** venire sabato.', n: 'I can come on Saturday.' },
            { s: '**Vuoi** giocare a tennis?', n: 'Do you want to play tennis?' },
            { s: 'Lei **sa** suonare il pianoforte.', n: 'She can play the piano (she has learned how).' },
            { s: '**Devo** lavorare fino alle sei.', n: 'I must work until six.' },
            { s: 'Non **possono** venire.', n: 'They cannot come.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of potere.', verb: 'potere', tense: 'present', rows: [
            ['io', 'posso'],
            ['tu', 'puoi'],
            ['lui / lei', 'può|puo'],
            ['noi', 'possiamo'],
            ['voi', 'potete'],
            ['loro', 'possono'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Io ___ suonare la chitarra. (sapere)', a: ['so'], why: '*io so* + infinitive means I know how to.' },
            { q: 'Tu ___ venire domani? (potere)', a: ['puoi'], why: '*tu puoi*' },
            { q: 'Noi ___ andare al cinema. (volere)', a: ['vogliamo'], why: '*noi vogliamo*' },
            { q: 'Lei ___ lavorare fino alle sei. (dovere)', a: ['deve'], why: '*lei deve*' },
            { q: 'Voi ___ parlare più lentamente? (potere)', a: ['potete'], why: '*voi potete*' },
            { q: 'Loro non ___ nuotare. (sapere)', a: ['sanno'], why: '*loro sanno*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right verb.', items: [
            { q: 'Non ___ nuotare. (I do not know how)', o: ['so', 'posso', 'devo'], why: 'To know how to do something: *sapere*.' },
            { q: '___ bere un caffè? (Do you want…?)', o: ['Vuoi', 'Sai', 'Puoi'], why: 'To want: *volere*.' },
            { q: 'Piove: non ___ uscire. (we cannot)', o: ['possiamo', 'sappiamo', 'vogliamo'], why: 'Because of the rain it is not possible: *possiamo*.' },
            { q: 'Domani ___ lavorare. (I must)', o: ['devo', 'posso', 'so'], why: '*devo* means I must.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'So giocare a tennis.', why: '*so* + infinitive.' },
            { a: 'Puoi venire sabato?', why: '*potere* + infinitive.' },
            { a: 'Vogliamo andare al cinema.', why: '*volere* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Noi [potiamo] venire.', a: ['possiamo'], why: '*noi possiamo*' },
            { s: 'Lui [voli] andare al cinema.', a: ['vuole'], why: '*lui vuole*' },
            { s: 'Voi [dovate] lavorare.', a: ['dovete'], why: '*voi dovete*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Ci vediamo sabato?',
      about: 'Arrange to meet, and talk about the weather and the seasons.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To invite someone, say **Sei libero** (a man) or **Sei libera** (a woman) **sabato?**, **Ti va di venire?** or **Andiamo al cinema?** To accept, say **Volentieri!** or **Va bene, benissimo!** To decline politely, say **Mi dispiace, non posso** and give a reason. To agree on a place and a time, ask **Dove ci vediamo?** and **A che ora?**' },
          { t: 'dialogue', title: 'Sabato sera', lines: [
            { who: 'Giulia', s: 'Ciao Marco! Sei libero sabato sera?' },
            { who: 'Marco', s: 'Sì, perché?' },
            { who: 'Giulia', s: 'Andiamo al cinema? C’è un bel film alle otto.' },
            { who: 'Marco', s: 'Volentieri! Dove ci vediamo?' },
            { who: 'Giulia', s: 'Davanti al cinema, alle sette e mezza.' },
            { who: 'Marco', s: 'Va bene. A sabato!' },
          ] },
          { t: 'tip', art: 'owl', md: '**Andiamo** (we go) is often used to suggest something: **Andiamo al cinema?** means *Shall we go to the cinema?* **Ci vediamo** means *see you* and also *we are meeting*. **Volentieri** (gladly) and **con piacere** (with pleasure) are warm ways to say yes.' },
        ],
        [
          { t: 'text', md: 'To talk about the weather, Italian uses **fa** + an adjective (*Fa caldo, fa freddo, fa bel tempo*), **c’è** + a noun (*C’è il sole, c’è vento*) and verbs like **piove** and **nevica**. The seasons are **la primavera**, **l’estate** (f.), **l’autunno** and **l’inverno**. To say *in* a season, use **in**: *in estate, in inverno.*' },
          { t: 'table', caption: 'The weather', explain: ['head', 'col1'], head: ['Italian', 'English'], rows: [
            ['Fa bel tempo.', 'The weather is nice.'],
            ['Fa caldo.', 'It is hot.'],
            ['Fa freddo.', 'It is cold.'],
            ['Piove.', 'It is raining.'],
            ['Nevica.', 'It is snowing.'],
            ['C’è vento.', 'It is windy.'],
            ['C’è il sole.', 'It is sunny.'],
          ] },
          { t: 'examples', items: [
            { s: '**Sei libero** domani?', n: 'Asking if someone is free.' },
            { s: '**Ci vediamo** davanti alla stazione.', n: 'A place to meet.' },
            { s: '**A che ora**?', n: 'Asking for the time.' },
            { s: '**In estate** fa caldo.', n: '*in* + a season.' },
            { s: '**In inverno** a volte nevica.', n: '*a volte* means sometimes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Sei libero sabato?', 'Sì, volentieri!'],
            ['Dove ci vediamo?', 'Davanti al cinema.'],
            ['A che ora?', 'Alle sette e mezza.'],
            ['Ti va di venire?', 'Mi dispiace, non posso.'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Which season is it?', groups: ['l’estate', 'l’inverno'], items: [
            { s: 'Fa caldo.', g: 0, why: 'Hot weather is typical of summer.' },
            { s: 'Nevica.', g: 1, why: 'Snow comes in winter.' },
            { s: 'C’è il sole.', g: 0, why: 'Sun is typical of summer.' },
            { s: 'Fa molto freddo.', g: 1, why: 'Cold is typical of winter.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ci vediamo davanti alla stazione.', why: '*ci vediamo* + place.' },
            { a: 'Sei libero sabato sera?', why: '*sei libero* + day.' },
            { a: 'Oggi fa bel tempo.', why: '*fa* + adjective.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You invite a friend to the cinema:', o: ['Andiamo al cinema?', 'Arrivederci!', 'Piove.'], why: '*Andiamo … ?* is an invitation.' },
            { q: 'You cannot come:', o: ['Mi dispiace, non posso.', 'Volentieri!', 'A sabato!'], why: 'A polite no.' },
            { q: 'It is snowing:', o: ['Nevica.', 'Piove.', 'Fa caldo.'], why: '*nevicare* is to snow.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Le attività del fine settimana',
      about: 'Read notices from a sports club and a language café.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Il circolo sportivo', md: '**Circolo sportivo del quartiere**\nQuest’estate vieni a fare sport con noi!\nIl martedì e il giovedì: nuoto alle 18.\nIl sabato mattina: bicicletta in gruppo, partenza alle 9 davanti al circolo.\nLa domenica: tennis, dalle 10 alle 12.\n\nSi può provare un corso gratuito. Per il nuoto serve un costume.' },
          { t: 'reading', title: 'Il caffè delle lingue', md: '**Caffè delle lingue**\nVuoi parlare italiano? Vieni il mercoledì sera, alle 19, al bar della stazione. Puoi parlare con persone di molti paesi. Si gioca anche a carte. Non serve prenotare!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il nuoto è il martedì e il giovedì.', a: 't', why: '*Il martedì e il giovedì: nuoto alle 18.*' },
            { q: 'Il tennis è il sabato.', a: 'f', why: 'Tennis is on Sunday, from 10 to 12.' },
            { q: 'Il primo corso è gratuito.', a: 't', why: '*Si può provare un corso gratuito.*' },
            { q: 'Il circolo è aperto il lunedì.', a: 'ng', why: 'The notice does not say whether the club is open on Monday.' },
            { q: 'Il caffè delle lingue è il mercoledì sera.', a: 't', why: '*Vieni il mercoledì sera, alle 19.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Dov’è il caffè delle lingue?', o: ['al bar della stazione', 'davanti al circolo', 'in piscina'], why: '*al bar della stazione*' },
            { q: 'A che ora parte la bicicletta in gruppo?', o: ['alle 9', 'alle 10', 'alle 18'], why: '*partenza alle 9*' },
            { q: 'Che cosa serve per il nuoto?', o: ['un costume', 'una bicicletta', 'una racchetta'], why: '*Per il nuoto serve un costume.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the notices.', items: [
            { q: 'Al caffè delle lingue, si gioca a ___.', a: ['carte'], why: '*Si gioca anche a carte.*' },
            { q: 'La domenica si gioca a ___ dalle dieci alle dodici.', a: ['tennis'], why: '*La domenica: tennis.*' },
            { q: 'Non serve ___!', a: ['prenotare'], why: '*Non serve prenotare!*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mi ___ le mele.', o: ['piacciono', 'piace', 'piaci'], why: 'Plural: *mi piacciono*.' },
      { q: 'Lei suona ___ pianoforte.', o: ['il', 'a', 'di'], why: '*suonare il pianoforte*' },
      { q: 'Tu ___ venire sabato?', o: ['puoi', 'sai', 'devi'], why: '*Puoi venire?* means can you come.' },
      { q: 'Noi ___ andare al cinema.', o: ['vogliamo', 'vuole', 'vuoi'], why: '*noi vogliamo*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Lei non ___ suonare la chitarra. (sapere)', a: ['sa'], why: '*lei sa*' },
      { q: 'In ___ fa caldo.', a: ['estate'], why: '*in estate*' },
      { q: 'Noi giochiamo ___ calcio la domenica.', a: ['a'], why: '*giocare a calcio*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
      ['Sei libero sabato?', 'Sì, volentieri!'],
      ['Dove ci vediamo?', 'Davanti al cinema.'],
      ['Che tempo fa?', 'Piove.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Non posso venire.', why: '*non* before the verb.' },
      { a: 'Andiamo al cinema sabato sera?', why: 'Invitation with *andiamo*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Lui [potere] venire domani.', a: ['può'], why: '*lui può*' },
      { s: 'Io [gioco] la chitarra.', a: ['suono'], why: 'Instruments: *suonare*.' },
    ] },
  ],
};
