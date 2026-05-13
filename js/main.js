import { initTabs } from './modules/tabs.js';
import { initSearch } from './modules/search.js';
import { initTable } from './modules/table.js';
import { initTooltip } from './modules/tooltip.js';
import { initEstimateCalculator } from './modules/estimateCalculator.js';

document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    initSearch();
    initTable();
    initTooltip();
    initEstimateCalculator();

    // Print button
    const printBtn = document.querySelector('.print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
});
