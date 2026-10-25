// Goethe-Zertifikat B1 practice test: Lesen (65 Minuten, fünf Teile, 30 Aufgaben). Written by Alimun.
export const PAPER = {
  id: 'lesen', title: 'Lesen', minutes: 65,
  parts: [
    { id: 't1', ref: 'Teil 1', title: 'Ein Blog',
      about: 'Lesen Sie den Text und die Aufgaben. Wählen Sie: Sind die Aussagen Richtig oder Falsch? Arbeitszeit: etwa 10 Minuten.',
      text: { title: 'Zwei Wochen auf dem Bauernhof', md: [
        'Hallo ihr Lieben,',
        'lange habe ich hier nichts geschrieben, aber dafür habe ich heute eine ganze Menge zu erzählen. Ihr wisst ja, dass ich im Sommer eigentlich mit meiner Schwester Clara nach Portugal fliegen wollte. Leider hat Clara im Juni eine neue Stelle angefangen und konnte keinen Urlaub nehmen. Allein ans Meer wollte ich nicht, und so habe ich etwas ganz anderes gemacht: Ich habe zwei Wochen auf einem kleinen Bauernhof im Süden von Bayern mitgearbeitet. Geld bekommt man dafür nicht, aber das Essen und ein Zimmer sind frei.',
        'Die Familie Brandner hat zwanzig Kühe, ein paar Hühner und einen großen Gemüsegarten. Am ersten Morgen hat um halb sechs der Wecker geklingelt. Ich dachte, das schaffe ich nie! Aber nach drei, vier Tagen war ich abends so müde, dass ich schon um neun im Bett lag, und das frühe Aufstehen war gar kein Problem mehr.',
        'Meine Hauptaufgabe war der Garten: Unkraut ziehen, Bohnen und Tomaten ernten, gießen. In den Stall durfte ich auch, aber das Melken hat Herr Brandner lieber selbst gemacht, denn die Melkmaschine ist ziemlich kompliziert. Zweimal in der Woche ist auf dem Hof ein kleiner Laden geöffnet, und da habe ich beim Verkauf geholfen. Das hat mir fast am meisten Spaß gemacht, weil ich viele nette Leute aus dem Dorf kennengelernt habe.',
        'Mit mir war noch ein Student aus Leipzig da, Felix. Er bleibt den ganzen Sommer und will später selbst Landwirt werden. Ich dagegen sitze ab Montag wieder in meinem Büro, aber ich sehe manche Dinge jetzt ein bisschen anders: Wenn ich im Supermarkt Tomaten kaufe, denke ich daran, wie viel Arbeit dahintersteckt.',
        'Ob ich das noch einmal machen würde? Auf jeden Fall! Frau Brandner hat mich schon zur Apfelernte im Oktober eingeladen, und ein paar Urlaubstage habe ich zum Glück noch übrig.',
        'Bis bald, eure Marlene',
      ].join('\n\n') },
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Richtig oder Falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Marlene ist nicht nach Portugal geflogen, weil ihre Schwester nicht freinehmen konnte.', a: 0, why: 'Clara hat eine neue Stelle angefangen und „konnte keinen Urlaub nehmen“.' },
          { q: 'Für ihre Arbeit auf dem Hof hat Marlene ein kleines Gehalt bekommen.', a: 1, why: '„Geld bekommt man dafür nicht“, nur Essen und Zimmer sind frei.' },
          { q: 'Das frühe Aufstehen war für Marlene die ganze Zeit sehr schwer.', a: 1, why: 'Nach drei, vier Tagen war „das frühe Aufstehen gar kein Problem mehr“.' },
          { q: 'Marlene hat auf dem Hof regelmäßig die Kühe gemolken.', a: 1, why: '„Das Melken hat Herr Brandner lieber selbst gemacht.“' },
          { q: 'Im Hofladen hat Marlene Menschen aus dem Ort kennengelernt.', a: 0, why: 'Beim Verkauf hat sie „viele nette Leute aus dem Dorf kennengelernt“.' },
          { q: 'Marlene möchte im Herbst wieder auf den Hof fahren.', a: 0, why: 'Sie ist zur Apfelernte im Oktober eingeladen und würde es „auf jeden Fall“ wieder machen.' },
        ] },
      ] },

    { id: 't2', ref: 'Teil 2', title: 'Zwei Zeitungsartikel',
      about: 'Lesen Sie die beiden Texte aus der Presse und die Aufgaben dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Arbeitszeit: etwa 20 Minuten.',
      texts: [
        { title: 'Schrauben statt wegwerfen: Der Reparatur-Treff in Hollenbach wird ein Jahr alt', md: [
          'Jeden ersten Samstag im Monat ist im Gemeindehaus von Hollenbach viel los. Auf langen Tischen stehen Toaster, Lampen, Fahrräder und Kaffeemaschinen, und daneben sitzen Menschen, die schrauben, löten und nähen. Vor genau einem Jahr hat der pensionierte Elektriker Werner Hanke den Reparatur-Treff gegründet. „Ich habe mich immer geärgert, wenn Nachbarn mir erzählt haben, dass sie ein Gerät weggeworfen haben, nur weil ein kleines Teil kaputt war“, sagt er.',
          'Am Anfang waren es nur Hanke und zwei Freunde. Heute machen zwölf Freiwillige mit, darunter eine Schneiderin und ein Student, der sich mit Handys und Computern auskennt. Zu jedem Treffen kommen etwa vierzig Besucherinnen und Besucher. Wichtig ist: Die Helfer reparieren nicht einfach für die Gäste. „Wir machen es zusammen. Die Leute sollen sehen, wie es geht, damit sie es beim nächsten Mal vielleicht selbst schaffen“, erklärt Hanke.',
          'Die Hilfe selbst kostet nichts. Wer ein Ersatzteil braucht, muss es aber bezahlen oder selbst mitbringen. In eine Spendenbox kann jeder so viel geben, wie er möchte; von dem Geld kauft der Treff neues Werkzeug und Kaffee.',
          'Nicht alles lässt sich retten. Etwa jedes dritte Gerät bleibt kaputt, oft weil es keine Ersatzteile mehr gibt. Trotzdem ist Hanke zufrieden: Im ersten Jahr haben die Helfer nach seiner Rechnung über 300 Geräte wieder zum Laufen gebracht. Für das nächste Jahr hat er einen Wunsch: einen eigenen Raum, in dem das Werkzeug bleiben kann. Bisher muss er nach jedem Treffen alles mit dem Auto wieder nach Hause bringen.',
        ].join('\n\n') },
        { title: 'Digital-Paten: Schüler erklären Senioren das Smartphone', md: [
          'Leonie ist 15 und zeigt jeden Dienstagnachmittag Menschen, die ihre Großeltern sein könnten, wie man Fotos verschickt oder online einen Termin beim Arzt bucht. Sie ist eine von achtzehn Schülerinnen und Schülern der Gesamtschule Nordstadt in Kaltenbach, die bei dem Projekt „Digital-Paten“ mitmachen. Die Idee hatte die Seniorenberatung der Stadt. „Viele ältere Menschen haben ein Smartphone, trauen sich aber nicht, ihre Kinder oder Enkel immer wieder dasselbe zu fragen“, sagt die Leiterin Petra Lindemann.',
          'Die Treffen finden in der Schulbibliothek statt. Jeder Jugendliche kümmert sich um ein bis zwei Senioren. Vorher haben die Schüler einen kurzen Kurs gemacht. Dabei ging es nicht um die Technik, die kennen sie ja, sondern um die Frage, wie man langsam und verständlich erklärt. „Am Anfang habe ich viel zu schnell gesprochen und einfach selbst auf den Bildschirm getippt“, erzählt Leonie und lacht. „Jetzt lasse ich die Leute alles selbst machen, auch wenn es länger dauert.“',
          'Für die Schüler ist das Projekt freiwillig. Sie bekommen am Ende eine Bescheinigung, die sie später ihren Bewerbungen beilegen können. Doch das ist für die meisten nicht der wichtigste Grund. Viele erzählen, dass sie die Gespräche mit den Senioren spannend finden. „Herr Albers hat mir erzählt, wie er als junger Mann in einer Druckerei gearbeitet hat. So etwas lernt man in keinem Schulbuch“, sagt Leonies Mitschüler Emre.',
          'Das Interesse ist groß: Auf der Warteliste stehen schon über dreißig Seniorinnen und Senioren. Die Schule sucht deshalb weitere Jugendliche, die mitmachen möchten.',
        ].join('\n\n') },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Erster Text: Schrauben statt wegwerfen. Wählen Sie die richtige Lösung.', items: [
          { q: 'In diesem Text geht es um ...', o: ['ein Angebot, bei dem Menschen gemeinsam kaputte Dinge reparieren.', 'ein neues Geschäft für gebrauchte Elektrogeräte.', 'einen Kurs für junge Elektriker im Gemeindehaus.'], why: 'Im Reparatur-Treff reparieren Freiwillige und Besucher Geräte „zusammen“.' },
          { q: 'Die Helfer im Reparatur-Treff ...', o: ['zeigen den Besuchern, wie man selbst etwas reparieren kann.', 'reparieren die Geräte, während die Besucher Kaffee trinken.', 'nehmen die Geräte mit nach Hause und reparieren sie dort.'], why: '„Die Leute sollen sehen, wie es geht, damit sie es beim nächsten Mal vielleicht selbst schaffen.“' },
          { q: 'Was müssen die Besucher bezahlen?', o: ['Ersatzteile, die für die Reparatur nötig sind.', 'Einen kleinen festen Betrag für jede Reparatur.', 'Das Werkzeug, das sie bei der Reparatur benutzen.'], why: '„Wer ein Ersatzteil braucht, muss es aber bezahlen“; die Hilfe selbst kostet nichts.' },
        ] },
        { t: 'ex', kind: 'choice', h: 'Zweiter Text: Digital-Paten. Wählen Sie die richtige Lösung.', items: [
          { q: 'In diesem Text geht es um ...', o: ['Jugendliche, die älteren Menschen bei der Nutzung des Smartphones helfen.', 'einen Computerkurs für Schüler in der Schulbibliothek.', 'Senioren, die in Schulen über ihr Berufsleben berichten.'], why: 'Schüler zeigen Senioren, „wie man Fotos verschickt oder online einen Termin beim Arzt bucht“.' },
          { q: 'Im Kurs vor dem Projekt haben die Schüler gelernt, ...', o: ['wie man geduldig und verständlich erklärt.', 'wie die neuesten Smartphones funktionieren.', 'wie man eine gute Bewerbung schreibt.'], why: 'Es ging „nicht um die Technik“, sondern darum, „wie man langsam und verständlich erklärt“.' },
          { q: 'Warum machen viele Schüler bei dem Projekt mit?', o: ['Sie finden die Gespräche mit den älteren Menschen interessant.', 'Sie bekommen dafür eine bessere Note in der Schule.', 'Sie brauchen die Bescheinigung unbedingt für eine Bewerbung.'], why: 'Die Bescheinigung ist „nicht der wichtigste Grund“; viele finden „die Gespräche mit den Senioren spannend“.' },
        ] },
      ] },

    { id: 't3', ref: 'Teil 3', title: 'Anzeigen',
      about: 'Lesen Sie die Situationen und die Anzeigen A bis J. Wählen Sie: Welche Anzeige passt zu welcher Situation? Sie können jede Anzeige nur einmal verwenden. Für eine Situation gibt es keine passende Anzeige. Arbeitszeit: etwa 10 Minuten.',
      texts: [
        { md: '**A** **Wasserratten gesucht!** Unsere Schwimmschule im Hallenbad Kaltenbach bietet ab September neue Anfängerkurse für Kinder von 5 bis 10 Jahren an. Zehn Termine, immer mittwochs von 16 bis 17 Uhr, in kleinen Gruppen mit höchstens acht Kindern. Eltern warten bitte im Café.' },
        { md: '**B** **Gitarre gesucht!** Wir sind vier Hobbymusiker zwischen 25 und 40 und spielen Rock und Pop aus den 80er-Jahren. Unser Gitarrist ist leider weggezogen. Du spielst Gitarre, hast Spaß an Musik und am Dienstagabend Zeit für die Probe? Dann melde dich bei Rafael: 0171 4433 218.' },
        { md: '**C** **Englisch intensiv** für Wiedereinsteiger: Frischen Sie in vier Wochen Ihr Schulenglisch auf! Montag bis Freitag von 9 bis 12 Uhr, mit Grammatik, Wortschatz und viel Sprechen. Sprachschule Lingua-Mitte, Marktplatz 4.' },
        { md: '**D** **Mit dem Förster durch den Wald** Am Sonntag, 14. September, um 10 Uhr startet am Parkplatz Lindenweg eine gemütliche Wanderung für Familien mit Kindern ab 4 Jahren. Auf der fünf Kilometer langen Strecke gibt es Spiele, Tierspuren und am Ende ein Picknick am Grillplatz. Kinderwagen können leider nicht mitgenommen werden.' },
        { md: '**E** **Grillmeister werden!** In unserem Kurs lernen Sie, wie Steak, Bratwurst und Fisch auf dem Grill perfekt gelingen. Dazu gibt es Tipps für Soßen und Marinaden. Samstag, 15 bis 19 Uhr, Metzgerei Huber, Teilnahme 49 Euro inklusive Essen.' },
        { md: '**F** **Tanzabend im Gemeindesaal** Jeden letzten Samstag im Monat ab 20 Uhr: Walzer, Tango, Discofox und mehr. Noch nie getanzt? Kein Problem! Ab 19 Uhr zeigt Ihnen unsere Tanzlehrerin in einer kostenlosen Schnupperstunde die wichtigsten Schritte. Eintritt 8 Euro.' },
        { md: '**G** **Bergtour für Geübte** Der Alpenverein Kaltenbach lädt zu einer Tagestour auf den Hochkogel ein: 25 Kilometer und 1200 Höhenmeter. Gute Kondition und feste Bergschuhe sind nötig. Die Tour ist für Kinder nicht geeignet. Anmeldung bis Donnerstag.' },
        { md: '**H** **Sicher telefonieren auf Englisch** Sie müssen im Beruf mit Kunden oder Kollegen auf Englisch telefonieren und fühlen sich dabei unsicher? In unserem Kurs üben wir typische Gespräche aus dem Arbeitsalltag. Dienstags und donnerstags von 18.30 bis 20 Uhr, Volkshochschule, Raum 12.' },
        { md: '**I** **Fahrradbörse am Rathausplatz** Ihr altes Fahrrad steht nur noch im Keller? Bringen Sie es am Samstag zwischen 9 und 11 Uhr zu uns, wir verkaufen es für Sie. Käufer finden bei uns ab 11 Uhr gebrauchte Räder für Kinder und Erwachsene. Kleine Reparaturen werden vor Ort gemacht.' },
        { md: '**J** **Bunte Küche ohne Fleisch** Gemüse, Hülsenfrüchte und Getreide einmal anders: Lernen Sie an drei Abenden einfache vegetarische Gerichte für jeden Tag kennen. Alle Rezepte zum Mitnehmen. Kochstudio am Stadtpark, donnerstags von 18 bis 21 Uhr.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Einige Bekannte von Ihnen suchen ein Angebot. Welche Anzeige passt?', opts: [
          'Schwimmkurs für Kinder', 'Band sucht Gitarristen', 'Englisch intensiv am Vormittag', 'Familienwanderung mit dem Förster', 'Grillkurs', 'Tanzabend mit Schnupperstunde', 'Bergtour für Geübte', 'Englisch am Telefon, abends', 'Fahrradbörse', 'Vegetarischer Kochkurs', 'Keine Anzeige passt',
        ], items: [
          { q: 'Tanja möchte am Wochenende mit ihren Kindern, vier und sechs Jahre alt, etwas in der Natur unternehmen.', a: 3, why: 'Anzeige D: eine Wanderung am Sonntag „für Familien mit Kindern ab 4 Jahren“.' },
          { q: 'Herr Kowalski muss in seiner Firma oft Gespräche mit Kunden in England führen. Er hat nur nach 18 Uhr Zeit.', a: 7, why: 'Anzeige H: Telefonieren auf Englisch für den Beruf, dienstags und donnerstags ab 18.30 Uhr.' },
          { q: 'Frau Demir ist 45 Jahre alt und kann nicht schwimmen. Sie möchte es endlich lernen.', a: 10, why: 'Der Schwimmkurs in Anzeige A ist nur für Kinder von 5 bis 10 Jahren; keine Anzeige passt.' },
          { q: 'Sabine isst seit ein paar Monaten kein Fleisch mehr und sucht neue Ideen zum Kochen.', a: 9, why: 'Anzeige J: einfache vegetarische Gerichte für jeden Tag.' },
          { q: 'Paul hat sich ein neues Fahrrad gekauft und möchte sein altes verkaufen.', a: 8, why: 'Anzeige I: Man bringt sein altes Rad zur Fahrradbörse, und sie verkaufen es.' },
          { q: 'Jonas spielt seit Jahren Gitarre, aber immer allein. Er möchte gern mit anderen zusammen Musik machen.', a: 1, why: 'Anzeige B: Eine Band sucht jemanden, der Gitarre spielt.' },
          { q: 'Lea und Markus haben noch nie einen Tanzkurs gemacht, möchten aber an einem Samstagabend zusammen tanzen gehen.', a: 5, why: 'Anzeige F: Tanzabend am Samstag mit kostenloser Schnupperstunde für Anfänger.' },
        ] },
      ] },

    { id: 't4', ref: 'Teil 4', title: 'Meinungen',
      about: 'Lesen Sie die Texte. Wählen Sie: Ist die Person für eine autofreie Innenstadt? Arbeitszeit: etwa 15 Minuten. In einer Zeitschrift lesen Sie Kommentare zu einem Artikel über autofreie Innenstädte.',
      texts: [
        { title: 'Katrin, 34, Kaltenbach', md: 'Ich wohne mitten in der Altstadt, und der Verkehr vor meinem Fenster ist manchmal unerträglich: Lärm von morgens bis abends, dazu die Abgase. Seit unsere Straße am Wochenende für Autos gesperrt ist, spielen die Kinder draußen, und die Nachbarn sitzen vor der Tür. Von mir aus könnte das jeden Tag so sein.' },
        { title: 'Herr Ludwig, 67, Bergheim', md: 'Ich kann wegen meiner Hüfte nicht mehr lange laufen. Mein Arzt und meine Apotheke sind in der Innenstadt, und der Bus fährt bei uns nur einmal in der Stunde. Wenn ich nicht mehr mit dem Auto bis vor die Tür fahren darf, wie soll ich dann dorthin kommen? Für Leute wie mich wäre so ein Verbot eine Katastrophe.' },
        { title: 'Ayla, 41, Talburg', md: 'Ich habe ein kleines Schuhgeschäft in der Fußgängerzone. Viele meiner Kunden kommen aus den Dörfern rund um die Stadt, und die kommen nun mal mit dem Auto. Schon jetzt fahren viele lieber ins Einkaufszentrum am Stadtrand, weil man dort kostenlos parken kann. Die schöne Idee von der autofreien Stadt würde mich am Ende meine Kunden kosten.' },
        { title: 'Bernd, 52, Kaltenbach', md: 'Als ich zum ersten Mal davon gehört habe, war ich ehrlich gesagt dagegen. Ich fahre gern Auto und wollte mir das nicht verbieten lassen. Dann war ich im Urlaub in einer Stadt, deren Zentrum schon seit Jahren keine Autos mehr hat. Es war ruhig, sauber, und überall saßen Menschen draußen. Seitdem denke ich: Das sollten wir hier auch machen.' },
        { title: 'Mia, 23, Talburg', md: 'Klar, weniger Autos klingt gut, und ich fahre selbst nur mit dem Fahrrad. Aber ein komplettes Verbot geht mir zu weit. Was ist mit Handwerkern, Lieferdiensten und Pflegediensten? Die müssen doch zu den Leuten kommen. Ich fände es besser, das Parken in der Stadt einfach teurer zu machen und den Bus billiger.' },
        { title: 'Tobias, 29, Bergheim', md: 'Ich bin Busfahrer, und jeden Tag stehe ich mit meinem Bus im Stau, nur weil vor mir Leute einen Parkplatz suchen. Dann kommen wir zu spät, und die Fahrgäste ärgern sich. Ohne private Autos im Zentrum wären die Busse endlich pünktlich. Ich bin sicher, dann würden auch viel mehr Leute umsteigen.' },
        { title: 'Frau Schuster, 45, Kaltenbach', md: 'Viele Kollegen aus der Gastronomie haben Angst, dass ohne Autos weniger Gäste kommen. Ich glaube das nicht. Wo man gern spazieren geht, setzt man sich auch gern ins Café. Wenn vor meinem Café keine Autos mehr parken, kann ich endlich mehr Tische nach draußen stellen. Ich hoffe, die Stadt traut sich.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Ist die Person für eine autofreie Innenstadt? Wählen Sie Ja oder Nein.', opts: ['Ja', 'Nein'], items: [
          { q: 'Katrin', a: 0, why: '„Von mir aus könnte das jeden Tag so sein“: Sie findet die gesperrte Straße gut.' },
          { q: 'Herr Ludwig', a: 1, why: 'Er braucht das Auto für den Weg zum Arzt; ein Verbot wäre für ihn „eine Katastrophe“.' },
          { q: 'Ayla', a: 1, why: 'Sie fürchtet, dass sie ohne Autos ihre Kunden verliert.' },
          { q: 'Bernd', a: 0, why: 'Er war zuerst dagegen, aber jetzt sagt er: „Das sollten wir hier auch machen.“' },
          { q: 'Mia', a: 1, why: '„Ein komplettes Verbot geht mir zu weit“; sie möchte lieber teureres Parken.' },
          { q: 'Tobias', a: 0, why: '„Ohne private Autos im Zentrum wären die Busse endlich pünktlich.“' },
          { q: 'Frau Schuster', a: 0, why: 'Sie glaubt, dass ohne Autos mehr Gäste kommen, und hofft, „die Stadt traut sich“.' },
        ] },
      ] },

    { id: 't5', ref: 'Teil 5', title: 'Eine Benutzungsordnung',
      about: 'Lesen Sie die Aufgaben und den Text dazu. Wählen Sie bei jeder Aufgabe die richtige Lösung a, b oder c. Arbeitszeit: etwa 10 Minuten. Sie informieren sich über die Regeln der Stadtbibliothek.',
      text: { title: 'Benutzungsordnung der Stadtbibliothek Kaltenbach', md: [
        '**Anmeldung**',
        'Für die Anmeldung brauchen Sie einen gültigen Personalausweis oder einen Reisepass mit Meldebescheinigung. Kinder und Jugendliche unter 16 Jahren brauchen außerdem die Unterschrift eines Elternteils. Der Bibliotheksausweis kostet für Erwachsene 15 Euro im Jahr. Für Schülerinnen und Schüler, Studierende und Auszubildende ist er kostenlos. Wenn Sie Ihren Ausweis verlieren, bekommen Sie gegen eine Gebühr von 3 Euro einen neuen.',
        '**Ausleihe und Leihfristen**',
        'Bücher, Zeitschriften und Hörbücher können Sie vier Wochen ausleihen, Filme und Konsolenspiele eine Woche. Pro Ausweis dürfen Sie höchstens 30 Medien gleichzeitig ausleihen. Die neuesten Ausgaben der Zeitungen und Zeitschriften können nur in der Bibliothek gelesen werden.',
        '**Verlängerung**',
        'Die Leihfrist kann zweimal verlängert werden, online, telefonisch oder an der Information. Das ist allerdings nur möglich, wenn niemand das Medium vorbestellt hat. Filme und Spiele können nicht verlängert werden.',
        '**Gebühren bei Verspätung**',
        'Wenn Sie Medien zu spät zurückgeben, zahlen Sie pro Medium und Öffnungstag 20 Cent. Nach zwei Wochen schicken wir Ihnen eine Erinnerung per E-Mail. Solange die Gebühren nicht bezahlt sind, können Sie keine weiteren Medien ausleihen.',
        '**Rückgabe**',
        'Außerhalb der Öffnungszeiten können Sie Bücher in den Rückgabekasten am Haupteingang werfen. Filme, Spiele und Hörbücher geben Sie bitte nur an der Information ab, weil sie im Kasten leicht beschädigt werden.',
        '**In der Bibliothek**',
        'Essen ist in allen Räumen verboten; Getränke in geschlossenen Flaschen sind erlaubt. Bitte schalten Sie Ihr Handy auf lautlos und telefonieren Sie nur im Eingangsbereich. Die Lernplätze im zweiten Stock können Sie online für höchstens drei Stunden am Tag reservieren. Ist ein reservierter Platz 30 Minuten nach Beginn der Reservierung noch frei, darf ihn eine andere Person benutzen.',
      ].join('\n\n') },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Lösung.', items: [
          { q: 'Wer bekommt den Bibliotheksausweis kostenlos?', o: ['Personen, die eine Ausbildung machen.', 'Personen, die ihren alten Ausweis verloren haben.', 'Alle Erwachsenen, die in Kaltenbach gemeldet sind.'], why: 'Für „Studierende und Auszubildende“ ist der Ausweis kostenlos; ein neuer Ausweis kostet 3 Euro.' },
          { q: 'Einen ausgeliehenen Film ...', o: ['muss man nach einer Woche zurückgeben.', 'kann man online zweimal verlängern.', 'kann man in den Rückgabekasten werfen.'], why: 'Filme kann man „eine Woche“ ausleihen, und sie „können nicht verlängert werden“.' },
          { q: 'Wenn man ein Buch zu spät zurückgibt, ...', o: ['kann man erst nach dem Bezahlen wieder etwas ausleihen.', 'bekommt man am nächsten Tag eine E-Mail.', 'zahlt man 20 Cent pro Woche.'], why: '„Solange die Gebühren nicht bezahlt sind, können Sie keine weiteren Medien ausleihen.“' },
          { q: 'In der Bibliothek darf man ...', o: ['eine geschlossene Wasserflasche dabeihaben.', 'an den Lernplätzen leise telefonieren.', 'einen Lernplatz für den ganzen Tag reservieren.'], why: '„Getränke in geschlossenen Flaschen sind erlaubt“; telefonieren nur im Eingangsbereich, Lernplätze höchstens drei Stunden.' },
        ] },
      ] },
  ],
};
