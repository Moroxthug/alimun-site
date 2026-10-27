// French B1, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Health and lifestyle',
  goal: 'Talk about habits, health and wellbeing, and give advice. Use the subjunctive after il faut que, vouloir que and pour que, and the imperative with pronouns.',
  art: 'cactus',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'speaking'], topics: ['habits', 'frequency', 'health', 'wellbeing', 'subjunctive', 'advice', 'imperative with pronouns'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Une fois par semaine',
      about: 'Talk about your habits and how often you do things.',
      art: 'cactus',
      spreads: [
        [
          { t: 'text', md: 'To say how often you do something, use a **frequency word**. For a general idea: **toujours** (always), **souvent** (often), **parfois** (sometimes), **rarement** (rarely), **ne … jamais** (never). For a precise number: **une fois par semaine** (once a week), **deux fois par mois** (twice a month), **tous les jours** (every day), **au moins** (at least). Frequency words usually go after the verb: *Je fais souvent du sport.*' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['tous les jours', 'every day'],
            ['une fois par semaine', 'once a week'],
            ['deux fois par mois', 'twice a month'],
            ['souvent', 'often'],
            ['parfois', 'sometimes'],
            ['rarement', 'rarely'],
            ['ne … jamais', 'never'],
            ['au moins trois fois par semaine', 'at least three times a week'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a negative sentence with **ne … jamais**, **jamais** replaces **pas**: *Je ne fume jamais.* With the passé composé, **jamais** goes between the auxiliary and the participle: *Je n’ai jamais fumé.* Answer a question with a single word: *Tu fumes ? – Jamais.*' },
        ],
        [
          { t: 'table', caption: 'Health and lifestyle', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['être en forme', 'to be fit, in good shape'],
            ['manger équilibré', 'to eat a balanced diet'],
            ['dormir assez', 'to get enough sleep'],
            ['faire du sport', 'to do sport'],
            ['se détendre', 'to relax'],
            ['être stressé(e)', 'to be stressed'],
            ['se sentir fatigué(e)', 'to feel tired'],
            ['fumer', 'to smoke'],
          ] },
          { t: 'examples', items: [
            { s: 'Je fais du sport **deux fois par semaine**.', n: 'A precise frequency.' },
            { s: 'Il ne mange **jamais** de légumes.', n: '*ne … jamais*.' },
            { s: 'Nous dormons **rarement** plus de six heures.', n: 'Rarely.' },
            { s: 'Elle se sent **souvent** fatiguée le lundi.', n: '*se sentir* + adjective.' },
            { s: 'Il essaie de manger **équilibré**.', n: 'A balanced diet.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['tous les jours', 'every day'],
            ['rarement', 'rarely'],
            ['au moins', 'at least'],
            ['être en forme', 'to be fit'],
            ['se détendre', 'to relax'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Il ne fume ___.', o: ['jamais', 'pas jamais', 'toujours'], why: '*ne … jamais* means never.' },
            { q: 'Je fais du sport ___ fois par semaine.', o: ['deux', 'deuxième', 'second'], why: '*deux fois par semaine*' },
            { q: 'Je me couche tôt ___ jours.', o: ['tous les', 'toutes les', 'tout les'], why: '*tous les jours*' },
            { q: 'Elle se sent fatiguée ___ fois.', o: ['parfois', 'une', 'rarement'], why: 'Without a number: *parfois*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je fais du sport deux fois par semaine.', why: 'Frequency at the end.' },
            { a: 'Il ne fume jamais.', why: '*ne … jamais* around the verb.' },
            { a: 'Nous dormons rarement plus de six heures.', why: '*rarement* after the verb.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Good for your health or not?', groups: ['good', 'bad'], explain: ['groups'], items: [
            { s: 'manger équilibré', g: 0, why: 'A balanced diet is healthy.' },
            { s: 'fumer', g: 1, why: 'Smoking is bad for you.' },
            { s: 'dormir assez', g: 0, why: 'Enough sleep helps.' },
            { s: 'être stressé tous les jours', g: 1, why: 'Constant stress is bad.' },
            { s: 'faire du sport régulièrement', g: 0, why: 'Exercise keeps you fit.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je veux que tu ailles bien',
      about: 'Use the subjunctive after il faut que, vouloir que, pour que and avant que.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'In unit 2 you met the subjunctive after **il faut que** and **je ne pense pas que**. It is also used after **vouloir que**, **souhaiter que** (to wish), **il vaut mieux que** (it is better that), **avant que** (before) and **pour que** (so that). The subject must be **different** in the two parts: *Je veux que tu te reposes. Il part avant que nous arrivions. Je t’aide pour que tu finisses.* When the subject is the same, use the infinitive: *Je veux me reposer. Il part avant de manger.*' },
          { t: 'table', caption: 'Expressions followed by the subjunctive', explain: ['head', 'col1'], head: ['Expression', 'Meaning'], rows: [
            ['il faut que', 'it is necessary that'],
            ['je veux que', 'I want that'],
            ['il vaut mieux que', 'it is better that'],
            ['avant que', 'before'],
            ['pour que', 'so that'],
            ['je souhaite que', 'I wish that'],
            ['je ne pense pas que', 'I do not think that'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **avant de** and **pour** (same subject), use the infinitive; after **avant que** and **pour que** (different subject), use the subjunctive. Compare: *Je pars avant de manger* (I leave before I eat) and *Je pars avant que tu manges* (I leave before you eat).' },
        ],
        [
          { t: 'table', caption: 'More subjunctive forms', quiz: true, head: ['', 'prendre', 'venir', 'savoir', 'vouloir', 'dormir'], rows: [
            ['que je', 'prenne', 'vienne', 'sache', 'veuille', 'dorme'],
            ['que tu', 'prennes', 'viennes', 'saches', 'veuilles', 'dormes'],
            ['qu’il / elle', 'prenne', 'vienne', 'sache', 'veuille', 'dorme'],
            ['que nous', 'prenions', 'venions', 'sachions', 'voulions', 'dormions'],
            ['que vous', 'preniez', 'veniez', 'sachiez', 'vouliez', 'dormiez'],
            ['qu’ils / elles', 'prennent', 'viennent', 'sachent', 'veuillent', 'dorment'],
          ] },
          { t: 'examples', items: [
            { s: 'Je veux que **tu te reposes**.', n: '*vouloir que* + subjunctive.' },
            { s: 'Il vaut mieux que **nous partions** tôt.', n: '*il vaut mieux que* + subjunctive.' },
            { s: 'Je t’aide pour que **tu finisses** à l’heure.', n: '*pour que* + subjunctive.' },
            { s: 'Elle part avant qu’**il vienne**.', n: '*avant que* + subjunctive.' },
            { s: 'Il faut que **je sache** la vérité.', n: '*savoir* → *que je sache*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the subjunctive.', items: [
            { q: 'Je veux que tu te___. (reposer)', a: ['reposes'], why: '*que tu te reposes*' },
            { q: 'Il vaut mieux que nous ___ tôt. (partir)', a: ['partions'], why: '*que nous partions*' },
            { q: 'Je t’aide pour que tu ___ à l’heure. (finir)', a: ['finisses'], why: '*que tu finisses*' },
            { q: 'Il part avant qu’elle___. (venir)', a: ['vienne'], why: '*qu’elle vienne*' },
            { q: 'Il faut que je ___ la vérité. (savoir)', a: ['sache'], why: '*que je sache*' },
            { q: 'Je souhaite que vous ___ bien. (dormir)', a: ['dormiez'], why: '*que vous dormiez*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Infinitive or subjunctive?', items: [
            { q: 'Je veux ___ me reposer. (same subject)', o: ['—', 'que je', 'que'], why: 'Same subject: the infinitive, *je veux me reposer*.' },
            { q: 'Je veux que tu ___ te reposer.', o: ['puisses', 'peux', 'pouvoir'], why: 'Different subjects: the subjunctive *puisses*.' },
            { q: 'Il part avant ___ manger.', o: ['de', 'que', 'qu’'], why: 'Same subject: *avant de* + infinitive.' },
            { q: 'Il part avant ___ nous mangions.', o: ['que', 'de', 'à'], why: 'Different subject: *avant que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the sentences. Use pour que, avant que or avant de.', items: [
            { q: 'Je t’aide. Tu finis à l’heure. (pour que)', cue: 'Je t’aide', a: ['Je t’aide pour que tu finisses à l’heure.'], why: '*pour que* + subjunctive.' },
            { q: 'Il part. Nous arrivons. (avant que)', cue: 'Il part', a: ['Il part avant que nous arrivions.'], why: '*avant que* + subjunctive.' },
            { q: 'Il part. Il mange. (avant de)', cue: 'Il part', a: ['Il part avant de manger.'], why: 'Same subject: *avant de* + infinitive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je veux que tu te [repose].', a: ['reposes'], why: '*que tu te reposes*' },
            { s: 'Il part avant que nous [arrivons].', a: ['arrivions'], why: 'After *avant que*: the subjunctive.' },
            { s: 'Je veux que tu [pars] tôt.', a: ['partes'], why: 'After *vouloir que*: the subjunctive *que tu partes*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Repose-toi, mange-le',
      about: 'Give advice and warnings, and use the imperative with pronouns.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'To give **advice**, use the verbs and phrases you know: **vous devriez** + infinitive, **il vaut mieux** + infinitive, **je vous conseille de** + infinitive, **évitez de** + infinitive. To **warn**, use **attention à** or **ne … surtout pas**: *Évitez de manger trop de sucre. Je vous conseille de dormir plus. Ne vous inquiétez surtout pas.*' },
          { t: 'table', caption: 'Giving advice', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Vous devriez dormir plus.', 'You should sleep more.'],
            ['Il vaut mieux manger léger le soir.', 'It is better to eat light in the evening.'],
            ['Je vous conseille de faire du sport.', 'I advise you to do sport.'],
            ['Évitez de manger trop de sucre.', 'Avoid eating too much sugar.'],
            ['Ne vous inquiétez surtout pas.', 'Whatever you do, do not worry.'],
            ['Attention à ne pas trop travailler.', 'Be careful not to work too much.'],
          ] },
          { t: 'tip', art: 'owl', md: 'After **conseiller de**, **éviter de** and **il vaut mieux**, use the **infinitive**: *Je vous conseille de dormir.* Do not use the subjunctive here unless you say **il vaut mieux que** + different subject: *Il vaut mieux que vous dormiez.* Both are correct; the infinitive is simpler.' },
        ],
        [
          { t: 'text', md: 'In the imperative, the pronoun goes **after the verb** with a hyphen: *Repose-toi. Lève-toi. Dépêchez-vous. Mange-le. Donne-moi la clé.* For **me** and **te** at the end, use **moi** and **toi**: *Repose-toi* not *Repose-te*. In the negative, the pronoun goes **before** the verb: *Ne te repose pas. Ne le mange pas.* Use **-en** and **-y** the same way: *Prends-en.*' },
          { t: 'table', caption: 'Imperative with pronouns', explain: ['head', 'col2'], head: ['Positive', 'Negative', 'Meaning'], rows: [
            ['Repose-toi.', 'Ne te repose pas.', 'Rest. / Do not rest.'],
            ['Dépêchez-vous.', 'Ne vous dépêchez pas.', 'Hurry. / Do not hurry.'],
            ['Mange-le.', 'Ne le mange pas.', 'Eat it. / Do not eat it.'],
            ['Donne-moi la clé.', 'Ne me donne pas la clé.', 'Give me the key. / Do not give me the key.'],
            ['Prends-en.', 'N’en prends pas.', 'Take some. / Do not take any.'],
          ] },
          { t: 'dialogue', title: 'Chez le médecin', lines: [
            { who: 'Sophie', s: 'Docteur, je me sens très fatiguée depuis une semaine.' },
            { who: 'Paul', s: 'Je vous conseille de vous reposer. Dormez au moins huit heures.' },
            { who: 'Sophie', s: 'Est-ce que je peux continuer le sport ?' },
            { who: 'Paul', s: 'Oui, mais évitez de courir le soir. Reposez-vous bien et revenez me voir dans une semaine.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write the positive command with the pronoun.', items: [
            { q: 'Tu dois te reposer.', cue: 'Repose', a: ['Repose-toi.'], why: 'The pronoun goes after, and *te* becomes *toi*.' },
            { q: 'Vous devez vous dépêcher.', cue: 'Dépêchez', a: ['Dépêchez-vous.'], why: '*vous* stays *vous*.' },
            { q: 'Tu dois manger ce fruit.', cue: 'Mange', a: ['Mange-le.'], why: 'The pronoun goes after the verb with a hyphen.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right command.', items: [
            { q: 'Vous êtes fatigué. Un ami dit : « ___. »', o: ['Repose-toi', 'Te repose', 'Reposes-te'], why: '*Repose-toi.*' },
            { q: 'Un ami vous offre un bonbon que vous ne voulez pas : « Non, ___. »', o: ['ne le mange pas', 'ne mange le pas', 'ne mange pas le'], why: 'Negative: the pronoun goes before.' },
            { q: 'Vous voulez la clé. Vous dites à un ami : « ___ la clé. »', o: ['Donne-moi', 'Moi donne', 'Donne-me'], why: '*Donne-moi la clé.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je vous conseille de vous reposer.', why: '*conseiller de* + infinitive.' },
            { a: 'Évitez de manger trop de sucre.', why: '*éviter de* + infinitive.' },
            { a: 'Dépêchez-vous, le train part bientôt.', why: 'Pronoun after the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Te repose], tu es fatigué.', a: ['Repose-toi'], why: 'Positive command: *Repose-toi.*' },
            { s: 'Je vous conseille [que] dormir plus.', a: ['de'], why: '*conseiller de* + infinitive.' },
            { s: 'Ne [mange-le] pas.', a: ['le mange'], why: 'Negative: *ne le mange pas*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Bien vivre',
      about: 'Read a health advice page and a message to a friend.',
      art: 'cactus',
      spreads: [
        [
          { t: 'reading', title: 'Dormir mieux', md: '**Dormir mieux, c’est possible !**\nPour bien dormir, il faut que votre chambre soit calme et sombre. Évitez de regarder un écran dans l’heure avant le coucher. Essayez de vous coucher à la même heure tous les jours. Si vous ne dormez pas après vingt minutes, levez-vous et lisez un peu avant de vous recoucher.\n\nIl vaut mieux ne pas boire de café après quatre heures de l’après-midi. Faites du sport, mais pas juste avant de dormir. Et surtout, ne vous inquiétez pas : tout le monde dort mal de temps en temps.' },
          { t: 'reading', title: 'Un message à Clara', md: 'Salut Clara,\n\nJe suis désolée, je n’ai pas pu venir hier. Je ne dors plus bien depuis quelques semaines et je me sens fatiguée tous les jours. Mon médecin m’a conseillé de dormir plus et d’éviter le café. Il m’a dit aussi de me coucher à la même heure et de faire du sport régulièrement. Je veux que tu saches que je vais mieux. On se voit samedi ?\n\nBises, Nadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Pour bien dormir, il faut que la chambre soit calme et sombre.', a: 't', why: '*il faut que votre chambre soit calme et sombre*' },
            { q: 'On peut regarder un écran juste avant le coucher.', a: 'f', why: 'The page advises to *éviter de regarder un écran*.' },
            { q: 'On doit se lever si on ne dort pas après vingt minutes.', a: 't', why: '*Si vous ne dormez pas après vingt minutes, levez-vous.*' },
            { q: 'Nadia dort bien en ce moment.', a: 'f', why: 'She has not slept well for a few weeks.' },
            { q: 'Le médecin de Nadia habite à Paris.', a: 'ng', why: 'The message does not say where the doctor lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que conseille la page de ne pas faire après quatre heures ?', o: ['Boire du café.', 'Faire du sport.', 'Lire.'], why: '*ne pas boire de café après quatre heures*' },
            { q: 'Qu’a conseillé le médecin à Nadia ?', o: ['De dormir plus et d’éviter le café.', 'De changer de travail.', 'De boire plus de café.'], why: '*conseillé de dormir plus et d’éviter le café*' },
            { q: 'Pourquoi Nadia n’a-t-elle pas pu venir ?', o: ['Elle est fatiguée.', 'Elle est en voyage.', 'Elle travaillait.'], why: '*je me sens fatiguée tous les jours*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the subjunctive.', items: [
            { s: 'Il faut que votre chambre [soit] calme.', why: '*soit* is the subjunctive of *être*.' },
            { s: 'Je veux que tu [saches] que je vais mieux.', why: '*saches* is the subjunctive of *savoir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Évitez de regarder un ___ avant le coucher.', a: ['écran', 'ecran'], why: '*un écran*' },
            { q: 'Essayez de vous ___ à la même heure.', a: ['coucher'], why: '*vous coucher*' },
            { q: 'Le médecin lui a conseillé de faire du ___.', a: ['sport'], why: '*faire du sport régulièrement*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il ne fume ___.', o: ['jamais', 'pas jamais', 'toujours'], why: '*ne … jamais* means never.' },
      { q: 'Je veux que tu te ___ .', o: ['reposes', 'reposer', 'reposais'], why: 'After *vouloir que*: the subjunctive.' },
      { q: 'Il part avant ___ manger.', o: ['de', 'que', 'qu’'], why: 'Same subject: *avant de* + infinitive.' },
      { q: '___-toi, tu es fatigué.', o: ['Repose', 'Reposes', 'Reposer'], why: 'The imperative: *Repose-toi.*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Il faut que je ___ la vérité. (savoir)', a: ['sache'], why: '*que je sache*' },
      { q: 'Je vous conseille ___ dormir plus.', a: ['de'], why: '*conseiller de* + infinitive.' },
      { q: 'Je fais du sport deux ___ par semaine.', a: ['fois'], why: '*deux fois par semaine*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['rarement', 'rarely'],
      ['au moins', 'at least'],
      ['être en forme', 'to be fit'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Write the positive command with the pronoun.', items: [
      { q: 'Tu dois te reposer.', cue: 'Repose', a: ['Repose-toi.'], why: '*te* becomes *toi* after the verb.' },
      { q: 'Tu dois manger ce fruit.', cue: 'Mange', a: ['Mange-le.'], why: 'The pronoun goes after the verb.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Il part avant que nous arrivions.', why: '*avant que* + subjunctive.' },
      { a: 'Évitez de manger trop de sucre.', why: '*éviter de* + infinitive.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il part avant que nous [arrivons].', a: ['arrivions'], why: 'After *avant que*: the subjunctive.' },
    ] },
  ],
};
