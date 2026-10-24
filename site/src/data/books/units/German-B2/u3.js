// German B2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Science and technology',
  goal: 'Understand and explain processes and discoveries. Turn verbs into nouns, use prepositions with the Genitiv and describe a process step by step.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['nominalisation', 'genitive-prepositions', 'process-connectors', 'science'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'From verb to noun',
      about: 'Nominalisation: entwickeln → die Entwicklung.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Scientific and technical texts use many nouns where speech uses verbs. This is called **nominalisation**. The most common way is the ending **-ung**, and these nouns are always feminine: *entwickeln → die Entwicklung*. Verbs in *-ieren* often become nouns in *-ion*. Many other nouns are formed from the verb stem, sometimes with a vowel change. Learn these with their article.' },
          { t: 'table', caption: 'Verb and noun', explain: ['head'], quiz: true, head: ['Verb', 'Noun'], rows: [
            ['entwickeln', 'die Entwicklung'],
            ['untersuchen', 'die Untersuchung'],
            ['messen', 'die Messung'],
            ['produzieren', 'die Produktion'],
            ['analysieren', 'die Analyse'],
            ['beginnen', 'der Beginn'],
            ['steigen', 'der Anstieg'],
            ['verbrauchen', 'der Verbrauch'],
            ['wachsen', 'das Wachstum'],
          ] },
        ],
        [
          { t: 'text', md: 'When you turn a sentence into a noun phrase, other words change too. The object becomes a **Genitiv**: *das Gerät testen → der Test **des Geräts***. The person who does it follows with *durch* or *von*. An adverb becomes an adjective: *schnell wachsen → das schnelle Wachstum*.\n\nConjunctions become prepositions: *nachdem → nach*, *bevor → vor*, *weil → wegen*, *während → während*.' },
          { t: 'examples', items: [
            { s: 'Die Forscher entwickeln einen Impfstoff. → die **Entwicklung** eines Impfstoffs durch die Forscher', n: 'The object becomes a Genitiv. The people follow with *durch*.' },
            { s: 'Die Preise steigen stark. → der starke **Anstieg** der Preise', n: 'The subject becomes a Genitiv; *stark* becomes an adjective.' },
            { s: 'Nachdem die Daten analysiert wurden, … → **Nach der Analyse** der Daten …', n: 'The clause becomes a short phrase with a preposition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the noun for each verb.', pairs: [
            ['erfinden', 'die Erfindung'],
            ['beweisen', 'der Beweis'],
            ['versuchen', 'der Versuch'],
            ['verbessern', 'die Verbesserung'],
            ['erklären', 'die Erklärung'],
            ['entdecken', 'die Entdeckung'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the noun.', items: [
            { q: 'Die ___ des Impfstoffs dauerte zehn Jahre. (entwickeln)', a: ['Entwicklung'], why: '*entwickeln → die Entwicklung*' },
            { q: 'Nach der ___ der Daten schrieben wir den Bericht. (analysieren)', a: ['Analyse'], why: '*analysieren → die Analyse*' },
            { q: 'Der ___ der Temperatur ist gefährlich. (steigen)', a: ['Anstieg'], why: '*steigen → der Anstieg*, a masculine noun.' },
            { q: 'Die ___ von Elektroautos ist noch teuer. (produzieren)', a: ['Produktion'], why: 'Verbs in *-ieren* often become nouns in *-ion*.' },
            { q: 'Die ___ des Penicillins veränderte die Medizin. (entdecken)', a: ['Entdeckung'], why: '*entdecken → die Entdeckung*' },
            { q: 'Der ___ an Wasser ist in diesem Jahr gesunken. (verbrauchen)', a: ['Verbrauch'], why: '*verbrauchen → der Verbrauch*, the stem without an ending.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which noun phrase says the same?', items: [
            { q: 'Die Forscher testen das Medikament.', o: ['der Test des Medikaments durch die Forscher', 'der Test der Forscher des Medikaments', 'das Testen das Medikament durch die Forscher'], why: 'The object *das Medikament* becomes a Genitiv; the people follow with *durch*.' },
            { q: 'Nachdem das Experiment beendet war, …', o: ['Nach dem Ende des Experiments …', 'Vor dem Ende des Experiments …', 'Während des Experiments …'], why: '*nachdem → nach* + Dativ.' },
            { q: 'Weil die Kosten steigen, …', o: ['Wegen der steigenden Kosten …', 'Trotz der steigenden Kosten …', 'Wegen die Kosten steigen …'], why: '*weil → wegen* + Genitiv. The verb can become a participle: *die steigenden Kosten*.' },
            { q: 'Die Stadt baut das Netz schnell aus.', o: ['der schnelle Ausbau des Netzes', 'der Ausbau schnell des Netzes', 'das schnelle Ausbauen dem Netz'], why: 'The adverb *schnell* becomes an adjective; the object becomes a Genitiv.' },
            { q: 'Bevor man das Gerät benutzt, …', o: ['Vor der Benutzung des Geräts …', 'Nach der Benutzung des Geräts …', 'Vor die Benutzung des Geräts …'], why: '*bevor → vor* + Dativ: *vor der Benutzung*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Prepositions with the Genitiv',
      about: 'aufgrund, infolge, mithilfe, innerhalb and more.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Formal and scientific German uses a group of prepositions that take the **Genitiv**. In everyday speech you mostly hear *wegen*, but in reports and articles these are very common.' },
          { t: 'table', caption: 'Prepositions with the Genitiv', explain: ['head', 'col1'], quiz: true, head: ['Preposition', 'Meaning', 'Example'], rows: [
            ['aufgrund', 'because of', 'Aufgrund des schlechten Wetters wurde der Start verschoben.'],
            ['infolge', 'as a result of', 'Infolge des Stromausfalls fielen alle Rechner aus.'],
            ['mithilfe', 'with the help of', 'Mithilfe eines neuen Verfahrens lässt sich Wasser reinigen.'],
            ['innerhalb', 'within', 'Die Ergebnisse liegen innerhalb einer Woche vor.'],
            ['außerhalb', 'outside', 'Das Labor liegt außerhalb der Stadt.'],
            ['anhand', 'on the basis of, using', 'Anhand der Daten lässt sich der Trend erkennen.'],
            ['hinsichtlich', 'regarding', 'Hinsichtlich der Kosten gibt es noch Fragen.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'When there is no article, use *von* + Dativ instead: *innerhalb **von** zwei Wochen, aufgrund **von** Problemen, mithilfe **von** Computern*. *Mithilfe* can also be written *mit Hilfe*.' },
          { t: 'ex', kind: 'choice', h: 'Choose the right preposition.', items: [
            { q: '___ des starken Regens wurde das Experiment abgebrochen.', o: ['Aufgrund', 'Mithilfe', 'Innerhalb'], why: 'The rain is the reason: *aufgrund*.' },
            { q: 'Die Daten werden ___ einer speziellen Software ausgewertet.', o: ['mithilfe', 'infolge', 'außerhalb'], why: 'The software is the tool: *mithilfe*.' },
            { q: 'Das Paket wird ___ von drei Tagen geliefert.', o: ['innerhalb', 'aufgrund', 'anhand'], why: 'A period of time: *innerhalb*, here with *von* because there is no article.' },
            { q: '___ dieser Beispiele erklärt die Dozentin die Regel.', o: ['Anhand', 'Infolge', 'Außerhalb'], why: 'She uses the examples as a basis: *anhand*.' },
            { q: 'Die Firma hat ___ des Datenschutzes noch keine Antwort gegeben.', o: ['hinsichtlich', 'mithilfe', 'infolge'], why: 'The answer is about data protection: *hinsichtlich*, regarding.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the Genitiv form.', items: [
            { q: 'Aufgrund ___ hohen Kosten wurde das Projekt gestoppt. (die)', a: ['der'], why: 'Genitiv plural: *der*.' },
            { q: 'Innerhalb ___ Jahres hat sich die Technik stark verändert. (ein)', a: ['eines'], why: 'Genitiv masculine: *eines Jahres*.' },
            { q: 'Mithilfe ___ neuen Mikroskops sieht man kleinste Zellen. (das)', a: ['des'], why: 'Genitiv neuter: *des neuen Mikroskops*.' },
            { q: 'Infolge eines ___ Fehlers stürzte das System ab. (technisch)', a: ['technischen'], why: 'Adjective after *eines* in the Genitiv: *-en*.' },
            { q: 'Das Institut liegt außerhalb ___ Stadt. (die)', a: ['der'], why: 'Genitiv feminine: *der Stadt*.' },
            { q: 'Anhand ___ Messungen lässt sich der Verlauf zeigen. (unser)', a: ['unserer'], why: 'Genitiv plural of *unser*: *unserer*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Aufgrund des Wetters fiel der Start aus.', why: 'The phrase with *aufgrund* comes first, so the verb follows directly. *aus* goes to the end.' },
            { a: 'Innerhalb einer Woche lagen die Ergebnisse vor.', why: 'The time phrase comes first, then the verb *lagen*. *vor* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Describing a process',
      about: 'Explain steps and consequences with the right connectors.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To describe a technical process, German usually uses the **passive** in the present: what happens matters more than who does it. Connectors show the order of the steps and their consequences.' },
          { t: 'examples', items: [
            { s: '**Zuerst** wird das Altpapier gesammelt und sortiert.', n: 'The first step. *Zuerst* takes the first place, so the verb follows directly.' },
            { s: '**Anschließend** werden die Fasern mit Wasser gemischt.', n: 'The next step: *anschließend*, *dann* or *danach*.' },
            { s: 'Die Druckfarbe wird entfernt, **sodass** das Papier wieder hell wird.', n: 'A consequence with *sodass*: the verb goes to the end.' },
            { s: '**Schließlich** wird das neue Papier getrocknet.', n: 'The last step: *schließlich* or *zum Schluss*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Connectors for steps and consequences', explain: ['head', 'col1', 'col2'], head: ['Connector', 'Use', 'Word order'], rows: [
            ['zuerst, zunächst', 'the first step', 'verb second'],
            ['dann, danach, anschließend', 'the next step', 'verb second'],
            ['schließlich, zum Schluss', 'the last step', 'verb second'],
            ['deshalb, daher, folglich', 'a consequence', 'verb second'],
            ['dadurch', 'a result, or the way something happens', 'verb second'],
            ['sodass', 'a consequence', 'verb at the end'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not mix up *danach* and *nachdem*. *Danach* means "after that" and the verb comes second: *Danach wird es getrocknet.* *Nachdem* starts a subordinate clause, so the verb goes to the end: *Nachdem es getrocknet wurde, …*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right connector.', items: [
            { q: 'Das Wasser wird erhitzt, ___ es verdampft.', o: ['sodass', 'deshalb', 'zuerst'], why: 'The verb *verdampft* is at the end, so you need the conjunction *sodass*.' },
            { q: 'Die Messung war fehlerhaft. ___ müssen wir sie wiederholen.', o: ['Deshalb', 'Sodass', 'Nachdem'], why: 'A consequence with the verb in second place: *deshalb*.' },
            { q: '___ wird das Gerät eingeschaltet, dann wartet man zwei Minuten.', o: ['Zuerst', 'Schließlich', 'Folglich'], why: 'The first step, followed by *dann*: *zuerst*.' },
            { q: 'Die Teile werden geprüft. ___ werden sie verpackt.', o: ['Danach', 'Nachdem', 'Bevor'], why: 'The next step with the verb in second place: *danach*. *Nachdem* and *bevor* need the verb at the end.' },
            { q: 'Man trennt den Müll. ___ kann mehr Material wiederverwertet werden.', o: ['Dadurch', 'Sodass', 'Zuerst'], why: '*Dadurch*: in this way, as a result. *Sodass* would need the verb at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the description of the process.', items: [
            { q: 'Zuerst ___ das Altpapier gesammelt. (werden)', a: ['wird'], why: 'Passive in the present: *das Altpapier* is singular, so *wird*.' },
            { q: 'Dann werden die Fasern von der Druckfarbe ___. (trennen)', a: ['getrennt'], why: 'Passive: *werden* + Partizip II *getrennt*.' },
            { q: 'Am Ende ___ die Papierbahnen getrocknet. (werden)', a: ['werden'], why: '*die Papierbahnen* is plural: *werden*.' },
            { q: 'Der Versuch dauerte sehr lange, ___ wir erst spät fertig waren.', a: ['sodass', 'so dass'], why: 'A consequence with the verb at the end: *sodass*, also written *so dass*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Anschließend wird das Papier getrocknet.', why: 'Connector first, then the verb *wird*, the participle at the end.' },
            { a: 'Dann werden die Fasern mit Wasser gemischt.', why: '*Dann* takes the first place; *werden* comes second.' },
            { a: 'Der Akku war leer, sodass das Gerät ausging.', why: 'After *sodass*, the verb goes to the end.' },
            { a: 'Folglich muss der Versuch wiederholt werden.', why: '*Folglich* takes the first place, so the modal verb follows directly.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'How a heat pump works',
      about: 'Read a popular-science article about a technical process.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Wie eine Wärmepumpe funktioniert', md: 'In vielen Neubauten wird heute keine Gas- oder Ölheizung mehr eingebaut, sondern eine Wärmepumpe. Doch wie kann ein Gerät ein Haus mithilfe kalter Außenluft heizen? Das Prinzip ist älter, als viele denken, und fast jeder kennt es aus der eigenen Küche: Ein Kühlschrank funktioniert ganz ähnlich, nur in umgekehrter Richtung.\n\nIm Inneren der Wärmepumpe befindet sich ein Kreislauf mit einer besonderen Flüssigkeit, dem Kältemittel. Es verdampft schon bei sehr niedrigen Temperaturen. Zunächst wird das Kältemittel an der kalten Außenluft vorbeigeführt. Auch Luft mit wenigen Grad enthält noch Wärmeenergie, sodass das Kältemittel verdampft. Anschließend wird der Dampf von einem Verdichter stark zusammengepresst. Dadurch steigt seine Temperatur deutlich an. Diese Wärme wird dann an das Wasser der Heizung abgegeben. Dabei kühlt das Kältemittel ab und wird wieder flüssig. Schließlich sinkt in einem Ventil der Druck, und der Kreislauf beginnt von vorn.\n\nFür den Verdichter braucht die Wärmepumpe Strom. Der größte Teil der Energie stammt jedoch aus der Umgebung. Folglich erzeugt das Gerät deutlich mehr Wärme, als es an Strom verbraucht.\n\nGanz ohne Nachteile ist die Technik allerdings nicht. Aufgrund der hohen Anschaffungskosten zögern viele Hausbesitzer. Außerdem arbeitet eine Wärmepumpe in schlecht gedämmten Altbauten weniger effizient. Fachleute empfehlen daher, sich vor dem Einbau gründlich beraten zu lassen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Eine Wärmepumpe funktioniert nach einem ähnlichen Prinzip wie ein Kühlschrank.', a: 't', why: '*Ein Kühlschrank funktioniert ganz ähnlich, nur in umgekehrter Richtung.*' },
            { q: 'Das Kältemittel verdampft erst bei hohen Temperaturen.', a: 'f', why: '*Es verdampft schon bei sehr niedrigen Temperaturen.*' },
            { q: 'Durch das Zusammenpressen wird der Dampf wärmer.', a: 't', why: '*Dadurch steigt seine Temperatur deutlich an.*' },
            { q: 'Eine Wärmepumpe braucht keinen Strom.', a: 'f', why: '*Für den Verdichter braucht die Wärmepumpe Strom.*' },
            { q: 'Das Prinzip der Wärmepumpe ist ganz neu.', a: 'f', why: '*Das Prinzip ist älter, als viele denken.*' },
            { q: 'In schlecht gedämmten Altbauten arbeitet eine Wärmepumpe besser.', a: 'f', why: 'It works *weniger effizient* there.' },
            { q: 'Die Beratung vor dem Einbau ist kostenlos.', a: 'ng', why: 'The text does not say what the advice costs.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the process and the language of the text.', items: [
            { q: 'Was passiert direkt nach dem Verdampfen?', o: ['Der Dampf wird zusammengepresst.', 'Der Druck sinkt im Ventil.', 'Das Kältemittel wird wieder flüssig.'], why: '*Anschließend wird der Dampf von einem Verdichter stark zusammengepresst.*' },
            { q: '„Aufgrund der hohen Anschaffungskosten zögern viele.“ Welcher Satz bedeutet dasselbe?', o: ['Weil die Anschaffung viel kostet, zögern viele.', 'Obwohl die Anschaffung viel kostet, zögern viele.', 'Nachdem die Anschaffung viel gekostet hat, zögern viele.'], why: '*aufgrund* gives a reason, like *weil*.' },
            { q: '„Folglich erzeugt das Gerät …“: Was drückt „folglich“ aus?', o: ['eine Folge', 'einen Gegensatz', 'einen ersten Schritt'], why: '*folglich* introduces a consequence, like *deshalb*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die ___ des neuen Motors hat drei Jahre gedauert.', o: ['Entwicklung', 'Entwickeln', 'Entwicklungen'], why: '*die Entwicklung*: feminine singular, matching *die* and *hat*.' },
      { q: '___ eines technischen Fehlers wurde die Anlage abgeschaltet.', o: ['Infolge', 'Innerhalb', 'Mithilfe'], why: 'The error is the cause: *infolge*.' },
      { q: 'Das Metall wird erhitzt, ___ es weich wird.', o: ['sodass', 'deshalb', 'danach'], why: 'The verb is at the end, so the conjunction *sodass*.' },
      { q: 'Die Ergebnisse liegen innerhalb ___ Monats vor.', o: ['eines', 'einem', 'ein'], why: '*innerhalb* + Genitiv: *eines Monats*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nach der ___ der Proben schreiben wir den Bericht. (untersuchen)', a: ['Untersuchung'], why: '*untersuchen → die Untersuchung*' },
      { q: 'Mithilfe ___ Computers wurden die Daten ausgewertet. (ein)', a: ['eines'], why: '*mithilfe* + Genitiv: *eines Computers*.' },
      { q: 'Zuerst ___ die Proben gewogen. (werden)', a: ['werden'], why: 'Passive with a plural subject: *werden … gewogen*.' },
      { q: 'Der ___ an Energie ist zu hoch. (verbrauchen)', a: ['Verbrauch'], why: '*verbrauchen → der Verbrauch*' },
      { q: 'Aufgrund ___ starken Windes wurde der Flug gestrichen. (der)', a: ['des'], why: 'Genitiv masculine: *des starken Windes*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the noun for each verb.', pairs: [
      ['messen', 'die Messung'],
      ['steigen', 'der Anstieg'],
      ['beweisen', 'der Beweis'],
      ['wachsen', 'das Wachstum'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Anschließend wird das Glas geschmolzen.', why: 'Connector first, then the verb, the participle at the end.' },
      { a: 'Mithilfe dieser Methode lässt sich Zeit sparen.', why: 'The phrase with *mithilfe* comes first, then the verb *lässt*.' },
    ] },
  ],
};
