// German-B2-goethe, Modul Schreiben (75 Minuten, 2 Teile). Original Alimun tasks and model answers; draft for review.
export const PAPER = {
  id: 'schreiben', title: 'Schreiben', minutes: 75,
  parts: [
    { id: 't1', ref: 'Teil 1', title: 'Forumsbeitrag',
      about: 'Sie schreiben einen Beitrag in einem Online-Forum. Wählen Sie ein Thema. Schreiben Sie etwa 150 Wörter. Sie haben dafür etwa 50 Minuten Zeit.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'goethe', choose: true,
          h: 'Wählen Sie Thema A oder Thema B und schreiben Sie Ihren Beitrag.',
          items: [
            { task: '**Thema A: Ehrenamt**\n\nIn einem Online-Forum einer Zeitschrift diskutieren Leserinnen und Leser darüber, ob sich jeder Mensch ehrenamtlich engagieren sollte. Sie möchten auch Ihre Meinung dazu schreiben.\n\nÄußern Sie Ihre Meinung dazu, ob sich jeder ehrenamtlich engagieren sollte. Nennen Sie Gründe, warum viele Menschen kein Ehrenamt übernehmen. Nennen Sie andere Möglichkeiten, wie man anderen Menschen helfen kann. Beschreiben Sie, welche Rolle ehrenamtliche Arbeit in Ihrem Heimatland spielt.\n\nDenken Sie an eine Einleitung und einen Schluss.',
              min: 140, max: 200,
              model: 'Liebe Forumsmitglieder,\n\ndas Thema Ehrenamt finde ich sehr wichtig, und ich möchte gern meine Meinung dazu sagen. Meiner Ansicht nach wäre es gut, wenn sich mehr Menschen engagieren würden, aber man sollte niemanden dazu drängen. Ein Ehrenamt macht nur dann Sinn, wenn man es freiwillig und mit Freude übernimmt.\n\nEs gibt viele Gründe, warum Menschen kein Ehrenamt haben. Viele arbeiten Vollzeit, kümmern sich um Kinder oder pflegen ihre Eltern und sind abends einfach erschöpft. Andere wissen gar nicht, wo man Hilfe braucht.\n\nDabei kann man auch ohne festes Ehrenamt helfen, zum Beispiel indem man für eine ältere Nachbarin einkauft, Geld für eine Organisation spendet oder einmal im Jahr bei einer Aufräumaktion im Park mitmacht.\n\nIn meinem Heimatland spielt ehrenamtliche Arbeit eine große Rolle, vor allem in Vereinen und in der Kirchengemeinde. Ohne Freiwillige gäbe es in vielen Dörfern zum Beispiel keine Feuerwehr.\n\nIch bin gespannt auf eure Erfahrungen!\n\nViele Grüße\nAndrés' },
            { task: '**Thema B: Urlaub ohne Flugzeug**\n\nIn einem Online-Forum zum Thema Reisen wird darüber diskutiert, ob man im Urlaub auf Flugreisen verzichten sollte. Sie möchten auch Ihre Meinung dazu schreiben.\n\nÄußern Sie Ihre Meinung dazu, ob man im Urlaub auf das Flugzeug verzichten sollte. Nennen Sie Gründe, warum viele Menschen trotzdem gern fliegen. Nennen Sie andere Möglichkeiten, umweltfreundlicher zu reisen. Beschreiben Sie Vor- und Nachteile eines Urlaubs in der Nähe.\n\nDenken Sie an eine Einleitung und einen Schluss.',
              min: 140, max: 200,
              model: 'Hallo zusammen,\n\ndie Frage, ob man im Urlaub noch fliegen sollte, beschäftigt mich schon länger. Ich finde, dass man auf kurze Flüge verzichten sollte, wenn es eine gute Alternative gibt. Ein vollständiges Verbot von Urlaubsflügen halte ich allerdings für unrealistisch.\n\nViele Menschen fliegen trotzdem, weil es schnell und oft sogar billiger als die Bahn ist. Wer nur zwei Wochen Urlaub hat, möchte nicht zwei Tage im Zug verbringen. Außerdem erreicht man manche Ziele kaum anders.\n\nEs gibt aber Möglichkeiten, umweltfreundlicher zu reisen: Man kann mit dem Nachtzug fahren, seltener, dafür aber länger verreisen oder mit Freunden eine Fahrgemeinschaft bilden.\n\nEin Urlaub in der Nähe hat viele Vorteile. Man spart Zeit und Geld und entdeckt oft schöne Orte, die man gar nicht kannte. Ein Nachteil ist, dass das Wetter weniger sicher ist und man vielleicht nicht das Gefühl hat, wirklich weit weg zu sein.\n\nWie seht ihr das?\n\nViele Grüße\nLena' },
          ] },
      ] },
    { id: 't2', ref: 'Teil 2', title: 'Nachricht an einen Vorgesetzten',
      about: 'Sie schreiben eine formelle Nachricht. Schreiben Sie etwa 100 Wörter. Sie haben dafür etwa 25 Minuten Zeit.',
      blocks: [
        { t: 'ex', kind: 'write', marking: 'goethe',
          h: 'Schreiben Sie eine Nachricht an Herrn Brandt.',
          items: [
            { task: 'Sie arbeiten in der Marketingabteilung einer Firma. Ihr Abteilungsleiter, Herr Brandt, hat Sie gebeten, beim Sommerfest der Firma am nächsten Freitag die Gäste zu begrüßen und durch das Programm zu führen. Sie können an diesem Tag leider nicht.\n\nEntschuldigen Sie sich höflich und erklären Sie, warum Sie nicht können. Schlagen Sie eine Kollegin oder einen Kollegen vor, die oder der die Aufgabe übernehmen könnte. Bieten Sie an, bei der Vorbereitung zu helfen. Fragen Sie, bis wann Sie sich zurückmelden sollen.\n\nDenken Sie an eine passende Anrede und einen Gruß am Schluss.',
              min: 90, max: 140,
              model: 'Sehr geehrter Herr Brandt,\n\nvielen Dank für Ihr Vertrauen und Ihre Anfrage, beim Sommerfest die Gäste zu begrüßen und durch das Programm zu führen. Leider muss ich Ihnen absagen, denn meine Schwester heiratet an diesem Freitag in Hamburg, und ich habe den Tag schon vor Monaten als Urlaub eingetragen. Das tut mir sehr leid.\n\nIch würde Frau Keller aus unserem Team vorschlagen. Sie hat schon mehrere Kundenveranstaltungen moderiert und spricht sehr gern vor Publikum.\n\nGern helfe ich aber bei der Vorbereitung, zum Beispiel beim Programm oder bei den Einladungen. Bis wann soll ich mich bei Ihnen melden?\n\nMit freundlichen Grüßen\nDaniel Weber' },
          ] },
      ] },
  ],
};
