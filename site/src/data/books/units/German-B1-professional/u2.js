// German B1 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Calls and video meetings',
  goal: 'Lead and take part in calls and video meetings.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'reading', 'vocabulary'], topics: ['phone-calls', 'video-meetings', 'separable-verbs', 'minutes'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'On the phone',
      about: 'Answer a call, connect someone, ask them to repeat and end the call.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Work calls in German follow a pattern. When you answer, say the **company** and your **name**. When you call, say your name and your company first, then why you are calling.' },
          { t: 'table', caption: 'Phone phrases', explain: ['head', 'col0'], quiz: true, head: ['Situation', 'Phrase'], rows: [
            ['You answer the phone', 'Firma Lindner, Sie sprechen mit Aylin Demir. Was kann ich für Sie tun?'],
            ['You say who you are', 'Guten Tag, hier spricht Paul Mertens von der Firma Grafix.'],
            ['You ask for someone', 'Könnte ich bitte mit Frau Sommer sprechen?'],
            ['You connect the caller', 'Einen Moment bitte, ich verbinde Sie.'],
            ['The person is not there', 'Frau Sommer ist gerade in einer Besprechung.'],
            ['You offer to take a message', 'Kann ich ihr etwas ausrichten?'],
            ['You end the call', 'Vielen Dank für Ihren Anruf. Auf Wiederhören!'],
          ] },
        ],
        [
          { t: 'dialogue', title: 'Ein Anruf bei der Firma Lindner', lines: [
            { who: 'Aylin', s: 'Firma Lindner, Sie sprechen mit Aylin Demir. Was kann ich für Sie tun?' },
            { who: 'Paul', s: 'Guten Tag, hier spricht Paul Mertens von der Firma Grafix. Könnte ich bitte mit Frau Sommer sprechen?' },
            { who: 'Aylin', s: 'Einen Moment bitte, ich verbinde Sie.' },
            { who: 'Aylin', s: 'Herr Mertens? Frau Sommer ist leider gerade in einer Besprechung. Kann ich ihr etwas ausrichten?' },
            { who: 'Paul', s: 'Ja, gern. Könnte sie mich heute Nachmittag zurückrufen? Es geht um das Angebot.' },
            { who: 'Aylin', s: 'Natürlich. Könnten Sie Ihren Namen bitte buchstabieren?' },
            { who: 'Paul', s: 'M wie Martha, E wie Emil, R wie Richard, T wie Theodor, E wie Emil, N wie Nordpol, S wie Samuel.' },
            { who: 'Aylin', s: 'Danke. Und unter welcher Nummer erreicht Frau Sommer Sie?' },
            { who: 'Paul', s: 'Unter 0511 48 29 37.' },
            { who: 'Aylin', s: 'Gut, ich gebe es weiter. Vielen Dank für Ihren Anruf. Auf Wiederhören!' },
          ] },
          { t: 'tip', art: 'owl', md: 'On the phone you say *Auf Wiederhören*, not *Auf Wiedersehen*: you hear the person, you do not see them. To spell a name, many people use first names: *A wie Anton, B wie Berta*. A newer official list uses German cities: *A wie Aachen, B wie Berlin*.' },
        ],
        [
          { t: 'text', md: 'Did you not understand something? That is normal on the phone. Say so politely, and check important facts like names, numbers and dates.' },
          { t: 'examples', items: [
            { s: 'Entschuldigung, **könnten Sie das bitte wiederholen**?', n: 'The standard way to ask someone to say it again.' },
            { s: 'Könnten Sie bitte **etwas langsamer** sprechen?', n: '*etwas langsamer*: a little more slowly.' },
            { s: 'Die **Verbindung** ist leider sehr schlecht.', n: 'For a bad line. You can add: *Ich rufe Sie gleich noch einmal an.*' },
            { s: '**Habe ich das richtig verstanden**: Der Termin ist am Freitag?', n: 'You repeat the fact to check it.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Paul möchte mit Frau Sommer sprechen.', a: 't', why: '*Könnte ich bitte mit Frau Sommer sprechen?*' },
            { q: 'Frau Sommer spricht am Ende mit Paul.', a: 'f', why: 'She is *in einer Besprechung*. Aylin takes a message.' },
            { q: 'Frau Sommer soll Paul zurückrufen.', a: 't', why: '*Könnte sie mich heute Nachmittag zurückrufen?*' },
            { q: 'Paul ruft wegen einer Rechnung an.', a: 'f', why: '*Es geht um das Angebot*: he calls about the offer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you say? Match the situation and the phrase.', pairs: [
            ['Sie haben den Namen nicht verstanden.', 'Könnten Sie das bitte buchstabieren?'],
            ['Die Person spricht zu schnell.', 'Könnten Sie bitte etwas langsamer sprechen?'],
            ['Die Kollegin ist nicht da.', 'Kann ich ihr etwas ausrichten?'],
            ['Sie möchten das Gespräch beenden.', 'Vielen Dank für Ihren Anruf. Auf Wiederhören!'],
            ['Sie geben den Anruf weiter.', 'Einen Moment bitte, ich verbinde Sie.'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the phone phrases. Many of these verbs are separable.', items: [
            { q: 'Frau Sommer ruft Sie heute Nachmittag ___. (zurückrufen)', a: ['zurück'], why: '*zurückrufen* is separable: *ruft … zurück*.' },
            { q: 'Gut, ich richte es Frau Sommer ___. (ausrichten)', a: ['aus'], why: '*ausrichten* is separable: *ich richte … aus*.' },
            { q: 'Einen Moment bitte, ich ___ Sie. (verbinden)', a: ['verbinde'], why: '*jemanden verbinden*: to put someone through.' },
            { q: 'Vielen Dank für Ihren Anruf. Auf ___!', a: ['Wiederhören'], why: 'On the phone: *Auf Wiederhören*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Video meetings',
      about: 'Deal with technical problems and take turns politely.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In video meetings, technology often causes small problems. These phrases help you say what is wrong, quickly and politely.' },
          { t: 'table', caption: 'Technical problems in a video meeting', explain: ['head', 'col0'], quiz: true, head: ['Problem or action', 'Phrase'], rows: [
            ['You cannot hear someone', 'Ich höre Sie leider nicht.'],
            ['Someone has the microphone off', 'Sie sind noch stummgeschaltet.'],
            ['The picture does not move', 'Ihr Bild ist eingefroren.'],
            ['The connection is bad', 'Meine Verbindung ist instabil. Ich wähle mich neu ein.'],
            ['You show your screen', 'Ich teile kurz meinen Bildschirm. Können alle die Folie sehen?'],
            ['You turn off the camera', 'Ich mache meine Kamera kurz aus.'],
          ] },
        ],
        [
          { t: 'text', md: 'In a video meeting it is hard to see when someone wants to speak. Ask before you speak, interrupt only politely, and invite quiet people to say something.' },
          { t: 'examples', items: [
            { s: '**Darf ich kurz etwas dazu sagen?**', n: 'You ask to speak.' },
            { s: '**Entschuldigung, dass ich unterbreche**, aber wir haben nur noch zehn Minuten.', n: 'A polite interruption. In the *dass* clause, the verb *unterbreche* goes to the end.' },
            { s: '**Lassen Sie mich bitte kurz ausreden.**', n: 'You want to finish what you are saying.' },
            { s: '**Was meinen Sie dazu**, Frau Ito?', n: 'You invite someone to speak.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the polite phrase for interrupting or asking to speak.', items: [
            { s: 'Herr Kaya, [Entschuldigung], [dass] [ich] [Sie] [unterbreche], aber die Zeit ist fast um.', why: '*Entschuldigung, dass ich Sie unterbreche*: a polite interruption.' },
            { s: '[Darf] [ich] [kurz] [etwas] [dazu] [sagen]? Der Plan ist gut, aber zu teuer.', why: '*Darf ich kurz etwas dazu sagen?* asks to speak before you give your opinion.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Die Teambesprechung am Montag', lines: [
            { who: 'Carla', s: 'Guten Morgen zusammen! Können mich alle hören?' },
            { who: 'Felix', s: 'Ja, alles klar. Aber Jonas, du bist noch stummgeschaltet.' },
            { who: 'Jonas', s: 'Oh, Entschuldigung. Ist es jetzt besser?' },
            { who: 'Carla', s: 'Ja, perfekt. Ich teile kurz meinen Bildschirm. Seht ihr die Folie?' },
            { who: 'Amira', s: 'Ja. Carla, darf ich kurz etwas zum Zeitplan sagen?' },
            { who: 'Carla', s: 'Gern, Amira.' },
            { who: 'Amira', s: 'Ich glaube, der März ist zu früh für den Test der Website.' },
            { who: 'Felix', s: 'Entschuldigung, dass ich unterbreche, aber dein Bild ist eingefroren, Amira.' },
            { who: 'Amira', s: 'Meine Verbindung ist schlecht. Ich mache die Kamera aus.' },
            { who: 'Carla', s: 'Gute Idee. Jonas, was meinst du zum Zeitplan?' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the meeting. True or false?', items: [
            { q: 'Am Anfang kann man Jonas nicht hören.', a: 't', why: '*Du bist noch stummgeschaltet*: his microphone is off.' },
            { q: 'Felix teilt seinen Bildschirm.', a: 'f', why: 'Carla says *Ich teile kurz meinen Bildschirm.*' },
            { q: 'Amira findet den Termin im März zu früh.', a: 't', why: '*der März ist zu früh für den Test*.' },
            { q: 'Amira verlässt die Besprechung.', a: 'f', why: 'She only turns off her camera: *Ich mache die Kamera aus.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say in the video meeting?', items: [
            { q: 'Eine Kollegin spricht, aber Sie hören nichts:', o: ['Ich höre Sie leider nicht. Sie sind noch stummgeschaltet.', 'Sprechen Sie endlich!', 'Ihr Bild ist eingefroren.'], why: 'You cannot hear her, so her microphone is probably off.' },
            { q: 'Sie möchten etwas sagen:', o: ['Darf ich kurz etwas dazu sagen?', 'Jetzt rede ich.', 'Lassen Sie mich bitte ausreden.'], why: 'You ask first. *Lassen Sie mich ausreden* is for when you are already speaking.' },
            { q: 'Ein Kollege hat noch nichts gesagt:', o: ['Was meinen Sie dazu, Herr Lang?', 'Herr Lang, Sie sind still.', 'Ich teile kurz meinen Bildschirm.'], why: '*Was meinen Sie dazu?* invites him politely.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences for a video meeting.', items: [
            { a: 'Können alle meinen Bildschirm sehen?', why: 'A yes/no question: the modal verb *können* first, the infinitive *sehen* at the end.' },
            { a: 'Entschuldigung, dass ich Sie unterbreche.', why: 'In the *dass* clause, the verb *unterbreche* goes to the end.' },
            { a: 'Was meinen Sie dazu, Frau Ito?', why: 'A W-question: *Was*, then the verb *meinen*, then *Sie*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Minutes of a meeting',
      about: 'Read the minutes of a short team meeting and find who does what.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'After many meetings someone writes the **Protokoll** (minutes): who took part, what the team decided and who does what by when. Minutes often use the **passive** in the Präteritum: *Es wurde beschlossen, …* (It was decided …).' },
          { t: 'reading', title: 'Protokoll: Teambesprechung Marketing', md: '**Datum:** 12. Februar, 9:30 bis 10:15 Uhr, Videokonferenz\n**Teilnehmende:** Carla Neumann (Leitung), Amira Saleh, Felix Wagner, Jonas Brix\n**Entschuldigt:** Tomasz Nowak\n**Protokoll:** Felix Wagner\n\n**Messe im Mai:** Der Stand ist gebucht. Frau Saleh hat drei Angebote für das Design des Standes eingeholt. Das Team hat sich für das zweite Angebot entschieden, weil es am günstigsten ist. Herr Brix bestellt bis Ende Februar die Flyer.\n\n**Neue Website:** Der Test der neuen Website war für März geplant. Frau Saleh hält diesen Termin für zu früh, weil noch viele Texte fehlen. Es wurde beschlossen, den Test auf April zu verschieben. Herr Wagner informiert die IT-Abteilung.\n\n**Verschiedenes:** Ab März findet die Teambesprechung montags statt, nicht mehr mittwochs. Frau Neumann ist vom 3. bis 7. März im Urlaub. In dieser Zeit vertritt Herr Wagner sie.\n\n**Nächste Besprechung:** Montag, 10. März, 9:30 Uhr' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the minutes. True, false or not given?', items: [
            { q: 'Tomasz Nowak war nicht bei der Besprechung.', a: 't', why: '*Entschuldigt*: he could not come and said so before.' },
            { q: 'Carla Neumann hat das Protokoll geschrieben.', a: 'f', why: '*Protokoll: Felix Wagner*.' },
            { q: 'Das Team hat das günstigste Angebot gewählt.', a: 't', why: '*das zweite Angebot …, weil es am günstigsten ist*.' },
            { q: 'Der Test der Website findet im März statt.', a: 'f', why: '*Es wurde beschlossen, den Test auf April zu verschieben.*' },
            { q: 'Die IT-Abteilung ist mit dem neuen Termin zufrieden.', a: 'ng', why: 'Herr Wagner will inform the IT department; we do not know what they think.' },
            { q: 'Herr Wagner leitet die Besprechung am 10. März.', a: 'ng', why: 'The minutes do not say who leads the meeting on 10 March.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the minutes and their meaning.', pairs: [
            ['die Teilnehmenden', 'die Personen in der Besprechung'],
            ['entschuldigt', 'nicht da, aber hat vorher Bescheid gesagt'],
            ['etwas beschließen', 'zusammen etwas entscheiden'],
            ['einen Termin verschieben', 'einen Termin später machen'],
            ['jemanden vertreten', 'die Arbeit von jemandem für eine Zeit machen'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Who does what? Choose.', items: [
            { q: 'Die Flyer bestellt ___.', o: ['Herr Brix', 'Frau Saleh', 'Herr Wagner'], why: '*Herr Brix bestellt bis Ende Februar die Flyer.*' },
            { q: 'Die IT-Abteilung informiert ___.', o: ['Herr Wagner', 'Frau Neumann', 'Herr Nowak'], why: '*Herr Wagner informiert die IT-Abteilung.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the sentences in the style of minutes.', items: [
            { q: 'Es ___ beschlossen, den Test zu verschieben. (werden, Präteritum)', a: ['wurde'], why: 'Passive in the Präteritum: *wurde* + participle *beschlossen*.' },
            { q: 'Die Flyer ___ von Herrn Brix bestellt. (werden, Präsens)', a: ['werden'], why: '*die Flyer* is plural: *werden … bestellt*.' },
            { q: 'Ab März ___ die Besprechung montags statt. (stattfinden)', a: ['findet'], why: '*stattfinden* is separable: *findet … statt*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Am Ende eines Telefonats sagt man: ___', o: ['Auf Wiederhören!', 'Auf Wiedersehen!', 'Bis gleich!'], why: 'On the phone: *Auf Wiederhören*.' },
      { q: 'Die Kollegin ist nicht da. Sie fragen: Kann ich ihr etwas ___?', o: ['ausrichten', 'verbinden', 'buchstabieren'], why: '*jemandem etwas ausrichten*: to pass on a message.' },
      { q: 'Im Videocall hört man Sie nicht. Sie sind noch ___.', o: ['stummgeschaltet', 'eingefroren', 'verbunden'], why: '*stummgeschaltet*: the microphone is off.' },
      { q: '___, dass ich unterbreche, aber wir müssen bald Schluss machen.', o: ['Entschuldigung', 'Bitte schön', 'Gern'], why: '*Entschuldigung, dass ich unterbreche …*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Herr Weber ruft Sie morgen ___. (zurückrufen)', a: ['zurück'], why: 'Separable: *ruft … zurück*.' },
      { q: 'Könnten Sie das bitte ___? Ich habe es nicht verstanden. (wiederholen)', a: ['wiederholen'], why: '*Könnten Sie das bitte wiederholen?*' },
      { q: 'Es ___ beschlossen, die Besprechung zu verschieben. (werden, Präteritum)', a: ['wurde'], why: 'Passive in the Präteritum: *wurde beschlossen*.' },
      { q: 'Einen Moment bitte, ich ___ Sie mit Frau Ito. (verbinden)', a: ['verbinde'], why: '*jemanden mit jemandem verbinden*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the problem and the phrase.', pairs: [
      ['Das Bild bewegt sich nicht.', 'Ihr Bild ist eingefroren.'],
      ['Sie möchten eine Folie zeigen.', 'Ich teile kurz meinen Bildschirm.'],
      ['Sie möchten zu Ende sprechen.', 'Lassen Sie mich bitte kurz ausreden.'],
      ['Sie wollen einen Namen genau wissen.', 'Könnten Sie das bitte buchstabieren?'],
    ] },
  ],
};
