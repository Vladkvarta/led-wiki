import { matrices } from '../data/matrices.js';
import { controllers } from '../data/controllers.js';
import { PRICE_DB } from '../data/prices.js';

const S = {
  location: '', connType: '',
  screenW: 0, screenH: 0, viewDist: 0, qty: 1,
  matrixId: '', ctrlId: '',
  framePerSqm: 0, installPerSqm: 0, delivery: 0, commissioning: 0, markup: 0,
};

export function initEstimateCalculator() {
    const locSel = document.getElementById('location');
    if (!locSel) return;

    locSel.addEventListener('change', onLocationChange);
    document.getElementById('connType').addEventListener('change', filterComponents);
    document.getElementById('screenW').addEventListener('input', onDimChange);
    document.getElementById('screenH').addEventListener('input', onDimChange);
    document.getElementById('viewDist').addEventListener('input', onDimChange);
    document.getElementById('qty').addEventListener('input', refreshAll);
    document.getElementById('currency').addEventListener('change', refreshAll);

    document.getElementById('matrixSel').addEventListener('change', onMatrixChange);
    document.getElementById('ctrlSel').addEventListener('change', onCtrlChange);

    ['framePerSqm', 'installPerSqm', 'delivery', 'commissioning', 'markup'].forEach(id => {
        document.getElementById(id).addEventListener('input', refreshAll);
    });

    const extrasToggle = document.getElementById('extrasToggle');
    if (extrasToggle) {
        extrasToggle.addEventListener('click', toggleExtras);
    }

    // Set initial defaults
    const currencySel = document.getElementById('currency');
    if (currencySel) {
        // We want UAH by default now
        currencySel.value = 'RUB'; // Temporary, since RUB was in the HTML list. Let's update index.html later.
        // Actually, let's just make it work with what's there for now.
    }
}

function sym() {
  const currencyVal = document.getElementById('currency').value;
  if (currencyVal === 'UAH') return '₴';
  const m = {USD:'$', EUR:'€', RUB:'₽'};
  return m[currencyVal] || '$';
}

function fmt(n) {
  if (!n && n !== 0) return '—';
  return sym() + Math.round(n).toLocaleString('ru-RU');
}

function readState() {
  S.location    = document.getElementById('location').value;
  S.connType    = document.getElementById('connType').value;
  S.screenW     = parseFloat(document.getElementById('screenW').value) || 0;
  S.screenH     = parseFloat(document.getElementById('screenH').value) || 0;
  S.viewDist    = parseFloat(document.getElementById('viewDist').value) || 0;
  S.qty         = Math.max(1, parseInt(document.getElementById('qty').value) || 1);
  S.matrixId    = document.getElementById('matrixSel').value;
  S.ctrlId      = document.getElementById('ctrlSel').value;
  S.framePerSqm    = parseFloat(document.getElementById('framePerSqm').value) || 0;
  S.installPerSqm  = parseFloat(document.getElementById('installPerSqm').value) || 0;
  S.delivery       = parseFloat(document.getElementById('delivery').value) || 0;
  S.commissioning  = parseFloat(document.getElementById('commissioning').value) || 0;
  S.markup         = parseFloat(document.getElementById('markup').value) || 0;
}

function getMatrix() { return matrices.find(m => m.id === S.matrixId) || null; }
function getCtrl()   { return controllers.find(c => c.id === S.ctrlId) || null; }

function filterComponents() {
  readState();
  const loc = S.location;
  const conn = S.connType;

  const mSel = document.getElementById('matrixSel');
  const cSel = document.getElementById('ctrlSel');

  if (!loc) {
    mSel.innerHTML = '<option value="">— сначала выберите место установки —</option>';
    cSel.innerHTML = '<option value="">— сначала выберите место установки —</option>';
    return;
  }

  // Матрицы
  const mFiltered = matrices.filter(m => m.location === loc);
  mSel.innerHTML = '<option value="">— выберите матрицу —</option>' +
    mFiltered.map(m =>
      `<option value="${m.id}">${m.model} | P${m.pitch} | ${sym()}${m.pricePerSqm}/м²</option>`
    ).join('');

  // Контроллеры — фильтр по облаку если выбрано
  let cFiltered = controllers;
  if (conn === 'cloud')  cFiltered = cFiltered.filter(c => c.cloud);
  if (conn === 'local')  cFiltered = cFiltered.filter(c => !c.cloud);

  cSel.innerHTML = '<option value="">— выберите контроллер —</option>' +
    cFiltered.map(c =>
      `<option value="${c.id}">${c.manufacturer} ${c.model} | ${c.type} | ${sym()}${c.price.toLocaleString('ru-RU')}</option>`
    ).join('');

  // Сбросить карточки
  document.getElementById('matrixCard').classList.remove('show');
  document.getElementById('ctrlCard').classList.remove('show');

  refreshAll();
}

function onLocationChange() {
  const loc = document.getElementById('location').value;
  const db = PRICE_DB;

  // Заполняем дефолты
  if (loc === 'outdoor') {
      document.getElementById('framePerSqm').value = db.frame.outdoorPerSqmUAH;
      document.getElementById('installPerSqm').value = db.install.outdoorPerSqmUAH;
  } else if (loc === 'rental') {
      document.getElementById('framePerSqm').value = db.frame.rentalPerSqmUAH;
      document.getElementById('installPerSqm').value = db.install.rentalPerSqmUAH;
  } else {
      document.getElementById('framePerSqm').value = db.frame.indoorPerSqmUAH;
      document.getElementById('installPerSqm').value = db.install.indoorPerSqmUAH;
  }

  document.getElementById('delivery').value      = db.delivery.minUAH;
  document.getElementById('commissioning').value = db.commissioning.fixedUAH;
  document.getElementById('markup').value        = db.markupDefault;

  filterComponents();
}

function onDimChange() { refreshAll(); }

function onMatrixChange() {
  const m = matrices.find(x => x.id === document.getElementById('matrixSel').value);
  const card = document.getElementById('matrixCard');
  const det  = document.getElementById('matrixDetails');
  if (!m) { card.classList.remove('show'); refreshAll(); return; }
  det.innerHTML = [
    ['Шаг пикселя', `P${m.pitch} мм`],
    ['Технология',  m.technology],
    ['Яркость',     `${m.brightness} нит`],
    ['Защита',      m.ip],
    ['Кабинет',     `${m.cabinetW}×${m.cabinetH} мм`],
    ['Refresh',     `${m.refreshHz} Hz`],
    ['HDR',         m.hdr ? '✓' : '—'],
    ['Нить',        m.wire],
    ['Цена/м²',     `${sym()}${m.pricePerSqm}`],
  ].map(([k,v]) => `<span class="comp-tag"><b>${v}</b>&nbsp;${k}</span>`).join('');
  card.classList.add('show');
  refreshAll();
}

function onCtrlChange() {
  const c = controllers.find(x => x.id === document.getElementById('ctrlSel').value);
  const card = document.getElementById('ctrlCard');
  const det  = document.getElementById('ctrlDetails');
  if (!c) { card.classList.remove('show'); refreshAll(); return; }
  det.innerHTML = [
    ['Сегмент',    c.segment],
    ['Тип',        c.type],
    ['Макс. пикс.',`${(c.maxPixels/1e6).toFixed(1)}M`],
    ['Refresh',    `${c.refreshHz} Hz`],
    ['HDR',        c.hdr ? '✓' : '—'],
    ['Genlock',    c.genlock ? '✓' : '—'],
    ['Cloud',      c.cloud ? c.cloudPlatform : 'Нет'],
    ['Цена',       `${sym()}${c.price.toLocaleString('ru-RU')}`],
  ].map(([k,v]) => `<span class="comp-tag"><b>${v}</b>&nbsp;${k}</span>`).join('');
  card.classList.add('show');
  refreshAll();
}

function toggleExtras() {
  const btn  = document.getElementById('extrasToggle');
  const body = document.getElementById('extrasBody');
  btn.classList.toggle('open');
  body.classList.toggle('show');
}

function updatePitchAdvice() {
  const el = document.getElementById('pitchAdvice');
  const dist = parseFloat(document.getElementById('viewDist').value) || 0;
  const matrix = getMatrix();
  if (!dist) { el.innerHTML = ''; return; }

  const recPitch = dist / 1.0; // recommended max pitch for indoor
  const suggested = recPitch.toFixed(1);

  if (!matrix) {
    el.innerHTML = `<div class="pitch-advice pitch-ok">Рекомендуемый шаг для дистанции ${dist} м: <b>≤ P${suggested}</b>. Выберите матрицу из списка.</div>`;
    return;
  }

  if (matrix.pitch <= recPitch) {
    el.innerHTML = `<div class="pitch-advice pitch-ok">✓ Матрица P${matrix.pitch} подходит для дистанции ${dist} м (рекомендуется ≤ P${suggested}).</div>`;
  } else if (matrix.pitch <= recPitch * 1.4) {
    el.innerHTML = `<div class="pitch-advice pitch-warn">⚠ P${matrix.pitch} — допустимо, но чёткость будет ограничена. Рекомендуется ≤ P${suggested}.</div>`;
  } else {
    el.innerHTML = `<div class="pitch-advice pitch-bad">✗ P${matrix.pitch} не подходит для дистанции ${dist} м. Нужна матрица ≤ P${suggested}.</div>`;
  }
}

function calcTech() {
  readState();
  const m = getMatrix();
  if (!m || !S.screenW || !S.screenH) return null;

  const cols = Math.max(1, Math.round(S.screenW / m.cabinetW));
  const rows = Math.max(1, Math.round(S.screenH / m.cabinetH));
  const realW = cols * m.cabinetW;
  const realH = rows * m.cabinetH;
  const areaM2 = (realW / 1000) * (realH / 1000);
  const cabinets = cols * rows;
  const pixW = Math.round(realW / m.pitch);
  const pixH = Math.round(realH / m.pitch);
  const totalPix = pixW * pixH;

  // PSU Calculation based on maxPowerPerSqm
  const maxPower = areaM2 * m.maxPowerPerSqm;
  const neededPSUs = Math.ceil(maxPower / (PRICE_DB.psu.watts * PRICE_DB.psu.usageFactor));
  const workW = maxPower * 0.75;
  const ampA = workW / 220;
  const lines220 = Math.ceil(workW / 3500); // ~16A groups
  const minDist = m.pitch * 1.0;

  // Проверка контроллера
  const ctrl = getCtrl();
  const ctrlWarn = ctrl && totalPix > ctrl.maxPixels
    ? `⚠ ${ctrl.model} рассчитан на ${(ctrl.maxPixels/1e6).toFixed(1)}M пикс. — требуется каскад или замена контроллера.`
    : null;

  return {
    cols, rows, realW, realH, areaM2, cabinets,
    pixW, pixH, totalPix,
    maxW: maxPower, workW, ampA, lines220, minDist,
    neededPSUs,
    pitchOk: !S.viewDist || m.pitch <= S.viewDist,
    ctrlWarn, qty: S.qty
  };
}

function calcCost(tech) {
  if (!tech) return null;
  readState();
  const m = getMatrix();
  const c = getCtrl();
  const db = PRICE_DB;
  const qty = S.qty;
  const a = tech.areaM2;

  // ── материалы
  const modulesTotal    = m.pricePerSqm * a * qty;
  const psuTotal        = tech.neededPSUs * db.psu.priceUAH * qty;
  const rcardsTotal     = db.receivingCard.priceUAH * tech.cabinets * qty;
  const cablesTotal     = db.cablesMisc.pricePerSqmUAH * a * qty;
  const controllerTotal = c ? c.price * qty : 0;
  const matTotal        = modulesTotal + psuTotal + rcardsTotal + cablesTotal + controllerTotal;

  // ── услуги
  const frameTotal      = S.framePerSqm * a * qty;
  const installTotal    = S.installPerSqm * a * qty;
  const deliveryTotal   = S.delivery;         // не умножаем на qty — логистика одна
  const commissionTotal = S.commissioning;
  const svcTotal        = frameTotal + installTotal + deliveryTotal + commissionTotal;

  const subtotal   = matTotal + svcTotal;
  const markupAmt  = subtotal * (S.markup / 100);
  const total      = subtotal + markupAmt;
  const perSqm     = total / (a * qty);

  return {
    lines: [
      {label:`LED-модули (${m.model}, ${sym()}${m.pricePerSqm}/м² × ${(a*qty).toFixed(2)} м²)`, amt:modulesTotal, grp:'mat'},
      {label:`Блоки питания (${db.psu.label}, ${tech.neededPSUs * qty} шт.)`,  amt:psuTotal,    grp:'mat'},
      {label:`Приёмные карты (${tech.cabinets * qty} шт.)`, amt:rcardsTotal, grp:'mat'},
      {label:'Кабели и комплектующие',  amt:cablesTotal,    grp:'mat'},
      {label:`Контроллер${c ? ` ${c.manufacturer} ${c.model}` : ''}`,  amt:controllerTotal, grp:'mat'},
      {label:'Каркас / конструктив',  amt:frameTotal,   grp:'svc'},
      {label:'Монтаж и установка',    amt:installTotal, grp:'svc'},
      {label:'Доставка',              amt:deliveryTotal,grp:'svc'},
      {label:'Пуско-наладочные работы', amt:commissionTotal, grp:'svc'},
    ],
    matTotal, svcTotal, subtotal, markupAmt, total, perSqm,
    areaTotal: a * qty
  };
}

function renderTech(tech) {
  const el = document.getElementById('techBlock');
  if (!el) return;
  if (!tech) {
    el.innerHTML = '<div class="placeholder">Заполните параметры экрана в блоке 1, чтобы увидеть технические характеристики.</div>';
    return;
  }
  const m = getMatrix();
  const c = getCtrl();

  const chips = [
    {v:`${tech.realW / 1000} × ${tech.realH / 1000} м`,  k:'Реальный размер'},
    {v:`${tech.areaM2.toFixed(2)} м²`,                   k:'Площадь (1 экран)'},
    {v:`${tech.cols} × ${tech.rows}`,                    k:'Кабинетов'},
    {v:`${tech.cabinets}`,                               k:'Кабинетов всего'},
    {v:`${tech.pixW} × ${tech.pixH}`,                   k:'Разрешение пикс.'},
    {v:`${(tech.totalPix/1e6).toFixed(2)}M`,             k:'Всего пикселей'},
    {v:`${Math.round(tech.maxW)} Вт`,                    k:'Пиковая мощность'},
    {v:`${Math.round(tech.workW)} Вт`,                   k:'Рабочая мощность'},
    {v:`${tech.ampA.toFixed(1)} А`,                     k:'Ток 220В (рабочий)'},
    {v:`${tech.lines220}`,                               k:'Групп питания 16А'},
    {v:`${tech.minDist.toFixed(1)} м`,                  k:'Мин. дистанция'},
  ];
  if (S.qty > 1) chips.unshift({v:`${S.qty}`,           k:'Кол-во экранов'});

  const warnings = [];
  if (S.viewDist && m && m.pitch > S.viewDist) {
    warnings.push({cls:'bad', txt:`Шаг P${m.pitch} велик для дистанции ${S.viewDist} м. Рекомендуется ≤ P${S.viewDist.toFixed(1)}.`});
  } else if (S.viewDist && m) {
    warnings.push({cls:'ok', txt:`Шаг P${m.pitch} подходит для дистанции ${S.viewDist} м.`});
  }
  if (tech.ctrlWarn) warnings.push({cls:'warn', txt: tech.ctrlWarn});
  if (tech.lines220 > 1) warnings.push({cls:'warn', txt:`Требуется ${tech.lines220} группы питания 220В/16А — учтите при проектировании электрики.`});
  if (c && tech.totalPix <= c.maxPixels) {
    warnings.push({cls:'ok', txt:`Контроллер ${c.model} покрывает ${(tech.totalPix/1e6).toFixed(2)}M пикс. (макс. ${(c.maxPixels/1e6).toFixed(1)}M). ✓`});
  }

  el.innerHTML =
    `<div class="tech-grid">${chips.map(ch =>
      `<div class="tech-chip"><div class="tv">${ch.v}</div><div class="tk">${ch.k}</div></div>`
    ).join('')}</div>` +
    (warnings.length ? warnings.map(w => `<div class="warn-chip ${w.cls}"><span>${w.txt}</span></div>`).join('') : '');
}

function renderEst(cost) {
  const el = document.getElementById('estBlock');
  if (!el) return;
  if (!cost) {
    el.innerHTML = '<div class="placeholder">Выберите матрицу и задайте размеры экрана, чтобы получить смету.</div>';
    return;
  }
  const name = document.getElementById('projectName').value || 'LED-экран';
  const now = new Date().toLocaleDateString('ru-RU');

  const matLines = cost.lines.filter(l => l.grp === 'mat');
  const svcLines = cost.lines.filter(l => l.grp === 'svc');

  const rows = (lines) => lines.map(l =>
    `<tr><td>${l.label}</td><td class="amount">${l.amt > 0 ? fmt(l.amt) : '—'}</td></tr>`
  ).join('');

  el.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;flex-wrap:wrap;gap:8px">
      <div>
        <div style="font-size:17px;font-weight:900;color:var(--text)">${name}</div>
        <div style="font-size:12px;color:var(--text3)">Коммерческое предложение · ${now}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:11px;color:var(--text3)">Площадь под ключ</div>
        <div style="font-size:14px;font-weight:700;color:var(--accent)">${cost.areaTotal.toFixed(2)} м²</div>
      </div>
    </div>
    <table class="est-table">
      <thead><tr><th>Позиция</th><th style="text-align:right;min-width:120px">Сумма</th></tr></thead>
      <tbody>
        <tr class="grp-header"><td colspan="2">Оборудование и материалы</td></tr>
        ${rows(matLines)}
        <tr class="total-row"><td>Итого материалы</td><td class="amount">${fmt(cost.matTotal)}</td></tr>
        <tr class="grp-header"><td colspan="2">Работы и логистика</td></tr>
        ${rows(svcLines)}
        <tr class="total-row"><td>Итого работы</td><td class="amount">${fmt(cost.svcTotal)}</td></tr>
        <tr class="total-row"><td>Сумма без наценки</td><td class="amount">${fmt(cost.subtotal)}</td></tr>
        <tr class="markup-row"><td>Наценка ${S.markup}%</td><td class="amount">${fmt(cost.markupAmt)}</td></tr>
        <tr class="grand-row"><td>ИТОГО К ОПЛАТЕ</td><td class="amount">${fmt(cost.total)}</td></tr>
        <tr class="sqm-row"><td>Стоимость «под ключ» за 1 м²</td><td class="amount">${fmt(cost.perSqm)} / м²</td></tr>
      </tbody>
    </table>
    <div style="font-size:11px;color:var(--text3);margin-top:8px;line-height:1.7">
      * Цены ориентировочные. Итоговая стоимость уточняется после замера и согласования технического задания.<br>
      * Стоимость электромонтажных работ в смету не включена.<br>
      * Гарантия на оборудование уточняется у производителя.
    </div>`;
}

function refreshAll() {
  readState();
  updatePitchAdvice();
  const tech = calcTech();
  const cost = tech ? calcCost(tech) : null;
  renderTech(tech);
  renderEst(cost);
}
