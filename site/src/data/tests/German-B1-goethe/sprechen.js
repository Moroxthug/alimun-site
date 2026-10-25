// Goethe-Zertifikat B1 practice test: Sprechen (circa 15 Minuten, drei Teile). Written by Alimun.
// The examiner plays the partner in Teil 1 and asks the questions in Teil 3.
export const PAPER = {
  id: 'sprechen', title: 'Sprechen', minutes: 15,
  parts: [
    { id: 't1', ref: 'Teil 1', title: 'Gemeinsam etwas planen',
      about: 'Dauer: circa drei Minuten. Ihre Nachbarin, Frau Okafor, zieht nach zwanzig Jahren aus Ihrem Haus aus. Sie möchten mit Ihrem Gesprächspartner eine kleine Abschiedsfeier für sie organisieren. Sprechen Sie über die Punkte auf dem Zettel, machen Sie Vorschläge und reagieren Sie auf die Vorschläge Ihres Gesprächspartners. Planen und entscheiden Sie gemeinsam, was Sie tun möchten.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'goethe', h: 'Planen Sie gemeinsam eine Abschiedsfeier.', items: [
          { q: 'Hallo! Hast du schon gehört? Frau Okafor aus dem Erdgeschoss zieht Ende des Monats aus. Ich finde, wir sollten eine kleine Abschiedsfeier für sie organisieren. Was meinst du, wann könnten wir feiern?', secs: 40,
            notes: ['Eine Abschiedsfeier für Frau Okafor planen', 'Wann feiern?', 'Wo feiern?', 'Wen einladen?', 'Essen und Getränke?', 'Geschenk?'] },
          { q: 'Ja, das passt mir auch. Und wo sollen wir feiern? Ich dachte an den Hof hinter dem Haus. Aber was machen wir, wenn es regnet?', secs: 40 },
          { q: 'Gute Idee. Wen sollen wir denn einladen? Nur die Leute aus unserem Haus oder auch ihre Freunde und ihre Familie?', secs: 35 },
          { q: 'Und was machen wir mit dem Essen und den Getränken? Sollen wir alles selbst machen oder lieber etwas bestellen?', secs: 40 },
          { q: 'Fehlt nur noch ein Geschenk. Hast du eine Idee, was wir ihr schenken könnten?', secs: 40 },
          { q: 'Super, dann haben wir eigentlich alles. Kannst du noch einmal kurz sagen, wer von uns beiden was macht?', secs: 30 },
        ] },
      ] },

    { id: 't2', ref: 'Teil 2', title: 'Ein Thema präsentieren',
      about: 'Dauer: circa drei Minuten. Sie sollen Ihren Zuhörern ein aktuelles Thema präsentieren. Dazu finden Sie hier fünf Folien. Folgen Sie den Anweisungen auf den Folien und schreiben Sie Ihre Notizen und Ideen auf.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'goethe', h: 'Präsentieren Sie das Thema „Arbeiten im Homeoffice: eine gute Idee?“.', items: [
          { q: 'Bitte beginnen Sie jetzt mit Ihrer Präsentation zum Thema „Arbeiten im Homeoffice: eine gute Idee?“.', secs: 120, prep: 60,
            notes: [
              'Stellen Sie Ihr Thema vor. Erklären Sie den Inhalt und die Struktur Ihrer Präsentation.',
              'Berichten Sie von Ihrer Situation oder einem Erlebnis im Zusammenhang mit dem Thema.',
              'Berichten Sie von der Situation in Ihrem Heimatland und geben Sie Beispiele.',
              'Nennen Sie die Vor- und Nachteile und sagen Sie dazu Ihre Meinung. Geben Sie auch Beispiele.',
              'Beenden Sie Ihre Präsentation und bedanken Sie sich bei den Zuhörern.',
            ],
            model: 'In meiner Präsentation geht es um das Thema „Arbeiten im Homeoffice: eine gute Idee?“. Zuerst erzähle ich von meinen eigenen Erfahrungen, dann berichte ich über die Situation in meinem Heimatland. Danach spreche ich über die Vor- und Nachteile, und zum Schluss sage ich meine Meinung.\n\nIch arbeite in einem Reisebüro, und seit zwei Jahren kann ich an zwei Tagen in der Woche zu Hause arbeiten. Am Anfang fand ich das toll, weil ich morgens nicht mehr mit dem Bus fahren musste. Aber nach ein paar Wochen habe ich gemerkt, dass ich zu Hause oft länger arbeite und keine richtige Pause mache.\n\nIn meinem Heimatland, in Spanien, war Homeoffice früher nicht sehr verbreitet. Heute arbeiten vor allem in großen Städten viele Leute zu Hause, zum Beispiel in Banken oder bei Versicherungen. In kleinen Firmen ist es aber immer noch selten.\n\nEin großer Vorteil ist, dass man viel Zeit spart, weil man nicht ins Büro fahren muss. Man kann sich die Arbeit auch freier einteilen, und das ist besonders für Eltern praktisch. Ein Nachteil ist, dass man die Kollegen weniger sieht. Manchmal fühlt man sich ein bisschen allein, und kurze Fragen dauern per E-Mail viel länger. Außerdem hat nicht jeder zu Hause einen ruhigen Arbeitsplatz.\n\nMeiner Meinung nach ist eine Mischung am besten: zwei oder drei Tage zu Hause und die anderen Tage im Büro. So hat man die Vorteile von beidem.\n\nDas war meine Präsentation. Vielen Dank fürs Zuhören! Haben Sie noch Fragen?' },
        ] },
      ] },

    { id: 't3', ref: 'Teil 3', title: 'Über ein Thema sprechen',
      about: 'Dauer: circa zwei Minuten. Nach Ihrer Präsentation: Beantworten Sie die Fragen der Prüferin und Ihres Gesprächspartners zu Ihrem Thema.',
      blocks: [
        { t: 'ex', kind: 'talk', marking: 'goethe', h: 'Beantworten Sie die Fragen zu Ihrer Präsentation.', items: [
          { q: 'Vielen Dank für Ihre Präsentation. Ich habe eine Frage: Würden Sie selbst lieber jeden Tag zu Hause arbeiten oder lieber im Büro? Warum?', secs: 30 },
          { q: 'Welche Berufe kann man Ihrer Meinung nach gar nicht von zu Hause aus machen?', secs: 30 },
          { q: 'Was sollte man tun, damit man im Homeoffice nicht zu viel arbeitet?', secs: 30 },
        ] },
      ] },
  ],
};
