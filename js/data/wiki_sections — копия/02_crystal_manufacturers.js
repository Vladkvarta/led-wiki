export const section = {
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
};
