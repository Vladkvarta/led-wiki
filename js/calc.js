        import { DB, loadDB } from './data/database.js';
        import { t, dbT, initI18n } from './i18n.js';

        let currentEnv = 'indoor';

        function init() {
          initI18n(); // Setup language
          // Removed DB bindings for fixed costs and markup

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
            opt.textContent = `${c.manufacturer} ${c.model} (до ${(c.maxPixels / 1000000).toFixed(1)}M px)`;
            ctrlSelect.appendChild(opt);
          });
          if (prevCtrl && [...ctrlSelect.options].some(o => o.value === prevCtrl)) {
            ctrlSelect.value = prevCtrl;
          }

          // Update Power Supplies
          const psuSelect = document.getElementById('w_psu');
          const prevPsu = psuSelect.value;
          psuSelect.innerHTML = '';
          DB.powerSupplies.forEach(p => {
            const opt = document.createElement('option');
            opt.value = p.id;
            opt.textContent = `${p.model} (${p.watts}W) - $${p.priceUSD}`;
            psuSelect.appendChild(opt);
          });
          if (prevPsu && [...psuSelect.options].some(o => o.value === prevPsu)) {
            psuSelect.value = prevPsu;
          }
          // Update Receiving Cards
          const rcardSelect = document.getElementById('w_rcard');
          const prevRcard = rcardSelect.value;
          rcardSelect.innerHTML = '';
          DB.receivingCards.forEach(r => {
            const opt = document.createElement('option');
            opt.value = r.id;
            opt.textContent = `${r.model} - $${r.priceUSD}`;
            rcardSelect.appendChild(opt);
          });
          if (prevRcard && [...rcardSelect.options].some(o => o.value === prevRcard)) {
            rcardSelect.value = prevRcard;
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
          const psuId = document.getElementById('w_psu').value;
          const rcardId = document.getElementById('w_rcard').value;
          const mod = DB.matrices.find(m => m.id === modId);
          const ctrl = DB.controllers.find(c => c.id === ctrlId);
          const psu = DB.powerSupplies.find(p => p.id === psuId);
          const rcard = DB.receivingCards.find(r => r.id === rcardId);
          if (!mod || !ctrl || !psu || !rcard) return;

          // Hints will be rendered after calculations

          // Inputs
          const w_mm = parseFloat(document.getElementById('w_width').value) || 0;
          const h_mm = parseFloat(document.getElementById('w_height').value) || 0;
          const usdRate = parseFloat(document.getElementById('w_usd_rate').value) || 40.0;
          const markup = 1; // Убрана общая наценка
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

          // Render Hints
          document.getElementById('w_mod_hints').innerHTML = `<b>${t('h_bright')}</b> ${mod.brightness} nits | <b>${t('h_prot')}</b> ${mod.ip} | <b>${t('h_tech')}</b> ${mod.technology}`;
          
          let ctrlHint = `<b>${t('h_type')}</b> ${ctrl.type} | <b>${t('h_ports')}</b> ${ctrl.ethernetPorts} | <b>${t('h_cloud')}</b> ${ctrl.cloud ? t('h_yes') : t('h_no')}`;
          if (ctrl.maxPixels && totalPx > ctrl.maxPixels) {
              ctrlHint += `<br><span style="color:#ef4444; font-weight:600; font-size:12px; display:inline-block; margin-top:4px;">${t('ctrl_warn')} ${(ctrl.maxPixels).toLocaleString('ru')} px</span>`;
          }
          document.getElementById('w_ctrl_hints').innerHTML = ctrlHint;
          
          document.getElementById('w_rcard_hints').innerHTML = `<b>${t('h_desc')}</b> ${dbT(rcard, 'notes')}`;

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
          document.getElementById('r_size').textContent = `${(realW / 1000).toFixed(2)} × ${(realH / 1000).toFixed(2)} м`;

          const elAspect = document.getElementById('r_aspect');
          elAspect.textContent = aspectText;
          elAspect.className = 'tc-sub ' + aspectClass;

          document.getElementById('r_res').textContent = `${resW} × ${resH} px`;
          document.getElementById('r_dist').textContent = `${t('opt_dist')} ${optDist.toFixed(1)} м`;

          document.getElementById('r_power').textContent = `${(maxPwrW / 1000).toFixed(1)} / ${(avgPwrW / 1000).toFixed(1)} кВт`;

          // Calculation of receiving cards by HUB ports and pixel limits
          const maxPxW = rcard.maxPxW || 256;
          const maxPxH = rcard.maxPxH || 256;
          const hubPorts = rcard.hubPorts || 8;
          const maxTotalPx = maxPxW * maxPxH;

          // 1. Width Calculation (cabCols)
          // 1 port handles max 512px and max 7 modules
          const maxModsW = Math.min(7, Math.floor(512 / modResW));
          const cabCols = Math.ceil(cols / maxModsW) || 1;
          
          // Max modules width in the worst-case cabinet
          const maxCabW = Math.ceil(cols / cabCols);

          // 2. Height Calculation (rowsPerCard)
          // 1 port always = 1 row of modules
          const pixelsPerModRow = maxCabW * modResW * modResH;
          const maxRowsByPx = Math.floor(maxTotalPx / pixelsPerModRow);
          // Limit rows by physical ports and pixel cap
          const maxRowsPerCard = Math.min(hubPorts, maxRowsByPx) || 1;

          // 3. Cabinets in height (cabRows)
          const cabRows = Math.ceil(rows / maxRowsPerCard) || 1;

          // Hardware Quantities
          const totalCabs = cabCols * cabRows * sidesMultiplier;
          const rCardCount = totalCabs; // 1 rcard per custom cabinet

          // Distribute function to show grid beautifully
          function distribute(total, chunks) {
            let res = [];
            let base = Math.floor(total / chunks);
            let rem = total % chunks;
            for (let i = 0; i < chunks; i++) {
              res.push(base + (i < rem ? 1 : 0));
            }
            return res;
          }

          const wDist = distribute(cols, cabCols);
          const hDist = distribute(rows, cabRows);

          // Power Quantities & PSU Calculation per Cabinet
          const margin = 1.2; // 20% margin
          const psuSafeW = Math.floor(psu.watts / margin); 
          let maxModsPerPsu = 6; // base limit
          
          if ((maxModsPerPsu * mod.maxPowerPerModule) > psuSafeW) {
              maxModsPerPsu = Math.floor(psuSafeW / mod.maxPowerPerModule);
              if (maxModsPerPsu < 1) maxModsPerPsu = 1;
          }
          
          let psuCount = 0;
          hDist.forEach(h => {
              wDist.forEach(w => {
                  const modsInCab = w * h;
                  psuCount += Math.ceil(modsInCab / maxModsPerPsu);
              });
          });
          psuCount *= sidesMultiplier;

          // Render PSU Hints with Warning if needed
          let psuHint = `<b>${t('h_power')}</b> ${psu.watts}W | <b>${t('h_margin')}</b> 20% | <b>${t('h_volt')}</b> ${psu.voltage}V`;
          if (maxModsPerPsu < 6) {
              psuHint += `<br><span style="color:#ef4444; font-weight:600; font-size:12px; display:inline-block; margin-top:4px;">${t('h_psu_warn')} ${maxModsPerPsu} ${t('h_psu_warn2')}</span>`;
          }
          document.getElementById('w_psu_hints').innerHTML = psuHint;

          let gridCounts = {};
          hDist.forEach(h => {
              wDist.forEach(w => {
                  const key = `${w}×${h}`;
                  gridCounts[key] = (gridCounts[key] || 0) + 1;
              });
          });
          const gridStr = Object.entries(gridCounts).map(([size, count]) => `${size} (${count} ${t('pcs')})`).join(', ');

          // Draw Matrix stats
          const elMatrix = document.getElementById('r_matrix');
          elMatrix.textContent = `${cols} × ${rows} ${isTwoSides ? '(x2) ' : ''}(${totalMods} ${t('pcs')})`;

          const elMatrixSub = document.getElementById('r_matrix_sub');
          elMatrixSub.innerHTML = t('matrix_w_h');
          elMatrixSub.style.color = '#64748b';
          elMatrixSub.style.fontWeight = '500';

          // Render Visual Grid
          const visualEl = document.getElementById('cabinet_visual');
          if (wDist.length > 0 && hDist.length > 0) {
            let visualHtml = `<div class="cab-visual-wrap" style="display:flex; flex-direction:column; gap:4px; margin-top:16px; padding: 12px; background:#f8fafc; border:1px dashed #cbd5e1; border-radius:8px;">`;
            visualHtml += `<div class="cab-visual-title" style="font-size:11px; font-weight:700; color:#64748b; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.5px;">${t('draw_title')}</div>`;

            const pxPerRow = Math.min(30, 200 / rows); 
            hDist.forEach((hCab) => {
                visualHtml += `<div class="cab-visual-row" style="display:flex; gap:4px;">`;
                wDist.forEach((wCab) => {
                    const modsInCab = wCab * hCab;
                    const cabPsuCount = Math.ceil(modsInCab / maxModsPerPsu);
                    visualHtml += `<div class="cab-visual-box" style="flex: ${wCab}; height: ${Math.max(32, hCab * pxPerRow)}px; background:#e0e7ff; border:1px solid #6366f1; border-radius:4px; display:flex; flex-direction:column; align-items:center; justify-content:center; font-size:12px; color:#4338ca; font-weight:700; box-shadow:inset 0 1px 2px rgba(255,255,255,0.5); line-height:1.2;">
                      <div>${wCab}×${hCab}</div>
                      <div class="cab-visual-psu" style="font-size:10px; font-weight:500; color:#4f46e5; margin-top:2px;">${t('psu_pcs').replace('{count}', cabPsuCount)}</div>
                    </div>`;
                });
                visualHtml += `</div>`;
            });
            visualHtml += `</div>`;
            visualEl.innerHTML = visualHtml;
          } else {
            visualEl.innerHTML = '';
          }

          // Prices UAH with markup
          const toUAH = (usd) => (usd * usdRate * markup);
          const pMod = toUAH(mod.priceUSD);
          const pPsu = toUAH(psu.priceUSD);
          const pRCard = toUAH(rcard.priceUSD);
          const pCtrl = toUAH(ctrl.priceUSD);

          // Sums//
          const sMod = pMod * totalMods;
          const sPsu = pPsu * psuCount;
          const sRCard = pRCard * rCardCount;

          const frameUAH = (parseFloat(document.getElementById('w_frame').value) || 0) * markup;
          const delivUAH = (parseFloat(document.getElementById('w_delivery').value) || 0) * markup;
          const setupRaw = (parseFloat(document.getElementById('w_setup').value) || 0) * markup;
          const discPercent = parseFloat(document.getElementById('w_discount').value) || 0;
          const discUAH = Math.round(setupRaw * (discPercent / 100));
          const setupUAH = Math.max(0, Math.round(setupRaw - discUAH));

          const total = sMod + sPsu + sRCard + pCtrl + frameUAH + delivUAH + setupUAH;
          //
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
          tr(t('psu_title'), `${psu.model} — ${dbT(psu, 'notes')}`, psuCount, pPsu, sPsu);
          tr(t('rcard_title'), `${rcard.model} — ${dbT(rcard, 'notes')}`, rCardCount, pRCard, sRCard);

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
