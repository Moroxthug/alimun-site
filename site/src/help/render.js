// Public Help (docs/HELP_PLAN.md, Part 4): /help and /<site>/help with the question box, the topics and the form to
// write to a person, and /help/<slug> for each article. The blog's look (src/blocks/blog/style.html: bone page, white
// rounded cards, soft tints with the drawing cast, forest buttons, lime markers) plus src/blocks/help/style.html.
// Articles from src/data/help/<lang>/ (approved only), text from src/data/help/ui.js. Every value is escaped.

export const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');
const BASE = 'https://alimun.com';

export const prefix = (site) => (site === 'en' ? '/' : `/${site}/`);
export const helpPath = (site) => `${prefix(site)}help`;
export const articlePath = (site, slug) => `${helpPath(site)}/${slug}`;

export const TOPICS = ['classes', 'plans', 'dashboard', 'practice', 'tutor', 'account', 'teachers'];
const ART = { classes: 'calendar', plans: 'ticket', dashboard: 'books', practice: 'pencil', tutor: 'microphone', account: 'key', teachers: 'chart' };
const TINT = { classes: 'mint', plans: 'sun', dashboard: 'lime', practice: 'coral', tutor: 'mint', account: 'white', teachers: 'sun' };
const STARTERS = ['join-your-live-class', 'cancel-your-plan', 'how-tutor-minutes-work'];
const draw = (name, cls = '') => `<div class="${cls}" data-draw="${esc(name)}" aria-hidden="true"></div>`;
const buoy = (mood, cls = '') => `<div class="${cls}" data-buoy="${esc(mood)}" aria-hidden="true"></div>`;
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const row = (site, a, short) => `<a class="hl-row${short ? ' is-short' : ''}" href="${articlePath(site, a.slug)}"><span><b>${esc(a.title)}</b>${short ? '' : `<small>${esc(a.summary)}</small>`}</span>${arrow}</a>`;
const SHOWN = 4;

export function dateText(ui, iso) {
  try { return new Intl.DateTimeFormat(ui.locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso)); } catch (e) { return iso; }
}

/* ---------- /help ---------- */
export function home(site, list, ui) {
  const starters = STARTERS.map((s) => list.find((a) => a.slug === s)).filter(Boolean);
  const topics = TOPICS.map((t) => [t, list.filter((a) => a.subject === t && a.section === 'help')]).filter(([, l]) => l.length);
  const wrong = list.filter((a) => a.section === 'support');
  const pool = list.map((a) => ({ s: a.slug, t: a.title, u: a.summary }));
  const strings = { thinking: ui.thinking, from: ui.from, helpedQ: ui.helpedQ, yes: ui.yes, no: ui.no, glad: ui.glad, sorry: ui.sorry, unsure: ui.unsure, person: ui.person, err: ui.err,
    maybe: ui.maybe, common: ui.common, bubbleThink: ui.bubbleThink, bubbleFound: ui.bubbleFound, bubbleGlad: ui.bubbleGlad, bubblePerson: ui.bubblePerson,
    sending: ui.sending, sent: ui.sent, needEmail: ui.needEmail, needSubject: ui.needSubject, needMessage: ui.needMessage, attached: ui.attached, base: helpPath(site) };
  return `<div class="hl bm"><div class="bm-wrap">` +
    `<div class="bm-top hl-top" id="ask"><div class="bm-hello"><div><h1>${esc(ui.askH)}</h1><p>${esc(ui.lead)}</p></div>` +
      `<form class="hl-ask" data-ask novalidate><label class="hl-sr" for="hl-q">${esc(ui.askLabel)}</label>` +
        `<textarea id="hl-q" rows="1" maxlength="600" placeholder="${esc(ui.askPh)}" dir="auto"></textarea>` +
        `<button class="hl-go" type="submit" aria-label="${esc(ui.askBtn)}">${arrow}</button></form>` +
      `<div class="hl-suggest" data-suggest data-common="${esc(ui.common)}">${starters.length ? `<p>${esc(ui.common)}</p>` + starters.map((a) => `<a href="${articlePath(site, a.slug)}">${esc(a.title)}${arrow}</a>`).join('') : ''}</div></div>` +
      `<div class="bm-buddy t-mint hl-buddy" data-stage><div class="hl-bub" data-bub>${esc(ui.bubbleHi)}</div>${buoy('happy', 'hl-buoy')}</div></div>` +
    `<div class="hl-answer" data-answer aria-live="polite"></div>` +
    `<p class="hl-note">${esc(ui.aiNote)} <a href="/app#/help">${esc(ui.signedIn)}</a></p>` +
    `<div class="bm-h rv"><div><h2><span>${esc(ui.browse)}</span></h2></div></div>` +
    `<div class="hl-topics">${topics.map(([t, l]) => `<section class="hl-topic rv t-${TINT[t]}" id="${t}"><div class="hl-topic__head">${draw(ART[t], 'hl-topic__art')}<h3>${esc(ui.topics[t])}</h3></div>` +
      `<div class="hl-rows">${l.slice(0, SHOWN).map((a) => row(site, a, true)).join('')}</div>` +
      (l.length > SHOWN ? `<details class="hl-more"><summary>${esc(ui.showAll.replace('{n}', l.length))}</summary><div class="hl-rows">${l.slice(SHOWN).map((a) => row(site, a, true)).join('')}</div></details>` : '') +
      `</section>`).join('')}</div>` +
    (wrong.length ? `<div class="bm-h rv"><div><h2><span>${esc(ui.wrong)}</span></h2></div></div><section class="hl-topic hl-wrong rv t-white"><div class="hl-rows">${wrong.map((a) => row(site, a)).join('')}</div></section>` : '') +
    `<div class="hl-write rv" id="write"><div class="hl-write__side t-coral">${buoy('glad', 'hl-buoy')}<div class="hl-bub is-static">${esc(ui.bubbleWrite)}</div></div>` +
      `<form class="hl-form" data-write novalidate><h2>${esc(ui.writeH)}</h2><p>${esc(ui.writeP)}</p>` +
        `<div class="hl-attached" data-attached hidden></div>` +
        `<div class="hl-two"><label><span>${esc(ui.name)}</span><input name="name" maxlength="120" autocomplete="name"></label>` +
        `<label><span>${esc(ui.email)}</span><input name="email" type="email" maxlength="254" autocomplete="email" required></label></div>` +
        `<div class="hl-two"><label><span>${esc(ui.topic)}</span><select name="topic">${TOPICS.map((t) => `<option value="${t}">${esc(ui.topics[t])}</option>`).join('')}<option value="other">${esc(ui.other)}</option></select></label>` +
        `<label><span>${esc(ui.subject)}</span><input name="subject" maxlength="140" required dir="auto"></label></div>` +
        `<label><span>${esc(ui.message)}</span><textarea name="message" rows="5" maxlength="4000" required dir="auto" placeholder="${esc(ui.messagePh)}"></textarea></label>` +
        `<input type="hidden" name="qid"><div class="hl-send"><button class="bm-btn" type="submit">${esc(ui.send)}${arrow}</button><p class="hl-msg" data-msg role="status"></p></div></form></div>` +
    `<script type="application/json" id="hl-data">${json({ lang: site, ui: strings, pool })}</script>` +
    `</div></div>`;
}

/* ---------- /help/<slug> ---------- */
export function article(site, a, ui, related) {
  return `<div class="hl bm"><div class="bm-wrap hl-art">` +
    `<p class="hl-crumb"><a href="${helpPath(site)}">${esc(ui.back)}</a> &nbsp;/&nbsp; <a href="${helpPath(site)}#${a.section === 'support' ? 'write' : a.subject}">${esc(a.section === 'support' ? ui.wrong : ui.topics[a.subject])}</a></p>` +
    `<div class="hl-art__grid"><article class="hl-paper"><h1 dir="auto">${esc(a.title)}</h1><p class="hl-sum" dir="auto">${esc(a.summary)}</p>` +
      a.body.map((p) => `<p dir="auto">${esc(p)}</p>`).join('') +
      `<p class="hl-date">${esc(ui.updated.replace('{date}', dateText(ui, a.updated)))}</p></article>` +
    `<aside class="hl-side"><div class="bm-buddy t-mint hl-buddy is-small" data-stage><div class="hl-bub" data-bub>${esc(ui.helpedQ)}</div>${buoy('happy', 'hl-buoy')}</div>` +
      `<div class="hl-rate" data-rate><div class="hl-btns"><button class="bm-btn is-ghost" type="button" data-r="yes">${esc(ui.yes)}</button><button class="bm-btn is-ghost" type="button" data-r="no">${esc(ui.no)}</button></div>` +
        `<p class="hl-msg" data-ratemsg hidden data-glad="${esc(ui.glad)}" data-sorry="${esc(ui.sorry)}"></p><a class="bm-btn" href="${helpPath(site)}#write" data-person hidden>${esc(ui.person)}</a></div>` +
      (related.length ? `<div class="hl-related"><h2>${esc(ui.related)}</h2>${related.map((r) => `<a href="${articlePath(site, r.slug)}">${esc(r.title)}${arrow}</a>`).join('')}</div>` : '') +
    `</aside></div>` +
    `<div class="hl-still rv t-lime">${buoy('glad', 'hl-buoy')}<div><h2>${esc(ui.stillH)}</h2><p>${esc(ui.stillP)}</p></div><a class="bm-btn" href="${helpPath(site)}#ask">${esc(ui.stillBtn)}</a></div>` +
    `</div></div>`;
}

/* ---------- Structured data: only questions shown on the page ---------- */
export function homeLd(site, list, ui) {
  return json({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebPage', name: ui.metaTitle, description: ui.metaDesc, url: BASE + helpPath(site), inLanguage: site, publisher: { '@type': 'Organization', name: 'Alimun', url: BASE } },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: ui.home, item: BASE + prefix(site) }, { '@type': 'ListItem', position: 2, name: ui.title, item: BASE + helpPath(site) }] },
  ] });
}
export function articleLd(site, a, ui) {
  return json({ '@context': 'https://schema.org', '@graph': [
    { '@type': 'FAQPage', inLanguage: site, mainEntity: [{ '@type': 'Question', name: a.title, acceptedAnswer: { '@type': 'Answer', text: [a.summary, ...a.body].join(' ') } }] },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: ui.home, item: BASE + prefix(site) }, { '@type': 'ListItem', position: 2, name: ui.title, item: BASE + helpPath(site) },
      { '@type': 'ListItem', position: 3, name: a.title, item: BASE + articlePath(site, a.slug) }] },
  ] });
}
