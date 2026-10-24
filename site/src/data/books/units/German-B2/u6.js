// German B2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Environment and the future',
  goal: 'Discuss environmental problems and solutions, say what could have been different and make predictions about the future.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['konjunktiv-ii-past', 'unreal-conditions', 'futur-i', 'futur-ii', 'environment', 'sustainable-city'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Konjunktiv II in the past',
      about: 'Talk about things that did not happen: regrets, criticism and missed chances.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To talk about something in the past that did **not** happen, use the **Konjunktiv II in the past**: *hätte* or *wäre* + the past participle. The choice between *hätte* and *wäre* follows the Perfekt: *ich habe geholfen → ich hätte geholfen*, *ich bin gekommen → ich wäre gekommen*.' },
          { t: 'examples', items: [
            { s: 'Ich **hätte** dir gern **geholfen**, aber ich war krank.', n: 'I wanted to help, but I did not.' },
            { s: 'Mit dem Zug **wären** wir schneller **gewesen**.', n: 'We did not take the train. *Sein* takes *sein*: *wären gewesen*.' },
            { s: 'Fast **wäre** ich zu spät **gekommen**.', n: '*Fast* + Konjunktiv II: it nearly happened, but it did not.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Konjunktiv II in the past', quiz: true, head: ['', 'helfen', 'kommen'], rows: [
            ['ich', 'hätte geholfen', 'wäre gekommen'],
            ['du', 'hättest geholfen', 'wär(e)st gekommen'],
            ['er / sie / es', 'hätte geholfen', 'wäre gekommen'],
            ['wir', 'hätten geholfen', 'wären gekommen'],
            ['ihr', 'hättet geholfen', 'wär(e)t gekommen'],
            ['sie / Sie', 'hätten geholfen', 'wären gekommen'],
          ] },
          { t: 'text', md: 'With a **modal verb**, use *hätte* + the main verb + the modal verb in the **infinitive**, both at the end. This often expresses criticism or regret.' },
          { t: 'examples', items: [
            { s: 'Die Stadt **hätte** mehr Radwege **bauen sollen**.', n: 'It was the right thing to do, but it did not happen.' },
            { s: 'Du **hättest** mich **anrufen können**.', n: 'It was possible, but you did not do it.' },
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: 'With a modal verb, there is no participle: *wir hätten handeln **müssen***, not *gemusst*. In a subordinate clause, *hätte* comes before the two infinitives: *…, weil wir früher **hätten handeln müssen**.*' },
          { t: 'ex', kind: 'choice', h: 'Hätte or wäre? Choose.', items: [
            { q: 'Mit dem Fahrrad ___ ich schneller gewesen.', o: ['wäre', 'hätte', 'würde'], why: '*Sein* takes *sein*: *ich wäre gewesen*.' },
            { q: 'Wir ___ den Müll besser trennen sollen.', o: ['hätten', 'wären', 'würden'], why: 'With a modal verb: *hätten* + two infinitives.' },
            { q: 'Ohne deine Hilfe ___ ich das nie geschafft.', o: ['hätte', 'wäre', 'würde'], why: '*Schaffen* takes *haben*: *ich hätte geschafft*.' },
            { q: 'Fast ___ wir den letzten Zug verpasst.', o: ['hätten', 'wären', 'würden'], why: '*Verpassen* takes *haben*: *wir hätten verpasst*.' },
            { q: 'Bei diesem Wetter ___ ich lieber zu Hause geblieben.', o: ['wäre', 'hätte', 'würde'], why: '*Bleiben* takes *sein*: *ich wäre geblieben*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word. Use the verb in brackets.', items: [
            { q: 'Ich hätte dir gern ___, aber ich hatte keine Zeit. (helfen)', a: ['geholfen'], why: '*hätte* + participle: *hätte geholfen*.' },
            { q: 'Sie wäre gern ___, aber sie war krank. (mitkommen)', a: ['mitgekommen'], why: 'A separable verb: *mit + ge + kommen*.' },
            { q: 'Wir hätten das Problem früher erkennen ___. (müssen)', a: ['müssen'], why: 'With a modal verb, the modal stays in the infinitive: *hätten … erkennen müssen*, not *gemusst*.' },
            { q: 'Ihr ___ uns doch Bescheid sagen können! (haben)', a: ['hättet'], why: '*ihr hättet*' },
            { q: 'Fast ___ er vom Fahrrad gefallen. (sein)', a: ['wäre'], why: '*Fallen* takes *sein*: *er wäre gefallen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wir hätten früher handeln müssen.', why: '*Hätten* in second position, the two infinitives at the end.' },
            { a: 'Ich wäre gern länger geblieben.', why: '*Bleiben* takes *sein*; the participle goes to the end.' },
            { a: 'Du hättest mich anrufen können.', why: 'Main verb, then the modal verb in the infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Unreal conditions: now and in the past',
      about: 'Say what would happen, or would have happened, if things were different.',
      art: 'monster',
      spreads: [
        [
          { t: 'text', md: 'An unreal condition talks about a situation that is not true. For the **present**, use *würde* + infinitive or the short Konjunktiv II forms (*hätte, wäre, könnte, gäbe*). For the **past**, use *hätte* or *wäre* + participle in both clauses. You can also mix them: a past condition with a result that is true now.' },
          { t: 'table', caption: 'Unreal conditions', explain: ['head', 'col0'], head: ['Time', 'wenn clause', 'main clause'], rows: [
            ['present', 'Wenn wir mehr Busse hätten,', 'würden weniger Leute Auto fahren.'],
            ['past', 'Wenn wir früher gehandelt hätten,', 'wäre das nicht passiert.'],
            ['past condition, present result', 'Wenn ich Biologie studiert hätte,', 'wäre ich heute Försterin.'],
          ] },
        ],
        [
          { t: 'text', md: 'You can leave out *wenn*. Then the conjugated verb comes **first** in the condition. The main clause can start with *dann*.' },
          { t: 'examples', items: [
            { s: '**Hätte** ich das **gewusst**, **wäre** ich früher **gekommen**.', n: 'No *wenn*: the verb goes first.' },
            { s: 'Wenn es weniger Verkehr **gäbe**, **wäre** die Luft sauberer.', n: 'Present: it is not true now.' },
            { s: 'Wenn du den Wetterbericht **gelesen hättest**, **hättest** du einen Schirm **mitgenommen**.', n: 'Past: you did not read it, and you did not take an umbrella.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Look at the time. *Wenn ich Zeit **hätte*** is about now. *Wenn ich Zeit **gehabt hätte*** is about the past.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Now or in the past? Choose the right form.', items: [
            { q: 'Wenn ich gestern nicht krank gewesen wäre, ___ ich zur Demo gegangen.', o: ['wäre', 'hätte', 'würde'], why: 'Past, and *gehen* takes *sein*: *wäre gegangen*.' },
            { q: 'Wenn die Stadt mehr Radwege hätte, ___ ich jeden Tag mit dem Rad fahren.', o: ['würde', 'hätte', 'wäre'], why: 'Present: *würde* + infinitive.' },
            { q: 'Wenn wir den Zug genommen ___, wären wir pünktlich gewesen.', o: ['hätten', 'wären', 'würden'], why: '*Nehmen* takes *haben*: *hätten genommen*.' },
            { q: 'Wenn ich du ___, würde ich das Angebot annehmen.', o: ['wäre', 'hätte', 'würde'], why: '*Wenn ich du wäre*: present and unreal.' },
            { q: '___ ich mehr Zeit gehabt, hätte ich dir geholfen.', o: ['Hätte', 'Wäre', 'Würde'], why: 'No *wenn*, so the verb comes first. *Zeit haben* takes *haben*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the two halves.', pairs: [
            ['Wenn ich mehr Geld hätte,', 'würde ich ein E-Auto kaufen.'],
            ['Wenn wir früher losgefahren wären,', 'hätten wir den Zug noch erreicht.'],
            ['Hätte sie einen Helm getragen,', 'wäre sie nicht verletzt worden.'],
            ['Wenn ich Biologie studiert hätte,', 'wäre ich heute Försterin.'],
            ['Wenn es nicht so heiß wäre,', 'könnten wir wandern gehen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write hätte, wäre or würde in the right form.', items: [
            { q: 'Wenn du mich gefragt ___, hätte ich dir geholfen.', a: ['hättest'], why: '*Fragen* takes *haben*: *du hättest gefragt*.' },
            { q: 'Wenn es keine Autos gäbe, ___ die Stadt viel ruhiger.', a: ['wäre'], why: 'Present, unreal: *sie wäre ruhiger*.' },
            { q: '___ wir das gewusst, wären wir zu Hause geblieben.', a: ['Hätten'], why: 'No *wenn*: the verb comes first. *Wissen* takes *haben*.' },
            { q: 'Wenn ich mehr Zeit hätte, ___ ich öfter selbst kochen. (werden)', a: ['würde'], why: 'Present: *würde* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Futur I and Futur II',
      about: 'Make predictions and guesses about the future, the present and the past.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'The **Futur I** is *werden* + infinitive. Germans often use the Präsens for the future, so the Futur I mostly shows a **prediction**, a **promise** or an **assumption** about now, often with *wohl*, *sicher* or *wahrscheinlich*.' },
          { t: 'examples', items: [
            { s: 'In 30 Jahren **wird** es im Sommer noch heißer **sein**.', n: 'A prediction.' },
            { s: 'Ich **werde** ab morgen mit dem Rad zur Arbeit **fahren**.', n: 'A promise or a firm plan.' },
            { s: 'Jonas ist nicht da. Er **wird** wohl im Stau **stehen**.', n: 'An assumption about now.' },
          ] },
        ],
        [
          { t: 'text', md: 'The **Futur II** is *werden* + participle + *haben* or *sein*. It says that something **will be finished** by a point in the future, or it makes an **assumption about the past**.' },
          { t: 'table', caption: 'Futur II', explain: ['head', 'col0'], head: ['Use', 'Example'], rows: [
            ['finished by a point in the future', 'Bis 2035 wird die Stadt alle Busse auf Strom umgestellt haben.'],
            ['finished by a point in the future, with sein', 'Bis Montag werden die Pakete angekommen sein.'],
            ['assumption about the past', 'Sie ist nicht gekommen. Sie wird den Zug verpasst haben.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a subordinate clause, *werden* goes to the very end: *Ich glaube, dass er den Zug **verpasst haben wird**.* In speech, Germans often use the Perfekt with *wohl* instead: *Er hat wohl den Zug verpasst.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Lea antwortet nicht. Sie ___ wohl noch schlafen.', o: ['wird', 'hat', 'ist'], why: 'An assumption about now: Futur I, *wird … schlafen*.' },
            { q: 'Bis Ende des Jahres werden wir das Projekt abgeschlossen ___.', o: ['haben', 'sein', 'werden'], why: '*Abschließen* takes *haben*: Futur II *abgeschlossen haben*.' },
            { q: 'Bis du kommst, wird der Kuchen schon kalt geworden ___.', o: ['sein', 'haben', 'werden'], why: '*Werden* takes *sein*: *geworden sein*.' },
            { q: 'Die Straße ist nass. Es wird in der Nacht geregnet ___.', o: ['haben', 'sein', 'werden'], why: 'An assumption about the past. *Regnen* takes *haben*.' },
            { q: '„Er wird den Termin vergessen haben.“ What does it mean?', o: ['He has probably forgotten the appointment.', 'He will forget the appointment tomorrow.', 'He must not forget the appointment.'], why: 'Futur II here is an assumption about the past.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'In zwanzig Jahren ___ es in vielen Städten keine Benzinautos mehr geben. (werden)', a: ['wird'], why: 'A prediction: *es wird … geben*.' },
            { q: 'Bis zum Sommer werden die Arbeiter die Solaranlage ___ haben. (installieren)', a: ['installiert'], why: 'Futur II: participle + *haben*. Verbs in *-ieren* have no *ge-*.' },
            { q: 'Keine Sorge, ich ___ dir morgen beim Umzug helfen. (werden)', a: ['werde'], why: 'A promise: *ich werde helfen*.' },
            { q: 'Er ist so müde. Er wird die ganze Nacht gearbeitet ___.', a: ['haben'], why: 'An assumption about the past: *gearbeitet haben*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Bis Freitag werde ich den Bericht geschrieben haben.', why: 'Futur II: *werde* in second position, *geschrieben haben* at the end.' },
            { a: 'Sie wird den Bus verpasst haben.', why: 'An assumption about the past.' },
            { a: 'Ich glaube, dass er schon angekommen sein wird.', why: 'In the *dass* clause, *wird* goes to the very end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A city for tomorrow',
      about: 'Read an interview about a sustainable city.',
      art: 'sun',
      spreads: [
        [
          { t: 'reading', title: 'Interview: „Kleine Schritte sind besser als gar keine“', md: '**Frau Okafor, Wellenbach gilt heute als Vorbild für nachhaltige Städte. Wie hat alles angefangen?**\n\nMit einem Problem. Vor zwanzig Jahren war die Innenstadt voller Autos, die Luft war schlecht, und viele Geschäfte standen leer. Wir mussten etwas ändern.\n\n**Was haben Sie konkret gemacht?**\n\nZuerst haben wir die Hauptstraße für Autos gesperrt. Viele Händler waren dagegen. Sie dachten, die Kunden würden wegbleiben. Das Gegenteil ist passiert: Heute sind die Geschäfte voll, weil die Leute gern zu Fuß durch die Straße bummeln. Außerdem haben wir das Busnetz ausgebaut und überall Radwege angelegt.\n\n**Gibt es etwas, das Sie heute anders machen würden?**\n\nJa. Wir hätten die Bürgerinnen und Bürger früher einbeziehen müssen. Am Anfang haben wir viele Entscheidungen allein getroffen, und das hat Vertrauen gekostet. Wenn wir von Anfang an mit den Menschen gesprochen hätten, wäre vieles leichter gewesen.\n\n**Und wie geht es weiter?**\n\nUnser nächstes Ziel sind die Gebäude. Bis 2035 werden wir alle Schulen und Verwaltungsgebäude saniert haben, und auf vielen Dächern wird es Solaranlagen geben. Außerdem pflanzen wir jedes Jahr neue Bäume, denn auch bei uns wird es im Sommer immer heißer.\n\n**Was raten Sie anderen Städten?**\n\nSie sollten nicht zu lange warten. Viele Städte diskutieren jahrelang und tun nichts. Wenn die Menschen erst einmal sehen, dass eine autofreie Straße funktioniert, sind sie auch für größere Veränderungen offen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Vor zwanzig Jahren gab es in der Innenstadt viele leere Geschäfte.', a: 't', why: '*Viele Geschäfte standen leer.*' },
            { q: 'Die Händler fanden die autofreie Hauptstraße von Anfang an gut.', a: 'f', why: '*Viele Händler waren dagegen.*' },
            { q: 'Heute kaufen weniger Menschen in der Innenstadt ein als früher.', a: 'f', why: '*Heute sind die Geschäfte voll.*' },
            { q: 'Frau Okafor findet, dass die Stadt die Bürger früher hätte fragen sollen.', a: 't', why: '*Wir hätten die Bürgerinnen und Bürger früher einbeziehen müssen.*' },
            { q: 'Alle Schulen in Wellenbach sind schon saniert.', a: 'f', why: 'The work will be finished by 2035: *Bis 2035 werden wir … saniert haben.*' },
            { q: 'Frau Okafor fährt selbst jeden Tag mit dem Fahrrad.', a: 'ng', why: 'The interview says nothing about how she travels.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the interview.', items: [
            { q: '„Wir hätten die Bürger früher einbeziehen müssen.“ What does Ms Okafor mean?', o: ['They did not involve the citizens early enough, and she regrets it.', 'They involved the citizens early, and it worked well.', 'They will involve the citizens in the future.'], why: '*Hätten … müssen*: something was necessary, but it did not happen.' },
            { q: '„Bis 2035 werden wir alle Schulen saniert haben.“ What does it say?', o: ['The work will be finished by 2035.', 'The work will start in 2035.', 'The work was finished before 2035.'], why: 'Futur II: finished by a point in the future.' },
            { q: '„Sie dachten, die Kunden würden wegbleiben.“ What did the shop owners think?', o: ['Customers would stop coming.', 'Customers would come more often.', 'Customers would park in the street.'], why: '*Wegbleiben*: not to come any more.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wenn ich das gewusst hätte, ___ ich dich gewarnt.', o: ['hätte', 'wäre', 'würde'], why: '*Warnen* takes *haben*: *hätte gewarnt*.' },
      { q: 'Mit dem Taxi ___ wir pünktlich angekommen.', o: ['wären', 'hätten', 'würden'], why: '*Ankommen* takes *sein*: *wären angekommen*.' },
      { q: 'Bis morgen ___ ich die Arbeit beendet haben.', o: ['werde', 'würde', 'wurde'], why: 'Futur II: *werde … beendet haben*.' },
      { q: 'Wenn es mehr Grünflächen ___, wäre die Stadt im Sommer kühler.', o: ['gäbe', 'gegeben', 'gibt'], why: 'Present, unreal: Konjunktiv II *gäbe*.' },
      { q: 'Er ist nicht ans Telefon gegangen. Er ___ schon geschlafen haben.', o: ['wird', 'hat', 'ist'], why: 'An assumption about the past: Futur II *wird … geschlafen haben*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wir hätten mehr Solaranlagen bauen ___. (sollen)', a: ['sollen'], why: 'With a modal verb, the modal stays in the infinitive.' },
      { q: 'Wenn du früher aufgestanden ___, hättest du den Bus erreicht. (sein)', a: ['wärst', 'wärest'], why: '*Aufstehen* takes *sein*: *du wärst aufgestanden*.' },
      { q: '___ ich mehr Zeit, würde ich mich in einem Umweltverein engagieren. (haben)', a: ['Hätte'], why: 'No *wenn*: the verb comes first. Present: *hätte*.' },
      { q: 'In fünfzig Jahren ___ die Gletscher in den Alpen viel kleiner sein. (werden)', a: ['werden'], why: 'A prediction, plural: *die Gletscher werden … sein*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Ich wäre gern mitgefahren.', why: '*Mitfahren* takes *sein*.' },
      { a: 'Hätten wir früher gehandelt, wäre das nicht passiert.', why: 'No *wenn*: the verb comes first, then the main clause starts with its verb.' },
      { a: 'Bis Juni werden wir umgezogen sein.', why: 'Futur II with *sein*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the word that is wrong.', items: [
      { s: 'Wenn ich Zeit gehabt hätte, [wäre] ich dir geholfen.', why: '*Helfen* takes *haben*: *hätte ich dir geholfen*.' },
      { s: 'Wir hätten früher handeln [gemusst].', why: 'After another infinitive, the modal stays in the infinitive: *handeln müssen*.' },
      { s: 'Bis Montag wird er die Prüfung bestanden [sein].', why: '*Bestehen* takes *haben*: *bestanden haben*.' },
    ] },
  ],
};
