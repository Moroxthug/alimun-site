// German A1 for work, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'The working day',
  goal: 'Say when you work and what you do during the working day.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['times', 'days-of-the-week', 'daily-routine', 'separable-verbs', 'word-order', 'workplace'], goals: ['professional'] },
  pages: [
    {
      id: 'p1',
      title: 'When do you work?',
      about: 'Say the time and the days you work, with um, am and von … bis.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'At work, people often use the 24-hour clock: *Es ist 14 Uhr* (vierzehn Uhr). *14.30 Uhr* is *vierzehn Uhr dreißig*.\n\nIn everyday talk you also hear **halb** and **Viertel**: *halb neun* is 8.30, half an hour **before** nine. *Viertel nach acht* is 8.15, *Viertel vor neun* is 8.45.' },
          { t: 'table', caption: 'Times', explain: ['head'], quiz: true, head: ['Time', 'At work', 'In everyday talk'], rows: [
            ['8.00', 'acht Uhr', 'acht'],
            ['8.15', 'acht Uhr fünfzehn', 'Viertel nach acht'],
            ['8.30', 'acht Uhr dreißig', 'halb neun'],
            ['8.45', 'acht Uhr fünfundvierzig', 'Viertel vor neun'],
            ['17.00', 'siebzehn Uhr', 'fünf'],
          ] },
          { t: 'tip', art: 'owl', md: 'To ask the time, say *Wie spät ist es?* or *Wie viel Uhr ist es?* The answer: *Es ist halb zehn.*' },
        ],
        [
          { t: 'text', md: 'Use **um** for a time, **am** for a day and **von … bis** for how long: *Ich arbeite **am** Montag **von** 8 **bis** 16 Uhr. **Um** 12 Uhr mache ich Pause.*' },
          { t: 'table', caption: 'The days of the week', explain: ['head'], quiz: true, head: ['Day', 'On this day'], rows: [
            ['der Montag', 'am Montag'],
            ['der Dienstag', 'am Dienstag'],
            ['der Mittwoch', 'am Mittwoch'],
            ['der Donnerstag', 'am Donnerstag'],
            ['der Freitag', 'am Freitag'],
            ['der Samstag', 'am Samstag'],
            ['der Sonntag', 'am Sonntag'],
          ] },
          { t: 'examples', items: [
            { s: 'Wann arbeiten Sie?', n: '*wann*: when.' },
            { s: 'Ich arbeite **von** Montag **bis** Freitag.', n: 'From Monday to Friday.' },
            { s: 'Am Wochenende habe ich frei.', n: '*das Wochenende*: Saturday and Sunday. *frei haben*: not to work.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the time and the words.', pairs: [
            ['7.30', 'halb acht'],
            ['9.15', 'Viertel nach neun'],
            ['10.45', 'Viertel vor elf'],
            ['13.00', 'dreizehn Uhr'],
            ['16.30', 'sechzehn Uhr dreißig'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write um, am, von or bis.', items: [
            { q: 'Ich arbeite ___ Dienstag.', a: ['am'], why: 'With a day: *am*.' },
            { q: 'Die Pause ist ___ 12 Uhr.', a: ['um'], why: 'With a time: *um*.' },
            { q: 'Wir arbeiten von 9 ___ 17 Uhr.', a: ['bis'], why: '*von … bis*: from … to.' },
            { q: 'Das Geschäft ist ___ Montag bis Samstag offen.', a: ['von'], why: '*von Montag bis Samstag*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Es ist 8.30 Uhr. Man sagt auch:', o: ['halb neun', 'halb acht', 'Viertel nach acht'], why: '*halb neun*: half an hour before nine.' },
            { q: 'Wann haben Sie frei?', o: ['Am Sonntag.', 'Um Sonntag.', 'Von Sonntag.'], why: 'With a day: *am Sonntag*.' },
            { q: 'Wie spät ist es?', o: ['Es ist Viertel vor drei.', 'Es ist Montag.', 'Ich arbeite bis drei.'], why: '*Wie spät ist es?* asks for the time now.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Wann arbeiten Sie am Freitag?', why: 'Question word, verb, *Sie*, then the day.' },
            { a: 'Ich arbeite von acht bis vier.', why: 'The verb *arbeite* is in second place.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'My working day',
      about: 'Say what you do during the day with separable verbs, and start a sentence with the time.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'Many verbs for the working day are **separable**: *anfangen* (to start), *aufhören* (to stop). The verb is in second place and the small first part goes to the **end** of the sentence.' },
          { t: 'examples', items: [
            { s: 'Ich **stehe** um sechs Uhr **auf**.', n: '*aufstehen*: to get up.' },
            { s: 'Die Arbeit **fängt** um acht **an**.', n: '*anfangen*: to start. *fangen* changes to *fängt* with *er, sie, es*.' },
            { s: 'Ich **rufe** die Kunden **an**.', n: '*anrufen*: to phone someone.' },
            { s: 'Am Abend **räumen** wir die Küche **auf**.', n: '*aufräumen*: to tidy up.' },
            { s: 'Wann **hörst** du heute **auf**?', n: '*aufhören*: to stop work.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Some activities are not separable verbs: *Pause machen*, *E-Mails schreiben*, *Kaffee kochen*. The verb is still in second place: *Um zehn mache ich Pause.*' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of anfangen.', verb: 'anfangen', tense: 'present', rows: [
            ['ich', 'fange an'],
            ['du', 'fängst an|faengst an', 'With *du* the *a* changes to *ä*.'],
            ['er / sie', 'fängt an|faengt an', 'With *er* and *sie* the *a* changes to *ä* too.'],
            ['wir', 'fangen an'],
            ['Sie', 'fangen an'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing part of the verb.', items: [
            { q: 'Ich stehe um fünf Uhr ___. (aufstehen)', a: ['auf'], why: '*aufstehen*: *auf* goes to the end.' },
            { q: 'Frau Kaya ruft den Kunden ___. (anrufen)', a: ['an'], why: '*anrufen*: *an* goes to the end.' },
            { q: 'Wir ___ um 18 Uhr auf. (aufhören)', a: ['hören', 'hoeren'], why: '*wir hören … auf*: the verb is in second place.' },
            { q: 'Wann ___ dein Kurs an? (anfangen)', a: ['fängt', 'faengt'], why: '*der Kurs* is *er*: *er fängt … an*.' },
          ] },
        ],
        [
          { t: 'text', md: 'You can start a sentence with the time. The verb stays in **second place**, so the person comes **after** the verb: *Ich fange um acht an.* becomes *Um acht **fange ich** an.*' },
          { t: 'dialogue', title: 'In the lift', lines: [
            { who: 'Mira', s: 'Hallo, Paul! Du bist heute früh hier.' },
            { who: 'Paul', s: 'Ja, am Montag fange ich um sieben an.' },
            { who: 'Mira', s: 'Oh! Und wann hörst du auf?' },
            { who: 'Paul', s: 'Um halb vier. Am Nachmittag habe ich frei.' },
            { who: 'Mira', s: 'Schön! Ich arbeite bis sechs. Um zwölf mache ich Pause. Kommst du mit in die Kantine?' },
            { who: 'Paul', s: 'Ja, gern!' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Start the sentence with the time.', items: [
            { q: 'Ich fange um acht an.', cue: 'Um acht', a: ['Um acht fange ich an.'], why: 'The verb *fange* stays in second place, *ich* comes after it.' },
            { q: 'Wir machen um zwölf Pause.', cue: 'Um zwölf', a: ['Um zwölf machen wir Pause.'], why: 'The verb *machen* stays in second place.' },
            { q: 'Paul hat am Nachmittag frei.', cue: 'Am Nachmittag', a: ['Am Nachmittag hat Paul frei.'], why: 'The verb *hat* stays in second place, *Paul* comes after it.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Paul fängt am Montag um sieben an.', a: 't', why: '*am Montag fange ich um sieben an.*' },
            { q: 'Paul hört um halb fünf auf.', a: 'f', why: 'He stops *um halb vier*, at 3.30.' },
            { q: 'Mira macht um zwölf Pause.', a: 't', why: '*Um zwölf mache ich Pause.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
            { a: 'Am Abend räume ich das Büro auf.', why: 'Time first, then the verb, then *ich*. *auf* goes to the end.' },
            { a: 'Wann fängt die Arbeit an?', why: 'Question word, verb, subject. *an* goes to the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a baker’s day',
      about: 'Read about the working day of a baker.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'text', md: 'Bakers start work very early. Read the text from a small bakery’s website.' },
          { t: 'reading', title: 'Ein Tag in der Bäckerei', md: 'Ich heiße Kwame Boateng und ich bin Bäcker. Meine Bäckerei ist in Freiburg.\n\nMein Tag fängt sehr früh an. Ich stehe um zwei Uhr auf. Um drei Uhr fange ich an. Ich mache Brot, Brötchen und Kuchen.\n\nUm sechs Uhr öffnet der Laden. Dann kommt meine Kollegin Katrin. Sie ist Verkäuferin. Um acht Uhr mache ich Pause und trinke einen Kaffee.\n\nUm elf Uhr räume ich die Backstube auf. Um zwölf Uhr höre ich auf. Am Nachmittag schlafe ich zwei Stunden.\n\nIch arbeite von Dienstag bis Samstag. Am Sonntag und am Montag habe ich frei. Die Arbeit ist hart, aber ich bin gern Bäcker.' },
          { t: 'tip', art: 'owl', md: '*die Backstube* is the room where the baker makes the bread. *öffnen*: to open.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the text. True, false or not given?', items: [
            { q: 'Kwame steht um zwei Uhr auf.', a: 't', why: '*Ich stehe um zwei Uhr auf.*' },
            { q: 'Der Laden öffnet um drei Uhr.', a: 'f', why: '*Um sechs Uhr öffnet der Laden.* At three, Kwame starts work.' },
            { q: 'Katrin ist Bäckerin.', a: 'f', why: '*Sie ist Verkäuferin.*' },
            { q: 'Kwame arbeitet am Montag.', a: 'f', why: '*Am Sonntag und am Montag habe ich frei.*' },
            { q: 'Kwame hat Kinder.', a: 'ng', why: 'The text says nothing about his family.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
            { q: 'Wann hört Kwame auf?', o: ['um zwölf Uhr', 'um elf Uhr', 'um acht Uhr'], why: '*Um zwölf Uhr höre ich auf.*' },
            { q: 'Was macht Kwame um acht Uhr?', o: ['Er macht Pause.', 'Er räumt auf.', 'Er steht auf.'], why: '*Um acht Uhr mache ich Pause und trinke einen Kaffee.*' },
            { q: 'Wie ist die Arbeit?', o: ['hart', 'langweilig', 'leicht'], why: '*Die Arbeit ist hart, aber ich bin gern Bäcker.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the small parts of the separable verbs at the end of each sentence.', items: [
            { s: 'Ich stehe um zwei Uhr [auf]. Um drei Uhr fange ich [an]. Um zwölf Uhr höre ich [auf].', why: '*aufstehen*, *anfangen*, *aufhören*: the small first part goes to the end.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Es ist 9.30 Uhr. Man sagt auch:', o: ['halb zehn', 'halb neun', 'Viertel vor zehn'], why: '*halb zehn*: half an hour before ten.' },
      { q: 'Ich arbeite ___ Mittwoch.', o: ['am', 'um', 'bis'], why: 'With a day: *am*.' },
      { q: '', o: ['Um acht fange ich an.', 'Um acht ich fange an.', 'Um acht fange an ich.'], why: 'The verb stays in second place, the person comes after it.' },
      { q: 'Samstag und Sonntag sind ___.', o: ['das Wochenende', 'die Pause', 'der Feierabend'], why: '*das Wochenende*: Saturday and Sunday.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Ich arbeite von 8 ___ 16 Uhr.', a: ['bis'], why: '*von … bis*.' },
      { q: 'Die Pause ist ___ zwölf Uhr.', a: ['um'], why: 'With a time: *um*.' },
      { q: 'Er ___ um sieben an. (anfangen)', a: ['fängt', 'faengt'], why: '*er fängt … an*: the *a* changes to *ä*.' },
      { q: 'Wir räumen am Abend die Küche ___. (aufräumen)', a: ['auf'], why: '*aufräumen*: *auf* goes to the end.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Start the sentence with the time.', items: [
      { q: 'Ich stehe um sechs auf.', cue: 'Um sechs', a: ['Um sechs stehe ich auf.'], why: 'The verb *stehe* stays in second place.' },
      { q: 'Sie hat am Montag frei.', cue: 'Am Montag', a: ['Am Montag hat sie frei.'], why: 'The verb *hat* stays in second place.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the sentences.', items: [
      { a: 'Wann hörst du heute auf?', why: 'Question word, verb, *du*. *auf* goes to the end.' },
      { a: 'Ich rufe den Kunden an.', why: '*anrufen*: *rufe* in second place, *an* at the end.' },
    ] },
  ],
};
