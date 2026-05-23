export const section = {
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
};
