export function initCalculators() {
    const calcBtns = document.querySelectorAll('.calc-btn');
    calcBtns.forEach(btn => {
        const calcType = btn.dataset.calc;
        if (calcType) {
            btn.addEventListener('click', () => {
                if (calcType === 'calcResolution') calcResolution();
                if (calcType === 'calcPower') calcPower();
                if (calcType === 'calcPitch') calcPitch();
                if (calcType === 'calcCabinets') calcCabinets();
            });
        }
    });
}

function calcResolution() {
  const w = parseFloat(document.getElementById('c1w').value);
  const h = parseFloat(document.getElementById('c1h').value);
  const p = parseFloat(document.getElementById('c1p').value);
  if (!w || !h || !p) return;
  const pw = Math.round(w / p), ph = Math.round(h / p);
  const total = pw * ph;
  const dens = Math.round(total / ((w/1000) * (h/1000)));
  document.getElementById('r1res').textContent = `${pw} × ${ph} px`;
  document.getElementById('r1total').textContent = total.toLocaleString('ru') + ' пикс.';
  document.getElementById('r1dens').textContent = dens.toLocaleString('ru') + ' пикс./м²';
  document.getElementById('r1dist').textContent = (p * 1.0).toFixed(1) + ' м';
  document.getElementById('r1').classList.add('show');
}

function calcPower() {
  const area = parseFloat(document.getElementById('c2area').value);
  const type = document.getElementById('c2type').value;
  const load = parseFloat(document.getElementById('c2load').value) / 100;
  const map = {outdoor:450, indoor:300, rental:380, fine:500};
  const maxW = area * map[type], workW = maxW * load;
  document.getElementById('r2max').textContent  = Math.round(maxW).toLocaleString('ru') + ' Вт';
  document.getElementById('r2work').textContent = Math.round(workW).toLocaleString('ru') + ' Вт';
  document.getElementById('r2amp').textContent  = (workW / 220).toFixed(1) + ' А';
  document.getElementById('r2psu').textContent  = Math.ceil(workW / 300) + ' шт.';
  document.getElementById('r2kwh').textContent  = ((workW * 12) / 1000).toFixed(1) + ' кВт·ч';
  document.getElementById('r2').classList.add('show');
}

function calcPitch() {
  const dist = parseFloat(document.getElementById('c3dist').value);
  const mult = {indoor:1.0, outdoor:1.4, stage:0.9};
  const k = mult[document.getElementById('c3env').value];
  document.getElementById('r3pitch').textContent = `P${(dist / k).toFixed(1)} мм`;
  document.getElementById('r3max').textContent   = `P${(dist / (k * 0.7)).toFixed(1)} мм`;
  document.getElementById('r3_4k').textContent   = `P${(4000 / 3840).toFixed(2)} мм`;
  document.getElementById('r3').classList.add('show');
}

function calcCabinets() {
  const sw = parseFloat(document.getElementById('c4sw').value);
  const sh = parseFloat(document.getElementById('c4sh').value);
  const cw = parseFloat(document.getElementById('c4cw').value);
  const ch = parseFloat(document.getElementById('c4ch').value);
  const cols2 = Math.round(sw / cw), rows = Math.round(sh / ch);
  const rw = (cols2 * cw / 1000).toFixed(2), rh = (rows * ch / 1000).toFixed(2);
  document.getElementById('r4cw').textContent    = cols2 + ' шт.';
  document.getElementById('r4ch').textContent    = rows + ' шт.';
  document.getElementById('r4total').textContent = (cols2 * rows) + ' шт.';
  document.getElementById('r4real').textContent  = `${rw} × ${rh} м`;
  document.getElementById('r4area').textContent  = (rw * rh).toFixed(2) + ' м²';
  document.getElementById('r4').classList.add('show');
}
