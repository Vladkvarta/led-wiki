const fs = require('fs');
const dbPath = 'd:\\Рабочие доки\\my soft\\led_wiki\\database.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

db.prices.psu.label_ru = "Блок питания 5V/60A 300W";
db.prices.psu.label_uk = "Блок живлення 5V/60A 300W";
delete db.prices.psu.label;

db.prices.receivingCard.label_ru = "Принимающая карта (MRV/A5S)";
db.prices.receivingCard.label_uk = "Приймаюча карта (MRV/A5S)";
delete db.prices.receivingCard.label;

db.prices.cables.dataRibbon_ru = "Шлейф данных";
db.prices.cables.dataRibbon_uk = "Шлейф даних";
db.prices.cables.power_ru = "Кабель питания";
db.prices.cables.power_uk = "Кабель живлення";

db.matrices.forEach(m => {
  m.notes_ru = m.notes;
  m.notes_uk = m.notes; // just copy for now, we'll translate some if easy
  delete m.notes;
});
// Translate notes
db.matrices[0].notes_ru = "Fine pitch, командные центры, конференц-залы";
db.matrices[1].notes_ru = "Стандарт indoor: ТРЦ, корпоративные экраны";
db.matrices[2].notes_ru = "Оптимальное соотношение цена/качество для indoor";
db.matrices[3].notes_ru = "Бюджетный indoor, залы с дистанцией 3+ м";
db.matrices[4].notes_ru = "Эконом indoor, большие залы 4+ м";
db.matrices[5].notes_ru = "Outdoor fine pitch, близкие дистанции просмотра";
db.matrices[6].notes_ru = "Наружная реклама, фасады зданий";
db.matrices[7].notes_ru = "Стандарт outdoor, улицы, парковки";
db.matrices[8].notes_ru = "Оптимум outdoor по цене, дистанция 6–25 м";
db.matrices[9].notes_ru = "Билборды, стадионы, дистанция 8–30 м";
db.matrices[10].notes_ru = "Большие outdoor, дистанция >10 м";

db.matrices[0].notes_uk = "Fine pitch, командні центри, конференц-зали";
db.matrices[1].notes_uk = "Стандарт indoor: ТРЦ, корпоративні екрани";
db.matrices[2].notes_uk = "Оптимальне співвідношення ціна/якість для indoor";
db.matrices[3].notes_uk = "Бюджетний indoor, зали з дистанцією 3+ м";
db.matrices[4].notes_uk = "Економ indoor, великі зали 4+ м";
db.matrices[5].notes_uk = "Outdoor fine pitch, близькі дистанції перегляду";
db.matrices[6].notes_uk = "Зовнішня реклама, фасади будівель";
db.matrices[7].notes_uk = "Стандарт outdoor, вулиці, парковки";
db.matrices[8].notes_uk = "Оптимум outdoor за ціною, дистанція 6–25 м";
db.matrices[9].notes_uk = "Білборди, стадіони, дистанція 8–30 м";
db.matrices[10].notes_uk = "Великі outdoor, дистанція >10 м";

db.controllers.forEach(c => {
  c.bestUse_ru = c.bestUse;
  c.bestUse_uk = c.bestUse;
  c.notes_ru = c.notes;
  c.notes_uk = c.notes;
  delete c.bestUse;
  delete c.notes;
});

// Translate controllers
db.controllers[0].bestUse_ru = "Крупные инсталляции, Broadcast";
db.controllers[0].bestUse_uk = "Великі інсталяції, Broadcast";
db.controllers[0].notes_ru = "Крупные инсталляции, broadcast. До 10.4M пикс.";
db.controllers[0].notes_uk = "Великі інсталяції, broadcast. До 10.4M пікс.";

db.controllers[1].bestUse_ru = "Средние инсталляции, ТРЦ, конференции";
db.controllers[1].bestUse_uk = "Середні інсталяції, ТРЦ, конференції";
db.controllers[1].notes_ru = "Средние инсталляции, ТРЦ, конференции. До 2.3M пикс.";
db.controllers[1].notes_uk = "Середні інсталяції, ТРЦ, конференції. До 2.3M пікс.";

db.controllers[2].bestUse_ru = "Небольшие экраны, офисы, ТРЦ";
db.controllers[2].bestUse_uk = "Невеликі екрани, офіси, ТРЦ";
db.controllers[2].notes_ru = "Небольшие экраны, офисы, ТРЦ. До 1.3M пикс.";
db.controllers[2].notes_uk = "Невеликі екрани, офіси, ТРЦ. До 1.3M пікс.";

db.controllers[3].bestUse_ru = "Сетевые рекламные экраны";
db.controllers[3].bestUse_uk = "Мережеві рекламні екрани";
db.controllers[3].notes_ru = "Cloud player. Dual-band Wi-Fi, 4G. До 1.3M пикс.";
db.controllers[3].notes_uk = "Cloud player. Dual-band Wi-Fi, 4G. До 1.3M пікс.";

db.controllers[4].bestUse_ru = "Outdoor рекламные сети, встроенный 4G";
db.controllers[4].bestUse_uk = "Outdoor рекламні мережі, вбудований 4G";
db.controllers[4].notes_ru = "Outdoor рекламные сети, 4G встроен. До 1.3M пикс.";
db.controllers[4].notes_uk = "Outdoor рекламні мережі, 4G вбудований. До 1.3M пікс.";

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log('DB updated!');
