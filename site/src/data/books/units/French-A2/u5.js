// French A2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Health',
  goal: 'Say what hurts, make a doctor’s appointment and understand simple advice. Learn avoir mal à, devoir and il faut, and the imperative with advice.',
  art: 'ghost',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['body', 'avoir mal à', 'illness', 'devoir', 'il faut', 'advice', 'appointments', 'pharmacy'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’ai mal à la tête',
      about: 'Name parts of the body and say what hurts.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'To say that a part of your body hurts, use **avoir mal à** + the part of the body: *J’ai mal à la tête. Il a mal au dos. Elle a mal aux pieds.* Remember the small words: **à + le = au**, **à + les = aux**, but **à la** and **à l’** do not change. To ask *Where does it hurt?*, say **Où avez-vous mal ?** or **Où as-tu mal ?**' },
          { t: 'table', caption: 'The body', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['la tête', 'head'],
            ['les yeux (m.)', 'eyes'],
            ['le nez, la bouche', 'nose, mouth'],
            ['l’oreille (f.)', 'ear'],
            ['la gorge', 'throat'],
            ['le dos', 'back'],
            ['le ventre', 'stomach, belly'],
            ['le bras, la main', 'arm, hand'],
            ['la jambe, le pied', 'leg, foot'],
            ['les dents (f.)', 'teeth'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not translate *I have a headache* word for word. French says **j’ai mal à la tête**, with *à* and the body part. For a cold, use **j’ai un rhume**; for a fever, **j’ai de la fièvre**; for a cough, **je tousse** or **j’ai de la toux**. In French, **la grippe** is flu.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Où as-tu mal ? – **J’ai mal à la** gorge.', n: '*gorge* is feminine: *à la*.' },
            { s: 'Il **a mal au** dos depuis lundi.', n: '*dos* is masculine: *au*.' },
            { s: 'Les enfants **ont mal aux** dents.', n: 'Plural: *aux*.' },
            { s: 'Elle **a mal à l’**oreille.', n: 'Before a vowel: *à l’*.' },
            { s: 'Je suis **malade**, **j’ai de la fièvre** et **je suis fatigué**.', n: 'Describing how you feel.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose à la, à l’, au or aux.', items: [
            { q: 'J’ai mal ___ tête.', o: ['à la', 'au', 'aux'], why: '*tête* is feminine: *à la*.' },
            { q: 'Il a mal ___ ventre.', o: ['au', 'à la', 'aux'], why: '*ventre* is masculine: *au*.' },
            { q: 'Elles ont mal ___ pieds.', o: ['aux', 'au', 'à la'], why: 'Plural: *aux*.' },
            { q: 'Nous avons mal ___ oreille.', o: ['à l’', 'à la', 'au'], why: 'Before a vowel: *à l’*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['la gorge', 'throat'],
            ['le dos', 'back'],
            ['la main', 'hand'],
            ['les dents', 'teeth'],
            ['le ventre', 'stomach'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing words.', items: [
            { q: 'Où ___-vous mal ?', a: ['avez'], why: '*Où avez-vous mal ?*' },
            { q: 'Il a mal ___ dos.', a: ['au'], why: '*dos* is masculine: *au*.' },
            { q: 'Elle a mal ___ yeux.', a: ['aux'], why: '*yeux* is plural: *aux*.' },
            { q: 'J’ai de la ___. (fever)', a: ['fièvre', 'fievre'], why: '*de la fièvre*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'search', h: 'Find the parts of the body.', words: ['tête', 'dos', 'main', 'pied', 'ventre', 'gorge'] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'J’ai mal à la tête.', why: '*avoir mal à* + body part.' },
            { a: 'Il a mal aux pieds.', why: 'Plural: *aux*.' },
            { a: 'Où avez-vous mal ?', why: 'Question with *vous*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Vous devez vous reposer',
      about: 'devoir, il faut and advice with the imperative.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To give advice or say what you must do, use **devoir** (must, to have to) and **il faut** + an infinitive: *Tu dois te reposer. Il faut boire beaucoup d’eau.* **devoir** is irregular. For polite advice, French uses **vous devriez** (you should) + infinitive: *Vous devriez voir un médecin.* Use it as a fixed phrase at this level.' },
          { t: 'table', caption: 'devoir (must, to have to)', quiz: true, head: ['', 'devoir'], rows: [
            ['je', 'dois'],
            ['tu', 'dois'],
            ['il / elle / on', 'doit'],
            ['nous', 'devons'],
            ['vous', 'devez'],
            ['ils / elles', 'doivent'],
          ] },
          { t: 'tip', art: 'owl', md: '**Il faut** is the same for every person: *Il faut manger.* Compare: **vous devez** is stronger (you must), and **vous devriez** is softer (you should).' },
        ],
        [
          { t: 'text', md: 'The doctor often gives advice with the **imperative**. For reflexive verbs, the pronoun goes **after** the verb in a positive command, and **toi / vous** replace *te / vous*: *Repose-toi. Reposez-vous. Couche-toi tôt.* In a negative command, the pronoun stays before: *Ne vous inquiétez pas. Ne te lève pas.*' },
          { t: 'table', caption: 'Common advice', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Reposez-vous.', 'Rest.'],
            ['Buvez beaucoup d’eau.', 'Drink a lot of water.'],
            ['Prenez ce médicament deux fois par jour.', 'Take this medicine twice a day.'],
            ['Restez au lit.', 'Stay in bed.'],
            ['Ne vous inquiétez pas.', 'Do not worry.'],
            ['Vous devriez voir un médecin.', 'You should see a doctor.'],
            ['Il faut dormir huit heures.', 'You need to sleep eight hours.'],
          ] },
          { t: 'examples', items: [
            { s: 'Je **dois** aller chez le médecin.', n: '*devoir* + infinitive.' },
            { s: 'Tu **dois** te reposer.', n: '*tu dois*' },
            { s: 'Nous **devons** partir à huit heures.', n: '*nous devons*' },
            { s: '**Il faut** boire de l’eau.', n: 'The same for everybody.' },
            { s: 'Ne **vous** inquiétez **pas**.', n: 'Negative: *Ne vous … pas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of devoir.', verb: 'devoir', tense: 'present', rows: [
            ['je', 'dois'],
            ['tu', 'dois'],
            ['il / elle', 'doit'],
            ['nous', 'devons'],
            ['vous', 'devez'],
            ['ils / elles', 'doivent'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the right form of the verb.', items: [
            { q: 'Tu ___ te reposer. (devoir)', a: ['dois'], why: '*tu dois*' },
            { q: 'Nous ___ partir à huit heures. (devoir)', a: ['devons'], why: '*nous devons*' },
            { q: 'Elle ___ prendre ses médicaments. (devoir)', a: ['doit'], why: '*elle doit*' },
            { q: 'Il ___ boire beaucoup d’eau.', a: ['faut'], why: '*il faut*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the doctor say?', items: [
            { q: 'Vous avez de la fièvre : « ___ au lit. »', o: ['Restez', 'Allez', 'Sortez'], why: 'With a fever, stay in bed: *Restez au lit.*' },
            { q: 'Vous toussez : « ___ beaucoup d’eau. »', o: ['Buvez', 'Mangez', 'Cherchez'], why: 'Drink water: *Buvez*.' },
            { q: 'Vous êtes très fatigué : « ___-vous. »', o: ['Reposez', 'Reposer', 'Repose'], why: '*Reposez-vous.* with *vous*.' },
            { q: 'Vous avez peur : « Ne ___ pas. »', o: ['vous inquiétez', 'inquiétez-vous', 'vous inquiéter'], why: 'Negative: *Ne vous inquiétez pas.*' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Vous devriez voir un médecin.', why: '*vous devriez* + infinitive.' },
            { a: 'Reposez-vous et buvez beaucoup d’eau.', why: 'Two imperatives joined by *et*.' },
            { a: 'Ne vous inquiétez pas.', why: 'Negative imperative: *ne vous … pas*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Prendre rendez-vous',
      about: 'Make an appointment by phone and talk to a pharmacist.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To make an appointment, say **Je voudrais prendre rendez-vous avec le docteur …**. The receptionist asks **Quel jour vous convient ?** (What day suits you?) and **C’est urgent ?** You answer **Lundi à dix heures, si possible** (Monday at ten, if possible). To cancel or change, say **Je dois annuler mon rendez-vous** or **Je voudrais le déplacer**.' },
          { t: 'dialogue', title: 'Au téléphone', lines: [
            { who: 'Réceptionniste', s: 'Cabinet du docteur Roux, bonjour.' },
            { who: 'Paul', s: 'Bonjour, je voudrais prendre rendez-vous, s’il vous plaît. J’ai très mal à la gorge.' },
            { who: 'Réceptionniste', s: 'Quel jour vous convient ? Le docteur est libre demain à dix heures.' },
            { who: 'Paul', s: 'Demain à dix heures, c’est parfait. Merci beaucoup.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In France, you can often see a doctor with an appointment made by phone or online. For urgent problems, people call **le 15** (the medical emergency number) or go to **les urgences** at the hospital. In many countries, the emergency number is also **112**.' },
        ],
        [
          { t: 'table', caption: 'At the doctor’s and at the pharmacy', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['un rendez-vous', 'an appointment'],
            ['un médecin, le docteur', 'a doctor'],
            ['une ordonnance', 'a prescription'],
            ['un médicament', 'a medicine'],
            ['une boîte de comprimés', 'a box of tablets'],
            ['un sirop', 'a syrup'],
            ['la pharmacie', 'the pharmacy'],
            ['deux fois par jour', 'twice a day'],
          ] },
          { t: 'dialogue', title: 'À la pharmacie', lines: [
            { who: 'Lucas', s: 'Bonjour, j’ai mal à la tête et j’ai de la fièvre. Qu’est-ce que vous me conseillez ?' },
            { who: 'Pharmacienne', s: 'Prenez ce médicament deux fois par jour, après le repas.' },
            { who: 'Lucas', s: 'Combien de temps ?' },
            { who: 'Pharmacienne', s: 'Trois jours. Si vous avez toujours de la fièvre, vous devez voir un médecin.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['ordonnance', 'urgent'], items: [
            { q: 'Je voudrais prendre ___ avec le docteur.', a: 'rendez-vous', why: '*prendre rendez-vous* means to make an appointment.' },
            { q: 'Quel jour vous ___ ?', a: 'convient', why: '*Quel jour vous convient ?*' },
            { q: 'Prenez ce médicament ___ fois par jour.', a: 'deux', why: '*deux fois par jour* means twice a day.' },
            { q: 'Si vous avez toujours de la fièvre, vous ___ voir un médecin.', a: 'devez', why: '*vous devez* means you must.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'Paul a mal à la gorge.', a: 't', why: '*J’ai très mal à la gorge.*' },
            { q: 'Le rendez-vous est pour demain à dix heures.', a: 't', why: '*Demain à dix heures, c’est parfait.*' },
            { q: 'Lucas doit prendre le médicament pendant une semaine.', a: 'f', why: 'For three days.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You want an appointment:', o: ['Je voudrais prendre rendez-vous.', 'Je voudrais prendre le train.', 'Je voudrais un café.'], why: '*prendre rendez-vous*' },
            { q: 'The receptionist asks which day suits you. You say:', o: ['Lundi à dix heures, si possible.', 'J’ai mal au dos.', 'Je suis en retard.'], why: 'Answer with a day and a time.' },
            { q: 'You cannot come to the appointment:', o: ['Je dois annuler mon rendez-vous.', 'Je suis arrivé.', 'Je prends un médicament.'], why: '*annuler* means to cancel.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je voudrais prendre rendez-vous demain.', why: '*Je voudrais* + infinitive.' },
            { a: 'Quel jour vous convient ?', why: 'The receptionist’s question.' },
            { a: 'Prenez ce médicament deux fois par jour.', why: 'Imperative + frequency.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'À la pharmacie',
      about: 'Read a pharmacy leaflet and an appointment confirmation.',
      art: 'ghost',
      spreads: [
        [
          { t: 'reading', title: 'Conseils de la pharmacie', md: '**Vous avez un rhume ?**\nReposez-vous et buvez beaucoup d’eau chaude. Dormez huit heures par nuit. Lavez-vous souvent les mains. Si vous avez de la fièvre pendant plus de trois jours, vous devez voir un médecin.\n\nOuvert du lundi au samedi, de 9 h à 19 h.' },
          { t: 'reading', title: 'Confirmation de rendez-vous', md: 'Bonjour,\n\nVotre rendez-vous avec le docteur Roux est confirmé pour mardi à 10 h 30. Veuillez arriver dix minutes avant. Apportez votre carte vitale et vos anciennes ordonnances. Si vous ne pouvez pas venir, merci de nous écrire à cabinet@example.com au moins un jour avant.\n\nÀ bientôt,\nLe secrétariat' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Pour un rhume, il faut boire beaucoup d’eau chaude.', a: 't', why: '*buvez beaucoup d’eau chaude*' },
            { q: 'On doit voir un médecin si on a de la fièvre pendant plus de trois jours.', a: 't', why: '*pendant plus de trois jours, vous devez voir un médecin*' },
            { q: 'La pharmacie est ouverte le dimanche.', a: 'f', why: 'It is open from Monday to Saturday.' },
            { q: 'Le rendez-vous est confirmé pour mardi à 10 h 30.', a: 't', why: '*mardi à 10 h 30*' },
            { q: 'Il faut payer en espèces.', a: 'ng', why: 'The message does not talk about payment.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que faut-il apporter au rendez-vous ?', o: ['La carte vitale et les anciennes ordonnances.', 'Un médicament.', 'Un document de voyage.'], why: '*Apportez votre carte vitale et vos anciennes ordonnances.*' },
            { q: 'À quelle heure faut-il arriver ?', o: ['À 10 h 20.', 'À 10 h 30.', 'À 11 h.'], why: 'Ten minutes before 10 h 30.' },
            { q: 'Que faire si on ne peut pas venir ?', o: ['Écrire au cabinet un jour avant.', 'Venir quand même.', 'Appeler le 15.'], why: '*merci de nous écrire … au moins un jour avant*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Il faut dormir ___ heures par nuit.', a: ['huit'], why: '*Dormez huit heures par nuit.*' },
            { q: 'Lavez-vous souvent les ___.', a: ['mains'], why: '*Lavez-vous souvent les mains.*' },
            { q: 'La pharmacie ferme à ___ heures.', a: ['19', 'dix-neuf'], why: '*de 9 h à 19 h*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il a mal ___ dos.', o: ['au', 'à la', 'aux'], why: '*dos* is masculine: *au*.' },
      { q: 'Elle a mal ___ tête.', o: ['à la', 'au', 'à l’'], why: '*tête* is feminine: *à la*.' },
      { q: 'Tu ___ te reposer.', o: ['dois', 'doit', 'devons'], why: '*tu dois*' },
      { q: 'Quand on est malade : « ___-vous. »', o: ['Reposez', 'Reposer', 'Repose'], why: '*Reposez-vous.*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Les enfants ont mal ___ dents.', a: ['aux'], why: 'Plural: *aux*.' },
      { q: 'Il ___ boire beaucoup d’eau.', a: ['faut'], why: '*il faut*' },
      { q: 'Je voudrais prendre ___ avec le docteur.', a: ['rendez-vous'], why: '*prendre rendez-vous*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['la gorge', 'throat'],
      ['le dos', 'back'],
      ['une ordonnance', 'a prescription'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'J’ai mal à la tête.', why: '*avoir mal à* + body part.' },
      { a: 'Vous devriez voir un médecin.', why: '*vous devriez* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'J’ai mal [à le] ventre.', a: ['au'], why: '*à* + *le* = *au*.' },
      { s: 'Nous [devez] partir.', a: ['devons'], why: '*nous devons*' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
      { q: 'Si vous avez de la fièvre, ___ au lit.', o: ['restez', 'restez-vous', 'rester'], why: 'The imperative: *Restez au lit.*' },
    ] },
  ],
};
