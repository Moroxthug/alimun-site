// German A1 for work, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Appointments and shifts',
  goal: 'Make a simple appointment and read a shift plan.',
  art: 'snail',
  tags: { skills: ['speaking', 'grammar', 'vocabulary', 'reading'], topics: ['appointments', 'days-of-the-week', 'times', 'shifts', 'koennen', 'moechten', 'modal-verbs'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Do you have time on Tuesday?',
      about: 'Suggest a day and a time, and say yes or no to an appointment.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'A **Termin** is an appointment or a meeting at a fixed time. To suggest a time, ask *Haben Sie am Dienstag Zeit?* or *Geht es am Dienstag um zehn?*\n\nTo say yes: *Ja, das geht.* To say no: *Nein, das geht leider nicht.*' },
          { t: 'dialogue', title: 'A short meeting', lines: [
            { who: 'Frau Lange', s: 'Herr Demir, ich brauche einen Termin. Haben Sie am Dienstag Zeit?' },
            { who: 'Herr Demir', s: 'Am Dienstag? Wann denn?' },
            { who: 'Frau Lange', s: 'Geht es um zehn Uhr?' },
            { who: 'Herr Demir', s: 'Nein, das geht leider nicht. Um zehn habe ich einen Kunden. Geht es um elf?' },
            { who: 'Frau Lange', s: 'Ja, das geht. Also am Dienstag um elf. Mein Büro ist Zimmer 4.' },
            { who: 'Herr Demir', s: 'Gut, bis Dienstag!' },
          ] },
        ],
        [
          { t: 'table', caption: 'Making an appointment', explain: ['head', 'col0'], quiz: true, head: ['What you want to do', 'What you say'], rows: [
            ['Ask if someone is free.', 'Haben Sie am Dienstag Zeit?'],
            ['Suggest a time.', 'Geht es um zehn Uhr?'],
            ['Ask when.', 'Wann haben Sie Zeit?'],
            ['Say yes.', 'Ja, das geht. Gut!'],
            ['Say no.', 'Nein, das geht leider nicht.'],
            ['Say no and why.', 'Am Montag kann ich nicht. Da habe ich frei.'],
            ['Say goodbye until then.', 'Bis Dienstag!'],
          ] },
          { t: 'tip', art: 'owl', md: '*leider* means *I am sorry, but …*. It makes a no more polite: *Das geht **leider** nicht.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
            ['Haben Sie am Freitag Zeit?', 'Ja, am Freitag habe ich Zeit.'],
            ['Geht es um neun Uhr?', 'Nein, das geht leider nicht.'],
            ['Wann haben Sie Zeit?', 'Am Mittwoch um zwei.'],
            ['Geht es am Montag um elf?', 'Ja, das geht. Bis Montag!'],
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Frau Lange braucht einen Termin.', a: 't', why: '*ich brauche einen Termin.*' },
            { q: 'Um zehn Uhr hat Herr Demir Zeit.', a: 'f', why: '*Um zehn habe ich einen Kunden.*' },
            { q: 'Der Termin ist um elf Uhr.', a: 't', why: '*Also am Dienstag um elf.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Ihre Kollegin fragt: Geht es um drei? Sie haben Zeit.', o: ['Ja, das geht.', 'Nein, das geht leider nicht.', 'Wann haben Sie Zeit?'], why: 'You have time, so you say yes: *Ja, das geht.*' },
            { q: 'Sie haben am Montag keine Zeit. Sie sagen:', o: ['Am Montag kann ich leider nicht.', 'Am Montag geht es gut.', 'Bis Montag!'], why: '*Ich kann nicht*: I cannot. *leider* makes it polite.' },
            { q: 'Sie möchten wissen, wann Ihr Chef frei ist:', o: ['Wann haben Sie Zeit?', 'Wo haben Sie Zeit?', 'Wie haben Sie Zeit?'], why: '*wann*: when.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Haben Sie am Donnerstag Zeit?', why: 'A yes/no question: the verb *haben* comes first.' },
            { a: 'Geht es am Freitag um neun?', why: 'The verb *geht* comes first. First the day, then the time.' },
            { a: 'Wann haben Sie Zeit?', why: 'Question word, verb, then *Sie*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'The shift plan',
      about: 'Talk about shifts and say what you can do and would like to do, with können and möchten.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'In hotels, hospitals, shops and factories, people often work in **shifts**. The **Schichtplan** (shift plan) says who works when.' },
          { t: 'table', caption: 'Shifts', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['die Schicht', 'a shift'],
            ['die Frühschicht', 'the early shift, for example from 6 to 14 Uhr'],
            ['die Spätschicht', 'the late shift, for example from 14 to 22 Uhr'],
            ['die Nachtschicht', 'the night shift'],
            ['frei haben', 'not to work on that day'],
            ['tauschen', 'to change a shift with a colleague'],
          ] },
          { t: 'examples', items: [
            { s: 'Am Montag **habe** ich Frühschicht.', n: 'You *have* a shift: *Ich habe Frühschicht.*' },
            { s: 'Am Wochenende **habe** ich **frei**.', n: 'I do not work at the weekend.' },
          ] },
        ],
        [
          { t: 'text', md: 'With **können** (can) and **möchten** (would like), the second verb goes to the **end** of the sentence, in the infinitive: *Ich **kann** am Samstag **arbeiten**. Ich **möchte** am Freitag frei **haben**.*' },
          { t: 'table', caption: 'können and möchten', explain: ['head'], quiz: true, head: ['Person', 'können', 'möchten'], rows: [
            ['ich', 'kann', 'möchte'],
            ['du', 'kannst', 'möchtest'],
            ['er / sie', 'kann', 'möchte'],
            ['wir', 'können', 'möchten'],
            ['ihr', 'könnt', 'möchtet'],
            ['sie / Sie', 'können', 'möchten'],
          ] },
          { t: 'tip', art: 'owl', md: 'With *ich* and *er/sie* the forms are the same, with no *-t*: *ich kann*, *sie kann*; *ich möchte*, *er möchte*.' },
        ],
        [
          { t: 'dialogue', title: 'Changing a shift', lines: [
            { who: 'Ana', s: 'Hallo, Omar! Kannst du am Samstag arbeiten? Ich habe Frühschicht, aber ich möchte frei haben. Meine Schwester kommt.' },
            { who: 'Omar', s: 'Am Samstag? Ja, da habe ich frei.' },
            { who: 'Ana', s: 'Können wir tauschen? Ich mache deine Spätschicht am Sonntag.' },
            { who: 'Omar', s: 'Ja, das geht. Und Frau Lange? Sie macht den Schichtplan.' },
            { who: 'Ana', s: 'Ich schreibe heute eine Nachricht an Frau Lange. Danke, Omar!' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of können.', verb: 'können', tense: 'present', rows: [
            ['ich', 'kann', 'With *ich* there is no ending.'],
            ['du', 'kannst'],
            ['er / sie', 'kann', 'The same form as *ich*.'],
            ['wir', 'können|koennen'],
            ['Sie', 'können|koennen'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the right form of können or möchten.', items: [
            { q: '___ du am Samstag arbeiten? (können)', a: ['Kannst'], why: '*können* with *du*: *kannst*.' },
            { q: 'Ich ___ am Freitag frei haben. (möchten)', a: ['möchte', 'moechte'], why: '*möchten* with *ich*: *möchte*.' },
            { q: 'Felix ___ am Sonntag nicht arbeiten. (können)', a: ['kann'], why: '*können* with *er*: *kann*, with no ending.' },
            { q: 'Wir ___ die Schicht tauschen. (möchten)', a: ['möchten', 'moechten'], why: '*möchten* with *wir*: *möchten*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentences. Two words do not belong.', items: [
            { a: 'Ich möchte am Freitag frei haben.', extra: ['habe', 'um'], why: '*möchte* in second place, *haben* at the end in the infinitive.' },
            { a: 'Kannst du am Sonntag arbeiten?', extra: ['arbeitest', 'kann'], why: 'A yes/no question: *kannst* first, *arbeiten* at the end.' },
            { a: 'Am Montag habe ich Frühschicht.', extra: ['bin', 'ich habe'], why: 'Time first, then the verb *habe*, then *ich*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: the shift plan',
      about: 'Read a shift plan for a café and a message about changing a shift.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'This is the shift plan of a café for one week. *F* is the early shift (*Frühschicht*, 7 to 14 Uhr) and *S* is the late shift (*Spätschicht*, 14 to 21 Uhr). *frei* means the person does not work.' },
          { t: 'table', caption: 'Schichtplan Café am Park', head: ['Name', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'], rows: [
            ['Ana', 'F', 'F', 'frei', 'S', 'S', 'F', 'frei'],
            ['Omar', 'S', 'S', 'F', 'frei', 'S', 'frei', 'S'],
            ['Lena', 'frei', 'F', 'F', 'F', 'F', 'frei', 'F'],
            ['Felix', 'S', 'frei', 'S', 'S', 'F', 'S', 'frei'],
          ] },
        ],
        [
          { t: 'reading', title: 'Eine Nachricht an die Chefin', md: 'Liebe Frau Lange,\n\nam Samstag habe ich Frühschicht. Aber meine Schwester kommt am Samstag nach Berlin, und ich möchte frei haben.\n\nOmar und ich möchten die Schichten tauschen: Omar macht am Samstag meine Frühschicht, und ich mache am Sonntag seine Spätschicht. Am Samstag hat Omar frei, und am Sonntag habe ich frei.\n\nGeht das? Ich bin heute bis 14 Uhr im Café.\n\nViele Grüße\nAna Costa' },
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the plan and the message. True, false or not given?', items: [
            { q: 'Ana hat am Mittwoch frei.', a: 't', why: 'In the plan, Ana has *frei* on *Mi*.' },
            { q: 'Lena arbeitet am Samstag.', a: 'f', why: 'In the plan, Lena has *frei* on *Sa*.' },
            { q: 'Felix hat am Freitag Frühschicht.', a: 't', why: 'In the plan, Felix has *F* on *Fr*.' },
            { q: 'Ana möchte am Samstag frei haben.', a: 't', why: '*ich möchte frei haben*: her sister comes on Saturday.' },
            { q: 'Frau Lange sagt: Ja, das geht.', a: 'ng', why: 'We only read Ana’s message. We do not know the answer.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wann fängt die Spätschicht an?', o: ['um 14 Uhr', 'um 7 Uhr', 'um 21 Uhr'], why: 'The late shift is from 14 to 21 Uhr.' },
            { q: 'Ana und Omar tauschen. Wer arbeitet dann am Sonntag Spätschicht?', o: ['Ana', 'Omar', 'Felix'], why: '*ich mache am Sonntag seine Spätschicht*: Ana works on Sunday.' },
            { q: 'Warum möchte Ana am Samstag frei haben?', o: ['Ihre Schwester kommt nach Berlin.', 'Sie ist krank.', 'Sie hat einen Termin beim Arzt.'], why: '*meine Schwester kommt am Samstag nach Berlin*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two verbs at the end that go with möchte and möchten.', items: [
            { s: 'Ich möchte frei [haben]. Omar und ich möchten die Schichten [tauschen].', why: 'With *möchten* the second verb goes to the end, in the infinitive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Geht es am Montag um neun? Sie haben keine Zeit. Sie sagen:', o: ['Nein, das geht leider nicht.', 'Ja, das geht.', 'Bis Montag!'], why: 'You have no time, so you say no politely.' },
      { q: 'Die Schicht am Morgen heißt ___.', o: ['Frühschicht', 'Spätschicht', 'Nachtschicht'], why: '*früh*: early. *die Frühschicht*.' },
      { q: '', o: ['Ich möchte am Freitag frei haben.', 'Ich möchte am Freitag habe frei.', 'Ich möchte am Freitag frei hat.'], why: 'With *möchten*, the infinitive *haben* goes to the end.' },
      { q: 'Zwei Kollegen ___ die Schichten.', o: ['tauschen', 'kaufen', 'schreiben'], why: '*tauschen*: to change shifts with someone.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: '___ Sie am Dienstag Zeit? (haben)', a: ['Haben'], why: 'A yes/no question: the verb comes first.' },
      { q: 'Am Sonntag ___ ich nicht. Da habe ich frei. (können)', a: ['kann'], why: '*können* with *ich*: *kann*.' },
      { q: '___ du am Samstag arbeiten? (können)', a: ['Kannst'], why: '*können* with *du*: *kannst*.' },
      { q: 'Lena ___ am Freitag frei haben. (möchten)', a: ['möchte', 'moechte'], why: '*möchten* with *sie*: *möchte*, with no *-t*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the question and the answer.', pairs: [
      ['Wann haben Sie Zeit?', 'Am Donnerstag um drei.'],
      ['Geht es um zehn?', 'Ja, das geht.'],
      ['Kannst du am Sonntag arbeiten?', 'Nein, am Sonntag kann ich nicht.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Können wir die Schichten tauschen?', why: '*können* first, *tauschen* at the end.' },
      { a: 'Am Montag habe ich Spätschicht.', why: 'Time first, then the verb *habe*, then *ich*.' },
    ] },
  ],
};
