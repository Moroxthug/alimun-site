// English A1, unit 3, second edition (docs/LESSONS_PLAN.md, "Books, second edition"). Draft for the owner's review.
export const UNIT = {
  id: 'u3',
  title: 'My day',
  goal: 'Say what you do every day and what time you do it.',
  art: 'sun',
  tags: { skills: ['vocabulary', 'grammar', 'speaking', 'reading'], topics: ['present simple', 'routines', 'time', 'days of the week', 'questions'], goals: ['foundations'] },
  pages: [
    /* ------------------------------------------------------------------ Lesson 1 */
    {
      id: 'p1',
      title: 'I work in a shop',
      about: 'Use the present simple with I, you, we and they to say what you do every day.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To talk about things you do **regularly** (every day, every week, always) and about things that are **true for a long time**, English uses the **present simple**: *I work in a shop. We live in Madrid. They drink coffee every morning.*\n\nWith **I, you, we** and **they**, the present simple is very easy: it is just the basic verb, with nothing added. *I **work**, you **work**, we **work**, they **work**.*\n\nThe present simple does not mean *now, at this moment*. *I work in a shop* is true even on Sunday, when I am at home. It describes my life, not this minute.' },
          { t: 'table', caption: 'Present simple: I, you, we, they', explain: ['head'], head: ['Person', 'Verb', 'Example'], rows: [
            ['I', 'work', 'I work in a shop.'],
            ['you', 'live', 'You live near the station.'],
            ['we', 'start', 'We start at nine.'],
            ['they', 'speak', 'They speak Arabic.'],
          ] },
          { t: 'tip', art: 'owl', md: 'Words like **every day**, **every morning**, **on Mondays** and **at the weekend** often go with the present simple. They usually come at the end of the sentence: *I go to the gym on Mondays.*' },
        ],
        [
          { t: 'text', md: 'For the **negative**, put **don’t** (do not) before the verb: *I **don’t** work on Sundays. They **don’t** eat meat.* The verb itself does not change.\n\nFor a **question**, put **do** before the person: ***Do** you **work** here? **Do** they **live** in London?* The short answers are **Yes, I do** and **No, I don’t**.\n\nTo ask for information, put a question word before *do*: ***Where do** you **live**? **What do** you **do**?* The question *What do you do?* means *What is your job?*' },
          { t: 'table', caption: 'Negatives and questions', explain: ['head'], head: ['Positive', 'Negative', 'Question'], rows: [
            ['I work.', 'I don’t work.', 'Do I work?'],
            ['You live here.', 'You don’t live here.', 'Do you live here?'],
            ['We play tennis.', 'We don’t play tennis.', 'Do we play tennis?'],
            ['They speak French.', 'They don’t speak French.', 'Do they speak French?'],
          ] },
          { t: 'examples', items: [
            { s: '**Do** you **like** coffee? – **Yes, I do.**', n: 'A question and a short answer.' },
            { s: 'We **don’t** **work** on Sundays.', n: 'Negative: *don’t* + verb.' },
            { s: '**Where do** you **live**? – In Lisbon.', n: 'A question word, then *do*.' },
            { s: '**What do** you **do**? – I’m a nurse.', n: 'This question asks about your job.' },
          ] },
        ],
        [
          { t: 'table', caption: 'Common mistakes', explain: ['head', 'col2'], head: ['Not this', 'But this', 'Why'], rows: [
            ['I not work today.', 'I don’t work today.', 'The negative needs *don’t*.'],
            ['You live here?', 'Do you live here?', 'A question needs *do* in writing.'],
            ['I am work in a bank.', 'I work in a bank.', 'No *be* before a present simple verb.'],
            ['Do you are a student?', 'Are you a student?', 'With *be*, no *do*.'],
          ] },
          { t: 'dialogue', title: 'At a party', lines: [
            { who: 'Lucas', s: 'Hi, I’m Lucas. What do you do?' },
            { who: 'Amira', s: 'I work in a bookshop. And you?' },
            { who: 'Lucas', s: 'I’m a cook. I work in a restaurant.' },
            { who: 'Amira', s: 'Do you work at the weekend?' },
            { who: 'Lucas', s: 'Yes, I do. But I don’t work on Mondays.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Write the verb in the present simple.', items: [
            { q: 'I ___ (live) in a small flat.', a: ['live'], why: 'With *I*: the basic verb.' },
            { q: 'We ___ (not / work) on Sundays.', a: ['don’t work', "don't work", 'do not work'], why: 'Negative: *don’t* + verb.' },
            { q: 'They ___ (speak) three languages.', a: ['speak'], why: 'With *they*: the basic verb.' },
            { q: '___ you like tea? – Yes, I do.', a: ['Do'], why: 'A question starts with *do*.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order to make questions.', items: [
            { a: 'Where do you work?', why: 'Question word, *do*, person, verb.' },
            { a: 'Do they live near here?', why: 'A yes or no question starts with *do*.' },
            { a: 'What do you do at the weekend?', why: 'Question word, *do*, person, verb, then the time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'I [not like] coffee.', a: ['don’t like', "don't like", 'do not like'], why: 'Negative: *don’t* + verb.' },
            { s: 'We [are work] in an office.', a: ['work'], why: 'No *be* before a present simple verb.' },
            { s: '[Do] you a teacher?', a: ['Are'], why: 'With *be*, no *do*: *Are you a teacher?*' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“What do you do?”', o: ['I’m a student.', 'I’m fine, thanks.', 'I do it.'], why: '*What do you do?* asks about your job.' },
            { q: '“Do you live near here?”', o: ['Yes, I do.', 'Yes, I live.', 'Yes, I am.'], why: 'A short answer to a *do* question: *Yes, I do.*' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key exam, a question with **do** needs an answer with **do**, and a question with **be** needs an answer with **be**. *Do you …? – Yes, I do. Are you …? – Yes, I am.*' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'kofi', items: [
            { a: 'I work in a shop.' },
            { a: 'We don’t work on Sundays.' },
            { a: 'What do you do?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 2 */
    {
      id: 'p2',
      title: 'She works in a bank',
      about: 'Use the present simple with he, she and it, and ask questions with do and does.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'With **he, she** and **it** (or one person or thing: *Anna, my brother, the shop*), the present simple adds **-s** to the verb: *She **works** in a bank. He **lives** in Rome. The shop **opens** at nine.*\n\nThis little **-s** is the most forgotten letter in English. Native speakers notice it immediately, so practise it until it is automatic. A good way to remember: **he, she, it, -s**.\n\nSome verbs change their spelling: verbs that end in **-s, -sh, -ch, -x, -o** add **-es** (*watches, goes, does*), and verbs that end in a consonant + **-y** change to **-ies** (*study → studies*). **Have** is irregular: *she **has**.*' },
          { t: 'table', caption: 'he, she, it + -s', quiz: true, explain: ['head', 'col2'], head: ['Verb', 'he / she / it', 'Rule'], rows: [
            ['work', 'works', 'add -s'],
            ['live', 'lives', 'add -s'],
            ['watch', 'watches', '-ch: add -es'],
            ['go', 'goes', '-o: add -es'],
            ['do', 'does', '-o: add -es'],
            ['study', 'studies', 'consonant + y: -ies'],
            ['have', 'has', 'irregular'],
          ] },
        ],
        [
          { t: 'text', md: 'For the negative and questions with **he, she, it**, use **does** instead of *do*. The -s moves to **does**, so the main verb goes back to the basic form.\n\n*She works.* → *She **doesn’t work**.* (not *doesn’t works*)\n*He lives here.* → ***Does** he **live** here?* (not *Does he lives*)\n\nThe short answers are **Yes, she does** and **No, he doesn’t**. Think of it like this: there is only **one -s** in the sentence. If it is on *does*, it is not on the verb.' },
          { t: 'table', caption: 'does and doesn’t', explain: ['head'], head: ['Positive', 'Negative', 'Question', 'Short answers'], rows: [
            ['She works.', 'She doesn’t work.', 'Does she work?', 'Yes, she does. / No, she doesn’t.'],
            ['He plays.', 'He doesn’t play.', 'Does he play?', 'Yes, he does. / No, he doesn’t.'],
            ['It opens.', 'It doesn’t open.', 'Does it open?', 'Yes, it does. / No, it doesn’t.'],
          ] },
          { t: 'tip', art: 'owl', md: 'The most common mistake at this level is two -s or no -s: *She doesn’t works* or *He work*. Check every sentence with *he, she* or *it*: exactly **one -s**, on the verb or on *does*.' },
        ],
        [
          { t: 'examples', items: [
            { s: 'My sister **works** in a bank.', n: 'One person: verb + -s.' },
            { s: 'He **doesn’t eat** meat.', n: 'Negative: *doesn’t* + basic verb.' },
            { s: '**Does** the museum **open** on Mondays?', n: 'A question about a thing: *does* + basic verb.' },
            { s: 'Tom **watches** TV every evening.', n: '*watch* + -es.' },
            { s: 'She **has** two children.', n: '*have* is irregular: *has*.' },
            { s: '**Where does** your brother **live**?', n: 'A question word, then *does*.' },
          ] },
          { t: 'reading', title: 'Two neighbours', md: 'Maria lives on the second floor. She works in a bank in the city centre. She gets up at six and she goes to work by train. She doesn’t like cooking, so she often eats in a café.\n\nHer neighbour, Mr Okafor, is a retired teacher. He doesn’t work now. He gets up late, reads the newspaper and walks his dog in the park. In the evening he watches football on TV.' },
        ],
        [
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true or false?', items: [
            { q: 'Maria works in a bank.', a: 't', why: '*She works in a bank.*' },
            { q: 'Maria goes to work by bus.', a: 'f', why: 'She goes by train.' },
            { q: 'Maria loves cooking.', a: 'f', why: '*She doesn’t like cooking.*' },
            { q: 'Mr Okafor works in a school.', a: 'f', why: 'He is retired: he doesn’t work now.' },
            { q: 'Mr Okafor has got a dog.', a: 't', why: '*He walks his dog in the park.*' },
          ] },
          { t: 'ex', kind: 'conjugate', h: 'Write the verb with he, she or it.', verb: 'he / she / it', tense: 'present simple', rows: [
            ['work', 'works'],
            ['go', 'goes'],
            ['watch', 'watches'],
            ['study', 'studies'],
            ['have', 'has'],
          ] },
        ],
        [
          { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
            { q: 'My brother ___ in Paris.', o: ['lives', 'live', 'living'], why: '*my brother* = *he*: verb + -s.' },
            { q: 'She ___ like fish.', o: ['doesn’t', 'don’t', 'isn’t'], why: '*she* + negative: *doesn’t*.' },
            { q: '___ your father speak English?', o: ['Does', 'Do', 'Is'], why: '*your father* = *he*: *Does …?*' },
            { q: 'Does he work here? – No, he ___.', o: ['doesn’t', 'don’t', 'isn’t'], why: 'Short answer with *he*: *No, he doesn’t.*' },
          ] },
          { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
            { s: 'She doesn’t [works] on Fridays.', a: ['work'], why: 'After *doesn’t*, the basic verb.' },
            { s: 'Does he [likes] pizza?', a: ['like'], why: 'After *does*, the basic verb.' },
            { s: 'My mother [work] in a hospital.', a: ['works'], why: 'One person: verb + -s.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'transform', h: 'Make a question with do or does.', items: [
            { q: 'She plays the piano.', cue: 'Does', a: ['Does she play the piano?'], why: '*Does* + she + basic verb.' },
            { q: 'They live in Cairo.', cue: 'Do', a: ['Do they live in Cairo?'], why: '*Do* + they + basic verb.' },
            { q: 'He goes to the gym.', cue: 'Does', a: ['Does he go to the gym?'], why: '*Does* + he + basic verb: *go*, not *goes*.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: choose the best reply.', items: [
            { q: '“Does your sister live with you?”', o: ['No, she doesn’t.', 'No, she isn’t.', 'No, she don’t.'], why: 'A *does* question: *No, she doesn’t.*' },
            { q: '“Where does Tom work?”', o: ['In a hotel.', 'Yes, he does.', 'At nine o’clock.'], why: '*Where* asks for a place.' },
          ] },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'mei', items: [
            { a: 'She works in a bank.' },
            { a: 'He doesn’t eat meat.' },
            { a: 'Does your brother live here?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 3 */
    {
      id: 'p3',
      title: 'What time is it?',
      about: 'Tell the time, say the days of the week and talk about your daily routine.',
      art: 'snail',
      spreads: [
        [
          { t: 'text', md: 'To ask the time, say **What time is it?** or, more polite, **Excuse me, what’s the time?** The answer starts with **It’s …**\n\nFor full hours, say **o’clock**: *It’s seven o’clock.* For the minutes, English uses two systems. The simple one, common in digital times, says the hour and then the minutes: *It’s seven fifteen (7.15). It’s seven forty-five (7.45).* The traditional one uses **past** (after the hour) and **to** (before the next hour): *It’s quarter past seven (7.15). It’s half past seven (7.30). It’s quarter to eight (7.45).* Both are correct; learn to understand both.' },
          { t: 'table', caption: 'Telling the time', explain: ['head'], head: ['Time', 'Traditional', 'Simple'], rows: [
            ['7.00', 'seven o’clock', 'seven o’clock'],
            ['7.10', 'ten past seven', 'seven ten'],
            ['7.15', 'quarter past seven', 'seven fifteen'],
            ['7.30', 'half past seven', 'seven thirty'],
            ['7.45', 'quarter to eight', 'seven forty-five'],
            ['7.50', 'ten to eight', 'seven fifty'],
          ] },
          { t: 'tip', art: 'owl', md: 'To say **when** something happens, use **at** with times: *at 8 o’clock, at half past six*. Also **at night**, **at the weekend**. But use **in** for parts of the day: *in the morning, in the afternoon, in the evening*.' },
        ],
        [
          { t: 'text', md: 'The days of the week always start with a **capital letter** in English: *Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday*. **Saturday** and **Sunday** are **the weekend**.\n\nWith days, use **on**: *on Monday, on Friday evening*. For something you do every week, add **-s**: *I go swimming **on Tuesdays*** (= every Tuesday).\n\nTo describe your routine, use the present simple with times and days. Words like **first**, **then** and **after that** put your day in order.' },
          { t: 'table', caption: 'at, on, in', explain: ['head', 'col2'], head: ['Word', 'Example', 'Use it with'], rows: [
            ['at', 'at 7 o’clock', 'times'],
            ['at', 'at the weekend', 'the weekend, night'],
            ['on', 'on Monday', 'days'],
            ['on', 'on Sundays', 'every week, the same day'],
            ['in', 'in the morning', 'parts of the day'],
          ] },
          { t: 'examples', items: [
            { s: 'I get up **at** half past six.', n: '*at* + a time.' },
            { s: 'We have English **on** Tuesdays and Thursdays.', n: '*on* + days, every week.' },
            { s: 'She studies **in** the evening.', n: '*in* + a part of the day.' },
            { s: '**First** I have a shower, **then** I have breakfast.', n: 'Putting the routine in order.' },
          ] },
        ],
        [
          { t: 'text', md: 'Here are useful verbs for your day. Many of them go with **have** or **go**: *have breakfast, have a shower, go to work, go to bed*. Learn them as groups of words, not one by one.' },
          { t: 'table', caption: 'My routine', explain: ['head'], head: ['Morning', 'Day', 'Evening'], rows: [
            ['wake up', 'go to work', 'come home'],
            ['get up', 'start work', 'cook dinner'],
            ['have a shower', 'have lunch', 'watch TV'],
            ['get dressed', 'finish work', 'read a book'],
            ['have breakfast', 'go shopping', 'go to bed'],
          ] },
          { t: 'tip', art: 'owl', md: 'Say **go to work** and **go to bed** without *the*, but **go home** without *to*: *I go home at six*, not *I go to home*.' },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the times.', pairs: [
            ['8.15', 'quarter past eight'],
            ['8.30', 'half past eight'],
            ['8.45', 'quarter to nine'],
            ['9.00', 'nine o’clock'],
            ['9.10', 'ten past nine'],
          ] },
          { t: 'ex', kind: 'select', h: 'Choose at, on or in.', items: [
            { q: 'I have lunch ___ one o’clock.', o: ['at', 'on', 'in'], why: '*at* + a time.' },
            { q: 'We play football ___ Saturdays.', o: ['on', 'at', 'in'], why: '*on* + days.' },
            { q: 'She reads ___ the evening.', o: ['in', 'at', 'on'], why: '*in* + a part of the day.' },
            { q: 'They visit their parents ___ the weekend.', o: ['at', 'in', 'on'], why: 'British English: *at the weekend*.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'sort', h: 'Does it go with have or go?', groups: ['have', 'go'], items: [
            { s: 'breakfast', g: 0, why: '*have breakfast*' },
            { s: 'to bed', g: 1, why: '*go to bed*' },
            { s: 'a shower', g: 0, why: '*have a shower*' },
            { s: 'shopping', g: 1, why: '*go shopping*' },
            { s: 'lunch', g: 0, why: '*have lunch*' },
            { s: 'home', g: 1, why: '*go home*, without *to*' },
          ] },
          { t: 'ex', kind: 'odd', h: 'Find the odd one out.', items: [
            { o: ['Morning', 'Monday', 'Friday', 'Sunday'], why: '*Morning* is a part of the day. The others are days.' },
            { o: ['lunch', 'wake up', 'get up', 'get dressed'], why: '*lunch* is a meal. The others are things you do in the morning.' },
            { o: ['in', 'Saturday', 'Sunday', 'weekend'], why: '*in* is a small word, not a day.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: look at the message and choose the right answer.', items: [
            { q: '“Hi Sam, the meeting is now at 3.30, not 2.30. See you then! Kate” When is the meeting?', o: ['At half past three.', 'At half past two.', 'At three o’clock.'], why: '*now at 3.30*: half past three.' },
            { q: '“Swimming pool: open Monday to Friday 7.00–21.00. Closed at the weekend.” When can you swim?', o: ['On Wednesday at 8 a.m.', 'On Saturday at 10 a.m.', 'On Friday at 10 p.m.'], why: 'Weekdays from 7.00 to 21.00; 22.00 is too late, and Saturday is closed.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Times and days are in many A2 Key questions. Watch for words that **change** information, like *now*, *not*, *closed* or *only*: they often give the answer.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'sofia', items: [
            { a: 'I get up at half past six.' },
            { a: 'We have English on Tuesdays.' },
            { a: 'What time is it?' },
          ] },
        ],
      ],
    },
    /* ------------------------------------------------------------------ Lesson 4 */
    {
      id: 'p4',
      title: 'A day in the life of a baker',
      about: 'Read about the day of a baker, and describe your own day.',
      art: 'sun',
      spreads: [
        [
          { t: 'text', md: 'To say **how often** you do something, English uses **frequency adverbs**: **always** (every time), **usually** (most times), **often** (many times), **sometimes**, and **never** (not one time).\n\nThe position is important: they go **before** the main verb, but **after** the verb *be*. *I **always** have breakfast. She **never** drinks coffee.* But: *I am **always** tired. He is **never** late.*\n\nUse **never** with a positive verb: *I never eat meat*, not *I don’t never eat meat*.' },
          { t: 'table', caption: 'How often?', explain: ['head', 'col1'], head: ['Word', 'How often'], rows: [
            ['always', 'every time'],
            ['usually', 'nearly every time'],
            ['often', 'many times'],
            ['sometimes', 'some times'],
            ['never', 'not one time'],
          ] },
          { t: 'examples', items: [
            { s: 'I **always** get up at seven.', n: 'Before the main verb.' },
            { s: 'She is **often** late.', n: 'After *be*.' },
            { s: 'We **sometimes** eat out on Fridays.', n: 'Before the main verb.' },
            { s: 'He **never** watches TV.', n: '*never* with a positive verb.' },
          ] },
        ],
        [
          { t: 'reading', title: 'A day in the life of a baker', md: 'Rafael is a baker in Valencia. His day starts very early: he gets up at three o’clock in the morning! He has a coffee, but he never has breakfast at home.\n\nHe starts work at four. First he makes the bread, then the cakes. The shop opens at seven, and people often wait outside. Rafael usually finishes work at one o’clock.\n\nIn the afternoon he sleeps for two hours. In the evening he sometimes plays football with his friends. He always goes to bed at nine. “It’s a hard job,” he says, “but I love the smell of bread in the morning.”' },
          { t: 'ex', kind: 'tf', h: 'Read the text. Are the sentences true or false?', ng: true, items: [
            { q: 'Rafael gets up at three o’clock.', a: 't', why: '*he gets up at three o’clock in the morning*' },
            { q: 'He has breakfast at home.', a: 'f', why: '*he never has breakfast at home*' },
            { q: 'The shop opens at four.', a: 'f', why: 'He starts work at four; the shop opens at seven.' },
            { q: 'Rafael has got two children.', a: 'ng', why: 'The text does not talk about his children.' },
            { q: 'He always goes to bed at nine.', a: 't', why: '*He always goes to bed at nine.*' },
          ] },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Read the text again. Choose the right answer.', items: [
            { q: 'What does Rafael make first?', o: ['Bread.', 'Cakes.', 'Coffee.'], why: '*First he makes the bread, then the cakes.*' },
            { q: 'What does he do in the afternoon?', o: ['He sleeps.', 'He plays football.', 'He works.'], why: '*In the afternoon he sleeps for two hours.*' },
            { q: 'Why does he love his job?', o: ['He loves the smell of bread.', 'He finishes early.', 'He gets up late.'], why: '*I love the smell of bread in the morning.*' },
          ] },
          { t: 'ex', kind: 'build', h: 'Write the sentence. Two words do not belong.', items: [
            { a: 'He always goes to bed at nine.', extra: ['go', 'on'], why: '*he* + *goes*; *at* + a time.' },
            { a: 'She is never late for work.', extra: ['does', 'don’t'], why: '*never* after *be*, with a positive verb.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I usually have lunch at one.', why: 'The frequency word before the main verb.' },
            { a: 'They are always very busy.', why: 'The frequency word after *be*.' },
            { a: 'We sometimes go to the cinema on Fridays.', why: 'Before the main verb; the day at the end.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'In the format of the A2 Key exam: read and choose the right word.', items: [
            { q: 'Rafael ___ has breakfast at home. He only has a coffee.', o: ['never', 'always', 'usually'], why: 'He only has a coffee: he *never* has breakfast at home.' },
            { q: 'The shop opens at seven, and people ___ wait outside.', o: ['often', 'never', 'don’t'], why: '*often*: many times.' },
          ] },
          { t: 'tip', art: 'owl', md: 'In the A2 Key reading test, words like *always*, *never* and *only* change the meaning of a sentence. Read them carefully before you choose true or false.' },
        ],
        [
          { t: 'text', md: 'Now describe your own day. Say what time you get up, what you do in the morning, the afternoon and the evening, and use **always**, **usually**, **sometimes** or **never** at least once.' },
          { t: 'ex', kind: 'speak', h: 'Say these sentences after the tutor.', tutor: 'arthur', items: [
            { a: 'I usually get up at seven.' },
            { a: 'I never have breakfast at home.' },
            { a: 'In the evening I sometimes read a book.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'select', h: 'Choose the right words.', items: [
      { q: 'My sister ___ in a hospital.', o: ['works', 'work', 'working'], why: 'One person: verb + -s.' },
      { q: 'We ___ eat meat.', o: ['don’t', 'doesn’t', 'aren’t'], why: '*we* + negative: *don’t*.' },
      { q: '___ he speak Spanish?', o: ['Does', 'Do', 'Is'], why: '*he*: *Does …?*' },
    ] },
    { t: 'ex', kind: 'fix', h: 'Find and fix the mistake.', items: [
      { s: 'She doesn’t [likes] tea.', a: ['like'], why: 'After *doesn’t*, the basic verb.' },
      { s: 'I [not work] on Mondays.', a: ['don’t work', "don't work", 'do not work'], why: 'Negative: *don’t* + verb.' },
      { s: 'He [watchs] TV every day.', a: ['watches'], why: '*watch* + -es.' },
    ] },
    { t: 'ex', kind: 'select', h: 'Choose at, on or in.', items: [
      { q: 'The class starts ___ nine o’clock.', o: ['at', 'on', 'in'], why: '*at* + a time.' },
      { q: 'I go swimming ___ Wednesdays.', o: ['on', 'at', 'in'], why: '*on* + days.' },
      { q: 'He works ___ the afternoon.', o: ['in', 'at', 'on'], why: '*in* + a part of the day.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the times.', pairs: [
      ['6.30', 'half past six'],
      ['6.15', 'quarter past six'],
      ['6.45', 'quarter to seven'],
      ['6.00', 'six o’clock'],
    ] },
    { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
      { a: 'She is always happy.', why: 'The frequency word after *be*.' },
      { a: 'Where does your brother work?', why: 'Question word, *does*, person, basic verb.' },
    ] },
    { t: 'ex', kind: 'transform', h: 'Make a question with do or does.', items: [
      { q: 'You like football.', cue: 'Do', a: ['Do you like football?'], why: '*Do* + you + verb.' },
      { q: 'She studies at night.', cue: 'Does', a: ['Does she study at night?'], why: '*Does* + she + basic verb: *study*.' },
    ] },
  ],
};
