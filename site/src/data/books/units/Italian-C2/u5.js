// Italian C2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Spoken Italian and regional voices',
  goal: 'Understand spoken Italian in its informal and regional forms. Learn discourse markers, truncations and elisions, and the main regional voices you will hear.',
  art: 'pizza',
  tags: { skills: ['listening', 'speaking', 'vocabulary'], topics: ['discourse markers', 'informal speech', 'truncation', 'regional Italian', 'dialect words'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Allora, insomma, cioè, ecco',
      about: 'Understand the small words that organise speech.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'In speech, Italians use small words that do not add facts but **organise the talk**. They are called **discourse markers** (*segnali discorsivi*). **Allora** starts or restarts: *Allora, dicevo…* **Insomma** sums up or shows impatience: *Insomma, com’è andata?* **Cioè** corrects or explains: *Domani, cioè dopodomani, parto.* **Ecco** points to something or finishes a search: *Ecco, ci siamo.* **Praticamente** and **tipo** soften or approximate: *È tipo un’ora di strada.* **No?** at the end asks for agreement: *Si sta bene qui, no?*' },
          { t: 'table', caption: 'Discourse markers', explain: ['head', 'col0'], head: ['Marker', 'What it does', 'Example'], rows: [
            ['allora', 'starts or restarts the talk', 'Allora, dicevo che il treno era in ritardo.'],
            ['insomma', 'sums up, or shows impatience', 'Insomma, vuoi venire o no?'],
            ['cioè', 'corrects or explains', 'Parto domani, cioè dopodomani.'],
            ['ecco', 'points, or ends a search', 'Ecco le chiavi!'],
            ['praticamente / tipo', 'approximates, softens', 'Ci vuole tipo un’ora.'],
            ['no?', 'asks for agreement', 'Si sta bene qui, no?'],
          ] },
        ],
        [
          { t: 'text', md: 'The same marker can mean different things with a different **intonation**. *Insomma* with a falling voice is a summary; with a long, rising voice it means *so-so*: *Com’è il film? — Insomma…* (not great). *Allora* can mean *then* (*Allora vai tu*), *so* (*Allora, partiamo?*) or *well then* (*Allora ci vediamo*). Fillers are not mistakes; they give the speaker time to think. Do not use too many of them in writing.' },
          { t: 'tip', art: 'pizza', md: 'In writing, replace the filler with a clear connector: *insomma → in conclusione*, *cioè → ovvero* or *vale a dire*, *praticamente → in sostanza*, *tipo → circa* or *come*. Keep the spoken markers for dialogue.' },
          { t: 'ex', kind: 'choice', h: 'Choose the marker that fits.', items: [
            { q: 'Com’è il ristorante? — ___… Il cibo è buono, ma il servizio è lento.', o: ['Insomma', 'Ecco', 'Allora'], why: '*Insomma*, long and rising, means so-so.' },
            { q: 'Ci vediamo sabato, ___ dopodomani.', o: ['cioè', 'ecco', 'insomma'], why: '*Cioè* corrects what you just said.' },
            { q: '___, dicevo che domani non posso venire.', o: ['Allora', 'Ecco', 'No'], why: '*Allora* restarts the talk.' },
            { q: 'Cercavo le chiavi dappertutto… ___ qui!', o: ['ecco', 'cioè', 'insomma'], why: '*Ecco* ends the search.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'In speech or in formal writing?', groups: ['speech', 'writing'], explain: ['groups'], items: [
            { s: 'tipo', g: 0, why: 'A spoken filler or approximation.' },
            { s: 'in conclusione', g: 1, why: 'A written connector.' },
            { s: 'insomma', g: 0, why: 'A spoken marker.' },
            { s: 'vale a dire', g: 1, why: 'A written explainer.' },
            { s: 'praticamente', g: 0, why: 'A spoken softener.' },
            { s: 'in sostanza', g: 1, why: 'A written summary.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite for formal writing, using the word given.', items: [
            { q: 'Insomma, il progetto non ha funzionato.', cue: 'In conclusione', a: ['In conclusione, il progetto non ha funzionato.'], why: 'Written connector for *insomma*.' },
            { q: 'Ci vuole tipo un’ora.', cue: 'circa', a: ['Ci vuole circa un’ora.'], why: '*Circa* replaces *tipo* in writing.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Po’, ’sto, ’na, mo’',
      about: 'Read truncations and elisions in informal speech.',
      art: 'churro',
      spreads: [
        [
          { t: 'text', md: 'In relaxed speech, Italians **shorten** words. The shortened forms are written with an **apostrophe**. **Po’** is *un poco*: *Aspetta un po’.* **’Sto**, **’sta** are *questo*, *questa*: *’Sto caffè è freddo.* **’Na** is *una*: *’Na bella giornata.* **Mo’** is *adesso* in the centre and south: *Mo’ vengo.* People also drop the end of a word: *dai, vabbè, boh*. And **Lei** is the formal *you*; **tu** is the informal one. In speech, many people switch to *tu* quickly.' },
          { t: 'table', caption: 'Shortened forms', explain: ['head', 'col0'], head: ['Spoken', 'Full form', 'Example'], rows: [
            ['po’', 'un poco', 'Aspetta un po’.'],
            ['’sto, ’sta', 'questo, questa', '’Sta pizza è ottima.'],
            ['’na', 'una', 'Che bella giornata, ’na meraviglia.'],
            ['mo’', 'adesso (centre and south)', 'Mo’ arrivo.'],
            ['vabbè', 'va bene', 'Vabbè, ne parliamo domani.'],
            ['boh', 'I do not know', 'Che ora è? — Boh.'],
          ] },
        ],
        [
          { t: 'text', md: 'These forms are **informal**. They are fine among friends, in a film, or in a dialogue, but they would look out of place in a report or a formal email. There is also **taboo language**: swear words are common in Italian speech. You do not need to use them, but you should **understand** that they are often not meant as insults: they can express surprise, joy or frustration. Always judge by the tone and the situation.' },
          { t: 'tip', art: 'churro', md: 'Understanding is more important than copying. If you are not sure, use the neutral form: *un po’ → un poco* in writing, *’sto caffè → questo caffè*. When someone offers you the *tu*, you can answer with *tu*; when you are not sure, keep *Lei* until the other person changes.' },
          { t: 'ex', kind: 'choice', h: 'Choose the full form.', items: [
            { q: '“Aspetta un po’.” means “Aspetta un ___.”', o: ['poco', 'polo', 'posto'], why: '*Po’* = *poco*.' },
            { q: '“’Sta pizza è ottima.” means “___ pizza è ottima.”', o: ['Questa', 'Quella', 'Una'], why: '*’Sta* = *questa*.' },
            { q: '“Mo’ arrivo.” means “___ arrivo.”', o: ['Adesso', 'Domani', 'Mai'], why: '*Mo’* = *adesso* in the centre and south.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite in neutral Italian, using the word given.', items: [
            { q: '’Sto caffè è freddo.', cue: 'Questo', a: ['Questo caffè è freddo.'], why: '*’Sto* = *questo*.' },
            { q: 'Aspetta un po’, arrivo.', cue: 'poco', a: ['Aspetta un poco, arrivo.'], why: '*Po’* = *un poco*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with the spoken form.', items: [
            { q: '’___ bella giornata, no? (una)', a: ['Na'], why: '*’Na* = *una*.' },
            { q: 'Che ora è? — ___, non ho l’orologio. (I do not know)', a: ['Boh'], why: '*Boh* = I do not know.' },
            { q: '___ arrivo, aspettami! (adesso, in the south)', a: ['Mo’', 'Mo'], why: '*Mo’* = *adesso*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Voci del Nord, del Centro e del Sud',
      about: 'Recognise the main regional voices and a few local words.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'There is a standard Italian, but nobody speaks it in the same way everywhere. Each region has its own **accent** and its own words. In the **north** (Milan, Turin), the speech is quick and the vowels are short; people say *magari* for *perhaps* and use *ciao* for both hello and goodbye. In **Tuscany**, the *c* between vowels is often soft, like a *h* (*la hasa* for *la casa*); this is the famous *gorgia toscana*. In **Rome**, the speech is open and drawn out, with *ao!* to call attention and *pischello* for a *young lad*. In **Naples**, the vowels at the end of words become weak and a friend can be called *guagliò* (*lad*). In **Sicily**, a young man can be *picciotto*, and the rhythm is slow and melodic.' },
          { t: 'table', caption: 'Regional voices', explain: ['head', 'col0'], head: ['Region', 'What you may hear', 'Example'], rows: [
            ['north (Milan)', 'quick speech, short vowels', 'Dai, andiamo che è tardi.'],
            ['Tuscany', 'the soft c (gorgia toscana)', 'La hasa è vicina.'],
            ['Rome', 'open, drawn-out speech', 'Ao, vieni qua!'],
            ['Naples', 'weak final vowels; guagliò', 'Guagliò, che fai?'],
            ['Sicily', 'slow, melodic rhythm; picciotto', 'Il picciotto è arrivato.'],
          ] },
        ],
        [
          { t: 'text', md: 'Regional words often show up in **films, songs and television**. You may not need them in an exam, but you will hear them in life. *Pischello* (Rome), *guagliò* (Naples) and *picciotto* (Sicily) all mean a young man or lad, and they are friendly when used between friends. In Italian, we call this **italiano regionale**: standard grammar with local colour. Dialects are separate languages in their own right (Neapolitan, Sicilian, Venetian), and many Italians switch between dialect and Italian depending on whom they talk to.' },
          { t: 'tip', art: 'cat', md: 'When you hear a word you do not know, listen for the **context**. If the speaker uses it as a form of address (*Ao!*, *Guagliò!*), it is probably a friendly call. If you are not sure, ask: *Che vuol dire?* A native speaker is usually happy to explain.' },
          { t: 'ex', kind: 'match', h: 'Match the word to its region.', pairs: [
            ['pischello', 'Rome'],
            ['guagliò', 'Naples'],
            ['picciotto', 'Sicily'],
            ['la hasa (gorgia)', 'Tuscany'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Il “guagliò” è una parola che si sente a ___.', o: ['Napoli', 'Torino', 'Venezia'], why: 'Naples.' },
            { q: 'La “gorgia toscana” è la pronuncia di ___.', o: ['una c dolce tra due vocali', 'una s doppia', 'una r lunga'], why: 'The soft c between vowels in Tuscany.' },
            { q: 'Un “pischello” è ___.', o: ['un giovane', 'un cane', 'un negozio'], why: 'A young lad (Rome).' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which region?', groups: ['Rome', 'Naples'], explain: ['groups'], items: [
            { s: 'pischello', g: 0, why: 'Roman.' },
            { s: 'guagliò', g: 1, why: 'Neapolitan.' },
            { s: 'ao', g: 0, why: 'A Roman call.' },
            { s: 'mo’', g: 1, why: 'Used in the centre and south, very common in Naples.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Tre amici a tavola',
      about: 'Read a conversation between speakers from Milan, Rome and Naples.',
      art: 'pizza',
      spreads: [
        [
          { t: 'reading', title: 'Tre amici a tavola', md: 'Lucia (di Milano): Allora, dicevo che il treno era in ritardo. Insomma, due ore!\n\nMarco (di Roma): Ao, due ore? Ma che dici! Vabbè, mo’ sei qui, no?\n\nGennaro (di Napoli): Guagliò, calma. Mo’ mangiamo ’na bella pizza e ci dimentichiamo di tutto.\n\nLucia: Cioè, io avevo anche fame. Praticamente non ho mangiato da stamattina.\n\nMarco: Ecco, il cameriere! Aspetta un po’, ordino io. Una margherita e due marinare, per favore.\n\nGennaro: E ’sta pizza com’è? Boh, speriamo bene.\n\nLucia: Com’è la pizza di Roma? — Insomma… quella di Napoli è un’altra cosa.\n\nMarco: Eh no, adesso esageri! Dai, assaggiamo, poi giudichiamo.\n\nGennaro: Allora, brindiamo. Alla pizza e all’amicizia!' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Il treno di Lucia era in ritardo.', a: 't', why: '«Il treno era in ritardo.»' },
            { q: 'Marco è di Napoli.', a: 'f', why: 'Marco is from Rome, Gennaro from Naples.' },
            { q: 'Lucia non ha mangiato da stamattina.', a: 't', why: '«Non ho mangiato da stamattina.»' },
            { q: 'Il cameriere porta una pizza ai quattro formaggi.', a: 'ng', why: 'The text names only the order, not what arrives.' },
            { q: 'Gennaro dice che la pizza di Roma è migliore.', a: 'f', why: 'Lucia says Naples is “un’altra cosa”; Gennaro never says Rome is better.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'What does “Insomma…” mean when Lucia says it about the pizza of Rome?', o: ['So-so.', 'In conclusion.', 'Excellent.'], why: 'A long, rising *Insomma* means not great.' },
            { q: 'Which word is used by Gennaro to call Lucia and Marco?', o: ['Guagliò', 'Pischello', 'Picciotto'], why: '*Guagliò* is Neapolitan.' },
            { q: 'What does “Mo’ mangiamo” mean?', o: ['Now let us eat.', 'We have eaten.', 'We do not eat.'], why: '*Mo’* = *adesso*.' },
            { q: 'What does “Cioè” do in Lucia’s sentence?', o: ['It explains her point.', 'It asks a question.', 'It ends the meal.'], why: '*Cioè* explains or corrects.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the shortened forms.', items: [
            { s: 'Aspetta un [po’], ordino io.', why: '*Po’* = *poco*.' },
            { s: 'E [’sta] pizza com’è?', why: '*’Sta* = *questa*.' },
            { s: 'Mangiamo [’na] bella pizza.', why: '*’Na* = *una*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: '___, dicevo che il treno era in ritardo.', a: ['Allora'], why: '*Allora* restarts the talk.' },
            { q: 'Ao, due ore? ___, mo’ sei qui, no?', a: ['Vabbè', 'Vabbe'], why: '*Vabbè* = *va bene*.' },
            { q: 'Alla pizza e ___ amicizia!', a: ['all’'], why: '*All’amicizia*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mo’ mangiamo una bella pizza e ci dimentichiamo di tutto.', why: 'A relaxed invitation.' },
            { a: 'Dai, assaggiamo, poi giudichiamo.', why: 'A friendly suggestion.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Com’è il film? — ___… Non è il migliore.', o: ['Insomma', 'Ecco', 'Allora'], why: 'A long *Insomma* means so-so.' },
      { q: 'Parto domani, ___ dopodomani.', o: ['cioè', 'ecco', 'insomma'], why: '*Cioè* corrects.' },
      { q: '“’Sto caffè” means “___ caffè”.', o: ['questo', 'quello', 'un'], why: '*’Sto* = *questo*.' },
      { q: 'A friendly word for a young man in Naples is ___.', o: ['guagliò', 'pischello', 'picciotto'], why: 'Neapolitan.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Speech or writing?', groups: ['speech', 'writing'], explain: ['groups'], items: [
      { s: 'tipo', g: 0, why: 'Spoken.' },
      { s: 'in conclusione', g: 1, why: 'Written.' },
      { s: 'boh', g: 0, why: 'Spoken.' },
      { s: 'vale a dire', g: 1, why: 'Written.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Aspetta un ___, arrivo subito. (a little, shortened)', a: ['po’', 'po'], why: '*Po’* = *poco*.' },
      { q: '___ arrivo! (now, in the south)', a: ['Mo’', 'Mo'], why: '*Mo’* = *adesso*.' },
      { q: 'La pronuncia “la hasa” è la “___ toscana”.', a: ['gorgia'], why: 'The *gorgia toscana*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in neutral Italian, using the word given.', items: [
      { q: 'Insomma, il progetto non ha funzionato.', cue: 'In conclusione', a: ['In conclusione, il progetto non ha funzionato.'], why: 'A written connector.' },
      { q: '’Sta pizza è ottima.', cue: 'Questa', a: ['Questa pizza è ottima.'], why: '*’Sta* = *questa*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: 'Nel rapporto ufficiale si legge: “[Insomma], il bilancio è positivo.”', a: ['In conclusione', 'In sintesi'], why: '*Insomma* is spoken; use a written connector in a report.' },
      { s: 'Domani vengo, [ecco] dopodomani. (correcting yourself)', a: ['cioè'], why: '*Cioè* corrects what you just said.' },
    ] },
  ],
};
