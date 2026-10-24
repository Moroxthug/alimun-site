// German B1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Healthy living',
  goal: 'Talk about health and give advice. Use the Konjunktiv II for advice and wishes, use reflexive verbs with the accusative and the dative, and explain your problem at the doctor’s.',
  art: 'teacup',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['konjunktiv-ii', 'advice', 'reflexive-verbs', 'health', 'doctor'], goals: ['foundations', 'relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'You should… I would…',
      about: 'Give advice and talk about wishes with the Konjunktiv II.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To give advice politely, Germans use the **Konjunktiv II**. The most common forms are *sollte*, *würde* + infinitive, *hätte*, *wäre* and *könnte*.' },
          { t: 'examples', items: [
            { s: 'Du **solltest** mehr Wasser trinken.', n: '*sollte* + infinitive at the end: friendly advice.' },
            { s: 'Sie **sollten** zum Arzt gehen.', n: 'The polite form with *Sie*.' },
            { s: 'An deiner Stelle **würde** ich früher ins Bett **gehen**.', n: '*An deiner Stelle* means “if I were you”. Then comes the verb *würde*.' },
            { s: 'Ich **hätte** gern mehr Zeit für Sport.', n: 'A wish: *hätte gern*.' },
            { s: 'Ich **wäre** gern fitter.', n: 'A wish with *sein*: *wäre gern*.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Konjunktiv II', quiz: true, head: ['', 'werden', 'haben', 'sein', 'sollen', 'können'], rows: [
            ['ich', 'würde', 'hätte', 'wäre', 'sollte', 'könnte'],
            ['du', 'würdest', 'hättest', 'wärst', 'solltest', 'könntest'],
            ['er / sie / es', 'würde', 'hätte', 'wäre', 'sollte', 'könnte'],
            ['wir', 'würden', 'hätten', 'wären', 'sollten', 'könnten'],
            ['ihr', 'würdet', 'hättet', 'wärt', 'solltet', 'könntet'],
            ['sie / Sie', 'würden', 'hätten', 'wären', 'sollten', 'könnten'],
          ] },
          { t: 'tip', art: 'owl', md: 'Most Konjunktiv II forms look like the Präteritum with an umlaut: *hatte → hätte*, *war → wäre*, *konnte → könnte*. *Sollte* is the exception: it has no umlaut and looks exactly like the Präteritum.' },
          { t: 'text', md: 'With most other verbs, use *würde* + infinitive: *Ich würde jeden Tag spazieren gehen.* The infinitive goes to the end.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Du hustest schon so lange. Du ___ zum Arzt gehen.', o: ['solltest', 'sollst', 'sollte'], why: 'Advice to *du*: *du solltest*.' },
            { q: 'An deiner Stelle ___ ich weniger Kaffee trinken.', o: ['würde', 'werde', 'wurde'], why: '*würde* is the Konjunktiv II. *Werde* is the present tense and *wurde* the Präteritum.' },
            { q: 'Ich ___ gern mehr Energie am Morgen.', o: ['hätte', 'hatte', 'wäre'], why: 'A wish with *haben*: *ich hätte gern*.' },
            { q: 'Wir ___ gern im Urlaub, aber wir müssen arbeiten.', o: ['wären', 'hätten', 'würden'], why: 'A wish with *sein*: *wir wären gern im Urlaub*.' },
            { q: '___ Sie mir bitte etwas gegen Kopfschmerzen geben?', o: ['Könnten', 'Konnten', 'Kannten'], why: 'A polite request: *Könnten Sie …?* *Kannten* comes from *kennen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the Konjunktiv II of the verb in brackets.', items: [
            { q: 'Ihr ___ mehr Obst essen. (sollen)', a: ['solltet'], why: '*ihr solltet*' },
            { q: 'Wenn ich mehr Zeit ___, würde ich jeden Tag schwimmen. (haben)', a: ['hätte'], why: '*ich hätte*: the Präteritum *hatte* + umlaut.' },
            { q: 'Es ___ besser, wenn du heute zu Hause bleibst. (sein)', a: ['wäre'], why: '*es wäre besser*: a common way to give advice.' },
            { q: '___ du mir die Telefonnummer von deinem Zahnarzt geben? (können)', a: ['Könntest'], why: 'A polite question to *du*: *Könntest du …?*' },
            { q: 'Ich ___ an deiner Stelle mehr schlafen. (werden)', a: ['würde'], why: '*ich würde* + infinitive at the end.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Du solltest mehr Wasser trinken.', why: '*solltest* in position 2, the infinitive at the end.' },
            { a: 'An deiner Stelle würde ich zum Arzt gehen.', why: '*An deiner Stelle* is in position 1, so the verb *würde* comes next, then *ich*.' },
            { a: 'Sie sollten weniger Zucker essen.', why: '*sollten* in position 2, the infinitive at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Reflexive verbs',
      about: 'Use reflexive pronouns in the accusative and the dative.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'A **reflexive verb** has a pronoun that refers back to the subject: *Ich erhole mich.* Usually the pronoun is in the **accusative**. But when the sentence already has another accusative object, the reflexive pronoun is in the **dative**.' },
          { t: 'table', caption: 'Reflexive pronouns', quiz: true, head: ['', 'Akkusativ', 'Dativ'], rows: [
            ['ich', 'mich', 'mir'],
            ['du', 'dich', 'dir'],
            ['er / sie / es', 'sich', 'sich'],
            ['wir', 'uns', 'uns'],
            ['ihr', 'euch', 'euch'],
            ['sie / Sie', 'sich', 'sich'],
          ] },
          { t: 'tip', art: 'owl', md: 'Only *ich* and *du* have different forms: *mich / mir*, *dich / dir*. All the others are the same in both cases.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich wasche **mich**.', n: 'No other object: accusative, *mich*.' },
            { s: 'Ich wasche **mir** die Hände.', n: '*die Hände* is the accusative object, so the reflexive pronoun is dative: *mir*.' },
            { s: 'Erholst du **dich** gut im Urlaub?', n: '*sich erholen*: accusative.' },
            { s: 'Hast du **dir** den Arm gebrochen?', n: '*den Arm* is the accusative object: dative, *dir*.' },
            { s: 'Wir müssen **uns** beeilen.', n: '*uns* is the same in both cases.' },
          ] },
          { t: 'text', md: 'With parts of the body, German uses the dative pronoun and *der, die, das*, not *mein* or *dein*: *Ich putze mir die Zähne.* Other common reflexive verbs are *sich ausruhen*, *sich bewegen*, *sich fühlen*, *sich verletzen* and *sich etwas vornehmen*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Mich or mir? Dich or dir? Choose.', items: [
            { q: 'Ich muss ___ heute ausruhen.', o: ['mich', 'mir'], why: 'No other object: accusative, *mich*.' },
            { q: 'Ich kämme ___ die Haare.', o: ['mir', 'mich'], why: '*die Haare* is the object: dative, *mir*.' },
            { q: 'Fühlst du ___ besser?', o: ['dich', 'dir'], why: '*sich fühlen*, no other object: *dich*.' },
            { q: 'Hast du ___ beim Sport verletzt?', o: ['dich', 'dir'], why: 'No other object: accusative, *dich*.' },
            { q: 'Hast du ___ das Knie verletzt?', o: ['dir', 'dich'], why: '*das Knie* is the object: dative, *dir*.' },
            { q: 'Ich habe ___ vorgenommen, mehr Sport zu machen.', o: ['mir', 'mich'], why: '*sich etwas vornehmen*: the plan is the object, so the pronoun is dative.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the reflexive pronoun.', items: [
            { q: 'Nach der Arbeit lege ich ___ eine halbe Stunde hin.', a: ['mich'], why: '*sich hinlegen*, no other object: *mich*.' },
            { q: 'Wascht ihr ___ vor dem Essen die Hände?', a: ['euch'], why: '*ihr*: *euch*, the same in the accusative and the dative.' },
            { q: 'Herr Ito bewegt ___ zu wenig.', a: ['sich'], why: 'Third person: *sich*.' },
            { q: 'Du solltest ___ eine Pause gönnen.', a: ['dir'], why: '*eine Pause* is the accusative object: dative, *dir*.' },
            { q: 'Wir haben ___ im Urlaub gut erholt.', a: ['uns'], why: '*wir*: *uns*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Ich putze mir die Zähne.', why: 'Dative pronoun *mir*, then the object *die Zähne*.' },
            { a: 'Hast du dir wehgetan?', why: 'Question: the verb *hast* first, the participle at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'At the doctor’s',
      about: 'Describe symptoms and understand the doctor.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'In Germany, you usually go to your family doctor (*der Hausarzt, die Hausärztin*) first. You need an appointment, and you show your health insurance card (*die Versichertenkarte*). If you are ill and cannot work, the doctor writes you a sick note (*die Krankschreibung*). Many employers need it from the fourth day of illness; some want it from the first day.' },
          { t: 'table', caption: 'How are you?', explain: ['head'], quiz: true, head: ['Symptom', 'Example'], rows: [
            ['die Kopfschmerzen (Pl.)', 'Ich habe seit gestern Kopfschmerzen.'],
            ['das Fieber', 'Mein Sohn hat 39 Grad Fieber.'],
            ['der Husten', 'Ich habe einen starken Husten.'],
            ['erkältet sein', 'Sie ist erkältet und bleibt zu Hause.'],
            ['schwindelig sein', 'Mir ist oft schwindelig.'],
            ['wehtun', 'Mein Rücken tut weh. Meine Füße tun weh.'],
            ['das Rezept', 'Die Ärztin schreibt mir ein Rezept.'],
            ['die Überweisung', 'Ich brauche eine Überweisung zum Hautarzt.'],
          ] },
        ],
        [
          { t: 'tip', art: 'owl', md: '*Mir ist schlecht* (I feel sick) and *Mir ist schwindelig* (I feel dizzy) use *mir*, not *ich*. With *wehtun*, the body part is the subject: *Mein Kopf **tut** weh*, *Meine Ohren **tun** weh*.' },
          { t: 'dialogue', title: 'In der Praxis', lines: [
            { who: 'Dr. Schulte', s: 'Guten Morgen, Frau Asante. Was fehlt Ihnen?' },
            { who: 'Abena', s: 'Ich habe seit drei Tagen Halsschmerzen und Husten. Heute Nacht hatte ich auch Fieber.' },
            { who: 'Dr. Schulte', s: 'Nehmen Sie schon Medikamente?' },
            { who: 'Abena', s: 'Nein, ich trinke nur viel Tee mit Honig.' },
            { who: 'Dr. Schulte', s: 'Sie haben eine Erkältung. Sie sollten ein paar Tage zu Hause bleiben und sich ausruhen. Ich schreibe Sie bis Freitag krank.' },
            { who: 'Abena', s: 'Danke. Brauche ich ein Rezept?' },
            { who: 'Dr. Schulte', s: 'Ja, ich schreibe Ihnen ein Rezept für ein Hustenmittel. Wenn das Fieber steigt, kommen Sie bitte wieder.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the doctor’s question and the answer.', pairs: [
            ['Was fehlt Ihnen?', 'Ich habe starke Halsschmerzen.'],
            ['Seit wann haben Sie die Schmerzen?', 'Seit Montag.'],
            ['Nehmen Sie Medikamente?', 'Nein, nur Tee mit Honig.'],
            ['Haben Sie auch Fieber?', 'Ja, gestern Abend hatte ich 38,5.'],
            ['Brauchen Sie eine Krankschreibung?', 'Ja, bitte, für meinen Arbeitgeber.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Für die Apotheke brauche ich ein ___ von der Ärztin.', o: ['Rezept', 'Fieber', 'Termin'], why: 'You need a prescription for many medicines: *das Rezept*.' },
            { q: 'Mein Hausarzt schickt mich mit einer ___ zum Orthopäden.', o: ['Überweisung', 'Krankschreibung', 'Versichertenkarte'], why: 'A referral to a specialist: *die Überweisung*.' },
            { q: 'Ich kann nicht arbeiten. Die Ärztin hat mich für eine Woche ___.', o: ['krankgeschrieben', 'erkältet', 'verletzt'], why: '*jemanden krankschreiben*: give someone a sick note.' },
            { q: 'Mir ist ___. Ich glaube, ich muss mich setzen.', o: ['schwindelig', 'Husten', 'Schmerzen'], why: '*Mir ist schwindelig*: I feel dizzy.' },
            { q: 'An der Anmeldung zeigen Sie Ihre ___.', o: ['Versichertenkarte', 'Überweisung zum Zahnarzt', 'Krankheit'], why: 'At the reception desk you show your health insurance card.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Meine Füße tun weh.', 'Meine Füße tut weh.', 'Ich tue die Füße weh.'], why: '*Meine Füße* is plural, so *tun*.' },
            { q: '', o: ['Mir ist schlecht.', 'Ich bin schlecht.', 'Mich ist schlecht.'], why: 'To say you feel sick: *Mir ist schlecht*. *Ich bin schlecht* means you are bad at something.' },
            { q: '', o: ['Ich habe seit zwei Tagen Fieber.', 'Ich bin seit zwei Tagen Fieber.', 'Ich habe vor zwei Tagen Fieber.'], why: 'It started two days ago and still continues: *seit* + the present tense.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Why we need sleep',
      about: 'Read an article about sleep and find the advice in it.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Gut schlafen – aber wie?', md: 'Fast jeder kennt das: Man liegt im Bett, ist müde und kann trotzdem nicht einschlafen. Dabei ist Schlaf sehr wichtig für die Gesundheit. In der Nacht erholt sich der Körper, und das Gehirn ordnet, was wir am Tag gelernt haben. Die meisten Erwachsenen brauchen sieben bis neun Stunden Schlaf.\n\nWer schlecht schläft, sollte zuerst seine Gewohnheiten ändern. Es hilft, jeden Tag zur gleichen Zeit ins Bett zu gehen, auch am Wochenende. Am Abend sollte man keinen Kaffee mehr trinken und nicht zu viel essen. Auch das Handy ist ein Problem: Viele Menschen lesen im Bett noch Nachrichten und können sich danach nicht entspannen. Besser wäre ein Buch oder ruhige Musik.\n\nBewegung am Tag hilft ebenfalls, zum Beispiel ein Spaziergang in der Mittagspause. Das Schlafzimmer sollte dunkel, ruhig und eher kühl sein.\n\nUnd wenn man trotzdem wach liegt? Dann ist es besser, wieder aufzustehen und etwas Ruhiges zu machen, bis man müde wird. Wenn die Probleme länger als ein paar Wochen dauern, sollte man mit dem Hausarzt sprechen.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'In der Nacht erholt sich der Körper.', a: 't', why: '*In der Nacht erholt sich der Körper.*' },
            { q: 'Erwachsene brauchen mindestens zehn Stunden Schlaf.', a: 'f', why: 'Most adults need seven to nine hours.' },
            { q: 'Am Wochenende sollte man länger schlafen.', a: 'f', why: 'The text says to go to bed at the same time every day, at the weekend too.' },
            { q: 'Das Schlafzimmer sollte warm sein.', a: 'f', why: 'It should be *eher kühl*: rather cool.' },
            { q: 'Kinder brauchen mehr Schlaf als Erwachsene.', a: 'ng', why: 'The text does not talk about children.' },
            { q: 'Wenn man lange nicht gut schläft, sollte man zum Arzt gehen.', a: 't', why: 'If the problems last more than a few weeks, talk to your family doctor.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language in the text.', items: [
            { q: '„Besser wäre ein Buch oder ruhige Musik.“ What is this?', o: ['Advice, in the Konjunktiv II.', 'A wish for the past.', 'A rule that everyone must follow.'], why: '*wäre* is the Konjunktiv II of *sein*. Here it gives advice.' },
            { q: '„… und können sich danach nicht entspannen“: why sich?', o: ['Sich entspannen is a reflexive verb.', 'Sich means “each other” here.', 'Sich is the dative of sie.'], why: '*sich entspannen*: to relax. The pronoun refers back to *viele Menschen*.' },
            { q: 'What should you do if you cannot sleep?', o: ['Get up and do something quiet.', 'Read the news on your phone.', 'Drink a coffee.'], why: '*Dann ist es besser, wieder aufzustehen und etwas Ruhiges zu machen.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Du ___ nicht so viel arbeiten.', o: ['solltest', 'sollst', 'würdest'], why: 'Friendly advice: *du solltest* + infinitive.' },
      { q: 'An deiner Stelle ___ ich mich ausruhen.', o: ['würde', 'werde', 'hätte'], why: '*An deiner Stelle würde ich* + infinitive.' },
      { q: 'Ich wasche ___ die Haare.', o: ['mir', 'mich', 'sich'], why: '*die Haare* is the object: dative, *mir*.' },
      { q: 'Wir haben ___ sehr gefreut.', o: ['uns', 'euch', 'sich'], why: '*wir*: *uns*.' },
      { q: 'Mit dieser ___ können Sie zur Fachärztin gehen.', o: ['Überweisung', 'Erkältung', 'Fieber'], why: 'A referral to a specialist: *die Überweisung*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Wenn ich Zeit ___, würde ich mehr Sport machen. (haben, Konjunktiv II)', a: ['hätte'], why: '*ich hätte*' },
      { q: '___ Sie bitte das Fenster öffnen? (können, Konjunktiv II)', a: ['Könnten'], why: 'A polite request: *Könnten Sie …?*' },
      { q: 'Hast du ___ beim Fußball verletzt? (reflexive pronoun)', a: ['dich'], why: 'No other object: accusative, *dich*.' },
      { q: 'Mein Rücken ___ seit Tagen weh. (tun)', a: ['tut'], why: '*Mein Rücken* is singular: *tut weh*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Sie sollten sich ein paar Tage ausruhen.', why: 'The reflexive pronoun *sich* comes right after the modal verb here; the infinitive is at the end.' },
      { a: 'Wir sollten uns mehr bewegen.', why: '*sich bewegen*: the pronoun *uns* comes right after the modal verb, the infinitive at the end.' },
    ] },
    { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
      { q: '', o: ['Mir ist schwindelig.', 'Ich bin schwindelig.', 'Mich ist schwindelig.'], why: 'To say you feel dizzy: *Mir ist schwindelig*.' },
      { q: '', o: ['Ich putze mir die Zähne.', 'Ich putze mich die Zähne.', 'Ich putze meine Zähne mir.'], why: 'Body part as object: dative pronoun *mir* + *die Zähne*.' },
      { q: '', o: ['Du solltest früher ins Bett gehen.', 'Du solltest gehen früher ins Bett.', 'Du sollst früher ins Bett gegangen.'], why: '*solltest* in position 2, the infinitive at the end.' },
    ] },
  ],
};
