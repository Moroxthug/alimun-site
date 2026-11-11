// Étudier en Allemagne depuis le Maroc. Vérifié le 10 novembre 2026 sur : la page « Études » de l'ambassade d'Allemagne à Rabat
// (rabat.diplo.de, version du 25.06.2026 : allemand au moins B1 pour la langue d'enseignement, certificat de moins de 12 mois, Goethe,
// telc, ÖSD, TestDaF à partir du B2, ECL, modules d'un seul organisme, IELTS ou TOEFL pour les cursus en anglais ; compte bloqué
// 11 904 € par an ou 992 € par mois pour les étudiants ; visa de candidature aux études de neuf mois au plus ; Studienkolleg et FSP au
// Maroc, coopérations FH Aachen, TU Berlin, Universität Paderborn ; assurance santé ; délai de traitement d'environ trois mois ; frais
// de 75 € en espèces en MAD ; dépôt en ligne sur digital.diplo.de/visa), la page « Visa national » (attente indicative de 2 à 4 mois
// pour les études), uni-assist (notes par pays pour le Maroc : le Baccalauréat seul ne permet pas d'étudier directement, il ouvre le
// Studienkolleg et la Feststellungsprüfung ; Licence Professionnelle ; frais de 75 € puis 30 € par semestre ; glossaire FSP et FSP
// externe), DAAD (base de données d'admission, non contraignante, fondée sur anabin ; Studienkollegs : deux semestres, cours M, W, G,
// T, S et TI, WW, GD, SW, allemand jusqu'au C1, gratuits hors cotisation semestrielle dans le public), la Rahmenordnung RO-DT
// (HRK/KMK, version 2015, PDF sur goethe.de : DSH-2, TestDaF TDN 4, partie allemande de la FSP, DSD II ; dispenses Goethe-Zertifikat C2
// GDS et telc Deutsch C1 Hochschule ; règles locales différenciées), testdaf.de (TDN 4 dans les quatre parties, TDN 3 à 5, TestDaF
// numérique en centre agréé, environ 550 centres dans 100 pays) et la loi sur le séjour § 16b (140 jours de travail par an, titre
// de séjour de deux ans en règle générale). Non retenu faute de confirmation sur une source officielle ouverte aujourd'hui : le niveau
// d'allemand exact pour entrer dans un Studienkolleg, les dates et tarifs du TestDaF et du Goethe-Zertifikat C2 au Maroc (pages du
// Goethe-Institut Marokko inaccessibles), les scores IELTS ou TOEFL (fixés par chaque université), le montant mensuel du compte bloqué
// pour les candidats aux études (chiffres incohérents sur la page de l'ambassade), la procédure APS (absente de la page de Rabat) et
// les règles de légalisation des documents.
export default {
  key: 'germany-study-from-morocco',
  site: 'ma',
  slug: 'etudier-en-allemagne-depuis-le-maroc',
  section: 'abroad',
  course: 'German',
  published: '2026-11-10',
  updated: '2026-11-10',
  title: "Étudier en Allemagne depuis le Maroc : niveau de langue, Studienkolleg et visa",
  metaTitle: "Étudier en Allemagne depuis le Maroc : langue et visa – Alimun",
  desc: "DSH, TestDaF, Goethe C2, telc C1 Hochschule, IELTS : le niveau exigé, le Studienkolleg après le bac marocain, uni-assist et le visa étudiant à Rabat.",
  lead: "Pour un bachelier marocain, étudier en Allemagne commence presque toujours par une année de Studienkolleg, et pour tous les candidats, la langue décide du calendrier. **L'université et l'ambassade ne demandent pas le même niveau** : l'une veut un allemand de niveau universitaire, l'autre un certificat récent d'au moins B1. Ce guide vous explique quel examen passer, à quel moment, et comment monter votre dossier de visa à Rabat.",
  photo: 'germany-study-from-morocco-library-shelves',
  sticker: { draw: 'pretzel', say: "Le bac en poche, maintenant l'allemand." },
  facts: [
    { label: 'B1', text: "le minimum d'allemand que l'ambassade à Rabat demande pour un visa d'études dans un cursus en allemand" },
    { label: '11 904 €', text: "le montant annuel du compte bloqué pour un étudiant, soit 992 € par mois, selon l'ambassade à Rabat" },
    { n: 2, unit: 'semestres', text: "la durée habituelle d'un Studienkolleg, qui se termine par la Feststellungsprüfung" },
    { n: 75, unit: '€', text: "les frais uni-assist pour le premier choix de cursus d'un semestre, puis 30 € par cursus supplémentaire" },
  ],
  blocks: [
    { take: { title: 'En bref', text: "Selon uni-assist, le Baccalauréat marocain **ne permet pas d'étudier directement** dans une université allemande : il donne accès au Studienkolleg, une année préparatoire qui se termine par la Feststellungsprüfung. Pour un cursus en allemand, l'université exige en règle générale la DSH-2, le TestDaF avec TDN 4 dans chaque partie, le Goethe-Zertifikat C2 ou le telc Deutsch C1 Hochschule. Pour un cursus en anglais, ce sont l'IELTS ou le TOEFL. L'ambassade à Rabat demande de son côté **un certificat d'au moins B1 de moins de 12 mois** pour la langue d'enseignement, et un compte bloqué de 11 904 € par an. Les règles changent : vérifiez toujours la page officielle.", draw: 'owl' } },

    { h: "Deux exigences de langue à ne pas confondre" },
    { p: "Beaucoup de bacheliers marocains découvrent tard qu'il existe deux contrôles différents. Le premier est celui de **l'université**, qui veut savoir si vous pourrez suivre des cours magistraux, lire des articles et rédiger des devoirs en allemand. Le second est celui de **l'ambassade d'Allemagne à Rabat**, qui vérifie au moment du visa que votre projet est réaliste et que vous avez déjà le niveau minimum." },
    { p: "Ces deux niveaux ne sont pas les mêmes. L'ambassade demande au moins le B1 du Cadre européen dans la langue d'enseignement, tandis que l'admission dans un cursus en allemand suppose en général un niveau nettement plus élevé, attesté par un examen reconnu par les universités. Un candidat peut donc avoir un certificat suffisant pour le visa **sans être admissible** à l'université, et c'est justement pour combler cet écart que le Studienkolleg existe." },
    { p: "Il y a enfin le cas des cursus enseignés en anglais, de plus en plus nombreux en master. Là, l'allemand n'est souvent pas exigé pour l'admission, mais il reste utile pour un job étudiant, un stage ou une recherche de logement. Nous y revenons plus bas." },

    { h: "Le Baccalauréat marocain et l'accès aux études" },
    { p: "uni-assist, le service qui examine les dossiers étrangers pour de nombreuses universités allemandes, publie des notes par pays. Pour le Maroc, elles sont claires : le Baccalauréat seul **ne permet pas d'entrer directement** en licence (Bachelor) en Allemagne. Il vous qualifie pour le Studienkolleg et pour la Feststellungsprüfung, l'examen qui conclut le Studienkolleg. Dans votre dossier, uni-assist demande le relevé de notes du Baccalauréat, et non seulement le diplôme." },
    { p: "Si vous avez déjà commencé ou terminé des études supérieures au Maroc, la situation change. Les titulaires d'un diplôme universitaire marocain fournissent le diplôme et un relevé complet de toutes les matières et notes ; les élèves des classes préparatoires joignent le relevé de ces classes. Pour la Licence Professionnelle, uni-assist précise que vous ne pouvez candidater en Bachelor que dans la même discipline ou une discipline proche, et qu'**un master n'est pas accessible** sur la seule base de ce diplôme." },
    { p: "Pour vérifier votre cas avant de payer quoi que ce soit, le DAAD, l'office allemand d'échanges universitaires, propose une base de données d'admission en ligne. Vous choisissez le pays de votre dernier diplôme et l'outil indique, à titre indicatif, si vous pouvez entrer directement ou par le Studienkolleg. Elle s'appuie sur la base **anabin** de la Conférence des ministres de l'Éducation et a été préparée avec uni-assist. Ses résultats ne concernent que les études de premier cycle, et la décision finale revient toujours à l'université." },

    { h: "Le Studienkolleg et la Feststellungsprüfung" },
    { p: "Le Studienkolleg est une formation préparatoire qui dure en général **deux semestres**, parfois un seul pour les élèves très performants selon le DAAD. On y suit des matières liées au domaine visé, avec beaucoup d'allemand : le DAAD indique que les Studienkollegs enseignent la langue jusqu'au niveau C1. Les cours ont lieu en semaine, du lundi au vendredi, et les Studienkollegs publics sont en général gratuits, hors cotisation semestrielle, alors que les établissements privés sont souvent payants." },
    { p: "Vous choisissez un cours selon les études que vous voulez faire ensuite. Votre choix détermine les filières qui vous seront ouvertes, car la Feststellungsprüfung donne accès aux cursus qui correspondent à votre cours. Le tableau ci-dessous reprend les cours décrits par le DAAD." },
    { table: {
      head: ['Cours', 'Établissement', 'Études visées'],
      rows: [
        ['M', 'Université', 'Médecine, biologie, pharmacie'],
        ['T', 'Université', 'Mathématiques, sciences naturelles, disciplines techniques'],
        ['W', 'Université', 'Économie, gestion, sciences sociales'],
        ['G', 'Université', 'Lettres, sciences humaines, études germaniques'],
        ['S', 'Université', 'Études de langues'],
        ['TI', "Université de sciences appliquées (Fachhochschule)", "Disciplines techniques et d'ingénierie"],
        ['WW', 'Université de sciences appliquées', 'Économie'],
        ['GD', 'Université de sciences appliquées', 'Disciplines créatives et artistiques'],
        ['SW', 'Université de sciences appliquées', 'Sciences sociales'],
      ],
      note: "Source : DAAD, page sur les Studienkollegs. Chaque Studienkolleg fixe ses propres conditions d'admission et ses dates : vérifiez-les sur son site.",
    } },
    { p: "La Feststellungsprüfung, souvent abrégée FSP, est l'examen final. Selon le DAAD, la réussir **ouvre l'accès aux études dans toute l'Allemagne**, dans les filières qui correspondent à votre cours. uni-assist rappelle aussi que certains Studienkollegs acceptent des candidats externes : vous vous préparez seul et vous ne passez que l'examen. Les places pour cette voie sont souvent limitées." },
    { p: "Point important pour la langue : la partie « allemand » de la FSP compte elle-même comme preuve du niveau universitaire. La Rahmenordnung des recteurs et des ministres de l'Éducation, qui encadre les examens d'allemand pour les études, indique qu'elle vaut pour **l'admission sans restriction** dans tous les cursus. Autrement dit, un bachelier qui réussit la FSP n'a pas besoin de passer en plus la DSH ou le TestDaF." },
    { h3: 'Préparer le Studienkolleg depuis le Maroc' },
    { p: "L'ambassade d'Allemagne à Rabat signale qu'il existe aujourd'hui au Maroc des offres de différents prestataires pour suivre un Studienkolleg, et que **la FH Aachen, la TU Berlin et l'Universität Paderborn** coopèrent avec des prestataires marocains. Elle précise qu'elle ne garantit pas l'exactitude de cette liste et ne recommande aucun prestataire. Avant de vous inscrire, vérifiez directement auprès de l'université allemande citée que la coopération existe et ce que le diplôme vous permettra." },
    { p: "Pour le visa, deux situations sont prévues. Si vous avez déjà réussi la FSP au Maroc, vous joignez la preuve de cette réussite. Si vous passerez la FSP en Allemagne, l'ambassade demande la preuve des cours préparatoires suivis au Maroc et **le paiement des frais d'inscription**, en plus de l'avis d'admission au cours préparatoire." },
    { figure: { photo: 'germany-study-from-morocco-study-desk', alt: "Une paire de lunettes posée sur une feuille imprimée, à côté d'une tasse blanche", caption: "Relevés de notes, traductions, lettre de motivation : le dossier se prépare des mois avant le départ, en même temps que la langue." } },

    { h: "Les certificats d'allemand acceptés par les universités" },
    { p: "Pour un cursus en allemand, la règle commune est fixée par la Rahmenordnung RO-DT, adoptée par la Conférence des recteurs (HRK) et la Conférence des ministres de l'Éducation (KMK). Elle reconnaît quatre preuves du niveau universitaire, appelé « sprachliche Studierfähigkeit », et deux certificats qui **dispensent** de ces examens. Le tableau résume ce que chacun exige." },
    { table: {
      head: ['Certificat', 'Résultat exigé', 'À savoir'],
      rows: [
        ['DSH', 'DSH-2 au moins', "Organisée par les universités et les Studienkollegs eux-mêmes ; la DSH-3 atteste un niveau supérieur à celui exigé"],
        ['TestDaF', 'TDN 4 dans les quatre parties', 'Chaque partie est notée TDN 3, 4 ou 5, sans note globale'],
        ['Partie « allemand » de la FSP', 'Réussite', "Passée à la fin du Studienkolleg"],
        ['DSD II', 'Réussite', "Diplôme passé dans certaines écoles à l'étranger"],
        ['Goethe-Zertifikat C2 : Großes Deutsches Sprachdiplom', 'Réussite', "Dispense de la DSH et du TestDaF"],
        ['telc Deutsch C1 Hochschule', 'Réussite', "Dispense de la DSH et du TestDaF"],
      ],
      note: "Source : Rahmenordnung RO-DT (HRK et KMK), testdaf.de. Les universités peuvent fixer des exigences différentes selon le cursus : la page d'admission de votre filière fait foi.",
    } },
    { p: "La Rahmenordnung laisse en effet une marge aux universités. Elles peuvent demander moins pour certains cursus, par exemple la DSH-1, mais une admission obtenue ainsi **ne vaut pas forcément** si vous changez de filière ou d'université. Le TestDaF suit la même logique : testdaf.de cite l'exemple d'une filière d'informatique ou d'ingénierie qui peut accepter TDN 3 en expression écrite, alors qu'une filière de traduction peut exiger TDN 5." },
    { p: "Attention à une confusion fréquente : le Goethe-Zertifikat C1 et le telc Deutsch C1 « général » **ne figurent pas** dans cette liste nationale. Certaines universités les acceptent dans leurs propres règles, d'autres non. Si vous visez le telc, choisissez la version « Hochschule », conçue pour les études ; si vous visez le Goethe, c'est le C2 qui dispense de la DSH et du TestDaF partout. Dans tous les cas, lisez la page d'admission de votre filière avant de réserver un examen." },
    { h3: 'DSH ou TestDaF : lequel choisir depuis le Maroc' },
    { p: "La DSH est organisée par chaque université ou Studienkolleg, en général sur place en Allemagne, juste avant le semestre. Elle convient surtout à un étudiant déjà admis sous condition ou inscrit dans un cours de langue préparatoire. Le TestDaF, lui, se passe dans des centres agréés partout dans le monde : testdaf.de en compte environ 550 dans 100 pays, et la version actuelle est **entièrement numérique**, sur ordinateur, avec quatre parties de compréhension écrite, compréhension orale, expression écrite et expression orale. Utilisez la recherche de centres sur testdaf.de pour trouver une session au Maroc et ses tarifs." },

    { cta: true },

    { h: "Étudier en anglais : IELTS ou TOEFL" },
    { p: "Si votre programme est enseigné en anglais, l'ambassade à Rabat indique que les compétences linguistiques peuvent être prouvées **par un certificat IELTS ou TOEFL**. Le score minimum n'est pas fixé par l'ambassade mais par chaque université, et il varie selon les programmes : il figure dans la fiche du cursus, par exemple dans la base des programmes internationaux du DAAD. Pour comparer les examens d'anglais passés au Maroc, consultez notre guide sur le TOEIC, l'IELTS et le TOEFL." },
    { p: "Un cursus en anglais ne veut pas dire que l'allemand est inutile. La vie quotidienne, les démarches administratives, une grande partie des petits boulots et des stages se font en allemand. Beaucoup d'étudiants internationaux commencent l'allemand avant le départ pour **ne pas dépendre de l'anglais** en dehors du campus, et pour avoir plus de choix d'emploi après le diplôme." },

    { h: "Candidater : uni-assist ou directement à l'université" },
    { p: "Selon l'université, vous déposez votre candidature directement auprès d'elle ou via uni-assist, qui examine les documents pour le compte de nombreuses universités membres. uni-assist évalue votre dossier et publie le résultat dans votre espace « My assist », puis l'université décide de l'admission. Le même circuit sert aussi pour postuler à un Studienkolleg ou à un cours d'allemand préparatoire." },
    { p: "Les frais de traitement s'élèvent à **75 € pour le premier cursus choisi** et à 30 € pour chaque cursus supplémentaire, par semestre : uni-assist donne l'exemple de deux universités et trois cursus, soit 135 €. Ils sont dus quel que soit le résultat, et à repayer si vous candidatez à nouveau le semestre suivant. Certaines universités prennent ces frais en charge. uni-assist rappelle enfin que les demandes de paiement liées à la candidature viennent **uniquement de son portail** et qu'il ne travaille pas avec des agences commerciales." },

    { h: "Le visa étudiant à l'ambassade d'Allemagne à Rabat" },
    { p: "Un séjour d'études de plus de 90 jours demande un visa national, déposé à l'ambassade d'Allemagne à Rabat. Pour les études, vous pouvez **faire la demande en ligne** sur le portail digital.diplo.de/visa, qui vous dit à l'avance si votre dossier est complet ; vous vous présentez ensuite à Rabat pour montrer les originaux, donner vos données biométriques et payer. Les frais sont de 75 €, ou 37,50 € au tarif réduit, payables en espèces et en dirhams au taux du jour, plus les frais de service de TLScontact si vous passez par ce prestataire." },
    { p: "Deux types de visa existent pour un futur étudiant. Si vous êtes déjà admis, vous demandez le visa d'études. Si vous n'avez pas encore d'admission, par exemple parce que vous devez passer l'examen d'entrée d'un Studienkolleg, vous pouvez demander un **visa de candidature aux études**, valable neuf mois au plus, pendant lesquels vous cherchez une place. L'ambassade publie aussi une page distincte pour les cours de langue." },
    { table: {
      head: ['Pièce du dossier', 'Ce que demande l’ambassade à Rabat'],
      rows: [
        ["Formulaire et photos", "Formulaire VIDEX rempli, imprimé et signé ; deux photos biométriques récentes"],
        ['Passeport', 'Au moins deux pages libres'],
        ['Admission', "Avis d'admission d'une université allemande ou d'un Studienkolleg"],
        ['Certificat de langue', "Allemand au moins B1 pour un cursus en allemand, moins de 12 mois ; IELTS ou TOEFL pour un cursus en anglais"],
        ['Questionnaire, CV et motivation', "Questionnaire pour les études en Allemagne, CV sous forme de tableau, lettre de motivation rédigée et signée par vous"],
        ['Financement', "Compte bloqué de 11 904 € par an (992 € par mois), déclaration de prise en charge ou bourse"],
        ['Assurance santé', "Couverture privée jusqu'au début de l'assurance étudiante obligatoire"],
        ['Traductions', "Documents qui ne sont ni en allemand, ni en anglais, ni en français, notamment en arabe"],
      ],
      note: "Source : page « Études » de rabat.diplo.de. La liste complète, les modèles et les montants peuvent changer : téléchargez-les sur la page officielle au moment de votre demande.",
    } },
    { p: "Pour la langue, l'ambassade accepte les certificats du Goethe-Institut, de telc, de l'ÖSD, du TestDaF **à partir du niveau B2** et du centre d'examens ECL. Si l'examen se passe par modules, tous doivent venir du même organisme. Comme pour les autres visas, l'ambassade indique qu'elle a rencontré des certificats obtenus de manière abusive, qu'elle peut vérifier vous-même votre allemand et qu'un niveau insuffisant peut entraîner un refus." },
    { p: "Côté financement, le compte bloqué est la solution la plus courante : il doit être ouvert en Allemagne, et le ministère allemand des Affaires étrangères ne recommande aucun prestataire. Une déclaration de prise en charge établie par une personne qui vit en Allemagne, couvrant au moins un an, ou un contrat de bourse indiquant le montant, peuvent la remplacer. Pour l'assurance santé, l'ambassade rappelle que **l'assurance étudiante obligatoire** ne commence qu'après votre installation et votre inscription ; une assurance voyage classique peut exclure les longs séjours." },
    { h3: 'Délais et calendrier' },
    { p: "L'ambassade estime l'attente avant un rendez-vous à **environ deux à quatre mois** pour les études, sans garantie, et conseille de prévoir ensuite environ trois mois de traitement, parfois plus quand d'autres autorités allemandes doivent être consultées. Pour une rentrée d'hiver en octobre, cela signifie qu'il faut souvent avoir l'admission, le certificat de langue et le compte bloqué prêts dès le printemps. Notez que la page de Rabat ne demande pas de certificat APS, une procédure appliquée aux candidats de certains autres pays." },
    { p: "Pensez aussi à la règle des 12 mois. Un certificat B1 obtenu trop tôt peut expirer pendant que vous attendez l'admission ou le rendez-vous : **calez la date de l'examen sur votre calendrier de dépôt**. À l'inverse, un certificat universitaire comme le TestDaF ou le Goethe-Zertifikat C2 sert d'abord à l'admission ; vérifiez auprès de l'université si elle accepte un certificat ancien." },

    { h: "Une fois en Allemagne" },
    { p: "Le titre de séjour pour études est délivré en règle générale pour deux ans, et pas moins d'un an, selon le § 16b de la loi sur le séjour. Le même article vous autorise à travailler **jusqu'à 140 jours par an** en plus des études, ce qui permet de compléter votre budget sans le remplacer : le compte bloqué reste la base de votre financement aux yeux de l'administration." },
    { p: "C'est souvent à ce moment que l'écart entre B1 et niveau universitaire se fait sentir. Suivre un cours magistral, prendre des notes, comprendre un enseignant qui parle vite, puis écrire un devoir argumenté : tout cela demande un allemand solide, que le Studienkolleg aide à construire mais qu'il vaut mieux **commencer au Maroc**. Plus vous arrivez avec un bon niveau, plus vous pouvez vous concentrer sur les matières." },
    { examples: [
      ['Ich möchte Maschinenbau an der TU Berlin studieren.', "Je voudrais étudier le génie mécanique à la TU Berlin. (A2 : dire son projet à l'ambassade)"],
      ['Ich habe in Marokko das Baccalauréat gemacht und besuche jetzt das Studienkolleg.', "J'ai passé mon bac au Maroc et je suis maintenant au Studienkolleg. (B1 : présenter son parcours)"],
      ['Könnten Sie die letzte Folie bitte noch einmal erklären?', "Pourriez-vous réexpliquer la dernière diapositive, s'il vous plaît ? (B2 : intervenir en cours)"],
      ['In meiner Hausarbeit vergleiche ich zwei Ansätze zur Energiewende.', "Dans mon devoir, je compare deux approches de la transition énergétique. (C1 : parler d'un travail universitaire)"],
    ] },
    { quote: "Le visa demande le B1 ; l'amphithéâtre demande bien davantage." },

    { h: "Comment organiser votre préparation" },
    { p: "Commencez par vérifier votre accès dans la base de données d'admission du DAAD et sur la page Maroc d'uni-assist, puis choisissez votre filière et donc votre cours de Studienkolleg ou votre programme. Lisez ensuite la page d'admission de chaque université visée : c'est elle qui dit quel certificat est accepté et avec quel résultat. **Travaillez la langue en parallèle**, dès le lycée si possible, car c'est l'étape la plus longue." },
    { p: "Pour l'allemand, l'oral compte autant que l'écrit : l'ambassade peut vous parler en allemand, et un test d'entrée ou un cours magistral se joue d'abord à l'écoute. Chez Alimun, le test de niveau vous situe de l'A1 au C2, et **les cours d'allemand en direct avec un professeur, en petit groupe**, vous font parler à chaque séance, avec des exercices corrigés immédiatement entre les cours. Enfin, gardez le réflexe des sources officielles : rabat.diplo.de, uni-assist.de, daad.de et testdaf.de publient les règles à jour, et ce sont elles qui comptent le jour de votre demande." },
  ],
  quiz: [
    { q: "Selon uni-assist, que permet le Baccalauréat marocain seul ?", options: ["Entrer directement en Bachelor", "Accéder au Studienkolleg et à la Feststellungsprüfung", "Entrer directement en master", "Rien, il n'est pas reconnu"], a: 1, why: "Le Baccalauréat seul ne permet pas d'étudier directement ; il qualifie pour le Studienkolleg et la Feststellungsprüfung." },
    { q: "Quel niveau d'allemand minimum l'ambassade à Rabat demande-t-elle pour un visa d'études dans un cursus en allemand ?", options: ['A2', 'B1', 'C1', 'C2'], a: 1, why: "L'ambassade demande au moins le B1 dans la langue d'enseignement, avec un certificat de moins de 12 mois." },
    { q: "Quel résultat au TestDaF vaut admission sans restriction selon la Rahmenordnung ?", options: ['TDN 3 dans une partie', 'TDN 3 dans toutes les parties', 'TDN 4 dans les quatre parties', 'TDN 5 en expression écrite'], a: 2, why: "Le TestDaF passé avec au moins TDN 4 dans toutes les parties est la preuve standard du niveau universitaire." },
    { q: "Lequel de ces certificats dispense de la DSH et du TestDaF selon la Rahmenordnung ?", options: ['telc Deutsch B2', 'Goethe-Zertifikat B2', 'telc Deutsch C1 Hochschule', 'Goethe-Zertifikat A2'], a: 2, why: "Le telc Deutsch C1 Hochschule et le Goethe-Zertifikat C2 font partie des certificats qui dispensent." },
    { q: "Combien de temps dure en général un Studienkolleg ?", options: ['Un mois', 'Deux semestres', 'Trois ans', 'Quatre semestres'], a: 1, why: "Selon le DAAD, la préparation dure en général deux semestres, parfois un seul pour les très bons élèves." },
    { q: "Quel montant annuel de compte bloqué l'ambassade à Rabat indique-t-elle pour un étudiant ?", options: ['5 000 €', '8 640 €', '11 904 €', '20 000 €'], a: 2, why: "La page « Études » de l'ambassade indique 11 904 € par an, soit 992 € par mois." },
    { q: "Combien coûte une candidature uni-assist pour le premier cursus choisi d'un semestre ?", options: ['30 €', '75 €', '135 €', 'Gratuit dans tous les cas'], a: 1, why: "75 € pour le premier cursus, puis 30 € pour chaque cursus supplémentaire, sauf si l'université prend les frais en charge." },
  ],
  faq: [
    ["Peut-on entrer directement à l'université allemande avec le bac marocain ?", "Non, selon uni-assist : le Baccalauréat seul ne permet pas d'étudier directement en Allemagne. Il donne accès au Studienkolleg et à la Feststellungsprüfung. Les titulaires d'un diplôme universitaire marocain suivent d'autres règles : vérifiez votre cas dans la base de données d'admission du DAAD et auprès de l'université."],
    ["Le Goethe-Zertifikat C1 suffit-il pour étudier en allemand ?", "Pas partout. La liste nationale de la Rahmenordnung retient la DSH-2, le TestDaF avec TDN 4 dans chaque partie, la partie allemande de la FSP, le DSD II, le Goethe-Zertifikat C2 et le telc Deutsch C1 Hochschule. Certaines universités acceptent aussi le Goethe C1 dans leurs propres règles : lisez la page d'admission de votre filière."],
    ["Faut-il parler allemand pour un master enseigné en anglais ?", "Pour l'admission, un certificat IELTS ou TOEFL suffit en général, avec le score fixé par l'université. L'ambassade à Rabat accepte aussi ces certificats pour le visa d'un cursus en anglais. L'allemand reste très utile pour la vie quotidienne, les jobs et les stages."],
    ["Peut-on faire le Studienkolleg au Maroc ?", "L'ambassade à Rabat indique que des prestataires proposent un Studienkolleg au Maroc et que la FH Aachen, la TU Berlin et l'Universität Paderborn coopèrent avec des prestataires marocains, sans garantir cette liste ni recommander de prestataire. Vérifiez la coopération directement auprès de l'université allemande avant de vous inscrire."],
    ["Combien de temps prévoir pour le visa étudiant ?", "L'ambassade estime l'attente avant un rendez-vous à environ deux à quatre mois pour les études, puis conseille de prévoir environ trois mois de traitement. Ces délais sont indicatifs et peuvent changer : consultez la page « Visa national » de rabat.diplo.de."],
  ],
  related: ['germany-from-morocco', 'moroccan-english-exams', 'german-prepositions'],
  sources: [
    ["Ambassade d'Allemagne à Rabat : visa pour études", 'https://rabat.diplo.de/ma-fr/service/visa/2798424-2798424'],
    ["Ambassade d'Allemagne à Rabat : visa national, rendez-vous, frais et délais", 'https://rabat.diplo.de/ma-fr/service/visa/visa-national'],
    ['uni-assist : notes sur les documents, Maroc', 'https://www.uni-assist.de/en/tools/info-country-by-country/details-country/country/ma'],
    ['uni-assist : frais de traitement', 'https://www.uni-assist.de/en/how-to-apply/pay-all-fees/handling-fees/'],
    ['uni-assist : Feststellungsprüfung', 'https://uni-assist.de/en/tools/glossary-of-terms/description/term/feststellungspruefung-university-qualification-exam'],
    ["DAAD : base de données d'admission", 'https://www.daad.de/en/studying-in-germany/requirements/admission-database/'],
    ['DAAD : Studienkollegs', 'https://www.daad.de/en/studying-in-germany/requirements/studienkollegs/'],
    ['Rahmenordnung RO-DT (HRK et KMK), document publié par le Goethe-Institut', 'https://www.goethe.de/resources/files/pdf96/rahmenordnung-deutsche-sprachpruefung_ro-dt14.pdf'],
    ["TestDaF : preuve des connaissances d'allemand pour les études", 'https://www.testdaf.de/de/hochschulen/der-testdaf-und-hochschulen/nachweis-der-deutschkenntnisse-fuer-das-studium/'],
    ['TestDaF : questions fréquentes', 'https://www.testdaf.de/de/teilnehmende/mein-testdaf/faq/faq-allgemein/'],
    ['Loi sur le séjour § 16b : études', 'https://www.gesetze-im-internet.de/aufenthg_2004/__16b.html'],
  ],
};
