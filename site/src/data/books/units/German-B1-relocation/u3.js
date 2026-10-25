// German B1 for moving abroad, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'At the doctor',
  goal: 'Use the health system: family doctor, specialists, pharmacy and sick notes.',
  art: 'teacup',
  tags: { skills: ['speaking', 'reading', 'vocabulary', 'grammar'], topics: ['health', 'symptoms', 'seit-present', 'pharmacy', 'sick-note'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Symptoms and since when',
      about: 'Say what is wrong and how long you have had it, with seit.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'At the doctor’s, say **what** is wrong and **since when**. German uses the **present tense** with *seit* for something that started in the past and is still going on. English uses *have had* here, but German does not use the Perfekt: *Ich habe **seit** drei Tagen Fieber.*' },
          { t: 'examples', items: [
            { s: 'Ich habe **seit drei Tagen** Halsschmerzen.', n: 'Present tense: the pain started three days ago and has not stopped.' },
            { s: 'Mein Rücken tut **seit einer Woche** weh.', n: '*seit* takes the dative: *eine Woche* becomes *einer Woche*.' },
            { s: 'Ich huste **seit dem Wochenende**.', n: 'Dative: *das Wochenende*, *seit dem Wochenende*.' },
            { s: 'Mir ist **seit heute Morgen** schlecht.', n: '*Mir ist schlecht*: I feel sick. *mir* is dative.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the dative plural, nouns add *-n*: *seit zwei Tag**en***, *seit drei Monat**en***. *Seit wann …?* asks since when.' },
        ],
        [
          { t: 'table', caption: 'Saying what is wrong', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['Ich habe Kopfschmerzen.', 'I have a headache.'],
            ['Ich habe Fieber.', 'I have a temperature.'],
            ['Ich habe Husten und Schnupfen.', 'I have a cough and a cold.'],
            ['Mir ist schwindelig.', 'I feel dizzy.'],
            ['Mir ist übel.', 'I feel sick, as if I might vomit.'],
            ['Mein Knie tut weh.', 'My knee hurts.'],
            ['Ich habe mich erkältet.', 'I have caught a cold.'],
          ] },
          { t: 'text', md: 'Words with *-schmerzen* are usually plural: *Kopfschmerzen*, *Bauchschmerzen*, *Rückenschmerzen*. With *wehtun*, the verb agrees with the body part: *Mein Fuß **tut** weh*, but *Meine Füße **tun** weh*.' },
        ],
        [
          { t: 'dialogue', title: 'In der Hausarztpraxis', lines: [
            { who: 'Dr. Wolff', s: 'Guten Morgen, Herr Nguyen. Was fehlt Ihnen denn?' },
            { who: 'Herr Nguyen', s: 'Ich habe seit vier Tagen starke Halsschmerzen und Husten.' },
            { who: 'Dr. Wolff', s: 'Haben Sie auch Fieber?' },
            { who: 'Herr Nguyen', s: 'Ja, gestern Abend hatte ich 38,5. Und mir ist oft kalt.' },
            { who: 'Dr. Wolff', s: 'Nehmen Sie schon Medikamente?' },
            { who: 'Herr Nguyen', s: 'Nur Tabletten gegen die Schmerzen, aber die helfen nicht viel.' },
            { who: 'Dr. Wolff', s: 'Gut. Ich höre jetzt Ihre Lunge ab. Atmen Sie bitte tief ein … und wieder aus.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the visit. True or false?', items: [
            { q: 'Herr Nguyen hat seit vier Tagen Halsschmerzen.', a: 't', why: '*seit vier Tagen starke Halsschmerzen*.' },
            { q: 'Er hat kein Fieber.', a: 'f', why: 'Yesterday evening he had 38.5 degrees.' },
            { q: 'Die Tabletten helfen ihm sehr gut.', a: 'f', why: '*die helfen nicht viel*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete what the patients say.', items: [
            { q: 'Ich habe seit zwei ___ Fieber. (Tag)', a: ['Tagen'], why: '*seit* + dative plural: *Tagen*, with *-n*.' },
            { q: 'Ich habe seit ___ Woche Bauchschmerzen. (eine)', a: ['einer'], why: '*seit* + dative: *einer Woche*.' },
            { q: 'Meine Augen ___ seit gestern weh. (tun)', a: ['tun'], why: '*Meine Augen* is plural: *tun weh*.' },
            { q: 'Seit wann ___ Sie die Schmerzen? (haben)', a: ['haben'], why: 'Present tense with *seit wann*: *haben Sie*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Ich habe seit einer Woche Rückenschmerzen.', 'Ich habe seit eine Woche Rückenschmerzen.', 'Ich habe vor einer Woche Rückenschmerzen.'], why: '*seit* + dative, *einer Woche*. *vor* is for a point in the past and does not go with the present here.' },
            { q: '', o: ['Mir ist schwindelig.', 'Ich ist schwindelig.', 'Mich ist schwindelig.'], why: 'With *schwindelig*, *schlecht* and *übel* you use the dative: *mir ist*.' },
            { q: '', o: ['Mein Bauch tut weh.', 'Mein Bauch tun weh.', 'Mein Bauch hat weh.'], why: 'One body part, singular verb: *tut weh*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Referrals, pharmacy and sick notes',
      about: 'From the family doctor to the specialist and the pharmacy, and what your employer needs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'In Germany most people first go to their family doctor, the **Hausarzt** or **Hausärztin**. For a specialist, a **Facharzt**, the family doctor often writes a referral, an **Überweisung**. Always bring your health insurance card, the **Gesundheitskarte**.' },
          { t: 'table', caption: 'Words for the health system', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['der Hausarzt / die Hausärztin', 'family doctor'],
            ['der Facharzt / die Fachärztin', 'specialist, for example for skin or eyes'],
            ['die Überweisung', 'referral to a specialist'],
            ['das Rezept', 'prescription'],
            ['rezeptfrei', 'you can buy it without a prescription'],
            ['die Apotheke', 'pharmacy'],
            ['die Krankenkasse', 'health insurance company'],
          ] },
          { t: 'tip', art: 'owl', md: '*Überweisung* has a second meaning: a bank transfer. At the doctor’s it is always the referral.' },
        ],
        [
          { t: 'dialogue', title: 'In der Apotheke', lines: [
            { who: 'Apothekerin', s: 'Guten Tag, was kann ich für Sie tun?' },
            { who: 'Lina', s: 'Ich habe ein Rezept von meiner Ärztin. Sie hat gesagt, es ist auf meiner Karte.' },
            { who: 'Apothekerin', s: 'Dann stecken Sie bitte Ihre Gesundheitskarte hier ein. So, das Antibiotikum haben wir da.' },
            { who: 'Lina', s: 'Wie oft muss ich die Tabletten nehmen?' },
            { who: 'Apothekerin', s: 'Dreimal täglich eine Tablette, nach dem Essen. Nehmen Sie sie sieben Tage lang, auch wenn es Ihnen früher besser geht.' },
            { who: 'Lina', s: 'In Ordnung. Haben Sie auch etwas gegen Halsschmerzen?' },
            { who: 'Apothekerin', s: 'Ja, diese Lutschtabletten. Die sind rezeptfrei.' },
          ] },
          { t: 'text', md: 'Prescriptions in Germany are now usually electronic, an **E-Rezept**: the pharmacy reads it from your card. At night and on Sundays, one pharmacy in the area is open for emergencies, the **Notdienst**. The other pharmacies show its address on the door.' },
          { t: 'ex', kind: 'order', h: 'Build sentences for the doctor’s and the pharmacy.', items: [
            { a: 'Ich brauche eine Überweisung zum Hautarzt.', why: '*eine Überweisung zu* + dative: *zum Hautarzt*.' },
            { a: 'Wie oft muss ich die Tabletten nehmen?', why: 'Question word, then the modal verb *muss*, the infinitive *nehmen* at the end.' },
            { a: 'Haben Sie etwas gegen Kopfschmerzen?', why: 'A yes/no question starts with the verb. *etwas gegen*: something for.' },
          ] },
        ],
        [
          { t: 'text', md: 'If you are ill and cannot work, tell your employer on the **first day**, if possible before work starts. You usually need a sick note, the **Krankmeldung** or *Arbeitsunfähigkeitsbescheinigung*, if you are ill for more than three days. Some employers want it from the first day. The practice usually sends it electronically to your health insurance company, but you must still tell your employer yourself.' },
          { t: 'reading', title: 'Nachricht an die Chefin', md: 'Guten Morgen, Frau Krüger,\n\nleider bin ich krank und kann heute nicht zur Arbeit kommen. Ich habe hohes Fieber. Ich gehe heute Vormittag zum Arzt und melde mich danach bei Ihnen.\n\nViele Grüße\nTomasz Nowak' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['die Überweisung', 'ein Papier für den Facharzt'],
            ['das Rezept', 'damit bekommen Sie ein Medikament in der Apotheke'],
            ['die Krankmeldung', 'der Nachweis für den Arbeitgeber, dass Sie krank sind'],
            ['die Gesundheitskarte', 'die Karte von Ihrer Krankenkasse'],
            ['rezeptfrei', 'ohne Rezept zu kaufen'],
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you do?', items: [
            { q: 'Sie haben morgens Fieber und können nicht arbeiten. Zuerst ___', o: ['informieren Sie Ihren Arbeitgeber.', 'gehen Sie zur Apotheke und kaufen ein Rezept.', 'warten Sie drei Tage und sagen nichts.'], why: 'Tell your employer on the first day, before work if possible.' },
            { q: 'Sie brauchen einen Termin bei einer Hautärztin. Ihr Hausarzt gibt Ihnen ___', o: ['eine Überweisung.', 'eine Krankmeldung.', 'eine Lutschtablette.'], why: 'The referral to a specialist is the *Überweisung*.' },
            { q: 'Es ist Sonntag und Sie brauchen dringend ein Medikament. Sie suchen ___', o: ['die Notdienst-Apotheke.', 'Ihre Hausarztpraxis.', 'die Krankenkasse.'], why: 'On Sundays a pharmacy on duty, the *Notdienst*, is open.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A letter from your health insurance',
      about: 'Read what a health insurance company tells its members.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Ihre Krankenkasse informiert: Was tun, wenn Sie krank sind?', md: 'Wenn Sie krank sind, ist Ihre Hausarztpraxis meistens die erste Adresse. Ihre Hausärztin oder Ihr Hausarzt kennt Ihre Krankengeschichte und schickt Sie, wenn nötig, mit einer Überweisung zu einer Fachärztin oder einem Facharzt. Bringen Sie zu jedem Termin Ihre Gesundheitskarte mit.\n\nUnd wenn die Praxis geschlossen ist? Abends, nachts und am Wochenende hilft Ihnen der ärztliche Bereitschaftsdienst unter der Telefonnummer 116 117. Dort sagt man Ihnen, wo die nächste Bereitschaftspraxis ist. In manchen Fällen kommt auch ein Arzt zu Ihnen nach Hause. In einem Notfall, zum Beispiel bei starken Schmerzen in der Brust oder nach einem schweren Unfall, rufen Sie sofort die 112 an.\n\nWenn Sie nicht arbeiten können, schickt Ihre Praxis die Krankmeldung elektronisch an uns. Ihr Arbeitgeber kann sie dann bei uns abrufen. Informieren Sie Ihren Arbeitgeber aber trotzdem selbst, und zwar am ersten Tag.\n\nGesund bleiben lohnt sich: Wir bezahlen regelmäßige Vorsorgeuntersuchungen, zum Beispiel den Check-up beim Hausarzt und Kontrollen beim Zahnarzt. Fragen Sie in Ihrer Praxis, welche Untersuchungen für Ihr Alter sinnvoll sind.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text. True, false or not given?', items: [
            { q: 'Bei einer Krankheit geht man meistens zuerst zum Hausarzt.', a: 't', why: '*Ihre Hausarztpraxis ist meistens die erste Adresse.*' },
            { q: 'Unter 116 117 erreicht man den Bereitschaftsdienst nur am Wochenende.', a: 'f', why: 'Also in the evening and at night: *Abends, nachts und am Wochenende*.' },
            { q: 'Bei starken Schmerzen in der Brust ruft man die 112 an.', a: 't', why: 'That is an emergency: *rufen Sie sofort die 112 an*.' },
            { q: 'Der Arbeitgeber bekommt die Krankmeldung direkt vom Patienten.', a: 'f', why: 'The practice sends it to the health insurance company, and the employer gets it from there.' },
            { q: 'Die Krankenkasse bezahlt auch eine Brille.', a: 'ng', why: 'The text does not talk about glasses.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Who or what helps? Choose the right answer.', items: [
            { q: 'Es ist Samstagabend, Sie haben hohes Fieber, aber es ist kein Notfall. Sie rufen ___ an.', o: ['die 116 117', 'die 112', 'Ihren Arbeitgeber'], why: 'When the practice is closed and it is not an emergency: the *Bereitschaftsdienst*, 116 117.' },
            { q: 'Ihr Nachbar hatte einen schweren Unfall. Sie rufen ___ an.', o: ['die 112', 'die 116 117', 'die Krankenkasse'], why: 'A serious accident is an emergency: 112.' },
            { q: 'Sie möchten wissen, welche Vorsorgeuntersuchungen für Sie sinnvoll sind. Sie fragen ___.', o: ['in Ihrer Arztpraxis', 'in der Apotheke', 'Ihren Arbeitgeber'], why: '*Fragen Sie in Ihrer Praxis, welche Untersuchungen für Ihr Alter sinnvoll sind.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two telephone numbers in the sentence.', items: [
            { s: 'Wenn die Praxis zu ist, wählen Sie die [116 117], im Notfall die [112].', why: '116 117 for the doctor on duty, 112 for emergencies.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ich habe ___ drei Tagen Kopfschmerzen.', o: ['seit', 'vor', 'für'], why: 'Still going on: present tense + *seit*.' },
      { q: 'Für einen Termin beim Facharzt bekommen Sie vom Hausarzt oft eine ___.', o: ['Überweisung', 'Krankmeldung', 'Gesundheitskarte'], why: 'The referral: *Überweisung*.' },
      { q: 'Ein Medikament ohne Rezept ist ___.', o: ['rezeptfrei', 'krankgeschrieben', 'verschrieben'], why: '*rezeptfrei*: no prescription needed.' },
      { q: 'Im Notfall rufen Sie in Deutschland die ___ an.', o: ['112', '116 117', '115'], why: '112: ambulance and fire service.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich habe seit zwei ___ Husten. (Woche)', a: ['Wochen'], why: '*seit* + dative plural: *zwei Wochen*.' },
      { q: '___ ist schwindelig. (ich, Dativ)', a: ['Mir'], why: '*Mir ist schwindelig*.' },
      { q: 'Meine Füße ___ weh. (tun)', a: ['tun'], why: 'Plural: *tun weh*.' },
      { q: 'Ich bin krank und kann heute nicht zur ___ kommen.', a: ['Arbeit'], why: '*zur Arbeit kommen*: come to work.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'Wenn Sie krank sind, informieren Sie Ihren Arbeitgeber am ersten Tag.', a: 't', why: 'Always on the first day, even if the sick note is sent electronically.' },
      { q: 'Mit einem E-Rezept braucht man in der Apotheke die Gesundheitskarte nicht.', a: 'f', why: 'The pharmacy reads the *E-Rezept* from your card.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Seit wann haben Sie die Schmerzen?', why: '*Seit wann* first, then the verb *haben*.' },
      { a: 'Wie oft muss ich das Medikament nehmen?', why: 'Question word, *muss*, then *nehmen* at the end.' },
    ] },
  ],
};
