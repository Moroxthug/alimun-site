// Alimun test German B1, paper Sprachbausteine (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'sprache', title: 'Sprachbausteine: Grammatik und Wortschatz', minutes: 30,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Ein Brief an die Hausverwaltung',
      about: 'Lesen Sie den Brief. Welches Wort passt in die Lücke?',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Wählen Sie das richtige Wort.',
          text: 'Sehr geehrte Frau Hoffmann,\n\nich wohne seit März in der Wohnung im dritten Stock, {} Fenster zum Hof gehen. Leider muss ich mich heute {} ein Problem beschweren. Seit zwei Wochen funktioniert die Heizung im Wohnzimmer nicht, {} ich den Hausmeister schon zweimal angerufen habe. Er hat versprochen, dass die Heizung bald {} wird, aber bis jetzt ist nichts passiert. Das ist besonders unangenehm, {} es draußen schon sehr kalt ist.\n\nAußerdem möchte ich Sie {} den Müllraum informieren: Dort stehen seit Tagen alte Möbel, {} niemand abholt. {} ich mit den Nachbarn gesprochen habe, weiß ich, dass sie sich auch darüber ärgern.\n\n{} Sie bitte so bald wie möglich einen Handwerker schicken? Ich bin von Montag bis Freitag ab 16 Uhr zu Hause. Ich würde mich {} eine schnelle Antwort freuen.\n\nMit freundlichen Grüßen\nElif Demir',
          items: [
            { o: ['deren', 'dessen', 'die', 'denen'], why: '*Die Wohnung* ist feminin: Ihre Fenster sind *deren Fenster*.' },
            { o: ['über', 'auf', 'für', 'an'], why: 'Man sagt *sich beschweren über* + Akkusativ.' },
            { o: ['obwohl', 'weil', 'trotzdem', 'deshalb'], why: 'Ein Gegensatz mit dem Verb am Ende: *obwohl ich … angerufen habe*.' },
            { o: ['repariert', 'reparieren', 'reparierte', 'zu reparieren'], why: 'Passiv Präsens: *werden* + Partizip II, *dass die Heizung repariert wird*.' },
            { o: ['da', 'denn', 'deshalb', 'trotzdem'], why: 'Das Verb *ist* steht am Ende, also braucht man eine Konjunktion wie *da*; nach *denn* steht das Verb an Position 2.' },
            { o: ['über', 'auf', 'an', 'mit'], why: 'Man sagt *jemanden über etwas informieren*.' },
            { o: ['die', 'denen', 'der', 'deren'], why: '*Die Möbel* sind Plural und Objekt von *abholen*: Akkusativ Plural *die*.' },
            { o: ['Weil', 'Deshalb', 'Denn', 'Trotzdem'], why: 'Das Verb *habe* steht am Ende des Nebensatzes; nur *weil* leitet einen Nebensatz ein.' },
            { o: ['Könnten', 'Hätten', 'Wären', 'Müssten'], why: 'Eine höfliche Bitte macht man mit dem Konjunktiv II: *Könnten Sie bitte …?*' },
            { o: ['über', 'an', 'mit', 'von'], why: 'Im Brief sagt man: *Ich würde mich über eine schnelle Antwort freuen.*' },
          ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Eine Einladung',
      about: 'Lesen Sie den Text. Welches Wort aus dem Kasten passt in die Lücke? Zwei Wörter passen nicht.',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Wählen Sie das passende Wort.',
          text: 'Liebe Nachbarinnen und Nachbarn,\n\nam Samstag, den 6. September, {} unser Straßenfest statt. Wie jedes Jahr wird die Lindenstraße für Autos {}. Ab 14 Uhr gibt es Musik, Spiele für Kinder und einen kleinen {}, auf dem Sie alte Sachen verkaufen können. Wer einen Stand möchte, muss sich bis zum 31. August {}.\n\nFür das Buffet {} wir Sie, einen Kuchen oder einen Salat mitzubringen. Die Getränke werden vom Hausverein {}. Am Abend spielt eine Band aus unserem Viertel. Bei schlechtem Wetter {} wir in der Turnhalle der Grundschule.\n\nWir freuen uns auf viele {} und einen schönen Nachmittag!\n\nIhr Hausverein Lindenstraße',
          opts: ['findet', 'gesperrt', 'Flohmarkt', 'anmelden', 'bitten', 'organisiert', 'feiern', 'Gäste', 'geöffnet', 'Termin'],
          items: [
            { a: 0, why: 'Man sagt: *Ein Fest findet statt.*' },
            { a: 1, why: 'Beim Straßenfest dürfen keine Autos fahren: Die Straße wird *gesperrt*.' },
            { a: 2, why: 'Auf einem *Flohmarkt* verkauft man alte Sachen.' },
            { a: 3, why: 'Man sagt: *sich für etwas anmelden*.' },
            { a: 4, why: 'Man sagt: *Wir bitten Sie, … mitzubringen.*' },
            { a: 5, why: 'Passiv: Die Getränke *werden vom Hausverein organisiert*.' },
            { a: 6, why: 'Bei schlechtem Wetter *feiern* wir drinnen.' },
            { a: 7, why: 'Man freut sich auf viele *Gäste*.' },
          ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Sätze',
      about: 'Bilden Sie das passende Wort, formen Sie die Sätze um und ergänzen Sie die Präpositionen.',
      blocks: [
        { t: 'ex', kind: 'wordform', h: 'Bilden Sie aus dem Wort ein passendes Wort für die Lücke.', items: [
          { q: 'Die ___ für den Kurs habe ich schon online gemacht.', base: 'anmelden', a: ['Anmeldung'], why: 'Aus dem Verb wird mit *-ung* ein Nomen: *anmelden → die Anmeldung*.' },
          { q: 'Morgen wird es endlich wieder warm und ___.', base: 'Sonne', a: ['sonnig'], why: 'Aus dem Nomen wird mit *-ig* ein Adjektiv: *die Sonne → sonnig*.' },
          { q: 'Der Vortrag war so ___, dass ich fast eingeschlafen bin.', base: 'Langeweile', a: ['langweilig'], why: 'Das Adjektiv zu *die Langeweile* ist *langweilig*.' },
          { q: 'Für diese Stelle braucht man viel ___ im Verkauf.', base: 'erfahren', a: ['Erfahrung'], why: 'Aus dem Verb wird mit *-ung* ein Nomen: *erfahren → die Erfahrung*.' },
        ] },
        { t: 'ex', kind: 'transform', h: 'Schreiben Sie den Satz neu. Benutzen Sie das Wort in Klammern.', items: [
          { q: 'Ich bin müde. Trotzdem gehe ich ins Fitnessstudio.', cue: 'obwohl', a: ['Obwohl ich müde bin, gehe ich ins Fitnessstudio.', 'Ich gehe ins Fitnessstudio, obwohl ich müde bin.', 'Ich gehe ins Fitnessstudio, obwohl ich müde bin'], why: 'Nach *obwohl* steht das Verb am Ende: *obwohl ich müde bin*.' },
          { q: 'Man repariert das Fahrrad morgen.', cue: 'wird', a: ['Das Fahrrad wird morgen repariert.', 'Morgen wird das Fahrrad repariert.'], why: 'Passiv Präsens: *wird* + Partizip II am Ende.' },
          { q: 'Wann fährt der nächste Bus? Können Sie mir das sagen?', cue: 'Können Sie mir sagen', a: ['Können Sie mir sagen, wann der nächste Bus fährt?'], why: 'In der indirekten Frage steht das Verb am Ende: *wann der nächste Bus fährt*.' },
          { q: 'Ich mache das Licht aus. Ich will Energie sparen.', cue: 'um', a: ['Ich mache das Licht aus, um Energie zu sparen.', 'Um Energie zu sparen, mache ich das Licht aus.'], why: 'Ein Ziel mit demselben Subjekt: *um … zu* + Infinitiv.' },
        ] },
        { t: 'ex', kind: 'bank', h: 'Welches Wort passt? Zwei Wörter bleiben übrig.', extra: ['seit', 'damit'], items: [
          { q: 'Heute fahren ___ des Streiks keine Züge.', a: 'wegen', why: '*Wegen* + Genitiv nennt den Grund.' },
          { q: 'Wir sind ___ des Regens spazieren gegangen.', a: 'trotz', why: '*Trotz* + Genitiv: Es regnet, aber wir gehen spazieren.' },
          { q: 'Sie hat ___ der Fahrt ein Buch gelesen.', a: 'während', why: '*Während* + Genitiv: zur gleichen Zeit wie die Fahrt.' },
          { q: 'Ich nehme heute das Fahrrad ___ des Autos.', a: 'statt', why: '*Statt* + Genitiv: das Fahrrad und nicht das Auto.' },
        ] },
      ] },
  ],
};
