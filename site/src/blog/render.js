// Blog: blog home, section pages, article page and the reading strip (docs/BLOG_PLAN.md, third design,
// approved by the owner on 26 Oct 2026 from /preview/blog-step1 and /preview/article-step2: "lock it in").
// Public nav and footer, dashboard look inside: bone page, white rounded cards, soft tinted cards with the
// drawing cast (drawn in the browser by js/app/cast.js from data-draw), forest buttons, lime markers and cards.
// Shared by src/pages/blog/[p].astro and scripts/localize.mjs (the strip on every page). Every value from the
// data files is escaped; **phrase** becomes the lime marker. Links are root-relative with the language folder.

import PHOTOS from '../data/blog/photos.js';

export const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const mark = (t) => esc(t).replace(/\*\*(.+?)\*\*/g, '<span class="ar-mark">$1</span>');
const plain = (t) => String(t || '').replace(/\*\*/g, '');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

export const SECTIONS = {
  levels: { draw: 'owl', tint: 'mint' },
  grammar: { draw: 'parrot', tint: 'sun' },
  vocabulary: { draw: 'cat', tint: 'coral' },
  learn: { draw: 'teacup', tint: 'lime' },
  exams: { draw: 'dragon', tint: 'mint' },
  abroad: { draw: 'suitcase', tint: 'sun' },
};
const ORDER = ['levels', 'grammar', 'vocabulary', 'learn', 'exams', 'abroad'];

export const prefix = (site) => (site === 'en' ? '/' : `/${site}/`);
export const articlePath = (a) => `${prefix(a.site)}blog/${a.slug}`;
export const blogPath = (site) => `${prefix(site)}blog`;
export const sectionPath = (site, ui, id) => `${blogPath(site)}/${ui.sectionSlugs[id]}`;
const levelTest = (site, course) => `${prefix(site)}level-test${course ? '?language=' + course : ''}`;
const photo = (id) => PHOTOS[id] || { src: '/images/blog/journal-and-coffee.jpg', w: 960, h: 640 };
const draw = (name, cls = '') => `<div class="${cls}" data-draw="${esc(name)}" aria-hidden="true"></div>`;

/* Words of the article's text, for the reading time */
function words(a) {
  const parts = [a.lead];
  for (const b of a.blocks) {
    parts.push(b.h, b.h3, b.p, b.quote, b.take && b.take.text, b.note && b.note.text, b.figure && b.figure.caption,
      ...(b.table ? [...b.table.head, ...b.table.rows.flat()] : []), ...(b.panels || []).flat(), ...(b.levels || []).flat(),
      ...(b.examples || []).flat(), ...(b.mistakes || []).flat());
  }
  for (const [q, x] of a.faq || []) parts.push(q, x);
  return parts.filter(Boolean).join(' ').split(/\s+/).length;
}
export const minutes = (a) => Math.max(2, Math.round(words(a) / 220));
export function dateText(ui, iso) {
  return new Intl.DateTimeFormat(ui.locale.replace('_', '-'), { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(iso + 'T00:00:00Z'));
}
const meta = (a, ui) => `${esc(ui.sections[a.section][0])}, ${esc(ui.courses[a.course])}, ${esc(ui.min(minutes(a)))}`;
const sorted = (list) => list.slice().sort((x, y) => (y.published + y.slug).localeCompare(x.published + x.slug));

/* ---------- Cards ---------- */
export function card(a, ui, cls = '') {
  const p = photo(a.photo);
  return `<a class="bm-card rv${cls}" href="${articlePath(a)}" data-search="${esc((a.title + ' ' + a.desc + ' ' + ui.sections[a.section][0]).toLowerCase())}">` +
    `<span class="bm-ph"><img src="${p.src}" width="${p.w}" height="${p.h}" loading="lazy" alt=""></span>` +
    `<span class="bm-in"><span class="bm-meta">${meta(a, ui)}</span><span class="bm-t">${esc(a.title)}</span>` +
    `<span class="bm-x">${esc(a.desc)}</span><span class="bm-go">${esc(ui.read)}</span></span></a>`;
}
function mini(a, ui) {
  const p = photo(a.photo);
  return `<a class="bm-mini rv" href="${articlePath(a)}"><img src="${p.src}" loading="lazy" alt=""><span><span class="bm-meta">${esc(ui.sections[a.section][0])}, ${esc(ui.courses[a.course])}</span><span class="bm-t">${esc(a.title)}</span></span></a>`;
}

/* The strip shown before the bottom banner of every public page in a language with articles */
export function strip(list, ui, site) {
  if (!list.length) return '';
  return `<section class="section bl-strip"><div class="container-large">` +
    `<div class="bl-strip_head"><h2 class="heading-style-h2">${esc(ui.strip)}</h2><a class="button is-secondary w-inline-block" href="${blogPath(site)}"><p>${esc(ui.all)}</p><img src="/images/icon-arrow-light.svg" loading="lazy" alt="" class="icon-16"></a></div>` +
    `<div class="bm bm-grid">${list.slice(0, 3).map((a) => card(a, ui)).join('')}</div></div></section>`;
}

const ctaCard = (site, ui) => `<div class="bm-cta rv"><div><h2>${esc(ui.ctaTitle)}</h2><p>${esc(ui.ctaText)}</p></div>` +
  `<div class="bm-cta_r">${draw('owl')}<a class="bm-btn" href="${levelTest(site)}">${esc(ui.levelTest)}</a></div></div>`;
const head2 = (title, lead, right = '') => `<div class="bm-h rv"><div><h2><span>${esc(title)}</span></h2>${lead ? `<p>${esc(lead)}</p>` : ''}</div>${right}</div>`;

/* ---------- Blog home ---------- */
export function home(site, list, ui) {
  const all = sorted(list);
  const featured = all.find((a) => a.key === ui.featured) || all[0];
  const top = [featured, ...all.filter((a) => a !== featured)].slice(0, 4);
  const latest = all.filter((a) => !top.includes(a));
  const bySection = (id) => all.filter((a) => a.section === id);
  const secs = ORDER.filter((id) => bySection(id).length);
  const fp = photo(featured.photo);
  return `<div class="bm"><div class="bm-wrap">` +
    `<div class="bm-top"><div class="bm-hello"><div><h1>${esc(ui.blogTitle)}</h1><p>${esc(ui.blogLead)}</p></div>` +
    `<form class="bm-search" role="search" data-search-form><input type="search" placeholder="${esc(ui.search)}" aria-label="${esc(ui.search)}"><button class="bm-btn" type="submit">${esc(ui.searchBtn)}</button></form></div>` +
    `<div class="bm-buddy"><div class="bm-bub">${esc(ui.bubble)}</div>${draw('book', 'bm-book')}</div></div>` +
    `<div class="bm-results" data-results hidden><div class="bm-grid"></div><p class="bm-none" hidden>${esc(ui.noResults)}</p></div>` +
    `<div data-browse>` +
    head2(ui.sectionsTitle) +
    `<div class="bm-secs">${secs.map((id) => `<a class="bm-sec rv t-${SECTIONS[id].tint}" href="${sectionPath(site, ui, id)}">${draw(SECTIONS[id].draw)}<span class="bm-d">${esc(ui.sections[id][0])}</span><span class="bm-n">${esc(ui.count(bySection(id).length))}</span></a>`).join('')}</div>` +
    head2(ui.topTitle) +
    `<div class="bm-top2"><a class="bm-card bm-lead rv" href="${articlePath(featured)}"><span class="bm-ph"><img src="${fp.src}" loading="lazy" alt=""></span><span class="bm-in"><span class="bm-meta">${meta(featured, ui)}</span><span class="bm-t">${esc(featured.title)}</span><span class="bm-x">${esc(plain(featured.lead))}</span><span class="bm-go">${esc(ui.read)}</span></span></a>` +
    `<div class="bm-side">${top.slice(1).map((a) => mini(a, ui)).join('')}</div></div>` +
    (latest.length ? head2(ui.latestTitle, ui.latestLead) + `<div class="bm-grid" data-more-list>${latest.map((a, i) => card(a, ui, i >= 6 ? ' is-more' : '')).join('')}</div>` +
      (latest.length > 6 ? `<div class="bm-more rv"><button class="bm-btn is-ghost" type="button" data-more>${esc(ui.more)}</button></div>` : '') : '') +
    secs.filter((id) => bySection(id).length >= 3).map((id) => `<div class="bm-band rv t-${SECTIONS[id].tint}"><div class="bm-h"><div class="bm-hl">${draw(SECTIONS[id].draw)}<div><h2><span>${esc(ui.sections[id][0])}</span></h2><p>${esc(ui.sections[id][1])}</p></div></div>` +
      `<a class="bm-btn is-ghost" href="${sectionPath(site, ui, id)}">${esc(ui.seeAll)}</a></div><div class="bm-grid">${bySection(id).slice(0, 3).map((a) => card(a, ui)).join('')}</div></div>`).join('') +
    `</div>` + ctaCard(site, ui) + `</div></div>`;
}

/* ---------- Section page ---------- */
export function section(site, id, list, ui) {
  const items = sorted(list.filter((a) => a.section === id));
  return `<div class="bm"><div class="bm-wrap">` +
    `<div class="bm-top is-section"><div class="bm-hello t-${SECTIONS[id].tint}"><div><p class="bm-crumb"><a href="${blogPath(site)}">${esc(ui.back)}</a></p><h1>${esc(ui.sections[id][0])}</h1><p>${esc(ui.sections[id][1])}</p></div></div>` +
    `<div class="bm-buddy t-white">${draw(SECTIONS[id].draw, 'bm-secdraw')}</div></div>` +
    head2(ui.count(items.length)) + `<div class="bm-grid">${items.map((a) => card(a, ui)).join('')}</div>` +
    ctaCard(site, ui) + `</div></div>`;
}

/* ---------- Article ---------- */
const TINTS = ['mint', 'sun', 'coral', 'lime'];
function block(b, ui, site, a) {
  if (b.take) return `<div class="ar-take rv t-lime">${draw(b.take.draw || 'owl')}<p class="ar-d">${esc(b.take.title)}</p><p>${mark(b.take.text)}</p></div>`;
  if (b.h) return `<h2 class="rv"><span>${esc(b.h)}</span></h2>`;
  if (b.h3) return `<h3 class="rv">${esc(b.h3)}</h3>`;
  if (b.p) return `<p class="rv">${mark(b.p)}</p>`;
  if (b.figure) { const p = photo(b.figure.photo); return `<figure class="ar-fig rv"><div class="ar-img"><img src="${p.src}" width="${p.w}" height="${p.h}" loading="lazy" alt="${esc(b.figure.alt)}"></div>${b.figure.caption ? `<figcaption>${esc(b.figure.caption)}</figcaption>` : ''}</figure>`; }
  if (b.panels) return `<div class="ar-two">${b.panels.map(([n, t], i) => `<div class="ar-pan t-${i % 2 ? 'sun' : 'mint'}"><p class="ar-d">${esc(n)}</p><p>${mark(t)}</p></div>`).join('')}</div>`;
  if (b.table) return `<div class="ar-table rv"><table><thead><tr>${b.table.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>` +
    b.table.rows.map((r) => `<tr>${r.map((c, i) => i === 0 ? `<th scope="row">${mark(c)}</th>` : `<td>${mark(c)}</td>`).join('')}</tr>`).join('') + `</tbody></table>${b.table.note ? `<p class="ar-tnote">${esc(b.table.note)}</p>` : ''}</div>`;
  if (b.quote) return `<p class="ar-quote" data-qwords>${esc(plain(b.quote))}</p>`;
  if (b.note) return `<div class="ar-note rv t-${b.note.tint || 'sun'}">${draw(b.note.draw || 'teacup')}<div><p class="ar-d">${esc(b.note.title)}</p><p>${mark(b.note.text)}</p></div></div>`;
  if (b.levels) return `<div class="ar-levels">${b.levels.map(([c, n, t], i) => `<div class="ar-level pop t-${TINTS[i % 4]}"><p class="ar-code">${esc(c)}</p><p class="ar-lname">${esc(n)}</p><p>${mark(t)}</p></div>`).join('')}</div>`;
  if (b.examples) return `<div class="ar-ex rv">${b.examples.map(([s, g]) => `<div><p class="ar-exs">${mark(s)}</p>${g ? `<p class="ar-exg">${esc(g)}</p>` : ''}</div>`).join('')}</div>`;
  if (b.mistakes) return `<div class="ar-mis rv">${b.mistakes.map(([w, r, why]) => `<div class="ar-mi"><p class="ar-w"><span class="ar-sr">${esc(ui.wrongLabel)}: </span><s>${esc(w)}</s></p><p class="ar-r"><span class="ar-sr">${esc(ui.rightLabel)}: </span>${mark(r)}</p><p class="ar-why2">${mark(why)}</p></div>`).join('')}</div>`;
  if (b.cta) return `<div class="ar-mid rv">${draw('teacup')}<div><p class="ar-d">${esc(ui.midTitle)}</p><p>${esc(ui.midText)}</p><div class="ar-btns">` +
    (a.quiz && a.quiz.length ? `<a class="ar-btn" href="#quiz">${esc(ui.test)}</a>` : '') + `<a class="ar-btn is-ghost" href="${levelTest(site, a.course)}">${esc(ui.join)}</a></div></div></div>`;
  return '';
}

export function article(a, ui, related) {
  const site = a.site, p = photo(a.photo), mins = minutes(a), q = a.quiz || [];
  const join = levelTest(site, a.course);
  const facts = (a.facts || []).slice(0, 4).map((f, i) => `<div class="ar-fact pop t-${TINTS[i % 4]}"><p class="ar-d">${f.n != null ? `<span data-count="${Number(f.n)}">0</span>${f.unit ? ' ' + esc(f.unit) : ''}` : esc(f.label)}</p><p>${esc(f.text)}</p></div>`).join('');
  const quiz = q.length ? `<div class="ar-quiz rv" id="quiz"><div class="ar-quiz-top">${draw('parrot')}<div><p class="ar-d">${esc(ui.quizTitle)}</p><p class="ar-ql">${esc(ui.quizLead)}</p></div></div>` +
    `<div class="ar-qbar"><i></i></div><div class="ar-qs"></div><div class="ar-score" hidden><p class="ar-d"><span data-score>0</span> / ${q.length}</p><p>${esc(ui.scoreText)}</p>` +
    `<div class="ar-btns is-center"><a class="ar-btn" href="${join}">${esc(ui.join)}</a><button class="ar-btn is-ghost" type="button" data-again>${esc(ui.again)}</button></div></div>` +
    `<script type="application/json" class="ar-quiz-data">${json({ q: q.map((x) => [x.q, x.options, x.a, x.why]), ok: ui.correct, no: ui.notQuite })}</script></div>` : '';
  const faq = a.faq && a.faq.length ? `<h2 class="rv"><span>${esc(ui.faqTitle)}</span></h2><div class="ar-faq rv">${a.faq.map(([qq, x]) => `<details><summary>${esc(qq)}</summary><p>${mark(x)}</p></details>`).join('')}</div>` : '';
  const sources = a.sources && a.sources.length ? `<p class="ar-src">${esc(ui.sources)}: ${a.sources.map(([l, u]) => /^https:\/\//.test(u) ? `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(l)}</a>` : esc(l)).join(', ')}.</p>` : '';
  return `<div class="ar-bar" aria-hidden="true"></div><div class="ar bm" data-minutes="${mins}"><div class="ar-wrap">` +
    `<header class="ar-head"><div class="ar-title"><p class="ar-crumb"><a href="${blogPath(site)}">${esc(ui.back)}</a> &nbsp;/&nbsp; <a href="${sectionPath(site, ui, a.section)}">${esc(ui.sections[a.section][0])}</a></p>` +
    `<h1 data-words>${esc(a.title)}</h1><p class="ar-lead">${mark(a.lead)}</p>` +
    `<div class="ar-by">${draw('book')}<p><b>${esc(a.author || ui.author)}</b><br>${esc(ui.updated)} ${esc(dateText(ui, a.updated))}, ${esc(ui.min(mins))}</p></div></div>` +
    `<div class="ar-photo"><img src="${p.src}" width="${p.w}" height="${p.h}" alt="${esc(a.photoAlt || '')}"><div class="ar-sticker">${a.sticker && a.sticker.say ? `<div class="ar-bub">${esc(a.sticker.say)}</div>` : ''}${draw((a.sticker && a.sticker.draw) || 'owl')}</div></div></header>` +
    (facts ? `<div class="ar-facts">${facts}</div>` : '') +
    `<div class="ar-body"><aside class="ar-side"><div class="ar-prog"><svg class="ar-ring" viewBox="0 0 70 70" aria-hidden="true"><circle class="bg" cx="35" cy="35" r="30"/><circle class="fg" cx="35" cy="35" r="30"/></svg><div><p class="ar-d"><span data-left>${mins}</span> ${esc(ui.minShort)}</p><p>${esc(ui.leftToRead)}</p></div></div>` +
    (q.length ? `<div class="ar-act t-sun">${draw('parrot')}<p class="ar-d">${esc(ui.quizTitle)}</p><p>${esc(ui.quizSide(q.length))}</p><a class="ar-btn" href="#quiz">${esc(ui.quizStart)}</a></div>` : '') +
    `<div class="ar-act t-mint">${draw('snail')}<p class="ar-d">${esc(ui.joinTitle)}</p><p>${esc(ui.joinText)}</p><a class="ar-btn is-ghost" href="${join}">${esc(ui.join)}</a></div></aside>` +
    `<article class="ar-paper">${a.blocks.map((b) => block(b, ui, site, a)).join('')}${quiz}${faq}${sources}</article></div>` +
    (related.length ? `<div class="bm-h rv"><div><h2><span>${esc(ui.keep)}</span></h2></div></div><div class="bm-grid">${related.slice(0, 3).map((r) => card(r, ui)).join('')}</div>` : '') +
    `<div class="ar-end rv"><div><h2>${esc(ui.endTitle)}</h2><p>${esc(ui.endText)}</p><div class="ar-btns"><a class="ar-btn" href="${join}">${esc(ui.join)}</a>` +
    (q.length ? `<a class="ar-btn is-ghost" href="#quiz">${esc(ui.test)}</a>` : '') + `</div></div><div class="ar-cast">${draw('owl')}${draw('parrot')}${draw('snail')}</div></div>` +
    `</div></div>`;
}

/* ---------- Structured data ---------- */
const BASE = 'https://alimun.com';
export function articleLd(a, ui, lang) {
  const url = BASE + articlePath(a);
  const graph = [
    { '@type': 'Article', headline: a.title, description: a.desc, inLanguage: lang, datePublished: a.published, dateModified: a.updated, wordCount: words(a),
      author: a.authorUrl ? { '@type': 'Person', name: a.author, url: a.authorUrl } : { '@type': 'Organization', name: 'Alimun', url: BASE },
      publisher: { '@type': 'Organization', name: 'Alimun', url: BASE, logo: { '@type': 'ImageObject', url: BASE + '/images/webclip.png' } },
      image: BASE + photo(a.photo).src, mainEntityOfPage: url },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: BASE + prefix(a.site) },
      { '@type': 'ListItem', position: 2, name: ui.back, item: BASE + blogPath(a.site) },
      { '@type': 'ListItem', position: 3, name: ui.sections[a.section][0], item: BASE + sectionPath(a.site, ui, a.section) },
      { '@type': 'ListItem', position: 4, name: a.title, item: url }] },
  ];
  if (a.faq && a.faq.length) graph.push({ '@type': 'FAQPage', mainEntity: a.faq.map(([q, x]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: plain(x) } })) });
  return json({ '@context': 'https://schema.org', '@graph': graph });
}
export function listLd(name, desc, url, list) {
  return json({ '@context': 'https://schema.org', '@type': 'CollectionPage', name, description: desc, url: BASE + url,
    publisher: { '@type': 'Organization', name: 'Alimun', url: BASE },
    hasPart: list.map((a) => ({ '@type': 'BlogPosting', headline: a.title, url: BASE + articlePath(a), datePublished: a.published, image: BASE + photo(a.photo).src })) });
}
