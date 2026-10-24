// French site (/fr/): course pages written for French speakers in France, Belgium,
// Switzerland, Quebec and French-speaking Africa. Facts only.

const LEVELS = {
  A1: "Tu comprends et utilises des expressions familières et des phrases très simples, tu sais te présenter et poser des questions sur des informations personnelles, si l'autre personne parle lentement et clairement.",
  A2: 'Tu communiques dans des situations simples et habituelles, comme la famille, les achats, le travail et le lieu où tu vis, et tu décris ton environnement avec des mots simples.',
  B1: "Tu te débrouilles dans la plupart des situations rencontrées en voyage, tu racontes des expériences, des projets et des envies et tu expliques brièvement tes opinions.",
  B2: "Tu comprends l'essentiel de textes complexes, même techniques dans ton domaine, et tu parles avec une aisance qui rend la conversation naturelle avec quelqu'un dont c'est la langue depuis toujours.",
  C1: "Tu utilises la langue de façon souple et efficace dans la vie sociale, les études et le travail, et tu écris des textes clairs et bien structurés sur des sujets complexes.",
  C2: "Tu comprends sans effort presque tout ce que tu lis et entends et tu t'exprimes de façon spontanée, fluide et précise, en saisissant les nuances de sens.",
};

const waitlistRow = (c) => ["Quand ouvrent les cours", [
  `Les cours ${c.de} sur Alimun ne sont pas encore ouverts. En **t'inscrivant gratuitement sur la liste d'attente**, tu reçois un e-mail dès leur ouverture, sans rien payer aujourd'hui. En attendant, tu peux déjà suivre les cours d'anglais et d'allemand.`,
]];
const levelRow = ['Comment savoir par quel niveau commencer', [
  "Le Cadre européen commun de référence divise la maîtrise d'une langue en six niveaux, de A1 à C2. **Te situer avant de commencer** te permet de partir du bon point et de voir tes progrès.",
]];

export default {
  site: 'fr',
  locale: 'fr_FR',
  courses: [
    { lang: 'English', slug: 'cours-d-anglais-en-ligne', name: 'anglais', de: "d'anglais", le: "l'anglais", video: 'pexels-12156230-london', open: true },
    { lang: 'German', slug: 'cours-d-allemand-en-ligne', name: 'allemand', de: "d'allemand", le: "l'allemand", video: 'pexels-29955338-berlin', open: true },
    { lang: 'Spanish', slug: 'cours-d-espagnol-en-ligne', name: 'espagnol', de: "d'espagnol", le: "l'espagnol", video: 'pexels-20066590-barcelona', open: false },
    { lang: 'Portuguese', slug: 'cours-de-portugais-en-ligne', name: 'portugais', de: 'de portugais', le: 'le portugais', video: 'pexels-12890902-sintra', open: false },
    { lang: 'Italian', slug: 'cours-d-italien-en-ligne', name: 'italien', de: "d'italien", le: "l'italien", video: 'pexels-15245121-rome', open: false },
  ],
  pageTitle: (c) => c.open ? `Cours ${c.de} en ligne, en direct avec un professeur | Alimun` : `Cours ${c.de} en ligne : liste d'attente | Alimun`,
  metaDesc: (c) => c.open
    ? `Cours ${c.de} en ligne en groupe avec un professeur, à jours et heures fixes chaque semaine, devoirs corrigés par ton professeur et exercices corrigés immédiatement. À partir de €24 par mois.`
    : `Les cours ${c.de} sur Alimun ouvriront bientôt. Inscris-toi gratuitement sur la liste d'attente et nous t'écrirons dès leur ouverture.`,
  heroTitle: (c) => `Cours ${c.de} en ligne`,
  heroDesc: (c) => c.open
    ? "Des cours en direct en visio avec un professeur et le même groupe, à jours fixes et à la même heure chaque semaine. Entre deux cours, tu t'entraînes avec une correction immédiate et ton professeur corrige tes devoirs. À partir de €24 par mois."
    : `Les cours ${c.de} ouvriront bientôt. Inscris-toi gratuitement sur la liste d'attente : nous t'écrivons dès l'ouverture et tu ne paies rien aujourd'hui. En attendant, tu peux déjà suivre les cours d'anglais et d'allemand.`,
  heroCta: (c) => c.open ? 'Commencer maintenant' : "Rejoindre la liste d'attente",
  howTitle: (c) => `Comment se passent les cours ${c.de}`,
  liveDesc: (c) => `Des cours ${c.de} en visio avec ton professeur et le même groupe, à jours fixes et à la même heure chaque semaine.`,
  levelsTitle: (c) => `Les niveaux ${c.de} de A1 à C2`,
  exams: {
    English: {
      title: "Les certifications d'anglais",
      desc: "Les certifications les plus demandées pour étudier, travailler et obtenir un visa. Sur Alimun, tu t'entraînes avec des épreuves au même format.",
      panels: [
        ['B2 First', "Le B2 First de Cambridge English certifie le niveau B2 avec quatre épreuves : Reading and Use of English, Writing, Listening et Speaking. Il est souvent demandé par les universités, les programmes Erasmus et les employeurs, et le certificat n'a pas de date d'expiration."],
        ['C1 Advanced', "Le C1 Advanced de Cambridge English certifie le niveau C1 avec les mêmes quatre épreuves, plus exigeantes. De nombreuses universités et entreprises l'acceptent comme preuve d'un anglais avancé pour étudier et travailler en anglais."],
        ['IELTS', "L'IELTS évalue Listening, Reading, Writing et Speaking avec une note de 0 à 9. Il existe en version Academic, pour les études, et General Training, pour le travail et l'immigration, et il est exigé pour les visas dans des pays comme le Royaume-Uni, l'Australie et le Canada."],
      ],
    },
    German: {
      title: "Les certifications d'allemand",
      desc: "Les certifications les plus demandées pour vivre, étudier et travailler dans les pays germanophones. Sur Alimun, tu t'entraînes avec des épreuves au même format.",
      panels: [
        ['Goethe B1', "Le Goethe-Zertifikat B1 du Goethe-Institut évalue la lecture, l'écoute, l'écrit et l'oral, que tu peux aussi passer en modules séparés. C'est l'un des certificats les plus demandés pour vivre et travailler en Allemagne."],
        ['Goethe B2', "Le Goethe-Zertifikat B2 certifie un allemand indépendant dans les mêmes quatre compétences. Il est souvent demandé pour des emplois qualifiés et pour l'accès à certaines formations."],
        ['telc B1', "Le telc Deutsch B1, connu sous le nom de Zertifikat Deutsch, certifie le niveau B1 et il est reconnu par les autorités allemandes, par exemple dans les demandes de naturalisation."],
      ],
    },
  },
  guides: {
    English: {
      title: "Apprendre l'anglais en ligne : ce qu'il faut savoir avant de commencer",
      lead: "L'anglais est **la langue qui ouvre le plus de portes** aux francophones, en Europe, au Canada comme en Afrique. Bien choisir sa méthode fait la différence entre un cours abandonné à mi-chemin et un cours qui te fait vraiment parler.",
      rows: [
        ["Pourquoi l'anglais compte quand on parle français", [
          "Beaucoup d'entreprises travaillent avec des clients et des équipes à l'étranger, et de plus en plus d'entretiens se déroulent, au moins en partie, en anglais. Le maîtriser avec assurance te permet de **postuler à des postes internationaux** et de travailler à distance pour des entreprises étrangères.",
          "Au Canada, l'anglais est l'une des deux langues officielles et il compte dans la vie professionnelle, y compris au Québec. Pour les études, c'est la langue de nombreux masters et doctorats à l'étranger et de la plupart de la documentation technique.",
        ]],
        ['Ce qui coûte le plus aux francophones', [
          "L'accent tonique, qui change le sens de certains mots, le son th et le h qui se prononce demandent un vrai travail d'écoute. Les faux amis sont nombreux : actually ne veut pas dire actuellement, eventually ne veut pas dire éventuellement et library n'est pas une librairie.",
          "Parler avec un professeur et un groupe dès le premier jour aide à **entendre la vraie langue** et à corriger les erreurs qui viennent du français avant qu'elles deviennent des habitudes.",
        ]],
        ['Cours en groupe ou cours particuliers', [
          "Les cours particuliers offrent une attention complète, mais ils coûtent plus cher et t'habituent à un seul interlocuteur. En groupe, tu parles avec des personnes différentes, tu entends des accents variés et **le coût de chaque cours est partagé**.",
          "Sur Alimun, tu peux choisir entre des groupes de tailles différentes, selon l'attention que tu souhaites, et une formule de cours individuels. Dans tous les cas, les cours ont lieu à jours et heures fixes, pour que l'apprentissage devienne une habitude.",
        ]],
        ['Combien de progrès et de quoi ils dépendent', [
          "Il n'existe pas de nombre de semaines valable pour tous : les progrès dépendent du niveau de départ, de la régularité et de la pratique entre les cours. **Quelques heures régulières chaque semaine** valent mieux que de longues séances occasionnelles.",
          "C'est pourquoi les cours en direct sont complétés par des exercices corrigés immédiatement, des cartes mémoire avec le vocabulaire des cours et des devoirs corrigés par ton professeur.",
        ]],
      ],
    },
    German: {
      title: "Apprendre l'allemand en ligne : ce qu'il faut savoir avant de commencer",
      lead: "L'allemand est **la langue maternelle la plus parlée de l'Union européenne** et ouvre les portes de l'Allemagne, de l'Autriche et de la Suisse. Avec une méthode régulière, sa réputation de langue difficile s'efface vite.",
      rows: [
        ["Pourquoi l'allemand compte quand on parle français", [
          "L'Allemagne est **le premier partenaire commercial de la France**, et de nombreuses entreprises françaises, belges et suisses travaillent chaque jour avec des clients et des fournisseurs germanophones.",
          "L'allemand est aussi une langue officielle en Suisse et en Belgique. Pour qui pense s'installer en Allemagne, il est souvent demandé pour les emplois qualifiés, certaines formations et les démarches administratives.",
        ]],
        ['Les difficultés les plus fréquentes et comment les dépasser', [
          "Pour un francophone, les principaux obstacles sont **les cas, le genre des noms et l'ordre des mots** dans la phrase, en particulier le verbe placé à la fin des subordonnées.",
          "En cours en direct, tu utilises la langue dès le début et ton professeur corrige les erreurs récurrentes. Entre deux cours, tu révises avec des exercices et des cartes mémoire, et les structures deviennent automatiques.",
        ]],
        ['Comment savoir par quel niveau commencer', [
          "Le Cadre européen commun de référence divise la maîtrise d'une langue en six niveaux, de A1 à C2, et **les certifications d'allemand suivent la même échelle**. Savoir où tu en es t'évite de répéter ce que tu sais déjà.",
          "Le test de niveau d'Alimun te situe de A1 à C1, et ta classe et tes exercices s'adaptent au résultat.",
        ]],
        ["L'allemand pour travailler, étudier ou s'installer", [
          "Si ton objectif est un emploi ou un déménagement, renseigne-toi à l'avance sur **le niveau et la certification demandés** : ils sont souvent indiqués dans les offres ou par les organismes auprès desquels tu déposes ta demande.",
          "Sur Alimun, tu peux t'entraîner avec des épreuves au format Goethe B1, Goethe B2 et telc B1 et te préparer régulièrement, à jours et heures fixes chaque semaine, même avant de partir.",
        ]],
      ],
    },
    Spanish: {
      title: "Apprendre l'espagnol en ligne : ce qu'il faut savoir avant de commencer",
      lead: "L'espagnol est proche du français, ce qui rend **les premiers pas rapides**. Bien le parler demande pourtant de dépasser les ressemblances.",
      rows: [
        ["Pourquoi l'espagnol compte quand on parle français", [
          "L'espagnol est langue officielle en Espagne et dans la plupart des pays d'Amérique latine, et c'est **l'une des langues les plus parlées au monde**. Il est utile pour voyager, étudier et travailler avec l'Espagne, voisine de la France, et avec l'Amérique latine.",
        ]],
        ['Ressemblances et pièges pour un francophone', [
          "Beaucoup de mots se ressemblent, mais **les faux amis sont nombreux** et des distinctions comme ser et estar, ou le r roulé, n'existent pas en français.",
          "Les cours en direct avec une correction précise aident à passer du simple fait de se faire comprendre à un espagnol correct et naturel.",
        ]],
        levelRow,
        waitlistRow({ de: "d'espagnol" }),
      ],
    },
    Portuguese: {
      title: "Apprendre le portugais en ligne : ce qu'il faut savoir avant de commencer",
      lead: "Le portugais relie le Portugal, le Brésil et plusieurs pays d'Afrique. Pour un francophone, **ses voyelles nasales sonnent familières**, mais la langue garde ses propres pièges.",
      rows: [
        ['Pourquoi le portugais compte quand on parle français', [
          "Le portugais est langue officielle au Brésil, au Portugal, en Angola, au Mozambique et dans d'autres pays, et il est parlé par **des centaines de millions de personnes**. La France compte aussi une importante communauté d'origine portugaise.",
          "Le connaître facilite le travail avec le Brésil, l'Afrique lusophone ou le Portugal, et la vie sur place.",
        ]],
        ['Portugais européen et brésilien', [
          "Les deux variantes partagent la grammaire, mais la prononciation, une partie du vocabulaire et certains usages changent. Mieux vaut **choisir dès le départ celle qui correspond à tes objectifs**, sachant que qui parle l'une comprend aussi l'autre.",
        ]],
        levelRow,
        waitlistRow({ de: 'de portugais' }),
      ],
    },
    Italian: {
      title: "Apprendre l'italien en ligne : ce qu'il faut savoir avant de commencer",
      lead: "L'italien est **une langue très proche du français** : on le comprend vite, mais bien le parler demande de sortir des ressemblances.",
      rows: [
        ["Pourquoi l'italien compte quand on parle français", [
          "L'Italie est voisine de la France et l'un de ses grands partenaires économiques, et l'italien est aussi **une langue officielle en Suisse**. Il compte dans des domaines comme le design, la mode, la gastronomie et la culture.",
        ]],
        ['Ressemblances et pièges pour un francophone', [
          "Les consonnes doubles, comme dans fatto ou anno, changent le sens des mots, et l'accent tonique ne tombe pas toujours au même endroit qu'en français. **Les faux amis ne manquent pas** : camera veut dire chambre et burro veut dire beurre.",
          "Pratiquer avec un professeur et un groupe aide à fixer la bonne prononciation dès le début.",
        ]],
        levelRow,
        waitlistRow({ de: "d'italien" }),
      ],
    },
  },
  faq: (c) => {
    if (c.open) {
      return [
        [`Combien coûte un cours ${c.de} en ligne sur Alimun ?`, "Les formules commencent à €24 par mois avec Community, en groupes d'environ 35 personnes. Focused coûte €59, Intensive €109 et les cours particuliers 1 on 1 €269 par mois. Avec l'abonnement annuel, tu paies dix mois au lieu de douze."],
        ['Les cours sont-ils en direct ou enregistrés ?', "Ce sont des cours en direct en visio avec un professeur et toujours le même groupe. Alimun n'enregistre pas les cours : après chaque cours, tu reçois les notes de la séance, le nouveau vocabulaire et les devoirs."],
        ['Quels jours et à quelle heure ont lieu les cours ?', "Chaque classe se réunit à jours fixes et à la même heure chaque semaine, avec le même professeur et le même groupe. L'apprentissage devient ainsi une partie de ta semaine."],
        ['Faut-il un niveau minimum pour commencer ?', 'Non. Il y a des classes dès le niveau A1, et un court test initial te situe de A1 à C1 pour que tu entres dans la classe qui te convient.'],
        ['Puis-je préparer une certification ?', c.lang === 'German'
          ? "Oui, tu peux t'entraîner avec des épreuves au format Goethe B1, Goethe B2 et telc B1. Ce n'est pas du matériel officiel et Alimun n'est pas affiliée aux organismes certificateurs."
          : "Oui, tu peux t'entraîner avec des épreuves au format B2 First, C1 Advanced et IELTS. Ce n'est pas du matériel officiel et Alimun n'est pas affiliée aux organismes certificateurs."],
        ['Puis-je résilier quand je veux ?', "Oui, tu peux résilier à tout moment depuis les paramètres de paiement de ton espace personnel. Tu gardes l'accès jusqu'à la fin de la période déjà payée, comme indiqué dans les Conditions générales."],
        ["De quoi ai-je besoin pour suivre les cours ?", "D'un ordinateur ou d'un autre appareil avec caméra, micro et une connexion stable. Les cours se suivent dans le navigateur, sans installer de logiciel."],
      ];
    }
    return [
      [`Quand ouvrent les cours ${c.de} ?`, `Il n'y a pas encore de date. En t'inscrivant sur la liste d'attente, tu reçois un e-mail dès l'ouverture des cours ${c.de}.`],
      ["La liste d'attente est-elle gratuite ?", "Oui. Tu t'inscris gratuitement et tu ne paies rien aujourd'hui."],
      ['Puis-je commencer tout de suite avec une autre langue ?', "Oui, les cours d'anglais et d'allemand sont déjà ouverts et tu peux t'inscrire à tout moment."],
      ['Comment se passent les cours sur Alimun ?', "Ce sont des cours en direct en visio, avec un professeur et toujours le même groupe, à jours fixes et à la même heure chaque semaine. Entre deux cours, tu t'entraînes avec une correction immédiate."],
      ["De quoi ai-je besoin pour suivre les cours ?", "D'un ordinateur ou d'un autre appareil avec caméra, micro et une connexion stable. Les cours se suivent dans le navigateur, sans installer de logiciel."],
    ];
  },
  quiz: {
    title: (c) => `Découvre ton niveau ${c.de}`,
    intro: (c) => `Des phrases à compléter qui deviennent plus difficiles quand tu réponds juste et plus faciles quand tu te trompes, en deux minutes environ. À la fin, tu vois une estimation de ton niveau ${c.de}.`,
    note: (c) => c.open
      ? "C'est une estimation. Après ton inscription, le test complet établit ton niveau et te place dans la bonne classe."
      : `C'est une estimation. À l'ouverture des cours ${c.de}, le test complet établira ton niveau et la classe qui te convient.`,
    cta: (c) => c.open ? "Inscris-toi et passe le test complet" : "Rejoindre la liste d'attente",
    start: 'Commencer le quiz',
    prompt: 'Complète la phrase',
    again: 'Refaire le quiz',
    right1: 'bonne réponse sur',
    rightN: 'bonnes réponses sur',
    levels: LEVELS,
  },
  ui: {
    UI_QUIZ_BTN: 'Découvre ton niveau',
    UI_QUIZ_BTN_LONG: 'Découvre ton niveau en deux minutes',
    UI_HOW_1_T: 'Test de niveau',
    UI_HOW_1_D: 'Un court test établit ton niveau, de A1 à C1, et te place dans la classe qui te convient.',
    UI_HOW_1_A: "Une étudiante devant son ordinateur en train de prendre des notes",
    UI_HOW_2_T: 'Cours en direct',
    UI_HOW_2_A: "Un cours en visio avec deux élèves à l'écran",
    UI_HOW_3_T: 'Devoirs corrigés',
    UI_HOW_3_D: "Ton professeur donne les devoirs et te les rend corrigés : note, points forts, ce qu'il faut améliorer et un exemple de correction.",
    UI_HOW_3_A: 'Un professeur qui corrige des devoirs sur son ordinateur',
    UI_HOW_4_T: "Entraîne-toi quand tu veux",
    UI_HOW_4_D: "Des exercices à ton niveau avec correction immédiate, des cartes mémoire avec le vocabulaire des cours et des épreuves au format des examens.",
    UI_HOW_4_A: "Un étudiant avec un casque qui s'entraîne sur son cahier",
    UI_LV_INTRO: "Le Cadre européen commun de référence (CECR) décrit six niveaux de maîtrise d'une langue. Sur Alimun, il y a des classes pour chaque niveau et le test initial te situe de A1 à C1.",
    UI_LV_1_H: 'A1, niveau débutant', UI_LV_1_P: LEVELS.A1,
    UI_LV_2_H: 'A2, niveau élémentaire', UI_LV_2_P: LEVELS.A2,
    UI_LV_3_H: 'B1, niveau intermédiaire', UI_LV_3_P: LEVELS.B1,
    UI_LV_4_H: 'B2, intermédiaire avancé', UI_LV_4_P: LEVELS.B2,
    UI_LV_5_H: 'C1, niveau avancé', UI_LV_5_P: LEVELS.C1,
    UI_LV_6_H: 'C2, maîtrise', UI_LV_6_P: LEVELS.C2,
    UI_EX_NOTE: "Ce n'est pas du matériel d'examen officiel. Alimun n'est pas affiliée aux organismes certificateurs.",
    UI_PL_TITLE: 'Formules et prix',
    UI_PL_DESC: "Choisis l'attention que tu veux : plus le groupe est petit, plus tu as de temps pour parler. Avec l'abonnement annuel, tu paies dix mois au lieu de douze.",
    UI_PL_MONTH: 'par mois',
    UI_PL_1: "Groupes d'environ 35 personnes, cours en direct et accès à la communauté.",
    UI_PL_2: "Groupes d'environ 17 personnes et un retour chaque semaine sur ton travail.",
    UI_PL_3: "Groupes d'environ 6 personnes et, en plus, un cours individuel chaque semaine.",
    UI_PL_4: 'Cours particuliers avec ton professeur, sur une base de trois cours par semaine.',
    UI_PL_CTA: 'Choisis ta formule',
    UI_FAQ_TITLE: 'Questions fréquentes',
    UI_Q_CLOSE: 'Fermer',
  },
};
