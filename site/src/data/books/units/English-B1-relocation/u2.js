// English B1 for moving abroad, unit 2 (docs/BOOKS.md). Draft for native-teacher review.
export const UNIT = {
  id: 'u2',
  title: 'Services and paperwork',
  goal: 'Open a bank account, register with services and fill in forms.',
  art: 'mug',
  tags: { skills: ['speaking', 'reading', 'writing', 'vocabulary'], topics: ['banking', 'forms', 'registration', 'appointments'], goals: ['relocation'] },
  pages: [
    {
      id: 'p1',
      title: 'Opening a bank account',
      about: 'What the bank asks for, and how to ask about fees.',
      art: 'parrot',
      spreads: [
        [
          { t: 'text', md: 'To open a **current account**, the everyday account for your salary and your bills, a bank usually asks for two things: **proof of identity**, such as your passport, and **proof of address**, such as your tenancy agreement or a council tax bill. Some banks let you open an account in an app.' },
          { t: 'table', caption: 'Bank words', explain: ['head', 'col1'], quiz: true, head: ['Word', 'Meaning'], rows: [
            ['current account', 'an account for everyday money: salary, bills, shopping'],
            ['savings account', 'an account where you keep money and get interest'],
            ['debit card', 'a card that takes money straight from your account'],
            ['sort code', 'a six-digit number for your bank'],
            ['account number', 'an eight-digit number for your own account'],
            ['overdraft', 'when the bank lets you spend more money than you have'],
            ['monthly fee', 'money you pay the bank every month for the account'],
          ] },
          { t: 'tip', art: 'owl', md: 'When you have just arrived, proof of address can be difficult. Ask the bank which documents it accepts: the list is different from bank to bank.' },
        ],
        [
          { t: 'dialogue', title: 'At the bank', lines: [
            { who: 'Adviser', s: 'Good morning. How can I help?' },
            { who: 'Kwame', s: 'Hi. I’d like to open a current account, please. I’ve just moved here from Ghana.' },
            { who: 'Adviser', s: 'No problem. Have you got your passport and something with your address on it?' },
            { who: 'Kwame', s: 'I’ve got my passport and my tenancy agreement. Is that enough?' },
            { who: 'Adviser', s: 'Yes, that’s fine.' },
            { who: 'Kwame', s: 'Is there a monthly fee for the account?' },
            { who: 'Adviser', s: 'Our standard account is free. There’s also a premium account, which costs twelve pounds a month and includes travel insurance.' },
            { who: 'Kwame', s: 'The free one is fine, thanks. How long does it take to get a debit card?' },
            { who: 'Adviser', s: 'It usually arrives by post in about a week.' },
          ] },
          { t: 'ex', kind: 'tf', h: 'Think about the conversation. True or false?', items: [
            { q: 'Kwame wants to open a savings account.', a: 'f', why: '*I’d like to open a current account.*' },
            { q: 'His tenancy agreement is enough as proof of address.', a: 't', why: '*Is that enough?* *Yes, that’s fine.*' },
            { q: 'The standard account costs twelve pounds a month.', a: 'f', why: 'The standard account is free. The premium account costs twelve pounds.' },
            { q: 'The debit card comes by post.', a: 't', why: '*It usually arrives by post in about a week.*' },
          ] },
        ],
        [
          { t: 'text', md: 'Always ask about money before you sign: *Is there a fee for…?*, *How much does it cost to…?*, *Are there any charges if…?*' },
          { t: 'ex', kind: 'gap', h: 'Complete the questions at the bank.', items: [
            { q: 'I’d like ___ open a current account, please.', a: ['to'], why: '*would like* + *to* + verb.' },
            { q: 'Is there a monthly ___ for this account?', a: ['fee', 'charge'], why: 'A *fee* or *charge* is money you pay for a service.' },
            { q: 'How much does it ___ to send money abroad?', a: ['cost'], why: '*How much does it cost to…?*' },
            { q: 'Are there any charges ___ I use my card in another country?', a: ['if', 'when'], why: '*if* or *when* + a situation.' },
          ] },
          { t: 'ex', kind: 'order', h: 'Put the words in order.', items: [
            { a: 'I’d like to open a current account.', why: '*I’d like to* + verb: a polite request.' },
            { a: 'How long does it take to get a card?', why: '*How long does it take to…?* asks about time.' },
          ] },
        ],
        [
          { t: 'ex', kind: 'match', h: 'Match the word and the example.', pairs: [
            ['proof of identity', 'for example, your passport'],
            ['proof of address', 'for example, a council tax bill'],
            ['debit card', 'you pay in shops with it'],
            ['overdraft', 'you spend more than you have'],
            ['sort code', 'a six-digit number for your bank'],
          ] },
        ],
      ],
    },
    {
      id: 'p2',
      title: 'Registering for services',
      about: 'Register with a doctor, the council and an energy supplier, and fill in forms.',
      art: 'cat',
      spreads: [
        [
          { t: 'text', md: 'After you move in, there are a few places to register. In the UK you register with a local doctor’s practice, called a **GP surgery**. You tell the **local council** that you live there, because of *council tax*. For gas and electricity, the supply is often already on: you tell the **energy supplier** your name and send a **meter reading**, the number on the meter.' },
          { t: 'examples', items: [
            { s: 'I’d like to **register as a new patient**, please.', n: 'At the GP surgery.' },
            { s: 'I’ve **just moved into** a flat on Mill Lane.', n: 'Present perfect with *just*: it happened a short time ago.' },
            { s: 'I’m calling to **set up** an account for gas and electricity.', n: '*set up*: start a service.' },
            { s: 'The meter reading is 04512.', n: 'Read all the numbers on the meter, from left to right.' },
          ] },
          { t: 'tip', art: 'owl', md: 'Registering with a GP is free. If you do not have proof of address yet, tell the surgery: in England, a surgery should not refuse you just because you do not have it.' },
        ],
        [
          { t: 'text', md: 'Forms in English use some fixed words and abbreviations.' },
          { t: 'table', caption: 'Words on forms', explain: ['head', 'col1'], quiz: true, head: ['On the form', 'What it means'], rows: [
            ['Surname', 'your family name'],
            ['First name(s)', 'your given name or names'],
            ['Title', 'Mr, Mrs, Ms, Miss or Mx'],
            ['DOB', 'date of birth: day, month, year'],
            ['Block capitals', 'write in capital letters: SMITH'],
            ['N/A', 'not applicable: the question is not for you'],
            ['Delete as appropriate', 'cross out the answers that are not true for you'],
          ] },
          { t: 'tip', art: 'owl', md: 'In the UK, dates are written with the day first: *04/07/2026* is 4 July, not 7 April.' },
        ],
        [
          { t: 'ex', kind: 'choice', h: 'Fill in the form correctly.', items: [
            { q: 'Your date of birth is 9 March 1992. You write: ___', o: ['09/03/1992', '03/09/1992', '1992/09/03'], why: 'In the UK: day, month, year.' },
            { q: 'Surname (block capitals). Your name is Grace Okafor. You write: ___', o: ['OKAFOR', 'Okafor', 'GRACE'], why: '*Surname* is the family name; *block capitals* means all capital letters.' },
            { q: '“Name of your last GP in the UK”. You have never had a GP in the UK. You write: ___', o: ['N/A', 'Yes', 'GP'], why: '*N/A*: the question is not for you.' },
          ] },
          { t: 'ex', kind: 'match', h: 'Where do you go?', pairs: [
            ['the GP surgery', 'to see a doctor'],
            ['the local council', 'to pay council tax'],
            ['an energy supplier', 'to get gas and electricity'],
            ['a water company', 'to pay for your water'],
            ['the bank', 'to get a debit card'],
          ] },
        ],
        [
          { t: 'ex', kind: 'gap', h: 'Complete the phone calls.', items: [
            { q: 'I’d like to register ___ a new patient.', a: ['as'], why: '*register as* + a role: *as a new patient*.' },
            { q: 'I’ve just ___ into a flat on Mill Lane. (move)', a: ['moved'], why: 'Present perfect: *have just* + past participle.' },
            { q: 'I’m calling to ___ up an account for electricity.', a: ['set'], why: '*set up an account*: start it.' },
            { q: 'Could you ___ me your postcode, please?', a: ['give', 'tell'], why: '*give* or *tell me* + information.' },
          ] },
        ],
      ],
    },
    {
      id: 'p3',
      title: 'An appointment email',
      about: 'Understand an email that confirms an appointment and lists the documents to bring.',
      art: 'teacup',
      spreads: [
        [
          { t: 'text', md: 'Banks, surgeries and offices often confirm appointments by email. Look for four things: the date and time, the place, what to bring, and how to change or cancel.' },
          { t: 'reading', title: 'New patient appointment: confirmation', md: 'Dear Ms Nowak,\n\nThank you for registering with Riverside Medical Centre. This email confirms your new patient appointment with our practice nurse on Wednesday 14 October at 10.20 am. The surgery is at 3 Church Street, and the nurse’s room is on the ground floor.\n\nThe appointment takes about twenty minutes. The nurse will check your blood pressure, height and weight, and ask about your health and any medicines you take.\n\nPlease bring a photo ID, such as your passport, and a letter that shows your address. If you take any medicines, please bring them or a list of their names. If you have vaccination records from your home country, please bring those too.\n\nPlease arrive five minutes early and check in at reception or on the screen in the waiting room. If you need to change or cancel your appointment, please call us on 0113 496 0000 at least 24 hours before.\n\nWe will send you your login details for online appointments by post.\n\nKind regards,\nReception team, Riverside Medical Centre' },
        ],
        [
          { t: 'ex', kind: 'tf', ng: true, h: 'Read the email. True, false or not given?', items: [
            { q: 'The appointment is with a doctor.', a: 'f', why: 'It is *with our practice nurse*.' },
            { q: 'Ms Nowak needs to bring a photo ID.', a: 't', why: '*Please bring a photo ID, such as your passport.*' },
            { q: 'If she takes medicines, she can bring a list of their names.', a: 't', why: '*Please bring them or a list of their names.*' },
            { q: 'The appointment takes about half an hour.', a: 'f', why: '*About twenty minutes.*' },
            { q: 'To cancel, she should call at least a day before.', a: 't', why: '*At least 24 hours before.*' },
            { q: 'The surgery is open on Saturdays.', a: 'ng', why: 'The email does not give the opening hours.' },
            { q: 'She will get her login details by email.', a: 'f', why: '*By post.*' },
          ] },
        ],
        [
          { t: 'text', md: 'To change an appointment, be polite and suggest another time: *I am afraid I cannot come on…*, *Would it be possible to move it to…?*' },
          { t: 'ex', kind: 'order', h: 'Build the sentences for a reply.', items: [
            { a: 'I am afraid I cannot come on Wednesday.', why: '*I am afraid* makes bad news polite.' },
            { a: 'Would it be possible to change my appointment?', why: '*Would it be possible to…?* is a polite request.' },
          ] },
          { t: 'ex', kind: 'choice', h: 'Which sentence is correct and polite?', items: [
            { q: '', o: ['Could I move my appointment to Friday, please?', 'Move my appointment to Friday.', 'Could I moving my appointment to Friday?'], why: '*Could I* + verb, with *please*.' },
            { q: '', o: ['I am afraid I need to cancel my appointment.', 'I cancel my appointment, sorry.', 'I am afraid to cancel my appointment.'], why: '*I am afraid I need to…* gives bad news politely. *I am afraid to* means you are scared.' },
          ] },
        ],
      ],
    },
  ],
  test: [
    { t: 'ex', kind: 'choice', h: 'Choose the right answer.', items: [
      { q: 'As proof of address, the bank can accept ___.', o: ['a council tax bill', 'your passport', 'your debit card'], why: 'A bill or letter with your name and address on it.' },
      { q: 'Date of birth: 2 May 1990. On a UK form you write ___.', o: ['02/05/1990', '05/02/1990', '1990/02/05'], why: 'Day, month, year.' },
      { q: 'The everyday account for your salary is a ___.', o: ['current account', 'savings account', 'overdraft'], why: 'A *current account* is for everyday money.' },
      { q: 'You have no children. The form asks for your children’s names. You write ___.', o: ['N/A', 'NO NAME', 'DOB'], why: '*N/A*: not applicable.' },
    ] },
    { t: 'ex', kind: 'gap', h: 'Complete the sentences.', items: [
      { q: 'Is there a monthly ___ for the account?', a: ['fee', 'charge'], why: 'Money you pay for the account.' },
      { q: 'I’d like to register as a new ___.', a: ['patient'], why: 'At the GP surgery you are a *patient*.' },
      { q: 'Please write your surname in block ___.', a: ['capitals'], why: '*block capitals*: SMITH.' },
      { q: 'Please call at least 24 hours before if you need to ___ your appointment.', a: ['cancel', 'change'], why: '*cancel* or *change an appointment*.' },
    ] },
    { t: 'ex', kind: 'match', h: 'Match the word and its meaning.', pairs: [
      ['sort code', 'a number for your bank'],
      ['meter reading', 'the number on your gas or electricity meter'],
      ['surname', 'your family name'],
      ['GP', 'a family doctor'],
    ] },
  ],
};
