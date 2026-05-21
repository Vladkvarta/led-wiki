
import { DB, loadDB } from './js/data/database.js';
import { t, dbT, initI18n } from './js/i18n.js';

let currentEnv = 'indoor';

function init() {
  initI18n(); // Setup language
  // Set default values from DB
  document.getElementById('w_usd_rate').value = DB.config.usdRate;
  document.getElementById('w_markup_mat').value = DB.config.markupMaterials;
  document.getElementById('w_frame').value = DB.prices.fixedCosts.frameUAH;
  document.getElementById('w_delivery').value = DB.prices.fixedCosts.deliveryUAH;
  document.getElementById('w_setup').value = DB.prices.fixedCosts.commissioningUAH + DB.prices.fixedCosts.installUAH;
  
  updateLists();
  window.updateCalc = updateCalc; // Expose to global for onchange
}

function updateLists() {
  currentEnv = document.getElementById('w_env').value;
  
  // Update Modules
  const modSelect = document.getElementById('w_mod');
  const prevMod = modSelect.value;
  modSelect.innerHTML = '';
  DB.matrices.filter(m => m.location === currentEnv).forEach(m => {
    const opt = document.createElement('option');
    opt.value = m.id;
    opt.textContent = `${m.model} (${m.moduleW}x${m.moduleH}mm) - $${m.priceUSD}`;
    modSelect.appendChild(opt);
  });
  if (prevMod && [...modSelect.options].some(o => o.value === prevMod)) {
    modSelect.value = prevMod;
  }
  
  // Update Controllers
  const ctrlSelect = document.getElementById('w_ctrl');
  const prevCtrl = ctrlSelect.value;
  ctrlSelect.innerHTML = '';
  DB.controllers.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.manufacturer} ${c.model} (до ${(c.maxPixels/1000000).toFixed(1)}M px)`;
    ctrlSelect.appendChild(opt);
  });
  if (prevCtrl && [...ctrlSelect.options].some(o => o.value === prevCtrl)) {
    ctrlSelect.value = prevCtrl;
  }
  
  updateCalc();
}

function updateCalc() {
  // Check if env changed
  const newEnv = document.getElementById('w_env').value;
  if (newEnv !== currentEnv) {
    updateLists();
    return;
  }

  const modId = document.getElementById('w_mod').value;
  const ctrlId = document.getElementById('w_ctrl').value;
  const mod = DB.matrices.find(m => m.id === modId);
  const ctrl = DB.controllers.find(c => c.id === ctrlId);
  if (!mod || !ctrl) return;

  // Render Hints
  document.getElementById('w_mod_hints').innerHTML = `<b>Яркость:</b> ${mod.brightness} nits | <b>Защита:</b> ${mod.ip} | <b>Технология:</b> ${mod.technology}`;
  document.getElementById('w_ctrl_hints').innerHTML = `<b>Тип:</b> ${ctrl.type} | <b>Порты:</b> ${ctrl.ethernetPorts} | <b>Облако:</b> ${ctrl.cloud ? 'Да' : 'Нет'}`;

  // Inputs
  const w_mm = parseFloat(document.getElementById('w_width').value) || 0;
  const h_mm = parseFloat(document.getElementById('w_height').value) || 0;
  const usdRate = parseFloat(document.getElementById('w_usd_rate').value) || 40.0;
  const markup = 1 + ((parseFloat(document.getElementById('w_markup_mat').value) || 0) / 100);
  const isTwoSides = document.getElementById('w_two_sides').checked;
  const sidesMultiplier = isTwoSides ? 2 : 1;

  // Geometry
  const cols = Math.round(w_mm / mod.moduleW) || 1;
  const rows = Math.round(h_mm / mod.moduleH) || 1;
  const totalMods = cols * rows * sidesMultiplier;
  
  const realW = cols * mod.moduleW;
  const realH = rows * mod.moduleH;
  
  // Resolution per module (calculate via pitch if not provided in DB)
  // pixel count = dimension / pitch
  const modResW = Math.round(mod.moduleW / mod.pitch);
  const modResH = Math.round(mod.moduleH / mod.pitch);
  const resW = cols * modResW;
  const resH = rows * modResH;
  const totalPx = resW * resH * sidesMultiplier;

  // Power
  const maxPwrW = totalMods * mod.maxPowerPerModule;
  const avgPwrW = maxPwrW * 0.35; // 35% typical

  // Aspect Ratio & Distance
  const aspectRatio = realW / realH;
  let aspectText = `Формат ${(aspectRatio).toFixed(2)}:1`;
  let aspectClass = '';
  if (aspectRatio >= 1.6 && aspectRatio <= 1.9) {
    aspectText = t('aspect_ok');
    aspectClass = 'ok';
  } else {
    aspectText = t('aspect_bad');
  }

  const minDist = mod.pitch;
  const optDist = mod.pitch * 2.5;

  // Update Tech Bar
  document.getElementById('r_size').textContent = `${(realW/1000).toFixed(2)} × ${(realH/1000).toFixed(2)} м`;
  
  const elAspect = document.getElementById('r_aspect');
  elAspect.textContent = aspectText;
  elAspect.className = 'tc-sub ' + aspectClass;

  document.getElementById('r_res').textContent = `${resW} × ${resH} px`;
  document.getElementById('r_dist').textContent = `${t('opt_dist')} ${optDist.toFixed(1)} м`;
  
  document.getElementById('r_power').textContent = `${(maxPwrW/1000).toFixed(1)} / ${(avgPwrW/1000).toFixed(1)} кВт`;

  // Draw Matrix stats
  const elMatrix = document.getElementById('r_matrix');
  elMatrix.textContent = `${cols} × ${rows} ${isTwoSides ? '(x2) ' : ''}(${totalMods} ${t('pcs')})`;

  // Hardware Quantities
  const psuW = DB.prices.psu.watts * DB.prices.psu.usageFactor;
  const psuCount = Math.ceil(maxPwrW / psuW) || 1;
  
  // Cabinet size estimation for receiving cards (roughly 1 card per typical cabinet size, e.g. 640x640)
  // We'll estimate 1 card per cabinet area or just 1 per X modules.
  const modsPerCabW = Math.round(mod.cabinetW / mod.moduleW) || 1;
  const modsPerCabH = Math.round(mod.cabinetH / mod.moduleH) || 1;
  const modsPerCab = modsPerCabW * modsPerCabH;
  const rCardCount = Math.ceil(totalMods / modsPerCab) || 1;
  
  const dataCableCount = totalMods;
  const pwrCableCount = Math.ceil(totalMods / 2);

  // Prices UAH with markup
  const toUAH = (usd) => (usd * usdRate * markup);
  const pMod = toUAH(mod.priceUSD);
  const pPsu = toUAH(DB.prices.psu.priceUSD);
  const pRCard = toUAH(DB.prices.receivingCard.priceUSD);
  const pCtrl = toUAH(ctrl.priceUSD);
  const pData = toUAH(DB.prices.cables.dataRibbonUSD);
  const pPwr = toUAH(DB.prices.cables.powerUSD);

  // Sums
  const sMod = pMod * totalMods;
  const sPsu = pPsu * psuCount;
  const sRCard = pRCard * rCardCount;
  const sData = pData * dataCableCount;
  const sPwr = pPwr * pwrCableCount;

  const frameUAH = (parseFloat(document.getElementById('w_frame').value) || 0) * markup;
  const delivUAH = (parseFloat(document.getElementById('w_delivery').value) || 0) * markup;
  const setupRaw = (parseFloat(document.getElementById('w_setup').value) || 0) * markup;
  const discPercent = parseFloat(document.getElementById('w_discount').value) || 0;
  const discUAH = Math.round(setupRaw * (discPercent / 100));
  const setupUAH = Math.max(0, Math.round(setupRaw - discUAH));

  const total = sMod + sPsu + sRCard + pCtrl + sData + sPwr + frameUAH + delivUAH + setupUAH;

  // Render Table
  let html = '';
  function tr(name, desc, qty, price, sum) {
    if (qty > 0 || sum > 0) {
      html += `<tr>
        <td><span class="ri-name">${name}</span><span class="ri-desc">${desc}</span></td>
        <td class="text-center">${qty} ${t('pcs')}</td>
        <td class="text-right">${Math.round(price).toLocaleString('ru')}</td>
        <td class="text-right"><b>${Math.round(sum).toLocaleString('ru')}</b></td>
      </tr>`;
    }
  }

  html += `<tr><td colspan="4" style="background:#f8fafc; padding:6px 12px; font-weight:700; font-size:12px; color:#475569; text-transform:uppercase; letter-spacing:0.5px;">${t('mat_title')}</td></tr>`;
  
  tr(t('mod_title'), `${mod.model} (${mod.moduleW}x${mod.moduleH})`, totalMods, pMod, sMod);
  tr(t('psu_title'), dbT(DB.prices.psu, 'label'), psuCount, pPsu, sPsu);
  tr(t('rcard_title'), dbT(DB.prices.receivingCard, 'label'), rCardCount, pRCard, sRCard);
  tr(t('data_title'), dbT(DB.prices.cables, 'dataRibbon'), dataCableCount, pData, sData);
  tr(t('pwr_title'), dbT(DB.prices.cables, 'power'), pwrCableCount, pPwr, sPwr);
  
  const ctrlDesc = `${ctrl.manufacturer} ${ctrl.model} — ${dbT(ctrl, 'bestUse')}`;
  tr(t('ctrl_title'), ctrlDesc, 1, pCtrl, pCtrl);
  
  if (frameUAH > 0 || delivUAH > 0 || setupRaw > 0) {
    html += `<tr><td colspan="4" style="background:#f8fafc; padding:6px 12px; font-weight:700; font-size:12px; color:#475569; text-transform:uppercase; letter-spacing:0.5px; border-top:2px solid #e2e8f0;">${t('srv_title')}</td></tr>`;
  }
  
  if (frameUAH > 0) tr(t('frame_title'), t('frame_desc'), 1, frameUAH, frameUAH);
  if (delivUAH > 0) tr(t('deliv_title'), t('deliv_desc'), 1, delivUAH, delivUAH);
  if (setupRaw > 0) {
    const dStr = discPercent > 0 ? ` (${t('discount_txt')} -${discPercent}%)` : '';
    tr(t('setup_title'), t('setup_desc') + dStr, 1, setupUAH, setupUAH);
  }

  document.getElementById('receipt_body').innerHTML = html;
  document.getElementById('receipt_total').textContent = Math.round(total).toLocaleString('ru') + ' ₴';
}

loadDB().then(() => {
  init();
});
