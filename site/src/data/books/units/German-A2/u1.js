// German A2, unit 1 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u1',
  title: 'Family and friends',
  goal: 'Talk about your family and friends and describe people. Learn the possessive articles and the Dativ after mit, bei and von.',
  art: 'dog',
  tags: { skills: ['grammar', 'vocabulary', 'reading'], topics: ['possessive-articles', 'dativ', 'family', 'describing-people'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'mein, dein, sein, ihr',
      about: 'Say who someone or something belongs to.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**Possessive articles** say who something belongs to: *mein Bruder* (my brother), *deine Schwester* (your sister). Every person has its own word. The ending depends on the noun after it, just like *ein* and *eine*.' },
          { t: 'table', caption: 'Possessive articles', explain: ['head'], quiz: true, head: ['Person', 'Possessive article'], rows: [
            ['ich', 'mein'],
            ['du', 'dein'],
            ['er', 'sein'],
            ['sie', 'ihr'],
            ['es', 'sein'],
            ['wir', 'unser'],
            ['ihr', 'euer'],
            ['sie', 'ihr'],
            ['Sie', 'Ihr'],
          ] },
          { t: 'tip', art: 'owl', md: '*sein* means his (for *er*) and its (for *es*). *ihr* means her (for *sie*) and their (for *sie*, plural). *Ihr* with a capital letter is the polite form: *Wie ist Ihr Name?*' },
        ],
        [
          { t: 'text', md: 'In the **Nominativ**, possessive articles have the same endings as *ein*: no ending before masculine and neuter nouns, **-e** before feminine and plural nouns. In the **Akkusativ**, only the masculine changes: **-en**.' },
          { t: 'table', caption: 'Endings of mein', explain: ['head', 'col0'], quiz: true, head: ['', 'Nominativ', 'Akkusativ'], rows: [
            ['masculine (der)', 'mein Vater', 'meinen Vater'],
            ['neuter (das)', 'mein Kind', 'mein Kind'],
            ['feminine (die)', 'meine Mutter', 'meine Mutter'],
            ['plural (die)', 'meine Eltern', 'meine Eltern'],
          ] },
          { t: 'examples', items: [
            { s: 'Das ist **mein** Bruder. Er heißt Tarek.', n: 'Nominativ, masculine: no ending.' },
            { s: 'Ich besuche **meinen** Bruder in Köln.', n: 'Akkusativ, masculine: *-en*.' },
            { s: '**Unsere** Tochter studiert in Graz.', n: 'Feminine: *-e*.' },
            { s: 'Wo wohnt **eure** Familie?', n: '*euer* loses its second *e* before an ending.' },
          ] },
          { t: 'tip', art: 'owl', md: '*euer* loses its second *e* when an ending follows: *euer Sohn*, but *eure Tochter* and *euren Sohn*. *unser* keeps its *e*: *unsere*, *unseren*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Which possessive article goes with each person?', pairs: [
            ['ich', 'mein'],
            ['du', 'dein'],
            ['er', 'sein'],
            ['wir', 'unser'],
            ['ihr', 'euer'],
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the right possessive article.', items: [
            { q: 'Lena hat einen Bruder. ___ Bruder heißt Jonas.', o: ['Ihr', 'Sein', 'Mein'], why: 'The brother belongs to Lena, a woman: *ihr*. *Bruder* is masculine, Nominativ: no ending.' },
            { q: 'Paul wohnt in Bern. ___ Schwester wohnt in Zürich.', o: ['Seine', 'Ihre', 'Sein'], why: 'Paul is a man: *sein*. *Schwester* is feminine: *seine*.' },
            { q: 'Wir haben zwei Kinder. ___ Kinder gehen schon zur Schule.', o: ['Unsere', 'Unser', 'Eure'], why: '*wir* → *unser*. Plural: *unsere*.' },
            { q: 'Herr Novak, ist das ___ Tasche?', o: ['Ihre', 'Ihr', 'deine'], why: 'Polite form: *Ihr* with a capital letter. *Tasche* is feminine: *Ihre*.' },
            { q: 'Tom und Mia, wo ist ___ Auto?', o: ['euer', 'eure', 'ihr'], why: 'You speak to two people (*ihr*): *euer*. *Auto* is neuter: no ending.' },
            { q: 'Meine Großeltern wohnen in Izmir. ___ Haus ist sehr alt.', o: ['Ihr', 'Sein', 'Ihre'], why: 'The house belongs to them (*sie*, plural): *ihr*. *Haus* is neuter: no ending.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the possessive article in the Akkusativ.', items: [
            { q: 'Ich rufe heute ___ Vater an. (mein)', a: ['meinen'], why: '*der Vater* is masculine. Akkusativ: *meinen*.' },
            { q: 'Hast du ___ Schlüssel? (dein)', a: ['deinen'], why: '*der Schlüssel* is masculine. Akkusativ: *deinen*.' },
            { q: 'Sara besucht am Wochenende ___ Eltern. (ihr)', a: ['ihre'], why: 'Plural: *ihre*. Only the masculine has *-en*.' },
            { q: 'Wir lieben ___ Hund. (unser)', a: ['unseren', 'unsren'], why: '*der Hund* is masculine. Akkusativ: *unseren*.' },
            { q: 'Kennt ihr ___ Nachbarin? (euer)', a: ['eure'], why: '*die Nachbarin* is feminine: *eure*, without the second *e*.' },
            { q: 'Herr Klein sucht ___ Handy. (sein)', a: ['sein'], why: '*das Handy* is neuter: no ending in the Akkusativ.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'My family',
      about: 'Family words, and describing people with sein and haben.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'These words help you talk about your family. Always learn the noun with its article.' },
          { t: 'table', caption: 'Die Familie', quiz: true, head: ['der', 'die'], rows: [
            ['der Vater', 'die Mutter'],
            ['der Sohn', 'die Tochter'],
            ['der Bruder', 'die Schwester'],
            ['der Großvater (Opa)', 'die Großmutter (Oma)'],
            ['der Onkel', 'die Tante'],
            ['der Cousin', 'die Cousine'],
            ['der Neffe', 'die Nichte'],
            ['der Mann', 'die Frau'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some words are only plural: *die Eltern* (mother and father), *die Geschwister* (brothers and sisters), *die Großeltern*. *Mein Mann* means my husband, and *meine Frau* means my wife.' },
        ],
        [
          { t: 'text', md: 'To describe people, use **sein** + adjective and **haben** + noun: *Er ist groß. Sie hat lange Haare.* *Haare* and *Augen* are plural, so an adjective before them ends in **-e**: *kurze Haare, braune Augen*.' },
          { t: 'table', caption: 'Describing people', explain: ['head'], head: ['sein + adjective', 'haben + noun'], rows: [
            ['groß / klein', 'lange / kurze Haare'],
            ['schlank', 'blonde / dunkle Haare'],
            ['jung / alt', 'blaue / braune / grüne Augen'],
            ['nett / lustig', 'einen Bart'],
            ['ruhig / freundlich', 'eine Brille'],
          ] },
          { t: 'examples', items: [
            { s: 'Meine Schwester **ist** klein und sehr lustig.', n: '*sein* + adjective: the adjective has no ending.' },
            { s: 'Mein Opa **hat** einen Bart und eine Brille.', n: '*haben* takes the Akkusativ: *einen Bart*.' },
            { s: 'Unsere Tochter **hat** lange, dunkle Haare.', n: 'Plural without an article: *-e*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the partner.', pairs: [
            ['der Bruder', 'die Schwester'],
            ['der Sohn', 'die Tochter'],
            ['der Onkel', 'die Tante'],
            ['der Neffe', 'die Nichte'],
            ['der Großvater', 'die Großmutter'],
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the adjectives.', items: [
            { s: 'Meine Tante ist [freundlich] und [lustig].', why: '*freundlich* and *lustig* describe the aunt. They come after *ist*, with no ending.' },
            { s: 'Mein Neffe hat [lange], [blonde] Haare.', why: 'Before the plural *Haare*, both adjectives end in *-e*.' },
            { s: 'Unser Opa ist schon [alt], aber sehr [fit].', why: '*alt* and *fit* describe the grandfather. *schon* and *sehr* are not adjectives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the family word.', items: [
            { q: 'Mein Vater und meine Mutter sind meine ___.', a: ['Eltern'], why: '*die Eltern*: father and mother.' },
            { q: 'Meine Tante hat einen Sohn. Er ist mein ___.', a: ['Cousin', 'Vetter'], why: 'The son of your aunt or uncle is your *Cousin*.' },
            { q: 'Mein Bruder hat eine Tochter. Sie ist meine ___.', a: ['Nichte'], why: 'The daughter of your brother or sister is your *Nichte*.' },
            { q: 'Meine Schwester hat einen Sohn. Er ist mein ___.', a: ['Neffe'], why: 'The son of your brother or sister is your *Neffe*.' },
            { q: 'Ich habe einen Bruder und zwei Schwestern. Ich habe drei ___.', a: ['Geschwister'], why: '*die Geschwister*: brothers and sisters together.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'sein or haben? Choose.', items: [
            { q: 'Mein Bruder ___ sehr groß und schlank.', o: ['ist', 'hat', 'sind'], why: 'Adjectives go with *sein*: *er ist*.' },
            { q: 'Meine Oma ___ kurze, graue Haare.', o: ['hat', 'ist', 'habt'], why: '*Haare* is a noun, so *haben*: *sie hat*.' },
            { q: 'Meine Eltern ___ sehr nett.', o: ['sind', 'haben', 'ist'], why: 'Adjective, so *sein*. *Meine Eltern* is plural: *sind*.' },
            { q: 'Herr Weber ___ einen Bart.', o: ['hat', 'ist', 'haben'], why: '*einen Bart* is a noun in the Akkusativ, so *haben*: *er hat*.' },
            { q: 'Unsere Kinder ___ blaue Augen.', o: ['haben', 'sind', 'hat'], why: '*Augen* is a noun, so *haben*. Plural: *haben*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'mit, bei, von + Dativ',
      about: 'Say who you are with, where you stay and who something is from.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'After **mit** (with), **bei** (at someone’s home, at a company) and **von** (from, of), the noun is in the **Dativ**. The article changes: *der* and *das* become **dem**, *die* becomes **der**, and the plural *die* becomes **den**.' },
          { t: 'table', caption: 'Dativ', explain: ['head', 'col0'], quiz: true, head: ['', 'the', 'a', 'my'], rows: [
            ['masculine', 'dem Bruder', 'einem Bruder', 'meinem Bruder'],
            ['neuter', 'dem Kind', 'einem Kind', 'meinem Kind'],
            ['feminine', 'der Tante', 'einer Tante', 'meiner Tante'],
            ['plural', 'den Kindern', 'Kindern', 'meinen Kindern'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the Dativ plural, the noun also gets an **-n**: *die Freunde → mit den Freunden*. Nouns that already end in *-n* or *-s* do not change: *mit meinen Eltern*, *mit den Autos*.' },
        ],
        [
          { t: 'text', md: 'Two short forms are very common: *bei dem* becomes **beim**, and *von dem* becomes **vom**: *Ich bin beim Arzt. Das ist eine Nachricht vom Chef.*' },
          { t: 'examples', items: [
            { s: 'Ich wohne noch **bei meinen** Eltern.', n: '*bei* + Dativ plural: *meinen Eltern*.' },
            { s: 'Am Sonntag gehe ich **mit meiner** Schwester ins Kino.', n: '*die Schwester → mit meiner Schwester*.' },
            { s: 'Das Geschenk ist **von meinem** Onkel.', n: '*der Onkel → von meinem Onkel*.' },
            { s: 'Sie arbeitet **bei einer** Bank.', n: '*bei* + a company: *bei einer Bank*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the Dativ form.', items: [
            { q: 'Ich fahre mit ___ Freundin nach Hamburg.', o: ['meiner', 'meine', 'meinem'], why: '*die Freundin* is feminine. Dativ: *meiner*.' },
            { q: 'Wir essen am Sonntag bei ___ Großeltern.', o: ['unseren', 'unsere', 'unserem'], why: 'Plural. Dativ: *unseren*.' },
            { q: 'Das ist eine Nachricht von ___ Sohn.', o: ['deinem', 'deinen', 'deiner'], why: '*der Sohn* is masculine. Dativ: *deinem*.' },
            { q: 'Mila wohnt bei ___ Tante.', o: ['ihrer', 'ihre', 'ihrem'], why: '*die Tante* is feminine. Dativ: *ihrer*.' },
            { q: 'Spielst du oft mit ___ Kindern?', o: ['deinen', 'deine', 'deinem'], why: 'Plural. Dativ: *deinen Kindern*, with *-n* on the noun too.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the word in the Dativ.', items: [
            { q: 'Ich gehe mit ___ Hund spazieren. (unser)', a: ['unserem', 'unserm'], why: '*der Hund* is masculine. Dativ: *unserem*.' },
            { q: 'Paul arbeitet bei ___ Firma in Dresden. (eine)', a: ['einer'], why: '*die Firma* is feminine. Dativ: *einer*.' },
            { q: 'Hast du ein Foto von ___ Familie? (dein)', a: ['deiner'], why: '*die Familie* is feminine. Dativ: *deiner*.' },
            { q: 'Sie spricht oft mit ___ Kollegen. (ihr, die Kollegen)', a: ['ihren'], why: 'Plural. Dativ: *ihren*.' },
            { q: 'Das Fahrrad ist von ___ Bruder. (mein)', a: ['meinem'], why: '*der Bruder* is masculine. Dativ: *meinem*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
            { a: 'Wohnst du noch bei deinen Eltern?', why: 'A yes/no question starts with the verb. *bei* + Dativ plural: *deinen Eltern*.' },
            { a: 'Mit wem fährst du in den Urlaub?', why: '*Mit wem* (with whom) goes first, then the verb.' },
            { a: 'Von wem ist das Geschenk?', why: '*Von wem* (from whom) goes first, then the verb.' },
            { a: 'Arbeitet dein Mann bei einer Bank?', why: 'The verb comes first, then the subject *dein Mann*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A family party',
      about: 'Read an email about a family celebration.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Ein Fest im Garten', md: 'Liebe Ana,\n\nvielen Dank für deine Nachricht! Am Samstag haben wir den 70. Geburtstag von meinem Vater gefeiert. Das Fest war bei meiner Schwester Nadia, denn ihr Haus hat einen großen Garten.\n\nDie ganze Familie war da: meine Eltern, meine Geschwister und unsere Tante Leyla mit ihrem Mann und ihren zwei Kindern. Mein Cousin Ali ist sogar mit dem Zug aus Wien gekommen. Meine Mutter hat einen Kuchen gebacken, und wir haben im Garten gegrillt.\n\nVon meinem Bruder und mir hat mein Vater ein Fahrrad bekommen. Er war sehr glücklich und ist gleich eine Runde gefahren!\n\nAm Abend haben wir alte Fotos angesehen. Auf einem Foto ist mein Vater 20 Jahre alt. Er hat lange, dunkle Haare und einen Bart. Heute hat er kurze, graue Haare.\n\nWie geht es deiner Familie? Schreib mir bald!\n\nLiebe Grüße\nSamira' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Das Fest war im Haus von Samiras Schwester.', a: 't', why: '*Das Fest war bei meiner Schwester Nadia.*' },
            { q: 'Samiras Cousin ist mit dem Auto gekommen.', a: 'f', why: 'Ali came by train: *mit dem Zug*.' },
            { q: 'Samiras Mutter hat einen Kuchen gekauft.', a: 'f', why: 'She baked it: *Meine Mutter hat einen Kuchen gebacken.*' },
            { q: 'Der Vater hat ein Fahrrad bekommen.', a: 't', why: 'The bike was a present from Samira and her brother.' },
            { q: 'Samiras Bruder hat zwei Kinder.', a: 'ng', why: 'The text says that Aunt Leyla has two children. It says nothing about the brother’s children.' },
            { q: 'Heute hat der Vater lange Haare.', a: 'f', why: '*Heute hat er kurze, graue Haare.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the email again and choose.', items: [
            { q: 'Tante Leyla ist mit „ihrem Mann“ gekommen. Wer ist das?', o: ['der Mann von Tante Leyla', 'der Mann von Samira', 'der Mann von Nadia'], why: '*Tante Leyla mit ihrem Mann*: *ihr* refers to Leyla.' },
            { q: 'Was hat der Vater von Samira und ihrem Bruder bekommen?', o: ['ein Fahrrad', 'einen Kuchen', 'ein Foto'], why: '*Von meinem Bruder und mir hat mein Vater ein Fahrrad bekommen.*' },
            { q: 'Was möchte Samira von Ana wissen?', o: ['Wie es Anas Familie geht.', 'Wo Anas Familie wohnt.', 'Wie alt Anas Vater ist.'], why: '*Wie geht es deiner Familie?* asks how the family is.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Das ist Ana. ___ Mann kommt aus Chile.', o: ['Ihr', 'Sein', 'Ihre'], why: 'Ana is a woman: *ihr*. *Mann* is masculine, Nominativ: no ending.' },
      { q: 'Ich besuche morgen ___ Onkel.', o: ['meinen', 'mein', 'meinem'], why: '*besuchen* takes the Akkusativ. *der Onkel*: *meinen*.' },
      { q: 'Wir fahren mit ___ Kindern ans Meer.', o: ['unseren', 'unsere', 'unser'], why: '*mit* + Dativ plural: *unseren*.' },
      { q: 'Mein Opa ___ eine Brille und einen Bart.', o: ['hat', 'ist', 'sind'], why: 'Nouns go with *haben*: *er hat*.' },
      { q: 'Kinder, wo sind ___ Schuhe?', o: ['eure', 'euer', 'euren'], why: 'You speak to the children (*ihr*). Plural: *eure*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Die Mutter von meiner Mutter ist meine ___.', a: ['Großmutter', 'Oma'], why: '*die Großmutter*, or *die Oma*.' },
      { q: 'Ich wohne bei ___ Freund. (mein)', a: ['meinem'], why: '*bei* + Dativ. *der Freund*: *meinem*.' },
      { q: 'Wie heißt ___ Schwester, Herr Lang? (Ihr)', a: ['Ihre'], why: 'Polite form. *die Schwester* is feminine: *Ihre*.' },
      { q: 'Meine Tante hat zwei Töchter. Sie sind meine ___.', a: ['Cousinen'], why: 'The daughters of your aunt are your *Cousinen*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Build the questions.', items: [
      { a: 'Wie heißt deine Schwester?', why: 'Question word, verb, subject.' },
      { a: 'Wohnt ihr bei euren Eltern?', why: 'The verb comes first. *bei* + Dativ plural: *euren Eltern*.' },
    ] },
    { t: 'ex', kind: 'spot', h: 'Tap the possessive article in the Dativ.', items: [
      { s: 'Ich spreche oft mit [meiner] Tante.', why: '*mit* + Dativ, feminine: *meiner*.' },
      { s: 'Das Buch ist von [unserem] Lehrer.', why: '*von* + Dativ, masculine: *unserem*.' },
      { s: 'Meine Eltern wohnen bei [ihrer] Tochter.', why: '*bei* + Dativ, feminine: *ihrer*. *Meine* is in the Nominativ.' },
    ] },
  ],
};
