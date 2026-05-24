export const section = {
  id: "screen-types",
  icon: "🏢",
  title: "Типы и конструкция экранов",
  content: `

        <div class="info-box info-blue" style="margin-bottom:20px">
          <strong>Инженерная сводка:</strong> Выбор форм-фактора экрана определяет его механическую прочность, термоотвод, предельную яркость и регламент технического обслуживания. Ошибка в подборе шасси или типа коммутации критически снижает отказоустойчивость всей системы.
        </div>

        <div class="section-label">1. Архитектура коммутации кабинетов (Внутренняя разводка)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Soft Connection (Кабельная коммутация)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Конструкция:</strong> Передача данных и питания от принимающей карты (Receiving Card) и БП к модулям осуществляется через гибкие плоские шлейфы (Ribbon cables) и силовые провода.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Технические риски:</strong> Окисление пинов, отхождение контактов при температурных деформациях или вибрациях. Повышенный уровень электромагнитных наводок (EMI).</li>
              <li><strong>Применение:</strong> Бюджетные решения, крупношаговые уличные экраны.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">Hard Connection (Жесткая сцепка / BTB)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Конструкция:</strong> Использование промежуточной кросс-платы (HUB-board). Модуль стыкуется с ней напрямую через высокоточные разъемы (Board-to-Board коннекторы).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Инженерное преимущество:</strong> Полное отсутствие проводов внутри кабинета. Абсолютная виброустойчивость, минимизация переходного сопротивления, улучшенная защита от наводок (EMC).</li>
              <li><strong>Применение:</strong> Экраны мелкого шага (NPP), премиальный Rental-сегмент, Broadcast-студии.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">2. Топология обслуживания (Регламент доступа)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Front Service (Фронтальное)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Конструкция:</strong> Модули фиксируются на шасси с помощью неодимовых магнитов. Демонтаж осуществляется с лицевой стороны специальным вакуумным съемником.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Ограничения:</strong> Магнитное крепление не обеспечивает абсолютной герметичности стыков (сложно добиться честного IP65 по фронту). Требуется строгий контроль геометрии несущей металлоконструкции.</li>
              <li><strong>Применение:</strong> Indoor-проекты, монтаж вплотную к несущей стене (экономия габаритов помещения).</li>
            </ul>
          </div>
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Rear Service (Тыловое)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong>Конструкция:</strong> Модули жестко фиксируются к шасси винтами сквозь уплотнительные резинки. Доступ к компонентам (БП, карты) — через задние двери кабинета.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Инженерное преимущество:</strong> Механическая монолитность. Высокая устойчивость к ветровым нагрузкам (Wind load) и абсолютная герметизация (IP65/IP68).</li>
              <li><strong>Применение:</strong> Outdoor-фасады, крышные установки. Обязательно наличие сервисного коридора (Catwalk) за экраном (минимум 60-80 см).</li>
            </ul>
          </div>
        </div>

        <div class="section-label">3. Форм-факторы и Целевые платформы</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4>Indoor (Интерьерные)</h4>
            <ul style="margin-top:6px; padding-left:16px; font-size: 13px; color:var(--text2);">
              <li><strong>Шасси:</strong> Die-cast Aluminum (Литой алюминий). Идеальная геометрия для бесшовной стыковки мелкого шага.</li>
              <li><strong>Спецификация:</strong> Яркость 600–1000 нит, защита IP20/IP31, пассивное охлаждение (без вентиляторов).</li>
              <li><strong>Частота (PWM):</strong> Строго 3840 Hz и выше для подавления муара на камерах.</li>
            </ul>
          </div>
          <div class="card">
            <h4>Outdoor (Уличные)</h4>
            <ul style="margin-top:6px; padding-left:16px; font-size: 13px; color:var(--text2);">
              <li><strong>Шасси:</strong> Steel/Aluminum cabinet (Сталь или алюминиевый профиль). Акцент на жесткость.</li>
              <li><strong>Спецификация:</strong> Яркость 5500-10000 нит, герметизация IP65 (фронт/тыл), силиконовая заливка плат, конформное покрытие компонентов.</li>
              <li><strong>Термоменеджмент:</strong> Интегрированные кулеры для вывода тепла или аэродинамический дизайн кабинета.</li>
            </ul>
          </div>
          <div class="card">
            <h4>Rental (Сценические / Арендные)</h4>
            <ul style="margin-top:6px; padding-left:16px; font-size: 13px; color:var(--text2);">
              <li><strong>Шасси:</strong> Magnesium Alloy (Магниевый сплав). Минимальный вес, угловые протекторы диодов.</li>
              <li><strong>Механика:</strong> Fast-locks (Замки быстрого монтажа), независимые блоки питания с функцией быстрой горячей замены (Hot-swap), коннекторы Neutrik.</li>
              <li><strong>Особенности:</strong> Расчет на десятки циклов монтажа/демонтажа, подвес на лебедки (Rigging).</li>
            </ul>
          </div>
          <div class="card">
            <h4>Прозрачные (Медиавитрины)</h4>
            <ul style="margin-top:6px; padding-left:16px; font-size: 13px; color:var(--text2);">
              <li><strong>Шасси:</strong> Реечная архитектура (Strip PCB).</li>
              <li><strong>Спецификация:</strong> Светопропускаемость (Transparency rate) от 50% до 85%. Яркость до 4500-5000 нит (для перекрытия прямого солнца в витрине).</li>
              <li><strong>Ограничения:</strong> Сниженная плотность пикселей, уязвимость к физическому воздействию (требуют защиты стеклом).</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Справочник разрешения (Пиксельная плотность)</div>
        <div class="table-wrap" style="margin-bottom:24px">
          <table>
            <thead><tr><th>Шаг (Pitch)</th><th>Плотность (пикс/м²)</th><th>Минимальная дистанция обзора</th><th>Целевая спецификация</th></tr></thead>
            <tbody>
              <tr><td class="td-good">P1.25</td><td class="td-good">640 000</td><td>от 1.2 м</td><td>NPP сегмент. Диспетчерские, замена LCD-видеостен, 4K/8K разрешения.</td></tr>
              <tr><td class="td-good">P1.53</td><td class="td-good">427 316</td><td>от 1.5 м</td><td>ТВ-студии, VIP-переговорные (Broadcast quality).</td></tr>
              <tr><td class="td-good">P1.86</td><td class="td-good">288 906</td><td>от 1.8 м</td><td>Корпоративный сектор, высокая детализация графики.</td></tr>
              <tr><td class="td-good">P2.0</td><td>250 000</td><td>от 2.0 м</td><td>Оптимальный баланс для конференц-залов.</td></tr>
              <tr><td class="td-good">P2.5</td><td>160 000</td><td>от 2.5 м</td><td>Индустриальный стандарт для ТЦ, Retail-сетей.</td></tr>
              <tr><td>P3.07</td><td>105 600</td><td>от 3.0 м</td><td>Спортивные арены (внутренние), холлы с высокой дистанцией просмотра.</td></tr>
              <tr><td>P4.0</td><td>62 500</td><td>от 4.0 м</td><td>Базовый цифровой signage (Indoor/Outdoor).</td></tr>
              <tr><td>P5.0</td><td>40 000</td><td>от 5.0 м</td><td>Стандарт для уличных медиафасадов и сити-форматов.</td></tr>
              <tr><td>P6.67</td><td>22 497</td><td>от 6.5 м</td><td>Оптимальная плотность для крупных Outdoor инсталляций.</td></tr>
              <tr><td class="td-warn">P8.0</td><td class="td-warn">15 625</td><td>от 8.0 м</td><td>Крупные дорожные форматы.</td></tr>
              <tr><td class="td-warn">P10</td><td class="td-warn">10 000</td><td>от 10.0 м</td><td>Крышные установки, билборды на эстакадах (максимальная дальность чтения).</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-box info-green">
          <strong>Инженерная матрица проектирования (Rules of Thumb):</strong>
          <br>• <strong>Математика плотности:</strong> Формула расчета пикселей на 1 кв.м: <code>1 000 000 / (Шаг пикселя * Шаг пикселя)</code>.
          <br>• <strong>Проектирование охлаждения (Outdoor):</strong> Тыловое обслуживание требует закладки минимум 600-800 мм технологического коридора для конвекции воздуха и доступа инженера.
          <br>• <strong>Спецификация под камеры (Broadcast):</strong> В проектах с видеосъемкой или фотозонами недопустимо использование базовых IC драйверов. Проектируется частота PWM 3840 Гц или 7680 Гц во избежание стробоскопического эффекта.
        </div>
    
  `
};