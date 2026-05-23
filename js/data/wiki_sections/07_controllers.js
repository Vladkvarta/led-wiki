export const section = {
  id: "controllers",
  icon: "🎛️",
  title: "Контроллеры и системы управления",
  content: `

        <div class="info-box info-blue" style="margin-bottom: 24px;">
          <strong>🎯 Суть раздела:</strong> Контроллеры — это мозг экрана. Ошибка в расчетах управляющей системы приведет к тому, что экран либо не включится, либо будет дико «тормозить», а вы потеряете маржу на экстренной докупке оборудования.
          <br><br>
          <strong>💡 Правило большого пальца (Rule of Thumb):</strong> Железо управления должно стоить не менее 10-15% от стоимости самих LED-модулей. Экономия на контроллерах убивает 100% инвестиций в дорогие диоды.
        </div>

        <div class="section-label">1. Архитектура: Синхронные vs Асинхронные системы</div>
        <div class="grid-2" style="margin-bottom: 24px;">
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px; color:var(--text);">🖥️ Синхронная система (Live)</h4>
            <p style="font-size:13px; color:var(--text2); margin-bottom:8px;"><strong>Как работает:</strong> Экран показывает ровно то, что сейчас на мониторе подключенного ПК или камеры. Нет ПК/сигнала = нет картинки (черный экран).</p>
            <ul style="padding-left:16px; font-size: 13px;">
              <li><strong>Оборудование:</strong> Sending Card (MSD300) + ПК или Видеопроцессор (VX600).</li>
              <li><strong>Применение:</strong> Сцены, ивенты, ТВ-студии, спортбары (там, где идет прямая трансляция).</li>
              <li><strong>Аргумент для клиента:</strong> <em>«Нулевая задержка сигнала. Идеально для живых выступлений и интеграции с вашим пультом видеорежиссера».</em></li>
            </ul>
          </div>
          <div class="card card-accent">
            <h4 style="font-size:15px; margin-bottom:8px; color:var(--text);">☁️ Асинхронная система (Плееры)</h4>
            <p style="font-size:13px; color:var(--text2); margin-bottom:8px;"><strong>Как работает:</strong> В контроллере есть своя память и Android. Мы загружаем туда ролики (по Wi-Fi/4G), и контроллер крутит их сам. ПК не нужен.</p>
            <ul style="padding-left:16px; font-size: 13px;">
              <li><strong>Оборудование:</strong> Медиаплееры (Novastar серия Taurus: TB1, TB30, TB50).</li>
              <li><strong>Применение:</strong> Рекламные билборды, пилоны, экраны в ТЦ.</li>
              <li><strong>Аргумент для клиента:</strong> <em>«Вам не нужно ставить системный блок на улице. Управляйте рекламой на всех ваших 50 экранах из офиса через облако (VNNOX) по 4G».</em></li>
            </ul>
          </div>
        </div>

        <div class="section-label">2. Топология: Как картинка попадает на диоды</div>
        <div class="card" style="margin-bottom: 24px;">
          <p><strong style="color:var(--text)">1. Отправляющая карта (Sending Card)</strong> — стоит у источника. Режет 4K/FullHD видео на куски и отправляет по витой паре (LAN).</p>
          <div style="background: var(--bg-alt); border-left: 3px solid var(--accent); padding: 8px 12px; margin: 8px 0 16px 0; font-size: 13px;">
            <strong>🔥 Жесткий лимит:</strong> 1 LAN-порт передает ровно <strong>650 000 пикселей</strong> при 60Hz. <br>
            <em>Формула менеджера:</em> Общее кол-во пикселей экрана / 650 000 = кол-во нужных LAN-портов на процессоре (округляем всегда в большую сторону).
          </div>
          
          <p><strong style="color:var(--text)">2. Принимающая карта (Receiving Card)</strong> — плата внутри каждого кабинета. Принимает кусок картинки из LAN и раздает на модули через HUB-шлейфы.</p>
          <div style="background: var(--bg-alt); border-left: 3px solid var(--warn); padding: 8px 12px; margin: 8px 0 0 0; font-size: 13px;">
             <strong>🔥 Внимание к лимитам карты:</strong> У каждой Receiving Card есть ограничение по Ширине (макс 256/512px), Высоте (зависит от кол-ва HUB-портов, 1 порт = 1 модуль в высоту) и Общей емкости (обычно 65k-130k px). <em>Превысите один параметр — часть кабинета будет черной.</em>
          </div>
        </div>

        <div class="section-label">3. Секретное оружие B2B продаж: Качество картинки</div>
        <div class="card" style="margin-bottom: 24px;">
          <p style="font-size:14px; margin-bottom:12px;">Почему два экрана на диодах P2.5 могут отличаться в цене на 30%? Разница в "мозгах" самого модуля — <strong>IC Драйверах (Микросхемах)</strong>.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 13px; text-align: left;">
            <tr style="border-bottom: 1px solid var(--border);">
              <th style="padding: 8px; width: 25%;">Параметр</th>
              <th style="padding: 8px; width: 35%;">Что это (Технически)</th>
              <th style="padding: 8px; width: 40%;">Аргумент для клиента (Коммерция)</th>
            </tr>
            <tr style="border-bottom: 1px solid var(--border);">
              <td style="padding: 8px;"><strong>Refresh Rate<br>(Частота обновления)</strong></td>
              <td style="padding: 8px;">Скорость мерцания ШИМ (PWM). Стандарт: 1920Hz или 3840Hz+.</td>
              <td style="padding: 8px;"><em>«Если экран будут снимать на телефон или ТВ-камеры, при 1920Hz по экрану пойдут черные полосы. Берем 3840Hz, чтобы ваш бренд на фото выглядел премиально».</em></td>
            </tr>
            <tr style="border-bottom: 1px solid var(--border);">
              <td style="padding: 8px;"><strong>Grayscale<br>(Градации серого)</strong></td>
              <td style="padding: 8px;">Битность цвета. 14-bit (стандарт) vs 16-bit / 18-bit (премиум).</td>
              <td style="padding: 8px;"><em>«При снижении яркости экрана до 10-20% (вечером), дешевый чип покажет "лесенки" градиентов вместо плавных теней. 16-bit сохранит детали картинки».</em></td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Тип драйвера<br>(ICN vs MBI)</strong></td>
              <td style="padding: 8px;">ICN2153 (базовый Китай), MBI5153/5252 (Macroblock, Тайвань - топ).</td>
              <td style="padding: 8px;"><em>«Мы закладываем чипы MBI. Они не перегреваются на пиковой яркости и исключают эффект "гусеницы" (битые пиксели по шлейфу)».</em></td>
            </tr>
          </table>
        </div>

        <div class="section-label">4. Процессоры All-in-One (Scaler + Sender)</div>
        <div class="card" style="margin-bottom: 24px;">
          <p style="font-size:13px; color:var(--text2); margin-bottom:12px;">Процессор берет нестандартное разрешение экрана (например, 1456 x 832 px) и "натягивает" на него стандартный HDMI-сигнал (1920x1080) без искажений пропорций. Линейка Novastar VX — мировой стандарт.</p>
          
          <ul style="margin-top:8px; padding-left:16px; font-size: 13px;">
            <li style="margin-bottom: 6px;"><strong>VX4S-N / VX400:</strong> 4 LAN-порта (до ~2.3 млн пикселей). База для экранов до 10-12 кв.м.</li>
            <li style="margin-bottom: 6px;"><strong>VX600:</strong> 6 LAN-портов (до 3.9 млн пикселей). Хит продаж. Поддерживает PIP (картинка в картинке) — идеально для конференц-залов (презентация + спикер).</li>
            <li style="margin-bottom: 6px;"><strong>VX1000:</strong> 10 LAN-портов (до 6.5 млн пикселей). Для больших P2.0 / P1.8 экранов.</li>
            <li><strong style="color:var(--text)">Seamless Switching (Бесшовное переключение):</strong> <em>«В дешевых контроллерах при переключении с HDMI 1 на HDMI 2 экран мигает черным на 2 секунды. В серии VX переключение мгновенное — зритель не заметит смены источника».</em></li>
          </ul>
        </div>

        <div class="section-label">5. Масштабирование и Резервирование (Оптика)</div>
        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">🚀 Fiber Optic (Оптика)</h4>
            <p style="font-size:13px; color:var(--text2);">Витая пара (LAN) работает без потерь <strong>строго до 100 метров</strong>. Если серверная клиента далеко (стадион, ТЦ) — продаем Оптические конвертеры (Novastar CVT10 / CVT320).<br><br>
            <strong>Аргумент:</strong> <em>«Без оптической трассы сигнал просто затухнет, экран будет моргать. Мы ставим модуль CVT у экрана и тянем тонкую оптику в серверную на 500 метров без задержек».</em></p>
          </div>
          <div class="card">
            <h4 style="font-size:15px; margin-bottom:8px;">🛡️ Redundancy (Кольцо)</h4>
            <p style="font-size:13px; color:var(--text2);">Подключение экрана кольцом (Loop). Сигнал идет от процессора к первой карте кабинета, а от последнего кабинета возвращается обратно в процессор в запасной порт.<br><br>
            <strong>Аргумент:</strong> <em>«Если во время выступления CEO кто-то выдернет кабель из центра экрана, он НЕ погаснет. Сигнал за миллисекунды пойдет с другой стороны. Ваша страховка за +10% к смете».</em></p>
          </div>
        </div>

        <div class="section-label">6. Битва брендов: Кого ставить в проект?</div>
        <div class="card" style="margin-bottom: 24px;">
          <ul style="padding-left:16px; font-size: 13px;">
            <li style="margin-bottom: 8px;"><strong style="color:var(--text)">🥇 Novastar:</strong> Мировой монополист. Максимальная надежность. Софт: NovaLCT / SmartLCT. <strong>Аргумент:</strong> <em>«Если наш инженер исчезнет, любой фрилансер в РФ/СНГ настроит NovaStar за 10 минут. Это индустриальный стандарт».</em></li>
            <li style="margin-bottom: 8px;"><strong style="color:var(--text)">🥈 Colorlight:</strong> Главный конкурент. На 15-20% дешевле при сопоставимом качестве. Софт: LEDVision. Закладываем, когда нужно жестко резать косты в тендере.</li>
            <li style="margin-bottom: 8px;"><strong style="color:var(--text)">💎 Brompton (UK):</strong> Rolls-Royce в мире LED. Стоит x10 от NovaStar. Используется ТОЛЬКО в Virtual Production (съемки кино, замена хромакея). Идеальная цветопередача.</li>
            <li><strong style="color:var(--text)">🛒 Huidu:</strong> Дешевые асинхронные контроллеры. Идеально для аптечных крестов, бегущих строк и простых вывесок (управление с телефона через LEDArt). <strong>Запрещено:</strong> ставить на большие видеоэкраны (будет рассинхрон).</li>
          </ul>
        </div>
    
  `
};