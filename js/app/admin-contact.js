/* Alimun admin: Contact messages. English only.
   #/contact   what people wrote in the contact form on alimun.com, newest first, with a search box and a Reply link.
   Read from public.contact_messages (admins only, migration 202611171000). Messages are saved from 17 Nov 2026;
   earlier ones are only in the owner's inbox. Signed out or ?sample=1: a sample. */
(function () {
  'use strict';
  var A = null, root = null, ROWS = [], Q = '', no = 0;
  var LANG = { en: 'English', es: 'Spanish', fr: 'French', ma: 'French (Morocco)', de: 'German', pt: 'Portuguese', zh: 'Chinese', ar: 'Arabic', it: 'Italian' };
  var EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  function esc(s) { return A.esc(s); }
  function real() { return A.mode() === 'real'; }
  function loading() { return '<div class="rd-loading"><div class="loader" style="--w:56px" role="img" aria-label="Loading">' + A.loaderInner() + '</div></div>'; }
  function when(at) { return A.fmt(at, { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }); }
  function sample() {
    var n = Date.now();
    return [
      { id: 's1', created_at: new Date(n - 3600000).toISOString(), first_name: 'Sylvie', last_name: 'Martin', email: 'sylvie@example.com', phone: '', message: 'Hello, do you have evening classes for beginners in French?', locale: 'fr', page: '/fr/contact' },
      { id: 's2', created_at: new Date(n - 86400000).toISOString(), first_name: 'Omar', last_name: '', email: 'omar@example.com', phone: '+212 600 000000', message: 'Can my daughter join a trial class?', locale: 'en', page: '/contact' }
    ];
  }
  function card(r, i) {
    var name = ((r.first_name || '') + ' ' + (r.last_name || '')).trim();
    var meta = [r.email, r.phone, LANG[r.locale] || r.locale, r.page].filter(Boolean).join(' · ');
    var reply = EMAIL_RE.test(r.email || '') ? '<a class="btn btn--primary btn--sm" href="mailto:' + esc(encodeURIComponent(r.email).replace(/%40/g, '@')) + '?subject=' + esc(encodeURIComponent('Re: your message to Alimun')) + '">Reply by email</a>' : '';
    return '<section class="card span-12" style="--i:' + Math.min(i, 8) + '"><h2 class="t-h3" dir="auto">' + esc(name || r.email) + '</h2>' +
      '<p class="t-small">' + esc(when(r.created_at)) + '</p><p class="t-small" dir="auto">' + esc(meta) + '</p>' +
      '<p class="t-body" dir="auto" style="white-space:pre-wrap;margin:10px 0">' + esc(r.message) + '</p>' + reply + '</section>';
  }
  function list() {
    var q = Q.trim().toLowerCase();
    var rows = ROWS.filter(function (r) { return !q || [r.first_name, r.last_name, r.email, r.phone, r.message].join(' ').toLowerCase().indexOf(q) > -1; });
    return rows.length ? rows.map(card).join('') : '<section class="card span-12"><p class="t-body">' + (ROWS.length ? 'No message matches your search.' : 'No messages yet. New messages from the contact form appear here.') + '</p></section>';
  }
  function view() {
    return '<div class="grid rise"><section class="card span-12" style="--i:0"><label class="t-small" for="ct-q">Search by name, email or words in the message</label>' +
      '<input id="ct-q" class="st-in" type="search" value="' + esc(Q) + '" autocomplete="off"><p class="t-small" style="margin-top:8px">' + esc(A.num(ROWS.length)) + ' saved, newest first. Messages are saved from 17 Nov 2026; earlier ones are in the Alimun inbox.</p></section>' +
      '<div data-ct-list class="span-12" style="display:contents">' + list() + '</div>' + (real() ? '' : '<p class="t-tiny span-12">This is sample data.</p>') + '</div>';
  }
  function mount(v, parts, helpers) {
    var my = ++no;
    A = helpers; root = v; root.innerHTML = loading();
    var get = real() ? window.AlimunData.adminContactMessages() : Promise.resolve(sample());
    return get.then(function (rows) {
      if (my !== no) return { stale: true };
      ROWS = rows || []; root.innerHTML = view();
      var box = root.querySelector('#ct-q');
      box.addEventListener('input', function () { Q = box.value; root.querySelector('[data-ct-list]').innerHTML = list(); });
      return { title: 'Contact messages' };
    }, function (e) {
      if (my === no) root.innerHTML = '<div class="card"><p class="t-body">Messages did not load: ' + esc((e && e.message) || 'please try again') + '.</p></div>';
      return { stale: true };
    });
  }
  window.AlimunAdminContact = { mount: mount, reset: function () { no++; } };
})();
