export const section = {
  id: "tech-overview",
  icon: "🌍",
  title: "Обзор технологии и архитектуры",
  content: `

        <div class="section-label">Архитектура: Как устроен LED-экран</div>
        <div class="card" style="margin-bottom: 20px;">
          <p><strong>LED-экран</strong> — это модульный дисплей, не имеющий ограничений по разрешению и физическому размеру. Строится по принципу конструктора.</p>
          <ul style="margin-top:12px; font-size: 14px; padding-left:16px;">
            <li><strong>Бесшовность (Seamless):</strong> В отличие от видеостен на базе LCD-панелей, LED-экран не имеет рамок. Картинка абсолютно монолитна.</li>
            <li><strong>SMD vs COB (Тип диодов):</strong> 
              <br><span style="color:var(--text2); font-size: 13px;"><em>SMD (Surface-Mount Device)</em> — классика, диоды припаяны на плату. <em>COB (Chip-on-Board)</em> — чипы залиты единым слоем компаунда. <strong>Выгода:</strong> COB дает абсолютную антивандальность, защиту от влаги и идеальный глубокий черный цвет. Продаем в VIP-переговорные и зоны высокой проходимости.</span>
            </li>
            <li><strong>Обслуживание (Front / Rear Maintenance):</strong> 
              <br><span style="color:var(--text2); font-size: 13px;"><em>Front (Фронтальное)</em> — модули снимаются спереди магнитной присоской. <em>Rear (Тыловое)</em> — нужен доступ за экраном. <strong>Выгода:</strong> Фронтальное обслуживание экономит полезную площадь помещения, экран можно вешать вплотную к стене.</span>
            </li>
          </ul>
        </div>

        <div class="section-label">Аппаратная часть (Что мы закладываем в смету)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">1. LED-модуль</h4>
            <p style="font-size:13px; color:var(--text2);">Базовый кирпичик экрана. Содержит диоды, маску и микросхемы драйверов (IC). При выходе из строя диода меняется за 2 минуты без демонтажа экрана.</p>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">2. Кабинет (Cabinet)</h4>
            <p style="font-size:13px; color:var(--text2);">Структурный блок, объединяющий модули. <br><strong>Die-cast Aluminum (Литой алюминий)</strong> — премиум. Легкий, идеальная геометрия (без щелей). <br><strong>Iron (Железо)</strong> — дешево, тяжело, возможны зазоры.</p>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">3. Блок питания (PSU)</h4>
            <p style="font-size:13px; color:var(--text2);">Конвертирует 220V в 5V для диодов. <strong>Аргумент надежности:</strong> Надежные БП (типа MeanWell) защищают экран от выгорания при скачках напряжения и снижают энергопотребление на 20%.</p>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">4. Система управления (NovaStar/Colorlight)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Sending Card (Контроллер):</strong> Стоит у клиента, захватывает HDMI и шлет по витой паре. <br><strong>Receiving Card:</strong> Стоит в каждом кабинете, расшифровывает сигнал для модулей.</p>
          </div>
        </div>

        <div class="section-label">Базовые параметры (Подбор под задачу)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4>📏 Шаг пикселя (Pixel Pitch / P)</h4>
            <p style="font-size:14px; margin-top:6px;">Расстояние между центрами соседних пикселей в миллиметрах (Например: P2.5).</p>
            <div style="margin-top:12px; font-size: 13px;">
              <p><strong>Rule of Thumb (Быстрый расчет):</strong></p>
              <ul style="margin-top:4px; padding-left:16px; color:var(--text2);">
                <li><strong>1 мм шага = 1 метр минимального расстояния просмотра.</strong> (Экран P2 комфортно смотреть с 2 метров).</li>
                <li>Чем меньше "P", тем выше разрешение (и плотность пикселей на кв.м), но геометрически растет цена (больше диодов и пайки).</li>
              </ul>
            </div>
          </div>
          <div class="card">
            <h4>☀️ Яркость (Nits / cd/m²)</h4>
            <p style="font-size:14px; margin-top:6px;">Интенсивность светового потока. Определяет способность экрана "перекричать" внешнее освещение.</p>
            <div style="margin-top:12px; font-size: 13px;">
              <p><strong>Золотые стандарты:</strong></p>
              <ul style="margin-top:4px; padding-left:16px; color:var(--text2);">
                <li><strong>Indoor (Внутри):</strong> 600–1000 Nits.</li>
                <li><strong>Window (Витрина):</strong> 2500–4000 Nits (иначе солнце засветит экран сквозь стекло).</li>
                <li><strong>Outdoor (Улица):</strong> 5500–10000 Nits. </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="section-label">Визуальные и Инженерные параметры (Deep Dive: Аргументы для Upsell)</div>
        <div class="card" style="margin-bottom:24px">
          <ul style="margin-top:12px; font-size: 14px; padding-left:16px; display:flex; flex-direction:column; gap:16px;">
            <li>
              <strong>Refresh Rate (Частота обновления / ШИМ)</strong> + <em>Скорость мерцания диодов (Гц)</em> = <strong>Экран без полос на камеру.</strong>
              <br><span style="color:var(--text2); font-size: 13px;"><strong>Аргумент цены:</strong> База — 1920 Гц. Если экран ставят на сцену, в студию или ТЦ, где люди снимают сторис, дешевый экран даст черные бегущие полосы (Scan lines). Продаем 3840 Гц или 7680 Гц: <em>«Сэкономив на IC-драйверах, вы получите бракованный контент во всех соцсетях клиентов»</em>.</span>
            </li>
            <li>
              <strong>Grayscale (Битность / Градации серого)</strong> + <em>14-bit vs 16-bit глубина цвета</em> = <strong>Качество картинки на низкой яркости.</strong>
              <br><span style="color:var(--text2); font-size: 13px;"><strong>Аргумент цены:</strong> Если убавить яркость дешевого экрана вечером до 10-20%, он теряет оттенки. Градиенты распадаются на жесткие полосы (Banding), лица выглядят пятнистыми. <em>«16-битный контроллер и дорогие чипы сохранят киношную плавность цвета даже ночью»</em>.</span>
            </li>
            <li>
              <strong>Scan Rate (Частота сканирования)</strong> + <em>Сколько строк диодов обслуживает один чип (1/16, 1/32)</em> = <strong>Реальная яркость и долговечность.</strong>
              <br><span style="color:var(--text2); font-size: 13px;"><strong>Аргумент цены:</strong> Чем меньше знаменатель (например 1/16 лучше, чем 1/32), тем больше времени на диод подается ток. <em>«У конкурентов диоды работают на износ (чтобы выдать ту же яркость при плохом Scan Rate), они выгорят за 2 года. Наша архитектура бережет ресурс чипов (срок службы 100 000 часов)»</em>.</span>
            </li>
            <li>
              <strong>IP Rating (Степень защиты)</strong> + <em>IP65, IP68 (Герметизация)</em> = <strong>Выживаемость на улице.</strong>
              <br><span style="color:var(--text2); font-size: 13px;"><strong>Аргумент цены:</strong> <em>«Indoor экраны (IP20) сгорят от конденсата при первом перепаде температур. Наш Outdoor (IP65/IP65) залит силиконовым компаундом с обеих сторон плат, а разъемы (Neutrik / Aviation plugs) герметичны. Ему не страшна автомойка высокого давления»</em>.</span>
            </li>
          </ul>
        </div>
    
  `
};