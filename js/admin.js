import { loadDB, DB } from './data/database.js';

const ADMIN_STATE = {
  repo: localStorage.getItem('gh_repo') || '',
  token: localStorage.getItem('gh_token') || '',
  sha: null,
  isEditing: false
};

const UI = {
  renderLogin: () => `
    <div class="admin-card auth-card">
      <div class="admin-header">
        <svg class="gh-icon" viewBox="0 0 16 16" width="32" height="32" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        <h3>Авторизация GitHub</h3>
      </div>
      <div class="admin-body">
        <div class="form-group">
          <label>Репозиторий (формат: owner/repo)</label>
          <input type="text" id="gh_repo" class="admin-input" placeholder="например: username/led-wiki" value="${ADMIN_STATE.repo}">
        </div>
        <div class="form-group">
          <label>Personal Access Token</label>
          <input type="password" id="gh_token" class="admin-input" placeholder="ghp_xxxxxxxxxxxxxxxxxxxx" value="${ADMIN_STATE.token}">
        </div>
        <div class="admin-hint">Токен сохраняется только в вашем браузере (localStorage). У токена должны быть права "repo" (или "Contents: write" для fine-grained).</div>
        <button id="btn_login" class="admin-btn primary">Подключиться</button>
      </div>
    </div>
  `,
  
  renderEditor: (jsonStr) => `
    <div class="admin-layout">
      <div class="admin-sidebar">
        <div class="admin-card">
          <h4>Настройки подключения</h4>
          <div class="connected-info">
            <span class="status-dot green"></span>
            <b>${ADMIN_STATE.repo}</b>
          </div>
          <button id="btn_logout" class="admin-btn outline small" style="margin-top: 12px; width: 100%;">Выйти</button>
        </div>
        <div class="admin-card" style="margin-top: 16px;">
          <h4>Действия</h4>
          <button id="btn_format" class="admin-btn outline small" style="margin-bottom: 8px; width: 100%;">Форматировать JSON</button>
          <button id="btn_save" class="admin-btn primary" style="width: 100%;">Отправить Push (Save)</button>
          <div id="save_status" class="save-status"></div>
        </div>
      </div>
      <div class="admin-main">
        <div class="admin-card editor-card">
          <div class="editor-header">
            <h3>Редактор database.json</h3>
            <span id="json_validator" class="validator-badge valid">JSON Valid</span>
          </div>
          <textarea id="json_editor" class="admin-textarea" spellcheck="false">${jsonStr}</textarea>
        </div>
      </div>
    </div>
  `
};

function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode('0x' + p1);
  }));
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

async function fetchFromGitHub() {
  if (!ADMIN_STATE.repo || !ADMIN_STATE.token) return;
  
  try {
    const res = await fetch(`https://api.github.com/repos/${ADMIN_STATE.repo}/contents/database.json`, {
      headers: {
        'Authorization': `token ${ADMIN_STATE.token}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (res.status === 404) {
      throw new Error('Файл database.json не найден в репозитории.');
    }
    if (res.status === 401) {
      throw new Error('Неверный токен или нет доступа.');
    }
    if (!res.ok) {
      throw new Error(`Ошибка API: ${res.statusText}`);
    }
    
    const data = await res.json();
    ADMIN_STATE.sha = data.sha;
    
    const content = b64DecodeUnicode(data.content);
    return content;
  } catch (e) {
    alert('Ошибка подключения: ' + e.message);
    return null;
  }
}

async function pushToGitHub(newContent) {
  const btnSave = document.getElementById('btn_save');
  const status = document.getElementById('save_status');
  btnSave.disabled = true;
  btnSave.textContent = 'Отправка...';
  status.textContent = '';
  status.className = 'save-status';

  try {
    const res = await fetch(`https://api.github.com/repos/${ADMIN_STATE.repo}/contents/database.json`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${ADMIN_STATE.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Update database.json via CMS',
        content: b64EncodeUnicode(newContent),
        sha: ADMIN_STATE.sha
      })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || 'Ошибка сохранения');
    }

    const data = await res.json();
    ADMIN_STATE.sha = data.content.sha; // Update SHA for subsequent edits
    
    status.textContent = 'Успешно сохранено и запушено!';
    status.classList.add('success');
    
    // Refresh local app state
    await loadDB();
    if (window.updateCalc) window.updateCalc();
    
  } catch (e) {
    status.textContent = 'Ошибка: ' + e.message;
    status.classList.add('error');
  } finally {
    btnSave.disabled = false;
    btnSave.textContent = 'Отправить Push (Save)';
  }
}

function bindLoginEvents() {
  document.getElementById('btn_login').addEventListener('click', async () => {
    const r = document.getElementById('gh_repo').value.trim();
    const t = document.getElementById('gh_token').value.trim();
    if (!r || !t) return alert('Заполните оба поля');
    
    ADMIN_STATE.repo = r;
    ADMIN_STATE.token = t;
    
    const btn = document.getElementById('btn_login');
    btn.textContent = 'Проверка...';
    btn.disabled = true;
    
    const content = await fetchFromGitHub();
    if (content !== null) {
      localStorage.setItem('gh_repo', r);
      localStorage.setItem('gh_token', t);
      ADMIN_STATE.isEditing = true;
      render(content);
    } else {
      btn.textContent = 'Подключиться';
      btn.disabled = false;
    }
  });
}

function bindEditorEvents() {
  const textarea = document.getElementById('json_editor');
  const validator = document.getElementById('json_validator');
  const btnFormat = document.getElementById('btn_format');
  const btnSave = document.getElementById('btn_save');
  const btnLogout = document.getElementById('btn_logout');

  const checkJSON = () => {
    try {
      JSON.parse(textarea.value);
      validator.textContent = 'JSON Valid';
      validator.className = 'validator-badge valid';
      btnSave.disabled = false;
      return true;
    } catch (e) {
      validator.textContent = 'Invalid JSON!';
      validator.className = 'validator-badge invalid';
      btnSave.disabled = true;
      return false;
    }
  };

  textarea.addEventListener('input', checkJSON);

  btnFormat.addEventListener('click', () => {
    if (checkJSON()) {
      textarea.value = JSON.stringify(JSON.parse(textarea.value), null, 2);
    }
  });

  btnSave.addEventListener('click', () => {
    if (checkJSON()) {
      pushToGitHub(textarea.value);
    }
  });
  
  btnLogout.addEventListener('click', () => {
    ADMIN_STATE.isEditing = false;
    render();
  });
}

function render(editorContent = null) {
  const container = document.getElementById('admin-app');
  if (!container) return;

  if (ADMIN_STATE.isEditing && editorContent !== null) {
    container.innerHTML = UI.renderEditor(editorContent);
    bindEditorEvents();
  } else {
    container.innerHTML = UI.renderLogin();
    bindLoginEvents();
  }
}

// Global initialization logic for admin
export function initAdmin() {
  // Add CSS dynamically for admin UI to keep separation of concerns
  if (!document.getElementById('admin-styles')) {
    const style = document.createElement('style');
    style.id = 'admin-styles';
    style.textContent = `
      #admin-app { margin-top: 24px; font-family: 'Inter', sans-serif; }
      .admin-card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 24px; box-shadow: var(--shadow); }
      .auth-card { max-width: 480px; margin: 0 auto; }
      .admin-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
      .admin-header h3 { margin: 0; font-size: 20px; color: var(--text); font-weight: 600; }
      .gh-icon { color: var(--text); }
      .form-group { margin-bottom: 16px; }
      .form-group label { display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: var(--text2); }
      .admin-input { width: 100%; padding: 10px 12px; border: 1px solid var(--border); border-radius: 6px; font-size: 15px; background: var(--bg2); color: var(--text); outline: none; transition: 0.2s; }
      .admin-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15); }
      .admin-hint { font-size: 12px; color: var(--text3); margin-bottom: 24px; line-height: 1.5; }
      .admin-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 20px; border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; transition: 0.2s; }
      .admin-btn.primary { background: var(--accent); color: #fff; width: 100%; }
      .admin-btn.primary:hover { background: #0284c7; }
      .admin-btn.primary:disabled { background: #94a3b8; cursor: not-allowed; }
      .admin-btn.outline { background: transparent; border: 1px solid var(--border); color: var(--text2); }
      .admin-btn.outline:hover { background: var(--bg2); color: var(--text); }
      .admin-btn.small { padding: 6px 12px; font-size: 13px; }
      
      .admin-layout { display: grid; grid-template-columns: 280px 1fr; gap: 24px; align-items: start; }
      @media (max-width: 768px) { .admin-layout { grid-template-columns: 1fr; } }
      .connected-info { display: flex; align-items: center; gap: 8px; font-size: 14px; padding: 12px; background: var(--bg2); border-radius: 6px; margin-top: 12px; word-break: break-all; }
      .status-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
      .status-dot.green { background: #10b981; box-shadow: 0 0 8px rgba(16, 185, 129, 0.4); }
      
      .editor-card { display: flex; flex-direction: column; height: 70vh; min-height: 500px; padding: 0; overflow: hidden; }
      .editor-header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; border-bottom: 1px solid var(--border); background: var(--bg); }
      .editor-header h3 { margin: 0; font-size: 16px; }
      .validator-badge { font-size: 12px; font-weight: 600; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; }
      .validator-badge.valid { background: rgba(16, 185, 129, 0.1); color: #10b981; }
      .validator-badge.invalid { background: rgba(239, 68, 68, 0.1); color: #ef4444; }
      .admin-textarea { flex: 1; width: 100%; border: none; resize: none; padding: 24px; font-family: 'JetBrains Mono', monospace; font-size: 14px; line-height: 1.6; background: var(--card); color: var(--text); outline: none; }
      .admin-textarea:focus { box-shadow: inset 0 0 0 2px var(--accent); }
      
      .save-status { margin-top: 12px; font-size: 13px; font-weight: 500; text-align: center; }
      .save-status.success { color: #10b981; }
      .save-status.error { color: #ef4444; }
    `;
    document.head.appendChild(style);
  }

  // Hook into the tab button to load data only when opened
  document.querySelector('.tab-btn[data-tab="admin"]').addEventListener('click', () => {
    // If we have token, we can try to auto-login, or just show the login screen
    if (ADMIN_STATE.repo && ADMIN_STATE.token && !ADMIN_STATE.isEditing) {
      document.getElementById('btn_login')?.click(); 
    }
  });

  render();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdmin);
} else {
  initAdmin();
}
