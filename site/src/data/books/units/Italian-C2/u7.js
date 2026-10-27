// Italian C2, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Rhetoric and persuasion',
  goal: 'Understand how speeches persuade and use the devices yourself. Learn the three appeals, the main devices of the speech, and how framing and loaded words shape a message.',
  art: 'parrot',
  tags: { skills: ['reading', 'listening', 'speaking'], topics: ['rhetoric', 'persuasion', 'ethos pathos logos', 'rhetorical devices', 'framing', 'loaded language'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Ethos, pathos, logos',
      about: 'See how a speaker builds trust, feeling and argument.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A speaker persuades in three ways. **L’ethos** is trust: the audience believes the speaker is honest and competent (*Lavoro in questo quartiere da vent’anni*). **Il pathos** is feeling: the speaker moves the audience with a story or an image (*Pensate a una madre che aspetta, ogni sera, l’ultimo autobus*). **Il logos** is reasoning: the speaker gives facts, figures and logic (*Il trasporto pubblico costa meno del traffico: i dati lo dimostrano*). A strong speech uses all three. Too much *pathos* sounds like manipulation; too much *logos* sounds cold.' },
          { t: 'table', caption: 'The three appeals', explain: ['head', 'col0'], head: ['Appeal', 'What it does', 'Example'], rows: [
            ['ethos', 'builds trust in the speaker', 'Lavoro in questo quartiere da vent’anni.'],
            ['pathos', 'moves the feelings of the audience', 'Pensate a una madre che aspetta l’ultimo autobus.'],
            ['logos', 'gives facts and logic', 'I dati mostrano un calo del venti per cento.'],
          ] },
        ],
        [
          { t: 'text', md: 'To read a speech critically, ask three questions. **Why should I trust this speaker?** (ethos) **How does this make me feel, and why?** (pathos) **Are the facts and the logic sound?** (logos) A speech that works well on feeling but gives no evidence deserves a second look. In Italian, you can say *fa appello ai sentimenti* (it appeals to feelings), *si appoggia su dati* (it relies on data) and *cerca di conquistare la fiducia del pubblico* (it tries to win the audience’s trust).' },
          { t: 'tip', art: 'parrot', md: 'Do not think of rhetoric as something negative. Good speakers, teachers and writers all use it. The skill is to **notice** it, so that you can enjoy a good speech without being carried away by it.' },
          { t: 'ex', kind: 'sort', h: 'Ethos, pathos or logos?', groups: ['ethos', 'pathos', 'logos'], explain: ['groups'], items: [
            { s: 'Ho gestito questo progetto per quindici anni.', g: 0, why: 'Builds trust.' },
            { s: 'Immaginate i bambini che aspettano al freddo.', g: 1, why: 'Moves feelings.' },
            { s: 'Il costo è sceso del dodici per cento.', g: 2, why: 'Gives a figure.' },
            { s: 'Sono una persona onesta e lo sapete.', g: 0, why: 'Appeals to character.' },
            { s: 'Vedo ancora il suo sorriso, quel giorno.', g: 1, why: 'Appeals to emotion.' },
            { s: 'Se la spesa aumenta, il bilancio non regge.', g: 2, why: 'A logical argument.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Un oratore dice: “Come medico, ho visto migliaia di pazienti.” Questo è soprattutto ___.', o: ['ethos', 'pathos', 'logos'], why: 'He builds trust through experience.' },
            { q: 'Un oratore descrive una famiglia senza casa e dice: “Immaginate di essere voi.” Questo è soprattutto ___.', o: ['pathos', 'ethos', 'logos'], why: 'It moves feelings.' },
            { q: 'Un oratore mostra un grafico con i dati degli ultimi dieci anni. Questo è soprattutto ___.', o: ['logos', 'pathos', 'ethos'], why: 'Facts and figures.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence so that it appeals to feelings, using the words given.', items: [
            { q: 'Molti anziani vivono soli.', cue: 'Pensate a', a: ['Pensate a quanti anziani vivono soli.', 'Pensate a un anziano che vive solo.'], why: 'An invitation to imagine adds pathos.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Anafora, antitesi, climax',
      about: 'Recognise the devices that give a speech its rhythm.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Speeches use **devices** (*figure retoriche*) that make words memorable. **L’anafora** repeats the first words of several sentences: *Vogliamo scuole aperte. Vogliamo strade sicure. Vogliamo un futuro per tutti.* **L’antitesi** sets two opposite ideas side by side: *Non è la fine, è l’inizio.* **Il chiasmo** reverses the order of two phrases: *Non si vive per mangiare, ma si mangia per vivere.* **La gradazione** (climax) raises the force step by step: *Un passo, una strada, un viaggio, una vita.* **La domanda retorica** asks a question that needs no answer: *Possiamo davvero restare a guardare?*' },
          { t: 'table', caption: 'Rhetorical devices', explain: ['head', 'col0'], head: ['Device', 'What it does', 'Example'], rows: [
            ['anafora', 'repeats the opening words', 'Vogliamo scuole aperte. Vogliamo strade sicure.'],
            ['antitesi', 'sets two opposites together', 'Non è la fine, è l’inizio.'],
            ['chiasmo', 'reverses the order of two phrases', 'Non si vive per mangiare, si mangia per vivere.'],
            ['gradazione', 'raises the force step by step', 'Un passo, una strada, un viaggio, una vita.'],
            ['domanda retorica', 'asks a question with no answer needed', 'Possiamo davvero restare a guardare?'],
          ] },
        ],
        [
          { t: 'text', md: 'Another device is the **extended metaphor** (*metafora continuata*): one image runs through the speech. A speaker may call a city *una nave*: *Siamo tutti sulla stessa nave. Se qualcuno non rema, la nave rallenta. Dobbiamo decidere la rotta insieme.* The metaphor gives unity and makes an abstract idea concrete. The danger is to push it too far, so that it becomes funny or false.' },
          { t: 'tip', art: 'dragon', md: 'To spot a device, look for **repetition** (anaphora), **opposites** (antithesis), **a reversed order** (chiasmus), **a rising list** (gradation) or **a question without an answer** (rhetorical question).' },
          { t: 'ex', kind: 'match', h: 'Match the example to the device.', pairs: [
            ['Vogliamo scuole. Vogliamo case. Vogliamo lavoro.', 'anafora'],
            ['Non è un addio, è un arrivederci.', 'antitesi'],
            ['Possiamo davvero restare a guardare?', 'domanda retorica'],
            ['Un seme, un albero, un bosco, una foresta.', 'gradazione'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Name the device.', items: [
            { q: '“Siamo qui per ricordare, siamo qui per costruire, siamo qui per cambiare.”', o: ['anafora', 'antitesi', 'chiasmo'], why: '“Siamo qui per” opens each clause.' },
            { q: '“Non chiedere cosa possono fare gli altri per te, chiedi cosa puoi fare tu per gli altri.”', o: ['chiasmo', 'gradazione', 'domanda retorica'], why: 'The two halves reverse the order of their elements.' },
            { q: '“Tacere o parlare, subire o reagire: questa è la scelta.”', o: ['antitesi', 'anafora', 'gradazione'], why: 'Opposites set side by side.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite as a rhetorical question, using the words given.', items: [
            { q: 'Non possiamo restare indifferenti.', cue: 'Possiamo davvero', a: ['Possiamo davvero restare indifferenti?'], why: 'A statement becomes a rhetorical question.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Parole che pesano: il modo di presentare i fatti',
      about: 'Read critically: framing, loaded words and bias.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The same event can be told in two ways. This is **framing** (*inquadramento*). Compare: *Il comune ha tagliato i fondi alla biblioteca* and *Il comune ha ridotto la spesa per la cultura*. The facts are the same, but the first sounds like a loss, the second like good management. **Loaded words** (*parole cariche*) carry a judgment: *una folla* is neutral, *una massa* feels negative, *un popolo* feels noble. *Un taglio* is harsher than *una razionalizzazione*.' },
          { t: 'table', caption: 'Neutral and loaded words', explain: ['head', 'col0'], head: ['Neutral', 'Loaded (positive)', 'Loaded (negative)'], rows: [
            ['la riduzione della spesa', 'la razionalizzazione', 'il taglio'],
            ['un gruppo di persone', 'un popolo', 'una massa'],
            ['un cambiamento', 'una svolta', 'uno stravolgimento'],
            ['un cittadino', 'un contribuente onesto', 'un evasore'],
          ] },
        ],
        [
          { t: 'text', md: 'To read critically, ask: **who is speaking, and what do they gain? What is stressed, and what is left out? Which words carry a judgment?** Look for **generalisations** (*tutti, nessuno, sempre*), **false choices** (*o con noi o contro di noi*) and **appeals to fear**. A good reader does not reject every message; they simply **read twice**: once for the message, once for the way it is built.' },
          { t: 'tip', art: 'cat', md: 'Try to **rewrite** a loaded sentence in neutral words. If the meaning changes a lot, the original relied on the loaded words. This simple test shows you where the persuasion is.' },
          { t: 'ex', kind: 'sort', h: 'Neutral or loaded?', groups: ['neutral', 'loaded'], explain: ['groups'], items: [
            { s: 'un gruppo di manifestanti', g: 0, why: 'Neutral.' },
            { s: 'una massa di facinorosi', g: 1, why: 'A negative judgment.' },
            { s: 'la riduzione della spesa', g: 0, why: 'Neutral.' },
            { s: 'il taglio selvaggio', g: 1, why: 'A strong negative judgment.' },
            { s: 'un cambiamento', g: 0, why: 'Neutral.' },
            { s: 'una svolta storica', g: 1, why: 'A positive judgment.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Which phrase sounds most negative?', o: ['il taglio dei fondi', 'la riduzione dei fondi', 'la revisione dei fondi'], why: '*Taglio* is the harshest.' },
            { q: 'Which phrase is the most neutral?', o: ['un gruppo di persone', 'una massa di persone', 'un popolo'], why: '*Un gruppo* carries no judgment.' },
            { q: '“O con noi o contro di noi” is an example of ___.', o: ['a false choice', 'an anaphora', 'a gradation'], why: 'It offers only two options.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Rewrite in neutral words, using the words given.', items: [
            { q: 'Il comune ha tagliato selvaggiamente i fondi.', cue: 'Il comune ha ridotto', a: ['Il comune ha ridotto i fondi.'], why: 'Removes the loaded words.' },
            { q: 'Una massa di persone ha invaso la piazza.', cue: 'Un gruppo di persone', a: ['Un gruppo di persone è arrivato in piazza.', 'Un gruppo di persone ha riempito la piazza.'], why: 'A neutral description.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Un discorso e un commento',
      about: 'Read an invented speech and a commentary on its devices.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Un discorso e un commento', md: 'Il discorso (della sindaca di una città immaginaria)\n\nCittadine e cittadini, per vent’anni ho camminato per queste strade. Ho visto aprire negozi e li ho visti chiudere. Ho visto bambini diventare adulti e adulti diventare nonni. Per questo vi parlo con franchezza.\n\nVogliamo una città dove si possa camminare senza paura. Vogliamo una città dove ogni bambino abbia una scuola vicina. Vogliamo una città dove nessuno sia lasciato indietro. Questo non è un sogno: i dati dell’ultimo anno mostrano che dove abbiamo investito nei quartieri, i furti sono scesi del quindici per cento.\n\nSiamo tutti sulla stessa nave. Se qualcuno non rema, la nave rallenta. Possiamo davvero permettercelo? Non è la fine di un’epoca: è l’inizio di una nuova.\n\nIl commento\n\nIl discorso usa tutti e tre gli appelli. L’ethos nasce dall’esperienza di vent’anni; il pathos, dalle immagini dei bambini e dei nonni; il logos, dal dato del quindici per cento. Le tre frasi che cominciano con «Vogliamo» formano un’anafora. «Siamo tutti sulla stessa nave» apre una metafora continuata. La domanda «Possiamo davvero permettercelo?» è retorica, e la frase finale si regge su un’antitesi. Il lettore critico noterà però che il discorso non spiega come siano stati raccolti i dati.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La sindaca costruisce la fiducia dicendo di conoscere la città da vent’anni.', a: 't', why: 'That is the ethos.' },
            { q: 'Il discorso non contiene alcun dato.', a: 'f', why: 'It gives a figure: a fifteen per cent fall.' },
            { q: 'La frase “Vogliamo una città…” è ripetuta tre volte.', a: 't', why: 'An anaphora.' },
            { q: 'La sindaca promette di costruire dieci nuove scuole.', a: 'ng', why: 'No such promise is made.' },
            { q: 'Il commentatore trova il discorso privo di difetti.', a: 'f', why: 'He notes that the data collection is not explained.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Which appeal comes from the figures on theft?', o: ['logos', 'pathos', 'ethos'], why: 'The figure gives logic and evidence.' },
            { q: 'What is the extended metaphor in the speech?', o: ['The city as a ship', 'The city as a garden', 'The city as a house'], why: '«Siamo tutti sulla stessa nave.»' },
            { q: 'Which device is «Possiamo davvero permettercelo?»', o: ['A rhetorical question', 'An anaphora', 'A chiasmus'], why: 'No answer is expected.' },
            { q: 'What does the commentator criticise?', o: ['The data are not explained.', 'The speech is too long.', 'The speaker is dishonest.'], why: 'The last sentence of the commentary.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the devices.', items: [
            { s: '[Vogliamo una città] dove si possa camminare senza paura. [Vogliamo una città] dove ogni bambino abbia una scuola vicina.', why: 'Anaphora.' },
            { s: 'Non è [la fine di un’epoca]: è [l’inizio di una nuova].', why: 'Antithesis.' },
            { s: '[Possiamo davvero permettercelo?]', why: 'A rhetorical question.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Siamo tutti sulla stessa ___.', a: ['nave'], why: 'The extended metaphor.' },
            { q: 'Le tre frasi con «Vogliamo» formano un’___.', a: ['anafora'], why: 'Repetition of the opening words.' },
            { q: 'Il dato del quindici per cento è un esempio di ___.', a: ['logos'], why: 'Facts and figures.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il lettore critico noterà che i dati non sono spiegati.', why: 'A critical reading.' },
            { a: 'Per vent’anni ho camminato per queste strade.', why: 'The ethos of the speaker.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: '“Ho lavorato in ospedale per trent’anni.” Questo è soprattutto ___.', o: ['ethos', 'pathos', 'logos'], why: 'Trust through experience.' },
      { q: '“Non è la fine, è l’inizio.” Questa figura è ___.', o: ['un’antitesi', 'un’anafora', 'una gradazione'], why: 'Two opposites.' },
      { q: 'Which word is the most neutral?', o: ['gruppo', 'massa', 'popolo'], why: '*Gruppo* has no judgment.' },
      { q: '“O con noi o contro di noi” is ___.', o: ['a false choice', 'a gradation', 'an extended metaphor'], why: 'Only two options are offered.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Which device?', groups: ['anafora', 'antitesi'], explain: ['groups'], items: [
      { s: 'Vogliamo pace. Vogliamo lavoro. Vogliamo giustizia.', g: 0, why: 'Repeats the opening words.' },
      { s: 'Non è un addio, è un arrivederci.', g: 1, why: 'Sets opposites together.' },
      { s: 'Siamo qui per ricordare, siamo qui per costruire.', g: 0, why: 'Repeats the opening words.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Un seme, un albero, un bosco: questa è una ___.', a: ['gradazione'], why: 'A rising list.' },
      { q: 'Possiamo davvero restare a guardare? È una domanda ___.', a: ['retorica'], why: 'No answer needed.' },
      { q: 'Il ___ muove i sentimenti del pubblico.', a: ['pathos'], why: 'Appeal to feeling.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite in neutral words, using the words given.', items: [
      { q: 'Il comune ha tagliato selvaggiamente i fondi.', cue: 'Il comune ha ridotto', a: ['Il comune ha ridotto i fondi.'], why: 'Neutral.' },
      { q: 'Non possiamo restare indifferenti.', cue: 'Possiamo davvero', a: ['Possiamo davvero restare indifferenti?'], why: 'A rhetorical question.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the problem.', items: [
      { s: '“Vogliamo scuole. Vogliamo case. Vogliamo lavoro.” è [un chiasmo].', a: ['un’anafora'], why: 'Repeated opening words make an anaphora.' },
      { s: 'Una [massa] di cittadini ha firmato la petizione. (neutral)', a: ['gruppo'], why: '*Massa* is loaded; *gruppo* is neutral.' },
    ] },
  ],
};
