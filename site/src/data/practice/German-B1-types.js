// Practice set: one exercise of every kind, German B1 (docs/BOOKS.md "Practice sets"). Draft for native-teacher review.
// Instructions and every `why` are explanations (translated in i18n/<set>.<lang>.json); everything else is in German.
export const SET = {
  id: 'German-B1-types', language: 'German', level: 'B1', review: 'draft',
  title: 'Every kind of exercise',
  about: 'One exercise of each kind, with B1 grammar and words.',
  blocks: [
    { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
      { q: 'Ich warte schon seit einer Stunde ___ dich.', o: ['auf', 'für', 'an'], why: 'We say *warten auf* + accusative.' },
      { q: 'Er ist gestern nach Hamburg ___.', o: ['gefahren', 'gefahrt', 'fahren'], why: '*Fahren* is irregular: *ist gefahren*.' },
      { q: 'Wenn ich morgen Zeit ___, komme ich mit.', o: ['habe', 'hatte', 'haben'], why: 'A real condition about the future: present tense, *ich habe*.' },
    ] },
    { t: 'ex', kind: 'odd', h: 'Tap the odd one out.', items: [
      { o: ['die Lampe', 'der Tisch', 'der Stuhl', 'der Schrank'], why: '*Lampe* is feminine; the others are masculine.' },
      { o: ['machte', 'ging', 'kam', 'sah'], why: '*Machte* is regular; the others are irregular.' },
      { o: ['Juli', 'Montag', 'Freitag', 'Sonntag'], why: '*Juli* is a month; the others are days of the week.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Ein Jahr hat zwölf Monate.', a: 't', why: 'January to December: twelve months.' },
      { q: 'Für eine Zugfahrt von München nach Berlin braucht man einen Reisepass.', a: 'f', why: 'Both cities are in Germany: you need a ticket, not a passport.' },
      { q: 'Der Rhein fließt durch Deutschland.', a: 't', why: 'Yes, the Rhine flows through Germany.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right form for each gap.', items: [
      { q: 'Ich weiß nicht, ob er morgen ___.', o: ['kommt', 'kommen', 'komme'], why: 'After *ob* the verb goes to the end and agrees with *er*.' },
      { q: 'Das ist der Mann, ___ ich gestern gesehen habe.', o: ['den', 'der', 'dem'], why: 'The man is the object of *sehen*: masculine accusative, *den*.' },
      { q: 'Ich interessiere mich ___ Kunst.', o: ['für', 'auf', 'an'], why: 'We say *sich interessieren für*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ich freue mich ___ das Wochenende.', a: ['auf'], why: '*Sich freuen auf* is for something in the future.' },
      { q: 'Gestern ___ ich keine Zeit.', a: ['hatte'], why: 'Past simple (Präteritum) of *haben*: *ich hatte*.' },
      { q: 'Er hat heute ___ Hause gearbeitet.', a: ['zu'], why: '*Zu Hause* means at home.' },
    ] },
    { t: 'ex', kind: 'wordform', h: 'Use the word in capitals to make a word that fits the gap.', items: [
      { q: 'Die ___ in diesem Restaurant ist sehr freundlich.', base: 'bedienen', a: ['Bedienung'], why: '*-ung* makes a noun from a verb: *bedienen → die Bedienung*.' },
      { q: 'Er ist ein sehr ___ Mensch.', base: 'Freund', a: ['freundlicher'], why: '*-lich* makes an adjective; after *ein* it takes the ending *-er*.' },
      { q: 'Die Prüfung war ___, als ich dachte.', base: 'leicht', a: ['leichter'], why: 'Comparative: *leicht → leichter*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite the sentence so that it means the same. Use the words given.', items: [
      { q: 'Ich bleibe zu Hause, weil ich krank bin.', cue: 'deshalb', a: ['Ich bin krank, deshalb bleibe ich zu Hause', 'Ich bin krank. Deshalb bleibe ich zu Hause'], why: 'After *deshalb* the verb comes next: *deshalb bleibe ich*.' },
      { q: 'Man repariert das Auto.', cue: 'Das Auto', a: ['Das Auto wird repariert'], why: 'Passive: *werden* + past participle.' },
      { q: '„Kommst du morgen?“, fragt sie.', cue: 'Sie fragt, ob', a: ['Sie fragt, ob ich morgen komme'], why: 'An indirect question with *ob*: the verb goes to the end.' },
    ] },
    { t: 'ex', kind: 'conjugate', h: 'Write the past simple (Präteritum) of *sein*.', verb: 'sein', tense: 'past simple (Präteritum)', rows: [
      ['ich', 'war'], ['du', 'warst'], ['er, sie, es', 'war'], ['wir', 'waren'], ['ihr', 'wart'], ['sie, Sie', 'waren'],
    ] },
    { t: 'ex', kind: 'crossword', h: 'Solve the crossword: places in the city.', words: [
      { a: 'Apotheke', clue: 'Hier kauft man Medikamente.' },
      { a: 'Bahnhof', clue: 'Hier fahren die Züge ab.' },
      { a: 'Rathaus', clue: 'Hier arbeitet die Bürgermeisterin.' },
      { a: 'Museum', clue: 'Hier sieht man Bilder und alte Dinge.' },
      { a: 'Bäckerei', clue: 'Hier gibt es frisches Brot.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Ich habe gestern meine Großmutter besucht.', why: 'Perfekt: *habe* in second place, the participle *besucht* at the end.' },
      { a: 'Weißt du, wann der Zug ankommt?', why: 'After *wann* in an indirect question, the verb goes to the end.' },
    ] },
    { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
      { a: 'Morgen fahre ich mit dem Zug nach Berlin.', extra: ['den', 'fahren'], why: 'The verb is in second place after *Morgen*; *mit* takes the dative: *mit dem Zug*.' },
      { a: 'Wir sind am Wochenende ins Kino gegangen.', extra: ['haben', 'gehen'], why: '*Gehen* forms the Perfekt with *sein*: *sind gegangen*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the past participles.', items: [
      { s: 'Wir haben lange [gewartet], aber der Bus ist nicht [gekommen].', why: '*Gewartet* is regular; *gekommen* is irregular.' },
      { s: 'Hast du schon [gegessen]? Ich habe eine Suppe [gekocht].', why: '*Gegessen* is irregular; *gekocht* is regular.' },
    ] },
    { t: 'ex', kind: 'colloc', h: 'Which words go with the verb? Tap all that fit.', items: [
      { key: 'machen', o: ['eine Pause', 'Fotos', 'Hausaufgaben', 'einen Spaziergang', 'eine Frage'], a: [0, 1, 2, 3], why: 'We *machen* a break, photos, homework and a walk, but we *stellen* a question: *eine Frage stellen*.' },
      { key: 'treffen', o: ['eine Entscheidung', 'Freunde', 'eine Pause', 'eine Verabredung'], a: [0, 1, 3], why: '*Eine Entscheidung treffen*, *Freunde treffen* and *eine Verabredung treffen*, but *eine Pause machen*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'Gestern [bin] ich einen Kuchen gebacken.', a: ['habe'], why: '*Backen* forms the Perfekt with *haben*.' },
      { s: 'Ich fahre mit [der] Bus zur Arbeit.', a: ['dem'], why: '*Mit* takes the dative: *mit dem Bus*.' },
      { s: 'Ich glaube, dass er heute [kommt nicht].', a: ['nicht kommt'], why: 'After *dass* the verb goes to the end: *dass er heute nicht kommt*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the separable verbs with their meanings.', pairs: [
      ['anrufen', 'telefonieren'], ['anfangen', 'beginnen'], ['aufhören', 'nicht weitermachen'], ['einkaufen', 'im Geschäft Sachen kaufen'],
    ] },
    { t: 'ex', kind: 'bank', h: 'Complete the sentences with words from the box.', extra: ['auf', 'mit'], items: [
      { q: 'Ich denke oft ___ meine Kindheit.', a: 'an', why: 'We say *denken an* + accusative.' },
      { q: 'Sie hat Angst ___ Hunden.', a: 'vor', why: 'We say *Angst haben vor* + dative.' },
      { q: 'Wir sprechen morgen ___ das Problem.', a: 'über', why: 'We say *sprechen über* + accusative.' },
      { q: 'Er bedankt sich ___ das Geschenk.', a: 'für', why: 'We say *sich bedanken für*.' },
    ] },
    { t: 'ex', kind: 'sort', h: 'Sort the nouns by their article.', groups: ['der', 'die', 'das'], items: [
      { s: 'Tisch', g: 0, why: '*der Tisch*' }, { s: 'Lampe', g: 1, why: '*die Lampe*' }, { s: 'Buch', g: 2, why: '*das Buch*' },
      { s: 'Stuhl', g: 0, why: '*der Stuhl*' }, { s: 'Tür', g: 1, why: '*die Tür*' }, { s: 'Fenster', g: 2, why: '*das Fenster*' },
    ] },
    { t: 'ex', kind: 'memory', h: 'Find the pairs: each verb and its past participle.', pairs: [
      ['gehen', 'gegangen'], ['essen', 'gegessen'], ['schreiben', 'geschrieben'], ['nehmen', 'genommen'], ['trinken', 'getrunken'], ['fahren', 'gefahren'],
    ] },
    { t: 'ex', kind: 'search', h: 'Find six words for food in the grid.', words: ['Brot', 'Käse', 'Apfel', 'Reis', 'Zwiebel', 'Butter'] },
  ],
};
