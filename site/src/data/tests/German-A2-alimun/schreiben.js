// Alimun test German A2, paper Schreiben (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'schreiben', title: 'Schreiben', minutes: 35,
  parts: [
    { id: 'p1', ref: 'Aufgabe 1', title: 'Eine E-Mail an einen Freund',
      about: 'Schreiben Sie eine E-Mail. Schreiben Sie 40 bis 60 Wörter.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'alimun', h: 'Schreiben Sie die E-Mail.', items: [
          { task: 'Ihr Freund Jonas hat am Samstag Geburtstag und lädt Sie zu seiner Party ein. Sie können nicht kommen.\n\nSchreiben Sie Jonas eine E-Mail:\n\n– Danken Sie für die Einladung.\n\n– Schreiben Sie, warum Sie nicht kommen können.\n\n– Machen Sie einen Vorschlag für ein anderes Treffen.',
            min: 40, max: 60,
            model: 'Lieber Jonas,\n\nvielen Dank für deine Einladung! Leider kann ich am Samstag nicht kommen, weil meine Eltern zu Besuch kommen. Sie wohnen weit weg, und ich sehe sie nur zweimal im Jahr. Das tut mir sehr leid. Wollen wir nächste Woche zusammen essen gehen? Ich lade dich ein! Hast du am Mittwoch Zeit?\n\nViele Grüße\nAnna' },
        ] },
      ] },
    { id: 'p2', ref: 'Aufgabe 2', title: 'Eine Nachricht an die Lehrerin',
      about: 'Schreiben Sie eine kurze Nachricht. Schreiben Sie 25 bis 40 Wörter.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'alimun', h: 'Schreiben Sie die Nachricht.', items: [
          { task: 'Sie sind krank und können morgen nicht zum Deutschkurs kommen.\n\nSchreiben Sie Ihrer Lehrerin, Frau Berger:\n\n– Warum kommen Sie nicht?\n\n– Fragen Sie nach den Hausaufgaben.',
            min: 25, max: 40,
            model: 'Liebe Frau Berger,\n\nich kann morgen leider nicht zum Kurs kommen. Ich bin krank und habe Fieber. Welche Hausaufgaben haben wir? Können Sie mir bitte eine E-Mail schreiben? Vielen Dank!\n\nViele Grüße\nAnna Petrova' },
        ] },
      ] },
  ],
};
