import { initTabs } from './modules/tabs.js';
import { initSearch } from './modules/search.js';
import { initTable } from './modules/table.js';
import { initCalculators } from './modules/calculators.js';
import { initTooltip } from './modules/tooltip.js';

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initSearch();
    initTable();
    initCalculators();
    initTooltip();

    // Print button
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
});
