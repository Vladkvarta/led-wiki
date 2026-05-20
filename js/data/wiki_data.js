export const wikiData = [
  {
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
  },
  {
    id: "crystal-manufacturers",
    icon: "💎",
    title: "Производители кристаллов",
    content: `
        <div class="section-label">Что мы вообще выбираем? (Кристалл vs Корпус)</div>
        <div class="card" style="margin-bottom: 24px;">
          <p>При продаже экрана важно понимать разницу между производителем самого светящегося элемента и производителем сборки.</p>
          <ul style="margin-top:12px; font-size: 14px; padding-left:16px;">
            <li><strong>LED Chip (Кристалл):</strong> Сам полупроводник, который излучает свет (бренды: Nichia, Cree, San'an). Это «мотор» светодиода.</li>
            <li><strong>LED Package (Светодиод в корпусе / SMD):</strong> Готовая деталь, где кристалл запаян в корпус и залит линзой (бренды: Nationstar, Kinglight). Это «кузов», в который поставили мотор.</li>
          </ul>
          <div class="info-box info-blue" style="margin-top: 12px;">
            <strong>Как продавать:</strong> Клиенты часто путают эти понятия. Когда мы говорим «Диоды Nationstar на золоте», мы имеем в виду качественный корпус от Nationstar, внутри которого установлен надежный кристалл с золотой нитью. Это ключевой маркер надежности для заказчика.
          </div>
        </div>

        <div class="section-label">Уровни производителей (Кристаллы и Сборка)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-good">
            <h4 style="font-size:15px; margin-bottom:8px;">🏆 Premium сегмент (Япония, США)</h4>
            <p style="font-size:13px; color:var(--text2);">Бренды: <strong>Nichia (Япония)</strong>, <strong>Cree (США)</strong>.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Исторические лидеры рынка. Обеспечивают идеальную цветопередачу и максимальный срок службы.</li>
              <li><strong style="color:var(--text)">Для клиента:</strong> Экран не потеряет яркость и не пойдет «пятнами» даже через 7-10 лет работы 24/7.</li>
              <li><strong style="color:var(--text)">Влияние на смету:</strong> Увеличивает стоимость экрана на 30–50%. Продаем только в VIP-проекты (крупные мировые бренды, телестудии).</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">✅ Золотой стандарт (Китай, Тайвань)</h4>
            <p style="font-size:13px; color:var(--text2);">Бренды упаковки: <strong>Nationstar</strong>, <strong>Kinglight</strong>. Бренды кристаллов: <strong>San'an</strong>, <strong>Epistar</strong>.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Самый популярный и обкатанный выбор в мире. Nationstar — абсолютный лидер среднего класса (Mainstream).</li>
              <li><strong style="color:var(--text)">Для клиента:</strong> Оптимальное соотношение цена/качество. Надежная работа 5–7 лет без серьезной деградации.</li>
              <li><strong style="color:var(--text)">Влияние на смету:</strong> Базовая стоимость в нашем прайсе. Это то, что нужно предлагать 90% клиентов по умолчанию.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Технология бондинга (Wire Bonding): Золото против Меди</div>
        <div class="card" style="margin-bottom:24px">
          <p><strong>Wire Bonding (Бондинг)</strong> — это микроскопическая проволока (нить), которая соединяет светящийся кристалл с контактами внутри корпуса светодиода.</p>
          <div class="grid-2" style="margin-top:16px; margin-bottom:16px">
            <div>
              <h4 style="color:var(--good); font-size:14px;">Золотая нить (Gold Wire / Au)</h4>
              <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
                <li><strong>Что это:</strong> Соединение выполнено из чистого золота. Оно не окисляется и отлично гнется при нагреве.</li>
                <li><strong>Выгода клиента:</strong> Светодиоды не будут массово перегорать («умирать») из-за перепадов температур или высокой влажности на улице. Максимальная надежность (до 100 000 часов).</li>
              </ul>
            </div>
            <div>
              <h4 style="color:var(--warn); font-size:14px;">Медная нить (Copper Wire / Cu)</h4>
              <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
                <li><strong>Что это:</strong> Соединение из меди. Жесткий металл, который быстро подвержен коррозии при попадании микро-влаги.</li>
                <li><strong>Риск клиента:</strong> При перепадах температур (зима/лето) медь расширяется иначе, чем пластик корпуса. Нить рвется — появляется «битый» или черный пиксель.</li>
              </ul>
            </div>
          </div>
          <div class="info-box info-green">
            <strong>Быстрое правило (Rule of Thumb):</strong>
            <br>• Продаем экран <strong>на улицу (Outdoor)</strong> — строго <strong>Золотая нить</strong>. Медь сгниет от влажности и температурных качелей.
            <br>• Продаем экран <strong>в помещение (Indoor)</strong> с климат-контролем — можно смело предлагать <strong>Медную нить</strong> для снижения цены сметы (будет дешевле на 15-20%), это безопасно.
          </div>
        </div>
    `
  },
  {
    id: "packaging-technologies",
    icon: "📦",
    title: "Технологии упаковки LED",
    content: `
        <div class="card" style="margin-bottom: 24px;">
          <p><strong>Инкапсуляция (Упаковка)</strong> — это способ защиты голого и хрупкого кристалла от внешнего мира и метод его крепления к плате. От того, как упакован диод, зависит <strong>надежность экрана к ударам и влаге</strong>, а также его ремонтопригодность.</p>
        </div>

        <div class="section-label">Основные технологии (Что мы продаем)</div>
        <div class="grid-3" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">1. SMD (Surface Mount Device)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Три кристалла (RGB) помещены в отдельный пластиковый корпус («бочонок»), который припаивается к плате.</li>
              <li><strong style="color:var(--text)">Для клиента:</strong> Это классика (90% рынка). Отличный угол обзора и оптимальная цена.</li>
              <li><strong style="color:var(--good)">Главный плюс:</strong> 100% ремонтопригодность. Если диод сгорел, инженер просто перепаивает его паяльником за 5 минут.</li>
              <li><strong style="color:var(--warn)">Риск:</strong> Диоды торчат над платой. Их легко сбить рукой или зацепить при транспортировке.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">2. COB (Chip-on-Board)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Голые кристаллы клеятся <strong>прямо на плату</strong> без индивидуальных корпусов, а сверху заливаются сплошным слоем прозрачной эпоксидной смолы.</li>
              <li><strong style="color:var(--text)">Для клиента:</strong> Абсолютно гладкий экран-монолит. Высшая контрастность (глубокий черный цвет) и феноменальная защита от ударов и воды.</li>
              <li><strong style="color:var(--warn)">Риск:</strong> Починить на месте почти невозможно. Если сгорел пиксель — модуль часто летит в мусорку или на завод-изготовитель. Стоит значительно дороже SMD.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">3. GOB (Glue-on-Board)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Это гибрид. Берут обычную плату SMD (с напаянными диодами) и сверху заливают ее прозрачным клеем-компаундом.</li>
              <li><strong style="color:var(--text)">Для клиента:</strong> Компромисс. Экран получает антивандальную защиту (можно задевать руками), при этом он дешевле, чем сложный COB.</li>
              <li><strong style="color:var(--warn)">Риск:</strong> Дешевый клей со временем может пожелтеть от солнца (поэтому GOB чаще продают внутрь помещений) и ремонт сложнее, чем у чистого SMD.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Технологии будущего для сверхвысокого разрешения</div>
        <div class="grid-3" style="margin-bottom:24px">
          <div class="card">
            <h4 style="font-size:14px;">IMD (4-in-1 / QFON)</h4>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Что это:</strong> В один пластиковый корпус упаковывают сразу 4 пикселя (12 кристаллов).<br><strong style="color:var(--text)">Зачем клиенту:</strong> Позволяет делать экраны с очень мелким шагом (P0.9 - P1.2), которые крепче обычного SMD и дешевле, чем COB.</p>
          </div>
          <div class="card">
            <h4 style="font-size:14px;">Mini LED</h4>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Что это:</strong> Уменьшенные SMD-диоды (размер 50–200 мкм).<br><strong style="color:var(--text)">Зачем клиенту:</strong> Позволяют собирать 4K и 8K экраны с шагом P0.6–P1.2. Высокая контрастность, премиум-сегмент для диспетчерских и переговорных.</p>
          </div>
          <div class="card">
            <h4 style="font-size:14px;">Micro LED</h4>
            <p style="font-size:13px; margin-top:6px;"><strong style="color:var(--text)">Что это:</strong> Кристаллы меньше 50 мкм. <br><strong style="color:var(--text)">Зачем клиенту:</strong> Технология-убийца OLED-телевизоров. Максимальное качество картинки в мире, но пока экстремально дорогое производство.</p>
          </div>
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для продаж (Rules of Thumb):</strong>
          <br>• <strong>90% проектов:</strong> Продаем классический <strong>SMD</strong>. Это надежно, понятно и легко чинится силами нашей сервисной службы прямо на объекте.
          <br>• <strong>Интерактив и дети:</strong> Если экран стоит в ТЦ, где его могут трогать руками, или на полу (танцпол) — обязательно предлагаем <strong>GOB</strong> (антивандальная защита спасет диоды от выбивания).
          <br>• <strong>VIP Конференц-залы и ТВ-Студии:</strong> Предлагаем <strong>COB</strong>. Нет бликов, идеальный черный цвет на камере, монолитный статусный вид. Дорого, но премиально.
        </div>
    `
  },
  {
    id: "lifespan",
    icon: "⏳",
    title: "Срок службы",
    content: `
        <div class="info-box info-blue" style="margin-bottom:20px">
          <strong>Что важно знать:</strong> Заявленные 100 000 часов (11 лет непрерывной работы) — это маркетинговый миф лабораторных условий. Ваша задача — объяснить клиенту реальный срок службы и продать ему необходимую обвязку (датчики, охлаждение) и техническое обслуживание.
        </div>

        <div class="section-label">Что такое "Срок службы" на самом деле (Стандарт L70)</div>
        <div class="card" style="margin-bottom: 24px;">
          <p><strong style="color:var(--text)">Стандарт L70 (Деградация люменов):</strong> Это время, за которое максимальная яркость экрана падает до 70% от первоначальной.</p>
          <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
            <li><strong style="color:var(--text)">Что это значит:</strong> Экран не «умирает» и не гаснет через 100 000 часов. Он просто светит на 30% тусклее, чем в день покупки.</li>
            <li><strong style="color:var(--text)">Как аргументировать смету:</strong> Если мы продадим экран с запасом яркости (например, уличный на 7000 нит вместо минимальных 5000 нит), то даже через 5 лет работы и просадки диодов на 20%, он все равно останется ярким и сочным. Дешевый экран, купленный «впритык», через 2 года начнет казаться тусклым днем.</li>
          </ul>
        </div>

        <div class="section-label">Главные убийцы LED-экранов (Почему они ломаются раньше)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-danger">
            <h4 style="font-size:15px; margin-bottom:8px;">🌡 Тепловой режим (Перегрев)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Работа чипов при температуре выше 65°C.<br><strong style="color:var(--text)">Последствия:</strong> Каждые лишние 10°C сокращают жизнь диода <strong>вдвое</strong>.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Зачем это клиенту:</strong> Чтобы защитить инвестиции, никогда не экономьте на кондиционировании для Indoor-видеостен и хороших вентиляторах/вытяжках для Outdoor-экранов.</li>
            </ul>
          </div>
          <div class="card card-warn">
            <h4 style="font-size:15px; margin-bottom:8px;">💡 Постоянная работа на 100% яркости</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Когда экран всегда работает на максимум (без авто-регулировки).<br><strong style="color:var(--text)">Последствия:</strong> Сверхбыстрая деградация яркости (L70) и постоянный перегрев.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Допродажа в смете:</strong> Обязательно продаем <strong>Датчик освещенности (Light Sensor)</strong>. Он автоматически глушит яркость ночью, увеличивая срок службы экрана на 30-40%.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">💧 Влага и пыль (Коррозия)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Нарушение герметизации и оседание грязи на платах.<br><strong style="color:var(--text)">Последствия:</strong> Окисление медных нитей и замыкание микросхем драйверов (IC).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Зачем это клиенту:</strong> Объясняем важность защиты IP65+ для улицы и продаем регулярное ТО (очистка фильтров) для Indoor.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">⚡ Дешевые блоки питания (PSU)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Использование БП без нормальной защиты от скачков напряжения.<br><strong style="color:var(--text)">Последствия:</strong> Пульсации тока буквально выжигают кристаллы (появляются целые черные квадраты на экране).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Аргументация цены:</strong> Всегда закладываем надежные БП (например, Mean Well или CZCL). Скупой платит дважды.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Сколько РЕАЛЬНО живут экраны?</div>
        <div class="table-wrap" style="margin-bottom:24px">
          <table>
            <thead><tr><th>Комплектация</th><th>Применение</th><th>Реальный срок (L70)</th><th>Главный фактор выживания</th></tr></thead>
            <tbody>
              <tr><td class="td-good">Premium (Золотая нить, топ БП)</td><td>Outdoor (Улица)</td><td class="td-good">8–10 лет</td><td>Ежегодное ТО + Датчик света</td></tr>
              <tr><td>Standard (Золотая нить, средний БП)</td><td>Outdoor (Улица)</td><td class="td-good">5–7 лет</td><td>Датчик света</td></tr>
              <tr><td class="td-bad">Budget (Медная нить, дешевый БП)</td><td>Outdoor (Улица)</td><td class="td-bad">2–3 года</td><td>Лотерея (повезет с погодой или нет)</td></tr>
              <tr><td class="td-good">Premium (Золото/Медь)</td><td>Indoor (ТЦ, офисы)</td><td class="td-good">7–10 лет</td><td>Работающий кондиционер в помещении</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для продаж (Rules of Thumb):</strong>
          <br>• <strong>Формула долговечности:</strong> <code>Хорошие блоки питания + Датчик освещенности + Запас яркости (чтобы не гонять на 100%)</code>.
          <br>• Не обещайте клиенту «10 лет работы без проблем». Обещайте «5–7 лет идеальной картинки <strong>при условии нашего ежегодного ТО</strong>». Продажа ТО — это и ваша прибыль, и страховка клиента от мертвого экрана.
        </div>
    `
  },
  {
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
  },
  {
    id: "module-manufacturers",
    icon: "🏭",
    title: "Производители матриц/модулей",
    content: `
        <div class="section-label">Кто такие производители модулей?</div>
        <div class="card" style="margin-bottom: 24px;">
          <p><strong>Сборщики матриц (Модулей)</strong> — это заводы, которые закупают диоды (например, Nationstar), микросхемы (IC-драйверы), печатают платы (PCB) и собирают всё это в готовый пластиковый блок. От них зависит геометрия, качество пайки, жесткость пластика и финальная картинка.</p>
        </div>

        <div class="section-label">Уровни брендов (Tier-сегментация)</div>
        <div class="grid-2" style="margin-bottom:24px">
          
          <div class="card card-good">
            <h4 style="font-size:15px; margin-bottom:8px;">🌟 Tier 1 (Мировые лидеры)</h4>
            <p style="font-size:13px; color:var(--text2);">Бренды: <strong>Unilumin, Absen, Leyard</strong>.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Топ-3 мирового рынка. Жесткий контроль качества, отборные комплектующие, собственные патенты.</li>
              <li><strong style="color:var(--text)">Аргумент для продажи:</strong> Экран будет работать идеально из коробки, 100% совпадение цветов (без разнотона). Идеально для ТВ-студий, где важна идеальная камера.</li>
              <li><strong style="color:var(--text)">Влияние на цену:</strong> Самые дорогие на рынке. Клиент платит премию за бренд и гарантированное отсутствие проблем.</li>
            </ul>
          </div>

          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">✅ Tier 2 (Золотая середина)</h4>
            <p style="font-size:13px; color:var(--text2);">Бренды: <strong>Liantronics, Ledman, INFiLED</strong>.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Крупнейшие фабрики с отличным качеством и ровной пайкой, но без огромной наценки за имя.</li>
              <li><strong style="color:var(--text)">Аргумент для продажи:</strong> «Вы получаете качество уровня мировых лидеров, но экономите 20-30% бюджета».</li>
              <li><strong style="color:var(--text)">Влияние на цену:</strong> Базовый выбор для хороших корпоративных проектов, ТЦ и надежного уличного Outdoor.</li>
            </ul>
          </div>

          <div class="card card-warn">
            <h4 style="font-size:15px; margin-bottom:8px;">🛒 Масс-маркет (Народные бренды)</h4>
            <p style="font-size:13px; color:var(--text2);">Бренды: <strong>Qiangli, Cailiang, Meiyad</strong>.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Заводы-гиганты, штампующие модули миллионами штук. Используют бюджетные диоды и тонкий дешевый пластик.</li>
              <li><strong style="color:var(--text)">Риск для клиента:</strong> Тонкий пластик деформируется на солнце — экран идет "волнами". Высокий риск разнотона (разные модули светят разным оттенком).</li>
              <li><strong style="color:var(--text)">Влияние на цену:</strong> Экстремально дешево. С ними мы конкурируем в 80% гос-тендеров.</li>
            </ul>
          </div>
          
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">🇺🇸 Локальные лидеры (Спец-решения)</h4>
            <p style="font-size:13px; color:var(--text2);">Бренды: <strong>Daktronics (США), Barco (Бельгия)</strong>.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Элитные западные бренды для узких рынков (Американские стадионы, кинотеатры).</li>
              <li><strong style="color:var(--text)">Влияние на цену:</strong> Космическая цена из-за локализации и супер-сервиса. Почти не встречаются в наших коммерческих сметах, если это не райдерный проект.</li>
            </ul>
          </div>
          
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для продаж (Rules of Thumb):</strong>
          <br>• Если конкурент предлагает клиенту <strong>Qiangli (Масс-маркет)</strong>, не пытайтесь продать ему <strong>Absen (Tier 1)</strong> — вы проиграете по цене в 3 раза.
          <br>• Правильно обрабатывайте возражения по цене: «Дешевый пластик деформируется на солнце через 1 год, и ваш фасад пойдет волнами. Мы закладываем фабричный <strong>Tier 2</strong> (Liantronics) — это жесткий корпус и гарантия ровного экрана».
          <br>• Если проект идет на <strong>телестудию или в зал Правительства</strong> — закладываем строго <strong>Tier 1</strong> (Unilumin, Absen). Там бюджет вторичен, главное — безупречная картинка на ТВ-камере.
        </div>
    `
  },
  {
    id: "controllers",
    icon: "🎛️",
    title: "Контроллеры и системы управления",
    content: `
        <div class="section-label">Как работает «мозг» экрана?</div>
        <div class="card" style="margin-bottom: 24px;">
          <p><strong style="color:var(--text)">Отправляющая карта (Sending Card)</strong> — стоит возле компьютера (или встроена в плеер). Принимает сигнал (HDMI) и переводит его на язык LED-экрана (в витую пару).</p>
          <p><strong style="color:var(--text)">Принимающая карта (Receiving Card)</strong> — маленькая плата, стоящая внутри <strong>каждого</strong> кабинета. Она принимает сигнал по витой паре и раздает на модули.</p>
          <p><strong style="color:var(--good)">Аргумент для клиента:</strong> «Если у вас сломается управляющий компьютер, принимающие карты в экране сохранят настройки калибровки. Экран не сбросится и не пойдет пятнами».</p>
        </div>

        <div class="section-label">Главные бренды на рынке</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">🥇 Novastar (Мировой стандарт)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Лидер рынка. Экосистема как у Apple (железо + облако VNNOX + софт).</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Зачем продавать:</strong> Любой инженер в стране умеет настраивать Novastar. Самое стабильное облако.</li>
              <li><strong style="color:var(--text)">Цена:</strong> Дороже аналогов, но экономия на контроллере — фатальная ошибка клиента.</li>
            </ul>
          </div>
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">🥈 Colorlight / Huidu / Linsn</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Альтернативы для конкретных ниш.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Colorlight:</strong> Сильный конкурент Novastar, часто дешевле.</li>
              <li><strong style="color:var(--text)">Huidu:</strong> Короли асинхронных дешевых плееров (коробочка с Wi-Fi). Идеально для вывесок над аптеками.</li>
              <li><strong style="color:var(--warn)">Linsn:</strong> Устаревающая бюджетная классика.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Важные характеристики контроллеров</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">Refresh Rate (Частота обновления)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--warn)">1920 Hz:</strong> База. На фото с телефона на экране могут быть черные полосы (мерцание).</li>
              <li><strong style="color:var(--good)">3840 Hz и выше:</strong> Идеально чистая картинка на камеру.</li>
              <li><strong style="color:var(--text)">Аргумент:</strong> «Если ваши клиенты будут снимать селфи на фоне экрана в ТЦ, вам строго нужен чип на 3840 Hz. Иначе фото будут испорчены».</li>
            </ul>
          </div>
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">All-in-One Процессоры (серия VX)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> 3-в-1. В одной коробке: Отправляющая карта + Видео-скалер (масштабатор) + Входы HDMI.</li>
              <li><strong style="color:var(--text)">Зачем продавать:</strong> Клиенту не нужен дорогой компьютер. Подключил ноутбук, и процессор сам растянет картинку на весь экран без искажений.</li>
            </ul>
          </div>
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для продаж (Rules of Thumb):</strong>
          <br>• Маленький экран (вывеска 2х1 м)? Ставим дешевый асинхронный <strong>Huidu с Wi-Fi</strong>.
          <br>• Огромный экран в ТЦ или конференц-зале? Закладываем процессор <strong>Novastar VX600/VX1000</strong> — золотой стандарт надежности.
        </div>
    `
  },
  {
    id: "connections",
    icon: "🔌",
    title: "Типы подключений",
    content: `
        <div class="section-label">Синхронное vs Асинхронное (Облачное) управление</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">Синхронное (Live-трансляция)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Экран дублирует сигнал с ПК в реальном времени. Компьютер выключился — экран погас.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Как продавать:</strong> Обязательно для конференц-залов (презентации), ТВ-студий, концертов (прямой эфир с камер).</li>
              <li><strong style="color:var(--warn)">Риск:</strong> Требует постоянно работающего ПК (медиасервера).</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">Асинхронное (Облако / Плеер)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Что это:</strong> Видео скачивается в память плеера (внутри экрана) через 4G или Wi-Fi. Дальше экран крутит ролики автономно.</p>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Как продавать:</strong> Идеально для ТЦ и уличных фасадов. Загрузили расписание из офиса в облако — и забыли.</li>
              <li><strong style="color:var(--good)">Up-sale:</strong> Продавайте постоянную подписку на облачный сервис (например, Novastar VNNOX).</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Как передается сигнал (Кабели)</div>
        <div class="table-wrap" style="margin-bottom:24px">
          <table>
            <thead><tr><th>Кабель (от ПК до экрана)</th><th>Расстояние</th><th>Аргумент для клиента</th></tr></thead>
            <tbody>
              <tr><td class="td-good">Витая пара (UTP Cat6)</td><td>до 100 метров</td><td>Дешево и надежно. Если серверная дальше 100 метров — сигнал пропадет или будут помехи.</td></tr>
              <tr><td class="td-warn">Оптоволокно (Fiber)</td><td>до 10 км</td><td>Если серверная находится на 1-м этаже, а экран на крыше 20-этажного здания, нужно продавать оптоволоконные конвертеры. Это удорожает смету.</td></tr>
              <tr><td class="td-bad">Wi-Fi (для видео)</td><td>0 метров</td><td><strong>Никогда не передавайте живой видеосигнал по Wi-Fi.</strong> Задержки и лаги гарантированы. Wi-Fi только для загрузки роликов в плеер!</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для продаж (Rules of Thumb):</strong>
          <br>• Клиент хочет повесить экран на трассе и управлять из офиса? Продаем <strong>Асинхронный плеер с 4G модемом</strong> (нужна только розетка 220V и сим-карта).
          <br>• Если расстояние от аппаратной (где сидит админ) до экрана превышает 100 метров (по длине кабеля, а не по прямой), <strong>строго закладываем оптику и конвертеры!</strong>
        </div>
    `
  },
  {
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
  },
  {
    id: "troubleshooting",
    icon: "🩺",
    title: "Неисправности и диагностика",
    content: `
        <div class="info-box info-blue" style="margin-bottom: 24px;">
          <strong>🎯 Суть раздела:</strong> LED-экраны ломаются, это физика. Ваша задача как менеджера — не скрывать это, а использовать страх поломки для продажи договора на сервисное обслуживание (ТО) и расширенной гарантии.
        </div>

        <div class="section-label">Диагностика как инструмент допродажи</div>
        <div class="table-wrap" style="margin-bottom:24px">
          <table>
            <thead><tr><th>Симптом (Что видит клиент)</th><th>Истинная причина</th><th>Скрипт продажи (Аргументация)</th></tr></thead>
            <tbody>
              <tr><td class="td-bad">Половина экрана погасла</td><td>Сгорел блок питания или перетерся шлейф.</td><td>«Если вы купите дешевый экран без Front Service (обслуживания спереди), для замены шлейфика за 100 рублей придется вызывать альпинистов за 50 000 рублей. Покупайте магниты».</td></tr>
              <tr><td class="td-warn">Черные «пиксельные» квадраты</td><td>Сгорел чип (Receiving Card) в кабинете.</td><td>«Именно поэтому мы добавляем в смету ЗИП-комплект. Без него запчасть из Китая поедет 2 месяца, и экран будет стоять с черными пятнами. Это удар по репутации».</td></tr>
              <tr><td class="td-warn">Мертвые пиксели</td><td>Кто-то ударил экран / диоды отвалились от старости.</td><td>«Экран стоит в зоне досягаемости людей? Нужно доплатить 20% за GOB-защиту (заливка смолой). Иначе его разобьют шваброй в первый же день».</td></tr>
              <tr><td class="td-bad">Экран «пошел волнами» или сгорел</td><td>Перегрев (нет кондиционера) или дешевый пластик (Qiangli).</td><td>«Мы не просто продаем экран, мы ставим датчики температуры, которые выключат экран при +50°C. Мы не дадим ему сгореть».</td></tr>
            </tbody>
          </table>
        </div>

        <div class="info-box info-green">
          <strong>Быстрые правила для продаж (Rules of Thumb):</strong>
          <br>• Никогда не говорите "наши экраны не ломаются". Говорите: <em>"В первый год у любого бренда отмирает до 0.1% диодов. Наш договор ТО включает выезд инженера каждые полгода для бесплатной перепайки этих пикселей. Ваш экран всегда будет идеальным"</em>.
          <br>• <strong>ЗИП (Запасные части)</strong> — это не "навязанная услуга". Это огнетушитель. Всегда закладывайте в смету минимум 3-5% запасных модулей из ТОЙ ЖЕ ПАРТИИ (чтобы потом не было разнотона).
        </div>
    `
  }
];
