// German site (/de/): course pages written for German speakers in Germany, Austria and
// Switzerland. Formal "Sie", as on the rest of the German site. Facts only.

const LEVELS = {
  A1: 'Sie verstehen und verwenden alltägliche Ausdrücke und ganz einfache Sätze, können sich vorstellen und Fragen zur Person stellen, wenn Ihr Gegenüber langsam und deutlich spricht.',
  A2: 'Sie verständigen sich in einfachen, alltäglichen Situationen wie Familie, Einkaufen, Arbeit und Wohnort und beschreiben Ihre Umgebung mit einfachen Worten.',
  B1: 'Sie kommen in den meisten Situationen zurecht, die auf Reisen vorkommen, erzählen von Erfahrungen, Plänen und Wünschen und begründen kurz Ihre Meinung.',
  B2: 'Sie verstehen die Hauptinhalte komplexer Texte, auch fachlicher Texte aus Ihrem Bereich, und sprechen so flüssig, dass ein Gespräch mit Muttersprachlern ohne größere Mühe möglich ist.',
  C1: 'Sie verwenden die Sprache flexibel und wirksam im gesellschaftlichen Leben, im Studium und im Beruf und schreiben klare, gut gegliederte Texte zu komplexen Themen.',
  C2: 'Sie verstehen praktisch alles, was Sie lesen und hören, mühelos und drücken sich spontan, flüssig und genau aus, auch in feinen Bedeutungsnuancen.',
};

const waitlistRow = (name) => ['Wann die Kurse starten', [
  `Die ${name}kurse auf Alimun sind noch nicht geöffnet. Wenn Sie sich **kostenlos auf die Warteliste setzen**, erhalten Sie eine E-Mail, sobald sie starten, ohne heute etwas zu bezahlen. Bis dahin können Sie bereits an den Englischkursen teilnehmen.`,
]];
const levelRow = ['Wie Sie Ihr Einstiegsniveau finden', [
  'Der Gemeinsame europäische Referenzrahmen teilt Sprachkenntnisse in sechs Stufen ein, von A1 bis C2. **Wer sich vor dem Start einstuft**, beginnt am richtigen Punkt und sieht die eigenen Fortschritte.',
]];

export default {
  site: 'de',
  locale: 'de_DE',
  courses: [
    { lang: 'English', slug: 'englischkurs-online', name: 'Englisch', video: 'pexels-12156230-london', open: true },
    { lang: 'Spanish', slug: 'spanischkurs-online', name: 'Spanisch', video: 'pexels-20066590-barcelona', open: false },
    { lang: 'French', slug: 'franzoesischkurs-online', name: 'Französisch', video: 'pexels-4272751-paris', open: false },
    { lang: 'Portuguese', slug: 'portugiesischkurs-online', name: 'Portugiesisch', video: 'pexels-12890902-sintra', open: false },
    { lang: 'Italian', slug: 'italienischkurs-online', name: 'Italienisch', video: 'pexels-15245121-rome', open: false },
  ],
  pageTitle: (c) => c.open ? `${c.name}kurs online, live mit Lehrkraft | Alimun` : `${c.name}kurs online: Warteliste | Alimun`,
  metaDesc: (c) => c.open
    ? `${c.name}kurs online in Gruppen mit einer Lehrkraft, an festen Tagen und Uhrzeiten jede Woche, Hausaufgaben, die Ihre Lehrkraft bewertet, und Übungen mit sofortiger Korrektur. Ab €24 im Monat.`
    : `Die ${c.name}kurse auf Alimun starten bald. Setzen Sie sich kostenlos auf die Warteliste, und wir schreiben Ihnen, sobald es losgeht.`,
  heroTitle: (c) => `${c.name}kurs online`,
  heroDesc: (c) => c.open
    ? 'Live-Unterricht per Video mit einer Lehrkraft und derselben Gruppe, an festen Tagen und zur selben Uhrzeit jede Woche. Zwischen den Stunden üben Sie mit sofortiger Korrektur, und Ihre Lehrkraft bewertet Ihre Hausaufgaben. Ab €24 im Monat.'
    : `Die ${c.name}kurse starten bald. Setzen Sie sich kostenlos auf die Warteliste: Wir schreiben Ihnen, sobald Ihre Sprache startet, und Sie bezahlen heute nichts. Bis dahin können Sie bereits an den Englischkursen teilnehmen.`,
  heroCta: (c) => c.open ? 'Jetzt starten' : 'Auf die Warteliste',
  howTitle: (c) => `So läuft der ${c.name}unterricht ab`,
  liveDesc: (c) => `${c.name}unterricht per Video mit Ihrer Lehrkraft und derselben Gruppe, an festen Tagen und zur selben Uhrzeit jede Woche.`,
  levelsTitle: (c) => `Die ${c.name}niveaus von A1 bis C2`,
  exams: {
    English: {
      title: 'Englischzertifikate',
      desc: 'Die gefragtesten Zertifikate für Studium, Beruf und Visum. Auf Alimun üben Sie mit Aufgaben im selben Format.',
      panels: [
        ['B2 First', 'Das B2 First von Cambridge English bescheinigt das Niveau B2 mit vier Prüfungsteilen: Reading and Use of English, Writing, Listening und Speaking. Es wird oft von Hochschulen, Erasmus-Programmen und Arbeitgebern verlangt, und das Zertifikat läuft nicht ab.'],
        ['C1 Advanced', 'Das C1 Advanced von Cambridge English bescheinigt das Niveau C1 mit denselben vier, anspruchsvolleren Prüfungsteilen. Viele Hochschulen und Unternehmen erkennen es als Nachweis für fortgeschrittenes Englisch in Studium und Beruf an.'],
        ['IELTS', 'Der IELTS bewertet Listening, Reading, Writing und Speaking mit einer Punktzahl von 0 bis 9. Es gibt ihn als Academic für das Studium und als General Training für Beruf und Einwanderung, und er wird für Visa in Ländern wie Großbritannien, Australien und Kanada verlangt.'],
      ],
    },
  },
  guides: {
    English: {
      title: 'Englisch online lernen: Was Sie vor dem Start wissen sollten',
      lead: 'Englisch ist **die Sprache, die die meisten Türen öffnet**, auch in Deutschland, Österreich und der Schweiz. Die richtige Methode entscheidet, ob ein Kurs halbherzig endet oder Sie wirklich zum Sprechen bringt.',
      rows: [
        ['Warum Englisch für deutschsprachige Lernende zählt', [
          'Viele Unternehmen im deutschsprachigen Raum arbeiten international, mit Kunden, Lieferanten und Teams im Ausland, und **Englisch ist dabei oft die Arbeitssprache**. Bewerbungsgespräche finden immer häufiger zumindest teilweise auf Englisch statt.',
          'Auch in Studium und Forschung ist Englisch entscheidend: Es ist die Sprache vieler Masterstudiengänge, Fachartikel und technischer Dokumentation. Und es macht jede Reise einfacher.',
        ]],
        ['Was deutschsprachigen Lernenden schwerfällt', [
          'Der th-Laut und der Unterschied zwischen w und v brauchen Übung, ebenso die Verlaufsformen wie I am working, die es im Deutschen so nicht gibt. Dazu kommen falsche Freunde: become heißt nicht bekommen, und ein gift ist ein Geschenk.',
          'Wer vom ersten Tag an mit einer Lehrkraft und einer Gruppe spricht, **hört die echte Sprache** und korrigiert Fehler aus dem Deutschen, bevor sie zur Gewohnheit werden.',
        ]],
        ['Gruppenunterricht oder Einzelunterricht', [
          'Einzelunterricht bietet volle Aufmerksamkeit, kostet aber mehr und gewöhnt Sie an nur einen Gesprächspartner. In der Gruppe sprechen Sie mit verschiedenen Menschen, hören unterschiedliche Akzente, und **die Kosten jeder Stunde werden geteilt**.',
          'Auf Alimun wählen Sie zwischen Gruppen unterschiedlicher Größe, je nachdem, wie viel Aufmerksamkeit Sie möchten, und einem Tarif mit Einzelunterricht. In allen Fällen findet der Unterricht an festen Tagen und Uhrzeiten statt, damit das Lernen zur Gewohnheit wird.',
        ]],
        ['Wie schnell Sie Fortschritte machen', [
          'Eine für alle gleiche Zahl von Wochen gibt es nicht: Fortschritte hängen vom Ausgangsniveau, von der Regelmäßigkeit und vom Üben zwischen den Stunden ab. **Ein paar feste Stunden pro Woche** bringen mehr als lange, seltene Einheiten.',
          'Deshalb wird der Live-Unterricht durch Übungen mit sofortiger Korrektur, Karteikarten mit dem Wortschatz aus dem Unterricht und Hausaufgaben ergänzt, die Ihre Lehrkraft bewertet.',
        ]],
      ],
    },
    Spanish: {
      title: 'Spanisch online lernen: Was Sie vor dem Start wissen sollten',
      lead: 'Spanisch ist **eine der meistgesprochenen Sprachen der Welt** und der Schlüssel zu Spanien und fast ganz Lateinamerika.',
      rows: [
        ['Warum Spanisch für deutschsprachige Lernende zählt', [
          'Spanien gehört zu den beliebtesten Reisezielen im deutschsprachigen Raum, und viele Unternehmen arbeiten mit Partnern in Spanien und Lateinamerika. Wer Spanisch spricht, reist entspannter und **öffnet sich neue berufliche Märkte**.',
        ]],
        ['Was deutschsprachigen Lernenden schwerfällt', [
          'Die Unterscheidung zwischen ser und estar, der häufige Subjuntivo und das gerollte r haben im Deutschen keine direkte Entsprechung. Mit regelmäßiger Konversation und gezielter Korrektur **werden sie schnell selbstverständlich**.',
        ]],
        levelRow,
        waitlistRow('Spanisch'),
      ],
    },
    French: {
      title: 'Französisch online lernen: Was Sie vor dem Start wissen sollten',
      lead: 'Französisch verbindet Frankreich, die Westschweiz, Belgien, Kanada und weite Teile Afrikas und ist **eine Arbeitssprache der europäischen Institutionen**.',
      rows: [
        ['Warum Französisch für deutschsprachige Lernende zählt', [
          'Frankreich ist **einer der wichtigsten Handelspartner Deutschlands**, und in der Schweiz ist Französisch eine der Landessprachen. Für Beruf, Studium und Reisen in die Nachbarländer ist es ein echter Vorteil.',
        ]],
        ['Was deutschsprachigen Lernenden schwerfällt', [
          'Nasale Vokale, stumme Buchstaben und die Bindung zwischen den Wörtern machen das Hörverstehen anfangs schwer, und das grammatische Geschlecht stimmt oft nicht mit dem Deutschen überein. **Regelmäßiges Hören und Sprechen** mit einer Lehrkraft hilft am meisten.',
        ]],
        levelRow,
        waitlistRow('Französisch'),
      ],
    },
    Portuguese: {
      title: 'Portugiesisch online lernen: Was Sie vor dem Start wissen sollten',
      lead: 'Portugiesisch verbindet Portugal, Brasilien und mehrere Länder Afrikas und wird von **Hunderten Millionen Menschen** gesprochen.',
      rows: [
        ['Warum Portugiesisch für deutschsprachige Lernende zählt', [
          'Brasilien ist eine der großen Volkswirtschaften der Welt, und viele deutsche Unternehmen sind dort vertreten. Portugal ist zudem ein beliebtes Ziel für Reisen und für einen Umzug.',
        ]],
        ['Europäisches und brasilianisches Portugiesisch', [
          'Beide Varianten teilen die Grammatik, unterscheiden sich aber in Aussprache, Teilen des Wortschatzes und manchen Alltagswendungen. Am besten **wählen Sie von Anfang an die Variante, die zu Ihren Zielen passt**; wer eine spricht, versteht auch die andere.',
        ]],
        levelRow,
        waitlistRow('Portugiesisch'),
      ],
    },
    Italian: {
      title: 'Italienisch online lernen: Was Sie vor dem Start wissen sollten',
      lead: 'Italienisch ist die Sprache eines der beliebtesten Reiseländer und **eine der Landessprachen der Schweiz**.',
      rows: [
        ['Warum Italienisch für deutschsprachige Lernende zählt', [
          'Italien ist ein wichtiger Handelspartner Deutschlands und Österreichs und ein Zentrum für Design, Mode, Kulinarik und Kultur. In der Schweiz wird Italienisch im Tessin gesprochen.',
        ]],
        ['Was deutschsprachigen Lernenden schwerfällt', [
          'Doppelkonsonanten wie in fatto oder anno verändern die Bedeutung, und **falsche Freunde lauern überall**: caldo bedeutet warm, nicht kalt. Mit einer Lehrkraft und einer Gruppe festigen Sie die richtige Aussprache von Anfang an.',
        ]],
        levelRow,
        waitlistRow('Italienisch'),
      ],
    },
  },
  faq: (c) => {
    if (c.open) {
      return [
        [`Was kostet ein ${c.name}kurs online auf Alimun?`, 'Die Tarife beginnen bei €24 im Monat mit Community, in Gruppen von etwa 35 Personen. Focused kostet €59, Intensive €109 und der Einzelunterricht 1 on 1 €269 im Monat. Mit dem Jahresabo zahlen Sie zehn statt zwölf Monate.'],
        ['Ist der Unterricht live oder aufgezeichnet?', 'Es ist Live-Unterricht per Video mit einer Lehrkraft und immer derselben Gruppe. Alimun zeichnet den Unterricht nicht auf: Nach jeder Stunde erhalten Sie die Stundennotizen, den neuen Wortschatz und die Hausaufgaben.'],
        ['An welchen Tagen und zu welcher Uhrzeit findet der Unterricht statt?', 'Jeder Kurs trifft sich an festen Tagen und zur selben Uhrzeit jede Woche, mit derselben Lehrkraft und derselben Gruppe. So wird das Lernen ein fester Teil Ihrer Woche.'],
        ['Brauche ich Vorkenntnisse?', 'Nein. Es gibt Kurse ab Niveau A1, und ein kurzer Einstufungstest ordnet Sie von A1 bis C1 ein, damit Sie in den passenden Kurs kommen.'],
        ['Kann ich mich auf ein Zertifikat vorbereiten?', 'Ja, Sie können mit Aufgaben im Format von B2 First, C1 Advanced und IELTS üben. Es ist kein offizielles Prüfungsmaterial, und Alimun ist nicht mit den Prüfungsanbietern verbunden.'],
        ['Kann ich jederzeit kündigen?', 'Ja, Sie können jederzeit in den Zahlungseinstellungen Ihres Kontos kündigen. Sie behalten den Zugang bis zum Ende des bereits bezahlten Zeitraums, wie in den AGB beschrieben.'],
        ['Was brauche ich für den Unterricht?', 'Einen Computer oder ein anderes Gerät mit Kamera, Mikrofon und stabiler Internetverbindung. Der Unterricht läuft im Browser, ohne dass Sie Programme installieren müssen.'],
      ];
    }
    return [
      [`Wann starten die ${c.name}kurse?`, `Es gibt noch keinen Termin. Wenn Sie sich auf die Warteliste setzen, erhalten Sie eine E-Mail, sobald die ${c.name}kurse starten.`],
      ['Ist die Warteliste kostenlos?', 'Ja. Sie tragen sich kostenlos ein und bezahlen heute nichts.'],
      ['Kann ich schon jetzt mit einer anderen Sprache beginnen?', 'Ja, die Englischkurse sind bereits geöffnet, und Sie können sich jederzeit anmelden.'],
      ['Wie läuft der Unterricht auf Alimun ab?', 'Es ist Live-Unterricht per Video, mit einer Lehrkraft und immer derselben Gruppe, an festen Tagen und zur selben Uhrzeit jede Woche. Zwischen den Stunden üben Sie mit sofortiger Korrektur.'],
      ['Was brauche ich für den Unterricht?', 'Einen Computer oder ein anderes Gerät mit Kamera, Mikrofon und stabiler Internetverbindung. Der Unterricht läuft im Browser, ohne dass Sie Programme installieren müssen.'],
    ];
  },
  quiz: {
    title: (c) => `Testen Sie Ihr ${c.name}niveau`,
    intro: (c) => `Sätze zum Ergänzen, die schwieriger werden, wenn Sie richtig antworten, und leichter, wenn Sie sich irren, in etwa zwei Minuten. Am Ende sehen Sie eine Einschätzung Ihres ${c.name}niveaus.`,
    note: (c) => c.open
      ? 'Das ist eine Einschätzung. Nach der Anmeldung bestimmt der vollständige Einstufungstest Ihr Niveau und den passenden Kurs.'
      : `Das ist eine Einschätzung. Wenn die ${c.name}kurse starten, bestimmt der vollständige Einstufungstest Ihr Niveau und den passenden Kurs.`,
    cta: (c) => c.open ? 'Anmelden und vollständigen Test machen' : 'Auf die Warteliste',
    start: 'Test starten',
    prompt: 'Ergänzen Sie den Satz',
    again: 'Test wiederholen',
    right1: 'richtige Antwort von',
    rightN: 'richtige Antworten von',
    levels: LEVELS,
  },
  ui: {
    UI_QUIZ_BTN: 'Niveau testen',
    UI_QUIZ_BTN_LONG: 'Niveau in zwei Minuten testen',
    UI_HOW_1_T: 'Einstufungstest',
    UI_HOW_1_D: 'Ein kurzer Test bestimmt Ihr Niveau, von A1 bis C1, und ordnet Sie dem passenden Kurs zu.',
    UI_HOW_1_A: 'Eine Lernende am Computer, die sich Notizen macht',
    UI_HOW_2_T: 'Live-Unterricht',
    UI_HOW_2_A: 'Videounterricht mit zwei Lernenden auf dem Bildschirm',
    UI_HOW_3_T: 'Bewertete Hausaufgaben',
    UI_HOW_3_D: 'Ihre Lehrkraft stellt Hausaufgaben und gibt sie bewertet zurück: Punktzahl, Stärken, nächste Schritte und ein Korrekturbeispiel.',
    UI_HOW_3_A: 'Eine Lehrkraft, die Hausaufgaben am Computer korrigiert',
    UI_HOW_4_T: 'Üben, wann Sie wollen',
    UI_HOW_4_D: 'Übungen auf Ihrem Niveau mit sofortiger Korrektur, Karteikarten mit dem Wortschatz aus dem Unterricht und Aufgaben im Prüfungsformat.',
    UI_HOW_4_A: 'Ein Lernender mit Kopfhörern, der in sein Heft schreibt',
    UI_LV_INTRO: 'Der Gemeinsame europäische Referenzrahmen (GER) beschreibt sechs Stufen der Sprachkenntnis. Auf Alimun gibt es Kurse für jede Stufe, und der Einstufungstest ordnet Sie von A1 bis C1 ein.',
    UI_LV_1_H: 'A1, Anfänger', UI_LV_1_P: LEVELS.A1,
    UI_LV_2_H: 'A2, Grundlagen', UI_LV_2_P: LEVELS.A2,
    UI_LV_3_H: 'B1, Mittelstufe', UI_LV_3_P: LEVELS.B1,
    UI_LV_4_H: 'B2, gute Mittelstufe', UI_LV_4_P: LEVELS.B2,
    UI_LV_5_H: 'C1, Fortgeschritten', UI_LV_5_P: LEVELS.C1,
    UI_LV_6_H: 'C2, Annähernd muttersprachlich', UI_LV_6_P: LEVELS.C2,
    UI_EX_NOTE: 'Kein offizielles Prüfungsmaterial. Alimun ist nicht mit den Prüfungsanbietern verbunden.',
    UI_PL_TITLE: 'Tarife und Preise',
    UI_PL_DESC: 'Wählen Sie, wie viel Aufmerksamkeit Sie möchten: Je kleiner die Gruppe, desto mehr Zeit zum Sprechen. Mit dem Jahresabo zahlen Sie zehn statt zwölf Monate.',
    UI_PL_MONTH: 'im Monat',
    UI_PL_1: 'Gruppen von etwa 35 Personen, Live-Unterricht und Zugang zur Community.',
    UI_PL_2: 'Gruppen von etwa 17 Personen und eine wöchentliche Rückmeldung zu Ihrer Arbeit.',
    UI_PL_3: 'Gruppen von etwa 6 Personen und zusätzlich eine Einzelstunde jede Woche.',
    UI_PL_4: 'Einzelunterricht mit Ihrer Lehrkraft, mit drei Stunden pro Woche als Grundlage.',
    UI_PL_CTA: 'Tarif wählen',
    UI_FAQ_TITLE: 'Häufige Fragen',
    UI_Q_CLOSE: 'Schließen',
  },
};
