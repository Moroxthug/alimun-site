// Alimun test German A2, paper Sprechen (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'sprechen', title: 'Sprechen', minutes: 10,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Über sich sprechen',
      about: 'Die Prüferin stellt Ihnen Fragen. Antworten Sie in ganzen Sätzen.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Antworten Sie auf die Fragen.', items: [
          { q: 'Wie heißen Sie, und woher kommen Sie?', secs: 30, prep: 0 },
          { q: 'Wo wohnen Sie? Erzählen Sie etwas über Ihre Wohnung.', secs: 45, prep: 0 },
          { q: 'Was machen Sie gern in Ihrer Freizeit?', secs: 45, prep: 0 },
          { q: 'Was haben Sie letztes Wochenende gemacht?', secs: 45, prep: 0,
            model: 'Letztes Wochenende habe ich meine Freundin besucht. Am Samstag sind wir in die Stadt gefahren und haben Kaffee getrunken. Am Sonntag habe ich lange geschlafen und dann für meine Familie gekocht.' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Ein Bild beschreiben',
      about: 'Sehen Sie das Bild an. Sagen Sie, was Sie sehen.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Beschreiben Sie das Bild.', items: [
          { q: 'Sehen Sie das Bild an. Was sehen Sie? Beschreiben Sie die Küche.', secs: 60, prep: 15, scene: 'kitchen',
            model: 'Auf dem Bild sehe ich eine Küche. Hinten ist ein Fenster. Rechts steht ein großer Kühlschrank. Links steht ein Topf. In der Mitte steht ein Wasserkocher. Unten ist ein Schrank. Ich glaube, hier kocht jemand gleich Tee oder Suppe. Die Küche ist klein, aber hell und schön. Ich koche auch gern, am liebsten am Wochenende.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Etwas zusammen planen',
      about: 'Sie planen eine kleine Feier. Sprechen Sie über die Punkte auf der Karte.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'alimun', h: 'Planen Sie die Feier.', items: [
          { q: 'Ihre Kollegin Marta hat nächste Woche Geburtstag. Sie planen eine kleine Feier im Büro. Was machen Sie? Sprechen Sie über die Punkte auf der Karte.', secs: 90, prep: 30,
            notes: ['Wann?', 'Wo?', 'Essen und Trinken', 'Geschenk'],
            model: 'Marta hat am Donnerstag Geburtstag. Wir machen die Feier am Donnerstag um zwölf Uhr, in der Mittagspause. Wir feiern in der Küche im Büro, sie ist groß genug. Ich backe einen Kuchen, und Paul bringt Brötchen mit. Wir trinken Kaffee und Saft. Als Geschenk kaufen wir zusammen ein Buch, denn Marta liest sehr gern. Jeder gibt fünf Euro. Wir brauchen auch Blumen. Ich frage alle Kollegen heute per E-Mail.' },
        ] },
      ] },
  ],
};
