// German-B2-goethe, Modul Hören (40 Minuten, 4 Teile, 30 Aufgaben). Original Alimun scripts; draft for review.
const RF = ['Richtig', 'Falsch'];

export const PAPER = {
  id: 'hoeren', title: 'Hören', minutes: 40,
  parts: [
    { id: 't1', ref: 'Teil 1', title: 'Kurze Texte',
      about: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Zu jedem Text lösen Sie zwei Aufgaben. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Frau Lindner', s: 'Guten Tag, Herr Okafor, hier ist Frau Lindner von der Zahnarztpraxis am Marktplatz. Es geht um Ihren Kontrolltermin am Donnerstag um halb neun. Leider ist Frau Doktor Brenner an diesem Tag auf einer Fortbildung, und wir müssen den Termin deshalb verschieben. Ich könnte Ihnen den Dienstag darauf um zehn Uhr anbieten oder den Freitag, dann allerdings erst nachmittags um Viertel nach vier. Bitte rufen Sie uns doch kurz zurück und sagen Sie uns, welcher Termin Ihnen besser passt. Wir sind heute noch bis achtzehn Uhr erreichbar, morgen ab acht. Ach, und bringen Sie bitte beim nächsten Mal Ihre neue Versichertenkarte mit, die alte ist ja abgelaufen. Vielen Dank und auf Wiederhören.' },
        ] },
        { lines: [
          { who: 'Herr Wendt', s: 'Und jetzt die Verkehrslage für die Region. Auf der A7 in Richtung Norden staut es sich zwischen dem Kreuz Mitte und der Ausfahrt Lindenhof auf etwa acht Kilometern. Dort ist ein Lastwagen liegen geblieben, der rechte Fahrstreifen ist gesperrt. Rechnen Sie mit gut zwanzig Minuten mehr Fahrzeit. Wer in Richtung Innenstadt unterwegs ist: Die Brückenstraße ist ab heute wegen Bauarbeiten für drei Wochen gesperrt, eine Umleitung über den Bahnhofsring ist ausgeschildert. Und eine gute Nachricht für alle, die mit der Bahn pendeln: Die Störung auf der S-Bahn-Linie 3 ist behoben, die Züge fahren wieder im normalen Takt. Später am Nachmittag erwarten wir übrigens Gewitter mit Starkregen. Fahren Sie also bitte vorsichtig.' },
        ] },
        { lines: [
          { who: 'Zugbegleiterin', s: 'Sehr geehrte Fahrgäste, wegen einer Signalstörung vor dem nächsten Bahnhof wird sich unsere Ankunft in Kassel um etwa fünfundzwanzig Minuten verzögern. Reisende mit Anschluss an den Regionalexpress nach Göttingen: Dieser Zug kann leider nicht warten. Bitte nutzen Sie stattdessen die Regionalbahn um vierzehn Uhr zweiundfünfzig von Gleis vier. Ihr Fahrschein gilt selbstverständlich auch für diese Verbindung. Wer nach Fulda weiterreisen möchte, erreicht seinen Anschluss voraussichtlich noch, da dieser Zug ebenfalls Verspätung hat. Als kleine Entschädigung bieten wir Ihnen im Bordrestaurant in Wagen neun ein kostenloses Getränk an. Bitte halten Sie dafür Ihren Fahrschein bereit. Wir bitten um Ihr Verständnis.' },
        ] },
        { lines: [
          { who: 'Frau Ostermann', s: 'Und hier noch unser Tipp fürs Wochenende: Am Samstag öffnet die Universität zum zehnten Mal ihre Türen zur Langen Nacht der Wissenschaft. Von siebzehn Uhr bis Mitternacht können Sie in über sechzig Laboren, Hörsälen und Werkstätten Forscherinnen und Forschern über die Schulter schauen. Besonders beliebt ist jedes Jahr die Sternwarte. Für die Führungen dort sollten Sie sich allerdings vorher im Internet anmelden, denn die Plätze sind begrenzt. Für Kinder gibt es bis einundzwanzig Uhr ein eigenes Programm mit Experimenten zum Mitmachen. Der Eintritt ist in diesem Jahr zum ersten Mal frei, die Stadt übernimmt die Kosten. Zwischen den Standorten pendeln kostenlose Shuttlebusse. Parkplätze gibt es auf dem Campus dagegen kaum, lassen Sie das Auto also besser zu Hause.' },
        ] },
        { lines: [
          { who: 'Herr Albrecht', s: 'Viele Menschen werfen Lebensmittel weg, sobald das Mindesthaltbarkeitsdatum erreicht ist. Dabei ist das oft gar nicht nötig. Das Mindesthaltbarkeitsdatum ist nämlich kein Verfallsdatum. Es gibt nur an, bis wann der Hersteller garantiert, dass ein Produkt seinen Geschmack und seine Konsistenz behält. Joghurt, Nudeln oder Reis sind häufig noch Tage oder sogar Wochen danach einwandfrei. Mein Rat: Schauen Sie genau hin, riechen Sie daran und probieren Sie eine kleine Menge. Anders ist es beim Verbrauchsdatum, das Sie zum Beispiel auf Hackfleisch oder frischem Fisch finden. Steht dort „zu verbrauchen bis“, sollten Sie das Produkt nach diesem Tag wirklich nicht mehr essen, auch wenn es noch gut aussieht und gut riecht.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', rec: 0, h: 'Text 1: Richtig oder falsch?', opts: RF, items: [
          { q: 'Der Termin am Donnerstag fällt aus, weil die Zahnärztin krank ist.', a: 1, why: 'Frau Doktor Brenner ist „auf einer Fortbildung“, nicht krank.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 0, h: 'Text 1: Wählen Sie die richtige Lösung.', items: [
          { q: 'Herr Okafor soll …', o: ['in der Praxis anrufen und einen der beiden Termine wählen.', 'am Dienstag um zehn Uhr in die Praxis kommen.', 'seine neue Versichertenkarte per Post schicken.'], why: 'Frau Lindner bittet: „Bitte rufen Sie uns doch kurz zurück und sagen Sie uns, welcher Termin Ihnen besser passt.“' },
        ] },
        { t: 'ex', kind: 'pick', rec: 1, h: 'Text 2: Richtig oder falsch?', opts: RF, items: [
          { q: 'Auf der A7 ist wegen eines liegen gebliebenen Lastwagens ein Fahrstreifen gesperrt.', a: 0, why: 'Der Sprecher sagt, ein Lastwagen sei liegen geblieben und „der rechte Fahrstreifen ist gesperrt“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 1, h: 'Text 2: Wählen Sie die richtige Lösung.', items: [
          { q: 'Die Brückenstraße …', o: ['ist für mehrere Wochen gesperrt.', 'ist wegen eines Unfalls blockiert.', 'wird erst am Nachmittag wegen Gewitter gesperrt.'], why: 'Die Brückenstraße ist „ab heute wegen Bauarbeiten für drei Wochen gesperrt“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 2, h: 'Text 3: Richtig oder falsch?', opts: RF, items: [
          { q: 'Reisende nach Göttingen müssen eine neue Fahrkarte kaufen.', a: 1, why: 'Für die Regionalbahn gilt „Ihr Fahrschein selbstverständlich auch“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 2, h: 'Text 3: Wählen Sie die richtige Lösung.', items: [
          { q: 'Die Fahrgäste bekommen im Bordrestaurant …', o: ['ein Getränk, wenn sie ihren Fahrschein zeigen.', 'einen Gutschein für eine spätere Reise.', 'ein kostenloses Essen.'], why: 'Es gibt „ein kostenloses Getränk“, und man soll dafür „Ihren Fahrschein bereithalten“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 3, h: 'Text 4: Richtig oder falsch?', opts: RF, items: [
          { q: 'Die Lange Nacht der Wissenschaft findet in diesem Jahr zum ersten Mal statt.', a: 1, why: 'Die Universität öffnet ihre Türen „zum zehnten Mal“; zum ersten Mal ist nur der Eintritt frei.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 3, h: 'Text 4: Wählen Sie die richtige Lösung.', items: [
          { q: 'Für die Führungen in der Sternwarte …', o: ['sollte man sich vorher im Internet anmelden.', 'muss man extra Eintritt bezahlen.', 'gibt es nur Plätze für Kinder.'], why: 'Die Sprecherin sagt, man solle sich für die Führungen „vorher im Internet anmelden“, weil die Plätze begrenzt sind.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 4, h: 'Text 5: Richtig oder falsch?', opts: RF, items: [
          { q: 'Viele Lebensmittel kann man nach dem Mindesthaltbarkeitsdatum noch essen.', a: 0, why: 'Joghurt, Nudeln oder Reis sind laut Herrn Albrecht „häufig noch Tage oder sogar Wochen danach einwandfrei“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 4, h: 'Text 5: Wählen Sie die richtige Lösung.', items: [
          { q: 'Bei Hackfleisch sollte man …', o: ['das Verbrauchsdatum unbedingt beachten.', 'vor dem Essen daran riechen und eine kleine Menge probieren.', 'das Datum ignorieren, wenn es noch gut aussieht.'], why: 'Nach dem Verbrauchsdatum soll man es „wirklich nicht mehr essen, auch wenn es noch gut aussieht“; Riechen und Probieren gilt nur für das Mindesthaltbarkeitsdatum.' },
        ] },
      ] },
    { id: 't2', ref: 'Teil 2', title: 'Ein Interview',
      about: 'Sie hören ein Interview mit einer Frau, die in der Stadt Bienen hält. Sie hören den Text einmal. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      plays: 1,
      recs: [
        { lines: [
          { who: 'Moderator', s: 'Herzlich willkommen zu „Menschen in der Stadt“. Bei mir im Studio ist heute Frau Petersen. Sie ist eigentlich Bauingenieurin, hält aber seit acht Jahren Bienen, und zwar mitten in der Stadt, auf dem Dach eines Bürogebäudes. Frau Petersen, wie kam es denn dazu?' },
          { who: 'Frau Petersen', s: 'Das war eigentlich Zufall. Ein Kollege von mir hatte zwei Bienenvölker, und als er beruflich in eine andere Stadt gezogen ist, hat er jemanden gesucht, der sich um sie kümmert. Ich wollte erst gar nicht, ich hatte ehrlich gesagt sogar ein bisschen Angst vor Bienen. Aber dann hab ich einen Anfängerkurs beim Imkerverein gemacht, und nach dem ersten Sommer war ich, na ja, verloren. Seitdem lässt mich das nicht mehr los.' },
          { who: 'Moderator', s: 'Und warum ausgerechnet auf einem Dach in der Stadt? Bei Bienen denkt man ja eher an Wiesen und Felder.' },
          { who: 'Frau Petersen', s: 'Das denken viele. Aber den Bienen geht es in der Stadt oft besser als auf dem Land. Draußen gibt es heute viele riesige Felder mit nur einer einzigen Pflanze, Mais zum Beispiel. Und wenn die einmal abgeblüht ist, finden die Bienen wochenlang kaum Nahrung. In der Stadt dagegen blüht vom Frühjahr bis in den Herbst irgendwo immer etwas: in den Parks, auf Balkonen, an den Straßenbäumen. Die Linden sind da besonders wichtig. Und in Gärten wird meistens weniger gespritzt als in der Landwirtschaft, jedenfalls in der Regel.' },
          { who: 'Moderator', s: 'Wie hat denn der Eigentümer des Gebäudes reagiert, als Sie mit Ihren Bienen ankamen?' },
          { who: 'Frau Petersen', s: 'Erst mal ziemlich skeptisch. Die Hausverwaltung hatte Sorge, dass Mitarbeiter gestochen werden oder dass sich jemand beschwert. Wir haben dann vereinbart, dass ich die Kästen so aufstelle, dass die Bienen gleich in mehreren Metern Höhe über die Dachkante fliegen, also weit über den Köpfen der Leute. Und ich hab für die Belegschaft eine kleine Informationsveranstaltung gemacht, mit Honig zum Probieren. Danach war die Angst eigentlich weg. Inzwischen ist die Firma richtig stolz darauf, die verschenkt den Honig zu Weihnachten sogar an ihre Kunden.' },
          { who: 'Moderator', s: 'Apropos Honig: Schmeckt Stadthonig eigentlich anders? Und ist der überhaupt sauber, bei all den Abgasen?' },
          { who: 'Frau Petersen', s: 'Die Frage kommt immer. Wir lassen den Honig jedes Jahr in einem Labor untersuchen, und die Werte sind wirklich unauffällig, da gibt es keinen Unterschied zum Honig vom Land. Die Bienen filtern viel heraus, bevor überhaupt etwas im Honig landet. Geschmacklich ist Stadthonig oft sogar vielfältiger, weil die Bienen so viele verschiedene Pflanzen anfliegen. Im Juli schmeckt man die Linde ganz deutlich, das ist so ein bisschen frisch, fast wie Minze.' },
          { who: 'Moderator', s: 'Jetzt wollen ja viele Menschen etwas für die Bienen tun. Sollte also jeder, der einen Balkon hat, gleich einen Bienenkasten aufstellen?' },
          { who: 'Frau Petersen', s: 'Bitte nicht! Also, das klingt jetzt vielleicht seltsam aus dem Mund einer Imkerin. Aber in manchen Stadtteilen gibt es inzwischen so viele Honigbienen, dass sie den Wildbienen das Futter wegnehmen. Und gerade die Wildbienen sind eigentlich bedroht, nicht die Honigbienen. Wer helfen will, pflanzt lieber heimische Blumen und Kräuter, Thymian, Glockenblumen, Wiesensalbei, und lässt im Garten mal eine Ecke wild wachsen. Das bringt viel mehr.' },
          { who: 'Moderator', s: 'Zum Schluss noch eine praktische Frage: Wie viel Zeit kostet Sie dieses Hobby?' },
          { who: 'Frau Petersen', s: 'Im Winter fast gar keine, da sitzen die Bienen eng zusammen im Kasten und man lässt sie am besten in Ruhe. Aber von April bis Juli bin ich jede Woche mindestens einen Nachmittag auf dem Dach, manchmal auch zwei. Das muss man schon mit seinem Beruf vereinbaren können. Mein Arbeitgeber ist zum Glück flexibel, ich kann die Stunden abends nacharbeiten. Aber ehrlich, ich mach das gern. Da oben auf dem Dach, zwischen den Bienen, das ist für mich die beste Entspannung nach einer stressigen Woche.' },
          { who: 'Moderator', s: 'Frau Petersen, vielen Dank für das Gespräch.' },
          { who: 'Frau Petersen', s: 'Ich danke Ihnen.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Lösung a, b oder c.', items: [
          { q: 'Frau Petersen ist zur Imkerei gekommen, weil …', o: ['ein Kollege jemanden für seine Bienen suchte.', 'ihre Eltern schon immer Bienen hatten.', 'sie als Bauingenieurin Bienenkästen planen sollte.'], why: 'Ihr Kollege zog weg und „hat jemanden gesucht, der sich um sie kümmert“.' },
          { q: 'Bienen geht es in der Stadt oft gut, weil …', o: ['dort fast das ganze Jahr über etwas blüht.', 'es dort mehr Maisfelder gibt.', 'dort keine Pflanzenschutzmittel verwendet werden.'], why: 'In der Stadt blüht „vom Frühjahr bis in den Herbst irgendwo immer etwas“; gespritzt wird nur „weniger“, nicht gar nicht.' },
          { q: 'Die Bedenken der Hausverwaltung hat Frau Petersen ausgeräumt, indem sie …', o: ['die Kästen geschickt aufstellte und die Mitarbeiter informierte.', 'versprach, den Honig an die Kunden der Firma zu verschenken.', 'die Zahl ihrer Bienenvölker verringerte.'], why: 'Sie stellte die Kästen so auf, dass die Bienen hoch über die Köpfe fliegen, und machte eine Informationsveranstaltung; das Verschenken des Honigs war später die Idee der Firma.' },
          { q: 'Über die Qualität des Stadthonigs sagt Frau Petersen:', o: ['Laboruntersuchungen zeigen keine auffälligen Belastungen.', 'Er enthält etwas mehr Schadstoffe als Honig vom Land.', 'Er schmeckt das ganze Jahr über nach Minze.'], why: 'Die Laborwerte sind „wirklich unauffällig“ und es gibt „keinen Unterschied zum Honig vom Land“; nach Minze schmeckt nur die Linde im Juli.' },
          { q: 'Menschen, die den Bienen helfen wollen, rät Frau Petersen, …', o: ['heimische Pflanzen anzubauen, statt selbst Bienen zu halten.', 'einen Bienenkasten auf dem Balkon aufzustellen.', 'zuerst einen Kurs beim Imkerverein zu machen.'], why: 'Sie sagt „Bitte nicht!“ zum Bienenkasten und empfiehlt heimische Blumen und Kräuter.' },
          { q: 'Mit den Bienen beschäftigt sich Frau Petersen …', o: ['im Frühling und Sommer mindestens einen Nachmittag pro Woche.', 'das ganze Jahr über jeden Abend nach der Arbeit.', 'vor allem im Winter, weil die Bienen dann Schutz brauchen.'], why: 'Von April bis Juli ist sie „jede Woche mindestens einen Nachmittag auf dem Dach“; im Winter fast gar nicht.' },
        ] },
      ] },
    { id: 't3', ref: 'Teil 3', title: 'Eine Diskussion',
      about: 'Sie hören eine Diskussion im Radio zum Thema „Vier-Tage-Woche“. Sie hören den Text einmal. Wer sagt was? Wählen Sie für jede Aussage die richtige Person.',
      plays: 1,
      recs: [
        { lines: [
          { who: 'Moderatorin', s: 'Guten Abend und willkommen zu „Streitfrage“. Heute geht es um die Vier-Tage-Woche. In einer aktuellen Umfrage hat fast die Hälfte der Beschäftigten gesagt, sie würde für einen zusätzlichen freien Tag sogar weniger verdienen. Bei mir sind Frau Albers, Arbeitspsychologin, und Herr Yilmaz, der eine Bäckerei mit vier Filialen führt. Frau Albers, ist die Vier-Tage-Woche die Zukunft?' },
          { who: 'Frau Albers', s: 'Für viele Branchen, ja, davon bin ich überzeugt. In den Pilotprojekten, die wir begleitet haben, waren die Beschäftigten seltener krank und deutlich zufriedener. Und das Erstaunliche ist: Die Firmen haben unterm Strich nicht weniger geschafft. Weniger Arbeitstage heißt eben nicht automatisch weniger Leistung. Allerdings funktioniert das nur, wenn man nicht einfach die alte Arbeit in vier Tage presst, sondern überflüssige Besprechungen streicht und Abläufe neu organisiert.' },
          { who: 'Moderatorin', s: 'Man muss dazu sagen, dass diese Versuche bisher fast ausschließlich in Büros stattgefunden haben, in Agenturen, bei Softwarefirmen, in Verwaltungen. Herr Yilmaz, in einer Bäckerei sieht das sicher anders aus.' },
          { who: 'Herr Yilmaz', s: 'Ganz anders. Meine Kunden wollen sechs Tage die Woche frische Brötchen, und das um sechs Uhr morgens. Ich kann ja nicht einfach mittwochs zumachen. Wir haben es letztes Jahr in einer Filiale ausprobiert, mit einem Wechselsystem, bei dem jeder einen anderen Tag frei hat. Aber damit das aufgeht, bräuchte ich für meine vier Filialen mindestens drei zusätzliche Leute. Und finden Sie heute mal drei Bäcker!' },
          { who: 'Frau Albers', s: 'Da muss ich einhaken, denn genau das ist ja das interessante Argument. Die Betriebe, mit denen wir gearbeitet haben, bekamen nach der Umstellung plötzlich doppelt so viele Bewerbungen wie vorher. Gerade junge Leute fragen im Vorstellungsgespräch inzwischen als Erstes nach den Arbeitszeiten. Wer eine kürzere Woche anbietet, hat also einen echten Vorteil bei der Suche nach Personal.' },
          { who: 'Herr Yilmaz', s: 'Mag sein, im Büro. Aber bei uns kommt noch was dazu. Viele Modelle sehen ja vor, dass man an den vier Tagen länger arbeitet, also zehn Stunden statt acht. In der Backstube steht man um drei Uhr nachts am Ofen, man hebt schwere Bleche, es ist heiß. Zehn Stunden am Stück, das kann ich meinen Leuten auf Dauer nicht zumuten, das geht auf die Gesundheit.' },
          { who: 'Frau Albers', s: 'Da gebe ich Ihnen völlig recht. Deshalb sage ich auch: Es gibt nicht das eine Modell für alle. In der Pflege oder im Handwerk muss man andere Lösungen finden als in der Werbeagentur.' },
          { who: 'Moderatorin', s: 'Frau Albers, Herr Yilmaz, vielen Dank. Das Thema wird uns sicher noch länger beschäftigen.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Wer sagt das?',
          opts: ['Moderatorin', 'Frau Albers', 'Herr Yilmaz'],
          items: [
            { q: 'Viele Beschäftigte würden für mehr Freizeit auf einen Teil ihres Gehalts verzichten.', a: 0, why: 'Die Moderatorin nennt die Umfrage: Fast die Hälfte würde für einen freien Tag „sogar weniger verdienen“.' },
            { q: 'Wer weniger Tage arbeitet, leistet nicht unbedingt weniger.', a: 1, why: 'Frau Albers sagt: „Weniger Arbeitstage heißt eben nicht automatisch weniger Leistung.“' },
            { q: 'Die bisherigen Erfahrungen stammen vor allem aus Büroberufen.', a: 0, why: 'Die Moderatorin weist darauf hin, dass die Versuche „fast ausschließlich in Büros“ stattfanden.' },
            { q: 'Im eigenen Betrieb wäre das Modell nur mit zusätzlichem Personal möglich.', a: 2, why: 'Herr Yilmaz bräuchte „mindestens drei zusätzliche Leute“, damit das Wechselsystem aufgeht.' },
            { q: 'Eine kürzere Arbeitswoche hilft Unternehmen, neue Mitarbeiter zu gewinnen.', a: 1, why: 'Laut Frau Albers bekamen die Betriebe nach der Umstellung „doppelt so viele Bewerbungen“.' },
            { q: 'Längere Arbeitstage sind bei schwerer körperlicher Arbeit ein gesundheitliches Risiko.', a: 2, why: 'Herr Yilmaz kann seinen Leuten zehn Stunden in der heißen Backstube nicht zumuten, „das geht auf die Gesundheit“.' },
          ] },
      ] },
    { id: 't4', ref: 'Teil 4', title: 'Ein Vortrag',
      about: 'Sie hören einen Vortrag über Hitze in der Stadt. Sie hören den Text zweimal. Wählen Sie bei jeder Aufgabe die richtige Lösung.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Frau Dr. Seidel', s: 'Guten Abend, meine Damen und Herren, und vielen Dank, dass Sie an diesem warmen Abend in die Volkshochschule gekommen sind. Das passt ja gut zu unserem Thema. Ich bin Stadtklimatologin und beschäftige mich damit, wie Städte mit Hitze umgehen. Zunächst eine Zahl: In vielen Städten Mitteleuropas hat sich die Zahl der heißen Tage, also der Tage mit über dreißig Grad, in den letzten zwanzig Jahren ungefähr verdoppelt. Ich möchte Ihnen heute erklären, warum es in der Stadt heißer ist als auf dem Land, was das für unsere Gesundheit bedeutet und was Städte dagegen tun können.' },
          { who: 'Frau Dr. Seidel', s: 'Beginnen wir mit dem sogenannten Wärmeinsel-Effekt. Asphalt, Beton und Ziegel nehmen tagsüber sehr viel Sonnenenergie auf und speichern sie. Am Abend und in der Nacht geben sie diese Wärme langsam wieder ab. Deshalb kühlt eine Innenstadt nachts viel weniger ab als das Umland: Der Unterschied kann bis zu acht Grad betragen. Und genau das ist das eigentliche Problem. Die Hitze am Tag ist unangenehm, aber gefährlich wird es vor allem dann, wenn es auch nachts nicht mehr abkühlt, weil sich der Körper dann nicht mehr erholen kann.' },
          { who: 'Frau Dr. Seidel', s: 'Wer ist besonders betroffen? Säuglinge, chronisch Kranke und vor allem ältere Menschen. Bei älteren Menschen lässt das Durstgefühl nach, sie trinken an heißen Tagen oft zu wenig, ohne es zu merken. Die größte Gefahr besteht übrigens nicht in Krankenhäusern oder Pflegeheimen, wo jemand darauf achtet, sondern bei älteren Menschen, die allein leben, oft in Wohnungen direkt unter dem Dach, wo es im Sommer extrem heiß wird.' },
          { who: 'Frau Dr. Seidel', s: 'Was können Städte nun tun? Die wirksamste Maßnahme kennen Sie alle: Bäume. Ein großer Stadtbaum kühlt seine Umgebung durch Schatten und dadurch, dass er Wasser verdunstet. Seine Wirkung entspricht der von mehreren Klimaanlagen, nur ohne Strom und ohne Lärm. Der Haken ist allerdings: Ein Baum, den wir heute pflanzen, braucht zwanzig bis dreißig Jahre, bis er seine volle Wirkung entfaltet. Und viele unserer gewohnten Stadtbäume leiden selbst unter der Trockenheit. Viele Städte pflanzen deshalb inzwischen Arten, die mit Hitze besser zurechtkommen.' },
          { who: 'Frau Dr. Seidel', s: 'Eng damit verbunden ist das Wasser. Bisher wurde Regenwasser in Städten so schnell wie möglich in die Kanalisation geleitet. Heute versucht man das Gegenteil, man spricht von der Schwammstadt. Das Regenwasser soll dort gespeichert werden, wo es fällt: in begrünten Dächern, in Mulden am Straßenrand, in unterirdischen Speichern. An heißen Tagen verdunstet es dann und kühlt die Umgebung, und die Bäume haben in Trockenzeiten mehr Wasser zur Verfügung.' },
          { who: 'Frau Dr. Seidel', s: 'Ein dritter Punkt betrifft die Stadtplanung. Kühle Luft entsteht nachts vor allem auf Wiesen und Feldern am Stadtrand und fließt von dort in die Stadt, wenn man sie lässt. Diese Frischluftschneisen dürfen nicht zugebaut werden. Bei uns in der Stadt wurde zum Beispiel ein großes Neubaugebiet vor einigen Jahren an eine andere Stelle verlegt, weil es genau in einer solchen Schneise geplant war. Das war damals sehr umstritten, heute sind die meisten froh darüber.' },
          { who: 'Frau Dr. Seidel', s: 'Bäume, Wasser und Planung wirken langfristig. Für den nächsten Sommer brauchen wir aber auch schnelle Lösungen. Viele Städte haben deshalb Hitzeaktionspläne. Dazu gehört zum Beispiel, dass Bibliotheken oder Kirchen als kühle Räume geöffnet werden, dass man öffentliche Trinkbrunnen aufstellt oder dass Nachbarschaftsdienste bei Hitze ältere Menschen anrufen. Solche Maßnahmen kosten erstaunlich wenig und retten nachweislich Leben. Aber sie ersetzen natürlich nicht die baulichen Veränderungen, sie ergänzen sie.' },
          { who: 'Frau Dr. Seidel', s: 'Zum Schluss: Was können Sie selbst tun? Lüften Sie nachts und am frühen Morgen, und halten Sie tagsüber Fenster und Vorhänge geschlossen. Trinken Sie regelmäßig, auch ohne Durst. Und das Wichtigste, das möchte ich Ihnen wirklich ans Herz legen: Schauen Sie an heißen Tagen nach Ihren älteren Nachbarinnen und Nachbarn. Ein kurzes Klingeln, eine Flasche Wasser, ein Gespräch, das kann mehr bewirken als jede Klimaanlage. Vielen Dank für Ihre Aufmerksamkeit.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Lösung a, b oder c.', items: [
          { q: 'Die Zahl der heißen Tage in vielen Städten Mitteleuropas …', o: ['hat sich in zwanzig Jahren ungefähr verdoppelt.', 'hat sich in zwanzig Jahren verdreifacht.', 'ist in den letzten Jahren wieder zurückgegangen.'], why: 'Frau Dr. Seidel sagt, die Zahl habe sich „in den letzten zwanzig Jahren ungefähr verdoppelt“.' },
          { q: 'Besonders gefährlich ist Hitze laut der Referentin, wenn …', o: ['es auch in der Nacht nicht mehr abkühlt.', 'es tagsüber in der Stadt bis zu acht Grad heißer ist.', 'Beton die Wärme zu schnell verliert.'], why: 'Gefährlich wird es, „wenn es auch nachts nicht mehr abkühlt“; die acht Grad betreffen den Unterschied in der Nacht.' },
          { q: 'Besonders gefährdet sind …', o: ['ältere Menschen, die allein in Dachwohnungen leben.', 'Patientinnen und Patienten in Krankenhäusern.', 'junge Menschen, die zu viel trinken.'], why: 'Die größte Gefahr besteht bei älteren Menschen, „die allein leben, oft in Wohnungen direkt unter dem Dach“.' },
          { q: 'Als Nachteil von Stadtbäumen nennt Frau Dr. Seidel, dass sie …', o: ['Jahrzehnte brauchen, bis sie voll wirken.', 'mehr Energie verbrauchen als Klimaanlagen.', 'in der Stadt nicht genug Schatten spenden.'], why: 'Ein Baum braucht „zwanzig bis dreißig Jahre, bis er seine volle Wirkung entfaltet“.' },
          { q: 'Das Ziel der „Schwammstadt“ ist es, …', o: ['Regenwasser zu speichern, statt es schnell abzuleiten.', 'mehr Brunnen in der Innenstadt zu bauen.', 'das Regenwasser möglichst schnell in die Kanalisation zu leiten.'], why: 'Heute versucht man „das Gegenteil“: Das Wasser soll dort gespeichert werden, wo es fällt.' },
          { q: 'Das geplante Neubaugebiet …', o: ['wurde verlegt, um eine Frischluftschneise freizuhalten.', 'wurde mit besonders vielen Bäumen bepflanzt.', 'wurde wegen der Proteste ganz aufgegeben.'], why: 'Es wurde „an eine andere Stelle verlegt“, weil es in einer Frischluftschneise geplant war.' },
          { q: 'Über Hitzeaktionspläne sagt die Referentin, dass sie …', o: ['wenig kosten und trotzdem wirksam sind.', 'langfristig die baulichen Maßnahmen ersetzen.', 'bisher nur in Großstädten umgesetzt werden.'], why: 'Sie „kosten erstaunlich wenig und retten nachweislich Leben“, ersetzen aber die baulichen Veränderungen nicht.' },
          { q: 'Am wichtigsten ist der Referentin der Rat, …', o: ['sich bei Hitze um ältere Nachbarn zu kümmern.', 'tagsüber die Fenster zu öffnen.', 'sich eine Klimaanlage anzuschaffen.'], why: 'Sie nennt es „das Wichtigste“, an heißen Tagen nach älteren Nachbarn zu schauen; Fenster sollen tagsüber geschlossen bleiben.' },
        ] },
      ] },
  ],
};
