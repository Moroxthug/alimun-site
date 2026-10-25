// German A2 for work, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'On the phone',
  goal: 'Make and answer simple work calls and leave a message.',
  art: 'parrot',
  tags: { skills: ['speaking', 'listening', 'vocabulary', 'reading'], topics: ['telephone', 'spelling', 'numbers', 'messages', 'dativ-pronouns'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Answering the phone',
      about: 'Answer a work call, ask for someone, and spell names and numbers.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In a German company, people usually answer the phone with the name of the company and their own name: *Lorenz GmbH, Petra Albers, guten Tag.* The caller then says who they are and who they want to speak to.' },
          { t: 'dialogue', title: 'Ein Anruf', lines: [
            { who: 'Frau Albers', s: 'Lorenz GmbH, Petra Albers, guten Tag.' },
            { who: 'Herr Okafor', s: 'Guten Tag, hier ist Daniel Okafor von der Firma Weiss Bau. Kann ich bitte mit Herrn Schulz sprechen?' },
            { who: 'Frau Albers', s: 'Einen Moment, bitte. Ich verbinde Sie.' },
            { who: 'Frau Albers', s: 'Herr Okafor? Es tut mir leid, Herr Schulz ist gerade in einer Besprechung.' },
            { who: 'Herr Okafor', s: 'Ach so. Wann ist er wieder da?' },
            { who: 'Frau Albers', s: 'Ab 14 Uhr. Wie war Ihr Name noch mal, bitte? Können Sie ihn buchstabieren?' },
            { who: 'Herr Okafor', s: 'O wie Otto, K wie Kaufmann, A wie Anton, F wie Friedrich, O wie Otto, R wie Richard.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Useful phrases on the phone', explain: ['head', 'col0'], head: ['Situation', 'What you say'], rows: [
            ['You answer the phone.', 'Lorenz GmbH, Petra Albers, guten Tag.'],
            ['You say who you are.', 'Hier ist Daniel Okafor von der Firma Weiss Bau.'],
            ['You ask for someone.', 'Kann ich bitte mit Frau Roth sprechen?'],
            ['You connect the caller.', 'Einen Moment, ich verbinde Sie.'],
            ['The person is not there.', 'Frau Roth ist leider nicht im Haus.'],
            ['You did not understand.', 'Können Sie das bitte wiederholen?'],
          ] },
          { t: 'tip', art: 'owl', md: 'After *mit* and *für*, *Herr* becomes **Herrn**: *mit **Herrn** Schulz*, *eine Nachricht für **Herrn** Schulz*. *Frau* never changes: *mit Frau Roth*.' },
        ],
        [
          { t: 'text', md: 'On the phone you often spell names and say numbers. Many people use a word for each letter: *A wie Anton, B wie Berta*. A newer list uses German cities: *A wie Aachen, B wie Berlin*. People understand both.\n\nPhone numbers are often said one digit at a time or in pairs. Many people say **zwo** instead of *zwei*, so it does not sound like *drei*.' },
          { t: 'examples', items: [
            { s: 'Mein Name ist Okafor: **O** wie Otto, **K** wie Kaufmann …', n: 'You spell your name letter by letter.' },
            { s: 'Meine Nummer ist null vier **zwo** eins …', n: '*zwo* means *zwei*. It is easier to understand on the phone.' },
            { s: 'Meine **Durchwahl** ist 214.', n: 'A *Durchwahl* is your own short number inside the company.' },
            { s: 'Meine E-Mail-Adresse ist d.okafor@weiss-bau.de.', n: 'Say *@* like the English word *at*, *.* as *Punkt* and *-* as *Bindestrich*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want to speak to Herr Schulz.', o: ['Kann ich bitte mit Herrn Schulz sprechen?', 'Kann ich bitte mit Herr Schulz sprechen?', 'Ich verbinde Sie mit Herrn Schulz.'], why: 'After *mit*, *Herr* becomes *Herrn*. *Ich verbinde Sie* is what the other person says.' },
            { q: 'You did not understand the name.', o: ['Können Sie das bitte wiederholen?', 'Einen Moment, ich verbinde Sie.', 'Hier ist Petra Albers.'], why: '*wiederholen*: to say it again.' },
            { q: 'Your colleague is not in the office today.', o: ['Frau Roth ist leider nicht im Haus.', 'Frau Roth ist leider im Haus.', 'Frau Roth spricht gerade mit Ihnen.'], why: '*nicht im Haus*: not in the building.' },
            { q: 'You answer the phone at work.', o: ['Lorenz GmbH, Petra Albers, guten Tag.', 'Hallo, wer ist da?', 'Ja?'], why: 'The name of the company, your name and a greeting.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Herr, Herrn or Frau?', items: [
            { q: 'Ich möchte bitte mit ___ Weber sprechen. (Herr)', a: ['Herrn'], why: 'After *mit*: *Herrn*.' },
            { q: 'Ich habe eine Nachricht für ___ Brandt. (Frau)', a: ['Frau'], why: '*Frau* never changes.' },
            { q: '___ Kaya ist heute nicht im Büro. (Herr)', a: ['Herr'], why: 'Here *Herr Kaya* is the subject of the sentence, so there is no *-n*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Wie ist Ihr Name, bitte?', 'Daniel Okafor.'],
            ['Können Sie das buchstabieren?', 'O wie Otto, K wie Kaufmann …'],
            ['Wie ist Ihre Telefonnummer?', 'Null vier zwo eins, sechsunddreißig …'],
            ['Wann ist Herr Schulz wieder da?', 'Ab 14 Uhr.'],
            ['Von welcher Firma sind Sie?', 'Von Weiss Bau.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Können Sie das buchstabieren?', why: 'The modal verb comes first, the infinitive at the end.' },
            { a: 'Wie ist Ihre Telefonnummer?', why: 'Question word, verb, then the subject.' },
            { a: 'Wann ist Frau Roth wieder im Büro?', why: 'Question word, verb, subject, then *wieder im Büro*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Taking a message',
      about: 'Offer to take a message, pass it on and say goodbye on the phone.',
      art: 'mug',
      spreads: [
        [
          { t: 'dialogue', title: 'Eine Nachricht', lines: [
            { who: 'Frau Albers', s: 'Kann ich etwas ausrichten?' },
            { who: 'Herr Okafor', s: 'Ja, gern. Sagen Sie Herrn Schulz bitte, dass die Lieferung erst am Freitag kommt.' },
            { who: 'Frau Albers', s: 'Die Lieferung kommt am Freitag. Gut. Soll er Sie zurückrufen?' },
            { who: 'Herr Okafor', s: 'Ja, bitte. Meine Nummer ist 0421 36 85 92.' },
            { who: 'Frau Albers', s: 'Ich wiederhole: null vier zwo eins, sechsunddreißig, fünfundachtzig, zweiundneunzig.' },
            { who: 'Herr Okafor', s: 'Genau. Vielen Dank!' },
            { who: 'Frau Albers', s: 'Gern. Auf Wiederhören, Herr Okafor.' },
          ] },
          { t: 'text', md: '*Auf Wiederhören* is the polite goodbye on the phone. Repeat names and numbers to check them: *Ich wiederhole: …*' },
        ],
        [
          { t: 'text', md: 'To take a message, ask *Kann ich etwas ausrichten?* or *Möchten Sie eine Nachricht hinterlassen?* When you pass on a message, you often need the **Dativ**: *ihm* (to him), *ihr* (to her), *Ihnen* (to you, polite).' },
          { t: 'table', caption: 'Who gets the message?', quiz: true, head: ['Nominativ', 'Dativ'], rows: [
            ['ich', 'mir'],
            ['er', 'ihm'],
            ['sie', 'ihr'],
            ['Sie', 'Ihnen'],
          ] },
          { t: 'examples', items: [
            { s: 'Kann ich **ihm** etwas ausrichten?', n: 'Can I give him a message?' },
            { s: 'Sagen Sie **ihr** bitte, dass ich angerufen habe.', n: 'After *dass*, the verb goes to the end.' },
            { s: 'Er **soll** mich bitte **zurückrufen**.', n: 'With *sollen* you say what another person wants.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write ihm, ihr or Ihnen.', items: [
            { q: 'Herr Schulz ist nicht da. Kann ich ___ etwas ausrichten?', a: ['ihm'], why: '*Herr Schulz* is *er*. Dativ: *ihm*.' },
            { q: 'Frau Roth ist im Urlaub. Ich sage ___, dass Sie angerufen haben.', a: ['ihr'], why: '*Frau Roth* is *sie*. Dativ: *ihr*.' },
            { q: 'Herr Okafor, ich gebe ___ die Nummer von Frau Roth.', a: ['Ihnen'], why: 'You speak to Herr Okafor with *Sie*. Dativ: *Ihnen*, with a capital *I*.' },
            { q: 'Frau Albers hat angerufen. Kannst du ___ eine E-Mail schreiben?', a: ['ihr'], why: '*Frau Albers* is *sie*. Dativ: *ihr*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence or word.', items: [
            { q: '', o: ['Sagen Sie ihm bitte, dass die Lieferung am Freitag kommt.', 'Sagen Sie ihm bitte, dass die Lieferung kommt am Freitag.', 'Sagen Sie ihm bitte, dass kommt die Lieferung am Freitag.'], why: 'After *dass*, the verb *kommt* goes to the end.' },
            { q: 'Herr Schulz ___ Sie heute Nachmittag zurück.', o: ['ruft', 'zurückruft', 'rufen'], why: '*zurückrufen* is separable: *er ruft … zurück*.' },
            { q: 'Frau Roth ___ mich bitte zurückrufen.', o: ['soll', 'sollen', 'sollst'], why: '*sie soll*: the same form as *ich soll*.' },
          ] },
        ],
        [
          { t: 'text', md: 'When you take a message, you often write a short note, a **Telefonnotiz**. Write who called, when, the number and the message.' },
          { t: 'reading', title: 'Telefonnotiz', md: '**Für:** Herrn Schulz\n\n**Von:** Daniel Okafor, Firma Weiss Bau\n\n**Datum, Uhrzeit:** Mittwoch, 10.15 Uhr\n\n**Telefon:** 0421 36 85 92\n\n**Nachricht:** Die Lieferung kommt erst am Freitag.\n\n**Rückruf:** ja\n\n**Notiert von:** Petra Albers' },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Kann ich etwas ausrichten?', why: 'The modal verb *kann* first, the infinitive *ausrichten* at the end.' },
            { a: 'Soll er Sie zurückrufen?', why: 'A yes/no question: the verb *soll* comes first.' },
            { a: 'Möchten Sie eine Nachricht hinterlassen?', why: '*möchten* first, *hinterlassen* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: notes and a voicemail',
      about: 'Understand a message on your voicemail and phone notes from colleagues.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Herr Kowalczyk organises a conference for his company. When he comes back from lunch, he has a message on his voicemail, the **Mailbox**.' },
          { t: 'reading', title: 'Nachricht auf der Mailbox', md: 'Guten Tag, Herr Kowalczyk, hier ist Aylin Demir vom Hotel Seeblick in Lindau. Ich rufe wegen Ihrer Buchung für die Konferenz im März an.\n\nSie haben zwölf Einzelzimmer für drei Nächte bestellt, vom 14. bis zum 17. März. Leider haben wir in dieser Zeit nur noch zehn Einzelzimmer frei. Wir können Ihnen aber zwei Doppelzimmer zum gleichen Preis anbieten.\n\nBitte rufen Sie mich bis Freitag zurück, dann reserviere ich die Zimmer für Sie. Meine Nummer ist 08382 47 19 30. Ich bin montags bis freitags von 8 bis 16 Uhr erreichbar.\n\nVielen Dank und auf Wiederhören!' },
          { t: 'tip', art: 'owl', md: '*erreichbar* means that people can call or contact you: *Ich bin von 8 bis 16 Uhr erreichbar.*' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the message. True, false or not given?', items: [
            { q: 'Frau Demir arbeitet in einem Hotel.', a: 't', why: '*hier ist Aylin Demir vom Hotel Seeblick*.' },
            { q: 'Herr Kowalczyk hat zwölf Zimmer bestellt.', a: 't', why: '*Sie haben zwölf Einzelzimmer … bestellt.*' },
            { q: 'Die Doppelzimmer sind teurer als die Einzelzimmer.', a: 'f', why: 'They cost the same: *zum gleichen Preis*.' },
            { q: 'Man kann Frau Demir am Samstag anrufen.', a: 'f', why: 'She is there *montags bis freitags*.' },
            { q: 'Herr Kowalczyk war schon einmal im Hotel Seeblick.', a: 'ng', why: 'The message does not say this.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two parts of the verb that ask for a call back.', items: [
            { s: 'Bitte [rufen] Sie mich bis Freitag [zurück].', why: '*zurückrufen* is separable: *rufen* comes first, *zurück* goes to the end.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Zwei Telefonnotizen', md: '**Für:** Frau Mbeki\n**Von:** Herrn Lang, Autohaus Lang\n**Uhrzeit:** Montag, 9.40 Uhr\n**Nachricht:** Der Firmenwagen ist fertig. Sie können ihn ab 15 Uhr abholen.\n**Rückruf:** nicht nötig\n**Notiert von:** Kai\n\n**Für:** Herrn Kowalczyk\n**Von:** Frau Demir, Hotel Seeblick\n**Uhrzeit:** Dienstag, 11.20 Uhr\n**Nachricht:** Es geht um die Zimmer für die Konferenz. Bitte heute noch zurückrufen!\n**Rückruf:** ja, 08382 47 19 30\n**Notiert von:** Sara' },
          { t: 'ex', kind: 'choice', h: 'Read the notes and choose the right answer.', items: [
            { q: 'Was kann Frau Mbeki machen?', o: ['Sie kann den Firmenwagen ab 15 Uhr abholen.', 'Sie muss Herrn Lang zurückrufen.', 'Sie muss um 9.40 Uhr zum Autohaus fahren.'], why: '*Sie können ihn ab 15 Uhr abholen.* A call back is *nicht nötig*.' },
            { q: 'Wann soll Herr Kowalczyk zurückrufen?', o: ['heute', 'am Montag', 'nicht nötig'], why: '*Bitte heute noch zurückrufen!*' },
            { q: 'Wer hat die Nachricht für Herrn Kowalczyk notiert?', o: ['Sara', 'Kai', 'Frau Demir'], why: '*Notiert von: Sara*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What does it mean? Match.', pairs: [
            ['Rückruf: ja', 'Bitte rufen Sie zurück.'],
            ['Rückruf: nicht nötig', 'Sie müssen nicht zurückrufen.'],
            ['Notiert von: Kai', 'Kai hat die Nachricht geschrieben.'],
            ['erreichbar von 8 bis 16 Uhr', 'Man kann sie von 8 bis 16 Uhr anrufen.'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Your colleague is in a meeting. The caller wants to leave a message. You ask:', o: ['Kann ich etwas ausrichten?', 'Kann ich bitte mit ihm sprechen?', 'Wie ist Ihre Durchwahl?'], why: '*etwas ausrichten*: to pass on a message.' },
      { q: 'The polite goodbye on the phone is:', o: ['Auf Wiederhören!', 'Auf Wiedersehen!', 'Bis gleich!'], why: 'On the phone you do not see the person: *Auf Wiederhören*.' },
      { q: 'On the phone, people often say ___ instead of *zwei*.', o: ['zwo', 'zwanzig', 'zweite'], why: '*zwo* does not sound like *drei*.' },
      { q: 'Ich verbinde Sie mit ___ Schulz.', o: ['Herrn', 'Herr', 'Herren'], why: 'After *mit*: *Herrn*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Herr Lang ist nicht da. Ich sage ___, dass Sie angerufen haben.', a: ['ihm'], why: '*Herr Lang* is *er*. Dativ: *ihm*.' },
      { q: 'Frau Okoye ist im Urlaub. Kann ich ___ etwas ausrichten?', a: ['ihr'], why: '*Frau Okoye* is *sie*. Dativ: *ihr*.' },
      { q: 'Herr Weber ruft Sie morgen ___. (call back)', a: ['zurück'], why: '*zurückrufen*: *zurück* goes to the end.' },
      { q: 'Meine ___ ist 214. (your short number in the company)', a: ['Durchwahl'], why: 'The *Durchwahl* is your own number inside the company.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Möchten Sie eine Nachricht hinterlassen?', why: '*möchten* first, *hinterlassen* at the end.' },
      { a: 'Soll Herr Schulz Sie zurückrufen?', why: '*soll* first, then the subject *Herr Schulz*, *zurückrufen* at the end.' },
      { a: 'Können Sie Ihren Namen buchstabieren?', why: 'The modal verb first, *buchstabieren* at the end.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the two words of the polite goodbye on the phone.', items: [
      { s: 'Vielen Dank für Ihren Anruf, Frau Demir. [Auf] [Wiederhören]!', why: '*Auf Wiederhören*: you only hear the person on the phone.' },
    ] },
  ],
};
