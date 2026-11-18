// Third design (docs/BLOG_PLAN.md). Article for France, same key as ma/niveau-c1-anglais.js and it/livello-c1-inglese.js.
// Checked 18 Nov 2026: certification-cles.fr (CLES = certification d'État du ministère de l'Enseignement supérieur,
// 11 langues, niveaux B1, B2 et C1, ouverte à tous, frais souvent pris en charge par les établissements en formation
// initiale, CPF possible en formation continue, un tiers des établissements publics d'enseignement supérieur accrédités
// centres CLES); francecompetences.fr RS6595 (CLES C1 Anglais: actif, enregistré le 26-04-2024 jusqu'au 26-04-2027,
// scénario en trois étapes, oral avec supports visuels et interaction pour aboutir à des recommandations communes,
// compte rendu structuré et argumenté, sur ordinateur ou papier, durée de validité illimitée, pas de validation
// partielle); cambridgeenglish.org/fr Linguaskill results (200-210 C2, 180-199 C1, 160-179 B2, 140-159 B1, « inférieur
// à B1 » sinon; un score par compétence; résultats en 3 à 5 jours ouvrés en centre, 6 à 8 à distance); conseil-etat.fr
// (décision du 7 juin 2022, n° 441056 et autres: certification d'anglais par un organisme extérieur ne peut conditionner
// BTS, DUT et licence; arrêté maintenu pour la licence professionnelle).
// Reused from ma/niveau-c1-anglais.js (verified 10 Nov 2026): CECRL global scale (coe.int), C1 Advanced format and
// results (180-199 C1, 200-210 C2, 160-179 B2, 142-159 no certificate, no expiry), Cambridge guided learning hours
// (about 200 per level, 700-800 cumulative to C1), IELTS and the CEFR (7-8 = C1, threshold between 6.5 and 7, 8.5+ C2),
// TOEFL iBT 1-6 scale since 21 Jan 2026 (5 and 5.5 = C1; 95-106 and 107+ on 0-120), ETS Global TOEIC L&R mapping
// (C1 minimums 490 L, 455 R, 945 total; not to be applied strictly), free Cambridge sample tests and Test your English,
// IELTS free sample questions. Alimun resources checked in the repo: quiz-anglais-c1 (10 questions) and
// exercice-anglais-c1-inversion (12 questions).
// Left out (not confirmed on an official page today): exam fees in euros, CLES C1 durations for English (only the
// Italian fiche gives them), CTI language requirement for engineering schools, Linguaskill being adaptive.
// Alimun is not affiliated with Cambridge, IELTS, ETS or the CLES.
export default {
  key: 'english-c1-level',
  site: 'fr',
  slug: 'niveau-c1-anglais',
  section: 'levels',
  course: 'English',
  published: '2026-11-18',
  updated: '2026-11-18',
  title: "Niveau C1 en anglais : ce qu'il faut savoir faire et comment le prouver",
  metaTitle: "Niveau C1 anglais : scores IELTS, examens et test gratuit – Alimun",
  desc: "Le niveau C1 en anglais expliqué : descripteurs du CECRL, scores C1 Advanced, IELTS, TOEFL, TOEIC, Linguaskill et CLES, et ce que vaut un test gratuit.",
  lead: "Un master à l'étranger, un poste où l'on travaille en anglais toute la journée, un dossier de mobilité : le C1 revient souvent dans les exigences. Voici **ce que recouvre vraiment ce niveau**, les scores qui le prouvent dans chaque certification disponible en France, et ce qu'un test gratuit en ligne peut vous apprendre.",
  photo: 'english-c1-level-fr-library-reading',
  sticker: { draw: 'croissant', say: "Le C1, c'est quand l'anglais ne vous ralentit plus." },
  facts: [
    { n: 180, text: "le score minimal sur la Cambridge English Scale associé au C1, au C1 Advanced comme au Linguaskill" },
    { label: 'IELTS 7 à 8', text: "les notes que l'IELTS fait correspondre au niveau C1" },
    { n: 200, unit: 'heures', text: "d'apprentissage guidé environ pour passer d'un niveau du CECRL au suivant, selon Cambridge" },
    { n: 945, unit: 'points', text: "le total minimal au TOEIC Listening and Reading associé au C1 dans la table d'ETS" },
  ],
  blocks: [
    { take: { title: 'La réponse courte', text: "Le C1 est le cinquième des six niveaux du CECRL, juste avant la maîtrise complète. À ce niveau, vous lisez et écoutez des contenus longs et difficiles en saisissant **les sous-entendus**, vous parlez sans chercher vos mots et vous écrivez des textes structurés sur des sujets complexes. Pour le prouver, visez **180 à 199** au C1 Advanced ou au Linguaskill, 7 à 8 à l'IELTS, 5 ou 5,5 au TOEFL iBT, ou le CLES C1 si votre université le propose.", draw: 'owl' } },

    { h: 'Le C1 selon le Cadre européen' },
    { p: "Le Cadre européen commun de référence pour les langues, publié par le Conseil de l'Europe, découpe l'apprentissage d'une langue en six niveaux. En France, on les retrouve partout : dans les programmes du lycée, dans les fiches de poste, dans les conditions d'admission des universités. Les deux derniers, C1 et C2, désignent **l'utilisateur expérimenté**. Le C1 est souvent appelé niveau autonome, le C2 niveau de maîtrise." },
    { p: "L'échelle globale du Conseil de l'Europe tient le C1 en quelques phrases. La personne comprend une large gamme de textes longs et exigeants et en perçoit les significations implicites. Elle s'exprime spontanément et couramment, sans avoir trop visiblement à chercher ses mots. Elle utilise la langue de façon souple et efficace pour sa vie sociale, ses études ou sa vie professionnelle. Et elle produit des textes clairs, bien structurés et détaillés sur des sujets complexes, en maîtrisant **les outils d'organisation et d'articulation** du discours." },
    { p: "Rien dans cette description ne parle d'accent ou de perfection. On peut avoir un accent français marqué et être pleinement C1. Ce qui compte, c'est l'efficacité : faire passer une idée nuancée, comprendre ce qui n'est pas dit, adapter son registre. Pour situer le C1 entre ses voisins, voici comment le Conseil de l'Europe décrit les trois niveaux supérieurs." },
    { levels: [
      ['B2', 'Utilisateur indépendant', "Comprend le contenu essentiel de sujets concrets ou abstraits dans un texte complexe, y compris une discussion technique dans sa spécialité. Communique avec un degré de spontanéité et d'aisance qui rend l'échange avec un locuteur natif possible sans tension."],
      ['C1', 'Utilisateur expérimenté', "Comprend des textes longs et exigeants et en saisit l'implicite. S'exprime couramment, sans chercher ses mots, et écrit des textes clairs, structurés et détaillés sur des sujets complexes."],
      ['C2', 'Utilisateur expérimenté', "Comprend sans effort pratiquement tout ce qu'il lit ou entend, restitue des faits et des arguments de sources diverses de façon cohérente, et exprime des nuances fines même sur des sujets complexes."],
    ] },

    { h: 'Ce qui sépare vraiment le B2 du C1' },
    { p: "Beaucoup de Français sortent du lycée ou d'une école de commerce avec un B2 solide, parfois validé par un examen. La marche suivante surprend souvent, parce qu'elle ne consiste pas à apprendre davantage de grammaire. Au B2, vous comprenez le sens général d'un article du Guardian ; au C1, vous percevez aussi l'ironie du chroniqueur et **la position qu'il ne formule pas** franchement. Au B2, vous tenez une conversation ; au C1, vous la menez, vous reformulez, vous désamorcez un désaccord." },
    { p: "ETS, l'organisme qui conçoit le TOEFL, a repris une sélection de descripteurs du CECRL pour illustrer ce qu'un candidat C1 sait faire. À l'écoute, il suit la plupart des cours et des débats, reconnaît de nombreuses expressions idiomatiques et devine l'intention de l'orateur à partir du contexte, même s'il doit parfois faire répéter un détail avec un accent peu familier. À l'écrit, il manie avec souplesse des structures complexes et soigne paragraphes et ponctuation pour guider son lecteur." },
    { figure: { photo: 'english-c1-level-fr-meeting-discussion', alt: "Deux femmes assises à un bureau en bois regardent un ordinateur portable, une tablette et un téléphone posés devant elles", caption: "Au C1, une réunion en anglais ne se subit plus : on y défend ses idées et on nuance celles des autres." } },
    { p: "À l'oral, la différence se sent surtout dans la souplesse. Un candidat C1 ne simplifie plus sa pensée pour la faire entrer dans son anglais. Il peut **exprimer un désaccord avec tact**, moduler son degré de certitude, passer d'un échange détendu à une présentation formelle. C'est précisément ce qu'attendent un jury de master ou un recruteur qui vous demande ce niveau." },
    { p: "Le piège classique, pour un francophone, se trouve à l'écrit. Des années de séries en version originale donnent une excellente compréhension et un vocabulaire riche, mais pas forcément l'habitude de rédiger un rapport ou un essai argumenté en anglais. Les faux amis, les calques de structures françaises et les phrases trop longues trahissent souvent un écrit resté au B2, même quand la compréhension est déjà au C1." },

    { h: 'Les certifications qui attestent le C1' },
    { p: "Aucun examen ne s'appelle tout simplement « C1 ». Chaque certification a sa propre échelle et publie une correspondance avec le CECRL, établie par ses propres études. Ces correspondances sont des repères. L'établissement ou l'employeur qui lit votre résultat reste libre de fixer son exigence, souvent compétence par compétence." },
    { h3: 'Le C1 Advanced de Cambridge' },
    { p: "C'est l'examen pensé spécifiquement pour ce niveau. Il compte quatre épreuves : Reading and Use of English en 1 h 30, Writing en 1 h 30 avec un essai obligatoire puis un second texte au choix, de **220 à 260 mots** chacun, Listening d'environ 40 minutes avec des enregistrements diffusés deux fois, et Speaking de 15 minutes, passé à deux candidats devant deux examinateurs." },
    { p: "Les résultats s'expriment sur la Cambridge English Scale. Entre 180 et 199, vous obtenez un certificat de niveau C1 (mention C jusqu'à 192, mention B à partir de 193). Entre 200 et 210, la mention A vous vaut un certificat de niveau C2. Entre 160 et 179, vous repartez avec un certificat B2, et en dessous de 160, sans certificat. Cambridge précise que ses certificats **n'ont pas de date d'expiration**, même si un établissement peut exiger un résultat récent." },
    { h3: 'L’IELTS' },
    { p: "L'IELTS note de 0 à 9 sur l'ensemble de l'échelle, sans viser un niveau particulier. Ses partenaires font correspondre **les notes de 7 à 8 au niveau C1** et situent le seuil du C1 entre 6,5 et 7. Un candidat à 6,5 peut donc être déjà C1 ou juste en dessous ; c'est pourquoi les universités qui veulent s'assurer du C1 demandent généralement 7. Les notes à partir de 8,5 relèvent du C2, et l'IELTS insiste sur le fait qu'il n'existe pas de conversion exacte, note par note." },
    { h3: 'Le TOEFL iBT' },
    { p: "Depuis le 21 janvier 2026, le TOEFL iBT utilise une échelle de 1 à 6, par demi-points, alignée sur le CECRL. Une note de **5 ou de 5,5** correspond au C1, pour chaque section comme pour le total. Pendant deux ans, les relevés indiquent aussi l'équivalent sur l'ancienne échelle de 0 à 120 : 5 y correspond à 95 à 106 points, et 5,5 à 107 points ou plus." },

    { cta: true },

    { h3: 'Le TOEIC Listening and Reading' },
    { p: "Le TOEIC Listening and Reading ne mesure que la compréhension, sur un total de 10 à 990. La table de correspondance d'ETS Global associe au C1 un minimum de 490 en Listening et de 455 en Reading, soit **945 points au total**. ETS rappelle que ces seuils sont indicatifs, qu'il vaut mieux lire chaque section séparément, et que le seuil de Reading pour le C1 repose sur une partie seulement des experts consultés." },
    { p: "Surtout, un TOEIC Listening and Reading ne dit rien de votre oral ni de votre écrit. Un 950 prouve une excellente compréhension, pas un C1 complet. Si une offre exige le C1 dans toutes les compétences, il faudra un examen qui les évalue toutes." },
    { h3: 'Linguaskill' },
    { p: "Linguaskill est un test de Cambridge que l'on passe en centre ou à distance, en choisissant les compétences à évaluer. Il se note sur la même Cambridge English Scale : **180 à 199 correspond au C1**, 200 à 210 au C2, 160 à 179 au B2 et 140 à 159 au B1 ; en dessous, le relevé indique simplement « inférieur à B1 ». Chaque compétence testée reçoit son propre score et son niveau. Cambridge annonce les résultats en 3 à 5 jours ouvrés pour un test en centre, et en 6 à 8 jours ouvrés pour un test à distance." },
    { h3: 'Le CLES C1, la certification de l’enseignement supérieur' },
    { p: "Le CLES, certificat de compétences en langues de l'enseignement supérieur, est une certification d'État relevant du ministère de l'Enseignement supérieur. Il existe en onze langues et sur trois niveaux, B1, B2 et C1. Selon son site officiel, environ un tiers des établissements publics d'enseignement supérieur sont accrédités comme centres CLES, et tout le monde peut le passer. Pour les étudiants, les frais sont souvent pris en charge en partie ou en totalité par l'établissement ; en formation continue, le compte personnel de formation peut être mobilisé." },
    { p: "Le CLES C1 Anglais, enregistré au répertoire spécifique de France Compétences, ne ressemble à aucun QCM. Il repose sur **un scénario en trois étapes** : une situation réaliste avec une mission, un dossier documentaire à exploiter, puis des tâches finales. À l'oral, vous présentez le dossier en vous appuyant sur des supports visuels, puis vous échangez avec les autres candidats pour aboutir à des recommandations communes. À l'écrit, vous rédigez un compte rendu structuré et argumenté. L'épreuve se passe sur ordinateur ou sur papier, sa durée de validité est illimitée et il n'existe pas de validation partielle." },
    { table: {
      head: ['Certification', 'Résultat associé au C1', 'Compétences évaluées'],
      rows: [
        ['C1 Advanced (Cambridge)', '180 à 199 sur la Cambridge English Scale', 'Les quatre compétences, plus grammaire et vocabulaire'],
        ['Linguaskill (Cambridge)', '180 à 199 sur la Cambridge English Scale, par compétence', 'Selon les modules choisis'],
        ['IELTS', '7 à 8, seuil du C1 entre 6,5 et 7', 'Les quatre compétences'],
        ['TOEFL iBT (depuis janvier 2026)', '5 ou 5,5 sur 6 (95 et plus sur l’ancienne échelle de 120)', 'Les quatre compétences'],
        ['TOEIC Listening and Reading', '945 minimum (490 en Listening, 455 en Reading)', 'Compréhension orale et écrite seulement'],
        ['CLES C1 Anglais', 'Certification délivrée au niveau C1', 'Compréhension, expression orale et écrite, interaction'],
      ],
      note: "Correspondances publiées par Cambridge, l'IELTS, ETS et la certification CLES. Elles servent de repère : vérifiez toujours l'exigence précise de l'établissement ou de l'employeur.",
    } },
    { p: "Un point de droit utile aux étudiants : dans une décision du 7 juin 2022, le Conseil d'État a jugé qu'une certification d'anglais passée auprès d'un organisme extérieur ne pouvait pas conditionner la délivrance du BTS, du DUT ou de la licence. L'arrêté qui l'imposait reste en revanche applicable à **la licence professionnelle**, l'obligation y découlant d'un texte antérieur. Les écoles, les masters sélectifs et les employeurs restent, eux, libres de demander un niveau ou un score dans leurs propres critères." },

    { h: 'Du B2 au C1 : combien de temps compter' },
    { p: "Cambridge raisonne en heures d'apprentissage guidé, c'est-à-dire de cours et de travail encadré. Son estimation : environ **200 heures pour gagner un niveau** du CECRL. En partant de zéro, cela donne au total 500 à 600 heures pour le B2, 700 à 800 heures pour le C1 et 1 000 à 1 200 heures pour le C2. Cambridge présente ces chiffres comme une indication, qui varie selon votre parcours, l'intensité du travail, votre âge et le temps passé au contact de l'anglais hors des cours." },
    { quote: "Environ 200 heures guidées pour passer du B2 au C1." },
    { p: "Concrètement, 200 heures représentent par exemple quatre heures par semaine pendant une cinquantaine de semaines, ou une préparation plus intensive sur six mois. Le chiffre réel dépend surtout de votre profil. Un étudiant qui lit déjà la presse anglophone mais n'a jamais rédigé d'essai a besoin d'un travail très ciblé sur l'écrit ; un cadre qui écrit des e-mails toute la journée mais se tait en visioconférence doit d'abord **libérer son oral**." },
    { p: "Cette étape est souvent vécue comme la plus lente, parce que les progrès se voient moins. On comprend déjà presque tout, et l'effort porte sur la précision, la variété du vocabulaire, les collocations justes et la capacité à structurer un long propos. Mesurer chaque compétence séparément avant de fixer un calendrier évite de perdre des semaines sur ce qui est déjà acquis." },

    { h: 'Test d’anglais C1 gratuit : ce qu’il peut vous dire' },
    { p: "Taper « test anglais C1 gratuit » renvoie vers des dizaines de sites qui promettent votre niveau en dix minutes. La plupart ne disent ni comment le score est calculé, ni sur quoi il repose. Un test en ligne gratuit est **un indicateur, jamais une preuve** : aucun employeur ni aucune université ne l'acceptera, et la plupart ne testent que la grammaire, le vocabulaire et la compréhension. Utilisés correctement, certains restent pourtant très utiles." },
    { h3: 'Les ressources officielles de Cambridge' },
    { p: "Sur la page de préparation du C1 Advanced, Cambridge met gratuitement à disposition des tests d'exemple en ligne pour le Listening, le Reading and Use of English et le Writing, ainsi que des épreuves complètes sur papier avec des exemples de Speaking, les corrigés et la transcription de l'écoute. C'est la meilleure façon de se confronter au **vrai format de l'examen**. Cambridge propose aussi Test your English, un test court et gratuit qui donne une première idée de votre niveau, en précisant qu'il ne s'agit pas d'un examen officiel et que le résultat reste approximatif." },
    { h3: 'Les questions d’exemple de l’IELTS' },
    { p: "Le site officiel de l'IELTS publie gratuitement des questions d'exemple avec leurs réponses, pour l'IELTS Academic comme pour le General Training. Faites-les dans les conditions réelles, chronomètre en main. Si vous visez le C1, vos estimations doivent approcher 7 dans chaque compétence ; gardez en tête que la correction de votre propre essai reste l'exercice le moins fiable." },
    { figure: { photo: 'english-c1-level-fr-newspaper', alt: "Une main tient un smartphone affichant un site d'actualité en anglais, devant un ordinateur portable, une tasse de café et des lunettes de soleil", caption: "Lire chaque jour un article de presse anglophone sans dictionnaire est un bon thermomètre de la compréhension écrite au C1." } },
    { h3: 'Le quiz et l’exercice C1 d’Alimun' },
    { p: "Dans les ressources gratuites d'Alimun, sans inscription, le quiz d'anglais C1 propose dix questions sur des points typiques du niveau : inversion après une expression négative, phrases clivées, collocations avancées, expressions idiomatiques et mots faciles à confondre, chacune avec son explication. Un exercice de douze phrases permet aussi de s'entraîner sur **l'inversion**, une structure que les candidats C1 sont censés manier. Ce sont des entraînements, pas des tests de niveau officiels, et ils ne mesurent ni l'oral ni l'écrit." },
    { h3: 'Ce qu’aucun test en ligne ne remplace' },
    { p: "Votre expression orale et écrite a besoin d'un retour humain. Enregistrez-vous pendant deux minutes sur un sujet d'actualité, puis réécoutez : cherchez-vous vos mots, répétez-vous toujours les mêmes connecteurs, évitez-vous les idées complexes ? Faites corriger un essai par quelqu'un qui connaît les critères du C1. C'est souvent là que se trouve **l'écart qui reste à combler**." },
    { note: { title: 'Préparer le C1 avec Alimun', text: "Chez Alimun, vous suivez des cours d'anglais en direct avec un professeur, en petit groupe, et votre professeur corrige vos devoirs. Le test de niveau gratuit vous indique par où commencer. Alimun n'est affilié ni à Cambridge, ni à l'IELTS, ni à ETS, ni au CLES.", draw: 'teacup' } },

    { h: 'Quelle certification choisir pour prouver votre C1 ?' },
    { p: "Tout dépend de qui lira le résultat : commencez par regarder quels examens l'université, l'école ou l'employeur accepte, puis choisissez parmi eux celui dont le format vous convient. Pour un dossier qui doit durer, le C1 Advanced a l'avantage d'un certificat sans date d'expiration, à condition d'être sûr de votre niveau. Si vous êtes étudiant dans un établissement centre CLES, le CLES C1 est une certification d'État dont les frais sont souvent pris en charge par l'établissement." },
    { p: "Si vos tests d'exemple vous placent encore au B2, ne forcez pas. Au C1 Advanced, un score entre 160 et 179 ne donne qu'un certificat B2. À l'inverse, Cambridge indique qu'un score de 180 à 190 au **B2 First** donne un certificat de niveau C1 : pour un profil à la frontière, c'est parfois le pari le plus sûr." },
    { p: "Dans tous les cas, lisez attentivement l'exigence exacte. Une école peut demander un IELTS de 7 avec au moins 6,5 dans chaque compétence, une autre un TOEFL de 5 par section, un employeur un TOEIC de 945. Avant de vous inscrire, vérifiez les dates, le format et le tarif sur le site officiel de l'examen et auprès du centre d'examen, car **ils changent régulièrement**." },
  ],
  quiz: [
    { q: "Dans le CECRL, à quel groupe appartient le niveau C1 ?", options: ["Utilisateur élémentaire", "Utilisateur indépendant", "Utilisateur expérimenté", "Utilisateur débutant"], a: 2, why: "C1 et C2 forment le groupe des utilisateurs expérimentés. B1 et B2 sont les utilisateurs indépendants." },
    { q: "Qu'est-ce qui distingue surtout la compréhension au C1 de celle du B2 ?", options: ["Comprendre des phrases courtes", "Saisir l'implicite de textes longs et exigeants", "Comprendre sans aucun effort absolument tout", "Comprendre uniquement l'anglais britannique"], a: 1, why: "Au C1, on comprend des textes longs et exigeants et on en perçoit les significations implicites. Comprendre sans effort pratiquement tout relève du C2." },
    { q: "Quel score Linguaskill correspond au C1 ?", options: ["140 à 159", "160 à 179", "180 à 199", "200 à 210"], a: 2, why: "Linguaskill utilise la Cambridge English Scale : 180 à 199 correspond au C1, 200 à 210 au C2." },
    { q: "Quelles notes l'IELTS fait-il correspondre au C1 ?", options: ["5,5 à 6,5", "7 à 8", "8,5 à 9", "6 seulement"], a: 1, why: "L'IELTS associe les notes de 7 à 8 au C1 et place le seuil du C1 entre 6,5 et 7." },
    { q: "Que mesure le TOEIC Listening and Reading ?", options: ["Les quatre compétences", "Seulement l'oral", "La compréhension orale et écrite seulement", "L'écrit et l'oral seulement"], a: 2, why: "Il ne teste que la compréhension. Un bon score ne prouve donc ni l'expression orale ni l'expression écrite." },
    { q: "Combien d'heures d'apprentissage guidé Cambridge estime-t-il pour gagner un niveau ?", options: ["Environ 50", "Environ 200", "Environ 500", "Environ 1 000"], a: 1, why: "Cambridge compte environ 200 heures guidées par niveau, et 700 à 800 heures au total pour atteindre le C1 depuis zéro." },
    { q: "Quel est l'un des traits du CLES C1 Anglais ?", options: ["C'est un QCM en ligne de dix minutes", "Il se passe uniquement à l'étranger", "Il repose sur un scénario avec une mission, un dossier et des tâches finales", "Il expire au bout de deux ans"], a: 2, why: "Le CLES C1 suit un scénario en trois étapes ; sa durée de validité est illimitée." },
    { q: "Que vaut un test d'anglais C1 gratuit en ligne ?", options: ["Il remplace un examen officiel", "C'est un indicateur, pas une preuve de niveau", "Il délivre un certificat C1", "Il évalue toujours l'oral"], a: 1, why: "Les tests gratuits donnent une estimation, surtout en grammaire, vocabulaire et compréhension. Aucun ne délivre de certificat." },
  ],
  faq: [
    ["Où faire un test d'anglais C1 gratuit et fiable ?", "Commencez par les ressources officielles : les tests d'exemple gratuits du C1 Advanced et le test court Test your English sur le site de Cambridge English, et les questions d'exemple sur le site de l'IELTS. Alimun propose aussi un quiz C1 gratuit de dix questions, sans inscription. Aucun de ces tests ne délivre de certificat."],
    ["Quel score IELTS pour le niveau C1 ?", "L'IELTS fait correspondre les notes de 7 à 8 au C1 et situe le seuil entre 6,5 et 7. Pour être sûr de prouver le C1, visez 7. À partir de 8,5, on parle de C2."],
    ["Quel score TOEIC correspond au niveau C1 ?", "La table d'ETS associe au C1 un minimum de 490 en Listening et 455 en Reading, soit 945 au total. ETS conseille de ne pas appliquer ces seuils de façon stricte, et le TOEIC Listening and Reading n'évalue ni l'oral ni l'écrit."],
    ["Qu'est-ce que le CLES C1 ?", "C'est le niveau le plus élevé du certificat de compétences en langues de l'enseignement supérieur, une certification d'État du ministère de l'Enseignement supérieur. Il se passe dans un centre CLES accrédité, sous forme de scénario avec un oral et un écrit, et sa validité est illimitée."],
    ["Combien de temps pour passer du B2 au C1 ?", "Cambridge estime qu'il faut environ 200 heures d'apprentissage guidé pour passer d'un niveau au suivant. C'est une indication : votre point de départ dans chaque compétence et votre pratique hors des cours font varier ce chiffre."],
  ],
  related: ['cefr-english', 'ielts-band-scores', 'b2-first', 'ielts-or-cambridge', 'how-long-english'],
  sources: [
    ["CECRL : échelle globale des niveaux communs de référence (Conseil de l'Europe)", 'https://www.coe.int/en/web/common-european-framework-reference-languages/table-1-cefr-3.3-common-reference-levels-global-scale'],
    ['C1 Advanced (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/'],
    ['C1 Advanced exam format (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/format/'],
    ['Cambridge English Qualifications results (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/results'],
    ['C1 Advanced preparation and sample tests (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/preparation/'],
    ['Test your English (Cambridge English)', 'https://www.cambridgeenglish.org/test-your-english/'],
    ['Guided learning hours (Cambridge English Support)', 'https://support.cambridgeenglish.org/hc/en-gb/articles/202838506-Guided-learning-hours'],
    ['Résultats Linguaskill (Cambridge English)', 'https://www.cambridgeenglish.org/fr/exams-and-tests/linguaskill/results'],
    ['IELTS and the CEFR (IELTS)', 'https://ielts.org/organisations/ielts-for-organisations/compare-ielts/ielts-and-the-cefr'],
    ['Everything you need to know about IELTS and the CEFR (IELTS)', 'https://ielts.org/news-and-insights/everything-you-need-to-know-about-ielts-and-the-cefr'],
    ['IELTS sample test questions (IELTS)', 'https://ielts.org/take-a-test/preparation-resources/sample-test-questions'],
    ['TOEFL iBT score scale update (ETS)', 'https://www.ets.org/toefl/institutions/ibt/score-scale-update.html'],
    ['Mapping table: TOEIC Listening and Reading scores and the CEFR (ETS Global)', 'https://www.eu.ets.org/content/dam/ets-org/eu/pdfs/toeic/mapping-cefr-toeic-listening-reading-test.pdf'],
    ['Certification CLES (ministère de l’Enseignement supérieur)', 'https://www.certification-cles.fr/'],
    ['CLES C1 Anglais, fiche RS6595 (France Compétences)', 'https://www.francecompetences.fr/recherche/rs/6595'],
    ["BTS, DUT, licence : une certification en anglais par un organisme extérieur ne peut être demandée (Conseil d'État)", 'https://www.conseil-etat.fr/actualites/bts-dut-licence-une-certification-en-anglais-par-un-organisme-exterieur-ne-peut-etre-demandee-pour-obtenir-ces-diplomes'],
    ["Quiz d'anglais C1 gratuit (Alimun)", 'https://alimun.com/fr/ressources/quiz-anglais-c1'],
    ["Exercice d'anglais C1 : l'inversion (Alimun)", 'https://alimun.com/fr/ressources/exercice-anglais-c1-inversion'],
  ],
};
