// Third design (docs/BLOG_PLAN.md). Facts checked 17 Nov 2026 against cambridgeenglish.org: the results pages of
// A2 Key, B1 Preliminary, B2 First, C1 Advanced and C2 Proficiency (Cambridge English Scale ranges, grades, CEFR
// levels, "Your Cambridge English certificate does not expire", recognising organisations set their own limits,
// result and certificate timings for digital and paper exams, Online Results Service and online verification),
// the format pages of the five exams (papers and durations, "the same for both the digital and paper-based exams"),
// the A2 Key and B2 First pages (for Schools tailored to school-age learners, same CEFR level and format; paper-based
// A2 Key withdrawn after the last session in December 2026, still available digitally; A2 Key for Schools stays in
// both formats) and the official "Find an exam centre" tool searched for Morocco on 17 Nov 2026 (six centres:
// Calliope, BPEC Casablanca and Elbilia Language Link in Casablanca, British Council in Rabat, The British Language
// Centre - SIST in Tangier, Universal SUP in Beni Mellal, with the exams each lists; no centre based in Marrakech;
// centres may run exams in other locations; over 2,800 centres in 130 countries).
// britishcouncil.ma Cambridge page: candidates from all of Morocco accepted, paper tests at its Casablanca and Rabat
// offices, minimum 10 candidates per date; the dates and fees shown there are from 2021-2023, so no Cambridge date
// or fee is given. britishcouncil.ma IELTS page (17 Nov 2026): IELTS on computer in 8 cities including Marrakech,
// IELTS Academic and General Training at 3080 MAD, IELTS for UKVI at 3310 MAD. Amideast Morocco TOEIC page shows no
// fee, so none is given. Centre contact names, phone numbers and e-mails are not reproduced. Alimun is not affiliated
// with Cambridge University Press & Assessment or any exam centre.
export default {
  key: 'cambridge-exams-morocco',
  site: 'ma',
  slug: 'examens-cambridge-english-au-maroc',
  section: 'exams',
  course: 'English',
  published: '2026-11-17',
  updated: '2026-11-17',
  title: 'Examens Cambridge English au Maroc : B2 First, C1 Advanced, centres et inscription',
  metaTitle: 'Examens Cambridge English au Maroc : B2, C1 et centres – Alimun',
  desc: "A2 Key, B1 Preliminary, B2 First, C1 Advanced, C2 Proficiency : niveaux, scores, papier ou ordinateur, centres agréés au Maroc et solution pour Marrakech.",
  lead: "Le B2 First et le C1 Advanced sont les examens Cambridge que l'on demande le plus au Maroc, pour un CV, une école ou des études à l'étranger. Voici ce que chaque examen certifie, comment il se passe et **où le passer au Maroc**, d'après les sources officielles consultées le 17 novembre 2026.",
  photo: 'cambridge-exams-morocco-reading-book',
  sticker: { draw: 'cat', say: "Un niveau, un examen, un certificat qui ne périme pas." },
  facts: [
    { n: 5, unit: 'examens', text: "pour adultes, de l'A2 Key au C2 Proficiency, un par niveau du Cadre européen" },
    { n: 6, unit: 'centres', text: "agréés au Maroc dans l'outil officiel de Cambridge le 17 novembre 2026" },
    { n: 10, unit: 'candidats', text: "au minimum pour qu'une session Cambridge ait lieu au British Council Maroc" },
    { label: "Pas d'expiration", text: "pour un certificat Cambridge, même si chaque organisme fixe sa propre règle" },
  ],
  blocks: [
    { take: { title: 'La réponse courte', text: "Cambridge propose **un examen par niveau** : A2 Key, B1 Preliminary, B2 First, C1 Advanced et C2 Proficiency. Choisissez celui du niveau que vous avez déjà, car le certificat atteste ce niveau et **n'expire pas**. Au Maroc, l'outil officiel de Cambridge liste six centres agréés, à Casablanca, Rabat, Tanger et Beni Mellal, mais aucun basé à Marrakech : si vous habitez Marrakech, demandez directement aux centres où se tiendra votre session.", draw: 'dog' } },

    { h: "Cinq examens, cinq niveaux" },
    { p: "Les examens Cambridge English ne fonctionnent pas comme le TOEIC ou l'IELTS. Au lieu d'un test unique noté sur une échelle complète, Cambridge propose **un examen pour chaque niveau** du Cadre européen commun de référence (CECR). Vous choisissez votre niveau cible, vous passez l'examen correspondant, et si vous réussissez, vous recevez un certificat qui atteste ce niveau." },
    { p: "L'A2 Key correspond au niveau A2, le B1 Preliminary au B1, le B2 First au B2, le C1 Advanced au C1 et le C2 Proficiency au C2. Beaucoup de Marocains les connaissent encore sous leurs anciens noms : le KET, le PET, le FCE, ou « First Certificate », le CAE et le CPE. Le British Council Maroc utilise d'ailleurs toujours ces sigles sur sa page. Quand une école ou un employeur parle du « First Certificate », il s'agit **du B2 First**." },
    { p: "Les trois premiers niveaux existent aussi en version « for Schools » : A2 Key for Schools, B1 Preliminary for Schools et B2 First for Schools. Cambridge précise que ces versions sont adaptées aux centres d'intérêt et à l'expérience des élèves, tandis que la version standard s'adresse aux adultes. Le niveau et le format sont les mêmes, et Cambridge parle de **la même qualification**. Pour un lycéen, la version for Schools est donc un choix naturel ; pour un étudiant ou un salarié, la version standard." },
    { levels: [
      ['A2', 'A2 Key', "Le niveau de base : comprendre et utiliser des phrases simples du quotidien. Existe en version for Schools."],
      ['B1', 'B1 Preliminary', "L'anglais pratique de tous les jours, au travail, en voyage, pendant les études. Existe en version for Schools."],
      ['B2', 'B2 First', "Le niveau souvent demandé pour étudier ou travailler en anglais. Existe en version for Schools."],
      ['C1', 'C1 Advanced', "Un anglais avancé, pour des études supérieures exigeantes ou un poste à responsabilités."],
      ['C2', 'C2 Proficiency', "Le niveau le plus élevé de la gamme, proche d'une maîtrise complète de la langue."],
    ] },

    { h: "La Cambridge English Scale : comment vous êtes noté" },
    { p: "Chaque examen donne un score sur **la Cambridge English Scale**, une échelle commune à toute la gamme. Selon votre score, vous obtenez une mention (A, B ou C) au niveau visé, un certificat au niveau inférieur, ou seulement un relevé de résultats. Un score très élevé peut même vous valoir **un certificat du niveau supérieur**." },
    { p: "Prenons le B2 First, l'examen le plus recherché. D'après Cambridge, un score de 160 à 172 donne la mention C et un certificat B2, de 173 à 179 la mention B, toujours en B2. De 180 à 190, vous obtenez la mention A et un certificat de niveau C1. Entre 140 et 159, vous recevez un certificat B1. En dessous, de 122 à 139, le score figure sur le relevé de résultats, mais sans certificat." },
    { p: "Pour le C1 Advanced, la mention C correspond à 180–192 et la mention B à 193–199, en C1. Avec 200 à 210, vous obtenez la mention A et un certificat C2. Un score de 160 à 179 donne un certificat B2. Pour viser directement le C2, l'examen conçu pour ce niveau reste **le C2 Proficiency**, noté de 200 à 230 pour les mentions." },
    { table: {
      head: ['Examen', 'Niveau visé', 'Mentions A, B, C', 'Certificat du niveau supérieur (mention A)', 'Certificat du niveau inférieur'],
      rows: [
        ['A2 Key', 'A2', '120 à 150', 'B1 avec 140 à 150', 'A1 avec 100 à 119'],
        ['B1 Preliminary', 'B1', '140 à 170', 'B2 avec 160 à 170', 'A2 avec 120 à 139'],
        ['B2 First', 'B2', '160 à 190', 'C1 avec 180 à 190', 'B1 avec 140 à 159'],
        ['C1 Advanced', 'C1', '180 à 210', 'C2 avec 200 à 210', 'B2 avec 160 à 179'],
        ['C2 Proficiency', 'C2', '200 à 230', 'Aucun, C2 est le plus haut', 'C1 avec 180 à 199'],
      ],
      note: "Scores de la Cambridge English Scale publiés sur cambridgeenglish.org, identiques pour les versions for Schools. En dessous de ces plages, le score figure sur le relevé de résultats sans certificat.",
    } },
    { p: "Le relevé de résultats indique aussi un score pour chaque épreuve. C'est utile si vous échouez de peu : vous voyez **quelle compétence vous a coûté le niveau**, et vous savez sur quoi travailler avant de repasser l'examen." },

    { h: "Comment se déroule chaque examen" },
    { p: "Tous les examens Cambridge évaluent les quatre compétences. À partir du B2 First, la lecture est couplée à une épreuve de grammaire et de vocabulaire, le Reading and Use of English. L'oral se passe en général **en binôme avec un autre candidat**, devant deux examinateurs, et votre capacité à échanger avec votre partenaire compte." },
    { table: {
      head: ['Examen', 'Écrit', 'Listening', 'Speaking (par binôme)'],
      rows: [
        ['A2 Key', 'Reading and Writing : 1 h', '30 min', '8 à 10 min'],
        ['B1 Preliminary', 'Reading : 45 min ; Writing : 45 min', '30 min', '10 à 12 min'],
        ['B2 First', 'Reading and Use of English : 1 h 15 ; Writing : 1 h 20', 'Environ 40 min', '14 min'],
        ['C1 Advanced', 'Reading and Use of English : 1 h 30 ; Writing : 1 h 30', 'Environ 40 min', '15 min'],
        ['C2 Proficiency', 'Reading and Use of English : 1 h 30 ; Writing : 1 h 30', 'Environ 40 min', '16 min'],
      ],
      note: "Durées publiées par Cambridge English. L'oral dure un peu plus quand les candidats passent à trois. Le Listening de l'A2 Key et du B1 Preliminary inclut le temps de report des réponses.",
    } },
    { p: "Au B2 First, le Reading and Use of English compte 52 questions en sept parties et pèse 40 % de la note. Au Writing, vous rédigez deux textes : le premier est imposé, le second se choisit parmi plusieurs sujets. La seule différence de format entre le B2 First et le B2 First for Schools se trouve là : la version for Schools propose une histoire, la version adulte un rapport." },
    { p: "Au C1 Advanced, le Reading and Use of English passe à 56 questions en huit parties, et les textes sont plus longs et plus denses. Comptez au total **près de quatre heures d'épreuves** écrites et orales. L'oral peut avoir lieu un autre jour que l'écrit, car le centre fixe sa date dans une fenêtre définie par Cambridge." },
    { figure: { photo: 'cambridge-exams-morocco-study-desk', alt: "Un bureau en noir et blanc avec un clavier, un stylo, un téléphone et un livre ouvert", caption: "Préparer un examen Cambridge, c'est travailler le niveau d'abord, puis le format de chaque épreuve." } },

    { h: "Sur papier ou sur ordinateur" },
    { p: "Chaque examen existe en deux formats. Cambridge précise que **le format est le même** sur papier et sur ordinateur : mêmes épreuves, mêmes durées, même certificat. Dans l'outil de recherche de centres, un examen suivi du mot « Digital » se passe sur ordinateur, dans le centre ou un lieu convenu ; sans ce mot, il se passe sur papier." },
    { p: "La vraie différence, c'est **le délai des résultats**. Pour un examen sur ordinateur, le relevé de résultats arrive en ligne 5 à 10 jours ouvrés après la session, et le certificat papier parvient au centre en trois à quatre semaines. Pour un examen sur papier, le relevé arrive en général après quatre à six semaines, et le certificat sept à dix semaines après l'examen. Si vous avez une date limite de dossier, la version sur ordinateur peut faire la différence." },
    { p: "Une nouveauté à connaître : Cambridge annonce que l'A2 Key sur papier sera retiré après la dernière session de décembre 2026. Il restera disponible sur ordinateur, et l'A2 Key for Schools continuera dans les deux formats." },
    { p: "Une fois vos résultats publiés, vous les consultez gratuitement sur le service de résultats en ligne de Cambridge, avec les identifiants fournis par votre centre. Les employeurs et les universités peuvent **vérifier un résultat en ligne** avec votre numéro de référence et votre date de naissance, ce qui évite d'envoyer des copies du certificat." },

    { h: "Un certificat qui n'expire pas" },
    { p: "C'est le principal avantage de Cambridge face à ses concurrents. Sur chaque page de résultats, Cambridge l'écrit clairement : **votre certificat n'expire pas**. Un B2 First obtenu au lycée reste un B2 First dix ans plus tard. Les résultats du TOEIC, de l'IELTS et du TOEFL, eux, sont en général considérés comme valables deux ans." },
    { p: "Mais attention à la nuance que Cambridge ajoute aussitôt : les universités, les écoles et les employeurs fixent **leur propre durée d'acceptation**. Une université peut très bien exiger un résultat de moins de deux ans, même pour un certificat Cambridge. Si votre certificat date de plusieurs années et qu'il sert à une admission, vérifiez la règle de l'établissement avant de compter dessus." },
    { quote: "Le certificat ne périme pas, mais l'organisme qui le lit peut fixer sa propre limite." },

    { cta: true },

    { h: "Où passer un examen Cambridge au Maroc" },
    { p: "Pour vous inscrire, vous passez par un centre d'examen agréé par Cambridge. Cambridge en compte plus de 2 800 dans 130 pays, et les liste dans son outil officiel « Find an exam centre ». Le 17 novembre 2026, cet outil affichait **six centres au Maroc**, répartis dans quatre régions : Casablanca-Settat, Rabat-Salé-Kénitra, Tanger-Tétouan-Al Hoceima et Beni Mellal." },
    { table: {
      head: ['Centre', 'Ville', 'Examens pour adultes listés'],
      rows: [
        ['British Council, Morocco', 'Rabat', 'A2 Key à C2 Proficiency, sur papier et sur ordinateur'],
        ['BPEC Casablanca', 'Casablanca', 'A2 Key et B1 Preliminary sur papier ; B2 First, C1 Advanced et C2 Proficiency sur papier et sur ordinateur'],
        ['Elbilia Language Link', 'Casablanca', 'A2 Key à C2 Proficiency, sur papier et sur ordinateur'],
        ['Calliope', 'Casablanca', 'A2 Key à C1 Advanced, sur papier et sur ordinateur (pas de C2 Proficiency listé)'],
        ['Universal SUP', 'Beni Mellal', 'A2 Key à C1 Advanced sur papier et sur ordinateur ; C2 Proficiency sur papier'],
        ['The British Language Centre - SIST', 'Tanger', 'Uniquement les examens pour enfants (Starters, Movers, Flyers)'],
      ],
      note: "D'après l'outil « Find an exam centre » de Cambridge English, consulté le 17 novembre 2026. La liste et les examens proposés peuvent changer : vérifiez dans l'outil avant de vous inscrire.",
    } },
    { p: "Chaque fiche de l'outil donne l'adresse du centre, un contact et, souvent, un lien vers son site. Cambridge rappelle que c'est **le centre qui vous indique** comment réserver, quelles dates il propose et s'il organise des cours de préparation. Les dates, les délais d'inscription et les tarifs dépendent donc du centre." },
    { h3: "Le British Council Maroc" },
    { p: "Le British Council indique accepter les inscriptions de candidats de tout le Maroc. Les épreuves sur papier se déroulent dans ses locaux de Casablanca et de Rabat, et une session n'a lieu que si **au moins 10 candidats** sont inscrits à la date. La date de l'oral est fixée par le centre, dans la fenêtre définie par Cambridge." },
    { p: "Le 17 novembre 2026, sa page « dates, fees and locations » affichait encore des sessions et des tarifs de 2021 à 2023. Nous ne les reprenons donc pas ici : **demandez les dates et le tarif actuels** directement au British Council avant de vous inscrire, et faites-vous confirmer que la session aura bien lieu." },
    { h3: "Le prix d'un examen Cambridge au Maroc" },
    { p: "Aucun des centres consultés ne publiait, à cette date, un tarif à jour pour le B2 First ou le C1 Advanced sur une page officielle. Le prix dépend du centre, de l'examen et parfois du format. Le plus simple est d'écrire à deux ou trois centres en précisant l'examen exact, le format souhaité et la période visée : vous comparerez les tarifs et les dates d'un coup." },

    { h: "Examen Cambridge à Marrakech : vos options" },
    { p: "C'est une question que beaucoup de candidats se posent : **peut-on passer un examen Cambridge à Marrakech ?** Le 17 novembre 2026, l'outil officiel de Cambridge ne listait aucun centre basé à Marrakech, ni dans la région Marrakech-Safi. Les centres les plus proches sont à Casablanca et à Beni Mellal." },
    { p: "Cela ne veut pas dire qu'aucune session n'est possible sur place. Cambridge précise que **ses centres peuvent organiser des examens ailleurs** que dans leur ville, et conseille de toujours demander au centre où se trouve la salle d'examen. Le British Council, de son côté, accepte les candidats de tout le pays. Si vous habitez Marrakech, contactez les centres de Casablanca et demandez s'ils prévoient une session dans votre ville ; sinon, prévoyez le déplacement, en tenant compte de l'oral, qui peut tomber un autre jour que l'écrit." },
    { p: "Si l'organisme qui lira votre résultat accepte aussi l'IELTS, sachez que le British Council fait passer **l'IELTS sur ordinateur à Marrakech**, comme à Casablanca, Rabat, Agadir, Fès, Oujda, Tanger et Tétouan. Sur sa page officielle, l'IELTS Academic et l'IELTS General Training étaient affichés à 3 080 dirhams le 17 novembre 2026, et l'IELTS for UKVI à 3 310 dirhams. Ces tarifs peuvent changer : vérifiez au moment de réserver." },
    { figure: { photo: 'cambridge-exams-morocco-desert-road', alt: "Une route droite qui traverse une plaine aride vers des montagnes, sous un ciel bleu", caption: "Depuis Marrakech, il faut souvent prévoir le trajet vers un centre, parfois sur deux jours pour l'écrit et l'oral." } },

    { h: "Cambridge, IELTS ou TOEIC : comment choisir" },
    { p: "Si personne ne vous impose de test, Cambridge est le choix le plus durable pour un CV, grâce à son certificat sans date d'expiration. Mais quand une école, une université ou un service d'immigration exige un test précis, c'est **son exigence qui décide**. Pour Entrée express au Canada, par exemple, la liste officielle cite le CELPIP-General, l'IELTS General Training et le PTE Core, mais aucun examen Cambridge." },
    { p: "Le TOEIC Listening and Reading mesure l'anglais professionnel sur 990 points et vaut deux ans ; au Maroc, Amideast l'organise à Rabat et à Casablanca, mais sa page ne publiait pas de tarif le 17 novembre 2026 : demandez-le directement. L'IELTS se passe dans huit villes, Marrakech comprise, avec des résultats en un à deux jours. Nous comparons ces tests en détail dans notre article « TOEIC, IELTS, TOEFL ou Cambridge : quel test d'anglais passer au Maroc ? »." },
    { table: {
      head: ['', 'Examens Cambridge', 'IELTS (British Council)', 'TOEIC (Amideast)'],
      rows: [
        ['Résultat', 'Certificat de niveau et score sur la Cambridge English Scale', 'Note de 0 à 9', 'Score de 10 à 990'],
        ['Validité', "N'expire pas (sauf règle de l'organisme)", 'En général deux ans', 'Deux ans'],
        ['Villes au Maroc', 'Casablanca, Rabat, Beni Mellal (Tanger pour les enfants)', '8 villes, dont Marrakech', 'Rabat et Casablanca'],
        ['Prix affiché le 17 nov. 2026', 'Non publié à jour, à demander au centre', '3 080 MAD (Academic ou General Training)', 'Non publié, à demander'],
      ],
      note: "Sources : Cambridge English, British Council Maroc et Amideast Maroc, consultés le 17 novembre 2026.",
    } },

    { h: "Bien choisir son niveau et s'inscrire" },
    { p: "La règle d'or est simple : **visez le niveau que vous avez déjà**, pas celui que vous espérez. Un B2 First réussi avec la mention A vous donne un certificat C1 ; un C1 Advanced manqué de peu vous donne au mieux un certificat B2. Si vous hésitez entre deux niveaux, faites un examen blanc complet de chacun et comparez." },
    { p: "Côté calendrier, partez de votre date limite et remontez le temps. Comptez les délais de résultats selon le format, la date limite d'inscription du centre, et le risque qu'une session soit annulée faute d'inscrits. Inscrivez-vous tôt, demandez une confirmation écrite de la session et gardez précieusement **la confirmation d'inscription** : c'est elle qui donne la date finale de publication de vos résultats." },
    { p: "Pour la préparation, le travail se fait en deux temps. D'abord le niveau lui-même, en grammaire, en vocabulaire et à l'oral ; ensuite le format, pour que rien ne vous surprenne le jour J. Entraînez-vous surtout au Reading and Use of English, qui pèse lourd, et à l'oral en binôme, où il faut savoir réagir à ce que dit votre partenaire." },
    { note: { title: "Se préparer avec Alimun", text: "Chez Alimun, vous suivez des cours d'anglais en direct avec un professeur, en petit groupe, et vous pouvez travailler les formats du B2 First et du C1 Advanced. Alimun n'est pas un centre d'examen et n'est pas affilié à Cambridge. Pour savoir quel examen viser, le test de niveau vous situe de A1 à C2 en quelques minutes.", draw: 'mug' } },
    { figure: { photo: 'cambridge-exams-morocco-dictionary-page', alt: "Une page de dictionnaire bilingue en gros plan, avec l'entrée focus mise au point", caption: "Le vocabulaire précis fait souvent la différence au Reading and Use of English, du B2 First au C2 Proficiency." } },
  ],
  quiz: [
    { q: 'Quel examen Cambridge correspond au niveau B2 ?', options: ['A2 Key', 'B1 Preliminary', 'B2 First', 'C1 Advanced'], a: 2, why: "Le B2 First, autrefois appelé First Certificate in English (FCE), vise le niveau B2 du Cadre européen." },
    { q: 'Avec quel score au B2 First obtient-on un certificat de niveau C1 ?', options: ['De 140 à 159', 'De 160 à 172', 'De 173 à 179', 'De 180 à 190'], a: 3, why: "De 180 à 190, la mention A donne un certificat C1." },
    { q: "Combien de temps un certificat Cambridge reste-t-il valable selon Cambridge ?", options: ['Deux ans', 'Cinq ans', 'Dix ans', "Il n'expire pas"], a: 3, why: "Cambridge indique que le certificat n'expire pas, même si chaque organisme peut fixer sa propre durée d'acceptation." },
    { q: "Dans quel délai arrive le relevé de résultats d'un examen sur ordinateur ?", options: ['1 à 2 jours', '5 à 10 jours ouvrés', '4 à 6 semaines', '7 à 10 semaines'], a: 1, why: "Pour un examen sur ordinateur, le relevé arrive 5 à 10 jours ouvrés après la session ; sur papier, en général 4 à 6 semaines." },
    { q: "Combien de centres Cambridge l'outil officiel listait-il au Maroc le 17 novembre 2026 ?", options: ['Deux', 'Quatre', 'Six', 'Huit'], a: 2, why: "Six centres : trois à Casablanca, un à Rabat, un à Tanger et un à Beni Mellal." },
    { q: "Combien de candidats faut-il au minimum pour une session Cambridge au British Council Maroc ?", options: ['3', '5', '10', '20'], a: 2, why: "Le British Council indique qu'un examen n'a lieu qu'avec au moins 10 candidats inscrits à la date." },
    { q: "Que deviendra l'A2 Key sur papier après décembre 2026 ?", options: ["Il sera remplacé par le B1 Preliminary", "Il sera retiré, mais restera disponible sur ordinateur", "Il deviendra réservé aux écoles", "Rien ne change"], a: 1, why: "Cambridge retire l'A2 Key sur papier après la dernière session de décembre 2026 ; il reste disponible sur ordinateur." },
    { q: 'Quelle est la différence entre le B2 First et le B2 First for Schools ?', options: ['Le niveau', 'Le certificat', 'Des contenus adaptés aux élèves, au même niveau et au même format', 'La version for Schools est plus courte'], a: 2, why: "Cambridge précise que les deux sont au même niveau et suivent le même format ; la version for Schools est adaptée aux élèves." },
  ],
  faq: [
    ["Peut-on passer un examen Cambridge à Marrakech ?", "Le 17 novembre 2026, l'outil officiel de Cambridge ne listait aucun centre basé à Marrakech. Les centres peuvent toutefois organiser des examens dans d'autres villes : demandez aux centres de Casablanca s'ils prévoient une session à Marrakech, sinon prévoyez le déplacement. L'IELTS, lui, se passe sur ordinateur à Marrakech avec le British Council."],
    ["Combien coûte le B2 First au Maroc ?", "Aucun tarif à jour n'était publié sur les pages officielles consultées le 17 novembre 2026. Le prix dépend du centre et du format : demandez-le au British Council ou à un autre centre agréé trouvé avec l'outil de Cambridge."],
    ["Le First Certificate et le B2 First, c'est le même examen ?", "Oui. Le First Certificate in English (FCE) est l'ancien nom du B2 First. De la même façon, le CAE est devenu le C1 Advanced et le CPE le C2 Proficiency."],
    ["Faut-il choisir le B2 First ou le C1 Advanced ?", "Choisissez le niveau que vous avez déjà. Au B2 First, un score de 180 à 190 donne un certificat C1 ; au C1 Advanced, un score de 160 à 179 ne donne qu'un certificat B2. Un test de niveau ou un examen blanc vous aide à décider."],
    ["Un certificat Cambridge ancien est-il encore accepté ?", "Le certificat n'expire pas, mais chaque université, école ou employeur fixe sa propre règle. Certains demandent un résultat récent : vérifiez leur page d'admission ou leur offre d'emploi."],
  ],
  related: ['english-test-prices-morocco', 'moroccan-english-exams', 'english-c1-level'],
  sources: [
    ['Find an exam centre (Cambridge English)', 'https://www.cambridgeenglish.org/find-a-centre/find-an-exam-centre/'],
    ['Results for Cambridge English Qualifications', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/results/'],
    ['A2 Key results (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/key/results/'],
    ['B1 Preliminary results (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/preliminary/results/'],
    ['B2 First results (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/first/results/'],
    ['C2 Proficiency results (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/proficiency/results/'],
    ['A2 Key for Schools and A2 Key (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/'],
    ['A2 Key format (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/key/format/'],
    ['B1 Preliminary format (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/preliminary/format/'],
    ['B2 First for Schools and B2 First (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/'],
    ['B2 First format (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/first/format/'],
    ['C1 Advanced format (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/advanced/format/'],
    ['C2 Proficiency format (Cambridge English)', 'https://www.cambridgeenglish.org/exams-and-tests/qualifications/proficiency/format/'],
    ['Examens Cambridge : dates, frais et lieux (British Council Maroc)', 'https://www.britishcouncil.ma/en/exam/cambridge/dates-fees-locations'],
    ['IELTS : dates, frais et lieux (British Council Maroc)', 'https://www.britishcouncil.ma/en/exam/ielts/dates-fees-locations'],
    ['TOEIC avec Amideast Maroc', 'https://www.amideast.org/morocco/take-a-test/individuals/toeic'],
    ['Entrée express : tests de langue (Canada.ca)', 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/language-requirements/language-testing.html'],
  ],
};
