// Preview editions of course books (preview: true in the book file), for the owner's review: /data/books/preview.json.
// Same entries as /data/books/index.json; the reader opens them only by link (js/app/reader.js), never lists them.
import { allBooks } from '../../../data/books/load.js';

export function GET() {
  const list = allBooks().filter((BOOK) => BOOK.preview).map((BOOK) => ({
    id: BOOK.id, language: BOOK.language, level: BOOK.level, review: BOOK.review,
    track: BOOK.track || 'core', goal: BOOK.goal || null, preview: true,
    written: BOOK.units.filter((u) => !u.planned).length, units: BOOK.units.length,
  }));
  return new Response(JSON.stringify({ books: list }), { headers: { 'Content-Type': 'application/json' } });
}
