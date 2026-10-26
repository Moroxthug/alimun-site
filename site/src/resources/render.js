// Resources: the hub and one page per resource (docs/BLOG_PLAN.md, "Resources"; owner-approved mockup
// /preview/resources-step1, 26 Oct 2026: "love it, lock it in"). Same look as the blog: bone page, white and tinted
// cards, the drawing cast (data-draw, drawn by js/app/cast.js), forest buttons, lime. Everything free, no sign-up,
// with "Test my knowledge" and "Join now". Interactive parts read their data from JSON in the page
// (src/blocks/resources/style.html). Every value from the data files is escaped.

export const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');
const draw = (name, cls = '') => `<div class="${cls}" data-draw="${esc(name)}" aria-hidden="true"></div>`;

export const KINDS = ['exercise', 'quiz', 'reading', 'printable', 'game', 'fun'];
const KIND_DRAW = { exercise: ['owl', 'mint'], quiz: ['parrot', 'sun'], reading: ['cat', 'coral'], printable: ['mug', 'lime'], game: ['dragon', 'mint'], fun: ['churro', 'sun'], level: ['sun', 'sun'] };
export const prefix = (site) => (site === 'en' ? '/' : `/${site}/`);
export const hubPath = (site, ui) => `${prefix(site)}${ui.slugBase}`;
export const itemPath = (r, ui) => `${hubPath(r.site, ui)}/${r.slug}`;
export const pdfPath = (r) => `/downloads/${r.site}/${r.slug}.pdf`;
const levelTest = (site, course) => `${prefix(site)}level-test${course ? '?language=' + course : ''}`;
const metaLine = (r, ui) => [ui.kinds[r.kind][0], r.course ? ui.courses[r.course] : '', r.level].filter(Boolean).map(esc).join(', ');
const head2 = (title, lead, right = '', id = '') => `<div class="bm-h rv"${id ? ` id="${id}"` : ''}><div><h2><span>${esc(title)}</span></h2>${lead ? `<p>${esc(lead)}</p>` : ''}</div>${right}</div>`;

/* A resource card: tinted, its drawing, the kind and details, the title, a line of text */
export function card(r, ui) {
  return `<a class="rs-cat rv t-${esc(r.tint || 'mint')}" href="${itemPath(r, ui)}"><div><p class="rs-k">${metaLine(r, ui)}</p><p class="bm-d">${esc(r.title)}</p><p>${esc(r.desc)}</p></div>${draw(r.draw || 'owl')}<span class="rs-go">${esc(ui.kinds[r.kind][2])}</span></a>`;
}

/* ---------- Hub ---------- */
export function hub(site, list, ui) {
  const of = (k) => list.filter((r) => r.kind === k);
  const quiz = of('quiz')[0], game = of('game')[0], fun = of('fun')[0];
  const catHref = (k) => (k === 'level' ? levelTest(site) : of(k).length === 1 ? itemPath(of(k)[0], ui) : `#${k}`);
  const cats = [...KINDS.filter((k) => of(k).length), 'level'];
  const today = { English: ui.daily.English, German: ui.daily.German, labels: { right: ui.right, almost: ui.almost } };
  return `<div class="bm"><div class="bm-wrap">` +
    `<div class="rs-top"><div class="bm-hello"><div><h1 data-letters>${esc(ui.title)}</h1><p>${esc(ui.lead)}</p></div>` +
    `<div class="rs-btns">${quiz ? `<a class="bm-btn" href="${itemPath(quiz, ui)}">${esc(ui.test)}</a>` : ''}<a class="bm-btn is-ghost" href="${levelTest(site)}">${esc(ui.join)}</a></div></div>` +
    `<div class="rs-play"><div class="bm-bub" data-bubbles="${esc(JSON.stringify(ui.bubbles))}">${esc(ui.bubbles[0])}</div>${draw('owl')}${draw('parrot')}${draw('cat')}${draw('snail')}</div></div>` +
    head2(ui.todayTitle, ui.todayLead, `<div class="rs-toggle" role="group" aria-label="${esc(ui.langLabel)}"><button type="button" aria-pressed="true" data-lang="English">${esc(ui.langEnglish)}</button><button type="button" aria-pressed="false" data-lang="German">${esc(ui.langGerman)}</button></div>`) +
    `<div class="rs-today" data-today><script type="application/json" class="rs-today-data">${json(today)}</script>` +
    `<div class="rs-card rv"><p class="rs-k">${esc(ui.wodLabel)}</p><div class="rs-flip" data-flip tabindex="0" role="button"><div class="rs-flip-in"><div class="rs-face front"><span class="rs-word" data-wod-word></span><p>${esc(ui.wodTap)}</p></div><div class="rs-face back"><p data-wod-mean></p></div></div></div></div>` +
    `<div class="rs-card rv"><p class="rs-k">${esc(ui.gameLabel)}</p><p class="bm-d" data-game-clue></p><div class="rs-slots" data-slots></div><div class="rs-tiles" data-tiles></div><p class="rs-msg" data-game-msg aria-live="polite"></p><div class="rs-row"><button class="bm-btn is-ghost" type="button" data-game-new>${esc(ui.newWord)}</button></div></div>` +
    `<div class="rs-card rv"><p class="rs-k">${esc(ui.twLabel)}</p><p class="rs-tw" data-tw></p><div class="rs-row"><button class="bm-btn" type="button" data-tw-go>${esc(ui.twGo)}</button><button class="bm-btn is-ghost" type="button" data-tw-fast>${esc(ui.twFast)}</button></div></div></div>` +
    head2(ui.allTitle, ui.allLead) +
    `<div class="rs-cats">${cats.map((k) => `<a class="rs-cat rv t-${KIND_DRAW[k][1]}" href="${catHref(k)}"><div><p class="bm-d">${esc(ui.kinds[k][0])}</p><p>${esc(ui.kinds[k][1])}</p></div>${draw(KIND_DRAW[k][0])}<span class="rs-go">${esc(ui.kinds[k][2])}</span></a>`).join('')}</div>` +
    (quiz ? head2(ui.clockTitle) + `<div class="rs-clock rv" data-clock="${esc(JSON.stringify(ui.clockFlash))}"><div class="rs-ring"><svg viewBox="0 0 130 130" aria-hidden="true"><circle class="bg" cx="65" cy="65" r="55"/><circle class="fg" cx="65" cy="65" r="55" data-ring/></svg><b data-secs>60</b></div><div><p class="bm-d">${esc(ui.clockHead)}</p><p>${esc(ui.clockText)}</p><p class="rs-flash" data-flash>${esc(ui.clockFlash[0])}</p></div><a class="bm-btn" href="${itemPath(quiz, ui)}">${esc(ui.clockPlay)}</a></div>` : '') +
    (game ? head2(ui.ffTitle, ui.ffLead, `<a class="bm-btn is-ghost" href="${itemPath(game, ui)}">${esc(ui.ffPlay)}</a>`) + `<div class="rs-ff">${game.cards.slice(0, 6).map((c) => flipCard(c, ui)).join('')}</div>` : '') +
    (fun ? head2(ui.buddyTitle) + `<div class="rs-buddy rv"><div><p class="bm-d rs-bh">${esc(ui.buddyHead)}</p><p class="rs-bt">${esc(ui.buddyText)}</p><div class="rs-line">${['teacup', 'pretzel', 'croissant', 'pizza', 'churro', 'nata'].map((d) => draw(d)).join('')}</div></div>${buddyBox(fun, ui, site)}</div>` : '') +
    (of('printable').length ? head2(ui.printTitle, ui.printLead, '', 'printable') + `<div class="rs-prints">${of('printable').map((r) => `<a class="rs-paper rv" href="${itemPath(r, ui)}"><div class="rs-sheet">${draw(r.draw)}<p class="bm-d">${esc(r.title)}</p><p>${esc(r.desc)}</p><span class="rs-go">${esc(ui.download)}</span></div></a>`).join('')}</div>` : '') +
    KINDS.filter((k) => !['printable'].includes(k) && of(k).length > 1).map((k) => head2(ui.kinds[k][0], ui.kinds[k][1], '', k) + `<div class="rs-cats">${of(k).map((r) => card(r, ui)).join('')}</div>`).join('') +
    endCard(site, ui, quiz) + `</div></div>`;
}

function flipCard(c, ui) {
  const [word, , looks, means, say] = c;
  return `<div class="rs-flip rv" data-flip tabindex="0" role="button"><div class="rs-flip-in"><div class="rs-face front"><span class="rs-pair">${esc(word)} <i>≠</i> ${esc(looks)}</span></div><div class="rs-face back"><p><b>${esc(word)}</b> = ${esc(means)}. ${esc(looks)} = <b>${esc(say)}</b></p></div></div></div>`;
}
function buddyBox(r, ui, site) {
  return `<div class="rs-bq" data-bq><script type="application/json" class="rs-bq-data">${json({ q: r.buddy.questions, res: r.buddy.results, youAre: ui.youAre('{}'), join: ui.join, joinHref: levelTest(site), again: ui.again, share: ui.share, copied: ui.copied, url: 'https://alimun.com' + itemPath(r, ui) })}</script></div>`;
}
function endCard(site, ui, quiz) {
  return `<div class="rs-end rv"><div><h2>${esc(ui.endTitle)}</h2><p>${esc(ui.endText)}</p><div class="rs-btns"><a class="bm-btn" href="${levelTest(site)}">${esc(ui.join)}</a>${quiz ? `<a class="bm-btn is-ghost" href="${itemPath(quiz, ui)}">${esc(ui.test)}</a>` : ''}</div></div><div class="rs-line">${draw('owl')}${draw('parrot')}${draw('cat')}${draw('snail')}</div></div>`;
}

/* ---------- One resource ---------- */
function choiceData(items, ui, extra = {}) {
  return json({ q: items.map((x) => [x.q, x.options, x.a, x.why]), ok: ui.correct, no: ui.notQuite, score: ui.score('{n}', '{t}'), scoreText: ui.scoreText, again: ui.again, ...extra });
}
const quizBox = (data) => `<div class="rs-quiz" data-rs-quiz><div class="ar-qbar"><i></i></div><div class="rs-qs"></div><script type="application/json" class="rs-quiz-data">${data}</script></div>`;

function activity(r, ui, lib) {
  if (r.kind === 'exercise' || r.kind === 'quiz') return `<p class="rs-ins">${esc(r.instructions)}</p>` + quizBox(choiceData(r.items, ui, { join: ui.join, joinHref: levelTest(r.site, r.course) }));
  if (r.kind === 'reading' && lib) {
    const paras = lib.text.split(/\n\n+/).map((p) => `<p>${esc(p).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')}</p>`).join('');
    return `<div class="rs-listen"><button class="bm-btn" type="button" data-listen data-lang="${r.course === 'German' ? 'de-DE' : 'en-GB'}" data-stop="${esc(ui.stop)}">${esc(ui.listen)}</button></div>` +
      `<div class="rs-text" data-read-text><h2 class="rs-ttl">${esc(lib.title)}</h2>${paras}</div>` +
      `<div class="rs-words"><p class="bm-d">${esc(ui.words)}</p>${lib.words.map(([w, n]) => `<p><b>${esc(w)}</b> ${esc(n)}</p>`).join('')}</div>` +
      `<p class="bm-d rs-qh">${esc(ui.questions)}</p><p class="rs-ins">${esc(r.instructions)}</p>` + quizBox(choiceData(lib.items, ui, { shuffle: true, join: ui.join, joinHref: levelTest(r.site, r.course) }));
  }
  if (r.kind === 'printable') {
    return `<div class="rs-dl"><a class="bm-btn" href="${pdfPath(r)}" download>${esc(ui.download)}</a><button class="bm-btn is-ghost" type="button" data-print>${esc(ui.print)}</button></div>` +
      `<div class="rs-sheetpage">${r.sheet.map((s) => `<h2 class="rs-sh">${esc(s.h)}</h2>` +
        (s.table ? `<div class="ar-table is-in"><table><thead><tr>${s.table.head.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map((row) => `<tr>${row.map((c, i) => i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` : '') +
        (s.levels ? `<div class="rs-levels">${s.levels.map(([c, n, t], i) => `<div class="rs-lv t-${['mint', 'sun', 'coral', 'lime'][i % 4]}"><p class="rs-lc">${esc(c)}</p><p class="rs-ln">${esc(n)}</p><p>${esc(t)}</p></div>`).join('')}</div>` : '') +
        (s.p ? `<p class="rs-sp">${esc(s.p)}</p>` : '')).join('')}<p class="rs-foot">alimun.com</p></div>`;
  }
  if (r.kind === 'game') {
    const items = r.cards.map((c, i) => {
      const others = r.cards.filter((_, j) => j !== i).map((x) => x[3]);
      const pick = [others[(i * 3 + 1) % others.length], others[(i * 5 + 4) % others.length]].filter((x, k, a) => a.indexOf(x) === k && x !== c[3] && x !== c[2]);
      const options = [c[3], c[2], ...pick].slice(0, 4);
      return { q: ui.ffAsk ? ui.ffAsk(c[0], c[1]) : `${c[0]} (${c[1]})`, options, a: 0, why: `${c[0]} = ${c[3]}. ${c[2]} = ${c[4]}.` };
    });
    return `<p class="rs-ins">${esc(r.instructions)}</p>` + quizBox(choiceData(items, ui, { shuffle: true, join: ui.join, joinHref: levelTest(r.site) })) +
      `<div class="rs-ff is-page">${r.cards.map((c) => flipCard(c, ui)).join('')}</div>`;
  }
  if (r.kind === 'fun') return buddyBox(r, ui, r.site);
  return '';
}

export function item(r, ui, related, lib) {
  const quiz = related.find((x) => x.kind === 'quiz');
  return `<div class="bm rs-page"><div class="bm-wrap">` +
    `<div class="rs-top is-item"><div class="bm-hello"><div><p class="bm-crumb"><a href="${hubPath(r.site, ui)}">${esc(ui.back)}</a> &nbsp;/&nbsp; ${esc(ui.kinds[r.kind][0])}</p><h1>${esc(r.title)}</h1><p>${esc(r.lead)}</p></div>` +
    `<p class="rs-meta">${metaLine(r, ui)}, ${esc(ui.free)}</p></div><div class="rs-play is-item t-${esc(r.tint || 'mint')}">${draw(r.draw || 'owl', 'rs-big')}</div></div>` +
    `<div class="rs-body"><div class="rs-main rv">${activity(r, ui, lib)}</div>` +
    `<aside class="rs-side"><div class="ar-act t-mint">${draw('snail')}<p class="ar-d">${esc(ui.sideTitle)}</p><p>${esc(ui.sideText)}</p><a class="bm-btn" href="${levelTest(r.site, r.course)}">${esc(ui.join)}</a>${quiz && quiz !== r ? `<a class="bm-btn is-ghost" href="${itemPath(quiz, ui)}">${esc(ui.test)}</a>` : ''}</div></aside></div>` +
    `<div class="rs-about rv">${(r.about || []).map((p) => `<p>${esc(p)}</p>`).join('')}</div>` +
    (related.length ? head2(ui.more) + `<div class="rs-cats">${related.slice(0, 3).map((x) => card(x, ui)).join('')}</div>` : '') +
    endCard(r.site, ui, quiz) + `</div></div>`;
}

/* ---------- Structured data ---------- */
const BASE = 'https://alimun.com';
export function itemLd(r, ui) {
  const url = BASE + itemPath(r, ui);
  const main = r.kind === 'quiz' || r.kind === 'exercise'
    ? { '@type': 'Quiz', name: r.title, description: r.desc, url, inLanguage: r.site, educationalLevel: r.level, isAccessibleForFree: true, provider: { '@type': 'Organization', name: 'Alimun', url: BASE } }
    : { '@type': 'LearningResource', name: r.title, description: r.desc, url, inLanguage: r.site, educationalLevel: r.level, learningResourceType: r.kind, isAccessibleForFree: true, provider: { '@type': 'Organization', name: 'Alimun', url: BASE } };
  return json({ '@context': 'https://schema.org', '@graph': [main, { '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: ui.home, item: BASE + prefix(r.site) },
    { '@type': 'ListItem', position: 2, name: ui.back, item: BASE + hubPath(r.site, ui) },
    { '@type': 'ListItem', position: 3, name: r.title, item: url }] }] });
}
export function hubLd(site, list, ui) {
  return json({ '@context': 'https://schema.org', '@type': 'CollectionPage', name: ui.title, description: ui.metaDesc, url: BASE + hubPath(site, ui),
    hasPart: list.map((r) => ({ '@type': 'LearningResource', name: r.title, url: BASE + itemPath(r, ui), isAccessibleForFree: true })) });
}
