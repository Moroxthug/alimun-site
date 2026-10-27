// French B1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Life stories',
  goal: 'Tell the story of a life or a trip in the past, in the right order and with the right tenses. Use the pluperfect, the agreement of the past participle and time links such as après avoir and avant de.',
  art: 'owl',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['imparfait', 'passé composé', 'plus-que-parfait', 'participle agreement', 'time links', 'passé récent', 'narrative'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’avais déjà mangé',
      about: 'Use the pluperfect for what had already happened.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'When you tell a story, you use the **passé composé** for the events and the **imparfait** for the background. Sometimes you need to go further back and say what **had already happened** before another past event. For this, French uses the **plus-que-parfait** (pluperfect): the **imparfait** of **avoir** or **être** and the past participle. *Quand je suis arrivé, le film avait déjà commencé.* (When I arrived, the film had already started.)' },
          { t: 'table', caption: 'The pluperfect', explain: ['head'], quiz: true, head: ['', 'with avoir (manger)', 'with être (partir)'], rows: [
            ['je', 'j’avais mangé', 'j’étais parti(e)'],
            ['tu', 'tu avais mangé', 'tu étais parti(e)'],
            ['il / elle / on', 'il avait mangé', 'elle était partie'],
            ['nous', 'nous avions mangé', 'nous étions parti(e)s'],
            ['vous', 'vous aviez mangé', 'vous étiez parti(e)(s)'],
            ['ils / elles', 'ils avaient mangé', 'elles étaient parties'],
          ] },
          { t: 'tip', art: 'owl', md: 'The verbs that use **être** in the passé composé also use **être** in the pluperfect, and the participle agrees with the subject in the same way: *elle était partie, nous étions arrivés*. The same goes for reflexive verbs: *je m’étais levé(e)*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Quand je suis arrivé à la gare, le train **était** déjà **parti**.', n: 'The train left first, then I arrived.' },
            { s: 'Elle **avait** déjà **mangé** quand nous sommes rentrés.', n: 'She had eaten before we came home.' },
            { s: 'Je n’**avais** jamais **vu** la mer avant l’âge de dix ans.', n: 'Never before ten: *jamais* with the pluperfect.' },
            { s: 'Ils **s’étaient rencontrés** à l’université.', n: 'Reflexive verb: *s’étaient rencontrés*.' },
            { s: 'Nous **avions préparé** le dîner, mais personne n’est venu.', n: 'Preparation first, then the disappointment.' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the pluperfect of finir.', verb: 'finir', tense: 'plus-que-parfait', rows: [
            ['j’', 'avais fini'],
            ['tu', 'avais fini'],
            ['il / elle', 'avait fini'],
            ['nous', 'avions fini'],
            ['vous', 'aviez fini'],
            ['ils / elles', 'avaient fini'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the pluperfect.', items: [
            { q: 'Quand je suis arrivé, le film ___ déjà commencé. (avoir)', a: ['avait'], why: 'The film began first: *avait commencé*.' },
            { q: 'Elle ___ déjà mangé quand nous sommes rentrés. (avoir)', a: ['avait'], why: '*elle avait mangé*' },
            { q: 'Nous ___ déjà partis quand il a téléphoné. (être)', a: ['étions', 'etions'], why: '*partir* uses *être*: *nous étions partis*.' },
            { q: 'Je n’___ jamais vu la mer avant l’âge de dix ans. (avoir)', a: ['avais'], why: '*je n’avais jamais vu*' },
            { q: 'Ils ___ rencontrés à l’université. (se, être)', a: ['s’étaient', 'setaient', 's’etaient'], why: 'Reflexive verbs use *être*: *ils s’étaient rencontrés*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Passé composé or pluperfect? Choose.', items: [
            { q: 'Quand je suis arrivé à la gare, le train ___.', o: ['était déjà parti', 'est déjà parti', 'partait déjà'], why: 'The train left before I arrived: the pluperfect.' },
            { q: 'Hier, nous ___ au cinéma.', o: ['sommes allés', 'étions allés', 'allions'], why: 'A single event with no earlier event: the passé composé.' },
            { q: 'Je n’ai pas reconnu Marie parce qu’elle ___ de coiffure.', o: ['avait changé', 'a changé', 'changeait'], why: 'The change happened before I saw her: the pluperfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the first sentence one step further back.', items: [
            { q: 'Il arrive. Le train part. (Quand il est arrivé, …)', cue: 'Quand il est arrivé', a: ['Quand il est arrivé, le train était parti.', 'Quand il est arrivé, le train était déjà parti.'], why: 'The train left first: *le train était parti*.' },
            { q: 'Nous rentrons. Elle prépare le dîner. (Quand nous sommes rentrés, …)', cue: 'Quand nous sommes rentrés', a: ['Quand nous sommes rentrés, elle avait préparé le dîner.', 'Quand nous sommes rentrés, elle avait déjà préparé le dîner.'], why: 'The dinner was ready before: *elle avait préparé*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quand je suis arrivé, elle [est] déjà partie.', a: ['était'], why: 'It happened before I arrived: *elle était déjà partie*.' },
            { s: 'Il [avais] déjà mangé.', a: ['avait'], why: '*il avait*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'La photo que j’ai prise',
      about: 'Agree the past participle with a direct object that comes before the verb.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'With **avoir**, the past participle normally does not change. But it **agrees** with the direct object when the object comes **before** the verb. This happens with the pronouns **le, la, l’, les** and with **que**: *J’ai pris la photo → La photo que j’ai prise est belle. Je l’ai vue.* The participle takes **-e** for a feminine object, **-s** for a plural one, and **-es** for a feminine plural.' },
          { t: 'table', caption: 'Agreement with avoir', explain: ['head'], head: ['Object', 'Sentence', 'Participle'], rows: [
            ['after the verb', 'J’ai pris la photo.', 'no change: pris'],
            ['la before the verb', 'Je l’ai prise.', 'feminine: prise'],
            ['les before the verb', 'Je les ai pris(es).', 'plural: pris / prises'],
            ['que (la photo)', 'La photo que j’ai prise.', 'feminine: prise'],
            ['que (les amis)', 'Les amis que j’ai invités.', 'plural: invités'],
          ] },
          { t: 'tip', art: 'owl', md: 'You often **cannot hear** the agreement, because *pris* and *prise* are different in speech, but *invité* and *invitée* sound the same. In writing, ask yourself: **what is the object, and is it before the verb?** If yes, agree. With **être**, the participle agrees with the subject, as before.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Voici la ville que **j’ai visitée** en juillet.', n: '*la ville* → *visitée*.' },
            { s: 'Où sont les photos ? Je les **ai perdues**.', n: '*les photos* → *perdues*.' },
            { s: 'Tu as vu Marie ? – Oui, je l’**ai vue** hier.', n: '*l’* is Marie, a woman: *vue*.' },
            { s: 'Les livres que nous **avons lus** étaient très bons.', n: 'Masculine plural: *lus*.' },
            { s: 'Elle **a écrit** une lettre.', n: 'The object comes after: no agreement.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the past participle in the right form.', items: [
            { q: 'La photo que j’ai ___ est belle. (prendre)', a: ['prise'], why: '*la photo* is feminine and before the verb: *prise*.' },
            { q: 'Les amis que nous avons ___ viennent samedi. (inviter)', a: ['invités', 'invites'], why: 'Masculine plural: *invités*.' },
            { q: 'Tu as vu Marie ? – Oui, je l’ai ___. (voir)', a: ['vue'], why: '*l’* is Marie: *vue*.' },
            { q: 'Les livres que j’ai ___ étaient longs. (lire)', a: ['lus'], why: 'Masculine plural: *lus*.' },
            { q: 'Elle a ___ une lettre. (écrire)', a: ['écrit', 'ecrit'], why: 'The object comes after the verb: no agreement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Les chaussures que j’ai ___ sont trop petites.', o: ['achetées', 'acheté', 'achetés'], why: '*les chaussures* is feminine plural, before the verb: *achetées*.' },
            { q: 'Le film que nous avons ___ était long.', o: ['vu', 'vue', 'vus'], why: '*le film* is masculine singular: *vu*.' },
            { q: 'La clé ? Je l’ai ___ dans le sac.', o: ['mise', 'mis', 'mises'], why: '*la clé* is feminine: *mise*.' },
            { q: 'Ils ont ___ leurs amis hier.', o: ['invité', 'invités', 'invitée'], why: 'The object comes after the verb: no agreement.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La photo que j’ai prise est belle.', why: '*la photo* is feminine and before the verb: *prise*.' },
            { a: 'Je les ai vus hier.', why: '*les* is masculine plural: *vus*.' },
            { a: 'Les livres que nous avons lus étaient longs.', why: '*les livres* before the verb: *lus*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'La ville que j’ai [visité] est belle.', a: ['visitée'], why: '*la ville* is feminine and before the verb: *visitée*.' },
            { s: 'Les photos ? Je les ai [perdu].', a: ['perdues'], why: '*les photos* is feminine plural: *perdues*.' },
            { s: 'Elle a [écrite] une lettre.', a: ['écrit', 'ecrit'], why: 'The object comes after the verb: no agreement.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'On écrit « La lettre que j’ai écrit ».', a: 'f', why: '*la lettre* is feminine and before the verb: *écrite*.' },
            { q: 'On écrit « Je l’ai vue » si on parle d’une femme.', a: 't', why: '*l’* is a woman: *vue*.' },
            { q: 'Avec *avoir*, le participe s’accorde avec le sujet.', a: 'f', why: 'With *avoir* it agrees with a direct object that comes before, not with the subject.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Après avoir, avant de',
      about: 'Link events in time with quand, pendant que, après avoir, avant de and venir de.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A story needs links that show the order of events. **Quand** and **pendant que** take a full clause: *Quand j’ai fini, je suis parti. Pendant que je cuisinais, il lisait.* **Avant de** + infinitive and **après avoir** + participle work when both actions have the **same subject**: *Avant de partir, j’ai fermé la porte. Après avoir mangé, nous sommes sortis.* With a verb of movement, use **après être**: *Après être arrivé, il a téléphoné.*' },
          { t: 'table', caption: 'Time links', explain: ['head', 'col2'], head: ['Link', 'Example', 'Meaning'], rows: [
            ['quand', 'Quand je suis rentré, il dormait.', 'when'],
            ['pendant que', 'Pendant que je cuisinais, il lisait.', 'while'],
            ['avant de + infinitive', 'Avant de partir, j’ai téléphoné.', 'before leaving'],
            ['après avoir + participle', 'Après avoir mangé, nous sommes sortis.', 'after eating'],
            ['après être + participle', 'Après être arrivé, il a téléphoné.', 'after arriving'],
            ['depuis que', 'Depuis que j’habite ici, je suis content.', 'since'],
          ] },
          { t: 'tip', art: 'owl', md: '**Avant de** and **après avoir** need the **same subject** in both parts: *Avant de partir, je ferme la porte* (I leave and I close). If the subjects differ, use a full clause: *Avant que tu partes …* (with the subjunctive, in unit 2) or *Après que tu es parti …*.' },
        ],
        [
          { t: 'text', md: 'To say something has **just** happened, use **venir de** + infinitive, which is the **recent past**: *Je viens de finir. Elle vient d’arriver.* To say it had just happened in the past, put **venir** in the imparfait: *Il venait de partir quand elle est arrivée.* To say *ago*, use **il y a**: *Il est parti il y a une heure.*' },
          { t: 'examples', items: [
            { s: '**Après avoir mangé**, nous sommes allés au cinéma.', n: 'Eating first, then the cinema.' },
            { s: '**Avant de partir**, il a fermé les fenêtres.', n: 'Closing windows first.' },
            { s: 'Je **viens de** rentrer du travail.', n: 'Just now.' },
            { s: 'Il **venait de** partir quand elle est arrivée.', n: 'Imparfait for the background.' },
            { s: '**Depuis que** je travaille ici, j’ai appris beaucoup.', n: 'From then until now.' },
          ] },
          { t: 'dialogue', title: 'Une journée chargée', lines: [
            { who: 'Sophie', s: 'Tu as l’air fatigué, Lucas.' },
            { who: 'Lucas', s: 'Oui. Je viens de finir une longue réunion. Avant de venir ici, j’avais déjà travaillé six heures.' },
            { who: 'Sophie', s: 'Et après avoir mangé, tu vas rentrer ?' },
            { who: 'Lucas', s: 'Oui. Quand je serai à la maison, je dormirai tout de suite.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right link.', items: [
            { q: '___ partir, il a fermé la porte.', o: ['Avant de', 'Après avoir', 'Pendant que'], why: 'Closing the door came first: *avant de*.' },
            { q: '___ mangé, nous sommes sortis.', o: ['Après avoir', 'Avant de', 'Depuis que'], why: 'Eating came first: *après avoir*.' },
            { q: 'Je ___ rentrer du travail.', o: ['viens de', 'vais', 'venais'], why: '*venir de* = just now.' },
            { q: '___ je cuisinais, il lisait.', o: ['Pendant que', 'Après avoir', 'Avant de'], why: 'Two actions at the same time: *pendant que*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with après avoir or avant de.', items: [
            { q: 'Nous avons mangé. Nous sommes sortis. (Après …)', cue: 'Après avoir mangé', a: ['Après avoir mangé, nous sommes sortis.'], why: '*après avoir* + participle.' },
            { q: 'Il a fermé la porte. Il est parti. (Avant …)', cue: 'Avant de partir', a: ['Avant de partir, il a fermé la porte.'], why: '*avant de* + infinitive.' },
            { q: 'Elle est arrivée. Elle a téléphoné. (Après …)', cue: 'Après être arrivée', a: ['Après être arrivée, elle a téléphoné.'], why: '*arriver* uses *être*, and the participle agrees: *arrivée*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Après avoir mangé, nous sommes sortis.', why: '*après avoir* + participle, then the main clause.' },
            { a: 'Avant de partir, il a fermé la porte.', why: '*avant de* + infinitive.' },
            { a: 'Il vient de finir sa réunion.', why: '*venir de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Je ___ de finir mon travail. (venir)', a: ['viens'], why: '*je viens de* + infinitive.' },
            { q: 'Il est parti il y a une ___.', a: ['heure'], why: '*il y a une heure* means an hour ago.' },
            { q: '___ que j’habite ici, j’ai changé de travail.', a: ['Depuis'], why: '*depuis que* means since.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une vie en trois villes',
      about: 'Read a short autobiography and a travel memory.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Ma vie en trois villes', md: '**Karim**\nJe suis né à Casablanca. Quand j’avais dix ans, ma famille a déménagé à Rabat parce que mon père avait trouvé un nouveau travail. J’y ai fait toute ma scolarité. Après avoir passé mon baccalauréat, je suis parti étudier l’informatique à Lyon. Avant de partir, j’avais appris le français pendant sept ans, mais je n’avais jamais vécu loin de ma famille.\n\nLes premiers mois ont été difficiles. J’avais l’impression que tout le monde parlait trop vite. Pourtant, j’ai rencontré des amis formidables, que je vois encore aujourd’hui. Depuis que j’ai fini mes études, je travaille à Paris. Je viens de revoir mes premiers professeurs, que j’avais perdus de vue pendant dix ans.' },
          { t: 'reading', title: 'Un voyage inoubliable', md: '**Sophie**\nL’été dernier, j’ai fait un voyage en train à travers la France. Je suis partie de Lille à huit heures. Quand je suis arrivée à Lyon, il pleuvait. J’avais réservé une chambre dans un petit hôtel, que j’ai trouvé grâce à une amie. La femme que j’ai rencontrée à la réception était très gentille. Elle m’a donné une carte de la ville que j’ai gardée.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Karim est né à Rabat.', a: 'f', why: 'He was born in Casablanca and moved to Rabat later.' },
            { q: 'La famille de Karim a déménagé parce que son père avait trouvé un nouveau travail.', a: 't', why: '*mon père avait trouvé un nouveau travail*' },
            { q: 'Karim a étudié l’informatique à Lyon.', a: 't', why: '*je suis parti étudier l’informatique à Lyon*' },
            { q: 'Karim a trois frères.', a: 'ng', why: 'The text does not mention his brothers.' },
            { q: 'Sophie a réservé la chambre à l’avance.', a: 't', why: '*J’avais réservé une chambre.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pourquoi les premiers mois ont-ils été difficiles pour Karim ?', o: ['Il trouvait que les gens parlaient trop vite.', 'Il n’avait pas d’amis.', 'Il ne comprenait pas l’informatique.'], why: '*J’avais l’impression que tout le monde parlait trop vite.*' },
            { q: 'Où travaille Karim maintenant ?', o: ['À Paris.', 'À Lyon.', 'À Rabat.'], why: '*Depuis que j’ai fini mes études, je travaille à Paris.*' },
            { q: 'Qu’est-ce que Sophie a gardé ?', o: ['La carte de la ville.', 'La clé de la chambre.', 'Un livre.'], why: '*une carte de la ville que j’ai gardée*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the pluperfect.', items: [
            { s: 'Mon père [avait trouvé] un nouveau travail.', why: '*avait trouvé* is the pluperfect.' },
            { s: 'J’[avais appris] le français, mais je n’[avais jamais vécu] loin de ma famille.', why: '*avais appris* and *avais vécu* are in the pluperfect.' },
            { s: 'J’[avais réservé] une chambre.', why: '*avais réservé* is the pluperfect.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with the past participle.', items: [
            { q: 'La femme que j’ai ___ à la réception était gentille. (rencontrer)', a: ['rencontrée'], why: '*la femme* is feminine and before the verb: *rencontrée*.' },
            { q: 'Les amis que j’ai ___ à Lyon, je les vois encore. (rencontrer)', a: ['rencontrés'], why: 'Masculine plural: *rencontrés*.' },
            { q: 'Après ___ mon baccalauréat, je suis parti. (passer)', a: ['avoir passé'], why: '*après avoir passé*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Quand je suis arrivé, le film ___ déjà commencé.', o: ['avait', 'a', 'avais'], why: 'Pluperfect: *avait commencé*.' },
      { q: 'La photo que j’ai ___ est belle.', o: ['prise', 'pris', 'prises'], why: '*la photo* is feminine and before the verb.' },
      { q: '___ partir, il a fermé la porte.', o: ['Avant de', 'Après avoir', 'Pendant que'], why: 'Closing the door came first.' },
      { q: 'Je ___ de finir ma réunion.', o: ['viens', 'vais', 'venais'], why: '*venir de* = just now.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nous ___ déjà partis quand il a téléphoné. (être)', a: ['étions', 'etions'], why: 'Pluperfect with *être*: *étions partis*.' },
      { q: 'Tu as vu Marie ? – Oui, je l’ai ___. (voir)', a: ['vue'], why: '*l’* is Marie: *vue*.' },
      { q: '___ avoir mangé, nous sommes sortis.', a: ['Après'], why: '*après avoir mangé*' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the two sentences.', items: [
      { q: 'Nous avons mangé. Nous sommes sortis. (Après …)', cue: 'Après avoir mangé', a: ['Après avoir mangé, nous sommes sortis.'], why: '*après avoir* + participle.' },
      { q: 'Il arrive. Le train part. (Quand il est arrivé, …)', cue: 'Quand il est arrivé', a: ['Quand il est arrivé, le train était parti.', 'Quand il est arrivé, le train était déjà parti.'], why: 'The train left first: the pluperfect.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Les livres que nous avons lus étaient longs.', why: '*les livres* is before the verb: *lus*.' },
      { a: 'Elle vient d’arriver à la gare.', why: '*venir de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'La ville que j’ai [visité] est belle.', a: ['visitée'], why: 'Agree with *la ville*: *visitée*.' },
      { s: 'Quand je suis arrivé, elle [est] déjà partie.', a: ['était'], why: 'Earlier event: *était partie*.' },
    ] },
  ],
};
