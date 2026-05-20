import { wikiData } from './data/wiki_data.js';

let currentChapterIndex = 0;

export function initWiki() {
  renderSidebar();
  loadChapter(0);
  
  // Attach search function to window so the HTML input can call it
  window.doSearch = handleWikiSearch;
}

function renderSidebar() {
  const sidebar = document.getElementById('wikiSidebar');
  if (!sidebar) return;
  
  sidebar.innerHTML = '';
  
  wikiData.forEach((chapter, index) => {
    const btn = document.createElement('button');
    btn.className = `wiki-nav-item ${index === currentChapterIndex ? 'active' : ''}`;
    btn.onclick = () => loadChapter(index);
    
    btn.innerHTML = `
      <span class="wiki-nav-icon">${chapter.icon}</span>
      <span>${chapter.title}</span>
    `;
    
    sidebar.appendChild(btn);
  });
}

function loadChapter(index) {
  if (index < 0 || index >= wikiData.length) return;
  currentChapterIndex = index;
  
  const chapter = wikiData[index];
  
  // Update UI
  const contentArea = document.getElementById('wikiContentArea');
  if (contentArea) {
    contentArea.innerHTML = `
      <div class="wiki-chapter-title">
        <div class="wiki-chapter-icon">${chapter.icon}</div>
        ${chapter.title}
      </div>
      <div class="wiki-chapter-body">
        ${chapter.content}
      </div>
    `;
  }
  
  // Update sidebar active state
  document.querySelectorAll('.wiki-nav-item').forEach((btn, i) => {
    if (i === index) btn.classList.add('active');
    else btn.classList.remove('active');
  });
  
  updatePagination();
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function updatePagination() {
  const prevBtn = document.getElementById('wikiPrevBtn');
  const nextBtn = document.getElementById('wikiNextBtn');
  
  if (!prevBtn || !nextBtn) return;
  
  if (currentChapterIndex > 0) {
    prevBtn.classList.remove('hidden');
    prevBtn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
      Назад: ${wikiData[currentChapterIndex - 1].title}
    `;
    prevBtn.onclick = () => loadChapter(currentChapterIndex - 1);
  } else {
    prevBtn.classList.add('hidden');
  }
  
  if (currentChapterIndex < wikiData.length - 1) {
    nextBtn.classList.remove('hidden');
    nextBtn.innerHTML = `
      Далее: ${wikiData[currentChapterIndex + 1].title}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    `;
    nextBtn.onclick = () => loadChapter(currentChapterIndex + 1);
  } else {
    nextBtn.classList.add('hidden');
  }
}

function handleWikiSearch(q) {
  const query = q.toLowerCase();
  
  // Very simple search: filter the sidebar
  const sidebarButtons = document.querySelectorAll('.wiki-nav-item');
  
  wikiData.forEach((chapter, index) => {
    const btn = sidebarButtons[index];
    const matchTitle = chapter.title.toLowerCase().includes(query);
    const matchContent = chapter.content.toLowerCase().includes(query);
    
    if (matchTitle || matchContent || query.length < 2) {
      btn.style.display = 'flex';
      
      // If we typed something and it matches content, we might auto-select the first one
      if (query.length >= 2 && !window._firstFound) {
        window._firstFound = true;
        loadChapter(index);
        
        // Highlight in content
        setTimeout(() => {
          const body = document.querySelector('.wiki-chapter-body');
          if (body) {
            clearHighlights(body);
            highlight(body, query);
          }
        }, 50);
      }
    } else {
      btn.style.display = 'none';
    }
  });
  
  if (query.length < 2) {
    window._firstFound = false;
    const body = document.querySelector('.wiki-chapter-body');
    if (body) clearHighlights(body);
  }
}

function highlight(el, q) {
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  
  nodes.forEach(node => {
    if (node.parentNode.nodeName === 'MARK' || node.parentNode.nodeName === 'SCRIPT') return;
    
    const idx = node.nodeValue.toLowerCase().indexOf(q);
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

function clearHighlights(el) {
  el.querySelectorAll('mark').forEach(m => {
    const parent = m.parentNode;
    parent.replaceChild(document.createTextNode(m.textContent), m);
    parent.normalize();
  });
}
