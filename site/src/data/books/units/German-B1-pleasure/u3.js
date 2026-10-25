// German B1 for travel, unit 3 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u3',
  title: 'Food culture',
  goal: 'Talk about food, customs and local specialities.',
  art: 'pretzel',
  tags: { skills: ['vocabulary', 'speaking', 'reading', 'grammar'], topics: ['food', 'restaurant', 'tipping', 'passive', 'regional-dishes'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Tastes and regional dishes',
      about: 'Describe how food tastes and explain dishes from different regions.',
      art: 'croissant',
      spreads: [
        [
          { t: 'table', caption: 'Words for tastes and textures', explain: ['head', 'col1'], quiz: true, head: ['German', 'Meaning'], rows: [
            ['süß', 'sweet'],
            ['sauer', 'sour'],
            ['salzig', 'salty'],
            ['scharf', 'hot, spicy'],
            ['bitter', 'bitter'],
            ['würzig', 'full of flavour, well seasoned'],
            ['deftig', 'hearty and filling'],
            ['knusprig', 'crispy'],
            ['saftig', 'juicy'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say there is too much of a taste, use *zu*: *zu salzig*, *zu scharf*. To be polite about food you do not like, say *Das ist nicht ganz mein Geschmack.*' },
        ],
        [
          { t: 'table', caption: 'Regional dishes', explain: ['head', 'col2'], head: ['Dish', 'Region', 'What it is'], rows: [
            ['Maultaschen', 'Schwaben', 'pasta pockets, often filled with meat and spinach'],
            ['Käsespätzle', 'Schwaben, Allgäu', 'soft egg noodles with cheese and fried onions'],
            ['Weißwurst', 'Bayern', 'a white sausage, eaten with sweet mustard and a pretzel'],
            ['Labskaus', 'Norddeutschland', 'a mix of corned beef, potato and beetroot, often with a fried egg'],
            ['Currywurst', 'Berlin, Ruhrgebiet', 'a sausage with curry ketchup, often with chips'],
          ] },
          { t: 'tip', art: 'owl', md: 'Many regions are proud of their dishes. In Bavaria, people traditionally eat *Weißwurst* before noon. Ask a local: *Was ist hier typisch?*' },
        ],
        [
          { t: 'text', md: 'To explain a dish, say what is in it and how it is made. The **passive** helps here: *werden* + Partizip II. It puts the food in the centre, not the cook.' },
          { t: 'examples', items: [
            { s: 'Maultaschen **werden** mit Fleisch und Spinat **gefüllt**.', n: 'Present passive, plural: *werden* + *gefüllt*.' },
            { s: 'Die Weißwurst **wird** in heißem Wasser **erhitzt**.', n: 'Singular: *wird*. It is heated, not boiled.' },
            { s: 'Das ist ein Gericht, **das** man mit Kartoffeln **isst**.', n: 'A relative clause describes the dish. The verb goes to the end.' },
            { s: 'Der Kuchen schmeckt **nach** Zimt.', n: '*schmecken nach*: to taste of.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the descriptions.', items: [
            { q: 'Maultaschen ___ mit Fleisch und Spinat gefüllt. (werden)', a: ['werden'], why: '*Maultaschen* is plural: *werden*.' },
            { q: 'Der Kuchen wird mit Äpfeln ___. (backen)', a: ['gebacken'], why: 'Partizip II of *backen*: *gebacken*.' },
            { q: 'Die Spätzle werden mit Käse und Zwiebeln ___. (servieren)', a: ['serviert'], why: 'Verbs in *-ieren* have no *ge-*: *serviert*.' },
            { q: 'Das Fleisch ___ lange gekocht. (werden)', a: ['wird'], why: '*das Fleisch* is singular: *wird*.' },
            { q: 'Die Soße schmeckt ___ Knoblauch.', a: ['nach'], why: '*schmecken nach* + dative: to taste of.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the word that fits.', items: [
            { q: 'Zitronen schmecken ___.', o: ['sauer', 'süß', 'deftig'], why: 'Lemons are *sauer*.' },
            { q: 'Das Brot ist frisch aus dem Ofen und ganz ___.', o: ['knusprig', 'bitter', 'scharf'], why: 'Fresh bread has a crispy crust: *knusprig*.' },
            { q: 'Die Suppe hat zu viel Salz. Sie ist zu ___.', o: ['salzig', 'süß', 'scharf'], why: 'Too much salt: *zu salzig*.' },
            { q: 'Vorsicht, in der Soße ist viel Chili. Sie ist sehr ___.', o: ['scharf', 'sauer', 'knusprig'], why: 'Chili makes food *scharf*.' },
            { q: 'Ein Gericht mit Speck, Kartoffeln und Kraut ist ___.', o: ['deftig', 'süß', 'bitter'], why: 'Hearty, filling food is *deftig*.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Match the dish and the description.', pairs: [
            ['Maultaschen', 'Teigtaschen mit Fleisch und Spinat'],
            ['Käsespätzle', 'Nudeln mit Käse und Röstzwiebeln'],
            ['Weißwurst', 'eine weiße Wurst mit süßem Senf'],
            ['Labskaus', 'Corned Beef, Kartoffeln und Rote Bete'],
            ['Currywurst', 'eine Wurst mit Currysoße'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Customs at the table',
      about: 'Know the customs for ordering, paying, tipping and sharing a table.',
      art: 'pizza',
      spreads: [
        [
          { t: 'text', md: 'In many German restaurants you choose a free table yourself. In a busy beer garden, people often share a long table with strangers: just ask *Ist hier noch frei?* Each person usually orders their own dish.\n\nTap water is not always served automatically. If you want it, ask for *Leitungswasser*.' },
          { t: 'tip', art: 'owl', md: 'Before eating, people say *Guten Appetit!* At lunch at work you may also hear *Mahlzeit!* When people say *Prost!*, they often look each other in the eye.' },
        ],
        [
          { t: 'dialogue', title: 'Paying the bill', lines: [
            { who: 'Sofia', s: 'Entschuldigung, wir würden gern zahlen.' },
            { who: 'Kellnerin', s: 'Gern. Zusammen oder getrennt?' },
            { who: 'Sofia', s: 'Getrennt, bitte. Ich hatte die Käsespätzle und eine Apfelschorle.' },
            { who: 'Kellnerin', s: 'Das macht 16,80 €.' },
            { who: 'Sofia', s: 'Machen Sie 18, bitte.' },
            { who: 'Kellnerin', s: 'Danke schön. Und bei Ihnen?' },
            { who: 'Kwame', s: 'Den Schweinebraten und ein Bier. Kann ich mit Karte zahlen?' },
            { who: 'Kellnerin', s: 'Tut mir leid, bei uns geht nur Bargeld. Das sind 23,10 €.' },
            { who: 'Kwame', s: 'Kein Problem. Hier sind 25 Euro. Stimmt so.' },
          ] },
          { t: 'text', md: 'A tip of about five to ten percent is usual. You say the total you want to pay: *Machen Sie 18*. If you hand over the money and want no change, say *Stimmt so*. Some places take only cash.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Think about the dialogue. True or false?', items: [
            { q: 'Sofia und Kwame zahlen zusammen.', a: 'f', why: 'Sofia says *Getrennt, bitte*: they pay separately.' },
            { q: 'Sofia gibt 1,20 € Trinkgeld.', a: 't', why: 'The bill is 16,80 € and she pays 18 €.' },
            { q: 'Im Restaurant kann man mit Karte zahlen.', a: 'f', why: '*Bei uns geht nur Bargeld.*' },
            { q: 'Kwame möchte kein Wechselgeld.', a: 't', why: '*Stimmt so*: keep the change.' },
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
            { q: 'Zusammen oder ___?', a: ['getrennt'], why: 'The waiter asks if you pay together or separately.' },
            { q: 'Ein Glas ___, bitte. (tap water)', a: ['Leitungswasser'], why: '*das Leitungswasser*: water from the tap.' },
            { q: 'Im Restaurant gibt man oft fünf bis zehn Prozent ___. (tip)', a: ['Trinkgeld'], why: '*das Trinkgeld*: money for the service.' },
            { q: 'Kann ich mit ___ zahlen? (card)', a: ['Karte', 'Kreditkarte', 'EC-Karte'], why: '*mit Karte zahlen*, the opposite of *bar zahlen*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do you say?', items: [
            { q: 'Sie möchten bezahlen: ___', o: ['Wir würden gern zahlen.', 'Wir würden gern bestellen.', 'Wir sind satt.'], why: '*zahlen*: to pay. *bestellen* is for ordering food.' },
            { q: 'Die Rechnung ist 27,50 €. Sie möchten 30 € zahlen: ___', o: ['Machen Sie 30, bitte.', 'Geben Sie mir 30, bitte.', 'Es kostet 30.'], why: 'Say the total with the tip: *Machen Sie 30*.' },
            { q: 'Sie geben 20 € für 18,40 € und möchten kein Wechselgeld: ___', o: ['Stimmt so.', 'Das stimmt nicht.', 'Zusammen, bitte.'], why: '*Stimmt so*: keep the change.' },
            { q: 'Vor dem Essen: ___', o: ['Guten Appetit!', 'Gute Besserung!', 'Herzlichen Glückwunsch!'], why: '*Gute Besserung* is for someone who is ill; *Herzlichen Glückwunsch* is for a birthday.' },
            { q: 'Im vollen Biergarten, an einem langen Tisch: ___', o: ['Ist hier noch frei?', 'Ist das hier noch leer?', 'Sind Sie noch frei?'], why: 'You ask about a free seat: *Ist hier noch frei?*' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Reading: a day at the market',
      about: 'Read an article about a weekly food market.',
      art: 'snail',
      spreads: [
        [
          { t: 'reading', title: 'Samstags auf dem Markt', md: 'Jeden Samstag wird der Lindenplatz zu einem großen Markt. Schon um sieben Uhr bauen die ersten Händler ihre Stände auf, und ab acht kommen die Kunden. Viele kommen jede Woche, manche schon seit Jahrzehnten.\n\nAm Stand von Gül Aydın gibt es Obst und Gemüse aus der Region. „Im Winter verkaufe ich Kohl, Äpfel und Kartoffeln, im Sommer Erdbeeren und Tomaten“, erzählt sie. „Was gerade keine Saison hat, gibt es bei mir nicht.“ Ihre Kunden schätzen das: Die Ware ist frisch, und man weiß, woher sie kommt.\n\nNebenan verkauft Martin Kerner Käse von seinem Bauernhof im Allgäu. Er lässt die Kunden gern probieren. „Wer probiert hat, kauft meistens auch“, sagt er und lacht.\n\nDer Markt ist aber nicht nur ein Ort zum Einkaufen. Am Kaffeestand treffen sich Nachbarn, Familien frühstücken zusammen, und Touristen machen Fotos. Viele bleiben länger, als sie geplant hatten.\n\nEin Tipp für Besucher: Bringen Sie eine eigene Tasche und etwas Bargeld mit, denn nicht alle Stände nehmen Karten. Und kommen Sie früh, denn gegen Mittag sind die besten Sachen oft schon ausverkauft. Um 14 Uhr wird der Markt abgebaut.' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the article. True, false or not given?', items: [
            { q: 'Die Kunden kommen schon um sieben Uhr.', a: 'f', why: 'At seven the traders set up; the customers come from eight.' },
            { q: 'Gül Aydın verkauft im Winter Erdbeeren.', a: 'f', why: 'Strawberries are in summer. In winter she sells cabbage, apples and potatoes.' },
            { q: 'Bei Martin Kerner darf man den Käse probieren.', a: 't', why: '*Er lässt die Kunden gern probieren.*' },
            { q: 'Auf dem Markt kann man auch Kaffee trinken.', a: 't', why: 'There is a *Kaffeestand*.' },
            { q: 'Man kann an allen Ständen mit Karte zahlen.', a: 'f', why: '*nicht alle Stände nehmen Karten*.' },
            { q: 'Der Markt findet auch mittwochs statt.', a: 'ng', why: 'The article only talks about Saturdays.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'What do these words from the article mean?', items: [
            { q: 'Erdbeeren haben im Juni **Saison**. Das heißt: ___', o: ['Im Juni gibt es viele frische Erdbeeren.', 'Im Juni gibt es keine Erdbeeren.', 'Im Juni sind Erdbeeren sehr teuer.'], why: '*Saison haben*: it is the right time of year for it.' },
            { q: 'Der Käse ist **ausverkauft**. Das heißt: ___', o: ['Es ist kein Käse mehr da.', 'Der Käse ist sehr billig.', 'Der Käse ist ganz frisch.'], why: '*ausverkauft*: everything has been sold.' },
            { q: 'Die **Ware** ist frisch. *Ware* heißt hier: ___', o: ['die Sachen, die man verkauft', 'das Geld der Kunden', 'der Platz für den Stand'], why: '*die Ware*: the goods that are sold.' },
          ] },
          { t: 'ex', kind: 'spot', h: 'Tap the two parts of the passive.', items: [
            { s: 'Um 14 Uhr [wird] der Markt [abgebaut].', why: '*wird* + Partizip II *abgebaut*: someone takes the market down.' },
            { s: 'Die Erdbeeren [werden] jeden Morgen frisch vom Feld [gebracht].', why: '*werden* + *gebracht*: the plural passive.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'Labskaus ist ein Gericht aus ___.', o: ['Norddeutschland', 'Bayern', 'Schwaben'], why: '*Labskaus* comes from the north of Germany.' },
      { q: 'Die Rechnung ist 18,60 €. Sie sagen: ___', o: ['Machen Sie 20, bitte.', 'Geben Sie 20, bitte.', 'Stimmt nicht.'], why: 'Say the total with the tip: *Machen Sie 20*.' },
      { q: 'Viel Chili macht das Essen ___.', o: ['scharf', 'süß', 'knusprig'], why: 'Chili: *scharf*.' },
      { q: 'Zahlen Sie zusammen oder ___?', o: ['getrennt', 'allein', 'geteilt'], why: '*Zusammen oder getrennt?* is the usual question.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Maultaschen werden mit Fleisch und Spinat ___. (füllen)', a: ['gefüllt'], why: 'Passive: *werden* + Partizip II *gefüllt*.' },
      { q: 'Der Kuchen schmeckt ___ Zimt.', a: ['nach'], why: '*schmecken nach*: to taste of.' },
      { q: 'Hier sind 10 Euro. ___ so.', a: ['Stimmt'], why: '*Stimmt so*: keep the change.' },
      { q: 'Um 14 Uhr ___ der Markt abgebaut. (werden)', a: ['wird'], why: '*der Markt* is singular: *wird*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the taste and the example.', pairs: [
      ['süß', 'wie Zucker'],
      ['sauer', 'wie eine Zitrone'],
      ['bitter', 'wie starker Kaffee ohne Zucker'],
      ['knusprig', 'wie frisches Brot aus dem Ofen'],
    ] },
  ],
};
