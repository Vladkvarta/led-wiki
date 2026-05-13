export const state = {
  sortKey: 'price',
  sortDir: 1,
  visibleGroups: new Set(['core','performance','software','commercial']),
  activeFilters: {hdr:false, genlock:false, cloud:false, latency:false},
  activePreset: null,
};
