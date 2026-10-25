// The audio plan of each course book (/data/audio/<book>.json): which sentences are spoken, by which voice and in
// which style, each with the hash of its file in Supabase Storage course-audio/<book>/<hash>.mp3.
// Source: src/data/books/audio.js. Read by /api/speech?action=generate and by the reader (js/app/reader.js).
import { allBooks } from '../../../data/books/load.js';
import { audioPlan } from '../../../data/books/audio.js';

export function getStaticPaths() {
  return allBooks().map((b) => ({ params: { book: b.id } }));
}

export function GET({ params }) {
  const book = allBooks().find((b) => b.id === params.book);
  return new Response(JSON.stringify(audioPlan(book)), { headers: { 'Content-Type': 'application/json' } });
}
