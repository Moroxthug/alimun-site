// French A2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'People and relationships',
  goal: 'Describe people and their character, compare them and talk about relationships. Learn the comparisons and the pronouns le, la, l’ and les.',
  art: 'croissant',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['character', 'comparison', 'direct object pronouns', 'relationships', 'opinions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Il est drôle, elle est timide',
      about: 'Describe character and give your opinion with je trouve que.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To describe a person’s character, use **être** and an adjective, as you did at A1. You also need to know how adjectives change for a woman. The rule for **-e** still works (*timide, timide*; *calme, calme*), but some endings change more: **-eux** becomes **-euse**, **-eur** becomes **-euse**, **-if** becomes **-ive**, **-er** becomes **-ère**.' },
          { t: 'table', caption: 'Character', explain: ['head', 'col3'], head: ['Man', 'Woman', 'Plural (men)', 'Meaning'], rows: [
            ['drôle', 'drôle', 'drôles', 'funny'],
            ['timide', 'timide', 'timides', 'shy'],
            ['calme', 'calme', 'calmes', 'calm'],
            ['généreux', 'généreuse', 'généreux', 'generous'],
            ['paresseux', 'paresseuse', 'paresseux', 'lazy'],
            ['travailleur', 'travailleuse', 'travailleurs', 'hard-working'],
            ['actif', 'active', 'actifs', 'active'],
            ['sportif', 'sportive', 'sportifs', 'sporty'],
            ['gentil', 'gentille', 'gentils', 'kind'],
            ['fier', 'fière', 'fiers', 'proud'],
            ['nerveux', 'nerveuse', 'nerveux', 'nervous'],
            ['égoïste', 'égoïste', 'égoïstes', 'selfish'],
          ] },
          { t: 'tip', art: 'owl', md: 'The masculine plural of adjectives in **-eux** stays the same (*généreux*), and so does **-x** after most vowels. In speech you often hear the feminine ending clearly: *paresseux* ends in a vowel sound, *paresseuse* ends with **z**. *Sympathique* is the full word; people usually say **sympa**, which never changes.' },
        ],
        [
          { t: 'text', md: 'To give an opinion about a person, use **je trouve que** or **je pense que** followed by a full sentence: *Je trouve qu’il est très drôle. Je pense qu’elle est timide.* Ask for an opinion with **Comment tu le trouves ?** or **Tu trouves qu’elle est sympa ?** Before a vowel, **que** becomes **qu’**.' },
          { t: 'examples', items: [
            { s: 'Je **trouve que** ma sœur est très **généreuse**.', n: 'An opinion about a woman: *généreuse*.' },
            { s: 'Je **pense qu’**il est un peu **paresseux**.', n: '*un peu* softens the sentence.' },
            { s: 'Tu **trouves que** Lucas est **drôle** ?', n: 'A question about an opinion.' },
            { s: 'Mon collègue est **très travailleur**, mais il est aussi **un peu timide**.', n: 'Two opposite qualities joined by *mais*.' },
            { s: 'Elle n’est **pas du tout** paresseuse.', n: '*pas du tout* means not at all.' },
          ] },
          { t: 'dialogue', title: 'A new colleague', lines: [
            { who: 'Sophie', s: 'Tu as rencontré le nouveau collègue ?' },
            { who: 'Lucas', s: 'Oui, il s’appelle Karim. Je trouve qu’il est très sympa.' },
            { who: 'Sophie', s: 'Moi aussi. Il est drôle, mais un peu timide.' },
            { who: 'Lucas', s: 'C’est vrai. Et il est très travailleur !' },
          ] },
        ],
        [
          { t: 'ex', kind: 'wordform', h: 'Write the adjective in the right form.', items: [
            { q: 'Ma tante est très ___.', base: 'généreux', a: ['généreuse', 'genereuse'], why: 'A woman: *-eux* becomes *-euse*.' },
            { q: 'Ma sœur est ___ et elle fait beaucoup de sport.', base: 'sportif', a: ['sportive'], why: 'A woman: *-if* becomes *-ive*.' },
            { q: 'Mes collègues sont très ___.', base: 'travailleur', a: ['travailleurs'], why: 'Several men: add *-s*.' },
            { q: 'Ma grand-mère est ___ de ses petits-enfants.', base: 'fier', a: ['fière', 'fiere'], why: 'A woman: *-er* becomes *-ère*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Find the opposite.', pairs: [
            ['paresseux', 'travailleur'],
            ['calme', 'nerveux'],
            ['généreux', 'égoïste'],
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je trouve qu’il est très drôle.', why: '*je trouve que* + a full sentence.' },
            { a: 'Elle n’est pas du tout paresseuse.', why: '*ne … pas du tout* around the verb.' },
            { a: 'Je pense que ma voisine est sympa.', why: '*je pense que* + a full sentence.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right word.', items: [
            { q: 'Je trouve ___ elle est généreuse.', o: ['qu’', 'que', 'qui'], why: 'Before a vowel (*elle*): *qu’*.' },
            { q: 'Mon frère est ___ travailleur.', o: ['très', 'beaucoup', 'tout'], why: '*très* goes before an adjective.' },
            { q: 'Elle n’est ___ du tout timide.', o: ['pas', 'plus', 'jamais'], why: '*pas du tout* means not at all.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Plus grand que, aussi sympa que',
      about: 'Compare people and things.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'To compare two people or things, use **plus** (more), **moins** (less) or **aussi** (as) before the adjective, then **que**: *Paul est plus grand que Marc. Marc est moins timide que Paul. Léa est aussi sympa que sa sœur.* The adjective agrees with the first person, as always. **que** becomes **qu’** before a vowel: *plus grand qu’elle*.' },
          { t: 'table', caption: 'Comparing', explain: ['head', 'col1'], head: ['French', 'English'], rows: [
            ['plus grand que', 'taller than'],
            ['moins grand que', 'less tall than, shorter than'],
            ['aussi grand que', 'as tall as'],
            ['plus de temps que', 'more time than'],
            ['moins de travail que', 'less work than'],
            ['autant d’amis que', 'as many friends as'],
          ] },
          { t: 'tip', art: 'owl', md: 'With a noun, use **plus de**, **moins de** and **autant de**: *Il a plus d’amis que moi.* After **que** use a stress pronoun, not *je*: **moi, toi, lui, elle, nous, vous, eux, elles**. So say *Elle est plus grande que moi*, not *plus grande que je*.' },
        ],
        [
          { t: 'text', md: 'Two words are irregular. **bon** (good) becomes **meilleur** (better): *Ce gâteau est meilleur que l’autre.* It agrees: *meilleure, meilleurs, meilleures*. **bien** (well) becomes **mieux**: *Il chante mieux que moi.* To say *the best*, add **le / la / les**: *C’est le meilleur ami de mon frère. Elle chante le mieux.*' },
          { t: 'table', caption: 'bon and bien', explain: ['head'], head: ['Word', 'Comparative', 'The best'], rows: [
            ['bon / bonne (adjective)', 'meilleur / meilleure', 'le meilleur / la meilleure'],
            ['bien (adverb)', 'mieux', 'le mieux'],
            ['grand', 'plus grand', 'le plus grand'],
            ['petit', 'plus petit', 'la plus petite'],
          ] },
          { t: 'examples', items: [
            { s: 'Mon frère est **plus sportif que** moi.', n: '*que* + stress pronoun.' },
            { s: 'Elle est **moins timide qu’**avant.', n: '*qu’* before a vowel.' },
            { s: 'Mes amis sont **aussi drôles que** toi.', n: 'The adjective agrees with *amis*.' },
            { s: 'Ce café est **meilleur que** l’autre.', n: '*meilleur*, not *plus bon*.' },
            { s: 'C’est **la plus gentille** personne que je connais.', n: '*la plus* + adjective: the most.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write plus, moins, aussi or que.', items: [
            { q: 'Paul a 30 ans, Marc a 25 ans. Paul est ___ âgé que Marc.', a: ['plus'], why: 'Thirty is more than twenty-five: *plus*.' },
            { q: 'Léa et Nadia sont toutes les deux très grandes. Léa est aussi grande ___ Nadia.', a: ['que'], why: '*aussi … que*' },
            { q: 'Je travaille moins ___ lui.', a: ['que'], why: '*moins … que*' },
            { q: 'Marc a 25 ans, Paul a 30 ans. Marc est ___ âgé que Paul.', a: ['moins'], why: 'Twenty-five is less than thirty: *moins*.' },
          ] },
          { t: 'ex', kind: 'select', h: 'Choose the right form.', items: [
            { q: 'Ce film est ___ que l’autre. (better)', o: ['meilleur', 'plus bon', 'mieux'], why: 'The adjective *bon* gives *meilleur*, not *plus bon*.' },
            { q: 'Elle chante ___ que moi. (better)', o: ['mieux', 'meilleur', 'plus bien'], why: 'The adverb *bien* gives *mieux*.' },
            { q: 'Il est plus grand que ___.', o: ['moi', 'je', 'mon'], why: 'After *que*, use a stress pronoun: *moi*.' },
            { q: 'Mes sœurs sont ___ gentilles que moi.', o: ['plus', 'meilleur', 'mieux'], why: '*plus gentilles que moi*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Compare. Write one sentence.', items: [
            { q: 'Paul mesure 1,85 m. Marc mesure 1,75 m. (plus grand)', cue: 'Paul', a: ['Paul est plus grand que Marc.', 'Marc est moins grand que Paul.'], why: 'Compare with *plus … que* or *moins … que*.' },
            { q: 'Léa a 24 ans. Nadia a 24 ans. (aussi âgée)', cue: 'Léa', a: ['Léa est aussi âgée que Nadia.'], why: 'Same age: *aussi … que*.' },
            { q: 'Ce gâteau est très bon. L’autre est bon. (meilleur)', cue: 'Ce gâteau', a: ['Ce gâteau est meilleur que l’autre.'], why: '*meilleur que*' },
          ] },
          { t: 'ex', kind: 'tf', h: 'True or false?', items: [
            { q: 'On dit « plus bon » en français.', a: 'f', why: 'We say *meilleur*.' },
            { q: 'On dit « plus grande que moi » pour une femme.', a: 't', why: 'The adjective agrees with the woman; *moi* after *que*.' },
            { q: 'On dit « plus grand que je ».', a: 'f', why: 'After *que*, use *moi*, not *je*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Je le connais, je la vois',
      about: 'Replace a noun with the direct object pronouns le, la, l’ and les.',
      art: 'dog',
      spreads: [
        [
          { t: 'text', md: 'A **direct object** is the person or thing a verb acts on: *Je vois Paul. Je connais Marie.* To avoid repeating the noun, replace it with a **direct object pronoun**: **le** (him, it, masculine), **la** (her, it, feminine), **l’** (before a vowel), **les** (them). The pronoun goes **before** the verb: *Je le vois. Je la connais. Je les aime.*' },
          { t: 'table', caption: 'Direct object pronouns', explain: ['head', 'col2'], head: ['Person', 'Pronoun', 'Meaning'], rows: [
            ['me / m’', 'me', 'me'],
            ['te / t’', 'te', 'you (tu)'],
            ['le / l’', 'le', 'him, it'],
            ['la / l’', 'la', 'her, it'],
            ['nous', 'nous', 'us'],
            ['vous', 'vous', 'you (vous)'],
            ['les', 'les', 'them'],
          ] },
          { t: 'tip', art: 'owl', md: 'With two verbs, the pronoun goes before the **infinitive**: *Je veux le voir* (I want to see him). In a negative sentence, **ne** comes before the pronoun and **pas** after the verb: *Je ne le connais pas. Je ne veux pas la voir.*' },
        ],
        [
          { t: 'examples', items: [
            { s: 'Tu connais Paul ? – Oui, **je le** connais bien.', n: '*Paul* → *le*.' },
            { s: 'Tu vois Marie ? – Non, je **ne la** vois **pas**.', n: 'Negative: *ne la … pas*.' },
            { s: 'Il aime ses voisins. Il **les** invite souvent.', n: '*ses voisins* → *les*.' },
            { s: 'Je veux **les** voir ce week-end.', n: 'The pronoun goes before the infinitive.' },
            { s: 'Elle **m’**appelle tous les soirs.', n: '*me* → *m’* before a vowel.' },
          ] },
          { t: 'text', md: 'Learn the difference between **connaître** and **savoir**. **connaître** means to *know a person or a place*: *Je connais Paul. Je connais Lyon.* **savoir** means to *know a fact or how to do something*: *Je sais son nom. Je sais nager.* Both are irregular: *je connais, tu connais, il connaît, nous connaissons, vous connaissez, ils connaissent*.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right pronoun.', items: [
            { q: 'Tu connais Paul ? – Oui, je ___ connais.', o: ['le', 'la', 'les'], why: '*Paul* is masculine: *le*.' },
            { q: 'Tu vois Marie ? – Non, je ne ___ vois pas.', o: ['la', 'le', 'les'], why: '*Marie* is a woman: *la*.' },
            { q: 'Vous invitez vos amis ? – Oui, nous ___ invitons.', o: ['les', 'le', 'la'], why: '*vos amis* is plural: *les*.' },
            { q: 'Tu aimes cette chanson ? – Oui, je ___ adore.', o: ['l’', 'la', 'le'], why: 'Before a vowel: *l’*.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Replace the person or thing by a pronoun.', items: [
            { q: 'Je connais Sophie.', cue: 'Je', a: ['Je la connais.'], why: '*Sophie* → *la*.' },
            { q: 'Il regarde le film.', cue: 'Il', a: ['Il le regarde.'], why: '*le film* → *le*.' },
            { q: 'Elle invite ses amies.', cue: 'Elle', a: ['Elle les invite.'], why: '*ses amies* → *les*.' },
            { q: 'Nous ne voyons pas Karim.', cue: 'Nous', a: ['Nous ne le voyons pas.'], why: 'Negative: *ne le … pas*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Je ne la connais pas.', why: '*ne* + pronoun + verb + *pas*.' },
            { a: 'Tu veux le voir demain ?', why: 'The pronoun goes before the infinitive.' },
            { a: 'Ils m’invitent samedi.', why: '*m’* before the verb.' },
          ] },
          { t: 'ex', kind: 'select', h: 'connaître or savoir?', items: [
            { q: 'Je ___ Lyon très bien.', o: ['connais', 'sais', 'savons'], why: 'A place: *connaître*.' },
            { q: 'Tu ___ nager ?', o: ['sais', 'connais', 'connaît'], why: 'A skill: *savoir*.' },
            { q: 'Elle ne ___ pas mon adresse.', o: ['sait', 'connaît', 'sais'], why: 'A fact: *savoir*.' },
            { q: 'Nous ___ ses parents.', o: ['connaissons', 'savons', 'connaît'], why: 'People: *connaître*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Une lettre à une amie',
      about: 'Read a letter about a new colleague.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Chère Clara', md: 'Chère Clara,\n\nComment vas-tu ? Moi, ça va bien. J’ai un nouveau travail depuis un mois et je suis très contente. Mes collègues sont sympas, surtout Karim. Je le connais depuis une semaine seulement, mais je trouve qu’il est très drôle et très généreux. Il est un peu timide, mais il est plus travailleur que moi !\n\nJe le vois tous les jours au bureau. Il m’aide souvent avec mes e-mails et je l’invite à déjeuner de temps en temps. Nous parlons beaucoup de notre famille. Sa sœur est plus grande que lui, et elle est aussi sportive que lui.\n\nEt toi, tu as des nouvelles de ton frère ? Je voudrais le voir bientôt. Écris-moi vite !\n\nGrosses bises,\nNadia' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Nadia a un nouveau travail depuis un mois.', a: 't', why: '*J’ai un nouveau travail depuis un mois.*' },
            { q: 'Nadia connaît Karim depuis un an.', a: 'f', why: 'She has known him for one week.' },
            { q: 'Karim est plus travailleur que Nadia.', a: 't', why: '*Il est plus travailleur que moi.*' },
            { q: 'La sœur de Karim est moins sportive que lui.', a: 'f', why: 'She is *aussi sportive que lui* (as sporty as him).' },
            { q: 'Karim habite à Paris.', a: 'ng', why: 'The letter does not say where Karim lives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Comment est Karim ?', o: ['Drôle, généreux et un peu timide.', 'Paresseux et calme.', 'Sportif et bavard.'], why: '*très drôle et très généreux … un peu timide*' },
            { q: 'Que veut dire « Je le vois tous les jours » ?', o: ['Je vois Karim chaque jour.', 'Je vois le bureau.', 'Je regarde la télévision.'], why: '*le* replaces *Karim*.' },
            { q: 'Que voudrait faire Nadia bientôt ?', o: ['Voir le frère de Clara.', 'Changer de travail.', 'Inviter Karim.'], why: '*Je voudrais le voir bientôt.* *le* is Clara’s brother.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the letter.', items: [
            { q: 'Nadia ___ Karim à déjeuner de temps en temps.', a: ['invite'], why: '*Je l’invite à déjeuner.*' },
            { q: 'Karim ___ Nadia avec ses e-mails.', a: ['aide'], why: '*Il m’aide souvent avec mes e-mails.*' },
            { q: 'Nadia écrit à son ___, Clara.', a: ['amie'], why: '*Chère Clara* is addressed to a friend.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Ma tante est très ___.', o: ['généreuse', 'généreux', 'généreuses'], why: 'A woman: *généreuse*.' },
      { q: 'Il est plus grand que ___.', o: ['moi', 'je', 'mon'], why: 'After *que*, use *moi*.' },
      { q: 'Ce gâteau est ___ que l’autre.', o: ['meilleur', 'plus bon', 'mieux'], why: '*bon* → *meilleur*.' },
      { q: 'Tu connais Marie ? – Oui, je ___ connais.', o: ['la', 'le', 'les'], why: '*Marie* → *la*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Je trouve ___ il est très drôle.', a: ['qu’', 'qu'], why: 'Before a vowel: *qu’*.' },
      { q: 'Léa est aussi sympa ___ sa sœur.', a: ['que'], why: '*aussi … que*' },
      { q: 'Nous ___ ses parents. (connaître)', a: ['connaissons'], why: '*nous connaissons*' },
    ] },
    { t: 'ex', kind: 'match', h: 'Find the opposite.', pairs: [
      ['paresseux', 'travailleur'],
      ['calme', 'nerveux'],
      ['généreux', 'égoïste'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Replace the words by a pronoun.', items: [
      { q: 'Je vois Paul.', cue: 'Je', a: ['Je le vois.'], why: '*Paul* → *le*.' },
      { q: 'Ils invitent leurs voisins.', cue: 'Ils', a: ['Ils les invitent.'], why: '*leurs voisins* → *les*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Je ne le connais pas.', why: '*ne le … pas*' },
      { a: 'Elle est plus travailleuse que moi.', why: '*plus … que* + stress pronoun.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ce film est [plus bon] que l’autre.', a: ['meilleur'], why: '*bon* → *meilleur*.' },
      { s: 'Elle chante [meilleur] que moi.', a: ['mieux'], why: 'The adverb *bien* → *mieux*.' },
    ] },
  ],
};
