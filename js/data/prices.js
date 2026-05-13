export const PRICE_DB = {
  defaultCurrency: 'USD',

  defaults: {
    // Стандартные расходы, которые автоматически появляются в форме:
    powerSuppliesPerSqm:      25,   // ← Блоки питания за м²
    receivingCardsPerCabinet: 18,   // ← Приёмная карта за кабинет
    cablesMiscPerSqm:         12,   // ← Кабели и комплектующие за м²
    frameIndoorPerSqm:        40,   // ← Каркас для indoor за м²
    frameOutdoorPerSqm:       70,   // ← Каркас для outdoor/аренды за м²
    installIndoorPerSqm:      45,   // ← Монтаж indoor за м²
    installOutdoorPerSqm:     80,   // ← Монтаж outdoor за м²
    deliveryDefault:         150,   // ← Доставка по умолчанию
    commissioningDefault:    250,   // ← Пуско-наладка по умолчанию
    markupDefault:            25,   // ← Наценка компании %
  }
};
