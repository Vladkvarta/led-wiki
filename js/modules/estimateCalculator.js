import { DB } from '../data/database.js';

const S = {
  location: '',
  screenW: 0, screenH: 0, viewDist: 0, assemblySide: 1,
  matrixId: '', ctrlId: '',
  frameFixed: 0, installFixed: 0, delivery: 0, commissioning: 0, discount: 0,
  currency: 'UAH'
};

export function initEstimateCalculator() {
    const locSel = document.getElementById('location');
    if (!locSel) return;

    locSel.addEventListener('change', onLocationChange);
    document.getElementById('screenW').addEventListener('input', refreshAll);
    document.getElementById('screenH').addEventListener('input', refreshAll);
    document.getElementById('viewDist').addEventListener('change', refreshAll);
    document.getElementById('assemblySide').addEventListener('change', refreshAll);
    document.getElementById('currency').addEventListener('change', (e) => {
        S.currency = e.target.value;
        refreshAll();
    });

    document.getElementById('matrixSel').addEventListener('change', onMatrixChange);
    document.getElementById('ctrlSel').addEventListener('change', onCtrlChange);

    ['frameFixed', 'installFixed', 'delivery', 'commissioning', 'discount'].forEach(id => {
        document.getElementById(id).addEventListener('input', refreshAll);
    });

    // Populate initial selects
    S.currency = document.getElementById('currency').value;
}

function getRate() {
    return S.currency === 'USD' ? 1 : DB.config.usdRate;
}

function sym() {
    return S.currency === 'USD' ? '$' : '₴';
}

function fmt(n) {
    if (!n && n !== 0) return '—';
    return sym() + Math.round(n).toLocaleString('ru-RU');
}

function readState() {
    S.location     = document.getElementById('location').value;
    S.screenW      = parseFloat(document.getElementById('screenW').value) || 0;
    S.screenH      = parseFloat(document.getElementById('screenH').value) || 0;
    S.viewDist     = parseFloat(document.getElementById('viewDist').value) || 0;
    S.assemblySide = parseInt(document.getElementById('assemblySide').value) || 1;
    S.matrixId     = document.getElementById('matrixSel').value;
    S.ctrlId       = document.getElementById('ctrlSel').value;
    S.frameFixed   = parseFloat(document.getElementById('frameFixed').value) || 0;
    S.installFixed = parseFloat(document.getElementById('installFixed').value) || 0;
    S.delivery     = parseFloat(document.getElementById('delivery').value) || 0;
    S.commissioning = parseFloat(document.getElementById('commissioning').value) || 0;
    S.discount     = parseFloat(document.getElementById('discount').value) || 0;
}

function onLocationChange() {
    readState();
    const mSel = document.getElementById('matrixSel');
    const cSel = document.getElementById('ctrlSel');

    if (!S.location) {
        mSel.innerHTML = '<option value="">— сначала выберите место установки —</option>';
        cSel.innerHTML = '<option value="">— сначала выберите место установки —</option>';
        return;
    }

    const mFiltered = DB.matrices.filter(m => m.location === S.location);
    mSel.innerHTML = '<option value="">— выберите матрицу —</option>' +
        mFiltered.map(m => `<option value="${m.id}">${m.model} | P${m.pitch}</option>`).join('');

    cSel.innerHTML = '<option value="">— выберите контроллер —</option>' +
        DB.controllers.map(c => `<option value="${c.id}">${c.manufacturer} ${c.model}</option>`).join('');

    // Set default fixed costs (convert UAH defaults to current currency if needed, but here we store input in UAH)
    document.getElementById('frameFixed').value = DB.prices.fixedCosts.frameUAH;
    document.getElementById('installFixed').value = DB.prices.fixedCosts.installUAH;
    document.getElementById('delivery').value = DB.prices.fixedCosts.deliveryUAH;
    document.getElementById('commissioning').value = DB.prices.fixedCosts.commissioningUAH;

    refreshAll();
}

function onMatrixChange() {
    const m = DB.matrices.find(x => x.id === document.getElementById('matrixSel').value);
    const card = document.getElementById('matrixCard');
    const det  = document.getElementById('matrixDetails');
    if (!m) { card.classList.remove('show'); refreshAll(); return; }

    det.innerHTML = `
        <div><b>Модуль:</b> ${m.moduleW}×${m.moduleH}мм</div>
        <div><b>Питание:</b> ${m.voltage}V</div>
        <div><b>Мощность:</b> ${m.maxPowerPerModule}Вт</div>
        <div><b>Светодиод:</b> ${m.wire === 'Au' ? 'Золото' : 'Медь'}</div>
    `;
    card.classList.add('show');
    refreshAll();
}

function onCtrlChange() {
    const c = DB.controllers.find(x => x.id === document.getElementById('ctrlSel').value);
    const card = document.getElementById('ctrlCard');
    const det  = document.getElementById('ctrlDetails');
    if (!c) { card.classList.remove('show'); refreshAll(); return; }

    det.innerHTML = `
        <div><b>Тип:</b> ${c.type}</div>
        <div><b>Емкость:</b> ${(c.maxPixels/1e6).toFixed(1)}M пикс.</div>
    `;
    card.classList.add('show');
    refreshAll();
}

function refreshAll() {
    readState();
    updatePitchAdvice();
    const tech = calcTech();
    renderTech(tech);
    renderEst(tech ? calcCost(tech) : null);
}

function updatePitchAdvice() {
    const el = document.getElementById('pitchAdvice');
    const matrix = DB.matrices.find(m => m.id === S.matrixId);
    if (!S.viewDist) { el.innerHTML = ''; return; }

    const recPitch = S.viewDist; // Simple rule: 1m distance = P1
    if (!matrix) {
        el.innerHTML = `<div class="pitch-advice pitch-ok">Для ${S.viewDist}м рекомендуется шаг ≤ P${recPitch}</div>`;
        return;
    }

    const ok = matrix.pitch <= recPitch;
    el.innerHTML = ok
        ? `<div class="pitch-advice pitch-ok">✓ Шаг P${matrix.pitch} отлично подходит для ${S.viewDist}м</div>`
        : `<div class="pitch-advice pitch-bad">✗ Шаг P${matrix.pitch} великоват. Лучше ≤ P${recPitch}</div>`;
}

function calcTech() {
    const m = DB.matrices.find(x => x.id === S.matrixId);
    if (!m || !S.screenW || !S.screenH) return null;

    const cols = Math.max(1, Math.round(S.screenW / m.moduleW));
    const rows = Math.max(1, Math.round(S.screenH / m.moduleH));
    const totalModulesSide = cols * rows;
    const realW = cols * m.moduleW;
    const realH = rows * m.moduleH;

    const pixW = Math.round(realW / m.pitch);
    const pixH = Math.round(realH / m.pitch);
    const totalPixelsSide = pixW * pixH;

    const maxPowerSide = totalModulesSide * m.maxPowerPerModule;
    const psu = DB.prices.psu;
    const psusSide = Math.ceil(maxPowerSide / (psu.watts * psu.usageFactor));

    // Cards: 1 per 16 modules
    const cardsSide = Math.ceil(totalModulesSide / 16);

    const side = S.assemblySide;

    return {
        realW, realH, cols, rows, totalModulesSide,
        totalPixelsSide,
        maxW: maxPowerSide * side,
        neededPSUs: psusSide * side,
        neededCards: cardsSide * side,
        modulesTotal: totalModulesSide * side,
        voltage: m.voltage,
        voltageMatch: m.voltage === psu.voltage
    };
}

function calcCost(tech) {
    const m = DB.matrices.find(x => x.id === S.matrixId);
    const c = DB.controllers.find(x => x.id === S.ctrlId);
    const rate = DB.config.usdRate;
    const markupMat = 1 + DB.config.markupMaterials / 100;

    // Unit based prices (Internal USD -> Customer Current Currency)
    const getPrice = (usd) => (usd * getRate() * (S.currency === 'USD' ? 1 : 1)) * markupMat;

    // 1. Materials
    const modulesCost = tech.modulesTotal * getPrice(m.priceUSD);
    const psuCost     = tech.neededPSUs * getPrice(DB.prices.psu.priceUSD);
    const cardsCost   = tech.neededCards * getPrice(DB.prices.receivingCard.priceUSD);
    const cablesCost  = tech.modulesTotal * (getPrice(DB.prices.cables.dataRibbonUSD) + getPrice(DB.prices.cables.powerUSD));
    const ctrlCost    = c ? getPrice(c.priceUSD) : 0;

    const matSubtotal = modulesCost + psuCost + cardsCost + cablesCost + ctrlCost;

    // 2. Labor (UAH -> Current Currency)
    const toCurr = (uah) => S.currency === 'USD' ? uah / rate : uah;
    const laborMarkup = 1 + DB.config.markupLabor / 100;

    const frame    = toCurr(S.frameFixed) * laborMarkup;
    const install  = toCurr(S.installFixed) * laborMarkup;
    const delivery = toCurr(S.delivery) * laborMarkup;
    const comm     = toCurr(S.commissioning) * laborMarkup;

    const laborSubtotal = frame + install + delivery + comm;
    const discountAmt = laborSubtotal * (S.discount / 100);
    const laborFinal = laborSubtotal - discountAmt;

    return {
        total: matSubtotal + laborFinal,
        matSubtotal, laborSubtotal, laborFinal, discountAmt,
        lines: [
            { label: `Модули ${m.model} (${tech.modulesTotal} шт)`, val: modulesCost },
            { label: `Блоки питания (${tech.neededPSUs} шт)`, val: psuCost },
            { label: `Приемные карты (${tech.neededCards} шт)`, val: cardsCost },
            { label: `Комплект кабелей (${tech.modulesTotal} шт)`, val: cablesCost },
            { label: `Контроллер ${c ? c.model : '—'}`, val: ctrlCost },
            { label: 'Конструктив и монтаж', val: frame + install },
            { label: 'Логистика и запуск', val: delivery + comm }
        ]
    };
}

function renderTech(tech) {
    const el = document.getElementById('techBlock');
    if (!tech) return;

    el.innerHTML = `
        <div class="tech-grid">
            <div class="tech-chip"><div class="tv">${tech.realW/1000}×${tech.realH/1000}</div><div class="tk">Размер (м)</div></div>
            <div class="tech-chip"><div class="tv">${tech.cols}×${tech.rows}</div><div class="tk">Модулей (стор)</div></div>
            <div class="tech-chip"><div class="tv">${tech.modulesTotal}</div><div class="tk">Всего модулей</div></div>
            <div class="tech-chip"><div class="tv">${tech.neededCards}</div><div class="tk">Приемных карт</div></div>
            <div class="tech-chip"><div class="tv">${tech.neededPSUs}</div><div class="tk">Блоков питания</div></div>
            <div class="tech-chip"><div class="tv">${Math.round(tech.maxW)}Вт</div><div class="tk">Макс. мощность</div></div>
        </div>
        ${!tech.voltageMatch ? '<div class="pitch-advice pitch-bad" style="margin-top:15px">⚠ Внимание: Вольтаж модуля ('+tech.voltage+'V) не совпадает с БП!</div>' : ''}
    `;
}

function renderEst(cost) {
    const el = document.getElementById('estBlock');
    if (!cost) return;

    el.innerHTML = `
        <table class="est-table">
            <tr class="grp-header"><td colspan="2">Оборудование</td></tr>
            ${cost.lines.slice(0, 5).map(l => `<tr><td>${l.label}</td><td class="amount">${fmt(l.val)}</td></tr>`).join('')}
            <tr class="grp-header"><td colspan="2">Работы и услуги</td></tr>
            ${cost.lines.slice(5).map(l => `<tr><td>${l.label}</td><td class="amount">${fmt(l.val)}</td></tr>`).join('')}
            ${cost.discountAmt > 0 ? `<tr style="color:var(--danger)"><td>Скидка на работы (${S.discount}%)</td><td class="amount">-${fmt(cost.discountAmt)}</td></tr>` : ''}
            <tr class="grand-row"><td>ИТОГО</td><td class="amount">${fmt(cost.total)}</td></tr>
        </table>
    `;
}
