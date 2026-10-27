// Italian B1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Dreams and hypotheses',
  goal: 'Talk about unreal situations, wishes and advice. Learn the congiuntivo imperfetto, se + congiuntivo imperfetto + condizionale, and phrases like se fossi in te and magari.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['congiuntivo imperfetto', 'hypothetical sentences', 'wishes', 'advice', 'interview'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Fossi, avessi, potessi',
      about: 'Form the congiuntivo imperfetto and use it after verbs in the past.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'The **congiuntivo imperfetto** is built on the *imperfetto* stem of the infinitive. Verbs in **-are** take **-assi, -assi, -asse, -assimo, -aste, -assero**. Verbs in **-ere** take **-essi, -essi, -esse, -essimo, -este, -essero**. Verbs in **-ire** take **-issi, -issi, -isse, -issimo, -iste, -issero**. The first and second person singular are the same, so use the pronoun when needed: *Pensavo che tu fossi stanco.*' },
          { t: 'table', caption: 'The congiuntivo imperfetto: regular verbs', quiz: true, head: ['', 'parlare', 'prendere', 'dormire'], rows: [
            ['che io', 'parlassi', 'prendessi', 'dormissi'],
            ['che tu', 'parlassi', 'prendessi', 'dormissi'],
            ['che lui / lei / Lei', 'parlasse', 'prendesse', 'dormisse'],
            ['che noi', 'parlassimo', 'prendessimo', 'dormissimo'],
            ['che voi', 'parlaste', 'prendeste', 'dormiste'],
            ['che loro', 'parlassero', 'prendessero', 'dormissero'],
          ] },
          { t: 'tip', art: 'owl', md: 'Learn the irregular verbs by heart. **Essere** is the most irregular: **fossi, fossi, fosse, fossimo, foste, fossero**. Others keep the stem of the *imperfetto*: *fare (facevo) → facessi, dire (dicevo) → dicessi, bere (bevevo) → bevessi*, and *dare → dessi, stare → stessi.* *Avere, andare, potere, volere, venire* are regular: *avessi, andassi, potessi, volessi, venissi.*' },
        ],
        [
          { t: 'table', caption: 'Irregular verbs', explain: ['head'], head: ['Infinitive', 'che io / tu', 'che lui / lei', 'che loro'], rows: [
            ['essere', 'fossi', 'fosse', 'fossero'],
            ['fare', 'facessi', 'facesse', 'facessero'],
            ['dire', 'dicessi', 'dicesse', 'dicessero'],
            ['dare', 'dessi', 'desse', 'dessero'],
            ['stare', 'stessi', 'stesse', 'stessero'],
            ['bere', 'bevessi', 'bevesse', 'bevessero'],
          ] },
          { t: 'text', md: 'Use the **congiuntivo imperfetto** where a verb of **opinion, hope or wish** is itself in the **past**. Compare: *Penso che sia a casa* (now) and *Pensavo che fosse a casa* (then). *Spero che tu venga* and *Speravo che tu venissi.*' },
          { t: 'examples', items: [
            { s: 'Pensavo che Marco **fosse** a casa.', n: '*Pensavo che* + imperfetto of the congiuntivo.' },
            { s: 'Speravo che tu **venissi** alla festa.', n: '*Speravo che* + *venissi*.' },
            { s: 'Credevo che loro **parlassero** italiano.', n: 'A past belief.' },
            { s: 'Mi sembrava che lei **fosse** stanca.', n: 'A past impression.' },
            { s: 'Volevo che tu mi **dicessi** la verità.', n: '*Dire* → *dicessi*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the congiuntivo imperfetto of essere.', verb: 'essere', tense: 'congiuntivo imperfetto (che …)', rows: [
            ['che io', 'fossi'],
            ['che tu', 'fossi'],
            ['che lui / lei', 'fosse'],
            ['che noi', 'fossimo'],
            ['che voi', 'foste'],
            ['che loro', 'fossero'],
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the congiuntivo imperfetto of parlare.', verb: 'parlare', tense: 'congiuntivo imperfetto (che …)', rows: [
            ['che io', 'parlassi'],
            ['che tu', 'parlassi'],
            ['che lui / lei', 'parlasse'],
            ['che noi', 'parlassimo'],
            ['che voi', 'parlaste'],
            ['che loro', 'parlassero'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the congiuntivo imperfetto.', items: [
            { q: 'Pensavo che Marco ___ a casa. (essere)', a: ['fosse'], why: '*Essere* → *fosse*.' },
            { q: 'Speravo che tu ___ alla festa. (venire)', a: ['venissi'], why: '*Venire* → *venissi*.' },
            { q: 'Credevo che loro ___ italiano. (parlare)', a: ['parlassero'], why: '*Parlare* → *parlassero*.' },
            { q: 'Pensavo che voi ___ più tempo. (avere)', a: ['aveste'], why: '*Avere* → *aveste*.' },
            { q: 'Volevo che tu mi ___ la verità. (dire)', a: ['dicessi'], why: '*Dire* → *dicessi*.' },
            { q: 'Sembrava che lui ___ molto. (lavorare)', a: ['lavorasse'], why: '*Lavorare* → *lavorasse*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Present or past? Choose the right form.', items: [
            { q: 'Pensavo che Marco ___ a casa.', o: ['fosse', 'sia', 'è'], why: '*Pensavo* is past: *fosse*.' },
            { q: 'Penso che lui ___ stanco.', o: ['sia', 'fosse', 'è'], why: '*Penso* is present: *sia*.' },
            { q: 'Speravo che tu ___ alla festa.', o: ['venissi', 'venga', 'vieni'], why: '*Speravo* is past: *venissi*.' },
            { q: 'Credevo che loro ___ italiano.', o: ['parlassero', 'parlino', 'parlano'], why: '*Credevo* is past: *parlassero*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Pensavo che lui [sia] a casa.', a: ['fosse'], why: '*Pensavo* is past: *fosse*.' },
            { s: 'Speravo che tu [venga] alla festa.', a: ['venissi'], why: '*Speravo* is past: *venissi*.' },
            { s: 'Credevo che voi [avete] più tempo.', a: ['aveste'], why: '*Credevo che* + congiuntivo imperfetto: *aveste*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Se avessi tempo, viaggerei',
      about: 'Talk about situations that are not real with se + congiuntivo imperfetto + condizionale.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'Italian has two kinds of **if** sentences for the present and future. For something **possible**, use **se** + present: *Se ho tempo, vengo.* For something **unlikely or imagined**, use **se** + **congiuntivo imperfetto** and the **condizionale**: *Se avessi più tempo, viaggerei di più.* The two parts can swap places: *Viaggerei di più, se avessi più tempo.* Never use the condizionale after **se**.' },
          { t: 'table', caption: 'Real and unreal', explain: ['head', 'col1'], head: ['Type', 'Pattern', 'Example'], rows: [
            ['possible', 'se + present, present or future', 'Se ho tempo, vengo.'],
            ['unreal', 'se + congiuntivo imperfetto, condizionale', 'Se avessi tempo, verrei.'],
            ['unreal', 'se + congiuntivo imperfetto, condizionale', 'Se fossi ricco, comprerei una casa.'],
            ['unreal', 'se + congiuntivo imperfetto, condizionale', 'Se potessi, vivrei al mare.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not say *Se avrei tempo* or *Se avrei più soldi*. After **se**, always the congiuntivo imperfetto: *Se avessi tempo.* The condizionale goes in the other part: *verrei, viaggerei, comprerei.*' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Se avessi** più tempo, **viaggerei** di più.', n: 'I do not have time: an imagined situation.' },
            { s: '**Se fossi** ricco, **comprerei** una casa.', n: 'I am not rich.' },
            { s: '**Se potessi**, **vivrei** al mare.', n: 'I cannot now.' },
            { s: 'Marco **verrebbe** volentieri **se** non **lavorasse**.', n: 'The *se* part can come second.' },
            { s: '**Se parlassi** cinese, **lavorerei** in Cina.', n: 'A dream, not a plan.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Possible or imagined? Sort the sentences.', explain: ['groups'], groups: ['Possible (real)', 'Imagined (unreal)'], items: [
            { s: 'Se ho tempo, vengo.', g: 0, why: 'Se + present: it can happen.' },
            { s: 'Se piove, resto a casa.', g: 0, why: 'Se + present: it can happen.' },
            { s: 'Se avessi tempo, verrei.', g: 1, why: 'Se + congiuntivo imperfetto: imagined.' },
            { s: 'Se fossi ricco, comprerei una casa.', g: 1, why: 'Se + congiuntivo imperfetto: imagined.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se avessi più tempo, ___ di più. (viaggiare)', a: ['viaggerei'], why: 'The condizionale: *viaggerei*.' },
            { q: 'Se ___ ricco, comprerei una casa. (io, essere)', a: ['fossi'], why: '*Se* + *fossi*.' },
            { q: 'Se tu ___ più attento, faresti meno errori. (essere)', a: ['fossi'], why: '*Se tu fossi*.' },
            { q: 'Se Marco ___ qui, ci aiuterebbe. (essere)', a: ['fosse'], why: '*Se Marco fosse*.' },
            { q: 'Se noi avessimo una macchina, ___ al mare ogni domenica. (andare)', a: ['andremmo'], why: 'The condizionale: *andremmo*.' },
            { q: 'Se loro ___ più soldi, comprerebbero una casa. (avere)', a: ['avessero'], why: '*Se loro avessero*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Se vincessi la lotteria, ___ il mondo.', o: ['girerei', 'giro', 'girassi'], why: 'The result is in the condizionale: *girerei*.' },
            { q: 'Se ___ tempo, verrei volentieri.', o: ['avessi', 'ho', 'avrò'], why: 'An imagined situation: *avessi*.' },
            { q: 'Se fossi in te, ___ questo lavoro.', o: ['accetterei', 'accetto', 'accettassi'], why: 'The result is in the condizionale: *accetterei*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Imagine the opposite. Start with se.', items: [
            { q: 'Non ho tempo, quindi non viaggio.', cue: 'Se', a: ['Se avessi tempo, viaggerei.'], why: 'The reason becomes the *se* clause: *se avessi tempo*.' },
            { q: 'Non sono ricco, quindi non compro una casa.', cue: 'Se', a: ['Se fossi ricco, comprerei una casa.'], why: '*Se fossi ricco, comprerei …*' },
            { q: 'Non parlo cinese, quindi non lavoro in Cina.', cue: 'Se', a: ['Se parlassi cinese, lavorerei in Cina.'], why: '*Se parlassi …, lavorerei …*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Se [ho] più tempo, viaggerei di più.', a: ['avessi'], why: 'An imagined situation: *se avessi*.' },
            { s: 'Se fossi ricco, [compro] una casa.', a: ['comprerei'], why: 'The result is in the condizionale.' },
            { s: 'Se io [sarei] più giovane, studierei in Italia.', a: ['fossi'], why: 'After *se*, the congiuntivo imperfetto, never the condizionale.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se avessi tempo, viaggerei di più.', why: '*Se* + congiuntivo imperfetto, then the condizionale.' },
            { a: 'Comprerei una casa se fossi ricco.', why: 'The *se* part can come second.' },
            { a: 'Se potessi, vivrei al mare.', why: '*Potessi*, then *vivrei*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the beginning with the end.', pairs: [
            ['Se avessi più tempo,', 'viaggerei di più.'],
            ['Se fossi ricco,', 'comprerei una casa.'],
            ['Se parlassi cinese,', 'lavorerei in Cina.'],
            ['Se potessi scegliere,', 'vivrei al mare.'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Se fossi in te',
      about: 'Give advice and express wishes with the congiuntivo imperfetto.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To give advice, say **Se fossi in te** (If I were you) and use the condizionale: *Se fossi in te, accetterei.* To express a wish that is hard to reach, use **vorrei che** or **mi piacerebbe che** and the congiuntivo imperfetto: *Vorrei che tu venissi.* **Magari** + congiuntivo imperfetto means *I wish*: *Magari avessi più tempo!* After **come se** (as if), also the congiuntivo imperfetto: *Parla come se fosse il capo.*' },
          { t: 'table', caption: 'Wishes and advice', explain: ['head'], head: ['Phrase', 'Example'], rows: [
            ['Se fossi in te, + condizionale', 'Se fossi in te, accetterei.'],
            ['Vorrei che + congiuntivo imperfetto', 'Vorrei che tu venissi.'],
            ['Mi piacerebbe che + congiuntivo imperfetto', 'Mi piacerebbe che fosse domenica.'],
            ['Magari + congiuntivo imperfetto', 'Magari avessi più tempo!'],
            ['come se + congiuntivo imperfetto', 'Parla come se fosse il capo.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Compare **Voglio che tu venga** (a direct wish) and **Vorrei che tu venissi** (a softer, more polite wish). With *vorrei*, the second verb moves to the imperfetto. **Magari** alone also means *maybe* or *I wish!*: *Vieni? – Magari!*' },
        ],
        [
          { t: 'dialogue', title: 'Se potessi', lines: [
            { who: 'Giulia', s: 'Se potessi, dove vivresti?' },
            { who: 'Marco', s: 'Se potessi scegliere, vivrei al mare. Mi piacerebbe svegliarmi ogni giorno davanti all’acqua.' },
            { who: 'Giulia', s: 'E il lavoro?' },
            { who: 'Marco', s: 'Magari potessi lavorare da casa! Se avessi un lavoro così, partirei domani.' },
            { who: 'Giulia', s: 'Se fossi in te, ne parlerei con il mio capo.' },
            { who: 'Marco', s: 'Forse hai ragione.' },
          ] },
          { t: 'examples', items: [
            { s: '**Se fossi in te**, **accetterei**.', n: 'Advice.' },
            { s: '**Vorrei che** tu **venissi** con noi.', n: 'A polite wish.' },
            { s: '**Magari avessi** più tempo!', n: 'I wish I had.' },
            { s: 'Parla **come se fosse** il capo.', n: '*Come se* + congiuntivo imperfetto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se ___ in te, chiamerei il medico. (io, essere)', a: ['fossi'], why: '*Se fossi in te*.' },
            { q: 'Vorrei che tu ___ con noi. (venire)', a: ['venissi'], why: '*Vorrei che* + *venissi*.' },
            { q: 'Magari ___ più tempo libero! (io, avere)', a: ['avessi'], why: '*Magari* + *avessi*.' },
            { q: 'Parla come se ___ il capo. (essere)', a: ['fosse'], why: '*Come se* + *fosse*.' },
            { q: 'Mi piacerebbe che domani ___ domenica. (essere)', a: ['fosse'], why: '*Mi piacerebbe che* + *fosse*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Vorrei che tu ___ con noi.', o: ['venissi', 'vieni', 'venga'], why: '*Vorrei che* + congiuntivo imperfetto.' },
            { q: 'Se fossi in te, ___ questo lavoro.', o: ['accetterei', 'accetto', 'accettassi'], why: 'The advice is in the condizionale.' },
            { q: 'Parla come se ___ italiano.', o: ['fosse', 'è', 'sia'], why: '*Come se* + congiuntivo imperfetto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite it with the phrase in brackets.', items: [
            { q: 'Voglio che tu venga.', cue: 'Vorrei che', a: ['Vorrei che tu venissi.'], why: 'A softer wish: *vorrei che tu venissi*.' },
            { q: 'Ti consiglio di accettare.', cue: 'Se fossi in te', a: ['Se fossi in te, accetterei.'], why: '*Se fossi in te* + condizionale.' },
            { q: 'Ho poco tempo, che peccato!', cue: 'Magari', a: ['Magari avessi più tempo!'], why: '*Magari* + congiuntivo imperfetto.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Vorrei che tu [vieni] con noi.', a: ['venissi'], why: '*Vorrei che* + congiuntivo imperfetto.' },
            { s: 'Se [sono] in te, accetterei.', a: ['fossi'], why: '*Se fossi in te*.' },
            { s: 'Parla come se [è] il capo.', a: ['fosse'], why: '*Come se* + congiuntivo imperfetto.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Se fossi in te, accetterei.', why: '*Se fossi in te* + condizionale.' },
            { a: 'Vorrei che tu venissi con noi.', why: '*Vorrei che* + congiuntivo imperfetto.' },
            { a: 'Magari avessi più tempo!', why: '*Magari* + congiuntivo imperfetto.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the situation with the sentence.', pairs: [
            ['You give friendly advice.', 'Se fossi in te, accetterei.'],
            ['You make a polite wish.', 'Vorrei che tu venissi.'],
            ['You wish you had more time.', 'Magari avessi più tempo!'],
            ['You say someone behaves like a boss.', 'Parla come se fosse il capo.'],
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Una nuova vita',
      about: 'Read an interview with someone who changed their life.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Un’intervista', md: '**Intervistatore:** Anna, cinque anni fa lavorava in un ufficio. Perché ha cambiato vita?\n\n**Anna:** Mi sentivo stanca e infelice. Pensavo che il lavoro fosse tutto, ma non lo era. Un giorno ho deciso di aprire un piccolo forno nel mio paese.\n\n**Intervistatore:** Ha avuto paura?\n\n**Anna:** Certo. Se avessi più soldi, comprerei un locale più grande, ma per ora va bene così.\n\n**Intervistatore:** Che cosa direbbe a chi vorrebbe cambiare lavoro?\n\n**Anna:** Se fossi in loro, ci penserei bene, ma non aspetterei troppo. Sembra che il momento giusto non arrivi mai. Vorrei che più persone trovassero il coraggio di provare.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Anna lavorava in un ufficio.', a: 't', why: '*Cinque anni fa lavorava in un ufficio.*' },
            { q: 'Anna ha aperto un forno nel suo paese.', a: 't', why: '*Ho deciso di aprire un piccolo forno nel mio paese.*' },
            { q: 'Anna è molto ricca adesso.', a: 'f', why: 'She says she would buy a bigger place if she had more money.' },
            { q: 'Anna ha tre dipendenti.', a: 'ng', why: 'The interview does not mention employees.' },
            { q: 'Anna consiglia di aspettare il momento giusto.', a: 'f', why: 'She says: *non aspetterei troppo*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Come si sentiva Anna in ufficio?', o: ['Stanca e infelice.', 'Contenta e piena di energia.', 'Annoiata ma tranquilla.'], why: '*Mi sentivo stanca e infelice.*' },
            { q: 'Che cosa farebbe Anna con più soldi?', o: ['Comprerebbe un locale più grande.', 'Chiuderebbe il forno.', 'Tornerebbe in ufficio.'], why: '*Se avessi più soldi, comprerei un locale più grande.*' },
            { q: 'Che cosa vorrebbe Anna?', o: ['Che più persone trovassero il coraggio di provare.', 'Che nessuno cambiasse lavoro.', 'Che tutti aprissero un forno.'], why: '*Vorrei che più persone trovassero il coraggio di provare.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the congiuntivo imperfetto.', items: [
            { s: 'Pensavo che il lavoro [fosse] tutto.', why: '*Fosse* follows *pensavo che*.' },
            { s: 'Vorrei che più persone [trovassero] il coraggio di provare.', why: '*Trovassero* follows *vorrei che*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Se ___ più soldi, comprerei un locale più grande. (io, avere)', a: ['avessi'], why: '*Se avessi*.' },
            { q: 'Se fossi in loro, ci ___ bene. (io, pensare)', a: ['penserei'], why: 'The result is in the condizionale: *penserei*.' },
            { q: 'Vorrei che più persone ___ il coraggio di provare. (trovare)', a: ['trovassero'], why: '*Vorrei che* + *trovassero*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Pensavo che il lavoro fosse tutto.', why: '*Pensavo che* + *fosse*.' },
            { a: 'Se fossi in loro, non aspetterei troppo.', why: '*Se fossi in loro* + condizionale.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Pensavo che Marco ___ a casa.', o: ['fosse', 'sia', 'è'], why: '*Pensavo* is past: *fosse*.' },
      { q: 'Se avessi tempo, ___ di più.', o: ['viaggerei', 'viaggio', 'viaggiassi'], why: 'The result is in the condizionale.' },
      { q: 'Vorrei che tu ___ con noi.', o: ['venissi', 'vieni', 'venga'], why: '*Vorrei che* + congiuntivo imperfetto.' },
      { q: 'Se fossi in te, ___ questo lavoro.', o: ['accetterei', 'accetto', 'accettassi'], why: 'Advice in the condizionale.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
      { q: 'Se io ___ ricco, comprerei una casa. (essere)', a: ['fossi'], why: '*Se fossi*.' },
      { q: 'Speravo che loro ___ italiano. (parlare)', a: ['parlassero'], why: '*Speravo che* + *parlassero*.' },
      { q: 'Se loro ___ più soldi, comprerebbero una casa. (avere)', a: ['avessero'], why: '*Se avessero*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with its congiuntivo imperfetto (che lui / lei).', pairs: [
      ['essere', 'fosse'],
      ['avere', 'avesse'],
      ['fare', 'facesse'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence.', items: [
      { q: 'Non ho tempo, quindi non viaggio.', cue: 'Se', a: ['Se avessi tempo, viaggerei.'], why: '*Se avessi tempo, viaggerei.*' },
      { q: 'Voglio che tu venga.', cue: 'Vorrei che', a: ['Vorrei che tu venissi.'], why: 'A softer wish: *vorrei che tu venissi*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Se io [sarei] più giovane, studierei in Italia.', a: ['fossi'], why: 'After *se*, the congiuntivo imperfetto.' },
      { s: 'Parla come se [è] il capo.', a: ['fosse'], why: '*Come se* + congiuntivo imperfetto.' },
    ] },
  ],
};
