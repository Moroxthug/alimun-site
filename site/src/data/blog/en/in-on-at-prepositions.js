// In, on, at. Checked against Cambridge Dictionary grammar (At, on and in: time; At, on and in: place; Time: on time and
// in time; Finally, at last, lastly or in the end; arrive somewhere), British Council LearnEnglish (prepositions of time;
// prepositions of place), Oxford Learner's Dictionaries (weekend, hospital, university notes on British and American
// usage) and Wikipedia (American and British English grammatical differences).
export default {
  key: 'in-on-at',
  site: 'en',
  slug: 'in-on-at-prepositions',
  section: 'grammar',
  course: 'English',
  published: '2026-10-31',
  updated: '2026-10-31',
  title: 'In, on, at: prepositions of time and place explained',
  metaTitle: 'In, on, at: prepositions of time and place with examples – Alimun',
  desc: 'When to use in, on and at for time and place: at 5 o’clock, on Monday, in June, on the bus, in the car, at home, UK vs US, in time vs on time, and common mistakes.',
  lead: "At the weekend or on the weekend? In the bus or on the bus? Three tiny words cause more small mistakes than almost anything else in English, because **most languages split the same ground in a different way**. Here is how English divides it, with the patterns that cover most sentences and the exceptions worth learning by heart.",
  photo: 'in-on-at-station-clock',
  sticker: { draw: 'snail', say: 'See you on Monday, at nine, in the café.' },
  facts: [
    { n: 3, unit: 'prepositions', text: 'in, on and at do most of the work for time and place in English' },
    { label: 'at the weekend', text: 'the usual British form, where American English says on the weekend' },
    { label: 'in hospital', text: 'British English for a patient, where American English says in the hospital' },
    { label: 'next, last, this, every', text: 'time expressions with these words take no in, on or at: next Monday, last summer, every Saturday' },
  ],
  blocks: [
    { take: { title: 'The short answer', text: "For time, use **at for a point** (at 5 o’clock, at noon, at night), **on for a day or a date** (on Monday, on July 4, on my birthday) and **in for a longer period** (in June, in 2026, in the summer, in the morning). For place, at is a point or a place of activity (at the station, at home), on is a surface, a line or a floor (on the table, on the third floor, on the bus) and in is an enclosed space or an area (in the car, in Rome). Words like next, last, this and every take no preposition at all.", draw: 'owl' } },

    { h: 'The triangle: from big to small' },
    { p: "Many teachers draw in, on and at as an upside-down triangle. At the wide top sits **in**, for big spaces and long periods: in Europe, in 2026, in the winter. In the middle sits **on**, for something more defined: a street, a surface, a single day. At the narrow point sits **at**, for one exact spot or moment: at the corner, at 7:30." },
    { p: "The triangle is a good place to start, and it explains a large share of everyday sentences. But treat it as **a guide, not a law**. English also has fixed phrases that ignore the picture, like at night, at the weekend and in the morning, and some choices depend on how the speaker sees a place, not on its size. The rest of this article shows where the triangle works and where you simply have to learn the phrase." },
    { table: {
      head: ['', 'Time', 'Place'],
      rows: [
        ['in: big, long, enclosed', 'in June, in 2026, in the summer, in the 1990s, in the morning', 'in Spain, in London, in the kitchen, in the car, in a taxi'],
        ['on: a day, a surface, a line', 'on Monday, on July 4, on my birthday, on Monday morning', 'on the table, on the wall, on Oxford Street, on the bus, on the fifth floor'],
        ['at: a point, an exact spot', 'at 5 o’clock, at noon, at lunchtime, at night', 'at the station, at the door, at 15 Craig Street, at home, at work'],
      ],
      note: 'The triangle covers the common cases. Fixed phrases such as at night and in the morning have to be learned as they are.',
    } },

    { h: 'Time: at for a point' },
    { p: "Use **at** for clock times and other exact points in the day: at 5 o’clock, at 7:45, at midday, at midnight, at sunrise. It also goes with mealtimes, as in at breakfast and at lunchtime, and with a few set phrases: **at night, at the moment, at the same time**." },
    { p: "In informal English the question What time? usually drops at. Cambridge Dictionary gives **What time are you leaving?** as the preferred form over At what time are you leaving?, which sounds stiff in conversation. In the answer, at comes back: at six." },
    { examples: [
      ['The meeting starts **at** 9:30.', 'A clock time: at.'],
      ["Let's talk **at** lunchtime.", 'A mealtime is a point in the day.'],
      ["I can't sleep **at** night.", 'A fixed phrase: night in general.'],
      ["She's busy **at** the moment.", 'Another fixed phrase: right now.'],
    ] },

    { h: 'Time: on for days and dates' },
    { p: "Use **on** for days of the week, dates and special days: on Monday, on July 4, on 30 July, on New Year’s Day, **on my birthday**. A plural day talks about a habit: the office is closed on Fridays, which means every Friday." },
    { p: "Here the triangle breaks in an interesting way. Morning on its own takes in, but a particular morning takes on: **in the morning**, but **on Monday morning**, on the morning of the ninth, on a cold winter evening. Once the part of the day is attached to a specific day or described with an adjective, on wins." },
    { note: { title: 'Americans often drop on', text: "In American English the preposition before a single day is often left out: **She resigned Thursday**, I'll see you Monday. British speakers usually keep it: she resigned on Thursday. Both are correct in their own variety, and on Monday is never wrong.", draw: 'parrot' } },

    { h: 'Time: in for longer periods' },
    { p: "Use **in** for months, years, seasons, decades and centuries: in June, **in 2026**, in the spring, in the 1990s, in the nineteenth century. It also goes with the parts of the day: in the morning, in the afternoon, in the evening. Phrases like in the past and in the future follow the same idea." },
    { p: "Night is the exception. **At night** means any night, or night in general: it's not safe to walk there at night. **In the night** usually means one particular night: I woke up in the night and heard a noise. And at the triangle's wide end, in can also say how long something takes or when it will happen from now: she learned the song in five minutes, I'll call you in ten minutes." },
    { examples: [
      ['My birthday is **in** June.', 'A month: in.'],
      ['My birthday is **on** June 12.', 'A date: on.'],
      ['We moved here **in** 2019.', 'A year: in.'],
      ['I work best **in** the morning.', 'Any morning: in.'],
      ['The flight leaves **on** Friday morning.', 'A specific morning: on.'],
      ['The train leaves **in** ten minutes.', 'Ten minutes from now.'],
    ] },
    { figure: { photo: 'in-on-at-birthday-cake', alt: 'A birthday cake with lit candles on a table', caption: 'A special day takes on: on my birthday. The month takes in: my birthday is in June.' } },

    { h: 'The weekend: at or on?' },
    { p: "This is the best-known difference between British and American English with these words. In Britain the usual form is **at the weekend**, and for a habit, at weekends. In the United States people say **on the weekend** and on weekends. Oxford Learner's Dictionaries marks the first as British and the second as especially North American." },
    { panels: [
      ['British English', "What are you doing at the weekend? The office is closed at weekends. I'll see you at the weekend."],
      ['American English', "What are you doing on the weekend? The office is closed on weekends. I'll see you on the weekend."],
    ] },
    { p: "One thing is the same on both sides of the Atlantic: a particular weekend with a date takes on. **The festival is on the last weekend in July** in London as well as in New York. What is never correct in either variety is in the weekend, a common slip for learners whose language uses its word for in here." },

    { h: 'No preposition: this, next, last, every' },
    { p: "Time expressions that start with **this, next, last, every**, and also each, some, that, one, any and all, take no in, on or at. Every Saturday, next Monday, last summer, this evening. Adding a preposition here is one of the most common mistakes, because it feels natural to keep the in or on you would use without the extra word." },
    { examples: [
      ['He plays football **every** Saturday.', 'Not on every Saturday.'],
      ["Are you free **next** Monday at two o'clock?", 'Not on next Monday. The clock time still takes at.'],
      ['**Last** summer we rented a house by the sea.', 'Not in last summer.'],
      ["I'm meeting her **this** evening.", 'Not in this evening.'],
      ["We'll talk about it **tomorrow** morning.", 'Tomorrow, yesterday and today work the same way: no preposition.'],
    ] },
    { note: { title: 'A quick check', text: "Before a time word, ask yourself whether there is already a word like this, next, last, every, tomorrow or yesterday in front of it. If there is, **delete the preposition**: in the morning, but tomorrow morning; on Friday, but next Friday.", draw: 'cat' } },
    { figure: { photo: 'in-on-at-old-town-night', alt: 'An old town square at night, with café tables, lit houses and a crescent moon', caption: 'At night means any night: the square is quiet at night. In the night means one night: I woke up in the night.' } },
    { quote: 'At for a point, on for a day, in for a longer stretch.' },

    { cta: true },

    { h: 'Place: at a point, on a surface, in a space' },
    { p: "The same triangle helps with place. **In** puts something inside a bigger space: in the box, in the kitchen, in the park, in Sweden. **On** puts it on a surface or along a line: on the table, on the wall, on the floor, on Oxford Street, on the coast, on the river. **At** marks a point, often a place where something happens: at the door, at the bus stop, at the entrance, at 15 Craig Street." },
    { p: "Often more than one preposition is possible, and the choice changes the meaning slightly. **She's at the station** says where she is, as a meeting point. She's in the station says she is inside the building, perhaps out of the rain. The British Council notes that the difference between the three is often more about use than about strict rules, which is why fixed phrases matter so much." },
    { table: {
      head: ['Preposition', 'Use', 'Examples'],
      rows: [
        ['in', 'inside a space, a building seen from the inside, a city or country', 'in the room, in the office, in the park, in Paris, in the mountains, in the sea'],
        ['on', 'a surface, a floor, a street, a coast or river, public transport', 'on the desk, on the third floor, on Main Street, on the east coast, on the train'],
        ['at', 'a point, an address, a place of activity, an event', 'at the door, at 12 Park Road, at the supermarket, at work, at a party'],
      ],
      note: 'Cities and countries take in: in Tokyo, in Brazil. Use at for a city only when you see it as a stop on a route.',
    } },

    { h3: 'On the bus, in the car' },
    { p: "Transport is where the triangle stops helping. Large vehicles that you can walk around in, mostly public transport, take **on**: on the bus, on the train, on a plane, on the tram, on a ship. Small vehicles you sit inside take **in**: in a car, in a taxi. So the rule of thumb is that if you can stand up and walk along it, you are on it." },
    { p: "To talk about how you travel, rather than where you are, English uses **by** with no article: by bus, by train, by car, by plane. I was on the train when she phoned, but I went to Rome by train. Walking is the exception: you go **on foot**, not by foot." },
    { figure: { photo: 'in-on-at-airport-escalators', alt: 'Travelers on escalators in an airport hall, one of them waiting with a suitcase', caption: 'You wait at the airport; a few minutes later you are on the plane, and at the other end you sit in a taxi.' } },

    { h3: 'Floors, buildings and addresses' },
    { p: "Floors take **on**: they live on the fifteenth floor, my office is on the third floor. An exact address takes at, a street takes on, and a building can take either at or in, depending on whether you mean the place or the inside: **I'll meet you at the museum**, it's warm in the museum." },
    { p: "The verb arrive has its own pattern. You **arrive at** a building or a smaller place, such as the hotel, the airport or the station, and you **arrive in** a town, city or country: we arrived at the hotel just after ten, they arrived in Tokyo on Wednesday. With home, here and there, arrive takes no preposition: we arrived home late. Arrive to is a mistake in both cases." },
    { figure: { photo: 'in-on-at-tokyo-platform', alt: 'A traveler pulling a red suitcase along a train platform in Tokyo', caption: 'You arrive at a station but in a city: we arrived at the station at six, and we arrived in Tokyo on Wednesday.' } },

    { h3: 'At home, at work, at university' },
    { p: "A group of everyday places takes **at** with no article when you think of the activity rather than the building: at home, at work, at school, at university, at college. The same goes for events and places where you get a service: at a party, at the cinema, at the doctor's, at the hairdresser's." },
    { p: "This is also where British and American English part ways again. British English says a patient is **in hospital** and a student is at university, with no article. American English says **in the hospital**, and students are in college. Oxford Learner's Dictionaries notes that in American English university is not used this way, so Americans say my son is in college where a British speaker would say he's at university." },
    { panels: [
      ['British English', "She spent two weeks in hospital. Both their children are at university. I'll see you at the weekend."],
      ['American English', "She spent two weeks in the hospital. Both their children are in college. I'll see you on the weekend."],
    ] },

    { h: 'In time or on time?' },
    { p: "These two look almost the same and mean different things. **On time** means at the planned time, not early and not late, and it goes with timetables and schedules: the trains are usually on time, the meeting never starts on time. Right on time, or in British English dead on time, adds emphasis." },
    { p: "**In time** means early enough, with enough time to do something. It usually comes with for and a noun or with a to-infinitive: we'll arrive in time for lunch, I got home in time to see the match. Just in time means almost too late. Cambridge Dictionary gives a neat pair: the stadium must be completed on time, according to the schedule, or in time for the Olympics, before they begin." },
    { examples: [
      ['The flight landed right **on time**.', 'At the scheduled time.'],
      ['We got there **in time** for dinner.', 'Early enough for dinner.'],
      ["You're **just in time**. We're about to start.", 'Almost too late, but not quite.'],
    ] },

    { h: 'At the end or in the end?' },
    { p: "**At the end** is the point where something finishes, and it usually comes with of: at the end of the film, at the end of the month, at the end of the street. **In the end** means finally, after a long process, many changes or a lot of discussion: we looked at three apartments, and in the end we took the first one." },
    { p: "The mistake to avoid is in the end of. Cambridge Dictionary lists it as an error: **at the end of the film, everyone was crying**, never in the end of the film. A similar pair is at the beginning, the starting point, and in the beginning, which usually contrasts an early stage with what came later: in the beginning nobody understood, but things soon became clearer." },
    { examples: [
      ['Pay **at the end of** the month.', 'The point where the month finishes.'],
      ['We argued for hours, but **in the end** we agreed.', 'Finally, after a long discussion.'],
      ['**At the beginning of** every lesson, we review the homework.', 'The starting point.'],
    ] },

    { h: 'Why your first language gets in the way' },
    { p: "Learners rarely mix these words up at random. The mistakes come from translation, because Italian, Spanish, French and Portuguese **cover the same ground with fewer or different words**. Where one preposition in your language does the work of two or three English ones, the English choice feels arbitrary, and you fall back on the closest translation." },
    { h3: 'Spanish and Portuguese: one word for three' },
    { p: "Spanish **en** and Portuguese **em** (no, na, nos, nas when joined to the article) cover most of in, on and at for place: en la mesa or na mesa is on the table, en casa or em casa is at home, en el autobús or no ônibus is on the bus. That is why Spanish and Portuguese speakers say in the table, in the bus or in the station. For time, Spanish puts an article before days (el lunes) and Portuguese often uses na (na segunda-feira), so on Monday has no direct model, and in Monday or the bare article slips in instead." },
    { h3: 'Italian and French: different splits' },
    { p: "Italian uses **a** for cities and for several at places: a Roma, a casa, a scuola. That gives the classic at Rome instead of in Rome. Floors also take a (al terzo piano), which turns into at the third floor. French **à** works in a similar way, à Paris and à la gare, so French speakers write at Paris. French also says dans le bus, literally in the bus, where English wants on the bus. Italian, French and Spanish also say the days with an article, il lunedì, le lundi, el lunes, so on Monday has no direct model." },

    { h: 'Common mistakes' },
    { p: "These are the slips teachers hear most often from speakers of Romance languages, and each one breaks a pattern from this article." },
    { mistakes: [
      ['I was born on 1998.', 'I was born **in** 1998.', 'Years take in. On is for a date: I was born on May 3, 1998.'],
      ['See you in Monday.', 'See you **on** Monday.', 'Days of the week take on.'],
      ["We'll meet on next Friday.", "We'll meet **next** Friday.", 'Next, last, this and every take no preposition.'],
      ['What do you do in the weekend?', 'What do you do **at the weekend**? (UK) / **on the weekend**? (US)', 'In the weekend is not used in either variety.'],
      ['I live at Rome.', 'I live **in** Rome.', 'Cities and countries take in.'],
      ['Our office is at the third floor.', 'Our office is **on** the third floor.', 'Floors take on.'],
      ["I'm in the bus.", "I'm **on** the bus.", 'Buses, trains and planes take on.'],
      ['We arrived to London at 6.', 'We arrived **in** London at 6.', 'Arrive in a city or country, arrive at a building.'],
      ['In the end of the film, they get married.', '**At the end of** the film, they get married.', 'At the end of is the finishing point; in the end means finally.'],
    ] },

    { h: 'How to make the right choice automatic' },
    { p: "Prepositions are rarely a problem of knowing the rule. Most learners can recite at for times and on for days, and still say in Monday in a fast conversation. **What fixes them is hearing and using whole phrases** until they feel normal: on the bus, at the weekend, in the morning, next Friday. Learn the preposition together with its noun, never on its own." },
    { p: "That is why regular speaking practice helps more than another page of rules. In live classes with a teacher and the same small group you talk about your week, your plans and where things are, and the same phrases come back again and again. After each lesson, **flashcards with the words from your classes** let you review those phrases in their full form, preposition included." },
    { p: "When you write, check the time expressions first. Look for every this, next, last and every, and remove any preposition in front of them. Then check each day, date, month and year against the triangle. A few weeks of that habit will remove most of the mistakes in the table above, and the fixed phrases will start to come out on their own." },
  ],
  quiz: [
    { q: 'The concert starts ___ 8 p.m.', options: ['in', 'on', 'at', 'no preposition'], a: 2, why: 'Clock times take at: at 8 p.m.' },
    { q: 'My grandmother was born ___ 1952.', options: ['at', 'in', 'on', 'no preposition'], a: 1, why: 'Years take in: in 1952.' },
    { q: 'I have an interview ___ Tuesday morning.', options: ['on', 'in', 'at', 'by'], a: 0, why: 'A specific morning takes on, even though in the morning takes in.' },
    { q: "Let's meet ___ next Saturday.", options: ['on', 'at', 'in', 'no preposition'], a: 3, why: 'Time expressions with next, last, this and every take no preposition: next Saturday.' },
    { q: 'Which sentence is British English?', options: ["I'll see you on the weekend.", "I'll see you at the weekend.", "I'll see you in the weekend.", "I'll see you by the weekend."], a: 1, why: 'At the weekend is British. On the weekend is American. In the weekend is not used.' },
    { q: 'Sorry, I can’t talk now. I’m ___ the train.', options: ['in', 'at', 'on', 'by'], a: 2, why: 'Trains, buses and planes take on.' },
    { q: 'The bus left ___: exactly at 7:15, as scheduled.', options: ['in time', 'on time', 'at time', 'in the time'], a: 1, why: 'On time means at the planned time.' },
    { q: 'We looked at many apartments, and ___ we chose the first one.', options: ['at the end', 'in the end', 'on the end', 'at end'], a: 1, why: 'In the end means finally, after a long process.' },
  ],
  faq: [
    ['Is it at the weekend or on the weekend?', 'Both are correct. At the weekend is the usual British form, and on the weekend is American. In the weekend is not used in either variety.'],
    ['Why is it in the morning but on Monday morning?', 'In goes with the parts of the day in general. When the part of the day belongs to a specific day, or is described with an adjective, it takes on: on Monday morning, on a cold evening.'],
    ['Do I need a preposition before next week or last year?', 'No. Expressions with next, last, this, every, each, some and all take no in, on or at: next week, last year, this morning, every day.'],
    ['Is it in the bus or on the bus?', 'On the bus. Buses, trains, planes and ships take on. Cars and taxis take in. To say how you travel, use by: by bus, by car.'],
    ['What is the difference between in time and on time?', 'On time means at the scheduled time, not late. In time means early enough to do something, often with for or to: in time for dinner, in time to catch the train.'],
  ],
  related: ['present-perfect', 'phrasal-verbs', 'cefr-english'],
  sources: [
    ['Cambridge Dictionary: At, on and in (time)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-time'],
    ['Cambridge Dictionary: At, on and in (place)', 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-place'],
    ['British Council LearnEnglish: Prepositions of time', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on'],
    ['British Council LearnEnglish: Prepositions of place', 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place'],
    ['Oxford Learner’s Dictionaries: weekend', 'https://www.oxfordlearnersdictionaries.com/definition/english/weekend_1'],
    ['Wikipedia: American and British English grammatical differences', 'https://en.wikipedia.org/wiki/American_and_British_English_grammatical_differences'],
  ],
};
