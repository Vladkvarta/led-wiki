import { loadDB, DB } from './data/database.js';

let localDB = null;
let currentAdminTab = 'matrices';
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
          <button id="btn_download_json" class="admin-btn primary" style="width: 100%;">📥 Скачать JSON</button>
          <div class="admin-hint" style="margin-top: 12px; text-align: center;">После скачивания замените файл database.json в корне проекта.</div>
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
    ws.innerHTML = UI.listView('receivingCards', 'Справочник Принимающих Карт', r => `<b>${r.model}</b> <span style="color:#10b981; font-weight:600; margin-left:12px;">$${r.priceUSD || 0}</span>`);
    bindListEvents('receivingCards', () => ({
      id: 'new_rcard', model: 'Новая Принимающая Карта', priceUSD: 15,
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

export async function initAdmin() {
  addAdminStyles();

  // Load fresh DB if not already loaded
  await loadDB();
  // Clone it so we don't mess up the live calculator until downloaded/reloaded
  localDB = JSON.parse(JSON.stringify(DB));

  document.querySelector('.tab-btn[data-tab="admin"]').addEventListener('click', () => {
    const container = document.getElementById('admin-app');
    if (!container.innerHTML.trim()) {
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

      // Bind Download
      document.getElementById('btn_download_json').addEventListener('click', downloadJSON);

      renderWorkspace();
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
  `;
  document.head.appendChild(style);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAdmin);
} else {
  initAdmin();
}
