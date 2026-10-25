// Course audio (docs/DASHBOARD_PLAN.md, step 5): which sentences of a book are spoken, by which voice, in which style.
// The site build serves this plan as /data/audio/<book>.json; /api/speech?action=generate makes the missing files
// (Gemini text-to-speech, MP3) into Supabase Storage course-audio/<book>/<hash>.mp3, and the reader plays them.
// Owner (25 Oct 2026): main voices Sulafat (woman) and Orus (man); the rest of the shortlist for other speakers.
// Item keys follow the reader: <unit>:<lesson id or "test">:<block index in the lesson>:<item> (examples: item;
// dialogue: line; reading: paragraph).
import { createHash } from 'node:crypto';

export const MODEL = 'gemini-3.8-flash-tts';
export const FEMALE = ['Sulafat', 'Kore', 'Aoede', 'Leda', 'Vindemiatrix'];
export const MALE = ['Orus', 'Charon', 'Puck', 'Achird', 'Sadaltager'];

const STYLE = {
  slow: 'clear and natural, at a slow, calm pace for learners',
  calm: 'clear and natural, at a calm pace for learners',
  talk: 'a natural everyday conversation, clear and at a calm pace',
  read: 'reading aloud clearly and naturally, at a calm pace',
};

/* Speakers' genders: names and roles used in the dialogues. Unknown ones ("Receptionist", "Sam") take the
   gender that contrasts with the other speaker. */
const WOMEN = 'Abena Aiko Aisha Amara Amira Ana Aylin Ayumi Bethan Birgit Carla Clara Elena Elif Farah Farida Fatima Fatma Fatou Grace Hana Hannah Helen Ines Inés Jana Ji-woo Joanna Katrin Lea Leila Lena Leyla Lina Lucía Mara Margaret Mariam Marta Maya Mei Mira Nadia Olga Priya Rania Rosa Sabine Sara Selin Sofia Sofie Sophie Waitress Woman Yuki';
const MEN = 'Amir Andrés Arjun Ben Bilal Callum Carlos Daniel David Diego Emre Felix Gareth Ibrahim James Javier Jin Jonas Joon Joseph Jun Karim Kemal Kenji Kofi Kunde Kwame Leo Liam Lucas Lukas Man Mann Marco Mateo Mehmet Mitarbeiter Noah Oliver Omar Owen Paul Paulo Pedro Peter Prüfer Rafael Raj Ravi Tarek Tomasz Tomás Verkäufer Waiter Yusuf';
const W = new Set(WOMEN.split(' ')), M = new Set(MEN.split(' '));
export function gender(who) {
  const w = String(who).trim(), first = w.split(/\s+/)[0];
  if (/^(Frau|Ms|Mrs|Miss)\b/.test(w)) return 'f';
  if (/^(Herr|Mr)\b/.test(w)) return 'm';
  if (W.has(w) || W.has(first)) return 'f';
  if (M.has(w) || M.has(first)) return 'm';
  if (/^[A-ZÄÖÜ][a-zäöüß]+in$/.test(w) && w.length > 5) return 'f';  /* German roles: Kellnerin, Verkäuferin */
  return null;
}

function num(s) { return parseInt(createHash('sha1').update(String(s)).digest('hex').slice(0, 8), 16); }
export function hashOf(voice, style, text) { return createHash('sha1').update(MODEL + '|' + voice + '|' + style + '|' + text).digest('hex').slice(0, 16); }
/* Spoken text: book markup removed */
export function plain(s) { return String(s || '').replace(/\*\*?/g, '').replace(/\[([^\]]+)\]/g, '$1').replace(/\s+/g, ' ').trim(); }

/* Voices for the speakers of one dialogue: a matching gender, the same voice for a name across the book where
   possible, never two speakers with one voice */
function dialogueVoices(lines) {
  const order = [];
  lines.forEach((l) => { if (!order.includes(l.who)) order.push(l.who); });
  const g = {};
  order.forEach((w, i) => { g[w] = gender(w); });
  order.forEach((w, i) => {
    if (g[w]) return;
    const other = order.filter((x) => x !== w).map((x) => g[x]).find(Boolean);
    g[w] = other === 'f' ? 'm' : other === 'm' ? 'f' : i % 2 ? 'm' : 'f';
  });
  const used = new Set(), out = {};
  order.forEach((w) => {
    const pool = g[w] === 'f' ? FEMALE : MALE;
    let k = num(w) % pool.length;
    for (let n = 0; n < pool.length && used.has(pool[k]); n++) k = (k + 1) % pool.length;
    out[w] = pool[k]; used.add(pool[k]);
  });
  return out;
}

/* The audio plan of a book: { book, model, items: { key: [hash, voice, style, text] } } */
export function audioPlan(book) {
  const items = {};
  const slow = /^A[12]$/.test(book.level);
  const add = (key, voice, style, text) => {
    const t = plain(text);
    if (t) items[key] = [hashOf(voice, style, t), voice, style, t];
  };
  book.units.filter((u) => !u.planned).forEach((u) => {
    const lessons = (u.pages || []).map((p) => ({ id: p.id, blocks: (p.spreads || []).flat() }));
    lessons.forEach((l) => {
      /* The narrator changes from lesson to lesson: Sulafat or Orus */
      const narrator = num(book.id + ':' + u.id + ':' + l.id) % 2 ? 'Orus' : 'Sulafat';
      l.blocks.forEach((b, gi) => {
        const base = u.id + ':' + l.id + ':' + gi + ':';
        if (b.t === 'examples') b.items.forEach((x, i) => add(base + i, narrator, slow ? STYLE.slow : STYLE.calm, x.s));
        if (b.t === 'reading') String(b.md || '').split(/\n\s*\n/).forEach((p, i) => add(base + i, narrator, STYLE.read, p));
        if (b.t === 'dialogue') {
          const v = dialogueVoices(b.lines);
          b.lines.forEach((ln, i) => add(base + i, v[ln.who], STYLE.talk, ln.s));
        }
      });
    });
  });
  return { book: book.id, model: MODEL, items };
}
