// German C2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Subtle grammar',
  goal: 'Use the finer points of German grammar with confidence. Learn Konjunktiv II in irreal comparisons, extended participial attributes and Funktionsverbgefüge.',
  art: 'cat',
  tags: { skills: ['grammar', 'reading', 'writing'], topics: ['Konjunktiv II', 'als ob', 'participial attributes', 'Funktionsverbgefüge', 'formal style'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Als ob und als wäre',
      about: 'Use Konjunktiv II in irreal comparisons and choose between the simple form and the würde-form.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To say that something is **only apparent or imagined**, German uses **als ob** or **als wenn** with **Konjunktiv II**: *Sie spricht, als ob sie alles wüsste.* *Er tut, als ob er schliefe.* With **als** alone, the verb moves to the **second position**: *Sie spricht, als wüsste sie alles.* *Es sieht aus, als würde es regnen.* The tense tells the time: **Konjunktiv II of the present** (*wüsste*) for something imagined now, **Konjunktiv II of the past** (*hätte gewusst*) for something imagined about the past: *Er sieht aus, als hätte er nicht geschlafen.*' },
          { t: 'table', caption: 'Irreal comparisons', explain: ['head', 'col0'], head: ['Structure', 'Example', 'Meaning'], rows: [
            ['als ob + Konjunktiv II', 'Sie spricht, als ob sie alles wüsste.', 'she talks as if she knew everything'],
            ['als + verb second', 'Sie spricht, als wüsste sie alles.', 'the same, more literary'],
            ['als würde + infinitive', 'Es sieht aus, als würde es regnen.', 'it looks as if it were going to rain'],
            ['past', 'Er sieht aus, als hätte er nicht geschlafen.', 'he looks as if he had not slept'],
          ] },
        ],
        [
          { t: 'text', md: 'For the **form** of Konjunktiv II, use the **simple form** for **haben, sein, the modal verbs** and some **very common verbs**: *hätte, wäre, könnte, müsste, käme, ginge, wüsste, gäbe*. For most other verbs, use **würde + infinitive**, because the simple form looks like the past tense: *Er tut, als würde er arbeiten* (not *arbeitete*, which sounds like the preterite). With **ohne dass** and **anstatt dass**, the indicative or Konjunktiv II is possible: *Er ging, ohne dass jemand es merkte.*' },
          { t: 'tip', art: 'owl', md: 'Use the **simple form** when it is **different** from the preterite (*käme, ginge, wüsste, hätte, wäre*), and the **würde-form** when the simple form would be **confused** with the preterite (*arbeitete, machte*). In the **Konjunktiv II of the past**, use *hätte* or *wäre* + participle: *als hätte er geschlafen*, *als wäre er gerannt*. Austrian and Swiss writers use the same rules.' },
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Sie spricht, als ob sie alles ___.', o: ['wüsste', 'weiß', 'wusste'], why: 'Irreal comparison: Konjunktiv II.' },
            { q: 'Es sieht aus, als ___ es gleich regnen.', o: ['würde', 'wird', 'wurde'], why: '*Als würde* + infinitive.' },
            { q: 'Er tut, als ob er ___.', o: ['schliefe', 'schläft', 'schlief'], why: 'Konjunktiv II of *schlafen*.' },
            { q: 'Er sieht aus, als ___ er nicht geschlafen.', o: ['hätte', 'hat', 'hatte'], why: 'Konjunktiv II of the past: *hätte* + participle.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite with als (verb in second position), using the words given.', items: [
            { q: 'Sie spricht, als ob sie alles wüsste.', cue: 'Sie spricht, als', a: ['Sie spricht, als wüsste sie alles.'], why: 'The verb moves to the second position after *als*.' },
            { q: 'Er sieht aus, als ob er nicht geschlafen hätte.', cue: 'Er sieht aus, als', a: ['Er sieht aus, als hätte er nicht geschlafen.'], why: 'The verb moves to the second position after *als*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Er tut, als ob er nichts ___. (hören)', a: ['hörte', 'höre'], why: 'Irreal comparison: Konjunktiv.' },
            { q: 'Sie tut so, als ___ sie müde. (sein)', a: ['wäre'], why: 'Konjunktiv II of *sein*.' },
            { q: 'Es sieht aus, als ___ es regnen. (werden)', a: ['würde'], why: '*Als würde* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Sie spricht, als ob sie alles [weiß].', a: ['wüsste'], why: 'Irreal comparison needs Konjunktiv II.' },
            { s: 'Er tut, als ob er [arbeitete].', a: ['würde arbeiten', 'arbeiten würde'], why: 'The würde-form avoids confusion with the preterite.' },
            { s: 'Er sieht aus, als [hat] er nicht geschlafen.', a: ['hätte'], why: 'Konjunktiv II of the past.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Der von allen bewunderte Lehrer',
      about: 'Read and unpack extended participial attributes.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'A **participial attribute** (*Partizipialattribut*) is a participle placed **before a noun**, replacing a relative clause. **Partizip I** (infinitive + *d*) is **active and ongoing**: *die wartenden Kinder* = *die Kinder, die warten*. **Partizip II** is **passive** or **finished**: *das gebaute Haus* = *das Haus, das gebaut wurde*; *der angekommene Zug* = *der Zug, der angekommen ist*. In **written German**, the participle can carry **its own complements**: *der von allen bewunderte Lehrer* = *der Lehrer, der von allen bewundert wird*.' },
          { t: 'table', caption: 'Participial attributes', explain: ['head', 'col0'], head: ['Attribute', 'Relative clause', 'Meaning'], rows: [
            ['die wartenden Kinder', 'die Kinder, die warten', 'active, ongoing'],
            ['das gebaute Haus', 'das Haus, das gebaut wurde', 'passive'],
            ['der angekommene Zug', 'der Zug, der angekommen ist', 'finished'],
            ['der von allen bewunderte Lehrer', 'der Lehrer, der von allen bewundert wird', 'passive with an agent'],
            ['das in der Stadt gelegene Haus', 'das Haus, das in der Stadt liegt', 'extended'],
          ] },
        ],
        [
          { t: 'text', md: 'With **zu + Partizip I**, the attribute means **must** or **can be done** (a passive with modal meaning): *die zu lösende Aufgabe* = *die Aufgabe, die gelöst werden muss*; *ein nicht zu übersehender Fehler* = *ein Fehler, der nicht übersehen werden kann*. These constructions are typical of **formal and scientific writing**. To understand one, **start at the article and read to the noun**, then unpack: the article and the noun are the frame, the participle and its complements are the relative clause.' },
          { t: 'tip', art: 'owl', md: 'Do not **overuse** extended attributes in your own writing: more than one makes a sentence hard to read. In speech, use a relative clause. The **ending** of the participle follows the article: *der bewunderte Lehrer*, *ein bewunderter Lehrer*, *die bewunderten Lehrer*. Use **Partizip I** only for **simultaneous, active** actions: *die rauchende Fabrik* (smoking), but not for completed events.' },
          { t: 'ex', kind: 'match', h: 'Match the attribute with the relative clause.', pairs: [
            ['die wartenden Kinder', 'die Kinder, die warten'],
            ['die zu lösende Aufgabe', 'die Aufgabe, die gelöst werden muss'],
            ['das gebaute Haus', 'das Haus, das gebaut wurde'],
            ['der angekommene Zug', 'der Zug, der angekommen ist'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct form.', items: [
            { q: 'Der von allen ___ Lehrer wurde ausgezeichnet.', o: ['bewunderte', 'bewundernde', 'bewundert'], why: 'Passive meaning: Partizip II with an ending.' },
            { q: 'Die ___ Kinder spielten im Garten.', o: ['lachenden', 'gelachten', 'zu lachenden'], why: 'Active and ongoing: Partizip I.' },
            { q: 'Die ___ Aufgabe ist sehr schwierig.', o: ['zu lösende', 'lösende', 'gelöste'], why: '*Zu + Partizip I*: must be solved.' },
            { q: 'Der ___ Zug hatte Verspätung.', o: ['angekommene', 'ankommende', 'ankommene'], why: 'Finished event: Partizip II.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite as an extended attribute.', items: [
            { q: 'Der Lehrer, der von allen bewundert wird, kam herein.', cue: 'Der von', a: ['Der von allen bewunderte Lehrer kam herein.'], why: 'Partizip II with its agent before the noun.' },
            { q: 'Die Aufgabe, die gelöst werden muss, ist schwer.', cue: 'Die zu', a: ['Die zu lösende Aufgabe ist schwer.'], why: '*Zu + Partizip I*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the attribute.', items: [
            { q: 'Das in der Stadt ___ Haus ist sehr alt. (liegen, Partizip II)', a: ['gelegene'], why: '*Gelegen* with an ending.' },
            { q: 'Die ___ Kinder machen Lärm. (warten, Partizip I)', a: ['wartenden'], why: 'Partizip I with an ending.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Der [bewundernde] Lehrer wurde von allen respektiert. (he is admired)', a: ['bewunderte'], why: 'He is admired: Partizip II, passive.' },
            { s: 'Die [lösende] Aufgabe muss bis morgen fertig sein. (must be solved)', a: ['zu lösende'], why: 'The sense of *must* needs *zu + Partizip I*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'In Frage stellen, in Betracht ziehen',
      about: 'Recognise and use Funktionsverbgefüge, the verb and noun combinations of formal German.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'A **Funktionsverbgefüge** is a fixed combination of a **verb with little meaning** and a **noun, usually with a preposition**. The noun carries the meaning: **in Frage stellen** (to question), **zur Verfügung stehen** (to be available), **Rücksicht nehmen** (to show consideration), **in Betracht ziehen** (to consider), **zur Kenntnis nehmen** (to take note), **in Kraft treten** (to come into force), **zum Ausdruck bringen** (to express), **unter Beweis stellen** (to prove), **Anwendung finden** (to be applied). They are typical of **formal, administrative and scientific** German.' },
          { t: 'table', caption: 'Funktionsverbgefüge', explain: ['head', 'col0'], head: ['Funktionsverbgefüge', 'Simple verb', 'Meaning'], rows: [
            ['in Frage stellen', 'bezweifeln', 'to question'],
            ['zur Verfügung stehen', 'verfügbar sein', 'to be available'],
            ['in Betracht ziehen', 'berücksichtigen', 'to consider'],
            ['zur Kenntnis nehmen', 'erfahren, zur Kenntnis nehmen', 'to take note'],
            ['in Kraft treten', 'gelten', 'to come into force'],
            ['unter Beweis stellen', 'beweisen', 'to prove'],
          ] },
        ],
        [
          { t: 'text', md: 'Each noun requires a **fixed verb and a fixed preposition**, which you must learn as a block. *Eine Entscheidung treffen*, not *machen*; *Rücksicht nehmen*, not *haben*; *in Kraft treten*, not *in Kraft gehen*. In many cases, the Funktionsverbgefüge adds a **nuance** that the simple verb lacks: *zur Entscheidung stehen* (to be under consideration) is not exactly *entscheiden*. They also allow **passive** forms or **extensions**: *Das Gesetz tritt zum 1. Januar in Kraft.*' },
          { t: 'tip', art: 'owl', md: 'In your own writing, use a Funktionsverbgefüge when the text is **formal** and the **simple verb would be too short**. In an informal message, prefer the simple verb: *Ich bezweifle das*, not *Ich stelle das in Frage*. Do not **mix** the verb: *zur Verfügung haben* is wrong, because *stehen* and *stellen* are the verbs of this expression.' },
          { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
            ['in Frage stellen', 'to question'],
            ['zur Verfügung stehen', 'to be available'],
            ['in Betracht ziehen', 'to consider'],
            ['in Kraft treten', 'to come into force'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the correct verb.', items: [
            { q: 'Das neue Gesetz ___ zum 1. Januar in Kraft.', o: ['tritt', 'geht', 'kommt'], why: '*In Kraft treten*.' },
            { q: 'Er stellt die Ergebnisse ___.', o: ['in Frage', 'zur Frage', 'an Frage'], why: '*In Frage stellen*.' },
            { q: 'Wir ziehen mehrere Möglichkeiten in ___.', o: ['Betracht', 'Betrachtung', 'Beachtung'], why: '*In Betracht ziehen*.' },
            { q: 'Bitte nehmen Sie ___ auf die anderen Gäste.', o: ['Rücksicht', 'Rücksichten', 'Respekt'], why: '*Rücksicht nehmen auf*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Say it with a Funktionsverbgefüge.', items: [
            { q: 'Er bezweifelt die Ergebnisse.', cue: 'Er stellt', a: ['Er stellt die Ergebnisse in Frage.'], why: '*In Frage stellen* = bezweifeln.' },
            { q: 'Die Mitarbeiter berücksichtigen alle Möglichkeiten.', cue: 'Die Mitarbeiter ziehen', a: ['Die Mitarbeiter ziehen alle Möglichkeiten in Betracht.'], why: '*In Betracht ziehen* = berücksichtigen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the Funktionsverbgefüge.', items: [
            { q: 'Das Gesetz tritt im Januar in ___.', a: ['Kraft'], why: '*In Kraft treten*.' },
            { q: 'Die Unterlagen stehen Ihnen zur ___.', a: ['Verfügung'], why: '*Zur Verfügung stehen*.' },
            { q: 'Er hat sein Können unter ___ gestellt.', a: ['Beweis'], why: '*Unter Beweis stellen*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'Das Gesetz [geht] im Januar in Kraft.', a: ['tritt'], why: '*In Kraft treten*.' },
            { s: 'Wir [machen] mehrere Möglichkeiten in Betracht.', a: ['ziehen'], why: '*In Betracht ziehen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Die letzte Fähre',
      about: 'Read a short story and notice the advanced structures in context.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Die letzte Fähre', md: 'Der Fahrkartenschalter war geschlossen. Marta stand am Kai und sah der letzten Fähre nach, als hätte sie damit gerechnet. Der von der Besatzung gestartete Motor brummte, und die wartenden Menschen auf dem Steg wurden still. Ob man jemals zurückkehren konnte? Sie stellte es in Frage.\n\n„Es gibt vor dem Morgen keine weitere Fähre“, sagte der Mann am Kiosk, als wüsste er alles. „Ein Café steht Ihnen aber zur Verfügung.“ Marta nahm die Auskunft zur Kenntnis. Die zu treffende Entscheidung war einfach: Sie würde bleiben.\n\nEine Stunde später setzte sich ein Fremder neben sie. Er sprach, als hätte er sie schon lange gekannt, von Schiffen, vom Regen und von einer Schwester in Lissabon. Er nahm Rücksicht auf ihre Müdigkeit und redete trotzdem weiter.\n\nBei Tagesanbruch war das Meer ruhig. Die erste Fähre lag bereit am Kai. „Gut“, sagte Marta und stieg an Bord.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marta hat die letzte Fähre verpasst.', a: 't', why: '„Sah der letzten Fähre nach.“' },
            { q: 'Der Mann am Kiosk sagt, dass es vor dem Morgen eine weitere Fähre gibt.', a: 'f', why: '„Es gibt vor dem Morgen keine weitere Fähre.“' },
            { q: 'Marta nimmt die Auskunft zur Kenntnis.', a: 't', why: '„Marta nahm die Auskunft zur Kenntnis.“' },
            { q: 'Der Fremde redet nur kurz.', a: 'f', why: 'He keeps talking: „redete trotzdem weiter“.' },
            { q: 'Marta nimmt am Morgen die erste Fähre.', a: 't', why: '„Stieg an Bord.“' },
            { q: 'Der Fremde heißt Lukas.', a: 'ng', why: 'The text does not give his name.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the grammar.', items: [
            { q: '„als hätte sie damit gerechnet“ – what is this?', o: ['An irreal comparison with Konjunktiv II of the past.', 'A real past tense.', 'An imperative.'], why: '*Als hätte* + participle: imagined past.' },
            { q: '„Die zu treffende Entscheidung“ means…', o: ['The decision that has to be made.', 'The decision that was made.', 'The decision that is being made.'], why: '*Zu + Partizip I*: must be done.' },
            { q: '„Die wartenden Menschen“ is…', o: ['Partizip I: active and ongoing.', 'Partizip II: passive.', 'An infinitive.'], why: 'The people are waiting now.' },
            { q: '„Sie stellte es in Frage“ means…', o: ['She doubted it.', 'She asked a question.', 'She answered it.'], why: '*In Frage stellen* = to question.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the Funktionsverbgefüge.', items: [
            { s: 'Sie [stellte es in Frage]. Ein Café [steht Ihnen zur Verfügung].', why: 'Two Funktionsverbgefüge.' },
            { s: 'Marta [nahm] die Auskunft [zur Kenntnis].', why: 'A Funktionsverbgefüge.' },
            { s: 'Er [nahm Rücksicht] auf ihre Müdigkeit.', why: 'A Funktionsverbgefüge.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Der Mann sagte es, als ___ er alles. (wissen, Konjunktiv II)', a: ['wüsste'], why: 'An irreal comparison.' },
            { q: 'Ein Café steht Ihnen zur ___.', a: ['Verfügung'], why: '*Zur Verfügung stehen*.' },
            { q: 'Er nahm ___ auf ihre Müdigkeit.', a: ['Rücksicht'], why: '*Rücksicht nehmen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Die zu treffende Entscheidung war einfach.', why: '*Zu + Partizip I* before the noun.' },
            { a: 'Er sprach, als hätte er sie schon lange gekannt.', why: 'Irreal comparison with Konjunktiv II of the past.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'Sie spricht, als ob sie alles ___.', o: ['wüsste', 'weiß', 'wusste'], why: 'Irreal comparison.' },
      { q: 'Der von allen ___ Lehrer wurde ausgezeichnet.', o: ['bewunderte', 'bewundernde', 'bewundert'], why: 'Passive: Partizip II.' },
      { q: 'Das neue Gesetz ___ zum 1. Januar in Kraft.', o: ['tritt', 'geht', 'kommt'], why: '*In Kraft treten*.' },
      { q: 'Die ___ Aufgabe ist sehr schwierig. (must be solved)', o: ['zu lösende', 'lösende', 'gelöste'], why: '*Zu + Partizip I*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Es sieht aus, als ___ es regnen. (werden, Konjunktiv II)', a: ['würde'], why: '*Als würde* + infinitive.' },
      { q: 'Die Unterlagen stehen Ihnen zur ___.', a: ['Verfügung'], why: '*Zur Verfügung stehen*.' },
      { q: 'Er sieht aus, als ___ er nicht geschlafen. (haben, Konjunktiv II)', a: ['hätte'], why: 'Konjunktiv II of the past.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the expression with its meaning.', pairs: [
      ['in Frage stellen', 'to question'],
      ['in Betracht ziehen', 'to consider'],
      ['unter Beweis stellen', 'to prove'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Sie spricht, als ob sie alles wüsste.', cue: 'Sie spricht, als', a: ['Sie spricht, als wüsste sie alles.'], why: 'The verb moves to the second position.' },
      { q: 'Er bezweifelt die Ergebnisse.', cue: 'Er stellt', a: ['Er stellt die Ergebnisse in Frage.'], why: '*In Frage stellen*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'Sie spricht, als ob sie alles [weiß].', a: ['wüsste'], why: 'Irreal comparison needs Konjunktiv II.' },
      { s: 'Das Gesetz [geht] im Januar in Kraft.', a: ['tritt'], why: '*In Kraft treten*.' },
    ] },
  ],
};
