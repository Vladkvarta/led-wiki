export const section = {
  id: "comparison-tables",
  icon: "📊",
  title: "Сравнительные таблицы",
  content: `

        <div class="section-label">Сравнение технологий инкапсуляции</div>
        <div class="table-wrap" style="margin-bottom:20px">
          <table>
            <thead><tr><th>Параметр</th><th>SMD</th><th>COB</th><th>GOB</th><th>Mini LED</th></tr></thead>
            <tbody>
              <tr><td>Мин. шаг пикселя</td><td>P0.9</td><td class="td-good">P0.6</td><td>P0.9</td><td class="td-good">P0.4</td></tr>
              <tr><td>Защита от влаги</td><td class="td-warn">IP40 (typ)</td><td class="td-good">IP65</td><td class="td-good">IP65</td><td class="td-warn">IP40</td></tr>
              <tr><td>Механическая защита</td><td class="td-bad">Низкая</td><td class="td-good">Высокая</td><td>Средняя</td><td class="td-bad">Низкая</td></tr>
              <tr><td>Ремонтопригодность</td><td class="td-good">Высокая</td><td class="td-bad">Низкая</td><td>Средняя</td><td class="td-good">Высокая</td></tr>
              <tr><td>Угол обзора</td><td class="td-good">160°</td><td>150°</td><td>155°</td><td class="td-good">160°</td></tr>
              <tr><td>Срок службы (ч)</td><td>60 000</td><td class="td-good">100 000</td><td>80 000</td><td>80 000</td></tr>
            </tbody>
          </table>
        </div>
        <div class="section-label">Сравнение контроллеров</div>
        <div class="table-wrap" style="margin-bottom:20px">
          <table>
            <thead><tr><th>Производитель</th><th>Сегмент</th><th>Макс. пикс.</th><th>Облако</th><th>Refresh</th><th>HDR</th><th>Цена</th></tr></thead>
            <tbody>
              <tr><td class="td-key">Novastar MCTRL4K</td><td>Professional</td><td>10.4 млн</td><td class="td-good">VNNOX</td><td class="td-good">3840 Hz</td><td class="td-good">✓</td><td class="td-warn">Высокая</td></tr>
              <tr><td class="td-key">Novastar VX1000</td><td>Mid-Pro</td><td>2.3 млн</td><td class="td-good">VNNOX</td><td>1920 Hz</td><td class="td-good">✓</td><td>Средняя</td></tr>
              <tr><td class="td-key">Colorlight X16</td><td>Professional</td><td>8 млн</td><td>iCloud</td><td class="td-good">3840 Hz</td><td class="td-good">✓</td><td class="td-warn">Высокая</td></tr>
              <tr><td class="td-key">Huidu HD-VP410</td><td>All-in-one</td><td>2.6 млн</td><td class="td-good">HD Cloud</td><td>1920 Hz</td><td>—</td><td class="td-good">Низкая</td></tr>
              <tr><td class="td-key">Linsn TS802D</td><td>Budget</td><td>2.3 млн</td><td class="td-bad">Нет</td><td>960 Hz</td><td class="td-bad">—</td><td class="td-good">Низкая</td></tr>
              <tr><td class="td-key">Brompton Tessera SX4</td><td>Broadcast</td><td>8.3 млн</td><td class="td-bad">Нет</td><td class="td-good">7680 Hz</td><td class="td-good">✓</td><td class="td-bad">Очень высокая</td></tr>
            </tbody>
          </table>
        </div>
        <div class="section-label">Матрица выбора решения по задаче</div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Задача / Объект</th><th>Шаг</th><th>Технология</th><th>Контроллер</th><th>Управление</th><th>IP</th></tr></thead>
            <tbody>
              <tr><td class="td-key">Билборд / фасад</td><td>P6–P10</td><td>SMD Outdoor</td><td>Novastar / Linsn</td><td>Cloud / 4G</td><td>IP65+</td></tr>
              <tr><td class="td-key">Аренда / концерт</td><td>P2.5–P4</td><td>SMD / COB</td><td>Colorlight X</td><td>Local</td><td>IP40–IP54</td></tr>
              <tr><td class="td-key">ТВ-студия / broadcast</td><td>P1.5–P2.5</td><td>SMD / COB</td><td>Brompton / Novastar</td><td>Local</td><td>IP30</td></tr>
              <tr><td class="td-key">Торговый центр</td><td>P2–P4</td><td>SMD Indoor</td><td>Novastar VX / Huidu</td><td>Cloud</td><td>IP30–IP40</td></tr>
              <tr><td class="td-key">Стадион / периметр</td><td>P6–P16</td><td>SMD Outdoor</td><td>Novastar / Colorlight</td><td>Local</td><td>IP65</td></tr>
              <tr><td class="td-key">Виртуальная студия XR</td><td>P1.2–P2</td><td>SMD / COB</td><td>Megapixel / Brompton</td><td>Local</td><td>IP30</td></tr>
            </tbody>
          </table>
        </div>
    
  `
};
