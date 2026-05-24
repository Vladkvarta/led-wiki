export const section = {
  id: "controllers",
  icon: "🎛️",
  title: "Управляющая электроника и Процессинг",
  content: `

        <div class="info-box info-orange" style="margin-bottom:20px">
          <strong>Инженерная сводка:</strong> Контроллеры — это мозг экрана. Ошибка в расчетах управляющей системы приведет к тому, что экран либо не включится, либо будет дико «тормозить», а вы потеряете маржу на экстренной докупке оборудования. Железо управления должно стоить не менее 10-15% от стоимости самих LED-модулей.
        </div>

        <div class="section-label">Сигнальная цепь — полная схема потока данных</div>
        <div class="card" style="margin-bottom: 24px;">
          <div style="display: flex; align-items: center; gap: 6px; padding: 8px 0; flex-wrap: wrap;">
            <span class="badge badge-blue" style="font-size:12px; padding:6px 10px;">Медиаплеер / Видеопроцессор</span>
            <span style="color:var(--text3);">→</span>
            <span class="badge" style="font-size:12px; padding:6px 10px; background:var(--bg2); color:var(--text);">Ethernet (1Gbit)</span>
            <span style="color:var(--text3);">→</span>
            <span class="badge" style="font-size:12px; padding:6px 10px; background:var(--bg2); color:var(--text);">Receiving Card (FPGA)</span>
            <span style="color:var(--text3);">→</span>
            <span class="badge" style="font-size:12px; padding:6px 10px; background:var(--bg2); color:var(--text);">HUB75</span>
            <span style="color:var(--text3);">→</span>
            <span class="badge" style="font-size:12px; padding:6px 10px; background:var(--bg2); color:var(--text);">IC-драйвер → LED</span>
          </div>
          <p style="margin-top: 10px; font-size: 13px; color: var(--text2);">Принципиальное разделение: <strong>отправитель</strong> (плеер/процессор) формирует и упаковывает проприетарный поток → <strong>Receiving Card</strong> внутри каждого кабинета его декодирует → разгоняет RGB-сигнал по IC-драйверам. Это две абсолютно независимые зоны ответственности.</p>
        </div>

        <div class="section-label">1. Медиаплееры — асинхронные SoC-системы</div>
        <div class="card card-accent" style="margin-bottom: 16px;">
          <div class="badge badge-blue" style="margin-bottom:8px;">Ключевая концепция</div>
          <h4 style="font-size:15px; margin-bottom:8px;">Асинхронный медиаплеер</h4>
          <p><strong>Что это:</strong> Автономный мини-компьютер (Android / Yocto Linux) с аппаратным декодером и собственной flash-памятью. Рендерит контент самостоятельно — без внешнего ПК и без постоянного сетевого соединения. Промышленный стандарт — линейка <strong>NovaStar Taurus (TB)</strong>.</p>
          <p style="margin-top: 6px;"><strong>Почему «асинхронный»:</strong> Плеер живёт по своему расписанию. Получил контент по сети → сохранил → воспроизводит независимо. В противоположность синхронному процессору, который транслирует поток в реальном времени (Live) без буфера.</p>
        </div>

        <div class="table-wrap" style="margin-bottom: 24px;">
          <table>
            <thead>
              <tr>
                <th style="width:14%">Уровень</th>
                <th style="width:22%">Модели</th>
                <th style="width:22%">Пиксельный лимит</th>
                <th style="width:42%">Критические нюансы</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-key">Entry</td>
                <td>TB1, TB2</td>
                <td>до 650 000 px</td>
                <td>Слабый SoC: нет аппаратного декодера H.265, не тянет высокий битрейт. Только WiFi/LAN, нет видеовхода.</td>
              </tr>
              <tr>
                <td class="td-key">Mid-tier</td>
                <td>TB30, TB40</td>
                <td>до 1 300 000 px</td>
                <td>Добавлен HDMI-вход. Поддержка 4G-модуля. <strong>Важно:</strong> SoC аппаратно декодирует 4K-файл и ресайзит его под размер холста — это не «воспроизведение 4K».</td>
              </tr>
              <tr>
                <td class="td-key">Pro</td>
                <td>TB50, TB60</td>
                <td>до 2 300 000 px</td>
                <td>HDMI in/out. Аппаратная синхронизация кадров по NTP/GPS. <strong>Каскадирование:</strong> два TB50 на фасад 4M px — без GPS-синхронизации на стыке зон будет Tearing (горизонтальная «рябь» на стыке).</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid-3" style="margin-bottom:24px">
          <div class="card">
            <div class="badge badge-blue" style="margin-bottom:8px;">SaaS</div>
            <h4 style="font-size:14px; margin-bottom:4px;">VNNOX Cloud</h4>
            <p style="font-size:13px; margin-bottom:12px;">Плеер выходит в интернет через 4G и стучится на CDN вендора. Идеально для сетей в сотнях экранов по всей стране — единый интерфейс управления.</p>
            <div class="info-box info-orange" style="margin-bottom:0; padding:8px 12px; font-size:12px;">
              <strong>Риск:</strong> Закрытая экосистема. Зависимость от CDN NovaStar. Не подходит для объектов с ограниченным интернетом.
            </div>
          </div>
          <div class="card">
            <div class="badge badge-green" style="margin-bottom:8px;">Local LAN</div>
            <h4 style="font-size:14px; margin-bottom:4px;">ViPlex Express</h4>
            <p style="font-size:13px; margin-bottom:12px;">Управление внутри замкнутой LAN-сети по UDP Broadcast / TCP 5200. Плеер не имеет выхода наружу.</p>
            <div class="info-box info-blue" style="margin-bottom:0; padding:8px 12px; font-size:12px;">
              <strong>Применение:</strong> Air-gapped объекты: госструктуры, банки, ЦОД. Максимальная безопасность.
            </div>
          </div>
          <div class="card">
            <div class="badge badge-orange" style="margin-bottom:8px;">Dev / Custom</div>
            <h4 style="font-size:14px; margin-bottom:4px;">REST API</h4>
            <p style="font-size:13px; margin-bottom:12px;">Taurus отдаёт локальный REST API. Любой Node.js / Python сервис может отправить JSON с динамическим контентом прямо в слой плеера.</p>
            <div class="info-box info-blue" style="margin-bottom:0; padding:8px 12px; font-size:12px;">
              <strong>Применение:</strong> Курсы валют, счёт матча, расписание транспорта — данные без перепаковки контента.
            </div>
          </div>
        </div>

        <div class="section-label">2. Синхронные видеопроцессоры</div>
        <div class="card card-accent" style="margin-bottom: 16px;">
          <div class="badge badge-blue" style="margin-bottom:8px;">Ключевая концепция</div>
          <h4 style="font-size:15px; margin-bottom:8px;">Синхронный процессор</h4>
          <p><strong>Что это:</strong> Устройство реального времени (Live). Не хранит контент — только захватывает входящий видеопоток (HDMI / DP / SDI), масштабирует его (Scaler) под кастомное разрешение экрана и отправляет с задержкой 1–3 кадра. Отключи источник — экран погаснет.</p>
          <p style="margin-top: 6px;"><strong>Scaler — встроенный масштабировщик:</strong> Аппаратный блок, перегоняющий стандартное 1920×1080 изображение в нестандартное разрешение LED-полотна (например, 3840×960) без потери качества.</p>
        </div>

        <div class="grid-2" style="margin-bottom:24px">
          <div class="card">
            <div class="badge badge-blue" style="margin-bottom:8px;">All-in-One</div>
            <h4 style="font-size:14px; margin-bottom:8px;">VX-серия (VX400, VX600, VX1000)</h4>
            <ul style="padding-left:16px; font-size:13px; color:var(--text2); display:flex; flex-direction:column; gap:6px;">
              <li>Стандарт для ивентов, конференц-залов, арен.</li>
              <li>Встроенный Scaler + многоуровневый планировщик слоёв.</li>
              <li><strong>PiP (Picture-in-Picture):</strong> несколько источников одновременно на одном экране — разные зоны, разные входы.</li>
              <li>Один блок = вся логика управления экраном.</li>
            </ul>
          </div>
          <div class="card card-warn">
            <div class="badge badge-orange" style="margin-bottom:8px;">Enterprise</div>
            <h4 style="font-size:14px; margin-bottom:8px;">H-серия — модульные матрицы</h4>
            <ul style="padding-left:16px; font-size:13px; color:var(--text2); display:flex; flex-direction:column; gap:6px;">
              <li>Архитектура как blade-серверы: докупаешь платы захвата и отправки под задачу.</li>
              <li>Десятки миллионов пикселей, множество RTSP/HDMI-входов одновременно.</li>
              <li>Применение: диспетчерские, broadcast-студии, гигантские видеостены.</li>
              <li><strong>MTBF выше</strong> за счёт горячей замены плат без остановки системы.</li>
            </ul>
          </div>
        </div>

        <div class="section-label">3. Receiving Card (RC) — мозг каждого кабинета</div>
        <div class="card card-danger" style="margin-bottom: 16px;">
          <div class="badge badge-red" style="margin-bottom:8px;">Аппаратный уровень</div>
          <h4 style="font-size:15px; margin-bottom:8px;">Receiving Card</h4>
          <p><strong>Что это:</strong> FPGA-микроконтроллер внутри каждого LED-кабинета. Получает Ethernet-поток от плеера/процессора, парсит пакеты и генерирует низкоуровневые управляющие сигналы для матрицы диодов.</p>
        </div>

        <div class="grid-2" style="margin-bottom:16px;">
          <div class="card">
            <h4 style="font-size:14px; margin-bottom:8px;">Что генерирует RC</h4>
            <ul style="padding-left:16px; font-size:13px; color:var(--text2); margin-bottom:12px;">
              <li><strong>DCLK (Data Clock)</strong> — тактовый сигнал.</li>
              <li><strong>LAT (Latch)</strong> — фиксирует строку данных в драйвере.</li>
              <li><strong>EN (Enable / OE)</strong> — ШИМ-управление яркостью.</li>
              <li><strong>RGB-шина</strong> — поточечная передача цвета.</li>
            </ul>
            <div class="info-box info-blue" style="margin-bottom:0; padding:8px 12px; font-size:12px;">
              <strong>NVRAM на борту:</strong> RC хранит заводскую оптическую калибровку пикселей. Без неё будут видны стыки модулей.
            </div>
          </div>
          <div class="card">
            <h4 style="font-size:14px; margin-bottom:8px;">HUB75 — интерфейс RC → модуль</h4>
            <p style="font-size:13px; color:var(--text2); margin-bottom:12px;">Стандартный 75-пиновый разъём между RC и светодиодным модулем. Самый распространённый в индустрии.</p>
            <div class="info-box info-orange" style="margin-bottom:8px; padding:8px 12px; font-size:12px;">
              <strong>Жёсткое правило:</strong> 1 порт HUB75 = 1 строка модулей в высоту. Конфигурация порты × ширина = физическая высота зоны RC.
            </div>
            <div class="info-box info-red" style="margin-bottom:0; padding:8px 12px; font-size:12px;">
              <strong>Trade-off (Частота vs Ёмкость):</strong> При Refresh Rate 3840Hz+ и 16-bit цвете максимальный пиксельный лимит RC падает на ~40%.
            </div>
          </div>
        </div>

        <div class="card" style="margin-bottom:24px;">
          <h4 style="font-size:14px; margin-bottom:12px;">Лимиты пиксельной ёмкости RC</h4>
          <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border); font-size:13px;">
            <span><strong>Стандартная RC</strong> (NovaStar A8s, MRV328)</span>
            <span style="color:var(--text2);">256×256 — 512×512 px</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border); font-size:13px;">
            <span><strong>Ограничивающий фактор</strong></span>
            <span style="color:var(--text2);">Объём RAM на FPGA-кристалле</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border); font-size:13px;">
            <span><strong>При 3840Hz + 16-bit</strong></span>
            <span style="color:var(--danger); font-weight:600;">Ёмкость падает до ~60% от номинала</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:8px 0; font-size:13px;">
            <span><strong>При 60Hz + 8-bit</strong></span>
            <span style="color:var(--good); font-weight:600;">Полная номинальная ёмкость</span>
          </div>
        </div>

        <div class="section-label">4. Математика пропускной способности Ethernet-портов</div>

        <div class="grid-2" style="margin-bottom:16px;">
          <div class="card">
            <h4 style="font-size:14px; margin-bottom:8px;">Теоретические лимиты 1Gbit/s порта</h4>
            <p style="font-size:12px; color:var(--text2); margin-bottom:12px;">Полезная нагрузка = 1 Гбит за вычетом оверхеда протокола NovaStar (~15%). Итого ~850 Мбит.</p>
            <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--border); font-size:13px;">
              <span>60Hz, 8-bit RGB</span>
              <strong>655 360 px</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--border); font-size:13px;">
              <span>120Hz, 8-bit (HFR)</span>
              <strong>~327 680 px</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 0; border-bottom:1px solid var(--border); font-size:13px;">
              <span>60Hz, 10–12-bit (HDR)</span>
              <strong>~327 680 px</strong>
            </div>
            <div style="display:flex; justify-content:space-between; padding:6px 0; font-size:13px;">
              <span>120Hz, 10-bit</span>
              <span style="color:var(--danger); font-weight:600;">~163 840 px (нужно 4 порта!)</span>
            </div>
          </div>
          <div class="card card-warn">
            <div class="badge badge-orange" style="margin-bottom:8px;">Rule of Thumb</div>
            <h4 style="font-size:14px; margin-bottom:8px;">Safety Margin 85% → 1 порт = 550 000 px</h4>
            <p style="font-size:12px; color:var(--text2); margin-bottom:12px;">При каскадной обвязке (Daisy-chain) накапливается джиттер пакетов. Пиковая нагрузка в 100% приведет к потере пакетов.</p>
            <div style="font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--warn); padding:8px 12px; background:rgba(224,90,0,0.1); border-radius:6px; margin:12px 0;">
              N портов = Σ пикселей / 550 000
            </div>
            <div class="info-box info-orange" style="margin-bottom:0; padding:10px; font-size:12px;">
              <strong>Пример расчета:</strong><br>
              Экран: 4 147 200 px<br>
              4 147 200 / 550 000 = 7.54<br>
              Округляем вверх: <strong>min 8 LAN-портов</strong>
            </div>
          </div>
        </div>

        <div class="calc-card" style="margin-bottom:24px;">
          <h4 class="calc-title">Калькулятор пропускной способности портов</h4>
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="display:flex; align-items:center; gap:16px; flex-wrap:wrap;">
              <div style="flex:1; min-width:120px;">
                <label>Ширина, px: <span id="width-out" style="color:var(--accent);">3840</span></label>
                <input type="range" id="width-sl" value="3840" min="100" max="10000" step="1" oninput="if(window.calcPorts) window.calcPorts()" onchange="if(window.calcPorts) window.calcPorts()">
              </div>
              <div style="flex:1; min-width:120px;">
                <label>Высота, px: <span id="height-out" style="color:var(--accent);">1080</span></label>
                <input type="range" id="height-sl" value="1080" min="100" max="5000" step="1" oninput="if(window.calcPorts) window.calcPorts()" onchange="if(window.calcPorts) window.calcPorts()">
              </div>
              <div style="flex:2; min-width:240px;">
                <label>Режим работы (Частота / Битность)</label>
                <select id="mode-sel" onchange="if(window.calcPorts) window.calcPorts()">
                  <option value="655360">60Hz, 8-bit RGB (стандарт - 655k px)</option>
                  <option value="327680">120Hz, 8-bit (HFR - 327k px)</option>
                  <option value="327680_hdr">60Hz, 10-12-bit (HDR - 327k px)</option>
                  <option value="163840">120Hz, 10-bit (163k px)</option>
                </select>
              </div>
            </div>
            
            <div style="display:flex; gap:24px; align-items:flex-end; padding:16px; background:var(--bg2); border:1px solid var(--border); border-radius:8px; flex-wrap:wrap;">
              <div style="flex:1; min-width:140px;">
                <div style="font-size:12px; color:var(--text3); text-transform:uppercase; font-weight:600; letter-spacing:0.5px; margin-bottom:4px;">Всего пикселей</div>
                <div id="total-px" style="font-size:24px; font-weight:700; color:var(--text); font-family:'JetBrains Mono', monospace;">4 147 200</div>
              </div>
              <div style="flex:1; min-width:140px;">
                <div style="font-size:12px; color:var(--text3); text-transform:uppercase; font-weight:600; letter-spacing:0.5px; margin-bottom:4px;">Портов (Safety 85%)</div>
                <div id="ports-out" style="font-size:28px; font-weight:700; color:var(--accent); font-family:'JetBrains Mono', monospace;">8</div>
              </div>
              <div style="flex:1; min-width:140px;">
                <div style="font-size:12px; color:var(--text3); text-transform:uppercase; font-weight:600; letter-spacing:0.5px; margin-bottom:4px;">Портов (100% лимит)</div>
                <div id="ports-theory" style="font-size:20px; font-weight:700; color:var(--text3); font-family:'JetBrains Mono', monospace;">7</div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-label">5. Физические среды передачи и топология отказоустойчивости</div>

        <div class="grid-2" style="margin-bottom:16px;">
          <div class="card card-accent">
            <div class="badge badge-blue" style="margin-bottom:8px;">Медь (RJ45)</div>
            <h4 style="font-size:14px; margin-bottom:8px;">UTP CAT5e / CAT6</h4>
            <ul style="padding-left:16px; font-size:13px; color:var(--text2); display:flex; flex-direction:column; gap:6px;">
              <li><strong>Максимум сегмента:</strong> 100 м до первого кабинета.</li>
              <li><strong>Daisy-chain (гирлянда):</strong> каскадирование кабинетов в пределах лимита порта.</li>
              <li><strong style="color:var(--danger);">Критически важно:</strong> Питание нельзя гирляндить более чем на 3–4 кабинета (будет перегрев и падение напряжения). Сигнал данных (витую пару) — можно.</li>
            </ul>
          </div>
          <div class="card card-accent">
            <div class="badge badge-blue" style="margin-bottom:8px;">Оптика</div>
            <h4 style="font-size:14px; margin-bottom:8px;">Fiber Optic — оптические трансиверы</h4>
            <ul style="padding-left:16px; font-size:13px; color:var(--text2); display:flex; flex-direction:column; gap:6px;">
              <li>Применяются, когда контроллер дальше 100 м от экрана.</li>
              <li><strong>NovaStar CVT10</strong> — медиаконвертер RJ45 → оптика.</li>
              <li><strong>Multi-mode (850нм):</strong> до 300 м. Дешевле.</li>
              <li><strong>Single-mode (1310нм):</strong> до 10–15 км. Для протяжённой инфраструктуры.</li>
            </ul>
          </div>
        </div>

        <div class="card card-good" style="margin-bottom:24px;">
          <div class="badge badge-green" style="margin-bottom:8px;">Отказоустойчивость</div>
          <h4 style="font-size:15px; margin-bottom:8px;">Loop Backup — резервирование кольцом</h4>
          <p style="font-size:13px; color:var(--text2); margin-bottom:8px;"><strong>Как работает:</strong> Primary LAN-порт плеера идёт в первый кабинет, поток идёт гирляндой через весь экран, последний кабинет отдаёт кабель в Backup LAN-порт того же плеера. Получается физическое кольцо.</p>
          <p style="font-size:13px; color:var(--text2); margin-bottom:12px;"><strong>При обрыве:</strong> контроллер за миллисекунды (hardware failover) поднимает реверсивный поток навстречу обрыву. Экран продолжает работать.</p>
          
          <div style="display: flex; align-items: center; gap: 6px; padding: 12px 0; flex-wrap: wrap;">
            <span class="badge badge-green" style="font-size:12px; padding:6px 10px;">Primary LAN</span>
            <span style="color:var(--text3);">→</span>
            <span class="badge" style="font-size:12px; padding:6px 10px; background:var(--bg2); color:var(--text);">Кабинет 1</span>
            <span style="color:var(--text3);">→</span>
            <span class="badge" style="font-size:12px; padding:6px 10px; background:var(--bg2); color:var(--text);">Кабинет 2...N</span>
            <span style="color:var(--text3);">→</span>
            <span class="badge badge-green" style="font-size:12px; padding:6px 10px;">Backup LAN</span>
          </div>

          <div class="info-box info-green" style="margin-bottom:0; padding:8px 12px; font-size:12px;">
            <strong>Цена архитектуры:</strong> Loop Backup требует двойного количества LAN-портов на отправляющем устройстве (Primary + Backup на каждое кольцо). Умножайте итог портов на 2.
          </div>
        </div>

        <div class="section-label">Rules of Thumb — быстрые ориентиры</div>
        <div class="grid-3" style="margin-bottom:24px;">
          <div class="card">
            <div class="badge badge-blue" style="margin-bottom:8px;">Порты</div>
            <div style="font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--accent); margin:4px 0;">px / 550 000 → портов</div>
            <p style="font-size:12px; color:var(--text2);">Считай по 85% Safety Margin. При Loop Backup — умножай на 2.</p>
          </div>
          <div class="card">
            <div class="badge badge-orange" style="margin-bottom:8px;">HFR / HDR</div>
            <div style="font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--warn); margin:4px 0;">≠ стандарт → ÷2 px</div>
            <p style="font-size:12px; color:var(--text2);">Каждое удвоение частоты или разрядности цвета вдвое снижает ёмкость порта.</p>
          </div>
          <div class="card">
            <div class="badge badge-blue" style="margin-bottom:8px;">Каскад плееров</div>
            <div style="font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--accent); margin:4px 0;">≥2 плеера → GPS Sync</div>
            <p style="font-size:12px; color:var(--text2);">Без аппаратной кадровой синхронизации на стыке зон гарантирован Tearing.</p>
          </div>
          <div class="card">
            <div class="badge badge-red" style="margin-bottom:8px;">Питание</div>
            <div style="font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--danger); margin:4px 0;">≤3–4 кабинета гирляндой</div>
            <p style="font-size:12px; color:var(--text2);">Топология питания и данных всегда независимы. Питание нельзя гирляндить бесконечно.</p>
          </div>
          <div class="card">
            <div class="badge badge-green" style="margin-bottom:8px;">Оптика</div>
            <div style="font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--good); margin:4px 0;">>100 м → CVT10</div>
            <p style="font-size:12px; color:var(--text2);">Медь физически ограничена 100 м. Дальше — только оптический трансивер.</p>
          </div>
          <div class="card">
            <div class="badge badge-orange" style="margin-bottom:8px;">RC vs Refresh</div>
            <div style="font-family:'JetBrains Mono', monospace; font-size:13px; font-weight:700; color:var(--warn); margin:4px 0;">3840Hz → −40% ёмкости</div>
            <p style="font-size:12px; color:var(--text2);">Высокая частота обновления жёстко режет пиксельный лимит одной RC. Учитывай при зонировании.</p>
          </div>
        </div>
        
        <script>
          setTimeout(() => {
            if(window.calcPorts) window.calcPorts();
          }, 100);
        </script>

  `
};