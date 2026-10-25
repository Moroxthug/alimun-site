// Alimun test German A2, paper Sprachbausteine (docs/TESTS.md). Draft for native-teacher review.
export const PAPER = {
  id: 'sprache', title: 'Sprachbausteine: Grammatik und Wortschatz', minutes: 25,
  parts: [
    { id: 'p1', ref: 'Teil 1', title: 'Eine Postkarte',
      about: 'Lesen Sie den Text. Welches Wort passt in die Lücke?',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Wählen Sie das richtige Wort.',
          text: 'Hallo Ben,\n\nseit Montag bin ich mit {} Freundin Clara an der Ostsee. Wir {} am Sonntag mit dem Zug hierher gefahren. Die Fahrt war lang, aber sehr {}. Unser Hotel liegt direkt {} Meer, und von unserem Zimmer sehen wir den Strand.\n\nDas Wetter ist {} als letzte Woche zu Hause: Es ist warm, und die Sonne scheint. Gestern {} wir eine Radtour gemacht. Morgen wollen wir {} Stralsund fahren.\n\nLeider {} ich am Freitag schon wieder arbeiten, {} mein Urlaub nur eine Woche lang ist. Aber ich bringe {} ein kleines Geschenk mit!\n\nBis bald\nElena',
          items: [
            { o: ['meiner', 'meine', 'meinen', 'mein'], why: '*Mit* braucht den Dativ: *die Freundin* → *mit meiner Freundin*.' },
            { o: ['sind', 'haben', 'werden', 'waren'], why: '*Fahren* bildet das Perfekt mit *sein*: *wir sind gefahren*.' },
            { o: ['schön', 'schöne', 'schönes', 'schönen'], why: 'Nach *war* steht das Adjektiv ohne Endung: *Die Fahrt war schön.*' },
            { o: ['am', 'im', 'nach', 'zum'], why: 'Am Wasser sagt man *am*: *direkt am Meer*.' },
            { o: ['besser', 'gut', 'am besten', 'guter'], why: 'Mit *als* vergleicht man: *gut – besser als*.' },
            { o: ['haben', 'sind', 'hatten', 'werden'], why: '*Machen* bildet das Perfekt mit *haben*: *wir haben gemacht*.' },
            { o: ['nach', 'in', 'zu', 'an'], why: 'Zu Städten ohne Artikel fährt man *nach*: *nach Stralsund*.' },
            { o: ['muss', 'musst', 'müssen', 'müsst'], why: 'Zu *ich* gehört *muss*.' },
            { o: ['weil', 'denn', 'deshalb', 'aber'], why: 'Das Verb *ist* steht am Ende, also passt *weil*.' },
            { o: ['dir', 'dich', 'du', 'dein'], why: '*Mitbringen* + wem? Dativ: *Ich bringe dir etwas mit.*' },
          ] },
      ] },
    { id: 'p2', ref: 'Teil 2', title: 'Wörter',
      about: 'Welches Wort passt? Zwei Wörter passen nicht. Dann sortieren Sie die Nomen: der, die oder das?',
      blocks: [
        { t: 'ex', kind: 'cloze', h: 'Eine Nachricht an die Arztpraxis. Wählen Sie das passende Wort.',
          text: 'Guten Tag, hier ist Selin Arslan. Ich möchte gern einen {} bei Dr. Weber. Ich habe seit drei Tagen starke {} im Hals und auch {}: 38,5 Grad. Ich nehme schon {}, aber es geht mir nicht besser. Ich kann nicht zur Arbeit gehen. Brauche ich eine {} für meinen Chef? Bitte {} Sie mich zurück. Meine Nummer ist 0176 55 43 21. Vielen Dank!',
          opts: ['Termin', 'Schmerzen', 'Fieber', 'Tabletten', 'Krankmeldung', 'rufen', 'Rezept', 'Apotheke'],
          items: [
            { a: 0, why: 'Beim Arzt möchte man einen *Termin*.' },
            { a: 1, why: 'Man hat *Schmerzen* im Hals.' },
            { a: 2, why: '38,5 Grad ist *Fieber*.' },
            { a: 3, why: 'Gegen Schmerzen nimmt man *Tabletten*.' },
            { a: 4, why: 'Für den Chef braucht man eine *Krankmeldung*.' },
            { a: 5, why: 'Man sagt: *Bitte rufen Sie mich zurück.*' },
          ] },
        { t: 'ex', kind: 'sort', h: 'Der, die oder das?', groups: ['der', 'die', 'das'], items: [
          { s: 'Kühlschrank', g: 0, why: 'Das letzte Wort bestimmt den Artikel: *der Schrank* → *der Kühlschrank*.' },
          { s: 'Lampe', g: 1, why: 'Viele Nomen auf *-e* sind feminin: *die Lampe*.' },
          { s: 'Sofa', g: 2, why: 'Man sagt *das Sofa*.' },
          { s: 'Teppich', g: 0, why: 'Man sagt *der Teppich*.' },
          { s: 'Wohnung', g: 1, why: 'Nomen auf *-ung* sind immer feminin: *die Wohnung*.' },
          { s: 'Badezimmer', g: 2, why: 'Das letzte Wort bestimmt den Artikel: *das Zimmer* → *das Badezimmer*.' },
        ] },
      ] },
    { id: 'p3', ref: 'Teil 3', title: 'Sätze',
      about: 'Wählen Sie die richtige Form oder schreiben Sie das fehlende Wort.',
      blocks: [
        { t: 'ex', kind: 'select', h: 'Wählen Sie die richtige Form.', items: [
          { q: 'Ich stelle die Vase auf ___ Tisch.', o: ['den', 'dem', 'der'], why: '*Stellen* – wohin? Akkusativ: *auf den Tisch*.' },
          { q: 'Jetzt steht die Vase auf ___ Tisch.', o: ['dem', 'den', 'der'], why: '*Stehen* – wo? Dativ: *auf dem Tisch*.' },
          { q: 'Ich trinke gern Tee, aber Kaffee trinke ich ___.', o: ['lieber', 'gerner', 'besser'], why: 'Die Steigerung von *gern* ist *lieber*.' },
          { q: 'Ich ___ dich morgen um acht Uhr ab.', o: ['hole', 'abhole', 'holen'], why: '*Abholen* ist trennbar: *Ich hole dich ab.*' },
        ] },
        { t: 'ex', kind: 'gap', h: 'Schreiben Sie das fehlende Wort.', items: [
          { q: 'Gestern habe ich meine Oma ___. (besuchen)', a: ['besucht'], why: 'Verben auf *be-* haben kein *ge-*: *besucht*.' },
          { q: 'Am Abend sind wir ins Kino ___. (gehen)', a: ['gegangen'], why: 'Das Partizip von *gehen* ist unregelmäßig: *gegangen*.' },
          { q: 'Ich gehe heute nicht zur Arbeit, ___ ich krank bin.', a: ['weil', 'da'], why: 'Das Verb *bin* steht am Ende: *weil* gibt den Grund.' },
          { q: 'Mir tut der Kopf ___.', a: ['weh'], why: 'Man sagt: *Mir tut der Kopf weh.*' },
        ] },
      ] },
  ],
};
