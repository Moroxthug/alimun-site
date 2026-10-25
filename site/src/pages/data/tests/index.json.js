// The list of mock tests (/data/tests/index.json): language, level, format and the papers of each test.
import { allTests } from '../../../data/tests/load.js';

const MANUAL = { write: true, talk: true };
export function GET() {
  const list = allTests().map((T) => ({
    id: T.id, language: T.language, level: T.level, format: T.format, review: T.review,
    papers: T.papers.map((p) => ({
      id: p.id, title: p.title, minutes: p.minutes, parts: p.parts.length,
      questions: p.parts.reduce((n, pt) => n + pt.blocks.reduce((m, b) => m + (MANUAL[b.kind] ? 0 : b.pairs ? b.pairs.length : (b.items || []).length), 0), 0),
      tasks: p.parts.reduce((n, pt) => n + pt.blocks.reduce((m, b) => m + (MANUAL[b.kind] ? (b.choose ? 1 : b.items.length) : 0), 0), 0),
    })),
  }));
  return new Response(JSON.stringify({ tests: list }), { headers: { 'Content-Type': 'application/json' } });
}
