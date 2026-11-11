// French B2, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Media and society',
  goal: 'Read and discuss the news, and take a nuanced position on social questions. Use the language of the press, concession with the subjunctive and hedging to report information you cannot verify.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['press', 'headlines', 'passive', 'concession', 'subjunctive', 'hedging', 'reported information', 'nuance'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Hausse des prix, la loi est adoptée',
      about: 'Read the language of the news: headlines, nominal style and the passive.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Newspaper headlines in French often drop the verb and use a **noun phrase**: *Hausse des prix de l’énergie* (Energy prices rise), *Adoption de la loi* (Law adopted). This is called the **nominal style**. Inside the article, journalists prefer the **passive** (*La loi a été adoptée hier*) and the **pronominal passive** (*Ce mot ne se dit plus. Cela se fait souvent.*) because they say what happened without naming who did it. Nouns derived from verbs, such as **la création**, **la disparition**, **l’adoption**, do much of the work.' },
          { t: 'table', caption: 'Verb and noun', explain: ['head', 'col2'], head: ['Verb', 'Noun', 'Meaning'], rows: [
            ['adopter', 'l’adoption (f.)', 'adoption'],
            ['augmenter', 'une hausse, une augmentation', 'rise'],
            ['baisser', 'une baisse', 'fall'],
            ['créer', 'la création', 'creation'],
            ['disparaître', 'la disparition', 'disappearance'],
            ['annoncer', 'une annonce', 'announcement'],
            ['enquêter', 'une enquête', 'investigation'],
            ['manifester', 'une manifestation', 'demonstration'],
          ] },
          { t: 'tip', art: 'owl', md: 'To turn a headline into a sentence, find the verb behind the noun: *Annonce d’une réforme* becomes *Le gouvernement annonce une réforme*. Pay attention to the tense: headlines use the present for past events (*Le Premier ministre démissionne*) to sound immediate.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'La nouvelle loi **a été adoptée** hier soir.', n: 'The passive in the passé composé.' },
            { s: 'Ce mot **ne se dit plus** aujourd’hui.', n: 'The pronominal passive: *se dire*.' },
            { s: 'Cette erreur **se répète** chaque année.', n: 'A thing that happens again and again.' },
            { s: '**Annonce** d’une grève dans les transports', n: 'A headline in nominal style.' },
            { s: 'Le gouvernement **a annoncé** une réforme des retraites.', n: 'The full sentence.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the verb behind the noun.', pairs: [
            ['l’adoption', 'adopter'],
            ['une baisse', 'baisser'],
            ['la disparition', 'disparaître'],
            ['une manifestation', 'manifester'],
            ['une enquête', 'enquêter'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Turn the headline into a sentence.', items: [
            { q: 'Annonce d’une réforme par le gouvernement', cue: 'Le gouvernement', a: ['Le gouvernement annonce une réforme.'], why: 'Find the verb behind the noun: *annonce → annonce*.' },
            { q: 'Adoption de la loi par le Parlement', cue: 'Le Parlement', a: ['Le Parlement adopte la loi.'], why: '*adoption → adopte*.' },
            { q: 'Hausse des prix de l’énergie', cue: 'Les prix de l’énergie', a: ['Les prix de l’énergie augmentent.', 'Les prix de l’énergie montent.'], why: '*hausse → augmentent*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'La loi ___ adoptée hier soir.', o: ['a été', 'est été', 'avait'], why: 'The passive in the passé composé: *a été adoptée*.' },
            { q: 'Ce mot ne ___ plus aujourd’hui.', o: ['se dit', 'est dit', 'dit'], why: 'The pronominal passive: *ne se dit plus*.' },
            { q: 'Les prix ont ___ de 3 % cette année.', o: ['augmenté', 'augmentés', 'augmentée'], why: 'The participle with *avoir* does not change.' },
            { q: 'Le bruit ___ dans le quartier. (s’entendre)', o: ['s’entend', 'est entendre', 'entend'], why: 'The pronominal passive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'La nouvelle loi a été adoptée hier soir.', why: 'The passive in the passé composé.' },
            { a: 'Ce mot ne se dit plus aujourd’hui.', why: 'The pronominal passive with *ne … plus*.' },
            { a: 'Le gouvernement a annoncé une réforme.', why: 'The active sentence behind the headline.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'La loi [est] adoptée hier soir.', a: ['a été'], why: 'A past event: *a été adoptée*.' },
            { s: 'Ce mot ne [dit] plus.', a: ['se dit'], why: 'The pronominal passive: *ne se dit plus*.' },
            { s: 'La nouvelle [a annoncé] hier.', a: ['a été annoncée'], why: 'The news *was announced*: passive, agreeing with *nouvelle*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Bien que, même si, malgré',
      about: 'Express concession, and meet conditions with the subjunctive.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: '**Concession** says that something is true although you would expect the opposite. **Bien que** and **quoique** (although) are followed by the **subjunctive**: *Bien qu’il soit fatigué, il continue.* **Même si** (even if) is followed by the **indicative**: *Même s’il est fatigué, il continue.* With a noun, use **malgré** (despite) or **en dépit de**: *Malgré la fatigue, il continue.* Alone, use **pourtant** or **cependant**: *Il est fatigué. Pourtant, il continue.*' },
          { t: 'table', caption: 'Concession', explain: ['head', 'col2'], head: ['Link', 'Example', 'What follows'], rows: [
            ['bien que, quoique', 'Bien qu’il soit fatigué, il continue.', 'subjunctive'],
            ['même si', 'Même s’il est fatigué, il continue.', 'indicative'],
            ['malgré, en dépit de', 'Malgré la fatigue, il continue.', 'noun'],
            ['pourtant, cependant', 'Il est fatigué. Pourtant, il continue.', 'a new sentence'],
            ['alors que, tandis que', 'Elle travaille alors que son frère dort.', 'indicative'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use **bien que** with the indicative, and do not use **malgré que**, a common mistake. The conditions **à condition que** (provided that) and **pourvu que** (as long as, hopefully) also take the subjunctive: *Je viendrai à condition que tu m’invites.* *Pourvu qu’il fasse beau !* (Let’s hope the weather is nice.)' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Bien qu’**il **soit** fatigué, il continue à travailler.', n: '*bien que* + subjunctive.' },
            { s: '**Même s’**il **pleut**, nous irons au marché.', n: '*même si* + indicative.' },
            { s: '**Malgré** la pluie, la manifestation a eu lieu.', n: '*malgré* + noun.' },
            { s: 'Je viendrai **à condition que** tu **m’invites**.', n: '*à condition que* + subjunctive.' },
            { s: '**Pourvu qu’**il **fasse** beau demain !', n: 'A wish with the subjunctive.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Bien qu’il ___ fatigué, il continue.', o: ['soit', 'est', 'sera'], why: '*bien que* + subjunctive.' },
            { q: 'Même s’il ___, nous irons au marché.', o: ['pleut', 'pleuve', 'pleuvra'], why: '*même si* + indicative (present).' },
            { q: '___ la pluie, la fête a eu lieu.', o: ['Malgré', 'Bien que', 'Même si'], why: '*malgré* + noun.' },
            { q: 'Je viendrai à condition que tu ___.', o: ['m’invites', 'm’invitais', 'm’inviteras'], why: '*à condition que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the link.', items: [
            { q: 'Il est fatigué. Il continue à travailler. (bien que)', cue: 'Bien qu’il', a: ['Bien qu’il soit fatigué, il continue à travailler.'], why: '*bien que* + subjunctive.' },
            { q: 'Il pleut. Nous irons au marché. (même si)', cue: 'Même s’il', a: ['Même s’il pleut, nous irons au marché.'], why: '*même si* + indicative.' },
            { q: 'La pluie tombe. La fête a eu lieu. (malgré)', cue: 'Malgré', a: ['Malgré la pluie, la fête a eu lieu.'], why: '*malgré* + noun.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Bien qu’il [est] fatigué, il continue.', a: ['soit'], why: '*bien que* needs the subjunctive.' },
            { s: '[Malgré que] il pleuve, nous sortons.', a: ['Bien que'], why: '*malgré que* is a common mistake: say *bien que*.' },
            { s: 'Pourvu qu’il [fait] beau demain !', a: ['fasse'], why: '*pourvu que* + subjunctive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Bien qu’il soit fatigué, il continue à travailler.', why: '*bien que* + subjunctive.' },
            { a: 'Malgré la pluie, la fête a eu lieu.', why: '*malgré* + noun.' },
            { a: 'Pourvu qu’il fasse beau demain !', why: '*pourvu que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Bien qu’elle soit malade, elle travaille.', 'Bien qu’elle est malade, elle travaille.', 'Malgré qu’elle soit malade, elle travaille.'], why: '*bien que* + subjunctive.' },
            { q: '', o: ['Même s’il pleut, nous sortons.', 'Même s’il pleuve, nous sortons.', 'Même si il pleut, nous sortons.'], why: '*même si* + indicative, and *s’il*.' },
            { q: '', o: ['Malgré le bruit, il dort.', 'Malgré il y a du bruit, il dort.', 'Malgré qu’il y ait du bruit, il dort.'], why: '*malgré* + noun.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Il paraît que, selon',
      about: 'Hedge, and report information that is not confirmed.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'Journalists and careful speakers often mark that they are **not sure**. Use **selon** or **d’après** to name the source (*Selon le ministre, …*), **il paraît que** and **on dit que** + indicative for hearsay, **il semble que** + subjunctive (when you have doubts) or indicative, and **apparemment** and **sans doute** as adverbs. **Peut-être** is followed by the indicative: *Peut-être qu’il viendra.* **Sans doute** and **probablement** also take the indicative.' },
          { t: 'table', caption: 'Hedging', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['selon, d’après', 'according to'],
            ['il paraît que + indicative', 'it appears that, they say that'],
            ['il semble que + subjunctive', 'it seems that'],
            ['apparemment', 'apparently'],
            ['sans doute, probablement', 'probably'],
            ['peut-être (que) + indicative', 'perhaps'],
            ['il est possible que + subjunctive', 'it is possible that'],
          ] },
          { t: 'tip', art: 'owl', md: 'The **conditional of the press** reports information you cannot confirm: *Le ministre aurait démissionné.* (The minister has reportedly resigned.) *Le feu serait d’origine criminelle.* (The fire is said to be criminal.) This use of the conditional is common in news; do not read it as a hypothesis.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Selon** le ministre, la réforme sera votée en juin.', n: 'Naming the source.' },
            { s: '**Il paraît que** le magasin ferme en mai.', n: 'Hearsay: indicative.' },
            { s: '**Il semble que** le problème **soit** résolu.', n: '*sembler que* + subjunctive.' },
            { s: '**Apparemment**, le train est en retard.', n: 'An adverb.' },
            { s: 'Le ministre **aurait démissionné** hier soir.', n: 'The conditional of the press.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Il paraît que le magasin ___ en mai.', o: ['ferme', 'ferme-t-il', 'ferme-je'], why: 'The indicative: *il paraît que* + present.' },
            { q: 'Il semble que le problème ___ résolu.', o: ['soit', 'est', 'sera'], why: '*il semble que* + subjunctive.' },
            { q: 'Peut-être qu’il ___ demain.', o: ['viendra', 'vienne', 'viendrait'], why: '*peut-être que* + indicative.' },
            { q: 'Le ministre ___ démissionné hier soir. (unconfirmed)', o: ['aurait', 'avait', 'a'], why: 'The conditional of the press for unverified news.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make the sentence less certain.', items: [
            { q: 'Le ministre a démissionné. (conditional of the press)', cue: 'Le ministre', a: ['Le ministre aurait démissionné.'], why: 'The conditional of the press.' },
            { q: 'Le magasin ferme en mai. (il paraît que)', cue: 'Il paraît que', a: ['Il paraît que le magasin ferme en mai.'], why: 'Hearsay: indicative.' },
            { q: 'Le problème est résolu. (il semble que)', cue: 'Il semble que', a: ['Il semble que le problème soit résolu.'], why: '*sembler que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Certain or uncertain?', groups: ['certain', 'uncertain'], explain: ['groups'], items: [
            { s: 'Le ministre a démissionné.', g: 0, why: 'A fact.' },
            { s: 'Le ministre aurait démissionné.', g: 1, why: 'The conditional of the press: unconfirmed.' },
            { s: 'Il paraît que le magasin ferme.', g: 1, why: 'Hearsay.' },
            { s: 'Le magasin ferme en mai.', g: 0, why: 'A statement of fact.' },
            { s: 'Apparemment, le train est en retard.', g: 1, why: '*apparemment* marks doubt.' },
            { s: 'Selon la mairie, la rue est fermée.', g: 1, why: 'The source is named, so the writer keeps a distance.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Selon le ministre, la réforme sera votée en juin.', why: '*selon* + source.' },
            { a: 'Il paraît que le magasin ferme en mai.', why: '*il paraît que* + indicative.' },
            { a: 'Le ministre aurait démissionné hier soir.', why: 'The conditional of the press.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il semble que le problème [est] résolu.', a: ['soit'], why: 'With doubt: *il semble que* + subjunctive.' },
            { s: 'Peut-être qu’il [vienne] demain.', a: ['viendra'], why: '*peut-être que* + indicative.' },
            { s: 'Il paraît qu’il [vienne] demain.', a: ['viendra'], why: '*il paraît que* + indicative.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Deux articles et une lettre',
      about: 'Read two press articles on a social debate and a reader’s letter.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Le télétravail divise', md: '**Le télétravail divise les entreprises**\nSelon une enquête menée par un institut de recherche, de plus en plus d’employés souhaitent travailler à domicile deux ou trois jours par semaine. Bien que cette organisation soit appréciée, de nombreux managers craignent qu’elle ne nuise à la cohésion des équipes. Plusieurs entreprises auraient déjà abandonné le télétravail complet, tandis que d’autres l’ont adopté définitivement.' },
          { t: 'reading', title: 'Lettre d’un lecteur', md: 'Monsieur le Rédacteur,\n\nJe me permets de réagir à votre article sur le télétravail. Même si l’on peut comprendre les craintes des managers, il me semble que la confiance reste la meilleure solution. Pourvu que chaque employé respecte ses objectifs, le lieu de travail importe peu. Malgré les difficultés, de nombreuses équipes ont montré qu’elles pouvaient fonctionner à distance.\n\nVeuillez agréer, Monsieur, mes salutations distinguées.\nKarim Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Selon l’enquête, de plus en plus d’employés veulent travailler à domicile.', a: 't', why: '*de plus en plus d’employés souhaitent travailler à domicile*' },
            { q: 'Tous les managers sont favorables au télétravail.', a: 'f', why: 'Many *craignent* its effect on team cohesion.' },
            { q: 'Plusieurs entreprises auraient abandonné le télétravail complet.', a: 't', why: 'The conditional of the press: reported, not confirmed.' },
            { q: 'Karim est contre le télétravail.', a: 'f', why: 'He thinks trust is the best solution.' },
            { q: 'L’enquête a eu lieu en France.', a: 'ng', why: 'The text does not say where the survey took place.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Que craignent de nombreux managers ?', o: ['Que le télétravail nuise à la cohésion des équipes.', 'Que les employés gagnent plus.', 'Que les bureaux soient trop grands.'], why: '*craignent qu’elle ne nuise à la cohésion des équipes*' },
            { q: 'Que pense Karim ?', o: ['Que la confiance est la meilleure solution.', 'Qu’il faut tout interdire.', 'Qu’il faut travailler plus.'], why: '*il me semble que la confiance reste la meilleure solution*' },
            { q: 'Que veut dire « pourvu que chaque employé respecte ses objectifs » ?', o: ['À condition que chaque employé respecte ses objectifs.', 'Même si les employés ne respectent rien.', 'Parce que tous respectent leurs objectifs.'], why: '*pourvu que* = as long as.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words of concession in the texts.', items: [
            { s: '[Bien que] cette organisation soit appréciée, de nombreux managers craignent des effets négatifs.', why: '*bien que* introduces a concession.' },
            { s: '[Même si] l’on peut comprendre les craintes, la confiance est la meilleure solution.', why: '*même si* introduces a concession.' },
            { s: '[Malgré] les difficultés, de nombreuses équipes ont réussi.', why: '*malgré* introduces a concession.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Plusieurs entreprises ___ déjà abandonné le télétravail complet.', a: ['auraient'], why: 'The conditional of the press: *auraient abandonné*.' },
            { q: '___ une enquête, les employés souhaitent travailler à domicile.', a: ['Selon', 'D’après'], why: '*selon* names the source.' },
            { q: 'Il me ___ que la confiance reste la meilleure solution.', a: ['semble'], why: '*il me semble que*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Bien qu’il ___ fatigué, il continue.', o: ['soit', 'est', 'sera'], why: '*bien que* + subjunctive.' },
      { q: 'Même s’il ___, nous sortons.', o: ['pleut', 'pleuve', 'pleuvait'], why: '*même si* + indicative.' },
      { q: 'La loi ___ adoptée hier soir.', o: ['a été', 'est', 'avait'], why: 'Passive, passé composé.' },
      { q: 'Le ministre ___ démissionné. (unconfirmed)', o: ['aurait', 'a', 'avait'], why: 'The conditional of the press.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: '___ la pluie, la fête a eu lieu.', a: ['Malgré'], why: '*malgré* + noun.' },
      { q: 'Il ___ que le problème soit résolu. (sembler)', a: ['semble'], why: '*il semble que*' },
      { q: 'Ce mot ne ___ plus. (se dire)', a: ['se dit'], why: 'The pronominal passive.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the verb behind the noun.', pairs: [
      ['l’adoption', 'adopter'],
      ['une baisse', 'baisser'],
      ['la disparition', 'disparaître'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Turn the headline into a sentence.', items: [
      { q: 'Annonce d’une réforme par le gouvernement', cue: 'Le gouvernement', a: ['Le gouvernement annonce une réforme.'], why: 'Find the verb behind the noun.' },
      { q: 'Il est fatigué. Il continue. (bien que)', cue: 'Bien qu’il', a: ['Bien qu’il soit fatigué, il continue.'], why: '*bien que* + subjunctive.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Selon le ministre, la réforme sera votée en juin.', why: '*selon* + source.' },
      { a: 'Malgré la pluie, la fête a eu lieu.', why: '*malgré* + noun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: '[Malgré que] il pleuve, nous sortons.', a: ['Bien que'], why: '*malgré que* is a common mistake.' },
    ] },
  ],
};
