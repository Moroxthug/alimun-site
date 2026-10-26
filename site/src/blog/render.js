// Blog: the article templates, the blog home and the reading strip (docs/BLOG_PLAN.md).
// Shared by src/pages/blog/[p].astro (pages) and scripts/localize.mjs (the strip on every page).
// Second design (owner, 26 Oct 2026): white pages built on the approved patterns of the site: the course
// hero (title, video in a rounded frame), the About split (photo beside text), the homepage course list
// (big title rows beside a photo that changes) and white cards with rounded photos. No black backgrounds.
// Every value from the data files is escaped; **phrase** becomes the lime marker used on course pages.

import MEDIA from '../data/blog/media.js';

export const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const mark = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<mark class="bl-mark">$1</mark>');
const plain = (t) => esc(String(t || '').replace(/\*\*/g, ''));
const ARROW = '<img src="/images/icon-arrow-light.svg" loading="lazy" alt="" class="icon-16">';

export const prefix = (site) => (site === 'en' ? '/' : `/${site}/`);
export const articlePath = (a) => `${prefix(a.site)}blog/${a.slug}`;
export const blogPath = (site) => `${prefix(site)}blog`;
export const videoOf = (key) => MEDIA[key] || MEDIA._home;
export const posterOf = (key) => `/videos/${videoOf(key)}-poster-00001.jpg`;

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
const metaLine = (a, ui) => `${esc(ui.courses[a.course])}, ${esc(ui.themes[a.theme])}, ${esc(ui.min(minutes(a)))}`;

/* ---------- Cards: rounded photo, then the title (the strip, "Keep reading") ---------- */
export function card(a, ui) {
  return `<a class="bl-card bl-rise" href="${articlePath(a)}">` +
    `<span class="bl-card_photo shadow-card"><img src="${posterOf(a.key)}" loading="lazy" alt=""></span>` +
    `<span class="bl-card_meta">${metaLine(a, ui)}</span>` +
    `<span class="bl-card_title">${esc(a.title)}</span>` +
    `<span class="bl-card_desc">${esc(a.desc)}</span>` +
    `<span class="bl-card_go">${esc(ui.read)}</span></a>`;
}

/* The strip shown before the bottom banner on every public page of a language with articles */
export function strip(list, ui, site) {
  if (!list.length) return '';
  return `<section class="section bl-strip"><div class="container-large">` +
    `<div class="bl-strip_head"><h2 class="heading-style-h2">${esc(ui.strip)}</h2><a class="button is-secondary w-inline-block" href="${blogPath(site)}"><p>${esc(ui.all)}</p>${ARROW}</a></div>` +
    `<div class="bl-cards">${list.slice(0, 3).map((a) => card(a, ui)).join('')}</div></div></section>`;
}

/* ---------- Article blocks ---------- */
function block(b, ui) {
  if (b.h) return `<h2 class="heading-style-h3 bl-h bl-rise">${esc(b.h)}</h2>`;
  if (b.p) return `<p class="text-size-large bl-p bl-rise">${mark(b.p)}</p>`;
  if (b.quote) return `<p class="bl-quote bl-rise">${mark(b.quote)}</p>`;
  if (b.note) return `<div class="bl-note bl-rise"><p class="bl-note_title">${esc(b.note.title)}</p><p class="text-size-medium">${mark(b.note.text)}</p></div>`;
  if (b.table) {
    const t = b.table;
    return `<div class="bl-table bl-rise"><table><thead><tr>${t.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead>` +
      `<tbody>${t.rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${mark(c)}</th>` : `<td>${mark(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>` +
      (t.note ? `<p class="text-size-small bl-table_note">${esc(t.note)}</p>` : '') + `</div>`;
  }
  if (b.levels) return `<div class="bl-levels">${b.levels.map(([code, name, text]) =>
    `<div class="bl-level shadow-card bl-rise"><p class="bl-level_code"><span>${esc(code)}</span></p><p class="bl-level_name">${esc(name)}</p><p class="text-size-small">${mark(text)}</p></div>`).join('')}</div>`;
  if (b.panels) return `<div class="bl-panels">${b.panels.map(([name, text]) =>
    `<div class="bl-panel shadow-card bl-rise"><p class="bl-panel_name"><span>${esc(name)}</span></p><p class="text-size-medium">${mark(text)}</p></div>`).join('')}</div>`;
  if (b.examples) return `<div class="bl-examples bl-rise">${b.examples.map(([s, tr]) =>
    `<div class="bl-example"><p class="bl-example_s">${mark(s)}</p>${tr ? `<p class="bl-example_t">${esc(tr)}</p>` : ''}</div>`).join('')}</div>`;
  if (b.mistakes) return `<div class="bl-mistakes bl-rise">${b.mistakes.map(([wrong, right, why]) =>
    `<div class="bl-mistake"><p class="bl-mistake_w"><span class="bl-sr">${esc(ui.wrongLabel)}: </span><s>${esc(wrong)}</s></p><p class="bl-mistake_r"><span class="bl-sr">${esc(ui.rightLabel)}: </span>${mark(right)}</p><p class="text-size-small bl-mistake_why">${mark(why)}</p></div>`).join('')}</div>`;
  if (b.quiz) return `<div class="bl-quiz shadow-card bl-rise" data-bl-quiz><h2 class="heading-style-h3 bl-quiz_title">${esc(ui.tryIt)}</h2>${b.quiz.map((q) =>
    `<div class="bl-q" data-a="${Number(q.a)}"><p class="bl-q_text">${mark(q.q)}</p><div class="bl-q_opts">${q.options.map((o, i) =>
      `<button type="button" class="bl-opt" data-i="${i}">${esc(o)}</button>`).join('')}</div><p class="bl-q_why" aria-live="polite" data-ok="${esc(ui.correct)}" data-no="${esc(ui.notQuite)}" data-why="${esc(q.why)}"></p></div>`).join('')}</div>`;
  if (b.verdict) return `<div class="bl-verdict shadow-card bl-rise"><p class="bl-verdict_title">${esc(b.verdict.title)}</p><p class="text-size-large">${mark(b.verdict.text)}</p></div>`;
  return '';
}

/* ---------- Article page parts ---------- */
const video = (name) => `<div class="video_box"><div class="video_bg"><div class="video_bg w-background-video w-background-video-atom"><video autoplay loop muted playsinline poster="/videos/${name}-poster-00001.jpg" style="background-image:url(&quot;/videos/${name}-poster-00001.jpg&quot;)" data-object-fit="cover"><source src="/videos/${name}-transcode.mp4"><source src="/videos/${name}-transcode.webm"></video></div></div></div>`;

/* Hero: the course pages' hero (title, then the video in a rounded frame that grows as the page scrolls) */
export function hero(a, ui) {
  const meta = `${esc(ui.by)} ${esc(a.author || ui.author)}, ${esc(ui.updated)} ${esc(dateText(ui, a.updated))}, ${esc(ui.min(minutes(a)))}`;
  return `<section class="section is-about-hero bl-hero"><div class="container-large"><div class="about-hero_wrap">` +
    `<a class="bl-back" href="${blogPath(a.site)}">${esc(ui.back)}</a>` +
    `<div class="bl-hero_title"><h1 class="heading-style-h1">${esc(a.title)}</h1></div>` +
    `<div class="about-visual_wrap">${video(videoOf(a.key))}</div>` +
    `<div class="bl-hero_text"><p class="bl-lead">${mark(a.lead)}</p><p class="bl-meta">${meta}</p></div>` +
    `</div></div>${HERO_SCRIPT}</section>`;
}
const HERO_SCRIPT = `<script>(function () { var root = document.currentScript.closest(".bl-hero"); function update() { var p = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 0.5))); root.style.setProperty("--hero-s", (0.9 + p * 0.1).toFixed(3)); root.style.setProperty("--hero-z", (1.15 - p * 0.15).toFixed(3)); } window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update); update(); })();</script>`;

/* Body: one reading column */
export function body(a, ui) {
  const sources = a.sources && a.sources.length
    ? `<p class="text-size-small bl-sources">${esc(ui.sources)}: ${a.sources.map(([label, url]) => /^https:\/\//.test(url) ? `<a href="${esc(url)}" rel="noopener" target="_blank">${esc(label)}</a>` : esc(label)).join(', ')}.</p>` : '';
  return `<section class="section bl-body is-${a.template}"><div class="container-large"><article class="bl-text">` +
    `${a.blocks.map((b) => block(b, ui)).join('')}${sources}</article></div></section>`;
}

/* The course, after the FAQ, in the About layout (photo beside the text) */
export function courseSection(a, ui, course) {
  if (!course) return '';
  return `<section class="section bl-split bl-course"><div class="container-large"><div class="bl-split_grid">` +
      `<div class="bl-split_photo shadow-card"><img src="/videos/${MEDIA['_' + a.course] || MEDIA._home}-poster-00001.jpg" loading="lazy" alt=""></div>` +
      `<div class="bl-split_text"><h2 class="heading-style-h2">${esc(course.title)}</h2><p class="text-size-large">${esc(course.text)}</p>` +
      `<div class="bl-split_btns"><a class="button w-inline-block" href="${course.href}"><p>${esc(ui.courseCta)}</p>${ARROW}</a>` +
      `<a class="button is-secondary w-inline-block" href="${course.testHref}"><p>${esc(ui.testCta)}</p>${ARROW}</a></div></div></div></div></section>`;
}

export function keepReading(list, ui) {
  if (!list.length) return '';
  return `<section class="section bl-more"><div class="container-large"><h2 class="heading-style-h2 bl-more_title">${esc(ui.keep)}</h2>` +
    `<div class="bl-cards">${list.slice(0, 3).map((a) => card(a, ui)).join('')}</div></div></section>`;
}

/* ---------- Blog home ---------- */
export function home(site, list, ui) {
  const sorted = list.slice().sort((x, y) => (y.published + y.slug).localeCompare(x.published + x.slug));
  const featured = sorted.find((a) => a.key === ui.featured) || sorted[0];
  const courses = [...new Set(sorted.map((a) => a.course))];
  const heroBlock = `<section class="section is-about-hero bl-hero is-home"><div class="container-large"><div class="about-hero_wrap">` +
    `<div class="bl-hero_title"><h1 class="heading-style-h1">${esc(ui.blogTitle)}</h1></div>` +
    `<div class="about-visual_wrap">${video(MEDIA._home)}</div>` +
    `<div class="bl-hero_text"><p class="bl-lead">${esc(ui.blogLead)}</p></div></div></div>${HERO_SCRIPT}</section>`;
  const feat = featured
    ? `<section class="section bl-split bl-featured"><div class="container-large"><div class="bl-split_grid">` +
      `<a class="bl-split_photo shadow-card" href="${articlePath(featured)}" tabindex="-1" aria-hidden="true"><img src="${posterOf(featured.key)}" loading="lazy" alt=""></a>` +
      `<div class="bl-split_text"><p class="bl-split_meta">${metaLine(featured, ui)}</p><h2 class="heading-style-h2"><a href="${articlePath(featured)}">${esc(featured.title)}</a></h2>` +
      `<p class="text-size-large">${plain(featured.lead)}</p><div class="bl-split_btns"><a class="button w-inline-block" href="${articlePath(featured)}"><p>${esc(ui.read)}</p>${ARROW}</a></div></div></div></div></section>`
    : '';
  const lists = courses.map((c) => {
    const items = sorted.filter((a) => a.course === c);
    return `<section class="section bl-index"><div class="container-large"><div class="bl-index_grid"><div>` +
      `<div class="bl-index_head"><h2 class="heading-style-h2">${esc(ui.courseHeading(ui.courses[c]))}</h2><p class="text-size-medium">${esc(ui.courseLead[c] || '')}</p></div>` +
      `<ul class="bl-index_list">${items.map((a, i) => `<li class="bl-index_row${i === 0 ? ' is-on' : ''}" data-i="${i}"><a class="bl-index_link" href="${articlePath(a)}"><span class="bl-index_title">${esc(a.title)}</span><span class="bl-index_meta">${metaLine(a, ui)}</span></a></li>`).join('')}</ul></div>` +
      `<div class="bl-index_side"><div class="bl-index_media shadow-card" aria-hidden="true">${items.map((a, i) => `<img class="bl-index_img${i === 0 ? ' is-on' : ''}" src="${posterOf(a.key)}" loading="lazy" alt="">`).join('')}</div></div>` +
      `</div></div></section>`;
  }).join('');
  return heroBlock + feat + lists;
}

/* ---------- Structured data ---------- */
const BASE = 'https://alimun.com';
export function articleLd(a, ui, lang) {
  const url = BASE + articlePath(a);
  const graph = [
    { '@type': 'Article', headline: a.title, description: a.desc, inLanguage: lang, datePublished: a.published, dateModified: a.updated,
      author: a.authorUrl ? { '@type': 'Person', name: a.author, url: a.authorUrl } : { '@type': 'Organization', name: 'Alimun', url: BASE },
      publisher: { '@type': 'Organization', name: 'Alimun', url: BASE, logo: { '@type': 'ImageObject', url: BASE + '/images/webclip.png' } },
      image: BASE + posterOf(a.key), mainEntityOfPage: url },
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
    blogPost: list.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: BASE + articlePath(a), datePublished: a.published, image: BASE + posterOf(a.key) })) }).replace(/</g, '\\u003c');
}
