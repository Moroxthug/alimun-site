// Morocco site (/ma/): original French-language course pages for Moroccan users, not a
// translation of the /fr/ pages. Written around what Moroccan learners want a language for:
// English for jobs and studies, German for training and work in Germany, French for studies
// in France and Canada, Spanish and Italian for the neighbours across the Mediterranean.
// "vous", as on the rest of /ma/. Facts only. Portuguese is left out for this audience.

const LEVELS = {
  A1: 'Vous comprenez et utilisez des expressions courantes et des phrases très simples, vous savez vous présenter et poser des questions sur des informations personnelles, si votre interlocuteur parle lentement et clairement.',
  A2: 'Vous communiquez dans des situations simples et habituelles, comme la famille, les achats, le travail ou votre quartier, et vous décrivez votre environnement avec des mots simples.',
  B1: 'Vous vous débrouillez dans la plupart des situations de voyage, vous racontez une expérience, un projet ou un souhait et vous expliquez brièvement votre avis.',
  B2: 'Vous comprenez l’essentiel de textes complexes, y compris techniques dans votre domaine, et vous parlez avec assez d’aisance pour qu’une conversation avec des locuteurs natifs soit naturelle.',
  C1: 'Vous utilisez la langue avec souplesse et efficacité dans la vie sociale, les études et le travail, et vous écrivez des textes clairs et bien structurés sur des sujets complexes.',
  C2: 'Vous comprenez sans effort presque tout ce que vous lisez et entendez, et vous vous exprimez spontanément, avec aisance et précision, en saisissant les nuances.',
};

const waitlistRow = (name) => ['Quand les cours ouvrent', [
  `Les cours ${name} d’Alimun ne sont pas encore ouverts. En **rejoignant gratuitement la liste d’attente**, vous recevez un e-mail dès leur ouverture, sans rien payer aujourd’hui. En attendant, les cours d’anglais et d’allemand sont déjà ouverts.`,
]];
const levelRow = ['Savoir par quel niveau commencer', [
  'Le Cadre européen commun de référence divise la maîtrise d’une langue en six niveaux, de A1 à C2, et les certificats demandés pour les études, le travail ou un visa s’y réfèrent. **Connaître votre niveau avant de commencer** vous permet de partir du bon point et de suivre vos progrès.',
]];

export default {
  site: 'ma',
  locale: 'fr_MA',
  courses: [
    { lang: 'English', slug: 'cours-anglais-en-ligne-maroc', name: 'anglais', de: 'd’anglais', video: 'pexels-12156230-london', open: true },
    { lang: 'German', slug: 'cours-allemand-en-ligne-maroc', name: 'allemand', de: 'd’allemand', video: 'pexels-29955338-berlin', open: true },
    { lang: 'French', slug: 'cours-francais-en-ligne-maroc', name: 'français', de: 'de français', video: 'pexels-4272751-paris', open: false },
    { lang: 'Spanish', slug: 'cours-espagnol-en-ligne-maroc', name: 'espagnol', de: 'd’espagnol', video: 'pexels-20066590-barcelona', open: false },
    { lang: 'Italian', slug: 'cours-italien-en-ligne-maroc', name: 'italien', de: 'd’italien', video: 'pexels-15245121-rome', open: false },
  ],
  pageTitle: (c) => c.open ? `Cours ${c.de} en ligne au Maroc, en direct avec un professeur | Alimun` : `Cours ${c.de} en ligne au Maroc : liste d’attente | Alimun`,
  metaDesc: (c) => c.open
    ? `Cours ${c.de} en ligne depuis le Maroc, en groupe avec un professeur, à jours et heures fixes chaque semaine, avec des devoirs corrigés par votre professeur et des exercices corrigés immédiatement. À partir de 24 € par mois.`
    : `Les cours ${c.de} d’Alimun ouvrent bientôt. Rejoignez gratuitement la liste d’attente et nous vous écrirons dès leur ouverture.`,
  heroTitle: (c) => `Cours ${c.de} en ligne`,
  heroDesc: (c) => c.open
    ? 'Des cours en direct par vidéo avec un professeur et toujours le même groupe, à jours fixes et à la même heure chaque semaine, depuis chez vous au Maroc. Entre les cours, vous vous entraînez avec une correction immédiate et votre professeur corrige vos devoirs. À partir de 24 € par mois.'
    : `Les cours ${c.de} ouvrent bientôt. Rejoignez gratuitement la liste d’attente : nous vous écrivons dès l’ouverture de votre langue et vous ne payez rien aujourd’hui. En attendant, les cours d’anglais et d’allemand sont déjà ouverts.`,
  heroCta: (c) => c.open ? 'Commencer maintenant' : 'Rejoindre la liste d’attente',
  howTitle: (c) => `Comment se déroulent les cours ${c.de}`,
  liveDesc: (c) => `Des cours ${c.de} par vidéo avec votre professeur et toujours le même groupe, à jours fixes et à la même heure chaque semaine.`,
  levelsTitle: (c) => `Les niveaux ${c.de} de A1 à C2`,
  exams: {
    English: {
      title: 'Les certificats d’anglais',
      desc: 'Les certificats les plus demandés pour étudier à l’étranger, travailler dans une entreprise internationale ou obtenir un visa. Chez Alimun, vous vous entraînez sur des épreuves au même format.',
      panels: [
        ['B2 First', 'Le B2 First de Cambridge English certifie le niveau B2 en quatre épreuves : Reading and Use of English, Writing, Listening et Speaking. Il est demandé par de nombreuses universités, programmes d’échange et employeurs, et le certificat n’expire pas.'],
        ['C1 Advanced', 'Le C1 Advanced de Cambridge English certifie le niveau C1 avec les mêmes quatre épreuves, plus exigeantes. De nombreuses universités et entreprises l’acceptent comme preuve d’un anglais avancé pour étudier et travailler en anglais.'],
        ['IELTS', 'L’IELTS évalue Listening, Reading, Writing et Speaking avec une note de 0 à 9. Il existe en version Academic, pour les études, et General Training, pour le travail et l’immigration, et il est demandé pour les visas de pays comme le Royaume-Uni, le Canada et l’Australie.'],
      ],
    },
    German: {
      title: 'Les certificats d’allemand',
      desc: 'Les certificats les plus demandés pour une formation, un emploi ou un visa pour l’Allemagne. Chez Alimun, vous vous entraînez sur des épreuves au même format.',
      panels: [
        ['Goethe B1', 'Le Goethe-Zertifikat B1 du Goethe-Institut évalue la lecture, l’écoute, l’écrit et l’oral, et peut se passer par modules séparés. C’est l’un des certificats les plus demandés pour une formation professionnelle ou un emploi en Allemagne.'],
        ['Goethe B2', 'Le Goethe-Zertifikat B2 certifie un allemand indépendant dans les mêmes quatre compétences. Il est souvent demandé pour les emplois qualifiés, pour l’accès à certaines études et pour la reconnaissance de plusieurs métiers de la santé.'],
        ['telc B1', 'Le telc Deutsch B1, appelé aussi Zertifikat Deutsch, certifie le niveau B1 et il est reconnu par les autorités allemandes, par exemple pour les demandes de naturalisation.'],
      ],
    },
  },
  guides: {
    English: {
      title: 'Apprendre l’anglais en ligne depuis le Maroc',
      lead: 'Au Maroc, beaucoup parlent déjà arabe, darija et français. L’anglais est **la langue qui ouvre le plus de portes en plus**, pour un emploi, des études à l’étranger ou un travail à distance.',
      rows: [
        ['Pourquoi l’anglais compte au Maroc', [
          'Les entreprises internationales, l’offshoring, le tourisme et les métiers du numérique recrutent des profils à l’aise en anglais, et un bon niveau permet aussi de **travailler à distance pour des entreprises étrangères**. L’anglais prend d’ailleurs une place croissante dans l’enseignement au Maroc.',
          'Pour les études, c’est la langue de nombreux masters à l’étranger et de la plupart des ressources techniques et scientifiques. Pour étudier ou immigrer au Canada, au Royaume-Uni ou en Australie, un test comme l’IELTS est souvent exigé.',
        ]],
        ['Ce qui est facile et ce qui est difficile', [
          'Si vous parlez français, vous reconnaissez déjà des milliers de mots anglais, comme information, important ou université. En revanche, l’anglais s’écrit souvent autrement qu’il se prononce, et **le th, le h aspiré et les voyelles longues et courtes** demandent de l’entraînement.',
          'Parler avec un professeur et un groupe dès le premier cours aide à corriger les habitudes venues du français avant qu’elles ne s’installent.',
        ]],
        ['Cours en groupe ou cours particuliers', [
          'Les cours particuliers offrent une attention totale, mais coûtent plus cher et vous habituent à un seul interlocuteur. En groupe, vous parlez avec des personnes différentes et **le coût de chaque cours est partagé**.',
          'Chez Alimun, vous choisissez entre des groupes de tailles différentes, selon l’attention que vous souhaitez, et une formule en cours individuels. Dans tous les cas, les cours ont lieu à jours et heures fixes, pour que l’apprentissage devienne une habitude.',
        ]],
        ['Combien on progresse', [
          'Il n’existe pas de nombre de semaines valable pour tout le monde : les progrès dépendent du niveau de départ, de la régularité et du travail entre les cours. **Quelques heures régulières chaque semaine** valent mieux que de longues séances espacées.',
          'C’est pourquoi les cours en direct sont complétés par des exercices corrigés immédiatement, des flashcards avec le vocabulaire des cours et des devoirs corrigés par votre professeur.',
        ]],
      ],
    },
    German: {
      title: 'Apprendre l’allemand en ligne depuis le Maroc',
      lead: 'Pour beaucoup de Marocains, l’allemand est **la clé d’une formation ou d’un emploi en Allemagne**. Et dans la plupart de ces projets, le niveau de langue est la première condition à remplir.',
      rows: [
        ['Formation, emploi et visa', [
          'L’Allemagne recherche des personnes qualifiées dans la santé, les soins, l’industrie et la technique, et propose des voies pour les candidats hors Union européenne, dont **la formation professionnelle en alternance (Ausbildung)**. Pour un visa de formation, un niveau B1 est demandé en règle générale.',
          'Les exigences changent selon le projet : un niveau A1 est en principe demandé pour le regroupement familial avec un conjoint, et la reconnaissance de plusieurs métiers de la santé demande souvent un niveau B2. Vérifiez toujours le niveau exact auprès de l’employeur, de l’école ou de l’ambassade.',
        ]],
        ['Les difficultés les plus courantes', [
          'Les principaux obstacles sont **les quatre cas, les trois genres et l’ordre des mots**, avec le verbe à la fin de la subordonnée, ainsi que des sons comme ü et ö. Bonne nouvelle : le ch de Bach ou de machen se prononce comme le خ arabe.',
          'En cours, vous utilisez la langue dès le début et votre professeur corrige les erreurs qui reviennent. Entre les cours, vous révisez avec des exercices et des flashcards jusqu’à ce que les structures deviennent automatiques.',
        ]],
        ['Savoir par quel niveau commencer', [
          'Le Cadre européen commun de référence divise la maîtrise d’une langue en six niveaux, de A1 à C2, et **les certificats d’allemand suivent la même échelle**. Connaître votre niveau vous évite de refaire ce que vous savez déjà.',
          'Le test de niveau d’Alimun vous place entre A1 et C1, et votre groupe et vos exercices s’adaptent au résultat.',
        ]],
        ['Se préparer avant le départ', [
          'Un projet en Allemagne se prépare souvent pendant des mois. Avancer **régulièrement, chaque semaine**, permet d’arriver à l’examen avec le bon niveau, sans tout concentrer sur les dernières semaines.',
          'Chez Alimun, vous vous entraînez sur des épreuves au format du Goethe B1, du Goethe B2 et du telc B1, à jours et heures fixes chaque semaine, depuis chez vous.',
        ]],
      ],
    },
    French: {
      title: 'Perfectionner son français en ligne depuis le Maroc',
      lead: 'Au Maroc, le français est partout : dans les études supérieures, l’administration et l’entreprise. **Passer d’un français correct à un français sûr** fait souvent la différence.',
      rows: [
        ['Pourquoi perfectionner son français', [
          'Les étudiants marocains sont parmi les plus nombreux dans les universités françaises, et beaucoup de projets d’études ou d’immigration vers la France ou le Canada demandent un test de français, comme le TCF, le TEF ou le DELF. Au Maroc aussi, un français écrit et oral solide compte pour un entretien ou une promotion.',
        ]],
        ['Ce qui fait progresser', [
          'Les difficultés les plus fréquentes sont l’orthographe, les accords et l’aisance à l’oral dans un cadre formel. **Écrire régulièrement et être corrigé** par un professeur est ce qui aide le plus.',
        ]],
        levelRow,
        waitlistRow('de français'),
      ],
    },
    Spanish: {
      title: 'Apprendre l’espagnol en ligne depuis le Maroc',
      lead: 'L’Espagne est à quelques kilomètres du Maroc, et l’espagnol est **déjà familier dans le nord du pays**.',
      rows: [
        ['Pourquoi l’espagnol compte au Maroc', [
          'L’Espagne est l’un des premiers partenaires économiques du Maroc. L’espagnol sert dans le tourisme, le commerce, les centres de relation client et pour les études ou le travail en Espagne et en Amérique latine.',
        ]],
        ['Ce qui est facile et ce qui est difficile', [
          'L’espagnol s’écrit à peu près comme il se prononce, et beaucoup de mots viennent de l’arabe, comme aceite ou almohada. La différence entre ser et estar et les nombreuses formes verbales demandent de l’entraînement, et **une conversation régulière avec des corrections précises** les rend vite naturelles.',
        ]],
        levelRow,
        waitlistRow('d’espagnol'),
      ],
    },
    Italian: {
      title: 'Apprendre l’italien en ligne depuis le Maroc',
      lead: 'L’Italie accueille **l’une des plus grandes communautés marocaines d’Europe**, et l’italien est plus proche du français qu’on ne le pense.',
      rows: [
        ['Pourquoi l’italien compte au Maroc', [
          'L’italien sert pour rejoindre de la famille en Italie, pour y étudier ou y travailler, et pour le tourisme et le commerce avec les entreprises italiennes.',
        ]],
        ['Ce qui est facile et ce qui est difficile', [
          'Si vous parlez français, vous comprenez vite beaucoup de mots italiens. Les consonnes doubles, comme dans fatto ou anno, ressemblent à la chadda en arabe et changent le sens des mots. Les temps verbaux demandent de l’entraînement, et **pratiquer avec un professeur et un groupe** fixe la bonne prononciation dès le début.',
        ]],
        levelRow,
        waitlistRow('d’italien'),
      ],
    },
  },
  faq: (c) => {
    if (c.open) {
      return [
        [`Combien coûte le cours ${c.de} en ligne d’Alimun ?`, 'Les formules commencent à 24 € par mois avec Community, en groupes d’environ 35 personnes. Focused coûte 59 €, Intensive 109 € et les cours particuliers 1 on 1 269 € par mois. Avec l’abonnement annuel, vous payez dix mois au lieu de douze.'],
        ['Puis-je suivre les cours depuis le Maroc ?', 'Oui. Les cours ont lieu en ligne, par vidéo, et vous les suivez depuis n’importe quelle ville, avec une connexion stable.'],
        ['Les cours sont-ils en direct ou enregistrés ?', 'Ce sont des cours en direct par vidéo, avec un professeur et toujours le même groupe. Alimun n’enregistre pas les cours : après chaque cours, vous recevez les notes de la séance, le nouveau vocabulaire et les devoirs.'],
        ['Quels jours et à quelle heure ont lieu les cours ?', 'Chaque groupe se retrouve à jours fixes et à la même heure chaque semaine, avec le même professeur et le même groupe. L’apprentissage devient ainsi une partie de votre semaine.'],
        ['Faut-il un niveau minimum pour commencer ?', 'Non. Il existe des groupes dès le niveau A1, et un court test au début vous place entre A1 et C1 pour rejoindre le bon groupe.'],
        ['Puis-je préparer un certificat ?', c.lang === 'German'
          ? 'Oui, vous pouvez vous entraîner sur des épreuves au format du Goethe B1, du Goethe B2 et du telc B1. Ce ne sont pas des documents officiels, et Alimun n’est pas affilié aux organismes d’examen.'
          : 'Oui, vous pouvez vous entraîner sur des épreuves au format du B2 First, du C1 Advanced et de l’IELTS. Ce ne sont pas des documents officiels, et Alimun n’est pas affilié aux organismes d’examen.'],
        ['Puis-je résilier à tout moment ?', 'Oui, vous pouvez résilier à tout moment dans les paramètres de paiement de votre compte, et vous gardez l’accès jusqu’à la fin de la période payée, comme le prévoient les Conditions générales.'],
      ];
    }
    return [
      [`Quand ouvrent les cours ${c.de} ?`, `Il n’y a pas encore de date. En rejoignant la liste d’attente, vous recevez un e-mail dès l’ouverture des cours ${c.de}.`],
      ['La liste d’attente est-elle gratuite ?', 'Oui. Vous la rejoignez gratuitement et vous ne payez rien aujourd’hui.'],
      ['Puis-je commencer maintenant avec une autre langue ?', 'Oui, les cours d’anglais et d’allemand sont déjà ouverts et vous pouvez les rejoindre à tout moment.'],
      ['Comment se déroulent les cours chez Alimun ?', 'Ce sont des cours en direct par vidéo, avec un professeur et toujours le même groupe, à jours fixes et à la même heure chaque semaine. Entre les cours, vous vous entraînez avec une correction immédiate.'],
      ['Puis-je suivre les cours depuis le Maroc ?', 'Oui. Les cours ont lieu en ligne, par vidéo, et vous les suivez depuis n’importe quelle ville, avec une connexion stable et un appareil équipé d’une caméra et d’un micro.'],
    ];
  },
  quiz: {
    title: (c) => `Estimez votre niveau ${c.de}`,
    intro: (c) => `Des phrases à compléter, plus difficiles quand vous répondez juste et plus simples quand vous vous trompez, en deux minutes environ. À la fin, vous voyez une estimation de votre niveau ${c.de}.`,
    note: (c) => c.open
      ? 'Ce n’est qu’une estimation. Après l’inscription, le test complet fixe votre niveau et vous place dans le bon groupe.'
      : `Ce n’est qu’une estimation. À l’ouverture des cours ${c.de}, le test complet fixera votre niveau et le bon groupe pour vous.`,
    cta: (c) => c.open ? 'S’inscrire et passer le test complet' : 'Rejoindre la liste d’attente',
    start: 'Commencer le test',
    prompt: 'Complétez la phrase',
    again: 'Recommencer',
    right1: 'bonne réponse sur',
    rightN: 'bonnes réponses sur',
    levels: LEVELS,
  },
  ui: {
    UI_QUIZ_BTN: 'Estimer mon niveau',
    UI_QUIZ_BTN_LONG: 'Estimer mon niveau en deux minutes',
    UI_HOW_1_T: 'Test de niveau',
    UI_HOW_1_D: 'Un court test fixe votre niveau, de A1 à C1, et vous place dans le groupe qui vous correspond.',
    UI_HOW_1_A: 'Une étudiante devant son ordinateur prend des notes',
    UI_HOW_2_T: 'Cours en direct',
    UI_HOW_2_A: 'Un cours en vidéo avec deux élèves à l’écran',
    UI_HOW_3_T: 'Devoirs corrigés',
    UI_HOW_3_D: 'Votre professeur donne les devoirs et vous les rend corrigés : la note, vos points forts, ce qu’il faut améliorer et un exemple corrigé.',
    UI_HOW_3_A: 'Un professeur corrige des devoirs sur son ordinateur',
    UI_HOW_4_T: 'Entraînez-vous quand vous voulez',
    UI_HOW_4_D: 'Des exercices à votre niveau avec une correction immédiate, des flashcards avec le vocabulaire des cours et des épreuves au format des examens.',
    UI_HOW_4_A: 'Un élève avec un casque s’entraîne dans son cahier',
    UI_LV_INTRO: 'Le Cadre européen commun de référence pour les langues décrit six niveaux de maîtrise. Chez Alimun, il existe des groupes pour chaque niveau, et le test de départ vous place entre A1 et C1.',
    UI_LV_1_H: 'A1, niveau débutant', UI_LV_1_P: LEVELS.A1,
    UI_LV_2_H: 'A2, niveau élémentaire', UI_LV_2_P: LEVELS.A2,
    UI_LV_3_H: 'B1, niveau intermédiaire', UI_LV_3_P: LEVELS.B1,
    UI_LV_4_H: 'B2, intermédiaire avancé', UI_LV_4_P: LEVELS.B2,
    UI_LV_5_H: 'C1, niveau avancé', UI_LV_5_P: LEVELS.C1,
    UI_LV_6_H: 'C2, maîtrise', UI_LV_6_P: LEVELS.C2,
    UI_EX_NOTE: 'Ce ne sont pas des documents d’examen officiels. Alimun n’est pas affilié aux organismes d’examen.',
    UI_PL_TITLE: 'Formules et prix',
    UI_PL_DESC: 'Choisissez l’attention que vous souhaitez : plus le groupe est petit, plus vous avez de temps pour parler. Avec l’abonnement annuel, vous payez dix mois au lieu de douze.',
    UI_PL_MONTH: 'par mois',
    UI_PL_1: 'Des groupes d’environ 35 personnes, des cours en direct et l’accès à la communauté.',
    UI_PL_2: 'Des groupes d’environ 17 personnes et un retour chaque semaine sur votre travail.',
    UI_PL_3: 'Des groupes d’environ 6 personnes, plus un cours individuel chaque semaine.',
    UI_PL_4: 'Des cours particuliers avec votre professeur, sur la base de trois cours par semaine.',
    UI_PL_CTA: 'Choisir ma formule',
    UI_FAQ_TITLE: 'Questions fréquentes',
    UI_Q_CLOSE: 'Fermer',
  },
};
