// Goethe-Zertifikat B1 practice test: Schreiben (60 Minuten, drei Aufgaben). Written by Alimun.
export const PAPER = {
  id: 'schreiben', title: 'Schreiben', minutes: 60,
  parts: [
    { id: 'a1', ref: 'Aufgabe 1', title: 'Eine E-Mail an eine Freundin',
      about: 'Arbeitszeit: 20 Minuten. Schreiben Sie eine E-Mail von circa 80 Wörtern.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'goethe', h: 'Schreiben Sie eine E-Mail (circa 80 Wörter).', items: [
          { task: 'Sie sind vor drei Wochen in eine andere Stadt umgezogen, weil Sie dort eine neue Arbeitsstelle haben. Ihre Freundin Paula hat Sie gefragt, wie es Ihnen geht.\n\nSchreiben Sie Paula eine E-Mail. Beschreiben Sie Ihre neue Wohnung, begründen Sie, warum Ihnen die neue Arbeit gefällt oder nicht gefällt, und machen Sie einen Vorschlag für ein Treffen.\n\nSchreiben Sie etwas zu allen drei Punkten. Achten Sie auf den Textaufbau (Anrede, Einleitung, Reihenfolge der Inhaltspunkte und Schluss).',
            min: 70, max: 110,
            model: 'Liebe Paula,\n\nvielen Dank für deine Nachricht! Ich wohne jetzt seit drei Wochen in Freiburg und habe mich schon ein bisschen eingelebt. Meine neue Wohnung ist klein, aber sehr hell, und vom Balkon aus kann ich die Berge sehen. Leider ist die Küche ziemlich alt.\n\nDie Arbeit gefällt mir sehr gut, weil meine Kollegen hilfsbereit sind und ich jeden Tag etwas Neues lerne. Nur der Weg ins Büro ist ein bisschen lang.\n\nHast du Lust, mich bald zu besuchen? Wie wäre es mit dem Wochenende nach deinem Geburtstag? Dann zeige ich dir die Altstadt und wir gehen schön essen.\n\nLiebe Grüße\ndeine Elena' },
        ] },
      ] },

    { id: 'a2', ref: 'Aufgabe 2', title: 'Ihre Meinung in einem Forum',
      about: 'Arbeitszeit: 25 Minuten. Schreiben Sie Ihre Meinung von circa 80 Wörtern.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'goethe', h: 'Schreiben Sie Ihre Meinung (circa 80 Wörter).', items: [
          { task: 'Sie haben im Fernsehen eine Diskussionssendung zum Thema „Haustiere in der Stadtwohnung“ gesehen. Im Online-Gästebuch der Sendung finden Sie folgende Meinung:\n\n**Karin:** „Ein Hund gehört nicht in eine kleine Wohnung mitten in der Stadt. Die Tiere sind den ganzen Tag allein, haben keinen Platz zum Laufen, und die Nachbarn ärgern sich über das Bellen. Wer in der Stadt wohnt, sollte auf ein Haustier verzichten.“\n\nSchreiben Sie nun Ihre Meinung.',
            min: 70, max: 110,
            model: 'Ich verstehe Karins Meinung, aber ich sehe das ein bisschen anders. Natürlich braucht ein großer Hund viel Platz und Bewegung, und für so ein Tier ist eine kleine Wohnung wirklich nicht ideal. Es gibt aber auch kleine Hunde oder Katzen, die gut in einer Stadtwohnung leben können. Wichtig ist vor allem, dass man genug Zeit hat und jeden Tag mit dem Hund nach draußen geht. In meiner Nachbarschaft haben viele ältere Menschen ein Haustier, und für sie ist es ein wichtiger Freund. Deshalb finde ich: Haustiere in der Stadt sind in Ordnung, wenn man verantwortungsvoll mit ihnen umgeht.' },
        ] },
      ] },

    { id: 'a3', ref: 'Aufgabe 3', title: 'Eine Nachricht an den Vermieter',
      about: 'Arbeitszeit: 15 Minuten. Schreiben Sie eine E-Mail von circa 40 Wörtern.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'goethe', h: 'Schreiben Sie eine E-Mail (circa 40 Wörter).', items: [
          { task: 'Ihr Vermieter, Herr Wagner, hat Ihnen geschrieben, dass am Dienstag um 9 Uhr ein Techniker kommt, um die Heizung in Ihrer Wohnung zu kontrollieren. Sie sind an diesem Tag nicht zu Hause.\n\nSchreiben Sie Herrn Wagner. Entschuldigen Sie sich höflich und schlagen Sie einen anderen Termin vor.\n\nVergessen Sie nicht die Anrede und den Gruß am Schluss.',
            min: 35, max: 60,
            model: 'Sehr geehrter Herr Wagner,\n\nvielen Dank für Ihre Nachricht. Leider bin ich am Dienstag nicht zu Hause, weil ich den ganzen Tag eine Fortbildung in Köln habe. Das tut mir sehr leid. Könnte der Techniker vielleicht am Donnerstag nach 15 Uhr kommen?\n\nMit freundlichen Grüßen\nAli Hassan' },
        ] },
      ] },
  ],
};
