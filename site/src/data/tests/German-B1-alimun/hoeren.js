// Alimun test German B1, paper Hören (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'hoeren', title: 'Hören', minutes: 30,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Durchsagen und Nachrichten',
      about: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie die richtige Antwort.',
      plays: 2,
      recs: [
        { lines: [{ who: 'Sprecherin', s: 'Achtung an Gleis 4: Der ICE nach Frankfurt, planmäßige Abfahrt 10 Uhr 12, hat heute circa 25 Minuten Verspätung. Grund dafür ist eine Störung am Signal. Reisende nach Mannheim nehmen bitte den Regionalexpress um 10 Uhr 20 von Gleis 6. Wir bitten um Entschuldigung.' }] },
        { lines: [{ who: 'Sabine', s: 'Hallo Peter, hier ist Sabine aus der Buchhaltung. Es geht um das Meeting morgen mit den Kunden aus Graz. Frau Lehmann ist leider krank, deshalb verschieben wir den Termin auf Donnerstag. Die Uhrzeit bleibt gleich, aber wir treffen uns im Raum 2.14 statt im großen Konferenzraum. Den Raum habe ich schon gebucht. Kannst du bitte den Kunden Bescheid sagen? Danke dir!' }] },
        { lines: [{ who: 'Herr Krüger', s: 'Am Samstag ist wieder die Lange Nacht der Museen! Von 18 bis 2 Uhr haben dreißig Museen geöffnet. Mit einem Ticket für 15 Euro besuchen Sie alle Museen und fahren kostenlos mit den Sonderbussen von Museum zu Museum. Kinder unter zwölf Jahren zahlen nichts. Tickets gibt es an allen Museumskassen und in der Touristeninformation am Marktplatz.' }] },
        { lines: [{ who: 'Frau Engel', s: 'Guten Tag, hier ist die Praxis Dr. Hartmann, Engel am Apparat. Ich rufe wegen Ihrer Blutwerte an. Die Ergebnisse sind da, und Dr. Hartmann möchte sie gern persönlich mit Ihnen besprechen. Keine Sorge, es ist nichts Schlimmes. Bitte rufen Sie uns zurück und vereinbaren Sie einen Termin für nächste Woche. Vielen Dank.' }] },
        { lines: [{ who: 'Herr Brandt', s: 'Eine Information der Stadtwerke: Wegen des Feiertags am Montag wird die Biotonne in dieser Woche nicht am Dienstag, sondern erst am Mittwoch geleert. Die gelben Säcke werden wie immer am Freitag abgeholt. Bitte stellen Sie die Tonnen bis sieben Uhr morgens an die Straße.' }] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', rec: 0, h: 'Am Bahnhof: Wählen Sie die richtige Antwort.', items: [
          { q: 'Was sollen Reisende nach Mannheim tun?', o: ['Mit dem Regionalexpress um 10 Uhr 20 fahren.', 'Um 10 Uhr 12 von Gleis 4 abfahren.', 'Einen Ersatzbus nehmen.'], why: 'Die Sprecherin sagt: „Reisende nach Mannheim nehmen bitte den Regionalexpress um 10 Uhr 20 von Gleis 6.“' },
        ] },
        { t: 'ex', kind: 'choice', rec: 1, h: 'Eine Nachricht von einer Kollegin: Wählen Sie die richtige Antwort.', items: [
          { q: 'Was soll Peter tun?', o: ['Die Kunden informieren.', 'Einen anderen Raum buchen.', 'Frau Lehmann anrufen.'], why: 'Den Raum hat Sabine schon gebucht; sie fragt: „Kannst du bitte den Kunden Bescheid sagen?“' },
        ] },
        { t: 'ex', kind: 'choice', rec: 2, h: 'Im Radio: Wählen Sie die richtige Antwort.', items: [
          { q: 'Was bekommt man mit dem Ticket für 15 Euro?', o: ['Freie Fahrt mit den Sonderbussen.', 'Ein Abendessen im Museum.', 'Eine Führung durch alle Museen.'], why: 'Mit dem Ticket fährt man „kostenlos mit den Sonderbussen von Museum zu Museum“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 3, h: 'Auf dem Anrufbeantworter: Wählen Sie die richtige Antwort.', items: [
          { q: 'Warum ruft Frau Engel an?', o: ['Der Patient soll einen Termin vereinbaren.', 'Die Blutwerte sind sehr schlecht.', 'Der Termin morgen fällt aus.'], why: 'Frau Engel sagt: „Bitte rufen Sie uns zurück und vereinbaren Sie einen Termin“; es ist nichts Schlimmes.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 4, h: 'Eine Information der Stadt: Wählen Sie die richtige Antwort.', items: [
          { q: 'Wann wird die Biotonne diese Woche geleert?', o: ['Am Mittwoch.', 'Am Dienstag.', 'Am Freitag.'], why: 'Wegen des Feiertags wird die Biotonne „nicht am Dienstag, sondern erst am Mittwoch geleert“.' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Der erste Tag im Betrieb',
      about: 'Sie beginnen eine Ausbildung. Die Ausbilderin begrüßt die neuen Auszubildenden. Sie hören den Text zweimal. Ergänzen Sie die Notizen.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Frau Schneider', s: 'Guten Morgen und herzlich willkommen bei Gartenbau Lindner! Mein Name ist Katrin Schneider, ich bin hier für die Ausbildung zuständig. Ich erkläre Ihnen kurz, wie Ihre erste Woche aussieht.' },
          { who: 'Frau Schneider', s: 'Heute Vormittag machen wir zuerst eine Führung über das Gelände. Danach gehen wir zusammen in die Kantine. Heute ist das Mittagessen für Sie natürlich kostenlos, sonst kostet ein Essen 4 Euro 50.' },
          { who: 'Frau Schneider', s: 'Am Nachmittag bekommen Sie Ihre Arbeitskleidung. Dafür brauchen wir Ihre Schuhgröße, denn Sicherheitsschuhe sind bei uns Pflicht. Wenn Sie Ihre Größe nicht wissen, können Sie die Schuhe auch anprobieren.' },
          { who: 'Frau Schneider', s: 'Ab morgen arbeiten Sie in Ihren Teams. Die Arbeit beginnt um sieben Uhr. Nur im Juli und August fangen wir schon um halb sieben an, weil es mittags zu heiß wird. Feierabend ist um Viertel nach drei.' },
          { who: 'Frau Schneider', s: 'Jeden Mittwoch haben Sie Berufsschule. An diesen Tagen kommen Sie nicht in den Betrieb.' },
          { who: 'Frau Schneider', s: 'Wenn Sie krank sind, rufen Sie bitte bis acht Uhr Ihren Teamleiter an, nicht mich. Ab dem dritten Tag brauchen wir eine Krankmeldung vom Arzt.' },
          { who: 'Frau Schneider', s: 'Und zum Schluss: Wenn Sie Fragen haben, kommen Sie jederzeit zu mir. Mein Büro ist im ersten Stock, Zimmer 104. So, und jetzt geht es los mit der Führung.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Ergänzen Sie die Notizen. Schreiben Sie ein Wort oder eine Zahl.',
          text: 'Mittagessen in der Kantine: sonst {} Euro\n\nFür die Arbeitskleidung nennen: die {}\n\nArbeitsbeginn (außer Juli und August): {} Uhr\n\nFeierabend: Viertel nach {}\n\nBerufsschule: jeden {}\n\nKrank: bis {} Uhr den Teamleiter anrufen\n\nKrankmeldung vom Arzt: ab dem {} Tag\n\nBüro von Frau Schneider: Zimmer {}',
          items: [
            { a: ['4,50', '4.50', '4,5', 'vier Euro fünfzig'], why: 'Frau Schneider sagt: „Sonst kostet ein Essen 4 Euro 50.“' },
            { a: ['Schuhgröße', 'Schuhgroesse'], why: 'Für die Sicherheitsschuhe brauchen sie die Schuhgröße.' },
            { a: ['7', 'sieben', '7.00', '7:00'], why: 'Die Arbeit beginnt um sieben Uhr; nur im Juli und August um halb sieben.' },
            { a: ['drei', '3', '15'], why: 'Frau Schneider sagt: „Feierabend ist um Viertel nach drei.“' },
            { a: ['Mittwoch'], why: 'Frau Schneider sagt: „Jeden Mittwoch haben Sie Berufsschule.“' },
            { a: ['8', 'acht', '8.00', '8:00'], why: 'Man ruft bis acht Uhr den Teamleiter an.' },
            { a: ['dritten', '3.', '3', 'dritte'], why: 'Frau Schneider sagt: „Ab dem dritten Tag brauchen wir eine Krankmeldung.“' },
            { a: ['104'], why: 'Ihr Büro ist im ersten Stock, Zimmer 104.' },
          ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Ein Gespräch in der WG',
      about: 'Sophie und Jonas wohnen zusammen. Sie sprechen über den Putzplan. Sie hören das Gespräch zweimal. Wer sagt das: Sophie, Jonas oder beide?',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Sophie', s: 'Jonas, hast du kurz Zeit? Ich wollte mit dir über den Putzplan sprechen.' },
          { who: 'Jonas', s: 'Klar. Was ist denn los?' },
          { who: 'Sophie', s: 'Na ja, ehrlich gesagt ärgere ich mich ein bisschen. Letzte Woche warst du für die Küche dran, und am Sonntag stand immer noch das ganze Geschirr in der Spüle.' },
          { who: 'Jonas', s: 'Ja, du hast recht, tut mir leid. Ich hatte so viel Stress mit meinen Prüfungen an der Uni. Aber ehrlich gesagt finde ich den Plan auch nicht so gut. Die Küche ist viel mehr Arbeit als das Bad.' },
          { who: 'Sophie', s: 'Hm, das stimmt eigentlich. Was schlägst du vor?' },
          { who: 'Jonas', s: 'Wir könnten jeden Tag kurz aufräumen, statt einmal pro Woche alles zu machen. Wer kocht, spült auch sofort ab.' },
          { who: 'Sophie', s: 'Die Idee gefällt mir. Aber das große Putzen, also Boden wischen und den Kühlschrank sauber machen, das müssen wir trotzdem weiter planen.' },
          { who: 'Jonas', s: 'Okay. Dann wechseln wir uns dabei jede Woche ab, so wie bisher.' },
          { who: 'Sophie', s: 'Einverstanden. Und noch was: Im Oktober zieht ja Lea ein. Sollen wir ihr den Plan gleich am ersten Tag zeigen?' },
          { who: 'Jonas', s: 'Ich würde lieber ein paar Tage warten. Sie soll sich erst mal wohlfühlen und nicht denken, dass wir total streng sind.' },
          { who: 'Sophie', s: 'Hm, ich weiß nicht. Ich finde, klare Regeln von Anfang an sind fairer für alle.' },
          { who: 'Jonas', s: 'Na gut, dann zeigen wir ihn ihr, aber ganz entspannt, beim Abendessen.' },
          { who: 'Sophie', s: 'Super. Ich koche an dem Abend!' },
          { who: 'Jonas', s: 'Und ich spüle danach. Sofort, versprochen.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Wer sagt das?', opts: ['Sophie', 'Jonas', 'beide'], items: [
          { q: 'Diese Person ärgert sich über das schmutzige Geschirr.', a: 0, why: 'Sophie sagt: „Ich ärgere mich ein bisschen … am Sonntag stand immer noch das ganze Geschirr in der Spüle.“' },
          { q: 'Diese Person hatte in letzter Zeit viel Stress an der Uni.', a: 1, why: 'Jonas sagt: „Ich hatte so viel Stress mit meinen Prüfungen an der Uni.“' },
          { q: 'Diese Person findet, dass die Küche mehr Arbeit macht als das Bad.', a: 2, why: 'Jonas sagt es, und Sophie antwortet: „Das stimmt eigentlich.“' },
          { q: 'Diese Person schlägt vor, nach dem Kochen sofort abzuwaschen.', a: 1, why: 'Jonas sagt: „Wer kocht, spült auch sofort ab.“' },
          { q: 'Diese Person möchte das große Putzen weiter planen.', a: 0, why: 'Sophie sagt: „Das müssen wir trotzdem weiter planen.“' },
          { q: 'Diese Person möchte der neuen Mitbewohnerin den Plan nicht sofort zeigen.', a: 1, why: 'Jonas sagt: „Ich würde lieber ein paar Tage warten.“' },
          { q: 'Diese Person findet klare Regeln von Anfang an fair.', a: 0, why: 'Sophie sagt: „Klare Regeln von Anfang an sind fairer für alle.“' },
        ] },
      ] },
  ],
};
