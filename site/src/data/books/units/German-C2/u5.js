// German C2, unit 5 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u5',
  title: 'Spoken German and regional voices',
  goal: 'Understand spoken German in its regional and informal forms. Learn modal particles and discourse markers, spoken contractions, and the vocabulary of Austria and Switzerland.',
  art: 'suitcase',
  tags: { skills: ['listening', 'vocabulary', 'reading'], topics: ['modal particles', 'discourse markers', 'spoken German', 'Austrian German', 'Swiss German', 'Mundart'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Doch, eben, mal, wohl',
      about: 'Understand modal particles and discourse markers.',
      art: 'suitcase',
      spreads: [
        [
          { t: 'text', md: '**Modal particles** (*Modalpartikeln*) are small words that colour a sentence with the speaker’s attitude. They are very common in speech and hard to translate. **Doch** contradicts or reminds: *Das ist doch klar!* **Eben** and **halt** show resignation: *Das ist eben so.* **Ja** appeals to shared knowledge: *Das ist ja interessant!* **Mal** softens a request: *Komm mal her.* **Denn** makes a question friendlier: *Was ist denn los?* **Wohl** means *probably*: *Er ist wohl krank.* **Schon** reassures: *Das schaffst du schon.*' },
          { t: 'table', caption: 'Modal particles', explain: ['head', 'col0'], head: ['Particle', 'What it adds', 'Example'], rows: [
            ['doch', 'contradiction or reminder', 'Das ist doch klar!'],
            ['eben / halt', 'resignation', 'Das ist eben so.'],
            ['ja', 'shared knowledge, surprise', 'Das ist ja interessant!'],
            ['mal', 'softens a request', 'Komm mal her.'],
            ['denn', 'friendly interest in a question', 'Was ist denn los?'],
            ['wohl', 'probably', 'Er ist wohl krank.'],
            ['schon', 'reassurance', 'Das schaffst du schon.'],
          ] },
        ],
        [
          { t: 'text', md: '**Discourse markers** organise speech: **also** (*so, well*), **na ja** (*well*, reluctant), **tja** (*well*, resigned), **ach so** (*oh, I see*), **genau** (*exactly*), **eigentlich** (*actually*). They fill pauses and show how you take what was said: *Also, ich weiß nicht.* *Na ja, es geht so.* *Tja, da kann man nichts machen.* A sentence without particles can sound **cold** or **abrupt** to a German ear.' },
          { t: 'tip', art: 'owl', md: 'You cannot translate particles word for word, so learn them **in whole sentences**. *Komm mal her* is friendly; *Komm her* is an order. *Was ist los?* sounds blunt; *Was ist denn los?* sounds concerned. Particles are **not used in formal writing**, but they are essential in speech and in dialogue.' },
          { t: 'ex', kind: 'match', h: 'Match the particle with what it adds.', pairs: [
            ['doch', 'contradiction or reminder'],
            ['eben', 'resignation'],
            ['mal', 'softens a request'],
            ['wohl', 'probably'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the particle that fits.', items: [
            { q: 'Das ist ___ klar! Das wussten wir alle. (a reminder)', o: ['doch', 'eben', 'wohl'], why: '*Doch* reminds or contradicts.' },
            { q: 'Komm ___ her! Ich möchte dir etwas zeigen. (friendly request)', o: ['mal', 'ja', 'wohl'], why: '*Mal* softens a request.' },
            { q: 'Er ist ___ krank; er ist heute nicht gekommen. (probably)', o: ['wohl', 'doch', 'eben'], why: '*Wohl* = probably.' },
            { q: 'Das ist ___ so: Wir können nichts ändern. (resignation)', o: ['eben', 'mal', 'denn'], why: '*Eben* shows resignation.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Friendly or blunt?', groups: ['friendly', 'blunt'], explain: ['groups'], items: [
            { s: 'Was ist denn los?', g: 0, why: '*Denn* softens the question.' },
            { s: 'Was ist los?', g: 1, why: 'Without a particle: direct.' },
            { s: 'Komm mal her.', g: 0, why: '*Mal* softens the request.' },
            { s: 'Komm her.', g: 1, why: 'An order.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a particle (doch, eben, mal, wohl, denn, ja).', items: [
            { q: 'Was ist ___ passiert? Du siehst so müde aus.', a: ['denn'], why: '*Denn* shows friendly interest.' },
            { q: 'Das ist ___ interessant! Das wusste ich nicht.', a: ['ja'], why: '*Ja* expresses surprise.' },
            { q: 'Kannst du mir ___ helfen?', a: ['mal'], why: '*Mal* softens a request.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make it friendlier with a particle.', items: [
            { q: 'Komm her.', cue: 'Komm', a: ['Komm mal her.'], why: '*Mal* softens the request.' },
            { q: 'Was ist los?', cue: 'Was ist', a: ['Was ist denn los?'], why: '*Denn* softens the question.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Haste, ham wir, nich',
      about: 'Understand spoken contractions and informal speech, and know when to use du and Sie.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'Spoken German shortens words. **Hast du** becomes **haste**, **bist du** becomes **biste**, **haben wir** becomes **ham wir**, **nicht** becomes **nich**, **so ein** becomes **so’n**, **eine** becomes **’ne**, **es** becomes **’s** (*gibt’s*, *wie geht’s*). **Ich habe** becomes **ich hab**. These forms are common in everyday conversation and in informal writing such as text messages, but **not in formal writing**.' },
          { t: 'table', caption: 'Spoken forms', explain: ['head', 'col0'], head: ['Written', 'Spoken', 'Meaning'], rows: [
            ['hast du', 'haste', 'have you'],
            ['bist du', 'biste', 'are you'],
            ['haben wir', 'ham wir', 'have we'],
            ['nicht', 'nich', 'not'],
            ['so ein', 'so’n', 'such a'],
            ['wie geht es', 'wie geht’s', 'how are you'],
          ] },
        ],
        [
          { t: 'text', md: 'The choice between **du** and **Sie** is also a matter of register. **Sie** is used with strangers, older people and in formal settings; **du** with family, friends, children and, increasingly, colleagues. In many workplaces and shops, **du** is common in young teams. In **Austria** and **Switzerland**, the same rules apply, with more formality in some settings. When in doubt, use **Sie** and wait for the other person to say *Wir können uns duzen*. **Taboo** language: understand it in films and conversation, but as a learner do not use it, especially in writing or at work.' },
          { t: 'tip', art: 'owl', md: 'When you **write** informally, you can use *hab ich*, *gibt’s* and *wie geht’s*. In an **exam essay** or an **email to a stranger**, write the full forms: *habe ich*, *gibt es*, *wie geht es Ihnen*. Spoken forms can look wrong on the page and are rarely accepted in formal writing.' },
          { t: 'ex', kind: 'match', h: 'Match the spoken form with the written form.', pairs: [
            ['haste', 'hast du'],
            ['ham wir', 'haben wir'],
            ['nich', 'nicht'],
            ['wie geht’s', 'wie geht es'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What does the speaker say in full?', items: [
            { q: '„Haste mal ’nen Euro?“', o: ['Hast du mal einen Euro?', 'Hast du einen Euros?', 'Haben Sie nicht einen Euro?'], why: '*Haste* = hast du; *’nen* = einen.' },
            { q: '„Ham wir noch Milch?“', o: ['Haben wir noch Milch?', 'Hat wir noch Milch?', 'Habt ihr noch Milch?'], why: '*Ham wir* = haben wir.' },
            { q: '„Das ist nich so einfach.“', o: ['Das ist nicht so einfach.', 'Das ist nie so einfach.', 'Das ist nicht ein einfach.'], why: '*Nich* = nicht.' },
            { q: '„Gibt’s hier ’ne Bäckerei?“', o: ['Gibt es hier eine Bäckerei?', 'Gibst du hier eine Bäckerei?', 'Gab es hier eine Bäckerei?'], why: '*Gibt’s* = gibt es; *’ne* = eine.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Informal speech or formal writing?', groups: ['informal speech', 'formal writing'], explain: ['groups'], items: [
            { s: 'Haste Zeit?', g: 0, why: 'A spoken contraction.' },
            { s: 'Haben Sie Zeit?', g: 1, why: 'Full form with *Sie*.' },
            { s: 'Wie geht’s?', g: 0, why: 'A spoken contraction.' },
            { s: 'Wie geht es Ihnen?', g: 1, why: 'Full and formal.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Write the sentence in full, formal German.', items: [
            { q: 'Haste mal ’nen Stift?', cue: 'Haben Sie', a: ['Haben Sie einen Stift?', 'Haben Sie vielleicht einen Stift?'], why: 'The formal question uses *Sie*.' },
            { q: 'Wie geht’s dir?', cue: 'Wie geht es', a: ['Wie geht es Ihnen?', 'Wie geht es dir?'], why: '*Geht’s* = geht es.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the contracted form.', items: [
            { q: '___ du Zeit? (hast du)', a: ['Haste'], why: '*Hast du* → *haste*.' },
            { q: 'Das ist ___ so einfach. (nicht)', a: ['nich'], why: '*Nicht* → *nich*.' },
            { q: '___ wir noch Milch? (haben wir)', a: ['Ham'], why: '*Haben wir* → *ham wir*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Jänner, Sackerl, Grüezi',
      about: 'Recognise the vocabulary of Austria and Switzerland.',
      art: 'ghost',
      spreads: [
        [
          { t: 'text', md: 'German is an official language in Germany, Austria and Switzerland, and each has its own vocabulary. In **Austria**, people say **Jänner** (*Januar*), **Sackerl** (*Tüte*), **Semmel** (*Brötchen*), **Erdäpfel** (*Kartoffeln*), **Paradeiser** (*Tomaten*), **heuer** (*dieses Jahr*), **Topfen** (*Quark*), **Obers** (*Sahne*). Greetings: **Servus** (*hello* or *goodbye*), **Grüß Gott**. In **Switzerland**, people say **Grüezi** (*hello*), **Merci** (*thank you*), **Velo** (*Fahrrad*), **Trottoir** (*Bürgersteig*), **Billett** (*Fahrkarte*), **Znüni** (*mid-morning snack*).' },
          { t: 'table', caption: 'Germany, Austria, Switzerland', explain: ['head', 'col0'], head: ['Germany', 'Austria', 'Switzerland'], rows: [
            ['Januar', 'Jänner', 'Januar'],
            ['Tüte', 'Sackerl', 'Sack, Tüte'],
            ['Brötchen', 'Semmel', 'Brötli'],
            ['Kartoffel', 'Erdäpfel', 'Härdöpfel'],
            ['Fahrrad', 'Fahrrad', 'Velo'],
            ['Bürgersteig', 'Gehsteig', 'Trottoir'],
            ['Hallo', 'Servus, Grüß Gott', 'Grüezi'],
          ] },
        ],
        [
          { t: 'text', md: 'In **Switzerland**, people speak **Mundart** (Swiss German dialects) in everyday life, but write and read **Swiss Standard German**, which uses **ss** instead of **ß**: *Strasse*, *Fuss*. In **Austria**, dialects are strong in the country; Standard Austrian German is used on the radio, in schools and in writing. In **Germany**, the dialects differ widely (Bavarian, Saxon, Low German). Standard German is understood everywhere, but listening to **dialect** takes practice.' },
          { t: 'tip', art: 'owl', md: 'You do **not** need to speak dialect. Aim to **understand** it, and write in **Standard German**. If you write for a **German** audience, use *Januar*, *Tüte*, *Brötchen*; if for an **Austrian** one, *Jänner* and *Sackerl* are natural. In **Switzerland**, never write **ß**: *Strasse*, *gross*. Do not mix varieties in one text.' },
          { t: 'ex', kind: 'match', h: 'Match the Austrian or Swiss word with the German one.', pairs: [
            ['Jänner', 'Januar'],
            ['Sackerl', 'Tüte'],
            ['Velo', 'Fahrrad'],
            ['Billett', 'Fahrkarte'],
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Which variety?', groups: ['Austria', 'Switzerland'], explain: ['groups'], items: [
            { s: 'Jänner', g: 0, why: 'January in Austria.' },
            { s: 'Velo', g: 1, why: 'Bicycle in Switzerland.' },
            { s: 'Sackerl', g: 0, why: 'Bag in Austria.' },
            { s: 'Trottoir', g: 1, why: 'Pavement in Switzerland.' },
            { s: 'Paradeiser', g: 0, why: 'Tomatoes in Austria.' },
            { s: 'Grüezi', g: 1, why: 'Swiss greeting.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'In Switzerland, “Billett” means…', o: ['ticket', 'bill', 'ballet'], why: '*Billett* = Fahrkarte.' },
            { q: 'In Austria, “heuer” means…', o: ['this year', 'last year', 'hear'], why: '*Heuer* = dieses Jahr.' },
            { q: 'In Swiss Standard German, “Straße” is written…', o: ['Strasse', 'Straße', 'Strase'], why: 'No *ß* in Switzerland.' },
            { q: 'In Austria, “Semmel” means…', o: ['bread roll', 'cream', 'semester'], why: '*Semmel* = Brötchen.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Rewrite for an Austrian reader.', items: [
            { q: 'Im Januar kaufe ich Kartoffeln und Tomaten.', cue: 'Im Jänner', a: ['Im Jänner kaufe ich Erdäpfel und Paradeiser.'], why: 'Austrian vocabulary.' },
            { q: 'Ich brauche eine Tüte für die Brötchen.', cue: 'Ich brauche ein', a: ['Ich brauche ein Sackerl für die Semmeln.'], why: 'Austrian *Sackerl* and *Semmeln*.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the lesson.', items: [
            { q: 'In der Schweiz fährt man mit dem ___ zur Arbeit. (bicycle)', a: ['Velo'], why: 'Swiss word for bicycle.' },
            { q: 'In Österreich beginnt das Jahr im ___. (January)', a: ['Jänner'], why: 'Austrian word for January.' },
            { q: 'In der Schweiz sagt man zur Begrüßung ___. (hello)', a: ['Grüezi'], why: 'Swiss greeting.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Vier Stimmen, vier Deutsch',
      about: 'Read a conversation between speakers from Germany, Austria and Switzerland.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Vier Stimmen, vier Deutsch', md: 'Lena (aus Hamburg), Markus (aus Wien), Nadine (aus Zürich) und Jonas (aus München) planen ein gemeinsames Wochenende.\n\nLENA: Haste Zeit am Samstag? Ich hab ’ne Idee. Was ist denn mit einer Wanderung?\n\nMARKUS: Servus, Lena! Das ist ja eine tolle Idee. Heuer war ich noch nie in den Bergen. Ich nehme ein Sackerl mit Semmeln mit.\n\nNADINE: Grüezi mitenand! Ich nehme das Velo bis zum Bahnhof und kaufe ein Billett. Znüni bringe ich auch mit.\n\nJONAS: Na ja, das ist eben das Problem bei mir: Ich bin wohl erst am Nachmittag fertig. Aber komm mal, wir finden schon eine Lösung.\n\nLENA: Genau! Wir ham ja noch Zeit. Also, abgemacht?' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Die vier Freunde planen ein gemeinsames Wochenende.', a: 't', why: '„Planen ein gemeinsames Wochenende.“' },
            { q: 'Lena schlägt eine Wanderung vor.', a: 't', why: '„Was ist denn mit einer Wanderung?“' },
            { q: 'Markus war dieses Jahr schon oft in den Bergen.', a: 'f', why: '„Heuer war ich noch nie in den Bergen.“' },
            { q: 'Nadine fährt mit dem Velo zum Bahnhof.', a: 't', why: '„Ich nehme das Velo bis zum Bahnhof.“' },
            { q: 'Jonas ist erst am Nachmittag fertig.', a: 't', why: '„Ich bin wohl erst am Nachmittag fertig.“' },
            { q: 'Die Wanderung findet im Schwarzwald statt.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Which word shows that Markus is Austrian?', o: ['Sackerl', 'Velo', 'Znüni'], why: '*Sackerl* is Austrian.' },
            { q: 'Which word shows that Nadine is Swiss?', o: ['Billett', 'Semmeln', 'heuer'], why: '*Billett* is Swiss.' },
            { q: 'Which words are modal particles in Lena’s first sentences?', o: ['denn and mal', 'Zeit and Samstag', 'Idee and Wanderung'], why: '*Denn* and *mal* soften the speech.' },
            { q: 'What does “Haste” stand for?', o: ['Hast du', 'Hat er', 'Haben wir'], why: 'A spoken contraction.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the word from the text with its meaning.', pairs: [
            ['heuer', 'this year'],
            ['Velo', 'bicycle'],
            ['Znüni', 'mid-morning snack'],
            ['Semmeln', 'bread rolls'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete with a word from the text.', items: [
            { q: 'Ich nehme ein ___ mit Semmeln mit. (Austrian: bag)', a: ['Sackerl'], why: 'Austrian word.' },
            { q: 'Ich nehme das ___ bis zum Bahnhof. (Swiss: bicycle)', a: ['Velo'], why: 'Swiss word.' },
            { q: 'Wir ___ ja noch Zeit. (spoken: haben)', a: ['ham'], why: 'Spoken contraction.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which speaker said it?', groups: ['Lena or Jonas', 'Markus or Nadine'], explain: ['groups'], items: [
            { s: 'Haste Zeit?', g: 0, why: 'Lena, from Germany.' },
            { s: 'Na ja, das ist eben das Problem.', g: 0, why: 'Jonas, from Germany.' },
            { s: 'Heuer war ich noch nie dort.', g: 1, why: 'Markus, from Austria.' },
            { s: 'Grüezi mitenand!', g: 1, why: 'Nadine, from Switzerland.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
      { q: 'Komm ___ her! (a friendly request)', o: ['mal', 'ja', 'wohl'], why: '*Mal* softens a request.' },
      { q: 'In Switzerland, “Velo” means…', o: ['bicycle', 'car', 'bus'], why: '*Velo* = Fahrrad.' },
      { q: '“Haste mal ’nen Euro?” means…', o: ['Hast du mal einen Euro?', 'Hat er einen Euro?', 'Haben wir einen Euro?'], why: '*Haste* = hast du.' },
      { q: 'In Austria, “Jänner” means…', o: ['January', 'June', 'July'], why: '*Jänner* = Januar.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the particle with what it adds.', pairs: [
      ['doch', 'contradiction or reminder'],
      ['eben', 'resignation'],
      ['wohl', 'probably'],
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentence.', items: [
      { q: 'Was ist ___ los? Du siehst traurig aus.', a: ['denn'], why: '*Denn* shows friendly interest.' },
      { q: 'In Österreich sagt man ___ für Tüte.', a: ['Sackerl'], why: 'Austrian word.' },
      { q: 'Das ist ___ nicht so einfach. (spoken: nicht)', a: ['nich'], why: '*Nicht* → *nich*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Rewrite, using the words given.', items: [
      { q: 'Komm her.', cue: 'Komm', a: ['Komm mal her.'], why: '*Mal* softens the request.' },
      { q: 'Im Januar kaufe ich Kartoffeln.', cue: 'Im Jänner', a: ['Im Jänner kaufe ich Erdäpfel.'], why: 'Austrian vocabulary.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mixture of varieties.', items: [
      { s: 'In der Schweiz wohne ich an der [Straße].', a: ['Strasse'], why: 'No *ß* in Swiss Standard German.' },
      { s: 'In Wien kaufe ich im [Januar] Erdäpfel und Paradeiser.', a: ['Jänner'], why: 'Austrian *Jänner* goes with Austrian vocabulary.' },
    ] },
  ],
};
