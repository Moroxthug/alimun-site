// French B1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Opinions and debate',
  goal: 'Give and defend an opinion, agree and disagree politely, and write a short comment. Use connectors of reason and contrast, and meet the present subjunctive after il faut que and je ne pense pas que.',
  art: 'parrot',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing', 'speaking'], topics: ['opinions', 'agreeing', 'connectors', 'subjunctive', 'il faut que', 'debate'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'À mon avis',
      about: 'Give your opinion and agree or disagree.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To give an opinion, you can start with **à mon avis** (in my opinion), **je pense que**, **je trouve que**, **il me semble que** or **selon moi**. After **je pense que** and **je trouve que**, use the normal **indicative**: *Je pense que c’est une bonne idée.* To ask for someone’s opinion, say **Qu’est-ce que tu en penses ?** or **Tu es d’accord ?**' },
          { t: 'table', caption: 'Opinions', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['À mon avis, …', 'In my opinion, …'],
            ['Je pense que …', 'I think that …'],
            ['Il me semble que …', 'It seems to me that …'],
            ['Selon moi, …', 'According to me, …'],
            ['Je suis convaincu(e) que …', 'I am convinced that …'],
            ['Pour ma part, …', 'As for me, …'],
          ] },
          { t: 'tip', art: 'owl', md: 'A polite debate uses softeners such as **plutôt** (rather), **assez** (fairly) and **à mon avis** instead of a flat **c’est faux**. Say *Je ne suis pas sûr que ce soit vrai* rather than *Tu as tort.*' },
        ],
        [
          { t: 'table', caption: 'Agreeing and disagreeing', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Je suis d’accord.', 'I agree.'],
            ['Tout à fait.', 'Absolutely.'],
            ['Bien sûr.', 'Of course.'],
            ['Je ne suis pas d’accord.', 'I do not agree.'],
            ['Pas du tout.', 'Not at all.'],
            ['Ça dépend.', 'It depends.'],
            ['C’est vrai, mais …', 'That is true, but …'],
            ['Je comprends, mais …', 'I understand, but …'],
          ] },
          { t: 'dialogue', title: 'Un débat', lines: [
            { who: 'Sophie', s: 'À mon avis, il faut travailler moins. Quatre jours par semaine, c’est assez.' },
            { who: 'Lucas', s: 'Je ne suis pas d’accord. Je pense que cinq jours, c’est mieux pour les clients.' },
            { who: 'Sophie', s: 'Je comprends, mais les employés seraient plus heureux.' },
            { who: 'Lucas', s: 'C’est vrai, mais ça dépend du métier.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Je pense que c’est une bonne idée.', 'Tout à fait !'],
            ['Tu es d’accord ?', 'Pas du tout.'],
            ['Qu’est-ce que tu en penses ?', 'Ça dépend.'],
            ['C’est trop cher.', 'C’est vrai, mais c’est de la bonne qualité.'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Does the phrase agree, disagree or hold back?', groups: ['agree', 'disagree', 'it depends'], explain: ['groups'], items: [
            { s: 'Tout à fait.', g: 0, why: 'Strong agreement.' },
            { s: 'Pas du tout.', g: 1, why: 'Strong disagreement.' },
            { s: 'Ça dépend.', g: 2, why: 'Neither yes nor no.' },
            { s: 'Je suis d’accord avec toi.', g: 0, why: 'Agreement.' },
            { s: 'Je ne suis pas d’accord.', g: 1, why: 'Disagreement.' },
            { s: 'Peut-être, mais je n’en suis pas sûr.', g: 2, why: 'A doubt.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'À mon avis, c’est une très bonne idée.', why: '*à mon avis* starts the opinion.' },
            { a: 'Je ne suis pas du tout d’accord avec toi.', why: '*pas du tout* before *d’accord*.' },
            { a: 'Qu’est-ce que tu en penses ?', why: 'Asking for an opinion.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You think the same as your friend:', o: ['Je suis d’accord avec toi.', 'Je ne pense pas.', 'Pas du tout.'], why: 'To agree.' },
            { q: 'You are not sure and want to be polite:', o: ['Ça dépend.', 'Tu as tort.', 'Jamais.'], why: 'A neutral answer.' },
            { q: 'You want to ask for an opinion:', o: ['Qu’est-ce que tu en penses ?', 'Tu as quel âge ?', 'Où vas-tu ?'], why: '*en penser* = to think about it.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Parce que, pourtant, alors que',
      about: 'Give reasons and contrasts with connectors.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To explain why you think something, use a **connector of reason**. **Parce que** is the most common and answers *pourquoi ?*. **Car** is more formal and is mostly written. **Puisque** and **comme** give a reason the listener already knows. *Comme il pleut, nous restons.* (Since it is raining, we stay.) *Puisque tu es là, aide-moi.* (Since you are here, help me.)' },
          { t: 'table', caption: 'Connectors of reason', explain: ['head', 'col2'], head: ['Connector', 'Example', 'Meaning'], rows: [
            ['parce que', 'Je reste parce que j’ai du travail.', 'because'],
            ['car', 'Il est absent, car il est malade.', 'for, because (written)'],
            ['puisque', 'Puisque tu es là, aide-moi.', 'since (known reason)'],
            ['comme', 'Comme il pleut, nous restons.', 'as, since (at the start)'],
            ['à cause de', 'À cause de la pluie, le match est annulé.', 'because of (a bad reason)'],
            ['grâce à', 'Grâce à toi, j’ai réussi.', 'thanks to (a good reason)'],
          ] },
          { t: 'tip', art: 'owl', md: '**Parce que** can start an answer but not a sentence on its own: *Pourquoi ? – Parce que j’ai faim.* **Comme** must start the sentence; **car** cannot start a sentence. After **à cause de** and **grâce à**, use a noun, not a verb: *à cause du bruit*, *grâce à mon frère*.' },
        ],
        [
          { t: 'text', md: 'To show a **contrast**, use **mais** (but), **pourtant** (yet, however), **cependant** (however, more formal), **alors que** (while, whereas) and **en revanche** (on the other hand). **Pourtant** and **cependant** go at the start or after the verb: *Il est riche, pourtant il n’est pas heureux.* **alors que** joins two clauses: *Il pleut alors que la météo avait annoncé du soleil.*' },
          { t: 'examples', items: [
            { s: 'Je n’ai pas faim **parce que** j’ai déjà mangé.', n: 'The reason.' },
            { s: '**Comme** il fait beau, nous allons au parc.', n: '*comme* at the start.' },
            { s: 'Il habite en ville, **mais** il travaille à la campagne.', n: 'A simple contrast.' },
            { s: 'Il est jeune, **pourtant** il a beaucoup d’expérience.', n: 'A surprising contrast.' },
            { s: 'Elle aime le thé **alors que** son frère préfère le café.', n: 'A contrast between two people.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right connector.', items: [
            { q: 'Il est resté à la maison ___ il était malade.', o: ['parce qu’', 'pourtant', 'alors qu’'], why: 'A reason: *parce qu’il était malade*.' },
            { q: 'Il est très fatigué, ___ il continue à travailler.', o: ['pourtant', 'parce que', 'comme'], why: 'A surprising contrast: *pourtant*.' },
            { q: '___ il pleut, nous prenons un taxi.', o: ['Comme', 'Pourtant', 'Alors que'], why: 'A reason at the start of the sentence: *comme*.' },
            { q: 'Elle est heureuse ___ à ses amis.', o: ['grâce', 'à cause', 'car'], why: 'A good reason: *grâce à*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Join the sentences with the connector.', items: [
            { q: 'Je reste à la maison. Il pleut. (parce qu’)', cue: 'Je reste à la maison', a: ['Je reste à la maison parce qu’il pleut.'], why: '*parce que* + reason; *que* becomes *qu’* before *il*.' },
            { q: 'Il est fatigué. Il continue à travailler. (pourtant)', cue: 'Il est fatigué', a: ['Il est fatigué, pourtant il continue à travailler.', 'Il est fatigué, pourtant, il continue à travailler.'], why: '*pourtant* introduces the surprising part.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: '[Car] il pleut, nous restons.', a: ['Comme'], why: '*car* cannot start the sentence; use *Comme*.' },
            { s: 'À cause [à] toi, j’ai raté le train.', a: ['de'], why: '*à cause de* + noun or pronoun.' },
            { s: 'Il est malade [alors que] il vient travailler.', a: ['pourtant'], why: 'A surprising contrast, not two things said at the same time: *pourtant*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Pourquoi tu restes ici ? – ___ j’ai du travail.', a: ['Parce que', 'parce que'], why: '*Parce que* answers *pourquoi ?*.' },
            { q: 'J’ai réussi ___ à mon professeur.', a: ['grâce'], why: '*grâce à* is a good reason.' },
            { q: 'Il aime le sport, ___ son frère préfère lire.', a: ['alors que'], why: '*alors que* joins two contrasting clauses.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Il faut que tu viennes',
      about: 'Meet the present subjunctive after il faut que and je ne pense pas que.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'The **subjunctive** is a verb form used after certain expressions. You need it after **il faut que** (it is necessary that), **je veux que** (I want …), **il est important que** and **je ne pense pas que**. Compare: *Je pense qu’il vient* (indicative: something I believe is true), but *Je ne pense pas qu’il vienne* (subjunctive: a doubt). The subjunctive often appears when the subjects are **different**: *Je veux que tu viennes.* If the subject is the same, use the infinitive: *Je veux venir.*' },
          { t: 'table', caption: 'Forming the present subjunctive', explain: ['head', 'col2'], head: ['Person', 'Ending', 'Example (parler)'], rows: [
            ['que je', '-e', 'que je parle'],
            ['que tu', '-es', 'que tu parles'],
            ['qu’il / qu’elle', '-e', 'qu’il parle'],
            ['que nous', '-ions', 'que nous parlions'],
            ['que vous', '-iez', 'que vous parliez'],
            ['qu’ils / qu’elles', '-ent', 'qu’ils parlent'],
          ] },
          { t: 'tip', art: 'owl', md: 'For most verbs, take the **ils** form of the present, remove **-ent**, and add the endings above: *ils finissent → que je finisse*; *ils partent → que je parte*; *ils prennent → que je prenne* (but *que nous prenions*). With *nous* and *vous*, it looks like the imparfait: *que nous parlions*.' },
        ],
        [
          { t: 'table', caption: 'Five irregular subjunctives', quiz: true, head: ['', 'être', 'avoir', 'faire', 'aller', 'pouvoir'], rows: [
            ['que je', 'sois', 'aie', 'fasse', 'aille', 'puisse'],
            ['que tu', 'sois', 'aies', 'fasses', 'ailles', 'puisses'],
            ['qu’il / elle', 'soit', 'ait', 'fasse', 'aille', 'puisse'],
            ['que nous', 'soyons', 'ayons', 'fassions', 'allions', 'puissions'],
            ['que vous', 'soyez', 'ayez', 'fassiez', 'alliez', 'puissiez'],
            ['qu’ils / elles', 'soient', 'aient', 'fassent', 'aillent', 'puissent'],
          ] },
          { t: 'examples', items: [
            { s: 'Il faut que **tu viennes** à la réunion.', n: '*venir* → *que tu viennes*.' },
            { s: 'Je veux que **nous parlions** de ce sujet.', n: '*je veux que* + subjunctive.' },
            { s: 'Il est important que **vous soyez** à l’heure.', n: '*être* → *que vous soyez*.' },
            { s: 'Je ne pense pas qu’**il ait** raison.', n: 'A doubt: *ait* from *avoir*.' },
            { s: 'Il faut qu’**elle fasse** ses devoirs.', n: '*faire* → *qu’elle fasse*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the subjunctive.', items: [
            { q: 'Il faut que tu ___ à la réunion. (venir)', a: ['viennes'], why: '*que tu viennes*' },
            { q: 'Je veux que nous ___ de ce sujet. (parler)', a: ['parlions'], why: '*que nous parlions*' },
            { q: 'Il est important que vous ___ à l’heure. (être)', a: ['soyez'], why: '*que vous soyez*' },
            { q: 'Je ne pense pas qu’il ___ raison. (avoir)', a: ['ait'], why: '*qu’il ait*' },
            { q: 'Il faut qu’elle ___ ses devoirs. (faire)', a: ['fasse'], why: '*qu’elle fasse*' },
            { q: 'Il faut que j’___ chez le médecin. (aller)', a: ['aille'], why: '*que j’aille*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Indicative or subjunctive?', items: [
            { q: 'Je pense qu’il ___ raison.', o: ['a', 'ait', 'avait eu'], why: '*je pense que* + indicative: *a*.' },
            { q: 'Je ne pense pas qu’il ___ raison.', o: ['ait', 'a', 'aura'], why: '*je ne pense pas que* + subjunctive: *ait*.' },
            { q: 'Il faut que tu ___ ta chambre.', o: ['ranges', 'ranger', 'rangeais'], why: '*il faut que* + subjunctive: *ranges*.' },
            { q: 'Je veux ___ à la fête.', o: ['aller', 'que j’aille', 'que j’allais'], why: 'Same subject: use the infinitive.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il faut que tu viennes demain.', why: '*il faut que* + subjunctive.' },
            { a: 'Je ne pense pas qu’il soit malade.', why: 'A doubt: *soit*.' },
            { a: 'Je veux que vous soyez à l’heure.', why: '*je veux que* + subjunctive.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il faut que tu [viens] demain.', a: ['viennes'], why: 'After *il faut que*, the subjunctive: *viennes*.' },
            { s: 'Je ne pense pas qu’il [a] raison.', a: ['ait'], why: 'After a negative opinion verb: *ait*.' },
            { s: 'Il faut que tu [es] à l’heure.', a: ['sois'], why: '*être* → *que tu sois*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Deux commentaires',
      about: 'Read two readers’ comments on a news article.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Faut-il travailler quatre jours par semaine ?', md: '**Article : Une ville teste la semaine de quatre jours**\nPendant trois mois, les employés d’une mairie ont travaillé quatre jours par semaine, sans baisse de salaire. Les premiers résultats sont encourageants : moins de fatigue, plus de rendez-vous honorés.\n\n**Commentaire de Nadia**\nÀ mon avis, c’est une excellente idée. Comme je suis souvent fatiguée le vendredi, j’aimerais que mon patron essaie. Il faut que les entreprises comprennent que le temps libre améliore le travail. Grâce à ces tests, on verra mieux les effets.\n\n**Commentaire de Karim**\nJe ne suis pas convaincu. Je pense que quatre jours, c’est trop court pour certains métiers, alors que cinq jours donnent plus de temps aux clients. Pourtant, je comprends que les employés soient contents. Ça dépend vraiment du travail.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Les employés ont travaillé quatre jours pendant trois mois.', a: 't', why: '*Pendant trois mois … quatre jours par semaine*' },
            { q: 'Ils ont reçu un salaire plus bas.', a: 'f', why: '*sans baisse de salaire*' },
            { q: 'Nadia est favorable à la semaine de quatre jours.', a: 't', why: '*c’est une excellente idée*' },
            { q: 'Karim est d’accord avec Nadia.', a: 'f', why: '*Je ne suis pas convaincu.*' },
            { q: 'La mairie testera la semaine de quatre jours l’année prochaine aussi.', a: 'ng', why: 'The article does not say what comes next.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pourquoi Nadia aime-t-elle l’idée ?', o: ['Elle est souvent fatiguée le vendredi.', 'Elle veut gagner plus.', 'Son patron l’a déjà décidé.'], why: '*Comme je suis souvent fatiguée le vendredi*' },
            { q: 'Que pense Karim des métiers avec des clients ?', o: ['Cinq jours donnent plus de temps aux clients.', 'Ils n’ont pas de clients.', 'Quatre jours sont parfaits.'], why: '*cinq jours donnent plus de temps aux clients*' },
            { q: 'Que veut dire « Ça dépend du travail » ?', o: ['La réponse n’est pas la même pour tous les métiers.', 'Le travail est difficile.', 'Il n’y a pas de réponse.'], why: '*ça dépend* = it depends.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the connectors in the comments.', items: [
            { s: '[Comme] je suis souvent fatiguée le vendredi, j’aimerais que mon patron essaie.', why: '*comme* gives a reason.' },
            { s: 'Je pense que quatre jours, c’est trop court, [alors que] cinq jours donnent plus de temps aux clients.', why: '*alors que* shows a contrast.' },
            { s: '[Pourtant], je comprends que les employés soient contents.', why: '*pourtant* shows a contrast.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the comments.', items: [
            { q: 'Nadia trouve que c’est une ___ idée.', a: ['excellente'], why: '*une excellente idée*' },
            { q: 'Karim dit que ça ___ du travail.', a: ['dépend', 'depend'], why: '*Ça dépend vraiment du travail.*' },
            { q: 'Il faut que les entreprises ___ que le temps libre aide. (comprendre)', a: ['comprennent'], why: '*il faut que* + subjunctive: *comprennent*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Il faut que tu ___ demain.', o: ['viennes', 'viens', 'venais'], why: 'After *il faut que*: the subjunctive.' },
      { q: 'Je pense qu’il ___ raison.', o: ['a', 'ait', 'avait eu'], why: '*je pense que* + indicative.' },
      { q: 'Il reste à la maison ___ il est malade.', o: ['parce qu’', 'pourtant', 'alors qu’'], why: 'A reason.' },
      { q: 'Il est jeune, ___ il a beaucoup d’expérience.', o: ['pourtant', 'comme', 'parce que'], why: 'A surprising contrast.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Je ne pense pas qu’il ___ malade. (être)', a: ['soit'], why: '*qu’il soit*' },
      { q: 'J’ai réussi ___ à mon professeur.', a: ['grâce'], why: '*grâce à*' },
      { q: 'À ___ avis, c’est une bonne idée.', a: ['mon'], why: '*à mon avis*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
      ['Tu es d’accord ?', 'Tout à fait.'],
      ['Qu’est-ce que tu en penses ?', 'Ça dépend.'],
      ['C’est trop cher.', 'C’est vrai, mais c’est de la bonne qualité.'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Join the sentences with the connector.', items: [
      { q: 'Je reste à la maison. Il pleut. (parce qu’)', cue: 'Je reste à la maison', a: ['Je reste à la maison parce qu’il pleut.'], why: '*parce que* + reason.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je veux que vous soyez à l’heure.', why: '*je veux que* + subjunctive.' },
      { a: 'À mon avis, c’est une excellente idée.', why: '*à mon avis* starts the opinion.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il faut que j’[vais] chez le médecin.', a: ['aille'], why: '*que j’aille*' },
      { s: '[Car] il pleut, nous restons.', a: ['Comme'], why: '*car* cannot start the sentence.' },
    ] },
  ],
};
