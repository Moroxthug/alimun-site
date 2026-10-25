// The audio plan of each course book (/data/audio/<book>.json): which sentences are spoken, by which voice and in
// which style, each with the hash of its file in Supabase Storage course-audio/<book>/<hash>.mp3.
// Source: src/data/books/audio.js. Read by /api/speech?action=generate and by the reader (js/app/reader.js).
import { allBooks } from '../../../data/books/load.js';
import { allTests } from '../../../data/tests/load.js';
import { audioPlan, testAudioPlan } from '../../../data/books/audio.js';

export function getStaticPaths() {
  /* Mock tests (step 8) have their recordings planned the same way, under their own id */
  return allBooks().map((b) => ({ params: { book: b.id } })).concat(allTests().map((T) => ({ params: { book: T.id } })));
}

export function GET({ params }) {
  const book = allBooks().find((b) => b.id === params.book);
  const plan = book ? audioPlan(book) : testAudioPlan(allTests().find((T) => T.id === params.book));
  return new Response(JSON.stringify(plan), { headers: { 'Content-Type': 'application/json' } });
}
