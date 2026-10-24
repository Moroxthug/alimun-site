// The list of course books (/data/books/index.json): which language and level has a book, and how many units are written.
import { allBooks } from '../../../data/books/load.js';

export function GET() {
  const list = allBooks().map((BOOK) => ({
    id: BOOK.id, language: BOOK.language, level: BOOK.level, review: BOOK.review,
    track: BOOK.track || 'core', goal: BOOK.goal || null,
    written: BOOK.units.filter((u) => !u.planned).length, units: BOOK.units.length,
  }));
  return new Response(JSON.stringify({ books: list }), { headers: { 'Content-Type': 'application/json' } });
}
