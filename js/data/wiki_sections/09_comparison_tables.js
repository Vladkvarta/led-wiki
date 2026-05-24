export const section = {
  id: "comparison-tables",
  icon: "📊",
  title: "Сравнительные таблицы",
  content: `

        <div class="section-label">Сравнение технологий инкапсуляции</div>
        <div class="info-box info-blue" style="margin-bottom:16px;">
          <strong>Что сравниваем:</strong> Инкапсуляция — это способ физической упаковки светодиодного кристалла в корпус и его крепления на плату модуля. Это не бренд и не конкретный производитель — это отраслевые технологии, которые используют все производители LED-экранов. От выбора технологии зависит защищённость, ремонтопригодность и минимально достижимый шаг пикселя.
          <br><br>
          <strong>SMD</strong> (Surface Mounted Device) — классика: три отдельных диода (R, G, B) в одном корпусе, припаянных на плату. <strong>COB</strong> (Chip-on-Board) — кристаллы без корпуса, залиты эпоксидной смолой прямо на плату общим слоем. <strong>GOB</strong> (Glue-on-Board) — SMD-модуль, поверх которого нанесён защитный слой компаунда. <strong>Mini LED</strong> — уменьшенный кристалл SMD (100–200 мкм), позволяет сделать пиксельный шаг менее 1 мм.
        </div>
        <div class="table-wrap" style="margin-bottom:8px">
          <table>
            <thead><tr><th>Параметр</th><th>SMD</th><th>COB</th><th>GOB</th><th>Mini LED</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Мин. шаг пикселя</strong></td>
                <td>P0.9</td><td class="td-good">P0.6</td><td>P0.9</td><td class="td-good">P0.4</td>
              </tr>
              <tr>
                <td><strong>Защита от влаги (IP)</strong></td>
                <td class="td-warn">IP40 (стандарт)</td><td class="td-good">IP65</td><td class="td-good">IP65</td><td class="td-warn">IP40</td>
              </tr>
              <tr>
                <td><strong>Механическая защита</strong></td>
                <td class="td-bad">Низкая — диоды торчат над платой, легко сбить</td>
                <td class="td-good">Высокая — кристаллы утоплены в компаунд</td>
                <td>Средняя — компаунд поверх, но SMD внизу</td>
                <td class="td-bad">Низкая — кристаллы ещё меньше, ещё хрупче</td>
              </tr>
              <tr>
                <td><strong>Ремонтопригодность</strong></td>
                <td class="td-good">Высокая — SMD-корпус перепаивается на станции</td>
                <td class="td-bad">Низкая — залитый модуль меняется целиком</td>
                <td>Средняя — компаунд срезается, SMD перепаивается</td>
                <td class="td-good">Высокая — модуль заменяется целиком</td>
              </tr>
              <tr>
                <td><strong>Угол обзора</strong></td>
                <td class="td-good">160°</td><td>150°</td><td>155°</td><td class="td-good">160°</td>
              </tr>
              <tr>
                <td><strong>Срок службы</strong></td>
                <td>60 000 ч</td><td class="td-good">100 000 ч</td><td>80 000 ч</td><td>80 000 ч</td>
              </tr>
              <tr>
                <td><strong>Типичное применение</strong></td>
                <td>Универсально: фасады, залы, аренда</td>
                <td>Интерактивные полы, прилавки, улица (без IP65 корпуса)</td>
                <td>Улица с умеренными механическими нагрузками</td>
                <td>Студии, конференц-залы, дорогие интерьеры</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="info-box info-blue" style="margin-bottom:24px;">
          <strong>Ключевой компромисс COB:</strong> COB выигрывает по сроку службы и защите, но проигрывает по ремонтопригодности. Повреждённый кабинет COB не ремонтируют на месте — меняют модуль целиком. В регионах без сервисного центра это означает простой экрана на время доставки. Для объектов с круглосуточной эксплуатацией (улица, транспортные узлы) это критичный фактор.
        </div>

        <div class="section-label">Сравнение производителей контроллеров</div>
        <div class="info-box info-blue" style="margin-bottom:16px;">
          <strong>Что сравниваем:</strong> Контроллер (sending card / видеопроцессор) — отправляющее устройство, которое формирует видеосигнал и гонит его по Ethernet на Receiving Card внутри кабинетов. Это не универсальный стандарт, а конкретные продукты конкретных производителей. Каждый вендор имеет проприетарный протокол: NovaStar, Colorlight, Linsn, Huidu — это конкурирующие экосистемы. Sending card и Receiving card <strong>одного вендора обязательно должны быть в паре</strong> — смешивать нельзя.
          <br><br>
          <strong>Refresh Rate</strong> — частота обновления матрицы диодов в Гц. При съёмке камерой на частоте ниже 1920 Гц на видео появляются тёмные горизонтальные полосы (Rolling Shutter). <strong>HDR</strong> — поддержка расширенного динамического диапазона (10–12 бит на канал вместо 8 бит).
        </div>
        <div class="table-wrap" style="margin-bottom:8px">
          <table>
            <thead>
              <tr>
                <th>Модель</th>
                <th>Производитель / сегмент</th>
                <th>Макс. пикселей</th>
                <th>Облачное управление</th>
                <th>Refresh Rate</th>
                <th>HDR</th>
                <th>Ценовой уровень</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-key">MCTRL4K</td>
                <td>NovaStar / Professional</td>
                <td>10,4 млн</td>
                <td class="td-good">VNNOX (собственное облако NovaStar)</td>
                <td class="td-good">3840 Гц</td>
                <td class="td-good">✓</td>
                <td class="td-warn">Высокий</td>
              </tr>
              <tr>
                <td class="td-key">VX1000</td>
                <td>NovaStar / Mid-Pro (All-in-One процессор)</td>
                <td>2,3 млн</td>
                <td class="td-good">VNNOX</td>
                <td>1920 Гц</td>
                <td class="td-good">✓</td>
                <td>Средний</td>
              </tr>
              <tr>
                <td class="td-key">X16</td>
                <td>Colorlight / Professional</td>
                <td>8 млн</td>
                <td>iCloud (собственное облако Colorlight)</td>
                <td class="td-good">3840 Гц</td>
                <td class="td-good">✓</td>
                <td class="td-warn">Высокий</td>
              </tr>
              <tr>
                <td class="td-key">HD-VP410</td>
                <td>Huidu / All-in-One бюджетный</td>
                <td>2,6 млн</td>
                <td class="td-good">HD Cloud</td>
                <td>1920 Гц</td>
                <td class="td-bad">—</td>
                <td class="td-good">Низкий</td>
              </tr>
              <tr>
                <td class="td-key">TS802D</td>
                <td>Linsn / Budget sending card</td>
                <td>2,3 млн</td>
                <td class="td-bad">Нет</td>
                <td class="td-bad">960 Гц</td>
                <td class="td-bad">—</td>
                <td class="td-good">Низкий</td>
              </tr>
              <tr>
                <td class="td-key">Tessera SX4</td>
                <td>Brompton Technology / Broadcast</td>
                <td>8,3 млн</td>
                <td class="td-bad">Нет (только локальная сеть)</td>
                <td class="td-good">7680 Гц</td>
                <td class="td-good">✓</td>
                <td class="td-bad">Премиум</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="info-box info-blue" style="margin-bottom:24px;">
          <strong>Почему Brompton стоит в 5–10 раз дороже Linsn при схожей ёмкости:</strong> Brompton разработан специально для broadcast и кино — его цветовой движок (Hydra) поддерживает HDR-калибровку под конкретную камеру (ARRI, RED, Sony Venice). 7680 Гц исключают любые артефакты при замедленной съёмке (Slow-mo). Linsn при 960 Гц даст полосы уже при 120 fps.
        </div>

        <div class="section-label">Матрица выбора решения по типу объекта</div>
        <div class="info-box info-blue" style="margin-bottom:16px;">
          <strong>Что сравниваем:</strong> Сводная таблица типичных задач с рекомендованными параметрами. <strong>Шаг пикселя (P)</strong> — расстояние в миллиметрах между центрами соседних пикселей. P2.5 = 2,5 мм. Чем меньше шаг — тем выше разрешение и тем дороже модуль. Правило минимальной дистанции: комфортное расстояние просмотра (в метрах) ≈ числовое значение шага пикселя. P4 = смотреть от 4 метров. <strong>IP</strong> — степень защиты корпуса от пыли и влаги (IEC 60529). IP65 = полная защита от пыли + струя воды. IP40 = защита от пыли, без защиты от воды.
        </div>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Объект / задача</th>
                <th>Шаг пикселя</th>
                <th>Технология</th>
                <th>Контроллер (производитель)</th>
                <th>Управление</th>
                <th>IP (мин.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-key">Билборд / уличный фасад</td>
                <td>P6–P10</td>
                <td>SMD Outdoor</td>
                <td>NovaStar или Linsn</td>
                <td>Асинхронный плеер + 4G / облако</td>
                <td>IP65</td>
              </tr>
              <tr>
                <td class="td-key">Аренда / концерт / ивент</td>
                <td>P2.5–P4</td>
                <td>SMD или COB</td>
                <td>Colorlight X-серия</td>
                <td>Синхронный, локальная сеть</td>
                <td>IP40–IP54</td>
              </tr>
              <tr>
                <td class="td-key">ТВ-студия / broadcast</td>
                <td>P1.5–P2.5</td>
                <td>SMD или COB</td>
                <td>Brompton или NovaStar</td>
                <td>Синхронный, локальная сеть</td>
                <td>IP30</td>
              </tr>
              <tr>
                <td class="td-key">Торговый центр / атриум</td>
                <td>P2–P4</td>
                <td>SMD Indoor</td>
                <td>NovaStar VX-серия или Huidu</td>
                <td>Асинхронный плеер + облако</td>
                <td>IP30–IP40</td>
              </tr>
              <tr>
                <td class="td-key">Стадион / периметр поля</td>
                <td>P6–P16</td>
                <td>SMD Outdoor</td>
                <td>NovaStar или Colorlight</td>
                <td>Синхронный, локальная сеть</td>
                <td>IP65</td>
              </tr>
              <tr>
                <td class="td-key">Виртуальная студия (XR / VP)</td>
                <td>P1.2–P2</td>
                <td>SMD или COB</td>
                <td>Brompton Tessera или Megapixel Helios</td>
                <td>Синхронный, локальная сеть</td>
                <td>IP30</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="info-box info-blue" style="margin-top:16px;">
          <strong>Почему для виртуальных студий (XR/VP) — только Brompton или Megapixel:</strong> В Virtual Production экран — это «живой фон» для камеры. Изображение на экране должно соответствовать цветовому профилю камеры (ACES, Rec.2020). Это требует аппаратного движка цветовой калибровки, которого нет в бюджетных контроллерах. Использовать Linsn или Huidu в XR-студии — значит получить неправильные цвета в кадре, которые не вытянет никакой грейдинг.
        </div>
    
  `
};