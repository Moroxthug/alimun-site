/* Alimun app: Help and Support (docs/HELP_PLAN.md, Part 2), in the student (/app) and teacher (/app/teach) dashboards.
   Help (#/help): ask a question in your own words, browse the owner-approved articles by topic, read one.
     #/help, #/help/topic/<subject>, #/help/a/<slug>
   Support (#/support): write to a person at Alimun and follow the conversation.
     #/support, #/support/new, #/support/new/<question id>, #/support/<request id>
   Articles come from /js/help/<lang>.json (English when a language is not translated yet; scripts/help-data.js).
   Answers and messages go through /api/help; your own questions and conversations are read with your own rights.
   Everything from the database, the articles or the model is escaped. Interface text: app_hp_* keys.
   Signed out (?sample=1) both pages work with sample data and send nothing. */
(function () {
  'use strict';

  var A = null, root = null, role = 'student';
  var ARTS = {}; /* lang -> Promise of articles */
  var last = null; /* the last answer on this visit: { q, a, id, articles, sure, helped } */
  var history = [];
  var mountNo = 0;

  var TOPICS = {
    student: ['classes', 'plans', 'dashboard', 'practice', 'tutor', 'account'],
    teacher: ['teachers', 'account']
  };
  var TOPIC_ART = { classes: 'calendar', plans: 'ticket', dashboard: 'books', practice: 'pencil', tutor: 'microphone', account: 'key', teachers: 'chart' };
  var TOPIC_TINT = { classes: 'var(--t-mint)', plans: 'var(--t-sun)', dashboard: 'var(--t-lime)', practice: 'var(--t-coral)', tutor: 'var(--t-mint)', account: 'var(--bone)', teachers: 'var(--t-sun)' };

  function t(k, v) { return A.t(k, v); }
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function base() { return role === 'teacher' ? '/app/teach' : '/app'; }
  function para(s) { return String(s || '').split(/\n/).map(esc).join('<br>'); }
  function when(iso) { return new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }).format(new Date(iso)); }
  function short(iso) {
    var d = new Date(iso), now = new Date();
    return new Intl.DateTimeFormat(A.locale, d.toDateString() === now.toDateString() ? { hour: '2-digit', minute: '2-digit' } : { day: 'numeric', month: 'short' }).format(d);
  }
  function buoy(mood) { return A.Cast.help ? A.Cast.help(mood) : A.Cast.drawing('owl'); }
  function track(what, extra) { if (window.AlimunData && window.AlimunData.track && real()) window.AlimunData.track(what, Object.assign({ dashboard: role }, extra || {})); }

  /* ---------- Articles ---------- */
  function fetchLang(l) {
    return fetch('/js/help/' + encodeURIComponent(l) + '.json').then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (d) { return d.articles || []; });
  }
  /* Articles published from approved drafts (help_articles, docs/HELP_PLAN.md Part 3): they add to, or replace by slug, the files */
  function published(l) {
    var c = window.AlimunData && window.AlimunData.auth ? window.AlimunData.auth() : null;
    if (!c) return Promise.resolve([]);
    return c.from('help_articles').select('slug, lang, section, subject, audience, title, summary, body, related, updated').in('lang', l === 'en' ? ['en'] : ['en', l])
      .then(function (r) { return r.error ? [] : (r.data || []); }, function () { return []; });
  }
  function articles() {
    var l = A.lang === 'ma' ? 'fr' : (A.lang || 'en'); /* Morocco reads the French articles */
    if (!ARTS[l]) {
      var en = ARTS.en || (ARTS.en = fetchLang('en'));
      ARTS[l] = Promise.all([en, l === 'en' ? [] : fetchLang(l).catch(function () { return []; }), published(l)]).then(function (r) {
        var by = {}, order = [];
        var put = function (a) { if (!by[a.slug]) order.push(a.slug); by[a.slug] = a; };
        r[0].forEach(put);
        r[2].filter(function (a) { return a.lang === 'en'; }).forEach(put);
        /* A changed article whose translation is not published yet shows its new English, not the old translation */
        var newEn = {}; r[2].forEach(function (a) { if (a.lang === 'en') newEn[a.slug] = true; });
        var newL = {}; r[2].forEach(function (a) { if (a.lang === l) newL[a.slug] = true; });
        r[1].forEach(function (a) { if (!newEn[a.slug] || newL[a.slug]) put(a); });
        r[2].filter(function (a) { return a.lang === l && l !== 'en'; }).forEach(put);
        return order.map(function (s) { return by[s]; });
      });
      ARTS[l].catch(function () { delete ARTS[l]; });
    }
    return ARTS[l].then(function (list) {
      return list.filter(function (a) { return a.audience === 'all' || a.audience === role; });
    });
  }
  var STOP = /^(the|and|for|are|you|your|how|what|can|why|when|does|did|with|from|this|that|have|has|not|about|my|do|is|it|of|to|in|on|a|an|i)$/;
  function words(s) { return (String(s || '').toLowerCase().match(/[\p{L}\p{N}]{3,}/gu) || []).filter(function (w) { return !STOP.test(w); }); }
  function matches(list, q, n) {
    var ws = words(q);
    if (!ws.length) return [];
    return list.map(function (a) {
      var ti = words(a.title), su = words(a.summary), sc = 0;
      ws.forEach(function (w) {
        var st = w.slice(0, Math.max(4, w.length - 2));
        var hit = function (arr) { return arr.some(function (x) { return x === w || x.indexOf(st) === 0; }); };
        if (hit(ti)) sc += 3; if (hit(su)) sc += 1;
      });
      return { a: a, sc: sc };
    }).filter(function (x) { return x.sc > 0; }).sort(function (x, y) { return y.sc - x.sc; }).slice(0, n).map(function (x) { return x.a; });
  }

  /* ---------- Server ---------- */
  function call(action, body) {
    return window.AlimunData.token().then(function (tok) {
      return fetch('/api/help?action=' + action, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + (tok || '') }, body: JSON.stringify(body || {}) });
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok) { var e = new Error(d.error || ('HTTP ' + r.status)); e.status = r.status; throw e; } return d; });
    });
  }
  function sb() { return window.AlimunData.auth(); }

  /* ---------- Pieces ---------- */
  function back(href, label) { return '<a class="hp-back" href="' + href + '">' + A.icon('back') + '<span>' + esc(label) + '</span></a>'; }
  function head(title, lead, extra) {
    return '<div class="view__head"><div>' + (extra || '') + '<h1 class="t-h1">' + esc(title) + '</h1>' + (lead ? '<p class="t-lead">' + esc(lead) + '</p>' : '') + '</div></div>';
  }
  function row(a) {
    return '<a class="hp-row" href="#/help/a/' + esc(a.slug) + '"><span><b>' + esc(a.title) + '</b><small>' + esc(a.summary) + '</small></span>' + A.icon('arrow') + '</a>';
  }
  /* Written out in full so the translation split files them with the dashboard text */
  var TOPIC_KEYS = { classes: 'app_hp_topic_classes', plans: 'app_hp_topic_plans', dashboard: 'app_hp_topic_dashboard', practice: 'app_hp_topic_practice',
    tutor: 'app_hp_topic_tutor', account: 'app_hp_topic_account', teachers: 'app_hp_topic_teachers' };
  function topicName(s) { return TOPIC_KEYS[s] ? t(TOPIC_KEYS[s]) : s; }
  function sampleNote() { return real() ? '' : '<p class="t-tiny hp-sample">' + esc(t('app_hp_sample')) + '</p>'; }

  /* ---------- Help: the start page ---------- */
  /* Three common questions to start from, until the person types */
  var STARTERS = { student: ['join-your-live-class', 'how-tutor-minutes-work', 'cancel-your-plan'], teacher: ['start-your-live-class', 'set-and-mark-homework', 'teacher-account-and-payouts'] };
  var LIST = [];
  function starters() {
    var m = (STARTERS[role] || []).map(function (s) { return LIST.filter(function (a) { return a.slug === s; })[0]; }).filter(Boolean);
    return m.length ? '<p class="t-tiny">' + esc(t('app_hp_common')) + '</p>' + m.map(function (a) { return '<a href="#/help/a/' + esc(a.slug) + '">' + esc(a.title) + A.icon('arrow') + '</a>'; }).join('') : '';
  }
  var TOPIC_CARD = { classes: 'mint', plans: 'sun', dashboard: 'leaf', practice: 'coral', tutor: 'mint', account: 'white', teachers: 'sun' };
  /* The hero: the question box on forest, the lifebuoy beside it */
  function hero() {
    return '<section class="card card--forest hp-hero" style="--i:0">' +
      '<div class="hp-hero__main">' +
        '<h1 class="t-display">' + esc(t('app_hp_ask_h')) + '</h1>' +
        '<p class="t-lead">' + esc(t(role === 'teacher' ? 'app_hp_lead_t' : 'app_hp_lead')) + '</p>' +
        '<form class="hp-ask" data-ask novalidate>' +
          '<label class="hp-sr" for="hp-q">' + esc(t('app_hp_ask_label')) + '</label>' +
          '<textarea id="hp-q" class="hp-ask__in" rows="1" maxlength="600" placeholder="' + esc(t(role === 'teacher' ? 'app_hp_ask_ph_t' : 'app_hp_ask_ph')) + '" dir="auto"></textarea>' +
          '<button class="hp-ask__go" type="submit" aria-label="' + esc(t('app_hp_ask_go')) + '">' + A.icon('arrow') + '</button>' +
        '</form>' +
        '<div class="hp-suggest" data-suggest aria-live="polite">' + starters() + '</div>' +
      '</div>' +
      '<div class="hp-hero__art" data-stage>' + stageInner('happy', t('app_hp_bub_hi'), 'say') + '</div>' +
    '</section>';
  }
  function stageInner(mood, bubble, kind) { return '<div class="bub ' + (kind || 'say') + '" data-bub>' + esc(bubble) + '</div>' + buoy(mood); }
  function setStage(mood, bubble, kind) {
    var s = root.querySelector('[data-stage]');
    if (s) s.innerHTML = stageInner(mood, bubble, kind);
  }
  function topicCards(list) {
    return (TOPICS[role] || TOPICS.student).map(function (s, i) {
      var n = list.filter(function (a) { return a.subject === s && a.section === 'help'; });
      if (!n.length) return '';
      return '<a class="card card--' + TOPIC_CARD[s] + ' hp-topic span-4" style="--i:' + (i + 2) + '" href="#/help/topic/' + s + '">' +
        '<span class="hp-topic__art">' + A.Cast.drawing(TOPIC_ART[s]) + '</span>' +
        '<span class="hp-topic__txt"><b class="t-h3">' + esc(topicName(s)) + '</b><small>' + esc(n[0].title) + '</small></span>' +
        '<span class="hp-topic__go" aria-hidden="true">' + A.icon('arrow') + '</span></a>';
    }).join('');
  }
  function homeView(list) {
    return '<div class="hp-home rise">' + hero() +
        '<div class="hp-answer" data-answer aria-live="polite"></div>' +
        '<p class="t-tiny hp-ai">' + esc(t('app_hp_ai_note')) + '</p>' +
      '</div>' +
      '<h2 class="t-h2 hp-h">' + esc(t('app_hp_browse')) + '</h2>' +
      '<div class="grid rise hp-topics">' + topicCards(list) + '</div>' +
      '<a class="card card--lime hp-cta rise" href="#/support">' +
        '<span class="hp-cta__art" aria-hidden="true">' + buoy('glad') + '</span>' +
        '<span class="hp-cta__txt"><b class="t-h2">' + esc(t('app_hp_cta_h')) + '</b><span class="t-body">' + esc(t('app_hp_cta_p')) + '</span></span>' +
        '<span class="btn btn--primary">' + esc(t('app_hp_cta_btn')) + A.icon('arrow') + '</span></a>' +
      sampleNote();
  }

  function answerHtml(x) {
    var arts = (x.list || []);
    return '<div class="card hp-turn">' +
      '<p class="hp-turn__q" dir="auto">' + esc(x.q) + '</p>' +
      '<div class="hp-turn__row"><span class="hp-turn__av" aria-hidden="true">' + buoy(x.sure ? 'happy' : 'think') + '</span>' +
      '<div class="hp-turn__body"><div class="hp-turn__a' + (x.sure ? '' : ' is-unsure') + '">' +
        '<p dir="auto">' + esc(x.a) + '</p>' +
        (arts.length ? '<div class="hp-turn__from"><span class="t-tiny">' + esc(t('app_hp_from')) + '</span>' +
          arts.map(function (a) { return '<a href="#/help/a/' + esc(a.slug) + '">' + esc(a.title) + A.icon('arrow') + '</a>'; }).join('') + '</div>' : '') +
      '</div>' +
      '<div class="hp-turn__foot" data-foot>' + footHtml(x) + '</div></div></div>' +
    '</div>';
  }
  function footHtml(x) {
    var person = '<a class="btn btn--primary btn--sm" href="#/support/new' + (x.id ? '/' + esc(x.id) : '') + '">' + esc(t('app_hp_person')) + '</a>';
    if (x.helped === true) return '<p class="hp-thanks">' + A.icon('check') + esc(t('app_hp_glad')) + '</p>';
    if (x.helped === false || !x.sure) return '<p class="t-small">' + esc(t(x.sure ? 'app_hp_sorry' : 'app_hp_unsure')) + '</p>' + person;
    return '<span class="t-small">' + esc(t('app_hp_helped_q')) + '</span>' +
      '<button class="btn btn--quiet btn--sm" type="button" data-rate="yes">' + esc(t('app_hp_yes')) + '</button>' +
      '<button class="btn btn--quiet btn--sm" type="button" data-rate="no">' + esc(t('app_hp_no')) + '</button>';
  }
  function showAnswer(list) {
    var box = root.querySelector('[data-answer]');
    if (!box || !last) return;
    last.list = (last.articles || []).map(function (s) { return list.filter(function (a) { return a.slug === s; })[0]; }).filter(Boolean);
    box.innerHTML = answerHtml(last);
    box.querySelectorAll('[data-rate]').forEach(function (b) {
      b.addEventListener('click', function () {
        var yes = b.getAttribute('data-rate') === 'yes';
        last.helped = yes;
        box.querySelector('[data-foot]').innerHTML = footHtml(last);
        setStage(yes ? 'glad' : 'happy', t(yes ? 'app_hp_bub_glad' : 'app_hp_bub_person'), yes ? 'say' : 'think');
        if (real() && last.id) call('rate', { id: last.id, helpful: yes }).catch(function () {});
      });
    });
  }
  /* Signed out: a sample answer from the best article, so the page can be tried */
  function sampleAnswer(list, q) {
    var m = matches(list, q, 1)[0];
    return m ? { answer: m.summary, articles: [m.slug], sure: true, id: null } : { answer: t('app_hp_sample_none'), articles: [], sure: false, id: null };
  }
  function wireAsk(list, my) {
    var form = root.querySelector('[data-ask]'), ta = form.querySelector('textarea'), sug = root.querySelector('[data-suggest]'), box = root.querySelector('[data-answer]');
    var grow = function () { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 180) + 'px'; };
    ta.addEventListener('input', function () {
      grow();
      var m = matches(list, ta.value, 3);
      sug.innerHTML = m.length && ta.value.trim().length > 2 ? '<p class="t-tiny">' + esc(t('app_hp_maybe')) + '</p>' + m.map(function (a) {
        return '<a href="#/help/a/' + esc(a.slug) + '">' + esc(a.title) + A.icon('arrow') + '</a>';
      }).join('') : ta.value.trim() || last ? '' : starters();
    });
    ta.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event('submit')); } });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = ta.value.trim();
      if (q.length < 2 || form.classList.contains('is-busy')) { ta.focus(); return; }
      form.classList.add('is-busy'); sug.innerHTML = '';
      box.innerHTML = '<div class="card hp-turn"><p class="hp-turn__q" dir="auto">' + esc(q) + '</p><div class="hp-turn__row"><span class="hp-turn__av" aria-hidden="true">' + buoy('think') + '</span><div class="hp-turn__body"><div class="hp-turn__a is-wait"><span class="hp-dots" aria-label="' + esc(t('app_hp_thinking')) + '"><i></i><i></i><i></i></span></div></div></div></div>';
      setStage('think', t('app_hp_bub_think'), 'think');
      var go = real() ? call('ask', { question: q, lang: A.lang, history: history.slice(-2) }) : new Promise(function (ok) { setTimeout(function () { ok(sampleAnswer(list, q)); }, 900); });
      go.then(function (d) {
        if (my !== mountNo) return;
        last = { q: q, a: d.answer, id: d.id, articles: d.articles || [], sure: !!d.sure, helped: null };
        history.push({ q: q, a: d.answer });
        ta.value = ''; grow();
        showAnswer(list);
        setStage(d.sure ? 'happy' : 'think', t(d.sure ? 'app_hp_bub_found' : 'app_hp_bub_person'), d.sure ? 'say' : 'think');
        track('help_ask', { sure: !!d.sure });
      }, function (err) {
        if (my !== mountNo) return;
        box.innerHTML = '<div class="card hp-turn"><p class="hp-turn__q" dir="auto">' + esc(q) + '</p><div class="hp-turn__row"><span class="hp-turn__av" aria-hidden="true">' + buoy('think') + '</span><div class="hp-turn__body"><div class="hp-turn__a is-unsure"><p>' + esc(err && err.message ? err.message : t('app_hp_err')) + '</p></div>' +
          '<div class="hp-turn__foot"><a class="btn btn--primary btn--sm" href="#/support/new">' + esc(t('app_hp_person')) + '</a></div></div></div></div>';
        setStage('happy', t('app_hp_bub_person'), 'think');
      }).then(function () { form.classList.remove('is-busy'); });
    });
    if (last) showAnswer(list);
  }

  /* ---------- Help: a topic ---------- */
  function topicView(list, s) {
    var help = list.filter(function (a) { return a.subject === s && a.section === 'help'; });
    var sup = list.filter(function (a) { return a.subject === s && a.section === 'support'; });
    return back('#/help', t('app_hp_title')) +
      '<div class="rise">' +
        '<section class="card card--' + (TOPIC_CARD[s] || 'bone') + ' hp-topic-hero" style="--i:0"><h1 class="t-display">' + esc(topicName(s)) + '</h1>' +
          '<span class="hp-topic-hero__art" aria-hidden="true">' + A.Cast.drawing(TOPIC_ART[s] || 'books') + '</span></section>' +
        '<div class="hp-rows card" style="--i:1">' + help.map(row).join('') + '</div>' +
        (sup.length ? '<h2 class="t-h2 hp-h hp-h--sm" style="--i:2">' + esc(t('app_hp_wrong')) + '</h2><div class="hp-rows card" style="--i:3">' + sup.map(row).join('') + '</div>' : '') +
      '</div>';
  }

  /* ---------- Help: one article ---------- */
  function articleView(list, a) {
    var related = (a.related || []).map(function (s) { return list.filter(function (x) { return x.slug === s; })[0]; }).filter(Boolean);
    var up = a.section === 'support' ? ['#/support', t('app_sp_title')] : ['#/help/topic/' + a.subject, topicName(a.subject)];
    return back(up[0], up[1]) +
      '<div class="grid rise hp-article">' +
        '<article class="card span-8 hp-doc" style="--i:0">' +
          '<h1 class="t-h2" dir="auto">' + esc(a.title) + '</h1>' +
          '<p class="hp-doc__sum" dir="auto">' + esc(a.summary) + '</p>' +
          a.body.map(function (p) { return '<p dir="auto">' + esc(p) + '</p>'; }).join('') +
          '<p class="t-tiny hp-doc__date">' + esc(t('app_hp_updated', { date: new Intl.DateTimeFormat(A.locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(a.updated)) })) + '</p>' +
        '</article>' +
        '<aside class="span-4 hp-side">' +
          '<div class="stage hp-stage hp-stage--sm" style="--i:1;background:var(--t-mint)" data-stage><div class="bub say" data-bub>' + esc(t('app_hp_bub_read')) + '</div>' + buoy('happy') + '</div>' +
          '<div class="card hp-rate" style="--i:2" data-artrate><p class="t-body"><b>' + esc(t('app_hp_helped_q')) + '</b></p>' +
            '<div class="btn-row"><button class="btn btn--quiet btn--sm" type="button" data-arate="yes">' + esc(t('app_hp_yes')) + '</button>' +
            '<button class="btn btn--quiet btn--sm" type="button" data-arate="no">' + esc(t('app_hp_no')) + '</button></div></div>' +
          (related.length ? '<div class="card hp-related" style="--i:3"><h2 class="t-h3">' + esc(t('app_hp_related')) + '</h2>' +
            related.map(function (r) { return '<a href="#/help/a/' + esc(r.slug) + '">' + esc(r.title) + A.icon('arrow') + '</a>'; }).join('') + '</div>' : '') +
        '</aside>' +
      '</div>';
  }
  function wireArticle(a) {
    var box = root.querySelector('[data-artrate]');
    if (!box) return;
    box.querySelectorAll('[data-arate]').forEach(function (b) {
      b.addEventListener('click', function () {
        var yes = b.getAttribute('data-arate') === 'yes';
        track('help_article', { slug: a.slug, helpful: yes });
        box.innerHTML = yes ? '<p class="hp-thanks">' + A.icon('check') + esc(t('app_hp_glad')) + '</p>'
          : '<p class="t-body">' + esc(t('app_hp_sorry')) + '</p><div class="btn-row"><a class="btn btn--primary btn--sm" href="#/support/new">' + esc(t('app_hp_person')) + '</a></div>';
        setStage(yes ? 'glad' : 'happy', t(yes ? 'app_hp_bub_glad' : 'app_hp_bub_person'), yes ? 'say' : 'think');
      });
    });
  }

  function mountHelp(view, parts, helpers, my) {
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" aria-hidden="true">' + A.loaderInner() + '</div></div>';
    return articles().then(function (list) {
      if (my !== mountNo) return { stale: true };
      if (parts[0] === 'a' && parts[1]) {
        var a = list.filter(function (x) { return x.slug === parts[1]; })[0];
        if (!a) { root.innerHTML = homeView(list); wireAsk(list, my); return { title: t('app_hp_title') }; }
        root.innerHTML = articleView(list, a); wireArticle(a);
        track('help_read', { slug: a.slug });
        return { title: a.title };
      }
      if (parts[0] === 'topic' && TOPIC_ART[parts[1]]) {
        root.innerHTML = topicView(list, parts[1]);
        return { title: topicName(parts[1]) };
      }
      LIST = list;
      root.innerHTML = homeView(list);
      wireAsk(list, my);
      if (last) root.querySelector('[data-suggest]').innerHTML = '';
      return { title: t('app_hp_title') };
    }, function () {
      if (my !== mountNo) return { stale: true };
      root.innerHTML = head(t('app_hp_title')) + '<div class="card"><p class="t-body">' + esc(t('app_hp_load_err')) + '</p><div class="btn-row"><a class="btn btn--primary" href="#/support">' + esc(t('app_hp_cta_btn')) + '</a></div></div>';
      return { title: t('app_hp_title') };
    });
  }

  /* ---------- Support ---------- */
  function sampleRequests() {
    var now = Date.now(), ago = function (h) { return new Date(now - h * 3600000).toISOString(); };
    return [
      { id: 'r1', subject: t('app_sp_sample_subject'), topic: 'plans', status: 'answered', created_at: ago(30), updated_at: ago(4),
        messages: [{ id: 'm1', author: 'person', body: t('app_sp_sample_q'), created_at: ago(30) }, { id: 'm2', author: 'alimun', body: t('app_sp_sample_a'), created_at: ago(4) }] }
    ];
  }
  function loadRequests() {
    if (!real()) return Promise.resolve(sampleRequests());
    var c = sb();
    return window.AlimunData.userId().then(function (me) {
      return c.from('help_requests').select('id, subject, topic, status, created_at, updated_at').eq('user_id', me).order('updated_at', { ascending: false }).limit(50);
    }).then(function (r) {
      if (r.error) throw r.error;
      var reqs = r.data || [];
      if (!reqs.length) return reqs;
      return c.from('help_messages').select('id, request_id, author, body, created_at').in('request_id', reqs.map(function (x) { return x.id; })).order('created_at').then(function (m) {
        if (m.error) throw m.error;
        reqs.forEach(function (x) { x.messages = (m.data || []).filter(function (y) { return y.request_id === x.id; }); });
        return reqs;
      });
    });
  }
  function statusText(r) {
    var lastMsg = r.messages && r.messages[r.messages.length - 1];
    if (r.status === 'closed') return t('app_sp_st_closed');
    if (lastMsg && lastMsg.author === 'alimun') return t('app_sp_st_replied');
    return t('app_sp_st_waiting');
  }
  function convList(reqs, cur) {
    if (!reqs.length) return '<p class="t-small hp-none">' + esc(t('app_sp_none')) + '</p>';
    return reqs.map(function (r) {
      var lastMsg = r.messages && r.messages[r.messages.length - 1], replied = lastMsg && lastMsg.author === 'alimun' && r.status !== 'closed';
      return '<a class="ms-conv sp-conv' + (cur && cur.id === r.id ? ' is-on' : '') + (replied ? ' is-unread' : '') + '" href="#/support/' + esc(r.id) + '"' + (cur && cur.id === r.id ? ' aria-current="page"' : '') + '>' +
        '<span class="ms-conv__art" aria-hidden="true">' + buoy(replied ? 'glad' : 'happy') + '</span>' +
        '<span class="ms-conv__txt"><b dir="auto">' + esc(r.subject) + '</b><span>' + esc(statusText(r)) + '</span>' +
          (lastMsg ? '<span class="ms-conv__pv" dir="auto">' + esc((lastMsg.author === 'alimun' ? 'Alimun: ' : '') + lastMsg.body.slice(0, 90)) + '</span>' : '') + '</span>' +
        '<span class="sp-conv__when">' + esc(short(r.updated_at)) + '</span></a>';
    }).join('');
  }
  function topicOptions(sel) {
    var list = (TOPICS[role] || TOPICS.student).concat(['other']);
    return list.map(function (s) { return '<option value="' + s + '"' + (s === sel ? ' selected' : '') + '>' + esc(s === 'other' ? t('app_sp_topic_other') : topicName(s)) + '</option>'; }).join('');
  }
  function composeCard(qid, q) {
    return '<form class="card span-7 sp-compose" style="--i:1" data-compose novalidate>' +
      '<h2 class="t-h2">' + esc(t('app_sp_write_h')) + '</h2>' +
      '<p class="t-small">' + esc(t('app_sp_write_p')) + '</p>' +
      (q ? '<div class="sp-attached"><span class="t-tiny">' + esc(t('app_sp_attached')) + '</span><p dir="auto">' + esc(q) + '</p></div>' : '') +
      '<div class="st-row">' +
        '<label class="st-field"><span class="st-lbl">' + esc(t('app_sp_topic')) + '</span><select class="st-in" name="topic">' + topicOptions(role === 'teacher' ? 'teachers' : 'classes') + '</select></label>' +
        '<label class="st-field"><span class="st-lbl">' + esc(t('app_sp_subject')) + '</span><input class="st-in" name="subject" maxlength="140" required dir="auto" value="' + esc(q ? q.slice(0, 120) : '') + '"></label>' +
      '</div>' +
      '<label class="st-field"><span class="st-lbl">' + esc(t('app_sp_message')) + '</span><textarea class="st-in sp-msg" name="message" rows="5" maxlength="4000" required dir="auto" placeholder="' + esc(t('app_sp_message_ph')) + '"></textarea></label>' +
      '<input type="hidden" name="qid" value="' + esc(qid || '') + '">' +
      '<div class="sp-send"><button class="btn btn--primary" type="submit">' + esc(t('app_sp_send')) + A.icon('arrow') + '</button><p class="st-msg" data-msg role="status"></p></div>' +
    '</form>';
  }
  function supportHome(reqs, list, qid, q) {
    var quick = list.filter(function (a) { return a.section === 'support'; });
    return '<div class="rise">' +
        '<section class="card card--coral sp-hero" style="--i:0"><div class="hp-hero__main"><h1 class="t-display">' + esc(t('app_sp_title')) + '</h1>' +
          '<p class="t-lead">' + esc(t('app_sp_lead')) + '</p></div>' +
          '<div class="hp-hero__art" data-stage>' + stageInner('happy', t('app_sp_bub'), 'say') + '</div></section>' +
      '</div>' +
      '<div class="grid rise sp-grid">' + composeCard(qid, q) +
        '<div class="span-5 sp-aside">' +
          '<section class="card sp-mine" style="--i:2"><h2 class="t-h3">' + esc(t('app_sp_mine')) + '</h2><div class="ms-list sp-list">' + convList(reqs) + '</div></section>' +
          (quick.length ? '<section class="card card--bone sp-quick" style="--i:3"><h2 class="t-h3">' + esc(t('app_sp_quick')) + '</h2><div class="hp-rows">' + quick.map(row).join('') + '</div></section>' : '') +
        '</div>' +
      '</div>' + sampleNote();
  }
  function wireCompose(my) {
    var f = root.querySelector('[data-compose]');
    if (!f) return;
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = f.querySelector('[data-msg]'), btn = f.querySelector('button[type=submit]');
      var subject = f.subject.value.trim(), message = f.message.value.trim();
      msg.classList.remove('is-bad');
      if (subject.length < 2) { msg.textContent = t('app_sp_need_subject'); msg.classList.add('is-bad'); f.subject.focus(); return; }
      if (message.length < 2) { msg.textContent = t('app_sp_need_message'); msg.classList.add('is-bad'); f.message.focus(); return; }
      if (!real()) { msg.textContent = t('app_sp_sample_sent'); return; }
      btn.disabled = true; msg.textContent = t('app_sp_sending');
      call('request', { subject: subject, message: message, topic: f.topic.value, question_id: f.qid.value || null, lang: A.lang }).then(function (d) {
        if (my !== mountNo) return;
        track('help_request', { topic: f.topic.value });
        location.hash = '#/support/' + d.id;
      }, function (err) { btn.disabled = false; msg.textContent = err.message || t('app_hp_err'); msg.classList.add('is-bad'); });
    });
  }
  function threadView(reqs, r) {
    var msgs = (r.messages || []).map(function (m) {
      var mine = m.author === 'person';
      return '<div class="ms-msg' + (mine ? ' is-me' : ' is-teacher') + '">' + (mine ? '' : '<p class="ms-msg__who">Alimun</p>') +
        '<div class="ms-bub" dir="auto">' + para(m.body) + '</div><span class="ms-msg__time">' + esc(when(m.created_at)) + '</span></div>';
    }).join('');
    var closed = r.status === 'closed';
    return back('#/support', t('app_sp_title')) +
      '<div class="ms has-conv sp-layout">' +
        '<nav class="ms-list sp-side" aria-label="' + esc(t('app_sp_mine')) + '">' + convList(reqs, r) + '<a class="btn btn--quiet btn--sm sp-new" href="#/support/new">' + A.icon('plus') + esc(t('app_sp_new')) + '</a></nav>' +
        '<section class="ms-main sp-main">' +
          '<header class="ms-head sp-head"><div><h1 class="t-h3" dir="auto">' + esc(r.subject) + '</h1><p class="t-small">' + esc(statusText(r) + ' · ' + (r.topic === 'other' ? t('app_sp_topic_other') : topicName(r.topic))) + '</p></div>' +
            (closed ? '' : '<button class="btn btn--quiet btn--sm" type="button" data-close>' + esc(t('app_sp_close')) + '</button>') + '</header>' +
          '<div class="ms-msgs" data-msgs>' + msgs +
            (r.messages && r.messages.length && r.messages[r.messages.length - 1].author === 'person' && !closed ? '<p class="sp-wait">' + buoy('think') + '<span>' + esc(t('app_sp_waiting_p')) + '</span></p>' : '') + '</div>' +
          (closed ? '<div class="sp-closed"><p class="t-small">' + esc(t('app_sp_closed_p')) + '</p><a class="btn btn--primary btn--sm" href="#/support/new">' + esc(t('app_sp_new')) + '</a></div>'
            : '<form class="ms-form sp-reply" data-reply><label class="hp-sr" for="sp-r">' + esc(t('app_sp_reply')) + '</label><textarea id="sp-r" class="ms-in" rows="1" maxlength="4000" dir="auto" placeholder="' + esc(t('app_sp_reply')) + '"></textarea>' +
              '<button class="btn btn--primary btn--sm" type="submit">' + esc(t('app_sp_send')) + '</button></form>') +
        '</section>' +
      '</div>';
  }
  function wireThread(r, my) {
    var box = root.querySelector('[data-msgs]');
    if (box) box.scrollTop = box.scrollHeight;
    var c = root.querySelector('[data-close]');
    if (c) c.addEventListener('click', function () {
      if (!real()) return;
      c.disabled = true;
      call('close', { id: r.id }).then(function () { if (my === mountNo) A.rerender(); }, function () { c.disabled = false; });
    });
    var f = root.querySelector('[data-reply]');
    if (!f) return;
    var ta = f.querySelector('textarea');
    ta.addEventListener('input', function () { ta.style.height = 'auto'; ta.style.height = Math.min(ta.scrollHeight, 160) + 'px'; });
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var body = ta.value.trim();
      if (!body || !real()) return;
      var b = f.querySelector('button'); b.disabled = true;
      call('reply', { id: r.id, message: body }).then(function () { if (my === mountNo) A.rerender(); }, function (err) { b.disabled = false; ta.setCustomValidity(err.message || ''); ta.reportValidity(); ta.setCustomValidity(''); });
    });
  }
  function mountSupport(view, parts, helpers, my) {
    root.innerHTML = '<div class="rd-loading"><div class="loader" style="--w:72px" aria-hidden="true">' + A.loaderInner() + '</div></div>';
    var qid = parts[0] === 'new' && /^[0-9a-f-]{36}$/i.test(parts[1] || '') ? parts[1] : null;
    var qText = qid && last && last.id === qid ? last.q : null;
    return Promise.all([loadRequests(), articles().catch(function () { return []; })]).then(function (res) {
      if (my !== mountNo) return { stale: true };
      var reqs = res[0], list = res[1];
      var cur = parts[0] && parts[0] !== 'new' ? reqs.filter(function (x) { return x.id === parts[0]; })[0] : null;
      if (cur) { root.innerHTML = threadView(reqs, cur); wireThread(cur, my); return { title: cur.subject }; }
      root.innerHTML = supportHome(reqs, list, qid, qText);
      wireCompose(my);
      if (parts[0] === 'new') { var s = root.querySelector('[name=' + (qText ? 'message' : 'subject') + ']'); if (s) s.focus(); }
      return { title: t('app_sp_title') };
    }, function () {
      if (my !== mountNo) return { stale: true };
      root.innerHTML = head(t('app_sp_title'), t('app_sp_lead')) + '<div class="card"><p class="t-body">' + esc(t('app_sp_load_err')) + '</p></div>';
      return { title: t('app_sp_title') };
    });
  }

  function start(which, view, parts, helpers) {
    var my = ++mountNo;
    A = helpers; root = view;
    role = helpers.role === 'teacher' ? 'teacher' : 'student';
    return which === 'support' ? mountSupport(view, parts, helpers, my) : mountHelp(view, parts, helpers, my);
  }
  function reset() { mountNo++; }
  window.AlimunHelp = { mount: function (v, p, h) { return start('help', v, p, h); }, reset: reset };
  window.AlimunSupport = { mount: function (v, p, h) { return start('support', v, p, h); }, reset: reset };
})();
