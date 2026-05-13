import { glossary } from '../data/glossary.js';

const tt = document.getElementById('tt');
const tti = document.getElementById('ttInner');
let ttKey = null;

export function initTooltip() {
    document.addEventListener('mousemove', e => { if (ttKey) moveTT(e); });
}

export function showTT(e, key) {
  const g = glossary[key];
  if (!g) return;
  ttKey = key;
  tti.innerHTML = `<div class="tt-title">${g.title}</div><div class="tt-desc">${g.description}</div><div class="tt-imp">${g.importance}</div>`;
  tt.style.display = 'block';
  moveTT(e);
}

function moveTT(e) {
  const x = e.clientX + 14, y = e.clientY + 10;
  const tw = 280, th = tt.offsetHeight || 120;
  const fx = x + tw > window.innerWidth ? e.clientX - tw - 10 : x;
  const fy = y + th > window.innerHeight ? e.clientY - th - 10 : y;
  tt.style.left = fx + 'px';
  tt.style.top  = fy + 'px';
}

export function hideTT() {
    tt.style.display = 'none';
    ttKey = null;
}
