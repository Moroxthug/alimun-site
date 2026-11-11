// Italian C1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Register, regions and idioms',
  goal: 'Recognise and choose the register and variety of Italian you need, and use idioms. Learn formal, neutral and informal Italian, regional words and discourse particles, and common idioms and proverbs.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'reading', 'speaking', 'writing'], topics: ['register', 'regional Italian', 'dialect', 'discourse particles', 'idioms', 'proverbs'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Formale, neutro, informale',
      about: 'Choose the right level of formality and the right form of address.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Italian has three levels that you must choose between. The **formal** level is for letters, offices and people you do not know: it uses **Lei** and the conditional of politeness. The **neutral** level works almost everywhere. The **informal** level is for friends and family: it uses **tu**. In the south, some older people use **voi** for one person as a formal address. To offer **tu**, say **Ci diamo del tu?** The same message changes its form: *Mi scusi, potrebbe aiutarmi?* (formal), *Scusi, può aiutarmi?* (neutral), *Scusa, mi aiuti?* (informal).' },
          { t: 'table', caption: 'Three levels', explain: ['head'], head: ['Formal', 'Neutral', 'Informal'], rows: [
            ['Mi scusi, potrebbe aiutarmi?', 'Scusi, può aiutarmi?', 'Scusa, mi aiuti?'],
            ['Desidera altro?', 'Vuole altro?', 'Vuoi altro?'],
            ['Distinti saluti', 'Cordiali saluti', 'Un abbraccio'],
            ['l’autovettura', 'l’automobile', 'la macchina'],
            ['il denaro', 'i soldi', 'la grana'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use informal words in a formal letter, and do not use very formal words with friends: it will sound **stiff** or even funny. **Salve** is a neutral greeting for people you do not know well, and **Ciao** is for friends. The written address **Lei** (with a capital letter) is used in letters to show respect. In **Swiss Italian**, the rules are the same.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Mi scusi, potrebbe aiutarmi?**', n: 'Formal.' },
            { s: '**Scusi, può aiutarmi?**', n: 'Neutral.' },
            { s: '**Scusa, mi aiuti?**', n: 'Informal.' },
            { s: '**Distinti saluti**', n: 'Closing a formal letter.' },
            { s: '**Ci diamo del tu?**', n: 'Offering *tu*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which level is it? Sort the sentences.', groups: ['formal', 'neutral', 'informal'], explain: ['groups'], items: [
            { s: 'Mi scusi, potrebbe aiutarmi?', g: 0, why: 'Lei and the conditional.' },
            { s: 'Scusi, può aiutarmi?', g: 1, why: 'Lei and the present.' },
            { s: 'Scusa, mi aiuti?', g: 2, why: 'Tu.' },
            { s: 'Distinti saluti', g: 0, why: 'A formal closing.' },
            { s: 'Cordiali saluti', g: 1, why: 'A neutral closing.' },
            { s: 'Un abbraccio', g: 2, why: 'A closing for friends.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the formal sentence with the informal one.', pairs: [
            ['Mi scusi, potrebbe aiutarmi?', 'Scusa, mi aiuti?'],
            ['Desidera altro?', 'Vuoi altro?'],
            ['Distinti saluti', 'Un abbraccio'],
            ['Ci diamo del tu?', 'Possiamo darci del tu?'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'You write to an office. You say:', o: ['Mi scusi, potrebbe aiutarmi?', 'Scusa, mi aiuti?', 'Aiutami!'], why: 'To an office: formal.' },
            { q: 'You speak to a close friend. You say:', o: ['Scusa, mi aiuti?', 'Mi scusi, potrebbe aiutarmi?', 'Desidera altro?'], why: 'To a friend: informal.' },
            { q: 'You close a formal letter:', o: ['Distinti saluti', 'Un abbraccio', 'Ciao ciao'], why: 'A formal closing.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in a formal register.', items: [
            { q: 'Scusa, mi aiuti?', cue: 'Mi scusi', a: ['Mi scusi, potrebbe aiutarmi?'], why: 'Lei and the conditional.' },
            { q: 'Vuoi altro?', cue: 'Desidera', a: ['Desidera altro?'], why: 'The formal question.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mi scusi, potrebbe aiutarmi con questo modulo?', why: 'Lei and the conditional.' },
            { a: 'Scusa, mi aiuti con questo modulo?', why: 'Tu and the present.' },
            { a: 'Ci diamo del tu, se vuoi.', why: 'An offer of *tu*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Italiano regionale e particelle',
      about: 'Understand regional words and the small words of speech.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Standard Italian is spoken everywhere, but each region has its own **words**, **accent** and **dialect**. The same fruit has three names: **anguria** (north), **cocomero** (centre) and **melone d’acqua** (south). All are understood. Dialects such as Venetian, Neapolitan and Sicilian are **languages with their own history**, and many Italians speak them at home. In **Ticino**, the Italian-speaking part of Switzerland, people say **il natel** for the mobile phone. In speech, small words add feeling: **mica** stresses a negation, **già** means *of course*, **magari** means *maybe* or *I wish*, **boh** means *I have no idea*, **dai** means *come on*.' },
          { t: 'table', caption: 'Regional words and particles', explain: ['head', 'col1'], head: ['Word', 'Meaning', 'Example'], rows: [
            ['anguria / cocomero / melone d’acqua', 'watermelon, in the north, centre and south', 'Prendo un’anguria.'],
            ['il natel', 'the mobile phone, in Ticino', 'Ho dimenticato il natel.'],
            ['mica', 'a stress on the negation', 'Non è mica facile.'],
            ['già', 'indeed, of course', '– Hai capito? – Già.'],
            ['magari', 'maybe, I wish', '– Vieni? – Magari!'],
            ['boh', 'I have no idea', '– Dov’è? – Boh.'],
            ['dai', 'come on', 'Dai, andiamo!'],
          ] },
          { t: 'tip', art: 'owl', md: 'Learn **standard Italian** first and add the local words you hear when you live in a region. **Mica** is used mostly in the north and centre, but it is understood everywhere. **Boh** is informal and should not be used in a formal conversation. In writing, **magari** and **già** are fine; **boh** and **dai** are for messages to friends.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Prendo un’**anguria**.', n: 'In the north.' },
            { s: 'Non è **mica** facile.', n: 'A stress on the negation.' },
            { s: '– Vieni? – **Magari!**', n: 'I wish.' },
            { s: '– Dov’è? – **Boh.**', n: 'I have no idea.' },
            { s: '**Dai**, andiamo!', n: 'Come on.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['mica', 'a stress on the negation'],
            ['magari', 'maybe, I wish'],
            ['boh', 'I have no idea'],
            ['dai', 'come on'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Non è ___ facile.', a: ['mica'], why: '*Mica* stresses the negation.' },
            { q: '– Vieni al mare? – ___!', a: ['Magari'], why: '*Magari* = I wish.' },
            { q: '– Dov’è la chiave? – ___.', a: ['Boh'], why: '*Boh* = I have no idea.' },
            { q: '___, andiamo! (come on)', a: ['Dai'], why: '*Dai* = come on.' },
            { q: 'In Ticino, il cellulare si chiama il ___.', a: ['natel'], why: '*Il natel* in Ticino.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'In the north, people say …', o: ['anguria', 'cocomero', 'mellone'], why: '*Anguria* is the northern word.' },
            { q: 'You do not know the answer. You say:', o: ['Boh.', 'Già.', 'Dai.'], why: '*Boh* = I have no idea.' },
            { q: 'You say yes to a wish with:', o: ['Magari!', 'Mica!', 'Boh!'], why: '*Magari* = I wish.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which kind of word is it? Sort the words.', groups: ['regional word', 'discourse particle'], explain: ['groups'], items: [
            { s: 'anguria', g: 0, why: 'A word for watermelon.' },
            { s: 'cocomero', g: 0, why: 'A word for watermelon.' },
            { s: 'natel', g: 0, why: 'A word used in Ticino.' },
            { s: 'mica', g: 1, why: 'A particle of speech.' },
            { s: 'boh', g: 1, why: 'A particle of speech.' },
            { s: 'magari', g: 1, why: 'A particle of speech.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Add the word in brackets.', items: [
            { q: 'Non è facile.', cue: 'Non è mica', a: ['Non è mica facile.'], why: '*Mica* before the adjective.' },
            { q: 'Andiamo!', cue: 'Dai,', a: ['Dai, andiamo!'], why: '*Dai* at the start.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Non è [micca] facile.', a: ['mica'], why: 'The spelling is *mica*.' },
            { s: '– Dov’è? – [Bo].', a: ['Boh'], why: 'The spelling is *boh*.' },
            { s: '– Vieni? – [Magar]!', a: ['Magari'], why: 'The spelling is *magari*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Modi di dire e proverbi',
      about: 'Understand and use common idioms and proverbs.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'An **idiom** (modo di dire) has a meaning that you cannot guess from its words. **In bocca al lupo!** means *good luck*, and the answer is **Crepi!** **Costare un occhio della testa** means *to cost a fortune*. **Prendere due piccioni con una fava** means *to kill two birds with one stone*. **Essere al verde** means *to be broke*. **Non vedere l’ora** means *to look forward to*. **Piove a catinelle** means *it is pouring*. A **proverb** states a general truth: *Chi dorme non piglia pesci. Meglio tardi che mai.* Learn each idiom as a **whole phrase**.' },
          { t: 'table', caption: 'Idioms and proverbs', explain: ['head', 'col1'], head: ['Phrase', 'Meaning', 'Example'], rows: [
            ['In bocca al lupo!', 'good luck (answer: Crepi!)', 'In bocca al lupo per l’esame!'],
            ['costare un occhio della testa', 'to cost a fortune', 'Questa borsa costa un occhio della testa.'],
            ['prendere due piccioni con una fava', 'to kill two birds with one stone', 'Con questo viaggio prendiamo due piccioni con una fava.'],
            ['essere al verde', 'to be broke', 'Sono al verde fino a fine mese.'],
            ['non vedere l’ora', 'to look forward to', 'Non vedo l’ora di partire.'],
            ['piove a catinelle', 'it is pouring', 'Piove a catinelle da stamattina.'],
            ['Chi dorme non piglia pesci.', 'the early bird gets the worm', 'Alzati presto: chi dorme non piglia pesci.'],
            ['Meglio tardi che mai.', 'better late than never', 'Sei arrivato: meglio tardi che mai.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not translate idioms word for word. **Prendere due piccioni con una fava** has **pigeons and a bean** in Italian, and **birds and a stone** in English. Use idioms **sparingly**. Some are **informal**, such as **essere al verde**. Others suit every situation, such as **non vedere l’ora**. Idioms differ from region to region and in Swiss Italian; ask a local if you are not sure.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**In bocca al lupo** per l’esame! – **Crepi!**', n: 'Good luck.' },
            { s: 'Questa borsa **costa un occhio della testa**.', n: 'It costs a fortune.' },
            { s: 'Sono **al verde** fino a fine mese.', n: 'I am broke.' },
            { s: '**Non vedo l’ora** di partire.', n: 'I look forward to it.' },
            { s: '**Piove a catinelle** da stamattina.', n: 'It is pouring.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the idiom with its meaning.', pairs: [
            ['costare un occhio della testa', 'to cost a fortune'],
            ['essere al verde', 'to be broke'],
            ['non vedere l’ora', 'to look forward to'],
            ['piovere a catinelle', 'to pour'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the idiom or the proverb.', items: [
            { q: 'Questa borsa costa un ___ della testa.', a: ['occhio'], why: '*Costare un occhio della testa*.' },
            { q: 'Chi dorme non piglia ___.', a: ['pesci'], why: 'The proverb.' },
            { q: 'Meglio ___ che mai.', a: ['tardi'], why: 'The proverb.' },
            { q: 'Piove a ___ da stamattina.', a: ['catinelle'], why: '*Piovere a catinelle*.' },
            { q: 'Sono al ___ fino a fine mese.', a: ['verde'], why: '*Essere al verde*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
            { q: 'Non vedo l’ora di partire.', o: ['I look forward to leaving.', 'I do not see the time.', 'I am late.'], why: '*Non vedere l’ora* = to look forward.' },
            { q: 'In bocca al lupo!', o: ['Good luck!', 'Be careful!', 'Goodbye!'], why: 'A wish for luck.' },
            { q: 'Prendere due piccioni con una fava.', o: ['To kill two birds with one stone.', 'To buy beans.', 'To feed birds.'], why: 'A single action, two results.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Piove a [catene].', a: ['catinelle'], why: '*Piovere a catinelle*.' },
            { s: 'Prendere due piccioni con una [mela].', a: ['fava'], why: 'The idiom has a bean: *una fava*.' },
            { s: 'Sono al [rosso] fino a fine mese.', a: ['verde'], why: '*Essere al verde*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Questa borsa costa un occhio della testa.', why: '*Costare un occhio della testa*.' },
            { a: 'Non vedo l’ora di partire per il mare.', why: '*Non vedere l’ora di* + infinitive.' },
            { a: 'Chi dorme non piglia pesci.', why: 'The proverb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Tre amici, tre regioni',
      about: 'Read a conversation between friends from three regions.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Al mercato di Bologna', md: 'Giulia, di Roma, Marco, di Milano, e Salvo, di Palermo, si trovano al mercato di Bologna.\n\n«Prendo un’anguria», dice Marco.\n\n«Un cocomero, vorrai dire», ride Giulia.\n\n«Mica è facile capirsi!» commenta Salvo. «Boh, io dico melone d’acqua.»\n\nAlla fine comprano un cocomero grande, e Marco dice: «Ora ci tocca portarlo a casa: costa un occhio della testa!»\n\n«In bocca al lupo!» dice Giulia.\n\n«Crepi!» risponde Salvo. Poi Giulia osserva: «Meglio tardi che mai: abbiamo imparato tre parole nuove in un giorno.»' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marco è di Milano.', a: 't', why: '*Marco, di Milano.*' },
            { q: 'Giulia dice «cocomero».', a: 't', why: '*Un cocomero, vorrai dire.*' },
            { q: 'Salvo usa la parola «melone d’acqua».', a: 't', why: '*Io dico melone d’acqua.*' },
            { q: 'Comprano un’anguria piccola.', a: 'f', why: '*Comprano un cocomero grande.*' },
            { q: 'Il cocomero costa poco.', a: 'f', why: '*Costa un occhio della testa.*' },
            { q: 'Salvo vive a Bologna.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa significa «Mica è facile»?', o: ['Non è per niente facile.', 'È molto facile.', 'È facile a volte.'], why: '*Mica* stresses the negation.' },
            { q: 'Che cosa risponde Salvo a «In bocca al lupo»?', o: ['Crepi!', 'Grazie mille.', 'Arrivederci.'], why: 'The usual answer is *Crepi!*' },
            { q: 'Che cosa vuol dire «costa un occhio della testa»?', o: ['Costa moltissimo.', 'Costa poco.', 'Costa quanto un occhio.'], why: 'It costs a fortune.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the discourse particles and the idioms.', items: [
            { s: '«[Mica] è facile capirsi!» commenta Salvo. «[Boh], io dico melone d’acqua.»', why: '*Mica* stresses the negation; *boh* means I have no idea.' },
            { s: 'Marco dice: «Ora ci tocca portarlo a casa: [costa un occhio della testa]!»', why: 'An idiom: it costs a fortune.' },
            { s: '«[In bocca al lupo]!» dice Giulia. «[Crepi]!» risponde Salvo.', why: 'The wish for luck and its answer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Il cocomero costa un ___ della testa.', a: ['occhio'], why: 'The idiom.' },
            { q: '– In bocca al lupo! – ___!', a: ['Crepi'], why: 'The usual answer.' },
            { q: '___ è facile capirsi!', a: ['Mica'], why: '*Mica* stresses the negation.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Meglio tardi che mai: abbiamo imparato tre parole nuove.', why: 'A proverb and a comment.' },
            { a: 'Alla fine comprano un cocomero grande.', why: 'Subject, verb, object.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Which sentence is formal?', o: ['Mi scusi, potrebbe aiutarmi?', 'Scusa, mi aiuti?', 'Aiutami!'], why: 'Lei and the conditional.' },
      { q: 'Non è ___ facile. (stress on the negation)', o: ['mica', 'già', 'boh'], why: '*Mica* stresses the negation.' },
      { q: '– Hai capito? – ___. (of course)', o: ['Già', 'Mica', 'Boh'], why: '*Già* = of course.' },
      { q: '– In bocca al lupo! – ___!', o: ['Crepi', 'Grazie', 'Prego'], why: 'The usual answer.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Questa borsa costa un ___ della testa.', a: ['occhio'], why: '*Costare un occhio della testa*.' },
      { q: 'Chi dorme non piglia ___.', a: ['pesci'], why: 'The proverb.' },
      { q: 'Meglio ___ che mai.', a: ['tardi'], why: 'The proverb.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['anguria', 'watermelon, in the north'],
      ['cocomero', 'watermelon, in the centre'],
      ['natel', 'mobile phone, in Ticino'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Scusa, mi aiuti?', cue: 'Mi scusi', a: ['Mi scusi, potrebbe aiutarmi?'], why: 'Lei and the conditional.' },
      { q: 'Non è facile.', cue: 'Non è mica', a: ['Non è mica facile.'], why: '*Mica* before the adjective.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Piove a [catene].', a: ['catinelle'], why: '*Piovere a catinelle*.' },
      { s: 'Prendere due piccioni con una [mela].', a: ['fava'], why: 'The idiom has a bean: *una fava*.' },
    ] },
  ],
};
