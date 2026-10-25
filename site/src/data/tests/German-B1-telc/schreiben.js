// Practice test in the format of telc Deutsch B1: Schriftlicher Ausdruck. Original Alimun task and model answer, not official material. Draft for native-teacher review.
export const PAPER = {
  id: 'schreiben', title: 'Schriftlicher Ausdruck', minutes: 30,
  parts: [
    {
      id: 'w1', ref: 'Schriftlicher Ausdruck', title: 'Einen halbformellen Brief schreiben',
      about: 'Lesen Sie den Brief von Herrn Wagner und schreiben Sie eine Antwort. Sie haben 30 Minuten Zeit.',
      text: { title: 'Brief von Herrn Wagner', md: 'Liebe Frau Santos,\n\nlange haben wir nichts voneinander gehört! Ich hoffe, es geht Ihnen gut in Ihrer neuen Stadt. Bei uns in Lindenfeld ist alles wie immer, nur der Garten macht mir jedes Jahr ein bisschen mehr Arbeit.\n\nHeute schreibe ich Ihnen mit einer Bitte: Mein Neffe Paul, 24 Jahre alt, hat eine Stelle als Elektriker in Ihrer Stadt gefunden und fängt dort am 1. März an. Er kennt in der Stadt niemanden und sucht eine kleine Wohnung, die nicht zu teuer ist. Er hat wenig Erfahrung mit Wohnungssuche, weil er bis jetzt bei seinen Eltern gewohnt hat. In seiner Freizeit spielt er gern Fußball.\n\nKönnten Sie ihm vielleicht ein paar Tipps geben? Es wäre schön, wenn Sie sich kurz bei mir melden.\n\nHerzliche Grüße aus Lindenfeld\nIhr Konrad Wagner' },
      blocks: [
        { t: 'ex', kind: 'write', marking: 'telc', h: 'Schreiben Sie eine Antwort an Herrn Wagner.',
          items: [
            { task: 'Sie sind Maria Santos. Antworten Sie Herrn Wagner. Schreiben Sie etwas zu allen vier Punkten: wie es Ihnen in der neuen Stadt geht, welche Tipps Sie Paul für die Wohnungssuche geben, was Paul in seiner Freizeit in Ihrer Stadt machen kann und wie Sie Paul am Anfang helfen können.\n\nÜberlegen Sie sich eine passende Reihenfolge der Punkte. Vergessen Sie nicht die Anrede und den Gruß am Schluss. Schreiben Sie etwa 100 bis 150 Wörter.',
              min: 100, max: 160,
              model: 'Lieber Herr Wagner,\n\nvielen Dank für Ihren Brief! Ich habe mich sehr gefreut, nach so langer Zeit von Ihnen zu hören. Mir geht es gut. Am Anfang war die Stadt ein bisschen groß für mich, aber inzwischen habe ich mich gut eingelebt.\n\nNatürlich helfe ich Paul gern. Die Wohnungen hier sind leider ziemlich teuer, aber in der Südstadt findet man noch kleine Wohnungen zu guten Preisen. Paul sollte im Internet und in der Zeitung vom Samstag suchen. Ich frage auch meine Kolleginnen, vielleicht weiß jemand etwas.\n\nFür Fußballfans ist die Stadt toll. Es gibt viele Vereine, und mein Nachbar spielt in einer Freizeitmannschaft, die immer neue Spieler sucht.\n\nWenn Paul hier ist, lade ich ihn gern zum Essen ein und zeige ihm die Stadt. Er kann mich jederzeit anrufen, meine Nummer ist 0171 556 2290.\n\nViele Grüße, auch an Ihre Frau\nIhre Maria Santos' },
          ] },
      ],
    },
  ],
};
