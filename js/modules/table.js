import { controllers } from '../data/controllers.js';
import { glossary } from '../data/glossary.js';
import { columns, presets } from './constants.js';
import { state } from './state.js';
import { fmtCell } from './utils.js';
import { showTT, hideTT } from './tooltip.js';

export function initTable() {
    renderTable();
    renderGlossaryLegend();

    document.getElementById('ctrlSearch').addEventListener('input', applyFilters);
    document.getElementById('fManufacturer').addEventListener('change', applyFilters);
    document.getElementById('fSegment').addEventListener('change', applyFilters);
    document.getElementById('fPrice').addEventListener('change', applyFilters);

    document.getElementById('togHDR').addEventListener('click', () => toggleFilter('HDR'));
    document.getElementById('togGenlock').addEventListener('click', () => toggleFilter('Genlock'));
    document.getElementById('togCloud').addEventListener('click', () => toggleFilter('Cloud'));
    document.getElementById('togLatency').addEventListener('click', () => toggleFilter('Latency'));

    document.querySelector('.reset-btn').addEventListener('click', resetFilters);

    document.querySelectorAll('.preset-btn').forEach(btn => {
        const presetName = btn.dataset.preset;
        if (presetName) {
            btn.addEventListener('click', () => applyPreset(presetName));
        }
    });

    document.querySelectorAll('.colgrp-btn').forEach(btn => {
        const grp = btn.dataset.grp;
        btn.addEventListener('click', () => toggleColGroup(btn, grp));
    });

    document.querySelector('.export-btn').addEventListener('click', exportCSV);
}

function visibleCols() {
  return columns.filter(c => state.visibleGroups.has(c.group) || c.group === 'core');
}

export function renderTable() {
  const cols = visibleCols();
  const data = getFiltered();

  // HEAD
  const head = document.getElementById('ctrlHead');
  head.innerHTML = '<tr>' + cols.map(col => {
    const sico = col.sortable ? (col.key === state.sortKey ? (state.sortDir === 1 ? '<span class="sort-ico asc">▲</span>' : '<span class="sort-ico desc">▼</span>') : '<span class="sort-ico">⇅</span>') : '';
    const label = col.gk
      ? `<span class="th-term" data-gk="${col.gk}">${col.label}</span>`
      : col.label;
    const style = col.sortable ? 'style="cursor:pointer"' : '';
    return `<th ${style} data-key="${col.key}">${label} ${sico}</th>`;
  }).join('') + '</tr>';

  // Add event listeners to headers
  head.querySelectorAll('th').forEach(th => {
      const key = th.dataset.key;
      const col = columns.find(c => c.key === key);
      if (col && col.sortable) {
          th.addEventListener('click', () => sortBy(key));
      }
      const term = th.querySelector('.th-term');
      if (term) {
          term.addEventListener('mouseenter', (e) => showTT(e, term.dataset.gk));
          term.addEventListener('mouseleave', hideTT);
      }
  });

  // BODY
  const body = document.getElementById('ctrlBody');
  if (!data.length) {
    body.innerHTML = `<tr><td colspan="${cols.length}"><div class="no-results">Нет моделей по заданным фильтрам. Сбросьте часть условий.</div></td></tr>`;
  } else {
    body.innerHTML = data.map(r => {
      return '<tr>' + cols.map(col => `<td>${fmtCell(col, r[col.key])}</td>`).join('') + '</tr>';
    }).join('');
  }

  document.getElementById('ctrlCount').textContent = `${data.length} из ${controllers.length} моделей`;
}

function getFiltered() {
  const q    = document.getElementById('ctrlSearch').value.toLowerCase().trim();
  const mfr  = document.getElementById('fManufacturer').value;
  const seg  = document.getElementById('fSegment').value;
  const priceRange = document.getElementById('fPrice').value;

  return controllers.filter(r => {
    if (q && !(r.manufacturer + ' ' + r.model + ' ' + r.type + ' ' + r.bestUse).toLowerCase().includes(q)) return false;
    if (mfr && r.manufacturer !== mfr) return false;
    if (seg && r.segment !== seg) return false;
    if (priceRange) {
      const [lo, hi] = priceRange.split('-').map(Number);
      if (r.price < lo || r.price > hi) return false;
    }
    if (state.activeFilters.hdr     && !r.hdr) return false;
    if (state.activeFilters.genlock && !r.genlock) return false;
    if (state.activeFilters.cloud   && (r.cloudPlatform === '—' || !r.cloudPlatform)) return false;
    if (state.activeFilters.latency && r.latency !== 'low') return false;
    return true;
  }).sort((a, b) => {
    const av = a[state.sortKey], bv = b[state.sortKey];
    if (av === null || av === undefined) return 1;
    if (bv === null || bv === undefined) return -1;
    if (typeof av === 'boolean') return (av === bv ? 0 : av ? -1 : 1) * state.sortDir;
    if (typeof av === 'string') return av.localeCompare(bv) * state.sortDir;
    return (av - bv) * state.sortDir;
  });
}

function sortBy(key) {
  if (state.sortKey === key) state.sortDir *= -1;
  else { state.sortKey = key; state.sortDir = 1; }
  renderTable();
}

function applyFilters() { renderTable(); }

function toggleFilter(name) {
  const map = {HDR:'hdr', Genlock:'genlock', Cloud:'cloud', Latency:'latency'};
  const classMap = {HDR:'on-hdr', Genlock:'on-genlock', Cloud:'on-cloud', Latency:'on-latency'};
  const idMap = {HDR:'togHDR', Genlock:'togGenlock', Cloud:'togCloud', Latency:'togLatency'};
  const k = map[name];
  state.activeFilters[k] = !state.activeFilters[k];
  const btn = document.getElementById(idMap[name]);
  btn.className = 'toggle-chip' + (state.activeFilters[k] ? ' ' + classMap[name] : '');
  renderTable();
}

function resetFilters() {
  document.getElementById('ctrlSearch').value = '';
  document.getElementById('fManufacturer').value = '';
  document.getElementById('fSegment').value = '';
  document.getElementById('fPrice').value = '';
  state.activeFilters = {hdr:false, genlock:false, cloud:false, latency:false};
  ['togHDR','togGenlock','togCloud','togLatency'].forEach(id => {
    document.getElementById(id).className = 'toggle-chip';
  });
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active-preset'));
  state.activePreset = null;
  renderTable();
}

function applyPreset(name) {
  resetFilters();
  const p = presets[name];
  if (!p) return;
  if (p.segment !== undefined) document.getElementById('fSegment').value = p.segment;
  if (p.manufacturer) document.getElementById('fManufacturer').value = p.manufacturer;
  if (p.q) document.getElementById('ctrlSearch').value = p.q;
  if (p.hdr) { state.activeFilters.hdr = true; document.getElementById('togHDR').className = 'toggle-chip on-hdr'; }
  if (p.genlock) { state.activeFilters.genlock = true; document.getElementById('togGenlock').className = 'toggle-chip on-genlock'; }

  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active-preset'));
  const activeBtn = Array.from(document.querySelectorAll('.preset-btn')).find(btn => btn.dataset.preset === name);
  if (activeBtn) activeBtn.classList.add('active-preset');

  state.activePreset = name;
  renderTable();
}

function toggleColGroup(btn, grp) {
  if (grp === 'core') return;
  if (state.visibleGroups.has(grp)) {
    state.visibleGroups.delete(grp);
    btn.classList.remove('active');
  } else {
    state.visibleGroups.add(grp);
    btn.classList.add('active');
  }
  renderTable();
}

function exportCSV() {
  const cols = visibleCols();
  const data = getFiltered();
  const hdr = cols.map(c => '"' + c.label + '"').join(',');
  const rows = data.map(r => cols.map(c => {
    const v = r[c.key];
    if (v === null || v === undefined) return '""';
    return '"' + String(v).replace(/"/g, '""') + '"';
  }).join(','));
  const csv = [hdr, ...rows].join('\n');
  const blob = new Blob(['\uFEFF' + csv], {type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'led-controllers.csv'; a.click();
  URL.revokeObjectURL(url);
}

function renderGlossaryLegend() {
  const el = document.getElementById('glossaryLegend');
  el.innerHTML = Object.entries(glossary).map(([k, g]) =>
    `<span class="glossary-item" data-gk="${k}">${g.title}</span>`
  ).join('');

  el.querySelectorAll('.glossary-item').forEach(item => {
      item.style.cssText = "padding:4px 10px;background:var(--bg2);border:1px solid var(--border);border-radius:20px;font-size:11px;cursor:help;color:var(--text2);border-bottom:1.5px dashed var(--text3);";
      item.addEventListener('mouseenter', (e) => showTT(e, item.dataset.gk));
      item.addEventListener('mouseleave', hideTT);
  });
}
