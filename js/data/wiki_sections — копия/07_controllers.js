export const section = {
  id: "controllers",
  icon: "🎛️",
  title: "Контроллеры и системы управления",
  content: `

        <div class="info-box info-blue" style="margin-bottom: 24px;">
          <strong>🎯 Суть раздела:</strong> Контроллеры — это мозг экрана. Ошибка в расчетах управляющей системы приведет к тому, что экран либо не включится, либо будет дико «тормозить», а вы потеряете маржу на экстренной докупке оборудования.
        </div>

        <div class="section-label">Архитектура: Как передается картинка?</div>
        <div class="card" style="margin-bottom: 24px;">
          <p><strong style="color:var(--text)">1. Отправляющая карта (Sending Card / Плеер)</strong> — стоит у источника сигнала (ноутбука). Берет видео (HDMI) и "режет" его на куски, отправляя по LAN-кабелям (витой паре) к экрану. <br><span style="color:var(--text2); font-size:13px;"><em>Грубый расчет: 1 LAN-порт отправляющей карты может передать ровно <strong>650 000 пикселей</strong>. (Если экран на 2 млн пикселей — потребуется карта минимум с 4 портами).</em></span></p>
          
          <p style="margin-top:12px;"><strong style="color:var(--text)">2. Принимающая карта (Receiving Card)</strong> — маленькая плата, стоящая внутри <strong>каждого</strong> кабинета (или на каждые 4-8 модулей). Она принимает "кусок" картинки из LAN-кабеля и раздает его на модули через шлейфы (HUB-порты).</p>
        </div>

        <div class="section-label">КАК РАССЧИТАТЬ ПРИНИМАЮЩУЮ КАРТУ (Receiving Card)</div>
        <div class="card" style="margin-bottom: 24px; border-left: 4px solid var(--accent);">
          <p style="font-size:14px; margin-bottom:12px;">Менеджеры часто думают, что у карты есть просто "общий лимит" пикселей. Это ошибка! Карту ограничивают <strong>три жестких параметра</strong>, и если превысить хоть один — экран не заработает.</p>
          
          <h4 style="font-size:14px; color:var(--text);">Правило 1: Физические порты (Высота)</h4>
          <p style="font-size:13px; color:var(--text2); margin-top:4px;">На карте есть разъемы (HUB75). Обычно их 8, 12 или 16. <br><strong>1 порт = 1 ряд модулей в высоту.</strong><br>
          <em>Пример: Если вы делаете кабинет высотой в 10 модулей, вам нужна карта минимум на 10-12 портов. Карта на 8 портов туда физически не подключится.</em></p>

          <h4 style="font-size:14px; color:var(--text); margin-top:12px;">Правило 2: Максимальная ширина (Ширина)</h4>
          <p style="font-size:13px; color:var(--text2); margin-top:4px;">Карта не может "протолкнуть" сигнал по шлейфу бесконечно далеко. У каждой карты есть лимит ширины (например, 256 пикселей или 512px у новых).<br>
          <em>Пример: Если модуль имеет разрешение 64х64 px, то 1 порт сможет "запитать" в ширину максимум 4 модуля (64 * 4 = 256). Пятый модуль уже будет темным.</em></p>

          <h4 style="font-size:14px; color:var(--text); margin-top:12px;">Правило 3: Общая нагрузка (Пиксели)</h4>
          <p style="font-size:13px; color:var(--text2); margin-top:4px;">Умножаем Ширину на Высоту (например, 256 х 256 = 65 536 px). Если общая емкость (пикселей) кабинета больше этой цифры — нужно ставить <strong>две</strong> принимающие карты в один кабинет!</p>

          <div class="info-box info-green" style="margin-top:16px;">
            <strong>🚀 Боевой пример расчёта:</strong><br>
            Кабинет собран из модулей P2.5 (разрешение модуля 128x64 px). Размер кабинета: 2 модуля в ширину, 3 в высоту.<br>
            1. <strong>Высота:</strong> 3 модуля. (Нужно 3 порта HUB. Любая карта подойдет, даже базовая на 8 портов).<br>
            2. <strong>Ширина:</strong> 2 модуля * 128 px = 256 px. (Стандартная карта тянет ширину 256 — проходим впритык).<br>
            3. <strong>Общая нагрузка:</strong> 256px (ширина) * 192px (высота) = 49 152 px. Это меньше базового лимита карты в 65к px.<br>
            <strong>Итог:</strong> На этот кабинет гарантированно достаточно 1 базовой принимающей карты (например, Novastar MRV336).
          </div>
        </div>

        <div class="section-label">Битва брендов: Что ставить в смету?</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card card-good">
            <h4 style="font-size:15px; margin-bottom:8px;">🥇 Novastar (Мировой стандарт)</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> "Apple" в мире LED-экранов.</li>
              <li><strong style="color:var(--text)">Аргумент для клиента:</strong> «Мы закладываем мозги Novastar. Это гарантия того, что если завтра наш инженер улетит на Марс, любой фрилансер в стране сможет починить вам экран за 5 минут. Это самая безотказная система».</li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px;">🥈 Colorlight</h4>
            <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
              <li><strong style="color:var(--text)">Что это:</strong> Главный конкурент, часто дешевле на 15-20%.</li>
              <li><strong style="color:var(--text)">Как использовать:</strong> Закладываем в смету, если тендер идет "в кровь" по цене, и мы не проходим с Novastar. Качество отличное, но софт менее удобный.</li>
            </ul>
          </div>
          <div class="card card-warn" style="grid-column: span 2;">
            <h4 style="font-size:15px; margin-bottom:8px;">🛒 Huidu (Для вывесок)</h4>
            <p style="font-size:13px; color:var(--text2);"><strong style="color:var(--text)">Где применять:</strong> Маленькие уличные табло, бегущие строки, кресты на аптеках. Управляются с телефона по Wi-Fi (через приложение LEDArt). <br><strong>Не ставить на большие синхронные экраны (будет рассинхрон кадров).</strong></p>
          </div>
        </div>

        <div class="section-label">Процессоры All-in-One (Серия VX у Novastar)</div>
        <div class="card" style="margin-bottom:24px">
          <p style="font-size:13px; color:var(--text2);">Раньше клиенту нужно было покупать отдельно Отправляющую Карту, отдельно Видеопроцессор (Scaler), чтобы картинка с компьютера красиво растянулась на весь нестандартный LED-экран.</p>
          <ul style="margin-top:12px; padding-left:16px; font-size: 13px;">
            <li><strong style="color:var(--text)">Зачем клиенту процессор (VX4S / VX600 / VX1000):</strong> Это всё-в-одном. Клиент втыкает флешку или HDMI от любого ноутбука — и картинка сама идеально подгоняется под размер экрана (не обрезаясь).</li>
            <li><strong style="color:var(--text)">Сколько портов нужно:</strong> Смотрим на общее разрешение экрана. До 2.3 млн пикселей — берем процессор на 4 порта. До 3.9 млн пикселей — нужен на 6 портов (VX600). Более 6 млн — на 10 портов (VX1000).</li>
          </ul>
        </div>
    
  `
};
