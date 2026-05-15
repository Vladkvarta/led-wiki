import { DB } from '../data/database.js';

export function initTooltip() {
  // Tooltips are triggered by other modules
}

export function showTT(e, gk) {
  const g = DB.glossary[gk];
  if (!g) return;
  const tt = document.getElementById('tt');
  const inner = document.getElementById('ttInner');
  inner.innerHTML = `
    <div class="tt-title">${g.title}</div>
    <div class="tt-desc">${g.description}</div>
    <div class="tt-imp">${g.importance}</div>
  `;
  tt.style.display = 'block';
  tt.style.left = (e.pageX + 15) + 'px';
  tt.style.top = (e.pageY + 15) + 'px';
}

export function hideTT() {
  const tt = document.getElementById('tt');
  if (tt) tt.style.display = 'none';
}
