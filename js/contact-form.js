/**
 * Contact page form. A Webflow form with no backend: Webflow's own script
 * would show "Thank you!" without sending anything. This takes over the
 * submit (capture phase, before Webflow's handler), posts to
 * /api/send-admin-email?action=contact and shows the real result in the
 * form's existing success / error blocks.
 */
(function () {
  function locale() {
    const m = location.pathname.match(/^\/(es|fr|de|it|pt|zh|ar|ma)(\/|$)/);
    return m ? m[1] : 'en';
  }

  function show(el, on) { if (el) el.style.display = on ? 'block' : 'none'; }

  document.addEventListener('submit', async function (e) {
    const form = e.target;
    if (!(form instanceof HTMLFormElement) || !form.classList.contains('contact_form')) return;
    e.preventDefault();
    e.stopImmediatePropagation();

    const wrap = form.closest('.w-form') || form.parentElement;
    const done = wrap && wrap.querySelector('.w-form-done');
    const fail = wrap && wrap.querySelector('.w-form-fail');
    const button = form.querySelector('[type="submit"]');
    const data = { locale: locale(), page: location.pathname };
    new FormData(form).forEach(function (v, k) { data[k] = String(v); });

    show(fail, false);
    if (button) { button.disabled = true; }
    try {
      const resp = await fetch('/api/send-admin-email?action=contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      let out = {};
      try { out = await resp.json(); } catch (_) {}
      if (!resp.ok || !out.ok) throw new Error(out.message || '');
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
