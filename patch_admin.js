const fs = require('fs');
let content = fs.readFileSync('js/admin.js', 'utf8');

// Add tab to menu
content = content.replace(
  '<button class="menu-btn ${currentAdminTab === \'controllers\' ? \'active\' : \'\'}" data-atab="controllers">🎛️ Контроллеры</button>',
  '<button class="menu-btn ${currentAdminTab === \'controllers\' ? \'active\' : \'\'}" data-atab="controllers">🎛️ Контроллеры</button>\n            <button class="menu-btn ${currentAdminTab === \'powerSupplies\' ? \'active\' : \'\'}" data-atab="powerSupplies">🔌 Блоки питания</button>'
);

// Remove PSU inputs from settings
content = content.replace(
  "${inputGroup('Блок питания (цена $)', 'prices.psu.priceUSD', 'number')}\n          ${inputGroup('Блок питания (мощность Вт)', 'prices.psu.watts', 'number')}\n",
  ""
);

// Add logic to renderWorkspace
content = content.replace(
  "} else if (currentAdminTab === 'controllers') {",
  "} else if (currentAdminTab === 'powerSupplies') {\n    ws.innerHTML = UI.listView('powerSupplies', 'Справочник Блоков Питания', p => `<b>${p.model}</b> <span style=\\"color:var(--text3)\\">(${p.watts}W)</span>`);\n    bindListEvents('powerSupplies', () => ({\n      id: 'new_psu', model: 'Новый Блок Питания', watts: 300, voltage: 5, usageFactor: 0.8, priceUSD: 0,\n      notes_ru: '', notes_uk: ''\n    }));\n  } else if (currentAdminTab === 'controllers') {"
);

// Add logic to editorView
let editorLogic = `
    } else if (type === 'powerSupplies') {
      html += \`
        \${inputGroupEdit('ID (англ, без пробелов)', 'id')}
        \${inputGroupEdit('Модель', 'model')}
        
        <div class="form-divider">Характеристики</div>
        \${inputGroupEdit('Мощность (Вт)', 'watts', 'number')}
        \${inputGroupEdit('Напряжение (В)', 'voltage', 'number')}
        \${inputGroupEdit('Запас мощности (например 0.8)', 'usageFactor', 'number', 0.1)}
        \${inputGroupEdit('Цена (USD)', 'priceUSD', 'number')}
        
        <div class="form-divider">Описание</div>
        \${inputGroupEdit('Описание (RU)', 'notes_ru')}
        \${inputGroupEdit('Описание (UK)', 'notes_uk')}
      \`;
`;

content = content.replace(
  "} else if (type === 'controllers') {",
  editorLogic + "    } else if (type === 'controllers') {"
);

fs.writeFileSync('js/admin.js', content);
console.log('Admin JS patched');
