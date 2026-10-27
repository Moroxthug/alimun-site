// French A2, unit 6 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u6',
  title: 'Work and everyday life',
  goal: 'Talk about jobs, phone calls and daily tasks at work. Learn the pronouns lui and leur, and phrases for the phone.',
  art: 'suitcase',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['jobs', 'workplace', 'CV', 'indirect object pronouns', 'lui', 'leur', 'telephone', 'messages'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Je suis ingénieur',
      about: 'Talk about jobs and say what you have done.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: 'To say what your job is, use **je suis** + the job **with no article**: *Je suis ingénieur. Elle est médecin.* With **c’est** (and **ce sont**), use the article: *C’est un ingénieur. C’est une infirmière.* To ask someone’s job, say **Qu’est-ce que vous faites dans la vie ?** or **Quel est votre métier ?** Many jobs have a masculine and a feminine form.' },
          { t: 'table', caption: 'Jobs', explain: ['head', 'col2'], head: ['Man', 'Woman', 'Meaning'], rows: [
            ['infirmier', 'infirmière', 'nurse'],
            ['vendeur', 'vendeuse', 'shop assistant'],
            ['serveur', 'serveuse', 'waiter, waitress'],
            ['cuisinier', 'cuisinière', 'cook'],
            ['étudiant', 'étudiante', 'student'],
            ['professeur', 'professeure', 'teacher'],
            ['médecin', 'médecin', 'doctor'],
            ['ingénieur', 'ingénieure', 'engineer'],
            ['employé de bureau', 'employée de bureau', 'office worker'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some jobs have the same word for a man and a woman: *un médecin, une médecin*. For many jobs in **-eur**, the feminine is **-euse** (*vendeuse*) or **-eure** (*professeure, ingénieure*). In Quebec, feminine forms like *professeure* and *ingénieure* are more common than in France.' },
        ],
        [
          { t: 'text', md: 'To say where you work, use **à** and **dans**: *Je travaille dans un hôpital. Il travaille à la mairie. Elle travaille chez Karim.* To talk about your experience, use the passé composé with **depuis** or **pendant**: *J’ai travaillé pendant deux ans dans un restaurant. Je travaille ici depuis trois mois.* A short CV uses simple sentences: *J’ai étudié l’informatique. Je parle anglais et espagnol. Je sais utiliser un ordinateur.*' },
          { t: 'examples', items: [
            { s: 'Je suis **infirmière** à l’hôpital.', n: 'No article after *être* + job.' },
            { s: 'C’est **un** bon **professeur**.', n: 'With *c’est*, use the article and an adjective.' },
            { s: 'Il travaille **dans un bureau** depuis deux ans.', n: '*dans* + place, *depuis* + time.' },
            { s: 'J’ai **travaillé** pendant trois ans dans un café.', n: 'Passé composé + *pendant*.' },
            { s: 'Je **sais** utiliser un ordinateur et je **parle** trois langues.', n: 'Skills for a CV.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the feminine form.', items: [
            { q: 'Mon frère est vendeur. Ma sœur est ___.', base: 'vendeur', a: ['vendeuse'], why: '*-eur* often becomes *-euse*.' },
            { q: 'Mon père est infirmier. Ma mère est ___.', base: 'infirmier', a: ['infirmière', 'infirmiere'], why: '*-ier* becomes *-ière*.' },
            { q: 'Léo est étudiant. Léa est ___.', base: 'étudiant', a: ['étudiante', 'etudiante'], why: 'Add *-e* for a woman.' },
            { q: 'Il est cuisinier. Elle est ___.', base: 'cuisinier', a: ['cuisinière', 'cuisiniere'], why: '*-ier* becomes *-ière*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Je suis ___ ingénieur.', o: ['—', 'un', 'le'], why: 'No article after *être* + a job: *Je suis ingénieur.*' },
            { q: 'C’est ___ bon médecin.', o: ['un', 'le', 'du'], why: 'After *c’est*, use the article: *un bon médecin*.' },
            { q: 'Elle travaille ___ un hôpital.', o: ['dans', 'chez', 'au'], why: '*dans un hôpital*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je suis infirmière à l’hôpital.', why: 'No article after *être* + job.' },
            { a: 'Il travaille dans un bureau depuis deux ans.', why: '*dans* + place, *depuis* + time.' },
            { a: 'J’ai travaillé trois ans dans un restaurant.', why: 'Passé composé + duration + place.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where do they work?', pairs: [
            ['un infirmier', 'à l’hôpital'],
            ['un professeur', 'dans une école'],
            ['un serveur', 'dans un café'],
            ['un employé de bureau', 'dans un bureau'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Je lui téléphone',
      about: 'Replace à + a person with lui and leur.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'Some verbs take **à** before a person: *téléphoner à, écrire à, répondre à, donner à, parler à, dire à, demander à*. To replace **à + a person**, use an **indirect object pronoun**: **lui** (to him or her) for one person and **leur** (to them) for several people. They go **before the verb**: *Je téléphone à Paul → Je lui téléphone. J’écris à mes parents → Je leur écris.*' },
          { t: 'table', caption: 'Indirect object pronouns', explain: ['head', 'col2'], head: ['Person', 'Pronoun', 'Meaning'], rows: [
            ['à moi', 'me / m’', 'to me'],
            ['à toi', 'te / t’', 'to you'],
            ['à lui, à elle', 'lui', 'to him, to her'],
            ['à nous', 'nous', 'to us'],
            ['à vous', 'vous', 'to you'],
            ['à eux, à elles', 'leur', 'to them'],
          ] },
          { t: 'tip', art: 'owl', md: '**lui** is used for a man and for a woman: *Je lui parle* can mean *I speak to him* or *to her*. Only the context tells you. **leur** never takes an **s** as a pronoun: *Je leur parle*. Do not confuse it with **leur** meaning *their* in *leur maison*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Je téléphone à Paul. → Je **lui** téléphone.', n: 'One person: *lui*.' },
            { s: 'Elle écrit à ses parents. → Elle **leur** écrit.', n: 'Several people: *leur*.' },
            { s: 'Tu réponds à ton chef ? – Oui, je **lui** réponds.', n: '*répondre à* + person.' },
            { s: 'Il donne un livre à Marie. → Il **lui** donne un livre.', n: 'The thing stays; the person becomes *lui*.' },
            { s: 'Je **ne lui** parle **pas**.', n: 'Negative.' },
          ] },
          { t: 'text', md: 'Be careful with verbs that take a **direct object**. *J’aime Paul → Je l’aime.* *Je regarde Marie → Je la regarde.* But *Je téléphone à Paul → Je lui téléphone.* Learn the verb with its small word. If the person comes after **à**, use **lui / leur**; if there is no **à**, use **le / la / les**.' },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Replace the words by lui or leur.', items: [
            { q: 'Je téléphone à Paul.', cue: 'Je', a: ['Je lui téléphone.'], why: 'One person: *lui*.' },
            { q: 'Elle écrit à ses amis.', cue: 'Elle', a: ['Elle leur écrit.'], why: 'Several people: *leur*.' },
            { q: 'Nous répondons à la directrice.', cue: 'Nous', a: ['Nous lui répondons.'], why: 'One woman: *lui*.' },
            { q: 'Ils donnent un cadeau à leur mère.', cue: 'Ils', a: ['Ils lui donnent un cadeau.'], why: 'One person: *lui*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'lui, leur, le, la or les?', items: [
            { q: 'Je téléphone à ma sœur : je ___ téléphone.', o: ['lui', 'la', 'leur'], why: '*téléphoner à* → *lui*.' },
            { q: 'Je regarde mes voisins : je ___ regarde.', o: ['les', 'leur', 'lui'], why: '*regarder* has no *à*: *les*.' },
            { q: 'Il écrit à ses collègues : il ___ écrit.', o: ['leur', 'les', 'lui'], why: '*écrire à* + several people: *leur*.' },
            { q: 'Tu connais Paul ? Oui, je ___ connais.', o: ['le', 'lui', 'leur'], why: '*connaître* has no *à*: *le*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je lui téléphone tous les jours.', why: 'The pronoun goes before the verb.' },
            { a: 'Elle ne leur parle pas.', why: '*ne* + pronoun + verb + *pas*.' },
            { a: 'Nous leur écrivons souvent.', why: '*leur* before the verb.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Je [le] téléphone à mon chef.', a: ['lui'], why: '*téléphoner à* + person → *lui*.' },
            { s: 'Elle [lui] écrit à ses parents.', a: ['leur'], why: 'Several people: *leur*.' },
            { s: 'Il [lui] aime beaucoup.', a: ['l’'], why: '*aimer* has no *à*: *Il l’aime beaucoup.*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Allô ? Je voudrais parler à…',
      about: 'Make a phone call and leave a message.',
      art: 'owl',
      spreads: [
        [
          { t: 'text', md: 'On the phone, French people say **Allô ?** to answer. In a company, the person who answers says the name: *Société Martin, bonjour.* To ask for someone, say **Je voudrais parler à Mme Roux, s’il vous plaît.** The reply is often **C’est de la part de qui ?** (Who is calling?) and then **Ne quittez pas** (Hold on) or **Je vous la passe** (I will put you through to her).' },
          { t: 'dialogue', title: 'Au téléphone', lines: [
            { who: 'Réceptionniste', s: 'Société Martin, bonjour.' },
            { who: 'Karim', s: 'Bonjour, je voudrais parler à Madame Roux, s’il vous plaît.' },
            { who: 'Réceptionniste', s: 'C’est de la part de qui ?' },
            { who: 'Karim', s: 'De Karim Benali. Je lui téléphone pour un rendez-vous.' },
            { who: 'Réceptionniste', s: 'Ne quittez pas, je vous la passe.' },
          ] },
          { t: 'tip', art: 'owl', md: 'To ask someone to repeat, say **Pouvez-vous répéter, s’il vous plaît ?** To ask them to speak slowly, say **Pouvez-vous parler plus lentement ?** To end a call, say **Merci, au revoir** or, with friends, **Je te rappelle plus tard.**' },
        ],
        [
          { t: 'table', caption: 'On the phone', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['Allô ?', 'Hello? (on the phone)'],
            ['Je voudrais parler à …', 'I would like to speak to …'],
            ['C’est de la part de qui ?', 'Who is calling?'],
            ['Ne quittez pas.', 'Hold on, please.'],
            ['Il est absent. Elle est absente.', 'He is out. She is out.'],
            ['Pouvez-vous lui dire que j’ai appelé ?', 'Can you tell him / her that I called?'],
            ['Je vous rappellerai plus tard.', 'I will call you back later.'],
          ] },
          { t: 'examples', items: [
            { s: 'Je **voudrais parler à** Monsieur Dupont.', n: 'Asking for a person.' },
            { s: 'Il **est absent** aujourd’hui.', n: 'He is not there.' },
            { s: '**Pouvez-vous** lui dire que j’ai appelé ?', n: 'A request: *Pouvez-vous* + infinitive; *lui* before *dire*.' },
            { s: 'Je vous **rappelle** demain matin.', n: 'I will call you back tomorrow morning.' },
            { s: '**Pouvez-vous répéter**, s’il vous plaît ?', n: 'To ask for repetition.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'bank', h: 'Fill the gaps with the words in the bank.', extra: ['rappelle', 'absent'], items: [
            { q: 'Bonjour, je voudrais parler ___ Madame Roux.', a: 'à', why: '*parler à* + person.' },
            { q: 'C’est de la ___ de qui ?', a: 'part', why: '*C’est de la part de qui ?* means Who is calling?' },
            { q: 'Ne ___ pas, je vous la passe.', a: 'quittez', why: '*Ne quittez pas* means hold on.' },
            { q: 'Pouvez-vous ___ ? Je n’ai pas compris.', a: 'répéter', why: '*Pouvez-vous répéter ?*' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the answer.', pairs: [
            ['Allô ?', 'Bonjour, je voudrais parler à Paul.'],
            ['C’est de la part de qui ?', 'De Sophie Martin.'],
            ['Pouvez-vous répéter ?', 'Oui, bien sûr.'],
            ['Il est absent.', 'Pouvez-vous lui dire que j’ai appelé ?'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'You answer a call at home:', o: ['Allô ?', 'Au revoir.', 'Bonne nuit.'], why: '*Allô ?* is how you answer the phone.' },
            { q: 'You did not understand:', o: ['Pouvez-vous répéter, s’il vous plaît ?', 'Je voudrais un café.', 'Ne quittez pas.'], why: 'To ask someone to repeat.' },
            { q: 'The person is not there:', o: ['Pouvez-vous lui dire que j’ai appelé ?', 'Je vous passe Madame Roux.', 'C’est de la part de qui ?'], why: 'To leave a message.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je voudrais parler à Madame Roux.', why: '*Je voudrais parler à* + person.' },
            { a: 'Pouvez-vous lui dire que j’ai appelé ?', why: '*lui* before *dire*.' },
            { a: 'Je vous rappelle demain matin.', why: 'Subject, pronoun, verb, time.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une annonce et un e-mail',
      about: 'Read a job advert and a short e-mail from work.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'reading', title: 'Offre d’emploi', md: '**Vendeur ou vendeuse en boulangerie**\nNous cherchons une personne sympa et travailleuse pour notre boulangerie. Vous parlez français et un peu d’anglais. Vous savez accueillir les clients. Vous travaillez du mardi au samedi, de 6 h à 14 h.\n\nEnvoyez votre CV à emploi@example.com.' },
          { t: 'reading', title: 'Un e-mail du travail', md: 'Bonjour Madame Roux,\n\nJe vous écris pour confirmer notre rendez-vous de jeudi. J’ai déjà téléphoné à votre collègue, mais il n’était pas là. Pouvez-vous lui dire que j’arrive à 10 h ? Je vous remercie d’avance.\n\nCordialement,\nKarim Benali' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'On cherche un vendeur ou une vendeuse.', a: 't', why: '*Vendeur ou vendeuse en boulangerie*' },
            { q: 'Il faut parler anglais couramment.', a: 'f', why: 'The advert asks for French and *un peu d’anglais*.' },
            { q: 'Le travail commence à 6 h.', a: 't', why: '*de 6 h à 14 h*' },
            { q: 'On travaille aussi le dimanche.', a: 'f', why: '*du mardi au samedi*' },
            { q: 'La boulangerie est dans le centre-ville.', a: 'ng', why: 'The advert does not say where the bakery is.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Pourquoi Karim écrit-il à Madame Roux ?', o: ['Pour confirmer un rendez-vous.', 'Pour demander un emploi.', 'Pour annuler le rendez-vous.'], why: '*Je vous écris pour confirmer notre rendez-vous de jeudi.*' },
            { q: 'À qui Karim a-t-il déjà téléphoné ?', o: ['À un collègue de Madame Roux.', 'À la boulangerie.', 'À son chef.'], why: '*J’ai déjà téléphoné à votre collègue.*' },
            { q: 'Que doit-on envoyer pour l’annonce ?', o: ['Un CV.', 'Un cadeau.', 'Une photo seulement.'], why: '*Envoyez votre CV.*' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the texts.', items: [
            { q: 'Pour l’annonce, il faut savoir ___ les clients.', a: ['accueillir'], why: '*Vous savez accueillir les clients.*' },
            { q: 'Karim arrive à ___ heures.', a: ['10', 'dix'], why: '*j’arrive à 10 h*' },
            { q: 'Il termine par « ___ ».', a: ['Cordialement'], why: '*Cordialement* is a polite way to end an e-mail.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Je suis ___ infirmier.', o: ['—', 'un', 'le'], why: 'No article after *être* + job.' },
      { q: 'Je téléphone à Paul : je ___ téléphone.', o: ['lui', 'le', 'leur'], why: '*téléphoner à* → *lui*.' },
      { q: 'Elle écrit à ses parents : elle ___ écrit.', o: ['leur', 'lui', 'les'], why: 'Several people: *leur*.' },
      { q: 'Au téléphone : « C’est de la ___ de qui ? »', o: ['part', 'partie', 'parte'], why: '*de la part de qui ?*' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Ma sœur est ___. (vendeur)', a: ['vendeuse'], why: '*vendeur* → *vendeuse*.' },
      { q: 'Ne ___ pas, je vous la passe.', a: ['quittez'], why: '*Ne quittez pas.*' },
      { q: 'Il travaille ici ___ trois ans.', a: ['depuis'], why: '*depuis* + present.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Where do they work?', pairs: [
      ['un infirmier', 'à l’hôpital'],
      ['un professeur', 'dans une école'],
      ['un serveur', 'dans un café'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace the words by lui or leur.', items: [
      { q: 'Il écrit à ses collègues.', cue: 'Il', a: ['Il leur écrit.'], why: 'Several people: *leur*.' },
      { q: 'Je réponds à mon chef.', cue: 'Je', a: ['Je lui réponds.'], why: 'One person: *lui*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je voudrais parler à Madame Roux.', why: 'Standard phrase.' },
      { a: 'Pouvez-vous répéter, s’il vous plaît ?', why: 'Asking for repetition.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Je [le] parle à mon chef.', a: ['lui'], why: '*parler à* → *lui*.' },
    ] },
  ],
};
