const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Need to start a server or open file directly if allowed, but better start a server.
  // For now let's just try to check if it's there.
  await page.goto('file://' + process.cwd() + '/index.html');

  // Trigger calculation
  await page.selectOption('#location', 'indoor');
  await page.fill('#screenW', '3000');
  await page.fill('#screenH', '2000');

  // Wait for modules to load and select one
  await page.waitForTimeout(500);
  const matrixOptions = await page.$$eval('#matrixSel option', options => options.map(o => o.value));
  console.log('Matrix options:', matrixOptions);

  if (matrixOptions.length > 1) {
    await page.selectOption('#matrixSel', matrixOptions[1]);
  }

  const ctrlOptions = await page.$$eval('#ctrlSel option', options => options.map(o => o.value));
  console.log('Ctrl options:', ctrlOptions);
  if (ctrlOptions.length > 1) {
    await page.selectOption('#ctrlSel', ctrlOptions[1]);
  }

  await page.waitForTimeout(500);

  const techBlockContent = await page.innerText('#techBlock');
  console.log('Tech block content length:', techBlockContent.length);

  const estBlockContent = await page.innerText('#estBlock');
  console.log('Est block content length:', estBlockContent.length);

  if (techBlockContent.includes('Реальный размер') && estBlockContent.includes('ИТОГО К ОПЛАТЕ')) {
    console.log('SUCCESS: Calculation works!');
  } else {
    console.log('FAILURE: Calculation failed!');
    console.log('Tech:', techBlockContent);
    console.log('Est:', estBlockContent);
  }

  await browser.close();
})();
