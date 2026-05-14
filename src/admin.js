import './admin.css';

const API = '';

// ===========================
// State
// ===========================
let isLoggedIn = false;
let brands = [];
let works = [];
let activeTab = 'brands';

// ===========================
// API helpers
// ===========================
async function api(path, opts = {}) {
  const res = await fetch(`${API}${path}`, {
    headers: { 'Content-Type': 'application/json', ...opts.headers },
    credentials: 'include',
    ...opts,
  });
  if (res.status === 401) { isLoggedIn = false; render(); return null; }
  return res.json();
}

async function checkAuth() {
  try {
    const data = await api('/api/me');
    isLoggedIn = !!data?.user;
  } catch { isLoggedIn = false; }
}

async function loadData() {
  brands = (await api('/api/brands')) || [];
  works = (await api('/api/works')) || [];
}

// ===========================
// Login
// ===========================
function renderLogin() {
  return `
    <div class="admin-login-wrap">
      <div class="admin-login-card">
        <img src="/logo/logo.png" class="admin-login-logo" alt="Skypark" />
        <h1 class="admin-login-title">Admin Panel</h1>
        <p class="admin-login-sub">Login to manage your website</p>
        <form id="loginForm" class="admin-login-form">
          <div class="admin-field">
            <label>Username</label>
            <input type="text" id="loginUser" required autocomplete="username" />
          </div>
          <div class="admin-field">
            <label>Password</label>
            <input type="password" id="loginPass" required autocomplete="current-password" />
          </div>
          <p id="loginError" class="admin-error" style="display:none"></p>
          <button type="submit" class="admin-btn admin-btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  `;
}

async function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('loginUser').value;
  const password = document.getElementById('loginPass').value;
  const errorEl = document.getElementById('loginError');
  try {
    const data = await fetch(`${API}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username, password }),
    }).then((r) => r.json());
    if (data.success) { isLoggedIn = true; await loadData(); render(); }
    else { errorEl.textContent = data.error || 'Login failed'; errorEl.style.display = 'block'; }
  } catch { errorEl.textContent = 'Server error'; errorEl.style.display = 'block'; }
}

// ===========================
// Dashboard
// ===========================
function renderDashboard() {
  return `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <div class="admin-sidebar-logo">
          <img src="/logo/logo.png" alt="Skypark" />
          <span>Skypark</span>
        </div>
        <nav class="admin-nav">
          <button class="admin-nav-item ${activeTab === 'brands' ? 'active' : ''}" data-tab="brands">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
            Brand Logos
          </button>
          <button class="admin-nav-item ${activeTab === 'works' ? 'active' : ''}" data-tab="works">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            Selected Work
          </button>
        </nav>
        <button id="logoutBtn" class="admin-nav-item admin-logout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          Logout
        </button>
      </aside>
      <main class="admin-main">
        ${activeTab === 'brands' ? renderBrandsPanel() : renderWorksPanel()}
      </main>
    </div>
  `;
}

// ===========================
// Brands Panel
// ===========================
function renderBrandsPanel() {
  return `
    <div class="admin-panel">
      <div class="admin-panel-header">
        <div>
          <h2 class="admin-panel-title">Brand Logos</h2>
          <p class="admin-panel-sub">${brands.length} brands managed</p>
        </div>
        <button id="addBrandBtn" class="admin-btn admin-btn-primary">+ Add Brand</button>
      </div>

      <div id="brandUploadForm" class="admin-upload-form" style="display:none">
        <form id="brandForm" enctype="multipart/form-data">
          <div class="admin-form-row">
            <div class="admin-field">
              <label>Brand Name</label>
              <input type="text" id="brandName" placeholder="e.g. Bank BCA" required />
            </div>
            <div class="admin-field">
              <label>Logo File (PNG)</label>
              <input type="file" id="brandFile" accept="image/*" required />
            </div>
          </div>
          <div class="admin-form-actions">
            <button type="submit" class="admin-btn admin-btn-primary">Upload</button>
            <button type="button" id="cancelBrand" class="admin-btn admin-btn-ghost">Cancel</button>
          </div>
        </form>
      </div>

      <div class="admin-brand-grid">
        ${brands.map((b) => `
          <div class="admin-brand-card" data-id="${b.id}">
            <div class="admin-brand-img">
              <img src="/logobrand_consult/${b.file}" alt="${b.name}" />
            </div>
            <div class="admin-brand-info">
              <span class="admin-brand-name">${b.name}</span>
              <button class="admin-btn-icon admin-btn-delete" data-delete-brand="${b.id}" title="Delete">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===========================
// Works Panel
// ===========================
function renderWorksPanel() {
  return `
    <div class="admin-panel">
      <div class="admin-panel-header">
        <div>
          <h2 class="admin-panel-title">Selected Work</h2>
          <p class="admin-panel-sub">${works.length} case studies</p>
        </div>
        <button id="addWorkBtn" class="admin-btn admin-btn-primary">+ Add Work</button>
      </div>

      <div id="workFormWrap" class="admin-upload-form" style="display:none">
        <form id="workForm">
          <input type="hidden" id="workEditId" value="" />
          <div class="admin-form-row">
            <div class="admin-field">
              <label>Client Name</label>
              <input type="text" id="workName" placeholder="e.g. Cik Swi" required />
            </div>
            <div class="admin-field">
              <label>Location</label>
              <input type="text" id="workLocation" placeholder="e.g. Denpasar" required />
            </div>
          </div>
          <div class="admin-field">
            <label>Context</label>
            <textarea id="workContext" rows="2" placeholder="Brief background about the client..." required></textarea>
          </div>
          <div class="admin-field">
            <label>What We Worked On</label>
            <textarea id="workWorkedOn" rows="2" placeholder="What services/deliverables..." required></textarea>
          </div>
          <div class="admin-field">
            <label>Direction</label>
            <textarea id="workDirection" rows="2" placeholder="The goal or outcome..." required></textarea>
          </div>
          <div class="admin-field">
            <label>Link (optional)</label>
            <input type="url" id="workLink" placeholder="https://..." />
          </div>
          <div class="admin-form-actions">
            <button type="submit" class="admin-btn admin-btn-primary" id="workSubmitBtn">Add Work</button>
            <button type="button" id="cancelWork" class="admin-btn admin-btn-ghost">Cancel</button>
          </div>
        </form>
      </div>

      <div class="admin-works-list">
        ${works.map((w) => `
          <div class="admin-work-card" data-id="${w.id}">
            <div class="admin-work-header">
              <span class="admin-work-num">${w.num}</span>
              <div class="admin-work-meta">
                <h3 class="admin-work-name">${w.name}</h3>
                <span class="admin-work-loc">${w.location}</span>
              </div>
              <div class="admin-work-actions">
                <button class="admin-btn-icon" data-edit-work="${w.id}" title="Edit">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </button>
                <button class="admin-btn-icon admin-btn-delete" data-delete-work="${w.id}" title="Delete">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>
                </button>
              </div>
            </div>
            <div class="admin-work-body">
              <p><strong>Context:</strong> ${w.context}</p>
              <p><strong>Worked On:</strong> ${w.workedOn}</p>
              <p><strong>Direction:</strong> ${w.direction}</p>
              ${w.link ? `<p><strong>Link:</strong> <a href="${w.link}" target="_blank">${w.link}</a></p>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ===========================
// Render + Event Binding
// ===========================
function render() {
  const el = document.getElementById('admin-app');
  el.innerHTML = isLoggedIn ? renderDashboard() : renderLogin();
  bindEvents();
}

function bindEvents() {
  // Login
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);

  // Logout
  document.getElementById('logoutBtn')?.addEventListener('click', async () => {
    await api('/api/logout', { method: 'POST' });
    isLoggedIn = false;
    render();
  });

  // Tab switching
  document.querySelectorAll('.admin-nav-item[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => { activeTab = btn.dataset.tab; render(); });
  });

  // --- Brands ---
  document.getElementById('addBrandBtn')?.addEventListener('click', () => {
    document.getElementById('brandUploadForm').style.display = 'block';
  });
  document.getElementById('cancelBrand')?.addEventListener('click', () => {
    document.getElementById('brandUploadForm').style.display = 'none';
  });
  document.getElementById('brandForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append('name', document.getElementById('brandName').value);
    fd.append('logo', document.getElementById('brandFile').files[0]);
    await fetch(`${API}/api/brands`, { method: 'POST', credentials: 'include', body: fd });
    await loadData();
    render();
  });
  document.querySelectorAll('[data-delete-brand]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      if (!confirm('Delete this brand logo?')) return;
      await api(`/api/brands/${btn.dataset.deleteBrand}`, { method: 'DELETE' });
      await loadData();
      render();
    });
  });

  // --- Works ---
  document.getElementById('addWorkBtn')?.addEventListener('click', () => {
    document.getElementById('workFormWrap').style.display = 'block';
    document.getElementById('workEditId').value = '';
    document.getElementById('workSubmitBtn').textContent = 'Add Work';
    document.getElementById('workForm').reset();
  });
  document.getElementById('cancelWork')?.addEventListener('click', () => {
    document.getElementById('workFormWrap').style.display = 'none';
  });
  document.getElementById('workForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const editId = document.getElementById('workEditId').value;
    const body = {
      name: document.getElementById('workName').value,
      location: document.getElementById('workLocation').value,
      context: document.getElementById('workContext').value,
      workedOn: document.getElementById('workWorkedOn').value,
      direction: document.getElementById('workDirection').value,
      link: document.getElementById('workLink').value,
    };
    if (editId) {
      await api(`/api/works/${editId}`, { method: 'PUT', body: JSON.stringify(body) });
    } else {
      await api('/api/works', { method: 'POST', body: JSON.stringify(body) });
    }
    await loadData();
    render();
  });
  document.querySelectorAll('[data-edit-work]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const w = works.find((x) => x.id === Number(btn.dataset.editWork));
      if (!w) return;
      document.getElementById('workFormWrap').style.display = 'block';
      document.getElementById('workEditId').value = w.id;
      document.getElementById('workName').value = w.name;
      document.getElementById('workLocation').value = w.location;
      document.getElementById('workContext').value = w.context;
      document.getElementById('workWorkedOn').value = w.workedOn;
      document.getElementById('workDirection').value = w.direction;
      document.getElementById('workLink').value = w.link || '';
      document.getElementById('workSubmitBtn').textContent = 'Update Work';
    });
  });
  document.querySelectorAll('[data-delete-work]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      if (!confirm('Delete this work entry?')) return;
      await api(`/api/works/${btn.dataset.deleteWork}`, { method: 'DELETE' });
      await loadData();
      render();
    });
  });
}

// ===========================
// Init
// ===========================
(async () => {
  await checkAuth();
  if (isLoggedIn) await loadData();
  render();
})();
