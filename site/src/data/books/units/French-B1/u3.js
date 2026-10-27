// French B1, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Technology and media',
  goal: 'Talk about phones, the internet and the news, and describe what things do. Use y and en, the relative pronouns qui, que, où and dont, and two pronouns together.',
  art: 'alien',
  tags: { skills: ['grammar', 'vocabulary', 'reading', 'writing'], topics: ['technology', 'internet', 'media', 'pronoun y', 'pronoun en', 'relative pronouns', 'double pronouns'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'J’y pense, j’en parle',
      about: 'Words for devices and the internet, and the pronouns y and en.',
      art: 'alien',
      spreads: [
        [
          { t: 'text', md: 'Everyday life with technology has its own vocabulary. In French you **télécharger** (download) an application, **se connecter** (log in), **envoyer** a message and **partager** a photo. Many words come from English, but they often have a French form: *un e-mail* or *un courriel*, *un mot de passe* (password), *un réseau social*.' },
          { t: 'table', caption: 'Technology', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['un ordinateur (portable)', 'computer (laptop)'],
            ['un téléphone portable, un portable', 'mobile phone'],
            ['une application, une appli', 'an app'],
            ['un site internet', 'a website'],
            ['un réseau social', 'a social network'],
            ['un mot de passe', 'a password'],
            ['se connecter', 'to log in'],
            ['télécharger', 'to download'],
            ['partager', 'to share'],
            ['une pièce jointe', 'an attachment'],
          ] },
          { t: 'tip', art: 'owl', md: 'In Quebec, people prefer **courriel** to *e-mail*, and say **magasiner** for to shop; France uses **e-mail** and **faire du shopping**. The word for *mobile phone* is **portable** in France and **cellulaire** in Quebec, while Belgians and Swiss often say **GSM** or **natel** (Switzerland).' },
        ],
        [
          { t: 'text', md: 'The small word **y** replaces **à** + a thing or a place: *Tu penses à ton travail ? – Oui, j’y pense. Tu vas à la bibliothèque ? – Oui, j’y vais.* The small word **en** replaces **de** + a thing or a quantity: *Tu parles de ce film ? – Oui, j’en parle. Tu as des e-mails ? – Oui, j’en ai trois.* Both go **before the verb**: *Je n’y vais pas. Il en a besoin.*' },
          { t: 'table', caption: 'y and en', explain: ['head', 'col2'], head: ['Pronoun', 'Replaces', 'Example'], rows: [
            ['y', 'à + thing or place', 'Tu penses à ton travail ? – Oui, j’y pense.'],
            ['y', 'in, at a place', 'Il est à la maison ? – Oui, il y est.'],
            ['en', 'de + thing', 'Tu parles de ce film ? – Oui, j’en parle.'],
            ['en', 'a quantity of', 'Tu as des e-mails ? – Oui, j’en ai trois.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Do not use **y** or **en** for people: *Je pense à Marie* becomes *Je pense à elle*, not *J’y pense*. Use them for things and places. For a person after **parler de**, use **de lui / d’elle**: *Je parle de lui.*' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the words by y or en.', items: [
            { q: 'Tu penses à ton travail ?', cue: 'Tu', a: ['Tu y penses ?'], why: '*penser à* + thing → *y*.' },
            { q: 'Il parle de ce film.', cue: 'Il', a: ['Il en parle.'], why: '*parler de* + thing → *en*.' },
            { q: 'Nous allons à la bibliothèque.', cue: 'Nous', a: ['Nous y allons.'], why: 'A place with *à* → *y*.' },
            { q: 'Elle a besoin d’un nouvel ordinateur.', cue: 'Elle', a: ['Elle en a besoin.'], why: '*avoir besoin de* → *en*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose y or en.', items: [
            { q: 'Tu vas au cinéma ? – Oui, j’___ vais.', o: ['y', 'en', 'le'], why: '*aller à* a place → *y*.' },
            { q: 'Tu as des messages ? – Oui, j’___ ai cinq.', o: ['en', 'y', 'les'], why: 'A quantity → *en*.' },
            { q: 'Il pense à son avenir. Il ___ pense souvent.', o: ['y', 'en', 'le'], why: '*penser à* → *y*.' },
            { q: 'Vous parlez de la réunion ? – Oui, nous ___ parlons.', o: ['en', 'y', 'la'], why: '*parler de* → *en*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je n’y vais pas.', why: '*n’* + *y* + verb + *pas*.' },
            { a: 'Il en a besoin pour son travail.', why: '*en* before the verb.' },
            { a: 'Nous y pensons souvent.', why: '*y* before the verb.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
            ['se connecter', 'to log in'],
            ['télécharger', 'to download'],
            ['un mot de passe', 'a password'],
            ['une pièce jointe', 'an attachment'],
            ['partager', 'to share'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'L’appli que j’utilise',
      about: 'Describe things with qui, que, où and dont.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A **relative pronoun** joins two sentences into one and replaces a noun that you have already named. **Qui** replaces the **subject**: *J’ai un ami qui travaille dans l’informatique.* **Que** replaces the **direct object**: *L’appli que j’utilise est gratuite.* **Où** replaces a place or a time: *La ville où j’habite est petite.* **Dont** replaces a complement with **de**: *Le site dont je parle est très utile.*' },
          { t: 'table', caption: 'Relative pronouns', explain: ['head', 'col2'], head: ['Pronoun', 'Example', 'Replaces'], rows: [
            ['qui', 'Un ami qui travaille dans l’informatique.', 'the subject'],
            ['que', 'L’appli que j’utilise est gratuite.', 'the direct object'],
            ['où', 'La ville où j’habite est petite.', 'a place or a time'],
            ['dont', 'Le site dont je parle est très utile.', 'de + noun'],
          ] },
          { t: 'tip', art: 'owl', md: 'A quick test: after **qui** comes a **verb** (*qui travaille*). After **que** comes a **subject** (*que j’utilise*). **que** becomes **qu’** before a vowel, but **qui** never changes. **dont** is for anything with **de**: *parler de, avoir besoin de, avoir peur de*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'L’application **qui** envoie des rappels est très pratique.', n: '*l’application envoie* → *qui* is the subject.' },
            { s: 'Le film **que** j’ai vu hier était long.', n: '*j’ai vu le film* → *que* is the object.' },
            { s: 'La ville **où** je suis né est au bord de la mer.', n: '*où* for a place.' },
            { s: 'C’est le jour **où** j’ai acheté mon portable.', n: '*où* for a time.' },
            { s: 'Voici l’ordinateur **dont** j’ai besoin.', n: '*avoir besoin de* → *dont*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose qui, que, où or dont.', items: [
            { q: 'Le site ___ je cherche n’existe plus.', o: ['que', 'qui', 'dont'], why: '*je cherche le site*: the site is the object → *que*.' },
            { q: 'L’ami ___ m’a prêté ce livre habite à Lyon.', o: ['qui', 'que', 'dont'], why: '*l’ami m’a prêté* → *qui* is the subject.' },
            { q: 'La ville ___ je travaille est très grande.', o: ['où', 'que', 'dont'], why: 'A place: *où*.' },
            { q: 'Le logiciel ___ j’ai besoin est cher.', o: ['dont', 'que', 'qui'], why: '*avoir besoin de* → *dont*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Join the two sentences with a relative pronoun.', items: [
            { q: 'J’ai un ordinateur. Il est très rapide.', cue: 'J’ai un ordinateur', a: ['J’ai un ordinateur qui est très rapide.'], why: '*il est* → *qui est*.' },
            { q: 'Voici l’appli. Je l’utilise tous les jours.', cue: 'Voici l’appli', a: ['Voici l’appli que j’utilise tous les jours.'], why: '*je l’utilise* → *que j’utilise*.' },
            { q: 'Voici le café. J’y travaille souvent.', cue: 'Voici le café', a: ['Voici le café où je travaille souvent.'], why: 'A place with *y* → *où*.' },
            { q: 'Le livre est excellent. Je t’en ai parlé.', cue: 'Le livre', a: ['Le livre dont je t’ai parlé est excellent.'], why: '*parler de* → *dont*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'L’appli que j’utilise est gratuite.', why: '*que* + subject + verb.' },
            { a: 'La ville où je suis né est petite.', why: '*où* for a place.' },
            { a: 'Voici le site dont je t’ai parlé.', why: '*dont* with *parler de*.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Le film [qui] j’ai vu était long.', a: ['que'], why: 'The film is the object: *que*.' },
            { s: 'L’ami [que] habite à Lyon est gentil.', a: ['qui'], why: 'The friend is the subject: *qui*.' },
            { s: 'Le site [que] j’ai parlé est utile.', a: ['dont'], why: '*parler de* → *dont*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Je te le donne',
      about: 'Use two pronouns together in the right order.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'Sometimes two pronouns come before the verb: *Je te donne le livre → Je te le donne.* They follow a fixed order. First **me, te, se, nous, vous**; then **le, la, les**; then **lui, leur**; then **y**; then **en**. So say *Je te le donne* (me/te before le), but *Je le lui donne* (le before lui). Memorise the chain: **me/te/nous/vous → le/la/les → lui/leur → y → en**.' },
          { t: 'table', caption: 'The order of pronouns', explain: ['head', 'col0'], head: ['Place', 'Pronouns', 'Example'], rows: [
            ['first', 'me, te, se, nous, vous', 'Il me le prête.'],
            ['second', 'le, la, les', 'Je te le donne.'],
            ['third', 'lui, leur', 'Je le lui dis.'],
            ['fourth', 'y', 'Il m’y retrouve.'],
            ['last', 'en', 'Il m’en parle.'],
          ] },
          { t: 'tip', art: 'owl', md: 'In a negative sentence, **ne** goes before both pronouns and **pas** after the verb: *Je ne te le donne pas.* In the passé composé, both pronouns go before the auxiliary: *Je te l’ai donné.* Before a vowel, **le / la** become **l’**: *Je te l’ai dit.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Tu me prêtes ton portable ? – Oui, **je te le** prête.', n: '*te* before *le*.' },
            { s: 'Tu dis la vérité à Marie ? – Oui, **je la lui** dis.', n: '*la* before *lui*.' },
            { s: 'Il parle de ses projets ? – Oui, **il m’en** parle.', n: '*me* before *en*.' },
            { s: 'Elle donne le code à ses amis. → Elle **le leur** donne.', n: '*le* before *leur*.' },
            { s: 'Je **ne te l’**ai **pas** dit.', n: 'Negative past: *ne te l’ai pas dit*.' },
          ] },
          { t: 'dialogue', title: 'Un prêt', lines: [
            { who: 'Lucas', s: 'Tu peux me prêter ton chargeur ?' },
            { who: 'Sophie', s: 'Bien sûr, je te le prête. Tu me le rends demain ?' },
            { who: 'Lucas', s: 'Oui, je te le rendrai demain matin.' },
            { who: 'Sophie', s: 'Parfait. Et ne le perds pas !' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the nouns by pronouns.', items: [
            { q: 'Je donne le livre à Marie.', cue: 'Je', a: ['Je le lui donne.'], why: '*le* before *lui*.' },
            { q: 'Il me prête son téléphone.', cue: 'Il', a: ['Il me le prête.'], why: '*me* before *le*.' },
            { q: 'Nous envoyons les photos à nos amis.', cue: 'Nous', a: ['Nous les leur envoyons.'], why: '*les* before *leur*.' },
            { q: 'Tu me parles de ton voyage ?', cue: 'Tu', a: ['Tu m’en parles ?'], why: '*me* before *en*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je te le donne demain.', why: '*te* then *le*.' },
            { a: 'Elle ne me l’a pas dit.', why: '*ne me l’a pas dit*' },
            { a: 'Nous le leur envoyons.', why: '*le* then *leur*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct?', items: [
            { q: '', o: ['Je te le donne.', 'Je le te donne.', 'Je donne te le.'], why: 'The order is *me / te* before *le / la / les*.' },
            { q: '', o: ['Je la lui dis.', 'Je lui la dis.', 'Je la dis lui.'], why: '*la* before *lui*.' },
            { q: '', o: ['Il m’en parle.', 'Il en me parle.', 'Il me parle en.'], why: '*me* before *en*.' },
            { q: '', o: ['Je ne te l’ai pas dit.', 'Je ne l’ai te pas dit.', 'Je n’ai pas te l’dit.'], why: '*ne te l’ai pas dit*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the missing pronoun.', items: [
            { q: 'Tu me prêtes ton livre ? – Oui, je te ___ prête.', a: ['le'], why: '*te* then *le*: *je te le prête*.' },
            { q: 'Elle donne le code à ses amis : elle le ___ donne.', a: ['leur'], why: '*le* then *leur*.' },
            { q: 'Il parle de ses projets : il m’___ parle.', a: ['en'], why: '*me* then *en*: *il m’en parle*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Les écrans et les avis',
      about: 'Read a short article and a product review.',
      art: 'alien',
      spreads: [
        [
          { t: 'reading', title: 'Les enfants et les écrans', md: '**Les enfants et les écrans**\nDe plus en plus de familles se demandent combien de temps leurs enfants peuvent passer devant un écran. Les spécialistes que l’on interroge sont souvent prudents : ils pensent qu’il faut surtout regarder ce que les enfants font, plutôt que de compter les heures. Un enfant qui lit un livre sur une tablette ne fait pas la même chose qu’un enfant qui joue toute la soirée.\n\nCertains parents ont décidé d’y réfléchir ensemble : ils établissent des règles que toute la famille respecte, par exemple pas de téléphones à table. D’autres préfèrent en parler avec leurs enfants et leur proposer des activités dehors.' },
          { t: 'reading', title: 'Mon avis sur cet appareil', md: '**Avis client**\nJ’ai acheté ce casque il y a un mois. C’est l’appareil dont j’avais besoin pour le travail : il est léger, il se connecte facilement, et la batterie que j’ai testée dure toute la journée. Le seul défaut, c’est le prix, que je trouve un peu élevé. Je le recommande à mes collègues, et je le leur ai déjà montré.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Les spécialistes pensent qu’il faut compter les heures.', a: 'f', why: 'They think it matters more to look at what children do.' },
            { q: 'Lire sur une tablette n’est pas la même chose que jouer toute la soirée.', a: 't', why: '*Un enfant qui lit … ne fait pas la même chose …*' },
            { q: 'Certains parents établissent des règles pour toute la famille.', a: 't', why: '*ils établissent des règles que toute la famille respecte*' },
            { q: 'Le casque coûte moins de 50 euros.', a: 'ng', why: 'The review does not give the price.' },
            { q: 'L’auteur de l’avis recommande le casque.', a: 't', why: '*Je le recommande à mes collègues.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Quel est le défaut du casque ?', o: ['Le prix.', 'Le poids.', 'La connexion.'], why: '*Le seul défaut, c’est le prix.*' },
            { q: 'Que veut dire « je le leur ai déjà montré » ?', o: ['J’ai déjà montré le casque à mes collègues.', 'J’ai déjà acheté le casque.', 'Mes collègues me l’ont montré.'], why: '*le* = le casque, *leur* = mes collègues.' },
            { q: 'Que font certains parents avec leurs enfants ?', o: ['Ils proposent des activités dehors.', 'Ils interdisent tous les écrans.', 'Ils achètent plus d’écrans.'], why: '*leur proposer des activités dehors*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the relative pronouns in the review.', items: [
            { s: 'C’est l’appareil [dont] j’avais besoin : il est léger et la batterie [que] j’ai testée dure toute la journée.', why: '*dont* replaces *de* + noun and *que* the direct object.' },
            { s: 'Le prix, [que] je trouve un peu élevé.', why: '*que* is the direct object of *trouve*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Les parents établissent des règles que toute la famille ___.', a: ['respecte'], why: '*que toute la famille respecte*' },
            { q: 'Le casque se ___ facilement.', a: ['connecte'], why: '*il se connecte facilement*' },
            { q: 'La batterie dure toute la ___.', a: ['journée', 'journee'], why: '*dure toute la journée*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'L’appli ___ j’utilise est gratuite.', o: ['que', 'qui', 'dont'], why: 'The app is the object: *que*.' },
      { q: 'Un ami ___ travaille dans l’informatique m’a aidé.', o: ['qui', 'que', 'où'], why: 'The friend is the subject: *qui*.' },
      { q: 'Tu penses à ton projet ? – Oui, j’___ pense.', o: ['y', 'en', 'le'], why: '*penser à* → *y*.' },
      { q: 'Je ___ donne le livre. (to him)', o: ['le lui', 'lui le', 'le leur'], why: '*le* before *lui*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'La ville ___ je suis né est petite.', a: ['où', 'ou'], why: 'A place: *où*.' },
      { q: 'Voici le site ___ je t’ai parlé.', a: ['dont'], why: '*parler de* → *dont*.' },
      { q: 'Il parle de ses projets : il m’___ parle.', a: ['en'], why: '*me* then *en*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the English.', pairs: [
      ['se connecter', 'to log in'],
      ['un mot de passe', 'a password'],
      ['télécharger', 'to download'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace the nouns by pronouns.', items: [
      { q: 'Je donne le livre à Marie.', cue: 'Je', a: ['Je le lui donne.'], why: '*le* before *lui*.' },
      { q: 'Il parle de ce film.', cue: 'Il', a: ['Il en parle.'], why: '*parler de* → *en*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je te le donne demain.', why: '*te* then *le*.' },
      { a: 'Voici le site dont je t’ai parlé.', why: '*dont* with *parler de*.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Le film [qui] j’ai vu était long.', a: ['que'], why: 'The film is the object: *que*.' },
    ] },
  ],
};
