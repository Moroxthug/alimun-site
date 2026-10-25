// Goethe-Zertifikat B1 practice test: Hören (circa 40 Minuten, vier Teile, 30 Aufgaben). Written by Alimun.
export const PAPER = {
  id: 'hoeren', title: 'Hören', minutes: 40,
  parts: [
    { id: 't1', ref: 'Teil 1', title: 'Kurze Texte',
      about: 'Sie hören nun fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Frau Krämer', s: 'Guten Tag, Herr Yilmaz, hier ist Sandra Krämer von der Praxis Doktor Hoffmann. Es geht um Ihren Termin am Donnerstag um zehn Uhr.' },
          { who: 'Frau Krämer', s: 'Leider ist Frau Doktor Hoffmann diese Woche krank, deshalb müssen wir den Termin verschieben. Wir könnten Ihnen nächsten Dienstag um halb neun anbieten oder Mittwoch um vierzehn Uhr.' },
          { who: 'Frau Krämer', s: 'Bitte rufen Sie uns kurz zurück und sagen Sie uns, welcher Termin Ihnen besser passt. Wir sind heute bis achtzehn Uhr erreichbar und morgen ab acht.' },
          { who: 'Frau Krämer', s: 'Ach ja, und bringen Sie bitte zum Termin Ihre neue Versichertenkarte mit. Die alte ist ja seit Januar nicht mehr gültig. Vielen Dank und auf Wiederhören.' },
        ] },
        { lines: [
          { who: 'Presenter', s: 'Und jetzt die Verkehrsmeldungen. Auf der A7 zwischen Nordheim und Talburg gibt es nach einem Unfall einen Stau von zwölf Kilometern.' },
          { who: 'Presenter', s: 'Die Polizei rechnet damit, dass die Strecke noch bis zum Nachmittag gesperrt bleibt. Fahren Sie am besten schon in Nordheim ab und nehmen Sie die Bundesstraße 19.' },
          { who: 'Presenter', s: 'In der Innenstadt von Talburg ist heute wegen des Stadtfests die Bahnhofstraße gesperrt. Besucherinnen und Besucher des Festes parken bitte auf dem Messegelände. Von dort fährt alle zehn Minuten ein kostenloser Bus ins Zentrum.' },
        ] },
        { lines: [
          { who: 'Jonas', s: 'Hallo Anna, hier ist Jonas. Du, wegen Samstag: Der Wetterbericht sagt ja Regen fürs ganze Wochenende. Deshalb machen wir das Picknick zu Lauras Geburtstag nicht im Park, sondern bei mir in der Wohnung.' },
          { who: 'Jonas', s: 'Die Uhrzeit bleibt gleich, also um drei. Kannst du vielleicht einen Salat mitbringen? Um den Kuchen kümmert sich schon Tim.' },
          { who: 'Jonas', s: 'Und noch was: Wir haben uns überlegt, Laura zusammen einen Gutschein für einen Kletterkurs zu schenken. Wenn du mitmachen willst, wären das zwanzig Euro pro Person. Sag mir einfach bis Donnerstag Bescheid. Tschüss!' },
        ] },
        { lines: [
          { who: 'Herr Schmitt', s: 'Achtung am Gleis vier. Der Regionalexpress nach Kassel, planmäßige Abfahrt neun Uhr zweiunddreißig, hat heute wegen einer Signalstörung etwa fünfundzwanzig Minuten Verspätung.' },
          { who: 'Herr Schmitt', s: 'Reisende mit Anschluss an den Intercity nach Hannover nehmen bitte die Regionalbahn um neun Uhr vierzig von Gleis sieben. Diese Regionalbahn hält heute zusätzlich in Weidenbach.' },
          { who: 'Herr Schmitt', s: 'Wir bitten um Entschuldigung.' },
        ] },
        { lines: [
          { who: 'Presenter', s: 'Und hier noch unser Tipp fürs Wochenende: Im Stadtpark von Kaltenbach findet am Samstag und Sonntag wieder der große Pflanzenmarkt statt.' },
          { who: 'Presenter', s: 'Über sechzig Gärtnereien aus der Region verkaufen Blumen, Kräuter und Gemüsepflanzen für Balkon und Garten. Für Kinder gibt es wie jedes Jahr eine Bastelecke, wo sie einen eigenen Blumentopf bemalen können. Der Eintritt ist frei.' },
          { who: 'Presenter', s: 'Neu ist in diesem Jahr eine Tauschbörse: Bringen Sie einfach eine Pflanze mit, die Sie nicht mehr brauchen, und nehmen Sie eine andere mit nach Hause. Geöffnet ist der Markt an beiden Tagen von zehn bis achtzehn Uhr.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', rec: 0, h: 'Anruf aus der Arztpraxis: Richtig oder Falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Herr Yilmaz soll die Arztpraxis anrufen.', a: 0, why: '„Bitte rufen Sie uns kurz zurück und sagen Sie uns, welcher Termin Ihnen besser passt.“' },
        ] },
        { t: 'ex', kind: 'choice', rec: 0, h: 'Anruf aus der Arztpraxis: Wählen Sie die richtige Lösung.', items: [
          { q: 'Was soll Herr Yilmaz zum Termin mitbringen?', o: ['Seine neue Versichertenkarte.', 'Die Ergebnisse vom letzten Termin.', 'Eine Überweisung von einem anderen Arzt.'], why: '„Bringen Sie bitte zum Termin Ihre neue Versichertenkarte mit.“' },
        ] },
        { t: 'ex', kind: 'pick', rec: 1, h: 'Verkehrsmeldung im Radio: Richtig oder Falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Wegen eines Unfalls gibt es auf der A7 einen Stau.', a: 0, why: '„Auf der A7 ... gibt es nach einem Unfall einen Stau von zwölf Kilometern.“' },
        ] },
        { t: 'ex', kind: 'choice', rec: 1, h: 'Verkehrsmeldung im Radio: Wählen Sie die richtige Lösung.', items: [
          { q: 'Was sollen die Besucher des Stadtfests tun?', o: ['Auf dem Messegelände parken.', 'Mit dem Zug nach Talburg fahren.', 'In der Bahnhofstraße parken.'], why: '„Besucherinnen und Besucher des Festes parken bitte auf dem Messegelände.“' },
        ] },
        { t: 'ex', kind: 'pick', rec: 2, h: 'Nachricht von Jonas: Richtig oder Falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Die Geburtstagsfeier beginnt später als geplant.', a: 1, why: '„Die Uhrzeit bleibt gleich, also um drei“; nur der Ort ändert sich.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 2, h: 'Nachricht von Jonas: Wählen Sie die richtige Lösung.', items: [
          { q: 'Was soll Anna mitbringen?', o: ['Einen Salat.', 'Einen Kuchen.', 'Einen Gutschein.'], why: '„Kannst du vielleicht einen Salat mitbringen? Um den Kuchen kümmert sich schon Tim.“' },
        ] },
        { t: 'ex', kind: 'pick', rec: 3, h: 'Durchsage am Bahnhof: Richtig oder Falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Der Regionalexpress nach Kassel fällt heute aus.', a: 1, why: 'Der Zug fährt, hat aber „etwa fünfundzwanzig Minuten Verspätung“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 3, h: 'Durchsage am Bahnhof: Wählen Sie die richtige Lösung.', items: [
          { q: 'Was sollen Reisende nach Hannover tun?', o: ['Die Regionalbahn von Gleis sieben nehmen.', 'Auf den Regionalexpress an Gleis vier warten.', 'In Weidenbach in den Intercity umsteigen.'], why: 'Reisende zum Intercity nach Hannover „nehmen bitte die Regionalbahn um neun Uhr vierzig von Gleis sieben“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 4, h: 'Tipp fürs Wochenende: Richtig oder Falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Auf dem Markt kann man auch Pflanzen für den eigenen Gemüsegarten kaufen.', a: 0, why: 'Die Gärtnereien verkaufen „Blumen, Kräuter und Gemüsepflanzen für Balkon und Garten“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 4, h: 'Tipp fürs Wochenende: Wählen Sie die richtige Lösung.', items: [
          { q: 'Was ist in diesem Jahr neu?', o: ['Man kann Pflanzen tauschen.', 'Kinder können Blumentöpfe bemalen.', 'Der Eintritt ist kostenlos.'], why: '„Neu ist in diesem Jahr eine Tauschbörse“; die Bastelecke gibt es „wie jedes Jahr“.' },
        ] },
      ] },

    { id: 't2', ref: 'Teil 2', title: 'Eine Führung',
      about: 'Sie hören einen Text. Sie hören den Text einmal. Dazu lösen Sie fünf Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung. Sie nehmen an einer Führung durch das Stadttheater teil.',
      plays: 1,
      recs: [
        { lines: [
          { who: 'Frau Neumann', s: 'Herzlich willkommen im Stadttheater Kaltenbach! Mein Name ist Ulrike Neumann, ich arbeite hier in der Öffentlichkeitsarbeit und begleite Sie heute durch unser Haus. Die Führung dauert ungefähr anderthalb Stunden.' },
          { who: 'Frau Neumann', s: 'Bevor wir anfangen, eine Bitte: Fotografieren ist im Zuschauerraum und auf der Bühne erlaubt, aber nicht in den Werkstätten. Dort arbeiten die Kolleginnen und Kollegen gerade an den Kostümen für ein neues Stück, das erst im Dezember Premiere hat, und das soll noch eine Überraschung bleiben.' },
          { who: 'Frau Neumann', s: 'Wir beginnen hier im Foyer. Das Gebäude ist fast hundertzwanzig Jahre alt. Im Krieg wurde es zum Teil zerstört, und danach hat man es wieder aufgebaut, allerdings viel einfacher als vorher.' },
          { who: 'Frau Neumann', s: 'Die schönen Decken, die Sie hier sehen, sind also gar nicht so alt. Sie wurden erst vor acht Jahren, bei der großen Renovierung, nach alten Fotos neu gemacht.' },
          { who: 'Frau Neumann', s: 'Gleich gehen wir in den Zuschauerraum. Er hat sechshundertvierzig Plätze. Viele Besucher fragen mich, wo man am besten sitzt. Ehrlich gesagt: Die teuersten Plätze, ganz vorne in der ersten Reihe, sind nicht die besten. Am besten hört und sieht man in der Mitte des ersten Rangs, und die Karten dort sind sogar etwas günstiger.' },
          { who: 'Frau Neumann', s: 'Danach schauen wir uns die Bühne an. Das Besondere bei uns ist die Drehbühne. Sie kann sich in beide Richtungen drehen, und so kann man das Bühnenbild in wenigen Sekunden wechseln. Ich zeige Ihnen gleich, wie das funktioniert.' },
          { who: 'Frau Neumann', s: 'Zum Schluss besuchen wir die Schneiderei. Dort arbeiten zwölf Leute, und sie nähen fast alle Kostüme selbst. Nur Schuhe und Perücken kaufen wir bei Firmen, die darauf spezialisiert sind.' },
          { who: 'Frau Neumann', s: 'Und noch ein Hinweis: Wer möchte, kann nach der Führung ins Theatercafé gehen. Mit Ihrer Karte für die Führung bekommen Sie dort heute zehn Prozent Rabatt. Außerdem gibt es an der Kasse noch Restkarten für die Vorstellung heute Abend. So, und jetzt folgen Sie mir bitte.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Lösung.', items: [
          { q: 'Wo darf man während der Führung nicht fotografieren?', o: ['In den Werkstätten.', 'Auf der Bühne.', 'Im Zuschauerraum.'], why: 'Fotografieren ist „im Zuschauerraum und auf der Bühne erlaubt, aber nicht in den Werkstätten“.' },
          { q: 'Die Decken im Foyer ...', o: ['wurden bei der Renovierung neu gemacht.', 'sind fast hundertzwanzig Jahre alt.', 'sind seit dem Wiederaufbau nach dem Krieg unverändert.'], why: 'Sie „wurden erst vor acht Jahren, bei der großen Renovierung, nach alten Fotos neu gemacht“.' },
          { q: 'Wo sitzt man nach Meinung von Frau Neumann am besten?', o: ['In der Mitte des ersten Rangs.', 'In der ersten Reihe.', 'Ganz hinten im Zuschauerraum.'], why: '„Am besten hört und sieht man in der Mitte des ersten Rangs.“' },
          { q: 'Was kauft das Theater bei anderen Firmen?', o: ['Schuhe und Perücken.', 'Fast alle Kostüme.', 'Die Teile für die Drehbühne.'], why: '„Nur Schuhe und Perücken kaufen wir bei Firmen, die darauf spezialisiert sind.“' },
          { q: 'Was bekommen die Teilnehmer der Führung heute?', o: ['Einen Rabatt im Theatercafé.', 'Eine Karte für die Vorstellung am Abend.', 'Ein kostenloses Getränk.'], why: '„Mit Ihrer Karte für die Führung bekommen Sie dort heute zehn Prozent Rabatt.“' },
        ] },
      ] },

    { id: 't3', ref: 'Teil 3', title: 'Ein Gespräch',
      about: 'Sie hören nun ein Gespräch. Sie hören das Gespräch einmal. Dazu lösen Sie sieben Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Sie sitzen im Bus und hören, wie sich zwei Bekannte unterhalten.',
      plays: 1,
      recs: [
        { lines: [
          { who: 'Svenja', s: 'Daniel? Na so was! Dich hab ich ja ewig nicht gesehen!' },
          { who: 'Daniel', s: 'Svenja! Hallo! Ja, stimmt, das muss mindestens ein Jahr her sein. Wie geht’s dir denn?' },
          { who: 'Svenja', s: 'Gut, danke. Ein bisschen stressig gerade. Und du? Fährst du jetzt immer mit dem Bus? Früher bist du doch jeden Tag mit dem Auto gefahren.' },
          { who: 'Daniel', s: 'Ja, das Auto hab ich im Frühling verkauft. Ich arbeite ja jetzt nicht mehr in Bergheim, sondern hier in der Stadt, bei einer Versicherung. Mit dem Bus brauche ich nur zwanzig Minuten, und ich muss keinen Parkplatz suchen.' },
          { who: 'Svenja', s: 'Ach, du hast eine neue Stelle? Das wusste ich gar nicht. Und, gefällt’s dir?' },
          { who: 'Daniel', s: 'Ja, sehr. Die Kollegen sind nett, und ich kann zweimal in der Woche von zu Hause arbeiten. Das Einzige, was mir fehlt, ist die Natur. In Bergheim bin ich in der Mittagspause oft in den Wald gegangen. Hier esse ich meistens in der Kantine und gehe dann gleich wieder an den Schreibtisch.' },
          { who: 'Svenja', s: 'Das kann ich mir vorstellen. Bei uns hat sich auch einiges verändert. Wir sind im Sommer umgezogen, in die Nähe vom Bahnhof.' },
          { who: 'Daniel', s: 'Echt? Ich dachte, ihr wohnt so gern in eurem Häuschen am Stadtrand.' },
          { who: 'Svenja', s: 'Ja, schon. Aber seit die Kinder ausgezogen sind, war das Haus einfach zu groß für uns zwei. Und dann der Garten! Jedes Wochenende Rasen mähen, das wollte mein Mann nicht mehr. Jetzt haben wir eine Wohnung mit Balkon im dritten Stock, und das reicht völlig.' },
          { who: 'Daniel', s: 'Und die Kinder? Was machen die?' },
          { who: 'Svenja', s: 'Lena studiert Medizin in Freiburg, sie ist schon im vierten Semester. Und Max macht eine Ausbildung zum Koch, in einem Hotel in Hamburg. Den sehen wir leider nur selten, er hat ja fast jedes Wochenende Dienst.' },
          { who: 'Daniel', s: 'Koch! Dann kann er euch ja bald mal was Schönes kochen.' },
          { who: 'Svenja', s: 'Ha, das hoffe ich! Er hat versprochen, an Weihnachten das Essen zu machen. Mal sehen, ob er frei bekommt. Und sag mal, spielst du eigentlich noch Volleyball?' },
          { who: 'Daniel', s: 'Leider nicht mehr. Ich hatte letztes Jahr Probleme mit dem Knie, und der Arzt hat gesagt, ich soll lieber schwimmen. Also gehe ich jetzt zweimal die Woche ins Hallenbad. Aber ehrlich gesagt vermisse ich die Mannschaft sehr.' },
          { who: 'Svenja', s: 'Das glaub ich dir. Du, ich muss an der nächsten Haltestelle raus. Wollen wir nicht mal zusammen einen Kaffee trinken? Dann erzähl ich dir in Ruhe von der neuen Wohnung.' },
          { who: 'Daniel', s: 'Sehr gern! Ich ruf dich am Wochenende an, deine Nummer hab ich ja noch.' },
          { who: 'Svenja', s: 'Super. Bis dann, Daniel!' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Richtig oder Falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Daniel hat kein Auto mehr.', a: 0, why: '„Das Auto hab ich im Frühling verkauft.“' },
          { q: 'Daniel arbeitet jeden Tag im Büro.', a: 1, why: 'Er „kann zweimal in der Woche von zu Hause arbeiten“.' },
          { q: 'In der Mittagspause geht Daniel jetzt oft spazieren.', a: 1, why: 'Das hat er in Bergheim gemacht; jetzt isst er in der Kantine und geht gleich wieder an den Schreibtisch.' },
          { q: 'Svenja ist umgezogen, weil ihr Haus zu klein war.', a: 1, why: 'Das Haus war „einfach zu groß für uns zwei“.' },
          { q: 'Svenjas Sohn muss oft am Wochenende arbeiten.', a: 0, why: 'Max hat „fast jedes Wochenende Dienst“.' },
          { q: 'Daniel spielt wegen gesundheitlicher Probleme kein Volleyball mehr.', a: 0, why: 'Er hatte Probleme mit dem Knie, und der Arzt hat ihm Schwimmen empfohlen.' },
          { q: 'Svenja und Daniel möchten sich bald wieder treffen.', a: 0, why: 'Sie schlägt einen Kaffee vor, und er will sie am Wochenende anrufen.' },
        ] },
      ] },

    { id: 't4', ref: 'Teil 4', title: 'Eine Diskussion',
      about: 'Sie hören nun eine Diskussion. Sie hören die Diskussion zweimal. Dazu lösen Sie acht Aufgaben. Ordnen Sie die Aussagen zu: Wer sagt was? Der Moderator der Radiosendung „Thema am Abend“ diskutiert mit Brigitte Hollmann, Lehrerin an einem Gymnasium, und Stefan Pauli, Vater von zwei Schulkindern, über das Thema „Brauchen Schüler Hausaufgaben?“.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Herr Brandt', s: 'Guten Abend und herzlich willkommen zu „Thema am Abend“. Heute geht es um eine Frage, über die in vielen Familien gestritten wird: Brauchen Schülerinnen und Schüler Hausaufgaben? Bei mir im Studio sind Brigitte Hollmann, sie unterrichtet Deutsch und Geschichte an einem Gymnasium, und Stefan Pauli, Vater von zwei Kindern in der dritten und in der siebten Klasse. Frau Hollmann, Sie geben Hausaufgaben. Warum?' },
          { who: 'Frau Hollmann', s: 'Weil man in der Schule nicht alles schaffen kann. Im Unterricht erkläre ich etwas Neues, aber üben, wirklich üben, das muss jeder Schüler allein, in seinem eigenen Tempo. Dafür sind Hausaufgaben da. Ich gebe allerdings nie Aufgaben, für die man länger als eine halbe Stunde braucht.' },
          { who: 'Herr Brandt', s: 'Herr Pauli, wie sieht das bei Ihnen zu Hause aus?' },
          { who: 'Herr Pauli', s: 'Ganz ehrlich: Hausaufgaben sind bei uns jeden Nachmittag ein Kampf. Mein Sohn in der siebten Klasse kommt um halb vier nach Hause und sitzt dann oft bis sechs am Schreibtisch. Für Sport oder Freunde bleibt da kaum Zeit. Und meine Frau und ich arbeiten beide, wir können nicht jeden Tag danebensitzen und helfen.' },
          { who: 'Frau Hollmann', s: 'Da muss ich sagen: Zwei Stunden, das ist wirklich zu viel. Die Lehrerinnen und Lehrer einer Klasse sollten sich besser absprechen, wie viel jeder aufgibt. Das passiert leider viel zu selten.' },
          { who: 'Herr Pauli', s: 'Das wäre schon mal ein Anfang. Aber ich sehe noch ein anderes Problem. Kinder, deren Eltern Zeit haben und gut erklären können, haben einen großen Vorteil. Andere Kinder sitzen allein vor Aufgaben, die sie nicht verstehen. Das ist einfach nicht gerecht.' },
          { who: 'Herr Brandt', s: 'Das ist ein Argument, das man oft hört. Es gibt ja inzwischen Schulen, die die Hausaufgaben durch Lernzeiten am Nachmittag ersetzt haben. Die Kinder üben dann in der Schule, und eine Lehrkraft ist dabei. Frau Hollmann, wäre das eine Lösung?' },
          { who: 'Frau Hollmann', s: 'Für Ganztagsschulen auf jeden Fall, das finde ich eine sehr gute Idee. Aber an meiner Schule endet der Unterricht um eins, und wir haben weder die Räume noch genug Kolleginnen und Kollegen für so etwas. Ich würde mir das wünschen, aber dann muss die Stadt das auch bezahlen.' },
          { who: 'Herr Pauli', s: 'Bei meiner Tochter in der Grundschule gibt es das schon, und es funktioniert prima. Sie kommt nach Hause und ist fertig. Wir haben abends Zeit füreinander, ohne Streit.' },
          { who: 'Herr Brandt', s: 'Nun sagen manche ja auch, dass Kinder durch Hausaufgaben lernen, selbstständig zu arbeiten. Das ist doch für später wichtig, oder?' },
          { who: 'Herr Pauli', s: 'Da bin ich nicht so sicher. Selbstständig wird man doch nicht, wenn man jeden Tag Aufgaben bekommt, die man einfach erledigen muss. Das lernt man eher bei Projekten, bei denen man selbst entscheiden kann, wie man vorgeht.' },
          { who: 'Frau Hollmann', s: 'Da muss ich widersprechen. Gerade die regelmäßigen kleinen Aufgaben helfen, sich zu organisieren: Wann mache ich was, wie teile ich meine Zeit ein? Das brauchen die Jugendlichen später in der Ausbildung oder im Studium.' },
          { who: 'Herr Brandt', s: 'Wir haben vor der Sendung unsere Hörerinnen und Hörer gefragt, und die Meinungen sind sehr geteilt: Ungefähr die Hälfte ist für Hausaufgaben, die andere Hälfte dagegen. Zum Schluss: Was wünschen Sie sich?' },
          { who: 'Frau Hollmann', s: 'Weniger, aber sinnvollere Hausaufgaben. Und dass die Schüler wissen, dass sie am nächsten Tag fragen dürfen, wenn sie etwas nicht verstanden haben.' },
          { who: 'Herr Pauli', s: 'Ich wünsche mir, dass alle Schulen solche Lernzeiten anbieten. Dann muss man über Hausaufgaben gar nicht mehr diskutieren.' },
          { who: 'Herr Brandt', s: 'Vielen Dank Ihnen beiden für das Gespräch.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Wer sagt was?', opts: ['Herr Brandt', 'Frau Hollmann', 'Herr Pauli'], items: [
          { q: 'Hausaufgaben sollten nicht länger als dreißig Minuten dauern.', a: 1, why: 'Frau Hollmann: „Ich gebe allerdings nie Aufgaben, für die man länger als eine halbe Stunde braucht.“' },
          { q: 'Wegen der Hausaufgaben hat mein Kind kaum Freizeit.', a: 2, why: 'Herr Pauli: „Für Sport oder Freunde bleibt da kaum Zeit.“' },
          { q: 'Die Lehrer sollten sich absprechen, wie viele Hausaufgaben sie geben.', a: 1, why: 'Frau Hollmann: „Die Lehrerinnen und Lehrer einer Klasse sollten sich besser absprechen, wie viel jeder aufgibt.“' },
          { q: 'Nicht alle Kinder bekommen zu Hause die gleiche Unterstützung.', a: 2, why: 'Herr Pauli: Kinder, deren Eltern Zeit haben, haben einen Vorteil; andere „sitzen allein vor Aufgaben“.' },
          { q: 'An manchen Schulen üben die Kinder am Nachmittag in der Schule statt zu Hause.', a: 0, why: 'Herr Brandt erzählt von Schulen, „die die Hausaufgaben durch Lernzeiten am Nachmittag ersetzt haben“.' },
          { q: 'Für Lernzeiten am Nachmittag fehlen an unserer Schule Räume und Personal.', a: 1, why: 'Frau Hollmann: „wir haben weder die Räume noch genug Kolleginnen und Kollegen für so etwas“.' },
          { q: 'Selbstständiges Arbeiten lernt man besser bei Projekten.', a: 2, why: 'Herr Pauli: „Das lernt man eher bei Projekten, bei denen man selbst entscheiden kann.“' },
          { q: 'Die Hörer sind sich bei diesem Thema nicht einig.', a: 0, why: 'Herr Brandt: „die Meinungen sind sehr geteilt“, etwa die Hälfte ist dafür, die andere dagegen.' },
        ] },
      ] },
  ],
};
