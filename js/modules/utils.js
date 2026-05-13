export function fmtCell(col, val) {
  if (val === null || val === undefined || val === '') return '<span style="color:var(--text3)">—</span>';
  if (col.fmt === 'bool') return val ? '<span class="cv-bool-yes">✓</span>' : '<span class="cv-bool-no">—</span>';
  if (col.fmt === 'hdr')  return val ? '<span class="cv-hdr">HDR</span>' : '<span class="cv-bool-no">—</span>';
  if (col.fmt === 'genlock') return val ? '<span class="cv-genlock">GL</span>' : '<span class="cv-bool-no">—</span>';
  if (col.fmt === 'latency') {
    if (val === 'low') return '<span class="cv-latency-low">Low</span>';
    if (val === 'medium') return '<span class="cv-latency-med">Med</span>';
    return `<span>${val}</span>`;
  }
  if (col.fmt === 'stars') {
    let s = '';
    for (let i = 0; i < 5; i++) s += i < val ? '★' : '☆';
    return `<span class="cv-stars">${s}</span>`;
  }
  if (col.fmt === 'mpx') {
    const m = (val / 1000000).toFixed(1);
    return `<span class="cv-mpx">${m}M</span>`;
  }
  if (col.fmt === 'price') {
    const v = val;
    let cls = v > 5000 ? 'cv-price-high' : v > 1500 ? 'cv-price-mid' : 'cv-price-low';
    return `<span class="${cls}">$${v.toLocaleString('ru-RU')}</span>`;
  }
  if (col.key === 'segment') {
    const m = {'Professional':'cv-segment-professional','Broadcast':'cv-segment-broadcast','XR / Virtual':'cv-segment-xr','Standard':'cv-segment-standard','Budget':'cv-segment-budget'};
    const cls = m[val] || '';
    return cls ? `<span class="${cls}">${val}</span>` : val;
  }
  return val;
}
