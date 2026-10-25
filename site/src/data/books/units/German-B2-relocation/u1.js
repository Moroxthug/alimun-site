// German B2 for moving abroad, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Residence and official language',
  goal: 'Understand official letters and formal procedures and answer them precisely.',
  art: 'suitcase',
  tags: { skills: ['reading', 'writing', 'grammar', 'vocabulary'], topics: ['official-letters', 'nominal-style', 'sein-zu-infinitive', 'formal-request', 'objection', 'residence-permit'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Official German',
      about: 'Nominal style and passive forms in letters from offices: Die Unterlagen sind einzureichen.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Letters from German offices (*Behörden*) are written in a special style, often called *Amtsdeutsch*. Two features make these letters hard to read. They use many **nouns** where everyday German uses a verb, and they use many **passive** forms, because the action matters more than the person who does it.\n\nMany official phrases are a noun with a fixed verb. The verb carries little meaning; the noun says what happens. Learn these phrases as a whole.' },
          { t: 'table', caption: 'Everyday verb and official phrase', explain: ['head'], quiz: true, head: ['Everyday verb', 'Official phrase'], rows: [
            ['beantragen', 'einen Antrag stellen'],
            ['entscheiden', 'eine Entscheidung treffen'],
            ['widersprechen', 'Widerspruch einlegen'],
            ['zustimmen', 'die Zustimmung erteilen'],
            ['abgeben', 'Unterlagen einreichen'],
            ['bezahlen', 'eine Gebühr entrichten'],
            ['informieren', 'in Kenntnis setzen'],
          ] },
          { t: 'tip', art: 'owl', md: '*Einreichen* and *vorlegen* both mean giving documents to an office. *Vorlegen* often means that you show an original, for example your passport, and get it back.' },
        ],
        [
          { t: 'text', md: 'Besides the usual passive with *werden*, official letters often use **sein + zu + infinitive**. It usually means that something **must** be done: *Die Unterlagen sind einzureichen* means *Die Unterlagen müssen eingereicht werden*. With separable verbs, *zu* goes between the two parts: *einzureichen, vorzulegen, mitzubringen*. With other verbs, *zu* stands before the verb: *zu unterschreiben*.' },
          { t: 'examples', items: [
            { s: 'Die Unterlagen **sind** bis zum 15. März **einzureichen**.', n: 'The documents must be handed in by 15 March.' },
            { s: 'Der Antrag **muss** persönlich **gestellt werden**.', n: 'Passive with a modal verb: modal verb, then Partizip II and *werden* at the end.' },
            { s: 'Das Formular **ist** vollständig **auszufüllen** und **zu unterschreiben**.', n: '*ausfüllen* is separable, so *auszufüllen*. *unterschreiben* is not, so *zu unterschreiben*.' },
            { s: 'Bitte senden Sie uns das **ausgefüllte** Formular zurück.', n: 'A Partizip II used as an adjective: the form that has been filled in.' },
            { s: 'Unvollständige Anträge **können nicht bearbeitet werden**.', n: 'Passive with *können*: the office will not process them.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Rewrite the sentence in official style.', items: [
            { q: 'Sie müssen den Pass im Original vorlegen. → Der Pass ist im Original ___. (vorlegen)', a: ['vorzulegen'], why: 'Separable verb: *zu* goes between *vor* and *legen*.' },
            { q: 'Sie müssen das Formular ausfüllen. → Das Formular ist ___. (ausfüllen)', a: ['auszufüllen'], why: 'Separable verb: *auszufüllen*.' },
            { q: 'Man muss Änderungen sofort mitteilen. → Änderungen sind sofort ___. (mitteilen)', a: ['mitzuteilen'], why: 'Separable verb: *mitzuteilen*. *Änderungen* is plural, so *sind*.' },
            { q: 'Sie müssen den Antrag unterschreiben. → Der Antrag ist ___. (unterschreiben)', a: ['zu unterschreiben'], why: '*unterschreiben* is not separable, so *zu* stands before it.' },
            { q: 'Man muss die Unterlagen einreichen. → Die Unterlagen müssen ___ werden. (einreichen)', a: ['eingereicht'], why: 'Passive with a modal verb: Partizip II *eingereicht* + *werden*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the sentence from the letter mean?', items: [
            { q: 'Die Bescheinigung ist bis Ende Juni vorzulegen.', o: ['Sie müssen die Bescheinigung bis Ende Juni vorlegen.', 'Sie dürfen die Bescheinigung erst nach Ende Juni vorlegen.', 'Die Bescheinigung wurde schon im Juni vorgelegt.'], why: '*sein + zu + infinitive* says what must be done.' },
            { q: 'Die Gebühr ist bei Antragstellung zu entrichten.', o: ['Sie zahlen, wenn Sie den Antrag stellen.', 'Sie zahlen, nachdem die Behörde entschieden hat.', 'Die Gebühr wird Ihnen zurückgezahlt.'], why: '*entrichten* is an official word for *bezahlen*; *bei Antragstellung* means when you apply.' },
            { q: 'Unvollständige Anträge können nicht bearbeitet werden.', o: ['Wenn Unterlagen fehlen, wird der Antrag nicht bearbeitet.', 'Man kann den Antrag auch unvollständig abgeben.', 'Die Behörde ergänzt fehlende Unterlagen selbst.'], why: '*unvollständig* means that something is missing; such applications are not processed.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Which verb goes with each noun?', pairs: [
            ['einen Antrag', 'stellen'],
            ['eine Entscheidung', 'treffen'],
            ['Widerspruch', 'einlegen'],
            ['in Kraft', 'treten'],
            ['zur Kenntnis', 'nehmen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences from official letters.', items: [
            { a: 'Der Antrag ist bis Ende Mai einzureichen.', why: '*ist* in second place, the infinitive with *zu* at the end.' },
            { a: 'Die Unterlagen müssen vollständig eingereicht werden.', why: 'Modal verb second; Partizip II and *werden* at the end.' },
            { a: 'Das Formular ist vollständig auszufüllen.', why: '*sein + zu + infinitive*: *auszufüllen* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'A formal request or objection',
      about: 'Write to an office with a clear structure and the right register.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'A formal letter to an office follows a fixed order. The person who reads it handles many cases, so make your letter easy to process. Name your case with the file number (*Aktenzeichen*) if you have one. Then say what you want, give your reasons and say which documents you enclose.' },
          { t: 'table', caption: 'The parts of a formal letter', explain: ['head', 'col0'], head: ['Part', 'Typical phrase'], rows: [
            ['Subject line', 'Antrag auf Verlängerung meiner Aufenthaltserlaubnis'],
            ['Reference', 'Ihr Schreiben vom 3. März 2026, Aktenzeichen 12-345/26'],
            ['Greeting', 'Sehr geehrte Damen und Herren,'],
            ['What you want', 'Hiermit beantrage ich … / Hiermit lege ich Widerspruch gegen … ein.'],
            ['Reasons', 'Zur Begründung führe ich Folgendes an: …'],
            ['Request', 'Ich bitte Sie, meinen Antrag erneut zu prüfen.'],
            ['Documents', 'Anbei erhalten Sie … / Eine Kopie … füge ich bei.'],
            ['Ending', 'Für Rückfragen stehe ich Ihnen gern zur Verfügung. Mit freundlichen Grüßen'],
          ] },
          { t: 'tip', art: 'owl', md: 'A *Widerspruch* is a formal objection to a decision (*Bescheid*). At the end of the decision there is usually a section called *Rechtsbehelfsbelehrung*. It tells you how and by when you can object; often the deadline is one month. If you are unsure, ask an advice centre (*Beratungsstelle*).' },
        ],
        [
          { t: 'reading', title: 'Widerspruch gegen den Bescheid vom 12. Mai 2026, Aktenzeichen KG-4471/26', md: 'Sehr geehrte Damen und Herren,\n\nhiermit lege ich fristgerecht Widerspruch gegen den oben genannten Bescheid ein, mit dem mein Antrag auf Kindergeld für meine Tochter Leyla abgelehnt wurde.\n\nZur Begründung führe ich Folgendes an: Im Bescheid heißt es, die Meldebescheinigung meiner Tochter fehle. Diese Bescheinigung habe ich jedoch bereits am 2. April zusammen mit dem Antrag eingereicht. Offenbar ist sie bei der Bearbeitung nicht berücksichtigt worden.\n\nIch bitte Sie daher, den Bescheid aufzuheben und meinen Antrag erneut zu prüfen. Eine Kopie der Meldebescheinigung füge ich diesem Schreiben bei.\n\nFür Rückfragen stehe ich Ihnen gern zur Verfügung.\n\nMit freundlichen Grüßen\nSamira Haddad' },
          { t: 'text', md: 'Samira is polite but firm. She does not complain about the office; she states facts and makes a clear request. Note *die Meldebescheinigung fehle*: when you report what a letter says, formal German often uses the **Konjunktiv I**.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence fits a formal letter to an office?', items: [
            { q: '', o: ['Hiermit beantrage ich die Verlängerung meiner Aufenthaltserlaubnis.', 'Ich will meine Aufenthaltserlaubnis verlängern, bitte schnell.', 'Kann ich meine Aufenthaltserlaubnis mal verlängern?'], why: '*Hiermit beantrage ich …* is the standard way to make a formal application.' },
            { q: '', o: ['Ich bitte Sie, meinen Antrag erneut zu prüfen.', 'Schauen Sie sich das bitte noch mal an.', 'Prüfen Sie das sofort noch einmal!'], why: '*Ich bitte Sie, … zu …* is polite and formal. The others are too casual or too rude.' },
            { q: '', o: ['Anbei erhalten Sie eine Kopie meines Arbeitsvertrags.', 'Hier ist mein Arbeitsvertrag, guck mal.', 'Den Arbeitsvertrag hab ich mal drangehängt.'], why: '*Anbei erhalten Sie …* is the formal way to name an enclosure.' },
            { q: '', o: ['Für Rückfragen stehe ich Ihnen gern zur Verfügung.', 'Ruf mich an, wenn was ist.', 'Melden Sie sich halt, wenn Sie Fragen haben.'], why: 'The usual formal sentence before the closing. *halt* and *wenn was ist* are spoken German.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build formal sentences.', items: [
            { a: 'Hiermit lege ich Widerspruch gegen den Bescheid ein.', why: '*einlegen* is separable: *lege … ein*, with *ein* at the end.' },
            { a: 'Ich bitte Sie um eine kurze Bestätigung.', why: '*jemanden um etwas bitten*: *Sie* comes before *um eine … Bestätigung*.' },
            { a: 'Als Anlage füge ich eine Kopie des Mietvertrags bei.', why: '*beifügen* is separable: *füge … bei*. *Als Anlage* takes the first place.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phrases for your letter.', items: [
            { q: 'Hiermit ___ ich die Verlängerung meiner Aufenthaltserlaubnis. (beantragen)', a: ['beantrage'], why: '*ich beantrage*: the verb in second place after *Hiermit*.' },
            { q: 'Hiermit lege ich Widerspruch ___ den Bescheid vom 4. Juni ein.', a: ['gegen'], why: '*Widerspruch gegen etwas einlegen*.' },
            { q: 'Zur ___ führe ich Folgendes an: … (begründen)', a: ['Begründung'], why: '*begründen → die Begründung*; *zur Begründung* introduces your reasons.' },
            { q: 'Ich bitte Sie, den Bescheid ___. (aufheben)', a: ['aufzuheben'], why: '*bitten, … zu*: separable verb, so *aufzuheben*.' },
            { q: 'Eine Kopie meines Passes füge ich diesem Schreiben ___.', a: ['bei'], why: '*beifügen* is separable; *bei* goes to the end.' },
            { q: 'Für Rückfragen stehe ich Ihnen gern zur ___.', a: ['Verfügung'], why: '*zur Verfügung stehen*: to be available.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter about an application',
      about: 'Read a letter from the immigration office and a model reply.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Ihr Antrag auf Verlängerung der Aufenthaltserlaubnis', md: 'Ausländerbehörde, Aktenzeichen: AB-2291/26\n\nSehr geehrter Herr Nguyen,\n\nwir bestätigen den Eingang Ihres Antrags vom 18. August 2026 auf Verlängerung Ihrer Aufenthaltserlaubnis. Da der Antrag vor Ablauf Ihres bisherigen Aufenthaltstitels gestellt wurde, gilt dieser bis zur Entscheidung als fortbestehend. Auf Wunsch wird Ihnen hierüber eine Bescheinigung ausgestellt, die sogenannte Fiktionsbescheinigung.\n\nBei der Prüfung Ihrer Unterlagen wurde festgestellt, dass folgende Nachweise fehlen: die Gehaltsabrechnungen der letzten drei Monate sowie ein aktueller Nachweis über Ihre Krankenversicherung. Wir bitten Sie, die fehlenden Unterlagen bis spätestens 30. September 2026 nachzureichen. Die Unterlagen können per Post, persönlich während der Öffnungszeiten oder über unser Online-Portal eingereicht werden. Bitte reichen Sie keine Originale ein, sondern lediglich gut lesbare Kopien, und geben Sie stets das oben genannte Aktenzeichen an.\n\nFür die Ausstellung des neuen Aufenthaltstitels ist eine persönliche Vorsprache erforderlich. Hierzu erhalten Sie nach Eingang der vollständigen Unterlagen eine gesonderte Einladung. Zum Termin sind Ihr Reisepass sowie ein aktuelles biometrisches Lichtbild mitzubringen.\n\nSollten die Unterlagen nicht fristgerecht eingehen, kann über Ihren Antrag nur nach Aktenlage entschieden werden. Dies kann zu einer Ablehnung führen.\n\nAufgrund des hohen Antragsaufkommens kann die Bearbeitung derzeit mehrere Wochen in Anspruch nehmen. Wir bitten um Ihr Verständnis und darum, von telefonischen Sachstandsanfragen abzusehen.\n\nMit freundlichen Grüßen\nIm Auftrag\nKatrin Brandt' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the letter. True, false or not given?', items: [
            { q: 'Herr Nguyen hat seinen Antrag zu spät gestellt.', a: 'f', why: 'The application was made *vor Ablauf* of his permit, so in time.' },
            { q: 'Bis zur Entscheidung gilt seine bisherige Aufenthaltserlaubnis weiter.', a: 't', why: '*gilt dieser bis zur Entscheidung als fortbestehend*' },
            { q: 'Es fehlen Nachweise über sein Einkommen und seine Krankenversicherung.', a: 't', why: 'The payslips (*Gehaltsabrechnungen*) show his income; the insurance proof is also missing.' },
            { q: 'Die Unterlagen müssen persönlich abgegeben werden.', a: 'f', why: 'He can send them by post, bring them in person or use the online portal.' },
            { q: 'Den Termin für den neuen Aufenthaltstitel bekommt er sofort.', a: 'f', why: 'He gets an invitation only *nach Eingang der vollständigen Unterlagen*.' },
            { q: 'Für den neuen Aufenthaltstitel muss er eine Gebühr bezahlen.', a: 'ng', why: 'The letter does not mention a fee.' },
            { q: 'Wenn die Unterlagen zu spät kommen, kann der Antrag abgelehnt werden.', a: 't', why: '*Dies kann zu einer Ablehnung führen.*' },
          ] },
        ],
        [
          { t: 'reading', title: 'Antwort: Nachreichung von Unterlagen, Aktenzeichen AB-2291/26', md: 'Sehr geehrte Frau Brandt,\n\nvielen Dank für Ihr Schreiben vom 2. September 2026. Wie gewünscht reiche ich hiermit die fehlenden Unterlagen nach. Anbei erhalten Sie meine Gehaltsabrechnungen für Juni, Juli und August 2026 sowie eine aktuelle Bescheinigung meiner Krankenkasse über meine Mitgliedschaft. Daraus geht hervor, dass ich seit Januar 2025 durchgehend gesetzlich krankenversichert bin. Zur einfacheren Zuordnung habe ich außerdem eine Kopie Ihres Schreibens beigefügt.\n\nDarüber hinaus möchte ich Sie bitten, mir eine Fiktionsbescheinigung auszustellen, da mein Arbeitgeber einen Nachweis über meinen Aufenthaltsstatus verlangt. Meine bisherige Aufenthaltserlaubnis läuft am 15. Oktober ab. Bitte teilen Sie mir mit, ob ich die Bescheinigung persönlich abholen muss oder ob sie mir zugeschickt werden kann.\n\nFür Rückfragen bin ich telefonisch oder per E-Mail jederzeit erreichbar.\n\nMit freundlichen Grüßen\nMinh Nguyen' },
          { t: 'ex', kind: 'choice', h: 'Look at the reply.', items: [
            { q: 'Warum bittet Herr Nguyen um eine Fiktionsbescheinigung?', o: ['Sein Arbeitgeber möchte einen Nachweis sehen.', 'Sein Antrag wurde abgelehnt.', 'Er kann die Unterlagen nicht rechtzeitig schicken.'], why: '*da mein Arbeitgeber einen Nachweis über meinen Aufenthaltsstatus verlangt*' },
            { q: '„Wie gewünscht reiche ich die fehlenden Unterlagen nach.“ Was bedeutet „nachreichen“?', o: ['später einreichen, was noch fehlt', 'Unterlagen zurückverlangen', 'einen Antrag zurückziehen'], why: '*nach-* here means later: he sends what was missing.' },
            { q: 'Wo nennt Herr Nguyen das Aktenzeichen?', o: ['im Betreff', 'in der Anrede', 'im letzten Satz'], why: 'The file number is in the subject line, so the office can find his case.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'spot', h: 'Tap the infinitives with zu that say what must be done.', items: [
            { s: 'Zum Termin sind Ihr Reisepass sowie ein aktuelles Lichtbild [mitzubringen].', why: '*sind … mitzubringen* = *müssen mitgebracht werden*.' },
            { s: 'Die fehlenden Nachweise sind bis zum 30. September [nachzureichen], das neue Formular ist [zu unterschreiben].', why: 'Two forms of *sein + zu + infinitive*: one separable verb, one not.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Der Pass ist im Original ___.', o: ['vorzulegen', 'zu vorlegen', 'vorgelegen'], why: 'Separable verb: *zu* goes between the parts, *vorzulegen*.' },
      { q: 'Hiermit lege ich ___ gegen den Bescheid ein.', o: ['Widerspruch', 'Antrag', 'Entscheidung'], why: '*Widerspruch einlegen*: to object formally.' },
      { q: 'Welcher Satz passt in einen Brief an eine Behörde?', o: ['Ich bitte Sie, meinen Antrag erneut zu prüfen.', 'Schauen Sie sich das noch mal an.', 'Prüf das bitte noch mal.'], why: '*Ich bitte Sie, … zu …* is the formal request.' },
      { q: 'Die Unterlagen müssen bis Freitag eingereicht ___.', o: ['werden', 'sein', 'haben'], why: 'Passive with a modal verb: Partizip II + *werden*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Das Formular ist vollständig ___. (ausfüllen)', a: ['auszufüllen'], why: '*sein + zu + infinitive*, separable verb.' },
      { q: 'Zur ___ führe ich Folgendes an. (begründen)', a: ['Begründung'], why: '*zur Begründung*: to give reasons.' },
      { q: 'Für Rückfragen stehe ich Ihnen gern zur ___.', a: ['Verfügung'], why: '*zur Verfügung stehen*.' },
      { q: 'Wir bitten Sie, die fehlenden Unterlagen ___. (nachreichen)', a: ['nachzureichen'], why: '*bitten, … zu*: *nachzureichen*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Which verb goes with each noun?', pairs: [
      ['eine Entscheidung', 'treffen'],
      ['einen Antrag', 'stellen'],
      ['eine Gebühr', 'entrichten'],
      ['zur Kenntnis', 'nehmen'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Der Antrag ist bis Ende Juli einzureichen.', why: '*ist* second, *einzureichen* at the end.' },
      { a: 'Anbei erhalten Sie eine Kopie meines Passes.', why: '*Anbei* first, then the verb *erhalten*.' },
    ] },
  ],
};
