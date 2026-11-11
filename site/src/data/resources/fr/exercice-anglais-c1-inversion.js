// Resource: exercise. English items stay English; explanations are in French.
export default {
  key: 'en-ex-c1', site: 'fr', slug: 'exercice-anglais-c1-inversion', kind: 'exercise', course: 'English', level: 'C1',
  draw: 'dragon', tint: 'mint', published: '2026-10-26',
  title: "Exercice d'anglais : l'inversion (C1)",
  metaTitle: "Exercices anglais inversion sujet-auxiliaire C1 (gratuit) – Alimun",
  desc: "Douze questions gratuites pour le niveau C1 en anglais sur l'inversion : Never have I, Hardly had, Not only, Should you et plus encore, chaque réponse expliquée.",
  lead: "Choisis le bon ordre des mots dans chaque phrase. Tu vois tout de suite si tu as juste, et pourquoi.",
  instructions: 'Choisis la bonne forme.',
  about: [
    "Quand une phrase commence par un mot négatif ou restrictif comme never, rarely, seldom, little, hardly, no sooner, not only, not until, only after ou under no circumstances, l'anglais inverse le sujet et l'auxiliaire, comme dans une question : \"Never have I seen such a view\", \"Not only was he late, but...\". S'il n'y a pas d'auxiliaire, on ajoute do, does ou did : \"Little did she know\", \"Rarely do we see this.\" Hardly est suivi de when et no sooner de than : \"Hardly had I arrived when the phone rang\", \"No sooner had we sat down than the music started.\"",
    "Les phrases conditionnelles peuvent aussi supprimer if et inverser à la place, ce qui sonne soutenu et se rencontre souvent dans les lettres, les e-mails et les examens : \"Should you need help\" veut dire \"If you need help\", \"Had I known\" veut dire \"If I had known\", et \"Were he to resign\" veut dire \"If he resigned\". Ces structures donnent de l'emphase ou un ton soutenu à l'écrit et dans les discours, et elles sont évaluées dans des examens avancés comme le C1 Advanced et l'IELTS.",
  ],
  items: [
    { q: 'Never ___ such a beautiful sunset.', options: ['I have seen', 'have I seen', 'I saw', 'did I saw'], a: 1, why: "Après un mot négatif en début de phrase, on place l'auxiliaire avant le sujet : Never have I seen." },
    { q: 'Hardly ___ arrived when the phone rang.', options: ['had I', 'I had', 'did I', 'have I'], a: 0, why: "Hardly en début de phrase entraîne l'inversion avec le past perfect : Hardly had I arrived when..." },
    { q: 'Not only ___ late, but he also forgot the tickets.', options: ['he was', 'did he be', 'was he'], a: 2, why: 'Not only en début de phrase inverse le verbe be et le sujet : Not only was he late.' },
    { q: '___ you need any help, please call me.', options: ['Would', 'Should', 'Were', 'Had'], a: 1, why: 'Should + sujet remplace "If you need" dans un first conditional soutenu.' },
    { q: '___ I known about the traffic, I would have left earlier.', options: ['Have', 'Did', 'Had', 'Were'], a: 2, why: 'Had + sujet remplace "If I had" dans un third conditional.' },
    { q: '___ he to resign, the company would be in trouble.', options: ['Were', 'Was', 'Should', 'Did'], a: 0, why: 'Were + sujet + to-infinitive remplace "If he resigned" dans un second conditional soutenu.' },
    { q: 'No sooner had we sat down ___ the music started.', options: ['when', 'than', 'then', 'that'], a: 1, why: 'No sooner est toujours suivi de than.' },
    { q: 'Only after the meeting ___ the truth.', options: ['we learned', 'learned we', 'we did learn', 'did we learn'], a: 3, why: "Only after + moment entraîne l'inversion dans la proposition principale, avec did quand il n'y a pas d'autre auxiliaire." },
    { q: 'Little ___ that she was being watched.', options: ['she knew', 'knew she', 'did she know', 'she did know'], a: 2, why: "Little en début de phrase veut dire pas du tout et entraîne l'inversion avec did : Little did she know." },
    { q: 'Under no circumstances ___ open this door.', options: ['you should', 'should you', 'you must', 'must'], a: 1, why: 'Under no circumstances est négatif, donc le modal se place avant le sujet : should you.' },
    { q: 'Rarely ___ such talent in someone so young.', options: ['do we see', 'we see', 'see we', 'we do see'], a: 0, why: "Rarely en début de phrase entraîne l'inversion, avec do au present simple : Rarely do we see." },
    { q: 'Not until I read the letter ___ how worried she had been.', options: ['I realized', 'did I realize', 'I did realize', 'realized I'], a: 1, why: "Avec Not until, l'inversion se fait dans la proposition principale : did I realize." },
  ],
  related: ['en-ex-b2', 'en-quiz-c1', 'en-quiz-b2'],
};
