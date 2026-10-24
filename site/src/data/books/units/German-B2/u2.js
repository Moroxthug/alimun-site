// German B2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'The world of work',
  goal: 'Talk about work in a professional register and get through a job interview. Use the passive with modal verbs, its alternatives and fixed noun-verb phrases.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['passive-modal', 'passive-alternatives', 'noun-verb-phrases', 'job-interview'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'The passive with modal verbs',
      about: 'Say what must, can or should be done: muss erledigt werden.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'At work we often say what has to be done, not who does it. For this, German uses the **passive with a modal verb**: the modal verb is conjugated, and at the end come the Partizip II and *werden*.\n\nThe modal verb agrees with the subject: *Der Bericht **muss** … werden. Die Berichte **müssen** … werden.*' },
          { t: 'examples', items: [
            { s: 'Der Bericht **muss** bis Freitag **erledigt werden**.', n: 'Modal verb in second place, *erledigt werden* at the end.' },
            { s: 'Die Unterlagen **können** auch online **eingereicht werden**.', n: 'Plural subject, so *können*.' },
            { s: 'Das Meeting **musste** leider **verschoben werden**.', n: 'In the past, only the modal verb changes: Präteritum *musste*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Active and passive with a modal verb', explain: ['head'], head: ['Active', 'Passive'], rows: [
            ['Wir müssen den Vertrag unterschreiben.', 'Der Vertrag muss unterschrieben werden.'],
            ['Man kann die Unterlagen online einreichen.', 'Die Unterlagen können online eingereicht werden.'],
            ['Wir sollten die Kunden informieren.', 'Die Kunden sollten informiert werden.'],
            ['Man darf die Daten nicht weitergeben.', 'Die Daten dürfen nicht weitergegeben werden.'],
            ['Wir mussten das Meeting verschieben.', 'Das Meeting musste verschoben werden.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a subordinate clause, the modal verb goes to the very end, after *werden*: *Ich weiß, dass der Vertrag unterschrieben werden **muss**.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Die Rechnung ___ bis Ende des Monats bezahlt werden.', o: ['muss', 'müssen', 'wird'], why: 'The subject *die Rechnung* is singular: *muss … bezahlt werden*.' },
            { q: 'Diese Fragen können morgen im Team ___ werden.', o: ['besprochen', 'besprechen', 'besprach'], why: 'The passive needs the Partizip II: *besprochen werden*.' },
            { q: 'Wir wissen noch nicht, ob das Projekt verlängert ___.', o: ['werden kann', 'kann werden', 'kann worden'], why: 'In a subordinate clause the modal verb comes last: *verlängert werden kann*.' },
            { q: 'Der Termin ___ letzte Woche verschoben werden.', o: ['musste', 'muss', 'mussten'], why: '*Letzte Woche* is in the past, and *der Termin* is singular: *musste*.' },
            { q: 'Die Bewerbungen ___ nur per E-Mail geschickt werden.', o: ['dürfen', 'darf', 'dürft'], why: 'The subject *die Bewerbungen* is plural: *dürfen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Der Antrag muss bis Freitag ___ werden. (einreichen)', a: ['eingereicht'], why: 'Separable verb: *ein + ge + reicht*.' },
            { q: 'Die neuen Kolleginnen sollen gut ___ werden. (einarbeiten)', a: ['eingearbeitet'], why: 'Separable verb: *ein + ge + arbeitet*.' },
            { q: 'Ich glaube, dass das Problem schnell gelöst werden ___. (können)', a: ['kann'], why: 'Subordinate clause: the modal verb goes to the end, after *werden*.' },
            { q: 'Die Präsentation ___ gestern noch übersetzt werden. (müssen)', a: ['musste'], why: '*Gestern*: Präteritum of the modal verb, *musste*.' },
            { q: 'Kann die Besprechung auf Montag ___ werden? (verschieben)', a: ['verschoben'], why: '*verschieben → verschoben*, inseparable prefix, no *ge-*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Die Daten dürfen nicht weitergegeben werden.', why: 'Modal verb in second place, *weitergegeben werden* at the end.' },
            { a: 'Muss der Vertrag unterschrieben werden?', why: 'Yes/no question: the modal verb comes first.' },
            { a: 'Ich weiß, dass das erledigt werden muss.', why: 'In the *dass* clause, the modal verb comes last.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Alternatives to the passive',
      about: 'Say the same thing with sich lassen, -bar and sein + zu.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'Formal German has three common alternatives to the passive with *können* or *müssen*. They are shorter and very frequent in letters, rules and reports.' },
          { t: 'table', caption: 'Three alternatives', explain: ['head', 'col0'], head: ['Form', 'Example', 'Same as'], rows: [
            ['*sich lassen* + infinitive', 'Das Problem lässt sich lösen.', 'Das Problem kann gelöst werden.'],
            ['adjective in *-bar*', 'Das Problem ist lösbar.', 'Das Problem kann gelöst werden.'],
            ['*sein* + *zu* + infinitive', 'Der Fehler ist leicht zu finden.', 'Der Fehler kann leicht gefunden werden.'],
            ['*sein* + *zu* + infinitive', 'Das Formular ist bis Freitag abzugeben.', 'Das Formular muss bis Freitag abgegeben werden.'],
          ] },
        ],
        [
          { t: 'text', md: '*Sich lassen* and *-bar* always mean **can**. *Sein + zu* can mean **can** or **must**; the context tells you which. Rules, deadlines and instructions usually mean *must*: *Die Gebühr ist sofort zu bezahlen.*' },
          { t: 'tip', art: 'owl', md: 'Adjectives in *-bar* come from verbs with an Akkusativ object: *machen → machbar, erreichen → erreichbar*. The prefix *un-* makes the opposite: *unlösbar, unvermeidbar*. With separable verbs, *zu* goes in the middle: *abzugeben, einzureichen*.' },
          { t: 'ex', kind: 'match', h: 'What does each adjective mean?', pairs: [
            ['machbar', 'kann gemacht werden'],
            ['erreichbar', 'kann erreicht werden'],
            ['vermeidbar', 'kann vermieden werden'],
            ['lesbar', 'kann gelesen werden'],
            ['unbezahlbar', 'kann nicht bezahlt werden'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the sentence mean?', items: [
            { q: 'Die Aufgabe ist bis morgen zu erledigen.', o: ['Die Aufgabe muss bis morgen erledigt werden.', 'Die Aufgabe wurde schon erledigt.', 'Die Aufgabe wird morgen von allen erledigt.'], why: 'A deadline with *sein + zu*: it means *must*.' },
            { q: 'Das lässt sich nicht ändern.', o: ['Das kann nicht geändert werden.', 'Das soll nicht geändert werden.', 'Das wurde nicht geändert.'], why: '*sich lassen* + infinitive means *can*.' },
            { q: 'Herr Novak ist heute telefonisch nicht erreichbar.', o: ['Er kann heute telefonisch nicht erreicht werden.', 'Er will heute nicht telefonieren.', 'Er darf heute nicht angerufen werden.'], why: '*erreichbar* means *kann erreicht werden*.' },
            { q: 'Dieser Plan ist kaum zu verwirklichen.', o: ['Dieser Plan kann kaum verwirklicht werden.', 'Dieser Plan muss sofort verwirklicht werden.', 'Dieser Plan wird bald verwirklicht.'], why: 'With *kaum*, *sein + zu* means *can*: it can hardly be done.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Say it another way. Write the missing word.', items: [
            { q: 'Das Problem kann schnell gelöst werden. → Das Problem lässt ___ schnell lösen.', a: ['sich'], why: '*sich lassen* + infinitive.' },
            { q: 'Die Kosten können nicht vorhergesagt werden. → Die Kosten sind nicht ___. (vorhersagen)', a: ['vorhersagbar'], why: '*vorhersagen → vorhersagbar*: can be predicted.' },
            { q: 'Die Unterlagen müssen bis Freitag eingereicht werden. → Die Unterlagen sind bis Freitag ___.', a: ['einzureichen'], why: '*sein + zu*. With a separable verb, *zu* goes in the middle: *einzureichen*.' },
            { q: 'Der Fehler kann leicht erklärt werden. → Der Fehler ___ sich leicht erklären.', a: ['lässt'], why: '*Der Fehler* is singular: *lässt sich*.' },
            { q: 'Der Vertrag kann jederzeit gekündigt werden. → Der Vertrag ist jederzeit ___. (kündigen)', a: ['kündbar'], why: '*kündigen → kündbar*. The *-ig* of the verb drops.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Noun-verb phrases',
      about: 'Formal phrases like eine Entscheidung treffen and zur Verfügung stehen.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In professional and official German, many ideas are expressed by a **noun-verb phrase**: a noun that carries the meaning and a verb with little meaning of its own, such as *treffen, stellen, nehmen, kommen*. These phrases sound more formal than the simple verb. The verb is fixed: you *treffen* a decision, you do not *machen* one.' },
          { t: 'table', caption: 'Noun-verb phrases at work', explain: ['head'], quiz: true, head: ['Phrase', 'Simpler form', 'Example'], rows: [
            ['eine Entscheidung treffen', 'entscheiden', 'Wir müssen bis Montag eine Entscheidung treffen.'],
            ['in Frage kommen', 'möglich sein', 'Dieser Bewerber kommt für die Stelle nicht in Frage.'],
            ['zur Verfügung stehen', 'verfügbar sein', 'Für Fragen stehe ich Ihnen gern zur Verfügung.'],
            ['zur Verfügung stellen', 'bereitstellen', 'Die Firma stellt uns einen Laptop zur Verfügung.'],
            ['einen Antrag stellen', 'beantragen', 'Sie hat einen Antrag auf Elternzeit gestellt.'],
            ['Verantwortung übernehmen', 'verantwortlich sein', 'Er übernimmt die Verantwortung für das Projekt.'],
            ['Kritik üben an', 'kritisieren', 'Das Team übte Kritik an den neuen Arbeitszeiten.'],
            ['in Anspruch nehmen', 'nutzen', 'Viele nehmen das Angebot in Anspruch.'],
            ['zum Abschluss bringen', 'abschließen', 'Wir bringen das Projekt im Juni zum Abschluss.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'Learn the whole phrase with its article and preposition: *zur Verfügung*, *in Anspruch*. In the Perfekt or the passive, only the verb changes: *Wir haben eine Entscheidung getroffen. Eine Entscheidung wurde getroffen.* You will also see *infrage kommen*, written as one word. Both spellings are correct.' },
          { t: 'ex', kind: 'match', h: 'Which verb goes with each noun?', pairs: [
            ['eine Entscheidung', 'treffen'],
            ['einen Antrag', 'stellen'],
            ['Verantwortung', 'übernehmen'],
            ['in Anspruch', 'nehmen'],
            ['Kritik', 'üben'],
            ['zum Abschluss', 'bringen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right verb.', items: [
            { q: 'Für diese Stelle ___ nur Bewerber mit Berufserfahrung in Frage.', o: ['kommen', 'stehen', 'stellen'], why: '*in Frage kommen*: to be possible, to be an option.' },
            { q: 'Bei Problemen ___ Ihnen unser Team jederzeit zur Verfügung.', o: ['steht', 'stellt', 'kommt'], why: '*zur Verfügung stehen*: to be available. *Zur Verfügung stellen* needs an Akkusativ object.' },
            { q: 'Wir haben endlich eine Entscheidung ___.', o: ['getroffen', 'gemacht', 'genommen'], why: '*eine Entscheidung treffen*, Perfekt *getroffen*.' },
            { q: 'Sie möchte einen Antrag auf Teilzeit ___.', o: ['stellen', 'treffen', 'bringen'], why: '*einen Antrag stellen*: to apply officially.' },
            { q: 'Die Chefin hat die volle Verantwortung für den Fehler ___.', o: ['übernommen', 'genommen', 'getroffen'], why: '*Verantwortung übernehmen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Say it more formally. Write the missing word.', items: [
            { q: 'Wir müssen schnell entscheiden. → Wir müssen schnell eine Entscheidung ___.', a: ['treffen'], why: '*entscheiden = eine Entscheidung treffen*' },
            { q: 'Die Firma gibt uns ein Auto. → Die Firma stellt uns ein Auto zur ___.', a: ['Verfügung'], why: '*zur Verfügung stellen*: to provide.' },
            { q: 'Viele nutzen die Beratung. → Viele nehmen die Beratung in ___.', a: ['Anspruch'], why: '*in Anspruch nehmen*: to use a service or an offer.' },
            { q: 'Diese Lösung ist nicht möglich. → Diese Lösung kommt nicht in ___.', a: ['Frage'], why: '*in Frage kommen*: to be possible.' },
            { q: 'Wir schließen das Projekt im Mai ab. → Wir bringen das Projekt im Mai zum ___.', a: ['Abschluss'], why: '*zum Abschluss bringen*: to finish.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ready for the interview',
      about: 'Read tips for a job interview.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Gut vorbereitet ins Vorstellungsgespräch', md: 'Eine Einladung zum Vorstellungsgespräch ist ein großer Schritt. Damit das Gespräch gelingt, sollte es gründlich vorbereitet werden. Informieren Sie sich vorher genau über das Unternehmen: Was wird dort hergestellt oder angeboten? Wer sind die Kunden? Die meisten Informationen lassen sich leicht auf der Website der Firma finden.\n\nÜberlegen Sie sich außerdem Antworten auf typische Fragen. Fast immer werden Sie gebeten, sich kurz vorzustellen. Dabei sollten Sie nicht Ihren ganzen Lebenslauf erzählen, sondern zwei oder drei Erfahrungen auswählen, die für die Stelle wichtig sind. Auch die Frage nach Ihren Schwächen ist kaum zu vermeiden. Nennen Sie eine echte Schwäche und erklären Sie, was Sie dagegen tun.\n\nAm Ende des Gesprächs dürfen Sie selbst Fragen stellen. Nutzen Sie diese Chance! Fragen nach dem Team, der Einarbeitung oder den nächsten Schritten zeigen, dass Sie sich wirklich für die Stelle interessieren. Das Gehalt muss nicht im ersten Gespräch angesprochen werden. Oft ist dafür in einer zweiten Runde Zeit.\n\nViele Gespräche finden heute online statt. Dann muss die Technik vorher getestet werden: Funktionieren Kamera und Mikrofon? Ist der Hintergrund ruhig und ordentlich?\n\nUnd nach dem Gespräch? Wenn Sie nach zwei Wochen noch keine Antwort bekommen haben, können Sie freundlich per E-Mail nachfragen. Bis eine Entscheidung getroffen wird, kann es manchmal dauern, vor allem wenn mehrere Bewerber in Frage kommen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Informationen über die Firma sind meistens schwer zu finden.', a: 'f', why: '*Die meisten Informationen lassen sich leicht … finden.*' },
            { q: 'Die Frage nach den Schwächen wird nur selten gestellt.', a: 'f', why: 'It *ist kaum zu vermeiden*: it almost always comes.' },
            { q: 'Fragen nach der Einarbeitung zeigen Interesse an der Stelle.', a: 't', why: 'Questions about the team, the training or the next steps show real interest.' },
            { q: 'Über das Gehalt muss man schon im ersten Gespräch sprechen.', a: 'f', why: '*Das Gehalt muss nicht im ersten Gespräch angesprochen werden.*' },
            { q: 'Online-Gespräche sind meistens kürzer als Gespräche vor Ort.', a: 'ng', why: 'The text does not compare how long they are.' },
            { q: 'Nach zwei Wochen ohne Antwort darf man höflich nachfragen.', a: 't', why: '*… können Sie freundlich per E-Mail nachfragen.*' },
            { q: 'Man sollte Kopien der Zeugnisse zum Gespräch mitbringen.', a: 'ng', why: 'The text does not mention certificates.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the text.', items: [
            { q: '„Die meisten Informationen lassen sich leicht … finden.“ Was bedeutet das?', o: ['Die Informationen können leicht gefunden werden.', 'Die Informationen müssen gefunden werden.', 'Man lässt andere die Informationen finden.'], why: '*sich lassen* + infinitive means *can* + passive.' },
            { q: '„Auch die Frage nach Ihren Schwächen ist kaum zu vermeiden.“ Was bedeutet das?', o: ['Diese Frage kann kaum vermieden werden.', 'Diese Frage muss vermieden werden.', 'Diese Frage wird kaum gestellt.'], why: 'With *kaum*, *sein + zu* means *can*: you can hardly avoid it.' },
            { q: '„Bis eine Entscheidung getroffen wird …“: Wie kann man das auch sagen?', o: ['Bis entschieden wird …', 'Bis man sich trifft …', 'Bis man eine Frage stellt …'], why: '*eine Entscheidung treffen = entscheiden*. Here it is in the passive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Unterlagen ___ bis Montag eingereicht werden.', o: ['müssen', 'muss', 'werden'], why: 'Plural subject: *müssen … eingereicht werden*.' },
      { q: 'Das Problem lässt ___ leicht lösen.', o: ['sich', 'es', 'man'], why: '*sich lassen* + infinitive: it can be solved.' },
      { q: 'Für diese Aufgabe kommt nur Frau Demir in ___.', o: ['Frage', 'Verfügung', 'Anspruch'], why: '*in Frage kommen*: to be possible.' },
      { q: 'Seine Handschrift ist kaum ___.', o: ['lesbar', 'lesend', 'gelesen'], why: '*lesbar*: can be read.' },
      { q: 'Ich weiß nicht, ob der Termin verschoben ___.', o: ['werden kann', 'kann werden', 'können wird'], why: 'Subordinate clause: *verschoben werden kann*, modal verb last.' },
      { q: 'Die Firma ___ allen Mitarbeitern ein Ticket zur Verfügung.', o: ['stellt', 'steht', 'nimmt'], why: '*zur Verfügung stellen* takes an Akkusativ object: *ein Ticket*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Das Formular ist bis Freitag ___. (ausfüllen)', a: ['auszufüllen'], why: '*sein + zu* with a separable verb: *auszufüllen*.' },
      { q: 'Wir haben noch keine Entscheidung ___. (treffen)', a: ['getroffen'], why: '*eine Entscheidung treffen*, Perfekt *getroffen*.' },
      { q: 'Der Vertrag musste noch einmal ___ werden. (prüfen)', a: ['geprüft'], why: 'Passive with a modal verb: Partizip II + *werden*.' },
      { q: 'Diese Kosten wären ___ gewesen. (vermeiden, -bar)', a: ['vermeidbar'], why: '*vermeiden → vermeidbar*: could be avoided.' },
      { q: 'Bei Fragen stehe ich Ihnen gern zur ___.', a: ['Verfügung'], why: '*zur Verfügung stehen*: to be available.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Die Daten dürfen nicht gespeichert werden.', why: 'Modal verb second, *gespeichert werden* at the end.' },
      { a: 'Das lässt sich nicht ändern.', why: '*lässt sich* + infinitive at the end.' },
      { a: 'Wer trifft die Entscheidung?', why: '*die Entscheidung treffen*: the verb comes after the question word.' },
    ] },
  ],
};
