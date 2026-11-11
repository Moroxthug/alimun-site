// Class lessons (docs/LESSONS_PLAN.md) as static JSON: /data/classes/<course>.json, the course order with every
// lesson's content merged in. Source: src/data/classes/<course>.js and src/data/classes/<course>/<id>.js.
// Read by the teacher dashboard (js/app/teach-lessons.js). Content is for teachers, in English.
const courses = import.meta.glob('../../../data/classes/*.js', { eager: true });
const lessons = import.meta.glob('../../../data/classes/*/*.js', { eager: true });

function build(COURSE) {
  const out = JSON.parse(JSON.stringify(COURSE));
  out.lessons = out.lessons.map((meta) => {
    const hit = Object.entries(lessons).find(([p]) => p.endsWith(`/${COURSE.id}/${meta.id}.js`));
    return hit ? Object.assign({}, meta, JSON.parse(JSON.stringify(hit[1].LESSON))) : Object.assign({ planned: true }, meta);
  });
  return out;
}

export function getStaticPaths() {
  return Object.values(courses).map(({ COURSE }) => ({ params: { course: COURSE.id } }));
}

export function GET({ params }) {
  const found = Object.values(courses).find(({ COURSE }) => COURSE.id === params.course);
  return new Response(JSON.stringify(build(found.COURSE)), { headers: { 'Content-Type': 'application/json' } });
}
