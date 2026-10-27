// German C1, unit 7 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u7',
  title: 'Voices, regions and register',
  goal: 'Recognise and choose the register and variety of German you need. Learn the levels from official to colloquial German, common idioms, the main differences in Austrian and Swiss German, and the meaning of modal particles in speech.',
  art: 'parrot',
  tags: { skills: ['vocabulary', 'grammar', 'reading', 'speaking'], topics: ['register', 'idioms', 'Austria', 'Switzerland', 'modal particles'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'Amtsdeutsch, Standard, Umgangssprache',
      about: 'Choose the right level of formality for the situation.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'German has three levels that you must choose between. **Amtsdeutsch** is the formal language of letters, laws and offices: it prefers nouns and passive forms. **Standard** language is neutral and works almost everywhere. **Umgangssprache** is colloquial and used with friends and family. The same message changes its form: *Ich bitte um Übersendung der Unterlagen* (formal), *Bitte schicken Sie mir die Unterlagen* (standard), *Schick mir mal die Sachen* (colloquial). Speaking is full of short forms such as *ich hab, gehste, nich*, but you should **not write them** in a formal text.' },
          { t: 'table', caption: 'Three levels', explain: ['head'], head: ['Formal (Amtsdeutsch)', 'Standard', 'Colloquial'], rows: [
            ['Ich bitte um Übersendung der Unterlagen.', 'Bitte schicken Sie mir die Unterlagen.', 'Schick mir mal die Sachen.'],
            ['Es ist nicht gestattet, hier zu parken.', 'Hier darf man nicht parken.', 'Hier kannst du nicht parken.'],
            ['Ich bedanke mich für Ihre Bemühungen.', 'Vielen Dank für Ihre Mühe.', 'Danke für die Mühe!'],
            ['Wir bedauern, Ihnen mitteilen zu müssen, dass …', 'Leider müssen wir Ihnen sagen, dass …', 'Tut mir leid, aber …'],
          ] },
          { t: 'tip', art: 'owl', md: 'Use **Sie** with strangers, with older people and in formal situations, and **du** with friends, family and children. Many workplaces use **du** for colleagues, especially in young companies. In most cases the **older** or **higher-ranking** person offers *du*. In Austria and Switzerland the rules are similar, but **du** is often used earlier among young people.' },
        ],
        [
          { t: 'examples', items: [
            { s: '**Ich bitte um Übersendung** der Unterlagen.', n: 'Formal.' },
            { s: '**Bitte schicken Sie mir** die Unterlagen.', n: 'Standard.' },
            { s: '**Schick mir mal** die Sachen.', n: 'Colloquial.' },
            { s: '**Es ist nicht gestattet**, hier zu parken.', n: 'Formal.' },
            { s: '**Hier kannst du nicht parken.**', n: 'Colloquial.' },
          ] },
          { t: 'ex', kind: 'sort', h: 'Which level is it? Sort the sentences.', groups: ['formal', 'standard', 'colloquial'], explain: ['groups'], items: [
            { s: 'Ich bitte um Übersendung der Unterlagen.', g: 0, why: 'Nouns and *ich bitte um*: formal.' },
            { s: 'Bitte schicken Sie mir die Unterlagen.', g: 1, why: 'Neutral and polite.' },
            { s: 'Schick mir mal die Sachen.', g: 2, why: '*Mal* and *Sachen*: colloquial.' },
            { s: 'Es ist nicht gestattet, hier zu parken.', g: 0, why: 'A formal prohibition.' },
            { s: 'Hier darf man nicht parken.', g: 1, why: 'Neutral.' },
            { s: 'Tut mir leid, aber …', g: 2, why: 'A short, colloquial apology.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the formal sentence with the standard one.', pairs: [
            ['Ich bitte um Übersendung der Unterlagen.', 'Bitte schicken Sie mir die Unterlagen.'],
            ['Es ist nicht gestattet, hier zu parken.', 'Hier darf man nicht parken.'],
            ['Ich bedanke mich für Ihre Bemühungen.', 'Vielen Dank für Ihre Mühe.'],
            ['Wir bedauern, Ihnen mitteilen zu müssen, dass …', 'Leider müssen wir Ihnen sagen, dass …'],
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right sentence.', items: [
            { q: 'You write to an authority. You say:', o: ['Ich bitte um Übersendung der Unterlagen.', 'Schick mir mal die Sachen.', 'Gib mir die Sachen.'], why: 'To an authority: formal.' },
            { q: 'You write to a close friend. You say:', o: ['Schick mir mal die Sachen.', 'Ich bitte um Übersendung der Sachen.', 'Es wird um Übersendung gebeten.'], why: 'To a friend: colloquial.' },
            { q: 'You speak to a new colleague you do not know. You say:', o: ['Bitte schicken Sie mir die Unterlagen.', 'Schick mir mal die Sachen.', 'Ich bitte um Übersendung der Unterlagen.'], why: 'Neutral and polite: standard.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Change the sentence to a more neutral level.', items: [
            { q: 'Ich bitte um Übersendung der Unterlagen.', cue: 'Bitte schicken Sie', a: ['Bitte schicken Sie mir die Unterlagen.'], why: 'The standard version.' },
            { q: 'Es ist nicht gestattet, hier zu parken.', cue: 'Hier darf man', a: ['Hier darf man nicht parken.'], why: 'The standard version.' },
            { q: 'Ich bedanke mich für Ihre Bemühungen.', cue: 'Vielen Dank', a: ['Vielen Dank für Ihre Mühe.'], why: 'The standard version.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Bitte schicken Sie mir die Unterlagen.', why: 'A polite request.' },
            { a: 'Hier darf man nicht parken.', why: '*Man darf nicht* + infinitive.' },
            { a: 'Vielen Dank für Ihre Mühe.', why: 'A polite thanks.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Redewendungen und Sprichwörter',
      about: 'Understand and use common idioms and proverbs.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'An **idiom** (Redewendung) has a meaning that you cannot guess from its words, so learn it as a whole: *Ich verstehe nur Bahnhof* does not mean that you want a station. It means *I do not understand anything*. Use idioms **sparingly**: one in a conversation is enough, and you should only use one that you are sure of. A **proverb** (Sprichwort) is a short sentence that states a general truth, such as *Übung macht den Meister*.' },
          { t: 'table', caption: 'Common idioms', explain: ['head', 'col1'], head: ['Idiom', 'Meaning', 'Example'], rows: [
            ['auf dem Schlauch stehen', 'not to get it', 'Ich stehe gerade auf dem Schlauch.'],
            ['Hals- und Beinbruch!', 'good luck', 'Hals- und Beinbruch für die Prüfung!'],
            ['den Nagel auf den Kopf treffen', 'to hit the nail on the head', 'Du hast den Nagel auf den Kopf getroffen.'],
            ['die Daumen drücken', 'to keep one’s fingers crossed', 'Ich drücke dir die Daumen.'],
            ['Das ist mir Wurst.', 'I do not care', 'Ob wir heute oder morgen gehen, ist mir Wurst.'],
            ['nur Bahnhof verstehen', 'to understand nothing', 'Ich verstehe nur Bahnhof.'],
            ['unter vier Augen', 'in private', 'Das besprechen wir unter vier Augen.'],
          ] },
          { t: 'tip', art: 'owl', md: '**Hals- und Beinbruch** is said **before** an exam or a performance, as a wish for luck: it is a joke that wishes the opposite. Do not translate idioms word for word: in English you *keep your fingers crossed*, but in German you **press your thumbs**. Some idioms sound **colloquial**: **Das ist mir Wurst** is for friends, not for a formal letter.' },
        ],
        [
          { t: 'table', caption: 'Proverbs', explain: ['head'], head: ['Sprichwort', 'Meaning'], rows: [
            ['Übung macht den Meister.', 'Practice makes perfect.'],
            ['Aller Anfang ist schwer.', 'Every beginning is hard.'],
            ['Wer rastet, der rostet.', 'If you stop, you fall behind.'],
            ['Ohne Fleiß kein Preis.', 'No reward without effort.'],
            ['Morgenstund hat Gold im Mund.', 'The early bird gets the worm.'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich **stehe** gerade **auf dem Schlauch**.', n: 'I do not get it.' },
            { s: '**Hals- und Beinbruch** für die Prüfung!', n: 'Good luck.' },
            { s: 'Du hast **den Nagel auf den Kopf getroffen**.', n: 'You are exactly right.' },
            { s: 'Ich **drücke** dir **die Daumen**.', n: 'I keep my fingers crossed.' },
            { s: 'Ob wir heute oder morgen gehen, **ist mir Wurst**.', n: 'I do not care.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the idiom with its meaning.', pairs: [
            ['auf dem Schlauch stehen', 'not to get it'],
            ['den Nagel auf den Kopf treffen', 'to be exactly right'],
            ['unter vier Augen', 'in private'],
            ['Das ist mir Wurst.', 'I do not care'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the idiom.', items: [
            { q: 'Ich verstehe nur ___.', a: ['Bahnhof'], why: 'The idiom is *nur Bahnhof verstehen*.' },
            { q: 'Du hast den Nagel auf den Kopf ___. (treffen)', a: ['getroffen'], why: 'The Partizip II of *treffen*.' },
            { q: 'Ich drücke dir die ___.', a: ['Daumen'], why: 'The idiom is *die Daumen drücken*.' },
            { q: 'Ich stehe gerade auf dem ___.', a: ['Schlauch'], why: 'The idiom is *auf dem Schlauch stehen*.' },
            { q: 'Hals- und ___ für die Prüfung!', a: ['Beinbruch'], why: 'The wish for luck.' },
            { q: 'Das ist mir ___.', a: ['Wurst'], why: 'The idiom means *I do not care*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right meaning.', items: [
            { q: 'Ich verstehe nur Bahnhof.', o: ['I do not understand anything.', 'I want to go to the station.', 'I understand everything.'], why: 'The idiom means *I understand nothing*.' },
            { q: 'Ich drücke dir die Daumen.', o: ['I wish you luck.', 'I hurt your thumbs.', 'I am angry with you.'], why: 'The idiom means *I wish you luck*.' },
            { q: 'Wer rastet, der rostet.', o: ['If you stop, you fall behind.', 'Rest is the best.', 'Iron rusts.'], why: 'A proverb about not stopping.' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
            { s: 'Ich drücke dir die [Hände].', a: ['Daumen'], why: 'The idiom is *die Daumen drücken*.' },
            { s: 'Er steht auf dem [Bahnhof].', a: ['Schlauch'], why: 'The idiom is *auf dem Schlauch stehen*.' },
            { s: 'Du hast den Nagel auf den [Hammer] getroffen.', a: ['Kopf'], why: 'The idiom is *den Nagel auf den Kopf treffen*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Ich drücke dir die Daumen.', why: 'Subject, verb, object, *die Daumen*.' },
            { a: 'Du hast den Nagel auf den Kopf getroffen.', why: 'The Perfekt with *haben*.' },
            { a: 'Das besprechen wir unter vier Augen.', why: 'The idiom at the end.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Österreich, die Schweiz und die kleinen Wörter',
      about: 'Recognise Austrian and Swiss usage, and understand modal particles.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'German is spoken in several countries, and each has its own **standard variety**. Austrian German uses its own words for many everyday things: *Jänner* for January, *Marille* for apricot, *Paradeiser* for tomato and *Erdäpfel* for potatoes. **Swiss Standard German** has words such as *Velo* (bicycle), *Billett* (ticket), *Trottoir* (pavement) and *Glace* (ice cream), and it writes **ss** instead of **ß**: *Strasse*. All of these are **correct** in their country. People greet each other differently too: *Servus* in Austria and Bavaria, *Grüezi* in Switzerland, *Moin* in the north of Germany.' },
          { t: 'table', caption: 'Germany, Austria, Switzerland', explain: ['head'], head: ['Germany', 'Austria', 'Switzerland'], rows: [
            ['Januar', 'Jänner', 'Januar'],
            ['Tomate', 'Paradeiser', 'Tomate'],
            ['Kartoffel', 'Erdäpfel', 'Kartoffel'],
            ['Fahrrad', 'Fahrrad', 'Velo'],
            ['Fahrkarte', 'Fahrkarte', 'Billett'],
            ['Gehweg', 'Gehsteig', 'Trottoir'],
            ['Eis', 'Eis', 'Glace'],
            ['Guten Tag / Hallo', 'Servus / Grüß Gott', 'Grüezi'],
          ] },
          { t: 'tip', art: 'owl', md: 'Learn **Standard German** first. Then, when you live or work in Austria or Switzerland, add the local words you hear. In Austria, **heuer** means *this year*, **Obers** means *cream* and **Topfen** means *quark*. In Switzerland, **parkieren** means *to park* and **merci** is used for *thank you*. People in Austria and Switzerland understand the German of Germany, and you will be understood in return.' },
        ],
        [
          { t: 'text', md: 'In speech, small words such as **ja, doch, mal, eben, halt, denn** and **schon** add a **feeling** to a sentence. They are called **modal particles** or **discourse particles**. **Ja** shows that something is known: *Du weißt ja, wie er ist.* **Doch** contradicts or reminds: *Das stimmt doch nicht!* **Mal** softens a request: *Komm mal her.* **Eben** and **halt** say that something cannot be changed: *Das ist eben so.* **Denn** shows interest in a question: *Wie geht’s dir denn?* **Schon** reassures: *Das wird schon gut gehen.*' },
          { t: 'table', caption: 'Modal particles', explain: ['head', 'col1'], head: ['Particle', 'Feeling', 'Example'], rows: [
            ['ja', 'something is known', 'Du weißt ja, wie er ist.'],
            ['doch', 'contradiction or reminder', 'Das stimmt doch nicht!'],
            ['mal', 'a softer request', 'Komm mal her.'],
            ['eben / halt', 'it cannot be changed', 'Das ist eben so. / Das ist halt so.'],
            ['denn', 'interest in a question', 'Wie geht’s dir denn?'],
            ['schon', 'reassurance', 'Das wird schon gut gehen.'],
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word with its standard German in Germany.', pairs: [
            ['Jänner', 'Januar'],
            ['Paradeiser', 'Tomate'],
            ['Velo', 'Fahrrad'],
            ['Trottoir', 'Gehweg'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Austrian or Swiss? Sort the words.', groups: ['mainly Austrian', 'mainly Swiss'], explain: ['groups'], items: [
            { s: 'Jänner', g: 0, why: 'The Austrian word for January.' },
            { s: 'Marille', g: 0, why: 'The Austrian word for apricot.' },
            { s: 'Paradeiser', g: 0, why: 'The Austrian word for tomato.' },
            { s: 'Velo', g: 1, why: 'The Swiss word for bicycle.' },
            { s: 'Billett', g: 1, why: 'The Swiss word for ticket.' },
            { s: 'Trottoir', g: 1, why: 'The Swiss word for pavement.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'In der Schweiz fährt man mit dem ___ zur Arbeit.', o: ['Velo', 'Billett', 'Trottoir'], why: '*Das Velo* is the Swiss word for bicycle.' },
            { q: 'Ein Österreicher kauft ___ auf dem Markt. (apricots)', o: ['Marillen', 'Erdäpfel', 'Paradeiser'], why: '*Die Marille* is the Austrian word for apricot.' },
            { q: 'Das stimmt ___ nicht! (contradiction)', o: ['doch', 'mal', 'eben'], why: '*Doch* contradicts.' },
            { q: 'Komm ___ her. (a softer request)', o: ['mal', 'doch', 'schon'], why: '*Mal* softens a request.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Write the modal particle.', items: [
            { q: 'Das ist ___ so. (it cannot be changed)', a: ['eben', 'halt'], why: '*Eben* and *halt* say that something cannot be changed.' },
            { q: 'Das stimmt ___ nicht!', a: ['doch'], why: '*Doch* contradicts.' },
            { q: 'Komm ___ her.', a: ['mal'], why: '*Mal* softens a request.' },
            { q: 'Das wird ___ gut gehen. (reassurance)', a: ['schon'], why: '*Schon* reassures.' },
            { q: 'Du weißt ___, wie er ist.', a: ['ja'], why: '*Ja* shows that it is known.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Soften the sentence with the word in brackets.', items: [
            { q: 'Komm her.', cue: 'Komm mal', a: ['Komm mal her.'], why: '*Mal* softens the request.' },
            { q: 'Wie geht es dir?', cue: 'Wie geht es dir', a: ['Wie geht es dir denn?'], why: '*Denn* shows interest.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Das wird schon gut gehen.', why: '*Schon* before the verb phrase.' },
            { a: 'Du weißt ja, wie er ist.', why: '*Ja* after the verb.' },
            { a: 'Das ist eben so.', why: '*Eben* after the verb.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'Drei Länder, ein Café',
      about: 'Read a conversation between friends from three countries.',
      art: 'parrot',
      spreads: [
        [
          { t: 'reading', title: 'Ein Gespräch im Café', md: 'Lena aus Hamburg, Felix aus Wien und Jonas aus Zürich treffen sich in einem Café in Berlin.\n\n„Servus!“, sagt Felix. „Grüezi“, antwortet Jonas lachend, „bei uns sagt man das.“ Lena bestellt einen Kaffee. „Ich nehme auch einen, aber mit Obers statt Milch“, sagt Felix. „Mit Sahne meinst du“, sagt Lena. „Heuer fahre ich übrigens im Jänner nach Spanien“, erzählt Felix. „Heuer? Du meinst dieses Jahr“, sagt Jonas. „Und ich komme mit dem Velo zur Arbeit, aber auf dem Trottoir darf man nicht fahren.“\n\nLena schüttelt den Kopf: „Ich verstehe nur Bahnhof! Aber das ist ja gerade das Schöne: Wir sprechen dieselbe Sprache und müssen doch manchmal nachfragen.“ Jonas fügt hinzu: „Das ist eben so. Hals- und Beinbruch für deine Reise, Felix.“ Felix lächelt: „Danke, du hast den Nagel auf den Kopf getroffen: Eine Sprache ist wie ein Haus mit vielen Türen.“' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Felix kommt aus Wien.', a: 't', why: '*Felix aus Wien.*' },
            { q: 'Jonas sagt Grüezi.', a: 't', why: '*Grüezi, antwortet Jonas.*' },
            { q: 'Lena versteht alle Wörter sofort.', a: 'f', why: '*Ich verstehe nur Bahnhof!*' },
            { q: 'Felix fährt im Jänner nach Italien.', a: 'f', why: '*Im Jänner nach Spanien.*' },
            { q: 'Jonas fährt mit dem Velo zur Arbeit.', a: 't', why: '*Ich komme mit dem Velo zur Arbeit.*' },
            { q: 'Lena hat Geschwister.', a: 'ng', why: 'The text does not say.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read again and choose.', items: [
            { q: 'Was ist Obers?', o: ['Sahne', 'Milch', 'Zucker'], why: '*Mit Sahne meinst du.*' },
            { q: 'Was bedeutet heuer?', o: ['Dieses Jahr.', 'Nächstes Jahr.', 'Letztes Jahr.'], why: '*Heuer? Du meinst dieses Jahr.*' },
            { q: 'Was meint Lena mit „Ich verstehe nur Bahnhof“?', o: ['Sie versteht nicht alles.', 'Sie sucht den Bahnhof.', 'Sie möchte gehen.'], why: 'The idiom means *I do not understand*.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the words that are typically Austrian or Swiss.', items: [
            { s: '„[Servus]!“, sagt Felix. „[Grüezi]“, antwortet Jonas.', why: '*Servus* is Austrian, *Grüezi* is Swiss.' },
            { s: 'Mit [Obers] statt Milch, [heuer] im [Jänner].', why: 'Three Austrian words.' },
            { s: 'Ich komme mit dem [Velo] zur Arbeit, aber auf dem [Trottoir] darf man nicht fahren.', why: 'Two Swiss words.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
            { q: 'Felix sagt „Servus“, Jonas sagt „___“.', a: ['Grüezi'], why: 'The Swiss greeting.' },
            { q: 'Obers ist in Deutschland die ___.', a: ['Sahne'], why: '*Obers* is Austrian for *Sahne*.' },
            { q: 'Lena: „Ich verstehe nur ___!“', a: ['Bahnhof'], why: 'The idiom.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Hals- und Beinbruch für deine Reise.', why: 'The wish for luck.' },
            { a: 'Eine Sprache ist wie ein Haus mit vielen Türen.', why: 'A comparison with *wie*.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Which sentence is formal?', o: ['Ich bitte um Übersendung der Unterlagen.', 'Schick mir mal die Sachen.', 'Schickst du mir die Sachen?'], why: '*Ich bitte um …* is formal.' },
      { q: 'In der Schweiz fährt man mit dem ___ zur Arbeit.', o: ['Velo', 'Billett', 'Trottoir'], why: '*Das Velo* is the Swiss word for bicycle.' },
      { q: 'Ich verstehe nur ___.', o: ['Bahnhof', 'Hauptbahnhof', 'Zug'], why: 'The idiom is *nur Bahnhof verstehen*.' },
      { q: 'Das stimmt ___ nicht! (contradiction)', o: ['doch', 'mal', 'eben'], why: '*Doch* contradicts.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Hals- und ___ für die Prüfung!', a: ['Beinbruch'], why: 'The wish for luck.' },
      { q: 'Du hast den Nagel auf den Kopf ___. (treffen)', a: ['getroffen'], why: 'The Partizip II of *treffen*.' },
      { q: 'Das ist ___ so. (it cannot be changed)', a: ['eben', 'halt'], why: '*Eben* and *halt* say that something cannot be changed.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word with its standard German.', pairs: [
      ['Jänner', 'Januar'],
      ['Marille', 'Aprikose'],
      ['Trottoir', 'Gehweg'],
    ] },
    { t: 'ex', kind: 'transform', h: 'Change the sentence to a more neutral level.', items: [
      { q: 'Ich bitte um Übersendung der Unterlagen.', cue: 'Bitte schicken Sie', a: ['Bitte schicken Sie mir die Unterlagen.'], why: 'The standard version.' },
      { q: 'Es ist nicht gestattet, hier zu parken.', cue: 'Hier darf man', a: ['Hier darf man nicht parken.'], why: 'The standard version.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write the right word.', items: [
      { s: 'Ich drücke dir die [Hände].', a: ['Daumen'], why: 'The idiom is *die Daumen drücken*.' },
      { s: 'Er steht auf dem [Bahnhof].', a: ['Schlauch'], why: 'The idiom is *auf dem Schlauch stehen*.' },
    ] },
  ],
};
