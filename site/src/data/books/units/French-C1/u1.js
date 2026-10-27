// French C1, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'The language of narrative',
  goal: 'Read and write narrative French with the literary tenses. Learn the passé simple, its use with the imparfait, the passé antérieur, and the imparfait and plus-que-parfait du subjonctif to recognise in reading.',
  art: 'croissant',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['passé simple', 'passé antérieur', 'imparfait du subjonctif', 'narrative', 'literature'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Le passé simple',
      about: 'Learn the forms of the passé simple and when to use it.',
      art: 'croissant',
      spreads: [
        [
          { t: 'text', md: 'The **passé simple** tells **finished events** in a **written narrative**: novels, tales, history books and some newspaper reports. It does the work of the **passé composé**, but it is **not used in speech**. You need mostly the **third person**. For **-er** verbs add **-a** or **-èrent**: *il parla, ils parlèrent*. For regular **-ir** and **-re** verbs add **-it** or **-irent**: *il finit, ils finirent; il vendit, ils vendirent*. Many common verbs are **irregular**, so learn them: *il fut, il eut, il fit, il dit, il vit, il vint, il put, il voulut*.' },
          { t: 'table', caption: 'Passé simple, third person', explain: ['head'], quiz: true, head: ['Infinitive', 'il / elle', 'ils / elles'], rows: [
            ['parler', 'parla', 'parlèrent'],
            ['finir', 'finit', 'finirent'],
            ['vendre', 'vendit', 'vendirent'],
            ['être', 'fut', 'furent'],
            ['avoir', 'eut', 'eurent'],
            ['faire', 'fit', 'firent'],
            ['dire', 'dit', 'dirent'],
            ['voir', 'vit', 'virent'],
            ['venir', 'vint', 'vinrent'],
            ['pouvoir', 'put', 'purent'],
            ['vouloir', 'voulut', 'voulurent'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a text you may also meet the other persons: *je parlai, tu parlas, nous parlâmes, vous parlâtes*. Learn to **recognise** them, but you will almost never need to write them. In Belgium, Switzerland and Quebec, the passé simple is also a **literary** tense. In a novel, you will often find it in the dialogue tags: *dit-il, répondit-elle*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il **ouvrit** la porte et **sortit**.', n: 'Two events in a row.' },
            { s: 'Elle **partit** à midi.', n: 'A finished event.' },
            { s: 'Ils **virent** arriver le train.', n: '*Voir*: *virent*.' },
            { s: 'Il **eut** peur.', n: '*Avoir*: *eut*.' },
            { s: 'Le roi **fit** un geste et tous **se turent**.', n: '*Faire*: *fit*; *se taire*: *se turent*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Speech or written narrative? Sort the sentences.', groups: ['spoken French (passé composé)', 'written narrative (passé simple)'], explain: ['groups'], items: [
            { s: 'Il a ouvert la porte.', g: 0, why: 'The passé composé is the tense of speech.' },
            { s: 'Il ouvrit la porte.', g: 1, why: 'The passé simple is the tense of writing.' },
            { s: 'Elle est partie hier.', g: 0, why: 'The passé composé.' },
            { s: 'Elle partit le lendemain.', g: 1, why: 'The passé simple.' },
            { s: 'Ils ont vu un chat.', g: 0, why: 'The passé composé.' },
            { s: 'Ils virent un chat.', g: 1, why: 'The passé simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the passé simple.', items: [
            { q: 'Il ___ la porte et sortit. (ouvrir)', a: ['ouvrit'], why: 'A regular *-ir* pattern: *ouvrit*.' },
            { q: 'Elle ___ à midi. (partir)', a: ['partit'], why: '*Partir*: *partit*.' },
            { q: 'Ils ___ arriver le train. (voir)', a: ['virent'], why: '*Voir*: *virent*.' },
            { q: 'Elle ___ le premier prix. (avoir)', a: ['eut'], why: '*Avoir*: *eut*.' },
            { q: 'Ils ___ la maison en 1900. (vendre)', a: ['vendirent'], why: '*Vendre*: *vendirent*.' },
            { q: 'Il ___ un long silence. (faire)', a: ['fit'], why: '*Faire*: *fit*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the infinitive with the passé simple.', pairs: [
            ['être', 'fut'],
            ['avoir', 'eut'],
            ['dire', 'dit'],
            ['voir', 'vit'],
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Put the sentence in the passé simple.', items: [
            { q: 'Il a ouvert la porte.', cue: 'Il', a: ['Il ouvrit la porte.'], why: 'The passé simple of *ouvrir*.' },
            { q: 'Elle est partie à midi.', cue: 'Elle', a: ['Elle partit à midi.'], why: 'The passé simple of *partir*.' },
            { q: 'Ils ont vu le train.', cue: 'Ils', a: ['Ils virent le train.'], why: 'The passé simple of *voir*.' },
            { q: 'Il a eu peur.', cue: 'Il', a: ['Il eut peur.'], why: 'The passé simple of *avoir*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which infinitive is it?', items: [
            { q: 'il fit', o: ['faire', 'finir', 'fuir'], why: '*Il fit* comes from *faire*.' },
            { q: 'ils vinrent', o: ['venir', 'vivre', 'vaincre'], why: '*Ils vinrent* comes from *venir*.' },
            { q: 'il put', o: ['pouvoir', 'plaire', 'pleuvoir'], why: '*Il put* comes from *pouvoir*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Il [faisa] un geste.', a: ['fit'], why: '*Faire*: *fit*.' },
            { s: 'Ils [venèrent] hier soir.', a: ['vinrent'], why: '*Venir*: *vinrent*.' },
            { s: 'Elle [parlat] à voix basse.', a: ['parla'], why: '*-er* verbs: *parla*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il ouvrit la porte et sortit.', why: 'Two passé simple verbs in a row.' },
            { a: 'Le roi fit un geste et tous se turent.', why: 'Two events in a row.' },
            { a: 'Elle partit à midi sans rien dire.', why: 'A finished event.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Passé simple, imparfait, passé antérieur',
      about: 'Mix the narrative tenses and use the passé antérieur for an earlier event.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'In a narrative, each tense has its job. The **imparfait** gives the **background**: the weather, the place, the habits, what was going on. The **passé simple** gives the **events**, one after the other: *Il pleuvait quand il arriva.* The **passé antérieur** shows an event that was **finished just before** another one. It is made with the **passé simple of avoir or être + the participe passé**: *Quand il eut fini, il sortit. Dès qu’elle fut arrivée, elle téléphona.* It is used only after **quand, lorsque, dès que, aussitôt que** and **après que**, and the main verb is in the passé simple.' },
          { t: 'table', caption: 'Narrative tenses', explain: ['head', 'col1'], head: ['Tense', 'Job', 'Example'], rows: [
            ['imparfait', 'the background', 'Il pleuvait. Les rues étaient vides.'],
            ['passé simple', 'the events, one by one', 'Il arriva. Elle ouvrit la porte.'],
            ['passé antérieur', 'an event just before another', 'Quand il eut fini, il sortit.'],
            ['passé antérieur', 'an event just before another', 'Dès qu’elle fut arrivée, elle téléphona.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In speech and in everyday writing, you would say **Quand il a fini, il est sorti** (passé composé). The passé antérieur has no everyday replacement, but you can also use **après avoir fini** or **une fois qu’il eut fini**. Remember the **agreement** with **être**: *Dès qu’elle fut arrivée*, with the feminine *-e*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il **pleuvait** quand il **arriva**.', n: 'Background, then an event.' },
            { s: 'Les rues **étaient** vides. Elle **ouvrit** la porte.', n: 'Background, then an event.' },
            { s: 'Quand il **eut fini**, il **sortit**.', n: 'Passé antérieur, then passé simple.' },
            { s: 'Dès qu’elle **fut arrivée**, elle **téléphona**.', n: 'Passé antérieur with *être*.' },
            { s: 'Aussitôt qu’ils **eurent mangé**, ils **partirent**.', n: 'Passé antérieur with *avoir*.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Background or event? Sort the sentences.', groups: ['background (imparfait)', 'event (passé simple)'], explain: ['groups'], items: [
            { s: 'Il pleuvait.', g: 0, why: 'The weather: imparfait.' },
            { s: 'Il arriva.', g: 1, why: 'An event: passé simple.' },
            { s: 'Les rues étaient vides.', g: 0, why: 'A description: imparfait.' },
            { s: 'Elle ouvrit la porte.', g: 1, why: 'An event: passé simple.' },
            { s: 'Le vent soufflait.', g: 0, why: 'What was going on: imparfait.' },
            { s: 'Ils se turent.', g: 1, why: 'An event: passé simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Il ___ quand il arriva. (pleuvoir, imparfait)', a: ['pleuvait'], why: 'The background: imparfait.' },
            { q: 'Il ___ tard. (être, imparfait)', a: ['était'], why: 'The background: imparfait.' },
            { q: 'Quand il ___ fini, il sortit. (avoir, passé simple)', a: ['eut'], why: 'Passé antérieur: *eut fini*.' },
            { q: 'Dès qu’elle ___ arrivée, elle téléphona. (être, passé simple)', a: ['fut'], why: 'Passé antérieur: *fut arrivée*.' },
            { q: 'Aussitôt qu’ils ___ mangé, ils partirent. (avoir, passé simple)', a: ['eurent'], why: 'Passé antérieur: *eurent mangé*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right form.', items: [
            { q: 'Quand il ___ fini, il sortit.', o: ['eut', 'avait', 'a'], why: 'Passé antérieur before a passé simple.' },
            { q: 'Il ___ quand il arriva.', o: ['pleuvait', 'plut', 'pleuvra'], why: 'The background: imparfait.' },
            { q: 'Dès qu’elle ___ arrivée, elle téléphona.', o: ['fut', 'était', 'est'], why: 'Passé antérieur with *être*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with the word in brackets.', items: [
            { q: 'Il a fini. Puis il est sorti.', cue: 'Quand', a: ['Quand il eut fini, il sortit.'], why: 'Passé antérieur, then passé simple.' },
            { q: 'Elle est arrivée. Elle a téléphoné aussitôt.', cue: 'Dès que', a: ['Dès qu’elle fut arrivée, elle téléphona.'], why: 'Passé antérieur with *être*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Quand il [fut] fini, il sortit.', a: ['eut'], why: '*Finir* takes *avoir*: *eut fini*.' },
            { s: 'Dès qu’elle [eut] arrivée, elle téléphona.', a: ['fut'], why: '*Arriver* takes *être*: *fut arrivée*.' },
            { s: 'Il [plut] quand il arriva.', a: ['pleuvait'], why: 'The background: imparfait.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Quand il eut fini, il sortit sans bruit.', why: 'Passé antérieur, then passé simple.' },
            { a: 'Dès qu’elle fut arrivée, elle téléphona.', why: 'Passé antérieur with *être*.' },
            { a: 'Il pleuvait quand il arriva à la gare.', why: 'Imparfait, then passé simple.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Qu’il fût, qu’il eût',
      about: 'Recognise the imperfect and pluperfect subjunctive in literary texts.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'In older and literary texts, the subjunctive has two more tenses. The **imparfait du subjonctif** is formed on the **passé simple**: *il parla → qu’il parlât*, *il finit → qu’il finît*, *il fut → qu’il fût*, *il eut → qu’il eût*, *il fit → qu’il fît*, *il vint → qu’il vînt*. The **plus-que-parfait du subjonctif** adds the participe passé: *qu’il eût fini, qu’il fût parti*. You will find them after a main verb in the past or the conditional: *Il fallait qu’il partît.* Modern French uses the **présent du subjonctif** instead: *Il fallait qu’il parte.*' },
          { t: 'table', caption: 'Literary and modern', explain: ['head'], head: ['Literary', 'Modern'], rows: [
            ['Il fallait qu’il partît.', 'Il fallait qu’il parte.'],
            ['Je voulais qu’il vînt.', 'Je voulais qu’il vienne.'],
            ['Bien qu’il fût fatigué, il continua.', 'Bien qu’il soit fatigué, il continua.'],
            ['Il eût fallu s’en douter.', 'Il aurait fallu s’en douter.'],
          ] },
          { t: 'tip', art: 'owl', md: 'You will mainly meet the **third person singular**, which ends in **-ât, -ît, -ût** with a **circumflex**: *qu’il parlât, qu’il finît, qu’il voulût*. The form **il eût** (plus-que-parfait du subjonctif) can also replace the **conditionnel passé**: *il eût fallu* = *il aurait fallu*. Do not use these forms in speech or in an everyday e-mail; they would sound ironic.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Il fallait qu’il **partît**.', n: 'Imparfait du subjonctif of *partir*.' },
            { s: 'Je voulais qu’il **vînt**.', n: 'Imparfait du subjonctif of *venir*.' },
            { s: 'Bien qu’il **fût** fatigué, il continua.', n: 'Imparfait du subjonctif of *être*.' },
            { s: 'Il **eût** fallu s’en douter.', n: 'Literary conditional past.' },
            { s: 'Elle craignait qu’il ne **fût** déjà **parti**.', n: 'Plus-que-parfait du subjonctif.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the literary form with the modern one.', pairs: [
            ['qu’il fût', 'qu’il soit'],
            ['qu’il eût', 'qu’il ait'],
            ['qu’il fît', 'qu’il fasse'],
            ['qu’il vînt', 'qu’il vienne'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the imparfait du subjonctif.', items: [
            { q: 'Il fallait qu’il ___. (partir)', a: ['partît'], why: 'Built on *il partit*: *qu’il partît*.' },
            { q: 'Bien qu’il ___ fatigué, il continua. (être)', a: ['fût'], why: 'Built on *il fut*: *qu’il fût*.' },
            { q: 'Je voulais qu’il ___. (venir)', a: ['vînt'], why: 'Built on *il vint*: *qu’il vînt*.' },
            { q: 'Il ___ fallu s’en douter. (avoir, literary conditional past)', a: ['eût'], why: 'Built on *il eut*: *il eût fallu*.' },
            { q: 'Elle craignait qu’il ne ___ déjà parti. (être)', a: ['fût'], why: 'Plus-que-parfait du subjonctif: *fût parti*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which verb is it?', items: [
            { q: 'qu’il fût', o: ['être', 'faire', 'fuir'], why: '*Qu’il fût* is *être*.' },
            { q: 'qu’il eût', o: ['avoir', 'être', 'aller'], why: '*Qu’il eût* is *avoir*.' },
            { q: 'qu’il fît', o: ['faire', 'finir', 'fuir'], why: '*Qu’il fît* is *faire*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Say it in modern French.', items: [
            { q: 'Il fallait qu’il partît.', cue: 'Il fallait', a: ['Il fallait qu’il parte.'], why: 'Modern: the présent du subjonctif.' },
            { q: 'Je voulais qu’il vînt.', cue: 'Je voulais', a: ['Je voulais qu’il vienne.'], why: 'Modern: the présent du subjonctif.' },
            { q: 'Il eût fallu s’en douter.', cue: 'Il aurait', a: ['Il aurait fallu s’en douter.'], why: 'Modern: the conditionnel passé.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Bien qu’il [fut] fatigué, il continua. (literary subjunctive)', a: ['fût'], why: 'The subjunctive has a circumflex: *fût*.' },
            { s: 'Il fallait qu’il [partit].', a: ['partît'], why: 'The subjunctive has a circumflex: *partît*.' },
            { s: 'Il [aurait] fallu s’en douter. (literary form)', a: ['eût'], why: 'The literary form is *eût*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Il fallait qu’il partît avant la nuit.', why: '*Il fallait que* + imparfait du subjonctif.' },
            { a: 'Bien qu’il fût fatigué, il continua.', why: '*Bien que* + imparfait du subjonctif.' },
            { a: 'Elle craignait qu’il ne fût déjà parti.', why: 'Plus-que-parfait du subjonctif.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Le départ',
      about: 'Read a literary extract.',
      art: 'croissant',
      spreads: [
        [
          { t: 'reading', title: 'Le départ', md: 'La nuit tombait sur le port. Marie attendait depuis des heures, assise sur un banc, son sac à ses pieds. Quand le bateau eut quitté le quai, elle se leva. Le vent soufflait fort, et personne ne fit attention à elle. Elle marcha jusqu’au bout de la jetée, s’arrêta et regarda l’horizon.\n\nIl fallait qu’elle partît, elle le savait. Elle prit son sac, traversa la ville et frappa à une porte. Un vieil homme ouvrit.\n\n— Vous êtes en retard, dit-il.\n\n— Je sais, répondit-elle.\n\nIl s’écarta pour la laisser entrer.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Marie attendait sur un banc.', a: 't', why: '*Assise sur un banc.*' },
            { q: 'Le bateau avait déjà quitté le quai quand elle se leva.', a: 't', why: '*Quand le bateau eut quitté le quai, elle se leva.*' },
            { q: 'Personne ne fit attention à elle.', a: 't', why: '*Personne ne fit attention à elle.*' },
            { q: 'Marie regretta son départ.', a: 'ng', why: 'The text does not say.' },
            { q: 'Le vieil homme refusa de la laisser entrer.', a: 'f', why: '*Il s’écarta pour la laisser entrer.*' },
            { q: 'Le vieil homme dit que Marie est en retard.', a: 't', why: '*Vous êtes en retard, dit-il.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Où Marie attendait-elle ?', o: ['Sur un banc, au port.', 'Dans un train.', 'Chez elle.'], why: '*La nuit tombait sur le port … assise sur un banc.*' },
            { q: 'Que fit-elle après avoir regardé l’horizon ?', o: ['Elle traversa la ville.', 'Elle monta sur le bateau.', 'Elle retourna chez elle.'], why: '*Elle prit son sac, traversa la ville.*' },
            { q: 'Que dit le vieil homme ?', o: ['Vous êtes en retard.', 'Soyez la bienvenue.', 'Je ne vous attendais pas.'], why: '*Vous êtes en retard, dit-il.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verbs in the passé simple.', items: [
            { s: 'Quand le bateau eut quitté le quai, elle [se leva]. Personne ne [fit] attention à elle.', why: '*Se leva* and *fit* are in the passé simple.' },
            { s: 'Elle [marcha] jusqu’au bout de la jetée, [s’arrêta] et [regarda] l’horizon.', why: 'Three events in a row.' },
            { s: 'Un vieil homme [ouvrit]. « Vous êtes en retard », [dit]-il.', why: '*Ouvrit* and *dit* are in the passé simple.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
            { q: 'Elle ___ jusqu’au bout de la jetée. (marcher, passé simple)', a: ['marcha'], why: '*-er* verbs: *marcha*.' },
            { q: 'Il fallait qu’elle ___. (partir, imparfait du subjonctif)', a: ['partît'], why: '*Il fallait que* + *partît*.' },
            { q: 'Quand le bateau ___ quitté le quai, elle se leva. (avoir, passé simple)', a: ['eut'], why: 'Passé antérieur: *eut quitté*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Elle prit son sac, traversa la ville et frappa à une porte.', why: 'Three events in a row.' },
            { a: 'Il s’écarta pour la laisser entrer.', why: 'A passé simple verb and a purpose.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'il fit', o: ['faire', 'finir', 'fuir'], why: '*Il fit* comes from *faire*.' },
      { q: 'Il ___ quand il arriva.', o: ['pleuvait', 'plut', 'pleuvra'], why: 'The background: imparfait.' },
      { q: 'Quand il ___ fini, il sortit.', o: ['eut', 'avait', 'a'], why: 'Passé antérieur before a passé simple.' },
      { q: 'Bien qu’il ___ fatigué, il continua. (literary)', o: ['fût', 'est', 'sera'], why: '*Bien que* + imparfait du subjonctif.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the verb in the right tense.', items: [
      { q: 'Il ___ la porte et sortit. (ouvrir, passé simple)', a: ['ouvrit'], why: '*Ouvrir*: *ouvrit*.' },
      { q: 'Ils ___ le train. (voir, passé simple)', a: ['virent'], why: '*Voir*: *virent*.' },
      { q: 'Il fallait qu’il ___. (partir, imparfait du subjonctif)', a: ['partît'], why: '*Il fallait que* + *partît*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the infinitive with the passé simple.', pairs: [
      ['être', 'fut'],
      ['avoir', 'eut'],
      ['venir', 'vint'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Say it with the word in brackets.', items: [
      { q: 'Il a ouvert la porte.', cue: 'Il', a: ['Il ouvrit la porte.'], why: 'The passé simple of *ouvrir*.' },
      { q: 'Il fallait qu’il partît.', cue: 'Il fallait', a: ['Il fallait qu’il parte.'], why: 'Modern: the présent du subjonctif.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Il [faisa] un geste.', a: ['fit'], why: '*Faire*: *fit*.' },
      { s: 'Quand il [fut] fini, il sortit.', a: ['eut'], why: '*Finir* takes *avoir*: *eut fini*.' },
    ] },
  ],
};
