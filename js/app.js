import { initWiki } from './wiki.js';
import { DB } from './data/database.js'; // The calculator logic will also be initialized, but we can leave it in index.html for now or move it too.

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });

  // 2. Initialize Wiki Layout
  initWiki();
});
