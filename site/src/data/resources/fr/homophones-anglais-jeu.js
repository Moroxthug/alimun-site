// Resource: game. English homophones: words that sound the same but are spelled differently. Meanings and UK/US pronunciations checked against Cambridge Dictionary.
// The English sentences and words stay English; explanations and meanings are in French.
export default {
  key: 'english-homophones', site: 'fr', slug: 'homophones-anglais-jeu', kind: 'game', course: 'English', level: 'Tous niveaux',
  draw: 'cat', tint: 'coral', published: '2026-11-01',
  title: "Jeu des homophones anglais : their, there ou they're ?",
  metaTitle: "Jeu des homophones anglais : their, there, they're – Alimun",
  desc: "Un jeu gratuit avec dix groupes de mots anglais qui se prononcent pareil mais s'écrivent différemment, de their et there à piece et peace. Choisis la bonne forme.",
  lead: "Their, there ou they're ? Your ou you're ? Complète dix phrases avec le mot bien écrit, puis associe chaque mot à son sens.",
  instructions: 'Quelle orthographe complète la phrase ?',
  about: [
    "Les homophones sont des mots qui se prononcent exactement pareil mais qui s'écrivent différemment et n'ont pas le même sens, comme their, there et they're. À l'oral, la phrase te dit lequel c'est ; à l'écrit, c'est à toi de choisir.",
    "Les anglophones eux-mêmes les confondent, surtout its et it's ou your et you're. Une astuce rapide : si tu peux dire it is ou you are à la place, prends la forme avec l'apostrophe.",
  ],
  items: [
    { q: 'Look over ___, by the window.', options: ['their', 'there', "they're", 'thier'], a: 1, why: "There veut dire là, à cet endroit. Their (leur, leurs) et they're (they are, ils sont) se prononcent pareil : /ðeə/ en anglais britannique, /ðer/ en anglais américain." },
    { q: "___ going to love this film.", options: ["You're", 'Your', 'Youre', "Your'e"], a: 0, why: "You're est la forme courte de you are, tu es. Your veut dire ton, ta, tes. Les deux se prononcent /jɔː/ en anglais britannique et le plus souvent /jʊr/ en anglais américain." },
    { q: 'The dog wagged ___ tail.', options: ["it's", "its'", 'its', 'it is'], a: 2, why: "Its veut dire son, sa, ses (pour une chose ou un animal) et ne prend pas d'apostrophe. It's est la forme courte de it is ou it has. Les deux se prononcent /ɪts/." },
    { q: 'This coffee is ___ hot to drink.', options: ['to', 'two', 'tow', 'too'], a: 3, why: "Too veut dire trop, ou aussi. Two, c'est le chiffre 2. To se prononce en général plus court, /tə/, et ne sonne comme /tuː/ que lorsqu'il est accentué." },
    { q: "I can't decide ___ to go or stay.", options: ['weather', 'whether', 'wheather', 'whather'], a: 1, why: "Whether veut dire si, quand on hésite entre deux possibilités. Weather, c'est le temps qu'il fait. Presque tout le monde prononce les deux /ˈweðə/ ; certains Américains commencent whether par un son soufflé /hw/." },
    { q: "Speak up, I can't ___ you!", options: ['hear', 'here', 'heer', 'hier'], a: 0, why: "Hear veut dire entendre ; here veut dire ici. Ils se prononcent /hɪə/ en anglais britannique et /hɪr/ en anglais américain." },
    { q: "I don't ___ the answer.", options: ['no', 'now', 'know', 'kno'], a: 2, why: "Know veut dire savoir. No est le contraire de yes. Ils se prononcent /nəʊ/ en anglais britannique et /noʊ/ en anglais américain." },
    { q: 'I need to ___ some milk on the way home.', options: ['by', 'bye', 'bie', 'buy'], a: 3, why: "Buy veut dire acheter. By veut dire près de ou par, et bye est la forme courte de goodbye, au revoir. Les trois se prononcent /baɪ/." },
    { q: "Don't forget to ___ your name at the top.", options: ['right', 'write', 'rite', 'wright'], a: 1, why: "Write veut dire écrire. Right veut dire juste ou droite, un rite est un rite, et wright apparaît dans des mots comme playwright, dramaturge. Tous se prononcent /raɪt/." },
    { q: 'All we want is a bit of ___ and quiet.', options: ['peace', 'piece', 'peice', 'peese'], a: 0, why: "Peace veut dire paix et tranquillité. A piece, c'est un morceau de quelque chose, comme a piece of cake. Les deux se prononcent /piːs/." },
  ],
  pairs: [
    ['their', 'Leur, leurs'],
    ["they're", 'Ils sont, elles sont'],
    ["you're", 'Tu es'],
    ["it's", "C'est, ou il a (it is, it has)"],
    ['too', 'Aussi, ou trop'],
    ['whether', 'Si, entre deux choix'],
    ['buy', 'Acheter'],
    ['piece', 'Un morceau'],
  ],
  related: ['english-idioms', 'british-american', 'false-friends'],
};
