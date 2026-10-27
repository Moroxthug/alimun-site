// Italian B2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Media and public debate',
  goal: 'Follow and join a debate on the media and the news. Learn media vocabulary and collocations, fare, lasciare and farsi + infinitive, andare + participle, and the phrases that soften, add or contrast opinions.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['media', 'news', 'social networks', 'fare + infinitive', 'andare + participle', 'discourse markers', 'debate'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Notizie, fonti, social',
      about: 'Learn the words and word partners for talking about the media.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **notizia** (piece of news) is reported by a **testata** (a newspaper or news outlet). The **titolo** attracts the reader, and the **fonte** (source) tells where the information comes from. A **notizia falsa** is fake news. Some verbs go with certain nouns: you **diffondere** a news item or a rumour, you **smentire** a rumour or a statement, you **verificare** the sources, and journalists **fare informazione** (do journalism).' },
          { t: 'table', caption: 'Media words', explain: ['head', 'col1'], head: ['Word', 'Meaning'], rows: [
            ['la testata', 'newspaper or news outlet'],
            ['il titolo', 'headline'],
            ['la fonte', 'source'],
            ['la notizia falsa', 'fake news'],
            ['diffondere', 'to spread'],
            ['smentire', 'to deny, to contradict'],
            ['confermare', 'to confirm'],
            ['verificare', 'to check, to verify'],
            ['condividere', 'to share'],
            ['l’opinione pubblica', 'public opinion'],
          ] },
          { t: 'tip', art: 'owl', md: '**Diffondere** and **smentire** often go together: *Il comune ha smentito la voce che era stata diffusa.* **Fare informazione** means to work as a journalist, while **dare una notizia** means to report one. **Condividere** a post is to share it on a network, but *condividere un’opinione* means to share a view with someone.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Una notizia falsa si **diffonde** in pochi minuti.', n: '*Diffondersi* = to spread.' },
            { s: 'Il giornale ha **smentito** la voce il giorno dopo.', n: '*Smentire una voce*.' },
            { s: 'Prima di condividere, bisogna **verificare** le fonti.', n: '*Verificare le fonti*.' },
            { s: 'I giornalisti **fanno informazione**.', n: 'A common phrase.' },
            { s: 'L’**opinione pubblica** è divisa su questo tema.', n: 'Public opinion.' },
          ] },
          { t: 'dialogue', title: 'Una notizia sul sindaco', lines: [
            { who: 'Sara', s: 'Hai visto la notizia sul sindaco?' },
            { who: 'Paolo', s: 'Sì, ma l’ha già smentita il comune.' },
            { who: 'Sara', s: 'E chi l’ha diffusa?' },
            { who: 'Paolo', s: 'Un post condiviso da molte persone senza verificare la fonte.' },
            { who: 'Sara', s: 'Bisognerebbe sempre controllare prima di condividere.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
            ['la fonte', 'source'],
            ['smentire', 'to deny'],
            ['diffondere', 'to spread'],
            ['la testata', 'news outlet'],
            ['verificare', 'to check'],
            ['il titolo', 'headline'],
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Choose all that fit.', items: [
            { key: 'diffondere', o: ['una notizia', 'una voce', 'un messaggio', 'una montagna'], a: [0, 1, 2], why: 'You spread news, a rumour or a message.' },
            { key: 'smentire', o: ['una notizia', 'una voce', 'una dichiarazione', 'un bicchiere'], a: [0, 1, 2], why: 'You deny news, a rumour or a statement.' },
            { key: 'verificare', o: ['le fonti', 'i fatti', 'un’informazione', 'la luna'], a: [0, 1, 2], why: 'You check sources, facts or information.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Prima di condividere, bisogna ___ le fonti.', o: ['verificare', 'confermare', 'diffondere'], why: '*Verificare le fonti* is the usual phrase.' },
            { q: 'Il comune ha ___ la voce: non è vero.', o: ['smentito', 'confermato', 'diffuso'], why: '*Smentire una voce* = to deny a rumour.' },
            { q: 'Una notizia falsa si ___ in pochi minuti.', o: ['diffonde', 'smentisce', 'verifica'], why: '*Diffondersi* = to spread.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'I giornalisti fanno ___ .', a: ['informazione'], why: '*Fare informazione* = to do journalism.' },
            { q: 'Una ___ falsa si diffonde in fretta.', a: ['notizia'], why: '*Una notizia falsa* = fake news.' },
            { q: 'Il giornale ha ___ la voce. (smentire)', a: ['smentito'], why: '*Ha smentito*.' },
            { q: 'Prima di ___ un post, leggi la fonte. (condividere)', a: ['condividere'], why: '*Prima di* + infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Una notizia falsa si diffonde in pochi minuti.', why: '*Si diffonde* = it spreads.' },
            { a: 'Prima di condividere bisogna verificare le fonti.', why: '*Prima di* + infinitive.' },
            { a: 'Il giornale ha smentito la voce il giorno dopo.', why: '*Ha smentito la voce*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il comune ha [confermato] la voce: non è vero.', a: ['smentito'], why: 'The rumour is false, so the council denied it: *smentire*.' },
            { s: 'Prima di condividere, bisogna [diffondere] le fonti.', a: ['verificare'], why: '*Verificare le fonti*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Far fare, lasciar fare, va letto',
      about: 'Use fare, lasciare and farsi with the infinitive, and andare with the participle.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Fare** + infinitive says that you make or have someone do something: *Ho fatto riparare la macchina* (I had the car repaired). *Mi ha fatto ridere* (He made me laugh). The person who does the action is introduced by **a**: *Faccio pulire la casa a mio fratello.* **Lasciare** + infinitive says that you let someone do something: *Lascia parlare Marco.* **Farsi** + infinitive says that something is done to you: *Mi sono fatto tagliare i capelli.* **Andare** + participle says that something must be done: *Il testo va letto con attenzione* (= deve essere letto).' },
          { t: 'table', caption: 'Four useful structures', explain: ['head', 'col1'], head: ['Structure', 'Meaning', 'Example'], rows: [
            ['fare + infinitive', 'to have something done, to make someone do', 'Ho fatto riparare la macchina.'],
            ['lasciare + infinitive', 'to let someone do', 'Lascia parlare Marco.'],
            ['farsi + infinitive', 'to have something done to oneself', 'Mi sono fatto tagliare i capelli.'],
            ['andare + participle', 'must be done', 'Le fonti vanno verificate.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the passato prossimo, **fare** uses *avere*: *Ho fatto riparare la macchina.* **Farsi** uses *essere*: *Mi sono fatto spiegare il problema.* With **andare** + participle, the participle agrees with the subject: *Il testo va letto. Le fonti vanno verificate.* This form only exists in the simple tenses.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ho **fatto riparare** la macchina.', n: 'I had it repaired.' },
            { s: 'Faccio pulire la casa **a** mio fratello.', n: 'The doer is introduced by *a*.' },
            { s: '**Lascia parlare** Marco.', n: 'Let Marco speak.' },
            { s: 'Mi sono **fatto spiegare** il problema.', n: 'I had the problem explained to me.' },
            { s: 'Il testo **va letto** con attenzione.', n: '*Va letto* = must be read.' },
            { s: 'Le fonti **vanno verificate**.', n: 'The participle agrees: *verificate*.' },
          ] },
          { t: 'dialogue', title: 'In redazione', lines: [
            { who: 'Marco', s: 'Ho fatto verificare la notizia da un collega.' },
            { who: 'Giulia', s: 'Bene. Le fonti vanno sempre controllate.' },
            { who: 'Marco', s: 'Il direttore non mi ha lasciato pubblicarla subito.' },
            { who: 'Giulia', s: 'Ha fatto bene. Un errore va corretto in fretta, ma è meglio evitarlo.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Ho ___ riparare la macchina. (fare)', a: ['fatto'], why: '*Ho fatto riparare*.' },
            { q: 'Lascia ___ Marco. (parlare)', a: ['parlare'], why: '*Lasciare* + infinitive.' },
            { q: 'Mi sono ___ tagliare i capelli. (fare)', a: ['fatto'], why: '*Mi sono fatto tagliare*.' },
            { q: 'Le fonti ___ verificate. (andare)', a: ['vanno'], why: '*Andare* + participle: *vanno verificate*.' },
            { q: 'Il testo ___ letto con attenzione. (andare)', a: ['va'], why: '*Il testo va letto*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Ho ___ riparare la macchina.', o: ['fatto', 'lasciato', 'andato'], why: '*Ho fatto riparare* = I had it repaired.' },
            { q: 'Il direttore non mi ha ___ pubblicare la notizia.', o: ['lasciato', 'fatto', 'andato'], why: '*Lasciare* = to let.' },
            { q: 'Le fonti ___ verificate.', o: ['vanno', 'sono andate', 'hanno'], why: '*Vanno verificate* = must be checked.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite the sentence with the structure in brackets.', items: [
            { q: 'Un tecnico ripara la macchina.', cue: 'Faccio', a: ['Faccio riparare la macchina a un tecnico.'], why: '*Fare* + infinitive; the doer with *a*.' },
            { q: 'La notizia deve essere verificata.', a: ['La notizia va verificata.'], why: '*Deve essere* → *va*.' },
            { q: 'Le fonti devono essere controllate.', a: ['Le fonti vanno controllate.'], why: '*Devono essere* → *vanno*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Le fonti [va] verificate.', a: ['vanno'], why: 'The verb agrees with *le fonti*.' },
            { s: 'Ho [lasciato] riparare la macchina.', a: ['fatto'], why: '*Ho fatto riparare* = I had it repaired.' },
            { s: 'Mi [ho] fatto tagliare i capelli.', a: ['sono'], why: '*Farsi* uses *essere*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the sentence with its meaning.', pairs: [
            ['Ho fatto riparare la macchina.', 'I had the car repaired.'],
            ['Lascia parlare Marco.', 'Let Marco speak.'],
            ['Mi sono fatto tagliare i capelli.', 'I had my hair cut.'],
            ['Il testo va letto.', 'The text must be read.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ho fatto riparare la macchina.', why: '*Fare* + infinitive.' },
            { a: 'Le fonti vanno sempre verificate.', why: '*Vanno* + participle.' },
            { a: 'Lascia parlare Marco fino alla fine.', why: '*Lasciare* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Del resto, in effetti',
      about: 'Soften an opinion, agree in part and link ideas in a debate.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In a debate, Italians soften their views and show how an idea links to the last one. To give a view: **a mio avviso, secondo me**. To soften it: **non sono del tutto convinto che** + congiuntivo, **mi pare che** + congiuntivo. To agree in part: **in parte sono d’accordo, fino a un certo punto**. To add a point: **in effetti, del resto, d’altronde**. To contrast: **tuttavia, comunque, anzi**. To close: **insomma, in fondo**.' },
          { t: 'table', caption: 'Debate phrases', explain: ['head', 'col0'], head: ['Function', 'Phrase', 'Example'], rows: [
            ['give a view', 'a mio avviso / secondo me', 'A mio avviso il problema è un altro.'],
            ['soften a view', 'non sono del tutto convinto che + subjunctive', 'Non sono del tutto convinto che sia giusto.'],
            ['agree in part', 'in parte sono d’accordo', 'In parte sono d’accordo con te.'],
            ['add a point', 'in effetti / del resto / d’altronde', 'Del resto, anche prima c’erano notizie false.'],
            ['contrast', 'tuttavia / comunque / anzi', 'Non è brutto, anzi è bellissimo.'],
            ['close', 'insomma / in fondo', 'In fondo, nessuno è perfetto.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Anzi** means *on the contrary* or *even more*: *Non è un problema, anzi è un’opportunità.* **Del resto** and **d’altronde** add a reason that supports what you just said. **Tuttavia** is more formal than **però**. After **mi pare che** and **non sono convinto che**, use the congiuntivo.' },
        ],
        [
          { t: 'dialogue', title: 'I social e il dibattito', lines: [
            { who: 'Sara', s: 'A mio avviso i social hanno peggiorato il dibattito pubblico.' },
            { who: 'Paolo', s: 'In parte sono d’accordo, ma non sono del tutto convinto che sia colpa solo dei social. Del resto, anche prima c’erano notizie false.' },
            { who: 'Sara', s: 'In effetti hai ragione, però oggi si diffondono più in fretta.' },
            { who: 'Paolo', s: 'D’altronde oggi si può anche verificare più facilmente.' },
            { who: 'Sara', s: 'Insomma, dipende da come li usiamo.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the function with the phrase.', pairs: [
            ['to give a view', 'A mio avviso …'],
            ['to agree in part', 'In parte sono d’accordo.'],
            ['to add a supporting point', 'Del resto …'],
            ['to contrast', 'Tuttavia …'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Non sono del tutto convinto che questa ___ la soluzione.', o: ['sia', 'è', 'sarebbe'], why: '*Non sono convinto che* + congiuntivo.' },
            { q: '___ parte sono d’accordo, ma non del tutto.', o: ['In', 'Di', 'Da'], why: '*In parte* = partly.' },
            { q: 'Non è brutto, ___ è bellissimo.', o: ['anzi', 'tuttavia', 'comunque'], why: '*Anzi* = on the contrary.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Del ___ , anche prima c’erano notizie false.', a: ['resto'], why: '*Del resto* = besides.' },
            { q: 'In ___ , hai ragione: non ci avevo pensato.', a: ['effetti', 'fondo'], why: '*In effetti* = indeed.' },
            { q: 'Non è un problema, ___ è un’opportunità.', a: ['anzi'], why: '*Anzi* = on the contrary.' },
            { q: 'A mio ___ il problema è un altro.', a: ['avviso'], why: '*A mio avviso* = in my view.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Non sono convinto che [è] giusto.', a: ['sia'], why: '*Non sono convinto che* + congiuntivo.' },
            { s: 'Mi pare che lui [ha] ragione.', a: ['abbia'], why: '*Mi pare che* + congiuntivo.' },
            { s: 'Non è un errore, [insomma] è una scelta.', a: ['anzi'], why: 'To correct: *anzi*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'In parte sono d’accordo con te.', why: '*In parte* = partly.' },
            { a: 'Non sono del tutto convinto che sia giusto.', why: '*Che* + congiuntivo.' },
            { a: 'Del resto anche prima c’erano notizie false.', why: '*Del resto* adds a supporting point.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Notizie e responsabilità',
      about: 'Read an opinion article and a reader’s reply.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Le notizie e la fretta', md: 'Ogni giorno una notizia falsa può fare il giro del mondo prima che qualcuno riesca a smentirla. La colpa non è solo dei social: chi condivide senza leggere ha le sue responsabilità. Le fonti vanno verificate, i titoli vanno letti con attenzione e, quando una notizia sembra troppo bella o troppo brutta per essere vera, conviene farla controllare da chi fa informazione di mestiere.\n\nLasciare che sia un algoritmo a decidere che cosa leggiamo non è una scelta neutrale.' },
          { t: 'reading', title: 'La risposta di un lettore', md: 'Sono d’accordo in parte. È vero che le fonti vanno verificate, ma non si può chiedere a tutti di farlo ogni volta. In fondo, anche i giornali sbagliano e non sempre smentiscono in tempo. Forse sarebbe meglio che le piattaforme rendessero più facile segnalare le notizie false.\n\nLuca' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Secondo l’articolo, la colpa è solo dei social.', a: 'f', why: '*La colpa non è solo dei social.*' },
            { q: 'L’articolo dice che le fonti vanno verificate.', a: 't', why: '*Le fonti vanno verificate.*' },
            { q: 'Il lettore è completamente d’accordo.', a: 'f', why: '*Sono d’accordo in parte.*' },
            { q: 'Il lettore lavora in un giornale.', a: 'ng', why: 'The reply does not say what he does.' },
            { q: 'Il lettore vorrebbe che le piattaforme facilitassero le segnalazioni.', a: 't', why: '*Sarebbe meglio che le piattaforme rendessero più facile segnalare le notizie false.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Che cosa conviene fare con una notizia troppo bella per essere vera?', o: ['Farla controllare da chi fa informazione.', 'Condividerla subito.', 'Ignorarla.'], why: '*Conviene farla controllare da chi fa informazione di mestiere.*' },
            { q: 'Secondo il lettore, che cosa non si può chiedere a tutti?', o: ['Verificare le fonti ogni volta.', 'Leggere i titoli.', 'Usare i social.'], why: '*Non si può chiedere a tutti di farlo ogni volta.*' },
            { q: 'Che cosa propone il lettore?', o: ['Rendere più facile segnalare le notizie false.', 'Chiudere le piattaforme.', 'Vietare i giornali.'], why: '*Sarebbe meglio che le piattaforme rendessero più facile segnalare le notizie false.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the structure andare + participle.', items: [
            { s: 'Le fonti [vanno] verificate e i titoli [vanno] letti con attenzione.', why: '*Vanno verificate* and *vanno letti* mean *must be checked* and *must be read*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Le fonti ___ verificate. (andare)', a: ['vanno'], why: '*Vanno verificate*.' },
            { q: 'Conviene ___ controllare la notizia. (fare)', a: ['farla'], why: '*Farla controllare*; the pronoun joins the infinitive *fare*.' },
            { q: '___ parte sono d’accordo.', a: ['In'], why: '*In parte* = partly.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'In fondo anche i giornali sbagliano.', why: '*In fondo* adds a point.' },
            { a: 'Forse sarebbe meglio che le piattaforme rendessero tutto più semplice.', why: '*Sarebbe meglio che* + congiuntivo imperfetto.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Prima di condividere, bisogna ___ le fonti.', o: ['verificare', 'confermare', 'diffondere'], why: '*Verificare le fonti*.' },
      { q: 'Il testo ___ letto con attenzione.', o: ['va', 'ha', 'è andato'], why: '*Va letto* = must be read.' },
      { q: 'Ho ___ riparare la macchina.', o: ['fatto', 'lasciato', 'andato'], why: '*Ho fatto riparare*.' },
      { q: 'Non sono del tutto convinto che questa ___ la soluzione.', o: ['sia', 'è', 'sarebbe'], why: '*Non sono convinto che* + congiuntivo.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Le fonti ___ verificate. (andare)', a: ['vanno'], why: '*Vanno verificate*.' },
      { q: 'Mi sono ___ tagliare i capelli. (fare)', a: ['fatto'], why: '*Mi sono fatto tagliare*.' },
      { q: 'Del ___ , anche prima c’erano notizie false.', a: ['resto'], why: '*Del resto* = besides.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['smentire', 'to deny'],
      ['diffondere', 'to spread'],
      ['la fonte', 'source'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Un tecnico ripara la macchina.', cue: 'Faccio', a: ['Faccio riparare la macchina a un tecnico.'], why: '*Fare* + infinitive; the doer with *a*.' },
      { q: 'La notizia deve essere verificata.', a: ['La notizia va verificata.'], why: '*Deve essere* → *va*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Le fonti [va] verificate.', a: ['vanno'], why: 'The verb agrees with *le fonti*.' },
      { s: 'Ho [lasciato] riparare la macchina.', a: ['fatto'], why: '*Ho fatto riparare*.' },
    ] },
  ],
};
