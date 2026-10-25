// Alimun test German B1, paper Lesen (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'lesen', title: 'Lesen', minutes: 40,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Ein Blogbeitrag',
      about: 'Lesen Sie den Blogbeitrag. Sind die Aussagen richtig oder falsch, oder steht dazu nichts im Text?',
      text: { title: 'Ein Jahr ohne Auto – meine Bilanz', md: 'Vor genau einem Jahr habe ich mein Auto verkauft. Viele Freunde haben damals gelacht: „Du wohnst doch auf dem Land, wie willst du ohne Auto zur Arbeit kommen?“ Tatsächlich liegt mein Dorf zwölf Kilometer von der Stadt entfernt, in der ich als Krankenpfleger arbeite. Der Grund für meine Entscheidung war eigentlich nicht die Umwelt, sondern das Geld: Nach einer teuren Reparatur wollte ich einfach nicht mehr so viel für Versicherung, Benzin und Werkstatt bezahlen.\n\nIn den ersten Wochen war es schwierig. Der Bus fährt bei uns nur einmal pro Stunde und am Wochenende noch seltener. Wenn ich Spätdienst hatte, musste ich manchmal eine Stunde auf den letzten Bus warten. Deshalb habe ich mir im Frühling ein E-Bike gekauft. Seitdem fahre ich fast jeden Tag mit dem Rad zur Arbeit, auch bei Regen. Ich brauche dafür 35 Minuten, also nur zehn Minuten mehr als früher mit dem Auto.\n\nWas hat sich sonst verändert? Ich bin fitter geworden und habe vier Kilo abgenommen, obwohl ich nicht weniger esse. Einkaufen ist dagegen komplizierter: Große Einkäufe mache ich jetzt einmal pro Woche zusammen mit meiner Nachbarin, die ein Auto hat. Dafür bezahle ich ihr einen Teil des Benzins.\n\nNatürlich gibt es auch Nachteile. Spontane Ausflüge in die Berge sind schwieriger geworden, und meine Eltern, die 200 Kilometer entfernt wohnen, besuche ich seltener. Trotzdem möchte ich kein Auto mehr haben. Für den Urlaub miete ich mir einfach eins – das ist am Ende immer noch billiger.\n\nMein Tipp für alle, die es ausprobieren möchten: Verkauft das Auto nicht sofort. Lasst es einen Monat stehen und schaut, ob ihr ohne zurechtkommt.\n\n*Karim*' },
      blocks: [
        { t: 'ex', kind: 'tf', ng: true, h: 'Richtig, falsch oder nicht im Text?', items: [
          { q: 'Karims Freunde waren am Anfang skeptisch.', a: 't', why: 'Die Freunde haben gelacht und gefragt: „Wie willst du ohne Auto zur Arbeit kommen?“' },
          { q: 'Karim hat sein Auto vor allem wegen der Umwelt verkauft.', a: 'f', why: 'Karim schreibt: „Der Grund war eigentlich nicht die Umwelt, sondern das Geld.“' },
          { q: 'Am Wochenende fährt der Bus öfter als unter der Woche.', a: 'f', why: 'Am Wochenende fährt der Bus „noch seltener“.' },
          { q: 'Mit dem E-Bike ist Karim nur wenig langsamer als früher mit dem Auto.', a: 't', why: 'Er braucht 35 Minuten, „nur zehn Minuten mehr als früher mit dem Auto“.' },
          { q: 'Karim hat das E-Bike gebraucht gekauft.', a: 'ng', why: 'Karim schreibt nur, dass er im Frühling ein E-Bike gekauft hat, nicht, ob es neu oder gebraucht war.' },
          { q: 'Karim besucht seine Eltern heute nicht mehr so oft wie früher.', a: 't', why: 'Er schreibt: „Meine Eltern … besuche ich seltener.“' },
          { q: 'Die Nachbarin fährt Karim im Winter zur Arbeit.', a: 'ng', why: 'Karim kauft mit der Nachbarin ein. Über Fahrten zur Arbeit im Winter steht nichts im Text.' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Meinungen',
      about: 'Vier Personen schreiben über das Arbeiten im Homeoffice. Welche Aussage passt zu welcher Person? Eine Person kann mehrmals passen.',
      texts: [
        { md: '**Birgit**, 52, Teamleiterin in einer Versicherung\n\nSeit zwei Jahren arbeitet mein Team drei Tage pro Woche zu Hause. Am Anfang hatte ich Sorge, dass weniger gearbeitet wird, aber das Gegenteil ist passiert. Schwierig finde ich nur, dass neue Kolleginnen und Kollegen das Team kaum kennenlernen. Deshalb haben wir jetzt einen festen Bürotag, an dem alle kommen müssen.' },
        { md: '**Mehmet**, 29, Programmierer\n\nFür mich ist das Homeoffice perfekt. Ich spare jeden Tag fast zwei Stunden Fahrzeit und kann konzentriert arbeiten, weil mich niemand stört. Mittags koche ich selbst, das ist gesünder als das Essen in der Kantine. Ins Büro gehe ich nur, wenn es wirklich nötig ist, zum Beispiel für ein großes Projektmeeting.' },
        { md: '**Clara**, 38, Bankkauffrau, zwei Kinder\n\nViele denken, mit Kindern ist Homeoffice ideal. Bei mir ist es eher stressig: Wenn die Kinder am Nachmittag nach Hause kommen, kann ich kaum noch telefonieren. Trotzdem möchte ich nicht darauf verzichten, denn so kann ich die Kinder morgens selbst zur Schule bringen. Ich wünsche mir aber, dass meine Firma mir einen besseren Bürostuhl bezahlt.' },
        { md: '**Oliver**, 45, Grafiker\n\nIch habe es ein Jahr lang versucht und bin dann wieder ins Büro zurückgegangen. Zu Hause habe ich mich oft einsam gefühlt, und es war schwer, nach der Arbeit abzuschalten. Mein Laptop lag ja immer auf dem Küchentisch. Heute trenne ich Arbeit und Freizeit wieder klar, und das tut mir gut.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Wer sagt das?', opts: ['Birgit', 'Mehmet', 'Clara', 'Oliver'], items: [
          { q: 'Diese Person hat sich zu Hause allein gefühlt.', a: 3, why: 'Oliver schreibt: „Zu Hause habe ich mich oft einsam gefühlt.“' },
          { q: 'Diese Person spart durch das Homeoffice viel Zeit.', a: 1, why: 'Mehmet spart „jeden Tag fast zwei Stunden Fahrzeit“.' },
          { q: 'Diese Person möchte bessere Möbel für den Arbeitsplatz zu Hause.', a: 2, why: 'Clara wünscht sich, dass die Firma ihr einen besseren Bürostuhl bezahlt.' },
          { q: 'Diese Person hat eine Regel eingeführt, damit sich das Team regelmäßig sieht.', a: 0, why: 'Birgits Team hat jetzt einen festen Bürotag, an dem alle kommen müssen.' },
          { q: 'Diese Person isst zu Hause gesünder.', a: 1, why: 'Mehmet kocht mittags selbst, „das ist gesünder als das Essen in der Kantine“.' },
          { q: 'Für diese Person ist das Telefonieren am Nachmittag schwierig.', a: 2, why: 'Clara kann kaum noch telefonieren, wenn die Kinder am Nachmittag nach Hause kommen.' },
          { q: 'Diese Person hatte am Anfang Zweifel, aber die Erfahrung war positiv.', a: 0, why: 'Birgit hatte Sorge, dass weniger gearbeitet wird, „aber das Gegenteil ist passiert“.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Ein Zeitungsartikel',
      about: 'Lesen Sie den Artikel. Wählen Sie die richtige Antwort.',
      text: { title: 'Gemüse vom Parkplatz', md: 'Wo früher Autos standen, wachsen heute Tomaten, Bohnen und Kräuter. Auf einem alten Parkplatz hinter dem Bahnhof in Kesselbach haben Nachbarn vor drei Jahren einen Gemeinschaftsgarten gegründet. Die Idee hatte die Rentnerin Margarete Vogt. „Ich habe jahrelang aus dem Fenster auf diesen grauen Platz geschaut und mich gefragt, warum ihn niemand benutzt“, erzählt sie.\n\nDie Stadt hat den Platz zuerst für zwei Jahre zur Verfügung gestellt – kostenlos, aber unter einer Bedingung: Die Gärtner durften den Boden nicht verändern. Deshalb wächst alles in Holzkisten und alten Badewannen, die die Mitglieder auf dem Sperrmüll gefunden oder geschenkt bekommen haben. Inzwischen wurde der Vertrag um fünf Jahre verlängert.\n\nHeute machen rund 40 Menschen mit, vom Kindergartenkind bis zum 80-jährigen Rentner. Jede Familie kann ein eigenes Beet bekommen, aber viele Flächen werden gemeinsam gepflegt. Wer mitmachen möchte, muss nichts bezahlen. Man erwartet nur, dass jeder mindestens zwei Stunden pro Monat bei der gemeinsamen Arbeit hilft, zum Beispiel beim Gießen im Sommer.\n\nFür viele ist der Garten mehr als ein Ort für Gemüse. „Ich bin vor einem Jahr nach Kesselbach gekommen und kannte hier niemanden“, sagt Omar, 31. „Im Garten habe ich nicht nur meine Nachbarn kennengelernt, sondern auch viel Deutsch gelernt.“ Einmal im Monat gibt es ein Gartenfest, zu dem jeder etwas zu essen mitbringt.\n\nProbleme gibt es trotzdem. Im letzten Sommer wurden zweimal Werkzeuge gestohlen, jetzt gibt es eine Kiste mit Schloss. Außerdem ist das Wasser knapp, denn eine eigene Wasserleitung gibt es nicht. Deshalb sammeln die Gärtner Regenwasser in großen Tonnen. Der nächste Plan: ein kleines Bienenhotel, damit im Garten noch mehr wächst.' },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Antwort.', items: [
          { q: 'Wie ist der Garten entstanden?', o: ['Eine Nachbarin wollte den leeren Platz nutzen.', 'Die Stadt wollte den Parkplatz verkaufen.', 'Ein Verein hat den Platz gekauft.'], why: 'Margarete Vogt hat sich gefragt, „warum ihn niemand benutzt“, und hatte die Idee.' },
          { q: 'Warum wachsen die Pflanzen in Kisten und Badewannen?', o: ['Die Gärtner durften den Boden nicht verändern.', 'Der Boden war zu schlecht für Gemüse.', 'Kisten waren billiger als Erde.'], why: 'Die Stadt hatte eine Bedingung: Die Gärtner durften den Boden nicht verändern. „Deshalb wächst alles in Holzkisten.“' },
          { q: 'Was gilt heute für den Platz?', o: ['Der Vertrag wurde um fünf Jahre verlängert.', 'Der Garten darf nur noch zwei Jahre bleiben.', 'Die Gärtner müssen jetzt Miete bezahlen.'], why: 'Im Text steht: „Inzwischen wurde der Vertrag um fünf Jahre verlängert.“' },
          { q: 'Was erwartet man von neuen Mitgliedern?', o: ['Sie helfen regelmäßig bei der gemeinsamen Arbeit.', 'Sie bezahlen einen kleinen Beitrag.', 'Sie pflegen ein eigenes Beet.'], why: 'Man erwartet, dass jeder mindestens zwei Stunden pro Monat bei der gemeinsamen Arbeit hilft; ein eigenes Beet ist möglich, aber keine Pflicht.' },
          { q: 'Was sagt Omar über den Garten?', o: ['Er hat dort Kontakte gefunden und Deutsch gelernt.', 'Er organisiert dort die Gartenfeste.', 'Er baut dort Gemüse aus seiner Heimat an.'], why: 'Omar sagt: „Im Garten habe ich nicht nur meine Nachbarn kennengelernt, sondern auch viel Deutsch gelernt.“' },
          { q: 'Wie lösen die Gärtner das Problem mit dem Wasser?', o: ['Sie sammeln Regenwasser.', 'Sie haben eine eigene Leitung gebaut.', 'Sie gießen nur einmal im Monat.'], why: 'Es gibt keine eigene Leitung, „deshalb sammeln die Gärtner Regenwasser in großen Tonnen“.' },
        ] },
      ] },
  ],
};
