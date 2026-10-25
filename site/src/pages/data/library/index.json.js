// The list of library shelves (/data/library/index.json): language and level of each, and how many pieces.
import { allShelves } from '../../../data/library/load.js';

export function GET() {
  const list = allShelves().map((S) => ({
    id: S.id, language: S.language, level: S.level, review: S.review,
    listen: S.pieces.filter((p) => p.kind === 'listen').length, read: S.pieces.filter((p) => p.kind === 'read').length,
  }));
  return new Response(JSON.stringify({ shelves: list }), { headers: { 'Content-Type': 'application/json' } });
}
