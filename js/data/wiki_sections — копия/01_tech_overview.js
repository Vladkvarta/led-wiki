export const section = {
  id: "tech-overview",
  icon: "🌍",
  title: "Обзор технологии",
  content: `

        <div class="section-label">Как объяснить клиенту, что такое LED-экран?</div>
        <div class="card" style="margin-bottom: 20px;">
          <p><strong>LED-экран</strong> — это дисплей, который собирается из отдельных светодиодных блоков (модулей). В отличие от телевизоров, он не имеет ограничений по размеру и у него нет рамок между блоками.</p>
          <ul style="margin-top:12px; font-size: 14px; padding-left:16px;">
            <li><strong style="color:var(--good)">Плюс для клиента:</strong> Можно собрать экран любой формы (даже изогнутый) и размера (хоть на весь фасад здания).</li>
            <li><strong style="color:var(--good)">Плюс для клиента:</strong> Идеальная ремонтопригодность. Если часть экрана ломается, меняется один маленький блок, а не весь экран.</li>
            <li><strong style="color:var(--good)">Плюс для клиента:</strong> Идеально видно на ярком солнце (обычные телевизоры так не могут).</li>
          </ul>
        </div>

        <div class="section-label">Из чего состоит экран (что мы продаем в смете)</div>
        <div class="grid-3" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">1. LED-модуль</h4>
            <p style="font-size:13px; color:var(--text2);">Самая маленькая деталь (размером с небольшую плитку). На лицевой стороне напаяны светодиоды, на обратной — микросхемы.</p>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">2. Кабинет</h4>
            <p style="font-size:13px; color:var(--text2);">Металлический ящик, в который прикручиваются модули. Внутри него прячутся блоки питания и «мозги» (приемная карта).</p>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">3. Контроллер</h4>
            <p style="font-size:13px; color:var(--text2);">Главный пульт управления. Подключается к компьютеру клиента (по HDMI/DVI) и передает видео на кабинеты.</p>
          </div>
        </div>

        <div class="section-label">2 главных параметра для общения с клиентом</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4>📏 Шаг пикселя (Буква P)</h4>
            <p style="font-size:14px; margin-top:6px;">Расстояние между диодами в миллиметрах (Например: <strong>P2.5 = 2.5 мм</strong>).</p>
            <div style="margin-top:12px; font-size: 13px;">
              <p><strong>Как использовать в продажах:</strong></p>
              <ul style="margin-top:4px; padding-left:16px; color:var(--text2);">
                <li>Чем <strong>меньше</strong> цифра, тем <strong>дороже</strong> экран и лучше картинка вблизи.</li>
                <li><strong style="color:var(--text)">Быстрый расчет:</strong> Шаг пикселя = минимальное расстояние просмотра в метрах. <em>(Т.е. экран P3 клиенту будет комфортно смотреть минимум с 3 метров).</em></li>
              </ul>
            </div>
          </div>
          <div class="card">
            <h4>☀️ Яркость (Нит)</h4>
            <p style="font-size:14px; margin-top:6px;">Насколько экран способен перебить внешнее освещение.</p>
            <div style="margin-top:12px; font-size: 13px;">
              <p><strong>Как выбрать для клиента:</strong></p>
              <ul style="margin-top:4px; padding-left:16px; color:var(--text2);">
                <li><strong>В помещение (Indoor):</strong> 600–1500 нит. Больше нельзя — будет слепить людей.</li>
                <li><strong>На улицу (Outdoor):</strong> 5000–10000 нит. Если продать меньше — днем экран будет казаться выключенным.</li>
              </ul>
            </div>
          </div>
        </div>
    
  `
};
