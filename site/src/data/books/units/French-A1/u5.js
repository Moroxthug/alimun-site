// French A1, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'My day',
  goal: 'Say what you do during the day and make appointments.',
  art: 'snail',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['time', 'days', 'daily routine', 'er-verbs', 'faire', 'reflexive verbs', 'appointments'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Quelle heure est-il ?',
      about: 'Tell the time, say the days of the week and the parts of the day.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **Quelle heure est-il ?** The answer always starts with **Il est**: *Il est huit heures.* The word **heure** is feminine, and it has an **s** in the plural: *une heure, deux heures*. For the minutes, add **et quart** (quarter past), **et demie** (half past), **moins le quart** (quarter to), or just the number: *huit heures dix*.' },
          { t: 'table', caption: 'The time', explain: ['head'], head: ['Time', 'French'], rows: [
            ['1:00', 'Il est une heure.'],
            ['8:00', 'Il est huit heures.'],
            ['8:15', 'Il est huit heures et quart.'],
            ['8:30', 'Il est huit heures et demie.'],
            ['8:45', 'Il est neuf heures moins le quart.'],
            ['8:10', 'Il est huit heures dix.'],
            ['12:00', 'Il est midi.'],
            ['0:00', 'Il est minuit.'],
          ] },
          { t: 'tip', art: 'owl', md: 'On timetables, in official announcements and in writing, French uses the 24-hour clock with **h**: *14 h 30* is read *quatorze heures trente*. In daily speech, people say *deux heures et demie*. To say *at*, use **à**: *Je me lève à sept heures.*' },
        ],
        [
          { t: 'text', md: 'The days of the week start with a small letter. To say *on Monday*, say just **lundi**: *Lundi, je travaille.* To say *every Monday*, say **le lundi**. The parts of the day are **le matin** (morning), **l’après-midi** (afternoon), **le soir** (evening) and **la nuit** (night). To say *in the morning*, say **le matin** with no word in front.' },
          { t: 'table', caption: 'Days of the week', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['lundi', 'Monday'],
            ['mardi', 'Tuesday'],
            ['mercredi', 'Wednesday'],
            ['jeudi', 'Thursday'],
            ['vendredi', 'Friday'],
            ['samedi', 'Saturday'],
            ['dimanche', 'Sunday'],
          ] },
          { t: 'examples', items: [
            { s: '**Quelle heure** est-il ? – **Il est** dix heures et demie.', n: 'Asking and telling the time.' },
            { s: 'Le cours commence **à** neuf heures.', n: '*à* + time means at.' },
            { s: '**Lundi**, je travaille de huit heures **à** midi.', n: '*de … à …* means from … to ….' },
            { s: 'Je fais du sport **le** mardi **et le** jeudi.', n: '*le mardi* means every Tuesday.' },
            { s: '**Le soir**, je dîne à huit heures.', n: '*le soir* means in the evening.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the time.', pairs: [
            ['7:15', 'sept heures et quart'],
            ['7:30', 'sept heures et demie'],
            ['6:45', 'sept heures moins le quart'],
            ['12:00', 'midi'],
            ['0:00', 'minuit'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Look at the time and choose.', items: [
            { q: '9:30', o: ['Il est neuf heures et demie.', 'Il est neuf heures et quart.', 'Il est dix heures moins le quart.'], why: 'Half past nine: *neuf heures et demie*.' },
            { q: '3:45', o: ['Il est quatre heures moins le quart.', 'Il est trois heures et quart.', 'Il est quatre heures et demie.'], why: 'A quarter to four: *quatre heures moins le quart*.' },
            { q: '12:00', o: ['Il est midi.', 'Il est minuit.', 'Il est douze heures et demie.'], why: 'Noon is *midi*.' },
            { q: '1:00', o: ['Il est une heure.', 'Il est un heure.', 'Ils sont une heure.'], why: '*heure* is feminine, so *une heure*, and the sentence starts with *Il est*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'search', h: 'Find the days of the week.', words: ['lundi', 'mardi', 'jeudi', 'samedi', 'dimanche'] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quelle heure est-il ?', why: 'The question starts with *quelle heure*.' },
            { a: 'Le cours commence à neuf heures.', why: 'Subject, verb, *à* + time.' },
            { a: 'Je travaille de lundi à vendredi.', why: '*de … à …* for from … to ….' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je travaille, je mange, je fais',
      about: 'Regular -er verbs in the present, and faire.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Most French verbs end in **-er** and follow one pattern. Take off **-er** and add the endings **-e, -es, -e, -ons, -ez, -ent**. This works for *travailler* (to work), *parler*, *habiter*, *étudier*, *manger* and hundreds more. Two small changes: *nous mangeons* keeps the **e** so that the **g** stays soft, and *nous commençons* has a **ç** for the same reason.' },
          { t: 'table', caption: 'travailler (to work)', quiz: true, head: ['', 'travailler'], rows: [
            ['je', 'travaille'],
            ['tu', 'travailles'],
            ['il / elle / on', 'travaille'],
            ['nous', 'travaillons'],
            ['vous', 'travaillez'],
            ['ils / elles', 'travaillent'],
          ] },
          { t: 'tip', art: 'owl', md: 'Before a vowel, **je** becomes **j’**: *j’étudie*, *j’habite*, *j’arrive*. To make a verb negative, put **ne … pas** around it: *Je ne travaille pas le dimanche.* Before a vowel, *ne* becomes *n’*: *Je n’habite pas ici.*' },
        ],
        [
          { t: 'text', md: '**faire** (to do, to make) is irregular and very common: you use it for sport (*faire du sport*), housework (*faire le ménage*), shopping (*faire les courses*) and for the weather (*Il fait beau*). **Qu’est-ce que vous faites ?** asks what you do or what you are doing. **Qu’est-ce que vous faites dans la vie ?** asks about your job.' },
          { t: 'table', caption: 'faire (to do, to make)', quiz: true, head: ['', 'faire'], rows: [
            ['je', 'fais'],
            ['tu', 'fais'],
            ['il / elle / on', 'fait'],
            ['nous', 'faisons'],
            ['vous', 'faites'],
            ['ils / elles', 'font'],
          ] },
          { t: 'examples', items: [
            { s: 'Je **travaille** dans un bureau.', n: '*travailler dans* + a place.' },
            { s: 'Nous **mangeons** à midi.', n: 'Keep the *e* before *-ons*: *mangeons*.' },
            { s: 'Elle **commence** à huit heures.', n: '*commencer à* + time.' },
            { s: 'Ils **font** les courses le samedi.', n: '*faire les courses* means to do the shopping.' },
            { s: 'Je **ne** travaille **pas** le dimanche.', n: '*ne … pas* around the verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of faire.', verb: 'faire', tense: 'present', rows: [
            ['je', 'fais'],
            ['tu', 'fais'],
            ['il / elle', 'fait'],
            ['nous', 'faisons'],
            ['vous', 'faites'],
            ['ils / elles', 'font'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Je ___ dans une banque. (travailler)', a: ['travaille'], why: '*je travaille*' },
            { q: 'Tu ___ à midi ? (manger)', a: ['manges'], why: '*tu manges*' },
            { q: 'Nous ___ à neuf heures. (commencer)', a: ['commençons', 'commencons'], why: '*nous commençons*, with a *ç*.' },
            { q: 'Vous ___ du sport ? (faire)', a: ['faites'], why: '*vous faites*' },
            { q: 'Elles ___ à Paris. (habiter)', a: ['habitent'], why: '*elles habitent*' },
            { q: 'Ils ___ les courses. (faire)', a: ['font'], why: '*ils font*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Nous [mangons] à midi.', a: ['mangeons'], why: 'With *nous*, *manger* keeps the *e*: *mangeons*.' },
            { s: 'Vous [faisez] du sport.', a: ['faites'], why: '*vous faites*' },
            { s: 'Il [ne travaille] le dimanche.', a: ['ne travaille pas', 'ne travaille jamais'], why: 'Put *pas* after the verb: *il ne travaille pas*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Lucas ___ à huit heures.', o: ['commence', 'commences', 'commençons'], why: 'One person, *il*: *commence*.' },
            { q: 'Mes parents ___ à la maison.', o: ['travaillent', 'travaille', 'travaillons'], why: 'Several people, *ils*: *travaillent*.' },
            { q: 'Vous ___ le ménage le samedi ?', o: ['faites', 'faisez', 'font'], why: '*vous faites*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Je me lève à sept heures',
      about: 'Reflexive verbs for your daily routine.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Many verbs of the daily routine are **reflexive**: they have a small word before the verb that points back to the subject. **se lever** (to get up) is *me lève* for *je*, *te lèves* for *tu*, *se lève* for *il* and *elle*. The **e** gets an accent in four forms (*je me lève, tu te lèves, il se lève, ils se lèvent*) but not for *nous* and *vous*.' },
          { t: 'table', caption: 'se lever (to get up)', quiz: true, head: ['', 'se lever'], rows: [
            ['je', 'me lève'],
            ['tu', 'te lèves'],
            ['il / elle / on', 'se lève'],
            ['nous', 'nous levons'],
            ['vous', 'vous levez'],
            ['ils / elles', 'se lèvent'],
          ] },
          { t: 'tip', art: 'owl', md: 'The pattern is **me, te, se, nous, vous, se** before the verb. Before a vowel, *me, te, se* become **m’, t’, s’**: *Je m’habille*, *Tu t’habilles*. This is the same pattern as *je m’appelle* in unit 1.' },
        ],
        [
          { t: 'table', caption: 'My day', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['se réveiller', 'to wake up'],
            ['se lever', 'to get up'],
            ['se doucher', 'to take a shower'],
            ['s’habiller', 'to get dressed'],
            ['prendre le petit-déjeuner', 'to have breakfast'],
            ['aller au travail', 'to go to work'],
            ['déjeuner', 'to have lunch'],
            ['dîner', 'to have dinner'],
            ['se coucher', 'to go to bed'],
          ] },
          { t: 'dialogue', title: 'A normal day', lines: [
            { who: 'Sophie', s: 'À quelle heure tu te lèves, Lucas ?' },
            { who: 'Lucas', s: 'Je me lève à sept heures. Je prends une douche et je prends le petit-déjeuner.' },
            { who: 'Sophie', s: 'Tu commences à quelle heure ?' },
            { who: 'Lucas', s: 'À neuf heures. Le soir, je dîne à huit heures et je me couche à onze heures.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of se lever.', verb: 'se lever', tense: 'present', rows: [
            ['je', 'me lève|me leve'],
            ['tu', 'te lèves|te leves'],
            ['il / elle', 'se lève|se leve'],
            ['nous', 'nous levons'],
            ['vous', 'vous levez'],
            ['ils / elles', 'se lèvent|se levent'],
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je me lève à sept heures.', why: 'Subject, *me*, verb, time.' },
            { a: 'Nous nous couchons à onze heures.', why: '*nous nous couchons*: the pronoun is repeated.' },
            { a: 'Elle se douche le matin.', why: '*se doucher*, then *le matin*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Je ___ lève à six heures.', o: ['me', 'te', 'se'], why: '*je me lève*' },
            { q: 'Tu ___ couches tard ?', o: ['te', 'me', 'se'], why: '*tu te couches*' },
            { q: 'Ma sœur ___ réveille à sept heures.', o: ['se', 'me', 'te'], why: '*elle se réveille*' },
            { q: 'Nous ___ habillons vite.', o: ['nous', 'se', 'vous'], why: '*nous nous habillons*' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Morning or evening?', groups: ['le matin', 'le soir'], items: [
            { s: 'se lever', g: 0, why: 'We get up in the morning.' },
            { s: 'dîner', g: 1, why: 'We have dinner in the evening.' },
            { s: 'se réveiller', g: 0, why: 'We wake up in the morning.' },
            { s: 'se coucher', g: 1, why: 'We go to bed in the evening.' },
            { s: 'prendre le petit-déjeuner', g: 0, why: 'Breakfast is the first meal.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Ma semaine',
      about: 'Read a week planner and a message that changes an appointment.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'L’agenda de Nadia', md: '**Lundi** : cours de français à 9 h, déjeuner avec Sophie à midi.\n**Mardi** : travail de 8 h à 17 h.\n**Mercredi** : rendez-vous chez le médecin à 15 h 30.\n**Jeudi** : travail de 8 h à 17 h, sport à 18 h.\n**Vendredi** : cours de français à 9 h, dîner avec Karim à 20 h.\n**Samedi** : courses le matin, cinéma le soir.\n**Dimanche** : je me repose.' },
          { t: 'reading', title: 'Un message', md: 'Bonjour Sophie !\n\nJe suis désolée, je ne peux pas déjeuner avec toi lundi. J’ai un autre rendez-vous à midi. On peut déjeuner mardi à 12 h 30 ? Ou vendredi à midi ? Dis-moi ce qui te va.\n\nÀ bientôt ! Nadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia a un cours de français le lundi et le vendredi.', a: 't', why: '*Lundi : cours de français à 9 h* and *Vendredi : cours de français à 9 h*.' },
            { q: 'Nadia travaille le mercredi.', a: 'f', why: 'On Wednesday she has an appointment at the doctor’s; she works on Tuesday and Thursday.' },
            { q: 'Elle fait du sport le jeudi.', a: 't', why: '*Jeudi : … sport à 18 h*' },
            { q: 'Nadia dîne avec Karim vendredi à 20 h.', a: 't', why: '*dîner avec Karim à 20 h*' },
            { q: 'Nadia a un chien.', a: 'ng', why: 'Nothing is said about a dog.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the message again and choose.', items: [
            { q: 'Pourquoi Nadia ne peut-elle pas déjeuner lundi ?', o: ['Elle a un autre rendez-vous à midi.', 'Elle travaille.', 'Elle est malade.'], why: '*J’ai un autre rendez-vous à midi.*' },
            { q: 'Quand Nadia propose-t-elle de déjeuner ?', o: ['mardi à 12 h 30 ou vendredi à midi', 'jeudi soir', 'samedi matin'], why: '*mardi à 12 h 30 ? Ou vendredi à midi ?*' },
            { q: 'Que demande Nadia à la fin du message ?', o: ['Quel jour convient à Sophie.', 'Où habite Sophie.', 'Quel âge a Sophie.'], why: '*Dis-moi ce qui te va* means: tell me what suits you.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Le mercredi, Nadia a un rendez-vous chez le ___.', a: ['médecin', 'medecin'], why: '*rendez-vous chez le médecin*' },
            { q: 'Le samedi soir, elle va au ___.', a: ['cinéma', 'cinema'], why: '*cinéma le soir*' },
            { q: 'Le dimanche, elle se ___.', a: ['repose'], why: '*Dimanche : je me repose.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: '8:30', o: ['Il est huit heures et demie.', 'Il est huit heures et quart.', 'Il est neuf heures moins le quart.'], why: 'Half past eight: *huit heures et demie*.' },
      { q: 'Nous ___ à midi. (manger)', o: ['mangeons', 'mangons', 'mangent'], why: 'With *nous*, the *e* stays: *mangeons*.' },
      { q: 'Vous ___ du sport ?', o: ['faites', 'faisez', 'font'], why: '*vous faites*' },
      { q: 'Il ___ lève à sept heures.', o: ['se', 'me', 'te'], why: '*il se lève*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Je ___ à huit heures. (commencer)', a: ['commence'], why: '*je commence*' },
      { q: 'Il ___ midi.', a: ['est'], why: 'The time always starts with *il est*.' },
      { q: 'Elle ne travaille ___ le dimanche.', a: ['pas'], why: '*ne … pas*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the time.', pairs: [
      ['6:15', 'six heures et quart'],
      ['6:30', 'six heures et demie'],
      ['5:45', 'six heures moins le quart'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je me couche à onze heures.', why: 'Subject, *me*, verb, time.' },
      { a: 'Nous travaillons de lundi à vendredi.', why: '*de … à …*' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je [te] lève à sept heures.', a: ['me'], why: '*je me lève*' },
    ] },
    { t: 'ex', kind: 'conjugate', h: 'Write the forms of travailler.', verb: 'travailler', tense: 'present', rows: [
      ['je', 'travaille'],
      ['nous', 'travaillons'],
      ['ils', 'travaillent'],
    ] },
  ],
};
