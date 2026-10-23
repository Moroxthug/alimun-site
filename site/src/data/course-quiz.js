// Level quiz for the course pages: an adaptive quiz. Each language has three
// fill-in questions per level from A1 to C1; the first option listed is the correct one
// (the page shuffles them). The result is an estimate only.
export const QUIZ = {
  English: {
    A1: [
      ['She ___ a teacher.', ['is', 'are', 'am', 'be']],
      ['I ___ coffee every morning.', ['drink', 'drinks', 'drinking', 'am drink']],
      ["They ___ from Spain.", ["are", "is", "am", "be"]],
    ],
    A2: [
      ['Yesterday we ___ to the cinema.', ['went', 'go', 'gone', 'going']],
      ["There isn't ___ milk in the fridge.", ['any', 'some', 'many', 'a']],
      ["This is the ___ restaurant in town.", ["best", "better", "most good", "goodest"]],
    ],
    B1: [
      ['If it rains tomorrow, we ___ at home.', ['will stay', 'stay', 'would stay', 'stayed']],
      ["I've lived here ___ 2019.", ['since', 'for', 'from', 'during']],
      ["She asked me where I ___.", ["lived", "live", "do live", "did live"]],
    ],
    B2: [
      ['By the time we arrived, the film ___.', ['had already started', 'already started', 'has already started', 'was already start']],
      ['I wish I ___ more time to travel.', ['had', 'have', 'will have', 'am having']],
      ["He denied ___ the window.", ["breaking", "to break", "break", "broke"]],
    ],
    C1: [
      ["It's high time we ___ a decision.", ['made', 'make', 'will make', 'have made']],
      ['Not only ___ late, but he also forgot the tickets.', ['did he arrive', 'he arrived', 'he did arrive', 'arrived he']],
      ["___ I known about the delay, I would have taken a later train.", ["Had", "If", "Should", "Were"]],
    ],
  },
  German: {
    A1: [
      ['Ich ___ aus Italien.', ['komme', 'kommst', 'kommt', 'kommen']],
      ['Das ist ___ Buch.', ['ein', 'eine', 'einen', 'einer']],
      ["Wir ___ heute Abend Pizza.", ["essen", "isst", "esse", "esst"]],
    ],
    A2: [
      ['Gestern ___ ich ins Kino gegangen.', ['bin', 'habe', 'war', 'hatte']],
      ['Ich gebe ___ Mann das Geld.', ['dem', 'der', 'den', 'des']],
      ["Ich habe keine Zeit, ___ ich arbeiten muss.", ["weil", "denn", "aber", "dass"]],
    ],
    B1: [
      ['Ich weiß nicht, ob er morgen ___.', ['kommt', 'kommen', 'komme', 'gekommen']],
      ['Das ist die Frau, ___ ich gestern gesehen habe.', ['die', 'der', 'den', 'deren']],
      ["Ich interessiere mich ___ Musik.", ["für", "auf", "an", "über"]],
    ],
    B2: [
      ['Wenn ich mehr Zeit ___, würde ich reisen.', ['hätte', 'habe', 'hatte', 'haben']],
      ['Trotz ___ Regens sind wir spazieren gegangen.', ['des', 'der', 'dem', 'den']],
      ["Das Problem ___ gestern im Meeting besprochen.", ["wurde", "wird", "hat", "ist"]],
    ],
    C1: [
      ['Er tat so, als ___ er nichts gehört.', ['hätte', 'hat', 'habe', 'hatte']],
      ['___ der hohen Kosten wurde das Projekt fortgesetzt.', ['Trotz', 'Wegen', 'Dank', 'Statt']],
      ["Hätte ich das gewusst, ___ ich früher gekommen.", ["wäre", "hätte", "würde", "bin"]],
    ],
  },
  French: {
    A1: [
      ['Je ___ italien.', ['suis', 'es', 'est', 'sommes']],
      ['Nous ___ à Paris.', ['habitons', 'habitez', 'habitent', 'habite']],
      ["Elle ___ deux frères.", ["a", "as", "ont", "avons"]],
    ],
    A2: [
      ['Hier, je ___ allé au cinéma.', ['suis', 'ai', 'étais', 'vais']],
      ["Il n'y a pas ___ pain.", ['de', 'du', 'des', 'le']],
      ["Je me ___ à sept heures tous les jours.", ["lève", "lèves", "levons", "lever"]],
    ],
    B1: [
      ["Si j'avais le temps, je ___ plus.", ['voyagerais', 'voyage', 'voyagerai', 'voyageais']],
      ["C'est le livre ___ je t'ai parlé.", ['dont', 'que', 'qui', 'où']],
      ["Quand j'étais petit, je ___ souvent à la plage.", ["allais", "suis allé", "irai", "vais"]],
    ],
    B2: [
      ['Il faut que tu ___ tes devoirs.', ['fasses', 'fais', 'feras', 'faisais']],
      ["Bien qu'il ___ fatigué, il est sorti.", ['soit', 'est', 'était', 'sera']],
      ["Il est parti sans que je le ___.", ["sache", "sais", "saurai", "savais"]],
    ],
    C1: [
      ['Si j\'avais su, je ne ___ pas venu.', ['serais', 'suis', 'serai', 'sois']],
      ["Les lettres qu'il a ___ sont arrivées.", ['écrites', 'écrit', 'écrite', 'écrits']],
      ["Quoi qu'il ___, je te soutiendrai.", ["arrive", "arrivera", "arrivait", "est arrivé"]],
    ],
  },
  Spanish: {
    A1: [
      ['Yo ___ italiano.', ['soy', 'eres', 'es', 'somos']],
      ['¿Dónde ___ el baño?', ['está', 'es', 'hay', 'están']],
      ["Nosotros ___ en Milán.", ["vivimos", "vivís", "viven", "vivo"]],
    ],
    A2: [
      ['Ayer ___ al cine con mis amigos.', ['fui', 'voy', 'iba', 'iré']],
      ['Me ___ mucho el chocolate.', ['gusta', 'gustan', 'gusto', 'gustas']],
      ["Mañana ___ a llover.", ["va", "vas", "voy", "van"]],
    ],
    B1: [
      ['Cuando ___ niño, vivía en Roma.', ['era', 'fui', 'estaba', 'sería']],
      ['Espero que ___ un buen viaje.', ['tengas', 'tienes', 'tendrás', 'tenías']],
      ["Hace dos años que ___ español.", ["estudio", "estudié", "estudiaba", "estudiaré"]],
    ],
    B2: [
      ['Si ___ más dinero, compraría una casa.', ['tuviera', 'tengo', 'tendría', 'tenía']],
      ['Busco un piso que ___ cerca del centro.', ['esté', 'está', 'estará', 'estaba']],
      ["Me alegro de que ___ venido.", ["hayas", "has", "habías", "habrás"]],
    ],
    C1: [
      ['Si me lo hubieras dicho, te ___ ayudado.', ['habría', 'había', 'habré', 'he']],
      ['Por mucho que ___, no lo conseguirás.', ['insistas', 'insistes', 'insistirás', 'insistías']],
      ["De haberlo sabido, ___ antes.", ["habría venido", "vendría", "había venido", "vine"]],
    ],
  },
  Portuguese: {
    A1: [
      ['Eu ___ italiano.', ['sou', 'és', 'é', 'somos']],
      ['Ela ___ dois irmãos.', ['tem', 'têm', 'tenho', 'temos']],
      ["Nós ___ em Roma.", ["moramos", "moram", "mora", "moro"]],
    ],
    A2: [
      ['Ontem nós ___ ao cinema.', ['fomos', 'vamos', 'íamos', 'iremos']],
      ['Este livro é ___.', ['meu', 'minha', 'meus', 'minhas']],
      ["O João é ___ alto do que o irmão.", ["mais", "muito", "tão", "bem"]],
    ],
    B1: [
      ['Quando eu era criança, ___ na praia todos os verões.', ['brincava', 'brinquei', 'brinco', 'brincarei']],
      ['Espero que você ___ bem.', ['esteja', 'está', 'estará', 'estava']],
      ["Ainda não ___ o filme.", ["vi", "vejo", "verei", "via"]],
    ],
    B2: [
      ['Se eu ___ mais tempo, aprenderia a tocar piano.', ['tivesse', 'tenho', 'terei', 'tinha']],
      ['Quando ___ tempo, vamos almoçar juntos.', ['tivermos', 'temos', 'teremos', 'tínhamos']],
      ["Talvez ele ___ amanhã.", ["venha", "vem", "virá", "viria"]],
    ],
    C1: [
      ['Embora ___ cansado, continuou a trabalhar.', ['estivesse', 'estava', 'esteja', 'estará']],
      ['Se tivéssemos saído mais cedo, não ___ o voo.', ['teríamos perdido', 'perdíamos', 'tínhamos perdido', 'perderemos']],
      ["Se não ___ chovido, teríamos ido à praia.", ["tivesse", "tinha", "teria", "houve"]],
    ],
  },
  Italian: {
    A1: [
      ['Lei ___ una studentessa.', ['è', 'sono', 'sei', 'siamo']],
      ['Noi ___ a Roma.', ['abitiamo', 'abitate', 'abitano', 'abito']],
      ['Ho ___ fratello e due sorelle.', ['un', 'una', 'uno', 'dei']],
    ],
    A2: [
      ['Ieri Maria ___ andata al cinema.', ['è', 'ha', 'era', 'sarà']],
      ['Questo libro è ___ interessante di quello.', ['più', 'molto', 'troppo', 'così']],
      ['A che ora ti ___ la mattina?', ['svegli', 'sveglia', 'sveglio', 'svegliamo']],
    ],
    B1: [
      ['Quando ero piccolo, ___ spesso al mare.', ['andavo', 'sono andato', 'andrò', 'vado']],
      ['Penso che lui ___ ragione.', ['abbia', 'ha', 'avrà', 'aveva']],
      ['Il libro ___ ti ho parlato è esaurito.', ['di cui', 'che', 'il quale', 'dove']],
    ],
    B2: [
      ['Se avessi tempo, ___ di più.', ['viaggerei', 'viaggio', 'viaggerò', 'viaggiavo']],
      ['Benché ___ stanco, è uscito lo stesso.', ['fosse', 'era', 'è', 'sarà']],
      ['Mi ha chiesto se ___ venire alla festa.', ['volessi', 'voglio', 'vorrò', 'vorresti']],
    ],
    C1: [
      ["Se l'avessi saputo, ___ prima.", ['sarei venuto', 'verrei', 'venni', 'sono venuto']],
      ['Qualunque cosa ___, ti sosterrò.', ['accada', 'accade', 'accadrà', 'accadeva']],
      ['Non appena ___ la notizia, ci chiamò.', ['ebbe saputo', 'ha saputo', 'sapeva', 'saprà']],
    ],
  },
};

// Short description shown with the estimated level (same wording as the levels section).
export const LEVEL_TEXT = {
  A1: "Capisci e usi espressioni quotidiane e frasi molto semplici, sai presentarti e fare domande su informazioni personali, se l'altra persona parla lentamente e con chiarezza.",
  A2: 'Comunichi in situazioni semplici e abituali, come la famiglia, gli acquisti, il lavoro e il luogo in cui vivi, e descrivi con parole semplici il tuo ambiente.',
  B1: 'Te la cavi nella maggior parte delle situazioni che si incontrano in viaggio, racconti esperienze, progetti e desideri e spieghi brevemente le tue opinioni.',
  B2: 'Capisci le idee principali di testi complessi, anche tecnici nel tuo campo, e parli con una scioltezza che rende naturale la conversazione con chi parla la lingua da sempre.',
  C1: 'Usi la lingua in modo flessibile ed efficace per la vita sociale, lo studio e il lavoro, e scrivi testi chiari e ben strutturati su argomenti complessi.',
};
