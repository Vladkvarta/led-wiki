export const section = {
  id: "packaging-technologies",
  icon: "📦",
  title: "Технологии упаковки LED",
  content: `

        <div class="section-label">Инкапсуляция: Базовая физика</div>
        <div class="card" style="margin-bottom: 24px;">
          <p><strong>Инкапсуляция (Упаковка)</strong> — метод физической защиты эпитаксиального кристалла (Die) и способ его интеграции на печатную плату (PCB). От выбранной технологии зависит предел шага пикселя, термоотвод и устойчивость матрицы к механическим нагрузкам.</p>
        </div>

        <div class="section-label">Актуальные стандарты монтажа</div>
        <div class="grid-3" style="margin-bottom:24px">
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">1. SMD (Surface-Mount Device)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px; display:flex; flex-direction:column; gap:8px;">
              <li><strong>Технология:</strong> <em>Поверхностный монтаж.</em> Три кристалла (RGB) развариваются в индивидуальном пластиковом корпусе, который затем припаивается к контактным площадкам платы.</li>
              <li><strong>Физика процесса:</strong> Тепло отводится преимущественно через ножки (контакты) на текстолит платы. Корпус выступает над поверхностью.</li>
              <li><strong>Эксплуатация:</strong> Локальная ремонтопригодность — перепайка феном/паяльником за 5 минут. Низкая механическая прочность на срез — диоды повреждаются при физическом контакте.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">2. COB (Chip-on-Board)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px; display:flex; flex-direction:column; gap:8px;">
              <li><strong>Технология:</strong> <em>Монтаж на плату.</em> Голые кристаллы интегрируются напрямую на PCB без промежуточных пластиковых корпусов, сверху полотно заливается оптическим компаундом (смола/силикон).</li>
              <li><strong>Физика процесса:</strong> Прямой термоотвод от кристалла на плату — снижение рабочей температуры. Отсутствие пластика вокруг кристаллов увеличивает площадь чёрного фона → рост контраста.</li>
              <li><strong>Эксплуатация:</strong> Монолитная поверхность — защита от влаги, пыли и ударов. При выгорании пикселя меняется весь модуль — локальный ремонт невозможен.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">3. GOB (Glue-on-Board)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px; display:flex; flex-direction:column; gap:8px;">
              <li><strong>Технология:</strong> <em>Гибридная герметизация.</em> Стандартная SMD-матрица с уже напаянными диодами полностью заливается слоем прозрачного ударопрочного клея.</li>
              <li><strong>Физика процесса:</strong> Клей заполняет пустоты между SMD-корпусами, распределяя механическую нагрузку при ударе по всей площади модуля, а не на один диод.</li>
              <li><strong>Эксплуатация:</strong> Высокая ударопрочность при сохранении SMD-базы. Риск пожелтения клея под воздействием UV. Ремонт требует химического растворения компаунда вокруг повреждённого диода.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Архитектуры сверхвысокого разрешения (Sub-1mm)</div>
        <div class="card" style="margin-bottom:24px">
          <p style="font-size:14px; margin-bottom: 16px;">При шаге пикселя менее 1.2 мм классический SMD-корпус становится слишком хрупким из-за малой площади пайки. Индустрия использует альтернативные архитектуры.</p>
          <div class="grid-3">
            <div>
              <h4 style="font-size:14px;">IMD (Integrated Mounted Device)</h4>
              <ul style="margin-top:6px; padding-left:16px; font-size: 13px; color:var(--text2);">
                <li><strong>Конструкция (4-in-1 / QFON):</strong> 4 пикселя (12 RGB-кристаллов) упаковываются в один общий корпус с увеличенным числом контактов.</li>
                <li><strong>Значение:</strong> Прочность на отрыв в 4 раза выше, чем у одиночного мелкого SMD. Актуально для экранов P0.9–P1.2.</li>
              </ul>
            </div>
            <div>
              <h4 style="font-size:14px;">Mini LED</h4>
              <ul style="margin-top:6px; padding-left:16px; font-size: 13px; color:var(--text2);">
                <li><strong>Конструкция:</strong> Уменьшенные эпитаксиальные кристаллы (50–200 мкм) в сочетании с технологиями COB/IMD.</li>
                <li><strong>Значение:</strong> Снижение энергопотребления на 20–30% при равной яркости. Сокращение «мёртвой» световой зоны, высокий уровень контрастности.</li>
              </ul>
            </div>
            <div>
              <h4 style="font-size:14px;">Micro LED</h4>
              <ul style="margin-top:6px; padding-left:16px; font-size: 13px; color:var(--text2);">
                <li><strong>Конструкция:</strong> Кристаллы менее 50 мкм. Требует технологии массового переноса (Mass Transfer) миллионов чипов с точностью до микрона.</li>
                <li><strong>Значение:</strong> Эталонные оптические характеристики (яркость, контраст, углы обзора). Высокая стоимость производства обусловлена процентом брака при трансфере.</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="info-box info-green">
          <strong>Матрица применения (Rules of Thumb):</strong>
          <br>• <strong>Стандартные indoor/outdoor-инсталляции:</strong> <strong>SMD</strong>. Локальная ремонтопригодность обеспечивает низкую стоимость обслуживания.
          <br>• <strong>Агрессивная среда (транзитные зоны, ТЦ, LED-полы):</strong> <strong>GOB</strong> или защитные покрытия. Распределение механической нагрузки исключает сдвиг и скол диодов.
          <br>• <strong>Broadcast и ситуационные центры:</strong> <strong>COB</strong>. Отсутствие муара (Moire effect) на камеру, максимальный контраст, визуальная монолитность полотна.
        </div>
    
  `
};