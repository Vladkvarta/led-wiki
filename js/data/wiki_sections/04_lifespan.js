export const section = {
  id: "lifespan",
  icon: "⏳",
  title: "Деградация и Срок службы",
  content: `

        <div class="info-box info-blue" style="margin-bottom:20px">
          <strong>Инженерная сводка:</strong> Заявленные производителями 100 000 часов (11.4 года) — это лабораторный расчет деградации одиночного эпитаксиального кристалла при идеальной температуре p-n перехода (25°C) и стабильном токе. В реальных сборках срок жизни полотна определяет не сам диод, а качество обвязки (БП, охлаждение) и агрессивность среды.
        </div>

        <div class="section-label">Стандарт L70: Метрика старения</div>
        <div class="card" style="margin-bottom: 24px;">
          <p><strong>Стандарт L70 (Lumen Maintenance):</strong> Индустриальный стандарт, определяющий время работы диода до падения его светового потока до 70% от первоначального номинала.</p>
          <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
            <li><strong>Физика процесса:</strong> По истечении срока L70 экран не перегорает. Происходит необратимая термическая деградация люминофора и помутнение инкапсулирующей линзы. Экран теряет 30% яркости.</li>
            <li><strong>Проектирование Headroom (Запаса яркости):</strong> Если экран работает на 100% мощности, деградация до L70 наступает экстремально быстро. Проектирование запаса яркости (установка 7000 нит там, где достаточно 5000) позволяет эксплуатировать экран на 60-70% мощности. Это экспоненциально замедляет старение кристаллов.</li>
          </ul>
        </div>

        <div class="section-label">Критические факторы отказа (Точки отказа системы)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-danger">
            <h4 style="font-size:15px; margin-bottom:8px;">🌡 Термодеградация (Junction Temp)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Суть:</strong> Работа кристалла при температуре p-n перехода выше допустимой (обычно > 65-70°C).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Последствия:</strong> Повышение рабочей температуры на каждые 10°C сокращает ресурс полупроводника вдвое.</li>
              <li><strong>Инженерное решение:</strong> Интеграция систем активного климат-контроля (HVAC) для Indoor-видеостен и расчет приточно-вытяжной вентиляции в закрытых кабинетах Outdoor-экранов.</li>
            </ul>
          </div>
          <div class="card card-warn">
            <h4 style="font-size:15px; margin-bottom:8px;">💡 Токовая перегрузка (Overdrive)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Суть:</strong> Постоянная эксплуатация матрицы на 100% мощности (отсутствие PWM-диммирования).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Последствия:</strong> Максимальный ток вызывает постоянный перегрев, ускоряя деградацию.</li>
              <li><strong>Инженерное решение:</strong> Обязательная интеграция ALS (Ambient Light Sensor — датчик освещенности) для организации замкнутого цикла управления яркостью. Ночью яркость падает, диоды остывают, ресурс увеличивается на 30-40%.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">💧 Электрохимическая коррозия</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Суть:</strong> Нарушение герметизации слоев компаунда или разъемов, образование конденсата.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Последствия:</strong> Окисление медных проводников (Wire Bonding), короткое замыкание на ножках IC-драйверов, массовое появление «битых» пикселей.</li>
              <li><strong>Инженерное решение:</strong> Строгое соблюдение стандартов IP65/IP68 для Outdoor. Регулярная очистка фильтров охлаждения от токопроводящей пыли.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">⚡ Пульсации тока (Ripple Current)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Суть:</strong> Использование БП с высоким коэффициентом пульсаций и без активного PFC (Power Factor Correction).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Последствия:</strong> Микроскачки напряжения пробивают структуру кристалла или выжигают принимающие IC-чипы (на экране появляются целые черные квадраты).</li>
              <li><strong>Инженерное решение:</strong> Использование индустриальных источников питания (Mean Well, CZCL) с защитой от OVP (перенапряжение) и OCP (перегрузка по току).</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Расчетный ресурс (MTBF) при реальной эксплуатации</div>
        <div class="table-wrap" style="margin-bottom:24px">
          <table>
            <thead><tr><th>Комплектация</th><th>Среда</th><th>Реальный срок (до L70)</th><th>Ключевой фактор отказоустойчивости</th></tr></thead>
            <tbody>
              <tr><td class="td-good">Premium (Золотой бондинг, Tier-1 БП)</td><td>Outdoor (Улица)</td><td class="td-good">8–10 лет</td><td>Наличие ALS-датчика + Регулярное ТО систем охлаждения</td></tr>
              <tr><td>Standard (Золотой бондинг, Tier-2 БП)</td><td>Outdoor (Улица)</td><td class="td-good">5–7 лет</td><td>Наличие ALS-датчика</td></tr>
              <tr><td class="td-bad">Budget (Медный бондинг, базовый БП)</td><td>Outdoor (Улица)</td><td class="td-bad">2–3 года</td><td>Подверженность термошокам (разрыв медных нитей)</td></tr>
              <tr><td class="td-good">Любая (Золото/Медь)</td><td>Indoor (Климат-контроль)</td><td class="td-good">7–10+ лет</td><td>Стабильность температуры в помещении (работающий HVAC)</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-box info-green">
          <strong>Инженерная матрица (Rules of Thumb):</strong>
          <br>• <strong>Формула максимизации TCO:</strong> <code>Индустриальные БП + ALS (Датчик освещенности) + Запас по яркости 30%</code>. Эта связка позволяет экрану перешагнуть порог в 7 лет без видимой деградации.
          <br>• <strong>Регламент ТО:</strong> Заявленный ресурс достижим только при условии регулярного технического обслуживания (чистка кулеров, проверка герметичности контактов). Отсутствие ТО в Outdoor-проектах снижает расчетный срок службы на 40-50% из-за накапливаемого перегрева.
        </div>
    
  `
};