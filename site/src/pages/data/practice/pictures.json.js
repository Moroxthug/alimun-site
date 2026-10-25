// Words for the picture exercises (/data/practice/pictures.json): objects and scenes of the third cast in each
// course language. Source: src/data/practice/pictures.js. Read by the Practice screen (js/app/practice.js).
import { OBJECTS, SCENES } from '../../../data/practice/pictures.js';

export function GET() {
  return new Response(JSON.stringify({ objects: OBJECTS, scenes: SCENES }), { headers: { 'Content-Type': 'application/json' } });
}
