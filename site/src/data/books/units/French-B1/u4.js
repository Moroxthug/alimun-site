// French B1, unit 4 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u4',
  title: 'Work and careers',
  goal: 'Apply for a job, handle an interview and write a polite formal letter. Use the conditional for politeness and for hypotheses with si.',
  art: 'mug',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['conditional', 'politeness', 'hypothesis', 'si clauses', 'formal letter', 'CV', 'interview'], goals: ['foundations', 'professional'] },
  pages: [
    {
      id: 'p1',
      title: 'Je voudrais, pourriez-vous',
      about: 'Form the conditional and use it to be polite.',
      art: 'mug',
      spreads: [
        [
          { t: 'text', md: 'The **conditional** says what would happen or makes a request more polite. You already know *je voudrais* and *vous devriez*. To form it, take the **future stem** (the infinitive, without the final **e** for verbs in **-re**) and add the **imparfait endings**: **-ais, -ais, -ait, -ions, -iez, -aient**. So *parler* gives *je parlerais*, and *prendre* gives *je prendrais*.' },
          { t: 'table', caption: 'The conditional', quiz: true, head: ['', 'parler', 'prendre', 'être'], rows: [
            ['je', 'parlerais', 'prendrais', 'serais'],
            ['tu', 'parlerais', 'prendrais', 'serais'],
            ['il / elle / on', 'parlerait', 'prendrait', 'serait'],
            ['nous', 'parlerions', 'prendrions', 'serions'],
            ['vous', 'parleriez', 'prendriez', 'seriez'],
            ['ils / elles', 'parleraient', 'prendraient', 'seraient'],
          ] },
          { t: 'tip', art: 'owl', md: 'The irregular stems are the same as in the **future**: *ser-, aur-, ir-, fer-, viendr-, pourr-, voudr-, verr-*. So *je serai* (future) and *je serais* (conditional) differ only in the ending: **-ai** and **-ais**. In speech, they are close: pay attention to context.' },
        ],
        [
          { t: 'text', md: 'The conditional is the language of **politeness**. Compare *Je veux un café* (direct) with **Je voudrais un café** (polite). To ask for help, use **Pourriez-vous …?** (could you) and **Pourrais-je …?** (could I). To say what would be best, use **Il faudrait** and **On devrait**. To give a wish, use **J’aimerais** and **Je préférerais**.' },
          { t: 'table', caption: 'Polite phrases', explain: ['head', 'col2'], head: ['Direct', 'Polite', 'Meaning'], rows: [
            ['Je veux un rendez-vous.', 'Je voudrais un rendez-vous.', 'I would like an appointment.'],
            ['Pouvez-vous m’aider ?', 'Pourriez-vous m’aider ?', 'Could you help me?'],
            ['Je peux entrer ?', 'Pourrais-je entrer ?', 'Could I come in?'],
            ['Il faut partir.', 'Il faudrait partir.', 'We should leave.'],
            ['J’aime travailler ici.', 'J’aimerais travailler ici.', 'I would like to work here.'],
          ] },
          { t: 'dialogue', title: 'Un entretien', lines: [
            { who: 'Sophie', s: 'Pourriez-vous vous présenter en quelques mots ?' },
            { who: 'Karim', s: 'Bien sûr. Je m’appelle Karim Benali, j’ai trente ans et je suis ingénieur.' },
            { who: 'Sophie', s: 'Pourquoi aimeriez-vous travailler chez nous ?' },
            { who: 'Karim', s: 'J’aimerais apprendre de nouvelles choses et je pourrais apporter mon expérience.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the conditional of aimer.', verb: 'aimer', tense: 'conditionnel', rows: [
            ['j’', 'aimerais'],
            ['tu', 'aimerais'],
            ['il / elle', 'aimerait'],
            ['nous', 'aimerions'],
            ['vous', 'aimeriez'],
            ['ils / elles', 'aimeraient'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the conditional.', items: [
            { q: 'Je ___ un café, s’il vous plaît. (vouloir)', a: ['voudrais'], why: '*je voudrais*' },
            { q: '___-vous m’aider ? (pouvoir)', a: ['Pourriez'], why: '*Pourriez-vous* is the polite question.' },
            { q: 'Nous ___ partir demain. (devoir)', a: ['devrions'], why: '*nous devrions*' },
            { q: 'Elle ___ travailler ici. (aimer)', a: ['aimerait'], why: '*elle aimerait*' },
            { q: 'Ils ___ plus de temps. (avoir)', a: ['auraient'], why: 'The stem is *aur-*: *ils auraient*.' },
            { q: 'Il ___ mieux partir. (valoir)', a: ['vaudrait'], why: '*il vaudrait mieux* = it would be better.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the request more polite.', items: [
            { q: 'Je veux un rendez-vous.', cue: 'Je', a: ['Je voudrais un rendez-vous.'], why: '*vouloir* → *voudrais*.' },
            { q: 'Pouvez-vous m’aider ?', cue: 'Pourriez', a: ['Pourriez-vous m’aider ?'], why: '*pouvoir* → *pourriez*.' },
            { q: 'Il faut partir.', cue: 'Il', a: ['Il faudrait partir.'], why: '*falloir* → *faudrait*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Pourriez-vous me répéter la question ?', why: '*Pourriez-vous* + infinitive.' },
            { a: 'Je voudrais poser une question.', why: '*Je voudrais* + infinitive.' },
            { a: 'J’aimerais travailler dans une grande entreprise.', why: '*J’aimerais* + infinitive.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Si j’avais le temps',
      about: 'Talk about imaginary situations with si + imparfait and the conditional.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'To imagine a situation that is **unlikely** or **not real**, use **si** + **imparfait** in the condition and the **conditional** in the result: *Si j’avais le temps, je ferais un cours. Si j’étais riche, j’achèterais une maison.* Both parts can be turned around: *Je ferais un cours si j’avais le temps.* Never put the conditional right after **si**: say *si j’avais*, not *si j’aurais*.' },
          { t: 'table', caption: 'Real or imaginary?', explain: ['head', 'col2'], head: ['Type', 'Example', 'Meaning'], rows: [
            ['likely (A2)', 'Si j’ai le temps, je ferai un cours.', 'si + present, future'],
            ['unlikely', 'Si j’avais le temps, je ferais un cours.', 'si + imparfait, conditional'],
            ['impossible', 'Si j’étais toi, je partirais.', 'si + imparfait, conditional'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **si + imparfait** also for advice: **Si j’étais toi, je changerais de travail.** (If I were you, I would change jobs.) This is the best way to give advice politely. For a wish with no condition, use **J’aimerais** or **Je voudrais**.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Si j’avais** plus de temps, **je ferais** du sport.', n: 'But I do not have the time.' },
            { s: '**Si tu étais** moins timide, **tu parlerais** plus.', n: 'Imagining a different character.' },
            { s: '**Si nous gagnions** au loto, **nous voyagerions**.', n: 'Winning is unlikely.' },
            { s: 'Elle **trouverait** un travail **si elle parlait** anglais.', n: 'The *si* part can come second.' },
            { s: '**Si j’étais** à ta place, **je dirais** non.', n: 'Giving advice.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Si j’___ riche, j’achèterais une maison.', o: ['étais', 'serais', 'suis'], why: 'After *si*: the imparfait.' },
            { q: 'Si tu parlais anglais, tu ___ un meilleur travail.', o: ['trouverais', 'trouveras', 'trouvais'], why: 'The result: the conditional.' },
            { q: 'Si nous ___ plus de temps, nous voyagerions.', o: ['avions', 'aurions', 'aurons'], why: 'After *si*: the imparfait *avions*.' },
            { q: 'Je ___ ce travail si j’étais toi.', o: ['changerais', 'changeais', 'changerai'], why: 'The result: the conditional.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Imagine it: put the sentence into si + imparfait + conditional.', items: [
            { q: 'Je n’ai pas le temps. Je ne fais pas de sport. (Si …)', cue: 'Si j’avais', a: ['Si j’avais le temps, je ferais du sport.'], why: '*si j’avais* + conditional.' },
            { q: 'Tu es timide. Tu ne parles pas beaucoup. (Si …)', cue: 'Si tu', a: ['Si tu n’étais pas timide, tu parlerais beaucoup.', 'Si tu n’étais pas timide, tu parlerais plus.'], why: 'Imagine the opposite.' },
            { q: 'Il n’est pas riche. Il n’achète pas de maison. (Si …)', cue: 'S’il', a: ['S’il était riche, il achèterait une maison.'], why: '*si il* becomes *s’il*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Si j’[aurais] le temps, je viendrais.', a: ['avais'], why: 'Never the conditional after *si*: *si j’avais*.' },
            { s: 'Si tu [parleras] anglais, tu trouverais un travail.', a: ['parlais'], why: 'After *si*: the imparfait.' },
            { s: 'Si nous [sommes] riches, nous achèterions une maison.', a: ['étions'], why: 'For an imaginary situation: the imparfait.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Si j’étais toi, je changerais de travail.', why: 'Advice: *si j’étais toi*.' },
            { a: 'Nous voyagerions si nous avions plus de temps.', why: 'The *si* part can come second.' },
            { a: 'Elle trouverait un travail si elle parlait anglais.', why: 'Result first, condition second.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Real or imaginary? Choose.', items: [
            { q: 'Si j’ai le temps demain, ___.', o: ['je viendrai', 'je viendrais', 'je venais'], why: 'A likely situation: si + present, future.' },
            { q: 'Si j’avais le temps, ___.', o: ['je viendrais', 'je viendrai', 'je suis venu'], why: 'An imaginary situation: si + imparfait, conditional.' },
            { q: 'S’il pleut ce week-end, ___.', o: ['nous resterons', 'nous resterions', 'nous restions'], why: 'A likely situation: future.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Madame, Monsieur',
      about: 'Write a formal letter and a short CV.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'A formal letter follows fixed formulas. You start with **Madame, Monsieur,** (when you do not know the name) or **Madame la Directrice,** and you end with a polite closing. The letter says why you write, gives a short explanation and ends with a request. Use **vous** and the conditional for politeness.' },
          { t: 'table', caption: 'Formulas for a formal letter', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Madame, Monsieur,', 'Dear Sir or Madam,'],
            ['Je me permets de vous écrire pour …', 'I am writing to you to …'],
            ['Suite à votre annonce, …', 'Following your advertisement, …'],
            ['Je suis très intéressé(e) par …', 'I am very interested in …'],
            ['Veuillez trouver ci-joint mon CV.', 'Please find my CV attached.'],
            ['Je reste à votre disposition pour …', 'I remain at your disposal for …'],
            ['Je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.', 'Yours faithfully, (formal closing)'],
          ] },
          { t: 'tip', art: 'owl', md: 'The closing formula is long and fixed. For a less formal letter, **Cordialement** (Kind regards) is enough, especially by e-mail. Do not use **Bises** or **À bientôt** in a letter to someone you do not know. The date goes at the top, and the place name often comes before it: *Lyon, le 12 mars 2027.*' },
        ],
        [
          { t: 'text', md: 'A short **CV** (curriculum vitae) lists your studies, your experience and your skills. In the letter or the interview, you talk about it with the **passé composé** (what you did) and the **present** (what you can do): *J’ai travaillé deux ans dans un restaurant. J’ai étudié le commerce. Je parle trois langues. Je sais utiliser un ordinateur.*' },
          { t: 'table', caption: 'Talking about experience', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['J’ai travaillé pendant deux ans comme …', 'I worked for two years as …'],
            ['J’ai étudié … à l’université.', 'I studied … at university.'],
            ['Je parle couramment l’anglais.', 'I speak English fluently.'],
            ['Je sais utiliser …', 'I know how to use …'],
            ['Je suis capable de …', 'I am able to …'],
            ['Je cherche un poste de …', 'I am looking for a job as …'],
          ] },
          { t: 'examples', items: [
            { s: '**Suite à** votre annonce, **je me permets de** vous écrire.', n: 'The opening.' },
            { s: '**J’ai travaillé** pendant deux ans **comme** vendeur.', n: '*comme* + job.' },
            { s: '**Je suis capable de** travailler en équipe.', n: 'A skill.' },
            { s: '**Veuillez trouver ci-joint** mon CV.', n: 'Attaching the CV.' },
            { s: '**Je reste à votre disposition** pour un entretien.', n: 'The ending.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['bises', 'salut'], items: [
            { q: 'Suite à votre ___, je me permets de vous écrire.', a: 'annonce', why: '*suite à votre annonce* = following your advertisement.' },
            { q: 'Veuillez trouver ci-___ mon CV.', a: 'joint', why: '*ci-joint* = attached.' },
            { q: 'Je reste à votre ___ pour un entretien.', a: 'disposition', why: '*à votre disposition* = at your disposal.' },
            { q: 'Je vous prie d’___, Madame, Monsieur, l’expression de mes salutations distinguées.', a: 'agréer', why: '*Je vous prie d’agréer …* is the fixed closing.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Formal or informal?', groups: ['formal', 'informal'], explain: ['groups'], items: [
            { s: 'Madame, Monsieur,', g: 0, why: 'A formal opening.' },
            { s: 'Salut Paul,', g: 1, why: 'Friends only.' },
            { s: 'Cordialement,', g: 0, why: 'A polite closing for e-mails.' },
            { s: 'Grosses bises !', g: 1, why: 'Friends and family only.' },
            { s: 'Je me permets de vous écrire', g: 0, why: 'A formal opening line.' },
            { s: 'À plus !', g: 1, why: 'Very casual.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Suite à votre annonce, je suis très intéressé par ce poste.', why: 'The opening of a letter of application.' },
            { a: 'Veuillez trouver ci-joint mon CV.', why: 'Standard formula.' },
            { a: 'Je reste à votre disposition pour un entretien.', why: 'A polite ending.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which phrase fits?', items: [
            { q: 'You do not know the name of the person you write to:', o: ['Madame, Monsieur,', 'Salut,', 'Cher ami,'], why: 'The standard formal opening.' },
            { q: 'You attach your CV:', o: ['Veuillez trouver ci-joint mon CV.', 'Voici mon CV, salut.', 'Mon CV est là.'], why: 'The polite formula.' },
            { q: 'You say how long you worked as a cook:', o: ['J’ai travaillé pendant deux ans comme cuisinier.', 'Je travaillerai deux ans comme cuisinier.', 'Je travaillais deux ans comme cuisinier.'], why: 'A finished experience: the passé composé with *pendant*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une annonce, une lettre, un entretien',
      about: 'Read a job advert, a cover letter and interview questions.',
      art: 'mug',
      spreads: [
        [
          { t: 'reading', title: 'Offre d’emploi', md: '**Assistant(e) administratif(ve)**\nUne petite entreprise cherche un assistant ou une assistante administrative à temps plein. Vous répondez au téléphone, vous classez les documents et vous organisez les rendez-vous. Vous êtes organisé(e), sérieux(se) et vous parlez couramment français. Une connaissance de l’anglais serait un plus.\n\nEnvoyez votre CV et une lettre à emploi@example.com.' },
          { t: 'reading', title: 'Lettre de motivation', md: 'Madame, Monsieur,\n\nSuite à votre annonce, je me permets de vous écrire pour poser ma candidature au poste d’assistant administratif. J’ai travaillé pendant deux ans dans un bureau, où j’ai appris à organiser un agenda et à répondre aux clients. Je parle couramment français et anglais, et je sais utiliser les logiciels de bureau.\n\nSi vous m’invitiez à un entretien, je pourrais vous expliquer plus en détail mon expérience. Veuillez trouver ci-joint mon CV.\n\nJe vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.\n\nKarim Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'L’entreprise cherche un assistant à temps plein.', a: 't', why: '*à temps plein* = full time.' },
            { q: 'Il faut parler couramment anglais.', a: 'f', why: 'French is required; English is only *un plus*.' },
            { q: 'Karim a deux ans d’expérience dans un bureau.', a: 't', why: '*J’ai travaillé pendant deux ans dans un bureau.*' },
            { q: 'Karim demande un salaire de 2 000 euros.', a: 'ng', why: 'The letter does not talk about salary.' },
            { q: 'Karim joint son CV à la lettre.', a: 't', why: '*Veuillez trouver ci-joint mon CV.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que fait un assistant dans cette entreprise ?', o: ['Il répond au téléphone et organise les rendez-vous.', 'Il vend des produits.', 'Il cuisine.'], why: '*Vous répondez au téléphone … organisez les rendez-vous.*' },
            { q: 'Que propose Karim à la fin du premier paragraphe ?', o: ['Il pourrait expliquer son expérience en entretien.', 'Il veut changer de travail tout de suite.', 'Il demande un congé.'], why: '*Si vous m’invitiez à un entretien, je pourrais …*' },
            { q: 'Comment Karim termine-t-il sa lettre ?', o: ['Avec une formule de politesse formelle.', 'Avec « À bientôt ».', 'Sans conclusion.'], why: '*Je vous prie d’agréer … l’expression de mes salutations distinguées.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the conditional.', items: [
            { s: 'Si vous m’invitiez à un entretien, je [pourrais] vous expliquer mon expérience.', why: '*pourrais* is the conditional of *pouvoir*.' },
            { s: 'Une connaissance de l’anglais [serait] un plus.', why: '*serait* is the conditional of *être*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Karim pose sa ___ au poste d’assistant.', a: ['candidature'], why: '*poser sa candidature* = to apply.' },
            { q: 'Il sait utiliser les ___ de bureau.', a: ['logiciels'], why: '*les logiciels de bureau*' },
            { q: 'Il a travaillé ___ deux ans dans un bureau.', a: ['pendant'], why: '*pendant deux ans*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je ___ un rendez-vous, s’il vous plaît.', o: ['voudrais', 'veux', 'voulais'], why: 'The polite form: *je voudrais*.' },
      { q: 'Si j’___ le temps, je ferais un cours.', o: ['avais', 'aurais', 'ai'], why: 'After *si*: the imparfait.' },
      { q: '___-vous m’aider ? (polite)', o: ['Pourriez', 'Pouvez', 'Pourrez'], why: '*Pourriez-vous* is the polite question.' },
      { q: 'Suite à votre ___, je vous écris.', o: ['annonce', 'salut', 'bise'], why: '*suite à votre annonce*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Nous ___ partir demain. (devoir, conditional)', a: ['devrions'], why: '*nous devrions*' },
      { q: 'Veuillez trouver ci-___ mon CV.', a: ['joint'], why: '*ci-joint* = attached.' },
      { q: 'Elle ___ plus de temps si elle était libre. (avoir, conditional)', a: ['aurait'], why: 'The stem is *aur-*: *elle aurait*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['Madame, Monsieur,', 'Dear Sir or Madam,'],
      ['Cordialement,', 'Kind regards,'],
      ['un entretien', 'an interview'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Imagine it: si + imparfait + conditional.', items: [
      { q: 'Je n’ai pas le temps. Je ne fais pas de sport. (Si …)', cue: 'Si j’avais', a: ['Si j’avais le temps, je ferais du sport.'], why: '*si j’avais* + conditional.' },
      { q: 'Il n’est pas riche. Il n’achète pas de maison. (Si …)', cue: 'S’il', a: ['S’il était riche, il achèterait une maison.'], why: '*s’il* + imparfait, conditional.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Pourriez-vous me répéter la question ?', why: '*Pourriez-vous* + infinitive.' },
      { a: 'Si j’étais toi, je changerais de travail.', why: 'Advice.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Si j’[aurais] le temps, je viendrais.', a: ['avais'], why: 'Never the conditional after *si*.' },
    ] },
  ],
};
