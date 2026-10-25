// Alimun test German B1, paper Schreiben (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'schreiben', title: 'Schreiben', minutes: 45,
  parts: [
    { id: 'p1', ref: 'Aufgabe 1', title: 'Eine E-Mail an eine Freundin',
      about: 'Schreiben Sie eine persönliche E-Mail. Schreiben Sie 80 bis 120 Wörter.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'alimun', h: 'Schreiben Sie die E-Mail.', items: [
          { task: 'Sie sind vor drei Wochen in eine neue Wohnung in einer anderen Stadt umgezogen. Ihre Freundin Mara hat Ihnen geschrieben und gefragt, wie es Ihnen geht.\n\nSchreiben Sie Mara eine E-Mail:\n\n– Beschreiben Sie Ihre neue Wohnung und die Gegend.\n\n– Erzählen Sie, wie Sie Ihre Nachbarn kennengelernt haben.\n\n– Laden Sie Mara ein und machen Sie einen Vorschlag, was Sie zusammen unternehmen können.',
            min: 80, max: 120,
            model: 'Liebe Mara,\n\nvielen Dank für deine Nachricht! Mir geht es gut, auch wenn der Umzug ziemlich anstrengend war. Meine neue Wohnung hat zwei Zimmer und einen kleinen Balkon, auf dem morgens die Sonne scheint. Sie liegt in einem ruhigen Viertel, aber in zehn Minuten bin ich mit dem Rad in der Altstadt.\n\nMeine Nachbarn habe ich schon am ersten Tag kennengelernt: Ein älteres Ehepaar hat mir beim Tragen der Kisten geholfen, und danach haben wir zusammen Kaffee getrunken.\n\nHast du Lust, mich bald zu besuchen? Am besten im Juni, dann gibt es hier ein großes Stadtfest. Wir könnten auch eine Radtour am Fluss machen.\n\nIch freue mich auf dich!\n\nLiebe Grüße\nDeine Selin' },
        ] },
      ] },
    { id: 'p2', ref: 'Aufgabe 2', title: 'Ihre Meinung im Forum',
      about: 'Schreiben Sie einen Beitrag für ein Forum. Schreiben Sie 80 bis 120 Wörter.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'alimun', h: 'Schreiben Sie Ihren Beitrag.', items: [
          { task: 'In einem Online-Forum diskutieren Leute über das Thema: **„Sollten Kinder unter 14 Jahren ein eigenes Smartphone haben?“**\n\nSchreiben Sie Ihre Meinung:\n\n– Nennen Sie Vorteile und Nachteile.\n\n– Sagen Sie, was Sie denken, und begründen Sie Ihre Meinung.\n\n– Erzählen Sie von eigenen Erfahrungen oder von Erfahrungen aus Ihrer Familie.',
            min: 80, max: 120,
            model: 'Ich finde, Kinder unter 14 Jahren können ein Smartphone haben, aber nur mit klaren Regeln. Ein Vorteil ist, dass Eltern ihre Kinder jederzeit erreichen können, zum Beispiel wenn der Bus Verspätung hat. Außerdem schreiben fast alle Mitschüler in Gruppen, und niemand möchte ausgeschlossen sein.\n\nEin großer Nachteil ist aber, dass viele Kinder zu viel Zeit am Handy verbringen und weniger draußen spielen oder lesen. Mein Neffe ist zwölf und hat seit einem Jahr ein Smartphone. Am Anfang hat er stundenlang Videos geschaut, deshalb haben meine Schwester und er zusammen Regeln gemacht: kein Handy beim Essen und nach 20 Uhr. Seitdem klappt es viel besser. Deshalb meine ich: Nicht das Gerät ist das Problem, sondern wie man es benutzt.' },
        ] },
      ] },
  ],
};
