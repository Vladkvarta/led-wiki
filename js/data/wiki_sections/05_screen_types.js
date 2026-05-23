export const section = {
  id: "screen-types",
  icon: "🏢",
  title: "Типы и конструкция экранов",
  content: `

        <div class="section-label">1. Технология инкапсуляции и защиты (SMD vs GOB vs COB)</div>
        <p style="font-size:13px; margin-bottom:16px; color:var(--text2);">Ключевой фактор надежности Indoor-экранов с мелким шагом. То, как диоды крепятся к плате.</p>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
             <h4 style="font-size:15px; margin-bottom:8px;">SMD (Surface Mounted Device)</h4>
             <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Каждый диод припаян к поверхности платы ножками. Базовая технология.</p>
             <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
               <li><strong style="color:var(--text)">Особенности:</strong> Базовое решение. Ремонтопригодно (можно перепаять один диод).</li>
               <li><strong style="color:var(--warn)">Риск:</strong> Диоды не имеют дополнительной защиты от физического воздействия. Не рекомендуется для установки в проходных зонах без защитного барьера.</li>
             </ul>
          </div>
          <div class="card card-accent">
             <h4 style="font-size:15px; margin-bottom:8px;">GOB (Glue on Board)</h4>
             <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Стандартная SMD-плата, сверху залитая слоем прозрачной эпоксидной смолы.</p>
             <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
               <li><strong style="color:var(--good)">Преимущество:</strong> Поверхность становится ударопрочной и влагостойкой. Допускает влажную уборку. Диоды защищены от механических повреждений.</li>
               <li><strong style="color:var(--text)">Применение:</strong> Оптимально для ТЦ на уровне глаз и контактных входных групп.</li>
             </ul>
          </div>
          <div class="card card-accent" style="grid-column: span 2;">
             <h4 style="font-size:15px; margin-bottom:8px;">COB (Chip on Board)</h4>
             <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Кристаллы диодов выращиваются прямо на плате (без ножек и корпусов), а затем весь модуль заливается единым защитным компаундом.</p>
             <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
               <li><strong style="color:var(--good)">Преимущество:</strong> Отсутствие микропаек повышает отказоустойчивость. Высокая контрастность, глубокий уровень черного цвета. Сниженное тепловыделение и энергопотребление.</li>
               <li><strong style="color:var(--text)">Применение:</strong> VIP-переговорные, диспетчерские (режим работы 24/7), телевизионные студии.</li>
             </ul>
          </div>
        </div>

        <div class="section-label">2. Электроника и «Начинка»</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Частота обновления (Refresh Rate)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Скорость, с которой обновляется картинка. Стандартные значения: 1920 Гц, 3840 Гц и 7680 Гц.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--warn)">1920 Hz:</strong> Базовый стандарт. При съемке на камеру телефона на экране могут быть видны мерцающие полосы (стробоскопический эффект).</li>
              <li><strong style="color:var(--good)">3840 Hz (Рекомендуемый стандарт):</strong> Картинка плавная, камеры снимают чисто без артефактов.</li>
            </ul>
          </div>
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Тип коммутации (Hard vs Soft connection)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Способ соединения модулей внутри кабинета с платой приема (Receiving Card).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Шлейфы (Soft):</strong> Классическое соединение кабелями. Подвержено износу при сильной вибрации или перепадах температур.</li>
              <li><strong style="color:var(--good)">Жесткая сцепка (Hard Connection):</strong> Беспроводное соединение. Модуль вставляется в плату кабинета напрямую через пины.</li>
              <li><strong style="color:var(--text)">Преимущество:</strong> Повышенная отказоустойчивость, исключение проблем, связанных с отхождением шлейфов.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">3. Тип обслуживания (Front vs Rear Service)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">Фронтальное обслуживание (Спереди)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Модули крепятся на мощных магнитах. Демонтаж производится с лицевой стороны специальным вакуумным съемником.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Применение:</strong> Установка вплотную к стене. Не требует наличия технического коридора сзади экрана, что экономит пространство.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">Тыловое обслуживание (Сзади)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Модули жестко зафиксированы винтами. Доступ к компонентам осуществляется с задней стороны экрана через дверцы.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Применение:</strong> Уличные форматы (билборды, крышные установки, медиафасады), где конструктивно предусмотрен доступ сзади. Обеспечивает жесткую фиксацию модулей при ветровых нагрузках.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">4. Основные пакетные решения (Назначение)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4>Indoor (Интерьерные)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Яркость 600–1000 нит, без влагозащиты (IP20), мелкий шаг пикселя (P1.25 - P3).</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Особенности:</strong> Фокус на высокую детализацию при просмотре с близкого расстояния, бесшумность и минимальные зазоры между модулями.</p>
          </div>
          <div class="card">
            <h4>Outdoor (Уличные)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Яркость 5000-10000 нит, полная герметизация (IP65/IP68), крупный шаг пикселя (P4 - P10).</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Особенности:</strong> Спроектированы для работы в сложных погодных условиях (осадки, перепады температур) и обеспечения видимости при прямых солнечных лучах.</p>
          </div>
          <div class="card">
            <h4>Rental (Арендные / Сценические)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Замки быстрого монтажа (Fast-locks), защита углов, облегченный вес.</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Особенности:</strong> Предназначены для частых сборок/разборок. Упаковываются в транспортировочные кейсы (Flight cases). Акцент на скорость монтажа.</p>
          </div>
          <div class="card">
            <h4>Прозрачные (Медиавитрины)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Диоды напаяны на рейки, конструкция обеспечивает светопропускание 60-80%.</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Особенности:</strong> Используются для витрин, автосалонов и ТЦ. Выполняют функцию экрана, не блокируя при этом естественное освещение.</p>
          </div>
        </div>

        <div class="section-label">Стандартные размеры модулей (Памятка)</div>
        <div class="table-wrap" style="margin-bottom:24px">
          <table>
            <thead><tr><th>Шаг (Pitch)</th><th>Размер модуля</th><th>Плотность (пикс/м²)</th><th>Применение / Особенности</th></tr></thead>
            <tbody>
              <tr><td class="td-good">P1.25</td><td>320×160 / 600x337</td><td class="td-good">~640 000</td><td>Формат 16:9, ультравысокое разрешение. Альтернатива LCD и 4K телевизорам.</td></tr>
              <tr><td class="td-good">P1.53</td><td>320×160 мм</td><td class="td-good">~427 000</td><td>Высокая детализация. Оптимально для ТВ-студий и диспетчерских.</td></tr>
              <tr><td class="td-good">P1.86</td><td>320×160 мм</td><td class="td-good">~288 000</td><td>Популярный стандарт мелкого шага. Баланс четкости и стоимости.</td></tr>
              <tr><td class="td-good">P2.0</td><td>320×160 мм</td><td>~250 000</td><td>Стандарт для конференц-залов и качественных интерьерных проектов.</td></tr>
              <tr><td class="td-good">P2.5</td><td>320×160 мм</td><td>~160 000</td><td>Классика для ТЦ и магазинов. Комфортное расстояние просмотра — от 2.5 метров.</td></tr>
              <tr><td>P3.07</td><td>320×160 мм</td><td>~105 000</td><td>Решения для больших залов с увеличенным расстоянием до зрителя.</td></tr>
              <tr><td>P4.0</td><td>320×160 мм / 256×128 мм</td><td>~62 500</td><td>Базовый Indoor или Outdoor с высокой детализацией.</td></tr>
              <tr><td>P5.0</td><td>320×160 мм</td><td>~40 000</td><td>Стандарт для уличных экранов, вывесок, фасадов.</td></tr>
              <tr><td>P6.67</td><td>320×160 мм</td><td>~22 500</td><td>Оптимальная плотность для крупных уличных медиафасадов.</td></tr>
              <tr><td class="td-warn">P8.0</td><td>320×160 мм</td><td class="td-warn">~15 625</td><td>Outdoor-решения. Комфортный просмотр с расстояния от 8-10 метров.</td></tr>
              <tr><td class="td-warn">P10</td><td>320×160 мм</td><td class="td-warn">~10 000</td><td>Крупноформатные крышные установки и дорожные билборды.</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для подбора (Rules of Thumb):</strong>
          <br>• <strong>Формула шага пикселя:</strong> Шаг (P) = минимальное комфортное расстояние просмотра в метрах (например, P2.5 = 2.5 метра, P5 = 5 метров).
          <br>• <strong>Установка на стену в помещении:</strong> Рекомендуется фронтальное обслуживание (на магнитах), чтобы обеспечить доступ для обслуживания без демонтажа всего экрана.
          <br>• <strong>Установка в контактной зоне:</strong> При доступности экрана для посетителей целесообразно использовать GOB-инкапсуляцию для защиты диодов от механических повреждений.
          <br>• <strong>Экраны для мероприятий / фотозон:</strong> Рекомендуется частота обновления (Refresh Rate) 3840 Гц для предотвращения мерцания на фото- и видеоматериалах.
          <br>• <strong>Требования к максимальной контрастности:</strong> Для достижения глубокого черного цвета и повышения надежности в премиум-проектах оптимально применение COB-технологии.
        </div>
    
  `
};