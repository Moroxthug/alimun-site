// Blog: the article templates, the blog home and the reading strip (docs/BLOG_PLAN.md).
// Shared by src/pages/blog/[p].astro (pages) and scripts/localize.mjs (the strip on every page).
// Every value from the data files is escaped; **phrase** becomes the lime marker used on course pages.
// Links are root-relative with the site's language folder, so pages work at any depth.

export const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const mark = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<mark class="bl-mark">$1</mark>');
const ARROW = '<img src="/images/icon-arrow-light.svg" loading="lazy" alt="" class="icon-16">';

export const prefix = (site) => (site === 'en' ? '/' : `/${site}/`);
export const articlePath = (a) => `${prefix(a.site)}blog/${a.slug}`;
export const blogPath = (site) => `${prefix(site)}blog`;

/* Words of the article's own text, for the reading time */
export function minutes(a) {
  const parts = [a.lead];
  for (const b of a.blocks) parts.push(b.h, b.p, b.quote, b.note && b.note.text, b.verdict && b.verdict.text,
    ...(b.table ? b.table.rows.flat() : []), ...(b.examples || []).flat(), ...(b.mistakes || []).flat(),
    ...(b.panels || []).flat(), ...(b.levels || []).flat(), ...(b.quiz || []).map((q) => q.q + ' ' + q.why));
  for (const [q, x] of a.faq || []) parts.push(q, x);
  const words = parts.filter(Boolean).join(' ').split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function dateText(ui, iso) {
  return new Intl.DateTimeFormat(ui.locale.replace('_', '-'), { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso + 'T00:00:00Z'));
}

/* ---------- Cards (blog home, keep reading, the strip) ---------- */
const TONES = ['is-white', 'is-lime', 'is-ink'];
export function card(a, ui, i = 0, big = false) {
  const tone = big ? 'is-ink' : TONES[i % 3];
  const cover = Array.isArray(a.cover) ? a.cover.join(' / ') : a.cover;
  return `<a class="bl-card ${tone}${big ? ' is-big' : ''} shadow-card bl-rise" href="${articlePath(a)}">` +
    `<span class="bl-card_cover" aria-hidden="true">${esc(cover)}</span>` +
    `<span class="bl-card_body"><span class="bl-card_title">${esc(a.title)}</span>` +
    `<span class="bl-card_desc">${esc(a.desc)}</span>` +
    `<span class="bl-card_meta">${esc(ui.courses[a.course])}, ${esc(ui.themes[a.theme])}, ${esc(ui.min(minutes(a)))}</span>` +
    `<span class="bl-card_go">${esc(ui.read)}</span></span></a>`;
}

/* The strip shown before the bottom banner on every public page of a language with articles */
export function strip(list, ui, site) {
  if (!list.length) return '';
  return `<section class="section bl-strip"><div class="container-large">` +
    `<div class="bl-strip_head"><h2 class="heading-style-h2">${esc(ui.strip)}</h2><a class="button is-secondary w-inline-block" href="${blogPath(site)}"><p>${esc(ui.all)}</p>${ARROW}</a></div>` +
    `<div class="bl-cards">${list.slice(0, 3).map((a, i) => card(a, ui, i)).join('')}</div></div></section>`;
}

/* ---------- Article blocks ---------- */
function block(b, ui) {
  if (b.h) return `<h2 class="heading-style-h3 bl-h bl-rise">${esc(b.h)}</h2>`;
  if (b.p) return `<p class="text-size-large bl-p bl-rise">${mark(b.p)}</p>`;
  if (b.quote) return `<p class="bl-quote bl-rise">${mark(b.quote)}</p>`;
  if (b.note) return `<div class="bl-note bl-rise"><p class="bl-note_title">${esc(b.note.title)}</p><p class="text-size-medium">${mark(b.note.text)}</p></div>`;
  if (b.table) {
    const t = b.table;
    return `<div class="bl-table bl-wide bl-rise"><table><thead><tr>${t.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>` +
      `<tbody>${t.rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${mark(c)}</th>` : `<td>${mark(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>` +
      (t.note ? `<p class="text-size-small bl-table_note">${esc(t.note)}</p>` : '') + `</div>`;
  }
  if (b.levels) return `<div class="bl-levels bl-wide">${b.levels.map(([code, name, text], i) =>
    `<div class="bl-level ${TONES[i % 3]} shadow-card bl-rise"><p class="bl-level_code">${esc(code)}</p><p class="bl-level_name">${esc(name)}</p><p class="text-size-small">${mark(text)}</p></div>`).join('')}</div>`;
  if (b.panels) return `<div class="bl-panels bl-wide">${b.panels.map(([name, text], i) =>
    `<div class="bl-panel ${i % 2 ? 'is-ink' : 'is-lime'} shadow-card bl-rise"><p class="bl-panel_name">${esc(name)}</p><p class="text-size-medium">${mark(text)}</p></div>`).join('')}</div>`;
  if (b.examples) return `<div class="bl-examples bl-rise">${b.examples.map(([s, tr]) =>
    `<div class="bl-example"><p class="bl-example_s">${mark(s)}</p>${tr ? `<p class="bl-example_t">${esc(tr)}</p>` : ''}</div>`).join('')}</div>`;
  if (b.mistakes) return `<div class="bl-mistakes bl-rise">${b.mistakes.map(([wrong, right, why]) =>
    `<div class="bl-mistake"><p class="bl-mistake_w"><span class="bl-sr">${esc(ui.wrongLabel)}: </span><s>${esc(wrong)}</s></p><p class="bl-mistake_r"><span class="bl-sr">${esc(ui.rightLabel)}: </span>${mark(right)}</p><p class="text-size-small bl-mistake_why">${mark(why)}</p></div>`).join('')}</div>`;
  if (b.quiz) return `<div class="bl-quiz bl-wide shadow-card bl-rise" data-bl-quiz><p class="bl-quiz_title">${esc(ui.tryIt)}</p>${b.quiz.map((q) =>
    `<div class="bl-q" data-a="${Number(q.a)}"><p class="bl-q_text">${mark(q.q)}</p><div class="bl-q_opts">${q.options.map((o, i) =>
      `<button type="button" class="bl-opt" data-i="${i}">${esc(o)}</button>`).join('')}</div><p class="bl-q_why" aria-live="polite" data-ok="${esc(ui.correct)}" data-no="${esc(ui.notQuite)}" data-why="${esc(q.why)}"></p></div>`).join('')}</div>`;
  if (b.verdict) return `<div class="bl-verdict bl-wide shadow-card bl-rise"><p class="bl-verdict_title">${esc(b.verdict.title)}</p><p class="text-size-large">${mark(b.verdict.text)}</p></div>`;
  return '';
}

/* ---------- Article page parts ---------- */
export function hero(a, ui) {
  const meta = `${esc(ui.by)} ${esc(a.author || ui.author)}, ${esc(ui.updated)} ${esc(dateText(ui, a.updated))}, ${esc(ui.min(minutes(a)))}`;
  const cover = a.template === 'compare' && Array.isArray(a.cover)
    ? `<div class="bl-cover is-split bl-rise" aria-hidden="true"><span class="bl-cover_half is-lime shadow-card"><span class="bl-cover_word">${esc(a.cover[0])}</span></span><span class="bl-cover_vs">${esc(ui.vs)}</span><span class="bl-cover_half is-ink shadow-card"><span class="bl-cover_word">${esc(a.cover[1])}</span></span></div>`
    : `<div class="bl-cover is-${a.tone || 'lime'} shadow-card bl-rise" aria-hidden="true"><span class="bl-cover_word">${esc(a.cover)}</span>${a.coverSub ? `<span class="bl-cover_sub">${esc(a.coverSub)}</span>` : ''}</div>`;
  return `<section class="section bl-hero is-${a.template}"><div class="container-large">` +
    `<a class="bl-back" href="${blogPath(a.site)}">${esc(ui.back)}</a>` +
    `<h1 class="heading-style-h1 bl-title">${esc(a.title)}</h1>` +
    `<div class="bl-hero_row"><p class="bl-lead">${mark(a.lead)}</p><p class="bl-meta">${meta}</p></div>` +
    cover + `</div></section>`;
}

export function body(a, ui, course) {
  const aside = course
    ? `<aside class="bl-aside"><div class="bl-course shadow-card"><p class="bl-course_title">${esc(course.title)}</p><p class="text-size-small">${esc(course.text)}</p>` +
      `<a class="button w-inline-block" href="${course.href}"><p>${esc(ui.courseCta)}</p>${ARROW}</a>` +
      `<a class="bl-course_test" href="${course.testHref}">${esc(ui.testCta)}</a></div></aside>`
    : '<aside class="bl-aside"></aside>';
  const sources = a.sources && a.sources.length
    ? `<p class="text-size-small bl-sources">${esc(ui.sources)}: ${a.sources.map(([label, url]) => /^https:\/\//.test(url) ? `<a href="${esc(url)}" rel="noopener" target="_blank">${esc(label)}</a>` : esc(label)).join(', ')}.</p>` : '';
  return `<section class="section bl-body is-${a.template}"><div class="container-large"><div class="bl-grid">${aside}` +
    `<article class="bl-text">${a.blocks.map((b) => block(b, ui)).join('')}${sources}</article></div></div></section>`;
}

export function keepReading(list, ui) {
  if (!list.length) return '';
  return `<section class="section bl-more"><div class="container-large"><h2 class="heading-style-h2 bl-more_title">${esc(ui.keep)}</h2>` +
    `<div class="bl-cards">${list.slice(0, 3).map((a, i) => card(a, ui, i)).join('')}</div></div></section>`;
}

/* ---------- Blog home ---------- */
export function home(site, list, ui) {
  const sorted = list.slice().sort((x, y) => (y.published + y.slug).localeCompare(x.published + x.slug));
  const featured = sorted.find((a) => a.slug === ui.featured) || sorted[0];
  const rest = sorted.filter((a) => a !== featured);
  const courses = [...new Set(rest.map((a) => a.course))];
  return `<section class="section bl-home-hero"><div class="container-large">` +
    `<h1 class="heading-style-h1 bl-home_title">${esc(ui.blogTitle)}</h1><p class="bl-home_lead">${esc(ui.blogLead)}</p>` +
    (featured ? `<div class="bl-featured">${card(featured, ui, 0, true)}</div>` : '') + `</div></section>` +
    courses.map((c) => {
      const items = rest.filter((a) => a.course === c);
      return `<section class="section bl-group"><div class="container-large"><div class="bl-group_head"><h2 class="heading-style-h2">${esc(ui.courseHeading(ui.courses[c]))}</h2><p class="text-size-medium">${esc(ui.courseLead[c] || '')}</p></div>` +
        `<div class="bl-cards">${items.map((a, i) => card(a, ui, i + 1)).join('')}</div></div></section>`;
    }).join('');
}

/* ---------- Structured data ---------- */
const BASE = 'https://alimun.com';
export function articleLd(a, ui, lang) {
  const url = BASE + articlePath(a);
  const graph = [
    { '@type': 'Article', headline: a.title, description: a.desc, inLanguage: lang, datePublished: a.published, dateModified: a.updated,
      author: a.authorUrl ? { '@type': 'Person', name: a.author, url: a.authorUrl } : { '@type': 'Organization', name: 'Alimun', url: BASE },
      publisher: { '@type': 'Organization', name: 'Alimun', url: BASE, logo: { '@type': 'ImageObject', url: BASE + '/images/webclip.png' } },
      image: BASE + '/images/alimun-og.jpg', mainEntityOfPage: url },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: BASE + prefix(a.site) },
      { '@type': 'ListItem', position: 2, name: ui.back, item: BASE + blogPath(a.site) },
      { '@type': 'ListItem', position: 3, name: a.title, item: url }] },
  ];
  if (a.faq && a.faq.length) graph.push({ '@type': 'FAQPage', mainEntity: a.faq.map(([q, x]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: x.replace(/\*\*/g, '') } })) });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
}
export function homeLd(site, list, ui) {
  return JSON.stringify({ '@context': 'https://schema.org', '@type': 'Blog', name: ui.blogTitle, description: ui.metaDesc, url: BASE + blogPath(site),
    publisher: { '@type': 'Organization', name: 'Alimun', url: BASE },
    blogPost: list.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: BASE + articlePath(a), datePublished: a.published })) }).replace(/</g, '\\u003c');
}
