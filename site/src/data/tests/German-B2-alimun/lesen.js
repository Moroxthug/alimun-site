// Alimun test German B2, paper Lesen (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'lesen', title: 'Lesen', minutes: 40,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Überschriften zuordnen',
      about: 'Lesen Sie den Artikel. Welche Überschrift passt zu welchem Abschnitt? Zwei Überschriften passen nicht.',
      text: { title: 'Reparieren statt wegwerfen', md: '**Abschnitt 1** Samstagvormittag im Gemeindehaus von Altenried: Auf langen Tischen liegen ein Toaster, eine Nähmaschine, eine Stehlampe und ein Kinderfahrrad. Daneben sitzen Menschen aller Altersgruppen und schrauben, löten und fädeln. Seit fünf Jahren findet das Reparaturcafé einmal im Monat statt. Kamen anfangs kaum zehn Besucher, sind es inzwischen bis zu sechzig – so viele, dass man sich mittlerweile vorher anmelden muss.\n\n**Abschnitt 2** Ins Leben gerufen hat das Projekt der pensionierte Elektriker Werner Haas. „Ich habe mich jahrelang darüber geärgert, dass Geräte kurz nach Ablauf der Garantie kaputtgehen und dann nicht mehr zu retten sind“, erzählt er. Oft seien Teile verklebt statt verschraubt, sodass sie sich nicht austauschen ließen. Für ihn ist das Reparaturcafé daher auch eine Form des Protests.\n\n**Abschnitt 3** Wer erwartet, sein Gerät abzugeben und repariert zurückzubekommen, wird enttäuscht. Das Prinzip lautet Hilfe zur Selbsthilfe: Die Besucher schrauben selbst, die ehrenamtlichen Fachleute erklären und geben Tipps. „Wer einmal erlebt hat, wie einfach sich ein Wackelkontakt beheben lässt, wirft beim nächsten Mal nicht so schnell etwas weg“, sagt Haas. Etwa zwei Drittel der Geräte verlassen das Gemeindehaus wieder funktionsfähig.\n\n**Abschnitt 4** Doch nicht alles lässt sich retten. Bei vielen Smartphones etwa ist der Akku so fest verbaut, dass ein Austausch ohne Spezialwerkzeug unmöglich ist. Häufig fehlen auch Ersatzteile, oder sie sind so teuer, dass sich die Reparatur nicht lohnt. Und bei Geräten, die mit Gas betrieben werden, lehnen die Helfer jede Reparatur ab – das Risiko wäre schlicht zu groß.\n\n**Abschnitt 5** Inzwischen wird auch in der Politik über ein Recht auf Reparatur diskutiert: Hersteller sollen verpflichtet werden, Ersatzteile über Jahre bereitzuhalten. Werner Haas begrüßt diese Pläne, bleibt aber skeptisch. „Gesetze helfen nur, wenn die Leute auch umdenken. Solange ein neuer Wasserkocher weniger kostet als eine Pizza, wird er eben weggeworfen.“' },
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Welche Überschrift passt?', opts: [
          'Ein Treffpunkt, der immer beliebter wird',
          'Ärger über kurzlebige Produkte als Anfang',
          'Selbst lernen statt reparieren lassen',
          'Wo die Helfer an ihre Grenzen stoßen',
          'Gesetze allein genügen nicht',
          'Reparaturen werden immer teurer',
          'Junge Leute bleiben weg',
        ], items: [
          { q: 'Abschnitt 1', a: 0, why: 'Anfangs kamen kaum zehn Besucher, heute bis zu sechzig: Das Café wird immer beliebter.' },
          { q: 'Abschnitt 2', a: 1, why: 'Haas hat sich über Geräte geärgert, die kurz nach der Garantie kaputtgehen, und deshalb das Projekt gegründet.' },
          { q: 'Abschnitt 3', a: 2, why: 'Das Prinzip ist Hilfe zur Selbsthilfe: Die Besucher schrauben selbst und lernen dabei.' },
          { q: 'Abschnitt 4', a: 3, why: 'Der Abschnitt beschreibt, was sich nicht reparieren lässt: fest verbaute Akkus, fehlende Ersatzteile, Gasgeräte.' },
          { q: 'Abschnitt 5', a: 4, why: 'Haas sagt: „Gesetze helfen nur, wenn die Leute auch umdenken.“' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Ein Interview',
      about: 'Lesen Sie das Interview. Wählen Sie die richtige Antwort.',
      text: { title: '„Der wichtigste Baum ist der, der schon steht“', md: 'Die Sommer werden heißer, und in den Städten ist die Hitze besonders zu spüren. Ein Gespräch mit der Stadtplanerin Dr. Ines Kaufmann.\n\n**Frau Dr. Kaufmann, warum leiden Städte besonders unter der Hitze?**\n\nAsphalt und Beton speichern tagsüber die Wärme und geben sie nachts wieder ab. Deshalb kühlt es in der Innenstadt nachts oft kaum ab – der Unterschied zum Umland kann bis zu acht Grad betragen. Für ältere Menschen und kleine Kinder ist das gefährlich, weil sich der Körper nachts nicht erholen kann.\n\n**Was kann eine Stadt dagegen tun?**\n\nAm wirksamsten ist Grün: Bäume, begrünte Dächer und Fassaden. Ein großer Baum spendet nicht nur Schatten, er verdunstet auch Wasser und kühlt so seine Umgebung. Allerdings braucht ein neu gepflanzter Baum Jahrzehnte, bis er diese Wirkung voll entfaltet. Deshalb ist es mindestens genauso wichtig, alte Bäume zu erhalten, statt sie für Bauprojekte zu fällen.\n\n**Viele Städte setzen auch auf helle Oberflächen.**\n\nHelle Beläge reflektieren das Sonnenlicht, das hilft. Aber man darf es nicht übertreiben: Auf einem großen hellen Platz wird man geblendet, und die reflektierte Strahlung trifft die Fassaden ringsum. Helle Flächen sind eine Ergänzung, kein Ersatz für Schatten.\n\n**Und Wasser?**\n\nBrunnen sind beliebt, aber ihr Kühleffekt ist begrenzt und sehr lokal. Wichtiger ist, dass Regenwasser nicht sofort in die Kanalisation fließt, sondern im Boden versickern kann. Dann steht es den Pflanzen in Trockenzeiten zur Verfügung. Man spricht vom Prinzip der Schwammstadt.\n\n**Das klingt teuer.**\n\nDie Investitionen sind beträchtlich, keine Frage. Aber Untätigkeit ist auf lange Sicht teurer – denken Sie an gesundheitliche Folgen, an Schäden durch Starkregen, an Arbeitsausfälle. Viele Maßnahmen lassen sich außerdem mit ohnehin geplanten Bauarbeiten verbinden: Wenn eine Straße sowieso aufgerissen wird, kostet es nur wenig mehr, dabei Platz für Bäume zu schaffen.\n\n**Was kann jeder Einzelne tun?**\n\nMehr, als man denkt. Wer einen Hinterhof hat, kann Pflaster durch Beete ersetzen, Balkone lassen sich bepflanzen. Und ganz wichtig: In Hitzeperioden nach älteren Nachbarn schauen. Das kostet nichts und kann im Zweifel Leben retten.\n\n**Sind Sie optimistisch?**\n\nVorsichtig. Das Bewusstsein für das Problem ist in den letzten Jahren enorm gewachsen. Was fehlt, ist oft Personal in den Verwaltungen, um die Pläne auch umzusetzen.' },
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Antwort.', items: [
          { q: 'Warum ist die Hitze in der Stadt nachts ein Problem?', o: ['Straßen und Gebäude geben die gespeicherte Wärme ab.', 'Nachts ist der Verkehr in der Stadt stärker.', 'Im Umland ist es nachts wärmer als in der Stadt.'], why: 'Asphalt und Beton speichern die Wärme und geben sie nachts wieder ab, deshalb kühlt es kaum ab.' },
          { q: 'Was sagt Frau Kaufmann über Bäume?', o: ['Alte Bäume zu erhalten ist genauso wichtig, wie neue zu pflanzen.', 'Neu gepflanzte Bäume kühlen die Umgebung sofort.', 'Begrünte Dächer sind wirksamer als Bäume.'], why: 'Ein neuer Baum braucht Jahrzehnte, „deshalb ist es mindestens genauso wichtig, alte Bäume zu erhalten“.' },
          { q: 'Wie beurteilt sie helle Oberflächen?', o: ['Sie sind sinnvoll, ersetzen aber keinen Schatten.', 'Sie sollten auf allen Plätzen eingesetzt werden.', 'Sie haben überhaupt keine Wirkung.'], why: 'Sie sagt: „Helle Flächen sind eine Ergänzung, kein Ersatz für Schatten.“' },
          { q: 'Was bedeutet das Prinzip der Schwammstadt?', o: ['Regenwasser wird im Boden gehalten.', 'In der Stadt werden mehr Brunnen gebaut.', 'Regenwasser wird schnell in die Kanalisation geleitet.'], why: 'Regenwasser soll „im Boden versickern“, damit es den Pflanzen in Trockenzeiten zur Verfügung steht.' },
          { q: 'Was meint sie zu den Kosten?', o: ['Nichts zu tun wäre langfristig teurer.', 'Die Maßnahmen kosten kaum etwas.', 'Städte sollten mit den Maßnahmen warten, bis Geld da ist.'], why: 'Sie sagt: „Untätigkeit ist auf lange Sicht teurer.“' },
          { q: 'Was kann laut Frau Kaufmann jeder Einzelne tun?', o: ['Sich bei Hitze um ältere Nachbarn kümmern.', 'Eine Klimaanlage einbauen.', 'Einen Brunnen im Hof bauen.'], why: 'Sie empfiehlt: „In Hitzeperioden nach älteren Nachbarn schauen.“' },
          { q: 'Was fehlt nach ihrer Meinung vor allem?', o: ['Personal, um die Pläne umzusetzen.', 'Das Bewusstsein für das Problem.', 'Gute Ideen für mehr Grün.'], why: 'Das Bewusstsein ist gewachsen; „was fehlt, ist oft Personal in den Verwaltungen“.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Meinungen in einem Forum',
      about: 'In einem Forum schreiben vier Personen über die Frage, ob Busse und Bahnen in der Stadt kostenlos sein sollten. Wer vertritt welche Meinung? Jede Person passt zweimal.',
      texts: [
        { md: '**Helen**, 41, Lehrerin\n\nIch halte die Idee für sympathisch, aber für zu kurz gedacht. Schon jetzt sind die Busse in unserer Stadt zur Hauptverkehrszeit völlig überfüllt. Würde der Nahverkehr kostenlos, kämen noch mehr Fahrgäste hinzu – und zwar vor allem Leute, die bisher zu Fuß gehen oder Rad fahren, nicht die Autofahrer. Bevor man über Preise redet, sollte man in einen dichteren Takt und neue Linien investieren.' },
        { md: '**Tarek**, 24, Student\n\nFür mich wäre das ein Riesengewinn. Ich wohne am Stadtrand, und das Monatsticket frisst einen großen Teil meines Budgets. Klar, irgendwer muss das bezahlen. Aber wir finanzieren ja auch Straßen aus Steuern, ohne dass jemand fragt, ob jeder sie mit dem Auto nutzt. Warum sollte das bei Bussen und Bahnen anders sein?' },
        { md: '**Katrin**, 53, Inhaberin eines Modegeschäfts\n\nAls Einzelhändlerin hoffe ich natürlich, dass wieder mehr Menschen in die Innenstadt kommen. In einer Nachbarstadt hat man kostenlose Busse an Samstagen ausprobiert, und die Geschäfte waren deutlich voller. Ob das auch dauerhaft funktioniert, weiß ich nicht. Ein guter Kompromiss wären vielleicht kostenlose Fahrten am Wochenende oder für bestimmte Gruppen.' },
        { md: '**Paul**, 68, Rentner\n\nIch fahre seit meiner Pensionierung fast nur noch Bus und zahle gern dafür. Was mich stört, ist etwas anderes: Viele Haltestellen haben kein Dach und keine Bank, und die Anzeigen funktionieren oft nicht. Wenn man schon Geld in die Hand nimmt, dann bitte zuerst dafür. Kostenlos allein macht den Bus nicht attraktiver.' },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Wer sagt das?', opts: ['Helen', 'Tarek', 'Katrin', 'Paul'], items: [
          { q: 'Diese Person vergleicht die Finanzierung mit der von Straßen.', a: 1, why: 'Tarek schreibt: „Wir finanzieren ja auch Straßen aus Steuern.“' },
          { q: 'Diese Person befürchtet, dass vor allem Fußgänger und Radfahrer umsteigen würden.', a: 0, why: 'Helen meint, es kämen „vor allem Leute, die bisher zu Fuß gehen oder Rad fahren“.' },
          { q: 'Diese Person berichtet von einem Versuch in einer anderen Stadt.', a: 2, why: 'Katrin schreibt, dass man in einer Nachbarstadt kostenlose Busse an Samstagen ausprobiert hat.' },
          { q: 'Diese Person ist bereit, weiterhin für Fahrkarten zu bezahlen.', a: 3, why: 'Paul schreibt: „Ich fahre … fast nur noch Bus und zahle gern dafür.“' },
          { q: 'Diese Person schlägt vor, den Nahverkehr nur zeitweise oder für einige Gruppen kostenlos zu machen.', a: 2, why: 'Katrin schlägt kostenlose Fahrten am Wochenende oder für bestimmte Gruppen vor.' },
          { q: 'Diese Person hält mehr Verbindungen für wichtiger als niedrigere Preise.', a: 0, why: 'Helen will zuerst „in einen dichteren Takt und neue Linien investieren“.' },
          { q: 'Diese Person würde selbst finanziell direkt profitieren.', a: 1, why: 'Für Tarek wäre es ein Riesengewinn, weil das Monatsticket einen großen Teil seines Budgets kostet.' },
          { q: 'Diese Person kritisiert den Zustand der Haltestellen.', a: 3, why: 'Paul schreibt, viele Haltestellen hätten kein Dach und keine Bank.' },
        ] },
      ] },
  ],
};
