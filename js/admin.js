import { loadDB, DB } from './data/database.js';

let localDB = null;
let currentAdminTab = 'matrices';
let githubToken = '';
let fileSha = '';
let editState = {
  type: null, // 'matrices' | 'controllers'
  index: -1,  // -1 for new
  data: null  // temporary form state
};

// UI Components
const UI = {
  layout: () => `
    <div class="admin-layout">
      <div class="admin-sidebar">
        <div class="admin-card">
          <h4>Разделы</h4>
          <div class="admin-menu">
            <button class="menu-btn ${currentAdminTab === 'matrices' ? 'active' : ''}" data-atab="matrices">📟 LED Модули</button>
            <button class="menu-btn ${currentAdminTab === 'controllers' ? 'active' : ''}" data-atab="controllers">🎛️ Медиаплееры</button>
            <button class="menu-btn ${currentAdminTab === 'powerSupplies' ? 'active' : ''}" data-atab="powerSupplies">🔌 Блоки питания</button>
            <button class="menu-btn ${currentAdminTab === 'receivingCards' ? 'active' : ''}" data-atab="receivingCards">💳 Принимающие карты</button>
          </div>
        </div>
        <div class="admin-card" style="margin-top: 16px;">
          <h4>Действия</h4>
          <button id="btn_push_github" class="admin-btn primary" style="width: 100%;">🚀 Опубликовать в GitHub</button>
          <div class="admin-hint" style="margin-top: 12px; text-align: center; font-size: 13px; color: var(--text3);">Изменения сразу применятся на сайте</div>
        </div>
      </div>
      <div class="admin-main" id="admin-workspace">
        <!-- Dynamic content -->
      </div>
    </div>
  `,


  listView: (type, title, itemNameFunc) => {
    const list = localDB[type] || [];
    let html = `
      <div class="admin-card">
        <div class="editor-header" style="padding: 0 0 16px 0; margin-bottom: 16px;">
          <h3>${title}</h3>
          <button class="admin-btn primary small" id="btn_add_new">➕ Добавить</button>
        </div>
        <div class="admin-list">
    `;

    list.forEach((item, index) => {
      html += `
        <div class="admin-list-item" data-index="${index}">
          <div class="item-name">${itemNameFunc(item)}</div>
          <button class="admin-btn outline small btn-delete" data-index="${index}" title="Удалить">🗑️</button>
        </div>
      `;
    });

    html += `</div></div>`;
    return html;
  },

  editorView: (type) => {
    const isNew = editState.index === -1;
    const title = isNew ? 'Добавление новой записи' : 'Редактирование записи';
    let html = `
      <div class="admin-card">
        <div class="editor-header" style="padding: 0 0 16px 0; margin-bottom: 16px;">
          <h3>${title}</h3>
          <div>
            <button class="admin-btn outline small" id="btn_cancel_edit" style="margin-right: 8px;">Отмена</button>
            <button class="admin-btn primary small" id="btn_save_edit">💾 Сохранить</button>
          </div>
        </div>
        <div class="form-grid">
    `;

    if (type === 'matrices') {
      html += `
        ${inputGroupEdit('ID (англ, без пробелов)', 'id')}
        ${inputGroupEdit('Производитель', 'manufacturer')}
        ${inputGroupEdit('Модель', 'model')}
        ${inputGroupEdit('Технология', 'technology')}
        ${inputGroupEdit('Использование (indoor/outdoor)', 'location')}
        
        <div class="form-divider">Характеристики</div>
        ${inputGroupEdit('Шаг пикселя (мм)', 'pitch', 'number')}
        ${inputGroupEdit('Яркость (nits)', 'brightness', 'number')}
        ${inputGroupEdit('Защита (IP)', 'ip')}
        ${inputGroupEdit('Цена (USD)', 'priceUSD', 'number')}
        
        <div class="form-divider">Размеры</div>
        ${inputGroupEdit('Ширина модуля (мм)', 'moduleW', 'number')}
        ${inputGroupEdit('Высота модуля (мм)', 'moduleH', 'number')}
        ${inputGroupEdit('Ширина кабинета (мм)', 'cabinetW', 'number')}
        ${inputGroupEdit('Высота кабинета (мм)', 'cabinetH', 'number')}
        
        <div class="form-divider">Электрика и Сигнал</div>
        ${inputGroupEdit('Напряжение (В)', 'voltage', 'number')}
        ${inputGroupEdit('Макс. Мощность модуля (Вт)', 'maxPowerPerModule', 'number')}
        ${inputGroupEdit('Частота (Refresh Hz)', 'refreshHz', 'number')}
        ${inputGroupEdit('Проводник (Au/Cu)', 'wire')}
        
        <div class="form-divider">Описание</div>
        ${inputGroupEdit('Описание (RU)', 'notes_ru')}
        ${inputGroupEdit('Описание (UK)', 'notes_uk')}
      `;
    } else if (type === 'controllers') {
      html += `
        ${inputGroupEdit('ID', 'id')}
        ${inputGroupEdit('Производитель', 'manufacturer')}
        ${inputGroupEdit('Модель', 'model')}
        ${inputGroupEdit('Тип', 'type')}
        ${inputGroupEdit('Сегмент', 'segment')}
        
        <div class="form-divider">Характеристики</div>
        ${inputGroupEdit('Макс. пикселей', 'maxPixels', 'number')}
        ${inputGroupEdit('Цена (USD)', 'priceUSD', 'number')}
        ${inputGroupEdit('LAN Портов', 'ethernetPorts', 'number')}
        ${inputGroupEdit('Refresh Hz', 'refreshHz', 'number')}
        ${checkboxGroupEdit('Поддержка Облака', 'cloud')}
        ${inputGroupEdit('Платформа', 'cloudPlatform')}
        
        <div class="form-divider">Описание и выгоды</div>
        ${inputGroupEdit('Выгода (RU)', 'bestUse_ru')}
        ${inputGroupEdit('Выгода (UK)', 'bestUse_uk')}
        ${inputGroupEdit('Описание (RU)', 'notes_ru')}
        ${inputGroupEdit('Описание (UK)', 'notes_uk')}
      `;
    } else if (type === 'powerSupplies') {
      html += `
        ${inputGroupEdit('ID (англ, без пробелов)', 'id')}
        ${inputGroupEdit('Модель', 'model')}
        
        <div class="form-divider">Характеристики</div>
        ${inputGroupEdit('Мощность (Вт)', 'watts', 'number')}
        ${inputGroupEdit('Напряжение (В)', 'voltage', 'number')}
        ${inputGroupEdit('Запас мощности (например 0.8)', 'usageFactor', 'number', 0.1)}
        ${inputGroupEdit('Цена (USD)', 'priceUSD', 'number')}
        
        <div class="form-divider">Описание</div>
        ${inputGroupEdit('Описание (RU)', 'notes_ru')}
        ${inputGroupEdit('Описание (UK)', 'notes_uk')}
      `;
    } else if (type === 'receivingCards') {
      html += `
        ${inputGroupEdit('ID (англ, без пробелов)', 'id')}
        ${inputGroupEdit('Модель', 'model')}
        ${inputGroupEdit('Цена (USD)', 'priceUSD', 'number')}
        
        <div class="form-divider">Характеристики портов</div>
        ${inputGroupEdit('Количество портов (HUB75)', 'hubPorts', 'number')}
        ${inputGroupEdit('Макс. ширина (пикселей)', 'maxPxW', 'number')}
        ${inputGroupEdit('Макс. высота (пикселей)', 'maxPxH', 'number')}
        
        <div class="form-divider">Описание</div>
        ${inputGroupEdit('Описание (RU)', 'notes_ru')}
        ${inputGroupEdit('Описание (UK)', 'notes_uk')}
      `;
    }

    html += `</div></div>`;
    return html;
  }
};

// Helpers for generic config/prices bind
function getValueByPath(obj, path) {
  return path.split('.').reduce((o, i) => o?.[i], obj);
}

function setValueByPath(obj, path, value) {
  const parts = path.split('.');
  const last = parts.pop();
  const target = parts.reduce((o, i) => o[i], obj);
  target[last] = value;
}

function inputGroup(label, path, type = 'text', step = 1) {
  const val = getValueByPath(localDB, path);
  const stepAttr = type === 'number' ? `step="${step}"` : '';
  return `
    <div class="form-group">
      <label>${label}</label>
      <input type="${type}" class="admin-input dyn-input" data-path="${path}" value="${val}" ${stepAttr}>
    </div>
  `;
}

// Helpers for specific edit mode
function inputGroupEdit(label, key, type = 'text', step = 'any') {
  const val = editState.data[key] !== undefined ? editState.data[key] : '';
  const stepAttr = type === 'number' ? `step="${step}"` : '';
  return `
    <div class="form-group">
      <label>${label}</label>
      <input type="${type}" class="admin-input edit-input" data-key="${key}" value="${val}" ${stepAttr}>
    </div>
  `;
}

function checkboxGroupEdit(label, key) {
  const checked = editState.data[key] ? 'checked' : '';
  return `
    <div class="form-group" style="display:flex; align-items:center; height:100%; margin-top:24px;">
      <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
        <input type="checkbox" class="edit-input-cb" data-key="${key}" ${checked} style="width:18px;height:18px;">
        ${label}
      </label>
    </div>
  `;
}


function renderWorkspace() {
  const ws = document.getElementById('admin-workspace');
  if (!ws) return;

  if (editState.type) {
    ws.innerHTML = UI.editorView(editState.type);
    bindEditorEvents();
    return;
  }

  if (currentAdminTab === 'matrices') {
    ws.innerHTML = UI.listView('matrices', 'Справочник LED Модулей', m => `<b>${m.model}</b> <span style="color:var(--text3)">(${m.pitch}мм, ${m.location})</span> <span style="color:#10b981; font-weight:600; margin-left:12px;">$${m.priceUSD || 0}</span>`);
    bindListEvents('matrices', () => ({
      id: 'new_mod', manufacturer: 'Generic', model: 'New Model', technology: 'SMD', location: 'indoor',
      pitch: 2.5, brightness: 1000, ip: 'IP30', priceUSD: 0, moduleW: 320, moduleH: 160, cabinetW: 640, cabinetH: 640,
      voltage: 5, maxPowerPerModule: 20, refreshHz: 1920, wire: 'Cu', notes_ru: '', notes_uk: ''
    }));
  } else if (currentAdminTab === 'controllers') {
    ws.innerHTML = UI.listView('controllers', 'Справочник Контроллеров', c => `<b>${c.manufacturer} ${c.model}</b> <span style="color:var(--text3)">(${c.type})</span> <span style="color:#10b981; font-weight:600; margin-left:12px;">$${c.priceUSD || 0}</span>`);
    bindListEvents('controllers', () => ({
      id: 'new_ctrl', manufacturer: 'Novastar', model: 'New Controller', type: 'Sending Card', segment: 'Standard',
      maxPixels: 1300000, priceUSD: 0, ethernetPorts: 2, refreshHz: 1920, cloud: false, cloudPlatform: '',
      bestUse_ru: '', bestUse_uk: '', notes_ru: '', notes_uk: ''
    }));
  } else if (currentAdminTab === 'powerSupplies') {
    ws.innerHTML = UI.listView('powerSupplies', 'Справочник Блоков Питания', p => `<b>${p.model}</b> <span style="color:var(--text3)">(${p.watts}W)</span> <span style="color:#10b981; font-weight:600; margin-left:12px;">$${p.priceUSD || 0}</span>`);
    bindListEvents('powerSupplies', () => ({
      id: 'new_psu', model: 'Новый Блок Питания', watts: 300, voltage: 5, usageFactor: 0.8, priceUSD: 0,
      notes_ru: '', notes_uk: ''
    }));
  } else if (currentAdminTab === 'receivingCards') {
    ws.innerHTML = UI.listView('receivingCards', 'Справочник Принимающих Карт', r => `<b>${r.model}</b> <span style="color:var(--text3)">(${r.hubPorts} ports)</span> <span style="color:#10b981; font-weight:600; margin-left:12px;">$${r.priceUSD || 0}</span>`);
    bindListEvents('receivingCards', () => ({
      id: 'new_rcard', model: 'Новая Принимающая Карта', priceUSD: 15,
      hubPorts: 16, maxPxW: 256, maxPxH: 256,
      notes_ru: '', notes_uk: ''
    }));
  }
}

function bindSettingsEvents() {
  document.querySelectorAll('.dyn-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const path = e.target.dataset.path;
      let val = e.target.value;
      if (e.target.type === 'number') val = parseFloat(val) || 0;
      setValueByPath(localDB, path, val);
    });
  });
}

function bindListEvents(type, defaultItemFactory) {
  // Add new
  document.getElementById('btn_add_new').addEventListener('click', () => {
    editState = { type, index: -1, data: defaultItemFactory() };
    renderWorkspace();
  });

  // Edit existing
  document.querySelectorAll('.admin-list-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.btn-delete')) return; // ignore delete clicks
      const idx = parseInt(item.dataset.index);
      editState = { type, index: idx, data: JSON.parse(JSON.stringify(localDB[type][idx])) };
      renderWorkspace();
    });
  });
  //
  // Delete
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm('Точно удалить этот элемент?')) {
        const idx = parseInt(btn.dataset.index);
        localDB[type].splice(idx, 1);
        renderWorkspace();
      }
    });
  });
}

function bindEditorEvents() {
  // Cancel
  document.getElementById('btn_cancel_edit').addEventListener('click', () => {
    editState = { type: null, index: -1, data: null };
    renderWorkspace();
  });

  // Save
  document.getElementById('btn_save_edit').addEventListener('click', () => {
    // Collect data
    document.querySelectorAll('.edit-input').forEach(input => {
      const key = input.dataset.key;
      let val = input.value;
      if (input.type === 'number') val = parseFloat(val) || 0;
      editState.data[key] = val;
    });

    document.querySelectorAll('.edit-input-cb').forEach(cb => {
      editState.data[cb.dataset.key] = cb.checked;
    });

    if (editState.index === -1) {
      localDB[editState.type].push(editState.data);
    } else {
      localDB[editState.type][editState.index] = editState.data;
    }

    editState = { type: null, index: -1, data: null };
    renderWorkspace();
  });
}

function downloadJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(localDB, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", "database.json");
  dlAnchorElem.click();
}

function showAdminLogin(onSuccess) {
  // Remove existing overlay if any
  const existing = document.getElementById('admin-login-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'admin-login-overlay';
  overlay.innerHTML = `
    <div class="login-backdrop"></div>
    <div class="login-card" id="login-card">
      <div class="login-lock-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      </div>
      <h2 class="login-title">Панель управления</h2>
      <p class="login-subtitle">Введите ваш GitHub Token (Classic)</p>
      <div class="login-form">
        <div class="login-input-wrap">
          <svg class="login-input-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          <input
            type="password"
            id="login-password-input"
            class="login-input"
            placeholder="ghp_..."
            autocomplete="new-password"
          />
        </div>
        <div id="login-error" class="login-error hidden">Неверный токен. Попробуйте ещё раз.</div>
        <button id="login-submit-btn" class="login-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span>Войти</span>
        </button>
      </div>
      <div class="login-cancel-wrap">
        <button id="login-cancel-btn" class="login-cancel">← Вернуться назад</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Animate in
  requestAnimationFrame(() => overlay.classList.add('visible'));

  const input = document.getElementById('login-password-input');
  const submitBtn = document.getElementById('login-submit-btn');
  const cancelBtn = document.getElementById('login-cancel-btn');
  const errorEl = document.getElementById('login-error');
  const card = document.getElementById('login-card');

  // Focus input
  setTimeout(() => input.focus(), 300);

  async function doLogin() {
    const token = input.value.trim();
    if (!token) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Проверка...';
    errorEl.classList.add('hidden');

    try {
      const res = await fetch('https://api.github.com/repos/Vladkvarta/led-wiki/contents/database.json', {
        headers: { 'Authorization': `token ${token}` }
      });
      if (!res.ok) throw new Error('Неверный токен или нет прав доступа');

      const data = await res.json();
      githubToken = token;
      fileSha = data.sha;

      overlay.classList.remove('visible');
      overlay.classList.add('success');
      setTimeout(() => { overlay.remove(); onSuccess(); }, 400);
    } catch (e) {
      errorEl.textContent = e.message;
      errorEl.classList.remove('hidden');
      card.classList.add('shake');
      input.value = '';
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span>Войти</span>
      `;
      setTimeout(() => card.classList.remove('shake'), 600);
    }
  }

  submitBtn.addEventListener('click', doLogin);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') doLogin(); });
  cancelBtn.addEventListener('click', () => {
    overlay.classList.remove('visible');
    setTimeout(() => {
      overlay.remove();
      document.querySelector('.tab-btn[data-tab="calc"]').click();
    }, 300);
  });
}

function mountAdminPanel(container) {
  container.innerHTML = UI.layout();

  // Bind Menu
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentAdminTab = e.target.dataset.atab;
      editState = { type: null, index: -1, data: null };
      renderWorkspace();
    });
  });

  // Bind Publish
  const pushBtn = document.getElementById('btn_push_github');
  if (pushBtn) {
    pushBtn.addEventListener('click', async () => {
      pushBtn.disabled = true;
      pushBtn.innerHTML = '⏳ Публикация...';
      
      try {
        const contentStr = JSON.stringify(localDB, null, 2);
        // Encode utf-8 to base64 properly
        const encoded = btoa(unescape(encodeURIComponent(contentStr)));

        const res = await fetch('https://api.github.com/repos/Vladkvarta/led-wiki/contents/database.json', {
          method: 'PUT',
          headers: {
            'Authorization': `token ${githubToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Update database from CMS',
            content: encoded,
            sha: fileSha
          })
        });

        if (!res.ok) {
           const errData = await res.json();
           throw new Error(errData.message || 'Ошибка публикации');
        }
        const data = await res.json();
        fileSha = data.content.sha; // update SHA for future pushes

        pushBtn.innerHTML = '✅ Опубликовано';
        pushBtn.style.background = '#10b981';
        pushBtn.style.borderColor = '#10b981';
        setTimeout(() => {
          pushBtn.innerHTML = '🚀 Опубликовать в GitHub';
          pushBtn.style.background = '';
          pushBtn.style.borderColor = '';
          pushBtn.disabled = false;
        }, 3000);
      } catch (e) {
        console.error(e);
        pushBtn.innerHTML = '❌ Ошибка!';
        pushBtn.style.background = 'var(--danger)';
        pushBtn.style.borderColor = 'var(--danger)';
        alert('Ошибка при публикации: ' + e.message);
        setTimeout(() => {
          pushBtn.innerHTML = '🚀 Опубликовать в GitHub';
          pushBtn.style.background = '';
          pushBtn.style.borderColor = '';
          pushBtn.disabled = false;
        }, 4000);
      }
    });
  }
  renderWorkspace();
}

export async function initAdmin() {
  addAdminStyles();

  // Load fresh DB if not already loaded
  await loadDB();
  // Clone it so we don't mess up the live calculator until downloaded/reloaded
  localDB = JSON.parse(JSON.stringify(DB));

  document.querySelector('.tab-btn[data-tab="admin"]').addEventListener('click', () => {
    const container = document.getElementById('admin-app');
    if (!container.innerHTML.trim()) {
      showAdminLogin(() => mountAdminPanel(container));
    }
  });
}

function addAdminStyles() {
  if (document.getElementById('admin-styles')) return;
  const style = document.createElement('style');
  style.id = 'admin-styles';
  style.textContent = `
    #admin-app { margin-top: 24px; font-family: 'Inter', sans-serif; }
    .admin-card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 24px; box-shadow: var(--shadow); }
    
    .admin-layout { display: grid; grid-template-columns: 280px 1fr; gap: 24px; align-items: start; }
    @media (max-width: 768px) { .admin-layout { grid-template-columns: 1fr; } }
    
    .admin-menu { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
    .menu-btn { padding: 12px 16px; text-align: left; background: transparent; border: 1px solid transparent; border-radius: 8px; cursor: pointer; font-size: 15px; font-weight: 500; color: var(--text2); transition: 0.2s; }
    .menu-btn:hover { background: var(--bg2); }
    .menu-btn.active { background: #eff6ff; color: var(--accent); border-color: #bfdbfe; font-weight: 600; }

    .form-group { margin-bottom: 16px; }
    .form-group label { display: block; margin-bottom: 8px; font-size: 13px; font-weight: 600; color: var(--text2); }
    .admin-input { width: 100%; padding: 10px 12px; border: 1px solid var(--border); border-radius: 6px; font-size: 14px; background: var(--bg2); color: var(--text); outline: none; transition: 0.2s; }
    .admin-input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.15); background: #fff; }
    
    .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .form-divider { grid-column: 1 / -1; margin-top: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--border); font-weight: 700; color: var(--accent); font-size: 14px; text-transform: uppercase; }

    .admin-list { display: flex; flex-direction: column; gap: 8px; }
    .admin-list-item { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--bg2); border: 1px solid var(--border); border-radius: 8px; cursor: pointer; transition: 0.2s; }
    .admin-list-item:hover { border-color: var(--accent); box-shadow: 0 2px 8px rgba(0,0,0,0.05); background: #fff; }
    .item-name { font-size: 15px; color: var(--text); }
    
    .admin-btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; padding: 10px 20px; border-radius: 6px; font-size: 15px; font-weight: 600; cursor: pointer; border: none; transition: 0.2s; }
    .admin-btn.primary { background: var(--accent); color: #fff; }
    .admin-btn.primary:hover { background: #0284c7; }
    .admin-btn.outline { background: transparent; border: 1px solid var(--border); color: var(--text2); }
    .admin-btn.outline:hover { background: var(--bg2); color: var(--text); }
    .admin-btn.small { padding: 6px 12px; font-size: 13px; }
    
    .editor-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); }
    .editor-header h3 { margin: 0; font-size: 18px; color: var(--text); }

    /* ===== ADMIN LOGIN OVERLAY ===== */
    #admin-login-overlay {
      position: fixed; inset: 0; z-index: 9999;
      display: flex; align-items: center; justify-content: center;
      opacity: 0; transition: opacity 0.25s ease;
    }
    #admin-login-overlay.visible { opacity: 1; }
    #admin-login-overlay.success { opacity: 0; pointer-events: none; }

    .login-backdrop {
      position: absolute; inset: 0;
      background: rgba(26, 36, 56, 0.45);
      backdrop-filter: blur(6px);
      -webkit-backdrop-filter: blur(6px);
    }

    .login-card {
      position: relative; z-index: 1;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 40px 36px 32px;
      width: 100%; max-width: 400px;
      box-shadow: 0 8px 40px rgba(26,111,212,0.15), 0 2px 8px rgba(0,0,0,0.08);
      transform: translateY(16px) scale(0.98);
      transition: transform 0.3s cubic-bezier(0.34,1.4,0.64,1), opacity 0.25s ease;
      text-align: center;
    }
    #admin-login-overlay.visible .login-card {
      transform: translateY(0) scale(1);
    }

    @keyframes shake {
      0%,100% { transform: translateX(0); }
      15%      { transform: translateX(-8px); }
      30%      { transform: translateX(8px); }
      45%      { transform: translateX(-6px); }
      60%      { transform: translateX(6px); }
      80%      { transform: translateX(-3px); }
    }
    .login-card.shake { animation: shake 0.45s ease; }

    .login-lock-icon {
      width: 52px; height: 52px; border-radius: 50%;
      background: rgba(26,111,212,0.10);
      border: 1px solid rgba(26,111,212,0.2);
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 20px;
      font-size: 22px;
    }

    .login-title {
      font-size: 20px; font-weight: 700;
      color: var(--text); margin: 0 0 6px;
    }
    .login-subtitle {
      font-size: 13px; color: var(--text3); margin: 0 0 28px;
    }

    .login-form { display: flex; flex-direction: column; gap: 10px; }

    .login-input-wrap { position: relative; }
    .login-input-icon {
      position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
      color: var(--text3); pointer-events: none;
    }
    .login-input {
      width: 100%; box-sizing: border-box;
      padding: 10px 12px 10px 38px;
      background: var(--bg2); border: 1px solid var(--border);
      border-radius: 6px; font-size: 14px; color: var(--text);
      font-family: 'Inter', sans-serif; outline: none;
      transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    }
    .login-input:focus {
      border-color: var(--accent); background: #fff;
      box-shadow: 0 0 0 3px rgba(26,111,212,0.12);
    }

    .login-error {
      font-size: 13px; color: var(--danger);
      background: rgba(204,34,51,0.07);
      border: 1px solid rgba(204,34,51,0.2);
      border-radius: 6px; padding: 9px 12px; text-align: left;
    }
    .login-error.hidden { display: none; }

    .login-btn {
      display: flex; align-items: center; justify-content: center; gap: 8px;
      padding: 10px 20px; margin-top: 2px;
      background: linear-gradient(135deg, var(--accent), #3a90f0);
      border: none; border-radius: 6px;
      color: #fff; font-size: 14px; font-weight: 700;
      cursor: pointer; font-family: 'Inter', sans-serif;
      transition: opacity 0.2s, transform 0.1s;
    }
    .login-btn:hover { opacity: 0.9; }
    .login-btn:active { transform: scale(0.98); }

    .login-cancel-wrap {
      margin-top: 16px; border-top: 1px solid var(--border); padding-top: 16px;
    }
    .login-cancel {
      background: none; border: none; color: var(--text3); font-size: 13px;
      cursor: pointer; font-family: 'Inter', sans-serif; transition: color 0.2s;
    }
    .login-cancel:hover { color: var(--accent); }


  `;
  document.head.appendChild(style);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdmin);
} else {
  initAdmin();
}
