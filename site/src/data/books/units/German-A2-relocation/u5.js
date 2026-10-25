// German A2 for moving abroad, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'At the doctor',
  goal: 'Make an appointment with a doctor and say what is wrong.',
  art: 'teacup',
  tags: { skills: ['vocabulary', 'speaking', 'reading'], topics: ['health', 'doctor', 'appointments', 'body', 'weh-tun', 'sollen', 'imperative-sie'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Making an appointment',
      about: 'The family doctor, the health insurance card and booking an appointment by phone.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In Germany, most people have a family doctor, a **Hausarzt** or **Hausärztin**. You usually go there first. If you need a specialist, the family doctor can give you a referral, an **Überweisung**. Always bring the card from your health insurance, the **Versichertenkarte**.' },
          { t: 'table', caption: 'At the doctor’s', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Praxis', 'the doctor’s practice'],
            ['die Sprechzeiten', 'the hours when the doctor sees patients'],
            ['der Termin', 'the appointment'],
            ['die Krankenkasse', 'the health insurance company'],
            ['die Versichertenkarte', 'the health insurance card'],
            ['die Überweisung', 'a referral to a specialist'],
            ['das Rezept', 'a prescription for medicine'],
            ['die Krankschreibung', 'a sick note for work'],
          ] },
          { t: 'tip', art: 'owl', md: 'In an emergency, call **112**. In Germany, when your practice is closed and it is not an emergency, you can call **116117** for a doctor on duty.' },
        ],
        [
          { t: 'dialogue', title: 'Am Telefon', lines: [
            { who: 'Frau Berger', s: 'Praxis Dr. Wolff, Berger, guten Morgen.' },
            { who: 'Tomás', s: 'Guten Morgen. Mein Name ist Tomás Silva. Ich möchte einen Termin vereinbaren.' },
            { who: 'Frau Berger', s: 'Waren Sie schon einmal bei uns?' },
            { who: 'Tomás', s: 'Nein, ich bin neu in der Stadt.' },
            { who: 'Frau Berger', s: 'Was fehlt Ihnen denn?' },
            { who: 'Tomás', s: 'Ich habe seit drei Tagen Halsschmerzen und Fieber.' },
            { who: 'Frau Berger', s: 'Können Sie heute um 11.30 Uhr kommen?' },
            { who: 'Tomás', s: 'Ja, das geht.' },
            { who: 'Frau Berger', s: 'Bringen Sie bitte Ihre Versichertenkarte mit. Und kommen Sie zehn Minuten früher, Sie müssen noch einen Fragebogen ausfüllen.' },
            { who: 'Tomás', s: 'Gut, vielen Dank. Auf Wiederhören!' },
          ] },
          { t: 'text', md: '*Was fehlt Ihnen?* means: what is wrong with you? On the phone, people say *Auf Wiederhören* instead of *Auf Wiedersehen*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Ich möchte einen Termin **vereinbaren**.', n: 'I would like to make an appointment.' },
            { s: 'Haben Sie heute noch einen Termin **frei**?', n: 'Ask this when you need a doctor soon.' },
            { s: 'Ich muss meinen Termin leider **absagen**.', n: '*absagen*: to cancel.' },
            { s: 'Kann ich den Termin **verschieben**?', n: '*verschieben*: to move it to another day.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the call. True or false?', items: [
            { q: 'Tomás war schon oft in der Praxis.', a: 'f', why: 'He is new in the town: *Ich bin neu in der Stadt.*' },
            { q: 'Tomás hat Fieber.', a: 't', why: '*Halsschmerzen und Fieber.*' },
            { q: 'Tomás soll um 11.20 Uhr in der Praxis sein.', a: 't', why: 'The appointment is at 11.30, and he should come ten minutes early.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Sie sind krank und brauchen einen Termin. Sie sagen: ___', o: ['Ich möchte einen Termin vereinbaren.', 'Ich möchte meinen Termin absagen.', 'Ich möchte meinen Termin verschieben.'], why: 'You need a new appointment: *vereinbaren*.' },
            { q: 'Was bringen Sie in die Praxis mit?', o: ['die Versichertenkarte', 'den Kassenbon', 'die Fahrkarte'], why: 'The practice needs your health insurance card.' },
            { q: 'Sie brauchen einen Termin beim Hautarzt. Ihr Hausarzt gibt Ihnen ___.', o: ['eine Überweisung', 'eine Krankschreibung', 'eine Versichertenkarte'], why: 'A referral to a specialist: *Überweisung*.' },
            { q: 'Sie sind krank und können nicht arbeiten. Die Ärztin gibt Ihnen ___.', o: ['eine Krankschreibung', 'eine Überweisung', 'einen Fragebogen'], why: 'A sick note for work: *Krankschreibung*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wann kann ich zu Ihnen kommen?', why: 'Question word, *kann*, *ich*, and *kommen* at the end.' },
            { a: 'Muss ich meine Versichertenkarte mitbringen?', why: 'A yes/no question: *muss* first, *mitbringen* at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'What hurts?',
      about: 'Say what hurts and understand what the doctor tells you to do.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'There are two easy ways to say what hurts: *Mir tut der Kopf weh* or *Ich habe Kopfschmerzen*. For two or more body parts, use *tun*: *Mir **tun** die Füße weh.*' },
          { t: 'table', caption: 'What hurts?', explain: ['head'], quiz: true, head: ['Body part', 'It hurts', 'The pain'], rows: [
            ['der Kopf', 'Mir tut der Kopf weh.', 'Kopfschmerzen'],
            ['der Hals', 'Mir tut der Hals weh.', 'Halsschmerzen'],
            ['der Bauch', 'Mir tut der Bauch weh.', 'Bauchschmerzen'],
            ['der Rücken', 'Mir tut der Rücken weh.', 'Rückenschmerzen'],
            ['das Ohr', 'Mir tut das Ohr weh.', 'Ohrenschmerzen'],
            ['der Zahn', 'Mir tut der Zahn weh.', 'Zahnschmerzen'],
          ] },
          { t: 'tip', art: 'owl', md: 'Other words you need: *Ich habe Fieber / Husten / Schnupfen.* (no article). *Ich bin erkältet* means I have a cold. *Mir ist schlecht* means I feel sick.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Mir ___ der Rücken weh.', o: ['tut', 'tun', 'ist'], why: '*der Rücken* is one thing: *tut*.' },
            { q: 'Mir ___ die Füße weh.', o: ['tun', 'tut', 'sind'], why: '*die Füße* is plural: *tun*.' },
            { q: 'Ich habe ___.', o: ['Kopfschmerzen', 'Kopf', 'Köpfe'], why: '*Ich habe Kopfschmerzen*: I have a headache.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the body parts.', items: [
            { s: 'Ich habe Husten, mein [Kopf] tut weh, und meine [Ohren] tun auch weh. Zum Glück ist mein [Bauch] in Ordnung.', why: '*der Kopf*, *die Ohren* (plural of *das Ohr*) and *der Bauch*.' },
          ] },
        ],
        [
          { t: 'dialogue', title: 'Beim Arzt', lines: [
            { who: 'Dr. Wolff', s: 'Guten Tag, Herr Silva. Was fehlt Ihnen?' },
            { who: 'Tomás', s: 'Mir tut der Hals sehr weh, und ich habe Fieber.' },
            { who: 'Dr. Wolff', s: 'Seit wann haben Sie das?' },
            { who: 'Tomás', s: 'Seit Montag. Und ich huste viel.' },
            { who: 'Dr. Wolff', s: 'Machen Sie bitte den Mund auf. … Ja, der Hals ist sehr rot. Ich gebe Ihnen ein Rezept. Nehmen Sie die Tabletten dreimal am Tag nach dem Essen.' },
            { who: 'Tomás', s: 'Ich brauche auch eine Krankschreibung für meine Arbeit.' },
            { who: 'Dr. Wolff', s: 'Kein Problem. Bleiben Sie bis Freitag zu Hause und trinken Sie viel Tee.' },
            { who: 'Tomás', s: 'Muss ich noch einmal kommen?' },
            { who: 'Dr. Wolff', s: 'Nur wenn das Fieber nicht weggeht.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the visit. True or false?', items: [
            { q: 'Tomás hat seit Montag Halsschmerzen.', a: 't', why: '*Seit Montag.*' },
            { q: 'Tomás soll die Tabletten vor dem Essen nehmen.', a: 'f', why: '*nach dem Essen*: after meals.' },
            { q: 'Tomás bekommt eine Krankschreibung.', a: 't', why: '*Kein Problem. Bleiben Sie bis Freitag zu Hause.*' },
          ] },
        ],
        [
          { t: 'text', md: 'The doctor gives instructions with **Sie** and the verb first: *Nehmen Sie …*, *Trinken Sie …*. When you tell someone later, use **sollen** + infinitive at the end: *Ich **soll** viel Tee **trinken**.* The forms: *ich soll, du sollst, er/sie soll, wir sollen, ihr sollt, sie/Sie sollen.*' },
          { t: 'examples', items: [
            { s: '„Bleiben Sie zu Hause.“ → Ich **soll** zu Hause **bleiben**.', n: 'The instruction becomes *sollen* + infinitive.' },
            { s: '„Nehmen Sie die Tabletten nach dem Essen.“ → Ich **soll** die Tabletten nach dem Essen **nehmen**.', n: '*nehmen* goes to the end.' },
          ] },
          { t: 'tip', art: 'owl', md: 'With a prescription (*Rezept*) you get your medicine at a pharmacy, an *Apotheke*. Pharmacies also sell some medicines without a prescription.' },
          { t: 'ex', kind: 'gap', h: 'Write the right form of sollen.', items: [
            { q: 'Die Ärztin sagt, ich ___ viel trinken.', a: ['soll'], why: '*ich soll*: no ending.' },
            { q: 'Herr Silva ___ bis Freitag zu Hause bleiben.', a: ['soll'], why: '*er soll*: the same as *ich soll*.' },
            { q: 'Du ___ im Bett bleiben.', a: ['sollst'], why: '*du sollst*: ending *-st*.' },
            { q: 'Die Kinder ___ heute nicht in die Schule gehen.', a: ['sollen'], why: '*die Kinder* is plural: *sollen*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'A notice and a reminder',
      about: 'Read a notice from a practice and a reminder for an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Hausarztpraxis Dr. Anna Wolff', md: '**Sprechzeiten:** Montag, Dienstag und Donnerstag von 8 bis 12 Uhr und von 15 bis 18 Uhr, Mittwoch und Freitag von 8 bis 12 Uhr.\n\nBitte vereinbaren Sie einen Termin, am Telefon oder online. Ohne Termin können Sie von Montag bis Freitag zwischen 8 und 9 Uhr kommen. Dann müssen Sie oft lange warten.\n\n**Urlaub:** Vom 26. Oktober bis zum 6. November ist die Praxis geschlossen. In dieser Zeit hilft Ihnen die Praxis Dr. Yilmaz, Bahnhofstraße 3.\n\nBitte bringen Sie immer Ihre Versichertenkarte mit. Rezepte und Überweisungen können Sie auch am Telefon bestellen und am nächsten Tag abholen.\n\nIn der Nacht und am Wochenende: Bereitschaftsdienst 116117. Im Notfall: 112.' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the notice. True, false or not given?', items: [
            { q: 'Am Mittwochnachmittag ist die Praxis geschlossen.', a: 't', why: 'On Wednesday it is only open from 8 to 12.' },
            { q: 'Ohne Termin kann man morgens von 8 bis 9 Uhr kommen.', a: 't', why: '*Ohne Termin … zwischen 8 und 9 Uhr.*' },
            { q: 'Im November ist die Praxis den ganzen Monat geschlossen.', a: 'f', why: 'Only until 6 November.' },
            { q: 'Ein Rezept muss man immer in der Praxis bestellen.', a: 'f', why: 'You can also order it *am Telefon*.' },
            { q: 'Die Praxis Dr. Yilmaz ist auch am Samstag offen.', a: 'ng', why: 'The notice does not give its opening hours.' },
          ] },
        ],
        [
          { t: 'reading', title: 'Erinnerung an Ihren Termin', md: 'Sehr geehrte Frau Nowak,\n\nwir möchten Sie an Ihren Termin in der Praxis für Orthopädie Dr. Brandt erinnern: Donnerstag, 22. Oktober, um 15.20 Uhr.\n\nBitte bringen Sie Ihre Versichertenkarte und die Überweisung von Ihrem Hausarzt mit. Wenn Sie Röntgenbilder haben, bringen Sie diese bitte auch mit. Kommen Sie bitte zehn Minuten früher. Am Empfang müssen Sie noch ein Formular ausfüllen.\n\nSie können nicht kommen? Dann sagen Sie den Termin bitte spätestens 24 Stunden vorher ab, am Telefon oder über den Link unten. So kann ein anderer Patient den Termin bekommen.\n\nBitte antworten Sie nicht auf diese E-Mail.\n\nMit freundlichen Grüßen\nIhr Praxisteam Dr. Brandt' },
          { t: 'ex', kind: 'tf', h: 'Read the reminder. True or false?', items: [
            { q: 'Frau Nowak hat am Donnerstagnachmittag einen Termin.', a: 't', why: 'Thursday at 15.20: in the afternoon.' },
            { q: 'Sie braucht eine Überweisung von ihrem Hausarzt.', a: 't', why: '*die Überweisung von Ihrem Hausarzt*.' },
            { q: 'Wenn sie nicht kommen kann, soll sie auf die E-Mail antworten.', a: 'f', why: '*Bitte antworten Sie nicht auf diese E-Mail.* She should phone or use the link.' },
            { q: 'Sie soll den Termin spätestens einen Tag vorher absagen.', a: 't', why: '*spätestens 24 Stunden vorher*: at least one day before.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
            ['die Sprechzeiten', 'dann ist die Praxis offen'],
            ['der Urlaub', 'dann ist die Praxis geschlossen'],
            ['das Rezept', 'damit bekommt man Medikamente in der Apotheke'],
            ['die Überweisung', 'damit geht man zum Facharzt'],
            ['der Notfall', 'man braucht sofort Hilfe'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Mir ___ der Kopf weh.', o: ['tut', 'tun', 'hat'], why: '*der Kopf*, one thing: *tut*.' },
      { q: 'Für einen Facharzt brauchen Sie oft eine ___ vom Hausarzt.', o: ['Überweisung', 'Krankenkasse', 'Sprechzeit'], why: 'A referral: *Überweisung*.' },
      { q: 'Die Praxis ist geschlossen, aber es ist kein Notfall. Sie rufen ___ an.', o: ['116117', '112', 'die Apotheke'], why: '116117 is the doctor on duty. 112 is for emergencies.' },
      { q: 'Am Telefon sagt man am Ende: ___', o: ['Auf Wiederhören!', 'Gute Besserung, Herr Doktor!', 'Guten Appetit!'], why: '*Auf Wiederhören*: goodbye on the phone.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Mir ___ die Augen weh. (tun)', a: ['tun'], why: '*die Augen* is plural: *tun*.' },
      { q: 'Ich ___ dreimal am Tag eine Tablette nehmen. (sollen)', a: ['soll'], why: '*ich soll*.' },
      { q: '___ Sie viel Wasser. (trinken)', a: ['Trinken'], why: 'An instruction with *Sie*: verb first.' },
      { q: 'Ich muss meinen Termin leider ___. (ab + sagen)', a: ['absagen'], why: '*absagen*: to cancel.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Muss ich meine Versichertenkarte mitbringen?', why: '*muss* first, *mitbringen* at the end.' },
      { a: 'Wann kann ich zu Ihnen kommen?', why: 'Question word, *kann*, *ich*, *kommen* at the end.' },
      { a: 'Seit wann haben Sie Fieber?', why: '*Seit wann* first, then the verb.' },
    ] },
  ],
};
