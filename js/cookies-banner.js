/**
 * ============================================================
 *  ALIMUN — GDPR Cookie Consent Banner & Manager
 *  /js/cookies-banner.js
 * ============================================================
 */

(function () {
  // Styles to inject for the banner and settings modal
  const styles = `
    /* Cookie Banner Container */
    #alimun-cookie-banner {
      position: fixed;
      bottom: 1.5rem;
      left: 50%;
      transform: translateX(-50%) translateY(120%);
      width: calc(100% - 3rem);
      max-width: 600px;
      background: #ffffff;
      color: #080808;
      border: 1px solid rgba(8, 8, 8, 0.08);
      border-radius: 1.25rem;
      padding: 1.5rem;
      box-shadow: 0 20px 60px rgba(8, 8, 8, 0.16);
      z-index: 999999;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      font-family: 'Satoshi', sans-serif;
      transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    #alimun-cookie-banner.show {
      transform: translateX(-50%) translateY(0);
    }
    #alimun-cookie-banner p {
      font-size: 0.875rem;
      line-height: 1.5;
      color: rgba(8, 8, 8, 0.72);
      margin: 0;
    }
    #alimun-cookie-banner a {
      color: #080808;
      text-decoration: underline;
      text-decoration-color: #ceff65;
      text-decoration-thickness: 2px;
    }
    #alimun-cookie-banner a:hover {
      background: #ceff65;
    }
    .cookie-banner-title {
      font-family: 'Coolvetica Condensed', sans-serif;
      font-size: 1.5rem;
      line-height: 1;
      text-transform: uppercase;
      color: #080808;
    }
    .cookie-banner-btns {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }
    .cookie-btn {
      padding: 0.625rem 1.25rem;
      border-radius: 50rem;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: 'Satoshi', sans-serif;
      border: none;
      line-height: 1;
    }
    .cookie-btn-primary {
      background: #ceff65;
      color: #080808;
    }
    .cookie-btn-primary:hover {
      background: #b3e940;
    }
    .cookie-btn-secondary {
      background: transparent;
      color: #080808;
      border: 1.5px solid rgba(8, 8, 8, 0.2);
    }
    .cookie-btn-secondary:hover {
      background: #f0efe9;
      border-color: rgba(8, 8, 8, 0.4);
    }
    .cookie-btn-link {
      background: transparent;
      color: #080808;
      border: none;
      text-decoration: underline;
      text-decoration-color: #ceff65;
      text-decoration-thickness: 2px;
      padding: 0.5rem;
    }
    .cookie-btn-link:hover {
      background: #ceff65;
    }

    /* Modal Overlay */
    #cookie-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(240, 239, 233, 0.75);
      backdrop-filter: blur(10px);
      z-index: 9999999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      font-family: 'Satoshi', sans-serif;
    }
    #cookie-modal-overlay.show {
      opacity: 1;
      pointer-events: all;
    }
    .cookie-modal {
      background: #ffffff;
      color: #080808;
      border: 1px solid rgba(8, 8, 8, 0.08);
      border-radius: 1.75rem;
      width: 100%;
      max-width: 520px;
      padding: 2rem;
      box-shadow: 0 40px 100px rgba(8, 8, 8, 0.18);
      transform: translateY(20px) scale(0.95);
      transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    #cookie-modal-overlay.show .cookie-modal {
      transform: translateY(0) scale(1);
    }
    .cookie-modal-header {
      margin-bottom: 1.5rem;
    }
    .cookie-modal-title {
      font-family: 'Coolvetica Condensed', sans-serif;
      font-size: 2rem;
      line-height: 1;
      text-transform: uppercase;
      color: #080808;
      margin-bottom: 0.5rem;
    }
    .cookie-modal-desc {
      font-size: 0.85rem;
      color: rgba(8, 8, 8, 0.65);
      line-height: 1.5;
    }
    .cookie-option-list {
      display: flex;
      flex-direction: column;
      gap: 1.125rem;
      margin-bottom: 2rem;
    }
    .cookie-option-item {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.5rem;
      padding-bottom: 1.125rem;
      border-bottom: 1px solid rgba(8, 8, 8, 0.1);
    }
    .cookie-option-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
    .cookie-option-info {
      flex: 1;
    }
    .cookie-option-name {
      font-weight: 700;
      font-size: 0.9rem;
      color: #080808;
      margin-bottom: 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .cookie-badge {
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      background: #f0efe9;
      color: rgba(8, 8, 8, 0.6);
      padding: 0.18rem 0.5rem;
      border-radius: 0.35rem;
    }
    .cookie-badge-required {
      background: #ceff65;
      color: #080808;
    }
    .cookie-option-desc {
      font-size: 0.78rem;
      color: rgba(8, 8, 8, 0.6);
      line-height: 1.45;
    }
    
    /* Toggle switch styling */
    .cookie-switch {
      position: relative;
      display: inline-block;
      width: 44px;
      height: 24px;
      flex-shrink: 0;
    }
    .cookie-switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .cookie-slider {
      position: absolute;
      cursor: pointer;
      inset: 0;
      background-color: rgba(8, 8, 8, 0.15);
      transition: .25s ease;
      border-radius: 34px;
    }
    .cookie-slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      box-shadow: 0 1px 3px rgba(8, 8, 8, 0.25);
      transition: .25s ease;
      border-radius: 50%;
    }
    .cookie-switch input:checked + .cookie-slider {
      background-color: #ceff65;
    }
    .cookie-switch input:checked + .cookie-slider:before {
      transform: translateX(20px);
      background-color: #080808;
    }
    .cookie-switch input:disabled + .cookie-slider {
      opacity: 0.45;
      cursor: not-allowed;
    }
  `;

  // HTML templates for banner and modal
  const bannerHTML = `
    <div id="alimun-cookie-banner">
      <div class="cookie-banner-title">Cookie Consent</div>
      <p>We use cookies to optimize your experience, deliver interactive features, and analyze site traffic. You can choose to accept all cookies or manage your preferences. Read our <a href="cookies.html">Cookie Policy</a> for details.</p>
      <div class="cookie-banner-btns">
        <button class="cookie-btn cookie-btn-primary" id="cookies-accept-all">Accept All</button>
        <button class="cookie-btn cookie-btn-secondary" id="cookies-reject-all">Reject All</button>
        <button class="cookie-btn cookie-btn-link" id="cookies-manage">Cookie Settings</button>
      </div>
    </div>
  `;

  const modalHTML = `
    <div id="cookie-modal-overlay">
      <div class="cookie-modal">
        <div class="cookie-modal-header">
          <div class="cookie-modal-title">Cookie Preferences</div>
          <div class="cookie-modal-desc">Manage how cookies are used on Alimun. Essential cookies are required to operate the site, while other categories help us personalize and improve your experience.</div>
        </div>
        <div class="cookie-option-list">
          <!-- Essential -->
          <div class="cookie-option-item">
            <div class="cookie-option-info">
              <div class="cookie-option-name">Essential <span class="cookie-badge cookie-badge-required">Always On</span></div>
              <div class="cookie-option-desc">Required for basic site functionality, such as user authentication sessions, waitlist processing, and security.</div>
            </div>
            <label class="cookie-switch">
              <input type="checkbox" id="cookie-opt-essential" checked disabled>
              <span class="cookie-slider"></span>
            </label>
          </div>
          <!-- Analytics -->
          <div class="cookie-option-item">
            <div class="cookie-option-info">
              <div class="cookie-option-name">Analytics & Performance <span class="cookie-badge">Optional</span></div>
              <div class="cookie-option-desc">Allows us to analyze visitor behavior, count visits, and measure traffic sources so we can improve site navigation and curriculum content.</div>
            </div>
            <label class="cookie-switch">
              <input type="checkbox" id="cookie-opt-analytics">
              <span class="cookie-slider"></span>
            </label>
          </div>
          <!-- Marketing -->
          <div class="cookie-option-item">
            <div class="cookie-option-info">
              <div class="cookie-option-name">Marketing & Personalization <span class="cookie-badge">Optional</span></div>
              <div class="cookie-option-desc">Used to display relevant ads, track marketing campaign performance, and offer personalized learning recommendations.</div>
            </div>
            <label class="cookie-switch">
              <input type="checkbox" id="cookie-opt-marketing">
              <span class="cookie-slider"></span>
            </label>
          </div>
        </div>
        <div class="cookie-banner-btns" style="justify-content: flex-end;">
          <button class="cookie-btn cookie-btn-secondary" id="cookie-modal-close">Cancel</button>
          <button class="cookie-btn cookie-btn-primary" id="cookie-modal-save">Save Preferences</button>
        </div>
      </div>
    </div>
  `;

  // Inject Styles and DOM Elements
  function init() {
    // 1. Inject styles
    const styleEl = document.createElement('style');
    styleEl.innerHTML = styles;
    document.head.appendChild(styleEl);

    // 2. Inject DOM
    const bannerContainer = document.createElement('div');
    bannerContainer.innerHTML = bannerHTML;
    document.body.appendChild(bannerContainer.firstElementChild);

    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);

    // 3. Attach Handlers
    attachEventHandlers();

    // 4. Check Saved Consent
    checkConsent();
  }

  function attachEventHandlers() {
    const banner = document.getElementById('alimun-cookie-banner');
    const overlay = document.getElementById('cookie-modal-overlay');

    // Accept All
    document.getElementById('cookies-accept-all').addEventListener('click', () => {
      saveConsent({ essential: true, analytics: true, marketing: true });
    });

    // Reject All (except essential)
    document.getElementById('cookies-reject-all').addEventListener('click', () => {
      saveConsent({ essential: true, analytics: false, marketing: false });
    });

    // Open Modal from Banner
    document.getElementById('cookies-manage').addEventListener('click', () => {
      openModal();
    });

    // Close Modal
    document.getElementById('cookie-modal-close').addEventListener('click', () => {
      closeModal();
    });

    // Save Preferences
    document.getElementById('cookie-modal-save').addEventListener('click', () => {
      const analytics = document.getElementById('cookie-opt-analytics').checked;
      const marketing = document.getElementById('cookie-opt-marketing').checked;
      saveConsent({ essential: true, analytics, marketing });
    });

    // Clicking overlay closes modal
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // Globally hook "Manage Cookies" links in footer
    document.addEventListener('click', (e) => {
      const target = e.target.closest('#open-cookie-settings, .open-cookie-settings');
      if (target) {
        e.preventDefault();
        openModal();
      }
    });
  }

  // Saved consent, or null when missing, unreadable (storage blocked) or corrupted.
  function readConsent() {
    try {
      const raw = localStorage.getItem('alimun-cookie-consent');
      if (!raw) return null;
      const prefs = JSON.parse(raw);
      return prefs && typeof prefs === 'object' ? prefs : null;
    } catch (e) {
      return null;
    }
  }

  function checkConsent() {
    const consent = readConsent();
    if (!consent) {
      // Show banner with delay for animations
      setTimeout(() => {
        const banner = document.getElementById('alimun-cookie-banner');
        if (banner) banner.classList.add('show');
      }, 1000);
    } else {
      // Apply preferences immediately (e.g. disable analytics scripts if consent rejected)
      applyConsent(consent);
    }
  }

  function openModal() {
    // Pre-populate checkboxes from saved consent
    const prefs = readConsent();
    if (prefs) {
      document.getElementById('cookie-opt-analytics').checked = !!prefs.analytics;
      document.getElementById('cookie-opt-marketing').checked = !!prefs.marketing;
    } else {
      document.getElementById('cookie-opt-analytics').checked = false;
      document.getElementById('cookie-opt-marketing').checked = false;
    }

    // Show overlay
    const overlay = document.getElementById('cookie-modal-overlay');
    if (overlay) overlay.classList.add('show');

    // Hide banner temporarily if open
    const banner = document.getElementById('alimun-cookie-banner');
    if (banner) banner.classList.remove('show');
  }

  function closeModal() {
    const overlay = document.getElementById('cookie-modal-overlay');
    if (overlay) overlay.classList.remove('show');

    // Bring back banner if consent not yet submitted
    const consent = readConsent();
    if (!consent) {
      const banner = document.getElementById('alimun-cookie-banner');
      if (banner) banner.classList.add('show');
    }
  }

  function saveConsent(prefs) {
    try { localStorage.setItem('alimun-cookie-consent', JSON.stringify(prefs)); } catch (e) { /* storage blocked */ }
    applyConsent(prefs);
    
    // Hide all popups
    const banner = document.getElementById('alimun-cookie-banner');
    if (banner) banner.classList.remove('show');
    closeModal();
  }

  function applyConsent(prefs) {
    // A Global Privacy Control signal always counts as a refusal of marketing cookies (Cookie Policy).
    if (navigator.globalPrivacyControl) prefs = Object.assign({}, prefs, { marketing: false });
    console.log('[Alimun Cookie Consent Applied]:', prefs);
    window.ALIMUN_CONSENT = prefs;
    
    // Dispatch event for other scripts to listen to
    const event = new CustomEvent('alimun-consent-updated', { detail: prefs });
    window.dispatchEvent(event);
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
