// German A2 for work, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'At work',
  goal: 'Talk about your job, your workplace and your colleagues.',
  art: 'mug',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['jobs', 'workplace', 'introductions', 'times', 'separable-verbs'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Jobs and colleagues',
      about: 'Say what you do and where you work, and introduce your colleagues.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'To say what your job is, use *Ich bin …* or *Ich arbeite als …*. There is **no article** before the job: *Ich bin Krankenpflegerin. Ich arbeite als Koch.*\n\nMost jobs have a form for men and a form for women. The form for women often ends in **-in**.' },
          { t: 'table', caption: 'Jobs and workplaces', explain: ['head'], quiz: true, head: ['Man', 'Woman', 'Workplace'], rows: [
            ['der Koch', 'die Köchin', 'in der Küche'],
            ['der Verkäufer', 'die Verkäuferin', 'im Geschäft'],
            ['der Krankenpfleger', 'die Krankenpflegerin', 'im Krankenhaus'],
            ['der Mechaniker', 'die Mechanikerin', 'in der Werkstatt'],
            ['der Lagerarbeiter', 'die Lagerarbeiterin', 'im Lager'],
            ['der Kaufmann', 'die Kauffrau', 'im Büro'],
            ['der Arzt', 'die Ärztin', 'in der Praxis'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use *bei* with the name of a company and *in* with a place: *Ich arbeite **bei** Brandt Logistik. Ich arbeite **im** Lager.* *im* is short for *in dem*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Who works where?', pairs: [
            ['die Köchin', 'in der Küche'],
            ['der Verkäufer', 'im Geschäft'],
            ['die Krankenpflegerin', 'im Krankenhaus'],
            ['der Mechaniker', 'in der Werkstatt'],
            ['die Ärztin', 'in der Praxis'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the job for a woman.', items: [
            { q: 'Mein Bruder ist Koch, und meine Schwester ist ___.', a: ['Köchin', 'Koechin'], why: '*der Koch*, *die Köchin*: the *o* changes to *ö*.' },
            { q: 'Herr Ruiz ist Lehrer, und Frau Ruiz ist auch ___.', a: ['Lehrerin'], why: 'Add *-in*: *Lehrer*, *Lehrerin*.' },
            { q: 'Er ist Arzt, und sie ist ___.', a: ['Ärztin', 'Aerztin'], why: '*der Arzt*, *die Ärztin*: the *a* changes to *ä*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Der erste Tag', lines: [
            { who: 'Herr Wolf', s: 'Guten Morgen, Frau Haddad! Willkommen bei uns. Darf ich vorstellen? Das ist Frau Novak. Sie leitet die Buchhaltung.' },
            { who: 'Frau Novak', s: 'Guten Morgen, Frau Haddad. Schön, Sie kennenzulernen.' },
            { who: 'Leila Haddad', s: 'Freut mich auch. Ich bin die neue Assistentin im Vertrieb.' },
            { who: 'Herr Wolf', s: 'Und das ist Jonas. Er arbeitet im Kundenservice.' },
            { who: 'Jonas', s: 'Hallo! Wir duzen uns hier im Team. Ich bin Jonas.' },
            { who: 'Leila Haddad', s: 'Gern! Ich bin Leila.' },
          ] },
          { t: 'text', md: 'At work, people usually say *Sie* to managers, customers and new colleagues. In many teams, colleagues say *du*. Wait until someone offers it: *Wir duzen uns hier.* or *Sollen wir uns duzen?*' },
        ],
        [
          { t: 'table', caption: 'Departments', explain: ['head', 'col1'], quiz: true, head: ['Department', 'What people do there'], rows: [
            ['die Buchhaltung', 'They pay bills and check the money.'],
            ['die Personalabteilung', 'They look after the staff.'],
            ['der Vertrieb', 'They sell the products.'],
            ['der Kundenservice', 'They answer questions from customers.'],
            ['das Lager', 'They keep the goods and send them out.'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Ich bin ___ von Beruf.', o: ['Mechaniker', 'ein Mechaniker', 'der Mechaniker'], why: 'With a job after *sein*, there is no article.' },
            { q: 'Ich arbeite ___ Brandt Logistik.', o: ['bei', 'als', 'von'], why: '*bei* + the name of a company.' },
            { q: 'Sie arbeitet ___ Verkäuferin in einem Modegeschäft.', o: ['als', 'bei', 'im'], why: '*als* + a job: *als Verkäuferin*.' },
            { q: 'Frau Novak bezahlt die Rechnungen. Sie arbeitet in der ___.', o: ['Buchhaltung', 'Küche', 'Werkstatt'], why: 'Bills and money: *die Buchhaltung*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Was sind Sie von Beruf?', why: 'A useful question: question word, verb, *Sie*, then *von Beruf*.' },
            { a: 'Bei welcher Firma arbeiten Sie?', why: '*Bei welcher Firma* is the question part. The verb comes next.' },
            { a: 'Darf ich Ihnen meine Kollegin vorstellen?', why: 'The modal verb *darf* comes first, the infinitive *vorstellen* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Your working day',
      about: 'Say when you work and what you do: von … bis …, um, and separable verbs.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To say how long you work, use **von … bis …**: *Ich arbeite von 8 bis 16 Uhr.* For one point in time, use **um**: *Um 12 Uhr mache ich Mittagspause.*\n\nAt work, people often use the 24-hour clock: *16.30 Uhr* is *sechzehn Uhr dreißig*.' },
          { t: 'table', caption: 'The working day', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['der Feierabend', 'the end of the working day'],
            ['die Mittagspause', 'the lunch break'],
            ['die Schicht', 'a shift'],
            ['die Frühschicht', 'the early shift'],
            ['die Spätschicht', 'the late shift'],
            ['die Überstunden', 'extra hours of work'],
          ] },
          { t: 'tip', art: 'owl', md: 'In German you write times with a point or a colon: *8.30 Uhr* or *8:30 Uhr*. In conversation people also say *halb neun*. Be careful: *halb neun* is 8.30, not 9.30.' },
        ],
        [
          { t: 'text', md: 'Many verbs for the working day are **separable**. The verb is in second place and the small first part goes to the end: *anfangen* becomes *Meine Schicht **fängt** um 6 Uhr **an**.*' },
          { t: 'examples', items: [
            { s: 'Ich **fange** um acht Uhr **an**.', n: '*anfangen*: to start. *fangen* is in second place, *an* at the end.' },
            { s: 'Wann **hörst** du heute **auf**?', n: '*aufhören*: to stop work.' },
            { s: 'Am Morgen **räume** ich die Waren **ein**.', n: '*einräumen*: to put the goods on the shelves.' },
            { s: 'Frau Berg **ruft** den Kunden **zurück**.', n: '*zurückrufen*: to call back.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'In der Kaffeeküche', lines: [
            { who: 'Mira', s: 'Hallo Tomasz! Du bist ja schon da. Wann hast du heute angefangen?' },
            { who: 'Tomasz', s: 'Um sechs. Ich habe diese Woche Frühschicht.' },
            { who: 'Mira', s: 'Oh, früh! Und wann hast du Feierabend?' },
            { who: 'Tomasz', s: 'Um zwei. Und du?' },
            { who: 'Mira', s: 'Ich arbeite heute von neun bis halb sechs. Am Vormittag beantworte ich E-Mails, und um elf habe ich eine Besprechung.' },
            { who: 'Tomasz', s: 'Machst du Mittagspause in der Kantine?' },
            { who: 'Mira', s: 'Ja, von zwölf bis halb eins. Kommst du mit?' },
            { who: 'Tomasz', s: 'Gern!' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Tomasz arbeitet diese Woche früh.', a: 't', why: '*Ich habe diese Woche Frühschicht.*' },
            { q: 'Tomasz hat um 14 Uhr Feierabend.', a: 't', why: '*Um zwei* in the afternoon is 14 Uhr.' },
            { q: 'Mira hat am Nachmittag eine Besprechung.', a: 'f', why: 'Her meeting is *um elf*, in the morning.' },
            { q: 'Die Mittagspause dauert eine Stunde.', a: 'f', why: '*von zwölf bis halb eins* is 30 minutes.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right form.', items: [
            { q: 'Meine Schicht ___ um 6 Uhr an. (anfangen)', a: ['fängt', 'faengt'], why: '*anfangen*: *sie fängt … an*. The *a* changes to *ä*.' },
            { q: 'Wann ___ du heute auf? (aufhören)', a: ['hörst', 'hoerst'], why: '*du hörst … auf*. *auf* goes to the end.' },
            { q: 'Ich ___ die Waren ins Regal ein. (einräumen)', a: ['räume', 'raeume'], why: '*ich räume … ein*.' },
            { q: 'Frau Berg ___ den Kunden morgen zurück. (zurückrufen)', a: ['ruft'], why: '*sie ruft … zurück*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wann fängt deine Schicht an?', why: 'Question word, verb, subject. *an* goes to the end.' },
            { a: 'Um wie viel Uhr hast du Feierabend?', why: '*Um wie viel Uhr* is the question part. The verb comes next.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'What do you do at work? Match the words.', pairs: [
            ['E-Mails', 'beantworten'],
            ['Kunden', 'beraten'],
            ['Waren', 'einräumen'],
            ['einen Termin', 'vereinbaren'],
            ['Feierabend', 'haben'],
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a staff profile',
      about: 'Read a short profile of a new colleague on a company intranet.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Many companies have an **intranet**, a website only for the staff. There you often find short profiles of new colleagues: their job, their team and how to contact them.' },
          { t: 'reading', title: 'Neu im Team: Samuel Mensah', md: 'Seit dem 1. September hat unser Lager in Bremen einen neuen Teamleiter: Samuel Mensah. Er ist 38 Jahre alt und kommt aus Ghana. Seit sechs Jahren lebt er mit seiner Familie in Deutschland.\n\nSamuel ist Fachkraft für Lagerlogistik. Vorher hat er vier Jahre bei einer Spedition in Hamburg gearbeitet. Bei uns leitet er ein Team mit zwölf Kolleginnen und Kollegen. Er plant die Schichten, kontrolliert die Lieferungen und spricht jeden Tag mit den Fahrern.\n\nSamuel arbeitet meistens von 7 bis 15.30 Uhr. Sein Büro ist im Erdgeschoss, neben dem Eingang zum Lager. Am liebsten ist er aber bei seinem Team in der Halle.\n\nIn seiner Freizeit spielt Samuel Fußball und kocht gern für Freunde. Er spricht Englisch, Twi und Deutsch.\n\nSie haben Fragen zu Lieferungen? Rufen Sie Samuel an: Durchwahl 214.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the profile. True, false or not given?', items: [
            { q: 'Samuel arbeitet seit September in Bremen.', a: 't', why: '*Seit dem 1. September hat unser Lager in Bremen einen neuen Teamleiter.*' },
            { q: 'Samuel hat früher in Hamburg gearbeitet.', a: 't', why: '*Vorher hat er vier Jahre bei einer Spedition in Hamburg gearbeitet.*' },
            { q: 'Samuel arbeitet meistens am Abend.', a: 'f', why: 'He usually works *von 7 bis 15.30 Uhr*.' },
            { q: 'Samuels Büro ist im ersten Stock.', a: 'f', why: 'It is *im Erdgeschoss*, on the ground floor.' },
            { q: 'Samuels Frau arbeitet auch in der Firma.', a: 'ng', why: 'The profile says he lives with his family, but nothing about his wife’s job.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Was macht Samuel bei der Arbeit?', o: ['Er plant die Schichten.', 'Er fährt die Lastwagen.', 'Er schreibt die Rechnungen.'], why: '*Er plant die Schichten, kontrolliert die Lieferungen …*' },
            { q: 'Wo ist Samuel am liebsten?', o: ['bei seinem Team in der Halle', 'in seinem Büro', 'bei der Spedition in Hamburg'], why: '*Am liebsten ist er aber bei seinem Team in der Halle.*' },
            { q: 'Wie kann man Samuel anrufen?', o: ['unter der Durchwahl 214', 'unter der Nummer 15.30', 'nur am Samstag'], why: 'A *Durchwahl* is the short number of one person in a company.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the four words for people at work. Do not tap names.', items: [
            { s: 'Samuel ist [Teamleiter]. Er spricht jeden Tag mit den [Fahrern] und mit seinen [Kolleginnen] und [Kollegen].', why: 'A *Teamleiter* leads a team. *Fahrer*, *Kolleginnen* and *Kollegen* are other people at work.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich arbeite ___ Krankenpfleger im Krankenhaus.', o: ['als', 'bei', 'von'], why: '*als* + a job.' },
      { q: 'Die Schicht am Nachmittag und am Abend heißt ___.', o: ['Spätschicht', 'Frühschicht', 'Mittagspause'], why: '*spät* means late: *die Spätschicht*.' },
      { q: 'Ein neuer Kollege möchte *du* sagen. Er fragt: ___', o: ['Sollen wir uns duzen?', 'Sollen wir uns siezen?', 'Darf ich vorstellen?'], why: '*duzen*: to say *du*. *siezen*: to say *Sie*.' },
      { q: 'Halb vier am Nachmittag ist ___.', o: ['15.30 Uhr', '16.30 Uhr', '14.30 Uhr'], why: '*halb vier*: half an hour before four, so 15.30.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Meine Kollegin ist Verkäufer___. (woman)', a: ['in'], why: 'The form for women often ends in *-in*: *Verkäuferin*.' },
      { q: 'Ich arbeite ___ 8 bis 16 Uhr.', a: ['von'], why: '*von … bis …*' },
      { q: 'Wann ___ dein Kurs an? (anfangen)', a: ['fängt', 'faengt'], why: '*anfangen*: *er fängt … an*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the department and the task.', pairs: [
      ['die Buchhaltung', 'Rechnungen bezahlen'],
      ['der Kundenservice', 'Fragen von Kunden beantworten'],
      ['das Lager', 'Waren einräumen'],
      ['die Personalabteilung', 'neue Mitarbeiter suchen'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Bei welcher Firma arbeiten Sie?', why: 'Question part first, then the verb.' },
      { a: 'Wann hörst du heute auf?', why: 'Separable verb: *auf* goes to the end.' },
    ] },
  ],
};
