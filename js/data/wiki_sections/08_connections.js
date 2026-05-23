export const section = {
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
};
