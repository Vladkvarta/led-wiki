export const section = {
  id: "crystal-manufacturers",
  icon: "💎",
  title: "Кристаллы и Инкапсуляция",
  content: `

        <div class="section-label">Анатомия светодиода: Кристалл vs Корпус</div>
        <div class="card" style="margin-bottom: 24px;">
          <p>Важно различать производителя полупроводника и завод, выполняющий инкапсуляцию. Использование качественного чипа не гарантирует долговечности при плохой сборке.</p>
          <ul style="margin-top:12px; font-size: 14px; padding-left:16px; display:flex; flex-direction:column; gap:12px;">
            <li>
              <strong>LED Die (Эпитаксиальный кристалл)</strong> + <em>Голый полупроводник, излучающий свет (San'an, Epistar)</em> = <strong>Источник света.</strong> 
              <br><span style="color:var(--text2); font-size: 13px;">Определяет базовую яркость, спектр и изначальный ресурс работы.</span>
            </li>
            <li>
              <strong>LED Package / SMD (Инкапсуляция/Сборка)</strong> + <em>Готовая деталь: кристалл запаян в корпус, соединен микронитью и залит линзой (Nationstar, Kinglight)</em> = <strong>Защита и оптика.</strong>
              <br><span style="color:var(--text2); font-size: 13px;">Определяет угол обзора, контрастность, термоотвод и герметичность (защиту чипа от влаги и окисления).</span>
            </li>
          </ul>
          <div class="info-box info-blue" style="margin-top: 16px;">
            <strong>Технический нюанс:</strong> Качественный кристалл (например, San'an) в дешевой no-name инкапсуляции выходит из строя из-за нарушения герметичности корпуса. Влага и температурные деформации корпуса физически уничтожают чип или отрывают контакты. Надежная заводская инкапсуляция (например, Nationstar) обеспечивает нужный уровень защиты.
          </div>
        </div>

        <div class="section-label">Визуальная инженерия: Биннинг и Контраст</div>
        <div class="card" style="margin-bottom: 24px;">
          <ul style="margin-top:0; font-size: 14px; padding-left:16px; display:flex; flex-direction:column; gap:16px;">
            <li>
              <strong>Binning (Биннинг / Сортировка)</strong> + <em>Группировка диодов с идентичной длиной волны и яркостью.</em>
              <br><span style="color:var(--text2); font-size: 13px;"><strong>Влияние на картинку:</strong> Отсутствие жесткого биннинга приводит к эффекту Mura (пятнистость). Белый фон будет отображаться неравномерно, с розоватыми или зеленоватыми участками. Однородный бин гарантирует идеальную калибровку и равномерность цвета по всей площади полотна.</span>
            </li>
            <li>
              <strong>Black SMD vs White SMD (Цвет корпуса)</strong> + <em>Цвет отражающей подложки внутри самого диода.</em>
              <br><span style="color:var(--text2); font-size: 13px;"><strong>White SMD (Белые):</strong> Максимизируют выходную яркость за счет отражения света. Оптимальное применение: Outdoor. <br><strong>Black SMD (Черные):</strong> Поглощают часть света, снижая общую яркость, но радикально повышают показатель контрастности. Обеспечивают глубокий уровень черного цвета. Целевое применение: Broadcast-студии, переговорные, интерьерные экраны с высокими требованиями к качеству картинки.</span>
            </li>
          </ul>
        </div>

        <div class="section-label">Эшелоны производителей (Vendor Tiers)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-good">
            <h4 style="font-size:15px; margin-bottom:8px;">🏆 Tier-1: Premium (Nichia, Cree)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Происхождение:</strong> Исторические лидеры индустрии (Япония, США). Нулевой разброс характеристик от партии к партии.</li>
              <li><strong>Эксплуатация:</strong> Минимальная деградация кристалла. Экраны сохраняют яркость и цветопередачу более 7-10 лет при режиме 24/7.</li>
              <li><strong>Позиционирование:</strong> Ведет к удорожанию сметы на 30-50%. Применяется в проектах с критическими требованиями к отказоустойчивости (аэропорты, диспетчерские, телестудии).</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">✅ Tier-2: Золотой стандарт (Nationstar)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong>Происхождение:</strong> Nationstar (КНР) — индустриальный стандарт коммерческого сегмента.</li>
              <li><strong>Эксплуатация:</strong> Стабильная работа на протяжении 5+ лет. Уровень заводского брака < 10 ppm (штук на миллион).</li>
              <li><strong>Позиционирование:</strong> Оптимальный выбор для коммерческого сектора. Важно учитывать градацию внутри бренда: серия RS (Ree-Star) относится к премиум-линейке, RE — к базовой.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">Технология бондинга (Wire Bonding)</div>
        <div class="card" style="margin-bottom:24px">
          <p><strong>Wire Bonding</strong> — способ микросварки, подающей ток на кристалл внутри SMD-корпуса. Критически влияет на устойчивость к термошоку.</p>
          <div class="grid-2" style="margin-top:16px; margin-bottom:16px">
            <div style="border-left: 3px solid var(--good); padding-left: 12px;">
              <h4 style="font-size:14px;">Золотая нить (Gold Wire / Au)</h4>
              <ul style="margin-top:8px; padding-left:16px; font-size: 13px; color:var(--text2);">
                <li><strong>Физика:</strong> Высокая пластичность металла, нулевая подверженность окислению.</li>
                <li><strong>Эксплуатационное значение:</strong> При перепадах температур (например, от -30°C зимой до +70°C на солнце летом) материалы корпуса и нить расширяются неравномерно. Золото амортизирует эти деформации без обрыва контакта. Минимальный процент битых пикселей.</li>
              </ul>
            </div>
            <div style="border-left: 3px solid var(--warn); padding-left: 12px;">
              <h4 style="font-size:14px;">Медная нить (Copper Wire / Cu)</h4>
              <ul style="margin-top:8px; padding-left:16px; font-size: 13px; color:var(--text2);">
                <li><strong>Физика:</strong> Жесткий металл, высокая склонность к окислению при контакте с микро-влагой.</li>
                <li><strong>Эксплуатационное значение:</strong> Не выдерживает сильных термошоков. Разница в коэффициенте теплового расширения (КТР) приводит к физическому обрыву провода. Результат — появление «мертвых» или зависших (горящих одним цветом) пикселей.</li>
              </ul>
            </div>
          </div>
          <div class="info-box info-green">
            <strong>Матрица применения:</strong>
            <br>• <strong>Outdoor (Улица):</strong> Исключительно <strong>Золотая нить (Au)</strong>. Использование меди в условиях уличных перепадов температур и влажности недопустимо.
            <br>• <strong>Indoor (Помещение):</strong> Допускается использование <strong>Медной нити (Cu)</strong>. В условиях стабильного климат-контроля медь не подвергается разрушительным термошокам, что позволяет безопасно оптимизировать бюджет на 10-15%.
          </div>
        </div>
    
  `
};