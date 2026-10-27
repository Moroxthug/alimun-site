// English C1 for travel, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Englishes of the world',
  goal: 'Understand and talk about the varieties and accents of English you hear when you travel.',
  art: 'teacup',
  tags: { skills: ['listening', 'speaking', 'vocabulary', 'reading'], topics: ['british-american-english', 'varieties-of-english', 'spelling', 'vague-language', 'fillers', 'ellipsis', 'accents'], goals: ['pleasure'] },
  pages: [
    {
      id: 'p1',
      title: 'Lift or elevator?',
      about: 'Notice differences in vocabulary, spelling and usage between varieties of English.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'English is spoken as a first language in many countries and as a shared language in many more, so there is no single correct English. The best-known differences are between **British** and **American** English, but you will also hear Australian, Irish, Indian, Nigerian, Singaporean and many other varieties. Most differences are small and rarely cause real problems, but a few words can surprise you.' },
          { t: 'table', caption: 'Everyday travel words', explain: ['head'], head: ['British English', 'American English'], rows: [
            ['a return ticket', 'a round-trip ticket'],
            ['a single ticket', 'a one-way ticket'],
            ['the underground', 'the subway'],
            ['a lift', 'an elevator'],
            ['a queue', 'a line'],
            ['the bill (in a restaurant)', 'the check'],
            ['petrol', 'gas'],
            ['the ground floor', 'the first floor'],
          ] },
        ],
        [
          { t: 'text', md: 'Some differences are in **spelling** and **grammar**. British English tends to keep *-our*, *-re* and a double *l* before an ending; American English uses *-or*, *-er* and often a single *l*. Both varieties use *-ize* in many words, though *-ise* is more common in Britain. In grammar, the differences are mostly about preferences, not rules.' },
          { t: 'examples', items: [
            { s: 'We’re **travelling** to the **centre** to see the **theatre**. / We’re **traveling** to the **center** to see the **theater**.', n: 'British, then American spelling.' },
            { s: '**Have you eaten** yet? / **Did you eat** yet?', n: 'With *yet* and *just*, American speakers often use the past simple; British speakers prefer the present perfect.' },
            { s: 'What are you doing **at the weekend**? / What are you doing **on the weekend**?', n: 'British *at*, American *on*.' },
            { s: 'She’s **in hospital**. / She’s **in the hospital**.', n: 'British English often leaves out *the* here.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Other varieties have their own words. In Australia you may hear *arvo* for *afternoon*; in Ireland, *grand* often means *fine* or *OK*, not *magnificent*; in Scotland, *wee* means *small*; in India, *prepone* means *bring forward to an earlier time*. If a word confuses you, simply ask: *Sorry, what does that mean here?*' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the British and American words.', pairs: [
            ['a flat', 'an apartment'],
            ['a motorway', 'a highway'],
            ['a holiday', 'a vacation'],
            ['a chemist’s', 'a drugstore'],
            ['a mobile', 'a cell phone'],
          ] },
          { t: 'ex', kind: 'sort', h: 'Is the spelling British or American?', groups: ['British', 'American'], explain: ['groups'], items: [
            { s: 'colour', g: 0, why: 'British English keeps *-our*.' },
            { s: 'center', g: 1, why: 'American English uses *-er*.' },
            { s: 'traveller', g: 0, why: 'British English doubles the *l* before an ending.' },
            { s: 'neighbor', g: 1, why: 'American English uses *-or*.' },
            { s: 'catalogue', g: 0, why: 'British English keeps *-ue*; American English often writes *catalog*.' },
            { s: 'jewelry', g: 1, why: 'British English writes *jewellery*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Choose the best answer.', items: [
            { q: 'In a New York hotel, you take the elevator to the first floor. You are:', o: ['at street level', 'one floor above street level', 'in the basement'], why: 'In American English, the *first floor* is the floor at street level.' },
            { q: 'An Irish friend says the hostel was *grand*. She means it was:', o: ['fine', 'huge and luxurious', 'too expensive'], why: 'In Irish English, *grand* often means *fine* or *OK*.' },
            { q: 'An Indian colleague says the meeting has been *preponed*. It is now:', o: ['earlier', 'later', 'cancelled'], why: '*Prepone* is the opposite of *postpone*: move to an earlier time.' },
            { q: 'In London, someone asks you for a *single*. They want:', o: ['a one-way ticket', 'a room for one night', 'a coin'], why: 'A *single* ticket takes you there but not back.' },
            { q: 'Which sentence is typical of American English?', o: ['I just ate, thanks.', 'I’ve just eaten, thanks.', 'I’m just eaten, thanks.'], why: 'With *just*, American speakers often use the past simple.' },
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Sort of, kind of, -ish',
      about: 'Understand and use the vague language, fillers and short forms of relaxed speech.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'In relaxed conversation, native speakers are often **deliberately vague**. They do not always want to sound exact, or they cannot remember a word. Understanding this vague language makes a huge difference when you listen to people in hostels, cafés and trains, and using a little of it makes you sound less formal.' },
          { t: 'table', caption: 'Vague language', explain: ['head', 'col1'], head: ['Phrase', 'What it does', 'Example'], rows: [
            ['sort of / kind of', 'makes a word less exact', 'It’s sort of a hostel, but with private rooms.'],
            ['-ish', 'about, not exactly', 'Let’s meet at sevenish. The water was greenish.'],
            ['or so / give or take', 'an approximate number', 'It’s twenty minutes or so on foot.'],
            ['and stuff / and things like that', 'there are more things of the same type', 'We went swimming and hiking and stuff.'],
            ['whatsit / thingy', 'a thing whose name you have forgotten', 'Have you got the thingy for the charger?'],
          ] },
        ],
        [
          { t: 'text', md: 'Speakers also use **fillers** to gain time or guide the listener, and they often drop words that are obvious from the situation. This is called **ellipsis**: *Want a coffee?* instead of *Do you want a coffee?*, *Sounds good* instead of *That sounds good*.' },
          { t: 'dialogue', title: 'In the kitchen of a hostel', lines: [
            { who: 'Callum', s: 'Morning. Want some coffee? There’s loads.' },
            { who: 'Ayumi', s: 'Oh, lovely, thanks. Been here long?' },
            { who: 'Callum', s: 'A week or so. I mean, I was only meant to stay three nights, but, you know, it’s that kind of place.' },
            { who: 'Ayumi', s: 'I can see why. Anything worth doing round here?' },
            { who: 'Callum', s: 'Well, there’s a sort of food market by the river. Opens tenish. Cheap noodles and stuff.' },
            { who: 'Ayumi', s: 'Sounds good. Mind if I tag along?' },
            { who: 'Callum', s: 'Not at all. Anyway, I’ll be leaving in twenty minutes, give or take.' },
          ] },
          { t: 'tip', art: 'cat', md: '*I mean* corrects or explains what you have just said. *You know* asks the listener to understand without more detail. *Anyway* changes the subject or returns to the main point. *Well* gives you a moment to think before you answer.' },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the word that fits.', items: [
            { q: 'The bus takes forty minutes or ___, depending on the traffic.', o: ['so', 'such', 'more'], why: '*Or so* makes a number approximate.' },
            { q: 'Let’s have dinner at eight-___. I’ll text you when I’m ready.', o: ['ish', 'like', 'some'], why: '*-ish* added to a time means *about*.' },
            { q: 'We just sat on the beach and read books and ___.', o: ['stuff', 'stuffs', 'thing'], why: '*And stuff* is uncountable: never *stuffs*.' },
            { q: 'It wasn’t a proper hotel. It was ___ of a guesthouse above a bar.', o: ['sort', 'type', 'like'], why: '*Sort of a* + noun: a vague description.' },
            { q: 'The trip was too long. ___, I didn’t enjoy the first day at all.', o: ['I mean', 'Anyway', 'Give or take'], why: '*I mean* explains or adds detail to what you have just said.' },
          ] },
          { t: 'ex', kind: 'transform', h: 'Write the full sentence, without ellipsis.', items: [
            { q: 'Want a lift to the station?', cue: 'Do', a: ['Do you want a lift to the station?'], why: 'In speech, *Do you* is often dropped at the start of a question.' },
            { q: 'Been to the castle yet?', cue: 'Have', a: ['Have you been to the castle yet?'], why: '*Have you* is dropped: only the participle is left.' },
            { q: 'Sounds like a great plan.', cue: 'That', a: ['That sounds like a great plan.', 'It sounds like a great plan.'], why: 'The subject *That* or *It* is dropped because it is obvious.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the filler with what it does.', pairs: [
            ['I mean', 'explains or corrects what you have just said'],
            ['you know', 'asks the listener to understand without more detail'],
            ['anyway', 'returns to the main point or ends the topic'],
            ['well', 'gives you a moment before you answer'],
          ] },
          { t: 'ex', kind: 'gap', h: 'Complete with one word from this page.', items: [
            { q: 'It’s about two hundred kilometres, give or ___.', a: ['take'], why: '*Give or take*: approximately.' },
            { q: 'I can’t remember what it’s called. Pass me the ___, the thing for opening bottles.', a: ['thingy', 'whatsit', 'thing'], why: '*Thingy* or *whatsit*: a thing whose name you have forgotten.' },
            { q: 'Mind if I tag ___? I’d love to see the market too.', a: ['along'], why: '*Tag along*: go with someone, often without being invited.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'Whose English is it?',
      about: 'Read an article about accents and identity and follow the writer’s view.',
      art: 'owl',
      spreads: [
        [
          { t: 'reading', title: 'Whose English is it?', md: 'When Grace started working at a hotel reception in Edinburgh, a guest asked her, kindly but with obvious surprise, where she had learned such good English. Grace, who grew up in Accra, was not sure how to reply. “I grew up speaking English,” she says. “At home, at school, everywhere. It’s my language as much as anyone’s.”\n\nHer experience is a reminder that English no longer belongs to any one country. Today, far more people use it as a second or additional language than as a first one, and conversations in English between two people who are not native speakers are completely ordinary. In many places, English has developed its own words, rhythms and expressions, which reflect local life rather than imitate London or New York.\n\nAccents are where people’s attitudes show most clearly. Some learners spend years trying to sound like a newsreader, and feel they have failed if a listener can tell where they come from. Yet linguists generally agree that an accent is not a mistake. Everyone has one, including the newsreader. What matters for communication is not whether you sound “native”, but whether people can understand you, and whether you can understand them.\n\nThat second part is often forgotten. Travellers who have only heard one variety of English in class can be thrown by the first fast conversation in a Glasgow pub or a Sydney market. The answer is not to worry but to listen widely: podcasts, films and radio from different parts of the English-speaking world train the ear surprisingly quickly.\n\nGrace now has a polite answer ready for guests who ask about her English. “I tell them it comes from Ghana,” she says, “and that there’s plenty more where that came from.”' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'True, false or not given?', items: [
            { q: 'The guest who spoke to Grace was rude to her.', a: 'f', why: 'The guest asked “kindly”, though with surprise.' },
            { q: 'Grace learned English as an adult.', a: 'f', why: 'She grew up speaking English at home and at school.' },
            { q: 'According to the article, most users of English are not native speakers.', a: 't', why: '“Far more people use it as a second or additional language than as a first one.”' },
            { q: 'The writer thinks learners should try to sound like a newsreader.', a: 'f', why: 'The article says an accent is not a mistake; being understood is what matters.' },
            { q: 'Grace has visited Sydney.', a: 'ng', why: 'Sydney is mentioned as an example, not in connection with Grace.' },
            { q: 'The writer recommends listening to many varieties of English.', a: 't', why: '“The answer is … to listen widely.”' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Look at the language of the article.', items: [
            { q: '“It’s my language as much as anyone’s.” Grace means:', o: ['English belongs to her as fully as to anyone else', 'she speaks English better than other people', 'she prefers English to her other languages'], why: '*As much as anyone’s*: she has the same right to it as anyone.' },
            { q: 'Travellers “can be **thrown** by the first fast conversation”. *Thrown* means:', o: ['confused and unsure what to do', 'physically pushed', 'excited'], why: 'Informally, *be thrown by something* means it confuses you.' },
            { q: 'What is the writer’s main point about accents?', o: ['Everyone has one, and being understood matters more than sounding native.', 'Learners should lose their accents as soon as possible.', 'Some accents are more correct than others.'], why: 'The third paragraph says an accent is not a mistake.' },
            { q: '“There’s plenty more where that came from.” Grace is saying, with humour, that:', o: ['many people in Ghana speak English like her', 'she has many more questions for the guest', 'she will soon leave the hotel'], why: 'The phrase means *there is a lot more of the same in that place*.' },
          ] },
          { t: 'ex', kind: 'memory', h: 'Find the pairs: British and American words.', pairs: [
            ['lift', 'elevator'],
            ['queue', 'line'],
            ['petrol', 'gas'],
            ['bill', 'check'],
            ['underground', 'subway'],
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the correct answer.', items: [
      { q: 'In American English, a *round-trip ticket* is:', o: ['a return ticket', 'a ticket for a tour of the city', 'a single ticket'], why: '*Round-trip* means there and back.' },
      { q: 'Which spelling is American?', o: ['theater', 'theatre', 'theatere'], why: 'American English uses *-er*; British English *-re*.' },
      { q: 'We’ll be there at nine-___, depending on the traffic.', o: ['ish', 'like', 'so'], why: '*-ish* after a time means *about*.' },
      { q: '“I didn’t like the hostel. ___, it was clean, but the beds were awful.”', o: ['I mean', 'Anyway', 'Give or take'], why: '*I mean* explains and adds detail.' },
      { q: 'In Irish English, *How was the room? Grand.* means it was:', o: ['fine', 'enormous', 'very expensive'], why: 'In Ireland, *grand* often means *fine*.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete each sentence with one word.', items: [
      { q: 'The walk takes an hour or ___.', a: ['so'], why: '*Or so* makes the number approximate.' },
      { q: 'In British English you wait in a queue; in American English you wait in ___.', a: ['line'], why: 'American English: *wait in line*.' },
      { q: 'What are you doing ___ the weekend? (British English)', a: ['at'], why: 'British *at the weekend*, American *on the weekend*.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Write the full sentence, without ellipsis.', items: [
      { q: 'Seen the new exhibition?', cue: 'Have', a: ['Have you seen the new exhibition?'], why: '*Have you* is dropped in relaxed speech.' },
      { q: 'Need any help with your bags?', cue: 'Do', a: ['Do you need any help with your bags?'], why: '*Do you* is dropped at the start.' },
    ] },
    { t: 'ex', kind: 'tf', h: 'True or false?', items: [
      { q: 'According to the article, an accent is a kind of mistake.', a: 'f', why: 'The article says that an accent is not a mistake and everyone has one.' },
      { q: '*And stuff* means there are more things of the same type.', a: 't', why: '*We went swimming and stuff*: and other similar activities.' },
    ] },
  ],
};
