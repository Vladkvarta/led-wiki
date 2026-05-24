export const section = {
  id: "crystal-manufacturers",
  icon: "💎",
  title: "Кристаллы и Инкапсуляция",
  content: `

        <div class="section-label">Анатомия светодиода: Кристалл vs Корпус</div>
        <div class="card" style="margin-bottom: 24px;">
          <p>Важно различать производителя полупроводника и завод, выполняющий инкапсуляцию. Качественный чип в плохом корпусе не даст ожидаемого ресурса.</p>
          <ul style="margin-top:12px; font-size: 14px; padding-left:16px; display:flex; flex-direction:column; gap:12px;">
            <li>
              <strong>LED Die (Эпитаксиальный кристалл)</strong> + <em>Голый полупроводник, излучающий свет (San'an, Epistar)</em> = <strong>Источник света.</strong>
              <br><span style="color:var(--text2); font-size: 13px;">Определяет базовую яркость, спектр и изначальный ресурс работы.</span>
            </li>
            <li>
              <strong>LED Package / SMD (Инкапсуляция)</strong> + <em>Готовая деталь: кристалл запаян в корпус, соединён микронитью и залит линзой (Nationstar, Kinglight)</em> = <strong>Защита и оптика.</strong>
              <br><span style="color:var(--text2); font-size: 13px;">Определяет угол обзора, контрастность, термоотвод и герметичность (защиту чипа от влаги и окисления).</span>
            </li>
          </ul>
          <div class="info-box info-blue" style="margin-top: 16px;">
            <strong>Технический нюанс:</strong> Качественный кристалл (например, San'an) в no-name инкапсуляции выходит из строя из-за нарушения герметичности корпуса. Влага и температурные деформации физически уничтожают чип или отрывают контакты. Надёжная инкапсуляция (например, Nationstar) обеспечивает требуемый уровень защиты.
          </div>
        </div>

        <div class="section-label">Визуальная инженерия: Биннинг и Контраст</div>
        <div class="card" style="margin-bottom: 24px;">
          <ul style="margin-top:0; font-size: 14px; padding-left:16px; display:flex; flex-direction:column; gap:16px;">
            <li>
              <strong>Binning (Биннинг / Сортировка)</strong> + <em>Группировка диодов с идентичной длиной волны и яркостью.</em>
              <br><span style="color:var(--text2); font-size: 13px;">Отсутствие жёсткого биннинга приводит к эффекту <strong>Mura</strong> — пятнистость при равномерной заливке (белый фон отображается с розоватыми или зеленоватыми участками). Жёсткий биннинг гарантирует равномерность цвета по всей площади полотна без программной калибровки.</span>
            </li>
            <li>
              <strong>Black SMD vs White SMD (Цвет корпуса диода)</strong> + <em>Цвет отражающей подложки внутри корпуса.</em>
              <br><span style="color:var(--text2); font-size: 13px;">
                <strong>White SMD:</strong> Подложка отражает свет → максимальная выходная яркость. Применение: Outdoor, витрины, любые инсталляции с высокой внешней засветкой.<br>
                <strong>Black SMD:</strong> Подложка поглощает паразитный свет → яркость ниже на 15–20%, но контрастность и глубина чёрного кардинально выше. Применение: Broadcast-студии, переговорные, интерьерные экраны с высокими требованиями к качеству картинки.
              </span>
            </li>
          </ul>
        </div>

        <div class="section-label">Эшелоны производителей (Vendor Tiers)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-good">
            <h4 style="font-size:15px; margin-bottom:8px;">🏆 Tier-1: Premium (Nichia, Cree)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Происхождение:</strong> Исторические лидеры индустрии (Япония, США). Нулевой разброс характеристик от партии к партии.</li>
              <li><strong>Эксплуатация:</strong> Минимальная деградация кристалла. Экраны сохраняют яркость и цветопередачу более 7–10 лет при режиме 24/7.</li>
              <li><strong>Применение:</strong> Проекты с критическими требованиями к отказоустойчивости — аэропорты, диспетчерские, телестудии. Удорожание сметы на 30–50% относительно Tier-2.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">✅ Tier-2: Золотой стандарт (Nationstar)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Происхождение:</strong> Nationstar (КНР) — индустриальный стандарт коммерческого сегмента.</li>
              <li><strong>Эксплуатация:</strong> Стабильная работа 5+ лет. Уровень заводского брака &lt; 10 ppm (штук на миллион).</li>
              <li><strong>Градация внутри бренда:</strong> серия <strong>RS (Ree-Star)</strong> — премиум-линейка, серия <strong>RE</strong> — базовая. Разница в биннинге, термоустойчивости и ресурсе.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Технология бондинга (Wire Bonding)</div>
        <div class="card" style="margin-bottom:24px">
          <p><strong>Wire Bonding</strong> — технология микросварки, соединяющей кристалл с контактными площадками внутри SMD-корпуса. Критически влияет на устойчивость к термошоку.</p>
          <div class="grid-2" style="margin-top:16px; margin-bottom:16px">
            <div style="border-left: 3px solid var(--good); padding-left: 12px;">
              <h4 style="font-size:14px;">Золотая нить (Gold Wire / Au)</h4>
              <ul style="margin-top:8px; padding-left:16px; font-size: 13px; color:var(--text2);">
                <li><strong>Физика:</strong> Высокая пластичность, нулевая склонность к окислению.</li>
                <li><strong>Поведение при термошоке:</strong> При перепадах температур (−30°C зимой / +70°C на солнце) материалы корпуса и нить расширяются неравномерно. Золото амортизирует деформации без обрыва контакта.</li>
              </ul>
            </div>
            <div style="border-left: 3px solid var(--warn); padding-left: 12px;">
              <h4 style="font-size:14px;">Медная нить (Copper Wire / Cu)</h4>
              <ul style="margin-top:8px; padding-left:16px; font-size: 13px; color:var(--text2);">
                <li><strong>Физика:</strong> Жёсткий металл, высокая склонность к окислению при контакте с микровлагой.</li>
                <li><strong>Поведение при термошоке:</strong> Разница КТР (коэффициента теплового расширения) между медью и корпусом приводит к физическому обрыву нити — появляются мёртвые или «залипшие» пиксели.</li>
              </ul>
            </div>
          </div>
          <div class="info-box info-green">
            <strong>Матрица применения:</strong>
            <br>• <strong>Outdoor:</strong> Исключительно <strong>золотая нить (Au)</strong>. Медь в условиях уличных перепадов температур и влажности недопустима.
            <br>• <strong>Indoor с климат-контролем:</strong> Допускается <strong>медная нить (Cu)</strong>. В стабильных условиях медь не подвергается разрушительным термошокам.
          </div>
        </div>

  `
};