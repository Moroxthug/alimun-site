// Alimun test German B2, paper Hören (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'hoeren', title: 'Hören', minutes: 30,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Kurze Texte',
      about: 'Sie hören fünf kurze Texte. Sie hören jeden Text zweimal. Wählen Sie die richtige Antwort.',
      plays: 2,
      recs: [
        { lines: [{ who: 'Sprecherin', s: 'Die Stadtwerke haben angekündigt, die Preise für Fernwärme zum Jahresbeginn um durchschnittlich acht Prozent zu erhöhen. Ein Sprecher begründete den Schritt mit gestiegenen Kosten für Personal und Wartung. Verbraucherschützer kritisierten, die Erhöhung sei viel zu kurzfristig mitgeteilt worden. Die Kunden haben nun ein Sonderkündigungsrecht.' }] },
        { lines: [{ who: 'Ben', s: 'Hallo Clara, hier ist Ben. Ich hab mir deinen Entwurf für die Präsentation angeschaut. Also, inhaltlich finde ich den wirklich stark, ehrlich. Aber es sind einfach zu viele Folien für zwanzig Minuten. Vielleicht könnten wir die Zahlen aus dem zweiten Teil in einer Grafik zusammenfassen? Lass uns morgen früh kurz telefonieren, bevor du das an den Chef schickst, ja? Bis dann.' }] },
        { lines: [{ who: 'Frau Wolf', s: 'Herzlich willkommen in unserer Ausstellung. Fotografieren ist überall erlaubt, allerdings ohne Blitz. Bitte beachten Sie: Den Raum mit den Originalbriefen dürfen höchstens acht Personen gleichzeitig betreten. Licht und Feuchtigkeit schaden dem alten Papier, und jeder Besucher bringt Wärme und Feuchtigkeit mit. Wir bitten also um etwas Geduld, falls Sie kurz warten müssen.' }] },
        { lines: [
          { who: 'Lina', s: 'Und, wie fandest du den Film?' },
          { who: 'Marco', s: 'Puh. Die Bilder waren großartig, keine Frage. Aber die Geschichte … ich hab nach einer Stunde nicht mehr verstanden, wer eigentlich mit wem verwandt ist.' },
          { who: 'Lina', s: 'Ach komm, das war doch gerade das Spannende!' },
          { who: 'Marco', s: 'Für dich vielleicht. Ich hätte mir ein bisschen weniger Rätsel gewünscht.' },
        ] },
        { lines: [{ who: 'Frau Sommer', s: 'Ich helfe seit drei Jahren bei der Lebensmittelausgabe in unserem Stadtteil. Am Anfang dachte ich, dafür hätte ich neben dem Job gar keine Zeit. Aber zwei Stunden pro Woche schafft man eigentlich immer. Was ich wirklich nicht erwartet hatte: dass ich selbst so viel zurückbekomme. Ich gehe nach jeder Schicht zufriedener nach Hause, als ich gekommen bin.' }] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', rec: 0, h: 'Nachrichten im Radio: Wählen Sie die richtige Antwort.', items: [
          { q: 'Was kritisieren die Verbraucherschützer?', o: ['Die Kunden wurden zu spät informiert.', 'Die Preise steigen um mehr als acht Prozent.', 'Die Kunden können den Vertrag nicht kündigen.'], why: 'Sie kritisierten, die Erhöhung sei „viel zu kurzfristig mitgeteilt worden“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 1, h: 'Eine Nachricht von einem Kollegen: Wählen Sie die richtige Antwort.', items: [
          { q: 'Was hält Ben von Claras Entwurf?', o: ['Er ist inhaltlich gut, aber zu lang.', 'Er ist inhaltlich zu schwach.', 'Er kann so an den Chef gehen.'], why: 'Ben findet den Inhalt „wirklich stark“, aber es sind „zu viele Folien für zwanzig Minuten“.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 2, h: 'In einer Ausstellung: Wählen Sie die richtige Antwort.', items: [
          { q: 'Warum dürfen nur wenige Personen in den Raum mit den Briefen?', o: ['Um das alte Papier zu schützen.', 'Weil der Raum sehr klein ist.', 'Weil dort eine Führung stattfindet.'], why: 'Licht und Feuchtigkeit schaden dem Papier, und jeder Besucher bringt Wärme und Feuchtigkeit mit.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 3, h: 'Nach dem Kino: Wählen Sie die richtige Antwort.', items: [
          { q: 'Was kritisiert Marco?', o: ['Die Handlung war zu kompliziert.', 'Die Bilder waren enttäuschend.', 'Der Film war zu lang.'], why: 'Marco hat nicht mehr verstanden, „wer eigentlich mit wem verwandt ist“, und hätte sich weniger Rätsel gewünscht.' },
        ] },
        { t: 'ex', kind: 'choice', rec: 4, h: 'Eine Hörerin erzählt: Wählen Sie die richtige Antwort.', items: [
          { q: 'Was hat Frau Sommer überrascht?', o: ['Dass ihr die Arbeit selbst so viel gibt.', 'Dass sie viel mehr Zeit braucht als gedacht.', 'Dass es so wenige Helfer gibt.'], why: 'Sie sagt: „Was ich wirklich nicht erwartet hatte: dass ich selbst so viel zurückbekomme.“' },
        ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Ein Interview im Radio',
      about: 'Sie hören ein Interview mit einer Lernforscherin. Sie hören das Interview zweimal. Wählen Sie die richtige Antwort.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Interviewer', s: 'In unserer Reihe „Lernen ein Leben lang“ begrüße ich heute Dr. Elena Brandt. Sie forscht zum Lernen im Erwachsenenalter. Frau Brandt, viele Menschen glauben, dass man ab einem gewissen Alter keine Sprache mehr richtig lernen kann. Stimmt das?' },
          { who: 'Frau Dr. Brandt', s: 'Nein, das ist einer der hartnäckigsten Mythen. Richtig ist, dass Kinder einen Akzent leichter vermeiden. Aber Erwachsene haben andere Vorteile: Sie können Regeln bewusst verstehen, sie haben Lernstrategien und meist eine klare Motivation. In den ersten Monaten kommen Erwachsene oft sogar schneller voran als Kinder.' },
          { who: 'Interviewer', s: 'Woran scheitern Erwachsene dann am häufigsten?' },
          { who: 'Frau Dr. Brandt', s: 'Weniger an der Begabung als an der Zeit. Beruf, Familie – da wird der Kurs schnell als Erstes gestrichen. Und viele haben zu hohe Erwartungen an sich selbst. Wer nach drei Monaten fließend sprechen will, ist frustriert und hört auf.' },
          { who: 'Interviewer', s: 'Was empfehlen Sie stattdessen?' },
          { who: 'Frau Dr. Brandt', s: 'Kleine, aber regelmäßige Einheiten. Zwanzig Minuten jeden Tag bringen mehr als drei Stunden am Sonntag. Das Gehirn braucht Wiederholung mit Pausen dazwischen, damit sich das Gelernte festigt. Und der Schlaf spielt eine große Rolle: Im Schlaf wird verarbeitet, was wir tagsüber gelernt haben.' },
          { who: 'Interviewer', s: 'Viele lernen heute mit Apps. Was halten Sie davon?' },
          { who: 'Frau Dr. Brandt', s: 'Für Vokabeln sind sie hervorragend. Problematisch wird es, wenn man nur noch tippt und nie spricht. Eine Sprache lernt man letztlich im Gespräch – und zwar gerade dann, wenn man Fehler macht und korrigiert wird.' },
          { who: 'Interviewer', s: 'Viele Erwachsene haben aber Angst, Fehler zu machen.' },
          { who: 'Frau Dr. Brandt', s: 'Genau, und diese Angst ist oft das größte Hindernis. In Gruppen mit einer entspannten Atmosphäre lernen Menschen nachweislich mehr. Lehrkräfte sollten deshalb nicht jeden Fehler sofort verbessern, sondern erst einmal den Mut zum Sprechen belohnen.' },
          { who: 'Interviewer', s: 'Zum Schluss: Haben Sie selbst als Erwachsene eine Sprache gelernt?' },
          { who: 'Frau Dr. Brandt', s: 'Ja, Portugiesisch, mit Mitte vierzig. Ich spreche es bis heute nicht perfekt, aber ich kann mich mit meinen Nachbarn im Urlaub über alles unterhalten. Und das war ja das Ziel.' },
          { who: 'Interviewer', s: 'Frau Brandt, vielen Dank für das Gespräch.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'choice', h: 'Wählen Sie die richtige Antwort.', items: [
          { q: 'Was sagt Frau Brandt über Erwachsene im Vergleich zu Kindern?', o: ['Sie kommen am Anfang oft schneller voran.', 'Sie sprechen meist ohne Akzent.', 'Sie können eine Sprache nicht mehr richtig lernen.'], why: 'Sie sagt: „In den ersten Monaten kommen Erwachsene oft sogar schneller voran als Kinder.“' },
          { q: 'Warum hören Erwachsene oft mit dem Lernen auf?', o: ['Wegen Zeitmangel und zu hoher Erwartungen.', 'Weil ihnen die Begabung fehlt.', 'Weil die Kurse zu teuer sind.'], why: 'Sie scheitern „weniger an der Begabung als an der Zeit“, und viele haben zu hohe Erwartungen.' },
          { q: 'Was empfiehlt Frau Brandt?', o: ['Jeden Tag kurz lernen.', 'Am Wochenende mehrere Stunden lernen.', 'Vor allem abends vor dem Schlafen lernen.'], why: 'Sie sagt: „Zwanzig Minuten jeden Tag bringen mehr als drei Stunden am Sonntag.“' },
          { q: 'Welche Rolle spielt der Schlaf?', o: ['Im Schlaf wird das Gelernte verarbeitet.', 'Man sollte direkt nach dem Schlafen lernen.', 'Er spielt beim Lernen kaum eine Rolle.'], why: 'Sie sagt: „Im Schlaf wird verarbeitet, was wir tagsüber gelernt haben.“' },
          { q: 'Wie beurteilt sie Lern-Apps?', o: ['Gut für Wörter, aber kein Ersatz für Gespräche.', 'Sie sind für Erwachsene ungeeignet.', 'Sie sind besser als jeder Kurs.'], why: 'Apps sind „für Vokabeln hervorragend“, aber eine Sprache lernt man „im Gespräch“.' },
          { q: 'Was sollten Lehrkräfte nach ihrer Meinung tun?', o: ['Nicht jeden Fehler sofort korrigieren.', 'Alle Fehler sofort korrigieren.', 'Nur noch Einzelunterricht geben.'], why: 'Lehrkräfte sollten „nicht jeden Fehler sofort verbessern, sondern erst einmal den Mut zum Sprechen belohnen“.' },
          { q: 'Was erzählt Frau Brandt über ihr Portugiesisch?', o: ['Es ist nicht perfekt, aber sie kann sich gut unterhalten.', 'Sie spricht es inzwischen perfekt.', 'Sie hat das Lernen wieder aufgegeben.'], why: 'Sie spricht es „nicht perfekt“, kann sich aber mit ihren Nachbarn über alles unterhalten.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Eine Diskussion',
      about: 'Sie hören eine Radiodiskussion über den Tourismus in einem kleinen Ort. Sie hören die Diskussion zweimal. Wer sagt das: Frau Petersen, Herr Lang oder beide?',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Moderatorin', s: 'Seewalden hat 4000 Einwohner und im Sommer an manchen Tagen bis zu 10 000 Tagesgäste. Darüber spreche ich mit Katrin Petersen, die am See ein Hotel führt, und mit Felix Lang von der Bürgerinitiative „Lebenswertes Seewalden“. Herr Lang, wo liegt das Problem?' },
          { who: 'Herr Lang', s: 'Das Problem ist nicht der Tourismus an sich. Ich lebe ja selbst gern hier, gerade weil die Landschaft so schön ist. Das Problem sind die Massen an den Wochenenden. Die Straßen sind zugeparkt, der Bus kommt nicht durch, und am Ufer findet man als Einheimischer keinen Platz mehr.' },
          { who: 'Frau Petersen', s: 'Ich verstehe den Ärger, wirklich. Aber man muss auch sehen: Ohne die Gäste gäbe es hier keinen Laden mehr, keinen Bäcker, wahrscheinlich nicht mal mehr die Busverbindung. Ein Drittel der Arbeitsplätze im Ort hängt am Tourismus.' },
          { who: 'Herr Lang', s: 'Das bestreitet ja niemand. Aber die Tagesgäste lassen kaum Geld hier. Die bringen ihr Picknick mit und fahren abends wieder. Ihre Hotelgäste, Frau Petersen, die sind nicht das Problem.' },
          { who: 'Frau Petersen', s: 'Da haben Sie recht, die Tagesgäste sind tatsächlich die größte Herausforderung. Deshalb schlage ich vor, die Parkgebühren am Wochenende deutlich zu erhöhen und gleichzeitig einen Shuttlebus vom Bahnhof anzubieten.' },
          { who: 'Moderatorin', s: 'Herr Lang, wäre das eine Lösung?' },
          { who: 'Herr Lang', s: 'Ein Anfang. Mir geht das aber nicht weit genug. Ich wäre dafür, die Parkplätze am Ufer ganz abzuschaffen und dort wieder eine Wiese anzulegen.' },
          { who: 'Frau Petersen', s: 'Das halte ich für gefährlich. Dann parken die Leute einfach in den Wohnstraßen, und das Problem verschiebt sich nur.' },
          { who: 'Moderatorin', s: 'Und was ist mit einer Gebühr für Tagesgäste, wie es manche Städte machen?' },
          { who: 'Frau Petersen', s: 'Davon halte ich gar nichts. Wir wollen unsere Gäste doch willkommen heißen und nicht abkassieren. So etwas spricht sich schnell herum.' },
          { who: 'Herr Lang', s: 'Da bin ich ausnahmsweise mal einer Meinung mit Frau Petersen. Eintritt für einen ganzen Ort – das passt nicht zu uns.' },
          { who: 'Moderatorin', s: 'Wie geht es jetzt weiter?' },
          { who: 'Herr Lang', s: 'Wir als Bürgerinitiative haben im Gemeinderat einen runden Tisch beantragt, mit Anwohnern, Gastronomen und der Verwaltung.' },
          { who: 'Frau Petersen', s: 'Und da bin ich gern dabei. Lösen können wir das nur zusammen.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Wer sagt das?', opts: ['Frau Petersen', 'Herr Lang', 'beide'], items: [
          { q: 'Diese Person betont, dass viele Arbeitsplätze vom Tourismus abhängen.', a: 0, why: 'Frau Petersen sagt: „Ein Drittel der Arbeitsplätze im Ort hängt am Tourismus.“' },
          { q: 'Diese Person sieht in den Tagesgästen das größte Problem.', a: 2, why: 'Herr Lang kritisiert die Tagesgäste, und Frau Petersen stimmt zu: „Die Tagesgäste sind tatsächlich die größte Herausforderung.“' },
          { q: 'Diese Person möchte die Parkplätze am Ufer in eine Wiese verwandeln.', a: 1, why: 'Herr Lang möchte die Parkplätze am Ufer abschaffen und dort wieder eine Wiese anlegen.' },
          { q: 'Diese Person befürchtet, dass die Autos dann in den Wohnstraßen parken.', a: 0, why: 'Frau Petersen sagt: „Dann parken die Leute einfach in den Wohnstraßen.“' },
          { q: 'Diese Person lehnt eine Gebühr für Tagesgäste ab.', a: 2, why: 'Frau Petersen hält „gar nichts“ davon, und Herr Lang ist „einer Meinung mit Frau Petersen“.' },
          { q: 'Diese Person schlägt einen Shuttlebus vom Bahnhof vor.', a: 0, why: 'Frau Petersen schlägt höhere Parkgebühren und einen Shuttlebus vom Bahnhof vor.' },
          { q: 'Diese Person wohnt gern im Ort, weil die Landschaft so schön ist.', a: 1, why: 'Herr Lang sagt: „Ich lebe ja selbst gern hier, gerade weil die Landschaft so schön ist.“' },
          { q: 'Diese Person hat mit anderen einen runden Tisch beantragt.', a: 1, why: 'Herr Lang sagt: „Wir als Bürgerinitiative haben im Gemeinderat einen runden Tisch beantragt.“' },
        ] },
      ] },
  ],
};
