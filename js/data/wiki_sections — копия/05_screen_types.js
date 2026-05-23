export const section = {
  id: "screen-types",
  icon: "🏢",
  title: "Типы и конструкция экранов",
  content: `

        <div class="section-label">1. Материал корпусов (Кабинетов)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Железные кабинеты (Steel Cabinet)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Сварные железные ящики. Классический стандарт для уличных проектов.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--good)">Плюс:</strong> Дешевле в производстве. Можно сварить кабинеты любого нестандартного размера под хитрый проект клиента.</li>
              <li><strong style="color:var(--warn)">Риск (аргумент цены):</strong> Очень тяжелые (от 40 кг/м²). Потребуют массивной и дорогой несущей металлоконструкции. Из-за погрешностей сварки идеального бесшовного стыка добиться сложно.</li>
            </ul>
          </div>
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Литой алюминий (Die-cast Aluminum)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Кабинеты, отлитые на станках в заводских формах. Идеальная геометрия (погрешность до 0.1 мм).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--good)">Аргумент для клиента:</strong> Абсолютно бесшовный экран-монолит. Очень легкие (~25 кг/м²), что экономит деньги клиента на несущем каркасе и ускоряет монтаж.</li>
              <li><strong style="color:var(--text)">Влияние на цену:</strong> Сам экран дороже, но часто эта разница окупается за счет дешевизны и легкости монтажной конструкции. Строгий стандарт для Indoor-экранов.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">2. Тип обслуживания (Front vs Rear Service)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">Фронтальное обслуживание (Спереди)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Модули крепятся к кабинету на мощных магнитах. Инженер снимает их с лицевой стороны специальным вакуумным съемником.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Зачем это клиенту:</strong> Экран можно повесить вплотную к глухой стене, как картину. Экономит драгоценную торговую площадь в ТЦ, так как не нужно оставлять технический коридор сзади экрана.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">Тыловое обслуживание (Сзади)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Модули жестко прикручены винтами. Чтобы починить экран, нужно физически зайти за него и открыть дверцу кабинета.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Зачем это клиенту:</strong> Дешевле в закупке и надежнее (модуль точно не выпадет от ветра). Идеально для уличных билбордов и крышных установок, где по умолчанию есть доступ сзади.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">3. Основные пакетные решения (Назначение)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4>Indoor (Интерьерные)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Яркость 600–1000 нит, нет влагозащиты (IP20), мелкий шаг (P1.5 - P3).</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Продаем как:</strong> Бесшумное премиум-решение (без вентиляторов), идеальный стык алюминиевых кабинетов. Фокус на сочность картинки вблизи.</p>
          </div>
          <div class="card">
            <h4>Outdoor (Уличные)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Яркость 5000+ нит, полная герметизация (IP65), крупный шаг (P4 - P10).</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Продаем как:</strong> Бронированные всепогодные экраны. Фокус на выживаемость в снег и дождь, а также способность "перебить" солнце.</p>
          </div>
          <div class="card">
            <h4>Rental (Арендные / Сценические)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Замки быстрого монтажа (Fast-locks), угловая защита краев, легкий вес.</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Продаем как:</strong> Оборудование для бизнеса (ивенты). Экран собирается за 2 часа без отверток. Упакован в ударопрочные кейсы (Flight cases) на колесиках.</p>
          </div>
          <div class="card">
            <h4>Прозрачные (Медиавитрины)</h4>
            <p style="font-size:13px; margin-top:6px; color:var(--text2);"><strong style="color:var(--text)">Тех. база:</strong> Диоды напаяны на тонкие рейки, конструкция пропускает 60-80% света.</p>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Продаем как:</strong> WOW-решение для ТЦ и автосалонов. Экран работает как вывеска, но не перекрывает солнце в помещении и не портит дорогой фасад здания.</p>
          </div>
        </div>

        <div class="section-label">Стандартные размеры модулей (Памятка)</div>
        <div class="table-wrap" style="margin-bottom:24px">
          <table>
            <thead><tr><th>Шаг (Pitch)</th><th>Размер модуля</th><th>Плотность (пикс/м²)</th><th>Аргумент в продаже</th></tr></thead>
            <tbody>
              <tr><td class="td-good">P1.53</td><td>320×160 мм</td><td class="td-good">~427 000</td><td>Премиальный Indoor. Вплотную не видно пикселей. Идеально для ТВ-студий.</td></tr>
              <tr><td class="td-good">P1.86</td><td>320×160 мм</td><td class="td-good">~288 000</td><td>Самый популярный "мелкий шаг". Высокая четкость при адекватной цене.</td></tr>
              <tr><td class="td-good">P2.0</td><td>320×160 мм</td><td>~250 000</td><td>Золотой стандарт для конференц-залов премиум класса.</td></tr>
              <tr><td class="td-good">P2.5</td><td>320×160 мм</td><td>~160 000</td><td>Классика для Indoor (ТЦ, магазины). Комфортно смотреть с 2.5 метров.</td></tr>
              <tr><td>P3.07</td><td>320×160 мм</td><td>~105 000</td><td>Бюджетный Indoor для больших залов, где зритель сидит далеко.</td></tr>
              <tr><td>P4.0</td><td>320×160 мм / 256×128 мм</td><td>~62 500</td><td>Самый дешевый Indoor или премиальный Outdoor (высокая детализация на улице).</td></tr>
              <tr><td>P5.0</td><td>320×160 мм</td><td>~40 000</td><td>Современный стандарт для уличных экранов (фасады, вывески).</td></tr>
              <tr><td>P6.67</td><td>320×160 мм</td><td>~22 500</td><td>Хороший баланс цены для больших уличных медиафасадов.</td></tr>
              <tr><td class="td-warn">P8.0</td><td>320×160 мм</td><td class="td-warn">~15 625</td><td>Бюджетный Outdoor. Комфортно смотреть строго с 8-10 метров и дальше.</td></tr>
              <tr><td class="td-warn">P10</td><td>320×160 мм</td><td class="td-warn">~10 000</td><td>Только для огромных крышных установок и дорожных билбордов (смотрим издалека).</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для продаж (Rules of Thumb):</strong>
          <br>• Экран вешается на глухую стену внутри ТЦ? Строго продаем <strong>Фронтальное обслуживание на магнитах</strong>. Иначе при сгорании одного диода придется вызывать альпинистов и демонтировать весь экран целиком.
          <br>• Экран уличный и гигантский (на фасад)? Предлагаем <strong>Железные кабинеты</strong> (сильно удешевит смету).
          <br>• Если это дорогой Indoor 4K-экран для переговорной — продаем строго <strong>Литой алюминий</strong> (в железе будут видны черные микро-щели между модулями).
        </div>
    
  `
};
