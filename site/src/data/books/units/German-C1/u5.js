// German C1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'The language of research',
  goal: 'Read and write a scientific summary in an impersonal style. Learn the passive and the Zustandspassiv, extended participle attributes, hedging, and the verbs that report and weigh results.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['passive', 'participle attributes', 'academic style', 'hedging', 'reporting'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Vorgangspassiv und Zustandspassiv',
      about: 'Describe actions and states without naming the person who acts.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Scientific German hides the person who acts and puts the **object** or the **process** first. The **Vorgangspassiv** (**werden** + Partizip II) describes an **action**: *Die Proben werden untersucht. Die Proben wurden untersucht.* The **Zustandspassiv** (**sein** + Partizip II) describes the **result**: *Die Proben sind untersucht.* Some passive sentences have **no subject** at all and start with **es** or another word: *Es wird viel diskutiert. Hier wird gearbeitet.* To name the person who acts, use **von** + dative; to name a **means** or a **cause**, use **durch** + accusative: *Die Studie wurde von einem Team durchgeführt. Der Schaden wurde durch Hitze verursacht.*' },
          { t: 'table', caption: 'Forms of the passive', explain: ['head', 'col1'], head: ['Form', 'Meaning', 'Example'], rows: [
            ['werden + Partizip II', 'the action (Vorgangspassiv)', 'Die Proben werden untersucht.'],
            ['wurde + Partizip II', 'the action, in the past', 'Die Proben wurden untersucht.'],
            ['sind … worden', 'the action, perfect', 'Die Proben sind untersucht worden.'],
            ['sein + Partizip II', 'the result (Zustandspassiv)', 'Die Proben sind untersucht.'],
            ['es wird … / hier wird …', 'no subject', 'Hier wird viel gearbeitet.'],
            ['von + dative', 'the person who acts', 'von einem Team durchgeführt'],
            ['durch + accusative', 'the means or the cause', 'durch Hitze verursacht'],
          ] },
          { t: 'tip', art: 'owl', md: 'Remember **worden** in the perfect passive, not *geworden*: *Die Proben sind untersucht worden.* The Zustandspassiv has no *worden*: *Die Proben sind untersucht.* The passive without a subject works when the action itself matters: *Es wird gebaut* (Building is going on). In speech, many people prefer **man**: *Man untersucht die Proben.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Die Proben **werden** gerade **untersucht**.', n: 'Vorgangspassiv: the action.' },
            { s: 'Die Proben **sind** bereits **untersucht**.', n: 'Zustandspassiv: the result.' },
            { s: 'Die Proben **sind** gestern **untersucht worden**.', n: 'The perfect passive.' },
            { s: 'Die Studie wurde **von** einem Team durchgeführt.', n: 'The person who acts.' },
            { s: 'Der Schaden wurde **durch** Hitze verursacht.', n: 'The cause.' },
            { s: 'In dem Labor **wird** viel geforscht.', n: 'A passive without a subject.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Action or result? Sort the sentences.', groups: ['action (werden)', 'result (sein)'], explain: ['groups'], items: [
            { s: 'Die Tür wird geschlossen.', g: 0, why: 'Someone is closing it.' },
            { s: 'Die Tür ist geschlossen.', g: 1, why: 'It is closed.' },
            { s: 'Die Probe wurde untersucht.', g: 0, why: 'Someone examined it.' },
            { s: 'Die Probe ist untersucht.', g: 1, why: 'It has been examined.' },
            { s: 'Der Bericht wird geschrieben.', g: 0, why: 'Someone is writing it.' },
            { s: 'Der Bericht ist geschrieben.', g: 1, why: 'It is written.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Die Studie ___ von einem Team durchgeführt. (werden, Präteritum)', a: ['wurde'], why: 'The action in the past: *wurde*.' },
            { q: 'Die Studie ___ inzwischen abgeschlossen. (the result: sein)', a: ['ist'], why: 'The result: *ist abgeschlossen*.' },
            { q: 'Der Text wurde ___ einem Übersetzer geprüft.', a: ['von'], why: 'The person who acts: *von*.' },
            { q: 'Der Schaden wurde ___ Hitze verursacht.', a: ['durch'], why: 'The cause: *durch*.' },
            { q: 'In dem Labor ___ viel geforscht.', a: ['wird'], why: 'A passive without a subject: *wird*.' },
            { q: 'Die Proben sind gestern untersucht ___.', a: ['worden'], why: 'The perfect passive: *worden*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Das Haus wurde ___ einen Sturm zerstört.', o: ['durch', 'von', 'mit'], why: 'A cause: *durch*.' },
            { q: 'Das Buch wurde ___ einer Autorin geschrieben.', o: ['von', 'durch', 'mit'], why: 'A person who acts: *von*.' },
            { q: 'Die Daten sind ausgewertet ___.', o: ['worden', 'geworden', 'werden'], why: 'The perfect passive: *worden*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the passive sentence. Begin with the words in brackets.', items: [
            { q: 'Man untersucht die Proben.', cue: 'Die Proben', a: ['Die Proben werden untersucht.'], why: 'Vorgangspassiv: *werden* + Partizip II.' },
            { q: 'Man untersuchte die Proben.', cue: 'Die Proben', a: ['Die Proben wurden untersucht.'], why: 'The action in the past: *wurden*.' },
            { q: 'Man hat die Proben untersucht.', cue: 'Die Proben', a: ['Die Proben sind untersucht worden.'], why: 'The perfect passive: *sind … worden*.' },
            { q: 'Man arbeitet hier viel.', cue: 'Hier', a: ['Hier wird viel gearbeitet.'], why: 'A passive without a subject.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Das Buch wurde [durch] einer Autorin geschrieben.', a: ['von'], why: 'A person who acts: *von*.' },
            { s: 'Die Proben sind untersucht [geworden].', a: ['worden'], why: 'The perfect passive: *worden*.' },
            { s: 'Der Schaden wurde [von] Hitze verursacht.', a: ['durch'], why: 'A cause: *durch*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Die Proben sind gestern untersucht worden.', why: 'Perfect passive: *sind … worden*.' },
            { a: 'In dem Labor wird viel geforscht.', why: 'A passive without a subject.' },
            { a: 'Die Studie wurde von einem Team durchgeführt.', why: '*Von* + the person who acts.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Erweiterte Partizipialattribute',
      about: 'Read and write long participle attributes and turn them back into relative clauses.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'Written German packs information in front of the noun with **participle attributes**. The **Partizip II** has a **passive** meaning and looks back: *die entwickelte Methode* = *die Methode, die entwickelt wurde*. The **Partizip I** has an **active** meaning and is **simultaneous**: *die steigende Zahl* = *die Zahl, die steigt*. **Zu + Partizip I** means **necessity**: *die zu untersuchende Probe* = *die Probe, die untersucht werden muss*. The attribute can be **extended** with more words: *die von den Forschern vor zwei Jahren entwickelte Methode*. The participle takes an adjective ending.' },
          { t: 'table', caption: 'Participle attribute and relative clause', explain: ['head'], head: ['Attribute', 'Relative clause'], rows: [
            ['die entwickelte Methode', 'die Methode, die entwickelt wurde'],
            ['die steigende Zahl', 'die Zahl, die steigt'],
            ['die zu untersuchende Probe', 'die Probe, die untersucht werden muss'],
            ['die von den Forschern entwickelte Methode', 'die Methode, die von den Forschern entwickelt wurde'],
            ['die seit Jahren steigende Zahl', 'die Zahl, die seit Jahren steigt'],
          ] },
          { t: 'tip', art: 'owl', md: 'To read a long attribute, find the **article** and the **noun** first, then the **participle** just before the noun. Everything between article and participle belongs to the participle: *die [von den Forschern vor zwei Jahren entwickelte] Methode*. If the sentence becomes unclear, use a relative clause instead. In speech, people nearly always use the relative clause.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Die **entwickelte** Methode ist neu.', n: 'Partizip II: passive, completed.' },
            { s: 'Die **steigende** Zahl beunruhigt uns.', n: 'Partizip I: active, at the same time.' },
            { s: 'Die **zu untersuchende** Probe liegt im Labor.', n: '*Zu* + Partizip I: necessity.' },
            { s: 'Die **von den Forschern entwickelte** Methode ist neu.', n: 'An extended attribute.' },
            { s: 'Die **seit Jahren steigende** Zahl beunruhigt uns.', n: 'An extended attribute with a time.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the attribute with the relative clause.', pairs: [
            ['die entwickelte Methode', 'die Methode, die entwickelt wurde'],
            ['die steigende Zahl', 'die Zahl, die steigt'],
            ['die zu untersuchende Probe', 'die Probe, die untersucht werden muss'],
            ['die erwartete Studie', 'die Studie, die erwartet wird'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'die ___ untersuchende Probe (necessity)', a: ['zu'], why: '*Zu* + Partizip I shows necessity.' },
            { q: 'die ___ Zahl (steigen, Partizip I)', a: ['steigende'], why: 'Partizip I + adjective ending: *steigende*.' },
            { q: 'die ___ Methode (entwickeln, Partizip II)', a: ['entwickelte'], why: 'Partizip II + adjective ending: *entwickelte*.' },
            { q: 'Die Forscher haben eine seit Jahren ___ Methode verbessert. (erwarten, Partizip II, feminine accusative)', a: ['erwartete'], why: '*Eine … erwartete Methode*.' },
            { q: 'die den Test ___ Teilnehmer (bestehen, Partizip I)', a: ['bestehenden'], why: 'Partizip I + adjective ending: *bestehenden*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Die ___ Zahl beunruhigt uns. (it rises)', o: ['steigende', 'gestiegene', 'zu steigende'], why: 'Partizip I: active, at the same time.' },
            { q: 'Die ___ Probe liegt im Labor. (it must be examined)', o: ['zu untersuchende', 'untersuchende', 'untersuchte'], why: '*Zu* + Partizip I: necessity.' },
            { q: 'Die ___ Methode ist neu. (it was developed)', o: ['entwickelte', 'entwickelnde', 'zu entwickelnde'], why: 'Partizip II: passive, completed.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Change the attribute into a relative clause.', items: [
            { q: 'Die von den Forschern entwickelte Methode ist neu.', cue: 'Die Methode, die', a: ['Die Methode, die von den Forschern entwickelt wurde, ist neu.'], why: 'Partizip II becomes a passive relative clause.' },
            { q: 'Die seit Jahren steigende Zahl beunruhigt uns.', cue: 'Die Zahl, die', a: ['Die Zahl, die seit Jahren steigt, beunruhigt uns.'], why: 'Partizip I becomes an active relative clause.' },
            { q: 'Die zu untersuchende Probe liegt im Labor.', cue: 'Die Probe, die', a: ['Die Probe, die untersucht werden muss, liegt im Labor.'], why: '*Zu* + Partizip I becomes *muss … werden*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Die [steigte] Zahl beunruhigt uns.', a: ['steigende'], why: 'Partizip I: *steigende*.' },
            { s: 'Die [untersuchende] Probe muss noch geprüft werden.', a: ['zu untersuchende'], why: 'For necessity: *zu* + Partizip I.' },
            { s: 'Die [entwickelnde] Methode wurde von den Forschern vorgestellt.', a: ['entwickelte'], why: 'A passive meaning: Partizip II.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Die von den Forschern entwickelte Methode ist neu.', why: 'The attribute between article and noun.' },
            { a: 'Die seit Jahren steigende Zahl beunruhigt uns.', why: 'The attribute between article and noun.' },
            { a: 'Die zu untersuchende Probe liegt im Labor.', why: '*Zu* + Partizip I before the noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Vorsichtig formulieren',
      about: 'Weigh results with the right verbs, hedge a claim and quote with the Konjunktiv I.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'A scientific text weighs its results with care. The verb shows **how strong** the evidence is: **belegen** and **beweisen** are the strongest, **zeigen** and **hindeuten auf** are medium, and **nahelegen** and **vermuten lassen** are the weakest: *Die Studie belegt, dass … Die Ergebnisse deuten darauf hin, dass … Die Daten legen nahe, dass …* Words such as **tendenziell** (tending to), **gewissermaßen** (in a way), **durchaus** (quite well) and **eher** (rather) hedge a claim. To quote the authors, use the **Konjunktiv I**: *Die Autoren schreiben, die Methode sei zuverlässig.*' },
          { t: 'table', caption: 'Strength of a result', explain: ['head', 'col1'], head: ['Verb', 'Strength', 'Example'], rows: [
            ['belegen / beweisen', 'strong', 'Die Studie belegt, dass die Methode funktioniert.'],
            ['zeigen', 'medium', 'Die Daten zeigen, dass die Zahl steigt.'],
            ['darauf hindeuten, dass', 'medium', 'Die Ergebnisse deuten darauf hin, dass der Effekt real ist.'],
            ['nahelegen', 'weak', 'Die Daten legen nahe, dass die Methode zuverlässig ist.'],
            ['vermuten lassen', 'weak', 'Die Zahlen lassen einen Zusammenhang vermuten.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use the **Konjunktiv I** when you report what an author says, so that your text does not claim it is true: *Die Autorinnen schreiben, der Unterschied sei größer gewesen.* If the Konjunktiv I looks like the indicative (*sie haben*), use the **Konjunktiv II** (*sie hätten*). A hedge such as **tendenziell** or **gewissermaßen** is not a weakness: it is the normal way to be precise about what you do not know.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Die Studie **belegt**, dass die Methode funktioniert.', n: 'Strong.' },
            { s: 'Die Ergebnisse **deuten darauf hin**, dass der Effekt real ist.', n: 'Medium.' },
            { s: 'Die Daten **legen nahe**, dass die Methode zuverlässig ist.', n: 'Weak.' },
            { s: 'Das Verständnis war **tendenziell** besser.', n: 'A hedge.' },
            { s: 'Die Autorinnen schreiben, die Methode **sei** zuverlässig.', n: 'Konjunktiv I.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'How strong is the verb? Sort the verbs.', groups: ['strong', 'medium', 'weak'], explain: ['groups'], items: [
            { s: 'belegen', g: 0, why: 'It proves.' },
            { s: 'beweisen', g: 0, why: 'It proves.' },
            { s: 'zeigen', g: 1, why: 'It shows.' },
            { s: 'darauf hindeuten', g: 1, why: 'It points to.' },
            { s: 'nahelegen', g: 2, why: 'It only suggests.' },
            { s: 'vermuten lassen', g: 2, why: 'It lets one suspect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Die Ergebnisse deuten darauf ___, dass der Effekt real ist.', a: ['hin'], why: '*Darauf hindeuten, dass*.' },
            { q: 'Die Studie ___, dass die Methode funktioniert. (it proves)', a: ['belegt', 'beweist'], why: '*Belegen* is a strong verb.' },
            { q: 'Die Daten ___ nahe, dass die Methode zuverlässig ist.', a: ['legen'], why: '*Nahelegen*.' },
            { q: 'Die Autorin schreibt, die Methode ___ zuverlässig. (sein, Konjunktiv I)', a: ['sei'], why: 'Konjunktiv I of *sein*: *sei*.' },
            { q: 'Die Autorin schreibt, die Daten ___ geprüft worden. (sein, Konjunktiv I)', a: ['seien'], why: 'Konjunktiv I, plural: *seien*.' },
            { q: 'Das Verständnis war ___ besser. (tending to)', a: ['tendenziell'], why: '*Tendenziell* = tending to.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Die Daten ___ nahe, dass es einen Zusammenhang gibt. (a weak claim)', o: ['legen', 'beweisen', 'belegen'], why: '*Nahelegen* is weak.' },
            { q: 'Die Studie ___ den Effekt eindeutig. (a strong claim)', o: ['belegt', 'legt nahe', 'lässt vermuten'], why: '*Belegen* is strong.' },
            { q: 'Die Autoren schreiben, der Effekt ___ klein.', o: ['sei', 'ist', 'wäre'], why: 'Quoting: Konjunktiv I.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
            { q: 'Es ist möglich, dass die Methode zuverlässig ist.', cue: 'Die Ergebnisse legen nahe', a: ['Die Ergebnisse legen nahe, dass die Methode zuverlässig ist.'], why: '*Nahelegen* + *dass*.' },
            { q: 'Die Autorin sagt: Die Methode ist zuverlässig.', cue: 'Die Autorin sagt,', a: ['Die Autorin sagt, die Methode sei zuverlässig.'], why: 'Quoting: Konjunktiv I.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Die Autorin schreibt, die Methode [ist] zuverlässig.', a: ['sei'], why: 'Quoting: Konjunktiv I.' },
            { s: 'Die Ergebnisse deuten darauf [hinaus], dass der Effekt real ist.', a: ['hin'], why: '*Darauf hindeuten*.' },
            { s: 'Die Daten legen [nach], dass die Methode zuverlässig ist.', a: ['nahe'], why: '*Nahelegen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Die Ergebnisse legen nahe, dass die Methode zuverlässig ist.', why: '*Nahelegen* + *dass*.' },
            { a: 'Die Autorin schreibt, die Methode sei zuverlässig.', why: 'Konjunktiv I in a quotation.' },
            { a: 'Das Verständnis war tendenziell besser.', why: 'The hedge before the adjective.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Zusammenfassung einer Studie',
      about: 'Read the summary of a study.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Lesen auf Papier und am Bildschirm', md: 'Zusammenfassung. Die Studie untersucht, wie sich das Lesen auf Papier und am Bildschirm auf das Verständnis längerer Texte auswirkt. Die Studierenden einer Hochschule lasen zwei Texte, einen gedruckten und einen digitalen, und beantworteten anschließend Fragen.\n\nDie ausgewerteten Antworten zeigen, dass das Verständnis beim gedruckten Text tendenziell besser war. Die Autorinnen schreiben, der Unterschied sei bei besonders langen Texten größer gewesen. Die Ergebnisse legen nahe, dass die Art des Lesens eine Rolle spielt, belegen dies jedoch nicht abschließend.\n\nGewissermaßen bestätigt die Studie, was viele vermutet hatten. Die zu prüfende Frage ist, ob sich der Effekt bei geübten Lesern verringert. Weitere Untersuchungen sind erforderlich.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die Studie untersucht das Lesen auf Papier und am Bildschirm.', a: 't', why: '*Das Lesen auf Papier und am Bildschirm.*' },
            { q: 'Das Verständnis war beim digitalen Text besser.', a: 'f', why: '*Beim gedruckten Text tendenziell besser.*' },
            { q: 'Die Studie belegt den Effekt abschließend.', a: 'f', why: '*Belegen dies jedoch nicht abschließend.*' },
            { q: 'Laut den Autorinnen war der Unterschied bei langen Texten größer.', a: 't', why: '*Der Unterschied sei bei besonders langen Texten größer gewesen.*' },
            { q: 'Die Teilnehmer waren Schulkinder.', a: 'f', why: 'They were students at a university.' },
            { q: 'Die Studie fand in drei Ländern statt.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Wie wurde das Verständnis geprüft?', o: ['Durch Fragen nach dem Lesen.', 'Durch ein Interview.', 'Durch einen Test vor dem Lesen.'], why: '*Beantworteten anschließend Fragen.*' },
            { q: 'Was ist die zu prüfende Frage?', o: ['Ob der Effekt bei geübten Lesern kleiner wird.', 'Ob Papier teurer ist.', 'Ob Studierende gern lesen.'], why: '*Ob sich der Effekt bei geübten Lesern verringert.*' },
            { q: 'Wie stark sind die Ergebnisse?', o: ['Sie legen etwas nahe, belegen es aber nicht abschließend.', 'Sie beweisen alles.', 'Sie sind bedeutungslos.'], why: '*Legen nahe … belegen dies jedoch nicht abschließend.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that hedge a claim.', items: [
            { s: 'Das Verständnis war beim gedruckten Text [tendenziell] besser.', why: '*Tendenziell* hedges the claim.' },
            { s: '[Gewissermaßen] bestätigt die Studie, was viele vermutet hatten.', why: '*Gewissermaßen* = in a way.' },
            { s: 'Die Ergebnisse [legen nahe], dass die Art des Lesens eine Rolle spielt.', why: '*Nahelegen* is a weak verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Die Autorinnen schreiben, der Unterschied ___ bei langen Texten größer gewesen. (sein, Konjunktiv I)', a: ['sei'], why: 'Quoting: Konjunktiv I of *sein*.' },
            { q: 'Die ___ Antworten zeigen, dass das Verständnis besser war. (auswerten, Partizip II)', a: ['ausgewerteten'], why: 'Partizip II + adjective ending: *ausgewerteten*.' },
            { q: 'Die Ergebnisse ___ nahe, dass die Art des Lesens eine Rolle spielt.', a: ['legen'], why: '*Nahelegen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Die Ergebnisse legen nahe, dass die Art des Lesens eine Rolle spielt.', why: '*Nahelegen* + *dass*.' },
            { a: 'Die zu prüfende Frage ist, ob sich der Effekt verringert.', why: '*Zu* + Partizip I before the noun.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Die Studie ___ von einem Team durchgeführt. (past, passive)', o: ['wurde', 'wird', 'worden'], why: 'The action in the past: *wurde*.' },
      { q: 'Der Schaden wurde ___ Hitze verursacht.', o: ['durch', 'von', 'für'], why: 'A cause: *durch*.' },
      { q: 'Die ___ untersuchende Probe liegt im Labor.', o: ['zu', 'zum', 'um zu'], why: '*Zu* + Partizip I: necessity.' },
      { q: 'Die Ergebnisse ___ darauf hin, dass der Effekt real ist.', o: ['deuten', 'beweisen', 'sind'], why: '*Darauf hindeuten*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Autorin schreibt, die Daten ___ geprüft worden. (sein, Konjunktiv I)', a: ['seien'], why: 'Konjunktiv I, plural: *seien*.' },
      { q: 'Das Verständnis war ___ besser. (tending to)', a: ['tendenziell'], why: '*Tendenziell* = tending to.' },
      { q: 'In dem Labor ___ viel geforscht.', a: ['wird'], why: 'A passive without a subject.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its meaning.', pairs: [
      ['belegen', 'strong: it proves'],
      ['nahelegen', 'weak: it suggests'],
      ['durchaus', 'quite well, certainly'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the words in brackets.', items: [
      { q: 'Die von den Forschern entwickelte Methode ist neu.', cue: 'Die Methode, die', a: ['Die Methode, die von den Forschern entwickelt wurde, ist neu.'], why: 'Partizip II becomes a passive relative clause.' },
      { q: 'Man untersucht die Proben.', cue: 'Die Proben', a: ['Die Proben werden untersucht.'], why: 'Vorgangspassiv: *werden* + Partizip II.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Das Buch wurde [durch] einer Autorin geschrieben.', a: ['von'], why: 'A person who acts: *von*.' },
      { s: 'Die Autorin schreibt, die Methode [ist] zuverlässig.', a: ['sei'], why: 'Quoting: Konjunktiv I.' },
    ] },
  ],
};
