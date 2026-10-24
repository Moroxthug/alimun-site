// The list of course books (/data/books/index.json): which language and level has a book, and how many units are written.
const books = import.meta.glob('../../../data/books/*-*.js', { eager: true });

export function GET() {
  const list = Object.values(books).map(({ BOOK }) => ({
    id: BOOK.id, language: BOOK.language, level: BOOK.level, review: BOOK.review,
    written: BOOK.units.filter((u) => !u.planned).length, units: BOOK.units.length,
  }));
  return new Response(JSON.stringify({ books: list }), { headers: { 'Content-Type': 'application/json' } });
}
