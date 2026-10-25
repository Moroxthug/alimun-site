// The list of practice sets (/data/practice/index.json): which language and level each set is for.
import { allSets } from '../../../data/practice/load.js';

export function GET() {
  const list = allSets().map((s) => ({ id: s.id, language: s.language, level: s.level, review: s.review, blocks: s.blocks.length }));
  return new Response(JSON.stringify({ sets: list }), { headers: { 'Content-Type': 'application/json' } });
}
