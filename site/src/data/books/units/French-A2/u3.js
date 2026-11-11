// French A2, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Experiences and childhood',
  goal: 'Talk about what you used to do and what you have already done. Learn the imparfait, and the difference between the imparfait and the passé composé.',
  art: 'dragon',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['imparfait', 'habits', 'description', 'passé composé', 'déjà', 'jamais', 'childhood'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’habitais, j’étais, je faisais',
      about: 'Form the imparfait.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **imparfait** is the second past tense of French. You use it to say what you used to do, or what things were like. It is very easy to form. Take the **nous** form of the present, remove **-ons**, and add the endings **-ais, -ais, -ait, -ions, -iez, -aient**. *nous parlons* gives **parl-**; *nous finissons* gives **finiss-**; *nous faisons* gives **fais-**.' },
          { t: 'table', caption: 'habiter and finir in the imparfait', quiz: true, head: ['', 'habiter', 'finir'], rows: [
            ['je', 'habitais', 'finissais'],
            ['tu', 'habitais', 'finissais'],
            ['il / elle / on', 'habitait', 'finissait'],
            ['nous', 'habitions', 'finissions'],
            ['vous', 'habitiez', 'finissiez'],
            ['ils / elles', 'habitaient', 'finissaient'],
          ] },
          { t: 'tip', art: 'owl', md: 'The endings **-ais**, **-ait** and **-aient** all sound the same: **è**. You hear a difference only between *habitais* (one person) and *habitions* / *habitiez* (the ending is longer). The only irregular stem is **être**: **ét-**. So *j’étais, tu étais, il était, nous étions, vous étiez, ils étaient*.' },
        ],
        [
          { t: 'table', caption: 'Common verbs in the imparfait', explain: ['head', 'col3'], head: ['Verb', 'je', 'nous', 'Meaning'], rows: [
            ['être', 'j’étais', 'nous étions', 'to be'],
            ['avoir', 'j’avais', 'nous avions', 'to have'],
            ['aller', 'j’allais', 'nous allions', 'to go'],
            ['faire', 'je faisais', 'nous faisions', 'to do'],
            ['jouer', 'je jouais', 'nous jouions', 'to play'],
            ['manger', 'je mangeais', 'nous mangions', 'to eat'],
            ['voir', 'je voyais', 'nous voyions', 'to see'],
            ['prendre', 'je prenais', 'nous prenions', 'to take'],
          ] },
          { t: 'examples', items: [
            { s: 'Quand j’**étais** petit, **j’habitais** à la campagne.', n: '*habitais* and *étais*.' },
            { s: 'Nous **jouions** dans le jardin tous les jours.', n: '*nous jouions*' },
            { s: 'Mon père **travaillait** beaucoup.', n: '*il travaillait*' },
            { s: 'Elle **avait** un chien et deux chats.', n: '*elle avait*' },
            { s: 'Ils **allaient** à l’école à pied.', n: '*ils allaient*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the imparfait of être.', verb: 'être', tense: 'imparfait', rows: [
            ['je', 'étais|etais'],
            ['tu', 'étais|etais'],
            ['il / elle', 'était|etait'],
            ['nous', 'étions|etions'],
            ['vous', 'étiez|etiez'],
            ['ils / elles', 'étaient|etaient'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the imparfait.', items: [
            { q: 'Quand j’étais petit, j’___ à Lyon. (habiter)', a: ['habitais'], why: '*j’habitais*' },
            { q: 'Nous ___ au football tous les jours. (jouer)', a: ['jouions'], why: '*nous jouions*' },
            { q: 'Mon père ___ dans une banque. (travailler)', a: ['travaillait'], why: '*il travaillait*' },
            { q: 'Vous ___ souvent au cinéma ? (aller)', a: ['alliez'], why: '*vous alliez*' },
            { q: 'Elles ___ un grand jardin. (avoir)', a: ['avaient'], why: '*elles avaient*' },
            { q: 'Tu ___ beaucoup de sport. (faire)', a: ['faisais'], why: '*tu faisais*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quand j’étais petit, je [mangais] des bonbons.', a: ['mangeais'], why: 'Keep the *e* before *-ais*: *mangeais*.' },
            { s: 'Nous [étaions] très contents.', a: ['étions', 'etions'], why: 'The stem of *être* is *ét-*: *nous étions*.' },
            { s: 'Il [habitais] à Paris.', a: ['habitait'], why: '*il habitait*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the imparfait.', pairs: [
            ['je parle', 'je parlais'],
            ['nous finissons', 'nous finissions'],
            ['il fait', 'il faisait'],
            ['elles ont', 'elles avaient'],
            ['vous êtes', 'vous étiez'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Quand j’étais petit',
      about: 'Use the imparfait for habits and descriptions.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'The imparfait has two main uses. It says what you **used to do** (a habit), and it **describes** how things were: weather, age, feelings, places. Words that often go with it are **souvent** (often), **toujours** (always), **tous les jours** (every day), **le dimanche** (on Sundays), **chaque été** (each summer) and **quand j’étais petit(e)** (when I was little).' },
          { t: 'examples', items: [
            { s: 'Quand j’étais petit, **je jouais** dans la rue.', n: 'A habit in the past.' },
            { s: 'Le dimanche, **nous allions** chez ma grand-mère.', n: 'Every Sunday.' },
            { s: 'Il **faisait** beau et il y **avait** du soleil.', n: 'A description of the weather.' },
            { s: 'J’**avais** dix ans et j’**étais** très timide.', n: 'Age and feelings.' },
            { s: 'La maison **était** petite, mais elle **avait** un grand jardin.', n: 'A description of a place.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Compare with English: *I used to play*, *I played every day* and *I was playing* are all **je jouais** in French. The imparfait does not say how long something lasted or when it ended; it says only that it was a habit or a situation.' },
        ],
        [
          { t: 'dialogue', title: 'Quand j’étais petite', lines: [
            { who: 'Sophie', s: 'Où est-ce que tu habitais quand tu étais petite ?' },
            { who: 'Nadia', s: 'J’habitais dans un petit village. Nous avions une grande maison avec un jardin.' },
            { who: 'Sophie', s: 'Et tu jouais avec qui ?' },
            { who: 'Nadia', s: 'Avec mon frère et mes cousins. Nous jouions dehors tous les jours, même quand il pleuvait.' },
          ] },
          { t: 'table', caption: 'Time words for habits', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['souvent', 'often'],
            ['toujours', 'always'],
            ['tous les jours', 'every day'],
            ['le week-end', 'at weekends'],
            ['chaque été', 'every summer'],
            ['quand j’étais petit(e)', 'when I was little'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Quand j’étais petit, je ___ au parc tous les jours.', o: ['jouais', 'ai joué', 'jouerai'], why: 'A habit in the past: the imparfait.' },
            { q: 'Il ___ très froid hier soir.', o: ['faisait', 'a fait', 'fera'], why: 'A description of the weather: the imparfait.' },
            { q: 'Nous ___ chez ma grand-mère chaque dimanche.', o: ['allions', 'sommes allés', 'allons'], why: 'A habit: the imparfait.' },
            { q: 'Elle ___ dix ans à l’époque.', o: ['avait', 'a eu', 'aura'], why: 'Age in the past: the imparfait.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quand j’étais petit, je jouais dehors.', why: '*quand j’étais petit* sets the scene.' },
            { a: 'Nous mangions toujours chez ma grand-mère.', why: '*toujours* after the verb.' },
            { a: 'Il faisait beau tous les jours.', why: 'A weather description.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Habit or one event?', groups: ['habit', 'one event'], explain: ['groups'], items: [
            { s: 'Chaque été, nous allions à la mer.', g: 0, why: '*chaque été* is a habit: imparfait.' },
            { s: 'Hier, j’ai vu un film.', g: 1, why: '*hier* is a single event: passé composé.' },
            { s: 'Tous les jours, je prenais le bus.', g: 0, why: 'A habit.' },
            { s: 'Samedi, nous avons mangé au restaurant.', g: 1, why: 'A single event on Saturday.' },
            { s: 'Souvent, il jouait dans la rue.', g: 0, why: '*souvent* is a habit.' },
            { s: 'Ce matin, elle est partie à huit heures.', g: 1, why: 'A single event this morning.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Il pleuvait quand je suis sorti',
      about: 'Passé composé or imparfait, and déjà, jamais and pas encore.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Use the **imparfait** for the background (what was happening, what things were like) and the **passé composé** for the event that happened in that background: *Il pleuvait quand je suis sorti.* (It was raining when I went out.) *J’étais fatigué, alors je suis rentré.* (I was tired, so I went home.) The imparfait is the stage, the passé composé is the action.' },
          { t: 'table', caption: 'Which tense?', explain: ['head'], head: ['Use', 'Tense', 'Example'], rows: [
            ['One finished event', 'passé composé', 'Hier, j’ai vu un film.'],
            ['A habit or repeated action', 'imparfait', 'Je regardais un film chaque soir.'],
            ['A description in the past', 'imparfait', 'Il faisait froid et il était tard.'],
            ['An event in a background', 'both', 'Il pleuvait quand je suis parti.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The word **quand** often links the two: *Quand je suis arrivé, il dormait.* (When I arrived, he was sleeping.) The word **pendant que** (while) is followed by the imparfait: *Pendant que je cuisinais, il regardait la télé.*' },
        ],
        [
          { t: 'text', md: 'To say whether you have done something, use the passé composé with **déjà** (already, ever), **jamais** (never) and **pas encore** (not yet): *Tu as déjà visité Paris ? – Oui, j’ai déjà visité Paris. – Non, je n’ai jamais visité Paris. – Non, pas encore.* **ne … jamais** goes around the auxiliary: *Je n’ai jamais mangé de sushis.*' },
          { t: 'examples', items: [
            { s: 'Tu **as déjà** mangé des escargots ?', n: '*déjà* between *as* and the participle.' },
            { s: 'Oui, j’en ai **déjà** mangé une fois.', n: 'Yes, once.' },
            { s: 'Non, je **n’ai jamais** mangé d’escargots.', n: 'Never. After *jamais*, *des* becomes *d’*.' },
            { s: 'Elle **n’a pas encore** visité le musée.', n: 'Not yet.' },
            { s: 'Nous **sommes déjà** allés à Lyon.', n: 'With *être*: *sommes déjà allés*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Passé composé or imparfait?', items: [
            { q: 'Quand je ___, il pleuvait.', o: ['suis sorti', 'sortais', 'sors'], why: 'The event: passé composé. The rain is the background.' },
            { q: 'Il ___ très tard quand nous sommes rentrés.', o: ['était', 'a été', 'est'], why: 'A description of the time: imparfait.' },
            { q: 'Hier, nous ___ un bon film.', o: ['avons vu', 'voyions', 'voyons'], why: 'A single event yesterday: passé composé.' },
            { q: 'Quand j’étais petit, je ___ toujours du chocolat.', o: ['mangeais', 'ai mangé', 'mange'], why: 'A habit: imparfait.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write déjà, jamais or pas encore.', items: [
            { q: 'Tu as ___ visité Lyon ?', a: ['déjà', 'deja'], why: '*déjà* in a question means ever.' },
            { q: 'Je n’ai ___ mangé de sushis.', a: ['jamais'], why: '*ne … jamais* means never.' },
            { q: 'Nous n’avons ___ vu ce film. Nous allons le voir demain.', a: ['pas encore'], why: '*pas encore* means not yet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the sentence in the past. Use the imparfait for the background.', items: [
            { q: 'Il pleut quand je sors. (au passé)', cue: 'Il pleuvait', a: ['Il pleuvait quand je suis sorti.', 'Il pleuvait quand je suis sortie.'], why: 'Rain is the background (imparfait); going out is the event (passé composé).' },
            { q: 'Je suis fatigué, alors je rentre. (au passé)', cue: 'J’étais', a: ['J’étais fatigué, alors je suis rentré.', 'J’étais fatiguée, alors je suis rentrée.'], why: 'Tiredness is the background; going home is the event.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'On dit « J’ai mangeais ».', a: 'f', why: 'Do not mix the two: *je mangeais* or *j’ai mangé*.' },
            { q: 'On dit « Il pleuvait » pour décrire le temps.', a: 't', why: 'A description of the weather: imparfait.' },
            { q: 'On dit « Je n’ai pas jamais mangé ».', a: 'f', why: 'Use *ne … jamais* alone, not *pas jamais*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Souvenirs d’école',
      about: 'Read two people remembering their school days.',
      art: 'dragon',
      spreads: [
        [
          { t: 'reading', title: 'Quand j’étais écolier', md: '**Karim**\nQuand j’étais petit, j’habitais à Rabat. J’allais à l’école à pied avec mon frère. Nous partions à huit heures, et nous rentrions à midi pour manger. L’après-midi, nous jouions au football dans la rue. Un jour, un ballon est tombé dans le jardin d’un voisin. Il a ouvert la porte et il nous a rendu le ballon avec un grand sourire !\n\n**Sophie**\nMoi, j’habitais près de Lyon. J’avais une institutrice très gentille qui s’appelait Madame Roux. Chaque jour, nous chantions une chanson avant de commencer. Le mercredi, nous n’avions pas école. Je faisais de la danse le matin et je jouais avec mes amies l’après-midi. Je n’ai jamais oublié ces années-là.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Karim allait à l’école à pied.', a: 't', why: '*J’allais à l’école à pied avec mon frère.*' },
            { q: 'Karim rentrait à midi pour manger.', a: 't', why: '*nous rentrions à midi pour manger*' },
            { q: 'Sophie avait école le mercredi.', a: 'f', why: '*Le mercredi, nous n’avions pas école.*' },
            { q: 'Madame Roux était sévère.', a: 'f', why: 'She was *très gentille*.' },
            { q: 'Karim avait un chien.', a: 'ng', why: 'The text does not mention a dog.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que faisait Sophie le mercredi matin ?', o: ['De la danse.', 'Du football.', 'Ses devoirs.'], why: '*Je faisais de la danse le matin.*' },
            { q: 'Que s’est-il passé un jour pour Karim ?', o: ['Un ballon est tombé chez un voisin.', 'Il a perdu son école.', 'Il a rencontré un ami.'], why: '*Un jour, un ballon est tombé dans le jardin d’un voisin.*' },
            { q: 'Pourquoi le voisin souriait-il ?', o: ['Il a rendu le ballon avec un sourire.', 'Il n’aimait pas les enfants.', 'Il jouait avec eux.'], why: '*il nous a rendu le ballon avec un grand sourire*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the imparfait.', items: [
            { s: 'Nous [partions] à huit heures et nous [rentrions] à midi.', why: '*partions* and *rentrions* are imparfait forms.' },
            { s: 'Chaque jour, nous [chantions] une chanson.', why: '*chantions* is the imparfait of *chanter*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Quand j’étais petit, nous ___ à la mer chaque été.', o: ['allions', 'sommes allés', 'irons'], why: 'A habit: imparfait.' },
      { q: 'Hier, j’___ un très bon film.', o: ['ai vu', 'voyais', 'verrai'], why: 'One event: passé composé.' },
      { q: 'Il ___ quand je suis sorti.', o: ['pleuvait', 'a plu', 'pleut'], why: 'Background: imparfait.' },
      { q: 'Nous ___ très contents.', o: ['étions', 'étaions', 'sommes'], why: 'The imparfait of *être*: *nous étions*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Quand j’étais petite, j’___ à la campagne. (habiter)', a: ['habitais'], why: '*j’habitais*' },
      { q: 'Je n’ai ___ visité Rome. (never)', a: ['jamais'], why: '*ne … jamais*' },
      { q: 'Nous ___ au football tous les jours. (jouer)', a: ['jouions'], why: '*nous jouions*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the imparfait.', pairs: [
      ['je mange', 'je mangeais'],
      ['nous avons', 'nous avions'],
      ['il fait', 'il faisait'],
      ['ils vont', 'ils allaient'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Quand j’étais petit, je jouais dehors.', why: '*quand j’étais petit* + imparfait.' },
      { a: 'Il pleuvait quand je suis sorti.', why: 'Imparfait for the background, passé composé for the event.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Quand j’étais petit, je [ai joué] dans la rue.', a: ['jouais'], why: 'A habit: *je jouais*.' },
      { s: 'Nous [mangons] toujours chez elle.', a: ['mangions'], why: 'The imparfait of *manger*: *nous mangions*.' },
    ] },
  ],
};
