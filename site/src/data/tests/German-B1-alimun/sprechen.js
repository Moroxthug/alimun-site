// Alimun test German B1, paper Sprechen (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'sprechen', title: 'Sprechen', minutes: 10,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Über sich sprechen',
      about: 'Der Prüfer stellt Ihnen einige Fragen. Antworten Sie ausführlich und geben Sie Beispiele.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Antworten Sie auf die Fragen.', items: [
          { q: 'Erzählen Sie bitte etwas über Ihre Arbeit oder Ihre Ausbildung. Was gefällt Ihnen daran, und was nicht so sehr?', secs: 60, prep: 0 },
          { q: 'Wie informieren Sie sich über Nachrichten? Und welche Medien benutzen Sie jeden Tag?', secs: 60, prep: 0 },
          { q: 'Erzählen Sie von einer Reise, die Ihnen besonders gut gefallen hat. Warum war sie so schön?', secs: 60, prep: 0,
            model: 'Vor zwei Jahren bin ich mit meinem Bruder mit dem Zug nach Wien gefahren. Die Reise war besonders schön, weil wir sehr spontan waren: Wir hatten kein Hotel gebucht und haben am ersten Abend ein kleines Gästehaus gefunden, das von einer sehr netten Familie geführt wurde. Tagsüber haben wir Museen besucht und viel gelaufen, und abends haben wir in einem Weinlokal am Stadtrand gegessen. Am meisten hat mir gefallen, dass wir so viel Zeit zum Reden hatten.' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Ein Bild beschreiben',
      about: 'Beschreiben Sie das Bild. Sagen Sie auch, was die Situation für Sie bedeutet.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Beschreiben Sie das Bild und sprechen Sie über das Thema.', items: [
          { q: 'Sehen Sie sich das Bild an. Beschreiben Sie, was Sie sehen. Was machen Sie, wenn Ihr Zug Verspätung hat?', secs: 90, prep: 20, scene: 'station',
            model: 'Auf dem Bild sieht man einen Bahnhof. In der Mitte steht ein Zug am Bahnsteig. Rechts oben hängt eine große Uhr, darunter steht eine Bank, und neben der Bank steht ein Koffer. Vielleicht wartet jemand auf einen Zug, der Verspätung hat, oder ein Reisender ist gerade angekommen. Die Situation kenne ich gut, weil ich jeden Tag mit dem Zug zur Arbeit pendle. Wenn mein Zug Verspätung hat, schaue ich zuerst in der App nach, ob es eine andere Verbindung gibt. Danach schreibe ich meinem Chef eine kurze Nachricht. Wenn ich lange warten muss, kaufe ich mir einen Kaffee und lese etwas. Ärgern bringt ja nichts.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Einen Ausflug planen',
      about: 'Ihr Deutschkurs möchte einen gemeinsamen Ausflug machen. Sie sollen ihn planen. Sprechen Sie über die Punkte auf der Karte und machen Sie Vorschläge.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Planen Sie den Ausflug.', items: [
          { q: 'Ihr Deutschkurs möchte am Ende des Kurses einen Tagesausflug machen. Planen Sie den Ausflug. Sagen Sie, was Sie vorschlagen, und begründen Sie Ihre Vorschläge.', secs: 120, prep: 30,
            notes: ['Wohin?', 'Wann und wie lange?', 'Wie fahren Sie hin?', 'Kosten', 'Essen', 'Wer kümmert sich um was?'],
            model: 'Ich schlage vor, dass wir an einem Samstag im Mai an den See fahren. Dort kann man spazieren gehen, und wenn es warm ist, sogar baden. Außerdem gibt es ein kleines Museum, falls es regnet. Wir könnten mit dem Regionalzug fahren, weil das billiger und besser für die Umwelt ist als ein Bus, den wir mieten müssten. Mit einem Gruppenticket kostet die Fahrt nur etwa zehn Euro pro Person. Zum Essen würde ich ein Picknick vorschlagen: Jeder bringt etwas mit, zum Beispiel Salat, Brot oder Kuchen. Das ist günstig, und wir lernen Spezialitäten aus verschiedenen Ländern kennen. Ich kann mich um die Fahrkarten kümmern, und vielleicht kann jemand anderes eine Liste für das Essen machen, damit nicht alle Kuchen mitbringen.' },
        ] },
      ] },
  ],
};
