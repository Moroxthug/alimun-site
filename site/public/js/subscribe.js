/**
 * Email signup forms ("Reserve your spot" and the footer newsletter).
 * These are Webflow forms with no backend: Webflow's own script would show
 * "Thank you!" without saving anything. This takes over the submit (capture
 * phase, before Webflow's handler), posts to
 * /api/send-admin-email?action=subscribe and shows the real result in the
 * form's existing success / error blocks.
 */
(function () {
  function apiUrl() {
    // Locale pages live one folder down (/fr/...), but the API is at the root.
    return '/api/send-admin-email?action=subscribe';
  }

  function locale() {
    const m = location.pathname.match(/^\/(es|fr|de|it|pt|zh|ar|ma)(\/|$)/);
    return m ? m[1] : 'en';
  }

  function show(el, on) { if (el) el.style.display = on ? 'block' : 'none'; }

  document.addEventListener('submit', async function (e) {
    const form = e.target;
    if (!(form instanceof HTMLFormElement) || !form.classList.contains('email_form')) return;
    e.preventDefault();
    e.stopImmediatePropagation();

    const wrap = form.closest('.w-form') || form.parentElement;
    const done = wrap && wrap.querySelector('.w-form-done');
    const fail = wrap && wrap.querySelector('.w-form-fail');
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('[type="submit"]');
    if (!input || !input.value.trim()) return;

    show(fail, false);
    if (button) { button.disabled = true; }
    try {
      const resp = await fetch(apiUrl(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: input.value.trim(),
          source: form.closest('footer') ? 'footer' : 'home',
          locale: locale(),
          page: location.pathname,
        }),
      });
      let data = {};
      try { data = await resp.json(); } catch (_) {}
      if (!resp.ok || !data.ok) throw new Error(data.message || '');
      form.style.display = 'none';
      show(done, true);
    } catch (err) {
      // Keep the translated generic text unless the server gave a specific reason.
      const msg = fail && fail.querySelector('div');
      if (msg && err.message) msg.textContent = err.message;
      show(fail, true);
    } finally {
      if (button) { button.disabled = false; }
    }
  }, true);
})();
