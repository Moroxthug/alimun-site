// Practice test in the format of telc Deutsch B1: Hörverstehen. Original Alimun recordings, not official material. Draft for native-teacher review.
export const PAPER = {
  id: 'hoeren', title: 'Hörverstehen', minutes: 30,
  parts: [
    {
      id: 'h1', ref: 'Hörverstehen, Teil 1', title: 'Globalverstehen',
      about: 'Sie hören fünf Nachrichten aus dem Radio. Entscheiden Sie bei den Aufgaben, ob die Aussagen richtig oder falsch sind. Sie hören jede Nachricht nur einmal.',
      plays: 1,
      recs: [
        { lines: [{ who: 'Sprecherin', s: 'Kranzbach. Wer in Kranzbach am Samstag in die Innenstadt möchte, muss ab dem nächsten Monat kein Ticket mehr kaufen. Der Stadtrat hat gestern beschlossen, dass alle Busse in der Stadt samstags kostenlos fahren. So sollen weniger Autos in die Altstadt kommen. Die Geschäfte in der Innenstadt hoffen außerdem auf mehr Kundinnen und Kunden. Der Versuch läuft zunächst ein Jahr lang.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Im Tierpark Eichenhain ist am Wochenende ein kleiner Elefant zur Welt gekommen. Mutter und Kind sind gesund. Wie das Elefantenbaby heißen soll, ist aber noch offen: Der Tierpark bittet alle Kinder aus der Region, bis Ende des Monats Namen vorzuschlagen. Die drei besten Vorschläge kommen danach auf die Internetseite des Tierparks, und dort darf jeder abstimmen.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Wegen der großen Hitze endet der Unterricht morgen an vielen Schulen im Land schon nach der vierten Stunde. Das Kultusministerium hat den Schulen erlaubt, die Schülerinnen und Schüler früher nach Hause zu schicken, wenn es in den Klassenzimmern wärmer als 27 Grad ist. Für jüngere Kinder, deren Eltern arbeiten, soll es aber eine Betreuung bis zum Mittag geben.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Jugendliche lesen wieder mehr. Das zeigt eine neue Studie der Universität Talheim. Danach lesen Jugendliche zwischen 14 und 18 Jahren heute im Durchschnitt mehr Bücher als noch vor zehn Jahren. Viele von ihnen tauschen sich in Online-Gruppen über ihre Lieblingsbücher aus und bekommen dort neue Ideen. Besonders beliebt sind Fantasy-Romane und Liebesgeschichten.' }] },
        { lines: [{ who: 'Sprecherin', s: 'Und zum Schluss das Wetter: Im Süden bleibt es am Wochenende sonnig und trocken, mit Temperaturen bis 28 Grad. Im Norden dagegen ziehen von Samstagmittag an dichte Wolken auf, und es regnet immer wieder kräftig. Dort wird es mit höchstens 17 Grad deutlich kühler. Erst am Montag wird es auch im Norden wieder freundlicher.' }] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', rec: 0, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'In Kranzbach kann man bald samstags ohne Fahrkarte Bus fahren.', a: 0, why: 'Der Stadtrat hat beschlossen, „dass alle Busse in der Stadt samstags kostenlos fahren“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 1, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Der Name des kleinen Elefanten steht schon fest.', a: 1, why: 'Der Name „ist aber noch offen“; Kinder sollen erst noch Namen vorschlagen.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 2, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Wegen der Hitze haben viele Schülerinnen und Schüler morgen früher frei.', a: 0, why: 'Der Unterricht endet morgen an vielen Schulen „schon nach der vierten Stunde“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 3, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Nach einer Studie lesen Jugendliche heute weniger Bücher als früher.', a: 1, why: 'Die Studie zeigt, dass Jugendliche heute „mehr Bücher als noch vor zehn Jahren“ lesen.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 4, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Am Wochenende wird es überall im Land sonnig und warm.', a: 1, why: 'Nur im Süden bleibt es sonnig; im Norden „regnet es immer wieder kräftig“.' },
        ] },
      ],
    },
    {
      id: 'h2', ref: 'Hörverstehen, Teil 2', title: 'Detailverstehen',
      about: 'Sie hören ein Interview aus dem Radio. Entscheiden Sie bei den Aufgaben, ob die Aussagen richtig oder falsch sind. Sie hören das Interview zweimal.',
      plays: 2,
      recs: [
        { lines: [
          { who: 'Moderator', s: 'Herzlich willkommen zu unserer Sendung „Menschen in der Region“. Heute ist Katrin Vogel bei mir im Studio. Frau Vogel, Sie haben vor zwei Jahren im alten Bahnhof von Wiesenau ein Café eröffnet. Wie kam es dazu?' },
          { who: 'Frau Vogel', s: 'Ja, also, ich habe vorher fünfzehn Jahre als Bankkauffrau in Frankfurt gearbeitet. Jeden Tag eine Stunde mit dem Zug hin und eine Stunde zurück. Und irgendwann habe ich gedacht: So will ich nicht bis zur Rente weitermachen.' },
          { who: 'Moderator', s: 'Und dann haben Sie einfach den Bahnhof gekauft?' },
          { who: 'Frau Vogel', s: 'Nein, nein, gekauft nicht. Das Gebäude gehört der Gemeinde. Der Bahnhof stand fast zehn Jahre leer. Die Züge halten zwar noch, aber Fahrkarten verkauft dort schon lange niemand mehr, die gibt es nur noch am Automaten. Die Gemeinde hat dann jemanden gesucht, der das Haus mietet und wieder Leben hineinbringt. Ich habe mich beworben, und ja, es hat geklappt.' },
          { who: 'Moderator', s: 'Hatten Sie denn Erfahrung in der Gastronomie?' },
          { who: 'Frau Vogel', s: 'Überhaupt keine. Ich habe immer gern gebacken, für Freunde und für die Familie, aber das ist natürlich etwas ganz anderes. Deshalb habe ich, bevor ich angefangen habe, ein halbes Jahr in einem Café in Mainz gearbeitet, um zu sehen, wie das alles funktioniert. Das war die beste Entscheidung.' },
          { who: 'Moderator', s: 'Was war denn am Anfang am schwierigsten?' },
          { who: 'Frau Vogel', s: 'Die Renovierung. Wir dachten, das dauert drei Monate. Am Ende waren es acht. Das Dach war nicht dicht, die Leitungen waren alt, es gab immer neue Probleme. Zum Glück haben viele Leute aus dem Dorf mitgeholfen, am Wochenende und ohne Geld. Ohne die Nachbarn hätte ich das nie geschafft.' },
          { who: 'Moderator', s: 'Und wer sind heute Ihre Gäste?' },
          { who: 'Frau Vogel', s: 'Ganz unterschiedlich. Morgens kommen Pendler, die schnell noch einen Kaffee trinken, bevor der Zug kommt. Nachmittags sind es oft ältere Leute aus dem Dorf. Und am Wochenende kommen viele Radfahrer, weil der Radweg am Fluss direkt am Bahnhof vorbeigeht.' },
          { who: 'Moderator', s: 'Was gibt es bei Ihnen zu essen?' },
          { who: 'Frau Vogel', s: 'Kuchen backe ich jeden Tag selbst, mindestens vier Sorten. Und mittags gibt es eine Suppe, jeden Tag eine andere. Mehr nicht, ich habe ja nur eine ganz kleine Küche. Das Obst für die Kuchen kaufe ich bei den Bauern hier in der Gegend.' },
          { who: 'Moderator', s: 'Machen Sie das alles allein?' },
          { who: 'Frau Vogel', s: 'Unter der Woche habe ich eine Mitarbeiterin, und am Wochenende helfen zwei Schülerinnen. Montags ist das Café geschlossen. Aber dann mache ich die Buchhaltung und fahre zum Großmarkt. Ein richtiger freier Tag ist das also nicht.' },
          { who: 'Moderator', s: 'Tut es Ihnen manchmal leid, dass Sie Ihre sichere Stelle bei der Bank aufgegeben haben?' },
          { who: 'Frau Vogel', s: 'Ehrlich gesagt: Ich verdiene heute weniger als früher, sogar deutlich weniger. Aber ich bin viel zufriedener. Ich kenne inzwischen fast alle Leute im Dorf, und abends bin ich zwar müde, aber glücklich.' },
          { who: 'Moderator', s: 'Haben Sie schon neue Pläne?' },
          { who: 'Frau Vogel', s: 'Ja, im Herbst möchte ich im ersten Stock einen Raum für Kurse einrichten. Eine Frau aus dem Nachbardorf will dort Töpferkurse geben. Und vielleicht gibt es bald auch Lesungen.' },
          { who: 'Moderator', s: 'Frau Vogel, vielen Dank für das Gespräch und weiterhin viel Erfolg!' },
        ] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Frau Vogel ist früher jeden Tag mit dem Zug zur Arbeit gefahren.', a: 0, why: 'Sie sagt: „Jeden Tag eine Stunde mit dem Zug hin und eine Stunde zurück.“' },
          { q: 'Frau Vogel hat das Bahnhofsgebäude gekauft.', a: 1, why: '„Gekauft nicht. Das Gebäude gehört der Gemeinde“; sie mietet es.' },
          { q: 'Fahrkarten bekommt man am Bahnhof Wiesenau heute nur am Automaten.', a: 0, why: 'Fahrkarten „gibt es nur noch am Automaten“.' },
          { q: 'Vor der Eröffnung hat Frau Vogel in einem anderen Café gearbeitet.', a: 0, why: 'Sie hat „ein halbes Jahr in einem Café in Mainz gearbeitet“.' },
          { q: 'Die Renovierung war nach drei Monaten fertig.', a: 1, why: 'Geplant waren drei Monate, „am Ende waren es acht“.' },
          { q: 'Nachbarn haben bei der Renovierung ohne Bezahlung geholfen.', a: 0, why: 'Viele Leute aus dem Dorf haben „am Wochenende und ohne Geld“ mitgeholfen.' },
          { q: 'Am Wochenende kommen viele Radfahrer ins Café.', a: 0, why: 'Am Wochenende kommen viele Radfahrer, „weil der Radweg am Fluss direkt am Bahnhof vorbeigeht“.' },
          { q: 'Mittags können die Gäste zwischen mehreren warmen Gerichten wählen.', a: 1, why: 'Mittags gibt es nur „eine Suppe“, weil die Küche sehr klein ist.' },
          { q: 'Am Montag hat Frau Vogel frei und kann sich ausruhen.', a: 1, why: 'Montags macht sie die Buchhaltung und fährt zum Großmarkt, „ein richtiger freier Tag ist das also nicht“.' },
          { q: 'Frau Vogel verdient heute mehr Geld als bei der Bank.', a: 1, why: 'Sie sagt: „Ich verdiene heute weniger als früher, sogar deutlich weniger.“' },
        ] },
      ],
    },
    {
      id: 'h3', ref: 'Hörverstehen, Teil 3', title: 'Selektives Verstehen',
      about: 'Sie hören fünf kurze Texte. Entscheiden Sie bei den Aufgaben, ob die Aussagen richtig oder falsch sind. Sie hören jeden Text zweimal.',
      plays: 2,
      recs: [
        { lines: [{ who: 'Arzthelferin', s: 'Guten Tag, Sie sind verbunden mit der Praxis Dr. Haller. Unsere Praxis ist wegen Urlaub vom 4. bis zum 18. August geschlossen. Ab Montag, dem 21. August, sind wir wieder für Sie da. In dringenden Fällen wenden Sie sich bitte an die Praxis Dr. Simon in der Kirchgasse 7. Die Telefonnummer ist 4 8 2 3 1 0. Vielen Dank und auf Wiederhören.' }] },
        { lines: [{ who: 'Bahnhofssprecherin', s: 'Achtung an Gleis 3. Der Regionalexpress nach Kassel, planmäßige Abfahrt 14 Uhr 12, fährt heute ausnahmsweise von Gleis 5 ab. Bitte beachten Sie die Gleisänderung. Der Regionalexpress nach Kassel fährt heute von Gleis 5.' }] },
        { lines: [{ who: 'Jonas', s: 'Hallo Lena, hier ist Jonas. Du, ich habe gerade gesehen, dass der Film heute Abend erst um halb neun anfängt, nicht um acht. Ich finde, wir können uns trotzdem wie geplant um acht vor dem Kino treffen, dann trinken wir vorher noch was im Café nebenan. Die Karten habe ich schon. Bis später!' }] },
        { lines: [{ who: 'Verkäuferin', s: 'Liebe Kundinnen und Kunden, heute bekommen Sie in unserer Sportabteilung im dritten Stock zwanzig Prozent auf alle Laufschuhe und Sportjacken. Aber Achtung: Das Angebot gilt nur heute bis 14 Uhr. Wir freuen uns auf Ihren Besuch.' }] },
        { lines: [{ who: 'Herr Yilmaz', s: 'Guten Tag, Frau Novak, hier spricht Yilmaz von der Sprachschule. Ich wollte Ihnen sagen, dass der Deutschkurs am Mittwoch leider ausfallen muss, weil die Lehrerin krank ist. Wir holen die Stunde am Freitag nach, zur gleichen Zeit, also um 18 Uhr, aber in Raum 12 statt in Raum 4. Bis dann!' }] },
      ],
      blocks: [
        { t: 'ex', kind: 'pick', rec: 0, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Die Praxis Dr. Haller ist bis zum 18. August geschlossen.', a: 0, why: 'Die Praxis ist „vom 4. bis zum 18. August geschlossen“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 1, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Der Zug nach Kassel fährt heute von Gleis 3 ab.', a: 1, why: 'Der Zug fährt heute „ausnahmsweise von Gleis 5 ab“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 2, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Jonas möchte sich später mit Lena treffen als geplant.', a: 1, why: 'Jonas möchte sich „trotzdem wie geplant um acht“ treffen.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 3, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Das Angebot in der Sportabteilung gilt den ganzen Tag.', a: 1, why: 'Das Angebot gilt „nur heute bis 14 Uhr“.' },
        ] },
        { t: 'ex', kind: 'pick', rec: 4, h: 'Richtig oder falsch?', opts: ['Richtig', 'Falsch'], items: [
          { q: 'Der Deutschkurs findet diese Woche am Freitag statt.', a: 0, why: 'Herr Yilmaz sagt: „Wir holen die Stunde am Freitag nach“, um 18 Uhr in Raum 12.' },
        ] },
      ],
    },
  ],
};
