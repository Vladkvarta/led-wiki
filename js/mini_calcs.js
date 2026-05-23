      // Calculators
      function calcResolution() {
        const w = parseFloat(document.getElementById('c1w').value);
        const h = parseFloat(document.getElementById('c1h').value);
        const p = parseFloat(document.getElementById('c1p').value);
        if (!w || !h || !p) return;
        const pw = Math.round(w / p);
        const ph = Math.round(h / p);
        const total = pw * ph;
        const dens = Math.round(total / ((w / 1000) * (h / 1000)));
        const dist = (p * 1.0).toFixed(1);
        document.getElementById('r1res').textContent = `${pw} × ${ph} px`;
        document.getElementById('r1total').textContent = total.toLocaleString('ru') + ' пикс.';
        document.getElementById('r1dens').textContent = dens.toLocaleString('ru') + ' пикс./м²';
        document.getElementById('r1dist').textContent = dist + ' м';
        document.getElementById('r1').classList.add('show');
      }

      function calcPower() {
        const area = parseFloat(document.getElementById('c2area').value);
        const type = document.getElementById('c2type').value;
        const load = parseFloat(document.getElementById('c2load').value) / 100;
        const map = { outdoor: 450, indoor: 300, rental: 380, fine: 500 };
        const wpm2 = map[type];
        const maxW = area * wpm2;
        const workW = maxW * load;
        const amps = (workW / 220).toFixed(1);
        const psus = Math.ceil(workW / 300);
        const kwh = ((workW * 12) / 1000).toFixed(1);
        document.getElementById('r2max').textContent = Math.round(maxW).toLocaleString('ru') + ' Вт';
        document.getElementById('r2work').textContent = Math.round(workW).toLocaleString('ru') + ' Вт';
        document.getElementById('r2amp').textContent = amps + ' А';
        document.getElementById('r2psu').textContent = psus + ' шт.';
        document.getElementById('r2kwh').textContent = kwh + ' кВт·ч';
        document.getElementById('r2').classList.add('show');
      }

      function calcPitch() {
        const dist = parseFloat(document.getElementById('c3dist').value);
        const env = document.getElementById('c3env').value;
        const mult = { indoor: 1.0, outdoor: 1.4, stage: 0.9 };
        const k = mult[env];
        const rec = (dist / k).toFixed(1);
        const max = (dist / (k * 0.7)).toFixed(1);
        const p4k = (4000 / 3840).toFixed(2);
        document.getElementById('r3pitch').textContent = `P${rec} мм`;
        document.getElementById('r3max').textContent = `P${max} мм`;
        document.getElementById('r3_4k').textContent = `P${p4k} мм`;
        document.getElementById('r3').classList.add('show');
      }

      function calcCabinets() {
        const sw = parseFloat(document.getElementById('c4sw').value);
        const sh = parseFloat(document.getElementById('c4sh').value);
        const cw = parseFloat(document.getElementById('c4cw').value);
        const ch = parseFloat(document.getElementById('c4ch').value);
        const cols = Math.round(sw / cw);
        const rows = Math.round(sh / ch);
        const total = cols * rows;
        const rw = (cols * cw / 1000).toFixed(2);
        const rh = (rows * ch / 1000).toFixed(2);
        const area = (rw * rh).toFixed(2);
        document.getElementById('r4cw').textContent = cols + ' шт.';
        document.getElementById('r4ch').textContent = rows + ' шт.';
        document.getElementById('r4total').textContent = total + ' шт.';
        document.getElementById('r4real').textContent = `${rw} × ${rh} м`;
        document.getElementById('r4area').textContent = area + ' м²';
        document.getElementById('r4').classList.add('show');
      }

