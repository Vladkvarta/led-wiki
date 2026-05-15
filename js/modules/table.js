import { DB } from '../data/database.js';
import { columns, presets } from './constants.js';
import { state } from './state.js';
import { fmtCell } from './utils.js';
import { showTT, hideTT } from './tooltip.js';

export function initTable() {
    renderTable();
    renderGlossaryLegend();

    document.getElementById('ctrlSearch').addEventListener('input', applyFilters);
    document.getElementById('fManufacturer').addEventListener('change', applyFilters);

    document.getElementById('togHDR').addEventListener('click', () => toggleFilter('HDR'));
    document.getElementById('togCloud').addEventListener('click', () => toggleFilter('Cloud'));

    document.querySelector('.reset-btn').addEventListener('click', resetFilters);
}

function visibleCols() {
  // Simplified for KB
  const keys = ['model', 'manufacturer', 'type', 'maxPixels', 'fps', 'refreshHz', 'hdr', 'cloudPlatform', 'price'];
  return columns.filter(c => keys.includes(c.key));
}

export function renderTable() {
  const cols = visibleCols();
  const data = getFiltered();

  const head = document.getElementById('ctrlHead');
  head.innerHTML = '<tr>' + cols.map(col => {
    const sico = col.sortable ? (col.key === state.sortKey ? (state.sortDir === 1 ? '<span class="sort-ico asc">▲</span>' : '<span class="sort-ico desc">▼</span>') : '<span class="sort-ico">⇅</span>') : '';
    const label = col.gk ? `<span class="th-term" data-gk="${col.gk}">${col.label}</span>` : col.label;
    const style = col.sortable ? 'style="cursor:pointer"' : '';
    return `<th ${style} data-key="${col.key}">${label} ${sico}</th>`;
  }).join('') + '</tr>';

  head.querySelectorAll('th').forEach(th => {
      const key = th.dataset.key;
      const col = columns.find(c => c.key === key);
      if (col && col.sortable) th.addEventListener('click', () => sortBy(key));
      const term = th.querySelector('.th-term');
      if (term) {
          term.addEventListener('mouseenter', (e) => showTT(e, term.dataset.gk));
          term.addEventListener('mouseleave', hideTT);
      }
  });

  const body = document.getElementById('ctrlBody');
  if (!data.length) {
    body.innerHTML = `<tr><td colspan="${cols.length}"><div class="no-results">Ничего не найдено</div></td></tr>`;
  } else {
    body.innerHTML = data.map(r => {
      // Use priceUSD from DB
      const rowData = {...r, price: r.priceUSD * DB.config.usdRate};
      return '<tr>' + cols.map(col => `<td>${fmtCell(col, rowData[col.key])}</td>`).join('') + '</tr>';
    }).join('');
  }
}

function getFiltered() {
  const q    = document.getElementById('ctrlSearch').value.toLowerCase().trim();
  const mfr  = document.getElementById('fManufacturer').value;

  return DB.controllers.filter(r => {
    if (q && !(r.manufacturer + ' ' + r.model + ' ' + r.type).toLowerCase().includes(q)) return false;
    if (mfr && r.manufacturer !== mfr) return false;
    if (state.activeFilters.hdr && !r.hdr) return false;
    if (state.activeFilters.cloud && (r.cloudPlatform === '—' || !r.cloudPlatform)) return false;
    return true;
  }).sort((a, b) => {
    const av = a[state.sortKey], bv = b[state.sortKey];
    if (av === null || av === undefined) return 1;
    if (bv === null || bv === undefined) return -1;
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
  const map = {HDR:'hdr', Cloud:'cloud'};
  const idMap = {HDR:'togHDR', Cloud:'togCloud'};
  const k = map[name];
  state.activeFilters[k] = !state.activeFilters[k];
  document.getElementById(idMap[name]).classList.toggle('on-' + k.toLowerCase());
  renderTable();
}

function resetFilters() {
  document.getElementById('ctrlSearch').value = '';
  document.getElementById('fManufacturer').value = '';
  state.activeFilters = {hdr:false, cloud:false};
  ['togHDR','togCloud'].forEach(id => {
    document.getElementById(id).classList.remove('on-' + id.replace('tog','').toLowerCase());
  });
  renderTable();
}

function renderGlossaryLegend() {
  const el = document.getElementById('glossaryLegend');
  el.innerHTML = Object.entries(DB.glossary).map(([k, g]) =>
    `<span class="glossary-item" data-gk="${k}">${g.title}</span>`
  ).join('');

  el.querySelectorAll('.glossary-item').forEach(item => {
      item.style.cssText = "padding:4px 10px;background:#f0f2f5;border:1px solid #d1d9e6;border-radius:20px;font-size:11px;cursor:help;color:#576574;border-bottom:1.5px dashed #8395a7;";
      item.addEventListener('mouseenter', (e) => showTT(e, item.dataset.gk));
      item.addEventListener('mouseleave', hideTT);
  });
}
