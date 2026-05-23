export const section = {
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
};
