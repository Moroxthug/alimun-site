// Alimun test German A2, paper Lesen (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'lesen', title: 'Lesen', minutes: 35,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Eine E-Mail',
      about: 'Lesen Sie die E-Mail. Ist die Aussage richtig oder falsch?',
      text: { title: 'Neue Wohnung, neue Leute', md: 'Liebe Sara,\n\nwie geht es dir? Ich habe tolle Neuigkeiten: Ich wohne jetzt in einer WG in der Gartenstraße! Mein Zimmer ist nicht sehr groß, aber es ist hell und hat einen Balkon.\n\nIch wohne mit zwei Leuten zusammen. Jonas studiert Medizin, und Mira arbeitet in einer Bäckerei. Mira steht jeden Tag um vier Uhr auf, deshalb ist sie abends oft sehr müde. Jonas kocht gern und sehr gut. Gestern hat er für uns eine Gemüsesuppe gemacht.\n\nDie Küche und das Bad teilen wir. Jede Woche putzt eine andere Person. Diese Woche bin ich dran – na ja!\n\nAm Samstag, den 14. Juni, machen wir eine kleine Party im Garten. Hast du Lust? Wir fangen um sieben Uhr an. Du musst nichts mitbringen, nur gute Laune! Meine Schwester kommt auch, sie möchte dich gern kennenlernen.\n\nSchreib mir bitte bis Mittwoch, ob du kommen kannst.\n\nViele Grüße\nLena' },
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Lena wohnt jetzt allein.', a: 1, why: 'Lena wohnt in einer WG mit zwei Leuten, mit Jonas und Mira.' },
          { q: 'Lenas Zimmer ist klein, aber hell.', a: 0, why: 'Im Text steht: „nicht sehr groß, aber es ist hell“.' },
          { q: 'Mira arbeitet in einem Krankenhaus.', a: 1, why: 'Mira arbeitet in einer Bäckerei. Jonas studiert Medizin.' },
          { q: 'Jonas hat gestern gekocht.', a: 0, why: 'Gestern hat Jonas eine Gemüsesuppe gemacht.' },
          { q: 'Diese Woche putzt Lena.', a: 0, why: 'Lena schreibt: „Diese Woche bin ich dran.“' },
          { q: 'Sara soll Essen zur Party mitbringen.', a: 1, why: 'Lena schreibt: „Du musst nichts mitbringen.“' },
          { q: 'Sara soll bis Mittwoch antworten.', a: 0, why: 'Lena schreibt: „Schreib mir bitte bis Mittwoch.“' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Anzeigen',
      about: 'Lesen Sie die Anzeigen A bis G. Welche Anzeige passt? Eine Anzeige passt nicht.',
      texts: [
        { md: '**A** Sportverein Blau-Weiß: Neuer Schwimmkurs für Erwachsene. Dienstags von 19 bis 20 Uhr. Auch für Anfänger! 8 Termine, 40 Euro.' },
        { md: '**B** Fahrradwerkstatt am Markt: Wir reparieren Ihr Fahrrad in 24 Stunden. Montag bis Freitag 9 bis 18 Uhr, Samstag 9 bis 13 Uhr.' },
        { md: '**C** Hausarztpraxis Dr. Albers: Wir sind vom 3. bis 17. August im Urlaub. Bitte gehen Sie in dieser Zeit zu Dr. Kaya, Lindenweg 4.' },
        { md: '**D** Wir suchen Nachhilfe in Mathe für unseren Sohn (12 Jahre). Zweimal pro Woche am Nachmittag. Bitte rufen Sie an: 0421 77 31 05.' },
        { md: '**E** Kochkurs „Schnelle Küche“: Gesund kochen in 30 Minuten. Samstag von 10 bis 14 Uhr in der Volkshochschule. 25 Euro, mit Essen.' },
        { md: '**F** Zimmer frei: Möbliertes Zimmer in ruhiger WG, 15 m², 380 Euro warm, ab 1. September. Nur für Nichtraucher.' },
        { md: '**G** Flohmarkt im Stadtpark: jeden ersten Sonntag im Monat von 8 bis 14 Uhr. Kleidung, Bücher und Spielzeug für wenig Geld.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Welche Anzeige passt?', opts: ['A', 'B', 'C', 'D', 'E', 'F', 'G'], items: [
          { q: 'Sie möchten am Abend nach der Arbeit schwimmen lernen.', a: 0, why: 'Anzeige A: Schwimmkurs für Erwachsene, dienstags von 19 bis 20 Uhr, auch für Anfänger.' },
          { q: 'Sie sind im August krank, und Ihr Arzt ist im Urlaub.', a: 2, why: 'Anzeige C: Die Praxis ist im August im Urlaub, Dr. Kaya hilft in dieser Zeit.' },
          { q: 'Sie suchen ab Herbst ein Zimmer.', a: 5, why: 'Anzeige F: Das Zimmer ist ab 1. September frei.' },
          { q: 'Sie möchten billig alte Bücher kaufen.', a: 6, why: 'Anzeige G: Auf dem Flohmarkt gibt es Bücher für wenig Geld.' },
          { q: 'Ihr Fahrrad ist kaputt, und Sie brauchen es schnell wieder.', a: 1, why: 'Anzeige B: Die Werkstatt repariert Fahrräder in 24 Stunden.' },
          { q: 'Sie möchten lernen, wie man schnell und gesund kocht.', a: 4, why: 'Anzeige E: Gesund kochen in 30 Minuten.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Ein Text aus der Zeitung',
      about: 'Lesen Sie den Text. Wählen Sie die richtige Antwort.',
      text: { title: 'Mein Tag beginnt früh', md: 'Tomasz Nowak ist 34 Jahre alt und arbeitet seit sechs Jahren als Busfahrer in Bremen. Er kommt aus Polen. In Deutschland hat er zuerst in einem Hotel gearbeitet. „Das war nicht schlecht, aber ich wollte lieber draußen sein und viele Menschen sehen“, sagt er.\n\nDiese Woche hat Tomasz Frühschicht. Sein Wecker klingelt um halb vier. Er trinkt schnell einen Kaffee und fährt mit dem Fahrrad zum Busdepot. Um fünf Uhr fährt er los. Die erste Fahrt ist ruhig. Im Bus sitzen nur ein paar Leute, sie arbeiten in Krankenhäusern oder Bäckereien. Ab sieben Uhr wird es voll: Dann fahren die Schüler und viele Leute zur Arbeit.\n\n„Am meisten mag ich die Fahrgäste, die jeden Tag kommen“, erzählt Tomasz. „Eine alte Dame bringt mir manchmal Kekse mit.“ Nicht so gern mag er Regen. „Wenn es regnet, gibt es überall Stau, und dann sind die Leute nervös.“\n\nUm 13 Uhr ist seine Arbeit zu Ende. Dann holt er seine Tochter vom Kindergarten ab. Am Nachmittag gehen die beiden oft in den Park oder auf den Spielplatz. Abends ist Tomasz müde und geht schon um neun Uhr ins Bett. „Nächste Woche habe ich Spätschicht, dann kann ich lange schlafen“, sagt er und lacht.' },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Antwort.', items: [
          { q: 'Was hat Tomasz zuerst in Deutschland gemacht?', o: ['Er hat in einem Hotel gearbeitet.', 'Er hat in einer Bäckerei gearbeitet.', 'Er war Busfahrer in Polen.'], why: 'Im Text steht: „In Deutschland hat er zuerst in einem Hotel gearbeitet.“' },
          { q: 'Warum ist Tomasz Busfahrer geworden?', o: ['Er wollte draußen sein und Menschen sehen.', 'Er wollte mehr Geld verdienen.', 'Er fährt gern schnell.'], why: 'Tomasz sagt: „Ich wollte lieber draußen sein und viele Menschen sehen.“' },
          { q: 'Wie kommt Tomasz zum Busdepot?', o: ['Mit dem Fahrrad.', 'Mit dem Bus.', 'Zu Fuß.'], why: 'Er fährt mit dem Fahrrad zum Busdepot.' },
          { q: 'Wer fährt um fünf Uhr mit dem Bus?', o: ['Nur wenige Leute.', 'Viele Schüler.', 'Niemand.'], why: 'Bei der ersten Fahrt sitzen nur ein paar Leute im Bus.' },
          { q: 'Was gefällt Tomasz an seiner Arbeit besonders?', o: ['Die Fahrgäste, die jeden Tag kommen.', 'Die Kekse aus der Bäckerei.', 'Die Fahrten am Nachmittag.'], why: 'Er sagt: „Am meisten mag ich die Fahrgäste, die jeden Tag kommen.“' },
          { q: 'Was passiert, wenn es regnet?', o: ['Es gibt Stau, und die Leute sind nervös.', 'Die Busse fahren nicht.', 'Tomasz fährt mit dem Auto.'], why: 'Tomasz sagt: „Wenn es regnet, gibt es überall Stau, und dann sind die Leute nervös.“' },
          { q: 'Was macht Tomasz nach der Arbeit?', o: ['Er holt seine Tochter ab.', 'Er schläft lange.', 'Er geht ins Fitnessstudio.'], why: 'Um 13 Uhr holt er seine Tochter vom Kindergarten ab.' },
        ] },
      ] },
  ],
};
