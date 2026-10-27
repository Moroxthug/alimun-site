// French A1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Free time',
  goal: 'Talk about hobbies, say what you can do and arrange to meet.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['hobbies', 'aimer', 'jouer', 'faire du', 'pouvoir', 'vouloir', 'savoir', 'weather', 'seasons', 'invitations'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’aime la musique',
      about: 'Hobbies, aimer + infinitive, jouer à / de and faire du / de la.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To say what you like, use **aimer**, **adorer** or **détester** followed by a noun with **le, la, les**, or by an **infinitive**: *J’aime la musique. J’aime lire. Je déteste cuisiner.* To say what you like most, use **préférer**: *Je préfère le cinéma.*' },
          { t: 'table', caption: 'Hobbies', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['lire', 'to read'],
            ['écouter de la musique', 'to listen to music'],
            ['regarder un film', 'to watch a film'],
            ['cuisiner', 'to cook'],
            ['voyager', 'to travel'],
            ['danser', 'to dance'],
            ['se promener', 'to go for a walk'],
            ['dessiner', 'to draw'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **aimer**, **adorer**, **détester** and **préférer**, the second verb stays in the infinitive: *J’aime danser.* To say you do not like something, put **ne … pas** around the first verb: *Je n’aime pas danser.*' },
        ],
        [
          { t: 'text', md: 'French uses **jouer à** + a game or sport (*jouer au football*, *jouer aux cartes*) and **jouer de** + an instrument (*jouer de la guitare*, *jouer du piano*). For many other sports and activities, use **faire du / de la / de l’ / des**: *faire du sport*, *faire de la natation*, *faire de la danse*, *faire du vélo*. Remember: *à* + *le* = **au**, *à* + *les* = **aux**.' },
          { t: 'table', caption: 'Sport and music', explain: ['head'], head: ['Verb', 'Examples'], rows: [
            ['jouer à (a game)', 'au football, au tennis, aux cartes'],
            ['jouer de (an instrument)', 'du piano, de la guitare, de la flûte'],
            ['faire de (an activity)', 'du sport, de la natation, du vélo, de la danse'],
          ] },
          { t: 'examples', items: [
            { s: 'Je **joue au** tennis le mercredi.', n: '*à* + *le* = *au*.' },
            { s: 'Elle **joue de la** guitare.', n: 'An instrument: *jouer de la*, *du*, *de l’*.' },
            { s: 'Nous **faisons du** vélo le dimanche.', n: '*faire du vélo* means to cycle.' },
            { s: 'Vous **faites de la** natation ?', n: '*natation* is feminine.' },
            { s: 'Mes amis **adorent le** cinéma.', n: 'After *adorer*, use *le*, *la*, *les*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Je joue ___ football.', o: ['au', 'du', 'à la'], why: 'A sport or game: *jouer à*. *à* + *le* = *au*.' },
            { q: 'Il joue ___ piano.', o: ['du', 'au', 'de la'], why: 'An instrument: *jouer de*. *de* + *le* = *du*.' },
            { q: 'Nous faisons ___ natation.', o: ['de la', 'du', 'des'], why: '*natation* is feminine: *de la*.' },
            { q: 'Elles jouent ___ cartes.', o: ['aux', 'au', 'des'], why: '*à* + *les* = *aux*.' },
          ] },
          { t: 'ex', kind: 'colloc', h: 'Which words go with the key word? Choose all of them.', items: [
            { key: 'jouer au', o: ['football', 'tennis', 'piano', 'natation'], a: [0, 1], why: '*jouer au football / tennis*. For the piano, *jouer du piano*.' },
            { key: 'faire du', o: ['sport', 'vélo', 'guitare', 'cartes'], a: [0, 1], why: '*faire du sport / du vélo*. For an instrument, *jouer de la guitare*; for cards, *jouer aux cartes*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Elle joue ___ guitare.', a: ['de la'], why: 'An instrument, feminine: *de la guitare*.' },
            { q: 'Nous jouons ___ cartes le soir.', a: ['aux'], why: '*à* + *les* = *aux*.' },
            { q: 'J’adore ___ musique.', a: ['la'], why: 'After *adorer*: *la musique*.' },
            { q: 'Je ne fais pas ___ sport.', a: ['de'], why: 'Negative: *pas de*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs.', pairs: [
            ['lire', 'to read'],
            ['danser', 'to dance'],
            ['cuisiner', 'to cook'],
            ['voyager', 'to travel'],
            ['dessiner', 'to draw'],
            ['écouter', 'to listen'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je peux, je veux, je sais',
      about: 'pouvoir, vouloir and savoir with the infinitive; regular -ir verbs.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'Three irregular verbs help you say what you can, want and know how to do. **pouvoir** means *can*, **vouloir** means *to want* and **savoir** means *to know how to*. They are followed by an infinitive: *Je peux venir. Tu veux manger ? Elle sait nager.*' },
          { t: 'table', caption: 'pouvoir, vouloir, savoir', quiz: true, head: ['', 'pouvoir', 'vouloir', 'savoir'], rows: [
            ['je', 'peux', 'veux', 'sais'],
            ['tu', 'peux', 'veux', 'sais'],
            ['il / elle / on', 'peut', 'veut', 'sait'],
            ['nous', 'pouvons', 'voulons', 'savons'],
            ['vous', 'pouvez', 'voulez', 'savez'],
            ['ils / elles', 'peuvent', 'veulent', 'savent'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **je voudrais** (I would like) to ask politely and **je veux** only with friends and family. To ask a favour, use **Pouvez-vous …?** or **Vous pouvez …?**. Where English says *I can swim*, French says **je sais nager** (I know how to). **Je peux** is for what is possible or allowed: *Je peux venir samedi.*' },
        ],
        [
          { t: 'text', md: 'Another group of regular verbs ends in **-ir**: *finir* (to finish), *choisir* (to choose). Take off **-ir** and add **-is, -is, -it, -issons, -issez, -issent**.' },
          { t: 'table', caption: 'finir (to finish)', quiz: true, head: ['', 'finir'], rows: [
            ['je', 'finis'],
            ['tu', 'finis'],
            ['il / elle / on', 'finit'],
            ['nous', 'finissons'],
            ['vous', 'finissez'],
            ['ils / elles', 'finissent'],
          ] },
          { t: 'examples', items: [
            { s: 'Je **peux** venir samedi.', n: 'I can come on Saturday.' },
            { s: 'Tu **veux** jouer au tennis ?', n: 'Do you want to play tennis?' },
            { s: 'Elle **sait** jouer du piano.', n: 'She can play the piano (she has learned how).' },
            { s: 'Nous **finissons** à six heures.', n: '*finir* is an -ir verb.' },
            { s: 'Ils ne **peuvent** pas venir.', n: 'They cannot come.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of pouvoir.', verb: 'pouvoir', tense: 'present', rows: [
            ['je', 'peux'],
            ['tu', 'peux'],
            ['il / elle', 'peut'],
            ['nous', 'pouvons'],
            ['vous', 'pouvez'],
            ['ils / elles', 'peuvent'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Je ___ jouer de la guitare. (savoir)', a: ['sais'], why: '*je sais* + infinitive means I know how to.' },
            { q: 'Tu ___ venir demain ? (pouvoir)', a: ['peux'], why: '*tu peux*' },
            { q: 'Nous ___ aller au cinéma. (vouloir)', a: ['voulons'], why: '*nous voulons*' },
            { q: 'Elle ___ à six heures. (finir)', a: ['finit'], why: '*elle finit*' },
            { q: 'Vous ___ parler plus lentement ? (pouvoir)', a: ['pouvez'], why: '*vous pouvez*' },
            { q: 'Ils ne ___ pas nager. (savoir)', a: ['savent'], why: '*ils savent*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right verb.', items: [
            { q: 'Je ne ___ pas nager. (I do not know how to)', o: ['sais', 'peux', 'veux'], why: 'To know how to do something: *savoir*.' },
            { q: 'Tu ___ boire un café ? (Do you want…?)', o: ['veux', 'sais', 'peux'], why: 'To want: *vouloir*.' },
            { q: 'Il pleut : nous ne ___ pas sortir. (cannot)', o: ['pouvons', 'savons', 'voulons'], why: 'Because of the rain it is not possible: *pouvons*.' },
            { q: 'Les cours ___ à midi.', o: ['finissent', 'finit', 'finis'], why: 'Several things, *ils*: *finissent*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je sais jouer au tennis.', why: '*je sais* + infinitive.' },
            { a: 'Vous pouvez venir samedi ?', why: '*pouvoir* + infinitive.' },
            { a: 'Nous voulons aller au cinéma.', why: '*vouloir* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'On se retrouve où ?',
      about: 'Arrange to meet, and talk about the weather and the seasons.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To invite someone, say **Tu es libre samedi ?** (Are you free on Saturday?), **Tu veux venir ?** or **On va au cinéma ?** To accept, say **Oui, avec plaisir !** or **D’accord, c’est parfait.** To say no politely, say **Désolé(e), je ne peux pas** and give a reason. To agree on a place and a time, ask **On se retrouve où ?** and **À quelle heure ?**' },
          { t: 'dialogue', title: 'Samedi soir', lines: [
            { who: 'Sophie', s: 'Salut Lucas ! Tu es libre samedi soir ?' },
            { who: 'Lucas', s: 'Oui, pourquoi ?' },
            { who: 'Sophie', s: 'On va au cinéma ? Il y a un bon film à huit heures.' },
            { who: 'Lucas', s: 'Avec plaisir ! On se retrouve où ?' },
            { who: 'Sophie', s: 'Devant le cinéma, à sept heures et demie.' },
            { who: 'Lucas', s: 'D’accord. À samedi !' },
          ] },
          { t: 'tip', art: 'owl', md: '**On** is used a lot in speech instead of *nous*: **On va au cinéma ?** means *Shall we go to the cinema?* The verb has the same form as for *il*: *on va*, *on mange*, *on se retrouve*. **Avec plaisir** and **volontiers** (gladly) are warm ways to say yes.' },
        ],
        [
          { t: 'text', md: 'To talk about the weather, French uses **il fait** + an adjective (*Il fait beau, il fait chaud, il fait froid*) and **il pleut**, **il neige**. The seasons are **le printemps** (spring), **l’été** (summer), **l’automne** (autumn) and **l’hiver** (winter). To say *in* a season, use **en** (*en été*, *en automne*, *en hiver*) but **au printemps**.' },
          { t: 'table', caption: 'The weather', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Il fait beau.', 'The weather is nice.'],
            ['Il fait chaud.', 'It is hot.'],
            ['Il fait froid.', 'It is cold.'],
            ['Il pleut.', 'It is raining.'],
            ['Il neige.', 'It is snowing.'],
            ['Il y a du vent.', 'It is windy.'],
            ['Il y a du soleil.', 'It is sunny.'],
          ] },
          { t: 'examples', items: [
            { s: '**Tu es libre** demain ?', n: 'Asking if someone is free.' },
            { s: '**On se retrouve** devant la gare.', n: 'A place to meet.' },
            { s: '**À quelle heure** ?', n: 'Asking for the time.' },
            { s: 'En été, **il fait chaud**.', n: '*en* + a season.' },
            { s: 'Au printemps, **il pleut** souvent.', n: '*au printemps* is the exception.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Tu es libre samedi ?', 'Oui, avec plaisir !'],
            ['On se retrouve où ?', 'Devant le cinéma.'],
            ['À quelle heure ?', 'À sept heures et demie.'],
            ['Tu veux venir ?', 'Désolé, je ne peux pas.'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Which season is it?', groups: ['l’été', 'l’hiver'], items: [
            { s: 'Il fait chaud.', g: 0, why: 'Hot weather is typical of summer.' },
            { s: 'Il neige.', g: 1, why: 'Snow comes in winter.' },
            { s: 'Il y a du soleil.', g: 0, why: 'Sun is typical of summer.' },
            { s: 'Il fait très froid.', g: 1, why: 'Cold is typical of winter.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'On se retrouve devant la gare.', why: '*on se retrouve* + place.' },
            { a: 'Tu es libre samedi soir ?', why: '*Tu es libre* + day.' },
            { a: 'Il fait beau aujourd’hui.', why: '*Il fait* + adjective.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You invite a friend to the cinema:', o: ['On va au cinéma ?', 'Au revoir !', 'Il pleut.'], why: '*On va … ?* is an invitation.' },
            { q: 'You cannot come:', o: ['Désolé, je ne peux pas.', 'Avec plaisir !', 'À samedi !'], why: 'A polite no.' },
            { q: 'It is snowing:', o: ['Il neige.', 'Il pleut.', 'Il fait chaud.'], why: '*neiger* is to snow.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Les activités du week-end',
      about: 'Read notices from a sports club and a language café.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Le club de sport', md: '**Club de sport du quartier**\nCet été, venez faire du sport avec nous !\nLe mardi et le jeudi : natation à 18 h.\nLe samedi matin : vélo en groupe, départ à 9 h devant le club.\nLe dimanche : tennis, de 10 h à 12 h.\n\nOn peut essayer un cours gratuit. Il faut un maillot de bain pour la natation.' },
          { t: 'reading', title: 'Le café des langues', md: '**Café des langues**\nVous voulez parler français ? Venez le mercredi soir, à 19 h, au café de la gare. Vous pouvez parler avec des personnes de beaucoup de pays. On joue aussi à des jeux de cartes. Pas besoin de réserver !' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'La natation est le mardi et le jeudi.', a: 't', why: '*Le mardi et le jeudi : natation à 18 h.*' },
            { q: 'Le tennis est le samedi.', a: 'f', why: 'Tennis is on Sunday, from 10 to 12.' },
            { q: 'Le premier cours est gratuit.', a: 't', why: '*On peut essayer un cours gratuit.*' },
            { q: 'Le club est ouvert le lundi.', a: 'ng', why: 'The notice does not say whether the club is open on Monday.' },
            { q: 'Le café des langues est le mercredi soir.', a: 't', why: '*Venez le mercredi soir, à 19 h.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Où est le café des langues ?', o: ['au café de la gare', 'devant le club', 'à la piscine'], why: '*au café de la gare*' },
            { q: 'À quelle heure part le vélo en groupe ?', o: ['à 9 h', 'à 10 h', 'à 18 h'], why: '*départ à 9 h*' },
            { q: 'Qu’est-ce qu’il faut pour la natation ?', o: ['un maillot de bain', 'un vélo', 'une raquette'], why: '*Il faut un maillot de bain pour la natation.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the notices.', items: [
            { q: 'Au café des langues, on joue aux ___.', a: ['cartes', 'jeux de cartes'], why: '*On joue aussi à des jeux de cartes.*' },
            { q: 'Le dimanche, on joue au ___ de dix heures à midi.', a: ['tennis'], why: '*Le dimanche : tennis.*' },
            { q: 'Pas besoin de ___ !', a: ['réserver', 'reserver'], why: '*Pas besoin de réserver !*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je joue ___ football.', o: ['au', 'du', 'aux'], why: '*jouer au football*' },
      { q: 'Elle joue ___ piano.', o: ['du', 'au', 'à la'], why: '*jouer du piano*' },
      { q: 'Tu ___ venir samedi ?', o: ['peux', 'sais', 'finis'], why: '*Tu peux venir ?* means can you come.' },
      { q: 'Nous ___ à six heures.', o: ['finissons', 'finit', 'finissez'], why: '*nous finissons*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Elle ne ___ pas jouer de la guitare. (savoir)', a: ['sait'], why: '*elle sait*' },
      { q: 'En ___, il fait chaud.', a: ['été', 'ete'], why: '*en été*' },
      { q: 'Nous ___ du vélo le dimanche. (faire)', a: ['faisons'], why: '*nous faisons*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
      ['Tu es libre samedi ?', 'Oui, avec plaisir !'],
      ['On se retrouve où ?', 'Devant le cinéma.'],
      ['Il fait quel temps ?', 'Il pleut.'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je ne peux pas venir.', why: '*ne … pas* around *peux*.' },
      { a: 'On va au cinéma samedi soir ?', why: 'Invitation with *on*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il [est] froid.', a: ['fait'], why: 'The weather: *il fait froid*.' },
    ] },
    { t: 'ex', kind: 'conjugate', h: 'Write the forms of vouloir.', verb: 'vouloir', tense: 'present', rows: [
      ['je', 'veux'],
      ['nous', 'voulons'],
      ['ils', 'veulent'],
    ] },
  ],
};
