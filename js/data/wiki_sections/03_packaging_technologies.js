export const section = {
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
};
