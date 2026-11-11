// German A1, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Family and people',
  goal: 'Talk about your family, say how old people are and describe them simply. Learn haben, the numbers to 100, mein and dein, sein and ihr, and yes/no questions.',
  art: 'dog',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['family', 'haben', 'numbers', 'possessive-articles', 'describing-people', 'word-order', 'yes-no-questions'], goals: ['foundations'] },
  pages: [
    {
      id: 'p1',
      title: 'My family',
      about: 'The verb haben, family words and the numbers from 20 to 100.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'The verb **haben** (to have) is irregular with *du* and *er/sie/es*: *du hast, er hat*. To say you have a brother or a sister, learn these phrases: *Ich habe **einen** Bruder. Ich habe **eine** Schwester. Ich habe **ein** Kind.* Unit 3 explains why *ein* changes.' },
          { t: 'table', caption: 'haben', explain: ['head'], quiz: true, head: ['Person', 'Form of haben'], rows: [
            ['ich', 'habe'],
            ['du', 'hast'],
            ['er / sie / es', 'hat'],
            ['wir', 'haben'],
            ['ihr', 'habt'],
            ['sie / Sie', 'haben'],
          ] },
          { t: 'examples', items: [
            { s: 'Ich **habe** einen Bruder.', n: '*der Bruder*: after *haben*, say *einen*.' },
            { s: '**Hast** du Geschwister?', n: '*Geschwister* means brothers and sisters.' },
            { s: 'Sie **hat** eine Schwester.', n: '*die Schwester*: *eine*.' },
            { s: 'Wir **haben** zwei Kinder.', n: 'Plural: no *ein*.' },
          ] },
        ],
        [
          { t: 'text', md: 'Learn family words with *der* or *die*. Words for men and boys are *der*, words for women and girls are *die*. *das Kind* (the child) can be a boy or a girl.' },
          { t: 'table', caption: 'Die Familie', quiz: true, head: ['der', 'die'], rows: [
            ['der Vater', 'die Mutter'],
            ['der Sohn', 'die Tochter'],
            ['der Bruder', 'die Schwester'],
            ['der Opa', 'die Oma'],
            ['der Mann', 'die Frau'],
            ['der Onkel', 'die Tante'],
            ['der Partner', 'die Partnerin'],
          ] },
          { t: 'tip', art: 'owl', md: 'Some words are only plural: *die Eltern* (mother and father), *die Geschwister* (brothers and sisters), *die Großeltern* (grandparents). *Mein Mann* means my husband, and *meine Frau* means my wife.' },
        ],
        [
          { t: 'text', md: 'From 21, German says the small number first, then *und*, then the tens: *einundzwanzig* (one and twenty). It is one long word. To ask someone’s age, say *Wie alt bist du?* or *Wie alt sind Sie?*' },
          { t: 'table', caption: 'The tens', quiz: true, head: ['', ''], rows: [
            ['20', 'zwanzig'],
            ['30', 'dreißig'],
            ['40', 'vierzig'],
            ['50', 'fünfzig'],
            ['60', 'sechzig'],
            ['70', 'siebzig'],
            ['80', 'achtzig'],
            ['90', 'neunzig'],
            ['100', 'hundert'],
          ] },
          { t: 'examples', items: [
            { s: '21: einundzwanzig', n: '*eins* loses its *s*: *einundzwanzig*.' },
            { s: '35: fünfunddreißig', n: 'Five and thirty.' },
            { s: 'Wie alt bist du? – Ich bin achtundzwanzig.', n: 'In German you *are* an age: *ich bin*, not *ich habe*.' },
            { s: 'Wie alt ist Ihre Mutter? – Sie ist 67 Jahre alt.', n: 'Say *siebenundsechzig*. *Jahre alt* is optional.' },
          ] },
          { t: 'tip', art: 'owl', md: '30 is *dreißig*, with *ß* and no *z*. *sechzig* and *siebzig* are short: not *sechszig*, not *siebenzig*.' },
        ],
        [
          { t: 'ex', kind: 'conjugate', h: 'Write the forms of haben.', verb: 'haben', tense: 'present', rows: [
            ['ich', 'habe'], ['du', 'hast'], ['er / sie / es', 'hat'], ['wir', 'haben'], ['ihr', 'habt'], ['sie / Sie', 'haben'],
          ] },
          { t: 'ex', kind: 'match', h: 'Find the partner.', pairs: [
            ['der Vater', 'die Mutter'],
            ['der Sohn', 'die Tochter'],
            ['der Bruder', 'die Schwester'],
            ['der Opa', 'die Oma'],
            ['der Onkel', 'die Tante'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the number as a word.', items: [
            { q: 'Mein Opa ist ___ Jahre alt. (78)', a: ['achtundsiebzig'], why: 'Eight and seventy: *achtundsiebzig*.' },
            { q: 'Meine Mutter ist ___. (45)', a: ['fünfundvierzig'], why: 'Five and forty: *fünfundvierzig*.' },
            { q: 'Mein Bruder ist ___. (31)', a: ['einunddreißig'], why: '*eins* loses its *s*: *einunddreißig*.' },
            { q: 'Meine Tante ist ___ Jahre alt. (66)', a: ['sechsundsechzig'], why: '*sechs* + *und* + *sechzig*. *sechzig* has no *s* in the middle.' },
            { q: 'Meine Oma ist ___ Jahre alt! (100)', a: ['hundert', 'einhundert'], why: '100: *hundert* or *einhundert*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Choose the right word.', items: [
            { q: 'Meine Mutter und mein Vater sind meine ___.', o: ['Eltern', 'Geschwister', 'Kinder'], why: '*die Eltern*: mother and father.' },
            { q: 'Ich habe ___ Bruder.', o: ['einen', 'ein', 'eine'], why: '*der Bruder*: *Ich habe einen Bruder.*' },
            { q: 'Ich habe ___ Schwester.', o: ['eine', 'einen', 'ein'], why: '*die Schwester*: *Ich habe eine Schwester.*' },
            { q: 'Wie alt ___ du?', o: ['bist', 'hast', 'bin'], why: 'For age, German uses *sein*: *Wie alt bist du?*' },
            { q: 'Peter ___ zwei Kinder.', o: ['hat', 'hast', 'habt'], why: '*er hat*' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'mein, dein, sein, ihr',
      about: 'Say whose family it is: my, your, his and her.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: '**mein** (my) and **dein** (your) say who someone belongs to. Before a *die* noun or a plural noun, add **-e**: *meine Mutter, meine Eltern*. Before *der* and *das* nouns, there is no ending: *mein Vater, mein Kind*.' },
          { t: 'table', caption: 'my and your', explain: ['head'], quiz: true, head: ['Person', 'der / das', 'die / plural'], rows: [
            ['ich', 'mein', 'meine'],
            ['du', 'dein', 'deine'],
            ['Sie', 'Ihr', 'Ihre'],
          ] },
          { t: 'examples', items: [
            { s: 'Das ist **mein** Bruder Omar.', n: '*der Bruder*: no ending.' },
            { s: 'Das ist **meine** Schwester.', n: '*die Schwester*: *-e*.' },
            { s: 'Sind das **deine** Eltern?', n: 'Plural: *-e*.' },
            { s: 'Ist das **Ihre** Tochter, Frau Berg?', n: 'Polite: *Ihr* with a capital letter.' },
          ] },
        ],
        [
          { t: 'text', md: 'For a man, use **sein** (his). For a woman, use **ihr** (her). The endings are the same as for *mein*: *sein Bruder, seine Frau, ihr Sohn, ihre Kinder*.' },
          { t: 'table', caption: 'his and her', explain: ['head'], quiz: true, head: ['Person', 'der / das', 'die / plural'], rows: [
            ['er', 'sein', 'seine'],
            ['sie', 'ihr', 'ihre'],
          ] },
          { t: 'examples', items: [
            { s: 'Das ist Karim. **Sein** Vater kommt aus Ägypten.', n: 'Karim is a man: *sein*.' },
            { s: 'Karim und **seine** Frau wohnen in Bonn.', n: '*die Frau*: *seine*.' },
            { s: 'Das ist Lina. **Ihr** Bruder wohnt in Bern.', n: 'Lina is a woman: *ihr*.' },
            { s: '**Ihre** Eltern wohnen in Basel.', n: 'Plural: *ihre*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'The person decides between *sein* and *ihr*. Karim and his sister: *seine Schwester*. Lina and her brother: *ihr Bruder*. Careful: *sein* is also the verb *to be*.' },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the word in the right form.', items: [
            { q: 'Das ist ___ Mutter. (mein)', a: ['meine'], why: '*die Mutter*: *meine*.' },
            { q: 'Wie heißt ___ Bruder? (dein)', a: ['dein'], why: '*der Bruder*: no ending.' },
            { q: 'Das sind ___ Großeltern. (mein)', a: ['meine'], why: 'Plural: *meine*.' },
            { q: 'Wo wohnt ___ Tochter? (dein)', a: ['deine'], why: '*die Tochter*: *deine*.' },
            { q: 'Das ist ___ Kind. (mein)', a: ['mein'], why: '*das Kind*: no ending.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'His or her? Choose.', items: [
            { q: 'Tom hat eine Schwester. ___ Schwester heißt Mia.', o: ['Seine', 'Ihre', 'Sein'], why: 'Tom is a man: *sein*. *die Schwester*: *seine*.' },
            { q: 'Anna hat einen Sohn. ___ Sohn ist zehn.', o: ['Ihr', 'Sein', 'Ihre'], why: 'Anna is a woman: *ihr*. *der Sohn*: no ending.' },
            { q: 'Herr Klein, ist das ___ Frau?', o: ['Ihre', 'deine', 'Ihr'], why: 'Polite: *Ihr*. *die Frau*: *Ihre*.' },
            { q: 'Mira, sind das ___ Kinder?', o: ['deine', 'dein', 'Ihre'], why: 'Mira is a friend: *dein*. Plural: *deine*.' },
            { q: 'Paul und ___ Frau wohnen in Wien.', o: ['seine', 'sein', 'ihre'], why: 'Paul is a man: *sein*. *die Frau*: *seine*.' },
            { q: 'Lena und ___ Mann kommen aus Graz.', o: ['ihr', 'ihre', 'sein'], why: 'Lena is a woman: *ihr*. *der Mann*: no ending.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'mein or meine? Sort the words.', groups: ['mein', 'meine'], items: [
            { s: 'Vater', g: 0, why: '*der Vater*: *mein Vater*.' },
            { s: 'Mutter', g: 1, why: '*die Mutter*: *meine Mutter*.' },
            { s: 'Kind', g: 0, why: '*das Kind*: *mein Kind*.' },
            { s: 'Eltern', g: 1, why: 'Plural: *meine Eltern*.' },
            { s: 'Bruder', g: 0, why: '*der Bruder*: *mein Bruder*.' },
            { s: 'Schwester', g: 1, why: '*die Schwester*: *meine Schwester*.' },
            { s: 'Oma', g: 1, why: '*die Oma*: *meine Oma*.' },
            { s: 'Opa', g: 0, why: '*der Opa*: *mein Opa*.' },
          ] },
          { t: 'ex', kind: 'build', h: 'Build the sentence. Two words do not belong.', items: [
            { a: 'Das ist meine Schwester Hana.', extra: ['mein', 'sind'], why: '*die Schwester*: *meine*. One person: *ist*.' },
            { a: 'Lina und ihr Bruder wohnen in Bern.', extra: ['ihre', 'wohnt'], why: '*der Bruder*: *ihr*. Two people: *wohnen*.' },
            { a: 'Wie heißt deine Mutter?', extra: ['dein', 'heißen'], why: '*die Mutter*: *deine*. One person: *heißt*.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Wie ist dein Bruder?',
      about: 'Describe people, and ask yes/no questions.',
      art: 'dragon',
      spreads: [
        [
          { t: 'text', md: 'To describe people, use **sein** + adjective: *Mein Bruder ist groß.* After *sein*, the adjective has no ending. Small words make it stronger or softer: *sehr* (very), *ein bisschen* (a little), *nicht* (not).' },
          { t: 'table', caption: 'Adjectives', explain: ['head'], quiz: true, head: ['Adjective', 'Opposite'], rows: [
            ['groß', 'klein'],
            ['jung', 'alt'],
            ['nett', 'unfreundlich'],
            ['lustig', 'ernst'],
            ['ruhig', 'laut'],
            ['fleißig', 'faul'],
          ] },
          { t: 'examples', items: [
            { s: 'Meine Oma ist **sehr** nett.', n: '*sehr* makes it stronger.' },
            { s: 'Mein Opa ist alt, aber fit.', n: '*aber* means but.' },
            { s: 'Mein Sohn ist **ein bisschen** laut.', n: '*ein bisschen* makes it softer.' },
            { s: 'Meine Schwester ist **nicht** groß.', n: '*nicht* comes before the adjective.' },
          ] },
        ],
        [
          { t: 'text', md: 'In a German statement, the verb is always in **position 2**. Position 1 can be the subject or another word, for example *Heute* (today). In a question with a question word, the verb is also second. In a **yes/no question**, the verb comes **first**.' },
          { t: 'table', caption: 'Where is the verb?', explain: ['head', 'col0'], head: ['', 'Position 1', 'Position 2', 'Rest'], rows: [
            ['statement', 'Mein Bruder', 'ist', 'sehr nett.'],
            ['statement', 'Heute', 'besucht', 'Ali seine Oma.'],
            ['question word', 'Wie alt', 'ist', 'dein Bruder?'],
            ['yes/no question', 'Ist', 'dein Bruder', 'nett?'],
          ] },
          { t: 'examples', items: [
            { s: 'Ist dein Bruder groß? – Ja, er ist sehr groß.', n: 'The verb *ist* comes first.' },
            { s: 'Hast du Geschwister? – Ja, ich habe eine Schwester.', n: 'The verb *hast* comes first.' },
            { s: 'Wohnt deine Familie in Berlin? – Nein, in Hamburg.', n: 'Answer with *Ja* or *Nein*.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the answer, you do not repeat the name. Use *er* for a man and *sie* for a woman: *Ist Anna nett? – Ja, sie ist sehr nett.*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Find the opposite.', pairs: [
            ['groß', 'klein'],
            ['jung', 'alt'],
            ['laut', 'ruhig'],
            ['lustig', 'ernst'],
            ['fleißig', 'faul'],
          ] },
          { t: 'ex', kind: 'odd', h: 'Tap the odd one out.', items: [
            { o: ['Bruder', 'nett', 'lustig', 'ruhig'], why: '*Bruder* is a noun. The others are adjectives.' },
            { o: ['Mutter', 'Vater', 'Sohn', 'Bruder'], why: '*Mutter* is a woman (*die*). The others are men (*der*).' },
            { o: ['wohnt', 'jung', 'alt', 'groß'], why: '*wohnt* is a verb. The others are adjectives.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'Mein Vater ist sehr lustig.', why: 'The verb *ist* is in position 2.' },
            { a: 'Ist deine Schwester groß?', why: 'A yes/no question: the verb comes first.' },
            { a: 'Heute besucht Ali seine Oma.', why: '*Heute* is in position 1, so the verb *besucht* comes next, then *Ali*.' },
            { a: 'Wie alt ist dein Bruder?', why: '*Wie alt* first, then the verb.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Make a yes/no question.', items: [
            { q: 'Dein Bruder ist nett.', a: ['Ist dein Bruder nett?'], why: 'Put the verb *ist* first.' },
            { q: 'Sie hat Geschwister.', a: ['Hat sie Geschwister?'], why: 'Put the verb *hat* first.' },
            { q: 'Deine Eltern wohnen in Köln.', a: ['Wohnen deine Eltern in Köln?'], why: 'Put the verb *wohnen* first.' },
            { q: 'Du sprichst Englisch.', a: ['Sprichst du Englisch?'], why: 'Put the verb *sprichst* first.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'Ist dein Opa alt?', o: ['Ja, er ist 85.', 'Ja, sie ist 85.', 'Ja, ich bin 85.'], why: '*der Opa* is a man: *er*.' },
            { q: 'Wie ist deine Schwester?', o: ['Sie ist sehr lustig.', 'Sie ist meine Schwester.', 'Sie heißt Rosa.'], why: '*Wie ist …?* asks what a person is like. *Wie heißt …?* asks for the name.' },
            { q: 'Sind deine Eltern nett?', o: ['Ja, sie sind sehr nett.', 'Ja, er ist sehr nett.', 'Ja, sie ist sehr nett.'], why: '*die Eltern* is plural: *sie sind*.' },
            { q: 'Hast du Geschwister?', o: ['Ja, einen Bruder.', 'Ja, ich bin Bruder.', 'Nein, ich bin nett.'], why: 'A short answer: *Ja, (ich habe) einen Bruder.*' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the verb.', items: [
            { s: 'Meine Kinder [sind] sehr lustig.', why: 'The verb *sind* is in position 2.' },
            { s: '[Hast] du Geschwister?', why: 'A yes/no question: the verb *hast* is first.' },
            { s: 'Am Sonntag [kommen] meine Eltern.', why: '*Am Sonntag* is position 1, so the verb *kommen* is second.' },
          ] },
        ],
      ],
    },
    {
      id: 'p4',
      title: 'A family photo',
      about: 'Read a message with a family photo.',
      art: 'pretzel',
      spreads: [
        [
          { t: 'reading', title: 'Meine Familie', md: 'Hallo Rosa,\n\nhier ist ein Foto. Das ist meine Familie!\n\nIn der Mitte sind meine Eltern. Mein Vater heißt Samir. Er ist 58 Jahre alt und sehr lustig. Meine Mutter heißt Nora. Sie ist 55. Sie ist ein bisschen ruhig, aber sehr nett.\n\nLinks ist mein Bruder Tarek. Er ist 30 und wohnt in Hamburg. Seine Frau heißt Mia. Sie kommt aus Dänemark und spricht Dänisch, Englisch und Deutsch. Tarek und Mia haben einen Sohn, Leo. Leo ist drei Jahre alt. Er ist klein, aber sehr laut!\n\nRechts bin ich. Und der Hund? Das ist Bello. Er ist schon zwölf Jahre alt.\n\nHast du auch ein Familienfoto?\n\nLiebe Grüße\nLeila' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'Leilas Vater ist 58 Jahre alt.', a: 't', why: '*Mein Vater heißt Samir. Er ist 58 Jahre alt.*' },
            { q: 'Leilas Mutter ist sehr laut.', a: 'f', why: 'Her mother is a little quiet: *ein bisschen ruhig*.' },
            { q: 'Tarek wohnt in Hamburg.', a: 't', why: '*Er ist 30 und wohnt in Hamburg.*' },
            { q: 'Mia kommt aus Deutschland.', a: 'f', why: 'Mia comes from Denmark: *aus Dänemark*.' },
            { q: 'Leo hat eine Schwester.', a: 'ng', why: 'The message says nothing about a sister for Leo.' },
            { q: 'Der Hund ist jung.', a: 'f', why: 'Bello is twelve: *schon zwölf Jahre alt*. For a dog, that is old.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the message again and choose.', items: [
            { q: 'Wer ist Mia?', o: ['die Frau von Tarek', 'die Mutter von Leila', 'die Schwester von Leila'], why: '*Seine Frau heißt Mia*: she is Tarek’s wife.' },
            { q: 'Wie ist Leo?', o: ['klein und laut', 'groß und ruhig', 'alt und lustig'], why: '*Er ist klein, aber sehr laut!*' },
            { q: 'Wie viele Sprachen spricht Mia?', o: ['drei', 'zwei', 'vier'], why: 'Danish, English and German: three languages.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Who is who? Write the family word.', items: [
            { q: 'Samir ist Leilas ___.', a: ['Vater'], why: '*Mein Vater heißt Samir.*' },
            { q: 'Tarek ist Leilas ___.', a: ['Bruder'], why: '*Links ist mein Bruder Tarek.*' },
            { q: 'Leo ist der ___ von Tarek und Mia.', a: ['Sohn'], why: '*Tarek und Mia haben einen Sohn, Leo.*' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Wie alt ___ du?', o: ['bist', 'hast', 'bin'], why: 'For age, German uses *sein*: *du bist*.' },
      { q: 'Mein Bruder ___ zwei Kinder.', o: ['hat', 'hast', 'habt'], why: '*er hat*' },
      { q: 'Das ist Lisa. ___ Vater kommt aus Polen.', o: ['Ihr', 'Sein', 'Ihre'], why: 'Lisa is a woman: *ihr*. *der Vater*: no ending.' },
      { q: 'Das ist Ben. ___ Schwester ist sehr nett.', o: ['Seine', 'Sein', 'Ihre'], why: 'Ben is a man: *sein*. *die Schwester*: *seine*.' },
      { q: '___ deine Mutter Deutsch?', o: ['Spricht', 'Sprichst', 'Sprechen'], why: 'A yes/no question: the verb comes first. *deine Mutter* is *sie*: *spricht*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Write the missing word.', items: [
      { q: 'Meine Mutter ist ___ Jahre alt. (43)', a: ['dreiundvierzig'], why: 'Three and forty: *dreiundvierzig*.' },
      { q: 'Hallo Omar! Wie heißt ___ Sohn? (dein)', a: ['dein'], why: '*der Sohn*: no ending.' },
      { q: 'Die Mutter und der Vater sind die ___.', a: ['Eltern'], why: '*die Eltern*: mother and father.' },
      { q: 'Das sind ___ Großeltern. (mein)', a: ['meine'], why: 'Plural: *meine*.' },
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'Hast du Geschwister?', why: 'A yes/no question: the verb comes first.' },
      { a: 'Meine Oma ist sehr lustig.', why: 'The verb *ist* is in position 2.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make a yes/no question.', items: [
      { q: 'Deine Schwester spricht Spanisch.', a: ['Spricht deine Schwester Spanisch?'], why: 'Put the verb *spricht* first.' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find the mistake and write it correctly.', items: [
      { s: 'Ich [habe] 25 Jahre alt.', a: ['bin'], why: 'For age, German uses *sein*: *Ich bin 25.*' },
      { s: 'Das ist [mein] Mutter.', a: ['meine'], why: '*die Mutter*: *meine*.' },
    ] },
  ],
};
