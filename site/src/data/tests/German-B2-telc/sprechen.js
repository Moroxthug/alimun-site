// Practice test in the format of telc Deutsch B2: Mündlicher Ausdruck. Original Alimun tasks and model answers, not official material. Draft for native-teacher review.
// In the exam two candidates speak together; here the examiner takes the partner's turns.
export const PAPER = {
  id: 'sprechen', title: 'Mündlicher Ausdruck', minutes: 15,
  parts: [
    {
      id: 'm1', ref: 'Mündlicher Ausdruck, Teil 1', title: 'Präsentation',
      about: 'Sie berichten über eine Erfahrung, die für Sie wichtig war. Sprechen Sie etwa eineinhalb Minuten. Beantworten Sie danach die Fragen Ihrer Gesprächspartnerin.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'telc', h: 'Präsentieren Sie Ihr Thema.',
          items: [
            { q: 'Bitte erzählen Sie von einem Neuanfang in Ihrem Leben, zum Beispiel einem Umzug, einer neuen Stelle oder einer Ausbildung.', secs: 90, prep: 60,
              notes: ['Worum ging es, und wann war das?', 'Warum haben Sie sich dafür entschieden?', 'Was war schwierig, was war positiv?', 'Wie beurteilen Sie die Entscheidung heute?'],
              model: 'Ich möchte von meinem Umzug nach Deutschland erzählen. Das war vor drei Jahren, als ich eine Stelle als Ingenieurin in Stuttgart bekommen habe. Ich hatte mich eigentlich nur aus Neugier beworben, aber als die Zusage kam, wollte ich die Chance nutzen. In meinem Heimatland hätte ich in meinem Beruf deutlich weniger verdient, und ich wollte außerdem Erfahrungen im Ausland sammeln.\n\nAm Anfang war es allerdings schwieriger, als ich gedacht hatte. Die Wohnungssuche hat fast vier Monate gedauert, und bei der Arbeit habe ich in Besprechungen oft nur die Hälfte verstanden, weil meine Kollegen Dialekt gesprochen haben. Außerdem habe ich meine Familie sehr vermisst. Positiv war, dass mein Team mir viel geholfen hat. Eine Kollegin hat mich sogar zu ihrem Sportverein mitgenommen, und dort habe ich schnell Freunde gefunden.\n\nHeute bin ich sehr froh über meine Entscheidung. Ich habe beruflich viel gelernt und bin selbstständiger geworden. Trotzdem würde ich jedem raten, sich vor so einem Umzug gut zu informieren, vor allem über die Wohnungssuche.' },
            { q: 'Das klingt spannend. Würden Sie sich noch einmal genauso entscheiden?', secs: 45, prep: 0,
              model: 'Ja, auf jeden Fall, auch wenn ich manches anders machen würde. Ich würde zum Beispiel vor dem Umzug noch mehr Deutsch lernen, damit der Anfang im Büro leichter ist.' },
            { q: 'Was hat Ihnen in der ersten Zeit am meisten geholfen?', secs: 45, prep: 0 },
          ] },
      ],
    },
    {
      id: 'm2', ref: 'Mündlicher Ausdruck, Teil 2', title: 'Diskussion',
      about: 'Lesen Sie den kurzen Text. Diskutieren Sie mit Ihrer Gesprächspartnerin über das Thema. Begründen Sie Ihre Meinung, gehen Sie auf die Argumente Ihrer Partnerin ein und versuchen Sie, sie zu überzeugen.',
      text: { title: 'Ein Pflichtjahr für alle?', md: 'In der Politik wird immer wieder über ein soziales Pflichtjahr diskutiert: Alle jungen Menschen sollen nach der Schule ein Jahr lang in einem Krankenhaus, in einem Pflegeheim, beim Naturschutz oder in einer anderen gemeinnützigen Einrichtung arbeiten.\n\nBefürworter meinen, ein solches Jahr stärke den Zusammenhalt in der Gesellschaft und helfe jungen Menschen, sich beruflich zu orientieren. Außerdem würden dringend benötigte Kräfte in der Pflege gewonnen. Kritiker halten dagegen, ein Zwang widerspreche der Freiheit, über das eigene Leben zu entscheiden. Wer nicht freiwillig helfe, sei zudem wenig motiviert, und Fachkräfte könne ein Pflichtjahr nicht ersetzen.' },
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'telc', h: 'Diskutieren Sie das Thema.',
          items: [
            { q: 'Ich finde ein Pflichtjahr eigentlich eine gute Idee. Viele junge Leute wissen nach der Schule sowieso nicht, was sie machen sollen. Wie sehen Sie das?', secs: 75, prep: 60,
              model: 'Ich verstehe Ihr Argument, und es stimmt, dass viele nach der Schule unsicher sind. Trotzdem bin ich gegen eine Pflicht. Meiner Meinung nach sollte jeder selbst entscheiden, wie er dieses Jahr nutzt, ob für ein Praktikum, eine Reise oder einen Job. Außerdem glaube ich, dass Menschen, die gezwungen werden, nicht besonders motiviert sind. Stellen Sie sich vor, jemand arbeitet widerwillig in einem Pflegeheim, das hilft weder den Bewohnern noch dem Personal. Ich wäre eher dafür, freiwillige Dienste attraktiver zu machen, zum Beispiel mit einer besseren Bezahlung oder mit Vorteilen bei der Studienplatzvergabe.' },
            { q: 'Aber in der Pflege fehlen doch überall Leute. Ohne ein Pflichtjahr wird sich daran nichts ändern, oder?', secs: 60, prep: 0,
              model: 'Da haben Sie recht, der Personalmangel ist ein großes Problem. Ich bezweifle aber, dass ein Pflichtjahr ihn löst. Junge Menschen ohne Ausbildung können Fachkräfte nicht ersetzen, und sie müssen erst einmal angelernt werden, was zusätzlich Zeit kostet. Viel wichtiger wäre es, die Arbeitsbedingungen in der Pflege zu verbessern, damit mehr Menschen diesen Beruf wählen und auch bleiben.' },
            { q: 'Und wie war das in Ihrem Heimatland? Gibt es dort so etwas wie einen Pflichtdienst?', secs: 60, prep: 0 },
            { q: 'Könnten Sie sich einen Kompromiss vorstellen, mit dem beide Seiten leben können?', secs: 60, prep: 0,
              model: 'Ja, vielleicht. Man könnte zum Beispiel alle Schulabgänger verpflichten, sich zumindest beraten zu lassen und mehrere Einrichtungen kennenzulernen. Wer sich dann für ein soziales Jahr entscheidet, sollte gut unterstützt werden. So bleibt die Entscheidung freiwillig, aber mehr junge Leute bekommen einen Einblick in diese Berufe.' },
          ] },
      ],
    },
    {
      id: 'm3', ref: 'Mündlicher Ausdruck, Teil 3', title: 'Problemlösung',
      about: 'Ihre Abteilung ist vor kurzem in ein Großraumbüro umgezogen. Viele Kolleginnen und Kollegen klagen über Lärm, Unruhe und fehlende Rückzugsmöglichkeiten. Sie sollen mit Ihrer Gesprächspartnerin der Geschäftsleitung Vorschläge machen. Diskutieren Sie verschiedene Lösungen, wägen Sie Vor- und Nachteile ab und einigen Sie sich auf einen gemeinsamen Vorschlag.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'telc', h: 'Finden Sie gemeinsam eine Lösung.',
          items: [
            { q: 'Also, ehrlich gesagt kann ich mich in dem neuen Büro kaum noch konzentrieren. Ständig telefoniert jemand. Was schlagen Sie vor?', secs: 60, prep: 60,
              notes: ['Telefonate und Besprechungen', 'Ruhige Arbeitsplätze', 'Regeln für alle', 'Arbeiten von zu Hause', 'Kosten für die Firma'],
              model: 'Mir geht es genauso. Ich denke, das größte Problem sind die Telefonate. Ein erster Schritt wäre, dass man für längere Gespräche und Videokonferenzen kleine Räume einrichtet, sogenannte Telefonboxen. Die gibt es in vielen Firmen, und sie sind nicht besonders teuer. Dann würde es im großen Raum schon deutlich ruhiger. Was halten Sie davon?' },
            { q: 'Telefonboxen sind gut, aber die kosten auch Platz. Und für Besprechungen reichen die nicht.', secs: 60, prep: 0,
              model: 'Das stimmt. Für Besprechungen bräuchten wir einen eigenen Raum. Vielleicht könnte man den alten Lagerraum am Ende des Flurs umbauen, der wird kaum noch genutzt. Dann hätten wir einen Besprechungsraum, ohne neue Flächen anmieten zu müssen. Zusätzlich könnten wir eine Ecke des Großraumbüros als Ruhezone einrichten, in der nicht gesprochen wird.' },
            { q: 'Eine Ruhezone, gute Idee. Aber wer sorgt dafür, dass sich alle daran halten?', secs: 60, prep: 0,
              model: 'Ich finde, wir sollten gemeinsam im Team ein paar Regeln festlegen, statt dass die Geschäftsleitung sie einfach vorschreibt. Wenn alle mitentscheiden, halten sie sich eher daran. Zum Beispiel: In der Ruhezone keine Gespräche, Telefonate nur in den Boxen, und wer gestört wird, darf freundlich darauf hinweisen. Nach drei Monaten könnten wir dann prüfen, ob es funktioniert.' },
            { q: 'Und was halten Sie davon, wenn wir zusätzlich mehr Homeoffice-Tage vorschlagen?', secs: 60, prep: 0 },
            { q: 'Gut, dann fassen wir zusammen: Was schlagen wir der Geschäftsleitung jetzt konkret vor?', secs: 45, prep: 0,
              model: 'Wir schlagen also vor, zwei Telefonboxen aufzustellen, den Lagerraum zu einem Besprechungsraum umzubauen und eine Ruhezone einzurichten. Die Regeln dafür erarbeitet das Team gemeinsam, und nach drei Monaten ziehen wir Bilanz. Einverstanden?' },
          ] },
      ],
    },
  ],
};
