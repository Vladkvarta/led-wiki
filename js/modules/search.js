export function initSearch() {
  const globalSearchInput = document.getElementById('globalSearch');
  if (globalSearchInput) {
    globalSearchInput.addEventListener('input', (e) => doSearch(e.target.value));
  }
}

export function doSearch(q) {
  clearHighlights();
  if (q.length < 2) return;
  const sections = document.querySelectorAll('.section');
  let found = false;
  sections.forEach(sec => {
    if (sec.innerText.toLowerCase().includes(q.toLowerCase())) {
      if (!found) {
        const tabId = sec.id.replace('tab-','');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        const btn = document.querySelector(`[data-tab="${tabId}"]`);
        if (btn) btn.classList.add('active');
        sec.classList.add('active');
        found = true;
      }
      highlight(sec, q);
    }
  });
}

function highlight(el, q) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const idx = node.nodeValue.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return;
    const span = document.createElement('span');
    const before = document.createTextNode(node.nodeValue.substring(0, idx));
    const mark = document.createElement('mark');
    mark.textContent = node.nodeValue.substring(idx, idx + q.length);
    const after = document.createTextNode(node.nodeValue.substring(idx + q.length));
    span.appendChild(before); span.appendChild(mark); span.appendChild(after);
    node.parentNode.replaceChild(span, node);
  });
}

function clearHighlights() {
  document.querySelectorAll('mark').forEach(m => {
    const p = m.parentNode;
    if (p) {
        p.replaceChild(document.createTextNode(m.textContent), m);
        p.normalize();
    }
  });
}
