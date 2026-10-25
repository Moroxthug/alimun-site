// Practice test in the format of telc Deutsch B2: Hörverstehen. Original Alimun recordings, not official material. Draft for native-teacher review.
export const PAPER = {
  id: 'hoeren', title: 'Hörverstehen', minutes: 20,
  parts: [
    {
      id: 'h1', ref: 'Hörverstehen, Teil 1', title: 'Globalverstehen',
      about: 'Sie hören fünf Nachrichten aus dem Radio. Entscheiden Sie bei jeder Aussage, ob sie richtig oder falsch ist. Sie hören jede Nachricht nur einmal.',
      plays: 1,
      recs: [
        { lines: [{ who: 'Sprecherin', s: 'Hollfeld. Imbisse, Cafés und Restaurants in Hollfeld müssen ab dem kommenden Jahr eine Abgabe auf Einwegverpackungen zahlen. Für jeden Kaffeebecher zum Mitnehmen werden künftig vierzig Cent fällig, für Essensverpackungen ebenso viel. Der Stadtrat erhofft sich davon weniger Müll in Parks und auf Straßen. Mehrere Gastronomen haben bereits angekündigt, gegen die neue Steuer zu klagen. Betriebe, die Mehrweggeschirr anbieten, sollen dagegen einen Zuschuss bekommen.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Die Tarifverhandlungen für die rund zwölftausend Beschäftigten im kommunalen Nahverkehr sind gestern Abend ohne Ergebnis abgebrochen worden. Die Gewerkschaft bezeichnete das Angebot der Arbeitgeber als unzureichend und kündigte für Donnerstag ganztägige Warnstreiks an. Fahrgäste müssen sich auf erhebliche Ausfälle bei Bussen und Straßenbahnen einstellen. Ein neuer Verhandlungstermin wurde bislang nicht vereinbart.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Die Wasserqualität der Lauter hat sich in den vergangenen zehn Jahren deutlich verbessert. Zu diesem Ergebnis kommt eine Untersuchung des Landesumweltamts, die heute vorgestellt wurde. Demnach sind in dem Fluss inzwischen wieder Fischarten heimisch, die dort lange als verschwunden galten. Als Hauptgrund nennen die Fachleute die modernisierten Kläranlagen entlang des Flusses. Sorgen bereitet ihnen allerdings der niedrige Wasserstand in trockenen Sommern.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Das Stadtmuseum Eschenbach bleibt trotz der angekündigten Sparmaßnahmen geöffnet. Darauf hat sich der Kulturausschuss nach langer Diskussion verständigt. Allerdings werden die Öffnungszeiten ab Januar eingeschränkt: Montags und dienstags bleibt das Haus künftig geschlossen. Außerdem soll der Eintritt um zwei Euro steigen. Für Schulklassen bleibt der Besuch weiterhin kostenlos.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Und noch eine Meldung für Autofahrer: Die Lauterbrücke im Norden der Stadt wird ab Montag für Lastwagen über siebeneinhalb Tonnen gesperrt. Bei einer Prüfung waren Schäden an den Stahlträgern festgestellt worden. Für Pkw, Busse und Radfahrer bleibt die Brücke vorerst befahrbar, allerdings gilt dort ab sofort Tempo 30. Lastwagen werden über die Umgehungsstraße umgeleitet.' }] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', rec: 0, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'In Hollfeld wird künftig Geld für Einwegverpackungen verlangt.', a: 0, why: 'Die Betriebe „müssen ab dem kommenden Jahr eine Abgabe auf Einwegverpackungen zahlen“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 1, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Gewerkschaft und Arbeitgeber im Nahverkehr haben sich geeinigt.', a: 1, why: 'Die Verhandlungen sind „ohne Ergebnis abgebrochen worden“, und es drohen Warnstreiks.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 2, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Der Zustand des Flusses Lauter ist heute besser als vor zehn Jahren.', a: 0, why: 'Die Wasserqualität „hat sich in den vergangenen zehn Jahren deutlich verbessert“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 3, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Das Stadtmuseum Eschenbach muss aus Geldmangel schließen.', a: 1, why: 'Das Museum „bleibt trotz der angekündigten Sparmaßnahmen geöffnet“, nur mit kürzeren Öffnungszeiten.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 4, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Ab Montag darf niemand mehr über die Lauterbrücke fahren.', a: 1, why: 'Gesperrt wird sie nur für schwere Lastwagen; „für Pkw, Busse und Radfahrer bleibt die Brücke vorerst befahrbar“.' },
        ] },
      ],
    },
    {
      id: 'h2', ref: 'Hörverstehen, Teil 2', title: 'Detailverstehen',
      about: 'Sie hören ein Interview aus dem Radio. Entscheiden Sie bei jeder Aussage, ob sie richtig oder falsch ist. Sie hören das Interview zweimal.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Moderatorin', s: 'Starkregen im Frühjahr, Hitzewellen im Sommer: Unsere Städte müssen sich auf extremes Wetter einstellen. Bei mir im Studio ist dazu Thomas Albers, Stadtplaner in Rheinfeld. Herr Albers, man hört in letzter Zeit oft den Begriff „Schwammstadt“. Was genau ist damit gemeint?' },
          { who: 'Herr Albers', s: 'Die Idee ist eigentlich ganz einfach. Bisher haben wir Regenwasser so schnell wie möglich in die Kanalisation abgeleitet. Bei Starkregen schafft die Kanalisation das aber nicht mehr, und dann laufen Keller und Unterführungen voll. Eine Schwammstadt macht es genau umgekehrt: Sie hält das Wasser dort, wo es fällt, wie ein Schwamm eben, und gibt es später langsam wieder ab, an Pflanzen oder durch Verdunstung.' },
          { who: 'Moderatorin', s: 'Und wie sieht das konkret aus?' },
          { who: 'Herr Albers', s: 'Zum Beispiel mit begrünten Dächern, mit Mulden in Parks, in denen sich das Wasser sammeln kann, oder mit Parkplätzen, deren Belag Wasser durchlässt. Wir haben in Rheinfeld vor drei Jahren mit einem Pilotviertel angefangen, dem Quartier am alten Hafen.' },
          { who: 'Moderatorin', s: 'Was hat sich dort verändert?' },
          { who: 'Herr Albers', s: 'Wir haben unter anderem zweihundert Bäume gepflanzt und unter den Straßen große Speicher angelegt. Beim letzten Unwetter im Juli ist im Hafenquartier kein einziger Keller vollgelaufen, während die Feuerwehr in anderen Stadtteilen über hundert Mal ausrücken musste. Das hat übrigens auch viele Skeptiker überzeugt.' },
          { who: 'Moderatorin', s: 'Es gab also Skeptiker?' },
          { who: 'Herr Albers', s: 'Oh ja, durchaus. Am Anfang haben sich vor allem Anwohner beschwert, weil Parkplätze weggefallen sind. Und manche Geschäftsleute hatten Angst, dass ihre Kunden ausbleiben. Wir haben dann zahlreiche Informationsabende veranstaltet und die Pläne in einigen Punkten geändert, zum Beispiel haben wir mehr Kurzzeitparkplätze vor den Läden eingeplant. Heute ist die Zustimmung im Viertel sehr hoch.' },
          { who: 'Moderatorin', s: 'Sie haben vorhin auch Hitze erwähnt. Was hat die Schwammstadt damit zu tun?' },
          { who: 'Herr Albers', s: 'Sehr viel. Das gespeicherte Wasser verdunstet an heißen Tagen und kühlt die Umgebung. Wir haben gemessen, dass es im Hafenquartier an Sommertagen bis zu drei Grad kühler ist als in der Innenstadt. Das klingt nach wenig, aber für ältere Menschen oder kleine Kinder ist das ein enormer Unterschied.' },
          { who: 'Moderatorin', s: 'Das alles klingt nach sehr viel Geld. Wer bezahlt das?' },
          { who: 'Herr Albers', s: 'Ein großer Teil kommt aus Förderprogrammen des Landes, den Rest trägt die Stadt. Aber man muss auch sehen: Die Schäden, die Überschwemmungen anrichten, kosten am Ende viel mehr. Langfristig spart die Stadt also eher Geld, als dass sie es ausgibt.' },
          { who: 'Moderatorin', s: 'Können auch Privatleute etwas beitragen?' },
          { who: 'Herr Albers', s: 'Auf jeden Fall. Wer ein Haus hat, kann zum Beispiel das Garagendach begrünen oder in der Einfahrt statt Pflastersteinen Rasengittersteine verlegen. Die Stadt übernimmt dafür übrigens bis zur Hälfte der Kosten. Und selbst auf dem Balkon hilft jede Pflanze ein kleines bisschen.' },
          { who: 'Moderatorin', s: 'Wie geht es in Rheinfeld weiter?' },
          { who: 'Herr Albers', s: 'Ab dem nächsten Jahr sollen alle neuen Baugebiete nach diesem Prinzip geplant werden. Deutlich schwieriger ist es in der Altstadt, wo die Gassen eng sind und vieles unter Denkmalschutz steht. Da müssen wir noch kreative Lösungen finden.' },
          { who: 'Moderatorin', s: 'Herr Albers, vielen Dank für das Gespräch.' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'In einer Schwammstadt soll das Regenwasser möglichst schnell in die Kanalisation fließen.', a: 1, why: 'Die Schwammstadt macht es „genau umgekehrt“: Sie hält das Wasser dort, wo es fällt.' },
          { q: 'Das Pilotprojekt im Hafenquartier begann vor drei Jahren.', a: 0, why: 'Herr Albers sagt: „Wir haben in Rheinfeld vor drei Jahren mit einem Pilotviertel angefangen.“' },
          { q: 'Beim Unwetter im Juli gab es im Hafenquartier keine überfluteten Keller.', a: 0, why: 'Im Hafenquartier ist „kein einziger Keller vollgelaufen“.' },
          { q: 'Anwohner kritisierten am Anfang vor allem, dass Parkplätze verloren gingen.', a: 0, why: 'Anwohner haben sich beschwert, „weil Parkplätze weggefallen sind“.' },
          { q: 'Die Stadt hat ihre Pläne trotz der Kritik unverändert umgesetzt.', a: 1, why: 'Die Stadt hat „die Pläne in einigen Punkten geändert“, zum Beispiel mit mehr Kurzzeitparkplätzen.' },
          { q: 'An heißen Tagen ist es im Hafenquartier bis zu drei Grad kühler als im Zentrum.', a: 0, why: 'Gemessen wurden im Hafenquartier „bis zu drei Grad“ weniger „als in der Innenstadt“.' },
          { q: 'Die Stadt Rheinfeld bezahlt das Projekt vollständig selbst.', a: 1, why: 'Ein großer Teil des Geldes „kommt aus Förderprogrammen des Landes“.' },
          { q: 'Herr Albers meint, dass das Konzept auf lange Sicht Kosten spart.', a: 0, why: 'Er sagt: „Langfristig spart die Stadt also eher Geld, als dass sie es ausgibt.“' },
          { q: 'Hausbesitzer bekommen die gesamten Kosten für ein begrüntes Garagendach erstattet.', a: 1, why: 'Die Stadt übernimmt nur „bis zur Hälfte der Kosten“.' },
          { q: 'In der Altstadt lässt sich das Konzept besonders leicht umsetzen.', a: 1, why: 'In der Altstadt ist es „deutlich schwieriger“, weil die Gassen eng sind und vieles unter Denkmalschutz steht.' },
        ] },
      ],
    },
    {
      id: 'h3', ref: 'Hörverstehen, Teil 3', title: 'Selektives Verstehen',
      about: 'Sie hören fünf kurze Texte. Entscheiden Sie bei jeder Aussage, ob sie richtig oder falsch ist. Sie hören jeden Text zweimal.',
      plays: 2,
      recs: [
        { lines: [{ who: 'Herr Brückner', s: 'Guten Tag, Frau Kowalski, hier ist Brückner vom Bürgeramt Mitte. Ich rufe an, weil Ihr neuer Reisepass inzwischen bei uns eingetroffen ist. Sie können ihn montags bis mittwochs zwischen acht und zwölf Uhr ohne Termin abholen. Donnerstags haben wir länger geöffnet, dann allerdings nur mit vorheriger Terminvereinbarung. Bitte denken Sie daran, Ihren alten Pass mitzubringen, der wird bei der Abholung entwertet. Vielen Dank.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Herzlich willkommen beim Kundenservice der Stadtwerke Rheinfeld. Aufgrund der hohen Nachfrage kommt es derzeit zu längeren Wartezeiten. Ihren Zählerstand können Sie bequem und ohne Wartezeit im Kundenportal auf unserer Internetseite melden. Wenn Sie eine Störung der Strom-, Gas- oder Wasserversorgung melden möchten, drücken Sie bitte die Eins. Für Fragen zu Ihrer Rechnung drücken Sie die Zwei.' }] },
        { lines: [{ who: 'Herr Kaya', s: 'Sehr geehrte Messebesucherinnen und Messebesucher, bitte beachten Sie eine Programmänderung. Die Podiumsdiskussion zum Thema „Arbeiten im Alter“, die um 15 Uhr in Halle 2 stattfinden sollte, wird in den Konferenzsaal im Obergeschoss von Halle 4 verlegt. Da der Saal erst vorbereitet werden muss, beginnt die Diskussion eine halbe Stunde später als angekündigt. Wir bitten um Ihr Verständnis.' }] },
        { lines: [{ who: 'Sabine', s: 'Hallo Markus, hier ist Sabine. Kurz zur Info: Der Termin mit dem Kunden aus Graz ist von Donnerstag auf Mittwoch vorverlegt worden, wieder um zehn Uhr, im großen Besprechungsraum. Kannst du bitte die Präsentation mitbringen? Ich selbst kann leider nicht dabei sein, weil ich am Mittwoch den ganzen Tag auf dem Seminar in Köln bin. Lass mich danach einfach wissen, wie es gelaufen ist. Danke dir!' }] },
        { lines: [{ who: 'Felix', s: 'Und hier die Verkehrslage: Auf der B 27 zwischen Lindach und Oberried ist nach einem Unfall mit einem Lastwagen die Fahrbahn in beiden Richtungen voll gesperrt. Eine Umleitung über die Landstraße durch Hausen ist ausgeschildert. Rechnen Sie dort mit Verzögerungen von etwa zwanzig Minuten. Die Bergungsarbeiten dauern nach Angaben der Polizei voraussichtlich bis 18 Uhr.' }] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', rec: 0, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Frau Kowalski muss für die Abholung ihres Passes auf jeden Fall einen Termin vereinbaren.', a: 1, why: 'Montags bis mittwochs kann sie den Pass „ohne Termin abholen“; nur donnerstags braucht sie einen Termin.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 1, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Wer eine Störung melden möchte, soll die Eins drücken.', a: 0, why: 'Für eine Störung der Versorgung „drücken Sie bitte die Eins“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 2, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Die Podiumsdiskussion beginnt um halb vier.', a: 0, why: 'Geplant war 15 Uhr, und die Diskussion „beginnt eine halbe Stunde später als angekündigt“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 3, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Sabine nimmt am Termin mit dem Kunden teil.', a: 1, why: 'Sabine sagt: „Ich selbst kann leider nicht dabei sein“, weil sie auf einem Seminar ist.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 4, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Die Sperrung der B 27 soll voraussichtlich am frühen Abend enden.', a: 0, why: 'Die Bergungsarbeiten dauern „voraussichtlich bis 18 Uhr“.' },
        ] },
      ],
    },
  ],
};
