// German B1 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Problems and solutions',
  goal: 'Talk about problems at work and agree on solutions.',
  art: 'cactus',
  tags: { skills: ['speaking', 'writing', 'reading', 'grammar'], topics: ['problems', 'weil-denn-deshalb', 'suggestions', 'complaints'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'What is the problem?',
      about: 'Describe a problem and say why it happened with weil, denn and deshalb.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'When something goes wrong, say **what** the problem is and **why**. Three small words help, and each has its own word order. After *weil* the verb goes to the **end**. After *denn* the word order stays **normal**. *deshalb* gives the **result**, and the verb comes **right after** it.' },
          { t: 'examples', items: [
            { s: 'Die Lieferung kommt zu spät, **weil** der Lieferant ein Problem **hat**.', n: '*weil*: the verb *hat* goes to the end.' },
            { s: 'Wir können heute nicht drucken, **denn** der Drucker **ist** kaputt.', n: '*denn*: subject, then verb, as in a normal sentence.' },
            { s: 'Der Server ist ausgefallen. **Deshalb können** wir keine E-Mails schicken.', n: '*deshalb*: the result. The verb *können* comes next, then the subject.' },
            { s: 'Das **liegt daran, dass** zwei Kollegen krank sind.', n: 'A useful phrase for the cause. After *dass* the verb goes to the end.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Problems at work', explain: ['head', 'col1'], quiz: true, head: ['Phrase', 'Meaning'], rows: [
            ['Das System ist abgestürzt.', 'the computer system has stopped working'],
            ['Die Lieferung hat sich verzögert.', 'the delivery is late'],
            ['In der Rechnung ist ein Fehler.', 'there is a mistake in the invoice'],
            ['Wir haben einen Engpass.', 'there is not enough of something, for example people or material'],
            ['Den Termin schaffen wir nicht.', 'we cannot finish by the planned date'],
            ['Das Budget reicht nicht.', 'there is not enough money'],
          ] },
          { t: 'tip', art: 'owl', md: 'Describe a problem calmly and in facts: what happened, since when, and what the result is. *Seit heute Morgen funktioniert das System nicht. Deshalb können wir keine Bestellungen bearbeiten.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'weil, denn or deshalb? Choose.', items: [
            { q: 'Wir können nicht drucken, ___ der Drucker kaputt ist.', o: ['weil', 'denn', 'deshalb'], why: 'The verb *ist* is at the end: *weil*.' },
            { q: 'Wir können nicht drucken, ___ der Drucker ist kaputt.', o: ['denn', 'weil', 'deshalb'], why: 'Normal word order (subject, verb): *denn*.' },
            { q: 'Der Server ist ausgefallen. ___ können wir keine E-Mails schicken.', o: ['Deshalb', 'Weil', 'Denn'], why: 'The result, with the verb *können* right after it: *Deshalb*.' },
            { q: 'Die Lieferung kommt später. Das liegt ___, dass der Lieferant Probleme hat.', o: ['daran', 'darauf', 'dafür'], why: 'The fixed phrase: *Das liegt daran, dass …*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Wir schaffen den Termin nicht, weil zwei Kollegen krank ___. (sein)', a: ['sind'], why: 'After *weil*, the verb goes to the end: *krank sind*.' },
            { q: 'Das Budget reicht nicht. Deshalb ___ wir das Projekt verschieben. (müssen)', a: ['müssen', 'muessen'], why: 'After *Deshalb*, the verb comes next: *müssen wir*.' },
            { q: 'Der Kunde ist unzufrieden, denn die Rechnung ___ falsch. (sein)', a: ['ist'], why: 'After *denn*, normal order: *die Rechnung ist*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the problem and its result.', pairs: [
            ['Das System ist abgestürzt.', 'Deshalb können wir keine Bestellungen bearbeiten.'],
            ['Zwei Kollegen sind krank.', 'Deshalb haben wir zu wenig Leute im Team.'],
            ['In der Rechnung ist ein Fehler.', 'Deshalb schicken wir eine neue Rechnung.'],
            ['Der Lieferant hat Probleme in der Produktion.', 'Deshalb kommt die Ware später.'],
            ['Das Budget reicht nicht.', 'Deshalb brauchen wir mehr Geld.'],
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Das liegt daran, dass der Server ausgefallen ist.', why: 'After *dass* the verb goes to the end: *ausgefallen ist*.' },
            { a: 'Deshalb müssen wir den Termin verschieben.', why: '*Deshalb* first, then the verb *müssen*, then *wir*; the infinitive goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Solutions and complaints',
      about: 'Suggest solutions, agree on one, and answer an unhappy customer.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To suggest a solution politely, use the Konjunktiv II or *Ich schlage vor, dass …*. To agree, say *Einverstanden* or *Gute Idee*. To disagree, first say something positive, then add *aber*.' },
          { t: 'examples', items: [
            { s: '**Wie wäre es, wenn** wir einen Techniker **anrufen**?', n: 'A soft suggestion. After *wenn* the verb goes to the end.' },
            { s: '**Ich schlage vor, dass** wir den Termin **verschieben**.', n: 'A clear suggestion. After *dass* the verb goes to the end.' },
            { s: 'Wir **könnten** eine Aushilfe einstellen. **Was halten Sie davon?**', n: '*könnten*: an idea. *Was halten Sie davon?* asks for an opinion.' },
            { s: 'Das ist eine gute Idee, **aber** es ist zu teuer.', n: 'Polite disagreement: positive first, then *aber*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Zu wenig Leute im Lager', lines: [
            { who: 'Frau Lindqvist', s: 'Herr Okafor, wir haben ein Problem: Viele Kunden warten zu lange auf ihre Bestellungen.' },
            { who: 'Herr Okafor', s: 'Ja, ich weiß. Das liegt daran, dass im Lager zwei Kollegen krank sind.' },
            { who: 'Frau Lindqvist', s: 'Wie wäre es, wenn wir für ein paar Wochen eine Aushilfe einstellen?' },
            { who: 'Herr Okafor', s: 'Das ist eine gute Idee, aber eine neue Person braucht Zeit für die Einarbeitung.' },
            { who: 'Frau Lindqvist', s: 'Stimmt. Was halten Sie davon, wenn Kollegen aus dem Vertrieb am Samstag helfen?' },
            { who: 'Herr Okafor', s: 'Ich schlage vor, dass wir beides machen: Die Kollegen helfen sofort, und die Aushilfe fängt nächste Woche an.' },
            { who: 'Frau Lindqvist', s: 'Einverstanden. Dann informiere ich die Kunden über die Verzögerung.' },
            { who: 'Herr Okafor', s: 'Gut, dann machen wir das so.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Viele Kunden warten zu lange auf ihre Bestellungen.', a: 't', why: 'That is the problem at the start.' },
            { q: 'Im Lager fehlen zwei Kollegen, weil sie im Urlaub sind.', a: 'f', why: 'They are ill: *zwei Kollegen krank sind*.' },
            { q: 'Herr Okafor findet die Idee mit der Aushilfe gut, sieht aber auch ein Problem.', a: 't', why: '*Das ist eine gute Idee, aber …* a new person needs training.' },
            { q: 'Am Ende entscheiden sie sich nur für die Aushilfe.', a: 'f', why: 'They do both: colleagues help now, and the temporary worker starts next week.' },
          ] },
        ],
        [
          { t: 'text', md: 'An unhappy customer wants three things: that you **listen**, that you **say sorry**, and that you offer a **solution**. Say clearly what happens next.' },
          { t: 'table', caption: 'Answering a complaint', explain: ['head'], head: ['The customer', 'You'], rows: [
            ['Ich möchte mich beschweren.', 'Das tut mir leid. Worum geht es genau?'],
            ['Die Ware ist beschädigt angekommen.', 'Das ist wirklich ärgerlich. Wir schicken Ihnen sofort Ersatz.'],
            ['Ich warte schon seit zwei Wochen!', 'Ich verstehe Ihren Ärger. Ich kümmere mich sofort darum.'],
            ['Die Rechnung ist falsch.', 'Entschuldigen Sie bitte den Fehler. Sie bekommen heute eine neue Rechnung.'],
          ] },
          { t: 'tip', art: 'owl', md: '*sich kümmern um* + Akkusativ: to take care of. For a thing you say *darum*: *Ich kümmere mich darum.*' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best reaction.', items: [
            { q: 'Kundin: „Die Ware ist beschädigt angekommen.“', o: ['Das tut mir sehr leid. Wir schicken Ihnen sofort Ersatz.', 'Das kann nicht sein.', 'Da kann ich leider nichts machen.'], why: 'Say sorry and offer a solution.' },
            { q: 'Kunde: „Ich warte schon seit drei Wochen auf meine Bestellung!“', o: ['Ich verstehe Ihren Ärger. Ich kümmere mich sofort darum.', 'Warten Sie doch noch eine Woche.', 'Das ist nicht mein Problem.'], why: 'Show that you understand, then act.' },
            { q: 'Welcher Vorschlag ist richtig?', o: ['Wie wäre es, wenn wir Ihnen einen Gutschein schicken?', 'Wie wäre es, wenn wir schicken Ihnen einen Gutschein?', 'Wie wäre es, dass wir Ihnen einen Gutschein schicken?'], why: '*Wie wäre es, wenn …*, and after *wenn* the verb goes to the end.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Ich schlage vor, dass wir den Termin auf Freitag ___. (verschieben)', a: ['verschieben'], why: 'After *dass* the verb goes to the end.' },
            { q: 'Wie ___ es, wenn wir eine Aushilfe einstellen? (sein, Konjunktiv II)', a: ['wäre', 'waere'], why: 'The fixed suggestion: *Wie wäre es, wenn …?*' },
            { q: 'Keine Sorge, ich kümmere mich sofort ___.', a: ['darum'], why: '*sich kümmern um* + a thing: *darum*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A complaint and the reply',
      about: 'Read a complaint email and a good answer from customer service.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Betreff: Beschwerde über die Lieferung vom 14. November', md: 'Sehr geehrte Damen und Herren,\n\nam 14. November haben wir bei Ihnen ein Mittagessen für 30 Personen für unsere Kundenveranstaltung bestellt. Leider war ich mit Ihrem Service gar nicht zufrieden.\n\nDas Essen sollte um 12 Uhr geliefert werden, aber Ihr Fahrer kam erst um 12:50 Uhr. Deshalb mussten unsere Gäste fast eine Stunde warten. Außerdem fehlten die vegetarischen Gerichte, obwohl sie auf unserer Bestellung standen. Drei Gäste konnten deshalb fast nichts essen.\n\nDas war für uns sehr unangenehm, weil es wichtige Kunden waren. Ich bitte Sie, uns einen Teil des Preises zurückzuzahlen.\n\nMit freundlichen Grüßen\nJasmin Achterberg\nBüroleitung' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the complaint. True, false or not given?', items: [
            { q: 'Frau Achterberg hat Essen für 30 Personen bestellt.', a: 't', why: '*ein Mittagessen für 30 Personen*.' },
            { q: 'Das Essen kam pünktlich um 12 Uhr.', a: 'f', why: 'The driver came at 12:50.' },
            { q: 'Die vegetarischen Gerichte waren kalt.', a: 'ng', why: 'They were missing; the email says nothing about the temperature of the food.' },
            { q: 'Frau Achterberg möchte einen Teil des Geldes zurück.', a: 't', why: '*Ich bitte Sie, uns einen Teil des Preises zurückzuzahlen.*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Betreff: AW: Beschwerde über die Lieferung vom 14. November', md: 'Sehr geehrte Frau Achterberg,\n\nvielen Dank für Ihre E-Mail. Es tut mir sehr leid, dass Ihre Veranstaltung so begonnen hat. Ich verstehe Ihren Ärger gut.\n\nIch habe mit unserem Fahrer und mit der Küche gesprochen. Wegen eines Unfalls auf der Autobahn stand der Fahrer lange im Stau. Leider hat er uns nicht rechtzeitig informiert, deshalb konnten wir Sie nicht anrufen. Die vegetarischen Gerichte hat die Küche vergessen. Das war unser Fehler.\n\nAls Entschuldigung erstatten wir Ihnen 30 Prozent des Preises. Das Geld bekommen Sie in den nächsten Tagen auf Ihr Konto. Außerdem schenken wir Ihnen für Ihre nächste Bestellung einen Gutschein über 50 Euro.\n\nIn Zukunft prüft ein zweiter Kollege jede Bestellung, bevor sie die Küche verlässt. Wir hoffen, dass wir Sie bald wieder von unserem Service überzeugen können.\n\nMit freundlichen Grüßen\nLukas Hartmann\nKundenservice' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the reply. Choose the right answer.', items: [
            { q: 'Warum kam der Fahrer zu spät?', o: ['Er stand wegen eines Unfalls im Stau.', 'Er hatte die falsche Adresse.', 'Die Küche war nicht fertig.'], why: '*Wegen eines Unfalls auf der Autobahn stand der Fahrer lange im Stau.*' },
            { q: 'Was bekommt Frau Achterberg?', o: ['30 Prozent des Preises zurück und einen Gutschein', 'das ganze Geld zurück', 'ein kostenloses Mittagessen für 30 Personen'], why: '*30 Prozent des Preises* and *einen Gutschein über 50 Euro*.' },
            { q: 'Was ändert die Firma?', o: ['Ein zweiter Kollege prüft jede Bestellung.', 'Sie hat einen neuen Fahrer.', 'Sie kocht keine vegetarischen Gerichte mehr.'], why: '*In Zukunft prüft ein zweiter Kollege jede Bestellung …*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the word that gives a reason or a result.', items: [
            { s: 'Das war für uns sehr unangenehm, [weil] es wichtige Kunden waren.', why: '*weil* gives the reason; the verb *waren* is at the end.' },
            { s: 'Der Fahrer hat uns nicht informiert, [deshalb] konnten wir Sie nicht anrufen.', why: '*deshalb* gives the result; the verb *konnten* comes next.' },
            { s: '[Wegen] eines Unfalls stand der Fahrer lange im Stau.', why: '*wegen* + Genitiv gives a reason in a short phrase.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the words from the emails and their meaning.', pairs: [
            ['die Beschwerde', 'Man sagt, dass man nicht zufrieden ist.'],
            ['erstatten', 'Geld zurückzahlen'],
            ['der Gutschein', 'Damit kann man später etwas bekommen, ohne zu bezahlen.'],
            ['die Veranstaltung', 'ein Event, zum Beispiel ein Treffen mit Kunden'],
            ['rechtzeitig', 'früh genug'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences about the emails.', items: [
            { q: 'Die Gäste mussten warten, ___ der Fahrer im Stau stand.', a: ['weil', 'da'], why: 'The verb *stand* is at the end: *weil*.' },
            { q: 'Das Essen kam zu spät. ___ mussten die Gäste warten.', a: ['Deshalb', 'Deswegen', 'Darum', 'Daher'], why: 'The result, with the verb *mussten* right after it.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wir können nicht liefern, ___ unser Lager zu wenig Personal hat.', o: ['weil', 'denn', 'deshalb'], why: 'The verb *hat* is at the end: *weil*.' },
      { q: 'Das System ist abgestürzt. ___ können wir nicht arbeiten.', o: ['Deshalb', 'Weil', 'Denn'], why: 'Result + verb right after it: *Deshalb*.' },
      { q: 'Wie wäre es, ___ wir den Termin verschieben?', o: ['wenn', 'dass', 'ob'], why: 'The fixed phrase: *Wie wäre es, wenn …?*' },
      { q: 'Ein Kunde beschwert sich. Was sagen Sie zuerst?', o: ['Das tut mir leid. Worum geht es genau?', 'Das ist nicht unser Fehler.', 'Schreiben Sie uns eine E-Mail.'], why: 'Say sorry and listen first.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Das liegt ___, dass zwei Kollegen krank sind.', a: ['daran'], why: '*Das liegt daran, dass …*' },
      { q: 'Ich schlage vor, dass wir eine Aushilfe ___. (einstellen)', a: ['einstellen'], why: 'After *dass*, the verb goes to the end, in one piece.' },
      { q: 'Ich verstehe Ihren ___. Ich kümmere mich sofort darum. (der Ä…)', a: ['Ärger', 'Aerger'], why: '*Ich verstehe Ihren Ärger.*' },
      { q: 'Als Entschuldigung ___ wir Ihnen 20 Prozent des Preises. (erstatten)', a: ['erstatten'], why: '*erstatten*: to pay money back.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Was halten Sie davon?', why: 'A W-question: *Was*, then the verb *halten*, then *Sie*.' },
      { a: 'Das tut mir sehr leid.', why: 'A fixed phrase to say sorry: *Das tut mir leid*, with *sehr* before *leid*.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Nach „weil“ steht das Verb am Ende.', a: 't', why: '*… weil der Drucker kaputt ist.*' },
      { q: 'Nach „denn“ steht das Verb am Ende.', a: 'f', why: 'After *denn* the word order stays normal: *denn der Drucker ist kaputt*.' },
    ] },
  ],
};
